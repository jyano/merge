function bone(){works=function(){

    BBVIEW=function(){$.x('b','bbview')

        $.dI('d1',
            'r', 500, 500)



        LstV = bb.V.e({
            el: '#d1',
            r: function(){
                this.A(
                    $.ul([
                        'hello']))},
            i: function(){ this.r() }})

        v = LstV.o()
    }
    BBVIEW=function(){$.x('b','bbview')
        v=$V({
            q: d=$.dI('d1','r', 500, 500),
            r: function(){this.A($.ul(['hello']))},
            i: function(){this.r()}
        })()
    }
    BBVIEW=function(){$.x('b','bbview')


        $.dI('d1','r', 500,500).V({
            r: function(){this.A($.ul(['hello']))},
            i: function(){this.r()}
        })()

    }
    PER=function(){$.x('n')
        Per=bb.M.e({

            d: {n:'j', a:20, o:'p'}

        })
        p= new Per
        PerV = $V({t:'li', _:'some-per', k:'per',
            r: function(){
                this.A('n').A()
            },
            //  this.A(this.g('n')).A() //  this.A(this.model.get('n').A()
            i: function(){
                $l(this.model);
                this.r()
            }
        })
        pV =  PerV({ m:p  })

    }
    PER=function(){$.x('n')

        p = $M({ d: {n:'j',a:20,o:'p'}   })()

        PerV = $V({t:'li', _:'some-per', k:'per',
            r: function(){  this.A('n').A() },
            i: function(){ $l(this.model); this.r() }
        })

        pV = p.V(PerV) //PerV({ m: p })
    }
    PER=function(){$.x('n')
        m = $M({d:{n:'j',a:20,o:'p'}})()
        m.V($V({
            t:'li', _:'some-per', k:'per',
            r: function(){  this.A('n').A() },
            i: function(){this.r()}
        }))
        $.in(function(){m.l()}, '*')
    }
    TP=function(){$.x().A(
        a= _.tp("<div>hello:<%=n%></div>")({n:'moe'}),
        b= _.tp('<b><%-tag%></b>',{tag:'<script>'}), // <%- vs <%= ?
        c= _.tp(
            '<%_.e(peep,function(name){%>'+
            '<li>'+'<%=name%>'+'</li>'+
            '<%})%>'
            ,{peep:['moe','curly','larry']})
    )

    }
    WOB=function(){$.x('x', 'bb view people')
        //without backbone!
        ul = $.ul().id('peep')
        peep = [{n:'a',a:11}, {n:'b',a:46}, {n:'c',a:13}]
        vw={r:function(){
            $('#peep').E()
            _.e(peep, function(p){
                $('#peep').A('<li>'+ p.n + '(' + p.a + ')</li>')
            })}}
        vw.r()
        $.in(function(){peep.pop(); vw.r()},'*')
    }
    SIMP=function(){$.x('r').h1('tut')
        p = $M()({n:'j'})
        $.h3('p: '+p.g('n'))
    }
    BBVP1=function(){$.x('x', 'bb view people')

        peep = [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]
        vw= $V({t:'ul',
            i:function(){this.$el.C($r())},
            r:function(){var el=this.$el.E()
                _.e(this.collection, function(p){$('#peep')
                    el.A($.li().A(p.n + '(' + p.a + ')'))})
                return this}

        })({cl: peep})


        $.A(vw.r().el)
        $.in(function(){peep.pop(); vw.r()},'*')
    }
    BBVP=function(){$.x('x', 'bb view people')

        peep = [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]

        vw= $.ulV({
            i:function(){
                this.q.C($r())

            },
            r:function(){var el=this.q.E()
                this.cl(function(p){
                    el.A($.li().A(p.n+'('+p.a+')'))})
                return this}
        })({cl: peep})
        $.A(vw.r().q)
        $.in(function(){peep.pop(); vw.r()},'*')
    }
    TMP=function(){$.x('r'); $V({
        t:'li', x:'some-per', k:'per',
        tp: tp=_.tp('<%= n %> (<%= a %>) - <%= o %>'),
        r: function(){this.A().A(this.tp(this.model.toJSON()))},
        i: function(){$l(this.model); this.r()}
    })({m:Per=$M({d:{n:'j',a:20,o:'p'}})()})}


    BBSAMP1=function(){$.x('b','bbsamp','+')
        d=$.d()
        Rec = bb.M.e()

        RecV = bb.V.e({t:'div', k:'rec',

            events:{'click': 'move'},
            move:function(){this.$el.css('left', this.$el.position().left +10)},
            rr:function(){return this.sDims().sPos().sCol()},
            sDims:function(){this.$el.WH(this.model.get('w'), this.model.get('h'))
                return this},
            sPos:function(){this.$el.ab().LR(
                this.model.get('pos').x, this.model.get('pos').y)
                return this
            },

            sCol:function(){this.$el.C(this.model.get('C'))
                return this}
        })


        _.e([
            Rec.o({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
            Rec.o({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
            Rec.o({w:100, h:200, pos:{x: 0, y:100},C:'y'})
        ], function(md){


            var r=  RecV.o({model:md})

            r.rr().$el.a2(d)
        })



    }


    BBSAMP=function(){$.x('b','bbsamp','+')


        d=$.d()

        Rec = $M()

        RecV = $V({

            k:'rec',

            e: {'click': 'move'},

            move:function(){
                this.q.css('left',
                    this.q.position().left +10)
            },

            r:function(){return this.sDims().sPos().sCol()},

            sDims:function(){
                this.q.WH(this.model.g('w'),
                    this.model.g('h'))
                return this
            },

            sPos:function(){
                this.q.ab().LR(
                    this.model.g('pos').x,
                    this.model.g('pos').y  )
                return this
            },


            sCol:function(){this.q.C(this.model.g('C'))
                return this}
        })

        _.e([
            Rec({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
            Rec({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
            Rec({w:100, h:200, pos:{x: 0, y:100},C:'y'})
        ], function(md){ RecV({model:md}).rr().$el.a2(d)  })

    }







    BBVT=function(){$.x('x', 'bb view and template');
        md= new bb.M({d:[{t:'a.com', h:'a.com'}, {t:'b.com', h:'b.com'}, {t:'c.com', h:'c.com'}]})


        $.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')

        $.dI('list-tp', [ $.la() ]).C('o')


        Vw = bb.V.e({
            el:'#ct',
            i: function(op){$l(op.blOp); this.tp =$('#list-tp').children()},
            rr:function(){var da, tp; $l('rr: '+ this.model.get('d')[0].h );//$.c('b').ab(300,300)
                da=this.model.get('d')
                tp=this.tp, ul= this.$el.find('ul')
                _.e(da, function(da){ul.A(tp.clone()
                    .find('a').hr('href', da.h).T(da.t).end())}) },
            ev: {'click button':'rr'}
        })
        vw = new Vw({blOp:'empty!', model:md})
        return vw

    }
    BBVT=function(){$.x('x', 'bb view and template');



        $.dI('ct', [
                $.bt('Load'),
                $.ul().id('list')
            ]
        ).C('y')

        $.dI('list-tp', [ $.la() ]).C('o')


        v=$V({

            q: '#ct',

            events: {'click button': 'r'},

            r: function(){var da, tp,ul
                $l('RENDER')
                /*
                 $l('rr: '+ this.model.get('d')[0].h )
                 //$.c('b').ab(300,300)
                 da=this.model.get('d')
                 tp=this.tp
                 ul= this.$el.find('ul')
                 _.e(da, function(da){ul.A(tp.clone()
                 .find('a').hr('href', da.h)
                 .T(da.t).end())})
                 */
            },
            i: function(op){
                $l(op.blOp)
                this.tp = $('#list-tp').children()
            }
        })({

            blOp: 'empty!',

            m: m=$M()({
                d:[
                    {t:'a.com', h:'a.com'},
                    {t:'b.com', h:'b.com'},
                    {t:'c.com', h:'c.com'}
                ]
            })

        })

    }


};works()
    BACKSET=function() {$.x()

        Sb= Sidebar = bb.m.e({

            ask: function() {this.s({c: prompt("color?")})}})
        sb = Sb.o()
        sb.on('change:c', function(md, c) {$('body').C(c)})
        sb.set({c: 'b'})
        sb.ask()
        //right from ko site
        d = $.dA(400)

        Sid = bb.M({
            promptColor: function () {
                this.s({
                    co: pr('color:')
                })
            }
        })

        sb = Sid()
        sb.on('change:co', function (md, c) {d.C($l(c))})
        sb.C('w')
        sb.ask()
        Per=bb.M.e({i:function(){
            alert("Welcome")}})

        p=Per({})
        p.s({n:"mac",a:67})
        $.dA(300).id('sb')

        Sidebar=bb.M.e({
            fn:function(){
                return this.s({
                    c:prompt("c?")})}
        })

        Sidebar()
            .oC('c', function(m,c){
                $('#sb').C(c)
            }).s({c:'w'}).fn()

    }

    BBSAMP1=function(){$.x('b','bbsamp','+')
        d=$.d()
        Rec = bb.M.e()

        RecV = bb.V.e({
            tagName:'div', className:'rec',
            events:{'click': 'move'},
            move:function(){this.$el.css('left', this.$el.position().left +10)},
            rr:function(){return this.sDims().sPos().sCol()},
            sDims:function(){
                this.$el.WH(this.model.get('w'), this.model.get('h'))
                return this
            },
            sPos:function(){
                this.$el.ab()
                    .LR(
                    this.model.get('pos').x, this.model.get('pos').y)
                return this
            },
            sCol:function(){
                this.$el.C(this.model.get('C'))
                return this}
        })

        _.e([
            Rec.o({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
            Rec.o({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
            Rec.o({w:100, h:200, pos:{x: 0, y:100},C:'y'})
        ], function(md){

            var r=  RecV.o({
                model:md
            })

            r.rr().$el.a2(d)
        })
    }
    BBEXT=function(){
        // https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
    }}
function jquery(){
    QON=function(){$.x('o', 'jquery .on')

        /*

         As of jq 1.7, no longer need to use  .bind()?, .delegate(), and .live().
         .on(evString [,sel][,d], hl)|(evObject [,sel][,d])
         evString 1+ sp-sep evs w opt nsp ('click', 'keydown.myPlugin')
         evObject {k: evString, v:ev hl fn}
         sel(S) -  fl wch sel ch trg ev
         d(*) - d 2b passd 2 the hl in ev.data whn ev trgd
         hl: fn(evOb [, anythng extrPam] [,...])



         ~~ ev ns & nsps
         any ev ns can be used for the evs arg .
         jq will pass through the bw's standard JavaScript ev yps,
         calling the hl fn when the bw gens evs due to user actions such as click.
         also, the .trigger() met can trgr bth
         standard bw ev  ns & cust ev ns
         to call atched hls.

         ev ns should only contain alphanumerics | '_' | ':'


         An ev n can be qualed by ev nspaces that simp  rming or trging the ev
         ex: "click.myPlugin.simple" dfs bth
         the myPlugin & simp nspaces  4 this partic  $ev

         A $ev   hndlr atched via that S could be rmved w
         .off("click.myPlugin") |  .off("click.simple")
         w/o disturing othr $hndlrs attched to the el

         nspaces are sim  to CSS ks (!hier - only 1 n must match )

         In 2nd f of .on(), the evs arg is a pob.

         The keys are Ss in the same f  as the evs arg
         w space-septed ev ty ns &  opt nspaces.

         bth 'behave' same, EXCEPT, here:
         The va  for e  key is a fn (or false)
         that is
         used as the hdlr
         instd of   final arg  to the met


         ~~~~~~Drct and deged evs
         maj  of bw evs bub/pgate UPWARDS/OUTWARDS, all the way to bd and  doc

         If sel omitd or nul,the ev  hlr is refd to as drct or drctly-bound.

         The hlr is called ev  time an ev  occurs on the sel  els,
         whether it occurs
         drctly on the el  or
         bubs from a ch (inner) el


         ~DELEGATED (sel provided) - When a sel  is provided, the ev  hlr is refd to as delegated.
         Degev adv:  can hndle evs from ch added ltr, also, lowr overhd

         The hlr is not called when the ev occurs directly on the bound el,
         but only for chs (inner els)  that match the sel.

         jq bus the ev  from the ev  tg up to the el where the hlr is atched(  in  to outermost el)  and  runs the hlr for any els along that path matching the sels.

         Ev hlrs are bound only to the cur sel d els; they must exist at the time your code makes the call to .on().
         (To know els are prsnt and can be seld, place scrps aft the els  | $(fn)) Alt: use degd evs to atch ev  hlrs.

         By pikng an el  that is guarntd to be prsnt at the time the degd ev  hlr is atchd,
         you can use degd evs to avoid  need to frq atch & rm ev hlrs   .
         This el  could be the ct el  of a vw in a MVC design, for ex,
         or doc  if the ev  hlr wants to monit  all bubevs in the doc
         -The doc el  is avail  in   head of   doc  bf loadg any oth HTML,
         (so its safe to  atch evs there wo waitg 4 the doc 2b rdy)



         ex:  consid  a tb w 1000 rows in its tbody, THIS atchs 1000 hlrs:*/

        $('#dataTable tbody tr').$(
            function() {$l( $( this ).text())})


        /*
         BUT: ev-deleg approach
         ev hl atches to the tbody,
         ev only bubups 1lev ($ed tr -> tbody):

         */$('#dataTable tbody').$('tr',
            function() {$l( $( this ).text())})/*




         The ev hl and its environment
         The hl arg  is a fn (or false)
         and is required unless you pass an ob for the evs argument.
         You can provide an anonymous hl fn at the point of the .on() call (ex above)
         OR declare a named fn and pass its name:
         */


        $.bt().$(notify )

        function notify() {alert( "clicked" )}


        /*  ~ev ob, bubg
         When the bw trgs   ev or oth js calls jq's .trigger() met,
         jq passes the hl an evob it can use (to analyze & change)

         evob: normalized subset of d provided by the bw; - the bw's unmodified native ev ob is available in ev.originaEvent.
         ev.type:  ev n ('resize)
         ev.target:  deepest (innermost) el where the ev occurred
         By default:
         most evs bubup from the orig  evtg to the docel
         At each el along the way,
         jq calls any matching ev hls that have been atched.


         ~stopProp
         A hl can pvnt the ev from bubg further up the  tree
         (and thus pvt hls on those els from runng)
         by calling ev.stopPropagation().
         Any other hls atched on the cur  el will run however.
         To pvt that, call ev.stopImmediatePropagation().
         (ev hls bound to an el are called in the same order that they were bound.)

         Returning false from an ev hl will automatically
         call ev.stopPropagation() and ev.pD().
         A false val can also be passed for the hl as a shorthand for fn(){ return false; }.
         So, $( "a.disabled" ).on( "click", false );
         atches an ev hl to all links with class "disabled"
         that pvts them from being followed when they are clicked and also stops the ev from bubg.

         ~pD
         Similarly, a hl can call ev.pD() to canc  any bw df acts  for this ev;
         ex: wont fol lnks -Not all bw evs have default actions,and not all default actions can be canceled.


         When jq calls a hl, 'this' is a ref  to the el where the ev is being delivered;
         for directly bd evs:  el where the ev was atched
         for degevs: this is an el matching sel.
         (Note that this may not be eq  to evtg if the ev has bubd from a ch el.)

         ~Passg d to the hl

         If a d g is providd to .on() and !(null|U),
         it is passd 2 the hl in the ev.data pop ea time an ev is trgd
         The d  arg  can be any type ,
         but if a S is used the sel  must either
         be provd  or  explicitly passed as null
         (so that the d  is not mistaken 4 a sel )

         Best:  use a pob so that mult  vals can be passd as pops



         ~eh
         -As of jq 1.4,the same ev hl can be bd to an el mult times.
         This is especially useful when the ev.data
         feature is being used, or when other uniq d is in a closure around the ev hl fn
         ex: */fn=function(ev) {alert(ev.data.n)}; $("button").$({n:'j'},fn).$({n:'r'},fn) /*: will gen two dif alerts when the button is clicked.






         ~trigger, triggerHandler
         As an alternative
         or in addition to the data arg  provided to the .on() met,
         you can also
         pass d  to an evhl using a 2nd arg
         to .trigger() or .triggerHandler().
         Data provided this way is passed to the evhl as further pams after the Ev ob
         If an A was passed to the g.s of .trigger() | .triggerHandler(),
         ea el  in the A will be presented to the evhl as an individual pam



         ~~~ Ev performance

         In most cases,
         an ev  such as $ occurs infreq and performance is not a signif  concern.
         However,
         high freq  evs such as
         mousemove or scroll
         can fire dozens of times per second,

         and in those cases
         it becomes  important to use evs judiciously.
         Performance can be increased by:
         -reducing the amount of work done in the hl itself,
         -caching information needed by the hl rather than recalculating it,
         -rate-limiting the number of actual page updates using $.in


         Attaching many deged evhl near the top of the doc  tree can degrade performance.
         Ea time the ev  occurs,
         jq must compare all sels of all atched evs of that ty
         to ev  el  in the pth from the evtg 2 top of  doc
         For best performance, atch delegated evs at a doc loc as close as poss  to the tg els.
         Avoid excessive use of doc  or doc.bd for degd evs on large docs

         jq can process simp  sel   of the f  tag#id.class very quickly
         when
         they are used to fl degevs.
         So, "#myForm", "a.external", and "button" are all fast sels.
         Degevs   that use more complex sels
         partic hier  ones, can be sev  times slower--but they are still mostly fast enuf
         Hier  sels can oft  be avoided simp  by atchg hl 2 a more approp pt in doc


         ex: instead of
         $( "body" ).$("#commentForm .addNew", addComment )
         use
         $( "#commentForm" ).$( ".addNew", addComment ).




         jq's ev system requires that a DOM el allow atching
         data via a property on the el, so that evs can be tracked and delivered.
         The ob, embed, and applet els cannot atch data,
         and therefore cannot have jq evs bound to them.

         The focus and blur evs are specified by the W3C to !bub
         but jq defines cross-bw focusin and focusout evss that do bub .
         When focus and blur are used to atch delegated ev hls,
         jq maps the names and delivers them as focusin and focusout respectiv .
         For consistency and clarity, use the bubg ev yp names.

         In all bws, the load, scroll, and er evs (on an iEl) do !bub .
         In Internet Explorer 8 and lower, the paste and reset evs do !bub .
         Such evs are not suprtd for use with deg,
         but they can be used when the ev hl is dircly atched
         to the el geng the ev.

         The error ev on the wd ob uses nonstandard arguments and return val conventions,
         so it is not supported by jq.
         Instead, assign a hl fn directly to the wd.onerror property.

         The hl list for an el is set when the ev is 1st delivd.
         Adding or rmg ev hls on the current el
         won't take effect until the next time the ev is handled.
         To pvt any further ev hls from execg on an el wthn an ev hl,
         call ev.stopImmediatePropagation().

         This behavior goes against the W3C evs spec
         To better understand this case,
         consider the following code:
         */$test=$("#test").$(hl1).$(hl2)

        function hl1() {$l( "hl1" );$test.off( "click", hl2 )}
        function hl2() {$l( "hl2" )}
// In the code above,
// hl2 will be executed anyway the first time even if it's rmd using .off().
// but the hl will not be executed the following times the click ev is triggered.






        $( "p").$(function() {alert( $( this ).text())})// ex: Display a p's t in an al when it is $d:
        $( "p" ).$({foo: "bar"}, hl); function hl(ev){alert( ev.data.foo )}//ex: Pass data to the ev hl, which is specified here by name:
        $( "form" ).on( "submit", false ) //ex: Canc a f sb act  and pvt the ev from bubg up by returning false:
        $( "form" ).on( "submit", function( ev ) {ev.pD()})  //ex: Canc only the df act  by using .pD()
        $( "form" ).on( "submit", function( ev ) {ev.stopPropagation()})//ex: Stop submit evs from bubg without pvting form submit, using .stopPropagation().
        $( "div" ).$(function( ev, per) {alert("Hi, "+per.n)}) // ex: Pass data to the ev hl using the second argument to .trigger()
        $( "div" ).trigger( "click",{n: "Jim" })
        $( "div" ).$( function( ev, sal, n) {alert(sal+', '+n)})// ex: Use the the second argument of .trigger() to pass an array of data to the ev hl
        $( "div" ).trigger( "click", [ "Hi", "Jim" ] )



        //<style>  p { color: red;} span {color: blue; } </style>



        $.p('Has an atched custom ev.')
        $.bt('Trigger custom ev')
        $.sp().at('display','none')


        $( "p" ).on( "myCustomEvent", function( ev, myName ) {


            $( this ).text( myName + ", hi there!" )

            $( "span" ) .stop() .css( "opacity", 1 )
                .text( "myName = " + myName )
                .fadeIn( 30 ) .fadeOut( 1000 )

        })


        $( "button" ).click(function () {

            $( "p" ).trigger( "myCustomEvent", [ "John" ] )

        })




// ex: Attach multiple ev hls simultaneously using a pob.

        // .test { color: #000;padding: .5em; border: 1px solid #444; } .active { color: #900; } .inside { background-color: aqua; }




        $.dK('test')
        $( "div.test" ).on({click: function() {
            $( this ).toggleClass( "active" )},
            mouseenter: function() {
                $( this ).K( "inside" )},
            mouseleave: function() {
                $( this ).removeClass( "inside" )}})


        // ex: $ any p to add another after it. Note that .on() allows a $ev on any p (even new ones)
        //--since the ev is handled by the ever-present bd-el  aft it bubs to there.
        // p { background: yellow; font-weight: bold;cursor: pointer; padding: 5px; } p.over { background: #ccc; } span { color: red;}

        $.p('Click me!')
        $.sp()
        n=0
        $.bd().$('p', function() {

            $( this ).after(
                $.p('Another p! ' + (++n))
            )
        })

        //alert each p's tx on $:
        $.bd().$('p', function(){ alert( $( this ).text() ) })

        //Cancel a link's default act
        $.bd().$('a', function(ev){ev.pD()} )



    }}