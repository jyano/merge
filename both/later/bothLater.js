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



vkl=function(a){return new Function("v","k","l","l[k]=" + a)}



$w=window; $$w=$(window)
S.url = function(a){return 'url("' +a+ '")' }
_.iDU=  function(a){ return s$(a).ct('data:') }


mostlyClient = function () {
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
};
mostlyClient()
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
OOOO = function () {
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
extra = function () {

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
old = function () {


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
}
old = function () {

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
dim = function () {
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
};dim()

above()
function above(){
    s$=S
    _.b = _.bind
    _.l = _.last;
    _.f = _.first;
    _.i = _.initial;
    _.r = _.rest
    _.e = _.each;
    _.m = _.map;
    _.t = _.times
    _.x = _.extend;
    _.p = _.partial;
    _.tA = function (a) {
        return O(a) ? _.toArray(a) : [a]
    }
    _.tp = _.template
    _.df = _.defaults
    $A = Array;
    $B = Boolean;
    $N = Number;
    $O = Object;
    $F = Function;
    $S = String;
    J= $J = JSON
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
    N = function (n, n2) {
        if (U(n2)) {
            return _.isNumber(n)
        }
        return _.tN(n, n2)
    }//N = _.isNumber
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
    S = function (a) {
        return _.isString(a)
    }
    $l = function (a) {
        var g = G(arguments), v
        if (O(a) && N(a.x) && N(a.y)) {
            v = a.toFixed()
            $l(v.x + ' , ' + v.y)
            return a
        }
        _.e(g, function (a) {
            console.log(
                _.isFunction(a) ? a.toString()
                    : O(a) ? JSON.stringify(a)
                    : a
            )
        })
        return a

        $l = function (a) {
            var g = G(arguments), v
            if (O(a) && N(a.x) && N(a.y)) {
                v = a.toFixed()
                $l(v.x + ' , ' + v.y)
                return a
            }
            _.e(g, function (a) {
                console.log(
                    _.isFunction(a) ? a.toString()
                        : O(a) ? JSON.stringify(a)
                        : a
                )
            })
            return a
        }
    }
    G = function (arg, str) {
        var a, ag = _.tA(arguments), p, n, m, d, g
        //conflict with N(not neg) and N(g.$ && N(g.f) )
        if (S(ag[0])) {
            a = _.tA(ag[1])
            if (S(a[0])) {
                a[ag[0]] = a.shift()
            }
        }
        else {
            a = _.tA(ag[0])
        }
        if (_.l(a) == '+') {
            p = a.pop()
        }
        else if (_.l(a) == '-') {

            n = a.pop()
        }
        else if (_.l(a) == '*') {
            m = a.pop()
        }
        else if (_.l(a) == '/') {
            d = a.pop()
        }
        if (S(ag[1]) && S(_.l(a))) {
            a[ag[1]] = a.pop()
        }
        g = _.df(a, {
            z: a.length,
            f: _.f(a),
            s: a[1],
            t: a[2],
            l: _.l(a),
            r: _.r(a), i: _.i(a),
            p: p, P: !p, m: m, M: !m,
            d: d, D: !d, n: n, N: !n

        })
        g.u = U(g.f);
        g.U = !g.u
        g.L = g.length
        str = ''
        _.t(g.L, function () {
            str = str + '$'
        })
        g[str] = 1
        //g.N= g.$ && N(g.f);
        g.N = g.$ && N(g.f)
        g.N_ = N(g.f);
        g._N = N(g.l)
        g.$N = N(g.f)
        g.$_N = N(g.s)
        g.S = g.$ && S(g.f)
        g._S = S(g.l)
        g.$S = g.S_ = S(g.f)
        g.$_S = S(g.s)
        g.O = g.$ && O(g.f)
        g.O_ = O(g.f)
        g._O = O(g.l)

        g.A = g.$ && A(g.f)
        g.A_ = A(g.f);
        g._A = A(g.l)


        g.F = g.$ && F(g.f);
        g.F_ = F(g.f);
        g._F = F(g.l)
        g.SA = g.$$ && g.S_ && A(g.s)
        g.OO_ = O(g.f) && O(g.s)
        g.e = function (fn, str) {
            var g = this
            if (str) {
                g.e(function (g) {
                    fn[str](g)
                })
                return fn
            }

            _.e(g, fn)
            return g
        }
        g.e0 = function (fn) {
            _.e(this[0], fn)
        }

        g.e1 = function (fn) {
            _.e(this[1], fn)
        }

        g.eR = function (fn) {
            _.eR(this, fn)
        }

        g.eF = function (fn) {
            _.e(g.f, fn)
        }


        g.eS = function (fn) {
            this.e(function (k) {
                if (S(k)) {
                    fn(k)
                }
            })
        }
        g.G = function (a) {
            a = _.clone(a)
            if (g.n) {
                a.push('-')
            }
            else if (g.p) {
                a.push('+')
            }
            else if (g.d) {
                a.push('/')
            }
            else if (g.m) {
                a.push('*')
            }
            return a
        }
        g.g = g.G(g)
        g.a = g.ap = function () {
            var g = this, gg = G(arguments)

            //if(g.A){

            return gg.s ?
                $a(gg.s, gg.t, g.f) :
                $a(gg.f, g.f)
        }
        g.ush = function (d) {
            var g = this,
                res

            if (U(d)) {
                d = null
            }

            g.t = g.s
            g.s = g.f
            g.f = d
            res = g.unshift(d)


            return res
        }
        return _g = g
    }
    G._ = function () {
        g = G(arguments)
        $l(g.L + ' args')
    }
    z = function (fn) {
        var g = G(arguments)
        if (g.F_) {
            return T.t(fn)
        }
        $('body').empty()
    }
    $z = function (z) {
        console.error(z)
    }
    $d = function (o) {
        console.dir(o);
        return o
    }
    R = function (n, n2) {
        var num
        if (O(n)) {
            n = n.length
        }
        n = N(n) ? n : 1
        n2 = N(n2) ? n2 : 0
        num = (M.random() * n) + n2
        return M.floor(num)
    }
    M = Math

    M.fl = M.floor
    M.c = M.cos;
    M.s = M.sin
    M.tD = M.toDegrees = tDeg = function (r) {
        return r * (180 / M.PI)
    }
    M.tR = M.toRadians = M.toRads = tRad = rad = function (degs) {
        if (O(degs)) {
            degs = degs.rotation
        }
        return degs * M.PI / 180
    }
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
    _.sz = _z = function z(a, b, c) {
        return U(b) ? _.size(a)
            : N(b) ? _z(a) == b
            : _z(a) == _z(b)
    }
    _.pI = M.pI = _.tI = function (a, b) {
        if (U(b)) {
            return parseInt(a)
        }
        return parseInt(_.tN(a, b))
//_.pI = parseInt//_.tI = function (a, b) {return parseInt(_.tN(a, b))}

    }
    _.adj = function (income, tax) {
//tax ~ deltaLimit ~ buffer
        var income = income || 0, tax = tax || 0
        if (income > 0) {
            return income > tax ? income - tax : 0
        }
        return -income > tax ? income + tax : 0
    }
    _.cap = function (n, m, M) {
        if (U(m)) {
            return n
        }
        if (A(m)) {
            M = m[1]
            m = m[0]
        }
        return n < m ? m
            : n > M ? M
            : n
    }
    _.fCC = function (a) {
        return String.fromCharCode(a)
    }
    _.tS = function (a) {return a.toString()}

    _.eW=function(a,b){return s$(a).endsWith(b) } //_.eW = function (a, b) {return l$(a, _z(b)) == b}



    time()
    function time() {
        $Dt = Date
        $Dt.n = $Dt.now  //->  cur time - ms since  1970 UTC (N)
        $Dt.H = 3600000
        $Dt.U = $Dt.UTC// ?
// same pams as longest form  of constructor (2 to 7) -> ms since 1970 UTC (N)
        $Dt.p = $Dt.parse// date as str ->  ms since  1970  UTC (N)
        $D = function () {
            var d = new $Dt() // new $Dt(a,b,c,d,e)
            d.s = d.getSeconds
            d.t = function (m) {  //time  num MSs af/bf 1/1/70
                d.sT = d.setTime
                d.gT = d.getTime
                if (U(m)) {
                    return this.gT()
                }
                this.sT(m)
                return this
            }
            d.s = function (s) { //secs 0-59
                // $l('d.s')
                var d = this
                d.sS = d.setSeconds
                d.gS = d.getSeconds
                if (U(s)) {
                    return d.gS()
                }
                d.sS(s)
                return d
            }
            d.h = function (m) {  //hour 0-23
                d.gH = d.getHours
                d.sH = d.setHours
                if (U(m)) {
                    return this.gH()
                }
                this.sH(m)
                return this
            }
            d.d = d.getDay  // day of   week (from 0-6)
            d.D = function (d) {
                var d = this   //date  day of   month (from 1-31)
                d.gD = d.getDate //
                d.sD = d.setDate
                if (U(d)) {
                    return this.gD()
                }
                this.sD(d)
                return this
            }
            d.M = function (m) {  //month 0-11
                d.sM = d.setMonth
                d.gM = d.getMonth
                if (U(m)) {
                    return this.getMonth()
                }
                this.setMonth(m)
                return this
            }
            d.m = function (m) {//mins 0-59
                d.gMn = d.getMinutes
                d.sMn = d.setMinutes

                if (U(m)) {
                    return this.gMn()
                }
                this.sMn(m)
                return this
            }
            d.ms = function (m) { //ms 0-999
                d.gMs = d.getMilliseconds
                d.sMs = d.setMilliseconds
                if (U(m)) {
                    return this.gMs()
                }
                this.sMs(m)
                return this
            }
            d.y = function (y) { //fullYear (year Deprecated -> fullYear )
                d.sY = d.setFullYear   //Sets the year (four digits) of dtOb
                d.gY = d.getFullYear//    year (four digits)
                if (U(y)) {
                    return this.gY()
                }
                this.sY(y)
                return this
            }
            //superParse(d)
            //superUTC(d)

            return d
        }
        $D.n = function (a) {
            return $Dt.n(a)
        }
        $D.p = function (a) {
            return $Dt.p(a)
        }
        $D.U = function (a) {
            return $Dt.U(a)
        }
        _.gT = function () {
            return $Dt().getTime()
            //return $D().getTime()
        }
        $now = function () {
            return {t: $D, df: $D.n()}
        }
        $n = function (plus) {//= $nowPlusWhat_InDateForm
            var dateNow
            if (U(plus)) {
                return $D.n()
            }
            //plus=plus||0
            dateNow = $D($D.n() + plus)
            return dateNow
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
        _.mo = function (n, fn) {
            return N(n) ?
                _.throttle(fn, n * 1000) : _.throttle(n, 1000)
        }
        _.sI = function (a, b) {
            return setInterval(a, b)
        }
        _.ev = function (n, fn) {
            setInterval(fn, n * 1000)
        }
        _.in1 = function (time) {
            time = ( N(time) ? time : 1) * 1000
            cjs.wait = true
            return setTimeout(function () {
                cjs.wait = false

            }, time)
        }//in1
        _.in = function (time, fn) {
            var g = G(arguments),
                o = F(g[0]) ? {fn: g[0]} : {s: g[0], fn: g[1]}
            o.s = N(o.s) ? o.s : 1
            o.fn = o.fn || function () {
            }
            return setTimeout(
                function () {

                    if (g.m) {
                        $.c$()
                    }
                    o.fn()

                },
                o.s * 1000)
        }
        _.cI = _.xI = function (a, b) {
            clearInterval(a)
        }
        _.timeout = function (times, func) {
            alert('T')
            var timeout
            if (N(times)) {
                return _.t(times, function (i) {
                    func(i + 1)
                })
            }
            if (F(times)) {
                timeout = N(func) ? func : 100;
                func = times
            }
            return setTimeout(func, timeout)
        }
    }
    function alpha() {
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
    _v = function (a) {
        return S(a) ? function () {
            Function(a)()
        } : F(a) ? a : F(a.value) ? a.value() : a.value
    }
    function later() {__ = '!!!!!!!!!!!!!!!!!!!!!!!!!!!!'

        _.ic = _.include
        _.wo = _.without

        _.cp = _.compact
        _.ic = _.include;
        _.ks = _.keys;
        _.rs = _.result
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
        _.ey = function (a, b, c) {
            return _.every(a, b, c)
        }
    }
    V=function(x,y){
        return {x:x, y:y}
    }
    AA = function (a) {return A(a) && A(a[0])}
}
M.tN = _.tN = function (what, aNum) {return N(what) ? what : aNum || 0}
_.gS = function (pop) {//for gen
    var g = G(arguments), that = this
    return function (val) {
        if (U(val)) {
            return this[pop]
        }
        this[pop] = val
        return this
    }}
$a = function (ob, met, arr) {
    var g = G(arguments)
    if (g.t) {
        return g.f[g.s].apply(g.f, g.t)
    }
    return g.f.apply(null, g.s)
}
_.j=function (a, b) {return (a || []).join(b || ' ')}
_.jS = function (a, b, c) {return S(a) ? $.Gj(a, b, c) : JSON.stringify(a)}
_.jP = function (a, b, c) {return S(a) ? JSON.parse(a, b) : $(a).prepend(b, c)}
S.tU = _.tUc = _.tU = _.tUC = function (a) {
    return S(a) ? a.toUpperCase() :
        A(a) ? _.m(a, function (a) {
            return S.tU(a)
        }) : a
}
S.iU = function (a) {
    if (S(a)) {
        return s$(a).isUpper()
    }
}
_.tLc = _.tL = _.tLC = function (a) {
    return a.toLowerCase()
}
chompEnsure()
splt()
imgUrl()
function splt() {
    _.spl = function (a, b) {
        return String(a).split(b)
    }
    _.bf = function (a, b) {
        return a.split(b || '.')[0]
    } //before('.')
}
function chompEnsure() {
    _.left = function (a, b) {
        alert('_.left')
        var g = G(arguments)
        return S(b) ? (!g.m ? s$(a).ensureLeft(b).s
            : s$(a).chompLeft(b).s) : 0
    }
    _.slash = function (str) {
        alert('_.slash')
        var hasSlash = str[0] == '/'
        return hasSlash ? str : '/' + str
    } //= _.ensureSlash
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

    S.r = function (a, b) {
        var g = G(arguments)
        return g.n ? s$(a).chompRight(b).s :
            s$(a).ensureRight(b).s
    }

}
function imgUrl() {
    _.isDU = $J.isDU = function (d) {
        if (U(d)) {
            return false
        }
        return s$(d).contains('data:')
    }
    _.src = $J.src = function f(e) {
        var _src = function (a) {
            a = _.ext(a)
            return s$(a).startsWith('/') ? a : '/' + a
        }
        //if(Q(e)){$l('q');e=$(e)[0]}
        if (e.image) {
            e = e.image
        }
        if (C(e)) {
            e = C(e)
        }
        if (e.src) {
            e = e.src
        }
        if (e.toDataURL) {
            e = tDU(e)
        }
        return s$(e).contains('data:') ? e : S(e) ? _src(e) : 0
        function old() {

            $J.src = function f(e) {
                var _src = function (a) {
                    a = $.extension(a)
                    return s$(a).startsWith('/') ? a : '/' + a
                }
                //if(Q(e)){$l('q');e=$(e)[0]}
                if (e.image) {
                    e = e.image
                }
                if (C(e)) {
                    e = C(e)
                }
                if (e.src) {
                    e = e.src
                }
                if (e.toDataURL) {
                    e = tDU(e)
                }

                return s$(e).contains('data:') ? e

                    : S(e) ? _src(e)

                    : 0
            }

        }
    }
    _.ext = S.ext = function (a, b) {
        if (S(a)) {
            return s$(a).contains('.') ? a :
                s$(a).ensureRight(b || '.png').s
        }
    }
    _.crs = $J.crs = crs = function (a) {
        return a.split('/').pop().split('.png')[0]
    }//it's the opposite of 'src' ! //it strips '/me.png' -> 'me'

}
//alert
S.url = function (a) {
    alert('S.url')
    return 'url("' + a + '")'}
s$=S
$A = Array;
$B = Boolean;
$N = Number;
$O = Object;
$F = Function;
$S = String;
J = $J = JSON
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
N = function (n, n2) {
    if (U(n2)) {
        return _.isNumber(n)
    }
    return _.tN(n, n2)
}//N = _.isNumber
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
S = function (a) {
    return _.isString(a)
}
$l = function (a) {
    var g = G(arguments), v
    if (O(a) && N(a.x) && N(a.y)) {
        v = a.toFixed()
        $l(v.x + ' , ' + v.y)
        return a
    }
    _.e(g, function (a) {
        console.log(
            _.isFunction(a) ? a.toString()
                : O(a) ? JSON.stringify(a)
                : a
        )
    })
    return a

    $l = function (a) {
        var g = G(arguments), v
        if (O(a) && N(a.x) && N(a.y)) {
            v = a.toFixed()
            $l(v.x + ' , ' + v.y)
            return a
        }
        _.e(g, function (a) {
            console.log(
                _.isFunction(a) ? a.toString()
                    : O(a) ? JSON.stringify(a)
                    : a
            )
        })
        return a
    }
}

G = function (arg, str) {
    var a, ag = _.tA(arguments), p, n, m, d, g
    //conflict with N(not neg) and N(g.$ && N(g.f) )
    if (S(ag[0])) {
        a = _.tA(ag[1])
        if (S(a[0])) {
            a[ag[0]] = a.shift()
        }
    }
    else {
        a = _.tA(ag[0])
    }
    if (_.l(a) == '+') {
        p = a.pop()
    }
    else if (_.l(a) == '-') {

        n = a.pop()
    }
    else if (_.l(a) == '*') {
        m = a.pop()
    }
    else if (_.l(a) == '/') {
        d = a.pop()
    }
    if (S(ag[1]) && S(_.l(a))) {
        a[ag[1]] = a.pop()
    }
    g = _.df(a, {
        z: a.length,
        f: _.f(a),
        s: a[1],
        t: a[2],
        l: _.l(a),
        r: _.r(a), i: _.i(a),
        p: p, P: !p, m: m, M: !m,
        d: d, D: !d, n: n, N: !n

    })
    g.u = U(g.f);
    g.U = !g.u
    g.L = g.length
    str = ''
    _.t(g.L, function () {
        str = str + '$'
    })
    g[str] = 1
    //g.N= g.$ && N(g.f);
    g.N = g.$ && N(g.f)
    g.N_ = N(g.f);
    g._N = N(g.l)
    g.$N = N(g.f)
    g.$_N = N(g.s)
    g.S = g.$ && S(g.f)
    g._S = S(g.l)
    g.$S = g.S_ = S(g.f)
    g.$_S = S(g.s)
    g.O = g.$ && O(g.f)
    g.O_ = O(g.f)
    g._O = O(g.l)

    g.A = g.$ && A(g.f)
    g.A_ = A(g.f);
    g._A = A(g.l)


    g.F = g.$ && F(g.f);
    g.F_ = F(g.f);
    g._F = F(g.l)
    g.SA = g.$$ && g.S_ && A(g.s)
    g.OO_ = O(g.f) && O(g.s)
    g.e = function (fn, str) {
        var g = this
        if (str) {
            g.e(function (g) {
                fn[str](g)
            })
            return fn
        }

        _.e(g, fn)
        return g
    }
    g.e0 = function (fn) {
        _.e(this[0], fn)
    }

    g.e1 = function (fn) {
        _.e(this[1], fn)
    }

    g.eR = function (fn) {
        _.eR(this, fn)
    }

    g.eF = function (fn) {
        _.e(g.f, fn)
    }


    g.eS = function (fn) {
        this.e(function (k) {
            if (S(k)) {
                fn(k)
            }
        })
    }
    g.G = function (a) {
        a = _.clone(a)
        if (g.n) {
            a.push('-')
        }
        else if (g.p) {
            a.push('+')
        }
        else if (g.d) {
            a.push('/')
        }
        else if (g.m) {
            a.push('*')
        }
        return a
    }
    g.g = g.G(g)
    g.a = g.ap = function () {
        var g = this, gg = G(arguments)

        //if(g.A){

        return gg.s ?
            $a(gg.s, gg.t, g.f) :
            $a(gg.f, g.f)
    }
    g.ush = function (d) {
        var g = this,
            res

        if (U(d)) {
            d = null
        }

        g.t = g.s
        g.s = g.f
        g.f = d
        res = g.unshift(d)


        return res
    }
    return _g = g
}
G._ = function () {
    g = G(arguments)
    $l(g.L + ' args')
}

$z = function (z) {
    console.error(z)
}
$d = function (o) {
    console.dir(o);
    return o
}
R = function (n, n2) {
    var num
    if (O(n)) {
        n = n.length
    }
    n = N(n) ? n : 1
    n2 = N(n2) ? n2 : 0
    num = (M.random() * n) + n2
    return M.floor(num)
}
M = Math
_.b = _.bind
_.l = _.last;
_.f = _.first;
_.i = _.initial;
_.r = _.rest
_.e = _.each;

_.eR=function(g,fn){
    _.e(_.r(g),fn)
}


_.m = _.map;
_.t = _.times
_.x = _.extend;
_.p = _.partial;
_.tA = function (a) {
    return O(a) ? _.toArray(a) : [a]
}
_.tp = _.template
_.df = _.defaults
_.th= _.throttle
_.fW=_.findWhere
_.wh=_.where
_.rj=_.reject
_.ic = _.include
_.wo = _.without
_.rs = _.result
_.cp = _.compact
_.rd = function r(a, b, c, d) {
    return F(b) && D(c) ? _.reduce(a, b, c) : _.reduceRight(a, c, b)
}
_.rp = function (a, b, c) {
    return a.replace(b || '#', c || '')
}
_.spl = function (a, b) {
    return String(a).split(b)
}
_.bf = function (a, b) {
    return a.split(b || '.')[0]
} //before('.')

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
S.r = function (a, b) {
    var g = G(arguments)
    return g.n ? s$(a).chompRight(b).s :
        s$(a).ensureRight(b).s
}

_.left = function (a, b) {
    alert('_.left')
    var g = G(arguments)
    return S(b) ? (!g.m ? s$(a).ensureLeft(b).s
        : s$(a).chompLeft(b).s) : 0
}
_.slash = function (str) {
    alert('_.slash')
    var hasSlash = str[0] == '/'
    return hasSlash ? str : '/' + str
} //= _.ensureSlash
_.ext = S.ext = function (a, b) {
    if (S(a)) {
        return s$(a).contains('.') ? a :
            s$(a).ensureRight(b || '.png').s
    }
}
_.crs =  function (a) {
    return a.split('/').pop().split('.png')[0]
}//it's the opposite of 'src' ! //it strips '/me.png' -> 'me'
_.url=  function (a) {
    alert('S.url')
    return 'url("' + a + '")'}
_.iDU = function (a) {
    return s$(a).contains('data:')
}
_.src=function(a){
    a = _.ext(a);return s$(a).startsWith('/')? a : '/'+ a
}
_.fCC = function (a) {
    return String.fromCharCode(a)
}
_.tS = function (a) {return a.toString()}
_.eW=function(a,b){return s$(a).endsWith(b) } //_.eW = function (a, b) {return l$(a, _z(b)) == b}
_.j=function (a, b) {return (a || []).join(b || ' ')}
_.tU =   _.tUc =  _.tUC = function (a) {
    return S(a) ? a.toUpperCase() :
        A(a) ? _.m(a, function (a) {
            return S.tU(a)
        }) : a
}
_.iU=   function (a) {
    if (S(a)) {
        return s$(a).isUpper()
    }
}
_.tLc = _.tL = _.tLC = function (a) {
    return a.toLowerCase()
}
_.jS = function (a, b, c) {return S(a) ? $.Gj(a, b, c) : JSON.stringify(a)}
_.jP = function (a, b, c) {return S(a) ? JSON.parse(a, b) : $(a).prepend(b, c)}
M.tN = _.tN = function (what, aNum) {return N(what) ? what : aNum || 0}
M.fl = M.floor
M.c = M.cos;
M.s = M.sin
M.tD = M.toDegrees = tDeg = function (r) {
    return r * (180 / M.PI)
}
M.tR = M.toRadians = M.toRads = tRad = rad = function (degs) {
    if (O(degs)) {
        degs = degs.rotation
    }
    return degs * M.PI / 180
}
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
M.lC = M.lineCenter = function (x1, y1, x2, y2) {
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
M.pIC = M.pointInCircle = function (x, y, circle) {
    var withinX, withinY
    withinX = x < circle.x + circle.radius && x > circle.x - circle.radius
    withinY = y < circle.y + circle.radius && y > circle.y - circle.radius
    return withinX && withinY
}//Y.pointInCircle = pntInCir =
M.pIR = M.pointInRect = Math.pointInRectangle = function (x, y, rect) {
    var withinX, withinY
    var halfwidth = (rect.width || rect.w) / 2
    var halfheight = (rect.height || rect.h) / 2
    //assumes center
    withinX = x < rect.x + halfwidth && x > rect.x - halfwidth
    withinY = y < rect.y + halfheight && y > rect.y - halfheight
    return withinX && withinY
}
M.circlesOverlap = function (c1, c2) {
    alert('M.circlesOverlap')
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
_.sz = _z = function z(a, b, c) {
    return U(b) ? _.size(a)
        : N(b) ? _z(a) == b
        : _z(a) == _z(b)
}
_.pI = M.pI = _.tI = function (a, b) {
    if (U(b)) {
        return parseInt(a)
    }
    return parseInt(_.tN(a, b))
//_.pI = parseInt//_.tI = function (a, b) {return parseInt(_.tN(a, b))}

}
_.adj = function (income, tax) {
//tax ~ deltaLimit ~ buffer
    var income = income || 0, tax = tax || 0
    if (income > 0) {
        return income > tax ? income - tax : 0
    }
    return -income > tax ? income + tax : 0
}
_.cap = function (n, m, M) {
    if (U(m)) {
        return n
    }
    if (A(m)) {
        M = m[1]
        m = m[0]
    }
    return n < m ? m
        : n > M ? M
        : n
}
R=function(n,n2){var num
    n=N(n)?n:1
    n2=N(n2)?n2:0
    return M.round((M.random()*n)+n2)
}
$Dt = Date
$Dt.n = $Dt.now  //->  cur time - ms since  1970 UTC (N)
$Dt.H = 3600000
$Dt.U = $Dt.UTC// ?
// same pams as longest form  of constructor (2 to 7) -> ms since 1970 UTC (N)
$Dt.p = $Dt.parse// date as str ->  ms since  1970  UTC (N)
$D = function () {
    var d = new $Dt() // new $Dt(a,b,c,d,e)
    d.s = d.getSeconds
    d.t = function (m) {  //time  num MSs af/bf 1/1/70
        d.sT = d.setTime
        d.gT = d.getTime
        if (U(m)) {
            return this.gT()
        }
        this.sT(m)
        return this
    }
    d.s = function (s) { //secs 0-59
        // $l('d.s')
        var d = this
        d.sS = d.setSeconds
        d.gS = d.getSeconds
        if (U(s)) {
            return d.gS()
        }
        d.sS(s)
        return d
    }
    d.h = function (m) {  //hour 0-23
        d.gH = d.getHours
        d.sH = d.setHours
        if (U(m)) {
            return this.gH()
        }
        this.sH(m)
        return this
    }
    d.d = d.getDay  // day of   week (from 0-6)
    d.D = function (d) {
        var d = this   //date  day of   month (from 1-31)
        d.gD = d.getDate //
        d.sD = d.setDate
        if (U(d)) {
            return this.gD()
        }
        this.sD(d)
        return this
    }
    d.M = function (m) {  //month 0-11
        d.sM = d.setMonth
        d.gM = d.getMonth
        if (U(m)) {
            return this.getMonth()
        }
        this.setMonth(m)
        return this
    }
    d.m = function (m) {//mins 0-59
        d.gMn = d.getMinutes
        d.sMn = d.setMinutes

        if (U(m)) {
            return this.gMn()
        }
        this.sMn(m)
        return this
    }
    d.ms = function (m) { //ms 0-999
        d.gMs = d.getMilliseconds
        d.sMs = d.setMilliseconds
        if (U(m)) {
            return this.gMs()
        }
        this.sMs(m)
        return this
    }
    d.y = function (y) { //fullYear (year Deprecated -> fullYear )
        d.sY = d.setFullYear   //Sets the year (four digits) of dtOb
        d.gY = d.getFullYear//    year (four digits)
        if (U(y)) {
            return this.gY()
        }
        this.sY(y)
        return this
    }
    //superParse(d)
    //superUTC(d)

    return d
}
$D.n = function (a) {
    return $Dt.n(a)
}
$D.p = function (a) {
    return $Dt.p(a)
}
$D.U = function (a) {
    return $Dt.U(a)
}
_.gT = function () {
    return $Dt().getTime()
    //return $D().getTime()
}
$now = function () {
    return {t: $D, df: $D.n()}
}
$n = function (plus) {//= $nowPlusWhat_InDateForm
    var dateNow
    if (U(plus)) {
        return $D.n()
    }
    //plus=plus||0
    dateNow = $D($D.n() + plus)
    return dateNow
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
_.mo = function (n, fn) {
    return N(n) ?
        _.throttle(fn, n * 1000) : _.throttle(n, 1000)
}
_.sI = function (a, b) {
    return setInterval(a, b)
}
_.ev = function (n, fn) {
    setInterval(fn, n * 1000)
}
_.in1 = function (time) {
    time = ( N(time) ? time : 1) * 1000
    cjs.wait = true
    return setTimeout(function () {
        cjs.wait = false

    }, time)
}//in1
_.in = function (time, fn) {
    var g = G(arguments),
        o = F(g[0]) ? {fn: g[0]} : {s: g[0], fn: g[1]}
    o.s = N(o.s) ? o.s : 1
    o.fn = o.fn || function () {
    }
    return setTimeout(
        function () {

            if (g.m) {
                $.c$()
            }
            o.fn()

        },
        o.s * 1000)
}
_.cI = _.xI = function (a, b) {
    clearInterval(a)
}
_.timeout = function (times, func) {
    alert('T')
    var timeout
    if (N(times)) {
        return _.t(times, function (i) {
            func(i + 1)
        })
    }
    if (F(times)) {
        timeout = N(func) ? func : 100;
        func = times
    }
    return setTimeout(func, timeout)
}
_.inx = function(){}
_.evx=function(a){return a}
z = function (fn) {
    var g = G(arguments)
    if (g.F_) {
        return T.t(fn)
    }
    $('body').empty()
}
V=function(x,y){
    return {x:x, y:y}
}
AA = function (a) {return A(a) && A(a[0])}
$a = function (ob, met, arr) {
    var g = G(arguments)
    if (g.t) {
        return g.f[g.s].apply(g.f, g.t)
    }
    return g.f.apply(null, g.s)
}
_.gS = function (pop) {
//for gen
    var g = G(arguments), that = this
    return function (val) {
        if (U(val)) {
            return this[pop]
        }
        this[pop] = val
        return this
    }
}
_v = function (a) {
    return S(a) ? function () {
        Function(a)()} : F(a) ? a : F(a.value) ? a.value() : a.value
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
