effects(); interactions(); mets();theming();

function effects(){
    SAMPLER= EFFECTS=function(){$.x('x')

        $CSS({
            _toggler: {w:500, h:200, p:'r'},
            $button: {pad:'.5em 1em', 'text-decoration': 'none' },
            $ef: {w:240,h:135,pad:'0.4em', p:'r'},
            '$ef h3': {mar:0,pad:'0.4em','text-align': 'center' },
            '_ui-efs-transfer':{bor:'2px dotted gray'}
        })

        $.d([
            $.d([
                $.h3('Effect').K('ui-widget-header ui-corner-all'),
                $.p('afsdfsdfsa fasdsafdas fdsdfa')
            ]).id('ef').K("ui-widget-content ui-corner-all")

        ]).K('toggler')



        sl = $.sl().n('efs').id('efTypes')
        _.e([  'efs', 'blind','bounce',  'clip', 'drop', 'explode', 'fade', 'fold',
                'highlight', 'puff', 'pulsate', 'scale', 'shake', 'size', 'slide','transfer'],
            function(a){sl.A($.op(a))})



        $.bt('Run Effect', runEf).id("button" ).K("ui-state-default ui-corner-all")


        function runEf(){$l('runEf')
            var selEf = $( "#efTypes" ).val()
            op =  ( selEf === "scale" ) ?     { percent: 0 } :
                ( selEf === "transfer" )?     { to: "#button", className: "ui-efs-transfer" } :
                    ( selEf === "size" )?  { to: { width: 200, height: 60 } }  :{}
            $( "#ef" ).effect( selEf, op, 500, cb )
            function cb() {_.in(function() {$("#ef").removeAttr("style").hide().fadeIn()})}
            $( "#button" ).$(function() {     runEf();     return false     })
        }



    }
    BROKENMENUMAYBE=HLFDL=function(){$.x('b', 'hlfdl')


        $.d(['z1']).K('error')
        $.d(['z2']).K('error')
        $.d(['hl1']).K('highlight')
        $.d(['hl2']).K('highlight')

        //   http://jsfiddle.net/774wH/


        function errorHighlight(e, type, icon) {
            if (!icon) {
                if (type === 'highlight') {
                    icon = 'ui-icon-info';
                } else {
                    icon = 'ui-icon-alert';
                }
            }
            return e.each(function () {
                $(this).addClass('ui-widget');
                var h = '<div class="ui-state-' + type + ' ui-corner-all" style="padding:0 .7em;">';
                h += '<p>';
                h += '<span class="ui-icon ' + icon + '" style="float:left;margin-right: .3em;"></span>';
                h += $(this).text();
                h += '</p>';
                h += '</div>';

                $(this).html(h);
            });
        }

//error dialog
        (function ($) {
            $.fn.error = function () {
                errorHighlight(this, 'error');
            };
        })(jQuery);

//highlight (alert) dialog
        (function ($) {
            $.fn.highlight = function () {
                errorHighlight(this, 'highlight');
            };
        })(jQuery);

        $('.error').error()
        $('.highlight').highlight()

    }
    HIGHLIGHT=HLT = function () {
        $.h({

            p: {C: 'y', w: 200, bor: '1px solid green'},
            d: {C: 'r', w: 100, h: 100}
        })

        //The Highlight ef  can be used w effect() met
// This highlights the el's bg with a spec  c, df is yellow.
// simp  syntax to use   effect :   se.ef( "hgl", {args}, spd )
// hgl col= "#ffff99".    mode  of the effect =show | hide

        $.p('Click the button')
        $.bt('Highlight').id('bt')
        $.dK('target')


        $("#bt").$(function () {
            $(".target").ef(
                "highlight", {color: "#669966"}, 3000
            )
        })
    }
    HIGHLIGHTFADE= HGHLT = function () {
        $.h({$gg: {C: 'o', w: 100, h: 100}})
        // hides or shows an el  by ang its bgC 1st
        // bgC ="#ffff99"  used during  an
        $.p('Click to tog ')
        d = $('<div>').A().id('gg')
        $(document).$(function () {
            $l('doc')
            $("#gg").gg("highlight")
        })
        $l($.ht().oh())
    }

    SPANFOCUS= FOC = function () {
        $.x()

        $.sp('Some Span').id("my-span").at('tabindex', "0")
        $.sp('Some Span1').id("my-span1")//.at('tabindex',"0")
        $.sp('Some Span2').id("my-span2").at('tabindex', "0")
        document.getElementById('my-span').focus()
        document.getElementById('my-span2').focus()
    }
    LOOKSLIKEHIGHLIGHT= DOESNOTHING=INTX=function(){$.x()
        $CSS({
            $d:{C:'r'}
        })
        k =$('.k')
        // to highlighted/selected els
        // Applies "highlight" ct sty to an el and
        // its ch text, links, and icons.
        k.K('.ui-state-highlight')
        // appl to z msg ct eles. Applies z ct stys to   el
        // and its ch text, links, and icons.
        k.K('.ui-state-error')
        //  appls just z t  c  w/o bg. Can be used on f-lbs, appls z icon c  to ch  icons.
        k.K('.ui-state-error-text')
        //// Appl dimmed al to dsabld UI els,  (adjunct, to an already-styled el)
        k.K('.ui-state-disabled')
        //    apl2 priority-1 bt when need bt hier
        k.K('.ui-priority-primary')
        k.K('.ui-priority-secondary')
        //: Class to be applied to a priority-2 button in situations where button hierarchy is needed.


        j=  $('<div>').A($.h3('hello'))
            .id('d').WH(100, 100).A()
            .K('.ui-state-highlight')


        $.d('r', 100, 100).A($.h3('hello'))




    }
    JUSTREDDIV=IXSTAT = function () {
        $.x()
        k = $.d('r', 500, 200)
        // to clb bT-like elS. Applies clb df ct stys to el
        // and its ch t, lks, and icons.
        k.K('.ui-state-default')
        //   on mv to clb bt-oid. Applies "clickable hover" ct stys
        // to an element and its child text, links, and icons.
        k.K('.ui-state-hover')
        //  on kb fcs to clb btoids. Applies "clickable focus"
        // ct stys  to el and its child text, links, and icons.
        k.K('.ui-state-focus')
        //   on md to clb btoids. Applies "clickable active" cot stysto an el
        // and its ch t, lks, and icons.
        k.K('.ui-state-active')
    }
}

