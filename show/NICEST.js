
AUTO = function () {
	w.left = function (n) {
		var w = this;
		n = N(n, 4)
		w.e(function (b) {
			b.X(n, '-')
		})
	}
	b.byI = b.byImp = function (i) {
		var k = $.K
		if (k.right) {
			this.I(i, 0)
		}
		else if (k.left) {
			this.I(-i, 0)
		}
		return this
	}
	b.byV = b.byVel = function (v) {
		alert('b.byV')
		var k = $.K
		if (k.right) {
			p.lV(v, 0)
		}
		else if (k.left) {
			p.lV(-v, 0)
		}
		return this
	}
	W({g: 300, w: 0}).P(300, -300)
	w.plat = function (x, y, W, H) {
		var w = this//=brk=brick=
		x = N(x) ? x : 60;
		y = N(y) ? y : x
		W = N(W) ? W : 30;
		H = N(H) ? H : W
		return w.S(x, y, 'w', W, H).r(.3).K('plat')
	}
	w.plat(800, 500, 600, 100)
	w.plat(300, 530, 100, 100)
	w.plat(1400, 300, 600, 100)
	w.plat(1800, 500, 1000, 100)
	w.plat(1900, 200, 600, 100)
	w.p(300, -100)
	T.t(function () {
		w.left(4)
		if (p.Y() > 2000) {
			p.XY(300, -300)
		} //comeback
		if (b2d.onG) {
			if ($.K.u) {
				p.jumping(180, 30)
			}
			else {
				p.byVel(40)
			}
		}
		else {
			p.byImp(10)
		}
	})
	w.D(800, 100, 'r', 50, 50).bS('guy')
}
CLOOT = CLICKSHOOT = function () {
	W({g: 0})
	p = w.me(800, 300).aD(10000)
	w.tim(7)
	w.b(function (cx) {
		cx.w('bul', 'tim', function (t) {
			t.B().kill()
		})
		cx.w('bul', p, function () {
			this.B().kill()
		})
		cx.w('tim', p, function () {
			p.kill()
		})
	})
	$.click(function (e) {
		var x = e.pageX - p.X(), y = e.pageY - p.Y(),
				rot = M.tD(M.atan(y / x)),
				adj = x > 0 ? 90 : 270
		p.rot(rot + adj).I(x / 20, y / 20)
		w.bul(p.wP(0, -100), 10).I(x, y) //.bS({i:'sun', sc:.1})
	})
//to do:  maybe u only get 10 buls ever.. so u must chase them :) (only way to kill badguys)
}
TALK = function () {
	W({g: 0, w: 0})
	score = 0
	shots = 0
	p = w.me(500, 300).stat()
	_.t(100, function () {
		w.D(R(2200, -1000), R(1600, -1000), $r(), R(14, 8)).lD(2)
	})
	/*
	 $.space(function(){//can double on on shots!!!
	 setInterval(function(){
	 p.shoot(); shots++ }, 200)
	 })  //setTimeout(function(){$.pop(score).click(function(){window.location=window.location})}, 10000)
	 */
	w.cl('ball', 'bullet', function () {
		// score++;  cx.destroy()
	})
	cjs.t(function () {
		p.XY(500, 300)
		if ($.K.left) {
			p.rot(8, '-')
		}
		if ($.K.right) {
			p.rot(8, '+')
		}
		if ($.K.up) {
			w.e(function (b) {
				if (
						!b.of('bul') && !b.of('player')
				) {
					b.I(p.vec(0, -100).div(-50))
				}
			})
		}
	})
}
SPAZE = SPACEMAZE = function () {
	W({
		g: 0
	})
	w.roof.kill()
	_.t(30, function () {
		w.D(R(1000, -500), R(800, -400), 'w', 2).d(0).r(2)
	})
	grid = w.grid(_grid, 100, -100, 14, 40)
	grid.aD(1)
	//p = w.p(220, 70, 1.5).aD(100).track()//.follow(300, 150)
	//p.cn('thrust')
//    p.fR(false)
	p = w.y()
	score = 100
	T.t(function () {
		grid.aV(.2)
		// w.i.pen(score)
	})
	w.b(function (cx) {
		if (cx.w('player', 'grid')) {
			score--
		}
	})
}
SPOOM = function () {
	W({g: 0, w: 0})
	w.cen('+')
	w.s.rXY(w.hW, w.hH)
	star = w.S(200, 200, 'p', 100).den(1).bo(2)
	star.bS('earth', .13)
	p = w.p(200, 200, 2.5, 'thrust').d(.4)
	p.horizCenter()
	p.aD(8).lD(.8)
	w.dJ(p, star).freq(.15).damp(0).len(50)
	cjs.t(function () {
		trans(_.cap(300 / M.dist(star, p), .3, 2))
	})
	function trans(Z) {
		w.s.sXY(Z)
		w.s.XY(w.hW - (p.X() - w.hW) * Z,
				w.hH - (p.Y() - w.hH) * Z)
	}
}
YO = SPOYO = SPACEYOYO = function () {
	W({g: 0, w: 0})
	w.stars()
	p = w.p()
	p.cn('t')
	star = w.sun(200, 200)
	_.in(function () {
		star.sp().sXY(1)
	})
	w.spg(p, star).fq(3).d(4)
}
SPACE = function () {
	var img
	W({g: 0, w: 0});
	s = w.s
	e = w.S(200, 200, 'p', 100).d(1).r(2)
	e.bS({i: 'earth', sc: .13})
	e.K('earth');
	eI = e.sp()
	p = w.p(200, 200, 2.5, 'thrust')
			.d(.4).aD(8).lD(.8)
	w.dJ({
		a: p, b: e, l: 50, f: 0.15,
		coll: 1
	})
	T.t(function () {
		var sp, dx = e.X() - p.X(), dy = e.Y() - p.Y(),
				sc = _.cap(
						300 / M.sqrt(dx * dx + dy * dy), .3, 2)
		s.XY(
				300 - sc * (p.X() - 300),
				150 - sc * (p.Y() - 150))
	})
}//
PARTY = function () {
	W([1200, 600, 1800, 600], {g: 10})
	w.l(600, 0, 700, 500)//hud
	w.l(1000, 200, 100, 900, '-') //red
	w.l(50, 50, 500, 350, '/')
	w.l(200, 200, 500, 500, '+')
	_.t(10, function (i) {
		w.D(100 + i * 40, 100).cir({r: 35, lf: {c1: '*', c2: '*'}}).d(.1);
		w.D(100 + i * 40, 100).cir({r: 20, lf: 1}).d(.1)
	})
	_.t(10, function (i) {
		w.D(100 + i * 140, 160).cir({
			r: 50,
			rf: {
				c1: $r(),
				c2: $r(),
			}
		}).den(.1)
	})
	w.D(800, 300).cir({
		r: 120,
		C: 'y', l: 2, bf: 'me', ls: ['y', 'x']//?
	}).den(.1)
	w.y(100, 300).tr()
	w.tRightLeft();
}
CHANGETRACKEE = function () {
	
	//i thought i may want t for timer/ticker.. but time has no x and y !
	//move the stage by manipulating the trackee x,y
	//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
	//  y = w.ship(50,50 ).C('d').mid().track()
	y2 = w.y(100, 300).C('x').rot(180)
	_.evx(5,
			function () {
				if (w.t == y2) {
					w.C('w');
					w.t = y
				}
				else {
					w.C('z');
					w.t = y2
				}
			})
}
AUTOGAME = function () {
	W({w: 0, t: 0}).P()
	setup = function () {
		score = 0
		p.XY(350, 100)
		p.lV(0, 0)
		p.cn('j')
		p.d(.1).r(1).fr(0)
		w.s.XY(0, 0)
	}
	setup()
	T.t(function () {
		w.s.X(4, '-');
		if (p.relPos() < -100) {
			setup()
		}
	})//.pen(score++)
	w.ramps()
}
MARIOS = function () {
	W().P().P().P()
}
HIDESEEK = function () {
	W([1200, 600, 1400, 1200], {g: 300, t: 0})
	w.S(700, 1000, 'r', 800, 20)
	w.S(500, 800, 'g', 200, 20)
	w.S(900, 600, 'x', 200, 20)
	p = w.p(700, 600)
	w.fg.A(p.sp())
	w.track(p, 600, 400,
			{x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
}
GOOMBA = function () {
	W()
// could i automatically have body listen to their sens?
	w.ball().r(.3)
	workingGoomba = p = w.p(900, 450).cn('jump')
	p.my('hat', function () {
		p.bS('guy')
	})
	p.my('right');
	p.my('left')
	$.space(function () {
		if (p.my.right) {
			p.I(100, -400)
		}
		if (p.my.left) {
			p.I(-100, -400)
		}
	})
}
GG = function () {
	W({g: 0}).Y()
	w.gG(100, 100);
	w.gG(200, 200);
	w.gG(300, 300)
}
GREEN = function () {
	W({w: '@', g: 0})
	y = w.y(400, 200).K('pop')
	w.gG(400, 400)
}
COINWARP = function () {
	W({g: 0, w: 0}).Y()
	y.warp()
	score = 0
	badScore = 0
	// p = w.ship().K('player pop').warp()
	//p= w.p(100,100, 'thrust').Y(200).horizCenter().aD( 10000 ).lD(0).K('pop').warp()
	gg = w.gG(300, 300).warp()
	_.ev(8, function () {
		w.coin().sen(1)
	})
	/*
	 w.beg(function(cx){var fixt
	 cx.with('coin','player', function(){this.B().kill()
	 score++})
	 cx.with('coin','greenGuy', function(){
	 this.B().kill()
	 badScore++
	 })
	 })
	 */
	// w.coll('coin','player', function(){this.B().kill(); score++})
	// w.coll('coin','gg', function(){this.B().kill();badScore++})
	/*
	 // w.class('coin')
	 //   .with('player', function(c){c.setDestroy();score++})
	 // .with('greenGuy', function(c){c.setDestroy();badScore++})
	 w.class('coin').with({
	 player: function(){score++; return true},
	 greenGuy: function(){badScore++; return true}
	 })
	
	 */
	_.ev(3, function () {
		w.pen(score + ' / ' + badScore)
	})
}
SUNZOOM = SPACEGRAVMACH = function () {
	W({g: 0, w: 0})
	w.thrustPlayer = function (x, y) {
		var w = this, p
		p = w.p(x, y, 2.5, 'thrust').lD(.8).aD(10000)
		return p
	}
	w.stars(10)
	w.s.rXY(600, 300)
	w.s.XY(600, 300)
	p = w.p().cn('thrust')
	sun = w.sun()
	_.in(.3, function () {
		//sun.sp().twL([{r:360},10000])
	})
	//preload to the rescue ??
	w.dJ({a: p, b: sun, cl: 1}).fq(10).d(10).l(10)
	green(400, 100);
	green(400, 200);
	green(200, 100);
	green(200, 200)
	function green(x, y, fq) {
		w.dJ({
			a: w.gG(x, y),
			b: sun,
			cl: 1
		})
				.fq(N(fq, 1)).d(0).l(15)
	}
	
	b2d.scaleFunc = function (b1, b2, max) {
		max = N(max, 2)
		M.sqr = function (a) {
			return a * a
		}
		var dst = 150 / M.sqrt(
						M.sqr(b1.X() - b2.X()) +
						M.sqr(b1.Y() - b2.Y())
				)
		return dst > max ? max : dst
	}
	T.t(function () {
		w.s.sXY(
				b2d.scaleFunc(sun, p, 2))
		p.centerScale(b2d.scaleFunc(sun, p, 2))
	})
}//
ZIL = function () {
	W({g: 0, w: 0})
	health = 100
	y = w.ship().warp().cl(function () {
		health -= 5
	})
	z = w.zilla(600, 300).fireBallsAtInt(4000)
	w.show(function () {
		return 'health: ' + health + ', hits: ' + z.hits
	})
}
GOOMBA = function () {
	W()
// could i automatically have body listen to their sens?
	w.ball().r(.3)
	workingGoomba = p = w.p(900, 450).cn('jump')
	p.my('hat', function () {
		p.bS('guy')
	})
	p.my('right');
	p.my('left')
	$.space(function () {
		if (p.my.right) {
			p.I(100, -400)
		}
		if (p.my.left) {
			p.I(-100, -400)
		}
	})
}
GG = function () {
	W({g: 0}).Y()
	w.gG(100, 100);
	w.gG(200, 200);
	w.gG(300, 300)
}
GREEN = function () {
	W({w: '@', g: 0})
	y = w.y(400, 200).K('pop')
	w.gG(400, 400)
}
COINWARP = function () {
	W({g: 0, w: 0}).Y()
	y.warp()
	score = 0
	badScore = 0
	// p = w.ship().K('player pop').warp()
	//p= w.p(100,100, 'thrust').Y(200).horizCenter().aD( 10000 ).lD(0).K('pop').warp()
	gg = w.gG(300, 300).warp()
	_.ev(8, function () {
		w.coin().sen(1)
	})
	/*
	 w.beg(function(cx){var fixt
	 cx.with('coin','player', function(){this.B().kill()
	 score++})
	 cx.with('coin','greenGuy', function(){
	 this.B().kill()
	 badScore++
	 })
	 })
	 */
	// w.coll('coin','player', function(){this.B().kill(); score++})
	// w.coll('coin','gg', function(){this.B().kill();badScore++})
	/*
	 // w.class('coin')
	 //   .with('player', function(c){c.setDestroy();score++})
	 // .with('greenGuy', function(c){c.setDestroy();badScore++})
	 w.class('coin').with({
	 player: function(){score++; return true},
	 greenGuy: function(){badScore++; return true}
	 })
	
	 */
	_.ev(3, function () {
		w.pen(score + ' / ' + badScore)
	})
}
SUNZOOM = SPACEGRAVMACH = function () {
	W({g: 0, w: 0})
	w.thrustPlayer = function (x, y) {
		var w = this, p
		p = w.p(x, y, 2.5, 'thrust').lD(.8).aD(10000)
		return p
	}
	w.stars(10)
	w.s.rXY(600, 300)
	w.s.XY(600, 300)
	p = w.p().cn('thrust')
	sun = w.sun()
	_.in(.3, function () {
		//sun.sp().twL([{r:360},10000])
	})
	//preload to the rescue ??
	w.dJ({a: p, b: sun, cl: 1}).fq(10).d(10).l(10)
	green(400, 100);
	green(400, 200);
	green(200, 100);
	green(200, 200)
	function green(x, y, fq) {
		w.dJ({
			a: w.gG(x, y),
			b: sun,
			cl: 1
		})
				.fq(N(fq, 1)).d(0).l(15)
	}
	
	b2d.scaleFunc = function (b1, b2, max) {
		max = N(max, 2)
		M.sqr = function (a) {
			return a * a
		}
		var dst = 150 / M.sqrt(
						M.sqr(b1.X() - b2.X()) +
						M.sqr(b1.Y() - b2.Y())
				)
		return dst > max ? max : dst
	}
	T.t(function () {
		w.s.sXY(
				b2d.scaleFunc(sun, p, 2))
		p.centerScale(b2d.scaleFunc(sun, p, 2))
	})
}//
ZIL = function () {
	W({g: 0, w: 0})
	health = 100
	y = w.ship().warp().cl(function () {
		health -= 5
	})
	z = w.zilla(600, 300).fireBallsAtInt(4000)
	w.show(function () {
		return 'health: ' + health + ', hits: ' + z.hits
	})
}
STREET = function () {
	W([1200, 600, 1400, 1200], {g: 300, t: 0})
	w.S(700, 1000, 'r', 800, 20)
	w.S(500, 800, 'g', 200, 20)
	w.S(900, 600, 'x', 200, 20)
	p = w.p(700, 600)
	w.fg.A(p.sp())
	w.track(p, 600, 400,
			{x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
}
SPUFF = function () {
	W(800, 600, 800, 800).G(0)
	w.S(200, 500, 'g', 100, 100);
	w.S(500, 500, 'w', 100, 100);
	w.S(1000, 500, 'r', 100, 100);
	w.S(1500, 500, 'g', 100, 100)
	y = w.ship(100, 100).rt(200)
	w.track(y, 500, 500, {x: 1000, y: 1000, w: 400, h: 400})
	BUFFER = function () {
		W([1200, 600, 4800, 1600], {g: 0, t: 0})//.mark()//.dot(600,300,'*').dot(1200,600,'*')
		y = w.ship(100, 100).damp(1, 10).rot(90).lD(2).aD(2)
				.rot(120)//.lV(1)
		w.bufFoll(y, 600, 300, {
			x: 800, y: 300, mX: .8, mY: .8, w: 200, h: 200
		})
		// w.Z(.8)
	}
}
SLY = function () {
	W([1200, 600, 2400, 1000], {g: 300}).P()
	w.right.kill();
	w.left.kill()
	w.track(p, 300, 400, {
		x: 1200, y: 700,
		w: 800, h: 500,
		mX: 10, mY: 10
	})
}
SCROLLNOLIM = function () {
	W([1200, 600, 2400, 1200], {g: 0})
	w.S(1200, 300, 'r', 400, 100)
	w.S(1200, 600, 'w', [[100, 100, '-']])
	w.S(1200, 900, 'r', 400, 100)
	y = w.ship(100, 100).rot(120).damp(1, 10)
	w.Z(.8)
	w.track(y, 600, 300, '-')
	w.dragScale = function () {
		var w = this,
				pX = 0, pY = 0, pmX, pmY, o = {}
		c = $(w.i.canvas)
		c.mousedown(function (e) {
			o.Scl = w.z
			o.Y = e.clientY
		})
		c.pressmove(function (e) {
			var x = e.clientX,
					y = e.clientY,
					newSc = o.Scl + (o.Y - e.clientY) * .005
			newSc = newSc > 5 ? 5 : newSc < .8 ? .8 : newSc
			w.Z(newSc)
		})
		return this
	}
	w.dragScale()
}//fix
SHOWOFF = function () {
	W([1200, 600, 2400, 600], {g: 10})
	y = w.ship(50, 50).track()//.P(100,1000)
	w.S(400, 2500, 'r', 200, 100)
	w.S(800, 2300, 'z', 100, 100)
	w.S(1200, 2300, 'b', 300, 100)
	w.S(1600, 2300, 'z', 100, 100)
	w.S(2000, 2300, 'r', 200, 100)
	_.times(10, function (i) {
		w.D(100 + i * 100, 100, $r(), 35).den(.1)
	})
	w.showOff()
}
ZOOMSCALE = function () {
	W([1000, 1000], {
		g: 0, t: 0
	})
	w.dragX = function () {
		var w = this, d
		w.i.c.m({
			mD: function (x) {
				d = x - w.s.x
			},
			pM: function (x) {
				w.s.x = x - d
			}
		})
		return w
	}
	w.dragY = function () {
		var w = this, d
		w.i.c.m({
			mD: function (x, y) {
				d = y - w.s.y
			},
			pM: function (x, y) {
				w.s.y = y - d
			}
		})
		return w
	}
	w.drag = function () {
		return this.dragX().dragY()
	}
	// w.s.HUD.dot(500, 500)
	y = w.ship(100, 100).rot(200)
	w.S(500, 500, 'o', 200)
	w.S(500, 500, 'r', 10)
	w.S(200, 200, 'm', 40)
	w.S(800, 200, 'b', 60)
	w.S(800, 800, 'l', 80)
	w.S(200, 800, 'g', 100)
	//w.inout()
	w.drag()
	r = $.rg().A() //range
	r.abs(775, 500)
	r.css('transform', 'rotate(90deg)')
	r.W(500).val(0)
	T.t(function () {
		w.Z(r.val() / 25 + 1)
	})
}
CUPBALL = function () {//should zoom in when near cup
	CUPS()
	b = w.D(w.W / 2, w.H / 2, 'w', [[10]]).r(.8).track()
	cjs.tick(function () {
		b.F(0, -20)
	})
	w.showOff()
}
TRACKEE = function () {
	W([1200, 600, 2400, 600], {g: 10})
	w.S(400, 2500, 'r', 200, 100)
	w.S(800, 2300, 'z', 100, 100)
	w.S(1200, 2300, 'b', 300, 100)
	w.S(1600, 2300, 'z', 100, 100)
	w.S(2000, 2300, 'r', 200, 100)
	_.times(10, function (i) {
		w.D(100 + i * 100, 100, $r(), 35).den(.1)
	})
	y = w.ship(50, 50).mid()
	y2 = w.ship(100, 300).C('x').rot(180)
	//i thought i may want t for timer/ticker.. but time has no x and y !
	//move the stage by manipulating the trackee x,y
	//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
	w.tRightLeft()
	w.showOff()
	setTimeout(function () {
		setInterval(function changeT() {
			if (w.t == y2) {
				w.C('b');
				w.t = y
			} else {
				w.C('z');
				w.t = y2
			}
		}, 5000)
	}, 5000)
}
CAMFOLLOW = function () {
	W(500, 500, 1600, 1000).G(0)
	a = w.ship().C('b')
	b = w.ship(400, 400).C('o').track()
	I(5, function () {
		if (w.follA) {
			b.track();
			w.follA = 0
		}
		else {
			a.track();
			w.follA = 1
		}
	})
}
CB = TRACKEECB = function () {
	W([1200, 600, 2400, 1200], {g: 300})
	_.t(10, function (i) {
		w.D(100 + i * 100, 100, $r(), 35).d(.1)
	})
	w.Z('-')
	p = w.p(1175, 100)
	w.t = p // no need to call track?
	_.ev(1, function () {
		w.t.cb = function () {
			w.Z(w.z + .001)
		}
	})
}
AUTO = function () {
	w.left = function (n) {
		var w = this;
		n = N(n, 4)
		w.e(function (b) {
			b.X(n, '-')
		})
	}
	b.byI = b.byImp = function (i) {
		var k = $.K
		if (k.right) {
			this.I(i, 0)
		}
		else if (k.left) {
			this.I(-i, 0)
		}
		return this
	}
	b.byV = b.byVel = function (v) {
		alert('b.byV')
		var k = $.K
		if (k.right) {
			p.lV(v, 0)
		}
		else if (k.left) {
			p.lV(-v, 0)
		}
		return this
	}
	W({g: 300, w: 0}).P(300, -300)
	w.plat = function (x, y, W, H) {
		var w = this//=brk=brick=
		x = N(x) ? x : 60;
		y = N(y) ? y : x
		W = N(W) ? W : 30;
		H = N(H) ? H : W
		return w.S(x, y, 'w', W, H).r(.3).K('plat')
	}
	w.plat(800, 500, 600, 100)
	w.plat(300, 530, 100, 100)
	w.plat(1400, 300, 600, 100)
	w.plat(1800, 500, 1000, 100)
	w.plat(1900, 200, 600, 100)
	w.p(300, -100)
	T.t(function () {
		w.left(4)
		if (p.Y() > 2000) {
			p.XY(300, -300)
		} //comeback
		if (b2d.onG) {
			if ($.K.u) {
				p.jumping(180, 30)
			}
			else {
				p.byVel(40)
			}
		}
		else {
			p.byImp(10)
		}
	})
	w.D(800, 100, 'r', 50, 50).bS('guy')
}
CLOOT = CLICKSHOOT = function () {
	W({g: 0})
	p = w.me(800, 300).aD(10000)
	w.tim(7)
	w.b(function (cx) {
		cx.w('bul', 'tim', function (t) {
			t.B().kill()
		})
		cx.w('bul', p, function () {
			this.B().kill()
		})
		cx.w('tim', p, function () {
			p.kill()
		})
	})
	$.click(function (e) {
		var x = e.pageX - p.X(), y = e.pageY - p.Y(),
				rot = M.tD(M.atan(y / x)),
				adj = x > 0 ? 90 : 270
		p.rot(rot + adj).I(x / 20, y / 20)
		w.bul(p.wP(0, -100), 10).I(x, y) //.bS({i:'sun', sc:.1})
	})
//to do:  maybe u only get 10 buls ever.. so u must chase them :) (only way to kill badguys)
}
TALK = function () {
	W({g: 0, w: 0})
	score = 0
	shots = 0
	p = w.me(500, 300).stat()
	_.t(100, function () {
		w.D(R(2200, -1000), R(1600, -1000), $r(), R(14, 8)).lD(2)
	})
	/*
	 $.space(function(){//can double on on shots!!!
	 setInterval(function(){
	 p.shoot(); shots++ }, 200)
	 })  //setTimeout(function(){$.pop(score).click(function(){window.location=window.location})}, 10000)
	 */
	w.cl('ball', 'bullet', function () {
		// score++;  cx.destroy()
	})
	cjs.t(function () {
		p.XY(500, 300)
		if ($.K.left) {
			p.rot(8, '-')
		}
		if ($.K.right) {
			p.rot(8, '+')
		}
		if ($.K.up) {
			w.e(function (b) {
				if (
						!b.of('bul') && !b.of('player')
				) {
					b.I(p.vec(0, -100).div(-50))
				}
			})
		}
	})
}
SPAZE = SPACEMAZE = function () {
	W({
		g: 0
	})
	w.roof.kill()
	_.t(30, function () {
		w.D(R(1000, -500), R(800, -400), 'w', 2).d(0).r(2)
	})
	grid = w.grid(_grid, 100, -100, 14, 40)
	grid.aD(1)
	//p = w.p(220, 70, 1.5).aD(100).track()//.follow(300, 150)
	//p.cn('thrust')
//    p.fR(false)
	p = w.y()
	score = 100
	T.t(function () {
		grid.aV(.2)
		// w.i.pen(score)
	})
	w.b(function (cx) {
		if (cx.w('player', 'grid')) {
			score--
		}
	})
}
SPOOM = function () {
	W({g: 0, w: 0})
	w.cen('+')
	w.s.rXY(w.hW, w.hH)
	star = w.S(200, 200, 'p', 100).den(1).bo(2)
	star.bS('earth', .13)
	p = w.p(200, 200, 2.5, 'thrust').d(.4)
	p.horizCenter()
	p.aD(8).lD(.8)
	w.dJ(p, star).freq(.15).damp(0).len(50)
	cjs.t(function () {
		trans(cjs.cap(300 / M.dist(star, p), .3, 2))
	})
	function trans(Z) {
		w.s.sXY(Z)
		w.s.XY(w.hW - (p.X() - w.hW) * Z,
				w.hH - (p.Y() - w.hH) * Z)
	}
}
YO = SPOYO = SPACEYOYO = function () {
	W({g: 0, w: 0})
	w.stars()
	p = w.p()
	p.cn('t')
	star = w.sun(200, 200)
	_.in(function () {
		star.sp().sXY(1)
	})
	w.spg(p, star).fq(3).d(4)
}
SPACE = function () {
	var img
	W({g: 0, w: 0});
	s = w.s
	e = w.S(200, 200, 'p', 100).d(1).r(2)
	e.bS({i: 'earth', sc: .13})
	e.K('earth');
	eI = e.sp()
	p = w.p(200, 200, 2.5, 'thrust')
			.d(.4).aD(8).lD(.8)
	w.dJ({
		a: p, b: e, l: 50, f: 0.15,
		coll: 1
	})
	T.t(function () {
		var sp, dx = e.X() - p.X(), dy = e.Y() - p.Y(),
				sc = cjs.cap(
						300 / M.sqrt(dx * dx + dy * dy), .3, 2)
		s.XY(
				300 - sc * (p.X() - 300),
				150 - sc * (p.Y() - 150))
	})
}//
MEET = function () {
	W([1200, 600, 1200, 600], {g: 10})
	//  w.l(600,0,700,500)//hud
	//  w.l(1000,200, 100,900,'-') //red
	//  w.l(50,50,500,350,'/')
	//  w.l(200, 200, 500,500,'+')
	//  _.t(10, function(i){w.D(100+i*40,100).cir({r:35,lf:{c1:'*',c2:'*'}}).d(.1);w.D(100+i*40,100).cir({r:20,lf:1}).d(.1)})
	/*
	 _.t(10, function(i){
	 w.D(100+i*140,160).cir({r:50,
	
	 rf:{
	 c1:$r(),
	 c2:$r(),
	 }
	 }).den(.1)})
	
	
	 w.D(800, 300).cir({r:120,
	 C:'y',   l:2,  bf:'me', ls:['y','x']//?
	 }).den(.1)
	
	
	 */
	//i thought i may want t for timer/ticker.. but time has no x and y !
	//move the stage by manipulating the trackee x,y
	//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
	//  y = w.ship(50,50 ).C('d').mid().track()
	y2 = w.y(100, 300)//.C('x').rot(180)
	//w.tRightLeft();//w.showOff()
	_.evx(5,
			function () {
				if (w.t == y2) {
					w.C('w');
					w.t = y
				}
				else {
					w.C('z');
					w.t = y2
				}
			})
	/* w.S(800,300,'r',200,800)
	 .cl('bul',function(bu){
	 this.sub( bu.B().exp(),'-')})
	
	
	 w.S(200,300,'r',200,800).cl('bul',function(bu){bu=bu.B()
	 var v=bu.pos()
	 bu.kill()
	 w.pol(v.x,v.y,
	 M.p([[0,50],[-50,0],[0,-50],[50,0]])
	 ).stat()})
	 */
	//y.track()
	t = w.S(500, 300, 'g', 200, 800)
	t.cl(//'bul',
			function (bu) {
				var v
				bu = bu.B()
				v = bu.XY()// v=bu.kill()
				p = M.p([[0, 100], [-100, 0], [0, -100], [100, 0]]).ger(v)
				w.rad(v.x, v.y, 15, function (f) {
					f.sub(p)
				})//t.fs(function(f){f.sub(p)})
				t.fs(function (f) {
					f.C($r())
				})
			})
	/*
	 //pol
	 w.D(200,300).pol({
	 v:[[0,100],[0,-100],[200,-150],[200,150]],
	 c:'y',C:'w',l:5,
	 bm:1})
	 w.D(800,300).pol({
	 v:[
	 [[5,100],[0,-100],[200,-150],[200,150]],
	 [[-50,50],[-50,-100],[450,-50],[450,50]]
	 ],
	 c:'b',C:'X',
	 bm:1})
	
	
	
	 b=w.D(100,300)
	 pf = b.pol({s:1, C:'y',
	 v:[[-200,-100],[0,-200],[100, -100]] })
	 pfs =  b.pol({s:1, C: 'o',
	 v: [  [-100, 0],  [0, -200],  [100, 20],    [0, -150] ]})
	
	
	 cf = b.cir({k:'cir', r:100, x:200, y:-100, d:.2, b:.8, f:100, C:'x'})
	 rf = b.rec({x:100, y:100,w:10,  h:100,   C:'x'})
	 */
	/*
	 //turtle
	 turtle =[
	 ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
	 ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
	 ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
	 ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
	 ['x', 10, 55,-12],
	 ['u', 30,40, 75,-12]]
	 w.D(400, 280,turtle, '-')  //this changes the data object for future uses !!!
	 w.D(600, 280, [
	 ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
	 ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
	 ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
	 ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
	 ['x', 10, 55,-12, '-'],
	 ['u', 30,40, 75,-12 ,'-']])
	 */
}
SEB = function () {
	W({g: 1})//w.show(function(){return b.num()})
	b = w.D(800, 300, 'r', 200, 800).stat().K('terr')
	y = w.y().lD(3).X(1100)
	p = w.p(200, 400).K('jason');
	//setTimeout(function () {p.sprite.sXY(.5)}, 1000)
	can = true
	w.b(function (cx) {
		var fixt, j, bull, terr, bX, bY, br
		if (fixt = cx.w('bul', 'terr')) {
			bull = fixt[0].B()
			terr = fixt[1].B()
			bX = bull.X()
			bY = bull.Y()
			bull.kill()
			if (can) {
				can = false
				// b.minusPolyCirc(bX, bY, 100, 7)
				poly = M.p(_.m(b2d.pC(100, 7), function (v) {
					return [v.x + b.X(), v.y + b.Y()]
				}))
				// verts = b.sub(poly)
				br = w.pC(bX, bY, 100, 7)  // b.sub(br) // b.verts not working :(
				b.sub(br, '-') // br.kill()
				//  b.color('r')
				can = true
			}
		}
		else if (fixt = cx.w('jason', 'bul')) {
			$l('bullet hit jason!!!!');
			j = fixt[0].body();
			//j.sprite.tween([{sxy:20, r:100}, 1000])
		}
	})
	f = function () {
		v = h.verts()
		v.unshift('b')
		v.unshift(200)
		v.unshift(200)
		w.B.apply(w, v)
	}
	killIfSmallx = function (f) {
		var area = f.area();
		if (area < 20) {
			$l('too small: ' + area);
			f.kill()
		}
	}
}
TERREASEL = function () {
	z()
	s = stage = $St(1600, 600).A()
	h = s.h()
	h.f('b').dc(200, 200, 10)
	h2 = s.h().X(700)
	h2.f('b').dc(0, 0, 10)
	tile = function (i, j) {
		return [V(-5 + i, 130 + j), V(-5 + i, 80 + j), V(45 + i, 80 + j), V(45 + i, 130 + j)]
	}   // lower left //upper left//upper right//lower right
	draw = function () {
		terr = []
		_.t(13, function (i) {
			_.t(8, function (j) {
				terr.push(tile(i * 50, j * 50))
			})
		})
		h.drawPolygons(terr, 'b', 'r')
	}
	draw()
	t = M.p(terr[101])
	doExplosion = function (e) {
		v = V(e.stageX, e.stageY)
		exP = circ(v, 100)
		h.drawPolygon(exP, 'z')
		c = Math.p(exP) // for each existing terrain polygon, check the difference between the polygon itself and the
		// explosion polygon. This should be optimized in some way, checking only for terrain polygons
		// which are actually affected by the explosion.
		// Then we remove the terrain polygon from the array, and we add the resulting polygon(s) after
		// difference is calculated.
		iX = c.intersection(t)
		h2.drawPolygon(iX.verts())
		for (var i = terr.length - 1; i >= 0; i--) {
			totalArea = 0
		}
	} // resultPolygons =   terr[i].intersection(exP)// terr.splice(i,1)// for (var j =0; j<resultPolygons.length; j++) {terr.push(resultPolygons[j])}
	circ = function (v, rad, prec) {
		prec = N(prec) ? prec : 20
		arr = [];
		ang = 2 * Math.PI / prec
		_.times(prec, function (i) {
			pX = v.x + rad * Math.cos(ang * i)
			pY = v.y + rad * Math.sin(ang * i)
			arr.push(V(pX, pY))
		})
		return arr
	} // listeners: basically we destroy the terrain with a mouse click or a mouse drag
	// stage.on('mousedown', function(){stage.on('mousemove', doExplosion)})
	// stage.on('mouseup', function(){stage.off('mousemove', doExplosion)})
	stage.on('click', doExplosion)
	vv = [V(645, 480), V(595, 480), V(595, 430), V(645, 430)] //lower right//lower left//upper left//upper right
	h.drawPolygon(vv, 'z')
	vvv = [V(645, 380), V(595, 380), V(595, 372), V(617, 369), V(645, 373)]
	h.drawPolygon(vvv, 'z')
}
TERR = function () {
	W()
	explosion = function (x, y) {
		var c, b
		c = w.pC(x, y, 30, 5)
		b = b2d.sep(circ(V(0, 0), 30, 5)).XY(x, y)
		return {c: c, b: b}
	}
	sep = b2d.sep()
	terr = w.ter()
	w.dot(420, 200);
	w.dot(410, 210)
	t = terr[103]
	/*
	
	
	
	 s = b2d.sep(t.b.f().vs()).stat()//.XY(100,100)
	 exp = explosion(740, 395)
	 M.p(exp.cir)
	
	 dif = t.poly.D(exp.cir)
	
	 t.b.f().kill()
	
	
	 bb = b2d.sep(t.b, dif.vs()).stat().XY(0, 0)
	
	
	 // setTimeout( function(){ t.bod.X(20) }, 2000)
	
	 */
}
TER = function () {
	W().C('z')
	terr = w.ter()
	w.dot(420, 200);
	w.dot(410, 210)
	t = terr[103]
	fn = function (f) {
		f.B().kill()
	}
	o = {x1: 550, y1: 250, x2: 600, y2: 500, fn: fn}
	// w.Q(o)
	w.rad(550, 250, 35, fn)
}
OBST = OBSTACLES = function () {
	W(10).Y()
	_.t(20, function () {
		w.S(R(500), R(500), $r(), 20)
	})
}
BIG = BIGSHIP = function () {
	W([1200, 600, 2400, 600], {g: 0})
	w.y({
		c: 'b',
		sc: 20
	}, '+')
}
AUTOGAME = function () {
	W({w: 0, t: 0}).P()
	setup = function () {
		score = 0
		p.XY(350, 100)
		p.lV(0, 0)
		p.cn('j')
		p.d(.1).r(1).fr(0)
		w.s.XY(0, 0)
	}
	setup()
	T.t(function () {
		w.s.X(4, '-');
		if (p.relPos() < -100) {
			setup()
		}
	})//.pen(score++)
	w.ramps()
}
MARIOS = function () {
	W().P().P().P()
}
HIDESEEK = function () {
	W([1200, 600, 1400, 1200], {g: 300, t: 0})
	w.S(700, 1000, 'r', 800, 20)
	w.S(500, 800, 'g', 200, 20)
	w.S(900, 600, 'x', 200, 20)
	p = w.p(700, 600)
	w.fg.A(p.sp())
	w.track(p, 600, 400,
			{x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
}
COLSHIP = function () {
	W().G(1)//.C('z').pen('welcome to tensor (damping) controller - the timing here is amazing!')
	y = w.y()
	co = w.tCo()
	co.B(
			r = w.D(100, 100, 'r', 100).lV(10, 20).grp(-1).lD(.2),
			b = w.D(500, 500, 'b', 90).lV(-10, -20).grp(-1).lD(.2),
			y = w.D(300, 300, 'y', 70).lV(-10, -20).grp(-1).lD(.2)
	)
	o = w.D(300, 300, 'o', 70).lV(-10, -20).grp(-1).lD(.2)
	_.t(30, function () {
		var b = w.D(400, R(300, 100), 'o', 20)
		b.lV(10, 20).lD(0)
		b.lV(10, 20)
		b.f().grp(-1)
		co.B(b)
	})
	y.grp('-1')
	w.r_.cl(function (f) {
		f.C('b');
		co.xB(f)
	})
	l = w.m_controllerList.GetBodyList()
}
WAR = function () {
	W({g: 0})
	var n = 0, x = 150, Y = 150
	w.cl('bul', 'bad', function (bad) {
		this.B().kill();
		bad.B().kill()
	})
	_.t(15, function () {
		w.y($r(), x += 4, Y += 2, 3, '-')
				.K('bad').rt(R(90))
				.push(20, '+')
				.shtEv(300, 'deathBall')
	})
}
STUM = function () {
	W({g: 3})
	y = w.y(300, 400, 3, '-')
	_.ev(.1, function () {
		var v = y.vec(0, 1.5)
		v = V(
				M.tD(v.x),
				M.tD(v.y)
		)
		y.I(0, v.y / 5).rt(2, '+')
	})
	//arm
	b = w.S(300, 300, 20, 200)
	a = w.S(300, 300, [['b', 200, 50, 100, 0]])
	_.ev(.1, function () {
		a.rt(1, '+')
	})
}
TOW = TOWARD = function () {
	W({g: 0}).C('z').Y()
	ball = w.D(500, 300, 'r', 100)
	bY = w.y('b', 100, 200, 6, '-')
	bY.shtEv(.2)
	//y.aD(1).lD(1).r(0).fr(1).K('guy')
	T.t(function () {
		bY.tow(ball.X(), ball.Y(), 9)
		bY.rTow(y)
	})
	return
	_.t(5, function () {
		w.y('b', R(500, 50), R(500, 50))
	})
	w.b(function (cx) {
		cx.w('ship', 'bul', function (bul, cx) {
			this.kill()
		})
	})
	w.D(200, 200, 'b', 80).d(1).K('bad')
	w.D(200, 200, 'r', 150, 150).d(1).K('bad')
	w.cl('bul', 'bad', function (b) {
		if (this.B()) {
			this.B().kill()
		}
		if (b.B()) {
			b.B().kill()
		}
	})
}
TRAP = function () {
	W(0).C('r')
	co = w.tCo()
	y = w.y()
	rot = 45
	bg = w.y('b', 500, 300, '-')
	bg.shtEv()
	bg.stat()
	T.t(function () {
		bg.rTow(y)
	})
	_.t(3, function () {
		co.B(
				w.y('z', R(500, 50), R(300, 50), '-').lV(10, 20).lD(0)
				//  w.D(400,300, 'z',10,10)
		)
	})
}
STAB = function () {
	W({g: 0})
	w.S(200, 200, 'b', 50, 260)
	w.S(140, 200, 'd', 140, 50)
	co = w.tCo();
	_.t(10, function () {
		co.B(
				w.D(R(1000, 100), 300, 'x', 30).lV(10, 20).lD(0))
	})
	hits = 0
	y = w.y().K('ship').lD(5)
	bg = w.y('b', 500, 300, '-').d(3).lD(2).K('bg').aD(.2)
	bg.rotTowards = function (y) {
		var b = this, a
		a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
		if (y.Y() > b.Y()) {
			a += 180
		}
		b.rt(R(40, a - 20))
	}
	_.ev(.5, function () {
		bg.aV(0);
		bg.rotTowards(y)
	})
	bg.push(50, '+')
	T.t(function () {
		_.t(20, function () {
			bg.I()
		})
	})
	w.b(function (cx) {
		var i
		if (cx.w('ship', 'bg')) {
			i = cx.m().m_points[0].m()
			_.in(.1,
					(
					M.lD(V(i.x, i.y), V(y.X(), y.Y())) >
					M.lD(V(i.x, i.y), V(bg.X(), bg.Y()))
					) ?
							function () {
								hits++;
								w.C('g');
								bg.XY(300, 300);
								y.XY(700, 400)
							}
							:
							function () {
								w.C('p');
								bg.XY(700, 400);
								y.XY(100)
							})
		}
	})
	//w.show(function(){return 'hits: '+ hits})
}
SHP = function () {
	W()
	y = w.y()
}
STUM = function () {
	W({g: 3})
	y = w.y(300, 400, 3, '-')
	_.ev(.1, function () {
		var v = y.vec(0, 1.5)
		v = V(
				M.tD(v.x),
				M.tD(v.y)
		)
		y.I(0, v.y / 5).rt(2, '+')
	})
	//arm
	b = w.S(300, 300, 20, 200)
	a = w.S(300, 300, [['b', 200, 50, 100, 0]])
	_.ev(.1, function () {
		a.rt(1, '+')
	})
}
TOW = TOWARD = function () {
	W({g: 0}).C('z').Y()
	ball = w.D(500, 300, 'r', 100)
	bY = w.y('b', 100, 200, 6, '-')
	bY.shtEv(.2)
	//y.aD(1).lD(1).r(0).fr(1).K('guy')
	T.t(function () {
		bY.tow(ball.X(), ball.Y(), 9)
		bY.rTow(y)
	})
	return
	_.t(5, function () {
		w.y('b', R(500, 50), R(500, 50))
	})
	w.b(function (cx) {
		cx.w('ship', 'bul', function (bul, cx) {
			this.kill()
		})
	})
	w.D(200, 200, 'b', 80).d(1).K('bad')
	w.D(200, 200, 'r', 150, 150).d(1).K('bad')
	w.cl('bul', 'bad', function (b) {
		if (this.B()) {
			this.B().kill()
		}
		if (b.B()) {
			b.B().kill()
		}
	})
}
OBST = OBSTACLES = function () {
	W(10).Y()
	_.t(20, function () {
		w.S(R(500), R(500), $r(), 20)
	})
}
BIG = BIGSHIP = function () {
	W([1200, 600, 2400, 600], {g: 0})
	w.y({
		c: 'b',
		sc: 20
	}, '+')
}
COLSHIP = function () {
	W().G(1)//.C('z').pen('welcome to tensor (damping) controller - the timing here is amazing!')
	y = w.y()
	co = w.tCo()
	co.B(
			r = w.D(100, 100, 'r', 100).lV(10, 20).grp(-1).lD(.2),
			b = w.D(500, 500, 'b', 90).lV(-10, -20).grp(-1).lD(.2),
			y = w.D(300, 300, 'y', 70).lV(-10, -20).grp(-1).lD(.2)
	)
	o = w.D(300, 300, 'o', 70).lV(-10, -20).grp(-1).lD(.2)
	_.t(30, function () {
		var b = w.D(400, R(300, 100), 'o', 20)
		b.lV(10, 20).lD(0)
		b.lV(10, 20)
		b.f().grp(-1)
		co.B(b)
	})
	y.grp('-1')
	w.r_.cl(function (f) {
		f.C('b');
		co.xB(f)
	})
	l = w.m_controllerList.GetBodyList()
}
WAR = function () {
	W({g: 0})
	var n = 0, x = 150, Y = 150
	w.cl('bul', 'bad', function (bad) {
		this.B().kill();
		bad.B().kill()
	})
	_.t(15, function () {
		w.y($r(), x += 4, Y += 2, 3, '-')
				.K('bad').rt(R(90))
				.push(20, '+')
				.shtEv(300, 'deathBall')
	})
}
TRAP = function () {
	W(0).C('r')
	co = w.tCo()
	y = w.y()
	rot = 45
	bg = w.y('b', 500, 300, '-')
	bg.shtEv()
	bg.stat()
	T.t(function () {
		bg.rTow(y)
	})
	_.t(3, function () {
		co.B(
				w.y('z', R(500, 50), R(300, 50), '-').lV(10, 20).lD(0)
				//  w.D(400,300, 'z',10,10)
		)
	})
}
STAB = function () {
	W({g: 0})
	w.S(200, 200, 'b', 50, 260)
	w.S(140, 200, 'd', 140, 50)
	co = w.tCo();
	_.t(10, function () {
		co.B(
				w.D(R(1000, 100), 300, 'x', 30).lV(10, 20).lD(0))
	})
	hits = 0
	y = w.y().K('ship').lD(5)
	bg = w.y('b', 500, 300, '-').d(3).lD(2).K('bg').aD(.2)
	bg.rotTowards = function (y) {
		var b = this, a
		a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
		if (y.Y() > b.Y()) {
			a += 180
		}
		b.rt(R(40, a - 20))
	}
	_.ev(.5, function () {
		bg.aV(0);
		bg.rotTowards(y)
	})
	bg.push(50, '+')
	T.t(function () {
		_.t(20, function () {
			bg.I()
		})
	})
	w.b(function (cx) {
		var i
		if (cx.w('ship', 'bg')) {
			i = cx.m().m_points[0].m()
			_.in(.1,
					(
					M.lD(V(i.x, i.y), V(y.X(), y.Y())) >
					M.lD(V(i.x, i.y), V(bg.X(), bg.Y()))
					) ?
							function () {
								hits++;
								w.C('g');
								bg.XY(300, 300);
								y.XY(700, 400)
							}
							:
							function () {
								w.C('p');
								bg.XY(700, 400);
								y.XY(100)
							})
		}
	})
	//w.show(function(){return 'hits: '+ hits})
}
WBF = function () {
	W()
	b = w.D(400, 300)
	//b.f('r', 100,'-')
	b.f([['r', 100, '-']])
}
FXC = function () {
	W().C('z')
	b = w.D()
	f = b.cir({c: 'o'})
	b1 = w.D(300, 400)
	f1 = b1.pol(v1)[0]
	_.in(function () {
		f.C($r())
		f1.C($r())
	})
}
BINDSPR = function () {
	W()
	b = w.D(100, 300).cir(120)
	$.i('me', function (i) {
		w.g.A(sp = $Bm(i))
		b.bS(sp.rC())
		w.g.A(sp1 = $Bm(i))
		b.bS(sp1)
	})
}
BINDSPP = function () {
	W()
	b = w.D(100, 300).cir(120)
	Q('guy', function () {
		var i = Q.i('guy')
		w.g.A(sp = $Bm(i))
		b.bS(sp.rC())
		w.g.A(sp1 = $Bm(i))
		b.bS(sp1)
	})
}
IMP = function () {
	W({g: 0, w: 0}).Y()
	// y.rt(90).XY(200,240)
	w.D(200, 235, 'b', 10).lV(20, 0).d(10)
	w.D(900, 200, 'r', 100, 100).rt(45)
	r = w.D(1100, 500, 'r', [[80], [20, 300]]).d(.1)
	r.$(function () {
		this.B().I(100, -2000)
	})
	f = r.f()
	w.i.dot(856, 240)
	/*
	 s = b2d.Seg(0,0,1200, 600)
	 s1 = b2d.Seg(1200,0, 0, 600)
	 lArr =  'the shape world transform'
	 nl = '2Vec2 — returns the hit fraction.'
	 // You can use this to compute the contact point
	 // p = (1 - lambda) segment.p1 + lambda segment.p2.
	 sg = ''//segment:b2Segment — returns the normal at the contact point. If there is no intersection, the normal is not set.
	 maxLam = 1000000//:Number — defines the begin and end point of the ray cast.
	 s.TestSegment(lArr, nl, s1, maxLam )
	 */
	ip = b2d.rCIp(0, 0, 1200, 600)
	op = b2d.rCOp(1, 2)
	res = f.rC(op, ip)
}
RAY = function () {
	W().C('z')
	w.S(200, 200, 'f', 100);
	w.S(500, 500, 'l', 160, 60)
	rs = w.ray(0, 0, 800, 800)
	_.in(function () {
		w.ray(0, 0, 500, 500, function (f) {
			f.C('g')
		})
		w.ray(0, 0, 500, 500, function (f) {
			f.B().bS('me')
		}, '-')
		w.ray(0, 0, 500, 500, function (f) {
			f.B().bS('sun')
		}, '+')
	})
}
RC = function () {
	W();
	var p1, p2, d, l
	w.me(400, 100);
	w.S(200, 200, 'r', 400, 20)
	w.$(function (v) {
		if (!p1) {
			p1 = v;
			return
		}
		if (!p2) {
			p2 = v
		} else {
			p1 = p2;
			p2 = v
		}
		w.i.e(function (c) {
			if (c.of('dot') || c.of('line')) {
				c.rm()
			}
			// if( c.K() == 'dot' || c.K()=='line' ){c.rm()}
		})
		w.d('b', p1);
		w.d('r', p2);
		w.l(p1.x, p1.y, p2.x, p2.y).K('line')
		w.rC(function (f) {
			f.B().dot()
		}, p1, p2)
	})
}
BPL = function () {
	W()
	vs1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	]
	w.D(200, 200).pol(vs1)
}
BPOL = function () {
	W()
	vs1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	]
	w.D(200, 400).pol(vs1)
	w.D(800, 400).pol($pD(vs1))
	w.D(800, 400).pol('o', $pD(vs1))
	w.D(500, 400).pol({vs: vs1, c: 'r'})
	w.D(800, 400).pol({vs: $pD(vs1), c: 'b'})
}
FSUM = function () {
	W(1000, 500)
	b = w.D(300, 400)
	f = b.rec(20, 130)
	b.rec(130, 20) //b.rec(20, 130, 30, 10, 30) cant make angle recs???
	sum = f.sum()
	pts = sum.from(b)
	b1 = w.D(600, 300)
	f1 = b1.pol({
		v: pts,
		c: 'y'
	})
	//b1.C('y')
}
MEETY = function () {
	W([1200, 600], {g: 10}).y(100, 300).C('x')
	w.S(500, 300, $r(), 200, 800).expl('*')
}
ADD = function () {
	W().P()
	b = w.brick().C('r')
	p = M.p(b)
	//v=p.vs()
	//p.reg(b)
	w.S(100, 0).pol('z', M.p(b))
	_.in(function () {
		// w.S(0,0).pol('y',v)
	})
	//v1= v.add(400,500)
}
PRISM0 = function () {
	W(5)
	p = w.player(500, 200, 'thrust').den(1).fric(1)
	j = w.pJ({
		a: w.S(400, 300, 's', 40, 40).den(1).fric(1),
		aV: [-30, 2],
		b: w.D(500, 200, 'd', 200, 40).den(1).K('box'),
		ax: V(1, -2),
		rA: 45
	})
	speed = 10
	j.mt(speed)
	w.beg(function (cx) {
		cx.with('box',
				function () {
					speed *= -1
				})
		j.mt(speed)
	})
}
PULLEY = function () {
	W()
	b1 = w.D(300, 300, 'r', 200, 10)
	b2 = w.D(500, 300, 'b', 200, 10)
	var pulley = PulleyJoint().init(
			b1, b2,
			V(20, 1), V(25, 2), b1.wC(), b2.wC(), 1).lenA(8).lenB(4).maxLenA(10).maxLenB(5)
	w.J(pulley)   //makeMe()  //makeTim(10)   //makeCar()
}
ROPEJ = function () {
	function b2RopeJoint() {
		b2RopeJoint.b2RopeJoint.apply(this, arguments);
		if (this.constructor === b2RopeJoint) this.b2RopeJoint.apply(this, arguments);
	};
	Box2D.Dynamics.Joints.b2RopeJoint = b2RopeJoint;
	function b2RopeJointDef() {
		b2RopeJointDef.b2RopeJointDef.apply(this, arguments);
		if (this.constructor === b2RopeJointDef) this.b2RopeJointDef.apply(this, arguments);
	};
	Box2D.Dynamics.Joints.b2RopeJointDef = b2RopeJointDef;
	b2RopeJoint = Box2D.Dynamics.Joints.b2RopeJoint
	b2RopeJointDef = Box2D.Dynamics.Joints.b2RopeJointDef
	Box2D.inherit(b2RopeJoint, Box2D.Dynamics.Joints.b2Joint);
	b2RopeJoint.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	b2RopeJoint.b2RopeJoint = function () {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.m_localAnchor1 = new b2Vec2();
		this.m_localAnchor2 = new b2Vec2();
		this.m_u = new b2Vec2();
	};
	b2RopeJoint.prototype.GetAnchorA = function () {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
	}
	b2RopeJoint.prototype.GetAnchorB = function () {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
	}
	b2RopeJoint.prototype.GetReactionForce = function (inv_dt) {
		if (inv_dt === undefined) inv_dt = 0;
		return new b2Vec2(inv_dt * this.m_impulse * this.m_u.x, inv_dt * this.m_impulse * this.m_u.y);
	}
	b2RopeJoint.prototype.GetReactionTorque = function (inv_dt) {
		if (inv_dt === undefined) inv_dt = 0;
		return 0.0;
	}
	b2RopeJoint.prototype.GetLength = function () {
		return this.m_length;
	}
	b2RopeJoint.prototype.SetLength = function (length) {
		if (length === undefined) length = 0;
		this.m_length = length;
	}
	b2RopeJoint.prototype.GetFrequency = function () {
		return this.m_frequencyHz;
	}
	b2RopeJoint.prototype.SetFrequency = function (hz) {
		if (hz === undefined) hz = 0;
		this.m_frequencyHz = hz;
	}
	b2RopeJoint.prototype.GetDampingRatio = function () {
		return this.m_dampingRatio;
	}
	b2RopeJoint.prototype.SetDampingRatio = function (ratio) {
		if (ratio === undefined) ratio = 0;
		this.m_dampingRatio = ratio;
	}
	b2RopeJoint.prototype.b2RopeJoint = function (def) {
		this.__super.b2Joint.call(this, def);
		var tMat;
		var tX = 0;
		var tY = 0;
		this.m_localAnchor1.SetV(def.localAnchorA);
		this.m_localAnchor2.SetV(def.localAnchorB);
		this.m_frequencyHz = def.frequencyHz;
		this.m_dampingRatio = def.dampingRatio;
		this.m_impulse = 0.0;
		this.m_gamma = 0.0;
		this.m_bias = 0.0;
		this.m_length = def.length;
		this.m_maxLength = def.maxLength
		this.m_limitState = b2Joint.e_inactiveLimit;
	}
	b2RopeJoint.prototype.InitVelocityConstraints = function (step) {
		var tMat;
		var tX = 0;
		var bA = this.m_bodyA;
		var bB = this.m_bodyB;
		tMat = bA.m_xf.R;
		var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		tMat = bB.m_xf.R;
		var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		this.m_u.x = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
		this.m_u.y = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
		var length = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
		this.m_length = length;
		var C = this.m_length - this.m_maxLength;
		if (C > 0) {
			this.m_limitState = b2Joint.e_atUpperLimit;
		} else {
			this.m_limitState = b2Joint.e_inactiveLimit;
		}
		if (length > b2Settings.b2_linearSlop) {
			this.m_u.Multiply(1.0 / length);
		} else {
			this.m_u.SetZero();
			this.m_mass = 0.0;
			this.m_impulse = 0.0;
			return;
		}
		var cr1u = (r1X * this.m_u.y - r1Y * this.m_u.x);
		var cr2u = (r2X * this.m_u.y - r2Y * this.m_u.x);
		var invMass = bA.m_invMass + bA.m_invI * cr1u * cr1u + bB.m_invMass + bB.m_invI * cr2u * cr2u;
		this.m_mass = invMass != 0.0 ? 1.0 / invMass : 0.0;
		if (step.warmStarting) {
			this.m_impulse *= step.dtRatio;
			var PX = this.m_impulse * this.m_u.x;
			var PY = this.m_impulse * this.m_u.y;
			bA.m_linearVelocity.x -= bA.m_invMass * PX;
			bA.m_linearVelocity.y -= bA.m_invMass * PY;
			bA.m_angularVelocity -= bA.m_invI * (r1X * PY - r1Y * PX);
			bB.m_linearVelocity.x += bB.m_invMass * PX;
			bB.m_linearVelocity.y += bB.m_invMass * PY;
			bB.m_angularVelocity += bB.m_invI * (r2X * PY - r2Y * PX);
		}
		else {
			this.m_impulse = 0.0;
		}
	}
	b2RopeJoint.prototype.SolveVelocityConstraints = function (step) {
		var tMat;
		var oldImpulse = 0.0;
		var bA = this.m_bodyA;
		var bB = this.m_bodyB;
		tMat = bA.m_xf.R;
		var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
		var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		tMat = bB.m_xf.R;
		var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		var v1X = bA.m_linearVelocity.x + ((-bA.m_angularVelocity * r1Y));
		var v1Y = bA.m_linearVelocity.y + (bA.m_angularVelocity * r1X);
		var v2X = bB.m_linearVelocity.x + ((-bB.m_angularVelocity * r2Y));
		var v2Y = bB.m_linearVelocity.y + (bB.m_angularVelocity * r2X);
		var C = this.m_length - this.m_maxLength;
		var Cdot = (this.m_u.x * (v2X - v1X) + this.m_u.y * (v2Y - v1Y));
		if (C < 0.0) {
			Cdot += step.inv_dt * C;
		}
		var impulse = (-this.m_mass * (Cdot + this.m_bias + this.m_gamma * this.m_impulse));
		oldImpulse = this.m_impulse;
		this.m_impulse = Math.min(0.0, this.m_impulse + impulse);
		impulse = this.m_impulse - oldImpulse;
		var PX = impulse * this.m_u.x;
		var PY = impulse * this.m_u.y;
		bA.m_linearVelocity.x -= bA.m_invMass * PX;
		bA.m_linearVelocity.y -= bA.m_invMass * PY;
		bA.m_angularVelocity -= bA.m_invI * (r1X * PY - r1Y * PX);
		bB.m_linearVelocity.x += bB.m_invMass * PX;
		bB.m_linearVelocity.y += bB.m_invMass * PY;
		bB.m_angularVelocity += bB.m_invI * (r2X * PY - r2Y * PX);
	}
	b2RopeJoint.prototype.SolvePositionConstraints = function (baumgarte) {
		if (baumgarte === undefined) baumgarte = 0;
		var tMat;
		if (this.m_frequencyHz > 0.0) {
			return true;
		}
		var bA = this.m_bodyA;
		var bB = this.m_bodyB;
		tMat = bA.m_xf.R;
		var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
		var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
		var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
		r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
		r1X = tX;
		tMat = bB.m_xf.R;
		var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
		var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
		tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
		r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
		r2X = tX;
		var dX = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
		var dY = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
		var length = Math.sqrt(dX * dX + dY * dY);
		dX /= length;
		dY /= length;
		var C = length - this.m_maxLength;
		C = b2Math.Clamp(C, 0.0, b2Settings.b2_maxLinearCorrection);
		var impulse = (-this.m_mass * C);
		this.m_u.Set(dX, dY);
		var PX = impulse * this.m_u.x;
		var PY = impulse * this.m_u.y;
		bA.m_sweep.c.x -= bA.m_invMass * PX;
		bA.m_sweep.c.y -= bA.m_invMass * PY;
		bA.m_sweep.a -= bA.m_invI * (r1X * PY - r1Y * PX);
		bB.m_sweep.c.x += bB.m_invMass * PX;
		bB.m_sweep.c.y += bB.m_invMass * PY;
		bB.m_sweep.a += bB.m_invI * (r2X * PY - r2Y * PX);
		bA.SynchronizeTransform();
		bB.SynchronizeTransform();
		return length - this.m_maxLength < b2Settings.b2_linearSlop;
	}
	Box2D.inherit(b2RopeJointDef, Box2D.Dynamics.Joints.b2JointDef);
	b2RopeJointDef.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	b2RopeJointDef.b2RopeJointDef = function () {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
		this.localAnchorA = new b2Vec2();
		this.localAnchorB = new b2Vec2();
	};
	b2RopeJointDef.prototype.b2RopeJointDef = function () {
		this.__super.b2JointDef.call(this);
		this.type = b2Joint.e_ropeJoint;
		this.length = 1.0;
		this.frequencyHz = 0.0;
		this.dampingRatio = 0.0;
	}
	b2RopeJointDef.prototype.Initialize = function (bA, bB, anchorA, anchorB) {
		this.bodyA = bA;
		this.bodyB = bB;
		this.localAnchorA.SetV(this.bodyA.GetLocalPoint(anchorA));
		this.localAnchorB.SetV(this.bodyB.GetLocalPoint(anchorB));
		var dX = anchorB.x - anchorA.x;
		var dY = anchorB.y - anchorA.y;
		this.length = Math.sqrt(dX * dX + dY * dY);
		this.frequencyHz = 0.0;
		this.dampingRatio = 0.0;
	}
	b2Joint.Create = function (def, allocator) {
		var joint = null;
		switch (def.type) {
			case b2Joint.e_ropeJoint:
			{
				joint = new b2RopeJoint((def instanceof b2RopeJointDef ? def : null));
			}
				break;
			case b2Joint.e_distanceJoint:
			{
				joint = new b2DistanceJoint((def instanceof b2DistanceJointDef ? def : null));
			}
				break;
			case b2Joint.e_mouseJoint:
			{
				joint = new b2MouseJoint((def instanceof b2MouseJointDef ? def : null));
			}
				break;
			case b2Joint.e_prismaticJoint:
			{
				joint = new b2PrismaticJoint((def instanceof b2PrismaticJointDef ? def : null));
			}
				break;
			case b2Joint.e_revoluteJoint:
			{
				joint = new b2RevoluteJoint((def instanceof b2RevoluteJointDef ? def : null));
			}
				break;
			case b2Joint.e_pulleyJoint:
			{
				joint = new b2PulleyJoint((def instanceof b2PulleyJointDef ? def : null));
			}
				break;
			case b2Joint.e_gearJoint:
			{
				joint = new b2GearJoint((def instanceof b2GearJointDef ? def : null));
			}
				break;
			case b2Joint.e_lineJoint:
			{
				joint = new b2LineJoint((def instanceof b2LineJointDef ? def : null));
			}
				break;
			case b2Joint.e_weldJoint:
			{
				joint = new b2WeldJoint((def instanceof b2WeldJointDef ? def : null));
			}
				break;
			case b2Joint.e_frictionJoint:
			{
				joint = new b2FrictionJoint((def instanceof b2FrictionJointDef ? def : null));
			}
				break;
			default:
				break;
		}
		return joint;
	}
	Box2D.postDefs.push(function () {
		Box2D.Dynamics.Joints.b2Joint.e_unknownJoint = 0;
		Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint = 1;
		Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint = 2;
		Box2D.Dynamics.Joints.b2Joint.e_distanceJoint = 3;
		Box2D.Dynamics.Joints.b2Joint.e_ropeJoint = 10;
		Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint = 4;
		Box2D.Dynamics.Joints.b2Joint.e_mouseJoint = 5;
		Box2D.Dynamics.Joints.b2Joint.e_gearJoint = 6;
		Box2D.Dynamics.Joints.b2Joint.e_lineJoint = 7;
		Box2D.Dynamics.Joints.b2Joint.e_weldJoint = 8;
		Box2D.Dynamics.Joints.b2Joint.e_frictionJoint = 9;
		Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit = 0;
		Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit = 1;
		Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit = 2;
		Box2D.Dynamics.Joints.b2Joint.e_equalLimits = 3;
	});
}
FRICJ = function () {
	w = b2d.W({g: 0})
	y = w.ship().XY(200, 200)
	w.right.kill();
	w.left.kill();
	y.warp2()
	//  Set the two anchor points to zero so the friction doesn't have any direction.
	frictionJoint = new b2d.Joints.b2FrictionJointDef()
	frictionJoint.localAnchorA = V(0, 0)
	frictionJoint.localAnchorB = V(0, 0)
	frictionJoint.bodyA = y//w.ball(100,100,50)
	frictionJoint.bodyB = b = w.ball(200, 200, 240).warp2()
	// 1200,400)//ASquareAsLargeAsTheAreaYouNeedFrictionIn
	frictionJoint.maxForce = 42.5; //This the most force the joint will apply to your object.
	// The faster its moving the more force applied
	frictionJoint.maxTorque = 0//4365; //Set to 0 to prevent rotation
	w.CreateJoint(frictionJoint)
	frictionJoint = new b2d.Joints.b2FrictionJointDef()
	frictionJoint.localAnchorA = V(0, 0)
	frictionJoint.localAnchorB = V(0, 0)
	frictionJoint.bodyA = y//w.ball(100,100,50)
	frictionJoint.bodyB = b2 = w.ball(200, 200, 40).warp2()
	// 1200,400)//ASquareAsLargeAsTheAreaYouNeedFrictionIn
	frictionJoint.maxForce = 42.5; //This the most force the joint will apply to your object.
	// The faster its moving the more force applied
	frictionJoint.maxTorque = 0//4365; //Set to 0 to prevent rotation
	w.CreateJoint(frictionJoint)
	w.ball(400, 500, 40)
	w.show(function () {
		return 'linVelX: ' + y.linVel().x.toFixed(0)
	})
	/*
	
	 How to add friction joint and which anchor point i have to set to zero?? –  Diken Sep 5 '12 at 7:05
	
	 Unlike surface friction between solids, air friction (drag) depends on the speed of the object, squared.
	
	 An easy way to model friction and drag
	
	 F(friction) = -k;
	 F(drag) = speed * speed * -k;
	 Both forces act in the opposite direction to the velocity of the object.
	
	 Notice that surface friction is a constant whereas air friction (drag) must be modified each frame according to the object speed (length of velocity vector)
	 */
}
DEMOGEAR = function () {
	W()
	w.Gear(
			w.rev(w.baa(100, 220, 40), w.bi(100, 220, 100, 20)),
			w.rev(w.baa(250, 220), w.bi(250, 220, 100, 20)), .5)
}
 