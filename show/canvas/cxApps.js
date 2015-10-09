 
CXTF=function(){

	
	x = $.cx().f('y').fR(0, 0, 250, 100)
	.sT(3, 2,-2, 1, 400, 10).f('r').fR(0, 0, 250, 100)
	.sT(1,.5,-.5, 1, 30, 10).f('b').fR(0, 0, 250, 100)
	
	
}
DRAWIMAGE = function () {
	$.C('b')
	$CSS({
		div: {
			C: 'r', P: 10, M: 10, B: 10,
		},
		canvas: {outline: 'dashed yellow 20px'}
	})
	d = $.d().A(
			c = $('<canvas>').at({width: 900, height: 400}))
	x = c.ctx()
	i = new Image()
	i.src = '/guy.png'
	$(i).load(function () {
		x.drawImage(i, 100, 100)
	})
	$.i('me', function (i) {
		x.drawImage(i.target, 400, 100, 500, 200)
	})
	$.i('chicks', function (e, i) {
		x.drawImage(i[0], 400, 100, 300, 300)
	})
}
FILLSTY = function () {
	__C()
	x.f('g').r(20, 20, 400, 400).f()
	x.s('b').r(120, 120, 100, 100).s()
}
LINETO = function () {
	__C()
	x.l(60).s('r').b().l(120, 120).l(100, 100)
			.lt(1000, 10).lt(200, 100).l(100, 400).s()
	x.s('b').b().lt(
			[20, 120], [100, 10], [170, 130],
			[300, 10], [-120, -120], [150, 400]
	).s()
}
GCOMP = XORSTAMP = function () {
	__C()
	x.fit('chicks')
	x.xo()
	c.$(function (xx, yy) {
		$.i('me', function (e, i) {
			x.drawImage(
					i[0],
					xx - ($(i).W() / 2), yy - ($(i).H() / 2)
			)
		})
	})
}
CANTEXT = function () {
	__C()
	x.t('hello', 100, 100)
}
CANCROP = function () {
	__C()
	x.d("me")
	x.cr()
}
DRAWAPP = function () {
	__C()
	c.W(window.innerWidth)
	c.H(window.innerHeight)
	function draw() {
		x.s('r').f('o')
		x.fR(400, 300, 100, 220)
		x.f('b').fR(0, 0, 100, 220)
		x.f('r').fr2(0, 0, 100, 220)
		x.jD('me', 400, 500)
		// x.jD('me', 200, 400,800,300)
	}
	
	draw()
	_.in(function () {
		x.S()
		x.rt(10)
		draw()
		x.R()
		_.in(function () {
			x.S()
			x.tl(200, 200);
			draw()
			x.R()
			x.tl(20, 20);
			draw()
		})
	})
}
DRAWN = function () {
	__C()
	x.s('u').l(6).lC('round')
}
SDW = function () {
	__C()
	x.xShadow = 3
	x.yShadow = 3
	x.shadowBlur = 10
	x.shadowStyle = 'red'
	x.r(188, 40, 200, 100).f('r')
			.shC('#999').shB(20).shX(15).shY(15).f()
}
CANNTX = function () {
	__C()
	x.setFont('Helsinki 23px')
	x.f('b').fillText('haffasfsf', 400, 500)
}
RAWPX = function () {
	__C()
	i = new Image()
	$(i).load(function (e) {
		x.drawImage(e.target, 0, 0)
		d = x.getImageData(0, 0, 200, 200)
		for (var i = 0; i < d.data.length; i += 4) {
			d.data[i] = 255 - d.data[i];
			d.data[i + 1] = 255 - d.data[i + 1];
			d.data[i + 2] = 255 - d.data[i + 2];
			d.data[i + 3] = 255;
		}
		x.putImageData(d, 0, 0);
	})
	i.src = _.src('me')
}
PXX = function () {
	cx = $.cx()
	Q('me', function () {
		cx.d(Q.i('me'), 0, 0)
		cx.pol([
			[400, 0], [800, 100], [120, 120]
		])
	})
}
PXC = function () {
	cx = $.cx()
	cx.drP([[400, 0], [800, 100], [120, 120]], 'r', 'v')
}
GPM = function () {
	$.h1('blue op red')
	x = $.cx()
	$.d([
		$.bt('diff', function () {
			setup()
			drawP(p1.difference(p2), 'g', 0, 150)
		}),
		$.bt('inter', function () {
			setup()
			drawP(p1.intersection(p2), 'g', 0, 150)
		}),
		$.bt('uni', function () {
			setup()
			drawP(p1.union(p2), 'g', 0, 150)
		}),
		$.bt('xor', function () {
			setup()
			drawP(p1.xor(p2), 'g', 0, 150)
		})
	])
	function setup() {
		x.cR();
		drawP(p1, "blue", 0, -30);
		drawP(p2, "red", 0, -30)
	}
	
	drawP = function (p, sC, ox, oy) {
		var num = p.nP()
		_.t(num, function (i) {
			var pol = p.gIP(i), vs = []
			_.t(pol.n(), function (i) {
				vs.push([pol.gX(i), pol.gY(i)]);
			})
			if (i == 0) {
				draw1p(vs, oO('c', sC), pol.iH(), ox, oy)
			}
			else {
				draw1p(vs, ["#91ab19", "#ab9119", "#e5ce35", "#ab1998"][i % num], pol.iH(), ox, oy)
			}
		})
	}
	draw1p = function (vs, sC, hole, ox, oy) {
		var i;
		ox = N(ox, 0);
		oy = N(oy, 0)
		x.b().mt(vs[0][0] + ox, vs[0][1] + oy);
		for (i = 1; i < _.z(vs); i++) {
			x.lt(vs[i][0] + ox, vs[i][1] + oy)
		}
		x.lW(4).s(sC).f("rgba(255, 0, 0, 0.1)")
		if (hole) {
			alert('hole')
			x.f("z")
		}
		x.cP().s().f()
	}
	p1 = $pD(vs1)
	p2 = $pD(vs2)
	setup()
}
HOLEY = function () {
	vs2 = [
		[131, 84], [224, 110], [174, 280], [120, 136], [60, 167],
	]
	$.h1('holey - blue op red')
	x = $.cx()
	p1 = $pD(vs1)
	p2 = $pD(vs2)
	$.d([Bt('diff', p1.D(p2)), Bt('inter', p1.I(p2)), Bt('uni', p1.U(p2)), Bt('xor', p1.X(p2))])
	function setup() {
		x.cR();
		drawP(p1, "b", 0, -30);
		drawP(p2, "r", 0, -30)
	}
	
	function Bt(tx, p) {
		return $.bt(tx, function () {
			setup();
			drawP(p, 'g', 0, 150)
		})
	}
	
	function drawP(pol, sC, ox, oy) {
		var n
		_.t(n = pol.nP(), draw)
		function draw(i) {
			var p = pol.gIP(i)
			draw1p(p.pts(), col(i, n), p.iH(), N(ox, 0), N(oy, 0))
		}
		
		function col(i) {
			return i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n]
		}
	}
	
	function draw1p(vs, sC, hole, ox, oy) {
		var v0 = _.f(vs), i;
		ox = N(ox, 0)
		oy = N(oy, 0)
		x.b().mt(v0[0] + ox, v0[1] + oy)
		_.e(_.r(vs), function (v) {
			x.lt(v[0] + ox, v[1] + oy)
		})
		x.lW(4).s(oO('c', sC)).f(rgba({r: 255}, .1))
		if (hole) {
			alert('hole');
			x.f("z")
		}
		x.cP().s().f()
	}
	
	setup()
}


