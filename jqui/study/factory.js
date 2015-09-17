$.wg= $.widget
$.fn.wg= $.fn.widget
$.fn.pgb= $.fn.progressbar
//Options
//
//disabled
//hide
//show
//Methods
//
//_create
//_delay
//_destroy
//_focusable
//_getCreateEventData
//_getCreateOptions
//_hide
//_hoverable
//_init
//_off
//_on
//_setOption
//_setOptions
//_show
//_super
//_superApply
//_trigger
//destroy
//disable
//enable
//instance
//option
//widget


$("#elem").pgb();
$( "#elem" ).pgb({ value: 20 }, { autoOpen: false });
$.ui.progressbar.prototype.options.value = 80;
$( "#elem" ).pgb( "value", 90 ).addClass( "almost-done" );





    $("#elem").bind("progressbarchange", function () {
        alert("value  changed!");
    });

    $("#elem").pgb({
        change: function () {
            alert("value changed!");
        }
    })


 $( "#elem" ).pgb( "instance" );

$( "#not-a-progressbar" ).pgb( "instance" ); // undefined
//The instance is stored
// using jQuery.data() with the widget's full name
// as the key.
// Therefore, the :data selector
// can also determine whether an element
// has a given widget bound to it.

$( "#elem" ).is( ":data( 'ui-progressbar' )" ); // true
$( "#elem" ).is( ":data( 'ui-draggable' )" ); // false
//Unlike instance(), :data can be used
// even if the widget being tested for has not loaded.
$( "#elem" ).nonExistentWidget( "instance" ); // TypeError
$( "#elem" ).is( ":data( 'ui-nonExistentWidget' )" ); // false
//You can also use :data to get a list of all elements
// that are instances of a given widget.

$( ":data( 'ui-progressbar' )" );





q.wg({disabled: true});


//Get or set the disabled option, after initialization:

//// Getter
var disabled = q.wg( "option", "disabled" );

//// Setter
q.wg( "option", "disabled", true );

_create: function () {
        this.element.css("background-color", this.options.color);
    }

//_delay( fn [, delay ] )Returns: Number
this._delay( this._foo, 100 );
this.element.removeClass( "my-widget" );
//_focusable( element )Returns: jQuery (plugin only)//Sets up element to apply the ui-state-focus class on focus.
this._focusable( this.element.find( ".my-items" ) );



_getCreateEventData: function(){
    return this.options
}

_getCreateOptions: function(){
    return { id: this.element.attr( "id" ) }
}


//_hoverable( element )Returns:
// jQuery (plugin only)
// Sets up element to apply the ui-state-hover class on hover.
this._hoverable( this.element.find( "div" ) )

_init()
_init:function(){
    if(this.options.autoOpen){this.open()}}

this._off( this.element, "click")
this._on( this.element, {
    "click a": function( event ) {
        event.preventDefault();
    }
})

_setOption: function (key, value) {
        if (key === "width") {
            this.element.width(value);
        }
        if (key === "height") {
            this.element.height(value);
        }
        this._super(key, value);
    }
_setOptions: function (options) {
        var that = this,
            resize = false;

        $.each(options, function (key, value) {
            that._setOption(key, value);
            if (key === "height" || key === "width") {
                resize = true;
            }
        });

        if (resize) {
            this.resize();
        }
    }//    Call a resize() method if the height or width options change.
_setOption: function (key, value) {
        if (key === "title") {
            this.element.find("h3").text(value);
        }

        this._super(key, value);
    }
_setOption: function (key, value) {
        if (key === "title") {
            this.element.find("h3").text(value);
        }
        this._superApply(arguments);
    }

//_trigger( type [, event ] [, data ] )Returns: Boolean //Triggers an event and its associated callback.
 this._on(this.element, {keydown: function (event) {
                // Pass the original event
                // so that the custom search event has
                // useful information, such as keyCode
                this._trigger("search", event, {
                    // Pass additional information unique to this event
                    value: this.element.val()
                })
            }})//    Trigger a search event whenever a key is pressed.



