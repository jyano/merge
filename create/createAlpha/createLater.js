



function later(){

    cjs.stop = function () {
        alert('cjs.stop')
        cjs.Ticker.removeAllEventListeners()

    }
    tickX = function (e) {
        alert('tickX')
        j.Y(e.delta / 1000 * 100, '-')
    }
    timeStamp2 = function (s, j, pxPerSec) {
        alert('timeStamp2')
        var fn = function (s, e) {

            if (!N(j.ts)) {
                j.ts = 0;
                j.lts = e.ts
            }

            else {
                j.ts = e.ts - j.lts;
                j.lts = e.ts

                j.y((j.ts / 1000) * pxPerSec, '-')
            }
        }
        return s.t(fn)
    }

    cjs.tick2 = function (func) {
        alert('cjs.tick2')
        cjs.Ticker.addEventListener('tick', func)
        return cjs.Ticker
    }
    cjs.stopListening = function () {
        alert('cjs.stopListening')
        cjs.Ticker.removeAllEventListeners()
    }
    function toSpaz(){
        ct = cjs.Container.prototype

        ///WARNING ..USED B2D.ISGPOLY TO MAKE DOT
        ct.dot = function (c, x, y) {
            var that = this,
                s = this,
                dot,
                tween

            if (b2d.isGPoly(c)) {
                _.each(c.verts(), function (v) {
                    s.dot(V(v))
                })
                return this
            }

            if (A(c)) {

                _.each(c,
                    function (G) {
                        if (A(G)) {
                            s.dot.apply(s, G)
                        }
                        else {
                            s.dot(G)
                        }
                    })

                return
            }

            if (!S(c)) {
                y = x;
                x = c;
                c = 'y'
            }

            if (O(x)) {
                y = x.y;
                x = x.x
            }

            x = N(x) ? x : s.W() / 2
            y = N(y) ? y : s.H() / 2

            //dot = s.circ(x,y, 6,  oO('c', c)).drag()//.opacity(.4)

            //dot = s.h(x,y).circ(0,0, 6,  oO('c', c)).drag()//.opacity(.4)

            dot = s.h(x, y).circ(8, c, c).drag()

            tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()

            dot.$$(function () {
                tween.toggle()
            })

            dot.N('dot')

            return s
        }

    }
    cjs.chalk = function (t, c) {
        if (O(t)) {t = 'x: ' + t.x + ', ' + 'y: ' + t.y}
        return new J.Text(t, "26px Arial", oO('c', c || 'white')).XY(50, 50)
    }
    ct.squareDot=function(color, x, y){var squareDot, tween
        if(!S(color)){y=x; x=color; color='orange'}
        if(O(x)){y= x.y;x= x.x  }
        x= N(x)? x:300
        y= N(y)? y:300
        __squareDot = squareDot = J.rect(20, 20, oO('c', color))//.opacity(.4)
        this.A(squareDot.XY(x, y)//.drag()
        )
        //tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()

        // dot.$$(function(){tween.toggle()})

        return this}
    ct.chalk=function(){
        var height = 50,
            that=this,
            text

        _.each(arguments, function(arg){

            text = J.chalk(arg).Y(height).X(50 - that.X())
            height+=40
            that.A(text)

        })


        return text}
    ct.pen = function self(arg){

        var that=this


        if(O(self.text)){
            self.text.remove()
        }

        self.text = J.chalk(arg).Y(50).X(50 - that.X())

        that.A(self.text)


        return self.text}

//alert

    bmp()
    function bmp(){
        SuperBitmap = SuperBitmapSync = bm = function (img, stage) {
            alert('SuperBitmap')
            var superBitmap = Do(new cjs.Bitmap(src(img)))

            if (O(stage)) {
                stage.a(superBitmap)
            }

            return superBitmap
        }
        SuperBitmapAsync = function (i, fn) {
            alert('SuperBitmapAsync')
//source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object will be constructed and assigned to the .image property.
            i = i[0]
            if (O(i) && S(i.d)) {
                i = i.d
            }
            $.i(i, function (img) {
                bm = $Bm(img)
                if (F(fn)) {
                    fn(bm)
                }
                if (S(fn)) {
                    $w[fn] = bm
                }
            })

            return i
        }
        cjs.BmSync = function (i, st) {
            alert('BmSync')
            var bm = $Bm(src(i[0]))

            if (O(st)) {
                st.A(bm)
            }

            return bm
        }
        cjs.Bm = $bitmapAsync = Bm = function (img, fn) {
            alert('cjs.Bm $bitmanpAsync Bm')
//source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object will be constructed and assigned to the .image property.
            if (O(img) && S(img.d)) {
                img = img.d
            }
            $.i(img, function (i) {
                bm = $Bm(i)
                if (F(fn)) {
                    fn(bm)
                }
                if (S(fn)) {
                    $w[fn] = bm
                }
            })
            return img
        }
    }
    $.colorPicker = $.ColorPicker = function () {
        alert('$.colorPicker')
        z()

        colorPicker = $(' <input id="color" name="color" type="color">').appendTo($('body'))

        colorPicker.change(function () {
            $l(colorPicker.val())
        })

    }
    cjs.toColor = toColor = tCl = function (n1, n2, n3, n4) {
        alert('cjs.toColor')
        return n2 ? "rgba(" + n1 + "," + n2 + "," + "" + n3 + "," + (n4 || 1) + ")"
            :
            $r('c', n1)
    }


    //obPhysics()
    function obPhysics() {
//easel physics.. ugh

        ob.accelerate = function () {
            return this.vX(this.ax || 0, '+').vY(this.ay || 0, '+')
        }
        ob.jerk = function () {
            return this.aX(this.jx || 0, '+').aY(this.jy || 0, '+')
        }


        ob.brake = function () {
            this.vx = this.vy = 0
        }
        ob.toR = p.moveRight = function (num) {
            num = num || 20
            this.X(num, '+')
            return this
        }
        ob.toL = p.moveLeft = function (num) {
            num = num || 20
            this.X(num, '-')
            return this
        }
        ob.toU = p.moveDown = function (num) {
            num = num || 20
            this.Y(num, '-')
            return this
        }
        ob.toD = p.moveDown = function (num) {
            num = num || 20

            this.Y(num, '+')
            return this
        }
        ob.keyControls = function (num) {
            var args = G(arguments),
                ob = this

            if (args.P) {
                $.kD('left', function () {
                    ob.toL(num)
                })
                $.kD('right', function () {
                    ob.toR(num)
                })
            }

            if (args.N) {
                $.kD('up', function () {
                    ob.toU(num)
                })
                $.kD('down', function () {
                    ob.toD(num)
                })
            }
        }
        ob.shootBullet = function () {
            shooter = this
            st = shooter.st()
            bu = cjs.cir(8, 'w').XY(shooter).a2(st)
            bu.startMoving((shooter.vx || 1) * 1.5, (shooter.vy || 1) * 1.5)

        }
        ob.hitByBullet = ob.isPointInMyRectBounds = function () {
            var ob = this, g = G(arguments),

                bu = g[0],
                didHit = M.pointInRectangle(bu.cX(), bu.cY(), {x: ob.cX(), y: ob.cY(), w: ob.W(), h: ob.H()})
            if (g.n && didHit) {
                ob.rm()
            }
            return didHit
        }
//chick for hits and remove if a hit
        ob.killAllIAmHitting = function () {
            var ob = this,
                stage = this.getStage()

            _.each(stage.children, function (obj) {

                if (ob != obj) {

                    obj.hitByBullet(ob, '-')

                }
            })

        }
        ob.makeMeAKiller = function () {
            var ob = this
            cjs.tick(function () {
                ob.killAllIAmHitting()
            })
            return this
        }

    }


    sav = function (st, a) {
        return function () {
            alert('sav')
            st.sv(a)
        }
    }
    function maybe() {

        cjs.HSL = function (a, b, c) {
            if (U(a)) {
                return HSL(M.rand() * 360, 100, 50)
            }
            return cjs.Graphics.getHSL(a, b, c)
        }
        eventDisp()
        function eventDisp() {
            p = cjs.EventDispatcher.prototype
            p.init = function () {
                this.initialize.apply(this, arguments)
                return this
            }
        }

    }


    old=function(){
        cjs.circle2 = function (r, z, x, y) {
            gx = new cjs.Graphics()
            if (!S(r)) {
                return cjs.circle2('red', r, z, x)
            }
            z = _.tN(z, 32)
            x = _.tN(x, 100)
            y = _.tN(y, 100)
            gx.ss(z / 8).f(r, 'black').dc(z)
            return cjs.h(gx).XY(x, y)
        }
        cjs.circle3 = function (x, y, r, c, C) {

            var h = cjs.shape()
            if (O(x)) {
                return cjs.circle3(x.x, x.y, x.r, x.c, x.C)
            }

            x = _.tN(x)
            y = _.tN(y)
            r = _.tN(r, 8)

            h.cir(x, y, r, c || 'w', C || 'z')
            SL(h)
            return h
        }
        cjs.box = function (w, h, fc, sc) {

            w = w || 200

            h = h || w

            var b = rct(
                0 - w / 2, 0 - h / 2, w, h, fc, sc
            )

            b.wr = w / 2

            b.hr = h / 2

            b.wd = w

            b.hd = h


            b.top = b.T = function (a) {
                if (U(a)) {
                    return b.y() - b.hr
                }

                b.y(a + b.hr)

                return b
            }

            b.bottom = b.B = function (a) {

                if (U(a)) {
                    return b.y() + b.hr
                }


                b.y(a - b.hr)

                return b
            }

            b.left = b.L = function (a) {

                if (U(a)) {
                    return b.x() - b.wr
                }

                b.x(a + b.wr)

                return b
            }

            b.right = b.R = function (a) {

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
        cjs.ballBox = function (bl, bx, buff) {
            buff = buff || 100
            var b = bl.bottom() >= bx.top() && bl.top() <= bx.top() + buff &&
                bl.x() >= bx.left() && bl.x() <= bx.right()
            if (b) {
                bl.bottom(bx.top())
            }
            return b
        }
        cjs.ball = function (r, c, C) {//canon

            var b = cjs.circle(0, 0, r, c, C)

            b.d = r + r

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

                b.y(a - b.r)

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
    }
    cjs.M = function (rot) {
        alert('cjs.M')
        var m = new cjs.Matrix2D()
        if (N(rot)) {m.rotate(rot)}
        return m}
    $Tc=function(a,f,c,x,y){alert('$Tc')
        var t= $T(a,f,c,x,y)
        t.tA('center')
        return t
    }
    ct.art = function (x, y, c, C) {
        alert('ct.art')
        var g = G(arguments), ct = this, h
        if (U(x)) {
            alert('must at LEAST define x');
            return
        }
        if (!N(x)) {
            alert('x not a number! but must be, lah');
            return
        }

        y = N(g[1]) ? g[1] : x
        c = S(g[2]) ? oO('c', g[2]) : null
        C = S(g[2]) ? oO('c', g[3]) : c
        h = cjs.h(x, y, c, C).a2(ct)
        if (g.p) {
            h.drag()
        }
        return h
    }
    st.trDr = function () {alert('st.trDr')
        var st = this
        st._md = 0
        st.MD(function () {
            st._md = 1
        })
        st.MU(function () {
            st._md = 0
        })
        return this
    }
    st.du = function () {
        alert('st.du')
        return this.canvas.toDataURL()
    }
    st.snap = function (f) {
        alert('st.snap')
        var st = this
        $.P('img', {d: st.toDataURL()})//, dats: o.x.dats
        $.in(1, f)
        return st
    }
    cjs.mXY = function (o, s) {
        alert('cjs.mXY')
        xy(o, s.mx(), s.my())
        return o
    } //mxy
    ct.bData = function (data) {
        alert('ct.bData')
        return J.bm($.i().src($.parseJSON(data))).a2(this)
    }
    ct.bData = function (data) {
        alert('ct.bData')
        return J.bm($.i().src($.parseJSON(data))).a2(this)
    }
    st.snap = function (f) {alert('st.snap')
        var st = this
        $.P('img', {d: st.toDataURL()})//, dats: o.x.dats
        $.in(1, f)
        return st
    }
    st.trDr = function () {
        alert('st.trDr')
        var st = this
        st._md = 0
        st.MD(function () {
            st._md = 1
        })
        st.MU(function () {
            st._md = 0
        })
        return this
    }
    ct.st = function(){
        alert('ct.st')
        return this.getStage() }//ct.st = function () {return this.stage}
}
cjs.Keys = function(o){
    alert('cjs.Keys')
    if(O(o)){
        if(F(o.u)){
            cjs.tick(function(){if(cjs.Keys.u){ o.u(cjs.Keys.u) } })}
        if(F(o.d)){
            cjs.tick(function(){
                if(cjs.Keys.d){ o.d(cjs.Keys.d) } })
        }
        if(F(o.l)){
            cjs.tick(function(){
                if(cjs.Keys.l){
                    o.l(cjs.Keys.l)
                } })}
        if(F(o.r)){
            cjs.tick(function(){if(cjs.Keys.r){
                o.r(cjs.Keys.r)
            } })
        }
    }
}
cjs.watchKeys=function(){
    alert('cjs.watchKeys')
    cjs.Keys.l = cjs.Keys.left = false
    cjs.Keys.r = cjs.Keys.right = false
    cjs.Keys.u = cjs.Keys.up = false
    cjs.Keys.d = cjs.Keys.down = false
    $.kD('l',function(){
        if($.test){$l('left pressed')}
        cjs.Keys.l = cjs.Keys.left = true
        cjs.Keys.dir = 'left'})
    $.kU('l',function(){if($.test){$l('left lifted')}
        cjs.Keys.l = cjs.Keys.left = false
    })
    $.kD('r',function(){if($.test){$l('right pressed')}
        cjs.Keys.r = cjs.Keys.right = true
        cjs.Keys.dir = 'right'})
    $.kU('r',function(){if($.test){$l('right lifted')}
        cjs.Keys.r = cjs.Keys.right = false
    })
    $.kD('u',function(){if($.test){$l('up pressed')}
        cjs.Keys.u = cjs.Keys.up = true
    })
    $.kU('u',function(){if($.test){$l('up lifted')}
        cjs.Keys.u = cjs.Keys.up = false
    })
    $.kD('d',function(){if($.test){$l('down pressed')}
        cjs.Keys.d = cjs.Keys.down = true
    })
    $.kU('d',function(){
        if($.test){$l('down lifted')}
        cjs.Keys.d = cjs.Keys.down = false
    })
}
TESTWATCHKEYS=function(){z()
    $.test=true
    cjs.watchKeys()
}
KEYWATCH = function(){
    J=cjs
    $.test=true
    J.Keys.l = J.Keys.left = false
    J.Keys.r = J.Keys.right = false
    J.Keys.u = J.Keys.up = false
    J.Keys.d = J.Keys.down = false
    $.kU('l',function(){
        if($.test){$l('left lifted')}
        J.Keys.l = J.Keys.left = false
    })
    $.kD('l',function(){
        if($.test){$l('left pressed')}
        J.Keys.l = J.Keys.left = true
        J.Keys.dir = 'left'})
    $.kD('l',function(){
        if($.test){$l('left pressed')}
        J.Keys.l = J.Keys.left = true
        J.Keys.dir = 'left'})
    $.kD('r',function(){if($.test){$l('right pressed')}
        J.Keys.r = J.Keys.right = true
        J.Keys.dir = 'right'})
    $.kU('r',function(){if($.test){$l('right lifted')}
        J.Keys.r = J.Keys.right = false
    })
    $.kD('u',function(){if($.test){$l('up pressed')}
        J.Keys.u = J.Keys.up = true
    })
    $.kU('u',function(){if($.test){$l('up lifted')}
        J.Keys.u = J.Keys.up = false
    })
    $.kD('d',function(){if($.test){$l('down pressed')}
        J.Keys.d = J.Keys.down = true})
    $.kU('d',function(){if($.test){$l('down lifted')}
        J.Keys.d = J.Keys.down = false
    })
}
function later() {
	cjs.stop = function () {
		alert('cjs.stop')
		cjs.Ticker.removeAllEventListeners()
	}
	tickX = function (e) {
		alert('tickX')
		j.Y(e.delta / 1000 * 100, '-')
	}
	timeStamp2 = function (s, j, pxPerSec) {
		alert('timeStamp2')
		var fn = function (s, e) {
			if (!N(j.ts)) {
				j.ts = 0;
				j.lts = e.ts
			}
			else {
				j.ts = e.ts - j.lts;
				j.lts = e.ts
				j.y((j.ts / 1000) * pxPerSec, '-')
			}
		}
		return s.t(fn)
	}
	cjs.tick2 = function (func) {
		alert('cjs.tick2')
		cjs.Ticker.addEventListener('tick', func)
		return cjs.Ticker
	}
	cjs.stopListening = function () {
		alert('cjs.stopListening')
		cjs.Ticker.removeAllEventListeners()
	}
	function toSpaz() {
		ct = cjs.Container.prototype
		///WARNING ..USED B2D.ISGPOLY TO MAKE DOT
		ct.dot = function (c, x, y) {
			var that = this,
					s = this,
					dot,
					tween
			if (b2d.isGPoly(c)) {
				_.each(c.verts(), function (v) {
					s.dot(V(v))
				})
				return this
			}
			if (A(c)) {
				_.each(c,
						function (G) {
							if (A(G)) {
								s.dot.apply(s, G)
							}
							else {
								s.dot(G)
							}
						})
				return
			}
			if (!S(c)) {
				y = x;
				x = c;
				c = 'y'
			}
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			x = N(x) ? x : s.W() / 2
			y = N(y) ? y : s.H() / 2
			//dot = s.circ(x,y, 6,  oO('c', c)).drag()//.opacity(.4)
			//dot = s.h(x,y).circ(0,0, 6,  oO('c', c)).drag()//.opacity(.4)
			dot = s.h(x, y).circ(8, c, c).drag()
			tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
			dot.$$(function () {
				tween.toggle()
			})
			dot.N('dot')
			return s
		}
	}
	
	cjs.chalk = function (t, c) {
		if (O(t)) {
			t = 'x: ' + t.x + ', ' + 'y: ' + t.y
		}
		return new J.Text(t, "26px Arial", oO('c', c || 'white')).XY(50, 50)
	}
	ct.squareDot = function (color, x, y) {
		var squareDot, tween
		if (!S(color)) {
			y = x;
			x = color;
			color = 'orange'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 300
		y = N(y) ? y : 300
		__squareDot = squareDot = J.rect(20, 20, oO('c', color))//.opacity(.4)
		this.A(squareDot.XY(x, y)//.drag()
		)
		//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
		// dot.$$(function(){tween.toggle()})
		return this
	}
	ct.chalk = function () {
		var height = 50,
				that = this,
				text
		_.each(arguments, function (arg) {
			text = J.chalk(arg).Y(height).X(50 - that.X())
			height += 40
			that.A(text)
		})
		return text
	}
	ct.pen = function self(arg) {
		var that = this
		if (O(self.text)) {
			self.text.remove()
		}
		self.text = J.chalk(arg).Y(50).X(50 - that.X())
		that.A(self.text)
		return self.text
	}
//alert
	bmp()
	function bmp() {
		SuperBitmap = SuperBitmapSync = bm = function (img, stage) {
			alert('SuperBitmap')
			var superBitmap = Do(new cjs.Bitmap(src(img)))
			if (O(stage)) {
				stage.a(superBitmap)
			}
			return superBitmap
		}
		SuperBitmapAsync = function (i, fn) {
			alert('SuperBitmapAsync')
//source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object will be constructed and assigned to the .image property.
			i = i[0]
			if (O(i) && S(i.d)) {
				i = i.d
			}
			$.i(i, function (img) {
				bm = $Bm(img)
				if (F(fn)) {
					fn(bm)
				}
				if (S(fn)) {
					$w[fn] = bm
				}
			})
			return i
		}
		cjs.BmSync = function (i, st) {
			alert('BmSync')
			var bm = $Bm(src(i[0]))
			if (O(st)) {
				st.A(bm)
			}
			return bm
		}
		cjs.Bm = $bitmapAsync = Bm = function (img, fn) {
			alert('cjs.Bm $bitmanpAsync Bm')
//source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object will be constructed and assigned to the .image property.
			if (O(img) && S(img.d)) {
				img = img.d
			}
			$.i(img, function (i) {
				bm = $Bm(i)
				if (F(fn)) {
					fn(bm)
				}
				if (S(fn)) {
					$w[fn] = bm
				}
			})
			return img
		}
	}
	
	$.colorPicker = $.ColorPicker = function () {
		alert('$.colorPicker')
		z()
		colorPicker = $(' <input id="color" name="color" type="color">').appendTo($('body'))
		colorPicker.change(function () {
			$l(colorPicker.val())
		})
	}
	cjs.toColor = toColor = tCl = function (n1, n2, n3, n4) {
		alert('cjs.toColor')
		return n2 ? "rgba(" + n1 + "," + n2 + "," + "" + n3 + "," + (n4 || 1) + ")"
				:
				$r('c', n1)
	}
	//obPhysics()
	function obPhysics() {
//easel physics.. ugh
		ob.accelerate = function () {
			return this.vX(this.ax || 0, '+').vY(this.ay || 0, '+')
		}
		ob.jerk = function () {
			return this.aX(this.jx || 0, '+').aY(this.jy || 0, '+')
		}
		ob.brake = function () {
			this.vx = this.vy = 0
		}
		ob.toR = p.moveRight = function (num) {
			num = num || 20
			this.X(num, '+')
			return this
		}
		ob.toL = p.moveLeft = function (num) {
			num = num || 20
			this.X(num, '-')
			return this
		}
		ob.toU = p.moveDown = function (num) {
			num = num || 20
			this.Y(num, '-')
			return this
		}
		ob.toD = p.moveDown = function (num) {
			num = num || 20
			this.Y(num, '+')
			return this
		}
		ob.keyControls = function (num) {
			var args = G(arguments),
					ob = this
			if (args.P) {
				$.kD('left', function () {
					ob.toL(num)
				})
				$.kD('right', function () {
					ob.toR(num)
				})
			}
			if (args.N) {
				$.kD('up', function () {
					ob.toU(num)
				})
				$.kD('down', function () {
					ob.toD(num)
				})
			}
		}
		ob.shootBullet = function () {
			shooter = this
			st = shooter.st()
			bu = cjs.cir(8, 'w').XY(shooter).a2(st)
			bu.startMoving((shooter.vx || 1) * 1.5, (shooter.vy || 1) * 1.5)
		}
		ob.hitByBullet = ob.isPointInMyRectBounds = function () {
			var ob = this, g = G(arguments),
					bu = g[0],
					didHit = M.pointInRectangle(bu.cX(), bu.cY(), {x: ob.cX(), y: ob.cY(), w: ob.W(), h: ob.H()})
			if (g.n && didHit) {
				ob.rm()
			}
			return didHit
		}
//chick for hits and remove if a hit
		ob.killAllIAmHitting = function () {
			var ob = this,
					stage = this.getStage()
			_.each(stage.children, function (obj) {
				if (ob != obj) {
					obj.hitByBullet(ob, '-')
				}
			})
		}
		ob.makeMeAKiller = function () {
			var ob = this
			cjs.tick(function () {
				ob.killAllIAmHitting()
			})
			return this
		}
	}
	
	sav = function (st, a) {
		return function () {
			alert('sav')
			st.sv(a)
		}
	}
	function maybe() {
		cjs.HSL = function (a, b, c) {
			if (U(a)) {
				return HSL(M.rand() * 360, 100, 50)
			}
			return cjs.Graphics.getHSL(a, b, c)
		}
		eventDisp()
		function eventDisp() {
			p = cjs.EventDispatcher.prototype
			p.init = function () {
				this.initialize.apply(this, arguments)
				return this
			}
		}
	}
	
	old = function () {
		cjs.circle2 = function (r, z, x, y) {
			gx = new cjs.Graphics()
			if (!S(r)) {
				return cjs.circle2('red', r, z, x)
			}
			z = _.tN(z, 32)
			x = _.tN(x, 100)
			y = _.tN(y, 100)
			gx.ss(z / 8).f(r, 'black').dc(z)
			return cjs.h(gx).XY(x, y)
		}
		cjs.circle3 = function (x, y, r, c, C) {
			var h = cjs.shape()
			if (O(x)) {
				return cjs.circle3(x.x, x.y, x.r, x.c, x.C)
			}
			x = _.tN(x)
			y = _.tN(y)
			r = _.tN(r, 8)
			h.cir(x, y, r, c || 'w', C || 'z')
			SL(h)
			return h
		}
		cjs.box = function (w, h, fc, sc) {
			w = w || 200
			h = h || w
			var b = rct(
					0 - w / 2, 0 - h / 2, w, h, fc, sc
			)
			b.wr = w / 2
			b.hr = h / 2
			b.wd = w
			b.hd = h
			b.top = b.T = function (a) {
				if (U(a)) {
					return b.y() - b.hr
				}
				b.y(a + b.hr)
				return b
			}
			b.bottom = b.B = function (a) {
				if (U(a)) {
					return b.y() + b.hr
				}
				b.y(a - b.hr)
				return b
			}
			b.left = b.L = function (a) {
				if (U(a)) {
					return b.x() - b.wr
				}
				b.x(a + b.wr)
				return b
			}
			b.right = b.R = function (a) {
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
		cjs.ballBox = function (bl, bx, buff) {
			buff = buff || 100
			var b = bl.bottom() >= bx.top() && bl.top() <= bx.top() + buff &&
					bl.x() >= bx.left() && bl.x() <= bx.right()
			if (b) {
				bl.bottom(bx.top())
			}
			return b
		}
		cjs.ball = function (r, c, C) {//canon
			var b = cjs.circle(0, 0, r, c, C)
			b.d = r + r
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
				b.y(a - b.r)
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
	}
	cjs.M = function (rot) {
		alert('cjs.M')
		var m = new cjs.Matrix2D()
		if (N(rot)) {
			m.rotate(rot)
		}
		return m
	}
	$Tc = function (a, f, c, x, y) {
		alert('$Tc')
		var t = $T(a, f, c, x, y)
		t.tA('center')
		return t
	}
	ct.art = function (x, y, c, C) {
		alert('ct.art')
		var g = G(arguments), ct = this, h
		if (U(x)) {
			alert('must at LEAST define x');
			return
		}
		if (!N(x)) {
			alert('x not a number! but must be, lah');
			return
		}
		y = N(g[1]) ? g[1] : x
		c = S(g[2]) ? oO('c', g[2]) : null
		C = S(g[2]) ? oO('c', g[3]) : c
		h = cjs.h(x, y, c, C).a2(ct)
		if (g.p) {
			h.drag()
		}
		return h
	}
	st.trDr = function () {
		alert('st.trDr')
		var st = this
		st._md = 0
		st.MD(function () {
			st._md = 1
		})
		st.MU(function () {
			st._md = 0
		})
		return this
	}
	st.du = function () {
		alert('st.du')
		return this.canvas.toDataURL()
	}
	st.snap = function (f) {
		alert('st.snap')
		var st = this
		$.P('img', {d: st.toDataURL()})//, dats: o.x.dats
		$.in(1, f)
		return st
	}
	cjs.mXY = function (o, s) {
		alert('cjs.mXY')
		xy(o, s.mx(), s.my())
		return o
	} //mxy
	ct.bData = function (data) {
		alert('ct.bData')
		return J.bm($.i().src($.parseJSON(data))).a2(this)
	}
	ct.bData = function (data) {
		alert('ct.bData')
		return J.bm($.i().src($.parseJSON(data))).a2(this)
	}
	st.snap = function (f) {
		alert('st.snap')
		var st = this
		$.P('img', {d: st.toDataURL()})//, dats: o.x.dats
		$.in(1, f)
		return st
	}
	st.trDr = function () {
		alert('st.trDr')
		var st = this
		st._md = 0
		st.MD(function () {
			st._md = 1
		})
		st.MU(function () {
			st._md = 0
		})
		return this
	}
	ct.st = function () {
		alert('ct.st')
		return this.getStage()
	}//ct.st = function () {return this.stage}
}
cjs.Keys = function (o) {
	alert('cjs.Keys')
	if (O(o)) {
		if (F(o.u)) {
			cjs.tick(function () {
				if (cjs.Keys.u) {
					o.u(cjs.Keys.u)
				}
			})
		}
		if (F(o.d)) {
			cjs.tick(function () {
				if (cjs.Keys.d) {
					o.d(cjs.Keys.d)
				}
			})
		}
		if (F(o.l)) {
			cjs.tick(function () {
				if (cjs.Keys.l) {
					o.l(cjs.Keys.l)
				}
			})
		}
		if (F(o.r)) {
			cjs.tick(function () {
				if (cjs.Keys.r) {
					o.r(cjs.Keys.r)
				}
			})
		}
	}
}
cjs.watchKeys = function () {
	alert('cjs.watchKeys')
	cjs.Keys.l = cjs.Keys.left = false
	cjs.Keys.r = cjs.Keys.right = false
	cjs.Keys.u = cjs.Keys.up = false
	cjs.Keys.d = cjs.Keys.down = false
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		cjs.Keys.l = cjs.Keys.left = true
		cjs.Keys.dir = 'left'
	})
	$.kU('l', function () {
		if ($.test) {
			$l('left lifted')
		}
		cjs.Keys.l = cjs.Keys.left = false
	})
	$.kD('r', function () {
		if ($.test) {
			$l('right pressed')
		}
		cjs.Keys.r = cjs.Keys.right = true
		cjs.Keys.dir = 'right'
	})
	$.kU('r', function () {
		if ($.test) {
			$l('right lifted')
		}
		cjs.Keys.r = cjs.Keys.right = false
	})
	$.kD('u', function () {
		if ($.test) {
			$l('up pressed')
		}
		cjs.Keys.u = cjs.Keys.up = true
	})
	$.kU('u', function () {
		if ($.test) {
			$l('up lifted')
		}
		cjs.Keys.u = cjs.Keys.up = false
	})
	$.kD('d', function () {
		if ($.test) {
			$l('down pressed')
		}
		cjs.Keys.d = cjs.Keys.down = true
	})
	$.kU('d', function () {
		if ($.test) {
			$l('down lifted')
		}
		cjs.Keys.d = cjs.Keys.down = false
	})
}
TESTWATCHKEYS = function () {
	z()
	$.test = true
	cjs.watchKeys()
}
KEYWATCH = function () {
	J = cjs
	$.test = true
	J.Keys.l = J.Keys.left = false
	J.Keys.r = J.Keys.right = false
	J.Keys.u = J.Keys.up = false
	J.Keys.d = J.Keys.down = false
	$.kU('l', function () {
		if ($.test) {
			$l('left lifted')
		}
		J.Keys.l = J.Keys.left = false
	})
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		J.Keys.l = J.Keys.left = true
		J.Keys.dir = 'left'
	})
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		J.Keys.l = J.Keys.left = true
		J.Keys.dir = 'left'
	})
	$.kD('r', function () {
		if ($.test) {
			$l('right pressed')
		}
		J.Keys.r = J.Keys.right = true
		J.Keys.dir = 'right'
	})
	$.kU('r', function () {
		if ($.test) {
			$l('right lifted')
		}
		J.Keys.r = J.Keys.right = false
	})
	$.kD('u', function () {
		if ($.test) {
			$l('up pressed')
		}
		J.Keys.u = J.Keys.up = true
	})
	$.kU('u', function () {
		if ($.test) {
			$l('up lifted')
		}
		J.Keys.u = J.Keys.up = false
	})
	$.kD('d', function () {
		if ($.test) {
			$l('down pressed')
		}
		J.Keys.d = J.Keys.down = true
	})
	$.kU('d', function () {
		if ($.test) {
			$l('down lifted')
		}
		J.Keys.d = J.Keys.down = false
	})
}
function notGood() {
	RR = ROUNDREC = function () {
		St()
		h.c('b', 'r', 5).dc(100, 100, 100)
		h.dr(300, 200, 100, 50)
		h.dr2(500, 200, 100, 50)
		h.rr2(500, 200, 100, 50, 50)
		h.de2(500, 200, 100, 50)
		/*
		 s.dot(100, 100)
		 s.dot(300, 200)
		 s.dot(500, 200)
		 s.dot(500, 200)
		 s.dot(500, 200)
		 */
	}
}
function old() {
	h.rectx = function (x, y, W, H, c, C) {
		var h = this
		var o = {
			x: x, y: y, w: W, h: H, c: c, C: C
		}
		return h.c(o).dr2(o.x, o.y, o.w, o.h)
	}
	h.dr2x = function (x, y, W, H) {
		var h = this
		if (U(W)) {
			W = x;
			H = y;
			x = 0;
			y = 0
		}
		h.dr(-W / 2 + x, -H / 2 + y, W, H)
		return h
	}// s.B = function(x,y){return this.ct(x,y).drag() }
}
//alert
cjs.rect2 = function self(width, height, x, y, fc, sc) {
	alert('cjs.rect2')
	width = width || 100
	height = height || width
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	fc = fc || 'green'
	sc = sc || 'white'
	halfwidth = width / 2
	halfheight = height / 2
	var h = new createjs.Shape()
	h.graphics.f(fc).s(sc)
			.mt(-halfwidth + x, -halfheight + y)
			.lt(-halfwidth + x, halfheight + y)
			.lt(halfwidth + x, halfheight + y)
			.lt(halfwidth + x, -halfheight + y)
			.lt(-halfwidth + x, -halfheight + y)
	return h
}
cjs.rect = function self(width, height, fc, sc) {
	alert('cjs.rect')
	width = width || 100
	height = height || width
	fc = fc || 'green'
	sc = sc || 'white'
	halfwidth = width / 2
	halfheight = height / 2
	var h = new cjs.Shape()
	h.graphics.f(fc).s(sc)
			.mt(-halfwidth, -halfheight)
			.lt(-halfwidth, halfheight).lt(halfwidth, halfheight)
			.lt(halfwidth, -halfheight).lt(-halfwidth, -halfheight)
	return h
}
cjs.RECT = function (c, W, H, x, y, a) {
	alert('cjs.RECT')
	var g = G(arguments), ct = cjs.ct(), h, o;
	if (O(c)) {
		o = c
	} else if (S(c)) {
		o = {c: c, w: W, h: H, x: x, y: y, a: a}
	}
	o = oDef(o)
	h = ct.h(o.x, o.y).c(o.c, o.C, o.l).rot(o.a)
	if (o.bm) {
		h.bm('me', function () {
			h.dr2(o.x, o.y, o.w, o.h)
		});
		return h
	}
	if (o.rg) {
		h.rg(o.c, o.C)
	}
	if (o.lg) {
		h.lg(o.c, o.C)
	}
	h.dr2(o.x, o.y, o.w, o.h)
	return h
}
cjs.isShape = function (h) {
	alert('cjs.isShape')
	return O(h) && h.graphics
}
cjs.graphics = function (a) {
	alert('cjs.graphics')
	return new cjs.Graphics(a)
}
cjs.isCont = function (cont) {
	alert('isCont')
	if (O(cont)) {
		if (cont.addContainer) {
			return true
		}
		else {
			return false
		}
	}
}
h.rGx = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
	alert('h.radGrad')
	var args = _.toArray(arguments), circs, len
	cols = _.map(cols,
			function (col) {
				return oO('c', col)
			})
	circs = _.rest([1, 2, 3, 4, 5], 2)
	len = circs.len  //use switch!
	x1 = 0;
	y1 = 0;
	r1 = 0;
	x2 = 0;
	y2 = 0;
	r2 = 50
	if (len == 1) {
		r2 = circs[0]
	}
	else if (len == 2) {
		r1 = circs[0];
		r2 = circs[1]
	}
	else if (len == 3) {
		x1 = x2 = circs[0]
		y1 = y1 = circs[1]
		r2 = circs[2]
	}
	else if (len == 4) {
		x1 = x2 = circs[0]
		y1 = y1 = circs[1]
		r1 = circs[2]
		r2 = circs[3]
	}
	else if (len == 5) {
		x1 = circs[0];
		y1 = circs[1];
		x2 = circs[2];
		y2 = circs[3]
		r2 = circs[4]
	}
	else if (len == 6) {
		x1 = circs[0];
		y1 = circs[1];
		x2 = circs[2];
		y2 = circs[3]
		r1 = circs[4];
		r2 = circs[5]
	}
	this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
	return this
}
h.lGx = h.linGrad = function () {
	alert('h.linGrad')
	var args = _.toArray(arguments)
	args[0] = _.map(args[0], function (col) {
		return oO('c', col)
	})
	this.graphics.beginLinearGradientFill.apply(
			this.graphics, args)
	return this
}
h.C2 = function (C, l) {
	alert('h.C2')
	var h = this, gx = h.graphics, g = G(arguments)
	o = O(g[0]) ? g[0]
			:
	{C: [0], l: g[1]}
	gx.s(o.C ? oO('c', o.C) : null)
	if (N(o.l)) {
		h.l(o.l)
	}
	return h
}
h.dcWorking = function (x, y, r) {
	var h = this, gx = h.graphics
	if (N(r)) {
		gx.dc(x, y, r)
	}
	else if (N(y)) {
		gx.dc(x, y, 100)
	}
	else if (N(x)) {
		gx.dc(0, 0, x)
	}
	else {
		gx.dc(0, 0, 100)
	}
	return h
}
h.rrx = function (x, y, W, H, r) {
	var h = this, gx = h.graphics
	gx.drawRoundRect(x, y, W, H, r)
	return h
}
h.dex = h.ellx = function (x, y, W, H) {
	var h = this, gx = h.graphics
	gx.drawEllipse(x, y, W, H)
	return h
}
h.drx = function (x, y, W, H) {
	var h = this, gx = h.graphics
	if (N(H)) {
		gx.dr(x, y, W, H)
	}
	else if (N(W)) {
		gx.dr(x, y, W, W)
	}
	else if (N(y)) {
		gx.dr(0, 0, x, y)
	}
	else if (N(x)) {
		gx.dr(0, 0, x, x)
	}
	else {
		gx.dr(0, 0, 100, 100)
	}
	return h
}
h.drawPolygonYesNo = function (V, c, C, l) {
	var h = this, //h.drawConnectedLines =
			n = V.length
	h.c(c, C, l)
	_.each(V, function (v) {
		v.X = v.x
		v.Y = v.y
	})
	if (n >= 3) {
		h.mt(V[0]) //move to the FIRST//lineTo the REST
		T(n, function (i) {
			h.lt(V[i % n])
		})
	} //just a clever way to start from 1
	return h
} // h.cir=  function(r,x,y,c,C){var h = this, gx = h.graphics; return N(x) ?  h.c(c,C).dc(x,y,r) : h.c(x,y).dc(r)  }
function notGood(){


    RR=ROUNDREC = function () {
        St()
        h.c('b', 'r', 5).dc(100, 100, 100)
        h.dr(300, 200, 100, 50)
        h.dr2(500, 200, 100, 50)
        h.rr2(500, 200, 100, 50, 50)
        h.de2(500, 200, 100, 50)

        /*
         s.dot(100, 100)
         s.dot(300, 200)
         s.dot(500, 200)
         s.dot(500, 200)
         s.dot(500, 200)
         */
    }
}
function old(){
    h.rectx = function (x, y, W, H, c, C) {
        var h = this


        var o = {
            x: x, y: y, w: W, h: H, c: c, C: C
        }

        return h.c(o).dr2(o.x, o.y, o.w, o.h)

    }

    h.dr2x = function (x, y, W, H) {
        var h = this


        if (U(W)) {
            W = x;
            H = y;
            x = 0;
            y = 0
        }

        h.dr(-W / 2 + x, -H / 2 + y, W, H)


        return h
    }// s.B = function(x,y){return this.ct(x,y).drag() }
}
//alert
cjs.rect2 = function self(width, height, x, y, fc, sc) {
    alert('cjs.rect2')
    width = width || 100
    height = height || width

    x = N(x) ? x : 0;
    y = N(y) ? y : 0
    fc = fc || 'green'
    sc = sc || 'white'

    halfwidth = width / 2
    halfheight = height / 2
    var h = new createjs.Shape()

    h.graphics.f(fc).s(sc)
        .mt(-halfwidth + x, -halfheight + y)
        .lt(-halfwidth + x, halfheight + y)
        .lt(halfwidth + x, halfheight + y)
        .lt(halfwidth + x, -halfheight + y)
        .lt(-halfwidth + x, -halfheight + y)

    return h
}
cjs.rect = function self(width, height, fc, sc) {

    alert('cjs.rect')
    width = width || 100
    height = height || width
    fc = fc || 'green'
    sc = sc || 'white'

    halfwidth = width / 2
    halfheight = height / 2
    var h = new cjs.Shape()

    h.graphics.f(fc).s(sc)
        .mt(-halfwidth, -halfheight)
        .lt(-halfwidth, halfheight).lt(halfwidth, halfheight)
        .lt(halfwidth, -halfheight).lt(-halfwidth, -halfheight)

    return h
}

