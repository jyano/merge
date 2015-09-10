

mouse=function(){


    $.md=$.mousedown=function(func){
        $('body').on('mousedown', func);
        return this}
    $.mu=$.mouseup=function(func){
        $('body').on('mouseup', func);
        return this}
    $.mm=$.mousemove=function(func){

        $('body').on('mousemove', func);
        return this}
    $.ts=$.touchstart=function(func){

        $('body').on('touchstart', func);
        return this}
    $.te=$.touchend=function(func){

        $('body').on('touchend', func);
        return this}
    $.oMD=function(fn){
        $.mousedown(function(e){
            fn(e.clientX,e.clientY,e)});
        return $}
    $.oMM=function(fn){
        $.mousemove(function(e){
            fn(e.clientX, e.clientY, e)});
        return $}
    $.oMU = function (fn) {
        $.mouseup(function (e) {
            fn(e.clientX, e.clientY, e)
        });
        return $}
    $.$$=function(a,b,c){$('body').$$(a,b,c); return this}
    $.$=function(){

        var b=$('html');

        b.click.apply(b, arguments);

        return $}




};mouse()


//time
$.sec=function(f){return setTimeout(f,1000)}
$.do=function(func){
    setTimeout(func,0);
    return 'nada'}

$.T = function(a,b){return setTimeout(_v(a),b)}
$.dateTime = $.date =  dateTime=dt=function(a){
    var d=new Date(a);
    d.y=d.getFullYear;
    d.d=d.getDate;
    d.D=d.getDay;
    d.M= d.getMinutes;
    d.m= d.getMonth;
    d.date=function(){return d.d()+'/'+ d.m()+'/'+ d.y()};
    d.time=function(){return d.h()+':'+ d.M()};
    d.dt=function(){return d.date()+' '+ d.time()};
    d.ms= d.getMilliseconds;
    d.h= d.getUTCHours;
    d.s= d.getSeconds;
    //d.tm= d.getTime
    //d.gto= d.getTimezoneOffset
    d.udt= d.getUTCDate;
    d.gud= d.getUTCDay;
    d.ufy= d.getUTCFullYear;
    d.gh= d.getHours;
    d.gms= d.getUTCMilliseconds;
    d.um= d.getUTCMinutes;
    d.um= d.getUTCMonth;
    d.us= d.getUTCSeconds;
    return d}
$.dateAndTime =dtt=function(a){
    var datetime = new Date(a);
    return datetime.date()+' '+ datetime.time()}
/////////


$.scroll =function(a){
    return $(window).scroll(a||function(){$('body').C('*')})
}


$.$=   m$ = function(f){ return $(document).on('click', _v(f) )}
$.$$=   m$$ = function(f){ return $(document).on('dblclick', _v(f) )}


$.fn.toR = $.fn.moveRight=function(num){
    num=num||20

    if(this.left()=='auto'){this.left(0)}

    this.left( parseInt(this.left()) + num)

    return this
}

$.fn.toL = $.fn.moveLeft=function(num){
    num=num||20
    if(this.left()=='auto'){this.left(0)}
    this.left( parseInt(this.left()) - num)
    return this}
$.fn.toU =$.fn.moveDown=function(num){num=num||20
    if(this.top()=='auto'){this.top(0)}
    this.top( this.top()  - num  )
    return this}
$.fn.toD =$.fn.moveDown=function(num){num=num||20
    if(this.top()=='auto'){this.top(0)}
    this.top( this.top()  + num  )
    return this}
$.key = $.keyDown = $.kD = kD = function self(key, funk){

    if(O(key)){
        _.each(key, function(func, arrKey){
            if( s$(arrKey).isUpper() ){   $.kU(arrKey.toLowerCase(), func)  }
            else { self(arrKey,func) }
        })

        return}

    keyObj={
        up:38,u:38,

        down:40, d:40,
        left:37, l:37,
        right:39, r:39,
        space:32,s:32,
        enter:13, e:13}

    if(keyObj[key]){key = keyObj[key]}

    $('body').on('keydown', function(e){
        if (e.which == key) { funk(e) }
    })}
$.keyUp = $.kU = kU = function(key, funk){
    keyObj={
        up:38,u:38,
        down:40, d:40,
        left:37, l:37,
        right:39, r:39,
        space:32,s:32,
        enter:13, e:13}
    if(keyObj[key]){key = keyObj[key]}
    $('body').on('keyup', function(e){

        if (e.which == key) { funk(e) }
    })
}
$.fn.keyControls = function(num){
    var args=G(arguments), that=this

    g=args

    this.P('a')

    if(args.P){
        $.kD('left', function(){that.toL(num)})
        $.kD('right', function(){that.toR(num)})}
    if(args.N){
        $.kD('up', function(){that.toU(num)})
        $.kD('down',   function(){that.toD(num)} )}
}// o.keyControls(num) should deprecate use of key(o)

