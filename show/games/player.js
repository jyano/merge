 
	SHHT = function () {
		W(0)
		y = w.y(300, 300, '-')
		y.aD(0).lD(20)
		y.fR(0)
		y.aV(10)
		T.t(function () {
			// y.ApplyTorque(100)
			if ($.K.r) {
				y.aV(15)
				// y.ApplyTorque(130)
			}
			else if ($.K.l) {
				y.aV(-15)
				// y.ApplyTorque(-130)
			}
			else {
				y.aV(0)
			}
		})
		// w.show(function(){return y.aV()})
	}
	PPL = function (cn) {
		W();
		df = cn ||
		'slide'
		//'jumper'
		cn = _pam.toLowerCase() || df
		p = w.p(400, 400, 4, cn)
	}
	THRUST = function () {
		W({
			g: 0//, i:'space.jpg'
		})
		w.S(400, 200, 's', 40, 40)
		p = w.p(300, 300).cn('thrust')
		w.tim(3)
		w.b(function (cx) {
			cx.w('bu', function (f) {
				if (f.B() != p) {
					this.B().kill()
				}
			})
			cx.w('bu', 'tim', function (t) {
				t.B().kill()
			})
		})
		$.space(function () {
			w.bu(p.wP(0, -100)).I(p.v(5, '*'))
		})
	}
 