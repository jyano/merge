function later() {
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
}

 