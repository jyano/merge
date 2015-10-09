iso = function () {
	Tile = function () {
		var that = this
		var shape = this
		this.container = new createjs.Container().drag()
		this.tile = cjs.diamond(80, 40, 'blue')
		//this.tile.graphics.s('red').f('blue').s('green').mt(0,0).lt(40,-20).lt(80,0).lt(40,20).lt(0,0)
		this.container.A(this.tile)
		this.coin = false
		this.addCoin = function () {
			this.coin = tileCoin()
			this.container.A(this.coin)
		}
		this.addBad = function () {
			this.bad = tileBad()
			this.container.A(this.bad)
		}
		this.playerTo = function () {
			if (shape.wasOn == true) {
				location = location
			}//ISO()
			player.X(that.container.x)
			player.Y(that.container.y - 14)
			player.tile = shape
			player.col = shape.col
			player.row = shape.row
			if (shape.coin) {
				shape.coin.remove()
			}
			if (shape.bad) {
				location = location
			}
			shape.wasOn = true
			//if(isolated()){alert('!')}
		}
		this.container.on('dblclick', function () {
			h = that
			that.tile.graphics.f('red').dc(0, 0, 2)
			$l('dblclicked!')
			that.playerTo()
		})
	}
	isoRow = function (r, howMany, x, y) {
		x = x || 0;
		y = y || 0
		var row = []
		_.t(howMany, function (i) {
			x = x + 40
			y = y - 20
			var t = new Tile()
			t.container.XY(x, y)
			stage.A(t.container)
			cjs.bindSlide(t.container)
			t.col = i
			t.row = r
			row.push(t)
		})
		return row
	}
	isoGrid = function (n1, n2, x, y) {
		x = x || 0;
		y = y || 0
		var grid = []
		_.t(n2, function (i) {
			x = x + 40
			y = y + 20
			var row = isoRow(i, n1, x, y)
			grid.push(row)
		})
		return grid
	}
	tileCoin = function () {
		return cjs.cir(15, 'y', 'z')
	}
	tileBad = function () {
		return cjs.cir(15, 'g', 'o')
	}
	tilePlayer = function (bm) {
		player = bm
		player.right = function () {
			player.tile.container.remove()
			grid[player.row][player.col] = null
			grid[player.row][player.col + 1].playerTo()
		}
		player.left = function () {
			player.tile.container.remove()
			player.tile.exists = false
			//player.tile=null
			grid[player.row][player.col] = null
			grid[player.row][player.col - 1].playerTo()
		}
		player.down = function () {
			player.tile.container.remove()
			grid[player.row + 1][player.col].playerTo()
		}
		player.up = function () {
			player.tile.container.remove()
			grid[player.row - 1][player.col].playerTo()
		}
		player.to = function (x, y) {
			grid[x][y].playerTo()
			return player
		}
		kD('u', function () {
			player.up()
		})
		kD('d', function () {
			player.down()
		})
		kD('l', function () {
			player.left()
		})
		kD('r', function () {
			player.right()
		})
		return player
	}
	ISO = function (levNum) {
		z()
		stage = createjs.stage(900, 500).tick().A()
		grid = isoGrid(10, 10, 0, 240)
		kD('s', function () {
			location = location
		})
		if (levNum) {
			window['lev' + levNum]()
		}
		else if (window['_pam']) {
			window['lev' + _pam]()
		}
		else {
			lev1()
		}
		stage.bm0('me', function (me) {
			player = tilePlayer(me).sXY(.2).drag().to(5, 5)
		})
	}
	killTile = function (a, b) {
		grid[a][b].container.remove()
		grid[a][b].wasOn = true
	}
	lev1 = function () {
		grid[3][5].container.remove()
		grid[4][4].container.remove()
		grid[6][6].container.remove()
		grid[7][1].container.remove()
		grid[0][3].addCoin()
		grid[1][3].addCoin()
		grid[3][4].addCoin()
		grid[5][2].addCoin()
		grid[8][8].addCoin()
	}
	lev2 = function () {
		grid[0][0].addCoin()
		grid[0][9].addCoin()
		grid[0][3].addCoin()
		grid[1][3].addCoin()
		grid[1][6].addCoin()
		grid[2][1].addCoin()
		grid[3][4].addCoin()
		grid[3][8].addCoin()
		grid[4][7].addCoin()
		grid[5][2].addCoin()
		grid[6][5].addCoin()
		grid[6][9].addCoin()
		grid[8][8].addCoin()
		grid[8][2].addCoin()
		grid[8][4].addCoin()
		grid[9][0].addCoin()
		killTile(1, 2)
		killTile(2, 2)
		killTile(2, 6)
		killTile(2, 7)
		killTile(2, 8)
		killTile(4, 0)
		killTile(4, 3)
		killTile(4, 4)
		killTile(4, 6)
		killTile(4, 9)
		killTile(6, 1)
		killTile(6, 2)
		killTile(7, 1)
		killTile(7, 3)
		killTile(7, 4)
		killTile(7, 9)
		killTile(8, 6)
		killTile(8, 7)
		killTile(8, 9)
	}
	lev3 = function () {
		grid[0][0].addBad()
		grid[0][9].addBad()
		grid[0][3].addBad()
		grid[1][6].addBad()
		grid[2][1].addBad()
		grid[3][4].addBad()
		grid[3][8].addBad()
		grid[5][2].addBad()
		grid[6][5].addBad()
		grid[6][9].addBad()
		grid[8][8].addBad()
		grid[8][2].addBad()
	}
	lev4 = function () {
		grid[2][9].addCoin()
		grid[5][0].addCoin()
		grid[2][3].addCoin()
		grid[5][6].addCoin()
		grid[9][3].addCoin()
		grid[3][1].addCoin()
		grid[4][4].addCoin()
		grid[0][8].addCoin()
		grid[6][7].addCoin()
		grid[5][8].addCoin()
		grid[9][6].addCoin()
		grid[2][2].addBad()
		grid[0][0].addBad()
		grid[0][9].addBad()
		grid[5][3].addBad()
		grid[2][6].addBad()
		grid[4][5].addBad()
		grid[9][0].addBad()
		grid[9][7].addBad()
		grid[3][8].addBad()
		grid[6][5].addBad()
		grid[6][9].addBad()
		grid[8][2].addBad()
	}
	isolatedBeta = function () {
		r = player.row;
		c = player.col
		if (
				//grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
		//&&  grid[r-1] &&grid[r-1][c] && grid[r-1][c].wasOn
		grid[r + 1] && grid[r + 1][c] && grid[r + 1][c].wasOn
		) {
			return true
		}
	}
};
iso()
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
	if (!O(o)) {
		return
	}
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
//this is actually the 'lettering' plugin
(function ($) {
	function injector(t, splitter, klass, after) {
		var text = t.text()
				, a = text.split(splitter)
				, inject = '';
		if (a.length) {
			$(a).each(function (i, item) {
				inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;
			});
			t.attr('aria-label', text)
					.empty()
					.append(inject)
		}
	}
	
	var methods = {
		init: function () {
			return this.each(function () {
				injector($(this), '', 'char', '');
			});
		},
		words: function () {
			return this.each(function () {
				injector($(this), ' ', 'word', ' ');
			});
		},
		lines: function () {
			return this.each(function () {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
				// (of the word "split").  If you're trying to use this plugin on that
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});
		}
	};
	$.fn.lettering = function (method) {
		// Method calling logic
		if (method && methods[method]) {
			return methods[method].apply(this, [].slice.call(arguments, 1));
		} else if (method === 'letters' || !method) {
			return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
		}
		$.error('Method ' + method + ' does not exist on jQuery.lettering');
		return this;
	};
})(jQuery)
CAMERA = function () {
}
USINGLAYERSINEASEL = function () {
	z()
	s = SuperStage(500).A()
	s.bm('me', function (bm) {
		b = bm
		bm.sxy(3)
		drawCar()
		s.tick(function () {
			b.x(-1 * (g.x() * 2))
			b.y(-1 * (g.y() * 2))
		})
	})
	bt = $.button('safd', function () {
		s.sxy(2)
	}).A()
	function drawCar() {
		s.bm('guy', function (bm) {
			g = bm
			bm.sxy(.5)
			SL(bm)
		})
	}
}
LETTERING = function () {
	z()
	span = $.span('hello').A()
	span.lettering() // wrap <span class="charx"/ > around each character within header
	$spans = span.find('span')
	$('.dropped span').css({transition: 'all 0.3s ease-in'})
}
FALLING = function () {
	z()
	//this goes in css
	$header2 = $.span('hello').A()
	$header2.lettering() // wrap <span class="charx"/ > around each character within header
	$spans = $header2.find('span')
	delay = 0
	$header2.on('click', function () {
		$spans.each(function () {
			$(this).css({transitionDelay: delay + 's'}) // apply sequential trans delay to each character
			delay += 0.1
		})
		$header2.addClass('dropped') // Add "dropped" class to header to apply transition
		setTimeout(function () { // reset header code
			$spans.each(
					function () {
						$(this).css({
							transitionDelay: '0ms'
						})
					})
			// set transition delay to 0 so when 'dropped' class is removed,
			// letter appears instantly
			$header2.removeClass('dropped') // remove class at the "end" to reset header.
			delay = 0
		}, 1800) // 1800 is just rough estimate of time transition will finish, not the best way
	})
}
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
SHAPES = function () {
	z()
	s = stage = SuperStage(500, 500).a()
	//s.bm('me', function(bm){ bm.sxy(.2)   })
	s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
	s.Circle(100, 100, 10, 'r', 'y').fn(SL)
	s.Circle(10, 100, 100, 'z', 'x').fn(SL)
	s.Circle(100, 10, 100, 'a', 'c').fn(SL)
	s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
}
RADIALGRAD1 = function () {
	z()
	$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
	stage = new createjs.Stage("canvas", 420, 500, 30)
	shape = new createjs.Shape()
	shape.x = 20
	shape.y = 20
	stage.addChild(shape)
	shape.graphics.beginRadialGradientFill(
			["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
	)
	shape.graphics.drawRect(0, 0, 100, 100)
	shape.graphics.endFill()
	stage.update()
}
RADIALGRAD = function () {
	z()
	stage = SuperStage(500, 500).A()
	shape = stage.Shape().xy(40)
	shape.g
		// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
			.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
			.drawRect(0, 0, 100, 100)
			.drawCircle(180, 180, 100, 100)
}
RADIALGRADFILL = function () {
	z()
	$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
	stage = new createjs.Stage("canvas", 420, 500, 30)
// 2 colors
	shape = new createjs.Shape()
	shape.x = 20
	shape.y = 20
	shape.graphics.beginRadialGradientFill(
			[oC('b'), oC('r')],
			[.1, 1], 50, 50, 0, 50, 50, 50
	)
	shape.graphics.drawRect(0, 0, 100, 100)
	shape.graphics.endFill()
	stage.addChild(shape)
// 3 colors
	shape = new createjs.Shape();
	shape.x = 20;
	shape.y = 140;
	shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
	shape.graphics.drawRect(0, 0, 100, 100);
	stage.addChild(shape);
// alpha
	shape = new createjs.Shape();
	shape.x = 20;
	shape.y = 260;
	shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
	shape.graphics.drawRect(0, 0, 100, 100);
	shape.graphics.endFill();
	stage.addChild(shape);
}
RADIALGRADFILL2 = function () {
	z()
	$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
	stage = new createjs.Stage("canvas", 420, 500, 30)
	stage.addChild(
			h = new createjs.Shape()
	)
	h.graphics.beginRadialGradientFill(
			["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
	).drawCircle(100, 100, 50)
	stage.update()
}
EASELART = function () {
	z()
	stage = SuperStage(500, 600).A()
	shape = stage.Shape()
	shape.rectangle(100, 200, 0, 200, 'a')
	shape.rectangle(100, 100, 100, 20, 'g')
	shape.rectangle(145, 120, 10, 80, 'o')
	shape.circle(105, 100, 20, 'b')
	shape.circle(105, 100, 8, 'x')
	shape.circle(200, 100, 20, 'b')
	shape.circle(200, 100, 8, 'x')
	//shape.circle(100,20,100,'g')
	SL(shape)
	shape.rx(100).ry(300).x(100).y(300)
	p = function () {
		EaselTween([shape, {l: 1}],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200]
		)
		EaselTween([shape, {l: 1}],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200]
		)
	}
	p()
}
CENTERSHAPE = function () {
	z()
	stage = SuperStage(500, 600).A()
	shape = stage.Shape();
	SL(shape)
	shape.RECT(0, 0, 100, 100, 'a')
	shape.RECT(0, -75, 25, 50, 'b')
	shape.RECT(0, -200, 100, 100, 'r')
	shape.circle(100, 200, 40, 'z', 'x')
	shape.g.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
	shape.g.beginFill("orange").drawPolyStar(
			100, 100, 50, 5, 0.6, -90)
	shape.xy(200)
	stage.bm('me', function (b) {
		me = b
		me.rgc()
		me.xy(200)
		me.sxy(.4)
	})
}
SQUAREGAMES = function () {
	z()
	s = SuperStage(400, 400).A()
}
MARGINAUTO = function () {
	z()
	o = outer = $.div('b', 500, 500).A()
	o.A(i = inner = $.div('r', 100, 100))
	i.mar('auto')
	o.mar('auto')
}
MOBILEHEADERS = function () {
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
