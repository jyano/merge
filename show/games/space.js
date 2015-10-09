function spac() {
	SPAZE = SPACEMAZE = function () {
		W({
			g: 0
		})
		w.roof.kill()
		_.t(30, function () {
			w.D(R(1000, -500), R(800, -400), 'w', 2).d(0).r(2)
		})
		grid = w.grid(_grid, 100, -100, 14, 40)
		grid.aD(1)
		//p = w.p(220, 70, 1.5).aD(100).track()//.follow(300, 150)
		//p.cn('thrust')
//    p.fR(false)
		p = w.y()
		score = 100
		T.t(function () {
			grid.aV(.2)
			// w.i.pen(score)
		})
		w.b(function (cx) {
			if (cx.w('player', 'grid')) {
				score--
			}
		})
	}
	SPOOM = function () {
		W({g: 0, w: 0})
		w.cen('+')
		w.s.rXY(w.hW, w.hH)
		star = w.S(200, 200, 'p', 100).den(1).bo(2)
		star.bS('earth', .13)
		p = w.p(200, 200, 2.5, 'thrust').d(.4)
		p.horizCenter()
		p.aD(8).lD(.8)
		w.dJ(p, star).freq(.15).damp(0).len(50)
		cjs.t(function () {
			trans(cjs.cap(300 / M.dist(star, p), .3, 2))
		})
		function trans(Z) {
			w.s.sXY(Z)
			w.s.XY(w.hW - (p.X() - w.hW) * Z,
					w.hH - (p.Y() - w.hH) * Z)
		}
	}
	YO = SPOYO = SPACEYOYO = function () {
		W({g: 0, w: 0})
		w.stars()
		p = w.p()
		p.cn('t')
		star = w.sun(200, 200)
		_.in(function () {
			star.sp().sXY(1)
		})
		w.spg(p, star).fq(3).d(4)
	}
	SPAE = function () {
		var img
		W({g: 0, w: 0});
		s = w.s
		e = w.S(200, 200, 'p', 100).d(1).r(2)
		e.bS({i: 'earth', sc: .13})
		e.K('earth');
		eI = e.sp()
		p = w.p(200, 200, 2.5, 'thrust')
				.d(.4).aD(8).lD(.8)
		w.dJ({
			a: p, b: e, l: 50, f: 0.15,
			coll: 1
		})
		T.t(function () {
			var sp, dx = e.X() - p.X(), dy = e.Y() - p.Y(),
					sc = cjs.cap(
							300 / M.sqrt(dx * dx + dy * dy), .3, 2)
			s.XY(
					300 - sc * (p.X() - 300),
					150 - sc * (p.Y() - 150))
		})
	}//
}
function gridMaze() {
	CVM = function () {
		W([1200, 600, 1500, 600], {g: 10}).Y()
		w.S(0, 0, 'z', [
			[500, 500, 600, 100],
			[500, 400, 500, 100],
			[500, 300, 500, 100],
			[500, 350, 450, 100],
			[320, 400, 50, 600]
		])
		y.track()
		w.y(100, 300).stat().rt(1, 10)
		maze = [
			[1, 0, 1, 1, 1, 1, 1, 1, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 0, 1],
			[1, 0, 0, 0, 1, 0, 0, 0, 1],
			[1, 0, 1, 0, 1, 0, 1, 1, 1],
			[1, 0, 1, 0, 1, 0, 0, 0, 1],
			[1, 0, 1, 1, 1, 1, 1, 0, 1],
			[1, 0, 0, 0, 0, 0, 0, 0, 1],
			[1, 1, 1, 1, 1, 1, 1, 1, 1]
		]
		w.grid(maze, 900, 200, 20, 30)
	}
}
function spacc() {
	TLK = function () {
		W({g: 0, w: 0})
		score = 0
		shots = 0
		p = w.p(500, 300).stat()
		_.t(100, function () {
			w.D(R(2200, -1000), R(1600, -1000), $r(), R(14, 8)).lD(2)
		})
		/*
		 $.space(function(){//can double on on shots!!!
		 setInterval(function(){
		 p.shoot(); shots++ }, 200)
		 })  //setTimeout(function(){$.pop(score).click(function(){window.location=window.location})}, 10000)
		 */
		w.cl('ball', 'bullet', function () {
			// score++;  cx.destroy()
		})
		cjs.t(function () {
			p.XY(500, 300)
			if ($.K.left) {
				p.rot(8, '-')
			}
			if ($.K.right) {
				p.rot(8, '+')
			}
			if ($.K.up) {
				w.e(function (b) {
					if (
							!b.of('bul') && !b.of('player')
					) {
						b.I(p.vec(0, -100).div(-50))
					}
				})
			}
		})
	}
	SUNZOOM = SPACEGRAVMACH = function () {
		W({g: 0, w: 0})
		w.thrustPlayer = function (x, y) {
			var w = this, p
			p = w.p(x, y, 2.5, 'thrust').lD(.8).aD(10000)
			return p
		}
		w.stars(10)
		w.s.rXY(600, 300)
		w.s.XY(600, 300)
		p = w.p().cn('thrust')
		sun = w.sun()
		_.in(.3, function () {
			//sun.sp().twL([{r:360},10000])
		})
		//preload to the rescue ??
		w.dJ({a: p, b: sun, cl: 1}).fq(10).d(10).l(10)
		green(400, 100);
		green(400, 200);
		green(200, 100);
		green(200, 200)
		function green(x, y, fq) {
			w.dJ({
				a: w.gG(x, y),
				b: sun,
				cl: 1
			})
					.fq(N(fq, 1)).d(0).l(15)
		}
		
		b2d.scaleFunc = function (b1, b2, max) {
			max = N(max, 2)
			M.sqr = function (a) {
				return a * a
			}
			var dst = 150 / M.sqrt(
							M.sqr(b1.X() - b2.X()) +
							M.sqr(b1.Y() - b2.Y())
					)
			return dst > max ? max : dst
		}
		T.t(function () {
			w.s.sXY(
					b2d.scaleFunc(sun, p, 2))
			p.centerScale(b2d.scaleFunc(sun, p, 2))
		})
	}//
	ZIL = function () {
		W({g: 0, w: 0})
		health = 100
		y = w.ship().warp().cl(function () {
			health -= 5
		})
		z = w.zilla(600, 300).fireBallsAtInt(4000)
		w.show(function () {
			return 'health: ' + health + ', hits: ' + z.hits
		})
	}
	ZIL = function () {
		W({g: 0, w: 0})
		health = 100
		y = w.ship().warp().cl(function () {
			health -= 5
		})
		z = w.zilla(600, 300).fireBallsAtInt(4000)
		w.show(function () {
			return 'health: ' + health + ', hits: ' + z.hits
		})
	}
	SPAZE6 = SPACEMAZE = function () {
		W({
			g: 0
		})
		w.roof.kill()
		_.t(30, function () {
			w.D(R(1000, -500), R(800, -400), 'w', 2).d(0).r(2)
		})
		grid = w.grid(_grid, 100, -100, 14, 40)
		grid.aD(1)
		//p = w.p(220, 70, 1.5).aD(100).track()//.follow(300, 150)
		//p.cn('thrust')
//    p.fR(false)
		p = w.y()
		score = 100
		T.t(function () {
			grid.aV(.2)
			// w.i.pen(score)
		})
		w.b(function (cx) {
			if (cx.w('player', 'grid')) {
				score--
			}
		})
	}
	SPOOM6 = function () {
		W({g: 0, w: 0})
		w.cen('+')
		w.s.rXY(w.hW, w.hH)
		star = w.S(200, 200, 'p', 100).den(1).bo(2)
		star.bS('earth', .13)
		p = w.p(200, 200, 2.5, 'thrust').d(.4)
		p.horizCenter()
		p.aD(8).lD(.8)
		w.dJ(p, star).freq(.15).damp(0).len(50)
		cjs.t(function () {
			trans(_.cap(300 / M.dist(star, p), .3, 2))
		})
		function trans(Z) {
			w.s.sXY(Z)
			w.s.XY(w.hW - (p.X() - w.hW) * Z,
					w.hH - (p.Y() - w.hH) * Z)
		}
	}
	YO6 = SPOYO = SPACEYOYO = function () {
		W({g: 0, w: 0})
		w.stars()
		p = w.p()
		p.cn('t')
		star = w.sun(200, 200)
		_.in(function () {
			star.sp().sXY(1)
		})
		w.spg(p, star).fq(3).d(4)
	}
	SPACE6 = function () {
		var img
		W({g: 0, w: 0});
		s = w.s
		e = w.S(200, 200, 'p', 100).d(1).r(2)
		e.bS({i: 'earth', sc: .13})
		e.K('earth');
		eI = e.sp()
		p = w.p(200, 200, 2.5, 'thrust')
				.d(.4).aD(8).lD(.8)
		w.dJ({
			a: p, b: e, l: 50, f: 0.15,
			coll: 1
		})
		T.t(function () {
			var sp, dx = e.X() - p.X(), dy = e.Y() - p.Y(),
					sc = _.cap(
							300 / M.sqrt(dx * dx + dy * dy), .3, 2)
			s.XY(
					300 - sc * (p.X() - 300),
					150 - sc * (p.Y() - 150))
		})
	}//
}
