MBL = function () {
	
	//W([1200,600,2400,600],{g:[10,10]}).Y()
	W([1200, 600, 2400, 600], {g: 100}).Y()
	
	
	//mick(700, 100, {c1: 'b', c2: 'X'})
	
	/*
	mick(700, 300, {c2: 'b'})
	//  mick(100,100, { y2:10 })
	//  mick(100,200, { y2:200 })
	//  mick(100,300, { x2:100 })
	*/
	
	
	function mick(x, y, lf) {
		var g = G(arguments)
		w.i.h(x, y, '+').c({l: 20, C: 0, lf: lf || 1})
				.dc([50], [200, 0, 100], [100, 100, 100])
		if (g.p) {
			w.i.h(x, y).c({l: 20, C: 0, ls: lf || 1})
					.dc([50], [200, 0, 100], [100, 100, 100])
		}
	}
	
	
	/*
	y.i.c('y').dc(100, 100, 30)
			.c('o').dc(100, 100, 10)
			.c('X', 'g', 8)
			.mt([
				[100, 100], [300, 300], [400, 100],
				[500, 300], [450, 450]],
			[[500, 0], [600, 100]])
			.cir(600, 300, 'u', 'g', 10)
	h = w.i.h(600, 300, '+')
	h.cir(105, 100, 20, 'b')
			.cir(100, 20, 100, 'g')
			.cir(105, 100, 8, 'z')
			.cir(200, 100, 20, 'b')
			.cir(200, 100, 8, 'z')
	w.t = b = w.D(300, 300, 'r', 80).bo(.8).den(.1)*/
	
}//

 
FLK = function () {
	W({g: 0})//.P()
	w.D(300, 100, 'r', 50)
	w.D(500, 100, 'y', 50)
	w.D(700, 100, 'b', 50)
	w.D(900, 100, 'g', 50)
	var n = 0
	_.t(8, function () {
		w.y('o'//,'-'
		)//.push('+')
	})
	//y=w.y('b',100,100,5)
	_.evx(.5, function () {
		if (y.going()) {
			// w.C('p')
		}
		else {
			// w.C('z')
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
DEV = function () {
	W([1200, 600, 1400, 800], {g: 50, t: 0}).stats()
	//  w.dr(100, 100, 100, 100, '-')
	//  w.dr(100, 200, 100, 100, '+')
	w.dl('r', 0, 100, 5000, 5000, '-')
	w.dl('p', 0, 200, 5000, 2000)
	w.dl('b', 0, 300, 5000, 3000, '+')
	wh = w.S(400, 350, 'w', [[300, 220, '-']])
	or = w.S(400, 200, 'o', 300, 50)
	pi = w.S(400, 500, 'x', 300, 50)
	y = w.ship(150, 200).damp(1, 10).rot(90).lD(0).rot(120).lV(1);
	w.track(y, 600, 300, '!')
	b = w.D(700, 200, 'b', 100)
	me = w.p()
}
JFA = function () {
	w.p = function (x, y, Z) {
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
		w.p(100, 100).K('head')
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
function yShp() {
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
	WARR = function () {
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
	STUMM = function () {
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
}