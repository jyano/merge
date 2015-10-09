G = function (arg, str) {//history: conflict with N(not neg) and N(g.$ && N(g.f) ) .. resolved!
	var  ag = _.tA(arguments), p, n, m, d, g
	
	function setA() {
		//G('k', arguments)
		if (S(ag[0])) {
			g = _.tA(ag[1])
			if (S(g[0])) {  g[ag[0]] = g.shift() }
		}
		else {  g = _.tA(ag[0])  }
		//G(arguments, 'k')
		
		
		if (S(ag[1]) && S(_.l(g))) { g[ ag[1] ] = g.pop()  }
		if (_.l(g) == '+') {p = g.pop() }
		else if (_.l(g) == '-') {n = g.pop()}
		else if (_.l(g) == '*') {m = g.pop()}
		else if (_.l(g) == '/') {d = g.pop()}
		
		
		_.df(g, {
			f: _.f(g), s: g[1], t: g[2],
			fo: g[3], fi: g[4], si: g[5],
			se: g[6], ei: g[7], ni: g[8], te: g[9],
			l: _.l(g), r: _.r(g), i: _.i(g),
			L: g.length, 
			z: g.length,
			p: p, m: m, d: d, n: n
		})
	}
	
	
	setA()
	function numArgs() {
		g.u = U(g.f);
		g.U = !g.u
		var str = ''
		_.t(g.L, function () {
			str += '$'
		})
		g[str] = 1
	};
	numArgs()
	function gStr() {
		g.S = g.$ && S(g.f)
		g._S = S(g.l)
		g.$S = g.S_ = S(g.f)
		g.$_S = S(g.s)
	};
	gStr()
	function gNum() {
		g.N = g.$ && N(g.f)
		g.N_ = N(g.f);
		g._N = N(g.l)
		g.$N = N(g.f)
		g.$_N = N(g.s)
	};
	gNum()
	function gArr() {
		g.A = g.$ && A(g.f)
		g.A_ = A(g.f);
		g._A = A(g.l)
		g.SA = g.$$ && g.S_ && A(g.s)
	};
	gArr()
	function gFn() {
		g.F = g.$ && F(g.f);
		g.F_ = F(g.f);
		g._F = F(g.l)
	};
	gFn()
	function gOb() {
		g.O = g.$ && O(g.f)
		g.O_ = O(g.f)
		g._O = O(g.l)
		g.OO_ = O(g.f) && O(g.s)
	};
	gOb()
	function gEach() {
		g.e = function (fn, str) {
			var g = this
			if (str) {
				g.e(
						function (g) {
							fn[str](g)
						}
				)
				return fn
			}
			_.e(g, fn)
			return g
		}
		g.e0 = function (fn) {
			_.e(this[0], fn)
		}
		g.e1 = function (fn) {
			_.e(this[1], fn)
		}
		g.eR = function (fn) {
			_.eR(this, fn)
		}
		g.eF = function (fn) {
			_.e(g.f, fn)
		}
		g.eS = function (fn) {
			this.e(
					function (k) {
						if (S(k)) {
							fn(k)
						}
					}
			)
		}
	};
	gEach()
	function gAdv() {
		g.G = function (a) {
			a = _.clone(a)
			if (g.n) {
				a.push('-')
			}
			else if (g.p) {
				a.push('+')
			}
			else if (g.d) {
				a.push('/')
			}
			else if (g.m) {
				a.push('*')
			}
			return a
		}
		g.g = g.G(g)
		g.a = g.ap = function () {
			var g = this, gg = G(arguments)
			//if(g.A){
			return gg.s ?
					$a(gg.s, gg.t, g.f) :
					$a(gg.f, g.f)
		}
		g.ush = function (d) {
			var g = this,
					res
			if (U(d)) {
				d = null
			}
			g.t = g.s
			g.s = g.f
			g.f = d
			res = g.unshift(d)
			return res
		}
	};
	gAdv()
	return _g = g
}
G._ = function () {
	g = G(arguments)
	alert("$l(g.L + ' args')")
}
TXG=function(){


	doIt('haha', 4, '-')
	function doIt(){
		var g=G(arguments)
		$l(_g = g)
		console.dir(g)
	}
	
}
