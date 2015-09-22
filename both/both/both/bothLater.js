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
 __ = '!!!!!!!!!!!!!!!!!!!!!!!!!!!!'




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

 function math(){



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



 sC=function(a){return a.split(',')}
 yes=function(a){return a[1](a[0])};
 no=not(yes)
 yesNo=function(P){
     return function(Q){
         return function(Y){return Q(P, Y) }}}


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
 }



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