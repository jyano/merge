$L('bFill','matix')
h = cjs.Shape.prototype
cjs.DisplayObject.prototype._ = function (fn) {
	var that = this
	Q(function () {
		fn(that)
	})
	return this
}
gx._bf = function (i, tf) {
	return this.bf(i, null, tf)
}
gx._bs = function (i, tf) {
	return this.bs(i, null, tf)
}
cjs.M = cjs.Mx = cjs.Matrix2D
i.gM = i.getMatrix
$Mx = cjs.m2d = function () {
	var g = G(arguments), o
	if (A(g.f)) {
		return $Mx.apply(null, g.f)
	}
	o = g.O ? g.f :
			U(g.t) ? {tx: N(g.f), ty: N(g.s)} :
			{a: g.f, b: g.s, c: g.t, d: g.fo, tx: g.fi, ty: g.si}
	dfMx(o)
	return new cjs.Mx(o.a, o.b, o.c, o.d, o.tx, o.ty)
	function dfMx(o) {//( [a=1]  [b=0]  [c=0]  [d=1]  [tx=0]  [ty=0] )
		o.a = N1(o.a)
		o.b = N0(o.b)
		o.c = N0(o.c)
		o.d = N1(o.d)
		o.tx = N0(o.tx)
		o.ty = N0(o.ty)
		return o
	}
}
$tMx = function (x, y, sx, sy, rt, kx, ky, rx, ry) {
	return $Mx().appendTransform(
			N0(x), N0(y), N1(sx), N1(sy), rt, kx, ky, rx, ry)
}
 
 
h._bf = function (i, tf) {
	this.graphics._bf(i, tf)
	return this
}

 
h.bf = function () {
	var h = this, gx = h.graphics, g = G(arguments), o
	o = O(g.f) && A(g.f.hs) ? g.f :
			F(g.s) ? {i: g.f, fn: g.s, hs: g.t} :
			{i: g.f, mx: g.s, hs: g.t}
	o.mx = A(o.mx) ? $Mx(o.mx) : o.mx
	o.fn = _.tFn(o.fn)
	o.i = o.i || 'me'
	if (S(o.i) && !Q.ran) {
		$.i(o.i, function (i) {
			_bf(i, o)
		})
	}
	else {
		_bf(S(o.i) ? Q.i(o.i) : o.i, o)
	}
	return h
	function _bf(i, o) {
		h._bf(i, o.mx);
		o.hs ? _.e(o.hs, function (shp) {
			o.fn(shp, h)
		}) : o.fn(h)
	}
}
h._bfT = function (i) {
	var g = G(arguments)
	return this._bf(i, $tMx(A(g.s) ? g.s : g.r))
}
h._bfTAs = function (str, tfPropsArr, fn) {
	var h = this, g = G(arguments), o
	o = A(g.s) ?
	{i: g.f, tf: g.s, fn: g.t} :
	{i: g.f, fn: g.s}
	$.i(o.i, function (i) {
		_.tFn(o.fn)(
				h._bf(g.f, $tMx(_.tA(o.tf))))
	})
	return h
}
	h.bs = function (i) {
		var h = this;
		h.graphics.bs(i);
		return h
	}
h.bC= h.bmCir = function (o) { o = o || {}
 
	var h = this
	
	o.i = o.i || 'me'
	
	o.circs = o.circs || []
	o.cs= o.cs || []
	o.hs = o.hs || []
	
	
	$.i(o.i, function (i) {
		_.e(o.circs, function (c) {
			h.bf(i).dc(c)
		})
	})
	
	return h
}
h.bR = function (o) {
	var h = this;
	h.bf(o, function (h1) {
		if (o.hs) {
			_.e(o.hs, function (r) {
				w.rec(r.w, r.h)
			})
		}
		else {
			h.rec(o.hs)
		}
	})
	return h
}
h.bP = h.bV = function (o) {
	var h = this, g = G(arguments), o
	h._bVAsy = function (i, v) {
		var h = this
		i = i || 'me'
		$.i(i, function (i) {
			h._bV(i, v)
		})
		return h
	}
	h._bV = function (i, vs) {
		i = i || 'me'
		return this.bf(i).lt(vs).cp()
	}
	o = g.A ? {hs: g.f} : g.f || {} // o.hs = o.hs || []
	if (Q.ran) {
		h._bV(o.i, o.v)
	}
	else {
		h._bVAsy(o.i, o.v)
	}
	return h
}
 
old = function () {
	h.bf = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (O(g.f) && A(g.f.hs)) {
			o = {i: g.f.i, hs: g.f.hs, mx: g.f.mx, fn: g.f.fn}
		}
		else {
			o = F(g.s) ? {i: g.f, fn: g.s} : {i: g.f, mx: g.s, fn: g.t}
		}
		o.i = o.i || 'me'
		if (!Q.ran) {
			if (o.hs) {
				$.i(o.i, function (i) {
					_bf(i, o.mx);
					if (o.fn) {
						_.e(o.hs, o.fn)
					}
				})
			}
			else if (S(o.i)) {
				$.i(o.i, function (i) {
					_bf(i, o.mx, o.fn)
				})
			}
		}
		else if (S(o.i)) {
			_bf(Q.i(o.i), o.mx, o.fn)
		}
		else {
			_bf(o.i, o.mx)
		}
		return h
		function _bf(i, mx, fn, hs) {
			var g = G(arguments),
					o = {
						i: g.f,
						mx: A(g.s) ? $Mx(g.s) : g.s,
						fn: _.tFn(g.t),
						hs: g[3]
					}
			h._bf(i, o.mx)
			o.hs ? _.e(o.hs, function (shp) {
				o.fn(shp, h)
			}) : o.fn(h)
		}
	}
	h.bf1 = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		o = O(g.f) && A(g.f.hs) ? g.f :
				F(g.s) ? {i: g.f, fn: g.s} :
				{i: g.f, mx: g.s, fn: g.t}
		o.i = o.i || 'me'
		if (S(o.i) && !Q.ran) {
			$.i(o.i, function (i) {
				_bf(i, o.mx, o.fn)
				if (o.hs) {
					_.e(o.hs, o.fn)
				}
			})
		}
		if (S(o.i)) {
			o.i = Q.i(o.i)
		}
		_bf(o.i, o.mx, o.fn)
		return h
		function _bf(i, mx, fn, hs) {
			var g = G(arguments),
					o = F(g.t) ? {i: g.f, mx: g.s, fn: g.t, hs: g[3]} :
							F(g.s) ? {i: g.f, fn: g.s, hs: g.t} :
							{i: g.f, mx: g.s, hs: g.t}
			o.i = S(o.i) ? Q.i(o.i) : o.i
			o.mx = A(o.mx) ? $Mx(o.mx) : o.mx
			o.fn = _.tFn(o.fn)
			h._bf(i, o.mx)
			o.hs ? _.e(o.hs, function (shp) {
				o.fn(shp, h)
			}) :
					o.fn(h)
		}
	}
}