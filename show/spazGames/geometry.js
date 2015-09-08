POLS=function(){W(50)
    p1 = M.p([[-50,50],[-50,-50],[50,-50],[50,50]])
    p2 = M.p([[-100,0],[-100,-100], [0,-100],[0,0],[-98,2]])


    w.D(300,300).pol({v:p1.U(p2)  })

    w.D(300,300).pol({v:p1.D(p2)  })

    w.D(300,300).pol({v:p1.I(p2)  })

    w.D(300,300).pol({v:p1.X(p2)  })

    //   w.pol(300,300, p2)

    // w.polS([300,300,p1],[300,300, p2])

    /*

     w.pol(
     [500,200, p1.U(p2)],
     [600,200, p1.D(p2)],
     [700,200, p1.I(p2)],
     [800,200, p1.X(p2)]
     )
     */
}
STAMP=function(){W({w:'U',g:50})

    soda = w.S(300, 300, 'b', 300, 200).c('b')
    r = w.S(200, 400, 'r', 300, 200).c('r')

    y = w.S(240, 200, 'y', 200, 300, 0, 0, 100).c('y')

    _.in(1, function(){
        soda.sub(y, '-')
        soda.f().C('o')
        f = soda.f()
    })

    //soda.kill()



    _.in(3, function(){
        DIF(f, r.f())
            .ps(soda,function(p){
                soda.pol(p)
            })

    })


    w.D(800,100).pol( 'g', w.D(800,300,'r',100, 20)   )



    cross = w.D(600, 300,'z',
        [
            ['r', 100, 20],
            ['b', 80, 30, 0, 0, 80]
        ])

    cross = cross.uni().reg(cross)

    w.$(function(o){
        w.D(o.x, o.y).pol( cross )

        w.pol(o.x, o.y, soda)
        // o.f.kill()
        // r.kill()
        //      soda.dyn()
    })


} // w.S(...).c NOT FUNC
SAUCERS=function(){W(0)

    b=w.S(300,300,[['g',30,30],['b',100,6],['o',100,6,0,30]])

    //one way
    b1=w.D(700,300).vX(-10)
    ps=b.ps();
    _.e(ps, function(v){
        b1.pol({c:'r', v:v})
    })


    //better way
    b1=w.D(500,500).vX(10)

    b.ps(function(v){ b1.pol({v:v}) })

    //best way
    b.copy(500,450).vY(-10)


    sauce=function(){

        var p= UNI(
            w.S(400,280,'y',30,30),
            w.S(420,300,'o',30,30),
            w.S(420,300,'g',100,6),
            w.S(420,310,'g',100,6,0,30))
            .ps(420,300)

        w.$(function(o){
            w.D(o.x,o.y).pol({v:p}).aV(2)
        })

    };sauce()
}
GPC=function(){


    v1=[[61, 68], [145, 122], [186, 94], [224, 135], [204, 211],
        [105, 200], [141, 163], [48, 139], [74, 117]]
    v2=[[131, 84], [224, 110], [174, 180], [120, 136],[60, 167]]

    p1 = M.p(v1)
    p2 = M.p(v2)

    x0 = $.can('b', 300, 200).A().ctx()
    x0.drawPolys(p1, 'b', 0, -30)
    x0.drawPolys(p2, 'r', 0, -30)

    $.br().A()

    xx = $.can('y', 300, 400).A().ctx()

    _.e(['D','I','U','X'],function(o){
        $.bt(o,function(){
            xx.clearRect(0,0,400,400)
            xx.drawPolys(p1[o](p2),'g',0,150)}).A()})

}
uni()
sub()
function sub(){ SUB = function () {W(20).Y();y.rot(90).XY(20, 50)

    face = w.S(300, 400, 'b', 100, 100)
    hat = w.S(300, 400, 'w', [
        [[-100, 10], [-80, -40], [0, -200], [100, 0]],
        [20, 50]
    ])




    redRec = w.S(900, 350, 'r', 200, 100)
    blueBody = w.S(1000, 300)
    fixt1 = blueBody.rec({c: 'b', w: 100, h: 100})
    fixt2 = blueBody.rec({c: 'b', w: 100, h: 100, x: 30, y: 30})


    _.in(2, function(){
        face.f().sub(hat,'-')
        redRec.f().sub(blueBody,'-')
        redRec.C('r')
    })

    a=w.S(140, 140, 100, 100).rot(20)
    b= w.S(100, 100, 100, 100).rot(45)

    d=w.S(650, 420,'b',100, 100)

    b9 = w.S(610,380,[
        ['b', 40, 70, 20, -20],
        ['o', 40, 70, -20, 20,'-']
    ]).rot(-20)
    fs=b9.fs()


    _.in(3, function () {
        w.S(720, 400).pol( d.sub(b9, '-'))
    })


    //does not keep color!
    c=w.S(450, 300, 'w', 100, 100)
    c.minusPolyCirc(550, 300, 100, 20)


}

    SENSUB=function(){W(0).Y()
        r  = w.D(600,350, 'r', 400, 200).grp(-1)
        b  = w.D(1000,300,[['b', 100,100 ], ['b',100,100,30,30 ]]).grp(-1)
        w.$$( function(){
            r.fs(function(f){f.sub(b)})
            r.grp(-1)
            b.kill()
            r.C('r')
            b=w.D(1000,300,[['b', 100,100], ['b',100,100,30,30]]).grp(-1)
        })
    }
    SUBCOL=function(){W(0)


        /*
         b=w.S(300,300,'b',300,200).c('b')

         r=w.S(200,400,'r',300,200).c('r')

         y=w.S(240,200,'y',200,300,0,0,100).c('y')


         _.in(function(){

         y.sub(b)//.C( y.c() )

         b.kill()

         //b.sub(b1,'-').C('b')
         })
         */

        fn=function(){var b, p,b1

            b = w.D(900,200,[
                ['p',200,100],['b',100,200]])

            b1= w.D(900,400)


            DIF(b.fs(1), b.fs(0)).ps(b,function(p){b1.pol(p)})
        };fn()
    }
    DFF=function(){W(10)


        w.S(900,450,'r',250,200).f().sub(w.D(850,460,'w',200,100,0,0,-20).f())
        b= w.S(1100,100,'r',100,100)
        b1= w.S(1050,120,'b',100,40)

        /*
         w.$$(function(){
         w.D(500,100).pol('r',
         b.f().dif(b1.f(), '-')
         )
         b.kill()
         b1.kill()
         })


         fn=function(){
         var b=w.S(100,100,'r',100,100),
         b1=w.S(130,100,'b',100,80)

         _.in(function(){
         b.sub(b1,'-')

         })
         }//;fn()



         fn=function(){
         var b=w.S(300,100,'r', 100, 100),
         b1=w.S(330,100,'b', 100, 80)
         w.$$(function(){
         w.D(300,200).pol(b.f().dif(b1,'-'))})
         };//fn()


         fn=function() {var b, o,p
         b = w.S(200, 400, 'b', [-80, -40], [0, -200], [100, 50])
         o = w.S(280, 420, 'o', 100, 100)
         p = b.dif(o)
         w.D(300, 300).pol( p)
         w.dot(300,300)
         }//;fn()

         fn=function() {
         white = w.S(700, 400, 'w', 100, 100)
         red = w.S(700, 400)
         f = red.pol({
         c: 'r',
         v: [[-100, 10], [-80, -40],
         [0, -200], [100, -60]]
         })
         yellow = w.S(930, 300, 'y', [
         [100, 100],
         [100, 100, 0, 0, 45]])

         yel = yellow.pD().reg(yellow)

         green = w.S(1030, 400, 'g', 200, 200)
         w.md1(function () {
         red.sub(white, '-').dyn().lV(-60, -10)
         yellow.sub(green).dyn().lV(-60, -10)
         w.$(function () {
         yellow.lV(-60, -10)
         })

         _.in(2, function(){

         green.sub( w.S(930,300).pol( yel ))
         })
         })

         };//fn()

         */
    }
    PC=function(){W()


        w.S(700,100).pC('d',60,5)
        w.S(530,170).pC('d',80,10)
        w.pC(325,155,'d',120,15)

        w.S(100,110).pol( w.S(100,100,'w',50).f().pC(10,'*') )



        redRect = w.S(960,280,'r',200,100)



        p=   w.S(830,270).pC('z',80,10)
            .dif(

            redRect ,

            '-')





        w.D(1000,100).pol( p )





        w.$$(function(){
            w.e(function(b){b.dyn()})
        })

    }
}
function uni() {
    VSGLUE=function(){W(5)


        u= UNI(
            w.S(100, 100,'r', 50, 50),
            w.S(120, 120, 'b',50, 50)
        ).vs()


        _.t(3,function(){w.D(R(200,50),100).pol($r(),u)})



        b = w.S(300,400,'r',[-80,-40],[0,-200],[100,50]).dot()

        p = UNI(
            w.S(300,280,'y',100,100).f(),
            w.S(400,420,'o',100,100).f())


        b2d.glu(
            w.D(100, 400,'x',[p.g(0).reg(b).vs()]),
            w.D(100, 400,'u',[p.g(1).reg(b).vs()])
        )


        w.dot('d', 600,400)


        UNI(
            w.S(500, 200,'b', 100, 100),
            w.S(600, 400, 'd',100, 100)
        )//.dot(w)

        UNI(
            w.S(700, 200,'o', 100, 100),
            w.S(750, 250,'g',100, 100)
        )//.dot(w)

        UNI(
            w.S(900, 200, 'r',100, 100),
            w.S(1000, 200, 'b',100, 100)
        )//.dot(w)


        w.D(1000,350).pol({

            c: 'x',
            v: w.S(1000,450, [
                ['o',60,60,100,0],
                ['r',[[-20,0],[0,-50],[100,10]]],
                ['g', 20,100,50,-50]
            ]).uni()

        })



        w.D(1050, 500).pol(w.S(900,500,[
            ['g',30,80],
            ['b', 40, 50, 20,0 ],
            ['r', 50, 20, 50, 0, 20]]).uni())


    }

    UNII=function(){W(50).Y()

        fn=function() {var p1,p2, b, r, d,f
            p1 = [[-50, 50], [-50, -50], [50, -50], [50, 50]]
            p2 = [[-100, 0], [-100, -100], [0, -100], [0, 0], [-98, 2]]

            /*  w.polU(500, 200, p1, p2)
             w.polD(600, 200, p1, p2)
             */

            b = w.S(520, 120, 'b', 50, 50)
            r = w.S(500, 100, 'r', 50, 50)
            //  w.polU(500, 200, b, r)

            d = w.S(500,200).dot('y')

            f = d.pol({c:'w',C:'z',l:5,v:b.sum(r)})  //f[0].C('z');f[2].C('o')//f is an ARRAY OF FIXTS!!!


        };fn()




        b=w.S(100,400,'r',[-40,-20],[0,-100],[50,25])
        r= b.f()
        o= w.S(150,420,'o',50,50).f()
        y= w.S(100,340,'y',50,50)

        w.D(200,400).pol({v: r.uni(o) })

        w.D(350,400).pol( r.uni(y.f())  )
        w.D(440,400).pol('d', r.uni(o, y.f()) )
        w.D(600,300).pol( y.uni(o))


        w.D(230, 150).pol(
            'w',
            w.S(200, 200, [['r', 50,50],['o', 10, 100 ]]).uni('+'))

        w.S(800,350).pol({
            c:'y',
            v: w.S(1000,300,[['g',50,200],['o',200,50],['r',100,100]]).uni('+')
        })



    }

    GERN = function () {
        W({g: 0}).Y()
        w.p(200, 200)
        ter = w.S(400, 400, 'g', 300, 300).K('ter')

        w.cxBul('ter', function (tFx) {
            var bu = this.B()
            _.in(1, function () {
                var exp = w.S(bu.X(), bu.Y(), 'g', 100, 100).K('ter')
                //t.sub( exp )
                _.in(10, function () {
                    exp.kill()
                })
            })
        })


    }
}
function alpha() {
    HULL=function(){z()
        c = $.c('y',800,400).id('canvas').A()
        window.onload = init
        function init() {

            var canvas = c[0],        // main canvas element
                fps = 10,                                        // drawing frames per second
                convex = new Convex(),                            // convex hull
                dots = []                                     // dots, which are not in the convex hull


            // adjust canvas proportions
            // canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight;

            // assign canvas context
            ctx = canvas.getContext("2d");


            setInterval(function(){

                // get a blank canvas //// clear
                ctx.clearRect(0, 0, ctx,canvas.width, ctx.canvas.height)


                // draw convex dots
                convex.draw()

                // draw dots
                dots.map(function(dot) {   dot.draw()   })
            }, 1000 / fps)



            // clicked on canvas
            c.click( function(evt){
                var x = evt.clientX - canvas.getBoundingClientRect().left,
                    y = evt.clientY - canvas.getBoundingClientRect().top

                // clear convex
                convex.dots=[]

                // add dot
                dots.push(new Dot(new V(x, y)))
            })




            $.bt('draw convex', function() {
                // move dots to canvas
                dots.map(function(dot){convex.addDot(dot)})

                // clear dots
                dots = []
            }).A()






        }
        var Dot=function(pos){this.pos=pos}
        Dot.prototype = {
            draw: function() {
                ctx.beginPath();
                ctx.arc(this.pos.x, this.pos.y, 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
            }
        }
        Convex = function(){ this.dots = [] } // a convex hull
        Convex.prototype = {
            draw: function() {
                var _this = this,           refDots;

                // loop through dots
                this.dots.map(function(el) {
                    var dotAfter;

                    // draw dot
                    el.draw();

                    refDots = _this.copyDots(_this.dots); // copy dots

                    // remove el from reference dots
                    for (var i=0; i<refDots.length; i++) {
                        if (refDots[i] != el) continue;
                        refDots.splice(i, 1);
                    }

                    // get dot after this dot
                    dotAfter = _this.getDotAfter(_this.dots, el);

                    // draw direct line

                    ctx.moveTo(el.pos.x, el.pos.y);
                    ctx.lineTo(dotAfter.pos.x, dotAfter.pos.y);
                    ctx.stroke();


                })
            },
            addDot: function(dot) {
                // the dot cannot be added, because it wouldn't be a convex anymore
                if (this.isDotInsideConvex(this.dots, dot)) return;

                // add dot intentionally
                this.dots.push(dot);

                // less than four dots are always a convex
                if (this.dots.length < 4) return;

                // remove dots, which are not in the convex (anymore)
                this.composeConvexHull();
            },
            composeConvexHull: function() {
                var refDots,        // all dots, except the one we are testing
                    dot,            // the dot, supposed to be in the new convex
                    newDots = [];    // dots, which are definitely part of the convex

                // loop dots
                for (var i=0; i<this.dots.length; i++) {

                    // reset dots reference
                    refDots = this.copyDots(this.dots);

                    // assig dot to the current index
                    dot = refDots[i];

                    // remove dot from refDots
                    for (var h=0; h<refDots.length; h++) {
                        if (h != i) continue;
                        refDots.splice(h, 1);
                        break;
                    }

                    // the dot is not inside of the convex, therefore add it
                    if (!this.isDotInsideConvex(refDots, dot)) {
                        newDots.push(dot);
                    }
                }

                // assign new convex
                this.dots = newDots;
            },
            /*
             copy dots object
             this is done due to call by reference
             */
            copyDots: function(ref) {
                var dots = [];
                ref.map(function(dot) {
                    dots.push(new Dot(new V(dot.pos.x, dot.pos.y)));
                });
                return dots;
            },
            isDotInsideConvex: function(convexDots, dot) {
                var dotBefore, dotAfter, sign;

                // at least three dots required for a convex
                if (convexDots.length < 3) return false;

                // the dot is definitely not inside the convex hull
                if (this.dotOutsideConvexRect(convexDots, dot)) return false;

                // assign dot before to the closest dot by the angle, which is negative
                dotBefore = this.getDotBefore(convexDots, dot);

                // assign dot after to the closest dot by the angle, which is positive
                dotAfter = this.getDotAfter(convexDots, dot);

                // dot on the inside of the line from dotBefore to dotAfter
                return dot.pos.getSide(dotBefore.pos, dotAfter.pos) == 1;
            },
            /*
             is the dot outside of the convex rectangle?
             */
            dotOutsideConvexRect: function(convexDots, dot) {
                var outside = [ true, true, true, true ];
                for (var i=0; i<convexDots.length; i++) {
                    if (convexDots[i].pos.x < dot.pos.x)
                        outside[0] = false;
                    if (convexDots[i].pos.x > dot.pos.x)
                        outside[1] = false;
                    if (convexDots[i].pos.y < dot.pos.y)
                        outside[2] = false;
                    if (convexDots[i].pos.y > dot.pos.y)
                        outside[3] = false;
                }

                return outside[0] || outside[1] || outside[2] || outside[3];
            },
            /*
             get middle position as vector from the bounding dots
             */
            getCenter: function(dots) {
                var rect = { xMin: dots[0].pos.x, xMax: dots[0].pos.x, yMin: dots[0].pos.y, yMax: dots[0].pos.y };
                dots.map(function(dot) {
                    if (dot.pos.x < rect.xMin) rect.xMin = dot.pos.x;
                    if (dot.pos.x > rect.xMax) rect.xMax = dot.pos.x;
                    if (dot.pos.y < rect.yMin) rect.yMin = dot.pos.y;
                    if (dot.pos.y > rect.yMax) rect.yMax = dot.pos.y;
                });

                return new V((rect.xMin + rect.xMax) / 2, (rect.yMin + rect.yMax) / 2);
            },
            /*
             get the closest dot before dot from dots
             */
            getDotBefore: function(dots, dot) {
                var center, bgRad = -Math.PI * 2, dotBefore;

                center = this.getCenter(dots);
                dotRad = center.angleTo(dot.pos);

                dots.map(function(needleDot) {
                    var needleRad = center.angleTo(needleDot.pos),
                        refRad = needleRad - dotRad;

                    if (refRad > 0) refRad = -(Math.PI * 2 - refRad);

                    if (refRad <= bgRad) return;

                    bgRad = refRad;
                    dotBefore = needleDot;
                });

                return dotBefore;
            },
            /*
             get the closest dot after dot from dots
             */

            getDotAfter: function(dots, dot) {
                var center, smRad = Math.PI * 2, dotAfter

                center = this.getCenter(dots)
                dotRad = center.angleTo(dot.pos)

                dots.map(function(needleDot) {
                    var needleRad = center.angleTo(needleDot.pos),
                        refRad = needleRad - dotRad;

                    if (refRad > 0) refRad = -(Math.PI * 2 - refRad)

                    if (refRad >= smRad) return

                    smRad = refRad
                    dotAfter = needleDot
                })

                return dotAfter
            }
        }
        var V = function(x, y) {
            this.x = x
            this.y = y
        }
        V.prototype = {
            subtract: function(v) {
                return new V(this.x - v.x, this.y - v.y);
            },
            /*
             this = center, v = destination
             */
            angleTo: function(v) {
                var ref = this.subtract(v)
                return Math.atan2(ref.y, ref.x) + Math.PI
            },


            /*
             0 = on line, 1 = inside, -1 = outside
             */
            getSide: function(v1,v2){
                return Math.sign((v2.x - v1.x) * (this.y - v1.y) - (v2.y - v1.y) * (this.x - v1.x))
            }
        }
    }
    PDPS=function(){W()

        b= w.brick()
        p=M.p(b)

        p.ps(b, function(p){
            w.D(300,400).pol(p).stat()
        })

        w.i.dot(300,400)

    }
    VS=function(){W()
        b = w.S(400,200, 'r', 300,200).rot(-20)//.dot()
        w.pDraw(b.P(),50,10).dot()
    }
    function hole() {
        HOL = function () {
            W();
            $l('hol')
            b = w.S(400, 400, 'r', 300, 300).f()
            b1 = w.S(400, 400, 'z', 100, 100).f()
            d = M.p(b).D(b1)
        }
        HOLE = function () {
            W(0)
            out = w.S(300, 300, 'b', 200, 200)
            inn = w.S(300, 300, 'c', 100, 100)
            out.dif(inn)

            //inn.dyn()

        }

    }
    WALLZ= function(){W(10).Y()



        x = w.S(900,450,'r',250,200)

        bb = w.S(w.w, w.h/2,'w', 200,100  )

        w.r_.sub(   bb )

        w.r_.C('o')

        //bb.kill()



        b = w.S(1200,300,'p',200,100)

        b1= w.S(1200, 300)




        DIF(w.r_.f(), b.f())
            .ps(b,function(p){
                b1.pol(p)

            })


        // b.kill()





    }
    MOREDFF=function(){W()

        fn=function() {var white = w.S(700, 400, 'w', 100, 100),
            red = w.S(700, 400),
            f = red.pol({
                c: 'r', o: .2,
                v: [[-100, 10], [-80, -40], [0, -200], [100, -60]]
            }),
            yellow = w.S(930, 300, 'y', [[100, 100], [100, 100, 0, 0, 45]]),
            green = w.S(1030, 400, 'g', 200, 200)
            w.md(function () {
                white.sub(red, '-') //red.dyn()
                green.sub(yellow, '-').dyn().lV(-60, -10)
            })

        };fn()

        recV=function() {
            w.pol(400, 300,
                w.S(200, 350, 'b',
                    [-80, 10], [0, -150],
                    [100, 100]).dif(
                    b2d.recV(280, 420, 100, 100)))
        };recV()


        y = w.S(500,100,'y',[[100,100], [100,100,0,0,45]]).rot(20)

        g=  w.S(550,150,'g',[[100,100], [100,100,0,0,45]])

        y1 = w.S(700,100,'y',[[100,100], [100,100,0,0,45]]).rot(20)

        g1=  w.S(750,150,'g',[[100,100], [100,100,0,0,45]])


        w.md1(function(){
            g.sub(y).dyn()
            y1.sub(g1).dyn()
        })




    }


    DES=function(){W(0)


        b=w.S(300,300,'b',300,200).c('b')
        r=w.S(200,400,'r',300,200).c('r')
        y=w.S(240,200,'y',200,300,0,0,100).c('y')

        cB=circ=w.D(700,200)
        cF=circ.pC(50,10).C('o')


        u1= cB.uni()

        u = _.m(u1.vs(), function(v){v=V(v)
            return [v.x+cB.X(), v.y+cB.Y()]

        })


        w.pol(600,300, [u]).C('y')

        _.in(function(){
            b.sub(y,'-');
            b.f().C('r').kill()
        })

        _.in(function(){
            newBod = w.D(600,100)
            r.ps(function(v){newBod.pol('d',v)})
        })





        f=b.f()

        p = DIF(f, r.f())

        p.ps(b,function(p){b.pol(p)})
        //  f.kill()

        //r.kill()


        circ.dyn().sub( rect )
        rect.sub(u)

        rect.dyn()
        pC.dyn()

    }


}
function basicShapes() {
    WT = function () {
        W()
        b0 = w.S(600, 300, 'y', 300, 100, 0, 0, 30)
        b = w.S(600, 300, 'r', 300, 100).rot(-30)
    }
}