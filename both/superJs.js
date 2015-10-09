
$L = $load = function (metNames) {
	var $w = window,
			$l = function (a) {
				console.log(a);
				return a
			},
			F = _.isFunction
	metNames = _.isArray(metNames) ? metNames : _.toArray(arguments)
	load('_pre0')
	load('_pre')
	load('_pre1')
	load(metNames)
	load('_post0')
	load('_post')
	load('_post1')
	function load(fn) {
		if (!fn) {
			return
		}
		if (_.isArray(fn)) {
			return load.apply(null, fn)
		}
		_.each(arguments, function (fn) {
			fn = $w[fn];
			if (F(fn)) {
				fn()
			}
		})
	}
}
s$ = S;
 
$A = Array;
$B = Boolean;
$N = Number;
$O = Object;
$F = Function;
$S = String;
J = $J = JSON
M = Math
U = function u(a, b) {
	if (_.isUndefined(b)) {
		return _.isUndefined(a)
	}
	// return  _.extend.apply(_.extend, arguments)
}
A = _.isArray
AA = function (a) {
	return A(a) && A(a[0])
}
B = _.isBoolean
D = function (a, b, c) {
	return _.isUndefined(b) ? !_.isUndefined(a)
			: _.defaults.apply(_.defaults, arguments)
}
F = function f(fn, dfFn) {
	return fn && _.isFunction(fn)
}
V = function (x, y) {
	return {x: x, y: y}
}
N = function (n, n2) {
	if (U(n2)) {
		return _.isNumber(n)
	}
	return _.tN(n, n2)
}//N = _.isNumber
N0 = function (n) {
	return N(n, 0)
}//N = _.isNumber
N1 = function (n) {
	return N(n, 1)
}//N = _.isNumber
/*
 PN = function (n, n2) {
 if (U(n2)) {return ( _.isNumber(n)&&n<0)||1}
 return _.tN(n, n2)
 }//N = _.isNumber
 */
O = function (a, b) {
	if (_.isUndefined(b)) {
		return _.isObject(a)
	}
	if (_.isObject(a)) {
		// return  _.extend.apply(_.extend, arguments)
	}
}
I = function (f, i) {
	var g = G(arguments), clear
	if (F(g[0])) {
		f = g[0];
		i = g[1]
	}
	else {
		f = g[1];
		i = g[0]
	}
	i = !N(i) ? 1000 : i > 5 ? i : i * 1000
	if (g.N) {
		f()
	}
	clear = setInterval(f, i)
	return function () {
		clearInterval(clear)
	}
}
S = function (a) {
	return _.isString(a)
}


$a = function (ob, met, arr) {

	var g = G(arguments)

	if (g.t) {
	
		return g.f[ g.s ].apply(g.f, g.t)
	}


	return g.f.apply(null, g.s)
}




R = function (n, n2) {
	var num
	n = N(n) ? n : 1
	n2 = N(n2) ? n2 : 0
	return M.round((M.random() * n) + n2)
	function alt(n, n2) {
		var num
		if (O(n)) {
			n = n.length
		}
		n = N(n) ? n : 1
		n2 = N(n2) ? n2 : 0
		num = (M.random() * n) + n2
		return M.floor(num)
	}
}
_v = function (a) {
	return S(a) ? function () {
		Function(a)()
	} :
			F(a) ? a : F(a.value) ?
					a.value() : a.value
}


_.gS = function (pop) {
	//for gen
	var g = G(arguments), that = this
	return function (val) {
		if (U(val)) {
			return this[pop]
		}
		this[pop] = val
		return this
	}
}
_.jS = function (a, b, c) {
	return S(a) ? $.Gj(a, b, c) : JSON.stringify(a)
}
_.jP = function (a, b, c) {
	return S(a) ? JSON.parse(a, b) : $(a).prepend(b, c)
}
_.tFn = function (fn, fn2) {
	return F(fn) ? fn : fn2 ? fn2 : function () {
		return
	}
}
M.tN = _.tN = function (what, aNum) {
	return N(what) ? what : aNum || 0
}
