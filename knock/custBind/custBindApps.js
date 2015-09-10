
/*
 <unrealistic-cm
 params='stringValue: "hello",
 numericValue: 123,
 boolValue: true,
 objectValue: { a: 1, b: 2 },
 dateValue: new Date(),
 someModelProperty: myModelValue,
 observableSubproperty: someObservable().subprop'>
 </unrealistic-component>*/



/*
 ko.bindingHandlers.yourBindingName = {
 init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
 // This will be called when the binding is first applied to an element
 // Set up any initial state, event handlers, etc. here
 },
 update: function(q, vAc, bd, vm, bdCtx) {
 // This will be called once when the binding is first applied to an element,
 // and again whenever any observables/computeds that are accessed change
 // Update the DOM element based on the supplied values here.
 }
 }
 */

/*
 The “update” callback
 ko will call the upd cb init when   bd   applied to an el
 and tr any deps (observs/computeds) that you access.
 When any deps change, the upd  cb   called  w these pams:
 el  —  DOM el  involved in this bd

 valAcc — fn that you can call to get the cur md pop involved in this bd (cur md pop v = valAcc())

 To easily accept both observable and plain values, call ko.unwrap on the returned value.

 allBindings — ob,  used to access all the md values bound to this el

 Call allBindings.get('name') to retrieve the value of the name binding (returns undefined if the binding doesn’t exist);
 or allBindings.has('name') to determine if the name binding is present for the current element.

 vm —   deprecated  !

 Use bindingContext.$data or bindingContext.$rawData to access the view model instead.

 bindingCtx — ob, holds the binding ctx available to this el’s bindings,
 includes special properties including $parent, $parents,
 and $root that can be used to access data that is bound against ancestors of this ctx

 ex: you might have been controlling an element’s vs using the vs binding,
 but now you want to go a step further and animate the transition.
 You want elements to slide into and out of existence according to the value of an observable.
 You can do this by writing a cust  binding that calls jq’s slideUp/slideDown functions:

 */
