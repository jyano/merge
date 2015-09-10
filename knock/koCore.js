elz();corre(); bindins();   formBind(); aaps();  laterr();forEaApps();formApps()
function elz() {
    $.scrp = function (i, t) {

        var scr = $("<script type='text/html'>")
        scr.id(i)
        if (t) {
            scr.A(t)
        }
        scr.A()
        return scr

        function old() {
            $.scrp = script = scrp = function (i) {
                return $("<script type='text/html'>").id(i)

            }
        }
    }
    EVob = {$: 'click', $$: 'dblclick', v: 'mouseover'}
    el = function (ob, op) {
        if (A(ob)) {
            _.e(ob, function (ob) {
                el(ob)
            })
            return
        }
        return el.d(ob, op)
    }
    el.d = function (ob) {
        var d, g = G(arguments)
        d = $('<div>')

        if (ob.b) {
            d.b(ob.b)
        }

        if (ob.ch) {
            ob.ch = A(ob.ch) ? ob.ch : [ob.ch]
            _.e(ob.ch, function (ch) {
                d.A(ch)
            })
        }

        if (ob.C) {
            d.C(ob.C)
        }
        if (ob.c) {
            d.c(ob.c)
        }
        if (ob.w) {
            d.W(ob.w)
        }
        if (ob.h) {
            d.H(ob.h)
        }
        if (!g.n) {
            d.A()
        }

        //ko
        if (ob.$vs) {
            d.bVs(ob.$vs)
        }
        if (ob.$h) {
            d.bH(ob.$h)
        }

        $l('el.d..')
        return d
    }
    els = function () {

        G(arguments).e(function (g) {
            el(g)
        })
    }
    _$ = function (ob) {
        ob.C = ob.C || $r()
        $.x(ob.C, ob.t)
        if (ob.vm) {
            OK(ob.vm)
        }
        if (ob.el) {

            els(ob.el)
        }
        if (ob.A) {

            _.e(A(ob.A) ? ob.A : [ob.A], function (q) {
                q.A()
            })
        }
        if (ob._) {

            $.in(ob._)
        }
    }


}
function corre() {KOob= {

    $:'click', ev:'event',

    sm:'submit',  sb:'submit',

    en:'enable', d:'disable',

    v:'value',  ti:'textInput',

    f:'hasFocus',

    c:'checked', ch:'checked',
    o:'options', so:'selectedOptions',
    //


    t:'text', h:'html', s:'css', y:'style',

    a:'attr', e:'foreach', i:'if', n:'ifnot', w:'with',

    V:'valueUpdate', vs:'visible', u:'uniqueName', tp:'template', cm:'component'
}
    sKo(); koBind();obb()obbA();okie()
    function sKo() {
        ko.u = ko.ut = ko.utils
        ko.o = ko.observable
        ko.oa = ko.oA = ko.observableArray
        ko.c = ko.computed
        ko.pc = ko.pureComputed
        ko.do = ko.dependentObservable
        ko.ab = ko.applyBindings
        ko.bD = ko.applyBindingsToDescendants
        ko.ve = ko.vE = ko.virtualElements
        ko.B = ko.ve.ab = ko.vE.AB = ko.vE.allowedBindings
        ko.ut.af = ko.ut.arrayFilter
        ko.rTp = ko.renderTemplate
        ko.uw = ko.unwrap
        ko.ut.uo = ko.ut.unwrapObservable
        ko.bh = ko.BH = ko.bindingHandlers
        ko.cm = ko.components
        ko.cm.rg = ko.cm.register
        ko.cm.iR = ko.cm.isRegistered
    }
    function koBind() {
        $.fn.dB = function (dB) {
            return this.at({'data-bind': dB})
        }
        $.fn.bindKO = b = knockoutBind = function (a, b) {
            var o = []
            if (O(a)) {
                _.each(a, function (v, k) {

                    o.push(oO('b', k) + ':' + v)

                })
                this.attr({'data-bind': o.join()})
            }


            else {

                this.attr({

                    b: oO('b', a) + ':' + b

                })
            }


            return this
        }
        $.fn.b = $.fn.ko = function (a, b) {

            var o = [], str

            if (O(a)) {
                _.e(a, function (v, k) {
                    if (KOob[k]) {
                        k = KOob[k]
                    }
                    ;
                    o.push(k + ':' + v)
                })
                str = o.join()
            }
            else if (a.indexOf(':') == -1) {
                str = KOob[a] ? KOob[a] : a + ':' + b || '$'
            }
            else {
                str = a
            }
            this.at({'data-bind': str})
            return this
            function old() {

                $.fn.b = $.fn.ko = function (a, b) {


                    var o = []

                    if (O(a)) {
                        _.e(a, function (v, k) {
                            if (KOob[k]) {
                                k = KOob[k]
                            }
                            o.push(k + ':' + v)
                        })
                        this.at({
                            'data-bind': $l(o.join())
                        })
                    }

                    else {

                        if (KOob[a]) {
                            a = KOob[a]
                        }
                        // str= oO('b', a)
                        str = a + ':' + b;  //$l(': '+ str  )


                        this.at({'data-bind': str})
                    }
                    return this

                }
            }
        }
    }
    function obb() {

        $o = function (a) {
            return ko.o(a)
        }
        $o = ko.o = function (a) {
            var obb = ko.observable(a)
            return obb
        }
        kO = function () {
            var g = G(arguments)
            return ko.o.apply(ko, g)
        }
    }
    function obbA() {
        kA = function () {
            var g = G(arguments)
            return ko.oa(g.A_ ? g.f : g)

        }
        ko.oa = $oa = function (a) {
            var g = G(arguments), a = g[0]
            if (!A(a)) {
                a = g
            }
            return ko.oA(a)
        }
        $oa = ko.oa = function (a) {
            var g = G(arguments)
            var obbA = ko.observableArray(g.A_ ? g.f : g)
            return obbA
        }
//extend:
        oA = ko.observableArray.fn // inhertince extension :)
        oA.p = function (i) {
            var oA = this
            oA.push(i)
            return oA
        }

    }
    function okie() {
        ok = $b = ko.b = ko.ab = function (o, b) {
            var g = G(arguments), ob

            if (S(o)) {
                ob = {}
                ob[o] = b
                g[0] = ob
            }

            if (O(g[0])) {
                vm = g[0];
                return ko.applyBindings(g[0])
            }

            return ko
        }
// ko.b({ g[0]:  ko.o(b) })
        ok = function () {
            var g = G(arguments)
            g.p ? $.in(0, aB) : aB()
            function aB() {
                vm = g.S_ ? // pass a single key, value -> {key:value}
                    Ob(g.f, g.s, g.n ? '-' : null) :
                    g.u ? // pass nothing -> {$: $o(1)}
                    {$: $o(g.n ? 0 : 1)} :
                        // ???? pass plain object and element(string or ob?) :)
                        (F(g.f) || N(g.f) || A(g.f) ) ?
                            // pass just a value -> {$: value}
                        {$: g.f} :
                            // pass just plain obj (normal)
                            g.f
                ko.applyBindings(vm)
                function Ob(a, b) {
                    var g = G(arguments),
                        o = {k: g.f, v: g.s}
                    var ob = {}
                    if (S(o.k)) {
                        o.v = D(o.v) ? o.v : $o(g.n ? 0 : 1)
                        ob[o.k] = o.v
                    }
                    return ob
                }
            }
        }
        OK = function (a) {
            var g = G(arguments)
            g.push('+')
            return ok.apply(null, g)
        }
//OK=ok
        OK = ok = $b = ko.b = ko.ab = function (o, b) {
            var g = G(arguments), ob
            if (S(o)) {
                ob = {}
                ob[o] = b
                g[0] = ob
            }
            if (O(g[0])) {
                vm = g[0];
                return ko.applyBindings(g[0])
            }
            return ko
        }
    }
    computed()
    function computed(){
        ko.c = ko.computed
        ko.pc = ko.pureComputed
//bT,bV and computed
        COMP = function () {

            $.z().h1('KNOCKOUT')

            $.d([
                $.p('F: ', $.b().bT('f')),
                $.p('L: ', $.b().bT('l')),
                $.p('F: ', $.ip().bV('f')),
                $.p('L: ', $.ip().bV('l')).id('l'),
                //   $.p('L: ', $.b().bT('fL') ),

                $.bt('caps').b$('capL')

            ])

            ok({

                f: $o('j'),
                l: $o('y'),

//        fL : ko.c(function(){return this.f()+' '+this.l()}),

                capL: function () {
                    this.l(S.tU(this.l()))
                }

            })


        }}
}
function aaps(){
    KOCL=function(){$.x('x').h2('Peeep')

        Per = function(n, ch) {var per=this
            per.n = n
            per.ch = ko.oa(ch)

            per.A = function(){  per.ch.push('new ch')    }

        }



        peep= [
            new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
            new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
            new Per("Charles", ["Cayenne", "Cleopatra"])
        ]


        $.uE('peep',[


            $.li().A(

                $.d([
                    $.spT('n'), 'has',
                    $.spT('ch().length'),
                    'children &nbsp;',
                    $.a$('New','A')

                ]),

                $.ulE('ch',[
                    $.li([

                        $.spT(), $.spVs( '$root.showDT').A(
                            ' (child rendered at ', $.spT('$Dt().getSeconds()'),')'

                        )])

                ])

            )

        ])
        $.cbC('showDT').a2Lb('Show time:')

        //anonymous vm

        OK({  peep: peep, showDT: kO()   })




    }
    SELOP=function(){d= $.d()

        $.x(null,
            'selectedOptions')



        $.p('Where?',

            $.sl().at({
                size: 5,
                multiple: true
            }).b({  o: 'available', so: 'chosen'

            }))

        ok({

            available  : ko.oa(
                ['France', 'Germany', 'Spain']),
            chosen  : ko.oa(
                ['Germany'])})

        $.in(function(){
            vm.chosen.push('France')
        },'*')
    }
    VIRTUALELS=function(){

        ko.bh.randomOrder = {
            init: function(el, valueAccessor) {

                // Build an array of child elements
                var ch = ko.vE.firstChild(el),
                    CH = []
                while(ch){
                    CH.push(ch)
                    ch = ko.vE.nextSibling(ch)
                }
                // Remove them all, then put them back in a random order
                ko.vE.emptyNode(el)
                while(CH.length) {ko.vE.prepend(el, CH.splice(R(CH), 1)[0])}

            }

        }
    }
    KO0 =function(){$.x(); $.ipV('n'); $.h1T('n')
        $.ulE('arr', [$.liT()])
        $.sb().b$('A')
        $.dA('b',100,300,200,'+').bT('n')

        ok({n:ko.o('zi'), arr: ko.oa(),
            A:function(){this.arr.push(this.n())} }) // ok('n', ko.o('zi'))

        $.in(1, function(){
            vm.n('girf')
            _.e(['a','b','c'], function(i){
                vm.arr.push(i)})},'*')
    }
    KOE=function(){$.x().t([$.tH([$.tr([$.th('F'),$.th('L')])]),
        $.tBE('peep', [
            $.tr([
                $.tdT('f'),
                ', ',
                $.tdT('l')
            ])
        ])])
        ok({ peep: [
            {f:'a',l:'A'},
            {f:'b',l:'B'},
            {f:'c',l:'C'}
        ]})

    }
//bE, observableArray
    KOOA=function(){$.z()



        $.dE('peep', [

            $.p(

                $.bt('push',function(){

                    vm.peep.push({f:'j',l:'y'})

                }),

                $.spT('f'),    ' ',   $.spT('l'))

        ])



        OK('peep', kA(
            {f:'B',l:'Bb'},
            {f:'C',l:'Cc'},
            {f:'D',l:'Dd'}))

    }
//bind 'visibile' to a boolean
    KOBVS=function(){$.z('y').h1('see me if true!')
        .bVs('vs')

        $b('vs', ko.o(1))


        $.in(function(){
            vm.vs(0)

            $.c$()

            $.in(function(){
                vm.vs(1)
                $.c$()
            })

        })
    }
//bind cb 'checked' to boolean
    SPAM=function(){$.x()

        $.cbC('spam').a2( $.p('spam? ') )

        $b({ spam: ko.o(1)})
        $.in(2, function(){vm.spam(0);$.c$()})
    }
//bind 'option'
    KOSL=function(n,v){$.x('o').h1('dests')

        $.slO('cunts')

        ok('cunts',
            ko.oa('Fran', 'Ger', 'Spa'))

        $.in(2,function(){
                vm.cunts.push('Chi')},
            '*'
        )
    }
    KOIP=function(){$.z('x')

        $.p('Login name:').A( $.ipTi('un') )

        $.p('Pw:').A( $.pwTi('pw') )

        // $.p(['Pw:', $.pwTi('pw')])

        //<p> <input type="password" data-bind="textInput: userPassword" /></p>


        $.A(
            'vm: ',
            $.pre().bT('ko.toJSON($root, null, 2)')
        )



        ok({un: ko.o(''), pw: ko.o('abc')})
    }
//bT,bV and computed
    COMP=function(){$.z().h1('KNOCKOUT')

        $.d([
            $.p('F: ', $.b().bT( 'f')),
            $.p('L: ', $.b().bT( 'l') ),
            $.p('F: ', $.ip().bV( 'f') ),
            $.p('L: ', $.ip().bV( 'l') ).id('l'),
            $.p('L: ', $.b().bT('fL') ),
            $.bt('caps').b$('capL')
        ]).A()


        ok({
            f:ko.o('j'),
            l:ko.o('y'),
            fL : ko.c(function(){
                return this.f()+' '+this.l()}),
            capL :function(){this.l(S.tU(this.l()))}
        })



    }
    TASKS=function(){$.z().h3('Tasks')

        $.f().bSb('aT').A().A("Add task: ",
            $.ip().bV('nT').ph("What?"),
            $.bt('Add')//.bS('s') // ??
        )

        $.ul().b({e:'ts', vs:'visible:ts().length>0' }).A($.li().A(
            $.cb().bC( 'iD' ),
            $.ip().b("value:t, disable:iD"),
            $.bt('Del').bC( '$parent.rmT' )))


        $.sp("You have").A()
        $.B("&nbsp;").bT( "inc().length").A()
        $.sp("inc task(s)").A()
        $.sp("- beer!").bV("inc().length==0").A()

        ko.b({

            itemToAdd:ko.o(''),

            allItems:ko.oa(['a','b','c']),

            selectedItems:ko.oa(['d']),
            addItem:function(){
                if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                    vm.allItems.push(vm.itemToAdd());
                    vm.itemToAdd('')
                }
            },

            removeSelected:function(){
                allItems.removeAll(vm.selectedItems())
                selectedItems([])
            },
            sortItems:function(){vm.allItems.sort()}
        })


        vm2={
            ts: ko.oa(),
            nT: ko.o(),
            inc : ko.c(function(){  var vm=this
                    return ko.ut.af(
                        vm.ts(), function(t){return !t.iD()
                        })
                }
            ),
            aT: function(){ this.ts.push({t: ko.o( o.nT()), iD: ko.o( ) }); this.nT('') },
            rmT: function(){ o.ts.remove(this) }
        }

        /*
         ko.b(vm2)
         //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
         */
    }
    TASK=function(){$.z('r')

    }
    KOC=function(){$.z()

        $.ip('r').at({
            name:'choices',
            value:'summary'
        }).bC('selectedView');
        $.sp('summary').A()


        $.ip('r').at({name:'choices',value:'details'}).bC('selectedView'); $.sp('details').A(); $.hr().A()

        $.d().bT("{name: templateToUse, " + "foreach: articles }")

        $.scrp("summary").A().A($.d().bT('title')),
            $.scrp('details').A(
                $.d([$.h2().bT('title'), $.p().bT('content'),
                    $.bt('edit').b$('$parent.selectedArticle') ]) )

        $.scrp('edit').A().A(
            $.d([$.ip().bV('title'), $.br(), $.ip().bV('content') ])
        )
        ko.b({
            articles: [
                {id: 1,title: "Article One",content: "Content for article one."},
                {id: 2,title: "Article Two",content: "Content for article two."},
                {id: 3,title: "Article Three",content: "Content for article three."}

            ],
            selectedView: ko.o("summary"),
            selectedArticle: ko.o(),
            templateToUse:function(i){
                return i===vm.selectedArticle()? 'edit' :vm.selectedView()}

        })
    }
    KOSCR=function(){z();$.bd().A(
        $.scrp('tt').A($.h1('afsdfds')), $.d().bT("{name:'tt'}")
    ); ko.b({})}
