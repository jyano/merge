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
UU=function(){
z()
$.div('b',400,400).A().A( $.span('hifds') )


    CSSRule('div', 'color:Orange')


}
UU2=function(){//WORKS

    $.div('b',400,400).A().A( $.span('hifds')).id('div')

    var style = document.createElement('style');

    style.type = 'text/css';

    var rule = '.cssClass { color: #F00; }'

    style.innerHTML = rule

    $( 'head' ).append(style)

//////

    $( '#div' ).K( 'cssClass' )



}


///
xP=function(a){return Utils.props('X', X(a))}

xM=function(a){return Utils.methods('x', X(a))}

val=function(type, key){
    return HTML5.props(type,'v',key)}

typ=function(type, key){
    return HTML5.props(type,'t',key)}

//tf=function(){n=1;t=true;T(function(){t=false},1000);I(function(){if(t==true){co();n=n+1}else{$l(n)}},1)}
