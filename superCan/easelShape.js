$load()
 
h._dc = function () {
	var h = this, gx = h.graphics, g = G(arguments),
			o = g.O ? g.f :
			{x: g.f, y: g.s, r: g.t}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 50)
	gx.dc(o.x, o.y, o.r)
	return h
}
h.dc = function () {
	var h = this, gx = h.graphics,
			g = G(arguments), o
	if (g.A) {
		return $a(h, 'dc', g.f)
	}
	if (g.OO_) {
		return h.cirs(g)
	}
	o = g.O ? g.f :
			N(g.t) ? {x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} :
					N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[2]} :
							N(g.f) ? {r: g.f, c: g.s, C: g.t, l: g[3]} : {c: g.f, C: g.s, l: g.t}
							
	if (o.c) {
		h.c(o.c)
	}
	if (o.C) {
		h.C(o.C)
	}
	if (N(o.l)) {
		h.l(o.l)
	}
	h.cp()
	h._dc(o)
	return h
}
h.cirs = function () {
	var h = this, g = G(arguments)
	g.e(function (c) {
		h.dc(c)
	})
	return this
}
cjs.cir = function () {
	var g = G(arguments), o, h
	o = g.O ? g.f :
	(N( g.t) && N(g.s)) ?
	{r: g.f, x: g.s, y: g.t, c: g[3], C: g[4], l: g[5]} : 
	N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
	N(g.f) ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
	 {c: g.f, C: g.s, l: g.t}
	
	h = new cjs.Shape()
	o.r = N(o.r, 50)
	o.c = o.c || 'w'
	o.C = o.C || 'z'
	o.l = N(o.l, 4)
	h.dc(o.r, o.c, o.C, o.l)
	
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	if (N(o.x)) {h.regX = -o.x}
	if (N(o.y)) {h.regY = -o.y}
	h.alpha = N(o.al, 1)
	return h

}
h.cir = function () { var h = this, gx = h.graphics, g = G(arguments), o
	o = g.O ? g.f : N(g.t) ? {x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} :
			N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} : 
			g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
			{c: g.f, C: g.s, l: g.t}
	h.c(o)
	if (o.bf) {
		if (N(o.bf)) { o.bm = 'me' }
		if (F(Q)) { //async
			h.bf(o.bf, function () { h.dc(o) }) }
		else { //sync
			o.tf = o.tf || null;
			h.bf(o.bf, o.tf).dc(o)
		}
	}
	
	else { h.dc(o) }
	h.alpha = N(o.al, 1)
	return h
}
ct.cir = function (c, r, x, y) {
	var ct = this, cir
	if (!S(c)) {
		y = x;
		x = r;
		r = c;
		c = 'y'
	}
	y = N(y, 0);
	x = N(x, 0)
	r = N(r, 50)
	cir = $h().c(c).dc(x, y, r)
	ct.A(cir)
	return cir
}

SIR=function(){$.C('b')
	 $S({
	 body:{fZ:40,c:'o'},
	 canvas:{M:20}})
	 $.h1('SIR')
	 
	 st = new cjs.Stage($.c(600, 300)[0]).t()
	 st.A(new cjs.Text('h.dc', '50px Arial', 'white').X(400))
	 h = $H().a2(st)
	 h.dc()
	 h.dc(36)
	 h.dc(18,'o')
	 h.dc(200,100)
	 h.dc(300,100,20,'r')
	 h.dc(300, 200, 20)
	//
	 st2 = new cjs.Stage($.c(600, 300)[0]).t()
	 st2.A(new cjs.Text('h.cirs', '50px Arial', 'white').X(400))
	 st2.A($H().cirs({},{x:300, c:'b'},{y:200,C:'o'}))
	//
	  st1 = new cjs.Stage($.c(600, 300)[0]).t()
	 st1.A(new cjs.Text('cjs.cir', '50px Arial', 'white').X(400))
	 st1.A(cjs.cir(300, 'g'))
	 st1.A(cjs.cir(140, 220, 20, 'o').dc())
	 st1.A(cjs.cir('r').XY(220, 200))
	
	 
	   st3 = new cjs.Stage($.c(600, 300)[0]).t()
	 st3.A(new cjs.Text('cjs.cirs', '50px Arial', 'white').X(400))
	 st3.A(
			 $H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'})
	 )


 }
function _pre() {
	$H = $h = function () {
		var g = G(arguments), h = new cjs.Shape(),
		//if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
				o = g.O ? g.f :
						g.N_ ? ( N(g[3]) ? // 'c-C-l' pattern
						{x: g.f, y: g.s, C: g.t, l: g[3]} : {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} ) :
							// 'c-C-l' pattern
								N(g.s) ? {C: g.f, l: g.s} :
								{c: g.f, C: g.s, l: g.t}
		_h = h
		h.XY(N(o.x, 0), N(o.y, 0))
		h.c(o.c || 'z', o.C || 'w', o.l || 8)
		if (o.C) {
			h.C(o.C)
		}
		if (N(o.l)) {
			h.l(o.l)
		}
		if (g.p) {
			h.dg()
		}
		return h
	}
	cjs.iH = function (h) {
		return O(h) && h.graphics
	}
	ct.h = function () {
		var ct = this,
				h = $H.apply($H, arguments)
		ct.A(h)
		return h
	}
	h = cjs.Shape.prototype
	
	//alert
	$Cir = function () {
		alert('$Cir')
		var g = G(arguments), o
		o = g.S_ ? {c: g.f, x: g.s, y: g.t, r: g[3]} : {x: g.f, y: g.s, r: g.t}
		return $H(o.c, o.x, o.y).dc(o.r)
	}
}
TSIR = function () {
	$.C('b')
	$S({
		body: {fZ: 40, c: 'o'},
		canvas: {M: 20}
	})
	$.h1('SIR')
	st = new cjs.Stage($.c(600, 300)[0]).t()
	st.A(new cjs.Text('h.dc', '50px Arial', 'white').X(400))
	h = $H().a2(st)
	h.dc()
	 
	 
	 
}