$.fn.hideOnKeyDown = function(a){
    var that = this
    $('body').keydown(function(ev){e=ev
        $l(e.which)
        if(e.which == 40){ that.hide()  }
        if(e.which == 38){ that.show()  }
    })
}


testMove=function(){z()
    d = $.d('b',100,100, '+')

    f = function(num){d.toR(num)}
    setInterval(f,100)
}
testMoveAndWarp=function(){z()
    d = $.d('b',100,100,'+')
    f = function(num){d.toR(num)}
    setInterval(f,100)}
testInputKeys=function(){
    z()


    input =  $.ip().A()

    $.sp('span ').C('y').A().id('spn')

    input.on('keypress', function(e){

        $('#spn').text(

            $('#spn').text() + e.which
        )

    })

        .on('keyup',function(e){

            if(e.which==13){$l('enter')
                $('body').C('*') }})

        .on('keydown', function(e){

            var key = e.which, //why these nums?
                result = (key>48  &&  key<57)||  ( key>96 && key<105) ||  (key == 8)
            $l('result: '+result)
        })

}


testInputUpOrDown  = function(){

    $.input().A()

    onTextInputKeyup(function(e){

        var dir =  (parseInt(e.which) == 38)? 'up'
            : (parseInt(e.which) == 40)? 'down'
            : 'neither'

        $l(dir)
    })

    function onTextInputKeyup(func){return $('input[type=text]').on('keyup', func)}
}
//cool!
testUpperVsLowerLetters=function(){z()

    i = $.input().A()

    i.on('keydown keypress',
        function(e){
            $l(e.type+':'+ String.fromCharCode(e.which) +'('+ e.which +')')})
}
testHideOnKeyDown=function(){z()

    c = $.canvas('r', 500).A()

    c.hideOnKeyDown()


}

responsiveBottomPanel=function(){z()


    $.div('red').P('f').X(0).css({

        bottom: 0,
        width: '50%',  height: '50%',
        'min-width' :110,
        'max-width' :318,

        opacity: 4

    }).A().A(
        $.img('me')
    )



    // call and then play with browser size


}

slowFadeAway=function self(opacity){   z()

    //makes a yellow square and black dot??

    c = $.c('y',500,500)
    c.cir(10,10,10)

    opacity = U(opacity) ? 0.2 : parseFloat(opacity) - 0.001

    c.opacity(opacity).fillStyle('red').fillRect()

    if(opacity < 1){ setTimeout(function(){ self(opacity)}, 30) }

}




drawHalf=function(c,i){c.dI(i, -i.width/2, -i.h/2)}


//parallax!!!
CanvasLayer=function(bg){

    c = $.c('y',500,500).P('a').W('100%').H(256)
    if(bg){c.bg(bg)}
    return c
}

DivLayer=function(bg){
    d = $.d('y',500,500).P('a').W('100%').H(256)
    if(bg){d.bg(bg)}
    return d
}



transparent=function(i, num){
    if(!N(num)){ return 'transparent url('+i+'.png)'  }
    return 'transparent url('+ i +'.png)' + num +'% 0px'
}


PARALLAX=function(){z()

    CanvasLayer( transparent('me', 10))

    CanvasLayer( transparent('guy', 300))


}

//awesome!!!!!
PARALLAXBYMOUSE=function(){z()

    back=DivLayer(transparent('me') )
    front=DivLayer(transparent('guy'))

    speed=0
    xp=0

    $('body').mousemove(function(e){

        speed= e.pageX - ( W()/2 )

        speed /= ( W()/2 )

        $l(speed)
    })
    $('body').mouseout(function(e){speed=0})


    setInterval(function(){
        xp += speed
        back.bgP( xp+'px 0px')
        front.bgP( (xp*3)+'px 0px')
    },30)}


drag = drg=function(element){
    var q= $b( qq(element).q ).css({ position: 'absolute' }).on('mousedown', function(e){
        var offset = $(this).offset(),
            deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top
        $('html').on( 'mousemove' , function( e ){ q.css({ left:  e.pageX - deltaX , top: e.pageY - deltaY }) })
            .on( 'mouseup' , function(){  $(this).off() })

    })

    touchDrg(element)
    return qq(element)

}