cjs.RECT = function (c, W, H, x, y, a) {
    alert('cjs.RECT')
    var g = G(arguments), ct = cjs.ct(), h, o;
    if (O(c)) {
        o = c
    } else if (S(c)) {
        o = {c: c, w: W, h: H, x: x, y: y, a: a}
    }
    o =  oDef(o)


    h = ct.h(o.x, o.y).c(o.c, o.C, o.l).rot(o.a)
    if (o.bm) {
        h.bm('me', function () {
            h.dr2(o.x, o.y, o.w, o.h)
        });
        return h
    }
    if (o.rg) {
        h.rg(o.c, o.C)
    }
    if (o.lg) {
        h.lg(o.c, o.C)
    }
    h.dr2(o.x, o.y, o.w, o.h)

    return h
}
cjs.isShape = function (h) {
    alert('cjs.isShape')
    return O(h) && h.graphics
}
cjs.graphics = function (a) {
    alert('cjs.graphics')
    return new cjs.Graphics(a)}
cjs.isCont = function (cont) {
    alert('isCont')
    if (O(cont)) {
        if (cont.addContainer) {
            return true
        }
        else {
            return false
        }
    }
}
h.rGx = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
    alert('h.radGrad')
    var args = _.toArray(arguments), circs, len

    cols = _.map(cols,
        function (col) {
            return oO('c', col)
        })


    circs = _.rest([1, 2, 3, 4, 5], 2)
    len = circs.len  //use switch!

    x1 = 0;
    y1 = 0;
    r1 = 0;
    x2 = 0;
    y2 = 0;
    r2 = 50

    if (len == 1) {
        r2 = circs[0]
    }

    else if (len == 2) {
        r1 = circs[0];
        r2 = circs[1]

    }

    else if (len == 3) {
        x1 = x2 = circs[0]
        y1 = y1 = circs[1]
        r2 = circs[2]
    }

    else if (len == 4) {
        x1 = x2 = circs[0]
        y1 = y1 = circs[1]
        r1 = circs[2]
        r2 = circs[3]
    }

    else if (len == 5) {
        x1 = circs[0];
        y1 = circs[1];
        x2 = circs[2];
        y2 = circs[3]
        r2 = circs[4]
    }

    else if (len == 6) {
        x1 = circs[0];
        y1 = circs[1];
        x2 = circs[2];
        y2 = circs[3]
        r1 = circs[4];
        r2 = circs[5]
    }

    this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)

    return this
}
h.lGx = h.linGrad = function () {

    alert('h.linGrad')
    var args = _.toArray(arguments)

    args[0] = _.map(args[0], function (col) {
        return oO('c', col)
    })

    this.graphics.beginLinearGradientFill.apply(
        this.graphics, args)
    return this
}
h.C2 = function (C, l) {
    alert('h.C2')
    var h = this, gx = h.graphics, g = G(arguments)
    o = O(g[0]) ? g[0]
        :
    {C: [0], l: g[1]}
    gx.s(o.C ? oO('c', o.C) : null)
    if (N(o.l)) {
        h.l(o.l)
    }
    return h

}
function alpha() {
	h.C2 = function (C, l) {
		alert('h.C2')
		var h = this, gx = h.graphics, g = G(arguments)
		o = O(g[0]) ? g[0]
				:
		{C: [0], l: g[1]}
		gx.s(o.C ? oO('c', o.C) : null)
		if (N(o.l)) {
			h.l(o.l)
		}
		return h
	}
	h.copy = h.same = function () {
		alert('h.copy = h.same')
		return $h(this)
	}//******** here is the problem..
// gotta let h.poly also defer to rect (and circ?)
	h.sC = function () {
		alert('h.sC')
		var h = this,
				gx = h.graphics,
				g = G(arguments)
		gx.sC.apply(gx, g)
		return h
	}
}
h.dcWorking = function (x, y, r) {
    var h = this, gx = h.graphics

    if (N(r)) {
        gx.dc(x, y, r)
    }

    else if (N(y)) {
        gx.dc(x, y, 100)
    }

    else if (N(x)) {
        gx.dc(0, 0, x)
    }
    else {
        gx.dc(0, 0, 100)
    }

    return h
}
h.rrx = function (x, y, W, H, r) {
    var h = this, gx = h.graphics
    gx.drawRoundRect(x, y, W, H, r)
    return h
}
h.dex = h.ellx = function (x, y, W, H) {
    var h = this, gx = h.graphics

    gx.drawEllipse(x, y, W, H)

    return h
}
h.drx = function (x, y, W, H) {
    var h = this, gx = h.graphics
    if (N(H)) {
        gx.dr(x, y, W, H)
    }
    else if (N(W)) {
        gx.dr(x, y, W, W)
    }
    else if (N(y)) {
        gx.dr(0, 0, x, y)
    }
    else if (N(x)) {
        gx.dr(0, 0, x, x)
    }
    else {
        gx.dr(0, 0, 100, 100)
    }
    return h
}

