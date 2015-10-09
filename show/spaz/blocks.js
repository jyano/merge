NRM = function () {
	W()
	w.D(800, 300, 'b', 10).d(1)
	w.D(800, 300, 'x', 10, 10).d(1)
	b = w.D(800, 300, 'b', 100).d(1)
	x = w.D(800, 300, 'x', 100, 100).d(1)
	w.D(800, 300, 'b', 200).d(1)
	w.D(800, 300, 'x', 200, 200).d(1)
	// w.s.al(0)
	w.i.autoClear = false
	return w
}



CANC = function () {
	Q(function () {
		z()
		w = {W: 1200, H: 600}
		ii = w.I = $St('z', w.W, w.H, 0, 0).t()
		s = w.s = $St('X', w.W, w.H, 0, 0).t()
		w.canvas = w.s.canvas
		w.can = $(w.canvas)
		w.ctx = w.can.ctx('2d')
		bg = w.bg = w.s.ct()
		g = w.g = w.s.ct()
		fg = w.fg = w.s.ct()
		i = w.i = $St('X', w.W, w.H, 0, 0).t()
		g.bm('me', function (bb) {
			b = bb.drag()
		})
		i.bm('me', function (bb) {
			b = bb.drag()
		})
	})
	
}
CANC1 = function () {
	w = {W: 1200, H: 600}
	/*
	 w.I = $St('z', w.W, w.H ,0, 0).t()
	 w.s= $St('X', w.W, w.H, 0, 0).t()//.aC(0)
	 w.canvas = w.s.canvas
	 w.can= $(w.canvas)
	 w.ctx = w.can.ctx('2d')
	 w.bg= w.s.ct();
	 w.g=  w.s.ct();
	 w.fg= w.s.ct()
	 */
	w.i = $St('b', w.W, w.H, 0, 0).t()
	/*
	 ii = w.I
	 s= w.s
	 bg= w.bg
	 g= w.g
	 fg= w.fg
	 i= w.i
	 */
	
	_.in(1, function () {
		w.i.bm('me', '+')
	})
}


