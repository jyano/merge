MIR = function () {
	W('->')
	p = w.p(100, 300).tr()
	w.Z(1.5)
	function left() {
		p.XY(1100, 300);
		w.xW().walls('->')
		b.dyn().C('b');
		r.dyn().C('r');
		g.dyn().C('g')
		b2.dyn().C('o')
		b3.dyn().C('y')
	}
	
	function right() {
		p.XY(100, 300);
		w.xW().walls('<->')
		b.stat().C('z');
		r.stat().C('z');
		g.stat().C('z')
		b2.stat().C('z')
		b3.stat().C('z')
	}
	
	T.t(function () {
		if (p.X() > 1200) {
			right()
		} else if (p.X() < 0) {
			left()
		}
	})
	b = w.D(400, 400, 'b', 150, 150)
	r = w.D(500, 400, 'r', 50, 300)
	g = w.D(400, 500, 'g', 120)
	b2 = w.D(250, 400, 'o', 80, 30)
	b3 = w.D(150, 500, 'y', 50)
	w.$$(function () {
		w.e(function (b) {
			b.dyn()
		})
		w.t_.kill()
		w.Z(.1)
	})
}
ADV = function () {
	W([1200, 600, 2400, 1200])//.P('+')
	//$.test=true
	w.Z(.1)
	w.roof.kill()
	w.S(100, 570, 'w', 200, 30).r(0).fr(0)
	w.S(325, 570, 'g', 230, 30).r(.3).fr(10)
	w.S(550, 570, 'r', 200, 30).r(.7).fr(.3)
	w.S(100, 400, 'g', 230, 30).r(.3).fr(10)
	w.plat([800, 300, 100], [260, 240, 60], [550, 250, 100], [1350, 550, 100], [300, 200, 100], [300, 500, 60, 30], [150, 400, 60, 30])
	w.S(1200, 500, 'w', 100, 100)
	w.S(1240, 450, 'w', 180, 30)
	w.S(1420, 500, 'y', 180, 30)
	w.S(1560, 450, 'y', 300, 30)
	w.S(1600, 500, 'y', 180, 30)
	w.S(1960, 450, 'w', 300, 30)
	w.S(1900, 500, 'w', 180, 30)
	w.S(11300, 200, 'w', 180, 30)
	speed = 1
	//  p.tr()
	p = w.p().cn('jump').tr()
	w.p(100, 100, .8)
	w.p(100, 100, .8)
	w.p(100, 100, .8)
	w.p(100, 100, .8)
	//p.lD(1)
///    w.show(function(){ return  'in air: '+ p.inAir() })
	//w.goomba(400).fr(0)
	setup = function () {
		score = 0
		p.XY(150, 100).lV(0, 0)
		w.s.XY(0, 0)
	}
	setup()
	T.t(function () {
		w.s.X(speed, '-')//.pen(score++)
		if (p.Y() > 600) {
			setup()
		}
	})
}
AUTOGAME = function () {
	W({w: 0, t: 0}).P()
	setup = function () {
		score = 0
		p.XY(350, 100)
		p.lV(0, 0)
		p.cn('j')
		p.d(.1).r(1).fr(0)
		w.s.XY(0, 0)
	}
	setup()
	T.t(function () {
		w.s.X(4, '-');
		if (p.relPos() < -100) {
			setup()
		}
	})//.pen(score++)
	w.ramps()
}
MARIOS = function () {
	W().P().P().P()
}//basic
MARO = function () {
	W().P().P().P()
}
DDL = DOODLE = function () {
	W([1200, 600, 1200, 2000], {g: -1000}).stats().P(600, 1800)
	var b1, b2
	plat([300, 300], [900, 600], [300, 900], [300, 1000], [1000, 1200], [500, 1400])
	pf = plat(900, 1700)
	// PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  cx.SetFriction( friction)  // persists for duration of contact
//  cx.SetRestitution(  restitution)   //persists for duration of contact
//  cx.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).
	function plat(x, y) {
		var g = G(arguments)
		if (g.O_) {
			g.e(function (g) {
				plat(g[0], g[1])
			});
			return
		}
		return w.S(x, y, 'o', 500, 40).K('pf')
	}
	
	p.K('p').tr()//.cl($.mo(function(){w.D(p.X(), p.Y()-150,'w',5,5,0,0,45)}))
	p.cl(w._t, //when player coll roof,
			function () {
				w.C('z');
				w.G(1000)
			})
	//one way wall
	w.pre('pf', function (f, cx) {
		if (p.Y() - this.B().Y() > 10) {
			cx.en(0)
		}
	})
}
JJJ = JUMPJET = function () {
	W([1200, 600, 1200, 1000], {g: 200}).P().Y()
	y.tr()
	// w.ice(800,280, 10000);
	// w.S(1200,30, 'r',600,4)
	// w.clouds(500,-200).clouds(1000,-200).clouds(-500,-200)
	//w.s.XY(300, 150).rXY(300,150)
	//  T.t(function(){p.centerScale(1-( (p.X()- w.hH)/ w.hH)*.1)})
	//w.s.XY(300,150)
	//w.s.rX(600)
	//w.s.rY(-200)
	//w.Z(.5)
	w.ice(30, 450, 400)
	w.grass(850, 650, 400)
	w.grass(0, 800, 400)
	w.rubber(880, 950, 1000)
	/*
	 //w.s.XY(300, 150)//.rXY(300, 150)
	 w.grass(300,280,500)
	 w.ice(1300, 280, 1000)
	 w.clouds().clouds(500,-200).clouds(1000,-200).clouds(-500,-200)
	
	 //w.s.XY(300, 150).rXY(300, 150)
	 w.clouds().clouds(1000,-200)
	 w.grass(300,280,500)
	 w.ice(800,280, 5000)
	 */
	//slide = w.rec(1200, 30, 1200,40, 'b').den(1).fric(.5).rest(.5)
}
AUTOSCROLL = AUO = function () {
	w.left = function (n) {
		var w = this;
		n = N(n, 4)
		w.e(function (b) {
			b.X(n, '-')
		})
	}
	b.byI = b.byImp = function (i) {
		var k = $.K
		if (k.right) {
			this.I(i, 0)
		}
		else if (k.left) {
			this.I(-i, 0)
		}
		return this
	}
	b.byV = b.byVel = function (v) {
		alert('b.byV')
		var k = $.K
		if (k.right) {
			p.lV(v, 0)
		}
		else if (k.left) {
			p.lV(-v, 0)
		}
		return this
	}
	W({g: 300, w: 0}).P(300, -300)
	w.plat = function (x, y, W, H) {
		var w = this//=brk=brick=
		x = N(x) ? x : 60;
		y = N(y) ? y : x
		W = N(W) ? W : 30;
		H = N(H) ? H : W
		return w.S(x, y, 'w', W, H).r(.3).K('plat')
	}
	w.plat(800, 500, 600, 100)
	w.plat(300, 530, 100, 100)
	w.plat(1400, 300, 600, 100)
	w.plat(1800, 500, 1000, 100)
	w.plat(1900, 200, 600, 100)
	w.p(300, -100)
	T.t(function () {
		w.left(4)
		if (p.Y() > 2000) {
			p.XY(300, -300)
		} //comeback
		if (b2d.onG) {
			if ($.K.u) {
				p.jumping(180, 30)
			}
			else {
				p.byVel(40)
			}
		}
		else {
			p.byImp(10)
		}
	})
	w.D(800, 100, 'r', 50, 50).bS('guy')
}
SPH = function () {
	W([1200, 600, 1200, 1200], {}).P()
	p.tr()
	w.perch()
	w.seesaw(600, 1100)
	w.seesaw(600, 700)
	w.seesaw(600, 500)
	w.spinner(400, 900)
	w.spinner(800, 900, '-')
}
ELV = function () {
	W([1200, 600, 2400, 1200], {}).P(100, w.h - 200)
	//p.d(.1).fr(1)
	p.K('p').track()
	speed = 10
	j = w.pJ({
		a: w.S(400, w.h - 200, 's', [[40, 40, '-']]).d(1).fr(1),
		b: w.D(500, w.h - 300, 'd', 200, 40).d(.1).K('elv'),
		lm: [-250, 100]
	}).mt(speed)
	w.cl('elv', _.debounce(function () {
		j.mt(speed *= -1)
	}, 200, true))
	speed2 = -100
	j2 = w.pJ({
		a: w.S(800, 300, 's', 40, 40).d(1).fr(1),
		aV: [-30, 2],
		b: w.D(800, 200, 'd', 200, 40).d(1).K('box'),
		ax: V(0, 1),
		rA: 45
	}).mt(speed2)
	w.cl('box', 'p', function () {
		speed2 *= -1
		j2.mt(speed2)
	})
	w.p(500, 200, 'thrust').K('p').d(.02)
	w.pJ(
			w.S(1000, 800, 'y', 40, 40).d(1).fr(1),
			w.D(1100, 900, 'b', 200, 40).d(1), [1, -.5], 25
	).L(-300).U(200).lm('+')
	j3 = w.pJ({
		a: w.S(240, 150, 's', 180, 90),
		b: w.D(200, 200, 'd', 200, 20),
		aV: V(100, 10),
		rA: 5
	})
	j3.mt(-10)
	_.in(2, function () {
		j3.mt('-')
	})
	_.in(4, function () {
		j3.mt('+')
	})
}
LEV = function () {
	W([1200, 600, 3600, 800])
	w.Z(1.2)
	w.Elv()
	sen = w.S(1200, 300, 'w', [[2400, 200, '-']]).K('sen')
	aCo = w.aCo(-50, -150)
	aCo.do(sen)
	//<- sen.do(aCo) //  <- sen.cl(
	// function(f){if(!f.by(aCo)){aCo.B(f)}},
	// function(f){if(f.by(aCo)){aCo.xB(f)}
	// })
	p = w.p(300, 400, '+').K('char')
	statMar = w.p(2600, 150).stat().K('mario')
	statBird = w.y(2350, 450, 2, '-').rt(90).stat().K('bird')
	statBird.cl('char', function () {
		p.kill()
		p = w.y(2350, 550, 2, '+').fR().rt(90).lD(2).K('char')
		w.Z(1.6)
	})
	statMar.cl('char', function () {
		p.kill()
		p = w.p(2400, 250).tr().K('char')
		w.Z(1.2)
	})
	//.tr()
	w.D(300, 100, 'r', 20);
	w.D(400, 100, 'r', 40);
	w.D(500, 100, 'r', 45);
	w.D(600, 100, 'r', 180);
	w.D(700, 100, 'r', 10)
	_.ev(2, function () {
		if (R()) {
			
			// tog()
		}
	})
	// Imagine that you have gusts of wind blowing sideways…
	// you can add your objects to a Contoller and have them pushed sideways…
	// then when the wind passes you could remove them from that controller.
	// now just add and remove bodies to the controller!!
	function tog() {
		$l('tog')
		// if(added){rm()} else {add()}
	}
	
	function add() {
		w.C('g');
		added = 1;
		co.B(b)
	}
	
	function rm() {
		w.C('r');
		added = 0;
		co.xB(b)
	}
	
	w.pJ(
			w.D(1200, 500, 'z', 60).K('ride'),
			w.S(1200, 500, 's', 40, 150).K('cart'))//.lm(-30, 60).speed(-100).motor(1).maxForce(1000)
			.lm(-30, 60).mt(-10)//.speed(-100).maxForce(1000)
	w.pJ(w.D(1400, 500, 'z', 110).K('ride'),
			w.S(1400, 500, 's', 40, 300).K('cart'))
			.lm(-30, 60).mt(10)//.speed(-100).maxForce(1000)
	w.pJ(
			w.D(1600, 500, 'z', 80).K('ride'),
			w.S(1600, 500, 's', 40, 250).K('cart')
	).lm(-30, 60).mt(-100)//.speed(-100).maxForce(1000)
	w.b(function (cx) {
		cx.w('cart', function () {
			w.e(function (b) {
				if (b.of('ride')) {
					b.I(0, -1000)
				}
			})
		})
	})
}
PORTAL = function () {
	W().P()
	HAE = function () {
		W().P()
		// w.clouds(100,200)
		// w.clouds(400,400)
		w.rub(100, 100)
		w.grass(400, 100)
		w.ice(300, 300)
		w.brick(200, 400, 80, 20)
		w.brick(300, 200, 80, 20)
		//$.joystick()
		w.p(600, 200).r(4)
		w.p(600, 200).r(4)
	}
	w.S(500, 600, 's', 30, 200)
	w.S(600, 600, 's', 30, 200)
	w.S(550, 550, 'z', 100, 20).K('warp')
	w.D(650, 580, 'd', 300, 80).K('tramp').r(5).d(10).aD(10).lD(10)
	p.warp = function () {
		this.XY(200, 100)
	}
	p.cl('warp', function () {
		p.warp()
	})
	p.cl('tramp', function () {
		p.I(0, -50000)
	})
}