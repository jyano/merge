TRIANG = function () {
	W([1200, 600, 10000, 600], {})
	//yy=w.y().aD(5000)//.fixRot()
	dir = 12
	car = w.D(300, 300, 'r', [
		[200, 20],
		[20, 165, -50, -50, 45],
		[20, 165, 50, -50, -45]
	]).fr(5).track()
	_.t(30, function () {
		w.p(R(9000, 500), 100, R(2, .5))
	})
	wh = wheel(250, 300).C('b').bS('me', .7)
	j = w.rJ(
			wh, //.lD(100).aD(100).fr(100),
			car,
			0,
			0,
			100,
			0
	)
	w.rJ(
			wh2 = wheel(250, 300, 50, 10).C('g')
					.bS('me', .4).aD(10).fr(2),
			car, 0, 0, -100, 0
	)
	j = w.rJ(
			wh3 = wheel(250, 300, 25, 6).C('y').bS('me', .2).lD(100).aD(100).fr(100),
			car, 0, 0, 0, -100
	)
	function wheel(x, y, r, n) {
		r = N(r, 80)
		n = N(n, 15)
		pC = [b2d.pC(r, n)]
		return w.D(x, y, 'w', pC)//.d(5).r(0).lD(100).aD(100).fr(100)
	}
	
	// j.mt(-50)
	T.t(function () {
		var K = $.K
		car.I(0, 5000)
		if (K.r) {
			wh.ApplyTorque(3500)
			wh2.ApplyTorque(3500)
			wh3.ApplyTorque(150)
		}
		if (K.l) {
			wh.ApplyTorque(-3500)
			wh2.ApplyTorque(-3500)
			wh3.ApplyTorque(-150)
		}
		if (K.u) {
			wh.ApplyTorque(1500)
			wh3.ApplyTorque(-500)
		}
		if (K.d) {
			wh2.ApplyTorque(-500)
			wh3.ApplyTorque(1500)
		}
	})
	//car.aD(1000).lD(1000)
}