// kob= ko.observable.prototype; kob.rm= kob.remove
    MENU=function(){$.z('b').h2('Your seat reservations')
        $.bt('reserve').b$('A')

        AM=[{n:'fries',p:10}, {n:'fish',p:20}, {n:'noodles',p:30}]



        $.t().A($.tHR(['psngr n','m','$$','']),$.tB().bE('seats').A(
                $.tr().A(
                    $.td().bT('n'),
                    $.td().bT('m().n'),
                    $.td().A(
                        $.sl().b({
                            o : '$root.AM',
                            ot : 'm'    //v : 'm',
                        })
                    ),
                    $.td().bT('m().p')

                )

            )

        )

        ko.b({
            seats: $oa([
                {n:'Jo', m: ko.o(AM[0])},
                {n:'Bo', m: ko.o(AM[1])} ]),
            A: function(){
                vm.seats.push({n:'hahaha',
                    m:ko.o( {n:'noodles', p:30})})}
        })

    }
}
function laterr(){
    function params() {
        $.fn.par=function(a,b){this.at('params', a+': ' + b ); return this}

        $.fn.par = function (a, b) {
            this.at('params', a + ': ' + b);
            return this
        }
    }
    function uniq() {
        $.fn.bU= $.fn.bUN=function(s){return this.b('uniqueName', s)}

        $.fn.bU= $.fn.bUN=function(s){return this.dB('uniqueName: '+ s)}
        $.fn.bU= $.fn.bUN=function(s){return this.b('uniqueName', s)}

        $.fn.bU= $.fn.bUN=function(s){return this.dB('uniqueName: '+ s)}
        $.fn.bU = $.fn.bUN = function (s) {
            return this.dB('uniqueName: ' + s)
        }
    }
    function templ() {
        $.fn.bTp = function (s) {
            return this.dB('template: ' + s)
        }


        $.fn.bTp=function(s){return this.b('template', s)}
        $.fn.bTp=function(s){return this.dB('template: '+ s)}
    }
    function compon() {

        $.fn.bCm=function(s){return this.dB('component: '+ s  )}


        $.dCm=function(a){return $.d().bCm(a)}
        ko.r=ko.rg=function(n, ob){
            ob=ob||{}
            if( S(ob.vm) || (O(ob.vm) && !ob.vm.element)){ob.vm={element: ob.vm}}
            ob.viewModel=ob.viewModel||ob.vm||ob.m||ob.o
            if(U(ob.viewModel)){ob={vm:ob}}
            ob.template = ob.template || ob.tp || ob.t
            vm=ob
            return ko.cm.rg(n,ob)
        }
    }
    $.fn.qA=function(t){alert('fn.qA')
        return $('<'+t+'>').A()
    }
    $.fn.qAP=function(a,b,c){alert('fn.qAP')
        this.qA(a).par(b, c); return this}
    function old(){
        bd = knockoutBind2=function(a){
            var g=G(arguments),a=g[0]
            if(g.p){a='text: '+a}
            if(g.n){a='click: '+a}
            if(g.m){a='value: '+a}
            if(g.d){a='checked: '+a}
            q.attr({'data-bind':a})
            return q
        }}
    function toFront(){
        function addTo(){

            $.fn.a2Lb=function(t){t=t||'label:'
                return this.a2($.lb(t))
            }
        }

    }}
