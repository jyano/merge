b2d.reg = function (ps, b) {
	return _.m(ps, function (p) {
		return p.reg(b)
	})
}
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



pD.eP=pD.eachPoly=function(fn){
	var pD=this,polys=[]
	_.t(pD.nP(), function (i) {
			fn(pD.g(i), pD, i)
	})
}

pD._polys=function() {
	var polys = []
	this.eP(function (poly) {
		polys.push(poly)
	})
	return polys
}


pD.polys = pD.ps = pD.hs=  pD.pols=  function () {
	var pD = this, g = G(arguments),
		o = b2d.iB(g.f)? {
					polys : b2d.reg( this._polys(), g.f), 
					fn : g.s
		}:
				g.N_? {
					polys : b2d.reg( this._polys(), V(g.f, g.s)),
					fn : g.t
				 } : 
				 {fn : g.f}
	if (g.p) {o.polys = _.m(o.polys, M.p)}
	if (F(o.fn)) {_.e(o.polys, o.fn); return this};
	return o.polys
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