q.wg({create: function( event, ui ) {


    }})
q.on( "widgetcreate", function( event, ui ){
})

q.wg( "option", "show", {
    effect: "blind", duration: 800 } )
q.wg({
    show: {effect: "blind", duration: 800}
})
this._show(this.element,
    this.options.show, function() {
        this.focus()
    }) // Focus the element when it's fully visible.
q.wg( "option", "hide", {
    effect: "explode", duration:1000})
q.wg({hide: {
    effect: "explode", duration:1000}})
this._hide(this.element,
    this.options.hide, function () {
    $(this).rm()}) // Remove the element from the DOM when it's fully hidden.


function wgProps(){
//defaultElement:

// An element to use when a widget instance is constructed
// without providing an element.
// For example, since the progressbar's defaultElement
// is "<div>", $.ui.pgb({ value: 50 })
// instantiates a progressbar widget instance
// on a newly created <div>

//element:

// A jQuery object containing the element used to instantiate the widget. If you select multiple elements and call .myWidget(), a separate widget instance will be created for each element. Therefore, this property will always contain one element.
//    namespace: The location on the global jQuery object that the widget's prototype is stored on. For example a namespace of "ui" indicates that the widget's prototype is stored on $.ui.
//    options: An object containing the options currently being used by the widget. On instantiation, any options provided by the user will automatically be merged with any default values defined in $.myNamespace.myWidget.prototype.options. User specified options override the defaults.
//    uuid: A unique integer identifier for the widget.

    //widgetName: The name of the widget. For  $.wg( "myNamespace.myWidget", {} ), widgetName will be "myWidget".

//widgetFullName:// The full name of the widget including the namespace. // For $.wg( "myNamespace.myWidget", {} ) -> widgetFullName will be "myNamespace-myWidget".
    function dep() {
//    widgetEventPrefix:
// The prefix prepended to the name of events fired from this widget.
// For example the widgetEventPrefix of the draggable widget is "drag",
// therefore when a draggable is created, the name of the event fired is "dragcreate".
// By default the widgetEventPrefix of a widget is its name.
// Note: This property is deprecated and will be removed in a later release.
// Event names will be changed to
// widgetName:eventName (e.g. "draggable:create").
    }
    function advanced() {
//window: A jQuery object containing the window that the widget's element is within.
// Useful if you need to interact with widgets within iframes.


//document:// A jQuery object containing the document that the widget's element is within.// Useful if you need to interact with widgets within iframes.
    }
}


