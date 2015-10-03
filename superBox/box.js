$load('mouse','vector','bool','moreWorld')

$bW = function () {
	var g = G(arguments), o
	o = N(g.s) ? {gx: g.f, gy: g.s, igSl: g.t} :
			N(g.f) ? {gy: g.f, igSl: g.s} :
			{igSl: g.f}
	o.gx = N(o.gx, 0)
	o.gy = N(o.gy, 10)
	o.igSl = U(o.igSl) ? false : !!o.igSl
	ab = b2d.AB(100 / 30, 100 / 30, 500 / 30, 500 / 30)
	return new b2d.World(V(0, 10), false)
}
w.G = function (x, y) {
	var w = this,
			v, currG = w.GetGravity()
	if (U(x)) {
		return currG
	}
	if (N(x)) {
		v = N(y) ? V(x, y) : V(0, x)
	}
	else if (x == 'flip') {
		v = V(-currG.x, -currG.y)
	}
	w.SetGravity(v)
	return w
}
function debug(){
	dd.cx= dd.spr= dd.i=  dd.sprite = function (spr) {
		var dd = this  //it is looking for  a context?
		if (U(spr)) {
			return dd.GetSprite()
		}
		dd.SetSprite(spr)
		return dd
	}
	dd.sc= dd.dS=  dd.scale = dd.drawScale = function (sc) {
		var dd = this
		if (U(sc)) {
			return dd.GetDrawScale()
		}
		dd.SetDrawScale(sc)
		return dd
	}
	dd.fA= dd.alpha = dd.fillAlpha =  function (a) {
		var dd = this
		if (U(a)) {
			return dd.GetFillAlpha()
		}
		dd.SetFillAlpha(a)
		return dd
	}
	dd.lT= dd.line = dd.lineThickness =  function (lt) {
		var dd = this
		if (U(lt)) {
			return dd.GetLineThickness()
		}
		dd.SetLineThickness(lt);
		return dd
	}
	dd.fl= dd.flags =  function (flags) {
		var dd = this, DD = b2DebugDraw
		if (U(flags)) {
			return dd.GetFlags()
		}
		if (flags == '*') {
			flags = DD.e_shapeBit //| DD.e_jointBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit | DD.e_controllerBit
		}
		dd.SetFlags(flags)
		return dd
	}
	w.sDD= function(dbD){this.SetDebugDraw(dbD);return this}
	$dD =b2d.debugDraw = function () {
		var g = G(arguments), o, dbD = new b2DebugDraw()
		var DD = b2DebugDraw
		//var flags= DD.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
		var flags = b2DebugDraw.e_shapeBit// | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
		o = {cx: g.f,  sc: g.s,  fl: g.t,  al: g[4], l: g[3]}
		if ($.iC(o.cx)){ o.cx = $(o.cx).ctx()  }
		o.sc = N(o.sc, 30)
		
		o.fl = o.fl || flags
		
		o.l = N(o.l, 20)
		
		o.al = N(o.al, .95)
		if (o.cx) {dbD.sprite(o.cx)}
		if (o.sc) {dbD.scale(o.sc)}
		dbD.flags(o.fl)
		dbD.alpha(N(o.al, 0.5))
		return _dbD = dbD
	}
	w.dbD = w.bug =   function () {var w = this, g = G(arguments)
		// this.scale = dd.scale()
		w.sDD( $dD.apply(null, g) )
		return w
	}
	w.dDD = function () {
		this.DrawDebugData()
		return this
	}
}; debug()
w.go=w.step = function (time, a, b) {w = this, g = G(arguments)
	
	w.Step(time, N(a, 8), N(b, 3))
	if(g.p){w.dDD()}
	
	return w
	
}
w.cB = w.CreateBody
w.dB = function (x, y) {
	return this.cB(b2d.bD(x, y))
}
w.sB = function (x, y) {
	return this.cB(b2d.sD(x, y))
}
w.n = w.count = w.getBodyCount = w.bC = w.gBC = function () {
	return this.GetBodyCount()}

b2d.cH = function (r) {
	r = N(r, 50)
	return new b2d.CircleShape(r / 30)
}
b2d.pH = function (W, H, x, y, a) {//makes a fixtDef with a polyShape
	//| 50,200[[,200,60,45
//| [20,300],.. //-> g.a(p,'arr')// -> g.a(p.arr)
	var g = G(arguments), p = new b2d.PolygonShape()
	if (g.N_) {
		p.box(g.f, g.s, g.t, g[3], g[4])
	}
	else if (g.OO_) {
		$a(p, 'arr', g)
	}
	return p
}


