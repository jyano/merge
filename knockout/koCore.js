oA = ko.observableArray.fn // inhertince extension :)
oA.p = function (i) {
	var oA = this
	oA.push(i)
	return oA
}
oA.rm = function (i) {
	var oA = this
	oA.remove(i)
	return oA
}
$o = ko.o = function (a) {
	return ko.observable(a)
}
$oa = ko.oa = function (a) {
	var g = G(arguments), a = g[0]
	return ko.observableArray(g.A_ ? g.f : g)
}
$Ob = function (a, b) {
	var g = G(arguments),
			o = {k: g.f, v: g.s}
	var ob = {}
	if (S(o.k)) {
		o.v = D(o.v) ? o.v :
				$o(g.n ? 0 : 1)
		ob[o.k] = o.v
	}
	return ob
}
ok = function () {
	var g = G(arguments), ob
	g.p ? _.in(0, aB) :
			aB()
	function aB() {
		vm = g.S_ ? // pass a single key, value -> {key:value}
				$Ob(g.f, g.s, g.n ? '-' : null) :
				g.u ? // pass nothing -> {$: $o(1)}
				{$: $o(g.n ? 0 : 1)} :
					// ???? pass plain object and element(string or ob?) :)
						(F(g.f) || N(g.f) || A(g.f) ) ?
							// pass just a value -> {$: value}
						{$: g.f} :
							// pass just plain obj (normal)
								g.f
		ko.aB(vm)
	}
	
	function old() {
		OK = function (o, b) {
			var g = G(arguments), ob
			return g.S_ ?
					ko.aB(vm = $Ob(o, b)) : g.O ?
					ko.aB(vm = g[0]) :
					ko
			function alt() {
				OK = function (a) {
					var g = G(arguments), ob
					g.push('+')
					return ok.apply(null, g)
				}
			}
		}
	}
}
KOob = {
	e: 'foreach', c: 'checked', t: 'text', v: 'value', h: 'html', i: 'if', $: 'click',
	f: 'hasFocus', w: 'with', s: 'css', y: 'style', a: 'attr', en: 'enable',
	vs: 'visible', tI: 'textInput',
	o: 'options',
	oT: 'optionsText',
	ev: 'event',
	sm: 'submit', sO: 'selectedOptions', n: 'ifnot', d: 'disable', u: 'uniqueName', vU: 'valueUpdate',
	cm: 'component', tp: 'template'
}
$KOob = function self(k, v) {
	var g = G(arguments), o = []
	if (g.O) {
		_.e(g.f, function (v, k) {
			o.push(self(k, v))
		})
		return o.join()
	}
	return (KOob[k] ? KOob[k] : k) + (v ? (': ' + v) : '')
}
$.fn.dB = function (dB) {
	this.at({'data-bind': dB})
	return this
}
$.fn.b = $.fn.ko = function (a, b) {
	this.dB(
			O(a) ? $KOob(a) :
					hasColon(a) ?
							a :
							$KOob(a, b || '$')
	)
	function hasColon(str) {
		return str.indexOf(':') != -1
	}
	
	return this
}
ko.u = ko.ut = ko.utils
ko.o = ko.observable
ko.oa = ko.oA = ko.observableArray
ko.c = ko.computed
ko.pc = ko.pureComputed
ko.do = ko.dependentObservable
ko.aB = ko.ab = ko.applyBindings
ko.bD = ko.applyBindingsToDescendants
ko.ve = ko.vE = ko.virtualElements
ko.B = ko.ve.ab = ko.vE.AB = ko.vE.allowedBindings
ko.ut.af = ko.ut.arrayFilter
ko.rTp = ko.renderTemplate
ko.uw = ko.unwrap
ko.ut.uo = ko.ut.unwrapObservable
$.fn.bI = $.fn.bIf = function (s) {
	return this.b('if', s)
}
$.fn.bVs = function (s) {
	return this.b('vs', s)
}
$.fn.bT = function (s) {
	return this.b('text', s || '$data')
}
$.fn.bH = function (s) {
	return this.b('html', s)
}
$.fn.bTi = $.fn.bTI = function (a) {
	return this.b({tI: a})
}
$.fn.bE = function (s) {
	// if called from $.fn.eD = $.fn.eB =  feD = ... use '+'
	var g = G(arguments)
	if (g.p) {
		return '$data.' + s
	}
	return this.b('foreach', s)
}
$.fn.bW = function (s) {
	return this.b('with', s)
}
$.fn.bC = function (s) {
	return this.b('c', s)
}
$.fn.bO = function (s) {
	return this.b('o', s)
}
$.fn.bSO = function (s) {
	return this.b('so', s)
}
$.fn.b$ = function (s) {
	return this.b('click', s)
}
$.dIf = function (a, b) {
	var d = $.d().bI(a)
	if (A(b)) {
		_.e(b, function (b) {
			d.A(b)
		})
	}
	return d
}//$.dI=
$.pI = function (a, b, c, d) {
	return $.p(b, c, d).bI(a)
}
$.spVs = function (a) {
	return $.sp().bVs(a)
}
$.dT = function (a) {
	return $.d().bT(a)
}
$.sT = $.spT = function (a, b) {
	return $.sp(b).bT(a || '$data')
}
$.pT = function (a) {
	var p = $.p()
	p.bT(a);
	return p
}
$.h1T = function (a, b) {
	var h1 = $.h1(a)
	h1.bT(b || a)
	return h1
}
$.liT = function (a) {
	return $.li().bT(a)
}
$.tdT = function (a, b) {
	var td = $.td().bT(a)
	if (A(b)) {
		_.e(b, function (el) {
			td.A(el)
		})
	}
	return td
}
$.dH = function (a) {
	return $.d().bH(a)
}
$.IP = $.ipTi = function (a) {
	return $.ip().bTi(a)
}
$.pwTi = function (a) {
	return $.pw().bTi(a)
}
$.dE = function (a, b) {
	var d = $.d().bE(a)
	if (A(b)) {
		_.e(b, function (el) {
			d.A(el)
		})
	}
	else if (S(b)) {
		d.A(b)
	}
	return d
}
$.uE = $.ulE = function (a, b, c) {
	var g = G(arguments)
	var ul = $.ul().bE(a)
	if (c) {
		b = $.li(_.r(g))
	}
	else if (O(b) && !A(b)) {
		b = [b]
	}
	if (A(b)) {
		_.e(b, function (el) {
			ul.A(el)
		})
	}
	else if (S(b)) {
		ul.A(b)
	}
	return ul
	function old() {
		$.uE = $.uE = $.ulE = function (a, b) {
			var ul = $.ul().bE(a)
			if (A(b)) {
				_.e(b, function (el) {
					ul.A(el)
				})
			}
			else if (S(b)) {
				ul.A(b)
			}
			return ul
		}
	}
}
$.U = function () {
	var g = G(arguments)
	return $.uE(g.f, [$.li(g.s)])
}
$.olE = function (a, b) {
	var ol = $.ol().bE(a)
	if (b) {
		ol.A(b)
	}
	return ol
}
$.tBE = function (a, b) {
	var g = G(arguments),
			tB = $.tB()
	tB.bE(a)
	if (A(b)) {
		_.e(b, function (el) {
			tB.A(el)
		})
	}
	else {
		_.e(g.r, function (q) {
			tB.A((q[0].tagName == "TD") ? q : $.td().A(q))
		})
	}
	return tB
}
$.slB = function (a) {
	var q = $.sl()
	q.b.apply(q, arguments)
	return q
}
$.tBT = function (arr) {
	var g = G(arguments),
			tB = $.tB(), tr = $.tr()
	_.e(g.r, function (q) {
		tr.A(q)
	})
	return tB.bE(arr).A(tr)
}
$.uLE = function (a) {
	var g = G(arguments);
	return $.ulE(a, $.li(g.r))
}
$.dW = function (a, b) {
	var d = $.d().bW(a)
	if (A(b)) {
		_.e(b, function (b) {
			d.A(b)
		})
	}
	return d
}
$.c$ = function (fn) {
	return $.cb().b$(fn)
}
$.cC = $.cbC = function (a) {
	if (U(a)) {
		a = '$'
	}
	return $.cb().bC(a)
}
$.sO = function (a) {
	return $.sl().bO(a)
}
$.a$ = function (t, fn) {
	return $.a(t).b('$', fn)
}
$.b$ = $.bt$ = $.btB$ = function (a, b, c) {
	var bt = $.bt(a)
	bt.b$(b || a)
	if (c) {
		bt.bEn(c)
	}
	return bt
}
$.b$$ = function () {
	var sp = $.sp()
	_.e(arguments, function (a) {
		sp.A($.b$(a))
	});
	return sp
}
$.ST = function (t) {
	return $.S().bT(t)
}
$.dV = $.dVs = function () {
	var g = G(arguments),
			d = $.d().bVs(g.f)
	_.e(g.r, function (q) {
		d.A(q)
	})
	return d
}
$.s$ = function (a, b, c, d) {
	return $.sb(b, c, d).b$(a)
}
$.$bt = function (a, b) {
	var g = G(arguments)
	b = b || a
	if (g.n) {
		b = '$parent.' + b
	}
	return $.bt(a).b$(b)
}
$.eT = $.emT = function (t) {
	return $.em().bT(t)
}
//val and not
$.fn.bV = function (s) {
	var g = G(arguments)
	str = "value: " + s
	if (!g.n) {
		str += ", valueUpdate: 'afterkeydown'"
	}
	this.b(str)
	return this
}
$.iV = $.ipV = $.ipBv = function () {
	var g = G(arguments), ip
	ip = $.ip()
	ip.bV.apply(ip, g)
	return ip
}
/*
 $.ipV=$.ipBv=function(){
 var g=G(arguments),
 ip = $.ip(),
 ip.bV.apply(ip, g)
 return ip
 }*/
