 
b = b2Body.prototype

b.__f = function (f) {
	var b = this, g = G(arguments)
	if (g.u) {
		return b.GetFixtureList()
	}
	f = b.CreateFixture(f)
	return f
}
b._f = function (f, c) {
	var b = this, g = G(arguments)
	// if(g.u){ return b.GetFixtureList() }
	// f = b.CreateFixture(f)
	f = b.__f(f)
	if (c) {
		f.C(c)
	}
	return f
}
b.f = function () {
	var b = this, g = G(arguments), o;
	if (g.u) {
		return b._f()
	}
	if (g.S_) {
		g.L--
	}
	;
	if (g._S) {
		g.L--
	}
	//PASS IN AN ARRAY OF FIXTS (AND OPTIONALLY A COLOR)
	if (g.A) {
		g.e0(function (gg) {
			b.ap('f', g.G(gg))
		})
	}//   [ [],[],fD,4,[] ]
	else if (g.SA) {
		g.e1(function (f) {//       'c',  [ [.,.],[.,.],fD ]
			if (b2d.iFD(f)) {
				b._f(f, g.f)
			}
			else {
				if (!S(_.f(f))) {
					f.unshift(g.f)
				}
				b2d.iFD(f[1]) ? b._f(f[1], f[0]) : $a(b, 'f', f)
			}
		})
	}
	//PASS IN A FIXTURE DEF (AND OPTINALLY A COLOR)
	else if (b2d.iFD(g.f)) {
		return b._f(g.f)
	}//(fD)
	else if (g.S_ && b2d.iFD(g.s)) {
		b._f(g.s, g.f)
	}//('c', fD)
	//PASS IN NUMBERS OR VERTS, TO MAKE JUST ONE FIXT
	else if (O(g.s)) {
		pol()
	}
	else if (g.L == 1 || g.L == 3) {
		cir()
	}
	else {
		rec()
	}
	function cir() {
		o = {c: g.f, r: g.s, x: g.t, y: g[3]}
		if (g.n) {
			o.s = 1
		}
		b.cir(o)
	}
	
	function rec() {
		o = {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], a: g[5]}
		if (g.n) {
			o.s = 1
		}
		b.rec(o).C(o.c)  // $a(b,'rec', g.g)
	}
	
	function pol() {
		b.pol(g.S_ ? {c: g.f, v: g.r} : {v: g})
		if (g.n) {
			b.sen(1)
		}  //if (g.n) {o.s=1}
	}
	
	return b.d(1)
}


	
b.wP = b.wPt = function (x, y) {
	var b = this
	return b.GetWorldPoint(V(x, y).div()).mult()
}
b.St = b.S = b.stg = function () {
	return this.W().s
}
b.$h = function () {
	$l('b.$h')
	var h = $H()
	this.bS(h)
	h.c.apply(h, G(arguments))
	return h
}
b.c = b.C = function (c) {
	this.fs(function (f) {
		f.C(c)
	})
	this._col = c
	return this
}
b.cir = function () {
	var b = this,
			g = G(arguments), o = g.f, fD, f
	polyMorph()
	fD = b2d.fD(b2d.cH(o.r), o.x, o.y)
	fD.sen(o.s || g.n || false)
	f = b.f(fD.DBF(o.d, o.b, o.f)).K(o.k || 'cir')
	return o.c === 0 ? f : f.cSp(o)
	function polyMorph() {
		//if passed array, it assumes it is arguments for ONE cir
		if (g.A) {
			return b.cir.apply(b, g.f)
		}
		//if you pass at least two objects, it makes multiple cirs and passes back b
		if (O(g.s)) {
			g.e(function (c) {
				b.cir(c)
			});
			return b
		}
		// can pass obj
		// can pass: c C [r] [x] [y]
		// can pass: c [r] [x] [y]
		// can pass: [r] [x] [y] [c] [C]
		o = g.O ? g.f
				: S(g.s) ? {c: g.f, C: g.s, r: g[2], x: g[3], y: g[4]}
				: S(g.f) ? {c: g.f, r: g.s, x: g[2], y: g[3]}
				: {r: g.f, x: g.s, y: g[2], c: g[3], C: g[4]}
		return cirDfs(o)
	}
}
b.dot = function () {
	var b = this, w = b.W(), g = G(arguments)
	g.N_ ? (
			g.p ?
					T.t(function () {
						b.dot(g.f, g.s)
					}) :
					w.d(b.wP(g.f, g.s)))
			:
			w.d(g.f || 'y', g.p ? b.wC() : b)
	return b
}
 
	b.bS = function () {
		var b = this, w = b.W(), g = G(arguments), o, i, a, sc
		//pass it a display object (which i guess implies its already loaded)
		o = cjs.iDO(g.f) ? {i: g.f, bm: g.f} :
				g.O ? g.f :
				{i: g.f, sc: g.s, x: g.t, y: g[3], r: g[4], al: g[5]}
		if (S(o.i)) {
			w.g.bm(o.i, function (bm) {
				b.bS(_.x(o, {i: bm, bm: bm}))
			})
		}
		//if not loaded, async loads and passes it back as a data object 
		// next time, then, when loaded it can bypass async
		else {
			$df.xyr(o)
			$df.sc(o)
			$df.im(o)
			//they can pass in a formed shapeer
			if (cjs.hasDim(o.bm) && !g.n) {
				o.bm.rC()
			} //regCent //can not center things that dont have dimensions! 
			// scale, position and place the bm in the ct (which is on the stage)
			o.bm.sXY(o.sc).XY(o.x, o.y).rt(o.r).al(o.al)
			this.gx = this.gx || w.gx.ct();
			this.gx.A(o.bm)
		}
		return this
	}
	b.Bm = function (iS, x, y, sX, sY, rt) {
		var b = this, w = b.W(), g = G(arguments);
		b.gx = b.gx || w.gx.ct()
		if (S(iS)) {
			this.gx.bm(iS, fn)
		}
		if (O(iS)) {
			fn(iS);
			return iS
		}
		return b
		function fn(bm) {
			bm.rC().XY(N(x, 0), N(y, 0)).sXY(N(sX, 1), N(sY, sX || 1)).rt(N(rt, 0))
		}
	}
 