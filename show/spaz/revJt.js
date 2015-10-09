MTR = function () {
	W().P().P().P().Y()
	w.rJ(
			w.D(800, 300, 'r', 20, 300),
			w.D(800, 300, [['b', 100], ['y', 50, 10, 100, 0]])
	).mt(10)
	dir = 10
	car = w.S(300, 300, 'r', 200, 20)
	b = w.D(250, 300, 'b', 40).d(5).bS('me')
	j = w.rJ(b, car)//.mt(10)
	b2 = w.D(350, 300, 'b', 40).d(5)
	b2.bS('me')
	j1 = w.rJ(b2,
			car).mt(10)
	w.$(function () {
		dir *= -1
		j.mt(dir)
		j1.mt(dir)
	})
	_.ev(1, function () {
		w.D(300, 500, 'y', 20)
	})
}
DRV = function () {
	W()
	w.rJ(a = w.S(100, 100, 20), b = w.D(100, 100, 100, 40)).mt(5, 1)
	w.rJ(w.S(250, 100, 20), w.D(250, 100, 100, 40)).mt(5, 2)
	w.rJ(w.S(400, 100, 20), w.D(400, 100, 100, 40)).mt(5, 10000)
	w.rJ(w.baa(550, 100), w.bi(550, 100, 100, 40)).mt(20, 5)
	w.rJ(w.baa(700, 100), w.bi(700, 100, 100, 40)).mt(20, 10)
	w.rJ(a2 = w.baa(850, 100), b2 = w.bi(850, 100, 100, 40, 'o')).mt(20, 10000)
	w.rJ(w.baa(100, 220), w.bi(100, 220, 100, 40)).lm(0, 0)
	w.rJ(w.baa(250, 220), w.bi(250, 220, 100, 40)).lm(0, 10)
	w.rJ(w.baa(400, 220), w.bi(400, 220, 100, 40)).lm(0, 180)
	w.rJ(w.baa(550, 220), w.bi(550, 220, 100, 40)).lm(-180, 0)
	w.rJ(w.baa(700, 220), w.bi(700, 220, 100, 40)).lm(-360, 180)
	w.rJ(w.baa(850, 220), w.bi(850, 220, 100, 40)).lm(0, 1000)
	w.rJ(w.baa(100, 340), w.bi(100, 340, 100, 40)).lm(0, 0).mt(5, 1)
	w.rJ(w.baa(250, 340), w.bi(250, 340, 100, 40)).lm(0, 10).mt(5, 2)
	w.rJ(w.baa(400, 340), w.bi(400, 340, 100, 40)).lm(0, 180).mt(5, 10000)
	w.rJ(w.baa(550, 340), w.bi(550, 340, 100, 40)).lm(-180, 0).mt(20, 5)
	w.rJ(w.baa(700, 340), w.bi(700, 340, 100, 40)).lm(-360, 180).mt(20, 10)
	w.rJ(w.baa(850, 340), w.bi(850, 340, 100, 40)).lm(0, 1000).mt(20, 10000)
	w.rJ(w.baa(100, 460), w.bi(100, 460, 100, 40)).lm(0, 0).mt(-5, 1)
	w.rJ(w.baa(250, 460), w.bi(250, 460, 100, 40)).lm(0, 10).mt(-5, 2)
	w.rJ(w.baa(400, 460), w.bi(400, 460, 100, 40)).lm(0, 180).mt(-5, 10000)
	w.rJ(
			w.baa(550, 460), w.bi(550, 460, 100, 40)
	)
			.lm(-180, 0).mt(-20, 5)
	w.rJ(w.baa(700, 460), w.bi(700, 460, 100, 40)).lm(-360, 180).mt(-20, 10)
	w.rJ(w.baa(850, 460), w.bi(850, 460, 100, 40)).lm(0, 1000).mt(-20, 10000)
}
HRS = function () {
	W({w: 'L'}).P()
	s = w.D(300, 400, 'b', 90, 30).d(1000).stat()
	//w.rJ(w.D(300-40, 400+50,'o',30), s)//.mt( 2)
	b = w.D(300 + 60, 400 + 50)
	b.cir({c: 'x', r: 30, rf: 1})
	w.rJ(b, s)//.mt(2)
	//   w.car(100, 350, -2, 2)
	//  w.car(440, 350, 2, -2)
	// w.car(440,350,4)
	// w.car(540,350,2)
//w.makeCar()
	//car = w.car()
	w.dst(p, car).len(0)
	w.floor.fr(.1)
	w.roller()
	//_.t(3, function(){w.roller()})
//    _.ev(2000, function(){w.roller()})
	//  p.X(1750)
}
RJ = function () {
	W({m: 0, g: 0}).Y()
	//  p1 = V(300,300) ;w.dot(p1)
	//  p2 = V(360,360) ;w.dot(p2)
	//  p3 = V(450,450) ;w.dot(p3)
	b = w.D(300, 300).lV(2).aV(1)
	b.cir({r: 150, lf: ['x', 'u']}).d(1)
	w.rJ(b,
			w.D(300, 300, 'b', 500, 40, 0, 0, 30)
	)
	//blue pin spinner in middle
	b1 = w.D(600, 300, 'b', 100, 50).pin()
	r1 = w.D(600, 300, 'r', 100, 100)
	w.$$(function () {
		w.rJ(b1, r1)
	})
}
RVJ = function () {
	W().C('z')
	j = w.rJ(w.S(700, 280), w.D(800, 280, 'r', 200, 40)).mt(4, 100000)
	_.ev(4, function () {
		j.sp(-j.sp())
	})
	_.in(2, function () {
		j.lm(0, 200)
	})
	c = w.D(300, 300)
	c.cir({r: 60, c: 'd', rf: 1})
	w.rJ(c, w.D(300, 300, 'h', 30, 300))
	box = w.D(150, 150, 'n', 80, 40)
	w.rJ(
			box,
			w.D(130, 130, 'p', 50))
	w.rJ(
			w.S(400, 200, 'o', 60).d(1),
			w.D(400, 200, 'o', 200, 40).d(1)).mt(-2)
	w.rJ(
			w.D(120, 50, 'y', 50, 50),
			w.D(100, 50, 'x', 50, 50)
	).mt(2)
	w.rJ(
			w.D(400, 30, 'g', 30, 50),
			w.D(400, 30, 'g', 30, 50)).mt(3)
	w.rJ(
			w.D(400, 30, 'u', 10, 80),
			w.D(400, 30, 'r', 20, 160)
	).mt(10)
	w.rJ(
			w.D(400, 30, 'p', 50),
			w.D(400, 30, 'o', 20, 160)
	).mt(7)
}
RUL = function () {
	W()
	w.D(400, 200, 'b', [
		[60],
		[100, 50, 0, 200]
	]).pin()
	y = w.D(800, 200, 'y', [
		[60],
		[40, 80, 0, 60]])
	x = w.D(500, 200, 'x', 50)
	w.$$(function () {
		j1 = w.rJ(y, x)
	})
	w.rJ(
			w.D(350, 200, [
				['b', 125, 20],
				['o', 20, 60, -80, -40, 200]
			]),
			w.D(210, 210, [
				['g', 150, 10, 0, 0, 0, 1],
				['r', 10, 20, -140, -30, 0, 1]
			]),
			-80, -90, 60, 0
	).mt(10)
}
RRP = function () {
	W(300).C('z')
	// w.S(600,300,'z',50,50).rJ(25).C('z').rJ(  w.y(300,300).cn('thrust')  )
	// p= w.p(300,200).cn('thrust').r(2)
	// base = Link(300, 20, 10)//.stat()
	// link =  base.rJ(10)
	//  w.rJ( link,  p.XY(link.X(), link.Y())  )
	//base = Link(100, 20).stat(); l =  base.rJ(10); w.rJ(l, p.XY(l.X(), l.Y()))
	link = w.S(100, 120, 'z', 20, 20)
	js = []
	_.t(20, function () {
		js.push(
				w.rJ(
						link,
						link = w.D(
								link.X(),
								link.Y() + 10, 'w', 3).d(3000)))
	})
	link.rJ(w.p().cn('jump'))
	j = js[3]
}
LLR = function () {
	W({m: 0, g: 0}).Y()
	b = w.S(600, 100, 'b', 10)
	w.rJ(b,
			link = w.D(600, 120, 'r', 10))
	w.rJ(link,
			link = w.D(600, 130, 'b', 10))
	w.rJ(link,
			link = w.D(600, 140, 'r', 10))
	w.rJ(link,
			link = w.D(600, 170, 'b', 10))
}
RDP = function () {
	W([1200, 600], {g: 0})
	// anchor = w.S(600,300,'z',50,50)
	//  anchor.rJ(15).C('z').rJ(w.y(300,100).cn('thrust'))
	w.S(200, 100, 'z', 50, 50)
			.rJ(200, 150, 'b', 30)
			.rJ(200, 180, 'r', 30)
			.rJ(200, 260, 'o', 10)
}
BIK = function () {
	W([1200, 600, 2000, 600], {})
	//yy=w.y().aD(5000)//.fixRot()
	dir = 12
	car = w.D(300, 300, 'r', [
		[200, 20],
		[20, 165, -50, -50, 45],
		[20, 165, 50, -50, -45]
	]).fr(5).track()//.lD(1000)
	_.t(30, function () {
		w.me(R(9000, 500), 100, R(2, .5))
	})
	wh = w.D(250, 300, 'w', 60).C('b').bS('me', .6)//.lD(5).aD(5)
			.fr(10).r(.8)
	wh1 = w.D(250, 300, 'w', 60).C('g')//.lD(5).aD(5)
			.bS('me', .6).r(.8).fr(10)
	//.aD(10).fr(2)
	//w.b_.fr(100)
	j = w.rJ(
			wh, //.lD(100).aD(100).fr(100),
			car,
			0,
			0,
			100,
			0
	)//.M(.1)
	j1 = w.rJ(wh1, car, 0, 0, -100, 0)//.M(.5)
	// j.mt(-50)
	T.t(function () {
		var K = $.K
		car.I(0, 5000)
		if (K.r) {
			
			// wh.ApplyTorque(5500)
			j.mt(-500)
			j1.mt(-500)
		}
		else if (K.l) {
			// wh.ApplyTorque(-3500)
			j.mt(500)
			j1.mt(500)
		}
		else {
			j.mt(0)
		}
		if (K.u) {
			wh.ApplyTorque(1500)
		}
		if (K.d) {
			j.SetMotorSpeed(0)
			j1.SetMotorSpeed(0)
			wh1.ApplyTorque(-500)
		}
	})
	//car.aD(1000).lD(1000)
}
WGN = function () {
	W([1200, 600, 4000, 600], {}).P()
	p.d(.2).track().cl(function () {
		p.onGround = true
	})
	x = w.D(600, 300, 'r', 300, 50).d(2).fr(3)
	wh = w.D(500, 320)
	wh.cir({r: 20, lf: 'x'})
	w.rJ(x, wh)
	wh = w.D(550, 320)
	wh.cir({r: 20, lf: 'x'})
	w.rJ(x, wh)
	wh = w.D(600, 320)
	wh.cir({r: 20, lf: 'x'})
	w.rJ(x, wh)
	wh = w.D(650, 320)
	wh.cir({r: 20, lf: 'x'})
	w.rJ(x, wh)
	wh = w.D(700, 320)
	wh.cir({r: 20, lf: 'x'})
	w.rJ(x, wh)
}
STN = function () {
	W([600, 1000, 600, 1200], {}).P('+')
	//y= w.ship(500,200)
	dir = 12
	car = w.D(300, 300, 'r', 200, 45)
	w1 = w.rJ(
			wheel(250, 300),
			car
	).mt(10)
	w2 = w.rJ(
			wheel(350, 300), car
	).mt(10)
	car3 = w.D(500, 300, 'r', 200, 45)
	w.rJ(wheel(450, 300), car3).mt(-10)
	w.rJ(wheel(550, 300), car3)
	car3 = w.D(700, 300, 'r', 200, 45)
	w.rJ(wheel(650, 300), car3).mt(-10)
	w.rJ(wheel(750, 300), car3).mt(-10)
	function wheel(x, y) {
		pC = [b2d.pC(45, 10)]
		return w.D(x, y, 'b', pC).d(5)
	}
	
	w.$(function () {
		dir *= -1
		w1.mt(dir)
		w2.mt(dir)
	})
}
WL = function () {
	W([1200, 600, 2400, 600], {g: 50}).P()
	p.track()
	yy = w.y().aD(5000)//.fixRot()
	dir = 12
	pC = [b2d.pC(45, 10)]
	car = w.D(300, 300, 'r', 200, 45).fr(5)
	w.rJ(
			wheel(250, 300),
			car, 0, 0, 100, 0
	).mt(-10)
	w.rJ(
			wheel(250, 300),
			car, 0, 0, -100, 0)
	/*
	 car= w.D(800,300, 'r', 200,45).fr(5)
	 w.rJ(
	 wheel(850, 300),
	 car,0,0,100,0
	 )
	 w.rJ(
	 wheel(850, 300),
	 car,0,0,-100,0).mt(10)
	
	 */
	function wheel(x, y) {
		return w.D(x, y, 'b', pC).d(5)
	}
}
WHW = function () {
	W(0).Y()
	x = w.S(600, 300, 'r', 500, 500, '-')
	wh = w.pWh({
		x: 450,
		y: 50,
		c: 'z',
		r: 50,
		n: 9
	})
	w.rJ(x, wh, 50, -100)
	wh = w.pWh({
		x: 450, y: 50,
		c: 'b',
		r: 50,
		n: 5
	})
	w.rJ(x, wh, 0, 100)  //  x.rev(wh,0,100)
	wh = w.wh({
		x: 450,
		y: 50,
		c: 'z',
		r: 50,
		n: 9
	})
	w.rJ(x, wh, -150, -50)
	/*
	 x.wheel(0,0)
	
	 x.wheel({
	 x:450, y:50,
	 c:'b',
	 r:50,
	 n:5
	 })
	 */
}
LFL = function () {
	W()
	w.lFlip(600, 300)
}
TNK = function () {
	W({g: 0}).P()
	g = V(0, 1000)
	dir = 12
	car = w.S(300, 300, 'r', 100, 5)
	w1 = w.rJ(
			w.D(250, 300, 'b',
					[b2d.pC(45, 10)]).d(5), car)//.mt(10)
	w2 = w.rJ(
			w.D(350, 300, 'b', [b2d.pC(45, 10)]).d(5), car)//.mt(10)
	/*
	 w.$(function(){
	 dir*=-1
	 w1.mt(dir)
	 w2.mt(dir)
	 g = V(-g.x,-g.y)
	
	 })
	
	 cjs.t(function(){
	 car.F( g )
	 })
	 w.right.cl(function(){g=V(-1000,0)})
	 w.left.cl(function(){g=V(1000,0)})
	 w.roof.cl(function(){g=V(0,-1000)})
	 w.floor.cl(function(){g=V(0,1000)})
	 */
}
 
 