function forEaApps(){
    KO0 =function(){
        $.x(); $.ipV('n'); $.h1T('n')
        $.ulE('arr', [$.liT()])
        $.sb().b$('A')
        $.dA('b',100,300,200,'+').bT('n')

        ok({n:ko.o('zi'), arr: ko.oa(),
            A:function(){this.arr.push(this.n())} }) // ok('n', ko.o('zi'))
        $.in(1, function(){
            vm.n('girf')
            _.e(['a','b','c'], function(i){
                vm.arr.push(i)})},'*')
    }
    KOE=function(){$.x().t([$.tH([$.tr([$.th('F'),$.th('L')])]),
        $.tBE('peep', [
            $.tr([
                $.tdT('f'),
                ', ',
                $.tdT('l')
            ])
        ])])

        OK({ peep: [
            {f:'a',l:'A'},      {f:'b',l:'B'}, {f:'c',l:'C'}
        ]})

    }
    NEST=function(){$.x('x').h2('Pp')

        Per = function(n, ch) {
            this.n = n
            this.ch = $oa(ch)
            this.A = function(){
                this.ch.push('new ch '+ $r())
            }
        }

        peep= [
            new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
            new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
            new Per("Charles", ["Cayenne", "Cleopatra"])
        ]


        $.uLE('peep',

            $.d([  // name has length children
                $.spT('n'), 'has', $.spT('ch().length'),  'children &nbsp;',
                //new
                $.a$('New','A')
            ]),

            $.uLE('ch',
                $.spT(), //child name
                $.spVs( '$root.showDT').A('(child rendered at ',   $.spT('$Dt().getSeconds()'),      ')')
            )
        )

        $.cbC('showDT').a2Lb('Show time:')

        //anonymous vm


        ok({    peep: peep,      showDT: $o()     })
    }
    TPLIST=function(){$.x()
        Meals = [ { m: "sand", p: 0 }, { m: "lobst", p: 34.95 }, { m: "zebra", p: 290 } ]

        $.h2('Your rsv').A( $.spT('seats().length') )

        $.h3('Cost:').bVs('cost()>0').A( $.spT('cost().toFixed(2)') )

        $.t([
            $.tH([ $.tr(['Pass name','Meal','charge']) ]),
            $.tB().bTp("{n:'rsvTp', foreach: seats}") //?

        ])

        $.bt('Rsv again').b({ $:'A', en:'seats().length < 5' })

        $('<script type="text/x-jquery-tmpl" id="rsvTp" >').A(
            $.tr([
                $.td([$.ipV('n')]),

                $.td([
                    $.sl().b({o:'Meals', ot:'meal'})
                ]),

                $.td([ $.a$('del', 'rm')  ])
            ])
        )

        seatRsv = function(n) {
            this.n = n
            this.Meals = Meals;
            this.meal = ko.o(Meals[0]);
            this.rm = function() {vm.seats.remove(this) }
            this.fmtPrice = ko.do(function(){
                var price = this.meal().p
                return price ? "$" + price.toFixed(2) : "None";
            }, this)
        }


        vm = {
            seats: ko.oa([ new Rsv("St"), new Rsv("Br") ]),
            A: function() { this.seats.push(new Rsv())} }


        vm.cost = ko.do(function() {var tot = 0;
            for (var i = 0; i < this.seats().length; i++)
                tot += this.seats()[i].meal().price;
            return tot
        }, vm)



        ok(vm)

    }
//sort, remove
    BTRLST1=function(){$.x('o')

        $.f().b({sb:'A'}).A('Add item:',
            $.ip().b({v:'tA', vU:'afterkeydown'}),
            $.sb('Add').b('en', 'tA().length > 0')
        )

        $.p('Your values:')

        $.sl().mlt().b({ o:'all', so:'sl' })

        $.d([


            $.bt('Rem').b({$:'xSl', en:'sl().length > 0'}),

            $.bt('Srt').b({$:'srt', en:'all().length > 1'})

        ])

        Lst = function () {

            this.tA = $o('')

            this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30] )

            this.sl = $oa(['Hm'])

            this.A = function () {
                if (this.tA()!=''&& this.all.indexOf(this.tA())<0){
                    this.all.push(this.tA())
                    this.tA('') } }

            this.xSl = function () {
                this.all.removeAll(this.sl())
                this.sl([]) }
            this.srt = function() { this.all.sort() }
        }

        ok(new Lst())
    }
    BTRLST=function(){$.x('o')

        f= $.fSb('A',[ 'Add:',
            $.ipV('tA'),
            $.sb('Add').bEn('tA().length>0')
        ])

        $.p('Your values:')
        $.sl().mlt().b({
            o:'all',
            so:'sl'
        })

        $.d([

            $.bt('Rem').b({

                $:'xSl',

                en:'sl().length > 0'

            }),


            $.bt('Srt').b({$:'srt', en:'all().length > 1'})

        ])


        Lst = function(){

            this.tA = kO('')

            this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)

            this.sl = kA('Hm')

            this.A = function () {
                if (this.tA() &&
                    this.all.indexOf(this.tA())<0
                ){

                    this.all.push(this.tA())
                    this.tA('')}
            }

            this.xSl = function(){

                this.all.removeAll(this.sl())

                this.sl([])

            }


            this.srt = function() { this.all.sort() }
        }

        ok( new Lst() )

    }