function interactions(){

    dragDrop();
    function dragDrop(){
        SCOP= function(){$.h()
            //  scope    S= "default" group sets of dgb and droppable items,
            //  in addition to droppable's accept op
            // dgb w  same scope v  as a droppable will be accepted by  droppable.
            k= $.d()
            k.dgb({  scope: "tasks"  })
            scope = k.dgb( "option", "scope" )
            k.dgb( "option", "scope", "tasks" )
        }
        CN2SO=function(){$.x()
            //   connectToSortable   Sel=false     allows  dgb to be dropped onto SORTABLE LIST!! (sortables) must: hlpr op = "clone"    req: ui-Soble plg
            k.dgb({
                connectToSortable: "#my-sortable"
            })
            connectToSortable = k.dgb( "option", "connectToSortable" )
            k.dgb( "option",  "connectToSortable", "#my-sortable"  )

        }
        ADDK=function(){


// addClasses=TT, if FF,     will prev  ui-dgb k from being added  - desired   performance optimiz
// when calling .dgb() on 100s of els.


            ks=k.dgb("option","addClasses");
            k.dgb("option","addClasses", false)




        }
        AXIS=function(){ /*


         axisn  S  Df false  Constrains dragging to horiz| vert  axis.  Poss  vs: x,y

         */
            k.dgb({axis: "x"}) ; axis=k.dgb("option","axis");  k.dgb("option", "axis", "x")

        }
        CONTM=function(){$.x()
            /*
             containment -  Constrains dgg to w/in bds of  spec  el| region
             ( Sel dgb el  contained to  bdg box of 1st el found by  sel (or not at all)
             El contained to this el's  bdg box
             S Poss  vs: "parent", "document", "window"
             Arr defining a bounding box in  form [ x1, y1, x2, y2 ]. df=false )
             */

            k.dgb({ containment: "parent"})
            ctnmt = k.dgb("option", "containment" )
            k.dgb( "option", "containment", "parent")
        }
        HANDLE=function(){
//    handle Sel|El=FF only  dgb el descendends drag;     k.dgb({handle: "h2"})  handle = k.dgb("option", "handle" );k.dgb( "option", "handle", "h2" );

        }
        CANCEL=function(){

            /*
             cancel     Prvs spec els from dgg   (Sel= "input,textarea,button,select,option")
             canc=k.dgb("option", "cancel")
             k.dgb("option", "cancel", ".title")
             k.dgb({cancel: ".title"})




             */
        }
        DELAY=function(){
            /*



             delay  N = 0   Time in ms aft  md until drgg should start.  can be used to prvt unwanted drags when $g on  el
             k.dgb({  delay: 300  })      delay = k.dgb( "option", "delay" )        k.dgb( "option", "delay", 300 );



             */
        }
        DISAB=function(){

            // disabled   Bool = FF   Disables  dgb if set to true.
            k.dgb({    disabled: true     })
            disabled = k.dgb( "option", "disabled" )
            k.dgb( "option", "disabled", true );

        }
        DISTN=function(){
            /*
             distance   Num =1  Dist in pxls after md, mouse must move b4 dragging should start (buffer!!)  - can be used to prev unwanted drags when $g on an el.
             k.dgb({  dist: 10  });  dist = k.dgb( "option", "dist" );  k.dgb( "option", "dist", 10 );


             */
        }
        SNAPSTACK=function(){


            // grid   Arr = false      Snaps  dragging hlpr to a grid,  every x and y pxls.  array must be of  form [ x, y ].

            k.dgb({ grid: [ 50, 20 ] })  //; grid = k.dgb( "option", "grid" ); k.dgb( "option", "grid", [ 50, 20 ] );


            //  snap  Wher should  el snap to?   Bool =FF  or Sel (spec  which els to snap to )  if TT,  el will snap to all or dgb els.
            k.dgb({snap:true});//    k.dgb( "option", "snap", true );  snap = k.dgb( "option", "snap" )



            //   snapMode Determines which edges of snap els  dgb will snap to.
            //         S Possible values: "inner", "outer", "both" = both, ignored if  snap op=FF
            k.dgb({ snapMode: "inner" }); // snapMode = k.dgb( "option", "snapMode" );   k.dgb( "option", "snapMode", "inner" );


//   snapTolerance     N=20  dist in pxls from  snap el edges at which snapping should occur.    Ignored if snap op==FF
            k.dgb({   snapTolerance: 30   }); //  snapTolerance = k.dgb( "option", "snapTolerance" );  k.dgb( "option", "snapTolerance", 30 );






            //  scroll  = true  If set to true, ct auto-scrolls while dragging.
            k.dgb({   scroll: false })     //  scroll = k.dgb( "option", "scroll" );  k.dgb( "option", "scroll", false );
            //  scrollSensitivity N=20//               Dist in pxls from  edge of  viewport after which  viewport should scroll.
            //           Dist is relt to pointer, not  dgb. Ignored if  scroll option is false.
            k.dgb({   scrollSensitivity: 100   }); //   scrollSensitivity = k.dgb( "option", "scrollSensitivity" );  k.dgb( "option", "scrollSensitivity", 100 );


            //  scrollSpeed  Type: Number  Df 20  speed at which  window should scroll once  mouse pointer gets within  scrollSensitivity dist. Ignored if  scroll option is false.
            k.dgb({ scrollSpeed: 100  }); // scrollSpeed = k.dgb( "option", "scrollSpeed" );k.dgb( "option", "scrollSpeed", 100 );







            // stack Sel =FF Controls  z-index of  set of els that match  selector, always brings  currently dragged item to  front. Very useful in things like window managers.
            k.dgb({ stack: ".products"  }) //   stack = k.dgb( "option", "stack" );     k.dgb( "option", "stack", ".products" );



            //  zIndex   Z-index for  hlpr while being dragged.   Type: Number  Df false    Init  dgb with  zIndex option spec:
            k.dgb({ zIndex: 100  })//  zIndex = k.dgb( "option", "zIndex" );  k.dgb( "option", "zIndex", 100 );

        }
        HELP=function(){$.x('y','help')



            //Allows for a hlpr el to be used for drggg display
            //     S="original": If set to "clone",  clone of el will be dragged.
            //    F  (that rets  el to use while dragging )


            // k.dgb({  helper: "clone"   })   // hlpr = k.dgb( "option", "hlpr") ;  k.dgb( "option", "hlpr", "clone" );


            // appendTo  Which el   dgb hlpr should be a2 to while dgg
            //   only works when  hlpr op   set  to !use orig el
            //   $(el to appl hlpr to)
            //  or El to appl hlpr to
            //  or Sel  of which el  to app e hlpr to
            // or S="parent"-> will cause  hlpr to be a sib of dgb


            //  k.dgb({appendTo: "body"}) //a2 = k.dgb( "option", "appendTo" ); k.dgb( "option", "appendTo", "body" )

            d = $.d('r', 200, 100).ab(500,200)


            $.d('b', 200, 100).dgb({    helper:'clone',

                //  appendTo: "body"
                appendTo: d
            })

            // opacity  Number  = false Opacity for  hlpr while being dragged.
            k.dgb({  opacity: 0.35   });// opacity = k.dgb( "option", "opacity" ); k.dgb( "option", "opacity", 0.35 );


        }
        REVERT=function(){

//    k.dgb({ refreshPositions: true  })  //refreshPositions = k.dgb( "option", "refreshPositions" ); k.dgb( "option", "refreshPositions", true );




            // refreshPositions=F
            //  If TT, all droppable posns are calcud   every mm,   decreases performance.





            // revert   =false      should el revert to its start posn when dragging stops? // If TT,  el will always revert.
            // S "invalid": revert if  dgb !been doppd (on drppble),  "valid": has been dropped

            // k.dgb({ revert: true     })  //     revert = k.dgb( "option", "revert" )        k.dgb( "option", "revert", true );

            // revertDuration  N = 500   dur  of  revert anim, in ms.   Ignored if  revert op =FF.

            //    k.dgb({   revertDuration: 200  })  //  revertDuration = k.dgb( "option", "revertDuration" )    k.dgb( "option", "revertDuration", 200 )


            k.dgb({  revert:true,  revertDuration: 200  })



            //  cursor  CSS cursor during  drag operation.     Type: S Df "auto"

            // k.dgb({ cursor: "crosshair"  }) //    cursor = k.dgb( "option", "cursor" );  k.dgb( "option", "cursor", "crosshair" );



            //  cursorAt=FF     Sets   dgg hlpr  ofset   relt to  mouse cu  coords { top, left, right, bottom }.
            // can be given as  hash using a combi of one or two keys:

            //   k.dgb({ cursorAt: { left: 5 }  });  //cursorAt = k.dgb( "option", "cursorAt" )       k.dgb( "option", "cursorAt", { left: 5 } )






            //  iframeFix =FF   Prev iframes from capturing  mm evs during a drag.
            // Useful in combi with  cursorAt option,  or in any case where  mouse cu  may not be over  hlpr.
            // When set to TT, transparent overlays will be placed over all iframes on  page.
            // Sel  Any iframes matching  sel will be covered by transparent overlays.

            k.dgb({    iframeFix: true,
                cursor: "crosshair" ,
                cursorAt: { left: 5 }

            })

            // iframeFix = k.dgb( "option", "iframeFix" );  k.dgb( "option", "iframeFix", true );




        }
        METS=function(){

            /*




             enable()-> jQ(plg!) Enables  dgb. does not accept any args.
             Invoke  enable method:   k.dgb( "enable" )





             isDisabled = k.dgb( "option", "disabled" );
             disable()-> jQ(plg!)  Disables  dgb.
             Invoke  disable method:  k.dgb( "disable" )
             disable()   Disables  dgb     -> jQ(plg!)
             k.dgb( "disable" );



             k.dgb( "destroy" );  Rms  dgb functiony completely.
             destroy-> $(plugin only)    return  el  back to its pre-init state
             k.dgb( "destroy" )


             widget ->  qob containing  dgb el
             widget = k.dgb( 'widget' )
             k.dgb("option",{disabled:TT}); widget()-> $(dgb el)
             widget = k.dgb( "widget" )
             */

        }
        OPTIONS=function(){
            /*

             options = k.dgb( "option" )
             option()-> Pob   Gets an ob containing key/value pairs repg  current dgb options hash.  does not accept any args.
             option( optionName )-> Object Gets  value currently associated with  spec optionName.
             Note: For options that have obs as ir value, you can get  value of a specific key by using dotnot.
             "foo.bar" would get  value of  bar property on  foo option.





             */
        }
        INST=function(){

            //   inst()  -> Object  Retrieves  dgb's inst ob.
            //   If  el  does not have an assoc inst, -> undef
//     Unlike or wid  mets,   inst() is safe to call on any el after  dgb plugin has loaded.
            k.dgb('instance')
            // inst()-> Object  Retrieves  dgb's inst ob. If  el does not have an associated inst, undefined is returned.
            // Unlike or widget methods, inst() is safe to call on any el after  dgb plugin has loaded.
            k.dgb( "inst" )


        }
        OPTS=function(){

            //   option( optionName, value ) -> jQ(plg!)     v  of  dgb op asc  w   spec opN
            //   for ops!- O(op.v) , you can set  v  of 1pop w dotnot for optionName.
            //   "foo.bar" would update only  bar property of  foo option.
            //   k.dgb( "option", "disabled", true );  option( options )-> jQ(plg!)
            //   Sets 1+ options for  dgb.     options     option-value pairs map
            //   option(opN) -> opN's v
            //   use dotnot to get v of a k |-  O(v)  "foo.bar" -> v
            //   of  bar pop on  foo op
            //   optionName  S       n  of  op to get
            //   isDisabled = k.dgb( "option", "disabled" )
            //   option -> k/v pob hash repg  cur dgb op hash      options = k.dgb( "option" )
            //   option( optionName, value ) -> $(plugin only)   Sets  v of  dgb option assoc  w  spec  opN

            //  For ops that have obs as ir v, you can set  v
            //  of 1 pop by using dotnot for opN
            //  ex "foo.bar" would upd   only  bar pop of  foo op
            //  opN  Ty : S   n  of   op  to set.
            //  v  ob  v  to set for  op    k.dgb( "option", "disabled", true )
            // option(options ) -> jQ(plg!)   Sets 1+ ops for  dgb.
            // options O map of op-val  pairs to set.

            k.dgb('option',{disabled:true})



        }
        DRAGCR=function(){




            // create( ev, ui )  dragcreate   when  dgb is created.
            //  create(ev,ui{})  dragcreate      k.dgb({create: function( ev, ui ) {}})

            k.dgb({
                create: function( ev, ui ) {}  })
            k.on( "dragcreate", function( ev, ui ) {} )



        }
        DRAGST=function() {



            // start( ev, ui )
            //Type: dragstart   Triggered when dragging beg.
            k.dgb({   start: function( ev, ui ) {}}) //    k.on( "dragstart", function( ev, ui ) {} );

            start( ev, ui )  //   dgg beg

            //   dragstart {
            //  helper:    Qob repg  hlpr that's being dragged
            //   position:   { top, left }  offset { top, left }  hlpr's offset pos   }

            k.dgb({   start: function( ev, ui ) {}})
            k.on( "dragstart", function( ev, ui ) {} )



            //  stop( ev, ui )  dragstop    when dragging stops.
            //  hlpr Type:  Qob repg  hlpr that's being dragged.
            //  posn  Current CSS posn of  hlpr as { top, left } ob.
            //  offset   Current offset posn of  hlpr as { top, left } ob.

            k.dgb({   stop: function( ev, ui ) {}})//    k.on( "dragstop", function( ev, ui ) {} );

            stop( ev, ui  )

            // dragstop  Triggered when dragging stops.  {h, p, o}


            k.dgb({
                stop: function( ev , ui ) {}
            })
            k.on( "dragstop", function( ev, ui ) {} )


        }
        DRAGEV=function(){

            /* drag( ev, ui )T  drag   while  mouse moved during  dragging, imm  b4  cur move happens.
             k.dgb({   drag: function( ev, ui ) {}   });         k.on( "drag", function( ev, ui ) {} );
             Constrain movement via ui.posn:   k.dgb({ drag: function( ev, ui ) {
             // Keep  left edge of  el,  at least 100 pxls from  ct
             ui.posn.left = Math.min( 100, ui.posn.left )  }})
             drag( ev{}, ui{} )  trgd while  mouse  moved during  dgg (imm b4 cur move)
             hlpr   Qob-hlpr being dragged posn   -> { top, left }    useful for cust  containment, snapping
             offset   ->   { top, left }  cur offset posn of  hlpr
             k.dgb({     drag: function(ev,ui){}         })    k.on( "drag",function(ev,ui){})

             Constrain movement via ui.posn , Keep  left edge of  el  at least 100 pxls from  ct
             k.dgb({drag: function( ev, ui ) { ui.posn.left = M.min( 100, ui.posn.left ) }})



             */


        }
        DRAGGY=function(){$.x('o', 'draggy')

            $.d('r', 500, 500).K('sel')

            $('.sel').dgb({
                delay: 1000,
                distance: 100,
                helper: "clone",
                addClasses: false,
                snapMode: "inner",
                grid: [ 50, 20 ],
                snap:true
            })


        }
        APP2=function(){

            k=$('.k')

            k.dgb({appendTo: "body"})
            k.dgb({  helper: "clone"   })

        }
        DGB=function(){$.x('o','dgb')

            $CSS({ $dgb: {w: 100, h: 100, C:'r'} })

            $.dI('dgb').A('Drag me')


            $("#dgb").dgb()

        }
        DPB=function(){$.x('b', 'dpb')

            $CSS({
                $dgb: {C:'r', w:100, h:100},
                $dpb: {
                    p:'a',
                    C:'o',c:'b',
                    l:250, t:0, w:400, h:400,
                    pad: 10
                }})


            dp = $.d(['Drop here']).id('dpb')
            dg = $.d(['Drag me']).id('dgb')
            $("#dgb").dgb()
            $("#dpb").dpb({
                drop:function(){dp.C($r()).A(dg.XY(0,0))}})
        }
        DROP=function(){

            $CSS({   $dgb: {w: 100, h:50, pad: '0.5em', fl:'l',
                mar:'22px 5px 10px 0'},
                $dpb: {w:130, h:90, pad:'0.5em' , mar:10, fl:'l'},
                div: {w:400, h:300, C:'r',c:'y'} ,


                $dgb2 :{w:100, h:50,pad:'0.5em',mar:'0px 5px 10px 0'},

                '#dpb2,#dpb3,#dpb4,#dpb5': {w:12,h:90,pad:'0.5em',fl:'l',mar:10}

            })

            $.d().id('dgb').K('ui-widget-content').A($.p('Drag me'))
            $.d().id('dpb').K('ui-widget-header').A($.p('here'))
            $("#dgb").dgb()
            $("#dpb").dpb()








            Dpb(2,'Drag me to my target','ui-widget-content')

            Dpb(2,'here');
            Dpb(3,"dsbld !drop");Dpb(4,'tol toch');

            Dpb(5,'tol fit')


            $("#dgb2").dgb()
            $("#dpb2").dpb({drop: function( ev, ui ) {$(this).K("ui-state-highlight").find("p").html("Dpd")}})
            $( "#dpb3" ).dpb({disabled:"true", drop: function(ev,ui){$(this)
                .K("ui-state-highlight").find("p").html("Dpd")}})
            $( "#dpb4" ).dpb({tolerance: 'touch', drop: function(ev, ui){
                $(this).K("ui-state-highlight").find("p").html("Dpd w tch")}})
            $( "#dpb5" ).dpb({tolerance: 'fit', drop: function( ev, ui ) {
                $( this ).K( "ui-state-highlight" )
                    .find("p").html("Dpd whn fulfit" )}})



            function Dpb (id,pT,k){k=k||"ui-widget-header"

                return $.d().id('dpb'+id).K(k).A($.p(pT))
            }

        }
    }

}

