PNB = function () {
	W([420, 600], {})
	w.floor.kill()
	w.S(215, 520, 'r', 30).K('bump').DBF(10, .8, 0)
	w.S(215, 100, 'b', 100, 10).K('shelf')
	w.D(215, 90, 'r', 20)
			.bS('sun', .24)
			.K('sun')
			.rot(10, 100)
	flip = w.flips(100, 430)
	$.tap(function () {
				var b = w.D(R(300, 40), 160, 'g', 20).DBF(1, .2, 2)
				if (!R(10)) {
					b.bS('me', .24)
				}
				flip()
			}
	)
}