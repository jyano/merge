$.fn.a2Lb=function(t){t=t||'label:'
    return this.a2($.lb(t))
}
$.scrp = function (i, t) {

    var scr = $("<script type='text/html'>")
    scr.id(i)
    if (t) {
        scr.A(t)
    }
    scr.A()
    return scr
}
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
ko.u = ko.ut = ko.utils
ko.o = ko.observable
ko.oa = ko.oA = ko.observableArray
ko.c = ko.computed
ko.pc = ko.pureComputed
ko.do = ko.dependentObservable
ko.aB= ko.ab = ko.applyBindings
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
oA = ko.observableArray.fn // inhertince extension :)
oA.p = function (i) {
    var oA = this
    oA.push(i)
    return oA
}
$o = ko.o = function (a) {
    return ko.observable(a)
}
$oa = ko.oa = function (a) {var g = G(arguments), a = g[0]
    return ko.observableArray(g.A_ ? g.f : g)

}
OK = function (o, b) {var g = G(arguments), ob
    return g.S_?
        ko.aB( vm =  $Ob(o,b)): g.O?
        ko.aB( vm = g[0]) :
        ko
    function alt(){
        OK = function (a) {var g = G(arguments),ob
            g.push('+')
            return ok.apply(null, g)
        }
    }
}
ok = function () {var g = G(arguments),ob
    g.p ? $.in(0, aB) : aB()
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
KOob= {
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
$KOob=function(k,v){return (KOob[k]?KOob[k]:k)+(v?(':'+v):'')}
koObStr=function(a){var o=[]
    _.e(a, function (v, k) {o.push( $KOob(k,v )  )})
    return o.join()
}
$Ob=function(a, b) {
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
$.fn.dB = function(dB){this.at({'data-bind': dB}); return this}
$.fn.b = $.fn.ko =  function (a, b) {
    this.dB(
        O(a)? koObStr(a):
            hasColon(a)? a:
                $KOob(a, b || '$'))


    function hasColon(str){return str.indexOf(':') != -1}
    return this
}
$.fn.bT=function(s){return  this.b('text', s||'$data')}
$.dT=function(a){return $.d().bT(a)}
$.sT=$.spT=$.spT=$.spBt= function(a,b){ return $.sp(b).bT(a||'$data')}
$.pT=function(a){
    var p = $.p()
    p.bT(a)
    return p
}
$.h1T=$.h1Bt=function(a,b){
    var h1= $.h1(a)
    h1.bT(b||a)
    return h1

}
$.liT=$.liBt=function(a){return $.li().bT(a)}
$.tdT=function(a,b){var td=$.td();td.bT(a)
    if(A(b)){_.e(b,function(el){td.A(el)})}
    return td
}

$.fn.bH=function(s){return this.b('html', s  )}
$.dH=function(a){return $.d().bH(a)}
$.fn.bS=function(s){return this.b('css', s  )}

$.fn.bY=$.fn.bSy=function(s){return this.b('style', s  )}

$.fn.bA= $.fn.bAt= function(s){return this.b('attr', s  )}

$.aA=function(a,b,c,d){return $.a(b,c,d).bA(a)}
$.fn.bI= $.fn.bIf=function(s){return this.b('if', s  )}

$.fn.bN= $.fn.bIN=function(s){return this.b('ifnot', s  )}
$.dIf = function (a, b) {
    var d = $.d().bI(a)
    if (A(b)) {
        _.e(b, function (b) {
            d.A(b)
        })
    }
    return d
}
$.pI=function(a,b,c,d){
    var p= $.p(b,c,d).bI(a)
}

$.fn.bW=function(s){return this.b('with', s  )}

$.dW = $.dBw = function (a, b) {var d = $.d().bW(a)
    if (A(b)) {
        _.e(b, function (b) {
            d.A(b)
        })
    }
    return d
}

$.fn.bVs=function(s){return this.b('visible', s)}
$.spVs = function (a) {return $.sp().b('vs', a)
}

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
//form:
$.fn.bV=function(s){var g=G(arguments)
    str = "value: " + s
    if(!g.n){str += ", valueUpdate: 'afterkeydown'"}
    this.b(  str )
    return this
}
$.iV=$.ipV=$.ipBv=function(){var g=G(arguments),ip
    ip = $.ip()
    ip.bV.apply(ip, g)
    return ip
}/*
 $.ipV=$.ipBv=function(){
 var g=G(arguments),
 ip = $.ip(),
 ip.bV.apply(ip, g)
 return ip
 }*/
$.fn.bTi=$.fn.bTI=function(a){return this.b({ti: a})}
$.ipTi=function(a){
    return $.ip().bTi(a)
}
$.pwTi=function(a){
    return $.pw().bTi(a)}
$.fn.bC=function(s){return this.b('checked', s)}
$.cC=$.cbC=function(a){
    if(U(a)){a='$'}
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
$.fn.bO=function(s){return this.b('options', s)}
$.fn.bSO=function(s){return this.b('selectedOptions', s)}
$.sO=$.slO=function(a){ return $.sl().bO(a) }
$.fn.b$=function(s){return this.b('click', s  )}
$.a$=function(t,fn){return $.a(t).b('$', fn)}
$.bt$ = $.btB$ = function (a, b, c) {
    var bt = $.bt(a).b$(a)

    if (c) {
        bt.bEn(c)
    }

    return bt
}
$.s$=function(a,b,c,d){return $.sb(b,c,d).b$(a)}
$.$bt=function(a,b){var g=G(arguments)

    b=b||a
    if(g.n){
        b = '$parent.'+b
    }

    return $.bt(a).b$(b)

}
$.fn.bEv=function(s){return this.b('event', s  )}
$.fn.bSb=function(s){return this.b('submit', s  )}
$.fSb= $.fBsb=function(a,b){var f = $.f(); f.bSb(a)
    if(A(b)){_.e(b, function(b){f.A(b)})}
    return f

    function old(){
        $.fSb=function(a,b){var f= $.f(); f.b({sb:a})
            if(A(b)){_.e(b,function(el){
                f.A(el)
            })}
            return f}
    }
}
$.fn.bEn=function(a){return this.b('en', a)}
$.fn.bD=function(s){return this.b('disable', s  )}
$.fn.bF=function(s){return this.b('hasFocus', s)}
$.fn.par=function(a,b){this.at('params', a+': ' + b ); return this}
$.fn.bU= $.fn.bUN=function(s){return this.b('uniqueName', s)}
$.fn.bTp=function(s){return this.b('template', s)}
function compon() {



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
    kO = function () {var g = G(arguments)
        return ko.o.apply(ko, g)
    }
    kA = function () {
        var g = G(arguments)
        return ko.oa(g.A_ ? g.f : g)

    }
    bd = knockoutBind2=function(a){
        var g=G(arguments),a=g[0]
        if(g.p){a='text: '+a}
        if(g.n){a='click: '+a}
        if(g.m){a='value: '+a}
        if(g.d){a='checked: '+a}
        q.attr({'data-bind':a})
        return q
    }


    EVob = {$: 'click', $$: 'dblclick', v: 'mouseover'}
    $.scrp = script = scrp = function (i) {
        return $("<script type='text/html'>").id(i)

    }

}