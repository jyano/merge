b2d.add = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).add(p)
	})
}
b2d.glu = function (a, b) {
	return a.glu(b)
}
b2d.add = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).add(p)
	})
}
b2d.glu = function (a, b) {
	return a.glu(b)
}

pD.plus = function (x, y) {
	return M.p(_.m(this.vs(), function (v) {
		return V(v).add(x || 0, y || 0)
	}))
}
pD.plus = function (x, y) {
	return M.p(_.m(this.vs(), function (v) {
		return V(v).add(x || 0, y || 0)
	}))
}
pD._U = function (ob) {
	return this.union(gpc.p(ob))
}
pD.uniBod = pD.UB = function (b) {
	var fs = b.fs(),
			pD = pD.U(_.f(fs))
	_.eR(fs, function (f) {
		pD = pD.U(f)
	})
	return pD
}
pD.U = function () {
	var pD = this, g = G(arguments),
			uP
	if (b2d.iB(g[0])) {
		uP = pD.U(g[0].f())
		_.eR(g[0].fs(), function (f) {
			uP = pD.U(f)
		})
		return uP
	}
	return pD.union(M.p(g[0]))
}
pD.U = function () {
	var pD = this, g = G(arguments), ob = g.f, fs
	if (b2d.iB(ob)) {
		return pD = pD.uniBod(ob)
	}
	return pD._U(M.p(ob))
}

$uni = UNI = b2d.u = function me() {
	$l('UNI')
	var g = G(arguments), p
	if (g.A) {
		return g.ap(UNI)
		//return $a(UNI,g.f)
	}
	p = M.p(g.f)
	g.eR(function (pol) {
		p = p.U(M.p(pol))
	})
	return p
}
$uni = function () {
	var g = G(arguments), p
	if (g.A) {
		return g.ap($uni)
		//return $a(UNI,g.f)
	}
	p = M.p(g.f)
	g.eR(function (pol) {
		p = p.U(M.p(pol))
	})
	return p
} // UNI = b2d.u =

b.uni = function () {
	var b = this, g = G(arguments), n, fs
	fs = b.fs()
	if (g.u) {
		return g.p ? UNI(fs).reg(b) : b2d.u(fs)
	}
	//unite with fixt or first-fixt(of body)
	if (O(g.f) && !F(g.s)) {
		return b.f().uni(b2d.tF(g.f))
	}
}
b.sum = function (b1) {
	return $uni(this, b1).vs(this, '-')
}
b.sum = function (b1) {
	return $uni(this, b1).vs(this, '-')
}
b.uni = function () {
	var b = this, g = G(arguments), n, fs
	fs = b.fs()
	if (g.u) {
		return g.p ?
				$uni(fs).from(b) : $uni(fs)
	}
	//unite with fixt or first-fixt(of body)
	if (O(g.f) && !F(g.s)) {
		return b.f().uni(b2d.tF(g.f))
	}
}
//dif, sub....    sum, add

f.sum = function () {
	var f = this, g = G(arguments),
			pts = f.wV(),
			pD = f.tGP()
	g.e(function (poly) {
		pD = pD.union(gpc.p(poly))
	})
	return pD
}
f.add = f.plus = function () {
}
f.sum1 = f.uni = function () {
	var f = this,
			b = f.B(), g = G(arguments), p, n
	//can handle a fixt OR a body!
	//-> [f]
	if (g.A) {
		return $a(f, 'uni', g.f)
	}
	p = M.p(f).U(g.f)
	g.eR(function (f) {
		p = p.U(f)
	})
	return p.from(b)
	//n= p.getNumInnerPoly()
	//to do now!
	//if it receives a body, i should uni all thatbody's fixs against it
	//dont worry about rebuilding the body first? hmm....
}
f.uni = function () {
	var f = this,
			b = f.B(), g = G(arguments), p, n
	//can handle a fixt OR a body!
	//-> [f]
	if (g.A) {
		return $a(f, 'uni', g.f)
	}
	p = M.p(f).U(g.f)
	g.eR(function (f) {
		p = p.U(f)
	})
	return p.reg(b)
	//n= p.getNumInnerPoly()
	//to do now!
	//if it receives a body, i should uni all thatbody's fixs against it
	//dont worry about rebuilding the body first? hmm....
}

w.polU = function (x, y, p1, p2) {
	return this.pol(x, y, M.p(p1).U(p2))
}
w.polS = function () {
	alert('you found w.polS');
	var w = this, g = G(arguments), b, o
	if (g.A) {
		return w.pol.apply(w, g.f)
	}
	if (O(g.f) && O(g.s)) {
		g.e(function (g) {
			w.pol(g).stat()
		})
		return w
	}
	o = O(g.f) ? g.f : N(g.f) ? {x: g.f, y: g[1], p: g[2]} : {p: g.f}
	o.x = N(o.x, w.hW);
	o.y = N(o.y, w.hH)
	b = w.D(o.x, o.y)
	if (!g.p) {
		return b.pol(o.p)
	}
	if (o.rg) {
		o.p.ps(o.rg, function (p) {
			b.pol(o)
		})
	}
	else {
		o.p.ps(function (p) {
			b.pol(o)
		})
	}
	return b.f()
}
w.polU = function (x, y, p1, p2) {
	var poly = M.p(p1).U(p2)
	return this.pol(x, y, poly)
}
w.polS = function () {
	var w = this, g = G(arguments), b, o
	if (g.A) {
		return w.pol.apply(w, g.f)
	}
	if (O(g.f) && O(g.s)) {
		g.e(function (g) {
			w.pol(g).stat()
		})
		return w
	}
	o = O(g.f) ? g.f : N(g.f) ? {x: g.f, y: g[1], p: g[2]} : {p: g.f}
	o.x = N(o.x, w.hW);
	o.y = N(o.y, w.hH)
	b = w.D(o.x, o.y)
	if (!g.p) {
		return b.pol(o.p)
	}
	if (o.rg) {
		o.p.ps(o.rg, function (p) {
			b.pol(o)
		})
	}
	else {
		o.p.ps(function (p) {
			b.pol(o)
		})
	}
	return b.f()
}
