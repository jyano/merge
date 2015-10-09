
//normal
bCo.no = function (x, y) {
	this.normal.Set(x, y);
	return this
}
//offset
bCo.os = function (os) {
	this.offset = os;
	return this
}
//drag
bCo.lD = function (lD) {
	this.linearDrag = N0(lD)
	return this
}
bCo.aD = function (aD) {
	this.angularDrag = N0(aD)
	return this
}
bCo.dg = bCo.drag = function (lD, aD) {
	return this.lD(lD).aD(aD)
}
//density
bCo.d = bCo.den = function () {
	var bCo = this, g = G(arguments)
	bCo.density = g.f
	if (!g.n) {
		bCo.uD(1)
	}
	return bCo
}
bCo.uD = function (u) {
	this.useDensity = u ? true : false
	return this
}
w.tCo = function (a, b, c, d) {
	var co = new b2d.Co.b2TensorDampingController
	this.co(co)
	return co
}
w.bCo = function (nX, nY, lD, aD) {
	var w = this, g = G(arguments), o, co
	//co = new b2d.BuoyancyController
	co = new b2d.Co.b2BuoyancyController
	o = {nX: g.f, nY: g.s, lD: g.t, aD: g[3]}
	o.nX = N(o.nX, 0) //normX
	o.nY = N(o.nY, -1) //normY
	o.lD = N(o.lD, 2) //linDrag?
	o.aD = N(o.aD, 1) //angDrag?
	//Offset,Density,'Clear'
	co.no(o.nX, o.nY).drag(o.lD, o.aD) //dg? //wait drag or damp???
	this.co(co)
	return co
}
w.aCo = function (x, y) {
	var w = this, co = new b2d.ConstantAccelController
	if (x || N(x)) {
		co.V(x, y)
	}
	w.co(co)
	return co
}
w.fCo = function (x, y) {
	var w = this,
			co = new b2d.Co.b2ConstantForceController()
	co.V(N0(x), N0(y))
	w.co(co)
	return co
}
w.gCo = function (gv, wantFasterR1) {
	var w = this, g = G(arguments),
			co = new b2d.Co.b2GravityController
	if (g.N_) {
		co.G = g.f
	}
	if (g.s || g.p) {
		co.r1()
	}
	w.co(co)
	return co
}
gCo.g = gCo.grav = gCo.V = function (gv) {
	//applies 'gravity' by default
	this.G = V(1, 100)//N(gv,1)
	return this
}
gCo.r1 = function () {
	this.invSqr = false
	return this
}
gCo.r2 = function () {
	this.invSqr = true
	return this
} //this is default
// m i s c co ////
tCo.axis = function (ax) {
	this.SetAxisAligned(ax);
	return this
}
aCo.V = function () {
	var co = this, g = G(arguments), o
	//getter is a waste!  counterproductive... think about it! :)..
	// but for consistency..??? nah i can do better
	//applies 'gravity' by default
	o = g.N ? {y: g.f} : {x: g.f, y: g.s}
	o.y = N(o.x, 100)
	o.x = N(o.x, 0)
	co.A = g.u || (g.N_ && U(g.s)) ? V(0, N(g.f, 100)) : V(g.f, g.s)
	return co
}
fCo.V = function (x, y) {
	var fCo = this //applies 'gravity' by default
	fCo.F = U(x) ? V(0, 10) : V(x, y)
	return fCo
}
