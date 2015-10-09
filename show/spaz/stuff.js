b2d.somePolyFixt = [
	[
		[-100, 0], [0, -100],
		[100, 0], [60, 50]]]
b2d.compoundShape = [
	[50, 10],
	[60, 30, 0, 0, 40],
	[120, 30, 0, 0, 29],
	[60, 10, 0, 50, 60],
	[84, 10, 15, 80, -120]
]
b2d.compoundShape2 = [
	[50, 10],
	[20, 20],
	[20, 10, 0, 0, 10],
	[40, 10, 50, 0, 45],
	[84, 10, 15, 80, -120],
	[60, 10, 0, 50, 60]
]
b2d.compoundStar = [
	[10, 10],
	[20],
	[4, 80, 10, 30, 135],
	[4, 80, 0, 0, 45],
	[4, 80, 100, 0, 90],
	[4, 80, 0, 0, 180]
]
$vs = {}
$vs.expl = [[0, 100], [-100, 0], [0, -100], [100, 0]]
p1 = [[-50, 50], [-50, -50], [50, -50], [50, 50]]
p2 = [[-100, 0], [-100, -100], [0, -100], [0, 0], [-98, 2]]
cross = function () {
	r = w.S(600, 300, 'r', 300, 100, 0, 0, 30)
	b = w.S(600, 300, 'b', 300, 100).rt(-35)
}
b2d.p()
b.net = function (K) {
	//when a web is created it gets web.connected=false
	//when it hits certain things and forms a joint, then connected->true
	//then it just dies
	//pressing DOWN should release the most recent of the connectedWebs
	//note: non connected Webs can be shot off!
	var p = this, b = this, w = b.W(),
			y = b.Y() - 100,
			x = b.X(),
			piece, web
	b.webs = b.webs || []
	web = w.net(b, K)
	b2 = web.Piece(x, y)
	w.dJ(b, b2, 1, 1000, 1000)
	web.pieces.push(b2)
	piece = b2
	//add first piece to player
	_.t(9, function (i) {
		piece = piece.add(web.Piece(x, y - i))
	})  //add rest to each other
	web.ball = w.cir(x, y - 100, 10, 'd').K('webBall').den(1).rest(0).fric(100)
	piece.add(web.ball)
	b.webs.push(web)
	return web
}
w.net = function (b, K) {
	var w = this, web//K=shouldKill
	web = {player: b, connected: false, cn: 0, pieces: []}
	web.Piece = function (x, y) {
		var web = this, b
		b = w.D(x, y, 'w', 3, 5).bo(0).aD(10).K('webPiece')
		b.add = function (b2) {
			var b = this
			w.dJ(b, b2, 1, 1000, 1000)
			web.pieces.push(b2)
			return b2
		}
		return b
	}
	web.die = function () {
		var web = this,
				p = web.player
		_.e(web.pieces, function (i) {
			i.kill()
		})
		web.pieces = []
		p.webs = _.reject(p.webs, function (w) {
			return web === w
		})
	}
	web.attach = function (b) {
		var web = this
		web.cn = web.connected = true
		w.dJ(web.ball, b, 1, 1000, 1000)
		return web
	}
	if (K) {
		setTimeout(function () {
			if (!web.cn) {
				web.die()
			}
		}, _.tN(K, 1000))
	}
	return web
}
b.iCn = b.isConnected = function () {
	var res, b = this
	return A(b.webs) &&
			_.findWhere(b.webs, {connected: true})
}
w.Webman = w.wbMan = function (x, y, sc) {
	var w = this,
			p = w.p(N(x, 394), N(y, 530), N(sc, 4)).fR().r(0).d(.14).fr(1).K('wbMan')
	p.WEBS = []
	p.canW = 1
	return p
}
b.Web = function (K) {
	var b = this, w = b.W()
	return w.Web(this.X(), this.Y() - 100, this, K)
}
b.shR = function () {
	var f = sw('-')
	w.D(this.X() + 80, this.Y() - 20, 'w', 6).I(2 - f / 50, 0 - f / 40)
	return this
}
b.shL = function () {
	var f = sw('-')
	w.D(this.X() + 80, this.Y() - 20, 'w', 6).I(2 + f / 50, 0 + f / 40)
	return this
}
b.lWeb = function () {
	return _.l(_.where(this.WEBS || [], {cn: 1}))
}
b.iCn = b.fWeb = function () {
	return this.WEBS && _.fW(this.WEBS, {cn: 1})
}
b.unstick = function () {
	var web = _.l(this.WEBS || [])
	if (web) {
		web.kill()
	}
	//if(this.lWeb()){ this.lWeb().kill() }
	return this
}
b.Web = function () {
	var p = this, web
	web = {
		p: p,
		cn: 0,
		PIECES: [],
		to: function (link) {
			alert('to')
			w.dJ(this, link, 1, 500, 500);
			if (!G(arguments).n) {
				this.PIECES.push(link)
			}
			;
			return link
		},
		link: function (x, y, p) {
			var web = this, link
			link = Link(x, y) // the df link is yellow 4 by 5, yo.. says it right here.
			link.to = function (link) {
				var j
				j = w.dJ(this, link).l(25).fq(90).d(3.8)
				return link
			}
			// / and i found the joint here //... the other important part of this equation.
			if (p) {
				link.to(p)
			}
			return link
			function Link(x, y) {
				var b = w.D(x, y, 't', 5)
						.d(1.5).r(0).fr(0).fR().lD(1)
				b.bit(0)
				b.K('wbP')//.lD(2)
				return b
			}
		},
		Ball: function (x, y) {
			var ball = w.D(x, y, 'd', 20, '-').r(0).K('wbB')
			ball.web = this
			return ball
		},
		stick: function (link) {
			this.cn = 1;
			w.dJ(this.ball, link, 10, 40, 0).l(20)
			return this
		},
		kill: function () {
			_.e(this.PIECES, function (piece) {
				piece.kill()
			})
			this.PIECES = []
			p.WEBS = _.rj(p.WEBS,
					function (web1) {
						return web1 === web
					})
		}
	}
	p.WEBS.push(web)
	return _web = web
}
b.shootWeb = function () {
	var g = G(arguments), p = this, link,
			web = p.Web(),
			x = p.X(),
			y = p.Y() - 120
	web.PIECES.push(link = web.link(x, y, p))
	_.t(12, function (i) {
		web.PIECES.push(
				link = link.to(
						web.link(x, y)))
	})
	web.ball = link.to(web.Ball(link.X(), link.Y() - 220).d(.5))
	web.PIECES.push(web.ball)
	web.ball.SetBullet(true)
	return web.ball.d(.5).r(.2)
	//   _.in( N(p.expire, 2), function(){ if(!web.cn){ web.kill( )} })
}
w.js = function (fn) {
	var js = this.GetJointList(),
			arr = []
	if (js) {
		arr.push(js)
	}
	while (js.GetNext()) {
		arr.push(js = js.GetNext())
	}
	if (fn) {
		_.e(arr, function (j) {
			fn(j)
		})
		return this
	}
	return arr
}
w.flips = w.flippers = function (x, y, x2, y2) {
	if (U(y2)) {
		y2 = y
	}
	if (U(x2)) {
		x2 = x + 230
	}
	var lf = w.lFlip(x, y),
			rf = w.rFlip(x2, y2)
	var flip = function flip() {
		lf.flip();
		rf.flip();
		return flip
	}
	flip.left = lf
	flip.right = rf
	return flip
}
w.rFlip = w.rightFlipper = function (x, y) {
	var w = this
	var rightJoint = w.S(x, y, 'r', 20),
			rightFlip = w.D(x, y, 'b', 100, 25).DBF(1, .5, 0),
			flipper = w.rJ(
					rightJoint, rightFlip, 0, 0, 40, 0
			).lm(-70, 30)
	flipper.flip = function () {
		rightFlip.I(-1000, 0)
	}
	return flipper
}
w.lFlip = w.leftFlipper = function (x, y) {
	var w = this
	var fl = w.D(x, y, 'b', 100, 25).DBF(1, .5, 0),
			flipper = w.rJ(
					w.S(x, y, 'r', 20), fl,
					0, 0, 40, 0
			).lm(150, 250)
	flipper.flip = function () {
		fl.I(1000, 0)
	}
	return flipper
}
//w.WebBall=function(o){return w.D(o.x, o.y-100,'d',10).d(1).r(0).fr(100).K('wbB') }
//when a web is created it gets web.connected=false
//when it hits certain things and forms a joint, then connected->true
//then it just dies
//pressing DOWN should release the most recent of the connectedWebs
//note: non connected Webs can be shot off!
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
turtle2 = [['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]], ['yellow', [-60, -30], [-50, -60], [-20, -45], [-15, -35]], ['yellow', [-50, 10], [-50, -10], [-40, -10], [-40, 10]], ['yellow', [-10, 10], [-10, -10], [0, -10], [0, 10]]]
dick = [
	[50, 300, 0, -100],
	[50, 100, 150],
	[50, -100, 150]
]
guyInBed = [
	[30],
	[20, 30, 30],
	[100, 30]
]
cjs.somePolyFixt = [
	[
		[-100, 0], [0, -100],
		[100, 0], [60, 50]]]
cjs.compoundShape = [
	[50, 10],
	[60, 30, 0, 0, 40],
	[120, 30, 0, 0, 29],
	[60, 10, 0, 50, 60],
	[84, 10, 15, 80, -120]
]
cjs.compoundShape2 = [
	[50, 10],
	[20, 20],
	[20, 10, 0, 0, 10],
	[40, 10, 50, 0, 45],
	[84, 10, 15, 80, -120],
	[60, 10, 0, 50, 60]
]
cjs.compoundStar = [
	[10, 10],
	[20],
	[4, 80, 10, 30, 135],
	[4, 80, 0, 0, 45],
	[4, 80, 100, 0, 90],
	[4, 80, 0, 0, 180]
]
v1 = [[-100, 0], [0, -100], [100, -50], [0, -50]]
turtle = [
	['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]]
	, ['yellow', [10, -10], [20, -30], [50, -15], [45, -5]]
	, ['yellow',
		[-50, 10], [-50, -10], [-40, -10], [-40, 10]
	]
	, ['yellow',
		[-10, 10], [-10, -10], [0, -10], [0, 10]
	]
]
pin = [
	['o', [-20, 20], [0, -80], [20, 20], [0, -40]],
	['w', 8, 0, -75],
	['w', 8, -20, 20],
	['w', 8, 20, 20]
]
turtle2 = [['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]], ['yellow', [-60, -30], [-50, -60], [-20, -45], [-15, -35]], ['yellow', [-50, 10], [-50, -10], [-40, -10], [-40, 10]], ['yellow', [-10, 10], [-10, -10], [0, -10], [0, 10]]]
dick = [
	[50, 300, 0, -100],
	[50, 100, 150],
	[50, -100, 150]
]
guyInBed = [
	[30],
	[20, 30, 30],
	[100, 30]
]
cjs.somePolyFixt = [
	[
		[-100, 0], [0, -100],
		[100, 0], [60, 50]]]
cjs.compoundShape = [
	[50, 10],
	[60, 30, 0, 0, 40],
	[120, 30, 0, 0, 29],
	[60, 10, 0, 50, 60],
	[84, 10, 15, 80, -120]
]
cjs.compoundShape2 = [
	[50, 10],
	[20, 20],
	[20, 10, 0, 0, 10],
	[40, 10, 50, 0, 45],
	[84, 10, 15, 80, -120],
	[60, 10, 0, 50, 60]
]
cjs.compoundStar = [
	[10, 10],
	[20],
	[4, 80, 10, 30, 135],
	[4, 80, 0, 0, 45],
	[4, 80, 100, 0, 90],
	[4, 80, 0, 0, 180]
]
v1 = [[-100, 0], [0, -100], [100, -50], [0, -50]]
turtle = [
	['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]]
	, ['yellow', [10, -10], [20, -30], [50, -15], [45, -5]]
	, ['yellow',
		[-50, 10], [-50, -10], [-40, -10], [-40, 10]
	]
	, ['yellow',
		[-10, 10], [-10, -10], [0, -10], [0, 10]
	]
]
pin = [
	['o', [-20, 20], [0, -80], [20, 20], [0, -40]],
	['w', 8, 0, -75],
	['w', 8, -20, 20],
	['w', 8, 20, 20]
]

