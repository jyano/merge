w.killD = w.xD = function () {
	w.e(function (b) {
		if (b.iD()) {
			b.kill()
		}
	})
}
$L('color', 'baground', 'miground', 'foground' , 'cirRec', 'props')
function color(){
f.color = f.c = f.C = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments),
			o = g.O ? g.f : {c: g.f, C: g.s, l: g.t}
	o.c = (o.c == '*') ? $r() : (o.c || 'b');
	o.C = o.C || o.c
	return f.rpSp(
			f.iC() ? b.i = w.st.cir(f.cir(o)) : b.i = w.st.pol(f.pol(o)))
}
b.alpha=b.al = function (al) {
	al = N(al, .8)
	if (this.f() && O(this.f().sprites)) {
		this.f().sprites[0].al(al)
	}
	return this
}
f.alpha=f.al = function (al) {
	al = N(al, .8)
//	if ( O(this.sprites)) {this.sprites[0].al(al)}
	return this
}
}
function cirRec() {
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
	f.circle = f.cir = function (o) {
		var f = this
		return _.x(o || {}, {x: f.pX(), y: f.pY(), r: f.rad()})
	}
	f.cirSpr = f.cSp = function (o) {
		var f = this, b = f.B(), w = b.W(),
				cir = w.g.h().cir(o)
		this.bS(cir)
		this.g = cir
		return f
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
	w.bimapRec = w.bfR = function () {
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
}
function props(){
f.setProps = f.set = function (o) {
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
}
function baground(){
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
	w.C = function (c) {
		var w = this
		w.bg.h().c(c || $r()).dr(0, 0, w.w, w.h)
		return w
	}
}
function miground() {
	w.cen = w.cent = function () {
		var w = this, g = G(arguments),
				v = V(w.s.W() / 2, w.s.H() / 2)
		if (g.p) {
			w.dot(v)
		}
		return v
	}
	f.S = f.stg = function () {
		return this.W().s
	}
}
function foground() {
	w.UI = function () {
		//alert('w.UI');
		return $(this.i.canvas)
	}
	w.$h = function () {
		return this.i.h.apply(this.i, arguments)
	} // h = $h().a2(s).rXY(100, 300).XY(100,300).drag()
//  h.rec( 'r','b',600, 200,  600, 200)
// h.rec( 'g',100, 100,  100, 20)
}
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


f.tP = f.hit = f.testPoint = f.test = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), v
	v = V(g.f, g.s)
	if (g.p) {
		w.dot(v)
	}
	return f.H().TestPoint(b.tf(), v.div())
	//is a point within the fixture // very accurate
}
b.sp = function () {
	var b = this, g = G(arguments), ch
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
f.bindSpr = f.bS = function () {
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
f.rmSp = function () {
	_.e(this.sprites || [], function (s) {
		cjs.rmOb(s)
	})
	this.sprites = []
	return this
} //= f.xSp=f.Xx=f.rmSp
f.rpSp = function (sp) {this.rmSp()
	if (sp) {this.bS(sp)}
	return this }
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
} //w._fPreKill = function (f) { f.rmSp() }
w._ = w.preload = function (fn) {
	Q(function () {
		fn(w)
	})
}

 

old=function(){
	w.D_ = w._D = function (o) {
		alert('w._D??? nah, w.D_')
		return this.D(o.x, o.y, o.c, o.w, o.h)
	}}