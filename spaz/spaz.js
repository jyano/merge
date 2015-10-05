$load(  'dev','edge','wall','anim','wStuff','fromCreate')

i.tickX = function (fn) {
	var i = this
	T.t(function () {
		i.X(fn())
	})
	return i
}
i.tickY = function (fn) {
	var i = this
	T.t(function () {
		i.Y(fn())
	})
	return i
}

////
b.rec = function (c, W, H, x, y, a) {
	var b = this, w = b.W(), g = G(arguments, 'k'),
			o, fD, p, f
	
	if (g.OO_) {
		g.e(function (g) {
			b.rec(g)
		});
		return b
	}
	if (g.A) {
		return $a(b, 'rec', g)
	}
	if (g.O) {
		o = g.f
	}
	else {
		if (N(g.f)) {
			g.ush('z')
		}
		
		o = {c: g[0], w: g[1], h: g[2], x: g[3], y: g[4], a: g[5]}
		
	}
	
	$df.oDef(o)
	o.k = o.k || g.k
	fD = b2d.fD(b2d.pH().box(o))
	if (o.s || g.n) {
		fD.isSensor = true;
		o.al = N(o.al, 0.8)
	}
	
	fD.d(o.d || .5)
	f = b.f(fD)
	f.K(o)
	
	if (o.c !== 0) {
		// f.g=w.g.h().rec(o)
		if (g.p) {
			f.g = w.g.h().rec(o)
		}//  f.g= w.g.h().rec(o) //this for but: (does something important)
		
		else {
			f.g = w.g.rec(o)//(o.w, o.h, o.c, o.C, o.l)
			f.bS(f.g)
		}  //,  o.a, o.x, o.y, o.al  //<-this for bike (does rotation)
		// f.bS(f.g)
	}
	return f
	
}
b.sp = function () {
	$l('b.sp')
	var b = this, g = G(arguments), ch
	if (b.gx && b.gx.children) {
		ch = g.p ? b.gx.children : g.n ? b.gx.children[0] : _.l(b.gx.children)
		if (g.u) {
			return ch
		}
		if (g.F_) {
			_.e(ch, g.f);
			return this
		}
	}
}

w.sH = function (h) {var w = this
	if (U(h)) {return w.H * w.s.scaleY}
	w.s.scaleY = h / w.H
	return w
}
w.sTW=w.sToW = function(x,y){var w=this, //works
		x=x/w.z - w.s.x/ w.z,
		y=y/w.z - w.s.y/w.z
	//w.dot(x,y,'*') // cool
	return {x: x  ,y: y}}
w.wTS=w.wToS=  function(x,y){var w=this,
		x=(x +w.s.x/w.z)*w.z,
		y=(y+ w.s.y/w.z)*w.z
	return {x:x, y:y}}
