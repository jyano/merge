superCanvasGradient = function (gradient) {
	addColorStop = function rc(gradient, stop, color) {
		
		// pass only a gradient -> function with gradient curried
		// add a color stop to a gradient
		if (U(stop)) {
			return _.partial(rc, gradient)
		}
		gradient.addColorStop(stop, oO('c', color))
		return gradient
	}
	superCanvasGradient = function (el) {
		CanvasGradient.prototype.stop = function (num, col) {
			var that = this
			if (N(num)) {
				this.addColorStop(num, oO('c', col))
			}
			if (A(num)) {
				_.each(arguments, function (arg) {
					that.stop(arg[0], arg[1])
				})
			}
			return this
		}
		el.linearGradient = el.lG = el.createLinearGradient = function (a, b, c, d) {
			a = a || 0
			b = b || 0
			c = c || this.W()
			d = d || this.H()
			return SuperGradient(this.context.createLinearGradient(a, b, c, d))
		}
		el.linGradBlackToWhite = function () {
			grd = this.linearGradient(0, 0, this.W(), 0)
			grd.stop(0, "black").stop(1, "white")
			this.fillStyle(grd)
			this.fillRect()
		}
		el.linGradDiagnal = function (grd) {
			grd = grd || this.lG()
			grd.stop(0, 'r')
			grd.stop(.1, 'r')
			grd.stop(.15, 'b')
			grd.stop(.2, 'r')
			grd.stop(.5, 'y')
			grd.stop(1, 'b')
			this.fillStyle(grd)
			this.fillRect()
			return this
		}
		el.radialGradient = el.rG = el.createRadialGradient = function rg() {
			var g = G(arguments)
			g[0] = g[0] || 200
			g[1] = g[1] || 200
			g[2] = g[2] || 100
			g[3] = g[3] || 250
			g[4] = g[4] || 250
			g[5] = g[5] || 800
			return this.context.createRadialGradient(g[0], g[1], g[2], g[3], g[4], g[5])
		}
		el.radGradSample = function () {
			var grd = this.rG()
			addColorStop(grd, 0, 'r')
			addColorStop(grd, .15, 'b')
			addColorStop(grd, .2, 'r')
			addColorStop(grd, .5, 'y')
			addColorStop(grd, 1, 'b')
			this.fillStyle(grd)
			this.fillRect()
			return this
		}
		el.growingSun = function () {
			var that = this
			var a = 0,
					b = 1000,
					grd
			var func = function () {
				a += 1
				b -= 2
				grd = that.rG(200, 200, a, 290, 270, b)
				grd.addColorStop(.1, 'Yellow')
				grd.addColorStop(.3, 'Red')
				grd.addColorStop(1, 'Violet')
				//  gradient = x.grad( [200, 200, a, 290, 270, b],  { y: .1, r: .3,  V:1 } )
				that.fillStyle(grd)
				that.fillRect()
			}
			setInterval(func, 100)
		}
		el.pattern = el.createPattern = function (im, pat) {
			//im = im || $.img('me')[0]
			var pattern = this.context.createPattern(im, pat || 'repeat')
			return pattern
		}
		el.testPattern = function () {
			var that = this
			$.img('me', function (img) {
				var pattern = that.pattern(img[0], 'repeat')
				that.fillStyle(pattern).fillRect()
			})
		}
	}
	gradient.stop = function (stop, color) {
		addColorStop(gradient, stop, color);
		return gradient
	}
	gradient.stops = function (stopObject) {
		_.e(stopObject,
				function (v, k) {
					var o = S(v) ? {k: k, v: v} : {k: v, v: k}
					addColorStop(gradient, o.k, $r('c', o.v))
				})
	}
	return gradient
}
superCanvasPath = function (el) {
	el.f = el.fS = el.fs = el.fill = function (c) {
		if (U(c)) {
			el.context.fill()
		}
		else {
			el.context.fillStyle = oO('c', c)
		}
		return el
	}
	el.s = el.stroke = el.sS = function (c) {
		var el = this
		if (U(c)) {
			el.context.stroke()
		}
		else {
			el.context.strokeStyle = oO('c', c)
		}
		return el
	}//ss
	el.fsl = function (fS, sS, l) {
		this.context.f(fS)
		if (sS) {
			this.context.s(sS)
		}
		if (N(l)) {
			this.context.l(l)
		}
		return this
	}
	el.cP = el.closePath = function () {
		el.context.closePath()
		return el
	}
	el.bP = el.beginPath = el.begin = function (x, y) {
		el.context.beginPath()
		if (N(x)) {
			el.moveTo(x, y)
		}
		if (A(x)) {
			el.moveTo(x[0], x[1])
		}
		return el
	}
	el.mT = el.moveTo = function (x, y) {
		el.context.moveTo(x, y)
		return el
	}
	el.lT = el.lineTo = function (x, y) {
		if (A(x)) {
			_.e(arguments,
					function (x) {
						el.lineTo(x[0], x[1])
					})
		}
		el.context.lineTo(x, y)
		return el
	}
	el.cl = el.clip = function () {
		el.context.clip()
		return el
	}
	el.fR = el.fillRect = el.fr = function (a, b, c, d) {
		a = a || 0
		b = b || 0
		c = c || el.W()
		d = d || el.H()
		el.context.fillRect(a, b, c, d)
		return this
	}
	el.fillRect = el.fr = function (a, b, c, d) {
		a = a || 0
		b = b || 0
		c = c || this.W()
		d = d || this.H()
		this.context.fillRect(a, b, c, d)
		return this
	}
	el.colorFillRect = el.cfr = function (a) {
		var args = G(arguments)
		this.save()
		this.fillStyle = a
		this.fillRect(0, 0, this.W(), this.H())
		this.restore()
		return this
	}
	el.roundRect = function (X, y, width, height, radius) {
		el = this.context
		el.beginPath()
		el.moveTo(X + radius, y);
		el.lineTo(X + width - radius, y);
		el.quadraticCurveTo(X + width, y, X + width, y + radius);
		el.lineTo(X + width, y + height - radius);
		el.quadraticCurveTo(X + width, y + height, X + width - radius, y + height);
		el.lineTo(X + radius, y + height);
		el.quadraticCurveTo(X, y + height, X, y + height - radius);
		el.lineTo(X, y + radius);
		el.quadraticCurveTo(X, y, X + radius, y);
		el.closePath();
		el.fill()
		return el
	}
	el.roundRect.test = function () {
		el.roundRect(100, 100, 200, 400, 20)
	}
	//clear screen [+ fill with color || run fx]
	el.clr = el.clear = el.clearRect = function (a, b, c, d) {
		if (S(a)) {
			el.fillStyle(a);
			return el.fillRect()
		}
		a = a || 0
		b = b || 0
		c = c || el.W()
		d = d || el.H()
		el.context.clearRect(a, b, c, d)
		// if(F(a)){a()}
		return el
	}
	el.hL = el.horizontalLine = el.lnh = function (X, Y, l) {
		var g = G(arguments), X = g[0], Y = g[1], l = g[2],
				X2 = g.p ? X + l : g.n ? X - l : l
		return x.ln(X, Y, X2, Y)
	}
	el.vL = el.verticalLine = el.lnv = function (X, Y, len) {
		var g = G(arguments),
				X = g[0],
				Y = g[1],
				len = g[2],
				Y2 = g.p ? Y + len
						: g.n ? Y - len
						: len
		return x.ln(X, Y, X, Y2)
	}
	curves();
	drawLine();
	function curves() {
		el.arc = function (a, b, c, d, e, f, g) {
			el.context.arc(a, b, c, d, e, f, g)
			return el
		}
		el.arcTo = el.a2 = function a2(X) {
			var g = G(arguments)
			if (A(X)) {
				return _a(a2(x), X)
			}
			this.arcTox([0] || 50, g[1] || 40, g[2] || 100, g[3] || 100, g[4] || 30)
			this.stroke()
			return this
		}
		el.bezierCurveTo = function (a, b, c, d, e, f, g) {
			this.context.quadraticCurveTo(a, b, c, d, e, f, g)
			return this
		}
		el.quadraticCurveTo = function (a, b, c, d, e, f, g) {
			this.context.quadraticCurveTo(a, b, c, d, e, f, g)
			return el
		}
		el.curveTo = function (a, b, c, d, e, f, g) {
			if (N(e)) {
				return this.bezierCurveTo(a, b, c, d, e, f)
			}
			else return this.quadraticCurveTo(a, b, c, d, e, f, g)
		}
		el.cir = function (X, Y, R, fs, ss) {
			var g = G(arguments),
					X = g[0] || 200, Y = g[1] || 200, r = g[2] || 1,
					fs = g[3],
					ss = g[4]
			el.bP()
			el.arc(X, Y, r, 0, 7, false)
			el.fS(fs)
			el.sS(ss)
			el.s().f()
			return el
		}
	}
	
	function drawLine() {
		//draw line ( [x,y],[x,y] || x,y,x,y )
		//draw multiple unconnected lines ( [[],[]],[[],[]] || [],[] )
		//fresh start
		el.ln = el.line = function rc(p) {
			var args = G(arguments), p = args[0]
			if (N(args[0])) {
				el.begin(args[0], args[1])
				el.lineTo(args[2], args[3])
				el.stroke()
				return el
			}
			if (A(args[0]) && N(args[0][0])) {
				el.begin(args.f)
				_.e(args.r, function (p) {
					el.lineTo(p[0], p[1])
				})
				el.stroke()
				return el
			}
			if (AA(p)) {
				_.e(args,
						function (p) {
							el.line.apply(null, p)
						})
			}
			el.stroke()
			return el
		}
		el.fitEx = function () {
			this.ln([0, 0], [this.W(), this.H()], [0, this.W()], [this.H(), 0])
		}
		el.sun = function (a, b, s) {
			s = s || 1;
			this.rG([[a || 0, b || a || 0],
						s * 100, s * 500],
					{'y': 0, 1: tCl('p', 0)},
					600, 600)
		}
		el.ball = function (b) {
			b = b || {}
			var dir = b.d || false,
					px = b.x || 100, py = b.y || 100, rad = b.r || 100,
					per = b.p || Math.PI * 2,
					ss = $r('c', b.s),
					fs = $r('c', b.f),
					lw = D(b.l) ? b.l : 4
			return x.com(
					'b', ['a', px, py, rad, 0, per, dir],
					{f: fs, s: ss, w: lw}, 'f', 's')
		}
		el.pointInPath = el.pip = function (c, a, b) {
			return this.context.isPointInPath(a, b)
		}
		el.paperBag = function (x, y, width, height, blowX, blowY) {
			x = x || 100
			y = y || 100
			width = width || 100
			height = height || 100
			blowX = blowX || 100
			blowY = blowY || 100
			var lx, ly;
			this.beginPath();
			this.moveTo(x, y);
			this.quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
			this.quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
			this.quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
			this.quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);
			return this
		}
	}
	
	return el
}
superCanvasDraw = function (el) {
	mug();
	drawImage();
	crop();
	scaleIm()
	function drawImage() {
		//this just a simple proxy to drawImage // dont use?
		el.drawImage = el.dI = function () {
			var el = this, g = G(arguments)
			g[1] = N(g[1]) ? g[1] : 0
			g[2] = N(g[2]) ? g[2] : 0
			$(el)[0].getContext('2d').drawImage.apply(
					$(el)[0].getContext('2d'), g
			)
		}
		//this will create the image (from string), and then draw it
		el.dr = el.draw = function () {
			$l('el.dr')
			var el = this, g = G(arguments)
			$.i(g.f, function (i) {
				g[0] = i
				__g = g
				el.dI.apply(el, g)
			})
		}
		el.fit = function f(i, x, y) {
			var el = this//$l('fit: - el.W():' + el.W())
			i = i || 'me'
			x = x || 0
			y = y || 0
			el.draw(i, x, y, el.W(), el.H())
			//el.draw(img, X, Y, el.width(), el.height())
			return el
		}
		el.dC = function f(i, x, y) {
			var that = this
			i = i || 'me'
			x = x || 100
			y = y || 100
			if (U(x)) {//draw img in center of can
				$.img(i, function (i) {
					that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
				})
			}
			else {//draw it by specifying location of its center
				y = y || x
				$.img(i, function (i) {
					that.draw(i, x - i.W() / 2, y - i.H() / 2)
				})
			}
			return this
		}
		//draw it where u say, but as if its reg point was its center
		el.drawRegCenter = el.dC2 = function f(i, x, y) {
			var that = this
			$.img(i, function (i) {
				that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
			})
			return this
		}
		el.Cd = function (a, x, y) {
			var that = this
			a = a || 'me'
			x = x || 100
			y = y || 100
			$.img(a,
					function (img) {
						that.drawImage(
								img.src,
								x - img.W() / 2,
								y - img.H() / 2
						)
					})
		}
	}
	
	function mug() {
		el.drawMug = el.me = function me(interval) {
			//randomly draw my face
			var that = this, g = G(arguments), args = g,
					interval = args[0] || 200
			if (that.drawMug.shouldDrawId) {
				clearInterval(that.drawMug.shouldDrawId)
				that.drawMug.shouldDrawId = false
			}
			else {
				that.drawMug.shouldDrawId = setInterval(function () {
					that.draw(window['mug'] || 'me', _.random(that.W() - 200), _.random(that.W() - 200))
				}, interval)
			}
			return this
		}
		el.drawMug.shouldDrawId = false
		el.fitMug = el.mug = function (user) {
			var that = this
			$.post('/mug', {u: user}, function (userMug) {
				that.fit(userMug)
			})
			return this
		}
	}
	
	function crop() {
		el.crop = function rc(x1, y1, x2, y2) {
			var el = this
			if (A(x1)) {
				return rc(x1[0], x1[1], x1[2] - x1[0], x1[3] - x1[1])
			}
			el.draw(
					el[0].toDataURL(),
					x1, y1, x2, y2,
					0, 0, this.W(), this.H()
			)
			return this
		}
		el.crop = function rc(x1, y1, x2, y2) {
			if (A(x1)) {
				return rc(
						x1[0], x1[1],
						x1[2] - x1[0],
						x1[3] - x1[1]
				)
			}
			this.context.drawImage(x, x1, y1, x2, y2, 0, 0, this.W(), this.H())
			return this
		}
	}
	
	function scaleIm() {
		el.scaleImCen = function (img, s) {
			var w = this.W(), h = this.H(), s = s || 1
			this.draw(img,
					w * s / -2 + w / 2,
					h * s / -2 + h / 2//+ w/2
					,
					w * s,
					h * s)
		}
		el.scaleImCenSpiralMe = function () {
			var scaleNum = 1,
					that = this
			_.times(100, function () {
				that.scaleImCen('me', scaleNum)
				scaleNum *= .9
			})
		}
		el.scaleImCenSpiral = function () {
			var scaleNum = 1,
					that = this
			_.times(100, function () {
				that.scaleImCen('me', scaleNum)
				scaleNum *= .9
			})
		}
	}
	
	return this
}
