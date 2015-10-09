$load(
    'globalComp', 'dimTrans', 'drawImage', 'colGrads',
     'ctxText','saveRestorePixel','lineProps','arcc','rectt',
     'drawText','drawPath'
)

x.jD = function (img, p1, p2, p3, p4) {
	var x = this,
			i = new Image
	$(i).load(function (i) {
		D(p4) ? x.drawImage(i.target, p1, p2, p3, p4) :
				D(p3) ? x.drawImage(i.target, p1, p2, p3, p3) :
						x.drawImage(i.target, p1 || 0, p2 || 0)
	})
	i.src = _.src(img)
	return i
}
x.cv = function () {
	return this.canvas
}
x.u = function () {
	return this.cv().toDataURL()
}
x._d = function (i, p2, p3, p4, p5) {
    var g = G(arguments), o
    var x = this
    if (g.S_ && g.f.length < 10000) {
        if (O(window['Q'])) {
            g[0] = Q.i(g[0])
        }
        else {
            return $.i(g[0], function (e, i) {
                $l('in $.i in x._d')
                x._d(i[0], p2, p3, p4, p5)
            })
        }
    }
    if (g[0] == this) {
        g[0] = g[0].cv()
    }
    g[1] = N(g[1], 0)
    g[2] = N(g[2], 0)
    this.drawImage.apply(this, g)
    return this
}
x.d = function (i,p2,p3,p4,p5) {
    var g = G(arguments), o
    o = {i: g.f, x: g.s, y: g.t}
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    if (O(o.i)) {
        this.drawImage($(o.i)[0], o.x, o.y)
        return this
    }
    if (S(o.i)) {
        if (O(window['Q'])) {
            o.i = Q.i(o.i)
        }
        else {
          
          $.i(g[0], function (e, i) {
                $l('in $.i in x._d')
                x._d(i[0], p2, p3, p4, p5)
            })
        
        return this
        }
    }
    if (o.i.width) {
        o.x = o.x - o.i.width / 2
        o.y = o.y - o.i.height / 2
    }
    this._d(o.i, o.x, o.y)
}
x.dC = function f(i, x, y) {
    var that = this
    i = i || 'me'
    x = x || 100
    y = y || 100
    if (U(x)) {//draw img in center of can
        $.i(i, function (i) {
            that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
        })
    }
    else {//draw it by specifying location of its center
        y = y || x
        $.i(i, function (i) {
            that.dr(i, x - i.W() / 2, y - i.H() / 2)
        })
    }
    return this
} //draw it where u say, but as if its reg point was its center
x.drawRegCenter = function f(i, x, y) {
    var that = this
    $.i(i, function (e,i) {
        that.draw(i[0], 
        (that.W() / 2) - (i.W() / 2),
         (that.H() / 2) - (i.H() / 2))
    })
    return this
}
x.fit = function f(i, x, y) {
    i = i || 'me'
    x = N(x, 0)
    y = N(y, 0)
    this.d(i, x, y, this.W(), this.H())
    return cv
}
x.W=function(){
return this.cv().width}
x.H=function(){
return this.cv().height}
x.cr = function (x1, y1, x2, y2) {
    var ctx = this,
    cv=ctx.cv(),
    i = this.u()
    
    if (A(x1)) {
        return this.crop(
            x1[0], x1[1], x1[2] - x1[0], x1[3] - x1[1]
        )
    }
    this.d(i, x1, y1, x2, y2, 0, 0, $(cv).W(),$(cv).H())
    return cv
}

function dimTrans() {
	x.H = function () {
		return this.canvas.height
	}
	x.W = function () {
		return this.canvas.width
	}
	x.Z = function () {
		this.scale.apply(this, arguments)
		return this
	}
	x.tl = function (tX, tY, rt, sX, sY) {// this.translate.apply(this, arguments)
		this.translate(tX, tY)
		if (N(rt)) {
			this.rt(rt)
		}
		if (N(sX)) {
			this.sc(sX, sY)
		}
		return this
	}
	x.sc = function (x, y) {
		y = N(y, x)
		this.scale(x, y);
		return this
	}
	x.sX = function (x) {
		return this.sc(x, 1)
	}
	x.sY = function (y) {
		return this.sc(1, y)
	}
	x.rt = function (n) {
		this.rotate(M.tR(n));
		return this
	}
	x.tf = function () {
		this.transform.apply(this, arguments)
		return this
	}
	x.sT = x.sTf = function () {
		this.setTransform.apply(this, arguments)
		return this
	}
}
function saveRestorePixel() {
	x.S = function () {
		this.save();
		return this
	}
	x.R = function () {
		this.restore();
		return this
	}
	x._ = x.temp = function (fn) {
		this.S();
		_.b(fn, this)();
		return this.R()
	}
	x.cD = function () {
		this.createImageData()
		return this
	}
	x.gD = function () {
		var g = G(arguments), o, d
		o = {x: g.f, y: g.s, w: g.t, h: g[3]}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		d = this.getImageData(o.x, o.y, o.w, o.h)
		d.h = d.height
		d.w = d.width
		d.d = d.data
		return d
	}
	x.pD = function (d, x, y) {
		this.putImageData(d, N(x, 0), N(y, 0))
		return this
	}
}