BDSMPGRD=function(){

    // This is an example of one possible way to make a reusable component (or 'plugin'), consisting of:
//  * A view model class,
//           which gives a way to configure the component and to interact with it
// (e.g., by exposing currentPageIndex as an observable, external code can change the page index)
//
// * A custom binding (ko.bindingHandlers.simpleGrid in this example)
// so a developer can place instances of it into the DOM
//     - in this example,
// the custom binding works by rendering some predefined templates
// using the ko.jqueryTmplTemplateEngine template engine
//
// There are loads of ways this grid example could be expanded. For example,
//  * Letting the developer override the templates used to create the table header, table body, and page links div
//  * Adding a "sort by clicking column headers" option
//  * Creating some API to fetch table data using Ajax requests
//  ... etc
//http://knockoutjs.com/examples/resources/knockout.simpleGrid.js
    ko.simpleGrid = {
        // Defines a view model class you can use to populate a grid
        // If you don't specify columns configuration, we'll use scaffolding
        m: function (cf) {
            this.data = cf.data
            this.currentPageIndex = ko.o(0);
            this.pageSize = cf.pageSize || 5;
            this.columns = cf.columns || gScafCols(ko.ut.uo(this.data))
            this.itemsOnCurrentPage = ko.c(function () {
                var startIndex = this.pageSize * this.currentPageIndex();
                return ko.ut.uo(this.data)
                    .slice(startIndex, startIndex + this.pageSize);
            }, this);
            this.maxPageIndex = ko.c(function () {
                return M.ceil(ko.ut.uo(this.data).length / this.pageSize)
            }, this)
        }
    }


    /*
     // Templates used to render the grid
     var templateEngine = new ko.jqueryTmplTemplateEngine();
     templateEngine.addTemplate("ko_simpleGrid_grid", "\
     <table class=\"ko-grid\" cellspacing=\"0\">\
     <thead>\
     <tr>\
     {{each(i, columnDefinition) columns}}\
     <th>${ columnDefinition.headerText }</th>\
     {{/each}}\
     </tr>\
     </thead>\
     <tbody>\
     {{each(i, row) itemsOnCurrentPage()}}\
     <tr class=\"${ i % 2 == 0 ? 'even' : 'odd' }\">\
     {{each(j, columnDefinition) columns}}\
     <td>${ typeof columnDefinition.rowText == 'function' ? columnDefinition.rowText(row) : row[columnDefinition.rowText] }</td>\
     {{/each}}\
     </tr>\
     {{/each}}\
     </tbody>\
     </table>");
     templateEngine.addTemplate("ko_simpleGrid_pageLinks", "\
     <div class=\"ko-grid-pageLinks\">\
     <span>Page:</span>\
     {{each(i) ko.utils.range(1, maxPageIndex)}}\
     <a href=\"#\" data-bind=\"click: function() { currentPageIndex(i) }, css: { selected: i == currentPageIndex() }\">\
     ${ i + 1 }\
     </a>\
     {{/each}}\
     </div>");
     */
    // The "simpleGrid" binding
    ko.bh.simpleGrid = {
        // This method is called to initialize the node, and will also be called again if you change what the grid is bound to
        update: function (el, vwMdAcc, allBndAcc) {var vm  , allBnd  ,
            grdTpN, pgLnksTpN,
            grdCt,
            pgLnksCt

            vm = vwMdAcc()
            allBnd = allBndAcc()

            while(el.firstChild){ko.removeNode(el.firstChild)}

            // Allow the default templates to be overridden
            grdTpN = allBnd.simpleGridTemplate || "ko_simpleGrid_grid"
            pgLnksTpN = allBnd.simpleGridPagerTemplate || "ko_simpleGrid_pageLinks";
            grdCt= el.A($.d()); // Render the main grid

            ko.rTp(grdTpN, vm, { templateEngine: templateEngine }, grdCt, "replaceNode")
            // Render the page links
            pgLnksCt = el.A($.d())
            ko.rTp(pgLnksTpN, vm, { templateEngine: templateEngine }, pgLnksCt, "replaceNode");
        }

    }
    function gScafCols(d) {var cols
        if ((typeof d.length != 'number') || d.length == 0) {return []}

        cols = [];
        for (var popN in d[0])
            cols.push({ headerText: popN, rowText: popN });
        return cols;
    }

}
BINDINGS=function(){

    $.h3().bT('qu')
    $.p('Please distribute').A(
        $.b().bT('ptsBudg'),
        'pts btwn the following opts'

    )


    $.t($.tH().A($.tr().A($.th().A('Option'),$.th().A('Import'))),

        $.tB().bE('aw').A($.tr().A($t.d().bT('awT'),$t.d().b('starRating','pts'))))

    $.hr().b({fadeVisible: 'pointsUsed() > pointsBudget' }).A(
        'You used too many points! Please remove some.')

    $.p('You have').A($.b().bT('pointsBudget - pointsUsed()'), 'points left to use')

    $.bt('Finished').b({jqBt:'{ enable: pointsUsed() <= pointsBudget }', $:'save'})


    bindings=function(){
// Reusable bindings - ideally kept in a separate file

        ko.BH.fadeVs = {

            init: function(el, valAcc) {
                var shouldDisplay = valAcc();$(el).toggle(shouldDisplay)},// Start visible/invisible according to initial value

            update: function(el, valAcc) {
                var shouldDisplay = valAcc();
                shouldDisplay ? $(el).fadeIn() :
                    $(el).fadeOut()}

        } // On update, fade in/out

        ko.BH.jqBt = {

            init: function(el) {$(el).button(); }, // Turns the el into a jQuery UI button

            update: function(el, valAcc) {var curVal = valAcc();  $(el).button("option", "disabled", curVal.enable === false);}

        }// Here we just update the "disabled" state, but you could update other properties too

        ko.BH.starRating = {
            init: function(el, valAcc) {
                $(el).addClass("starRating");for (var i = 0; i < 5; i++){$.sp().appendTo(el)}
                $("span", el).each(function(index) {$(this).hv(// Handle mouse events on the stars
                    function() { $(this).prevAll().add(this).K("hoverChosen") },
                    function() { $(this).prevAll().add(this).removeClass("hoverChosen") })
                    .click(function() {var observable = valAcc();observable(index+1)})})},           // Get the associated observable// Write the new rating to it
            update: function(el, valAcc) { var observable = valAcc();  $("span", el).each(function(index) {$(this).toggleClass("chosen", index < observable())})} // Give the first x stars the "chosen" class, where x <= rating
        }
    };bindings()

    function Aw(text) { this.awText = text; this.points = ko.o(1); }
    function SurvVM(qu, ptsBdg, aws) {
        this.qu = qu;
        this.ptsBdg = ptsBdg
        this.aws = $.map(aws, function(tx) { return new Aw(tx) });
        this.save = function() { alert('To do') };
        this.ptsUsed = ko.c(function(){var  tot = 0;
                for (var i = 0; i < this.aws.length; i++){tot += this.aws[i].points()}
                return tot},
            this)
    }



    ok(new SurvVM(

            "Which factors affect your technology choices?",

            10,

            [
                "Functionality, compatibility, pricing - all that boring stuff",
                "How often it is mentioned on Hacker News",
                "Number of gradients/dropshadows on project homepage",
                "Totally believable testimonials on project homepage"
            ]

        )
    )

}
CUSTBDJ=function(){

    ko.bh.slVs = {
        update: function(el, valAcc, allBindings) {var unwrapped,dur, v=valAcc() // First get the latest data that we're bound to
            unwrapped = ko.unwrap(v);
            // Next, whether or not the supplied model property is observable, get its current value
            dur  = allBindings.get('slDur') || 400;// Grab some more data from another binding property // 400ms is default duration unless otherwise specified
            if(unwrapped){$(el).slideDown(dur)}
            else{$(el).slideUp(dur)}}
    }
    $.d('You have selected the option').b({
        slVs:'wrap',
        slDur:600
    })
    $.lb().A($.cbC('wrap'),'Gift wrap')
    ok({wrap: ko.o(1)})
}