function mets(){

    INTERACTIVEBUTAMESS=POSI=function(){$.h({
        $par :{
            C:'b',ta:'c', w:'60%',ht:40,
            mar:'10px auto',pad:5, bor:'1px solid #777'
        },
        _psb:{
            p:'a', ds:'b',
            r:0,b:0,C:'r', ta:'c'
        },
        $psb1:{w:75, h:75},
        $psb2:{w:120, h:40},
        'select,input':{mL:15 }
    })


        $.d([$.p('This is the ps par el')]).id('par')
        $.dK('psb').id("psb1")
        $.p('to ps')

        $.d([ $.p('to ps2')]).K('psb','psb2')
        $.d().mgT(75).pad(20),  'ps...'
        $.d().pdB(20)

        $.b().A('my:')

        $.sl('my_hz', 'left', 'center', 'right')
        $.sl("my_vrt", 'top', 'center','bottom')

        $.d().pdB(20)

        $.p().A('at:')
        $.sl("at_hz", 'left','center','right')
        $.sl("at_vrt", 'top', 'center', 'bottom')



        $.d([

            $.b().A('cl:'),
            $.sl('cl_vrt','flip','flit','flipfit','none'),
            $.sl('cl_hz','flip','flit','flipfit','none')

        ]).pdB(200)


        $("select, input").bind("click keyup change", ps)
        $("#par").dgb({drag: ps})
        $(".psb").al(.5)

        ps()
        function ps() {
            $( ".psb" ).ps({
                of:$("#par"),
                my:$("#my_hz").v()+$("#my_vrt").v(),
                at:$("#at_hz").v()+$("#at_vrt").v(),
                collision: $( "#cl_hz" ).v() + $( "#cl_vrt" ).v()
            })}
    }
}
function theming(){
    BLANK=LAYOUTHELP = function () {

        k = $('.k')
        k.K('ui-helper-hidden')
        //  Hides content visually  and from assistive technologies, such as screen readers.
        k.K('ui-helper-hidden-accessible')
        // Hides cont
        k.K('.ui-helper-reset')
        // A basic style reset for DOM nodes. Resets pad, mar, t-dec, ls-sty
        k.K('.ui-helper-clearfix')
        // Appls float, wrapg pops to par els
        k.K('.ui-front')
        // z-ix to mang  stackg  of mult wids on screen.  See  stacking ELS
        k.K('.ui-widget')
        // outer ct of all wids. Appls fo-fam  and fZ to wids
        k.K('.ui-widget-header')// : appl2  hdr conts. Appls hdr cont sty to el and its ch t,lks, and icons.
        k.K('.ui-widget-content')
        // : appl2 cont cts. // Appls cont-ct stys to el and its ch t, lks, and icons.
        // (can be appld to par  or sib  of hdr).

    }
    HIDESHOWNICE=HIDE = function () {
        $.x()


        $CSS({
            p: {C: '#bca', w: 200, bor: '1px solid green'},
            div: {w: 100, h: 100, C: 'r'}
        })


        $.p('$')
        $.bt('hd').id('hd')
        $.bt('sh').id('sh')
        d = $.dK('tg')

        $('#hd').$(function () {
            d.hd('sl', {d: 'r'}, 500)
        })

        $('#sh').$(function () {
            d.sh('sl', {d: 'd'}, 2000)
        })


    }
    NOTWORKING=ICONN = function () {
        $.x('y', 'icon')
        $.sp('helllloooo1')
        $.sp('helllloooo2').K("ui-icon ui-icon-arrowthick-1-n")


        k = $.d('k', 500, 500)

        k.K('ui-icon ui-icon-triangle-1-e')

        /*
         Base class to be applied to an icon element.
         Sets dimensions to a 16px square
         block,
         hides inner text,
         sets background image to
         "content" state sprite image.

         Note: ui-icon class will be given    different sprite background image
         depending on its parent container.

         For example,
         a ui-icon element
         within a ui-state-default container
         will get colored according to
         the ui-state-default's icon color.
         Icon types

         After declaring a ui-icon class,
         you can follow up with a second class
         describing the type of icon.
         Icon classes generally follow a syntax


         */
        //  .ui-icon-{icon type}-{icon sub description}-{direction}.
//             For example, a single triangle icon pointing to the right
        //    .ui-icon-triangle-1-e
        //  ThemeRoller provides
        // full set of CSS framework icons  in  prev col
        //  Hv over them to see the class name.
    }
    NOTHINGATALL=VLAYSHAD = function () {

        k = $('.k')
        k.K('ui-widget-overlay')
        /*

         Applies 100% width & height dimensions to an overlay screen,
         along with background color/texture, and screen opacity.
         k.K('ui-widget-shadow')
         appy to vlay widg shad els
         Applies bg    c/texture, cust cor rad, al,
         top/left ofs and shd "thickness".
         Thickness is appld via pad  all sides of shad  that
         set to mat  the dims of the overlay el .
         Offsets are appld via t and l  margs  (can be pos  or neg ).
         */

    }// *** good one!  https://www.packtpub.com/books/content/jquery-ui-themes-states-cues-overlays-and-shadows
    NICEFADEIN=OVERLY = function () {
        $.h({
            body: {bor: 0, mar: 0},
            '_ui-widget-overlay': {bg: 'repeat-x scroll 50% 50% #AAA', opacity: '0.3'},
            '_ui-widget-overlay': {h: '100%', l: 0, ps: 'a', t: 0, w: '100%'}
        })
        overlay = $.dK("ui-overlay").A(
            $.dK("ui-widget-overlay")
        ).hide().A()
        overlay.fadeIn()
        $(window).resize(function () {
                overlay.width($(document).width())
                overlay.height($(document).height())
                overlay.hide().fadeIn()
            }
        )

    }
    /*
     <style type="text/css">
     body: {bo:0;margin:0}
     .ui-widget-overlay { background: repeat-x scroll 50% 50% #AAA, opacity:0.3  }

     .ui-widget-overlay {height:100%, left:0, position:absolute, top:0, width:100%; }

     </style>
     <script type="text/javascript">

     $(function () {
     var $overlay = $('<div class="ui-overlay"><div class="ui-widget-overlay"></div></div>').hide().appendTo('body');
     $overlay.fadeIn();

     $(window).resize(function () {
     $overlay.width($(document).width());
     $overlay.height($(document).height());
     });
     });
     </script>
     */
    ITHINKNOTHING=CORRAD = function () {
        $.x('o')
        $.d('d', 500, 500)
        k = $.d('d', 500, 500)
        /*   k.K('.ui-corner-tl') // corner-radius to top left corner of element.
         k.K('.ui-corner-tr')// t r cor
         k.K('.ui-corner-bl')//to bt l corn
         k.K('.ui-corner-br')// bt r cor
         k.K('.ui-corner-top')//o both t cors
         k.K('.ui-corner-bottom')//both bt cors
         k.K('.ui-corner-right')// both r cors
         k.K('.ui-corner-left')// both left cors
         k.K('.ui-corner-all')//all 4 cors
         */
    }
    STUCKLOGINFORM= UICT = function () {
        $.h()
//http://www.phpeveryday.com/articles/jQuery-UI-Using-The-Framework-Classes-P986.html
        num = 3
        if (num == 1) {

            $.dK("ui-widget").A(
                $.dK("ui-widget-header ui-corner-top").A(
                    $.h2('his is a ui-widget-header container')),
                $.dK("ui-widget-content ui-corner-bottom").A(
                    $.p('This is a ui-widget-content container')))


            $.dK("ui-widget").A(
                $.dK("ui-state-default ui-state-active ui-corner-all").A(
                    $.a('clickable and selected')),
                $.d([
                    $.a('clickable but not selected')
                ]).K("ui-state-default ui-corner-all"))
        }
        $('.ui-state-default a').hv(function () {
            $(this).parent().K("ui-state-hover")
        }, function () {
            $(this).parent().xK("ui-state-hover")
        })
        if (num == 2) {
            $.dK("ui-widget").A(
                $.dK("ui-state-default ui-state-active ui-corner-all").A(
                    $.dK("ui-icon ui-icon-circle-plus"), $.a('clb, seld')),
                $.dK("ui-state-default ui-corner-all").A(
                    $.dK("ui-icon ui-icon-circle-plus"),
                    $.a('clb, !selected')))

            $(".ui-state-default a").hv(function () {
                    $(this).pa().K("ui-state-hover")
                },
                function () {
                    $(this).pa().xK("ui-state-hover")
                })
        }
        if (num == 3) {


            $CSS({


                '_ui-form': {w: 470, mar: '0 auto'},
                '_ui-form _ui-widget-header h2': {margin: '10px 0 10px 20px'},
                '_ui-form _ui-widget-content': {padding: 20},
                '_ui-form label, _ui-form input, _ui-form _ui-state-error,_ui-form _ui-icon, _ui-form _ui-state-error p': {fl: 'l'},
                '_ui-form label, _ui-state-error p': {fz: 12, pad: '10px 10px 0 0'},
                '_ui-form _ui-state-error': {pad: 4},
                '_ui-form _ui-state-error p': {'font-weight': 'bold', pT: 5},
                '_ui-form _ui-state-error _ui-icon': {mar: '5px 3px 0 4px'}
            })


            $.dK("ui-widget ui-form").A(
                $.dK("ui-widget-header ui-corner-all").A(
                    $.h2('Login Form')),
                $.dK("ui-widget-content ui-corner-all").A(
                    $.f().K('ui-helper-clearfix').A(
                        $.lb('Username').K("ui-helper-reset"),
                        $.d("ui-state-error ui-corner-all").A(
                            $.ip(), $.dK("ui-icon ui-icon-alert"),
                            $.p('Required field')
                                .K("ui-helper-reset ui-state-error-text")))))


        }
        // <link rel="stylesheet" type="text/css" href="css/ui.form.css">


//http://www.w3.org/TR/html4/strict.dtd">

    }
}

