preKo();coreKo();coreBinds();moreBinds();lates();lovely()
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
function lovely() {

    IFFF = function () {
        $.x('x')
        $.cC('dispMs');
        $.sp('Disp ms')
        $.pI('dispMs', 'Here is a message. Astonishing')
        ok({dispMs: $o(1)})

    } //does nuttin
//bind cb and bind ip to 'enable'
    ZI = function () {
        z()

        $.dA('y', 100, 300, 200, 100)
            .b('t', 'name')
        $.ip().b('ti', 'name')
        vm = {name: $o('zi')}
        ko.ab(vm)
    }//basic databinding example
    CUNTS = KOSL = SELECTEDOPTIONS = function (n, v) {
        $.x('o').h1('dests')
        $.sO('cunts')
        ok('cunts', $oa('Fran', 'Ger', 'Spa'))
        _.in(2, function () {
            vm.cunts.push('Chi')
        })
    }
    TEXTROOT = K0IP = KOIP = function () {
        $.z('x')
        unTI = $.p('Login name:').A($.ipTi('un'))
        pwTI = $.p('Pw:').A($.pwTi('pw'))
        $('body').A('the viewModel: ').A(
            $.pre().bT(
                'ko.toJSON($root, null, 2)'
            ))

        ok({
            un: $o(''),
            pw: $o('abc')
        })
    }
    TIARRAY = K00 = KO0 = function () {
        $l('KO0');
        $.x();

        $.ipTi('n');//textInput
        $.h1T('n');//h1 text (read only) // $.dA('b',100,300,200,'+').bT('n')
        //ul each 'array'
        $.ulE('arr', [$.liT()])
        $.sm().b$('A')
        ok({
            n: $o('zi'),
            arr: $oa(),
            A: function () {
                this.arr.push(
                    this.n())
            }
        })
        _.in(1, function () {
            vm.n('girf')
            _.e(['a', 'b', 'c'], function (i) {
                vm.arr.push(i)
            })
        })
    }
    TBPEEP = K0E = KOE = function () {

        tbHd = $.tH([
            $.tr([
                $.th('F'), $.th('L')])])  // (not tableHTML)

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
        ok('peep', [{f: 'a', l: 'A'}, {f: 'b', l: 'B'}, {f: 'c', l: 'C'}]
        )


    }
    BINDHTML = KOH = function () {
        $.z().dH('details')
        ok('details', $o())
        _.in(2, function () {
            vm.details(
                "<em>For details, view report <a href='report.html'>here</a>.</em>")
        })
    }
    KOBVSS = function () {
        $.z('y').h1('see me if true!').bVs('vs')
        ok('vs', ko.o(1))
        _.in(function () {
            vm.vs(0)
            _.in(function () {
                vm.vs(1)
            })
        })
    }//bind 'visibile' to a boolean
    OPSEL = SELOP = function () {
        $.x(null, 'selectedOptions')
        $.p(
            'Where you want to go?',
            $.sl().at({size: 5, multiple: true}).b({
                o: 'available', so: 'chosen'
            }))
        ok({
            available: $oa(['France', 'Germany', 'Spain']),
            chosen: $oa(['Germany'])
        })
        _.in(function () {
            vm.chosen.push('France')
        })
    }
    KOFCC = function () {
        $.x()

        $.p('Name:').A(
            $.ip().b({v: 'editing', v: 'name', f: 'editing'}),
            $.d('r').b({v: '!editing()', t: 'name', $: 'edit'})
        )

        $.p('Click the name to edit it; click elsewhere to apply changes')
        function VM(n) {
            var vm = this
            vm.name = $o(n)
            vm.editing = $o()
            vm.edit = function () {
                vm.editing(true)
            }
        }

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
    ATTRIBUTS = KOATT = KOAT = function () {
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
    ROOOT = function () {
        $.x('x')
        $.uE('fs', [
            $.li().b({
                t: '$data',
                s: '{selected:$data==$root.chFI()}',
                $: '$root.gtf'
            })
        ]).K('fs')

        ok({
            fs: ['I', 'A', 'Se', 'Sp'],
            chFI: $o(),
            gtf: function (f) {
                $l('click: ' + 'f: ' + f + ', this: ' + this)
                f = f || 'frog'
                vm.chFI(f)
            }
        })
    }
}
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
ROOT1=function(){$.x('x')
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
SPAM=function(){$.x('o','spam')
    $.p('spam? ').A($.cbC('spam'))
    ok({   spam:$o(1)   })
    $.in(2, function(){   vm.spam(0)   })
}
function listAdd(){

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
}
function cherryBarn(){
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
}
function comput() {
//bT,bV and computed
    COMP = function () {
        $.z().h1('KNOCKOUT')

        $.d([
            $.p('F: ', $.b().bT('f')),
            $.p('L: ', $.b().bT('l')),
            $.p('F: ', $.ip().bV('f')),
            $.p('L: ', $.ip().bV('l')).id('l'),
            $.p('L: ', $.b().bT('fL')),
            $.bt('caps').b$('capL')
        ]).A()


        ok({
            f: ko.o('j'),
            l: ko.o('y'),
            fL: ko.c(function () {
                return this.f() + ' ' + this.l()
            }),
            capL: function () {
                this.l(S.tU(this.l()))
            }
        })


    }
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


    }
}
function advanced() {
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
    }//broken select and inputs

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

    plan()
    function plan(){
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
        PLANS = [

            {name: "Mercury", type: "rock"},
            {name: "Venus", type: "rock"},
            {name: "Earth", type: "rock"},
            {name: "Mars", type: "rock"},
            {name: "Jupiter", type: "gasgiant"},
            {name: "Saturn", type: "gasgiant"},
            {name: "Uranus", type: "gasgiant"},
            {name: "Neptune", type: "gasgiant"}
        ]}

}