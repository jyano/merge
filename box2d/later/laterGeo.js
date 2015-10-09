function oldDIf() {
	b2d.hasAtLeastOnePolyX = b2d.hVSource = function (gP) {
		// if gP is a dP, then m_List is an array of (its inner) polySimples
		// [polySimp]
		//get just gets the index from the same (its own) array, hurray :)
		//as a bool tool, it checks to make sure that it has at least one polygon
		return gP.hasAtLeastOnePoly()
	}
	pD.minus = function (x, y) {
		$l('pD.minus')
		return M.p(
				_.m(this.vs(), function (v) {
					return V(v).sub(x || 0, y || 0)
				})
		)
	}
	$dif = DIF = function () {
		$l('$dif DIF')
		$l('DIF')//not each of the ps?
		var g = G(arguments),
				p = M.p(g.f)
		g.eR(function (p1) {
			p = p.D(p1)
		})
		return p
	}
}
f.dots = function () {
	var f = this;
	b2d.pD = b2d.polyDot = function (vs) {
		var t = 0
		vs = A(vs) ? vs : vs.wV
		w.dot('g', V(_.f(vs)))
		_.e(vs,
				function (v) {
					$.in(t, function () {
						w.dot(V(v))
					}, t)
					t += .1
				}
		)
		w.dot('r', V(_.l(vs)))
	}
	b2d.polyDot(f.wV())
	return f
}
pD.dot = function () {
	var p = this
	p.vs(function (v) {
		w.dot('o', v)
	})
	return p
}
pD.dot = function (w) {
	var pD = this
	pD.vs(function (v) {
		w.dot('w', v[0], v[1])
	})
	return pD
}
b2d.miniX = function () {
	iF = b2d.iF;
	iB = b2d.iB;
	iP = b2d.iGP
	pD = function () {
		return new PolyDefault()
	}
}
w.vDot = function (d) {
	var w = this
	w.dot('g', _.f(d))
	_.eR(d, function (v) {
		w.dot(v)
	})
	w.dot('r', _.l(d))
	return d
}
b2d.reg = function (ps, b) {
	$l('b2d.reg')
	return _.m(ps, function (poly) {
		return poly.reg(b)
	})
}
//gpc.hV = gpc.hPt = gpc.hasVertex = function (gP) {return gP.m_List.get(0)  }//used in MEET
pD.eP = pD.eachPoly = function (fn) {
	var pD = this, polys = []
	_.t(pD.nP(), function (i) {
		fn(pD.g(i), pD, i)
	})
}
pD._polys = function () {
	var polys = []
	this.eP(function (poly) {
		polys.push(poly)
	})
	return polys
}
pD.polys = pD.ps = pD.hs = pD.pols = function () {
	$l('pD.polys')
	var pD = this, g = G(arguments),
			o = b2d.iB(g.f) ? {
				polys: b2d.reg(this._polys(), g.f),
				fn: g.s
			} :
					g.N_ ? {
						polys: b2d.reg(this._polys(), V(g.f, g.s)),
						fn: g.t
					} :
					{fn: g.f}
	if (g.p) {
		o.polys = _.m(o.polys, M.p)
	}
	if (F(o.fn)) {
		_.e(o.polys, o.fn);
		return this
	}
	;
	return o.polys
} // used in MEET
