$load('worldStuff', 'fixts', 'bods', 'fxSp', 'bdSp', 'rmSp', 'toElse', 'bods', 'dev', 'edge', 'wall', 'anim', 'wStuff', 'fromCreate')

function worldStuff(){
	w.cen = w.cent = function () {
		var w = this, g = G(arguments),
				v = V(w.s.W() / 2, w.s.H() / 2)
		if (g.p) {
			w.dot(v)
		}
		return v
	}
	w._D = function (o) {
		return this.D(o.x, o.y, o.c, o.w, o.h)
	}
	w.D = function () {
		var w = this, g = G(arguments, 'k'), o,
				b
		if (g.u) {
			return w.D(w.hW, w.hH)
		}
		o = g.O ? g.f :
				g.O_ ? {p: g.f, f: g.r} :
					//position, fixtures
				{p: [g.f, g.s], f: _.r(g, 2)}
		b = w.cB(b2d.BD(o.p))
		b.K(g.k)
		$a(b, 'f', g.G(o.f))
		return b
	}
	w.UI = function () {
		//alert('w.UI');
		return $(this.i.canvas)
	}
	w.$h = function () {
		$l('w.$h')
		return this.i.h.apply(this.i, arguments)
	} // h = $h().a2(s).rXY(100, 300).XY(100,300).drag()
//  h.rec( 'r','b',600, 200,  600, 200)
// h.rec( 'g',100, 100,  100, 20)
	w.C = function (c) {
		var w = this
		w.bg.h().c(c || $r()).dr(0, 0, w.w, w.h)
		return w
	}
	w.cir = w.ball = w.ba = w.circ = function (x, y, r, c) {
		alert('w.cir w.ball w.ba w.circ')
		var w = this, g = G(arguments), b, o
		o = g.O ? g.f : N(g.s) ? {
			x: g.f, y: g.s,
			r: g.t,
			c: g[3]
		} : {r: g.f}
		o.x = N(o.x, w.hW)
		o.y = N(o.y, w.hH)
		o.r = N(o.r, 50)
		o.c = o.c || $r()
		b = w.D(o.x, o.y, o.c, o.r)
				.d(.5).fr(0).r(.5)
				.K('ball cir')
		if (g.n) {
			b.sen(true)
		}
		return b
	}
	w.bump = w.baa = function () {
		var w = this, g = G(arguments), b, o
		o = O(g[0]) ? g[0] : N(g[1]) ? {
			x: g[0],
			y: g[1],
			r: g[2]
		} : {r: g[0]}
		o.x = _.tN(o.x, w.hW)
		o.y = _.tN(o.y, w.hH)
		o.r = _.tN(o.r, 40)
		o.c = o.c || $r()
		b = w.S(o.x, o.y, o.c, o.r).K('bump').DFB(0.5, 0, 0.5)
		if (g.n) {
			b.sen(true)
		}
		return b
	}
	w.d = w.dot = function () {
		var w = this, g = G(arguments), o
		if (g.S_) {
			o = N(g.s) ?
			{c: g.f, x: g.s, y: g[2]} :
			{c: g.f, x: V(g.s).x, y: V(g[1]).y}
		}
		else {
			o = N(g.s) ?
			{x: g.f, y: g.s} :
			{x: V(g.f).x, y: V(g.f).y}
		}
		if (g.m) {
			w.dot(o.c, o.x, o.y, '-')
			w.dot(o.c, o.x, o.y, '/')
			w.dot(o.c, o.x, o.y, '+')
			w.dot(o.c, o.x, o.y)
		}
		else if (g.p) {
			w.fg.dot(o.c, o.x, o.y)
		}
		else if (g.n) {
			w.bg.dot(o.c, o.x, o.y)
		}
		else if (g.d) {
			w.g.dot(o.c, o.x, o.y)
		}
		else {
			w.i.dot(o)
		}
		return w
	}
	w.brick = w.bii = function (x, y, W, H) {
		var w = this, g = G(arguments), b, o
		o = O(g[0]) ? g[0] : N(g[1]) ? {
			x: g[0],
			y: g[1],
			w: g[2],
			h: g[3]
		} : {w: g[0]}
		o.x = _.tN(o.x, w.hW)
		o.y = _.tN(o.y, w.hH)
		o.w = _.tN(o.w, 40)
		o.h = _.tN(o.h, o.w)
		o.c = o.c || $r()
		b = w.S(o.x, o.y, o.c, o.w, o.h).K('brick').DFB(0.5, 0.5, 0)
		if (g.n) {
			b.sen(true)
		}
		return b
	}
	w.bfR = function () {
		var w = this, g = G(arguments), b, h, o
		o = _.x({x: g.f, y: g.s},
				S(g.t) ? {i: g.t, w: g[3], h: g[4], c: g[5]} :
				{w: g.t, h: g[3], c: g[4]})
		o.i = o.i || 'sun'
		o.c = o.c || 'y' // can be removed
		b = w._D(o)
		h = w.g.h().al(.5)
		if (o.c) {
			h.c(o.c)
		}
		h.bf(o.i)
		h.rec(o.w, o.h)
		b.bS(h)
		return b
	}
	w.pol = function () {
		var w = this, g = G(arguments), b, o
		if (g.A) {
			return $a(w, 'pol', g.f)
		}
		if (g.OO) {
			g.e(function (g) {
				w.pol(g)
			})
			return w
		}
		
		
		
		// if(g.N_ && N(g.s) && O(g.t) &&U(g[3])){return w.D(g.f,g.s).pol(g.t)}
		else if (g.N_ && N(g.s) && O(g.t)) {
			b = w.D(g.f, g.s) // if(iB(g[2])){ g[2]= g[2].wV()} //M.p(g[2]).vs()
			_.e(g.t, function (p) {
				b.pol({v: p})
			})
			return g.m ? M.p(b) : b
		}
		o = g.O ? g.f :
				N(g.f) ? {x: g.f, y: g.s, p: g.t}
						: {p: g.f}
		o.x = N(o.x, w.hW)
		o.y = N(o.y, w.hH)
		o.p = M.p(o.p)
		b = w.D(o.x, o.y)
		if (g.P) {
			if (iB(o.p)) {
				o.p = M.p(o.p)
			}
			b.pol(o.p)
			return g.m ? M.p(b) : b
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
	w._preKill = function (b) {
		$l('w._preKill')
		if (b.sprite) {
			b.sprite.rm()
		}
		b.sprite = null
		if (b.sp()) {
			b.sp().rm()
		}
		b.fs(function (f) {
			f.rmSp()
		})
	}
	w._fPreKill = function (f) {
		$l('w._fPreKill')
		f.rmSp()
	}
	w.killD = w.xD = function () {
		w.e(function (b) {
			if (b.iD()) {
				b.kill()
			}
		})
	}
	w._ = function (fn) {
		Q(function () {
			fn(w)
		})
	}
}

function fixts(){
	f.tP = f.hit = f.testPoint = f.test = function () {
		var f = this, b = f.B(), w = b.W(), g = G(arguments), v
		v = V(g.f, g.s)
		if (g.p) {
			w.dot(v)
		}
		return f.H().TestPoint(b.tf(), v.div())
		//is a point within the fixture // very accurate
	}
	f.vs = function () {
		var f = this, b = f.B(), g = G(arguments),
				vs = b2d.m(this.H().m_vertices)
		if (g.p) {
			b2d.rot = function (vs, b) {
				return _.m(vs, function (v) {
					return v.rot(b.rot())
				})
			}
			vs = b2d.rot(vs, b)
		}
		return b2d.tA(vs)
	} //=f.rV
	f.S = f.stg = function () {
		return this.W().s
	}
	f.c= f.C = function () {var f = this, b = f.B(), w = b.W(), g = G(arguments),
			o = g.O ? g.f : {c: g.f, C: g.s, l: g.t}
		o.c = (o.c == '*') ? $r() : (o.c || 'b'); o.C = o.C || o.c
		return f.rpSp(
				f.iC() ? b.i= w.st.cir( f.cir(o) ) : b.i=w.st.pol( f.pol(o) )  )
	}
	f.cir=function(o){
		var f=this
		
		return   _.x(o||{}, {x: f.pX(), y: f.pY(), r: f.rad()})
	}
	f.dot = function (c) {
		var f = this, w = f.B().W(), v
		v = f.cen()
		if (S(c)) {
			w.dot(c, v)
		}
		else {
			w.dot(v)
		}
		return f
	}
	f.pol=function(o){return _.x(o || {}, {v: this.vs()})}
	f.set = function (o) {
		if (!O(o)) {
			return false
		}
		var f = this
		if (D(o.d)) {
			f.d(o.d)
		}
		if (D(o.bo)) {
			f.bo(o.b)
		} else if (D(o.r)) {
			f.r(o.b)
		}
		if (D(o.fr)) {
			f.fr(o.f)
		}
		if (o.s) {
			f.sen(1)
		}
		if (D(o.k)) {
			f.K(o.k)
		}
		return f
	}
	f.bS = function () {
		this.sprites = this.sprites || []
		//higher level.. can handle obs and Q-strings
		var f = this, b = f.B(), w = b.W(), g = G(arguments), o, sprite
		//if (S(g.f)) { return f.bSQ(g.f) }// not alerted
		o = cjs.iDO(g.f) ? {j: g.f, rt: g.s, x: g.t, y: g[3], o: g[4]} : g.f
		$df.bsDF(o)
		sprite = o.j.al(N(o.al, 1))
		f.sprites.push(sprite)
		w.gx.A(sprite)
		T.t(function () {
			sprite
					.XY(b.X() + o.x, b.Y() + o.y)
					.rt(b.rt() + o.rt)
		})
		return f
	}
	f.cSp = function (o) {
		var f = this, b = f.B(), w = b.W(),
				cir = w.g.h().cir(o)
		this.bS(cir)
		this.g = cir
		return f
	}
	f.rmSp = function () {
		_.e(this.sprites || [], function (s) {
			cjs.rmOb(s)
		})
		this.sprites = []
		return this
	} //= f.xSp=f.Xx=f.rmSp
	f.rpSp = function (sp) {
		this.rmSp()
		if (sp) {
			this.bS(sp)
		}
		return this
	}
}



function bods(){
	b.wP = b.wPt = function (x, y) {var b = this
		return b.GetWorldPoint(V(x, y).div()).mult()
	}
	b.St = b.S = b.stg = function () {
		return this.W().s
	}
	b.$h = function () {
		$l('b.$h')
		var h = $H()
		this.bS(h)
		h.c.apply(h, G(arguments))
		return h
	}
	b.c = b.C = function (c) {
		this.fs(function (f) {
			f.C(c)
		})
		this._col = c
		return this
	}
	b.cir = function () {
		var b = this,
				g = G(arguments), o = g.f, fD, f
		polyMorph()
		fD = b2d.fD(b2d.cH(o.r), o.x, o.y)
		fD.sen(o.s || g.n || false)
		f = b.f(fD.DBF(o.d, o.b, o.f)).K(o.k || 'cir')
		return o.c === 0 ? f : f.cSp(o)
		function polyMorph() {
			//if passed array, it assumes it is arguments for ONE cir
			if (g.A) {
				return b.cir.apply(b, g.f)
			}
			//if you pass at least two objects, it makes multiple cirs and passes back b
			if (O(g.s)) {
				g.e(function (c) {
					b.cir(c)
				});
				return b
			}
			// can pass obj
			// can pass: c C [r] [x] [y]
			// can pass: c [r] [x] [y]
			// can pass: [r] [x] [y] [c] [C]
			o = g.O ? g.f
					: S(g.s) ? {c: g.f, C: g.s, r: g[2], x: g[3], y: g[4]}
					: S(g.f) ? {c: g.f, r: g.s, x: g[2], y: g[3]}
					: {r: g.f, x: g.s, y: g[2], c: g[3], C: g[4]}
			return cirDfs(o)
		}
	}
	b.dot = function () {
		var b = this, w = b.W(), g = G(arguments)
		g.N_ ? (
				g.p ?
						T.t(function () {
							b.dot(g.f, g.s)
						}) :
						w.d(b.wP(g.f, g.s)))
				:
				w.d(g.f || 'y', g.p ? b.wC() : b)
		return b
	}
	b.pol = function () {
		var b = this, w = b.W(), g = G(arguments), o,
				newFs
		if (g.u) {
			return b
		}
		if (b2d.iB(g.f)) {
			g.f.fs(b);
			return b
		}
		_morph()
		newFs = b.sepNew(o.v, function (f) {
			f.set(o)
			f.c(o.c, o.C, o.l)
			if (o.lf) {
				f.bS(w.st.h().lf(o).lt(o.v))
			}
			if (o.rf) {
				f.bS(w.st.h().rf(o).lt(o.v))
			}
		})
		if (o.i) {
			b.bS(__h = w.gx.h().bV(o))
		}
		return newFs
		function _morph() {
			//if passed [[ color and ]] verts:
			o = S(g.f) && gpc.iP(g.s) ? {c: g.f, v: g.s} : gpc.iP(g.f) ? {v: g.f} :
					b2d.iF(g.f) ? {v: g.f.vs()} :
						// pass in  [[],[],[]]   or  ['r',[],[],[]]
							g.A && S(g.f[0]) ? {c: g.f[0], v: _.r(g.f)} : g.A ? {v: g.f} :
									g.O ? g.f : g.O_ ? {v: g} : //pass in [],[]
											g.t ? {c: g.f, v: g.r} : // pass in 'r', [], []
											{c: g.f, v: g.s}   //pass in  {c:'r', v:[[],[],[]]}
			$df.h(o)
			o.i = o.i || o.bf
		}
	}
	
	
	b.sep = function (verts, scale) {
		var body = this
		if (!O(verts)) {
			alert('o.v must be object');
			return
		}
		if (gpc.iP(verts)) {
			verts = verts.vs()
		}
		//needs array of verts.. or one vert (which is converted here to arr)
		_.e(O(verts[0][0]) ? verts : [verts], function (v) {
			b2d.sep(body, v, scale)
		})  //  'sep' each of the verts onto the body
		return this
	}
	
	b.sepNew = function (vs, fn) {
	//this proxies to b.sep.. but has two advantages
		//- it returns NEW fixtures formed in an array
		//- if u pass in a function, then it loops those fxs
		// //alt:if only one fixture added.. it is returned as a single fixture (not in array) ?
		var n = this.n(),
				b = this.sep(vs),
				numNewFs = b.n() - n,
				newFs = _.f(b.fs(), numNewFs)
		if (F(fn)) {
			_.e(newFs, fn)
		}
		return newFs
		//return newFs[1]? newFs: newFs[0]
	}
	
	
	b.__f = function (f) {
		var b = this, g = G(arguments)
		if (g.u) {
			return b.GetFixtureList()
		}
		f = b.CreateFixture(f)
		return f
	}
	b._f = function (f, c) {
		var b = this, g = G(arguments)
		// if(g.u){ return b.GetFixtureList() }
		// f = b.CreateFixture(f)
		f = b.__f(f)
		if (c) {
			f.C(c)
		}
		return f
	}
	b.f = function () {
		var b = this, g = G(arguments), o;
		if (g.u) {
			return b._f()
		}
		if (g.S_) {
			g.L--
		}
		;
		if (g._S) {
			g.L--
		}
		//PASS IN AN ARRAY OF FIXTS (AND OPTIONALLY A COLOR)
		if (g.A) {
			g.e0(function (gg) {
				b.ap('f', g.G(gg))
			})
		}//   [ [],[],fD,4,[] ]
		else if (g.SA) {
			g.e1(function (f) {//       'c',  [ [.,.],[.,.],fD ]
				if (b2d.iFD(f)) {
					b._f(f, g.f)
				}
				else {
					if (!S(_.f(f))) {
						f.unshift(g.f)
					}
					b2d.iFD(f[1]) ? b._f(f[1], f[0]) : $a(b, 'f', f)
				}
			})
		}
		//PASS IN A FIXTURE DEF (AND OPTINALLY A COLOR)
		else if (b2d.iFD(g.f)) {
			return b._f(g.f)
		}//(fD)
		else if (g.S_ && b2d.iFD(g.s)) {
			b._f(g.s, g.f)
		}//('c', fD)
		//PASS IN NUMBERS OR VERTS, TO MAKE JUST ONE FIXT
		else if (O(g.s)) {
			pol()
		}
		else if (g.L == 1 || g.L == 3) {
			cir()
		}
		else {
			rec()
		}
		function cir() {
			o = {c: g.f, r: g.s, x: g.t, y: g[3]}
			if (g.n) {
				o.s = 1
			}
			b.cir(o)
		}
		
		function rec() {
			o = {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], a: g[5]}
			if (g.n) {
				o.s = 1
			}
			b.rec(o).C(o.c)  // $a(b,'rec', g.g)
		}
		
		function pol() {
			b.pol(g.S_ ? {c: g.f, v: g.r} : {v: g})
			if (g.n) {
				b.sen(1)
			}  //if (g.n) {o.s=1}
		}
		
		return b.d(1)
	}
	b.bS = function () {
		var b = this, w = b.W(), g = G(arguments), o, i, a, sc
		//pass it a display object (which i guess implies its already loaded)
		o = cjs.iDO(g.f) ? {i: g.f, bm: g.f} :
				g.O ? g.f :
				{i: g.f, sc: g.s, x: g.t, y: g[3], r: g[4], al: g[5]}
		if (S(o.i)) {
			w.g.bm(o.i, function (bm) {
				b.bS(_.x(o, {i: bm, bm: bm}))
			})
		}
		//if not loaded, async loads and passes it back as a data object 
		// next time, then, when loaded it can bypass async
		else {
			$df.xyr(o)
			$df.sc(o)
			$df.im(o)
			//they can pass in a formed shapeer
			if (cjs.hasDim(o.bm) && !g.n) {
				o.bm.rC()
			} //regCent //can not center things that dont have dimensions! 
			// scale, position and place the bm in the ct (which is on the stage)
			o.bm.sXY(o.sc).XY(o.x, o.y).rt(o.r).al(o.al)
			this.gx = this.gx || w.gx.ct();
			this.gx.A(o.bm)
		}
		return this
	}
	b.Bm = function (iS, x, y, sX, sY, rt) {
		var b = this, w = b.W(), g = G(arguments);
		b.gx = b.gx || w.gx.ct()
		if (S(iS)) {
			this.gx.bm(iS, fn)
		}
		if (O(iS)) {
			fn(iS);
			return iS
		}
		return b
		function fn(bm) {
			bm.rC().XY(N(x, 0), N(y, 0)).sXY(N(sX, 1), N(sY, sX || 1)).rt(N(rt, 0))
		}
	}
}


ct.d =  function (c, x, y) {
	var ct = this, o, d, tw, g = G(arguments)
	//if (b2d.isGPoly(g.f)) {_.e(g.f.vs(), function (v) {ct.dot(V(v))}); return this}
	if (g.A) {
		_.e(c, function (G) {
			if (A(G)) {
				ct.dot.apply(ct, G)
			}
			else {
				ct.dot(G)
			}
		})
		return this
	}
	
	o = g.S_ ? (
			b2d.iB(g.s) ? {c: g.f, x: g.s.sX, y: g.s.sY} :
					O(g.s) ? {c: g.f, x: g.s.x, y: g.s.y} :
					{c: g.f, x: g.s, y: g.t}
	) :
			b2d.iB(g.f) ? {x: g.f.sX, y: g.f.sY} :
					g.O_ ? {x: g.f.x, y: g.f.y} :
					{x: g.f, y: g.s}
	
	
	
	o.x = N(o.x, ct.W() / 2)
	o.y = N(o.y, ct.H() / 2)
	o.c = o.c || 'y'
	d = this.h(o.x, o.y).cir(8, o.c, 'z', 2).al(.7).drag()
	tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
	d.$$(function () {tw.$()})
	return d.K('dev dot')
	
}
cirDfs = function (o) {
	o = o || {}
	//with object...
	o.al = N(o.al, 1)
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 50)
	o.b = N(o.b, .5)
	o.f = N(o.f, .5)
	o.d = N(o.d, .5)
	o.s = D(o.s) ? o.s : 0;
	return o
}
FXC = function () {
	W().C('z')
	b = w.D()
	f = b.cir({c: 'o'})
	b1 = w.D(300, 400)
	f1 = b1.pol(v1)[0]
	_.in(function () {
		f.C($r())
		f1.C($r())
	})
}
BINDSPR = function () {
	W()
	b = w.D(100, 300).cir(120)
	$.i('me', function (i) {
		w.g.A(sp = $Bm(i))
		b.bS(sp.rC())
		w.g.A(sp1 = $Bm(i))
		b.bS(sp1)
	})
}
BINDSPP = function () {
	W()
	b = w.D(100, 300).cir(120)
	Q('guy', function () {
		var i = Q.i('guy')
		w.g.A(sp = $Bm(i))
		b.bS(sp.rC())
		w.g.A(sp1 = $Bm(i))
		b.bS(sp1)
	})
}
function _pre() {

//
	b2d.p()
	i = cjs.DisplayObject.prototype
	ct = cjs.Container.prototype
	st = s = cjs.Stage.prototype
	t = cjs.Text.prototype
	h = cjs.Shape.prototype
	ct = cjs.Container.prototype
	s = cjs.Stage.prototype
	h = cjs.Shape.prototype
	ct = cjs.Container.prototype
	h = cjs.Shape.prototype // gx = cjs.Graphics.prototype
	h = cjs.Shape.prototype // gx = cjs.Graphics.prototype
	ct = cjs.Container.prototype
}
BPOL=function(){
	vs1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	]
	
	
	W()
	
	
	w.D(200,400).pol(vs1)
	w.D(800, 400).pol($pD(vs1))
	w.D(800, 400).pol('o', $pD(vs1))
	
	w.D(500, 400).pol({ vs: vs1, c:'r' })
	w.D(800, 400).pol({  vs: $pD(vs1), c:'b' })
}

