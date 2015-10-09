function anim() {
	function sprites() {
		CHAR = function () {
			w = b2d.W()//.debug()
			w.b(function (cx) {
				if (cx.w('hurt')) {
					b.p('hurt').I(100, -200)
				}
				if (cx.w('fly')) {
					b.p('fly').I(-100, -200)
				}
			})
			b = w.ball(200, 200, 60).bS(cjs.sprite(Sprites.char).rXY(275, 220))
			guyBrick(100).K('hurt')
			guyBrick(500).K('fly')
			function guyBrick(x) {
				return w.brick(x, 500, 100, 100).bindSprite('guy', .6)
			}
		}
		MUMMYFLIP = function () {
			w = b2d.W() //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"
//sprite always assumed to start facing right (and flipping it horizontqlly is the left) - so i must draw facing right
			b = $H().rec(100, 100, 50, 88).K('mummy')
			b.bS($Sp(Mummy).a2(w.st).drag().rXY(20, 22).sXY(2).XY(200))
			b.cl(function () {
				b.lV(0)
			})
			b.sp().p('walk')
			T.t(function () {
				b.rt(0)
				if (b.direction == 'right') {
					b.I(4, -2)
				}
				else if (b.direction == 'left') {
					b.I(-4, -2)
				}    // direction='neither' // <-- demumify (doesnt keep walking
				//if(jumpButton is pressed){jump()}
			})
			$.kD({
				u: function () {
					//jumpButtonPressed = true
					if (b.Y() > 530) {
						b.I(0, -80)
					}
				},
				U: function () {
					//jumpButtonPressed = false
				},
				l: function () {
					b.sprite.sX(-2)
					b.direction = 'left'
				},
				r: function () {
					b.sprite.sX(2)
					b.direction = 'right'
				}
			})
		}
		function spriteBox() {
			STICK = function () {
				w = b2d.W({grav: 3})
						.chalk('spritebox example')//.debug()
				w.spriteBox({
					"framerate": 4,
					"images": ["stick.png"],
					"frames": [
						[0, 0, 512, 512, 0, -22, -2],
						[512, 0, 512, 512, 0, -22, -2],
						[1024, 0, 512, 512, 0, -22, -2],
						[0, 512, 512, 512, 0, -22, -2],
						[512, 512, 512, 512, 0, -22, -2],
						[1024, 512, 512, 512, 0, -22, -2],
						[0, 1024, 512, 512, 0, -22, -2],
						[512, 1024, 512, 512, 0, -22, -2],
						[1024, 1024, 512, 512, 0, -22, -2],
						[0, 1536, 512, 512, 0, -22, -2],
						[512, 1536, 512, 512, 0, -22, -2],
						[1024, 1536, 512, 512, 0, -22, -2]
					],
					"animations": {
						"die": {"frames": [8, 9, 10], "speed": .1, next: false},
						"walk": {"frames": [1, 2, 3, 4], "speed": .1},
						"jump": {"frames": [5, 6, 7, 0], "speed": .1, next: false}
					}
				}, 300, 200, .25).mario()
				w.rect(600, 200, 50, 50, 'p')
				w.circ(600, 100, 40, 'b')
			}
			SPRY = function () {
				W([1200, 600, 2400, 1200], {g: 20})//.chalk('spritebox example')
//for 400 x 400 flash squares !!!
				//w.s.bm('earth', function(me){me.XY(400,400)fn()})
				//function fn(){
				y = w.spBox($$ship).track()
				$.K($$ship.key)
				$.K({  //takes a spritebox!//uses cjs.watchKeys()
					l: function () {
						y.rot(8, '-')
					},
					r: function () {
						y.rot(8, '+')
					},
					u: function () {
						y.I(0, -10)
					}
				})
				y.aD(.5)
//}
			}
		}
	}
	
	HITCIRCLES = function () {
		z()
		var pt
		st = $St(1000, '+') // look no .tick() necesary!! look below :)
		ct = $Ct()
		st.A(ct.XY(150))
		_.t(25, function () {
			$H().XY(
					randomLocation(), randomLocation()).f(randomHSL()).dc(30).a2(ct)
		})
		T.on("tick", function (e) {
			ct.rotation += 3
			n = ct.getNumChildren()
			ct.ch(function (ch) {
				uM = ch.uM()
				ch.alpha = ch.uM() ? 1 : 0.1
				pt = ch.globalToLocal(st.m().x, st.m().y)
				if (st && st.mouseInBounds && ch.hitTest(pt.x, pt.y)) {
					ch.al(1)
				}
			})
		})
		function randomLocation() {
			return M.random() * 300 - 150
		}
		
		function randomHSL() {
			return cjs.Graphics.getHSL(M.random() * 360, 100, 50)
		}
		
		HITCIRCLES = function () {
			z()
			var pt
			st = $St(1000, '+') // look no .tick() necesary!! look below :)
			ct = $Ct()
			st.A(ct.XY(150))
			_.t(25, function () {
				$H().XY(
						randomLocation(), randomLocation()).f(randomHSL()).dc(30).a2(ct)
			})
			T.on("tick", function (e) {
				ct.rotation += 3
				n = ct.getNumChildren()
				ct.ch(function (ch) {
					uM = ch.uM()
					ch.alpha = ch.uM() ? 1 : 0.1
					pt = ch.globalToLocal(st.m().x, st.m().y)
					if (st && st.mouseInBounds && ch.hitTest(pt.x, pt.y)) {
						ch.al(1)
					}
				})
			})
			function randomLocation() {
				return M.random() * 300 - 150
			}
			
			function randomHSL() {
				return cjs.Graphics.getHSL(M.random() * 360, 100, 50)
			}
		}//A
	}//A
	TWEENLOLLY = function () {
		st = $St()
		st.can.P('a').XY(300)
		st.A(h = shape = $h())
		h.rec(100, 200, 0, 200, 'red')
				.rec(100, 100, 100, 20, 'z')
				.rec(145, 120, 10, 80, 'y')
				.cir(105, 100, 20, 'z')
				.cir(105, 100, 8, 'v')
				.cir(200, 100, 20, 'z')
				.cir(200, 100, 8, 'y')
				.cir(100, 20, 100, 'z')
				.rXY(100, 300).XY(100, 300).drag()
		shape.twL(
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
		shape.twL(
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200])
	}
	GROW = function () {
		z()
		$St(500, 500).bm('me', function (bm) {
			b = bm
			bm.grow().dg()
		})
	}//F
	WOAH = SPINTIMTIM = function () {
		Q(['guy', 'me'], function () {//z()
			st = $St($.c('p', 1200, 600)[0]).A();
			st.c = $(st.canvas) //s.bm('me', function(bb){b=bb.drag() })
			st.qB('guy').XY(300, 300).spin()
			st.qB('guy').XY(300, 300).sXY(.5, .3).spin()
			T.t(function () {
				st.u()
			})
			_.in(3, function () {
				T.f(1)
			})
			_.in(9, function () {
				T.f(1000)
			})
		})
	}//C+
}


