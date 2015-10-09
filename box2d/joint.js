b2d.p()
mouseJoint()
function mouseJoint() {
	b2d.mJ = function (body, tX, tY) {
		if (O(tX)) {
			tY = tX.y;
			tX = tX.x
		}
		var md = new b2d.Joints.b2MouseJointDef
		md.bodyA = w.GetGroundBody()
		md.bodyB = body
		md.target = V(tX, tY)
		md.collideConnected = true
		md.maxForce = 1000 * body.GetMass()
		md.dampingRatio = 0
		return md
	}
	mJ.tg = function (x, y) {
		if (U(x)) {
			return this.GetTarget().m()
		}
		this.SetTarget(V(x, y).div())
		return this
	} // world mouse down vs canvas mouse down!!! // canvas mouse down just uses $.oMD
	w.mJ = function () {
		var w = this, g = G(arguments), o, j,
				mJD = new b2d.Joints.b2MouseJointDef
		dR = 0
		mF = 50000000
		o = {
			a: w.GetGroundBody(),
			b: g.f, x: g.s, y: g.t,
			dR: N(g[3], dR),
			mF: N(g[4], mF),
			cl: g.N ? true : false
		}
		mJD.bodyA = o.a
		mJD.bodyB = o.b
		mJD.target = V(o.x, o.y, '-')
		mJD.dampingRatio = o.dR
		mJD.maxForce = o.mF
		mJD.collideConnected = o.cl
		return w.J(mJD)
	}
}
jD.A = function (a) {
	this.bodyA = a;
	return this
}
jD.B = function (b) {
	this.bodyB = b;
	return this
}
jD.AB = function (a, b) {
	return this.A(a).B(b)
}
jD.aV = jD.lAA = function () {
	var pJD = this, g = G(arguments)
	pJD.localAnchorA = V(g[0], g[1]).div()
	return pJD
}
jD.bV = jD.lAB = function () {
	var pJD = this, g = G(arguments)
	pJD.localAnchorB = V(g[0], g[1]).div()
	return pJD
}
jD.i = jD.init = function () {//joint.i=
	this.Initialize.apply(this, arguments)
	return this
}
jD.cC = jD.cl = jD.coll = jD.collide = function (a) {
	var jD = this
	jD.collideConnected = a ? true : false
	return jD
}
j.i = j.init = function () {
	var j = this
	j.Initialize.apply(j, G(arguments))
	return j
}
j.a = function (a) {
	if (U(a)) {
		return this.GetAnchorA().mult()
	}
	else {
		alert('j.A cannot set')
	}
}
j.b = function (a) {
	if (U(a)) {
		return this.GetAnchorB().mult()
	}
	else {
		alert('j.B cannot set')
	}
}
j.A = function (a) {
	return this.GetBodyA()
}
j.B = function (a) {
	return this.GetBodyB()
}
j.a = function (a) {
	return this.GetAnchorA().m()
}
j.b = function (a) {
	return this.GetAnchorB().m()
}
j.W = function () {
	return this.A().W()
}
j.T = function () {
	return this.GetType()
}
b.j = b.joint = function () {
	return this.GetJointList().joint
}
j.destroy = function () {
	var j = this.W().DestroyJoint(this)
	this.destroyed = true
	return j
}
b.destroyAllJoints = function () {
	var b = this,
			toDestroy = [],
			je = b.j()
	while (je) {
		toDestroy.push(je.joint)
		je = je.next
	}
	_.e(toDestroy, function (j) {
		w.DestroyJoint(j)
	})
	return this
}
w.dJ = w.j = w.destroyJoint = function (a) {
	var w = this
	w.DestroyJoint(a);
	return w
}
w.cJ = w.J = w.joint = w.createJoint = function (a) {
	var w = this,
			j = this.CreateJoint(a)
	return j
}
j.target = function (a, b) {
	var j = this
	j.SetTarget(V(a, b))
	return j
}//mouse
w.colBalls = function () {
	var w = this
	r = w.D(300, 300, 'r', 12).DFB(1, 0.1, 1)
	b = w.D(400, 300, 'b', 12).DFB(1, 0.1, 1)
	y = w.D(500, 300, 'y', 12).DFB(1, 0.1, 1)
	g = w.D(600, 300, 'g', 12).DFB(1, 0.1, 1)
	p = w.D(700, 300, 'p', 12).DFB(1, 0.1, 1)
	o = w.D(800, 300, 'o', 12).DFB(1, 0.1, 1)
	return w
}
/*

 j.maxForce = j.mMF = j.mF = function (a, b, c) {
 this.SetMaxMotorForce(a, b, c);
 return this
 }
 j.lm = j.limits = j.setLimits = j.sL = function (a, b) {

 a = N(a) ? a : 20

 b = N(b) ? b : 180

 j.SetLimits(tRad(a), tRad(b))

 return j
 }
 j.enableLimits = j.enableLimit = j.eL = function (a) {
 this.EnableLimit(a ? true : false)
 return this
 }
 j.W = function () {
 return this.GetBodyA().GetWorld()
 }

 j.enabMot = function (a) {
 this.EnableMotor(a);
 return this
 }
 j.mot = function (speed, maxForce) {
 if (speed == '-') {
 this.EnableMotor(false);
 return this
 }
 speed = N(speed) ? speed : 100
 maxForce = N(maxForce) ? maxForce : 10000000
 this.enabMot(true).maxForce(maxForce).speed(speed)
 }



 */