w.lG=function(c,c2){var w=this,o
	o={c1:c2||'z', c2:c||'r', x1:0,y1:0,x2:0,y2:0}
	_.x(o,R()?(R()?{y2:w.h}:{x2:w.w}):
			R()?(R()?{x1:w.w,y1:w.h}:{x2:w.w,y2:w.h}):
					R()?{x1:w.w,y2:w.h}:{y1:w.h,x1:w.w})
	w.bg.h().lf(o).dr(0,0,w.w,w.h)
	w.bg.h(0, 0, $r()).dr(0, 0, w.w, w.h).al(.2)
	
	return w
}
w.warp = function () {
	var w = this
	w.eEv(function (b) {
		
		if (b.X() < 10) {
			b.X(w.W - 10)
		}
		if (b.X() > w.W - 10) {
			b.X(10)
		}
		if (b.Y() < 10) {
			b.Y(w.H - 10)
		}
		if (b.Y() > w.H - 10) {
			b.Y(10)
		}
	})
	
	return w
}
w.tE=function(fn){var w=this
	T.t(function(){  w.e(fn)  })
	return this
} // TICKER !!!!!
w.bmR= w.bR= w.bfR=function(){var w=this, g=G(arguments), b, h,o
	o = S(g.t)? {x: g.f, y: g.s, i: g.t, w: g[3], h:g[4], c:g[5]} :
	{x: g.f, y: g.s,  w: g.t, h:g[3], c:g[4]}
	o.i = o.i || 'sun'
	o.c = o.c || 'y' // can be removed
	b =   w.D(o.x, o.y, o.c, o.w, o.h)
	h= w.g.h().al(.5)
	if(o.c){h.c(o.c)}
	h.bf(o.i)
	h.rec(o.w, o.h)
	b.bS(h)
	return b
}
w.xW = function () {//used in MIRROR
	this.e('wall', function (b) {
		b.kill()
	})
	return this
}
w.l = w.dl = function () {
	var w = this, g = G(arguments), o, i
	o = S(g[0]) ?
	{c: g[0], x1: g[1], y1: g[2], x2: g[3], y2: g[4]}
			:
	{x1: g[0], y1: g[1], x2: g[2], y2: g[3]}
	i = g.p ? w.fg : g.n ? w.bg : g.d ? w.g : w.i
	o.c = o.c || (g.p ? 'p' : g.n ? 'r' : g.d ? 'd' : 'b')
	
	return i.h()
			.c(10, o.c)
			.mt(o.x1, o.y1)
			.lt(o.x2, o.y2).K('dev line')
	
	
}
w.dr = function (c, x, y, W, h) {
	var w = this, g = G(arguments), o
	o = g.S_ ? {c: g[0], x: g[1], y: g[2], w: g[3], h: g[4]}
			: {x: g[0], y: g[1], w: g[2], h: g[3]}
	_.x(o, g.p ? {g: w.fg, c: o.c || 'p'} :
			g.n ? {g: w.bg, c: o.c || 'r'} :
			{g: w.hud, c: o.c || 'b'})
	o.g.h().rec(o)
}
//dev
w.dbCross = function (x, y) {
	var w = this, c = w.cen()
	x = N(x, c.x)
	y = N(y, c.y)
	
	w.dr('t', -10 + x, -140 + y, 20, 300, '-')
	w.dr('t', -150 + x, -10 + y, 300, 20, '-')
	w.dot('r', x, y)
	
	return w
	
}
w.stats = function (n) {
	var w = this
	_d = $.d(400, 600, w.W, 0, '+').A($.h1('stats'))
	
	w.mdq(function (fx) {
		_f = _d._fix = fx;
		_b = _f.B()
	})
	
	if (n == 0) {
		z(upd)
	}
	
	else {
		_.ev(N(n, .2), upd)
	}
	
	return w
	
	function upd() {
		var f, b;
		if (_d._fix) {
			f = _d._fix
			b = f.B()
			
			_d.T(
					'ty: ' + (b.iD() ? 'dyn' : 'stat'),
					'x: ' + b.X(),
					'y: ' + b.Y(),
					'fK: ' + f.K(), 'bK: ' + b.K(),
					'sen: ' + f.sen(),
					'd: ' + f.d(),
					'fr: ' + f.fr(),
					'r: ' + f.r(),
					'bMass:' + parseInt(f.B().mass()),
					'bNum:' + f.B().n()
			)
			
		}
		
	}
}
w.devGrid = function () {
	var w = this
	_.t(12, function (i) {
		w.l(i * 200, 0, i * 200, w.h)
		w.l(i * 200, 0, i * 200, w.h, '-')
		w.l(0, i * 200, w.w, i * 200)
		w.l(0, i * 200, w.w, i * 200, '-')
	})
	return w
}
w.flash = function () {
	var w = this, s = w.s
	s.flash.apply(s, arguments)
	return w
}
//write
w.pop = function (t) {
	var w = this
	t = this.i.T(t || 'no text', 80, 'o', w.hW, 200)
	t.tw([{a: .5, sxy: .5}, 4000])
	_.in(4, function () {
		t.rm()
	})
	return this
}
w.pen = function (t, f, c) {
	var g = G(arguments), o
	if (this._T) {
		this._T.rm();
		this._T = null
	}
	
	o = {y: 100}
	
	o.x = g.n ? 200 : g.p ? this.W - 200 : this.hW
	
	this._T = this.i.T(t, f, c)
	this._T.XY(o.x, o.y)
	return this._T
}
w.chalk = function () {
	var w = this, g = G(arguments)
	w.i.chalk.apply(w.i, g)
	return w
}
w.show = function (fn) {
	var w = this, g = G(arguments)
	
	
	_.ev(.2, function () {
		
		w.pen(S(fn) ? window[fn] : fn())
		
	})
	
	return w
	
}