BSP = function () {
	W()._(function () {
		x = w.D(600, 300, 'x', 200, 100)
		f = x.cir({r: 100, x: 300, c: 'r'})
		me = Q.b('me').rC()
		f.bS(me, 0, f.pX(), f.pY())
	})
}
TZ1 = function () {
	W()
	w.D(600, 280, [
		['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
		['y', [10, -10], [20, -30], [50, -15], [45, -5]],
		['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
		['y', [-10, 10], [-10, -10], [0, -10], [0, 10]],
		['x', 10, 55, -12, '-'],
		['u', 30, 40, 75, -12, '-']
	])
}
TR1 = function () {
	W()
	w.D(600, 280, [
		['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
		['y', [10, -10], [20, -30], [50, -15], [45, -5]],
		['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
		['y', [-10, 10], [-10, -10], [0, -10], [0, 10]],
		['x', 10, 55, -12 //, '-'
		]
		
		//, ['u', 30, 40, 75, -12, '-']
	])
}
TRZ = function () {
	W()
	w.D(600, 280, [
		['x', 300, 20],
		['u', 30, 40, '-'],
		['p', 40, 10, 10]
	])
}
DEG = function () {
	W([1200, 600, 2400, 600]);
	var p1, p2, d, l
	p = w.p(400, 400, '+')
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
		w.edg(p1.x, p1.y, p2.x, p2.y).K('pf')
		w.rC(function (f) {
			f.B().dot()
		}, p1, p2)
	})
	p.IsBullet(true)
	w.pre('pf', function (f, cx) {
		if (p.shall) {
			cx.en(0)
		}
	})
	w.b(function (cx) {
		p.shall = false
		if (!cx.pt().y && p.lV().y < 0) {
			return
		}
		cx.w(p, 'pf', function () {
			c = cx
			v = cx.pt()
			if (cx.pt().y) {
				dif = (p.Y()) - cx.pt().y
				$l(dif)
				if (dif > -10) {
					p.shall = true
				}
			}
		})
	})
	//w.end(function(cx){cx.w('pf', function(){$l('end')})})
}
IMP = function () {
	W({g: 0, w: 0}).Y()
	// y.rt(90).XY(200,240)
	w.D(200, 235, 'b', 10).lV(20, 0).d(10)
	w.D(900, 200, 'r', 100, 100).rt(45)
	r = w.D(1100, 500, 'r', [[80], [20, 300]]).d(.1)
	r.$(function () {
		this.B().I(100, -2000)
	})
	f = r.f()
	w.i.dot(856, 240)
	/*
	 s = b2d.Seg(0,0,1200, 600)
	 s1 = b2d.Seg(1200,0, 0, 600)
	 lArr =  'the shape world transform'
	 nl = '2Vec2 — returns the hit fraction.'
	 // You can use this to compute the contact point
	 // p = (1 - lambda) segment.p1 + lambda segment.p2.
	 sg = ''//segment:b2Segment — returns the normal at the contact point. If there is no intersection, the normal is not set.
	 maxLam = 1000000//:Number — defines the begin and end point of the ray cast.
	 s.TestSegment(lArr, nl, s1, maxLam )
	 */
	ip = b2d.rCIp(0, 0, 1200, 600)
	op = b2d.rCOp(1, 2)
	res = f.rC(op, ip)
}
BPL = function () {
	W()
	vs1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	]
	w.D(200, 200).pol(vs1)
}
BPOL = function () {
	W()
	vs1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	]
	w.D(200, 400).pol(vs1)
	w.D(800, 400).pol($pD(vs1))
	w.D(800, 400).pol('o', $pD(vs1))
	w.D(500, 400).pol({vs: vs1, c: 'r'})
	w.D(800, 400).pol({vs: $pD(vs1), c: 'b'})
}
TETRISGRADS = BLOKUS = BLK = function () {
	W(0).Y();
	y.cn('thrust')
	w.i.h(100, 100, '+')
			.c({l: 20, C: 'y', lf: {c1: 'b'}})
			.dc(100)
			.dr(300, 100)
	w.$h(200, 450, 'w', 20, '+')
			.lf({x: -100, c1: 'r', c2: 'y'})
			.dr2({w: 300, h: 100, x: 0, y: -100}, {w: 100, h: 300})
	w.gx.ct(600, 200).rec(
			{w: 300, h: 200, c: 'r', C: 'o', l: 10, a: -5},
			{w: 100, h: 200, a: 20, c: 'b', C: 'w', l: 20})
			.rec({w: 100, h: 200, a: 20, c: 'b', C: 'w', l: 20}).XY(50, 50)// c: {l:20, C:'y'},, lf:{c1:'b',c2:'z'}  //lf:{c1:'r', c2:'b'}//lf:['r','b']//,  bf:1
	w.gx.ct(600, 450)
			.rec({w: 200, h: 100, c: 'r', C: 'o', l: 10, a: -5})
			.rec({w: 100, h: 200, c: 'r', C: 'o', l: 10, a: 5})
	w.$h(900, 200, '+').lf(['b', 'y'])
			.dr2({w: 200, h: 200})
	w.$h(900, 400, '+')
			.lf({c1: 'r', c2: 'y', x1: -100})
			.dr2({w: 300, h: 100, x: 0, y: -100}, {w: 100, h: 300})
	b = w.D(800, 300)
	b.rec({w: 250, h: 300, bm: 'me'})
	b.rec({w: 200, h: 200, lf: 1, l: 2})
	w.gx.rec(145, 120, 10, 80, 'o')
	w.$h(200, 200, '+')
			.rec(145, 120, 100, 200, 'u', 'y', 20)
}
FGG = FOREGROUND = function () {
	W(800, 500, 1200, 600)._(function () {
		w.p()
		w.y().tr()
		h = w.i.h(50, 200, '+')
		h.bf('chicks', function (h) {
			_h = h
			h.dc({r: 80}
					//, {r: 50, x: 100}, {r: 100, x: 400}
			)
		})
		w.I.h(200, 200, '+').bf('chicks').dc(100)
	})
}
MIKK = function () {
	W()
	// mick(500,200)
	mick(700, 100, {c1: 'b', c2: 'X'})
	mick(700, 300, {c2: 'b'})
	mick(100, 100, {y2: 10})
	mick(100, 200, {y2: 200})
	mick(100, 300, {x2: 100})
	function mick(x, y, lf) {
		var g = G(arguments)
		w.i.h(x, y, '+').c({l: 20, C: 0, lf: lf || 1})
				.dc([50], [200, 0, 100], [100, 100, 100])
		if (g.p) {
			//w.i.h(x, y).c({l: 20, C: 0, ls: lf || 1}).dc([50], [200, 0, 100], [100, 100, 100])
		}
	}
}//stack
CIR = function () {
	W([1200, 600, 1800, 600], {g: 10})
	w.l(600, 0, 700, 500)//hud
	w.l(1000, 200, 100, 900, '-') //red
	w.l(50, 50, 500, 350, '/')
	w.l(200, 200, 500, 500, '+')
	_.t(10, function (i) {
		w.D(100 + i * 40, 100).cir({r: 35, lf: {c1: '*', c2: '*'}}).d(.1);
		w.D(100 + i * 40, 100).cir({r: 20, lf: 1}).d(.1)
	})
	_.t(10, function (i) {
		w.D(100 + i * 140, 160).cir({
			r: 50,
			rf: {
				c1: $r(),
				c2: $r(),
			}
		}).den(.1)
	})
	w.D(800, 300).cir({
		r: 120,
		C: 'y', l: 2, bf: 'me', ls: ['y', 'x']//?
	}).den(.1)
	w.y(100, 300).tr()
	w.tRightLeft();
}
TXMK = function () {
	W()
	h = w.i.h(400, 200, '+')
	h.c({l: 20, C: 0, lf: 20})
	h.dc([50], [200, 0, 100], [100, 100, 100])
}
KST = function () {
	W([1200, 600, 2400, 600], {g: 10})
	turtle = [
		['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
		['y', [10, -10], [20, -30], [50, -15], [45, -5]],
		['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
		['y', [-10, 10], [-10, -10], [0, -10], [0, 10]],
		['x', 10, 55, -12],
		['u', 30, 40, 75, -12]
	]
	w.D(400, 280, turtle, '-')  //this changes the data object for future uses !!!
}
GRADADV = LAYEREDGRADS = GRADSHAPES = GRA = function () {
	$W([2000, 1000], {})
	w.D(100, 100).cir({r: 35, lf: {c1: 'o', c2: 'y'}})
	w.i.h(1000, 300).pol({v: v1, lf: 1})
	w.bg.h(900, 300).pol({v: v1, rf: 1})
	w.D(600, 200).pol({v: vs, c: 'y', C: 'y', l: 5, rf: 1})
	w.D(700, 200).pol({v: vs, c: 'y', C: 'y', l: 5, lf: 1})
	b = w.D(300, 200)
	b.cir({r: 50, x: 0, y: 0, lf: {c1: 'o', c2: 'b', X1: 400}})
	b.cir({r: 100, x: 200, y: 0, lf: {c1: 'o', c2: 'b'}})
	b.cir({r: 100, x: 100, y: 100, lf: {c1: 'o', c2: 'b'}})
	w.s.h()
			.dc([50], [200, 0, 100], [100, 100, 100])
			.c({l: 20, C: 0, ls: 1})
			.dc([50], [200, 0, 100], [100, 100, 100])
	/* h.twL(
	 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
	 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
	 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
	 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
	 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
	 [{r:25}, 200],[{r:-25},400],[{r:0}, 200])
	 h.twL(
	 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
	 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
	 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
	 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
	 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
	 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
	 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
	 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200]
	 )*/
	//two ways to make the same thing
	lf = {c1: 'b', c2: 'o', y1: 200, y2: 700}
	v = [[300, 300], [320, 200], [640, 400], [280, 650]]
	w.bg.h().pol({lf: lf, v: v})
	w.bg.h(200, 0).lf(lf).mt(v)
	//tits()
	function tits() {
		_.t(8, function () {
			tit(R(200, 300), R(200, 100))
		})
		o = {c1: 'b', c2: 'o', x1: 0, y1: 0, r1: 10, x2: 0, y2: 0, r2: 100}
		h = $h(300, 300).a2(s).al(.8).rf(o).dc(100).drag()
		/*
		 _.evx(.1, function(){
		 o.r1++;o.r2++;o.x1--
		 h.rf(o).dc(100)})
		 //*/
		$h(500, 100).a2(s).rf('r', 'y',
				100, 100, 0,
				100, 100, 50
		).dc(50, 50, 100).drag()
		function tit(x, y) {
			w.i.h(x, y).rf('d', 'o', 10, 100).dc(100)
		}
	}
}
TPD = function () {
	W(500, 700, 600, 700)._(function () {
		w.p();
		w.y().tr()
		w.i.h(800, 100, '+')
				.bf('guy')
				.dc([80], [90, 0, 68])
		w.D(200, 300).pol({
			v: [[0, 100], [0, -100], [200, -150], [200, 150]], // c: 'y',C: 'w',l: 5,
			bf: 'guy'
		})
	})
	//wait... tim is hiding in upper right
}//CALL STACK
BFRECS = CBS = function () {
	W(500, 500, 600, 550)._(function () {
		w.p();
		w.y().tr()
		b = w.D(600, 300, 'r', 400, 300)
		h = w.bg.h().al(.5)
		h.bf('sun')
		h.rec({w: 400, h: 300})
		b.bS(h)
		w.bfR(600, 300, 'guy', 100, 100, 'X')
		w.bfR(300, 300, 'sun', 100, 100, 'z')
		w.bfR(300, 300, 'chicks', 100, 100)
	})
}
BFPOL = AHD = function () {
	W(800, 500, 800, 550)._(function () {
		w.p();
		w.y().tr()
		//w.i.h(350, 150, '+').pol({v: v1, bf: 'me'})
		w.D(550, 200).pol({
			c: 'o', C: 'z', l: 25,
			bf: 'chicks',
			v: [[-100, 0], [0, -200], [100, -50], [0, -50]]
		})
		//h.bV //w.pol
		w.D(400, 500).pol({v: [[-100, 0], [0, -100], [100, -50], [0, -50]]})
		w.bg.Bm('me').sXY(6.2).X(500).al(.2)
		w.D(500, 400).pol({
			v: [[-100, 0], [0, -600], [100, -50], [0, -50]],
			c: 'X', C: 'r', l: 50, bf: 'me', bs: 'chicks'
		})
	})
}
TRIPOLS = SFX = function () {
	W([2000, 1000], {g: 100}).Y();
	y.tr();//$.rulers()
	w.D(200, 200, 'y', 10, 20).pol()
	w.D(200, 200, 'y', 10, 20).pol({c: 'r'})
	w.D(600, 300).pol('r', [[-100, 0], [0, -100], [200, 50]])
	w.D(800, 200).pol('b', [-100, 0], [0, -100], [200, 50])
	//obj
	b = w.D(100, 300)
	b.pol({
		s: 1, c: 'o', C: 'y',
		v: [[-200, -100], [0, -200], [100, -100]]
	})
	b.pol({
		c: 'y', C: 'o',
		v: [[-100, 0], [0, -200], [100, 20], [0, -150]]
	})
	/*
	 b.cir({k: 'cir', r: 50, x: 200, y: -100, d: .2, b: .8, f: 100, c: 'x'})
	 b.rec({x: 100, y: 100, w: 10, h: 100, c: 'x'})
	
	 b = w.D(400, 400)
	 b.pol('o', [-300, 0], [0, -100], [10, 150])
	 b.pol('y',[   [-10, 0],  [0, -100],  [100, -50]])
	 b.pol(['b', [-200, 0], [0, -100], [10, 150]])
	 b.pol({c:'r', v:[
	 [-100, 0],
	 [0, -100],
	 [100, -50]
	 ]})
	 w.D(400,500,'o',[['w',[30,30],[20,40],[10,10]]]).pol([-100, 0], [0,-100], [100, 40]).C('g')
	
	
	 w.i.pol(100,200,[[-100,-10],[0,100],[100,20]],'r','w',10,'+')
	 w.i.pol(100,100,[[-40, 40], [-40, -40], [40, -40], [40, 30]], 'b', 'w')
	 w.i.pol(200,200,[[-20, -80], [-100, -200], [100, 5]] )
	 */
	/*
	 //simple off-cir-sen
	 w.D(600, 300,'y',50,10,10, '-').cir(15)
	 //simple off-rec-sen
	 w.S(600, 300,'o', 50,200, 10,10,45, '-').cir(15)
	 //simple pol-sen
	 w.D(200, 300,'x', [-100,0],[0,-100],[100,30], '-').cir(15)
	 w.S(500, 200, 'b', [-100,0], [0,-100], [100,-20] )
	 w.S(200, 200, 'o', [[[-100,0],[0,-100],[100,-20]]])
	 w.S(300,300, 'w',[-100,0],[0,-100],[100,-20], '-')
	
	
	
	
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
	 ['r',250, 50],
	 ['b',50, 50, 50],
	 ['g', 50, 50, 50, 50],
	 ['w', 50, 50, 50, 50, 50],
	 ['u', [-100, 0], [0, -50], [200, -10]]])
	
	
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
	 [60, 10, 0, 50, 60 ]
	 ]
	 b2d.compoundStar = [
	 [10, 10],
	 [20],
	 [4, 80, 10, 30, 135],
	 [4, 80, 0, 0, 45],
	 [4, 80, 100, 0, 90],
	 [4, 80, 0, 0, 180]
	 ]
	 w.D(100, 100, b2d.somePolyFixt)
	 w.D(200, 100, b2d.compoundShape)
	 w.D(300, 100, b2d.compoundShape2)
	 w.D(400, 100, b2d.compoundStar)
	
	
	 w.D(600,300,'b',200,100).cir('z',10, 40,50)
	 w.D(600,300,'z',[[200,100], ['o',10, 40,50]])
	
	 */
}
CUP = function (o) {
	$l('cups')
	// W(10)
	W()
	cup = [
		[20, 20],
		[100, 40, 0, 40, 0],
		[200, 40, -80, -40, 260],
		[200, 40, 80, -40, -80]
	]
	cup2 = [
		[100, 40, 0, 40, 0],
		['g', 200, 40, -80, -40, 260],
		['g', 200, 40, 80, -40, -80],
		[100]
	]
	cup3 = [
		[100, 40, 0, 40, 0],
		[200, 40, -80, -40, 260],
		[200, 40, 80, -40, -80],
		[34, -80, -130],
		[34, 80, -130]
	]//cup3 fails!
	b = w.D(280, 500, 'r', cup)
	w.D(600, 500, 'b', cup2)
	w.D(100, 100, 'o', 30)
	w.D(100, 100, 'o', 30)
	w.D(100, 100, 'o', 30)
	w.S(150, 220, 'u', 50, 100)
}
TEMPLE = TEM = function () {
	W()
	b = w.S(600, 200)
	b.pol([-100, 0], [0, -100], [100, 0])
	b.rec(400, 20, 0, 0, 45)
	b.rec({x: 20, y: 300, w: 400, h: 20, lf: ['g', 'w']})
	b.cir({r: 50, lf: ['g', 'w']})
}//boring
BIRDS = DBD = function () {
	W([2000, 1000], {g: 100}).Y();
	y.tr();//$.rulers()
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
}
DOR = function () {
	W([800, 600], {g: 100})
	//  w.D(100, 100, cjs.somePolyFixt)
	//  w.D(200, 100, cjs.compoundShape)
	// w.D(300, 100, cjs.compoundShape2 )
	// w.D(400, 100, cjs.compoundStar)
	w.D(600, 300, 'b', 200, 100).cir('z', 10, 40, 50)
	w.D(600, 300, 'z', [[200, 100], ['o', 10, 40, 50]])
}
TURS = function () {
	W([1200, 600, 2000, 600], {}).P().Y()
	// y.thr()
	//turtle
	w.D(600, 280, [
		['b', 700, 40, 0, -100],
		['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
		['y', [10, -10], [20, -30], [50, -15], [45, -5]],
		['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
		['y', [-10, 10], [-10, -10], [0, -10], [0, 10]]
	])
	//, ['x', 10, 55,-12, '-'], ['u', 30,40, 75,-12 ,'-']
	w.verts = function (x, y, arrs) {
		var w = this
		var b = w.D(x, y)
		_.e(arrs, function (f) {
			b.pol(f)
		})
		return b
	}
	w.verts(400, 280, turtle)
	w.vertsKin = function (x, y, arrs) {
		var w = this,
				b = w.S(x, y)//Kin
		_.e(arrs, function (g) {
			b.pol(g[0], _.r(g))
		})
		return b
	}
	p.track()
	t = w.vertsKin(400, 570, turtle).fR()
	t2 = w.vertsKin(700, 570, turtle2)
	_.ev(1, function () {
		//t2.lV(5,0)
		_.in(1, function () {
			$l('ok')
			// p.lV(-500,500)
			p.I(-5000, 500)
		})
	})
}
WPOL = RSP = function () {
	W()
	w.D(500, 400, [-100, 0], [0, -100], [100, 50], [0, -70])
	w.D(500, 430).pol('r', [[-100, 0], [0, -20], [40, 50]])
	//h.bC
	w.i.h(50, 200, '+')
			.bC({hs: [{r: 80}, {r: 50, x: 100}, {r: 100, x: 400}]})
	//h.bf
	w.i.h(800, 100, '+')
			.bf('me', function (h) {
				h.dc([80], [90, 0, 68])
			})
	//h.bV
	w.D(200, 300).pol({
		v: [[0, 100], [0, -100], [200, -150], [200, 150]],
		c: 'y', C: 'w', l: 5,
		bm: 1
	})
	/*
	 b =   w.D(600,300, 'r', 100,300)
	 h= w.i.h().bR({hs:[{w:100,h:300}]})
	 b.bS(h)
	 */
	w.bmR(600, 300, 'b', 100, 300)
	w.bmR(300, 300, 100, 300)
	w.i.h(350, 150, '+')
			.pol({v: v1, bf: 'me'})
	w.D(950, -200)
			.pol({c: 'o', C: 'z', l: 25, bm: 1, v: v1})
	w.D(500, 200)
			.pol({v: [[-100, 0], [0, -100], [100, -50], [0, -50]], c: 'y', C: 'r', l: 5, bm: 1})
	//h.bV //w.pol
	w.pol(400, 500, [[-100, 0], [0, -100], [100, -50], [0, -50]])
	w.bg.bm('me', 6.2, function (bm) {
		bm.X(500)
	})
}//stack
PIN = BED = function () {
	W(2000, 1000)
	w.S(600, 600, 'g', 20, 1000)
	w.D(100, 400, 'z', [
		[50],
		[10, 300, '-']])
	w.D(700, 400, 'y', [
		[50],
		['r', 10, 300, '-'],
		['o', 50, 100, 0]])
	W(10).Y() //=SEPARATOR=COLORCONC
	w.D(400, 100, 'y', guyInBed)
	w.D(100, 100, 'r', [
		[guyInBed]
	])
	w.D(600, 300, 'b', [
		[guyInBed],
		['w', dick]
	])
	w.D(400, 100, guyInBed)
	_.t(15, function (i) {
		w.D(100 + (i * 60), 300, pin)
	})
}
//same, all circles
CATIPILAR = CPR = function () {
	W(1000, 500, 1000, 500).G(10000)
	b = w.D(800, 300)
	b.cir('r', 100)
	b.cir('b', 80, 0, -60)
	b.cir('g', 'w', 60, 0, -140)
	b.cir('*', '*', 20, 0, -140)
	b = w.D(300, 300)
	b.cir('o', 20)
	b.cir('b', 100, 140, 0)
	b.cir('r', 20, 100, 100)
	b.cir('b', 20)
	b.cir(20, 100, 100).C('r')
	w.D(600, 300, 'b', [['b', 50, 50, 50]])
			.cir({c: 'o', r: 50})
	w.D(600, 300, 'y', [['b', 50, 50, 50]])
			.cir({c: 'b', r: 50, x: 50})
}
SHAKEYCIRS = RIO = function () {
	W(1000, 500, 1000, 500).G(10000)
	w.S(50, 50, 'x', 20).d(.1)
	y = w.y(1000, 400, '+')
	w.S(400, 200, 10)
	_.t(10, function () {
		w.D(700, 300, 'r', [[7]])
	})
	b = w.D(200, 300, 'z', 10)
	b.cir({r: 100, x: 200, y: -100, d: .2, b: .8, f: 100, c: 'o', C: 'x'})
	b.cir({x: 200, y: 100, c: 'r', C: 'w'})
}
GRR = function () {
	W(50).C('w')//.Y();y.thr()
	//just a normal pink cir
	w.i.h(100, 100, '+').cir({c: 'x', r: 100})
// black fill, l4 white stroke
	h = w.i.h().dc(100, 100, 50) //->
	//string of balls
	w.i.h(-100, -100, '+').c('b', 'r', 10).dc([200, 200, 50], [400, 200, 50], [600, 200, 50], [300, 300, 50]).c('r', 'b', 30).dc(400, 400, 50).dc(500, 500, 50).f().dc(600, 600, 50)
//the most beautiful orange candy ball!!
	// linear stroke, radial fill !!! and orange :)
	w.i.h(200, 200, '+').cir({
		r: 50,
		C: ['y', 10],
		lf: {c1: 'u', c2: 'o', y1: 100, x2: 100},
		ls: {c1: 'u', c2: 'o'}
	})
	w.D(300, 200)
			.cir(
			{r: 20},
			// {r:20, y:-20},
			// {r:20, x:20, lf:{ c1:'b' },y:30},
			// {x:50, s:1, rf:1},
			// {x:100,r:50,c:'r',C:'x',l:10, s:1},
			{y: -100, r: 50, bf: 'me'}
	)
	w.D(800, 300).cir({w: 50, h: 100, r: 50, bf: 'me'}, {r: 50, x: 100, lf: 1, l: 15},
			{w: 40, h: 40, x: 100, c: 'y'},
			{w: 40, h: 40, x: 200, c: 'b', C: 'o', l: 10},
			{w: 200, h: 20, y: 200, s: 1, lf: {c1: 'g', c2: 'y'}})
	//cjs.me=function(fn){Q(['me'], function(q){fn(q.getResult('me'))})}
	cjs.me(function (i) {
		h.c({
			l: 200,
			rf: ['w', 'u', 800],
			rs: {c1: 'w', c2: 'x', r2: 800}
		}).dc({x: 0, y: 0, r: 200})
		s.h().c({
			l: 200,
			lf: {c1: 'w', c2: 'u', y2: 200},
			ls: {c1: 'u', c2: 'w', s1: 0, s2: 1, x1: 0, y1: 0, x2: 0, y2: 200}
		}).dc({x: 0, y: 0, r: 200}).drag()
		s.h().lf('y', 'r', 10).dc({r: 200}).c({
			l: 0,
			c: 'y',
			//lf: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200},
			bs: i, bf: i
		}).dc({r: 200}).drag()
		s.h(40, 10, 'b', 8).rf({c1: 'r', c2: 'd', r2: 100}).dc(0, 50, 40).drag()
	})
	h.c('*').dc(100, 200, 50).dc(100, 250, 50)
	h.c('***').dc(200, 200, 50).dc(200, 250, 50)
	h.c({C: 'r'}).dc(300, 300, 50)
	h.cir({
		r: 50, x: 500, y: 200,
		C: ['y', 2],
		rf: {c1: 'u', c2: 'o', x1: 10, y1: 10, r2: 30}, //, y1:100,x2:100},
		rs: {c1: 'y', c2: 'u', x1: -20, y1: -20, r1: 40, r2: 40}
	})
	h = w.i.h().drag().lf({}).dc()
			.c('b', 'g', 10).lf({y2: 400})
			.dc(300, 300, 50)
}//ERR
PUZ = function () {
	W(0);
	w.ship().tr()
	_.t(10, function () {
		w.D(400, 400, [
			['r', 20, 0, 0],
			['b', 20, 100, 0],
			['y', 20, 0, 100]
		])
	})
}
DOMINOES = DOM = function () {
	W()
	w.D(300, 500, 'r', 40, 200)
	l = w.D(380, 500, 'r', 40, 200)
	w.e$(function () {
		var b = this.B()
		if (b == l) {
			b.I(-10, 0, V(0, -50))
		}
		else {
			b.I(10, 0, V(0, -50))
		}
	})
}
RCL = function () {
	$W()
	w.S(100, 200, 'r', 50, 50)
	w.S(200, 200, 'g', 80, 140, 30, 140, 25)
	w.S(500, 400, 'w', [
		[20, 20, -100, 50, 60],
		[100, 120, 0, 0, 100],
		[100, 20],
		[10, 300]])
	b = w.D(1000, 300)
	b.rec(100, 50)
	b.rec('z', 100, 50, -100, -100)
	b.rec('o', 100, 50, -100, 0, 25)
	b.rec('g', 100, 100)
	b.rec('y', 100, 100, 50, 50)
	b.rec('p', 100, 100, -150, -150, 45)
}//art.. recs
RCS = function () {
	$W()
	x = w.S().stat()
	x.rec(400, 20)
	f = x.rec('b', 400, 20, 0, -100, 18).C('b')
	w.dot(700, 400)
	r = x.f('w', 100, 100, 100, 100)
	x.rec({x: 200, y: -100, w: 400, h: 20, c: 'y', C: 'x'})
	w.S(500, 400, 'b', 20, 200, '-')//  sensor!
}//err
TANGRAMS = TAN = function () {
	W({g: 0})
	w.D(300, 300, 't', 56, 56).rot(45).d(1).damp(1000, 1000)
	w.D(280, 260).rot(90).den(1).damp(1000, 1000)
			.pol([V(-40, 20), V(0, -20), V(40, 20)])
	w.D(342, 321).den(1).damp(1000, 1000)
			.pol([V(-40, 20), V(0, -20), V(40, 20)])
	w.D(304, 220).rot(180).den(1).damp(1000, 1000)
			.pol([V(-80, 40), V(0, -40), V(80, 40)])
	w.D(346, 262).damp(1000, 1000).rot(270).den(1).damp(1000, 1000)
			.pol([V(-80, 40), V(0, -40), V(80, 40)])
	w.D(237, 324).den(1).damp(1000, 1000)
			.pol([V(-56, 28), V(0, -28), V(56, 28)])
	w.D(240, 267).den(1).damp(1000, 1000)
			.pol([V(-90, 20), V(-45, -20), V(45, -20), V(0, 20)])
	w.e(function (b) {
		// b.stat()
	})
}
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
	//w.dot(600, 300)
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
MTA = function () {
	W([800, 600], {w: 'L'}).C('w')._(function () {
		$.rulers()
		//initial me
		p = w.p(200, 200, 5).stat()
		//initial balls
		_.t(5, function Ball() {
			w.D(R(200, 50), R(-100), $r(), 30)
		})
		_.ev(3, MetaBall)
	})
	function MetaBall() {
		var b = w.D(400, 400, 'b', 80)
		b.$h('x', 'X', 1).c('x', 'X', 1).bf(
				w.s.cv0,
				cjs.m2d(.6, .1, .1, .6, -40, 180)
		).cir(80)
	}
}
SNL = function () {
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
}
BMR = function () {
	W()
	w.i.h(200, 300).dg().bf('me', function (h) {
		h.rec({w: 500, h: 200})
	})
	w.i.h().dg().bf('me', function (h) {
		h.rec({w: 500, h: 200})
		w.D(600, 300, 'b', 500, 200).bS(h)
	})
}
TFS = function () {
	W()._(function () {
		me = w.i.qB('me')
		me.drag()
		me.grow()
		i = w.i.qB('me').XY(200, 200)
		ball = w.ball()
		_.in(3, function () {
			w.C('b');
			ball.bS(i)
		})
		//  me.startMoving(10, 10)
		T.t(function () {
			iS = i.inStage()
			$l(iS)
		})
		b = w.i.qB('me')
		b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
		//m = b.getMatrix()
		function tf(a, b, c, d, e, f, g, h, i) {
			return this.x = a || 0,
					this.y = b || 0,
					this.scaleX = null == c ? 1 : c,
					this.scaleY = null == d ? 1 : d,
					this.rotation = e || 0,
					this.skewX = f || 0,
					this.skewY = g || 0,
					this.regX = h || 0,
					this.regY = i || 0,
					this
		}
	})
}
CHB = function () {
	W(1600, 1200)._(function () {
		_.t(14, function () {
			w.D(R(1100, 50), R(1100, 50))
					.cir({
						bf: 'chicks',
						r: R(180, 50)
					})
		})
		w.y()
		w.p()
	})
}
TXB = function () {
	W([400, 400], {}).C('w')._(function () {
		b = w.D(200, 200, 'b', 80)
		b.gx = b.gx || w.g.ct()
		b.gx.qB('chicks').rC().sXY(.1).Y(30)
		nice = w.i.T(0, 140, 'nice', 100, 'o')
		b.bS(nice)
	})
}
KSB = function () {
	W(1500, 300)
	_.t10(function (i) {
		w.D(100 + i * 100, 100).cir({
			r: 20,
			lf: 1
		}).d(.1)
		w.S(100 + i * 140, 160).cir({
			r: 50,
			rf: {c1: '*', c2: '*'}
		}).d(.1)
	})
}
function ballPit() {
	DLP = function () {
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
	BCB = function () {
		W([1200, 600, 2400, 1200], {g: 300})
		_.t10(function (i) {
			w.D(100 + i * 100, 100, $r(), 35).d(.1)
		})
		w.Z('-')
		p = w.p(1175, 100)
		w.t = p
		// need to call track?
		_.ev(1, function () {
			w.t.cb = function () {
				w.Z(w.z + .001)
			}
		})
	}
}
BTC = function () {
	W({g: 0})
	w.rJ(w.S(300, 600, 'a', 200),
			w.D(300, 400, 'b', 100, 100))
	b = w.D(270, 500, 'o', 40).r(.5)
	r = w.S(300, 300, 'g', 100, 20).d(.1).damp(1000, 1000).rt(100).dyn()
	r.rec('g', 20, 40, 60, -20)
	cjs.t(function () {
		b.F(0, 400)
	})
}
function notNice() {
	CRW = function () {
		W([1200, 600, 1400, 600], {}).C('p').P().P().P().P().P()
		n = 0
		p.track().cir({r: 10, c: 'y'}).bS('sun')
		j = w.wed(
				w.D(100, 200, 'x', 100, 200).r(1.5),
				w.D(200, 100, 'u', 200, 100))
		_.ev(2, function () {
			if (!j.destroyed) {
				j.destroy()
			}
			else {
				j = j.W().wed(j.A(), j.B())
			}
		})
	}
	SGW = function () {
		var i = -20
		W([800, 1000], {g: -10})
		w.roof.kill()
		w.floor.kill()
		glider = w.D(300, 500, 'b', 100, 200, 50, 50, 20)
		w.D(300, 500, 'b', [-100, 0], [0, -100], [100, 20]).K('b')
		w.D(500, 500, 'r', [-100, 0], [0, -100], [100, 20], '-').K('r')
		w.left.K('b')
		w.dot(300, 500)
		T.t(function () {
			glider.I(i, 0)
		})
		w.$(function () {
			glider.I(i * -12, 0)
		})
		w.$$(function () {
			i = ( i * -1  )
		})
		//y=w.ship()
		//y.C(function(f){if (f.of('b')) {f.B().kill()}})
	}
}