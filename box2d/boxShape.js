$cH = b2d.cH = function (r) {
	r = N(r, 50)
	return new b2d.CircleShape(r / 30)
}
$pH = b2d.pH = function (W, H, x, y, a) {//makes a fixtDef with a polyShape
	//| 50,200[[,200,60,45
//| [20,300],.. //-> g.a(p,'arr')// -> g.a(p.arr)
	var g = G(arguments), p = new b2d.PolygonShape()
	if (g.N_) {
		p.box(g.f, g.s, g.t, g[3], g[4])
	}
	else if (g.OO_) {
		$a(p, 'arr', g)
	}
	return p
}
$fD = b2d.fD = b2d.f = function (h, x, y) {
	var g = G(arguments),
			fD = new b2d.FixtureDef
	if (g.n) {
		fD.isSensor = true
	}
	if (h) {
		fD.shape = h
		if (x) {
			fD.shape.sLP(x, y)
		}
	}
	return fD
}
cH.lP = function (x, y) {
	this.SetLocalPosition(V(x, y).div())
	return this
}
cH.sLP = function (x, y) {
	var v = V(x, y)
	this.SetLocalPosition(V(v.x / 30, v.y / 30))
	return this
}
b2d.m = function (vs) {
	return _.m(vs, b2d.mult)
}
b2d.tA = function (vs) {
	return _.m(vs, function (v) {
		return v.tA(v)
	})
}
b2d.cFD = function (r) {
	$l('cFD')
	var fD = $fD(b2d.cH(r))
	return fD
}
b2d.cir = function () {
	$l('cir')
	var g = G(arguments),
			o = $df.cF(
					g.O ? g.f :
					{x: g.f, y: g.s, r: g.t, d: g.fo}
			)
	return $fD(
			$cH(o.r).lP(o.x, o.y),
			g.o
	).d(o.d)
}
b2d.pol = function () {
	return b2d.fD($a(b2d.pH, arguments))
			.d(1).fr(.2).r(.2)
}
b2d.rec = function () {
	var g = G(arguments), r, fD, o, v, p = b2d.pH()
	if (g.OO_) {
		p.arr(g)
	}  //b2d.cant make multiple recs at once anyway.. so this must mean VERTS!
	else {
		o = g.O ? g.f :
		{w: g.f, h: g.s, x: g.t, y: g[3], a: g[4], d: g[5]}
		p.box(o)
	}
	fD = b2d.fD(p).d(N(o.d, .5))
	if (g.n) {
		fD.isSensor = true
	}
	return fD
	/*
	 //will set cols unless you pass in 0
	 if(o.c==0){o.c=null}
	 if(o.c==00){o.c=null;o.C=null}
	 if(o.c=='*'){o.c=$r()}
	 if(o.c=='**'){o.c=$r();o.C=$r()}
	 o.c =o.c||'z'
	 o.C =o.C||'w'
	 o.l = _.tN(o.l,4)
	 o.c1 = o.c1||'z'
	 o.c2 = o.c2||'w'
	 o.s1= _.tN(o.s1)
	 o.s2= _.tN(o.s2,1)
	 //
	 o.x1 = _.tN(o.x1)
	 o.y1 = _.tN(o.y1)
	 o.x2 =_.tN(o.x2);
	 o.y2 = N(o.y2)?o.y2:N(o.r)? o.r*2:100
	 o.r1=_.tN(o.r1)
	 o.r2=_.tN(o.r2,200)
	 // o.i image
	 //o.k kind
	 // o.p  layer position
	
	
	 //o.bm//o.bM
	 //o.g gradient
	
	 //o.m mass
	 //o.t type
	 // o.v = o.v || [] //verts
	 //o.X
	 //o.z clr
	 */
}
$bD = b2d.bD = b2d.BD = b2d.dBD = b2d.dD = b2d.D = b2d.dyn = function (x, y) {
	var v, bD
	v = V(x, y)
	bD = new b2BodyDef()
	bD.XY(N(v.x, 100), N(v.y, 100))
	bD.dyn()
	return bD
}
b2d.sD = b2d.S = b2d.stat = function (x, y) {
	return b2d.bD(x, y).stat()
}
b2d.kD = function (x, y) {
	return b2d.bD(x, y).T(1)
}
b.cF = function (fD) {
	return this.CreateFixture(fD)
}
b.A = function (fD) {
	this.cF(fD);
	return this
}
fD.DBF = function (d, bo, fr) {
	this.d(N(d, 1))
	this.bo(N(bo, .9))
	this.fr(N(fr, .5))
	return this
}
b.sP = function (x, y) {
	var v = V(x, y)
	this.SetPosition(V(v.x / 30, v.y / 30))
	return this
}
b2d.edg = function (x1, y1, x2, y2) {
	var fd = b2d.pol()
	fd.shape.SetAsEdge(V(x1, y1, '-'), V(x2, y2, '-'))
	return fd
}

