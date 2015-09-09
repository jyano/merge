

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

