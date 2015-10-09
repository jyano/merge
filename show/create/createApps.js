ST1 = function () {
	$St('+').bm('me')
}
ST2 = function () {
	cv = $.c().id('can')
	$St(cv, '+').bm('me')
}
ST3 = function () {
	cv = $.c().id('can')
	$St('can', '+').bm('me')
}
ST4 = function () {
	$St('r', 800, 100, '+').bm('me')
}
STGG = function () {
	z()
	s = $St('z', 400).bm('me');
	s.can.dg()
	$St($.c('o', 400, 100).dg()).bm('me')
	$.c('x', 300, 100).id('someId').dg()
	$St(['someId']).t().bm('me')
}  //three ways to make a new stage // B+ (as WAP)
NEWSTG = function () {
	$W();
	b = w.S(600, 300, 'w', 200);
	_.in(function () {
		b.dyn().f().C('z')
	})
	//three ways to make a new stage
	s = $St('r', 100).A().bm('me')
	s.can.drag()
	c = $.c('b', 100).A().drag().XY(400)
	s1 = $St(c)
	s1.A().bm('me')
	c2 = $.c('b', 100).A().id('someId').drag().XY(300, 100)
	s2 = $St(['someId'])
	s2.t().bm('me')
	_.in(3, function () {
		w.S(300, 100, 'z', 1500, 1)
		//w.d('r', 300, 100)
		w.i.T('top').XY(300, 100).bl('+')
		// should become + (counterintuitive i know.. but i noticed and fixed it!)
		w.i.T('bottom').XY(500, 100).bl('-')
		w.i.T('middle').XY(700, 100)
		//w.dot(300, 400)
	})
	_.in(5, function () {
		nice = w.i.T('nice', 135, 'x', 300, 400)
		w.i.T('linewidth 0').XY(100, 300).lW(0)
		w.i.T('linewidth null').XY(100, 500).bl('bottom')
		w.i.T('linewidth 100').XY(100, 700).drag().bl('middle').lW(800)
		w.i.T('lineheight -100').XY(700, 300).lH(-100)
		w.i.T('lineheight 0').XY(700, 500).lH(0)
		w.i.T('lineheight 100').XY(700, 700).lH(100)
		w.i.T('linealign left').XY(600, 100)
		w.i.T('linealign right').XY(600, 200).tA('right')//.bl('bottom')
		w.i.T('linealign center').XY(600, 300).tA('center')//.bl('middle')
		hello = 'fasdafsafsdfadsafafdsfadsafdsafdsfsd'
		//w.show('hello')
	})
}
TRIPLE = function () {
	W()
	b = w.ball(500, 300, 60)
	b.bS(w.s.h(500, 300))
	num = 0
	dif = .1
	shape = b.sp()
	shape.rf(['r', 'y'], [0, num], 60)
			.dc(0, 0, 60)
	w.i.bm('me', function (b) {
		b.XY(300).drag()
	})
	w.I.bm('guy', function (b) {
		b.XY(200).drag()
	})
}
LAYS = USINGLAYERSINEASEL = function () {
	z()
	s = $St(500).A()
	s.bm('me', function (bm) {
		b = bm
		bm.sXY(3)
		s.bm('guy', function (bm) {
			g = bm
			bm.sXY(.5)
			SL(bm)
		})
		s.tick(function () {
			b.x(-1 * (g.x() * 2))
			b.y(-1 * (g.y() * 2))
		})
	})
	bt = $.bt('safd', function () {
		s.sXY(2)
	}).A()
}
SHAS = function () {
	z()
	s = stage = $St(500, 500)
	//s.bm('me', function(bm){ bm.sxy(.2)   })
	s.h().cir(100, 100, 100, 'b', 'g')
	s.cir(100, 100, 10, 'r', 'y').dg()
	s.cir(10, 100, 100, 'z', 'x').dg()
	s.cir(100, 10, 100, 'a', 'c')
	s.cir(150, 150, 120, 'c', 'd').cir(30, 'x', 'x')
}
SIR = function () {
	$.C('b')
	$S({
		body: {fZ: 40, c: 'o'},
		canvas: {M: 20}
	})
	$.h1('SIR')
	st = new cjs.Stage($.c(600, 300)[0]).t()
	st.A(new cjs.Text('h.dc', '50px Arial', 'white').X(400))
	h = $H().a2(st)
	h.dc()
	h.dc(36)
	h.dc(18, 'o')
	h.dc(200, 100)
	h.dc(300, 100, 20, 'r')
	h.dc(300, 200, 20)
	//
	st2 = new cjs.Stage($.c(600, 300)[0]).t()
	st2.A(new cjs.Text('h.cirs', '50px Arial', 'white').X(400))
	st2.A($H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'}))
	//
	st1 = new cjs.Stage($.c(600, 300)[0]).t()
	st1.A(new cjs.Text('cjs.cir', '50px Arial', 'white').X(400))
	st1.A(cjs.cir(300, 'g'))
	st1.A(cjs.cir(140, 220, 20, 'o').dc())
	st1.A(cjs.cir('r').XY(220, 200))
	st3 = new cjs.Stage($.c(600, 300)[0]).t()
	st3.A(new cjs.Text('cjs.cirs', '50px Arial', 'white').X(400))
	st3.A(
			$H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'})
	)
}
TSIR = function () {
	$.C('b')
	$S({
		body: {fZ: 40, c: 'o'},
		canvas: {M: 20}
	})
	$.h1('SIR')
	st = new cjs.Stage($.c(600, 300)[0]).t()
	st.A(new cjs.Text('h.dc', '50px Arial', 'white').X(400))
	h = $H().a2(st)
	h.dc()
}
SHAPEZ = function () {
	St()
	s.can.P('a').XY(200)
	s.bm('me')
	s.bm('me', 0.2, function (bm) {
	})
	h = $h().cir()
	s.A(
			$h().cir(100, 'blue', 'green').XY(100, 100).drag()
	)
	s.h().cir(100, 100, 10, 'red', 'yellow')
	s.h().cir(10, 100, 100, 'black', 'purple')
	s.h().cir(100, 10, 100, 'blue', 'red')
	s.h().cir(150, 150, 120, 'red', 'blue')
	s.h().cir(30, 'brown', 'gray')
	s.u()
}//C- only PLAY!?
PLAINCIRS = PLC = function () {
	z()
	s = stage = $St(500, 500)
	//s.bm('me', function(bm){ bm.sXY(.2)   })
	s.cir(100, 100, 100, 'b', 'g').SL()
	s.cir(100, 100, 10, 'r', 'y')
	s.cir(10, 100, 100, 'z', 'x')
	s.cir(100, 10, 100, 'a', 'c')
	s.cir(150, 150, 120, 'c', 'd')//.fn(SL).cir(30, 'x', 'x')
}
ROTCIRS = function () {
	z()
	ct = $Ct().XY(150).a2($St(1000, '+'))
	h = $H().f('r').a2(ct)
	h.dc(30)
	h.dc(30, 20)
	h.dc(250, 250)
	h.XY(100, 100)
	T.on("tick", function (e) {
		ct.rotation += 3
	})
}
CIRTUT = function () {
	z()
	$St($.c('b', 1000, 500)).A(cjs.cir({
		r: 100, c: 'r', C: 'g', l: 50, x: 350, y: 200
	}).XY(100, 200))
	///////////////////
	$St($.c(1000, 500))
			.cir({r: 100, c: 'g', C: 'r', l: 50, x: 350, y: 200})
			.XY(100, 200)
	////////////////////
	ct = $St(1000).ct()
	h = $H().a2(ct)
	ct.cir({
		r: 100,
		c: 'r', C: 'g', l: 50,
		oX: 100
	})//.XY(0,0)//.XY(300,400)
	ct.cir(380, 300, 100, 'g', 'y', 30)
	ct.cir(400, 300, 100).f('r')
			.dc(28, 40, 40)
	h = ct.h().f('o').dc(400, 100, 30)
	/////////////
	ct = $Ct().XY(0, 0).a2($St(1000))
	h = $H().a2(ct).XY(0, 0)
	//x,y,r
	h.f('o')
			.dc(100, 300, 125)
	///x, r , r = 50
	h.f('z').dc(100, 300)
	h.f('r').dc(100, 300, 50)
	h.f('b').dc(100, 300)
	//r, x=0, y=0
	h.f('r').dc(100)
}
CIRCRG = function () {
	s = St()
	nip = function () {
		x1 = 0
		y1 = 0
		r1 = 10
		x2 = 0
		y2 = 0
		r2 = 100
		var h = $h(10, 10).a2(s).drag().al(.8)
		h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
				x1, y1, r1, x2, y2, r2)
				.dc(0, 0, 100)
				.endFill()
		return h
	}
	x1 = 0
	y1 = 0
	r1 = 10
	x2 = 0
	y2 = 0
	r2 = 100
	h = $h(10, 10).a2(s).drag()
	change = function () {
		//  h.remove()
		// h=cjs.h(10, 10).a2(s).drag()
		h.graphics.rf(['blue', "orange"], [0, 1], x1, y1, r1, x2, y2, r2).dc(0, 0, 100).endFill()
		// x--
		// r1++
		// r2++
	}
	setInterval(change, 1000)
	change()
	n = nip()
	h2 = $h(500, 100).a2(s);
	h2.graphics.beginRadialGradientFill(["red", "yellow"], [0, 1], 100, 100, 0, 100, 100, 50).dc(50, 50, 100)
	////////
	s.h(600, 300).graphics.rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(600, 100).graphics.rf(
			['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(800, 300).rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(400, 300).rf(
			['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h().cir(0, 0, 10)
}//C
CIRCS = function () {
	St()
	// h.dc(100,100,50) -> no color
	h.c().dc(100, 100, 50) // black fill, l4 white stroke
	h.c('*').dc(100, 200, 50).dc(100, 250, 50)
	h.c('***').dc(200, 200, 50).dc(200, 250, 50)
	h.c({C: 'r'}).dc(300, 300, 50)
	h.cir({
		r: 50, x: 200, y: 200,
		C: ['y', 10],
		lf: {c1: 'u', c2: 'o', y1: 100, x2: 100},
		ls: {c1: 'u', c2: 'o'}
	})
	h.cir({
		r: 50, x: 500, y: 200,
		C: ['y', 2],
		rf: {c1: 'u', c2: 'o', x1: 10, y1: 10, r2: 30}, //, y1:100,x2:100},
		rs: {c1: 'y', c2: 'u', x1: -20, y1: -20, r1: 40, r2: 40}
	})
	h = s.h().drag().lf({}).dc()
			.c('b', 'g', 10).lf({y2: 400}).dc(300, 300, 50)
	cjs.me = function (fn) {
		Q(['me'], function (q) {
			fn(q.getResult('me'))
		})
	}
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
}//D
//duds
BOWL = function () {
	St()
	ct = container = c = $Ct().a2(st)
	plX = st.W() / 2
	plY = 150
	plR = 100
	plr = 75 // this seems to determine the radius of the 'cluster' of balls
	oRng = 8 //outer ring
	nRng = 3// number of rings
	//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1
	circ = cjs.cir(plX, plY, plR, 'yellow')
	container.A(circ) // cr = Hx().c(plR,'y').xy(plX,plY)
	rngSp = plr / (nRng - 1)
	aA = []
	var ast = function (x, y, r, m, f) {
		return {
			x: x, y: y, radius: r, m: m,
			f: f, vX: 0, vY: 0, player: false
		}
	}
	_.t(nRng, function (r) {
		var crR = 0, ang = 0, rngR = 0
		if (r == nRng - 1) {
			crR = 1
		}
		else {
			crR = oRng - (r * 3)
			ang = 360 / crR
			rngR = plr - (rngSp * r)
		}
		_.t(crR, function (a) {
			var x = 0, y = 0
			if (r == nRng - 1) {
				x = plX;
				y = plY
			}
			else {
				x = plX + (rngR * M.cos((ang * a) * M.PI / 180))
				y = plX + (rngR * M.sin((ang * a) * M.PI / 180)) - 350
			}
			aA.push(ast(x, y, 10, 5, 0.95))
			ct.A(cjs.cir(10, 'z').XY(x, y))
		})
	})
}
CIRCTEST = function () {
	s = $St()
	s.h().drag().cir({r: 100, c: 'b', C: 'X', l: 20, lf: 1}, //why cant set lf to {}?
			[{x: 250, y: 300}, {x: 450, y: 300}, {x: 250, y: 500}])
	s.h().drag().cir({C: 'X', lf: {X1: 650, X2: 220, Y1: 950, Y2: 520}, r: 100},
			[{x: 750, y: 300}, {x: 950, y: 300}, {x: 750, y: 500}])
}
CIRCSTROKE = function () {
	St()
	gx = h.graphics
	h.c('b', 'r', 10).XY(-100, -100)
	h.dc([200, 200, 50], [400, 200, 50], [600, 200, 50])
	/*  h.dc(300,300,50)
	 gx.dc(400,400,50)
	 h.dc(500,500,50)
	 gx.dc(600,600,50)
	 */
}//C (PLAY needs update, WAP not?!) 
MICK = function () {
	St()
	ct.mick = function (x, y, lf) {
		var ct = this,
				h = ct.h(x, y).drag()
						.c({l: 20, C: 0, lf: lf || 1})
						.dc([50], [200, 0, 100], [100, 100, 100])
		ct.h(x, y).drag().c({l: 20, C: 0, ls: lf || 1}).dc([50], [200, 0, 100], [100, 100, 100])
		return h
	}
	s.mick(500, 200)
	s.mick(700, 100, {c1: 'b', c2: 'X'})
	s.mick(700, 300, {c2: 'b'})
	s.mick(100, 100, {y2: 10})
	s.mick(100, 200, {y2: 200})
	s.mick(100, 300, {x2: 100})
}//better with WAP
SPILL = PIT = BALLPIT = function () {
	$W();
	_.ev(.04, function () {
		w.s.xT(w.s.t(function () {
			if (R(5) < 3) {
				w.ball(20)
			}
		}))
	})
}//B+
GRID = function () {
	St()
	ct = st.ct()
	ct.SL()
	rows = 5;
	cols = 6;
	sqP = 12;
	sqS = 80
	sqSP = sqS + sqP
	_.t(rows * cols, function (i) {
		drawSquare(ct, sqSP * (i % cols), sqSP * M.fl(i / cols)
		)
	})
	function drawSquare(ct, x, y) {
		var h = $H()
		h.a2(ct).f($r())
		h.graphics.dr(5, 5, 70, 70)
		if (x) {
			h.X(x)
		}
		if (y) {
			h.Y(y)
		}
		return h
	}
	
	st.u()
}//A-
TWORECS = function () {
	St()
	ct = s.ct(1000, 300).drag()
	ct.rec({w: 400, h: 200, c: 'r', C: 'o', l: 10, a: -5})
	h1 = ct.rec({w: 200, h: 400, c: 'r', C: 'o', l: 10, a: 5})
	h = s.h().dr2() // h is another container.. to clr ->  h1.children[0].clr()
	st.u()
}//C-
REC = function () {
	s = $St()
	s.h(600, 300).graphics.rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(600, 100).graphics.rf(
			['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(800, 300).rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(400, 300).rf(
			['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h().cir(0, 0, 10)
	///////////////
	x1 = 100
	y1 = 150
	r1 = 20
	x2 = 100
	y2 = 150
	r2 = 100
	h = $h(10, 10).a2(s).drag()
	change = function () {
		
		//  h.remove()
		// h=cjs.h(10, 10).a2(s).drag()
		h.graphics.rf(["red", 'blue', "yellow"], [0, .5, 1], x1, y1, r1, x2, y2, r2).dr(0, 0, 400, 400).ef()
		r1++
		r2++
	}
	setInterval(change, 1000)
	change()
	h = s.h(480, 270).drag()
	h.C('z', 2).lf({x: -100, c1: 'r', c2: 'y'})
			.dr2({w: 300, h: 100, x: 0, y: -100},
			{w: 100, h: 300})
	s.h(180, 270).drag()
			.lf({c1: 'r', c2: 'y', x1: -100}).dr2(
			{w: 300, h: 100, x: 0, y: -100},
			{w: 100, h: 300})
}//B+
ROTREC = function () {
	St()
	ct = s.ct(600, 300)
	ct.rec({w: 400, h: 400, c: 'r', C: 'o', l: 10, a: -5})
	ct.rec({w: 100, h: 200, c: 'b', C: 'w', l: 20, a: 20, rg: 1})
	h = ct.rec({
		w: 100, h: 200, a: 20,
		c: 'b', C: 'w', l: 20, bm: 1
	}).X(100)
	_.in(8, function () {
		h.X(0)
	}) //notice how gradient is seen behind the bm!!!
}//D
RR = ROUNDREC = function () {
	s = $St()
	h = s.h()
	h.c('b', 'r', 5).dc(100, 100, 100)
	h.dr(300, 200, 100, 50)
	h.dr2(500, 200, 100, 50)
	h.rr2(500, 200, 100, 50, 50)
	h.de2(500, 200, 100, 50)
	/*
	 s.dot(100, 100)
	 s.dot(300, 200)
	 s.dot(500, 200)
	 s.dot(500, 200)
	 s.dot(500, 200)*/
	s.u()
}//C+
