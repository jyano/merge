  
	M2D = CJSM2D = function () {
		z()
		m = $Mx()
		$l(m)
		$St().bm('me', function (bm) {
			b = bm.XY(400, 200)
			p = b.getConcatenatedDisplayProps();
			$l(p)
			cm = b.getConcatenatedMatrix()
			$l(cm)
		})
	}
	MXD = function () {
		z()
		st = $St()
		m = $tMx(210, 230, .5, .5)
		$.i('chicks', function (i) {
			h = st.h(100, 100, '+').l(0)
			gx = h.graphics
			h.dr(0, 0, 200, 200)
			gx.bf(i, null, m)
			h.l(20).C('r', 20).dc(100, 100, 100)
		})
	}
 
PEEP = PEEPHOLE = WIND = function () {
	W()._(function () {
		$.hdr().A($.h1('grahics winding')).A()
		bm = w.i.qB('chicks').X(470).drag()
		h = w.i.h()
		h.graphics.f("pink").dr(20, 20, 450, 360)
				.arc(160, 160, 110, 0, M.PI * 2, true).closePath()
				.arc(330, 240, 110, 0, M.PI * 2, true).closePath()
		bm.mask = h.same().X(470)
	})
}//B+
HPOLY = function () {
	St()
	v = [[-100, 0], [0, -100], [100, 50]]
	s.h(600, 300).pol({v: v, bf: 'me'})
	s.h(900, 300).pol({v: v, lf: 1})
	s.h(800, 300).pol({v: v, rf: 1})
	h = s.h(200, 300).drag().bf('me', function () {
		h.dc([150], [200, 0, 150])
	})
	st.u()
}//C
COOLBALLS = function () {
	W(400, 400).C('w')._(function () {
		//cjs.rulers()
		_.t(8, function () {
			w.D(R(100, 50), R(100, 50), 'b', 50).$h('x', 'X', 1)
					.c('x', 'X', 1)
					.bf('sun', [0, .9, 1, 1, -40, 2])
					.cir(50)
		})
	})
}//B
BMH = function () {
	s = $St()
	v = [[-100, 0], [0, -100], [100, 50]]
	h = s.h(100, 300)
	h.drag()
	h.bC({
		cirs: [{r: 150},
			{x: 200, r: 150},
			[300, 100, 100], [400, 100, 100]]
	})
	h2 = s.h(700, 300)
	h2.drag()
	h2.bV({
		v: [
			[[-100, 0], [0, -100], [100, 50]],
			[[-200, 0], [-100, -100], [0, 50]],
			[[0, 200], [0, -200], [400, -300], [400, 300]]]
	})
}//D
HBFF = function () {
	st = $St().t()
	Q('me', function () {
		st.h(300, 200, '+').bf(Q.i('me')).dc(100)
		st.h(500, 100, '+').bf('me').dc(100)
	})
}
HBFHS = function () {
	st = $St(1800, 500).t()
	h = st.h(300, 100)
	h.bf({
		i: 'me',
		hs: [100, 300, 500, 700, 900],
		fn: function (x) {
			h.dc(x, 30, 120).es()
		}
	})
}
HBF = function () {
	$St().t().h(300, 300).bf('me', function (h) {
		h.dc(300)
	})
}
HBMCIR = function () {
	st = $St().t()
	st.h(300, 200).bmCir({
		circs: [{r: 100}, {x: 200, y: 200}, {}]
	})
}
BMCR = function () {
	$St()._(function (st) {
		h = st.h('+')
		h.bC({
			circs: [
				{x: 200, y: 100, r: 150},
				{r: 100}, {x: 300}
			]
		})
	})
}
TXB = function () {
	$St()._(function (st) {
		h = st.h('+')
		h._bfT(Q.i('me'), -100)
		h.dr(0, 0, 500, 200).dr(100, 100, 500, 200).C('z').dr(0, 0, 40, 40)
	})
}
BMFV = function () {
	Q(function () {
		__St()
		im = Q.i('me')
		$im = $(im).A()
		h.bf(im)
		h.cir({x: 40, y: 289, r: 100})
		h.mt(vs1)
		h.mt([
			[550, 20],
			[800, 100], [700, 300], [500, 120]
		])//.cp()
		h.mt([
			[750, 20],
			[900, 100], [900, 300], [700, 120]
		], 50, 200)//.cp()
		h.mt([
			[550, 20],
			[800, 100], [700, 300], [500, 120]
		], 0, 50)//.cp()
		h.cir({
			x: 550, y: 20, r: 20, c: 'b'
		})
		h.cir({
			x: 800, y: 100, r: 30, c: 'b'
		})
		h.cir({
			x: 700, y: 300, r: 20, c: 'g'
		})
		h.cir({
			x: 500, y: 120, r: 30, c: 'g'
		})
	})
}
QOLLL = function () {
	verts = [
		[[5, 100], [0, -100], [200, -150], [200, 150]],
		[[-50, 50], [-50, -100], [450, -50], [450, 50]]
	]
	W()._(function (w) {
		w.D(250, 300).pol({
			v: verts,
			c: {c: 'r', C: 'y', l: 10},
			bf: 'chicks'
		})
		w.D(450, 300).pol({
			v: verts,
			c: {c: 'r', C: 'y', l: 10},
			bf: 'me'
		})
	})
}
QOLLB = function () {
	W()._(function (w) {
		v = [[[5, 100], [0, -100], [200, -150], [200, 150]], [[-50, 50], [-50, -100], [450, -50], [450, 50]]]
		w.D(250, 300).pol({
			//c: {c: 'r', C: 'y', l: 10},
			bf: Q.i('chicks'),
			v: v
		})
		w.D(450, 300).pol({
			v: v,
			c: {c: 'r', C: 'y', l: 10},
			bf: Q.i('me')
		})
	})
}
SAND = function () {
	Q(function () {
		__St()
		ch = Q.i('chicks')
		me = Q.i('me')
		Ch = function () {
			return st.h('+').l(20).bf(ch).bs(me)
		}
		Ch().rec(200, 200, 200, 300)
		Ch().rec(400, 250, 200, 300)
		Ch().rec(600, 250, 200, 300)
		Ch().rec(750, 350, 200, 300)
		Ch().rec(900, 250, 200, 300)
		h = st.h('+')
		h.l(20).bf(me).bs(ch)
		h.rec(200, 200, 200, 300)
		h.rec(400, 250, 200, 300)
		h.rec(600, 250, 200, 300)
		h.rec(750, 350, 200, 300)
		h.rec(900, 250, 200, 300)
	})
}
SAN = function () {
	$St(1000, 500)._(function (st) {
		st.h(810, 410, '+').l(8).bf(Q.i('chicks'), $Mx(1, 0, 0, 1, -800, -400))
				.rec(1600, 800)
		ch = Q.i('chicks')
		me = Q.i('me')
		Ch = function (x, y) {
			var h = st.h(x, y).l(8)
			h.graphics.bf(ch)
			h.bs(me)
			cjs.SL(h)
			return h
		}
		Ch(200, 200).rec(200, 300)
		Ch(400, 250).rec(200, 300)
		Ch(600, 250).rec(200, 300)
		Ch(750, 350).rec(200, 300)
		Ch(900, 250).rec(200, 300)
	})
}
	GEM = function () {
		W()
		h = w.i.h(100, 300, '+')
		h.bR({
			i: 'chicks',
			hs: [
				{w: 150, h: 500},
				{w: 150, h: 500, x: 200},
				{w: 150, h: 500, x: 400},
				{w: 150, h: 500, x: 600}
			]//, fn:function(){}
		})
		w.D(200, 160).cir(
				{r: 120, rf: {c1: 'r', c2: 'b'}},
				{r: 150, C: 'y', l: 2, bf: 'me'}
		)
	}
	PGM = function () {
		W()
		verts = [[[5, 100], [0, -100], [200, -150], [200, 150]],
			[[-50, 50], [-50, -100], [450, -50], [450, 50]]]
		w.i.h(400, 300, '+').bV({v: verts})
		w.D(800, 300).pol({
			v: verts,
			c: 'r', C: 'y', l: 10,
			bf: 'me'
		})
	}