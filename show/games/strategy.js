CHM = function () {
	w.rec = function (x, y, W, H, c) {
		var w = this, g = G(arguments), b, o
		o = g.O ? g.f :
				N(g.s) ? {x: g.f, y: g.s, w: g.t, h: g[3], c: g[4]} :
				{w: g.f}
		o.x = N(o.x, w.hW)
		o.y = N(o.y, w.hH)
		o.w = N(o.w, 40)
		o.h = N(o.h, o.w)
		o.c = o.c || $r()
		b = w.D(o.x, o.y, o.c, o.w, o.h).K('box').DFB(.5, .5, 0)
		if (g.n) {
			b.sen(true)
		}
		return b
	}
	W({
		w: 0//, g:50
	})
	w.rR(0, 3)
	w.rR(100, 3)
	w.rR(100, 3)
	w.rR(200, 3)
	w.rR(300, 3)
	w.rR(400, 3)
	w.Q(function (f) {
		f.B().kill()
	}, 550, 250, 650, 350)
	w.Q(function (f) {
		f.B().kill()
	}, 350, 50, 450, 150)
	w.Q(function (f) {
		f.B().kill()
	}, 850, 50, 950, 150)
	y = w.y(600, 300).K('y')
	_.ev(1, function () {
		w.cir(R(20, 400), 80, 12, 'r').K('r')
		w.rec(R(20, 900), 100, 24, 24, 'b').K('b')
	})
	w.cl('bul', function (f) {
		var b = f.B()
		this.B().kill()
		if (b != y) {
			b.kill()
		}
	})
	w.cl('r', 'b', function () {
		y.stat()
		w.e(function (b) {
			if (b != y) {
				b.kill()
			}
		})
		alert('you win!')
	})
	y.cl('r', lose)
	y.cl('b', lose)
	function lose() {
		//w.pen('you lose')
		y.stat()
		w.e(function (b) {
			if (b != y) {
				b.kill()
			}
		})
		_.in(self)
	}
}
KIL = function () {
	W()//.Y()
	y = w.y()
	w.randRects()
	l = w.S(255, 50, 'g', 60, 15)
	for (var i = 1; i <= 10; i++) {
		w.rJ(l, b = w.D(255, i * 30 + 30, 'w', 3, 15).DFB(1, 0, 0));
		l = b
	}
	w.rJ(l, w.D(255, 330, 'd', 20).DFB(1, 0, 1.1))
	l = w.S(900, 50, 'g', 60, 15)
	for (var i = 1; i <= 10; i++) {
		w.rJ(l, b = w.D(900, i * 30 + 30, 'w', 3, 15).DFB(1, 0, 0));
		l = b
	}
	w.rJ(l, w.D(900, 330, 'd', 20).DFB(1, 0, 1.1))
	// _.t(8,function(){w.me(700, 400)})
	_.t(4, function () {
		w.me(700, 300)
	})
	// _.t(1,function(){w.me(700, 200)})
	w.cl('bul', function (f) {
		if (f.of(y)) {
			alert('f.of y')
		}
		else {
			f.B().kill()
		}
	})
}