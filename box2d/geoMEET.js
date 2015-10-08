pD.reg = pD.rel = function (x, y) {
	return M.p(b2d.sub(this.vs(), V(x, y)))
}//you can pass in the verts, // or the gPoly itself! //what about a f?
pD.ger = function (x, y) {
	return this.reg(-V(x, y).x, -V(x, y).y)
}
gpc.hV = gpc.hPt = gpc.hasVertex = function (gP) {
	return gP.m_List.get(0)
}//used in MEET
pD.vs = function (fn) {
	var pD = this,
			g = G(arguments),
			o = g.F ? {fn: g.f} : {num: g.f, fn: g.s},
			vs = []
	_.t(pD.n(), function (i) {
		vs.push([pD.x(i), pD.y(i)])
	})
	vs = g.n ? b2d.sub(vs, o.num) :
			g.p ? b2d.add(vs, o.num) :
					vs
	if (o.fn) {
		_.e(vs, o.fn);
		return pD
	}
	return vs
}//used in MEET
f.wV = function () {
	var g = G(arguments),
			vs = g.n ? this.vs() : this.vs('+')
	return b2d.tA(b2d.add(vs, this.B()))
}//used in MEET
b2d.reg = function (ps, b) {
	return _.m(ps, function (p) {
		return p.reg(b)
	})
}
pD.polys = pD.ps = pD.hs=  pD.pols=  function () {

	var pD = this, g = G(arguments), fn,  polys

	//put all my polys in a new array
	polys=  []
	_.t(pD.nP(), function (i) {
		polys.push( pD.g(i) )
	})
	
	if (b2d.iB(g.f)) {
		polys = b2d.reg(polys,  g.f)	//return M.p(p).rel(g[0])
		fn = g.s
	}
	
	else if (g.N_) {
		polys = b2d.reg(polys,   V(g.f, g.s) )
		fn = g.t
	}
	
	else {fn = g.f}
	
	if (g.p) {polys = _.m(polys, M.p)}
	
	if (F(fn)) {_.e(polys, fn); return pD}; return polys
} // used in MEET
$L('_post')//careful here.. didnt properly implement _post yet (in $load)
function _pre(){
b.pos = function () {
	return this.tf().position.m()
}//used in MEET
}
function _post(){
	b2d.hV = b2d.hasVerts = gpc.hV
}