h.drawPolygonYesNo = function (V, c, C, l) {
    var h = this, //h.drawConnectedLines =

        n = V.length

    h.c(c, C, l)

    _.each(V, function (v) {

        v.X = v.x
        v.Y = v.y

    })

    if (n >= 3) {
        h.mt(V[0]) //move to the FIRST//lineTo the REST

        T(n, function (i) {
            h.lt(V[i % n])
        })
    } //just a clever way to start from 1

    return h
} // h.cir=  function(r,x,y,c,C){var h = this, gx = h.graphics; return N(x) ?  h.c(c,C).dc(x,y,r) : h.c(x,y).dc(r)  }
function moreTran() {
	cjs.bindReverseSlide = LS = function (b, b2) {
		var g = G(arguments),
				b = g[0],
				b2 = g[1],
				d = oE('d'),
				pm = oE('pm'),
				b2 = b2 || b
		return b.on(d, function (e) {
			var bx = b2.x + e.rawX, by = b2.y + e.rawY
			b.on(pm, function (e) {
				if (g.P) {
					b2.x = bx - e.rawX
				}
				if (g.N) {
					b2.y = by - e.rawY
				}
			})
		})
	}
	cjs.bindRotate = RT = function (b, b2) {
		
		
		//b = what the control is
		//b2 what it should control (default = itself!)
		//if(g.p){  //b.rgc( '+' )   }
		var g = G(arguments), b = g[0], b2 = g[1] || b
		return b.on('mousedown',
				function (e) {
					var X = e.rawX, Y = e.rawY, r = b2.rotation
					b.on('pressmove', function (e) {
						b2.rotation = r - (   (e.rawY - Y) / 500   ) - (   e.rawX - X  )
					})
				})
	}
	cjs.bindRotate2 = RTT = function (b, b2) {
		
		
		//b = what the control is
		//b2 what it should control (default = itself!)
		var g = G(arguments), b = g[0], b2 = g[1] || b
		if (g.p) {  // b.rgc( '+' )
		}
		return b.on('mousedown',
				function (e) {
					var X = e.rawX, Y = e.rawY, r = b2.rotation
					b.on('pressmove', function (e) {
						b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )
					})
				})
	}
	cjs.bindRotate = RT = function (b, b2) {
		
		
		//b = what the control is
		//b2 what it should control (default = itself!)
		//if(g.p){  //b.rgc( '+' )   }
		var g = G(arguments), b = g[0], b2 = g[1] || b
		return b.on('mousedown',
				function (e) {
					var X = e.rawX, Y = e.rawY, r = b2.rotation
					b.on('pressmove', function (e) {
						b2.rotation = r - (   (e.rawY - Y) / 500   ) - (   e.rawX - X  )
					})
				})
	}
	cjs.bindRotate2 = RTT = function (b, b2) {
		
		
		//b = what the control is
		//b2 what it should control (default = itself!)
		var g = G(arguments), b = g[0], b2 = g[1] || b
		if (g.p) {  // b.rgc( '+' )
		}
		return b.on('mousedown',
				function (e) {
					var X = e.rawX, Y = e.rawY, r = b2.rotation
					b.on('pressmove', function (e) {
						b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )
					})
				})
	}
	cjs.bindSkew = SK = function (b) {
		var g = G(arguments), b = g[0], b2 = g[1], d = oE('d'), pm = oE('pm'), b2 = b2 || b
		return b.on(d,
				function (e) {
					var X = e.rawX, Y = e.rawY
					b.on(pm, function (e) {
						b2.kXY(
								(e.rawY - Y) * .5, (e.rawX - X) * .5
						)
					})
				})
	}
	cjs.reggy = reggy = function (o, s) {
		s = s || o.parent
		s.bm('me', function (b) {
			b.W(40).H(40)
			I(function () {
				b.XY(o.x + o.regX, o.y + o.regY)
			}, 100)
		})
	}
	cjs.bindSlideAndRotate = KK = function (b, b2) {
		var g = G(arguments), b = g[0],
				b2 = g[1] || b
		cjs.bindSlide(b);
		cjs.bindRotate(b, b2)
		if (g.p) {
			b.rgc('+')
		}
		if (g.N) {
			//    reggy(b,b2)
		}
	}
	cjs.bindRotateThenSkew = RK = function (b, b2, m) {
		var g = G(arguments), b = g[0], b2 = g[1],
				d = oE('d'),
				pm = oE('pm'),
				b2 = b2 || b,
				m = g[2] || 'RT'
		//if(g.p){var s=St('y',1000)
		//    _t(b||5,function(i){s.a().bm(
		//        function(bm){bm.xy(i*50);TR(bm)})});return s}
		if (m == 'RT') {
			RT(b, b2);
			m = 'SK'
		}
		else if (m == 'SK') {
			SK(b, b2);
			m = 'RT'
		}
		return b.on(oE('pu'),
				function (e) {
					Do(b).O();
					RK(b, b2, m)
				})
	}
	cjs.bindScale = SC = function (b, b2) {
		var g = G(arguments), b = g[0], b2 = g[1],
				d = oO('e', 'd'),
				pm = oO('e', 'pm'), b2 = b2 || b,
				cp = function (n) {
					return n < .2 ? .2 : n > 2 ? 2 : n
				}
		return b.on(d,
				function (e) {
					var X = e.rawX, Y = e.rawY,
							sx = b2.scaleX,
							sy = b2.scaleY
					b.on(pm,
							function (e) {
								if (g.n) {
									b2.sXY(cp(sx + (
											(e.rawX - X) / 200)),
											cp(sy - ((e.rawX - X) / 200))
									)
								}
								else if (g.p) {
									cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
									cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
								}
								else {
									b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
								}
							})
				}
		)
	}
	cjs.bindTransform = TR = function TR(b, b2, m) {
		var g = G(arguments),
				b = g[0],
				b2 = g[1],
				b2 = b2 || b, m = g[2] || 'SL'
		if (m == 'SL') {
			cjs.bindSlide(b, b2);
			m = 'SC'
		}
		else if (m == 'SC') {
			cjs.bindScale(b, b2);
			m = 'RT'
		}
		else if (m == 'RT') {
			cjs.bindRotate(b, b2);
			m = 'SL'
		}
		return b.on('pressup', function (e) {
			b.removeAllEventListeners();
			TR(b, b2, m)
		})
	}
	cjs.LS = cjs.bindReverseSlide = function (b, b2) {
		var g = G(arguments),
				b = g[0],
				b2 = g[1],
				d = oE('d'),
				pm = oE('pm'),
				b2 = b2 || b
		return b.on(d, function (e) {
			var bx = b2.x + e.rawX, by = b2.y + e.rawY
			b.on(pm, function (e) {
				if (g.P) {
					b2.x = bx - e.rawX
				}
				if (g.N) {
					b2.y = by - e.rawY
				}
			})
		})
	}
	cjs.SK = cjs.bindSkew = function (b) {
		var g = G(arguments), b = g[0], b2 = g[1], d = oE('d'), pm = oE('pm'), b2 = b2 || b
		return b.on(d,
				function (e) {
					var X = e.rawX, Y = e.rawY
					b.on(pm, function (e) {
						b2.kXY(
								(e.rawY - Y) * .5, (e.rawX - X) * .5
						)
					})
				})
	}
	cjs.KK = cjs.bindSlideAndRotate = function (b, b2) {
		var g = G(arguments), b = g[0], b2 = g[1] || b
		cjs.SL(b);
		cjs.RT(b, b2)
		if (g.p) {
			b.rgc('+')
		}
		if (g.N) {
			//    reggy(b,b2)
		}
	}
	cjs.RK = cjs.bindRotateThenSkew = function (b, b2, m) {
		var g = G(arguments), b = g[0], b2 = g[1],
				d = oE('d'),
				pm = oE('pm'),
				b2 = b2 || b,
				m = g[2] || 'RT'
		//if(g.p){var s=St('y',1000)
		//    _t(b||5,function(i){s.a().bm(
		//        function(bm){bm.xy(i*50);TR(bm)})});return s}
		if (m == 'RT') {
			RT(b, b2);
			m = 'SK'
		}
		else if (m == 'SK') {
			SK(b, b2);
			m = 'RT'
		}
		return b.on(oE('pu'), function (e) {
			Do(b).O();
			RK(b, b2, m)
		})
	}
	cjs.rtSh = cjs.rotateShake = function (bm) {
		$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
	}
	cjs.scSh = cjs.scaleShake = function (bm) {
		$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
	}
	old = function () {
		cjs.reggy = function (o, s) {
			s = s || o.parent
			s.bm('me', function (b) {
				b.W(40).H(40)
				I(function () {
					b.XY(o.x + o.regX, o.y + o.regY)
				}, 100)
			})
		}
		cjs.rY = function (a, b) {
			alert('cjs.rY')
			if (U(b)) {
				return a.regY
			}
			a.regY = b
			return a
		}
		cjs.rX = function (a, b) {
			alert('cjs.rX')
			if (U(b)) {
				return a.regX
			}
			a.regX = b
			return a
		}
		cjs.rxy = cjs.rXY = cjs.regXY = gXY = function (a, x, y) {
			y = N(y) ? y : x
			cjs.rX(a, x)
			cjs.rY(a, y)
			return a
		}
		//cX=cY=cXY=sxy=kX=kY=kXY=gY=gX=gX=function(){alert('createCoreTran')}
		cjs.scaleX = cX = function (a, b) {
			if (U(b)) {
				return a.scaleX
			}
			a.scaleX = b
			return a
		}
		cjs.scaleY = cY = function (a, b) {
			if (U(b)) {
				return a.scaleY
			}
			a.scaleY = b
			return a
		}
		cjs.scaleXY = cXY = function (a, x, y) {
			y = N(y) ? y : x
			cX(a, x)
			cY(a, y)
			return a
		}
		cjs.scaleXY = sxy = function xy(o, x, y) {
			o.scaleX = x;
			o.scaleY = y || x;
			return o
		}
		cjs.skewX = kX = function (a, b) {
			if (U(b)) {
				return a.skewX
			}
			a.skewX = b
			return a
		}
		cjs.skewY = kY = function (a, b) {
			if (U(b)) {
				return a.skewY
			}
			a.skewY = b
			return a
		}
		cjs.skewXY = kXY = function (a, x, y) {
			y = N(y) ? y : x
			kX(a, x)
			kY(a, y)
			return a
		}
		//alert
		testImgRegCenter = function () {
			alert('testImgRegCenter')
			mockStage()
			s.bm('me', function (bm) {
				b1 = bm
				bm.spin().drag()
			})
			s.bm('me', function (bm) {
				b2 = bm
				bm.sXY(0.5, 0.3).spin().drag()
			})
			s.A(c = cjs.circle(4).XY(200))
		}
		i.rZero = function (a) {
			alert('i.rZero')
			var i = this, g = G(arguments), x = i.W() / 2, y = i.H() / 2
			if (g.p) {
				i.rX(0, '+').rY(0, '+')
			}//i.X(a, i.regX()-a, '+')
			else {
				i.rXY(0, 0)
			}
			return i
		}//
		i.rgc = function () {
			alert('i.rgc')
			var i = this, g = G(arguments), x = i.W() / 2, y = i.H() / 2
			return (g[0] === 0) ?
					i.rXY(0, 0, (g.p ? '+' : null))
					: i.rXY(x, y, (g.p ? '+' : null))
		}
	}
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
//dep
gBd = getBody = gBod = function (a) {
	return a.GetBody()
}
iPtM = function (f, m) {
	f = sFx(f)
	return f.gSh().tPt(
			f.gB().gTf(), m
	)
}
//dep
gSh = getShape = function (a) {
	var s = a.GetShape()
	s.tPt = s.tP = s.tp = function (a, b) {
		return s.TestPoint(a, b)
	}
	return s
}
//is static body?
isStat = function (a) {
	return gTy(a) == sB
}
//isnt static?? (so dynamic?)
iSB = function (f) {
	return f.GetBody().GetType() != sB
}
gTy = getType = function (a) {
	return gBod(a).GetType()
}
gTf = gTF = getTransform = function (a) {
	return gBd(a).GetTransform()
}
tPt = txPt = function (a, b) {
	return gSh(a).tPt(getTransform(a), b)
}
getBodyAtMouseOld = function (mX, mY) {
	var selectedBody
	w.QueryAABB(
			function (f) {
				if (
						f.GetBody().GetType() != sB && f.GetShape().TestPoint(
								f.GetBody().GetTransform(),
								bV(mX, mY)
						)) {
					selectedBody = f.GetBody();
					return false
				}
				return true
			},
			AB(mX - .001, mY - .001, mX + .001, mY + .001)
	)
	return selectedBody
}
//w.spBox???
old = function () {

// s.B = function(x,y){return this.ct(x,y).drag() }
	/*
	 $a1=function(ob, g, c){
	
	 ob.apply(c||ob,  g)
	
	 }
	
	
	 $a = function(gx, met, g){
	
	 gx[met].apply(gx, g)
	
	 }
	
	
	 $a(gx, 'dc',  N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )
	
	 gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )
	
	 gx.app=function(met,g){var gx=this
	
	 gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )
	
	 }
	 */
	cjs.RECTx = function (c, W, H, x, y, a) {
		var g = G(arguments), ct = cjs.ct(), h, o;
		if (O(c)) {
			o = c
		} else if (S(c)) {
			o = {c: c, w: W, h: H, x: x, y: y, a: a}
		}
		o = b2d.oDef(o)
		h = ct.h(o.x, o.y).c(o.c, o.C, o.l).rot(o.a)
		if (o.bm) {
			h.bm('me', function () {
				h.dr2(o.x, o.y, o.w, o.h)
			});
			return h
		}
		if (o.rg) {
			h.rg(o.c, o.C)
		}
		if (o.lg) {
			h.lg(o.c, o.C)
		}
		h.dr2(o.x, o.y, o.w, o.h)
		cjs.recx = cjs.rectx = function self(wd, ht, c, C) {
			var h, hW, hH
			wd = _.tN(wd, 100)
			ht = _.tN(ht, wd)
			hW = wd / 2
			hH = ht / 2
			h = $h().c(c || 'g', C || 'w').mt(-hW, -hH)
					.lt(-hW, hH).lt(hW, hH).lt(hW, -hH).lt(-hW, -hH)
			return h
		}
		ct.artx = function (x, y, c, C) {
			var g = G(arguments), ct = this, h
			y = N(g[1]) ? g[1] : x
			c = S(g[2]) ? oO('c', g[2]) : null
			C = S(g[2]) ? oO('c', g[3]) : c
			h = $h(x, y, c, C).a2(ct)
			if (g.p) {
				h.drag()
			}
			return h
		}
		return h
	}
//b2d.colMap=function(C){return _.map(C,function(c){return oO('c',c)})}
//cjs.chalk=function(t,c){if(O(t)){alert('check code'); t='x: '+t.x+', '+'y: '+ t.y}; return cjs.T(t,"26px Arial", c||"w").XY(550,150)}
	/*
	 w.i.bm('me', function(bm){
	 bm.XY(300).sXY(.2)
	 w.i.dot(300,300)
	 })*/
//third wheel, wagon hitch
}
function frontBothFromBox() {
	_.adj = cjs.adj = cjs.camAdj = function (income, tax) {
//tax ~ deltaLimit ~ buffer
		var income = income || 0, tax = tax || 0
		if (income > 0) {
			return income > tax ? income - tax : 0
		}
		return -income > tax ? income + tax : 0
	}
//to easel
	ct.aC = function (ac) {
		var ct = this
		if (U(ac)) {
			return ct.autoClear
		}
		ct.autoClear = ac ? true : false;
		return ct
	}
	_.cap = cjs.cap = function (n, m, M) {
		if (U(m)) {
			return n
		}
		if (A(m)) {
			M = m[1]
			m = m[0]
		}
		return n < m ? m
				: n > M ? M
				: n
	}
//cjs.Ticker.removeAllEventListeners() //w.show(function(){})
// not working with scroll
	$.mousedown = function (fn) {
		$('body').on('mousedown', fn);
		return $
	}
	$.oMD = function (fn) {
		return $.mousedown(function (e) {
			fn(e.clientX, e.clientY, e)
		})
	}
	$.mousemove = function (fn) {
		$('body').on('mousemove', fn);
		return $
	}
	$.oMM = function (fn) {
		return $.mousemove(function (e) {
			fn(e.clientX, e.clientY, e)
		})
	}
	$.mouseup = function (fn) {
		$('body').on('mouseup', fn);
		return $
	}
	$.oMU = function (fn) {
		return $.mouseup(function (e) {
			fn(e.clientX, e.clientY, e)
		})
	}
}
toAlert()
function toAlert() {
	w.sun = function (x, y) {
		alert('sun')
		var w = this
		//djd.init?? joint
		x = N(x, 300)
		y = N(y, 150)
		return w.S(300, 150, 20, 'p', 10).d(1).r(.5).bS('sun', .2)
	}
	b.cam = function (x, y) {
		alert('b.cam')
		var b = this, s = b.stg()
		s.XY(b.diff(x, y))
		return b
	}
	b.follow = function (x, y) {
		alert('b.follow')
		var b = this
		cjs.t(function () {
			if (O(b.sprite)) {
				b.cam(x, y)
			}
		})
		return b
	}
	b.dir = function (d) {
		alert('b.dir')
		var b = this
		if (U(d)) {
			return b._dir
		}
		b._dir = d
		return b
	}
	b.polBu = b.polyBul = function () {
		alert('b.polBu polyBul')
		var b = this, w = b.W(), v, pt, bu
		v = b.vec(-20)
		pt = b.wP(0, -50)
		bu = w.polBu(pt.x, pt.y, 4, 4, 'w').d(1).lD(0).lV(v)
		return bu.K('polBu')
	}
	b2d.cn.sl = b2d.cn.slidey = function (p) {
		alert('slidy')
		var k = $.K
		if (p.onG) {
			if (k.u) {
				if (k.r) {
					p.I(20, -60)
				}
				else if (k.l) {
					p.I(-20, -60)
				}
				else {
					p.I(0, -100)
				}
			}
			else {
				if (k.l) {
					p.dir(0);
					p.I(-20, 0)
				}
				if (k.r) {
					p.dir(1);
					p.I(20, 0)
				}
			}
		}
		else {
			if (k.l) {
				p.dir(0);
				p.I(-10, 0)
			}
			if (k.r) {
				p.dir(1);
				p.I(10, 0)
			}
		}
		/*
		
		 p.I(p.onG&&k.u ? V(0, -70)
		
		 : k.r ? V(30, 0)
		 : k.l ? V(-30, 0)
		 : V(0, 0)  )*/
		return p
	}
	b2d.cn.h = b2d.cn.hop = function (p) {
		alert('hop')
		var k = $.K
		if (p.onGround) {
			if (k.l) {
				p.I(-30, -120)
			}
			if (k.r) {
				p.I(30, -120)
			}
		}
		else {
			if (k.d) {
				p.I(0, 20)
			}
		}
	}
	b2d.cn.power = function (p) {
		alert('power')
		var K = $.K
		if (K.u) {
			p.I(0, -45)
		}
		if (K.l) {
			p.I(-20, 0)
		}
		if (K.r) {
			p.I(20, 0)
		}
	}
	b2d.cn.powX = function (p) {
		alert('powX')
		var K = $.K
		if (K.u) {
			p.I(0, -4500)
		}
		if (K.l) {
			p.I(-2000, 0)
		}
		if (K.r) {
			p.I(2000, 0)
		}
		if (K.d) {
			p.I(0, 4500)
		}
	}
	b.diffx = b.difx = function (x, y) {
		alert('b.diffx difx')
		var b = this// compare with DIF  - achtung!
		return {
			x: x - b.X(),
			y: y - b.Y()
		}
	}
	w.p1 = w.player1 = function (x, y, sc, cn) {
		alert('w.p1 player1')
		var w = this, g = G(arguments), p,
				o = g.S_ ?
				{cn: g.f} :
						N(g.t) ? {x: g.f, y: g.s, sc: g.t, cn: g[3]} :
						{x: g.f, y: g.s, cn: g.t}
		o.x = N(o.x, w.hW)
		o.y = N(o.y, w.hH)
		o.sc = N(o.sc, 4)
		p = w.me(o.x, o.y, o.sc)
		if (g.p) {
			p.track()
		}
		p.cn(o.cn)
		p.speed = 40
		p._dir = 'r'
		p.dir = function (d) {
			var p = this
			if (U(d)) {
				return p._dir
			}
			p._dir = d;
			return p
		}
		p.moveInDir = function () {
			var p = this, g = G(arguments)
			if (g.n) {
				return p.move(-p.speed)
			}
			//n = _.tN(g[0], p.speed)// ?
			if (p.dir()) {
				p.I(3, 0)
			} else {
				p.I(-3, 0)
			}
			return p
		}
		p.SetBullet(true)
		w.cl('feet',
				function (f) {
					if (!f.sen()) {
						p.onG = 1
					}
				}
		)
		w.end(function (cx) {
			cx.w('feet', function (f) {
				if (!f.sen()) {
					p.onG = 0
				}
			})
		})
		$.testJump = 1
		if ($.testJump) {
			T.t(function () {
				if (p.onG) {
					$l('onG')
				}
				else {
					$l('in air')
				}
			})
			w.show(function () {
				return p.onG
			})
		}
		T.t(function () {
			p.I(0, 500)
		})
		return p
	}
	b.jumping = function (y, x) {
		alert('b.jumping')
		var b = this, k = $.K
		if (k.u) {
			if (k.r) {
				b.lV(x, -(y - x))
			}
			else if (k.l) {
				b.lV(-x, -(y - x))
			}
			else {
				b.lV(0, -y)
			}
		}
		return b
	}
	b.arrowMove = function () {
		alert('b.arrowMove')
		var b = this
		$.key({
			l: function () {
				b.dir('l').move()
			},
			r: function () {
				b.dir('r').move()
			},
			u: function () {
				if (b.dir() == 'l') {
					b.I(5, -12)
				}
				else if (b.dir() == 'r') {
					b.I(-5, -12)
				}
			}
		})
		return b
	}
	b.relPos = function () {
		alert('b.relPos')
		var b = this;
		return b.X() + b.S().X()
	}
	b.pWarping = function () {
		alert('b.pWarping')
		var p = this, b = this
		cjs.t(function () {
			if (p.Y() < 0) {
				p.Y(300)
			}
			if (p.Y() > 300) {
				p.Y(0)
			}
			if (p.X() < 0) {
				p.X(600)
			}
			if (p.X() > 600) {
				p.X(0)
			}
		})
		return b
	}
//w.left and w.up move all objects in world
//i think only used in 1 game (talk?)
	w.up = function (n) {
		alert('w.up')
		var w = this;
		n = N(n, 4)
		w.e(function (b) {
			b.Y(n, '-')
		})
	}//=w.vert
	b.thr = function () {
		alert('b.thr')
		this.cn('thrust')
	}
	b2d.cn.jet = function (p) {
		alert('jet')
		var k = $.K, vec = p.GetWorldVector(V(0, -100))
		p.fixRot()
		if (k.left) {
			p.rot(8, '-').I(0, -5)
		}
		if (k.right) {
			p.rot(8, '+').I(0, -5)
		}
		p.I(
				k.up ? vec.div(1) : k.down ? vec.div(-100) : V(0, 0)
		)
	}
}
function workedBetterPrev() {
	YIPPY = function () {
		_.ev(1, function () {
			W({g: 4})
			y = w.y(300, 400, 3, '-').rt(90)
			y1 = w.y(600, 400, 3, '-').rt(90)
			_.ev(1.5, function () {
				y.I(0, -.7).rt(4, '+')
				y1.I(4, 0).lV(0, -3).rt(4, '+')
			})
		})
		//ok this is crazy cool.. but something is wrong.
		// something is not getting reset,
		// because force gets bigger each time
	}
	BLUE = function () {
		W({g: 0})
		y = w.y('b', 200, 300, 6).aD(1).lD(1).r(0).fr(1).K('guy')
		_.t(5, function () {
			w.y(R(600, 50), 300, 3, '-').K('bad').rt(45)
					.push('+')
					.shtEv('badBul')
		})
		w.cl('badBul', function (f) {
			this.B().kill()
			//if(f.of('bad')){
			f.B().kill()
			//}
		})
	}
}