w.polyCirc = function (x, y, r, sides) {
	var w = this,
			b = w.D(x, y)
	b.pol({v: b2d.polyCirc(r, sides)})
	return b
}


function wall(){
	w.isWall=function(b){
		var w=this; return b == w.right || b == w.left || b == w.roof  || b == w.floor}
	w.clr  = function () {var w = this
		w.e(function (b) {if (!w.isWall(b)){b.kill()}})
		return w
	} //=w.wXx
	w._walls=function(o){var w=this
		if (o.w == '*') {sides();verSides()}
		if (o.w == '@') {w.warp(); return w }
		if (o.w == '_') { bot() }
		if (o.w == '~') { top() }
		if (o.w == '[') { left() }
		if (o.w == ']') {right()}
		if (o.w == 'U') {sides();bot()}
		if (o.w == 'A') {sides();top()}
		if (o.w == 'C') {verSides();left()}
		if (o.w == 'L') {left();bot()}
		if (o.w == '=') {verSides()}
		if (o.w == '|') {sides()}
		if (o.w == '->') {verSides();left();right1()}
		if (o.w == '<-') {verSides();left1();right()}
		if (o.w == '<->') {verSides();left1();right1() }
		if (o.w == 'r2') {verSides();left();right2()}
		if (o.w == 'l2') {verSides();left2();right()}
		function sides() {right();left()}
		function verSides() {top();bot()}
		function left() {w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h).K('wall side left'); w.l_.SetBullet(true)}
		function right() {w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h).K('wall side right'); w.r_.SetBullet(true)}
		function right2() {w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')}
		function right1() {w.r1_ = w.right1 = w.S(w.w, 100, o.c, o.l * 2, 200);
			w.r2_ = w.right2 = w.S(w.w, w.h - 100, 'o', o.l * 2, 200).K('wall side right')}
		function left2() {w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')}
		function left1() {w.l1_ = w.left1 = w.S(0, 100, o.c, o.l * 2, 200);
			w.l2_ = w.left2 = w.S(0, w.h - 100, 'o', o.l * 2, 200).K('wall side right')}
		function top() {
			w.t_ = w.roof = w.S(w.w / 2, 0, 'o', w.w, o.l * 2).K('wall roof'); w.t_.SetBullet(true)}
		function bot() {
			w.b_ = w.floor = w.S(w.w / 2, w.h, o.c, w.w, o.l * 2).K('wall floor'); w.b_.SetBullet(true)}
	}
	w.walls = function () {var w = this, g = G(arguments), o
		if (g.f === 0) {return}
		w._walls(wallOp(g))
		function wallOp(g){
			var o =  g.A? {w: g.f[0], c: g.f[1]} : {w:g.f, c: g.s}
			o.c = o.c || 'o';
			o.w = o.w || '*';
			o.l = 40
			return o}
	}
}