//add, conditional el
    DIRT=function(){$.z('g').fm() //KOMASTERPIECE
        $.cm=  $.Cm=  function(cms,cc){cms.push({comment:cc})}
        $.spT=   function(a){return $.sp().b('text', a)}
        d= $.d('z')//.mar(20)
            .bE('m').A(
            $.h1().C('y','c').A(
                $.spT('message'), $.sp(' '), $.spT('score'),
                s1.A($.h2().A($.ip(400), $.bt('new r'))),
                $.h2().bE('responses').C('r').A(
                    s1.A( $.spT('response') ),
                    s2.A( $.h4(
                        //$.iP(400),
                        $.bt('new c')) ),
                    $.h4().C('b').bE('comments').A(
                        s2.A($.spT('comment'))
                    )
                )
            ),
            $.br(),
            $.br()
        )


        ko.b({
            m: ko.oa(messages=[{message:'zi', score:100, responses:[
                {response:'good coder',
                    comments:[{comment:'..eh'}]},
                {response:'cool girl'}
            ]},

                {message:'yano', score:3,
                    responses:[{response:'is cool guy',
                        comments:[{comment:'hi'}, {comment:'hello'}]},
                        {response:'a'}, {response:'b'}, {response:'fun'}]},
                {message:'is awesome',score:0,responses:[
                    {response:'afsdafsd'}]},
                {message:'lame',score:20,responses:[
                    {response:'weird',comments:[{comment:'not!!!!1'}]},
                    {response:'lamer',comments:[{comment:'fuck ya'}]}]},
                {message:'rocks',score:4,responses:[]}
            ]),

            responses:ko.oa([
                {response:'one'},
                {response:'two'}
            ])
        })




        f=function(){
            vm.p.push({f:'jason',l:'yano'})
        }
    }
    KOFL=function(){

        //filter the items using the filter text
        vm.filteredItems = ko.c(function() {
            var t= this, fl

            fl = t.filter().toLowerCase()


            if (!fl) {return t.items();

            }

            else {
                return ko.utils.arrayFilter(t.items(),
                    function(it) {

                        return ko.utils.stringStartsWith(
                            it.name().toLowerCase(), fl)
                    })
            }
        }, vm)
    }//???
    KOFLM=function(){$.z('x')

        d=    $.dI('hover').A(
            $.a().A(
                $.i('me').bT('matterId')
            )
        )


        d.mouseover(function(){ var d=this
            //Show the div onmouseover.
            $l("!!!")

            $(d).next("#box").gg()
        })


        d.mouseout( function(){function onMouseOut(obj) {

            //d

            //Hide to div onmouseout
            //Todo:none
        }})


        $.ul().bE('mDateTime').A($.li().A($.ul().bE('$root.matter.index.type()[$data]').A(
            $.li().A(d,
                $.dI('box').css('display','none').A(
                    $.a().A('Edit'), $.a().A('Copy'), $.a().A('Delete'))
            ),

            $.li().bT('matterTitle'),
            $.li().bT('matterComment')
        )))





    }
    LIST=function(){$.x('z')

        f=  $.f().A(

            $.sp('add item'),

            $.ip().b({v:'itemToAdd', V:'afterkeydown'}),

            $.sb('add').bE('itemToAdd().length>0')

        )


        f.bSb('addItem')





        $.d().A(f,

            $.d().A(
                $.sp('Your values:'),
                $.sl().h(5).b({
                    o:'allItems',
                    so:'selectedItems'
                })
            ),



            $.d().A(

                $.bt('remove').b({
                    c:'removeSelected',
                    e:'selectedItems().length>0'}),

                $.bt('sort').b({
                    c:'sortItems',
                    e:'allItems().length>1'}))
        )

        ok({ itemToAdd:ko.o(''),
            allItems:ko.oa(['a','b','c']),
            selectedItems:ko.oa(['d']),
            addItem:function(){
                $l('addItem')
                if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                    vm.allItems.push(vm.itemToAdd());vm.itemToAdd('')
                }
            },


            removeSelected:function(){
                allItems.removeAll(o.selectedItems())
                selectedItems([])
            },
            sortItems:function(){o.allItems.sort()}
        })

    }
    KOOA=function(){$.x()
        OK('peep', $oa(        {f:'B',l:'Bb'}, {f:'C',l:'Cc'}, {f:'D',l:'Dd'} ))
        $.dE('peep', [  $.p(
            $.spT('f'),    ' ',   $.spT('l')
        ) ])
        $.bt('push',function(){
            vm.peep.push({f:'j',l:'y'})
        })
    }
    ADD=function(){$.x('x', 'course')

        OK({

            cl: $oa(),

            a: function(){
                this.cl.p({
                    n:'j', c:$r()
                })
                return this
            }

        })


        $.s$('a','play'); //the order of these mets should reverse


        $.U('cl',  [

            'name is ', $.sT('n'), ' and gusta ', $.sT('c')

        ])

        vm.a().a().a()
        //https://www.youtube.com/watch?v=JGwRIbWWqjE
    }
    DELETE=function(){$.x()
//bind bt 'click' to parent.rem
        $.h4('People')

        $.ulE('peep',[ $.li([
            $.sp('pos/name: '),
            $.spT('$index'),
            $.spT('n'),
            $.$bt('del', 'rm', '-')
        ]) ])
        $.$bt('A')

        ok({ peep : ko.oa({n:'B'},{n:'Ch'},{n:'De'}),
            A: function(){this.peep.push({n: "New at "+$D()})},
            rm : function (a) {vm.peep.remove(this)}
        })


    }
    ROOT=function(){$.x('x')
        $.uE('fs', [  $.li().b({
            t:'$data',
            s:'{selected: $data==$root.chFI()}',
            $:'$root.gtf'

        })

        ]).K('fs')

        ok({
            fs:['I','A','Se','Sp'],
            chFI: ko.o(),
            gtf: function(f){
                $l('click: ' + 'f: '+ f + ', this: '+this)
                f = f||'frog'
                vm.chFI(f)
            }
        })
    }
    BARN=function(){$.x()


        $.ulE('PL', [ $.li([
            $.sp('Planet: '),

            $.b().bT('n'),

            $.dI('cap',[  $.pT('cap.n')])

        ])])


        ok('PL',[
            {n: 'Merc', cap: null },
            {n: 'Earth', cap: { n: 'Barn' } }
        ])
    }
    workss()
    function workss(){

        each()
        function each(){
            KOE=function(){

                $.x().t([$.tH([$.tr([$.th('F'),$.th('L')])]),

                    $.tBE('peep', [
                        $.tr([
                            $.tdT('f'),
                            ', ',
                            $.tdT('l')
                        ])
                    ])])

                ok({
                    peep: [
                        {f:'a',l:'A'},
                        {f:'b',l:'B'},
                        {f:'c',l:'C'}
                    ]})

            }

            BARN=function(){$l('barn')

                $.z().ulE(
                    'PL',[

                        $.li([

                            $.sp('Planet: '),
                            $.b().bT('n'),
                            $.dI('cap',[  $.pT('cap.n') ])

                        ])


                    ])



                ok('PL',[
                    {n: 'Merc', cap: null },
                    {n: 'Earth', cap: { n: 'Barn' } }
                ])
            }
        }

    }





    FLCL=function(){$.x('r', 'filtering a cl:')

        /*
         FlV = bb.V.e({
         ev: {'click #run': 'runFilter'},
         runFilter: function(e){e.pD();
         this.fl = {
         // ... get the filter info from the DOM
         }; this.rr()},
         rr: function(){// get the filtered list from the collection
         // iterate over the filtered list and render the results in to the html array
         // populate the DOM with the resulting HTML
         HT=[]
         _.e(this.cl.where(this.fl),
         function(item){HT.push(
         _.tp($('my-item-template').H())(item.tJ())
         )})

         this.$el.html(HT); return this }
         })*/


        Cl =  bb.C.e({i:function(){}})


        cl = Cl.o({})


        /*
         cl.add([{a: 'f', b: 's'},
         {a: 't', b: 's'},
         {a:'f', b: 's'},
         {a: 's', b:'t'}
         ])


         res = cl.where({a:'f',b:'s'})
         */
        //http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
    }

    PEOPLE=function(){$.x()

        Per  = bb.M.e({
            i: function () {
                //this.oV(function(mod, err){$l(err)})
            },
            d: {n:'doe', a: 30, j: 'wrk'},
            validate: function (ats) {if (ats.age < 0) {return 'a < 0!'}},
            work: function () {return this.g('n') + ' is working'}
        })

        p = Per.o({n: 'y', a: 34})

        //p.oV(function (mod, z) {$l(z)})

        PerV = bb.V.e({tn: 'li',
            k: 'person', x: 'some-person',
            i: function () {this.r()},
            tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
            r: function () {
                var t = this
                //this works, but doesnt use a template
                // t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
                t.H(
                    t.T(
                        t.J()
                    )
                )
            }
        })

        pV= PerV.o({m: p})

        peepC = bb.C.e({m: Per})


        pC = peepC.o([
            {n: 'rigo', a: 29},
            {n: 'j', a: 2},
            {n: 's', j: 'gx'}
        ])
        pC.add(p)


        pC.at(1).n('joejoe')
        pC.at(1).s('name', 'joejoe')

        PeepV = bb.V.e({tn: 'ul',
            i: function () {
                $l('hi')
                $l(this.cl)
            },
            r: function () {//var t=this
                this.cl.each(function (p) {var v,pV  //$l(p.g('n'))
                    pV = PerV.o({m: p}) //$l(pV.el)
                    this.$el.append(pV.el) //t.q( pV.el  )
                }, this)
            }

        })

        pcv = PeepV.o({cl: pC})
        pcv.r()
        $.A( pcv.el )

    }

    KOGRID=function(){$.z().f().at({action: '/someServerSideHandler'}).A(
        $.p('You have asked for').A(
            $.sp('&nbsp;').bT('gifts().length'),
            'gift(s)'),

        $.t().bVs('gifts().length > 0').A(
            $.tH().A(
                $.tr().A(
                    //tHR
                    $.th().A('Gift name'),
                    $.th().A('Price')
                )),



            $.tB().bE('gifts').A(
                $.tr().A(  //tBR
                    $.td().A($.ip().K('required').b({v:'name', u:true})),

                    $.td().A($.ip().K('required number')
                        .b({v:'price', u:true})),

                    $.td().A(
                        $.a('delete').b$('$root.removeGift')
                    )))),



        $.bt('add gift').b$('addGift'),

        $.sb().bEn('gifts().length > 0')

    ).A()

        Gift = function(gifts) {var vm = this
            vm.gifts = ko.oa(gifts)
            vm.addGift = function() {vm.gifts.push({name: "", price: "" }) }
            vm.removeGift = function(gift) { vm.gifts.remove(gift) }
            vm.save = function(form) {alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);

        }
        ko.b(new Gift([
            { name: "Tall Hat", price: "39.95"},
            { name: "Long Cloak", price: "120.00"}
        ]))
        // $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
    }
    PLAN=function(){$.z().h1('Plan!')

        $.p().A($.lb().A(
                $.cC('displayAdvancedOptions'), 'Display advanced options'
            )
        )

        $.p().A('Show:',

            $.lb([$.ip()]),  $.lb([$.ip()]),  $.lb([$.ip()])

        )



        /*
         <p data-bind='fadeVisible: displayAdvancedOptions'>
         Show:
         <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
         <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
         <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
         </p>*/


        $.d([$.d([ $.d()]) ])

        /*

         <div data-bind='template: { foreach: planetsToShow,
         beforeRemove: hidePlanetElement,
         afterAdd: showPlanetElement }'>
         <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
         </div>

         */

        $.p([$.bt(), $.bt()])

        /*
         <p data-bind='fadeVisible: displayAdvancedOptions'>
         <button data-bind='click: addPlanet.bind($data, "rock")'>Add rocky planet</button>
         <button data-bind='click: addPlanet.bind($data, "gasgiant")'>Add gas giant</button>
         </p>
         */


        Planets  = function() {

            this.planets = ko.oa([

                { name: "Mercury", type: "rock"},
                { name: "Venus", type: "rock"},
                { name: "Earth", type: "rock"},
                { name: "Mars", type: "rock"},
                { name: "Jupiter", type: "gasgiant"},
                { name: "Saturn", type: "gasgiant"},
                { name: "Uranus", type: "gasgiant"},
                { name: "Neptune", type: "gasgiant"}
            ]);

            this.typeToShow = ko.o("all");
            this.displayAdvancedOptions =ko.o(false);
            this.addPlanet = function(type) {
                this.planets.push({
                    name: "New planet",
                    type: type})}
            this.planetsToShow = ko.pc(function() {
                // Represents a filtered list of planets
                // i.e., only those matching the "typeToShow" condition
                var desiredType = this.typeToShow();
                if (desiredType == "all") return this.planets();
                return ko.utils.arrayFilter(this.planets(), function(planet) {
                    return planet.type == desiredType;
                });
            }, this);


            // Animation callbacks for the planets list
            this.showPlanetElement = function(el) {
                if (el.nodeType === 1) $(el).hide().slideDown()
            }

            this.hidePlanetElement = function(el) {
                if (el.nodeType === 1) $(el).slideUp(function() { $(el).remove(); }) }
        }


// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
// Could be stored in a separate utility library

        ko.bh.fadeVisible = {
            init: function(el, valAcc) {
                // Initially set the el to be instantly visible/hidden depending on the value
                var value = valAcc();
                $(el).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
            },
            update: function(el, valAcc) {
                // Whenever the value subsequently changes, slowly fade the el in or out
                var value = valAcc();
                ko.unwrap(value) ? $(el).fadeIn() :
                    $(el).fadeOut();
            }

        }


        ok(new Planets())

    }

    PLAN=function(){$.z().h1('Plan!')

        $.p().A($.lb().A(
                $.cC('displayAdvancedOptions'), 'Display advanced options'
            )
        )

        $.p().A('Show:',

            $.lb([$.ip()]),  $.lb([$.ip()]),  $.lb([$.ip()])

        )



        /*
         <p data-bind='fadeVisible: displayAdvancedOptions'>
         Show:
         <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
         <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
         <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
         </p>*/


        $.d([$.d([ $.d()]) ])

        /*

         <div data-bind='template: { foreach: planetsToShow,
         beforeRemove: hidePlanetElement,
         afterAdd: showPlanetElement }'>
         <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
         </div>

         */

        $.p([$.bt(), $.bt()])

        /*
         <p data-bind='fadeVisible: displayAdvancedOptions'>
         <button data-bind='click: addPlanet.bind($data, "rock")'>Add rocky planet</button>
         <button data-bind='click: addPlanet.bind($data, "gasgiant")'>Add gas giant</button>
         </p>
         */


        Planets  = function() {

            this.planets = ko.oa([

                { name: "Mercury", type: "rock"},
                { name: "Venus", type: "rock"},
                { name: "Earth", type: "rock"},
                { name: "Mars", type: "rock"},
                { name: "Jupiter", type: "gasgiant"},
                { name: "Saturn", type: "gasgiant"},
                { name: "Uranus", type: "gasgiant"},
                { name: "Neptune", type: "gasgiant"}
            ]);

            this.typeToShow = ko.o("all");
            this.displayAdvancedOptions =ko.o(false);
            this.addPlanet = function(type) {
                this.planets.push({
                    name: "New planet",
                    type: type})}
            this.planetsToShow = ko.pc(function() {
                // Represents a filtered list of planets
                // i.e., only those matching the "typeToShow" condition
                var desiredType = this.typeToShow();
                if (desiredType == "all") return this.planets();
                return ko.utils.arrayFilter(this.planets(), function(planet) {
                    return planet.type == desiredType;
                });
            }, this);


            // Animation callbacks for the planets list
            this.showPlanetElement = function(el) {
                if (el.nodeType === 1) $(el).hide().slideDown()
            }

            this.hidePlanetElement = function(el) {
                if (el.nodeType === 1) $(el).slideUp(function() { $(el).remove(); }) }
        }


// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
// Could be stored in a separate utility library

        ko.bh.fadeVisible = {
            init: function(el, valAcc) {
                // Initially set the el to be instantly visible/hidden depending on the value
                var value = valAcc();
                $(el).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
            },
            update: function(el, valAcc) {
                // Whenever the value subsequently changes, slowly fade the el in or out
                var value = valAcc();
                ko.unwrap(value) ? $(el).fadeIn() :
                    $(el).fadeOut();
            }

        }


        ok(new Planets())

    }



    function protoErr() {
        CHERRY = function () {
            $l('cherry')
            $.x('o')
            $.p($.sp('spam?'), $.cC('wants'))
            $.d(['Preferred flavors of spam:',
                $.d([
                    $.p($.sp('cherry'), $.cC('flav').v('cherry')),
                    $.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
                    $.p($.sp('Glut'), $.cC('flav').v('glut'))
                ])
            ]).bVs('wants')

            ok({
                wants: ko.o(1),
                flav: ko.oa(["cherry", "almond"])
            })


            // vm.flav.push("msg")
            /*
             function $.cKO(m, b, v){
             var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
             if(v){ cb.v(v)}
             return p
             }*/


        }

    }

    ADDER=function(){$.x()

        $.h4('People')

        $.ulE('peep',[ $.li([
            $.sp('pos/name: '),
            $.spT('$index'),
            $.spT('n'),
            $.$bt('del', 'rm', '-')
        ]) ])

        $.$bt('A')

        ok({ peep : ko.oa({n:'B'},{n:'Ch'},{n:'De'}),
            A: function(){this.peep.push({n: "New at "+$D()})},
            rm : function (a) {vm.peep.remove(this)}
        })


    }
