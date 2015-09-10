preKo();coreKo();coreBinds();moreBinds();lates()
function preKo(){

}
function coreKo(){
    koPt();
    obA();
    koo();
    okie();
    koob()
    function koPt() {
        ko.u = ko.ut = ko.utils
        ko.o = ko.observable
        ko.oa = ko.oA = ko.observableArray
        ko.c = ko.computed
        ko.pc = ko.pureComputed
        ko.do = ko.dependentObservable
        ko.aB = ko.ab = ko.applyBindings
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

    function obA() {
        oA = ko.observableArray.fn // inhertince extension :)
        oA.p = function (i) {
            var oA = this
            oA.push(i)
            return oA
        }

    }

    function koo() {
        $o = ko.o = function (a) {
            return ko.observable(a)
        }
        $oa = ko.oa = function (a) {
            var g = G(arguments), a = g[0]
            return ko.observableArray(g.A_ ? g.f : g)

        }
    }

    function okie() {
        ok = function () {
            var g = G(arguments), ob
            g.p ? _.in(0, aB) : aB()
            function aB() {
                vm = g.S_ ? // pass a single key, value -> {key:value}
                    $Ob(g.f, g.s, g.n ? '-' : null) :
                    g.u ? // pass nothing -> {$: $o(1)}
                    {$: $o(g.n ? 0 : 1)} :
                        // ???? pass plain object and element(string or ob?) :)
                        (F(g.f) || N(g.f) || A(g.f) ) ?
                            // pass just a value -> {$: value}
                        {$: g.f} :
                            // pass just plain obj (normal)
                            g.f
                ko.aB(vm)

            }
        }
        $Ob = function (a, b) {
            var g = G(arguments),
                o = {k: g.f, v: g.s}
            var ob = {}
            if (S(o.k)) {
                o.v = D(o.v) ? o.v :
                    $o(g.n ? 0 : 1)
                ob[o.k] = o.v
            }
            return ob
        }
        OK = function (o, b) {
            var g = G(arguments), ob
            return g.S_ ?
                ko.aB(vm = $Ob(o, b)) : g.O ?
                ko.aB(vm = g[0]) :
                ko
            function alt() {
                OK = function (a) {
                    var g = G(arguments), ob
                    g.push('+')
                    return ok.apply(null, g)
                }
            }
        }
    }

    function koob() {
        KOob = {
            $: 'click', ev: 'event',
            sm: 'submit', sb: 'submit',
            en: 'enable', d: 'disable',
            v: 'value', ti: 'textInput',
            f: 'hasFocus',
            c: 'checked', ch: 'checked',
            o: 'options', so: 'selectedOptions', sO: 'selectedOptions', O: 'selectedOptions',
            //
            t: 'text', h: 'html', s: 'css', y: 'style',
            a: 'attr', e: 'foreach', i: 'if', n: 'ifnot', w: 'with',
            V: 'valueUpdate', vs: 'visible', u: 'uniqueName',
            tp: 'template', cm: 'component'
        }
        $KOob = function self(k, v) {
            var o = []
            var g = G(arguments)
            if (g.O) {
                _.e(g.f, function (v, k) {
                    o.push(self(k, v))
                })
                return o.join()
            }
            return (KOob[k] ? KOob[k] : k) + (v ? (':' + v) : '')
        }
        $.fn.b = $.fn.ko = function (a, b) {
            $.fn.dB = function (dB) {
                this.at({'data-bind': dB});
                return this
            }
            this.dB(
                O(a) ? $KOob(a) :
                    hasColon(a) ? a :
                        $KOob(a, b || '$'))
            function hasColon(str) {
                return str.indexOf(':') != -1
            }

            return this
        }
    }
}
function coreBinds(){
    $.fn.bI = $.fn.bIf = function (s) {
        return this.b('if', s)
    }
    $.fn.bVs = function (s) {
        return this.b('vs', s)
    }
    $.fn.bT = function (s) {
        return this.b('text', s || '$data')
    }
    $.fn.bH = function (s) {
        return this.b('html', s)
    }
    $.fn.bTi = $.fn.bTI = function (a) {
        return this.b({ti: a})
    }
    $.fn.bE =  function (s) {
        // if called from $.fn.eD = $.fn.eB =  feD = ... use '+'
        var g=G(arguments)
        if(g.p){
            return '$data.' + s
        }
        return this.b('foreach', s)
    }
    $.fn.bW = function (s) {
        return this.b('with', s)
    }
    $.fn.bC = function (s) {
        return this.b('c', s)
    }
    $.fn.bO = function (s) {
        return this.b('o', s)
    }
    $.fn.bSO = function (s) {
        return this.b('so', s)
    }
    $.fn.b$ = function (s) {
        return this.b('click', s)
    }
    $.dI= $.dIf = function (a, b) {
        var d = $.d().bI(a)
        if (A(b)) {
            _.e(b, function (b) {
                d.A(b)
            })
        }
        return d
    }
    $.pI = function (a, b, c, d) {
        return $.p(b, c, d).bI(a)
    }
    $.spVs = function (a) {
        return $.sp().bVs(a)
    }
    $.dT = function (a) {
        return $.d().bT(a)
    }
    $.sT = $.spT = function (a, b) {
        return $.sp(b).bT(a || '$data')
    }
    $.pT = function (a) {
        var p = $.p()
        p.bT(a);
        return p
    }
    $.h1T = function (a, b) {
        var h1 = $.h1(a)
        h1.bT(b || a)
        return h1

    }
    $.liT = function (a) {
        return $.li().bT(a)
    }
    $.tdT = function (a, b) {
        var td = $.td();
        td.bT(a)
        if (A(b)) {
            _.e(b, function (el) {
                td.A(el)
            })
        }
        return td
    }
    $.dH = function (a) {
        return $.d().bH(a)
    }
    $.IP=$.ipTi = function (a) {
        return $.ip().bTi(a)
    }
    $.pwTi = function (a) {
        return $.pw().bTi(a)
    }
    $.dE = function (a, b) {
        var d = $.d().bE(a)
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
    $.uE = $.ulE = function (a, b, c) {
        var g = G(arguments)

        var ul = $.ul().bE(a)

        if (c) {
            b = $.li(_.r(g))
        }

        else if (O(b) && !A(b)) {
            b = [b]
        }

        if (A(b)) {
            _.e(b, function (el) {
                ul.A(el)
            })
        }


        else if (S(b)) {
            ul.A(b)
        }
        return ul
        function old() {


            $.uE = $.uE = $.ulE = function (a, b) {

                var ul = $.ul().bE(a)
                if (A(b)) {
                    _.e(b, function (el) {
                        ul.A(el)
                    })
                }
                else if (S(b)) {
                    ul.A(b)
                }
                return ul
            }

        }
    }
    $.U = function () {
        var g = G(arguments)
        return $.uE(g.f, [$.li(g.s)])
    }
    $.olE = function (a, b) {
        var ol = $.ol().bE(a)

        if (b) {
            ol.A(b)
        }
        return ol
    }
    $.tBE = function (a, b) {
        var tB = $.tB()
        tB.bE(a)
        if (A(b)) {
            _.e(b, function (el) {
                tB.A(el)
            })
        }
        return tB
    }
    $.uLE = function (a) {
        var g = G(arguments);
        return $.ulE(a, $.li(g.r))
    }
    $.dW =   function (a, b) {
        var d = $.d().bW(a)
        if (A(b)) {
            _.e(b, function (b) {
                d.A(b)
            })
        }
        return d
    }
    $.c$=function(fn){
        return $.cb().b$(fn)
    }

    $.cC = $.cbC = function (a) {if (U(a)) {a = '$'}
        return $.cb().bC(a)
    }
    $.sO = function (a) {
        return $.sl().bO(a)
    }
    $.a$ = function (t, fn) {
        return $.a(t).b('$', fn)
    }
    $.bt$ = $.btB$ = function (a, b, c) {
        var bt = $.bt(a).b$(a)

        if (c) {
            bt.bEn(c)
        }

        return bt
    }
    $.s$ = function (a, b, c, d) {
        return $.sb(b, c, d).b$(a)
    }
    $.$bt = function (a, b) {
        var g = G(arguments)

        b = b || a
        if (g.n) {
            b = '$parent.' + b
        }
        return $.bt(a).b$(b)

    }

}
function moreBinds(){
    valNot();cssAttr();eventEnable()
    function valNot() {
        $.fn.bV = function (s) {
            var g = G(arguments)
            str = "value: " + s
            if (!g.n) {
                str += ", valueUpdate: 'afterkeydown'"
            }
            this.b(str)
            return this
        }
        $.iV = $.ipV = $.ipBv = function () {
            var g = G(arguments), ip
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

        $.fn.bN = $.fn.bIN = function (s) {
            return this.b('ifnot', s)
        }
    }

    function cssAttr() {
        $.fn.bS = function (s) {
            return this.b('css', s)
        }
        $.fn.bY = $.fn.bSy = function (s) {
            return this.b('style', s)
        }
        $.fn.bA = $.fn.bAt = function (s) {
            return this.b('attr', s)
        }
        $.aA = function (a, b, c, d) {
            return $.a(b, c, d).bA(a)
        }
    }

    function eventEnable() {
        $.fn.bEv = function (s) {
            return this.b('event', s)
        }
        $.fn.bSb = function (s) {
            return this.b('submit', s)
        }
        $.fn.bEn = function (a) {
            return this.b('en', a)
        }
        $.fn.bD = function (s) {
            return this.b('disable', s)
        }
        $.fn.bF = function (s) {
            return this.b('hasFocus', s)
        }
        $.fSb = $.fBsb = function (a, b) {
            var f = $.f();
            f.bSb(a)
            if (A(b)) {
                _.e(b, function (b) {
                    f.A(b)
                })
            }
            return f
            function old() {
                $.fSb = function (a, b) {
                    var f = $.f();
                    f.b({sb: a})
                    if (A(b)) {
                        _.e(b, function (el) {
                            f.A(el)
                        })
                    }
                    return f
                }
            }
        }
    }

    $.fn.bU = $.fn.bUN = function (s) {
        return this.b('uniqueName', s)
    }
    $.fn.bTp = function (s) {
        return this.b('template', s)
    }
}
function lates(){



//bind cb 'checked' to boolean
    SPAM=function(){$.x()
        $.cbC('spam').a2( $.p('spam? ') )
        $b({ spam: ko.o(1)})
        _.in(2, function(){vm.spam(0);$.c$()})
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
                {f:'D',l:'Dd'}
            )
        )
    }

    function old() {
        kO = function () {
            var g = G(arguments)
            return ko.o.apply(ko, g)
        }
        kA = function () {
            var g = G(arguments)
            return ko.oa(g.A_ ? g.f : g)

        }
        bd = knockoutBind2 = function (a) {
            var g = G(arguments), a = g[0]
            if (g.p) {
                a = 'text: ' + a
            }
            if (g.n) {
                a = 'click: ' + a
            }
            if (g.m) {
                a = 'value: ' + a
            }
            if (g.d) {
                a = 'checked: ' + a
            }
            q.attr({'data-bind': a})
            return q
        }


        EVob = {$: 'click', $$: 'dblclick', v: 'mouseover'}
        $.scrp = script = scrp = function (i) {
            return $("<script type='text/html'>").id(i)

        }

    }

//alert:
    $.cKO = function (m, b, v) {
        alert('$.cKO')
        var cb = $.cb(),
            p = $.p().A($.sp().A(m),
                cb.bC(b))
        if (v) {
            cb.v(v)
        }
        return p
        function old() {
            cbKO = cb2 = function (m, binding, val) {
                alert('cbKO cb2')
                var cbox = $.ip().type('checkbox'), pg = $.p().A($.sp().A(m), cbox.b('checkbox', binding))
                if (val) {
                    cbox.val(val)
                }
                return pg
            }
        }
    }
}
IFFF=function(){$.x('x')
    $.cC('dispMs'); $.sp('Disp ms')
    $.pI('dispMs', 'Here is a message. Astonishing')
    ok({dispMs: $o(1)})

} //does nuttin
//bind cb and bind ip to 'enable'
ZI = function () {z()

    $.dA('y', 100, 300,200,100)
        .b('t', 'name')
    $.ip().b('ti', 'name')
    vm = {name: $o('zi')}
    ko.ab(vm)
}//basic databinding example
CUNTS=KOSL=SELECTEDOPTIONS=function(n,v){$.x('o').h1('dests')
    $.sO('cunts')
    ok('cunts', $oa('Fran', 'Ger', 'Spa') )
    _.in(2,function(){vm.cunts.push('Chi') })
}
TEXTROOT= K0IP=KOIP=function(){ $.z('x')
    unTI= $.p('Login name:').A($.ipTi('un'))
    pwTI=$.p('Pw:').A($.pwTi('pw') )
    $('body').A('the viewModel: ').A(
        $.pre().bT(
            'ko.toJSON($root, null, 2)'
        ))

    ok({
        un: $o(''),
        pw: $o('abc')
    })
}
TIARRAY=K00=KO0 =function(){$l('KO0'); $.x();

    $.ipTi('n');//textInput
    $.h1T('n');//h1 text (read only) // $.dA('b',100,300,200,'+').bT('n')
    //ul each 'array'
    $.ulE('arr', [$.liT()])
    $.sm().b$('A')
    ok({
        n:   $o('zi'),
        arr: $oa(),
        A:   function(){
            this.arr.push(
                this.n() )  }
    })
    _.in(1, function(){vm.n('girf')
        _.e(['a','b','c'], function(i){
            vm.arr.push(i)})})
}
TBPEEP= K0E= KOE=function(){

    tbHd=$.tH([
        $.tr([
            $.th('F'),  $.th('L')   ])])  // (not tableHTML)

    $.x().t([tbHd,
        $.tBE('peep', [// <- $.fn.tE= $.fn.tBE ?
            $.tr([
                $.tdT('f'),
                ', ',
                $.tdT('l').col('w')
            ])
        ])
    ])

    $('body').C('r')
    ok( 'peep',  [{f:'a',l:'A'}, {f:'b',l:'B'}, {f:'c',l:'C'}]
    )


}
BINDHTML=KOH=function() {$.z().dH('details')
    ok('details', $o())
    _.in(2,function () {
        vm.details(
            "<em>For details, view report <a href='report.html'>here</a>.</em>")
    } )}
KOBVSS=function(){$.z('y').h1('see me if true!').bVs('vs')
    ok('vs', ko.o(1))
    _.in(function(){vm.vs(0)
        _.in(function(){
            vm.vs(1)
        })})
}//bind 'visibile' to a boolean
OPSEL=SELOP=function(){$.x(null, 'selectedOptions')
    $.p(
        'Where you want to go?',
        $.sl().at({size: 5, multiple: true}).b({
            o: 'available', so: 'chosen'
        }))
    ok({
        available  : $oa(['France', 'Germany', 'Spain']),
        chosen  : $oa(['Germany'])})
    _.in(function(){
        vm.chosen.push('France')})
}
KOFCC=function(){$.x()

    $.p('Name:').A(

        $.ip().b({v:'editing',   v:'name', f:'editing' }),
        $.d('r').b({v:'!editing()', t:'name', $:'edit'})
    )

    $.p('Click the name to edit it; click elsewhere to apply changes')
    function VM(n) {var vm=this
        vm.name = $o(n)
        vm.editing = $o()
        vm.edit = function() {vm.editing(true) }}
    ok(new VM("Bert Bertington"))
}
KOENN = function () {
    $.x()

    $.p().A(
        $.cbC('hasPhone'), 'I have phone'
    )

    $.p('Your cellphone number').A(
        $.ip().b({v: 'num', en: 'hasPhone'}))

    ok({hasPhone: $o(0), num: ''})

}//bind cb and bind ip to 'enable'
ATTRIBUTS=KOATT=KOAT = function () {
    $.x()
    $.aA(
        '{href:url, title:tt}',
        'report'
    )

    ok({
        url: $o("year-end.html"),
        tt: $o("Report including final year-end statistics")
    })
}
ROOOT=function(){$.x('x')
    $.uE('fs', [
        $.li().b({
            t:'$data',
            s:'{selected:$data==$root.chFI()}',
            $:'$root.gtf'
        })
    ]).K('fs')

    ok({
        fs:['I','A','Se','Sp'],
        chFI: $o(),
        gtf: function(f){$l('click: ' + 'f: '+ f + ', this: '+this)
            f = f||'frog'
            vm.chFI(f)
        }
    })
}
function advanced() {

    CHL = function () {
        $.x('o');
        h1 = $.h1('shown!')
        // h1.slV()
        $.cC()
        ok()
    }


    GRXX = function () {
        $.x('x', 'grx')

        /*
         $CSS({


         body { font-family: arial; font-size: 14px; }
         .liveExample { padding: 1em; background-color: #EEEEDD; border: 1px solid #CCC; max-width: 655px; }
         .liveExample input { font-family: Arial; }
         .liveExample b { font-weight: bold; }
         .liveExample p { margin-top: 0.9em; margin-bottom: 0.9em; }
         .liveExample select[multiple] { width: 100%; height: 8em; }
         .liveExample h2 { margin-top: 0.4em; }

         .ko-grid { margin-bottom: 1em; width: 25em; border: 1px solid silver; background-color:White; }
         .ko-grid th { text-align:left; background-color: Black; color:White; }
         .ko-grid td, th { padding: 0.4em; }
         .ko-grid tr:nth-child(odd) { background-color: #DDD; }
         .ko-grid-pageLinks { margin-bottom: 1em; }
         .ko-grid-pageLinks a { padding: 0.5em; }
         .ko-grid-pageLinks a.selected { background-color: Black; color: White; }
         .liveExample { height:20em; overflow:auto }
         //Mobile Safari reflows pages slowly, so fix the height to avoid the need for reflows

         li { list-style-type: disc; margin-left: 20px; }


         })

         */


        $.d().at({'data-bind': 'simpleGrid: gridViewModel'})
        $.bt('add item').at({'data-bind': 'click: addItem'})
        $.bt('sort by name').at({'data-bind': 'click: sortByName'})
        $.bt('   Jump to first page').at({
            'data-bind': 'click: jumpToFirstPage, enable: gridViewModel.currentPageIndex'
        })

        PagedGridModel = function (items) {
            this.items = ko.observableArray(items)
            this.addItem = function () {
                this.items.push({
                    name: "New item", sales: 0, price: 100
                })
            }
            this.sortByName = function () {
                this.items.sort(function (a, b) {
                    return a.name < b.name ? -1 : 1
                })
            }
            this.jumpToFirstPage = function () {
                this.gridViewModel.currentPageIndex(0)
            }
            this.gridViewModel = new ko.simpleGrid.viewModel({
                data: this.items,
                columns: [
                    {headerText: "Item Name", rowText: "name"},
                    {headerText: "Sales Count", rowText: "sales"},
                    {
                        headerText: "Price", rowText: function (item) {
                        return "$" + item.price.toFixed(2)
                    }
                    }
                ],

                pageSize: 4
            })
        }


        ok(
            new PagedGridModel(initialData)
        )

    }

    CUSTOMBINDING = PLANET = function () {
        $.x('g', 'Plan')

        $.p().A(
            $.lb().A(
                $.cC('displayAdvancedOptions'),
                'Display advanced options'
            )
        )

        $.p().A(
            'Show:',
            $.lb([$.ip()]),
            $.lb([$.ip()]),
            $.lb([$.ip()])
        )


        /*
         <p data-bind='fadeVisible: displayAdvancedOptions'>
         Show:
         <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
         <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
         <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
         </p>*/

        $.d([$.d([$.d()])])

        /*

         <div data-bind='template: { foreach: planetsToShow,
         beforeRemove: hidePlanetElement,
         afterAdd: showPlanetElement }'>
         <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
         </div>

         */


        $.p().A(
            $.bt('add rocky plan')
                .b('click: addPlanet.bind($data, "rock")'),

            $.bt('add gas giant')
                .b('click: addPlanet.bind($data, "gasgiant")')
        ).b('fadeVisible: displayAdvancedOptions')

        // Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
        // Could be stored in a separate utility library
        ok(new Planets())
    }


}
messages=[
    {message:'zi',     score:100,     responses:[

        {response:'good coder',
            comments:[{comment:'..eh'}]},
        {response:'cool girl'}
    ]},
    {message:'yano',

        score:3,

        responses:[

            {response:'is cool guy',
                comments:[

                    {comment:'hi'},
                    {comment:'hello'}]},

            {response:'a'},
            {response:'b'},
            {response:'fun'}]}, {message:'is awesome',score:0,responses:[
        {response:'afsdafsd'}]}, {message:'lame',score:20,responses:[
        {response:'weird',comments:[
            {comment:'not!!!!1'}]},
        {response:'lamer',comments:[
            {comment:'fuck ya'}]}]},
    {message:'rocks',score:4,responses:[]}
]
