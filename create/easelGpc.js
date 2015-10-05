$load()

h.$vs = function (polVs, ox, oy) {
	if (gpc.iP(polVs)) {
		polVs = polVs.vs()
	}
	return this.vs(polVs, ox, oy)
}
CJGPC = CJG = function () {
 $.h1('easel gpc'); st = $St(); h = st.h()
	p1 = $pD(vs1); p2 = $pD(vs2)
	Bt('diff', 'D' );  Bt('inter','I' );  Bt('uni', 'U' ); Bt('xor',  'X' )
	setup()
	function drawP(pol, sC, ox, oy) {

	pol.e(function(p,i,n){
	
		var col = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n])
		h.f(p.iH() ? 'z' : rgba({r: 255}, .1)).l(4).s(col)
		h.vs( p.pts(), ox, oy)
		.cp().s().f()

})
}
	function setup() {
	h.clr(400, 400);
	drawP(p1, "b", 0, -30);
	drawP(p2, "r", 0, -30)
}
function Bt(tx, op) {return $.bt(tx, function () {
		var p = p1[op](p2)
		setup();
		drawP(p, 'g', 0, 150)
	})}
}



function _pre(){
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
	];
	vs2 = [
		[131, 84],
		[224, 110],
		[174, 180],
		[120, 136],
		[60, 167],
	];

}

