transparent = function (i, num) {
	if (!N(num)) {
		return 'transparent url(' + i + '.png)'
	}
	return 'transparent url(' + i + '.png)' + num + '% 0px'
}
PARALLAX = function () {
	z()
	CanvasLayer = function (bg) {
		c = $.c('y', 500, 500).P('a').W('100%').H(256)
		if (bg) {
			c.bg(bg)
		}
		return c
	}
	CanvasLayer(transparent('me', 10))
	CanvasLayer(transparent('guy', 300))
}
PARALLAXBYMOUSE = function () {
	z()
	DivLayer = function (bg) {
		d = $.d('y', 500, 500).P('a').W('100%').H(256)
		if (bg) {
			d.bg(bg)
		}
		return d
	}
	//awesome!!!!!
	back = DivLayer(transparent('me'))
	front = DivLayer(transparent('guy'))
	speed = 0
	xp = 0
	$('body').mousemove(
			function (e) {
				speed = e.pageX - ( W() / 2 )
				speed /= ( W() / 2 )
				$l(speed)
			}
	)
	$('body').mouseout(
			function (e) {
				speed = 0
			}
	)
	setInterval(
			function () {
				xp += speed
				back.bgP(xp + 'px 0px')
				front.bgP((xp * 3) + 'px 0px')
			}, 30
	)
}
DivLayer = function (bg) {
	var div = $.d('y', 500, 500).P('a').width('100%').H(256)
	if (bg) {
		div.background(bg)
	}
	return div
}
transparent = function (img, num) {
	if (!N(num)) {
		return 'transparent url(' + img + '.png)'
	}
	return 'transparent url(' + img + '.png)' + num + '% 0px'
}
CanvasLayer = function (bg) {
	var can = $.c('y', 500, 500).A()
			.P('a').width('100%').H(256)
	if (bg) {
		can.bg(bg)
	}
	return can
}
PARALLAX = function () {
	z()
	CanvasLayer(
			transparent('me', 10)
	).A()
	CanvasLayer(
			transparent('guy', 300)
	).A()
}
PARALLAXBYMOUSE = function () {
	//awesome!!!!!
	z()
	back = DivLayer(transparent('me')).A()
	front = DivLayer(transparent('guy')).A()
	speed = 0
	xp = 0
	$('body').mousemove(function (e) {
		speed = e.pageX - ( W() / 2 )
		speed /= ( W() / 2 )
		$l(speed)
	})
	$('body').mouseout(function (e) {
		speed = 0
	})
	setInterval(function () {
		xp += speed
		back.backgroundPosition(xp + 'px 0px')
		front.backgroundPosition((xp * 3) + 'px 0px')
	}, 30)
}