//bind bt 'click' to parent.rem
    ADDER=function(){$.x()

        $.h4('People')

        $.ulE('peep',[ $.li([
            $.sp('pos/name: '),
            $.spT('$index'),
            $.spT('n'),
            $.$bt('del', 'rm', '-')
        ]) ])

        $.$bt('A')

        ok({ peep : ko.oa({n:'B'},{n:'Ch'},{n:'De'}),
            A: function(){this.peep.push({n: "New at "+$D()})},
            rm : function (a) {vm.peep.remove(this)}
        })


    }



// kob= ko.observable.prototype; kob.rm= kob.remove
    MENU=function(){$.z('b').h2('Your seat reservations')
        $.bt('reserve').b$('A')

        AM=[{n:'fries',p:10}, {n:'fish',p:20}, {n:'noodles',p:30}]



        $.t().A($.tHR(['psngr n','m','$$','']),$.tB().bE('seats').A(
                $.tr().A(
                    $.td().bT('n'),
                    $.td().bT('m().n'),
                    $.td().A(
                        $.sl().b({
                            o : '$root.AM',
                            ot : 'm'    //v : 'm',
                        })
                    ),
                    $.td().bT('m().p')

                )

            )

        )

        ko.b({
            seats: $oa([
                {n:'Jo', m: ko.o(AM[0])},
                {n:'Bo', m: ko.o(AM[1])} ]),
            A: function(){
                vm.seats.push({n:'hahaha',
                    m:ko.o( {n:'noodles', p:30})})}
        })

    }
    CHERRY=function(){$.x('o')
        $.p($.sp('spam?'), $.cC('wants'))
        $.d([  'Preferred flavors of spam:',
            $.d([
                $.p($.sp('cherry'), $.cC('flav').v('cherry')),
                $.d([$.p($.sp('Almond'),   $.cC('flav').v('almond'))]),
                $.p($.sp('Glut'), $.cC('flav').v('glut'))
            ])
        ]).bVs('wants')

        ok({
            wants:ko.o(1),
            flav:ko.oa(["cherry","almond"])
        })





        // vm.flav.push("msg")
        /*
         function $.cKO(m, b, v){
         var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
         if(v){ cb.v(v)}
         return p
         }*/


    }

    FOREACH = function () {
        z()

        _d().b('fe', 'p')(
            pg(
                sp().b('t', 'f'),
                sp(' '),
                sp().b('t', 'l'))
        ).a()


        vm = {
            p: ko.oa([
                {f: 'B', l: 'Bb'},
                {f: 'C', l: 'Cc'},
                {f: 'D', l: 'Dd'}])
        }
        ko.ab(vm)


        f = function () {
            vm.p.push({f: 'jason', l: 'yano'})
        }
    }

    KOGRID=function(){$.z().f().at({action: '/someServerSideHandler'}).A(
        $.p('You have asked for').A(
            $.sp('&nbsp;').bT('gifts().length'),
            'gift(s)'),

        $.t().bVs('gifts().length > 0').A(
            $.tH().A(
                $.tr().A(
                    //tHR
                    $.th().A('Gift name'),
                    $.th().A('Price')
                )),



            $.tB().bE('gifts').A(
                $.tr().A(  //tBR
                    $.td().A($.ip().K('required').b({v:'name', u:true})),

                    $.td().A($.ip().K('required number')
                        .b({v:'price', u:true})),

                    $.td().A(
                        $.a('delete').b$('$root.removeGift')
                    )))),



        $.bt('add gift').b$('addGift'),

        $.sb().bEn('gifts().length > 0')

    ).A()

        Gift = function(gifts) {var vm = this
            vm.gifts = ko.oa(gifts)
            vm.addGift = function() {vm.gifts.push({name: "", price: "" }) }
            vm.removeGift = function(gift) { vm.gifts.remove(gift) }
            vm.save = function(form) {alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);

        }
        ko.b(new Gift([
            { name: "Tall Hat", price: "39.95"},
            { name: "Long Cloak", price: "120.00"}
        ]))
        // $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
    }


    SPAM2 = function () {
        z()

        cbKO('Send me spam', 'wantsSpam').A()

        $.div().koBind('vs', 'wantsSpam')(
            'Preferred flavors of spam:',
            $.div().A(cbKO('Cherry', 'flav', 'cherry')),
            $.div().A(cbKO('Almond', 'flav', 'almond')),
            $.div().A(cbKO('Glut', 'flav', 'glut'))
        ).A()

        vm = {

            wantsSpam: ko.o(true),
            flav: ko.oa(["cherry", "almond"])
        }

        ko.applyBindings(vm)

        //viewModel.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox

    }


