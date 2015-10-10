pD.hasAtLeastOnePoly = function () {
	return this.m_List.get(0)
}
pD.isPolyless = pD.hasNoPolys = function () {
	return !this.hasAtLeastOnePoly()
}
pD.D = function () {
	var pD = this
	G(arguments).e(function (polOrBod) {
		pD = b2d.iB(polOrBod) ? polOrBod.pDWo(pD) :
				pD.difference(gpc.p(polOrBod))
	})
	return pD
}
//f.dif does the math and returns the answer (vs)
//returns pD with array of pS's ( pD.m_List )
b.pDWo = b.gPolWo = function (gPol) {

	
	var gPol=this

	this.fs(function (f) {
	
		gPol = gPol.D(f)
	})
	return gPol
}
f._vs = function () {
	return b2d.m(this.H().m_vertices)
}
f.vs = function () {
	var f = this, b = f.B(), g = G(arguments),
			vs = _.m(f._vs(), g.n ?
							function (a) {
								return a
							} :
							function (v) {
								return v.rt(b.rt())
							}
			)
	return b2d.tA(vs)
}
f.dif = function () {
	var f = this, b = f.B(), g = G(arguments),
			pD = this.tGP()
			
	g.e(function (ob) {
		pD = b2d.iB(ob) ? ob.gPolWo(pD)
				: pD.D(ob)
	})
	
	if (!pD.hasAtLeastOnePoly()) {
		return $l('f.dif')
	}
	
	return pD.reg( b ).reg( g.n ? b : f )
}


f.difKill = function (what) {
	var f = this,
			difdFxt = f.dif(what, '-' ) //vs is f minus something
	f.kill() //then f goes away
	return difdFxt
}


f.sub = function (what) {
	var f = this,
	  b = f.B(), g = G(arguments), 
	
	what = g.f, 
	difdFxt
	
	//f.sub uses f.dif and replaces itself on a body
	// with its (potentially) 'slimmer' self
	//lets begin:
	// we get the dif of the this and the thing we are subtracting from it...
	// then we kill THIS fixt
	difdFxt = f.difKill( what )
	
	//otionally put a min size to allow it to be replaced
	//i guess if it's too small, don't bother
	//but calculating area could also be bottleneck?
	//if (!bigEnough(difdFxt)) {return}
	
	//here, body makes a new f from the dif (hence, it might be slimmer)
	//again... it is fixtizing the result of the gPol subtraction operation
	// it subtracted something from  this... killed itself..
	// .. and now is adding a NEW fixture to replace itself..
	//but the new fixture is the difference result of subtracting something else, from it
	//so after that subtraction, it killed itself, and and now 
	// we are replacing the body that held that fixt, replaces it with the resutl
	// of the difference between it and another fixt
	
	 b.pol( difdFxt )
	
	
	//now that other thing that we subtracted from our fixt before it was killed and replaced..
	//..letst talk about that thing
	//we can optionally kill that thing too!!
	//it may have been a real manufactured body or fixt
	//... though there should be a better way than that!!! !!!! :=)(+
	if (g.n) {
	
		 what.kill()
	}
	//and  aparently we can also optionally dynamize it!
	//if (g.p) {what.dyn()}
	
	return f
	function bigEnough(f) {
		return M.p(f).getArea() > 2000
	}
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
b.subFrom = function (fromWhat) {
	this.fs(function (f) {
		fromWhat.sub(f)
	})
	return this
}
f.subFromBod = function (bod) {
	bod.fs(function (f) {
		f.sub(bod)
	})
}
b.subFxt = b.subF = b._sub = function (f) {
	var b = this
	b.fs(function (fxt) {
		fxt.sub(f)
	})
	return b
}
b.subBod = b.subB = function (bod) {
	return this.subFrom(bod)
}
b.sub = function () {
/// hhi im here ///////////////////////////////////////////////////////
	var b = this, g = G(arguments), col = g.f
	g.e(function (ob) {
		b2d.iF(ob) ? b.subF(ob) : b2d.iB(ob) ? b.subB(ob) : null
		if (g.n) {
			ob.kill()
		}
	})
	if (col !== 0) {
		b.C(col || b.c())
	}
	return b
}
w.polD = function (x, y, p1, p2) {
	return this.pol(x, y, M.p(p1).D(p2))
}
b.pos = function () {
	return this.tf().position.m()
}//used in MEET
pD.butHere = pD.to = pD.at = pD.ger = function (x, y) {
	return this.reg(-V(x, y).x, -V(x, y).y)
}
pD.from = pD.cameFrom = pD.reg = pD.rel = function (x, y) {
	return M.p(b2d.sub(this.vs(), V(x, y)))
}//you can pass in the verts, // or the gPoly itself! //what about a f?
pD.points = pD.vs = function (fn) {
	var pD = this,
			g = G(arguments),
			o = g.F ? {fn: g.f} : {num: g.f, fn: g.s},
			vs = []
	_.t(pD.n(), function (i) {
		vs.push([pD.x(i), pD.y(i)])
	})
	vs = g.n ? b2d.sub(vs, o.num) :
			g.p ? b2d.add(vs, o.num) :
					vs
	if (o.fn) {
		_.e(vs, o.fn);
		return pD
	}
	return vs
}//used in MEET
f.wV = function () {
	return b2d.tA(b2d.add(this.vs(), this.B()))
}//used in MEET
//b2d.hV = b2d.hasVerts = gpc.hV
b.subPoly = b.subPol = b.subP = function (poly, where) {
	var b = this
	if (S(poly)) {
		poly = $vs[poly]
	}
	poly = gpc.p(poly)
	if (where) {
		poly = poly.butHere(where)
	}
	b.fs(function (f) {
		f.sub(poly)
	})
	return b
}
b.killBull = b.killXY = function () {
	var xy = this.XY()
	this.kill()
	return xy
}
b.expl = function () {
	var b = this, g = G(arguments)
	b.cl(function (f) {
		b.subPoly('expl', f.B().killBull())
		if (g.f) {
			b.C(g.f === '*' ? $r() : g.f)
		}
	})
	return b
}
//alt way to handle explosion sub
//w.rad(bulletX, bulletY, 15, function (terrainFxt) {terrainFxt.sub( explosionPol )})

