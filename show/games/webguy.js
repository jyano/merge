BIO = function () {
	W().randRects()
	var dJ
	p = w.D(320, 460, 'b', 40, 80)
			.Bm('me', 0, 0, .2)
			.fR()
	var l, node
	w.mu(function () {
		dJ = dJ && w.j(dJ) // ??
		node = null
	})
	w.md(function (o) {
		if (o.f) {
			var cen = p.wC()
			dJ = w.dJ(p, o.b,
					cen.x, cen.y,
					o.x, o.y)
			node = o.b
		}
	})
	T.t(function () {
		if (dJ) {
			// $l(dJ.l())
			p.wake()
			dJ.l(dJ.l() * 0.97)
			if (l) {
				l.rm();
				l = null
			}
			l = w.l('w',
					p.X(), p.Y(), node.X(), node.Y()
			)
		}
	})
	SPOOM = function () {
		Q(function () {
			W({g: 0, w: 0});
			SCALE = 1//W:600, H:300,
			w.can.C('z')
			s = w.s
			_.t(80, function () {
				w.cir(R(2000, -750), R(1600, -600), 4, 'w').d(0).r(2).K('star')
			})
			s.rXY(300, 150)
			e = w.S(600, 300, 'p', 100).d(1).r(2).K('earth')
			e.gx = e.gx || w.g.ct()
			e.gx.A(Q.b('earth').rC().sXY(.13))
			eI = e.ch()
			//  p= w.me(200,200, 2.5).cn('thrust').d(.4).aD(8).lD(.8)
			p = w.D(200, 200, 'x', 100, 200)
			p.cn('thrust')
			p.Bm('me')
			j = w.dJ({
				a: p,
				b: e,
				l: 600,
				f: 2,
				d: 2,
				cl: 1
			})
			T.t(function () {
				var sp,
						wd = 300
				ht = 150
				dx = e.X() - p.X(),
						dy = e.Y() - p.Y(),
						sc = cjs.cap(300 / M.sqrt(dx * dx + dy * dy), .3, 2)
				s.X(wd - sc * (p.X() - wd))
				s.Y(ht - sc * (p.Y() - ht))
				s.sXY(sc)
				s.al(sc * 2);
				eI.al(sc)
			})
			s.twL(
					[{kx: 8}, 1000],
					[{kx: 0}, 1000],
					[{ky: 8}, 1000],
					[{ky: 0}, 1000])
			eI.twL([{r: 360}, 10000])
			eI.twL([{kx: 16}, 3000], [{kx: 0}, 3000])
			p.cl('star', function () {
				p.ch().tw(
						[{kx: 40}, 100],
						[{ky: 40}, 100],
						[{kx: 0, ky: 0}, 100])
			})
			e.cl('star', function () {
				w.pop('star hit earth!!')
			})
		})
	}
}
NET = function () {
	W({g: 30, w: '_'}).C('r');
	blocks = function () {
		w.goal(1800, 0)
		block(400, 100)
		block(800, 0)
		block(1100, -50)
		block(1300, -200)
		function block(x, y) {
			return w.S(x, y, 't', 50, 50).K('randomRect')
		}
	};
	blocks()
	sw = cjs.stopWatch()
	wM = p = b = w.p(4).XY(394, 530).fixRot().rest(0).den(.14).fric(1).K('player')
	wM.canWeb = true
	//this is tracking !!
	w.s.tickX(function () {
		return 600 - p.X()
	});
	w.s.tickY(function () {
		return 510 - p.Y()
	})
	w.beg(function (cx) {
		var wb
		cx.w('webBall', 'randomRect', function (rc) {
			wb = _.findWhere(p.webs, {ball: this.B()})
			if (wb && !wb.connected) {
				wb.attach(rc.B())
			}
		})
	})
	$.key({
		r: function () {
			var K = $.K
			if (K.d) {
				p.didShoot = true;
				if (!F(p.shotClock)) {
					p.shotClock = cjs.stopWatch()
				}
				;
				return
			}
			if (p.isConnected()) {
				p.F(100, 0)
			} else {
				p.I(8, 0)
			}
		},
		l: function () {
			var K = $.K
			if (K.d) {
				p.didShoot = true;
				if (!F(p.shotClock)) {
					p.shotClock = cjs.stopWatch()
				}
			}
			if (p.isConnected()) {
				p.F(-250, -50)
			} else {
				p.I(-8, 0)
			}
		},
		R: function () {
			var K = $.K;
			p.webs = p.webs || []
			if (p.webs[1]) {
				p.webs[1].die()
			}
			;
			if (K.d) {
				p.shR()
			}
		},
		L: function () {
			var K = $.K;
			p.webs = p.webs || []
			if (p.webs[1]) {
				p.webs[1].die()
			}
			;
			if (K.d) {
				p.shL()
			}
		},
		D: function () {
			if (!p.didShoot && p.webs[0]) {
				_.f(p.webs).die()
			}
			p.didShoot = false
		},
		U: function () {
			var cn = _.reject(p.webs, function (w) {
						return !w.connected
					}) || []
			if (cn[0] && cn[1]) {
				cn[0].die()
			}
			p.canWeb = true;
			p.shotForce = 0
		},
		u: function () {
			var K = $.K, web, ba, n
			if (p.isConnected() && !p.webs[1] && p.canWeb) {
				n = Math.abs(p.lV().x * 2)
				p.net(3000).ball
						.XY(p.X(), p.Y() - 100)
						.I(K.r ? n : K.l ? -n : 0, -30)
			}
			else if (!p.webs || !p.webs[0] && p.canWeb) {
				p.net(3000).ball.XY(p.X(), p.Y() - 100)
						.I(K.l ? [-30, -40] : K.r ? [30, -40] : [0, -70])
			}
			p.canWeb = false
		}
	})
}
WBM = function () {
	W([1200, 1400], {g: 150, w: '_'}).C('z').s.C('z')
	block(400, 500);
	block(800, 400);
	block(1100, -505);
	block(1300, -400)
	function block(x, y) {
		return w.S(x, y, 't', 120, 120, 't').K('randomRect rr')
	}
	
	w.goal(1800, 0)
	sw = $sw()
	p = w.p(394, 530, 4).r(0).d(2).fr(1).K('wbMan')//.tr()
	p.WEBS = [];
	p.canW = 1;
	p.expire = 2
	p.d(.2)
	p.bit(0)
	//p.fixedRot(false)
	$.kD({
		u: function () {
			p.unstick()
			// if(!p.iCn()){
			b = p.shootWeb()
			b.lD(0)
			if (K.r) {
				b.lV(12000, -1000200)
			}
			else if (K.l) {
				b.lV(-120000, -100200)
			}
			else {
				b.lV(0, -14000)
			}
			//}
		},
		l: function () {
			p.I(-50, -30)
		},
		r: function () {
			p.I(50, -30)
		},
		d: function () {
			p.unstick()
		}
	})
	js = []
	w.b(function (cx) {
		cx.w('wbB', 'rr', function (rr) {
			var b = this.B(), rr = rr.B()
			web = _.fW(p.WEBS, {ball: b})
			// of all my WEBS, get me the web where the ball is the ball i just shot!
			if (web) {
				web.stick(rr)
			}
		})
	})
	_.inx(1, function () {
		p.shootWeb()
	})
	//w.s.tickX(function(){return 600- p.X()});
	//w.s.tickY(function(){return 510- p.Y()})
	w.s.tickX(function () {
		return 600 - p.X()
	});
	w.s.tickY(function () {
		return 510 - p.Y()
	})
}
BRD = function () {
	W().randRects()
	p = w.Webman()
	$.kD({
		l: function () {
			p.I(-20, 0)
		},
		r: function () {
			p.I(20, 0)
		},
		d: function () {
			p.unstick()
		},
		u: function () {
			// if(!p.iCn()){
			p.Web().b.I(0, -100)
			// }
		}
	})
	w.b(function (cx) {
		cx.w('wbB', function (f) {
			var web = _.fW(p.WEBS, {ball: this.B()})
			if (!web.cn) {
				web.stick(f.B())
			}
		})
	})
}
WEB = function () {
	W()
	w.roof.kill();
	w.right.kill();
	w.left.kill()
	_.t(40, function (i) {
		w.S(
				R(1100, 50), R(500, -50), 'r', R(30, 15), R(30, 15)
		).K('rr')
	})
	p = w.Webman()
	$.kD({
		l: function () {
			p.lV(-40, 0)
		},
		r: function () {
			p.lV(40, 0)
		},
		d: function () {
			if (p.WEBS[0]) {
				_.l(p.WEBS).kill()
			}
		},
		u: function () {
			if (!p.iCn()) {
				
				//make a web and shoot its ball (the dense part)
				//the ball is kind of a brain for this thing
				p.Web().ball.I(0, -100)
			}
		}
	})
	w.b(function (cx) {
		cx.w('wbB', 'rr', function (f) {//
			var web = _.fW(
					p.WEBS, {ball: this.B()}
			)
			if (!web.cn) {
				web.stick(f.B())
			}
		})
	})
}
WBY = function () {
	W({g: 30, w: '_'}).C('z').s.C('z')
	block(400, 100)
	block(800, 0)
	block(1100, -50)
	block(1300, -200)
	w.goal(1800, 0)
	sw = $sw()
	p = w.Webman()
	w.b(function (cx) {
		cx.w('wbB', 'rr', function (rr) {
			var b = this.B(), rr = rr.B()
			web = _.fW(p.WEBS, {ball: b})
			// of all my WEBS, get me the web where the ball is the ball i just shot!
			if (web) {
				web.stick(rr)
			}
		})
	})
	$.kD({
		u: function (e, K) {
			var i
			if (p.iCn() && p.WEBS && !p.WEBS[1] && p.canW) {
				i = M.a(p.lV().x * 2) * (K.r ? 1 : K.l ? -i : 0)
				p.wb(3000).b.XY(p.X(), p.Y() - 100).I(i, -30)
			}
			else if (!p.WEBS || !p.WEBS[0] && p.canW) {
				p.stat()
				p.wb(3000).b.XY(p.X(), p.Y() - 200).bit(0)
						.I(K.l ? [-30, -40] : K.r ? [30, -40] : [0, -470])
			}
			p.canW = 0
		},
		U: function (e, K) {
			var cn = _.rj(p.WEBS, function (w) {
						return !w.cn
					}) || []
			if (cn[0] && cn[1]) {
				cn[0].kill()
			}
			p.canW = 1;
			//p.shotForce=0
		},
		r: function (e, K) {
			if (K.d) {
				p.didShoot = 1
				p.sw = p.sw || $sw()
			}
			else {//k.D
				p.F(//fX
						p.iCn() ? 100 : 8, 0)
			}
		},
		R: function (e, K) {
			p.WEBS = p.WEBS || []
			if (p.WEBS[1]) {
				p.WEBS[1].kill()
			}
			if (K.d) {
				p.shR()
			}
		},
		l: function (e, K) {
			if (K.d) {
				p.didShoot = 1;
				if (!F(p.sw)) {
					p.sw = $sw()
				}
			}
			if (p.iCn()) {
				p.F(-250, -50)
			}
			else {
				p.I(-8, 0)
			}
		},
		L: function (e, K) {
			p.WEBS = p.WEBS || []
			if (p.WEBS[1]) {
				p.WEBS[1].kill()
			}
			if (K.d) {
				p.shL()
			}
		},
		D: function (e, K) {
			if (!p.didShoot && p.WEBS[0]) {
				_.f(p.WEBS).kill()
			}
			p.didShoot = false
		}
	})
	w.s.tickX(function () {
		return 600 - p.X()
	});
	w.s.tickY(function () {
		return 510 - p.Y()
	})
	function block(x, y) {
		return w.S(x, y, 't', 50, 50, 't').K('randomRect rr')
	}
}
BLN = function () {
	W([1200, 600, 1200, 2000], {g: 300})
	p = w.p(394, 530, 4).track()
	Blns = []
	$.kD({
		l: function () {
			p.I(-100, 0)
		},
		r: function () {
			p.I(100, 0)
		},
		d: function () {
			pop()
		},
		u: function () {
			p.I(0, 100)
			Bln()//.I(0,-100)
		}
	})
	//cjs.t(function(){_.e(Blns,function(b){b.F(0,-4000)})})
	function Bln() {
		$l('Bln')
		var y = p.Y(),
				x = p.X(), l,
				b = w.D(p.X(), p.Y() - 10)
		b.cir({c: $r(), r: 40, o: .5}).d(.1)
		b.ls = []
		b.K('bln')
		Blns.push(
				b
		)
		l = w.l(x, y);
		w.dJ(p, l);
		b.ls.push(l)
		_.t(9, function (i) {
			var nL;
			b.ls.push(nL = w.l(x, y - i));
			w.dJ(l, nL);
			l = nL
		})
		w.dJ(l, b)
		b.kill = function () {
			var b = this
			_.e(b.ls, function (l) {
				l.kill()
			});
			b.kill()
			Blns[Blns.indexOf(b)] = null
			Blns = _.compact(Blns)
		}
		return b
	}
	
	/*
	
	 function pop(){var wb;if(wb=_.l(Blns)){wb.kill()}}
	
	 /*
	
	 w.b(function(cx){cx.w('bln', function(f){
	
	 if(  f.of(w.left)||f.of(w.right) ){
	 this.B().kill()
	 }})})
	 */
	/*
	
	
	
	
	
	
	 // x.w('web', 'floor', function(){p.destroyWeb();p.hanging = false})
	 */
}