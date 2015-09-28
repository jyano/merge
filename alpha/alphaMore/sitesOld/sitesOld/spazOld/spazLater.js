$sw = cjs.sw = cjs.stopWatch = function () {
    alert('$sw')
    _$t = function () {
        return new Date().getTime()
    }
    var t = _$t()
    return function self() {
        var g = G(arguments),
            d = _$t() - t
        if (g.d) {
            t = _$t()
        }
        if (g.n) {
            var f = _.cap(
                (self('/') - 500) / 20,
                0,
                100
            )
            return f
        }
        return d
    }
}

//w.spBox???
SPRY=function(){W([1200,600,2400,1200],{g:20})//.chalk('spritebox example')
//for 400 x 400 flash squares !!!
    //w.s.bm('earth', function(me){me.XY(400,400)fn()})
    //function fn(){

    y = w.spBox( $$ship ).track()

    $.K($$ship.key)
    $.K({  //takes a spritebox!//uses cjs.watchKeys()
        l: function () {y.rot(8, '-')},
        r: function () {y.rot(8, '+')},
        u: function(){y.I(0,-10)}})
    y.aD(.5)
//}
}


toAlert()
function toAlert() {

    w.sun=function(x,y){
        alert('sun')
        var w=this
        //djd.init?? joint
        x=N(x,300)
        y=N(y,150)
        return w.S(300,150, 20,'p',10).d(1).r(.5).bS('sun',.2)
    }


    b.cam = function (x, y) {
        alert('b.cam')
        var b=this,s= b.stg()
        s.XY(b.diff(x, y))
        return b}

    b.follow = function (x, y) {
        alert('b.follow')
        var b = this
        cjs.t(function(){if (O(b.sprite)){b.cam(x, y)}})
        return b
    }
    b.dir = function(d){
        alert('b.dir')
        var b = this
        if (U(d)) {return b._dir}
        b._dir = d
        return b
    }
    b.polBu = b.polyBul = function () {
        alert('b.polBu polyBul')
        var b = this, w = b.W(), v, pt, bu
        v = b.vec(-20)
        pt = b.wP(0, -50)
        bu = w.polBu(pt.x, pt.y, 4, 4, 'w').d(1).lD(0).lV(v)
        return bu.K('polBu')

    }
    b2d.cn.sl= b2d.cn.slidey = function(p){
        alert('slidy')
        var k = $.K

        if (p.onG) {if (k.u) {

            if(k.r){p.I(20,-60)}
            else if (k.l) {p.I(-20, -60)}
            else {p.I(0, -100)}
        }

        else {
            if (k.l) {p.dir(0);p.I(-20, 0)}
            if (k.r) {p.dir(1);p.I(20, 0)}


        }

        }

        else {
            if (k.l) {p.dir(0);p.I(-10, 0)}
            if (k.r) {
                p.dir(1);
                p.I(10, 0)}
        }

        /*

         p.I(p.onG&&k.u ? V(0, -70)

         : k.r ? V(30, 0)
         : k.l ? V(-30, 0)
         : V(0, 0)  )*/

        return p
    }
    b2d.cn.h=b2d.cn.hop = function (p) {
        alert('hop')
        var k = $.K
        if (p.onGround) {
            if (k.l) {p.I(-30,-120)}
            if (k.r) {p.I(30,-120)}}
        else {if(k.d){p.I(0,20)}}
    }

    b2d.cn.power=function(p){
        alert('power')
        var K=$.K
        if(K.u){  p.I(0,-45)}
        if(K.l){  p.I(-20, 0)}
        if(K.r){  p.I(20, 0)}

    }

    b2d.cn.powX=function(p){
        alert('powX')
        var K=$.K
        if(K.u){  p.I(0,-4500)}
        if(K.l){  p.I(-2000, 0)}
        if(K.r){  p.I(2000, 0)}
        if(K.d){  p.I(0,4500)}
    }



    b.diffx = b.difx = function (x, y) {
        alert('b.diffx difx')
        var b=this// compare with DIF  - achtung!
        return {
            x: x - b.X(),
            y: y - b.Y()}
    }
    w.p1 = w.player1 = function (x, y, sc, cn) {
        alert('w.p1 player1')
        var w = this, g = G(arguments), p,
            o = g.S_ ?
            {cn: g.f} :
                N(g.t) ? {x: g.f, y: g.s, sc: g.t, cn: g[3]} :
                {x: g.f, y: g.s, cn: g.t}
        o.x = N(o.x, w.hW)
        o.y = N(o.y, w.hH)
        o.sc = N(o.sc, 4)
        p = w.me(o.x, o.y, o.sc)
        if (g.p) {
            p.track()
        }
        p.cn(o.cn)
        p.speed = 40
        p._dir = 'r'
        p.dir = function (d) {
            var p = this
            if (U(d)) {
                return p._dir
            }
            p._dir = d;
            return p
        }
        p.moveInDir = function () {
            var p = this, g = G(arguments)
            if (g.n) {
                return p.move(-p.speed)
            }
            //n = _.tN(g[0], p.speed)// ?
            if (p.dir()) {
                p.I(3, 0)
            } else {
                p.I(-3, 0)
            }
            return p
        }
        p.SetBullet(true)
        w.cl('feet',
            function (f) {
                if (!f.sen()) {
                    p.onG = 1
                }
            }
        )

        w.end(function (cx) {
            cx.w('feet', function (f) {
                if (!f.sen()) {
                    p.onG = 0
                }
            })
        })
        $.testJump = 1
        if ($.testJump) {
            T.t(function () {
                if (p.onG) {
                    $l('onG')
                }
                else {
                    $l('in air')
                }
            })
            w.show(function () {
                return p.onG
            })
        }
        T.t(function () {
            p.I(0, 500)
        })
        return p

    }

    b.jumping = function (y, x) {
        alert('b.jumping')
        var b = this, k = $.K
        if (k.u) {
            if (k.r) {
                b.lV(x, -(y - x))
            }
            else if (k.l) {
                b.lV(-x, -(y - x))
            }
            else {
                b.lV(0, -y)
            }
        }
        return b
    }
    b.arrowMove = function () {
        alert('b.arrowMove')
        var b = this
        $.key({
            l: function () {
                b.dir('l').move()
            },
            r: function () {
                b.dir('r').move()
            },
            u: function () {
                if (b.dir() == 'l') {
                    b.I(5, -12)
                }
                else if (b.dir() == 'r') {
                    b.I(-5, -12)
                }
            }
        })

        return b

    }
    b.relPos = function () {
        alert('b.relPos')
        var b = this;
        return b.X() + b.S().X()
    }
    b.pWarping = function () {
        alert('b.pWarping')
        var p = this, b = this
        cjs.t(function () {
            if (p.Y() < 0) {
                p.Y(300)
            }
            if (p.Y() > 300) {
                p.Y(0)
            }
            if (p.X() < 0) {
                p.X(600)
            }
            if (p.X() > 600) {
                p.X(0)
            }
        })

        return b

    }

//w.left and w.up move all objects in world
//i think only used in 1 game (talk?)

    w.up = function (n) {
        alert('w.up')
        var w = this;
        n = N(n, 4)
        w.e(function (b) {
            b.Y(n, '-')
        })
    }//=w.vert
    b.thr = function () {
        alert('b.thr')
        this.cn('thrust')
    }
    b2d.cn.jet = function (p) {
        alert('jet')
        var k = $.K, vec = p.GetWorldVector(V(0, -100))
        p.fixRot()
        if (k.left) {
            p.rot(8, '-').I(0, -5)
        }

        if (k.right) {
            p.rot(8, '+').I(0, -5)
        }
        p.I(
            k.up ? vec.div(1) : k.down ? vec.div(-100) : V(0, 0)
        )

    }

}

function workedBetterPrev() {
    YIPPY = function () {


        _.ev(1, function () {

            W({g: 4})

            y = w.y(300, 400, 3, '-').rt(90)
            y1 = w.y(600, 400, 3, '-').rt(90)

            _.ev(1.5, function () {
                y.I(0, -.7).rt(4, '+')
                y1.I(4, 0).lV(0, -3).rt(4, '+')
            })


        })
        //ok this is crazy cool.. but something is wrong.
        // something is not getting reset,
        // because force gets bigger each time
    }
    BLUE = function () {
        W({g: 0})

        y = w.y('b', 200, 300, 6).aD(1).lD(1).r(0).fr(1).K('guy')
        _.t(5, function () {
            w.y(R(600, 50), 300, 3, '-').K('bad').rt(45)
                .push('+')
                .shtEv('badBul')
        })
        w.cl('badBul', function (f) {
            this.B().kill()
            //if(f.of('bad')){
            f.B().kill()
            //}
        })
    }
}

