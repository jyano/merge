function jqAnimWorks(){
    COOLSEL = function () {
        $.x()
        // rather than worry about synchronization between each panel
        //we will take last li in ul.k(panels) and position it to top right
        //of ul - this way,  when he sum width of all the panels occasionally
        //adds to greater than 100 percent of the ul as they animate..
        //the last li never breaks to the next line
        var s = 200;
        d = $.dK('container').A(
            $.dK('panels').A($.sp('1'),
                $.sp('2'), $.sp('3'), $.sp('4'),
                $.sp('5')),
            $.dK('panels').A($.sp('A'),
                $.sp('B'), $.sp('C'), $.sp('D'), $.sp('E'))
        );
        $('span').css({width: '100px', fontSize: '40px'});
        if ($('div.panels').length) {
            $('div.panels span:last-child').K('last');
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
    COOLSEL1 = function () {
        $.x()
        // rather than worry about synchronization between each panel
        //we will take last li in ul.k(panels) and position it to top right
        //of ul - this way,  when he sum width of all the panels occasionally
        //adds to greater than 100 percent of the ul as they animate..
        //the last li never breaks to the next line
        $.coolSelector = function () {


            var s = 200
            d = $.dK('container').A(
                $.dK('panels').A($.sp('1'), $.sp('2'), $.sp('3'), $.sp('4'), $.sp('5')),
                $.dK('panels').A($.sp('A'), $.sp('B'), $.sp('C'), $.sp('D'), $.sp('E'))
            ).A()
            $('span').css({width: '100px', fontSize: '40px'})
            if ($('div.panels').length) {
                $('div.panels span:last-child').K('last')
                $('div.panels span').hv(
                    function () {
                        $(this).st().an({width: '110px', fontSize: '50px'}, s)
                            .sib('span').st().an({width: '90px', fontSize: '30px'})
                    },
                    function () {
                        $(this).st().an({width: '90px', fontSize: '30px'})
                    })
            }

        }

        $.coolSelector()

    }
    FLASH = function () {
        z();
        timeline = $.dA('+').WH('auto');
        timeline.A($.c('b', 500, 500), $.br());
        _.t(24, function (x) {
            timeline.A(
                $.d('r', 100, 100).css({display: 'inline-block'}).H((x * 10) + 100)
            )
        })
    }

    BORDERS = function () {z();


        change = function () {
            var img

            $.fn.J= $.fn.animate

            img = $.i('me').WH(100).A()


            $.fn.J = $.fn.animate
            img.C('g').bS('dashed') //.bW(20)
                .J({"border-top-width": 10}, 1000)
                .J({"border-bottom-width": 10}, 1000)
                .J({"border-left-width": 10}, 1000)
                .J({"border-right-width": 10}, 1000)
                .J({"padding-top": 10}, 1000)
                .J({"padding-bottom": 10}, 1000)
                .J({"padding-left": 10}, 1000)
                .J({"padding-right": 10}, 1000)
                .J({"margin-top": 10}, 1000)
                .J({"margin-bottom": 10}, 1000)
                .J({"margin-left": 10}, 1000)
                .J({"margin-right": 10}, 1000)
                .J({"margin-top": 0}, 1000)
                .J({"margin-bottom": 0}, 1000)
                .J({"margin-left": 0}, 1000)
                .J({"margin-right": 0}, 1000)
                .J({"padding-top": 0}, 1000)
                .J({"padding-bottom": 0}, 1000)
                .J({"padding-left": 0}, 1000)
                .J({"padding-right": 0}, 1000)
                .J({"border-top-width": 0}, 1000)
                .J({"border-bottom-width": 0}, 1000)
                .J({"border-left-width": 0}, 1000)
                .J({"border-right-width": 0}, 1000)
        }
        $.$$(function () {
            z();
            _.t(10, change)
        })
        _.t(10, change)
    }
    ANL = function () {
        $.fn.anL = function () {
            var q = this
            this.sh("slow")
            this.an({"marginLeft": "300px"}, 2000)
                .an({"marginLeft": "0px"}, 2000)
            this.hd("slow", function () {
                q.anL()
            })
        }

        $.d('b', 100, 300).anL()
    }

    HOVERBOX = function () {
        z();
        d = $.d('o', 500, 500, '+').id('test')
        y = $.c('p', 400).K('box').hd();
        d.A(y);
        $('#test').hover(function () {
            $('.box').stop().fadeTo(200, 1)
        }, function () {
            $('.box').stop().fadeTo(200, 0)
        })
    }
    HVBX = function () {
        $.x()

        $.hvBx = $.hoverBox = function () {
            z()
            d = $.d('o', 500, 500, '+').id('test')
            y = $.c('p', 400).K('box').hd()
            d.A(y)
            $('#test').hv(function () {
                    $('.box').st().f2(200, 1)
                },
                function () {
                    $('.box').stop().f2(200, 0)
                })
        }

        $.hvBx()
    }


    NOTANIM = function () {
        $.x()
        var s = 1000, m = function (n) {
                return {marginLeft: n}
            },
            n = 0;
        d = $.d().id('test').A().A(y = $.can('x', 40).K('box'));
        d2 = $.d().id('debug');
        $('#test').$(function () {
            $.notAn($('.box')).an({marginLeft: -10}, s,
                function () {
                    $('#debug').A($.p('start..' + n++))
                })
                .an({marginLeft: 10}, s)
                .an({marginLeft: -10}, s)
                .an({marginLeft: 10}, s)
                .an({marginLeft: -10}, s)
                .an({marginLeft: -10}, s)
                .an({marginLeft: 0}, s,
                function () {
                    $('#debug').A($.p('fin'))
                })
        })
        NOTAN = function () {
            $.x()
            var s = 1000,
                m = function (n) {
                    return {marginLeft: n}
                },
                n = 0
            d = $.dI('test').A(y = $.c('x', 40).K('box'))
            d2 = $.dI('debug')
            $('#test').$(function () {
                notAnim($('.box')).an({marginLeft: -10}, s,
                    function () {
                        $('#debug').A($.p('start..' + n++))
                    })
                    .an({marginLeft: 10}, s).an({marginLeft: -10}, s)
                    .an({marginLeft: 10}, s).an({marginLeft: -10}, s)
                    .an({marginLeft: -10}, s).an({marginLeft: 0}, s,
                    function () {
                        $('#debug').A($.p('fin'))
                    })
            })
        }
    }


    work()


    FRIDGEMAG = function () {
        z();
        word = function (text, c1, c2) {
            var s = $.sp(text).C(c1, c2).A().drag()

            return s
        }

        w = word('hello', 'b', 'g');
        word('sicko', 'g', 'b');
        word('why, i oughta..', 'p', 'x');
        word('it was raining..', 'j', 'k');
        word('who ya gonna call?', 'h', 'i');
        word('dag nabit!', 'f', 'g');
        word('i like', 'd', 'e');
        word('tomorrow', 'a', 'c');
        word('me', 'r', 'b')
    }
    TXCAN = function () {
        z();
        c = $.c('o', 500, 500);
        //c.save().lineWidth(30).setStrokeColor('r').lineTo([[100,100],[150,110]]).stroke().restore().lineTo([[200,100],[200,600]]).stroke()
        // c.roundRect(100,50,100,100,50).stroke()//.fill()
        //c.line(10,10,50,500).stroke()
        c.line([
            [[100, 100], [200, 200], [140, 900]]
            // ,  [[150,150],[250,250], [20,300]]
        ]).stroke();
        //c.line([100,100],[200,200],[150,150],[250,250] ).stroke()
        //c.line( [350,50],[25,25],  [450,10],[20,550]).stroke()
    }

    function broke() {
        QUU = function () {
            $.x('x', 'quu')


            //  Qu   allow series fns to be execd asynch on an el
            //  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
            //
            // which levgs qus to build up   series of steps
            // that will transtn  1+ CSS vals thru/out the dur
            //  can pass a cb fn to  .an()  to exec on done

            x = $('.x')


            x.an({height: 20}, "slow",
                function () {
                    $("#title").html("in cb")
                })
            //   *Ques As Cbs
            // Instead of passing a cb as an argument,
            // we can add another function to the queue
            // that will act as our cb
            // This will execute
            // after all of the steps in the
            // anim  have completed.

            x.an(
                {height: 20},
                "slow").qu(function () {
                    $("#title").h("in anim")
                    $(this).dq()
                })
                //  tells jQ  to continto N-item in  que

                //    queued fn will exec   after the anim
                //  jQuery does not have any insight into
                // how the queue items function,
                // so we need to call .dequeue(),
                // which tells jQuery when to move to the n item in the queue.

                //  Another way of dequeuing
                // is by calling the fn that is passed to your cb
                // That fn will auto  call .dq() for you

                .qu(function (n) {
                    $l("I fired!");
                    n()
                })
            //  *Custom Queues
            // Up to this point all of our anim
            // and qu   ex  have been using the def qu  n  which is fx.
            // Elements can have multiple queues
            // attached to them,
            // and we can give each of these qusa dif  name.
            // We can specify a custom queue name as
            // the 1st arg  to the .qu() method.


            x.qu('an', function (n) {
                $l("Step 1");
                n()
            }).qu('an', function (n) {
                $l("Step 2");
                n()
            }).dq('an');
            //  Notice that we have to call the .dequeue() method passing it the name of our custom queue to start the execution. Every queue except for the default, fx, has to be manually kicked off by calling .dequeue() and passing it the name of the queue.

            //   Clearing The Que
            //  Since queues are just a set of ordered operations, our application may have some logic in place that needs to prevent the remaining queue entries from executing. We can do this by calling the .clearQueue() method, which will empty the queue.


            x.qu('an', function (n) {
                $l("nev log (qu clrd)");
                n()
            })
                .clrQ('an').dq('an')


            //   In this example, nothing will happen as we removed everything from the steps queue.

            //   Another way of clearing the queue is to call .stop( true ). That will stop the currently running animations and will clear the queue.


            //  *Replacing The Queue:  When you pass an array of functions as second argument to .queue(), that array will replace the queue.


            x.qu(
                'an',

                function (n) {
                    $l("nev fire (qu replaced)");
                    n()
                })

                .qu(
                'an', [
                    function (n) {
                        $l("fired!");
                        n()
                    }
                ]).dq('an')


            //
            // You can also call .queue() without passing it functions, which will return the queue of that element as an array.

            x.qu('an', function (n) {
                $l("fired!");
                n()
            })

            $l(x.qu('an'))

            x.du('an') //?

        }


        JQANIMZ = function () {
            $.x('s', 'jqanim')


            /*
             setBackgroundImage = q.bi = function(url){//set background image
             var toUrl =function(url){
             return 'url("'+ src(url) +'")'}
             q.backgroundImage(toUrl(url))
             return q}

             bp=q.positionBackgroundImage=function(x,y){
             var g=G(arguments),x=g[0],y=g[1]
             x=N(x)?x:0
             y=N(y)?y:0
             q.css({backgroundPos:x+'px '+y+'px'})
             return q}
             fr=q.stFr=function(n,w){
             if(O(n)){q.bp(n.n,n.w)}
             else{q.bp(n*w)}
             return q}

             anf= q.anFr=function(n,w){var c=0; n=n||10; w=w||20
             $.ev(function(){ q.sFr(c,w);  c=(c+1)%n })}

             a= $.dA().bgImg('chicks').anf()

             */
        }


        TXPLUG = function () {
            z();
            d = $.d('r', 100).A('abc');
            e = $.d(100).col('r').A('abc');
            f = $.d('r', 100).col('b').A('abc');
            g = $.d('b', 500, 500)
        }
        COLANIM = function () {
            $.x()
            $CSS({
                $el: {C: '#aaa', c: '#006', fz: 25, ta: 'center', pad: '1em'}
            })
            $.d(['color anims']).id('el')
            $.bt('anim cols').id('tog')
            $('#tog').$(function () {
                $("#el").an({c: 'g', C: "rgb(20,20,20)"})
            })


            /*
             Color Animation
             jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.

             The following properties are supported:

             backgroundColor
             borderBottomColor
             borderLeftColor
             borderRightColor
             borderTopColor
             color
             columnRuleColor
             outlineColor
             textDecorationColor
             textEmphasisColor
             Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.

             Class Animations
             While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.

             link
             */
        }
        ANF = function () {
            z()

            a = $.dA().bgI('chicks').anf()
            anim = function (o) {
                o = o || {};
                return {
                    u: o.u || 'chicks',
                    n: o.n || 1, w: o.w || 64, r: o.r || 60, c: o.c || 0, l: o.l || false
                }
            }
            an = function (q, a) {
                if (q.han) {
                    _.cI(q.han)
                }
                if (a.u) {
                    q.bi(a.u)
                }
                if (a.n > 1) {
                    q.han = _.sI(function () {
                        a.c++;
                        if (!a.l && a.c > a.n) {
                            _.cI(q.han);
                            q.han = false
                        }
                        else {
                            a.c %= a.n
                        }
                        q.sFr(a)
                    }, a.r)
                }
            }
        }//call stack

        FALLING = function () {
            z();
            //this goes in css
            $header2 = $.sp('hello').A();
            $header2.lettering(); // wrap <span class="charx"/ > around each character within header
            $spans = $header2.fi('span');
            delay = 0;
            $header2.$(function () {
                $spans.e(function () {
                    $(this).css({transitionDelay: delay + 's'}); // apply sequential trans delay to each character
                    delay += 0.1
                });
                $header2.K('dropped'); // Add "dropped" class to header to apply transition
                setTimeout(function () { // reset header code
                    $spans.e(function () {
                        $(this).css({transitionDelay: '0ms'})
                    });
                    // set transition delay to 0 so when 'dropped' class is removed,
                    // letter appears instantly
                    $header2.removeClass('dropped'); // remove class at the "end" to reset header.
                    delay = 0
                }, 1800); // 1800 is just rough estimate of time transition will finish, not the best way
            })

        }
        anim = function (o) {
            o = o || {}
            alert('anim')
            return {
                u: o.u || 'chicks', n: o.n ||
                1, w: o.w || 64, r: o.r || 60, c: o.c ||
                0, l: o.l || false
            }
        }
        an = function (q, a) {
            alert('an')
            if (q.han) {
                _.xI(q.han)
            }
            if (a.u) {
                q.bi(a.u)
            }
            if (a.n > 1) {
                q.han = _.sI(function () {
                    a.c++
                    if (!a.l && a.c > a.n) {
                        _.xI(q.han);
                        q.han = false
                    }
                    else {
                        a.c %= a.n
                    }
                    q.sFr(a)
                }, a.r)
            }
        }

    }

}
cssApps()
function cssApps(){
    EXT = function () {
        $.x('x', 'ext')
        $CSS({
            d: {
                ex: 'icon',
                C: 'y', c: 'o', mx: {size: [250]}
            }
        })
        $.d(['hello'])
        $CSS()
    }
    BORD = function () {

        $.x('x', 'bordered')

        $CSS({

            _bordered: {
                'border-top': 'dotted 1px black',
                'border-bottom': 'solid 2px black'
            },
            //And we want to use these properties inside other rule-sets. Well, we just have to drop in the name of the class where we want the properties, like so:
            '#menu a': {
                ex: '_bordered',
                c: 'r'
            },

            '.post a': {
                c: 'r',
                ex: '_bordered'
            }

        })
        // $CSS()


    }
    SIZE = function () {
        $.x('x', 'size')

        $CSS({

            d: {
                C: 'z', c: 'w',
                mx: {

                    size: [1250]
                }
            }

        })

        $.d(['hello'])
        $CSS()
    }
}

//can

    TESTGRAD=function(){$.C(); x= c.ctx()


        x.lg(
            {cS:{r:0, r:.1, b:.15, r:.2, y:.5, b:1},
                x1: 50, x2:500, y2:100}).fr(0,0,300)

        x.lg({cS:{o:.2, r:.6, g:.8} , x1:50,x2: 500, y2:100}).fr(300,0,300)


        //black to white
        // x.lg({cS:{z:0, w:1}, x2: x.W(), y2:0 }).fr()

    }
    LINRAD=function(){$.C()
        x= c.ctx()
        x.lg({x1:50,  y1:500, y2: 100, cS: {o:.2, r:.6, g:.8} })
        x.fr(0,0,100,100)
    }

    GLOBALCOMP=function(){
        c=$.C()

        Q(function(){


            x.d('me', 100, 100)
        x.d('me', 200, 100)
        x.d('me', 300, 100)
        x.d('me', 400, 100)
        x.d('me', 500, 100)
        x.d('me', 150,150) //  x.sO(); x.dO()
        x.xo()
        c.$(function(){var g=G(arguments), o
            o = {x: g.f, y: g.s}
            x.d('guy', o.x, o.y)
        })
    })}



PIXTX = function () {
    $.C()

    get = function () {
        d = m.getData(0, 0, 400, 200)
    }

    // g.putData(d, 0, 100)

    put = function () {
        g.context.putImageData(d, 200, 200)
    }

    putget = function () {

        get()
        put()
    }

    putget()

    change = function (num) {
        get()

        data = d.data

        _.e(data, function (pixel, index) {

            d.data[index] = pixel + (num || 100)

        })

        put()
    }
    anim = function () {

        num = 0

        setInterval(
            function () {
                change(num)
                num += -1
            },

            100)

    }

}

TRANS = function () {

    z()

    x = $.c('yellow', 1000, 800).A()
    y = $.c('purple', 400).A()

    x.$$(function () {
        x.fit('me')
    })

    x.fit('me')


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

LINRAD = function () {
    z()

    d = $.c('y', 500)

    c = $.c('y', 500).A()

    c.context.f(
        c.context.linGrad(50, 0, 500, 100).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
    )

    c.fr()

}
RADGRAD = function () {
    z()

    d = $.c('y', 500)

    c = $.c('y', 500).A()

    c.context.f(
        c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
    )

    c.fr()

}

CAN=function(){var picHolder
    $.fm()
    s2.A(picHolder= $.sp().id('pics'))
    $.getJSON('/img',   function(i){ _.e(i, withImage  ) } )
    function withImage(img){
        dataUrl = img.d
        can =   $.c(100, 100)
        can.click(function(){
            var mouse = $('#mouse')
            mouse.val('click')
            mouse.change()
            mug = img.d   })
        picHolder.A(can)
        can.fit(dataUrl)    }

    s2.A(
        x = canvas = $.c('yellow',1000,800))
    setInterval(function(){
        //  x.bc()
    }, 10000)
    s1(
        $.lb('mouse'),

        $.sl('none','click','enter','leave','move').id('mouse').o(
            function(s){
                x.q.ub()
                if(s=='click'){
                    x.$(function(X,Y){
                        x.Cd(mug,X,Y)
                    })}
                if(s=='enter'){x.ME(function(X,Y){x.Cd(mug,X,Y)})}
                if(s=='leave'){x.ML(function(X,Y){x.Cd(mug,X,Y)})}
                if(s=='move'){x.MD(function(){x.MM(function(X,Y){x.Cd(mug,X,Y)})})

                    x.MU(function(){x.q.ub('mousemove')})}
            }),


        $.lb('global comp'),
        sl.apply(this, V(oO('g')) ).$(function(v){ x.gc(v) }),
        //gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
        $.bt('SAVE(sv)',function(){
            x.sv()
        }), $.br(2),
        $.bt('CUT(dots)', function(){

            x.q.q.unbind()

            qi('mouse').v('none')

            x.dots()   }), $.br(2),
        $.bt('RESTORE(R)', function(){x.R()}), $.br(2),
        $.bt('bc:change background color',function(){x.bc()}),$.br(2),
        $.bt('cir:make circle',function(){x.cir(100,100,100)}),$.br(2),
        $.bt('d:draw',function(){x.d($w['mug']||'me')}),$.br(2),
        $.bt('dC:draw center',function(){x.dC($w['mug']||'me')}),$.br(2),
        $.bt('me',function(){x.me()}), $.br(2),
        $.bt('sh1',function(){x.ln(sh1)}), $.br(2),
        $.bt('sh2',function(){x.ln(sh2)}), $.br(2),
        $.bt('tictactoe',function(){
            x.ln(tictactoe)
        }), $.br(4),
        $.bt('sampLinGrad',function(){

            x.sampLinGrad()

        }),
        $.br(2),
        $.bt('sampRadGrad', function(){

            x.sampRadGrad()

        }),
        $.br(2),
        $.bt('xxx',function(){
            xxx('barney')}), $.br(2),
        $.bt('bads',function(){
            bad(x,200,8)  }), $.br(2),
        $.bt('coins', function(){

            coin(x,200,8)
        }),    $.br(2)
    )



}
FAN=function(){

    x=$.c('y',1000,800).A()
    y=$.c('x',400).A()

    x.$$(function(){x.fit('me')})

    x.fit('me')

    guidewires=false
    dragging=false
    mousedown={}
    loc={}

    restoreDrawingSurface=function(){}

    updateRubberband=function(m){
        x.ln(mousedown.x,
            mousedown.y,
            m.x,
            m.y)
    }


    drawGuidewires=function(){}

    x.MD(function(X,Y){
        dragging=true
        mousedown={x:X,y:Y}})


    x.MM(function(X,Y){

        if(dragging){
            restoreDrawingSurface()
            updateRubberband({x:X,y:Y})}

        if(guidewires){drawGuidewires(loc.x,loc.y)}

    })



    x.MU(function(X,Y){dragging=false
        restoreDrawingSurface()
        updateRubberband({x:X,y:Y})})
}
RUB=function(){ z()

    c = can=$.c('y', 1000, 800)

    c.$$( function(){ c.fit('me') } )

    c.fit('me')

    guidewires = false
    dragging = false
    mousedown = {}
    loc = {}
    rr = null
    data = null

    c.MD(function(x, y){
        data = can.gD()
        dragging = true
        mousedown = { x:x, y:y }
    })
    c.MM(function(X,Y){
        var m={x:X, y:Y},
            d = mousedown
        if(dragging){
            can.pD(data)
            can.ln(d.x, d.y, d.x, m.y)
            can.ln(d.x, d.y, m.x, d.y)
            can.ln(m.x, m.y, m.x, d.y)
            can.ln(m.x, m.y, d.x, m.y)
        }
    })
    c.MU(function(X,Y){

        dragging = false
        var d = mousedown, x1, x2, y1, y2
        if(X > d.x){ x1 = d.x; x2 = X } else {x1=X; x2=d.x}
        if(Y > d.y){ y1 = d.y; y2 = Y } else {y1=Y; y2=d.y}
        rr=[x1, y1, x2, y2]

        can.pD(data)

        can.crop(rr)

       // data = can.gD()

    })

}

FULLCAN=function(){z()

    $('html').css({
        height:'100%'//, of:'h'
    })

    $('body').css({
        margin:0,
        //g:0,
        height:'100%'
    })

    var s ='Click or tap the screen to start the game',

        fo ='bold 16px Arial',

        x = $.c('pink',W(), H()).A()

    // x.fs( x.lg().a(0,'y').a(1,'z') ).fr().fs('y').fo(fo).ftc(s, 30)


    $.i('me',function(image){

        var origW= image.W()

        image.W( Math.round( (50 * cW()) / 100 ) )
        image.H( Math.round( (image.W() * image.H() )/ origW) )


        x.draw(
            image,
            x.W()/2- image.W()/2,
            x.H()/2- image.H()/2
        )



    })


}
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

        //  copy dots object,, this is done due to call by reference

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

        //  is the dot outside of the convex rectangle?

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

        //  get middle position as vector from the bounding dots

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

        //   get the closest dot before dot from dots

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

        //  get the closest dot after dot from dots


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

        // this = center, v = destination

        angleTo: function(v) {
            var ref = this.subtract(v)
            return Math.atan2(ref.y, ref.x) + Math.PI
        },



        // 0 = on line, 1 = inside, -1 = outside

        getSide: function(v1,v2){
            return Math.sign((v2.x - v1.x) * (this.y - v1.y) - (v2.y - v1.y) * (this.x - v1.x))
        }
    }


}

SLOWFADE = function self(opacity) {
    z()

    //makes a yellow square and black dot??

    c = $.c('y', 500, 500)
    c.cir(10, 10, 10)

    opacity = U(opacity) ? 0.2 : parseFloat(opacity) - 0.001

    c.al(opacity).fillStyle('red').fillRect()

    if (opacity < 1) {
        setTimeout(function () {
            self(opacity)
        }, 30)
    }

}

 parlax()
function parlax() {
    transparent = function (i, num) {
        if (!N(num)) {
            return 'transparent url(' + i + '.png)'
        }
        return 'transparent url(' + i + '.png)' + num + '% 0px'
    }
    PARALLAX = function () {
        z()
        CanvasLayer = function (bg) {

            c = $.c('y', 500, 500).P('a').W('100%').H(256)
            if (bg) {
                c.bg(bg)
            }
            return c
        }
        CanvasLayer(transparent('me', 10))

        CanvasLayer(transparent('guy', 300))


    }
    PARALLAXBYMOUSE = function () {
        z()

        DivLayer = function (bg) {
            d = $.d('y', 500, 500).P('a').W('100%').H(256)
            if (bg) {
                d.bg(bg)
            }
            return d
        }

//awesome!!!!!
        back = DivLayer(transparent('me'))
        front = DivLayer(transparent('guy'))

        speed = 0
        xp = 0

        $('body').mousemove(function (e) {

            speed = e.pageX - ( W() / 2 )

            speed /= ( W() / 2 )

            $l(speed)
        })
        $('body').mouseout(function (e) {
            speed = 0
        })


        setInterval(function () {
            xp += speed
            back.bgP(xp + 'px 0px')
            front.bgP((xp * 3) + 'px 0px')
        }, 30)
    }
}
works()
function works(){


    CANVASQLOADER = function () {
        $.C();
        cjs.lq(['me'], function (q) {
            me = q('me')

            c.drawImage(me, 100, 100)

            c.pD(c.gD(100, 100, 500, 500), 120, 120)

            c.f("red").fr(10, 10, 50, 50)

            imgData = c.gD(10, 10, 50, 50)

            c.pD(imgData, 10, 70)

        })
    }

    CANVIIFIT = function () {

        z()

        m = $.can(800).A().fit('me')

        g = $.can('b', 600).A().fit('guy')

    }
    PIXELTEST = function () {
        c = $.C();
        cjs.lq(['me'], function (q) {
            me = q('me')

            c.drawImage(me, 100, 100)


            d = c.gD(100, 100, 500, 500)

            // c.pD(d , 120, 120 )

            zeros = 0
            nums = 0

            _.each(d.data, function (d) {
                if (d == 0) {
                    zeros++
                } else {
                    nums++
                }
            })

            $l('zeros: ' + zeros + ' - nums: ' + nums)

        })
    }

    TESTGRADWORKS = function () {
        z()

        c = $.c('y', 500).A()

        g = c.context.createLinearGradient(50, 0, 500, 100)

        g.addColorStop(.2, 'orange')
        g.addColorStop(.6, 'red')

        g.addColorStop(.8, 'green')


        c.context.fillStyle = g

        c.fillRect()

    }
PIXELS = function () {
    z()
    c = $.can('yellow', 900, 500).A()
    c.draw('me', 100, 100)
    setTimeout(function () {
        c.pD(c.gD(100, 100, 500, 500), 120, 120)
        c.f("red").fr(10, 10, 50, 50)
        imgData = c.gD(10, 10, 50, 50)
        c.pD(imgData, 10, 70)

    }, 200)
}
SHAD=function(){z()

    c = $.c('b', 700).A()

    c.draw('me', 100,100)

    c.shadowColor('r').shadowBlur(100).shadowOffsetX(200).shadowOffsetY(100)

    c.draw('me', 200,200)

    c.shadowColor('y').shadowBlur(100).shadowOffsetX(200).shadowOffsetY(100)

    c.shadowColor('g')
    c.draw('me', 0,300)

    c.shadow('p', 30,200, 20)
    c.draw('guy', 400,200)

}
    CROP=function(){
        c=$.C()
        c.fit('me')
    }
TXTT=function(){$.C()
    x.b('b','g',30)
    x.T(100,'Jason Yanofski', 10, 150)
    x.lg({x1:0,y1:0,x2:x.W(),y1:0,cS:{m:0,b:.5,r:1}})
    x.T('Jason Yanofski',10, 290, '-')}
}



drawHalf = function (c, i) {

    alert('drawHalf')
    c.dI(i, -i.width / 2, -i.h / 2)
}
quApps()
function quApps(){
    QUEUE = function () {
        z()
        s = $St(500)
        queue = new cjs.LoadQueue()
        queue.on("complete", handleComplete, this)
        queue.loadManifest(
            [{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}])
        function handleComplete() {

            image = queue.getResult("myImage")

            s.A(cjs.bm(image))

        }
    }
    QUEUEMUG = function () {
        z()
        s = $St(500, 500)
        qu = Ql().c(graphics, this).l([
            {id: "mug", src: "/getMug"},
            {id: "me", src: "/me.png"}
        ])

        ////// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
        function graphics() {
            // mug= s.bData( qu.gR("mug") ).drag()
            me = cjs.bm(qu.gR("me")).drag()
            s.A(me)
        }

    }
    CONTMUG = function () {
        z()
        s = $St(1000).A(m = mugCont())//.rgc('+')
        SL(m)
    }


}

//shape apps
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


}
BOWL = function () {
    St()


    ct = container = c = $Ct().a2(st)


    plX = st.W() / 2

    plY = 150

    plR = 100

    plr = 75 // this seems to determine the radius of the 'cluster' of balls

    oRng = 8 //outer ring

    nRng = 3// number of rings
//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1

    circ = cjs.circ(plX, plY, plR, 'yellow')

    container.A(circ) // cr = Hx().c(plR,'y').xy(plX,plY)


    rngSp = plr / (nRng - 1)


    aA = []


    var ast = function (x, y, r, m, f) {
        return {
            x: x, y: y, radius: r, m: m,
            f: f, vX: 0, vY: 0, player: false
        }
    }

    _.t(nRng, function (r) {
        var crR = 0, ang = 0, rngR = 0
        if (r == nRng - 1) {
            crR = 1
        }

        else {
            crR = oRng - (r * 3)
            ang = 360 / crR
            rngR = plr - (rngSp * r)
        }
        _.t(crR, function (a) {
            var x = 0, y = 0
            if (r == nRng - 1) {
                x = plX;
                y = plY
            }
            else {
                x = plX + (rngR * M.cos((ang * a) * M.PI / 180))
                y = plX + (rngR * M.sin((ang * a) * M.PI / 180)) - 350
            }
            aA.push(ast(x, y, 10, 5, 0.95))
            ct.A(cjs.cir(10, 'z').XY(x, y))


        })

    })
}
GRID = function () {
    St()
    ct = st.ct()
    ct.SL()

    rows = 5;
    cols = 6;
    sqP = 12;
    sqS = 80

    sqSP = sqS + sqP
    _.t(rows * cols, function (i) {
        drawSquare(ct, sqSP * (i % cols), sqSP * M.fl(i / cols)
        )
    })

    function drawSquare(ct, x, y) {
        var h = $H()
        h.a2(ct).f($r())
        h.graphics.dr(5, 5, 70, 70)
        if (x) {
            h.X(x)
        }
        if (y) {
            h.Y(y)
        }
        return h
    }
}
TANGLE=function(){z()

    a = $.dA('r',50,50).XY(50).A().pad(10)
    b = $.dA('b',100,100).XY(100).A().pad(10)
    c = $.dA('g',200,200).XY(200).A().pad(10)
    d = $.dA('y',400,400).XY(400).A().pad(10)

    y=function(aa,bb,cc,dd){


        if(aa && U(bb)){  aa.A().P('a') }

        if( bb ){ bb.A( aa.P('static') )  }

        if( dd ){ dd.A( cc.P('s') )  }

    }


}
ISO=function(levNum){


    Tile = function(){

        var that =this
        var shape = this

        this.container = new createjs.Container().drag()
        this.tile = cjs.diamond(80, 40, 'blue')

        //this.tile.graphics.s('red').f('blue').s('green').mt(0,0).lt(40,-20).lt(80,0).lt(40,20).lt(0,0)
        this.container.A(this.tile)
        this.coin = false
        this.addCoin = function(){


            this.coin = tileCoin()
            this.container.A(this.coin)

        }
        this.addBad=function(){

            this.bad= tileBad()
            this.container.A(this.bad )

        }

        this.playerTo = function(){

            if(shape.wasOn==true){location=location}//ISO()

            player.X(that.container.x )
            player.Y(that.container.y -14 )


            player.tile= shape
            player.col= shape.col
            player.row= shape.row

            if(shape.coin){shape.coin.remove()}
            if(shape.bad){location=location}
            shape.wasOn=true
            //if(isolated()){alert('!')}
        }

        this.container.on('dblclick', function(){

            h  = that
            that.tile.graphics.f('red').dc(0,0,2)
            $l('dblclicked!')
            that.playerTo()
        })

    }
    isoRow=function(r,howMany,x,y){
        x = x||0;
        y = y||0

        var row=[]

        _.times(howMany, function(i){

            x = x+ 40
            y = y- 20
            var t= new Tile()

            t.container.XY(x,y)

            stage.A(t.container)

            createjs.bindSlide(t.container)

            t.col= i

            t.row= r

            row.push(t)

        })

        return row}
    isoGrid=function(n1,n2,x,y){ x=x||0; y=y||0

        var grid=[]

        _.times(n2,function(i){
            x=x+40
            y=y+20

            var row = isoRow(i,n1,x,y)

            grid.push(row)

        })




        return grid}

    tileCoin=function(){

        return cjs.circ(15,'yellow', 'black')

    }

    tileBad=function(){ return cjs.circ(15,'green', 'orange')}

    tilePlayer=function(bm){
        player = bm
        player.right=function(){
            player.tile.container.remove()
            grid[player.row][player.col]=null
            grid[player.row][player.col+1]. playerTo()}
        player.left=function(){

            player.tile.container.remove()
            player.tile.exists=false
            //player.tile=null
            grid[player.row][player.col]=null
            grid[player.row][player.col-1]. playerTo()}
        player.down=function(){
            player.tile.container.remove()
            grid[player.row+1][player.col]. playerTo()}
        player.up=function(){

            player.tile.container.remove()
            grid[player.row-1][player.col]. playerTo()


        }
        player.to=function(x,y){
            grid[x][y].playerTo()
            return player}

        kD('u',function(){player.up()})
        kD('d',function(){player.down()})
        kD('l',function(){player.left()})
        kD('r',function(){player.right()})
        return player}


    killTile=function(a,b){
        grid[a][b].container.remove()
        grid[a][b].wasOn=true

    }
    lev1=function(){
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
    lev2=function(){
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


        killTile(1,2)
        killTile(2,2)
        killTile(2,6)
        killTile(2,7)
        killTile(2,8)
        killTile(4,0)
        killTile(4,3)

        killTile(4,4)
        killTile(4,6)
        killTile(4,9)
        killTile(6,1)
        killTile(6,2)
        killTile(7,1)
        killTile(7,3)

        killTile(7,4)
        killTile(7,9)

        killTile(8,6)
        killTile(8,7)
        killTile(8,9)







    }
    lev3=function(){

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
    lev4=function(){


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


    isolatedBeta=function(){
        r= player.row;
        c= player.col
        if(
            //grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
        //&&  grid[r-1] &&grid[r-1][c] && grid[r-1][c].wasOn

        grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
        ){return true}
    }
    z()
    stage = $St(900,500).tick().A()
    grid = isoGrid(10,10,0,240)
    kD('s',function(){location=location})
    if(levNum){ window['lev'+levNum]()}
    else if( window['_pam']){window['lev'+ _pam]()}
    else{lev1()}
    stage.bm0('me', function(me){
        player = tilePlayer(me).sXY(.2).drag().to(5,5)})




}
CONNECT=function(){  St() //m$$('location=location')

    // st= $St('p', 1000)
    pink = cjs.circ(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
    st.A(pink)
    ct = $Ct()
    st.A(ct)
    green = cjs.circ( 200,'green','purple').XY(320,300)//.rXY(100)
    yellow = cjs.circ( 100,'yellow','purple').XY(250)
    red= cjs.circ( 40,'red','purple').XY(200,100)
    orange = cjs.circ( 20,'orange','purple').XY(300)
    ct.A(green, yellow, red, orange )
    LS(yellow, ct)
    SL(green)
    SL(green,pink)

    SL(yellow)
    SL(red,ct)
    SL(orange, red)

}
SHOOTY = function () {
    St()
    $.ghost = function () {
        return $.c('X', 500, 500).fit('me').al(.1)
    } // how cool.. it 'steals' the drag because its on top but looks like its below

    st.mug(function (m) {
        m.XY(100, 100).WH(150)
        SL(m)
        //key(m, '-')// ugun(mug)
    })
    c = $.ghost().XY(10, 10).A().dg()
}
CVTX = function () {
    return $.d().A($.c(960, 400).id("testCanvas"))
}
matrix()
function matrix(){

    MATRIX1=function(){// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')


        stage = St()

        $.d('b', 50, 50).A()

        //stage = s = cjs.stage(1600,1000).tick().A()

        // on stage enter, change background color, though you
        // cant see it here because stage fills screen
        // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
        st.on('e', co)

        //make a container
        st.ct(function(c, s){

            //the little me clicks do not hit the 'big' me underneath it.  that's normal.
            //but it does hit the container.  but this example shows off 'remove', so it only hits once
            //however, it continues to propogate on to the container. hmmm..

            c.bm('me',
                function(b){
                    b.sXY(.2).XY(100,80)
                    b.on(click, function(){$l('lit')},'/')  //on click, log('lit'), just once (remove listener)!

                })





// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click

            c.bm('me',function(bm){
                bm.sXY(.4).XY(100,180)
                bm.$( function(){$l('mid')}, '-')  //on click, log('mid'), and stop prop
            })

            c.bm('me',function(bm){
                bm.sXY(1.5)
                bm.on('click',function(){$l('big')})  //on click, log('big')
            })    //on click, log('con')
            c.on('click',  function(){$l('con')})
        })


        st.ct(   function(ct){c=ct
                var vn=0, rvn=0, on=0, ron=0

                ct.X(200)

                ct.mug(function(b){b.sXY(.8).XY(200,80)})
                ct.mug(function(b){b.sXY(.8).XY(100,280)})
                ct.mg(function(b){b.sXY(.8).XY(340,180)})

                //this shows over/out vs rollover/rollout
                //over/out get retriggered when switching between connected sprites
                //rollover/rollout does not because it is still touching 'something'
                ct.on('mouseover',function(){c.X(10,'+');$l('v: '+vn++)})
                ct.on('rollover',function(){c.X(20,'-');$l('rv: '+rvn++)})
                ct.on('mouseout',function(){c.Y(10,'+');$l('o: '+on++)})
                ct.on('rollout',function(){c.Y(20,'-');$l('ro: '+ron++)})
            }
        ).MV(40)


        st.ct(function(ct, st){

            ct.X(700)
            ct.mug(function(bm){bm.sXY(.8).XY(200,80)})
            ct.mug(function(bm){bm.sXY(.8).XY(100,280)})
            ct.mug(function(bm){bm.sXY(.8).XY(340,180)})

            //this example shows which sprites are acted upon with over/rollover
            //over only affects one
            //rollover affects ALL
            //if you enter a sprite from outside, they all grow (via rollover),
            //and the one sprite grows double (via over)

            ct.on('mouseover',function(){$l('mouseover'); this.sXY(.01,'+') })
            ct.on('rollover',function(){$l('rv'); this.sXY(.01,'+')})
            ct.on('mouseout',function(){ })
            ct.on('rollout',function(){ })

            // in summary,
            // rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
            // BUT, they will all recieve events separately

        }).MV(40) //??? mouse events? speed for some mouse checking thing
        st.ct(function(ct,st){
            ct.x = 1400
            ct.bm('me',function(bm){
                //make the little me slide the entire container
                //it acts as a handle! (for its container)
                lit = bm.sXY(.2).XY(100,80)
                SL(bm, ct)
                ctr.bm('me',function(bm){
//big me will scale the little me
                    big = bm.sXY(2).XY(100,180)
                    SC(bm, lit)
                    ct.bm('me',function(bm){ bm.sXY(.6).XY(150,180).SL(); RT(bm, big)})})
            })

//guy slides stage
            ct.bm('guy',function(bm){bm.sXY(.4).XY(100,180); SL(bm, st)})
        })




    }
    MATRIX0=function(){ z(); $l('matrix')

        st = stage = $St(1600,1000)

// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')

        $.d('b', 50, 50).A()


        // on stage enter, change background color, though you
        // cant see it here because stage fills screen
        // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
        st.on('mouseenter', function(){$('body').C($r())})

        st.A( ct=container=c= $Ct()  )

        ct.bm('me',  function(bm){
            //b.sxy(.2).xy(100,80)

            //b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!

        })



        //make a container
        st.ct(function(c, s){

            //the little me clicks do not hit the 'big' me underneath it.  that's normal.
            //but it does hit the container.  but this example shows off 'remove', so it only hits once
            //however, it continues to propogate on to the container. hmmm..



// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
            ct.bm('me',function(b){
                b.sXY(.4).XY(100,180)
                //b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
            })


            ct.b('me',function(b){
                b.sXY(1.5)
                // b.o('$',fL('big'))  //on click, log('big')

            })

            //on click, log('con')
            //c.o('$',  fL('con'))

        })

        st.ct(  function(c){

            var vn=0,
                rvn=0,
                on=0,
                ron=0


            c.X(200)


            c.mug(
                function(b){
                    b.sXY(.8).XY(200,80)
                })


            c.mug(
                function(b){
                    b.sXY(.8).XY(100,280)
                })


            c.mg(
                function(b){
                    b.sXY(.8).XY(340,180)
                })

            //this shows over/out vs rollover/rollout
            //over/out get retriggered when switching between connected sprites
            //rollover/rollout does not because it is still touching 'something'

            // c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
            //c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
            // c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
            //  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})

        }  )//.MV(40)

        st.ct(function(c,s){

            c.x(700)
            c.mg(function(b){b.sxy(.8).xy(200,80)})
            c.mg(function(b){b.sxy(.8).xy(100,280)})
            c.mg(function(b){b.sxy(.8).xy(340,180)})

            //this example shows which sprites are acted upon with over/rollover
            //over only affects one
            //rollover affects ALL
            //if you enter a sprite from outside, they all grow (via rollover),
            //and the one sprite grows double (via over)



            c.o('v',function(g,e){
                $l('v')
                g.sxy(.01,'+')})

            c.o('rv',function(g,e){
                $l('rv')
                g.sxy(.01,'+')})

            c.o('o',function(q,e,g){ })
            c.o('ro',function(q,e,g){ })


            // in summary,
            // rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
            // BUT, they will all recieve events separately

        }).MV(40)

        st.ct(function(ct,st){

            ct.X(1400)

            ct.bm('me',function(bm){

                //make the little me slide the entire container
                //it acts as a handle! (for its container)
                lit=bm.sXY(.2).XY(100,80)
                SL(bm,ct)


                ct.bm('me',function(bm){
//big me will scale the little me
                    big=bm.sXY(2).XY(100,180)

                    SC(bm,lit)

                    ct.bm('me',function(bm){ bm.sXY(.6).XY(150,180)
                        SL(bm)
                        RT(bm, big) })
                })

            })


//guy slides stage
            ct.bm('guy',function(bm){
                bm.sXY(.4).XY(100,180)
                SL(bm, stage)
            })



        })




    }
    MATRIX=function(){// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')

        z()

        $l('matrix')


        st=stage=s=$St(1600,1000).A().tick()


        // on stage enter, change background color, though you
        // cant see it here because stage fills screen
        // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
        st.on('mouseenter', function(){$('body').C($r())})

        st.A( ct=container=c=new createjs.Container()  )

        ct.bm('me',  function(bm){

            bm.sXY(.2).XY(100,80)
            bm.on('click', function(){
                $l('lit')}, this, true) //just once

        })

        //make a container
        st.ct(function(ct, st){

            //the little me clicks do not hit the 'big' me underneath it.  that's normal.
            //but it does hit the container.  but this example shows off 'remove', so it only hits once
            //however, it continues to propogate on to the container. hmmm..

// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
            ct.bm('me',function(bm){  //future: c.bm('me', .4, function(bm){})
                bm.sXY(.4).XY(100,180)
                bm.on('click', function(e){$l('mid')
                    e.stopPropagation()})
            })

            ct.bm('me',function(bm){
                bm.sXY(1.5)
                    .on('click',function(){$l('big')})
            })

            ct.on('click', function(){$l('con')})

        })



    }
}
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
works()
function works() {
    STG = function () {
        z()

        s = $St('z', 400).bm('me');
        s.can.dg()

        $St($.c('o', 400, 100).dg()).bm('me')

        $.c('x', 300, 100).id('someId').dg()
        $St(['someId']).t().bm('me')

    }  //three ways to make a new stage


    RMEVT = function () {
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
                me.off('pressmove', cb)
            }

            b.on('pressmove', b)
        })


        ///////
        s.can.P('a').XY(300)
        s.A(h = shape = cjs.shape())
        h.rect(100, 200, 0, 200, 'red')
            .rect(100, 100, 100, 20, 'green')
            .rect(145, 120, 10, 80, 'orange')
            .circ(105, 100, 20, 'blue')
            .circ(105, 100, 8, 'black')
            .circ(200, 100, 20, 'blue')
            .circ(200, 100, 8, 'black')
            .circ(100, 20, 100, 'green')
            .rXY(100, 300).XY(100, 300).drag()
        p = function () {

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
                [{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200]
            )
        }
        p()
    }
    SHAPES = function () {
        St()
        s.can.P('a').XY(300)
        s.bm('me', 0.2, function (bm) {
        })
        s.A(cjs.circ(100, 'blue', 'green').XY(100, 100).drag())
        s.circ(100, 100, 10, 'red', 'yellow')
            .circ(10, 100, 100, 'black', 'purple')
            .circ(100, 10, 100, 'blue', 'red')
            .circ(150, 150, 120, 'red', 'blue')
            .circ(30, 'brown', 'gray')
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
    }
    FANCY = function (x, y) {


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


    }

    CJSLAY = function () {
        Q(['me', 'guy'], function (q) {
            st = $St()

            me = q.bm('me').a2(st).sXY(3)
            guy = q.bm('guy').a2(st).sXY(.5).drag()
            $.bt('s.sXY(2)', function () {
                st.sXY(2)
            }).A()

            cjs.t(function () {
                me.X(guy.x * 2.2 - 140)
                me.Y(guy.y * .2)
            })
        })
    }


    EASELPHYS = function () {
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

            b.go(10, 10)

            cjs.t(function () {
                $l(b.inStage())
            })
        })
    }


    TXH = function () {
        St()

        h = $H().a2(st)
        h.f('red').s('black')
        h.graphics.dc(400, 400, 200)
        h.graphics.dr(100, 0, 200, 200)

        /////////

        h.rec(100, 100, 100, 100, 'y')
        h.rec(200, 200, 100, 100, 'b')
        h.c('o').polyStar(300, 100,
            50, 5, 0.6, -90)
        h.c('w', 'z')
            .roundRectComplex(400, 300,
            300, 300, 20, 20, 30, 40)
        h.cir(500, 200, 40, 'b', 'x', 10)


        function exceedsStackSize() {
            ////////////////
            h.c('y').dc(100, 100, 30).c('o').dc(100, 100, 10)
                .c('X', 'g', 8)
                .mt([
                    [100, 100], [300, 300], [400, 100],
                    [500, 300], [450, 450]], [[500, 0], [600, 100]
                ])
            h.cir(600, 300, 'u', 'g', 10)


            lf = {c1: 'b', c2: 'o', y1: 200, y2: 700}
            v = [[300, 300], [320, 200], [640, 400], [280, 650]]
            //two ways to make the same thing
            s.h().poly({
                v: v,
                lf: lf
            })
            s.h(250, 50).lf(lf).mt(v)
        }
    }


    TWORECS = function () {
        St()

        ct = s.ct(1000, 300).drag()
        ct.rec({w: 400, h: 200, c: 'r', C: 'o', l: 10, a: -5})
        h1 = ct.rec({w: 200, h: 400, c: 'r', C: 'o', l: 10, a: 5})
        h = s.h().dr2() // h is another container.. to clr ->  h1.children[0].clr()
    }


    CIRCRG = function () {
        s = St()
        nip = function () {
            x1 = 0
            y1 = 0
            r1 = 10
            x2 = 0
            y2 = 0
            r2 = 100
            var h = cjs.shape(10, 10).a2(s).drag().al(.8)
            h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
                x1, y1, r1, x2, y2, r2)
                .dc(0, 0, 100)
                .endFill()
            return h
        }

        x1 = 0
        y1 = 0
        r1 = 10
        x2 = 0
        y2 = 0
        r2 = 100

        h = cjs.shape(10, 10).a2(s).drag()

        change = function () {
            //  h.remove()
            // h=cjs.shape(10, 10).a2(s).drag()

            h.graphics.rf(['blue', "orange"], [0, 1], x1, y1, r1, x2, y2, r2).dc(0, 0, 100).endFill()

            // x--

            // r1++
            // r2++
        }


        setInterval(change, 1000)

        change()

        n = nip()

        h2 = cjs.shape(500, 100).a2(s);
        h2.graphics.beginRadialGradientFill(["red", "yellow"], [0, 1], 100, 100, 0, 100, 100, 50).dc(50, 50, 100)

        ////////

        s.h(600, 300).graphics.rf(
            ['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
        ).dc(0, 0, 100).ef()

        s.h(600, 100).graphics.rf(
            ['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
        ).dc(0, 0, 100).ef()

        s.h(800, 300).rf(
            ['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
        ).dc(0, 0, 100).ef()

        s.h(400, 300).rf(
            ['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
        ).dc(0, 0, 100).ef()


        s.h().cir(0, 0, 10)
    }
    REC = function () {
        s = $St()


        s.h(600, 300).graphics.rf(
            ['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
        ).dc(0, 0, 100).ef()

        s.h(600, 100).graphics.rf(
            ['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
        ).dc(0, 0, 100).ef()

        s.h(800, 300).rf(
            ['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
        ).dc(0, 0, 100).ef()

        s.h(400, 300).rf(
            ['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
        ).dc(0, 0, 100).ef()


        s.h().cir(0, 0, 10)
        ///////////////
        x1 = 100
        y1 = 150
        r1 = 20
        x2 = 100
        y2 = 150
        r2 = 100
        h = $h(10, 10).a2(s).drag()
        change = function () {

            //  h.remove()

            // h=cjs.shape(10, 10).a2(s).drag()

            h.graphics.rf(["red", 'blue', "yellow"], [0, .5, 1], x1, y1, r1, x2, y2, r2).dr(0, 0, 400, 400).ef()


            r1++
            r2++
        }
        setInterval(change, 1000)
        change()


        h = s.h(480, 270).drag()
        h.C('z', 2).lf({x: -100, c1: 'r', c2: 'y'})
            .dr2({w: 300, h: 100, x: 0, y: -100},
            {w: 100, h: 300})

        s.h(180, 270).drag()

            .lf({c1: 'r', c2: 'y', x1: -100}).dr2(
            {w: 300, h: 100, x: 0, y: -100},
            {w: 100, h: 300})


    }


    BASELINE = function () {
        z()

        s = cjs.stage(1000).A()


        s.bm('me', function (bm) {
            b = bm
            bm.XY(300).sXY(.2)
        })


        s.A(t = cjs.text('baseline: top').XY(300).sXY(4).drag())
        s.A(t2 = cjs.text('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
        s.A(t3 = cjs.text('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))


    }
    LINEH = function () {
        z()

        s = cjs.stage(1000).A()


        s.bm('me', function (bm) {
            b = bm
            bm.XY(300).sXY(.2)
        })


        s.A(
            t = cjs.text('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
        )


        s.A(
            t2 = cjs.text('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
        )

        s.A(
            t3 = cjs.text('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
        )


    }
    LINEW = function () {
        z()

        s = $St(1000).A()


        s.bm('me', function (bm) {
            b = bm
            bm.XY(300).sXY(.2)
        })


        s.A(t = cjs.text('linewidth 0').XY(300).sXY(4).drag().lineW(0))
        s.A(t2 = cjs.text('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
        s.A(t3 = cjs.text('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))


    }
    ALIGN = function () {
        z()

        s = $St(1000).A()


        s.bm('me', function (bm) {
            b = bm
            bm.XY(300).sXY(.2)
        })

        s.bm('me', function (bm) {
            b = bm
            bm.XY(500).sXY(.2)
        })

        //textAlign
        s.A(t = cjs.text('linealign left').XY(300).sXY(4).drag()) //default
        s.A(t2 = cjs.text('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
        s.A(t3 = cjs.text('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))

        //textBaseline
        s.A(t = cjs.text('baseline: top').XY(500).sXY(4).drag())
        s.A(t2 = cjs.text('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
        s.A(t3 = cjs.text('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))
    }

    OVALS = SETTRANSFORM = function () {
        s = $St(800).bm('me', function (me) {
            b = me
            b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
            m = b.getMatrix()
            function tf(a, b, c, d, e, f, g, h, i) {
                return this.x = a || 0,
                    this.y = b || 0,
                    this.scaleX = null == c ? 1 : c,
                    this.scaleY = null == d ? 1 : d,
                    this.rotation = e || 0,
                    this.skewX = f || 0,
                    this.skewY = g || 0,
                    this.regX = h || 0,
                    this.regY = i || 0,
                    this
            }
        })


        //////
        h = s.h(40, 10, 'b', 16).drag()
        h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)

        h.c({
            C: 'b',
            lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}
        }).de(400, 100)

        h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400})
            .de(100, 200, 500, 300)


        h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)

    }

    function err() {
        ROTREC = function () {
            St()

            ct = s.ct(600, 300)

            ct.rec({w: 400, h: 400, c: 'r', C: 'o', l: 10, a: -5})
            ct.rec({w: 100, h: 200, c: 'b', C: 'w', l: 20, a: 20, rg: 1})
            h = ct.rec({
                w: 100, h: 200, a: 20,
                c: 'b', C: 'w', l: 20, bm: 1
            }).X(100)
            _.in(8, function () {
                h.X(0)
            }) //notice how gradient is seen behind the bm!!!

        }
        BMH = function () {
            s = $St()


            v = [[-100, 0], [0, -100], [100, 50]]

            h = s.h(100, 300)

            h.drag()

            h.bmCir({
                cirs: [{r: 150},
                    {x: 200, r: 150},
                    [300, 100, 100], [400, 100, 100]]
            })


            h2 = s.h(700, 300)
            h2.drag()

            h2.bmV({

                v: [
                    [[-100, 0], [0, -100], [100, 50]],
                    [[-200, 0], [-100, -100], [0, 50]],
                    [[0, 200], [0, -200], [400, -300], [400, 300]]]
            })

        }
        CIRCS = function () {
            St()
            // h.dc(100,100,50) -> no color


            h.c().dc(100, 100, 50) // black fill, l4 white stroke
            h.c('*').dc(100, 200, 50).dc(100, 250, 50)
            h.c('***').dc(200, 200, 50).dc(200, 250, 50)
            h.c({C: 'r'}).dc(300, 300, 50)
            h.circ({
                r: 50, x: 200, y: 200,
                C: ['y', 10],
                lf: {c1: 'u', c2: 'o', y1: 100, x2: 100},
                ls: {c1: 'u', c2: 'o'}
            })
            h.circ({
                r: 50, x: 500, y: 200,
                C: ['y', 2],
                rf: {c1: 'u', c2: 'o', x1: 10, y1: 10, r2: 30}, //, y1:100,x2:100},
                rs: {c1: 'y', c2: 'u', x1: -20, y1: -20, r1: 40, r2: 40}
            })
            h = s.h().drag().lf({}).dc()
                .c('b', 'g', 10).lf({y2: 400}).dc(300, 300, 50)
            cjs.me = function (fn) {
                Q(['me'], function (q) {
                    fn(q.getResult('me'))
                })
            }
            cjs.me(function (i) {
                h.c({

                    l: 200,
                    rf: ['w', 'u', 800],
                    rs: {c1: 'w', c2: 'x', r2: 800}

                }).dc({x: 0, y: 0, r: 200})

                s.h().c({
                    l: 200,
                    lf: {c1: 'w', c2: 'u', y2: 200},
                    ls: {c1: 'u', c2: 'w', s1: 0, s2: 1, x1: 0, y1: 0, x2: 0, y2: 200}
                }).dc({x: 0, y: 0, r: 200}).drag()

                s.h().lf('y', 'r', 10).dc({r: 200}).c({
                    l: 0,
                    c: 'y',
                    //lf: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200},
                    bs: i, bf: i
                }).dc({r: 200}).drag()
                s.h(40, 10, 'b', 8).rf({c1: 'r', c2: 'd', r2: 100}).dc(0, 50, 40).drag()
            })
        }


    }
}
//duds
HANOI=function(){









}
EASELCONVEX = function () {
    s = $St()
    s.poly([[-100, -10], [0, 100], [100, 20]], 'red', 'white', 10).XY(200, 300)
    s.poly([[-20, -80], [-100, -200], [100, 5]]).XY(300, 200)
    s.poly([[-40, 40], [-40, -40], [40, -40], [40, 30]], 'blue', 'white').XY(200, 200)
}
CIRCTEST = function () {
    St()
    s.h().drag().cir({r: 100, c: 'b', C: 'X', l: 20, lf: 1}, //why cant set lf to {}?
        [{x: 250, y: 300}, {x: 450, y: 300}, {x: 250, y: 500}])
    s.h().drag().cir({C: 'X', lf: {X1: 650, X2: 220, Y1: 950, Y2: 520}, r: 100},
        [{x: 750, y: 300}, {x: 950, y: 300}, {x: 750, y: 500}])
}
CIRCSTROKE=function(){St()
    gx= h.graphics
    h.c('b', 'r',10).XY(-100,-100)
    h.dc([200,200,50],[400,200,50],[600,200,50])
    /*  h.dc(300,300,50)
     gx.dc(400,400,50)
     h.dc(500,500,50)
     gx.dc(600,600,50)
     */

}
GRAPHTEST=function(){St(); img = $.img('me',function(){s.ct().h().bmS(img).ss(32).dr(20,20,920,360); _.each([

        function(){return $h(12,10)
            .lf('b','g',130).dr(130)},

        function(){return $h(40, 10,'b',16)
            .ls('r','w',70,140).de(70,140)},

        function(){return $h(80,80)
            .C('b',8).rf('w','y',40).dc(40)} ,

        function(){return $h(12,10,18)
            .bf(img, cjs.M(1) ).rs('b','g',30,130).dr(130)},






        function(){return $h(12,12,'g','r',8)
            .rr(130,30)}, //w(h) and r


        function lt(){return $h().C('o')
            .ss(16,'round','round')
            .mt([40,10],[90,90],[90,140])},

        function star(){return $h(80,85,'y','b',3)
            .pStr(0,0,80,5,.8,-95)},



        function hex(){return $h(80,40,'p')
            .pStr(40,6).pStr(0,75,40,6).pStr(45,45,20,6)}


    ],

    function(cont,i){var W=155, H=155, P= 5, C=4 //pad, cols
        s.A(tile(cont()).XY(
            42+(W+P)*(i%C),
            42+(i/C|0)*(H+P)))})})[0]




    tile=createTile=function(x,y){var bg,til
        bg = $h().c('t').dr(0, 0, 155, 155).ef().op(.2)
        til = cjs.ct().A(bg)
        if(N(x)){  til.X(x) }
        if(N(y)){  til.Y(y)  }
        if(O(x)){ til.A(x) }

        return til}


}
MICK=function(){St()
    ct.mick=function(x,y,lf){var ct=this,

        h= ct.h(x,y).drag()
            .c({ l:20,  C:0,   lf: lf||1  })
            .dc([50],[200,0,100],[100,100,100])

        ct.h(x,y).drag().c({ l:20,  C:0,   ls: lf||1 }).dc([50],[200,0,100],[100,100,100])
        return h}


    s.mick(500,200)
    s.mick(700,100, { c1:'b', c2:'X' })
    s.mick(700,300, { c2:'b' })
    s.mick(100,100, { y2:10 })
    s.mick(100,200, { y2:200 })
    s.mick(100,300, { x2:100 })


}
ZX=function(){
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
}
ENTERST =function(){St()
    st.bm('me')
    st.on('mouseenter', function(){$('body').pp('once<br>')}, null, true)
    st.on('mouseenter', function(){$('body').pp('many<br>')}, null, false)
}
GROW = function () {
    z()

    $St(500, 500).bm('me', function (bm) {
        b = bm
        bm.grow().dg()
    })

}
//err
HPOLY = function () {
    St()
    v = [[-100, 0], [0, -100], [100, 50]]
    s.h(600, 300).poly({v: v, bf: 'me'})
    s.h(900, 300).poly({v: v, lf: 1})
    s.h(800, 300).poly({v: v, rf: 1})
    h = s.h(200, 300).drag().bf('me', function () {
        h.dc([150], [200, 0, 150])
    })
}
flxApps()
bootApps()
animApps()
function flxApps(){

    BASIS=function(){$.x('o','basis')
        // http://jsfiddle.net/jakub_g/s5jAB/

        // Both items have flex-basis: 200px defined.

// In 'equilibrium situation' they'll get those widths exactly.




        $CSS({ d:{B: $CSS.bor('v') },  _ct: {  ds: '$', P: 10,  C: 'y'}, _ch:{P:10, M:10, c:'w'},


            _ch1: { $:'8 1 600px', C:'u'  },// If there's more space, the first one grows 5x faster than the second.

            _ch2: { ds:'$', 'flex-wrap':true, $:'1 2 400px', C:'g' } // If there's less space, the second one shrinks 3x faster than the first.


        })



        $.d([
            $.d([$.h3('Child One'),             $.p( 'Lorem ipsum'), $.p('dolor sit amet') ,  $.p('This is a bit longer line')  ]).K('ch ch1'),
            d= $.d(['Two'




            ]).K('ch ch2')
        ]).K('ct')

        _.t(20, function(){
            d.A(
                $.d($r(), 40, 40).K('ch1')
            )
        })


        $CSS()

    }
    FB=function(){$.x('o', 'flex')


        $CSS({

            _ct : {
                ds:'$',

                //  define  flow dir
                // and
                // if we allow the items to wrap
                //  Remember this is the same as:

                $d:'row',
                $w: 'wrap',
                //      'flex-flow' : 'row wrap',
                // Then we define how is distributed the remaining space
                flJC: 'space-around'
            }

        })


    }
    GRAIL=function(){$.bd().E(); $CSS({


        bd: {  f: '24px Helvetica', C:'a' ,c:'b'  },
        'header, footer': {  ds: 'b',
            M: 4,
            P: 5, nh: 100,
            B: $CSS.bor('r'),
            borR: '7pt',
            C: 'b'
        },





        $main: {nh: 800, M: 0, P: 0,
            ds: '$', flD: 'row'
        },


        '$main > article': {
            M: 4,  P: 5,  B: $CSS.bor('p'),  borR: '7pt',  C:'g',
            _: 2 , $:'3 1 50%' },

        '$main > nav': {
            M: 4, P: 5, B: $CSS.bor(),  borR: '7pt', C:'o',
            _: '-1', $:'1 6 30%'},

        '$main > aside': {
            M: 4,  P: 5,  B: $CSS.bor('g'), borR: '7pt',  C:'x',
            _: '3', $: '1 6 20%' },


        "@media all and (max-width:640px)" : $CSS.rules({
            "#main, #page": {flD: "column"},
            "#main>article, #main>nav, #main>aside": { _:'0' },
            "#main>nav, #main>aside,  header,  footer": {nh: 50, mh: 50}
        })

    })



        $.hdr('header').A()

        $.d([
            $.ac('article'),
            $.nv().A('nav'),
            $.as('aside')
        ]).id('main')


        $.ftr().A('footer').A()





        $CSS(); old=function(){
            GRAIL1=function(){$.bd().E()



                $CSS({

                    body: {  font: '24px Helvetica', C:'a' ,c:'b'  },
                    $main: {  nh: 800,  mar: 0,  pad: 0, ds: 'flex',   'flex-flow': 'row'},
                    '$main > article': {  mar: 4,  pad: 5,  bor: '1px solid pink',  borR: '7pt',  C:'g', flex: '3 1 60%',  order: 2  },
                    '$main > nav': {mar: 4, pad: 5, bor: '1px solid black',  borR: '7pt', C:'o', flex: '1 6 20%',  order: '1'},
                    '$main > aside': {  mar: 4,  pad: 5,  bor: '1px solid green', borR: '7pt',  C:'x', flex: '1 6 20%',  order: '3'  },
                    'header, footer': {  ds: 'b', mar: 4,  pad: 5, nh: 100, bor: '1px solid red', borR: '7pt', C: 'b' },


                    /* '@media all and (max-width: 640px)':  {

                     '#main, #page': '{flex-direction: column;}',
                     '#main > article, #main > nav, #main > aside':  '{order: 0;}',
                     '#main > nav, #main > aside, header, footer': '{min-height:50px; max-height:50px;}'
                     }

                     */






                    /// change below to one string!!!

                })

                $.hd($CSS.sty(

                        "@media all and (max-width:640px)"

                        + "{ "

                        + "#main, #page {flex-direction: column;}"
                        + "#main>article, #main>nav, #main>aside {order: 0;}"
                        + "#main>nav, #main>aside, header, footer {min-height: 50px; max-height: 50px;}"


                        + "}"


                    )

                )


                //reduc


//http://dev.w3.org/csswg/css-conditional-3/

                $('<header>header</header> ').A()
                $.d([ $('<article>article</article>   <nav>nav</nav>    <aside>aside</aside>')]).id('main')
                $('<footer>footer</footer>').A()


                $CSS()


            }
            GRAIL11=function(){$.bd().E()



                $CSS({

                    body: {  font: '24px Helvetica', C:'a' ,c:'b'  },
                    $main: {  nh: 800,  mar: 0,  pad: 0, ds: 'flex',   'flex-flow': 'row'},
                    '$main > article': {  mar: 4,  pad: 5,  bor: '1px solid pink',  borR: '7pt',  C:'g', flex: '3 1 60%',  order: 2  },
                    '$main > nav': {mar: 4, pad: 5, bor: '1px solid black',  borR: '7pt', C:'o', flex: '1 6 20%',  order: '1'},
                    '$main > aside': {  mar: 4,  pad: 5,  bor: '1px solid green', borR: '7pt',  C:'x', flex: '1 6 20%',  order: '3'  },
                    'header, footer': {  ds: 'b', mar: 4,  pad: 5, nh: 100, bor: '1px solid red', borR: '7pt', C: 'b' },


                    /* '@media all and (max-width: 640px)':  {

                     '#main, #page': '{flex-direction: column;}',
                     '#main > article, #main > nav, #main > aside':  '{order: 0;}',
                     '#main > nav, #main > aside, header, footer': '{min-height:50px; max-height:50px;}'
                     }

                     */






                    /// change below to one string!!!



                })



                $.hd($CSS.sty(
                        "@media all and (max-width:640px)" +

                        $CSS.rules(
                            $CSS.rule("#main, #page",    "{flex-direction: column;}"),
                            $CSS.rule("#main>article, #main>nav, #main>aside" ,  "{order: 0;}"),
                            $CSS.rule("#main>nav, #main>aside, header, footer",  "{min-height: 50px; max-height: 50px;}")
                        )


                    )

                )



                //reduc


//http://dev.w3.org/csswg/css-conditional-3/

                $('<header>header</header> ').A()
                $.d([ $('<article>article</article>   <nav>nav</nav>    <aside>aside</aside>')]).id('main')
                $('<footer>footer</footer>').A()


                $CSS()


            }
            GRAIL111=function(){$.bd().E()



                $CSS({

                    body: {  font: '24px Helvetica', C:'a' ,c:'b'  },
                    $main: {  nh: 800,  mar: 0,  pad: 0, ds: 'flex',   'flex-flow': 'row'},
                    '$main > article': {  mar: 4,  pad: 5,  bor: '1px solid pink',  borR: '7pt',  C:'g', flex: '3 1 60%',  order: 2  },
                    '$main > nav': {mar: 4, pad: 5, bor: '1px solid black',  borR: '7pt', C:'o', flex: '1 6 20%',  order: '1'},
                    '$main > aside': {  mar: 4,  pad: 5,  bor: '1px solid green', borR: '7pt',  C:'x', flex: '1 6 20%',  order: '3'  },
                    'header, footer': {  ds: 'b', mar: 4,  pad: 5, nh: 100, bor: '1px solid red', borR: '7pt', C: 'b' },

                    "@media all and (max-width:640px)" :


                        $CSS.rules(
                            $CSS.rule("#main, #page", "{flex-direction: column;}"),
                            $CSS.rule("#main>article, #main>nav, #main>aside" ,  "{order: 0;}"),
                            $CSS.rule("#main>nav, #main>aside, header, footer",  "{min-height: 50px; max-height: 50px;}")
                        )









                })








                //reduc


//http://dev.w3.org/csswg/css-conditional-3/

                $('<header>header</header> ').A()
                $.d([ $('<article>article</article>   <nav>nav</nav>    <aside>aside</aside>')]).id('main')
                $('<footer>footer</footer>').A()


                $CSS()


            }
            GRAIL1111=function(){$.bd().E()





                $CSS({

                    body: {  font: '24px Helvetica', C:'a' ,c:'b'  },
                    $main: {  nh: 800,  mar: 0,  pad: 0, ds: 'flex',   'flex-flow': 'row'},
                    '$main > article': {  mar: 4,  pad: 5,  bor: '1px solid pink',  borR: '7pt',  C:'g', flex: '3 1 60%',  order: 2  },
                    '$main > nav': {mar: 4, pad: 5, bor: '1px solid black',  borR: '7pt', C:'o', flex: '1 6 20%',  order: '1'},
                    '$main > aside': {  mar: 4,  pad: 5,  bor: '1px solid green', borR: '7pt',  C:'x', flex: '1 6 20%',  order: '3'  },
                    'header, footer': {  ds: 'b', mar: 4,  pad: 5, nh: 100, bor: '1px solid red', borR: '7pt', C: 'b' },

                    "@media all and (max-width:640px)" :
                        $CSS.rules({

                            "#main, #page":    "{flex-direction: column;}",
                            "#main>article, #main>nav, #main>aside" : "{order: 0;}",
                            "#main>nav, #main>aside, header, footer": "{min-height: 50px; max-height: 50px;}"
                        })
                })








                //reduc


//http://dev.w3.org/csswg/css-conditional-3/

                $('<header>header</header> ').A()
                $.d([ $('<article>article</article>   <nav>nav</nav>    <aside>aside</aside>')]).id('main')
                $('<footer>footer</footer>').A()


                $CSS()


            }
        } //http://dev.w3.org/csswg/css-conditional-3/

    }
    GRAIL=function(){$.bd().E(); $CSS({


        bd: {  f: '24px Helvetica', C:'a' ,c:'b'  },
        'header, footer': {  ds: 'b',
            M: 4,
            P: 5, nh: 100,
            B: ['r'],
            borR: '7pt',
            C: 'b'
        },


        $main: {nh: 800, M: 0, P: 0,
            ds: '$', flD: 'row'
        },


        '$main > article': {
            M: 4,  P: 5,  B: ['p'], rd: '7pt',  C:'g',
            _: 2 , $:'3 1 50%' },

        '$main > nav': {

            M:4, P:5, B:[], rd: '7pt', C:'o', _: '-1',
            $:'1 6 30%'//, mx: {hi:[], fds:['fds','fsd','fsd'] }

        },










        '$main > aside': { M:4,P:5,B:['g'], rd:'7pt',C:'x',_:'3',$:'1 6 20%' },

        "@media all and (max-width:640px)" : $CSS.rules({
            "#main, #page": {flD: "column"},
            "#main>article, #main>nav, #main>aside": { _:'0' },
            "#main>nav, #main>aside,  header,  footer": {nh: 50, mh: 50}
        })

    })



        $.hdr('header').A()

        $.d([
            $.ac('article'),
            $.nv().A('nav'),
            $.as('aside')
        ]).id('main')


        $.ftr().A('footer').A()



    }
    GRAIL=function(){$.bd().E(); $CSS({


        bd: {  f: '24px Helvetica', C:'a' ,c:'b'  },
        'header, footer': {  ds: 'b',
            M: 4,
            P: 5, nh: 100,
            B: ['r'],
            rd: 10,
            C: 'b'
        },

        $main: {nh: 800, M: 0, P: 0,
            ds: '$', flD: 'row'
        },


        '$main > article': {
            M:4,P:5,B:['p'],
            rd: 100,
            C:'g',
            _:2, $:'3 1 50%'
        },


        '$main > nav': {

            M:4, P:5, B:[], rd: 10,
            C:'o',

            _:'-1', $:'1 6 30%'//, mx: {hi:[], fds:['fds','fsd','fsd'] }

        },


        '$main > aside': { M:4,P:5,B:['g'], rd:'7pt',C:'x',_:'3',$:'1 6 20%' },

        "@media all and (max-width:640px)" : $CSS.rules({
            "#main, #page": {flD: "column"},
            "#main>article, #main>nav, #main>aside": { _:'0' },
            "#main>nav, #main>aside,  header,  footer": {nh: 50, mh: 50}
        })

    })



        $.hdr('header').A()

        $.d([
            $.ac('article'),
            $.nv().A('nav'),
            $.as('aside')
        ]).id('main')
        $.ftr().A('footer').A()
    }
    GME=function(){$.x('y','gme'); $CSS({

        'html, body': {w: '100%',h:'100%', M:0, P:0},
        'body.box': {ds: $, flD: 'column'},

        'body > *': {P: '.5em'},
        header: {C:'b'},

        article: {C:'r', $:1},
        footer:  {C:'g'},

        'header.cnt': {'-moz-column-count': 3},
        'header:not(.cnt)': {'-moz-column-width':  100}
    })





        $.hdr().A('Click', $.br(), 'to change', $.br(), 'header {column-…}').A()

        $.ac().A('Click', $.br(), 'to', $.br(), 'change', $.br(), 'body {display: …}').A()

        $.ftr().A()





        $("header").$(function(){  $(this).toggleClass("cnt"); logClass();  });
        $("article").$(function(){$.bd().toggleClass("box");  logClass() })

        logClass()

        function logClass(){var logTxt = "Header: "

            if ($("header").hasClass("cnt")) {
                logTxt += "column-count"
            } else {logTxt += "column-width"}

            logTxt += "; Body: ";

            if ($("body").hasClass("box")) {
                logTxt += "flex-box"
            }
            else {logTxt += "block"}

            $("footer").text(logTxt)
        }

    }
    function later() {
        //http://jsfiddle.net/flyingsheep/gmeqm/
//http://jsfiddle.net/3zLRJ/4/    //http://stackoverflow.com/questions/11451638/drag-re-sizable-2-column-layout
//reduc


        function jqUIFlex() {
            FLEX = function () {
                $.x('g', 'flex1')

                $CSS({
                    _flCt: {

                        ds: 'flex', flD: 'row', flW: 'wrap',
                        flJC: 'space-between'
                    },

                    _flCt1: {
                        ds: 'flex', flD: 'row', flW: 'wrap',
                        flJC: 'space-around'

                    }
                })


                $.d('b', 400, 500).K('flCt').A(
                    $.d('y', 40, 150), $.d('z', 200, 50), $.d('r', 40, 150),
                    $.d('y', 40, 150), $.d('z', 200, 50), $.d('r', 40, 150)
                ).dgb()
                $.d('B', 400, 500).K('flCt').A(
                    $.d('y', 40, 150), $.d('z', 200, 50), $.d('r', 140, 150),
                    $.d('y', 40, 150), $.d('z', 300, 50), $.d('r', 40, 50)
                ).dgb()


                $.d('w', 400, 500).K('flCt1').A(
                    $.d('y', 40, 150), $.d('z', 1000, 50), $.d('r', 140, 150),
                    $.d('y', 40, 150), $.d('z', 10, 50), $.d('r', 40, 50)
                ).dgb()

                $.d('p', 400, 500).K('flCt1').A(
                    $.d('y', 40, 150), $.d('z', 300, 50), $.d('r', 140, 150),
                    $.d('y', 40, 150), $.d('z', 200, 50), $.d('r', 40, 50)
                ).dgb()


            }

        }
    }
}
function bootApps(){




    TABTX= function () {
        $.boot(
            $.navTabs(
                $.tab('Home', 'home').K('active'),
                $.tab('Profile', 'profile'),
                $.tab('Messages', 'messages'),
                $.tab('Settings', 'settings')
            ).C('r'),


            $.tabContent(
                $.tabPane('home', '+').A(
                    $.h1('home'),
                    $.ipsum(6)
                ),


                $.tabPane('profile').A(
                    $.h1('profile'),
                    $.ipsum(6)
                ),

                $.tabPane('messages').A(
                    $.h1('messages'),
                    $.ipsum(6)
                ),

                $.tabPane('settings').A(
                    $.h1('settings'),
                    $.ipsum(6)
                )
            ).C('b')
        )


    }
    TAB1 = function () { // 'active-s' are mismatched on purpose :)


        $.boot(
            $.navTabs(
                $.tab('Home1', 'home1'),
                $.tab('Home', 'home').K('active'),
                $.tab('Profile', 'profile'),
                $.tab('Messages', 'messages')),
            $.tabContent(
                $.tabPane("home1", '+').C('b').A('home1'),
                $.tabPane('home').C('r').A('home'),
                $.tabPane("profile").C('y').A('profile'),
                $.tabPane("messages").C("g").A('messages'))
        )

        $('.nav-tabs a').click(function (e) {
            //    e.preventDefault();  $(this).tab('show')
        })


    }

    TAB2 = function () {

        z()

        var ul = $.ul().K('nav nav-tabs').A(
            $.liA('aaaa'),
            $.liA('bbbb').K('active'),
            $.liA('cccc'),
            $.liA('dddd')
        ).C('b')


        var display = $.div('y', 300, 400).mar(20)

        var div = $.div('r').pad(30).A(ul, display).A().drag()

    }
    TAB3 = function () {
        z()

        $.navTabs().A(
            $.tab('Home'),
            $.tab('Profile').K('active'),
            $.tab('Messages')).A()

        $(function () {

            $('a').click(function () {
                $(this).tab('show')
            })

        })


    }
    TABAJAX = function () {

        $.boot(
            $.navTabs(
                $.tab('hello', function () {
                    alert('hello')
                }),
                $.tab('goodbye', function () {
                    $('#stuff').load('/')
                })
            ),

            $.d().id('stuff')
        )
    }
    TABAJAX1 = function () {

        $.boot(
            $.navTabs(
                $.tab('hello', function () {
                    alert('hello')
                }),
                $.tab('goodbye', function () {
                    $('#stuff').load('/')
                })
            ),

            $.d().id('stuff')
        )
    }
    TAB4 = function () {
        z()
        var tabBar = $.ul().K("nav nav-tabs")

        tabBar.A(
            $.tab('first', function () {
                alert('1')
            }),
            $.tab('second', function () {
                alert('2')
            }),
            $.tab('third', function () {
                alert('3')
            })
        ).A()
    }//navtabs=function(){return $.ul().K('nav nav-tabs')} //unnecessary
    TAB5 = function () {

        z()

        var tabBar = $.tabs(
            ['first', function () {
                $l('1')

                panel.E($.img('me'))

            }],

            ['second', function () {
                $l('2')
            }],
            ['third', function () {
                $l('3')
            }]
        ).A()

    }



    TXTABACTION = function () {

        testTabs()

        $(function () {
            $('a[data-toggle="tab"]')
                .on('show.bs.tab', function (e) {
                    ee = e
                    $l('tabbed!')
                    e.target // newly activated tab
                    e.relatedTarget // previous active tab

                })


        })

    }


    TXTABACTION2 = function () {
        // for each tab, use 'on(show)', to automatically fetch/load?
    }



    TXPILLS= function(){

        $(function(){


            $.boot().A(

                $.well($.h1('welcome to pills')),

                n = $.navPills().A(
                    $.pill('home'),
                    $.pill('profile'),
                    $.pill('messages', function(){$('body').C('r')})
                ),



                $.dK("pill-content").A(

                    $.pillPane('home').A('hoooome'),
                    $.pillPane('profile').A('prooofile'),
                    $.pillPane('messages').A('messsaaaages')
                )



            )




            //   $('a').each(function(){ $(this).attr('data-toggle', 'pill') })

        })


    }
    PILLS=function(){z()
        pills= $.ul().K("nav nav-pills").A(
            $.li().K('active').A(    $.a('home').toggle('tab')     ),
            $.li().A(  $.a('profile').K('profile')  ),
            $.li().A( $.a('messages') ) )

        div=$.d('b', '+').WH('auto').pad(40)
        ch=   $.d('y',300).pad(40).mar(40)

        div.A( pills , ch)


        $('a').$(function (e) {
            e.preventDefault()
            $(this).tab('show')
        })


        // $('a:first').tab('show')
        $('a.profile').on('shown.bs.tab', function(e){
            ch.E()
            ch.A($.d().T('asfdasfdfasd'))
        })
        $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
            e.target // activated tab
            e.relatedTarget // previous tab
        })
    }

    TN =function(){z()
        wrap = $.wrap

        $.boot(
            wrap('me'),
            wrap('guy' ),
            wrap('chicks'),
            wrap( 'me' ),
            wrap( 'guy') ,
            wrap( 'chicks' ),
            wrap( 'me' ),
            wrap( 'guy' ),  wrap( 'chicks' ),
            wrap( 'me' ),   wrap( 'guy' ), wrap( 'chicks' ),
            wrap( 'me' ),   wrap( 'guy' ), wrap( 'chicks' )
        )
    }
    EXTHUMB =function(){z()

        var wrap = function(img){

            return $.dK(  "col-xs-4 col-sm-3 col-md-2 col-lg-1"  ).A(

                $.a('').K('thumbnail').A( img  )

            )}

        $.container().A(

            $.row(

                $.thumbnail().K("col-sm-6 col-md-2").A(
                    $.img('me'),
                    $.caption('Thumbnail label')
                ),


                $.thumbnail().K("col-sm-6 col-md-2").A(
                    $.img('guy'),
                    $.caption('Thumbnail label')
                ),


                $.thumbnail().K("col-sm-6 col-md-2").A(
                    $.img('me'),
                    $.caption('Thumbnail label')

                )


            )

        ).A()


    }
    THUMNAILS = function(){z()

        // <div class="row">
        // <div class="col-xs-6 col-md-3">
        // <a id="" href="#" class="thumbnail">
        // <img src="/me.png">
        // </a>
        // </div>
        // </div>


        return $.container().A(
            $.row(

                $.dK("col-xs-6 col-md-3").A(

                    $.a('').K("thumbnail").A(  $.img('me')  )


                ) )

        ).A()



    }
    TNCUSTCONTENT = function(){z()
        cont = $.container().C('r')


        thumbnail = $.thumbnail().C('g').A(
            $.p('first thing in green thumbnail'),
            $.img('me'),

            $.dK("caption").A(
                $.h3('Thumbnail label'),
                $.p('...'),
                $.p().A(
                    $.bt('Button').K("btn btn-primary"),
                    $.bt('Button').K("btn btn-default")))
        )



        cont.A(  $.row(
            $.dK("col-sm-6 col-md-4").A(

                $.p('before thumbnail'),
                thumbnail
            )



        ))


        return cont.A()}
    JUMB = function(){  $.boot(

        $.jumbo(
            'My first Bootstrap website!',
            $.p('This page will grow as we add more and more components from Bootstrap...')),

        $.paragraphs(
            'This is another paragraph',
            'This is a paragraph',
            'This is another paragraph')
    )}
    VOLUME=function(){
        r = $.R().W(600);
        outerDiv = $.d('y', 400, 200).A().dg().A(r);
        r.dg().A(
            $.d().id('booksDiv').K('col-md-6'),
            $.d().id('displayDiv').K('col-dm-6').A($.i('guy')));
        Book = function (title) {
            var b;
            b = $.d('b', 60, 60).K('book');
            b.A($.h4(title || 'book'));
            b.display = $.i('me').K('display').hd();
            return b
        };
        addBook = function (title) {
            var b;
            b = Book(title);
            $('#booksDiv').A(b);
            $('#displayDiv').A(b.display);
            $('.book').$(function () {
                $(this).id()
            });
            return b
        };
        a = addBook('a');
        b = addBook('b')
    }
    IMGRESPONSE=function(){$.boot(

        $.sm(3).A(

            $.well(

                $.imgResponsive('chicks')

            )
        )

    )

    }
    IMGRESPONSE1=function(){

        $.boot(

            $.md(2).A(

                $.imgResponsive('me')  ,
                $.imgResponsive('chicks')  ,
                $.imgResponsive('me')

            )


        ).C('r')



    }
    EXIMGS=function(){$.boot(


        $.imgCircle('chicks').C('y'),
        $.imgRounded('guy').C('y'),
        $.imgThumbnail('sun').C('y')


    )}
    function mixMedia(){
        exampleMixedMobileAndDesktop= function(){z()
            //The Bootstrap grid system has four classes: xs (phones), sm (tablets),
            // md (desktops), and lg (larger desktops).
            // These classes can be combinated to create more dynamic and flexible layouts.
            //  Tip: Each class scales up, so if you wish to set the same widths
            // for xs and sm, you only need to specify xs.


            cont = $.container().A()

            cont.A(
                $.row(
                    $.div('r').K("col-xs-12 col-md-8").A('col-xs-12 .col-md-8'),
                    $.div('b').K("col-xs-6 col-md-4").A('col-xs-6 col-md-4')
                ),


                $.row(

                    $.div('a').K("col-xs-6 col-md-4").A('.col-xs-6 .col-md-4'),
                    $.div('b').K("col-xs-6 col-md-4").A('.col-xs-6 .col-md-4'),
                    $.div('c').K("col-xs-6 col-md-4").A('.col-xs-6 .col-md-4')



                ),



                $.row(
                    $.div('g').K("col-xs-6").A('.col-xs-6'),

                    $.div('o').K("col-xs-6").A('.col-xs-6')


                )



            )
        }
        exampleMixedMobileTabletAndDesktop= function(){z()
            // Note	Tip: Remember that grid columns should add up to twelve for a row. More than that, columns will stack no matter the viewport.

            cont = $.container().A()
            cont.A(
                $.row(
                    $.div('r').K("col-xs-12 col-sm-6 col-lg-8").A($.span( '.col-xs-12 .col-sm-6 .col-lg-8' )),
                    $.div('b').K("col-xs-6 col-lg-4").A($.span('.col-xs-6 .col-lg-4'  ))
                ),
                $.row(
                    $.div('n').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4') ),
                    $.div('g').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4') ),
                    $.div('o').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4') )

                )


            )}
        /*
         The following table summarizes how the Bootstrap grid system works across multiple devices:
         Extra small devices
         Phones (<768px)	Small devices
         Tablets (>=768px)	Medium devices
         Desktops (>=992px)	Large devices
         Desktops (>=1200px)
         Grid behaviour	Horizontal at all times	Collapsed to start, horizontal above breakpoints	Collapsed to start, horizontal above breakpoints	Collapsed to start, horizontal above breakpoints
         Container width	None (auto)	750px	970px	1170px
         Class prefix	.col-xs-	.col-sm-	.col-md-	.col-lg-
         Number of columns	12	12	12	12
         Column width	Auto	~62px	~81px	~97px
         Gutter width	30px (15px on each side of a column)	30px (15px on each side of a column)	30px (15px on each side of a column)	30px (15px on each side of a column)
         Nestable	Yes	Yes	Yes	Yes
         Offsets	Yes	Yes	Yes	Yes
         Column ordering	Yes	Yes	Yes	Yes
         ~97px
         */
    }
    testRows = function () {
        z()

        $.row(
            $.colX(2, $.img('me')),

            $.colX(6, $.img('me')),

            $.colX(4, $.img('me'))
        ).A()

    }
    testRows2 = function () {
        z()
        $.R().A(
            $.dK('col-xs-12 col-sm-6').A($.img('me')),
            $.dK('col-xs-6 col-lg-4').A($.img('me'))
        )

    }
    testRows3 = function () {
        z()
        $.R().A(
            $.dK('col-xs-6 col-sm-4').A($.img('me')),
            $.dK('col-xs-6 col-sm-4').A($.img('guy')).C('o'),
            $.dK('col-xs-6 col-sm-4').A($.img('sun'))
        ).C('b')
    }
    testRows4 = function () {
        z()
        $.R().A(
            $.dK('col-xs-6 col-sm-4').A($.span('me')),
            $.dK('col-xs-6 col-sm-4').A($.span('guy')).C('o'),
            $.dK('col-xs-6 col-sm-4').A($.span('sun'))
        ).C('b').A()
    }
    exampleStackedToHoriz = function () {
        z()


        cont = $.container().A(
            $.h1('Hello World!'),

            $.row(
                $.sm('red', 6).ipsumP(1, 2),

                $.sm('blue', 6).ipsumP(4)
            )
        ).A()


    }
    exampleStackedToHorizFluid = function () {
        z()

        $.containerFluid().A(
            $.h1('Hello World!'),

            $.row(
                $.sm('red', 6).ipsumP(2, 1),
                $.sm('blue', 6).ipsumP(3)
            )
        ).A()


    }
    example25Percent = function () {
        z()


        $.containerFluid().A(
            $.h1('Hello World!'),

            $.row(
                $.sm('r', 3).ipsumP(3),
                $.sm('b', 9).ipsumP(3)
            )
        ).A()

    }
    exampleMedium = function () {
        z()

        //on xs, u get one column only
        //on small devices, u get two columns ( 25% / 75% )
        //but on medium, u get a 50/50 split


        $.containerFluid().A(
            $.h1('Hello World!'),

            $.row(
                $.div('r').sm(3).md(6).ipsumP(3),
                $.div('b').sm(9).md(6).ipsumP(4)
            )
        ).A()


    }
    exampleLarge = function () {
        z()

        $.containerFluid().A(
            $.h1('Hello World!'),

            $.row(
                $.div('y').K("col-sm-3 col-md-6 col-lg-4").ipsumP(2, 2),
                $.div('y').K("col-sm-9 col-md-6 col-lg-8").ipsumP(1, 1, 1, 1)
            )
        ).A()

    }
    exampleThreeEqualColumns = function () {
        z()
        //The following example shows how to get a three equal-width columns
        // starting at tablets and scaling to large desktops. On mobile phones, the columns will automatically stack:

        cont = $.container().A()
        cont.A(
            $.row(
                $.div('red').K("col-sm-4").A('.col-sm-4').ipsumP(1),

                $.div('blue').K("col-sm-4").A('.col-sm-4').ipsumP(2, 2),
                $.div('yellow').K("col-sm-4").A('.col-sm-4').ipsumP(3, 3, 3)
            )
        )

    }
    exampleThreeUnequalColumns = function () {
        z()
        // The following example shows how to get a three various-width columns
        // starting at tablets and scaling to large desktops:

        cont = $.container().A()

        cont.A(
            $.row(
                $.div('red').K("col-sm-3").A('.col-sm-3').ipsumP(1),

                $.div('blue').K("col-sm-6").A('.col-sm-6').ipsumP(2, 2),
                $.div('yellow').K("col-sm-3").A('.col-sm-3').ipsumP(3, 3, 3)
            )
        )
    }
    exampleTwoUnequalColumns = function () {
        z()
        cont = $.container().A()
        cont.A(
            // The following example shows how to get two various-width columns starting at tablets and scaling to large desktops:

            $.row(
                $.div('r').K('col-sm-4').A('.col-sm-4').ipsumP(10),
                $.div('y').K('col-sm-8').A('.col-sm-8').ipsumP(20)
            )
        )
    }
    exampleTwoColumnsWithTwoNestedColumns = function () {
        z()
        //The following example shows how to get two columns starting at tablets
        // and scaling to large desktops, with another two columns (equal widths) within the larger column (at mobile phones, these columns and their nested columns will stack):

        cont = $.container().A()

        cont.A(
            $.row(
                $.div('a').K("col-sm-8").A(
                    $.span('.col-sm-8'),

                    $.row(
                        $.div('x').K("col-sm-6").A('.col-sm-6').ipsumP(5),
                        $.div('z').K("col-sm-6").A('.col-sm-6').ipsumP(5)
                    )
                ),

                $.div('b').K("col-sm-4").A('.col-sm-4').ipsumP(5)
            )
        )
    }
    exampleClearFloats = function () {
        z()
        //(with the .clearfix class) at specific breakpoints to prevent strange wrapping with uneven content:

        cont = $.container().A()
        cont.A(
            $.row(
                $.div('g').K(' col-xs-6 col-sm-3').A(
                    $.span('Column 1'),
                    $.br(),
                    $.span('Resize the browser window to see the effect.')
                ),

                $.div('u').K("col-xs-6 col-sm-3").A($.span('Column 2')),
                //$.span('<!-- Add clearfix for only the required viewport -->'),
                $.div('o').K("clearfix visible-xs"),
                $.div('y').K("col-xs-6 col-sm-3").A($.span('Column 3')),
                $.div('b').K("col-xs-6 col-sm-3").A($.span('Column 4'))
            )
        )
    }
    exampleOffsettingColumns = function () {
        z()
        //Move columns to the right using .col-md-offset-* classes. These classes increase the left margin of a column by * columns:

        cont = $.container().A()
        cont.A(
            $.row(
                $.div('r').K('col-sm-5 col-md-6').A('col-sm-5 col-md-6').ipsumP(4),

                $.div('b').K('col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0').A(
                    'col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0'
                ).ipsumP(4)
            )
        )
    }
    examplePushAndPull = function () {
        z()
        //- Change Column Ordering
        //Change the order of the grid columns with .col-md-push-* and .col-md-pull-* classes:
        cont = $.container().A()

        cont.A(
            $.row(
                $.div('r').K("col-sm-4 col-sm-push-8").ipsumP(2, 2, 2),
                $.div('p').K("col-sm-8 col-sm-pull-4").ipsumP(22)
            )
        )
    }
}
function animApps(){

    TIMELINE=function(){s=$St()
        q = cjs.lq(['me','guy'], function(res){

            me  = s.bm( res('me') ).XY(300)
            guy = s.bm( res('guy') ).XY(200)

            cjs.tl([
                me.tw( [{sx: 2}, 10000 ]),
                me.tw([{sy:2},10000]),
                guy.tw( [{r: 20},10000], [{r: 0},10000])
            ])})}
    MC=function(){
        //Uncaught TypeError: cjs.cir is not a function

        $St()

            .mc(  null,  0,  true,   {start:0, middle:40})

            .tl(

            cjs.circ(50,'r').Y(200).tw({x: 100},[{x:600},40], [{x: 100}, 40]),
            cjs.circ(50,'b').Y(200).tw({x: 600},[{x: 100}, 40],[{x: 600}, 40])

        ).p("middle")






    }
    REDROBOT=function(){z()
        //this is a fancy mc
        s = $St(1000).A()

        g = cjs.gunner()

        s.A(g)
        return

        g.drag()

        g.XY(400,200)

    }
    RUNNINGMAN=function() {

        s=stage=$St()

        $.i("/MonsterAIdle.png", function(i){imgMonsterAIdle =i[0]})
        $.i("/MonsterARun.png", function(i){imgMonsterARun = i[0]})

        $.bt('start', startGame  ).A()
        $.bt('reset', function(){
            s.removeAllChildren()
            cjs.Ticker.removeAllListeners()
            // stage.update()
        }).A()
        function startGame(){

            screen_width = s.W()
            screen_height = s.H()
            //Idle sequence of the monster

            spriteIdle = new cjs.Sprite(   new cjs.SpriteSheet({

                images: [ imgMonsterAIdle ],

                frames: {  width: 64, height: 64,  regX: 32, regY: 32   },

                animations: { idle: [0, 10, "idle", 4]  }

            }))

            spriteIdle.name = "monsteridle1"
            spriteIdle.XY( 16,   32)

            // create sprite.. and set the registration point (the point it will be positioned and rotated around) to the center of the frame dimensions:
            sprite = new cjs.Sprite(
                new cjs.SpriteSheet({

                    images: [ imgMonsterARun ],

                    frames: {width: 64, height: 64, regX: 32, regY: 32 },

                    animations: {  walk: [0, 9, "walk", 4] }// To slow down the animation loop of the sprite, we set the frequency to 4 to slow down by a 4x factor

                }).addFlipped(true,false,false))

            //sprite.regX = sprite.spriteSheet.frameWidth/2 || 0
            //sprite.regY = sprite.spriteSheet.frameHeight/2 || 0
            // start playing the first sequence: walk_h has been generated by addFlippedFrames and  contained the right facing animations
            sprite.p("walk_h") 	//walking from left to right

            //sprite.shadow = new createjs.Shadow("#454", 10, 15, 14)

            sprite.name = "monster1"
            sprite.direction = 90
            sprite.XY(16, 32).vXY(1,0).a2(s)
            sprite.currentFrame = 10

            // we want to do some work before we update the canvas,  // otherwise we could use Ticker.addListener(stage);
            T.setFPS(40)

        }



        _.ev(.1, function onTick(){

            if (sprite.x >= screen_width - 16) {  sprite.direction = -90;  sprite.gotoAndPlay("walk")  } // Hit testing the screen width, otherwise our sprite would disappear // We've reached the right side of our screen   // We need to walk left now to go back to our initial position
            if (sprite.x < 16) {   // We've reached the left side of our screen // We need to walk right now


                sprite.direction = 90

                sprite.gotoAndStop("walk")

                s.removeChild( sprite )

                spriteIdle.gotoAndPlay( "idle" )

                stage.addChild( spriteIdle )}
            // Moving the sprite based on the direction & the speed
            if (sprite.direction == 90){  sprite.x += sprite.vX;  sprite.y += sprite.vY}

            else {   sprite.x -= sprite.vX;   sprite.y -= sprite.vY}

        })

    }
    TOOLKITBRITNEY=function(){

//ok an export using toolkit!
        z()

        var  stage, exportRoot, lib, images

        flashFunction=function(lib, img, cjs){  var p; // shortcut to reference prototypes

// library properties:
            lib.properties={

                width: 550,
                height: 400,
                fps: 24,
                color: "#FFFFFF",
                manifest: [{src:"/britney.jpeg", id:"britney"}, {src:"/gaga.jpeg", id:"gaga"}]};


// symbols:

            lib.britney = function(){ this.initialize(img.britney) }

            lib.britney.prototype = p = new cjs.Bitmap()

            p.nominalBounds = new cjs.Rectangle(0,0,259,194)


            lib.gaga = function(){ this.initialize(img.gaga) }
            lib.gaga.prototype = p = new cjs.Bitmap()


            p.nominalBounds = new cjs.Rectangle(0,0,242,208);


            lib.gaga_1=function(){

                this.initialize()
                // Layer 1
                this.instance = new lib.gaga()
                this.addChild(this.instance)

            }



            lib.gaga_1.prototype = p = new cjs.Container()
            p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208)




            lib.brit = function(){
                this.initialize()
                // Layer 1
                this.instance = new lib.britney()
                this.A(   this.instance   )}




            lib.brit.prototype = p = new cjs.Container()
            p.nominalBounds=new cjs.Rectangle(0,0,259,194);


            lib.Tween2=function() {

                this.initialize()

                // Layer 1
                this.instance = new lib.brit()
                this.instance.setTransform(134, -109.5, 1, 1, 0, 0, 0,129.5,97);

                this.instance_1 = new lib.gaga_1()
                this.instance_1.setTransform(-148.9,33,1.537,0.24,60,0,0,121,104.1);

                this.A(
                    this.instance_1,
                    this.instance
                )}

            lib.Tween2.prototype = p = new cjs.Container()
            p.nominalBounds = new cjs.Rectangle(-263.5,-206.5,527,413);

            lib.Tween1 = function() {
                this.initialize();
                // Layer 1
                this.instance = new lib.brit().transform(-57.6,52.6,1,1,0,0,0,129.5,97);
                this.instance_1 = new lib.gaga_1();
                this.instance_1.setTransform(72.5,0.1,1.537,0.24,60,0,0,121,104.1);

                this.addChild(this.instance_1,this.instance)}



            lib.Tween1.prototype = p = new cjs.Container();
            p.nominalBounds = new cjs.Rectangle(-187.1,-173.5,374.2,347.1)

// stage content:
            lib.Untitled3 = function(mode, startPosition, loop){

                this.initialize(mode,startPosition,loop,{})

                // Layer 1
                this.instance = new lib.gaga_1()

                this.instance.setTransform( 275,200.5,1,1, 0,0,0,121,104 )

                this.instance_1 = new lib.Tween1("synched",0)
                this.instance_1.setTransform(202.6, 200.5)
                this.instance_1._off = true

                this.instance_2 = new lib.Tween2("synched", 0)
                this.instance_2.setTransform(301.9,206.5)

                this.timeline.addTween(
                    cjs.Tween.get({})
                        .to({state:[{t: this.instance}]})
                        .to({state:[{t: this.instance_1}]},19)
                        .to({state:[{t: this.instance_2}]},10)
                        .wait(1))

                this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0,regY:0,x:202.6,mode:"synched",startPosition:0},19).wait(11));
                this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,x:301.9,y:206.5},10).wait(1))}

            lib.Untitled3.prototype = p = new cjs.MovieClip()


            p.nominalBounds = new cjs.Rectangle(429,296.5,242,208)

        }



        flashFunction(lib = lib||{}, images=images||{}, createjs = createjs||{}  )




        $.c('y', 550,400).id('canvas').A()

        canvas = document.getElementById("canvas")

        images=images||{}

        loader=new createjs.LoadQueue(false)

        loader.addEventListener("fileload",

            handleFileLoad=function(evt){
                if(evt.item.type == "image") { images[evt.item.id] = evt.result}
            })

        loader.addEventListener("complete", function() {
            exportRoot = new lib.Untitled3();
            stage = new createjs.Stage(canvas)
            stage.addChild(exportRoot)
            stage.update()
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage)})

        loader.loadManifest(lib.properties.manifest)}
    FLASHSCROLLER=function(){z()
// ****  THIS WORKS!!!
        var p

        images =  {}


        lib={properties : {  width: 550, height: 400,  fps: 24,  color: "#FFFFFF",  manifest: [] }};

        (lib.StartMarker = function() {
            this.initialize();


            this.shape = new cjs.Shape();
            this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
            this.shape.setTransform(0,0,1.515,1.515);

            this.addChild(this.shape);
        }).prototype =  new cjs.Container().bounds(-25,-25,50,50);


        (lib.Player = function(){
            this.initialize()

            // Layer 1
            this.shape = new cjs.Shape()
            this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");

            this.shape.setTransform(0, -20)

            this.addChild( this.shape )


        }).prototype = p = new cjs.Container();

        p.nominalBounds = new cjs.Rectangle(-11,-40,22,40);


        (lib.Boundries = function() {
            this.initialize();

            // Layer 1
            this.shape = new cjs.Shape()
            this.shape.graphics.f().s("#0066CC").ss(38,1,1).p("AhPBfICfi9")
            this.shape.setTransform(846,100.5)

            this.shape_1 = new cjs.Shape()
            this.shape_1.graphics.f().s("#0066CC").ss(38,1,1).p("AjCB9ICgifIDlha")
            this.shape_1.setTransform(777.5,163.5);

            this.shape_2 = new cjs.Shape()
            this.shape_2.graphics.f().s("#0066CC").ss(38,1,1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
            this.shape_2.setTransform(627,261.5);

            this.shape_3 = new cjs.Shape()
            this.shape_3.graphics.f().s("#0066CC").ss(38,1,1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
            this.shape_3.setTransform(-157.5,229.5);

            this.shape_4 = new cjs.Shape()
            this.shape_4.graphics.f().s("#0066CC").ss(38,1,1).p("AEYjHIszhGIQ3IbImulx")
            this.shape_4.setTransform(-17,253);

            this.shape_5 = new cjs.Shape();
            this.shape_5.graphics.f().s("#0066CC").ss(38,1,1).p("AhXgTQBigNBNA2");
            this.shape_5.setTransform(452.8,235.1);

            this.shape_6 = new cjs.Shape();
            this.shape_6.graphics.f().s("#0066CC").ss(38,1,1).p("Ag1AAIBsAA");
            this.shape_6.setTransform(123.5,342);

            this.shape_7 = new cjs.Shape();
            this.shape_7.graphics.f().s("#0066CC").ss(38,1,1).p("AALkRQGogLDzFiIAAB9I1LBQ");
            this.shape_7.setTransform(356.8,309.5);

            this.shape_8 = new cjs.Shape();
            this.shape_8.graphics.f().s("#0066CC").ss(38,1,1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
            this.shape_8.setTransform(222.5,239.5)

            this.shape_9 = new cjs.Shape();
            this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
            this.shape_9.setTransform(101,227);



            this.addChild(
                this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,
                this.shape_3,this.shape_2,this.shape_1,this.shape);
        }).prototype = p = new cjs.Container().bounds(-214,72,1087,289);




        lib.scroller2 = function(){// stage content:
            this.initialize()

            this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);

            this._boundaries = new lib.Boundries().transform(40,31,1,1,0,0,0,40,31);

            this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);

            this.addChild(this._startMarker,this._boundaries,this._player)}

        lib.scroller2.prototype = new cjs.Container().bounds(61,272,1087,289)




        $('body').A(
            $.bt('start', function(){boundaries.tw([{x: -500}, 10000])}),
            $('<br>'))


        exportRoot = new lib.scroller2()

        s=stage = $St(550,400).A().A( exportRoot )
        cjs.Ticker.setFPS( lib.properties.fps )
        startMarker = exportRoot._startMarker.X(275).hide()
        player = exportRoot._player.rXY(0).X(275)
        boundaries =  exportRoot._boundaries.XY(500,0)

        _vx=0
        _vy=0

        $.key({
            l: function(){_vx = -7},
            L: function(){_vx = 0},
            r: function(){_vx = 7},
            R: function(){_vx = 0},
            u: function(){_vy = -20}})

        $('canvas').$(function(){_vy=-20})


        processCollisions=function(){if(_vy<=0){return}

            if(player.belowStg()){ $l('fell off')

                cjs.Tween.removeAllTweens()
                boundaries.XY(500, 0)
                _vy=0
                player.XY(startMarker)}

            else {

                if(collision=boundaries.test(player) ){

                    while(collision){
                        _vy=0
                        player.y-=.1
                        collision = boundaries.test(player)
                    }

                    _vy=0}
            }



        }


        scrollStage=function(){

            boundaries.x += (s.W()*.5)- player.x

            player.X( s.W()*.5 )

        }



        cjs.tick( function(){

            _vy +=2

            player.x += _vx;
            player.y += _vy;

            processCollisions()

            scrollStage()

        })





    }
    MOVIE=function(){//wap()
        z()

        var s= $St($.c('b', 800, 800).A()).t(),

            div=$.d().A(),
            fn=function(){}

        $.getJSON('/img', function(imgs){

            _.e(imgs, function(v){ v=v.d

                var canvas =  $.c(100,100).A().fit(v)

                canvas.$( function(){

                    s.bm(v,function(b){bb=b

                            createjs.bindTransform(b);
                            //fn(b)
                            b.$(function(q){   fn(q)   }) },

                        '+')

                })

                div.A( canvas   )


            })

            part2=function() {
                c = $.Ct().A(
                    $.row.A(
                        $.d().A(div, s),


                        $.d().A(
                            $.bt('shake', function () {
                                fn = function (b) {
                                    W$.get(b.obj(), {loop: true})

                                        .to(ww({x: b.x()}, 500))
                                        .to(ww({x: b.x() + 100}), 500)
                                        .to(ww({x: b.x()}), 500)

                                }
                            }),


                            $bt('rotate', function () {
                                fn = function (b) {
                                    W$.get(b.obj(), {loop: true})
                                        .to(ww({kxy: 0})).to(ww({kxy: 20}), 500).to(ww({kxy: 0}), 500)
                                }
                            }),


                            $bt('size', function () {
                                fn = function (b) {
                                    W$.get(b.obj(), {loop: true})
                                        .to(ww({sxy: 1})).to(ww({sxy: 1.3}), 500).to(ww({sxy: 1}), 500)
                                }
                            })
                        )))
            }
            //c.o('$$',function(){  s.sv(ART)})
        })

        return s}
    STAGE=function(){z()

        m$$("location=location")

        s=$St(600).rgc().drag().XY(300)
        s.bm('chicks')
        s.bm('me',function(mm){
            m=mm
            m.rgc()
            m.XY(300)
            $Tw(s, [{r:-10000 },300000])
            $Tw(m, [{r:100000 },300000])
        })
        s.bm('guy',function(){})

    }
    CJSSPINNER=function(){z()

        s= $St('purple', 1000).A().rC()

        $Tw(s, [{r:-10000 },300000])

        s.bm('me',function(bm){m=bm.XY(500)
            SL(bm)})
        s.A( r = $h().rec(400,400, 'orange', 'red').XY(1200) )
        s.A( r2 = $h().rec(300,300, 'pink', 'red').XY(800) )
        s.A( r3 = $h().rec(300,300, 'green', 'green').XY(0) )
    }
    RECTS=function(){z()
        x=20
        y=20

        s=$St(500).A()//.drag()


        h0= $h().rec(-20,-20,x+40,y+40,'yellow','yellow')
        h1= $h().rec(-10,-10,x+20,y+20,'red','pink')
        h2= $h().rec(0,0,x,y,'orange','black')

        s.A(h0, h1, h2)

        SL(h2)
        SL(h2,h1)
        SL(h2,h0)

        RT(h1)
        RT(h1,h2)
        RT(h1,h0)


        SC(h0)
        SC(h0, h2)
        SC(h0, h1)

        a=function(){
            x+=20;
            y+=20
            h1.clr()
            h2.clr()
            h1.rec(-10,-10,x+20,y+20,'black','pink')
            h2.rec(0,0,x,y,'orange','transparent')
        }

        a()
        h0.rec(50,50,30,30,'black','orange')


    }
    ZOENOANIM=function(){z()
        spr = cjs.sprite({
            "framerate":24,
            "images":["/zoetest.png"],
            "frames":[
                [0, 0, 512, 256, 0, -133, -143],
                [512, 0, 512, 256, 0, -133, -143],
                [1024, 0, 512, 256, 0, -133, -143]
            ],
            "animations": {}})
        s = $St(1000).A()
        s.A(spr)}
    ZOEFRAMES=function(){z()


        spr = cjs.sprite({
            "framerate":24,
            "images":["/sprite2.png"],
            "frames":[
                [0, 0, 128, 128, 0, -176, -161],
                [128, 0, 128, 128, 0, -176, -161],
                [256, 0, 128, 128, 0, -176, -161]
            ],
            "animations":{
                "weird": {"speed": 1, "frames": [2]},
                "bald": {"speed": 1, "frames": [1, 1, 1, 1]}
            }
        })

        anis = spr.spriteSheet._animations

        // aniNames = _.keys(anis  )  // _.e(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })

        s = $St(1000).A()
        s.A( spr.drag() )
    }
    CHAR0=function(){
        showSprite(Sprites.char)

        function showSprite(sprite){z()
            s = $St(1000).A()
            spr = cjs.sprite(sprite).drag().a2(s)

        }

    }
    SSBUILDER=function(){z();
        cjs.testCanvas = function () {

            return $.d().A($.c(960, 400).id("testCanvas"))
        }
        cjs.testCanvas()

        //canvas=document.getElementById("testCanvas")
        s=stage=$St(["testCanvas"]).tick()
        cjs.Ticker.setFPS(30)

        scale=0.4

        mc=cjs.gunner().drag()

        w=mc.nominalBounds.width * scale
        mc.tf(100 + w / 2, 100, scale, scale).a2(s)

        label1=new cjs.Text("MovieClip-vector", "14px Arial", "#111").a2(s).textA("center").transform(mc.x, 30)
        label2=label1.clone().a2(stage).T("Sprite-raster").X(w+50,'+')
        b=builder=cjs.builder(mc)
        b.Z(scale).maxW(1024)
        b.async(function(ev){
            sprite=cjs.sprite(ev.target.spriteSheet)
            sprite.transform(mc.x+w+50||0,mc.y).a2(s).drag()
            mc.gotoAndPlay(0)
            sprite.gotoAndPlay(0)})
        img=builder._data.images[0]

        $('body').A(img)

    }
    workingTw()
    function workingTw() {
        TWEENART = function (a) {
            //wMb makes bitmap mug and passes it to a callback
            //optionally? can pass a stage to append it to before the callback runs
            s = $St()
            s.mug(function (b) {
                    b.XY(300);
                    b.rC(); //centers it's reg point?
                    SK(b)
                    $Tw([b, 'l'], {sxy: .5}, [{sxy: .7}, 500], [{sxy: .5}, 500])
                    s.mug(function (b) {
                        b.XY(200);
                        b.rC();
                        b.WH(200);
                        SL(b);
                        $Tw([b, 'l'], {r: 0}, [{r: 360}, 1000])
                        s.mug(function (b) {
                            b.rC();
                            b.XY(600);
                            SC(b)
                            $Tw([b, 'l'], {kxy: 0},
                                [{kxy: 20}, 500],
                                [{kxy: 0}, 500])
                        })


                    })
                },
                EDIT()
            )
        }
        EASINGG = function () {
            $l('EASINGG')
            st = $St('r', 1000, 10000).A()

            st.mug(function (b) {
                bb = b
                b.sXY(.2).XY(50, 100)
                $Tw([b, 'l'], [{x: 800}, 2000], [{x: 50}, 2000]
                )
            })
            eas = function (y, e) {

                st.mug(
                    function (b) {

                        b.sXY(.2).XY(50, y)

                        $Tw([b, 'l'], [{x: 800}, 2000, e], [{x: 50}, 2000, e])
                        b.$(function () {
                            $.pop(e + ' : ' + oO('E', e))
                        })
                    })
            }
            eas(300, 'bO');
            eas(500, 'bI');
            eas(700, 'bIO')
            eas(900, 'bnO');
            eas(1100, 'bnI');
            eas(1300, 'bnIO')
            eas(1500, 'cO');
            eas(1700, 'cI');
            eas(1900, 'cIO')
            eas(2100, 'eO');
            eas(2300, 'eI');
            eas(2500, 'eIO')
            eas(2700, 'qO');
            eas(2900, 'qI');
            eas(3100, 'qIO')
            eas(3900, 'qnO');
            eas(4100, 'qnI');
            eas(4300, 'qnIO')
            eas(4500, 'sO');
            eas(4700, 'sI');
            eas(4900, 'sIO')
            eas(5100, 'qdO');
            eas(5300, 'qdI');
            eas(5500, 'qdIO')
        }
        TWEENPOS1 = function () {
            z()

            s = $St(500).t().A()

            s.bm('me', function (bm) {
                b = bm

                s.bm('guy', function (guy) {
                    g = guy

                    guy.XY(200)
                    w0 = $Tw(guy, [{r: 3000}, 100000])
                    w = $Tw(bm, [{sx: 3}, 1000])
                        .wait(1000).pause(w0).then({sy: 3}, 4000)
                        .play(w0).then({sy: .3}, 4000)


                })
            })


        }
        TWEENPOS = function () {
            z()

            s = $St(500).A()


            s.bm('me', function (bm) {
                b = bm;
                s.bm('guy', function (guy) {

                    g = guy

                    guy.XY(200)

                    w0 = $Tw(guy, [{r: 90}, 100]).pause().then({r: 3000}, 100000)

                    w = $Tw(bm, [{sx: 3}, 10000]).play(w0)
                })
                setInterval(function () {
                    tweens.rpunch(g)
                }, 2000)

            })


        }
        TWEENBOX = function () {
            z()
            $.dragStage().bm('me', function (bm) {
                SL(bm)
                $Tw(
                    [bm, 'l'],
                    {x: 0, sxy: .7, r: 0},
                    [{x: 300, sxy: 2.3, r: 0}, 1000],
                    [{x: 0, sxy: .7, r: -30, a: .5}, 3000])
            })


        }
        TWEENER = function () {
            //really good
            z()

            s = $St(500).A()

            s.bm('me', function (bm) {
                s.bm('guy', function (guy) {


                    g = guy
                    b = bm

                    tween = $Tw(bm,

                        //pass in objects and they are 'to', 'to', etc..
                        [{sx: 2, sy: 2}, 3000], [{a: 0}, 300],

                        //make it wait
                        1000,

                        //pass in a function and it will run when it's its turn
                        function () {
                            s.bm('chicks', function (b) {
                                $Tw(b, [{sxy: .2}, 2000])
                            })
                        }
                    ).then({x: 200}, 1000).to({alpha: 1, visible: true}, 30000)

                    tween3 = $Tw(g, [{r: 20}, 10000], [{r: 0}, 3000])

                    stop = function () {
                        tween.stop();
                        tween2.stop()
                    }


                })
            })


        }
    }
}