//bind cb 'checked' to boolean
    SPAM=function(){$.x()

        $.cbC('spam').a2( $.p('spam? ') )

        $b({ spam: ko.o(1)})
        _.in(2, function(){vm.spam(0);$.c$()})
    }
    SPAM = function () {$l('spam')
        z()

        c = cbKO('Send me spam', 'wantsSpam').A()

        vm = {wantsSpam: ko.o(true)}

        ko.applyBindings(vm)

    }

    LIST=function(){$.x('z')

        f=  $.f()

        f.bSb('addItem').A(

            $.sp('add item'),
            $.ip().b({v:'itemToAdd', V:'afterkeydown'}),
            $.sb('add').bE('itemToAdd().length>0')
        )

        $.d().A(f,

            $.d().A(
                $.sp('Your values:'),

                $.sl().h(5).b({

                    o:'allItems',
                    so:'selectedItems'
                })
            ),

            $.d().A(

                $.bt('remove').b({
                    c:'removeSelected',
                    e:'selectedItems().length>0'}),
                $.bt('sort').b({
                    c:'sortItems',
                    e:'allItems().length>1'}))
        )
        ok({ itemToAdd:ko.o(''),
            allItems:ko.oa(['a','b','c']),
            selectedItems:ko.oa(['d']),
            addItem:function(){
                $l('addItem')
                if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                    vm.allItems.push(vm.itemToAdd());vm.itemToAdd('')
                }
            },


            removeSelected:function(){
                allItems.removeAll(o.selectedItems())
                selectedItems([])
            },
            sortItems:function(){o.allItems.sort()}
        })
    }
    LIST=function(){$.x('z')

        f=  $.f()

        f.bSb('addItem').A(

            $.sp('add item'),
            $.ip().b({v:'itemToAdd', V:'afterkeydown'}),
            $.sb('add').bE('itemToAdd().length>0')
        )

        $.d().A(f,

            $.d().A(
                $.sp('Your values:'),

                $.sl().h(5).b({

                    o:'allItems',
                    so:'selectedItems'
                })
            ),

            $.d().A(

                $.bt('remove').b({
                    c:'removeSelected',
                    e:'selectedItems().length>0'}),
                $.bt('sort').b({
                    c:'sortItems',
                    e:'allItems().length>1'}))
        )
        ok({ itemToAdd:ko.o(''),
            allItems:ko.oa(['a','b','c']),
            selectedItems:ko.oa(['d']),
            addItem:function(){
                $l('addItem')
                if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                    vm.allItems.push(vm.itemToAdd());vm.itemToAdd('')
                }
            },


            removeSelected:function(){
                allItems.removeAll(o.selectedItems())
                selectedItems([])
            },
            sortItems:function(){o.allItems.sort()}
        })
    }

//sort, remove
    BTRLST1=function(){$.x('o')

        $.f().b({sb:'A'}).A('Add item:',
            $.ip().b({v:'tA', vU:'afterkeydown'}),
            $.sb('Add').b('en', 'tA().length > 0')
        )

        $.p('Your values:')

        $.sl().mlt().b({ o:'all', so:'sl' })

        $.d([
            $.bt('Rem').b({$:'xSl', en:'sl().length > 0'}),
            $.bt('Srt').b({$:'srt', en:'all().length > 1'})
        ])

        Lst = function () {
            this.tA = $o('')
            this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30] )
            this.sl = $oa(['Hm'])
            this.A = function () {
                if (this.tA()!=''&& this.all.indexOf(this.tA())<0){
                    this.all.push(this.tA())
                    this.tA('')
                }
            }

            this.xSl = function () {
                this.all.removeAll(this.sl())
                this.sl([])
            }
            this.srt = function() { this.all.sort() }
        }
        $b(new Lst())
    }
    BTRLST=function(){$.x('o')

        f= $.fSb('A',[ 'Add:',
            $.ipV('tA'),
            $.sb('Add').bEn('tA().length>0')
        ])

        $.p('Your values:')
        $.sl().mlt().b({
            o:'all',
            so:'sl'
        })

        $.d([

            $.bt('Rem').b({

                $:'xSl',

                en:'sl().length > 0'

            }),


            $.bt('Srt').b({$:'srt', en:'all().length > 1'})

        ])


        Lst = function(){

            this.tA = kO('')

            this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)

            this.sl = kA('Hm')

            this.A = function () {
                if (this.tA() &&
                    this.all.indexOf(this.tA())<0
                ){

                    this.all.push(this.tA())
                    this.tA('')}
            }

            this.xSl = function(){

                this.all.removeAll(this.sl())

                this.sl([])

            }


            this.srt = function() { this.all.sort() }
        }

        ok( new Lst() )

    }
    function classic(){
        BETTERLIST = function () {
            z()

            $.d()(
                fo().b('S', 'addItem')(
                    sp('add item'),

                    tx().b({
                        v: 'itemToAdd'//,vu:'afterkeydown'
                    }),

                    sm('add').b('ea', 'itemToAdd().length>0')),


                _d()(
                    sp('Your values:'),
                    sel().h(5).b({
                        o: 'allItems',
                        so: 'selectedItems'
                    })
                ),

                _d()(
                    bt('remove').b({
                        c: 'removeSelected',
                        ea: 'selectedItems().length>0'
                    }),

                    bt('sort').b({
                        c: 'sortItems',
                        ea: 'allItems().length>1'
                    }))
            ).a()

            ko.ab(o = BLM())
        }
    }


    tabl()
    function tabl() {
        Gift = function (gifts) {
            var vm = this

            vm.gifts = ko.oa(gifts)

            vm.addGift = function () {
                vm.gifts.push({name: "", price: ""})
            }

            vm.removeGift = function (gift) {
                vm.gifts.remove(gift)
            }

            vm.save = function (form) {
                alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
            }

            // To actually transmit to server as a regular form post, write this:
            // ko.utils.postJson($("form")[0], self.gifts)

        }
        KOGRID = function () {
            $.z()


            f = $.f().at({action: '/someServerSideHandler'})


            f.A(
                $.p('You have asked for').A($.sp('&nbsp;').bT('gifts().length'), 'gift(s)'),

                $.t().bVs('gifts().length > 0').A(
                    $.tH().A($.tr().A(//tHR
                        $.th().A('Gift name'),
                        $.th().A('Price'))),
                    $.tB().bE('gifts').A($.tr().A(  //tBR
                        $.td().A($.ip().K('required').b({v: 'name', u: true})),
                        $.td().A($.ip().K('required number')
                            .b({v: 'price', u: true})),
                        $.td().A($.a('delete').b$('$root.removeGift'))))),

                $.bt('add gift').b$('addGift'),

                $.sb().bEn('gifts().length > 0')
            ).A()


            ok(new Gift([

                {name: "Tall Hat", price: "39.95"},
                {name: "Long Cloak", price: "120.00"}

            ]))

            // $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation

        }
//broken
        MENU = function () {
            $.z('b').h2('Your seat reservations')

            $.bt('reserve').b$('A')

            AM = [{n: 'fries', p: 10}, {n: 'fish', p: 20}, {n: 'noodles', p: 30}]


            $.t().A($.tHR(['psngr n', 'm', '$$', '']), $.tB().bE('seats').A(
                    $.tr().A(
                        $.td().bT('n'),
                        $.td().bT('m().n'),
                        $.td().A(
                            $.sl().b({
                                o: '$root.AM',
                                ot: 'm'    //v : 'm',
                            })
                        ),
                        $.td().bT('m().p')
                    )
                )
            )

            ok({
                seats: $oa([
                    {n: 'Jo', m: ko.o(AM[0])},
                    {n: 'Bo', m: ko.o(AM[1])}]),
                A: function () {
                    vm.seats.push({
                        n: 'hahaha',
                        m: ko.o({n: 'noodles', p: 30})
                    })
                }
            })

        }
    }

}
function formApps(){
//bind cb and bind ip to 'enable'
    KOEN=function(){$.x()

        $.p().A($.cbC('hasPhone'), 'I have phone' )
        $.p('Your cellphone number').A(
            $.ip().b({ v:'num', en:'hasPhone'}))

        ok({ hasPhone: ko.o(0), num:'' })

    }



///*** PERFECT FOR EDITTING A PROFILE IP
    KOFC=function(){$.x()

        $.p('Name:').A(

            $.ip().b({   vs:'editing',  f:'editing',
                v:'name'
            }),

            $.d('r').b({  vs:'!editing()',
                t:'name',
                $:'edit'
            })
        )

        $.p('Click the name to edit it; click elsewhere to apply changes')

        function VM(n) {var vm=this
            vm.name = ko.o(n)
            vm.editing = ko.o()
            vm.edit = function() {vm.editing(1) }
        }

        ok(new VM("Bert Bertington"))
    }




//bind cb 'checked' to boolean

    SPAM=function(){$.x('o','spam')


        $.p('spam? ').A(
            $.cbC('spam')
        )

        ok({   spam: ko.o(1)   })
        $.in(2, function(){   vm.spam(0)   })
    }



    KOIP=function(){$.z('x')

        $.p('Login name:').A(
            $.ipTi('un') )
        $.p('Pw:').A(
            $.pwTi('pw') )     // $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>


        $.A(
            'vm: ',
            $.pre().bT(
                'ko.toJSON($root, null, 2)'
            )

        )

        ok({   un: ko.o(''),    pw: ko.o('abc')  })

    }




    CHERRY=function(){$.x('o')
        OK({

            wants:$o(1),

            flav:  $oa(["cherry","almond"])

        })

        $.p(  $.sp('spam?'),   $.cC('wants')   )

        $.d([  'Preferred flavors of spam:',

            $.d([

                $.p(  $.sp('cherry'),
                    $.cC('flav').v('cherry')
                ),

                $.d([$.p($.sp('Almond'),   $.cC('flav').v('almond'))]),

                $.p($.sp('Glut'), $.cC('flav').v('glut'))

            ])

        ]).bVs('wants')

        $.in(function(){

            vm.flav.push("glut")
        })

    }
    TWT=function(){$.x('r','twt')


        OK({

            un : ko.o('@ex'),

            da : ko.o(),

            g:function(){
                vm.da({

                    dt: $D(),

                    MS: _.m(['a','b'],
                        function(t){return {ms:vm.un()+':'+t}})
                })},

            clr: function(){ vm.da([]) }
            //<- $.bt('Clear tweets').b$(' $parent.clearResults')
        })


        $.fSb('g',[  'un:',
            $.ipV('un'),   $.sb('Get')
        ])


        $.dW('da',[
            $.h3('dt:', $.spT('dt') ),

            $.olE('MS', $.liT('ms')),

            $.bt$('clr','$parent.clr')

        ]).A()

    }


//broken
    TASKS=function(){$.z().h3('Tasks')

        $.f().bSb('aT').A().A("Add task: ",
            $.ip().bV('nT').ph("What?"),
            $.bt('Add')//.bS('s') // ??
        )

        $.ul().b({e:'ts', vs:'visible:ts().length>0' }).A($.li().A(
            $.cb().bC( 'iD' ),
            $.ip().b("value:t, disable:iD"),
            $.bt('Del').bC( '$parent.rmT' )))


        $.sp("You have").A()
        $.B("&nbsp;").bT( "inc().length").A()
        $.sp("inc task(s)").A()
        $.sp("- beer!").bV("inc().length==0").A()

        ko.b({

            itemToAdd:ko.o(''),

            allItems:ko.oa(['a','b','c']),

            selectedItems:ko.oa(['d']),
            addItem:function(){
                if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                    vm.allItems.push(vm.itemToAdd());
                    vm.itemToAdd('')
                }
            },

            removeSelected:function(){
                allItems.removeAll(vm.selectedItems())
                selectedItems([])
            },
            sortItems:function(){vm.allItems.sort()}
        })


        vm2={
            ts: ko.oa(),
            nT: ko.o(),
            inc : ko.c(function(){  var vm=this
                    return ko.ut.af(
                        vm.ts(), function(t){return !t.iD()
                        })
                }
            ),
            aT: function(){ this.ts.push({t: ko.o( o.nT()), iD: ko.o( ) }); this.nT('') },
            rmT: function(){ o.ts.remove(this) }
        }

        /*
         ko.b(vm2)
         //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
         */
    }}