//WIDS:
UISLMENU=function(){$.x()

    $CSS({fieldset: {bor: 0}, label :{display: 'block', mar:'30px 0 0 0'}, select :{w: 200}, _overflow: {h:200}})

    $.d([

        $.f().at('action','#').A( $('<fieldset>').A(
            $.lb('select a speed').for('speed'),
            $.sl().id('speed').n('speed').A(
                $.op('slower'), $.op('slow'),
                $.op('medium').at('selected','selected'),
                $.op('fast'),   $.op('faster')),
            $.lb('Select a file').for('files'),

            $.sl().n('files').id('files').A(
                $.og("Scripts").A(
                    $.op('jquery','jquery'),
                    $.op('ui.juqery.jus','jqueryui')),
                $.og("Other files").A(
                    $.op('some unknown file', 'somefile'),
                    $.op('Some other file w long option text', 'someotherfile'))),

            $.lb('Select a number').for('number'),

            $.sl().n('number').id('number').A(

                $.op('1'),   $.op('2').at('selected',"selected"),
                $.op('3'),  $.op('4'),  $.op('5'),   $.op('6'), $.op('7'),
                $.op('8'),   $.op('9'), $.op('10'),
                $.op('11'), $.op('12'),  $.op('13'),  $.op('14'),
                $.op('15'), $.op('16'),  $.op('17'),  $.op('18'),
                $.op('19')

            )))]).K('demo')



    $("#speed").selectmenu()
    $("#files").selectmenu()
    $("#number").selectmenu().selectmenu("menuWidget").K("overflow")

}
AUTOCP=function(){  $.x('x', 'autocp')

    availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure",
        "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java",
        "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"]



    $.d([

        $.lb('Tags:').for('tags'), $.ip().id('tags')

    ]).K('ui-widget')


    $(function(){$("#tags").autocomplete({source: availableTags })})


}
TABSELIX = function () {
    $.h({
        ip: {bor: '1px solid #000'}, d: {pad: 5}
    })
    $.d([
        'no tabindex'
    ])
    $.d([$.ip().tIx(5, '+tIx')
    ])
    $.d([$.ip().tIx(5, '+tIx')
    ])
    $.d(['-tIx',
        $.ip().tIx(-1, '-tIx')
    ])

    $(":tabbable").bdC("red")
}
function dpick(){


    DATEPICK=function(){
        $.p('Date: ').A($.ip().id('dtp'))
        $('#dtp').dtp()}


    DATEPIKR=function(){$.x('b','jqui')
        d = $.d('b',400,400).A(
            ip= $.ip('date').datepicker()
        ).pad(20)
    }
//
    DATESCR=function(){$.x('b','jqui')
    ('<link rel="stylesheet" href="/jquery-ui.min.css">').A()
    ('<script src="/jquery-ui.min.js">').A()
        d = $.d('b',400,400).A(
            ip= $.ip('date').datepicker()
        ).pad(20)
    }

    DATEPIK=function(){z()

        $.d().id("datepicker")
        $( "#datepicker" ).datepicker()
    }
};
selMenu()
function selMenu() {
    $.fn.slM = function () {
        var g = G(arguments)
        this.selectmenu.apply(this, g)
        return this
    }
    UISL = function () {
        $.h({
            fieldset: {bor: 0},
            label: {ds: 'block', mar: '30px 0 0 0'},
            select: {w: 200}, _overflow: {h: 200}
        })
        $.sl({Vol: 'vol', Sab: 'sab', Opl: 'opl', Au: 'au'})
        $.sl().A(
            $.og("Swedish Cars", ['volvo', 'saab']),
            $.og("German Cars", ['mercedes', 'audi']))

        $.dK('demo').A($.f().A(
            $('<fieldset>').A(
                $.lb('select speed', 'speed'),
                $.sl(['Slower', 'Slow', $.o('Medium').at('selected', 'true'), 'Fast', 'Faster'
                ]).n('speed').id('speed'),
                $.lb('select file', 'files'),
                $.sl().n('files').id('files').A(
                    $.og('Scripts', [
                        $.o('jQuery.js', 'jquery'),
                        $.o('ui.jQuery.js', 'jqueryui')]),
                    $.og('Other files', [
                        $.o('Some unknown file', 'somefile'),
                        $.o('Some other file with a very long option text', 'someotherfile')])),
                $.lb('select num', 'number'),
                $.sl([1, $.op('2').at('selected', true),
                    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
                ]).n('number').id('number')
            )).at('action', '#'))

        $("#speed").slM()
        $("#files").slM()
        $("#number").K("overflow").slM().slM("menuWidget")
    }
    SELMENU=function(){z()

        $CSS({

            label: { display: 'block' },
            select: { width: 200 },
            _overflow :{ height: 200  }
        })




        $.lb('Select a number', 'number')

        $.sl().n('number').id('number').A(
            $.op(1),  $.op(2).attr('selected',true), $.op(3),
            $.op(4),  $.op(5), $.op(6),  $.op(7),  $.op(8),  $.op(9),  $.op(10),
            $.op(11),  $.op(12), $.op(13),  $.op(14),  $.op(15),
            $.op(16),  $.op(17),  $.op(18),  $.op(19))

        $( "#number" )
            .selectmenu()
            .selectmenu( "menuWidget" )
            .K( "overflow" )
    }
}

