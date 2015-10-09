function maybe() {
	eD.init = function () {
		alert('eD.init')
		var eD = this
		eD.initialize.apply(eD, arguments)
		return eD
	}
}
function alpha() {
	$.fn.keyControls = function (num) {
		var args = G(arguments), that = this
		this.P('a')
		if (args.P) {
			$.kD('left', function () {
				that.toL(num)
			})
			$.kD('right', function () {
				that.toR(num)
			})
		}
		if (args.N) {
			$.kD('up', function () {
				that.toU(num)
			})
			$.kD('down', function () {
				that.toD(num)
			})
		}
	}// o.keyControls(num) should deprecate use of key(o)
	cjs.bulletHit = function (bullet, inWhat) {
		alert('bullletHit')
		var x = bullet.centerX(),
				y = bullet.centerY()
		var res = M.pointInCircle(x, y, {
			x: inWhat.x,
			y: inWhat.y,
			radius: inWhat.H() / 2
		})
		if (res == true) {
			$l('hit!')
		}
		return res
	}
	cjs.M = function (a) {
		var m = new cjs.Matrix2D()
		if (N(a)) {
			m.rotate(a)
		}
		return m
	}
}
function prevKeyFns() {
    $.k = $.key = $.kD = function self(k, fn) {

        if (O(k)) {
            _.e(k, function (fn, k) {
                if (s$(k).isUpper()) {
                    $.kU(k.toLowerCase(), fn)
                }
                else {
                    $.kD(k, fn)
                }
            })
            return
        }

        if (KEYOB[k]) {
            k = KEYOB[k]
        }

        $('body').on('keydown', function (e) {
            if (e.which == k) {
                fn(e, $.K)
            }
        })

    }
    $.kU = function (k, fn) {

        if (keyObj[k]) {
            k = keyObj[k]
        }
        $('body').on('keyup', function (e) {
            if (e.which == k) {
                fn(e, $.K)
            }
        })
    }
    $.spc = function (fn) {
        return $.kD('space', fn)
    }

    K = function (k, fn) {
        var g = G(arguments), o, key

        if (g.u) {
            if (K._loaded) {
                return
            }
            $.kD('l', function () {
                if ($.test) {
                    $l('left pressed')
                }
                K.l = $.K.l = $.K.left = true
                $.K.dir = 'left'
                K.l = 1;
                K.L = 0
            })

            $.kU('l', function () {
                if ($.test) {
                    $l('left lifted')
                }
                K.l = $.K.l = $.K.left = false
                K.l = 0;
                K.L = 1
            })

            $.kD('r', function () {
                if ($.test) {
                    $l('right pressed')
                }
                K.r = $.K.r = $.K.right = true
                $.K.dir = 'right'
                K.r = 1;
                K.R = 0
            })

            $.kU('r', function () {
                if ($.test) {
                    $l('right lifted')
                }
                $.K.r = $.K.right = false
                K.r = 0;
                K.R = 1
            })
            $.kD('u', function () {
                if ($.test) {
                    $l('up pressed')
                }
                $.K.u = $.K.up = true
                K.u = 1;
                K.U = 0
            })
            $.kU('u', function () {
                if ($.test) {
                    $l('up lifted')
                }
                $.K.u = $.K.up = false
                K.u = 0;
                K.U = 1
            })
            $.kD('d', function () {
                if ($.test) {
                    $l('down pressed')
                }
                $.K.d = $.K.down = true
                K.d = 1;
                K.D = 0
            })
            $.kU('d', function () {
                if ($.test) {
                    $l('down lifted')
                }
                $.K.d = $.K.down = false
                K.d = 0;
                K.D = 1
            })
            K._loaded = 1
            return
        }

        if (O(k)) {
            if (g.p) {
                if (F(k.u)) {
                    z(function () {
                        if (K.u) {
                            k.u(K.u)
                        }
                    })
                }
                if (F(k.d)) {
                    z(function () {
                        if (K.d) {
                            k.d(K.d)
                        }
                    })
                }
                if (F(k.l)) {
                    z(function () {
                        if (K.l) {
                            k.l(K.l)
                        }
                    })
                }
                if (F(k.r)) {
                    z(function () {
                        if (K.r) {
                            k.r(K.r)
                        }
                    })
                }
            }
            else {
                _.e(k, function (fn, k) {
                    K(k, fn)
                })
            }

            return
        }

        o = s$(k).isUpper() ? {on: 'keyup', k: k.toLowerCase()} : {on: 'keydown', k: k}

        if (g.p) {
            return z(function () {
                if (K[k]) {
                    fn()
                }
            })
        }

        key = Key(o.k)
        return $('body').on(o.on, function (e) {
            if (e.which == key) {
                fn(e)
            }
        })
        function Key(k) {
            var ob = {u: 38, d: 40, l: 37, r: 39, s: 32, e: 13};
            return ob[k] ? ob[k] : k
        }
    }
}
$.K = function (o) {
    alert('$.K')
    if (!O(o)) {return}
    if (F(o.u)) {
        cjs.tick(function () {
            if ($.K.u) {
                o.u($.K.u)
            }
        })
    }
    if (F(o.d)) {
        cjs.tick(function () {
            if ($.K.d) {
                o.d($.K.d)
            }
        })
    }
    if (F(o.l)) {
        cjs.tick(function () {
            if ($.K.l) {
                o.l($.K.l)
            }
        })
    }
    if (F(o.r)) {
        cjs.tick(function () {
            if ($.K.r) {
                o.r($.K.r)
            }
        })
    }
}
//alert
cjs.watchKeys = function () {
    alert('cjs.watchKeys')
    $.K.l = $.K.left = false
    $.K.r = $.K.right = false
    $.K.u = $.K.up = false
    $.K.d = $.K.down = false

    $.kD('l', function () {
        if ($.test) {
            $l('left pressed')
        }
        $.K.l = $.K.left = true
        $.K.dir = 'left'
    })


    $.kU('l', function () {
        if ($.test) {
            $l('left lifted')
        }
        $.K.l = $.K.left = false
    })
    $.kD('r', function () {
        if ($.test) {
            $l('right pressed')
        }
        $.K.r = $.K.right = true
        $.K.dir = 'right'
    })
    $.kU('r', function () {
        if ($.test) {
            $l('right lifted')
        }
        $.K.r = $.K.right = false
    })
    $.kD('u', function () {
        if ($.test) {
            $l('up pressed')
        }
        $.K.u = $.K.up = true
    })
    $.kU('u', function () {
        if ($.test) {
            $l('up lifted')
        }
        $.K.u = $.K.up = false
    })
    $.kD('d', function () {
        if ($.test) {
            $l('down pressed')
        }
        $.K.d = $.K.down = true
    })


    $.kU('d', function () {
        if ($.test) {
            $l('down lifted')
        }
        $.K.d = $.K.down = false
    })
}

