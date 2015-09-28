cv = el = $.fn
c = HTMLCanvasElement.prototype
x=  ctx=  xx=CanvasRenderingContext2D.prototype
xGr = CanvasGradient.prototype
$.c = $.canvas= $.can = function(c, width, h, x,y){var g=G(arguments), o, el
    o = g.S_?
    {c: g.f, w: g.s, h: g.t, x:g[3], y:g[4]}:
    {w: g.f, h: g.s, x: g.t, y: g[3] }
    o.w = o.w|| 1200
    o.h = o.h|| 600
    o.c = o.c || 'x'
    el = $('<canvas>')
    el.attr({width: o.w, height: o.h})
    el.C(o.c)
    if(N(o.x)){ el.abs(o.x, o.y) }
    if(g.p){el.drag()}
    el.A().al(.8)
    return superCanvas(el)
}
superCanvas=function(el){
    el = $(el)
//to be called internally by $.c
//works on FIRST canvas in jquery obj
    el.canvas = el[0]
    el.context = el.canvas.getContext('2d')
    el.stage = new cjs.Stage(el.canvas)
    el.W=function(width){
        var args=G(arguments)
        width = args[0]
        if(U(width)){return this.attr('width')}
        if(args.N){var dataUrl = this.toDataURL()}
        this.attr('width', width)
        if(args.N){this.fit(dataUrl)}
        return this
    }
    el.H=function(height){
        var args=G(arguments)
        height = args[0]
        if(U(height)){return this.attr('height')}
        if(args.N){var dataUrl = this.toDataURL()}
        this.attr('height', height)
        if(args.N){this.fit(dataUrl)}
        return this
    }
    el.WH=function(w, h){
        if(U(w)){
            var width=this.W(), height=this.H()
            return {
                width:width,  w:width,
                height:height, h:height}}
        h = h||w
        return this.W(w).H(h)}
    //el.Z=function(d){d=d||5;return this.WH(d*100,d*100)}
    el.offsetLeft  =el.l=function(theOffset){
        if(!theOffset){
            return offsetLeft(x.q)}
        return parseInt( theOffset - x.offsetLeft() )};
    //  el.ox=function(){return x.q.q.offset().left}
    el.offsetTop   =el.t=function( y ){ if( !y ){ return offsetTop( y.q ) }; return parseInt( y - x.offsetTop() ) }
    //  el.oy=function(){return x.q.q.offset().top}
    el.copy= function(){
        el.img.src( el.toDataURL() )
        return el}
    el.paste= function(){
        var g=G(arguments)
        if(g.N){el.clearRect()}
        if(g.p){el.fit(el.img)}
        else {
            el.draw(el.img.src())
        }
    }
    el.save=function(){
        el.context.save()
        return el
    }
    el.restore=function(){
        el.context.restore()
        return el
    }
    //dont mix up with element/jquery alpha
    //maybe opacity for element and alpha for canvas?
    el.globalAlpha = el.alpha = el.op=function(alpha){
        if(U(alpha)){return this.context.globalAlpha}
        this.context.globalAlpha = alpha

        return this}
    el.comp = el.globalCompositionOperation = el.gc = function(compOp){
        if(U(compOp)){
            return this.context.globalCompositeOperation}
        this.context.globalCompositeOperation = oO('g', compOp)
        return this}
    //normal prop (as methods)
    el.lineWidth=function(w){
        if(U(w)){return el.context.lineWidth}
        el.context.lineWidth=w
        return el
    }
    el.lineCap=function(w){
        if(U(w)){return el.context.lineCap}
        el.context.lineCap=w
        return el
    }
    el.lineJoin=function(w){
        if(U(w)){return el.context.lineJoin}
        el.context.lineJoin=w
        return el
    }
    el.URL = el.dataURL = el.toDataURL=function(){
        return el.canvas.toDataURL()
    }
    //wap specific
    el.snap = function (  func ){

        pams = {

            d: el.toDataURL(),

            dats: el.dats

        }

        $.post('/img', pams, func )

    }
    el.img = $.i()
    el.img.src( el.toDataURL() )
    el.me=function me(n){//randomly draw my face
        var g=G(arguments),n=g[0]||200
        if(x.me.d){
            clearInterval(x.me.d);x.me.d=false}
        else{x.me.d=I(function(){
            x.d($w['mug']||'me',_r(x.w()-200),_r(x.w()-200))},n) }
        return x}
    el.me.shouldDrawMeId=false
    el.mugX=function(m){
        qP('/mug',{u:m},
            function(m){x.fit(m)})
        return x}
    el.t=  el.tick=function(){
        var ctx=this.ctx()
        ctx.tick.apply(ctx, arguments)
        return this
    }
    el.$=function(func){
        el.click(function(e){
            func(  e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)})}
    el.$$=function(func){

        el.dblclick(function(e){

            func(  e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)

        })}
    el.over = el.MV=function(func){

        el.mouseover(function(e){


            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }
    el.out =el.MO=function(func){

        el.mouseout(function(e){


            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }
    el.enter = el.ME=function(func){

        el.mouseenter(function(e){

            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }
    el.leave = el.ML=function(func){

        el.mouseleave(function(e){

            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }
    el.up = el.MU=function(func){

        el.mouseup(function(e){

            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }
    el.move = el.MM=function(func){

        el.mousemove(function(e){

            func(e.pageX -$(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
    el.down = el.MD=function(func){

        el.mousedown(function(e){

            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }
    return el
}
$.C=function(){ z();
    c = $.c('y').drag()
    x = c.ctx()
}
canEl=function(){
    c.u = function(){return this.toDataURL()}
    c.x = function(){return this.getContext('2d')}
}//;canEl()
paths=function(){
    cv.s = cv.ss = cv.strokeColor=setStrokeColor=function(c){

        this.ctx().strokeStyle =  oO('c', c)

        return this

    }
    cv.f = cv.fs = cv.fillColor=setFillColor=function(c){

        this.ctx().fillStyle =   oO('c',c)

        return this

    }
    cv.fi= cv.fill=function(){
        var cv=this
        cv.ctx().fill()
        //cv.stroke()
        return cv
    }
    cv.str= cv.stroke=function(){var cv=this,ctx=cv.ctx()
        ctx.stroke()
        //cv.stroke()
        return cv
    }
    cv.fSty= cv.fillStyle=function(fs){
        if(U(fs)){return this.context.fillStyle}
        this.context.fillStyle = fs
        return this}
    cv.fsX=function(c,sc){var g=G(arguments)

        if(O(c)){

            x.x.fillStyle=c;

            return x
        }

        if( c=g.p? $r('c',c) : Oo('c',c) ){
            x({f:c})
        }



        if(D(sc)){x.ss(sc)}

        return x

    }
    cv.sfl=function(c,f,s,l){
        x({f:f,s:s,w:l});return x
    }
    cv.clP= cv.closePath=function(){
        cv.context.closePath()
        return cv}
    cv.bg = cv.begin= cv.beginPath= function(x, y){var cv=this, ctx=cv.ctx()
        ctx.beginPath()
        if(N(x)){cv.mt(x,y)}
        if(A(x)){cv.mt(x[0],x[1])}
        return cv
    }
    cv.mt=  function(x,y){
        var cv=this, ctx = cv.ctx()
        ctx.moveTo(x,y)
        return cv
    }
    cv.lt=  function(x,y){var cv=this,ctx=cv.ctx(),g=G(arguments)

        if(A(x)){

            g.e(
                function(x){cv.lt(x[0],x[1])
                })}

        ctx.lineTo(x,y)

        return cv
    }
    cv.cl =function(){
        cv.context.clip()
        return cv}
    cv.fr= cv.fR= function(a,b,c,d){
        a=a||0
        b=b||0
        c=c||cv.W()
        d=d||cv.H()
        cv.context.fillRect(a,b,c,d)
        return this
    }
//clear screen [+ fill with color || run fx]
    cv.clear = cv.clearRect=function(a,b,c,d){
        if(S(a)){
            cv.fillStyle(a);
            return cv.fillRect()}
        a=a||0
        b=b||0
        c=c||cv.W()
        d=d||cv.H()
        cv.context.clearRect(a,b,c,d)

        // if(F(a)){a()}
        return cv
    }
    cv.horizontalLine=cv.lnh=function(X,Y,l){var g=G(arguments),X=g[0],Y=g[1],l=g[2],
        X2=g.p?X+l:g.n?X-l:l
        return x.ln(X,Y,X2,Y)}
    cv.verticalLine= cv.lnv=function(X,Y,len){var g=G(arguments),
        X=g[0], Y=g[1], len=g[2],
        Y2 = g.p ? Y + len
            : g.n ? Y - len
            : len
        return x.ln( X, Y , X, Y2 )
    }
//curves
    cv.arc=function(a,b,c,d,e,f,g){
        this.ctx().arc(a,b,c,d,e,f,g)
        return this
    }
    cv.arcTo =  function a2(X){var g=G(arguments)
        if(A(X)){return _a( a2(x), X)}
        this.arcTo([0]||50,g[1]||40,g[2]||100,g[3]||100,g[4]||30)
        this.stroke()
        return this
    }
    cv.bezierCurveTo=function(a,b,c,d,e,f,g){
        this.context.quadraticCurveTo(a,b,c,d,e,f,g)
        return this
    }
    cv.quadraticCurveTo=function(a,b,c,d,e,f,g){
        this.context.quadraticCurveTo(a,b,c,d,e,f,g)
        return cv
    }
    cv.curveTo=function(a,b,c,d,e,f,g){

        if(N(e)){
            return this.bezierCurveTo(a,b,c,d,e,f)
        }

        else return this.quadraticCurveTo(a,b,c,d,e,f,g)


    }
    cv.cir=function(X,Y,R,fs,ss){var cv=this, g=G(arguments),
        X=g[0]||200, Y=g[1]||200, r=g[2]||1, fs=g[3], ss=g[4]
        cv.beginPath()
        cv.arc(X, Y, r,0,7,false)
        cv.fillColor('red')
        cv.strokeColor('blue')
        cv.stroke()
        cv.fill()
        return cv
    }
//rect
    cv.fr= cv.fillRect=function(a,b,c,d){
        a=a||0
        b=b||0
        c=c||this.W()
        d=d||this.H()
        this.context.fillRect(a,b,c,d)

        return this}
    cv.colorFillRect = cv.cfr=function(a){

        var args=G(arguments)

        this.save()
        this.setFillColor( toColor.apply(null, args) )
        this.fillRect(0, 0, this.W(),this.H() )
        this.restore()

        return this

    }
    cv.roundRect= function(X, y, width, height, radius){

        cv = this.context
        cv.beginPath()
        cv.moveTo(X + radius, y);
        cv.lt(X + width - radius, y);
        cv.quadraticCurveTo(X + width, y, X + width, y + radius);
        cv.lt(X + width, y + height - radius);
        cv.quadraticCurveTo(X + width, y + height, X + width - radius, y + height);
        cv.lt(X + radius, y + height);
        cv.quadraticCurveTo(X, y + height, X, y + height - radius);
        cv.lt(X, y + radius);
        cv.quadraticCurveTo(X, y, X + radius, y);
        cv.closePath();

        cv.fill()
        return cv

    }
    cv.roundRect.test=function(){
        cv.roundRect(100,100,200,400,20)

    }
//draw line ( [x,y],[x,y] || x,y,x,y )
//draw multiple unconnected lines ( [[],[]],[[],[]] || [],[] )
//fresh start
    cv.ln=cv.line = function rc(){
        var cv=this,
            ctx=cv.ctx(),
            g= G(arguments)

        if(g.N_){
            cv.begin(g.f, g.s)
            cv.lt(g.t, g[3])
            cv.stroke()
            return cv
        }

        if(g.A_ && N(g[0][0]) ){
            cv.begin(g.f)
            g.eR( function(p){
                cv.lt(p[0], p[1])
            })
            cv.stroke()
            return cv
        }

        if(AA(g.f)){
            g.e(function(p){ cv.ln.apply(cv,p)})
        }
        //cv.stroke()
        return cv
    }
    cv.pointInPath = cv.pip=function(c,a,b){
        return this.context.isPointInPath(a,b)
    }
};paths()
cv.dots=function(){var cv=this

    cv.copy()
    cv.DOTS=[]
    cv.dats=[]
    cv.$(function(x,y){
        x=parseInt(x)
        y=parseInt(y)
        cv.cir(x, y)
        cv.DOTS.push( [ x,y ] )
        cv.dats.push( x)
        cv.dats.push( y )
        cv.line( cv.DOTS )
    })
    cv.$$(function(X,Y){var du
        //el.C('X')
        cv.off('click')
        cv.closePath()  //el.paste() // el.copy()  //el.save()
        cv.clear() //du = el.toDataURL()
        cv.clip()
        cv.paste() //el.fit(du)
    })

    return cv

}
grads=function(){
    /*
     addColorStop = function rc( gr, stop, c ){
     // pass only a gr -> function with gr curried
     // add a color stop to a gr
     if(U(stop)){return _.p(rc, gr)}
     gr.cS(stop, oO('c', c))
     return gr
     }

     SuperGradient = function(gr){
     gr.stop = function(stop, c){cS(gr, stop,c); return gr}
     gr.stops = function(stopObject){
     _.e(stopObject,
     function(v, k){
     var o = S(v)? {k:k, v:v} : {k:v, v:k}
     cS(gr, o.k , $r('c', o.v))
     })
     }
     return gr
     }


     cv.linearGradient = cv.lG = cv.createLinearGradient = function(a,b,c,d){
     a=a||0
     b=b||0
     c=c||this.W()
     d=d||this.H()
     return SuperGradient(this.context.createLinearGradient(a, b, c, d))}
     cv.radialGradient = cv.rG = cv.createRadialGradient =  function rg(){
     var g=G(arguments)
     g[0]=g[0]||  200
     g[1]=g[1]||  200
     g[2]=g[2]||  100
     g[3]=g[3]||  250
     g[4]= g[4]|| 250
     g[5]= g[5]|| 800
     return this.context.createRadialGradient(  g[0],  g[1],   g[2],  g[3], g[4],  g[5] )
     }

     */
    cv.radGradSample=function(){
        var grd = this.rG()
        addColorStop(grd, 0, 'r')
        addColorStop(grd,.15, 'b')
        addColorStop(grd,.2, 'r')
        addColorStop(grd,.5, 'y')
        addColorStop(grd, 1, 'b')
        this.fillStyle(grd)
        this.fillRect()
        return this}
    cv.growingSun=function(){var that = this

        var a=0,
            b=1000,
            grd

        var fn =  function(){

            a += 1
            b -= 2

            grd = that.rG( 200, 200, a, 290, 270, b)
            grd.addColorStop(.1,'Yellow')
            grd.addColorStop(.3,'Red')
            grd.addColorStop(1, 'Violet')
            //  gradient = x.grad( [200, 200, a, 290, 270, b],  { y: .1, r: .3,  V:1 } )
            that.fillStyle( grd )
            that.fillRect()
        }
        $.ev(1, fn)
    }
    cv.pattern = cv.createPattern = function(im, pat){
        //im = im || $.img('me')[0]
        var pattern  = this.context.createPattern( im,  pat || 'repeat' )
        return pattern }
    cv.testPattern=function(){

        var that =this

        $.i('me',function(img) {

            var pattern = that.pattern(img[0],'repeat')

            that.fillStyle(pattern).fillRect()
        })
    }
    /*
     xGr.S=xGr.stop=function(n,c){var gr=this,g=G(arguments)
     if(N(n)){gr.cS(n, oO('c',c))}
     if(A(n)){_.e(g, function(g){gr.stop(g[0],g[1])})}
     return gr
     }
     */
};grads()
pixels=function(){
    cv.gD=cv.getData = function(x,y,w,h){
        //historic.. dont delete ! data = x('G', X, Y, w, h).res
        var g=G(arguments),
            x=g[0] || 0,
            y=g[1] || 0,
            w=g[2] || this.W(),
            h=g[3] || this.H(),
            data = this.context.getImageData(x,y,w,h)
        // data.h = data.height
        // data.w = data.width
        // data.d = data.data
        return data
    }
    cv.pD=cv.putData=function(data,x,y){
        x=x||0
        y=y||0
        this.context.putImageData(data, x, y)
        return this
    }
    cv.gP=cv.getPut=function(a,x,y){
        var g=G(arguments),
            a=g[0],
            x=g[1],
            y=g[2],
            data=this.gD.apply(this.context, a)
        if(g.n){this.clear()}
        return x.pD(data,x,y)
    }
    cv.pixelsNegative=function(){
        var imgData = this.gD(),  //gD(0,0, this.W(), this.H())
            data = imgData.data
        for (var i=0;i<data.length; i+=4){
            data[i]   =  255 - data[i];
            data[i+1] =  255 - data[i+1]
            data[i+2] =  255 - data[i+2]
            data[i+3] =  255
        }
        this.pD(imgData) //  this.pD(data,0,0)
    }
    cv.pixelsInvert=function(){
        var imgData = this.gD(), data = imgData.data
        for (var i = 0; i < data.length; i += 4) {
            data[i]     = 225 - data[i];
            data[i + 1] = 225 - data[i + 1]
            data[i + 2] = 225 - data[i + 2]

        }
        this.pD(imgData)
    }
    cv.pixelsGrayscale=function(){

        var imgData = this.gD(),
            data = imgData.data

        for (var i = 0; i < data.length; i += 4) {

            var avg = (data[i] + data[i +1] + data[i +2]) / 3;

            data[i]     = avg
            data[i + 1] = avg
            data[i + 2] = avg

        }

        this.pD(imgData) //  this.pD(data,0,0)

    }
    cv.pixelsFade=function( ){


        var imgData = this.gD(), data = imgData.data

        for(var i=7; i<_.size(data) ; i+=4){data[i] = 90}

        this.pD(imgData)

        return el}
    pixelTest=function(){canvasPlayground()
        get = function(){d = m.getData(0,0,400,200)}
        // g.putData(d, 0, 100)
        put=function(){g.context.putImageData(d,200,200)}
        putget=function(){ get(); put() }
        putget()
        change=function(num){get()
            data = d.data
            _.e(data, function(pixel, index){ d.data[index] = pixel + (num ||100) })
            put()}
        anim=function(){num = 0; $.ev(.1, function(){change(num++)})}
    }
//give scale cos(rads), skew:sin(rads)  ??
};pixels()
trans=function(){


    cv.nl= cv.norm=function(){var cv=this,ctx=cv.ctx()

        cv.sc( this.W()/10, this.H()/10)

        return this
    }
    cv.sc=   function(X,Y){var g=G(arguments)
        X= g.f|| 1
        Y= g.s|| X
        this.ctx().scale(X,Y)
    }
    cv.tr=  function(X,Y){var g=G(arguments),
        X=g[0]||1,Y=g[1]||X
        x.x.translate(X,Y)}
    cv.rt=  function(r){
        var g=G(arguments),
            r=g[0]||1
        //r=pi(-6)*r
        //x.fr(0,0,1,1)
        //x({f:$r('c')
        x.x.rotate(r)
    }
    cv.al=function(al){
        this.opacity(al)
        return this

    }

    cv.tf=function rc(a,c,e,b,d,f){var g=G(arguments)
        if(g.u){return setTransform(2,0,0,2,0,0)}
        this.ctx().setTransform(a,c,e,b,d,f)
        return this
    }


};trans()
texty=function(){


    cv.font=function(f){
        this.ctx().font = $l( HTML5.font(f) )
        return this
    }


    cv.strokeText = function(t,X,Y){var g=G(arguments),
        t=g[0],
        X=g[1]||100,
        Y=g[2]||X

        this.ctx().strokeText(t,X,Y)

        return this

    }


    cv.fillText = function(t,X,Y){
        var g=G(arguments),
            t=g[0],
            X=g[1]||100,
            Y=g[2]||X
        if(g.p){
            this.tx(t,X,Y,'-')
            this.tx(t,X,Y)}
        else this.ctx().fillText(t,X,Y)
        return this
    }

    cv.mT= cv.measureText = cv.measure = function(t){
        return this.context.measureText(t)
    }

    cv.tW= cv.textWidth = function(t){return parseInt(this.measureText(t).width)}

    cv.centerHorizontalText=function(text, height){

        this.fillText(  text,
            this.W()/2 - this.textWidth(text)/2,
            height
        )

        return this}

}; texty()
drawin=function(){


    cv.dI=cv.drawImage = function(i){
        var cv=this, ctx = cv.ctx(), g=G(arguments),o

        g[1] = N( g[1], 0 )
        g[2] = N( g[2] || 0 )
        ctx.drawImage.apply(ctx, g)
    }
    cv.dr= cv.draw=function(i){var  cv=this, g=G(arguments)

        $.i(g.f, function(i){
            g[0] = i[0]
            cv.drawImage.apply(cv, g)
        })
    }
    cv.fit=function f(i, x,y) {var cv=this
        i= i || 'me'
        x = N(x,0)
        y = N(y,0)
        cv.draw(i, x, y,cv.W(), cv.H())
        return cv
    }
    cv.crop=function (x1,y1,x2,y2){var cv=this, ctx=cv.ctx(),i
        i= cv.toDataURL()
        if(A(x1)){
            return cv.crop(
                x1[0], x1[1], x1[2]-x1[0], x1[3]-x1[1]
            )}
        cv.dr(i, x1, y1, x2,y2, 0,0, cv.W(), cv.H())
        return cv
    }
    cv.scaleImCen=function(i, s ){
        var  w= this.W(),  h= this.H(), s= s||1
        this.draw(i,
            w * s/-2 + w/2,
            h * s/-2 + h/2//+ w/2
            ,
            w * s,
            h * s)
    }
    cv.scaleImCenSpiralMe=function(){
        var scaleNum = 1,
            that =this
        _.t(100, function(){

            that.scaleImCen('me', scaleNum)
            scaleNum *= .9
        })
    }
    cv.scaleImCenSpiral=function(){
        var scaleNum = 1, that =this
        _.t(100, function(){
            that.scaleImCen('me', scaleNum)
            scaleNum *= .9
        })

    }
    cv.dC=function f(i,x,y){

        var that = this

        i = i||'me'
        x= x||100
        y=y||100


        if(U(x)){//draw img in center of can
            $.img(i,function(i){
                that.draw(i, (that.W()/2)-(i.W()/2), (that.H()/2)-(i.H()/2))})}

        else {//draw it by specifying location of its center
            y=y||x
            $.i(i, function (i) {
                that.dr(i, x - i.W() / 2, y - i.H() / 2)})}

        return this}

    //draw it where u say, but as if its reg point was its center

    cv.drawRegCenter=cv.dC2=  function f(i,x,y){var that =this

        $.i(i,function(i){
            that.draw(i, (that.W()/2)-(i.W()/2), (that.H()/2)-(i.H()/2))})
        return this}
    cv.Cd=function(a, x,y){
        var that = this

        a= a||'me'
        x= x||100
        y=y||100

        $.i(a, function(img){that.drawImage(
            img.src,
            x- img.W()/2,
            y-img.H()/2
        )
        })
    }

}; drawin()
shadow=function() {

    cv.shdC = function (c) {
        if (U(c)) {return this.ctx().shadowColor}
        this.ctx().shadowColor = oO('c', c)
        return this
    }

    cv.shdBl =   function (bl) {
        if (U(bl)) {return this.ctx().shadowBlur}
        this.ctx().shadowBlur = bl
        return this
    }
    cv.shdX =  function (oX) {
        if (U(oX)) {return this.ctx().shadowOffsetX}
        this.ctx().shadowOffsetX = oX
        return this
    }
    cv.shdY =   function (oY) {
        if (U(oY)) {
            return this.ctx().shadowOffsetY
        }
        this.ctx().shadowOffsetY = oY
        return this
    }
    cv.shd = function (c, x, y, n) {var cv=this
        cv.shdC(c)
        cv.shdX(x)
        cv.shdY(y)
        cv.shdBl(n)
        return cv
    }


};shadow()
$.imageSizeFuncCan = function(image, size, func){//xc=
    var x = $.c(100, 100).C('X')
    if(image){ x.fit(image) }
    //if(size){  x.Z(size) }
    if(func){  x.click(func) }
    return x
}
cv.fitEx=function(){
    this.ln([0,0],
        [this.W(),this.H()],
        [0,this.W()],[this.H(),0])
}
tictactoe = [
    [[200, 0], [200, 600]],
    [[400, 0], [400, 600]],
    [[0, 200], [600, 200]],
    [[0, 400], [600, 400]]
]
sh1 = [[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]]
sh2 = [[[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]], [[8, 13], [12, 13]], [[9, 14], [9, 18]], [[10, 14], [10, 18]]]



$.c= $.canvas= $.can = function(col, width, height, x,y){


    var g=G(arguments), el, el=$('<canvas>')



    if( S(col) ){

        el.css( 'backgroundColor', oO( 'c' , col ) )
        if( N( width ) ){
            el.attr('width', width )
            el.attr('height', height || width)
        }
        if(N(x)){el.ab(x,y)}
        el= superCanvas(el)
    }

    else if( N(col) ){
        el =$.c( 'x', col, width,x,y   )
    }

    else {  superCanvas( el ).C( 'b' )   }


    if(!g.n){ el.A()}

    return el

    function superCanvas(el){
        el.canvas = $(el)[0]
        el.context = el.canvas.getContext('2d')
        el.stage = new J.Stage(el.canvas)
        superCanvasDraw(el)
        el.W=function(width){
            var args=G(arguments)
            width = args[0]
            if(U(width)){return this.attr('width')}
            if(args.N){var dataUrl = this.toDataURL()}
            this.attr('width', width)
            if(args.N){this.fit(dataUrl)}
            return this}
        el.H=function(height){
            var args=G(arguments)
            height = args[0]
            if(U(height)){return this.attr('height')}
            if(args.N){var dataUrl = this.toDataURL()}
            this.attr('height', height)
            if(args.N){this.fit(dataUrl)}
            return this}
        el.WH=function(w, h){

            if(U(w)){
                var width=this.W(),
                    height=this.H()
                return {
                    width:width,  w:width,
                    height:height, h:height}}

            h = h||w

            return this.W(w).H(h)}
        el.Z=function(d){d=d||5;return this.WH(d*100,d*100)}
        el.offsetLeft  =el.l=function(theOffset){

            if(!theOffset){

                return offsetLeft(x.q)}

            return parseInt( theOffset - x.offsetLeft() )};
        //  el.ox=function(){return x.q.q.offset().left}
        el.offsetTop   =el.t=function( y ){ if( !y ){ return offsetTop( y.q ) }; return parseInt( y - x.offsetTop() ) };
        //  el.oy=function(){return x.q.q.offset().top}
        el.copy= function(){
            el.img.src( el.toDataURL() )
            return el}
        el.paste= function(){
            var g=G(arguments)
            if(g.N){el.clearRect()}
            if(g.p){el.fit(el.img)}
            else {
                el.draw(el.img.src())
            }
        }
        el.save=function(){
            el.context.save()
            return el
        }
        el.restore=function(){
            el.context.restore()
            return el
        }
        //dont mix up with element/jquery alpha
        //maybe opacity for element and alpha for canvas?
        el.globalAlpha = el.alpha = el.op=function(alpha){
            if(U(alpha)){return this.context.globalAlpha}
            this.context.globalAlpha = alpha

            return this}
        el.comp = el.globalCompositionOperation = el.gc = function(compOp){
            if(U(compOp)){
                return this.context.globalCompositeOperation}
            this.context.globalCompositeOperation = oO('g', compOp)
            return this}
        //normal prop (as methods)
        el.lineWidth=function(w){
            if(U(w)){return el.context.lineWidth}
            el.context.lineWidth=w
            return el
        }
        el.lineCap=function(w){
            if(U(w)){return el.context.lineCap}
            el.context.lineCap=w
            return el
        }
        el.lineJoin=function(w){
            if(U(w)){return el.context.lineJoin}
            el.context.lineJoin=w
            return el
        }

        el.URL = el.dataURL = el.toDataURL=function(){
            return el.canvas.toDataURL()
        }


        //wap specific
        el.snap = function (  func ){

            pams = {

                d: el.toDataURL(),

                dats: el.dats

            }

            $.post('/img', pams, func )

        }

        el.img = $.img()

        el.img.src( el.toDataURL() )



        el.dots=function(){

            el.copy()
            el.DOTS=[]
            el.dats=[]

            el.$(function(x,y){

                x=parseInt(x)
                y=parseInt(y)

                el.cir(x, y)

                el.DOTS.push( [ x,y ] )
                el.dats.push( x)
                el.dats.push( y )
                el.line( el.DOTS )

            })




            el.$$(function(X,Y){var du
                //el.C('X')
                el.off('click')
                el.closePath()  //el.paste() // el.copy()  //el.save()
                el.clear() //du = el.toDataURL()
                el.clip()
                el.paste() //el.fit(du)
            })

            return el}

        el.me=function me(n){//randomly draw my face
            var g=G(arguments),n=g[0]||200
            if(x.me.d){
                clearInterval(x.me.d);x.me.d=false}
            else{x.me.d=I(function(){
                x.d($w['mug']||'me',_r(x.w()-200),_r(x.w()-200))},n) }
            return x}
        el.me.shouldDrawMeId=false
        el.mugX=function(m){
            qP('/mug',{u:m}, function(m){x.fit(m)})
            return x}

        el.tick=function(){var ctx=this.ctx()
            ctx.tick.apply(ctx, arguments)
            return this}

        superCanvasGradient(el)
        superCanvasPixels(el)
        superCanvasText(el)
        superCanvasTransform(el)
        superCanvasPath(el)
        superCanvasEvents(el)
        superCanvasShadow(el)
        return el
    }
}

$.C = function(){
    z(); return c=$.can('yellow', 900, 500 ).A()}

CANVIIFIT=function(){

    z()

    m= $.can(800).A().fit('me')

    g= $.can('b',600).A().fit('guy')

}
superCanvasGradient =function(el){
    var addColorStop = function rc( gradient, stop, color ){

        // pass only a gradient -> function with gradient curried
        // add a color stop to a gradient

        if(U(stop)){
            return _.partial(rc, gradient)}

        gradient.addColorStop(stop, oO('c', color))

        return gradient}
    var SuperGradient = function(gradient){
        gradient.stop = function(stop,color){
            addColorStop(gradient, stop,color);
            return gradient
        }


        gradient.stops= function(stopObject){
            _.e(stopObject,
                function(v, k){
                    var o = S(v)? {k:k, v:v} : {k:v, v:k}
                    addColorStop(gradient, o.k , $r('c', o.v))
                })
        }
        return gradient}

    el.linearGradient = el.lG = el.createLinearGradient = function(a,b,c,d){
        a=a||0
        b=b||0
        c=c||this.W()
        d=d||this.H()
        return SuperGradient(this.context.createLinearGradient(a, b, c, d))
    }
    el.linGradBlackToWhite = function(){
        grd = this.linearGradient(0,0,this.W(),0)
        grd.stop(0,"black").stop(1,"white")
        this.fillStyle(grd)
        this.fillRect()
    }
    el.linGradDiagnal = function(grd){
        grd= grd || this.lG()
        grd.stop(0,'r')
        grd.stop(.1,'r')
        grd.stop(.15,'b')
        grd.stop(.2,'r')
        grd.stop(.5,'y')
        grd.stop(1,'b')
        this.fillStyle(grd)
        this.fillRect()
        return this}
    el.radialGradient = el.rG = el.createRadialGradient =  function rg(){
        var g=G(arguments)
        g[0]=g[0]||  200
        g[1]=g[1]||  200
        g[2]=g[2]||  100
        g[3]=g[3]||  250
        g[4]= g[4]|| 250
        g[5]= g[5]|| 800
        return this.context.createRadialGradient(  g[0],  g[1],   g[2],  g[3], g[4],  g[5] )
    }
    el.radGradSample=function(){

        var grd = this.rG()

        addColorStop(grd, 0, 'r')
        addColorStop(grd,.15, 'b')
        addColorStop(grd,.2, 'r')
        addColorStop(grd,.5, 'y')
        addColorStop(grd, 1, 'b')

        this.fillStyle(grd)
        this.fillRect()
        return this}
    el.growingSun=function(){var that = this

        var a=0,
            b=1000,
            grd

        var func =  function(){

            a += 1
            b -= 2

            grd = that.rG( 200, 200, a, 290, 270, b)

            grd.addColorStop(.1,'Yellow')

            grd.addColorStop(.3,'Red')

            grd.addColorStop(1, 'Violet')

            //  gradient = x.grad( [200, 200, a, 290, 270, b],  { y: .1, r: .3,  V:1 } )

            that.fillStyle( grd )
            that.fillRect()


        }

        setInterval(func, 100)

    }
    el.pattern = el.createPattern = function(im, pat){
        //im = im || $.img('me')[0]
        var pattern  = this.context.createPattern( im,  pat || 'repeat' )
        return pattern }
    el.testPattern=function(){
        var that =this
        $.img('me',function(img) {
            var pattern = that.pattern(img[0],'repeat')
            that.fillStyle(pattern).fillRect()})





    }}


TESTGRADWORKS=function(){z()

    c = $.c('y', 500).A()

    g = c.context.createLinearGradient(50, 0, 500, 100)

    g.addColorStop(.2, 'orange')
    g.addColorStop(.6, 'red')

    g.addColorStop( .8,'green')


    c.context.fillStyle = g

    c.fillRect()

}
CanvasGradient.prototype.stop=function(num, col){
    var that=this

    if(N(num)){ this.addColorStop(num, oO('c', col))}

    if(A(num)){
        _.each(arguments, function(arg){
            that.stop(arg[0],arg[1])
        })
    }

    return this}


LINRAD=function(){z()

    d= $.c('y', 500)

    c = $.c('y', 500).A()

    c.context.f(

        c.context.linGrad(50, 0, 500, 100).stop([.2,'o'],[.6, 'r'],[ .8,'g'])

    )

    c.fr()

}
RADGRAD=function(){z()

    d= $.c('y', 500)

    c = $.c('y', 500).A()

    c.context.f(

        c.context.radGrad(50, 50, 50, 50,50,200).stop([.2,'o'],[.6, 'r'],[ .8,'g'])

    )

    c.fr()

}
superCanvasPixels=function(el){
    el.gD=el.getData = function(x,y,w,h){
        //historic.. dont delete ! data = x('G', X, Y, w, h).res



        var g=G(arguments),

            x=g[0] || 0,
            y=g[1] || 0,
            w=g[2] || this.W(),
            h=g[3] || this.H(),

            data = this.context.getImageData(x,y,w,h)

        // data.h = data.height
        // data.w = data.width
        // data.d = data.data

        return data}
    el.pD=el.putData=function(data,x,y){
        x=x||0
        y=y||0
        this.context.putImageData(data, x, y)
        return this}
    el.gP=el.getPut=function(a,x,y){
        var g=G(arguments),

            a=g[0],
            x=g[1],
            y=g[2],

            data=this.gD.apply(this.context, a)
        if(g.n){this.clear()}
        return x.pD(data,x,y)

    }
    el.pixelsNegative=function(){


        var imgData = this.gD(),  //gD(0,0, this.W(), this.H())
            data = imgData.data



        for (var i=0;i<data.length; i+=4){
            data[i]   =  255 - data[i];
            data[i+1] =  255 - data[i+1]
            data[i+2] =  255 - data[i+2]
            data[i+3] =  255
        }

        this.pD(imgData) //  this.pD(data,0,0)


    }
    el.pixelsInvert=function(){

        var imgData = this.gD(),
            data = imgData.data


        for (var i = 0; i < data.length; i += 4) {
            data[i]     = 225 - data[i];
            data[i + 1] = 225 - data[i + 1]
            data[i + 2] = 225 - data[i + 2]

        }

        this.pD(imgData)


    }
    el.pixelsGrayscale=function(){

        var imgData = this.gD(),
            data = imgData.data


        for (var i = 0; i < data.length; i += 4) {
            var avg = (data[i] + data[i +1] + data[i +2]) / 3;
            data[i]     = avg
            data[i + 1] = avg
            data[i + 2] = avg
        }

        this.pD(imgData) //  this.pD(data,0,0)


    }
    el.pixelsFade=function( ){


        var imgData = this.gD(),
            data = imgData.data

        for(var i=7; i<_.size(data) ; i+=4){data[i] = 90}

        this.pD(imgData)

        return el}


}
PIXELS=function(){z()
    c=$.can('yellow',900,500).A()
    c.draw('me', 100,100)
    setTimeout(function(){
        c.pD( c.gD(100,100,500,500), 120,120)
        c.f("red").fr(10,10,50,50)
        imgData=c.gD(10,10,50,50)
        c.pD(imgData,10,70)

    }, 200)}
CANVASQLOADER=function(){$.C(); cjs.lq(['me'],function(q){me=q('me')

    c.drawImage(me,100,100)

    c.pD( c.gD(100,100,500,500), 120, 120 )

    c.f("red").fr(10,10,50,50)

    imgData = c.gD(10, 10, 50, 50)

    c.pD(imgData,10,70)

})}
PIXELTEST=function(){c=$.C(); cjs.lq(['me'],function(q){me=q('me')

    c.drawImage(me,100,100)


    d = c.gD(100,100,500,500)

    // c.pD(d , 120, 120 )

    zeros=0
    nums=0

    _.each(d.data, function(d){
        if(d==0){zeros++} else {nums++}
    })

    $l('zeros: '+ zeros + ' - nums: '+ nums )

})}
pixelTest=function(){canvasPlayground()

    get = function(){

        d = m.getData(0,0,400,200)}

    // g.putData(d, 0, 100)

    put=function(){
        g.context.putImageData(d,200,200)}

    putget=function(){

        get()
        put()}

    putget()

    change=function(num){
        get()

        data = d.data

        _.e(data, function(pixel, index){

            d.data[index] = pixel + (num ||100)

        })

        put()
    }
    anim=function(){

        num = 0

        setInterval(

            function(){
                change(num)
                num += -1},

            100)

    }

}
superCanvasTransform=function(el){

//give scale cos(rads), skew:sin(rads)  ??
    el.norm=function(){
        el.context.scale( this.W()/10, this.H()/10)
        return this}


    el.scale=el.sc=function(X,Y){var g=G(arguments),
        X=g[0]||1,Y=g[1]||X
        x.x.scale(X,Y)}
    el.translate=el.tr=function(X,Y){var g=G(arguments),
        X=g[0]||1,Y=g[1]||X
        x.x.translate(X,Y)}
    el.rotate=el.rt=function(r){
        var g=G(arguments),
            r=g[0]||1
        //r=pi(-6)*r
        //x.fr(0,0,1,1)
        //x({f:$r('c')
        x.x.rotate(r)
    }
    el.transform=el.tf=function rc(a,c,e,b,d,f){var g=G(arguments)
        if(g.p){return rc(2,0,0,2,0,0)}
        return x('t',a,c,e,b,d,f)}
    el.setTransform=el.stf=function rc(a,c,e,b,d,f){var g=G(arguments)
        if(g.p){return rc(2,0,0,2,0,0)}
        return x('st',a,c,e,b,d,f)}



    return el}
TRANS=function(){

    z()

    x = $.c('yellow', 1000,800).A()
    y = $.c('purple', 400).A()

    x.$$(function(){
        x.fit('me')})

    x.fit('me')


    identity=function(x){
        x.stf(1,0,0,1,0,0)
    }

    rotate=function(x,a){
        identity(x)
        x.rt(tRad(a))}

    rotateByAngle=function(px,py,a){var x,y

        x=(px*cos(a))-(py*sin(a))
        y=(py*cos(a))+(px*sin(a))}

    rotateAroundZero=function(px,py,r){var x, y,a='angle'

        x=(px * cos(PI/4))-(py*(sin(PI/4)))
        y=(py * cos(PI/4))+(px*(sin(PI/4)))}


    transformEquations=['x=ax+cy+e','y=bx+dy+f']

    //if a=1,b=0,c=0,d=1 then args e,f rep pure translation
    //x=x+e,y=y+f
    //to scale, use a,d and set others to 0
}
superCanvasText=function(el){

    el.font=function(font){
        this.context.font = $l( HTML5.font(font) )
        return this}

    el.strokeText = function(t,X,Y){
        var g=G(arguments),
            t=g[0],

            X=g[1]||100,
            Y=g[2]||X

        this.context.strokeText(t,X,Y)

        return this}
    el.fillText = function(t,X,Y){
        var g=G(arguments),
            t=g[0],
            X=g[1]||100,
            Y=g[2]||X
        if(g.p){
            this.tx(t,X,Y,'-')
            this.tx(t,X,Y)}
        else this.context.fillText(t,X,Y)
        return this}
    el.measureText = el.measure = function(t){
        return this.context.measureText(t)
    }
    el.textWidth = function(t){return parseInt(this.measureText(t).width)}
    el.centerHorizontalText=function(text, height){

        this.fillText(  text,
            this.W()/2 - this.textWidth(text)/2,
            height
        )

        return this}



}
superCanvasDraw=function(el){

    //this just a simple proxy to drawImage // dont use?
    el.drawImage = el.dI=function(){var el=this, g=G(arguments)

        g[1]= N(g[1])? g[1]:0
        g[2]= N(g[2])? g[2]:0

        $(el)[0].getContext('2d').drawImage.apply(
            $(el)[0].getContext('2d'), g
        )
    }

    //this will create the image (from string), and then draw it
    el.draw=function(){var el=this, g=G(arguments),  i = g[0]
        $.i(i, function(e,i){

            $l('draw')
            ii=i
            g[0] = i[0]
            el.dI.apply(el, g)
        })

    }


    el.fit=function f(i, x,y) {var el=this

        $l('fit: - el.W():'+el.W())
        i = i || 'me'
        x = x||0
        y = y||0
        el.draw( i, x, y, el.W(), el.H() )
        //el.draw(img, X, Y, el.width(), el.height())
        return el
    }


    el.drawMug = el.me = function me(interval){
        //randomly draw my face

        var that = this, g=G(arguments), args= g,

            interval = args[0] || 200

        if(that.drawMug.shouldDrawId){

            clearInterval(that.drawMug.shouldDrawId)

            that.drawMug.shouldDrawId = false}

        else{

            that.drawMug.shouldDrawId =  setInterval(function(){

                that.draw(  window['mug']||'me',  _.random( that.W()-200 ),  _.random( that.W()-200 )  )

            }, interval)}

        return this}
    el.drawMug.shouldDrawId = false

    el.fitMug = el.mug= function(user){

        var that=this

        $.post('/mug', { u: user },  function(userMug){  that.fit(userMug)  })

        return this}

    el.crop=function rc(x1,y1,x2,y2){

        if(A(x1)){

            return rc(
                x1[0],x1[1],
                x1[2]-x1[0],
                x1[3]-x1[1]
            )
        }

        this.context.drawImage(x, x1, y1, x2, y2, 0,0, this.W(), this.H())
        return this
    }



    el.crop2=function rc(x1,y1,x2,y2){
        if(A(x1)){return rc( x1[0],x1[1], x1[2]-x1[0], x1[3]-x1[1])}

        return el.draw(
            el.toDataURL(),
            x1,y1,x2,y2,
            0,0, this.W(),this.H()
        )

    }





    el.scaleImCen=function(img, s ){

        var  w= this.W(),  h= this.H(), s= s||1

        this.draw(img,

            w * s/-2 + w/2,
            h * s/-2 + h/2//+ w/2
            ,

            w * s,
            h * s)
    }
    el.scaleImCenSpiralMe=function(){
        var scaleNum = 1,
            that =this

        _.times(100, function(){

            that.scaleImCen('me', scaleNum)
            scaleNum *= .9
        })

    }
    el.scaleImCenSpiral=function(){

        var scaleNum = 1,
            that =this

        _.times(100, function(){

            that.scaleImCen('me', scaleNum)
            scaleNum *= .9
        })

    }

    el.dC=function f(i,x,y){

        var that = this

        i = i||'me'
        x= x||100
        y=y||100


        if(U(x)){//draw img in center of can
            $.img(i,function(i){
                that.draw(i, (that.W()/2)-(i.W()/2), (that.H()/2)-(i.H()/2))})}

        else {//draw it by specifying location of its center
            y=y||x
            $.img(i, function (i) {
                that.draw(i, x - i.W() / 2, y - i.H() / 2)})}

        return this}
    //draw it where u say, but as if its reg point was its center
    el.drawRegCenter=el.dC2=  function f(i,x,y){var that =this
        $.img(i,function(i){
            that.draw(i, (that.W()/2)-(i.W()/2), (that.H()/2)-(i.H()/2))})
        return this}
    el.Cd=function(a, x,y){
        var that = this

        a= a||'me'
        x= x||100
        y=y||100

        $.img(a,

            function(img){

                that.drawImage(


                    img.src,
                    x- img.W()/2,
                    y-img.H()/2
                )
            })

    }

    return this}

superCanvasPath=function(el){
    el.s = el.ss=el.strokeColor=setStrokeColor=function(c){
        el.context.strokeStyle = oO('c',c)
        return el
    }
    el.f = el.fs = el.fillColor=setFillColor=function(c){
        el.context.fillColor=oO('c',c)
        return el
    }
    el.fillStyle=function(fs){
        if(U(fs)){return this.context.fillStyle}
        this.context.fillStyle = fs
        return this

    }
    el.fsX=function(c,sc){var g=G(arguments)
        if(O(c)){x.x.fillStyle=c;
            return x}
        if(c=g.p?$r('c',c):Oo('c',c)){
            x({f:c})}
        if(D(sc)){x.ss(sc)}
        return x}
    el.sfl=function(c,f,s,l){
        x({f:f,s:s,w:l});return x
    }
    el.fill=function(){
        el.context.fill()
        //el.stroke()
        return el
    }
    el.stroke=function(){
        el.context.stroke()
        //el.stroke()
        return el
    }
    el.closePath=function(){
        el.context.closePath()
        return el}
    el.beginPath=el.begin =function(x, y){

        el.context.beginPath()

        if(N(x)){el.moveTo(x,y)}

        if(A(x)){el.moveTo(x[0],x[1])}

        return el}
    el.moveTo=function(x,y){
        el.context.moveTo(x,y)
        return el
    }
    el.lineTo=function(x,y){

        if(A(x)){

            _.e(arguments,
                function(x){
                    el.lineTo(x[0],x[1])
                })}

        el.context.lineTo(x,y)
        return el
    }
    el.clip=function(){
        el.context.clip()
        return el}
    el.fillRect=el.fr =function(a,b,c,d){
        a=a||0
        b=b||0
        c=c||el.W()
        d=d||el.H()

        el.context.fillRect(a,b,c,d)
        return this}


    //clear screen [+ fill with color || run fx]

    el.clear = el.clearRect=function(a,b,c,d){
        if(S(a)){
            el.fillStyle(a);
            return el.fillRect()}
        a=a||0
        b=b||0
        c=c||el.W()
        d=d||el.H()
        el.context.clearRect(a,b,c,d)

        // if(F(a)){a()}
        return el
    }

    el.horizontalLine=el.lnh=function(X,Y,l){var g=G(arguments),X=g[0],Y=g[1],l=g[2],
        X2=g.p?X+l:g.n?X-l:l
        return x.ln(X,Y,X2,Y)}
    el.verticalLine= el.lnv=function(X,Y,len){

        var g=G(arguments),

            X=g[0],

            Y=g[1],

            len=g[2],

            Y2 = g.p ? Y + len
                : g.n ? Y - len
                : len

        return x.ln( X, Y , X, Y2 )
    }


    //curves
    el.arc=function(a,b,c,d,e,f,g){
        el.context.arc(a,b,c,d,e,f,g)
        return el
    }
    el.arcTo = el.a2=function a2(X){
        var g=G(arguments)

        if(A(X)){return _a( a2(x), X)

        }

        this.arcTox([0]||50,g[1]||40,g[2]||100,g[3]||100,g[4]||30)

        this.stroke()
        return this}
    el.bezierCurveTo=function(a,b,c,d,e,f,g){
        this.context.quadraticCurveTo(a,b,c,d,e,f,g)
        return this}
    el.quadraticCurveTo=function(a,b,c,d,e,f,g){



        this.context.quadraticCurveTo(a,b,c,d,e,f,g)


        return el}
    el.curveTo=function(a,b,c,d,e,f,g){

        if(N(e)){
            return this.bezierCurveTo(a,b,c,d,e,f)
        }

        else return this.quadraticCurveTo(a,b,c,d,e,f,g)


    }

    el.cir=function(X,Y,R,fs,ss){
        var g=G(arguments), X=g[0]||200, Y=g[1]||200, r=g[2]||1, fs=g[3], ss=g[4]

        el.beginPath()
        el.arc(X,Y,r,0,7,false)

        el.fillColor(fs)
        el.strokeColor(ss)
        el.stroke().fill()

        return el

    }





    //rect
    el.fillRect=el.fr=function(a,b,c,d){
        a=a||0
        b=b||0
        c=c||this.W()
        d=d||this.H()
        this.context.fillRect(a,b,c,d)

        return this}
    el.colorFillRect = el.cfr=function(a){
        var args=G(arguments)
        this.save()
        this.fillStyle = a
        this.fillRect(0, 0, this.W(),this.H() )
        this.restore()
        return this
    }
    el.roundRect= function(X, y, width, height, radius){

        el = this.context
        el.beginPath()
        el.moveTo(X + radius, y);
        el.lineTo(X + width - radius, y);
        el.quadraticCurveTo(X + width, y, X + width, y + radius);
        el.lineTo(X + width, y + height - radius);
        el.quadraticCurveTo(X + width, y + height, X + width - radius, y + height);
        el.lineTo(X + radius, y + height);
        el.quadraticCurveTo(X, y + height, X, y + height - radius);
        el.lineTo(X, y + radius);
        el.quadraticCurveTo(X, y, X + radius, y);
        el.closePath();

        el.fill()
        return el}
    el.roundRect.test=function(){
        el.roundRect(100,100,200,400,20)
    }


    //draw line ( [x,y],[x,y] || x,y,x,y )
    //draw multiple unconnected lines ( [[],[]],[[],[]] || [],[] )
    //fresh start
    el.ln =el.line = function rc(p){

        var args = G(arguments),    p=args[0]


        if(N(args[0])){
            el.begin(args[0], args[1])
            el.lineTo(args[2], args[3])
            el.stroke()
            return el}


        if( A(args[0]) && N(args[0][0]) ){

            el.begin(args.f)

            _.e(args.r, function(p){
                el.lineTo(p[0],p[1])
            })

            el.stroke()
            return el}



        if(AA(p)){

            _.e(args,
                function(p){

                    el.line.apply(null, p)

                })}





        el.stroke()
        return el}



    el.fitEx=function(){
        this.ln([0,0],[this.W(),this.H()],[0,this.W()],[this.H(),0])
    }


    el.sun=function(a,b,s){
        s=s||1;

        this.rG([[a||0,b||a||0],
                s*100,s*500],

            {'y':0,1:tCl('p',0)},
            600,600)
    }
    el.ball=function(b){b=b||{}
        var dir = b.d||false,
            px  = b.x||100, py  = b.y||100, rad = b.r||100,

            per = b.p||Math.PI* 2,

            ss = $r('c', b.s) ,
            fs = $r('c', b.f),
            lw = D(b.l)? b.l: 4

        return x.com(
            'b',['a',px,py,rad,0,per,dir],
            {f:fs,s:ss,w:lw},'f','s')}


    el.pointInPath = el.pip=function(c,a,b){
        return this.context.isPointInPath(a,b)
    }
    el.paperBag= function(x, y, width, height, blowX, blowY){

        x=x||100
        y=y||100
        width = width||100
        height = height ||100
        blowX = blowX || 100
        blowY = blowY || 100
        var lx, ly;
        this.beginPath();
        this.moveTo(x, y);
        this.quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
        this.quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
        this.quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
        this.quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);

        return this}

    return el}


//can.ln(tictactoe)
tictactoe=[
    [[200,0],[200,600]],
    [[400,0],[400,600]],
    [[0,200],[600,200]],
    [[0,400],[600,400]]
]


sh1=[[10,0],[19,19],[10,9],[9,9],[0,19],[9,0]]
sh2=[[[10,0],[19,19],[10,9],[9,9],[0,19],[9,0]],[[8,13],[12, 13]],[[9,14],[9,18]],[[10,14],[10,18]]]




superCanvasEvents=function(el){

    el.$=function(func){
        el.click(function(e){

            func(  e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)

        })}
    el.$$=function(func){

        el.dblclick(function(e){

            func(  e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)

        })}

    el.over = el.MV=function(func){

        el.mouseover(function(e){


            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }

    el.out =el.MO=function(func){

        el.mouseout(function(e){


            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }

    el.enter = el.ME=function(func){

        el.mouseenter(function(e){

            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }

    el.leave = el.ML=function(func){

        el.mouseleave(function(e){

            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }

    el.up = el.MU=function(func){

        el.mouseup(function(e){

            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }

    el.move = el.MM=function(func){

        el.mousemove(function(e){

            func(e.pageX -$(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }



    el.down = el.MD=function(func){

        el.mousedown(function(e){

            func(e.pageX-$(this).offset().left,
                e.pageY-$(this).offset().top)
        })
    }

}
superCanvasShadow=function(el){


    el.shadowColor=function(color){

        if(U(color)){
            return this.context.shadowColor
        }


        this.context.shadowColor=oO('c', color)

        return this}

    el.shadowBlur=function(blurNumber){

        if(U(blurNumber)){
            return this.context.shadowBlur}

        this.context.shadowBlur=blurNumber
        return this}

    el.shadowOffsetX=function(offsetX){
        if(U(offsetX)){
            return this.context.shadowOffsetX}
        this.context.shadowOffsetX=offsetX
        return this}

    el.shadowOffsetY=function(offsetY){
        if(U(offsetY)){
            return this.context.shadowOffsetY}
        this.context.shadowOffsetY=offsetY
        return this}

    el.shadow=function(color, x,y, num){

        el.shadowColor(color)

        el.shadowOffsetX(x).shadowOffsetY(y)

        el.shadowBlur(num)

        return el}



}


testShadow=function(){z()

    c = $.c('b', 700).A()

    c.draw('me', 100,100)

    c.shadowColor('r').shadowBlur(100).shadowOffsetX(200).shadowOffsetY(100)

    c.draw('me', 200,200)

    c.shadowColor('y').shadowBlur(100).shadowOffsetX(200).shadowOffsetY(100)

    c.shadowColor('g')
    c.draw('me', 0,300)

    c.shadow('p', 30,200, 20)
    c.draw('guy', 400,200)

}





CAN=function(){var picHolder
    $.fm()
    s2.A(picHolder= $.span().id('pics'))
    $.getJSON('/img',   function(i){ _.e(i, withImage  ) } )
    function withImage(img){
        dataUrl = img.d
        can =   $.c(100, 100)
        can.click(function(){
            var mouse = $('#mouse')
            mouse.val('click')
            mouse.change()
            mug = img.d   })
        picHolder.A(can)
        can.fit(dataUrl)    }

    s2.A(
        x = canvas = $.c('yellow',1000,800))
    setInterval(function(){
        //  x.bc()
    }, 10000)
    s1(
        $.label('mouse'),

        $.sel('none','click','enter','leave','move').id('mouse').o(
            function(s){
                x.q.ub()
                if(s=='click'){
                    x.$(function(X,Y){
                        x.Cd(mug,X,Y)
                    })}
                if(s=='enter'){x.ME(function(X,Y){x.Cd(mug,X,Y)})}
                if(s=='leave'){x.ML(function(X,Y){x.Cd(mug,X,Y)})}
                if(s=='move'){x.MD(function(){x.MM(function(X,Y){x.Cd(mug,X,Y)})})

                    x.MU(function(){x.q.ub('mousemove')})}
            }),


        $.label('global comp'),
        sel.apply(this, V(oO('g')) ).$(function(v){ x.gc(v) }),
        //gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
        $.bt('SAVE(sv)',function(){
            x.sv()
        }), $.br(2),
        $.bt('CUT(dots)', function(){

            x.q.q.unbind()

            qi('mouse').v('none')

            x.dots()   }), $.br(2),
        $.bt('RESTORE(R)', function(){x.R()}), $.br(2),
        $.bt('bc:change background color',function(){x.bc()}),$.br(2),
        $.bt('cir:make circle',function(){x.cir(100,100,100)}),$.br(2),
        $.bt('d:draw',function(){x.d($w['mug']||'me')}),$.br(2),
        $.bt('dC:draw center',function(){x.dC($w['mug']||'me')}),$.br(2),
        $.bt('me',function(){x.me()}), $.br(2),
        $.bt('sh1',function(){x.ln(sh1)}), $.br(2),
        $.bt('sh2',function(){x.ln(sh2)}), $.br(2),
        $.bt('tictactoe',function(){
            x.ln(tictactoe)
        }), $.br(4),
        $.bt('sampLinGrad',function(){

            x.sampLinGrad()

        }),
        $.br(2),
        $.bt('sampRadGrad', function(){

            x.sampRadGrad()

        }),
        $.br(2),
        $.bt('xxx',function(){
            xxx('barney')}), $.br(2),
        $.bt('bads',function(){
            bad(x,200,8)  }), $.br(2),
        $.bt('coins', function(){

            coin(x,200,8)
        }),    $.br(2)
    )



}





FAN=function(){

    x=$.c('y',1000,800).A()
    y=$.c('x',400).A()

    x.$$(function(){x.fit('me')})

    x.fit('me')

    guidewires=false
    dragging=false
    mousedown={}
    loc={}

    restoreDrawingSurface=function(){}

    updateRubberband=function(m){
        x.ln(mousedown.x,
            mousedown.y,
            m.x,
            m.y)
    }


    drawGuidewires=function(){}

    x.MD(function(X,Y){
        dragging=true
        mousedown={x:X,y:Y}})


    x.MM(function(X,Y){

        if(dragging){
            restoreDrawingSurface()
            updateRubberband({x:X,y:Y})}

        if(guidewires){drawGuidewires(loc.x,loc.y)}

    })



    x.MU(function(X,Y){dragging=false
        restoreDrawingSurface()
        updateRubberband({x:X,y:Y})})
}
RUB=function(){ z()

    c = $.c('y', 1000, 800)

    c.$$( function(){ c.fit('me') } )

    c.fit('me')

    guidewires = false
    dragging = false
    mousedown = {}
    loc = {}
    rr = null
    data = null

    c.MD(function(x, y){
        data = can.gD()
        dragging = true
        mousedown = { x:x, y:y }
    })
    c.MM(function(X,Y){
        var m={x:X, y:Y},
            d = mousedown
        if(dragging){
            can.pD(data)
            can.ln(d.x, d.y, d.x, m.y)
            can.ln(d.x, d.y, m.x, d.y)
            can.ln(m.x, m.y, m.x, d.y)
            can.ln(m.x, m.y, d.x, m.y)
        }
    })
    c.MU(function(X,Y){

        dragging = false
        var d = mousedown, x1, x2, y1, y2
        if(X > d.x){ x1 = d.x; x2 = X } else {x1=X; x2=d.x}
        if(Y > d.y){ y1 = d.y; y2 = Y } else {y1=Y; y2=d.y}
        rr=[x1, y1, x2, y2]

        can.pD(data)

        can.crop2(rr)

        //    data=can.gD()

    })

}



CROP=function(){c=$.C()


    c.fit('me')


}




cjs.toColor =toColor = tCl=function(n1,n2,n3,n4){

    return n2? "rgba("+n1+","+n2+","+""+n3+","+(n4||1)+")"
        :
        $r('c', n1)
}

$.imageSizeFuncCan = function(image, size, func){//xc=

    var x = $.c(100, 100).C('X')

    if(image){ x.fit(image) }
    //if(size){  x.Z(size) }
    if(func){  x.click(func) }

    return x}






FULLCAN=function(){z()

    $('html').css({
        height:'100%'//, of:'h'
    })

    $('body').css({
        margin:0,
        //g:0,
        height:'100%'
    })

    var s ='Click or tap the screen to start the game',

        fo ='bold 16px Arial',

        x = $.c('pink',W(), H()).A()

    // x.fs( x.lg().a(0,'y').a(1,'z') ).fr().fs('y').fo(fo).ftc(s, 30)


    $.img('me',function(image){

        var origW= image.W()

        image.W( Math.round( (50 * cW()) / 100 ) )
        image.H( Math.round( (image.W() * image.H() )/ origW) )


        x.draw(
            image,
            x.W()/2- image.W()/2,
            x.H()/2- image.H()/2
        )



    })


}


HULL=function(){z()

    c = $.c('y',800,400).id('canvas').A()




    window.onload = init

    function init() {

        var canvas = c[0],        // main canvas element
            fps = 10,                                        // drawing frames per second
            convex = new Convex(),                            // convex hull
            dots = []                                     // dots, which are not in the convex hull


        // adjust canvas proportions
        // canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight;

        // assign canvas context
        ctx = canvas.getContext("2d");


        setInterval(function(){

            // get a blank canvas //// clear
            ctx.clearRect(0, 0, ctx,canvas.width, ctx.canvas.height)


            // draw convex dots
            convex.draw()

            // draw dots
            dots.map(function(dot) {   dot.draw()   })
        }, 1000 / fps)



        // clicked on canvas
        c.click( function(evt){
            var x = evt.clientX - canvas.getBoundingClientRect().left,
                y = evt.clientY - canvas.getBoundingClientRect().top

            // clear convex
            convex.dots=[]

            // add dot
            dots.push(new Dot(new V(x, y)))
        })




        $.bt('draw convex', function() {
            // move dots to canvas
            dots.map(function(dot){convex.addDot(dot)})

            // clear dots
            dots = []
        }).A()






    }

    var Dot=function(pos){this.pos=pos}

    Dot.prototype = {
        draw: function() {
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
    }


    Convex = function(){ this.dots = [] } // a convex hull

    Convex.prototype = {
        draw: function() {
            var _this = this,           refDots;

            // loop through dots
            this.dots.map(function(el) {
                var dotAfter;

                // draw dot
                el.draw();

                refDots = _this.copyDots(_this.dots); // copy dots

                // remove el from reference dots
                for (var i=0; i<refDots.length; i++) {
                    if (refDots[i] != el) continue;
                    refDots.splice(i, 1);
                }

                // get dot after this dot
                dotAfter = _this.getDotAfter(_this.dots, el);

                // draw direct line

                ctx.moveTo(el.pos.x, el.pos.y);
                ctx.lineTo(dotAfter.pos.x, dotAfter.pos.y);
                ctx.stroke();


            })
        },
        addDot: function(dot) {
            // the dot cannot be added, because it wouldn't be a convex anymore
            if (this.isDotInsideConvex(this.dots, dot)) return;

            // add dot intentionally
            this.dots.push(dot);

            // less than four dots are always a convex
            if (this.dots.length < 4) return;

            // remove dots, which are not in the convex (anymore)
            this.composeConvexHull();
        },
        composeConvexHull: function() {
            var refDots,        // all dots, except the one we are testing
                dot,            // the dot, supposed to be in the new convex
                newDots = [];    // dots, which are definitely part of the convex

            // loop dots
            for (var i=0; i<this.dots.length; i++) {

                // reset dots reference
                refDots = this.copyDots(this.dots);

                // assig dot to the current index
                dot = refDots[i];

                // remove dot from refDots
                for (var h=0; h<refDots.length; h++) {
                    if (h != i) continue;
                    refDots.splice(h, 1);
                    break;
                }

                // the dot is not inside of the convex, therefore add it
                if (!this.isDotInsideConvex(refDots, dot)) {
                    newDots.push(dot);
                }
            }

            // assign new convex
            this.dots = newDots;
        },

        //  copy dots object,, this is done due to call by reference

        copyDots: function(ref) {
            var dots = [];
            ref.map(function(dot) {
                dots.push(new Dot(new V(dot.pos.x, dot.pos.y)));
            });
            return dots;
        },
        isDotInsideConvex: function(convexDots, dot) {
            var dotBefore, dotAfter, sign;

            // at least three dots required for a convex
            if (convexDots.length < 3) return false;

            // the dot is definitely not inside the convex hull
            if (this.dotOutsideConvexRect(convexDots, dot)) return false;

            // assign dot before to the closest dot by the angle, which is negative
            dotBefore = this.getDotBefore(convexDots, dot);

            // assign dot after to the closest dot by the angle, which is positive
            dotAfter = this.getDotAfter(convexDots, dot);

            // dot on the inside of the line from dotBefore to dotAfter
            return dot.pos.getSide(dotBefore.pos, dotAfter.pos) == 1;
        },

        //  is the dot outside of the convex rectangle?

        dotOutsideConvexRect: function(convexDots, dot) {
            var outside = [ true, true, true, true ];
            for (var i=0; i<convexDots.length; i++) {
                if (convexDots[i].pos.x < dot.pos.x)
                    outside[0] = false;
                if (convexDots[i].pos.x > dot.pos.x)
                    outside[1] = false;
                if (convexDots[i].pos.y < dot.pos.y)
                    outside[2] = false;
                if (convexDots[i].pos.y > dot.pos.y)
                    outside[3] = false;
            }

            return outside[0] || outside[1] || outside[2] || outside[3];
        },

        //  get middle position as vector from the bounding dots

        getCenter: function(dots) {
            var rect = { xMin: dots[0].pos.x, xMax: dots[0].pos.x, yMin: dots[0].pos.y, yMax: dots[0].pos.y };
            dots.map(function(dot) {
                if (dot.pos.x < rect.xMin) rect.xMin = dot.pos.x;
                if (dot.pos.x > rect.xMax) rect.xMax = dot.pos.x;
                if (dot.pos.y < rect.yMin) rect.yMin = dot.pos.y;
                if (dot.pos.y > rect.yMax) rect.yMax = dot.pos.y;
            });

            return new V((rect.xMin + rect.xMax) / 2, (rect.yMin + rect.yMax) / 2);
        },

        //   get the closest dot before dot from dots

        getDotBefore: function(dots, dot) {
            var center, bgRad = -Math.PI * 2, dotBefore;

            center = this.getCenter(dots);
            dotRad = center.angleTo(dot.pos);

            dots.map(function(needleDot) {
                var needleRad = center.angleTo(needleDot.pos),
                    refRad = needleRad - dotRad;

                if (refRad > 0) refRad = -(Math.PI * 2 - refRad);

                if (refRad <= bgRad) return;

                bgRad = refRad;
                dotBefore = needleDot;
            });

            return dotBefore;
        },

        //  get the closest dot after dot from dots


        getDotAfter: function(dots, dot) {
            var center, smRad = Math.PI * 2, dotAfter

            center = this.getCenter(dots)
            dotRad = center.angleTo(dot.pos)

            dots.map(function(needleDot) {
                var needleRad = center.angleTo(needleDot.pos),
                    refRad = needleRad - dotRad;

                if (refRad > 0) refRad = -(Math.PI * 2 - refRad)

                if (refRad >= smRad) return

                smRad = refRad
                dotAfter = needleDot
            })

            return dotAfter
        }
    }

    var V = function(x, y) {
        this.x = x
        this.y = y
    }

    V.prototype = {
        subtract: function(v) {
            return new V(this.x - v.x, this.y - v.y);
        },

        // this = center, v = destination

        angleTo: function(v) {
            var ref = this.subtract(v)
            return Math.atan2(ref.y, ref.x) + Math.PI
        },



        // 0 = on line, 1 = inside, -1 = outside

        getSide: function(v1,v2){
            return Math.sign((v2.x - v1.x) * (this.y - v1.y) - (v2.y - v1.y) * (this.x - v1.x))
        }
    }


}












_can=function(){
    return qq( $("<canvas>") )
}


sCan=function( can ){

    can = can || $("<canvas>").C('b')

    //can= qq(can)

    can.cx = X(can)

    can.pC = xP(can.cx)
    can.mC = xM(can.cx)


    //can.l=function(n){if(!n){return osl(can.q)};return _i(n-can.l())}
    //can.t=function(y){if(!y){return ost(can.q)};return _i(y-can.t())}
    //can.rm=function(){qq(x.c).X()}
    //can.backgroundColor= can.bc=function(c){var g=G(arguments),c=g[0];if(g.n){c='X'};can.q.c(c);return can}//b

    can.sv  =can.snap= can.saveImage= function(){  sv(x)  }//b

    can.S   =can.saveState= function(){can.cx.save();return can}

    can.R   =can.restoreState= function(){
        can.cx.restore()
        return can}



    //DRAWING
    can.dI=function(i){

        var g=G(arguments);

        g[1]=g[1]||0;g[2]=g[2]||0;

        _a(can.mC,_c('d',g))
    }


    can.d=function(i){
        var g=G(arguments),i=g[0]
        im(i,function(i){
            g[0]=i;
            _a(can.dI,g)})}
    can.dC=function f(i,X,Y){

        if(U(X)){//draw img in center of can
            im(i,function(i){can.d(i, (can.w()/2)-(i.w()/2), (can.h()/2)-(i.h()/2))})}

        else {//draw it by specifying location of its center
            Y=Y||X
            im(i, function (i) {can.d(i, X - i.w() / 2, Y - i.h() / 2)})}

        return can}


    //fit
    can.f= can.fit=function f(a, X, Y){

        a||'me'

        X=X||0

        Y=Y||0

        can.d(a, X, Y, can.w(), can.h())

        return can

    }






    can.me=function me(n){//randomly draw my face
        var g=G(arguments),n=g[0]||200
        if(x.me.d){
            clearInterval(x.me.d);x.me.d=false}
        else{x.me.d=I(function(){
            x.d($w['mug']||'me',_r(x.w()-200),_r(x.w()-200))},n) }
        return x}

    can.me.d=false
    can.mug=function(m){
        qP('/mug',{u:m},
            function(m){x.fit(m)})
        return x}

    can.crop=function rc(x1,y1,x2,y2){
        if(A(x1)){
            return rc( x1[0],x1[1], x1[2]-x1[0], x1[3]-x1[1])}
        return x.d(x,x1,y1,x2,y2,
            0,0,x.w(),x.h())}


    //get data url
    can.du=can.u=function(){return tU(can.el)}

    can.img=new Image()
    can.img.src=can.u()

    // DIMS
    can.w=function(w){
        var g=G(arguments)

        if(U(w)){return _w(can.el)}

        if(g.N){var u=can.u()}
        _w(can.el,w)
        if(g.N){can.fit(u)}
        return can}


    can.h=function(h,z){
        if(!h){return _h(can.el)}
        if(!z){var u=can.u()}
        _h(can.el,h)
        if(!z){can.fit(u)}
        return can}


    can.wh=function(w,h){if(!w){
        return $V(can.w(),can.h())}
        var u=can.u()
        can.w(w)
        can.h(h||w)
        can.fit(u)
        return can}

    can.Z=function(w,h){w=w||5;return can.wh(w*100,(h||w)*100)}


    //COPY/PASTE
    can.C= can.copy=function(){
        can.img.src=can.u();
        return can}

    can.P=can.paste=function(){
        var g=G(arguments)
        if(g.N){can.clr()}
        if(g.p){can.f(can.img)}

        else {can.d(can.img)}}

    //fill rect
    can.fillRect=can.fr=function(a,b,c,d){
        a=a||0
        b=b||0
        c=c||can.w()
        d=d||can.h()
        can.mC('fr',a,b,c,d)
        return can}

    //clear screen [+ fill with color || run fx]
    can.clr=function(a){
        if(S(a)){can.fs(a);return can.fr()}
        can.cx.clearRect(0,0,can.w(),can.h())
        if(F(a)){a()}
        return can}

    can.cfr=function(a){
        var g=G(arguments)
        can('S')
        can({f:_a(tCl,g)},'fr',0,0,can.w(),can.h())
        can('R')
        return can}


    /// EVENTS ///
    can.$=function(f){
        var cX=function(e){return e.clientX},
            cY=function(e){return e.clientY}
        x.q.q.click(function(e){f(mX(e)-osl(x.q.q),mY(e)-ost(x.q.q))})}

    can.$$=function(f){x.q.q.dblclick(function(e){
        f(mX(e)-osl(x.q.q), mY(e)-ost(x.q.q))})}




    can.MV=function(f){

        x.q.q.mouseover(function(e){f( mX(e)-osl(x.q.q), mY(e)-ost(x.q.q))})}

    can.MO=function(f){

        x.q.q.mouseout(function(e){f( mX(e)-osl(x.q.q), mY(e)-ost(x.q.q))})}

    can.ME=function(f){
        x.q.q.mouseenter(function(e){f( mX(e)-osl(x.q.q), mY(e)-ost(x.q.q))})}

    can.ML=function(f){x.q.q.mouseleave(function(e){f( mX(e)-osl(x.q.q), mY(e)-ost(x.q.q))})}

    can.MU=function(func){
        x.q.q.mouseup(function(e){
            func(e.clientX-offsetLeft(x.q.q), e.clientY-offsetTop(x.q.q))
        })
    }
    can.MM=function(f){

        x.q.q.mousemove(function(e){

                f(
                    e.clientX-offsetLeft(x.q.q),
                    e.clientY-offsetTop(x.q.q)
                )

            }

        )}
    can.MD=function(func){

        can.q.mousedown(

            function(event){

                func( event.clientX - offsetLeft( can.q ),  event.clientY - offsetTop( can.q ) )

            }

        )}

    return can}





mX=function(e){ return e.clientX },

    mY=function(e){ return e.clientY }





can2=function(){

    // FONT/TEXT
    //set font
    can.fo=function(f){x.x.font=$f(f);return x}

    can.tx=function(t,X,Y){
        var g=G(arguments),
            t=g[0],
            X=g[1]||100,
            Y=g[2]||X

        if(g.n){x.x.strokeText(t,X,Y)}
        else if(g.p){x.tx(t,X,Y,'-');x.tx(t,X,Y)}
        else x.x.fillText(t,X,Y)

        return x}
    can.ftc=function(t,p2){return x.ft(t,x.w()/2-x.mt(t)/2,p2)}
    can.Text=function(a,b,c){var g=G(arguments),
        f=function f(a,b){if(S(a)&&U(b)){f.tt=a}}
        if(g.p){return{f:a,fo:b,tb:c}}
        f.x=ca(a,b,c)
        if(U(a)){return f.x.font}
        if(S(a)){f.x.font=a}
        f.f=function(a,b){f.x.p('fo',$f(a))}

        f.t=function(a,b,c){
            if(c){f(c)
                return f.t(a,b)}

            f.x.m('ft',f.tt,a,b)}
        return f}

    //set stroke style
    can.ss=function(c){var g=G(arguments)
        if(c=g.p?$r('c',c):Oo('c',c)){x({s:c})}
        return x}

    //set fill style [+ stroke style]
    can.fs=function(c,sc){var g=G(arguments)
        if(O(c)){x.x.fillStyle=c;
            return x}
        if(c=g.p?$r('c',c):Oo('c',c)){
            x({f:c})}
        if(D(sc)){x.ss(sc)}
        return x}
    can.sfl=function(c,f,s,l){x({f:f,s:s,w:l});return x}

    /// LINES ////
    can.moveTo=x.mt=function(t){return x.x.measureText(t).width}
    can.begin=x.bg=function(p1,p2){if(A(p1)){return x.bg(p1[0],p1[1])}
        x('b')
        x('m',p1,p2)
        return x}

    can.lt=function(p1,p2){var g=G(arguments)
        if(A(p1)){
            _e(g,
                function(p){
                    x.lt(p[0],p[1])})}

        else {x('l',p1,p2)}


        x('s')

        return x}
    //draw line ( [x,y],[x,y] || x,y,x,y )
    //draw multiple unconnected lines ([[],[]],[[],[]] || [],[])
    can.ln=function rc(p){var g=G(arguments),p=g[0]
        if(AA(p)||(A(p)&&_z(p)==4)){_e(g,function(p){_a(rc,p)})}
        else if(A(p)){x.bg(g.f);_a(x.lt,g.r)}
        else if(N(p)){x.bg(g[0],g[1]); x.lt(g[2],g[3])   }
        return x}
    //draw horizontal line
    can.lnh=function(X,Y,l){var g=G(arguments),X=g[0],Y=g[1],l=g[2],
        X2=g.p?X+l:g.n?X-l:l
        return x.ln(X,Y,X2,Y)}
    //draw vertical line
    can.lnv=function(X,Y,l){
        var g=G(arguments),X=g[0],Y=g[1],l=g[2],
            Y2=g.p?Y+l:g.n?Y-l:l
        return x.ln(X,Y,X,Y2)}

    //line stroke settings
    can.lW=x.lw=function(n){
        n=n||10;x({w:n});return x}

    can.ml=function(n){n=n||10;x({m:n});return x}
    can.lC=x.lc=function(n){n=n||'r';x({p:n});return x}
    can.lJ=x.lj=function(n){n=n||'r';x({j:n});return x}

    //x.to=function(a,b,c){if(N(b)){o.m('l',a,b)};if(N(c)){o.m('a2',arguments)}}


    /// CIRCLES/CURVES ///
    can.cir=function(X,Y,R,fs,ss){
        var g=G(arguments),
            X=g[0]||200,
            Y=g[1]||200,
            r=g[2]||1,
            fs=g[3],
            ss=g[4]
        x('b')('a',X,Y,r,0,7,false)
        x.fs(fs)
        x.ss(ss)
        x('s')('f')
        return x}

    can.curve=function f(a,b,c,d,e,f){
        var g=G(arguments)
        if(N(e)){x('z',a,b,c,d,e,f)}
        else{x('q',a,b,c,d)}
        if(g.N){x('s')}}
    can.pip=function(c,a,b){
        return x('ip',a,b)}
    can.a2=function a2(X){var g=G(arguments)
        if(A(X)){return _a(a2(x), X)}
        x('a2',g[0]||50,g[1]||40,g[2]||100,g[3]||100,g[4]||30)
        x('s')
        return x}





    can.clip=function(){x.x.clip();return x}
    can.closePath= can.cp=function(){x.x.closePath();return x}

    can.dots=function(){
        can.DOTS=[]
        can.dats=[]
        can.$(function(X,Y){
            x.cir(X,Y)
            x.DOTS.push([X,Y])
            x.dats.push(pI(X))
            x.dats.push(pI(Y))
            x.ln(x.DOTS)})

        can.$$(function(X,Y){var du

            x.S()
            x.closePath()
            x.q.off()
            x.q.c('X')

            du=x.du()

            x.X()
            x.clip()
            x.fit(du)
            x.bc('w')})

        return x}



// GRADIENTS


    acs=function acs(g,n,s){
        // pass only a gradient -> function with gradient curried
        // add a color stop to a gradient
        if(U(n)){return _p(acs,g)}
        g.addColorStop(n,oO('c',s))
        return g}

    sGr=function(g){
        g.a=function(n,c){acs(g,n,c);return g}
        return g}

    can.lg=function(a,b,c,d){

        a=a||0
        b=b||0
        c=c||x.w()
        d=d||x.h()
        return sGr(
            x.x.createLinearGradient(a,b,c,d))

    }

    can.rg=function rg(){
        var g=G(arguments)
        g[0]=g[0]||10
        g[1]=g[1]||10
        g[2]=g[2]||100
        g[3]=g[3]||(g[2]+100)
        g[4]=g[4]||g[0]
        g[5]=g[5]||g[1]
        g[6]=g[6]||g[3]
        return x('rg',
            g[0],g[1],g[2],
            g[3],g[4],g[5],g[6]).res}

    can.createPat=x.cPt=function(c,im,b){
        return xM(c)('p',im,oO('pt',b||'r'))}//=createPattern

    can.grad=function(g,s,w,h){ //depr?
        var fn=_z(g)==4?lG:rG;
        g=_a(fn,_c(x.x,g))
        if(O(s)){_e(s,function(v,k){var o=S(v)?{k:k, v:v}:{k:v, v:k}
            acs(g,o.k ,$r('c',o.v))})}
        x({f:g})
        x.fr()
        return g}

    can.grad2=function(a,b,c,d,e,f){var g=G(arguments), gr

        if(!N(a)){
            return x('p',a,pt[b]||null)} //pattern

        if(f){g=x('rg', g)} else if(d){gr=x('rg',G); return acs(gr,a,b)}

        if(!N(a)){return x.x.createPattern(a,oO('pt',b)||null)}

        if(f){g=x.x.createRadialGradient(a,b,c,d,e,f)} else if(d){g=x.x.createLinearGradient(a,b,c,d)}

        return g.addColorStop(a,b)}

    can.sampRadGrad=x.grr=function(g){
        g=g||x.rg()

        var s=acs(g)
        s(0,'r')
        s(0.05,'b')
        s(0.05,'b')
        s(0.1,'r')
        s(0.1,'r')
        s(0.15,'b')
        s(0.15,'b')
        s(0.2,'r')
        s(0.5,'y')
        s(1,'b')

        x({f:g})
        x.fr()}
    can.sampLinGrad=x.gr=function(g){
        g=g||x.lg()

        var s=acs(g)

        s(0,'r')
        s(0.05,'b')
        s(0.05,'b')
        s(0.1,'r')
        s(0.1,'r')
        s(0.15,'b')
        s(0.15,'b')
        s(0.2,'r')
        s(0.5,'y')
        s(1,'b')

        x({f:g})

        x.fr()

        return x}
    can.IntervalGrad=x.gra=function(){var a=0, b=1000
        I(.02, function(){
            a+=1; b-=2;
            x.gr([200,200,a,290,270,b],
                {y:.1,r:.3,V:1})})}


    // PROPS

    //alpha
    x.op=function(n){x({a:n||.5})
        return x}

    // global comp

    gCo=function(c){return _p(xP(c),'g')}
    x.gc=gCo(x.c)

    can.shadow=x.sd=function(){

    }





    //TRANSFORM
    //scale MULTIPLIER
    can.scale=x.sc=function(X,Y){var g=G(arguments),
        X=g[0]||1,Y=g[1]||X
        x.x.scale(X,Y)}
    can.translate=x.tr=function(X,Y){var g=G(arguments),
        X=g[0]||1,Y=g[1]||X
        x.x.translate(X,Y)}
    can.rotate=x.rt=function(r){var g=G(arguments),
        r=g[0]||1
        //r=pi(-6)*r
        //x.fr(0,0,1,1)
        //x({f:$r('c')
        x.x.rotate(r)}
    can.transform=x.tf=function rc(a,c,e,b,d,f){var g=G(arguments)
        if(g.p){return rc(2,0,0,2,0,0)}
        return x('t',a,c,e,b,d,f)}
    can.setTransform=x.stf=function rc(a,c,e,b,d,f){var g=G(arguments)
        if(g.p){return rc(2,0,0,2,0,0)}
        return x('st',a,c,e,b,d,f)}







    // PIXEL-DATA
    can.getData=x.gD=function(X,Y,w,h){
        var g=G(arguments),
            X=g[0]|| 0,
            Y=g[1]|| 0,
            w=g[2]||x.w(),
            h=g[3]||x.h(),
            d=x('G',X,Y,w,h).res
        d.h=d.height
        d.w=d.width
        d.d=d.data
        return d}
    can.putData=x.pD=function(d,X,Y){
        X=X||0
        Y=Y||0
        return x('P',d,X,Y)}
    //get [-> X()] -> put
    can.getPut=x.gp=function(a,X,Y){
        var g=G(arguments),
            a=g[0],X=g[1],Y=g[2],
            d=_a(x.gD,a,x)
        if(g.n){x.X()}
        return x.pD(d,X,Y)}
    can.pX=0
    can.pY=0
    can.sX=function(n){x.pX=n;return x}
    can.sY=function(n){x.pY=n;return x}

    can.bigX=function(r){x.ln([0,0],[x.w(),x.h()],[0,x.w()],[x.h(),0])}
    can.com=function(){_e(arguments,function(b){if(!A(b)){b=[b]}
        _a(x,b)})
        return p}
    //x.line=function(a,b,c,d){var p1=a, p2=b;return x.com('b',['m',p1[0],p1[1]],['l',p2[0],p2[1]],'s')}
    can.sun=function(a,b,s){
        s=s||1;x.gr([[a||0,b||a||0],
                s*100,s*500],{'y':0,1:tCl('p',0)},
            600,600)}
    can.ball=function(b){b=b||{}
        var dir = b.d||false,
            px  = b.x||100, py  = b.y||100, rad = b.r||100,

            per = b.p||Math.PI* 2,

            ss = $r('c', b.s) ,
            fs = $r('c', b.f),
            lw = D(b.l)? b.l: 4

        return x.com(
            'b',['a',px,py,rad,0,per,dir],
            {f:fs,s:ss,w:lw},'f','s')}


//give scale cos(rads), skew:sin(rads)  ??
    can.norm=function(){return x('sc', x.w()/10, x.h()/10)}





    return can}










cv=function(){}

cva=function(){}

$c=function(){}





