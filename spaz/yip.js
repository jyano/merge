w.y = w.ship = function () {var w = this, g = G(arguments),
	
		hS, side, ship, y, o

	
	o = g.O ? g.f :  //pass opOb
		//pass {c='y'}, x=100, y=100, sc=4
			g.S_ ? {c: g.f, x: g.s, y: g.t, sc: g[3]} :
			{x: g.f, y: g.s, sc: g.t}
	o.c = o.c || 'y';
	o.sc = N(o.sc, 4);
	o.x = N(o.x, 100);
	o.y = N(o.y, 100)
	
	y = makeShip(o.x, o.y, o.sc * 4, o.c)
	y.push = function (frc) {
		$l('y.push')
		var y = this, g = G(arguments)
		frc = N(g.f, 1)
		ev = .5
		if (g.p) {
			_.ev(ev
					, function () {
						y.push(frc)
					})
		}
		else {
			y.I(y.vec().m(frc * 40))
		}
		return y
	}
	y.going = function () {
		var y = this,
				lv = y.lV()
		return M.a(lv.x) > 0.5 || M.a(lv.y) > 0.5 || M.a(y.aV()) > 0.5
	}
	if (!g.n) {
		y.cn('thrust')
	}
	y.shtSp()
	if (g.p) {
		y.tr()
	}
	return y.K('ship yip y').aD(0).r(.8)
	
	
	
}

function makeShip(x, y, size, color) {

	var y = w.D(x, y)
	
	
	y.pol(color,
			  [
			  
				[-size, size],
				  [0,  -size*4],
				  [size, size]
			  ]
	)
	
	
	y.fixedRot(false)
	y.SetBullet(true)
	return y
}



w.bu = w.bul = function () {$l('w.bu')

	 var w = this, g = G(arguments), o, bu
	 
	 
	// o = g.O? g.f, 
	 o= g.O_ ?  //pass {x,y},rad  OR x,y,rad
	 {x: g.f.x, y: g.f.y, r: g.s} :
			 N(g.s) ? {x: g.f, y: g.s, r: g.t} : 
			 {r: g.f}
	 
	 
	 
	 
	bu = Bul(o.x, o.y).fr(0).d(.1).r(.5)
	 
	
	function Bul(x, y, rad, c) {
		var bu = w.D(
		x, 
		y, 
		c || 'w', 
		N(rad, 8)
		
		
		)
		bu.K('bul bu')
		bu.SetBullet(true)
		return bu
	}
	
	
	
	
	bu.cl(function onColl(f) {
		if (!g.n) {
			this.xB()
		}
		if (g.p) {
			if (O(f) && F(f.xB)) {
				f.xB()
			}
		}
	})
	
	
	
	return bu.lD(0).aD(0)


	
	
	
 


}
 


 
 
b.bu = b.bul = function () {

$l('b.bu')
	 var b = this, g = G(arguments)
	 if (g.p) {
		 b.SetSensor(true)
	 }
	 return b
 }
 
b.sht = function () {
	 var b = this, g = G(arguments),
			 o = {k: g.f},
	 //just above b
			 bu = w.bu(
					 this.wP(0, -200)
			 )
	 bu.lV(b.vec().m(100))
	 bu.d(.5).lD(0).fR()
	 bu.K(o.k)
	 return bu
 }
 
b.shtSp = function (k) {
	 var b = this
	 $.space(function () {
		 b.sht(k)
	 })
	 return b
 }
 
b.cn = function (cn, o) {
	 var b = this, w = b.W()
	 //stop a current 'controls', if any
	 if (F(b._cn)) {
		 w.s.off('tick', b._cn)
	 }
	 if (U(cn)) {
		 return
	 }
	 if (S(cn)) {
		 cn = b2d.cn[cn]
	 }
	 if (F(cn)) {
		 b._cn = w.s.t(
				 function () {
					 cn(b, o)
				 }
		 )
	 }
	 return b
 }
 
b2d.cn.thr = b2d.cn.thrust = b2d.cn.t = function (p, mult) {
	 var vec
	 mult = N(mult, 200)
	 if ($.K.u) {
		 vec = p.vec().m(mult)
		 p.I(vec)
	 }
	 p.aV($.K.r ? 15 : $.K.l ? -15 : 0)
	 //  $l('vec: '+ parseInt(vec.x) + ', '+ parseInt(vec.y))
 } 
w.Y = function () {
	var w = this, g = G(arguments)
	y = $a(w, 'y', g)
	if (g.p) {
		y.track()
	}
	return w
}
b.vec = b.v = function () {
	var b = this, g = G(arguments), o, vec
	o = g.O ? g.f :
			g.s ? {x: g.f, y: g.s} : //this not error
			{y: g.f}
	vec = V(N(o.x, 0), N(o.y, -1))
	return b.GetWorldVector(vec)
}//the current direction of that vector in world coordinates
b.tow = b.towards = function (x, y, sp) {
	$l('b.tow')
	var b = this, lV
	__sp = function (s) {
		s = N(s, 5)
		s = 11 - (  s > 10 ? 10 : s )
		s *= 20
		return s
	}
	sp = N(sp, 5)
	sp = 11 - (  sp > 10 ? 10 : sp )
	sp *= 20
	lV = V(x - b.X(), y - b.Y()).d(sp)
	return b.lV(lV)
	//if(isBody(x)){return self(x.X(), x.Y(), y)}
//move towards x,y (or body?)
	//more realistic to accelerate, via forces?
	//these just thrust and dont
//otherwise apply forces to neighbors.  but what if
//they 'SUCKED' instead of 'thrusted' ?
//is that the same as having a gravitational inwards force?
//  y = $ys(300, 200, 3).angDamp(0).linDamp(1)
}
b.rTow = function (y) {
	$l('b.rTow')
	var b = this,
			a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
	if (y.Y() > b.Y()) {
		a += 180
	}
	b.rt(a)
	return b
}
b.shtEv = function (ms, k) {
	var b = this //= b.shootOnInt
	_.ev(N(ms / 1000, 0.4), function () {
		if (b.IsActive()) {
			b.sht(k)
		}
	})
	return b
}
SHP = function () {
	W()
	
	y = w.y()
}


