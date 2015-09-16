$.fn.wid= $.fn.widget
$.wg = $.wid=  $.widget
//   $.wg() creates plg constr, passed ob  set as plg insts ptt (base wid functionality comes from $.Widget.ptt)
// call  $.wid() with two pams:  plg n(one level deep  nSp req), ob containing inst-ctx-bound fns- dif from jq plg :  1 ctx, !DOMel, ![ctx],// ( fn n ~ n  you pass to $.wid() w/o nSp "cust.prgbar" -> "prgbar" )
//EXTENDING IN PLACE -  Redefining Wgs  instead of creating a new wid, (pass $.wid() existing wid's name, constructor)   // - all without creating a new wid.//  can extend an existing wid's method
//  still have access to the original methods using _super()
// - all without creating a new wid.
// Extending Existing Methods    spec  a met  w    same name
// override dialog's open() method.
//  Since dialogs auto open by df "open" will be logged when this code runs.
//  When we place mets on the ptt ob, we are not actually overriding the orig  met
// - rather, we are placing new met  at a higher lvl in   ptt chain.
// Since we overrode the df bh of open(),  dialog no longer displays on  screen.
// To make the par's mets avai, the widfac provides:  _super()      _superApply()
$.wg("cust.sDlg", $.ui.dialog, {
    open: function () { $l("open"); return this._super()},
    setOption: function (k, v) {this._super(k, v); this._superApply(arguments)},
    red: function (r) {this.element.C('r')}
})
WIJ=function(){ $.x('b','wijj'); d= $.d(['i am red']); d.sDlg().sDlg('red')
     $.in(function(){d.sDlg( "close" )  }) }