cjs.Keys = function(o){

    if(O(o)){

        if(F(o.u)){
            cjs.tick(function(){if(cjs.Keys.u){ o.u(cjs.Keys.u) } })}

        if(F(o.d)){
            cjs.tick(function(){
                if(cjs.Keys.d){ o.d(cjs.Keys.d) } })}

        if(F(o.l)){
            cjs.tick(function(){
                if(cjs.Keys.l){
                    o.l(cjs.Keys.l)
                } })}

        if(F(o.r)){
            cjs.tick(function(){if(cjs.Keys.r){
                o.r(cjs.Keys.r)
            } })}

    }
}
cjs.watchKeys=function(){
    cjs.Keys.l = cjs.Keys.left = false
    cjs.Keys.r = cjs.Keys.right = false
    cjs.Keys.u = cjs.Keys.up = false
    cjs.Keys.d = cjs.Keys.down = false

    $.kD('l',function(){
        if($.test){$l('left pressed')}
        cjs.Keys.l = cjs.Keys.left = true
        cjs.Keys.dir = 'left'})



    $.kU('l',function(){if($.test){$l('left lifted')}
        cjs.Keys.l = cjs.Keys.left = false
    })
    $.kD('r',function(){if($.test){$l('right pressed')}
        cjs.Keys.r = cjs.Keys.right = true
        cjs.Keys.dir = 'right'})
    $.kU('r',function(){if($.test){$l('right lifted')}
        cjs.Keys.r = cjs.Keys.right = false
    })
    $.kD('u',function(){if($.test){$l('up pressed')}
        cjs.Keys.u = cjs.Keys.up = true
    })
    $.kU('u',function(){if($.test){$l('up lifted')}
        cjs.Keys.u = cjs.Keys.up = false
    })
    $.kD('d',function(){if($.test){$l('down pressed')}
        cjs.Keys.d = cjs.Keys.down = true
    })


    $.kU('d',function(){
        if($.test){$l('down lifted')}
        cjs.Keys.d = cjs.Keys.down = false
    })}
$.joystick  =function(){
    $('#left').on('mousedown mouseover touchenter', function(e){cjs.Keys.left = true ;e.preventDefault()})
    $('#left').on('mouseup mouseout touchleave', function(){cjs.Keys.left = false})
    $('#jump').on('mousedown mouseover touchenter', function(){  cjs.Keys.up = true   })
    $('#jump').on('mouseup mouseout touchleave', function(){  cjs.Keys.up = false  })
    $('#right').on('mousedown mouseover touchenter', function(){ cjs.Keys.right = true})
    $('#right').on('mouseup mouseout touchleave', function(){cjs.Keys.right = false })}
TESTWATCHKEYS=function(){z()
    $.test=true
    cjs.watchKeys()}
TESTKEYBOARD=function(){z()

    cjs.watchKeys()

    b2.mW({debug:true})

    w.footListener()


    //  p = w.addMe().controlMe('standard')

    b=w.ba()

    b.bindSprite('guy')

    b.controlMe('basic')

}
KEYWATCH = function(){

    J=cjs
    $.test=true

    J.Keys.l = J.Keys.left = false
    J.Keys.r = J.Keys.right = false
    J.Keys.u = J.Keys.up = false
    J.Keys.d = J.Keys.down = false



    $.kU('l',function(){
        if($.test){$l('left lifted')}
        J.Keys.l = J.Keys.left = false
    })

    $.kD('l',function(){
        if($.test){$l('left pressed')}
        J.Keys.l = J.Keys.left = true
        J.Keys.dir = 'left'})





    $.kD('l',function(){
        if($.test){$l('left pressed')}
        J.Keys.l = J.Keys.left = true
        J.Keys.dir = 'left'})



    $.kD('r',function(){if($.test){$l('right pressed')}
        J.Keys.r = J.Keys.right = true
        J.Keys.dir = 'right'})

    $.kU('r',function(){if($.test){$l('right lifted')}
        J.Keys.r = J.Keys.right = false
    })



    $.kD('u',function(){if($.test){$l('up pressed')}
        J.Keys.u = J.Keys.up = true
    })
    $.kU('u',function(){if($.test){$l('up lifted')}
        J.Keys.u = J.Keys.up = false
    })

    $.kD('d',function(){if($.test){$l('down pressed')}
        J.Keys.d = J.Keys.down = true})

    $.kU('d',function(){if($.test){$l('down lifted')}
        J.Keys.d = J.Keys.down = false
    })


}


