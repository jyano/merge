
w.b = w.beg = function () {
	var w = this, g = G(arguments), o, fn
	if (g.u) {
		return this.GetBodyList()
	}
	//ADDS one or more handlers to beginHandlers array
	//most common use, usually just need one func.
	// would i ever need more?lVWs
	//it just puts each item into bH arr
	fn = F(g.t) ? function (cx) {
		if (cx.w(g.f, g.s)) {
			g.t(cx)
		}
	} :
			F(g.s) ? function (cx) {
				if (cx.w(g.f)) {
					g.s(cx)
				}
			} : g.f
	//fn=$.mo(.2,fn)
	w.bH.push(fn)
	return w
}
b.end = function () {
	var b = this, w = b.W(), g = G(arguments), o
	o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
	if (o.k) {
		w.end(b, o.k, o.fn)
	}
	else {
		w.end(b, o.fn)
	}
	return this
}
w.cl = function () {
	var w = this, g = G(arguments)
	if (g.F) {
		w.b(function (cx) {
			_.b(g.f, cx.A())(cx.B(), cx)
		})
	}
	else {
		w.b(function (cx) {
			cx.w(g[0], g[1], g[2])
		})
	}
	return w
}
f.cl = function (k, fn) {
	var f = this
	//ultimate func for FIXTURE COLL
// you can specify what happens when a fixture hits:
//ANYTHING
// body/fixt of certain kind
// specific fixt
// specific body
//but it its callback ALWAYS passed back the other fixt that was actually hit
// and 'this' is set to THIS fixt within the cb
//should cover class AND fixt AND body cases!!!
	if (F(k)) {
		fn = k;
		k = ''
	}
	fn = _.b(fn, f)
	w.b(function (cx) {
		var fA = cx.A(), fB = cx.B()
		if (f.of(fA) && fB.of(k)) {
			fn(fB, cx)
		}
		if (f.of(fB) && fA.of(k)) {
			fn(fA, cx)
		}
	})
	return f
}
b.cl = function () {
	var b = this, w = b.W(), g = G(arguments), o
	// if body collides with ANYTHING
	// if body collides with body/fixt of specific kind
	// if body collides with specific body
	// if body collides with specific fixt
	// but always pass fixt into the cb
	if (F(g.f) && F(g.s)) {
		this.cl(g.f)
		w.end(this, g.s)
		return this
	}
	if (g.F_) {
		o = {fn: g.f, k: ''}
	}
	else {
		o = {k: g.f, fn: g.s}
	}
	w.b(function (cx) {
		var fA = cx.A(),
				fB = cx.B()
		if (b.of(cx.a()) && fB.of(o.k)
		) {
			if (o.fn) {
				_.b(o.fn, fA)(fB, cx);
				return w
			}
			return [fA, fB, cx]
		}
		else if (b.of(cx.b()) && fA.of(o.k)) {
			if (o.fn) {
				_.b(o.fn, fB)(fA, cx);
				return w
			}
			return [fB, fA, cx]
		}
	})
	return b
}
w.end = function () {
	var w = this, g = G(arguments)
	if (g.F_) {
		g.e(function (fn) {
			w.eH.push(fn)
		})
	}
	else if (F(g.s)) {
		w.eH.push(function (cx) {
			cx.w(g.f, g.s)
		})
	}
	else if (F(g.t)) {
		w.eH.push(function (cx) {
			cx.w(g.f, g.s, g.t)
		})
	}
	return w
}
w.pre = function () {
	var w = this, g = G(arguments), o, fn
	if (F(g.t)) {
		fn = function (cx, i) {
			if (cx.w(g.f, g.s)) {
				g.t(cx)
			}
		}
	}
	else if (F(g.s)) {
		fn = function (cx, i) {
			cx.w(g.f, function (f) {
				_.b(g.s, this)(f, cx, i)
			})
		} //this good
	}
	else {
		fn = g.f
	}
	//fn=$.mo(.2,fn) //this will break it!!
	w.pH.push(fn)
	return w
	
	preAlt = function (fn) {
		var w = this, g = G(arguments)
		//fn = $.mo(.2,fn )
		w.pH.push(fn)
		return w
	}
	
}
b.pre = function () {
	var b = this, w = b.W(), g = G(arguments)
	w.pre(function (cx) {
		cx.w(b, g.f, g.s, g.t)
	})
}
w.po = w.post = function () {
	var w = this, g = G(arguments)
	g.e(function (fn) {
		w.PH.push(
				function (cx, I) {
					var i = _.m(I.normalImpulses, M.fl)[0],
							t = _.m(I.tangentImpulses, M.fl)[0]
					return fn(
							cx, i, t)
				})
	})
	return w
}


