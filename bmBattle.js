ct.spazBm = function () {var ct = this, g = G(arguments), o, bm
			o = g.F_ ? {fn: g.s, sc: g.s} :
					g.N_ ? {sc: g.f, fn: g.s} :
							_.x({i: g.f},
							N(g.s) ? {sc: g.s, fn: g.t} :
							{fn: g.s, sc: g.t})
							//fn,sc  //sc,fn //i,sc,fn  //i,fn,sc
	o.sc = o.sc || 1; o.i = o.i || 'me'; o.al = N(o.al, 1)
	if (_.iDU(o.i)) {o.i = $.i(o.i)}
	if (O(o.i)) { return ct.A( $Bm(o.i ))  }
	
	
	$.i(o.i, function (i) {
		bm = $Bm(i).a2(ct).sXY(o.sc)
		if (!g.n) {bm.rC()}
		if (g.p) {bm.drag()}
		if (g.d) {bm.XY(-1000)}
		if (o.fn) {o.fn(bm)}
	})
	
	
	return ct

}


