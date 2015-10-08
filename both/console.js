$l = function (a) {
	var g = G(arguments), v
	if (O(a) && N(a.x) && N(a.y)) {
		v = a.toFixed()
		//  $l(v.x + ' , ' + v.y)
		return a
	}
	_.e(
			g, function (a) {
				console.log(
						_.isFunction(a) ? a.toString()
								: O(a) ? JSON.stringify(a)
								: a
				)
			}
	)
	return a
}
$l = function (a) {
	console.log.apply(console, arguments)
	return a
}
$z = function (z) {
	console.error(z)
}
$d = function (o) {
	console.dir(o);
	return o
}