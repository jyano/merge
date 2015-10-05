gpc = gpcas
gpc.g= gpc.geometry
ps = gpc.g.PolySimple.prototype
pD = gpc.g.PolyDefault.prototype
b2d.p()
h = cjs.Shape.prototype
$load('draw', 'ops','polyCir','copy','polys','boxD','fixBod','rayy')


b.uni = function () {
	var b = this, g = G(arguments), n, fs
	fs = b.fs()
	if (g.u) {
		return g.p ? UNI(fs).reg(b) : b2d.u(fs)
	}
	//unite with fixt or first-fixt(of body)
	if (O(g[0]) && !F(g[0])) {
		return b.f().uni(b2d.tF(g[0]))
	}
}
f.uni = function () {
	var f = this,
			b = f.B(), g = G(arguments), p, n
	//can handle a fixt OR a body!
	//-> [f]
	if (g.jA) {
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
b.sum = function (b1) {
	var b = this
	return UNI(b, b1).vs(b, '-')
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
pD.plus = function (x, y) {
	var p = this,
			vs = p.vs()
	vs = _.m(vs, function (v) {
		v = V(v)
		return v.add(x || 0, y || 0)
	})
	return M.p(vs)
}
w.polU = function (x, y, p1, p2) {
	var w = this, p
	p = w.pol(x, y, M.p(p1).U(p2))
	return p
}
w.polD = function (x, y, p1, p2) {
	var w = this
	return w.pol(x, y, M.p(p1).D(p2))
}
f.dif = function () {
	var f = this, b = f.B(), g = G(arguments), p
//f.dif does the math and returns the answer (vs)
	p = M.p(f)
	g.e(function (g) {
		if (b2d.iB(g)) {
			g.fs(function (f) {
				p = p.D(f)
			})
		}
		else {
			p = p.D(g)
		}
	})
	if (!b2d.hV(p)) {
		$l('!hV(p)')
		return
	}
	p = p.reg(f)
	if (g.n) {
		p = p.reg(f.B())
	}
	return p
}
f.sub = function () {
	var f = this, b = f.B(), g = G(arguments),
			p
//f.sub uses f.dif and replaces itself on a body
// with its (potentially) 'slimmer' self
	p = f.dif(g[0], '-') //vs is f minus something
	if (p && !M.p(p).hH()) {
		f.kill() //then f goes away
		if (M.p(p).getArea() < 2000) {
			return
		}
		b.pol(p)//the body makes a new f, from the the vs
	}
	if (g.n) {
		g[0].kill()
	}
	if (g.p) {
		g[0].dyn()
	} //can optionally delete the 'something'
	return f
}
b.dif = function (o) {
	var b = this, g = G(arguments),
			f = b.f(), fs = b.fs(), p
	if (b.n() == 1) {
		return b.f().dif(o, '-')
	}
	p = DIF(b, o).reg(b)
	if (g.n) {
		if (b2d.iB(o) || b2d.iF(o)) {
			o.kill()
		}
		else {
			b.kill()
		}
	}
	return p
}
pD.minus = function (x, y) {
	var p = this,
			vs = p.vs()
	vs = _.m(vs, function (v) {
		v = V(v)
		return v.sub(x || 0, y || 0)
	})
	return M.p(vs)
}
b.sub = function () {
	var b = this, gg = G(arguments), c = b.c()
	gg.e(function (g) {
		if (b2d.iF(g)) {
			b.fs(function (f) {
				f.sub(g)
			})
			if (gg.n) {
				g.kill()
			}
		}
		else if (b2d.iB(g)) {
			g.fs(function (f) {
				b.sub(f)
			})
			if (gg.n) {
				g.kill()
			}
		}
	})
	b.C(b.c())
	return b
}
pD.D = function () {
	var pD = this, gg = G(arguments)
	gg.e(function (g) {
		if (b2d.iB(g)) {
			if (g.n() == 1) {
				return pD.D(g.f())
			}
			g.fs(function (f) {
				pD = pD.D(f)
			})
		}
		else {
			pD = pD.difference(M.p(g))
		}
	})
	return pD
}



//

pD.pol = function (b) {
	var p = this
	p = M.p([[0, 50], [-50, 0], [0, -50], [50, 0]])
	// w.pol(v.x, v.y, p) -> p.pol(w,v)?
	p.ps(b, function (p) {
		b.pol(p)
	})
	return p
}
ps.vs = function () {
	var p = this, vs = []
	_.t(p.n(), function (i) {
		vs.push([p.getX(i), p.getY(i)])
	})
	return vs
}
pD.A = pD.addPoints = function (pts) {
	var p = this
	if (A(pts)) {
		_.e(pts, function (pt) {
			p.addPoint(V(pt))
		})
	}
	return p
}
pD.vs = function (fn) {
	var p = this, g = G(arguments), vs = []
	_.t(p.n(), function (i) {
		vs.push([p.getX(i), p.getY(i)])
	})
	if (g.n) {
		vs = _.m(vs, function (v) {
			return V(v).sub(g[0])
		})
	}
	if (g.p) {
		vs = _.m(vs, function (v) {
			return V(v).add(g[0])
		})
	}
	if (F(fn)) {
		_.e(vs, function (v) {
			fn(v)
		})
		return p
	}
	return vs
}
w.ps = function (x, y, p) {
	var w = this, b
	b = w.D(x, y)
	p.ps(b, function (p) {
		b1.pol(p)
	})
}
w.polS = function () {
	alert('you found w.polS');
	var w = this, g = G(arguments), b, o
	if (g.jA) {
		return w.pol.apply(w, g.f)
	}
	if (O(g[0]) && O(g[1])) {
		g.e(function (g) {
			w.pol(g).stat()
		});
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
f.wV = function () {
	var f = this, b = f.B(), g = G(arguments),
			vs
	vs = g.n ? f.vs() : f.vs('+')
	return b2d.tA(_.m(vs, function (v) {
		return V(v).add(b)
	}))
}
f.A = f.area = function () {
	return M.p(this).getArea()
}
b.wV = function () {
	var b = this, g = G(arguments)
	return b.pD().vs()
}
b.rV = function () {
	var b = this,
			r = M.tR(b.rot()),
			vs, r, x, y
	vs = _.m(b.vs(), function (v) {
		v = V(v)
		x = v.x * M.c(r) - v.y * M.s(r) + b.X()
		y = v.x * M.s(r) + v.y * M.c(r) + b.Y()
		return V(x, y)
	})
	return vs
	//this returns [V,V,V...]
} //b.vs????
b.pos = function () {
	return this.tf().position.m()
}
b.ps = function (fn) {
	var b = this,
			arr = [],
			p = b.uni()
	if (F(fn)) {
		p.ps(b, fn);
		return b
	}
	p.ps(b, function (v) {
		arr.push(v)
	})
	return arr
}
b.P = b.pD = function () {
	var b = this, p,
			fs = b.fs()
	if (!_.f(fs)) {
		return new PolyDefault()
	}
	p = M.p(_.f(fs))
	_.eR(fs, function (f) {
		p = p.U(f)
	})
	return p//p.reg(b)
	//this returns a gPoly
}
b.reg = b.rel = function (p) {
	var b = this
	//my poly operations can only work with POSITIVE vertices
	//but box2d needs fixt vertices specified relative to a body
	//so this allows the body that the operation was based on to take responsibility
	//for converting them back
	//you can pass in the verts, or the gPoly itself!
	var vs
	vs = gpc.iP(p) ? p.vs() : p
	return _.m(vs, function (v) {
		v = V(v)
		return V(v.x - b.X(), v.y - b.Y())
	})
	//this returns [V,V,V...]
}
b.exp = function () {
	var b = this, xy
	xy = b.pos()
	b.kill()
	return R() ?
			b2d.sep(b2d.pC(20, 7)).XY(xy) :
			w.brick(xy.x, xy.y, 60, 60).rot(45)
}
function boxD() {
	b2d.vs = function () {
		var g = G(arguments)
		//all this does is to 'scale down' a series of points
		//can pass in pts naked OR in an array
		if (g.s) {
			return _.m(g, b2d.div)
		}
		//passed in verts ([],[],[])
		return _.m(g.f, b2d.div) //passed an array [[],[],[]]
		//b2d.div <- function div(v){return V(v).div()}
	}
	b2d.gpcPD = M.p = function () {
		//it expects worldVerts....
//it works with worldVerts...
//it was designed with
//that in
//mind
		var g = G(arguments), p, b, fs, vs
		if (b2d.iGP(g[0])) {
			return g[0]
		}
		p = new PolyDefault()
		if (b2d.iB(g[0])) {
			fs = g[0].fs()
			vs = fs[0].wV()
			_.eR(fs, function (v) {
				vs = vs.uni(v)
			})
		}
		else {
			vs = b2d.iF(g[0]) ? g[0].wV() :
					g[0]
		}
		p.A(vs)
		return p
	}
	b2d.add = function (vs, p) {
		return _.m(vs, function (v) {
			return V(v).add(p)
		})
	}
	b2d.glu = function (a, b) {
		return a.glu(b)
	}
	b2d.tF = function (f) {
		return b2d.iB(f) ? f.f() : f
	}
	b2d.hV = b2d.hasVerts = function (poly) {
		return poly.m_List.get(0)
	}
	b2d.ol = b2d.overlapping = function (b1, b2) {
		var v1 = M.p(b1),//wont work yet
				v2 = M.p(b2)
		var p = v1.union(v2)
		return !(_.isEqual(p.vs(), v1.vs()) || _.isEqual(p.vs(), v2.vs()))
	}
	b2d.iG = b2d.iGP = b2d.isGPoly = function (a) {
		return O(a) && F(a.isHole)
	}
	b2d.recV = function (x, y, w, h) {
		var hW = w / 2, hH = h / 2
		return [[x - hW, y - hH], [x + hW, y - hH], [x + hW, y + hH], [x - hW, y + hH]]
	}
}
function copy() {
	b.clone = function (x, y, a) {
		var b = this
		x = N(x, b.X())
		y = N(y, b.Y())
		a = N(a, b.rot())
		b1 = w.D(x, y).type(b.type()).rot(a)
		arr = []
		b.fs(function (f) {
			var h, x, y, r
			arr.push(f)
			_.e(arr, function (f) {
				if (f.iC()) {
					h = f.H()
					x = h.m_p.x * 30
					y = h.m_p.y * 30
					r = h.m_radius * 30
					b1.cir(r, x, y, $r())
				}
				else {
					b1.pol({c: $r(), v: f.vs()})
				}
			})
		})
		return b1
	}
	b.polyClone = function (x, y, a) {
		var b = this, b1
		x = N(x, b.X())
		y = N(y, b.Y())
		a = N(a, b.rot())
		b1 = w.B(x, y).type(b.type()).rot(a)
		b.fs(function (f) {
			b1.pol(_.m(f.vs(), function (v) {
				return [v.x, v.y]
			}))
		})
		return b1
	}
	b.copy = function (x, y) {
		var b = this, w = b.W(), g = G(arguments)
		return w.pol(x, y, b)
	}
}
function draw(){
	w.pDraw = function (p, x, y) {
		var w = this,
				b = w.S(0, 0)
		b.pol({
			v: M.p(p).plus(x || 0, y || 0).vs(),
			c: 'w', C: 'x', l: 10
		})
		return p
	}
	h.drawPolygon = function (V, c, C, l) {var h = this, //h.drawConnectedLines =
			n = V.length
		h.c(c, C, l)
		_.e(V, function (v) {
			v.X = v.x
			v.Y = v.y
		})
		if (n >= 3) {
			h.mt(V[0]) //move to the FIRST//lineTo the REST
			_.in(n, function (i) {h.lt(V[i % n])})
		}
		//just a clever way to start from 1
		return h
	}
	h.drawPolygons = function (paths, C, c) {
		var h = this
		h.C(C)
		if (c) {
			h.c(c)
		}
		_.e(paths, function (p) {
			h.drawPolygon(p)
		})
		return h
	}
	
}
function polyCir() {
	b2d.pC = function () {
		var g = G(arguments), //b2d.polyCirc =
				vs = [],
				r = N(g[0], 20),
				n = N(g[1], 20),
				a = 2 * M.PI / n
		_.t(n, function (i) {
			var v = V(
					M.c(a * i) * r,
					M.s(a * i) * r)
			vs.push(g.p ? v : [v.x, v.y])
		}) //returns an arr of rel verts
		return vs
	}
	b2d.polyCirc = function (r, n) {
		var g = G(arguments), vs = [], a
		r = N(r, 20)
		n = N(n, 20)
		a = 2 * M.PI / n
		_.t(n, function (i) {
			vs.push(V(r * M.c(a * i), r * M.s(a * i)))
		})
		return vs
	}
	b.pC = function () {
		var b = this, g = G(arguments), o,
				vs = [], p
		o = O(g[0]) ? g[0] :
				S(g[0]) ? {c: g[0], r: g[1], n: g[2]}
						: {r: g[0], n: g[1]}
		o.r = N(o.r, 20)
		o.a = 2 * M.PI / o.n
		_.t(N(o.n, 20), function (i) {
			var v
			v = V(M.c(o.a * i) * o.r, M.s(o.a * i) * o.r)
			vs.push([v.x, v.y])
		})
		if (g.n) {
			return vs
		}
		p = b.pol(vs)
		p.C(o.c || $r())
		return b
	}
	b.mPC = b.minusPolyCirc = function (x, y, r, sides) {
		var b = this, pC, p
		pC = b2d.pC(r, sides)
		p = _.m(pC, function (v) {
			v = V(v)
			return [v.x + x, v.y + y]
		})
		vs = DIF(b, p).ps(b)
		//b.clear()
		b.pol(vs)
		return b
	}
	w.pC = function (x, y, pC0, pC1, pC2) {
		var w = this, g = G(arguments), o
		if (g.O) {
			o = g[0]
			return w.D(o.x, o.y).pC(o)
		}
		return w.D(x, y).pC(pC0, pC1, pC2)
	}
	f.pC = function (n) {
		var f = this, g = G(arguments), pC
		pC = f.iC() ? b2d.pC(f.rad(), N(n, 10))
				: f
		return g.m ? M.p(pC) : pC
	}
}
function rayy(){
	
	b2d.p()
	
	w.ray=function(){var w=this, g=G(arguments), o, arr
		
		o = g.S_ ? {k:g.f, x:g.s, y:g.t, x1:g[3], y1:g[4], fn:g[5]}:{x:g.f, y:g.s, x1:g.t, y1:g[3], fn:g[4]}
		
		arr=[]; w.RayCast(function(f){if(f.of(o.k)){arr.push(f)}},V(o.x,o.y,'-'),V(o.x1,o.y1,'-'))
		
		if(!o.fn){return arr}
		
		if (g.p){o.fn( _.f(arr)) }
		
		else if (g.n){o.fn( _.l(arr) )}
		
		else {_.e(arr, function(f){ o.fn(f) })}
		
		return w  //2do: use 'G' to scrape off 'k' manually (g = w.G('k', arguments)
	}
	w.rC1=function(){var w=this
		w.RayCastOne
	}
	w.rCA=function(){var w=this
		w.RayCastAll
	}
	w.rC=function(fn,v1,v2){var w=this
		
		return w.RayCast( fn,  V(v1).div(), V(v2).div() )
	}
	w._rC =  function(v1,v2,fn){var w=this
		
		return w.RayCast( fn,  V(v1).div(), V(v2).div() )
	}
	f.AB = function(){
		
		var ab = this.GetAABB()
		
		
		return {
			l: ab.lowerBound.m(),
			u: ab.upperBound.m()
		}
		
	}
	f.rC=function(){
		var inp, res
		
		i = inp = new b2d.Collision.b2RayCastInput( V(0,0,'-'),  V(430,450,'-') )
		
		
		res = this.RayCast( inp )
		
		return res
	}
	b2d.Seg=function(x,y,x1, y1){
		seg = new b2d.Collision.b2Segment( V(x,y ), V(x1,y1 )  )
		return seg
	}
	b2d.rCIp = function(x,y,x1,y1,maxFrac){
		maxFrac=N(maxFrac,1)
		return new b2d.Collision.b2RayCastInput(V(x,y,'-'), V(x1,y1,'-'), maxFrac)
		
	}
	b2d.rCOp = function(nX, nY, maxFrac){
		
		maxFrac = N(maxFrac,1)
		
		
		op =  new b2d.Collision.b2RayCastOutput(
				maxFrac, V(nX, nY)
		)
		
		op.maxFraction= 1
		
		return op
		
	}
	rayDocs=function() {
//RayCast(fn, startV, endV)  -> undefined
//Ray-cast the world for all fixtures in the path of the ray.
//Your callback Controls whether you get the closest point, any point, or n-points
//The ray-cast ignores shapes that contain the starting point
//fn -> function Callback(f, initInterNormV, normAtInterFracPtV, fracLenAlongRayInterN)
//Callback should return the new length of the ray as a fraction of the original length.
// By returning 0, you immediately terminate.
// By returning 1, you continue wiht the original ray.
// By returning the current fraction, you proceed to find the closest point.
//RayCastAll(v1, v2) -> v
//RayCastOne(v1, v2) -> f
// w.RayCast(b2RayCastOutput* output,  const b2RayCastInput& input)
//raycast input
//   The ray extends from p1 to p1 + maxFraction * (p2 - p1).
//    b2RayCastInput= {V1, V2, maxFraction}
// The points V1 and V2 are used to define a direction for the ray,
//  and the maxFraction specifies how far along the ray should be checked
// for an intersection.
// The following image may make this clearer
// . A maxFraction of 1 simply means the segment from p1 to p2, which in this case would not intersect the shape, but a maxFraction of 2 would. Raycasting And here is what a b2RayCastOutput contains:
// Ray-cast output data. The ray hits at p1 + fraction * (p2 - p1), where p1 and p2
// come from b2RayCastInput.
// b2RayCastOutput={normal,  fraction }
		/*
		 If the ray does intersect the shape,
		 b2Fixture::RayCast will return true and we can look in the output
		 struct to find the actual fraction of the intersect point,
		 and the normal of the fixture 'surface' at that point: Raycasting
		
		 Now we need a ray to cast against these shapes. Let's make a ray starting from the center of the screen and going outward, and rotating slowly around. The only state we need to keep for this is the current angle, so instead of making a special class for it, we'll just keep a variable at global scope.
		 */
	}
	function rayApps(){IMP=function(){W({g:0, w:0}).Y()
		
		// y.rt(90).XY(200,240)
		
		w.D(200,235,'b',10).lV(20,0).d(10)
		
		w.D(900, 200,'r', 100,100).rt(45)
		
		
		
		r =   w.D(1100,500,'r', [ [80], [20,300] ]).d(.1)
		
		r.$(function(){
			this.B().I(100,-2000)
		})
		
		f= r.f()
		w.i.dot(856, 240)
		
		/*
		 s = b2d.Seg(0,0,1200, 600)
		 s1 = b2d.Seg(1200,0, 0, 600)
		 lArr =  'the shape world transform'
		 nl = '2Vec2 — returns the hit fraction.'
		 // You can use this to compute the contact point
		 // p = (1 - lambda) segment.p1 + lambda segment.p2.
		 sg = ''//segment:b2Segment — returns the normal at the contact point. If there is no intersection, the normal is not set.
		 maxLam = 1000000//:Number — defines the begin and end point of the ray cast.
		 s.TestSegment(lArr, nl, s1, maxLam )
		 */
		
		
		
		ip = b2d.rCIp( 0,0,1200,600 )
		
		
		op = b2d.rCOp(1,2)
		
		res = f.rC( op,ip     )
		
		
		
	}
		RAY=function(){W().C('z')
			w.S(200,200, 'f', 100);
			w.S(500,500, 'l', 160, 60)
			rs =  w.ray(0, 0, 800, 800 )
			_.in(  function(){
				
				w.ray(0, 0, 500, 500, function(f){   f.C('g')  })
				w.ray(0,0,500,500,    function(f){f.B().bS('me')}, '-')
				w.ray(0, 0, 500, 500, function(f){f.B().bS('sun')}, '+')
				
			})
		}
		RC=function(){W(); var p1,p2, d,l
			w.me(400,100); w.S(200, 200,'r', 400,20)
			w.$(function(v){
				if(!p1){p1=v; return} if(!p2){p2=v} else {p1=p2;p2=v}
				
				w.i.e(function(c){
					if( c.of('dot') || c.of('line') ){c.rm()}
					// if( c.K() == 'dot' || c.K()=='line' ){c.rm()}
				})
				w.d('b', p1); w.d('r', p2); w.l( p1.x , p1.y , p2.x,  p2.y).K('line')
				w.rC(function(f){  f.B().dot()  }, p1, p2)
			})
		}
	}
	
}
function later(){
	f.dots = function () {
		var f = this;
		b2d.pD = b2d.polyDot = function (vs) {
			var t = 0
			vs = A(vs) ? vs : vs.wV
			w.dot('g', V(_.f(vs)))
			_.e(vs,
					function (v) {
						$.in(t, function () {
							w.dot(V(v))
						}, t)
						t += .1
					}
			)
			w.dot('r', V(_.l(vs)))
		}
		b2d.polyDot(f.wV())
		return f
	}
	UNI = b2d.u = function me() {
		$l('UNI')
		var g = G(arguments), p
		if (g.A) {
			return g.ap(UNI)
			//return $a(UNI,g.f)
		}
		p = M.p(g[0])
		g.eR(function (pol) {
			p = p.U(M.p(pol))
		})
		return p
	}
	DIF = function () {
		$l('DIF')
		var g = G(arguments),
//not each of the ps?
				p = M.p(g[0])
		g.eR(function (p1) {
			p = p.D(p1)
		})
		return p
	}
	pD.dot = function () {
		var p = this
		p.vs(function (v) {
			w.dot('o', v)
		})
		return p
	}
	pD.dot = function (w) {
		var pD = this
		pD.vs(function (v) {
			w.dot('w', v[0], v[1])
		})
		return pD
	}
	w.cxBul = function (k, fn) {
		var w = this
		w.b(function (cx) {
			cx.w('bul', k, fn)
		})
	}
	b2d.miniX = function () {
		iF = b2d.iF;
		iB = b2d.iB;
		iP = b2d.iGP
		pD = function () {
			return new PolyDefault()
		}
	}
	w.vDot = function (d) {
		var w = this
		w.dot('g', _.f(d))
		_.eR(d, function (v) {
			w.dot(v)
		})
		w.dot('r', _.l(d))
		return d
	}
	w.md1 = function (fn) {
		alert('w.md1')
		var w = this
		return w.md(function (a, b, c) {
			if (self.used) {
				return
			}
			fn(a, b, c)
			self.used = 1
		})
	}//
}
ps.reg = function (b) {
	var p = this, g = G(arguments), vs = p.vs(), b, o
	//you can pass in the verts,
	// or the gPoly itself!                 //what about a f?
	o = V(g[0], g[1])
	vs = _.m(vs, function (v) {
		return V(v).sub(o.x, o.y)
	})
	return M.p(vs)
}
pD.reg = pD.rel = function (b) {
	var p = this, g = G(arguments),
			vs = p.vs(), b, o
	//you can pass in the verts,
	// or the gPoly itself!
	//what about a f?
	o = V(g[0], g[1])
	vs = _.m(vs, function (v) {
		return V(v).sub(o.x, o.y)
	})
	return M.p(vs)
}
pD.ps = function () {
	var p = this,
			g = G(arguments),
			fn,
			ps = [];
	//put all my polys in an array
	_.t(p.nP(), function (i) {
		ps.push(p.g(i))
	})
	if (b2d.iB(g[0])) {
		ps = _.m(ps, function (p) {
			//return M.p(p).rel(g[0])
			return p.reg(g[0])
		})
		fn = g[1]
	}
	else if (N(g[0])) {
		ps = _.m(ps, function (p) {
			return p.reg(g[0], g[1])
		})
		fn = g[2]
	}
	else {
		fn = g[0]
	}
	if (g.p) {
		ps = _.m(ps, M.p)
	}
	if (F(fn)) {
		_.e(ps, fn);
		return p
	}
	return ps
}
pD.ger = function (x, y) {
	var p = this, v = V(x, y);
	return p.reg(-v.x, -v.y)
}
w.ter = function () {
	var w = this, ter = []
	_.t(13, function (i) {
		_.t(8, function (j) {
			var b = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
			ter.push({
				b: b,
				vs: b.f().vs(),
				p: M.p([
					V(i * 25 + 410, j * 25 + 210),
					V(i * 25 + 410, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 210)])
			})
		})
	})
	return ter
}