function mouseInfo() {
	CONNECT = function () {
		St() //m$$('location=location')
		cjs.circ = function (r, z, x, y) {
			gx = new cjs.Graphics()
			if (!S(r)) {
				return cjs.circ('red', r, z, x)
			}
			z = _.tN(z, 32)
			x = _.tN(x, 100)
			y = _.tN(y, 100)
			gx.ss(z / 8).f(r, 'black').dc(z)
			return new cjs.Shape(gx).XY(x, y)
		}
		cjs.circ = function (x, y, r, c, C) {
			var h = $h()
			if (O(x)) {
				return cjs.circ(x.x, x.y, x.r, x.c, x.C)
			}
			x = _.tN(x)
			y = _.tN(y)
			r = _.tN(r, 8)
			h.cir(x, y, r, c || 'w', C || 'z')
			SL(h)
			return h
		}
		// st= $St('p', 1000)
		pink = cjs.circ(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
		st.A(pink)
		ct = $Ct()
		st.A(ct)
		green = cjs.circ(200, 'green', 'purple').XY(320, 300)//.rXY(100)
		yellow = cjs.circ(100, 'yellow', 'purple').XY(250)
		red = cjs.circ(40, 'red', 'purple').XY(200, 100)
		orange = cjs.circ(20, 'orange', 'purple').XY(300)
		ct.A(green, yellow, red, orange)
		LS(yellow, ct)
		SL(green)
		SL(green, pink)
		SL(yellow)
		SL(red, ct)
		SL(orange, red)
		st.u()
	}
	HANDEV = function () {
		St()
		st.bm('me', function (b) {
			me = b
			cb = b.on('pressmove', function () {
				this.x++
			})
		})
		st.bm('guy', function (b) {
			b.handleEvent = function () {
				this.y++
			}
			b.on('pressmove', b)
		})
		st.t()
	}//B+
	RMEVT = function () {
		st = $St()
		st.bm('me', function (b) {
			me = b
			cb = b.on('pressmove', function () {
				this.x++
			})
		})
		st.bm('guy', function (b) {
			b.handleEvent = function () {
				this.y++
				me.off('pressmove', cb)
			}
			b.on('pressmove', b)
		})
		///////
	}
	MATRIX1 = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		stage = St()
		$.d('b', 50, 50).A()
		//stage = s = cjs.stage(1600,1000).tick().A()
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		st.on('e', co)
		//make a container
		st.ct(function (c, s) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
			c.bm('me',
					function (b) {
						b.sXY(.2).XY(100, 80)
						b.on(click, function () {
							$l('lit')
						}, '/')  //on click, log('lit'), just once (remove listener)!
					})
			// the middle size me demonstrates stopPropogation
			// if you click it, the container does not feel the click
			c.bm('me', function (bm) {
				bm.sXY(.4).XY(100, 180)
				bm.$(function () {
					$l('mid')
				}, '-')  //on click, log('mid'), and stop prop
			})
			c.bm('me', function (bm) {
				bm.sXY(1.5)
				bm.on('click', function () {
					$l('big')
				})  //on click, log('big')
			})    //on click, log('con')
			c.on('click', function () {
				$l('con')
			})
		})
		st.ct(function (ct) {
					c = ct
					var vn = 0, rvn = 0, on = 0, ron = 0
					ct.X(200)
					ct.mug(function (b) {
						b.sXY(.8).XY(200, 80)
					})
					ct.mug(function (b) {
						b.sXY(.8).XY(100, 280)
					})
					ct.mug(function (b) {
						b.sXY(.8).XY(340, 180)
					})
					//this shows over/out vs rollover/rollout
					//over/out get retriggered when switching between connected sprites
					//rollover/rollout does not because it is still touching 'something'
					ct.on('mouseover', function () {
						c.X(10, '+');
						$l('v: ' + vn++)
					})
					ct.on('rollover', function () {
						c.X(20, '-');
						$l('rv: ' + rvn++)
					})
					ct.on('mouseout', function () {
						c.Y(10, '+');
						$l('o: ' + on++)
					})
					ct.on('rollout', function () {
						c.Y(20, '-');
						$l('ro: ' + ron++)
					})
				}
		).MV(40)
		st.ct(function (ct, st) {
			ct.X(700)
			ct.mug(function (bm) {
				bm.sXY(.8).XY(200, 80)
			})
			ct.mug(function (bm) {
				bm.sXY(.8).XY(100, 280)
			})
			ct.mug(function (bm) {
				bm.sXY(.8).XY(340, 180)
			})
			//this example shows which sprites are acted upon with over/rollover
			//over only affects one
			//rollover affects ALL
			//if you enter a sprite from outside, they all grow (via rollover),
			//and the one sprite grows double (via over)
			ct.on('mouseover', function () {
				$l('mouseover');
				this.sXY(.01, '+')
			})
			ct.on('rollover', function () {
				$l('rv');
				this.sXY(.01, '+')
			})
			ct.on('mouseout', function () {
			})
			ct.on('rollout', function () {
			})
			// in summary,
			// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
			// BUT, they will all recieve events separately
		}).MV(40) //??? mouse events? speed for some mouse checking thing
		st.ct(function (ct, st) {
			ct.x = 1400
			ct.bm('me', function (bm) {
				//make the little me slide the entire container
				//it acts as a handle! (for its container)
				lit = bm.sXY(.2).XY(100, 80)
				SL(bm, ct)
				ctr.bm('me', function (bm) {
					//big me will scale the little me
					big = bm.sXY(2).XY(100, 180)
					SC(bm, lit)
					ct.bm('me', function (bm) {
						bm.sXY(.6).XY(150, 180).SL();
						RT(bm, big)
					})
				})
			})
			//guy slides stage
			ct.bm('guy', function (bm) {
				bm.sXY(.4).XY(100, 180);
				SL(bm, st)
			})
		})
	}
	MATRIX0 = function () {
		z();
		$l('matrix')
		st = stage = $St(1600, 1000)
		// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
		// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		$.d('b', 50, 50).A()
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		st.on('mouseenter', function () {
			$('body').C($r())
		})
		st.A(ct = container = c = $Ct())
		ct.bm('me', function (bm) {
			//b.sxy(.2).xy(100,80)
			//b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!
		})
		//make a container
		st.ct(function (c, s) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
			// the middle size me demonstrates stopPropogation
			// if you click it, the container does not feel the click
			ct.bm('me', function (b) {
				b.sXY(.4).XY(100, 180)
				//b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
			})
			ct.bm('me', function (b) {
				b.sXY(1.5)
				// b.o('$',fL('big'))  //on click, log('big')
			})
			//on click, log('con')
			//c.o('$',  fL('con'))
		})
		st.ct(function (c) {
			var vn = 0,
					rvn = 0,
					on = 0,
					ron = 0
			c.X(200)
			c.mug(
					function (b) {
						b.sXY(.8).XY(200, 80)
					})
			c.mug(
					function (b) {
						b.sXY(.8).XY(100, 280)
					})
			c.mug(
					function (b) {
						b.sXY(.8).XY(340, 180)
					})
			//this shows over/out vs rollover/rollout
			//over/out get retriggered when switching between connected sprites
			//rollover/rollout does not because it is still touching 'something'
			// c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
			//c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
			// c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
			//  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})
		})//.MV(40)
		st.ct(function (c, s) {
			c.x(700)
			c.mug(function (b) {
				b.sxy(.8).xy(200, 80)
			})
			c.mug(function (b) {
				b.sxy(.8).xy(100, 280)
			})
			c.mug(function (b) {
				b.sxy(.8).xy(340, 180)
			})
			//this example shows which sprites are acted upon with over/rollover
			//over only affects one
			//rollover affects ALL
			//if you enter a sprite from outside, they all grow (via rollover),
			//and the one sprite grows double (via over)
			c.o('v', function (g, e) {
				$l('v')
				g.sxy(.01, '+')
			})
			c.o('rv', function (g, e) {
				$l('rv')
				g.sxy(.01, '+')
			})
			c.o('o', function (q, e, g) {
			})
			c.o('ro', function (q, e, g) {
			})
			// in summary,
			// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
			// BUT, they will all recieve events separately
		}).MV(40)
		st.ct(function (ct, st) {
			ct.X(1400)
			ct.bm('me', function (bm) {
				
				//make the little me slide the entire container
				//it acts as a handle! (for its container)
				lit = bm.sXY(.2).XY(100, 80)
				SL(bm, ct)
				ct.bm('me', function (bm) {
					//big me will scale the little me
					big = bm.sXY(2).XY(100, 180)
					SC(bm, lit)
					ct.bm('me', function (bm) {
						bm.sXY(.6).XY(150, 180)
						SL(bm)
						RT(bm, big)
					})
				})
			})
			//guy slides stage
			ct.bm('guy', function (bm) {
				bm.sXY(.4).XY(100, 180)
				SL(bm, stage)
			})
		})
	}
	MATRIX = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		z()
		$l('matrix')
		st = stage = s = $St(1600, 1000).A().tick()
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		st.on('mouseenter', function () {
			$('body').C($r())
		})
		st.A(ct = container = c = new createjs.Container())
		ct.bm('me', function (bm) {
			bm.sXY(.2).XY(100, 80)
			bm.on('click', function () {
				$l('lit')
			}, this, true) //just once
		})
		//make a container
		st.ct(function (ct, st) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
			// the middle size me demonstrates stopPropogation
			// if you click it, the container does not feel the click
			ct.bm('me', function (bm) {  //future: c.bm('me', .4, function(bm){})
				bm.sXY(.4).XY(100, 180)
				bm.on('click', function (e) {
					$l('mid')
					e.stopPropagation()
				})
			})
			ct.bm('me', function (bm) {
				bm.sXY(1.5)
						.on('click', function () {
							$l('big')
						})
			})
			ct.on('click', function () {
				$l('con')
			})
		})
	}
	BUBBLE = function () {
		St()
		output = $T(
				"try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
				"13px courier").lWH(280, 13).XY(190, 10)
		bg = $H().n("background")
		bg.graphics.f("red").rr(0, 0, 150, 60, 10)
		lb = $T("click me!", "bold 24px Arial", "#FFFFFF").XY(150 / 2, 60 / 2).n('label').tA("center")//.tB("middle")
		// setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
		// button.mouseChildren = false;
		st.A(bt = $Ct().XY(20).n('button').A(bg, lb), output)
		// set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:
		_.e([st, bt, lb, bg], function (tg) {
			tg.$(handleClick, false);
			tg.$(handleClick, true)
		})
		st.u()
		function handleClick(e) {
			if (e.currentTarget == st && e.eventPhase == 1) {
				output.text = "target : eventPhase : currentTarget\n"
			}// this is the first dispatch in the event life cycle, clear the output.
			output.text += e.target.name + " : " + e.eventPhase + " : " + e.currentTarget.name + "\n";
			if (e.currentTarget == st && e.eventPhase == 3) {
				st.u()
			}// this is the last dispatch in the event life cycle, render the stage.
		}
	}//B+
	ENTERST = function () {
		St()
		st.bm('me')
		st.on('mouseenter', function () {
			$.br().A()
			$('body').A('once<br>')
		}, null, true)
		st.on('mouseenter', function () {
			$('body').A('many<br>')
		}, null, false)
	}//A-
}
function quuu() {
	CJSLAY = function () {
		Q(['me', 'guy'], function (q) {
			st = $St()
			me = q('me').a2(st).sXY(3)
			guy = q('guy').a2(st).sXY(.5).drag()
			$.bt('s.sXY(2)', function () {
				st.sXY(2)
			}).A()
			cjs.t(function () {
				me.X(guy.x * 2.2 - 140)
				me.Y(guy.y * .2)
			})
		})
	}
}
function fancy() {
	ZXX = function () {
		$.fn.md = function (l) {
			var c = this
			c.mousedown(function (e) {
				l(e.clientX, e.clientY)
			})
			return c
		}
		$.fn.mu = function (l) {
			var c = this
			c.mouseup(function (e) {
				l(e.clientX, e.clientY)
			})
			return c
		}
		$.fn.mm = function (l) {
			$l('mU')
			var c = this
			c.mousemove(function (e) {
				l(e.clientX, e.clientY)
			})
			return c
		}
		$.fn.$$ = $.fn.dblclick
		$.eD = $.editDiv = function (words) {//$.dE
			canMove = true
			changeLocation = true
			inputMove = true
			mouse = 'up'
			ta = $.ta().mar(4)
			sp = $.sp().C('z')
			fn = function () {
				sp.T(ta.v())
			}
			d = $.dA('+').C('n', 'y').pad(8)
			d.zIndex(0)
			xBt = $.bt('', function () {
				d.rm()
			}).WH(4).C('red')
			d.md(function () {
				inputMove = false;
				mouse = 'div'
			})
			d.mu(function () {
				mouse = 'up'
			})
			d.md(function () {
				$.editDiv.TOP++
				$(this).zIndex($.editDiv.TOP)
			})
			ta.md(function (e) {
				$.editDiv.TOP++
				$(this).parent().zIndex($.editDiv.TOP)
				location = {top: d.Y(), left: d.X()}
				inputMove = true
				mouse = 'input'
				e.stopPropagation()
			})
			ta.mm(function (e) {
				if (inputMove) {
					e.stopPropagation();
					d.XY(location.left, location.top)
				}
			})
			if (U(words)) {
				return d.A(xBt, $.br(), sp.hd(), ta,
						$.d('y', 16, 12).tA('c').mar('0 auto').$(function () {
							$(this).pa().free()
						})
				).$$(function (e) {
							e.stopPropagation()
							sp.T(ip.v())
							xBt.gg();
							ip.gg();
							sp.gg()
						})
			}
			else {
				ip.v(words)
				sp.T(ta.v())
				return d.$$(function (e) {
					e.stopPropagation()
					sp.T(ta.v())
					xBt.gg();
					ip.gg();
					sp.gg()
				}).A(xBt, $.br(), sp, ip.hd())
			}
		};
		$.editDiv.TOP = 0
		z()
		a = $.editDiv().A().C('a')
		b = $.editDiv().A().C('b')
	}//C-
	FANCYY = function (x, y) {
		z()
		canvas = $.c('g', 400)
		st = stage = $St(canvas[0])
		frame = $.dragFrame(sp = $.sp())
		sp.A(
				$.bt('X', function () {
					frame.rm()
				}),
				$.bt('pics', function () {
					$.imgDiv(st)
				}),
				$.bt('transform'),
				$.bt('text'),
				$.bt('paint', function () {
					_paintColor = '#0FF'
					var size = 10, oX = 0, oY = 0, shape
					var paintStage = $.dragStage()
					// stage.a(  EaselText('finger paint', 'b', 40, 100, 10))
					paintStage.bm(
							st.du(), //?
							function (m) {
								m.XY(40).sXY(.4)
								//                    stagePainter(paintStage)
							})
				}),
				$.bt('cut'),
				$.bt('save'))
		sp.A($.br(), canvas)
		sp.A($.d().A(
				$.bt('clear', function () {
					st.removeAllChildren()
				}),
				$.bt('flat', function () {
					st.removeAllChildren()
					st.bm(st.toDataURL(), function (bm) {
						bm.dg()
					})
				}),
				$.bt('clone', function () {
					var sp = $.sp(),
							newStage = $.dragStage().A(sp)
					newStage.bm(st.du(), function (bm) {
						SL(bm)
					})
				}),
				$.bt('recur', function () {
					stbm(st.du(), function (bm) {
						bm.sxy(.4).SL()
					})
				}),
				$.bt('copy', function () {
					_copy = st.du()
				}),
				$.bt('paste', function () {
					st.bm(_copy, function (bm) {
						bm.drag()
					})
				}),
				$.bt('replace', function () {
					st.rm()
					st.bm(_copy, function (bm) {
						bm.dg()
					})
				})
		))
		sp.$$(function () {
			$('button').toggle()
		})
		sp.A()
	}//C
	FANCY = function (x, y) {
		z()
		$.iD = $.imgDiv = function (st) {
			d = $.d('y', '+')
			$.eGj('img', function (i) {
				d.A($.c(100, 100).fit(i.d)
						.$(function () {
							st.bm(i.d, function (bm) {
								bm.sXY(.4).dg()
							})
						}))
			})
		}
		canvas = $.c('g', 400)
		stage = new cjs.Stage(canvas[0]).t()
		frame = $.dragFrame(theSpan = $.sp())
		theSpan.A(
				$.button('X', function () {
					frame.remove()
				}),
				$.button('pics', function () {
					$.imgDiv(stage)
				}),
				$.button('transform'),
				$.button('text'),
				$.button('paint', function () {
					_paintColor = '#0FF'
					var size = 10, oX = 0, oY = 0, shape
					var paintStage = $.dragStage()
					// stage.a(  EaselText('finger paint', 'b', 40, 100, 10))
					paintStage.bm(
							stage.du(), //?
							function (m) {
								m.XY(40).sXY(.4)
								stagePainter(paintStage)
							})
				}),
				$.button('cut'),
				$.button('save'))
		theSpan.A($.br(), canvas)
		theSpan.A($.div().A(
				$.button('clear', function () {
					stage.removeAllChildren()
				}),
				$.button('flat', function () {
					stage.removeAllChildren()
					stage.bm(stage.toDataURL(), function (bm) {
						bm.drag()
					})
				}),
				$.button('clone', function () {
					var newSpan = $.sp()
					var newStage = $.dragStage(newSpan)
					newStage.bm(stage.du(), function (bm) {
						SL(bm)
					})
				}),
				$.button('recur', function () {
					stage.bm(stage.du(), function (bm) {
						bm.sXY(.4)
						SL(bm)
					})
				}),
				$.button('copy', function () {
					_copy = stage.du()
				}),
				$.button('paste', function () {
					stage.bm(_copy, function (bm) {
						bm.drag()
					})
				}),
				$.button('replace', function () {
					stage.rm()
					stage.bm(_copy, function (bm) {
						bm.drag()
					})
				})
		))
		theSpan.dblclick(function () {
			$('button').toggle()
		})
		theSpan.A()
	}//A-
}
function isoo() {
	ISO = function (levNum) {
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
			_.times(howMany, function (i) {
				x = x + 40
				y = y - 20
				var t = new Tile()
				t.container.XY(x, y)
				stage.A(t.container)
				createjs.bindSlide(t.container)
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
			_.times(n2, function (i) {
				x = x + 40
				y = y + 20
				var row = isoRow(i, n1, x, y)
				grid.push(row)
			})
			return grid
		}
		tileCoin = function () {
			return cjs.circ(15, 'yellow', 'black')
		}
		tileBad = function () {
			return cjs.circ(15, 'green', 'orange')
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
		z()
		stage = $St(900, 500).tick().A()
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
	ISO = function (levNum) {
		kD = $.kD
		z()
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
			return $Cir(15, 'y', 'z')
		}
		tileBad = function () {
			return $Cir(15, 'g', 'o')
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
		stage = $St(900, 500).t().A()
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
		stage.bm('me', function (me) {
			player = tilePlayer(me).sXY(.2).drag().to(5, 5)
		})
	}//D
}
function toPhys() {
	BADBALL = function () {
		W({g: 0})
		b = w.S(500, 300, 'r', 60).bS(w.s.h(500, 300))
		num = 0
		dif = .1
		shape = b.sp()//b.sprite
		shape.rf(['r', 'y'], [0, num],
				0, 0, 0, 0, 0, 60)
				.dc(0, 0, 60)
		_.ev(.1, function () {
			num += dif
			if (num >= 1) {
				num = .9;
				dif = -.1
			}
			if (num <= 0) {
				dif = .1
			}
			shape.rf(['r', 'y'], [0, num],
					0, 0, 0, 0, 0, 60)
					.dc(0, 0, 60)
		})
		w.badGuy(500, 300)
		b = w.D(500, 300, 'r', 60)
		b.bS(
				w.s.h(500, 300)
		)
		b.draw = function (frame) {
			var b = this
			b.sp().rf(
					['r', 'y'], [frame[0], frame[1]],
					0, 0, 0, 0, 0, 60).dc(60)
		}
		frames = [[0, .1], [0, .3], [0, .6], [0, .9], [0, 1], [.3, 1], [.6, 1], [.9, 1], [1, 1]]
		curr = 0
		_.ev(1, function () {
			b.draw(frames [curr])
			curr++
			if (curr == 9) {
				curr = 0
			}
		})
	}
	MES = function () {
		W([], {w: 0})// what took me so long to make this?
		w.C('y')
		w.p(600, 300, 14)//.stat()
		w.l('z', 600, 0, 600, 600)
		_.ev(1, function () {
			w.p(R(1000, 100), R(-100), R(10))
		})
	}
	META = CLICKME = BMBALLS = function () {
		W(400, 400).C('w')._(function () {
			//cjs.rulers()
			w.p(0, 0, 10).stat()
			_.t(8, function () {
				w.D(R(100, 50), R(100, 50), 'b', 30)
			})
			w.$(function () {
				_.t(8, function () {
					var b = w.D(R(100, 50), R(100, 50), 'b', 30)
					b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
				})
			})
			w.i.T(200, 100, 'CLICK me')
		})
	}
	HULA = HULAHOOPS = HAIR = HAIRBALLS = function () {
		W(400, 400)._(function () {
			
			//cjs.rulers()
			_.t(8, function () {
				var b = w.D(R(100, 50), R(100, 50), 'b', 10)
				b.$h('x', 'x', 1189).c('x', 'x', 200)
						.bf('sun', [0, .6, 10, 10, -40, 200])
						.cir(10)
				// <- b.C({c:'x', al:.4} )
			})
			$.d('b', 100, 100, 100, 100).drag()
		})
	}
}
function oldEasPhys() {
	SHIP = function () {
		St()
		angleInDegrees = function self(y, x) {
			if (O(y)) {
				return self(y.vy, y.vx)
			}
			var d = tDeg(M.atan(y / x))
			if (x < 0) {
				d = M.abs(d) + 90;
				if (y < 0) {
					d = M.abs(d) + 90
				}
			}
			return d
		}
		ship = function (st) {
			h = t = $H().XY(100).rY(20).vX(1).vY(1)
			h.f('o').s('z').mt(0, 0).lt(0, 40).lt(80, 20).lt(0, 0)
			$.kD('d', function () {
				t.rt(6, '+')
			})
			$.kD('u', function () {
				t.rt(6, '-')
			})
			if (st) {
				st.A(h)
				st.MD(function (e) {
					t.vX((e.rawX - t.x) / 100, '+')
					t.vY((e.rawY - t.y) / 100, '+')
					if (t.vx > 10) {
						t.vX(10)
					}
					if (t.vy > 10) {
						t.vY(10)
					}
				})
			}
			_.ev(.05, function () {
				h.X(t.vx, '+').Y(h.vy, '+')
				h.rotation = angleInDegrees(t)
			})
			return t
		}
		PL = 1;
		aA = []
		div = $.d('y').pad(10)
		div.A(
				$.h1('controls'),
				b1 = $.bt('start', function () {
					PL = 1;
					b1.hd();
					b2.sh()
				}),
				b2 = $.bt('stop', function () {
					PL = 0;
					b2.hd();
					b1.sh()
				}).hd(),
				$.bt('sgun', function () {
					sgun(guy)
				}))
		boot = $.boot()
		boot.A(div, st.canvas)
		guy = ship(st)
		// kD('s',function(){ $l('bang')})
		_.t(100, function () {
			var a = ast();
			a.a();
			a.p()
		})
		st.t(function () {
			if (PL) {
				_.e(aA, function (a) {
					a.u()
				})
			}
		})
		sgun(guy)
	}
	CGO = function () {
		i.vX = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vx = this.vx + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vx = this.vx - a
				}
				else {
					this.vx = this.vx * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vx
			}
			this.vx = a;
			return this
		}
		i.vY = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vy = this.vy + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vy = this.vy - a
				}
				else {
					this.vy = this.vy * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vy
			}
			this.vy = a
			return this
		}
		i.jX = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vx = this.vx + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vx = this.vx - a
				}
				else {
					this.vx = this.vx * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vx
			}
			this.vx = a;
			return this
		}
		i.jY = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vy = this.vy + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vy = this.vy - a
				}
				else {
					this.vy = this.vy * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vy
			}
			this.vy = a
			return this
		}
		i.move = function () {
			return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
		}
		$St().bm('me', function (b) {
			//b.go(10, 10)
			cjs.t(function () {
				$l(b.inStage())
			})
		})
	}
}
function jquer() {
	TANGLE = function () {
		z()
		a = $.dA('r', 50, 50).XY(50).A().pad(10)
		b = $.dA('b', 100, 100).XY(100).A().pad(10)
		c = $.dA('g', 200, 200).XY(200).A().pad(10)
		d = $.dA('y', 400, 400).XY(400).A().pad(10)
		y = function (aa, bb, cc, dd) {
			if (aa && U(bb)) {
				aa.A().P('a')
			}
			if (bb) {
				bb.A(aa.P('static'))
			}
			if (dd) {
				dd.A(cc.P('s'))
			}
		}
	}
}
function needsMug() {
	SHOOTY = function () {
		St()
		$.ghost = function () {
			return $.c('X', 500, 500).fit('me').al(.1)
		} // how cool.. it 'steals' the drag because its on top but looks like its below
		st.mug(function (m) {
			m.XY(100, 100).WH(150)
			SL(m)
			//key(m, '-')
			// ugun(mug)
		})
		c = $.ghost().XY(10, 10).A().dg()
	}//C-
}
 