function globalComp() {
	globalCompOp = x.o = x.op = x.cO = function (o) {
		this.globalCompositeOperation = o;
		return this
	}
	x.Ds = x.dO = function () {
		this.o('destination-out');
		return this
	}
	x.dS = x.dI = function () {
		return this.o('destination-in')
	}
	x.sD = x.sI = function () {
		this.o('source-in');
		return this
	}
	x.Sd = x.sO = function () {
		this.o('source-out');
		return this
	} // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
	x.ds = x.dV = function () {
		this.o('destination-over');
		return this
	}
	x.SD = x.sT = x.sA = function () {
		this.o('source-atop');
		return this
	}
	x.DS = x.dT = x.dA = function () {
		this.o('destination-atop');
		return this
	}
	x.li = function () {
		this.o('lighter');
		return this
	}
	x.co = function () {
		this.o('copy');
		return this
	}
	x.xo = function () {
		this.o('xor');
		return this
	}
};

function drawText() {
	x.F = function () {
		var g = G(arguments), o
		o = {f: g.f}
		if (g.N_) {
			o.f += 'px ' + (g.n ? 'Verdana' : 'Georgia')
		}
		this.font = o.f
		return this
	}
	x.ft = x.fT = function (x, y, t) {
		var g = G(arguments)
		if (g.N_) {
			this.fillText(g.t, g.f, g.s)
		}
		else {
			this.fillText(g.t, x.W() / 2, 200)
		}
	}
	x.mL = function () {
	} //x.T( ['r'],  [20 | '20px verdana], 'afsdsafd', [x, y] )
	x.t = x.T = function () {
		var g = G(arguments), x = this, o, t
		o = g.S ? {t: g.f, x: g.t, y: g[3]} : // ONLY a str (so not to be confused with color)
				S(g.t) ? {c: g.f, f: g.s, t: g.t, x: g[3], y: g[4]} :
						g.N_ ? {f: g.f, t: g.s, x: g.t, y: g[3]} :
								S(g.s) ? {c: g.f, t: g.s, x: g.t, y: g[3]} :
								{t: g.f, x: g.s, y: g.t}
		o.x = N(o.x, x.W() / 2)
		o.y = N(o.y, 200)
		if (o.c) {
			x.c(o.c, o.c)
		}
		if (o.f) {
			g.n ?
					x.F(o.f, '-') :
					x.F(o.f)
		}
		x.fillText(o.t, o.x, o.y)
		return x
	}
	x.tA = function () {
	}
	x.tB = x.Bl = function () {
	}
}
function toTick() {
	x.cjsTick = x.tick = function (func) {
		var x = this
		cjs.tick(function () {
			x.temp(func)
		})
		return this
	}
	tempDrawOnTickerTick = x.t = function (fn) {
		var x = this;
		T.t(function () {
			x.temp(fn)
		});
		return this
	}
}
function shadow(){

x.shC = function (c) {
    this.shadowColor = oO('c', c)
    return this
}
x.shX = function (c) {
    this.shadowOffsetX = c
    return this
}
x.shY = function (c) {
    this.shadowOffsetY = c
    return this
}
x.shB = function (c) {
    this.shadowBlur = c
    return this
}
}
function preloads() {
	x.Cd = function (i, x, y) {
		var ctx = this
		x = N(x, 100)
		y = N(y, 100)
		i = Q.i(i || 'me')
		ctx.d(i, x - i.W() / 2, y - i.H() / 2)
		return ctx
	}
	x.scImCen = function (i, s, x, y) {
		if (S(i) && i.length < 100) {
			i = Q.i(i)
		}
		x = N(x, 0)
		y = N(y, 0)
		var w = this.W(),
				h = this.H(),
				s = s || 1
		this.d(i, w * s / -2 + w / 2, h * s / -2 + h / 2, w * s, h * s)
	}
	x.scaleImCenSpiralMe = function () {
		var scaleNum = 1,
				that = this
		_.t(100, function () {
			that.scaleImCen('me', scaleNum)
			scaleNum *= .9
		})
	}
	x.scaleImCenSpiral = function () {
		var scaleNum = 1, that = this
		_.t(100, function () {
			that.scaleImCen('me', scaleNum)
			scaleNum *= .9
		})
	}
}
function _pre() {
	x = ctx = CanvasRenderingContext2D.prototype
	xGr = CanvasGradient.prototype
	$.fn.ctx = function () {
		return this[0].getContext('2d')
	}
}
old = function () {
	x.$ = function () {
		return $(this.cv())
	}
	x.D = function () {
		return this.s().f()
	}
}