aEL=function(a,b,c,d){return a.addEventListener(b,c,d)}

Y=function(a){return $$w.scroll(a||function(){co()})}


_D=function(o,f){
    var d=$(document)
    return U(o)?d:d.on(oE(o),_v(f))}


m$=function(f){return _D('$',f)}

m$$=function(f){return _D('$$',f)}




kD=function(a,b,c){

    var g=G(arguments),a=g[0],b=g[1]

    if ( U( b ) ){ return _D( 'kd' , function ( e ) {

        _v(a)(g.n?_W(e) : fCC(_W(e)))

    })}


    kD(function(e){

        if(e==(a=='l'?'37':a=='u'?'38':a=='r'?'39':a=='d'?'40'
                :a=='s'?'32':a=='e'?13:0)){
            _v(b)(c)}

    },'-')

}





kU=function(a,b){ var g=G(arguments),a=g[0],b=g[1]


    if(U(b)){
        return _D('ku',  function(e){
            _v(a)( g.n? _W(e) : fCC(_W(e)))})}


    kU(function(e){
        if(e==(
                a=='l'?'37':a=='u'?'38':a=='r'?'39':a=='d'?'40'
                    :a=='s'?'32':a=='e'?13:0

            )){_v(b)()} },'-')}


iR=function(e){return _W(e,39)}
iU=function(e){return _W(e,38)}
iD=function(e){return _W(e,40)}
iL=function(e){return _W(e,37)}
toR=function(q,n){
    n=N(n)?n:10
    if(Q(q)){
        q=qq(q);
        return q.l(q.l()+n)}
    return q.x(n,'+')}
toU=function(q,n){n=N(n)?n:10
    if(Q(q)){q=qq(q);return q.t(q.t()-n)}
    return q.y(n,'-')}
toD=function(q,n){n=N(n)?n:10
    if(Q(q)){q=qq(q);return q.t(q.t()+n)}
    return q.y(n,'+')}
toL=function(q,n){

    n=N(n)?n:10

    if(Q(q)){
        q=qq(q)
        return q.l(q.l()-n)}

    return q.x(n,'-')

}




key=function(q){var g=G(arguments),q=g[0]
    if(g.P){kD('l', toL,q); kD('r', toR,q)}
    if(g.N){kD('u', toU,q);kD('d',toD,q)}}



txtKey=function(){

    qi('txt').o('kp',function(q,e){
        qi('spn').T(qi('spn').T()+e.k)})
    qk('txt').o('ku',function(q,e){
        if(e(13)){$l('enter')}})
    qi('txt').o('kd',function(e){
        result=(e(48,'+')&&e(57,'-'))||(e(96,'+')&&e(105,'-')||e(8))})}

ipKU=function(f){
    return qq($('input[type=text]')[0]).o('ku',f)}

upOrDown=function(){
    ipKU(function(e){
        $l(e(38)?'up': e(40)?'down':0)})}

multEvents=function(){
    $('input').on('keydown keypress',
        function(e){
            $l(e.type+':'+e.k+'('+ e.w+')')})}


hideOnKeyDown=function(a){
    qq($d()).o('kd',function(e){
        if(e(27)){
            a.hide()
        }})}


moveElemUp=function(a){
    q=qq(a)
    q.t(q.t()-100)}





sE=function(e){

    var f=function(a){var g=G(arguments)
        return g.p?f.w>=a:g.n?f.w<=a:f.w==a}

    f.e=e
    f.w=e.which
    f.k=fCC(f.w)
    f.A=e.altKey
    f.b=e.bubbles
    f.C=e.ctrlKey
    f.c=e.cancelable
    f.d=e.data
    f.sp=function(){e.stopPropagation()}
    f.pd=e.preventDefault
    f.dp=e.isDefaultPrevented
    f.oe=e.originalEvent
    f.g=e.target
    f.gr=e.relatedTarget
    f.gc=e.currentTarget
    f.gd=e.delegateTarget
    f.M=e.metaKey
    f.p=e.eventPhase
    f.S=e.shiftKey
    f.t=e.type
    f.T=e.timeStamp
    f.px=e.pageX
    f.py=e.pageY
    f.ox=e.offsetX
    f.oy=e.offsetY
    f.cx=e.clientX
    f.cy=e.clientY
    f.sx=e.screenX
    f.sy=e.screenY
    return f}






