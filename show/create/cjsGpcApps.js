CJGPC = CJG = function () {
	$.h1('easel gpc');
	st = $St();
	h = st.h()
	p1 = $pD(vs1);
	p2 = $pD(vs2)
	Bt('diff', 'D');
	Bt('inter', 'I');
	Bt('uni', 'U');
	Bt('xor', 'X')
	setup()
	function drawP(pol, sC, ox, oy) {
		pol.e(function (p, i, n) {
			var col = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n])
			h.f(p.iH() ? 'z' : rgba({r: 255}, .1)).l(4).s(col)
			h.vs(p.pts(), ox, oy)
					.cp().s().f()
		})
	}
	
	function setup() {
		h.clr(400, 400);
		drawP(p1, "b", 0, -30);
		drawP(p2, "r", 0, -30)
	}
	
	function Bt(tx, op) {
		return $.bt(tx, function () {
			var p = p1[op](p2)
			setup();
			drawP(p, 'g', 0, 150)
		})
	}
}
CJG2 = function () {
	__St()
	bts()
	setup()
	function drawP(pD, sC, ox, oy) {
		pD.e(function (innerPoly, i, n) {
			var col = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n])
			h.f(innerPoly.iH() ? 'z' : rgba({r: 255}, .1))
					.l(4).s(col)
					.vs(innerPoly.pts(), ox, oy).cp()
					.f().s()
		})
	}
	
	function setup() {
		h.clr(400, 400);
		drawP(p1, "b", 0, -30);
		drawP(p2, "r", 0, -30)
	}
	
	function bts() {
		Bt('diff', 'D');
		Bt('inter', 'I');
		Bt('uni', 'U');
		Bt('xor', 'X')
		function Bt(tx, op) {
			return $.bt(tx, function () {
				var p = p1[op](p2)
				setup();
				drawP(p, 'g', 0, 150)
			})
		}
	}
}
CJG1 = function () {
	__St()
	bts()
	setup()
	function drawP(pD, sC, ox, oy) {
		pD.e(function (innerPoly, i, n) {
			var sCol = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n]),
					fCol = innerPoly.iH() ? 'z' : rgba({r: 255}, .1),
					v = innerPoly.pts()
			h.c(fCol, sCol, 4).mt(v, ox, oy)
			//h.pol(v, ox, oy, fCol, sCol, 4)
			h.cp();
			h.f().s()
		})
	}
	
	function setup() {
		h.clr(400, 400);
		drawP(p1, "b", 0, -30);
		drawP(p2, "r", 0, -30)
	}
	
	function bts() {
		Bt('diff', 'D');
		Bt('inter', 'I');
		Bt('uni', 'U');
		Bt('xor', 'X')
		function Bt(tx, op) {
			return $.bt(tx, function () {
				var p = p1[op](p2)
				setup();
				drawP(p, 'g', 0, 150)
			})
		}
	}
}