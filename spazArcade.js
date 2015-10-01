levs()
chars()
function levs() {
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
	w.coin = function (x, y) {
		var w = this, c
		x = _.tN(x, R(600))
		y = _.tN(y, R(300))
		c = w.D(x, y, 'y', 20).K('coin').bo(0).den(0).lD(0)
		c.I(R(15, -5), R(15, -5))
		c.warp()
		return c
	}
	w.me = function () {
		alert('real w.me in JFAL')
	}
	b.warp = function (p) {
		$l('b.warp')
		var b = this, w = b.W()
		cjs.t(function () {
			if (b.Y() < 0) {
				b.Y(w.H)
			}
			if (b.Y() > w.W) {
				b.Y(0)
			}
			if (b.X() < 0) {
				b.X(w.W)
			}
			if (b.X() > w.W) {
				b.X(0)
			}
		})
		return b
	}
	w.stars = function (n) {
		$l('w.stars')
		var w = this
		_.t(N(n, 30), function () {
			w.D(R(1000, -500), R(800, -400), 'w', 2).den(0).rest(2)
		})
		return w
	}
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
	scrolling()
	orbit()
	terr()
	function scrolling() {
		w.tr = w.track = function (t, cX, cY, bf) {
			var w = this
			//i can leave the world-centering in fw
			// can optionally filter it with scale itself
			//  has limits now!  and more..
			// tis is the ultimate!
			if (U(t)) {
				t = w._trackee
			}
			w.t = t
			cX = N(cX, w.W / 2)
			cY = N(cY, w.H / 2)  //option to set based on t's CURRENT X/Y?
			if (bf == '!') {
				T.t(function () {
					var sX, sY
					sX = w.z * (t.X() - cX)
					sX = sX * 1 / ( 1 + w.hW / w.w )
					sY = w.z * (t.Y() - cY)
					sY = sY / (1 + w.hH / w.h)
					w.sXY(sX, sY)
				})
			}
			else if (bf == '-') {
				T.t(function () {
					w.s.x = (cX - t.X()) * w.z - w.W * (w.z / 2 - .5)
					w.s.y = (cY - t.Y()) * w.z - w.H * (w.z / 2 - .5)
				})
			}
//w.S(cX,cY,'o',[ [40,400,'-']]) // w.dbCross(cX,cY) //  w.dot(cX,cY,'+')
			else if (O(bf)) {
				bf.x = N(bf.x) ? bf.x : w.w / 2
				bf.y = N(bf.y) ? bf.y : w.h / 2
				bf.w = N(bf.w) ? bf.w : 0
				bf.h = N(bf.h) ? bf.h : 0
				bf.mX = N(bf.mX) ? bf.mX : 1
				bf.mY = N(bf.mY) ? bf.mY : 1
				w.S(bf.x, bf.y, 'r', [[bf.w, bf.h, '-']])
				w.S(bf.x, bf.y, 'w', [[bf.w + 20, bf.h + 20, '-']])
				w.S(bf.x, bf.y, 'b', [[bf.w, w.h, '-']])
				w.S(bf.x, bf.y, 'b', [[w.w, bf.h, '-']])
				w.S(bf.x, bf.y, 'z', [[10, 10, '-']])  //sensor works but ony for rect (or at least not for circ)
				w.S(bf.x, bf.y, 'w', [[bf.w, bf.h, '-']]) //  w.dot(bf.x-bf.w/2, bf.y-bf.h/2  ,     '+')
				T.t(function () {
					var sX, sY
					// sX = (bf.x-w.hW)   + cjs.adj( (t.X()-bf.x),  bf.w/2)/w.z
					sX = bf.x - w.hW + cjs.adj(t.X() - bf.x, bf.w / 2) * bf.mX /// bf.mX //scaling not needed?
					sY = (bf.y - w.hH) + cjs.adj(t.Y() - bf.y, bf.h / 2) * bf.mX// /bf.mY
					w.sXY(sX, sY)
				})
			}
			else {
				
				//each tick, literally just sets w.sXY() based on:
				// world dimensions, world zoom, and trackee position
				T.t(function () {
					var dX, dY
					//run pre-scroll hook cb's
					if (F(w.t.cb)) {
						w.t.cb()
					}
					if (w.track.cb && F(w.track.cb)) {
						w.track.cb()
					}
					// if the designated trackee optionally has its own cb,
					// that over rules the (also optional) 'w.track.cb' cb
					dX = t.X() - cX
					dY = t.Y() - cY
					w.sX(w.z * w.hW + w.z * dX - w.hW)
					w.sY(w.z * (w.hH + dY ) - w.hH)
				})
			}
			return w
		}
		w.sXY = function (x, y) {
			$l('sXY')
			if (U(x)) {
				return {}
			}
			this.sX(x)
			this.sY(y)
			return this
		}
		w.sXCap = function (s) {
			return cjs.cap(s, 0, this.w * this.z - this.W)
		}
		w.sX = function (x) {
			var w = this
			if (U(x)) {
				return -this.s.x
			}
			this.s.x = -this.sXCap(x)
			return w
		}
		w.sYCap = function (s) {
			return cjs.cap(s, 0, this.h * this.z - this.H)
		}
		w.sY = function (y) {
			var w = this
			if (U(y)) {
				return -w.s.y
			}
			w.s.y = -w.sYCap(y)
			return w
		}
		b.tr = b.track = function (x, y, z) {
			var b = this, w = b.W()
			w.track(b, x, y, z)
			return b
		}
		w.Z = function (s) {
			//get/set zoom.. ok cool :)
			var w = this
			if (U(s)) {
				return w.z
			}
			w.z = s == '-' ? w.mS : cjs.cap(s, w.mS)
			w.s.sXY(w.z)
			return w
		}
		b.centerScale = function (z) {
			var b = this, w = b.W()
			w.s.sXY(z)
			w.s.X(
					w.hW - (  (b.X() - w.hW) * z)
			)
			w.s.Y(w.hH - ((b.Y() - w.hH)) * z)
			return b
		}
		w.zoomOut = function () {
			var w = this //knows when to stop :)
			w.tCb = function () {
				w.Z(cjs.cap(w.z *= .98, w.mS))
			}
			return w
		}
		w.zoomIn = function () {
			var w = this
			w.tCb = function () {
				w.Z(cjs.cap(w.z *= 1.02, 0, 4))
			}
			return w
		}
		w.inout = function () {
			var w = this, // now it works!!!!
					s = 1,
					up = true
			w.t.cb = function () {
				if (up) {
					if (s < 2) {
						s += .2;
					}
					else {
						up = false
					}
					w.Z(s)
				}
				else {
					if (s > .8) {
						s -= .2
					}
					else {
						up = true
					}
					w.Z(s)
				}
			}
			return w
		}
		w.showOff = function () {
			var w = this
			zin()
			function zout() {
				w.zoomOut();
				_.in(10, zin)
			}
			
			function zin() {
				w.zoomIn();
				_.in(4, zout)
			}
			
			return w
		}
		w.pan = function (o) {
			var w = this, g = G(arguments), o = g[0],
					mZ = w.mZ,
					MZ = mZ * 3,
					z = w.mZ * 3, up = true,
					l
			if (g.m) {
				l = function () {
					up = z > w.mZ * 3 ? false :
							z < w.mZ ? true :
									up
					z *= up ? 1.01 : .9
					w.Z(z / w.mZ)
				}
			}
			else {
				l = function () {
					up = z > w.mZ * 3 ? false : z < mZ ? true : up
					z += up ? .03 : -.03
					w.Z(z / w.mZ)
				}
			}
			w.track.cb = l
			return w
		}
		w.tX = function (t) {
			var w = this
			if (U(t)) {
				return w.tSpr.X()
			}
			w.tSpr.X.apply(w.tSpr, arguments)
			return w
		}
		w.tY = function (t) {
			var w = this
			if (U(t)) {
				return w.tSpr.Y()
			}
			w.tSpr.Y.apply(w.tSpr, arguments)
			return w
		}
		w.tXY = function (x, y) {
			var w = this
			if (U(x)) {
				return {x: w.tX(), y: w.tY()}
			}
			y = N(y) ? y : x
			return w.tX(x).tY(y)
		}
		w.tRightLeft = function () {
			var w = this, left
			T.t(function () {
				if (!left) {
					w.tX(10, '+')
					if (w.tX() > 2000) {
						left = 1
					}
				}
				else {
					w.tX(10, '-')
					if (w.tX() < 400) {
						left = 0
					}
				}
			})
			return w
		}
		refMakeWorldScrollCode = function () {
			alert('refMakeWorldScrollCode')
			w.t = w._t = w._t || w.S(w.hW, w.hH, 'w', [[20, 2, '-']]).r(.8) //trackee
			w.i.A(w.tSpr = $Ct().XY(w.t.X(), w.t.Y())) //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)
			T.t(function () {
				if (F(w.t.cb)) {
					w.t.cb()
				} else if (F(w.tCb)) {
					w.tCb()
				} // actually calls the callbacks
				// i see w.sXCap and w.sYCap.. i think they limit the scroll distances
				//distances are simply calculated and assigned right to **** w.s *****
				//so it moves the actual stage... (dont worry, not the canvas)
				w.s.x = -w.sXCap((w.t.X() - w.hW + w.hW) * w.z - w.hW)
				w.s.y = -w.sYCap((w.t.Y() - w.hH + w.hH) * w.z - w.hH)
				if (w.t == w._t) {// if the trackee is the generic one that world provided...
					//have it bind to 'tSpr'.. some dumb tim graphic.. i think i can lose this part real soon
					w.t.XY(
							w.tSpr.X(),
							w.tSpr.Y()
					)
					w.s.rot(w.tSpr.rot())
				}
			})
		}
		STREET = function () {
			W([1200, 600, 1400, 1200], {g: 300, t: 0})
			w.S(700, 1000, 'r', 800, 20)
			w.S(500, 800, 'g', 200, 20)
			w.S(900, 600, 'x', 200, 20)
			p = w.p(700, 600)
			w.fg.A(p.sp())
			w.track(p, 600, 400,
					{x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
		}
		SPUFF = function () {
			W(800, 600, 800, 800).G(0)
			w.S(200, 500, 'g', 100, 100);
			w.S(500, 500, 'w', 100, 100);
			w.S(1000, 500, 'r', 100, 100);
			w.S(1500, 500, 'g', 100, 100)
			y = w.ship(100, 100).rt(200)
			w.track(y, 500, 500, {x: 1000, y: 1000, w: 400, h: 400})
			BUFFER = function () {
				W([1200, 600, 4800, 1600], {g: 0, t: 0})//.mark()//.dot(600,300,'*').dot(1200,600,'*')
				y = w.ship(100, 100).damp(1, 10).rot(90).lD(2).aD(2)
						.rot(120)//.lV(1)
				w.bufFoll(y, 600, 300, {
					x: 800, y: 300, mX: .8, mY: .8, w: 200, h: 200
				})
				// w.Z(.8)
			}
		}
		SLY = function () {
			W([1200, 600, 2400, 1000], {g: 300}).P()
			w.right.kill();
			w.left.kill()
			w.track(p, 300, 400, {
				x: 1200, y: 700,
				w: 800, h: 500,
				mX: 10, mY: 10
			})
		}
		SCROLLNOLIM = function () {
			W([1200, 600, 2400, 1200], {g: 0})
			w.S(1200, 300, 'r', 400, 100)
			w.S(1200, 600, 'w', [[100, 100, '-']])
			w.S(1200, 900, 'r', 400, 100)
			y = w.ship(100, 100).rot(120).damp(1, 10)
			w.Z(.8)
			w.track(y, 600, 300, '-')
			w.dragScale = function () {
				var w = this,
						pX = 0, pY = 0, pmX, pmY, o = {}
				c = $(w.i.canvas)
				c.mousedown(function (e) {
					o.Scl = w.z
					o.Y = e.clientY
				})
				c.pressmove(function (e) {
					var x = e.clientX,
							y = e.clientY,
							newSc = o.Scl + (o.Y - e.clientY) * .005
					newSc = newSc > 5 ? 5 : newSc < .8 ? .8 : newSc
					w.Z(newSc)
				})
				return this
			}
			w.dragScale()
		}//fix
		SHOWOFF = function () {
			W([1200, 600, 2400, 600], {g: 10})
			y = w.ship(50, 50).track()//.P(100,1000)
			w.S(400, 2500, 'r', 200, 100)
			w.S(800, 2300, 'z', 100, 100)
			w.S(1200, 2300, 'b', 300, 100)
			w.S(1600, 2300, 'z', 100, 100)
			w.S(2000, 2300, 'r', 200, 100)
			_.times(10, function (i) {
				w.D(100 + i * 100, 100, $r(), 35).den(.1)
			})
			w.showOff()
		}
		ZOOMSCALE = function () {
			W([1000, 1000], {
				g: 0, t: 0
			})
			w.dragX = function () {
				var w = this, d
				w.i.c.m({
					mD: function (x) {
						d = x - w.s.x
					},
					pM: function (x) {
						w.s.x = x - d
					}
				})
				return w
			}
			w.dragY = function () {
				var w = this, d
				w.i.c.m({
					mD: function (x, y) {
						d = y - w.s.y
					},
					pM: function (x, y) {
						w.s.y = y - d
					}
				})
				return w
			}
			w.drag = function () {
				return this.dragX().dragY()
			}
			// w.s.HUD.dot(500, 500)
			y = w.ship(100, 100).rot(200)
			w.S(500, 500, 'o', 200)
			w.S(500, 500, 'r', 10)
			w.S(200, 200, 'm', 40)
			w.S(800, 200, 'b', 60)
			w.S(800, 800, 'l', 80)
			w.S(200, 800, 'g', 100)
			//w.inout()
			w.drag()
			r = $.rg().A() //range
			r.abs(775, 500)
			r.css('transform', 'rotate(90deg)')
			r.W(500).val(0)
			T.t(function () {
				w.Z(r.val() / 25 + 1)
			})
		}
	}
	
	track()
	function track() {
		CUPBALL = function () {//should zoom in when near cup
			CUPS()
			b = w.D(w.W / 2, w.H / 2, 'w', [[10]]).r(.8).track()
			cjs.tick(function () {
				b.F(0, -20)
			})
			w.showOff()
		}
		TRACKEE = function () {
			W([1200, 600, 2400, 600], {g: 10})
			w.S(400, 2500, 'r', 200, 100)
			w.S(800, 2300, 'z', 100, 100)
			w.S(1200, 2300, 'b', 300, 100)
			w.S(1600, 2300, 'z', 100, 100)
			w.S(2000, 2300, 'r', 200, 100)
			_.times(10, function (i) {
				w.D(100 + i * 100, 100, $r(), 35).den(.1)
			})
			y = w.ship(50, 50).mid()
			y2 = w.ship(100, 300).C('x').rot(180)
			//i thought i may want t for timer/ticker.. but time has no x and y !
			//move the stage by manipulating the trackee x,y
			//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
			w.tRightLeft()
			w.showOff()
			setTimeout(function () {
				setInterval(function changeT() {
					if (w.t == y2) {
						w.C('b');
						w.t = y
					} else {
						w.C('z');
						w.t = y2
					}
				}, 5000)
			}, 5000)
		}
		CAMFOLLOW = function () {
			W(500, 500, 1600, 1000).G(0)
			a = w.ship().C('b')
			b = w.ship(400, 400).C('o').track()
			I(5, function () {
				if (w.follA) {
					b.track();
					w.follA = 0
				}
				else {
					a.track();
					w.follA = 1
				}
			})
		}
		CB = TRACKEECB = function () {
			W([1200, 600, 2400, 1200], {g: 300})
			_.t(10, function (i) {
				w.D(100 + i * 100, 100, $r(), 35).d(.1)
			})
			w.Z('-')
			p = w.p(1175, 100)
			w.t = p // no need to call track?
			_.ev(1, function () {
				w.t.cb = function () {
					w.Z(w.z + .001)
				}
			})
		}
	}
	
	auto()
	function auto() {
		AUTO = function () {
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
	}
	
	function orbit() {
		_grid = [
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
		b.horizCenter = function () {
			var b = this;
			b.X(b.W().hW);
			return b
		}   //-> b.X('hC')//b.g=function(){ return this.f().g }
		CLOOT = CLICKSHOOT = function () {
			W({g: 0})
			p = w.me(800, 300).aD(10000)
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
		TALK = function () {
			W({g: 0, w: 0})
			score = 0
			shots = 0
			p = w.me(500, 300).stat()
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
		SPACE = function () {
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
	
	function terr() {
		MEET = function () {
			W([1200, 600, 1200, 600], {g: 10})
			//  w.l(600,0,700,500)//hud
			//  w.l(1000,200, 100,900,'-') //red
			//  w.l(50,50,500,350,'/')
			//  w.l(200, 200, 500,500,'+')
			//  _.t(10, function(i){w.D(100+i*40,100).cir({r:35,lf:{c1:'*',c2:'*'}}).d(.1);w.D(100+i*40,100).cir({r:20,lf:1}).d(.1)})
			/*
			 _.t(10, function(i){
			 w.D(100+i*140,160).cir({r:50,
			
			 rf:{
			 c1:$r(),
			 c2:$r(),
			 }
			 }).den(.1)})
			
			
			 w.D(800, 300).cir({r:120,
			 C:'y',   l:2,  bf:'me', ls:['y','x']//?
			 }).den(.1)
			
			
			 */
			//i thought i may want t for timer/ticker.. but time has no x and y !
			//move the stage by manipulating the trackee x,y
			//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
			//  y = w.ship(50,50 ).C('d').mid().track()
			y2 = w.y(100, 300)//.C('x').rot(180)
			//w.tRightLeft();//w.showOff()
			_.evx(5,
					function () {
						if (w.t == y2) {
							w.C('w');
							w.t = y
						}
						else {
							w.C('z');
							w.t = y2
						}
					})
			/* w.S(800,300,'r',200,800)
			 .cl('bul',function(bu){
			 this.sub( bu.B().exp(),'-')})
			
			
			 w.S(200,300,'r',200,800).cl('bul',function(bu){bu=bu.B()
			 var v=bu.pos()
			 bu.kill()
			 w.pol(v.x,v.y,
			 M.p([[0,50],[-50,0],[0,-50],[50,0]])
			 ).stat()})
			 */
			//y.track()
			t = w.S(500, 300, 'g', 200, 800)
			t.cl(//'bul',
					function (bu) {
						var v
						bu = bu.B()
						v = bu.XY()// v=bu.kill()
						p = M.p([[0, 100], [-100, 0], [0, -100], [100, 0]]).ger(v)
						w.rad(v.x, v.y, 15, function (f) {
							f.sub(p)
						})//t.fs(function(f){f.sub(p)})
						t.fs(function (f) {
							f.C($r())
						})
					})
			/*
			 //pol
			 w.D(200,300).pol({
			 v:[[0,100],[0,-100],[200,-150],[200,150]],
			 c:'y',C:'w',l:5,
			 bm:1})
			 w.D(800,300).pol({
			 v:[
			 [[5,100],[0,-100],[200,-150],[200,150]],
			 [[-50,50],[-50,-100],[450,-50],[450,50]]
			 ],
			 c:'b',C:'X',
			 bm:1})
			
			
			
			 b=w.D(100,300)
			 pf = b.pol({s:1, C:'y',
			 v:[[-200,-100],[0,-200],[100, -100]] })
			 pfs =  b.pol({s:1, C: 'o',
			 v: [  [-100, 0],  [0, -200],  [100, 20],    [0, -150] ]})
			
			
			 cf = b.cir({k:'cir', r:100, x:200, y:-100, d:.2, b:.8, f:100, C:'x'})
			 rf = b.rec({x:100, y:100,w:10,  h:100,   C:'x'})
			 */
			/*
			 //turtle
			 turtle =[
			 ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
			 ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
			 ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
			 ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
			 ['x', 10, 55,-12],
			 ['u', 30,40, 75,-12]]
			 w.D(400, 280,turtle, '-')  //this changes the data object for future uses !!!
			 w.D(600, 280, [
			 ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
			 ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
			 ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
			 ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
			 ['x', 10, 55,-12, '-'],
			 ['u', 30,40, 75,-12 ,'-']])
			 */
		}
		SEB = function () {
			W({g: 1})//w.show(function(){return b.num()})
			b = w.D(800, 300, 'r', 200, 800).stat().K('terr')
			y = w.y().lD(3).X(1100)
			p = w.p(200, 400).K('jason');
			//setTimeout(function () {p.sprite.sXY(.5)}, 1000)
			can = true
			w.b(function (cx) {
				var fixt, j, bull, terr, bX, bY, br
				if (fixt = cx.w('bul', 'terr')) {
					bull = fixt[0].B()
					terr = fixt[1].B()
					bX = bull.X()
					bY = bull.Y()
					bull.kill()
					if (can) {
						can = false
						// b.minusPolyCirc(bX, bY, 100, 7)
						poly = M.p(_.m(b2d.pC(100, 7), function (v) {
							return [v.x + b.X(), v.y + b.Y()]
						}))
						// verts = b.sub(poly)
						br = w.pC(bX, bY, 100, 7)  // b.sub(br) // b.verts not working :(
						b.sub(br, '-') // br.kill()
						//  b.color('r')
						can = true
					}
				}
				else if (fixt = cx.w('jason', 'bul')) {
					$l('bullet hit jason!!!!');
					j = fixt[0].body();
					//j.sprite.tween([{sxy:20, r:100}, 1000])
				}
			})
			f = function () {
				v = h.verts()
				v.unshift('b')
				v.unshift(200)
				v.unshift(200)
				w.B.apply(w, v)
			}
			killIfSmallx = function (f) {
				var area = f.area();
				if (area < 20) {
					$l('too small: ' + area);
					f.kill()
				}
			}
		}
		TERREASEL = function () {
			z()
			s = stage = $St(1600, 600).A()
			h = s.h()
			h.f('b').dc(200, 200, 10)
			h2 = s.h().X(700)
			h2.f('b').dc(0, 0, 10)
			tile = function (i, j) {
				return [V(-5 + i, 130 + j), V(-5 + i, 80 + j), V(45 + i, 80 + j), V(45 + i, 130 + j)]
			}   // lower left //upper left//upper right//lower right
			draw = function () {
				terr = []
				_.t(13, function (i) {
					_.t(8, function (j) {
						terr.push(tile(i * 50, j * 50))
					})
				})
				h.drawPolygons(terr, 'b', 'r')
			}
			draw()
			t = M.p(terr[101])
			doExplosion = function (e) {
				v = V(e.stageX, e.stageY)
				exP = circ(v, 100)
				h.drawPolygon(exP, 'z')
				c = Math.p(exP) // for each existing terrain polygon, check the difference between the polygon itself and the
				// explosion polygon. This should be optimized in some way, checking only for terrain polygons
				// which are actually affected by the explosion.
				// Then we remove the terrain polygon from the array, and we add the resulting polygon(s) after
				// difference is calculated.
				iX = c.intersection(t)
				h2.drawPolygon(iX.verts())
				for (var i = terr.length - 1; i >= 0; i--) {
					totalArea = 0
				}
			} // resultPolygons =   terr[i].intersection(exP)// terr.splice(i,1)// for (var j =0; j<resultPolygons.length; j++) {terr.push(resultPolygons[j])}
			circ = function (v, rad, prec) {
				prec = N(prec) ? prec : 20
				arr = [];
				ang = 2 * Math.PI / prec
				_.times(prec, function (i) {
					pX = v.x + rad * Math.cos(ang * i)
					pY = v.y + rad * Math.sin(ang * i)
					arr.push(V(pX, pY))
				})
				return arr
			} // listeners: basically we destroy the terrain with a mouse click or a mouse drag
			// stage.on('mousedown', function(){stage.on('mousemove', doExplosion)})
			// stage.on('mouseup', function(){stage.off('mousemove', doExplosion)})
			stage.on('click', doExplosion)
			vv = [V(645, 480), V(595, 480), V(595, 430), V(645, 430)] //lower right//lower left//upper left//upper right
			h.drawPolygon(vv, 'z')
			vvv = [V(645, 380), V(595, 380), V(595, 372), V(617, 369), V(645, 373)]
			h.drawPolygon(vvv, 'z')
		}
		TERR = function () {
			W()
			explosion = function (x, y) {
				var c, b
				c = w.pC(x, y, 30, 5)
				b = b2d.sep(circ(V(0, 0), 30, 5)).XY(x, y)
				return {c: c, b: b}
			}
			sep = b2d.sep()
			terr = w.ter()
			w.dot(420, 200);
			w.dot(410, 210)
			t = terr[103]
			/*
			
			
			
			 s = b2d.sep(t.b.f().vs()).stat()//.XY(100,100)
			 exp = explosion(740, 395)
			 M.p(exp.cir)
			
			 dif = t.poly.D(exp.cir)
			
			 t.b.f().kill()
			
			
			 bb = b2d.sep(t.b, dif.vs()).stat().XY(0, 0)
			
			
			 // setTimeout( function(){ t.bod.X(20) }, 2000)
			
			 */
		}
		TER = function () {
			W().C('z')
			terr = w.ter()
			w.dot(420, 200);
			w.dot(410, 210)
			t = terr[103]
			fn = function (f) {
				f.B().kill()
			}
			o = {x1: 550, y1: 250, x2: 600, y2: 500, fn: fn}
			// w.Q(o)
			w.rad(550, 250, 35, fn)
		}
	}
}
function chars() {
	maro()
	yip()
	badG()
	function maro() {
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
		b.inAir = function () {
			var b = this, onG = false
			this.cxs(function (cx) {
				if (cx.IsTouching()) {
					cx.w('feet',
							function () {
								if (this.of(b)) {
									onG = true
								}
							})
				}
			})
			return !onG
		}
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
		w.P = function (x, y, sc) {
			var w = this,
					g = G(arguments)
			p = w.p(N(g.f, w.hW), N(g.s, w.H - 50), N(sc, 2))
			if (g.p) {
				p.tr()
			}
			return w
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
		}
		HIDESEEK = function () {
			W([1200, 600, 1400, 1200], {g: 300, t: 0})
			w.S(700, 1000, 'r', 800, 20)
			w.S(500, 800, 'g', 200, 20)
			w.S(900, 600, 'x', 200, 20)
			p = w.p(700, 600)
			w.fg.A(p.sp())
			w.track(p, 600, 400,
					{x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
		}
	}
	
	function yip() {
		w.bu = w.bul = function () {
			var w = this, g = G(arguments), o, bu
			o = g.O_ ?  //pass {x,y},rad  OR x,y,rad
			{x: g.f.x, y: g.f.y, r: g.s} :
					N(g.s) ? {x: g.f, y: g.s, r: g.t} :
					{r: g.f}
			bu = Bul(o.x, o.y).fr(0).d(.1).r(.5)
			bu.cl(onColl)
			return bu.lD(0).aD(0)
			function Bul(x, y, rad, c) {
				c = c || 'w'
				rad = N(rad, 8)
				var bu = w.D(x, y, c, rad).K('bul bu')
				bu.SetBullet(true)
				return bu
			}
			
			function onColl(f) {
				if (!g.n) {
					this.xB()
				}
				if (g.p) {
					if (O(f) && F(f.xB)) {
						f.xB()
					}
				}
			}
		}
		b.bu = b.bul = function () {
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
		w.y = w.ship = function () {
			var w = this, g = G(arguments), hS, side, ship, y, o
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
			function makeShip(x, y, hS, c) {
				var side = hS * 2, y
				y = w.D(x, y)
				y.pol(oO('c', c), [
					[-hS, hS], [0, -side * 2], [hS, hS]
				])
				y.fixedRot(false)
				y.SetBullet(true)
				return y
			}
		}
		w.Y = function () {
			var w = this, g = G(arguments)
			y = $a(w, 'y', g)
			if (g.p) {
				y.track()
			}
			return w
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
		b.vec = b.v = function () {
			var b = this, g = G(arguments), o, vec
			o = g.O ? g.f :
					g.s ? {x: g.f, y: g.s} : //this not error
					{y: g.f}
			vec = V(N(o.x, 0), N(o.y, -1))
			return b.GetWorldVector(vec)
		}//the current direction of that vector in world coordinates
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
		b.shtEv = function (ms, k) {
			var b = this //= b.shootOnInt
			_.ev(N(ms / 1000, 0.4), function () {
				if (b.IsActive()) {
					b.sht(k)
				}
			})
			return b
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
	}
	
	function badG() {
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
		b.moveInCircle = function (rad, speed) {
			$l('b.moveInCircle')
			var g = G(arguments), rad = N(g[0]) ? g[0] : 100,
					speed = N(g[1]) ? g[1] : 2,
					toRad = Math.toRadians, cos = Math.cos, sin = Math.sin,
					b = this,
					ang = 0,
					x = b.X(),
					y = b.Y(),
					bX,
					bY
			T.t(function () {
				ang += toRad(speed)
				bX = rad * cos(ang)
				bY = rad * sin(ang)
				if (g.p) {
					bY *= 2
				}
				if (g.n) {
					bX *= 2
				}
				b.XY(bX + x, bY + y)
			})
			return this
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
	}
}
