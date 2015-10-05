cjs.M = cjs.Mx = cjs.Matrix2D
i.gM = i.getMatrix


$Mx = function (a, b, c, d, e, f, g, h) {
	var mx = new cjs.Mx(a, b, c, d, e, f, g, h)
	return mx
}
$tMx = function (x, y, sx, sy, rt, kx, ky, rx, ry) {
	var m = $Mx()

	m.appendTransform(N(x,0), N(y,0), N(sx,1), N(sy,1), rt, kx, ky, rx, ry)

	return m

}
h._bf = function(){var g=G(arguments), args= g.A? g.f: g
	this.graphics.bf.apply(this.graphics, args)
	return this
}
h._bfT=function(i){var  g=G(arguments),tf
	tf = A(g.s)? g.s: g.r
	return this._bf(g.f, null, $tMx.apply(null, tf)  )
}
h._bfTAs=function(str, tfPropsArr, fn){var h=this, g=G(arguments), o
	o =  A(g.s)? 
	{i: g.f, tf: g.s, fn: g.t} 
	:{i: g.f,  fn :	g.s}
	o.tf = o.tf || []
	o.fn = o.fn || function(){}
	
	$.i(o.i, function (i) {
		h._bf(g.f, null, $tMx.apply(null, o.tf))			
		o.fn(h)
	})
	
	return h

}

TXBF=function(){
	st=$St()
	h=st.h()
	$.i('me', function(i){
		h._bf(i).dr(100,100,500,200)
		h.C('z').dr(100,100,10,10)
	})
}
TXB=function(){
	st = $St()
	h = st.h()
	$.i('me', function (i) {
		h._bfT(i,-100).dr(100, 100, 500, 200)
	})
}
TBX = function () {
	st = $St()
	h = st.h()
	
	$.i('me', function (i) {

		h._bfT(i, -100).dr(100, 100, 500, 200)

	})



}


h.bf = function () {var h = this, gx = h.graphics, g = G(arguments), o
	
	if (O(g.f) && A(g.f.hs)) {
	
		o = {i: g.f.i, hs: g.f.hs, mx: g.f.mx, fn: g.f.fn}
	
	}
	
	
	else {
	
		o = F(g.s) ? {i: g.f, fn: g.s} : {i: g.f, mx: g.s, fn: g.t}
	
	}
	
	
	o.i = o.i || 'me'
	
	
	if (o.hs) {
	
			$.i(o.i, function (i) {
		
				_bf(i, o.mx);
			
			if (o.fn) {
			
					_.e(o.hs, o.fn)
			
			}
		})
	}
	
	
	else if (S(o.i)) {
		Q.ran ? _bf(Q.i(o.i), o.mx, o.fn, '/') : $.i(o.i, function (i) {
			_bf(i, o.mx, o.fn)
		})
	}
	
	else {
		_bf(o.i, o.mx)
	}
	
	return h
	
	function _bf(i, mx, fn, hs) {
		var g = G(arguments),
				o = {i: g.f, mx: g.s, fn: g.t, hs: g[3]}
		__bf(o.i, o.mx, '/')
		o.fn = o.fn || function () {
		}
		o.hs ?
				_.e(o.hs, function (shp) {
					o.fn(shp, h)
				}) :
				o.fn(h)
	}
	
	function __bf(i, mx) {
		var g = G(arguments)
		if (A(mx)) {
			mx = cjs.m2d.apply(cjs, mx)
		}
		else if (g.d) {
			mx = cjs.m2d(R(500), R(300))
		}
		h._bf(i, null, mx)
		return h
	}

}
h.bs = function (i) {
	var h = this;
	h.graphics.bs(i);
	return h
}
h.bmCir = function (o) {
	var h = this
	//o = o || {}
	o.i = o.i || 'me'
	o.circs = o.circs || []
	
	$.i(o.i, function (i) {
			_.e(o.circs, function (c) {
				h.bf(i).dc(c)//.ef()
		})
	})
	
	return h
}
h.bR = function (o) {
	var h = this;
	if (!Q.ran) {
		h.bf(o, function (h1) {
			//h.rec(h1)
			//h.rec(o.hs)
			_.e(o.hs, function (r) {
				w.rec(r.w, r.h)
			})
		})
	}
	else {
		h.bf(o.bf)
		h.rec(o.hs)
		_.e(o.hs, function (r) {
			w.rec(r.w, r.h)
		})
	}
	return h
	//= h.bfR = h.bmR
}





h._pol = h.bmV = function (o) {
	var h = this
	o = o || {}
	o.i = o.i || 'me'
	$.i(o.i, function (i) {
		i = i[0]
		_.e(o.v, function (v) {
			h.bf(i)
			h.lt(v)
			//h.ef()
			//.cp()
		})
	})
	return h
}

h.pol = h.poly = function (V, c, C, l) {
	var h = this, g = G(arguments), o = _poly()
	h.ef().es().c(o)
	if (o.bf) {h.bf('me', draw)}
	else {draw()}
	return h
	
	function draw() {h.lt(o.v).cp()}
	function _poly() {
		var o = A(g.f) ? {v: g.f, c: g[1], C: g[2], l: g[3]}
			//array must come first b/c its an obj
				: O(g.f) ? g.f : {}
		oDef(o);
		return o
	}
}

h.pols = h.bV = function (o) {
	var h = this, g = G(arguments), o
	o = g.A ? {hs: g.f} : g.f || {}
	o.hs = o.hs || []
	o.i = o.i || 'me'
	if (F(Q)) {
		$.i(o.i, function (i) {
			h.bf(i)
			_.e(o.v, function (v) {
				h.lt(v)
			})
			h.cp()
			h.ef()
		})
		return h
	}
	h.bf(o.i)
	_.e(o.v, function (v) {
		h.lt(v)
	})
	return h
	function draw() {
		h.bf(o.i)
		_.e(o.v, function (v) {
			h.lt(v)
		})
	}
}





//calls bitmap fill and lets it load up the bitmap (my face)
//then passes in a function to be called once the image has finished loading
//in this case, the function draws a rectangle
// (and the bitmap is automatically used as the fill)


