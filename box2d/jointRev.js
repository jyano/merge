b2d.p()
b.rJ = function (b1, yOff) {
	var b = this, w = b.W(), g = G(arguments), c, cc
	if (b2d.iF(b1)) {
		b1 = b1.B()
	}
	if (b2d.iB(b1)) {
		b1.XY(b.X(), b.Y())
		w.rJ(b, b1)
		return b1
	}
	if (R()) {
		c = 'r'
		cc = 1
	}
	else {
		c = 'g'
	}
	_.t(N(g[0], 1), function () {
		var nB = w.rJ(b)
		nB.Y(N(g[1], 8), '+')
		w.rJ(b, nB)
		b = nB
	})
	return b
	//pad=N(pad,15)
}
w.vine = function (x, y, n, m) {
	return this.rJ(x, y, n, '/').rJ(n || 10, m).K('leaf')
}
w.trap = function (x, y) {
	var w = this
	x = N(x, 300);
	y = N(y, 50)
	w.vine(x, 100, 5)
	w.vine(x + 20, y, 6)
	w.vine(x + 40, y, 10)
	w.vine(x + 60, y, 10)
	w.vine(x + 80, y, 6)
	w.vine(x + 90, y, 4)
	return w
}
w.link1 = function self(x, y, n) {
	var g = G(arguments),
			b = w.rJ(x, y, '*')
	b.add = function (n) {
		var b = this
		_.t(N(n, 1), function () {
			var nB
			nB = w.rJ(b.X(), b.Y() + 24, '*')
			w.rJ(b, b = nB)
		})
		return b
	}
	if (g.p) {
		b.stat()
	}
	if (N(g[2])) {
		b.add(g[2])
	}
	return b
}
//shrink = function(){_.e(ropeJoints, function(j){j.shrink()})}
//marionette game?
b2d.p()
rJD.i = rJD.init = function () {
	var jd = this, g = G(arguments)
	//just a shortcut to call initialze.  have i ever even done that?  laaaame waaah waaaaah
	jd.Initialize.apply(jd, g)
	return jd
}
rJ.lm = function () {
	var j = this, g = G(arguments),
			a = g[0], b = g[1]
	if (a === true) {
		j.EnableLimit(true);
		return
	}
	j.SetLimits(M.tR(a), M.tR(b))
	if (g.N) {
		j.EnableLimit(true)
	}
	return j
}
rJ.mt = function (s, tor) {
	var j = this, g = G(arguments)
	j.SetMotorSpeed(s)
	j.SetMaxMotorTorque(_.tN(tor, 100000))
	if (g.N) {
		j.EnableMotor(true)
	}
	return j
}
rJ.sp = function (s) {
	var j = this
	if (U(s)) {
		return j.GetMotorSpeed()
	}
	j.SetMotorSpeed(s);
	return j
}
w._rJ = function () {
	var w = this, g = G(arguments), o, jd, j
	o = b2d.iB(g[0]) ?
	{a: g[0], b: g[1]} :
			g[0]
	jd = new b2d.RevoluteJointDef
	jd.bodyA = o.a
	jd.bodyB = o.b
	j = w.J(jd)
	return j
}
w.rJ = function () {
	var w = this, g = G(arguments), o, aC, bC, jd, b, v
	if (g.N_ || ( b2d.iB(g.f) && U(g.s) )) {
		v = V(g.f, g.s)
		b = g.p ? w.D(v.x, v.y, 'y', 10, 10).d(1).r(.5) :
				g.m ? w.D(v.x, v.y, $r(), 50, 15) :
						w.D(v.x, v.y, 'r', 4, 20).d(4).r(2)
		if (g.d) {
			b.stat()
		}
		return b
	}
	if (g.p) {
		g.s.XY(g.f)
	}
	o = b2d.iB(g.f) ? {a: g.f, b: g.s} : g.f
	jd = new b2d.RevoluteJointDef
	jd.bodyA = o.a
	jd.bodyB = o.b
	if (g.m) {
		jd.cl(true)
	}
	if (N(g[3])) {
		jd.aV(g.t, g[3])
		if (N(g[5])) {
			jd.bV(g[4], g[5])
		}
	}
	else if (O(g[3])) {
		jd.aV(g[3])
		if (O(g[4])) {
			jd.bV(g[4])
		}
	}
	else {
		aC = o.a.wC()
		bC = o.b.wC()
		xx = o.a.X() - o.a.wC().x
		yy = o.a.Y() - o.a.wC().y
		xx = bC.x - aC.x
		yy = bC.y - aC.y
		jd.aV(xx, yy)
	}
	return w.J(jd)
}
b.pin = function () {
	var b = this, w = b.W(), j,
			b1 = w.S(b.X(), b.Y())
	w.rJ(b1, b)
	return b
}
w.spinner = function (x, y, s, t) {
	var g = G(arguments)
	x = N(g[0], 500)
	y = N(g[1], 200)
	s = N(g[2], 10)
	t = N(g[3], 100)
	if (g.n) {
		s *= -1
	}
	w.rJ(
			dial = w.D(x, y, 'r', 200, 40), rock = w.S(x, y, 'b', 10, 10)
	).mt(s, t)
	//<- rJt({  i:[rock, dial, dial.c()],  eM:1,  mS:-10,  mMT:100  })
}
w.perch = function (c) {
	var w = this //specific structure, birdage in sky
	c = c || 't'
	w.S(200, 50, c, 300, 20) //top
	w.S(200, 360, c, 300, 20) //bottom
	w.S(60, 240, c, 20, 260) //left
	w.S(340, 320, c, 20, 100)//right
	return w
}
w.seesaw = function (x, y) {
	var w = this,
			anc = w.S(x, y, 'h', 60, 60),
			lev = w.D(x, y, 'g', 300, 20)
	w.rJ(anc, lev).lm(-30, 30)
}
wh = function (wh, sp) {
	var j
	j = w.rev(wh.fr(0).d(1), s)
	if (N(j)) {
		j.mt(sp)
	}
	return j
}
sus = function (x, y) {
	return w.D(x, y, 'b', 90, 30)
}
w.car = function (x, y, sp1, sp2) {
	var w = this, b
	s = w.D(x, y, 'b', 90, 30)//.bS('me')
	sp1 = sp1 || 2;
	sp2 = sp2 || sp1
	w.rJ(w.D(x - 40, y + 50, 'o', 30), s).mt(sp1)
	b = w.D(x + 60, y + 50)
	b.cir({c: 'x', r: 30, rf: 1})
	w.rJ(b, s).mt(sp2)
	return s
}
w.car1 = function () {
	var w = this, s = sus(150, 150)
	wh(w.D(200, 150, 'r', 30), 120)
	wh(w.D(100, 150, 'b', 30), 150)
	return s
}
w.roller = function () {
	var w = this, s = sus(250, 150)
	a = w.D(300, 150, 'r', 30)
	wh(a, 6)
	// wh(w.D(200, 150, 'r', 30), -500)
	return s
}
w.makeCar = function () {
	var w = this, s = sus(240, 350)
	wh(w.D(300, 400, 'r', 30), 4)
	wh(w.D(200, 400, 'y', 30), 4)
	return s
}
w.wh = function () {
	var w = this, g = G(arguments), wh, o
	o = O(g[0]) ? g[0]
			: {x: g[0], y: g[1], r: g[2], n: g[3]}
	o.r = N(o.r, 40)
	o.c = o.c || 'x'
	wh = w.D(o.x, o.y)
	wh.cir({c: o.c, r: o.r, C: 'w', l: 10, lf: 1})
	return wh
}
w.pWh = function () {
	var w = this, g = G(arguments), wh, o
	o = O(g[0]) ? g[0]
			: {x: g[0], y: g[1], r: g[2], n: g[3]}
	o.r = N(o.r, 40)
	o.n = N(o.n, 15)
	o.c = o.c || 'x'
	wh = b2d.pC(o.r, o.n)
	return w.D(o.x, o.y, o.c, [wh])
}
b.wheel = function () {
	var b = this, w = b.W(), g = G(arguments), o,
			j, wh
	o = O(g[0]) ? g[0]
			: {x: g[0], y: g[1]}//,r:g[2],n:g[3]}
	wh = w.wheel(600, 300)
	j = w.rJ(wh, b, 0, 0, o.x, o.y)
	return j
}
j.M = function (t) {
	this.SetMaxMotorTorque(t)
	return this
}

 