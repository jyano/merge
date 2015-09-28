testWarp = function () {
    z()
    s = stage = cjs.stage('black', 500, 500).tick().A()
    s.mug(function (bm) {
        m
        bm.sXY(.1).vXY(8, 4).startMoving()
        bm.warpY(0, 300, 100).warpX(0, 400, 100)
    })
}//easel
testWarp2 = function () {
    z()
    s = stage = cjs.stage('black', 500, 500).tick().A()
    s.mug(function (bm) {
        b = bm
        bm.sXY(.1).vXY(8, 4).startMoving()
        bm.warp()
    })
}
testKillHitting = function () {
    s = cjs.stg()
    s.bm('me', 0.3, function (b) {
        b.drag().XY(100)
    })
    s.bm('sun', 0.3, function (b) {
        b.drag().XY(100)
    })
    s.bm('chicks', 0.3, function (b) {
        b.drag().XY(100)
    })
    s.bm('guy', 0.8, function (b) {
        guy = b
        guy.drag().makeMeAKiller()
    })
}
startStopButtons = function () {
    z();
    var func
    b1 = $.button('start!', function () {
        func = stage.on('tick', function (ev) {
            e = ev
            mug.X(10, '+')
        })
    })
    b2 = $.button('stop!', function () {
        stage.off('tick', func)
    })
    $.div().A(b1, b2).A()
    cjs.stage(600).tick().A().mug(0.2, function (bm) {
        mug = bm
        bm.XY(300).warp()
        SL(bm)
        // gun(  bm)
    })
}
//it adds me and gives u two buttons.  just pass in a func
startStopButtonsAbstract = function (f) {
    z()
    $.div().A(
        b1 = $.button('start!', f),
        b2 = $.button('stop!',
            function () {
                bm.off(f)
            })
    ).A()
    s = cjs.stage(500).tick().A()
    s.bm('me', function () {
    })
}
testShootBullet = function () {
    s = cjs.stg()
    s.mug(.2, function (b) {
        mug = b
        mug.startMoving(5, 5).warp()
        $.kD('space', function () {
            mug.shootBullet()
        })
    })
}
shootBulletTimeBased = function (shooter) {
    var stage = shooter.getStage(),
        w = stage.W(),
        h = stage.H(),
        bullet = cjs.circle(8, 'white').XY(shooter.x + 75, shooter.y)
    stage.A(bullet)
    p.timeStamp = function (func) {
        return this.tick(
            function (e) {
                if (!N(j.ts)) {
                    j.ts = 0
                    j.lts = e.ts
                }
                else {
                    j.ts = e.ts - j.lts
                    j.lts = e.ts
                    func(j.ts)
                }
            })
    }
    bullet.fn = stage.timeStamp(bullet,
        function (t) {
            b.Y(t / 5, '-')
        })
    onTick(function () {
        if (bullet.y < 200 || bullet.y > h) {
            $l('miss')
            bullet.remove()
            bullet.fn()  // ahhh to stop the timestamping !!!!
        }
    })
    return bullet
}
ugun = function (j) {
    $.kD('space', function () {
        shootBulletTimeBased(j)
    })
}
sbul = function (shooter) {
    var stage = shooter.getStage(),
        w = stage.W(),
        h = stage.H(),
        x = shooter.x,
        y = shooter.y,
        vx = shooter.vx,
        vy = shooter.vy,
        bullet = cjs.circle(8, 'red')
    stage.A(bullet)
    //start the bullet moving
    bullet.fn = stage.timeStamp(function () {
        //in thise cae i dont think i'm using the timestamp
        bullet.move()
    })
    //set bullet's velocity to same as the shooter
    bullet.vY(shooter.vy).vX(shooter.vx)
    //the function is just returned
    /// so .on('tick', func) is called.  fn is just storing what .on returns  //not sure for what.. maybe to stop/cancel it (pause)
    //this is moving something up the screen (reverse gravity)
    bullet.fn = stage.timeStamp(function (timeStamp) {
        bullet.Y(timeStamp / 5, '-')
    })
    return bullet
}
sgun = function (j) {
    kD('s', function () {
        sbul(j)
    })
}
CanvasBullet = function (x, y, dx, dy) { //oh its written for straight up canvas
    this.dx *= -5;
    this.dy *= -5;
    this.radius = 8;
    this.draw = function () {
        canvas.circle(this.x, this.y, this.radius, 'pink', 'white')
    }
    this.update = function () {
        this.move()
    }
    Bullets.push(this)
}
CanvasGuy = function (x) {
    var g = {
        x: 200, y: 200, r: 20,
        dx: 1, dy: 1, c: 0, h: 1000,
        draw: function () {
            var t = this;
            x.cir(t.x, t.y, t.r, 'b', 'y')
        },
        update: function () {
            var t = this
            t.x = wrp(0, 1200, 20)(t.x + t.dx)
            t.y = wrp(0, 600, 20)(t.y + t.dy)
        }
    }
    g.draw()
    return g
}
//shooters
cjs.Guy = Guy = function (x, y, vx, vy, radius) {
    radius = radius || 10
    x = x || 300
    y = y || 300
    vx = vx || 1;
    vy = vy || 1
    var guy = cjs.circle(radius, 'green', 'red')
    guy.XY(x, y).vXY(vx, vy)
    //cache
    //  guy.cc(-radius-10, -radius-10, radius*2+20, radius*2+20)
    guy.start = function () {
        guy.funcRef = setInterval(function () {

            //if guy off screen, kill him
            if (guy.x < 0 || guy.y < 0 || guy.x > 800 || guy.y > 600) {
                $l('guy is going..')
                guy.remove()
                guy.stop()
                $l('guy is gone..')
            }
            else {
                guy.move()
            }
        }, 200)
        return guy
    }
    guy.stop = function () {
        clearInterval(guy.funcRef)
    }
    return guy
}
GreenGuy = function (x, y, vx, vy) {
    var b = cjs.circle(40, 'green').XY(x, y)
    if (N(vx)) {
        b.vX(vx)
    }
    if (N(vy)) {
        b.vY(vy)
    }
    return b.startMoving()
}
testGuy = function () {
    z() // cant set a var to 'guy' ???
    s = cjs.stage(600, 300).tick().A()
    g = Guy(100, 100, 4, 3)
    s.A(g)
    g.start()
    s.A(
        gg = GreenGuy(200, 200, 1, 5)
    )
    g.warp()
    gg.warp()
    // why isnt bounce working?
}
addMeWithVelocityAndIBounce = function (x, y, vx, vy, stage) {
    z()
    x = x || 100
    y = y || 100
    vx = vx || 20
    vy = vy || 20
    stage = stage || cjs.stage(400, 400).tick().A()
    $(stage.canvas).drag()
    stage.bm('me', function (b) {
        me = b
        if (N(vx)) {
            b.vX(vx)
        }
        ;
        if (N(vy)) {
            b.vY(vy)
        }
        b.XY(x, y).bounce().startMoving()
    })
}
newAsteroid = function () { // new Asteroid?
    var a = cjs.Asteroid();
    a.A();
    a.start()
}
cjs.Asteroid = Asteroid = function (x, y, r, vx, vy, stage) {
    var _r = _.random
    stage = stage || cjs.stage(1000, 1000).tick().A()
    x = x || _r(stage.W() + 20)  //stage.W checks bounds and error!!?
    y = y || _r(stage.H() + 20)
    radius = r || _r(10) + 5
    vx = vx || _r(100) / 25 - 2
    vy = vy || _r(100) / 25 - 2
    var ast = {
        circle: cjs.circle(radius, 'white').XY(x, y).vXY(vx, vy),
        radius: radius,
        x: x,
        y: y
    }
    ast.remove = function () {
        return ast.circle.remove()
    }
    ast.globalToLocal = function () {
        return ast.circle.globalToLocal()
    }
    ast.add = function () {
        stage.A(ast.circle)
    }
    ast.push = function () {
        aA.push(a)
    }
    ast.update = function () {
        ast.circle.move()
        ///replace all below with ast.circle.acc()
        if (ast.circle.ax) {
            ast.circle.vX(a.circle.ax, '+')
        }
        if (ast.circle.aY) {
            a.c.vY(a.c.ay, '+')
        } // (accelerateY accY)
        if (ast.circle.x > stage.W() || ast.circle.x < 0) {
            ast.circle.vX('-')
            ast.circle.aX *= -1 // aX('-')
        } //so it starts accelerating the other way AND simulteanously bounces (both horizontally)
        //here it does the same with y.  ok i should demo it!
        if (a.circle.y > stage.H() || a.circle.y < 0) {
            a.c.vY('-')
            a.c.ay *= -1
        }
    }  //ah, its a friction.. it probably goes opposite the velocity.  hmmmm that's friction!
    //so this is reverseDirection, which will check if it also needs to reverse any friction-acceleration direction
    // ast.circle.cache(-20,-20,40,40)
    return ast
}
//uses guy
//wraps a container around guy
newAst = function () {
    var a = Asteroid();
    stage.A(a.circle);
    a.start()
}
ASTEROIDS2 = CIRCLE2 = function () {
    stage = s = createjs.stage(800, 600).tick().A();
    Asteroids = []
    container = new createjs.Container()
    stage.A(container)
    g = Guy(300, 300, 1, 1, 40, 'yellow')
    stage.A(guy)
    guy.start() //startMoving?
    guy.warp()
    stage.on('stagemousedown', function (e) {
        g.vX((e.rawX - g.x) / 10, '+')
        g.vY((e.rawY - g.y) / 10, '+')
        if (g.vx > 10) {
            g.vX(10)
        }
        if (g.vy > 10) {
            g.vY(10)
        }
    })
    $.kD('space', function () {
        var badGuy = Guy(
            g.x, g.y, g.vx, g.vy
        )
        container.A(badGuy);
        badGuy.start() //.startMoving?
    })
    _.times(10, newAst)
    stage.tick(function () {
        _.each(Asteroids, function (ast, k) {
            ast.update()
            _.each(container.children,
                function (child) {
                    localChild = child.globalToLocal(ast.x, ast.y);
                    if (child.hitTest(localChild.x, localChild.y)) {
                        ast.remove();
                        $l('HIT')
                    }
                })
            localChild = guy.globalToLocal(ast.x, ast.y)
            if (guy.hitTest(localChild.x, localChild.y)) {
                $l('hit');
                co()
            }
        })
    })
}
// tt( 'f', 30 )
ASTEROIDS = CIRCLE = function () {
    z()
    stage = s = cjs.stage(800, 600).tick().A()
    stage.A(container = new createjs.Container())
    stage.A(
        g = Guy(300, 300, 1, 1, 40, 'yellow')
    )
    g.start()
    g.warp()
    Asteroids = aA = [];
    _.times(10, newAst)
    stage.on('stagemousedown',
        function (e) {
            var badGuy = Guy(
                g.x(), g.y(), g.dx(), g.dy())
            container.A(badGuy)
            badGuy.start()
            g.vX((e.rawX - g.x) / 10, '+')
            g.vY((e.rawY - g.y) / 10, '+')
            if (g.vx > 10) {
                g.vX(10)
            }
            if (g.vy > 10) {
                g.vY(10)
            }
        })
    stage.tick(function () {
        var gx = g.x, gy = g.y
        _.each(Asteroids,
            function (a, k) {
                var ax = a.x, ay = a.y
                a.update()
                _.each(
                    container.children(),
                    function (b) {
                        var bx = b.x,
                            by = b.y
                        if (ax > bx - 10 && ax < bx + 10 && ay > by - 10 && ay() < by + 10) {
                            $.body().C('*')
                            a.remove();//aA[k]=null;_.compact(aA)
                        }
                    })
                if (ax > gx - 40 && ax < gx + 40 && ay > gy - 40 && ay < gy + 40) {
                    g.al(.01, '-')
                }
            })
    })
}
MEBOUNCEGAME = function () {
    z()
    stage = createjs.stage(500).tick().A()
    g = Guy(100, 100)
    stage.A(g)
    g.keyControls()
    g.warp()  /// gotta steal back 'ctr'.. get it :)
    addMeWithVelocityAndIBounce(100, 100, 2, 4, stage)
    stage.on('stagemousedown', function () {
        me.shootBullet()
        g.shootBullet()
    })
}
////
/////
/////
//withBall = wB=function(f){qG('/ball',f)}
withGodzilla = function (func) { //gz anything?
    $.post('/godzilla', func)
}
// wMb(function(b){SL(b.wh(60).xy(100,400),'-')},s)//  wMb(function(b){SL(b.wh(60).xy(400,100),'+')},s)
sunInACanvas = function () {
    return $.canvas('X', 500).fit('sun')
}
multiGroupBall = bl = function (data, y) {

    //bring back dva !!!
    ball = $w['ball'] || dva()
    var moveBallTo = function (b) {
        ball.XY(b.x, b.y)
    }
    if (U(d)) {
        $.get('/ball', moveBallTo)
    }
    else {
        if (N(data)) {
            data = {x: data, y: N(y) ? y : data}
        }
        $.post('/ball', data, function () {
            $.get('/ball', moveBallTo)
        })
    }
}
//gives a randomly doctored number (u pass in number and +/-/)..
//not sure why it called cage
SHOOTERCAN = function () {
    function startGame() {
        z()
        game = true
        Coins = []
        Aliens = []
        Bullets = []
        can = $.canvas('yellow', 900, 500).A()
        shooter = new Shooter()
        shooter.draw()
        //   _.times(10,function(){Coins.push(Coin())})
        //   _.times(15,function(){Aliens.push(Alien())})
        setInterval(function () {
            shooter.update()
            can.clear()
            shooter.draw()
        }, 400)
    }

    function Shooter() {
        this.x = 100
        this.y = 200
        this.vx = 2
        this.vy = 2
        this.radius = 20
        this.update = function () {
            this.x = this.x + this.vx
            this.y = this.y + this.vy
        }
        this.draw = function () {
            can.circle(this.x, this.y, this.radius, 'blue')
        }
    }

    updateScreen = function () {
        can.clear()
        shooter.draw()
    }
    updateGame = function () {
        shooterUpdate()
    }
    updateGameX = function () {
        if (game) {
            shooter.vx += cap(-5, 5)((e.x - shooter.x) / 300)
            shooter.vy += cap(-5, 5)((e.y - shooter.y) / 300)
            Bullet(shooter.x, shooter.y, shooter.vx, shooter.vy)
        } else {
            alert('game over!')
            if ((e.x > 450) && (e.y > 290)
                && (e.x < 450 + textWidth)
                && (e.y < 290 + textHeight)) {
                reload()
            }
        }
        can = $.canvas(800, 600)
        can.click(function (x, y) {
            shooter.vx += cap(-5, 5)((x - shooter.x) / 300)
            shooter.vy += cap(-5, 5)((y - shooter.y) / 300)
            Bullet(shooter.x, shooter.y, shooter.vx, shooter.vy)
        })
        b = bad(x).d()
        c = coin(x).d()
        g = guy(x)
        I(function () {
            x.X();
            b.update().draw();
            g.update().draw()
        }, 30)
        // _.each(cat(Bullets, Coins, Aliens), function(a){a.draw(); a.update()})
    }
    startGame()
}
$d = console.dir;
//Cs=[];for(var i=0;i<10;i++){Cs.push(Coin(c))};
//As=[];for(var i=0;i<5;i++){As.push(Alien(c))};
Bs = [];
function shoot() {
    game = true
    g = guy = new createjs.Shape()
    g.g.f('blue').s('yellow').dc(0, 0, 20)
    g.x = 0
    g.y = 0
    g.dx = 0
    g.dy = 0
    g.h = 1000
    stage.A(g)
    stage.tick()
    stage.$(function (x, y) {
        if (!game) {
            dead()
        }
        else {
            g.dX += (x - g.x) / 100
            g.dY += (y - g.y) / 100
            Bullet(g)
        }
    })
    //$l('x:',x);$l('y:',y);$l('gx:',g.x);$l('gy:',g.y);//
    onTick(function () {
        _.each(Bs, function (b) {
            b.scaleX *= 1.02;
            b.scaleY *= 1.02
        })
        g.x = warp(0, c.W(), 0)(g.x += g.dX)
        g.y = warp(0, c.H(), 0)(g.y += g.dY)
    })
    $(shoot)
    _.each(cat(Bs, Cs, As), function (a) {
        a.draw()
        a.update()
    })
    g.draw()
    g.update()
}
function dead() {
    alert('game over!')
    if ((e.x > 450) && (e.y > 290) && (e.x < 450 + textWidth) && (e.y < 290 + textHeight)) {
        location.reload(true)
    }
}
Bullet = function () {
    c.bm('me',
        function (b) {
            //b.g.s('yellow').f('black').dc(0,0,8);
            b.x = g.x
            b.y = g.y
            b.dX = g.dX * -1
            b.dY = g.dY * -1
            b.update = function () {
                b.x -= b.dX
                b.y -= b.dY
            }
            Bs.push(b)
            b.scaleX *= .1
            b.scaleY *= .1
            c.A(b)
        },
        1)
}
Coin = function (C) {
    var c = Circ(10);
    c.draw = function () {
        C.circle(c.x, c.y, c.r, 'black', 'yellow')
    };
    c.update = function () {
        c.x = warp(0, 1200, 20)(c.x + c.dX);
        c.y = warp(0, 600, 20)(c.y + c.dY)
    };
    return c
}
Alien = function (c) {
    var alien = Circ(10)
    alien.draw = function () {
        canvas.circle(alien.x, alien.y, alien.r, 'green', 'black')
        canvas.circle(alien.x, alien.y, 10, 'orange', 'black')
    }
    alien.update = function () {
        alien.r *= 1.001
        alien.x = warp(0, 1200, 20)(alien.x + alien.dx)
        alien.y = warp(0, 600, 20)(alien.y + alien.dy)
    }
    return alien
}
hits = function () {
    _.each(Cs, function (c, C) {
        if (xyc(c.x, c.y, g)) {
            delete Cs[C]
            g.c += 1
        }
    })
    _.each(As, function (a, A) {
        if (xyc(g.x, g.y, a)) {
            g.h -= 1
        }
        _.each(Bs, function (b, B) {
            if (xyc(b.x, b.y, a)) {
                delete Bs[B]
                delete As[A]
                As.push(new Alien)
            }
        })
    })
}
Circ = function (r, a, b) {
    return {
        x: _.random(0, a || 1200),
        y: _.random(0, b || 600),
        dx: _.random(0, 10) - 5,
        dy: _.random(0, 10) - 5,
        r: r
    }
}
(function () {
    var n = this, t = n._, r = {}, e = Array.prototype, u = Object.prototype, i = Function.prototype,
        a = e.push, o = e.slice, c = e.concat, l = u.toString, f = u.hasOwnProperty, s = e.forEach, p = e.map, h = e.reduce, v = e.reduceRight,
        g = e.filter, d = e.every, m = e.some, y = e.indexOf, b = e.lastIndexOf, x = Array.isArray, w = Object.keys,
        _ = i.bind, j = function (n) {
            return n instanceof j ? n : this instanceof j ? (this._wrapped = n, void 0) : new j(n)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j), exports._ = j) : n._ = j, j.VERSION = "1.5.2";
    var A = j.each = j.forEach = function (n, t, e) {
        if (null != n)if (s && n.forEach === s)n.forEach(t, e); else if (n.length === +n.length) {
            for (var u = 0, i = n.length; i > u; u++)if (t.call(e, n[u], u, n) === r)return
        } else for (var a = j.keys(n), u = 0, i = a.length; i > u; u++)if (t.call(e, n[a[u]], a[u], n) === r)return
    };
    j.map = j.collect = function (n, t, r) {
        var e = [];
        return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function (n, u, i) {
            e.push(t.call(r, n, u, i))
        }), e)
    };
    var E = "Reduce of empty array with no initial value";
    j.reduce = j.foldl = j.inject = function (n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduce === h)return e && (t = j.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
        if (A(n, function (n, i, a) {
                u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
            }), !u)throw new TypeError(E);
        return r
    }, j.reduceRight = j.foldr = function (n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduceRight === v)return e && (t = j.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i !== +i) {
            var a = j.keys(n);
            i = a.length
        }
        if (A(n, function (o, c, l) {
                c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
            }), !u)throw new TypeError(E);
        return r
    }, j.find = j.detect = function (n, t, r) {
        var e;
        return O(n, function (n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0
        }), e
    }, j.filter = j.select = function (n, t, r) {
        var e = [];
        return null == n ? e : g && n.filter === g ? n.filter(t, r) : (A(n, function (n, u, i) {
            t.call(r, n, u, i) && e.push(n)
        }), e)
    }, j.reject = function (n, t, r) {
        return j.filter(n, function (n, e, u) {
            return !t.call(r, n, e, u)
        }, r)
    }, j.every = j.all = function (n, t, e) {
        t || (t = j.identity);
        var u = !0;
        return null == n ? u : d && n.every === d ? n.every(t, e) : (A(n, function (n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r
        }), !!u)
    };
    var O = j.some = j.any = function (n, t, e) {
        t || (t = j.identity);
        var u = !1;
        return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function (n, i, a) {
            return u || (u = t.call(e, n, i, a)) ? r : void 0
        }), !!u)
    };
    j.contains = j.include = function (n, t) {
        return null == n ? !1 : y && n.indexOf === y ? n.indexOf(t) != -1 : O(n, function (n) {
            return n === t
        })
    }, j.invoke = function (n, t) {
        var r = o.call(arguments, 2), e = j.isFunction(t);
        return j.map(n, function (n) {
            return (e ? t : n[t]).apply(n, r)
        })
    }, j.pluck = function (n, t) {
        return j.map(n, function (n) {
            return n[t]
        })
    }, j.where = function (n, t, r) {
        return j.isEmpty(t) ? r ? void 0 : [] : j[r ? "find" : "filter"](n, function (n) {
            for (var r in t)if (t[r] !== n[r])return !1;
            return !0
        })
    }, j.findWhere = function (n, t) {
        return j.where(n, t, !0)
    }, j.max = function (n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535)return Math.max.apply(Math, n);
        if (!t && j.isEmpty(n))return -1 / 0;
        var e = {computed: -1 / 0, value: -1 / 0};
        return A(n, function (n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a > e.computed && (e = {value: n, computed: a})
        }), e.value
    }, j.min = function (n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535)return Math.min.apply(Math, n);
        if (!t && j.isEmpty(n))return 1 / 0;
        var e = {computed: 1 / 0, value: 1 / 0};
        return A(n, function (n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a < e.computed && (e = {value: n, computed: a})
        }), e.value
    }, j.shuffle = function (n) {
        var t, r = 0, e = [];
        return A(n, function (n) {
            t = j.r(r++), e[r - 1] = e[t], e[t] = n
        }), e
    }, j.sample = function (n, t, r) {
        return arguments.length < 2 || r ? n[j.r(n.length - 1)] : j.shuffle(n).slice(0, Math.max(0, t))
    };
    var k = function (n) {
        return j.isFunction(n) ? n : function (t) {
            return t[n]
        }
    };
    j.sortBy = function (n, t, r) {
        var e = k(t);
        return j.pluck(j.map(n, function (n, t, u) {
            return {value: n, index: t, criteria: e.call(r, n, t, u)}
        }).sort(function (n, t) {
            var r = n.criteria, e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0)return 1;
                if (e > r || e === void 0)return -1
            }
            return n.index - t.index
        }), "value")
    };
    var F = function (n) {
        return function (t, r, e) {
            var u = {}, i = null == r ? j.identity : k(r);
            return A(t, function (r, a) {
                var o = i.call(e, r, a, t);
                n(u, o, r)
            }), u
        }
    };
    j.groupBy = F(function (n, t, r) {
        (j.has(n, t) ? n[t] : n[t] = []).push(r)
    }), j.indexBy = F(function (n, t, r) {
        n[t] = r
    }), j.countBy = F(function (n, t) {
        j.has(n, t) ? n[t]++ : n[t] = 1
    }), j.sortedIndex = function (n, t, r, e) {
        r = null == r ? j.identity : k(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
            var o = i + a >>> 1;
            r.call(e, n[o]) < u ? i = o + 1 : a = o
        }
        return i
    }, j.toArray = function (n) {
        return n ? j.isArray(n) ? o.call(n) : n.length === +n.length ? j.map(n, j.identity) : j.values(n) : []
    }, j.size = function (n) {
        return null == n ? 0 : n.length === +n.length ? n.length : j.keys(n).length
    }, j.first = j.head = j.take = function (n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
    }, j.initial = function (n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t))
    }, j.last = function (n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
    }, j.rest = j.tail = j.drop = function (n, t, r) {
        return o.call(n, null == t || r ? 1 : t)
    }, j.compact = function (n) {
        return j.filter(n, j.identity)
    };
    var M = function (n, t, r) {
        return t && j.every(n, j.isArray) ? c.apply(r, n) : (A(n, function (n) {
            j.isArray(n) || j.isArguments(n) ? t ? a.apply(r, n) : M(n, t, r) : r.push(n)
        }), r)
    };
    j.flatten = function (n, t) {
        return M(n, t, [])
    }, j.without = function (n) {
        return j.difference(n, o.call(arguments, 1))
    }, j.uniq = j.unique = function (n, t, r, e) {
        j.isFunction(t) && (e = r, r = t, t = !1);
        var u = r ? j.map(n, r, e) : n, i = [], a = [];
        return A(u, function (r, e) {
            (t ? e && a[a.length - 1] === r : j.contains(a, r)) || (a.push(r), i.push(n[e]))
        }), i
    }, j.union = function () {
        return j.uniq(j.flatten(arguments, !0))
    }, j.intersection = function (n) {
        var t = o.call(arguments, 1);
        return j.filter(j.uniq(n), function (n) {
            return j.every(t, function (t) {
                return j.indexOf(t, n) >= 0
            })
        })
    }, j.difference = function (n) {
        var t = c.apply(e, o.call(arguments, 1));
        return j.filter(n, function (n) {
            return !j.contains(t, n)
        })
    }, j.zip = function () {
        for (var n = j.max(j.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++)t[r] = j.pluck(arguments, "" + r);
        return t
    }, j.object = function (n, t) {
        if (null == n)return {};
        for (var r = {}, e = 0, u = n.length; u > e; e++)t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }, j.indexOf = function (n, t, r) {
        if (null == n)return -1;
        var e = 0, u = n.length;
        if (r) {
            if ("number" != typeof r)return e = j.sortedIndex(n, t), n[e] === t ? e : -1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        if (y && n.indexOf === y)return n.indexOf(t, r);
        for (; u > e; e++)if (n[e] === t)return e;
        return -1
    }, j.lastIndexOf = function (n, t, r) {
        if (null == n)return -1;
        var e = null != r;
        if (b && n.lastIndexOf === b)return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r : n.length; u--;)if (n[u] === t)return u;
        return -1
    }, j.range = function (n, t, r) {
        arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u;)i[u++] = n, n += r;
        return i
    };
    var R = function () {
    };
    j.bind = function (n, t) {
        var r, e;
        if (_ && n.bind === _)return _.apply(n, o.call(arguments, 1));
        if (!j.isFunction(n))throw new TypeError;
        return r = o.call(arguments, 2), e = function () {
            if (!(this instanceof e))return n.apply(t, r.concat(o.call(arguments)));
            R.prototype = n.prototype;
            var u = new R;
            R.prototype = null;
            var i = n.apply(u, r.concat(o.call(arguments)));
            return Object(i) === i ? i : u
        }
    }, j.partial = function (n) {
        var t = o.call(arguments, 1);
        return function () {
            return n.apply(this, t.concat(o.call(arguments)))
        }
    }, j.bindAll = function (n) {
        var t = o.call(arguments, 1);
        if (0 === t.length)throw new Error("bindAll must be passed function names");
        return A(t, function (t) {
            n[t] = j.bind(n[t], n)
        }), n
    }, j.memoize = function (n, t) {
        var r = {};
        return t || (t = j.identity), function () {
            var e = t.apply(this, arguments);
            return j.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
        }
    }, j.delay = function (n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function () {
            return n.apply(null, r)
        }, t)
    }, j.defer = function (n) {
        return j.delay.apply(j, [n, 1].concat(o.call(arguments, 1)))
    }, j.throttle = function (n, t, r) {
        var e, u, i, a = null, o = 0;
        r || (r = {});
        var c = function () {
            o = r.leading === !1 ? 0 : new Date, a = null, i = n.apply(e, u)
        };
        return function () {
            var l = new Date;
            o || r.leading !== !1 || (o = l);
            var f = t - (l - o);
            return e = this, u = arguments, 0 >= f ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u)) : a || r.trailing === !1 || (a = setTimeout(c, f)), i
        }
    }, j.debounce = function (n, t, r) {
        var e, u, i, a, o;
        return function () {
            i = this, u = arguments, a = new Date;
            var c = function () {
                var l = new Date - a;
                t > l ? e = setTimeout(c, t - l) : (e = null, r || (o = n.apply(i, u)))
            }, l = r && !e;
            return e || (e = setTimeout(c, t)), l && (o = n.apply(i, u)), o
        }
    }, j.once = function (n) {
        var t, r = !1;
        return function () {
            return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t)
        }
    }, j.wrap = function (n, t) {
        return function () {
            var r = [n];
            return a.apply(r, arguments), t.apply(this, r)
        }
    }, j.compose = function () {
        var n = arguments;
        return function () {
            for (var t = arguments, r = n.length - 1; r >= 0; r--)t = [n[r].apply(this, t)];
            return t[0]
        }
    }, j.after = function (n, t) {
        return function () {
            return --n < 1 ? t.apply(this, arguments) : void 0
        }
    }, j.keys = w || function (n) {
        if (n !== Object(n))throw new TypeError("Invalid object");
        var t = [];
        for (var r in n)j.has(n, r) && t.push(r);
        return t
    }, j.values = function (n) {
        for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++)e[u] = n[t[u]];
        return e
    }, j.pairs = function (n) {
        for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++)e[u] = [t[u], n[t[u]]];
        return e
    }, j.invert = function (n) {
        for (var t = {}, r = j.keys(n), e = 0, u = r.length; u > e; e++)t[n[r[e]]] = r[e];
        return t
    }, j.functions = j.methods = function (n) {
        var t = [];
        for (var r in n)j.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, j.extend = function (n) {
        return A(o.call(arguments, 1), function (t) {
            if (t)for (var r in t)n[r] = t[r]
        }), n
    }, j.pick = function (n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        return A(r, function (r) {
            r in n && (t[r] = n[r])
        }), t
    }, j.omit = function (n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        for (var u in n)j.contains(r, u) || (t[u] = n[u]);
        return t
    }, j.defaults = function (n) {
        return A(o.call(arguments, 1), function (t) {
            if (t)for (var r in t)n[r] === void 0 && (n[r] = t[r])
        }), n
    }, j.clone = function (n) {
        return j.isObject(n) ? j.isArray(n) ? n.slice() : j.extend({}, n) : n
    }, j.tap = function (n, t) {
        return t(n), n
    };
    var S = function (n, t, r, e) {
        if (n === t)return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t)return n === t;
        n instanceof j && (n = n._wrapped), t instanceof j && (t = t._wrapped);
        var u = l.call(n);
        if (u != l.call(t))return !1;
        switch (u) {
            case"[object String]":
                return n == String(t);
            case"[object Number]":
                return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
            case"[object Date]":
            case"[object Boolean]":
                return +n == +t;
            case"[object RegExp]":
                return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof n || "object" != typeof t)return !1;
        for (var i = r.length; i--;)if (r[i] == n)return e[i] == t;
        var a = n.constructor, o = t.constructor;
        if (a !== o && !(j.isFunction(a) && a instanceof a && j.isFunction(o) && o instanceof o))return !1;
        r.push(n), e.push(t);
        var c = 0, f = !0;
        if ("[object Array]" == u) {
            if (c = n.length, f = c == t.length)for (; c-- && (f = S(n[c], t[c], r, e)););
        } else {
            for (var s in n)if (j.has(n, s) && (c++, !(f = j.has(t, s) && S(n[s], t[s], r, e))))break;
            if (f) {
                for (s in t)if (j.has(t, s) && !c--)break;
                f = !c
            }
        }
        return r.pop(), e.pop(), f
    };
    j.isEqual = function (n, t) {
        return S(n, t, [], [])
    }, j.isEmpty = function (n) {
        if (null == n)return !0;
        if (j.isArray(n) || j.isString(n))return 0 === n.length;
        for (var t in n)if (j.has(n, t))return !1;
        return !0
    }, j.isElement = function (n) {
        return !(!n || 1 !== n.nodeType)
    }, j.isArray = x || function (n) {
        return "[object Array]" == l.call(n)
    }, j.isObject = function (n) {
        return n === Object(n)
    }, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (n) {
        j["is" + n] = function (t) {
            return l.call(t) == "[object " + n + "]"
        }
    }), j.isArguments(arguments) || (j.isArguments = function (n) {
        return !(!n || !j.has(n, "callee"))
    }), "function" != typeof/./ && (j.isFunction = function (n) {
        return "function" == typeof n
    }), j.isFinite = function (n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }, j.isNaN = function (n) {
        return j.isNumber(n) && n != +n
    }, j.isBoolean = function (n) {
        return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
    }, j.isNull = function (n) {
        return null === n
    }, j.isUndefined = function (n) {
        return n === void 0
    }, j.has = function (n, t) {
        return f.call(n, t)
    }, j.noConflict = function () {
        return n._ = t, this
    }, j.identity = function (n) {
        return n
    }, j.times = function (n, t, r) {
        for (var e = Array(Math.max(0, n)), u = 0; n > u; u++)e[u] = t.call(r, u);
        return e
    }, j.r = function (n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.r() * (t - n + 1))
    };
    var I = {escape: {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;"}};
    I.unescape = j.invert(I.escape);
    var T = {
        escape: new RegExp("[" + j.keys(I.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + j.keys(I.unescape).join("|") + ")", "g")
    };
    j.each(["escape", "unescape"], function (n) {
        j[n] = function (t) {
            return null == t ? "" : ("" + t).replace(T[n], function (t) {
                return I[n][t]
            })
        }
    }), j.result = function (n, t) {
        if (null == n)return void 0;
        var r = n[t];
        return j.isFunction(r) ? r.call(n) : r
    }, j.mixin = function (n) {
        A(j.functions(n), function (t) {
            var r = j[t] = n[t];
            j.prototype[t] = function () {
                var n = [this._wrapped];
                return a.apply(n, arguments), z.call(this, r.apply(j, n))
            }
        })
    };
    var N = 0;
    j.uniqueId = function (n) {
        var t = ++N + "";
        return n ? n + t : t
    }, j.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var q = /(.)^/, B = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    j.template = function (n, t, r) {
        var e;
        r = j.defaults({}, r, j.templateSettings);
        var u = new RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"), i = 0, a = "__p+='";
        n.replace(u, function (t, r, e, u, o) {
            return a += n.slice(i, o).replace(D, function (n) {
                return "\\" + B[n]
            }), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t
        }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            e = new Function(r.variable || "obj", "_", a)
        } catch (o) {
            throw o.source = a, o
        }
        if (t)return e(t, j);
        var c = function (n) {
            return e.call(this, n, j)
        };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c
    }, j.chain = function (n) {
        return j(n).chain()
    };
    var z = function (n) {
        return this._chain ? j(n).chain() : n
    };
    j.mixin(j), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (n) {
        var t = e[n];
        j.prototype[n] = function () {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], z.call(this, r)
        }
    }), A(["concat", "join", "slice"], function (n) {
        var t = e[n];
        j.prototype[n] = function () {
            return z.call(this, t.apply(this._wrapped, arguments))
        }
    }), j.extend(j.prototype, {
        chain: function () {
            return this._chain = !0, this
        }, value: function () {
            return this._wrapped
        }
    })
}).call(this);
$l = l = console.log
$d = d = console.dir
$l('shooter');
//bg = function() {  c.x.f = 'red'; c.x.s = 'blue'; c.x.fillRect (0,0,50000,500000); };
bg = function (col) {
    col = col || 'red'
    c.solid(col)
}
clr = function () {
    c.x.clearRect(0, 0, c.w(), c.h())
}
// cv = document.getElementById('shooterCan');  ct =cv.getContext('2d');
game = true
bg()
go()
go = function () {
    requestAnimationFrame(function () {
        u = function () {
            if (game) {
                ball.u()
                _e([coins, bullets, aliens], function (arr) {
                    _e(arr, function (obj) {
                        obj.u()
                    })
                })
            }
        }
        //_each(coins, this.u);
        u()
        clear()
        bg()
        draw()
        go()
    })
}
draw = function () {
    if (game) {
        ball.draw()
    }                                                                                                                           //draws everyting, (but not ball if game false)  / /if health <1, sets game false, shows 'game over'
    _e([coins, bullets, aliens], function (arr) {
        _e(arr, function (obj) {
            obj.draw()
        })
    })
    ct.font = 'normal normal 25px serif';
    ct.f = 'black';
    ct.fillText('score:' + ball.coins, 1030, 50)
    ct.fillText('health: ' + ball.health, 30, 50)
    ct.font = 'normal normal 75px serif'
    ct.f = 'blue'
    if (ball.health < 1) {
        game = false;
        ct.fillText('GAME OVER', 400, 250);
        textHeight = 80;
        textWidth = ct.measureText('play again').width;
        ct.f = 'violet';
        ct.fillText('play again', 450, 350)
    }
}                                                                                  //ct.f = 'white'; ct.fillRect(450,290, textWidth, textHeight); //ct.fillText('dx: '+ball.dx , 1030, 150);   //ct.fillText('dy: '+ball.dy , 30, 150);
Ball = function () {
    return {
        rad: 20, x: 0, y: 0, dx: 1, dy: 1, coins: 0, health: 1000
    }
}
Ball.draw = function () {
    ct.f = 'blue'
    ct.s = 'yellow'
    ct.bP()
    ct.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
    ct.fill()
    ct.stroke()
}
B.u = function () {
    B.x = B.x + B.dx;         //u pos. based on velocity
    B.y = B.y + B.dy;                                                                                              //ball.srad = ball.rad * .9995;
    if (B.x < 0) {
        B.x = 1180
    }
    ;   // warp through walls
    if (B.y < 0) {
        B.y = 580
    }
    ;
    if (B.x > 1200) {
        B.x = 20
    }
    ;
    if (B.y > 600) {
        B.y = 20
    }
    _e(coins, function (coin, index, list) {  // check for and manage Ball-Coin HITS
        if (coin.x > (B.x - B.rad) && (coin.x < (B.x + B.rad))
            && (coin.y > (B.y - B.rad)) && (coin.y < (B.y + B.rad))) {
            delete coins[index];
            B.coins = B.coins + 1;
        }
    })        //alert (index);  //_.pluck(list,[index]);  //obj = new Coin; coins.push(obj);  //obj = new Coin; coins.push(obj);
    _e(aliens, function (alien, index, list) {   // BALL-ALIEN HITS
        if (alien.x > (B.x - alien.rad) && (alien.x < (B.x + alien.rad))
            && (alien.y > (B.y - alien.rad)) && (alien.y < (B.y + alien.rad))) {
            B.health = B.health - 1
        }
        _e(bullets, function (bullet, bullet_index, bullet_list) {      // ALIEN-BULLET HITS                                                                                                //alert (index);   //_.pluck(list,[index]);  //delete alien[index];
            if (alien.x > (bullet.x - bullet.rad) && (alien.x < (bullet.x + bullet.rad))
                && (alien.y > (bullet.y - bullet.rad)) && (alien.y < (bullet.y + bullet.rad))) {
                delete aliens[index]
                delete bullets[bullet_index]
                obj = new Alien
                aliens.push(obj)
            }
        })
    })
}                                                                                                          //alert (index);   //_.pluck(list,[index]);  //delete alien[index]; //obj = new Alien; aliens.push(obj);
////////////////////////////////////////////////////////////////////////////  CONSTRUCTORS:  BULLETS, COINS, ALIENS
Bullet = function (x, y, dx, dy) {
    var bullets = []
    this.x = x;
    this.y = y;
    this.dx = dx * -5;
    this.dy = dy * -5;
    this.rad = 8;
    ct.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false)
    ct.fill();
    ct.stroke();
    this.draw = function () {
        ct.f = 'pink';
        ct.s = 'white';
        ct.bP();
    }
    this.u = function () {
        this.x = this.x - this.dx
        this.y = this.y - this.dy
    }
}                                                                                                                          //if (this.x < 0) {this.x = 1180}; if (this.y < 0) {this.y = 580}; if (this.x > 1200) {this.x = 20};if (this.y > 600) {this.y = 20}
Coin = function () {
    var t = this;
    t.x = _r(0, 1200)
    t.y = _r(0, 600)
    t.dx = _r(0, 10) - 5
    t.dy = _r(0, 10) - 5
    t.rad = 10
    t.draw = function () {
        ct.f = 'yellow'
        ct.s = 'black';
        ct.bP()
        ct.arc(t.x, t.y, t.rad, 0, Math.PI * 2, false)
        ct.fill();
        ct.stroke();
    }
    t.u = function () {
        if (t.x < 0) {
            t.x = 1180
        }
        ;
        if (t.y < 0) {
            t.y = 580
        }
        if (t.x > 1200) {
            t.x = 20
        }
        if (t.y > 600) {
            t.y = 20
        }
        t.x = t.x + t.dx;
        t.y = t.y + t.dy
    }
}
var coins = []
for (var i = 0; i < 10; i++) {
    obj = new Coin
    coins.push(obj)
}
Alien = function () {
    var t = this
    t.x = _r(0, 1200)
    t.y = _r(0, 600)
    t.dx = _r(0, 10) - 5
    t.dy = _r(0, 10) - 5
    t.rad = 25
    t.draw = function () {
        ct.f = 'rgba(124,252,0,0.5)'
        ct.s = 'black'
        ct.bP()
        ct.arc(t.x, t.y, t.rad,
            0, Math.PI * 2, false)
        ct.fill()
        ct.stroke()
        ct.f = 'orange'
        ct.s = 'black'
        ct.bP()
        ct.arc(t.x, t.y, 10,
            0, Math.PI * 2, false)
        ct.fill()
        ct.stroke()
    }
    t.u = function () {
        if (t.x < 0) {
            t.x = 1180
        }
        if (t.y < 0) {
            t.y = 580
        }
        if (t.x > 1200) {
            t.x = 20
        }
        if (t.y > 600) {
            t.y = 20
        }
        t.rad = t.rad * 1.001
        t.x = t.x + t.dx
        t.y = t.y + t.dy
    }
}
var aliens = []
for (var i = 0; i < 5; i++) {
    obj = new Alien
    aliens.push(obj)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
cv.onmouseup = function (e) {
    if (game) {
        xforce = ((e.clientX - B.x) / 300);
        yforce = ((e.clientY - B.y) / 300)
        B.dx = B.dx + xforce;
        B.dy = B.dy + yforce;
        if (B.dx > 5) {
            B.dx = 5
        }
        ;
        if (B.dy > 5) {
            B.dy = 5
        }
        ;
        if (B.dx < -5) {
            B.dx = -5
        }
        ;
        if (B.dy < -5) {
            B.dy = -5
        }
        bullet = new Bullet(B.x, B.y, xforce, yforce);
        bullets.push(bullet);
    }
    if (game == false) {
        if ((e.clientX > 450) && (e.clientY > 290) && (e.clientX < (450 + textWidth)) && (e.clientY < (290 + textHeight))) {
            location.reload(true)
        }
    }
}
/// meet function gl:  // function gl (x, y) {  var bbox = canvas.getBoundingClientRect();  return {  x: x - bbox.left * (canvas.width / bbox.width),   y: y - bbox.top * (canvas.height / bbox.height)};}
// he looks interesting, but i commented it, b/c the only ref to it was in a comment.. this one, in fact:   //var loc = gl(e.clientX, e.clientY); alert (loc.x);   //alert (e.clientX - ball.x);
/////////////////////////////////////////////////////////////////////////////////////////////////  $(function(){}) no jquery needed