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
f.bSQ = function (j) {
	var f = this
	Q(function () {
		
		//f.ctSp( Q.b(j) )
	})
	return f
}
w.tE = function (fn) {
	var w = this
	T.t(function () {
		w.e(fn)
	})
	return this
} // TICKER !!!!!
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
