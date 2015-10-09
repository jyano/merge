$.tEl=function(a,b,c){
    if(O(a)){
        a=O(a.e)?a.e:O(a.c)?a.c:a
        a=$(a)[0]
        if(_.isElement(a)){
            return a
        }
    }
}
$.tC=$.tCan=function(a){
    if(_.isObject(a=$.tEl(a)||a)){
        return a.canvas?a.canvas:
            s$(a.toString()).contains('Canvas')?Q(a)[0]:0
    }
}
$.iC=$.isCan=function(can){
    if(O(can)){
        return $(can)[0].constructor.name=="HTMLCanvasElement"
    }
}
$.fit=function(a,b,c){
    return $.c(c||'r',b||700,b||700).A()
    .fit(a||'me')
}
$.c=$.can=function(c,width,h,x,y){
    var g=G(arguments),o,el
    o=g.S_?
    {c:g.f,w:g.s,h:g.t,x:g[3],y:g[4]}:
    {w:g.f,h:g.s,x:g.t,y:g[3]}
    o.w=o.w||1200
    o.h=o.h||600
    o.c=o.c||'x'
    el=$('<canvas>')
    el.attr({width:o.w,height:o.h})
    el.C(o.c)
    if(N(o.x)){
        el.abs(o.x,o.y)
    }
    if(g.p){
        el.drag()
    }
    el.A().al(.8)
    
    return superCanvas(el)
 
}
$.fn.Cv = $.fn.Can = function () {
	var c
	c = $.c.apply($, G(arguments))
	this.A(c)
	return c
}
function superCanvas(el) {
    el = $(el)
    //to be called internally by $.c //works on FIRST canvas in jquery obj
    el.canvas = el[0]
    el.context = el.canvas.getContext('2d')
    if (O(window['cjs'])) {
        el.stage = new cjs.Stage(el.canvas) ///////////////////////////////
    }
    _superCanvas(el)
    return el

}
function _superCanvas(el) {
   
   el.cx=function(){
   return this[0].getContext('2d') 
   }
   
   
    el.W = function (width) {
        var args = G(arguments)
        width = args[0]
        if (U(width)) {
            return this.attr('width')
        }
        if (args.N) {
            var dataUrl = this.toDataURL()
        }
        this.attr('width', width)
        if (args.N) {
            this.fit(dataUrl)
        }
        return this
    }
    el.H = function (height) {
        var args = G(arguments)
        height = args[0]
        if (U(height)) {
            return this.attr('height')
        }
        if (args.N) {
            var dataUrl = this.toDataURL()
        }
        this.attr('height', height)
        if (args.N) {
            this.fit(dataUrl)
        }
        return this
    }
    el.WH = function (w, h) {
        if (U(w)) {
            var width = this.W(),
                height = this.H()
            return {
                width: width, w: width,
                height: height, h: height
            }
        }
        h = h || w
        return this.W(w).H(h)
    }
    el.Z = function (d) {
        d = d || 5;
        return this.WH(d * 100, d * 100)
    }
    el.osL=el.offsetLeft = el.l = function (theOffset) {
        if (!theOffset) {
            return offsetLeft(x.q)
        }
        return parseInt(theOffset - x.offsetLeft())
    };
    //  el.ox=function(){return x.q.q.offset().left}
    el.osT= el.offsetTop = el.t = function (y) {
        if (!y) {
            return offsetTop(y.q)
        }
        ;
        return parseInt(y - x.offsetTop())
    };
    //  el.oy=function(){return x.q.q.offset().top}
    el.cp=el.copy = function () {
        el.img.src(el.toDataURL())
        return el
    }
    el.ps=el.paste = function () {
        var g = G(arguments)
        if (g.N) {
            el.clearRect()
        }
        if (g.p) {
            el.fit(el.img)
        }
        else {
            el.draw(el.img.src())
        }
    }
    el.S=el.save = function () {
        el.context.save()
        return el
    }
    el.R=el.restore = function () {
        el.context.restore()
        return el
    }
    //dont mix up with element/jquery alpha
    //maybe opacity for element and alpha for canvas?
    el.al= el.globalAlpha = el.alpha = el.op = function (alpha) {
        if (U(alpha)) {
            return this.context.globalAlpha
        }
        this.context.globalAlpha = alpha
        return this
    }
    el.comp = el.globalCompositionOperation = el.gc = function (compOp) {
        if (U(compOp)) {
            return this.context.globalCompositeOperation
        }
        this.context.globalCompositeOperation = oO('g', compOp)
        return this
    }
    //normal prop (as methods)
    el.lW=el.lineWidth = function (w) {
        if (U(w)) {
            return el.context.lineWidth
        }
        el.context.lineWidth = w
        return el
    }
    el.lC=el.lineCap = function (w) {
        if (U(w)) {
            return el.context.lineCap
        }
        el.context.lineCap = w
        return el
    }
    el.lJ=el.lineJoin = function (w) {
        if (U(w)) {
            return el.context.lineJoin
        }
        el.context.lineJoin = w
        return el
    }
    el.URL = el.dataURL = el.toDataURL = function () {
        return el.canvas.toDataURL()
    }
    //wap specific
    el.snap = function (func) {
        pams = {
            d: el.toDataURL(),
            dats: el.dats
        }
        $.post('/img', pams, func)
    }
    el.img = $.img()
    el.img.src(el.toDataURL())
    el.dots = function () {
        el.copy()
        el.DOTS = []
        el.dats = []
        el.$(function (x, y) {
            x = parseInt(x)
            y = parseInt(y)
            el.cir(x, y)
            el.DOTS.push([x, y])
            el.dats.push(x)
            el.dats.push(y)
            el.line(el.DOTS)
        })
        
        el.$$(function (X, Y) {
            var du
            //el.C('X')
            el.off('click')
            el.closePath()  //el.paste() // el.copy()  //el.save()
            el.clear() //du = el.toDataURL()
            el.clip()
            el.paste() //el.fit(du)
        })
        return el
    }
    
    
    el.me = function me(n) {//randomly draw my face
        var g = G(arguments), n = g[0] || 200
        if (x.me.d) {
            clearInterval(x.me.d);
            x.me.d = false
        }
        else {
            x.me.d = I(function () {
                x.d($w['mug'] || 'me', _r(x.w() - 200), _r(x.w() - 200))
            }, n)
        }
        return x
    }
    el.me.shouldDrawMeId = false
    el.mugX = function (m) {
        qP('/mug', {u: m}, function (m) {
            x.fit(m)
        })
        return x
    }
    el.tick = function () {
        var ctx = this.ctx()
        ctx.tick.apply(ctx, arguments)
        return this
    }
    el.URL = el.dataURL = el.toDataURL = function () {
        return el.canvas.toDataURL()
    }
    superCanvasDraw(el)
    superCanvasGradient(el)
    superCanvasPixels(el)
    superCanvasText(el)
    superCanvasTransform(el)
    superCanvasPath(el)
    superCanvasEvents(el)
    superCanvasShadow(el)
    cv = el
    cv.drawMug = cv.me = function me(interval) {
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
    cv.drawMug.shouldDrawId = false
    cv.fitMug = cv.mug = function (user) {
        var that = this
        $.post('/mug', {u: user}, function (userMug) {
            that.fit(userMug)
        })
        return this
    }
    cv.sun = function (a, b, s) {
        s = s || 1;
        this.rG(
            [[a || 0, b || a || 0], s * 100, s * 500],
            {'y': 0, 1: tCl('p', 0)},
            600,
            600
        )
    }
    cv.ball = function (b) {
        b = b || {}
        var dir = b.d || false,
            px = b.x || 100, py = b.y || 100, rad = b.r || 100,
            per = b.p || Math.PI * 2,
            ss = $r('c', b.s),
            fs = $r('c', b.f),
            lw = D(b.l) ? b.l : 4
        return x.com('b', ['a', px, py, rad, 0, per, dir], {f: fs, s: ss, w: lw}, 'f', 's')
    }
    cv.paperBag = function (x, y, width, height, blowX, blowY) {
        x = x || 100
        y = y || 100
        width = width || 100
        height = height || 100
        blowX = blowX || 100
        blowY = blowY || 100
        var lx, ly;
        this.ctx().strokeStyle = 'Red'
        this.ctx().beginPath();
        this.ctx().moveTo(x, y);
        this.ctx().quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
        this.ctx().quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
        this.ctx().quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
        this.ctx().quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);
        return this
    }
    return el
}
function superCanvasPixels(el) {
	el.gD = el.getData = function (x, y, w, h) {
		//historic.. dont delete ! data = x('G', X, Y, w, h).res
		var g = G(arguments),
				x = g[0] || 0,
				y = g[1] || 0,
				w = g[2] || this.W(),
				h = g[3] || this.H(),
				data = this.context.getImageData(x, y, w, h)
		// data.h = data.height
		// data.w = data.width
		// data.d = data.data
		return data
	}
	el.pD = el.putData = function (data, x, y) {
		x = x || 0
		y = y || 0
		this.context.putImageData(data, x, y)
		return this
	}
	el.gP = el.getPut = function (a, x, y) {
		var g = G(arguments),
				a = g[0],
				x = g[1],
				y = g[2],
				data = this.gD.apply(this.context, a)
		if (g.n) {
			this.clear()
		}
		return x.pD(data, x, y)
	}
	el.pixelsNegative = function () {
		var imgData = this.gD(),  //gD(0,0, this.W(), this.H())
				data = imgData.data
		for (var i = 0; i < data.length; i += 4) {
			data[i] = 255 - data[i];
			data[i + 1] = 255 - data[i + 1]
			data[i + 2] = 255 - data[i + 2]
			data[i + 3] = 255
		}
		this.pD(imgData) //  this.pD(data,0,0)
	}
	el.pixelsInvert = function () {
		var imgData = this.gD(),
				data = imgData.data
		for (var i = 0; i < data.length; i += 4) {
			data[i] = 225 - data[i];
			data[i + 1] = 225 - data[i + 1]
			data[i + 2] = 225 - data[i + 2]
		}
		this.pD(imgData)
	}
	el.pixelsGrayscale = function () {
		var imgData = this.gD(),
				data = imgData.data
		for (var i = 0; i < data.length; i += 4) {
			var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
			data[i] = avg
			data[i + 1] = avg
			data[i + 2] = avg
		}
		this.pD(imgData) //  this.pD(data,0,0)
	}
	el.pixelsFade = function () {
		var imgData = this.gD(),
				data = imgData.data
		for (var i = 7; i < _.size(data); i += 4) {
			data[i] = 90
		}
		this.pD(imgData)
		return el
	}
}
function superCanvasTransform(el) {
	//give scale cos(rads), skew:sin(rads)  ??
	el.norm = function () {
		el.context.scale(this.W() / 10, this.H() / 10)
		return this
	}
	el.scale = el.sc = function (X, Y) {
		var g = G(arguments),
				X = g[0] || 1, Y = g[1] || X
		x.x.scale(X, Y)
	}
	el.translate = el.tr = function (X, Y) {
		var g = G(arguments),
				X = g[0] || 1, Y = g[1] || X
		x.x.translate(X, Y)
	}
	el.rotate = el.rt = function (r) {
		var g = G(arguments),
				r = g[0] || 1
		//r=pi(-6)*r
		//x.fr(0,0,1,1)
		//x({f:$r('c')
		x.x.rotate(r)
	}
	el.transform = el.tf = function rc(a, c, e, b, d, f) {
		var g = G(arguments)
		if (g.p) {
			return rc(2, 0, 0, 2, 0, 0)
		}
		return x('t', a, c, e, b, d, f)
	}
	el.setTransform = el.stf = function rc(a, c, e, b, d, f) {
		var g = G(arguments)
		if (g.p) {
			return rc(2, 0, 0, 2, 0, 0)
		}
		return x('st', a, c, e, b, d, f)
	}
	return el
}
function superCanvasText(el) {
	el.font = function (font) {
		this.context.font = HTML5.font(font)
		return this
	}
	el.strokeText = function (t, X, Y) {
		var g = G(arguments),
				t = g[0],
				X = g[1] || 100,
				Y = g[2] || X
		this.context.strokeText(t, X, Y)
		return this
	}
	el.fillText = function (t, X, Y) {
		var g = G(arguments),
				t = g[0],
				X = g[1] || 100,
				Y = g[2] || X
		if (g.p) {
			this.tx(t, X, Y, '-')
			this.tx(t, X, Y)
		}
		else this.context.fillText(t, X, Y)
		return this
	}
	el.measureText = el.measure = function (t) {
		return this.context.measureText(t)
	}
	el.textWidth = function (t) {
		return parseInt(this.measureText(t).width)
	}
	el.centerHorizontalText = function (text, height) {
		this.fillText(text,
				this.W() / 2 - this.textWidth(text) / 2,
				height
		)
		return this
	}
}
function superCanvasEvents(el){

    el.$ = function (func) {
        el.click(function (e) {
            func(e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
    el.$$ = function (func) {
        el.dblclick(function (e) {
            func(e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
    el.over = el.MV = function (func) {
        el.mouseover(function (e) {
            func(e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
    el.out = el.MO = function (func) {
        el.mouseout(function (e) {
            func(e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
    el.enter = el.ME = function (func) {
        el.mouseenter(function (e) {
            func(e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
    el.leave = el.ML = function (func) {
        el.mouseleave(function (e) {
            func(e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
    el.up = el.MU = function (func) {
        el.mouseup(function (e) {
            func(e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
    el.move = el.MM = function (func) {
        el.mousemove(function (e) {
            func(e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
    el.down = el.MD = function (func) {
        el.mousedown(function (e) {
            func(e.pageX - $(this).offset().left,
                e.pageY - $(this).offset().top)
        })
    }
}
function superCanvasShadow(el){
    
 el.shC=  el.shdC = el.shadowColor = function (color) {
        if (U(color)) {
            return this.context.shadowColor
        }
        this.context.shadowColor = oO('c', color)
        return this
    }
el.shB=    el.shdB=  el.shadowBlur = function (blurNumber) {
        if (U(blurNumber)) {
            return this.context.shadowBlur
        }
        this.context.shadowBlur = blurNumber
        return this
    }
 el.shX=  el.shdX=   el.shadowOffsetX = function (offsetX) {
        if (U(offsetX)) {
            return this.context.shadowOffsetX
        }
        this.context.shadowOffsetX = offsetX
        return this
    }
  el.shY=  el.shdY=   el.shadowOffsetY = function (offsetY) {
        if (U(offsetY)) {
            return this.context.shadowOffsetY
        }
        this.context.shadowOffsetY = offsetY
        return this
    }
    el.shd=  el.shadow = function (color, x, y, num) {
        el.shadowColor(color)
        el.shadowOffsetX(x).shadowOffsetY(y)
        el.shadowBlur(num)
        return el
    }
}

 