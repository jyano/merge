drawHalf = function (c, i) {
    alert('drawHalf')
    c.dI(i, -i.width / 2, -i.h / 2)
}
l('canvas');
rad = function (deg) {
    var rads = deg * (Math.PI / 180);
    return rads
}
TenArr = function () {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
getCtx = function (id) {
    return $('#' + id).get(0).getContext('2d')
}
wh = function (i) {
    i.w = i.width;
    i.h = i.height;
    return i
}
miniCtx = function (C) {
    C.T = C.translate;
    C.R = C.rotate;
    C.S = C.scale;
    C.D = C.drawImage;
    C.cid = C.createImageData;
    C.gid = C.getImageData;
    C.pid = C.putImageData;
    C.w = C.canvas.width;
    C.h = C.canvas.height;
    C.l = $(C.canvas).offset().left;
    C.t = $(C.canvas).offset().top;
    C.mx = function (x) {
        return parseInt(x - this.l)
    }
    C.my = function (y) {
        return parseInt(y - this.t + pageYOffset)
    }
    return C
}
getCtxMini = function (name, id) {
    w[name] = miniCtx(getCtx(id));
}
CTX = function (id) {
    window[id] = miniCtx(getCtx(id));
}
//  #{id}.w = #{id}.canvas.width ; #{id}.h = #{id}.canvas.height
setStyles = function (C, fillStyle, strokeStyle, lineWidth) {
    C.strokeStyle = strokeStyle;
    C.fillStyle = fillStyle;
    C.lineWidth = lineWidth;
}
circ = function (ctx, x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
}
drawPoint = function (x, y) {
}
replacePic = function (a, b) {
    a.parentNode.replaceChild(a, b)
}
replaceFirstWithSecond = function () {
    a = document.getElementsByTagName('img')[0];
    b = document.getElementsByTagName('img')[1];
    switchPics(a, b)
}  //document.location.href
im = function () {
    return new Image()
}  //imgSrc = function(img, src){img.src = src}   //setSRC = function(src,img){ if (src) { if (img){SRC(img,src)} else {SRC()}   }}
imLoaded = function (img, fn) {
    img.addEventListener('load', fn);
    return img
}
setPNGSource = function (img, png) {
    img.src = '/' + png + '.png';
    return img
}
pngLoaded = function (png, fxn) {
    return setPNGSource(imLoaded(im(), fxn), png)
}
plopPng = function (name, png) {
    w[name] = pngLoaded(png);
}
PNG = function (img) {
    plopPng(img, img)
}
// empty canvas
CLR = clearCanvas = function (ctx) {
    ctx.clearRect(0, 0, ctx.w, ctx.h)
}
reset = resetCanvas = function (c) {
    c.canvas.width = c.canvas.width
}
// draw img on canvas
simpleDraw = function (ctx, img) {
    ctx.drawImage(img, 0, 0)
};
draw300 = function (ctx, pic) {
    ctx.drawImage(pic, 0, 0, 300, 300, 0, 0, 300, 300)
}
imgInCv = function (src, ctx) {
    var img = im();
    var ctx = getCtx(ctx);
    $(img).load(function () {
        ctx.canvas.height = img.height;
        ctx.canvas.width = img.width;
        ctx.drawImage(img, 0, 0)
    });
    img.src = src
}
imgOnCv = function (img, ctx) {
    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
} // Draw 1
imgDraw = function (img, ctx) {
    return function (sx, sy, sw, sh, dx, dy, dw, dh) {
        ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
    }
}
sImgDraw = function (src, ctx) {
    src.apply(imgDraw, ctx)
} // ?
imgCan = function (ctx, src) {
    img = im();
    $(img).load(function () {
        ctx.drawImage(img, 0, 0, ctx.w, ctx.h)
    });
    img.src = src;
    return img
}
pathToSrc = function (path) {
    return "http://localhost:4000/" + path
}
DataFactory = function (i, c) {
    var d = {};
    i.w = i.width;
    i.h = i.h;
    d.tw = function (i, c, p) {
        return [0, 0, i.w, i.h, 0, 0, 200, 200]
    }
    d.actual = function (i, c, p) {
        return [0, 0, i.w, i.h, 0, 0, i.w, i.h]
    }
    d.most = function (i, c, p) {
        return [0, 0, i.w, i.h, 0, 0, i.w * .8, i.h * .8]
    }
    d.half = function (i, c, p) {
        return [0, 0, i.w / 2, i.h / 2, 0, 0, i.w / 2, i.h / 2]
    }
    d.big = function (i, c, p) {
        return [0, 0, i.w, i.h, 0, 0, i.w * 2, i.h * 2]
    }
    d.fit = function (i, c, p) {
        return [0, 0, i.w, i.h, 0, 0, px.c.w, px.c.h]
    }
    d.bord = function (i, c, p) {
        return [0, 0, i.w, i.h, 0 + (.5 * p), 0 + (.5 * p), c.c.w - p, c.c.h - p]
    }
    return function (style, option) {
        return d[style](i, c, option)
    }
}
drawIm = function (ctx) {
    var C = miniCtx(ctx);
    var i = wh(im());
    $(i).load(function () {
        l('i.ld');
        simpleDraw(C, i);
        BUTTONS({
            flipX: function () {
                C.T(((i.w + 1) * (-1)), ((-i.h + 1) * (-1)));
                C.R(Math.PI);
                D();
            },
            flipY: function () {
                C.R(Math.PI / 32);
                D();
            },
            moveUp: function () {
                C.T(0, -50);
                D();
            },
            moveDown: function () {
                C.T(0, 50);
                D();
            },
            moveLeft: function () {
                C.T(-50, 0);
                D();
            },
            moveRight: function () {
                C.T(50, 0);
                D();
            },
            rotateC: function () {
                C.R(rad(10));
                D();
            },
            rotateCC: function () {
                C.R(-(rad(10)));
                D();
            },
            smaller: function () {
                C.S(.9, .9);
                C.D(i, 100, 100, i.w, i.h);
            },
            bigger: function () {
                C.S(1.3, 1.3);
                C.D(i, 0, 0, i.w, i.h)
            }
        })
    })
}
drawForMe = function (img, ctx, dx, dy) {
    var C = miniCtx(ctx);
    var i = wh(img);
    return function (t) {
        switch (t) {
            case 'fl':
                C.D(i, 0, 0, i.w, i.h, dx, dy, i.w, i.h);
                break;
            case 'tp':
                C.D(i, 0, 0, i.w, i.h / 2, dx, dy, i.w, i.h / 2);
                break;
            case 'bt':
                C.D(i, 0, i.h / 2, i.w, i.h, dx, dy, i.w, i.h / 2);
                break;
            case 'lf':
                C.D(i, 0, 0, i.w / 2, i.h, dx, dy, i.w / 2, i.h);
                break;
            case 'rt':
                C.D(i, i.w / 2, 0, i.w / 2, i.h, dx, dy, i.w / 2, i.h);
                break;
        }
    }
}
DRAW = function (i, c, dx, dy) {
    return function (Sx, Sy, Sw, Sh, Dw, Dh) {
        c.drawImage(i, Sx, Sy, Sw, Sh, dx, dy, Dw, Dh)
    }
}// draw = DRAW(i, c, dx, dy) //d =  function(){draw(sx,sy,sw,sh,dw,dh)}
draw = function (img, ctx) {//source
    return function (sw, sh) {
        var sw = sw;
        var sh = sh;// sourceArea
        return function (sx, sy) {
            var sx = sx;
            var sy = sy;//sourceSelection
            return function (dw, dh) {
                var dw = dw;
                var dh = dh; //stamp
                return function (dx, dy) { //Stamp
                    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
                }
            }
        }
    }
}
stamp = function (img, ctx) {
    return draw(img, ctx)(img.width, img.height)(0, 0)(img.width, img.height)
}
STA = function (img, ctx, n) {
    var img = img;
    var ctx = ctx;
    var n = n;
    return function (x, y) {
        draw(img, ctx)(n * 100, n * 100)(0, 0)(n * 100, n * 100)(x, y)
    }
}
//s1 = stamp(chicks,c);s2 = stamp(chicks,cc);  // sta = "s1(0,0)"; st = f(sta)
Draw2 = function (img, ctx) {
    var sIm = imgDraw(img, ctx);
    var Data = DataFactory(img, ctx);
    return function (style, option) {
        sImgDraw(sIm, Data(style, option))
    }
}
LEFT = function (S) {
    return CUT(S)(0, 0)(S.width / 2, S.height)
}
drawMy = function (My) {
    cutter(My)(0, 0)(My.w, My.h)
}
scaleDraw = function (i, c) {
    c.save();
    c.scale(c.w / i.w, c.h / i.h);
    c.drawImage(i, 0, 0);
    c.restore();
}
changeData = function (d, str) {
    var f = new Function("v", "k", "l", "l[k]=" + str);
    ea(d.data, function (v, k, l) {
        f(v, k, l);
    })
}
changeData2 = function (d, str) {
    var s = "l[k]=" + str;
    $m(d.data, s);
}
gD = getData = function (c) {
    return c.getImageData(0, 0, c.w, c.h)
}
pD = putData = function (data, c) {
    c.putImageData(data, 0, 0)
}
gcp = getChangePut = function (c1, str, c2) {
    var d = gD(c1);
    cD(d, str);
    pD(d, c2);
}
DD = copyPasteData = getPutData = function (c, d) {
    pD(gD(c), d)
}
dit = function (d, str) {
    var s = "l[k]=" + str;
    $m(d.data, s);
}
cD = function (d, str) {
    var f = new Function("v", "k", "l", "l[k]=" + str);
    ea(d.data, function (v, k, l) {
        f(v, k, l)
    })
}
//dI = gD(c); da = dI.data;
// sets every fourth value to 50.. after the manipulation, reset the data and put the imagedata back to the canvas
fade = function (image) {
    var image = image;
    var imageData = image.data;
    var length = imageData.length;
    for (var i = 7; i < length; i += 4) {
        imageData[i] = 80;
    }
    ;
    image.data = imageData;
    return image;
}
pixelz = function () {
    c.drawImage(r, 0, 0, 300, 300, 0, 0, 300, 300)
    di = c.getImageData(0, 0, 300, 300)
    d = di.data
    for (var i = 0; i < imgData.data.length; i += 4) {
        d[i] = 255 - d[i];
        imgData.data[i + 1] = 255 - imgData.data[i + 1];
        imgData.data[i + 2] = 255 - imgData.data[i + 2];
        imgData.data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
    c.putImageData(di, 200, 200)
    for (var i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255 - imgData.data[i];
        imgData.data[i + 1] = 255 - imgData.data[i + 1];
        imgData.data[i + 2] = 255 - imgData.data[i + 2];
        imgData.data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
}
cutter = function (S) {
    return function (sx, sy) {
        return function (sw, sh) {
            return function (D, dx, dy, dw, dh) {
                D.drawImage(S, sx, sy, sw, sh, dx, dy, dw, dh)
            }
        }
    }
}
CUT = function (S) {
    return function (sx, sy) {
        return function (sw, sh) {
            return function (D) {
                return function (dw, dh) {
                    return function (dx, dy) {
                        D.drawImage(S, sx, sy, sw, sh, dx, dy, dw, dh)
                    }
                }
            }
        }
    }
}
getDataURL = function () {
    canvas = $('#myCanvas');
    ctx = canvas.get(0).getContext('2d');
    d(ctx);
    ctx.fillRect(10, 10, 10, 10);
    dataURL = canvas.get(0).toDataURL();
    canvas.click(function () {
        alert(dataURL)
    })
}
ctxToPng = function (ctx, name) {
    ctx.canvas.toBlob(function (blob) {
        saveAs(blob, name + ".png")
    })
}
ctxToImage = function (c) {
    var i = new Image();
    i.src = c.canvas.toDataURL("image/png");
    return i
}
pingy = function (ctx) {
    ctx.canvas.toBlob(function (blob) {
        saveAs(blob, name + ".png")
    })
}
//cutty
canvasClick = function (ctx, fxn) {//works
    ctx.canvas.onclick = function (e) {
        var X = e.clientX, Y = e.clientY;
        var left = ctx.canvas.offsetLeft;
        var top = ctx.canvas.offsetTop;
        var x = X - left;
        var y = Y - top;
        fxn(e, x, y, X, Y);
    }
}
vertex = function () {
    VX = []
}
drawVertex = function (ctx, x, y) {
    setStyles(ctx, 'white', 'black', 3);
    circ(ctx, x, y, 6)
}
addVertex = function (ctx, x, y) {
    drawVertex(ctx, x, y);
    VX.push({x: x, y: y})
}
clearVertices = function (ctx, x, y) {
    VX = [];
    resetCanvas(ctx)
}
genPath = function (ctx) {
    var start = VX.shift();
    ctx.moveTo(start.x, start.y);
    ea(VX, function (vertex, index, list) {
        ctx.lineTo(vertex.x, vertex.y)
    });
    VX = [];
    c.closePath();
}
makePath = function (ctx) {
    CLR(ctx);
    var start = VX.shift();
    ctx.moveTo(start.x, start.y);
    _.each(VX, function (vertex, index, list) {
        ctx.lineTo(vertex.x, vertex.y)
    });
    ctx.fill();
    ctx.closePath();
    ctx.clip();
    imgCan(ctx, src)
}
makeCut = function (ctx) {
    ctx.save();
    clearCanvas(ctx);
    genPath(ctx);
    ctx.clip();
    dO(me, c)
};// c.restore();} //G = function() {dat= getData(c) };P = function() {putData(dat,c) }
getCut = function (ctx) {
    l('getCut')
    var copy = gD(ctx);
    CLR(ctx);
    var start = VX.shift();
    ctx.moveTo(start.x, start.y)
    _.each(VX, function (vx, index, list) {
        ctx.lineTo(vx.x, vx.y)
    })
    ctx.closePath();
    ctx.clip();
    pD(copy, ctx)
}
//canvasClick(ctx, function(e,x,y){dVX(c, x, y); VX.push( {x:x,y:y})})}
//canvasClick(clr, function(e,x,y){reset(c);VX=[]})
//canvasClick(cut, function(){clr(c); getCut(c);})                       // and then: "t()"    ??? wtf
//dI = getData(c);da=dI.data;
// s1 = stamp(chicks,c);s2 = stamp(chicks,cc);
// t = function(){s1(0,0)}; tt = function(){ c.drawImage(chicks,0,0)}; ttt = function(){ cc.drawImage(chicks,20,20)};
pingy = function (ctx) {
    ctx.canvas.toBlob(function (blob) {
        saveAs(blob, name + ".png")
    })
}
blobFile = function (ctx) {
    ctx.canvas.toBlob(function (blob) {
        var formData = new FormData();
        formData.append("cutout", blob);
        var oReq = new XMLHttpRequest();
        oReq.open("POST", "http://localhost:4000/cutty");
        oReq.send(formData);
    })
}
// 1 make circles on canvas  2 make them in response to mouse click         /
// 3 store them in an array     4 gen path from array  5 use outside of path as clipping region
// 6 apply transparency to clipping region, 7 get imageData of new canvas  8 save it as a cutty!
//make clipping region from a circle?a
// my2y = CUT(My)(0,0)(My.w, My.h)(blue)(My.w,My.h)// onY = cutY = function(what){what(img,yellow, 10,10)}  // onB = cutB = function(what){what(img,blue, 10,10)}
//ii.src = "http://localhost:4000/" + imagePath;
//var can = document.getElementById('canvas'); canvas = $('#can'); can = canvas.get(0); ctx = can.getContext('2d');
////////////////////
// f = function(def){return new Function(def)}
// bigger:f(img,"ctx.scale(1.3,1.3);  ctx.drawImage(I, 0, 0, img.width, img.height)")
// can.width = img.width;   can.height = img.height;
//src = '/0cf14fee2317209e455ed59feb89a8c8.jpg'
//$('#invert').click(   invert   ); $('#grayscale').click(
//function flipY () {ctx.translate(img.width-1, img.height-1);    ctx.rotate(Math.PI);    ctx.drawImage(img, 0, 0, img.width, img.height);}
/*
 / This is the canvas where you want to draw
 var canvas = document.getElementById('your-canvas');
 var ctx = canvas.getContext('2d');
 // I'll use a skyblue background that covers everything
 // Just to demonstrate - ctx.fillStyle = "skyblue"; ctx.fillRect(0, 0, canvas.width, canvas.height);
 // Create a canvas that we will use as a mask
 var maskCanvas = document.createElement('canvas');
 // Ensure same dimensions - maskCanvas.width = canvas.width; - maskCanvas.height = canvas.height;
 var maskCtx = maskCanvas.getContext('2d');
 // This color is the one of the filled shape
 maskCtx.fillStyle = "black";
 // Fill the mask - maskCtx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);
 // Set xor operation - maskCtx.globalCompositeOperation = 'xor';
 // Draw the shape you want to take out - maskCtx.arc(30, 30, 10, 0, 2 * Math.PI);  maskCtx.fill();
 // Draw mask on the image, and done !  - ctx.drawImage(maskCanvas, 0, 0);​*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
recursiveMapFunc = rc = function self(f, a) {
//recursive map function
//pass a function and array.  it maps the array,
// but if it finds another array, it recursively maps it
    if (_.isUndefined(a)) {
        return _.partial(self, f)
    }
    else return _.map(a, function (a) {
        if (A(a)) {
            return self(f, a)
        }
        else return f(a)
    })
}
adj = function (a) {
    if (O(a)) {
        adj(a.x)
        adj(a.y)
        return a
    }
    return a <= 10 ? a *= 100 : a
}
//logic
ff = function f(a) {
    return new $F(
        "a", "b", "c", "d", "e", "var g=G(arguments)," +
        "t=this;" + a + ";return t")
}
ffr = function f(a) {
    return new $F(
        "a", "b", "c", "d", "e", "var g=G(arguments);return(" + a + ")")
}
$do = function (b, f) {
    if (F(f)) {
        f(b)
    }
    if (S(f)) {
        window[f] = b
    }
    return b
}
X = function X(c) {
    if (O(c)) {//if(c.name='x'){return c.x}
        if (c.canvas) {
            return c
        }
        if (C(c)) {
            return C(c).getContext('2d')
        }
        if (c.x) {
            return X(c.x)
        }
        if (c.q) {
            return X(c.q)
        }
    }
}
//advanced / low-level
pxChangeData = function (d, s) {
    _.each(_d(d),
        function (v, k, l) {
            vkl(s)(v, k, l)
        })
}
pxChangeData2 = function (d, s) {
    $m(
        _d(d),
        "l[k]=" + s
    )
}
el.dotsX = function () {
    x.DOTS = []
    x.dats = []
    x.$(function (X, Y) {
        x.cir(X, Y)
        x.DOTS.push([X, Y])
        x.dats.push(pI(X))
        x.dats.push(pI(Y))
        x.ln(x.DOTS)
    })
    x.$$(function (X, Y) {
        var du
        //save
        x.S()
        x.closePath()
        x.q.off()
        x.q.c('X')
        du = x.du()
        x.X()
        x.clip()
        x.fit(du)
        x.bc('w')
    })
    return x
}
$canvas = function (a, b) {
    var theCanvas = qq('c').k('can').at({w: 100, h: 100})
    return theCanvas
}
NEWCANVAS = function () {
    z();
    c = $.canvas().A()
    //draw does not return c ??!
    c.draw('me')
    c.draw('guy')
    c.draw('guy', 100, 100)
    //c.fit ?
}
xx = function xx(c, w, h, t, l) {
    if (C(c)) {
        c = C(c)
    } else if (!S(c)) {
        return xx($r(), c, w, h, t)
    }
    else {
        var g = G(arguments),
            can = $.canvas(), left, top
        c = g[0]
        w = g[1]
        h = g[2]
        top = t = g[3]
        left = l = g[4]
        w = w || 4
        h = (h || w)
        // if(h<10){h*=100}
        // if(w<10){w*=100}
        can.css({backgroundColor: c, opacity: .6}).at({width: w, height: h}).a()
        //make it draggable, unless args.NOT!!!!
        if (g.N) {
            left = left || 300
            top = ( top || left )
            if (l < 10) {
                l *= 100
            } //optional
            if (t < 10) {
                t *= 100
            } //optional
            can.css('position', 'a').drag().left(left).top(top)
        }
        c = can
    }
    var x = function x(a, b) {
        var args = G(arguments)
        if (F(a)) {
            return a
        }
        if (A(a)) {
            return x.pop(a[0])
        }
        if (O(a)) {
            x.pop(g.f)
            if (!b) {
                return x.x
            }
            x.res = x.met.apply(x, args.r);
            return x
        }
        if (S(a)) {
            x.res = x.met.apply(x, args)
            return x
        }
        return x.res
    }
    x.canvas = x.can = x.c = c
    x.context = x.ctx = x.x = X(x.c)
    x.pop = x.p = xP(x.x)
    x.met = x.m = xM(x.x)
    //works
    x.roundRect = function (X, y, width, height, radius) {
        x.beginPath();
        x.moveTo(X + radius, y);
        x.lineTo(X + width - radius, y);
        x.quadraticCurveTo(X + width, y, X + width, y + radius);
        x.lineTo(X + width, y + height - radius);
        x.quadraticCurveTo(X + width, y + height, X + width - radius, y + height);
        x.lineTo(X + radius, y + height);
        x.quadraticCurveTo(X, y + height, X, y + height - radius);
        x.lineTo(X, y + radius);
        x.quadraticCurveTo(X, y, X + radius, y);
        x.closePath();
        return x
    }
    x.roundRect.test = function () {
        x.roundRect(100, 100, 200, 400, 20)
    }
    //dont work?
    x.invert = function (src, dst) {
        var data = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        var pixels = data.data;
        var r, g, b, a, h, s, l, hsl = [],
            newPixel = []
        for (var i = 0, len = pixels.length; i < len; i += 4) {
            pixels[i + 0] = 255 - pixels[i + 0]
            pixels[i + 1] = 255 - pixels[i + 1]
            pixels[i + 2] = 255 - pixels[i + 2]
        }
        this.context.putImageData(data, 0, 0)
        return x
    }
    //does something!
    x.paperBag = function (x, y, width, height, blowX, blowY) {
        var lx, ly;
        this.beginPath();
        this.moveTo(x, y);
        this.quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
        this.quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
        this.quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
        this.quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);
    }
    //inherit from q
    x.qq = x.q = qq(x.c)
    x.o = function (a, b, c) {
        x.q.o(a, b, c);
        return x
    }
    x.a = function () {
        x.q.a();
        return x
    }// ???
    x.id = function (a) {
        if (U(a)) {
            return x.q.id()
        }
        x.q.id(a)
        return x
    }//////////////////////
    x.offsetLeft = x.l = function (theOffset) {
        if (!theOffset) {
            return offsetLeft(x.q)
        }
        return parseInt(theOffset - x.offsetLeft())
    };
    x.ox = function () {
        return x.q.q.offset().left
    }
    x.offsetTop = x.t = function (y) {
        if (!y) {
            return offsetTop(y.q)
        }
        return parseInt(y - x.offsetTop())
    };
    x.oy = function () {
        return x.q.q.offset().top
    }
    //remove
    x.remove = x.rm = function () {
        qq(x.c).X()
    }
    //save
    x.snap = x.saveImage = x.sv = function () {
        sv(x)
    }//b
    x.saveState = x.S = function () {
        x.x.save();
        return x
    }
    x.restoreState = x.R = function () {
        x.x.restore();
        return x
    }
    x.backgroundColor = x.bc = function (c) {
        var g = G(arguments),
            c = g[0]
        if (g.n) {
            c = 'X'
        }
        x.q.c(c)
        return x
    }//b
    //DRAWING
    x.dI = function (i) {
        var args = G(arguments)
        args[1] = args[1] || 0
        args[2] = args[2] || 0
        x.met.apply(x, ['d'].concat(args))
    }
    x.d = function (i) {
        var args = G(arguments), image = args[0]
        $.img(i, function (image) {
            args[0] = image[0]
            x.dI.apply(x.ctx, args)
        })
    }
    x.Cd = function (a, X, Y) {
        $.img(
            a,
            function (image) {
                x.d(image,
                    X - image.w() / 2,
                    Y - image.h() / 2)
            })
    }
    //draw it where u say, but as if its reg point was its center
    x.drawRegCenter = x.dC = function f(i, X, Y) {
        im(i, function (i) {
            x.d(i, (x.w() / 2) - (i.w() / 2), (x.h() / 2) - (i.h() / 2))
        })
        return x
    }
    x.fit = x.f = function f(a, X, Y) {
        a || 'me'
        X = X || 0
        Y = Y || 0
        x.d(a, X, Y, x.w(), x.h())
        return x
    }
    x.drawMug = x.me = function me(interval) {//randomly draw my face
        var g = G(arguments),
            interval = g[0] || 200
        if (x.me.d) {
            clearInterval(x.me.d)
            x.me.d = false
        }
        else {
            x.me.intId = x.me.d = setInterval(function () {
                x.d(
                    $w['mug'] || 'me',
                    _.random(x.w() - 200),
                    _.random(x.w() - 200)
                )
            }, interval)
        }
        return x
    }
    x.drawMug.intId = false
    x.fitMug = x.mug = function (user) {
        $.post('/mug', {u: user},
            function (userMug) {
                x.fit(userMug)
            })
        return x
    }
    x.crop = function rc(x1, y1, x2, y2) {
        if (A(x1)) {
            return rc(
                x1[0], x1[1],
                x1[2] - x1[0],
                x1[3] - x1[1])
        }
        return x.d(x, x1, y1, x2, y2,
            0, 0, x.w(), x.h())
    }
    //get data url
    x.dataUrl = x.du = x.u = function () {
        return tU(x.can)
    }
    x.img = $.img()
    x.img.src(x.dataUrl())
    // DIMS
    x.w = function (w) {
        var g = G(arguments)
        if (U(w)) {
            return _w(x.c)
        }
        if (g.N) {
            var u = x.u()
        }
        _w(x.c, w)
        if (g.N) {
            x.fit(u)
        }
        return x
    }
    x.h = function (h, z) {
        if (!h) {
            return _h(x.c)
        }
        if (!z) {
            var u = x.u()
        }
        _h(x.c, h)
        if (!z) {
            x.fit(u)
        }
        return x
    }
    x.wh = function (w, h) {
        if (!w) {
            return $V(x.w(), x.h())
        }
        var u = x.u()
        x.w(w)
        x.h(h || w)
        x.fit(u)
        return x
    }
    x.Z = function (w, h) {
        w = w || 5;
        return x.wh(w * 100, (h || w) * 100)
    }
    //COPY/PASTE
    x.copy = x.C = function () {
        x.img.src = x.u();
        return x
    }
    x.paste = x.P = function () {
        var g = G(arguments)
        if (g.N) {
            x.X()
        }
        if (g.p) {
            x.f(x.img)
        }
        else {
            x.d(x.img)
        }
    }
    //fill rect
    x.fillRect = x.fr = function (a, b, c, d) {
        a = a || 0
        b = b || 0
        c = c || x.w()
        d = d || x.h()
        x.met('fr', a, b, c, d)
        return x
    }
    //clear screen [+ fill with color || run fx]
    x.X = function (a) {
        if (S(a)) {
            x.fs(a);
            return x.fr()
        }
        x.x.clearRect(0, 0, x.w(), x.h())
        if (F(a)) {
            a()
        }
        return x
    }
    x.cfr = function (a) {
        var g = G(arguments)
        x('S')
        x({f: _a(tCl, g)}, 'fr', 0, 0, x.w(), x.h())
        x('R')
        return x
    }
    // FONT/TEXT
    //set font
    x.fo = function (f) {
        x.x.font = $f(f)
        return x
    }
    x.tx = function (t, X, Y) {
        var g = G(arguments),
            t = g[0],
            X = g[1] || 100,
            Y = g[2] || X
        if (g.n) {
            x.x.strokeText(t, X, Y)
        }
        else if (g.p) {
            x.tx(t, X, Y, '-');
            x.tx(t, X, Y)
        }
        else x.x.fillText(t, X, Y)
        return x
    }
    x.ftc = function (t, p2) {
        return x.ft(
            t,
            x.w() / 2 - x.mt(t) / 2,
            p2
        )
    }
    x.Text = function (a, b, c) {
        var g = G(arguments),
            f = function f(a, b) {
                if (S(a) && U(b)) {
                    f.tt = a
                }
            }
        if (g.p) {
            return {f: a, fo: b, tb: c}
        }
        f.x = ca(a, b, c)
        if (U(a)) {
            return f.x.font
        }
        if (S(a)) {
            f.x.font = a
        }
        f.f = function (a, b) {
            f.x.pop('fo', $f(a))
        }
        f.t = function (a, b, c) {
            if (c) {
                f(c)
                return f.t(a, b)
            }
            f.x.met('ft', f.tt, a, b)
        }
        return f
    }
    //set stroke style
    x.ss = function (c) {
        var g = G(arguments)
        if (c = g.p ? $r('c', c) : Oo('c', c)) {
            x({s: c})
        }
        return x
    }
    //set fill style [+ stroke style]
    x.fs = function (c, sc) {
        var g = G(arguments)
        if (O(c)) {
            x.x.fillStyle = c;
            return x
        }
        if (c = g.p ? $r('c', c) : Oo('c', c)) {
            x({f: c})
        }
        if (D(sc)) {
            x.ss(sc)
        }
        return x
    }
    x.sfl = function (c, f, s, l) {
        x({f: f, s: s, w: l});
        return x
    }
    /// LINES ////
    x.measureText = x.mt = function (t) {
        return x.x.measureText(t).width
    }
    x.beginPath = x.begin = x.bg = function (p1, p2) {
        if (A(p1)) {
            return x.bg(p1[0], p1[1])
        }
        x('b')
        x('m', p1, p2)
        return x
    }
    x.lineTo = x.lt = function (p1, p2) {
        var g = G(arguments)
        if (A(p1)) {
            _.each(g,
                function (p) {
                    x.lt(p[0], p[1])
                })
        }
        else {
            x('l', p1, p2)
        }
        x('s')
        return x
    }
    //draw line ( [x,y],[x,y] || x,y,x,y )
    //draw multiple unconnected lines ( [[],[]],[[],[]] || [],[] )
    x.line = x.ln = function rc(p) {
        var args = G(arguments),
            g = args,
            p = args[0]
        if (
            AA(p) ||
            ( A(p) && _z(p) == 4)) {
            _.each(args,
                function (p) {
                    rc.apply(this, p)
                })
        }
        else if (A(p)) {
            x.begin(g.f)
            x.lineTo.apply(x, g.r)
        }
        else if (N(p)) {
            x.begin(g[0], g[1])
            x.lineTo(g[2], g[3])
        }
        return x
    }
    //draw horizontal line
    x.horizontalLine = x.lnh = function (X, Y, l) {
        var g = G(arguments), X = g[0], Y = g[1], l = g[2],
            X2 = g.p ? X + l : g.n ? X - l : l
        return x.ln(X, Y, X2, Y)
    }
    //draw vertical line
    x.verticalLine = x.lnv = function (X, Y, len) {
        var g = G(arguments),
            X = g[0],
            Y = g[1],
            len = g[2],
            Y2 = g.p ? Y + len
                : g.n ? Y - len
                : len
        return x.ln(X, Y, X, Y2)
    }
    //line stroke settings
    x.lineWidth = x.lW = x.lw = function (n) {
        n = n || 10
        x({w: n})
        return x
    }
    x.miterLimit = x.ml = function (n) {
        n = n || 10
        x({m: n})
        return x
    }
    x.lineCap = x.lC = x.lc = function (n) {
        n = n || 'r';
        x({p: n});
        return x
    }
    x.lineJoin = x.lJ = x.lj = function (n) {
        n = n || 'r';
        x({j: n});
        return x
    }
    //x.to=function(a,b,c){if(N(b)){o.m('l',a,b)};if(N(c)){o.m('a2',arguments)}}
    /// CIRCLES/CURVES ///
    x.circle = x.cir = function (X, Y, R, fs, ss) {
        var g = G(arguments),
            X = g[0] || 200,
            Y = g[1] || 200,
            r = g[2] || 1,
            fs = g[3],
            ss = g[4]
        x('b')('a', X, Y, r, 0, 7, false)
        x.fs(fs)
        x.ss(ss)
        x('s')('f')
        return x
    }
    x.quadraticCurveTo = x.curve = function f(a, b, c, d, e, f) {
        var g = G(arguments)
        if (N(e)) {
            x('z', a, b, c, d, e, f)
        }
        else {
            x('q', a, b, c, d)
        }
        if (g.N) {
            x('s')
        }
    }
    x.pip = function (c, a, b) {
        return x('ip', a, b)
    }
    x.a2 = function a2(X) {
        var g = G(arguments)
        if (A(X)) {
            return _a(a2(x), X)
        }
        x('a2', g[0] || 50, g[1] || 40, g[2] || 100, g[3] || 100, g[4] || 30)
        x('s')
        return x
    }
    /// EVENTS ///
    x.$ = function (f) {
        var cX = function (e) {
                return e.clientX
            },
            cY = function (e) {
                return e.clientY
            }
        x.q.q.click(function (e) {
            f(cX(e) - osl(x.q.q), cY(e) - ost(x.q.q))
        })
    }
    x.$$ = function (f) {
        var cX = function (e) {
                return e.clientX
            },
            cY = function (e) {
                return e.clientY
            }
        x.q.q.dblclick(function (e) {
            f(cX(e) - osl(x.q.q), cY(e) - ost(x.q.q))
        })
    }
    x.$$x = function (f) {
        x.q.q.dblclick(function (e) {
            f(cX(e) - osl(x.q.q),
                cY(e) - ost(x.q.q))
        })
    }
    x.MV = function (f) {
        var cX = function (e) {
                return e.clientX
            },
            cY = function (e) {
                return e.clientY
            }
        x.q.q.mouseover(function (e) {
            f(cX(e) - osl(x.q.q), cY(e) - ost(x.q.q))
        })
    }
    x.MO = function (f) {
        var cX = function (e) {
                return e.clientX
            },
            cY = function (e) {
                return e.clientY
            }
        x.q.q.mouseout(function (e) {
            f(cX(e) - osl(x.q.q), cY(e) - ost(x.q.q))
        })
    }
    x.ME = function (f) {
        var cX = function (e) {
                return e.clientX
            },
            cY = function (e) {
                return e.clientY
            }
        x.q.q.mouseenter(function (e) {
            f(cX(e) - osl(x.q.q), cY(e) - ost(x.q.q))
        })
    }
    x.ML = function (f) {
        var cX = function (e) {
                return e.clientX
            },
            cY = function (e) {
                return e.clientY
            }
        x.q.q.mouseleave(function (e) {
            f(cX(e) - osl(x.q.q), cY(e) - ost(x.q.q))
        })
    }
    x.MU = function (f) {
        var cX = function (e) {
                return e.clientX
            },
            cY = function (e) {
                return e.clientY
            }
        x.q.q.mouseup(function (e) {
            f(cX(e) - osl(x.q.q), cY(e) - ost(x.q.q))
        })
    }
    x.MM = function (f) {
        var cX = function (e) {
                return e.clientX
            },
            cY = function (e) {
                return e.clientY
            }
        x.q.q.mousemove(function (e) {
            f(cX(e) - osl(x.q.q), cY(e) - ost(x.q.q))
        })
    }
    x.MD = function (f) {
        var cX = function (e) {
                return e.clientX
            },
            cY = function (e) {
                return e.clientY
            }
        x.q.q.mousedown(function (e) {
            f(cX(e) - osl(x.q.q),
                cY(e) - ost(x.q.q))
        })
    }
    x.clip = function () {
        x.x.clip()
        return x
    }
    x.closePath = x.cp = function () {
        x.x.closePath();
        return x
    }
    x.dots = function () {
        x.DOTS = []
        x.dats = []
        x.$(function (X, Y) {
            x.cir(X, Y)
            x.DOTS.push([X, Y])
            x.dats.push(pI(X))
            x.dats.push(pI(Y))
            x.ln(x.DOTS)
        })
        x.$$(function (X, Y) {
            var du
            //save
            x.S()
            x.closePath()
            x.q.off()
            x.q.c('X')
            du = x.du()
            x.X()
            x.clip()
            x.fit(du)
            x.bc('w')
        })
        return x
    }
// GRADIENTS
    addColorStop = acs = function rc(gradient, stop, color) {

        // pass only a gradient -> function with gradient curried
        // add a color stop to a gradient
        if (U(stop)) {
            return _.partial(rc, gradient)
        }
        gradient.addColorStop(stop, oO('c', color))
        return g
    }
    SuperGradient = sGr = function (gradient) {
        gradient.a = function (stop, color) {
            addColorStop(gradient, stop, color);
            return gradient
        }
        return gradient
    }
    x.createLinearGradient = x.lg = function (a, b, c, d) {
        a = a || 0
        b = b || 0
        c = c || x.w()
        d = d || x.h()
        return SuperGradient(
            x.x.createLinearGradient(a, b, c, d))
    }
    x.createRadialGradient = x.rg = function rg() {

        //ctx.createRadialGradient()
        var g = G(arguments)
        g[0] = g[0] || 200
        g[1] = g[1] || 200
        g[2] = g[2] || 100
        g[3] = g[3] || 250
        g[4] = g[4] || 250
        g[5] = g[5] || 800
        return x('rg',
            g[0], g[1], g[2], g[3], g[4], g[5]
        ).res
    }
    x.sampRadGrad = function (gradient) {
        gradient = gradient || x.rg()
        addColorStop(gradient, 0, 'r')
        addColorStop(gradient, .15, 'b')
        addColorStop(gradient, .2, 'r')
        addColorStop(gradient, .5, 'y')
        addColorStop(gradient, 1, 'b')
        x.fs(gradient)
        x.fr()
    }
    x.sampLinGrad = function (gradient) {
        gradient = gradient || x.lg()
        addColorStop(gradient, 0, 'r')
        addColorStop(gradient, .1, 'r')
        addColorStop(gradient, .15, 'b')
        addColorStop(gradient, .2, 'r')
        addColorStop(gradient, .5, 'y')
        addColorStop(gradient, 1, 'b')
        x.fs(gradient)
        x.fr()
        return x
    }
    x.grad = x.createGradient = function (gradientArgs, stopObject, w, h) {
        var gradient =
            (gradientArgs.length == 4) ? gradient = x.createLinearGradient.apply(x.x, gradientArgs)
                : x.createRadialGradient.apply(x.x, gradientArgs)
        if (O(stopObject)) {
            _.each(stopObject,
                function (v, k) {
                    var o = S(v) ? {k: k, v: v} : {k: v, v: k}
                    addColorStop(gradient, o.k, $r('c', o.v))
                })
        }
        x.fs(gradient)
        x.fr()
        return gradient
    }
    x.intervalGrad = function () {
        var a = 0, b = 1000, gradient
        setInterval(
            function () {
                a += 1;
                b -= 2
                //gradient=  x.createRadialGradient( 200, 200, a, 290, 270, b)
                //gradient.addColorStop(.1,'Yellow')
                //gradient.addColorStop(.3,'Red')
                //gradient.addColorStop(1, 'Violet')
                gradient = x.grad([200, 200, a, 290, 270, b], {y: .1, r: .3, V: 1})
                x.fs(gradient)
                x.fr()
                //
            }
            , 100)
    }
    //patterns are for 'fills'
    x.createPat = x.cPt = function (c, im, b) {
        return xM(c)('p', im, oO('pt', b || 'r'))
    }//=createPattern
    // PROPS
    //alpha
    x.op = function (n) {
        x({a: n || .5});
        return x
    }
    // global comp
    globalCompositionOperation = function (canvasEl) {
        return _.partial(xP(canvasEl), 'g')
    }
    x.globalCompositionOperation = x.gc = globalCompositionOperation(x.c)
    x.shadowColor = function (color) {
        if (U(color)) {
            return x.x.shadowColor
        }
        x.x.shadowColor = oO('c', color)
        return x
    }
    x.shadowBlur = function (blurNumber) {
        if (U(blurNumber)) {
            return x.x.shadowBlur
        }
        x.x.shadowBlur = blurNumber
        return x
    }
    x.shadowOffsetX = function (offsetX) {
        if (U(offsetX)) {
            return x.x.shadowOffsetX
        }
        x.x.shadowOffsetX = offsetX
        return x
    }
    x.shadowOffsetY = function (offsetY) {
        if (U(offsetY)) {
            return x.x.shadowOffsetY
        }
        x.x.shadowOffsetY = offsetY
        return x
    }
    //TRANSFORM
    //scale MULTIPLIER
    x.scale = x.sc = function (X, Y) {
        var g = G(arguments),
            X = g[0] || 1, Y = g[1] || X
        x.x.scale(X, Y)
    }
    x.translate = x.tr = function (X, Y) {
        var g = G(arguments),
            X = g[0] || 1, Y = g[1] || X
        x.x.translate(X, Y)
    }
    x.rotate = x.rt = function (r) {
        var g = G(arguments),
            r = g[0] || 1
        //r=pi(-6)*r
        //x.fr(0,0,1,1)
        //x({f:$r('c')
        x.x.rotate(r)
    }
    x.transform = x.tf = function rc(a, c, e, b, d, f) {
        var g = G(arguments)
        if (g.p) {
            return rc(2, 0, 0, 2, 0, 0)
        }
        return x('t', a, c, e, b, d, f)
    }
    x.setTransform = x.stf = function rc(a, c, e, b, d, f) {
        var g = G(arguments)
        if (g.p) {
            return rc(2, 0, 0, 2, 0, 0)
        }
        return x('st', a, c, e, b, d, f)
    }
    // PIXEL-DATA
    x.getData = x.gD = function (X, Y, w, h) {
        var g = G(arguments),
            X = g[0] || 0,
            Y = g[1] || 0,
            w = g[2] || x.w(),
            h = g[3] || x.h(),
        //historic.. dont delete ! data = x('G', X, Y, w, h).res
            data = x.x.getImageData(X, Y, w, h)
        data.h = data.height
        data.w = data.width
        data.d = data.data
        return data
    }
    x.putData = x.pD = function (d, X, Y) {
        X = X || 0
        Y = Y || 0
        return x('P', d, X, Y)
    }
    //get [-> X()] -> put
    x.getPut = x.gp = function (a, X, Y) {
        var g = G(arguments),
            a = g[0], X = g[1], Y = g[2],
            d = _a(x.gD, a, x)
        if (g.n) {
            x.X()
        }
        return x.pD(d, X, Y)
    }
    x.pX = 0
    x.pY = 0
    x.sX = function (n) {
        x.pX = n;
        return x
    }
    x.sY = function (n) {
        x.pY = n;
        return x
    }
    x.bigX = function (r) {
        x.ln([0, 0], [x.w(), x.h()], [0, x.w()], [x.h(), 0])
    }
    x.com = function () {
        _e(arguments, function (b) {
            if (!A(b)) {
                b = [b]
            }
            _a(x, b)
        })
        return p
    }
    //x.line=function(a,b,c,d){var p1=a, p2=b;return x.com('b',['m',p1[0],p1[1]],['l',p2[0],p2[1]],'s')}
    x.sun = function (a, b, s) {
        s = s || 1;
        x.gr([[a || 0, b || a || 0],
                s * 100, s * 500], {'y': 0, 1: tCl('p', 0)},
            600, 600)
    }
    x.ball = function (b) {
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
//give scale cos(rads), skew:sin(rads)  ??
    x.norm = function () {
        return x('sc', x.w() / 10, x.h() / 10)
    }
    return x
}
X = function X(c) {
    if (O(c)) {//if(c.name='x'){return c.x}
        if (c.canvas) {
            return c
        }
        if (C(c)) {
            return C(c).getContext('2d')
        }
        if (c.x) {
            return X(c.x)
        }
        if (c.q) {
            return X(c.q)
        }
    }
}
rotation = rt = function (a, b) {
    if (U(b)) {
        return a.rotation
    }
    a.rotation = b
    return a
}
SMOOTHWITHSTOP = function () {
    d = dv().id('test').a()(y = cx('x', 40).q.k('box'))
    $('#test').hover(function () {
            $('.box').stop().fadeTo(200, 1)
        },
        function () {
            $('.box').stop().fadeTo(200, 0)
        })
}
BIG = function () {
    z()
    d = dv().id('test').a()(
        y = cx('x', 40).q.k('box')
    )
    d2 = dv().id('debug').a()
    //x=cx('y',1000,800).a()
    // x.$$(function(){x.f('me')})
}
notAnimated = notAnim = function (a) {
    return a.filter(':not(:animated)')
}
notAnimated.test = function () {
    var s = 1000, m = function (n) {
        return {marginLeft: n}
    }, n = 0
    d = dv().id('test').a()(y = cx('x', 40).q.k('box'))
    d2 = dv().id('debug').a()
    $('#test').click(function () {
        notAnim($('.box')).animate(m(-10), s,
            function () {
                $('#debug').append('<p>start..' + (n++) + '<p>')
            })
            .animate(m(10), s).animate(m(-10), s).animate(m(10), s).animate(m(-10), s).animate(m(-10), s)
            .animate(m(0), s, function () {
                $('#debug').append('<p>fin..<p>')
            })
    })
}
//cool demo
HSP = horizSlidPanels = function () {
    z()
    // rather than worry about synchronization between each panel
    //we will take last li in ul.k(panels) and position it to top right
    //of ul - this way,  when he sum width of all the panels occasionally
    //adds to greater than 100 percent of the ul as they animate..
    //the last li never breaks to the next line
    var s = 200
    theDiv = $div().k('container')(
        $div().k('panels')(
            $span('1'), $span('2'), $span('3'), $span('4'), $span('5')),
        $div().k('panels')(
            $span('A'), $span('B'), $span('C'), $span('D'), $span('E'))
    ).a()
    $('span').css({width: '100px', fontSize: '40px'})
    if ($('div.panels').length) {
        $('div.panels span:last-child').addClass('last')
        $('div.panels span').hover(
            function () {
                $(this).stop().animate({width: '110px', fontSize: '50px'}, s)
                    .siblings('span').stop().animate({width: '90px', fontSize: '30px'})
            },
            function () {
                $(this).stop().animate({width: '90px', fontSize: '30px'})
            })
    }
}
tree = function () {
    z();
    var s = 200
    d = _d().k('container')(
        pg().k('tree_controls')(
            lk('expand all').k('expand_all'),
            lk('collapse all').k('collapse_all')
        )).a()
    quas = "<li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li>"
    ter = "<li><a href='#' class='tree_trigger'> &nbsp;</a> Ter <ul>" + quas + "</ul></li>"
    sec = "<li><a href='#' class='tree_trigger'> &nbsp;</a> Sec" + ter + "</ul></li>"
    pri = "<ul class='tree'><li><a href='#' class='tree_trigger'> &nbsp;</a> Pri <ul class='tree_expanded'>" + sec + "</ul></li></ul>"
    q = qq($(pri))
    d(q)
    if (_z($('ul.tree'))) {
        $('p.tree_controls a.expand_all, p.tree_controls a.collapse_all').click(function () {
            if ($(this).hasClass('expand_all')) {
                $l('ex_all')
                $(this).parent('p').next('ul').find('a.tree_trigger').addClass('trigger_expanded')
                return false
            }
            else {
                $l('!ex_all')
                $(this).parent('p').next('ul').find('a.tree_trigger')
                    .removeClass('trigger_expanded').end()
                    .find('ul').removeClass('tree_expanded')
            }
            this.blur();
            return false
        })
        $(document).on('click', function () {
            if ($(this).hasClass('tree_trigger')) {
                if ($(this).next('ul').is(':hidden')) {
                    $(this).addClass('trigger_expanded').next('ul').addClass('tree_expanded')
                }
                else {
                    $(this).removeClass('trigger_expanded').next('ul').removeClass('tree_expanded')
                }
                this.blur()
                return false
            }
        })
        $('ul.tree li:last-child').addClass('last')
        $('ul.tree_expanded').prev('a').addClass('trigger_expanded')
    }
}
CAN = function () {
    var picHolder
    format()
    s2(picHolder = $span().id('pics'))
    eaI(function (v) {
        picHolder(
            xc(v.d, 1,
                function () {
                    qi('mouse').V('click').q.change()
                    mug = v.d
                }))
    })
    s2(x = cx('y', 1000, 800))
    setInterval(function () {
        x.bc()
    }, 10000)
    s1(
        $label('mouse'),
        sel('none', 'click', 'enter', 'leave', 'move').id('mouse').o(
            function (s) {
                x.q.ub()
                if (s == 'click') {
                    x.$(function (X, Y) {
                        x.Cd(mug, X, Y)
                    })
                }
                if (s == 'enter') {
                    x.ME(function (X, Y) {
                        x.Cd(mug, X, Y)
                    })
                }
                if (s == 'leave') {
                    x.ML(function (X, Y) {
                        x.Cd(mug, X, Y)
                    })
                }
                if (s == 'move') {
                    x.MD(function () {
                        x.MM(function (X, Y) {
                            x.Cd(mug, X, Y)
                        })
                    })
                    x.MU(function () {
                        x.q.ub('mousemove')
                    })
                }
            }),
        $label('global comp'),
        sel.apply(this, V(oO('g'))).$(function (v) {
            x.gc(v)
        }),
        //gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
        $button('SAVE(sv)', function () {
            x.sv()
        }),
        $br(2),
        $button('CUT(dots)',
            function () {
                x.q.q.unbind()
                qi('mouse').v('none')
                x.dots()
            }),
        $br(2),
        $button('RESTORE(R)',
            function () {
                x.R()
            }),
        $br(2),
        $button('bc:change background color', function () {
            x.bc()
        }), br(2),
        $button('cir:make circle', function () {
            x.cir(100, 100, 100)
        }), br(2),
        $button('d:draw', function () {
            x.d($w['mug'] || 'me')
        }), br(2),
        $button('dC:draw center', function () {
            x.dC($w['mug'] || 'me')
        }), br(2),
        $button('me', function () {
            x.me()
        }),
        $br(2),
        $button('sh1', function () {
            x.ln(sh1)
        }),
        $br(2),
        $button('sh2', function () {
            x.ln(sh2)
        }),
        $br(2),
        $button('tictactoe', function () {
            x.ln(tictactoe)
        }),
        $br(4),
        $button('sampLinGrad', function () {
            x.sampLinGrad()
        }),
        br(2),
        $button('sampRadGrad', function () {
            x.sampRadGrad()
        }),
        $br(2),
        $button('xxx', function () {
            xxx('barney')
        }), br(2),
        bt('bads', function () {
            bad(x, 200, 8)
        }), br(2),
        bt('coins', function () {
            coin(x, 200, 8)
        }), br(2))
}
tCl = function (n1, n2, n3, n4) {
    return n2 ? "rgba(" + n1 + "," + n2 + "," + "" + n3 + "," + (n4 || 1) + ")"
        : $r('c', n1)
}
FAN = function () {
    x = cx('y', 1000, 800).a()
    y = cx('x', 400).a()
    x.$$(function () {
        x.f('me')
    })
    x.f('me')
    guidewires = false
    dragging = false
    mousedown = {}
    loc = {}
    restoreDrawingSurface = function () {
    }
    updateRubberband = function (m) {
        x.ln(mousedown.x, mousedown.y, m.x, m.y)
    }
    drawGuidewires = function () {
    }
    x.MD(function (X, Y) {
        dragging = true
        mousedown = {x: X, y: Y}
    })
    x.MM(function (X, Y) {
        if (dragging) {
            restoreDrawingSurface()
            updateRubberband({x: X, y: Y})
        }
        if (guidewires) {
            drawGuidewires(loc.x, loc.y)
        }
    })
    x.MU(function (X, Y) {
        dragging = false
        restoreDrawingSurface()
        updateRubberband({x: X, y: Y})
    })
}
RUB = function () {
    z()
    x = $can('y', 1000, 800).a()
    //x.$$( function(){ x.fit('me') } )
    x.fit('me')
    guidewires = false
    dragging = false
    mousedown = {}
    loc = {}
    rr = null
    data = null
    x.MD(function (X, Y) {
        data = x.gD()
        dragging = true
        mousedown = {x: X, y: Y}
    })
    x.MM(function (X, Y) {
        var m = {x: X, y: Y}, d = mousedown
        if (dragging) {
            x.pD(data)
            x.ln(
                [d.x, d.y, d.x, m.y],
                [d.x, d.y, m.x, d.y],
                [m.x, m.y, m.x, d.y],
                [m.x, m.y, d.x, m.y])
        }
    })
    x.MU(function (X, Y) {
        dragging = false
        var d = mousedown, x1, x2, y1, y2
        if (X > d.x) {
            x1 = d.x;
            x2 = X
        } else {
            x1 = X;
            x2 = d.x
        }
        if (Y > d.y) {
            y1 = d.y;
            y2 = Y
        } else {
            y1 = Y;
            y2 = d.y
        }
        rr = [x1, y1, x2, y2]
        x.pD(data)
        x.crop(rr)
        data = x.gD()
    })
}
PAN = function () {
    z()
    x = cx('y', 1000, 800).a()
    y = cx('x', 400).a()
    x.$$(function () {
        x.f('me')
    })
    x.f('me')
}
TEXT = function () {
    z();
    x = cx('y', 1000, 800).a()
    x.$$(function () {
        x.X()
    })
}
TRANS = function () {
    z()
    x = cx('y', 1000, 800).a()
    y = cx('x', 400).a()
    x.$$(function () {
        x.f('me')
    })
    x.f('me')
    identity = function (x) {
        x.stf(1, 0, 0, 1, 0, 0)
    }
    rotate = function (x, a) {
        identity(x)
        x.rt(tRad(a))
    }
    rotateByAngle = function (px, py, a) {
        var x, y
        x = (px * cos(a)) - (py * sin(a))
        y = (py * cos(a)) + (px * sin(a))
    }
    rotateAroundZero = function (px, py, r) {
        var x, y, a = 'angle'
        x = (px * cos(PI / 4)) - (py * (sin(PI / 4)))
        y = (py * cos(PI / 4)) + (px * (sin(PI / 4)))
    }
    transformEquations = ['x=ax+cy+e', 'y=bx+dy+f']
    //if a=1,b=0,c=0,d=1 then args e,f rep pure translation
    //x=x+e,y=y+f
    //to scale, use a,d and set others to 0
}
makeGrad = function () {
    z()
    x = xx(6)
    gg = x.lg(50, 50, 50, 100).a(.5, 'b').a(.8, 'y')
    x({f: gg})
    x.fr(10, 30, 500, 900)
}
$can = can = function (r, w, h, t, l) {
    var g = G(arguments),
        c = $canvas()
    if (!S(g[0])) {
        return can('y', r, w, h, t)
    }
    if (!N(w)) {
        w = 200
    }
    if (!N(h)) {
        h = w
    }
    c.at({w: w, h: h}).s({C: r})
    //if(g.n){ c.a() }
    //if(g.p){ c.a().drg().top(t).left(l) }
    return xx(c)
}
cx = function (r, w, h) {
    var args = G(arguments)
    if (args.p) {
        return can('z', (r || 4) * 100, '+')
    }
    return xx(can.apply(this, arguments))
}
//==cV=function(r){r=r||4; return can('z',(r||4)*100,'+')}
//get first/last canvas/stage/xx
c0 = function () {
    var g = G(arguments),
        c = $('canvas')[0]
    return g.n ? xx(c) : g.p ? St(c) : c
}
c00 = function () {
    var g = G(arguments), c = _l($('canvas'))
    return g.n ? xx(c) : g.p ? St(c) : c
}
ci = function (a) {
    return qq($canvas()).id(a)
}
$imageSizeFuncCan = xc = function (image, size, func) {
    var x = xx($canvas()).bc('X')
    if (image) {
        x.fit(image)
    }
    if (size) {
        x.Z(size)
    }
    if (func) {
        x.$(func)
    }
    return x
}
c1 = function (m) {
    return cx().bc('-').Z(1).mug(m)
}
//makes image but as a CANVAS :)
xxx = function (a) {
    var x = xx()
    a = a || 'me'
    x.bc('-')
    im(a, function (i) {
        x.w(i.w());
        x.h(i.h());
        x.d(i)
    })
    return x
}
scaleImCen = function (c, i, s) {
    var o = xx(c), w = c.w, h = c.h
    o('d', i, w * s / -2 + w / 2, h * s / -2 + w / 2 + h / 2, w * s, h * s)
}
bad = function (x, n, n1) {
    if (N(n1)) {
        var a = []
        _t(n1, function () {
            a.push(bad(x, n))
        })
        return a
    }
    if (N(n)) {
        return bad(x).du(n)
    }
    var b = {
        x: _r(1200), y: _r(600), r: 15,
        dx: _r(10) - 5, dy: _r(10) - 5
    }
    b.d = function () {
        //x.cir(b.x,b.y,b.r, 'rgba(124,252,0,0.5)' ,'z')
        x.cir(b.x, b.y, b.r, 'g', 'z')
        x.cir(b.x, b.y, 15, 'o', 'z')
        return b
    }
    b.u = function () {
        b.r *= 1.005
        b.x = wrp(0, 1200, 20)(b.x + b.dx)
        b.y = wrp(0, 600, 20)(b.y + b.dy)
        return b
    }
    b.du = function (n, n2) {
        if (N(n)) {
            return I(function () {
                b.du()
            }, n)
        }
        return b.d().u()
    }
    return b
}
coin = function (x, n, n1) {
    if (N(n1)) {
        var a = [];
        _t(n1, function () {
            a.push(coin(x, n))
        });
        return a
    }
    if (N(n)) {
        return coin(x).du(n)
    }
    var c = {
        x: _r(0, 1200),
        y: _r(0, 600),
        r: 10,
        dx: _r(0, 10) - 5,
        dy: _r(0, 10) - 5
    }
    c.d = function () {
        x.cir(c.x, c.y, c.r, 'b', 'y')
        return c
    }
    c.u = function () {
        c.x = wrp(0, 1200, 20)(c.x + c.dx)
        c.y = wrp(0, 600, 20)(c.y + c.dy)
        return c
    }
    c.du = function (n, n2) {
        if (N(n)) {
            return I(function () {
                c.du()
            }, n)
        }
        return c.d().u()
    }
    return c
}
tictactoe = [[[200, 0], [200, 600]], [[400, 0], [400, 600]], [[0, 200], [600, 200]], [[0, 400], [600, 400]]]
vec = function (x, y) {
    var v = function v() {
    }
    v.x = x || 2
    v.y = y || 2
    v.sq = function () {
        return sq(v.x, v.y)
    }
    v.l = function () {
        return sqr(v.sq())
    }
    v.a = function (a) {
        var g = G(arguments)
        if (g.n) {
            a = (inv(a))
        }
        v.x += a.x;
        v.y += a.y;
        return v
    }
    v.s = function (a) {
        v.x *= a;
        v.y *= a;
        return v
    }
    v.u = function () {
        v.x = v.x / v.l();
        v.y = v.y / v.l()
    }
    v.n = function () {
        v.x *= -1;
        v.y *= -1
    }
    v.p = function (a) {
        return (v.x * a.x) + (v.y * a.y)
    }
    v.r = function (a) {
        v.x = v.x * cos(a) - v.y * sin(a)
        v.y = v.x * sin(a) + v.y * cos(a)
        return v
    }
    v.toString = function () {
        return '(' + tFx(v.x) + ',' + tFx(v.y) + ')'
    }
    v.v = v.toString
    return v
}
vkl = function (a) {
    return new Function("v", "k", "l", "l[k]=" + s)
}
pxChangeData = function (d, s) {
    _e(_d(d), function (v, k, l) {
        vkl(s)(v, k, l)
    })
}
pxChangeData2 = function (d, s) {
    $m(_d(d), "l[k]=" + s)
}
fade = function (im) {
// sets every fourth value to 50..
// after the manipulation, reset the data
// and put the imagedata back to the canvas
    var imD = _d(im), l = _z(imD)
    for (var i = 7; i < l; i += 4) {
        imD[i] = 80
    }
    return _d(im, imD)
}
pixelz = function () {
    var d = x('G', 0, 0, 300, 300)
    d.d = d.data
    for (var i = 0; i < _l(d.d); i += 4) {
        d[i] = 255 - d[i]
        d.d[i + 1] = 255 - d.d[i + 1]
        d.d[i + 2] = 255 - d.d[i + 2]
        d.d[i + 3] = 255;
    }
    x('P', d, 0, 0)
    x('P', d, 200, 200);
    for (var i = 0; i < _l(d.d); i += 4) {
        d.d[i] = 255 - d.d[i]
        d.d[i + 1] = 255 - d.d[i + 1];
        d.d[i + 2] = 255 - d.d[i + 2]
        d.d[i + 3] = 255
    }
}
CUTX = function (i) {
    return function (sx, sy) {
        return function (sw, sh) {
            return function (c) {
                return function (dw, dh) {
                    return function (dx, dy) {
                        c.x.drawImage(i, sx, sy, sw, sh, dx, dy, dw, dh)
                    }
                }
            }
        }
    }
}
LEFT = function (S) {
    return CUTX(S)(0, 0)(S.width / 2, S.height)
}
drawMy = function (a) {
    cutter(a)(0, 0)(a.w, a.h)
}
state = 0
sh1 = [[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]]
sh2 = [[[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]], [[8, 13], [12, 13]], [[9, 14], [9, 18]], [[10, 14], [10, 18]]]
//bluecircle game function
//never used
coinHits = function () {
    _.each(CoinsArray,
        function (coin, coinId) {

            //??? hitTest?
            if (xyc(coin.x, coin.y, game)) {
                delete CoinsArray[coinId]
                game.coinScore += 1
            }
        })
    _.each(
        As, function (a, A) {
            if (
                xyc(g.x, g.y, a)) {
                g.h -= 1
            }
            _.each(Bs, function (b, B) {
                if (xyc(b.x, b.y, a)) {
                    delete Bs[B]
                    delete As[A]
                    As.push(bad())
                }
            })
        })
}
startGameX = function (st) {
    z('w')
    st = st || St('b', 500).a().t()
    game = true
    Cs = []
    As = []
    Bs = []
    g = Guy()
    Bm('guy', function (guy) {
        st.a(guy = a);
        xy(guy, 200)
    })
    _t(10, function () {
        Cs.push(coin())
    })
    _t(15, function () {
        As.push(bad())
    })
}
updateGameX = function () {
    if (game) {
        g.dx += cap(-5, 5)((e.x() - g.x) / 300)
        g.dy += cap(-5, 5)((e.y() - g.y) / 300)
        bul(g.x, g.y, g.dx, g.dy)
    }
    else {
        alert('game over!')
        if ((e.x > 450) && (e.y > 290)
            && (e.x < 450 + textWidth)
            && (e.y < 290 + textHeight)) {
            reload()
        }
    }
    x = xx().w(800).h(600).$(function (X, Y) {
        g.dx += cap(-5, 5)((X - g.x) / 300)
        g.dy += cap(-5, 5)((Y - g.y) / 300)
        bul(g.x, g.y, g.dx, g.dy)
    })
    b = bad(x).d()
    c = coin(x).d()
    g = guy(x)
    I(function () {
        x.X();
        b.u().d();
        g.u().d()
    }, 30)
    ball = {x: 1, y: 0, vx: 0, vy: 0}
    _e($d(cat(Bs, Cs, As)), function (a) {
        a.d()
        a.u()
    })
}
updateScreenX = function () {
    updateBall()
    x.X();
    x('b')('m', 0, 500)('l', 300, 600)('s')
    drawBall()
}
updateBallX = function () {
    sXY(guy, .001, '-')
    XY(guy, 0.5, '+')
    XY(ball, ball.vx, ball.vy, '+')
    ball.vy += .04
}
drawBallX = function d(px, py) {
    px = px || ball
    if (O(px)) {
        return d(px.x, px.y)
    }
    x('b')
    x.cir(px, py, 2);
    x('f')
}
STORAGE = function () {
    z()
    saveFromLocStor = function () {
        i = ta().id('input')
        i.q.value = localStorage.getItem('myText') || ''
        i.o('u', function () {
            localStorage.setItem('mytext', i.value)
        }, false)
    }
    readDatFromOtherPageLoc = function () {
        //put windows side by side and watch one update the other
        i = qi('input')
        I(function () {
            i.q.value = localStorage.getItem('myText') || ''
        }, 50)
    }
    saveFromSesStor = function () {
        i = ta().id('input')
        i.q.value = sessionStorage.getItem('myText') || ''
        i.o('u', function () {
            sessionStorage.setItem('mytext', i.value)
        }, false)
    }
}
pan = function () {
    /*

     var mouse={x:0,y:0} //make an object to hold mouse position
     var scale = 2;

     canvas.onmousemove=function(e){mouse={x:e.pageX-this.offsetLeft,y:e.pageY-this.offsetTop};}
     canvas.onmousemove=function(e){mouse={x:e.pageX-this.offsetLeft,y:e.pageY-this.offsetTop};}


     setInterval( render ,100)// set the animation into motion

     var isDown = false;
     var startCoords = [];
     var last = [0, 0];

     canvas.onmousedown = function(e) {
     isDown = true;

     startCoords = [
     e.offsetX - last[0],
     e.offsetY - last[1]
     ];
     };

     canvas.onmouseup   = function(e) {
     isDown = false;

     last = [
     e.offsetX - startCoords[0], // set last coordinates
     e.offsetY - startCoords[1]
     ];
     };

     canvas.onmousemove = function(e)
     {
     if(!isDown) return;

     var x = e.offsetX;
     var y = e.offsetY;
     ctx.setTransform(1, 0, 0, 1,
     x - startCoords[0], y - startCoords[1]);
     render();
     }


     function render(){
     ctx.beginPath();
     ctx.save();
     ctx.setTransform(1,0,0,1,0,0);
     ctx.fillRect(0,0,canvas.width,canvas.height) //fill the background. color is default black
     ctx.restore();
     ctx.save();
     ctx.arc(mouse.x,mouse.y,250,0,6.28,false)//draw the circle
     ctx.clip()//call the clip method so the next render is clipped in last path
     ctx.drawImage(img,0,0,img.width*scale,img.height*scale)

     ctx.closePath()
     ctx.restore()

     }


     */
}
l('canvas');
rad = function (deg) {
    var rads = deg * (Math.PI / 180);
    return rads
}
TenArr = function () {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
getCtx = function (id) {
    return $('#' + id).get(0).getContext('2d')
}
wh = function (i) {
    i.w = i.width;
    i.h = i.height;
    return i
}
miniCtx = function (C) {
    C.T = C.translate;
    C.R = C.rotate;
    C.S = C.scale;
    C.D = C.drawImage;
    C.cid = C.createImageData;
    C.gid = C.getImageData;
    C.pid = C.putImageData;
    C.w = C.canvas.width;
    C.h = C.canvas.height;
    C.l = $(C.canvas).offset().left;
    C.t = $(C.canvas).offset().top;
    C.mx = function (x) {
        return parseInt(x - this.l)
    }
    C.my = function (y) {
        return parseInt(y - this.t + pageYOffset)
    }
    return C
}
getCtxMini = function (name, id) {
    w[name] = miniCtx(getCtx(id));
}
CTX = function (id) {
    window[id] = miniCtx(getCtx(id));
}
//  #{id}.w = #{id}.canvas.width ; #{id}.h = #{id}.canvas.height
setStyles = function (C, fillStyle, strokeStyle, lineWidth) {
    C.strokeStyle = strokeStyle;
    C.fillStyle = fillStyle;
    C.lineWidth = lineWidth;
}
circ = function (ctx, x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
}
drawPoint = function (x, y) {
}
replacePic = function (a, b) {
    a.parentNode.replaceChild(a, b)
}
replaceFirstWithSecond = function () {
    a = document.getElementsByTagName('img')[0];
    b = document.getElementsByTagName('img')[1];
    switchPics(a, b)
}  //document.location.href
im = function () {
    return new Image()
}  //imgSrc = function(img, src){img.src = src}   //setSRC = function(src,img){ if (src) { if (img){SRC(img,src)} else {SRC()}   }}
imLoaded = function (img, fn) {
    img.addEventListener('load', fn);
    return img
}
setPNGSource = function (img, png) {
    img.src = '/' + png + '.png';
    return img
}
pngLoaded = function (png, fxn) {
    return setPNGSource(imLoaded(im(), fxn), png)
}
plopPng = function (name, png) {
    w[name] = pngLoaded(png);
}
PNG = function (img) {
    plopPng(img, img)
}
// empty canvas
CLR = clearCanvas = function (ctx) {
    ctx.clearRect(0, 0, ctx.w, ctx.h)
}
reset = resetCanvas = function (c) {
    c.canvas.width = c.canvas.width
}
// draw img on canvas
simpleDraw = function (ctx, img) {
    ctx.drawImage(img, 0, 0)
};
draw300 = function (ctx, pic) {
    ctx.drawImage(pic, 0, 0, 300, 300, 0, 0, 300, 300)
}
imgInCv = function (src, ctx) {
    var img = im();
    var ctx = getCtx(ctx);
    $(img).load(function () {
        ctx.canvas.height = img.height;
        ctx.canvas.width = img.width;
        ctx.drawImage(img, 0, 0)
    });
    img.src = src
}
imgOnCv = function (img, ctx) {
    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
} // Draw 1
imgDraw = function (img, ctx) {
    return function (sx, sy, sw, sh, dx, dy, dw, dh) {
        ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
    }
}
sImgDraw = function (src, ctx) {
    src.apply(imgDraw, ctx)
} // ?
imgCan = function (ctx, src) {
    img = im();
    $(img).load(function () {
        ctx.drawImage(img, 0, 0, ctx.w, ctx.h)
    });
    img.src = src;
    return img
}
pathToSrc = function (path) {
    return "http://localhost:4000/" + path
}
DataFactory = function (i, c) {
    var d = {};
    i.w = i.width;
    i.h = i.h;
    d.tw = function (i, c, p) {
        return [0, 0, i.w, i.h, 0, 0, 200, 200]
    }
    d.actual = function (i, c, p) {
        return [0, 0, i.w, i.h, 0, 0, i.w, i.h]
    }
    d.most = function (i, c, p) {
        return [0, 0, i.w, i.h, 0, 0, i.w * .8, i.h * .8]
    }
    d.half = function (i, c, p) {
        return [0, 0, i.w / 2, i.h / 2, 0, 0, i.w / 2, i.h / 2]
    }
    d.big = function (i, c, p) {
        return [0, 0, i.w, i.h, 0, 0, i.w * 2, i.h * 2]
    }
    d.fit = function (i, c, p) {
        return [0, 0, i.w, i.h, 0, 0, px.c.w, px.c.h]
    }
    d.bord = function (i, c, p) {
        return [0, 0, i.w, i.h, 0 + (.5 * p), 0 + (.5 * p), c.c.w - p, c.c.h - p]
    }
    return function (style, option) {
        return d[style](i, c, option)
    }
}
drawIm = function (ctx) {
    var C = miniCtx(ctx);
    var i = wh(im());
    $(i).load(function () {
        l('i.ld');
        simpleDraw(C, i);
        BUTTONS({
            flipX: function () {
                C.T(((i.w + 1) * (-1)), ((-i.h + 1) * (-1)));
                C.R(Math.PI);
                D();
            },
            flipY: function () {
                C.R(Math.PI / 32);
                D();
            },
            moveUp: function () {
                C.T(0, -50);
                D();
            },
            moveDown: function () {
                C.T(0, 50);
                D();
            },
            moveLeft: function () {
                C.T(-50, 0);
                D();
            },
            moveRight: function () {
                C.T(50, 0);
                D();
            },
            rotateC: function () {
                C.R(rad(10));
                D();
            },
            rotateCC: function () {
                C.R(-(rad(10)));
                D();
            },
            smaller: function () {
                C.S(.9, .9);
                C.D(i, 100, 100, i.w, i.h);
            },
            bigger: function () {
                C.S(1.3, 1.3);
                C.D(i, 0, 0, i.w, i.h)
            }
        })
    })
}
drawForMe = function (img, ctx, dx, dy) {
    var C = miniCtx(ctx);
    var i = wh(img);
    return function (t) {
        switch (t) {
            case 'fl':
                C.D(i, 0, 0, i.w, i.h, dx, dy, i.w, i.h);
                break;
            case 'tp':
                C.D(i, 0, 0, i.w, i.h / 2, dx, dy, i.w, i.h / 2);
                break;
            case 'bt':
                C.D(i, 0, i.h / 2, i.w, i.h, dx, dy, i.w, i.h / 2);
                break;
            case 'lf':
                C.D(i, 0, 0, i.w / 2, i.h, dx, dy, i.w / 2, i.h);
                break;
            case 'rt':
                C.D(i, i.w / 2, 0, i.w / 2, i.h, dx, dy, i.w / 2, i.h);
                break;
        }
    }
}
DRAW = function (i, c, dx, dy) {
    return function (Sx, Sy, Sw, Sh, Dw, Dh) {
        c.drawImage(i, Sx, Sy, Sw, Sh, dx, dy, Dw, Dh)
    }
}// draw = DRAW(i, c, dx, dy) //d =  function(){draw(sx,sy,sw,sh,dw,dh)}
draw = function (img, ctx) {//source
    return function (sw, sh) {
        var sw = sw;
        var sh = sh;// sourceArea
        return function (sx, sy) {
            var sx = sx;
            var sy = sy;//sourceSelection
            return function (dw, dh) {
                var dw = dw;
                var dh = dh; //stamp
                return function (dx, dy) { //Stamp
                    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
                }
            }
        }
    }
}
stamp = function (img, ctx) {
    return draw(img, ctx)(img.width, img.height)(0, 0)(img.width, img.height)
}
STA = function (img, ctx, n) {
    var img = img;
    var ctx = ctx;
    var n = n;
    return function (x, y) {
        draw(img, ctx)(n * 100, n * 100)(0, 0)(n * 100, n * 100)(x, y)
    }
}
//s1 = stamp(chicks,c);s2 = stamp(chicks,cc);  // sta = "s1(0,0)"; st = f(sta)
Draw2 = function (img, ctx) {
    var sIm = imgDraw(img, ctx);
    var Data = DataFactory(img, ctx);
    return function (style, option) {
        sImgDraw(sIm, Data(style, option))
    }
}
LEFT = function (S) {
    return CUT(S)(0, 0)(S.width / 2, S.height)
}
drawMy = function (My) {
    cutter(My)(0, 0)(My.w, My.h)
}
scaleDraw = function (i, c) {
    c.save();
    c.scale(c.w / i.w, c.h / i.h);
    c.drawImage(i, 0, 0);
    c.restore();
}
changeData = function (d, str) {
    var f = new Function("v", "k", "l", "l[k]=" + str);
    ea(d.data, function (v, k, l) {
        f(v, k, l);
    })
}
changeData2 = function (d, str) {
    var s = "l[k]=" + str;
    $m(d.data, s);
}
gD = getData = function (c) {
    return c.getImageData(0, 0, c.w, c.h)
}
pD = putData = function (data, c) {
    c.putImageData(data, 0, 0)
}
gcp = getChangePut = function (c1, str, c2) {
    var d = gD(c1);
    cD(d, str);
    pD(d, c2);
}
DD = copyPasteData = getPutData = function (c, d) {
    pD(gD(c), d)
}
dit = function (d, str) {
    var s = "l[k]=" + str;
    $m(d.data, s);
}
cD = function (d, str) {
    var f = new Function("v", "k", "l", "l[k]=" + str);
    ea(d.data, function (v, k, l) {
        f(v, k, l)
    })
}
//dI = gD(c); da = dI.data;
// sets every fourth value to 50.. after the manipulation, reset the data and put the imagedata back to the canvas
fade = function (image) {
    var image = image;
    var imageData = image.data;
    var length = imageData.length;
    for (var i = 7; i < length; i += 4) {
        imageData[i] = 80;
    }
    ;
    image.data = imageData;
    return image;
}
pixelz = function () {
    c.drawImage(r, 0, 0, 300, 300, 0, 0, 300, 300)
    di = c.getImageData(0, 0, 300, 300)
    d = di.data
    for (var i = 0; i < imgData.data.length; i += 4) {
        d[i] = 255 - d[i];
        imgData.data[i + 1] = 255 - imgData.data[i + 1];
        imgData.data[i + 2] = 255 - imgData.data[i + 2];
        imgData.data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
    c.putImageData(di, 200, 200)
    for (var i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255 - imgData.data[i];
        imgData.data[i + 1] = 255 - imgData.data[i + 1];
        imgData.data[i + 2] = 255 - imgData.data[i + 2];
        imgData.data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
}
cutter = function (S) {
    return function (sx, sy) {
        return function (sw, sh) {
            return function (D, dx, dy, dw, dh) {
                D.drawImage(S, sx, sy, sw, sh, dx, dy, dw, dh)
            }
        }
    }
}
CUT = function (S) {
    return function (sx, sy) {
        return function (sw, sh) {
            return function (D) {
                return function (dw, dh) {
                    return function (dx, dy) {
                        D.drawImage(S, sx, sy, sw, sh, dx, dy, dw, dh)
                    }
                }
            }
        }
    }
}
getDataURL = function () {
    canvas = $('#myCanvas');
    ctx = canvas.get(0).getContext('2d');
    d(ctx);
    ctx.fillRect(10, 10, 10, 10);
    dataURL = canvas.get(0).toDataURL();
    canvas.click(function () {
        alert(dataURL)
    })
}
ctxToPng = function (ctx, name) {
    ctx.canvas.toBlob(function (blob) {
        saveAs(blob, name + ".png")
    })
}
ctxToImage = function (c) {
    var i = new Image();
    i.src = c.canvas.toDataURL("image/png");
    return i
}
pingy = function (ctx) {
    ctx.canvas.toBlob(function (blob) {
        saveAs(blob, name + ".png")
    })
}
//cutty
canvasClick = function (ctx, fxn) {//works
    ctx.canvas.onclick = function (e) {
        var X = e.clientX, Y = e.clientY;
        var left = ctx.canvas.offsetLeft;
        var top = ctx.canvas.offsetTop;
        var x = X - left;
        var y = Y - top;
        fxn(e, x, y, X, Y);
    }
}
vertex = function () {
    VX = []
}
drawVertex = function (ctx, x, y) {
    setStyles(ctx, 'white', 'black', 3);
    circ(ctx, x, y, 6)
}
addVertex = function (ctx, x, y) {
    drawVertex(ctx, x, y);
    VX.push({x: x, y: y})
}
clearVertices = function (ctx, x, y) {
    VX = [];
    resetCanvas(ctx)
}
genPath = function (ctx) {
    var start = VX.shift();
    ctx.moveTo(start.x, start.y);
    ea(VX, function (vertex, index, list) {
        ctx.lineTo(vertex.x, vertex.y)
    });
    VX = [];
    c.closePath();
}
makePath = function (ctx) {
    CLR(ctx);
    var start = VX.shift();
    ctx.moveTo(start.x, start.y);
    _.each(VX, function (vertex, index, list) {
        ctx.lineTo(vertex.x, vertex.y)
    });
    ctx.fill();
    ctx.closePath();
    ctx.clip();
    imgCan(ctx, src)
}
makeCut = function (ctx) {
    ctx.save();
    clearCanvas(ctx);
    genPath(ctx);
    ctx.clip();
    dO(me, c)
};// c.restore();} //G = function() {dat= getData(c) };P = function() {putData(dat,c) }
getCut = function (ctx) {
    l('getCut')
    var copy = gD(ctx);
    CLR(ctx);
    var start = VX.shift();
    ctx.moveTo(start.x, start.y)
    _.each(VX, function (vx, index, list) {
        ctx.lineTo(vx.x, vx.y)
    })
    ctx.closePath();
    ctx.clip();
    pD(copy, ctx)
}
//canvasClick(ctx, function(e,x,y){dVX(c, x, y); VX.push( {x:x,y:y})})}
//canvasClick(clr, function(e,x,y){reset(c);VX=[]})
//canvasClick(cut, function(){clr(c); getCut(c);})                       // and then: "t()"    ??? wtf
//dI = getData(c);da=dI.data;
// s1 = stamp(chicks,c);s2 = stamp(chicks,cc);
// t = function(){s1(0,0)}; tt = function(){ c.drawImage(chicks,0,0)}; ttt = function(){ cc.drawImage(chicks,20,20)};
pingy = function (ctx) {
    ctx.canvas.toBlob(function (blob) {
        saveAs(blob, name + ".png")
    })
}
blobFile = function (ctx) {
    ctx.canvas.toBlob(function (blob) {
        var formData = new FormData();
        formData.append("cutout", blob);
        var oReq = new XMLHttpRequest();
        oReq.open("POST", "http://localhost:4000/cutty");
        oReq.send(formData);
    })
}
// 1 make circles on canvas  2 make them in response to mouse click         /
// 3 store them in an array     4 gen path from array  5 use outside of path as clipping region
// 6 apply transparency to clipping region, 7 get imageData of new canvas  8 save it as a cutty!
//make clipping region from a circle?a
// my2y = CUT(My)(0,0)(My.w, My.h)(blue)(My.w,My.h)// onY = cutY = function(what){what(img,yellow, 10,10)}  // onB = cutB = function(what){what(img,blue, 10,10)}
//ii.src = "http://localhost:4000/" + imagePath;
//var can = document.getElementById('canvas'); canvas = $('#can'); can = canvas.get(0); ctx = can.getContext('2d');
////////////////////
// f = function(def){return new Function(def)}
// bigger:f(img,"ctx.scale(1.3,1.3);  ctx.drawImage(I, 0, 0, img.width, img.height)")
// can.width = img.width;   can.height = img.height;
//src = '/0cf14fee2317209e455ed59feb89a8c8.jpg'
//$('#invert').click(   invert   ); $('#grayscale').click(
//function flipY () {ctx.translate(img.width-1, img.height-1);    ctx.rotate(Math.PI);    ctx.drawImage(img, 0, 0, img.width, img.height);}
/*
 / This is the canvas where you want to draw
 var canvas = document.getElementById('your-canvas');
 var ctx = canvas.getContext('2d');
 // I'll use a skyblue background that covers everything
 // Just to demonstrate - ctx.fillStyle = "skyblue"; ctx.fillRect(0, 0, canvas.width, canvas.height);
 // Create a canvas that we will use as a mask
 var maskCanvas = document.createElement('canvas');
 // Ensure same dimensions - maskCanvas.width = canvas.width; - maskCanvas.height = canvas.height;
 var maskCtx = maskCanvas.getContext('2d');
 // This color is the one of the filled shape
 maskCtx.fillStyle = "black";
 // Fill the mask - maskCtx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);
 // Set xor operation - maskCtx.globalCompositeOperation = 'xor';
 // Draw the shape you want to take out - maskCtx.arc(30, 30, 10, 0, 2 * Math.PI);  maskCtx.fill();
 // Draw mask on the image, and done !  - ctx.drawImage(maskCanvas, 0, 0);​*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
