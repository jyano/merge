V0 = function (x, y) {
	if (O(x)) {
		return V0(V(x).x, V(x).y)
	}
	return {x: N0(x), y: N0(y)}
}
w.gravity=w.G = function (x, y) {
	var w = this,
			v, currG = w.GetGravity()
	if (U(x)) {
		return currG
	}
	if (N(x)) {
		v = N(y) ? V(x, y) : V(0, x)
	}
	else if (x == 'flip') {
		v = V(-currG.x, -currG.y)
	}
	w.SetGravity(v)
	return w
}
w.go = w.step = function (time, a, b) {
	w = this, g = G(arguments)
	w.Step(time, N(a, 8), N(b, 3))
	if (g.p) {
		w.dDD()
	}
	return w
}
w.numBods = w.n = w.count = w.getBodyCount = w.bC = w.gBC = function () {
	return this.GetBodyCount()
}
w.createBod=w.cB = function (bD) {
	var b = this.CreateBody(bD)
	return b
}
w.dynBod=w.dB = function (x, y) {
	return this.cB(b2d.bD(x, y))
}
w.statBod=w.sB = function (x, y) {
	return this.cB(b2d.sD(x, y))
}
w.stat =w.S = function () {
	var w = this, g = G(arguments), bD, b, fs, k, o//,D=b2d.D
	if (S(_.l(g))) {
		k = g.pop()
	}
	//here, we just have two options..
	// we can pass in x and y as numbers..
	// or as an object
	// the rest (non-position-related) args form an array of fixtures
	o = g.N_ ? {
		b: V(g.f, g.s),
		f: _.r(g, 2)
	} : {
		b: V(g.f),
		f: _.r(g)
	}
	o.b = b2d.S(o.b)
	if (k) {
		o.k = k
	}
	b = w.cB(o.b)
	if (g.n) {
		o.f.push('-')
	}
	b.f.apply(b, o.f)
	if (o.k) {
		b.K(o.k)
	}
	return b
	function alpha() {
		//array of multiple fixtures
		if (g.A) {//alert('see w.D'); $l('mult')
			_.e(o.f, function (f) {
				if (g.n) {
					b.f(f, '-')
				}
				else {
					b.f(f)
				}
			})
			if (o.k) {
				b.K(o.k)
			}
			return b
		}
	}
}
w.xB = w.Xx = w.Xb = function (b) {
	var w = this
	if (U(b)) {
		w.e(function (b) {
			w.xB(b)
		})
	}
	else {
		w.DestroyBody(b)
	}
	return w
}
w.gB = function () {
	$l('w.gB')
	return this.GetGroundBody()
}
w.cF = w.clear = function () {
	$l('clear')
	var w = this
	w.ClearForces();
	return w
}
$bW = function () {
	var g = G(arguments), o
	o = N(g.s) ? {gx: g.f, gy: g.s, igSl: g.t} :
			N(g.f) ? {gy: g.f, igSl: g.s} :
			{igSl: g.f}
	o.gx = N(o.gx, 0)
	o.gy = N(o.gy, 10)
	o.igSl = U(o.igSl) ? false : !!o.igSl
	ab = b2d.AB(100 / 30, 100 / 30, 500 / 30, 500 / 30)
	return new b2d.World(V(0, 10), false)
}
b2d.iV = b2d.isV = function (v) {
	if (v) {
		return v.constructor.name == "b2Vec2"
	}
}
b2d.iH = function (h) {
	var typ
	if (O(h)) {
		typ = h.constructor.name
		return (typ == "b2PolygonShape") || (typ == "b2CircleShape") || (typ == "b2AShape")
	}
}
b2d.iBD = b2d.isBDef = function (bd) {
	return O(bd) && F(bd.b2BodyDef)
}
b2d.iB = b2d.isB = b2d.isBody = function (b) {
	if (O(b)) {
		return b.constructor.name == 'b2Body'
	}
}
b2d.iFD = b2d.isFD = function (fD) {
	return O(fD) && fD.b2FixtureDef
}
b2d.iF = function (f) {
	if (!f) {
		return false
	}
	return f.constructor.name == "b2Fixture"
}
b2d.tB = b2d.toBody = function (b) {
	return b2d.iB(b) ? b :
			b2d.iF(b) ? b.B() :
					null
}

w.$ = function (fn) {
	var w = this
	w.UI().click(function (e) {
		fn({x: w.mx, y: w.my, e: e})
	})
	return w
}
w.$$ = function (fn) {
	var w = this
	w.UI().dblclick(function (e) {
		fn({x: w.mx, y: w.my, e: e})
	})
	return w
}
w.mm = function (fn) {
	var w = this, g = G(arguments)
	$.mousemove(function (e) {
		var o = {
			x: w.mx,
			y: w.my,
			X: e.clientX,
			Y: e.clientY,
			e: e
		}
		fn(o)
	})
	return w
}
w.md = function (fn) {
	var w = this
	w.i.c.mousedown(function (e) {
		var o = {x: w.mx, y: w.my, X: e.clientX, Y: e.clientY, e: e}
		w.q(w.mx, w.my, function (f) {
			if (f) {
				o.f = f;
				o.b = f.B()
			}
		})
		fn(o)
	})
	return w
}
w.mu = function (fn) {
	var w = this, $cv = $(w.i.canvas)
	$cv.mouseup(function (e) {
		fn({
			x: w.mx,
			y: w.my,
			e: e
		})
	})
	return w
}
w.mdq = function (fn) {
	var w = this
	w.md(function (e) {
		w.q(e.x, e.y, function (f) {
			fn(f, e)
		})
	})
	return this
}
w.e$ = function () {
	var g = G(arguments), o
	o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
	this.e(function (b) {
		if (b.of(o.k)) {
			b.$(o.fn)
		}
	})
	return this
}
b2d.recV = function (x, y, w, h) {
	var hW = w / 2, hH = h / 2
	return [[x - hW, y - hH], [x + hW, y - hH],
		[x + hW, y + hH], [x - hW, y + hH]]
}
b2d.tF = function (f) {
	return b2d.iB(f) ? f.f() : f
}

