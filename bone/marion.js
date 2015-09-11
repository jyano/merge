
    bb.Ma=Bb.Marionette
    bb.Ma.IV=Bb.Ma.ItemView
    bb.Ma.CV=Bb.Ma.CollectionView
    bb.Ma.CpV=Bb.Ma.CompositeView


    Ma=bb.Ma= bb.Marionette

    bb.Ma.Ap=bb.Ma.Application
    bb.Ma.IV= bb.Ma.ItemView; bb.Ma.IV.x=bb.Ma.IV.extend
    bb.Ma.CV= bb.Ma.CollectionView; bb.Ma.CV.x=bb.Ma.CV.extend
    bb.Ma.CmV=bb.Ma.CpV= bb.Ma.CompositeView; bb.Ma.CmV.x=bb.Ma.CmV.extend
    bb.Ma.LV= bb.Ma.LayoutView; bb.Ma.LV.x=bb.Ma.LV.extend
    bb.Ma.Co=bb.Ma.Controller
    bb.Ma.Co.x=bb.Ma.Co.extend


    Ma.Bh=Ma.Behavior; Ma.Bh.x=Ma.Bh.extend
    Ma.Bhs=Ma.Behavior; Ma.Bhs.x=Ma.Bhs.extend
    Ma.aR= Ma.apRt=Ma.AppRouter; Ma.apRt.x=Ma.apRt.extend



    $.d_=function(){

        var g=G(arguments)
        d=$.d()

        g.e(function(el){d.A(el)})

        $l(d.oh())
        return d
    }
    $Ap=function(a,b,c,d){

        var ap= new bb.Ma.Ap(a,b,c,d)

        ap.aRg=function(){var ap=this,g=G(arguments),res


            if(g.S){
                return ap.addRegions({mainRegion: g.f})

            }

            else {
                return ap.addRegions.apply(ap, g)
            }


        }


        ap.mu=function(){var ap=this,g=G(arguments),res
            res=  ap.module.apply(ap, g)
            return  res || ap}

        return ap
    }

    collView=function(){

        (function(root,factory){
            // UMD wrapper

            if ( F(define)  && define.amd ) {

                define( [ 'underscore', 'backbone', 'jquery' ], factory )
            } else if ( typeof exports !== 'undefined' ) {
                // Node/CommonJS
                module.exports = factory( require('underscore' ), require( 'backbone' ), require( 'backbone' ).$ );
            } else {
                // Browser globals
                factory( root._, root.bb, ( root.jQuery || root.Zepto || root.$ ) );
            }}(
            this, function( _, bb, $ ) {
                var mDefaultModelViewConstructor = bb.View
                var kDefaultReferenceBy = "model"
                var kOptionsRequiringRerendering = [ "collection", "modelView", "modelViewOptions", "itemTemplate", "selectableModelsFilter", "sortableModelsFilter", "visibleModelsFilter", "itemTemplateFunction", "detachedRendering", "sortableOptions" ];

                var kStylesForEmptyListCaption = {
                    "background" : "transparent",
                    "border" : "none",
                    "box-shadow" : "none"
                }

                bb.CollectionView = bb.View.extend( {

                    tagName:"ul",

                    events:{
                        "mousedown li, td" : "_listItem_onMousedown",
                        "dblclick li, td" : "_listItem_onDoubleClick",
                        "click" : "_listBackground_onClick",
                        "click ul.collection-list, table.collection-list" : "_listBackground_onClick",
                        "keydown" : "_onKeydown"
                    },

                    // only used if bb.Courier is available
                    spawnMessages : {"focus" : "focus"},

                    //only used if bb.Courier is available
                    passMessages : { "*" : "." },

                    // viewOption definitions with default values.
                    initializationOptions : [
                        { "collection" : new bb.Collection() },
                        { "modelView" : null },
                        { "modelViewOptions" : {} },
                        { "itemTemplate" : null },
                        { "itemTemplateFunction" : null },
                        { "selectable" : true },
                        { "clickToSelect" : true },
                        { "selectableModelsFilter" : null },
                        { "visibleModelsFilter" : null },
                        { "sortableModelsFilter" : null },
                        { "selectMultiple" : false },
                        { "clickToToggle" : false },
                        { "processKeyEvents" : true },
                        { "sortable" : false },
                        { "sortableOptions" : null },
                        { "detachedRendering" : false },
                        { "emptyListCaption" : null }],

                    initialize : function( options ) {
                        bb.ViewOptions.add( this, "initializationOptions" ); // setup the ViewOptions functionality.
                        this.setOptions( options ); // and make use of any provided options

                        this._hasBeenRendered = false;

                        if( this._isBackboneCourierAvailable() ) {
                            bb.Courier.add( this )}

                        this.$el.data( "view", this ); // needed for connected sortable lists
                        this.$el.addClass( "collection-list" );
                        if( this.selectable ) this.$el.addClass( "selectable" );

                        if( this.processKeyEvents )
                            this.$el.attr( "tabindex", 0 ); // so we get keyboard events

                        this.selectedItems = [];

                        this._updateItemTemplate();

                        if( this.collection )
                            this._registerCollectionEvents();

                        this.viewManager = new ChildViewContainer();
                    },

                    onOptionsChanged : function( changedOptions, originalOptions ) {
                        var rerender = false;
                        var _this = this;
                        _.each( _.keys( changedOptions ), function( changedOptionKey ) {
                            var newVal = changedOptions[ changedOptionKey ];
                            var oldVal = originalOptions[ changedOptionKey ];
                            switch( changedOptionKey ) {
                                case "collection" :
                                    if ( newVal !== oldVal ) {
                                        _this.stopListening( oldVal );
                                        _this._registerCollectionEvents();
                                    }
                                    break;
                                case "selectMultiple":
                                    if( ! newVal && _this.selectedItems.length > 1 )
                                        _this.setSelectedModel( _.first( _this.selectedItems ), { by : "cid" } );
                                    break;
                                case "selectable" :
                                    if( ! newVal && _this.selectedItems.length > 0 )
                                        _this.setSelectedModels( [] );
                                    break;
                                case "selectableModelsFilter" :
                                    if( newVal && _.isFunction( newVal ) )
                                        _this._validateSelection();
                                    break;
                                case "itemTemplate" :
                                    _this._updateItemTemplate();
                                    break;
                                case "processKeyEvents" :
                                    if( newVal ) _this.$el.attr( "tabindex", 0 ); // so we get keyboard events
                                    break;
                                case "modelView" :
                                    //need to remove all old view instances
                                    _this.viewManager.each( function( view ) {
                                        _this.viewManager.remove( view );
                                        // destroy the View itself
                                        view.remove();
                                    } );
                                    break;
                            }
                            if( _.contains( kOptionsRequiringRerendering, changedOptionKey ) ) rerender = true;
                        });
                        if( this._hasBeenRendered && rerender ) {
                            this.render(); // Rerender the view if the rerender flag has been set.
                        }
                    },

                    setOption : function( optionName, optionValue ) { // now is mearly a wrapper around backbone.viewOptions' setOptions()
                        var optionHash = {};
                        optionHash[ optionName ] = optionValue;
                        this.setOptions( optionHash );
                    },

                    getSelectedModel : function( options ) {
                        return _.first( this.getSelectedModels( options ) );
                    },

                    getSelectedModels : function ( options ) {
                        var _this = this;

                        options = _.extend( {}, {
                            by : kDefaultReferenceBy
                        }, options );

                        var referenceBy = options.by;
                        var items = [];

                        switch( referenceBy ) {
                            case "id" :
                                _.each( this.selectedItems, function ( item ) {
                                    items.push( _this.collection.get( item ).id );
                                } );
                                break;
                            case "cid" :
                                items = items.concat( this.selectedItems );
                                break;
                            case "offset" :
                                var curLineNumber = 0;

                                var itemElements = this._getVisibleItemEls();

                                itemElements.each( function() {
                                    var thisItemEl = $( this );
                                    if( thisItemEl.is( ".selected" ) )
                                        items.push( curLineNumber );
                                    curLineNumber++;
                                } );
                                break;
                            case "model" :
                                _.each( this.selectedItems, function ( item ) {
                                    items.push( _this.collection.get( item ) );
                                } );
                                break;
                            case "view" :
                                _.each( this.selectedItems, function ( item ) {
                                    items.push( _this.viewManager.findByModel( _this.collection.get( item ) ) );
                                } );
                                break;
                        }

                        return items;

                    },

                    setSelectedModels : function( newSelectedItems, options ) {
                        if( ! _.isArray( newSelectedItems ) ) throw "Invalid parameter value";
                        if( ! this.selectable && newSelectedItems.length > 0 ) return; // used to throw error, but there are some circumstances in which a list can be selectable at times and not at others, don't want to have to worry about catching errors

                        options = _.extend( {}, {
                            silent : false,
                            by : kDefaultReferenceBy
                        }, options );

                        var referenceBy = options.by;
                        var newSelectedCids = [];

                        switch( referenceBy ) {
                            case "cid" :
                                newSelectedCids = newSelectedItems;
                                break;
                            case "id" :
                                this.collection.each( function( thisModel ) {
                                    if( _.contains( newSelectedItems, thisModel.id ) ) newSelectedCids.push( thisModel.cid );
                                } );
                                break;
                            case "model" :
                                newSelectedCids = _.pluck( newSelectedItems, "cid" );
                                break;
                            case "view" :
                                _.each( newSelectedItems, function( item ) {
                                    newSelectedCids.push( item.model.cid );
                                } );
                                break;
                            case "offset" :
                                var curLineNumber = 0;
                                var selectedItems = [];

                                var itemElements = this._getVisibleItemEls();
                                itemElements.each( function() {
                                    var thisItemEl = $( this );
                                    if( _.contains( newSelectedItems, curLineNumber ) )
                                        newSelectedCids.push( thisItemEl.attr( "data-model-cid" ) );
                                    curLineNumber++;
                                } );
                                break;
                        }

                        var oldSelectedModels = this.getSelectedModels();
                        var oldSelectedCids = _.clone( this.selectedItems );

                        this.selectedItems = this._convertStringsToInts( newSelectedCids );
                        this._validateSelection();

                        var newSelectedModels = this.getSelectedModels();

                        if( ! this._containSameElements( oldSelectedCids, this.selectedItems ) )
                        {
                            this._addSelectedClassToSelectedItems( oldSelectedCids );

                            if( ! options.silent )
                            {
                                this.trigger( "selectionChanged", newSelectedModels, oldSelectedModels );
                                if( this._isBackboneCourierAvailable() ) {
                                    this.spawn( "selectionChanged", {
                                        selectedModels : newSelectedModels,
                                        oldSelectedModels : oldSelectedModels
                                    } );
                                }
                            }

                            this.updateDependentControls();
                        }
                    },

                    setSelectedModel : function( newSelectedItem, options ) {
                        if( ! newSelectedItem && newSelectedItem !== 0 )
                            this.setSelectedModels( [], options );
                        else
                            this.setSelectedModels( [ newSelectedItem ], options );
                    },

                    render : function(){
                        var _this = this;

                        this._hasBeenRendered = true;

                        if( this.selectable ) this._saveSelection();

                        var modelViewContainerEl;

                        // If collection view element is a table and it has a tbody
                        // within it, render the model views inside of the tbody
                        modelViewContainerEl = this._getContainerEl();

                        var oldViewManager = this.viewManager;
                        this.viewManager = new ChildViewContainer();

                        // detach each of our subviews that we have already created to represent models
                        // in the collection. We are going to re-use the ones that represent models that
                        // are still here, instead of creating new ones, so that we don't loose state
                        // information in the views.
                        oldViewManager.each( function( thisModelView ) {
                            // to boost performance, only detach those views that will be sticking around.
                            // we won't need the other ones later, so no need to detach them individually.
                            if( _this.collection.get( thisModelView.model.cid ) )
                                thisModelView.$el.detach();
                            else
                                thisModelView.remove();
                        } );

                        modelViewContainerEl.empty();
                        var fragmentContainer;

                        if( this.detachedRendering )
                            fragmentContainer = document.createDocumentFragment();

                        this.collection.each( function( thisModel ) {
                            var thisModelView = oldViewManager.findByModelCid( thisModel.cid );
                            if( _.isUndefined( thisModelView ) ) {
                                // if the model view has not already been created on a
                                // previous render then create and initialize it now.
                                thisModelView = this._createNewModelView( thisModel, this._getModelViewOptions( thisModel ) );
                            }

                            this._insertAndRenderModelView( thisModelView, fragmentContainer || modelViewContainerEl );
                        }, this );

                        if( this.detachedRendering )
                            modelViewContainerEl.append( fragmentContainer );

                        if( this.sortable )
                        {
                            var sortableOptions = _.extend( {
                                axis: "y",
                                distance: 10,
                                forcePlaceholderSize : true,
                                start : _.bind( this._sortStart, this ),
                                change : _.bind( this._sortChange, this ),
                                stop : _.bind( this._sortStop, this ),
                                receive : _.bind( this._receive, this ),
                                over : _.bind( this._over, this )
                            }, _.result( this, "sortableOptions" ) );

                            if( _this._isRenderedAsTable() ) {
                                sortableOptions.items = "> tbody > tr:not(.not-sortable)";
                            }
                            else if( _this._isRenderedAsList() ) {
                                sortableOptions.items = "> li:not(.not-sortable)";
                            }

                            this.$el = this.$el.sortable( sortableOptions );
                        }

                        this._showEmptyListCaptionIfAppropriate();

                        this.trigger( "render" );
                        if( this._isBackboneCourierAvailable() )
                            this.spawn( "render" );

                        if( this.selectable ) {
                            this._restoreSelection();
                            this.updateDependentControls();
                        }

                        if( _.isFunction( this.onAfterRender ) )
                            this.onAfterRender();
                    },

                    _showEmptyListCaptionIfAppropriate : function ( ) {
                        if( this.emptyListCaption ) {
                            var visibleEls = this._getVisibleItemEls();

                            if( visibleEls.length === 0 ) {
                                var emptyListString;

                                if( _.isFunction( this.emptyListCaption ) )
                                    emptyListString = this.emptyListCaption();
                                else
                                    emptyListString = this.emptyListCaption;

                                var $emptyCaptionEl;
                                var $varEl = $( "<var class='empty-list-caption'>" + emptyListString + "</var>" );

                                //need to wrap the empty caption to make it fit the rendered list structure (either with an li or a tr td)
                                if( this._isRenderedAsList() )
                                    $emptyListCaptionEl = $varEl.wrapAll( "<li class='not-sortable'></li>" ).parent().css( kStylesForEmptyListCaption );
                                else
                                    $emptyListCaptionEl = $varEl.wrapAll( "<tr class='not-sortable'><td></td></tr>" ).parent().parent().css( kStylesForEmptyListCaption );

                                this._getContainerEl().append( $emptyListCaptionEl );
                            }
                        }
                    },

                    _removeEmptyListCaption : function( ) {
                        if( this._isRenderedAsList() )
                            this._getContainerEl().find( "> li > var.empty-list-caption" ).parent().remove();
                        else
                            this._getContainerEl().find( "> tr > td > var.empty-list-caption" ).parent().parent().remove();
                    },

                    // Render a single model view in container object "parentElOrDocumentFragment", which is either
                    // a documentFragment or a jquery object. optional arg atIndex is not support for document fragments.
                    _insertAndRenderModelView : function( modelView, parentElOrDocumentFragment, atIndex ) {
                        var thisModelViewWrapped = this._wrapModelView( modelView );

                        if( parentElOrDocumentFragment.nodeType === 11 ) // if we are inserting into a document fragment, we need to use the DOM appendChild met
                            parentElOrDocumentFragment.appendChild( thisModelViewWrapped.get( 0 ) );
                        else {
                            if( ! _.isUndefined( atIndex ) && atIndex >= 0 && atIndex < parentElOrDocumentFragment.children().length - 1 )
                            // note this.collection.length might be greater than parentElOrDocumentFragment.children().length here
                                parentElOrDocumentFragment.children().eq( atIndex ).before( thisModelViewWrapped );
                            else
                                parentElOrDocumentFragment.append( thisModelViewWrapped );
                        }

                        // we have to render the modelView after it has been put in context, as opposed to in the
                        // initialize function of the modelView, because some rendering might be dependent on
                        // the modelView's context in the DOM tree. For example, if the modelView stretch()'s itself,
                        // it must be in full context in the DOM tree or else the stretch will not behave as intended.
                        var renderResult = modelView.render();

                        // return false from the view's render function to hide this item
                        if( renderResult === false ) {
                            thisModelViewWrapped.hide();
                            thisModelViewWrapped.addClass( "not-visible" );
                        }

                        var hideThisModelView = false;
                        if( _.isFunction( this.visibleModelsFilter ) ) {
                            hideThisModelView = ! this.visibleModelsFilter( modelView.model );
                            if( hideThisModelView ) {
                                if( thisModelViewWrapped.children().length === 1 )
                                    thisModelViewWrapped.hide();
                                else modelView.$el.hide();

                                thisModelViewWrapped.addClass( "not-visible" );
                            }
                        }

                        if( ! hideThisModelView && this.emptyListCaption ) this._removeEmptyListCaption();

                        this.viewManager.add( modelView );
                    },

                    updateDependentControls : function() {
                        this.trigger( "updateDependentControls", this.getSelectedModels() );
                        if( this._isBackboneCourierAvailable() ) {
                            this.spawn( "updateDependentControls", {
                                selectedModels : this.getSelectedModels()
                            } );
                        }
                    },

                    // Override `Backbone.View.remove` to also destroy all Views in `viewManager`
                    remove : function() {
                        this.viewManager.each( function( view ) {
                            view.remove();
                        } );

                        bb.View.prototype.remove.apply( this, arguments );
                    },

                    // A met to remove the view relating to model.
                    _removeModelView : function( model ) {
                        var viewManager = this.viewManager;
                        var view = viewManager.findByModelCid( model.cid );

                        if ( this.selectable ) this._saveSelection();

                        viewManager.remove( view ); // Remove the view from the viewManager
                        view.remove(); // Remove the view from the DOM
                        this._getContainerEl().children( "[data-model-cid=" + model.cid + "]" ).remove(); // Remove the wrapper from the DOM

                        if ( this.selectable ) this._restoreSelection();

                        this._showEmptyListCaptionIfAppropriate();
                    },

                    _validateSelectionAndRender : function() {
                        this._validateSelection();
                        this.render();
                    },

                    _registerCollectionEvents : function() {
                        this.listenTo( this.collection, "add", function( model ) {
                            if( this._hasBeenRendered ) {
                                var modelView = this._createNewModelView( model, this._getModelViewOptions( model ) );
                                this._insertAndRenderModelView( modelView, this._getContainerEl(), this.collection.indexOf( model ) );
                            }

                            if( this._isBackboneCourierAvailable() )
                                this.spawn( "add" );
                        } );

                        this.listenTo( this.collection, "remove", function( model ) {
                            if( this._hasBeenRendered )
                                this._removeModelView( model );

                            if( this._isBackboneCourierAvailable() )
                                this.spawn( "remove" );
                        } );

                        this.listenTo( this.collection, "reset", function() {
                            if( this._hasBeenRendered ) this.render();
                            if( this._isBackboneCourierAvailable() )
                                this.spawn( "reset" );
                        } );

                        // we should not be listening to change events on the model as a default behavior. the models
                        // should be responsible for re-rendering themselves if necessary, and if the collection does
                        // also need to re-render as a result of a model change, this should be handled by overriding
                        // this met. by default the collection view should not re-render in response to model changes
                        // this.listenTo( this.collection, "change", function( model ) {
                        // 	if( this._hasBeenRendered ) this.viewManager.findByModel( model ).render();
                        // 	if( this._isBackboneCourierAvailable() )
                        // 		this.spawn( "change", { model : model } );
                        // } );

                        this.listenTo( this.collection, "sort", function( collection, options ) {
                            if( this._hasBeenRendered && options.add !== true ) this.render();
                            if( this._isBackboneCourierAvailable() )
                                this.spawn( "sort" );
                        } );
                    },

                    _getContainerEl : function() {
                        if ( this._isRenderedAsTable() ) {
                            // not all tables have a tbody, so we test
                            var tbody = this.$el.find( "> tbody" );
                            if ( tbody.length > 0 )
                                return tbody;
                        }
                        return this.$el;
                    },

                    _getClickedItemId : function( theEvent ) {
                        var clickedItemId = null;

                        // important to use currentTarget as opposed to target, since we could be bubg
                        // an event that took place within another collectionList
                        var clickedItemEl = $( theEvent.currentTarget );
                        if( clickedItemEl.closest( ".collection-list" ).get(0) !== this.$el.get(0) ) return;

                        // determine which list item was clicked. If we clicked in the blank area
                        // underneath all the elements, we want to know that too, since in this
                        // case we will want to deselect all elements. so check to see if the clicked
                        // DOM element is the list itself to find that out.
                        var clickedItem = clickedItemEl.closest( "[data-model-cid]" );
                        if( clickedItem.length > 0 )
                        {
                            clickedItemId = clickedItem.attr( "data-model-cid" );
                            if( $.isNumeric( clickedItemId ) ) clickedItemId = parseInt( clickedItemId, 10 );
                        }

                        return clickedItemId;
                    },

                    _updateItemTemplate : function() {
                        var itemTemplateHtml;
                        if( this.itemTemplate )
                        {
                            if( $( this.itemTemplate ).length === 0 )
                                throw "Could not find item template from selector: " + this.itemTemplate;

                            itemTemplateHtml = $( this.itemTemplate ).html();
                        }
                        else
                            itemTemplateHtml = this.$( ".item-template" ).html();

                        if( itemTemplateHtml ) this.itemTemplateFunction = _.template( itemTemplateHtml );

                    },

                    _validateSelection : function() {
                        // note can't use the collection's proxy to underscore because "cid" is not an attribute,
                        // but an element of the model object itself.
                        var modelReferenceIds = _.pluck( this.collection.models, "cid" );
                        this.selectedItems = _.intersection( modelReferenceIds, this.selectedItems );

                        if( _.isFunction( this.selectableModelsFilter ) )
                        {
                            this.selectedItems = _.filter( this.selectedItems, function( thisItemId ) {
                                return this.selectableModelsFilter.call( this, this.collection.get( thisItemId ) );
                            }, this );
                        }
                    },

                    _saveSelection : function() {
                        // save the current selection. use restoreSelection() to restore the selection to the state it was in the last time saveSelection() was called.
                        if( ! this.selectable ) throw "Attempt to save selection on non-selectable list";
                        this.savedSelection = {
                            items : _.clone( this.selectedItems ),
                            offset : this.getSelectedModel( { by : "offset" } )
                        };
                    },

                    _restoreSelection : function() {
                        if( ! this.savedSelection ) throw "Attempt to restore selection but no selection has been saved!";

                        // reset selectedItems to empty so that we "redraw" all "selected" classes
                        // when we set our new selection. We do this because it is likely that our
                        // contents have been refreshed, and we have thus lost all old "selected" classes.
                        this.setSelectedModels( [], { silent : true } );

                        if( this.savedSelection.items.length > 0 )
                        {
                            // first try to restore the old selected items using their reference ids.
                            this.setSelectedModels( this.savedSelection.items, { by : "cid", silent : true } );

                            // all the items with the saved reference ids have been rmd from the list.
                            // ok. try to restore the selection based on the offset that used to be selected.
                            // this is the expected behavior after a item is deleted from a list (i.e. select
                            // the line that immediately follows the deleted line).
                            if( this.selectedItems.length === 0 )
                                this.setSelectedModel( this.savedSelection.offset, { by : "offset" } );

                            // Trigger a selection changed if the previously selected items were not all found
                            if (this.selectedItems.length !== this.savedSelection.items.length)
                            {
                                this.trigger( "selectionChanged", this.getSelectedModels(), [] );
                                if( this._isBackboneCourierAvailable() ) {
                                    this.spawn( "selectionChanged", {
                                        selectedModels : this.getSelectedModels(),
                                        oldSelectedModels : []
                                    } );
                                }
                            }
                        }

                        delete this.savedSelection;
                    },

                    _addSelectedClassToSelectedItems : function( oldItemsIdsWithSelectedClass ) {
                        if( _.isUndefined( oldItemsIdsWithSelectedClass ) ) oldItemsIdsWithSelectedClass = [];

                        // oldItemsIdsWithSelectedClass is used for optimization purposes only. If this info is supplied then we
                        // only have to add / remove the "selected" class from those items that "selected" state has changed.

                        var itemsIdsFromWhichSelectedClassNeedsToBeRemoved = oldItemsIdsWithSelectedClass;
                        itemsIdsFromWhichSelectedClassNeedsToBeRemoved = _.without( itemsIdsFromWhichSelectedClassNeedsToBeRemoved, this.selectedItems );

                        _.each( itemsIdsFromWhichSelectedClassNeedsToBeRemoved, function( thisItemId ) {
                            this._getContainerEl().find( "[data-model-cid=" + thisItemId + "]" ).removeClass( "selected" );
                        }, this );

                        var itemsIdsFromWhichSelectedClassNeedsToBeAdded = this.selectedItems;
                        itemsIdsFromWhichSelectedClassNeedsToBeAdded = _.without( itemsIdsFromWhichSelectedClassNeedsToBeAdded, oldItemsIdsWithSelectedClass );

                        _.each( itemsIdsFromWhichSelectedClassNeedsToBeAdded, function( thisItemId ) {
                            this._getContainerEl().find( "[data-model-cid=" + thisItemId + "]" ).addClass( "selected" );
                        }, this );
                    },

                    _reorderCollectionBasedOnHTML : function() {
                        var _this = this;

                        this._getContainerEl().children().each( function() {
                            var thisModelCid = $( this ).attr( "data-model-cid" );

                            if( thisModelCid )
                            {
                                // remove the current model and then add it back (at the end of the collection).
                                // When we are done looping through all models, they will be in the correct order.
                                var thisModel = _this.collection.get( thisModelCid );
                                if( thisModel )
                                {
                                    _this.collection.remove( thisModel, { silent : true } );
                                    _this.collection.add( thisModel, { silent : true, sort : ! _this.collection.comparator } );
                                }
                            }
                        } );

                        this.collection.trigger( "reorder" );

                        if( this._isBackboneCourierAvailable() ) this.spawn( "reorder" );

                        if( this.collection.comparator ) this.collection.sort();

                    },

                    _getModelViewConstructor : function( thisModel ) {
                        return this.modelView || mDefaultModelViewConstructor;
                    },

                    _getModelViewOptions : function( thisModel ) {
                        return _.extend( { model : thisModel }, this.modelViewOptions );
                    },

                    _createNewModelView : function( model, modelViewOptions ) {
                        var modelViewConstructor = this._getModelViewConstructor( model );
                        if( _.isUndefined( modelViewConstructor ) ) throw "Could not find modelView constructor for model";

                        var newModelView = new( modelViewConstructor )( modelViewOptions );
                        newModelView.collectionListView = this;

                        return newModelView;
                    },

                    _wrapModelView : function( modelView ) {
                        var _this = this;

                        // we use items client ids as opposed to real ids, since we may not have a representation
                        // of these models on the server
                        var wrappedModelView;

                        if( this._isRenderedAsTable() ) {
                            // if we are rendering the collection in a table, the template $el is a tr so we just need to set the data-model-cid
                            wrappedModelView = modelView.$el.attr( "data-model-cid", modelView.model.cid );
                        }
                        else if( this._isRenderedAsList() ) {
                            // if we are rendering the collection in a list, we need wrap each item in an <li></li> (if its not already an <li>)
                            // and set the data-model-cid
                            if( modelView.$el.prop( "tagName" ).toLowerCase() === "li" ) {
                                wrappedModelView = modelView.$el.attr( "data-model-cid", modelView.model.cid );
                            } else {
                                wrappedModelView = modelView.$el.wrapAll( "<li data-model-cid='" + modelView.model.cid + "'></li>" ).parent();
                            }
                        }

                        if( _.isFunction( this.sortableModelsFilter ) )
                            if( ! this.sortableModelsFilter.call( _this, modelView.model ) )
                                wrappedModelView.addClass( "not-sortable" );

                        if( _.isFunction( this.selectableModelsFilter ) )
                            if( ! this.selectableModelsFilter.call( _this, modelView.model ) )
                                wrappedModelView.addClass( "not-selectable" );

                        return wrappedModelView;
                    },

                    _convertStringsToInts : function( theArray ) {
                        return _.map( theArray, function( thisEl ) {
                            if( ! _.isString( thisEl ) ) return thisEl;
                            var thisElAsNumber = parseInt( thisEl, 10 );
                            return( thisElAsNumber == thisEl ? thisElAsNumber : thisEl );
                        } );
                    },

                    _containSameElements : function( arrayA, arrayB ) {
                        if( arrayA.length != arrayB.length ) return false;
                        var intersectionSize = _.intersection( arrayA, arrayB ).length;
                        return intersectionSize == arrayA.length; // and must also equal arrayB.length, since arrayA.length == arrayB.length
                    },

                    _isRenderedAsTable : function() {
                        return this.$el.prop( "tagName" ).toLowerCase() === "table";
                    },

                    _isRenderedAsList : function() {
                        return ! this._isRenderedAsTable();
                    },

                    // Returns the wrapper HTML element for each visible modelView.
                    // When rendering in a table context, the returned elements are the $el of each modelView.
                    // When rendering in a list context,
                    //   If the $el of the modelView is an <li>, the returned elements are the $el of each modelView.
                    //   Otherwise, the returned elements are the <li>'s the collectionView wrapped around each modelView $el.
                    _getVisibleItemEls : function() {
                        var itemElements = [];
                        itemElements = this._getContainerEl().find( "> [data-model-cid]:not(.not-visible)" );

                        return itemElements;
                    },

                    _charCodes : {
                        upArrow : 38,
                        downArrow : 40
                    },

                    _isBackboneCourierAvailable : function() {
                        return !_.isUndefined( Backbone.Courier );
                    },

                    _sortStart : function( event, ui ) {
                        var modelBeingSorted = this.collection.get( ui.item.attr( "data-model-cid" ) );
                        this.trigger( "sortStart", modelBeingSorted );
                        if( this._isBackboneCourierAvailable() )
                            this.spawn( "sortStart", { modelBeingSorted : modelBeingSorted } );
                    },

                    _sortChange : function( event, ui ) {
                        var modelBeingSorted = this.collection.get( ui.item.attr( "data-model-cid" ) );
                        this.trigger( "sortChange", modelBeingSorted );
                        if( this._isBackboneCourierAvailable() )
                            this.spawn( "sortChange", { modelBeingSorted : modelBeingSorted } );
                    },

                    _sortStop : function( event, ui ) {
                        var modelBeingSorted = this.collection.get( ui.item.attr( "data-model-cid" ) );
                        var modelViewContainerEl = this._getContainerEl();
                        var newIndex = modelViewContainerEl.children().index( ui.item );

                        if( newIndex == -1 ) {
                            // the element was rmd from this list. can happen if this sortable is connected
                            // to another sortable, and the item was dropped into the other sortable.
                            this.collection.remove( modelBeingSorted );
                        }

                        this._reorderCollectionBasedOnHTML();
                        this.updateDependentControls();
                        this.trigger( "sortStop", modelBeingSorted, newIndex );
                        if( this._isBackboneCourierAvailable() )
                            this.spawn( "sortStop", { modelBeingSorted : modelBeingSorted, newIndex : newIndex } );
                    },

                    _receive : function( event, ui ) {
                        var senderListEl = ui.sender;
                        var senderCollectionListView = senderListEl.data( "view" );
                        if( ! senderCollectionListView || ! senderCollectionListView.collection ) return;

                        var newIndex = this._getContainerEl().children().index( ui.item );
                        var modelReceived = senderCollectionListView.collection.get( ui.item.attr( "data-model-cid" ) );
                        senderCollectionListView.collection.remove( modelReceived );
                        this.collection.add( modelReceived, { at : newIndex } );
                        modelReceived.collection = this.collection; // otherwise will not get properly set, since modelReceived.collection might already have a value.
                        this.setSelectedModel( modelReceived );
                    },

                    _over : function( event, ui ) {
                        // when an item is being dragged into the sortable,
                        // hide the empty list caption if it exists
                        this._getContainerEl().find( "> var.empty-list-caption" ).hide();
                    },

                    _onKeydown : function( event ) {
                        if( ! this.processKeyEvents ) return true;

                        var trap = false;

                        if( this.getSelectedModels( { by : "offset" } ).length == 1 )
                        {
                            // need to trap down and up arrows or else the browser
                            // will end up scrolling a autoscroll div.

                            var currentOffset = this.getSelectedModel( { by : "offset" } );
                            if( event.which === this._charCodes.upArrow && currentOffset !== 0 )
                            {
                                this.setSelectedModel( currentOffset - 1, { by : "offset" } );
                                trap = true;
                            }
                            else if( event.which === this._charCodes.downArrow && currentOffset !== this.collection.length - 1 )
                            {
                                this.setSelectedModel( currentOffset + 1, { by : "offset" } );
                                trap = true;
                            }
                        }

                        return ! trap;
                    },

                    _listItem_onMousedown : function( theEvent ) {
                        if( ! this.selectable || ! this.clickToSelect ) return;

                        var clickedItemId = this._getClickedItemId( theEvent );

                        if( clickedItemId )
                        {
                            // Exit if an unselectable item was clicked
                            if( _.isFunction( this.selectableModelsFilter ) &&
                                ! this.selectableModelsFilter.call( this, this.collection.get( clickedItemId ) ) )
                            {
                                return;
                            }

                            // a selectable list item was clicked
                            if( this.selectMultiple && theEvent.shiftKey )
                            {
                                var firstSelectedItemIndex = -1;

                                if( this.selectedItems.length > 0 )
                                {
                                    this.collection.find( function( thisItemModel ) {
                                        firstSelectedItemIndex++;

                                        // exit when we find our first selected element
                                        return _.contains( this.selectedItems, thisItemModel.cid );
                                    }, this );
                                }

                                var clickedItemIndex = -1;
                                this.collection.find( function( thisItemModel ) {
                                    clickedItemIndex++;

                                    // exit when we find the clicked element
                                    return thisItemModel.cid == clickedItemId;
                                }, this );

                                var shiftKeyRootSelectedItemIndex = firstSelectedItemIndex == -1 ? clickedItemIndex : firstSelectedItemIndex;
                                var minSelectedItemIndex = Math.min( clickedItemIndex, shiftKeyRootSelectedItemIndex );
                                var maxSelectedItemIndex = Math.max( clickedItemIndex, shiftKeyRootSelectedItemIndex );

                                var newSelectedItems = [];
                                for( var thisIndex = minSelectedItemIndex; thisIndex <= maxSelectedItemIndex; thisIndex ++ )
                                    newSelectedItems.push( this.collection.at( thisIndex ).cid );
                                this.setSelectedModels( newSelectedItems, { by : "cid" } );

                                // shift clicking will usually highlight selectable text, which we do not want.
                                // this is a cross browser (hopefully) snippet that deselects all text selection.
                                if( document.selection && document.selection.empty )
                                    document.selection.empty();
                                else if(window.getSelection) {
                                    var sel = window.getSelection();
                                    if( sel && sel.removeAllRanges )
                                        sel.removeAllRanges();
                                }
                            }
                            else if( this.selectMultiple && ( this.clickToToggle || theEvent.metaKey ) )
                            {
                                if( _.contains( this.selectedItems, clickedItemId ) )
                                    this.setSelectedModels( _.without( this.selectedItems, clickedItemId ), { by : "cid" } );
                                else this.setSelectedModels( _.union( this.selectedItems, clickedItemId ), { by : "cid" } );
                            }
                            else
                                this.setSelectedModels( [ clickedItemId ], { by : "cid" } );
                        }
                        else
                        // the blank area of the list was clicked
                            this.setSelectedModels( [] );

                    },

                    _listItem_onDoubleClick : function( theEvent ) {
                        var clickedItemId = this._getClickedItemId( theEvent );

                        if( clickedItemId )
                        {
                            var clickedModel = this.collection.get( clickedItemId );
                            this.trigger( "doubleClick", clickedModel );
                            if( this._isBackboneCourierAvailable() )
                                this.spawn( "doubleClick", { clickedModel : clickedModel } );
                        }
                    },

                    _listBackground_onClick : function( theEvent ) {
                        if( ! this.selectable ) return;
                        if( ! $( theEvent.target ).is( ".collection-list" ) ) return;

                        this.setSelectedModels( [] );
                    }

                }, {
                    setDefaultModelViewConstructor : function( theConstructor ) {
                        mDefaultModelViewConstructor = theConstructor;
                    }
                });

                // Backbone.ViewOptions
                // --------------------
                // v0.2.0
                //
                // Copyright (c)2014 Rotunda Software
                //
                // https://github.com/rotundasoftware/backbone.viewOptions

                // Backbone.ViewOptions
                // --------------------
                //
                // An plugin to declare and get/set options on views.

                /*
                 * bb.ViewOptions, v0.2
                 * Copyright (c)2014 Rotunda Software, LLC.
                 * Distributed under MIT license
                 * http://github.com/rotundasoftware/backbone.viewOptions
                 */

                bb.ViewOptions = {};

                bb.ViewOptions.add = function( view, optionsDeclarationsProperty ) {
                    if( _.isUndefined( optionsDeclarationsProperty ) ) optionsDeclarationsProperty = "options";

                    // ****************** Public mets added to view ******************

                    view.setOptions = function( options ) {
                        var _this = this;
                        var optionsThatWereChanged = {};
                        var optionsThatWereChangedOriginalValues = {};

                        var optionDeclarations = _.result( this, optionsDeclarationsProperty );

                        if( ! _.isUndefined( optionDeclarations ) ) {
                            var normalizedOptionDeclarations = _normalizeOptionDeclarations( optionDeclarations );

                            _.each( normalizedOptionDeclarations, function( thisOptionDeclaration ) {
                                thisOptionName = thisOptionDeclaration.name;
                                thisOptionRequired = thisOptionDeclaration.required;
                                thisOptionDefaultValue = thisOptionDeclaration.defaultValue;

                                if( thisOptionRequired ) {
                                    // note we do not throw an error if a required option is not supplied, but it is
                                    // found on the object itself (due to a prior call of view.setOptions, most likely)
                                    if( ! options ||
                                        ( ( ! _.contains( _.keys( options ), thisOptionName ) && _.isUndefined( _this[ thisOptionName ] ) ) ) ||
                                        _.isUndefined( options[ thisOptionName ] ) )
                                        throw new Error( "Required option \"" + thisOptionName + "\" was not supplied." );
                                }

                                // atch the supplied value of this option, or the appropriate default value, to the view object
                                if( options && thisOptionName in options ) {
                                    // if this option already exists on the view, make a note that we will be changing it
                                    if( ! _.isUndefined( _this[ thisOptionName ] ) ) {
                                        optionsThatWereChangedOriginalValues[ thisOptionName ] = _this[ thisOptionName ];
                                        optionsThatWereChanged[ thisOptionName ] = options[ thisOptionName ];
                                    }
                                    _this[ thisOptionName ] = options[ thisOptionName ];
                                    // note we do NOT delete the option off the options object here so that
                                    // multiple views can be passed the same options object without issue.
                                }
                                else if( ! _.isUndefined( thisOptionDefaultValue ) && _.isUndefined( _this[ thisOptionName ] ) ) {
                                    // note defaults do not write over any existing properties on the view itself.
                                    _this[ thisOptionName ] = thisOptionDefaultValue;
                                }
                            } );
                        }

                        if( _.keys( optionsThatWereChanged ).length > 0 ) {
                            if( _.isFunction( _this.onOptionsChanged ) )
                                _this.onOptionsChanged( optionsThatWereChanged, optionsThatWereChangedOriginalValues );
                            else if( _.isFunction( _this._onOptionsChanged ) )
                                _this._onOptionsChanged( optionsThatWereChanged, optionsThatWereChangedOriginalValues );
                        }
                    };

                    view.getOptions = function() {
                        var optionDeclarations = _.result( this, optionsDeclarationsProperty );
                        if( _.isUndefined( optionDeclarations ) ) return [];

                        var normalizedOptionDeclarations = _normalizeOptionDeclarations( optionDeclarations );
                        var optionsNames = _.pluck( normalizedOptionDeclarations, "name" );

                        return _.pick( this, optionsNames );
                    };
                };

                // ****************** Private Utility Functions ******************

                function _normalizeOptionDeclarations( optionDeclarations ) {
                    // convert our short-hand option syntax (with exclamation marks, etc.)
                    // to a simple array of standard option declaration objects.
                    var normalizedOptionDeclarations = [];

                    if( ! _.isArray( optionDeclarations ) )  {
                        throw new Error( "Option declarations must be an array." );
                    }

                    _.each( optionDeclarations, function( thisOptionDeclaration ) {
                        var thisOptionName, thisOptionRequired, thisOptionDefaultValue;

                        thisOptionRequired = false;
                        thisOptionDefaultValue = undefined;

                        if( _.isString( thisOptionDeclaration ) )
                            thisOptionName = thisOptionDeclaration;
                        else if( _.isObject( thisOptionDeclaration ) ) {
                            thisOptionName = _.first( _.keys( thisOptionDeclaration ) );
                            thisOptionDefaultValue = _.clone( thisOptionDeclaration[ thisOptionName ] );
                        }
                        else throw new Error( "Each element in the option declarations array must be either a string or an object." );

                        if( thisOptionName[ thisOptionName.length - 1 ] === "!" ) {
                            thisOptionRequired = true;
                            thisOptionName = thisOptionName.slice( 0, thisOptionName.length - 1 );
                        }

                        normalizedOptionDeclarations.push( {
                            name : thisOptionName,
                            required : thisOptionRequired,
                            defaultValue : thisOptionDefaultValue
                        } );
                    } );

                    return normalizedOptionDeclarations;
                };


                // bb.BabySitter
                // -------------------
                // v0.0.6
                //
                // Copyright (c)2013 Derick Bailey, Muted Solutions, LLC.
                // Distributed under MIT license
                //
                // http://github.com/babysitterjs/backbone.babysitter

                // bb.ChildViewContainer
                // ---------------------------
                //
                // Provide a container to store, retrieve and
                // shut down child views.

                ChildViewContainer = (function(bb, _){

                    // Container Constructor
                    // ---------------------

                    var Container = function(views){
                        this._views = {};
                        this._indexByModel = {};
                        this._indexByCustom = {};
                        this._updateLength();

                        _.each(views, this.add, this);
                    };

                    // Container Methods
                    // -----------------

                    _.extend(Container.prototype, {

                        // Add a view to this container. Stores the view
                        // by `cid` and makes it searchable by the model
                        // cid (and model itself). Optionally specify
                        // a custom key to store an retrieve the view.
                        add: function(view, customIndex){
                            var viewCid = view.cid;

                            // store the view
                            this._views[viewCid] = view;

                            // index it by model
                            if (view.model){
                                this._indexByModel[view.model.cid] = viewCid;
                            }

                            // index by custom
                            if (customIndex){
                                this._indexByCustom[customIndex] = viewCid;
                            }

                            this._updateLength();
                        },

                        // Find a view by the model that was atched to
                        // it. Uses the model's `cid` to find it.
                        findByModel: function(model){
                            return this.findByModelCid(model.cid);
                        },

                        // Find a view by the `cid` of the model that was atched to
                        // it. Uses the model's `cid` to find the view `cid` and
                        // retrieve the view using it.
                        findByModelCid: function(modelCid){
                            var viewCid = this._indexByModel[modelCid];
                            return this.findByCid(viewCid);
                        },

                        // Find a view by a custom indexer.
                        findByCustom: function(index){
                            var viewCid = this._indexByCustom[index];
                            return this.findByCid(viewCid);
                        },

                        // Find by index. This is not guaranteed to be a
                        // stable index.
                        findByIndex: function(index){
                            return _.values(this._views)[index];
                        },

                        // retrieve a view by it's `cid` directly
                        findByCid: function(cid){
                            return this._views[cid];
                        },

                        findIndexByCid : function( cid ) {
                            var index = -1;
                            var view = _.find( this._views, function ( view ) {
                                index++;
                                if( view.model.cid == cid )
                                    return view;
                            } );
                            return ( view ) ? index : -1;
                        },

                        // Remove a view
                        remove: function(view){
                            var viewCid = view.cid;

                            // delete model index
                            if (view.model){
                                delete this._indexByModel[view.model.cid];
                            }

                            // delete custom index
                            _.any(this._indexByCustom, function(cid, key) {
                                if (cid === viewCid) {
                                    delete this._indexByCustom[key];
                                    return true;
                                }
                            }, this);

                            // remove the view from the container
                            delete this._views[viewCid];

                            // update the length
                            this._updateLength();
                        },

                        // Call a met on every view in the container,
                        // passing parameters to the call met one at a
                        // time, like `function.call`.
                        call: function(met){
                            this.apply(met, _.tail(arguments));
                        },

                        // Apply a met on every view in the container,
                        // passing parameters to the call met one at a
                        // time, like `function.apply`.
                        apply: function(met, args){
                            _.each(this._views, function(view){
                                if (_.isFunction(view[met])){
                                    view[met].apply(view, args || []);
                                }
                            });
                        },

                        // Update the `.length` attribute on this container
                        _updateLength: function(){
                            this.length = _.size(this._views);
                        }
                    });

                    // Borrowing this code from bb.Collection:
                    // http://backbonejs.org/docs/backbone.html#section-106
                    //
                    // Mix in mets from Underscore, for iteration, and other
                    // collection related features.
                    var mets = ['forEach', 'each', 'map', 'find', 'detect', 'filter',
                        'select', 'reject', 'every', 'all', 'some', 'any', 'include',
                        'contains', 'invoke', 'toArray', 'first', 'initial', 'rest',
                        'last', 'without', 'isEmpty', 'pluck'];

                    _.each(mets, function(met) {
                        Container.prototype[met] = function() {
                            var views = _.values(this._views);
                            var args = [views].concat(_.toArray(arguments));
                            return _[met].apply(_, args);
                        };
                    });

                    // return the public API
                    return Container;
                })(bb, _);

                return bb.CollectionView;
            } ) );
    }



    /*

     bb Extensions

     bb is flexible, simple, and powerful. However, you may find that complexity of app you are working on requires more than what it provides out of box.
     There are certain concerns which it just doesn’t address directly as one of its goals is to be minimalist.

     Take for example Vws, which providedefault render met which does nothing and produces no real results when called, despite most impls using it to generate HTML that view manages.
     Also, Mds and Cls have no built-in way of handling nested hierarchies - if you require this fnality, you need to write it yourself or useplugin.

     In these cases, there are many existing bb plugins which can provide advanced sols for big-scale bb apps.
     A fairly complete list of plugins and frameworks avail can be found on bb wiki. Using these add-ons, there is enough for apps of most sizes to be completed successfully.

     In this section of book we will look at two popular bb add-ons: MarionetteJS and Thorax.

     MarionetteJS (bb.Marionette)
     By Derick Bailey & Addy Osmani

     As we’ve seen, bb providesgreat set of building blocks for our JavaScript apps. It gives us core constructs that are needed to build small to mid-sized apps,
     organize jQ DOM evs, or create single page apps that support mobile devices and big scale enterprise needs. But bb is notcomplete framework.
     It’sset of building blocks that leaves much of app design, architecture, and scalability to developer, including memory management, view management, and more.

     MarionetteJS (a.k.a. bb.Marionette) provides many of features that non-trivial app developer needs, above what bb itself provides.
     It iscomposite app lib that aims to simplify construction of big scale apps. It does this by providingcl of common design and impl patterns
     found in apps that creator, Derick Bailey, and many other contributors have been using to build bb apps.

     Marionette’s key benefits include:

     Scaling apps out with modular, event driven architecture
     Sensible defaults, such as using Underscore tps for view rendering
     Easy to modify to make it work with your app’s  spec needs
     Reducing boilerplate for views, with specialized view types
     Build onmodular architecture with Application and modules that attach to it
     Compose your app’s visuals at runtime, with Region and Layout
     Nested views and layouts within visual regions
     Built-in memory management and zombie killing in views, regions, and layouts
     Built-in event clean up with EventBinder
     Event-driven architecture with EventAggregator
     Flexible, “as-needed” architecture allowing you to pick and choose what you need
     And much, much more
     Marionette followssimilar philosophy to bb in that it providessuite of components that can be used independently of each other,
     or used together to create significant advantages for us as developers. But it steps above structural components of bb and provides app layer,
     with more thandozen components and building blocks.

     Marionette’s components range greatly in features they provide, but they all work together to create composite app layer that can both reduce boilerplate code
     and providemuch needed app structure. Its core components include various and specialized view types that take boilerplate out of rendering common bb.Md and bb.Cl scenarios;
     Application object and Module architecture to scale apps across sub-apps, features and files; integration ofcommand pattern, event aggregator,
     and request/response mechanism; and many more object types that can be extended inmyriad of ways to create architecture that facilitates app’s  spec needs.

     In spite of big number of constructs that Marionette provides, though, you’re not required to use all of it just because you want to use some of it.
     Much like bb itself, you can pick and choose which features you want to use and when. This allows you to work with other bb frameworks and plugins very easily.
     It also means that you are not required to engage in all-or-nothing migration to begin using Marionette.

     Boilerplate Rendering Code
     Consider code that it typically requires to renderview with bb and Underscore tp. We needtp to render, which can be placed in DOM directly,
     and we need JavaScript that definesview that uses tp and populates it with data frommd.

     <script type="text/html" id="my-view-tp">
     <div class="row">
     <label>First Name:</label>
     <span><%= fN %></span>
     </div>
     <div class="row">
     <label>Last Name:</label>
     <span><%= lN %></span>
     </div>
     <div class="row">
     <label>Email:</label>
     <span><%= email %></span>
     </div>
     </script>
     MyVw = bb.V.x({
     tp: $('#my-view-tp').h(),

     r: fn() {

     // compile Underscore.js tp
     compiledTp = _.tp(this.tp);

     // render tp with md data
     data = _.clone(this.md.atts);
     html = compiledTp(data);

     // populate view with rendered html
     this.$el.h(html);
     }
     });
     Once this is in place, you need to create instance of your view and pass your md into it. Then you can take view’s el and append it to DOM in order to display view.


     Per = bb.Md.x({
     df: {
     "fN": "Jeremy",
     "lN": "Ashkenas",
     "email":    "jeremy@example.com"
     }
     });

     Derick = new Per({
     fN: 'Derick',
     lN: 'Bailey',
     email: 'derickbailey@example.com'
     });

     myVw = new MyVw({
     md: Derick
     });

     myVw.setElement("#content");
     myVw.r();
     This isstandard set up for defining, building, rendering, and displayingview with bb. This is also what we call “boilerplate code”
     - code that is repeated over and over and over again, across every project and every impl with same fnality. It gets to be tedious and repetitious very quickly.

     Enter Marionette’s ItemVw -simple way to reduce boilerplate of definingview.

     Reducing Boilerplate With Marionette.ItemVw
     All of Marionette’s view types - with exception of Marionette.Vw - includebuilt-in render met that handles core rendering logic for you.
     We can take advantage of this by changing MyVw instance to inherit from one of these rather than bb.Vw. Instead of having to provide our own render met for view,
     we can let Marionette render it for us. We’ll still use same Underscore.js tp and rendering mechanism, but impl of this is hidden behind scenes.
     Thus, we can reduce amount of code needed for this view.

     MyVw = Marionette.ItemV.x({
     tp: '#my-view-tp'
     });
     And that’s it - that’s all you need to get exact same behaviour as prev view impl. Just replace bb.Vw.extend with Marionette.ItemVw.extend,
     then get rid of render met. You can still create view instance withmd, call render met on view instance, and display view in DOM same way that we did before.
     But view definition has been reduced tosingle line of configuration for tp.

     Memory Management
     In addition to reduction of code needed to defineview, Marionette includes some advanced memory management in all of its views,
     making job of cleaning upview instance and its event handlers easy.

     Consider following view impl:

     ZombieVw = bb.V.x({
     tp: '#my-view-tp',

     i: fn() {

     // bind md change to re-render this view
     this.l2(this.md, 'change', this.render);

     },

     r: fn() {

     // This alert is going to demonstrateproblem
     alert('We`re rendering view');

     }
     });
     If we create two instances of this view using same var name for both instances, and then changeval in md, how many times will we see alert box?


     Derick = new Per({
     fN: 'Derick',
     lN: 'Bailey',
     email: 'derick@example.com'
     });


     // create first view instance
     zombieVw = new ZombieVw({
     md: Derick
     });

     // createsecond view instance, re-using
     // same var name to store it
     zombieVw = new ZombieVw({
     md: Derick
     });

     Derick.set('email', 'derickbailey@example.com');
     Since we’re re-using same zombieVw var for both instances, first instance of view will fall out of scope immediately after second is created.
     This allows JavaScript garbage collector to come along and clean it up, which should mean first view instance is no longer active and no longer going to respond to md’s “change” event.

     But when we run this code, we end up with alert box showing up twice!

     The problem is caused by md event binding in view’s init met. Whenever we pass this.render as cb met to md’s on event binding,
     md itself is being givendirect reference to view instance. Since md is now holdingreference to view instance,
     replacing zombieVw var with new view instance is not going to let original view fall out of scope. The md still hasreference, therefore view is still in scope.

     Since original view is still in scope, and second view instance is also in scope, changing data on md will cause both view instances to respond.

     Fixing this is easy, though. You just need to call stopListening when view is done with its work and ready to be closed. To do this, addclose met to view.

     ZombieVw = bb.V.x({
     tp: '#my-view-tp',

     i: fn() {
     // bind md change to re-render this view
     this.l2(this.md, 'change', this.render);
     },

     close: fn() {
     // unbind evs that this view is listening to
     this.stopListening();
     },

     r: fn() {

     // This alert is going to demonstrateproblem
     alert('We`re rendering view');

     }
     });
     Then call close on first instance when it is no longer needed, and only one view instance will remain alive. For more information about l2 and stopListening fns,
     see earlier bb Basics chapter and Derick’s post on Managing Events As Relationships, Not Just Resources.

     Jeremy = new Per({
     fN: 'Jeremy',
     lN: 'Ashkenas',
     email: 'jeremy@example.com'
     });

     // create first view instance
     zombieVw = new ZombieVw({
     md: Jeremy
     })
     zombieVw.close(); // double-tap zombie

     // createsecond view instance, re-using
     // same var name to store it
     zombieVw = new ZombieVw({
     md: Jeremy
     })

     Jeremy.set('email', 'jeremyashkenas@example.com');
     Now we only see one alert box when this code runs.

     Rather than having to manually rm these event handlers, though, we can let Marionette do it for us.

     ZombieVw = Marionette.ItemV.x({
     tp: '#my-view-tp',

     i: fn() {

     // bind md change to re-render this view
     this.l2(this.md, 'change', this.render);

     },

     r: fn() {

     // This alert is going to demonstrateproblem
     alert('We`re rendering view');

     }
     });
     Notice in this case we are usingmet called l2. This met comes from bb.Events, and is avail in all objects that mix in bb.Events
     - including most Marionette objects. The l2 met signature is similar to that of on met, with exception of passing object that triggers event as first parameter.

     Marionette’s views also provide a close event, in which event bindings that are set up with l2 are automatically rmd.
     This means we no longer need to defineclose met directly, and when we use l2 met, we know that our evs will be rmd and our views will not turn into zombies.

     But how do we automate call to close onview, in real app? When and where do we call that? Enter Marionette.Region - object that manages lifecycle of individual view.

     Region Management
     Afterview is created, it typically needs to be placed in DOM so that it becomes visible. This is usually done withjQ selector and setting h() of resulting object:

     Joe = new Per({  fN: 'Joe',  lN: 'Bob',    email: 'joebob@example.com'  })


     myVw = new MyVw({  md: Joe  })

     myVw.r();

     // show view in DOM
     $('#content').h(myVw.el)
     This, again, is boilerplate code. We shouldn’t have to manually call render and manually select DOM els to show view. Furthermore,
     this code doesn’t lend itself to closing any prev view instance that might be attached to DOM el we want to populate. And we’ve seen danger of zombie views already.

     To solve these problems, Marionette providesRegion object - object that manages lifecycle of individual views, displayed inparticular DOM el.

     // createregion instance, telling it which DOM el to manage
     myReg = new Ma.Reg({ el: '#cont' })

     // show a view in region

     v1 = new MyVw({});  myReg.show(v1)

     v2 = new MyVw({}) // somewhere else in code, show dif view
     myReg.show(v2)


     There are several things to note, here.
     First, we’re telling reg what DOM el to manage by specifying el in region instance.

     Second, we’re no longer calling render met on our views.
     And lastly, we’re not calling close on our view, either, though this is getting called for us.


     When we useregion to manage lifecycle of our views, and display views in DOM, region itself handles these concerns.
     By passing a vw inst into show met of region, it will call render met on view for us.
     It will then take resulting el of view and populate DOM el.

     The next time we call show met of region, region remembers that it is currently displayingview.
     The region calls close met on view,
     rms it from DOM, and then proceeds to run render & display code for new view that was passed in.

     Since region handles calling close for us, and we’re using l2 event binder in our view instance, we no longer have to worry about zombie views in our app.

     Regions are not limited to just Marionette views, though. Any valid bb.Vw can be managed byMarionette.Region. If your view happens to haveclose met,
     it will be called when view is closed. If not, bb.Vw built-in met, rm, will be called instead.

     Marionette Td app
     Having learned about Marionette’s high-level concepts, let’s explore refactoring Td app we created in our first exercise to use it.
     The complete code for this app can be found in Derick’s TdMVC fork.

     Our final impl will be visually and fnally equivalent to original app, as seen below.


     First, we define app object reping our base TdMVC app. This will contain init code and define default layout regions for our app.

     TdMVC.js:

     TdMVC = new bb.Ma.Application();

     TdMVC.addRegions({  header: '#header',  main: '#main',  footer: '#footer'});

     TdMVC.on('start', fn() {  bb.history.start();});

     Regions are used to manage content that’s displayed within  spec els, and addRegions met on TdMVC object is justshortcut for creating Region objects.
     We supply jQ selector for each region to manage (e.g., #header, #main, and #footer) and then tell region to show various bb views within that region.

     Once app object has been initd, we call bb.history.start() to route initial URL.

     Next, we define our Layouts. A layout isspecialized type of view that directly extends Marionette.ItemVw.
     This means it’s intended to rendersingle tp and may or may not havemd (or item) associated with tp.

     One of main difs betweenLayout and ItemVw is that layout contains regions. When definingLayout,
     we supply it with bothtp and regions that tp contains. After rendering layout, we can display other views within layout using regions that were defined.

     In our TdMVC Layout module below, we define Layouts for:

     Header: where we can create new Tds
     Footer: where we summarize how many Tds are remaining/have been completed
     This captures some of view logic that was prevly in our AppVw and TdVw.

     Note that Marionette modules (such as below) offer
     simple module system which is used to create privacy and encapsulation in Marionette apps.

     TdMVC.Layout.js:

     TdMVC.module('Layout', fn(Layout, App, bb, Marionette, $, _) {

     // Layout Header Vw
     // ------------------

     Layout.Header = bb.Marionette.ItemV.x({
     tp: '#tp-header',

     // UI Bindings create cached atts that
     // point to jQ selected objects.
     ui: { input: '#new-td' },

     evs: {      'keypress #new-td': 'onInputKeypress',
     'blur #new-td': 'onTdBlur' },

     onTdBlur: fn(){      tdText = this.ui.input.val().trim();   this.createTd(tdText) },

     onInputKeypress: fn(e) {ENTER_KEY = 13;
     tdText = this.ui.input.val().trim();      if ( e.which === ENTER_KEY && tdText ) {  this.createTd(tdText) } },
     completeAdd: fn(){ this.ui.input.val('')  },
     createTd: fn(tdText) {
     if (tdText.trim() === ""){ return }
     this.cl.create({      tt: tdText      });
     this.completeAdd() }
     })

     // Layout Footer Vw

     Layout.Footer = Marionette.Layout.x({
     tp: '#tp-footer',

     // UI Bindings create cached atts that point to jQ selected objects.

     ui: {
     tdCount: '#td-count .count',
     tdCountLabel: '#td-count .label',
     clearCount: '#clear-completed .count',
     filters: "#filters a" },

     ev: {      "click #clear-completed": "onClearClick"   },
     i: fn(){ this.bindTo( App.vent, "tdList: filter", this.updateFilterSelection, this );    this.bindTo( this.cl, 'all', this.updateCount, this )   },

     onRender: fn(){this.updateCount()},

     updateCount: fn(){
     activeCount = this.cl.getActive()[0],
     completedCount = this.cl.getCompleted()[0];
     this.ui.tdCount.h(activeCount);
     this.ui.tdCountLabel.h(activeCount === 1 ? 'item' : 'items');
     this.ui.clearCount.h(completedCount === 0 ? '' : '(' + completedCount + ')') },

     updateFilterSelection: fn( filter ) {      this.ui.filters.xK('selected').filter( '[href="#' + filter + '"]').K( 'selected' )    },
     onClearClick: fn() {      completed = this.cl.getCompleted();    completed.forEach(fn destroy(td) {     td.destroy();});   }  })
     })


     Next, we tackle app routing and workflow, such as controlling Layouts in page which can be shown or hidden.

     Recall how bb routes trigger mets within Router as shown below in our original Workspace router from our first exercise:

     Workspace = bb.Rt.x({
     routes: {      '*filter': 'setFilter'    },

     setFilter: fn(param) {
     // Set current filter to be used
     window.app.TdFilter = param.trim() || '';

     // Triggercl filter event, causing hiding/unhiding
     // of Td view items
     window.app.Tds.trigger('filter');
     }
     })

     Ma uses concept of AppRouter to simplify routing.  This reduces boilerplate for handling route evs and allows routers to be configured to call mets on object directly.
     We configure our AppRouter using appRoutes which replaces '*filter': 'setFilter' route defined in our original router and invokesmet on our Controller.

     The TdList Controller, also found in this next code block,
     handles some of remaining visibility logic originally found in AppVw and TdVw,
     albeit using very readable Layouts.

     TdMVC.TdList.js:

     TdMVC.module('TdList', fn(TdList, App, bb, Marionette, $, _) {

     // TdList Router
     // ---------------
     //
     // Handle routes to show active vs complete td items


     TdList.Router = Marionette.AppRouter.x({    appRoutes: {      '*filter': 'filterItems'    }  })

     // TdList Controller (Mediator)
     // ------------------------------
     //
     // Control workflow and logic that exists at app level, above impl detail of views and mds



     TdList.Controller=fn(){this.tdList=new App.Tds.TdList()}

     _.x(TdList.Controller.prototype, {

     // Start app by showing appropriate views and fetching list of td items, if there are any

     start: fn() {      this.showHeader(this.tdList);  this.showFooter(this.tdList);
     this.showTdList(this.tdList); App.bindTo(this.tdList, 'reset add rm', this.toggleFooter, this);   this.tdList.fetch() },


     showHeader: fn(tdList) {header = new App.Layout.Header({cl: tdList}); App.header.show(header)},
     showFooter: fn(tdList) {footer = new App.Layout.Footer({cl: tdList}); App.footer.show(footer)},
     showTdList: fn(tdList) {App.main.show(new TdList.Vws.ListVw({cl: tdList      }))    },
     toggleFooter: fn(){App.footer.$el.toggle(this.tdList[0])},
     filterItems: fn(filter){App.vent.trigger('tdList:filter', filter.trim() || '')} // Set filter to show complete or all items
     })


     // TdList Initializer
     // --------------------
     // Get TdList up and running by initializing mediator when app is started, pulling in all of the existing Td items and displaying them.

     TdList.addInitializer(fn() {
     controller = new TdList.Controller();
     new TdList.Router({ controller: controller    })
     controller.start()  })

     })



     Ma’s philosophy on routers   is that they should be afterthought in impl of apps.
     Quite often, we’ve seen developers abuse bb’s routing system
     by making it sole controller of entire app workflow and logic.
     This inevitably leads to mashing every possible combination of code into router mets
     - view creation, md loading, coordinating  dif parts of app, etc.

     bb’s router and history exist to deal with spec aspect of  bws - managing forward and back bts.
     should be limited to that, with code that gets execd by navigation being somewhere else.
     This allows app to be used with or withoutrouter.   We can callcontroller’s “show” met frombt click, from app event handler, or fromrouter,
     and we will end up with same app state no matter how we called that met.


     CompositeVw
     Our next task is defining actual views for indiv Td items and lists of items in our TdMVC app. For this, we make use of Marionette’s CompositeVws.
     The idea behindCompositeVw is that it repsvisualization ofcomposite or hierarchical structure of leaves (or nodes) and branches.

     Think of these views as being a hier of parent-child mds, and recursive by default.
     The same CompositeVw type will be used to render each item incl that is handled by composite view.
     For non-recursive hierarchies, we are able to override item view by defining itemVw attr.

     For our Td List Item Vw, we define it as ItemVw, then our Td List Vw isCompositeVw where we override itemVw setting and tell it to use Td List Item Vw for each item in cl.

     TdMVC.TdList.Vws.js

     TdMVC.module('TdList.Vws', fn(Vws, App, bb, Marionette, $, _) {

     // Td List Item Vw
     // -------------------
     //
     // Display individual td item, and respond to changes
     // that are made to item, including marking completed.

     Vws.ItemVw = Marionette.ItemV.x({
     tagName: 'li',
     tp: '#tp-tdItemVw',

     ui: {        edit: '.edit'   },
     evs: {        'click .destroy': 'destroy',        'dblclick label': 'onEditClick',        'keypress .edit': 'onEditKeypress',        'blur .edit'    : 'onEditBlur',        'click .toggle' : 'toggle'  },
     i: fn() {        this.bindTo(this.md, 'change', this.render, this);  },
     onRender: fn() {
     this.$el.xK( 'active completed' );
     if ( this.md.get( 'completed' )) {          this.$el.K( 'completed' );       } else {          this.$el.K( 'active' );      }      },
     destroy: fn() {        this.md.destroy()   },
     toggle: fn() {        this.md.toggle().save();  },
     onEditClick: fn() {        this.$el.K('editing');        this.ui.edit.focus();    },
     updateTd : fn() {        tdText = this.ui.edit.val();
     if (tdText === '') {          return this.destroy();  }
     this.setTdText(tdText);       this.completeEdit();    },
     onEditBlur: fn(e){        this.updateTd();   },

     onEditKeypress: fn(e) {        ENTER_KEY = 13;
     tdText = this.ui.edit.val().trim();
     if ( e.which === ENTER_KEY && tdText ) {          this.md.set('tt', tdText).save();          this.$el.xK('editing');      }    },

     setTdText: fn(tdText){        if (tdText.trim() === ""){ return; }
     this.md.set('tt', tdText).save();   },

     completeEdit: fn(){        this.$el.xK('editing')    }
     })


     // Item List Vw  // Controls rendering of list of items, including the filtering of active vs completed items for display.

     Vws.ListVw = bb.Marionette.CompositeV.x({
     tp: '#tp-tdListCompositeVw',     childVw: Vws.ItemVw,      childVwContainer: '#td-list',
     ui: {toggle: '#toggle-all'},
     ev: {'click #toggle-all': 'onToggleAllClick'},
     i: fn(){this.bindTo(this.cl, 'all', this.update, this)  },
     onRender: fn(){this.update()},
     update: fn(){ fn reduceCompleted(left, right){return left && right.get('completed')}
     allCompleted = this.cl.reduce(reduceCompleted,true);      this.ui.toggle.prop('checked', allCompleted); this.q.pa().gg(!!this.cl[0])},
     onToggleAllClick: fn(e){isChecked = e.currentTarget.checked; this.cl.each(fn(td){td.save({'completed': isChecked})})}
     })


     // Application Event Handlers // Handler for filtering list of items by showing and hiding through use of various CSS classes
     App.vent.on('tdList:filter',fn(filter) { filter = filter || 'all';    $('#tdapp').attr('class', 'filter-' + filter)  })
     })


     At end of last code block, you will also notice event handler using vent.
     This is event aggregator that allows us to handle filterItem triggers from our TdList controller.

     Finally,
     we define md and cl for reping our Td items.
     These are semantically not very  dif from original versions we used in our first exercise and have been re-written to better fit in with
     Derick’s preferred style of coding.


     TdMVC.Tds.js:

     TdMVC.module('Tds', fn(Tds, App, bb, Marionette, $, _) {

     // Local Variables
     // ---------------

     localStorageKey = 'tds-backbone-marionettejs';

     // Td Md
     Tds.Td = bb.Md.x({
     localStorage: new bb.LocalStorage(localStorageKey),
     df: {      tt: '',   completed: false,    created: 0 },
     i: fn() {      if (this.isNew()) {        this.set('created', Date.now())  }  },
     toggle: fn() {      return this.set('completed', !this.isCompleted())  },
     isCompleted: fn() {  return this.get('completed') } })

     // Td Cl
     Tds.TdList = bb.Cl.x({
     md: Tds.Td,
     localStorage: new bb.LocalStorage(localStorageKey),
     getCompleted: fn() {      return this.filter(this._isCompleted) },
     getActive: fn() {      return this.reject(this._isCompleted)  },
     comparator: fn(td) {      return td.get('created')    },
     _isCompleted: fn(td) {      return td.isCompleted()   }
     })
     })


     We finally kick-start everything off in our app index file, by calling start on our main app object:

     Initialization:      $(fn() {        TdMVC.start()  }) // Start TdMVC app (defined in js/TdMVC.js)


     ///////


     Working With Nested Vws


     What is best approach for rendering and appending nested Vws (or Subviews) in bb.js?

     Sol 1

     Since pages are composed of nested els and bb views correspond to els within page, nesting views is intuitive approach to managinghierarchy of els.

     The best way to combine views is simply using:

     this.$('.someContainer').A(innerVw.el);
     which just relies on jQ. We could use this inreal example as follows:



     init : fn () {},
     render : fn () {

     this.$el.E()
     this.innerVw1 = new Subview({ops});
     this.innerVw2 = new Subview({ops});

     this.$('.inner-view-container')
     .A(this.innerVw1.el)
     .A(this.innerVw2.el);
     }

     Sol 2

     Beginners sometimes also try using setElement to solve this problem, however keep in mind that using this met is easy way to shoot yourself in foot.
     Avoid using this approach when first sol isviable option:


     // Where we have prevly definedVw, SubVw
     // inparent Vw we could do:

     ...
     init : fn () {

     this.innerVw1 = new Subview({ops});
     this.innerVw2 = new Subview({ops});
     },

     render : fn () {

     this.$el.h(this.tp());

     this.innerVw1.setElement('.some-el1').r();
     this.innerVw2.setElement('.some-el2').r();
     }
     Here we are creating subviews in parent view’s init() met and rendering subviews in parent’s r() met.
     The els managed by subviews exist in parent’s tp and Vw.setElement() met is used to re-assign el associated with each subview.

     setElement() changesview’s el, including re-delegating event handlers by removing them from old el and binding them to new el.
     Note that setElement() returns view, allowing us to chain call to r().

     This works and has some positive qualities: you don’t need to worry about maintaining order of your DOM els when appending,
     views are initd early, and r() met doesn’t need to take on too many responsibilities at once.

     Unfortunately, downsides are that you can’t set tagName property of subviews and evs need to be re-delegated. The first sol doesn’t suffer from this problem.

     Sol 3

     OuterVw = bb.V.x({

     i: fn(){this.inner = new InnerVw() },

     r: fn() {
     // Detach InnerVw before reseting OuterVw's $el
     this.inner.$el.detach();

     // or this.$el.E() if you have no tp
     // this.$el.h(tp);

     this.$el.A(this.inner.$el);
     }
     });

     InnerVw = bb.V.x({r: fn() {  this.$el.h(tp)} })

     This tackles spec design decisions:

     The order in which you append sub-els matters
     The OuterVw doesn’t contain HTML els to be set in InnerVw(s), -> we can still spec tagName in InnerVw
     r()  called after InnerVw el has been placed into DOM.

     common use case: InnerVw’s r() met sizing itself on page based on dims of other el.


     -InnerVw needs to call Vw.delegateEvents() to bind its ev hlrs to new DOM since
     it is replacing content of its el.

     Sol 4  A better sol, which is more clean but has potential to affect performance is:
     OuterVw = bb.V.x({
     i: fn(){this.r()},
     r: fn(){
     this.$el.h(tp); // or this.$el.E() if you have no tp
     this.inner = new InnerVw();        this.$el.A(this.inner.$el) }})

     InnerVw = bb.V.x({    i: fn(){this.r()},    r: fn(){this.$el.h(tp)} })

     Sol 5

     If multiple views need to be nested at particular locs intp,hash of child views indexed by child view cids’ should be created.
     In tp, usecust HTML attr named data-view-cid to create placeholder els for each view to embed.
     Once tp has been rendered and its output appended to parent view’s $el, each placeholder can be queried for and replaced with child view’s el.

     A sample impl containingsingle child view could be written:


     OuterVw = bb.V.x({
     i: fn() {
     this.children = {};
     this.child = new bb.Vw();
     this.children[this.child.cid] = this.child;
     },

     r: fn() {
     this.$el.h('<div data-view-cid="' + this.child.cid + '"></div>');
     _.e(this.children, fn(view, cid) {
     this.$('[data-view-cid="' + cid + '"]').replaceWith(view.el);
     }, this);
     }
     };


     The use of cids (client ids) here is useful because it illustrates separatingmd and its views by having views referenced by their instances and not their atts.
     It’s quite common to ask for all views that satisfy attr on their mds, but if you have recursive subviews or repeated views (a common occurrence),
     you can’t simply ask for views by atts. That is, unless you specify additional atts that separate duplicates. Using cids solves this problem as it allows for direct references to views.

     Generally speaking, more developers opt for Sol 1 or 5 as:

     The majority of their views may already rely on being in DOM in their r() met
     When OuterVw is re-rendered, views don’t have to be re-initd where re-init has potential to cause memory leaks and issues with existing bindings
     The bb extensions Marionette and Thorax provide logic for nesting views, and rendering cls where each item has associated view.
     Marionette provides APIs in JavaScript while Thorax provides APIs via Handlebars tp helpers. We will examine both of these in upcoming chapter.

     (Thanks to Lukas and Ian Taylor for these tips).



     What is best way to manage mds in nested views?

     In order to reach atts on related mds innested setup,
     mds require some prior knowledge of each other,
     something which bb doesn’t implicitly handle out of box.
     One approach is to make sure each child md has‘parent’ attr.
     This way you can traverse nesting first up to parent and then down to any siblings that you know of.
     So, assuming we have mds mdA, mdB and mdC:

     // When initializing mdA, I would suggest settinglink to parent
     // md when doing this, like this:

     MdA = bb.Md.x({

     i: fn(){
     this.mdB = new mdB();
     this.mdB.parent = this;
     this.mdC = new mdC();
     this.mdC.parent = this;
     }
     }
     This allows you to reach parent md in any child md fn through this.parent.

     Now, we have already discussedfew ops for how to construct nested Vws using bb. For sake of simplicity,
     let us imagine that we are creatingnew child view VwB from within init() met of VwA below. VwB can reach out over VwA md and listen out for changes on any of its nested mds.

     See inline for comments on exactly what each step is enabling:


     // Define Vw A
     VwA = bb.V.x({

     i: fn(){
     // Create instance of Vw B
     this.viewB = new VwB();

     // Createreference back to this (parent) view
     this.viewB.parentVw = this;

     // Append VwB to VwA
     $(this.el).A(this.viewB.el);
     }
     });

     // Define Vw B
     VwB = bb.V.x({

     //...,

     i: fn(){
     // Listen for changes to nested mds in our parent VwA
     this.l2(this.md.parent.mdB, "change", this.render);
     this.l2(this.md.parent.mdC, "change", this.render);

     // We can also call any met on our parent view if it is defined
     // $(this.parentVw.el).shake();
     }

     });

     // Create instance of VwA with MdA
     // viewA will create its own instance of VwB
     // from inside init() met
     viewA = new VwA({ md: MdA });
     Rendering A Parent Vw From A Child Vw
     Problem

     How would one renderParent Vw from one of its Children?

     Sol

     Inscenario where you haveview containing another view, such asphoto gallery containingbigr view modal,
     you may find that you need to render or re-render parent view from child. The good news is that solving this problem is quite straight-forward.

     The simplest sol is to just use this.parentVw.r();.

     If however inversion of control is desired, evs may be used to provide equally valid sol.

     Say we wish to begin rendering whenparticular event has occurred. For sake of example, let us call this event ‘somethingHappened’.
     The parent view can bind notifications on child view to know when event has occurred. It can then render itself.

     In parent view:

     // Parent init
     this.l2(this.childVw, 'somethingHappened', this.render);

     // Parent removal
     this.stopListening(this.childVw, 'somethingHappened');
     In child view:


     // After event has occurred
     this.trigger('somethingHappened');
     The child will trigger“somethingHappened” event and parent’s render fn will be called.





     Where your app is setup with multiple Parent and Child Vws,
     it is also common to desire removing any DOM els associated with such views
     as well as unbinding any event handlers tied to child els when you no longer require them.
     The sol in last question should be enough to handle this use case,
     but if you require more explicit example that handles children,
     we can see one below:


     bb.Vw.prototype.close = fn(){if(this.onClose){this.onClose()};     this.rm()}


     NewVw = bb.V.x({
     i: fn() {       this.childVws = [] },

     renderChildren: fn(item) {
     itemVw = new NewChildVw({ md: item });
     $(this.el).prepend(itemVw.r());
     this.childVws.push(itemVw);
     },

     onClose: fn() {      _(this.childVws).each(fn(view) {       view.close()      })}
     })


     NewChildVw = bb.V.x({   tagName: 'li',    r: fn() {    }});


     Here,close() met for views is implemented which disposes ofview when it is no longer needed or needs to be reset.

     In most cases, view removal should not affect any associated mds. For example, if you are working onblogging app and you rm
     view with comments, perhaps another view in your app showsselection of comments and resetting cl would affect those views as well.

     (Thanks to dira for this tip)

     Note: You may also be interested in reading about Marionette Composite Vws in Extensions part of book.

     Rendering Vw Hierarchies
     Problem

     Let us say you have Cl, where each item in Cl could itself beCl.
     You can render each item in Cl,  and indeed can render any items which themselves are Cls.


     The problem you might have is how to render HTML that reflects hier  nature of data structure.

     CompositeVw   can rendermd andcl within same view.

     It can rendersingle md with tp.
     It can also take cl from that md and for each md in that cl, renderview.
     By default it uses same composite view type that you’ve defined to render each of mds in cl.
     All you have to do is tell view instance where cl is,
     via init met, and you’ll getrecursive hierarchy rendered.




     Working With Nested Mds Or Cls


     As we’ve seen,
     it’s common to create cls reping groups of mds using bb.
     It’s also however common to wish to nest cls within mds, depending on type of app you are working on.


     Take for example Building md that contains many Room mds which could sit inRooms cl.

     You could exposethis.rooms cl for each building,
     allowing you to lazy-load rooms oncebuilding has been opened.


     Building = bb.Md.x({ i: fn(){  this.rooms = new Rooms;  this.rooms.url = '/building/' + this.id + '/rooms';      this.rooms.on("reset", this.updateCounts) }  })


     // Createnew building md
     townHall = new Building;

     // once opened, lazy-load rooms
     townHall.rooms.fetch({reset: true});
     There are alsonumber of bb plugins which can help with nested data structures, such as bb Relational. This plugin handles one-to-one,
     one-to-many and many-to-one relations between mds for bb and has some excellent documentation.

     Better Md Property Validation
     Problem

     As we learned earlier in book,
     validate met on Md is called by set
     (when validate option is set) and save.
     It is passed md atts updated with vals passed to these mets.


     By default, when we define cust validate met,
     bb passes all of md’s atts through this validation each time,
     regardless of which md atts are being set.

     This means that it can be challenge to determine which
     spec fields are being set or
     validated without being concerned about others that aren’t being set at same time.

     Sol

     To illustrate this problem better, let us look attypical registration form use case that:

     Validates form fields using blur event
     Validates each field regardless of whether other md atts (i.e., other form data) are valid or not.
     Here is one example ofdesired use case:

     We haveform whereuser focuses and blurs first name, last name,
     and email HTML input boxes without entering any data.
     A “this field is required” message should be presented next to each form field.



     HTML:

     <!doctype html>
     <html>
     <head>
     <meta charset=utf-8>
     <tt>Form Validation - Md#validate</tt>
     <script src='http://code.jquery.com/jquery.js'></script>
     <script src='http://underscorejs.org/underscore.js'></script>
     <script src='http://backbonejs.org/backbone.js'></script>
     </head>
     <body>
     <form>
     <label>First Name</label>
     <input name='fN'>
     <span data-msg='fN'></span>
     <br>
     <label>Last Name</label>
     <input name='lastname'>
     <span data-msg='lastname'></span>
     <br>
     <label>Email</label>
     <input name='email'>
     <span data-msg='email'></span>
     </form>
     </body>
     </html>

     Basic validation
     that could be written using current bb validate met
     to work with this form could be implemented using something like:

     vld: fn(attrs) {

     if(!attrs.fN) return 'first name is empty';
     if(!attrs.lastname) return 'last name is empty';
     if(!attrs.email) return 'email is empty';

     }


     Unfortunately, this met would triggerfN error
     each time any of fields were blurred and only error message next to first name field would be presented.

     One potential sol to problem is to validate all fields and return all of errors:

     vld: fn(attrs) {
     errors = {};

     if (!attrs.fN) errors.fN = 'first name is empty';
     if (!attrs.lastname) errors.lastname = 'last name is empty';
     if (!attrs.email) errors.email = 'email is empty';

     if (!_.isEmpty(errors)) return errors;
     }
     This can be adapted intosol that definesField md for each input in our form and works within pams of our use case as follows:


     $(fn($) {
     User = bb.Md.x({
     vld: fn(attrs) {      errors = this.errors = {};
     if (!attrs.fN) errors.fN = 'fN is required';
     if (!attrs.lastname) errors.lastname = 'lastname is required';
     if (!attrs.email) errors.email = 'email is required';
     if (!_.isEmpty(errors)) return errors  }  })

     Field = bb.V.x({    evs: {blur: 'validate'},
     i: fn() {      this.name = this.$el.attr('name');      this.$msg = $('[data-msg=' + this.name + ']')    },
     vld: fn() {      this.md.set(this.name, this.$el.val(), {vld: true});
     this.$msg.text(this.md.errors[this.name] || '')    }  })

     user = new User;
     $('input').each(fn() {    new Field({el: this, md: user}) })

     })


     This works fine as sol checks validation for each attr individually and sets message for correct blurred field.
     A demo of above by [@braddunbar](http://github.com/braddunbar) is also avail.

     Unfortunately, this sol does perform validation on all fields every time, even though we are only displaying errors for field that has changed.
     If we have multiple client-side validation mets, we may not want to have to call each validation met on every attr every time, so this sol might not be ideal for everyone.


     bb.validateAll
     A potentially better alternative to above is to use [@gfranko](http://github.com/@franko)’s bb.validateAll plugin,
     specally created to validate  spec Md pops (or form fields) without worrying about validation of any other Md pops (or form fields).


     Here is how we would set up partial User Md and validate met using this plugin for our use case:


     // Createnew User Md
     User = bb.Md.x({


     patterns: {
     specialCharacters: '[^a-zA-Z 0-9]+',
     digits: '[0-9]',
     email: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9][a-zA-Z0-9.-]*[.]{1}[a-zA-Z]{2,6}$' },


     // Validators
     validators: {
     minLength: fn(val, minLength) {  return val.length >= minLength },
     maxLength: fn(val, maxLength) {            return val.length <= maxLength          },
     isEmail: fn(val) {            return User.prototype.validators.pattern(val, User.prototype.patterns.email)          },
     hasSpecialCharacter: fn(val) {            return User.prototype.validators.pattern(val, User.prototype.patterns.specialCharacters) },



     // We can determine which pops are getting validated by checking to see if pops are equal to null

     vld: fn(attrs) {          errors = this.errors = {};

     if(attrs.fN != null) {
     if (!attrs.fN) {
     errors.fN = 'fN is required';
     $l('first name isEmpty validation called');
     }

     else if(!this.validators.minLength(attrs.fN, 2))
     errors.fN = 'fN too short';
     else if(!this.validators.maxLength(attrs.fN, 15))
     errors.fN = 'fN too big';
     else if(this.validators.hasSpecialCharacter(attrs.fN)) errors.fN = 'fN cannot contain special characters';
     }

     if(attrs.lastname != null) {

     if (!attrs.lastname) {
     errors.lastname = 'lastname is required';
     $l('last name isEmpty validation called');
     }


     else if(!this.validators.minLength(attrs.lastname, 2))
     errors.lastname = 'lastname is too short';
     else if(!this.validators.maxLength(attrs.lastname, 15))
     errors.lastname = 'lastname is too big';
     else if(this.validators.hasSpecialCharacter(attrs.lastname)) errors.lastname = 'lastname cannot contain special characters';

     }


     This allows logic inside of our validate mets to determine which form fields are currently being set/validated, and ignore md pops that are not being set.

     It’s fairly straight-forward to use as well.
     We can simply definenew Md instance and then set data on our md using validateAll option to use behavior defined by plugin:

     user = new User();
     user.set({ 'fN': 'Greg' }, {vld: true, validateAll: false});
     That’s it. The bb.validateAll logic doesn’t override default bb logic by default and so it’s perfectly capable
     of being used for scenarios where you might care more about field-validation performance as well as those where you don’t.
     Both sols presented in this section should work fine however.

     bb.Validation
     As we’ve seen, validate met bb offers is undefined by default and you need to override it with your own cust validation logic to get md validation in place.
     Often developers run into issue of implementing this validation as nested ifs and elses, which can become unmaintainable when things get complicated.

     Another helpful plugin for bb called bb.Validation attempts to solve this problem by offering extensible way to
     declare validation rules on md and overrides validate met behind scenes.

     One of useful mets this plugin includes is (pseudo) live validation viapreValidate met.
     This can be used to check on key-press if input formd is valid without changing md itself.
     You can run any validators formd attr by calling preValidate met, passing it name of attr along with val you would like validated.

     // If val of attr is invalid,truthy error message is returned
     // if not, it returnsfalsy val


     errorMsg = user.preValidate('fN', 'Greg');
     Form- spec validation classes
     That said, most optimal sol to this problem may not be to stick validation in your md atts. Instead, you could havefn
     specally designed for validating spec form and there are many good JavaScript form validation libraries out there that can help with this.

     If you want to stick it on your md, you can also make itclass fn:

     User.validate = fn(formElement) {};

     For more information on validation plugins avail for bb, see bb wiki.

     Avoiding Conflicts With Multiple bb Versions

     Problem
     In instances out of your control, you may have to work around having more than one version of bb in same page. How do you work around this without causing conflicts?

     Sol

     Like most client-side projects, bb’s code is wrapped in immediately-invoked fn expression:

     (fn(){
     // bb.js
     }).call(this);
     Several things happen during this configuration stage.
     A bb namespace is created, and multiple versions of bb on same page are supported through noConflict mode:

     root = this;
     prevbb = root.bb;

     bb.noConflict = fn() {
     root.bb = prevbb;
     return this;
     };

     Multiple versions of bb can be used on same page by calling noConflict like this:

     bb19 = bb.noConflict();

     // bb19 refers to most recently loaded version,
     // and `window.bb` will be restored to prevly
     // loaded version

     Building Md And Vw Hierarchies



     How does inheritance work with bb?
     How can I share code between similar mds and views? How can I call mets that have been overridden?
     For its inheritance, bb internally uses inherits fn inspired by goog.inherits,
     Google’s impl from Closure Lib.
     It’s basicallyfn to correctly setup prototype chain.

     inherits = fn(parent, protoProps, staticProps) {


     The only major dif here is that bb’s API accepts two objects containing instance and static mets.

     Following on from this, for inheritance purposes all of bb’s objects contain extend met as follows:

     Md.extend = Cl.extend = Router.extend = Vw.extend = extend;
     Most development with bb is based around inheriting from these objects,
     and they’re designed to mimic classical object-oriented impl.

     The above isn’t quite same as ECMAScript 5’s Object.create, as it’s actually copying pops (mets and vals)
     from one object to another. As this isn’t enough to support bb’s inheritance and class md,
     following steps are performed:

     The instance mets are checked to see if there’sconstructor property.
     If so, class’s constructor is used, otherwise parent’s constructor is used (i.e., bb.Md)

     Underscore’s extend met is called to add parent class’s mets to new child class
     The prototype property of blank constructor fn is assigned with parent’s prototype,
     and new instance of this is set to child’s prototype property

     Underscore’s extend met is called twice to add static and instance mets to child class
     The child’s prototype’s constructor and__super__ property are assigned
     This pattern is also used for classes in CoffeeScript, so bb classes are compatible with CoffeeScript classes.
     extend can be used forgreat deal more and developers who are fans of mixins will like that it can be used for this too.
     You can define fnality on any cust object, and then quite literally copy & paste
     all of mets and atts from that object tobb one:

     For example:

     MyMixin = {  foo: 'bar',  sayFoo: fn(){alert(this.foo) }}

     MyVw = bb.V.x({})

     _.x(MyVw.prototype, MyMixin);

     myVw = new MyVw();
     myVw.sayFoo(); //=> 'bar'
     We can take this further and also apply it to Vw inheritance. The following is example of how to extend one Vw using another:

     Panel = bb.V.x({ })

     PanelAdvanced = Panel.x({})

     Calling Overridden Methods

     However, if you have init() met in Panel, then it won’t be called if you also have init() met in PanelAdvanced, so you would have to call Panel’s init met explicitly:

     Panel = bb.V.x({
     i: fn(ops){
     $l('Panel initd');
     this.foo = 'bar';
     }
     });

     PanelAdvanced = Panel.x({
     i: fn(ops){
     Panel.prototype.init.call(this, ops);
     $l('PanelAdvanced initd');
     $l(this.foo); // Log: bar
     } })


     // We can also inherit PanelAdvanced if needed
     PanelAdvancedExtra = PanelAdvanced.x({
     i: fn(ops){
     PanelAdvanced.prototype.init.call(this, ops);
     $l('PanelAdvancedExtra initd');
     } })

     new Panel();
     new PanelAdvanced();
     new PanelAdvancedExtra();
     This isn’t most elegant of sols because if you havelot of Vws that inherit from Panel, then you’ll have to remember to call Panel’s init from all of them.

     It’s worth noting that if Panel doesn’t have init met now but you choose to add it in future,
     then you’ll need to go to all of inherited classes in future and make sure they call Panel’s init.

     So here’s alternative way to define Panel so that your inherited views don’t need to call Panel’s init met:

     Panel = fn (ops) {
     // put all of Panel's init code here
     $l('Panel initd');
     this.foo = 'bar';

     bb.Vw.apply(this, [ops]);
     };

     _.x(Panel.prototype, bb.Vw.prototype, {
     // put all of Panel's mets here. For example:
     sayHi: fn () {
     $l('hello from Panel');
     }
     });

     Panel.extend = bb.Vw.extend;

     // other classes then inherit from Panel like this:
     PanelAdvanced = Panel.x({
     i: fn (ops) {
     $l('PanelAdvanced initd');
     $l(this.foo);
     }
     });

     panelAdvanced = new PanelAdvanced(); //Logs: Panel initd, PanelAdvanced initd, bar
     panelAdvanced.sayHi(); // Logs: hello from Panel
     When used appropriately, Underscore’s extend met can savegreat deal of time and effort writing redundant code.

     (Thanks to Alex Young, Derick Bailey and JohnnyO for heads up about these tips).

     bb-Super

     bb-Super by Lukas Olson adds*super* met to bb.Md using John Resig’s Inheritance script.
     Rather than using bb.Md.prototype.set.call as per bb.js documentation,
     super can be called instead:

     // This is how we normally do it
     OldFashionedNote = bb.Md.x({
     set: fn(atts, ops) {
     // Call parent's met
     bb.Md.prototype.set.call(this, atts, ops);
     // some cust code here
     // ...
     }
     });

     After including this plugin, you can do same thing with following syntax:

     // This is how we can do it after using bb-super plugin
     Note = bb.Md.x({
     set: fn(atts, ops) {
     // Call parent's met
     this._super(atts, ops);
     // some cust code here
     // ...
     }
     })




     Event Aggregators And Mediators - How do I channel multiple event sources throughsingle object?

     It’s common for developers to think of Mediators when faced with this problem,
     so let’s explore what Event Aggregator is,
     what Mediator pattern is and how they differ.

     When it comes to Mediator and Event Aggregator patterns,
     there are some times where it may look like patterns are interchangeable due to impl similarities.
     However, semantics and intent of these patterns are very  dif.
     And even if impls both use some of same core constructs,
     I believe there isdistinct dif between them.
     I also believe they should not be interchanged or confused in communication because of difs.



     Event Aggregator
     The core idea of Event Aggregator, according to Martin Fowler,
     is to channel multiple event sources throughsingle object so that other objects
     needing to subscribe to evs don’t need to know about every event source.

     bb’s Event Aggregator
     The easiest event aggregator to show is that of bb.js – it’s built into bb object directly.

     Vw1 = bb.V.x({
     // ...

     ev: {    "click .foo": "doIt"  },

     doIt: fn(){
     // trigger event through event aggregator
     bb.trigger("some:event");
     }
     })

     Vw2 = bb.V.x({
     // ...

     i: fn(){
     // subscribe to event aggregator's event
     bb.on("some:event", this.doStuff, this);
     },

     doStuff: fn(){
     // ...
     }
     })
     In this example, first view is triggering event whenDOM el is clicked. The event is triggered through bb’s built-in event aggregator – bb object.
     Of course, it’s trivial to create your own event aggregator in bb,
     and there are some key things that we need to keep in mind when using event aggregator, to keep our code simple.

     jQ’s Event Aggregator

     Did you know that jQ hasbuilt-in event aggregator? They don’t call it this, but it’s in there and it’s scoped to DOM evs. It also happens to look like bb’s event aggregator:

     $("#mainArticle").on("click", fn(e){

     // handle click event on any el underneath our #mainArticle el

     })

     This code sets up ev handler fn that waits for unknown number of ev sources to trigger“click” event,
     and it allows any number of listeners to attach to evs of those event publishers. jQ just happens to scope this event aggregator to DOM.




     Mediator
     A Mediator is object that coordinates interactions (logic and behavior) between multiple objects.
     It makes decisions on when to call which objects, based on actions (or inaction) of other objects and input.

     mediator = {};
     The purpose of mediator is to control workflow between objects
     and we really don’t need anything more than object literal to do this.

     orgChart = {

     addNewEmployee: fn(){

     employeeDetail = this.getEmployeeDetail()  // getEmployeeDetail providesview that users interact with
     employeeDetail.on("complete", fn(employee){  // when employee detail is complete, mediator (the 'orgchart' object) decides what should happen next
     managerSelector = this.selectManager(employee) // set up additional objects that have additional evs, which are used by mediator to do additional things
     managerSelector.on("save", fn(employee){ employee.save() })

     }) } }


     This example shows very basic impl of mediator object
     with bb-based objects that can trigger and subscribe to evs.
     I’ve often referred to this type of object as“workflow” object in past,
     but truth is that it ismediator.

     It is object that handles workflow between many other objects,    aggregating responsibility of that workflow knowledge intosingle object.
     The result is workflow that is easier to understand and maintain.



     Similarities And Differences
     There are, withoutdoubt,
     similarities between event aggregator and mediator examples that I’ve shown here.
     The similarities boil down to two primary items: evs and third-party objects.
     These difs are superficial at best, though.
     When we dig into intent of pattern and see that impls can be dramatically  dif,
     nature of patterns become more apparent.



     Events
     Both event aggregator and mediator use evs, in above examples. An event aggregator obviously deals with evs – it’s in name after all.
     The mediator only uses evs because it makes life easy when dealing with bb, though. There is nothing that saysmediator must be built with evs.
     You can buildmediator with cb mets, by handing mediator reference to child object, or by any ofnumber of other means.

     The dif, then, is why these two patterns are both using evs. The event aggregator, aspattern, is designed to deal with evs.
     The mediator, though, only uses them because it’s convenient.

     Third-Party Objects
     Both event aggregator and mediator, by design, usethird-party object to facilitate things. The event aggregator itself isthird-party to event publisher and event subscriber.
     It acts ascentral hub for evs to pass through. The mediator is alsothird party to other objects, though. So where is dif? Why don’t we call event aggregatormediator?
     The answer bigly comes down to where app logic and workflow is coded.


     In case of event aggregator, third party object is there only to facilitate pass-through of evs from unknown number of sources to unknown number of handlers.
     All workflow and business logic that needs to be kicked off is put directly into object that triggers evs and objects that handle evs.


     In case of mediator, though, business logic and workflow is aggregated into mediator itself. The mediator decides when object should have its mets
     called and atts updated based on factors that mediator knows about. It encapsulates workflow and process, coordinating multiple objects to produce desired system behaviour.
     The individual objects involved in this workflow each know how to perform their own task. But it’s mediator that tells objects when to perform tasks by making decisions athigher
     level than individual objects.

     An event aggregator facilitates“fire and forget” md of communication. The object triggering event doesn’t care if there are any subscribers.
     It just fires event and moves on. A mediator, though, might use evs to make decisions, but it is definitely not “fire and forget”.
     A mediator pays attention toknown set of input or activities so that it can facilitate and coordinate additional behavior withknown set of actors (objects).


     Relationships: When To Use Which
     Understanding similarities and difs between event aggregator and mediator is important for semantic reasons.
     It’s equally as important to understand when to use which pattern, though. The basic semantics and intent of patterns does inform question of when,
     but actual experience in using patterns will help you understand more subtle points and nuanced decisions that have to be made.


     Event Aggregator Use
     In general, event aggregator is used when you either have too many objects to listen to directly, or you have objects that are entirely unrelated.

     When two objects havedirect relationship already – say,parent view and child view – then there might be little benefit in using event aggregator.
     Have child view trigger event and parent view can handle event. This is most commonly seen in bb’s Cl and Md, where all Md evs are bubbled up to and through its parent Cl.
     A Cl often uses md evs to modify state of itself or other mds. Handling “selected” items incl isgood example of this.

     jQ’s on met as event aggregator isgreat example of too many objects to listen to.
     If you have 10, 20 or 200 DOM els that can trigger“click” event,
     it might bebad idea to set uplistener on all of them individually. This could quickly deteriorate performance of app and user experience.
     Instead, using jQ’s on met allows us to aggregate all of evs and reduce overhead of 10, 20, or 200 event handlers down to 1.

     Indirect relationships are also great time to use event aggregators.
     In bb apps, it is very common to have multiple view objects that need to communicate,
     but have no direct relationship. For example, menu system might haveview that handles menu item clicks.
     But we don’t want menu to be directly tied to content views that show all of details and information when
     menu item is clicked.
     Having content and menu coupled together would make code very difficult to maintain,
     in long run. Instead, we can use event aggregator to trigger “menu:click:foo” evs,
     and have“foo” object handle click event to show its content on screen.

     Mediator Use
     A mediator is best applied when two or more objects have indirect working relationship, and business logic or workflow needs to dictate interactions and coordination of these objects.

     A wizard interface isgood example of this, as shown with “orgChart” example, above.
     There are multiple views that facilitate entire workflow of wizard.
     Rather than tightly coupling view together by having them reference each other directly, we can decouple them and more explicitly md workflow between them by introducingmediator.


     The mediator extracts workflow from impl details and createsmore natural abstraction athigher level, showing us atmuch faster glance what that workflow is.
     We no longer have to dig into details of each view in workflow, to see what workflow actually is.


     Event Aggregator And Mediator Together
     The crux of dif between event aggregator andmediator, and why these pattern names should not be interchanged with each other,
     is illustrated best by showing how they can be used together.
     The menu example for event aggregator is perfect place to introducemediator as well.


     Clicking menu item may trigger series of changes throughout app. Some of these changes will be independent of others,
     and using event aggregator for this makes sense. Some of these changes may be internally related to each other, though, and may usemediator to enact those changes.
     A mediator, then, could be set up to listen to event aggregator. It could run its logic and process to facilitate and coordinate many objects that are related to each other,
     but unrelated to original event source.


     MenuItem = bb.V.x({

     ev: {"click .thatThing": "clickedIt"  },

     clickedIt: fn(e){ e.preventDefault();
     // assume this triggers "menu:click:foo"
     bb.trigger("menu:click:" + this.md.get("name"))  }

     })

     // ... somewhere else in app


     MyWorkflow = fn(){  bb.on("menu:click:foo", this.doStuff, this);};

     MyWorkflow.prototype.doStuff = fn(){
     // instantiate multiple objects here.
     // set up event handlers for those objects.
     // coordinate all of objects intomeaningful workflow.
     };



     In this example, when MenuItem with right md is clicked, “menu:click:foo” event will be triggered.
     An instance of “MyWorkflow” object, assuming one is already instantiated, will handle this  spec event and will
     coordinate all of objects that it knows about, to create desired user experience and workflow.


     An event aggregator and mediator have been combined to create much more meaningful experience in both code and app itself.
     We now haveclean separation between menu and workflow through event aggregator and we are still keeping workflow
     itself clean and maintainable through use ofmediator.


     */
    Ma.AR=Ma.AppRouter



    collView=function(){
        (function(root,factory){
            // UMD wrapper

            if ( F(define)  && define.amd ) {

                define( [ 'underscore', 'backbone', 'jquery' ], factory )
            } else if ( typeof exports !== 'undefined' ) {
                // Node/CommonJS
                module.exports = factory( require('underscore' ), require( 'backbone' ), require( 'backbone' ).$ );
            } else {
                // Browser globals
                factory( root._, root.Backbone, ( root.jQuery || root.Zepto || root.$ ) );
            }

        }( this, function( _, Backbone, $ ) {
            var mDefaultModelViewConstructor = Backbone.View
            var kDefaultReferenceBy = "model"
            var kOptionsRequiringRerendering = [ "collection", "modelView", "modelViewOptions", "itemTemplate", "selectableModelsFilter", "sortableModelsFilter", "visibleModelsFilter", "itemTemplateFunction", "detachedRendering", "sortableOptions" ];

            var kStylesForEmptyListCaption = {
                "background" : "transparent",
                "border" : "none",
                "box-shadow" : "none"
            }

            Backbone.CollectionView = Backbone.View.extend( {

                tagName:"ul",

                events:{
                    "mousedown li, td" : "_listItem_onMousedown",
                    "dblclick li, td" : "_listItem_onDoubleClick",
                    "click" : "_listBackground_onClick",
                    "click ul.collection-list, table.collection-list" : "_listBackground_onClick",
                    "keydown" : "_onKeydown"
                },

                // only used if Backbone.Courier is available
                spawnMessages : {"focus" : "focus"},

                //only used if Backbone.Courier is available
                passMessages : { "*" : "." },

                // viewOption definitions with default values.
                initializationOptions : [
                    { "collection" : new Backbone.Collection() },
                    { "modelView" : null },
                    { "modelViewOptions" : {} },
                    { "itemTemplate" : null },
                    { "itemTemplateFunction" : null },
                    { "selectable" : true },
                    { "clickToSelect" : true },
                    { "selectableModelsFilter" : null },
                    { "visibleModelsFilter" : null },
                    { "sortableModelsFilter" : null },
                    { "selectMultiple" : false },
                    { "clickToToggle" : false },
                    { "processKeyEvents" : true },
                    { "sortable" : false },
                    { "sortableOptions" : null },
                    { "detachedRendering" : false },
                    { "emptyListCaption" : null }],

                initialize : function( options ) {
                    Backbone.ViewOptions.add( this, "initializationOptions" ); // setup the ViewOptions functionality.
                    this.setOptions( options ); // and make use of any provided options

                    this._hasBeenRendered = false;

                    if( this._isBackboneCourierAvailable() ) {
                        Backbone.Courier.add( this )}

                    this.$el.data( "view", this ); // needed for connected sortable lists
                    this.$el.addClass( "collection-list" );
                    if( this.selectable ) this.$el.addClass( "selectable" );

                    if( this.processKeyEvents )
                        this.$el.attr( "tabindex", 0 ); // so we get keyboard events

                    this.selectedItems = [];

                    this._updateItemTemplate();

                    if( this.collection )
                        this._registerCollectionEvents();

                    this.viewManager = new ChildViewContainer();
                },

                onOptionsChanged : function( changedOptions, originalOptions ) {
                    var rerender = false;
                    var _this = this;
                    _.each( _.keys( changedOptions ), function( changedOptionKey ) {
                        var newVal = changedOptions[ changedOptionKey ];
                        var oldVal = originalOptions[ changedOptionKey ];
                        switch( changedOptionKey ) {
                            case "collection" :
                                if ( newVal !== oldVal ) {
                                    _this.stopListening( oldVal );
                                    _this._registerCollectionEvents();
                                }
                                break;
                            case "selectMultiple":
                                if( ! newVal && _this.selectedItems.length > 1 )
                                    _this.setSelectedModel( _.first( _this.selectedItems ), { by : "cid" } );
                                break;
                            case "selectable" :
                                if( ! newVal && _this.selectedItems.length > 0 )
                                    _this.setSelectedModels( [] );
                                break;
                            case "selectableModelsFilter" :
                                if( newVal && _.isFunction( newVal ) )
                                    _this._validateSelection();
                                break;
                            case "itemTemplate" :
                                _this._updateItemTemplate();
                                break;
                            case "processKeyEvents" :
                                if( newVal ) _this.$el.attr( "tabindex", 0 ); // so we get keyboard events
                                break;
                            case "modelView" :
                                //need to remove all old view instances
                                _this.viewManager.each( function( view ) {
                                    _this.viewManager.remove( view );
                                    // destroy the View itself
                                    view.remove();
                                } );
                                break;
                        }
                        if( _.contains( kOptionsRequiringRerendering, changedOptionKey ) ) rerender = true;
                    });
                    if( this._hasBeenRendered && rerender ) {
                        this.render(); // Rerender the view if the rerender flag has been set.
                    }
                },

                setOption : function( optionName, optionValue ) { // now is mearly a wrapper around backbone.viewOptions' setOptions()
                    var optionHash = {};
                    optionHash[ optionName ] = optionValue;
                    this.setOptions( optionHash );
                },

                getSelectedModel : function( options ) {
                    return _.first( this.getSelectedModels( options ) );
                },

                getSelectedModels : function ( options ) {
                    var _this = this;

                    options = _.extend( {}, {
                        by : kDefaultReferenceBy
                    }, options );

                    var referenceBy = options.by;
                    var items = [];

                    switch( referenceBy ) {
                        case "id" :
                            _.each( this.selectedItems, function ( item ) {
                                items.push( _this.collection.get( item ).id );
                            } );
                            break;
                        case "cid" :
                            items = items.concat( this.selectedItems );
                            break;
                        case "offset" :
                            var curLineNumber = 0;

                            var itemElements = this._getVisibleItemEls();

                            itemElements.each( function() {
                                var thisItemEl = $( this );
                                if( thisItemEl.is( ".selected" ) )
                                    items.push( curLineNumber );
                                curLineNumber++;
                            } );
                            break;
                        case "model" :
                            _.each( this.selectedItems, function ( item ) {
                                items.push( _this.collection.get( item ) );
                            } );
                            break;
                        case "view" :
                            _.each( this.selectedItems, function ( item ) {
                                items.push( _this.viewManager.findByModel( _this.collection.get( item ) ) );
                            } );
                            break;
                    }

                    return items;

                },

                setSelectedModels : function( newSelectedItems, options ) {
                    if( ! _.isArray( newSelectedItems ) ) throw "Invalid parameter value";
                    if( ! this.selectable && newSelectedItems.length > 0 ) return; // used to throw error, but there are some circumstances in which a list can be selectable at times and not at others, don't want to have to worry about catching errors

                    options = _.extend( {}, {
                        silent : false,
                        by : kDefaultReferenceBy
                    }, options );

                    var referenceBy = options.by;
                    var newSelectedCids = [];

                    switch( referenceBy ) {
                        case "cid" :
                            newSelectedCids = newSelectedItems;
                            break;
                        case "id" :
                            this.collection.each( function( thisModel ) {
                                if( _.contains( newSelectedItems, thisModel.id ) ) newSelectedCids.push( thisModel.cid );
                            } );
                            break;
                        case "model" :
                            newSelectedCids = _.pluck( newSelectedItems, "cid" );
                            break;
                        case "view" :
                            _.each( newSelectedItems, function( item ) {
                                newSelectedCids.push( item.model.cid );
                            } );
                            break;
                        case "offset" :
                            var curLineNumber = 0;
                            var selectedItems = [];

                            var itemElements = this._getVisibleItemEls();
                            itemElements.each( function() {
                                var thisItemEl = $( this );
                                if( _.contains( newSelectedItems, curLineNumber ) )
                                    newSelectedCids.push( thisItemEl.attr( "data-model-cid" ) );
                                curLineNumber++;
                            } );
                            break;
                    }

                    var oldSelectedModels = this.getSelectedModels();
                    var oldSelectedCids = _.clone( this.selectedItems );

                    this.selectedItems = this._convertStringsToInts( newSelectedCids );
                    this._validateSelection();

                    var newSelectedModels = this.getSelectedModels();

                    if( ! this._containSameElements( oldSelectedCids, this.selectedItems ) )
                    {
                        this._addSelectedClassToSelectedItems( oldSelectedCids );

                        if( ! options.silent )
                        {
                            this.trigger( "selectionChanged", newSelectedModels, oldSelectedModels );
                            if( this._isBackboneCourierAvailable() ) {
                                this.spawn( "selectionChanged", {
                                    selectedModels : newSelectedModels,
                                    oldSelectedModels : oldSelectedModels
                                } );
                            }
                        }

                        this.updateDependentControls();
                    }
                },

                setSelectedModel : function( newSelectedItem, options ) {
                    if( ! newSelectedItem && newSelectedItem !== 0 )
                        this.setSelectedModels( [], options );
                    else
                        this.setSelectedModels( [ newSelectedItem ], options );
                },

                render : function(){
                    var _this = this;

                    this._hasBeenRendered = true;

                    if( this.selectable ) this._saveSelection();

                    var modelViewContainerEl;

                    // If collection view element is a table and it has a tbody
                    // within it, render the model views inside of the tbody
                    modelViewContainerEl = this._getContainerEl();

                    var oldViewManager = this.viewManager;
                    this.viewManager = new ChildViewContainer();

                    // detach each of our subviews that we have already created to represent models
                    // in the collection. We are going to re-use the ones that represent models that
                    // are still here, instead of creating new ones, so that we don't loose state
                    // information in the views.
                    oldViewManager.each( function( thisModelView ) {
                        // to boost performance, only detach those views that will be sticking around.
                        // we won't need the other ones later, so no need to detach them individually.
                        if( _this.collection.get( thisModelView.model.cid ) )
                            thisModelView.$el.detach();
                        else
                            thisModelView.remove();
                    } );

                    modelViewContainerEl.empty();
                    var fragmentContainer;

                    if( this.detachedRendering )
                        fragmentContainer = document.createDocumentFragment();

                    this.collection.each( function( thisModel ) {
                        var thisModelView = oldViewManager.findByModelCid( thisModel.cid );
                        if( _.isUndefined( thisModelView ) ) {
                            // if the model view has not already been created on a
                            // previous render then create and initialize it now.
                            thisModelView = this._createNewModelView( thisModel, this._getModelViewOptions( thisModel ) );
                        }

                        this._insertAndRenderModelView( thisModelView, fragmentContainer || modelViewContainerEl );
                    }, this );

                    if( this.detachedRendering )
                        modelViewContainerEl.append( fragmentContainer );

                    if( this.sortable )
                    {
                        var sortableOptions = _.extend( {
                            axis: "y",
                            distance: 10,
                            forcePlaceholderSize : true,
                            start : _.bind( this._sortStart, this ),
                            change : _.bind( this._sortChange, this ),
                            stop : _.bind( this._sortStop, this ),
                            receive : _.bind( this._receive, this ),
                            over : _.bind( this._over, this )
                        }, _.result( this, "sortableOptions" ) );

                        if( _this._isRenderedAsTable() ) {
                            sortableOptions.items = "> tbody > tr:not(.not-sortable)";
                        }
                        else if( _this._isRenderedAsList() ) {
                            sortableOptions.items = "> li:not(.not-sortable)";
                        }

                        this.$el = this.$el.sortable( sortableOptions );
                    }

                    this._showEmptyListCaptionIfAppropriate();

                    this.trigger( "render" );
                    if( this._isBackboneCourierAvailable() )
                        this.spawn( "render" );

                    if( this.selectable ) {
                        this._restoreSelection();
                        this.updateDependentControls();
                    }

                    if( _.isFunction( this.onAfterRender ) )
                        this.onAfterRender();
                },

                _showEmptyListCaptionIfAppropriate : function ( ) {
                    if( this.emptyListCaption ) {
                        var visibleEls = this._getVisibleItemEls();

                        if( visibleEls.length === 0 ) {
                            var emptyListString;

                            if( _.isFunction( this.emptyListCaption ) )
                                emptyListString = this.emptyListCaption();
                            else
                                emptyListString = this.emptyListCaption;

                            var $emptyCaptionEl;
                            var $varEl = $( "<var class='empty-list-caption'>" + emptyListString + "</var>" );

                            //need to wrap the empty caption to make it fit the rendered list structure (either with an li or a tr td)
                            if( this._isRenderedAsList() )
                                $emptyListCaptionEl = $varEl.wrapAll( "<li class='not-sortable'></li>" ).parent().css( kStylesForEmptyListCaption );
                            else
                                $emptyListCaptionEl = $varEl.wrapAll( "<tr class='not-sortable'><td></td></tr>" ).parent().parent().css( kStylesForEmptyListCaption );

                            this._getContainerEl().append( $emptyListCaptionEl );
                        }
                    }
                },

                _removeEmptyListCaption : function( ) {
                    if( this._isRenderedAsList() )
                        this._getContainerEl().find( "> li > var.empty-list-caption" ).parent().remove();
                    else
                        this._getContainerEl().find( "> tr > td > var.empty-list-caption" ).parent().parent().remove();
                },

                // Render a single model view in container object "parentElOrDocumentFragment", which is either
                // a documentFragment or a jquery object. optional arg atIndex is not support for document fragments.
                _insertAndRenderModelView : function( modelView, parentElOrDocumentFragment, atIndex ) {
                    var thisModelViewWrapped = this._wrapModelView( modelView );

                    if( parentElOrDocumentFragment.nodeType === 11 ) // if we are inserting into a document fragment, we need to use the DOM appendChild met
                        parentElOrDocumentFragment.appendChild( thisModelViewWrapped.get( 0 ) );
                    else {
                        if( ! _.isUndefined( atIndex ) && atIndex >= 0 && atIndex < parentElOrDocumentFragment.children().length - 1 )
                        // note this.collection.length might be greater than parentElOrDocumentFragment.children().length here
                            parentElOrDocumentFragment.children().eq( atIndex ).before( thisModelViewWrapped );
                        else
                            parentElOrDocumentFragment.append( thisModelViewWrapped );
                    }

                    // we have to render the modelView after it has been put in context, as opposed to in the
                    // initialize function of the modelView, because some rendering might be dependent on
                    // the modelView's context in the DOM tree. For example, if the modelView stretch()'s itself,
                    // it must be in full context in the DOM tree or else the stretch will not behave as intended.
                    var renderResult = modelView.render();

                    // return false from the view's render function to hide this item
                    if( renderResult === false ) {
                        thisModelViewWrapped.hide();
                        thisModelViewWrapped.addClass( "not-visible" );
                    }

                    var hideThisModelView = false;
                    if( _.isFunction( this.visibleModelsFilter ) ) {
                        hideThisModelView = ! this.visibleModelsFilter( modelView.model );
                        if( hideThisModelView ) {
                            if( thisModelViewWrapped.children().length === 1 )
                                thisModelViewWrapped.hide();
                            else modelView.$el.hide();

                            thisModelViewWrapped.addClass( "not-visible" );
                        }
                    }

                    if( ! hideThisModelView && this.emptyListCaption ) this._removeEmptyListCaption();

                    this.viewManager.add( modelView );
                },

                updateDependentControls : function() {
                    this.trigger( "updateDependentControls", this.getSelectedModels() );
                    if( this._isBackboneCourierAvailable() ) {
                        this.spawn( "updateDependentControls", {
                            selectedModels : this.getSelectedModels()
                        } );
                    }
                },

                // Override `Backbone.View.remove` to also destroy all Views in `viewManager`
                remove : function() {
                    this.viewManager.each( function( view ) {
                        view.remove();
                    } );

                    Backbone.View.prototype.remove.apply( this, arguments );
                },

                // A met to remove the view relating to model.
                _removeModelView : function( model ) {
                    var viewManager = this.viewManager;
                    var view = viewManager.findByModelCid( model.cid );

                    if ( this.selectable ) this._saveSelection();

                    viewManager.remove( view ); // Remove the view from the viewManager
                    view.remove(); // Remove the view from the DOM
                    this._getContainerEl().children( "[data-model-cid=" + model.cid + "]" ).remove(); // Remove the wrapper from the DOM

                    if ( this.selectable ) this._restoreSelection();

                    this._showEmptyListCaptionIfAppropriate();
                },

                _validateSelectionAndRender : function() {
                    this._validateSelection();
                    this.render();
                },

                _registerCollectionEvents : function() {
                    this.listenTo( this.collection, "add", function( model ) {
                        if( this._hasBeenRendered ) {
                            var modelView = this._createNewModelView( model, this._getModelViewOptions( model ) );
                            this._insertAndRenderModelView( modelView, this._getContainerEl(), this.collection.indexOf( model ) );
                        }

                        if( this._isBackboneCourierAvailable() )
                            this.spawn( "add" );
                    } );

                    this.listenTo( this.collection, "remove", function( model ) {
                        if( this._hasBeenRendered )
                            this._removeModelView( model );

                        if( this._isBackboneCourierAvailable() )
                            this.spawn( "remove" );
                    } );

                    this.listenTo( this.collection, "reset", function() {
                        if( this._hasBeenRendered ) this.render();
                        if( this._isBackboneCourierAvailable() )
                            this.spawn( "reset" );
                    } );

                    // we should not be listening to change events on the model as a default behavior. the models
                    // should be responsible for re-rendering themselves if necessary, and if the collection does
                    // also need to re-render as a result of a model change, this should be handled by overriding
                    // this met. by default the collection view should not re-render in response to model changes
                    // this.listenTo( this.collection, "change", function( model ) {
                    // 	if( this._hasBeenRendered ) this.viewManager.findByModel( model ).render();
                    // 	if( this._isBackboneCourierAvailable() )
                    // 		this.spawn( "change", { model : model } );
                    // } );

                    this.listenTo( this.collection, "sort", function( collection, options ) {
                        if( this._hasBeenRendered && options.add !== true ) this.render();
                        if( this._isBackboneCourierAvailable() )
                            this.spawn( "sort" );
                    } );
                },

                _getContainerEl : function() {
                    if ( this._isRenderedAsTable() ) {
                        // not all tables have a tbody, so we test
                        var tbody = this.$el.find( "> tbody" );
                        if ( tbody.length > 0 )
                            return tbody;
                    }
                    return this.$el;
                },

                _getClickedItemId : function( theEvent ) {
                    var clickedItemId = null;

                    // important to use currentTarget as opposed to target, since we could be bubg
                    // an event that took place within another collectionList
                    var clickedItemEl = $( theEvent.currentTarget );
                    if( clickedItemEl.closest( ".collection-list" ).get(0) !== this.$el.get(0) ) return;

                    // determine which list item was clicked. If we clicked in the blank area
                    // underneath all the elements, we want to know that too, since in this
                    // case we will want to deselect all elements. so check to see if the clicked
                    // DOM element is the list itself to find that out.
                    var clickedItem = clickedItemEl.closest( "[data-model-cid]" );
                    if( clickedItem.length > 0 )
                    {
                        clickedItemId = clickedItem.attr( "data-model-cid" );
                        if( $.isNumeric( clickedItemId ) ) clickedItemId = parseInt( clickedItemId, 10 );
                    }

                    return clickedItemId;
                },

                _updateItemTemplate : function() {
                    var itemTemplateHtml;
                    if( this.itemTemplate )
                    {
                        if( $( this.itemTemplate ).length === 0 )
                            throw "Could not find item template from selector: " + this.itemTemplate;

                        itemTemplateHtml = $( this.itemTemplate ).html();
                    }
                    else
                        itemTemplateHtml = this.$( ".item-template" ).html();

                    if( itemTemplateHtml ) this.itemTemplateFunction = _.template( itemTemplateHtml );

                },

                _validateSelection : function() {
                    // note can't use the collection's proxy to underscore because "cid" is not an attribute,
                    // but an element of the model object itself.
                    var modelReferenceIds = _.pluck( this.collection.models, "cid" );
                    this.selectedItems = _.intersection( modelReferenceIds, this.selectedItems );

                    if( _.isFunction( this.selectableModelsFilter ) )
                    {
                        this.selectedItems = _.filter( this.selectedItems, function( thisItemId ) {
                            return this.selectableModelsFilter.call( this, this.collection.get( thisItemId ) );
                        }, this );
                    }
                },

                _saveSelection : function() {
                    // save the current selection. use restoreSelection() to restore the selection to the state it was in the last time saveSelection() was called.
                    if( ! this.selectable ) throw "Attempt to save selection on non-selectable list";
                    this.savedSelection = {
                        items : _.clone( this.selectedItems ),
                        offset : this.getSelectedModel( { by : "offset" } )
                    };
                },

                _restoreSelection : function() {
                    if( ! this.savedSelection ) throw "Attempt to restore selection but no selection has been saved!";

                    // reset selectedItems to empty so that we "redraw" all "selected" classes
                    // when we set our new selection. We do this because it is likely that our
                    // contents have been refreshed, and we have thus lost all old "selected" classes.
                    this.setSelectedModels( [], { silent : true } );

                    if( this.savedSelection.items.length > 0 )
                    {
                        // first try to restore the old selected items using their reference ids.
                        this.setSelectedModels( this.savedSelection.items, { by : "cid", silent : true } );

                        // all the items with the saved reference ids have been rmd from the list.
                        // ok. try to restore the selection based on the offset that used to be selected.
                        // this is the expected behavior after a item is deleted from a list (i.e. select
                        // the line that immediately follows the deleted line).
                        if( this.selectedItems.length === 0 )
                            this.setSelectedModel( this.savedSelection.offset, { by : "offset" } );

                        // Trigger a selection changed if the previously selected items were not all found
                        if (this.selectedItems.length !== this.savedSelection.items.length)
                        {
                            this.trigger( "selectionChanged", this.getSelectedModels(), [] );
                            if( this._isBackboneCourierAvailable() ) {
                                this.spawn( "selectionChanged", {
                                    selectedModels : this.getSelectedModels(),
                                    oldSelectedModels : []
                                } );
                            }
                        }
                    }

                    delete this.savedSelection;
                },

                _addSelectedClassToSelectedItems : function( oldItemsIdsWithSelectedClass ) {
                    if( _.isUndefined( oldItemsIdsWithSelectedClass ) ) oldItemsIdsWithSelectedClass = [];

                    // oldItemsIdsWithSelectedClass is used for optimization purposes only. If this info is supplied then we
                    // only have to add / remove the "selected" class from those items that "selected" state has changed.

                    var itemsIdsFromWhichSelectedClassNeedsToBeRemoved = oldItemsIdsWithSelectedClass;
                    itemsIdsFromWhichSelectedClassNeedsToBeRemoved = _.without( itemsIdsFromWhichSelectedClassNeedsToBeRemoved, this.selectedItems );

                    _.each( itemsIdsFromWhichSelectedClassNeedsToBeRemoved, function( thisItemId ) {
                        this._getContainerEl().find( "[data-model-cid=" + thisItemId + "]" ).removeClass( "selected" );
                    }, this );

                    var itemsIdsFromWhichSelectedClassNeedsToBeAdded = this.selectedItems;
                    itemsIdsFromWhichSelectedClassNeedsToBeAdded = _.without( itemsIdsFromWhichSelectedClassNeedsToBeAdded, oldItemsIdsWithSelectedClass );

                    _.each( itemsIdsFromWhichSelectedClassNeedsToBeAdded, function( thisItemId ) {
                        this._getContainerEl().find( "[data-model-cid=" + thisItemId + "]" ).addClass( "selected" );
                    }, this );
                },

                _reorderCollectionBasedOnHTML : function() {
                    var _this = this;

                    this._getContainerEl().children().each( function() {
                        var thisModelCid = $( this ).attr( "data-model-cid" );

                        if( thisModelCid )
                        {
                            // remove the current model and then add it back (at the end of the collection).
                            // When we are done looping through all models, they will be in the correct order.
                            var thisModel = _this.collection.get( thisModelCid );
                            if( thisModel )
                            {
                                _this.collection.remove( thisModel, { silent : true } );
                                _this.collection.add( thisModel, { silent : true, sort : ! _this.collection.comparator } );
                            }
                        }
                    } );

                    this.collection.trigger( "reorder" );

                    if( this._isBackboneCourierAvailable() ) this.spawn( "reorder" );

                    if( this.collection.comparator ) this.collection.sort();

                },

                _getModelViewConstructor : function( thisModel ) {
                    return this.modelView || mDefaultModelViewConstructor;
                },

                _getModelViewOptions : function( thisModel ) {
                    return _.extend( { model : thisModel }, this.modelViewOptions );
                },

                _createNewModelView : function( model, modelViewOptions ) {
                    var modelViewConstructor = this._getModelViewConstructor( model );
                    if( _.isUndefined( modelViewConstructor ) ) throw "Could not find modelView constructor for model";

                    var newModelView = new( modelViewConstructor )( modelViewOptions );
                    newModelView.collectionListView = this;

                    return newModelView;
                },

                _wrapModelView : function( modelView ) {
                    var _this = this;

                    // we use items client ids as opposed to real ids, since we may not have a representation
                    // of these models on the server
                    var wrappedModelView;

                    if( this._isRenderedAsTable() ) {
                        // if we are rendering the collection in a table, the template $el is a tr so we just need to set the data-model-cid
                        wrappedModelView = modelView.$el.attr( "data-model-cid", modelView.model.cid );
                    }
                    else if( this._isRenderedAsList() ) {
                        // if we are rendering the collection in a list, we need wrap each item in an <li></li> (if its not already an <li>)
                        // and set the data-model-cid
                        if( modelView.$el.prop( "tagName" ).toLowerCase() === "li" ) {
                            wrappedModelView = modelView.$el.attr( "data-model-cid", modelView.model.cid );
                        } else {
                            wrappedModelView = modelView.$el.wrapAll( "<li data-model-cid='" + modelView.model.cid + "'></li>" ).parent();
                        }
                    }

                    if( _.isFunction( this.sortableModelsFilter ) )
                        if( ! this.sortableModelsFilter.call( _this, modelView.model ) )
                            wrappedModelView.addClass( "not-sortable" );

                    if( _.isFunction( this.selectableModelsFilter ) )
                        if( ! this.selectableModelsFilter.call( _this, modelView.model ) )
                            wrappedModelView.addClass( "not-selectable" );

                    return wrappedModelView;
                },

                _convertStringsToInts : function( theArray ) {
                    return _.map( theArray, function( thisEl ) {
                        if( ! _.isString( thisEl ) ) return thisEl;
                        var thisElAsNumber = parseInt( thisEl, 10 );
                        return( thisElAsNumber == thisEl ? thisElAsNumber : thisEl );
                    } );
                },

                _containSameElements : function( arrayA, arrayB ) {
                    if( arrayA.length != arrayB.length ) return false;
                    var intersectionSize = _.intersection( arrayA, arrayB ).length;
                    return intersectionSize == arrayA.length; // and must also equal arrayB.length, since arrayA.length == arrayB.length
                },

                _isRenderedAsTable : function() {
                    return this.$el.prop( "tagName" ).toLowerCase() === "table";
                },

                _isRenderedAsList : function() {
                    return ! this._isRenderedAsTable();
                },

                // Returns the wrapper HTML element for each visible modelView.
                // When rendering in a table context, the returned elements are the $el of each modelView.
                // When rendering in a list context,
                //   If the $el of the modelView is an <li>, the returned elements are the $el of each modelView.
                //   Otherwise, the returned elements are the <li>'s the collectionView wrapped around each modelView $el.
                _getVisibleItemEls : function() {
                    var itemElements = [];
                    itemElements = this._getContainerEl().find( "> [data-model-cid]:not(.not-visible)" );

                    return itemElements;
                },

                _charCodes : {
                    upArrow : 38,
                    downArrow : 40
                },

                _isBackboneCourierAvailable : function() {
                    return !_.isUndefined( Backbone.Courier );
                },

                _sortStart : function( event, ui ) {
                    var modelBeingSorted = this.collection.get( ui.item.attr( "data-model-cid" ) );
                    this.trigger( "sortStart", modelBeingSorted );
                    if( this._isBackboneCourierAvailable() )
                        this.spawn( "sortStart", { modelBeingSorted : modelBeingSorted } );
                },

                _sortChange : function( event, ui ) {
                    var modelBeingSorted = this.collection.get( ui.item.attr( "data-model-cid" ) );
                    this.trigger( "sortChange", modelBeingSorted );
                    if( this._isBackboneCourierAvailable() )
                        this.spawn( "sortChange", { modelBeingSorted : modelBeingSorted } );
                },

                _sortStop : function( event, ui ) {
                    var modelBeingSorted = this.collection.get( ui.item.attr( "data-model-cid" ) );
                    var modelViewContainerEl = this._getContainerEl();
                    var newIndex = modelViewContainerEl.children().index( ui.item );

                    if( newIndex == -1 ) {
                        // the element was rmd from this list. can happen if this sortable is connected
                        // to another sortable, and the item was dropped into the other sortable.
                        this.collection.remove( modelBeingSorted );
                    }

                    this._reorderCollectionBasedOnHTML();
                    this.updateDependentControls();
                    this.trigger( "sortStop", modelBeingSorted, newIndex );
                    if( this._isBackboneCourierAvailable() )
                        this.spawn( "sortStop", { modelBeingSorted : modelBeingSorted, newIndex : newIndex } );
                },

                _receive : function( event, ui ) {
                    var senderListEl = ui.sender;
                    var senderCollectionListView = senderListEl.data( "view" );
                    if( ! senderCollectionListView || ! senderCollectionListView.collection ) return;

                    var newIndex = this._getContainerEl().children().index( ui.item );
                    var modelReceived = senderCollectionListView.collection.get( ui.item.attr( "data-model-cid" ) );
                    senderCollectionListView.collection.remove( modelReceived );
                    this.collection.add( modelReceived, { at : newIndex } );
                    modelReceived.collection = this.collection; // otherwise will not get properly set, since modelReceived.collection might already have a value.
                    this.setSelectedModel( modelReceived );
                },

                _over : function( event, ui ) {
                    // when an item is being dragged into the sortable,
                    // hide the empty list caption if it exists
                    this._getContainerEl().find( "> var.empty-list-caption" ).hide();
                },

                _onKeydown : function( event ) {
                    if( ! this.processKeyEvents ) return true;

                    var trap = false;

                    if( this.getSelectedModels( { by : "offset" } ).length == 1 )
                    {
                        // need to trap down and up arrows or else the browser
                        // will end up scrolling a autoscroll div.

                        var currentOffset = this.getSelectedModel( { by : "offset" } );
                        if( event.which === this._charCodes.upArrow && currentOffset !== 0 )
                        {
                            this.setSelectedModel( currentOffset - 1, { by : "offset" } );
                            trap = true;
                        }
                        else if( event.which === this._charCodes.downArrow && currentOffset !== this.collection.length - 1 )
                        {
                            this.setSelectedModel( currentOffset + 1, { by : "offset" } );
                            trap = true;
                        }
                    }

                    return ! trap;
                },

                _listItem_onMousedown : function( theEvent ) {
                    if( ! this.selectable || ! this.clickToSelect ) return;

                    var clickedItemId = this._getClickedItemId( theEvent );

                    if( clickedItemId )
                    {
                        // Exit if an unselectable item was clicked
                        if( _.isFunction( this.selectableModelsFilter ) &&
                            ! this.selectableModelsFilter.call( this, this.collection.get( clickedItemId ) ) )
                        {
                            return;
                        }

                        // a selectable list item was clicked
                        if( this.selectMultiple && theEvent.shiftKey )
                        {
                            var firstSelectedItemIndex = -1;

                            if( this.selectedItems.length > 0 )
                            {
                                this.collection.find( function( thisItemModel ) {
                                    firstSelectedItemIndex++;

                                    // exit when we find our first selected element
                                    return _.contains( this.selectedItems, thisItemModel.cid );
                                }, this );
                            }

                            var clickedItemIndex = -1;
                            this.collection.find( function( thisItemModel ) {
                                clickedItemIndex++;

                                // exit when we find the clicked element
                                return thisItemModel.cid == clickedItemId;
                            }, this );

                            var shiftKeyRootSelectedItemIndex = firstSelectedItemIndex == -1 ? clickedItemIndex : firstSelectedItemIndex;
                            var minSelectedItemIndex = Math.min( clickedItemIndex, shiftKeyRootSelectedItemIndex );
                            var maxSelectedItemIndex = Math.max( clickedItemIndex, shiftKeyRootSelectedItemIndex );

                            var newSelectedItems = [];
                            for( var thisIndex = minSelectedItemIndex; thisIndex <= maxSelectedItemIndex; thisIndex ++ )
                                newSelectedItems.push( this.collection.at( thisIndex ).cid );
                            this.setSelectedModels( newSelectedItems, { by : "cid" } );

                            // shift clicking will usually highlight selectable text, which we do not want.
                            // this is a cross browser (hopefully) snippet that deselects all text selection.
                            if( document.selection && document.selection.empty )
                                document.selection.empty();
                            else if(window.getSelection) {
                                var sel = window.getSelection();
                                if( sel && sel.removeAllRanges )
                                    sel.removeAllRanges();
                            }
                        }
                        else if( this.selectMultiple && ( this.clickToToggle || theEvent.metaKey ) )
                        {
                            if( _.contains( this.selectedItems, clickedItemId ) )
                                this.setSelectedModels( _.without( this.selectedItems, clickedItemId ), { by : "cid" } );
                            else this.setSelectedModels( _.union( this.selectedItems, clickedItemId ), { by : "cid" } );
                        }
                        else
                            this.setSelectedModels( [ clickedItemId ], { by : "cid" } );
                    }
                    else
                    // the blank area of the list was clicked
                        this.setSelectedModels( [] );

                },

                _listItem_onDoubleClick : function( theEvent ) {
                    var clickedItemId = this._getClickedItemId( theEvent );

                    if( clickedItemId )
                    {
                        var clickedModel = this.collection.get( clickedItemId );
                        this.trigger( "doubleClick", clickedModel );
                        if( this._isBackboneCourierAvailable() )
                            this.spawn( "doubleClick", { clickedModel : clickedModel } );
                    }
                },

                _listBackground_onClick : function( theEvent ) {
                    if( ! this.selectable ) return;
                    if( ! $( theEvent.target ).is( ".collection-list" ) ) return;

                    this.setSelectedModels( [] );
                }

            }, {
                setDefaultModelViewConstructor : function( theConstructor ) {
                    mDefaultModelViewConstructor = theConstructor;
                }
            });

            // Backbone.ViewOptions
            // --------------------
            // v0.2.0
            //
            // Copyright (c)2014 Rotunda Software
            //
            // https://github.com/rotundasoftware/backbone.viewOptions

            // Backbone.ViewOptions
            // --------------------
            //
            // An plugin to declare and get/set options on views.

            /*
             * Backbone.ViewOptions, v0.2
             * Copyright (c)2014 Rotunda Software, LLC.
             * Distributed under MIT license
             * http://github.com/rotundasoftware/backbone.viewOptions
             */

            Backbone.ViewOptions = {};

            Backbone.ViewOptions.add = function( view, optionsDeclarationsProperty ) {
                if( _.isUndefined( optionsDeclarationsProperty ) ) optionsDeclarationsProperty = "options";

                // ****************** Public mets added to view ******************

                view.setOptions = function( options ) {
                    var _this = this;
                    var optionsThatWereChanged = {};
                    var optionsThatWereChangedOriginalValues = {};

                    var optionDeclarations = _.result( this, optionsDeclarationsProperty );

                    if( ! _.isUndefined( optionDeclarations ) ) {
                        var normalizedOptionDeclarations = _normalizeOptionDeclarations( optionDeclarations );

                        _.each( normalizedOptionDeclarations, function( thisOptionDeclaration ) {
                            thisOptionName = thisOptionDeclaration.name;
                            thisOptionRequired = thisOptionDeclaration.required;
                            thisOptionDefaultValue = thisOptionDeclaration.defaultValue;

                            if( thisOptionRequired ) {
                                // note we do not throw an error if a required option is not supplied, but it is
                                // found on the object itself (due to a prior call of view.setOptions, most likely)
                                if( ! options ||
                                    ( ( ! _.contains( _.keys( options ), thisOptionName ) && _.isUndefined( _this[ thisOptionName ] ) ) ) ||
                                    _.isUndefined( options[ thisOptionName ] ) )
                                    throw new Error( "Required option \"" + thisOptionName + "\" was not supplied." );
                            }

                            // atch the supplied value of this option, or the appropriate default value, to the view object
                            if( options && thisOptionName in options ) {
                                // if this option already exists on the view, make a note that we will be changing it
                                if( ! _.isUndefined( _this[ thisOptionName ] ) ) {
                                    optionsThatWereChangedOriginalValues[ thisOptionName ] = _this[ thisOptionName ];
                                    optionsThatWereChanged[ thisOptionName ] = options[ thisOptionName ];
                                }
                                _this[ thisOptionName ] = options[ thisOptionName ];
                                // note we do NOT delete the option off the options object here so that
                                // multiple views can be passed the same options object without issue.
                            }
                            else if( ! _.isUndefined( thisOptionDefaultValue ) && _.isUndefined( _this[ thisOptionName ] ) ) {
                                // note defaults do not write over any existing properties on the view itself.
                                _this[ thisOptionName ] = thisOptionDefaultValue;
                            }
                        } );
                    }

                    if( _.keys( optionsThatWereChanged ).length > 0 ) {
                        if( _.isFunction( _this.onOptionsChanged ) )
                            _this.onOptionsChanged( optionsThatWereChanged, optionsThatWereChangedOriginalValues );
                        else if( _.isFunction( _this._onOptionsChanged ) )
                            _this._onOptionsChanged( optionsThatWereChanged, optionsThatWereChangedOriginalValues );
                    }
                };

                view.getOptions = function() {
                    var optionDeclarations = _.result( this, optionsDeclarationsProperty );
                    if( _.isUndefined( optionDeclarations ) ) return [];

                    var normalizedOptionDeclarations = _normalizeOptionDeclarations( optionDeclarations );
                    var optionsNames = _.pluck( normalizedOptionDeclarations, "name" );

                    return _.pick( this, optionsNames );
                };
            };

            // ****************** Private Utility Functions ******************

            function _normalizeOptionDeclarations( optionDeclarations ) {
                // convert our short-hand option syntax (with exclamation marks, etc.)
                // to a simple array of standard option declaration objects.
                var normalizedOptionDeclarations = [];

                if( ! _.isArray( optionDeclarations ) )  {
                    throw new Error( "Option declarations must be an array." );
                }

                _.each( optionDeclarations, function( thisOptionDeclaration ) {
                    var thisOptionName, thisOptionRequired, thisOptionDefaultValue;

                    thisOptionRequired = false;
                    thisOptionDefaultValue = undefined;

                    if( _.isString( thisOptionDeclaration ) )
                        thisOptionName = thisOptionDeclaration;
                    else if( _.isObject( thisOptionDeclaration ) ) {
                        thisOptionName = _.first( _.keys( thisOptionDeclaration ) );
                        thisOptionDefaultValue = _.clone( thisOptionDeclaration[ thisOptionName ] );
                    }
                    else throw new Error( "Each element in the option declarations array must be either a string or an object." );

                    if( thisOptionName[ thisOptionName.length - 1 ] === "!" ) {
                        thisOptionRequired = true;
                        thisOptionName = thisOptionName.slice( 0, thisOptionName.length - 1 );
                    }

                    normalizedOptionDeclarations.push( {
                        name : thisOptionName,
                        required : thisOptionRequired,
                        defaultValue : thisOptionDefaultValue
                    } );
                } );

                return normalizedOptionDeclarations;
            };


            // Backbone.BabySitter
            // -------------------
            // v0.0.6
            //
            // Copyright (c)2013 Derick Bailey, Muted Solutions, LLC.
            // Distributed under MIT license
            //
            // http://github.com/babysitterjs/backbone.babysitter

            // Backbone.ChildViewContainer
            // ---------------------------
            //
            // Provide a container to store, retrieve and
            // shut down child views.

            ChildViewContainer = (function(Backbone, _){

                // Container Constructor
                // ---------------------

                var Container = function(views){
                    this._views = {};
                    this._indexByModel = {};
                    this._indexByCustom = {};
                    this._updateLength();

                    _.each(views, this.add, this);
                };

                // Container Methods
                // -----------------

                _.extend(Container.prototype, {

                    // Add a view to this container. Stores the view
                    // by `cid` and makes it searchable by the model
                    // cid (and model itself). Optionally specify
                    // a custom key to store an retrieve the view.
                    add: function(view, customIndex){
                        var viewCid = view.cid;

                        // store the view
                        this._views[viewCid] = view;

                        // index it by model
                        if (view.model){
                            this._indexByModel[view.model.cid] = viewCid;
                        }

                        // index by custom
                        if (customIndex){
                            this._indexByCustom[customIndex] = viewCid;
                        }

                        this._updateLength();
                    },

                    // Find a view by the model that was atched to
                    // it. Uses the model's `cid` to find it.
                    findByModel: function(model){
                        return this.findByModelCid(model.cid);
                    },

                    // Find a view by the `cid` of the model that was atched to
                    // it. Uses the model's `cid` to find the view `cid` and
                    // retrieve the view using it.
                    findByModelCid: function(modelCid){
                        var viewCid = this._indexByModel[modelCid];
                        return this.findByCid(viewCid);
                    },

                    // Find a view by a custom indexer.
                    findByCustom: function(index){
                        var viewCid = this._indexByCustom[index];
                        return this.findByCid(viewCid);
                    },

                    // Find by index. This is not guaranteed to be a
                    // stable index.
                    findByIndex: function(index){
                        return _.values(this._views)[index];
                    },

                    // retrieve a view by it's `cid` directly
                    findByCid: function(cid){
                        return this._views[cid];
                    },

                    findIndexByCid : function( cid ) {
                        var index = -1;
                        var view = _.find( this._views, function ( view ) {
                            index++;
                            if( view.model.cid == cid )
                                return view;
                        } );
                        return ( view ) ? index : -1;
                    },

                    // Remove a view
                    remove: function(view){
                        var viewCid = view.cid;

                        // delete model index
                        if (view.model){
                            delete this._indexByModel[view.model.cid];
                        }

                        // delete custom index
                        _.any(this._indexByCustom, function(cid, key) {
                            if (cid === viewCid) {
                                delete this._indexByCustom[key];
                                return true;
                            }
                        }, this);

                        // remove the view from the container
                        delete this._views[viewCid];

                        // update the length
                        this._updateLength();
                    },

                    // Call a met on every view in the container,
                    // passing parameters to the call met one at a
                    // time, like `function.call`.
                    call: function(met){
                        this.apply(met, _.tail(arguments));
                    },

                    // Apply a met on every view in the container,
                    // passing parameters to the call met one at a
                    // time, like `function.apply`.
                    apply: function(met, args){
                        _.each(this._views, function(view){
                            if (_.isFunction(view[met])){
                                view[met].apply(view, args || []);
                            }
                        });
                    },

                    // Update the `.length` attribute on this container
                    _updateLength: function(){
                        this.length = _.size(this._views);
                    }
                });

                // Borrowing this code from Backbone.Collection:
                // http://backbonejs.org/docs/backbone.html#section-106
                //
                // Mix in mets from Underscore, for iteration, and other
                // collection related features.
                var mets = ['forEach', 'each', 'map', 'find', 'detect', 'filter',
                    'select', 'reject', 'every', 'all', 'some', 'any', 'include',
                    'contains', 'invoke', 'toArray', 'first', 'initial', 'rest',
                    'last', 'without', 'isEmpty', 'pluck'];

                _.each(mets, function(met) {
                    Container.prototype[met] = function() {
                        var views = _.values(this._views);
                        var args = [views].concat(_.toArray(arguments));
                        return _[met].apply(_, args);
                    };
                });

                // return the public API
                return Container;
            })(Backbone, _);

            return Backbone.CollectionView;
        } ) );
    }



