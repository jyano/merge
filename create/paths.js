$load()

gx.pol=function(){}

h._lt= h.lt = function(x,y){
	var h = this, g = G(arguments)
	if(AO(g.f)){g.e(function(v){h.lt.apply(h, v)})}
	else if (O(g.s)) {g.e(function (pt) {h.lt(pt)})}
	else {this.graphics.lt( V(x, y).x, V(x, y).y )}
	return this
}
h._mt = function (x, y) {var g=G(arguments)
	var pt = V(g.f, g.s)
	this.graphics.mt(pt.x, pt.y)
	return this
}
h.mt = function(){var  g = G(arguments),o
	if(g.N ) {return  this._mt(g.f, g.s)}
	o = AO(g)?  {firPt: _.f(g.f), restPts: _.r(g.f), 							
	ox: g.s, oy: g.t}: {firPt: g.f, restPts: g.r}
	return  this._mt(
		o.firPt[0] + N(o.ox,0 ), 
		o.firPt[1] + N(o.oy, 0)
	).lt( M.os( o.restPts, o.ox, o.oy ) )
}
h.pol  = function () {


var h = this, g = G(arguments),o;
	o  = O$(g.f)? g.f:
			N(g.s) && N(g.t)?
			{v: g.f, ox: g.s, oy: g.t,  c: g[3], C: g[4], l: g[5]}:
			{v: g.f, c: g[1], C: g[2], l: g[3]}
	
	o.v = M.os( o.v, o.x, o.y)
	o = oDef(o || {})
	h.ef().es().c(o)
	
	if (o.bf) {
		h.bf('me', function draw() {
			h.mt(o.v).cp()
		})
	}/////////
	else { h.lt(o.v).cp() }
	return h
}

 

h.dl = h.ln = h.line = function () {
	var h = this, g = G(arguments), o
	o = g.N_ ?
	{x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
	{x1: g.f.x, y1: g.f.y, x2: g.s.x, y2: g.s.y}
	this.mt(o.x1, o.y1).lt(o.x2, o.y2)
	return this
}
function _pre() {
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

//toAlert:
gx.fancyLt = gx.poly = function (vs, f, s, w) {
	alert('gx.fancyLt = gx.poly')
	var gx = this, g = G(arguments), o
	o = AA(g.f) ? {vs: g.f, cCL: [g.s, g.t, g[3]]} : {vs: g}
	if (o.cCL) {
		gx.cCL.apply(gx, o.cCL)
	}
	_.e(o.vs, function (v) {
		gx.lt(v[0], v[1])
	})
	gx.cp()
	return this
}
//alpha:
h.$vs = function (polVs, ox, oy) {
	if (gpc.iP(polVs)) {
		polVs = polVs.vs()
	}
	return this.vs(polVs, ox, oy)
}

old = function () {
	h.vs1 = function () {
		var h = this, g = G(arguments), o;
		$l('h.vs')
		o = {v: g.f, ox: g.s, oy: g.t}
		o.ox = N(o.ox, 0)
		o.oy = N(o.oy, 0)
		h.mt(
				_.f(o.v)[0] + o.ox,
				_.f(o.v)[1] + o.oy
		)
		_.eR(o.v, function (v) {
			h.lt(v[0] + o.ox, v[1] + o.oy)
		})
		return h
		//  takes [pt,pt..] and draws it.. with optional offsets..
		//used by (but NOT  dependent on) gPoly 
	}
	h.vs = function (vs, x, y) {
		return this.mt(M.os(vs, x, y))
		//  takes [pt,pt..] and draws it.. with optional offsets..
		//used by (but NOT  dependent on) gPoly 
	}
}