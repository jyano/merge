$load('gPoly','draw','plus','dif','verts','clone','reg','polyCir','terrGame')



b2d.vs = function () {var g = G(arguments)
	//all this does is to 'scale down' a series of points
	//can pass in pts naked OR in an array
	return _.m(
	g.s? g: //passed in verts ([],[],[])
			g.f,
	       b2d.div
	) //passed an array [[],[],[]]
	//b2d.div <- function div(v){return V(v).div()}	
}
 





b2d.ol = b2d.overlapping = function (b1, b2) {
	
	alert('b2d.ol overlapping')
	var v1 = M.p(b1),//wont work yet
			v2 = M.p(b2)
	var p = v1.union(v2)
	return !(_.isEqual(p.vs(), v1.vs()) ||
	_.isEqual(p.vs(), v2.vs()))
}

ps.vs = function () {
	var p = this,
	vs = []
	_.t(p.n(), function (i) {
		vs.push([p.x(i), p.y(i)])
	})
	return vs
}



b2d.sub = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).sub(p)
	})
}
b.wV = function () {
$l('b.wV')
return this.pD().vs()}


b.rV = function () {
	
	$l('b.rV')
	var b = this, r = M.tR(b.rot()), vs, r, x, y
	vs = _.m(b.vs(), function (v) {
		v = V(v)
		x = v.x * M.c(r) - v.y * M.s(r) + b.X()
		y = v.x * M.s(r) + v.y * M.c(r) + b.Y()
		return V(x, y)
	})
	return vs
	//this returns [V,V,V...]
} //b.vs????

 
function gPoly(){

	b2d.iG = b2d.iGP = b2d.isGPoly = function (a) {
		return O(a) && F(a.isHole)
	}
	f.A = f.area = function () {
	return M.p(this).getArea()
}
	f.tGP = function () {return $pD(this.wV())}
	pD.A = pD.addPoints = function (pts) {
	var p = this
	if (A(pts)) {
		_.e(pts, function (pt) {
			p.addPoint(V(pt))
		})
	}
	return p
}
	b.P = b.pD = function () {
	var b = this, p, fs = b.fs()
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
	M.p = b2d.gpcPD = function () {
	//it expects worldVerts....
//it works with worldVerts...
//it was designed   with
//that in
//mind
	var g = G(arguments), p, b, fs, vs
	if (b2d.iGP(g.f)) {
		return g.f
	}
	if (b2d.iB(g.f)) {
		vs = g.f.wV()
		_.eR(g.f.fs(), function (v) {
			vs = vs.uni(v)
		})
	}
	else {
		vs = b2d.iF(g.f) ? g.f.wV() :
				g.f
	}
	return $pD(vs)
}
	pD.pol = function (b) {
		alert('pD.pol')
		var p = this
		p = M.p([[0, 50], [-50, 0], [0, -50], [50, 0]])
		// w.pol(v.x, v.y, p) -> p.pol(w,v)?
		p.ps(b, function (p) {
			b.pol(p)
		})
		return p
	}
	

}

function draw() {
	w.pDraw = function (p, x, y) {
		var w = this,
				b = w.S(0, 0)
		b.pol({
			v: M.p(p).plus(x || 0, y || 0).vs(),
			c: 'w', C: 'x', l: 10
		})
		return p
	}
	h.drawPolygon = function (V, c, C, l) {
		var h = this, //h.drawConnectedLines =
				n = V.length
		h.c(c, C, l)
		_.e(V, function (v) {
			v.X = v.x
			v.Y = v.y
		})
		if (n >= 3) {
			h.mt(V[0]) //move to the FIRST//lineTo the REST
			_.in(n, function (i) {
				h.lt(V[i % n])
			})
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
function plus() {
	pD.plus = function (x, y) {
		return M.p(_.m(this.vs(), function (v) {
			return V(v).add(x || 0, y || 0)
		}))
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
	b.sum = function (b1) {
		return $uni(this, b1).vs(this, '-')
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
	b2d.add = function (vs, p) {
		return _.m(vs, function (v) {
			return V(v).add(p)
		})
	}
	b2d.glu = function (a, b) {
		return a.glu(b)
	}
}
function dif() {
	pD.minus = function (x, y) {
		return M.p(_.m(this.vs(), function (v) {
			return V(v).sub(x || 0, y || 0)
		}))
	}
	$dif = DIF = function () {
		$l('DIF')//not each of the ps?
		var g = G(arguments),
				p = M.p(g.f)
		g.eR(function (p1) {
			p = p.D(p1)
		})
		return p
	}
	f._dif = function (toRm) {
		var f = this, b = f.B(), g = G(arguments),	//f.dif does the math and returns the answer (vs)
				p = f.tGP()
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
		return p
	}
	f.dif = function () { // called a lot! $l('f.dif') //f.dif does the math and returns the answer (vs)
		var f = this, b = f.B(), g = G(arguments),
				p = f._dif.apply(f, g)
		if (!b2d.hV(p)) {
			$l('f.dif says: !hV(p), does: return nada');
			return
		}
		p = p.reg(f)
		return !g.n ? p : p.reg(b)
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
			g.f.kill()
		}
		if (g.p) {
			g.f.dyn()
		} //can optionally delete the 'something'
		return f
	}
	b.dif = function (o) {
		var b = this, g = G(arguments),
				f = b.f(), fs = b.fs(), p
		if (b.n() == 1) {
			return b.f().dif(o, '-')
		}
		p = $dif(b, o).reg(b)
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
	w.polD = function (x, y, p1, p2) {
		return this.pol(x, y, M.p(p1).D(p2))
	}
}
 
function clone() {
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
		return this.W().pol(x, y, this)
	}
}
function reg(){
	b.reg = b.rel = function (p) {
		$l('b.reg')
		var b = this
		//my poly operations can only work with POSITIVE vertices
		//but box2d needs fixt vertices specified relative to a body
		//so this allows the body that the operation was based on to take responsibility
		//for converting them back
		//you can pass in the verts, or the gPoly itself!
		var vs = gpc.iP(p) ? p.vs() : p
		return _.m(vs, function (v) {
			v = V(v);
			return V(v.x - b.X(), v.y - b.Y())
		})
		//this returns [V,V,V...]
	}
ps.reg = function (b) {$l('ps.reg')
	var p = this, g = G(arguments),
			vs = p.vs(), b, o
	//you can pass in the verts,
	// or the gPoly itself!                 //what about a f?
	o = V(g.f, g.s)
	return M.p(vs = _.m(vs, function (v) {
		return V(v).sub(o.x, o.y)
	}))
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
		p[0].C(o.c || $r())
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
function _pre() {
	b2d.recV = function (x, y, w, h) {
		var hW = w / 2, hH = h / 2
		return [[x - hW, y - hH], [x + hW, y - hH],
			[x + hW, y + hH], [x - hW, y + hH]]
	}
	b2d.tF = function (f) {
		return b2d.iB(f) ? f.f() : f
	}

	gpc = gpcas
	gpc.g = gpc.geometry
	ps = gpc.g.PolySimple.prototype
	pD = gpc.g.PolyDefault.prototype
	b2d.p()
	h = cjs.Shape.prototype
}
function terrGame() {
	w.md1 = function (fn) {
		return this.md(function (a, b, c) {
			if (self.used) {
				return
			}
			fn(a, b, c)
			self.used = 1
		})
	}//
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
	b.exp = function () {//alert('b.exp is random!')
		var b = this, xy
		xy = b.pos()
		b.kill()
//	return R() ? b2d.sep(b2d.pC(20, 7)).XY(xy) : w.D(xy.x, xy.y).rec( 60, 60).rot(45)
		return w.D(xy.x, xy.y).rec(60, 60).rot(45)
	}
	w.cxBul = function (k, fn) {
		var w = this
		this.b(function (cx) {
			cx.w('bul', k, fn)
		})
	}
}
function later() {
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
}

b.ps = function (fn) {
	alert('b.ps sucks')
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
w.ps = function (x, y, p) {
	alert('w.ps is high level')
	p.ps(this.D(x, y), function (p) {
		b1.pol(p)
	})
}

