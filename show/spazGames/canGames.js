GCOMP=function(){Q(function(){$.C()

    x.d('me', 100, 100)

    x.d('me', 200, 100)
    x.d('me', 300, 100)

    x.d('me', 400, 100)
    x.d('me', 500, 100)

    x.d('me', 150,150) //  x.sO(); x.dO()

    x.xo()

    c.$(function(){var g=G(arguments), o
        o = {x: g.f, y: g.s}
        x.d('guy', o.x, o.y)
    })



})}
RUB=function(){ z()
    can = $.c('y', 1000, 800).A()
    can.$$( function(){ can.fit('me') } )
    can.fit('me')
    guidewires = false
    dragging = false
    mousedown = {}
    loc = {}
    rr = null
    data = null
    can.MD(function(x, y){
        data = can.gD()
        dragging = true
        mousedown = { x:x, y:y }

    })
    can.MM(function(X,Y){var m={x:X, y:Y}, d = mousedown
        if(dragging){
            can.pD(data)
            can.ln(d.x, d.y, d.x, m.y)
            can.ln(d.x, d.y, m.x, d.y)
            can.ln(m.x, m.y, m.x, d.y)
            can.ln(m.x, m.y, d.x, m.y)}})
    can.MU(function(X,Y){
        dragging = false
        var d = mousedown, x1, x2, y1, y2
        if(X > d.x){ x1 = d.x; x2 = X } else {x1=X; x2=d.x}
        if(Y > d.y){ y1 = d.y; y2 = Y } else {y1=Y; y2=d.y}
        rr=[x1, y1, x2, y2]
        can.pD(data)
        can.crop(rr)

        //    data=can.gD()
    })


}
CLIPSTARS = function () {
    Q(fn)

    //just draws green circ?


    function fn() {

        $.C()

        x = c.ctx()

        x.Star = function (r) {
            var ctx = this
            r = N(r, R(4, 2))
            ctx.b(r, 0, 'w') // first point drawn is the right most point
            _.t(9, x9)
            return ctx.f()

            function x9(i) {
                x.rt(36).lt(i % 2 == 0 ? (r / 0.5) * 0.2 : r, 0)
            }
        }

        x.tl(75, 75).a(60).cl()
        x.lg({cS: {g: 0, z: 1}, y1: -75, y2: 75}).fr(-75, -75, 250)

        _.t(10, x10)

    }


    function x10() {
        x._(function () {
            x.tl(R(150, -75), R(150, -75)).Star()
        })
    }
}
SHAD = function () {$.C()
    c.dr('me', 100, 100)
    c.shdC('b').shdBl(100).shdX(200).shdY(100)
    c.dr('me', 200, 200)
    c.shdC('r')
        .shdBl(100)
        .shdX(200)
        .shdY(100)
    c.shdC('g')
    c.dr('me', 0, 300)
    c.shd('p', 30, 200, 20)
    c.dr('guy', 400, 200)
}
GRADTX=function(){$.C(); x= c.ctx()


    x.lg(
        {cS:{r:0, r:.1, b:.15, r:.2, y:.5, b:1},
            x1: 50, x2:500, y2:100}).fr(0,0,300)

    x.lg({cS:{o:.2, r:.6, g:.8} , x1:50,x2: 500, y2:100}).fr(300,0,300)


    //black to white
    // x.lg({cS:{z:0, w:1}, x2: x.W(), y2:0 }).fr()

}
DRAGSTG = function () {
    Q(function () {
        c = $.c('g', 600, 300)
        f = $.dragFrame(c)
        x = c.ctx()
        x.d('me', 100, 100)
        c.$(function (x1, y1) {
            x.a(x1, y1, 2).s()
        })
    })
}
PATH = function () {
    Q(function () {
        s = c = $.c('g', 200, 200)
        d = $.c('x', 200, 200)
        f = $.dragFrame(c)
        f1 = $.dragFrame(d).X(300)
        x = c.ctx()
        xx = d.ctx()
        x.c('X', 'X').fr(0, 0, 1000, 1000)
        x.b(10, 30, 'r', 'X')
        x.lt([[30, 10], [160, 20], [50, 200]]).x()//.D()
        x.cl()
        x.d('me', 50, 50)
        d.ctx().d('me', 0, 0)
        _.in(function () {
            xx.d(d, 35, 15)
            xx.d(d, 35, 15)
            xx.d(d, 35, 15)
            xx.d(d, 35, 15)
            _.in(function () {
                x.d(d, 0, 0)
                _.in(function () {
                    xx.c('X').clearRect(0, 0, 200, 200)
                    xx.d(c)
                })
            })
        })
    })
}
PIX=function(){

    c = $.can('y',900,500).A()

    c.draw('me', 100,100)

    _.in(.2,function(){

        c.pD( c.gD(100,100,500,500), 120,120)

        c.f("r").fr(10,10,50,50)

        imgData = c.gD(10,10,50,50)

        c.pD(imgData,10,70)


    })


}
_ADBE = function (fn) {
    return function () {
        Q(function () {
            $.C()
            j = x.d('me', 100, 300)
            i = x.d('chicks', 600, 300)
            fn()
        })
    }
}
ADBE = _ADBE(function () {
    c.$(function (x1, y1) {
        x.a(x1, y1, 10).s()
    })
})
CROP = function () {
    //$.C()
    c = $.c('X', 1200, 600, 100, 100, '+')
    c.fit()
    c.draw('me')
    c.ln(tictactoe)
    _.in(2, function () {
        c.crop(100, 100, 900, 500)
    })
}
FULLCAN = function () {
    z()

    $('html').css({
        height: '100%'//, of:'h'
    })

    $('body').css({
        margin: 0,
        //g:0,
        height: '100%'
    })

    var s = 'Click or tap the screen to start the game',

        fo = 'bold 16px Arial',

        x = $.c('p', $('body').W(), $('body').H()).A()

    // x.fs( x.lg().a(0,'y').a(1,'z') ).fr().fs('y').fo(fo).ftc(s, 30)


    $.i('me', function (image) {

        var origW = image.W()

        image.W(Math.round((50 * $('body').W()) / 100))

        image.H(Math.round((image.W() * image.H() ) / origW))


        x.draw(
            image,
            x.W() / 2 - image.W() / 2,
            x.H() / 2 - image.H() / 2
        )


    })


}
FAN = function () {
    x = $.c('y', 1000, 800).A()
    y = $.c('x', 400).A()
    x.$$(function () {
        x.fit('me')
    })
    x.fit('me')
    guidewires = false
    dragging = false
    mousedown = {}
    loc = {}

    restoreDrawingSurface = function () {
    }

    updateRubberband = function (m) {
        x.ln(mousedown.x,
            mousedown.y,
            m.x,
            m.y)
    }

    drawGuidewires = function () {
    }


    x.MD(function (X, Y) {
        dragging = true
        mousedown = {x: X, y: Y}
    })
    x.MM(function (X, Y) {

        if (dragging) {
            restoreDrawingSurface()
            updateRubberband({x: X, y: Y})
        }

        if (guidewires) {
            drawGuidewires(loc.x, loc.y)
        }

    })
    x.MU(function (X, Y) {
        dragging = false
        restoreDrawingSurface()
        updateRubberband({x: X, y: Y})
    })

}
TEXTTX = function () {
    $.C()
    x.b('b', 'g', 30)
    x.T(100, 'Jason Yanofski', 10, 150)
    x.lg({x1: 0, y1: 0, x2: x.W(), y1: 0, cS: {m: 0, b: .5, r: 1}})
    x.T('Jason Yanofski', 10, 290, '-')
}
FLOATCV = function () {
    $.C()
    x.b('r', 'b', 50)
    x.mt(100, 100, 300, 300, '*')
    x.b('b', 'r', 50).a(100, 75, 50, '*')
}
LINRAD = function () {
    $.C()
    x = c.ctx()
    x.lg({x1: 50, y1: 500, y2: 100, cS: {o: .2, r: .6, g: .8}})
    x.fr(0, 0, 100, 100)
}
FIT = function () {
    $.C()
    c.fit('me')
}
CANSFIT = function () {
    z()
    m = $.c(800).fit('me')
    g = $.c('b', 600).fit('guy')
}
CVQLOADER = function () {
    $.C()

    Q(['me'], function (q) {
        me = Q.i('me')
        c.drawImage(me, 100, 100)

        c.pD(c.gD(100, 100, 500, 500), 120, 120)

        c.f("r").fr(10, 10, 50, 50)

        imgData = c.gD(10, 10, 50, 50)

        c.pD(imgData, 10, 70)
    })
}
PIXEL = function () {
    c = $.c();
    Q(['me'], function (q) {
        me = Q.i('me')
        c.drawImage(me, 100, 100)
        d = c.gD(100, 100, 500, 500)
        // c.pD(d , 120, 120 )
        zeros = nums = 0
        _.e(d.data, function (d) {
            if (d == 0) {
                zeros++
            } else {
                nums++
            }
        })
        $l('zeros: ' + zeros + ' - nums: ' + nums)
    })
}
function notWorking(){
    FLOATCVQ = function () {
        Q(function () {
            $.C()
            x.b(400, 100, 'r', 'o', 30).l(600, 400)
            x.b(10, 500).at(150, 20, 150, 170, 50).l(150, 120)
            x.b().a(400, 75, 50, 0, 340, '-')
            x.tl(-100, 0, R(30), 2)
                .b(400, 100, 'x', 'b', 30)
                .l(600, 400)

            x.d('me')

            x.d(x, 300, 300)

            x.d(x, 300, 300)
            //x.scICen('guy', .7)

            //Uncaught TypeError: Cannot read property 'd' of undefined
        })
    }
    RADGRAD = function () {
        z()
        d = $.c('y', 500)
        c = $.c('y', 500).A()
        c.context.f(
            c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
        )
        c.fr()
    }
    CANN=function(){
        $.format=function(){
            section1 =s1 = $.sp()
            section2 =s2 = $.sp()
            $.CT($.R($.xs(3).A(section1), $.xs(9).A(section2)))
        }
        var picHolder

        $.format()

        picHolder= $.sp().id('pics')

        s2.A(
            picHolder
        )


        $.getJSON('/img',   function(i){
            _.e(i, withImage)
        })


        function withImage(img){

            dataUrl = img.d
            can =   $.c(100, 100)
            can.click(function(){var mouse = $('#mouse')
                mouse.val('click')
                mouse.change()
                mug = img.d   })
            picHolder.A(can)
            can.fit(dataUrl)
        }

        s2.A(
            c=cv=  x = canvas = $.c('y',1000,800))
        //  _.ev(10, function(){x.bc()})

        s1.A($.lb('mouse'),

            /*
             $.scv('none','click','enter','leave','move').id('mouse').o(
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


             */
            $.label('global comp'),

            //scv.apply(this, V(oO('g')) ).$(function(v){ x.gc(v) }),
            //gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
            $.bt('SAVE(sv)',function(){ x.sv() }), $.br(2),

            $.bt('CUT(dots)', function(){x.q.q.unbind()
                qi('mouse').v('none')
                x.dots()
            }), $.br(2),

            $.bt('RESTORE(R)', function(){x.R()}), $.br(2),
            $.bt('bc:change background color',function(){x.bc()}),$.br(2),
            $.bt('cir:make circle',function(){x.cir(100,100,100)}),$.br(2),
            $.bt('d:draw',function(){

                c.dr(
                    $w['mug']||'me'

                )}), $.br(2),
            $.bt('dC:draw center',function(){
                cv.dC(window['mug']||'me')
            }), $.br(2),
            $.bt('me',function(){
                x.me()
            }), $.br(2),
            $.bt('sh1',function(){x.ln(sh1)}), $.br(2),

            $.bt('sh2',function(){x.ln(sh2)}),$.br(2),

            $.bt('tictactoe',
                function(){ x.ln(tictactoe) }), $.br(4),
            $.bt('sampLinGrad',
                function(){ x.sampLinGrad() }),$.br(2),
            $.bt('sampRadGrad',
                function(){  x.sampRadGrad()  }), $.br(2),
            $.bt('ctxx',
                function(){xxx('barney')}), $.br(2),
            $.bt('bads',
                function(){bad(x,200,8)  }), $.br(2),
            $.bt('coins',
                function(){coin(x,200,8)}),    $.br(2)
        )
    }
    parallax()
    function parallax() {


        DivLayer =function(bg) {
            var div = $.d('y', 500, 500).P('a').width('100%').H(256)
            if (bg) {
                div.background(bg)
            }
            return div
        }

        transparent=function(img, num) {
            if (!N(num)) {
                return 'transparent url(' + img + '.png)'
            }
            return 'transparent url(' + img + '.png)' + num + '% 0px'
        }

        CanvasLayer=function(bg) {
            var can = $.c('y', 500, 500).A()
                .P('a').width('100%').H(256)
            if (bg) {can.bg(bg)}
            return can
        }

        PARALLAX = function () {
            z()

            CanvasLayer(
                transparent('me', 10)
            ).A()

            CanvasLayer(
                transparent('guy', 300)
            ).A()


        }
        PARALLAXBYMOUSE = function () {
            //awesome!!!!!
            z()

            back = DivLayer(transparent('me')).A()
            front = DivLayer(transparent('guy')).A()

            speed = 0
            xp = 0

            $('body').mousemove(function (e) {

                speed = e.pageX - ( W() / 2 )

                speed /= ( W() / 2 )

                $l(speed)
            })
            $('body').mouseout(function (e) {
                speed = 0
            })
            setInterval(function () {
                xp += speed
                back.backgroundPosition(xp + 'px 0px')
                front.backgroundPosition((xp * 3) + 'px 0px')
            }, 30)
        }


    }
    TRANS=function(){z()
        x = $.c('y', 1000,800)
        y = $.c('u', 400)
        x.$$(function(){  x.fit('me')  })
        x.fit('me')
        identity=function(x){ x.stf(1,0,0,1,0,0) }
        rotate=function(x,a){ identity(x); x.rt(tRad(a))  }
        rotateByAngle=function(px,py,a){var x,y
            x=(px*cos(a))-(py*sin(a))
            y=(py*cos(a))+(px*sin(a))
        }
        rotateAroundZero=function(px,py,r){var x, y,a='angle'
            x=(px * cos(PI/4))-(py*(sin(PI/4)))
            y=(py * cos(PI/4))+(px*(sin(PI/4)))}
        transformEquations=['x=ax+cy+e','y=bx+dy+f']
        //if a=1,b=0,c=0,d=1 then args e,f rep pure translation
        //x=x+e,y=y+f
        //to scale, use a,d and set others to 0
    }
}