function later() {
	b._gx = function (a) {
		alert('b._gx')
		this.gx = this.gx || w.gx.ct();
		if (a) {
			this.gx.A(a)
		}
		return this
	}
	f.initSp = function () {
		alert('initSp')
		this._sp = this._sp || [];
		this.SP = this.SP || [];
		this.sprites = this.sprites || []
		return this
	}
	f.spritePush = function (j) {
		alert('spritePush')
		this.sprites = this.sprites || []
		this.sprites.push(j)
		return this
	}
	b.fSp = function () {
		alert('b.fSp')
		return this.f().sprites[0]
	}
	b._bS = function (sprite, o) {
		alert('b._bS')
		var b = this, w = b.W()
		w.gx.A(sprite)
		T.t(function () {
			sprite
					.XY(b.X() + o.x, b.Y() + o.y)
					.rt(b.rt() + o.rt)
		})
	}
}


W = b2d.W = function () {
	var g = G(arguments), o
	o = g.A_ ? _.x(g.s || {}, {W: g.f[0], H: g.f[1], wW: g.f[2], wH: g.f[3]}) :
			N(g.f) && U(g.s) ? {g: g.f} :
					g.$N ? {W: g.f, H: g.s, wW: g.t, wH: g[3]} :
							g.S ? {w: g.f} : g.f || {} //W([], [{}]) //W(1000)//W(1200,600,[N],[N])//W('U')
	_w = o.w
	o.g = N(o.g) ? V(0, o.g) : O(o.g) ? V(o.g) : V(0, 10)
	o.sl = U(o.sl) ? true : o.sl
	w = new b2d.World(o.g, o.sl)
	if (o.xx !== 0) {
		z()
	}
	w.W = N(o.W, 1200);
	w.w = N(o.wW, w.W);
	w.Ww = w.W / w.w;
	w.wW = w.w / w.W;
	w.hW = w.W / 2;
	w.H = N(o.H, 600);
	w.h = N(o.wH, w.H);
	w.Hh = w.H / w.h;
	w.hH = w.h / w.H;
	w.hH = w.H / 2;
	w.mZ = w.hH > w.wW ? w.hH : w.wW;
	w.mS = w.Ww > w.Hh ? w.Ww : w.Hh;
	w.z = w.SCALE = 1
	//handling
	w.bH = [];
	w.pH = [];
	w.PH = [];
	w.eH = []  //l.P=  l.post=  function (fn) {this.PostSolve = fn; return this}
//l.b=  l.beg=  function (fn) {this.BeginContact = fn; return this}
//l.e=  l.end= function (fn) {this.EndContact = fn; return this}
//l.p=  l.pre=  function (fn) {this.PreSolve=fn;return this}
//w.listen = w.setContactListener = w.sCL = w.SetContactListener
	b2d.L = b2d.listener = b2d.contactListener = function () {
		return new b2d.Dynamics.b2ContactListener
	}
	w.SetContactListener(_.x(w.ln = new b2d.Dynamics.b2ContactListener, {
				BeginContact: function (cx) {
					_.e(w.bH, function (fn) {
						_.in(0, function () {
							fn(cx)
						})
					})
				},
				EndContact: function (cx) {
					_.e(w.eH, function (fn) {
						_.in(0, function () {
							fn(cx)
						})
					})
				},
				PreSolve: function (cx, i) {
					_.e(w.pH, function (fn) {
						fn(cx, i)
					})
				},
				PostSolve: function (cx, pam2) {
					_.e(w.PH, function (fn) {
						_.in(0, function () {
							fn(cx, pam2)
						})
					})
				}
			})
	)
	//grpx
	w.BG = w.I = $St('z', w.W, w.H, 0, 0)
	w.st = w.s = $St('X', w.W, w.H, 0, 0)//.aC(0)
	w.cv = w.canvas = w.st.canvas;
	w.$cv = w.can = $(w.canvas);
	w.cx = w.ctx = w.can.ctx('2d')
	w.bg = w.st.ct();
	w.gx = w.g = w.st.ct();
	w.fg = w.st.ct()
	w.FG = w.i = $St('X', w.W, w.H, 0, 0)
	if (o.i) {
		w.s.bm(o.i)
	}
	w.lG($r())
	if (o.aC == 1) {
		//w.i.aC(0)
		// if(g.O){; return w}
		// return g.u? w.i.aC(!w.i.aC()): g.s? w.i.aC(w):
	}
	w.walls(_w)
	keys()
	mouse()
	T.t(function () {
		if (w.mj) {
			w.mj.tg(w.mx, w.my)
		}
		w.step(1 / 60)
		if (F(o.cb)) {
			o.cb()
		}
		if (!T.iP()) {
			w.I.u();
			w.s.u();
			w.i.u()
		}
		//  w.DrawDebugData()
		w.e(function (b) {
			b.wX = b.X();
			b.wY = b.Y()
			b.sX = w.wTS(b.wX, b.wY).x
			b.sY = w.wTS(b.wX, b.wY).y
			if (O(b.gx)) {
				b.gx.XY(b.X(), b.Y()).rt(b.rt())
			}
		})
	})
	if (o.t !== 0) {
		w.t = w._t = w._t || w.S(w.hW, w.hH, 'w', [[20, 2, '-']]).r(.8) //trackee
		w.i.A(w.tSpr = $Ct().XY(w.t.X(), w.t.Y())) //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)
		T.t(function () {
			if (F(w.t.cb)) {
				w.t.cb()
			} else if (F(w.tCb)) {
				w.tCb()
			}
			w.s.x = -w.sXCap((w.t.X() - w.hW + w.hW) * w.z - w.hW)
			w.s.y = -w.sYCap((w.t.Y() - w.hH + w.hH) * w.z - w.hH)
			if (w.t == w._t) {
				w.t.XY(w.tSpr.X(), w.tSpr.Y());
				w.s.rt(w.tSpr.rt())
			}
		})
	}
	w.o = o //w.stats()
	return w
	function mouse() {
		w.mm(logMXY)
		w.md(function (o) {
			logMXY(o)
			w.q(o.x, o.y, function (f) {
				
				//if(!f.iD()){return true}
				if (f.of(w.o.m)) {
					w.mj = w.mJ(f.B(), o.x, o.y)
				}
			})
		})
		//world mouse functions are great//they demonstrates md, q, m, and ofClass //but it has a real purpose too!//anytime mousedown..
		// because that implies there was a mouse up //so there should be no current mouse joint.. smart!
		w.mu(function () {
			if (w.mj) {
				w.j(w.mj);
				w.mj = 0
			}
		})
		function logMXY(e) {
			var p = w.sToW(e.X, e.Y);
			w.mx = p.x;
			w.my = p.y
		}
	}
	
	function keys() {
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			$.K.l = 1
			$.K.L = 0
			$.K.dir = 'left'
		})
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			$.K.l = false
			$.K.l = 0;
			$.K.L = 1
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			$.K.r = 1
			$.K.dir = 'right'
			$.K.R = 0
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			$.K.r = 0;
			$.K.R = 1
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			$.K.u = 1;
			$.K.U = 0
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			$.K.u = 0;
			$.K.U = 1
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			$.K.d = 1;
			$.K.D = 0
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			$.K.d = 0;
			$.K.D = 1
		})
	}
}
/*
 ct.bm = ct.b = function () {
 var ct = this, g = G(arguments), bm,
 o = g.F_ ? {fn: g.s, sc: g.s} :
 g.N_ ? {sc: g.f, fn: g.s} :
 _.x(
 {i: g.f},
 N(g.s) ? {sc: g.s, fn: g.t} :
 {fn: g.s, sc: g.t}
 )
 o.sc = o.sc || 1
 $df.im(o)
 if (O(o.i)) {
 return ct.A($Bm(o.i))
 }//alert('ct.bm O(o.i)'); never alerted
 $.i(o.i, function (i) {
 bm = $Bm(i).a2(ct).sXY(o.sc)
 if (!g.n) {
 bm.rC()
 }
 if (g.p) {
 bm.drag()
 }
 if (o.fn) {
 o.fn(bm)
 }
 })
 return ct
 }

 */
