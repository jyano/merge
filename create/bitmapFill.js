gx._bf=  function(i,tf){return this.bf(i,null,tf)}
gx._bs  = function (i, tf) {return this.bs(i, null, tf)}
cjs.M = cjs.Mx = cjs.Matrix2D
i.gM = i.getMatrix


$Mx = cjs.m2d = function () {var g = G(arguments), o

	
	if(A(g.f)){
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

h = cjs.Shape.prototype


h._bf = function(i,tf){
	this.graphics._bf( i, tf )
	return this
}


h._bfT=function(i){var g=G(arguments)
	return this._bf(i, $tMx(A(g.s)?g.s:g.r)  )
}
h._bfTAs=function(str, tfPropsArr, fn){var h=this, g=G(arguments), o
	o =  A(g.s)? 
	{i: g.f, tf: g.s, fn: g.t} :
	{i: g.f, fn: g.s}
	$.i(o.i, function (i) {
		_.tFn(o.fn)(
			h._bf(g.f, $tMx( _.tA(o.tf)   )))
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
h._bVAsy = function (i,v) {
	var h = this
	i =  i || 'me'
	$.i(i, function (i) { h._bV(i,v) })
	return h}
h._bV = function (i, vs) {
	i = i || 'me'
	return this.bf(i).lt(vs).cp()
}
h.bV  = function (o) {var h = this, g = G(arguments), o
	o = g.A ? {hs: g.f} : g.f || {} // o.hs = o.hs || []
	if(Q.ran){
		h._bV(o.i, o.v) }
	 else {
	    h._bVAsy(o.i, o.v) }
	return h
}

 

cjs.DisplayObject.prototype._ =function(fn){
	var that=this
	Q(function(){
		fn(that)
	})
	return this
}




TXBF = function () {__St()
	
	$.i('me', function (i) {
		
		h._bf(i).dr(100, 100, 500, 200)
			
		    
		h.C('z').dr(100, 100, 10, 10)
	})
}


TXB = function () {
	
	
	st = $St()
	st._(function(st){
		i = Q.i('me')
		
		h= st.h('+')
 
		h._bfT(i, -100).dr(0,0,500,200)
		//.dr(100, 100, 500, 200)
	})
}
 



 


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
SANDWICH =  function(){
	Q(function(){ __St()
		ch = Q.i('chicks')
		me  = Q.i('me')
		Ch = function(){return st.h('+').l(20).bf(ch).bs(me)}
		Ch().rec(200, 200, 200, 300)
		Ch().rec(400, 250, 200, 300)
		Ch().rec(600, 250, 200, 300)
		Ch().rec(750, 350, 200, 300)
		Ch().rec(900, 250, 200, 300)
	})
}
SANDY = function () {
	Q(function () {
		__St()
		ch = Q.i('chicks')
		me = Q.i('me')
		h.l(20).bf(me).bs(ch)
		h.rec(200, 200, 200, 300)
		h.rec(400, 250, 200, 300)
		h.rec(600, 250, 200, 300)
		h.rec(750, 350, 200, 300)
		h.rec(900, 250, 200, 300)
	})
}
SAND = function () {
 
 
  


	Q(function () {
		__St()

		ch = Q.i('chicks')
		me = Q.i('me')
		
		
		Ch = function (x,y) {
			
			var h  =  st.h(x,y).l(8)
					
			
			h.graphics.bf(ch)
			
					
			h.bs(me)
			
			cjs.SL(h)
			return h
		}
		
		
		Ch(200, 200).rec( 200, 300)
		Ch(400, 250).rec( 200, 300)
		Ch(600, 250).rec( 200, 300)
		Ch(750, 350).rec( 200, 300)
		Ch(900, 250).rec( 200, 300)
	
	})

}
SAN  = function () {
	
	
	
	/*
	
	 Optional. Indicates whether to repeat the image in the fill area. 
	 One of "repeat", "repeat-x", "repeat-y", or "no-repeat". Defaults to "repeat". 
	 Note that Firefox does not support "repeat-x" or "repeat-y"
	 (latest tests were in FF 20.0), and will default to "repeat".
	
	 */
	Q(function () {
	
		__St()
		ch = Q.i('chicks')
		Ch = function (x, y) {
			var h = st.h(x,y).l(8)
			mx = $Mx(.5, .2,-.2, .5, 0, 0)
			//mx = $Mx(.1, 0, 0, .1, 0, 0)
			
			mx= $Mx(1,0,0,1,-800,-400)
			//mx = $Mx(.5, .6, 0, .5, 0, 0)
			h.graphics.bf( ch, null, mx )
			
			cjs.SL(h)
			
			return h.rec(1600, 800)
		
		}
		
		Ch(0,0).XY(700,550)
		
	})
	
	
	
}
//calls bitmap fill and lets it load up the bitmap (my face)
//then passes in a function to be called once the image has finished loading
//in this case, the function draws a rectangle
// (and the bitmap is automatically used as the fill)