CUSTBDEX=function(){

    $.d().b('e','items').A(
        $.d().at('data-bind', "composableComponent: 'x-expander'").A(
            $.d().at('data-part','title').A($('<strong>')
                .b({t:'binding', sy:"{'color': $comp.isExpanded() ? 'darkred' : 'black'}"})),
            $.d().at('data-part','content').A($('<strong>').b({t:'binding'}),
                $.sp().b('t', 'description'))))
    $('<script type="text/html" id="x-expander-template">').A($.dK('expander'),
        $.dK('header'),
        $.bt().b({t: 'toggleText', $:'toggle'}),
        $.sp('Expander').K('title').at('data-part','title'),
        $.dK('content').at('data-part','content').b('vs', 'isExpanded')
            .A('Content'))
    ko.ext = ko.ext || {};
    ko.ext.utils = ko.ext.utils || {};
    ko.ext.utils.cloneNodes = function () {
        if (ko.utils.cloneNodes) {return ko.utils.cloneNodes}
        else {return function (nodesArray, shouldCleanNodes) {
            for (var i = 0, j = nodesArray.length, newNodesArray = []; i < j; i++) {
                var clonedNode = nodesArray[i].cloneNode(true);
                newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
            }
            return newNodesArray;
        }}
    }

    ko.ext.utils.cloneNodes()
    compLoadingOperationUniqueId = 0
    ko.bh['composableComponent'] = {
        'init': function(el, valueAccessor, ignored1, ignored2, bindingContext) {

            disposeAssociatedComponentVM = function () {currentVMDispose = currentVM && currentVM['dispose'];
                if (typeof currentVMDispose === 'function') {currentVMDispose.call(currentVM)}
                // Any in-flight loading operation is no longer relevant, so make sure we ignore its completion
                currentLoadingOperationId = null}
            isFirstRender = false;specifiedParts;
            ko.utils.domNodeDisposal.addDisposeCallback(el, disposeAssociatedComponentVM)
            ko.c(function () {
                if (!isFirstRender) {isFirstRender = true;specifiedParts = null;
                    findParts(el, function (partName, partNode) {if (!specifiedParts) {specifiedParts = {}}
                        partChNodes = ko.vE.chNodes(partNode)
                        specifiedParts[partName] = ko.ext.utils.cloneNodes(partChNodes, true  )
                    })
                }
                value = ko.ut.uo(valueAccessor())
                if (typeof value === 'string') {cmNm = value}
                else {cmNm = ko.ut.uo(value['name']); compParams = ko.ut.uo(value['params'])}
                if (!cmNm) {throw new Error('No comp name specified')}
                loadingOperationId = currentLoadingOperationId = ++compLoadingOperationUniqueId;
                ko.cm.get(cmNm,
                    function(compDef) {
                        if (currentLoadingOperationId !== loadingOperationId) {return;} // If this is not the current load operation for this el, ignore it.
                        disposeAssociatedComponentVM();// Clean up previous state
                        if (!compDef) {throw new Error('Unknown comp \'' + cmNm + '\'')}// Instantiate and bind new comp. Implicitly this cleans any old DOM nodes.
                        cloneTemplateIntoElement(cmNm, compDef, el);
                        compVM = createVM(compDef, el, compParams)
                        chBindingContext = bindingContext['createChildContext'](compVM)
                        currentVM = compVM
                        ko.bD(chBindingContext, el)
                        if (specifiedParts) {// For parts defined in the comp definition binding context is// lexically scoped, i.e. it's a binding context of where the comp is// used, not the binding context of the comp template.// The only thing we need to add is a reference to the comp view model,// available through $comp
                            partBindingContext = bindingContext['extend']({ '$comp': compVM })
                            findParts(el, function (partName, partNode) {
                                if (! (replacementNodes= specifiedParts[partName])) {return}
                                clonedNodes = ko.ext.utils.cloneNodes( replacementNodes )
                                ko.vE.setDomNodeChildren(partNode, clonedNodes);
                                ko.bD( partBindingContext, partNode)
                            })
                        }
                    })
            }, null, { disposeWhenNodeIsRemoved: el });
            return { 'controlsDescendantBindings': true };
        }
    }
    ko.vE.AB['composableComponent'] = true
    ExpanderCmVM = function () {this.isExpanded = ko.o(false)
        this.toggleText = ko.c(function () {return this.isExpanded() ? '-' : '+'}, this)}
    ExpanderCmVM.prototype.toggle = function () {this.isExpanded(!this.isExpanded())}
    ko.rg('x-expander', {vm: ExpanderCmVM, t: {el: 'x-expander-template'}})
    AppVM = function () {this.items = [
        { binding: 'vs',
            desc:
                'causes the assoc  DOM el to become hd or vs according to the v you pass to the bd' },
        { binding: 't',
            desc: 'causes the assoc DOM el to display the text value of your pam.' },
        { binding: 'cm',
            desc: 'injects a spec cm into an el, and optly passes pams to it.' }
    ]}

    ok(new AppVM())
    ko.vE.nCh=ko.vE.setDomNodeChildren
    function findParts(parentNode, fn) {
        if (!parentNode) {return}

        chNodes = ko.vE.chNodes(parentNode)
        ko.utils.arrayForEach(chNodes, function (chNode) {
            // Search for el nodes only
            if (chNode.nodeType !== 1) {return;}
            if (partName= chNode.getAttribute('data-part')) {fn(partName, chNode)}
            else {findParts(chNode, fn)} // Do not search into part definition
        })
    }
    function cloneTemplateIntoElement(cmN,cmD,el) {var tp
        if(tp!=cmD['template']){_.er('Cm\''+cmN+'\'!tp')}
        ko.vE.nCh(el,
            clonedNodesArray=ko.ext.utils.cloneNodes(tp)
        )
    }
    function createVM(cmD, el, cmPams) {
        return (cmVMFact= cmD['createVM'])?
            cmVMFact .call(cmD, cmPams, { el: el }) : cmPams}

    //http://jsfiddle.net/mbaranov/6zvjfd2y/
}

/*

 You should use ko.utils.unwrapObservable
 in cases where you don't know if u have been gvn an obsvb or not.
 This would commonly be in a cstm bdg where an ovb or
 non-obv
 could be bound against it.

 In the code that u have above,
 the call to vAc() is not actually unwrpping an ovb

 It is just retrieving the value that was passed to the binding in the correct context

 (it gets wrapped in a fn to protect it).

 The ret v of valAcc() may be an obv or not.

 It is * was pasd to the bdg


 */