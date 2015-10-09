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