$.fn.bN = $.fn.bIN = function (s) {
	return this.b('ifnot', s)
}
//css and attr
$.fn.bS = function (s) {
	return this.b('css', s)
} //not bind sprite!!
$.fn.bY = $.fn.bSy = function (s) {
	return this.b('style', s)
}
$.fn.bA = $.fn.bAt = function (s) {
	return this.b('attr', s)
}
$.aA = function (a, b, c, d) {
	return $.a(b, c, d).bA(a)
}
//event and enable
$.fn.bEv = function (s) {
	return this.b('event', s)
}
$.fn.bSm = function (s) {
	return this.b('submit', s)
}
$.fn.bEn = function (a) {
	return this.b('en', a)
}
$.fn.bD = function (s) {
	return this.b('disable', s)
}
$.fn.bF = function (s) {
	return this.b('hasFocus', s)
}
$.fSm = $.fBSm = function (a, b) {
	var f = $.f();
	f.bSb(a)
	if (A(b)) {
		_.e(b, function (b) {
			f.A(b)
		})
	}
	return f
	function old() {
		$.fSb = function (a, b) {
			var f = $.f();
			f.b({sb: a})
			if (A(b)) {
				_.e(b, function (el) {
					f.A(el)
				})
			}
			return f
		}
	}
}
//other
$.fn.bU = $.fn.bUN = function (s) {
	return this.b('uniqueName', s)
}
$.fn.bTp = function (s) {
	return this.b('template', s)
}