function extendingStudy(){
//    $ UI's wdg fct makes it easy to build wdgs
//    that extend the functionality of existing wdgs.
//        Doing so allows you to build powerful wdgs on top of an existing base,
//        as well as make small tweaks to an existing wdg's functionality.
//
//
//    ***Creating Widget Extensions
//    Creating wdgs with the wdg fct is done by
//    passing the name of the wdg
//    and
//    a ptt object to $.wdg().
//
//        The following creates a "sDlg" wdg in the "custom" namespace.
//
//        $.wdg( "custom.sDlg", {} );
//
//    To allow for extension,
//                     $.wdg() optionally accepts the constructor of a wdg to use as a par .
//        When specg a par  wdg, pass it as 2nd arg - after wdg's name, before wdg's ptt ob
//
//    create  "sDlg" wdg in the "custom" namespace again
//    this time
//    the constructor of $ UI's dlg wdg ($.ui.dlg) is passed
//    (indctg: the sDlg wdg   should use $ UI's dlg wdg as a par)
//
//    $.wdg( "custom.sDlg", $.ui.dlg, {} );
//    sDlg,dlg   essentially equiv wdgs, but w dif names/nspaces
//
//    we can add mets to its ptt ob
//    A wdg's ptt ob  is the final arg  passed to $.wdg().
//
//    $.wdg( "custom.sDlg", $.ui.dlg, {    red: function() {
//        this.element.css( "color", "red" ) }})
//    $.d('me red').sDlg().sDlg( "red" );// Create a new <div>,
//
//    convert it into a sDlg, and call the red() method.
//        Now the sDlg has a red() method that will change the color of its text to red.
//        Note how the wdg fct auto- sets this to the wdg's inst object.
//    For a full list of the mets and properties available on the inst,
//        see the wdg fct's API-docs
//
//
//
//
//
//    ***Extg Existg Mets
//    spec met  w   same n as the met you want to vride on the ptt ob
//
//    override dlg's open() met
//    Since dlgs auto-open by df,  "open" will be logd when  code runs
//
//    $.wdg( "custom.sDlg", $.ui.dlg, {open:function(){$l("open")}})
//
//
//    $.d().sDlg()
//
//    there's a problem.
//    Since we overrode the df bh of open(), the dlg no longer displays on the screen.
//        When we place mets on the ptt ob
//    we are !actually vridg   orig  met  - rather,
//        we are placing  new met  at a higher levl in   ptt chain.
//
//        To use par's mets, wdgfct has 2 mets: _super(), _superApply()
//
//
//    _super() and _superApply()
//    invoke mets of the same name in the parent wdg.
//
//        _super() is run to invoke dlg's open() and open the dlg.
//
//    $.wdg( "custom.sDlg", $.ui.dlg, {   open: function() {
//        $l( "open" );return this._super() }}) // Invoke the parent wdg's open().
//
//
//    $.d().sDlg()
//
//
//    _super() accepts arg-ls  like Function.ptt.call()    reqs args  passed as arg-ls
//
//    _superApply() arg-arr like Function.ptt.apply()   reqs args  as arr
//
//
//
//
//    $.wg(
//        "custom.sDlg",
//        $.ui.dlg,
//        {_setOption:function(k,v){this._super(k,v);this._superApply(arguments)}}
//
//
//    )
//
//
//
//
//
//
//
//
//    ***Redefining Widgets
//    $ UI 1.9 added the ability for wdgs to redefine themselves.
//        Therefore,
//        instead of creating a new wdg,
//        we can pass $.wdg() an existing wdg's name and constructor.
//    The following example adds the same logging in open(),
//        but doesn't create a new wdg to do so.
//
//
//    $.wdg( "ui.dlg", $.ui.dlg, {
//        open:function(){$l("open");return this._super()}})
//
//    $.d().dlg()
//
//
//
//
//    With this approach
//    you can extend an existing wdg's method
//    and still have access to the original mets
//    using _super()
//    - all without creating a new wdg.
//
//    ***Widgets and Polymorphism
//
//    warn: when interacting with wdg extensions and their plugins:
//
//        par wdg's plugin cannot be used  to iv  mets on  child wdg els
//
//    $.wdg('custom.sDlg',$.ui.dlg,{}); dlg=$.d().sDlg();
//
//    !work: dlg.dlg( "close" )    works: dlg.sDlg( "close" )
//
//    par wdg's plug, dlg(), !can iv close() met  on an a sDlg el
//
//
//    ***Customizing Individual Instances
//    All  exs   so far have extended mets on the wdg's ptt.
//    Mets vridden on the ptt affect all insts of   wdg.
//        both insts of the dlg use the same open() met
//    $.wdg( "ui.dlg", $.ui.dlg, {open: function(){$l("open"); return this._super()}})
//
//    Cr 2 dlgs, both use   same open(), so "open" is logged twice.
//
//        $.d().dlg();$.d().dlg()
//
//
//
//    sometimes you only need change bh for a 1inst of the wdg
//
//    dlgInstance = $.d().dlg().data( "ui-dlg" )
//    To do this, obtain ref  to the inst
//// Retrieve the dlg's inst and store it.
//
//    dlgInstance.close = function(){$l("close")}
////override  method  Override the close() method for this dlg
//
//    $.d().dlg();// Create a second dlg
//
//    $( ":data(ui-dlg)" ).dlg( "close" )
//
//// Select both dlgs and call close() on each of them.// "close" will only be logged once
//
//    overriding mess for indiv insts  perfect  for one-off customizations
}