ee=function ee(element, mouseEvent, func){



    //some partial application
    if(U(mouseEvent)){ return _.partial(ee, element)}

    // can imply '$' (click)
    if( F(mouseEvent) || (S(mouseEvent)&&!(Oo('e', mouseEvent)))){  return ee( element, '$', mouseEvent )}


    //can pass an object of events
    if(O(mouseEvent)){
        _.each(mouseEvent, function(v, k){

            ee(element, k, v)})

        return element}


    _.each(mouseEvent.split(' '), function(mouseEvent){

        element.q.on( oO('e',mouseEvent),

            function(eventObject){

                var qqTarget = qq(this)

                eventObject = sE(eventObject)

                eventObject.x = eventObject.px - qqTarget.x()

                eventObject.y = eventObject.py - qqTarget.y()

                func(qqTarget, eventObject)

            })
    })

    return element}





$h=function(a,b){
    var h=qq($('html'))
    if(D(a)){h.o(a,b)}
    return h}






MM=function(a){ return qq($('html')).o('mousemove', a)}

MU=function(a){



    return qq($('html')).o('mouseup', a)

}



$.MU = $.mouseUp=function(func){$('html').mouseup(func)}
$.MM = $.mouseMove=function(func){$('html').mousemove(func)}
$.MD = $.mouseDown=function(func){$('html').mousedown(func)}





MD=function(a){return qq($('html')).o('mousedown', a)}




drg=function(element){

    var q= $b( qq(element).q ).css({ position: 'absolute' }).on('mousedown', function(e){

        var offset = $(this).offset(),

            deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top

        $('html').on( 'mousemove' , function( e ){ q.css({ left:  e.pageX - deltaX , top: e.pageY - deltaY }) })
            .on( 'mouseup' , function(){  $(this).off() })

    })

    touchDrg(element)
    return qq(element)

}



touchDrg=function(element){

    var q= $b( qq(element).q ).css({ position: 'absolute' }).on('touchstart',

        function(e){ $l('touchstart')

            var offset = $(this).offset(),
                deltaX = e.originalEvent.touches[0].pageX- offset.left,
                deltaY = e.originalEvent.touches[0].pageY - offset.top


            $l(deltaX + ' : ' + deltaY)

            $('html').on( 'touchmove' , function( e ){ $l('touchmove')

                q.css({ left: e.originalEvent.touches[0].pageX - deltaX , top: e.originalEvent.touches[0].pageY - deltaY }) })
                .on( 'touchend' , function(){ $l('touchstop'); $(this).off() })

        })

    return qq(element)

}





TOUCHSTART=function(){

    z()

    d= $div().w(100).h(200).c('r').a()

    touchDrg(d)
}



EASELTOUCH=function(){z()

    stage = SuperStage(500).a()

    createjs.Touch.enable( stage.ob )

    stage.bm('me', SL)
    stage.bm('me', SL)
    stage.bm('me', SL)
    stage.bm('me', SL)
    stage.bm('me', SL)

    $div().w(10000).h(10).c('r').a()

}





botWinScroll=function(){



    $.div('r').css({

        positioning: 'fixed',

        bottom: 0,  left: 0,

        width: '50%',  height: '50%',  'min-width' :110,   'max-width' :318,

        opacity: 4

    }).el().A().A($.img('me'))



    // call and then play with browser size


}




parallax=function(){z()
    var l=function(i){return c('layer').s({w:'100%',h:256,p:'a'}).id(i)},
        t=function(a,b){return 'transparent url('+a+'.png)' +b+'% 0px'}
    l('back').s({bg:t('me',10)}).a()
    l('front').s({bg:t('guy',60)}).a()}


jslay=function(){z()

    var l=function(i){return $div().k('layer').s({w:'100%',h:256,p:'a'}).id(i)},
        t=function(a){return 'transparent url('+a+'.png)'},
        b=l('back').s({bg:t('me')}).a(),
        f=l('front').s({bg:t('guy')}).a()
    speed=0
    xp=0

    $(document).mousemove(function(e){
        speed=e.pageX-(W()/2)
        speed /= (W()/2)
        $l(speed)})

    $(document).mouseout(function(e){speed=0})


    I(function(){xp+=speed
        b.q.css({backgroundPosition: xp+'px 0px'})
        f.q.css({backgroundPosition: (xp*3)+'px 0px'})},30)}



fadeWhite=function f(a){

    //makes a yellow square and black dot??

    z()
    c=cx().a().cir(10,10,10)
    a=U(a)?0.2:parseFloat(a)+.02
    c.fs('w').op(a).fr()
    if(a<1){T(function(){f(a)},30)}
}

////

dh=function(c,i){c.dI(i, -i.width/2, -i.h/2)}