function bindins(){bindTxt();httml();ccss();attr();iff();withh();visble(); forEa()

    function bindTxt(){
        $.fn.bT=function(s){s=s||'$data'; return  this.dB( 'text: '+ s)}
        $.fn.bT=function(s){return  this.b('text', s||'$data')}
        $.fn.bT=function(s){s=s||'$data'; return  this.dB( 'text: '+ s)}
        $.dT=function(a){return $.d().bT(a)}
        $.dT=function(a){return $.d().bT(a)}
        $.dT = function (a){return $.d().bT(a)}
        $.h1T=$.h1Bt=function(a,b){
            var h1= $.h1(a)
            h1.bT(b||a)
            return h1

        }
        $.h1T = $.h1Bt = function (a, b) {
            var h1 = $.h1(a)
            h1.bT(b || a)
            return h1

        }
        $.h1T=$.h1Bt=function(a,b){
            var h1= $.h1(a)
            h1.bT(b||a)
            return h1

        }
        $.liT=$.liBt=function(a){

            return $.li().bT(a)
        }
        $.liT = $.liBt = function (a) {

            return $.li().bT(a)
        }
        $.liT=$.liBt=function(a){
            return $.li().bT(a)
        }
        $.liT=$.liBt=function(a){return $.li().bT(a)}
        $.pT=function(a){
            var p = $.p()
            p.bT(a)
            return p
        }
        $.pT = function (a) {
            var p = $.p()
            p.bT(a)
            return p
        }
        $.pT=function(a){
            var p = $.p()
            p.bT(a)
            return p
        }
        $.sT=$.spT= function(a,b){
            a=a||'$data'
            return $.sp(b).bT(a)
        }
       $.spT=$.spBt=function(a,b){return $.sp(b).bT(a)}
        $.sT=$.spT= function(a,b){ return $.sp(b)
            .bT(a||'$data')
        }
        $.sT = $.spT = function (a, b) {
            a = a || '$data'
            return $.sp(b).bT(a)
        }
        $.tdT = function (a, b) {
            var td = $.td()
            td.bT(a)
            if (A(b)) {
                _.e(b, function (el) {
                    td.A(el)
                })
            }
            return td
        }
        $.tdT=function(a,b){var td=$.td()
            td.bT(a)
            if(A(b)){
                _.e(b,function(el){
                    td.A(el)
                })}
            return td
        }
        $.tdT=function(a,b){var td=$.td()
            td.bT(a)
            if(A(b)){_.e(b,function(el){td.A(el)})}
            return td
        }
    }


    function httml(){
        $.fn.bH=function(s){return this.dB('html: '+ s  )}
        $.fn.bH=function(s){return this.b('html', s  )}
        $.fn.bH = function (s) {
            return this.dB('html: ' + s)
        }
        $.dH=function(a){return $.d().bH(a)}
        $.dH=function(a){return $.d().bH(a)}
        $.dH = function (a) {
            return $.d().bH(a)
        }
    }
    function ccss(){
        $.fn.bS=function(s){return this.b('css', s  )}
        $.fn.bS = function (s) {
            return this.dB('css: ' + s)
        }
        $.fn.bS=function(s){return this.dB('css: '+ s  )}
        $.fn.bY=$.fn.bSy=function(s){return this.b('style', s  )}
        $.fn.bY=$.fn.bSy=function(s){return this.dB('style: '+ s  )}
        $.fn.bY = $.fn.bSy = function (s) {
            return this.dB('style: ' + s)
        }
    }
    function attr() {
        $.fn.bA= $.fn.bAt= function(s){return this.b('attr', s  )}
        $.fn.bA= $.fn.bAt= function(s){
            return this.dB('attr: '+ s  )}
        $.fn.bA = $.fn.bAt = function (s) {
            return this.dB('attr: ' + s)
        }
        $.aA=function(a,b,c,d){return $.a(b,c,d).bA(a)}
        $.aA=function(a,b,c,d){
            return $.a(b,c,d).bA(a)
        }
        $.aA = function (a, b, c, d) {
            return $.a(b, c, d).bA(a)
        }
    }
    function iff() {
        $.fn.bI= $.fn.bIf=function(s){return this.b('if', s  )}
        $.fn.bI = $.fn.bIf = function (s) {
            return this.dB('if: ' + s)
        }
        $.fn.bI= $.fn.bIf=function(s){return this.dB('if: '+ s  )}
        $.fn.bN= $.fn.bIN=function(s){return this.dB('ifnot: '+ s  )}
        $.fn.bN= $.fn.bIN=function(s){return this.b('ifnot', s  )}
        $.fn.bN = $.fn.bIN = function (s) {
            return this.dB('ifnot: ' + s)
        }
        $.dIf=function(a,b){
            var d =  $.d().bI(a)
            if(A(b)){_.e(b,function(b){d.A(b)})}
            return d
        }
        $.dIf=function(a,b){
            var d =  $.d().bI(a)
            if(A(b)){_.e(b,function(b){d.A(b)})}
            return d
        }
        $.dIf = function (a, b) {
            var d = $.d().bI(a)
            if (A(b)) {
                _.e(b, function (b) {
                    d.A(b)
                })
            }
            return d
        }
        $.pI = function (a, b, c, d) {
            var p = $.p(b, c, d).bI(a)
        }
        $.pI=function(a,b,c,d){
            var p= $.p(b,c,d).bI(a)
        }
        $.pI=function(a,b,c,d){
            var p= $.p(b,c,d).bI(a)
        }

        IF=function(){$.x('x')
            $.cC('dispMs')
            $.sp('Disp ms')
            $.pI('dispMs','Here is a message. Astonishing')
            ok({dispMs: ko.o(1)})
        }
    }
    function withh() {
        $.fn.bW=function(s){return this.b('with', s  )}
        $.fn.bW=function(s){return this.dB('with: '+ s  )}
        $.fn.bW = function (s) {
            return this.dB('with: ' + s)
        }
        $.dW = $.dBw = function (a, b) {

            var d = $.d().bW(a)
            if (A(b)) {
                _.e(b, function (b) {
                    d.A(b)
                })
            }
            return d
        }
        $.dW = $.dBw = function (a, b) {

            var d = $.d().bW(a)
            if (A(b)) {
                _.e(b, function (b) {
                    d.A(b)
                })
            }
            return d
        }
        $.dW = $.dBw = function (a, b) {
            var d = $.d()
                .bW(a)
            if (A(b)) {
                _.e(b, function (b) {
                    d.A(b)
                })
            }
            return d
        }
        $.dW = $.dBw = function (a, b) {
            var d = $.d().bW(a)
            if (A(b)) {
                _.e(b, function (b) {
                    d.A(b)
                })
            }
            return d
        }
    }
    function visble() {
        $.fn.bVs=function(s){return this.dB('visible: '+ s)}
        $.fn.bVs = function (s) {
            return this.dB('visible: ' + s)
        }
        $.fn.bVs=function(s){return this.b('visible', s)}
        $.spVs = function (a) {
            return $.sp().b('vs', a)
        }
        $.spVs = function (a) {
            return $.sp().b('vs', a)
        }
        $.spVs = function (a) {
            return $.sp().b('vs', a)
        }
    }
    function forEa(){
        $.fn.bE=function(s){return this.dB( 'foreach: '+ s )}
        $.fn.bE=function(s){ return this.b('foreach', s)}
        $.fn.koE=$.fn.eKo= $.fn.bindKOEach = fe = forEach =function(a){return this.bindKO('fe',a)}
        $.fn.eD=$.fn.eB= $.fn.bindKOEachData = feD = forEachData = function (a) {return this.bindKOEach('$data.' + a)}
        $.dE = function (a, b) {var d = $.d().bE(a)
            if (A(b)) {
                _.e(b, function (el) {
                    d.A(el)
                })
            }
            else if (S(b)) {
                d.A(b)
            }
            return d
        }
        $.uE=$.ulE=function(a,b,c){var g=G(arguments)

            var ul=  $.ul().bE(a)

            if(c){
                b= $.li( _.r(g) )
            }

            else if(O(b) && !A(b)){
                b=[b]
            }

            if(A(b)){
                _.e(b,function(el){
                    ul.A(el)
                })
            }


            else if(S(b)){
                ul.A(b)
            }
            return  ul
            function old(){


                $.uE =$.uE=$.ulE=function(a,b){

                    var ul=  $.ul().bE(a)
                    if(A(b)){
                        _.e(b,function(el){
                            ul.A(el)
                        })}
                    else if(S(b)){
                        ul.A(b)
                    }
                    return  ul
                }

            }
        }
        $.U = function () {
            var g = G(arguments)
            return $.uE(g.f, [$.li(g.s)])
        }
        $.olE=$.olBe=function(a,b){var ol= $.ol().bE(a)

            if(b){ol.A(b)}
            return ol
        }
        $.tBE=function(a,b){
            var tB= $.tB()
            tB.bE(a)
            if(A(b)){_.e(b, function(el){tB.A(el)})}
            return tB
        }
        $.uLE=function(a){var g=G(arguments);return $.ulE(a, $.li(g.r) )}
    }
}

