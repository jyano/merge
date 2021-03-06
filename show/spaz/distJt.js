 
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
 
  