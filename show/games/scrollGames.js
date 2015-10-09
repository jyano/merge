SHO = function () {
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
ZMS = function () {
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
SLM = function () {
	W([800, 500, 2400, 500],
			{g: 0}).Z(1.5).Y(200, 200).showOff().bricks(
			[400, 300, 'r', 200, 100], [800, 300, 'z', 100, 100],
			[1200, 300, 'b', 300, 100], [1600, 300, 'z', 100, 100],
			[2000, 300, 'r', 200, 100])
	y.damp(1, 10).track()
	_.in(4, function () {
		y.bS('me', .5)
	}) //"y.bS('me',.5)"
	_.t(5, function () {
		w.p(100, 100)
	})
}
function street() {
	STT = function () {
		W([1200, 600, 1400, 1200], {g: 300, t: 0})
		w.S(700, 1000, 'r', 800, 20)
		w.S(500, 800, 'g', 200, 20)
		w.S(900, 600, 'x', 200, 20)
		p = w.p(700, 600)
		w.fg.A(p.sp())
		w.track(p, 600, 400,
				{x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
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
}
SPF = function () {
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
CPB = function () {//should zoom in when near cup
	CUP()
	b = w.D(w.W / 2, w.H / 2, 'w', [[10]]).r(.8).track()
	cjs.tick(function () {
		b.F(0, -20)
	})
	w.showOff()
}
AIR = function () {
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
CH5 = CHANGETRACKEE = function () {
	
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
AUT = AUTOGAME = function () {
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
HIDESEEK = HEEK = function () {
	HIDESEEK = HSK = function () {
		W([1200, 600, 1400, 1200], {g: 300, t: 0})
		w.S(700, 1000, 'r', 800, 20)
		w.S(500, 800, 'g', 200, 20)
		w.S(900, 600, 'x', 200, 20)
		p = w.p(700, 600)
		w.fg.A(p.sp())
		w.track(p, 600, 400,
				{x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
	}
	W([1200, 600, 1400, 1200], {g: 300, t: 0})
	w.S(700, 1000, 'r', 800, 20)
	w.S(500, 800, 'g', 200, 20)
	w.S(900, 600, 'x', 200, 20)
	p = w.p(700, 600)
	w.fg.A(p.sp())
	w.track(p, 600, 400,
			{x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
}
TALK = function () {
	W({g: 0, w: 0})
	score = 0
	shots = 0
	p = w.p(500, 300).stat()
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
function scrll() {
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
}
FLP = function () {
	W({w: 0, g: 50})
	w.S(800, 500, 'o', 100, 600).K('plat')
	w.S(1200, 0, 'o', 100, 600).K('plat')
	w.S(1600, 500, 'o', 100, 600).K('plat')
	w.S(2000, 0, 'o', 100, 600).K('plat')
	game = true
	p = w.p(300, 0).fixRot().cl('plat', function () {
		if (game) {
			$.pop('you suck!')
			game = false
		}
	})
	cjs.t(function () {
		p.lV(3);
		w.left(4)
	}) // odd way?  uses 'w.left' ???
	w.$(function () {
		p.I(0, -180)
	})
}
KSS = function () {
	W([1200, 600, 2400, 600], {g: 10})
	w.D(800, 300).cir({
		r: 120,
		C: 'y', l: 2, bf: 'me', ls: ['y', 'x']//?
	}).den(.1)
	y = w.ship(50, 50).C('d').mid()
	y2 = w.ship(100, 300).C('x').rot(180)
	//i thought i may want t for timer/ticker.. but time has no x and y !
	//move the stage by manipulating the trackee x,y
	//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
	w.tRightLeft()
	w.showOff()
	I(function changeT() {
		if (w.t == y2) {
			w.C('w');
			w.t = y
		} else {
			w.C('z');
			w.t = y2
		}
	}, 5000)
	b = w.D(100, 300)
	pf = b.pol({s: 1, C: 'y', v: [[-200, -100], [0, -200], [100, -100]]})
	pfs = b.pol({s: 1, C: 'o', v: [[-100, 0], [0, -200], [100, 20], [0, -150]]})
	cf = b.cir({k: 'cir', r: 100, x: 200, y: -100, d: .2, b: .8, f: 100, C: 'x'})
	rf = b.rec({x: 100, y: 100, w: 10, h: 100, C: 'x'})
	w.D(200, 300).pol({
		v: [[0, 100], [0, -100], [200, -150], [200, 150]],
		c: 'y', C: 'w', l: 5,
		bm: 1
	})
	//FROM POL ->0, -100]] })
	w.D(800, 300).pol({
		v: [
			[[5, 100], [0, -100], [200, -150], [200, 150]],
			[[-50, 50], [-50, -100], [450, -50], [450, 50]]
		],
		c: 'b', C: 'X',
		bm: 1
	})
}
SBP = function () {
	W([1200, 600, 2400, 600], {g: 10}).y('+')
	_.t(10, function (i) {
		w.D(100 + i * 100, 100)
				.cir({
					r: 35,
					lf: {c1: '*', c2: '*'}
				}).d(.1)
		w.D(100 + i * 100, 100).cir({
			r: 20,
			lf: 1
		}).d(.1)
	})
	_.t(10, function (i) {
		w.D(100 + i * 140, 160).cir({
			r: 50,
			rf: {
				c1: $r(),
				c2: $r(),
			}
		}).d(.1)
	})
}
WPN = function () {
	W([1200, 600, 2400, 600], {g: 0})
	w.S(400, 300, 'r', 200, 100)
	w.S(800, 300, 'z', 100, 100)
	w.S(1200, 300, 'b', 300, 100)
	w.S(1600, 300, 'z', 100, 100)
	w.S(2000, 300, 'r', 200, 100)
	b = w.D(100, 100, 'b', 30).lV(-10, -20).rest(.2)
	co = w.tCo().B(b.tr())
	_.t(10, function (i) {
		co.B(w.D(100 + 30 * i, 100, 'r', 30).lV(10, 20).r(.2))
	})
	y = w.y(100, 100).rt(120).aD(100)
	w.pan('*')
}
SPL = function () {
	W({g: 0, w: 0});
	Q(function () {
		s = w.s
		e = w.S(200, 200, 'p', 100)
				.d(1).r(2)
				.bS({i: q.b('sun'), sc: .13})
				.K('earth');
		eI = e.ch()
		// p= w.player(200,200,2.5, 'thrust').d(.4).aD(8).lD(.8)
		p = w.D(200, 200).cn('thrust').Bm('me', 0, 0, 0.25 * sc)
		w.dJ({a: p, b: e, l: 50, f: 100.15, cl: 1})
		T.t(function () {
			var sp,
					dx = e.X() - p.X(),
					dy = e.Y() - p.Y(),
					sc = cjs.cap(300 /
					M.sqrt(dx * dx + dy * dy), .3, 2)
			s.X(300 - sc * (p.X() - 300))
			s.Y(150 - sc * (p.Y() - 150))
		})
	})
}
SCG = function () {
	
	//no buffer to worry about
	//it lets u gradually move past the target point.. until hits limit
	W([1200, // x
		600,
		4800, // x
		1200
	], {g: 0, t: 0})
	w.S(1200, 300, 'r', 400, 100)
	w.S(1200, 900, 'r', 400, 100)
	w.S(1200, 600, 'w', [[400, 500, '-']])
	y = w.ship(200, 200).rot(120).damp(1, 10)
	w.track(y, 600, 300)
	// w.dot(600,300)
	//w.hud.dot(600,300)
//    w.dot(1200,600)
	//   w.hud.dot(1200,600)
	y.XY(1400, 600).rot(90).lD(0).lV(1)
}