b2d.fD = b2d.f = function (h,x,y) {

	var g = G(arguments),
			fD = new b2d.FixtureDef
	if (g.n) {
		fD.isSensor = true
	}
	
	if (h) {
		fD.shape = h
		if(x){fD.shape.sLP(x,y)}
	}
	return fD
}



b2d.cir = function (r, x, y, d) {
	alert('b2d.cir')
	var g = G(arguments), o, fD, h
	o = g.O ? g.f : {x: g.f, y: g.s, r: g.t, d: g[3]}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 60)
	o.d = N(o.d, 1)
	fD = new b2d.FixtureDef
	h = new b2d.CircleShape(r / 30)
	h.SetLocalPosition(V(x, y).div())
	fD.shape = h
	fD.d(d)
	if (g.n) {
		fD.isSensor = true
	}
	return fD
}
b2d.pol = function () {
	return b2d.fD($a(b2d.pH, arguments))
			.d(1).fr(.2).r(.2)
}
b2d.rec = function () {
	var g = G(arguments), r, fD, o, v, p = b2d.pH()
	if (g.OO_) {
		p.arr(g)
	}  //b2d.cant make multiple recs at once anyway.. so this must mean VERTS!
	else {
		o = g.O ? g.f :
		{w: g.f, h: g.s, x: g.t, y: g[3], a: g[4], d: g[5]}
		p.box(o)
	}
	fD = b2d.fD(p).d(N(o.d, .5))
	if (g.n) {
		fD.isSensor = true
	}
	return fD
	/*
	 //will set cols unless you pass in 0
	 if(o.c==0){o.c=null}
	 if(o.c==00){o.c=null;o.C=null}
	 if(o.c=='*'){o.c=$r()}
	 if(o.c=='**'){o.c=$r();o.C=$r()}
	 o.c =o.c||'z'
	 o.C =o.C||'w'
	 o.l = _.tN(o.l,4)
	 o.c1 = o.c1||'z'
	 o.c2 = o.c2||'w'
	 o.s1= _.tN(o.s1)
	 o.s2= _.tN(o.s2,1)
	 //
	 o.x1 = _.tN(o.x1)
	 o.y1 = _.tN(o.y1)
	 o.x2 =_.tN(o.x2);
	 o.y2 = N(o.y2)?o.y2:N(o.r)? o.r*2:100
	 o.r1=_.tN(o.r1)
	 o.r2=_.tN(o.r2,200)
	 // o.i image
	 //o.k kind
	 // o.p  layer position
	
	
	 //o.bm//o.bM
	 //o.g gradient
	
	 //o.m mass
	 //o.t type
	 // o.v = o.v || [] //verts
	 //o.X
	 //o.z clr
	 */
}
b2d.bD = b2d.BD = b2d.dBD = b2d.dD = b2d.D = b2d.dyn = function (x, y) {
	var v = V(x, y),
			
			bD = new b2BodyDef()
	
	bD.XY(N(v.x, 100), N(v.y, 100))
	bD.dyn()
	return bD
}
b2d.sD = b2d.S = b2d.stat = function (x, y) {
	return b2d.bD(x, y).stat()
}
b2d.kD = function (x, y) {
	return b2d.bD(x, y).T(1)
}
w.S = function () {
	var w = this, g = G(arguments), bD, b, fs, k, o//,D=b2d.D
	if (S(_.l(g))) {
		k = g.pop()
	}
	//here, we just have two options..
	// we can pass in x and y as numbers..
	// or as an object
	// the rest (non-position-related) args form an array of fixtures
	o = g.N_ ? {
		b: V(g.f, g.s),
		f: _.r(g, 2)
	} : {
		b: V(g.f),
		f: _.r(g)
	}
	o.b = b2d.S(o.b)
	if (k) {
		o.k = k
	}
	b = w.cB(o.b)
	if (g.n) {
		o.f.push('-')
	}
	b.f.apply(b, o.f)
	if (o.k) {
		b.K(o.k)
	}
	return b
	function alpha() {
		//array of multiple fixtures
		if (g.A) {//alert('see w.D'); $l('mult')
			_.e(o.f, function (f) {
				if (g.n) {
					b.f(f, '-')
				}
				else {
					b.f(f)
				}
			})
			if (o.k) {
				b.K(o.k)
			}
			return b
		}
	}
}
b.cF = function (fD) {
	return this.CreateFixture(fD)
}
b.A=function(fD){this.cF(fD);return this}