//$.space = function (fn) {return $.kD('space', fn)}
meSprite = function () {
	return $sprite(SS).XY(10).drag()
}
function oldEasPhy() {
	Shape = EaselShape = Hx = function (graphic, funcOrStage) {
		if (O(graphic)) {
			return SuperDisplayObject(new createjs.Shape(graphic))
		}
		var shape = SuperDisplayObject(new createjs.Shape())
		shape.g = shape.ob.graphics
		if (S(graphic)) {
			shape.g.f(graphic)
		}
		if (F(funcOrStage)) {
			funcOrStage(shape.g, shape)
		}
		if (iSt(funcOrStage)) {
			funcOrStage.a(shape)
		}
		shape.fillColor = shape.f = shape.fC = function (color) {
			shape.g.f(oC(color))
			return shape
		}
		shape.strokeColor = shape.s = shape.sC = function (a) {
			shape.g.s(oC(a))
			return shape
		}
		shape.clear = shape.clr = function () {
			shape.g.clear()
			return shape
		}
		shape.circle = shape.c = shape.cir = function (x, y, r, c, d) {
			if (!N(r)) {
				return shape.circle(0, 0, x, y, r)
			}
			if (c) {
				shape.fillColor(c)
			}
			if (d) {
				shape.strokeColor(d)
			}
			shape.g.dc(x, y, r)
			return shape
		}
		shape.rectangle = shape.r = shape.rec = function l(x, y, wd, ht, fc, sc) {
			if (!N(wd)) {
				return l(0, 0, x, y, wd, ht)
			}
			x = x || 0;
			y = y || 0
			wd = wd || 100
			ht = ht || wd
			fc = oC(fc || 'x')
			sc = oC(sc || 'y')
			if (fc) {
				shape.f(fc)
			}
			if (sc) {
				shape.s(sc)
			}
			shape.g.r(x, y, wd, ht)
			return shape
		}
		shape.RECT = function (centerX, centerY, width, height, fc, sc) {
			return shape.rectangle(centerX - (.5 * width), centerY - (.5 * height), width, height, fc, sc)
		}
		shape.ss = function (a, b, c, d) {
			shape.g.ss(a, b, c, d);
			return shape
		}
		return shape
	}
	Graphic = EaselGraphic = Gx = function (stage) {
		var g, graphic
		graphic = g = new createjs.Graphics()
		graphic.fs = function (a, b) {
			graphic.f(oC(a))
			if (S(b)) {
				graphic.s(oC(b))
			}
			return graphic
		}
		graphic.d = function (stage) {
			g.draw(stage || s)
		}
		graphic.dr0 = function (w, h) {
			w = N(w) ? w : 100
			h = N(h) ? h : w
			graphic.dr(0, 0, w, h)
			return graphic
		}
		graphic.shape = graphic.H = function () {
			return EaselShape(graphic)
		}
		return graphic
	}
	EaselRect = rct = function l(x, y, w, h, fc, sc) {
		if (!N(w)) {
			return l(0, 0, x, y, w, h)
		}
		x = x || 0;
		y = y || 0;
		w = w || 100;
		h = h || w;
		fc = oC(fc || 'x');
		sc = oC(sc || 'y')
		var sh = EaselShape()//.fn(SL)
		sh.g.f(fc).s(sc).r(x, y, w, h)
		return sh
	}
	EaselCircle = cir = function p(x, y, r, fc, sc) {
		var gx = Gx()
		if (O(x)) {
			return p(
					x.x,
					x.y,
					x.r,
					x.fc,
					x.sc)
		}
		r = N(r) ? r : 8
		x = N(x) ? x : 100
		y = N(y) ? y : 100
		gx.ss(r / 8).fs(fc, sc || 'z').dc(0, 0, r)
		return EaselShape(gx).xy(x || 100, y || 100)
	}
//canon
	ball = function (z, fc, sc) {
		var b = cir(0, 0, z, fc, sc)
		b.r = z
		b.d = z + z
		b.T = function (a) {
			if (U(a)) {
				return b.y() - b.r
			}
			b.y(a + b.r);
			return b
		}
		b.B = function (a) {
			if (U(a)) {
				return b.y() + b.r
			}
			b.y(a - b.r);
			return b
		}
		b.L = function (a) {
			if (U(a)) {
				return b.x() - b.r
			}
			b.x(a + b.r);
			return b
		}
		b.R = function (a) {
			if (U(a)) {
				return b.x() + b.r
			}
			b.x(a - b.r);
			return b
		}
		b.F = 1
		b.fall = function (r) {
			b.t(function () {
				if (r) {
					if (ballBox(b, r)) {
						b.F = 0
					} else {
						b.F = 1
					}
				}
				if (b.F) {
					b.y(10, '+')
				}
			})
		}
		return b
	}
	box = function (w, h, fc, sc) {
		w = w || 200
		h = h || w
		var b = rct(
				0 - w / 2, 0 - h / 2, w, h, fc, sc
		)
		b.wr = w / 2
		b.hr = h / 2
		b.wd = w
		b.hd = h
		b.T = function (a) {
			if (U(a)) {
				return b.y() - b.hr
			}
			b.y(a + b.hr)
			return b
		}
		b.B = function (a) {
			if (U(a)) {
				return b.y() + b.hr
			}
			b.y(a - b.hr)
			return b
		}
		b.L = function (a) {
			if (U(a)) {
				return b.x() - b.wr
			}
			b.x(a + b.wr)
			return b
		}
		b.R = function (a) {
			if (U(a)) {
				return b.x() + b.wr
			}
			b.x(a - b.wr);
			return b
		}
		b.fall = function () {
			b.t(function () {
				if (b.F) {
					b.y(40, '+')
				}  //****
				if (ballBox(b, r)) {
					b.F = 0
				}
			})
		}
		return b
	}
	ballBox = function (bl, bx, buff) {
		buff = buff || 100
		var b = bl.B() >= bx.T() && bl.T() <= bx.T() + buff &&
				bl.x() >= bx.L() && bl.x() <= bx.R()
		if (b) {
			bl.B(bx.T())
		}
		return b
	}
	EaselText = TX = function (words, color, font, x, y) {//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
		x = N(x) ? x : 100
		y = N(y) ? y : x
		font = font || '20px Arial'
		font = N(font) ? font + 'px Arial' : font
		color = color || 'z'
		var text = Do(new createjs.Text(words, font, oC(color))).xy(x, y)
		text.baseline = text.bl = function (b) {
			if (U(b)) {
				return text.ob.textBaseline
			}
			text.ob.textBaseline = b
			return text
		}
		return text
	}
//shooty  //b=circle('w', 8, j.x()+75, j.y())
	circle2 = function (r, z, x, y) {
		var graphic = EaselGraphic()
		if (!S(r)) {
			return circle2('r', r, z, x)
		}
		z = N(z) ? z : 32
		x = N(x) ? x : 100
		y = N(y) ? y : 100
		graphic.ss(z / 8).fs(r, 'z').dc(0, 0, z)
		return EaselShape(graphic).xy(x || 100, y || 100)
	}
	cir0 = function (x, y, r, fc, sc) {
		var shape, h
		shape = h = EaselShape()
		if (O(x)) {
			return cir0(x.x, x.y, x.r, x.fc, x.sc)
		}
		x = x || 0
		y = y || 0
		r = r || 8
		fc = fc || 'w'
		sc = sc || 'z'
		shape.circle(x, y, r, fc, sc)
		SL(shape)
		return shape
	}
}