w.wn = function () {
	var w = this, g = G(arguments), o
	o = F(g[0]) ? {b: g[0], e: g[1]}
			: F(g[1]) ? {k: g[0], b: g[1], e: g[2]}
			: {k: g[0], k2: g[1], b: g[2], e: g[3]} //when b,[e]  k,b,[e]  k,k2,b,[e]
	if (o.k2) {
		w.b(o.k, o.k2, o.b);
		if (o.e) {
			w.end(o.k, o.k2, o.e)
		}
	}
	else if (o.k) {
		w.b(o.k, o.b);
		if (o.e) {
			w.end(o.k, o.e)
		}
	}
	else {
		w.b(o.b);
		if (o.e) {
			w.end(o.e)
		}
	}
	return w
}
w.wl = function (k, k2, fn) {
	var w = this, g = G(arguments), o,
			pu = 0
	o = F(g.t) ? {k: g.f, k2: g.s, fn: g.t} :
			F(g.s) ? {k: g.f, fn: g.s} :
					F(g.f) ? {fn: g.f} : g.f
	if (o.k2) {
		w.wn(o.k, o.k2, on, off)
	} else if (o.k) {
		w.wn(o.k, on, off)
	}
	function on() {
		pu = 1
	};
	function off() {
		pu = 0
	}
	
	if (o.fn) {
		T.t(function () {
			if (pu) {
				o.fn()
			}
		})
	}
	return w
}
b.wn = function (k, oB, oE) {
	return this.W().wn(this, k, oB, oE)
}
b.wl = function (k, fn) {
	return this.W().wl(this, k, fn)
}
b.my = function (k, fn) {
	var b = this, w = b.W(), g = G(arguments)
	//my: to specify a sp body on what to do when one of its own fixts of a certain k collides
	if (F(fn)) {
		w.b(function (cx) {
			cx.w(b, function (f) {
				if (this.of(k)) {
					_.b(fn, this)(f, cx)
				}
			})
		})
	}
	else {
		w.wn(b,
				function () {
					b.my[k] = 1
				},
				function () {
					b.my[k] = 0
				}
		)
	}
	return b
}
b.sr = b.sen = function () {
	var b = this, f = b.f(), g = G(arguments)
	if (g.d) {
		return b.sen(!b.sen())
	}//b.sen('/')->toggle sen
	if (g.u) {
		return f.m_isSensor
	}////////////////////////////////////////
	f.m_isSensor = g.f ? true : false
	return b
}


b._lP = b._gLP = b.GetLocalPoint
b.lP = function (x, y) {
	return this._lP(V(x, y, '-')).m()
}
b._lVL = b.GetLinearVelocityFromLocalPoint
b.lVL = function (v, y) {
	v = V(v, y)
	return this._lVL(v.d()).m().dec(2)
}		//i think this is your rotation direction? // the way you appear to be pointing on the screen
b._lVW = b.GetLinearVelocityFromWorldPoint
b.lVW = function () {
	var g = G(arguments);
	return this._lVW(V(g.f, g.s))
}   // return  b.GetLinearVelocityFromWorldPoint(V(g.f, g.s).d()).m()

