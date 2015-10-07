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
	
	
	function _bf(i, mx, fn, hs) {var g = G(arguments),o
	
	
	
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
	
	
	
	
	function __bf(i, mx) {var g = G(arguments)
		 
		
		if (A(mx)) {
			mx = cjs.m2d.apply(cjs, mx)
		}
		
		//else if (g.d) {mx = cjs.m2d(R(500), R(300))}
		
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
	$l('h.bmCir')
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
	$l('h.bR')
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



h._bV=function(i,vs){
	i = i || 'me'
return this.bf(i).lt(vs).cp()}
h._bVAsy = function (i,v) {
	var h = this
	i =  i || 'me'
	$.i(i, function (i) { h._bV(i,v) })
	return h}
h.bV  = function (o) {var h = this, g = G(arguments), o
	o = g.A ? {hs: g.f} : g.f || {} // o.hs = o.hs || []
	if(Q.ran){
		h._bV(o.i, o.v) }
	 else {
	    h._bVAsy(o.i, o.v) }
	return h
}







TXBF = function () {
	st = $St()
	h = st.h()
	$.i('me', function (i) {
		h._bf(i).dr(100, 100, 500, 200)
		h.C('z').dr(100, 100, 10, 10)
	})
}
TXB = function () {
	st = $St()
	h = st.h()
	$.i('me', function (i) {
		h._bfT(i, -100).dr(100, 100, 500, 200)
	})
}
TBX = function () {
	st = $St()
	h = st.h()
	$.i('me', function (i) {
		h._bfT(i, -100).dr(100, 100, 500, 200)
	})
}
//calls bitmap fill and lets it load up the bitmap (my face)
//then passes in a function to be called once the image has finished loading
//in this case, the function draws a rectangle
// (and the bitmap is automatically used as the fill)



BMFV=function(){
	
	

	
	Q(function(){
	
		__St()
		
		im = Q.i('me')
		
		$im = $(im).A()
		
		h.bf(im)
		h.cir({x:40, y:289, r:100})
		
		
		h.mt(vs1)
		
		h.mt([
			[550, 20],
				[800,100],[700,300],[500,120]
		])//.cp()
		
	
		h.mt([
			[750, 20],
			[900, 100], [900, 300], [700, 120]
		], 50, 200)//.cp()
		h.mt([
			[550, 20],
			[800, 100], [700, 300], [500, 120]
		],0,50)//.cp()
		h.cir({
		 x: 550, y: 20, r: 20, c: 'b'
		 })
		
		 h.cir({
		 x:800,y:100, r:30,c:'b'
		 })
		
		
		 h.cir({
		 x: 700, y: 300, r: 20, c: 'g'
		 })
		
		
		 h.cir({
		 x: 500, y: 120, r: 30, c: 'g'
		 })
		
		 
		
		
	})

	

}


BPOLLL=function(){
	verts = [
		[[5, 100], [0, -100], [200, -150], [200, 150]],
		[[-50, 50], [-50, -100], [450, -50], [450, 50]]
	]
	
	
	W()._(function(w){
	
			
		
		 w.D(250, 300).pol({
			v: verts,
			c: {c: 'r', C: 'y', l: 10},
				bf: 'chicks'
		})
		
		
		w.D(450, 300).pol({
			v: verts,
			c: {c: 'r', C: 'y', l: 10},
			bf: 'me'
		})
	})
	 
	
}




POLLB = function () {W()._(function (w) {v = [[[5, 100], [0, -100], [200, -150], [200, 150]], [[-50, 50], [-50, -100], [450, -50], [450, 50]] ]
		
	
		w.D(250, 300).pol({
			//c: {c: 'r', C: 'y', l: 10},
			bf: Q.i('chicks'),
			v: v
		
		})
		
		
	
		
		
		w.D(450, 300).pol({v: v, c: {c: 'r', C: 'y', l: 10}, bf: Q.i('me')})





	
})}






