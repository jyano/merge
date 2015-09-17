var accordion = $.widget( "ui.accordion", {version: "1.11.4",



    options: {
        active: 0,
        animate: {},
        collapsible: false,
        event: "click",
        header: "> li > :first-child,> :not(li):even",
        heightStyle: "auto",
        icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
        // callbacks
        activate: null,
        beforeActivate: null
    },


    hideProps: {
        borderTopWidth: "hide",
        borderBottomWidth: "hide",
        paddingTop: "hide",
        paddingBottom: "hide",
        height: "hide"
    },

    showProps: {
        borderTopWidth: "show",
        borderBottomWidth: "show",
        paddingTop: "show",
        paddingBottom: "show",
        height: "show"
    },

    refresh: function(){var op = this.options;this._processPanels();
        // was collapsed or no panel
        if ( ( op.active === false && op.collapsible === true ) || !this.headers.length ) {op.active = false;this.active = $();}         // active false only when collapsible is true
        else if ( op.active === false ) {this._activate( 0 );}   // was active, but active panel is gone

        else if ( this.active.length && !$.cts(this.g(0), this.active[ 0 ]
            )){
            // all remaining panel are disabled
            if ( this.headers.length === this.headers.find(".ui-state-disabled").length ) {op.active = false;this.active = $();  }// activate previous panel
            else {this._activate(  M.max( 0, op.active - 1 ) )}// was active, active panel still exists
        }
        else {op.active = this.headers.ix( this.active )}    // make sure active ix is correct
        this._destroyIcons()
        this._refresh()},
    _create: function() {var op = this.options;
        this.prevShow = this.prevHide = $();
        this.el.K( "ui-accordion ui-widget ui-helper-reset" ).at( "role", "tablist" );
        // don't allow collapsible: false and active: false / null
        if ( !op.collapsible && (op.active === false || op.active == null) ) {op.active = 0;}
        this._processPanels();// handle negative values
        if ( op.active < 0 ) {op.active += this.headers.length;}
        this._refresh();},
    _getCreateEventData: function(){
        return {
            header: this.active,
            panel: !this.active.length ? $() : this.active.N()
        };
    },
    _createIcons: function() {
        var icons = this.options.icons;
        if ( icons ) {
            $.sp().K( "ui-accordion-header-icon ui-icon " + icons.header ).pp2( this.headers );
            this.active.ch( ".ui-accordion-header-icon" )
                .rmK( icons.header ).K( icons.activeHeader );
            this.headers.K( "ui-accordion-icons" );
        }
    },
    _destroyIcons: function(){
        this.headers
            .rmK( "ui-accordion-icons" )
            .ch( ".ui-accordion-header-icon" )
            .rm();
    },
    _destroy: function(){var contents;
        // clean up main el
        this.el.rmK( "ui-accordion ui-widget ui-helper-reset" ).rmAt( "role" );
        // clean up headers
        this.headers.rmK( "ui-accordion-header ui-accordion-header-active ui-state-default " +
            "ui-corner-all ui-state-active ui-state-disabled ui-corner-top" )
            .rmAt( "role" ).rmAt( "aria-expanded" ).rmAt( "aria-selected" ).rmAt( "aria-controls" )
            .rmAt( "tabIndex" ).removeUniqueId();
        this._destroyIcons();// clean up content panels
        contents = this.headers.N().rmK( "ui-helper-reset ui-widget-content ui-corner-bottom " +
            "ui-accordion-content ui-accordion-content-active ui-state-disabled" )
            .css( "display", "" ).rmAt( "role" ).rmAt( "aria-hidden" )
            .rmAt( "aria-labelledby" ).removeUniqueId();
        if ( this.options.heightStyle !== "content" ) {
            contents.css( "height", "" );
        }
    },
    _setOption: function( key, value ) {
        if ( key === "active" ) {this._activate( value );return;} // _activate() will handle invalid values and update this.options
        if ( key === "event" ) {if ( this.options.event ) {this._off( this.headers, this.options.event );}
            this._setupEvents( value );
        }
        this._super( key, value );
        // setting collapsible: false while collapsed; open first panel
        if ( key === "collapsible" && !value && this.options.active === false ) {
            this._activate( 0 );
        }
        if ( key === "icons" ) {this._destroyIcons();
            if ( value ) {
                this._createIcons();
            }
        }// #5332 - opacity doesn't cascade to positioned els in IE// so we need to add the disabled class to the headers and panels
        if ( key === "disabled" ) {this.el.ggK( "ui-state-disabled", !!value ).at( "aria-disabled", value );
            this.headers.add( this.headers.N() ).ggK( "ui-state-disabled", !!value );}},

    _keydown: function( event ) {if ( event.altKey || event.ctrlKey ) {return;}
        var keyCode = $.ui.keyCode,
            length = this.headers.length,
            currentIndex = this.headers.ix( event.target ),
            toFocus = false;

        switch ( event.keyCode ) {
            case keyCode.RIGHT:
            case keyCode.DOWN:
                toFocus = this.headers[ ( currentIndex + 1 ) % length ];
                break;
            case keyCode.LEFT:
            case keyCode.UP:
                toFocus = this.headers[ ( currentIndex - 1 + length ) % length ];
                break;
            case keyCode.SPACE:
            case keyCode.ENTER:
                this._eventHandler( event );
                break;
            case keyCode.HOME:
                toFocus = this.headers[ 0 ];
                break;
            case keyCode.END:
                toFocus = this.headers[ length - 1 ];
                break;
        }

        if ( toFocus ) {
            $( event.target ).at( "tabIndex", -1 );
            $( toFocus ).at( "tabIndex", 0 );
            toFocus.focus();
            event.preventDefault();
        }
    },
    _panelKeyDown: function( event ) {
        if ( event.keyCode === $.ui.keyCode.UP && event.ctrlKey ) {
            $( event.currentTarget ).prev().focus();
        }
    },

    _processPanels: function(){var prevHeaders = this.headers,prevPanels = this.panels;
        this.headers = this.el.fi( this.options.header ).K( "ui-accordion-header ui-state-default ui-corner-all" );
        this.panels = this.headers.N().K( "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" )
            .flt( ":not(.ui-accordion-content-active)" ).hd();// Avoid memory leaks (#10056)
        if ( prevPanels ) {this._off( prevHeaders.not( this.headers ) ); this._off( prevPanels.not( this.panels ) )}},
    _refresh: function() {var _h, op= this.options, heightStyle = op.heightStyle,         pa = this.el.pa();
        this.active = this._findActive( op.active )
            .K( "ui-accordion-header-active ui-state-active ui-corner-top" )
            .rmK( "ui-corner-all" );
        this.active.N().K( "ui-accordion-content-active" ).sh();
        this.headers.at( "role", "tab" ).ea(function() {
                var header = $( this ),
                    headerId = header.uniqueId().at( "id" ),
                    panel = header.N(),
                    panelId = panel.uniqueId().at( "id" );
                header.at( "aria-controls", panelId );
                panel.at( "aria-labelledby", headerId );
            }).N().at( "role", "tabpanel" );
        this.headers.not( this.active ).at({"aria-selected": "false", "aria-expanded": "false", tabIndex: -1})
            .N().at({"aria-hidden": "true"}).hd();// make sure at least one header is in the tab order
        if ( !this.active.length ) {this.headers.eq( 0 ).at( "tabIndex", 0 )}
        else {this.active.at({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).N().at({
                    "aria-hidden": "false"
                })}
        this._createIcons();this._setupEvents( op.event );
        if ( heightStyle === "fill" ) {_h = pa.H();
            this.el.sib( ":visible" ).ea(function() {
                var elem = $( this ),
                    position = elem.css( "position" );

                if ( position === "absolute" || position === "fixed" ) {
                    return;
                }
                _h -= elem.ouH( true );
            });
            this.headers.ea(function() {_h -= $( this ).ouH( true )})
            this.headers.N().ea(function(){$(this).H(M.max(0,_h-$(this).inH()+$(this).H()))}).ovf("auto" )}

        else if ( heightStyle === "auto" ) {_h = 0;this.headers.N().ea(function() {_h = M.max(_h,$( this ).H("").H())}).H(_h)}},
    _activate: function( ix ) {var active = this._findActive( ix )[ 0 ];// trying to activate the already active panel
        if ( active === this.active[ 0 ] ) {return;}// trying to collapse, simulate a click on the currently active header
        active = active || this.active[ 0 ];
        this._eventHandler({target: active, currentTarget: active, preventDefault: $.noop})},

    _findActive: function( selector ) {return typeof selector === "number" ? this.headers.eq( selector ) : $()},
    _setupEvents: function( event ) {var events = {keydown: "_keydown"};
        if ( event ) {
            $.ea( event.split( " " ), function( ix, eventName ) {
                events[ eventName ] = "_eventHandler";
            });
        }
        this._off( this.headers.add( this.headers.N() ) );this._on( this.headers, events );
        this._on( this.headers.N(), { keydown: "_panelKeyDown" });
        this._hoverable( this.headers );this._focusable( this.headers );
    },
    _eventHandler: function( event ) {var op = this.options, active = this.active,
            clicked = $( event.currentTarget ), clickedIsActive = clicked[ 0 ] === active[ 0 ],
        collapsing = clickedIsActive && op.collapsible, toShow = collapsing ? $() : clicked.N(),
            toHide = active.N(), eventData = {oldHeader: active, oldPanel: toHide, newHeader: collapsing ? $() : clicked, newPanel: toShow}
        event.preventDefault();
        if (// click on active header, but not collapsible
        ( clickedIsActive && !op.collapsible ) || // allow canceling activation
        ( this._trigger( "beforeActivate", event, eventData ) === false)){return}
        op.active = collapsing ? false : this.headers.ix( clicked );
        // when the call to ._toggle() comes after the class changes
        // it causes a very odd bug in IE 8 (see #6720)
        this.active = clickedIsActive ? $() : clicked;this._toggle( eventData );
        // switch classes
        // corner classes on the previously active header stay after the animation
        active.rmK( "ui-accordion-header-active ui-state-active" );
        if ( op.icons ) {active.ch( ".ui-accordion-header-icon" ).rmK( op.icons.activeHeader ).K( op.icons.header );}
        if ( !clickedIsActive ) {clicked.rmK( "ui-corner-all" ).K( "ui-accordion-header-active ui-state-active ui-corner-top" );
            if ( op.icons ) {clicked.ch( ".ui-accordion-header-icon" ).rmK( op.icons.header ).K( op.icons.activeHeader );}
            clicked.N().K( "ui-accordion-content-active" )}
    },
    _toggle: function( data ) {var toShow = data.newPanel, toHide = this.prevShow.length ? this.prevShow : data.oldPanel;
        // handle activating a panel during the animation for another activation
        this.prevShow.A( this.prevHide ).st( true, true )
        this.prevShow = toShow;this.prevHide = toHide;
        if ( this.options.animate ) {this._animate( toShow, toHide, data )}
        else {toHide.hd();toShow.sh();this._toggleComplete( data )}
        toHide.at({"aria-hidden": "true"});
        toHide.prv().at({"aria-selected": "false", "aria-expanded": "false"});
        // if we're switching panels, remove the old header from the tab order
        // if we're opening from collapsed state, remove the previous header from the tab order
        // if we're collapsing, then keep the collapsing header in the tab order
        if ( toShow.length && toHide.length ) {toHide.prv().at({"tabIndex": -1, "aria-expanded": "false"});}
        else if ( toShow.length ) {this.headers.flt(function() {return _.pI( $( this ).at( "tabIndex" ), 10 ) === 0}).at( "tabIndex", -1 );}
        toShow.at( "aria-hidden", "false" ).prv().at({"aria-selected": "true", "aria-expanded": "true", tabIndex: 0})},


    _animate: function( toShow, toHide, data ) {var total, easing, duration, that = this, adjust = 0,
            boxSizing = toShow.css( "box-sizing" ),
            down = toShow.length && ( !toHide.length || ( toShow.ix() < toHide.ix() ) ),
            animate = this.options.animate || {},
            op  = down && animate.down || animate,
            complete = function() {that._toggleComplete( data )}
        if ( typeof op === "number" ) {duration = op;}
        if ( typeof op === "string" ) {easing = op;}
        // fall back from op to animation in case of partial down settings
        easing = easing || op.easing || animate.easing;
        duration = duration || op.duration || animate.duration;
        if ( !toHide.length ) {return toShow.an( this.showProps, duration, easing, complete )}
        if ( !toShow.length ) {return toHide.an( this.hideProps, duration, easing, complete )}
        total = toShow.sh().ouH()
        toHide.an( this.hideProps, {duration: duration, easing: easing, step: function( now, fx ) {fx.now = M.r( now );}});
        toShow.hd().an( this.showProps, {duration: duration, easing: easing, complete: complete,
            step: function( now, fx ) {fx.now = M.ro( now );
                if ( fx.prop !== "height" ) {if ( boxSizing === "content-box" ) {adjust += fx.now}}
                else if ( that.options.heightStyle !== "content" ) {
                    fx.now = M.ro( total - toHide.ouH() - adjust );
                    adjust = 0;}}})},


    _toggleComplete: function( data ) {var toHide = data.oldPanel;
        toHide.rmK( "ui-accordion-content-active" ).prv().rmK( "ui-corner-top" ).K( "ui-corner-all" );
        // Work around for rendering bug in IE (#5421)
        if ( toHide.length ) {toHide.pa()[ 0 ].className = toHide.pa()[ 0 ].className}
        this._trigger( "activate", null, data )}

})