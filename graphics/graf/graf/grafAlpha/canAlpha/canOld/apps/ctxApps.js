

CLIP = function () {
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
TL = function () {
    Q(function () {
        $.C()
        x.b(400, 100, 'r', 'o', 30).l(600, 400)
        x.b(10, 500).at(150, 20, 150, 170, 50).l(150, 120)
        x.b().a(400, 75, 50, 0, 340, '-')
        x.tl(-100, 0, R(30), 2)
            .b(400, 100, 'x', 'b', 30)
            .l(600, 400)
        x.d('me').d(x, 300, 300).d(x, 300, 300)
        //x.scICen('guy', .7)

        //Uncaught TypeError: Cannot read property 'd' of undefined
    })
}
CTX = function () {
    $.C()
    x.b('r', 'b', 50)
    x.mt(100, 100, 300, 300, '*')
    x.b('b', 'r', 50).a(100, 75, 50, '*')
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
$.dg = $.dragFrame = function (d) {
    var oD
    oD = $.d('y').pad(20).drag()
    d = d || $.d('r').mar(20)
    d.xPrp().a2(oD)
    d.oD = oD
    oD.XY(40, 40)
    return oD
}
//Uncaught TypeError: d.xPrp is not a function
DGC = function () {
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
PTH = function () {
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
        $.in(function () {
            xx.d(d, 35, 15)
            xx.d(d, 35, 15)
            xx.d(d, 35, 15)
            xx.d(d, 35, 15)
            $.in(function () {
                x.d(d, 0, 0)
                $.in(function () {
                    xx.c('X').clearRect(0, 0, 200, 200)
                    xx.d(c)
                })
            })
        })
    })
}