M.lC = M.lineCenter
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
ct.bm = ct.b = function () {
	var ct = this, g = G(arguments), bm,
			o = g.F_ ? {fn: g.s, sc: g.s} :
					g.N_ ? {sc: g.f, fn: g.s} :
							_.x({i: g.f}, N(g.s) ? {sc: g.s, fn: g.t} :
							{fn: g.s, sc: g.t})
	o.sc = o.sc || 1
	$df.im(o)
	if (O(o.i)) {
		return ct.A($Bm(o.i))
	}//alert('ct.bm O(o.i)'); never alerted
	$.i(o.i, function (i) {
		bm = $Bm(i[0]).a2(ct).sXY(o.sc)
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
f.initSp = function () {
	this._sp = this._sp || [];
	this.SP = this.SP || [];
	this.sprites = this.sprites || []
	return this
}
f.spritePush = function (j) {
	this.sprites = f.sprites || []
	this.sprites.push(j)
	return this
}
f._bI = function (o) {
	this.gx.A(
			o.i.sXY(o.sc).XY(o.x, o.y)
					.rt(o.r).al(o.al)
	)
	return this
}
f.bI = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), o
	this.gx = this.gx || w.g.ct()
	o = cjs.iDO(g.f) ? {i: g.f} : g.O ? g.f :
	{i: g.f || 'me', sc: g.s, x: g.t, y: g[3], r: g[4], al: g[5]}
	if (S(o.i)) {
		o.i = Q.b(o.i)
	}
	o.sc = N(o.sc, ( cjs.iH(o.i) ? 1 : .4 ));
	if (!A(o.sc)) {
		o.sc = [o.sc, o.sc]
	}
	$df.xyr(o)
	o.al = N(o.al, 1)
	if (!g.n && !cjs.iH(o.i) && !cjs.iCt(o.i)) {
		o.i.rC()
	}
	return this._bI(o)
}
f._bS = function (o) {
	var f = this, b = f.B(), w = b.W(), j
	$df.bsDF(o)
	j = o.j
	j.al(o.al)
	w.g.A(j)
	f.spritePush(j)
	b._bS(j, o)
	return this
}
f.ctSp = function (sp) {
	var f = this
	sp.XY(f.pos().x, f.pos().y).rC()
	f.bS($Ct().A(sp))
	return this
}
f.bSQ = function (j) {
	var f = this
	Q(function () {
		f.ctSp(Q.b(j))
	})
	return f
}
f.bS = function () {
	//higher level.. can handle obs and Q-strings
	var f = this, b = f.B(), w = b.W(), g = G(arguments)
	return g.S_ ? f.bSQ(g.f) : f._bS(
			cjs.iDO(g.f) ? {
				j: g.f,
				rt: g.s,
				x: g.t,
				y: g[3],
				o: g[4]
			} : g.f
	)
}
b.fSp = function () {
	return this.f().sprites[0]
}
b._bS = function (j, o) {
	var b = this
	T.t(function () {
		j.XY(b.X() + o.x,
				b.Y() + o.y).rt(b.rt() + o.rt)
	})
}
b.bS = function () {
	var b = this, w = b.W(), g = G(arguments), o, i, a, sc //pass it a display object (which i guess implies its already loaded)
	o = cjs.iDO(g.f) ? {i: g.f, bm: g.f} : g.O ? g.f : {i: g.f, sc: g.s, x: g.t, y: g[3], r: g[4], al: g[5]}
	if (S(o.i)) {
		w.g.bm(o.i, function (bm) {
			b.bS(_.x(o, {i: bm, bm: bm}))
		})
	} //if not loaded, async loads and passes it back as a data object //next time, then, when loaded it can bypass async
	else {
		$df.xyr(o)
		$df.sc(o)
		$df.im(o)
		//they can pass in a formed shapeer
		if (cjs.hasDim(o.bm) && !g.n) {
			o.bm.rC()
		}//regCent //can not center things that dont have dimensions! // scale, position and place the bm in the ct (which is on the stage)
		o.bm.sXY(o.sc).XY(o.x, o.y).rt(o.r).al(o.al)
		this._gx(o.bm)
	}
	return this
}
cjs.hasDim = function (bm) {
	return !cjs.iH(bm) && !cjs.iCt(bm)
}
b._Sp = function (sp, o) {
	this._gx(sp)
	sp.rC()
			.XY(o.x, o.y)
			.sXY(o.sX, o.sY).rt(o.r)
	return sp
}
b.Sp = function () {
	var g = G(arguments), o,
			sp
	o = $df.xyr({
		sp: g.f,
		x: g.s,
		y: g.t,
		sX: g[3],
		sY: g[4],
		r: g[5]
	})
	o.sX = N(o.sX, 1);
	o.sY = N(o.sY, o.sX)
	o.sp = o.sp || Mummy
	sp = $Sp(o.sp)
	return b._Sp(sp, o)
}
b.sp = function () {
	var b = this, g = G(arguments),
			ch
	if (b.gx && b.gx.children) {
		ch = g.p ? b.gx.children : g.n ? b.gx.children[0] : _.l(b.gx.children)
		if (g.u) {
			return ch
		}
		if (g.F_) {
			_.e(ch, g.f);
			return this
		}
	}
}
b.Bm = function (iS, x, y, sX, sY, rt) {
	var b = this, w = b.W(), g = G(arguments);
	b.gx = b.gx || w.g.ct()
	if (S(iS)) {
		this.gx.bm(iS, fn)
	}
	if (O(iS)) {
		fn(iS);
		return iS
	}
	return b
	function fn(bm) {
		bm.rC()
				.XY(N(x, 0), N(y, 0))
				.sXY(N(sX, 1), N(sY, sX || 1))
				.rt(N(rt, 0))
	}
}
f.clrSp = function () {
	this.sprites = []
	this_sp = []
	this.SP = []
	return this
}
f.rmSp = function () {
	_.e(this.initSp().sprites, function (s) {
		cjs.rmOb(s)
	})
	this.clrSp()
	return this
} //= f.xSp=f.Xx=f.rmSp
w._preKill = function (b) {
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
	f.rmSp()
}
w._D = function (o) {
	return this.D(o.x, o.y, o.c, o.w, o.h)
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
b2d.m = function (vs) {
	return _.m(vs, b2d.mult)
}
b2d.tA = function (vs) {
	return _.m(vs, function (v) {
		return v.tA(v)
	})
}
f.C = function () {
	var f = this,
			b = f.B(), w = b.W(), g = G(arguments), o, h
	o = g.O ? g.f : {c: g.f, C: g.s, l: g[2]}
	o.c = (o.c == '*') ? $r() : (o.c || 'b')
	o.C = o.C || o.c
	f.rmSp()
	h = f.iC() ?
		// if circle?
			w.s.h().cir(f.pX(), f.pY(), f.rad(), o.c, o.C, o.l) :
		// if poly
			w.s.h().pol(f.vs(), o.c, o.C, o.l)
	f.bS(h)
	b.i = h
	return f
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
w.cen = w.cent = function () {
	var w = this, g = G(arguments),
			v = V(w.s.W() / 2, w.s.H() / 2)
	if (g.p) {
		w.dot(v)
	}
	return v
}
M.lC = M.lineCenter
b.wP = b.wPt = function (x, y) {
	var b = this
	return b.GetWorldPoint(V(x, y).div()).mult()
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
	if (g.u) {
		return b.GetFixtureList()
	}
	f = b.CreateFixture(f)
	if (c) {
		f.C(c)
	}
	return f
}
b.cir = function () {
	var b = this, g = G(arguments), o = g.f, fd, h, f
	//if passed array, it assumes it is arguments for ONE cir
	if (g.A) {
		return b.cir.apply(b, g.f)
	}
	//if you pass at least two objects, it makes multiple cirs and passes back b
	if (O(g.s)) {
		g.e(function (c) {
			b.cir(c)
		})
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
	o.al = N(o.al, 1)
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 40)
	o.b = o.rs = N(o.b, .5)
	o.f = N(o.f, .5)
	o.d = N(o.d, .5)
	o.s = D(o.s) ? o.s : 0;
	if (g.n) {
		o.s = 1
	}
	fd = new b2d.FixtureDef
	fd.d(o.d).r(o.b).fr(o.f)
	fd.shape = new b2d.CircleShape(o.r / 30)
	fd.shape.SetLocalPosition(V(o.x, o.y, '-'))
	fd.isSensor = o.s ? true : g.n ? true : false
	f = b.f(fd)
	f.K(o.k)
	if (o.c != 0) {
		f.bS(
				f.g = w.g.h().cir(o)
		)
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
w.D = function () {
	var w = this, g = G(arguments, 'k'), o, b
	if (g.u) {
		return w.D(w.hW, w.hH)
	}
	o = g.O ? g.f : g.O_ ? {p: g.f, f: g.r} :
	{p: [g.f, g.s], f: _.r(g, 2)}
	b = w.cB(b2d.BD(o.p))
	b.K(g.k)
	$a(b, 'f', g.G(o.f))
	return b
} //w.sp=w.ct=function(x,y){var w=this;return w.hud.ct(x||w.hW,y||w.hH).drag()}
b.sep = function (verts, scale) {
	var body = this
	if (!O(verts)) {
		alert('o.v must be object');
		return
	}
	if (b2d.iGP(verts)) {
		verts = verts.vs()
	}
	//needs array of verts.. or one vert (which is converted here to arr)
	_.e(O(verts[0][0]) ? verts : [verts], function (v) {
		b2d.sep(body, v, scale)
	})  //  'sep' each of the verts onto the body
	return this
}
b.pol = function () {
	var b = this, w = b.W(), g = G(arguments), o,
			n = b.n(), fs, h, numFixtsAdded, newFixts;
	if (g.u) {
		return b
	}
	//if passed verts:
	if (b2d.iGP(g.f) && U(g.s)) {
		return b.pol({v: g.f})
	}
	//if passed color and verts:
	if (S(g.f) && b2d.iGP(g.s) && U(g.t)) {
		return b.pol({c: g.f, v: g.s})
	}
	if (b2d.iB(g.f)) {
		g.f.fs(b);
		return b
	}
	if (b2d.iF(g.f)) {
		g.f = g.f.vs()
	}
	o = g.A ? (
		// pass in ['r',[],[],[]]
			S(g.f[0]) ? {c: g.f[0], v: _.r(g.f)} :
				// pass in [[],[],[]]
			{v: g.f}
	) :
			g.O ? g.f :
					!g.S_ ? {v: g} : //pass in [],[]
							_.x({c: g.f},
									g.t ? {v: g.r} : // pass in 'r', [], []
									{v: g.s}   //pass in  {c:'r', v:[[],[],[]]}
							)
	$df.h(o)
	b.sep(o.v)
	numFixtsAdded = b.n() - n
	newFixts = _.f(b.fs(), numFixtsAdded)
	_.e(newFixts, function dressFixture(f) {
		f.d(o.d).r(o.b).fr(o.f)
		if (o.s) {
			f.m_isSensor = o.s ? true : false;
			f.sen(1)
		}
		f.K(o.k)
		f.C(o.c, o.C, o.l)
		if (o.lf) {
			f.bS(w.s.h().lf(o).lt(o.v))
		}
		if (o.rf) {
			f.bS(w.s.h().rf(o).lt(o.v))
		}
	})
	o.i = o.i || o.bf
	if (o.i) {
		h = w.g.h();
		h.bV(o);
		b.bS(h)
	}
	return newFixts.length > 1 ? newFixts : newFixts[0]
}
//from create
ct.d = ct.dot = function (c, x, y) {
	var ct = this, o, d, tw, g = G(arguments)
	if (b2d.isGPoly(g.f)) {
		_.e(g.f.vs(), function (v) {
			ct.dot(V(v))
		})
		return this
	}
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
	d.$$(function () {
		tw.$()
	})
	return d.K('dev dot')
}
i.dot = function () {
	var i = this
	i.getStage().dot(i.X(), i.Y())
	return i
}

function more() {
	function alertIfUsed() {
		function createStuff() {
			$El = cjs.el = function (a) {
				a = $(a)[0]
				return new cjs.DOMElement(a)
			}
			ELM = function () {
				z()
				d = $.d('r', 400, 400).A($.ip()).drag()
				el = $El(d)
				s = $St('y').t()
				s.A(el)
				// tw(el, [{x:300,y:300},2000])
				// tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
			}
		}
		
		i.bB = i.bindBody = function (b) {
			alert('i.bindBody i.bB')
			var i = this
			cjs.t(function () {
				b.X(i.X())
				b.Y(i.Y())
				b.rt(i.rt())
			})
			return i
		}
		i.tf = function () {
			alert('i.tf')
			var i = this, g = G(arguments)
			if (g.u) {
				return [
					i.x,
					i.y,
					i.scaleX,
					i.scaleY,
					i.rotation,
					i.skewX,
					i.skewY,
					i.regX,
					i.regY
				]
			}
			if (O(g[0]) && F(g[0].getTransform)) {
				g[0] = g[0].getTransform()
			}
			i.setTransform.apply(i, A(g[0]) ? g[0] : g)
			return i
		}
		i.getTransform = function () {
			alert('i.getTransform')
			var ob = this
			return [
				ob.x, ob.y, ob.scaleX, ob.scaleY,
				ob.rotation, ob.skewX, ob.skewY,
				ob.regX, ob.regY
			]
		}
		i.cu = i.bM = function (cu) {
			alert('i.cu i.bM')
			var ob = this,
					st = ob.st()
			CUob = {
				d: 'default', n: 'none', h: 'help',
				p: 'pointer', ch: 'crosshair',
				P: 'progress', w: 'wait',
				t: 'text',
				m: 'move', g: 'grab', c: 'copy',
				cm: 'context-menu',
				C: 'cell',
				N: 'not-allowed', v: 'not-allowed',
				z: 'zoom-in'
			}
			if (U(cu)) {
				st.MM(function () {
					ob.x = st.m().x;
					ob.y = st.m().y
				})
			}
			else if (S(cu)) {
				ob.cursor = CUob[cu] ? CUob[cu] : cu
			}
			return ob
		}
		cjs.rgb = function (r, g, b, a) {
			alert('cjs.rgb')
			var str
			a = N(a) ? a : 1
			str = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
			return str
		}
		drawHalf = function (c, i) {
			alert('drawHalf')
			c.dI(i, -i.width / 2, -i.h / 2)
		}
		drag = drg = function (element) {
			alert('drag')
			var q = $b(qq(element).q)
					.css({position: 'absolute'})
					.on('mousedown', function (e) {
						var offset = $(this).offset(),
								deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top
						$('html').on('mousemove', function (e) {
							q.css({left: e.pageX - deltaX, top: e.pageY - deltaY})
						})
								.on('mouseup', function () {
									$(this).off()
								})
					})
			touchDrg(element)
			return qq(element)
		}
		$.fn.hideOnKeyDown = function (a) {
			alert('$.fn.hideOnKeyDown ')
			var that = this
			$('body').keydown(function (ev) {
				e = ev
				$l(e.which)
				if (e.which == 40) {
					that.hide()
				}
				if (e.which == 38) {
					that.show()
				}
			})
		}
		$.fn.T = function () {
			alert('$.fn.T')
			var d = this, g = G(arguments)
			d.E()
			g.e(function (str) {
				d.A($.h3(str))
			})
			return d
		}
		$.joystick = function () {
			alert('joystick')
			$('#left').on('mousedown mouseover touchenter', function (e) {
				$.K.left = true;
				e.preventDefault()
			})
			$('#left').on('mouseup mouseout touchleave', function () {
				$.K.left = false
			})
			$('#jump').on('mousedown mouseover touchenter', function () {
				$.K.up = true
			})
			$('#jump').on('mouseup mouseout touchleave', function () {
				$.K.up = false
			})
			$('#right').on('mousedown mouseover touchenter', function () {
				$.K.right = true
			})
			$('#right').on('mouseup mouseout touchleave', function () {
				$.K.right = false
			})
		}
		$.fn.toR = $.fn.moveRight = function (num) {
			alert('toL')
			num = num || 20
			if (this.left() == 'auto') {
				this.left(0)
			}
			this.left(parseInt(this.left()) + num)
			return this
		}
		$.fn.toL = $.fn.moveLeft = function (num) {
			alert('toL')
			num = num || 20
			if (this.left() == 'auto') {
				this.left(0)
			}
			this.left(parseInt(this.left()) - num)
			return this
		}
		$.fn.toU = $.fn.moveDown = function (num) {
			alert('toL')
			num = num || 20
			if (this.top() == 'auto') {
				this.top(0)
			}
			this.top(this.top() - num)
			return this
		}
		$.fn.toD = $.fn.moveDown = function (num) {
			alert('toL')
			num = num || 20
			if (this.top() == 'auto') {
				this.top(0)
			}
			this.top(this.top() + num)
			return this
		}
	}
	
	i.warpX = function (lo, hi, cush) {
		alert('i.warpX')
		var i = this,
				wrp = M.wrp(lo, hi, cush)
		T.t(function () {
			i.x = wrp(i.x)
		})
		return i
	}
	i.warpY = function (lo, hi, cush) {
		alert('i.warpY')
		var i = this, wrp = M.wrp(lo, hi, cush)
		T.t(function () {
			i.y = wrp(i.y)
		})
		return i
	}
	i.warp = function (n) {
		var i = this, s = i.S(), n = n || 0
		i.warpX(0, s.W(), n)
		i.warpY(0, s.H(), n)
		return i
	}
}
i.tickX = function (fn) {
	var i = this
	T.t(function () {
		i.X(fn())
	})
	return i
}
i.tickY = function (fn) {
	var i = this
	T.t(function () {
		i.Y(fn())
	})
	return i
}
////
f.S = f.stg = function () {
	return this.W().s
}
b.St = b.S = b.stg = function () {
	return this.W().s
}
b.c = b.C = function (c) {
	this.fs(function (f) {
		f.C(c)
	})
	this._col = c
	return this
}
b._gx = function (a) {
	this.gx = this.gx || w.g.ct();
	if (a) {
		this.gx.A(a)
	}
	return this
}
b.$h = function () {
	var h = $H()
	this.bS(h)
	h.c.apply(h, G(arguments))
	return h
}
b.rec = function (c, W, H, x, y, a) {
	var b = this, w = b.W(), g = G(arguments, 'k'),
			o, fD, p, f
	if (g.OO_) {
		g.e(function (g) {
			b.rec(g)
		});
		return b
	}
	if (g.A) {
		return $a(b, 'rec', g)
	}
	if (g.O) {
		o = g.f
	}
	else {
		if (N(g.f)) {
			g.ush('z')
		}
		o = {c: g[0], w: g[1], h: g[2], x: g[3], y: g[4], a: g[5]}
	}
	$df.oDef(o)
	o.k = o.k || g.k
	fD = b2d.fD(b2d.pH().box(o))
	if (o.s || g.n) {
		fD.isSensor = true;
		o.al = N(o.al, 0.8)
	}
	fD.d(o.d || .5)
	f = b.f(fD)
	f.K(o)
	if (o.c !== 0) {
		// f.g=w.g.h().rec(o)
		if (g.p) {
			f.g = w.g.h().rec(o)
		}//  f.g= w.g.h().rec(o) //this for but: (does something important)
		else {
			f.g = w.g.rec(o)//(o.w, o.h, o.c, o.C, o.l)
			f.bS(f.g)
		}  //,  o.a, o.x, o.y, o.al  //<-this for bike (does rotation)
		// f.bS(f.g)
	}
	return f
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
f.tP = f.hit = f.testPoint = f.test = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), v
	v = V(g.f, g.s)
	if (g.p) {
		w.dot(v)
	}
	return f.H().TestPoint(b.tf(), v.div())
	//is a point within the fixture // very accurate
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
w.killD = w.xD = function () {
	w.e(function (b) {
		if (b.iD()) {
			b.kill()
		}
	})
}
w.pol = function () {
	var w = this, g = G(arguments), b, o
	if (g.A) {
		return $a(w, 'pol', g.f)
	}
	b2d.mini()
	if (g.OO) {
		g.e(function (g) {
			w.pol(g)
		})
		return w
	}
	
	
	
	// if(g.N_ && N(g.s) && O(g.t) &&U(g[3])){return w.D(g.f,g.s).pol(g.t)}
	else if (g.N_ && N(g.s) && O(g.t)) {
		b = w.D(g.f, g.s)
		// if(iB(g[2])){ g[2]= g[2].wV()} //M.p(g[2]).vs()
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
w.cir = w.ball = w.ba = w.circ = function (x, y, r, c) {
	var w = this, g = G(arguments), b, o
	o = g.O ? g.f :
			N(g.s) ?
			{
				x: g.f, y: g.s,
				r: g.t,
				c: g[3]
			}
					:
			{r: g.f}
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
w.polyCirc = function (x, y, r, sides) {
	var w = this,
			b = w.D(x, y)
	b.pol({v: b2d.polyCirc(r, sides)})
	return b
}
w.sH = function (h) {
	var w = this
	if (U(h)) {
		return w.H * w.s.scaleY
	}
	w.s.scaleY = h / w.H
	return w
}
w.sTW = w.sToW = function (x, y) {
	var w = this, //works
			x = x / w.z - w.s.x / w.z,
			y = y / w.z - w.s.y / w.z
	//w.dot(x,y,'*') // cool
	return {x: x, y: y}
}
w.wTS = w.wToS = function (x, y) {
	var w = this,
			x = (x + w.s.x / w.z) * w.z,
			y = (y + w.s.y / w.z) * w.z
	return {x: x, y: y}
}
w.$h = function () {
	return this.i.h.apply(this.i, arguments)
} // h = $h().a2(s).rXY(100, 300).XY(100,300).drag()
//  h.rec( 'r','b',600, 200,  600, 200)
// h.rec( 'g',100, 100,  100, 20)
w.C = function (c) {
	var w = this
	w.bg.h().c(c || $r()).dr(0, 0, w.w, w.h)
	return w
}
w.lG = function (c, c2) {
	var w = this, o
	o = {c1: c2 || 'z', c2: c || 'r', x1: 0, y1: 0, x2: 0, y2: 0}
	_.x(o, R() ? (R() ? {y2: w.h} : {x2: w.w}) :
			R() ? (R() ? {x1: w.w, y1: w.h} : {x2: w.w, y2: w.h}) :
					R() ? {x1: w.w, y2: w.h} : {y1: w.h, x1: w.w})
	w.bg.h().lf(o).dr(0, 0, w.w, w.h)
	w.bg.h(0, 0, $r()).dr(0, 0, w.w, w.h).al(.2)
	return w
}
w.warp = function () {
	var w = this
	w.eEv(function (b) {
		if (b.X() < 10) {
			b.X(w.W - 10)
		}
		if (b.X() > w.W - 10) {
			b.X(10)
		}
		if (b.Y() < 10) {
			b.Y(w.H - 10)
		}
		if (b.Y() > w.H - 10) {
			b.Y(10)
		}
	})
	return w
}
w.UI = function () {
	return $(this.i.canvas)
}
w._ = function (fn) {
	Q(function () {
		fn(w)
	})
}
w.tE = function (fn) {
	var w = this
	T.t(function () {
		w.e(fn)
	})
	return this
} // TICKER !!!!!
w.bmR = w.bR = w.bfR = function () {
	var w = this, g = G(arguments), b, h, o
	o = S(g.t) ? {x: g.f, y: g.s, i: g.t, w: g[3], h: g[4], c: g[5]} :
	{x: g.f, y: g.s, w: g.t, h: g[3], c: g[4]}
	o.i = o.i || 'sun'
	o.c = o.c || 'y' // can be removed
	b = w.D(o.x, o.y, o.c, o.w, o.h)
	h = w.g.h().al(.5)
	if (o.c) {
		h.c(o.c)
	}
	h.bf(o.i)
	h.rec(o.w, o.h)
	b.bS(h)
	return b
}
w.xW = function () {//used in MIRROR
	this.e('wall', function (b) {
		b.kill()
	})
	return this
}
dev()
edge()
wall()
anim()
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
function dev() {
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
	w.l = w.dl = function () {
		var w = this, g = G(arguments), o, i
		o = S(g[0]) ?
		{c: g[0], x1: g[1], y1: g[2], x2: g[3], y2: g[4]}
				:
		{x1: g[0], y1: g[1], x2: g[2], y2: g[3]}
		i = g.p ? w.fg : g.n ? w.bg : g.d ? w.g : w.i
		o.c = o.c || (g.p ? 'p' : g.n ? 'r' : g.d ? 'd' : 'b')
		return i.h()
				.c(10, o.c)
				.mt(o.x1, o.y1)
				.lt(o.x2, o.y2).K('dev line')
	}
	w.dr = function (c, x, y, W, h) {
		var w = this, g = G(arguments), o
		o = g.S_ ? {c: g[0], x: g[1], y: g[2], w: g[3], h: g[4]}
				: {x: g[0], y: g[1], w: g[2], h: g[3]}
		_.x(o, g.p ? {g: w.fg, c: o.c || 'p'} :
				g.n ? {g: w.bg, c: o.c || 'r'} :
				{g: w.hud, c: o.c || 'b'})
		o.g.h().rec(o)
	}
	//dev
	w.dbCross = function (x, y) {
		var w = this, c = w.cen()
		x = N(x, c.x)
		y = N(y, c.y)
		w.dr('t', -10 + x, -140 + y, 20, 300, '-')
		w.dr('t', -150 + x, -10 + y, 300, 20, '-')
		w.dot('r', x, y)
		return w
	}
	w.stats = function (n) {
		var w = this
		_d = $.d(400, 600, w.W, 0, '+').A($.h1('stats'))
		w.mdq(function (fx) {
			_f = _d._fix = fx;
			_b = _f.B()
		})
		if (n == 0) {
			z(upd)
		}
		else {
			_.ev(N(n, .2), upd)
		}
		return w
		function upd() {
			var f, b;
			if (_d._fix) {
				f = _d._fix
				b = f.B()
				_d.T(
						'ty: ' + (b.iD() ? 'dyn' : 'stat'),
						'x: ' + b.X(),
						'y: ' + b.Y(),
						'fK: ' + f.K(), 'bK: ' + b.K(),
						'sen: ' + f.sen(),
						'd: ' + f.d(),
						'fr: ' + f.fr(),
						'r: ' + f.r(),
						'bMass:' + parseInt(f.B().mass()),
						'bNum:' + f.B().n()
				)
			}
		}
	}
	w.devGrid = function () {
		var w = this
		_.t(12, function (i) {
			w.l(i * 200, 0, i * 200, w.h)
			w.l(i * 200, 0, i * 200, w.h, '-')
			w.l(0, i * 200, w.w, i * 200)
			w.l(0, i * 200, w.w, i * 200, '-')
		})
		return w
	}
	w.flash = function () {
		var w = this, s = w.s
		s.flash.apply(s, arguments)
		return w
	}
	//write
	w.pop = function (t) {
		var w = this
		t = this.i.T(t || 'no text', 80, 'o', w.hW, 200)
		t.tw([{a: .5, sxy: .5}, 4000])
		_.in(4, function () {
			t.rm()
		})
		return this
	}
	w.pen = function (t, f, c) {
		var g = G(arguments), o
		if (this._T) {
			this._T.rm();
			this._T = null
		}
		o = {y: 100}
		o.x = g.n ? 200 : g.p ? this.W - 200 : this.hW
		this._T = this.i.T(t, f, c)
		this._T.XY(o.x, o.y)
		return this._T
	}
	w.chalk = function () {
		var w = this, g = G(arguments)
		w.i.chalk.apply(w.i, g)
		return w
	}
	w.show = function (fn) {
		var w = this, g = G(arguments)
		_.ev(.2, function () {
			w.pen(S(fn) ? window[fn] : fn())
		})
		return w
	}
}
function wall() {
	w.isWall = function (b) {
		var w = this;
		return b == w.right || b == w.left || b == w.roof || b == w.floor
	}
	w.clr = function () {
		var w = this
		w.e(function (b) {
			if (!w.isWall(b)) {
				b.kill()
			}
		})
		return w
	} //=w.wXx
	w._walls = function (o) {
		var w = this
		if (o.w == '*') {
			sides();
			verSides()
		}
		if (o.w == '@') {
			w.warp();
			return w
		}
		if (o.w == '_') {
			bot()
		}
		if (o.w == '~') {
			top()
		}
		if (o.w == '[') {
			left()
		}
		if (o.w == ']') {
			right()
		}
		if (o.w == 'U') {
			sides();
			bot()
		}
		if (o.w == 'A') {
			sides();
			top()
		}
		if (o.w == 'C') {
			verSides();
			left()
		}
		if (o.w == 'L') {
			left();
			bot()
		}
		if (o.w == '=') {
			verSides()
		}
		if (o.w == '|') {
			sides()
		}
		if (o.w == '->') {
			verSides();
			left();
			right1()
		}
		if (o.w == '<-') {
			verSides();
			left1();
			right()
		}
		if (o.w == '<->') {
			verSides();
			left1();
			right1()
		}
		if (o.w == 'r2') {
			verSides();
			left();
			right2()
		}
		if (o.w == 'l2') {
			verSides();
			left2();
			right()
		}
		function sides() {
			right();
			left()
		}
		
		function verSides() {
			top();
			bot()
		}
		
		function left() {
			w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h).K('wall side left');
			w.l_.SetBullet(true)
		}
		
		function right() {
			w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h).K('wall side right');
			w.r_.SetBullet(true)
		}
		
		function right2() {
			w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
		}
		
		function right1() {
			w.r1_ = w.right1 = w.S(w.w, 100, o.c, o.l * 2, 200);
			w.r2_ = w.right2 = w.S(w.w, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
		}
		
		function left2() {
			w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
		}
		
		function left1() {
			w.l1_ = w.left1 = w.S(0, 100, o.c, o.l * 2, 200);
			w.l2_ = w.left2 = w.S(0, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
		}
		
		function top() {
			w.t_ = w.roof = w.S(w.w / 2, 0, 'o', w.w, o.l * 2).K('wall roof');
			w.t_.SetBullet(true)
		}
		
		function bot() {
			w.b_ = w.floor = w.S(w.w / 2, w.h, o.c, w.w, o.l * 2).K('wall floor');
			w.b_.SetBullet(true)
		}
	}
	w.walls = function () {
		var w = this, g = G(arguments), o
		if (g.f === 0) {
			return
		}
		w._walls(wallOp(g))
		function wallOp(g) {
			var o = g.A ? {w: g.f[0], c: g.f[1]} : {w: g.f, c: g.s}
			o.c = o.c || 'o';
			o.w = o.w || '*';
			o.l = 40
			return o
		}
	}
}
function anim() {
	w.ps = tw.pos
	w.iGP = tw.ignore
	w.th = w.thrust = function (c, x, y, r) {
		return this.D(N(x, 600), N(y, 500), c || 'b', N(r, 40)).cn('thrust')
	}
	w.pack = w.PackThruster = function (ani) {
		var th = w.th(600, 500, 'b', 100).C("X").r(1).fR()
		th.Sp(Pack, 0, 0, .8)
		return th.p(ani || 'f1')
	}
	b.p = b.play = function (a, b, c, d) {
		if (O(this.sp())) {
			this.sp().p(a, b, c, d)
		}
		return this
	}
	b.s = b.stop = function (a, b, c, d) {
		if (O(this.sp())) {
			this.sp().s(a, b, c, d)
		}
		return this
	}
	//alert
	b.dr = function (dr) {
		alert('b.dr')
		if (U(dr)) {
			return this.direction
		}
		this.direction = dr;
		return this
	}
	i.dr = function (dr) {
		alert('i.dr')
		if (U(dr)) {
			return this.direction
		}
		this.direction = dr;
		return this
	}
	i.nm = function (dr) {
		alret('i.nm')
		if (U(dr)) {
			return this.name
		}
		this.name = dr;
		return this
	}
// Hit testing the screen width, otherwise our sprite would disappear //
// We've reached the right side of our screen
// We need to walk left now to go back to our initial position
//sS.addFlipped(true, false, false)// walk_h has been generated by addFlippedFrames and// contained the right facing animations
//T.f(40)
	ct.reset = function () {
		alert('ct.reset')
		this.St().removeAllChildren()
		T.removeAllListeners()
	}
//sprite.shadow = new createjs.Shadow("#454", 10, 15, 14)
//spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"
//sprite always assumed to start facing right (and flipping it horizontqlly is the left) - so i must draw facing right
}
function edge() {
	w.edgAr = function () {
		var w = this,
				g = G(arguments),
				X = 0,
				Y = 0,
				x = w.D(400, 400, 'z', [[50, 50, '-']])//.den(10)
		_.e(g, function (e) {
			e = w.edgD(e[0], e[1], e[2], e[3])
			w.wed(e, x, V(g[0][0], g[0][1]))
		})
		return x
	}
	w.edgD = function (x1, y1, x2, y2) {
		var w = this,
				l = w.l(x1, y1, x2, y2),
				e = w.D(0, 0, b2d.edg(x1, y1, x2, y2)).d(1)
		e.bS(l) //bS2
		return e
	}
	w.edgs = function () {
		var w = this, g = G(arguments), X = 0, Y = 0, x = w.D(X, Y, 'z', [[100, 100, 400, 400, '-']]), x2 = w.D(2000, 1200, 'z', [[400, 400, '-']])
		if (A(g[0])) {
			//  b = w.D(g[0][0],g[0][1], 'w',20,  g[0][0],g[0][1] )
			//  w.weld(x,b)
			// X=g[0][0]
			// Y=g[0][1]
		}
		_.e(g, function (e) {
			if (A(e)) {
				e = w.edgD.apply(w, e)
			}
			w.wed(e, x)
		})//  w.weld(x2  , x)
		w.dot(300, 300)
		return x2
	}
	w.edgsD = function (ar) {
		var w = this
		ar = ar || [V(), V(100, 100)]
		i = V(ar.shift())
		i2 = V(ar.shift())
		w.edg(i.x, i.y, i2.x, i2.y)
		_.e(ar, function (v) {
			i = i2
			i2 = V(v)
			w.edg(i.x, i.y, i2.x, i2.y)
		})
	}
	w.edg = function (x1, y1, x2, y2) {
		var w = this
		// you would always want a single stat?
		w.l(x1, y1, x2, y2, '-')
		return w.S(0, 0, b2d.edg(x1, y1, x2, y2))
	}
	w.edgs = function (ar) {
		var w = this, e
		ar = ar || []
		i = V(ar.shift())
		i2 = V(ar.shift())
		e = w.edg(i.x, i.y, i2.x, i2.y)
		_.e(ar, function (v) {
			i = i2
			i2 = V(v)
			e.glu(w.edg(i.x, i.y, i2.x, i2.y))
		})
	}
}
function rarelyUsed() {
	w.dance = function () {
		var w = this
		w.e(function (b) {
			if (b.iD()) {
				b.thr()
			}
		})//w.eD
		return w
	}
	w.txC = function () {
		var w = this
		_.ev(2, function () {
			w.e(function (b) {
				b.fs(function (f) {
					f.C($r())
				})
			})
		})
	}
	w.boxes = function () {
		var w = this, g = G(arguments)
		_.e(g, function (g) {
			w.box.apply(w, g)
		})
		return w
	}
	w.brcks = w.boxesStat = function () {
		var w = this, g = G(arguments)
		_.e(g, function (g) {
			w.brick.apply(w, g)
		})
		return w
	}
	w.ten = w.addTenBalls = function (n) {
		var w = this
		_.t(n || 10, function (i) {
			w.ball(100 + (i * 80), 200)
		})
		return w
	}
	w.hun = w.addHundBalls = function (n) {
		var w = this
		_.t(n || 100, function (i) {
			w.ball(100 + (i * 8), 50, 10)
		})
		return w
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
	}))
	//grpx
	w.I = $St('z', w.W, w.H, 0, 0)
	w.s = $St('X', w.W, w.H, 0, 0)//.aC(0)
	w.canvas = w.s.canvas;
	w.can = $(w.canvas);
	w.ctx = w.can.ctx('2d')
	w.bg = w.s.ct();
	w.g = w.s.ct();
	w.fg = w.s.ct()
	w.i = $St('X', w.W, w.H, 0, 0)
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
}
$W = function () {
	W()
	w.y()
	w.p()
}
w.ramps = function () {
	var w = this
	w.ramp(
			[400, 350, 200, 300, 100],
			[500, 350, 300, 300, 60],
			[600, 350, 200, 300, 100],
			[700, 350, 300, 300, 60],
			[800, 350, 200, 300, 100],
			[1000, 350, 300, 300, 60],
			[1030, 350, 200, 300, 100],
			[1200, 350, 300, 300, 60])
	return w
}
w.bricks = function () {
	var w = this, g = G(arguments)
	_.e(g, function (g) {
		w.S.apply(w, g)
	})
	return w
}
w.grid = function (grid, x, y, len, spacing) {
	var w = this, b
	var gridDrawer = function (x, y, len, spacing) {
				b = w.D(x, y)
				len = N(len, 30);
				spacing = N(spacing, 20)
				return function (x, y) {
					b.rec(len, len, x * spacing, y * spacing).C('r').d(1).fr(0.5).r(.2)
					return b
				}
			},
			drawWall = gridDrawer(x, y, len, spacing)
	_.t(grid.length, function (row) {
		_.t(grid[0].length, function (c) {
			if (grid[c][row]) {
				drawWall(row, c)
			}
		})
	})
	return b.K('grid')
}
w.rR = w.randRects = function (ob) {
	var w = this, g = G(arguments),
			o = g.O ? g.f : {y: g.f, z: g.s}
	o.y = N(o.y, 0)
	o.z = N(o.z, 1)
	_.t(20,
			function (i) {
				w.S(R(1100, 20), R(150, 40 + o.y), $r(),
						R(40, 15) * o.z, R(40, 15) * o.z).K('randomRect rR')
			})
	return w
}
w.plat = function me(x, y, W, H) {
	var w = this, g = G(arguments)
	if (A(g[0])) {
		_.e(g, function (g) {
			me.apply(w, g)
		})
		return w
	}
	x = _.tN(x, 60)
	y = _.tN(y, x)
	W = _.tN(W, 30)
	H = _.tN(H, W)
	return w.S(x, y, 's', W, H)
			.r(0.3)
			.fr(2)
			.K('plat')
}
w.clod = w.clouds = function (lX, y) {
	var w = this
	lX = N(lX, 100)
	y = N(y, 75)
	_.t(100, function () {
		w.S(R(400) + lX, y, $r(), R(30))
	})
	return w
}
w.rub = w.rubber = function (x, y, len) {
	var w = this, rub
	len = N(len, 200)
	x += len / 2
	return w.S(x, y).rec({
		w: len, h: 20, c: 'r', s: 1
	}).fr(.3).r(.7)
}
w.grass = function (x, y, len) {
	var w = this
	len = N(len, 200)
	x += len / 2
	return w.S(x, y, 'g', len, 20).fr(.3).r(.3)
}
w.ice = function (x, y, len) {
	var w = this
	len = N(len, 200)
	x += len / 2
	return w.S(x, y, 'w', len, 20).fr(0).r(0)
}
w.ramp = function me(x, y, W, H, a) {
	var w = this, g = G(arguments)
	if (A(g[0])) {
		_.e(g, function (g) {
			me.apply(w, g)
		})
		return w
	}
	o = O(g[0]) ? g[0] : {x: g[0], y: g[1], w: g[2], h: g[3], a: g[4]}
	o.x = N(o.x, 300)
	o.y = N(o.y, 300)
	o.w = N(o.w, 100)
	o.h = N(o.h, 100)
	o.a = N(o.h, 10)
	o.c = o.c || 'y'
	return w.S(o.x, o.y, o.c, o.w, o.h).rot(a).DFB(1, 0, 0)
}
w.goal = function (x, y) {
	w.S(x - 20, y - 15, 'y', 10, 40)
	w.S(x, y, 'y', 40, 10)
	w.S(x + 20, y - 15, 'y', 10, 40)
}
w.buck = w.sensorBucket = function (x, y, k) {
	var w = this, sens
	x = N(x, 320)
	y = N(y, 245)
	k = k || 'sensorBucket buck'
	w.S(x - 150, y - 15, 'r', 20, 200)
	w.S(x + 150, y - 15, 'r', 20, 200)
	w.S(x - 200, y - 120, 'r', 320, 20, 200, 200)
	return w.S(x, y, 'd', [[280, 170, '-']]).K(k)
}
w.coin = function (x, y) {
	var w = this, c
	x = _.tN(x, R(600))
	y = _.tN(y, R(300))
	c = w.D(x, y, 'y', 20).K('coin').bo(0).den(0).lD(0)
	c.I(R(15, -5), R(15, -5))
	c.warp()
	return c
}
w.me = function () {
	alert('real w.me in JFAL')
}
b.warp = function (p) {
	$l('b.warp')
	var b = this, w = b.W()
	cjs.t(function () {
		if (b.Y() < 0) {
			b.Y(w.H)
		}
		if (b.Y() > w.W) {
			b.Y(0)
		}
		if (b.X() < 0) {
			b.X(w.W)
		}
		if (b.X() > w.W) {
			b.X(0)
		}
	})
	return b
}
w.stars = function (n) {
	$l('w.stars')
	var w = this
	_.t(N(n, 30), function () {
		w.D(R(1000, -500), R(800, -400), 'w', 2).den(0).rest(2)
	})
	return w
}
w.tim = w.addTim = function (n) {
	$l('w.tim')
	var w = this
	if (U(n)) {
		return w.D(300, 300, 'w', 15).K('tim').bS('guy', .3)
	}
	_.t(n, function () {
		w.addTim()
	})
	return w
}
w.tr = w.track = function (t, cX, cY, bf) {
	var w = this
	//i can leave the world-centering in fw
	// can optionally filter it with scale itself
	//  has limits now!  and more..
	// tis is the ultimate!
	if (U(t)) {
		t = w._trackee
	}
	w.t = t
	cX = N(cX, w.W / 2)
	cY = N(cY, w.H / 2)  //option to set based on t's CURRENT X/Y?
	if (bf == '!') {
		T.t(function () {
			var sX, sY
			sX = w.z * (t.X() - cX)
			sX = sX * 1 / ( 1 + w.hW / w.w )
			sY = w.z * (t.Y() - cY)
			sY = sY / (1 + w.hH / w.h)
			w.sXY(sX, sY)
		})
	}
	else if (bf == '-') {
		T.t(function () {
			w.s.x = (cX - t.X()) * w.z - w.W * (w.z / 2 - .5)
			w.s.y = (cY - t.Y()) * w.z - w.H * (w.z / 2 - .5)
		})
	}
//w.S(cX,cY,'o',[ [40,400,'-']]) // w.dbCross(cX,cY) //  w.dot(cX,cY,'+')
	else if (O(bf)) {
		bf.x = N(bf.x) ? bf.x : w.w / 2
		bf.y = N(bf.y) ? bf.y : w.h / 2
		bf.w = N(bf.w) ? bf.w : 0
		bf.h = N(bf.h) ? bf.h : 0
		bf.mX = N(bf.mX) ? bf.mX : 1
		bf.mY = N(bf.mY) ? bf.mY : 1
		w.S(bf.x, bf.y, 'r', [[bf.w, bf.h, '-']])
		w.S(bf.x, bf.y, 'w', [[bf.w + 20, bf.h + 20, '-']])
		w.S(bf.x, bf.y, 'b', [[bf.w, w.h, '-']])
		w.S(bf.x, bf.y, 'b', [[w.w, bf.h, '-']])
		w.S(bf.x, bf.y, 'z', [[10, 10, '-']])  //sensor works but ony for rect (or at least not for circ)
		w.S(bf.x, bf.y, 'w', [[bf.w, bf.h, '-']]) //  w.dot(bf.x-bf.w/2, bf.y-bf.h/2  ,     '+')
		T.t(function () {
			var sX, sY
			// sX = (bf.x-w.hW)   + cjs.adj( (t.X()-bf.x),  bf.w/2)/w.z
			sX = bf.x - w.hW + cjs.adj(t.X() - bf.x, bf.w / 2) * bf.mX /// bf.mX //scaling not needed?
			sY = (bf.y - w.hH) + cjs.adj(t.Y() - bf.y, bf.h / 2) * bf.mX// /bf.mY
			w.sXY(sX, sY)
		})
	}
	else {
		
		//each tick, literally just sets w.sXY() based on:
		// world dimensions, world zoom, and trackee position
		T.t(function () {
			var dX, dY
			//run pre-scroll hook cb's
			if (F(w.t.cb)) {
				w.t.cb()
			}
			if (w.track.cb && F(w.track.cb)) {
				w.track.cb()
			}
			// if the designated trackee optionally has its own cb,
			// that over rules the (also optional) 'w.track.cb' cb
			dX = t.X() - cX
			dY = t.Y() - cY
			w.sX(w.z * w.hW + w.z * dX - w.hW)
			w.sY(w.z * (w.hH + dY ) - w.hH)
		})
	}
	return w
}
w.sXY = function (x, y) {
	$l('sXY')
	if (U(x)) {
		return {}
	}
	this.sX(x)
	this.sY(y)
	return this
}
w.sXCap = function (s) {
	return cjs.cap(s, 0, this.w * this.z - this.W)
}
w.sX = function (x) {
	var w = this
	if (U(x)) {
		return -this.s.x
	}
	this.s.x = -this.sXCap(x)
	return w
}
w.sYCap = function (s) {
	return cjs.cap(s, 0, this.h * this.z - this.H)
}
w.sY = function (y) {
	var w = this
	if (U(y)) {
		return -w.s.y
	}
	w.s.y = -w.sYCap(y)
	return w
}
b.tr = b.track = function (x, y, z) {
	var b = this, w = b.W()
	w.track(b, x, y, z)
	return b
}
w.Z = function (s) {
	//get/set zoom.. ok cool :)
	var w = this
	if (U(s)) {
		return w.z
	}
	w.z = s == '-' ? w.mS : cjs.cap(s, w.mS)
	w.s.sXY(w.z)
	return w
}
b.centerScale = function (z) {
	var b = this, w = b.W()
	w.s.sXY(z)
	w.s.X(
			w.hW - (  (b.X() - w.hW) * z)
	)
	w.s.Y(w.hH - ((b.Y() - w.hH)) * z)
	return b
}
w.zoomOut = function () {
	var w = this //knows when to stop :)
	w.tCb = function () {
		w.Z(cjs.cap(w.z *= .98, w.mS))
	}
	return w
}
w.zoomIn = function () {
	var w = this
	w.tCb = function () {
		w.Z(cjs.cap(w.z *= 1.02, 0, 4))
	}
	return w
}
w.inout = function () {
	var w = this, // now it works!!!!
			s = 1,
			up = true
	w.t.cb = function () {
		if (up) {
			if (s < 2) {
				s += .2;
			}
			else {
				up = false
			}
			w.Z(s)
		}
		else {
			if (s > .8) {
				s -= .2
			}
			else {
				up = true
			}
			w.Z(s)
		}
	}
	return w
}
w.showOff = function () {
	var w = this
	zin()
	function zout() {
		w.zoomOut();
		_.in(10, zin)
	}
	
	function zin() {
		w.zoomIn();
		_.in(4, zout)
	}
	
	return w
}
w.pan = function (o) {
	var w = this, g = G(arguments), o = g[0],
			mZ = w.mZ,
			MZ = mZ * 3,
			z = w.mZ * 3, up = true,
			l
	if (g.m) {
		l = function () {
			up = z > w.mZ * 3 ? false :
					z < w.mZ ? true :
							up
			z *= up ? 1.01 : .9
			w.Z(z / w.mZ)
		}
	}
	else {
		l = function () {
			up = z > w.mZ * 3 ? false : z < mZ ? true : up
			z += up ? .03 : -.03
			w.Z(z / w.mZ)
		}
	}
	w.track.cb = l
	return w
}
w.tX = function (t) {
	var w = this
	if (U(t)) {
		return w.tSpr.X()
	}
	w.tSpr.X.apply(w.tSpr, arguments)
	return w
}
w.tY = function (t) {
	var w = this
	if (U(t)) {
		return w.tSpr.Y()
	}
	w.tSpr.Y.apply(w.tSpr, arguments)
	return w
}
w.tXY = function (x, y) {
	var w = this
	if (U(x)) {
		return {x: w.tX(), y: w.tY()}
	}
	y = N(y) ? y : x
	return w.tX(x).tY(y)
}
w.tRightLeft = function () {
	var w = this, left
	T.t(function () {
		if (!left) {
			w.tX(10, '+')
			if (w.tX() > 2000) {
				left = 1
			}
		}
		else {
			w.tX(10, '-')
			if (w.tX() < 400) {
				left = 0
			}
		}
	})
	return w
}
refMakeWorldScrollCode = function () {
	alert('refMakeWorldScrollCode')
	w.t = w._t = w._t || w.S(w.hW, w.hH, 'w', [[20, 2, '-']]).r(.8) //trackee
	w.i.A(w.tSpr = $Ct().XY(w.t.X(), w.t.Y())) //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)
	T.t(function () {
		if (F(w.t.cb)) {
			w.t.cb()
		} else if (F(w.tCb)) {
			w.tCb()
		} // actually calls the callbacks
		// i see w.sXCap and w.sYCap.. i think they limit the scroll distances
		//distances are simply calculated and assigned right to **** w.s *****
		//so it moves the actual stage... (dont worry, not the canvas)
		w.s.x = -w.sXCap((w.t.X() - w.hW + w.hW) * w.z - w.hW)
		w.s.y = -w.sYCap((w.t.Y() - w.hH + w.hH) * w.z - w.hH)
		if (w.t == w._t) {// if the trackee is the generic one that world provided...
			//have it bind to 'tSpr'.. some dumb tim graphic.. i think i can lose this part real soon
			w.t.XY(
					w.tSpr.X(),
					w.tSpr.Y()
			)
			w.s.rot(w.tSpr.rot())
		}
	})
}
b.shtEv = function (ms, k) {
	var b = this //= b.shootOnInt
	_.ev(N(ms / 1000, 0.4), function () {
		if (b.IsActive()) {
			b.sht(k)
		}
	})
	return b
}
b.tow = b.towards = function (x, y, sp) {
	$l('b.tow')
	var b = this, lV
	__sp = function (s) {
		s = N(s, 5)
		s = 11 - (  s > 10 ? 10 : s )
		s *= 20
		return s
	}
	sp = N(sp, 5)
	sp = 11 - (  sp > 10 ? 10 : sp )
	sp *= 20
	lV = V(x - b.X(), y - b.Y()).d(sp)
	return b.lV(lV)
	//if(isBody(x)){return self(x.X(), x.Y(), y)}
//move towards x,y (or body?)
	//more realistic to accelerate, via forces?
	//these just thrust and dont
//otherwise apply forces to neighbors.  but what if
//they 'SUCKED' instead of 'thrusted' ?
//is that the same as having a gravitational inwards force?
//  y = $ys(300, 200, 3).angDamp(0).linDamp(1)
}
b.rTow = function (y) {
	$l('b.rTow')
	var b = this,
			a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
	if (y.Y() > b.Y()) {
		a += 180
	}
	b.rt(a)
	return b
}
w.fireBall = function (x, y, vX, vY) {
	var v = 8
	if (vX == 'l') {
		vX = v;
		vY = 0
	}
	if (vX == 'r') {
		vX = -v;
		vY = 0
	}
	if (vX == 'u') {
		vX = 0;
		vY = -v
	}
	if (vX == 'd') {
		vX = 0;
		vY = v
	}
	if (vX == 'ul') {
		vX = v;
		vY = -v
	}
	if (vX == 'ur') {
		vX = -v;
		vY = -v
	}
	if (vX == 'dl') {
		vX = v;
		vY = v
	}
	if (vX == 'dr') {
		vX = -v;
		vY = v
	}
	vX = N(vX) ? vX : 0
	vY = N(vY) ? vY : 0
	return this.D(x, y, 'r', 18)//.bS('sun',.2)
			.lV(vX, vY)
}
w.zilla = function (x, y) {
	var w = this
	var z = w.S(x, y, 80, 140)  //make sensor?
			.fR()
			.bS('guy', [.8, 1])
			.moveInCircle('-')
			.cl('bul',
			function (bul) {
				bul.B().kill()
				z.hits++
			})
	z.hits = 0
	z.fireBalls = function () {
		var x = this.X(),
				y = this.Y()
		w.fireBall(x + 50, y - 80, 'ul')
		w.fireBall(x + 50, y + 80, 'dl')
		w.fireBall(x - 50, y - 80, 'ur')
		w.fireBall(x - 50, y + 80, 'dr')
		w.fireBall(x, y - 80, 'u')
		w.fireBall(x, y + 80, 'd')
		w.fireBall(x - 50, y, 'r')
		w.fireBall(x + 50, y, 'l')
	}
	z.fireBallsAtInt = function (ms) {
		var z = this
		setInterval(function () {
			z.fireBalls()
		}, ms)
		return this
	}
	return z
}
w.goomba = function (x, y) {
	x = _.tN(x, 300)
	y = _.tN(y, 100)
	return w.D(x, y, 'w', 30, 30).bS('guy').K('goomba')
}
w.bobom = function (x, y) {
	var w = this,
			bobom = w.D(x, y, 'd', [
				[40, 'body'],
				[40, 5, 30, 0, 'bobomSens', '-']])
	w.b(function (cx) {
		cx.w('bobomSens', function () {
			this.B().kill()
		})
	})
	body = bobom.rec(20, 20).d(1).r(1)
	sen = bobom.rec({s: 1})
	sen.cl('player', function () {
		w.B().kill()
	})
	return bobom
}
w.gG = function (x, y) {
	var w = this,
			gG, core, shell, z
	z = 40
	gG = w.D(N(x, w.hW), N(y, w.hH)).K('gG')
	core = gG.cir({c: 'o', C: 'z', l: 10, r: 20}).K('core')
	shell = gG.rec({c: 'g', C: 'g', l: 5, w: z, h: z, s: 1, al: .5})
	core.cl('bul', function (bulF) {
		gG.lV(0).aV(0);
		z = 40;
	})
	_.ev(2, function () {
		z += 4
		if (shell) {
			shell.kill()
		}
		shell = gG.rec({c: 'g', C: 'g', l: 5, w: z, h: z, s: 1, al: .5})
		//shell=gG.rec('g',z,z,'-')//.bS( shell.img=w.s.rec('g',z,z) )
		//w.back(sh)
	})
	return gG
}
w.badGuy = function (x, y) {
	var that = this, w = this
	b = w.D(x, y, 'd', 60).K('badGuy').bS(
			w.s.h(x, y)
	)
	b.draw = function (frame) {
		var b = this
		b.sp().rf(['r', 'g'],
				[frame[0], frame[1]], 60).dc(60)
	}
	b.h = b.health = 100
	b.cl(function () {
		b.h--
	})
	funcId = I(function () {
		b.draw(frameByHealth(b))
		if (b.h <= 0) {
			clearInterval(funcId);
			b.kill()
		}
		function frameByHealth(b) {
			if (b.h < 0) {
				b.h = 0
			}
			if (b.h > 100) {
				b.h = 100
			}
			if (b.h < 50) {
				return [1 - ((b.h / 50)), 1]
			}
			else {
				return [0, 1 - ((b.h - 50) / 50)]
			}
		}
	}, 300)
	return b
}
b.moveInCircle = function (rad, speed) {
	$l('b.moveInCircle')
	var g = G(arguments), rad = N(g[0]) ? g[0] : 100,
			speed = N(g[1]) ? g[1] : 2,
			toRad = Math.toRadians, cos = Math.cos, sin = Math.sin,
			b = this,
			ang = 0,
			x = b.X(),
			y = b.Y(),
			bX,
			bY
	T.t(function () {
		ang += toRad(speed)
		bX = rad * cos(ang)
		bY = rad * sin(ang)
		if (g.p) {
			bY *= 2
		}
		if (g.n) {
			bX *= 2
		}
		b.XY(bX + x, bY + y)
	})
	return this
}
w.p = function (x, y, sc, cn) {
	var w = this, g = G(arguments),
			p
	sc = N(sc, 1)
	cn = cn || 'jump'
	p = w.D(x, y).fR()
	p.cn(cn)
	p.SetBullet(true)
	p.rec({c: 'r', l: 5, C: 'r', w: 22 * sc, h: 40 * sc}).d(5)
	p.rec({
		s: 1,
		w: 8 * sc, h: 8 * sc,
		x: 0,
		y: 20 * sc,
	}).K('feet').C('X')
	p.Bm('me', 0, 0, 0.25 * sc)
	// p.bS(   {i:'me', sc: .25*sc, x:-10,y:-110}  )
	if (g.p) {
		p.tr()
	}
	p.r(.4)
	p.lD(.5)
	return p
}
b.inAir = function () {
	var b = this, onG = false
	this.cxs(function (cx) {
		if (cx.IsTouching()) {
			cx.w('feet',
					function () {
						if (this.of(b)) {
							onG = true
						}
					})
		}
	})
	return !onG
}
b2d.cn.j = b2d.cn.jump = function (p) {
	
	/* p.vX(
	 K.r?200 :
	 K.l?-200 :0)
	 if(K.u && p.onG){
	 p.vY(-1000)
	 }*/
	var m = p.mass()
	if (p.inAir()) {
		if ($.K.r) {
			p.I(m / 2, 0)
		}
		else if ($.K.l) {
			p.I(-m / 2, 0)
		}
		p.I(0, m * 3)
	}
	else {//on ground
		if ($.K.u) {//initiate a jump
			if ($.K.r) {
				p.lV(m, -m * 4)
			}
			else if ($.K.l) {
				p.lV(-m, -m * 4)
			}
			else {
				p.lV(0, -m * 8)
			}
		}
		else {//not jumping, may be running
			if ($.K.r) {
				p.lV(m * 2, 0)
			}
			else if ($.K.l) {
				p.lV(-m * 2, 0)
			}
			else {
				p.lV(0, 0)
			}
		}
	}
	if ($.K.d) {
		p.I(0, m * 3)
	}
}
w.P = function (x, y, sc) {
	var w = this,
			g = G(arguments)
	p = w.p(N(g.f, w.hW), N(g.s, w.H - 50), N(sc, 2))
	if (g.p) {
		p.tr()
	}
	return w
}
b.horizCenter = function () {
	var b = this;
	b.X(b.W().hW);
	return b
}   //-> b.X('hC')//b.g=function(){ return this.f().g }
w.bu = w.bul = function () {
	var w = this, g = G(arguments), o, bu
	o = g.O_ ?  //pass {x,y},rad  OR x,y,rad
	{x: g.f.x, y: g.f.y, r: g.s} :
			N(g.s) ? {x: g.f, y: g.s, r: g.t} :
			{r: g.f}
	bu = Bul(o.x, o.y).fr(0).d(.1).r(.5)
	bu.cl(onColl)
	return bu.lD(0).aD(0)
	function Bul(x, y, rad, c) {
		c = c || 'w'
		rad = N(rad, 8)
		var bu = w.D(x, y, c, rad).K('bul bu')
		bu.SetBullet(true)
		return bu
	}
	
	function onColl(f) {
		if (!g.n) {
			this.xB()
		}
		if (g.p) {
			if (O(f) && F(f.xB)) {
				f.xB()
			}
		}
	}
}
b.bu = b.bul = function () {
	var b = this, g = G(arguments)
	if (g.p) {
		b.SetSensor(true)
	}
	return b
}
b.sht = function () {
	var b = this, g = G(arguments),
			o = {k: g.f},
	//just above b
			bu = w.bu(
					this.wP(0, -200)
			)
	bu.lV(b.vec().m(100))
	bu.d(.5).lD(0).fR()
	bu.K(o.k)
	return bu
}
b.shtSp = function (k) {
	var b = this
	$.space(function () {
		b.sht(k)
	})
	return b
}
b.cn = function (cn, o) {
	var b = this, w = b.W()
	//stop a current 'controls', if any
	if (F(b._cn)) {
		w.s.off('tick', b._cn)
	}
	if (U(cn)) {
		return
	}
	if (S(cn)) {
		cn = b2d.cn[cn]
	}
	if (F(cn)) {
		b._cn = w.s.t(
				function () {
					cn(b, o)
				}
		)
	}
	return b
}
b2d.cn.thr = b2d.cn.thrust = b2d.cn.t = function (p, mult) {
	var vec
	mult = N(mult, 200)
	if ($.K.u) {
		vec = p.vec().m(mult)
		p.I(vec)
	}
	p.aV($.K.r ? 15 : $.K.l ? -15 : 0)
	//  $l('vec: '+ parseInt(vec.x) + ', '+ parseInt(vec.y))
}
w.y = w.ship = function () {
	var w = this, g = G(arguments), hS, side, ship, y, o
	o = g.O ? g.f :  //pass opOb
		//pass {c='y'}, x=100, y=100, sc=4
			g.S_ ? {c: g.f, x: g.s, y: g.t, sc: g[3]} :
			{x: g.f, y: g.s, sc: g.t}
	o.c = o.c || 'y';
	o.sc = N(o.sc, 4);
	o.x = N(o.x, 100);
	o.y = N(o.y, 100)
	y = makeShip(o.x, o.y, o.sc * 4, o.c)
	y.push = function (frc) {
		$l('y.push')
		var y = this, g = G(arguments)
		frc = N(g.f, 1)
		ev = .5
		if (g.p) {
			_.ev(ev
					, function () {
						y.push(frc)
					})
		}
		else {
			y.I(y.vec().m(frc * 40))
		}
		return y
	}
	y.going = function () {
		var y = this,
				lv = y.lV()
		return M.a(lv.x) > 0.5 || M.a(lv.y) > 0.5 || M.a(y.aV()) > 0.5
	}
	if (!g.n) {
		y.cn('thrust')
	}
	y.shtSp()
	if (g.p) {
		y.tr()
	}
	return y.K('ship yip y').aD(0).r(.8)
	function makeShip(x, y, hS, c) {
		var side = hS * 2, y
		y = w.D(x, y)
		y.pol(oO('c', c), [
			[-hS, hS], [0, -side * 2], [hS, hS]
		])
		y.fixedRot(false)
		y.SetBullet(true)
		return y
	}
}
w.Y = function () {
	var w = this, g = G(arguments)
	y = $a(w, 'y', g)
	if (g.p) {
		y.track()
	}
	return w
}
b.vec = b.v = function () {
	var b = this, g = G(arguments), o, vec
	o = g.O ? g.f :
			g.s ? {x: g.f, y: g.s} : //this not error
			{y: g.f}
	vec = V(N(o.x, 0), N(o.y, -1))
	return b.GetWorldVector(vec)
}//the current direction of that vector in world coordinates
