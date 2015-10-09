RADIALGRAD1 = function () {
	z()
	$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
	stage = new createjs.Stage("canvas", 420, 500, 30)
	shape = new createjs.Shape()
	shape.x = 20
	shape.y = 20
	stage.addChild(shape)
	shape.graphics.beginRadialGradientFill(
			["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
	)
	shape.graphics.drawRect(0, 0, 100, 100)
	shape.graphics.endFill()
	stage.update()
}
RADIALGRAD = function () {
	z()
	stage = $St(500, 500).A()
	shape = stage.Shape().xy(40)
	shape.g
		// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
			.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
			.drawRect(0, 0, 100, 100)
			.drawCircle(180, 180, 100, 100)
}
RADIALGRADFILL = function () {
	z()
	$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
	stage = new createjs.Stage("canvas", 420, 500, 30)
// 2 colors
	shape = new createjs.Shape()
	shape.x = 20
	shape.y = 20
	shape.graphics.beginRadialGradientFill(
			[oC('b'), oC('r')],
			[.1, 1], 50, 50, 0, 50, 50, 50
	)
	shape.graphics.drawRect(0, 0, 100, 100)
	shape.graphics.endFill()
	stage.addChild(shape)
// 3 colors
	shape = new createjs.Shape();
	shape.x = 20;
	shape.y = 140;
	shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
	shape.graphics.drawRect(0, 0, 100, 100);
	stage.addChild(shape);
// alpha
	shape = new createjs.Shape();
	shape.x = 20;
	shape.y = 260;
	shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
	shape.graphics.drawRect(0, 0, 100, 100);
	shape.graphics.endFill();
	stage.addChild(shape);
}
RADIALGRADFILL2 = function () {
	z()
	$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
	stage = new createjs.Stage("canvas", 420, 500, 30)
	stage.addChild(
			h = new createjs.Shape()
	)
	h.graphics.beginRadialGradientFill(
			["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
	).drawCircle(100, 100, 50)
	stage.update()
}
RADIALGRAD1 = function () {
	z()
	$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
	stage = new createjs.Stage("canvas", 420, 500, 30)
	shape = new createjs.Shape()
	shape.x = 20
	shape.y = 20
	stage.addChild(shape)
	shape.graphics.beginRadialGradientFill(
			["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
	)
	shape.graphics.drawRect(0, 0, 100, 100)
	shape.graphics.endFill()
	stage.update()
}
RADIALGRAD = function () {
	z()
	stage = $St(500, 500).A()
	shape = stage.h().XY(40)
	shape.graphics
		// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
			.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
			.drawRect(0, 0, 100, 100)
			.drawCircle(180, 180, 100, 100)
}
RADIALGRADFILL = function () {
	z()
	cv = $('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
	stage = $St(cv)
	// 2 colors
	shape = new createjs.Shape()
	shape.x = 20
	shape.y = 20
	shape.graphics.beginRadialGradientFill(
			[oC('b'), oC('r')],
			[.1, 1], 50, 50, 0, 50, 50, 50
	)
	shape.graphics.drawRect(0, 0, 100, 100)
	shape.graphics.endFill()
	stage.addChild(shape)
	// 3 colors
	shape = new createjs.Shape();
	shape.x = 20;
	shape.y = 140;
	shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
	shape.graphics.drawRect(0, 0, 100, 100);
	stage.addChild(shape);
	// alpha
	shape = new createjs.Shape();
	shape.x = 20;
	shape.y = 260;
	shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
	shape.graphics.drawRect(0, 0, 100, 100);
	shape.graphics.endFill();
	stage.addChild(shape);
}
RADIALGRADFILL2 = function () {
	z()
	$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
	stage = new createjs.Stage("canvas", 420, 500, 30)
	stage.addChild(
			h = new createjs.Shape()
	)
	h.graphics.beginRadialGradientFill(
			["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
	).drawCircle(100, 100, 50)
	stage.update()
}
RADGRCIR = function () {
	s = $St()
	x1 = 0
	y1 = 0
	r1 = 10
	x2 = 0
	y2 = 0
	r2 = 100
	h = $H(10, 10).a2(s).drag()
	change = function () {
		
		//  h.remove()
		// h=cjs.h(10, 10).a2(s).drag()
		h.rf('b', "o", x1,
				y1,
				r1,
				x2,
				y2,
				r2)
				.dc(0, 0, 100)
				.ef()
		// x--
		// r1++
		// r2++
	}
	setInterval(change, 1000)
	change()
	//n = nip()
	//h2 =cjs.h(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
}
CIRS = function () {
	W(10).Y()
	w.D(200, 160).cir({r: 120, rf: {c1: 'r', c2: 'b'}}, {r: 100, C: 'y', l: 2, bf: 'me'})
	w.D(100, 100).cir({r: 35, lf: {c1: 'o', c2: 'y'}})
	b = w.D(300, 200).cir({r: 50, x: 0, y: 0, lf: {c1: 'o', c2: 'b', X1: 400}})
	b.cir({r: 100, x: 200, y: 0, lf: {c1: 'o', c2: 'b'}})
	b.cir({r: 100, x: 100, y: 100, lf: {c1: 'o', c2: 'b'}})
	w.s.h().dc([50], [200, 0, 100], [100, 100, 100]).c({
		l: 20,
		C: 0,
		ls: 1
	}).dc([50], [200, 0, 100], [100, 100, 100])
}
CHICKBALL = function () {
	W(1200, 1200)._(function () {
		_.t(14, function () {
			w.D(R(1100, 50), R(1100, 50))
					.cir({bf: 'chicks', r: 120})
		})
	})
}
HAIRBALL = function () {
	W(400, 400)._(function () {
		
		//cjs.rulers()
		_.t(8, function () {
			var b = w.D(R(100, 50), R(100, 50), 'b', 10)
			b.$h('x', 'x', 1189).c('x', 'x', 200)
					.bf('sun', [0, .6, 10, 10, -40, 200])
					.cir(10)
			// <- b.C({c:'x', al:.4} )
		})
		$.d('b', 100, 100, 100, 100).drag()
	})
}
COOLBALL = function () {
	W(400, 400).C('w')._(function () {
		//cjs.rulers()
		_.t(8, function () {
			var b = w.D(R(100, 50), R(100, 50), 'b', 50)
			b.$h('x', 'X', 1)
					.c('x', 'X', 1)
					.bf('sun', [0, .9, 1, 1, -40, 2])
					.cir(50)
		})
	})
}
META2 = CANTFBALL2 = function () {
	W([400, 400], {w: 'U'}).C('w')._(function () {
		//cjs.rulers()
		w.p(0, 0, 10).stat()
		_.t(8, function () {
			w.D(R(100, 50), R(100, 50), 'b', 30)
		})
		_.ev(3, function () {
			var b = w.D(200, 200, 'b', 80)
			b.$h('x', 'X', 1).c('x', 'X', 1).bf(
					w.s.cv0,
					cjs.m2d(
							.6, .1, .1, .6, -40, 180
					)
			).cir(80)
		})
	})
	CANVASBMFILLBALL = function () {
		W(400, 400).C('w')._(function () {
			//cjs.rulers()
			w.p(0, 0, 10).stat()
			_.t(8, function () {
				w.D(R(100, 50), R(100, 50), 'b', 30)
			})
			w.$$(function () {
				_.t(8, function () {
					var b = w.D(R(100, 50), R(100, 50), 'b', 30)
					b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
				})
			})
			w.i.T(200, 100, '$$ me')
		})
	}
}
TEXB = function () {
	W([400, 400], {}).C('w')._(function () {
		b = w.D(200, 200, 'b', 80)
		b.gx = b.gx || w.g.ct()
		b.gx.qB('chicks').rC().sXY(.1).Y(30)
		nice = w.i.T(0, 140, 'nice', 100, 'o')
		b.bS(nice)
	})
}
RADB = function () {
	s = $St()
	b1 = s.cannonBall(100, 200)
	b2 = s.basketBall(100, 100)
	b3 = s.beachBall(50, 50)
	b3 = s.snowBall(50, 300)
}
DIRTYBAL = function () {
	W()
	w.dirtyBall = function (x, y, stop1, stop2) {
		return this.gradBall(x, y, 60, 'z', 'w', stop1, stop2)
	}
	w.gradBall(200, 100, 60, 'z', 'w')
	w.dirtyBall(350, 100, 0, .9)
	w.gradBall(500, 100, 60, 'z', 'w', 0, .6)
	w.gradBall(650, 100, 60, 'z', 'w', 0, .3)
	w.gradBall(800, 100, 60, 'z', 'w', 0, .1)
	w.gradBall(350, 300, 60, 'z', 'w', .3, 1)
	w.dirtyBall(500, 300, .6, 1)
	w.dirtyBall(650, 300, .9, 1)
	w.dirtyBall(800, 300, 1, 1)
}
STATUSBAL = function () {
	W({grav: 0})
	b = w.D(500, 300, 'r', 60).bS(w.s.h(500, 300))
	num = 0
	dif = .1
	shape = b.sp()
	shape.rf(['r', 'y'], [0, num],
			0, 0, 0, 0, 0, 60)
			.dc(0, 0, 60)
	_.ev(.1, function () {
		num += dif
		if (num >= 1) {
			num = .9;
			dif = -.1
		}
		if (num <= 0) {
			dif = .1
		}
		shape.rf(['r', 'y'], [0, num],
				0, 0, 0, 0, 0, 60)
				.dc(0, 0, 60)
	})
}
SWITCHBAL = function () {
	W({g: 0})
	b = w.D(500, 300, 'r', 60)
	b.bS(
			w.s.h(500, 300)
	)
	b.draw = function (frame) {
		var b = this
		b.sp().rf(
				['r', 'y'], [frame[0], frame[1]],
				0, 0, 0, 0, 0, 60
		).dc(60)
	}
	frames = [
		[0, .1],
		[0, .3],
		[0, .6],
		[0, .9],
		[0, 1],
		[.3, 1],
		[.6, 1],
		[.9, 1],
		[1, 1]]
	curr = 0
	_.ev(1, function () {
		b.draw(frames [curr])
		curr++
		if (curr == 9) {
			curr = 0
		}
	})
}
SWITCHBALWORKSBUTTOOCOMPLICATED = function () {
	w = b2d.W({grav: 0})
	advanceN = function (n, dif) {
		n += dif
		if (n >= 1) {
			n = .9;
			dif *= -1
		}
		if (n <= 0) {
			n = 0;
			dif *= -1
		}
		return {n: n, dif: dif}
	}
	switchBall1 = function (x, y) {
		var dif = .1, n1 = 0, n2 = 0,
				b = w.ball(x, y, 60).bindSprite2(w.s.h(x, y))
		I(function () {
			n2 = advanceN(n2);
			drawGrad()
		}, 100)
		function drawGrad() {
			b.sp().rf(['r', 'y'], [n1, n2], 60).dc(0, 0, 60)
		}
		
		function advanceN(n2) {
			n2 += dif
			if (n2 >= 1) {
				n2 = .9;
				dif *= -1
			}
			if (n2 <= 0) {
				n2 = 0;
				dif *= -1
			}
			;
			return n2
		}
	}
	switchBall2 = function (x, y) {
		var ball = w.ball(x, y, 60).bindSprite2(w.s.h(x, y))
		ball.drawGrad = function (n1, n2) {
			return this.sp().rf(['r', 'y'],
					[n1, n2], 60).dc(0, 0, 60)
		}
		ball.animGrad1 = function () {
			var that = this,
					dif = .1, n2 = 1, n1 = 0
			I(function () {
						var res = advanceN(n1, dif)
						dif = res.dif
						n1 = res.n
						that.drawGrad(n1, n2)
					},
					300)
		}
		ball.animGrad2 = function () {
			var that = this, dif = .1
			I(function () {
						var res = advanceN(n1, dif)
						dif = res.dif
						n1 = res.n
						that.drawGrad(n1)
					},
					300)
		}
		ball.animGrad1()
	}
	switchBall1(100, 100)
	switchBall2(300, 100)
	w.s.back.linGrad('u', 'p')
	w.s.HUD.bm('me', function (bm) {
		me = bm.sXY(.3).XY(1150, 550).drag()
	})
}
RADIAN = function () {
	W().P()
	p.lD(1).warp()
	$.space(
			function () {
				p.polyBul()
			}
	)
	badGuy = w.badGuy(
			400, 200).warp().den(.1)
	_.ev(.2, function () {
		//w.s.pen('badGuy health: ' + badGuy.health)
	})
}