function marLV(){
    MLV=function(){$.x()

        /*

         A LayoutView is a hybrid of an ItemView and a collection of Region objects. They
         are ideal for rendering application layouts with multiple sub-regions
         managed by specified region managers.

         A layoutView can also act as a composite-view to aggregate multiple
         views and sub-application areas of the screen allowing applications to
         attach multiple region managers to dynamically rendered HTML.

         You can create complex views by nesting layoutView managers within Regions.

         For a more in-depth discussion on LayoutViews, see the blog post
         Manage Layouts And Nested Views With Backbone.Ma

         Please see
         the Ma.ItemView documentation
         for more information on available features and functionality.

         Additionally, interactions with Ma.Region
         will provide features such as onShow callbacks, etc. Please see
         the Region documentation for more information.

         Documentation Index

         Basic Usage
         Region Options
         LayoutView.childEvents
         Specifying Regions As A Function
         Overriding the default RegionManager
         Region Availability
         Re-Rendering A LayoutView
         Avoid Re-Rendering The Entire LayoutView
         Nested LayoutViews And Views
         Efficient Nested View Structures
         Use of the attach Event
         Destroying A LayoutView
         Custom Region Class
         Adding And Removing Regions
         Region Naming
         Basic Usage

         The LayoutView extends directly from ItemView and adds the ability
         to specify regions which become Region instances that are attached
         to the layoutView.

         <script id="layout-view-template" type="text/template">
         <section>
         <navigation id="menu">...</navigation>
         <article id="content">...</article>
         </section>
         </script>
         var AppLayoutView = Backbone.Ma.LayoutView.extend({
         template: "#layout-view-template",

         regions: {
         menu: "#menu",
         content: "#content"
         }
         });

         var layoutView = new AppLayoutView();
         layoutView.render();
         Once you've rendered the layoutView, you now have direct access
         to all of the specified regions as region managers.

         layoutView.getRegion('menu').show(new MenuView());

         layoutView.getRegion('content').show(new MainContentView());
         There are also helpful shortcuts for more concise syntax.

         layoutView.showChildView('menu', new MenuView());

         layoutView.showChildView('content', new MainContentView());
         Region Options

         A LayoutView can take a regions hash that allows you to specify regions per LayoutView instance.
         */
        new Ma.LayoutView({
            regions: {
                "cat": ".doge",
                "wow": {
                    selector: ".such",
                    regionClass: Coin
                }
            }
        })
        /*


         LayoutView childEvents

         You can specify a childEvents hash or method which allows you to capture all
         bubbling childEvents without having to manually set bindings.

         The keys of the hash can either be a function or a string
         that is the name of a method on the layout view.

         The function is called in the context of the view. The first parameter is
         the child view, which emitted the event, the remainder are the arguments
         associated with the event.

         // childEvents can be specified as a hash...

         // This callback will be called whenever a child is rendered or emits a `render` event
         */

        MyLayoutView = Ma.LayoutView.extend({

            childEvents:
            {render: function(childView) {$l("a childView has been rendered") }}

        })

        // ...or as a function that returns a hash.


        MyLayoutView = Ma.LayoutView.extend({     childEvents: function() {return {render: this.onChildRender}}, onChildRender: function(childView) {}})



        // This also works for custom events that you might fire on your child views.
        // The child view fires a custom event, `show:message`






        ChildView = new Ma.ItemView.extend({events: {'click .button': 'showMessage'},

            showMessage: function (e) {$l('The button was clicked.'); this.triggerMethod('show:message', msg)}})

        // The parent uses childEvents to catch that custom event on the child view
        ParentView = new Ma.LayoutView.extend({
            childEvents: {'show:message': function (childView, msg) {$l('The show:message event bubbled up to the parent.')}},

            // Alternatively we can use the trigger notation with childview: as the
            // prefix

            onChildviewShowMessage: function (childView, msg) {$l('The show:message event bubbled up to the parent.')}})
        /*
         Specifying Regions As A Function

         Regions can be specified on a LayoutView using a function that returns
         an object with the region definitions. The returned object follow the
         same rules for defining a region, as outlined above.
         */
        Ma.LayoutView.extend({regions: function(options){return { fooRegion: "#foo-element"  } }, })
        /*
         Note that the function receives the view's options arguments that
         were passed in to the view's constructor. this.options is not yet
         available when the regions are first initialized, so the options
         must be accessed through this parameter.

         Overriding the default RegionManager

         If you need the RegionManager's class chosen dynamically, specify getRegionManager:
         */
        Ma.LayoutView.extend({
            // ...

            getRegionManager: function () {return new MyRegionManager()}
            // custom logic

        })

        /*
         This can be useful if you want to attach LayoutView's regions to your own instance of
         RegionManager.

         Region Availability

         Any defined regions within a layoutView will be available to the
         View or any calling code immediately after instantiating the
         View. This allows a View to be attached to an existing
         DOM element in an HTML page, without the need to call a render
         method or anything else, to create the regions.

         However, a region will only be able to populate itself if the
         View has access to the elements specified within the region
         definitions. That is, if your view has not yet rendered, your
         regions may not be able to find the element that you've
         specified for them to manage. In that scenario, using the
         region will result in no changes to the DOM.

         Re-Rendering A LayoutView

         A layoutView can be rendered as many times as needed, but renders
         after the first one behave differently than the initial render.

         The first time a layoutView is rendered, nothing special happens. It just
         delegates to the ItemView prototype to do the render. After the
         first render has happened, though, the render function is modified to
         account for re-rendering with regions in the layoutView.

         After the first render, all subsequent renders will force every
         region to be emptied by calling the empty method on them. This will
         force every view in the region, and sub-views if any, to be destroyed
         as well. Once the regions are emptied, the regions will also be
         reset so that they are no longer referencing the element of the previous
         layoutView render.

         Then after the layoutView is finished re-rendering itself,
         showing a view in the layoutView's regions will cause the regions to attach
         themselves to the new elements in the layoutView.

         Avoid Re-Rendering The Entire LayoutView

         There are times when re-rendering the entire layoutView is necessary. However,
         due to the behavior described above, this can cause a large amount of
         work to be needed in order to fully restore the layoutView and all of the
         views that the layoutView is displaying.

         Therefore, it is suggested that you avoid re-rendering the entire
         layoutView unless absolutely necessary. Instead, if you are binding the
         layoutView's template to a model and need to update portions of the layoutView,
         you should listen to the model's "change" events and only update the
         necessary DOM elements.

         Nested LayoutViews And Views

         Since the LayoutView extends directly from ItemView, it
         has all of the core functionality of an item view. This includes
         the methods necessary to be shown within an existing region manager.

         In the following example, we will use the Application's Regions
         as the base of a deeply nested view structure.

         // Create an Application
         */

        MyApp = new Ma.Application();

        // Add a region
        MyApp.addRegions({ main: "main" })

        // Create a new LayoutView
        layoutView = new Ma.LayoutView({
            // This option removes the layoutView from
            // the DOM before destroying the children
            // preventing repaints as each option is removed.
            // However, it makes it difficult to do close animations
            // for a child view (false by default)

            destroyImmediate: true })

        // Lastly, show the LayoutView in the App's mainRegion

        MyApp.getRegion('main').show(layoutView);

        /*
         You can nest LayoutViews as deeply as you want. This provides for a well organized,
         nested view structure.

         For example, to nest 3 layouts:
         */
        layout1 = new Layout1()
        layout2 = new Layout2()
        layout3 = new Layout3()

        MyApp.getRegion('main').show(layout1)

        layout1.showChildView('region1', layout2)
        layout2.showChildView('region2', layout3)

        /*
         Efficient Nested View Structures

         The above example works great, but it causes three separate paints: one for each layout that's being
         shown. Ma provides a simple mechanism to infinitely nest views in a single paint: just render all
         of the children in the onBeforeShow callback.

         */
        ParentLayout = Ma.LayoutView.extend({
            onBeforeShow: function() {
                this.showChildView('header', new HeaderView());
                this.showChildView('footer', new FooterView());
            }
        })

        myRegion.show(new ParentLayout());

        /*


         In this example, the doubly-nested view structure will be rendered in a single paint.

         This system is recursive, so it works for any deeply nested structure. The child views
         you show can render their own child views within their onBeforeShow callbacks!

         Use of the attach event

         Often times you need to know when your views in the view tree have been attached to the document,
         like when using certain jQuery plugins. The attach event, and associated onAttach callback, are perfect for this
         use case. Start with a Region that's a child of the document and show any LayoutView in it: every view in the tree
         (including the parent LayoutView) will have the attach event triggered on it when they have been
         attached to the document.

         Note that inefficient tree rendering will cause the attach event to be fired multiple times. This
         situation can occur if you render the children views after the parent has been rendered, such as using
         onShow to render children. As a rule of thumb, most of the time you'll want to render any nested views in
         the onBeforeShow callback.

         Destroying A LayoutView

         When you are finished with a layoutView, you can call the
         destroy method on it. This will ensure that all of the region managers
         within the layoutView are destroyed correctly, which in turn
         ensures all of the views shown within the regions are destroyed correctly.

         If you are showing a layoutView within a parent region manager, replacing
         the layoutView with another view or another layoutView will destroy the current
         one, the same it will destroy a view.

         All of this ensures that layoutViews and the views that they
         contain are cleaned up correctly.

         When calling destroy on a layoutView, the layoutView will be returned. This can be useful for
         chaining.

         Custom Region Class

         If you have the need to replace the Region with a region class of
         your own implementation, you can specify an alternate class to use
         with the regionClass property of the LayoutView.
         */
        MyLayoutView = Backbone.Ma.LayoutView.extend({ regionClass: 'SomeCustomRegion' })

        // You can also specify custom Region classes for each region:


        AppLayoutView = Ma.LayoutView.extend({
            template: "#layout-view-template",
            regionClass: 'SomeDefaultCustomRegion',
            regions: {
                menu: {selector: "#menu", regionClass: 'CustomRegionClassReference'},
                content: {selector: "#content", regionClass: 'CustomRegionClass2Reference'
                }}})

        /*
         Adding And Removing Regions

         Regions can be added and removed as needed, in a
         LayoutView instance. Use the following methods:

         addRegion
         addRegions
         removeRegion
         addRegion:

         var layoutView = new MyLayoutView();

         // ...

         layoutView.addRegion("foo", "#foo");
         layoutView.getRegion('foo').show(new someView());
         addRegions:

         var layoutView = new MyLayoutView();

         // ...

         // Object literal

         */

        layoutView.addRegions({ foo: "#foo", bar: "#bar"  })

        // Or, function that returns an object literal
        layoutView.addRegions(function() {return {baz: "#baz", quux: "#quux" }})

        // removeRegions

        layoutView = new MyLayoutView();




        layoutView.removeRegion("foo")

        /*
         Any region can be removed, whether it was defined
         in the regions attribute of the region definition,
         or added later.

         For more information on using these methods, see
         the regionManager documentation.

         Region Naming

         A LayoutViews' Regions are attached directly to the LayoutView instance with the name of the region
         as the key and the region itself as the value. Because of this, you need to be careful
         to avoid conflicts with existing properties on the LayoutView when you name your Region.

         The prototype chain of LayoutViews is:

         Backbone.View > Ma.View > Ma.ItemView > Ma.LayoutView

         Consequently, every property on each of those Classes must be avoided as Region names. The most
         common issue people run into is trying to name their Region "attributes". Be aware
         that you are not able to do this.

         The following is an abbreviated list of other names that can't be used as Region names. For a more
         complete list refer to the API documentation for each Class on the prototype chain:

         attributes
         constructor
         regionClass
         render
         destroy
         addRegion
         addRegions
         removeRegion
         Note: this is a known issue that is flagged for being fixed in v2
         */
    }


    bb.Ma=bb.Marionette
    bb.Ma.Ap = bb.Ma.Application
    bb.Ma.Rg=bb.Ma.Region

    TXLV=function(){$.x('r', 'test layoutView')
        //  a = new bb.Ma.Application
        d= $.d('b', 500, 200)
        a = new bb.Ma.Ap
        rg = new    bb.Ma.Rg(d)
        a.addRegions({
            rg1: rg
        })


        rgs = a.getRegions()
    }



    TXLV=function(){$.x('r', 'test layoutView')

        d= $.d('b', 500, 200)

        d1= $.d([$.h1('afsdfasdsfsfdfsd')]).hide()

        Vw  =  bb.View.extend({
            initialize: function(){$l('new view')},
            render:function(){},
            el:  d1
        })
        vw=new Vw()


        a = new bb.Ma.Ap
        rg = new    bb.Ma.Rg(d)
        a.addRegions({
            rg1: rg
        })


        rgs = a.getRegions()


        a.rg1.attachView(vw)


    }



    APLY=function(){

        ApL=bb.Ma.Layout.extend({

            // template:
            regions:{
                menu: '#menu',
                cont: '#cont'
            }
        })

        ly= new ApL()
        ly.render()
        ly.menu.show(new MenuVw())
        ly.cont.show(new MainContVw())

    }



}
function marView(){$IV=function(ob){return Ma.IV.x(ob)}

    /*  Ma.View

     Ma has a base Ma.View class that other views extend from-
     not intended to be used directly.



     Binding To View Events

     Ma.View extends bb.View.
     It is recommended that you use
     the listenTo method to bind
     model, collection, or other events
     from bb
     and Ma objects. */


    Vw = $IV({

        i: function(){var vw=this

            vw.l2(
                vw.model,
                'change:foo',
                vw.mdChanged
            )


            vw.l2(vw.collection, "add",vw.mdAdded)

        },

        mdChanged: function(md, val){$l('mdChanged: '+ val)},
        mdAdded: function(md){$l('mdAdded')}

    })



// The context (this) will automatically be set to the view.
// You can
// optionally set the context by using _.bind.




    this.l2(
        // Force the context of the
// "reconcileCollection" callback method to be the collection
// itself,
// for this event handler only (does not affect any other use of the
// "reconcileCollection" method)

        this.collection,
        "add",
        _.b(this.reconcileCollection, this.collection))


    $IV({

        onShow: function(){/*   "show" / onShow -

         Called on the vw inst  when the vw has been rrd and displayed.
         This ev  can be used to react to when a vw has been shown via a rgn
         All vws that ihrt from the base Ma.Vw K have this fn-ality,
         notably: ItemView,   CollectionView,   CmV,   LV.
         */

            // react to when a view has been shown
        }})




    LV = Ma.LV.x({


        //A common use case for the onShow method:
// is to use it to add children views.


        regions: {Header: 'header', Section: 'section'},
        onShow: function(){
            this.Header.show(new Header())
            this.Section.show(new Section())
        }
    })


    Vw = $IV({

        /*
         View destroy

         View implements a destroy method, which is called by the region
         managers automatically. As part of the implementation, the following
         are performed:

         call an onBeforeDestroy event on the view, if one is provided
         call an onDestroy event on the view, if one is provided
         unbind all custom view events
         unbind all DOM events
         remove this.el from the DOM
         unbind all l2 events
         returns the view.
         By providing an onDestroy method in your view definition, you can
         run custom code for your view that is fired after your view has been
         destroyed and cleaned up. The onDestroy method will be passed any arguments
         that destroy was invoked with. This lets you handle any additional clean
         up code without having to override the destroy method.
         */

        onDestroy: function(arg1, arg2){
            // custom cleanup or destroying code, here
        }
    }); v = new Vw()
    v.destroy(g1, g2)

    /*



     onBeforeDestroy
     When destroying a view, an onBeforeDestroy method will be called, if it
     has been provided, just before the view destroys. It will be passed any arguments
     that destroy was invoked with.


     View "attach" / onAttach event
     Every view in Ma has a special event called "attach," which is triggered anytime that showing
     the view in a Region causes it to be attached to the document. Like other Ma events, it also
     executes a callback method, onAttach, if you've specified one. The "attach" event is great for jQuery
     plugins or other logic that must be executed after the view is attached to the document.
     The attach event is only fired when the view becomes a child of the document.
     If the Region you're showing the view in is not a child of the document
     at the time that you call show
     then the attach event will not fire until the Region is a child of the document.
     This event is unique in that it propagates down the view tree. For instance, when a CollectionView's
     attach event is fired, all of its children views will have the attach event fired as well. In
     addition, deeply nested Layout View structures will all have their attach event fired at the proper
     time, too.
     For more on efficient, deeply-nested view structures, refer to the LV docs.


     View "before:attach" / onBeforeAttach event
     This is just like the attach event described above,
     but it's triggered right before the view is
     attached to the document.


     */



    $IV({
        /*"dom:refresh" / onDomRefresh event

         Triggered after the view has been rendered, has been shown in the DOM via a Ma.Region, and has been
         re-rendered.

         This event / callback is useful for
         DOM-dependent UI plugins such as
         jQueryUI or KendoUI.
         */

        onDomRefresh: function(){

            // manipulate the `el` here. it's already
            // been rendered, and is full of the view's
            // HTML, ready to go.
        }
    })

    /*




     Since Views extend from backbone's view class,
     you gain the benefits of the events hash.

     Some preprocessing sugar is added on top:
     to add the ability to cross utilize the ui hash.
     */


    Vw = $IV({
        ui: {"cat": ".dog"   },
        ev: {"$@ui.cat": "bark"}
        //is the same as "click .dog":

    })




    Vw = $IV({/*  View.triggers

     Views can define a set of triggers as a hash, which will
     convert a DOM event into a  view.triggerMethod call.

     The left side of the hash is a standard bb.View DOM
     event configuration, while the right side of the hash is the
     view event that you want to trigger from the view.

     */tr: {'$ .do-something':'something:do:it'}
    })


    vw = new Vw()
    vw.render()

    vw.on("something:do:it", function(args){
        /*
         // "click" the 'do-something' DOM element to
         // demonstrate the DOM event conversion
         view.$(".do-something").trigger("click");
         The result of this is an alert box that says, "I DID IT!" Triggers can also be
         executed using the 'on{EventName}' attribute.
         */
        alert("I DID IT!")

    })




    Ma.CmV.x({  /*  By default all triggers are stopped with preventDefault and
         stopPropagation methods. But you can manually configure the triggers using
         hash instead of event name. Example below triggers an event and prevents
         default browser behaviour using preventDefault method.
         */
            triggers: {
                "click .do-something": {
                    event: "something:do:it",
                    preventDefault: true,
                    // this param is optional and will default to true
                    stopPropagation: false
                }}}
    )



    Ma.CmV.x({
        //You can also specify the triggers as a function
        // that returns a hash of trigger configurations

        triggers: function(){
            return {

                "click .that-thing"
                    :
                    "that:i:sent:you"
            }
        }
    })



    $IV({

        //Trigger keys can be configured to cross utilize the ui hash.

        ui: {
            'monkey': '.guybrush'
        },
        triggers: {
            'click @ui.monkey': 'see:LeChuck' // equivalent of "click .guybrush"
        }
    })


//Triggers work with all View classes that extend from the base



    Vw = $IV({ triggers: { "click .do-something": "some:event" } })

    vw= new Vw()

    vw.on("some:event", function(args){/*  Trigger Handler Arguments

     A trigger event handler will receive a single argument that
     includes the following:
     view
     model
     collection
     These properties match the view, model, and collection properties of the view that triggered the event.
     */
        args.view // => the view instance that triggered the event
        args.model // => the view.model, if one was set on the view
        args.collection // => the view.collection, if one was set on the view

    })



    /*
     Having access to these allows more flexibility in handling events from
     multiple views. For example, a tab control or expand/collapse widget such
     as a panel bar could trigger the same event from many different views
     and be handled with a single function.
     */


    Ma.CmV.x({/*  View.modelEvents and View.collectionEvents

     Similar to the events hash, views can specify a configuration
     hash for collections and models. The left side is the event on
     the model or collection, and the right side is the name of the
     method on the view.

     equivalent to view.l2(
     view.model,       "change:name",      view.nameChanged,      view
     )

     */

        modelEvents: {"change:name": "nameChanged"  },


        // equivalent to view.l2(view.collection, "add", view.itemAdded, view)

        collectionEvents: {"add": "itemAdded" },

        nameChanged: function(){   },
        itemAdded: function(){   }

    }) // ... ev  handler methods
    /*
     These will use the memory safe l2, and will set the context
     (the value of this) in the handler to be the view. Events are
     bound at the time of instantiation, and an exception will be thrown
     if the handlers on the view do not exist.

     The modelEvents and collectionEvents will be bound and
     unbound with the bb.View delegateEvents and undelegateEvents
     method calls. This allows the view to be re-used and have
     the model and collection events re-bound.
     */



    Ma.CmV.x({ /*  Multiple Callbacks

     Multiple callback functions can be specified by separating them with a
     space.

     */


        modelEvents: {"change:name":


            "nameChanged thatThing"

        },


        nameChanged: function(){ },
        thatThing: function(){ },


        //This works in both modelEvents and collectionEvents.

    })




    Ma.CmV.x({/*   Callbacks As Function

     A single function can be declared directly in-line instead of specifying a
     callback via a string method name.
     */

        modelEvents: {"change:name": function(){
            'handle the name changed event here'
        }}

        //This works for both modelEvents and collectionEvents.

    })




    Ma.CmV.x({/*   Event Configuration As Function

     A function can be used to declare the event configuration as long as
     that function returns a hash that fits the above configuration options.
     */

        modelEvents: function(){
            return { "change:name": "someFunc" }

        }})



    /*
     This works for both modelEvents and collectionEvents.

     View.serializeModel

     The serializeModel method will serialize a model that is passed in as an argument.

     View.bindUIElements

     In several cases you need to access ui elements inside the view
     to retrieve their data or manipulate them. For example you have a
     certain div element you need to show/hide based on some state,
     or other ui element that you wish to set a css class to it.
     Instead of having jQuery selectors hanging around in the view's code
     you can define a ui hash that contains a mapping between the
     ui element's name and its jQuery selector. Afterwards you can simply
     access it via this.ui.elementName.
     See ItemView documentation for examples.

     This functionality is provided via the bindUIElements method.
     Since View doesn't implement the render method, then if you directly extend
     from View you will need to invoke this method from your render method.
     In ItemView and CmV this is already taken care of.

     View.mergeOptions

     The preferred way to manage your view's options is with mergeOptions. It accepts two arguments: the options object
     and the keys to merge onto the instance directly.
     */
    ProfileView = $IV({
        profileViewOptions: ['user', 'age'],

        initialize: function(options) {
            this.mergeOptions(options, this.profileViewOptions);

            $l('The merged options are:', this.user, this.age);
        }
    })


    /*
     More information mergeOptions

     View.getOption

     Retrieve an object's attribute either directly from the object, or from the object's this.options, with this.options taking precedence.

     More information getOption

     View.bindEntityEvents

     Helps bind a backbone "entity" to methods on a target object. bindEntityEvents is used to support modelEvents and collectionEvents.

     More information bindEntityEvents
     */

    /*
     View.templateHelpers

     There are times when a view's template needs to have some
     logic in it and the view engine itself will not provide an
     easy way to accomplish this. For example, Underscore templates
     do not provide a helper method mechanism while Handlebars
     templates do.

     A templateHelpers attribute can be applied to any View object that
     renders a template. When this attribute is present its contents
     will be mixed in to the data object that comes back from the
     serializeData method. This will allow you to create helper methods
     that can be called from within your templates. This is also a good place
     to add data not returned from serializeData, such as calculated values.

     Basic Example
     */


//<script id="my-template" type="text/html">
// I <%= percent %>% think that <%= showMessage() %>
// </script>


    Vw = $IV({


        template: "#my-template",

        templateHelpers: function () {
            return {
                showMessage: function(){
                    return this.name + " is the coolest!";
                },

                percent: this.model.get('decimal') * 100
            };
        }
    });

    model = new bb.M({    name: "Ma",  decimal: 1  })

    view = new Vw({    model: model  })

    view.render() //=> "I 100% think that Ma is the coolest!";

// The templateHelpers can also be provided as a constructor parameter
// for any Ma view class that supports the helpers.
    Vw = $IV({})
    Vw({templateHelpers: {doFoo: function(){
    }
    }
    })

    templateHelpers= {/*   Accessing Data Within The Helpers

     In order to access data from within the helper methods, you
     need to prefix the data you need with this. Doing that will
     give you all of the methods and attributes of the serialized
     data object, including the other helper methods.
     */


        something: function(){
            return "Do stuff with " + this.name + " because it's awesome.";
        }
    }

    $IV({/*   Object Or Function As templateHelpers

     You can specify an object literal (as shown above), a reference
     to an object literal, or a function as the templateHelpers.

     If you specify a function, the function will be invoked
     with the current view instance as the context of the
     function. The function must return an object that can be
     mixed in to the data for the view.

     */
        templateHelpers: function(){return { foo: function(){

        }}}

    })



    Vw = $IV({  /* Change Which Template Is Rendered For A View

     There may be some cases where you need to change the template that is
     used for a view, based on some simple logic such as the value of a
     specific attribute in the view's model. To do this, you can provide
     a getTemplate function on your views and use this to return the
     template that you need.
     */

        getTemplate: function(){
            if (this.model.g("foo")){  return "#some-template"  }
            else {return "#a-different-template"}
        }


    })


    /*
     For more information about integration Ma w/ KendoUI
     (also applicable to jQueryUI and other UI
     widget suites),
     see this blog post on KendoUI + bb.*/
}