BADIES = function () {
	W();
	w.goomba();
	w.bobom(200, 200)
}
MOVCR = function () {
	W()
	/*w.dot(300, 300);
	 w.dot(600, 300);
	 w.dot(900, 300)*/
//rad,speed
	w.D(300, 300, 50, 100).moveInCircle('+') //high oval
	w.D(600, 300, 50, 100).moveInCircle()
	w.D(900, 300, 100, 50).moveInCircle('-') //long oval
}
ZLSCR = function () {
	W()
	health = 100
	y = w.ship().cl(function () {
		health -= 5
	}) // insert message passing here!
	z = w.zilla(600, 300).fireBallsAtInt(4000)
	//w.follow(y)
	y.tr()
	w.show(function () {
		return 'health: ' + health + ', hits: ' + z.hits
	})
}
CLT = CLICKSHOT = function () {
	W({g: 0}) // u cant shoot when ur dead!
	p = w.p(800, 300).cn('thrust').aD('++')
	w.tim(7)
	w.b(function (cx) {
		cx.w('bul', 'tim', function (tim) {
			tim.B().kill()
		})
		cx.w('bul', p, function () {
			this.B().kill()
		})
		cx.w('tim', p, function () {
			p.kill()
		})
	})
	$.click(function (e) {
		var x = e.pageX - p.X(),
				y = e.pageY - p.Y(),
				rot = M.tD(M.atan(y / x)),
				adj = x > 0 ? 90 : 270
		p.rot(rot + adj).I(x / 20, y / 20)
		w.bul(p.wP(0, -100), 10).bS({i: 'sun', sc: .1}).I(x, y)
	})
	//to do:  maybe u only get 10 buls ever.. so u must chase them :) (only way to kill badguys)
}
CLOOT6 = CLICKSHOOT = function () {
	W({g: 0})
	p = w.p(800, 300).aD(10000)
	w.tim(7)
	w.b(function (cx) {
		cx.w('bul', 'tim', function (t) {
			t.B().kill()
		})
		cx.w('bul', p, function () {
			this.B().kill()
		})
		cx.w('tim', p, function () {
			p.kill()
		})
	})
	$.click(function (e) {
		var x = e.pageX - p.X(), y = e.pageY - p.Y(),
				rot = M.tD(M.atan(y / x)),
				adj = x > 0 ? 90 : 270
		p.rot(rot + adj).I(x / 20, y / 20)
		w.bul(p.wP(0, -100), 10).I(x, y) //.bS({i:'sun', sc:.1})
	})
//to do:  maybe u only get 10 buls ever.. so u must chase them :) (only way to kill badguys)
}
GOOMBA1 = function () {
	W()
// could i automatically have body listen to their sens?
	w.ball().r(.3)
	workingGoomba = p = w.p(900, 450).cn('jump')
	p.my('hat', function () {
		p.bS('guy')
	})
	p.my('right');
	p.my('left')
	$.space(function () {
		if (p.my.right) {
			p.I(100, -400)
		}
		if (p.my.left) {
			p.I(-100, -400)
		}
	})
}
GOOMBA = function () {
	W()
// could i automatically have body listen to their sens?
	w.ball().r(.3)
	workingGoomba = p = w.p(900, 450).cn('jump')
	p.my('hat', function () {
		p.bS('guy')
	})
	p.my('right');
	p.my('left')
	$.space(function () {
		if (p.my.right) {
			p.I(100, -400)
		}
		if (p.my.left) {
			p.I(-100, -400)
		}
	})
}
CLOOT = CLICKSHOOT = function () {
	W({g: 0})
	p = w.p(800, 300).aD(10000)
	w.tim(7)
	w.b(function (cx) {
		cx.w('bul', 'tim', function (t) {
			t.B().kill()
		})
		cx.w('bul', p, function () {
			this.B().kill()
		})
		cx.w('tim', p, function () {
			p.kill()
		})
	})
	$.click(function (e) {
		var x = e.pageX - p.X(), y = e.pageY - p.Y(),
				rot = M.tD(M.atan(y / x)),
				adj = x > 0 ? 90 : 270
		p.rot(rot + adj).I(x / 20, y / 20)
		w.bul(p.wP(0, -100), 10).I(x, y) //.bS({i:'sun', sc:.1})
	})
//to do:  maybe u only get 10 buls ever.. so u must chase them :) (only way to kill badguys)
}
function greenie() {
	GG = function () {
		W({g: 0}).Y()
		w.gG(100, 100);
		w.gG(200, 200);
		w.gG(300, 300)
	}
	GREEN = function () {
		W({w: '@', g: 0})
		y = w.y(400, 200).K('pop')
		w.gG(400, 400)
	}
	COINWARP = function () {
		W({g: 0, w: 0}).Y()
		y.warp()
		score = 0
		badScore = 0
		// p = w.ship().K('player pop').warp()
		//p= w.p(100,100, 'thrust').Y(200).horizCenter().aD( 10000 ).lD(0).K('pop').warp()
		gg = w.gG(300, 300).warp()
		_.ev(8, function () {
			w.coin().sen(1)
		})
		/*
		 w.beg(function(cx){var fixt
		 cx.with('coin','player', function(){this.B().kill()
		 score++})
		 cx.with('coin','greenGuy', function(){
		 this.B().kill()
		 badScore++
		 })
		 })
		 */
		// w.coll('coin','player', function(){this.B().kill(); score++})
		// w.coll('coin','gg', function(){this.B().kill();badScore++})
		/*
		 // w.class('coin')
		 //   .with('player', function(c){c.setDestroy();score++})
		 // .with('greenGuy', function(c){c.setDestroy();badScore++})
		 w.class('coin').with({
		 player: function(){score++; return true},
		 greenGuy: function(){badScore++; return true}
		 })
		
		 */
		_.ev(3, function () {
			w.pen(score + ' / ' + badScore)
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
	GG = function () {
		W({g: 0}).Y()
		w.gG(100, 100);
		w.gG(200, 200);
		w.gG(300, 300)
	}
	GREEN = function () {
		W({w: '@', g: 0})
		y = w.y(400, 200).K('pop')
		w.gG(400, 400)
	}
	COINWARP = function () {
		W({g: 0, w: 0}).Y()
		y.warp()
		score = 0
		badScore = 0
		// p = w.ship().K('player pop').warp()
		//p= w.p(100,100, 'thrust').Y(200).horizCenter().aD( 10000 ).lD(0).K('pop').warp()
		gg = w.gG(300, 300).warp()
		_.ev(8, function () {
			w.coin().sen(1)
		})
		/*
		 w.beg(function(cx){var fixt
		 cx.with('coin','player', function(){this.B().kill()
		 score++})
		 cx.with('coin','greenGuy', function(){
		 this.B().kill()
		 badScore++
		 })
		 })
		 */
		// w.coll('coin','player', function(){this.B().kill(); score++})
		// w.coll('coin','gg', function(){this.B().kill();badScore++})
		/*
		 // w.class('coin')
		 //   .with('player', function(c){c.setDestroy();score++})
		 // .with('greenGuy', function(c){c.setDestroy();badScore++})
		 w.class('coin').with({
		 player: function(){score++; return true},
		 greenGuy: function(){badScore++; return true}
		 })
		
		 */
		_.ev(3, function () {
			w.pen(score + ' / ' + badScore)
		})
	}
}