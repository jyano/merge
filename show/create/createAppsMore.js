CJSPOL = EASELCONVEX = function () {
	s = $St()
	s.pol([[-100, -10], [0, 100], [100, 20]], 'red', 'white', 10).XY(200, 300)
	s.pol([[-20, -80], [-100, -200], [100, 5]]).XY(300, 200)
	s.pol([[-40, 40], [-40, -40], [40, -40], [40, 30]], 'blue', 'white').XY(200, 200)
}
QPOL = function () {
	__St()
	vs = [V(240, 210), V(450, 410), V(600, 500), V(500, 500)]
	//h.lt([450, 410],[600, 500], [500, 500])
	//h.lt([[450, 410], [600, 500], [500, 500]])
	//h.lt( V(450, 410), V(600, 500), V(500, 500))
	h.pol({
		c: 'r',
		C: 'b',
		l: 20,
		v: vs
	})
}
HDDL = function () {
	h = $St().h()
	h.dl(50, 50, 200, 200)
	h.dl(V(300, 500), [500, 200])
}
CLT1 = function () {
	__St();
	h.dg()
	h.lt(100, 100)
	h.lt(150, 190)
	h.lt(300, 300)
	h.lt(350, 390)
	if (R()) {
		h.cp()
	}
}
CLT9 = function () {
	__St();
	h.dg()
	h.mt(240, 210)
	h.lt(450, 410)
	h.lt(600, 500)
	h.lt(500, 500)
	h.cp()
}
CLLT = function () {
	__St()
	h.mt(240, 210)
	//h.lt([450, 410],[600, 500], [500, 500])
	//h.lt([[450, 410], [600, 500], [500, 500]])
	//h.lt( V(450, 410), V(600, 500), V(500, 500))
	h.lt([V(450, 410), V(600, 500), V(500, 500)])
	h.cp()
}
OVALS = SETTRANSFORM = function () {
	s = $St(800).bm('me', function (me) {
		b = me
		b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
		m = b.getMatrix()
		function tf(a, b, c, d, e, f, g, h, i) {
			return this.x = a || 0,
					this.y = b || 0,
					this.scaleX = null == c ? 1 : c,
					this.scaleY = null == d ? 1 : d,
					this.rotation = e || 0,
					this.skewX = f || 0,
					this.skewY = g || 0,
					this.regX = h || 0,
					this.regY = i || 0,
					this
		}
	})
	//////
	h = s.h(40, 10, 'b', 16).drag()
	h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
	h.c({
		C: 'b',
		lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}
	}).de(400, 100)
	h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400})
			.de(100, 200, 500, 300)
	h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
}//B+
DRAGST = GRADOVALS = function () {
	z()
	s = $.dragStage()
	h = s.h(40, 10, 'b', 16).drag()
	h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
	h.c({C: 'b', lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}}).de(400, 100)
	h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400}).de(100, 200, 500, 300)
	h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
}//B
TXH = function () {
	St()
	h = $H().a2(st)
	h.f('red').s('black')
	h.graphics.dc(400, 400, 200)
	h.graphics.dr(100, 0, 200, 200)
	/////////
	h.rec(100, 100, 100, 100, 'y')
	h.rec(200, 200, 100, 100, 'b')
	h.c('o').polyStar(300, 100,
			50, 5, 0.6, -90)
	h.c('w', 'z')
			.roundRectComplex(400, 300,
			300, 300, 20, 20, 30, 40)
	h.cir(500, 200, 40, 'b', 'x', 10)
	function exceedsStackSize() {
		////////////////
		h.c('y').dc(100, 100, 30).c('o').dc(100, 100, 10)
				.c('X', 'g', 8)
				.mt([
					[100, 100], [300, 300], [400, 100],
					[500, 300], [450, 450]], [[500, 0], [600, 100]
				])
		h.cir(600, 300, 'u', 'g', 10)
		lf = {c1: 'b', c2: 'o', y1: 200, y2: 700}
		v = [[300, 300], [320, 200], [640, 400], [280, 650]]
		//two ways to make the same thing
		s.h().poly({
			v: v,
			lf: lf
		})
		s.h(250, 50).lf(lf).mt(v)
	}
}
GRAPHTEST = function () {
	s = st = $St();
	$.i('me', function (i) {
		s.ct().h()
		s.A($Bm(i))
		s.h().l(32).dr(20, 20, 920, 360);
		_.e([
					function () {
						return $h(12, 10)
								.lf('b', 'g', 130).dr(130)
					},
					function () {
						return $h(40, 10, 'b', 16)
								.ls('r', 'w', 70, 140).de(70, 140)
					},
					function () {
						return $h(80, 80)
								.C('b', 8).rf('w', 'y', 40).dc(40)
					},
					function () {
						return $h(12, 10, 18)
								.bf(img, cjs.M(1)).rs('b', 'g', 30, 130).dr(130)
					},
					function () {
						return $h(12, 12, 'g', 'r', 8)
								.rr(130, 30)
					}, //w(h) and r
					function lt() {
						return $h().C('o')
								.ss(16, 'round', 'round')
								.mt([40, 10], [90, 90], [90, 140])
					},
					function star() {
						return $h(80, 85, 'y', 'b', 3)
								.pStr(0, 0, 80, 5, .8, -95)
					},
					function hex() {
						return $h(80, 40, 'p')
								.pStr(40, 6).pStr(0, 75, 40, 6).pStr(45, 45, 20, 6)
					}
				],
				function (cont, i) {
					var W = 155, H = 155, P = 5, C = 4 //pad, cols
					s.A(tile(cont()).XY(
							42 + (W + P) * (i % C),
							42 + (i / C | 0) * (H + P)))
				})
	})[0]
	tile = createTile = function (x, y) {
		var bg, til
		bg = $h().c('t').dr(0, 0, 155, 155).ef().al(.2)
		til = $Ct().A(bg)
		if (N(x)) {
			til.X(x)
		}
		if (N(y)) {
			til.Y(y)
		}
		if (O(x)) {
			til.A(x)
		}
		return til
	}
}//D better with WAP
LIKELOLLY = EASELART = function () {
	z()
	stage = $St(500, 600).A()
	shape = stage.h()
	shape.g = shape.graphics
	shape.rec(100, 200, 0, 200, 'a')
	shape.rec(100, 100, 100, 20, 'g')
	shape.rec(145, 120, 10, 80, 'o')
	shape.cir(105, 100, 20, 'b')
	shape.cir(105, 100, 8, 'x')
	shape.cir(200, 100, 20, 'b')
	shape.cir(200, 100, 8, 'x')
	//shape.cir(100,20,100,'g')
	SL(shape)
	shape.rX(100).rY(300).XY(100, 300)
	$Tw([shape, {l: 1}],
			[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
			[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
			[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
			[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
			[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
			[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200]
	)
	$Tw([shape, {l: 1}],
			[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
			[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
			[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
			[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
			[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
			[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
			[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
			[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200]
	)
}
CNH = CENTERSHAPE = function () {
	z()
	stage = $St(500, 600).A()
	shape = stage.h();
	shape.g = shape.graphics
	SL(shape)
	shape.rec(0, 0, 100, 100, 'a')
	shape.rec(0, -75, 25, 50, 'b')
	shape.rec(0, -200, 100, 100, 'r')
	shape.cir(100, 200, 40, 'z', 'x')
	shape.g.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
	shape.g.beginFill("orange").drawPolyStar(
			100, 100, 50, 5, 0.6, -90)
	shape.XY(200)
	stage.bm('me', function (b) {
		me = b
		me.rgc()
		me.XY(200)
		me.sXY(.4)
	})
}
BASELINE = function () {
	z()
	s = $St(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
	})
	s.A(t = $T('baseline: top').XY(300).sXY(4).drag())
	s.A(t2 = $T('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
	s.A(t3 = $T('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
}//C+
LINEH = function () {
	z()
	s = $St(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
	})
	s.A(
			t = $T('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
	)
	s.A(
			t2 = $T('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
	)
	s.A(
			t3 = $T('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
	)
}//C-
LINEW = function () {
	z()
	s = $St(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
	})
	s.A(t = $T('linewidth 0').XY(300).sXY(4).drag().lineW(0))
	s.A(t2 = $T('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
	s.A(t3 = $T('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))
}//C-
ALIGN = function () {
	z()
	s = $St(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
	})
	s.bm('me', function (bm) {
		b = bm
		bm.XY(500).sXY(.2)
	})
	//textAlign
	s.A(t = $T('linealign left').XY(300).sXY(4).drag()) //default
	s.A(t2 = $T('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
	s.A(t3 = $T('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))
	//textBaseline
	s.A(t = $T('baseline: top').XY(500).sXY(4).drag())
	s.A(t2 = $T('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
	s.A(t3 = $T('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))
}//B+
SHADOW = function () {
	W().warp()
	s = w.st
	p = w.p()
	p.lD(1).warp()
	setTimeout(function () {
		p.sp().shad("y", 0, 150, 300)
		badGuy.sprite.shad('o', 40, 40, 40)
	}, 100)
	$.space(function () {
		p.polyBul()
	})
	badGuy = w.badGuy(400, 200)
			.warp().den(.1)
	I(function () {
		//w.s.pen('badGuy health: ' + badGuy.health)
	}, 200)
	//$(w.s.back.canvas).C('p')
	//s = w.s.back
	s.bm('me', function (bm) {
		bm.drag().shad('blue', 125, 125, 50).XY(100, 100).sXY(.6)
	})
	s.bm('guy', function (bm) {
		bm.drag().shad('r', 100, 100, 10).XY(300, 200).sXY(.6)
	})
	s.bm('me', function (bm) {
		bm.drag().shad("z", 25, 25, 50).XY(500, 100).sXY(.6)
	})
}

 
 
 
 