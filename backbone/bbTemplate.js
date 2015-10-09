listTp = function () {
	$.dI('list-tp', [$.la()]).C('o')
	//$.d('o').id('list-tp').A($.la())
}
rFn = function () {
	var da, tp, ul
	$l('r: ' + this.model.g('d')[0].h)
	//$.c('b').ab(300,300)
	da = this.model.g('d')
	tp = this.tp
	ul = this.$el.find('ul')
	_.e(da, function (da) {
		ul.A(
				tp.clone()
						.find('a').hr('href', da.h).T(da.t)
						.end()
		)
	})
}
rFn2 = function () {
	$l('rr: ' + this.model.g('d')[0].h)  //$.c('b').ab(300,300)
	da = this.model.g('d');
	tp = this.tp
	ul = this.q.find('ul')
	_.e(da, function (da) {
		clo = tp.clone()
		ul.A(clo.find('a').hr('href', da.h).T(da.t).end())
	})
}
Temp = function (i, h) {
	var s = ''
	if (A(h)) {
		_e(h,
				function (h) {
					s += h.oh()
				})
	}
	s = "<script type='text/template'>" + s + "</script>"
	$l('s: ' + unescape(s))
	return qq(
			$(s)
	).id(i).a()
}
tempScr = function (i, e) {
	t = qq($(
			'<script type="text/template" id="' + i + '">'
	))
	_e(e,
			function (e) {
				t(e)
			})
	return t
}
temp = function (a, b) {
	return _.template(
			$('#' + a).html(),
			ob(b))
}
//QT:
// this will be an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all
qT = function (f, o, e) {
	return f(ob(o), e || _d())
}
//a sample template
lii = function (o, e) {
	return e(li(o.me), li(o.me))
}
//return [li(o.me), li(o.me)]
// e= qT( lii, {me:'jason'} ).a()
thed = function (o, e) {
	return e(
			thead()(
					tr().k('header')(
							th()('Name'), th()('Age')
					)
			)
	)
}
// t=qT(thed).a()
Temp = function (i, h) {
	var s = ''
	if (A(h)) {
		_e(h,
				function (h) {
					s += h.oh()
				})
	}
	s = "<script type='text/template'>" + s + "</script>"
	$l('s: ' + unescape(s))
	return qq(
			$(s)
	).id(i).a()
}
tempScr = function (i, e) {
	t = qq($(
			'<script type="text/template" id="' + i + '">'
	))
	_e(e,
			function (e) {
				t(e)
			})
	return t
}
temp = function (a, b) {
	return _.template(
			$('#' + a).html(),
			ob(b))
}
// extending Bb? -> https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views


 