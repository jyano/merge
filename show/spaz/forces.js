MOUSESTACK = STA = function () {
	W({m: 'ball', w: 0})
	w.S(500, 600, 'y', 1000, 20)
	b = w.D(500, 200, 'o', 40).K('ball')
	//w.boxesStat([350, 260, 880, 30])
	w.D(310, 120, 't', 60, 60)
	w.D(320, 120, 't', 60, 60)
	w.D(340, 120, 't', 60, 60)
	w.D(350, 120, 't', 60, 60)
	w.D(370, 120, 't', 60, 60)
	w.D(380, 120, 't', 60, 60)
	w.D(550, 120, 't', 60, 60)
	w.D(570, 120, 't', 60, 60)
	w.D(580, 120, 't', 60, 60)
	w.S(1000, 400, 'x', 200, 200)
	w.S(1200, 200, 'x', 200, 200)
}
MJ = function () {
	W([1200, 600, 2400, 600], {g: 10, m: 'm'}).Y('+')
	w.D(100, 200, 'y', 150, 100).K('imp')
	w.D(500, 400, 'y', 50, 100).K('imp')
	w.D(300, 400, 'r', 50, 50);
	w.D(800, 400, 'r', 50, 50);
	w.D(1200, 400, 'r', 50, 50);
	w.D(1600, 400, 'b', 100, 100).K('m')
	w.e$('imp', function () {
		this.B().I(0, -50)
	})  // w.e('imp', function(b){b.$(function(){ this.B().I(0,-50) }) })
}
HOC = function () {
	W([1200, 600, 1200, 2000]).stats()//.devGrid()
	v = [[[0, 200], [0, -200], [400, -300], [400, 300]],
		[[-100, 0], [0, -100], [100, 50]],
		[[-200, 0], [-100, -100], [0, 50]]]
	// p2= w.p('t')
	b = w.D(800, 300, 'b', 100).r(1).track()
	r = w.D(800, 300, 'r', 300)
	_.in(8, function () {
		_.ev(3, function () {
			if (R()) {
				w.lG('a');
				b.I(40, -100)
			}
			else {
				w.lG('c');
				b.I(-200, -650)
			}
		})
	})
}
DEN = function () {
	W(0) //w=b2d.m({g:0})
//by default, bodies have density = 0
//bodies cannot rotate by force, if their density is 0
//so by default, bodies wont rotate!!!! but still some mass
//can even change its density to 0, to suddenly freeze it...
	//something weird.. if it was already rotating it keeps rotating, and i think its rotation is affected by forces of others..
	//however others don't rot in response (assuming they also have den-0).  then once it stops rotating, switches back to frozen again?? hmmm.. maybe the rotation is affected only by friction/damping.. and the forces only change its x/y?  test it...
	r = w.D(300, 300, 'y', 400, 20).bo(.5)
	r2 = w.D(300, 300, 'w', 400, 10)
	r3 = w.D(300, 300, 'w', 400, 10)
	r4 = w.D(300, 300, 'w', 400, 10)
	r5 = w.D(300, 300, 'w', 400, 10)
	flipDen = function (r) {
		var d = r.den()
		if (d == 0) {
			r.den(1)
		} else {
			r.den(0)
		}
	}
	flipStage = function () {
		if (w.s.X() == 0 && w.s.Y() == 0) {
			w.s.XY(10000, 10000)
		}
		else {
			w.s.XY(0, 0)
		}
	}
	flipStage()
	_.ev(6, function () {
		flipDen(r);
		flipDen(r2);
		flipDen(r3);
		flipStage()
	})
}
DKN = function () {
	W({g: 0, w: 0}).Y().C('z')
	x = w.S(100, 100, 'x', 500)
	b = w.S(600, 300, 'w', [[80], [100, 300, 140, 0, 46]])
	//w.d(r.wC())
	f = b.f()
	f1 = f.N()
	h = f.H()
	h1 = f1.H()
//	s = x.fSp()
}
GRV = function () {
	W({g: 10}).Y()
	balls = function () {
		w.D(100, 100, 'a', 50).d(1)
		w.D(100, 200, 'c', 40).d(1)
		w.D(100, 100, 'd', 50).d(1)
		w.D(100, 200, 'e', 40).d(1)
		w.D(100, 100, 'f', 50).d(1)
		w.D(100, 200, 'h', 40).d(1)
		w.D(100, 100, 'i', 50).d(1)
		w.D(100, 200, 'j', 40).d(1)
		w.D(100, 100, 'k', 50).d(1)
		w.D(100, 200, 'l', 40).d(1)
	};
	balls()
	range = w.pJ(
			w.S(600, 300, 'q', 220, 20),
			w.D(600, 300, 's', 20, 250).lD(10),
			V(1, 0)).lm(-100, 100)
	w.show(function () {
		return 'Welcome to Gravity Range: Current gravity is ' + range.val()
	})
	cjs.t(function () {
		w.G(range.val())
		w.e(function (b) {
			b.I(0, .1)
		})
	})
}
FRC = function () {
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
	w.S(100, 200, 'b', 50).f()//.dot()
	w.S(100, 300, 'r', 80, 80)
			.f()//.dot().C('p').dot()
			.C('x') //overwrites dot?
	T.t(function () {
		var p = bb.wP(80, -80)
		//w.dot(p)
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
}//dud
RC = function () {
	W();
	var p1, p2, d, l
	w.p(400, 100);
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
}//err