pH.vs = pH.vertsx = function () {
	var pH = this
	return _.m(pH.m_vertices, function (v) {
		return [v.x * 30, v.y * 30]
	})
}
pH.arr = function (v) {
	var p = this
	v = _.m(v, function (v) {
		return V(v).d()
	})
	p.SetAsArray(v, v.length)
	return p
}
pH._box = function () {
	var pH = this
	pH.SetAsOrientedBox.apply(this, arguments)
	return pH
}
pH.box = function () {
	var pH = this, g = G(arguments),
			o = g.O ? g.f :
					_.x({w: g.f, h: g.s}, O(g.t) ?
					{x: V(g.t).x, y: V(g.t).y, a: g[3]} :
					{x: g.t, y: g[3], a: g[4]})
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.a = N(o.a, 0)
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	return pH._box(o.w / 60, o.h / 60, V(o.x, o.y, '-'), M.tR(o.a))
}
pH.setAsVec = function (v, sc) {
	var pH = this //used by SepLib
	pH.SetAsVector(_.m(v, function (v) {
		return V(v).div(N(sc, 30))
	}))
	return pH
}
fD.H = function (h) {
	if (U(h)) {
		return this.shape
	}
	this.shape = h
	return this
}
fD.vrt = fD.verts = function () {
	var shape = this.shape,
			verts = shape.m_vertices,
			verts = [
				verts[0].mult(),
				verts[1].mult(),
				verts[2].mult(),
				verts[3].mult()]
	return $l(verts)
}
fD.box = fD.sAB = function (a, b, p, A) {
	if (!p) {
		this.shape.SetAsBox(a / 30, b / 30)
	}
	else {
		this.shape.SetAsOrientedBox(a / 30, b / 30, p, A)
	}
	return this
}
fD.fr = fD.f = fD.frc = fD.fric = function (f) {
	var fD = this
	if (U(f)) {
		return this.friction
	}
	fD.friction = f
	return fD
}
fD.d = fD.den = function (d) {
	var fD = this
	if (U(d)) {
		return fD.density
	}
	fD.density = d;
	return fD
}
fD.r = fD.bo = fD.rst = fD.rest = function (r) {
	var fD = this
	if (U(r)) {
		return fD.restitution
	}
	fD.restitution = r;
	return fD
}
fD.sen = fD.sensor = fD.iS = function (isSensor) {
	if (U(isSensor)) {
		return this.isSensor
	}
	this.isSensor = isSensor ? true : false
	return this
}
fD.K = function (k) {
	var fD = this
	if (U(clas)) {
		return fD.getClass()
	}
	fD.classes = fD.classes || []
	fD.classes.push(clas)
	return fD
}
fD.getClasses = fD.getClass = function () {
	var g = G(arguments), fD = this, classes
	fD._K = fD._K || []
	ks = fD.classes.join(' ')
	if (g.p) {
		ks += ' : ' + fD.body().getClasses()
	}
	return ks
}
fD.D = fD.data = function (data) {
	if (U(data)) {
		return this.userData
	}
	this.userData = data;
	return this
}
f.N = f.next = function () {
	return this.GetNext()
}
f.sen = function (s) {
	var f = this
	if (U(s)) {
		return f.IsSensor()
	}
	if (s == '/') {
		s = f.SetSensor(!f.IsSensor())
	}
	else {
		f.SetSensor(s ? true : false)
	}
	return f
}
f.r = f.bo = f.rest = function (rest) {
	if (U(rest)) {
		return this.GetRestitution()
	}
	this.SetRestitution(rest);
	return this
}
f.rot = function (rot, g) {
	return this.B().rot(rot, g)
}
f.fr = f.f = f.fric = function (fric) {
	if (U(fric)) {
		return this.GetFriction()
	}
	this.SetFriction(fric);
	return this
}
f.d = f.den = function (den) {
	if (U(den)) {
		return this.GetDensity()
	}
	this.SetDensity(den)
	this.body().ResetMassData()
	return this
}
f.lV = function () {
	var f = this, b = f.B(), g = G(arguments)
	b.lV.apply(b, g)
	return f
}
f.stat = function () {
	var b = this.B();
	b.stat.apply(b, arguments);
	return this
}
f.dyn = function () {
	var b = this.B();
	b.dyn.apply(b, arguments);
	return this
}
f.kin = function () {
	var b = this.B();
	b.kin.apply(b, arguments);
	return this
}
f.B = f.body = function () {
	return this.GetBody()
}
f.W = function () {
	return this.B().W()
}
f.iS = function () {
	return this.B().iS()
}
f.iD = function () {
	return this.B().iD()
}
f.iK = function () {
	return this.B().iK()
}
f.isBType = f.isType = function (t) {
	var f = this
	if (t) {
		return f.bType() == t
	}
}
f.bType = function () {
	return this.B().GetType()
}
f.cen = f.mid = f.cent = f.center = function () {
	//center point of its BOUNDING BOX
	var f = this, b = f.B(), w = b.W(), g = G(arguments),
			bd = f.GetAABB(),
			v = M.lC(bd.lowerBound, bd.upperBound).mult()
	if (g.p) {
		w.dot(v)
	}
	return v
}
f.pX = function () {
	return this.pos().x
}
f.pY = function () {
	return this.pos().y
}
f.rad = function () {
	return this.H().m_radius * 30
}
f.H = function (h) { //should let user specify dimensions of shape, // not just have to pass formed shape in
	if (U(h)) {
		return this.GetShape()
	}
	this.m_shape = h
	// it DOES WORK! // but is this much different than // just replacing the fixt?
	return this
}
f.iC = function () {
	return this.H() && this.H().m_type == 0
}
f.hT = f.hType = function () {
	return this.H().m_type
}
f.pos = function () {// for circs
	return V(this.H().m_p.x * 30, this.H().m_p.y * 30)
}
f.$ = function (fn) {
	var f = this, b = f.B(), w = b.W()
	w.$(function (o) {
		w.q(o.x, o.y, function (fx) {
			if (f == fx) {
				_.b(fn, f)(o)
			}
		})
	})
	return f
}
f.kill = function () {
	var f = this, b = f.B(), w = b.W()
	if (!f) {
		return
	}
	if (w._fPreKill) {
		w._fPreKill(f)
	}
	if (b) {
		b.rmF(f)
	}
}//= f.xx = f.remove
f.killB = f.kB = f.xB = f.xX = f.XX = function () {
	if (this && this.B()) {
		this.B().kill()
	}
} 