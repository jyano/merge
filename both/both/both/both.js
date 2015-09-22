function core() {
    s$ = S  // ******** must go before 'S' is re-assigned to a bool

    S = function (a) {
        return _.isString(a)
    }

    $J = JSON;
    $A = Array;
    $B = Boolean;
    $N = Number;
    $O = Object;
    $F = Function;
    $S = String;

    $D = Date

    s$ = S
//
    A = _.isArray
    B = _.isBoolean
    D = function (a, b, c) {
        return _.isUndefined(b) ? !_.isUndefined(a)
            : _.defaults.apply(_.defaults, arguments)
    }
    F = function f(a, b, c) {
        //if(_.isDefined(b)){return _.filter(a,b,c)}
        return _.isFunction(a)  // return a.prototype||true

    }
    N = _.isNumber
    O = function (a, b) {
        if (_.isUndefined(b)) {
            return _.isObject(a)
        }

        if (_.isObject(a)) {
            // return  _.extend.apply(_.extend, arguments)

        }
    }

//isAndGet qq !
    Q = function Q(a) {

        if (!_.isObject(a)) {
            return
        }

        if (s$(a.toString()).contains('Window') || a[0]
            && s$(a[0].toString()).contains('Window')) {
            return $(window)
        }
        return a.name === 'q' ? Q(a.q)
            : E(a) ? $(E(a))
            : 0

    }


    S = function (a, b, c) {

        return _.isUndefined(b) ? (_.isString(a) ? $.span().html(a) : 0  )
            : N(b) ? a.substr(b, c)
            : S(b) ? s$(a).startsWith(b)
            : _.some(a, b || F, c)
    }


    U = function u(a, b) {

        if (_.isUndefined(b)) {
            return _.isUndefined(a)
        }

        // return  _.extend.apply(_.extend, arguments)
    }


//
    G = function (a) {
        if (!_.isArguments(a)) {
            return
        }
        var p, n, m, d
        a = _.toArray(a)
        if (_l(a) === '+') {
            p = a.pop()
        }
        if (_l(a) === '-') {
            n = a.pop()
        }
        if (_l(a) === '*') {
            m = a.pop()
        }
        if (_l(a) === '/') {
            d = a.pop()
        }

        return D(a, {

            z: a.length,
            f: _.first(a),
            l: _.last(a),
            r: _.rest(a),
            i: _.initial(a),
            p: p,
            P: !p,
            m: m,
            M: !m,
            d: d,
            D: !d,
            n: n,
            N: !n

        })
    }
//
    $l = function (a) {
        var g = G(arguments)
        _.each(g, function (a) {

            console.log(
                Q(a) ? _o(Q(a))
                    : _.isFunction(a) ? a.toString()
                    : O(a) ? J(a)
                    : a
            )
        })

        return a
    }
    $J=JSON
    $A=Array
    $B=Boolean
    $N=Number
    $O=Object
    $F=Function
    $S=String
    $w=window
    $$w=$(window)


    $l=function(a){var g=G(arguments),v
        if(O(a) && N(a.x) && N(a.y) ){
            v=a.toFixed()
            $l(v.x + ' , ' + v.y)
            return a}
        _.e(g,function(a){
            console.log(
                _.isFunction(a)? a.toString()
                    :O(a)? JSON.stringify(a)
                    :a
            )
        })
        return a
    }

    G=function(arg, str){var a,ag= _.tA(arguments), p, n, m, d,g
        //conflict with N(not neg) and N(g.$ && N(g.f) )
        if(S(ag[0])){
            a=_.tA(ag[1])
            if(S(a[0])){
                a[ag[0]]=a.shift()}}
        else{a=_.tA(ag[0])}
        if(_.l(a)=='+'){p= a.pop()}
        else if(_.l(a)=='-'){

            n=a.pop()}
        else if(_.l(a)=='*'){m=a.pop()}
        else if(_.l(a)=='/'){d=a.pop()}
        if(S(ag[1])&&S(_.l(a))){a[ag[1]]=a.pop()}
        g =  _.df(a, {
            z: a.length,
            f: _.f(a),
            s: a[1],
            t: a[2],
            l: _.l(a),
            r: _.r(a), i: _.i(a),
            p:p, P:!p, m:m, M:!m,
            d:d, D:!d, n:n, N:!n

        })
        g.u=U(g.f);g.U=!g.u
        g.L=g.length
        str=''
        _.t(g.L,function(){str=str+'$'})
        g[str]=1
        //g.N= g.$ && N(g.f);
        g.N = g.$ && N(g.f)
        g.N_ =N(g.f);
        g._N =N(g.l)
        g.$N= N(g.f)
        g.$_N= N(g.s)
        g.S = g.$ && S(g.f)
        g._S = S(g.l)
        g.$S=  g.S_ = S(g.f)
        g.$_S= S(g.s)
        g.O = g.$ && O(g.f)
        g.O_ = O(g.f)
        g._O = O(g.l)

        g.A= g.$ && A(g.f)
        g.A_= A(g.f);
        g._A= A(g.l)


        g.F=g.$ && F(g.f);g.F_=F(g.f);g._F=F(g.l)
        g.SA=  g.$$ && g.S_ && A(g.s)
        g.OO_ = O(g.f) && O(g.s)
        g.e=function(fn,str){var g=this
            if(str){
                g.e(function(g){fn[str](g)})
                return fn}

            _.e(g,fn)
            return g
        }
        g.e0=function(fn){
            _.e(this[0], fn)
        }

        g.e1=function(fn){
            _.e(this[1], fn)}

        g.eR=function(fn){
            _.eR(this, fn)
        }

        g.eF=function(fn){_.e(g.f, fn)}


        g.eS=function(fn){
            this.e(function(k) {
                if (S(k)){fn(k)}})}
        g.G=function(a){
            a=_.clone(a)
            if(g.n){a.push('-')}
            else if(g.p) {a.push('+')}
            else if(g.d) {a.push('/')}
            else if(g.m) {a.push('*')}
            return a}
        g.g = g.G( g )
        g.a=g.ap=function(){var g=this, gg=G(arguments)

            //if(g.A){

            return gg.s?
                $a(gg.s, gg.t, g.f):
                $a(gg.f, g.f)
        }
        g.ush=function(d){var g=this,
            res

            if(U(d)){d=null}

            g.t=g.s
            g.s=g.f
            g.f=d
            res=g.unshift(d)


            return res}
        return _g=g
    }; G._=function(){g=G(arguments); $l(g.L + ' args')}

    U = function u(a, b) {

        if (_.isUndefined(b)) {
            return _.isUndefined(a)
        }

        // return  _.extend.apply(_.extend, arguments)
    }
    A = _.isArray
    B = _.isBoolean
    D = function (a, b, c) {
        return _.isUndefined(b) ? !_.isUndefined(a)
            : _.defaults.apply(_.defaults, arguments)
    }
    F = function f(a, b, c) {
        //if(_.isDefined(b)){return _.filter(a,b,c)}
        return _.isFunction(a)  // return a.prototype||true

    }
    N = _.isNumber
    O = function (a, b) {

        if (_.isUndefined(b)) {
            return _.isObject(a)
        }

        if (_.isObject(a)) {
            // return  _.extend.apply(_.extend, arguments)

        }
    }
    I = function (f, i) {
        var g = G(arguments), clear


        if (F(g[0])) {
            f = g[0];
            i = g[1]
        }

        else {
            f = g[1];
            i = g[0]
        }

        i = !N(i) ? 1000 : i > 5 ? i : i * 1000


        if (g.N) {
            f()
        }

        clear = setInterval(f, i)

        return function () {
            clearInterval(clear)
        }

    }
    AA=  _.AA = _.isNested = function(a){return A(a) && A(a[0])}

    $Dt=function(){var dt =new $D(); return dt }

    _.gT = function (){  return $Dt().getTime()  }
    _.sT= _.sI=function(a,b){return setTimeout(a,b)}
    _.sI=function(a,b){return setInterval(a,b)}
    _.in=   function(time, fn){var g=G(arguments),
        o= F(g[0])? {fn:g[0]} :{s:g[0], fn:g[1]}
        o.s  =  N(o.s)? o.s: 1
        o.fn= o.fn || function(){}
        return _.sT(function(){
                o.fn()},
            o.s * 1000)
    }

    _.ev= function(n, fn){_.sI(fn, n*1000)
        //  _.iv=function(a,b){if(N(b)){return setInterval(_v(a),b)}}
    }
    _.cI= _.xI=function(n){clearInterval(n)}

    R=function(n,n2){var num
        if(O(n)){n= n.length}
        n=N(n)? n:1
        n2=N(n2)?n2:0
        num= (M.random()*n)+n2
        return M.floor(num)
    }
    $r=function(a,b){
        a = a||'c'; //cannot be 'color' ?? only abr??
        var values = _.values(oO(a))
        return Oo(a,b) || values[_.random(_.size(values)-1)]
    }
    _.RE= _.isRegExp
    $RE=function(a,b,c){return new RegExp(a,b,c)}

    _.j=function(a,b){return(a||[]).join(b||' ')}
    _.ob =  function (a) {return O(a) ? a : {}}
    _.ext = function (o) {o.e = o.extend; return o }
    _.ap  = _a =function (ob, met, arr) {
        var g = G(arguments)
        if (g.t) {

            return g.f[g.s].apply(g.f, g.t)
        }
        return g.f.apply(null, g.s)
        // function (a, b, c) {   return  a.apply(c || a, b) }
    }

//added

    _.b= _.bind
}
function under() {

    _.l = _.last;
    _.f = _.first;
    _.i = _.initial;
    _.r = _.rest
    _.e = _.each;
    _.m = _.map;
    _.t = _.times
    _.x = _.extend;
    _.df = _.defaults;
    _.p = _.partial;
    _.ic = _.include;
    _.wo = _.without;
    _.cp = _.compact
    _.ks = _.keys;
    _.rs = _.result
    _.tp = _.template
    _.b = function (a, b, c) {
        return F(a) ? _.bind(a, b, c) : _.bindAll(a, b, c)
    }
    _.tA = function (a) {
        return O(a) ? _.toArray(a) : [a]
    }
    _.fl = _.F = function (a) {
        if (A(a)) {
            return _.flatten(a)
        }
    }
    _.ey = function (a, b, c) {
        return _.every(a, b, c)
    }
    _.eW = function (a, b) {
        return s$(a).endsWith(b)
    }
    _.mo = function (n, fn) {
        return N(n) ? _.throttle(fn, n * 1000) : _.throttle(n, 1000)
    }
    _.rd = function r(a, b, c, d) {
        return F(b) && D(c) ? _.reduce(a, b, c) : _.reduceRight(a, c, b)
    }
    _.rp = function (a, b, c) {
        return a.replace(b || '#', c || '')
    }
    _.rng = function (a, b) {
        var g = G(arguments);
        return N(b) ? _.range(a, b) : g.p ? _.range(1, (a || 10) + 1) : _.range(a)
    }
    _.iv = function (a, b) {
        return _.invert(a)
    }
    _.ix = function (a, b) {
        return _.ap(_.intersection, arguments)
    }



    _.ks = _.keys;

    _.ixv = function (a, b) {
        return U(b) ? _.invert(a)
            : _a(_.intersection, arguments)
    }
    _.bn = function (a, b, c) {
        return F(a) ? _.bind(a, b, c) : _.bindAll(a, b, c)
    }
    _.fl = _.F = function (a) {
        if (A(a)) {
            return _.flatten(a)
        }
    }

    _.rng = function (a, b) {
        var g = G(arguments);
        return N(b) ? _.range(a, b) : g.p ? _.range(1, (a || 10) + 1) : _.range(a)
    }
    _.ey = function (a, b, c) {
        return _.every(a, b, c)
    }
// _.xxx=function e(p,q,w){return S(p) && s(q)? _.eW(p,q) :S(q)?  e(p,function(v,k){eval(q)}, w)}

    _.rng = function (a, b) {
        var g = G(arguments);
        return N(b) ? _.range(a, b) :
            g.p ? _.range(1, (a || 10) + 1) :
                _.range(a)}

    _.ht = function (a, b, c) {
        if (O(a)) {
            if (U(b)) {
                return a.height ? (F(a.height) ? a.height() : a.height) :
                    _.isFunction(a.h) ? a.h() : N(a.h) ? a.h : false
            }
            if (N(b)) {
                if (F(a.height)) {
                    a.height(b);
                    return a
                }
                if (N(a.height)) {
                    a.height = b;
                    return a
                }
                if (F(a.h)) {
                    a.h(b);
                    return a
                }
                if (N(a.h)) {
                    a.h = b;
                    return a
                }
            }


        }
    }

    _.plOb = function (a) {
        return O(a) && !_.isFunction(a) && !A(a) && !(E(a))
    }
    _.px = function (a) {
        return _.nN(a) ? a + 'px' : a
    }
    _.fA = function (a) {
        return function () {
            alert(a)
        }
    }
    _.fL = function (a) {
        return function () {
            $l(a)
        }
    }
}
function utils(){
    Utils.props =$p=function p(i,t,kK,vf,f){
//get: index thing key //set: index thing key value [function] //setOb: index thing ob [function]
        if(O(kK)){
            _.each(kK,function(v,k){
                p(i,t,k,v,vf)})}                   //setOb

        if(U(kK)){return _p(p,i,t)}
        if(vf=="*"){return p(i,t,kK, $r(kK))} // set it randomly?!
        else if(U(vf)){return t[oO(i,kK)]}   //get
        else{f=f||_s  //function(t,k,v){t[k]=v}  //set
            f(t, oO(i,kK), oO(kK, vf, 'R'))}
        return t}
    Utils.methods = $m=function f(i,x,m,g){ //=met
        if(U(i)){return}
        if(U(x)){return _p(f,i)}
        if(U(m)){return _p(f,i,x)}// if(U(g)){return _p(f,i,x,m)}
        if(!A(g)){return _a(f,[i,x,m,_r(arguments, 3)])}//met('x',  c.x, 'd',  [i,0,0]     )//met('x',  c.x, 'd',   i,0,0   )
        return _a( x[oO(i,m)], g, x) || x}

    HTML5={}
    HTML5.CSS = ss=function ss(q,b,c){

        if(U(b)){return $l(_p(ss,q))}

        var s=function(a,b,c){

            if(U(c)){return $l(a.css(oO('s',b)))
            }

            a.css(oO('s',b), $o(b,c,'R'))

            $l(s(a,b) )

            return q
        }


        q=Q(q)
        return  A(b)? _r(b,function(m,k){
            return _s(m,k,ss(q,k))},{})
            :O(b)? $p('s',q,b,s)
            :s(q,b,c)

    }
    HTML5.attrs = aa=function aa(q,b,c){q=Q(q)
        var  att=function(q,b,c){q=Q(q)
            if(U(c)){return q.attr(oO('a',b))}
            return q.attr(oO('a',b),$o(b,c,'R'))}
        return  U(b)? _p(aa,q)
            :A(b)? _r(b,function(m,k){
            return _s(m,k,aa(q,k))},{})
            :O(b)? $p('a',q,b,att)
            :att(q,b,c)}
    HTML5.props = pp=function pp(q,b,c){q=Q(q)

        var rop=function(q,b,c){
            q=Q(q)

            if(U(c)){return q.prop( oO('o', b) )}
            return q.prop(oO('o',b),
                $o(b,c,'R'))}

        return U(b)? _p(HTML5.props,q)
            :A(b)? _r(b,function(m,k){
            return _s(m,k,HTML5.props(q,k))},{})
            :O(b)? $p('o',q,b,rop)
            :rop(q,b,c)}  //changed p -> o (oO)
    HTML5.class = kl=function(q){q=qq(q)
        return function kl(k,j){

            var g=G(arguments)
            if(U(k)){return q.at('k')}
            if(g.p){return q.q.hasClass( oO('k',k) )}
            if(k==='-'){q.q.removeClass( oO('k',j) )}
            else if(g.n){q.at('k', oO('k',k) )  }
            else {_e(_S(k,' '),function(k){
                q.q.addClass (oO('k',k))})}
            $l(kl())
            return kl}}
    HTML5.font =$f=FO=function(a,b){

        if(O(a)){return ss(oB(b),{fz:a||50})}
        a=N(a)?_S(a):U(a)?'':a

        var px=function(a){return a+'px'},
            F='fantasy',W='normal',S='normal',Z=px(100)

        _e(a.split(' '),function(p){
            if(M(p[0])){p=p.split('/')
                Z=px(p[0])+((p[1])?'/'+px(p[1]):'')}
            F=Oo('ff',p)||F
            W=Oo('fw',p)||W
            S=Oo('fs',p)||S})

        return [W,S,Z,F].join(' ')}
    HTML5.outline = OL=function OL(o,o2,o3){if(Oo('c',o)){o={c:o,w:o2,s:o3}}
        if(S(o)){o=o.split(' ')
            return $l(_j([$r('c',o[0]),_p(oO('ow',o[1]||5)),
                oO('os',o[2]||'-') ]))}
        if(N(o)){o={w:o}};
        o=ob(o)
        return $l(_j([$r('c',o.c),N(o.w)?_p(o.w):$r('ow',o.w),
            $r('os',o.s)]))}
    HTML5.qs = qs=function f(a,b){

        var o = {},

            s = function( o, a, b ){

                o [ oO ( 's' , a ) ]  = oO( a , b , 'R' )

                return o }

        if( S( a ) ){ s( o , a , b ) }

        else{

            _.each( a , function( v , k ) { s ( o , k , v ) } ) }

        return o

    }
    HTML5.CSSRule = CSSRule = setRule = uu=function f( a, b ){
        var sy, cl ,rl


        style = sy=function(style){   return "<style type='text/css'>" + style + "</style>"   }

        theRule  =rl = function f(a,b){

            var style=''

            if(O(a)){   _.each(   qs(a), function(v,k){  style += f(k, v)   })

                return style}

            return  a + ':' +  b  + '; '  }

        createRule = function(a,b){

            var rule = function(clas, css){ return '.' +  clas  +  '{' + css|| '' + '}'  }

            return hd( style( rule(a, b) ))

        }



        if( O(a) ){ _.each( a, function(v, k){ f(k,v) }) }

        createRule( a, theRule(b) )

    }

    Utils = {}
    Utils.isNested = isArrayWhoseFirstObjIsAlsoAnArray = AA=function(a){return A(a) && A(a[0])}
    Utils.isDataUrl = Du=function(a){ return s$(a).contains('data:') }
    Utils.asElement = E=function E(a,b,c){
        if(S(b)){return  s$(a).endsWith(b)   }
        if(_.isFunction(b)){return _.every(a,b,c) }
        if(O(a)){

            a = O(a.e)? a.e
                :O(a.c)? a.c
                :a

            a=$(a)[0]

            if ( _.isElement(a) ){return a}

        }}
    Utils.apply =_a=function(a,b,c,d,e){//_.isUndefined(a)? qq('a')
        return  _.isFunction(a)? a.apply(c||a, b)
            :_.isString(a)? a.split(b||'/').pop()// after('/')

            :0//:a.animate(b,c,d,e)//
    }
    Utils.toUndefined =tUd=function(){

        _.each(G(arguments) , function(g){g=undefined})
    }
    Utils.URL =_u=function(a){

        url = function(a){ return 'url("' +a+ '")' }

        return url(a)
        //return _.isUndefined(a)? qq('ul'): url(a)

    }
    Utils.func =_v=function(a){
        return S(a)?
            function(){Function(a)()}
            :_.isFunction(a)?a:_.isFunction(a.value)?a.value():a.value}
    Utils.extension = $.extension=_x=function(a, b){
        //if(_.isString(a)){
        return  s$(a).contains('.')  ? a:  s$(a).ensureRight(b||'.png').s
        //}
    }

    Graphics = window['Graphics'] || {}
    Graphics.getCanvas = C=function(a){

        if(_.isObject(a= E(a)||a)){
            return a.canvas? a.canvas  :

                s$(a.toString() ).contains('Canvas')

                    ? Q(a)[0]:0}
    }




}
function strin(){
    __ = '!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
    S.iU= function(a){if(S(a)){return s$(a).isUpper()}}
    S.tU=  _.tU= _.tUC=function(a){
        return a.toUpperCase()
        return S(a)? a.toUpperCase() :A(a)? _.m(a,function(a){return S.tU(a)}):a}
    S.iL=function(a){
        return S(a)? a.toLowerCase() :A(a)? _m(a,function(a){return lC(a)}):a
        //Lc=function(a){if(_.isString(a)){return s$(a).isLower()}}
    }
    S.tL=_.tL= _.tLC=function(a){         return a.toLowerCase()

    }
    S.cR= function(a,b){return s$(a).chompRight(b).s }
    S.eR=  function(a,b){return s$(a).ensureRight(b).s}
    S.cL= function(a,b){return s$(a).chompLeft(b).s }
    S.eL=  function(a,b){b = b || '/'; return s$(a).ensureLeft(b).s}
    S.x= S.ext=_.ext= function(a, b){if(S(a)){
        return  s$(a).contains('.')  ? a :
            s$(a).ensureRight(b||'.png').s}}

    S.slash= _.slash =_.ensureSlash=function(str){
        var hasSlash = str[0] == '/'
        return hasSlash? str: '/'+str
    }


    S.spl=_.spl=function(a,b){return  String(a).split(b)}
    S.bf=_.bf=function(a,b){return  a.split(b|| '.')[0]}
    S.af=_.af=function(a,b){return  a.split(b || '/')[0] }
    S.S= S.to=_.tS=function(a){return  a.toString()}
    S.ch=_.fCC=function(a){return $S.fromCharCode(a) }
    Utils.chompRight = chompRight=function(a,b){return s$(a).chompRight(b).s }
    Utils.ensureRight = ensureRight=function(a,b){return s$(a).ensureRight(b).s}


//should be dep? 'fsa'.toUpperCase()
    Utils.toUpperCase = toUpperCase=uC=function(a){
        return S(a)? a.toUpperCase()
            :A(a)? _.map(a,function(a){return uC(a)}):a }



    Utils.isUpper = isUpper=Uc=function(a){
        if(_.isString(a)){ //for safety?
            return s$(a).isUpper()
        }}



}
function math(){
    M.tD = M.toDegrees = tDeg = function (r) {
        return r * (180 / M.PI)
    }
    M.tR = M.toRadians = M.toRads = tRad = rad = function (degs) {
        if (O(degs)) {
            degs = degs.rotation
        }
        return degs * M.PI / 180
    }
    M.dst = M.distance = dst = function self(a, b) {


        M.xyz = xyz = function (a, b) {
            a = a || {};
            a.x = a.x || 0;
            a.y = a.y || 0;
            a.z = a.z || 0
            b = b || {};
            b.x = b.x || 0;
            b.y = b.y || 0;
            b.z = a.z || 0


            return sqr(a.x - b.x, a.y - b.y, a.z - b.z)

            function sqr(a, b) {
                var g = G(arguments)
                return M.sqrt(U(b) ? a
                    : sq.apply(this, g))
            }

            function sq(a) {
                var g = G(arguments), n = 0
                _.each(g, function (a) {
                    n += (a * a)
                })

                return n
            }
        }


        if (A(a) && U(b)) {
            return self(a[0], a[1])
        }


        if (U(b)) {
            return xyz(M.V({}), M.V(a))
        }


        return xyz(M.V(a), M.V(b))


    }
    M.lD = M.dist = M.lineDistance = function (p1, p2) {
        var xs = 0, ys = 0;

        p1 = V(p1)
        p2 = V(p2)
        xs = p2.x - p1.x;
        xs = xs * xs;

        ys = p2.y - p1.y;
        ys = ys * ys;

        return M.sqrt(xs + ys);
    }
    M.lineCenter = function (x1, y1, x2, y2) {
        if (A(x1)) {

            if (N(x1[3])) {
                return center(x1[0], x1[2], x1[2], x1[3])
            }
            return center(x1[0], x1[1], y1[0], y1[1])
        }
        if (O(x1)) {
            return center(x1.x, x1.y, y1.x, y1.y)
        }
        return center(x1, y1, x2, y2)
        function center(x1, y1, x2, y2) {
            var x, y

            if (x1 > x2) {
                upperX = x1;
                lowerX = x2
            }
            else {
                upperX = x2;
                lowerX = x1
            }

            if (y1 > y2) {
                upperY = y1;
                lowerY = y2
            }
            else {
                upperY = y2;
                lowerY = y1
            }

            x = lowerX + (upperX - lowerX) / 2
            y = lowerY + (upperY - lowerY) / 2

            return V(x, y)
        }
    }
    M.pointInCircle = function (x, y, circle) {
        var withinX, withinY
        withinX = x < circle.x + circle.radius && x > circle.x - circle.radius
        withinY = y < circle.y + circle.radius && y > circle.y - circle.radius
        return withinX && withinY
    }//Y.pointInCircle = pntInCir =
    M.pointInRect = Math.pointInRectangle = function (x, y, rect) {
        var withinX, withinY
        var halfwidth = (rect.width || rect.w) / 2
        var halfheight = (rect.height || rect.h) / 2
        //assumes center
        withinX = x < rect.x + halfwidth && x > rect.x - halfwidth
        withinY = y < rect.y + halfheight && y > rect.y - halfheight
        return withinX && withinY
    }
    M.circlesOverlap = function (c1, c2) {
        var sum, dist, rads
        sum = sqr(c1.x - c2.x) + sqr(c1.y - c2.y)
        dist = sqrt(sum)
        rads = c1.r + c2.r
        return rads < dist
    }
    M.warp = function (lowBound, highBound, cushion) {//wrp=
        cushion = cushion || 0
        return function (num) {
            return num < lowBound ? highBound - cushion
                : num > highBound ? lowBound + cushion
                : num
        }
    }


    $M = Math
    sin = $M.sin
    ceil = $M.ceil
    flr = $M.floor
    pow = $M.pow
    max = _M = _.max


    M = Math;
    M.fl = M.floor;
    M.c = M.cos;
    M.s = M.sin
    M.av = M.avg = M.average = function self(a, b) {
        var g = G(arguments), z = _.size(g), n = 0;


        if (A(a)) {
            return _a(self, a)
        }

        if (O(a)) {

            return V(
                M.av(a.x, b.x),
                M.av(a.y, b.y)
            )

        }

        _.e(g, function (a) {
            n += a
        })
        return n / z
    }
    M.tN = _.tN = function (what, aNum) {
        return N(what) ? what : aNum || 0
    }
    M.u = _.upd = function (curr, update, g) {
        var res
        if (g.p) {
            res = curr + update
        }
        else if (g.n) {
            res = curr - update
        }
        else if (g.m) {
            res = curr * update
        }
        else if (g.d) {
            res = curr / update
        }
        else res = update
        return res
    }
    M.pI = _.pI = _.tI = function (a, b) {
        if (U(b)) {
            return parseInt(a)
        }
        return parseInt(_.tN(a, b))
    }


    pI = parseInt


//logic
    ff = function f(a) {
        return new $F(
            "a", "b", "c", "d", "e", "var g=G(arguments)," +
            "t=this;" + a + ";return t")
    }
    ffr = function f(a) {
        return new $F(
            "a", "b", "c", "d", "e", "var g=G(arguments);return(" + a + ")")
    }

    $do = function (b, f) {
        if (F(f)) {
            f(b)
        }
        ;
        if (S(f)) {
            $w[f] = b
        }
        ;
        return b
    }

    xy = function (a, x, y) {
        if (U(x)) {
            if (F(x) && F(y)) {
                return {x: a.x(), y: a.y()}
            }
            return {x: a.x, y: a.y}
        }
        if (O(x)) {
            return xy(a, x.x, x.y)
        }
        y = N(y) ? y : x
        if (F(x) && F(y)) {
            a.x(x);
            a.y(y)
        }
        else {
            a.x = x;
            a.y = y
        }
        return a
    }


    XY = function (a, x, y) {
        var g = G(arguments)
        if (g.p) {
            a.x += x
            a.y += N(y) ? y : x
        }

        return a
    }


    xyx = function xy(o, x, y) {
        if (O(x)) {
            return xy(o, x.x, x.y)
        }
        ;
        o.x = x;
        o.y = y;
        return o
    }


//logic
    rat = function r(f, i) {

        var sampleFunc = _v('_b().c()')

        f = f || sampleFunc

        var z = function z() {

            var g = G(arguments)

            if (z.z) {

                if (g.P) {

                    clearInterval(z.z)

                    z.z = 0
                }

            }

            else {

                if (g.N) {

                    z.z = I(f, z.i)
                }

            }


        }


        z.i = i || 1000
        z.z = I(f, z.i)

        return z
    }


//recursive map function
//pass a function and array.  it maps the array,
// but if it finds another array, it recursively maps it

    rc = function self(f, a) {


        if (_.isUndefined(a)) {
            return _.partial(self, f)
        }

        else return _.map(a, function (a) {

            if (A(a)) {
                return self(f, a)
            }

            else return f(a)

        })

    }


    $r = function (a, b) {
        a = a || 'c';
        return Oo(a, b)
            || V(oO(a))[_r(_z(V(a)) - 1)]
    }
//random
    rnd = function (a) {
        return $M.random(a)
    }


    r1 = rnd1 = function () {
        return rnd() + 0.1
    }
    r10 = function () {
        return rnd() * 10
    }

    b0 = false
    b1 = true
    oo1 = 0.001
    yn = function () {
        return rnd() > 0.5
    }
    rou = $M.round

//math
    tFx = function (a, b) {
        return a.toFixed(b || 3)
    }
    unit = function (v) {
        return {x: v.x / v.l(), y: v.y / v.l()}
    }

//math
    ng = function (n) {
        return n * (-1)
    }
    adj = function (a) {
        if (O(a)) {
            adj(a.x);
            adj(a.y);
            return a
        }
        return a <= 10 ? a *= 100 : a
    }

    cos = $M.cos;
    sin = $M.sin;
    PI = $M.PI

    GRAV = 9.81

//returns abs value of num
//returns abs value of diff of two nums

    abs = function (a, b) {


        return N(b) ? abs(a - b) : $M.abs(a)

    }

//returns sum of squares
    sq = function f(a) {
        var g = G(arguments), n = 0

        _e(g, function (a) {
            n += (a * a)
        })

        return n
    }


//returns sqroot of one num
//return sqroot of sum of squares
    sqr = function (a, b) {
        var g = G(arguments);
        return $M.sqrt(U(b) ? a : _a(sq, g))
    }


    HSL = function (a, b, c) {
        if (U(a)) {
            return HSL(rnd() * 360, 100, 50)
        }
        return C$.Graphics.getHSL(a, b, c)
    }


    $V = function v(a, b, c, d) {//returns coords needed for centering

        var g = G(arguments), o, a = g[0]

        if (N(d)) {
            return v((a - c) / 2, (b - d) / 2)
        }

        if (A(a)) {
            return _a(v, a)
        }

        if (O(a)) {
            return v(F(a.x) ? a.x() : a.x, F(a.y) ? a.y() : a.y)
        }

        a = a || 0
        b = b || a || 0
        o = {x: a, y: b}

        return o
    }


    pi = function (a) {
        return (a < 0 ? -1 / a : a) * PI
    }

    tRad = function (d) {
        return d * pi(1 / 180)
    }
    tDeg = function (r) {
        return r * (180 / pi(1))
    }
    inv = function (v) {
        return $V((-v.x), (-v.y))
    }
    add = function (a, b) {
        return $V(a.x + b.x, a.y + b.y)
    }
    subtract = function (a, b) {
        return $V(a.x - b.x, a.y - b.y)
    }


    ave = function ave(a) {
        var g = G(arguments),
            z = _z(g), n = 0;

        if (A(a)) {
            return _a(ave, a)
        }

        _e(g, function (a) {
            n += a
        })

        return n / z
    }


    xyz = function (a, b) {
        a = a || {};
        a.x = a.x || 0;
        a.y = a.y || 0;
        a.z = a.z || 0
        b = b || {};
        b.x = b.x || 0;
        b.y = b.y || 0;
        b.z = a.z || 0


        return sqr(a.x - b.x, a.y - b.y, a.z - b.z)
    }


    dst = function dst(a, b) {

        if (A(a) && U(b)) {
            return dst(a[0], a[1])
        }


        if (U(b)) {
            return xyz($V({}), $V(a))
        }


        return xyz($V(a), $V(b))


    }


    rad = function (d) {
        var r

        if (O(d)) {
            d = d.rt()
        }
        r = d * (3.14 / 180)
        return r
    }


    frict = function (v, force) {
        v = v * force
        return v
    }


    rectHit = function (x1, y1, w1, h1, x2, y2, w2, h2) {


    }


    circHit = function (c1, c2) {
        var sum, dist, rads

        sum = sqr(c1.x() - c2.x()) + sqr(c1.y() - c2.y())

        dist = sqrt(sum)

        rads = c1.r + c2.r

        return rads < dist

    }


    asin = Math.asin
    acos = Math.acos
    atan = Math.atan


//


//pi=function(a){return(a<0?-1/a:a)*PI}

    $M = Math
    sin = Math.sin
    ceil = Math.ceil
    flr = Math.floor
//pow=Math.pow
//cos=Math.cos;
//sin=Math.sin;
    PI = Math.PI
//asin=Math.asin
//acos=Math.acos
//atan=Math.atan
    pI = parseInt
//max=_.max
//GRAV=9.81
////


//////
    Math.xyDep = function (a, x, y) {

        if (U(x)) {

            if (F(x) && F(y)) {
                return {x: a.x(), y: a.y()}
            }
            return {x: a.x, y: a.y}
        }

        if (O(x)) {
            return xy(a, x.x, x.y)
        }
        y = N(y) ? y : x
        if (F(x) && F(y)) {
            a.x(x);
            a.y(y)
        }
        else {
            a.x = x;
            a.y = y
        }
        return a
    }
    Math.XYDep = function (a, x, y) {
        var g = G(arguments)
        if (g.p) {
            a.x += x
            a.y += N(y) ? y : x
        }
        return a
    }
    Math.xyxDep = function xy(o, x, y) {
        if (O(x)) {
            return xy(o, x.x, x.y)
        }
        ;
        o.x = x;
        o.y = y;
        return o
    }


//returns abs value of num
//returns abs value of diff of two nums
    Math.ab = abs = function (a, b) {
        return N(b) ? abs(a - b) :
            Math.abs(a)
    }
//returns sum of squares
    Math.sq = sq = function f(a) {
        var g = G(arguments), n = 0

        _.each(g, function (a) {
            n += (a * a)
        })

        return n
    }
//returns sqroot of one num
//return sqroot of sum of squares
    Math.sqr = sqr = function (a, b) {
        var g = G(arguments)
        return Math.sqrt(U(b) ? a : _a(sq, g))
    }


    Math.particle = function (pos) {
        var p = {}

        p.p = pos
        p.v = v2(0, 0)
        p.pars = alive

        p.u = function (td) {
            p.p.iadd(p.v.muls(td))
        }
        return p
    }


    Math.vector = vec = function (x, y) {

        var v = function v() {
        }

        v.x = x || 2

        v.y = y || 2

        v.sq = function () {
            return sq(v.x, v.y)
        }

        v.abs = v.len = v.l = function () {
            return sqr(v.sq())
        }

        v.add = v.a = function (a) {
            var g = G(arguments)
            if (g.n) {
                a = (inv(a))
            }
            v.x += a.x;
            v.y += a.y;
            return v
        }

        v.scale = v.s = function (a) {
            v.x *= a;
            v.y *= a;
            return v
        }

        v.unit = v.u = function () {
            v.x = v.x / v.l();
            v.y = v.y / v.l()
        }

        v.neg = v.n = function () {
            v.x *= -1;
            v.y *= -1
        }

        v.pow = v.p = function (a) {
            return (v.x * a.x) + (v.y * a.y)
        }

        v.rotate = v.r = function (a) {
            v.x = v.x * cos(a) - v.y * sin(a)
            v.y = v.x * sin(a) + v.y * cos(a)
            return v
        }

        v.toString = function () {
            return '(' + tFx(v.x) + ',' + tFx(v.y) + ')'
        }

        v.v = v.toString

        return v
    }
    unit = function (vec) {
        return {x: vec.x / vec.l(), y: vec.y / vec.l()}
    }
    Math.vector = v2 = function (x, y) {

        var v = {x: x, y: y}
        v.muls = function (n) {
            return v2(v.x * n, v.y * n)
        }
        v.imuls = function (n) {
            v.x *= n;
            v.y *= n;
            return v
        }
        v.mul = function (vv) {
            return v2(v.x * vv.x, v.y * vv.y)
        }
        v.imul = function (v) {
            v.x *= vv.x;
            v.y *= vv.y;
            return v
        }
        v.divs = function (n) {
            return v2(v.x / n, v.y / n)
        }
        v.div = function (n) {
            return v2(v.x / vv.x, v.y / vv.y)
        }
        v.adds = function (n) {
            return v2(v.x + n, v.y + n)
        }
        v.iadds = function (n) {
            v.x += n;
            v.y += n;
            return v
        }
        v.add = function (vv) {
            return v2(v.x + vv.x, v.y + vv.y)
        }
        v.iadd = function (v) {
            v.x += vv.x;
            v.y += vv.y;
            return v
        }
        v.subs = function (n) {
            return v2(v.x - n, v.y - n)
        }
        v.isub = function (n) {
            v.x -= n;
            v.y -= n;
            return v
        }
        v.sub = function (vv) {
            return v2(v.x - vv.x, v.y - vv.y)
        }
        v.isub = function (v) {
            v.x -= vv.x;
            v.y -= vv.y;
            return v
        }
        v.set = function (x, y) {
            v.x = x;
            v.y = y
        }

        return v
    }

    Math.inverse = inv = function (v) {
        return Math.V(-v.x, -v.y)
    }
    Math.add = function (a, b) {
        return Math.V(a.x + b.x, a.y + b.y)
    }
    Math.subtract = function (a, b) {
        return Math.V(a.x - b.x, a.y - b.y)
    }

    vup=function(a){
        return _m(a||keys(oO('c'),
            function(a){
                return $v(a)
            })}



    mD=function(p,V){
        var m={dist:$8,index:-1}

        p=$v(p), ar=[], V=V||vup(), d=$8

        _e(V, function(v,k){
            v=$v(v)              // $l(p(v))
            if(p(v) < d){
                ar.unshift(_D({dist:p(v),
                    dx: p.x-v.x,
                    dy: p.x-v.y,
                    dz: p.x-v.z},v))
                d=p(v)}})
        $l(ar[0].C )
        return ar}


    shortNametoRgbStr=function(a){
        var c=css(tag()),a=a||'a';
        c('c',a); return   c('c')  }

    isRgbStr=function(a){return c$(a,'rgb(')}

    rgbStrToVecOb=function(a){
        a=a.replace(/[^\d,]/g,'').split(',')
        return {x:pI(a[0]),
            y:pI(a[1]),
            z:pI(a[2])}}



// 'rgb(0,1,1)'-> obj
    rgbStrToColor=function(a){
        var o=rgbStrToVecOb(a)
        o=mD(o)[0];
        return o}


    strToVec=function(a){var s=a||'c'
        if(!isRgbStr(s)){s=shortNametoRgbStr(s)}
        if(isRgbStr(s)){s=rgbStrToVecOb(s)}
        s.c=a;s.C=oO('c',a)
        return s}


    $v=function $v(x,y,z){
        if(U(x)){return $v(0)}
        if(x.name=='v'){return x}
        var o=function v(a,b,c){return dst(v,$v(a,b,c))}
        if(F(x)){ return x(y.x, y.y, y.z)}
        if(O(x)){ return $v($v,x)}

        if(S(x)){ return _D(o, strToVec(x))}
        //s if(S(x)){x=rgb(x)}

        if(A(x)){return U(y) ? $a($v,x): _m(arguments, $v)}
        o.x=x||0;
        o.y=y||0;
        o.z=z||0;
        o.c=C
        return o}




    tD=function (a){if(a.toDataURL){return a.toDataURL()};
        if(a.u){return a.u()};return a}

    tU=function (a){
        if(a.src){return a.src}
        if(a.image){return a.image.src};
        a=tD(a);if(iU(a)){return a};return src(a)}  //s/c/C/i/b->s sync




    $cat=function(){return(_.r(arguments,function(a,b){return a+tS(b)},''))}
    $log=function(a){$c.l(tS(a));return a}
    $l=function(){return $log(eval($a('$cat')))}
    $do=function(a,b){if(iF(b)){b(a)};if(iS(b)){$w[b]=a};return a}
    $df=function(a,b){return(!iW(a))?a:b}



    $V=function(a,b,c,d){a=a||0;if(d){return $V((a-c)/2,(b-d)/2)};
        if(iA(a)){return $V(a[0],a[1])};if(iN(a)){return $V({x:a, y:b})}
        var x=a.x||0, y=$df(a.y,x);return {x:x,y:y}}


    $fir=function(a,b){return (b)?ind(a,b)==0:a[0]}//:1->last char,2:isLastChar?
    $lst=function(a,b){return(b)?ind(a,b)==_l(b)-1:a[_l(a)-1]}
    $wof=function(a,b){return _sl(ind(a,b),_l(b),b)}//2:removes all before first(IndexOf)
    $h=function(a,b){
        if(iN($i(a,b))){a=_m(_e(a,'g'),b);
            return(a)?_l(a):false}}//2:howMany

    dst=function f(a,b){var g=G(arguments)
        if(O(a)){g=ja(a,b);a=g[0];b=g[1]}
        if(A(a)){return sqr.apply(this,
            _m(a, function(v,k){return f(v, b[k])}))}
        return abs(a,b)}

    xyz=function(x,y,z,l){
        if(A(x)){z=x[2];y=x[1];x=x[0]}
        return {x:x,y:y,z:z,l:l,
            dst:function f(a,b,c){
                if(O(a)){return dst(this, a)}
                if(A(a)) return f({x:a[0],y:a[1],z:a[2]})}}}



    tH=function(p){
        p=(p.x*(256*256)+p.y*256+ p.z).toString(16)
        while(_z(p)<6){p="0"+p}
        return "#"+p}

    mD=minDist=function(p,Pnts){var P=po(p),m={di:Infinity, in:-1}
        _e(Pnts,function(p, pI){
            if(P.di(p)<m.di){m={   p:p,  d:P.di(p), l:p   }
            }}); return m}




    cc= function(a){a=tA(a)
        var g=G(arguments), c=O.a.c
        return $a(c, g.r, tA(a) )}
    cc.c=function(){return cc(M(arguments,tA))}

    cc              =function(a){a=$g(a);
        if(!A(a)){a=[a]};
        return a.concat.apply(a, _r(arguments))}
    $cat=function(){return(_.r(arguments,function(a,b){return a+tS(b)},''))}
    ccc  =function(){return _cc(map(arguments,tA ))}
    cc=  function(a,b,c){return __a( _$A.concat, tA(a), _r(arguments))}


    _a=function(a,b,c){return a.apply(c||a, b)}  //=app

    ap=f("return a.apply(c||this,b)");
    a0=function a0(a,b,o){var g=G(arguments)

        if(F(a)&&  A(b)&&  !(U(o)||O(o))){
            return _a(m, b, o)}                                    //met-fn, [pam,pam..], [ctx||met-fn]

        if(!U(b)){
            return a0(m,_r(g))}}               //what if ags are not IN an arr..?
    $a=function(m,gA,o){var g=G(arguments)
        return S(m)?
            a1(m,gA,o)
            : a0(m,gA,o ) || G(m) || m}
    apply=function(a){
        return function(){eval(g$);
            return app(fG[a], rG, fG)}}
    __a=function(a,b,c){return a.apply(b,c)},
        _a=function(m,g,o){return pp(m,o||m,g)}
    a1=function(a,b){var g=G(arguments)// for dynamic method calling!!// you can pass it a string and the obj//met-key@, met-ob, pam,pam...  (applied to met-ob)
        return  _a( b[a], _r(g, 2), b )}
    _a=function(a){return function(){return a.apply(a, arguments)}}
    _a.t0=function( a,b,c ){return a+b+c}
    _a.t=function (){ var t=this; return t(t.t0)(1,1,100)};
    ap= function(a,b,c){ return a.apply(c||this, b) }
    apa= function(a){return function(){eval(g$);
        return ap(fG[ a ], rG, fG)}}

    ccc = function(a){return function(){eval(g$);fG[a].apply(fG, rG)}}

//m->G->g1[m].a(fG, rG)
//ex:                     c=apa('concat'); c('a','b','c')    //takes @
    apa=function(m){return f("eval(g$); return ap(fG[m],rG,fG)")   }
//o->m->apa(o[m])
//ex:                         j=apo(JS)('c'); j('a','b','c')  //takes O
    apo=function(o){return function(m){return apa(o[m])}}
//apo=f("return function(m){return apa(a[m])}");
//o->G->o[fG].a(o, rG)/ex:
//a={a:100,b:f(a){<- a*t.a}};  c=apd(a) //c('b', 3)     //O
    apd=function(o){return function(){eval(g$);
        return ap(o[fG],rG,o)}}
//o->G->o[fG].a(fG, G[2]+)??
// c=ape(JS) //c('c',[1],[2],[3])
    ape=function(o){return function(){eval(g$);  //O
        var m=G.shift(); c=G.shift();
        return ap(c[o[m]], G, c)}}
    JS={ p:"pop",u:"push", h:"shift",n:"unshift",
        s:"split",  l:"slice",  sp:"splice",  ts:"toString",
        j:"join",   r:"replace",   t:"trim", m:"match",  v:"reverse",
        c:"concat",  i:"indexOf", li:"lastIndexOf",   a:"charAt"};
    apo= $f('$f("apa("+ js(a)+ "[a])")')
    apd= $f("function(){ eval(g$); return ap(a[fG], rG,a)}")
    ape= $f('$ft("var m = g.shift(), c = g.shift(); t = ap(c["+ js(a)+ "[m]],g,c)")')


    $a2=function(a,b,c){var g=G(arguments)
        if(F(a)){return a.apply(c||a, b)}
        return  _a(b[a],   _r(g,2),  b)}
    $a=function(a,b,c){var g=G(arguments)
        return U(b)? _p($a, a)
            :F(a)? _a(a,b,c)
            :_a(a[b], _r(g, 2), a)}
    $a=function l(a,b,c){var g=$g(arguments),
        p=function(a,b,c){a.apply(b,c)}
        return S(a)? p(b[a],b,_r(g,2)):
            A( b=$g(b))? p(a,c||a,b):
                l(a,_r(g))}
    $a.f=function f(a, b,c){var g=G(arguments)
        return A(b)? _a(a,b, c):                                    //met-fn, [pam,pam..], [ctx||met-fn]
            f(a, _r(g))}               //what if ags are not IN an arr..?
    $a.a=function(a,b,c){return S(b)? aS(b,c,a):aF(b,a,c) }
    $a.s=function(a,b){var g=G(arguments)  // for dynamic method calling!!// you can pass it a string and the obj//met-key@, met-ob, pam,pam...  (applied to met-ob)
        return  _a(b[a], _r(g,2),b)}




    _a=function(a){return function(){return a.apply(a, arguments)}}
    _a.t0=function( a,b,c ){return a+b+c}
    _a.t=function (){var t=this; return t(t.t0)(1,1,100)   }



    _U=function(a,b){

        if(U(a)){
            $f(b)(a,b)
        }


    }




    cat=function(){ var g=G(arguments)
        return _r(g, function(a,b){
            return a+ _S(b)}, '')}

    sr=function(a,b){
        if( U(b) ){return a}
        if(S(b)){ $w[b]=a}
        return F(b)? b(a) : a}


    fnS="var t=this,g=G(arguments)"





    fn=function(j, ff){

        var f=function(a){

            var f=function(DEF){return new Function(
                    'a','b','c','d', DEF)}

                ,F=function(DEF){
                    return f("return "+ DEF)}

                ,r=F("'return('+$t(a)+');'")

                ,b= _l( _s(';', a) )

            return f( _r(
                ';' + b,
                ';' + r(b),
                fnS + (a==b ? r(a) : A) ))}


        if(!j||F(j)){return j}

        if(S(j)){j=f(j)}

        return ff? ff(j):  j}


    DEF=function(a,b){
        var z=F("(a)?'='+a:''"),
            v=f("a=_s(':',a);return a[0]+z(a[1])"),
            m=F("_j(d,_.m(_s(b,a),c))"), //<3=splMapJnWr=magic
            V=F("'var '+m(a,',',v,',')+';'");
        if(!b){
            b=a;a="g:G(arguments)"}
        return V(a)+'\n'+BODY(b)}



    $df=function(a,b){return($w[a]?b:a}

    $V=function v(a,b,c,d){
        if(!(A(a)||N(a))){
            var x=a.x||0,
                y=$df(a.y, x)
            return {x:x, y:y}}
        return A(a=a||0)? v(a[0], a[1])
            :N(d)? v((a-c)/2, (b-d)/2)
            :v({x:a, y:b})}


    $do=function(a,b){if(F(b)){b(a)}
        return S(b)?($w[b]=a):a}

    iff=function i(a,y,n){
        if(a){
            if(is('f', y)){
                y(a)}
            else {eval(y)}
            return a}
        if(n){i(!a,n)}
        return a}


    a_=function(a,b,c){ff(A(a),b,c);return a}
    f_=function(a,b,c){i_(F(a),b,c);return a}
    s_=function(a,b,c){i_(S(a),b,c);return a}
    n_=function(a,b,c){i_(N(a),b,c);return a}
    o_=function(a,b,c){i_(O(a),b,c);return a}



    ifDoElse=ide=function i(v,y,n){if(v){eval(y)};i(!v,n);return v}


    sr =function(a,b){if(!b){return a}

        if(S(b)){$w[b]=a};
        if(F(b)){b(a)}
        return a}


    IS={
        '0':function(a){return a==0},
        a:iA,
        b:function(a){return _s(a)=="[Bitmap (name=null)]"},
        bl:_.isBoolean, c:function(a){return _s(a)=="[object HTMLCanvasElement]"}   ,
        d:_.isDate,
        e:_.isEmpty,
        f:iF,
        fi:_.isFinite,
        g:_.isArguments,
        h:_.isElement,
        i:function(a){return _s(a)=="[object HTMLImageElement]"} ,
        l:function(a){return(iO(a)||iA(a))},
        n:iN,
        na:_.isNaN,
        nl:_.isNull,
        ng:function(a){return _.isNumber(a)&&a<0},
        ps:function(a){return _.isNumber(a)&&a>0},
        nn:function(a){return _.isNumber(a)&&a>=0},
        np:function(a){return _.isNumber(a)&&a<=0},
        o:iO,
        r:_.isRegExp,
        s:iS,
        sy:function(a){return a==(')')|| a==('(')||  a==(']')||  a==('[')    }   ,

        w:function(a){return a==$W},
        '=':function(b,c){return b==c}  ,
        '==':function(b,c){return b===c}  ,
        '!':function(b,c){return b!=c}  ,
        '!=':function(b,c){return b!==c}  ,
        '=':function(b,c){return b==c}  ,
        '<':function(b,c){return b<c}  ,
        '>':function(b,c){return b>c}  ,
        '<=':function(b,c){return b<=c}  ,
        '>=':function(b,c){return b>=c}  ,
        ud:_.isUndefined,
        '*':function(){return true}}

    than=function(){}
    sy=function(a){return a=='('||a==')'||a=='['||a==']'},

        is=function(a,b,c){return IS[a](b,c)}
    not=function(a,b,c){return !is(a,b,c)}
    and=function(a,b,c){return E(_s(a,','),function(a){return is(a,b,c)})};
    or=function(a,b){return S(_s(a,','),function(a){return is(a,b)})};
    nand=function(a,b){return !and(a,b)}
    nor=function(a,b){return !or(a,b)}

    what=function(a){
        var o={ d:iD(a)||'',u:iU(a)||'',_:i_(a)||'',
            $:i$(a)||'',b:iB(a)||'',n:iN(a)||'',np:iNp(a)||'',
            nn:iNn(a)||'', '0':i0(a)||'','8':i8(a)||'', n_:iN_(a)||'',s:iS(a)||'',a:iA(a)||'',sa:iSA(a)||'',o:iO(a)||'',l:iL(a)||'',f:iF(a)||'',e:iE(a)||'',h:iH(a)||'',g:iG(a)||'',d:iD(a)||'',r:iR(a)||''};return o}


    any=function(a,b){return S(_s(a,','),function(a){return b==a})}





    what=function(a){
        var d=function(f){return f(a)||''}
        return {d:d(D),u:d(U),
            b:d(B),n:d(N),s:d(S),
            a:d(A),o:d(O),f:d(F),
            e:d(E)}}


    i_=function(a,y,n){
        if(a){eval(y)}
        if(n){
            i_(!a,n)}
        return a}

    a_=function(a,b,c){i_(A(a),b,c);return a}
    f_=function(a,b,c){i_(F(a),b,c);return a}
    s_=function(a,b,c){i_(S(a),b,c);return a}
    n_=function(a,b,c){i_(N(a),b,c);return a}
    o_=function(a,b,c){i_(O(a),b,c);return a}
    w_=function(a,b,c){i_(W(a),b,c);return a}







    function aE(a,b){
        if(_z(a=sC(a))!=_z(b)){return 0}
        else{
            return E(Z(a,b),function(a){
                    if(!(a)[1]){return 1}
                    return is(a[0],a[1])})||0}}


    function aM(a,b){
        return(_z(a=aC(a))>=_z(b))?
            E(_C(Z(a,b)),function(a){
                return !(a)[1]? 1
                    :is(a[0],a[1])}):0}



    function aL(a,b){if(_z(a=aC(a))<=_z(b)){
        return E(_C(Z(a,b)), function(a){
            return !(a)[0]? 1
                :is(a[0]||null, a[1]||null)})}}



    function aA(a,b){
        return E(b, function(b){
            return is(a,b)})}

    function aN(a,b){
        return !agS(a,b)}

    function aS(a,b){
        return S(b, function(b){
            return is(a,b)})}}
function strng(){

    _.b = function (a, b, c) {
        return F(a) ? _.bind(a, b, c) : _.bindAll(a, b, c)
    }
    _.tA = function (a) {
        return O(a) ? _.toArray(a) : [a]
    }
    _.fl = _.F = function (a) {
        if (A(a)) {
            return _.flatten(a)
        }
    }
    _.ey = function (a, b, c) {
        return _.every(a, b, c)
    }
    _.eW = function (a, b) {
        return s$(a).endsWith(b)
    }
    _.mo = function (n, fn) {
        return N(n) ? _.throttle(fn, n * 1000) : _.throttle(n, 1000)
    }
    _.rd = function r(a, b, c, d) {
        return F(b) && D(c) ? _.reduce(a, b, c) : _.reduceRight(a, c, b)
    }
    _.rp = function (a, b, c) {
        return a.replace(b || '#', c || '')
    }
    _.rng = function (a, b) {
        var g = G(arguments);
        return N(b) ? _.range(a, b) : g.p ? _.range(1, (a || 10) + 1) : _.range(a)
    }
    _.iv = function (a, b) {
        return _.invert(a)
    }
    _.ix = function (a, b) {
        return _.ap(_.intersection, arguments)
    }

    __ = '!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
    S.iU = function (a) {
        if (S(a)) {
            return s$(a).isUpper()
        }
    }
    S.tU = _.tU = _.tUC = function (a) {
        return a.toUpperCase()
        return S(a) ? a.toUpperCase() : A(a) ? _.m(a, function (a) {
            return S.tU(a)
        }) : a
    }
    S.iL = function (a) {
        return S(a) ? a.toLowerCase() : A(a) ? _m(a, function (a) {
            return lC(a)
        }) : a
        //Lc=function(a){if(_.isString(a)){return s$(a).isLower()}}
    }
    S.tL = _.tL = _.tLC = function (a) {
        return a.toLowerCase()

    }
    S.cR = function (a, b) {
        return s$(a).chompRight(b).s
    }
    S.eR = function (a, b) {
        return s$(a).ensureRight(b).s
    }
    S.cL = function (a, b) {
        return s$(a).chompLeft(b).s
    }
    S.eL = function (a, b) {
        b = b || '/';
        return s$(a).ensureLeft(b).s
    }
    S.x = S.ext = _.ext = function (a, b) {
        if (S(a)) {
            return s$(a).contains('.') ? a :
                s$(a).ensureRight(b || '.png').s
        }
    }
    S.slash = _.slash = _.ensureSlash = function (str) {
        var hasSlash = str[0] == '/'
        return hasSlash ? str : '/' + str
    }
    S.spl = _.spl = function (a, b) {
        return String(a).split(b)
    }
    S.bf = _.bf = function (a, b) {
        return a.split(b || '.')[0]
    }
    S.af = _.af = function (a, b) {
        return a.split(b || '/')[0]
    }
    S.S = S.to = _.tS = function (a) {
        return a.toString()
    }
    S.ch = _.fCC = function (a) {
        return $S.fromCharCode(a)
    }
}
function time(){
    T=function(a,b){return setTimeout(_v(a),b)}

    dateTime=dt=function(a){
        var d=new Date(a)

        d.y=d.getFullYear

        d.d=d.getDate
        d.D=d.getDay
        d.M= d.getMinutes
        d.m= d.getMonth

        d.date=function(){
            return d.d()+'/'+ d.m()+'/'+ d.y()}
        d.time=function(){
            return d.h()+':'+ d.M()}
        d.dt=function(){return d.date()+' '+ d.time()}


        d.ms= d.getMilliseconds
        d.h= d.getUTCHours
        d.s= d.getSeconds


        //d.tm= d.getTime
        //d.gto= d.getTimezoneOffset
        d.udt= d.getUTCDate
        d.gud= d.getUTCDay
        d.ufy= d.getUTCFullYear
        d.gh= d.getHours

        d.gms= d.getUTCMilliseconds
        d.um= d.getUTCMinutes
        d.um= d.getUTCMonth
        d.us= d.getUTCSeconds
        return d
    }

    dtt=function(a){
        return dt(a).dt()}


    function $superUTC(d) {
        // uniT ms 0-999
        d.sUMs = d.setUTCMilliseconds
        d.gUMs = d.getUTCMilliseconds

        //uniT secs 0-59
        d.SUSc = d.setUTCSeconds
        d.gUSc = d.getUTCSeconds//

        //uniT min 0-59
        d.sUMn = d.setUTCMinutes
        d.gUMn = d.getUTCMinutes

        //uniT hour 0-23
        d.sUH = d.setUTCHours
        d.gUH = d.getUTCHours


        d.gUM = d.getUTCMonth
        d.sUM = d.setUTCMonth

        //uniT dtOb's year (4digs)
        d.sUFY = d.setUTCFullYear
        d.gUFY = d.getUTCFullYear

        //  uniT  dOM 1-31
        d.gUDt = d.getUTCDate
        d.sUDt = d.setUTCDate

        d.U = d.UTC //num of MSs in a date since midnight of 1/1/70, according to UTC time
        d.gUD = d.getUTCDay // uniT dOW 0-6
        d.gO = d.gTO = d.getTimezoneOffset// mns dif bwn UTC/local time

        return d
    }
    function $superParse(d) {
        d.tS = d.toString  //dtOb -> str
        d.tI = d.toISOString   //date as a str, using ISO standard
        d.tDt = d.toDateString //Converts the date portion of   dtOb into a readable string
        d.tLDt = d.toLocaleDateString//    date portion of a dtOb as   string, using locale conventions
        d.tLT = d.toLocaleTimeString  //time portion of  dtOb as   string, using locale conventions
        d.tL = d.toLocaleString   //dtOb -> str, using locale conventions

        d.tT = d.toTimeString //Converts   time portion of  dtOb to   string

        d.tU = d.toUTCString   //dtOb -> str, by uniT
        d.p = d.parse //Parses date str  and num   ms snc 1/1/70
        d.j = d.tJ = d.toJSON   //date as   str, formatted as a JSON date
        d.v = d.vO = d.valueOf   //primitive val  of   dtOb
        return d
    }
    function oneHourFromNowInDateForm() {
        return $D.n($D.H)
    }





//time
    f30=function(f){K(f,1000/30)}
    sec=function(f){return T(f,1000)}





    keep=function(f){I(f,50)}
    T$ = createjs.Ticker


    STOP=function(){
        T$.removeAllEventListeners()
    }



    tt=function(a,b,c){

        var g=G(arguments),
            t=true,
            f=false,
            a=g[0],
            b=g[1],
            c=g[2]

        if(F(a)){

            return aEL(T$,'tick',
                g.N? a
                    :function(e){

                    if(!e.paused){ a(e) }
                })

        }



        if(O(a)){
            return aEL(T$,'tick',a)}

        if(a=='?'){return !T$.getPaused()}
        if(a=='p'){T$.setPaused(f);return tt('?')}

        if(a=='s'){T$.setPaused(t);
            return tt('?')}

        if(a=='g'){return tt(

            tt('?')? 's': 'p'

        )}


        if(a=='@'){
            return T$.init()}

        if(a=='!'){
            return T$.reset()}

        if(a=='e'){return T$.getEventTime(g.p?t:f)}

        if(a=='t'){return T$.getTime(g.p?t:f)}

        if(a=='#'){return T$.getTicks(g.n?t:f)}

        if(a=='md'){return t$.maxDelta}

        if(a=='M'){return T$.timingMode}

        if(a=='i'){
            if(N(b)){T$.setInterval(g.m?b*1000:b)
                return tt('i')}
            if(U(b)){return T$.getInterval()}}

        if(a=='f'){
            if(N(b)){T$.setFPS(b);return tt}
            if(U(b)){return T$.getFPS()}}

        if(a=='r'){if(b>10){
            tt('f',b)} else {tt('i',b,'*')}}


        if(a=='m'){
            return N(b)?T$.getMeasuredFPS(b)
                :T$.getMeasuredFPS()}

        if(a=='tk'){return Ed(T$)}

    }







    tick=function(e){j.y(e.delta/1000*100,'-' )}


    ts2 = function(s, j, pxPerSec){
        var fn=function(s,e){

            if(!N(j.ts)){j.ts=0;j.lts=e.ts}

            else{j.ts= e.ts-j.lts;j.lts=e.ts

                j.y((j.ts/1000) * pxPerSec,'-')  }}

        return s.t(fn)}


    he2=function(e){
        j.x( (e.d/1000) * 5,'-' )}

    onTick=function TT(f){var fn
        fn=T$.on('tick',function(e){f(sJE(e))})
        return function(){T$.off('tick',fn)
            return _p(TT,f)}}





}
function dimen(){

    $.os=function(q){ return $(  C(q)?C(q):q  || 'body' ).os() }
    $.osl=function(el){return $.os(el).left }
    $.ost=function(el){return $.os(el).top }
    $.osP=function(a){return O(a) && a.offsetParent}
    $.fn.osP=function(){return this.offsetParent} // not a fn?
    $.osT=function(a){return O(a) && a.offsetTop}
    $.osL=function(a){return O(a) && a.offsetLeft}
    $.cW=function(){return $.bd().clientWidth}
    $.cH=function(){return $.bd().clientHeight}
}
function apps() {

    UU = function () {
        z()
        $.div('b', 400, 400).A().A($.span('hifds'))


        CSSRule('div', 'color:Orange')


    }
    UU2 = function () {//WORKS

        $.div('b', 400, 400).A().A($.span('hifds')).id('div')

        var style = document.createElement('style');

        style.type = 'text/css';

        var rule = '.cssClass { color: #F00; }'

        style.innerHTML = rule

        $('head').append(style)

//////

        $('#div').K('cssClass')


    }
}
function alpha(){


    _.K=function(a,b,c){return N(a)? I(b, a*1000): N(b)? I(a, b): _.keys(a)}
//Object.prototype.__C = function(){ return this.constructor.name }
    _.ob = function (a) {
        return O(a) ? a : {}
    }


    _.AA = _.isNested = AA = function (a) {
        return A(a) && A(a[0])
    }
    _.scl = function (v, a) {
        v.x *= a;
        v.y *= a;
        return v
    }

    _.def = function (a, b) {
        var g = G(arguments);
        a = a || {}
        return g.p ? D(a, oO(b || '' + 'D')) : D(a) ? a : b
    }
    _.cc = function (a, b) {
        return (A(a) ? a : [a]).cc(b)
    }
//_.ig = function (a) {if (_.has('Image', E(a))) {return E(a)}}
    _.vl = _v = function (a) {
        return S(a) ? function () {
            Function(a)()
        } : F(a) ? a : F(a.value) ? a.value() : a.value
    }

    _.is = function (a) {return function (b) {return b === a}}

    _.er = function (z) {
        throw new Error(z)
    }


    _.pp = _.props = $p = function p(i, t, kK, vf, f) {
//get: index thing key //set: index thing key value [function] //setOb: index thing ob [function]
        if (O(kK)) {
            _.each(kK, function (v, k) {
                p(i, t, k, v, vf)
            })
        }                   //setOb
        if (U(kK)) {
            return _p(p, i, t)
        }
        if (vf == "*") {
            return p(i, t, kK, $r(kK))
        } // set it randomly?!
        else if (U(vf)) {
            return t[oO(i, kK)]
        }   //get
        else {
            f = f || _s  //function(t,k,v){t[k]=v}  //set
            f(t, oO(i, kK), oO(kK, vf, 'R'))
        }
        return t
    }
    _.met = _.mm = function f(i, x, m, g) {
//=met $m=
        if (U(i)) {
            return
        }
        if (U(x)) {
            return _p(f, i)
        }
        if (U(m)) {
            return _p(f, i, x)
        }// if(U(g)){return _p(f,i,x,m)}
        if (!A(g)) {
            return _a(f, [i, x, m, _r(arguments, 3)])
        }//met('x',  c.x, 'd',  [i,0,0]     )//met('x',  c.x, 'd',   i,0,0   )
        return _a(x[oO(i, m)], g, x) || x
    }
    _.ob = function (a) {return O(a) ? a : {}}//ob


    _.io$ = function (a, b, c) {return a.indexOf(b, (c < 0 ? c + _z(a) : c))}


    _.hs = function _h(a, b, c) {
        if (O(b)) {
            return _h(b.toString(), a)
            //  if( A(a)){return_.ct(a,b): _.has(a,b)}
        }
        if (S(a)) {
            return s$(a).contains(b, c)
        }
    }

    _.ap = _a = function (ob, met, arr) {
        var g = G(arguments)
        if (g.t) {

            return g.f[g.s].apply(g.f, g.t)
        }
        return g.f.apply(null, g.s)
        // function (a, b, c) {   return  a.apply(c || a, b) }
    }


    _.apply = _a = function (a, b, c, d, e) {//_.isUndefined(a)? qq('a')
        return F(a) ? a.apply(c || a, b)
            : S(a) ? a.split(b || '/').pop()// after('/')
            : 0//:a.animate(b,c,d,e)//
    }



//   _.ext = function (o) {o.e = o.extend;return o}
    rex=function(){
        _.RE = _.isRegExp
        $RE = function (a, b, c) {
            return new RegExp(a, b, c)
        }



    };rex()
    vkl=function(a){return new Function("v","k","l","l[k]=" + a)}


}
function more(){
    ll = function (a, b) {
        if (S(b)) {
            console.log(a + ': ' + b)
        }
        else {
            $l(a + ' ->');
            $l(b)
        }
        return b
    } // String.prototype.ensureSlash=function(){var hasSlash = this[0] = '/'; return hasSlash? this: '/'+this}
    $t = function(a, b){if(b2d.test){
        var g=G(arguments), a=g[0], b=g[1],str
        if(D(b)){ str='||'
            _.e(g, function(s){str+=  ' '  + s.toString() + ' |'})
            str += '|'}
        else {str = a.toString()}
        $l(str)}
        return a
    }
    function mutate() {
        _.rp = function (a, b, c) {
            return a.replace(b || '#', c || '')

        }
        S.spl = _.spl = function (a, b) {
            return String(a).split(b)
        }
        S.S = S.to = _.tS = function (a) {
            return a.toString()
        }
        S.ch = _.fCC = function (a) {
            return $S.fromCharCode(a)
        }


    }
    function upper() {
        S.iU = function (a) {
            if (S(a)) {
                return s$(a).isUpper()
            }
        }
        S.tU = _.tU = _.tUC = function (a) {
            return a.toUpperCase()
            return S(a) ? a.toUpperCase() : A(a) ? _.m(a, function (a) {
                return S.tU(a)
            }) : a
        }

        _.toU = function () {
            _.e(G(arguments), function (g) {
                g = undefined
            })
        }


        S.tU = function (a) {
            return S(a) ? a.toUpperCase() : A(a) ? _.m(a, function (a) {
                return S.tU(a)
            }) : a
        }
        S.iU = function (a) {
            if (S(a)) {
                return s$(a).isUpper()
            }
        }


    }
    function lower() {
        S.iL = function (a) {
            return S(a) ? a.toLowerCase() : A(a) ? _m(a, function (a) {
                return lC(a)
            }) : a
            //Lc=function(a){if(_.isString(a)){return s$(a).isLower()}}
        }
        S.tL = _.tL = _.tLC = function (a) {
            return a.toLowerCase()

        }


        _.tLc = _.tL = _.tLC = function (a) {
            return a.toLowerCase()
        }
        _.tUc = _.tU = _.tUC = function (a) {
            return a.toUpperCase()
        }

    }
    function right() {

        S.af = _.af = function (a, b) {
            return a.split(b || '/')[0]
        }

        _.eW = function (a, b) {
            return l$(a, _z(b)) == b

            //_.eW = function (a, b) {return s$(a).endsWith(b)}
        }
        S.cR = function (a, b) {
            return s$(a).chompRight(b).s
        }
        S.eR = function (a, b) {
            return s$(a).ensureRight(b).s
        }
        S.r = function (a, b) {
            var g = G(arguments)
            return g.n ? s$(a).chompRight(b).s :
                s$(a).ensureRight(b).s
        }
        _.slash = _.ensureSlash = function (str) {
            var hasSlash = str[0] == '/'
            return hasSlash ? str : '/' + str
        }

        //before('.')
// _.xxx=function e(p,q,w){return S(p) && s(q)? _.eW(p,q) :S(q)?  e(p,function(v,k){eval(q)}, w)}

    }
    function left() {
        S.bf = _.bf = function (a, b) {
            return a.split(b || '.')[0]
        }
        S.cL = function (a, b) {
            return s$(a).chompLeft(b).s
        }
        S.eL = function (a, b) {
            b = b || '/';
            return s$(a).ensureLeft(b).s
        }


        _.left = function (a, b) {
            var g = G(arguments)
            return S(b) ? (!g.m ? s$(a).ensureLeft(b).s
                : s$(a).chompLeft(b).s) : 0
        }
    }
    S.x = S.ext = _.ext = function (a, b) {
        if (S(a)) {
            return s$(a).contains('.') ? a :
                s$(a).ensureRight(b || '.png').s
        }
    }


    _.scl = function (v, a) {
        v.x *= a;
        v.y *= a;
        return v
    }
    _.def = function (a, b) {
        var g = G(arguments);
        a = a || {}
        return g.p ? D(a, oO(b || '' + 'D')) : D(a) ? a : b
    }
    _.inx = $.inx = function () {
    }
    _.er = function (z) {
        throw new Error(z)
    }
    _.ig = function () {
        if (_.has('Image', E(a))) {
            return E(a)
        }
    }
    _.eW = function (a, b) {
        return l$(a, _z(b)) == b
    }
    _.cc = function (a, b) {
        return (A(a) ? a : [a]).cc(b)
    }
    _.is = function (a) {
        return function (b) {
            return b === a
        }
    }
    _.io$ = function (a, b, c) {
        return a.indexOf(b, (c < 0 ? c + _z(a) : c))
    }
    _.pp = _.props = $p = function p(i, t, kK, vf, f) {
//get: index thing key //set: index thing key value [function] //setOb: index thing ob [function]
        if (O(kK)) {
            _.each(kK, function (v, k) {
                p(i, t, k, v, vf)
            })
        }                   //setOb
        if (U(kK)) {
            return _p(p, i, t)
        }
        if (vf == "*") {
            return p(i, t, kK, $r(kK))
        } // set it randomly?!
        else if (U(vf)) {
            return t[oO(i, kK)]
        }   //get
        else {
            f = f || _s  //function(t,k,v){t[k]=v}  //set
            f(t, oO(i, kK), oO(kK, vf, 'R'))
        }
        return t
    }
    _.met = _.mm = function f(i, x, m, g) {
//=met $m=
        if (U(i)) {
            return
        }
        if (U(x)) {
            return _p(f, i)
        }
        if (U(m)) {
            return _p(f, i, x)
        }// if(U(g)){return _p(f,i,x,m)}
        if (!A(g)) {
            return _a(f, [i, x, m, _r(arguments, 3)])
        }//met('x',  c.x, 'd',  [i,0,0]     )//met('x',  c.x, 'd',   i,0,0   )
        return _a(x[oO(i, m)], g, x) || x
    }
    _.hs = function _h(a, b, c) {
        if (O(b)) {
            return _h(b.toString(), a)
            //  if( A(a)){return_.ct(a,b): _.has(a,b)}
        }
        if (S(a)) {
            return s$(a).contains(b, c)
        }
    }
}
function classic() {
    vkl=function(a){return new Function("v","k","l","l[k]=" + a)}



    $w=window; $$w=$(window)
    S.url = function(a){return 'url("' +a+ '")' }
    _.iDU=  function(a){ return s$(a).ct('data:') }


    _.in1 = $.in1 = function (time) {
        time = ( N(time) ? time : 1) * 1000
        cjs.wait = true
        return _.sT(function () {
            cjs.wait = false
        }, time)
    }
//_.toU = function () {     _.e(G(arguments), function (g) {g = undefined})}
//_.left = function(a,b){var g=G(arguments); return S(b)? (!g.m?  s$(a).ensureLeft(b).s :s$(a).chompLeft(b).s):0}
// S.r=function(a,b){var g=G(arguments); return  g.n?  s$(a).chompRight(b).s: s$(a).ensureRight(b).s }
// String.prototype.ensureSlash=function(){var hasSlash = this[0] = '/'; return hasSlash? this: '/'+this}
// _.xxx=function e(p,q,w){return S(p) && s(q)? _.eW(p,q) :S(q)?  e(p,function(v,k){eval(q)}, w)}

    _.vl = _v = function (a) {
        return S(a) ? function () {
            Function(a)()
        } : F(a) ? a : F(a.value) ? a.value() : a.value
    }
    _.fT = function (times, func) {
        var timeout
        if (N(times)) {
            return _.times(times, function (i) {
                func(i + 1)
            })
        }
        if (F(times)) {
            timeout = N(func) ? func : 100
            func = times
        }
        return setTimeout(func, timeout)
    }

    cann=function(){
        C =    function(a){if(_.isObject(a= E(a)||a)){return a.canvas? a.canvas  :
            s$(a.toString() ).contains('Canvas') ? Q(a)[0]:0}
        }
        $.iC = $.isCan = function (can) {if (O(can)) {
            return $(can)[0].constructor.name == "HTMLCanvasElement"}};

    };cann()
    keyy=function(){
        $.sp=$.space = function (fn) {
            return $.kD('space', fn)
        }

    }
    body=function(){
        $.iBE=$.isBodyElement = function (e) {     e = $(e)[0];
            return O(e) && uC(e.tagName) == 'BODY'}

        bd=function(){var bd= $('body')
            return bd}

        $.dc=function(){var dc
            dc = $(this.document)
            return dc
        }

        $.bd=function(){var dc
            bd = $('body')
            return bd
        }
        $.dcH=function(a){
            $(a).H( $.dc().H() )
        }
        $.dO=function(a,b,c){//$.dL=$.dR=
            $.dc().on(oE(a),b,c)
        }

        $.c$=function(c){
            $.bd().C(c||$r())}
    };body()
    muse=function(){

        $.tap=function(fn){$('body').on('keydown mousedown', fn);return $}

    };muse()


    inp=function(){
        $.sels= $.selects=function(fn){
            var selects=$('select');
            if(fn){ selects.on('change', fn) }
            return selects}
        $.boxes=function(fn){
            var b = $("input[type='checkbox'],input[type='radio']");
            if(fn) {  b.$( fn ) }
            return b
        }
        $.inputs=function(f){$.selects(f); $.boxes(f)}
        $.getChecked=function(name){return $("input[type='radio'][name="+name+"]:checked").val()};

    };inp()
    oh=function(){
        $.oh  = function (a, b, c) {
            if (A(a)) {return _.e(a, "$l(E(v).outerHTML)")}
            $l(E(a).outerHTML)
        }
        $.fn.oh=function(){return this[0].outerHTML}
        $.oh=function(){
            return $l($('body').oh())
        }
    };oh()

    $.tSrc=$.tDu=function(s){
        return  S(s)?sJ:tU(s)? tU(s)
            :s.u? s.u():iI(s)? s.src
            : s.image?s.image.src:0} //s/c/C/i/b->s sync
    $.XML=function(){return new XMLHttpRequest()}
    $.col = function (a,b){var g=G(arguments),
        o=O(a)? {q:g[0], c:g[1]} : {c:g[0]}
        o.q= o.q || $.bd()
        o.c = o.c? oO('c', o.c) : $r()
        return   $.ss(o.q,'C', o.c)
    }
    $.at= $.aa=$.attrs = function aa(q,b,c){// aa=

        q=Q(q);
        var  att=function(q,b,c){q=Q(q);
            if(U(c)){return q.attr(oO('a',b))}
            return q.attr(oO('a',b),$o(b,c,'R'))};
        return  U(b)? _p(aa,q)
            :A(b)? _r(b,function(m,k){
            return _s(m,k,aa(q,k))},{})
            :O(b)? $p('a',q,b,att)
            :att(q,b,c)
    }
    $.pp=$.props = function pp(q,b,c){// pp=
        q=Q(q);
        var rop=function(q,b,c){
            q=Q(q);
            if(U(c)){return q.prop( oO('o', b) )}
            return q.prop(oO('o',b),
                $o(b,c,'R'))};
        return U(b)? _p($.props,q)
            :A(b)? _r(b,function(m,k){
            return _s(m,k,HTML5.props(q,k))},{})
            :O(b)? $p('o',q,b,rop)
            :rop(q,b,c);
        //ex:  val=function(type, key){return HTML5.props(type,'v',key)}
        //ex:  typ=function(type, key){return HTML5.props(type,'t',key)}
    }  //changed p -> o (oO)
    $.K= $.class =  function(q){q=qq(q);
        return function kl(k,j){
            var g=G(arguments);
            if(U(k)){return q.at('k')}
            if(g.p){return q.q.hasClass( oO('k',k) )}
            if(k==='-'){q.q.removeClass( oO('k',j) )}
            else if(g.n){q.at('k', oO('k',k) )  }
            else {_.e(_S(k,' '),function(k){
                q.q.addClass (oO('k',k))})}
            $l(kl());
            return kl}
    }

    $.word = function (t, c1, c2) {return $.sp(t).C(c1, c2).A().dg()}


    E=function E(a,b,c){
        if(O(a)){
            a = O(a.e)? a.e :O(a.c)? a.c :a
            a=$(a)[0]
            if ( _.isElement(a) ){return a}
        }
    }


    other=function(){
        wQ=function(){
            Qx=function Q(a){
                if(!_.isObject(a)){return}
                if(s$(a.toString()).contains('Window')||a[0]
                    && s$( a[0].toString()).contains('Window')){
                    return $(window)}
                return a.name === 'q'? Q(a.q)
                    :E(a)? $(E(a))
                    :0
            }
            dom=function(){

                //outerH
                H=function(a){var oH=function(a){
                    if(O(a=a||$(window))){return Q(a).outerHeight()}}
                    a=a||$(window);return N(a)? W()/a:oH(Q(a))
                }
//innerWidth
                iW = function(a){if(O(a=a||$$w)){return Q(a).innerWidth()}}
//innerHeight
                iH = function(a){
                    if(O(a=a||$$w)){
                        return Q(a).innerHeight()
                    }
                }
                //_.tg=function(a){O(a)?(a.target? a.target: Q(a)[0]) :a}
                Wx=function(a){var g=G(arguments),
                    oW=function(a){
                        if(O(a=a||$(window))){return Q(a).outerWidth()
                        }}
                    return N(a)? W()/a: oW(Q(a))
                }


            };dom()

        };wQ()
        qx = function(a){return xx(qi(a))}
        qiv=function(a){return qi(a).v()}
        Yano.func = function(){$('body').C('*')}
        Yano.interval = 1000
        Yano.intervalID = null
        Yano.toggleFunc = function self(func, interval){
            //when you call this straight:
//it checks if a Y-func is currently running (by seeing if Y.intervalID is set)
//if it is, it clears the Y-func.. (and then unsets the Y.intervalID)
// if func not running, it does setInterval, saving the returned # as Y.intervalID
// if you pass in a neg, it will only toggle(turn) off
// if you pass in a pos, it will only toggle(turn) on

            var args = G(arguments),
                func = args[0],
                interval = args[1]


            if(Yano.intervalID){if(args.P){
                clearInterval(Yano.intervalID)
                Yano.intervalID=null
            }}
            else{
                if(args.N){
                    Yano.intervalID = setInterval(Yano.func, Yano.interval)
                }}
        } //rat
        Yano.setToggleFunc = function (func, interval){

            if(func){Yano.intervalFunc = func}
            if(interval){Yano.interval =  interval}

            Yano.setIntervalID = setInterval(Yano.intervalFunc,  Yano.interval)
            return Yano.toggleFunc
        }
        ddd=function(){return (d= $.d().C('y').Z().a())}
        ccc=function(){return (c=$b($c()).dg())}
        $.fA=function(a){return function(){alert(a)}}
        $.fL=function(a){return function(){$l(a)}}
    }


    xP=function(a){return Utils.props('X', X(a))}

    xM=function(a){return Utils.methods('x', X(a))}

    val=function(type, key){
        return HTML5.props(type,'v',key)}

    typ=function(type, key){
        return HTML5.props(type,'t',key)}
    oO.V =  function(a){return _.values( S(a)? oO(a): a)}
    $.oR= onReady =_k = function(a){return O(a) && a.complete}
    $.ld=function(a,b){$(a).load(b);
        return a
    }
    $.ht=function(a){var ht=$('html')
        if(U(a)){return ht}
    }
    $.wh =function(a,b){return  D(b)?a.which==b:  a.which}
    _.plOb=function(a){return O(a)&&!_.isFunction(a)&&!A(a)&&!(E(a))}
    $.PS=function(a,b,c){$(a).parents(b,c)}
    _.px=function(){return _.nN(a)?a+'px' :a}
    _.c=function(c,orC){if(c=='*'){c=$r()}; return oO('c',c||orC)}
    $$$ = function(a){$(_v(a))}

    REL=function(g,q){
        sG=size(g);  sQ=size(q);
        return {
            G:sG, Q:sQ,
            more: sG > sQ,
            less:  sG < sQ,
            same: sG == sQ,
            notLess :sG >= sQ,
            notMore : sG <= sQ}}



    $do=function(a,b,c,d){
        if(F(b)){b(a,c,d)}
        if(S(b)){$w[b]=a}
        return a}



    $ev=function(a){return function(){eval(a)}}


    $$$=function(a){$($ev(a))}


    $g=ag=function(b){
        return function(a,c){c=c||'e'

            var ck=function(a){return is(a[0], a[1])},
                s=sC(a),S=_z(s),B=_z(b)

            return c=='m'? aM(b)
                :c=='l'?aL(b)
                :c=='n'?aN(a,b)
                :c=='s'?aS(a,b)
                :c=='a'?aA(a,b)
                :aE(b)}}

    ag=function(a,b,c){
        var i=is(c||'e')
        var f= i('m')? aM
            :i('l')? aL
            :i('n')? aN
            :i('s')? aS
            :i('a')? aA
            :aE
        return f(a,b) }


    V=function(a){

        if(_.isString(a)){ a=oO(a) }

        return _.values(a)
    }
    W=function(a){var g=G(arguments)
        var oW=function(a){if(_.isObject(a=a||$(window))){
            return Q(a).outerWidth()}}
        a=a||$(window);
        return N(a)?W()/a:oW(Q(a))
    }

    sC=function(a){return a.split(',')}
    yes=function(a){return a[1](a[0])};
    no=not(yes)
    yesNo=function(P){
        return function(Q){
            return function(Y){return Q(P, Y) }}}

    Range = function (a, b) {

        var args = G(arguments)

        return _.isNumber(b) ? _.range(a, b)

            : args.P ? _.range(a)

            : _.range(1, (a || 10) + 1)

    }
    scaleXandYBy = scl = function (v, a) {
        v.x *= a;
        v.y *= a;
        return v
    }

//??? sub=function(a,b){return a.o('s',b)}


    H = function (a) {
        var oH = function (a) {
            if (O(a = a || $(window))) {
                return Q(a).outerHeight()
            }
        }
        a = a || $(window);
        return N(a) ? W() / a : oH(Q(a))
    }

//logic
    df = function (a, b) {
        a = ob(a)
        return G(arguments).p ? D(a, oO(b || '' + 'D'))
            : D(a) ? a : b
    }


    function log() {
//cL=function(a){console.log(a);return a}

        ll = function (a, b) {
            if (_.isString(b)) {
                console.log(a + ': ' + b)
            }
            else {
                $l(a + ' ->')
                $l(b)
            }
            return b
        }
        lC = function (a) {
            return S(a) ? a.toLowerCase()
                : A(a) ? _m(a, function (a) {
                return lC(a)
            }) : a
        }
        Lc = function (a) {
            if (_.isString(a)) {
                return s$(a).isLower()
            }
        }


        _l = function (a, b) {

            if (_.isFunction(b)) {
                $(a).load(b);
                return a
            }
            return _.last(a, b)

        }

    }

    _m = function (a, b, c) {
        return _.isFunction(b) ? _.map(a, b, c)
            : A(a) ? _.min(a) : function (z) {
            return z * a
        }
    }


    _h = function _h(a, b, c) {

        if (_.isObject(b)) {
            return _h(b.toString(), a)
        }

        if (_.isString(a)) {
            return s$(a).contains(b, c)
        }

        if (_.isObject(a)) {

            if (_.isUndefined(b)) {
                return a.height ? (_.isFunction(a.height) ? a.height() : a.height) : _.isFunction(a.h) ? a.h() : N(a.h) ? a.h : false
            }
            if (N(b)) {
                if (_.isFunction(a.height)) {
                    a.height(b);
                    return a
                }
                if (N(a.height)) {
                    a.height = b;
                    return a
                }
                if (_.isFunction(a.h)) {
                    a.h(b);
                    return a
                }
                if (N(a.h)) {
                    a.h = b;
                    return a
                }
            }
            return A(a) ? _.contains(a, b) : _.has(a, b)
        }
        if (_.isUndefined(a)) {

            return qq($('html'))

        }
    }

    _I = function (a, b) {
        return _.isUndefined(a) ? new Image()
            : _.isUndefined(b) ? _.invert(a)
            : _a(_.intersection, arguments)
    }

    I = function (a, b) {
        if (N(b)) {
            return setInterval(_v(a), b)
        }
        if (_h('Image', E(a))) {
            return E(a)
        }
    }

    _w = function (a, b) {

        if (_.isObject(a)) {

            var w = function (a, b) {
                if (_.isUndefined(b)) {
                    return a.width
                }
                a.width = b;
                return a
            }
            if (_.isUndefined(b)) {
                return _.isFunction(w(a)) ? a.width() : w(a) ? w(a) : _.isFunction(a.w) ? a.w() : a.w
            }
            if (_.isFunction(w(a))) {
                a.width(b)
            }
            else if (w(a)) {
                w(a, b)
            }
            else if (_.isFunction(a.w)) {
                a.w(b)
            }
            else {
                a.w = b
            }

            return a
        }
    }


    M = nN = function (w) {
        return Boolean(Number(w))
    }

    Nn = _.isNan

    _i = function (a, b) {
        return _.isUndefined(a) ? qq('i') :
            A(a) ? _.initial(a, b) : pI(a)
    }


    is = function (a) {
        return function (b) {
            return b === a
        }
    }

    io$ = function (a, b, c) {
        return a.indexOf(b, (c < 0 ? c + _z(a) : c))
    }


    J = function (a, b, c) {
        if (_.isString(a)) {
            return $.getJSON(a, b, c)
        }
        ;
        return JSON.stringify(a)
    }


    _j = function (a, b) {
        return (a || []).join(b || ' ')
    }

    K = function (a, b, c) {
        return N(a) ? I(b, a * 1000)
            : N(b) ? I(a, b) : _.keys(a)
    }

    _k = function (a) {
        return O(a) && a.complete
    }

    L = function (a, b) {
        var g = G(arguments)
        return S(b) ? (g.N ? s$(a).ensureLeft(b).s
            : s$(a).chompLeft(b).s) : 0
    }


    ob = function (o) {
        var g = G(arguments);
        return !O(o) ? {}
            : g.p ? o.clone()
            : o
    }


//get window?
    Wd = function (a) {
        if (_.isObject(a)) {

            if (s$(a).contains('Window') ||
                s$(a[0]).contains('Window')) {
                return window
            }

        }
    }


    fCC = function (a) {
        return String.fromCharCode(a)
    }

    Z = function (a) {
        if (A(a)) {
            return _a(_.zip, arguments)
        }
        return $(window).resize(a || function () {
            co()
        })
    }

    z = function () {
        $('body').empty()
    }


    $$$ = function (a) {
        $(_v(a))
    }
    qx = function (a) {
        return xx(qi(a))
    }


//ddd=function(){return (d=_d().c('y').Z().a())}
//ccc=function(){return (c=$b($c()).drg())}

//test functions
    fA = function (a) {
        return function () {
            alert(a)
        }
    }
    fL = function (a) {
        return function () {
            $l(a)
        }
    }
//a3=function(){alert(3)}
//a4=function(){alert(4)}
//al=function(a){a=a||':)';alert(a);return a}


    _S = function (a, b) {
        return b ? String(a).split(b) : a.toString()
    }


    _r = function r(a, b, c, d) {

        return _.isUndefined(a) ? rnd()
            : (_.isFunction(b) && D(c)) ? _.reduce(a, b, c)
            : (_.isFunction(a) && D(c)) ? _.reduceRight(a, c, b)
            : (_.isFunction(a) || _.isFunction(b)) ? r(c, a, b)
            : N(a) ? _.random(a, b, c)
            : S(a) ? a.replace(b || '#', c || '')
            : _.rest(a, b)
    }


    ok = function (a) {
        return a || 'ok'
    }


    _P = function (a, b, c) {
        return S(a) ? JSON.parse(a, b)
            : $(a).prepend(b, c)
    }

    P = function (a) {
        return O(a) && !_.isFunction(a) && !A(a) && !(E(a))
    }


    _p = function (a, b, c) {

        if (_.isUndefined(a)) {
            return qq('p')
        }

        return (c === 0) ? function (c, d) {
            return a(c, b, d)
        }

            : _.isFunction(a) ? _a(_.partial, arguments)

            : O(a) ? (G(arguments).N ? $(a).parents(f)

            : $(a).parent(f))

            : S(b) ? (S(a, b) ? a : b + a)

            : nN(a) ? a + 'px'

            : a
    }


    _b = function (a, b, c) {
        return _.isUndefined(a) ? qq($('body'))//--
            : _.isFunction(a) ? _.bind(a, b, c)//

            : S(a) ? a.split(b || '.')[0] //before('.')

            : _.bindAll(a, b, c)//
    }


    _e = function e(p, q, w) {
        var eW = function (a, b) {
            return l$(a, _z(b)) == b
        }
        if (_.isUndefined(p)) {
            return qq('li')
        }
        if (_.isUndefined(q)) {
            return p.empty()
        }
        if (_.isFunction(p)) {
            p = O(p)
        }
        return (_.isString(p) && _.isString(q)) ? eW(p, q)
            : S(q) ? e(p, function (v, k) {
            eval(q)
        }, w)
            : _.each(p, q, w)
    }
    _F = function (a) {
        if (A(a)) {
            return _.flatten(a)
        }
    }
    _f = function (a, b, c) {

        return _.isUndefined(a) ? qq('f') // need to deprecate this

            : _.isFunction(b) ? _.find(a, b, c)

            : _.first(a, b)

    }


    _g = function (a) {

        if (_.isArray(a)) {
            a = _.first(a)
        }

        return _.isFunction(a) ? a
            : _.isObject(a) ? (a.target ? a.target : Q(a)[0])

            : a
    }


    _C = function (a, b) {
        return _.isUndefined(a) ? _c()[0]
            : A(a) ? _.compact(a)//dep
            : a.connect(b)
    }

    _c = function (a, b) {

        if (N(a)) {
            clearInterval(a)
        }

        return _.isUndefined(a) ? qq('c').k('can')
            .at({w: 100, h: 100})
            : b ? (A(a) ? a : [a]).concat(b)
            : O(a) ? a.children()
            : 0
    }

    _t = function t(a, b, c) {
        return _.isUndefined(a) ? qq('t')
            : N(a) ? _.times(a, _v(b), c)
            : D(b) ? $(a).text(b)
            : S(a) ? t(_b(), a)
            : $(a).text()
    }

    tA = function (a) {
        return O(a) ? _.toArray(a) : [a]
    }


//just returns toDataUrl() on an object, safe
    tU = function (a) {
        if (
            O(a) && _.isFunction(a.toDataURL)) {
            return a.toDataURL()
        }


//tU=function(s){return  S(s)?sJ:tU(s)? tU(s)
// :s.u? s.u():iI(s)? s.src
// : s.image?s.image.src:0} //s/c/C/i/b->s sync
    }

    tDU = function (a) {
        return a.toDataURL()
    }


    _W = function (a, b) {

        if (_.isUndefined(b)) {
            return a.which
        }
        return a.which == b
    } //_.without


    R = function (a, b) {

        var g = G(arguments)

        return ( _.isString(a) && _.isString(b) ) ? (
            g.N ? s$(a).ensureRight(b).s

                : s$(a).chompRight(b).s    )

            : N(b) ? _.range(a, b)

            : N(a) ? (g.P ? _.range(a) : _.range(1, (a || 10) + 1)   )

            : new XMLHttpRequest()

    }


    _s = function s(a, b, c) {

        var g = G(arguments)

        if (D(g[1])) {
            a[b] = c;
            return a
        }

        if (_.isUndefined(a)) {
            return qq('s')
        }

        return src(a)
    }
}
function old() {
//tf=function(){n=1;t=true;T(function(){t=false},1000);I(function(){if(t==true){co();n=n+1}else{$l(n)}},1)}


    ll = function (a, b) {
        if (S(b)) {
            console.log(a + ': ' + b)
        }
        else {
            $l(a + ' ->');
            $l(b)
        }
        ;
        return b
    }
//xP=function(a){return Utils.props('X', X(a))}
//xM=function(a){return Utils.methods('x', X(a))}


    G1 = function (a) {
        //if(!_.isArguments(a)){return}
        var p, n, m, d
        a = _.toArray(a)
        if (_.last(a) === '+') {
            p = a.pop()
        }
        if (_.last(a) === '-') {
            n = a.pop()
        }
        if (_.last(a) === '*') {
            m = a.pop()
        }
        if (_.last(a) === '/') {
            d = a.pop()
        }

        return D(a, {

            z: a.length,
            f: _.first(a),
            l: _.last(a),
            r: _.rest(a),
            i: _.initial(a),
            p: p,
            P: !p,
            m: m,
            M: !m,
            d: d,
            D: !d,
            n: n,
            N: !n

        })
    }

    /* S1=function(a,b,c){
     return _.isUndefined(b)? (_.isString(a)? $.span().html(a):0  )
     :N(b)? a.substr(b,c)
     :S(b)? s$(a).startsWith(b)
     :_.some(a, b||F,c)
     }
     */
//  nN=function(w){return Boolean(Number(w))}//M=
//  Nn = _.isNan

}
function toHtml(){

//pass in size, and then args(contents) as a list (or as an array)
    $.col = function(){  var args = G(arguments),

        div= $.div().addClass( 'm' + args[0] ),

        iter = A( args[1])?  args[1] : args.r

        _.each( iter, function(v){ div.A(v) } )

        return div }

    $.ipsum=function(len){   len = len || 1
        var str = ''
        _.t(len, function(){
            str = str +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
        })
        return str}
    $.ipsumP=function(len){return $.p().A($.ipsum(len) )}
    $.i2= $.img2 = function(img, func){

        i = $.img().src(img)

        func(i[0])

        //s$(e).contains('data:')
        return i}
    $.i = $.img=function(source, func){

        var img = $( new Image() )

        //gets rid of auto-scaling quirk
        img.load(function(img){
            var img = $(img.target)
            // img.W( img.W() )
            // img.H( img.H() )
        })

        if(func){
            img.load(function(event){
                func($(event.target), event)})}

        if(source){
            img.src(src(source))
        }

        return img
    }
    $.hr2 =  function(c,h,w){

        var e = qq('hr')

        if( N(c) ){  return hr('z', c, h)  }

        e.h(h||2)

        e.c(c||'z')

        if(w){ e.w(w) };return e
    }
    $.sp2 = function(){

        var args=G(arguments),
            theSpan=$('<span>'), str=''

        _.each(args,

            function(val){

                if(S(val)){ str+= val }

                else { theSpan.A( val ) }})

        if(str){ theSpan.text(str) }

        return theSpan}
    $.tH= $.thead=function(){return _a( qq($('<thead>')),arguments)}
    $.tB=$.tbody=function(){return _a( qq($('<tbody>')),arguments)}
    $.strong=function(){


        var g=G(arguments),
            s=qq($('<strong>'))


        _e(g,function(g){
            s(g)
        })


        return s}
    $sc= $.section=function(a,b){return qq($('<section>')).id(a).s(b)}
    $.aOld =function(textAndId, hrefOrFunc){

        var args=G(arguments), a=args[0], hrefOrFunc=args[1],

            theEl = qq('a').id(textAndId)(textAndId)

        if (F(hrefOrFunc)) {theEl.o(hrefOrFunc)}

        else {theEl.hr(hrefOrFunc||'#')}

        return (args.n)? theEl.k("dropdown-toggle")


            //  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"


            :(args.m)? li(theEl).k('active') :(args.p)? li(theEl)

            :theEl}
    $.headerHuhhhh=function(name,val){
        return $.input().type('header')
            .name(name).val(val)

    }
    $.header=function(){


        var header = $('<header>')


        return header}
    $.footer=function(){return $('<footer>')}
    $.ol=function(o,b){var g=G(arguments),
        ol=$('<ol>')
        _.each(g, function(v){ol.A(v)})
        return ol}
    $.td=function(){
        return $('<td>')
    }
    $.tr=function(){return $('<tr>')}
    $.bold= function(a,k){

        var g=G(arguments),
            h=g.p?'&nbsp;'+a:a;
        return $('<bold>').H(h).k(k)

    }
    $.iframe=function(){

        z()
        d=dva()
        ifr=qq($('<iframe>'))
        ifr.w(1000).h(1000).c('b')
        ifr.q[0].src='http://www.playboy.com'
        d(ifr).P(30)

    }
    $.th=function(a){

        var h = qq($('<th>'))

        if(a){h(a)}

        return h}
    $.inlineDiv=function(a,b,c){
        var theDiv = dv(a, b, c)
        theDiv.display('inline')
        return theDiv
    }
    $.inlineBlockDiv=function(a,b,c){

        var theDiv = dv(a, b, c)

        theDiv.display('inline-block')

        return theDiv

    }
    $.dva=function f(r,w,h,l,t){

//color, width, height, left, top
        var g=G(arguments),r=g[0],w=g[1],h=g[2],l=g[3],t=g[4],d
        if(!S(r)){
            return g.n?

                f($r(),r,w,h,l,'-')

                : g.p?f($r(),r,w,h,l,'+')
                : f($r(),r,w,h,l)}


        d=_d().p('a').c(r).a()

        if(g.p){
            if(w){d.l(w)}
            if(h){d.t(h)}
            d.P(16)
            return d.auto()}


        w=w||1
        h=h||w
        d.w(w*100)
        d.h(h*100)

        l=l||0
        t=t||l
        d.l(l*100)
        d.t(t*100)


        if(g.N){d.drg()}
        return d}

    DEBOUNCE=function(){W()

        s=0
        u=0
        d=0
        l=0
        r=0


        b= w.S(600, 300, 'b', 100)

        $.space(_.debounce(function(){$l('space ' + s++)}, 1000))

        $.kD('u', _.debounce(function(){$l('up '+u++)}, 1000, true))



    }

    $.do=function(func){
        setTimeout(func,0)
        return 'nada'}
//
    $.G = function self(path, dataOb, func){
////
//fix later!

        if(F(dataOb)){return self(path, {}, dataOb)}
        dataOb = dataOb || {}
        func = func || function(){return 'boo ya!'}


        $.get('/' + path, dataOb,

            function(data){

                d = data

                console.dir(data)

                func(data)

            })
    }
    $.P = function(path, dataOb){
        dataOb = dataOb || {}
        if(!O(dataOb)){ dataOb = {data: dataOb} }



        $.post('/' + path, dataOb,


            function(data){

                d =data

                console.dir(d)

            })

    }
    $.qJ = qJ=function rc(u,d,f){var g,u,d,f
        if(U(d)){return _p(rc,u)}
        g=G(arguments);u=g[0];d=g[1];f=g[2]
        if(F(d)){f=d;d={}}
        $.getJSON(u,d,g.P?f:function(ss){
            _.each(ss,function(s){f(s,ss)})})}
    $.qJE =qJE=function rc(u,d,f){var g,u,d,f
        if(U(d)){return _p(rc,u)}
        g=G(arguments);u=g[0];d=g[1];f=g[2]
        if(F(d)){f=d;d={}}
        $.getJSON(u,d, function(ss){
            _.each(ss,function(s){f(s,ss)})})}
    $.qP= qP=function rc(u,d,f){var g,u,d,f
        if(U(d)){return _p(rc,u)}
        g=G(arguments);u=g[0];d=g[1];f=g[2]
        if(F(d)){f=d;d={}}
        $.post(u,d,g.P?f:function(ss){
            _.each(ss,function(s){f(s,ss)})})}
    $.qPE= qPE=function rc(u,d,f){var g,u,d,f
        if(U(d)){return _p(rc,u)}
        g=G(arguments);u=g[0];d=g[1];f=g[2]
        if(F(d)){f=d;d={}}
        $.post(u,d, function(ss){
            _.each(ss,function(s){f(s,ss)})})}
    $.qG=qG=function rc(u,d,f){
        var g,u,d,f
        if(U(d)){return _p(rc,u)}
        g=G(arguments);u=g[0];d=g[1];f=g[2]
        if(F(d)){f=d;d={}}
        $.get(u,d,g.P?f:function(ss){
            _.each(ss,function(s){f(s,ss)})})}
    $.qGE=qGE=function rc(u,d,f){
        var g,u,d,f
        if(U(d)){return _p(rc,u)}
        g=G(arguments);u=g[0];d=g[1];f=g[2]
        if(F(d)){f=d;d={}}
        $.get(u,d,function(ss){
            _.each(ss,function(s){f(s,ss)})})}
    function cssTran(){
        $.fn.trans=function(transform){
            $l('transform')
            return this.css({transform: transform})}
        testCSSRotate=function(){z()

            //works

            $.h1('css transform: rotate').A()

            d = $.div('x', null, 200).A()
            //   d.css({transform: 'translateY(300px) rotateZ(120deg)'})

            d.trans('translateY(300px) rotateZ(120deg)')

        }
        testCSSScal=function(){z()


            $.h1('css transform: scale').A()

            i= $.img('me').A()

            // d = $.div('r', null, 200,200).A()


            $.img('me').A().transform( 'scaleX(2)' )
            $.img('me').A().transform( 'scaleY(2)' )

            $.img('me').A().transform( 'scaleZ(2)' ) //does nothing?!


            $.img('me').A().transform( 'rotate3d(100,100,100,100)' )

        }}

    function css() {
        HTML5 = {}

        _.$Id=function(str){
            str = str.replace('$', '#')
            str = str.replace('_', '.')
            return str
        }
        $.x= $.E=z=$.z=$.show=function(c,t){var g=G(arguments)
            $('body').empty()
            bd= $.bd()
            if(g.O_){

                $CSS(g.f)
                if(g.s){$.h1(g.s);$.hr().A()}
                bd.C($r())
                return $}

            if(c){bd.C(c)} else {bd.C($r())}
            if(t){bd.A($.h1(t))}
            if(g.p){bd.A($.hr())}
            return $
        }
        $.h=  function(){var g=G(arguments),o
            bd= $.bd()
            bd.empty()
            bd.C($r())
            o= g.S_? {t:g.f, s: g.s}: {s: g.f}
            if(o.s){$CSS(o.s)}
            if(o.t){$.h1(o.t);$.hr().A()}
            return $
        }
        $t = function(a, b){if(b2d.test){
            var g=G(arguments), a=g[0], b=g[1],str
            if(D(b)){ str='||'
                _.e(g, function(s){str+=  ' '  + s.toString() + ' |'})
                str += '|'}
            else {str = a.toString()}
            $l(str)}
            return a
        }

        $.CSS = HTML5.CSS = ss = function ss(q, b, c) {

            if (U(b)) {
                return $l(_p(ss, q))
            }

            var s = function (a, b, c) {

                if (U(c)) {
                    return $l(a.css(oO('s', b)))
                }

                a.css(oO('s', b), $o(b, c, 'R'))

                $l(s(a, b))

                return q
            }


            q = Q(q)
            return A(b) ? _r(b, function (m, k) {
                return _s(m, k, ss(q, k))
            }, {})
                : O(b) ? $p('s', q, b, s)
                : s(q, b, c)

        }
        $.attrs = HTML5.attrs = aa = function aa(q, b, c) {
            q = Q(q)
            var att = function (q, b, c) {
                q = Q(q)
                if (U(c)) {
                    return q.attr(oO('a', b))
                }
                return q.attr(oO('a', b), $o(b, c, 'R'))
            }
            return U(b) ? _p(aa, q)
                : A(b) ? _r(b, function (m, k) {
                return _s(m, k, aa(q, k))
            }, {})
                : O(b) ? $p('a', q, b, att)
                : att(q, b, c)
        }
        $.props = HTML5.props = pp = function pp(q, b, c) {
            q = Q(q)

            var rop = function (q, b, c) {
                q = Q(q)

                if (U(c)) {
                    return q.prop(oO('o', b))
                }
                return q.prop(oO('o', b),
                    $o(b, c, 'R'))
            }

            return U(b) ? _p(HTML5.props, q)
                : A(b) ? _r(b, function (m, k) {
                return _s(m, k, HTML5.props(q, k))
            }, {})
                : O(b) ? $p('o', q, b, rop)
                : rop(q, b, c)

            //ex:  val=function(type, key){return HTML5.props(type,'v',key)}
            //ex:  typ=function(type, key){return HTML5.props(type,'t',key)}

        }  //changed p -> o (oO)
        $.class = HTML5.class = kl = function (q) {
            q = qq(q)
            return function kl(k, j) {

                var g = G(arguments)
                if (U(k)) {
                    return q.at('k')
                }
                if (g.p) {
                    return q.q.hasClass(oO('k', k))
                }
                if (k === '-') {
                    q.q.removeClass(oO('k', j))
                }
                else if (g.n) {
                    q.at('k', oO('k', k))
                }
                else {
                    _e(_S(k, ' '), function (k) {
                        q.q.addClass(oO('k', k))
                    })
                }
                $l(kl())
                return kl
            }
        }
        $.font = HTML5.font = $f = FO = function (a, b) {

            if (O(a)) {
                return ss(oB(b), {fz: a || 50})
            }
            a = N(a) ? _S(a) : U(a) ? '' : a

            var px = function (a) {
                    return a + 'px'
                },
                F = 'fantasy', W = 'normal', S = 'normal', Z = px(100)

            _e(a.split(' '), function (p) {
                if (M(p[0])) {
                    p = p.split('/')
                    Z = px(p[0]) + ((p[1]) ? '/' + px(p[1]) : '')
                }
                F = Oo('ff', p) || F
                W = Oo('fw', p) || W
                S = Oo('fs', p) || S
            })

            return [W, S, Z, F].join(' ')
        }
        $.outline = HTML5.outline = OL = function OL(o, o2, o3) {
            if (Oo('c', o)) {
                o = {c: o, w: o2, s: o3}
            }
            if (S(o)) {
                o = o.split(' ')
                return $l(_j([$r('c', o[0]), _p(oO('ow', o[1] || 5)),
                    oO('os', o[2] || '-')]))
            }
            if (N(o)) {
                o = {w: o}
            }
            ;
            o = ob(o)
            return $l(_j([$r('c', o.c), N(o.w) ? _p(o.w) : $r('ow', o.w),
                $r('os', o.s)]))
        }
        $.qs = HTML5.qs = qs = function f(a, b) {

            var o = {},

                s = function (o, a, b) {

                    o [oO('s', a)] = oO(a, b, 'R')

                    return o
                }

            if (S(a)) {
                s(o, a, b)
            }

            else {

                _.each(a, function (v, k) {
                    s(o, k, v)
                })
            }

            return o

        }
        $.CSSRule = HTML5.CSSRule = CSSRule = setRule = uu = function f(a, b) {
            var sy, cl, rl


            style = sy = function (style) {
                return "<style type='text/css'>" + style + "</style>"
            }

            theRule = rl = function f(a, b) {

                var style = ''

                if (O(a)) {
                    _.each(qs(a), function (v, k) {
                        style += f(k, v)
                    })

                    return style
                }

                return a + ':' + b + '; '
            }

            createRule = function (a, b) {

                var rule = function (clas, css) {
                    return '.' + clas + '{' + css || '' + '}'
                }

                return hd(style(rule(a, b)))

            }


            if (O(a)) {
                _.each(a, function (v, k) {
                    f(k, v)
                })
            }

            createRule(a, theRule(b))

        }
        testRule = function () {
            z()
            $.div('b', 400, 400).A().A($.span('hifds'))


            $.CSSRule('div', 'color:Orange')


        }
        testStyle = function () {//WORKS

            $.div('b', 400, 400).A().A($.span('hifds')).id('div')

            var style = document.createElement('style');

            style.type = 'text/css';

            var rule = '.cssClass { color: #F00; }'

            style.innerHTML = rule

            $('head').append(style)

//////

            $('#div').K('cssClass')


        }
        $.addStyle = function () {
            _.each(arguments, function (rule) {

                $('<style>' + rule + '</style>').A()
            })


        }
        $.CSSReset = function () {
            $.CSSRule({
                '*': {m: 0, p: 0},  //css reset
                'html,body': {h: '100%', w: '100%'},
                canvas: {d: 'b'}
            })
        }
    }
    testPlugin=function(){ z()

        d = $.div('r' ).WH( 100 ).A().A( 'abc' )

        e = $.div().WH( 100 ).col( 'r' ).A().A( 'abc' )

        f = $.div('r').WH( 100 ).col( 'b' ).A().A( 'abc' )

        g = $.div( 'b' , 500 , 500 ).A() }
    FRIDGEMAGNETS=function(){z()

        word = function(text, c1, c2){

            var s= $.span(text).C(c1, c2).A().drag()

            return s}


        w=word('hello', 'b', 'g')

        word('sicko', 'g', 'b')

        word('why, i oughta..', 'p', 'x')

        word('it was raining..', 'j', 'k')

        word('who ya gonna call?', 'h', 'i')
        word('dag nabit!', 'f', 'g')

        word('i like', 'd', 'e')
        word('tomorrow', 'a', 'c')

        word('me', 'r', 'b')

    }
    testCan = function(){
        z()
        c= $.canvas('o', 500, 500).A()


        //c.save().lineWidth(30).setStrokeColor('r').lineTo([[100,100],[150,110]]).stroke().restore().lineTo([[200,100],[200,600]]).stroke()

        // c.roundRect(100,50,100,100,50).stroke()//.fill()

        //c.line(10,10,50,500).stroke()

        c.line([
            [[100,100],[200,200],[140,900]]
            // ,  [[150,150],[250,250], [20,300]]
        ]).stroke()

        //c.line([100,100],[200,200],[150,150],[250,250] ).stroke()
        //c.line( [350,50],[25,25],  [450,10],[20,550]).stroke()
    }
    VOLUME=function(){

        outerDiv = $.div('y', 400, 200 ).A().drag()

        r=$.row().W(600)

        r.A(
            $.div().id('booksDiv').addClass('col-md-6').A(    ) )

        r.A(
            $.div().id('displayDiv').addClass('col-dm-6').A(   $.img('guy')  )    )

        r.A().drag()


        Book=function(title){

            var book = $.div().A( $('<h4>').text( title||'book') ).H(60).C('b').addClass('book')

            book.display = $.img('me').hide().addClass('display')

            return book}
        addBook=function(title){

            var book=Book(title)

            $('#booksDiv').A( book )

            $('#displayDiv').A(   book.display      )

            $('.book').click(   function(){

                $(this).id()

            })

            return book
        }


        a= addBook('a')
        b=addBook('b')
    };
//mongoError: kill mongod processess!!!!  ps ax | grep mongod
    (function ($) {
        "use strict";
// jQuery('form').serializeJSON()
        $.fn.serializeJSON = function (options) {
            var serializedObject, formAsArray, keys, value, f, opts;
            f = $.serializeJSON;
            formAsArray = this.serializeArray(); // array of objects {name, value}
            opts = f.optsWithDefaults(options); // calculate values for options {parseNumbers, parseBoolens, parseNulls}
            serializedObject = {};
            $.each(formAsArray, function (i, input) {
                keys = f.splitInputNameIntoKeysArray(input.name); // "some[deep][key]" => ['some', 'deep', 'key']
                value = f.parseValue(input.value, opts); // string, number, boolean or null
                if (opts.parseWithFunction) value = opts.parseWithFunction(value); // allow for custom parsing
                f.deepSet(serializedObject, keys, value, opts);
            });
            return serializedObject;
        }

// Use $.serializeJSON as namespace for the auxiliar functions
// and to define defaults
        $.serializeJSON = {
            defaultOptions: {
                parseNumbers: false, // convert values like "1", "-2.33" to 1, -2.33
                parseBooleans: false, // convert "true", "false" to true, false
                parseNulls: false, // convert "null" to null
                parseAll: false, // all of the above
                parseWithFunction: null, // to use custom parser, use a function like: function (val) => parsed_val
                useIntKeysAsArrayIndex: false // name="foo[2]" value="v" => {foo: [null, null, "v"]}, instead of {foo: ["2": "v"]}
            },

// Merge options with defaults to get {parseNumbers, parseBoolens, parseNulls, useIntKeysAsArrayIndex}
            optsWithDefaults: function(options) {
                var f, parseAll;
                if (options == null) options = {}; // arg default value = {}
                f = $.serializeJSON;
                parseAll = f.optWithDefaults('parseAll', options);
                return {
                    parseNumbers: parseAll || f.optWithDefaults('parseNumbers', options),
                    parseBooleans: parseAll || f.optWithDefaults('parseBooleans', options),
                    parseNulls: parseAll || f.optWithDefaults('parseNulls', options),
                    parseWithFunction: f.optWithDefaults('parseWithFunction', options),
                    useIntKeysAsArrayIndex: f.optWithDefaults('useIntKeysAsArrayIndex', options)
                }
            },
            optWithDefaults: function(key, options) {
                return (options[key] !== false) && (options[key] || $.serializeJSON.defaultOptions[key]);
            },

// Convert the string to a number, boolean or null, depending on the enable option and the string format.

            parseValue: function(str, opts) {
                var value, f;
                f = $.serializeJSON;
                if (opts.parseNumbers && f.isNumeric(str)) return Number(str); // number
                if (opts.parseBooleans && (str === "true" || str === "false")) return str === "true"; // boolean
                if (opts.parseNulls && str == "null") return null; // null
                return str; // otherwise, keep same string
            },
            isObject: function(obj) { return obj === Object(obj); }, // is this variable an object?

            isUndefined: function(obj) { return obj === void 0; }, // safe check for undefined values
            isValidArrayIndex: function(val) { return /^[0-9]+$/.test(String(val)); }, // 1,2,3,4 ... are valid array indexes

            isNumeric: function(obj) { return obj - parseFloat(obj) >= 0; }, // taken from jQuery.isNumeric implementation. Not using jQuery.isNumeric to support old jQuery and Zepto versions
// Split the input name in programatically readable keys
// "foo" => ['foo']
// "[foo]" => ['foo']
// "foo[inn][bar]" => ['foo', 'inn', 'bar']
// "foo[inn][arr][0]" => ['foo', 'inn', 'arr', '0']
// "arr[][val]" => ['arr', '', 'val']
            splitInputNameIntoKeysArray: function (name) {
                var keys, last, f;
                f = $.serializeJSON;
                if (f.isUndefined(name)) { throw new Error("ArgumentError: param 'name' expected to be a string, found undefined"); }
                keys = $.map(name.split('['), function (key) {
                    last = key[key.length - 1];
                    return last === ']' ? key.substring(0, key.length - 1) : key;
                });
                if (keys[0] === '') { keys.shift(); } // "[foo][inn]" should be same as "foo[inn]"
                return keys;
            },
// Set a value in an object or array, using multiple keys to set in a nested object or array:
//
// deepSet(obj, ['foo'], v) // obj['foo'] = v
// deepSet(obj, ['foo', 'inn'], v) // obj['foo']['inn'] = v // Create the inner obj['foo'] object, if needed
// deepSet(obj, ['foo', 'inn', '123'], v) // obj['foo']['arr']['123'] = v //
//
// deepSet(obj, ['0'], v) // obj['0'] = v
// deepSet(arr, ['0'], v, {useIntKeysAsArrayIndex: true}) // arr[0] = v
// deepSet(arr, [''], v) // arr.push(v)
// deepSet(obj, ['arr', ''], v) // obj['arr'].push(v)
//
// arr = [];
// deepSet(arr, ['', v] // arr => [v]
// deepSet(arr, ['', 'foo'], v) // arr => [v, {foo: v}]
// deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}]
// deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}, {bar: v}]
//
            deepSet: function (o, keys, value, opts) {
                var key, nextKey, tail, lastIdx, lastVal, f;
                if (opts == null) opts = {};
                f = $.serializeJSON;
                if (f.isUndefined(o)) { throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined"); }
                if (!keys || keys.length === 0) { throw new Error("ArgumentError: param 'keys' expected to be an array with least one element"); }
                key = keys[0];
// Only one key, then it's not a deepSet, just assign the value.
                if (keys.length === 1) {
                    if (key === '') {
                        o.push(value); // '' is used to push values into the array (assume o is an array)
                    } else {
                        o[key] = value; // other keys can be used as object keys or array indexes
                    }
// With more keys is a deepSet. Apply recursively.
                } else {
                    nextKey = keys[1];
// '' is used to push values into the array,
// with nextKey, set the value into the same object, in object[nextKey].
// Covers the case of ['', 'foo'] and ['', 'var'] to push the object {foo, var}, and the case of nested arrays.
                    if (key === '') {
                        lastIdx = o.length - 1; // asume o is array
                        lastVal = o[lastIdx];
                        if (f.isObject(lastVal) && (f.isUndefined(lastVal[nextKey]) || keys.length > 2)) { // if nextKey is not present in the last object element, or there are more keys to deep set
                            key = lastIdx; // then set the new value in the same object element
                        } else {
                            key = lastIdx + 1; // otherwise, point to set the next index in the array
                        }
                    }
// o[key] defaults to object or array, depending if nextKey is an array index (int or '') or an object key (string)
                    if (f.isUndefined(o[key])) {
                        if (nextKey === '') { // '' is used to push values into the array.
                            o[key] = []
                        } else if (opts.useIntKeysAsArrayIndex && f.isValidArrayIndex(nextKey)) { // if 1, 2, 3 ... then use an array, where nextKey is the index
                            o[key] = []
                        } else { // for anything else, use an object, where nextKey is going to be the attribute name
                            o[key] = {}
                        }
                    }
// Recursively set the inner object

                    tail = keys.slice(1)

                    f.deepSet(o[key], tail, value, opts)
                }
            }
        }}(window.jQuery || window.Zepto || window.$))
    $.tree=function(){z();var s=200

        d = $.div().K('container')(

            $.p().K('tree_controls')(
                $.a('expand all').K('expand_all'),
                $.a('collapse all').K('collapse_all')
            )).A()


        quas="<li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li>"

        ter="<li><a href='#' class='tree_trigger'> &nbsp;</a> Ter <ul>"+quas+"</ul></li>"

        sec="<li><a href='#' class='tree_trigger'> &nbsp;</a> Sec"+ter+"</ul></li>"


        pri="<ul class='tree'><li><a href='#' class='tree_trigger'> &nbsp;</a> Pri <ul class='tree_expanded'>"+sec+ "</ul></li></ul>"




        q =  $(pri)

        //d(q)


        if(_.size($('ul.tree')) ){

            $('p.tree_controls a.expand_all, p.tree_controls a.collapse_all').click(function(){

                if($(this).hasClass('expand_all')){$l('ex_all')
                    $(this).parent('p').next('ul').find('a.tree_trigger').K('trigger_expanded')
                    return false}

                else {$l('!ex_all')

                    $(this).parent('p').next('ul').find('a.tree_trigger')

                        .removeClass('trigger_expanded').end()

                        .find('ul').removeClass('tree_expanded')}

                this.blur();return false

            })


            $(document).on('click',function(){
                if( $(this).hasClass('tree_trigger')){
                    if($(this).next('ul').is(':hidden')){
                        $(this).K('trigger_expanded').next('ul').K('tree_expanded')}
                    else {$(this).removeClass('trigger_expanded').next('ul').removeClass('tree_expanded')}
                    this.blur()
                    return false
                }})


            $('ul.tree li:last-child').K('last')

            $('ul.tree_expanded').prev('a').K('trigger_expanded')

        }



    }




    MARGINAUTO=function(){z()

        outer = $.div( 'b', 500, 500).A()
        outer.A(  inner = $.div( 'r', 100, 100) )
        inner.mar('auto')
        outer.mar('auto')
    }
//dH=function(a){qq(a).h($(document).height())}
//events={}
//events.dL=dL=function(a,b,c){document.addEventListener(oE(a),b,c)}
//events.dR=dR=function(a,b,c){document.removeEventListener(oE(a),b,c)}
//co=function co(a,b){return O(a)? ss(a,'C', $r('c',b) ):co($b(),a)}
    outerHTML =function(a,b,c){
        if(A(a)){ return _e(a, "$l(E(v).outerHTML)" ) }

        $l( E(a).outerHTML )
    }
//offset=os=function(element){if(C(element)){element=C(element)};return $(element||'body').offset()}
//offsetLeft=osl=function(el){return offset(el).left}
//offsetTop=ost=function(el){return offset(el).top}
//dims
//log dims of something
//owh=function(d){return d.o('$$', function(){d.w()+' '+ d.h()})}
//osP=function(a){return O(a) && a.offsetParent}
//osT=function(a){return O(a) && a.offsetTop}
//osL=function(a){return O(a) && a.offsetLeft}
//cW=function(){return document.body.clientWidth }
//cH=function(){return document.body.clientHeight }
    $.selects=function(func){
        var selects=$('select')

        if(func){ selects.on('change', func) }

        return selects}
    $.boxes=function(func){

        var b = $("input[type='checkbox'],input[type='radio']")
        if(f) {  b.click( func ) }
        return b

    }
    $.inputs=function(f){
        $.selects(f);
        $.boxes(f)
    }
    $.getChecked=function(name){
        var input = $("input[type='radio'][name="+name+"]:checked")
        return input.val()}
    $.$$=function(a,b,c){$('body').dblclick(a,b,c); return this}
    $.$=function(){var b=$('html')

        b.click.apply(b, arguments)

        return $}
    $.fn.pressmove = function (func) {
        var mouse_pressed
        this.mousedown(function () {
            mouse_pressed = true
        })
        this.mouseup(function () {
            mouse_pressed = false
        })


        this.mousemove(function (e) {


            if (mouse_pressed) {

                func(e)

            }

        })


        return this
    }
    $.fn.mousePoint=function(e, scale){
        scale=N(scale)?scale:1
        return V(e.pageX/scale,e.pageY/scale )
    }
    $.fn.ctx=function(){
        return this[0].getContext('2d')
    }
    $.isCan=function(can){
        if(O(can)){
            return  $(can)[0].constructor.name=="HTMLCanvasElement"
        }

    }
    $.fn.wor =$.fn.world=  function(){var can=this
        var w = b2d.wor.apply(null,arguments).bug(can, 30, '*')
        w.can = can
        w.ctx = can.ctx()
        return w}
    dateTime=function(){
//dep
        $.dateTime = $.date = dateTime = dt = function (a) {
            var d = new Date(a)
            d.y = d.getFullYear
            d.d = d.getDate
            d.D = d.getDay
            d.M = d.getMinutes
            d.m = d.getMonth
            d.date = function () {
                return d.d() + '/' + d.m() + '/' + d.y()
            }
            d.time = function () {
                return d.h() + ':' + d.M()
            }
            d.dt = function () {
                return d.date() + ' ' + d.time()
            }
            d.ms = d.getMilliseconds
            d.h = d.getUTCHours
            d.s = d.getSeconds
            //d.tm= d.getTime
            //d.gto= d.getTimezoneOffset
            d.udt = d.getUTCDate
            d.gud = d.getUTCDay
            d.ufy = d.getUTCFullYear
            d.gh = d.getHours
            d.gms = d.getUTCMilliseconds
            d.um = d.getUTCMinutes
            d.um = d.getUTCMonth
            d.us = d.getUTCSeconds
            return d
        }
        $.dateAndTime = dtt = function (a) {
            var datetime = new Date(a)
            return datetime.date() + ' ' + datetime.time()
        }
    }; dateTime()

    elements=function() {
        $.isBodyElement = function (e) {
            e = $(e)[0]
            return O(e) && uC(e.tagName) == 'BODY'
        }

    }; elements()
//doesnt work YET
    $.fn.getPosition = $.fn.getTotalOffset = function(){

        var e = this, x=0,  y= 0

        while( E( e ) && e.tagName ){

            y += e.offsetTop

            x += e.offsetLeft

            if( isBodyElement(e)  ){ e = 0 }

            e = e.offsetParent || e
        }

        return { x: x, y: y }




    }//just gets the TOTAL offset of ANY element

}
function dim() {
    _.wd = function (a, b) {

        if (O(a)) {

            var w = function (a, b) {
                if (U(b)) {
                    return a.width
                }
                a.width = b;
                return a
            }
            if (U(b)) {
                return F(w(a)) ? a.width() : w(a) ? w(a) : _.isFunction(a.w) ? a.w() : a.w
            }
            if (F(w(a))) {
                a.width(b)
            }
            else if (w(a)) {
                w(a, b)
            }
            else if (F(a.w)) {
                a.w(b)
            }
            else {
                a.w = b
            }
            return a
        }
    }
    _.sz = _z = function z(a, b, c) {
        return U(b) ? _.size(a)
            : N(b) ? _z(a) == b
            : _z(a) == _z(b)
    }
    _.ht = function (a, b, c) {
        if (O(a)) {
            if (U(b)) {
                return a.height ? (F(a.height) ? a.height() : a.height) :
                    _.isFunction(a.h) ? a.h() : N(a.h) ? a.h : false
            }
            if (N(b)) {
                if (F(a.height)) {
                    a.height(b);
                    return a
                }
                if (N(a.height)) {
                    a.height = b;
                    return a
                }
                if (F(a.h)) {
                    a.h(b);
                    return a
                }
                if (N(a.h)) {
                    a.h = b;
                    return a
                }
            }


        }
    }
}
function obj() {OOOO = function () {
    oOo = function oOo(a, b) {
        if (_.isUndefined(b)) {
            return _I(lC(V(oO(a))))
        }
        if (oOo(a)[lC(b)]) {
            return b
        }
    }
    Oo = _.defaults(function o(a, b) {
        if (D(b)) {
            return o[a] && ( o[a][b] || oOo(a, b))
        }
    }, ooo)
    oO = _.defaults(function oO(a, b, c) {
        return _.isUndefined(a) ? _.keys(f)
            : '*' == b ? $r(a)
            : D(c) ? oO(oO(c, a), b)
            : _.isUndefined(b) ? D(function (x, y) {
            return oO(a, x, y)
        }, oO[a] || {})
            : (oO[a] && oO[a][b]) ?
            oO[a][b]
            : b
    }, ooo)
    oC = function (c) {
        return oO('c', c)
    }
    oK = function (a) {
        return oO('k', a)
    }
    oT = function (a) {
        return oO('t', a)
    }
    oE = function (a) {
        return oO('e', a)
    }
    oI = function (a) {
        return oO('i', a)
    }
    oS = function (a) {
        return oO('s', a)
    }
    //$o=function o(a,b,c){return _.isUndefined(b)?_p(o,a):G(arguments).N?oO(a,b,c):Oo(a,b,c)}
    oQ = function (f, m) {
        $(function () {
            Q(m || mf, f)
        })
    }
};
    OOOO()
    oOo = function oOo(a, b) {
        if (_.isUndefined(b)) {
            return _I(lC(V(oO(a))))
        }
        if (oOo(a)[lC(b)]) {
            return b
        }
    }
    Oo = _.defaults(function o(a, b) {
        if (D(b)) {
            return o[a] && ( o[a][b] || oOo(a, b))
        }
    }, ooo)
    oO = _.defaults(function oO(a, b, c) {
        return _.isUndefined(a) ? _.keys(f)
            : '*' == b ? $r(a)
            : D(c) ? oO(oO(c, a), b)
            : _.isUndefined(b) ? D(function (x, y) {
            return oO(a, x, y)
        }, oO[a] || {})
            : (oO[a] && oO[a][b]) ?
            oO[a][b]
            : b
    }, ooo)
    oC = function (c) {
        return oO('c', c)
    }
    oK = function (a) {
        return oO('k', a)
    }
    oT = function (a) {
        return oO('t', a)
    }
    oE = function (a) {
        return oO('e', a)
    }
    oI = function (a) {
        return oO('i', a)
    }
    oS = function (a) {
        return oO('s', a)
    }
    $o = function o(a, b, c) {
        return _.isUndefined(b) ? _p(o, a) : G(arguments).N ? oO(a, b, c) : Oo(a, b, c)
    }
    oQ = function (f, m) {
        $(function () {
            Q(m || mf, f)
        })
    }
}