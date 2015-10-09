
//w.me = function () {alert('real w.me in JFAL')}

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

w.P = function (x, y, sc) {
	var w = this,
			g = G(arguments)
	p = w.p(N(g.f, w.hW), N(g.s, w.H - 50), N(sc, 2))
	if (g.p) {
		p.tr()
	}
	return w
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

 