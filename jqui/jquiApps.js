$l('jquiApps')
dpick();draggy();droppy();jqAnimApps();jqAlpha();werks()

function draggy(){
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


        ks=k.dgb("option","addClasses"); k.dgb("option","addClasses", false)




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






//to use bootstrap with jqui!!!
//http://www.ryadel.com/2015/01/03/using-jquery-ui-bootstrap-togheter-web-page/
// http://api.jqueryui.com/jQ.widget.bridge/
}
function droppy(){DPB=function(){$.x('b', 'dpb')

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
    UIAN=function(){$.x('x')

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
            function cb() {$.in(function() {$("#ef").removeAttr("style").hide().fadeIn()})}
            $( "#button" ).$(function() {     runEf();     return false     })
        }



    }
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
////// works above, not below /////



    HLFDL=function(){$.x('b', 'hlfdl')


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


};

function jqAnimApps() {
    QUU = function () {
        $.x('x', 'quu')


        //  Qu   allow series fns to be execd asynch on an el
        //  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
        //
        // which levgs qus to build up   series of steps
        // that will transtn  1+ CSS vals thru/out the dur
        //  can pass a cb fn to  .an()  to exec on done

        x = $('.x')


        x.an({height: 20}, "slow",
            function () {
                $("#title").html("in cb")
            })
        //   *Ques As Cbs
        // Instead of passing a cb as an argument,
        // we can add another function to the queue
        // that will act as our cb
        // This will execute
        // after all of the steps in the
        // anim  have completed.

        x.an(
            {height: 20},
            "slow").qu(function () {
                $("#title").h("in anim")
                $(this).dq()
            })
            //  tells jQ  to continto N-item in  que

            //    queued fn will exec   after the anim
            //  jQuery does not have any insight into
            // how the queue items function,
            // so we need to call .dequeue(),
            // which tells jQuery when to move to the n item in the queue.

            //  Another way of dequeuing
            // is by calling the fn that is passed to your cb
            // That fn will auto  call .dq() for you

            .qu(function (n) {
                $l("I fired!");
                n()
            })
        //  *Custom Queues
        // Up to this point all of our anim
        // and qu   ex  have been using the def qu  n  which is fx.
        // Elements can have multiple queues
        // attached to them,
        // and we can give each of these qusa dif  name.
        // We can specify a custom queue name as
        // the 1st arg  to the .qu() method.


        x.qu('an', function (n) {
            $l("Step 1");
            n()
        }).qu('an', function (n) {
            $l("Step 2");
            n()
        }).dq('an');
        //  Notice that we have to call the .dequeue() method passing it the name of our custom queue to start the execution. Every queue except for the default, fx, has to be manually kicked off by calling .dequeue() and passing it the name of the queue.

        //   Clearing The Que
        //  Since queues are just a set of ordered operations, our application may have some logic in place that needs to prevent the remaining queue entries from executing. We can do this by calling the .clearQueue() method, which will empty the queue.


        x.qu('an', function (n) {
            $l("nev log (qu clrd)");
            n()
        })
            .clrQ('an').dq('an')


        //   In this example, nothing will happen as we removed everything from the steps queue.

        //   Another way of clearing the queue is to call .stop( true ). That will stop the currently running animations and will clear the queue.


        //  *Replacing The Queue:  When you pass an array of functions as second argument to .queue(), that array will replace the queue.


        x.qu(
            'an',

            function (n) {
                $l("nev fire (qu replaced)");
                n()
            })

            .qu(
            'an', [
                function (n) {
                    $l("fired!");
                    n()
                }
            ]).dq('an')


        //
        // You can also call .queue() without passing it functions, which will return the queue of that element as an array.

        x.qu('an', function (n) {
            $l("fired!");
            n()
        })

        $l(x.qu('an'))

        x.du('an')

    }
    COLANIM = function () {
        $.x()
        $CSS({
            $el: {C: '#aaa', c: '#006', fz: 25, ta: 'center', pad: '1em'}
        })
        $.d(['color anims']).id('el')
        $.bt('anim cols').id('tog')
        $('#tog').$(function () {
            $("#el").an({c: 'g', C: "rgb(20,20,20)"})
        })


        /*
         Color Animation
         jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.

         The following properties are supported:

         backgroundColor
         borderBottomColor
         borderLeftColor
         borderRightColor
         borderTopColor
         color
         columnRuleColor
         outlineColor
         textDecorationColor
         textEmphasisColor
         Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.

         Class Animations
         While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.

         link
         */
    }
    ANF = function () {
        z()

        a = $.dA().bgI('chicks').anf()
        anim = function (o) {
            o = o || {};
            return {
                u: o.u || 'chicks',
                n: o.n || 1, w: o.w || 64, r: o.r || 60, c: o.c || 0, l: o.l || false
            }
        }
        an = function (q, a) {
            if (q.han) {
                _.cI(q.han)
            }
            if (a.u) {
                q.bi(a.u)
            }
            if (a.n > 1) {
                q.han = _.sI(function () {
                    a.c++;
                    if (!a.l && a.c > a.n) {
                        _.cI(q.han);
                        q.han = false
                    }
                    else {
                        a.c %= a.n
                    }
                    q.sFr(a)
                }, a.r)
            }
        }
    }
    NOTANIM = function () {
        $.x()
        var s = 1000, m = function (n) {
                return {marginLeft: n}
            },
            n = 0;
        d = $.d().id('test').A().A(y = $.can('x', 40).K('box'));
        d2 = $.d().id('debug');
        $('#test').$(function () {
            $.notAn($('.box')).an({marginLeft: -10}, s,
                function () {
                    $('#debug').A($.p('start..' + n++))
                })
                .an({marginLeft: 10}, s)
                .an({marginLeft: -10}, s)
                .an({marginLeft: 10}, s)
                .an({marginLeft: -10}, s)
                .an({marginLeft: -10}, s)
                .an({marginLeft: 0}, s,
                function () {
                    $('#debug').A($.p('fin'))
                })
        })
    }
    HVBX = function () {
        $.x()

        $.hvBx = $.hoverBox = function () {
            z()
            d = $.d('o', 500, 500, '+').id('test')
            y = $.c('p', 400).K('box').hd()
            d.A(y)
            $('#test').hv(function () {
                    $('.box').st().f2(200, 1)
                },
                function () {
                    $('.box').stop().f2(200, 0)
                })
        }

        $.hvBx()
    }
    ANL = function () {
        $.fn.anL = function () {
            var q = this
            this.sh("slow")
            this.an({"marginLeft": "300px"}, 2000)
                .an({"marginLeft": "0px"}, 2000)
            this.hd("slow", function () {
                q.anL()
            })
        }

        $.d('b', 100, 300).anL()
    }
    FLASH = function () {
        z()


        timeline = $.divA().WH('auto').drag()

        timeline.A(
            $.canvas('blue', 500, 500),
            $.br()
        )

        _.times(24, function (x) {

            timeline.A(
                $.div('red', 100, 100).css({display: 'inline-block'}).H((x * 10) + 100)
            )

        })


    }
    COOLSEL = function () {
        $.x()
        // rather than worry about synchronization between each panel
        //we will take last li in ul.k(panels) and position it to top right
        //of ul - this way,  when he sum width of all the panels occasionally
        //adds to greater than 100 percent of the ul as they animate..
        //the last li never breaks to the next line
        $.coolSelector = function () {


            var s = 200
            d = $.dK('container').A(
                $.dK('panels').A($.sp('1'), $.sp('2'), $.sp('3'), $.sp('4'), $.sp('5')),
                $.dK('panels').A($.sp('A'), $.sp('B'), $.sp('C'), $.sp('D'), $.sp('E'))
            ).A()
            $('span').css({width: '100px', fontSize: '40px'})
            if ($('div.panels').length) {
                $('div.panels span:last-child').K('last')
                $('div.panels span').hv(
                    function () {
                        $(this).st().an({width: '110px', fontSize: '50px'}, s)
                            .sib('span').st().an({width: '90px', fontSize: '30px'})
                    },
                    function () {
                        $(this).st().an({width: '90px', fontSize: '30px'})
                    })
            }

        }

        $.coolSelector()

    }
    NOTAN = function () {
        $.x()
        var s = 1000,
            m = function (n) {
                return {marginLeft: n}
            },
            n = 0
        d = $.dI('test').A(y = $.c('x', 40).K('box'))
        d2 = $.dI('debug')
        $('#test').$(function () {
            notAnim($('.box')).an({marginLeft: -10}, s,
                function () {
                    $('#debug').A($.p('start..' + n++))
                })
                .an({marginLeft: 10}, s).an({marginLeft: -10}, s)
                .an({marginLeft: 10}, s).an({marginLeft: -10}, s)
                .an({marginLeft: -10}, s).an({marginLeft: 0}, s,
                function () {
                    $('#debug').A($.p('fin'))
                })
        })
    }

    JQANIMZ = function () {
        $.x('s', 'jqanim')


        /*
         setBackgroundImage = q.bi = function(url){//set background image
         var toUrl =function(url){
         return 'url("'+ src(url) +'")'}
         q.backgroundImage(toUrl(url))
         return q}

         bp=q.positionBackgroundImage=function(x,y){
         var g=G(arguments),x=g[0],y=g[1]
         x=N(x)?x:0
         y=N(y)?y:0
         q.css({backgroundPos:x+'px '+y+'px'})
         return q}
         fr=q.stFr=function(n,w){
         if(O(n)){q.bp(n.n,n.w)}
         else{q.bp(n*w)}
         return q}

         anf= q.anFr=function(n,w){var c=0; n=n||10; w=w||20
         $.ev(function(){ q.sFr(c,w);  c=(c+1)%n })}

         a= $.dA().bgImg('chicks').anf()

         */
    }
    LETTERING = function () {
        z()

        LETTERINGPLUG = function () {
            function injector(t, splitter, klass, after) {
                var text = t.text()
                    , a = text.split(splitter)
                    , inject = '';
                if (a.length) {
                    $(a).each(function (i, item) {
                        inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;
                    });
                    t.attr('aria-label', text)
                        .empty()
                        .append(inject)

                }
            }

            var methods = {
                init: function () {

                    return this.each(function () {
                        injector($(this), '', 'char', '');
                    });

                },

                words: function () {

                    return this.each(function () {
                        injector($(this), ' ', 'word', ' ');
                    });

                },

                lines: function () {

                    return this.each(function () {
                        var r = "eefec303079ad17405c889e092e105b0";
                        // Because it's hard to split a <br/> tag consistently across browsers,
                        // (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
                        // (of the word "split").  If you're trying to use this plugin on that
                        // md5 hash string, it will fail because you're being ridiculous.
                        injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
                    });

                }
            };
            $.fn.lettering = function (method) {
                // Method calling logic
                if (method && methods[method]) {
                    return methods[method].apply(this, [].slice.call(arguments, 1));
                } else if (method === 'letters' || !method) {
                    return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
                }
                $.error('Method ' + method + ' does not exist on jQuery.lettering');
                return this;
            };
        };
        LETTERINGPLUG()

        span = $.span('hello').A()
        span.lettering() // wrap <span class="charx"/ > around each character within header
        $spans = span.find('span')
        $('.dropped span').css({transition: 'all 0.3s ease-in'})


    }
    FALLING = function () {
        z()
        //this goes in css

        $header2 = $.span('hello').A()

        $header2.lettering() // wrap <span class="charx"/ > around each character within header

        $spans = $header2.find('span')

        delay = 0

        $header2.on('click', function () {


            $spans.each(function () {
                $(this).css({transitionDelay: delay + 's'}) // apply sequential trans delay to each character

                delay += 0.1
            })


            $header2.K('dropped') // Add "dropped" class to header to apply transition

            setTimeout(function () { // reset header code

                $spans.each(
                    function () {

                        $(this).css({
                            transitionDelay: '0ms'
                        })

                    })


                // set transition delay to 0 so when 'dropped' class is removed,
                // letter appears instantly

                $header2.removeClass('dropped') // remove class at the "end" to reset header.

                delay = 0

            }, 1800) // 1800 is just rough estimate of time transition will finish, not the best way

        })

    }
}
function jqAlpha() {

    BORDERS1 = function () {

        change = function () {

            $.img('me').WH(100).A().C('g').bs('-')  //bs??

                .j({bt: 40}, 1000)

                .j({bb: 40}, 1000)
                .j({bl: 40}, 1000)
                .j({br: 40}, 1000)
                .j({gt: 40}, 1000)
                .j({gb: 40}, 1000)
                .j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
                .j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
                .j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
                .j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
                .j({bt: 0}, 1000)
                .j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
        };


        m$$(function () {
            z();
            _.t(10, change)
        });

        _.t(10, change)
    }
    BORDERS = function () {
        z();


        change = function () {
            var img

            img = $.qim('me', 100).A()

            img.bC('g').bS('dashed') //.bW(20)

                .J({"border-top-width": 10}, 1000)
                .J({"border-bottom-width": 10}, 1000)
                .J({"border-left-width": 10}, 1000)
                .J({"border-right-width": 10}, 1000)
                .J({"padding-top": 10}, 1000)
                .J({"padding-bottom": 10}, 1000)
                .J({"padding-left": 10}, 1000)
                .J({"padding-right": 10}, 1000)
                .J({"margin-top": 10}, 1000)
                .J({"margin-bottom": 10}, 1000)
                .J({"margin-left": 10}, 1000)
                .J({"margin-right": 10}, 1000)
                .J({"margin-top": 0}, 1000)
                .J({"margin-bottom": 0}, 1000)
                .J({"margin-left": 0}, 1000)
                .J({"margin-right": 0}, 1000)
                .J({"padding-top": 0}, 1000)
                .J({"padding-bottom": 0}, 1000)
                .J({"padding-left": 0}, 1000)
                .J({"padding-right": 0}, 1000)
                .J({"border-top-width": 0}, 1000)
                .J({"border-bottom-width": 0}, 1000)
                .J({"border-left-width": 0}, 1000)
                .J({"border-right-width": 0}, 1000)
        }
        $.$$(function () {
            z();
            _.t(10, change)
        })
        _.t(10, change)
    }
    COOLSEL = function () {
        $.x()
        // rather than worry about synchronization between each panel
        //we will take last li in ul.k(panels) and position it to top right
        //of ul - this way,  when he sum width of all the panels occasionally
        //adds to greater than 100 percent of the ul as they animate..
        //the last li never breaks to the next line
        var s = 200;
        d = $.dK('container').A(
            $.dK('panels').A($.sp('1'),
                $.sp('2'), $.sp('3'), $.sp('4'),
                $.sp('5')),
            $.dK('panels').A($.sp('A'),
                $.sp('B'), $.sp('C'), $.sp('D'), $.sp('E'))
        );
        $('span').css({width: '100px', fontSize: '40px'});
        if ($('div.panels').length) {
            $('div.panels span:last-child').K('last');
            $('div.panels span').hover(
                function () {
                    $(this).stop().animate({width: '110px', fontSize: '50px'}, s)
                        .siblings('span').stop().animate({width: '90px', fontSize: '30px'})
                },
                function () {
                    $(this).stop().animate({width: '90px', fontSize: '30px'})
                })
        }
    }
    HOVERBOX = function () {
        z();
        d = $.d('o', 500, 500, '+').id('test')
        y = $.c('p', 400).K('box').hd();
        d.A(y);
        $('#test').hover(function () {
            $('.box').stop().fadeTo(200, 1)
        }, function () {
            $('.box').stop().fadeTo(200, 0)
        })
    }
    LETTERING = function () {
        $.x()

        sp = $.sp('hello').A()
        sp.lettering(); // wrap <span class="charx"/ > around each character within header
        $spans = sp.fi('span')
        $('.dropped span')
            .css({

                transition: 'all 0.3s ease-in'
            })


    }
    FALLING = function () {
        z();
        //this goes in css
        $header2 = $.sp('hello').A();
        $header2.lettering(); // wrap <span class="charx"/ > around each character within header
        $spans = $header2.fi('span');
        delay = 0;
        $header2.$(function () {
            $spans.e(function () {
                $(this).css({transitionDelay: delay + 's'}); // apply sequential trans delay to each character
                delay += 0.1
            });
            $header2.K('dropped'); // Add "dropped" class to header to apply transition
            setTimeout(function () { // reset header code
                $spans.e(function () {
                    $(this).css({transitionDelay: '0ms'})
                });
                // set transition delay to 0 so when 'dropped' class is removed,
                // letter appears instantly
                $header2.removeClass('dropped'); // remove class at the "end" to reset header.
                delay = 0
            }, 1800); // 1800 is just rough estimate of time transition will finish, not the best way
        })

    }
    TXPLUG = function () {
        z();
        d = $.d('r', 100).A('abc');
        e = $.d(100).col('r').A('abc');
        f = $.d('r', 100).col('b').A('abc');
        g = $.d('b', 500, 500)
    }
    FRIDGEMAG = function () {
        z();
        word = $.word;
        w = word('hello', 'b', 'g');
        word('sicko', 'g', 'b');
        word('why, i oughta..', 'p', 'x');
        word('it was raining..', 'j', 'k');
        word('who ya gonna call?', 'h', 'i');
        word('dag nabit!', 'f', 'g');
        word('i like', 'd', 'e');
        word('tomorrow', 'a', 'c');
        word('me', 'r', 'b')
    }
    TXCAN = function () {
        z();
        c = $.c('o', 500, 500);
        //c.save().lineWidth(30).setStrokeColor('r').lineTo([[100,100],[150,110]]).stroke().restore().lineTo([[200,100],[200,600]]).stroke()
        // c.roundRect(100,50,100,100,50).stroke()//.fill()
        //c.line(10,10,50,500).stroke()
        c.line([
            [[100, 100], [200, 200], [140, 900]]
            // ,  [[150,150],[250,250], [20,300]]
        ]).stroke();
        //c.line([100,100],[200,200],[150,150],[250,250] ).stroke()
        //c.line( [350,50],[25,25],  [450,10],[20,550]).stroke()
    }
    FLASH = function () {
        z();
        timeline = $.dA('+').WH('auto');
        timeline.A($.c('b', 500, 500), $.br());
        _.t(24, function (x) {
            timeline.A(
                $.d('r', 100, 100).css({display: 'inline-block'}).H((x * 10) + 100)
            )
        })
    }

}

function werks() {
    LAYOUTHELP = function () {


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

    HLT = function () {
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
    HIDE = function () {
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
    HGHLT = function () {
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
    UICT = function () {
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

    FOC = function () {
        $.x()

        $.sp('Some Span').id("my-span").at('tabindex', "0")
        $.sp('Some Span1').id("my-span1")//.at('tabindex',"0")
        $.sp('Some Span2').id("my-span2").at('tabindex', "0")
        document.getElementById('my-span').focus()
        document.getElementById('my-span2').focus()
    }

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
    }


}


ICONN=function(){$.x('y','icon')
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
VLAYSHAD=function(){

    k =$('.k')
    k.k('ui-widget-overlay')
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
OVERLY=function(){$.h({
    body: {bor:0, mar:0},
    '_ui-widget-overlay': {bg: 'repeat-x scroll 50% 50% #AAA',  opacity: '0.3'   },
    '_ui-widget-overlay': {h:'100%',  l:0,ps:'a', t:0, w:'100%' }
})
    overlay = $.dK("ui-overlay").A(
        $.dK("ui-widget-overlay")
    ).hide().A()
    overlay.fadeIn()
    $(window).resize(function () {
        overlay.width($(document).width())
        overlay.height($(document).height())
        overlay.hide().fadeIn()
    })






}/*
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
CORRAD=function(){$.x('o')

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
INTX=function(){$.x()
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
POSI=function(){$.h({
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
IXSTAT=function(){$.x()

    k= $.d('r', 500, 200)
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