function anim(){
	w.ps =  tw.pos
	w.iGP= tw.ignore
	w.th= w.thrust=function(c,x,y,r){
		return this.D(N(x,600), N(y,500), c|| 'b', N(r,40)).cn('thrust')
	}
	w.pack=  w.PackThruster= function(ani){
		var th = w.th(600, 500,'b',100).C("X").r(1).fR()
		th.Sp( Pack, 0, 0, .8 )
		return th.p( ani||'f1' )
	}
	b.p= b.play = function (a, b, c, d) {
		if(O(this.sp())){this.sp().p(a, b, c, d)}
		return this
	}
	b.s= b.stop=function (a, b, c, d) {
		if(O(this.sp())){ this.sp().s(a,b,c,d) }
		return this
	}
}
function edge(){
	w.edgAr = function(){
		var w=this,
				g=G(arguments),
				X=0,
				Y= 0,
				x =w.D(400, 400,'z', [ [50, 50,  '-']])//.den(10)
		_.e(g, function(e){
			
			e =  w.edgD(e[0], e[1], e[2], e[3])
			w.wed(e,x,V(g[0][0], g[0][1]))
		})
		
		
		return x
	}
	w.edgD = function(x1,y1,x2,y2){var w=this,
			l = w.l(x1,y1,x2,y2),
			e = w.D(0,0,b2d.edg(x1,y1,x2,y2)).d(1)
		e.bS(l) //bS2
		return e
	}
	w.edgs = function(){var w=this, g=G(arguments), X=0, Y= 0, x =w.D(X,Y, 'z', [[100,100, 400,400, '-']]), x2 =w.D(2000, 1200, 'z', [[400,400,  '-']])
		if(A(g[0])){
			//  b = w.D(g[0][0],g[0][1], 'w',20,  g[0][0],g[0][1] )
			//  w.weld(x,b)
			// X=g[0][0]
			// Y=g[0][1]
		}
		_.e(g, function(e){if(A(e)){e = w.edgD.apply(w,e)}
			w.wed(e,x)})//  w.weld(x2  , x)
		w.dot(300, 300)
		return x2
	}
	w.edgsD=function(ar){var w=this
		
		ar = ar || [V(),V(100,100)]
		
		i = V( ar.shift() )
		i2 = V( ar.shift() )
		
		w.edg(i.x, i.y, i2.x, i2.y)
		
		_.e(ar, function(v){
			
			i = i2
			i2 = V(v)
			w.edg(i.x, i.y, i2.x, i2.y)})
	}
	w.edg= function(x1,y1,x2,y2){var w=this
		// you would always want a single stat?
		w.l(x1, y1, x2, y2,'-')
		
		return w.S(0, 0, b2d.edg(x1,y1,x2,y2))
	}
	w.edgs=function(ar){var w=this,e
		ar = ar || []
		i = V( ar.shift() )
		i2 = V( ar.shift() )
		e = w.edg(i.x, i.y, i2.x, i2.y)
		_.e(ar, function(v){
			i = i2
			i2 = V(v)
			e.glu(  w.edg(i.x, i.y, i2.x, i2.y) )
		})
	}
}
$W=function(){
	W()
	w.y()
	w.p()
}

f.bSQ = function (j) {
 
 
	var f = this
	Q(function () {
	
		//f.ctSp( Q.b(j) )
	})
	
	
	return f
}
function _pre() {
	toElse()
	shapz()
	function shapz() {
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
	}
	
	function toElse() {
		cH.sLP = function (v, y) {
			var v = V(x, y)
			this.SetLocalPosition(V(v.x / 30, v.y / 30))
			return this
		}
		b2d.m = function (vs) {
			return _.m(vs, b2d.mult)
		}
		b2d.tA = function (vs) {
			return _.m(vs, function (v) {
				return v.tA(v)
			})
		}
		M.lC = M.lineCenter
	}
}


