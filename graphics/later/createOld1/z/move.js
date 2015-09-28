rgcX =function(){
    var g=G(arguments),

        x=o.W()/2,
        y=o.H()/2

    if(g[0]===0){
        if(g.p){

            o.rxy(0,0,'+')
        }

        else {o.rxy(0,0)}}

    else{
        if(g.p){o.rxy(x,y,'+')}
        else{o.rxy(x,y)
        }}

    return o}



testSlide = function(){
z()

    s = createjs.stage('red', 300, 800).A().tick()

    s.bm('me', function(bb){ b=bb
      KK(bb )
    })
}

createjs.bindSlide = SL=function(b,b2){

    var g=G(arguments),

        b=g[0],  b2= g[1]||b

    return b.on('mousedown',

        function(e){
            var bx=b2.x- e.rawX, by=b2.y- e.rawY

            b.on('pressmove', function(e){

                    if(g.P){b2.x=bx+e.rawX}
                    if(g.N){b2.y=by+e.rawY}
            })}

    )}
createjs.bindReverseSlide = LS=function(b,b2){var g=G(arguments),
    b=bj(g[0]),

    b2=bj(g[1]),
    d=oE('d'),
    pm=oE('pm'),
    b2=b2||b

    return b.on(d, function(e){
        var bx=b2.x+rX(e), by=b2.y+rY(e)

            b.on(pm, function(e){

                if(g.P){b2.x=bx-rX(e)}
                if(g.N){b2.y=by-rY(e)}

            })})}
createjs.bindRotate = RT=function(b, b2){


    //b = what the control is
    //b2 what it should control (default = itself!)


    var g=G(arguments),  b = bj( g[0] ),  b2 = bj( g[1] ) || b


    if(g.p){
        //b.rgc( '+' )
    }

    return b.on(  'mousedown',

        function(e){

            var X= e.rawX,  Y= e.rawY,  r = b2.rotation

             b.on('pressmove',   function(e){


                         b2.rotation =    r - (   (e.rawY - Y) / 500   ) -  (   e.rawX - X  )


                 })})

}
createjs.bindRotate2 = RTT=function(b, b2){


    //b = what the control is
    //b2 what it should control (default = itself!)


    var g=G(arguments),  b =   g[0]  ,  b2 =   g[1]   || b



    if(g.p){  // b.rgc( '+' )
    }

    return b.on(  'mousedown',

        function(e){

            var X= e.rawX,  Y= e.rawY,  r = b2.rotation

            b.on('pressmove',   function(e){


                b2.rotation =    r + (   (e.rawY - Y) / 500   ) +  (   e.rawX - X  )


            })})

}
createjs.bindScale = SC=function(b,b2){
    var g=G(arguments),b= g[0] ,b2= g[1] ,
        d=oE('d'),pm=oE('pm'),b2=b2|| b,
        cp=function(n){return n<.2?.2:n>2?2:n}



   return b.on(d,

       function(e){var X=rX(e),Y=rY(e),sx=cX(b2),sy=cY(b2)

           b.on(pm,

               function(e){if(g.n){cXY(b2,cp(sx+((rX(e)-X)/200)),cp(sy-((rX(e)-X)/200)))}

               else if(g.p){
                   cXY(b2,sx+((rX(e)-X)/50),sy-((rY(e)-Y)/50))
                   cXY(b2,sy-((rY(e)-Y)/50)),sx+((rX(e)-X)/50)}

               else{cXY(b2,sx-((rX(e)-X)/50),sy-((rY(e)-Y)/50))}})}

   )}
createjs.bindSkew = SK=function(b){var g=G(arguments),b=bj(g[0]),b2=bj(g[1]),d=oE('d'),pm=oE('pm'),b2=b2||b

    return b.on(d,
        function(e){
            var X=rX(e),Y=rY(e)
            b.on(pm,function(e){
                kXY(b2,(rY(e)-Y)*.5,
                    rX(e)-X*.5)})
        })}

createjs.bindTransform = TR=function TR(b,b2,m){

    var g=G(arguments),
        b= g[0],
        b2= g[1],

    b2=b2||b,  m=g[2]||'SL'

    if(m=='SL'){
        createjs.bindSlide(b,b2);
        m='SC'}

    else if(m=='SC'){
        createjs.bindScale(b,b2);
        m='RT'}

    else if(m=='RT'){
        createjs.bindRotate(b,b2);
        m='SL'}

    return b.on('pressup', function(e){

        b.removeAllEventListeners();

        TR(b, b2, m)

    })}

createjs.reggy = reggy=function(o,s){

    s = s||o.parent

    s.bm('me',  function(b){

        b.W(40).H(40)

        I(function(){   b.XY(  o.x + o.regX, o.y + o.regY )  },  100)

    }  )


}









createjs.bindSlideAndRotate = KK=function(b,b2){

    var g=G(arguments), b=g[0],
        b2= g[1]||b
    createjs.bindSlide(b);
    createjs.bindRotate(b,b2)
    if(g.p){

        b.rgc('+')
    }

    if(g.N){
    //    reggy(b,b2)
    }
}


createjs.bindRotateThenSkew =RK=function(b,b2,m){
    var g=G(arguments),b= g[0] ,b2= g[1] ,
        d=oE('d'),
        pm=oE('pm'),
        b2=b2|| b,
        m=g[2]||'RT'


    //if(g.p){var s=St('y',1000)
    //    _t(b||5,function(i){s.a().bm(
    //        function(bm){bm.xy(i*50);TR(bm)})});return s}

    if(m=='RT'){RT(b,b2);m='SK'}

    else if(m=='SK'){
        SK(b,b2);m='RT'}

    return b.on(oE('pu'),
        function(e){Do(b).O();
            RK(b,b2,m)})
}





sot=function(a){

    I(function(){
        a.sC(function(f,s,op){
            return f.x>s.x?1:f.x< s.x?-1:0
        }) },100)
}