STUM = function () {
	W({g: 3})
	y = w.y(300, 400, 3, '-')
	_.ev(.1, function () {
		var v = y.vec(0, 1.5)
		v = V(
				M.tD(v.x),
				M.tD(v.y)
		)
		y.I(0, v.y / 5).rt(2, '+')
	})
	//arm
	b = w.S(300, 300, 20, 200)
	a = w.S(300, 300, [['b', 200, 50, 100, 0]])
	_.ev(.1, function () {
		a.rt(1, '+')
	})
}
TOW = TOWARD = function () {
	W({g: 0}).C('z').Y()
	ball = w.D(500, 300, 'r', 100)
	bY = w.y('b', 100, 200, 6, '-')
	bY.shtEv(.2)
	//y.aD(1).lD(1).r(0).fr(1).K('guy')
	T.t(function () {
		bY.tow(ball.X(), ball.Y(), 9)
		bY.rTow(y)
	})
	return
	_.t(5, function () {
		w.y('b', R(500, 50), R(500, 50))
	})
	w.b(function (cx) {
		cx.w('ship', 'bul', function (bul, cx) {
			this.kill()
		})
	})
	w.D(200, 200, 'b', 80).d(1).K('bad')
	w.D(200, 200, 'r', 150, 150).d(1).K('bad')
	w.cl('bul', 'bad', function (b) {
		if (this.B()) {
			this.B().kill()
		}
		if (b.B()) {
			b.B().kill()
		}
	})
}
OBST = OBSTACLES = function () {
	W(10).Y()
	_.t(20, function () {
		w.S(R(500), R(500), $r(), 20)
	})
}
BIG = BIGSHIP = function () {
	W([1200, 600, 2400, 600], {g: 0})
	w.y({
		c: 'b',
		sc: 20
	}, '+')
}
COLSHIP = function () {
	W().G(1)//.C('z').pen('welcome to tensor (damping) controller - the timing here is amazing!')
	y = w.y()
	co = w.tCo()
	co.B(
			r = w.D(100, 100, 'r', 100).lV(10, 20).grp(-1).lD(.2),
			b = w.D(500, 500, 'b', 90).lV(-10, -20).grp(-1).lD(.2),
			y = w.D(300, 300, 'y', 70).lV(-10, -20).grp(-1).lD(.2)
	)
	o = w.D(300, 300, 'o', 70).lV(-10, -20).grp(-1).lD(.2)
	_.t(30, function () {
		var b = w.D(400, R(300, 100), 'o', 20)
		b.lV(10, 20).lD(0)
		b.lV(10, 20)
		b.f().grp(-1)
		co.B(b)
	})
	y.grp('-1')
	w.r_.cl(function (f) {
		f.C('b');
		co.xB(f)
	})
	l = w.m_controllerList.GetBodyList()
}
WAR = function () {
	W({g: 0})
	var n = 0, x = 150, Y = 150
	w.cl('bul', 'bad', function (bad) {
		this.B().kill();
		bad.B().kill()
	})
	_.t(15, function () {
		w.y($r(), x += 4, Y += 2, 3, '-')
				.K('bad').rt(R(90))
				.push(20, '+')
				.shtEv(300, 'deathBall')
	})
}
TRAP = function () {
	W(0).C('r')
	co = w.tCo()
	y = w.y()
	rot = 45
	bg = w.y('b', 500, 300, '-')
	bg.shtEv()
	bg.stat()
	T.t(function () {
		bg.rTow(y)
	})
	_.t(3, function () {
		co.B(
				w.y('z', R(500, 50), R(300, 50), '-').lV(10, 20).lD(0)
				//  w.D(400,300, 'z',10,10)
		)
	})
}
STAB = function () {
	W({g: 0})
	w.S(200, 200, 'b', 50, 260)
	w.S(140, 200, 'd', 140, 50)
	co = w.tCo();
	_.t(10, function () {
		co.B(
				w.D(R(1000, 100), 300, 'x', 30).lV(10, 20).lD(0))
	})
	hits = 0
	y = w.y().K('ship').lD(5)
	bg = w.y('b', 500, 300, '-').d(3).lD(2).K('bg').aD(.2)
	bg.rotTowards = function (y) {
		var b = this, a
		a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
		if (y.Y() > b.Y()) {
			a += 180
		}
		b.rt(R(40, a - 20))
	}
	_.ev(.5, function () {
		bg.aV(0);
		bg.rotTowards(y)
	})
	bg.push(50, '+')
	T.t(function () {
		_.t(20, function () {
			bg.I()
		})
	})
	w.b(function (cx) {
		var i
		if (cx.w('ship', 'bg')) {
			i = cx.m().m_points[0].m()
			_.in(.1,
					(
					M.lD(V(i.x, i.y), V(y.X(), y.Y())) >
					M.lD(V(i.x, i.y), V(bg.X(), bg.Y()))
					) ?
							function () {
								hits++;
								w.C('g');
								bg.XY(300, 300);
								y.XY(700, 400)
							}
							:
							function () {
								w.C('p');
								bg.XY(700, 400);
								y.XY(100)
							})
		}
	})
	//w.show(function(){return 'hits: '+ hits})
}