b2d.cFD = function (rad) {
	return b2d.fD(b2d.cH(rad))
}


fD.DBF = function (d, bo, fr) {
	this.d(N(d, 1))
	this.bo(N(bo, .9))
	this.fr(N(fr, .5))
	return this
}
b.sP = function (x, y) {
	var v = V(x, y)
	this.SetPosition(V(v.x / 30, v.y / 30))
	return this
}
 

function vector() {
	b2d.AB = function (x1, y1, x2, y2) {
		var g = G(arguments)
		var g = G(arguments), ab
		ab = new b2d.Collision.b2AABB
		if (g.p) {
			ab.lowerBound.Set(x1, y1)
			ab.upperBound.Set(x2, y2)
		}
		else {
			if (U(g[2])) {
				ab.lowerBound.Set(g[0] / 30 - 0.01, g[1] / 30 - 0.01)
				ab.upperBound.Set(g[0] / 30 + 0.01, g[1] / 30 + 0.01)
			}
			else {
				ab.lowerBound.Set(g[0] / 30, g[1] / 30)
				ab.upperBound.Set(g[2] / 30, g[3] / 30)
			}
		}
		return ab
	}
	v.m = v.mult = function (num) {
		num = N(num) ? num : 30
		var v = _.clone(this)
		v.Multiply(num)
		return v
	}
	v.d = v.div = function (num) {
		num = N(num) ? num : 30
		return this.mult(1 / num)
	}
	v.add = v.a = function () {
		var v = this, g = G(arguments), v1
		if (g[2]) {
			return _.m(g, function (g) {
				return v.add(g)
			})
		}
		v1 = g.u ? V(1, 1) : V(g.f, g[1])
		return V(
				v.x + v1.x,
				v.y + v1.y
		)
	}
	v.A = function () {
		var v = this, g = G(arguments), v1
		if (A(g[0]) && U(g[1])) {
			_.e(g, function (g) {
				v1 = V(g)
				v.add(v1.x, v1.y)
			})
		}
		else {
			v1 = V(g)
			v.add(v1.x, v1.y)
		}
	}
	/*
	 b2d.add=function(vs,p){
	
	 return _.m(vs, function(v){
	
	 return v.add(p)
	
	 })
	 }*/
	v.s = v.sub = function () {
		var v = this, g = G(arguments),
				o = V(g[0], g[1])
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		return V(v.x - o.x, v.y - o.y)
	}
	v.tF = v.f = v.dec = v.toFixed = function (n) {
		var v = this
		n = N(n, 1)
		return V(
				Number(v.x.toFixed(n)),
				Number(v.y.toFixed(n))
		)
	}
	v.r = v.rt= v.rot = function (rot) {
		var x = this.x, y = this.y,
				rot = Math.toRadians(rot),
				cos = Math.cos, sin = Math.sin
		return V(
				x * cos(rot) - y * sin(rot),
				x * sin(rot) + y * cos(rot)
		).dec(3)
	}
	V = function (x, y, x2, y2) {
		var g = G(arguments),
				x = g[0], y = g[1],
				x2 = g[2], y2 = g[3],
				v
		if (A(x)) {
			y2 = x[3]
			x2 = x[2]
			y = x[1]
			x = x[0]
		}
		if (N(y2)) {
			x = (x - x2) / 2
			y = (y - y2) / 2
		} //for dist difs?
		else if (O(x)) {
			if (b2d.iF(O(x))) {
				x = x.B()
			}
			y = F(x.Y) ? x.Y() : x.y
			x = F(x.X) ? x.X() : x.x
		}
		x = N(x, 0)
		y = N(y, x)
		v = new b2d.Common.Math.b2Vec2(x, y)
		if (g.n || g.d) {
			v = v.d()
		}
		if (g.p || g.m) {
			v = v.m()
		}
		return v}
	v.tA = function () {
		return [this.x, this.y]
	}
	b2d.mult = function (v) {
		return V(v).mult()
	}
	b2d.div = function (v) {
		return V(v).div()
	}
	b2d.mat22 = function (v1, v2) {
		var m = new b2d.Mat22()
		m.SetVV(v1, v2)
		return m
	}
	b2d.tf = function (v1, v2, v3) {
		if (U(v1)) {
			return new b2d.Math.b2Transform()
		}
		if (A(v1)) {
			return b2d.tf(
					V(v1[0], v1[1]),
					V(v1[2], v1[3]),
					V(v1[4], v1[5]))
		}
		var tf = new b2d.Math.b2Transform(v1, b2d.mat22(v2, v3))
		return tf
	}
}
function moreWorld() {
	w.bs = w.bL = function () {
		return this.GetBodyList()
	}    //can be result of w.b if g.u//= w.getBodyList
	w.xB = w.Xx = w.Xb = function (b) {
		var w = this
		if (U(b)) {
			w.e(function (b) {
				w.xB(b)
			})
		}
		else {
			w.DestroyBody(b)
		}
		return w
	}
	w.Q = function () {
		var w = this, g = G(arguments), o
		o = g.O ? g.f :
				g.S_ && N(g.s) ? {k: g.f, x: g.s, y: g.t, fn: g[3]} :
						g.S_ && O(g.s) ? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
								g.F_ ? _.x({fn: g.f, n: 0}, O(g.s) ? {x1: g.s.x, y1: g.s.y} : {
									x1: g.s,
									y1: g.t,
									x2: g[3],
									y2: g[4]
								}) :
										g.O_ ? {x1: g.f.x, y1: g.f.y, fn: g.s} :
										{x1: g.f, x2: g.s, fn: g.t}
		o.n = 0
		w.QueryAABB(function (f) {
					var res;
					o.n++
					res = o.fn(f, f.B(), o.n)
					if (res !== false) {
						return true
					}
				},
				b2d.AB(o.x1, o.y1, o.x2, o.y2))
		return w
		//but it makes a rectangle not square ??
	}//w.QUERY =
	w.rad = function (x, y, r, fn) {
		return this.Q({
			x1: x - r,
			y1: y - r,
			x2: x + r,
			y2: y + r,
			fn: fn
		})
	}
	w.query = w.q = function () {
		var w = this, g = G(arguments), o, fx
		o = g.S_ && N(g.s) ? {k: g.f, x: g.s, y: g.t, fn: g[3]} :
				g.S_ && O(g.s) ? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
						g.N_ ? {x: g.f, y: g.s, fn: g.t, k: g[3]} :
								g.A_ ? {x: g.f[0], y: g.f[1], fn: g.s, k: g.t} :
								{x: g.f.x, y: g.f.y, fn: g.s, k: g.t}
		w.QueryAABB(
				function (f) {
					if (f && f.of(o.k) && f.tP(o.x, o.y)) {
						fx = f;
						return
					}
					return true
				},
				b2d.AB(o.x, o.y)
		)
		if (fx) {
			if (F(o.fn)) {
				_.b(o.fn, fx)(fx);
				return w
			}
			return fx
		}
	}
	w.eEv = w.eachEvery = function (fn) {
		var w = this
		z(function () {
			w.e(fn)
		})
		return w
	}
	w.inEv = function (n1, n2, fn) {
		_.in(n1, function () {
			_.ev(n2, function () {
				fn()
			})
		})
	}
	w.evIn = function (n1, n2, fn) {
		_.ev(n1, function () {
			_.in(n2, function () {
				fn()
			})
		})
	}
	w.e = w.each = function () {
		var w = this, g = G(arguments), o,
				bs = w.GetBodyList(), k, b, arr
		o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f}
		if (g.u) {
			alert('w.e')
		}
		arr = []
		while (bs) {
			b = bs;
			bs = bs.N()
			if (b.of(o.k)) {
				arr.push(b)
			}
		}
		_.e(arr, function (b) {
			o.fn(b)
		})
		return w
	}
}
function bool() {
	b2d.tB = b2d.toBody = function (b) {
		return b2d.iB(b) ? b :
				b2d.iF(b) ? b.B() :
						null
	}
	b2d.iV = b2d.isV = function (v) {
		if (v) {
			return v.constructor.name == "b2Vec2"
		}
	}
	b2d.iH = function (h) {
		var typ
		if (O(h)) {
			typ = h.constructor.name
			return (typ == "b2PolygonShape") || (typ == "b2CircleShape") || (typ == "b2AShape")
		}
	}
	b2d.iBD = b2d.isBDef = function (bd) {
		return O(bd) && F(bd.b2BodyDef)
	}
	b2d.iB = b2d.isB = b2d.isBody = function (b) {
		if (O(b)) {
			return b.constructor.name == 'b2Body'
		}
	}
	b2d.iFD = b2d.isFD = function (fD) {
		return O(fD) && fD.b2FixtureDef
	}
	b2d.iF = function (f) {
		if (!f) {
			return false
		}
		return f.constructor.name == "b2Fixture"
	}
}
function mouse() {
	w.md = function (fn) {
		var w = this
		w.i.c.mousedown(function (e) {
			var o = {x: w.mx, y: w.my, X: e.clientX, Y: e.clientY, e: e}
			w.q(w.mx, w.my, function (f) {
				if (f) {
					o.f = f;
					o.b = f.B()
				}
			})
			fn(o)
		})
		return w
	}
	w.mu = function (fn) {
		var w = this
		$(w.i.canvas)
				.mouseup(function (e) {
					fn({x: w.mx, y: w.my, e: e})
				})
		return w
	}
	w.mm = function (fn) {
		var w = this, g = G(arguments)
		$.mousemove(function (e) {
			var o = {x: w.mx, y: w.my, X: e.clientX, Y: e.clientY, e: e}
			fn(o)
		})
		return w
	}
	w.$ = function (fn) {
		var w = this
		w.UI().click(function (e) {
			fn({x: w.mx, y: w.my, e: e})
		})
		return w
	}
	w.$$ = function (fn) {
		var w = this
		w.UI().dblclick(function (e) {
			fn({x: w.mx, y: w.my, e: e})
		})
		return w
	}
	w.mdq = function (fn) {
		var w = this
		w.md(function (e) {
			w.q(e.x, e.y, function (f) {
				fn(f, e)
			})
		})
		return this
	}
	w.e$ = function () {
		var g = G(arguments), o
		o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
		this.e(function (b) {
			if (b.of(o.k)) {
				b.$(o.fn)
			}
		})
		return this
	}
}
wowOld = function () {/*

 b.aI=function(sc){var b=this;
 b.i(b.v().m(N(sc,100))
 return b}
 //ApplyLinearImpulse(forceDirection, body->GetPosition(), true);

 */
//f.getType = f.gT = function(someType){var b=this.B(), t=b.GetType(); return  D(someType)?(someType==t):t}
	b2d.AHx = b2d.AShapex = function (pam, p2) {//dep .. use polyH
		var ag, arr, h
		ag = (p2) ? arguments : pam
		arr = _.m(ag, function (v) {
			return V(v).div()
		})
		h = b2d.pH()
		h.arr(arr)
		return h
	}
	pH.arr = function () {
		var pH = this
		var v = b2d.verts.apply(null, arguments)
		pH.SetAsArray(v, v.length)
		return pH
	}
//make polyShape (by box or arr) for a fD
	b2d.pH = b2d.polyH = function me(W, H, x, y, a) {
		var g = G(arguments),
				p = new b2d.PolygonShape()
		if (g.N_) {//| 50,200[[,200,60,45
			p.box(g.f, g.s, g.t, g[3], g[4])
		}
		else if (g.O_) {//| [20,300],..
			$a(p, 'arr', g)
			//-> g.a(p,'arr')
			// -> g.a(p.arr)
		}
		return p
	}
	pH.set = function () {
		var pH = this, g = G(arguments)
		if (N(g[0])) {
			pH.box(g[0], g[1], g[2], g[3], g[4])
		}
		else if (O(g[0])) {
			pH.arr.apply(pH, g)
		}
		return pH
	}
}
function later(){
	w.gB = function () {
		$l('w.gB')
		return this.GetGroundBody()
	}
	w.cF = w.clear = function () {
		$l('clear')
		var w = this
		w.ClearForces();
		return w
	}
	function alpha() {
		b2d.Common.Math.b2Transform.prototype.toArr = function () {
			alert('b2d.Common.Math.b2Transform.prototype.toArr')
			var tf = this,
					pos = tf.position,
					R = tf.R,
					col1 = R.col1,
					col2 = R.col2
			return [pos.x, pos.y, col1.x, col1.y, col2.x, col2.y]
		}
	}
//hmm.. fixt doesnt have a rel loc.. its shape does
//what if u want to change 'shape' of shape, but keep its rel loc?
	
	b2d.pollute = function () {
		alert('b2d.pollute')
		b2Vec2 = Box2D.Common.Math.b2Vec2
		b2AABB = Box2D.Collision.b2AABB
		b2BodyDef = Box2D.Dynamics.b2BodyDef
		b2Body = Box2D.Dynamics.b2Body
		b2FixtureDef = Box2D.Dynamics.b2FixtureDef
		b2Fixture = Box2D.Dynamics.b2Fixture
		b2World = Box2D.Dynamics.b2World
		b2MassData = Box2D.Collision.Shapes.b2MassData
		b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
		b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
		b2DebugDraw = Box2D.Dynamics.b2DebugDraw
		b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef
		b2Shape = Box2D.Collision.Shapes.b2Shape
		b2Joint = Box2D.Dynamics.Joints.b2Joint
		b2Settings = Box2D.Common.b2Settings
	}
	old = function () {
		sB = b2Body.b2_staticBody
		dB = b2Body.b2_dynamicBody
		shB = b2d.DebugDraw.e_shapeBit
		jB = b2d.DebugDraw.e_jointBit
		//cv = el = $.fn
		//divide by 30 to get meters
//all bx-obs have reg at center
//fixture: shape, friction, density[1], restitution
//body: x,y,type
//shape.setasbox(w,h)    .. again, divide values by 30
//debug.setsprite(canvas), .setdrawscale(30)
//debug.setflags(what to draw :: shapeBit||jointBit)
//world.setDebugDraw(debug)
//world.drawDebugdata
//worldstep(time(keep in sync with easel),
// vel iterations?(calcs forces - higher is more accurate but more intensive),
//  pos iterations  //can set both to 10
// )
//world clearforces
//static body for ground, dynamic for objs
	}
	
}
ADD = function () {
	W().P()
	b = w.brick().C('r')
	p = M.p(b)
	//v=p.vs()
	//p.reg(b)
	w.S(100, 0).pol('z', M.p(b))
	_.in(function () {
		// w.S(0,0).pol('y',v)
	})
	//v1= v.add(400,500)
}
b2d.edg = function (x1, y1, x2, y2) {
	var fd = b2d.pol()
	fd.shape.SetAsEdge(V(x1, y1, '-'), V(x2, y2, '-'))
	return fd
}
function _pre() {
	b2d = Box2D
	b2d.Fixture = b2d.Dynamics.b2Fixture
	b2B = b2Body = b2d.Dynamics.b2Body
	b2d.Joints = BXJ = b2d.Dynamics.Joints
	b2d.bodyDef = b2BodyDef = b2d.Dynamics.b2BodyDef
	b2FixtureDef = b2d.Dynamics.b2FixtureDef
	b2d.fixture = b2Fixture = b2d.Dynamics.b2Fixture
	b2d.World = b2World = b2d.Dynamics.b2World
	b2d.DebugDraw = b2DebugDraw = b2d.Dynamics.b2DebugDraw
	b2d.joint = bJ = b2d.Joints.b2Joint
	b2d.jointDef = bJD = b2d.Joints.b2JointDef
	b2d.distanceJoint = bDJ = b2d.Joints.b2DistanceJoint
	b2d.mouseJointDef = b2MouseJointDef = b2d.Dynamics.Joints.b2MouseJointDef
	b2d.massData = b2MassData = b2d.Collision.Shapes.b2MassData
	b2d.AABB = b2AABB = b2d.Collision.b2AABB
	b2d.Shapes = b2d.Collision.Shapes //BXS=
	b2d.PolygonShape = b2PolygonShape = b2d.Shapes.b2PolygonShape
	b2d.CircleShape = b2CircleShape = b2d.Shapes.b2CircleShape
	b2d.Segment = b2d.Collision.b2Segment
	b2d.Collision.b2Simplex
	b2d.Collision.b2Bound
	b2d.Collision.b2AABB
	b2d.Collision.b2BoundValues
	b2d.Collision.b2ContactID
	b2d.Collision.b2ContactPoint
	b2d.Collision.b2Distance
	b2d.Collision.b2DistanceInput
	b2d.Collision.b2DistanceOutput
	b2d.Collision.b2DistanceProxy
	b2d.Collision.b2DynamicTree
	b2d.Collision.b2DynamicTreeNode
	b2d.Collision.b2DynamicTreePair
	b2d.Collision.b2RayCastInput
	b2d.Collision.b2RayCastOutput
	b2d.ControllerEdge = b2d.Dynamics.Controllers.b2ControllerEdge
	b2d.Controllers = b2d.Dynamics.Controllers
	b2d.Math = b2d.Common.Math
	b2d.Mat22 = b2d.Math.b2Mat22
	b2d.Mat33 = b2d.Math.b2Mat33
	b2d.FixtureDef = b2d.Dynamics.b2FixtureDef
	b2d.PrismaticJointDef = b2d.Joints.b2PrismaticJointDef
	b2d.RevoluteJointDef = b2d.Joints.b2RevoluteJointDef
	b2d.RevoluteJoint = b2d.Joints.b2RevoluteJoint
	b2d.Body = b2d.Dynamics.b2Body
	b2d.Fixture = b2d.Dynamics.b2Fixture
	b2d.ConstantAccelController = b2d.Dynamics.Controllers.b2ConstantAccelController
	b2d.BuoyancyController = new b2d.Dynamics.Controllers.b2BuoyancyController
	b2d.Fixture = b2d.Dynamics.b2Fixture
	b2d.FixtureDef = b2d.Dynamics.b2FixtureDef
	b2d.p = function () {
		aCo = b2d.Dynamics.Controllers.b2ConstantAccelController.prototype
		b = b2d.Body.prototype
		bCo = b2d.Dynamics.Controllers.b2BuoyancyController.prototype//bCo = b2d.BuoyancyController= b2d.Dynamics.Controllers.b2BuoyancyController
		bD = b2d.Dynamics.b2BodyDef.prototype
		cx = b2d.Dynamics.Contacts.b2Contact.prototype
		cxI = b2d.Dynamics.b2ContactImpulse.prototype
		ct = cjs.Container.prototype
		co = b2d.Dynamics.Controllers.b2Controller.prototype
		c = HTMLCanvasElement.prototype
		cH = b2d.CircleShape.prototype
		dd = b2d.Dynamics.b2DebugDraw.prototype
		dJD = b2d.Joints.b2DistanceJointDef.prototype
		dJ = b2d.Joints.b2Joint.prototype
		eD = cjs.EventDispatcher.prototype
		f = b2d.Fixture.prototype
		fCo = b2d.Dynamics.Controllers.b2ConstantForceController.prototype
		fd = fD = b2d.FixtureDef.prototype
		gCo = b2d.Dynamics.Controllers.b2GravityController.prototype
		gx = cjs.Graphics.prototype
		h = cjs.Shape.prototype
		i = cjs.DisplayObject.prototype
		jD = b2d.Joints.b2JointDef.prototype
		j = b2d.Joints.b2Joint.prototype
		l = b2d.Dynamics.b2ContactListener.prototype
		mJ = b2d.Joints.b2MouseJoint.prototype
		mc = cjs.MovieClip.prototype
		flDa = b2d.Dynamics.b2FilterData.prototype
		pH = b2d.PolygonShape.prototype
		
		pJ = b2d.Joints.b2PrismaticJoint.prototype
		pJD = pd = b2d.Joints.b2PrismaticJointDef.prototype
		pD = gpcas.geometry.PolyDefault.prototype//////////////////
		ps = gpcas.geometry.PolySimple.prototype/////////////////////////
		q = cjs.LoadQueue.prototype
		rJD = b2d.RevoluteJointDef.prototype
		rJ = b2d.RevoluteJoint.prototype
		st = s = cjs.Stage.prototype
		sS = ss = cjs.SpriteSheet.prototype
		sSB = cjs.SpriteSheetBuilder.prototype
		sp = s = cjs.Sprite.prototype
		
		tl = cjs.Timeline.prototype
		
		t = cjs.Text.prototype
		
		tCo = b2d.Dynamics.Controllers.b2TensorDampingController.prototype
		
		tw = cjs.Tween.prototype
	
			v = b2d.Common.Math.b2Vec2.prototype
		w = b2d.World.prototype
		wJD = b2d.Joints.b2WeldJointDef
		wJ = b2d.Joints.b2WeldJoint
	
	
		
				x = ctx = xx = CanvasRenderingContext2D.prototype
		xGr = CanvasGradient.prototype
	
	
	
	
	}
	
	b2d.p()
	b2d.cn = b2d.controls = {}
}
 