SDLG=function(){$.x('g', 'sdlg')
    // Mets overridden on the ptt affect all insts of wid.
// both insts of the dlg use the same open() met
    d  =  $.d().sDlg().data( "ui-dialog" );// Retrieve the dialog's instance and store it.
    // sometimes you only need to change the bhr for a sing  inst  of the wid.  //To do this, obtain   ref  to   inst  and override the met  using  normal js
    d.close = function() { $l("close") }
    $.d().sDlg()
    $(':data(ui-dialog)').dlg( "close" ) // Select both dialogs and call close() on each of them--> "close" will only be logged once.
}
function prgbar(){
    //  rg bar   lets us set the prg once;
//  this.el  1el-qob
// this.ops   k/v-hash plg's ops
// $.d().prgbar({ v: 20 })
// ( fn n ~ n  you pass to $.wid() w/o nSp    "prgbar" )
//ex:  bar = $.d().prgbar({ v: 20 });  bar.prgbar( "v", 50 )
    // The option() met allows you to get and set ops after init.  // When used as a setter, the plg's,  _setOption met will be called for ea op   being set.
// For acts to perform independ  of  num  of ops changed, can override _setOptions().

    PRGBAR=function(){
        $.wg( "cust.prgbar", {

            options: {   v: 0   },

            _create: function() {this.element.K( "prgbar" )
                .text(   this.options.v + "%")     },

            v:v, _cap: cap
        })
        $.wg( "cust.prgbar", {_options: {v: 0 },
            _create: create,
            _setOption: setOption,
            _setOptions: setOptions,
            refresh: refresh,
            _cap: cap,
            _destroy: destroy

        })
//add cbs so users can react when the state of your plg changes.
        // add  cb to  prgs bar to signfy prg   100%
        // The _trigger() met takes 3pams: cb n,  $ vob that initd the cb, and hash of data relev  to  ev.
        // The cb n  is the only req pam, but  others   useful
        //Cb fns  just addtonl ops,  you can g/s them just like any other op .
        // When    cb  execd, a correspg ev is trgd as well. ev ty  is determd by concatg   plg n + cb n
        // cb and ev both receive the same two pams:  vob,  hash of data relevant to the ev,
        //your plg may have fnly you want to be user-preventble.  best way to support this is  crg cancble cbs.
        // Users can canc  cb, or its assoc  ev, same as cancg any natv ev (by callg ev.preventDefault() or retg Fa)
        // If    cb cancd, the _trigger() met rets Fa,
        // can impl  the appropr  fnly w/in your plg.
        // ex: if we were bildg  dgn plg,   could pass the mm ev when trgg a drag cb;
        // users can react to the drag based on  x/y coords  providd by vob.
        // Note that the orig ev passed to _trigger() must be a $ ev, not a native bw ev.
        bar = $.d().prgbar({
            complete: function (ev, dat) {$l("Cbs are great!") }
        })
        bar.bind("prgbarcomplete", function (ev, data) {
            $l("Events bubble and support many handlers for extreme flexibility.");
            $l("progress %: "+data.v)
        })
        bar.prgbar("option", "v", 100)
        //DATA
        //  When plg inst crtd,  its stored on orig DOMel using $.data ( key:plgN)
        //  B/c plg inst is drctly linked to the DOM el, you can access the plg inst drctly . instead of going through the exposed plg met
        //- allows you to call mets drctly on the plg inst, instead of passing met names as strings
        //-  also gives you dirc access to the plg's pops.
        bar = $.d().prgbar().data( "cust-prgbar" );
        bar.option( "v", 50 ); // Call a met drctly on the plg inst.
        $l( bar.ops.v ); // Access pops on the plg inst.
//You can also create an inst without going through the plg met,
// by calling the constr drctly,with the ops and element g's:
        bar = $.cust.prgbar( {}, $.d()); $l( bar.ops.v ) // Same result as before.
// Extending a Plugin's Prototype,
// modify the bh of all insts of our plg.
        $.cust.prgbar.prototype.reset = function() { this._setOption( "v", 0 ) }  //  add a met to our prg bar   to reset the prg to 0%
        /*  In some cases, it will make sense to allow users to apply
         and then ltr unapply your plg.
         You can accomplish this via the _destroy() met.
         W/in _destroy() met,  undo anything your plg   may have done dur  init|ltr use.
         _destroy() calld by destroy() met, auto-called if plg-inst-el is rmd,
         (can be used for gb-cl)
         That base destroy() met   handles some gen  cleanup ops,
         ( rmg the inst ref from the wid's DOM el)
         unbinding all evs in (wid's el-nspaced|_bind()-added-evs)    */
// $ contains the fn.extend() met,
//  simple plg that just adds captions to images      captr
//  so we'll also need a page, with a bunch of images on it, to develop/test the plg with.
    }
    function setOptions(o) {this._super(o); this.refresh() }
    function setOption(k, v) {if (k === "v") {v = this._cap(v)}; this._super(k, v) }
    function create () { this.q.K("prgbar")
        this.o.v = this._cap( this.ops.v )
        this.refresh()
    }
    function refresh () {
        this.q.T(this.o.v + "%");
        if (this.o.v == 100) {  this._trg("complete", null, {v: 100})  }
    }
    function v(v) {
        var wg=this, q=wg.element, ops = wg.options
        if (U(v)) {return ops.v}
        ops.v = this._cap(v)
        q.text(ops.v + "%")
    }
    function destroy() {
        this.element.xK( "prgbar" ).T('')
    }
    function cap (v) {
        if (v > 100) {v = 100 }
        if (v < 0) {v = 0}
        return v
    }
}
function multi(){
    function toHand(){$.cts = $.contains // ??
        $.fn.iA= $.fn.insertAfter
        $.fn.ea = $.fn.each
    }
    toHand()


// The object literal should contain
// default options
// _create,    _setOption    _destroy
    $.wj( "demo.multi", {
        options: { clear: null  },
        _create: function() {  },
        // Use the _setOption method to respond to changes to options
        _setOption: function( k, v ) {switch( k ) {case "clear":  break;}
            this._super( "_setOption", k, v ) }
    })


    // enhance  <select multiple>,
    // one might have to iterate over the <option>s
    // in the select to create a corresponding <li> in a proxy <ul>.


    _create= function(){var self = this, q=this.element

        self.list = $.ul().iA(q)

        q.hd().fi("option").ea(function (i, el) {var q=$(el),
            li=$.li().K('multi-option-item')
            li.A(q.t()).$(function(){$l(q.v())})
            li.a2(self.list)
        })

    }

// Unfortunately, leaving this code in  _create makes it diff to
// 1) manage the relationship btwn   orig <option> els  and  list items,
    // 2)  reflect  state of <option> els added/removed from orig <select>  after   instant
    // Instead,   build a refresh met (invoked   from _create)for dealing with this linkage,
    //  also keep  click-handling logic  on the list items separate,
    // and  use ev  delegation  to avoid  binding NEW handlers when list items are created.

    a={
        _create: function () {var wg=this, q=wg.element
            wg.list = $("<ul>").iA(q).delegate("li.multi-option-item",   "click",  $.proxy(wg_itemClick, wg))
            q.hd()
            wg.refresh() },
        refresh: function () {var wg=this, q=wg.element  //     Keep track of the generated list items  // Use a class to avoid working on options that have already been created
            wg.items = wg.items || $()
            q.fi("option:not(.demo-multi-option)").ea($.proxy(function (i, el) {var q = $(el)
                q.K("demo-multi-option")  // Add k so option !processed next time list  refreshed
                wg.items.add(
                    $.li().a2(this.list)
                        .K('multi-option-item').A( q.t() )
                        .data("option.multi", el) // Save it into the item cache
                )
            }, wg) ) // If this li's assocd-opt !contained by selEl anymore, // rm it from list/cache
            wg.items = wg.items.filter($.proxy(function (i, item) {var inOrig, wg=this, q= wg.element, el =q[0]
                inOrig  = $.contains(el, $.data(item, "option.multi") )
                if(!inOrig){$(item).rm()}
                return inOrig}, wg)) },
        _itemClick: function (ev) {$l($(ev.target).v())}
    }
// When ref  to the actual wg inst  is acquired via .data(),
// its PRIVATE mets can be invoked directly:
// $( "#something" ).data( "multi" )._create().
// *** OK, SO user will be changing the select element..
// The refresh example is a case in point:
// Since the user will be the one manipug els in the orig  <select>,
// we must provide the facility for him to update the proxy.
// On the other hand, a plumbing function to
// handle input on the proxy els the wg creates,
// like the _itemClick method, is only for internal use
    pops=function(){

        // this.element-  el (always 1)  used to instantiate   plugin.
        // this.options  ops curr  used for plugin config    // On instant, user-provided-ops are MERGED with df vals   defined in $.demo.multi.prototype.options.
        // this.namespace    The namespace the plugin lives in (  "demo" ) -usually not needed
        // this.name   name of the plugin( "multi  ) " -only Slightly more useful than this.namespace!


        // this.widgetEventPrefix     dets how to name evs assocd w plgn cbs


        // when the  dlg's close cb  execd, -> dlg close ev triggered.

        //    ev  name =  ev prefix(df = widget name) +  cb name



        //ex, when a user starts dragging el, we want ev name to be  dragstart,  !draggablestart,   // so we override ev-prefix to be "drag". // If  cb name == event prefix, ev  name !prefixed (prevents ev name like dragdrag)



        // this.widgetBaseClass
        // -useful for building class names to use on els within your widget.
        // ex:    mark an el  active ->   .K( "demo-multi-active" ) <- el.K( this.widgetBaseClass + "-active" )
        // - more for use inside the wgFac & abstract plugins ($.ui.mouse)
    }; pops()
    mets=function() {



        // _create (extend):  setup * related to your widget, (create els, bind  evs.), run ONCE, post-instant


        // _init: ***
        //  invoked when wg  invoked w  0 args | 1 ops arg
        // ( first invoc -> called AFTER  _create).
        // o/w  handle   RE-INIT  // without forcing the user to perform a destroy->create cycle. ****


        // destroy extend! ( provides start point):

        // destroys plugin, cleans up (rms ks, unbind evs, destroy els...

// option (dont modify): get/set ops post-instant, sig ~ .css()/attr(), calls _setOptions internally

// _setOptions (dont modify):  internal util  met used for setting ops after instant, calls _setOption internally


// _setOption (can modify!): Called when a user sets an option val  via the option met
        // ex: when a dialog's title option changes, the text inside the title bar must be updated.
        // In some instances, it's necessary to compare the old and new values to determine the correct side effects.
        // In those instance, you can compare this.options[key] with value as long as you delay the call to the base _setOption until the end.
        // If you don't need to compare the old and new values, you can call the base _setOption at top of your _setOption function.


        _setOption = function (k, v) {
            var q = this, g = G(arguments)
            if (k === 'title') {
                q.titleElement.text(v)
            }
            $.Widget.prototype._setOption.apply(q, g)
        }


// _trigger:
// !! be used to execute all cbs
// The only required pam is the name of cb to execute.  All cbs also trgr evs // (see notes about this.widgetEventPrefix above).
//   may also provide evOb that reps ev that initd the process.
// ex:  drag ev is initd by mousemove ev, // so orig mousemove evOb !!(must) be passed to _trigger.
// pam3 is hash of data that will be passed as cb pam and ev handlers.- hash data should only be info relev to spec ev (!avail via the plugin API)


// enable/disable:    just calls option('disabled', false/true) // Note that you'll want to handle enable/disable, by having an if (key === "disabled") blockin your _setOption


    };mets()



//http://wiki.jqueryui.com/w/page/12138135/Widget%20factory

}