b2d.p()
dJ.fq = dJ.freq = function (fq) {
	var j = this
	if (U(fq)) {
		return j.GetFrequency()
	}
	j.SetFrequency(fq)
	return j
}
dJ.l = dJ.len = function (a) {
	var j = this, g = G(arguments),
			l = j.GetLength() * 30
	if (g.u) {
		return l
	}
	j.SetLength(
			_.upd(j, g.f, g) / 30)
	return j
}
dJ.d = dJ.damp = function (dR) {
	if (U(dR)) {
		return this.GetDampingRatio()
	}
	this.SetDampingRatio(dR)
	return this
}
/*
 jd.freq=  function(a){
 if(U(a)){return this.frequencyHz}
 this.frequencyHz=a;return this
 }
 jd.len=function(len){
 if(U(len)){return this.length*30}
 this.length=len/30
 return this}
 jd.damp = function(a){if(U(a)){return this.dampingRatio}
 this.dampingRatio=a;return this}

 */
j.shrink = function () {
	var j = this
	j.len(0.97, '*')
	return j
}
b2d.dJ = function () {
	var g = G(arguments), jD, o
	o = {a: g.f, b: g.s}
	if (N(g.t)) {
		o.ancA = V(g.t, g[3])
		o.ancB = V(g[4], g[5])
	}
	if (O(g.t)) {
		o.ancA = V(g.t);
		o.ancB = V(g[3])
	}
	o.ancA = o.ancA || o.a.wC()
	o.ancB = o.ancB || o.b.wC()
	jD = new b2d.Joints.b2DistanceJointDef
	jD.Initialize(o.a, o.b, o.ancA.d(), o.ancB.d())
	return jD
}
w.Chain = function (fn) {
	var w = this
	var chain = {
		JS: [],
		NS: []
	}
	chain.eJ = function (fn) {
		_.e(this.JS, fn)
		return this
	}
	chain.eN = function (fn) {
		_.e(this.NS, fn)
		return this
	}
	chain.f = function (fq) {
		return this.eJ(function (j) {
			j.fq(fq)
		})
	}
	chain.d = function (d) {
		return this.eJ(function (j) {
			j.d(d)
		})
	}
	chain.l = function (l) {
		return this.eJ(function (j) {
			j.l(l)
		})
	}
	chain.j = function () {
		var g = G(arguments)
		var j = w.J($a(b2d.dJ, g))
		this.JS.push(j)
		return j
	}
	chain.J = function (o) {
		var j = this.j(o.a, o.b)
		if (N(o.f)) {
			j.fq(o.f)
		}
		if (N(o.d)) {
			j.d(o.d)
		}
		if (N(o.l)) {
			j.l(o.l)
		}
		return j
	}
	return chain
}
/* overlap??
 http://www.box2d.org/manual.html - also has other stuff
 b2Transform xfA = …, xfB = …;

 bool overlap = b2TestOverlap(shapeA, indexA, shapeB, indexB, xfA, xfB);
 */