function later() {
//alert
	b.dr = function (dr) {
		alert('b.dr')
		if (U(dr)) {
			return this.direction
		}
		this.direction = dr;
		return this
	}
	i.dr = function (dr) {
		alert('i.dr')
		if (U(dr)) {
			return this.direction
		}
		this.direction = dr;
		return this
	}
	i.nm = function (dr) {
		alret('i.nm')
		if (U(dr)) {
			return this.name
		}
		this.name = dr;
		return this
	}
// Hit testing the screen width, otherwise our sprite would disappear //
// We've reached the right side of our screen
// We need to walk left now to go back to our initial position
//sS.addFlipped(true, false, false)// walk_h has been generated by addFlippedFrames and// contained the right facing animations
//T.f(40)
	ct.reset = function () {
		alert('ct.reset')
		this.St().removeAllChildren()
		T.removeAllListeners()
	}
//sprite.shadow = new createjs.Shadow("#454", 10, 15, 14)
//spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"
//sprite always assumed to start facing right (and flipping it horizontqlly is the left) - so i must draw facing right
	function more() {
		function alertIfUsed() {
			function createStuff() {
				$El = cjs.el = function (a) {
					a = $(a)[0]
					return new cjs.DOMElement(a)
				}
				ELM = function () {
					z()
					d = $.d('r', 400, 400).A($.ip()).drag()
					el = $El(d)
					s = $St('y').t()
					s.A(el)
					// tw(el, [{x:300,y:300},2000])
					// tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
				}
			}
			
			i.bB = i.bindBody = function (b) {
				alert('i.bindBody i.bB')
				var i = this
				cjs.t(function () {
					b.X(i.X())
					b.Y(i.Y())
					b.rt(i.rt())
				})
				return i
			}
			i.tf = function () {
				alert('i.tf')
				var i = this, g = G(arguments)
				if (g.u) {
					return [
						i.x,
						i.y,
						i.scaleX,
						i.scaleY,
						i.rotation,
						i.skewX,
						i.skewY,
						i.regX,
						i.regY
					]
				}
				if (O(g[0]) && F(g[0].getTransform)) {
					g[0] = g[0].getTransform()
				}
				i.setTransform.apply(i, A(g[0]) ? g[0] : g)
				return i
			}
			i.getTransform = function () {
				alert('i.getTransform')
				var ob = this
				return [
					ob.x, ob.y, ob.scaleX, ob.scaleY,
					ob.rotation, ob.skewX, ob.skewY,
					ob.regX, ob.regY
				]
			}
			i.cu = i.bM = function (cu) {
				alert('i.cu i.bM')
				var ob = this,
						st = ob.st()
				CUob = {
					d: 'default', n: 'none', h: 'help',
					p: 'pointer', ch: 'crosshair',
					P: 'progress', w: 'wait',
					t: 'text',
					m: 'move', g: 'grab', c: 'copy',
					cm: 'context-menu',
					C: 'cell',
					N: 'not-allowed', v: 'not-allowed',
					z: 'zoom-in'
				}
				if (U(cu)) {
					st.MM(function () {
						ob.x = st.m().x;
						ob.y = st.m().y
					})
				}
				else if (S(cu)) {
					ob.cursor = CUob[cu] ? CUob[cu] : cu
				}
				return ob
			}
			cjs.rgb = function (r, g, b, a) {
				alert('cjs.rgb')
				var str
				a = N(a) ? a : 1
				str = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
				return str
			}
			drawHalf = function (c, i) {
				alert('drawHalf')
				c.dI(i, -i.width / 2, -i.h / 2)
			}
			drag = drg = function (element) {
				alert('drag')
				var q = $b(qq(element).q)
						.css({position: 'absolute'})
						.on('mousedown', function (e) {
							var offset = $(this).offset(),
									deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top
							$('html').on('mousemove', function (e) {
								q.css({left: e.pageX - deltaX, top: e.pageY - deltaY})
							})
									.on('mouseup', function () {
										$(this).off()
									})
						})
				touchDrg(element)
				return qq(element)
			}
			$.fn.hideOnKeyDown = function (a) {
				alert('$.fn.hideOnKeyDown ')
				var that = this
				$('body').keydown(function (ev) {
					e = ev
					$l(e.which)
					if (e.which == 40) {
						that.hide()
					}
					if (e.which == 38) {
						that.show()
					}
				})
			}
			$.fn.T = function () {
				alert('$.fn.T')
				var d = this, g = G(arguments)
				d.E()
				g.e(function (str) {
					d.A($.h3(str))
				})
				return d
			}
			$.joystick = function () {
				alert('joystick')
				$('#left').on('mousedown mouseover touchenter', function (e) {
					$.K.left = true;
					e.preventDefault()
				})
				$('#left').on('mouseup mouseout touchleave', function () {
					$.K.left = false
				})
				$('#jump').on('mousedown mouseover touchenter', function () {
					$.K.up = true
				})
				$('#jump').on('mouseup mouseout touchleave', function () {
					$.K.up = false
				})
				$('#right').on('mousedown mouseover touchenter', function () {
					$.K.right = true
				})
				$('#right').on('mouseup mouseout touchleave', function () {
					$.K.right = false
				})
			}
			$.fn.toR = $.fn.moveRight = function (num) {
				alert('toL')
				num = num || 20
				if (this.left() == 'auto') {
					this.left(0)
				}
				this.left(parseInt(this.left()) + num)
				return this
			}
			$.fn.toL = $.fn.moveLeft = function (num) {
				alert('toL')
				num = num || 20
				if (this.left() == 'auto') {
					this.left(0)
				}
				this.left(parseInt(this.left()) - num)
				return this
			}
			$.fn.toU = $.fn.moveDown = function (num) {
				alert('toL')
				num = num || 20
				if (this.top() == 'auto') {
					this.top(0)
				}
				this.top(this.top() - num)
				return this
			}
			$.fn.toD = $.fn.moveDown = function (num) {
				alert('toL')
				num = num || 20
				if (this.top() == 'auto') {
					this.top(0)
				}
				this.top(this.top() + num)
				return this
			}
		}
		
		i.warpX = function (lo, hi, cush) {
			alert('i.warpX')
			var i = this,
					wrp = M.wrp(lo, hi, cush)
			T.t(function () {
				i.x = wrp(i.x)
			})
			return i
		}
		i.warpY = function (lo, hi, cush) {
			alert('i.warpY')
			var i = this, wrp = M.wrp(lo, hi, cush)
			T.t(function () {
				i.y = wrp(i.y)
			})
			return i
		}
		i.warp = function (n) {
			var i = this, s = i.S(), n = n || 0
			i.warpX(0, s.W(), n)
			i.warpY(0, s.H(), n)
			return i
		}
	}
	
	b._Sp = function (sp, o) {
		$l('b._Sp')
		this._gx(sp)
		sp.rC()
				.XY(o.x, o.y)
				.sXY(o.sX, o.sY).rt(o.r)
		return sp
	}
	b.Sp = function () {
		$l('b.Sp')
		var g = G(arguments), o,
				sp
		o = $df.xyr({sp: g.f, x: g.s, y: g.t, sX: g[3], sY: g[4], r: g[5]})
		o.sX = N(o.sX, 1);
		o.sY = N(o.sY, o.sX)
		o.sp = o.sp || Mummy
		sp = $Sp(o.sp)
		return b._Sp(sp, o)
	}
	f.ctSp = function (sp) {
		$l('f.ctSp')
		var f = this
		sp.XY(f.pos().x, f.pos().y).rC()
		f.bS($Ct().A(sp))
		return this
	}
	f._bI = function (o) {
		alert('f._bI')
		this.gx.A(
				o.i.sXY(o.sc).XY(o.x, o.y)
						.rt(o.r).al(o.al)
		)
		return this
	}
	f.bI = function () {
		alert('f.bI')
		var f = this, b = f.B(), w = b.W(), g = G(arguments), o
		this.gx = this.gx || w.g.ct()
		o = cjs.iDO(g.f) ? {i: g.f} : g.O ? g.f :
		{i: g.f || 'me', sc: g.s, x: g.t, y: g[3], r: g[4], al: g[5]}
		if (S(o.i)) {
			o.i = Q.b(o.i)
		}
		o.sc = N(o.sc, ( cjs.iH(o.i) ? 1 : .4 ));
		if (!A(o.sc)) {
			o.sc = [o.sc, o.sc]
		}
		$df.xyr(o)
		o.al = N(o.al, 1)
		if (!g.n && !cjs.iH(o.i) && !cjs.iCt(o.i)) {
			o.i.rC()
		}
		return this._bI(o)
	}
	w.dance = function () {
		var w = this
		w.e(function (b) {
			if (b.iD()) {
				b.thr()
			}
		})//w.eD
		return w
	}
	w.txC = function () {
		var w = this
		_.ev(2, function () {
			w.e(function (b) {
				b.fs(function (f) {
					f.C($r())
				})
			})
		})
	}
	w.boxes = function () {
		var w = this, g = G(arguments)
		_.e(g, function (g) {
			w.box.apply(w, g)
		})
		return w
	}
	w.brcks = w.boxesStat = function () {
		var w = this, g = G(arguments)
		_.e(g, function (g) {
			w.brick.apply(w, g)
		})
		return w
	}
	w.ten = w.addTenBalls = function (n) {
		var w = this
		_.t(n || 10, function (i) {
			w.ball(100 + (i * 80), 200)
		})
		return w
	}
	w.hun = w.addHundBalls = function (n) {
		var w = this
		_.t(n || 100, function (i) {
			w.ball(100 + (i * 8), 50, 10)
		})
		return w
	}
}