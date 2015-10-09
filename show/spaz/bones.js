DST = function () {
	W([600, 600, 600, 1200])
	b = w.D(300, 200, 'b', 150).tr()
	x = w.D(200, 100, 'x', 20).cn('thrust').bS('me').aD(100).fR()
	jD = new b2d.Joints.b2DistanceJointDef
	wAncA = V(300, 200, '-')
	wAncB = V(200, 100, '-')
	jD.Initialize(x, b, wAncA, wAncB)  // dJD.collideConnected = true;
	j = w.J(jD)
}
DRP = function () {
	W([1000, 600], {})
	//p.lD(2).fR()//.r(1.6)
	// p.stat()
	chain = w.Chain()
	p = w.p(300, 300, 2);
	v0 = w.S(200, 100, 'r', 15).d(15)
	v1 = w.D(300, 150, 'y', 15).d(15)
	v2 = w.D(200, 200, 'g', 15).d(15)
	chain.j(v0, v1)//.fq(20).d(0)
	chain.j(v1, v2)//.fq(20).d(0)
	chain.j(p, v2, p.X(), p.Y() - 40, v2.X(), v2.Y()
	)//.fq(30).d(1)
	// T.t(function(){  p.F(0,20)  })
	// _.e(js, function(j){ j.l(40).fq(12).d(3)  })
	// p.F(0,100,'+')
	// chain.d(0).f(60)
	chain.d(.4).f(12).l(40)
}
DLD = function () {
	W([2000, 1400], {})
	x = w.S(300, 400, 'r', 100, 100)
	//b = w.D(400,200, 'b' ,100, 50, 0, 0, 28).fR()
	b = w.y(400, 200, '+')
	j = w.dJ({a: x, b: b})
	_.ev(.2, function () {
		w.dot(j.GetAnchorA().m().x, j.GetAnchorA().m().y)
		w.dot(j.GetAnchorB().m().x, j.GetAnchorB().m().y)
	})
	j.fq(8)
	j.d(0)
	// w.dJ(x,b)
	w.dot('z', 1310, 400)
	w.brg(900, 500);
	_.in(3, function () {
		w.p(900, 100)
	})
}
DJ = function () {
	W([1400, 800], {g: 1000}).Y(500, 300);
	y.tr()
	w.S(400, 500, 'r', 4, 2000)
	w.dJ({
		a: w.D(200, 200, 'b', 50),
		b: w.D(300, 200, 'b', 60),
		l: 50, f: 3, d: .1,
		cl: 1
	})
	w.dJ({
		a: w.D(200, 200, 'd', 50, 50),
		b: w.D(300, 200, 'd', 60, 60),
		l: 50, f: 3, d: .1, cl: 1
	})
	w.dJ(w.D(200, 200, 'o', 50), w.D(300, 200, 'o', 40)).l(50).fq(3).d(.1)
	w.spg(w.S(200, 100, 'g', 10).sen(1), w.D(200, 250, 'b', 250, 10).K('rec')).fq(3).d(.1)
	oj = w.dJ(w.D(830, 700, 'o', 50).bS('me'), w.S(900, 0, 'o', 50, 50)).l(200).fq(5).d(.1)
	T.t(function () {
		if (oj.l() > 1) {
			oj.l(oj.l() - .002)
		}
	})
	w.spg(
			w.S(500, 100, 'o', 10, '-'),
			w.D(500, 250, 'r', 250, 10).K('rec')
	).fq(3).d(1)
	w.spg(
			w.S(1200, 125, 'c', 10, '-'),
			w.D(1200, 275, 'r', 250, 10).K('rec')
	).fq(10).d(.5)
	w.dJ(
			w.D(600, 300, 'z', 30),
			w.S(900, 500, 'z', 50, 80, 0, 0, 20)
	).l(20).fq(5).d(.1)//.coll(false)
	w.dJ(
			w.D(130, 450, 'b', 30),
			w.S(130, 800)
	).l(120).fq(5).d(0)//.coll(true)
	b2 = w.D(500, 300, 'w', 4, 500)
	w.dJ(w.S(500, 200, 'r', 70), b2)
	w.dJ(b2, w.D(500, 300, 'g', 90))
	w.dJ(
			y.XY(200, 200),
			x = w.D(200, 220, 'r', 12))
	w.dJ(x, x = w.D(200, 250, 'r', 12))
	w.dJ(x, x = w.D(200, 280, 'b', 12))
	w.dJ(x, x = w.D(200, 320, 'g', 12))
	w.dJ(x, x = w.D(200, 360, 'u', 12))
	w.dJ(x, x = w.D(200, 420, 'g', 12))
	w.dJ(x, x = w.D(200, 500, 'u', 12))
	xx = w.S(1100, 40, 'x', 40)
	jj = w.dJ({
		a: xx,
		b: w.D(1050, 200, 'r', 20, 60),
		l: 200, cl: 1, coll: 1
	})
	kk = w.dJ(xx, w.D(1100, 200, 'y', 20, 60), 200)
	w.S(800, 40, 'o', 200, 100, '-', 'sen')  //can get triggered many many times?
	w.cl('sen',
			function () {
				jj.wind();
				kk.wind()
			}
	)
}
SPG = function () {
	W([2000, 1300], {g: 1000}).P(300, 320)
	// y.tr()
	// w.brg(860, 1060)
	//and more..
	// here i bind bodies with fixtures that are alredy out of line
	w.dJ(w.D(800, 100, 'y', 20),
			w.D(800, 150, 'o', b2d.pol(20, 20, 15, 15, 45)),
			30)
	w.dJ(
			w.D(900, 300, 'g', 20),
			w.D(910, 320, 'b', 20, 20),
			30)
	b1 = w.S(200, 200, 'y', 50)
	b11 = w.D(200, 200, 'x', 50, 50)
	w.dJ(b1, b11, 60)
	r = w.D(100, 100, 'r', 40)
	u = w.S(500, 300, 'u', 200, 100)
	j = w.dJ(u, r, V(100, 100)).l(50)
	w.dJ(u, w.D(300, 400, 'b', 20), V(-100, 100)).l(50)
	w.dJ(u, w.D(600, 300, 'g', 20), V(100, -100)).l(50)
	w.dJ({
		a: u,
		b: w.D(300, 400, 'o', 20),
		av: V(-100, -100),
		coll: 1, l: 50
	})
	p.tr().r(1)
	SoftPlat(300, 400)
	SoftPlat(500, 380)
	SoftPlat(700, 340)
	SoftPlat(900, 420)
	function SoftPlat(x, y) {
		x = N(x, 300);
		y = N(y, 60)
		w.dJ({
			a: w.S(x, y, 'z', 8, '-'),
			b: w.D(x, y, 'w', 100, 30).d(1).r(0).fR(),
			l: .1,
			f: 10
		}).d(.1)
	}
	
	w.tpl = function (x, r, fq, d) {
		var w = this, bouncer, j
		x = N(x, 290)
		r = N(r, 75)
		fq = N(fq, 6)
		d = N(d, 0)
		j = w.dJ(
				w.S(x, 1080, 'w', 20, 20),
				w.D(x, 1000, 'b', 200, 20)
						.fR().d(0).r(r).fr(0))
		j.l(115).fq(fq).d(d)
		w.S(x - 120, 1090, 'b', 40, 300).fr(0)
		w.S(x + 120, 1090, 'b', 40, 300).fr(0)
		return j
	}
	w.tpl(200, 0, 6)// not bouncy
	w.tpl(500, 1.2, 6)// too bouncy
	w.tpl(800, .75, 6)// mid bouncy, mid freq
	w.tpl(1100, .75, 2)//low freq
	w.tpl(1400, .75, 12)//high freq
	//_.ev(1,function () {p.I(0, -150)})
	//_.in(15, function(){w.addHundBalls()})
	//freq is SPEED of oscillation
	//damp is STRENGTH of oscillation
	// so bodies cant rotate if they dont have density???
}
RAG = function () {
	W({})
	w.spg(
			b1 = w.D(100, 100, 'b', 30),
			w.D(100, 200, 'r', 40))
	w.dJ(
			b2 = w.D(100, 400, 'g', 30, 30),
			w.D(100, 500, 'o', 40, 40)
	)
	p = w.me(500, 200)
	w.spg(b1, p)
	w.spg(b2, p)
}
VIN = function () {
	W(250).Y().P()
	w.trap(50)
	w.vine(200, 100, 15, 8)
	w.vine(210, 100, 25, 8)
	w.vine(220, 100, 25, 5)
	w.vine(260, 100, 3, 35).rJ(3, 20).rJ(3, 35)
	w.vine(300, 100, 30, 2)
	//blinds
	w.rJ(
			w.link1(600, 20, 3, '+').add(10),
			w.p(500, 200), '+')
	//ropey
	b = w.S(1100, 50, 'g', 60, 15).d(1)
	_.t(10, function (y) {
		w.rJ(
				b,
				b = w.D(1100, y * 20 + 80, 'w', 3, 15).d(1))
	})
	w.rJ(b,
			w.D(1100, 11 * 20 + 50, 'd', 20).d(1))
	p.cl('leaf', function (l) {
		w.jt = w.rJ(l.B(), p.XY(l.B()), R() ? '*' : null)
		$.space(function () {
			w.j(w.jt)
		})
	})
}
LSH = function () {
	W()
	p = w.p(300, 200)
	base = link(300, 20).stat()
	l = base.rJ(10)
	w.rJ(l, p.XY(l.X(), l.Y()))
	base = link(100, 20).stat()
	l = base.rJ(10)
	w.rJ(l, p.XY(l.X(), l.Y()))
	function link(x, y) {
		var l = w.rJ(x, y, '+')
		l.l = function (n) {
			var lk;
			n = N(n) ? n : 1
			_.t(n, function () {
				lk = link(l.X(), l.Y() + 10)
				r = w.rJ(l, lk)
				l = lk
			})
			return l
		}
		return l
	}
	
	/*
	
	 w.link2 = function(x,y){var w=this,b
	
	 b=w.rJ(x,y,'+')
	
	 b.l=function(n){var b=this, w=b.W()
	 _.t(N(n,1), function(){
	 w.rJ(b, b=w.l(b.X(),b.Y()+15))
	 })
	 return b}
	
	 return b
	
	 }
	
	 link3 = function(x,y){
	 var l= w.D(x,y,'y', 5, 10).d(4).r(2)
	 l.l= function(n){
	 _.t(N(n,1), function(){
	 l = link3(l.X(),l.Y()+20)})
	 return l}
	 return l}
	
	 link0=function(x,y){return w.D(x,y, 'w', 3, 15).d(1).fr(0).r(0)}
	
	 p2= w.p(1000,200)
	 base2 = w.link2(1000,20).stat()
	 l2 =  base2.rJ(10)
	 w.rJ(l2,p2)
	
	
	 w.$(function(){
	 base3 = link3(600,20).stat()
	 l3 =  base3.l(10)
	 })
	
	
	
	 w.floor.r(0)
	 prev = top = w.S(400,50,'g', 60,15)
	 _.t(10, function(i){var next
	 next=link(255,(i+1)*30)
	 prev = prev.rJ(next)})
	 //body.rev(body2) returns body2 !!!!!
	 w.rJ(prev, w.D(400, 330, 'd',20).d(1).r(0))
	
	
	
	
	 y = w.y(600,170).rot(265).stat()
	 w.cl('bu',function(f){
	 if(!f.of(y)){f.B().kill()}
	 })
	
	 */
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
BTC = function () {
	W({g: 0})
	w.rJ(w.S(300, 600, 'a', 200),
			w.D(300, 400, 'b', 100, 100))
	b = w.D(270, 500, 'o', 40).r(.5)
	r = w.S(300, 300, 'g', 100, 20).d(.1).damp(1000, 1000).rt(100).dyn()
	r.rec('g', 20, 40, 60, -20)
	cjs.t(function () {
		b.F(0, 400)
	})
}
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
LFL = function () {
	W()
	w.lFlip(600, 300)
}
FLP = function () {
	W()
	f1 = w.flippers(100, 430)
	f2 = w.flippers(100, 230)
	f3 = w.flippers(300, 130)
	flip = function () {
		f1();
		f2();
		f3()
	}
}
PRS = function () {
	W().P(800)
	j1 = w.pJ(w.D(200, 500, 'z', 60).K('ride'),
			w.S(200, 500, 's', 40, 150).K('cart'))//.lm(-30, 60).speed(-100).motor(1).maxForce(1000)
			.lm(-30, 60).mt(-10)//.speed(-100).maxForce(1000)
	j2 = w.pJ(w.D(400, 500, 'z', 110).K('ride'),
			w.S(400, 500, 's', 40, 300).K('cart'))
			.lm(-30, 60).mt(10)//.speed(-100).maxForce(1000)
	w.pJ(
			w.D(600, 500, 'z', 80).K('ride'),
			w.S(600, 500, 's', 40, 250).K('cart')
	).lm(-30, 60).mt(-100)//.speed(-100).maxForce(1000)
	w.b(function (cx) {
		cx.w('cart', function () {
			w.e(function (b) {
				if (b.of('ride')) {
					b.I(0, -1000)
				}
			})
		})
	})
}
WED = function () {
	W([1500, 1000], {g: 0})
	w.wed(
			w.D(300, 300, 'r', 130),
			w.D(300, 650, 'b', 130, 400)
	)
	w.wed(w.S(200, 100, 'x', 30),
			w.D(200, 100, 'v', 30), 0, 10)
	w.wed(w.S(300, 100, 'l', 30),
			w.D(300, 200, 'x', 30), 0, -10)
	w.wed(w.S(400, 100, 'g', 30),
			w.D(400, 300, 'x', 30), 10, 10)
	w.wed(w.S(500, 100, 'x', 30), w.D(500, 100, 'v', 30), 10, -10)
	w.wed(w.S(600, 100, 'x', 30), w.D(600, 100, 'v', 30), 10, -20)
	w.wed(w.S(700, 100, 'x', 30), w.D(700, 100, 'v', 30), 10, -30)
	w.wed(w.S(800, 100, 'x', 30), w.D(800, 100, 'v', 30), -10, -40)
	w.wed(w.S(900, 100, 'x', 30), w.D(900, 100, 'v', 30), -10, -50)
	/*
	 w.wed(w.S(100,200,'x',30), w.S(100,200,'v',30),0,0)
	 w.wed(w.S(200,200,'x',30), w.S(200,200,'v',30),0,10)
	 w.wed(w.S(300,200,'x',30), w.S(300,200,'v',30),0,-10)
	 w.wed(w.S(400,200,'x',30), w.S(400,200,'v',30),10,10)
	 w.wed(w.S(500,200,'x',30), w.S(500,200,'v',30),10,-10)
	 w.wed(w.S(600,200,'x',30), w.S(600,200,'v',30),10,-20)
	 w.wed(w.S(700,200,'x',30), w.S(700,200,'v',30),10,-30)
	 w.wed(w.S(800,200,'x',30), w.S(800,200,'v',30),-10,-40)
	 w.wed(w.S(900,200,'x',30), w.S(900,200,'v',30),-10,-50)
	
	 w.wed(w.D(100,500,'x',30), w.S(100,500,'v',30),0,0)
	
	 w.wed( w.D(200,500,'x',30), w.S(200,500,'v',30) )
	
	
	 w.wed(
	 w.D(300,500, 'o', 30),
	 w.D(300,500,'g', 50,50),
	
	 V(0,-10)
	 )
	
	 w.wed(w.D(400,500,'x',30), w.S(400,500,'v',30), V(10,10))
	 w.wed(w.D(500,500,'x',30), w.S(500,500,'v',30),V(10,-10))
	 w.wed(w.D(600,500,'x',30), w.S(600,500,'v',30),10,-20)
	 w.wed(w.D(700,500,'x',30), w.S(700,500,'v',30),10,-30)
	 w.wed(w.D(800,500,'x',30), w.S(800,500,'v',30),-10,-40)
	 w.wed(w.D(900,500,'x',30), w.S(900,500,'v',30),-10,-50)
	 */
}
JTL = function () {
	W({g: 300}).P()
	p.XY(100, 550).track()
	j = w.pJ(
			w.S(400, 200, 's', 140, 240).K('cart'),
			w.D(200, 100, 'b', 40, 40).K('ride')
	)
	j.tran = function () {
		return this.GetJointTranslation() * 30
	}
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
NET = function () {
	W({g: 30, w: '_'}).C('r');
	blocks = function () {
		w.goal(1800, 0)
		block(400, 100)
		block(800, 0)
		block(1100, -50)
		block(1300, -200)
		function block(x, y) {
			return w.S(x, y, 't', 50, 50).K('randomRect')
		}
	};
	blocks()
	sw = cjs.stopWatch()
	wM = p = b = w.p(4).XY(394, 530).fixRot().rest(0).den(.14).fric(1).K('player')
	wM.canWeb = true
	//this is tracking !!
	w.s.tickX(function () {
		return 600 - p.X()
	});
	w.s.tickY(function () {
		return 510 - p.Y()
	})
	w.beg(function (cx) {
		var wb
		cx.w('webBall', 'randomRect', function (rc) {
			wb = _.findWhere(p.webs, {ball: this.B()})
			if (wb && !wb.connected) {
				wb.attach(rc.B())
			}
		})
	})
	$.key({
		r: function () {
			var K = $.K
			if (K.d) {
				p.didShoot = true;
				if (!F(p.shotClock)) {
					p.shotClock = cjs.stopWatch()
				}
				;
				return
			}
			if (p.isConnected()) {
				p.F(100, 0)
			} else {
				p.I(8, 0)
			}
		},
		l: function () {
			var K = $.K
			if (K.d) {
				p.didShoot = true;
				if (!F(p.shotClock)) {
					p.shotClock = cjs.stopWatch()
				}
			}
			if (p.isConnected()) {
				p.F(-250, -50)
			} else {
				p.I(-8, 0)
			}
		},
		R: function () {
			var K = $.K;
			p.webs = p.webs || []
			if (p.webs[1]) {
				p.webs[1].die()
			}
			;
			if (K.d) {
				p.shR()
			}
		},
		L: function () {
			var K = $.K;
			p.webs = p.webs || []
			if (p.webs[1]) {
				p.webs[1].die()
			}
			;
			if (K.d) {
				p.shL()
			}
		},
		D: function () {
			if (!p.didShoot && p.webs[0]) {
				_.f(p.webs).die()
			}
			p.didShoot = false
		},
		U: function () {
			var cn = _.reject(p.webs, function (w) {
						return !w.connected
					}) || []
			if (cn[0] && cn[1]) {
				cn[0].die()
			}
			p.canWeb = true;
			p.shotForce = 0
		},
		u: function () {
			var K = $.K, web, ba, n
			if (p.isConnected() && !p.webs[1] && p.canWeb) {
				n = Math.abs(p.lV().x * 2)
				p.net(3000).ball
						.XY(p.X(), p.Y() - 100)
						.I(K.r ? n : K.l ? -n : 0, -30)
			}
			else if (!p.webs || !p.webs[0] && p.canWeb) {
				p.net(3000).ball.XY(p.X(), p.Y() - 100)
						.I(K.l ? [-30, -40] : K.r ? [30, -40] : [0, -70])
			}
			p.canWeb = false
		}
	})
}
WBM = function () {
	W([1200, 1400], {g: 150, w: '_'}).C('z').s.C('z')
	block(400, 500);
	block(800, 400);
	block(1100, -505);
	block(1300, -400)
	function block(x, y) {
		return w.S(x, y, 't', 120, 120, 't').K('randomRect rr')
	}
	
	w.goal(1800, 0)
	sw = $sw()
	p = w.p(394, 530, 4).r(0).d(2).fr(1).K('wbMan')//.tr()
	p.WEBS = [];
	p.canW = 1;
	p.expire = 2
	p.d(.2)
	p.bit(0)
	//p.fixedRot(false)
	$.kD({
		u: function () {
			p.unstick()
			// if(!p.iCn()){
			b = p.shootWeb()
			b.lD(0)
			if (K.r) {
				b.lV(12000, -1000200)
			}
			else if (K.l) {
				b.lV(-120000, -100200)
			}
			else {
				b.lV(0, -14000)
			}
			//}
		},
		l: function () {
			p.I(-50, -30)
		},
		r: function () {
			p.I(50, -30)
		},
		d: function () {
			p.unstick()
		}
	})
	js = []
	w.b(function (cx) {
		cx.w('wbB', 'rr', function (rr) {
			var b = this.B(), rr = rr.B()
			web = _.fW(p.WEBS, {ball: b})
			// of all my WEBS, get me the web where the ball is the ball i just shot!
			if (web) {
				web.stick(rr)
			}
		})
	})
	_.inx(1, function () {
		p.shootWeb()
	})
	//w.s.tickX(function(){return 600- p.X()});
	//w.s.tickY(function(){return 510- p.Y()})
	w.s.tickX(function () {
		return 600 - p.X()
	});
	w.s.tickY(function () {
		return 510 - p.Y()
	})
}
BRD = function () {
	W().randRects()
	p = w.Webman()
	$.kD({
		l: function () {
			p.I(-20, 0)
		},
		r: function () {
			p.I(20, 0)
		},
		d: function () {
			p.unstick()
		},
		u: function () {
			// if(!p.iCn()){
			p.Web().b.I(0, -100)
			// }
		}
	})
	w.b(function (cx) {
		cx.w('wbB', function (f) {
			var web = _.fW(p.WEBS, {ball: this.B()})
			if (!web.cn) {
				web.stick(f.B())
			}
		})
	})
}
WEB = function () {
	W()
	w.roof.kill();
	w.right.kill();
	w.left.kill()
	_.t(40, function (i) {
		w.S(
				R(1100, 50), R(500, -50), 'r', R(30, 15), R(30, 15)
		).K('rr')
	})
	p = w.Webman()
	$.kD({
		l: function () {
			p.lV(-40, 0)
		},
		r: function () {
			p.lV(40, 0)
		},
		d: function () {
			if (p.WEBS[0]) {
				_.l(p.WEBS).kill()
			}
		},
		u: function () {
			if (!p.iCn()) {
				
				//make a web and shoot its ball (the dense part)
				//the ball is kind of a brain for this thing
				p.Web().ball.I(0, -100)
			}
		}
	})
	w.b(function (cx) {
		cx.w('wbB', 'rr', function (f) {//
			var web = _.fW(
					p.WEBS, {ball: this.B()}
			)
			if (!web.cn) {
				web.stick(f.B())
			}
		})
	})
}
WBY = function () {
	W({g: 30, w: '_'}).C('z').s.C('z')
	block(400, 100)
	block(800, 0)
	block(1100, -50)
	block(1300, -200)
	w.goal(1800, 0)
	sw = $sw()
	p = w.Webman()
	w.b(function (cx) {
		cx.w('wbB', 'rr', function (rr) {
			var b = this.B(), rr = rr.B()
			web = _.fW(p.WEBS, {ball: b})
			// of all my WEBS, get me the web where the ball is the ball i just shot!
			if (web) {
				web.stick(rr)
			}
		})
	})
	$.kD({
		u: function (e, K) {
			var i
			if (p.iCn() && p.WEBS && !p.WEBS[1] && p.canW) {
				i = M.a(p.lV().x * 2) * (K.r ? 1 : K.l ? -i : 0)
				p.wb(3000).b.XY(p.X(), p.Y() - 100).I(i, -30)
			}
			else if (!p.WEBS || !p.WEBS[0] && p.canW) {
				p.stat()
				p.wb(3000).b.XY(p.X(), p.Y() - 200).bit(0)
						.I(K.l ? [-30, -40] : K.r ? [30, -40] : [0, -470])
			}
			p.canW = 0
		},
		U: function (e, K) {
			var cn = _.rj(p.WEBS, function (w) {
						return !w.cn
					}) || []
			if (cn[0] && cn[1]) {
				cn[0].kill()
			}
			p.canW = 1;
			//p.shotForce=0
		},
		r: function (e, K) {
			if (K.d) {
				p.didShoot = 1
				p.sw = p.sw || $sw()
			}
			else {//k.D
				p.F(//fX
						p.iCn() ? 100 : 8, 0)
			}
		},
		R: function (e, K) {
			p.WEBS = p.WEBS || []
			if (p.WEBS[1]) {
				p.WEBS[1].kill()
			}
			if (K.d) {
				p.shR()
			}
		},
		l: function (e, K) {
			if (K.d) {
				p.didShoot = 1;
				if (!F(p.sw)) {
					p.sw = $sw()
				}
			}
			if (p.iCn()) {
				p.F(-250, -50)
			}
			else {
				p.I(-8, 0)
			}
		},
		L: function (e, K) {
			p.WEBS = p.WEBS || []
			if (p.WEBS[1]) {
				p.WEBS[1].kill()
			}
			if (K.d) {
				p.shL()
			}
		},
		D: function (e, K) {
			if (!p.didShoot && p.WEBS[0]) {
				_.f(p.WEBS).kill()
			}
			p.didShoot = false
		}
	})
	w.s.tickX(function () {
		return 600 - p.X()
	});
	w.s.tickY(function () {
		return 510 - p.Y()
	})
	function block(x, y) {
		return w.S(x, y, 't', 50, 50, 't').K('randomRect rr')
	}
}
BLN = function () {
	W([1200, 600, 1200, 2000], {g: 300})
	p = w.p(394, 530, 4).track()
	Blns = []
	$.kD({
		l: function () {
			p.I(-100, 0)
		},
		r: function () {
			p.I(100, 0)
		},
		d: function () {
			pop()
		},
		u: function () {
			p.I(0, 100)
			Bln()//.I(0,-100)
		}
	})
	//cjs.t(function(){_.e(Blns,function(b){b.F(0,-4000)})})
	function Bln() {
		$l('Bln')
		var y = p.Y(),
				x = p.X(), l,
				b = w.D(p.X(), p.Y() - 10)
		b.cir({c: $r(), r: 40, o: .5}).d(.1)
		b.ls = []
		b.K('bln')
		Blns.push(
				b
		)
		l = w.l(x, y);
		w.dJ(p, l);
		b.ls.push(l)
		_.t(9, function (i) {
			var nL;
			b.ls.push(nL = w.l(x, y - i));
			w.dJ(l, nL);
			l = nL
		})
		w.dJ(l, b)
		b.kill = function () {
			var b = this
			_.e(b.ls, function (l) {
				l.kill()
			});
			b.kill()
			Blns[Blns.indexOf(b)] = null
			Blns = _.compact(Blns)
		}
		return b
	}
	
	/*
	
	 function pop(){var wb;if(wb=_.l(Blns)){wb.kill()}}
	
	 /*
	
	 w.b(function(cx){cx.w('bln', function(f){
	
	 if(  f.of(w.left)||f.of(w.right) ){
	 this.B().kill()
	 }})})
	 */
	/*
	
	
	
	
	
	
	 // x.w('web', 'floor', function(){p.destroyWeb();p.hanging = false})
	 */
}