//body.GetTransform()
//body.GetFixtureList().GetShape()
w.dJ = function () {
	var w = this, g = G(arguments), jd, j, o
	o = g.O ? g.f : _.x(
			{a: g.f, b: g.s},
			O(g[3]) ? {av: g.t, bv: g[3], l: g[4], f: g[5], d: g[6]} :
					O(g.t) ? {av: g.t, l: g[3], f: g[4], d: g[5]} :
					{l: g.t, f: g[3], d: g[4]}
	)
	b2d.dJ = function () {
		var g = G(arguments), dJD = new b2d.Joints.b2DistanceJointDef
		dJD.i = function (a, b, aV, bV) {
			var jd = this, g = G(arguments), o
			o = g.O ? g.f : {a: g.f, b: g.s, aV: g.t, bV: g[3]}
			if (o.av) {
				o.aV = o.a.wC().add(o.av || V())
			}
			else {
				o.aV = o.aV || o.a.wC()
			}
			o.bV = o.bv ? o.b.wC().add(o.bv || V()) : o.bV || o.b.wC()
			if (g.n) {
				o.aV = o.aV.d()
				o.bV = o.bV.d()
			}
			//////////////////////////////////
			jd.Initialize(o.a, o.b, o.aV, o.bV)
			/////////////////////////
			if (o.cl) {
				jd.cl(true)
			}
			return jd
		}
		if (g.f) {
			dJD.i(g.f, '-')
		}
		return dJD
	}
	jd = b2d.dJ(o)
	if (o.cl) {
		jd.cl(1)
	}
	j = w.J(jd).fq(N(o.f, 0)).d(N(o.d, 0))
	if (N(o.l)) {
		j.l(o.l)
	}
	return j
}
b.dJ = function (nxB) {
	var b = this, w = b.W()
	w.dJ(b, nxB)
	return nxB
}
w.spg = function (a, b) {
	var w = this;
	a = a || w.D(150, 150, 'b', 50)
	b = b || w.S(180, 150, 'w', 50, 50)
	return w.dJ({a: a, b: b, l: 1, f: 2})
}
w.brg = function (x, y) {
	var w = this, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10
	x = N(x, 400);
	y = N(y, 100)
	FIRST = w.S(x, y, 10)
	LAST = w.S(x + 700, y, 'b', 10)
	b2 = wood()
	b3 = wood()
	b4 = wood()
	b5 = wood()
	b6 = wood()
	b7 = wood()
	b8 = wood()
	b9 = wood()
	_.e([
				[FIRST, b2],
				[b2, b3], [b3, b4], [b4, b5], [b5, b6], [b6, b7], [b7, b8], [b8, b9],
				[b9, LAST]
			],
			function (p) {
				w.dJ({
					a: p[0], b: p[1],
					l: 6, f: 5,
					coll: 1
				})
			})
	function wood() {
		return w.D(100, 100, 'd', 90, 60).d(1).fixRot()
	}
}
j.wU = j.wu = j.wind = function () {
	var j = this, wound
	cjs.t(function () {
		var l, m
		m = wound ? 1.01 : .99
		l = j.l() * m
		j.l(l * m)
		if (l < 5) {
			wound = 1
		}
		if (l > 200) {
			wound = 0
		}
	})
}
//default freq is 0.  but thats like freq 10000000
//freq is tightness.  the default (0) is all the way tight.
//if u want to start to loosen it.  change from 0 to a very high number!
//try 50.. then u will see that it budges just a little.
//ok.. now keep going down..
// eventually it is too loose to fight against gravity
// hahaha then its just flat and usesless
// ok all this assumed a default damp of 0.
// now set the freq to a good oscillation (3 or 4)
// then play with the damp
// damp is like a tightner on your looseness
// it makes you less stretchy?
// just leave damp at 0 for now, and play with freq
//game:: he autojumps.  u jump to give him a double jump!
b.ch = function (n) {
	if (this.gx) {
		return this.gx.children[N(n, 0)]
	}
}
//w.l(0,0,w.W,w.H); w.l(w.W,0,0,w.H,'+')
// game:: density:  if u want to fit in here.. u will have to lower yourself a bit to our level..
// you see, compared to you, we a really quite dense. Not dense as in stupid, but as in, we have a high mass to volume ratio.
//  In otherwords, we can't jump!  It's a grave grave situation.
// Don't get me wrong, not grave as in bad, but grave, as in, it relates to gravity.  Additionally, it's quite bad.
// ok so freq is how much strngth u need to pull it??
// as freq gets low.. u can pull it farther away
// its the strength of the spring
// dont ever set a dJ().len(0)
//location pams are optional,
// and be default to their center points
// note: if you passe them in,
// pass them as relative(local to body) coords
//BOX2D requires them as WORLD points
// - for some reason..
// (but i think my way has more use cases)
//pass coll:true -> 'collideConnected=true'

