$L('rest')

$.fn.bindKOEach = fe = forEach = function (a) {
	return this.bindKO('fe', a)
}
$.fn.bindKOEachData = feD = forEachData = function (a) {
	return this.bindKOEach('$data.' + a)
}
$.fn.bindKO = b = knockoutBind = function (a, b) {
	var o = []
	if (O(a)) {
		_.each(a, function (v, k) {
			o.push(oO('b', k) + ':' + v)
		})
		this.attr({'data-bind': o.join()})
	}
	else {
		this.attr({
			b: oO('b', a) + ':' + b
		})
	}
	return this
}
$.fn.b = $.fn.ko = function (a, b) {
	KOob = {
		t: 'text',
		h: 'html',
		s: 'css',
		y: 'style',
		a: 'attr',
		e: 'foreach',
		i: 'if', n: 'ifnot', w: 'with',
		$: 'click',
		ev: 'event',
		sb: 'submit',
		en: 'enable',
		d: 'disable',
		V: 'valueUpdate',
		vs: 'visible',
		f: 'hasFocus',
		c: 'checked',
		ch: 'checked',
		v: 'value', o: 'options',
		ti: 'textInput',
		so: 'selectedOptions',
		u: 'uniqueName',
		tp: 'template',
		cm: 'component'
	}
	var o = []
	if (O(a)) {
		_.e(a, function (v, k) {
			if (KOob[k]) {
				k = KOob[k]
			}
			o.push(k + ':' + v)
		})
		this.at({
			'data-bind': $l(o.join())
		})
	}
	else {
		if (KOob[a]) {
			a = KOob[a]
		}
		// str= oO('b', a)
		str = a + ':' + b;  //$l(': '+ str  )
		this.at({'data-bind': str})
	}
	return this
}
$.fn.par = function (a, b) {
	this.at('params', a + ': ' + b);
	return this
}
$.fn.qA = function (t) {
	return $('<' + t + '>').A()
}
$.fn.qAP = function (a, b, c) {
	this.qA(a).par(b, c)
	return this
}
$.fn.b = $.fn.ko = function (a, b) {
	KOob = {
		t: 'text',
		h: 'html',
		s: 'css',
		y: 'style',
		a: 'attr',
		e: 'foreach',
		i: 'if', n: 'ifnot', w: 'with',
		$: 'click',
		ev: 'event',
		sb: 'submit',
		en: 'enable',
		d: 'disable',
		V: 'valueUpdate',
		vs: 'visible',
		f: 'hasFocus',
		c: 'checked',
		ch: 'checked',
		v: 'value', o: 'options',
		ti: 'textInput',
		so: 'selectedOptions',
		u: 'uniqueName',
		tp: 'template',
		cm: 'component'
	}
	var o = []
	if (O(a)) {
		_.e(a, function (v, k) {
			if (KOob[k]) {
				k = KOob[k]
			}
			o.push(k + ':' + v)
		})
		this.at({
			'data-bind': $l(o.join())
		})
	}
	else {
		if (KOob[a]) {
			a = KOob[a]
		}
		// str= oO('b', a)
		str = a + ':' + b;  //$l(': '+ str  )
		this.at({'data-bind': str})
	}
	return this
}
$.fn.par = function (a, b) {
	this.at('params', a + ': ' + b);
	return this
}
$.fn.qA = function (t) {
	return $('<' + t + '>').A()
}
$.fn.qAP = function (a, b, c) {
	this.qA(a).par(b, c)
	return this
}
$.fn.a2Lb = function (t) {
	t = t || 'label:'
	return this.a2($.lb(t))
}
$.fn.bT = function (s) {
	s = s || '$data'
	return this.dB('text: ' + s)
}
$.fn.bE = function (s) {
	return this.dB('foreach: ' + s)
}
$.fn.bV = function (s) {
	var g = G(arguments)
	str = "value: " + s
	if (!g.n) {
		str += ", valueUpdate: 'afterkeydown'"
	}
	this.dB(str)
	return this
}
$.fn.bCm = function (s) {
	return this.dB('component: ' + s)
}
$.fn.bH = function (s) {
	return this.dB('html: ' + s)
}
$.fn.bS = function (s) {
	return this.dB('css: ' + s)
}
$.fn.bY = $.fn.bSy = function (s) {
	return this.dB('style: ' + s)
}
$.fn.bA = $.fn.bAt = function (s) {
	return this.dB('attr: ' + s)
}
$.fn.bI = $.fn.bIf = function (s) {
	return this.dB('if: ' + s)
}
$.fn.bN = $.fn.bIN = function (s) {
	return this.dB('ifnot: ' + s)
}
$.fn.bW = function (s) {
	return this.dB('with: ' + s)
}
$.fn.b$ = function (s) {
	return this.dB('click: ' + s)
}
$.fn.bEv = function (s) {
	return this.dB('event: ' + s)
}
$.fn.bSb = function (s) {
	return this.dB('submit: ' + s)
}
$.fn.bEn = function (s) {
	return this.dB('enable: ' + s)
}
$.fn.bD = function (s) {
	return this.dB('disable: ' + s)
}
$.fn.bVs = function (s) {
	return this.dB('visible: ' + s)
}
$.fn.bC = function (s) {
	return this.dB('checked: ' + s)
}
$.fn.bF = function (s) {
	return this.dB('hasFocus: ' + s)
}
$.fn.bO = function (s) {
	return this.dB('options: ' + s)
}
$.fn.bSO = function (s) {
	return this.dB('selectedOptions: ' + s)
}
$.fn.bTI = function (s) {
	return this.dB('textInput: ' + s)
}
function rest(){
$.fn.bU = $.fn.bUN = function (s) {
	return this.dB('uniqueName: ' + s)
}
$.fn.bTp = function (s) {
	return this.dB('template: ' + s)
}
$.fn.koE = $.fn.eKo = function (a) {
	return this.bindKO('fe', a)
}
$.fn.eD = $.fn.eB = function (a) {
	return this.bindKOEach('$data.' + a)
}
$.fn.dB = function (dB) {
	return this.at({'data-bind': dB})
}
$.fn.bTi = function (a) {
	return this.b({ti: a})
}
$.fn.bEn = function (a) {
	return this.b('en', a)
}
$.fn.a2Lb = function (t) {
	t = t || 'label:'
	return this.a2($.lb(t))
}
$.fn.bT = function (s) {
	s = s || '$data'
	return this.dB('text: ' + s)
}
$.fn.bE = function (s) {
	return this.dB('foreach: ' + s)
}
$.fn.bV = function (s) {
	var g = G(arguments)
	str = "value: " + s
	if (!g.n) {
		str += ", valueUpdate: 'afterkeydown'"
	}
	this.dB(str)
	return this
}
$.fn.bCm = function (s) {
	return this.dB('component: ' + s)
}
$.fn.bH = function (s) {
	return this.dB('html: ' + s)
}
$.fn.bS = function (s) {
	return this.dB('css: ' + s)
}
$.fn.bY = $.fn.bSy = function (s) {
	return this.dB('style: ' + s)
}
$.fn.bA = $.fn.bAt = function (s) {
	return this.dB('attr: ' + s)
}
$.fn.bI = $.fn.bIf = function (s) {
	return this.dB('if: ' + s)
}
$.fn.bN = $.fn.bIN = function (s) {
	return this.dB('ifnot: ' + s)
}
$.fn.bW = function (s) {
	return this.dB('with: ' + s)
}
$.fn.b$ = function (s) {
	return this.dB('click: ' + s)
}
$.fn.bEv = function (s) {
	return this.dB('event: ' + s)
}
$.fn.bSb = function (s) {
	return this.dB('submit: ' + s)
}
$.fn.bEn = function (s) {
	return this.dB('enable: ' + s)
}
$.fn.bD = function (s) {
	return this.dB('disable: ' + s)
}
$.fn.bVs = function (s) {
	return this.dB('visible: ' + s)
}
$.fn.bC = function (s) {
	return this.dB('checked: ' + s)
}
$.fn.bF = function (s) {
	return this.dB('hasFocus: ' + s)
}
$.fn.bO = function (s) {
	return this.dB('options: ' + s)
}
$.fn.bSO = function (s) {
	return this.dB('selectedOptions: ' + s)
}
$.fn.bTI = function (s) {
	return this.dB('textInput: ' + s)
}
$.fn.bU = $.fn.bUN = function (s) {
	return this.dB('uniqueName: ' + s)
}
$.fn.bTp = function (s) {
	return this.dB('template: ' + s)
}
$.fn.koE = $.fn.eKo = function (a) {
	return this.bindKO('fe', a)
}
$.fn.eD = $.fn.eB = function (a) {
	return this.bindKOEach('$data.' + a)
}
$.fn.dB = function (dB) {
	return this.at({'data-bind': dB})
}
$.fn.bTi = function (a) {
	return this.b({ti: a})
}
$.fn.b = $.fn.ko = function (a, b) {
	var o = [], str,
			KOob = {
				t: 'text', h: 'html', s: 'css', y: 'style',
				a: 'attr', e: 'foreach', i: 'if', n: 'ifnot', w: 'with', $: 'click', ev: 'event', sb: 'submit',
				en: 'enable', d: 'disable', V: 'valueUpdate', vs: 'visible', f: 'hasFocus',
				c: 'checked', ch: 'checked', v: 'value', o: 'options',
				ti: 'textInput', so: 'selectedOptions', u: 'uniqueName', tp: 'template', cm: 'component'
			}
	if (O(a)) {
		_.e(a, function (v, k) {
			if (KOob[k]) {
				k = KOob[k]
			}
			;
			o.push(k + ':' + v)
		})
		str = o.join()
	}
	else if (a.indexOf(':') == -1) {
		str = KOob[a] ? KOob[a] : a + ':' + b || '$'
	}
	else {
		str = a
	}
	this.at({'data-bind': str})
	return this
}
$.fn.bEn = function (a) {
	return this.b('en', a)
}
$.fn.bTi = function (a) {
	return this.b({ti: a})
}
$.fn.bH = function (s) {
	return this.b('html', s)
}
$.fn.bS = function (s) {
	return this.b('css', s)
}
$.fn.bY = $.fn.bSy = function (s) {
	return this.b('style', s)
}
$.fn.bA = $.fn.bAt = function (s) {
	return this.b('attr', s)
}
$.fn.bI = $.fn.bIf = function (s) {
	return this.b('if', s)
}
$.fn.bN = $.fn.bIN = function (s) {
	return this.b('ifnot', s)
}
$.fn.bW = function (s) {
	return this.b('with', s)
}
$.fn.b$ = function (s) {
	return this.b('click', s)
}
$.fn.bEv = function (s) {
	return this.b('event', s)
}
$.fn.bSb = function (s) {
	return this.b('submit', s)
}
$.fn.bEn = function (s) {
	return this.b('enable', s)
}
$.fn.bD = function (s) {
	return this.b('disable', s)
}
$.fn.bVs = function (s) {
	return this.b('visible', s)
}
$.fn.bC = function (s) {
	return this.b('checked', s)
}
$.fn.bF = function (s) {
	return this.b('hasFocus', s)
}
$.fn.bO = function (s) {
	return this.b('options', s)
}
$.fn.bSO = function (s) {
	return this.b('selectedOptions', s)
}
$.fn.bTI = function (s) {
	return this.b('textInput', s)
}
$.fn.bTp = function (s) {
	return this.b('template', s)
}
$.fn.bT = function (s) {
	return this.b('text', s || '$data')
}
$.fn.bE = function (s) {
	return this.b('foreach', s)
}
$.fn.bV = function (s) {
	var g = G(arguments)
	str = "value: " + s
	if (!g.n) {
		str += ", valueUpdate: 'afterkeydown'"
	}
	this.b(str)
	return this
}
$.fn.koE = $.fn.eKo = function (a) {
	alert('koE')
	return this.bindKO('fe', a)
}
$.fn.eD = $.fn.eB = function (a) {
	alert('ko eD')
	return this.bindKOEach('$data.' + a)
}
$.fn.bU = $.fn.bUN = function (s) {
	return this.b('uniqueName', s)
}
$.fn.bCm = function (s) {
	return this.b('component', s)
}
}