fuzzy=function(range,base){return (base||0)+(_r()-.5)*range*2}

v2=function(x,y){

    var v={x:x,y:y}
    v.muls=function(n){return v2(v.x*n, v.y*n)}
    v.imuls=function(n){v.x*=n;v.y*=n;return v}
    v.mul=function(vv){return v2(v.x*vv.x, v.y*vv.y)}
    v.imul=function(v){v.x*=vv.x;v.y*=vv.y;return v}
    v.divs=function(n){return v2(v.x/n, v.y/n)}
    v.div=function(n){ return v2( v.x/vv.x,v.y/vv.y)  }
    v.adds=function(n){return v2(v.x+n,v.y+n)}
    v.iadds=function(n){v.x+=n;v.y+=n;return v}
    v.add=function(vv){return v2(v.x+vv.x, v.y+vv.y)}
    v.iadd=function(v){v.x+=vv.x;v.y+=vv.y;return v}
    v.subs=function(n){return v2(v.x-n, v.y-n)}
    v.isub=function(n){v.x-=n;v.y-=n;return v}
    v.sub=function(vv){return v2(v.x-vv.x, v.y-vv.y)}
    v.isub=function(v){v.x-=vv.x;v.y-=vv.y;return v}
    v.set=function(x,y){v.x=x;v.y=y}

    return v}
particle=function(pos){
    var p={}

    p.p=pos
    p.v=v2(0,0)
    p.pars=alive

    p.u=function(td){
        p.p.iadd(p.v.muls(td))}
    return p}






key=function(q){var g=G(arguments)

    q.P('a')
    if(g.P){
        kD('left', function(){q.toL()})
        kD('right', function(){q.toR()})}
    if(g.N){
        kD('up', function(){q.toU()})
        kD('down',   function(){q.toD()} )}
}

$.isRight = iR=function(e){return W(e, 39)}
$.isUp= iU =function(e){return W(e, 38)}
$.isDown = iD=function(e){return W(e, 40)}
$.isLeft = iL=function(e){return W(e, 37)}


// aEL=function(a,b,c,d){return a.addEventListener(b,c,d)}

_DX=function(o,f){
    if(U(o)){return $(document)}
    return $(document).on(oE(o), _v(f))
}
sEX=function(e){

    var f=function(a){
        var g=G(arguments)
        return g.p? f.w >=a
            :g.n? f.w <=a
            :f.w == a
    }

    f.e= e

    f.w= e.which

    f.k= String.fromCharCode(f.w)

    f.A= e.altKey
    f.b= e.bubbles
    f.C= e.ctrlKey
    f.c= e.cancelable
    f.d= e.data

    f.sp= function(){ e.stopPropagation()}
    f.pd= e.preventDefault
    f.dp= e.isDefaultPrevented

    f.oe= e.originalEvent

    f.g= e.target
    f.gr= e.relatedTarget
    f.gc= e.currentTarget
    f.gd= e.delegateTarget

    f.M= e.metaKey
    f.p= e.eventPhase
    f.S= e.shiftKey
    f.t= e.type
    f.T= e.timeStamp

    f.px= e.pageX
    f.py= e.pageY
    f.ox= e.offsetX
    f.oy= e.offsetY
    f.cx= e.clientX
    f.cy= e.clientY
    f.sx= e.screenX
    f.sy= e.screenY

    return f}
eeX=function ee(element, mouseEvent, func){



    //some partial application
    if(U(mouseEvent)){ return _.partial(ee, element)}

    // can imply '$' (click)
    if( F(mouseEvent) || (S(mouseEvent)&&!(Oo('e', mouseEvent)))){  return ee( element, '$', mouseEvent )}


    //can pass an object of events
    if(O(mouseEvent)){
        _.each(mouseEvent, function(v, k){

            ee(element, k, v)})

        return element}


    _.each(mouseEvent.split(' '), function(mouseEvent){

        element.q.on( oO('e',mouseEvent),

            function(eventObject){

                var qqTarget = qq(this)

                eventObject = sE(eventObject)

                eventObject.x = eventObject.px - qqTarget.x()

                eventObject.y = eventObject.py - qqTarget.y()

                func(qqTarget, eventObject)

            })
    })

    return element}
$hX=function(a,b){
    var h=qq($('html'))
    if(D(a)){h.o(a,b)}
    return h
}




