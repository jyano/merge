$P = function () {
	bb = Backbone
	md = bb.Model.prototype
	vw = bb.View.prototype
	rt = bb.Router.prototype
	cl = bb.Collection.prototype
}
$P()
$L('sKc', 'obbArrProto', 'scrp', '$qfn')

oA = ko.observableArray.fn
oA.p = function (i) {
	var oA = this
	oA.push(i)
	return oA
}
kA = function () {
	var g = G(arguments)
	return ko.oa(g.A_ ? g.f : g)
}
kO = function () {
	var g = G(arguments)
	return ko.o.apply(ko, g)
}
$o = ko.o = function (a) {
	var obb = ko.observable(a)
	return obb
}
$oa = ko.oa = function (a) {
	var g = G(arguments)
	var obbA = ko.observableArray(g.A_ ? g.f : g)
	return obbA
}
$o = function (a) {
	return ko.o(a)
}
ok = $b = ko.b = ko.ab = function (o, b) {
	var g = G(arguments), ob
	if (S(o)) {
		ob = {}
		ob[o] = b
		g[0] = ob
	}
	if (O(g[0])) {
		vm = g[0];
		return ko.applyBindings(g[0])
	}
	return ko
}
// ko.b({ g[0]:  ko.o(b) })
$o = function (a) {
	return ko.o(a)
}
OK = ok = $b = ko.b = ko.ab = function (o, b) {
	var g = G(arguments), ob
	if (S(o)) {
		ob = {}
		ob[o] = b
		g[0] = ob
	}
	if (O(g[0])) {
		vm = g[0];
		return ko.applyBindings(g[0])
	}
	return ko
}
// ko.b({ g[0]:  ko.o(b) })
ok = function () {
	var g = G(arguments)
	g.p ? $.in(0, aB) : aB()
	function aB() {
		vm = g.S_ ? // pass a single key, value -> {key:value}
				Ob(g.f, g.s, g.n ? '-' : null) :
				g.u ? // pass nothing -> {$: $o(1)}
				{$: $o(g.n ? 0 : 1)} :
					// ???? pass plain object and element(string or ob?) :)
						(F(g.f) || N(g.f) || A(g.f) ) ?
							// pass just a value -> {$: value}
						{$: g.f} :
							// pass just plain obj (normal)
								g.f
		ko.applyBindings(vm)
		function Ob(a, b) {
			var g = G(arguments),
					o = {k: g.f, v: g.s}
			var ob = {}
			if (S(o.k)) {
				o.v = D(o.v) ? o.v : $o(g.n ? 0 : 1)
				ob[o.k] = o.v
			}
			return ob
		}
	}
}
OK = function (a) {
	var g = G(arguments)
	g.push('+')
	return ok.apply(null, g)
}
//OK=ok
bd = knockoutBind2 = function (a) {
	var g = G(arguments), a = g[0]
	if (g.p) {
		a = 'text: ' + a
	}
	if (g.n) {
		a = 'click: ' + a
	}
	if (g.m) {
		a = 'value: ' + a
	}
	if (g.d) {
		a = 'checked: ' + a
	}
	q.attr({'data-bind': a})
	return q
}
EVob = {$: 'click', $$: 'dblclick', v: 'mouseover'}
cbKO = cb2 = function (m, binding, val) {
	var cbox = $.input().type('checkbox'),
			pg = $.p().A(
					$.span().A(m),
					cbox.koBind('checkbox', binding)
			)
	if (val) {
		cbox.val(val)
	}
	return pg
}
function sKo() {
	ko.ve = ko.vE = ko.virtualElements
	ko.B = ko.ve.ab = ko.vE.AB = ko.vE.allowedBindings
	ko.ut.uo = ko.ut.unwrapObservable
	ko.r = ko.rg = function (n, ob) {
		ob = ob || {}
		if (S(ob.vm) || (O(ob.vm) && !ob.vm.element)) {
			ob.vm = {element: ob.vm}
		}
		ob.viewModel = ob.viewModel || ob.vm || ob.m || ob.o
		if (U(ob.viewModel)) {
			ob = {vm: ob}
		}
		ob.template = ob.template || ob.tp || ob.t
		vm = ob
		return ko.cm.rg(n, ob)
	}
	ko.cm.iR = ko.cm.isRegistered
	ko.c = ko.computed
	ko.o = ko.observable
	ko.bD = ko.applyBindingsToDescendants
	ko.o = ko.observable
	ko.c = ko.computed
	ko.do = ko.dependentObservable
	ko.oa = ko.observableArray
	ko.bh = ko.BH = ko.bindingHandlers
	ko.u = ko.ut = ko.utils
	ko.u.af = ko.u.arrayFilter
	ko.o = ko.observable
	ko.c = ko.computed
	ko.oA = ko.observableArray
	ko.oa = $oa = function (a) {
		var g = G(arguments), a = g[0]
		if (!A(a)) {
			a = g
		}
		return ko.oA(a)
	}
	ko.do = ko.dependentObservable
	ko.pc = ko.pureComputed
	ko.rTp = ko.renderTemplate
	ko.cm = ko.components
	ko.cm.rg = ko.cm.register
	ko.ve = ko.vE = ko.virtualElements
	ko.B = ko.ve.ab = ko.vE.AB = ko.vE.allowedBindings
	ko.ut.uo = ko.ut.unwrapObservable
	ko.r = ko.rg = function (n, ob) {
		ob = ob || {}
		if (S(ob.vm) || (O(ob.vm) && !ob.vm.element)) {
			ob.vm = {element: ob.vm}
		}
		ob.viewModel = ob.viewModel || ob.vm || ob.m || ob.o
		if (U(ob.viewModel)) {
			ob = {vm: ob}
		}
		ob.template = ob.template || ob.tp || ob.t
		vm = ob
		return ko.cm.rg(n, ob)
	}
	ko.cm.iR = ko.cm.isRegistered
	ko.c = ko.computed
	ko.o = ko.observable
	ko.bD = ko.applyBindingsToDescendants
	oA = ko.observableArray.fn
	oA.p = function (i) {
		var oA = this
		oA.push(i)
		return oA
	}
	kA = function () {
		var g = G(arguments)
		return ko.oa(g.A_ ? g.f : g)
	}
	kO = function () {
		var g = G(arguments)
		return ko.o.apply(ko, g)
	}
	ko.ab = ko.applyBindings
	ko.bD = ko.applyBindingsToDescendants
	ko.uw = ko.unwrap
	ko.rTp = ko.renderTemplate
	ko.ve = ko.vE = ko.virtualElements
//ko.B=ko.ve.ab= ko.vE.AB= ko.vE.allowedBindings
	ko.u = ko.ut = ko.utils
	ko.ut.af = ko.ut.arrayFilter
	ko.ut.uo = ko.ut.unwrapObservable
	ko.bh = ko.BH = ko.bindingHandlers
	ko.u = ko.ut = ko.utils
	ko.u.af = ko.u.arrayFilter
	ko.o = ko.observable
	ko.c = ko.computed
	ko.oA = ko.observableArray
	ko.oa = $oa = function (a) {
		var g = G(arguments), a = g[0]
		if (!A(a)) {
			a = g
		}
		return ko.oA(a)
	}
	ko.do = ko.dependentObservable
	ko.pc = ko.pureComputed
	ko.rTp = ko.renderTemplate
	ko.cm = ko.components
	ko.cm.rg = ko.cm.register
}
function obbArrProto() {
	oA = ko.observableArray.fn // inhertince extension :)
	oA.p = function (i) {
		var oA = this
		oA.push(i)
		return oA
	}
}
function scrp() {
	$.scrp = function (i, t) {
		var scr = $("<script type='text/html'>")
		scr.id(i)
		if (t) {
			scr.A(t)
		}
		scr.A()
		return scr
	}
	script = scrp = function (i) {
		return $("<script type='text/html'>").id(i)
	}
	$.scrp = function (i) {
		return $("<script type='text/html'>").id(i)
	}
}
$.a$ = function (t, fn) {
	return $.a(t).b('$', fn)
}
$.spVs = function (a) {
	return $.sp().b('vs', a)
}

 