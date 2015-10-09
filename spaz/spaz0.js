$load('worldStuff', 'fixts', 'bods', 'fxSp', 'bdSp', 'rmSp', 'toElse', 'bods', 'dev', 'edge', 'wall', 'anim', 'wStuff', 'fromCreate')
w.D = function () {
	var w = this, g = G(arguments, 'k'), o, b
	if (g.u) {
		return w.D(
				w.hW, w.hH)
	}
	//	o = //g.O ? g.f :
	o = g.O_ ? {p: g.f, f: g.r} :
	{p: [g.f, g.s], f: _.r(g, 2)}
	b = w.cB(
			b2d.bD(o.p))
	b.K(g.k)
	$a(b, 'f',
			g.G(o.f)
	)
	return b
}

w.D_ = w._D = function (o) {
	alert('w._D??? nah, w.D_')
	return this.D(o.x, o.y, o.c, o.w, o.h)
}
function worldStuff() {
	w.cen = w.cent = function () {
		var w = this, g = G(arguments),
				v = V(w.s.W() / 2, w.s.H() / 2)
		if (g.p) {
			w.dot(v)
		}
		return v
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
		//alert('w.cir w.ball w.ba w.circ')
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
	w._preKill = function (b) {
		//$l('w._preKill')
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
		//$l('w._fPreKill')
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
f.tP = f.hit = f.testPoint = f.test = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), v
	v = V(g.f, g.s)
	if (g.p) {
		w.dot(v)
	}
	return f.H().TestPoint(b.tf(), v.div())
	//is a point within the fixture // very accurate
}
f.S = f.stg = function () {
	return this.W().s
}
f.c = f.C = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments),
			o = g.O ? g.f : {c: g.f, C: g.s, l: g.t}
	o.c = (o.c == '*') ? $r() : (o.c || 'b');
	o.C = o.C || o.c
	return f.rpSp(
			f.iC() ? b.i = w.st.cir(f.cir(o)) : b.i = w.st.pol(f.pol(o)))
}
f.cir = function (o) {
	var f = this
	return _.x(o || {}, {x: f.pX(), y: f.pY(), r: f.rad()})
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
f.pol = function (o) {
	return _.x(o || {}, {v: this.vs()})
}
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
function bods() {
}
ct.d = function (c, x, y) {
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
	d.$$(function () {
		tw.$()
	})
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
old = function () {
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
}