ACCORD=function(){z()


    $.d([

        $.h3('Section 1'),
        $.d([$.p(
            'afdafssfafsfds Mauris mauris ante, blandit et, ultrices a, suscipit eget.Integer ut neque.' +
            'Vivamus nisi metus, molestie vel, gravida in,condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros.Nam mi.' +
            'Proin viverra leo ut odio')
        ]),


        $.h3('Section 2'),
        $.d([$.p(
            'Sed non urna. Phasellus eu ligula. Vestibulum sit amet purus.'+
            'Vivamus hendrerit, dolor aliquet laoreet,' +
            ' mauris turpis velit,faucibus interdum tellus libero ac justo'
        )]),

        $.h3('Section 3'),
        $.d([
            $.p(
                'Nam enim risus, molestie et, porta ac, aliquam ac, risus.'+
                'Quisque lobortis.Phasellus pellentesque purus in massa.'
            ),

            $.ul([
                $.li().A('List item 1'),
                $.li().A('List item 2'),
                $.li().A('List item 3')
            ])
        ])
    ]).accordion()
}



MENU1=function(){z()

    $CSS({
        '.ui-menu' : {
            width: 200,
            C:'r'
        }

    })


    $.ul().A(
        $.li('Item 1'),
        $.li('Item 2'),
        $.li().A(
            'Item 3',
            $.li('Item 3-1'),
            $.li('Item 3-2'),
            $.li('Item 3-3'),
            $.li('Item 3-4'),
            $.li('Item 3-5')),
        $.li('Item 4'),
        $.li('Item 5')
    ).id("menu")
    $( "#menu" ).menu()
}
MENU=function(){z();
    $CSS({'.ui-menu': { width: '150px' }})

    $.ul().id('menu').A(
        $.li().A('Hockey'),
        $.li().A('Football',
            $.ul().A(
                $.li('Iain Hume'),
                $.li('Del Piero'),
                $.li('David James'))),
        $.li().A('Cricket',
            $.ul().A(
                $.li('Sachin'),
                $.li('Ganguly'),
                $.li('Dravid'))),
        $.li().A('KickBoxing').K('ui-state-disabled'),
        $.li().A('Tennis',
            $.ul().A(
                $.li().A('Patrick Rafter'))))

    $( "#menu" ).menu()
}
PROG=function(){z();$Ms('progress bar')

    $.d().id('progressbar')

    $( "#progressbar" ).progressbar({
        value: false
    })
}
NUMSPIN=function(){z();$Ms('simple number spinner');$.C('z')

    $.ip().id('spinner').C('o')

    $( "#spinner" ).spinner()


}

