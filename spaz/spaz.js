$load('dev', 'edge', 'wall', 'anim', 'wStuff', 'fromCreate')
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
w.sH = function (h) {
	var w = this
	if (U(h)) {return w.H * w.s.scaleY}
	w.s.scaleY = h / w.H
	return w
}
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
w.polyCirc = function (x, y, r, sides) {
	var w = this,
			b = w.D(x, y)
	b.pol({v: b2d.polyCirc(r, sides)})
	return b
}
function wall() {
	w.xW = function () {//used in MIRROR
		this.e('wall', function (b) {
			b.kill()
		})
		return this
	}
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
$W = function () {
	W()
	w.y()
	w.p()
}



