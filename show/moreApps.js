USINGLAYERSINEASEL = function () {
	z()
	s = SuperStage(500).A()
	s.bm('me', function (bm) {
		b = bm
		bm.sxy(3)
		drawCar()
		s.tick(function () {
			b.x(-1 * (g.x() * 2))
			b.y(-1 * (g.y() * 2))
		})
	})
	bt = $.button('safd', function () {
		s.sxy(2)
	}).A()
	function drawCar() {
		s.bm('guy', function (bm) {
			g = bm
			bm.sxy(.5)
			SL(bm)
		})
	}
}
SHAPES = function () {
	z()
	s = stage = SuperStage(500, 500).a()
	//s.bm('me', function(bm){ bm.sxy(.2)   })
	s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
	s.Circle(100, 100, 10, 'r', 'y').fn(SL)
	s.Circle(10, 100, 100, 'z', 'x').fn(SL)
	s.Circle(100, 10, 100, 'a', 'c').fn(SL)
	s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
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
	stage = SuperStage(500, 500).A()
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
EASELART = function () {
	z()
	stage = SuperStage(500, 600).A()
	shape = stage.Shape()
	shape.rectangle(100, 200, 0, 200, 'a')
	shape.rectangle(100, 100, 100, 20, 'g')
	shape.rectangle(145, 120, 10, 80, 'o')
	shape.circle(105, 100, 20, 'b')
	shape.circle(105, 100, 8, 'x')
	shape.circle(200, 100, 20, 'b')
	shape.circle(200, 100, 8, 'x')
	//shape.circle(100,20,100,'g')
	SL(shape)
	shape.rx(100).ry(300).x(100).y(300)
	p = function () {
		EaselTween([shape, {l: 1}],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200]
		)
		EaselTween([shape, {l: 1}],
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
	p()
}
CENTERSHAPE = function () {
	z()
	stage = SuperStage(500, 600).A()
	shape = stage.Shape();
	SL(shape)
	shape.RECT(0, 0, 100, 100, 'a')
	shape.RECT(0, -75, 25, 50, 'b')
	shape.RECT(0, -200, 100, 100, 'r')
	shape.circle(100, 200, 40, 'z', 'x')
	shape.g.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
	shape.g.beginFill("orange").drawPolyStar(
			100, 100, 50, 5, 0.6, -90)
	shape.xy(200)
	stage.bm('me', function (b) {
		me = b
		me.rgc()
		me.xy(200)
		me.sxy(.4)
	})
}
SQUAREGAMES = function () {
	z()
	s = SuperStage(400, 400).A()
}
SPRY = function () {
	W([1200, 600, 2400, 1200], {g: 20})//.chalk('spritebox example')
//for 400 x 400 flash squares !!!
	//w.s.bm('earth', function(me){me.XY(400,400)fn()})
	//function fn(){
	y = w.spBox($$ship).track()
	$.K($$ship.key)
	$.K({  //takes a spritebox!//uses cjs.watchKeys()
		l: function () {
			y.rot(8, '-')
		},
		r: function () {
			y.rot(8, '+')
		},
		u: function () {
			y.I(0, -10)
		}
	})
	y.aD(.5)
//}
}
CIRS = function () {
	W(10).Y()
	w.D(200, 160).cir({r: 120, rf: {c1: 'r', c2: 'b'}}, {r: 100, C: 'y', l: 2, bf: 'me'})
	w.D(100, 100).cir({r: 35, lf: {c1: 'o', c2: 'y'}})
	w.D(300, 200).cir({r: 50, x: 0, y: 0, lf: {c1: 'o', c2: 'b', X1: 400}})
			.cir({r: 100, x: 200, y: 0, lf: {c1: 'o', c2: 'b'}})
			.cir({r: 100, x: 100, y: 100, lf: {c1: 'o', c2: 'b'}})
	w.s.h().dc([50], [200, 0, 100], [100, 100, 100]).c({
		l: 20,
		C: 0,
		ls: 1
	}).dc([50], [200, 0, 100], [100, 100, 100])
}
RADIALGRADCIRC = function () {
	s = $St()
	x1 = 0
	y1 = 0
	r1 = 10
	x2 = 0
	y2 = 0
	r2 = 100
	h = cjs.shape(10, 10).a2(s).drag()
	change = function () {
		
		//  h.remove()
		// h=cjs.shape(10, 10).a2(s).drag()
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
	n = nip()
	//h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
}
SHADOW = function () {
	b2d.levelWarp()
	p.linDamp(1).warp()
	setTimeout(function () {
		p.sprite.shad("y", 0, 150, 300)
		badGuy.sprite.shad('o', 40, 40, 40)
	}, 100)
	$.space(function () {
		p.polyBul()
	})
	badGuy = w.badGuy(400, 200).warp().den(.1)
	I(function () {
		w.s.pen('badGuy health: ' + badGuy.health)
	}, 200)
	$(w.s.back.canvas).C('p')
	s = w.s.back
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
CHAR = function () {
	w = b2d.W().debug()
	w.begin(function (cx) {
		if (cx.with('hurt')) {
			b.p('hurt').I(100, -200)
		}
		if (cx.with('fly')) {
			b.p('fly').I(-100, -200)
		}
	})
	b = w.ball(200, 200, 60).bindSprite2(cjs.sprite(Sprites.char).rXY(275, 220))
	guyBrick(100).K('hurt')
	guyBrick(500).K('fly')
	function guyBrick(x) {
		return w.brick(x, 500, 100, 100).bindSprite('guy', .6)
	}
}
MUMMYFLIP = function () {
	w = b2d.W() //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"
//sprite always assumed to start facing right (and flipping it horizontqlly is the left) - so i must draw facing right
	b = b2d.box(100, 100, 50, 88).K('mummy').bindSprite2(
			cjs.sprite(Mummy).a2(w.s).drag()
					.rXY(20, 22).sXY(2).XY(200))
	b.coll(function () {
		b.linVel(0)
	})
	b.sprite.p('walk')
	cjs.tick(function () {
		b.rT(0)
		if (b.direction == 'right') {
			b.I(4, -2)
		}
		else if (b.direction == 'left') {
			b.I(-4, -2)
		}    // direction='neither' // <-- demumify (doesnt keep walking
		//if(jumpButton is pressed){jump()}
	})
	$.kD({
		u: function () {
			//jumpButtonPressed = true
			if (b.Y() > 530) {
				b.I(0, -80)
			}
		},
		U: function () {
			//jumpButtonPressed = false
		},
		l: function () {
			b.sprite.sX(-2)
			b.direction = 'left'
		},
		r: function () {
			b.sprite.sX(2)
			b.direction = 'right'
		}
	})
}
STICK = function () {
	w = b2d.W({grav: 3})
			.chalk('spritebox example').debug()
	w.spriteBox({
		"framerate": 4,
		"images": ["stick.png"],
		"frames": [
			[0, 0, 512, 512, 0, -22, -2],
			[512, 0, 512, 512, 0, -22, -2],
			[1024, 0, 512, 512, 0, -22, -2],
			[0, 512, 512, 512, 0, -22, -2],
			[512, 512, 512, 512, 0, -22, -2],
			[1024, 512, 512, 512, 0, -22, -2],
			[0, 1024, 512, 512, 0, -22, -2],
			[512, 1024, 512, 512, 0, -22, -2],
			[1024, 1024, 512, 512, 0, -22, -2],
			[0, 1536, 512, 512, 0, -22, -2],
			[512, 1536, 512, 512, 0, -22, -2],
			[1024, 1536, 512, 512, 0, -22, -2]
		],
		"animations": {
			"die": {"frames": [8, 9, 10], "speed": .1, next: false},
			"walk": {"frames": [1, 2, 3, 4], "speed": .1},
			"jump": {"frames": [5, 6, 7, 0], "speed": .1, next: false}
		}
	}, 300, 200, .25).mario()
	w.rect(600, 200, 50, 50, 'p')
	w.circ(600, 100, 40, 'b')
}
 
 //balls
	CHICKBALLS = function () {
		W(1200, 1200)._(function () {
			_.t(14, function () {
				w.D(R(1100, 50), R(1100, 50))
						.cir({bf: 'chicks', r: 120})
			})
		})
	}
	HAIRBALLS = function () {
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
	COOLBALLS = function () {
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
	CANVASBMFILLBALLS = function () {
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
	CANTFBALLS2 = function () {
		W([400, 400], {w: 'U'}).C('w')._(function () {
			//cjs.rulers()
			w.p(0, 0, 10).stat()
			_.t(8, function () {
				w.D(R(100, 50), R(100, 50), 'b', 30)
			})
			$.ev(3, function () {
				var b = w.D(200, 200, 'b', 80)
				b.$h('x', 'X', 1).c('x', 'X', 1).bf(
						w.s.cv0,
						cjs.m2d(
								.6, .1, .1, .6, -40, 180
						)
				).cir(80)
			})
		})
	}
	TEXTBALLS = function () {
		W([400, 400], {}).C('w')._(function () {
			b = w.D(200, 200, 'b', 80)
			b.gx = b.gx || w.g.ct()
			b.gx.qB('chicks').rC().sXY(.1).Y(30)
			nice = w.i.T(0, 140, 'nice', 100, 'o')
			b.bS(nice)
		})
	}
	RADIANTBALLS = function () {
		s = cjs.S('a')
		b1 = s.cannonBall(100, 200)
		b2 = s.basketBall(100, 100)
		b3 = s.beachBall(50, 50)
		b3 = s.snowBall(50, 300)
	}
	DIRTYBALLS = function () {
		W({grav: 0})
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
	STATUSBALL = function () {
		W({grav: 0})
		b = w.D(500, 300, 'r', 60).bS(w.s.shape(500, 300))
		num = 0
		dif = .1
		shape = b.sprite
		shape.rG(['r', 'y'], [0, num],
				0, 0, 0, 0, 0, 60)
				.dc(0, 0, 60)
		$.ev(.1, function () {
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
	SWITCHBALL = function () {
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
		$.ev(1, function () {
			b.draw(frames [curr])
			curr++
			if (curr == 9) {
				curr = 0
			}
		})
	}
	HEALTHBALL = function () {
		W({g: 0})
		w.badGuy(500, 300)
	}
	SWITCHBALLWORKSBUTTOOCOMPLICATED = function () {
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
					b = w.ball(x, y, 60).bindSprite2(w.s.shape(x, y))
			I(function () {
				n2 = advanceN(n2);
				drawGrad()
			}, 100)
			function drawGrad() {
				b.sprite.rG(['r', 'y'], [n1, n2], 60).dc(0, 0, 60)
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
			var ball = w.ball(x, y, 60).bindSprite2(w.s.shape(x, y))
			ball.drawGrad = function (n1, n2) {
				return this.sprite.rG(['r', 'y'],
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
	TRIPLESTAGE = function () {
		w = b2d.W({grav: 0})
		b = w.ball(500, 300, 60)
		b.bindSprite2(w.s.shape(500, 300))
		num = 0
		dif = .1
		shape = b.sprite
		shape.rG(['r', 'y'], [0, num], 60)
				.dc(0, 0, 60)
		w.s.HUD.bm('me', function (b) {
			b.XY(300).drag()
		})
		w.s.back.bm('guy', function (b) {
			b.XY(200).drag()
		})
		w.s.back.linGrad('b', 'z')
	}
	RADIANT = function () {
		W().P()
		p.lD(1).warp()
		$.space(
				function () {
					p.polyBul()
				}
		)
		badGuy = w.badGuy(
				400, 200).warp().den(.1)
		$.ev(.2, function () {
			w.s.pen('badGuy health: ' + badGuy.health)
		})
	}
 