// u might say xTHIS but not thisX? i dont know what i am talking about
/* TICKER
 paused : Indicates whether the ticker is currently paused.
 d       delta :  time since the last tick
 t       time : how much  since T  started
 r      runTime  : how much time has T been running for
 */
/*
 // returns   The average time spent in a tick in milliseconds.
 //This can vary significantly from the value provided by getMeasuredFPS because it only measures the time spent
 // within the tick execution stack.
 Example 1: With a target FPS of 20, getMeasuredFPS()
 returns 20fps, which indicates an average of 50ms between the end of one tick and the end of the next.
 However, getMeasuredTickTime() returns 15ms.
 This indicates i there may be up to 35ms of "idle" time between the end of one tick and the start of the next.

 Example 2: With a target FPS of 30, getFPS() returns 10fps,
 which indicates an average of 100ms between the end of one tick and the end of the next. However,
 getMeasuredTickTime() returns 20ms.
 This would indicate i something other than the tick is using ~80ms
 (another script, DOM rendering, etc).

 */

//w.sp=w.ct=function(x,y){var w=this;return w.hud.ct(x||w.hW,y||w.hH).drag()}
/*
 f.clrSp = function () {
 //$l('clrSp')
 this.sprites = []; //this_sp = []; this.SP = []
 return this
 }
 */