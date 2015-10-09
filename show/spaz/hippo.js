HIP = function () {
	W(800, 800, 800, 800).G(10000)
	w.S(300, 300, 'o', 10)
	w.S(430, 300, 'o', 10)
	w.S(300, 370, 'o', 10)
	w.S(210, 320, 'o', 10)
	w.D(300, 400, [['b', 50, 50, 0, '-'], ['y', 50]])
	b = w.D(500, 400, {r: 100, c: 'y', t: 'c'})
	b.cir({r: 100, x: 100, c: 'w', lg: 1, s: 1, t: 'c'})
	w.i.cir(100, 100, 10, 'r', 'y')
}
HLG = function () {
	W(1000, 1500, 1000, 1500).G(10000)
	b = w.D(300, 400)
	b.cir({r: 100, c: 'w', rg: 1})
	b.cir({r: 100, x: 500, c: 'w', lg: 1, s: 1})
	r = w.S(600, 300, 'r', 12, '-')
	r.cir('b', 30, 100, 200, '-')
	r.cir({c: 'g', r: 30, x: 100, s: 1}, '-')
	r.cir({c: 'w', r: 30})
	r.cir({c: 'z', y: -100})
	r.cir(['y', 30, 200, 100])
}
YKH = function () {
	W()._(function () {
		w.cir({x: 500, y: 350, r: 100, c: 'b', C: 'z', l: 20}).stat()
		w.D(800, 350).cir({
			r: 100,
			c: 'y',
			C: 'z',
			l: 100
		}) //.stat()
	})
}
CLN = function () {
	b2d.Common.Math.b2Transform.prototype.toArr = function () {
		var tf = this,
				pos = tf.position,
				R = tf.R,
				col1 = R.col1,
				col2 = R.col2
		return [pos.x, pos.y, col1.x, col1.y, col2.x, col2.y]
	}
	W().Y().P().P().P()
	var tf = null
	b = w.D(100, 100, 'b', 100, 200)
	b2 = w.D(900, 200, 'p', 100, 150)
	T.t(function () {
		var trf
		trf = b.transform().toArr()
		if (tf) {
			b2.SetTransform(b2d.tf(tf))
		}
		_.in(1, function () {
			tf = trf
		})
	})
	b1 = w.D(400, 400, 'x', [
		[100, 100, 10], [100, 200],
		['y', 20, 0, 100],
		['b', 20, 0, -100],
		['g', 20, 200, 0]])
	_.in(1, cl);
	//_.ev(10, cl);
	function cl() {
		c = b1.X(300, '+').I(100000, -1000).clone()
	}
}
FCS = function () {
	W({g: 50})
	//dummy
	w.ball()
	//linVel
	_.t(3, function () {
		w.D(300, 300, 'y', 20).K('lV')
	})
	_.ev(1, function () {
		w.e('lV', function (b) {
			b.lV(0, 20)
		})
	})
	//F('+') <-constant
	w.D(100, 100, 'o', 10).F(40, -60, '+')
	b = w.D(300, 500, 'z', 30, 80).rot(1).fixRot()
	t = {
		i: function () {
			b.I(V(10, -30), b.wC())
		},
		v: function () {
			b.lV(10, -60)
		},
		f: function () {
			cjs.t(function () {
				b.F(V(0, -3), b.wC())
			})
		}
	}
}
QUY = function () {
	W().Y()
	w.S(200, 300, 'b', 100).$(function () {
		this.C('***')
	})
	w.S(200, 500, 'g', 100).K('g')
			.cir({x: 100, r: 80, c: 'r'})
			.$(function () {
				this.C('w')
			})
	w.e('g', function (b) {
		b.$$(function () {
			this.B().C('z')
			this.C('w')
		})
	})
	w.e$(function (o) {
		this.C('y')
		$l('mass: ' + this.B().mass().toFixed(3))
	})
	w.$(function (o) {
		w.ball({x: o.x, y: o.y, r: 8})
	})
	w.$$(function (o) {
		w.S(o.x, o.y, 'x', [[20, 10]])
	})
	w.S(600, 400, 'b', 100, 300);
	w.dot(600, 300)
	_.in(function () {
		w.q(600, 300, function (f) {
			f.C('r')
		})
	})
	w.D(1100, 500, 'o', 80).d(.1).$(function () {
		this.B().I(100, -2000)
	})
	w.S(800, 400, [['b', 100], ['o', 200, 100]]).f().$(
			function () {
				this.kill()
			}
	)
}
HPS = function () {
	W({g: 0, w: 0})
	w.S(10, 300, 'b', 40, 920) //left
	w.S(1100, 300, 'w', 40, 380)
	w.S(250, 10, 'r', 800, 40)
	w.S(730, 10, 'r', 800, 40)
	w.S(250, 590, 'r', 800, 40)
	w.S(730, 590, 'r', 800, 40)//b
	w.p(100, 100).cn('thrust')
	_.t(20, function () {
		w.D(400, 300, 'w', 20).r(1).bS('sun')
	})
}
SKE = function () {
	W({g: 100, w: 0})
	w.ramp(
			[250, 700, 500, 200, -40],
			[250, 640, 500, 200, -20],
			[270, 620, 500, 200, -10],
			[200, 600, 500, 200, 11],
			[-70, 350, 500, 200, 85],
			[-70, 375, 500, 200, 75],
			[-70, 400, 500, 200, 65],
			[-70, 425, 500, 200, 55],
			[-70, 450, 500, 200, 45],
			[-70, 475, 500, 200, 35],
			[-70, 500, 500, 200, 25],
			[-70, 525, 500, 200, 17])
	var force
	$.kD({
		d: function () {
			force = force || 10
		},
		D: function () {
			w.D(20, 300, 'w', 12)
					.DFB(1, 0, 0).I(0, force)
					.bS('me', 0.2)
			force = 0
		}
	})
	_.ev(.1, function () {
		force *= 1.2
	})
	w.S(900, 550, 'w', 120, 15).fr(0).K('ledge')
	w.wn('ledge', function (p) {
		p.B().lV(0)
	})
}
HOC = function () {
	W([1200, 600, 1200, 2000]).stats()//.devGrid()
	v = [[[0, 200], [0, -200], [400, -300], [400, 300]],
		[[-100, 0], [0, -100], [100, 50]],
		[[-200, 0], [-100, -100], [0, 50]]]
	// p2= w.p('t')
	b = w.D(800, 300, 'b', 100).r(1).track()
	r = w.D(800, 300, 'r', 300)
	_.in(8, function () {
		_.ev(3, function () {
			if (R()) {
				w.lG('a');
				b.I(40, -100)
			}
			else {
				w.lG('c');
				b.I(-200, -650)
			}
		})
	})
}
DEN = function () {
	W(0) //w=b2d.m({g:0})
//by default, bodies have density = 0
//bodies cannot rotate by force, if their density is 0
//so by default, bodies wont rotate!!!! but still some mass
//can even change its density to 0, to suddenly freeze it...
	//something weird.. if it was already rotating it keeps rotating, and i think its rotation is affected by forces of others..
	//however others don't rot in response (assuming they also have den-0).  then once it stops rotating, switches back to frozen again?? hmmm.. maybe the rotation is affected only by friction/damping.. and the forces only change its x/y?  test it...
	r = w.D(300, 300, 'y', 400, 20).bo(.5)
	r2 = w.D(300, 300, 'w', 400, 10)
	r3 = w.D(300, 300, 'w', 400, 10)
	r4 = w.D(300, 300, 'w', 400, 10)
	r5 = w.D(300, 300, 'w', 400, 10)
	flipDen = function (r) {
		var d = r.den()
		if (d == 0) {
			r.den(1)
		} else {
			r.den(0)
		}
	}
	flipStage = function () {
		if (w.s.X() == 0 && w.s.Y() == 0) {
			w.s.XY(10000, 10000)
		}
		else {
			w.s.XY(0, 0)
		}
	}
	flipStage()
	_.ev(6, function () {
		flipDen(r);
		flipDen(r2);
		flipDen(r3);
		flipStage()
	})
}
DKN = function () {
	W({g: 0, w: 0}).Y().C('z')
	x = w.S(100, 100, 'x', 500)
	b = w.S(600, 300, 'w', [[80], [100, 300, 140, 0, 46]])
	//w.d(r.wC())
	f = b.f()
	f1 = f.N()
	h = f.H()
	h1 = f1.H()
	s = x.fSp()
}
GEM = function () {
	W()
	h = w.i.h(100, 300, '+')
	h.bR({
		i: 'chicks',
		hs: [
			{w: 150, h: 500},
			{w: 150, h: 500, x: 200},
			{w: 150, h: 500, x: 400},
			{w: 150, h: 500, x: 600}
		]//, fn:function(){}
	})
	w.D(200, 160).cir(
			{r: 120, rf: {c1: 'r', c2: 'b'}},
			{r: 150, C: 'y', l: 2, bf: 'me'}
	)
}
PGM = function () {
	W()
	verts = [[[5, 100], [0, -100], [200, -150], [200, 150]],
		[[-50, 50], [-50, -100], [450, -50], [450, 50]]]
	w.i.h(400, 300, '+').bV({v: verts})
	w.D(800, 300).pol({
		v: verts,
		c: 'r', C: 'y', l: 10,
		bf: 'me'
	})
}
STA = function () {
	W({m: 'ball', w: 0})
	w.S(500, 600, 'y', 1000, 20)
	b = w.D(500, 200, 'o', 40).K('ball')
	w.boxesStat([350, 260, 880, 30])
	w.D(310, 120, 't', 60, 60)
	w.D(320, 120, 't', 60, 60)
	w.D(340, 120, 't', 60, 60)
	w.D(350, 120, 't', 60, 60)
	w.D(370, 120, 't', 60, 60)
	w.D(380, 120, 't', 60, 60)
	w.D(550, 120, 't', 60, 60)
	w.D(570, 120, 't', 60, 60)
	w.D(580, 120, 't', 60, 60)
	w.S(1000, 400, 'x', 200, 200)
	w.S(1200, 200, 'x', 200, 200)
}
MJ = function () {
	W([1200, 600, 2400, 600], {g: 10, m: 'm'}).Y('+')
	w.D(100, 200, 'y', 150, 100).K('imp')
	w.D(500, 400, 'y', 50, 100).K('imp')
	w.D(300, 400, 'r', 50, 50);
	w.D(800, 400, 'r', 50, 50);
	w.D(1200, 400, 'r', 50, 50);
	w.D(1600, 400, 'b', 100, 100).K('m')
	w.e$('imp', function () {
		this.B().I(0, -50)
	})  // w.e('imp', function(b){b.$(function(){ this.B().I(0,-50) }) })
}
ASE = function () {
	W().C('z')
	w.edg(100, 500, 1000, 0)
	w.edg(50, 50, 100, 500)
	w.edg(0, 0, 1000, 100)
	w.D(410, 100, 'w', 30)
	// w.p(300,200,'standard')
}
HLS = function () {
	W().P()
	w.edg(100, 100, 500, 300)
	w.edg(100, 200, 500, 400)
	w.edg(100, 300, 500, 500)
	w.edg(1000, 100, 600, 300)
	w.edg(1000, 200, 600, 400)
	w.edg(1000, 300, 600, 500)
	w.D(410, 100, 'r', 20)
}
CEE = function () {
	W([1200, 600, 2400, 600], {g: 10}).C('r')
	w.Y(450, 400)
	w.edgs([
		[100, 300], [500, 500], [600, 400], [300, 250], [100, 300]
	])
	x = w.edgAr([400, 400, 500, 200],
			[500, 200, 550, 600],
			[550, 600, 400, 400]).X(1200).track()
	w.D(700, 350, 'b', 20)
	w.D(700, 350, 'r', 20)
	w.D(700, 350, 'y', 20)
	w.$(function (x, y) {
		var v = w.sToW(x, y)
		w.S(v.x, v.y, 'z', [[10, 10, '-']])
	})
	// cjs.t(function(){$l(w.mx + ', ' + w.my) })
}
DED = function () {
	W();
	var p1, p2, d, l
	w.p(400, 100);
	w.S(200, 200, 'r', 400, 20)
	w.$(function (v) {
		if (!p1) {
			p1 = v;
			return
		}
		if (!p2) {
			p2 = v
		} else {
			p1 = p2;
			p2 = v
		}
		w.edg(p1.x, p1.y, p2.x, p2.y).K('line')
		w.rC(function (f) {
			f.B().dot()
		}, p1, p2)
	})
}
SMF = function () {
	W([2000, 1000], {g: 100}).Y();
	y.tr();//$.rulers()
	b.cir({k: 'cir', r: 50, x: 200, y: -100, d: .2, b: .8, f: 100, c: 'x'})
	b.rec({x: 100, y: 100, w: 10, h: 100, c: 'x'})
	b = w.D(400, 400)
	b.pol('o', [-300, 0], [0, -100], [10, 150])
	b.pol('y', [[-10, 0], [0, -100], [100, -50]])
	b.pol(['b', [-200, 0], [0, -100], [10, 150]])
	b.pol({
		c: 'r', v: [
			[-100, 0],
			[0, -100],
			[100, -50]
		]
	})
	w.D(400, 500, 'o', [['w', [30, 30], [20, 40], [10, 10]]]).pol([-100, 0], [0, -100], [100, 40]).C('g')
	w.i.pol(100, 200, [[-100, -10], [0, 100], [100, 20]], 'r', 'w', 10, '+')
	w.i.pol(100, 100, [[-40, 40], [-40, -40], [40, -40], [40, 30]], 'b', 'w')
	w.i.pol(200, 200, [[-20, -80], [-100, -200], [100, 5]])
	//simple off-cir-sen
	w.D(600, 300, 'y', 50, 10, 10, '-').cir(15)
	//simple off-rec-sen
	w.S(600, 300, 'o', 50, 200, 10, 10, 45, '-').cir(15)
	//simple pol-sen
	w.D(200, 300, 'x', [-100, 0], [0, -100], [100, 30], '-').cir(15)
	w.S(500, 200, 'b', [-100, 0], [0, -100], [100, -20])
	w.S(200, 200, 'o', [[[-100, 0], [0, -100], [100, -20]]])
	w.S(300, 300, 'w', [-100, 0], [0, -100], [100, -20], '-')
	b = w.D(300, 300).fixRot()
	b.pol('g', [[0, 0], [0, -200], [100, 0]])
	b.pol('b', [[0, 30], [-300, -20], [100, 0]])
	b.pol('p', [[0, 30], [-30, -20], [10, 0]])
	b2 = w.D(300, 300)
	b2.pol('r', [[0, 0], [0, -20], [10, 0]])
	b2.pol([[0, 30], [-30, -20], [10, 0]])
	b3 = w.D(300, 300)
	b3.pol('g', [[-150, 0], [-120, -20], [-80, -50], [0, -30]])
	b3.pol('r', [[-30, 0], [0, -30], [40, -20]])
	b3.pol('o', [[-30, -30], [-20, -50], [10, -20]])
	w.D(600, 300, 'b', [
		[[-100, -20], [0, -100], [10, 10]]
	])
	w.D(400, 400, [
		['b', 30],
		['y', [-100, 0], [0, -100], [100, -20], [50, 20]]])
	w.D(400, 400, 'p', [-100, 0], [0, -100], [100, -20]) //pass in points alone !!!!
	_.t(20, thing)
	function thing() {
		w.D(R(600), R(300, 200), [
			['p', [-20, -20], [0, -30], [10, 10]],
			['n', [0, 0], [30, -50], [50, -10]]
		])
	}
	
	w.ball()
	b = w.S(400, 300)
	b.f('o', 50)
	b.f('r', 50, 50)
	b.f('b', 50, 50, 50)
	b.f('g', 50, 50, 50, 50)
	b.f('w', 50, 50, 50, 50, 50)
	b.f('u', [-100, 0], [0, -50], [200, -10])
	w.D(600, 300).f([
		['o', 50],
		['r', 50, 50],
		['b', 50, 50, 50],
		['g', 50, 50, 50, 50],
		['w', 50, 50, 50, 50, 50],
		['u', [-100, 0], [0, -50], [200, -10]]])
	w.D(600, 300).f('y', [
		[50],
		['r', 250, 50],
		['b', 50, 50, 50],
		['g', 50, 50, 50, 50],
		['w', 50, 50, 50, 50, 50],
		['u', [-100, 0], [0, -50], [200, -10]]])
	w.D(100, 100, b2d.somePolyFixt)
	w.D(200, 100, b2d.compoundShape)
	w.D(300, 100, b2d.compoundShape2)
	w.D(400, 100, b2d.compoundStar)
	w.D(600, 300, 'b', 200, 100).cir('z', 10, 40, 50)
	w.D(600, 300, 'z', [[200, 100], ['o', 10, 40, 50]])
}
CCR = function () {
	W()
	w.i.cir('b', 800, 200, 150)
	w.i.cir()
	h = w.i.h('+')
			.cir(
			{r: 100, c: 'b', C: 'X', l: 20, lf: 1},
			[
				{x: 250, y: 300},
				{x: 450, y: 300},
				{x: 250, y: 500}]
	)
	h1 = w.i.h('+')
			.cir(
			{C: 'X', lf: {X1: 650, X2: 220, Y1: 950, Y2: 520}, r: 100},
			[
				{x: 750, y: 300},
				{x: 950, y: 300},
				{x: 750, y: 500}
			]
	)
}