BUTSET=function(){z()
    $.f().A(
        $('fieldset').A(
            $('<legend>Favorite jQuery Project</legend>'),
            $.d().id('radio').A(
                $('<input type="radio" id="sizzle" name="project">'),
                $('<label for="sizzle">Sizzle</label>'),
                $('<input type="radio" id="qunit" name="project" checked="checked">'),
                $('<label for="qunit">QUnit</label>'),
                $('<input type="radio" id="color" name="project">'),
                $('<label for="color">Color</label>'))))
    $( "#radio" ).buttonset()
}



SLIDER=function(){z()

    $CSS({ '#slider':  { margin: 10 }	})
    $.d().id('slider')
    $( "#slider" ).slider()}
UITAB=function(){z()

    $.d().id('tabs').A(
        $.ul().A(
            $('<li><a href="#fragment-1"><span>One</span></a></li>'),
            $(' <li><a href="#fragment-2"><span>Two</span></a></li>'),
            $('<li><a href="#fragment-3"><span>Three</span></a></li>')

        ),
        $.d().id('fragment-1').A(
            $('<p>First tab is active by default:</p> <pre><code>$( "#tabs" ).tabs(); </code></pre>')
        ),

        $.d().id('fragment-2').A(
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy' +
            ' nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.     ' +
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ' +
            'sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam ' +
            'erat volutpat.'

        ),
        $.d().id('fragment-3').A(
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy' +
            ' nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.' +
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy ' +
            'nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.' +
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ' +
            'sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam' +
            ' erat volutpat.'

        )
    )







    $( "#tabs" ).tabs()

}
TIP=function(){z()

    $.p().A(
        $('<a href="#" title="Anchor description">Anchor text</a> <input title="Input help">')
    )

    $( document ).tooltip()

}
AUTOCOMP=function(){z()

    $.lb('Select a programming language: ', "autocomplete")


    $.ip().id("autocomplete")

    tags = [ "c++", "java", "php", "coldfusion", "javascript", "asp", "ruby" ];
    $( "#autocomplete" ).autocomplete({
        source: function( request, response ) {
            var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
            response( $.grep( tags, function( item ){
                return matcher.test( item );
            }) );
        }
    })
}
UIBUT=function(){z()


    $.bt('button label')
    $( "button" ).button()
}






//to use bootstrap with jqui!!!
//http://www.ryadel.com/2015/01/03/using-jquery-ui-bootstrap-togheter-web-page/
// http://api.jqueryui.com/jQ.widget.bridge/