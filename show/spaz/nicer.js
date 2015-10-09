CHM = function () {
	w.rec = function (x, y, W, H, c) {
		var w = this, g = G(arguments), b, o
		o = g.O ? g.f :
				N(g.s) ? {x: g.f, y: g.s, w: g.t, h: g[3], c: g[4]} :
				{w: g.f}
		o.x = N(o.x, w.hW)
		o.y = N(o.y, w.hH)
		o.w = N(o.w, 40)
		o.h = N(o.h, o.w)
		o.c = o.c || $r()
		b = w.D(o.x, o.y, o.c, o.w, o.h).K('box').DFB(.5, .5, 0)
		if (g.n) {
			b.sen(true)
		}
		return b
	}
	W({
		w: 0//, g:50
	})
	w.rR(0, 3)
	w.rR(100, 3)
	w.rR(100, 3)
	w.rR(200, 3)
	w.rR(300, 3)
	w.rR(400, 3)
	w.Q(function (f) {
		f.B().kill()
	}, 550, 250, 650, 350)
	w.Q(function (f) {
		f.B().kill()
	}, 350, 50, 450, 150)
	w.Q(function (f) {
		f.B().kill()
	}, 850, 50, 950, 150)
	y = w.y(600, 300).K('y')
	_.ev(1, function () {
		w.cir(R(20, 400), 80, 12, 'r').K('r')
		w.rec(R(20, 900), 100, 24, 24, 'b').K('b')
	})
	w.cl('bul', function (f) {
		var b = f.B()
		this.B().kill()
		if (b != y) {
			b.kill()
		}
	})
	w.cl('r', 'b', function () {
		y.stat()
		w.e(function (b) {
			if (b != y) {
				b.kill()
			}
		})
		alert('you win!')
	})
	y.cl('r', lose)
	y.cl('b', lose)
	function lose() {
		//w.pen('you lose')
		y.stat()
		w.e(function (b) {
			if (b != y) {
				b.kill()
			}
		})
		_.in(self)
	}
}
CRW = function () {
	W([1200, 600, 1400, 600], {}).C('p').P().P().P().P().P()
	n = 0
	p.track().cir({r: 10, c: 'y'}).bS('sun')
	j = w.wed(
			w.D(100, 200, 'x', 100, 200).r(1.5),
			w.D(200, 100, 'u', 200, 100))
	_.ev(2, function () {
		if (!j.destroyed) {
			j.destroy()
		}
		else {
			j = j.W().wed(j.A(), j.B())
		}
	})
}
BIO = function () {
	W().randRects()
	var dJ
	p = w.D(320, 460, 'b', 40, 80)
			.Bm('me', 0, 0, .2)
			.fR()
	var l, node
	w.mu(function () {
		dJ = dJ && w.j(dJ) // ??
		node = null
	})
	w.md(function (o) {
		if (o.f) {
			var cen = p.wC()
			dJ = w.dJ(p, o.b,
					cen.x, cen.y,
					o.x, o.y)
			node = o.b
		}
	})
	T.t(function () {
		if (dJ) {
			// $l(dJ.l())
			p.wake()
			dJ.l(dJ.l() * 0.97)
			if (l) {
				l.rm();
				l = null
			}
			l = w.l('w',
					p.X(), p.Y(), node.X(), node.Y()
			)
		}
	})
	SPOOM = function () {
		Q(function () {
			W({g: 0, w: 0});
			SCALE = 1//W:600, H:300,
			w.can.C('z')
			s = w.s
			_.t(80, function () {
				w.cir(R(2000, -750), R(1600, -600), 4, 'w').d(0).r(2).K('star')
			})
			s.rXY(300, 150)
			e = w.S(600, 300, 'p', 100).d(1).r(2).K('earth')
			e.gx = e.gx || w.g.ct()
			e.gx.A(Q.b('earth').rC().sXY(.13))
			eI = e.ch()
			//  p= w.me(200,200, 2.5).cn('thrust').d(.4).aD(8).lD(.8)
			p = w.D(200, 200, 'x', 100, 200)
			p.cn('thrust')
			p.Bm('me')
			j = w.dJ({
				a: p,
				b: e,
				l: 600,
				f: 2,
				d: 2,
				cl: 1
			})
			T.t(function () {
				var sp,
						wd = 300
				ht = 150
				dx = e.X() - p.X(),
						dy = e.Y() - p.Y(),
						sc = cjs.cap(300 / M.sqrt(dx * dx + dy * dy), .3, 2)
				s.X(wd - sc * (p.X() - wd))
				s.Y(ht - sc * (p.Y() - ht))
				s.sXY(sc)
				s.al(sc * 2);
				eI.al(sc)
			})
			s.twL(
					[{kx: 8}, 1000],
					[{kx: 0}, 1000],
					[{ky: 8}, 1000],
					[{ky: 0}, 1000])
			eI.twL([{r: 360}, 10000])
			eI.twL([{kx: 16}, 3000], [{kx: 0}, 3000])
			p.cl('star', function () {
				p.ch().tw(
						[{kx: 40}, 100],
						[{ky: 40}, 100],
						[{kx: 0, ky: 0}, 100])
			})
			e.cl('star', function () {
				w.pop('star hit earth!!')
			})
		})
	}
}
KIL = function () {
	W()//.Y()
	y = w.y()
	w.randRects()
	l = w.S(255, 50, 'g', 60, 15)
	for (var i = 1; i <= 10; i++) {
		w.rJ(l, b = w.D(255, i * 30 + 30, 'w', 3, 15).DFB(1, 0, 0));
		l = b
	}
	w.rJ(l, w.D(255, 330, 'd', 20).DFB(1, 0, 1.1))
	l = w.S(900, 50, 'g', 60, 15)
	for (var i = 1; i <= 10; i++) {
		w.rJ(l, b = w.D(900, i * 30 + 30, 'w', 3, 15).DFB(1, 0, 0));
		l = b
	}
	w.rJ(l, w.D(900, 330, 'd', 20).DFB(1, 0, 1.1))
	// _.t(8,function(){w.me(700, 400)})
	_.t(4, function () {
		w.me(700, 300)
	})
	// _.t(1,function(){w.me(700, 200)})
	w.cl('bul', function (f) {
		if (f.of(y)) {
			alert('f.of y')
		}
		else {
			f.B().kill()
		}
	})
}
TFS = function () {
	W()._(function () {
		me = w.i.qB('me')
		me.drag()
		me.grow()
		i = w.i.qB('me').XY(200, 200)
		ball = w.ball()
		_.in(3, function () {
			w.C('b');
			ball.bS(i)
		})
		//  me.startMoving(10, 10)
		T.t(function () {
			iS = i.inStage()
			$l(iS)
		})
		b = w.i.qB('me')
		b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
		//m = b.getMatrix()
		function tf(a, b, c, d, e, f, g, h, i) {
			return this.x = a || 0,
					this.y = b || 0,
					this.scaleX = null == c ? 1 : c,
					this.scaleY = null == d ? 1 : d,
					this.rotation = e || 0,
					this.skewX = f || 0,
					this.skewY = g || 0,
					this.regX = h || 0,
					this.regY = i || 0,
					this
		}
	})
}
LMP = function () {
	W(5)//.Y()
	w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
	w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
	w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
	_.t(38, function () {
		w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
	})
	y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
	fn = _.th(function () {
		var xx = y.X(),
				yy = y.Y()
		_.in(1, function () {
			w.S(xx, yy, 'b', 15)
		})
	}, 100)
	y.cl(fn)
	_.e([[400, 500], [300, 500], [400, 300],
		[300, 100], [400, 200], [100, 300],
		[300, 300]
	], function glb(v) {
		return w.D(v[0], v[1], 'z', 20).K('glb')
	})
	y.cl('glb', function (f) {
		var glb = f.B()
		if (!glb.j()) {
			glb.glu(y)
		}
	})
	w.wed(
			w.D(100, 200, 'x', 100, 200).r(1),
			w.D(200, 100, 'u', 200, 100).r(1))
	w.wed(
			w.D(300, 400, 'w', 50, 100),
			w.D(300, 400, 'v', 100, 50))
	w.t_.bit(1, [8])
}
JFA = function () {
	w.me = function (x, y, Z) {
		var w = this, p
		Z = N(Z, 4)
		p = w.D(x, y)
		p.cir({c: 'X', C: 'X', l: 0, r: 1})
		p.rec('X', Z * 12, Z * 22).K('head')
		p.rec('X', Z * 10, Z * 20, 0, Z * 10, '-').K('feet')
		p.rec('X', Z * 2, Z * 6, 0, -Z * 12, '-').K('hat')
		p.rec('X', Z * 8, Z * 2, Z * 8, 0, '-').K('right')
		p.rec(Z * 8, Z * 2, -Z * 8, 0, '-').K('left')
		p.d(1).r(0).fr(.1).fixRot()
		p.bS({
			i: 'me',
			sc: Z / 10
		})
		return p.K('p player')
	}
	W({g: 10, w: 'L'})
	//w.s.sX(.95)
	num = 0;
	heads = 0
	y = w.ship()//.den(.3)
	_.ev(1, function () {
		w.me(100, 100).K('head')
		num++
	})
	//w.show(function(){return num + ' - ' + heads  })
	game = true
	T.t(function () {
		/*
		 if(num > 30){
		 $.pop('score: '+heads)
		 num=0
		 heads=0
		 w.each(function(b){
		 if(b.data() == 'head'){
		 b.kill()
		 heads++}})}
		 */
		if (game) {
			if (num > 60) {
				game = false
				msg = 'score: ' + heads
				$l(msg)//$.pop(msg)
			}
			else {
				w.e(function (b) {
					if (b.K() == 'head' && b.Y() > 600) {
						b.kill();
						heads++
					}
				})
			}
		}
	})
}
MNI = function () {
	W({g: 10, W: 1000, H: 800})
	d = $.div('y', 1500, 40).A().abs(200, 200).pad(2)
	p = w.p(300, 200, 2, 'thrust')
	data = function (str) {
		if (U(str)) {
			str = 'data'
		}
		d.E($.h4(str))
	}
	data()
}
FRK = function () {
	W()
	w.fricky = function (x, y) {
		var w = this,
				b = w.D(x, y)
		b.rec('r', 40, 20, 0, 0, 180).fr(1).r(0)
		b.rec('b', 20, 40, 0, 0, 90).fr(1).r(0)
		return b
	}
	w.fricky(400, 120)
}
SCL = function () {
	W()
	r = 10
	w.y(200, 200)
	w.S(400, 300, 'r', 40);
	w.S(290, 350, 'b', 40);
	w.S(280, 220, 'y', 40)
	w.S(100, 100, 'r', 80, 80)
	bb = w.D(600, 400, 'o', 150, 150)
	bb.bS('me')//cant attach to above at the moment..
	b23 = w.D(400, 100)
	b23.rec('r', 20, 40, 0, 0, 180).fr(0).r(0)
	b23.rec('b', 20, 40, 0, 0, 90).fr(0).r(0)
	w.S(100, 200, 'b', 50).f().dot()
	w.S(100, 300, 'r', 80, 80)
			.f().dot().C('p').dot().C('x') //overwrites dot?
	T.t(function () {
		var p = bb.wP(80, -80)
		w.dot(p)
		bb.I(0, -200, p)
	})
	w.show(function () {
		var msg = 'num: ' + w.n()
		$l(msg)
		return msg
	})
}
KFX = function () {
	W()
	r = 10
	b = w.D(300, 300, 'g', r)
	_.ev(.2, function () {
		if (b.f()) {
			b.f().kill()
			r += .2;
			b.cir('g', r)
		}
	})
}
ACH = function () {
	W()
	b33 = w.D(500, 300, 'r', [[40], ['b', 30, 100, 'arm', '-']])
	w.b(function (cx) {
		if (cx.w('arm')) {
			b33.I(50, 50)
		}
		if (cx.w('arm', w.right)) {
			w.C($r())
		}
	})
	b3 = w.D(100, 100, 'b', [
		[40],
		[100, 200, 100],
		[50, 200],
		[200, 200, 300, 400]
	])
	_.in(2, function () {
		b3.fs(function (f) {
			f.sen(1)
			$l('shape type: ' + f.GetShape().m_type)
		})
	})
}
TRI = function () {
	W()
	b = w.S(500, 200, 'o', [
		[[-100, 0], [0, -100], [100, 0]]
	]).rt(25)
	f = b.f()
	v = f.wV()
	w.S(400, 200, 'w', [v])
	_.e(v, function (v) {
		w.dot(v)
	})
	w.S(600, 200, [f.wV('+')])
}
SGW = function () {
	var i = -20
	W([800, 1000], {g: -10})
	w.roof.kill()
	w.floor.kill()
	glider = w.D(300, 500, 'b', 100, 200, 50, 50, 20)
	w.D(300, 500, 'b', [-100, 0], [0, -100], [100, 20]).K('b')
	w.D(500, 500, 'r', [-100, 0], [0, -100], [100, 20], '-').K('r')
	w.left.K('b')
	w.dot(300, 500)
	T.t(function () {
		glider.I(i, 0)
	})
	w.$(function () {
		glider.I(i * -12, 0)
	})
	w.$$(function () {
		i = ( i * -1  )
	})
	//y=w.ship()
	//y.C(function(f){if (f.of('b')) {f.B().kill()}})
}
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
SNL = function () {
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
}
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
CPB = function () {//should zoom in when near cup
	CUP()
	b = w.D(w.W / 2, w.H / 2, 'w', [[10]]).r(.8).track()
	cjs.tick(function () {
		b.F(0, -20)
	})
	w.showOff()
}
DLP = function () {
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
BCB = function () {

	W([1200, 600, 2400, 1200], {g: 300})
	
	_.t10( function (i) {
		w.D(100 + i * 100, 100, $r(), 35).d(.1)
	})
	
	
	w.Z('-')
	p = w.p(1175, 100)
	w.t = p
	// need to call track?
	_.ev(1, function () {
		w.t.cb = function () {
			w.Z(w.z + .001)
		}
	})


}