//MM=function(a){ return qq($('html')).o('mousemove', a)}
//MU=function(a){return qq($('html')).o('mouseup', a)}
//$.MU = $.mouseUp=function(func){$('html').mouseup(func)}
//$.MM = $.mouseMove=function(func){$('html').mousemove(func)}
//$.MD = $.mouseDown=function(func){$('html').mousedown(func)}
// MD=function(a){return qq($('html')).o('mousedown', a)}
Y = window['Y'] || {}; Yano = {}; STATE=function(){} //$w = window; $$w = $(window)
$.sec = function (f) {
    return setTimeout(f, 1000)
}
$.do = function (func) {
    setTimeout(func, 0);
    return 'nada'
}
$.T = function (a, b) {
    return setTimeout(_v(a), b)
}
$.dateTime = $.date = dateTime = dt = function (a) {
    var d = new Date(a);
    d.y = d.getFullYear;
    d.d = d.getDate;
    d.D = d.getDay;
    d.M = d.getMinutes;
    d.m = d.getMonth;
    d.date = function () {
        return d.d() + '/' + d.m() + '/' + d.y()
    };
    d.time = function () {
        return d.h() + ':' + d.M()
    };
    d.dt = function () {
        return d.date() + ' ' + d.time()
    };
    d.ms = d.getMilliseconds;
    d.h = d.getUTCHours;
    d.s = d.getSeconds;
    //d.tm= d.getTime
    //d.gto= d.getTimezoneOffset
    d.udt = d.getUTCDate;
    d.gud = d.getUTCDay;
    d.ufy = d.getUTCFullYear;
    d.gh = d.getHours;
    d.gms = d.getUTCMilliseconds;
    d.um = d.getUTCMinutes;
    d.um = d.getUTCMonth;
    d.us = d.getUTCSeconds;
    return d
}
$.dateAndTime = dtt = function (a) {
    var datetime = new Date(a);
    return datetime.date() + ' ' + datetime.time()
}
tests()
function tests() {
    testMove = function () {
        z()
        d = $.d('b', 100, 100, '+')

        f = function (num) {
            d.toR(num)
        }
        setInterval(f, 100)
    }
    testMoveAndWarp = function () {
        z()
        d = $.d('b', 100, 100, '+')
        f = function (num) {
            d.toR(num)
        }
        setInterval(f, 100)
    }
    testInputKeys = function () {
        z()
        input = $.ip().A()
        $.sp('span ').C('y').A().id('spn')
        input.on('keypress', function (e) {
            $('#spn').text(
                $('#spn').text() + e.which
            )
        }).on('keyup', function (e) {
            if (e.which == 13) {
                $l('enter')
                $('body').C('*')
            }
        })
            .on('keydown', function (e) {
                var key = e.which, //why these nums?
                    result = (key > 48 && key < 57) || ( key > 96 && key < 105) || (key == 8)
                $l('result: ' + result)
            })
    }
    testInputUpOrDown = function () {
        $.input().A()
        onTextInputKeyup(function (e) {

            var dir = (parseInt(e.which) == 38) ? 'up'
                : (parseInt(e.which) == 40) ? 'down'
                : 'neither'

            $l(dir)
        })
        function onTextInputKeyup(func) {
            return $('input[type=text]').on('keyup', func)
        }
    }
    testUpperVsLowerLetters = function () {
        z()

        i = $.input().A()

        i.on('keydown keypress',
            function (e) {
                $l(e.type + ':' + String.fromCharCode(e.which) + '(' + e.which + ')')
            })
    }//cool!
    responsiveBottomPanel = function () {
        z()
        $.div('red').P('f').X(0).css({
            bottom: 0,
            width: '50%', height: '50%',
            'min-width': 110,
            'max-width': 318,
            opacity: 4
        }).A().A(
            $.img('me'))
        // call and then play with browser size
    }
}
function beta(){
    scr=function(a){var s=screen
        if(a){return {w:s.width,       h:s.height,
            aw:s.availWidth,  ah:s.availHeight,
            at:s.availTop,    al:s.availLeft}}
        var o={w:W(),h:H()}
        o.c=o.w+', '+o.h,o.t='screen size: '+ o.c

        return o} // jQuery('form').serializeJSON()
    letteringPlug = function () {
        var methods = {
            init: function () {
                return this.each(function () {
                    injector($(this), '', 'char', '')
                })
            },
            words: function () {
                return this.each(function () {
                    injector($(this), ' ', 'word', ' ')
                })
            },
            lines: function () {
                return this.each(function () {
                    var r = "eefec303079ad17405c889e092e105b0" // Because it's hard to split a <br/> tag consistently across browsers,
                    // (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
                    // (of the word "split").  If you're trying to use this plugin on that
                    // md5 hash string, it will fail because you're being ridiculous.
                    injector($(this).children("br").replaceWith(r).end(), r, 'line', '')
                })
            }
        }
        $.fn.lettering = function (method) {
            if (method && methods[method]) {
                return methods[method].apply(this, [].slice.call(arguments, 1))
            }
            else if (method === 'letters' || !method) {
                return methods.init.apply(this, [].slice.call(arguments, 0))
            } // always pass an array
            $.error('Method ' + method + ' does not exist on jQuery.lettering');
            return this
        }
        function injector(t, splitter, klass, after) {
            var text = t.text(), a = text.split(splitter), inject = '';
            if (a.length) {
                $(a).each(function (i, item) {
                    inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;
                })
                t.attr('aria-label', text).empty().append(inject)
            }
        }
    };
    letteringPlug()
    $.tree = function () {
        $.x();
        var s = 200;
        d = $.dK('container')($.p().K('tree_controls')(
            $.a('expand all').K('expand_all'),
            $.a('collapse all').K('collapse_all')))
        quas = "<li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li>";
        ter = "<li><a href='#' class='tree_trigger'> &nbsp;</a> Ter <ul>" + quas + "</ul></li>";
        sec = "<li><a href='#' class='tree_trigger'> &nbsp;</a> Sec" + ter + "</ul></li>";
        pri = "<ul class='tree'><li><a href='#' class='tree_trigger'> &nbsp;</a> Pri <ul class='tree_expanded'>" + sec + "</ul></li></ul>";
        q = $(pri);
        //d(q)
        if (_.size($('ul.tree'))) {

            $('p.tree_controls a.expand_all, p.tree_controls a.collapse_all').click(function () {

                if ($(this).hasClass('expand_all')) {
                    $l('ex_all');
                    $(this).parent('p').next('ul').find('a.tree_trigger').K('trigger_expanded');
                    return false
                }

                else {
                    $l('!ex_all');

                    $(this).parent('p').next('ul').find('a.tree_trigger')

                        .removeClass('trigger_expanded').end()

                        .find('ul').removeClass('tree_expanded')
                }

                this.blur();
                return false

            });


            $(document).on('click', function () {
                if ($(this).hasClass('tree_trigger')) {
                    if ($(this).next('ul').is(':hidden')) {
                        $(this).K('trigger_expanded').next('ul').K('tree_expanded')
                    }
                    else {
                        $(this).removeClass('trigger_expanded').next('ul').removeClass('tree_expanded')
                    }
                    this.blur();
                    return false
                }
            });


            $('ul.tree li:last-child').K('last');

            $('ul.tree_expanded').prev('a').K('trigger_expanded')

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


}
function old() {

//to lowercase, ??
//lC=function(a){return S(a)? a.toLowerCase() :A(a)? _m(a,function(a){return lC(a)}):a }
//is lowercase
//Lc=function(a){if(_.isString(a)){return s$(a).isLower()}}
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

    //xP=function(a){return Utils.props('X', X(a))}
//xM=function(a){return Utils.methods('x', X(a))}

}
old=function(){



    QMET={a:"after",A:'add',ab:'addBack',
        at:"appendTo",ap:"append",ac:"addClass",
        ar:"removeAttr",b:"before",
        cr:"removeClass",C:'contents',cl:"clone",
        d:"detach",e:"empty",F:'first',
        hc:"hasClass",h:"height",H:'hide',
        ia:"insertAfter",ib:"insertBefore",
        ih:"innerHeight",iw:"innerWidth",
        l:"html",L:'last',n:'next',na:'nextAll',po:"position",
        o:"offset",op:"offsetParent",oh:"outerHeight",
        ow:"outerWidth",pp:"prepend",P:"parent",ps:"parents",
        pu:"parentsUntil",
        p:"prop", pt:"prependTo", pr:"removeProperty",
        q:"eq", r:"remove", ra:"replaceAll", rw:"replaceWith",
        s:"css", S:'show', sl:"scrollLeft",sb:"siblings",
        st:"scrollTop", tt:"attr",
        tc:"toggleClass", t:"text",u:"unwrap", v:"val",w:"width",wr:"wrap",
        wa:"wrapAll", wi:"wrapInner", z:"size"}


    codes={
        backspace:8 ,
        regDigsQwerty:{from96to105:[0,1,2,3,4,5,6,7,8,9]} ,
        digsNumPad:{from48to57:[0,1,2,3,4,5,6,7,8,9]}
    }

}