function formBind(){value();textInput();checked();options();click();event();submit();enable();hasFocus()
    function value(){
        $.fn.bV=function(s){var g=G(arguments)
            str = "value: " + s
            if(!g.n){str += ", valueUpdate: 'afterkeydown'"}
            this.b(  str )
            return this
        }
        $.fn.bV=function(s){var g=G(arguments)
            str = "value: " + s
            if(!g.n){str += ", valueUpdate: 'afterkeydown'"}
            this.dB(  str )
            return this}
        $.fn.bV = function (s) {
            var g = G(arguments)
            str = "value: " + s
            if (!g.n) {
                str += ", valueUpdate: 'afterkeydown'"
            }
            this.dB(str)
            return this
        }
        $.iV=$.ipV=$.ipBv=function(){var g=G(arguments),ip
            ip = $.ip()
            ip.bV.apply(ip, g)
            return ip
        }
        /*
         $.ipV=$.ipBv=function(){
         var g=G(arguments),
         ip = $.ip(),
         ip.bV.apply(ip, g)
         return ip
         }*/
    }
    function textInput(){
        $.fn.bTi=function(a){return this.b({ti: a})}
        $.fn.bTI=function(s){return this.dB('textInput: '+ s)}
        $.fn.bTI=function(s){return this.b('textInput', s)}
        $.ipTi=function(a){
            return $.ip().bTi(a)
        }
        $.pwTi=function(a){
            return $.pw().bTi(a)}
    }
    function checked(){
        $.fn.bC=function(s){return this.b('checked', s)}
        $.fn.bC=function(s){return this.dB('checked: '+ s)}
        $.cC=$.cbC=function(a){
            if(U(a)){a='$'}
            return $.cb().bC(a)
        }
        $.cC=$.cbC=function(a){
            return $.cb().bC(a)
        }
        $.cC = $.cbC = function (a) {
            return $.cb().bC(a)
        }
        $.cKO=function(m, b, v){
            var cb=$.cb(),
                p = $.p().A($.sp().A(m),
                    cb.bC( b))
            if(v){ cb.v(v)}
            return p

        }
        checkbox= cbKO = cb2 = function (m, binding, val) {

            var cbox = $.ip().type('checkbox'),

                pg = $.p().A(
                    $.sp().A(m),

                    cbox.koBind('checkbox', binding)
                )

            if (val) {
                cbox.val(val)
            }

            return pg
        }
    }
    function options(){
        $.fn.bO=function(s){return this.b('options', s)}
        $.fn.bO=function(s){return this.dB('options: '+ s)}
        $.fn.bSO=function(s){return this.dB('selectedOptions: '+ s)}
        $.fn.bSO=function(s){return this.b('selectedOptions', s)}
        $.sO=$.slO=function(a){ return $.sl().bO(a) }
        $.sO = $.slO = function (a) {
            return $.sl().bO(a)
        }
        $.sO=$.slO=function(a){
            return $.sl().bO(a)
        }
        SLOP=function(){$.z()


            ok({
                cunts : $oa('Fra','Ger','Spa'),
                selCunts : $oa('Ger')
            })




            $.p('where go?:').A(
                $.sl().b({
                    o:'cunts',   so: 'selCunts'
                }).sz(5).mlt() )

            $.in(function(){
                vm.selCunts.push('Fra')
            }, '*')


            // 1st only Ger is selected, then later Fra too


        }
//bind 'option'
        KOSL=function(n,v){$.x('o').h1('dests')

            $.slO('cunts')

            ok('cunts',
                ko.oa('Fran', 'Ger', 'Spa'))

            $.in(2,function(){   vm.cunts.push('Chi')},
                '*'
            )
        }
//broken select and inputs
        KOC=function(){$.z()

            $.ip('r').at({
                name:'choices',
                value:'summary'
            }).bC('selectedView');
            $.sp('summary').A()

            $.ip('r').at({name:'choices',value:'details'}).bC('selectedView'); $.sp('details').A(); $.hr().A()

            $.d().bT("{name: templateToUse, " + "foreach: articles }")

            $.scrp("summary").A().A($.d().bT('title')),
                $.scrp('details').A(
                    $.d([$.h2().bT('title'), $.p().bT('content'),
                        $.bt('edit').b$('$parent.selectedArticle') ]) )

            $.scrp('edit').A().A(
                $.d([$.ip().bV('title'), $.br(), $.ip().bV('content') ])
            )
            ok({
                articles: [
                    {id: 1,title: "Article One",content: "Content for article one."},
                    {id: 2,title: "Article Two",content: "Content for article two."},
                    {id: 3,title: "Article Three",content: "Content for article three."}

                ],
                selectedView: ko.o("summary"),
                selectedArticle: ko.o(),
                templateToUse:function(i){
                    return i===vm.selectedArticle()? 'edit' :vm.selectedView()}

            })
        }
    }
    function click(){
        $.fn.b$=function(s){return this.dB('click: '+ s  )}
        $.fn.b$=function(s){return this.b('click', s  )}
        $.a$=function(t,fn){
            return $.a(t).b('$', fn)}
        $.a$=function(t,fn){
            return $.a(t).b('$', fn)
        }
        $.a$=function(t,fn){return $.a(t).b('$', fn)}
        $.bt$ = $.btB$ = function (a, b, c) {
            var bt = $.bt(a).b$(a)

            if (c) {
                bt.bEn(c)
            }

            return bt
        }
        $.bt$=$.btB$=function(a,b){
            return $.bt(a).b$(a)
        }
        $.bt$=$.btB$=function(a,b,c){
            var bt=   $.bt(a).b$(a)

            if(c){bt.bEn(c)}

            return bt
        }
        $.bt$=$.btB$=function(a,b,c){
            var bt=   $.bt(a).b$(a)
            if(c){bt.bEn(c)}
            return bt
        }
        $.s$=function(a,b,c,d){ return $.sb(b,c,d).b$(a) }
        $.s$ = function (a, b, c, d) {
            return $.sb(b, c, d).b$(a)
        }
        $.s$=function(a,b,c,d){return $.sb(b,c,d).b$(a)}
        $.$bt=function(a,b){var g=G(arguments)

            b=b||a
            if(g.n){
                b = '$parent.'+b
            }

            return $.bt(a).b$(b)

        }
        $.$bt=function(a,b){var g=G(arguments)

            b=b||a
            if(g.n){
                b = '$parent.'+b
            }

            return $.bt(a).b$(b)

        }
    }
    function event(){
        $.fn.bEv=function(s){return this.dB('event: '+ s  )}
        $.fn.bEv=function(s){return this.b('event', s  )}
    }
    function submit(){
        $.fn.bSb=function(s){return this.dB('submit: '+ s  )}
        $.fn.bSb=function(s){return this.b('submit', s  )}
        $.fSb=function(a,b){var f= $.f()
            f.b({sb:a})
            if(A(b)){_.e(b,function(el){
                f.A(el)
            })}
            return f}
        $.fSb=$.fBsb=function(a,b){

            var f = $.f()

            f.bSb(a)

            if(A(b)){_.e(b, function(b){
                f.A(b)
            })}


            return f

        }
        $.fSb = $.fBsb = function (a, b) {

            var f = $.f()

            f.bSb(a)

            if (A(b)) {
                _.e(b, function (b) {
                    f.A(b)
                })
            }


            return f

        }
        $.fSb=function(a,b){
            var f= $.f()

            f.b({sb:a})

            if(A(b)){_.e(b,function(el){
                f.A(el)
            })}
            return f}
        $.fSb=function(a,b){var f= $.f()
            f.b({sb:a})
            if(A(b)){_.e(b,function(el){
                f.A(el)
            })}
            return f
        }
        $.fSb=$.fBsb=function(a,b){var f = $.f()
            f.bSb(a)
            if(A(b)){_.e(b, function(b){ f.A(b) })}
            return f
        }
        $.fSb=$.fBsb=function(a,b){

            var f = $.f()

            f.bSb(a)

            if(A(b)){_.e(b, function(b){
                f.A(b)
            })}


            return f

        }


    }
    function enable(){
        $.fn.bEn=function(s){return this.dB('enable: '+ s  )}
        $.fn.bEn=function(a){return this.b('en', a)}
        $.fn.bD=function(s){return this.dB('disable: '+ s  )}
        $.fn.bD=function(s){return this.b('disable', s  )}
    }
    function hasFocus(){
        $.fn.bF=function(s){return this.b('hasFocus', s)}
        $.fn.bF=function(s){return this.dB('hasFocus: '+ s)}

    }

}