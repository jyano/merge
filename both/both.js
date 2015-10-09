_.b = _.bind
_.l = _.last;
_.f = _.first;
_.i = _.initial;
_.r = _.rest
_.e = _.each;
_.eR = function (g, fn) {
	_.e(_.r(g), fn)
}
_.z = function (a, n) {
	//	why does this break it???? var g =G (arguments) of all things????
	var siz = _.size(arguments[0])
	if (!N(arguments[1])) {
		return siz
	}
	else {
		return n === siz
	}
	//return g.p ? siz > n : g.n ? siz < n : siz == n
}
_.m = _.map;
_.t = _.times
_.x = _.extend;
_.p = _.partial;
_.tA = function (a) {
	return O(a) ? _.toArray(a) : A(a) ? a : a ? [a] : []
}
_.tp = _.template
_.df = _.defaults
_.th = _.throttle
_.fW = _.findWhere
_.wh = _.where
_.rj = _.reject
_.ic = _.include
_.wo = _.without
_.rs = _.result
_.cp = _.compact
_.rd = function r(a, b, c, d) {
	return F(b) && D(c) ? _.reduce(a, b, c) : _.reduceRight(a, c, b)
}
_.rp = function (a, b, c) {
	return a.replace(b || '#', c || '')
}
_.spl = function (a, b) {
	return String(a).split(b)
}
_.bf = function (a, b) {
	return a.split(b || '.')[0]
} //before('.')
_.cl = _.clone
_.iv = _.invoke
_.ct = function (arr, item) {
	arr = arr || []
	if (S(item)) {
		item = item.trim()
	}
	return _.contains(arr, item)
}
S.cR = function (a, b) {
	return s$(a).chompRight(b).s
}
S.eR = function (a, b) {
	return s$(a).ensureRight(b).s
}
S.cL = function (a, b) {
	return s$(a).chompLeft(b).s
}
S.eL = function (a, b) {
	b = b || '/';
	return s$(a).ensureLeft(b).s
}
S.r = function (a, b) {
	var g = G(arguments)
	return g.n ? s$(a).chompRight(b).s :
			s$(a).ensureRight(b).s
}
_.left = function (a, b) {
	alert('_.left')
	var g = G(arguments)
	return S(b) ? (!g.m ? s$(a).ensureLeft(b).s
			: s$(a).chompLeft(b).s) : 0
}
_.slash = function (str) {
	alert('_.slash')
	var hasSlash = str[0] == '/'
	return hasSlash ? str : '/' + str
} //= _.ensureSlash
_.ext = S.ext = function (a, b) {
	if (S(a)) {
		return s$(a).contains('.') ? a :
				s$(a).ensureRight(b || '.png').s
	}
}
_.crs = function (a) {
	return a.split('/').pop().split('.png')[0]
}//it's the opposite of 'src' ! //it strips '/me.png' -> 'me'
_.url = function (a) {
	alert('S.url')
	return 'url("' + a + '")'
}
_.iDU = function (a) {
	return s$(a).contains('data:')
}
_.src = function (a) {
	a = _.ext(a);
	return s$(a).startsWith('/') ? a : '/' + a
}
_.fCC = function (a) {
	return String.fromCharCode(a)
}
_.tS = function (a) {
	return a.toString()
}
_.eW = function (str, fn) {
	
	//use 1:ends With
	if (S(fn)) {
		return s$(str).endsWith(fn)
	}
	//use 2:each(in a string) With
	var arr = _.compact(_.map(str.trim().split(' '),
			function (str) {
				return str.trim()
			}))
	if (fn) {
		_.e(arr, function (str) {
			fn(str)
		})
	}
	return arr
}
_.j = function (a, b) {
	return (a || []).join(b || ' ')
}
_.tU = _.tUc = _.tUC = function (a) {
	return S(a) ? a.toUpperCase() :
			A(a) ? _.m(a, function (a) {
				return S.tU(a)
			}) : a
}
_.iU = function (a) {
	if (S(a)) {
		return s$(a).isUpper()
	}
}
_.tLc = _.tL = _.tLC = function (a) {
	return a.toLowerCase()
}
rgba = function () {
	var g = G(arguments),
			o = g.N_ ? {r: g.f, g: g.s, b: g.t, a: g[3]} :
					g.O_ && N(g.s) ? {r: g.f.r, g: g.f.g, b: g.f.b, a: g.s} :
							g.O ? {r: g.f.r, g: g.f.g, b: g.f.b, a: g.f.a} : {}
	o.r = N(o.r, 0)
	o.g = N(o.g, 0)
	o.b = N(o.b, 0)
	o.a = N(o.a, 1)
	var str = 'rgba('
	str = str + o.r + ',' + o.g + ',' + o.b + ',' + o.a
	str += ')'
	return str
}
O$ = function (o) {
	return O(o) && !F(o) && !A(o)
}
AO = function (a) {
	return A(a) && O(a[0])
}



 
