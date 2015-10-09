b2d.cn.j = b2d.cn.jump = function (p) {
	
	/* p.vX(
	 K.r?200 :
	 K.l?-200 :0)
	 if(K.u && p.onG){
	 p.vY(-1000)
	 }*/
	var m = p.mass()
	if (p.inAir()) {
		if ($.K.r) {
			p.I(m / 2, 0)
		}
		else if ($.K.l) {
			p.I(-m / 2, 0)
		}
		p.I(0, m * 3)
	}
	else {//on ground
		if ($.K.u) {//initiate a jump
			if ($.K.r) {
				p.lV(m, -m * 4)
			}
			else if ($.K.l) {
				p.lV(-m, -m * 4)
			}
			else {
				p.lV(0, -m * 8)
			}
		}
		else {//not jumping, may be running
			if ($.K.r) {
				p.lV(m * 2, 0)
			}
			else if ($.K.l) {
				p.lV(-m * 2, 0)
			}
			else {
				p.lV(0, 0)
			}
		}
	}
	if ($.K.d) {
		p.I(0, m * 3)
	}
}
w.ramps = function () {
	var w = this
	w.ramp(
			[400, 350, 200, 300, 100],
			[500, 350, 300, 300, 60],
			[600, 350, 200, 300, 100],
			[700, 350, 300, 300, 60],
			[800, 350, 200, 300, 100],
			[1000, 350, 300, 300, 60],
			[1030, 350, 200, 300, 100],
			[1200, 350, 300, 300, 60])
	return w
}
w.bricks = function () {
	var w = this, g = G(arguments)
	_.e(g, function (g) {
		w.S.apply(w, g)
	})
	return w
}
w.grid = function (grid, x, y, len, spacing) {
	var w = this, b
	var gridDrawer = function (x, y, len, spacing) {
				b = w.D(x, y)
				len = N(len, 30);
				spacing = N(spacing, 20)
				return function (x, y) {
					b.rec(len, len, x * spacing, y * spacing).C('r').d(1).fr(0.5).r(.2)
					return b
				}
			},
			drawWall = gridDrawer(x, y, len, spacing)
	_.t(grid.length, function (row) {
		_.t(grid[0].length, function (c) {
			if (grid[c][row]) {
				drawWall(row, c)
			}
		})
	})
	return b.K('grid')
}
w.rR = w.randRects = function (ob) {
	var w = this, g = G(arguments),
			o = g.O ? g.f : {y: g.f, z: g.s}
	o.y = N(o.y, 0)
	o.z = N(o.z, 1)
	_.t(20,
			function (i) {
				w.S(R(1100, 20), R(150, 40 + o.y), $r(),
						R(40, 15) * o.z, R(40, 15) * o.z).K('randomRect rR')
			})
	return w
}
w.plat = function me(x, y, W, H) {
	var w = this, g = G(arguments)
	if (A(g[0])) {
		_.e(g, function (g) {
			me.apply(w, g)
		})
		return w
	}
	x = _.tN(x, 60)
	y = _.tN(y, x)
	W = _.tN(W, 30)
	H = _.tN(H, W)
	return w.S(x, y, 's', W, H)
			.r(0.3)
			.fr(2)
			.K('plat')
}
w.clod = w.clouds = function (lX, y) {
	var w = this
	lX = N(lX, 100)
	y = N(y, 75)
	_.t(100, function () {
		w.S(R(400) + lX, y, $r(), R(30))
	})
	return w
}
w.rub = w.rubber = function (x, y, len) {
	var w = this, rub
	len = N(len, 200)
	x += len / 2
	return w.S(x, y).rec({
		w: len, h: 20, c: 'r', s: 1
	}).fr(.3).r(.7)
}
w.grass = function (x, y, len) {
	var w = this
	len = N(len, 200)
	x += len / 2
	return w.S(x, y, 'g', len, 20).fr(.3).r(.3)
}
w.ice = function (x, y, len) {
	var w = this
	len = N(len, 200)
	x += len / 2
	return w.S(x, y, 'w', len, 20).fr(0).r(0)
}
w.ramp = function me(x, y, W, H, a) {
	var w = this, g = G(arguments)
	if (A(g[0])) {
		_.e(g, function (g) {
			me.apply(w, g)
		})
		return w
	}
	o = O(g[0]) ? g[0] : {x: g[0], y: g[1], w: g[2], h: g[3], a: g[4]}
	o.x = N(o.x, 300)
	o.y = N(o.y, 300)
	o.w = N(o.w, 100)
	o.h = N(o.h, 100)
	o.a = N(o.h, 10)
	o.c = o.c || 'y'
	return w.S(o.x, o.y, o.c, o.w, o.h).rot(a).DFB(1, 0, 0)
}
w.goal = function (x, y) {
	w.S(x - 20, y - 15, 'y', 10, 40)
	w.S(x, y, 'y', 40, 10)
	w.S(x + 20, y - 15, 'y', 10, 40)
}
w.buck = w.sensorBucket = function (x, y, k) {
	var w = this, sens
	x = N(x, 320)
	y = N(y, 245)
	k = k || 'sensorBucket buck'
	w.S(x - 150, y - 15, 'r', 20, 200)
	w.S(x + 150, y - 15, 'r', 20, 200)
	w.S(x - 200, y - 120, 'r', 320, 20, 200, 200)
	return w.S(x, y, 'd', [[280, 170, '-']]).K(k)
}
w.stars = function (n) {
	$l('w.stars')
	var w = this
	_.t(N(n, 30), function () {
		w.D(R(1000, -500), R(800, -400), 'w', 2).den(0).rest(2)
	})
	return w
}
w.coin = function (x, y) {
	var w = this, c
	x = _.tN(x, R(600))
	y = _.tN(y, R(300))
	c = w.D(x, y, 'y', 20).K('coin').bo(0).den(0).lD(0)
	c.I(R(15, -5), R(15, -5))
	c.warp()
	return c
}
