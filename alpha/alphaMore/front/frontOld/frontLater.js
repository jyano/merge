// jqui http://jsfiddle.net/ManojRK/pQ9rj/
// http://jsfiddle.net/rniemeyer/YNCTY/
// sass
// mixins: insert new css pos, and new rules
// extend: share pops/styles between selectors
//placeholders: help extend to gen more effient output
//less
//mixins: a way of  of including ("mixing in") a bunch of properties from one rule-set into another rule-set
Y = window['Y'] || {};
Yano = {};
STATE = function () {
} //$w = window; $$w = $(window)
function inputTests() {
    testMove = function () {
        z()
        d = $.d('b', 100, 100, '+')

        f = function (num) {
            d.toR(num)
        }
        setInterval(f, 100)
    }
    testMoveAndWarp = function () {
        z()
        d = $.d('b', 100, 100, '+')
        f = function (num) {
            d.toR(num)
        }
        setInterval(f, 100)
    }
    testInputKeys = function () {
        z()
        input = $.ip().A()
        $.sp('span ').C('y').A().id('spn')
        input.on('keypress', function (e) {
            $('#spn').text(
                $('#spn').text() + e.which
            )
        }).on('keyup', function (e) {
            if (e.which == 13) {
                $l('enter')
                $('body').C('*')
            }
        })
            .on('keydown', function (e) {
                var key = e.which, //why these nums?
                    result = (key > 48 && key < 57) || ( key > 96 && key < 105) || (key == 8)
                $l('result: ' + result)
            })
    }
    testInputUpOrDown = function () {
        $.input().A()
        onTextInputKeyup(function (e) {

            var dir = (parseInt(e.which) == 38) ? 'up'
                : (parseInt(e.which) == 40) ? 'down'
                : 'neither'

            $l(dir)
        })
        function onTextInputKeyup(func) {
            return $('input[type=text]').on('keyup', func)
        }
    }
    testUpperVsLowerLetters = function () {
        z()

        i = $.input().A()

        i.on('keydown keypress',
            function (e) {
                $l(e.type + ':' + String.fromCharCode(e.which) + '(' + e.which + ')')
            })
    }//cool!
    responsiveBottomPanel = function () {
        z()
        $.div('red').P('f').X(0).css({
            bottom: 0,
            width: '50%', height: '50%',
            'min-width': 110,
            'max-width': 318,
            opacity: 4
        }).A().A(
            $.img('me'))
        // call and then play with browser size
    }
}
Qx = function Q(a) {
    if (!_.isObject(a)) {
        return
    }
    if (s$(a.toString()).contains('Window') || a[0]
        && s$(a[0].toString()).contains('Window')) {
        return $(window)
    }
    return a.name === 'q' ? Q(a.q)
        : E(a) ? $(E(a))
        : 0
}
dom = function () {

    //outerH
    H = function (a) {
        var oH = function (a) {
            if (O(a = a || $(window))) {
                return Q(a).outerHeight()
            }
        }
        a = a || $(window);
        return N(a) ? W() / a : oH(Q(a))
    }
//innerWidth
    iW = function (a) {
        if (O(a = a || $$w)) {
            return Q(a).innerWidth()
        }
    }
//innerHeight
    iH = function (a) {
        if (O(a = a || $$w)) {
            return Q(a).innerHeight()
        }
    }
    //_.tg=function(a){O(a)?(a.target? a.target: Q(a)[0]) :a}
    Wx = function (a) {
        var g = G(arguments),
            oW = function (a) {
                if (O(a = a || $(window))) {
                    return Q(a).outerWidth()
                }
            }
        return N(a) ? W() / a : oW(Q(a))
    }


};
dom()
qx = function (a) {
    return xx(qi(a))
}
qiv = function (a) {
    return qi(a).v()
}
Yano.func = function () {
    $('body').C('*')
}
Yano.interval = 1000
Yano.intervalID = null
Yano.toggleFunc = function self(func, interval) {
    //when you call this straight:
//it checks if a Y-func is currently running (by seeing if Y.intervalID is set)
//if it is, it clears the Y-func.. (and then unsets the Y.intervalID)
// if func not running, it does setInterval, saving the returned # as Y.intervalID
// if you pass in a neg, it will only toggle(turn) off
// if you pass in a pos, it will only toggle(turn) on

    var args = G(arguments),
        func = args[0],
        interval = args[1]


    if (Yano.intervalID) {
        if (args.P) {
            clearInterval(Yano.intervalID)
            Yano.intervalID = null
        }
    }
    else {
        if (args.N) {
            Yano.intervalID = setInterval(Yano.func, Yano.interval)
        }
    }
} //rat
Yano.setToggleFunc = function (func, interval) {

    if (func) {
        Yano.intervalFunc = func
    }
    if (interval) {
        Yano.interval = interval
    }

    Yano.setIntervalID = setInterval(Yano.intervalFunc, Yano.interval)
    return Yano.toggleFunc
}
ddd = function () {
    return (d = $.d().C('y').Z().a())
}
ccc = function () {
    return (c = $b($c()).dg())
}
$.fA = function (a) {
    return function () {
        alert(a)
    }
}
$.fL = function (a) {
    return function () {
        $l(a)
    }
}
//xP=function(a){return Utils.props('X', X(a))}
//xM=function(a){return Utils.methods('x', X(a))}
codes = {
    backspace: 8,
    regDigsQwerty: {from96to105: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]},
    digsNumPad: {from48to57: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
}
$.l = function (link) {
    if (link) {
        window.location = link
    }
    return window
}
function events() {
    function time() {function timeAgain() {
        $.sec = function (f) {
            return setTimeout(f, 1000)
        }
        $.do = function (func) {
            setTimeout(func, 0);
            return 'nada'
        }

        $.T = function (a, b) {
            return setTimeout(_v(a), b)
        }
        $.dateTime = $.date = dateTime = dt = function (a) {
            var d = new Date(a);
            d.y = d.getFullYear;
            d.d = d.getDate;
            d.D = d.getDay;
            d.M = d.getMinutes;
            d.m = d.getMonth;
            d.date = function () {
                return d.d() + '/' + d.m() + '/' + d.y()
            };
            d.time = function () {
                return d.h() + ':' + d.M()
            };
            d.dt = function () {
                return d.date() + ' ' + d.time()
            };
            d.ms = d.getMilliseconds;
            d.h = d.getUTCHours;
            d.s = d.getSeconds;
            //d.tm= d.getTime
            //d.gto= d.getTimezoneOffset
            d.udt = d.getUTCDate;
            d.gud = d.getUTCDay;
            d.ufy = d.getUTCFullYear;
            d.gh = d.getHours;
            d.gms = d.getUTCMilliseconds;
            d.um = d.getUTCMinutes;
            d.um = d.getUTCMonth;
            d.us = d.getUTCSeconds;
            return d
        }
        $.dateAndTime = dtt = function (a) {
            var datetime = new Date(a);
            return datetime.date() + ' ' + datetime.time()
        }
/////////
    }

        $.sec = function (f) {
            return setTimeout(f, 1000)
        }
        $.do = function (func) {
            setTimeout(func, 0);
            return 'nada'
        }

        $.T = function (a, b) {
            return setTimeout(_v(a), b)
        }
        $.dateTime = $.date = dateTime = dt = function (a) {
            var d = new Date(a);
            d.y = d.getFullYear;
            d.d = d.getDate;
            d.D = d.getDay;
            d.M = d.getMinutes;
            d.m = d.getMonth;
            d.date = function () {
                return d.d() + '/' + d.m() + '/' + d.y()
            };
            d.time = function () {
                return d.h() + ':' + d.M()
            };
            d.dt = function () {
                return d.date() + ' ' + d.time()
            };
            d.ms = d.getMilliseconds;
            d.h = d.getUTCHours;
            d.s = d.getSeconds;
            //d.tm= d.getTime
            //d.gto= d.getTimezoneOffset
            d.udt = d.getUTCDate;
            d.gud = d.getUTCDay;
            d.ufy = d.getUTCFullYear;
            d.gh = d.getHours;
            d.gms = d.getUTCMilliseconds;
            d.um = d.getUTCMinutes;
            d.um = d.getUTCMonth;
            d.us = d.getUTCSeconds;
            return d
        }
        $.dateAndTime = dtt = function (a) {
            var datetime = new Date(a);
            return datetime.date() + ' ' + datetime.time()
        }
/////////
    }
    function envent() {

        key=function(q){var g=G(arguments)

            q.P('a')
            if(g.P){
                kD('left', function(){q.toL()})
                kD('right', function(){q.toR()})}
            if(g.N){
                kD('up', function(){q.toU()})
                kD('down',   function(){q.toD()} )}
        }

        $.isRight = iR=function(e){return W(e, 39)}
        $.isUp= iU =function(e){return W(e, 38)}
        $.isDown = iD=function(e){return W(e, 40)}
        $.isLeft = iL=function(e){return W(e, 37)}

        mouse=function(){


            $.md=$.mousedown=function(func){
                $('body').on('mousedown', func);
                return this}
            $.mu=$.mouseup=function(func){
                $('body').on('mouseup', func);
                return this}
            $.mm=$.mousemove=function(func){

                $('body').on('mousemove', func);
                return this}
            $.ts=$.touchstart=function(func){

                $('body').on('touchstart', func);
                return this}
            $.te=$.touchend=function(func){

                $('body').on('touchend', func);
                return this}
            $.oMD=function(fn){
                $.mousedown(function(e){
                    fn(e.clientX,e.clientY,e)});
                return $}
            $.oMM=function(fn){
                $.mousemove(function(e){
                    fn(e.clientX, e.clientY, e)});
                return $}
            $.oMU = function (fn) {
                $.mouseup(function (e) {
                    fn(e.clientX, e.clientY, e)
                });
                return $}
            $.$$=function(a,b,c){$('body').$$(a,b,c); return this}
            $.$=function(){

                var b=$('html');

                b.click.apply(b, arguments);

                return $}



            mouse=function(){


                $.md=$.mousedown=function(func){
                    $('body').on('mousedown', func);
                    return this}
                $.mu=$.mouseup=function(func){
                    $('body').on('mouseup', func);
                    return this}
                $.mm=$.mousemove=function(func){

                    $('body').on('mousemove', func);
                    return this}
                $.ts=$.touchstart=function(func){

                    $('body').on('touchstart', func);
                    return this}
                $.te=$.touchend=function(func){

                    $('body').on('touchend', func);
                    return this}
                $.oMD=function(fn){
                    $.mousedown(function(e){
                        fn(e.clientX,e.clientY,e)});
                    return $}
                $.oMM=function(fn){
                    $.mousemove(function(e){
                        fn(e.clientX, e.clientY, e)});
                    return $}
                $.oMU = function (fn) {
                    $.mouseup(function (e) {
                        fn(e.clientX, e.clientY, e)
                    });
                    return $}
                $.$$=function(a,b,c){$('body').$$(a,b,c); return this}
                $.$=function(){

                    var b=$('html');

                    b.click.apply(b, arguments);

                    return $}




            };mouse()




        };mouse()
        ee=function ee(element, mouseEvent, func){



            //some partial application
            if(U(mouseEvent)){ return _.partial(ee, element)}

            // can imply '$' (click)
            if( F(mouseEvent) || (S(mouseEvent)&&!(Oo('e', mouseEvent)))){  return ee( element, '$', mouseEvent )}


            //can pass an object of events
            if(O(mouseEvent)){
                _.each(mouseEvent, function(v, k){

                    ee(element, k, v)})

                return element}


            _.each(mouseEvent.split(' '), function(mouseEvent){

                element.q.on( oO('e',mouseEvent),

                    function(eventObject){

                        var qqTarget = qq(this)

                        eventObject = sE(eventObject)

                        eventObject.x = eventObject.px - qqTarget.x()

                        eventObject.y = eventObject.py - qqTarget.y()

                        func(qqTarget, eventObject)

                    })
            })

            return element}
        $h=function(a,b){
            var h=qq($('html'))
            if(D(a)){h.o(a,b)}
            return h}
        MM=function(a){ return qq($('html')).o('mousemove', a)}
        MU=function(a){



            return qq($('html')).o('mouseup', a)

        }
        $.MU = $.mouseUp=function(func){$('html').mouseup(func)}
        $.MM = $.mouseMove=function(func){$('html').mousemove(func)}
        $.MD = $.mouseDown=function(func){$('html').mousedown(func)}
        MD=function(a){return qq($('html')).o('mousedown', a)}
        drg=function(element){

            var q= $b( qq(element).q ).css({ position: 'absolute' }).on('mousedown', function(e){

                var offset = $(this).offset(),

                    deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top

                $('html').on( 'mousemove' , function( e ){ q.css({ left:  e.pageX - deltaX , top: e.pageY - deltaY }) })
                    .on( 'mouseup' , function(){  $(this).off() })

            })

            touchDrg(element)
            return qq(element)

        }
        touchDrg=function(element){

            var q= $b( qq(element).q ).css({ position: 'absolute' }).on('touchstart',

                function(e){ $l('touchstart')

                    var offset = $(this).offset(),
                        deltaX = e.originalEvent.touches[0].pageX- offset.left,
                        deltaY = e.originalEvent.touches[0].pageY - offset.top


                    $l(deltaX + ' : ' + deltaY)

                    $('html').on( 'touchmove' , function( e ){ $l('touchmove')

                        q.css({ left: e.originalEvent.touches[0].pageX - deltaX , top: e.originalEvent.touches[0].pageY - deltaY }) })
                        .on( 'touchend' , function(){ $l('touchstop'); $(this).off() })

                })

            return qq(element)

        }
        TOUCHSTART=function(){

            z()

            d= $div().w(100).h(200).c('r').a()

            touchDrg(d)
        }
        EASELTOUCH=function(){z()

            stage = SuperStage(500).a()

            createjs.Touch.enable( stage.ob )

            stage.bm('me', SL)
            stage.bm('me', SL)
            stage.bm('me', SL)
            stage.bm('me', SL)
            stage.bm('me', SL)

            $div().w(10000).h(10).c('r').a()

        }
        botWinScroll=function(){



            $.div('r').css({

                positioning: 'fixed',

                bottom: 0,  left: 0,

                width: '50%',  height: '50%',  'min-width' :110,   'max-width' :318,

                opacity: 4

            }).el().A().A($.img('me'))



            // call and then play with browser size


        }
        jslay=function(){z()

            var l=function(i){return $div().k('layer').s({w:'100%',h:256,p:'a'}).id(i)},
                t=function(a){return 'transparent url('+a+'.png)'},
                b=l('back').s({bg:t('me')}).a(),
                f=l('front').s({bg:t('guy')}).a()
            speed=0
            xp=0

            $(document).mousemove(function(e){
                speed=e.pageX-(W()/2)
                speed /= (W()/2)
                $l(speed)})

            $(document).mouseout(function(e){speed=0})


            I(function(){xp+=speed
                b.q.css({backgroundPosition: xp+'px 0px'})
                f.q.css({backgroundPosition: (xp*3)+'px 0px'})},30)}
        fadeWhite=function f(a){

            //makes a yellow square and black dot??

            z()
            c=cx().a().cir(10,10,10)
            a=U(a)?0.2:parseFloat(a)+.02
            c.fs('w').op(a).fr()
            if(a<1){T(function(){f(a)},30)}
        }

        $.scroll = function (a) {
            return $(window).scroll(a || function () {
                $('body').C('*')
            })
        }
        $.$ = m$ = function (f) {
            return $(document).on('click', _v(f))
        }
        $.$$ = m$$ = function (f) {
            return $(document).on('dblclick', _v(f))
        }

        function keys() {
            $.fn.toR = $.fn.moveRight = function (num) {
                num = num || 20

                if (this.left() == 'auto') {
                    this.left(0)
                }

                this.left(parseInt(this.left()) + num)

                return this
            }

            $.fn.toL = $.fn.moveLeft = function (num) {
                num = num || 20
                if (this.left() == 'auto') {
                    this.left(0)
                }
                this.left(parseInt(this.left()) - num)
                return this
            }
            $.fn.toU = $.fn.moveDown = function (num) {
                num = num || 20
                if (this.top() == 'auto') {
                    this.top(0)
                }
                this.top(this.top() - num)
                return this
            }
            $.fn.toD = $.fn.moveDown = function (num) {
                num = num || 20
                if (this.top() == 'auto') {
                    this.top(0)
                }
                this.top(this.top() + num)
                return this
            }
            $.key = $.keyDown = $.kD = kD = function self(key, funk) {

                if (O(key)) {
                    _.each(key, function (func, arrKey) {
                        if (s$(arrKey).isUpper()) {
                            $.kU(arrKey.toLowerCase(), func)
                        }
                        else {
                            self(arrKey, func)
                        }
                    })

                    return
                }

                keyObj = {
                    up: 38, u: 38,

                    down: 40, d: 40,
                    left: 37, l: 37,
                    right: 39, r: 39,
                    space: 32, s: 32,
                    enter: 13, e: 13
                }

                if (keyObj[key]) {
                    key = keyObj[key]
                }

                $('body').on('keydown', function (e) {
                    if (e.which == key) {
                        funk(e)
                    }
                })
            }
            $.keyUp = $.kU = kU = function (key, funk) {
                keyObj = {
                    up: 38, u: 38,
                    down: 40, d: 40,
                    left: 37, l: 37,
                    right: 39, r: 39,
                    space: 32, s: 32,
                    enter: 13, e: 13
                }
                if (keyObj[key]) {
                    key = keyObj[key]
                }
                $('body').on('keyup', function (e) {

                    if (e.which == key) {
                        funk(e)
                    }
                })
            }
            $.fn.keyControls = function (num) {
                var args = G(arguments), that = this

                g = args

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

            $.fn.hideOnKeyDown = function (a) {
                var that = this
                $('body').keydown(function (ev) {
                    e = ev
                    $l(e.which)
                    if (e.which == 40) {
                        that.hide()
                    }
                    if (e.which == 38) {
                        that.show()
                    }
                })
            }
        }

        function inputTests() {
            testMove = function () {
                z()
                d = $.d('b', 100, 100, '+')

                f = function (num) {
                    d.toR(num)
                }
                setInterval(f, 100)
            }
            testMoveAndWarp = function () {
                z()
                d = $.d('b', 100, 100, '+')
                f = function (num) {
                    d.toR(num)
                }
                setInterval(f, 100)
            }
            testInputKeys = function () {
                z()


                input = $.ip().A()

                $.sp('span ').C('y').A().id('spn')

                input.on('keypress', function (e) {

                    $('#spn').text(
                        $('#spn').text() + e.which
                    )

                })

                    .on('keyup', function (e) {

                        if (e.which == 13) {
                            $l('enter')
                            $('body').C('*')
                        }
                    })

                    .on('keydown', function (e) {

                        var key = e.which, //why these nums?
                            result = (key > 48 && key < 57) || ( key > 96 && key < 105) || (key == 8)
                        $l('result: ' + result)
                    })

            }


            testInputUpOrDown = function () {

                $.input().A()

                onTextInputKeyup(function (e) {

                    var dir = (parseInt(e.which) == 38) ? 'up'
                        : (parseInt(e.which) == 40) ? 'down'
                        : 'neither'

                    $l(dir)
                })

                function onTextInputKeyup(func) {
                    return $('input[type=text]').on('keyup', func)
                }
            }
//cool!
            testUpperVsLowerLetters = function () {
                z()

                i = $.input().A()

                i.on('keydown keypress',
                    function (e) {
                        $l(e.type + ':' + String.fromCharCode(e.which) + '(' + e.which + ')')
                    })
            }
            testHideOnKeyDown = function () {
                z()

                c = $.canvas('r', 500).A()

                c.hideOnKeyDown()


            }
        }
        drag = drg=function(element){
            var q= $b( qq(element).q ).css({ position: 'absolute' }).on('mousedown', function(e){
                var offset = $(this).offset(),
                    deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top
                $('html').on( 'mousemove' , function( e ){ q.css({ left:  e.pageX - deltaX , top: e.pageY - deltaY }) })
                    .on( 'mouseup' , function(){  $(this).off() })

            })

            touchDrg(element)
            return qq(element)

        }

        cjs.Keys = function(o){

            if(O(o)){

                if(F(o.u)){
                    cjs.tick(function(){if(cjs.Keys.u){ o.u(cjs.Keys.u) } })}

                if(F(o.d)){
                    cjs.tick(function(){
                        if(cjs.Keys.d){ o.d(cjs.Keys.d) } })}

                if(F(o.l)){
                    cjs.tick(function(){
                        if(cjs.Keys.l){
                            o.l(cjs.Keys.l)
                        } })}

                if(F(o.r)){
                    cjs.tick(function(){if(cjs.Keys.r){
                        o.r(cjs.Keys.r)
                    } })}

            }
        }
        cjs.watchKeys=function(){
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
            })}
        $.joystick  =function(){
            $('#left').on('mousedown mouseover touchenter', function(e){cjs.Keys.left = true ;e.preventDefault()})
            $('#left').on('mouseup mouseout touchleave', function(){cjs.Keys.left = false})
            $('#jump').on('mousedown mouseover touchenter', function(){  cjs.Keys.up = true   })
            $('#jump').on('mouseup mouseout touchleave', function(){  cjs.Keys.up = false  })
            $('#right').on('mousedown mouseover touchenter', function(){ cjs.Keys.right = true})
            $('#right').on('mouseup mouseout touchleave', function(){cjs.Keys.right = false })}
        TESTWATCHKEYS=function(){z()
            $.test=true
            cjs.watchKeys()}
        TESTKEYBOARD=function(){z()

            cjs.watchKeys()

            b2.mW({debug:true})

            w.footListener()


            //  p = w.addMe().controlMe('standard')

            b=w.ba()

            b.bindSprite('guy')

            b.controlMe('basic')

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



        $.scroll =function(a){
            return $(window).scroll(a||function(){$('body').C('*')})
        }


        $.$=   m$ = function(f){ return $(document).on('click', _v(f) )}
        $.$$=   m$$ = function(f){ return $(document).on('dblclick', _v(f) )}


        $.fn.toR = $.fn.moveRight=function(num){
            num=num||20

            if(this.left()=='auto'){this.left(0)}

            this.left( parseInt(this.left()) + num)

            return this
        }

        $.fn.toL = $.fn.moveLeft=function(num){
            num=num||20
            if(this.left()=='auto'){this.left(0)}
            this.left( parseInt(this.left()) - num)
            return this}
        $.fn.toU =$.fn.moveDown=function(num){num=num||20
            if(this.top()=='auto'){this.top(0)}
            this.top( this.top()  - num  )
            return this}
        $.fn.toD =$.fn.moveDown=function(num){num=num||20
            if(this.top()=='auto'){this.top(0)}
            this.top( this.top()  + num  )
            return this}
        $.key = $.keyDown = $.kD = kD = function self(key, funk){

            if(O(key)){
                _.each(key, function(func, arrKey){
                    if( s$(arrKey).isUpper() ){   $.kU(arrKey.toLowerCase(), func)  }
                    else { self(arrKey,func) }
                })

                return}

            keyObj={
                up:38,u:38,

                down:40, d:40,
                left:37, l:37,
                right:39, r:39,
                space:32,s:32,
                enter:13, e:13}

            if(keyObj[key]){key = keyObj[key]}

            $('body').on('keydown', function(e){
                if (e.which == key) { funk(e) }
            })}
        $.keyUp = $.kU = kU = function(key, funk){
            keyObj={
                up:38,u:38,
                down:40, d:40,
                left:37, l:37,
                right:39, r:39,
                space:32,s:32,
                enter:13, e:13}
            if(keyObj[key]){key = keyObj[key]}
            $('body').on('keyup', function(e){

                if (e.which == key) { funk(e) }
            })
        }
        $.fn.keyControls = function(num){
            var args=G(arguments), that=this

            g=args

            this.P('a')

            if(args.P){
                $.kD('left', function(){that.toL(num)})
                $.kD('right', function(){that.toR(num)})}
            if(args.N){
                $.kD('up', function(){that.toU(num)})
                $.kD('down',   function(){that.toD(num)} )}
        }// o.keyControls(num) should deprecate use of key(o)

        $.fn.hideOnKeyDown = function(a){
            var that = this
            $('body').keydown(function(ev){e=ev
                $l(e.which)
                if(e.which == 40){ that.hide()  }
                if(e.which == 38){ that.show()  }
            })
        }


        testMove=function(){z()
            d = $.d('b',100,100, '+')

            f = function(num){d.toR(num)}
            setInterval(f,100)
        }
        testMoveAndWarp=function(){z()
            d = $.d('b',100,100,'+')
            f = function(num){d.toR(num)}
            setInterval(f,100)}
        testInputKeys=function(){
            z()


            input =  $.ip().A()

            $.sp('span ').C('y').A().id('spn')

            input.on('keypress', function(e){

                $('#spn').text(

                    $('#spn').text() + e.which
                )

            })

                .on('keyup',function(e){

                    if(e.which==13){$l('enter')
                        $('body').C('*') }})

                .on('keydown', function(e){

                    var key = e.which, //why these nums?
                        result = (key>48  &&  key<57)||  ( key>96 && key<105) ||  (key == 8)
                    $l('result: '+result)
                })

        }


        testInputUpOrDown  = function(){

            $.input().A()

            onTextInputKeyup(function(e){

                var dir =  (parseInt(e.which) == 38)? 'up'
                    : (parseInt(e.which) == 40)? 'down'
                    : 'neither'

                $l(dir)
            })

            function onTextInputKeyup(func){return $('input[type=text]').on('keyup', func)}
        }
//cool!
        testUpperVsLowerLetters=function(){z()

            i = $.input().A()

            i.on('keydown keypress',
                function(e){
                    $l(e.type+':'+ String.fromCharCode(e.which) +'('+ e.which +')')})
        }
        testHideOnKeyDown=function(){z()

            c = $.canvas('r', 500).A()

            c.hideOnKeyDown()


        }

        responsiveBottomPanel=function(){z()


            $.div('red').P('f').X(0).css({

                bottom: 0,
                width: '50%',  height: '50%',
                'min-width' :110,
                'max-width' :318,

                opacity: 4

            }).A().A(
                $.img('me')
            )



            // call and then play with browser size


        }

        slowFadeAway=function self(opacity){   z()

            //makes a yellow square and black dot??

            c = $.c('y',500,500)
            c.cir(10,10,10)

            opacity = U(opacity) ? 0.2 : parseFloat(opacity) - 0.001

            c.opacity(opacity).fillStyle('red').fillRect()

            if(opacity < 1){ setTimeout(function(){ self(opacity)}, 30) }

        }




        drawHalf=function(c,i){c.dI(i, -i.width/2, -i.h/2)}


        drag = drg=function(element){
            var q= $b( qq(element).q ).css({ position: 'absolute' }).on('mousedown', function(e){
                var offset = $(this).offset(),
                    deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top
                $('html').on( 'mousemove' , function( e ){ q.css({ left:  e.pageX - deltaX , top: e.pageY - deltaY }) })
                    .on( 'mouseup' , function(){  $(this).off() })

            })

            touchDrg(element)
            return qq(element)

        }

        cjs.Keys = function(o){

            if(O(o)){

                if(F(o.u)){
                    cjs.tick(function(){if(cjs.Keys.u){ o.u(cjs.Keys.u) } })}

                if(F(o.d)){
                    cjs.tick(function(){
                        if(cjs.Keys.d){ o.d(cjs.Keys.d) } })}

                if(F(o.l)){
                    cjs.tick(function(){
                        if(cjs.Keys.l){
                            o.l(cjs.Keys.l)
                        } })}

                if(F(o.r)){
                    cjs.tick(function(){if(cjs.Keys.r){
                        o.r(cjs.Keys.r)
                    } })}

            }
        }
        cjs.watchKeys=function(){
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
            })}
        $.joystick  =function(){
            $('#left').on('mousedown mouseover touchenter', function(e){cjs.Keys.left = true ;e.preventDefault()})
            $('#left').on('mouseup mouseout touchleave', function(){cjs.Keys.left = false})
            $('#jump').on('mousedown mouseover touchenter', function(){  cjs.Keys.up = true   })
            $('#jump').on('mouseup mouseout touchleave', function(){  cjs.Keys.up = false  })
            $('#right').on('mousedown mouseover touchenter', function(){ cjs.Keys.right = true})
            $('#right').on('mouseup mouseout touchleave', function(){cjs.Keys.right = false })}
        TESTWATCHKEYS=function(){z()
            $.test=true
            cjs.watchKeys()}
        TESTKEYBOARD=function(){z()

            cjs.watchKeys()

            b2.mW({debug:true})

            w.footListener()


            //  p = w.addMe().controlMe('standard')

            b=w.ba()

            b.bindSprite('guy')

            b.controlMe('basic')

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


        aEL=function(a,b,c,d){return a.addEventListener(b,c,d)}

        Y=function(a){return $$w.scroll(a||function(){co()})}


        _D=function(o,f){
            var d=$(document)
            return U(o)?d:d.on(oE(o),_v(f))}


        m$=function(f){return _D('$',f)}

        m$$=function(f){return _D('$$',f)}




        kD=function(a,b,c){

            var g=G(arguments),a=g[0],b=g[1]

            if ( U( b ) ){ return _D( 'kd' , function ( e ) {

                _v(a)(g.n?_W(e) : fCC(_W(e)))

            })}


            kD(function(e){

                if(e==(a=='l'?'37':a=='u'?'38':a=='r'?'39':a=='d'?'40'
                        :a=='s'?'32':a=='e'?13:0)){
                    _v(b)(c)}

            },'-')

        }





        kU=function(a,b){ var g=G(arguments),a=g[0],b=g[1]


            if(U(b)){
                return _D('ku',  function(e){
                    _v(a)( g.n? _W(e) : fCC(_W(e)))})}


            kU(function(e){
                if(e==(
                        a=='l'?'37':a=='u'?'38':a=='r'?'39':a=='d'?'40'
                            :a=='s'?'32':a=='e'?13:0

                    )){_v(b)()} },'-')}


        iR=function(e){return _W(e,39)}
        iU=function(e){return _W(e,38)}
        iD=function(e){return _W(e,40)}
        iL=function(e){return _W(e,37)}
        toR=function(q,n){
            n=N(n)?n:10
            if(Q(q)){
                q=qq(q);
                return q.l(q.l()+n)}
            return q.x(n,'+')}
        toU=function(q,n){n=N(n)?n:10
            if(Q(q)){q=qq(q);return q.t(q.t()-n)}
            return q.y(n,'-')}
        toD=function(q,n){n=N(n)?n:10
            if(Q(q)){q=qq(q);return q.t(q.t()+n)}
            return q.y(n,'+')}
        toL=function(q,n){

            n=N(n)?n:10

            if(Q(q)){
                q=qq(q)
                return q.l(q.l()-n)}

            return q.x(n,'-')

        }




        key=function(q){var g=G(arguments),q=g[0]
            if(g.P){kD('l', toL,q); kD('r', toR,q)}
            if(g.N){kD('u', toU,q);kD('d',toD,q)}}



        txtKey=function(){

            qi('txt').o('kp',function(q,e){
                qi('spn').T(qi('spn').T()+e.k)})
            qk('txt').o('ku',function(q,e){
                if(e(13)){$l('enter')}})
            qi('txt').o('kd',function(e){
                result=(e(48,'+')&&e(57,'-'))||(e(96,'+')&&e(105,'-')||e(8))})}

        ipKU=function(f){
            return qq($('input[type=text]')[0]).o('ku',f)}

        upOrDown=function(){
            ipKU(function(e){
                $l(e(38)?'up': e(40)?'down':0)})}

        multEvents=function(){
            $('input').on('keydown keypress',
                function(e){
                    $l(e.type+':'+e.k+'('+ e.w+')')})}


        hideOnKeyDown=function(a){
            qq($d()).o('kd',function(e){
                if(e(27)){
                    a.hide()
                }})}


        moveElemUp=function(a){
            q=qq(a)
            q.t(q.t()-100)}





        sE=function(e){

            var f=function(a){var g=G(arguments)
                return g.p?f.w>=a:g.n?f.w<=a:f.w==a}

            f.e=e
            f.w=e.which
            f.k=fCC(f.w)
            f.A=e.altKey
            f.b=e.bubbles
            f.C=e.ctrlKey
            f.c=e.cancelable
            f.d=e.data
            f.sp=function(){e.stopPropagation()}
            f.pd=e.preventDefault
            f.dp=e.isDefaultPrevented
            f.oe=e.originalEvent
            f.g=e.target
            f.gr=e.relatedTarget
            f.gc=e.currentTarget
            f.gd=e.delegateTarget
            f.M=e.metaKey
            f.p=e.eventPhase
            f.S=e.shiftKey
            f.t=e.type
            f.T=e.timeStamp
            f.px=e.pageX
            f.py=e.pageY
            f.ox=e.offsetX
            f.oy=e.offsetY
            f.cx=e.clientX
            f.cy=e.clientY
            f.sx=e.screenX
            f.sy=e.screenY
            return f}



    }
    responsiveBottomPanel=function(){z()


        $.div('red').P('f').X(0).css({

            bottom: 0,
            width: '50%',  height: '50%',
            'min-width' :110,
            'max-width' :318,

            opacity: 4

        }).A().A(
            $.img('me')
        )



        // call and then play with browser size


    }
    slowFadeAway=function self(opacity){   z()

        //makes a yellow square and black dot??

        c = $.c('y',500,500)
        c.cir(10,10,10)

        opacity = U(opacity) ? 0.2 : parseFloat(opacity) - 0.001

        c.opacity(opacity).fillStyle('red').fillRect()

        if(opacity < 1){ setTimeout(function(){ self(opacity)}, 30) }

    }
    drawHalf=function(c,i){c.dI(i, -i.width/2, -i.h/2)}
    function parlax(){




        parallax=function(){z()
            var l=function(i){return c('layer').s({w:'100%',h:256,p:'a'}).id(i)},
                t=function(a,b){return 'transparent url('+a+'.png)' +b+'% 0px'}
            l('back').s({bg:t('me',10)}).a()
            l('front').s({bg:t('guy',60)}).a()}

//parallax!!!
        CanvasLayer=function(bg){

            c = $.c('y',500,500).P('a').W('100%').H(256)
            if(bg){c.bg(bg)}
            return c
        }

        DivLayer=function(bg){
            d = $.d('y',500,500).P('a').W('100%').H(256)
            if(bg){d.bg(bg)}
            return d
        }

        transparent=function(i, num){
            if(!N(num)){ return 'transparent url('+i+'.png)'  }
            return 'transparent url('+ i +'.png)' + num +'% 0px'
        }


        PARALLAX=function(){z()

            CanvasLayer( transparent('me', 10))

            CanvasLayer( transparent('guy', 300))


        }

//awesome!!!!!
        PARALLAXBYMOUSE=function(){z()

            back=DivLayer(transparent('me') )
            front=DivLayer(transparent('guy'))

            speed=0
            xp=0

            $('body').mousemove(function(e){

                speed= e.pageX - ( W()/2 )

                speed /= ( W()/2 )

                $l(speed)
            })
            $('body').mouseout(function(e){speed=0})


            setInterval(function(){
                xp += speed
                back.bgP( xp+'px 0px')
                front.bgP( (xp*3)+'px 0px')
            },30)}

        function again(){


//parallax!!!
            CanvasLayer=function(bg){

                c = $.c('y',500,500).P('a').W('100%').H(256)
                if(bg){c.bg(bg)}
                return c
            }

            DivLayer=function(bg){
                d = $.d('y',500,500).P('a').W('100%').H(256)
                if(bg){d.bg(bg)}
                return d
            }



            transparent=function(i, num){
                if(!N(num)){ return 'transparent url('+i+'.png)'  }
                return 'transparent url('+ i +'.png)' + num +'% 0px'
            }


            PARALLAX=function(){z()

                CanvasLayer( transparent('me', 10))

                CanvasLayer( transparent('guy', 300))


            }

//awesome!!!!!
            PARALLAXBYMOUSE=function(){z()

                back=DivLayer(transparent('me') )
                front=DivLayer(transparent('guy'))

                speed=0
                xp=0

                $('body').mousemove(function(e){

                    speed= e.pageX - ( W()/2 )

                    speed /= ( W()/2 )

                    $l(speed)
                })
                $('body').mouseout(function(e){speed=0})


                setInterval(function(){
                    xp += speed
                    back.bgP( xp+'px 0px')
                    front.bgP( (xp*3)+'px 0px')
                },30)}

        }
    }

////

    dh=function(c,i){c.dI(i, -i.width/2, -i.h/2)}

    fuzzy=function(range,base){return (base||0)+(_r()-.5)*range*2}

    v2=function(x,y){

        var v={x:x,y:y}
        v.muls=function(n){return v2(v.x*n, v.y*n)}
        v.imuls=function(n){v.x*=n;v.y*=n;return v}
        v.mul=function(vv){return v2(v.x*vv.x, v.y*vv.y)}
        v.imul=function(v){v.x*=vv.x;v.y*=vv.y;return v}
        v.divs=function(n){return v2(v.x/n, v.y/n)}
        v.div=function(n){ return v2( v.x/vv.x,v.y/vv.y)  }
        v.adds=function(n){return v2(v.x+n,v.y+n)}
        v.iadds=function(n){v.x+=n;v.y+=n;return v}
        v.add=function(vv){return v2(v.x+vv.x, v.y+vv.y)}
        v.iadd=function(v){v.x+=vv.x;v.y+=vv.y;return v}
        v.subs=function(n){return v2(v.x-n, v.y-n)}
        v.isub=function(n){v.x-=n;v.y-=n;return v}
        v.sub=function(vv){return v2(v.x-vv.x, v.y-vv.y)}
        v.isub=function(v){v.x-=vv.x;v.y-=vv.y;return v}
        v.set=function(x,y){v.x=x;v.y=y}

        return v}
    particle=function(pos){
        var p={}

        p.p=pos
        p.v=v2(0,0)
        p.pars=alive

        p.u=function(td){
            p.p.iadd(p.v.muls(td))}
        return p}



// aEL=function(a,b,c,d){return a.addEventListener(b,c,d)}

    _DX=function(o,f){
        if(U(o)){return $(document)}
        return $(document).on(oE(o), _v(f))
    }
    sEX=function(e){

        var f=function(a){
            var g=G(arguments)
            return g.p? f.w >=a
                :g.n? f.w <=a
                :f.w == a
        }

        f.e= e

        f.w= e.which

        f.k= String.fromCharCode(f.w)

        f.A= e.altKey
        f.b= e.bubbles
        f.C= e.ctrlKey
        f.c= e.cancelable
        f.d= e.data

        f.sp= function(){ e.stopPropagation()}
        f.pd= e.preventDefault
        f.dp= e.isDefaultPrevented

        f.oe= e.originalEvent

        f.g= e.target
        f.gr= e.relatedTarget
        f.gc= e.currentTarget
        f.gd= e.delegateTarget

        f.M= e.metaKey
        f.p= e.eventPhase
        f.S= e.shiftKey
        f.t= e.type
        f.T= e.timeStamp

        f.px= e.pageX
        f.py= e.pageY
        f.ox= e.offsetX
        f.oy= e.offsetY
        f.cx= e.clientX
        f.cy= e.clientY
        f.sx= e.screenX
        f.sy= e.screenY

        return f}
    eeX=function ee(element, mouseEvent, func){



        //some partial application
        if(U(mouseEvent)){ return _.partial(ee, element)}

        // can imply '$' (click)
        if( F(mouseEvent) || (S(mouseEvent)&&!(Oo('e', mouseEvent)))){  return ee( element, '$', mouseEvent )}


        //can pass an object of events
        if(O(mouseEvent)){
            _.each(mouseEvent, function(v, k){

                ee(element, k, v)})

            return element}


        _.each(mouseEvent.split(' '), function(mouseEvent){

            element.q.on( oO('e',mouseEvent),

                function(eventObject){

                    var qqTarget = qq(this)

                    eventObject = sE(eventObject)

                    eventObject.x = eventObject.px - qqTarget.x()

                    eventObject.y = eventObject.py - qqTarget.y()

                    func(qqTarget, eventObject)

                })
        })

        return element}
    $hX=function(a,b){
        var h=qq($('html'))
        if(D(a)){h.o(a,b)}
        return h
    }




//MM=function(a){ return qq($('html')).o('mousemove', a)}
//MU=function(a){return qq($('html')).o('mouseup', a)}
//$.MU = $.mouseUp=function(func){$('html').mouseup(func)}
//$.MM = $.mouseMove=function(func){$('html').mousemove(func)}
//$.MD = $.mouseDown=function(func){$('html').mousedown(func)}
// MD=function(a){return qq($('html')).o('mousedown', a)}




    drag = drg = function (element) {
        var q = $b(qq(element).q).css({position: 'absolute'}).on('mousedown', function (e) {
            var offset = $(this).offset(),
                deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top
            $('html').on('mousemove', function (e) {
                q.css({left: e.pageX - deltaX, top: e.pageY - deltaY})
            })
                .on('mouseup', function () {
                    $(this).off()
                })

        })

        touchDrg(element)
        return qq(element)

    }


    $.K = function (o) {
        alert('cjs.Keys')
        function oldFn() {
            if (!O(o)) {
                return
            }
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

        wnd = function (a) {
            var g = G(arguments), a = g[0]
            if (g.n) {
                return a.close()
            }
            return $w.open()
        }
        makeAllExtLinksOpenInNewWindows = function () {
            $("a[href^='http://']").attr('target', '_blank')
        }
        accessParentFrame = function () {
            frames[0].parent === $w
        }
        accessChildFrame = function () {
            frames[0].window.location.reload
        }
        accessTopFrame = function () {
            $w.frames[0].window.top === $w.top
        }
        accessFrameByName = function (f) {
            $w.frames[f] === $w.frames[0].location.reload
        }
        open = function (c) {
            $w.open(_S(c),
                'new_window', 'width=310,height=30')
        }
//workers
        jsBlob = function (f) {
            return new Blob(['(' + f.toString() + ')()'], {
                type: "text/javascript"
            })
        }
        wrk = function (a) {
            cou = function (a) {
                return $w.URL.createObjectURL(a)
            }

            a = cou(jsBlob(a))
            var g = G(arguments),
                w = g.P ? new Worker(a) : new sharedWorker(a)
            w.t = w.terminate
            w.pm = w.postMessage
            w.m = function (f) {
                w.onmessage = f
            }
            return w
        }
        work = function () {
            w = wrk(function () {
                postMessage('hi')
            })
            w.m(function (e) {
                $l('Worker said: ' + e.data)
            })
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
        ssS = sessionStorage
        sR = function (a) {
            var i = ssS.getItem(a)
            ssS.removeItem(a)
            return i
        }
        sS = function (a, b) {
            ssS.setItem(a, b);
            return ssS
        }
        sG = function (a) {
            return ssS.getItem(a)
        }
        sL = function () {
            return ssS.length
        }
        sX = function () {
            ssS.clear();
            return ssS
        }
        lcS = localStorage
        lR = function (a) {
            var i = lcS.getItem(a)
            lcS.removeItem(a)
            return i
        }
        lS = function (a, b) {
            lcS.setItem(a, b);
            return lcS
        }
        lG = function (a) {
            return lcS.getItem(a)
        }
        lL = function () {
            return lcS.length
        }
        lX = function () {
            lcS.clear();
            return lcS
        }
        isWindow = function (a) {
            alert('isWindow');
            if (O(a)) {
                if (s$(a).contains('Window') ||
                    s$(a[0]).contains('Window')) {
                    return window
                }
            }
        }

    }
}
function css(){
    $.fn.transform = function (transform) {
        return this.css({transform: transform})
    }
    CSSROTATE = function () {
        z()

        //works

        $.h1('css transform: rotate').A()

        d = $.div('x', null, 200).A().transform('translateY(300px) rotateZ(120deg)')
    }
    CSSSCALE = function () {
        z()


        $.h1('css transform: scale').A()

        i = $.img('me').A()

        // d = $.div('r', null, 200,200).A()


        $.img('me').A().transform('scaleX(2)')
        $.img('me').A().transform('scaleY(2)')

        $.img('me').A().transform('scaleZ(2)') //does nothing?!


        $.img('me').A().transform('rotate3d(100,100,100,100)')

    }
    offset = os = function (element) {

        if (C(element)) {
            element = C(element)
        }
        ;

        return $(element || 'body').offset()

    }
    offsetLeft = osl = function (el) {
        return offset(el).left
    }
    offsetTop = ost = function (el) {
        return offset(el).top
    }
//dims
    iW = function (a) {
        if (O(a = a || $$w)) {
            return Q(a).innerWidth()
        }
    }
    iH = function (a) {
        if (O(a = a || $$w)) {
            return Q(a).innerHeight()
        }
    }
    _z = function z(a, b, c) {

        return U(b) ? _.size(a)
            : N(b) ? _z(a) == b
            : _z(a) == _z(b)
    }
//log dims of something
    owh = function (d) {
        return d.o('$$', function () {
            d.w() + ' ' + d.h()
        })
    }
    osP = function (a) {
        return O(a) && a.offsetParent
    }
    osT = function (a) {
        return O(a) && a.offsetTop
    }
    osL = function (a) {
        return O(a) && a.offsetLeft
    }
    marb = function () {

        nCs = 10
        nRs = 15
        brZ = 30

        grW = nCs * brZ
        grH = nRs * brZ
        cnW = grW + 1
        cnH = grH + 1
        store = null
        grid = null
        slBrCl = null
        curBt = null

        z();
        cnt(
            sc('grid-container', {w: 300, mr: 50, fl: 'l'})(
                ci('grid'),
                fo(
                    bti('clear', 'clear-track'),
                    bti('save', 'save-track', {fl: 'r'}),
                    ip().id('track-name').ph('track name').s({fl: 'r'})
                )
            ),


            sc('bricks-container', {w: 100, mr: 50, fl: 'l'})(
                fo(bti('square', 'square-brick'),
                    bti('triangle', 'triangle-brick'),
                    bti('circle', 'circle-brick'),
                    bti('curve', 'curve-brick')
                )),

            sc('tracks-container', {w: 300, fl: 'l', m: 0})(
                h1('saved tracks').s({m: 0}))
        )
    }
//cW=function(){return document.body.clientWidth }
//cH=function(){return document.body.clientHeight }
}
function js(){
    $.scr=function(scr, fn){return $.getScript(scr, fn)}

    $.getMultiScripts = function(arr, path) {
        var _arr = $.map(arr, function(scr) {return $.getScript( (path||"") + scr )})

        //_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
        return $.when.apply($, _arr)
    }

    SCRIPTS = _.map([
        "socket.io/socket.io","string", 'bb','bbmn', 'ko','mel','gq', 'objects', 'defaultMug',  'spriteSheets',
        'core', 'jqueryplugins', 'html', 'boot','ui' ,'can','sys',  'images', 'event','socket', 'ranky',  'routeTests', 'nav', 'api', 'j3', 'display',  'animate','imagine','work','tween', 'universe', 'create',  'easel', 'displayObject',  'shape', 'text', 'mobile','animation','sprites', 'bitmap', 'toolkit', 'stage', 'filt', 'draw', 'solve','playgame','users','share','chat' , 'messages', 'knock', 'bbtemps','backbone1','people','mar', 'backbone', 'angu'

        // ,'melon','gquery','ph','phaser0','phaser','ninja', 'ph2','bx','b2dbasics','b2dutils', 'invaders','three', 'iso', 'boxWorld','boxWorldMore','walls', 'makeworld', 'b2dSensors','playerWorld', 'boxRev','weld','prism','coll','gamey','pong','easelbox','joints','wheel',
        // 'emitter','p2fiddle','ragdoll','p2constraints','unigame',
        //  'tilemapping','launcher','fullgames','p2physics', 'controls','orbs',
        //  'shooter','boxBody','talkjs','mario','squares','edges','boxgame','boxDebug','boxFixt', 'boxShapes','player','pinball', 'examples'

    ],  function(js){return "/" + js + ".js"})
// _.each(SCRIPTS, function(scr){$.scr(scr)})

    /*
     dfr = $.getMultiScripts(SCRIPTS)
     dfr.done(function(){alert('done')})
     .always(function(){
     alert('always')
     $.scr('app')
     })
     .fail(function(){alert('fail')})
     */



    GSCR=function(){
        $.scr=function(scr, fn){return $.getScript(scr, fn)}
        $.getMultiScripts = function(arr, path) {
            var _arr = $.map(arr, function(scr) {return $.getScript( (path||"") + scr )})

            //_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
            return $.when.apply($, _arr)
        }
        $.scr("https://code.jquery.com/color/jquery.color.js", function(a,b,c){
            console.log( a + b + c)
            d=c
            $l('got script')
            $.$(function(){$.j({C: "z"}, 1).in(.5).j({C: 'r'}, 1).in(.5).j({C: "y"}, 1)})
        })
        dfr= $.Deferred(function(dfrd){
            d=dfrd
            // $(dfrd.resolve)
        })
        testx=100
        $.when(
            $.scr("/boxSprite.js"),
            $.scr("/easel.js")
        ).done(function(){$l(testx)})
    }

}
function classicQQ() {

    qq = function (e, b, c, d) {

        if (O(e)) {

            if (e.name === 'q') {
                return e
            }
            //if(e.name==='x'){e=e.c}

            if (E(e)) {
                e = Q(e)
            }
        }

        else {
            e = $('<' + oO('t', e || 'd') + '>' + (b || '') + '</>')
        }

        var q = function (a, b) {

            //return  _a( q.fn, arguments, q )

            return q.fn.apply(q, arguments)
        }


        q.fn = function (a, b) {
            var g = G(arguments)

            if (N(a)) {
                return q.wh(a * 100, (b || a) * 100)
            }
            if (U(a)) {
                return q.O()
            }
            if (P(a)) {
                return q.s(a).at(b)
            }
            if (A(a)) {
                q.res = _a(q.m, arguments)
                return q
            }
            _e(g, function (a) {
                if (S(a)) {
                    q.H(a)
                }
                if (O(a)) {
                    q.a(a)
                }
            })
            return q
        }


        //the jquery object
        q.q = q.jq = Q(e)


        // the first element
        q.e = q.el = q.q[0]

        //make css

        q.s = q.css = function (a, b) {

            q.res = ss(q.q, a, b)

            return q
        }


        //call a jquery method
        q.m = q.method = qM(q.q)


        //call a function
        q.o = q.on = function () {
            _a(ee(q), arguments);
            return q
        }


//get/set a property
        q.po = function (a, b) {
            q.res = pp(q.q, a, b)
            return q
        }


        //appending / adding to stage


        q.A = q.a = q.append = function (a, b) {
            var g = G(arguments), a = g[0], b = g[1]


            var theElement = b,
                args = g


            if (a === 2) {

                q.q.appendTo(
                    Q(theElement || qq($('body'))))

                if (args.p) {
                    q.positioning('static')
                }

                return q
            }


            if (g.n) {

                if (U(a)) {

                    qq($('body')).prepend(q.q);
                    return q

                }

                if (A(a)) {
                    _.each(a, q.a(a))
                }

                else {

                    _.each(g,

                        function (a) {

                            if (a.ob && iSt(a.ob)) {
                                a = a.Q
                            }

                            q.q.prepend(Q(a))
                        })
                }

            }


            else {

                if (U(a)) {

                    bd().q.append(q.q);
                    return q
                }

                if (A(a)) {
                    _e(a, q.a(a))
                }

                else {
                    _e(g, function (a) {
                        if (a.ob && iSt(a.ob)) {
                            a = a.Q
                        }
                        q.q.append(Q(a))
                    })
                }
            }

            if (g.p) {
                qq(a).p('s')
            }

            return q
        }


//prepend to
        q.p2 = q.prependTo = function (a) {
            q.q.prependTo($(a || 'body'));
            return q
        }

        // prepending
        q.pp = q.prepend = function (a) {
            if (U(a)) {
                return q.p2()
            }
            q.q.prepend(Q(a))
            return q
        }

        //q.d=function(){return q.pp()()}


        //opacity
        q.op = q.opacity = function (a) {
            if (U(a)) {
                return q.s('a').r
            }
            if (N(a)) {
                q.s('a', a)
            }
            return q
        }


        //set id
        q.id = function (a) {
            return q.at({id: a})
        }

        //unbind
        q.ub = q.unbind = function (f) {
            q.q.unbind();
            return q
        }

        //hide
        q.hd = q.hide = function () {
            q.q.hide();
            return q
        }


        //show
        q.sh = q.show = function () {
            q.q.show();
            return q
        }

        //toggle
        q.tg = q.toggle = function () {
            q.q.toggle();
            return q
        }


        //empty and add new items
        q.E = q.empty = function () {
            var g = G(arguments)
            q.q.empty();
            _e(g, function (g) {
                q(g)
            })
            return q
        }


        //turns events off
        q.off = q.F = function () {
            q.q.off();
            return q
        }


        //remove me
        q.X = q.rm = q.remove = function () {
            q.q.remove();
            return q
        }


        //remove me and my parent
        q.XX = function () {
            q.pa().X();
            return q
        } //XX=function(q){q.X()}//remove me


        //del button
        q.xb = q.delBt = function () {//x button!!!

            q.pp(
                $div()(
                    $button.k('dropdown-toggle').at({'data-target': 'dropdown'})(
                        'x', function () {
                            q.X()
                        })

                        .k('pull-right').margin(20)
                ))

            return q
        }


        //outer html
        q.O = function () {
            _o(q);
            return q
        }

        //class
        q.K = q.k = q.class = function (a) {
            kl(q)(a);
            return q
        }


        //color
        q.c = q.backgroundColor = function c(a, b) {
            var g = G(arguments),
                s = q.s,
                i = is(a)

            //if(g.n){c='X'}

            if (i(0)) {
                return s('c', b || 'z')
            }
            if (i('*')) {
                return q.c($r())
            }
            if (i('**')) {
                return q.s('c', $r())
            }
            if (i('***')) {
                return q.c($r(), $r())
            }

            if (U(b)) {
                q.s('C', $r('c', a));
                return q
            }
            q.s({C: a, c: b})
            return q
        }

        q.w = function (w, b) {
            if (U(w)) {
                return q.q.width()
            }
            if (w === '+') {
                return q.w(q.w() + b)
            }
            if (w === '*') {
                return q.w(q.w() * b)
            }
            if (w === '%') {
                return q.w(q.w() * b * .01)
            }
            q.q.width(w)
            //q.q.width((w<10)?w*100:w)
            return q
        }


        q.h = function (h, b) {
            if (U(h)) {
                return q.q.height()
            }
            if (h === '+') {
                return q.h(q.h() + b)
            }
            if (h === '*') {
                return q.h(q.h() * b)
            }
            if (h === '%') {
                return q.h(q.h() * b * .01)
            }
            q.q.height(h)
            //q.q.height(  (h<10)?h*100:h)
            return q
        }

        q.wh = function (a, b) {
            return q.w(a).h(b)
        }

        q.full = function () {
            q.wh(W(), H())
        }//make something full height

        q.Z = function (w, h) {
            w = w || 5;
            return q.wh(w * 100, (h || w) * 100)
        }

        q.siz = function (z, b) {
            if (U(z)) {
                return q.ch().size()
            }
            if (z === '-') {
                return {w: q.q.width(), h: q.q.height()}
            }
            if (z === '+') {
                q.w(q.w() + b);
                q.h(q.h() + b)
            }
            if (z === '*') {
                q.w(q.w() * b);
                q.h(q.h() * b)
            }
            if (z === '%') {
                q.w(q.w() * b * .01);
                q.h(q.h() * b * .01)
            }
            q.h(b || z)
            q.w(z)
            return q
        }

        q.auto = function () {
            return q.w('auto').h('auto')
        }

        q.top = q.t = function (a) {
            if (U(a)) {
                return q.q.position().top
            }  //_i(q.pt())
            q.s('t', a)
            return q
        }


        //offset is distance from the document origin.
        //can set or get.  if pos is static, it gets changed to rel
        //use to get or set offset
        q.os = function (l, t) {
            if (U(l)) {
                var o = q.q.offset()
                return {t: o.top, l: o.left}
            }

            if (O(l)) {
                q.q.offset({
                    left: l || q.os().l,
                    top: t || q.os().t
                })
                return q
            }

            t = N(t) ? t : l
            q.q.offset({left: l, top: t})
            return q
        }


        //offset left//q.ox=function(l){if(U(l)){return q.os().l}; return q.os(l, q.oy())}
        q.x = q.osl = function (x) {
            if (U(x)) {
                return q.q.offset().left
            }
            return _i(x - q.x())
        }//used in drg


        //offset top//q.oy=function(t){if(U(t)){return q.os().t};return  q.os(q.ox(),t)}
        q.y = q.ost = function (y) {
            if (U(y)) {
                return q.os().t
            }
            return _i(y - q.y())
        }//used in drg

        //get position
        q.ps = q.position = function () {
            return q.q.position()
        }


        //left
        q.left = q.l = q.px = q.positionLeft = q.psl = function (pos) {

            if (U(pos)) {

                return q.q.position().left
            }  //_i(q.pl())

            q.s('left', pos);

            return q
        }


        //top
        q.pst = q.positionTop = function () {
            return q.ps().top
        }


        //left and top
        q.lt = q.leftTop = function (a, b) {
            b = b || a
            q.l(a).t(b)
            return q
        }


        //right
        q.r = q.right = function (a) {
            if (U(a)) {
                return _i(q.q.right())
            }
            q.s('r', a);
            return q
        }


        //bottom
        q.bo = q.bottom = function (a) {
            if (U(a)) {
                return _i(q.q.bottom())
            }
            q.s('b', a);
            return q
        }


        //positioning
        q.p = q.positioning = function (a, l, t) {

            if (U(a)) {
                return ss(q, 'p')
            }

            q.s('p', a)

            if (l) {
                q.l(l)
            }

            if (t) {
                q.t(t)
            }

            return q
        }


        //z index
        q.z = function (a) {
            var g = G(arguments),
                n = N(a) ? a : g.p ? 100 : g.n ? -100 : S(a) ? eval('q.z()' + a) : false
            return N(n) ? q.s('z', n) : q.s('z').res
        }//z-index


        q.dp = q.dy = q.display = function (a, l, t) {
            if (U(a)) {
                return ss(q, 'y')
            }
            q.s('y', a);
            return q
        }//display


        q.pa = q.parent = function () {
            return qq(q.q.parent())
        }


        q.ch = q.children = function rc(a) {

            if (N(a)) {
                return qq(rc()[a])
            }

            return q.q.children(a)

        }


        q._c = q.children2 = function () {
            return _c(q.q)
        }//children


        q.fe = q.forEach = function (a) {
            return q.b('fe', a)
        }

        q.feD = q.forEachData = function (a) {
            return q.fe('$data.' + a)
        }

        q.ser = q.serialize = function () {
            var g = G(arguments)
            if (g.N) {
                return q.q.serializeArray()
            }
            return q.q.serialize()
        }


        qit = function (a, b) {
            a = a || 'result'
            var q = qi(a)
            if (q.q) {
                if (U(b)) {
                    return q.T()
                }
                if (S(b)) {
                    q.T(b)
                }
                if (O(b)) {
                    q.T(b.ser('-'))
                }
                return q
            }
        }


        //shortcut for click
        //gets passed qt and then e (e.x, e.y =offset x,y)
        q.$ = function (f) {
            if (f) {
                return q.o('$', f)
            }
            q.q.click();
            return q
        }


        //shortcut for $doubleclick
        q.$$ = function (f) {
            if (f) {
                return q.o('$$', f)
            }
            q.q.dblclick();
            return q
        }


        //shortcut for _bind
        q.bind = function (a) {
            return _.bind(q.c[a], q.c)
        }


        q.ngModel = function (m) {
            q.at('ng-model', m)
            return q
        }
        q.ngCont = function (m) {
            q.at('ng-controller', m)
            return q
        }
        q.ngSwitch = function (m) {
            q.at('ng-switch', m)
            return q
        }
        q.ngClick = function (m) {
            q.at('ng-click', m)
            return q
        }
        q.ngRepeat = function (m) {
            q.at('ng-repeat', m)
            return q
        }
        q.ngShow = function (m) {
            q.at('ng-show', m)
            return q
        }
        q.ngIf = function (m) {
            q.at('ng-if', m)
            return q
        }
        q.ngSubmit = function (m) {
            q.at('ng-submit', m)
            return q
        }
        q.jLoad = function (a) {
            qJ(a, function (d) {
                q(d)
            })
            return q

        }


        q.ih = q.innerHTML = function () {
            return q.q[0].innerHTML
        }

        q.oh = q.outerHTML = function () {
            return q.q[0].outerHTML
        }

        q.H = q.outerHTML2 = function (t) {
            if (t === 'e') {
                q.res = q.q[0];
                return q
            }
            if (t === 'o') {
                q.res = q.outerHTML;
                return q
            }

            if (U(t)) {
                return q.q.html()
            }

            q.q.html(t)
            return q
        }


        q.T = q.text = function (t) {
            if (U(t)) {
                return q.q.text()
            }
            q.q.text(t)
            return q
        }//text


        q.b = q.knockoutBind = function (a, b) {

            var o = []

            if (O(a)) {

                _e(a, function (v, k) {

                    o.push(oO('b', k) + ':' + v)

                })

                q.at({b: o.join()})

            }


            else {

                q.at({

                    b: oO('b', a) + ':' + b

                })
            }


            return q
        }


        q.bd = q.knockoutBind2 = function (a) {
            var g = G(arguments), a = g[0]
            if (g.p) {
                a = 'text: ' + a
            }
            if (g.n) {
                a = 'click: ' + a
            }
            if (g.m) {
                a = 'value: ' + a
            }
            if (g.d) {
                a = 'checked: ' + a
            }
            q.at({b: a})
            return q
        }


        q.cE = function (a) {

            return q.at('contenteditable', a ? 'true' : 'false')

        }


        q.pt = function (a) {
            if (U(a)) {
                return ss(q, 'gt')
            }
            ;
            q.s('gt', a);
            return q
        }
        q.pb = function (a) {
            if (U(a)) {
                return ss(q, 'gb')
            }
            ;
            q.s('gb', a);
            return q
        }
        q.pl = function (a) {
            if (U(a)) {
                return ss(q, 'gl')
            }
            ;
            q.s('gl', a);
            return q
        }
        q.pr = function (a) {
            if (U(a)) {
                return ss(q, 'gr')
            }
            ;
            q.s('gr', a);
            return q
        }

        q.mt = function (a) {
            if (U(a)) {
                return ss(q, 'mt')
            }
            ;
            return q.s('mt', a)
        }

        q.mb = function (a) {
            if (U(a)) {
                return ss(q, 'mb')
            }
            ;
            return q.s('mb', a)
        }

        q.ml = function (a) {
            if (U(a)) {
                return ss(q, 'ml')
            }
            ;
            return q.s('ml', a)
        }
        q.mr = function (a) {
            if (U(a)) {
                return ss(q, 'mr')
            }
            ;
            return q.s('mr', a)
        }


        q.bt = function (a) {
            if (U(a)) {
                return ss(q, 'bt')
            }
            ;
            q.s('bt', a);
            return q
        }
        q.bb = function (a) {
            if (U(a)) {
                return ss(q, 'bb')
            }
            ;
            q.s('bb', a);
            return q
        }
        q.bl = function (a) {
            if (U(a)) {
                return ss(q, 'bl')
            }
            ;
            q.s('bl', a);
            return q
        }
        q.br = function (a) {
            if (U(a)) {
                return ss(q, 'br')
            }
            ;
            q.s('br', a);
            return q
        }

        q.M = q.margin = function (a) {
            return q.mt(a).mb(a).ml(a).mr(a)
        }

        q.mg = q.margin2 = function (a) {
            if (U(a)) {
                return ss(q, 'g')
            }
            ;
            q.s('g', a);
            return q
        }

        q.P = q.padding = function (a) {
            return q.pt(a).pb(a).pl(a).pr(a)
        }

        q.B = q.border = function (a) {
            return q.bt(a).bb(a).bl(a).br(a)
        }

        q.bd = q.border2 = function (a, b, c) {
            if (N(a) && U(b)) {
                return q.s({dw: a})
            }
            return q.s('d', OL(a, b, c))
        }


        q.ol = q.outline = function (a) {
            return q.s('o', OL(a || 'm'))
        }
        q.bw = q.borderWidth = function (a) {
            return q.s({dw: a})
        }

        q.bs = q.borderStyle = function (a) {
            return q.s({ds: a})
        }


        q.bc = q.borderColor = function (a) {
            return q.s({dc: a})
        }

        q.f = q.font = function (a) {
            if (N(a)) {
                return q.s('fz', a)
            }
            return q.s('f', FO(a))
        }//font


        q.overflowAuto = function () {
        }

        q.cen = function () {
            return q.K('text-center')
        }

        q.ty = q.type = function (t) {
            return q.at({
                type: oO('i', t)
            })
        }//type

        q.nm = q.name = function (name) {
            return q.at({name: name})
        }


        q.hr = q.href = function (a) {
            return q.at({href: a})
        }


        q.at = q.attribute = function (a, b) {
            q.res = aa(q.e, a, b)   // get/set attr//for,name,id,val, etc...
            return q
        }


        q.v = q.V = q.value = function (a) {
            var g = G(arguments), a = g[0], v = q.q.val()
            if (U(a)) {
                if (g.N) {
                    q.q.val('')
                }
                ;
                return v
            }
            q.q.val(a)
            return q
        }//q.vx=

        q.m = q.modalToggle = function (a) {
            q.q.modal(a || 'toggle');
            return q
        }


        q.mpfd = q.multipartFormData = function () {
            return q.at({enctype: 'multipart/form-data'})
        }


        q.act = q.action = function (a) {
            return q.at({a: a || '/upl'})
        }

        q.dd = q.dropDown = function (a) {
            return q.k('dropdown-toggle').at({'data-target': 'dropdown'})
        }


        q.src = function () {
            return q.src
        }

        q.fO = q.fadeOut = function (n, f) {
            q.q.fadeOut(n, f);
            return q
        }
        q.fI = q.fadeIn = function (n, f) {
            q.q.fadeIn(n, f);
            return q
        }
        //fO=function(a){Q(a).fadeOut(b,c)}
        //fI=function(a){Q(a).fadeIn(b,c)}

        q.OI = q.fadeOutIn = function (n1, n2) {
            q.q.fadeOut(n1).fadeIn(n2 || n1);
            return q
        }
        q.sU = q.slideUp = function (n, f) {
            q.q.slideUp(n, f);
            return q
        }
        q.sD = q.slideDown = function (n, f) {
            q.q.slideDown(n, f);
            return q
        }

        q.h1 = function (a) {
            q.j({h: '100%'})
        }
        q.w1 = function (a) {
            q.j({w: '100%'})
        }
        q.wh1 = function (a) {
            q.j({h: '100%', w: '100%'})
        }

        q.animate = q.j = function (b, c) {

            if (N(b)) {
                q.q.delay(b)
                return q
            }

            b = qs(b)

            if (D(c)) {
                q.q.animate(b, c)
            }

            else {
                q.q.animate(b)
            }

            return q
        }


        q.jj = function (a, b) {
            var i = is(a),
                m = i('t') ? 'toggle'
                    : i('s') ? 'hide'
                    : i('h') ? 'show'
                    : i('sd') ? 'slideDown'
                    : i('su') ? 'slideUp'
                    : i('fo') ? 'fadeOut'
                    : i('fi') ? 'fadeIn'
                    : 0

            if (m) {
                q.q[m](b);
                return q
            }
        }

        q.ph = q.placeholder = function (a) {
            return q.at({ph: a})
        }//set placeholder


        //q.anims=[q.slU,q.slD,q.slT,q.fI,q.fO,q.fT]
        //q.anim=function(b,c){return N(c)? q.q.animate(qs(b),c*1000): q.q.animate(qs(b)) }
        /////////


        q.drg = function () {
            drg(q);
            return q
        }


        q.backgroundImage = q.bgi = function (a) {////////
            q.s('bi', _s(a, '+'));
            return q
        }

        q.da = q.data = function (a, b) {
            q.at('data-' + a, b)
        }

        //q.sp=function(a,b,c){return q.a(sp(a,b,c))}
        //q.dv=function(a,b,c,d){return q.a(dv(a,b,c,d))}

        q.ct = q.contents = function (a, b) {
            return q.q.contents(b)
        }

        //append to an element 1 or more image els

        q.i = q.image = function () {
            var g = G(arguments)
            _e(g, function (i) {
                q(im(i))
            })
            return q
        }


        q.setBackgroundImage = q.bi = function (a) {//set background image
            var u = function (a) {
                return 'url("' + src(a) + '")'
            }
            q.s({bi: u(a)})
            return q
        }

        q.bp = q.positionBackgroundImage = function (x, y) {
            var g = G(arguments), x = g[0], y = g[1]
            x = N(x) ? x : 0
            y = N(y) ? y : 0
            q.s({bp: x + 'px ' + y + 'px'})
            return q
        }

        q.fr = q.setFrame = function (n, w) {
            if (O(n)) {
                q.bp(n.n, n.w)
            }
            else {
                q.bp(n * w)
            }
            return q
        }

        q.anf = q.animateFrames = function (n, w) {
            var c = 0
            n = n || 10
            w = w || 20
            I(function () {
                q.fr(c, w)
                c = (c + 1) % n
            }, 1000)
        }


        if (O(b)) {
            q.s(b)
        }
        if (O(c)) {
            q.at(c)
        }

        if (S(d)) {
            q.H(d)
        }

        if (F(d)) {
            q.$(d)
        }

        return q
    }
    qM = function (a) {
        return $m('q', $(a))
    }
    clo = function (a) {
        return qq(qq(a).q.clone())
    }
    eq = function (a, b) {
        return $(a).eq(b)
    }
    JQANIM = function () {
        z()

        a = dva().bi('chicks').anf()

        anim = function (o) {
            o = ob(o)

            return {
                u: o.u || 'chicks',
                n: o.n || 1,
                w: o.w || 64,
                r: o.r || 60,
                c: o.c || 0,
                l: o.l || false
            }
        }


        an = function (q, a) {

            if (q.han) {
                cI(q.han)
            }

            if (a.u) {
                q.bi(a.u)
            }

            if (a.n > 1) {
                q.han = I(function () {
                        a.c++
                        if (!a.l && a.c > a.n) {
                            cI(q.han);
                            q.han = false
                        }
                        else {
                            a.c %= a.n
                        }
                        q.fr(a)
                    },
                    a.r)
            }
        }
    }
    cI = clearInterval
    qi = function (a, b) {
        var q = qq($('#' + a))
        if (S(b)) {
            eval('q.' + b)
        }
        if (O(b)) {
            q(b)
        }
        return q
    }
    clk = function (a) {
        return qi(a).$()
    }
    qk = function (a, b) {
        var q = qq($('.' + a)[0])
        if (S(b)) {
            eval("q." + b)
        }
        if (O(b)) {
            q(b)
        }
        return q
    }
    qe = function (a, f) {
        _e(
            $('.' + a),
            function (q) {
                f(qq(q))
            })
    }


    function again() {


        qq = function (e, b, c, d) {

            if (O(e)) {

                if (e.name === 'q') {
                    return e
                }
                //if(e.name==='x'){e=e.c}

                if (E(e)) {
                    e = Q(e)
                }
            }

            else {
                e = $('<' + oO('t', e || 'd') + '>' + (b || '') + '</>')
            }

            var q = function (a, b) {

                //return  _a( q.fn, arguments, q )

                return q.fn.apply(q, arguments)
            }


            q.fn = function (a, b) {
                var g = G(arguments)

                if (N(a)) {
                    return q.wh(a * 100, (b || a) * 100)
                }
                if (U(a)) {
                    return q.O()
                }
                if (P(a)) {
                    return q.s(a).at(b)
                }
                if (A(a)) {
                    q.res = _a(q.m, arguments)
                    return q
                }
                _e(g, function (a) {
                    if (S(a)) {
                        q.H(a)
                    }
                    if (O(a)) {
                        q.a(a)
                    }
                })
                return q
            }


            //the jquery object
            q.q = q.jq = Q(e)


            // the first element
            q.e = q.el = q.q[0]

            //make css

            q.s = q.css = function (a, b) {

                q.res = ss(q.q, a, b)

                return q
            }


            //call a jquery method
            q.m = q.method = qM(q.q)


            //call a function
            q.o = q.on = function () {
                _a(ee(q), arguments);
                return q
            }


//get/set a property
            q.po = function (a, b) {
                q.res = pp(q.q, a, b)
                return q
            }


            //appending / adding to stage


            q.A = q.a = q.append = function (a, b) {
                var g = G(arguments), a = g[0], b = g[1]


                var theElement = b,
                    args = g


                if (a === 2) {

                    q.q.appendTo(
                        Q(theElement || qq($('body'))))

                    if (args.p) {
                        q.positioning('static')
                    }

                    return q
                }


                if (g.n) {

                    if (U(a)) {

                        qq($('body')).prepend(q.q);
                        return q

                    }

                    if (A(a)) {
                        _.each(a, q.a(a))
                    }

                    else {

                        _.each(g,

                            function (a) {

                                if (a.ob && iSt(a.ob)) {
                                    a = a.Q
                                }

                                q.q.prepend(Q(a))
                            })
                    }

                }


                else {

                    if (U(a)) {

                        bd().q.append(q.q);
                        return q
                    }

                    if (A(a)) {
                        _e(a, q.a(a))
                    }

                    else {
                        _e(g, function (a) {
                            if (a.ob && iSt(a.ob)) {
                                a = a.Q
                            }
                            q.q.append(Q(a))
                        })
                    }
                }

                if (g.p) {
                    qq(a).p('s')
                }

                return q
            }


//prepend to
            q.p2 = q.prependTo = function (a) {
                q.q.prependTo($(a || 'body'));
                return q
            }

            // prepending
            q.pp = q.prepend = function (a) {
                if (U(a)) {
                    return q.p2()
                }
                q.q.prepend(Q(a))
                return q
            }

            //q.d=function(){return q.pp()()}


            //opacity
            q.op = q.opacity = function (a) {
                if (U(a)) {
                    return q.s('a').r
                }
                if (N(a)) {
                    q.s('a', a)
                }
                return q
            }


            //set id
            q.id = function (a) {
                return q.at({id: a})
            }

            //unbind
            q.ub = q.unbind = function (f) {
                q.q.unbind();
                return q
            }

            //hide
            q.hd = q.hide = function () {
                q.q.hide();
                return q
            }


            //show
            q.sh = q.show = function () {
                q.q.show();
                return q
            }

            //toggle
            q.tg = q.toggle = function () {
                q.q.toggle();
                return q
            }


            //empty and add new items
            q.E = q.empty = function () {
                var g = G(arguments)
                q.q.empty();
                _e(g, function (g) {
                    q(g)
                })
                return q
            }


            //turns events off
            q.off = q.F = function () {
                q.q.off();
                return q
            }


            //remove me
            q.X = q.rm = q.remove = function () {
                q.q.remove();
                return q
            }


            //remove me and my parent
            q.XX = function () {
                q.pa().X();
                return q
            } //XX=function(q){q.X()}//remove me


            //del button
            q.xb = q.delBt = function () {//x button!!!

                q.pp(
                    $div()(
                        $button.k('dropdown-toggle').at({'data-target': 'dropdown'})(
                            'x', function () {
                                q.X()
                            })

                            .k('pull-right').margin(20)
                    ))

                return q
            }


            //outer html
            q.O = function () {
                _o(q);
                return q
            }

            //class
            q.K = q.k = q.class = function (a) {
                kl(q)(a);
                return q
            }


            //color
            q.c = q.backgroundColor = function c(a, b) {
                var g = G(arguments),
                    s = q.s,
                    i = is(a)

                //if(g.n){c='X'}

                if (i(0)) {
                    return s('c', b || 'z')
                }
                if (i('*')) {
                    return q.c($r())
                }
                if (i('**')) {
                    return q.s('c', $r())
                }
                if (i('***')) {
                    return q.c($r(), $r())
                }

                if (U(b)) {
                    q.s('C', $r('c', a));
                    return q
                }
                q.s({C: a, c: b})
                return q
            }

            q.w = function (w, b) {
                if (U(w)) {
                    return q.q.width()
                }
                if (w === '+') {
                    return q.w(q.w() + b)
                }
                if (w === '*') {
                    return q.w(q.w() * b)
                }
                if (w === '%') {
                    return q.w(q.w() * b * .01)
                }
                q.q.width(w)
                //q.q.width((w<10)?w*100:w)
                return q
            }


            q.h = function (h, b) {
                if (U(h)) {
                    return q.q.height()
                }
                if (h === '+') {
                    return q.h(q.h() + b)
                }
                if (h === '*') {
                    return q.h(q.h() * b)
                }
                if (h === '%') {
                    return q.h(q.h() * b * .01)
                }
                q.q.height(h)
                //q.q.height(  (h<10)?h*100:h)
                return q
            }

            q.wh = function (a, b) {
                return q.w(a).h(b)
            }

            q.full = function () {
                q.wh(W(), H())
            }//make something full height

            q.Z = function (w, h) {
                w = w || 5;
                return q.wh(w * 100, (h || w) * 100)
            }

            q.siz = function (z, b) {
                if (U(z)) {
                    return q.ch().size()
                }
                if (z === '-') {
                    return {w: q.q.width(), h: q.q.height()}
                }
                if (z === '+') {
                    q.w(q.w() + b);
                    q.h(q.h() + b)
                }
                if (z === '*') {
                    q.w(q.w() * b);
                    q.h(q.h() * b)
                }
                if (z === '%') {
                    q.w(q.w() * b * .01);
                    q.h(q.h() * b * .01)
                }
                q.h(b || z)
                q.w(z)
                return q
            }

            q.auto = function () {
                return q.w('auto').h('auto')
            }

            q.top = q.t = function (a) {
                if (U(a)) {
                    return q.q.position().top
                }  //_i(q.pt())
                q.s('t', a)
                return q
            }


            //offset is distance from the document origin.
            //can set or get.  if pos is static, it gets changed to rel
            //use to get or set offset
            q.os = function (l, t) {
                if (U(l)) {
                    var o = q.q.offset()
                    return {t: o.top, l: o.left}
                }

                if (O(l)) {
                    q.q.offset({
                        left: l || q.os().l,
                        top: t || q.os().t
                    })
                    return q
                }

                t = N(t) ? t : l
                q.q.offset({left: l, top: t})
                return q
            }


            //offset left//q.ox=function(l){if(U(l)){return q.os().l}; return q.os(l, q.oy())}
            q.x = q.osl = function (x) {
                if (U(x)) {
                    return q.q.offset().left
                }
                return _i(x - q.x())
            }//used in drg


            //offset top//q.oy=function(t){if(U(t)){return q.os().t};return  q.os(q.ox(),t)}
            q.y = q.ost = function (y) {
                if (U(y)) {
                    return q.os().t
                }
                return _i(y - q.y())
            }//used in drg

            //get position
            q.ps = q.position = function () {
                return q.q.position()
            }


            //left
            q.left = q.l = q.px = q.positionLeft = q.psl = function (pos) {

                if (U(pos)) {

                    return q.q.position().left
                }  //_i(q.pl())

                q.s('left', pos);

                return q
            }


            //top
            q.pst = q.positionTop = function () {
                return q.ps().top
            }


            //left and top
            q.lt = q.leftTop = function (a, b) {
                b = b || a
                q.l(a).t(b)
                return q
            }


            //right
            q.r = q.right = function (a) {
                if (U(a)) {
                    return _i(q.q.right())
                }
                q.s('r', a);
                return q
            }


            //bottom
            q.bo = q.bottom = function (a) {
                if (U(a)) {
                    return _i(q.q.bottom())
                }
                q.s('b', a);
                return q
            }


            //positioning
            q.p = q.positioning = function (a, l, t) {

                if (U(a)) {
                    return ss(q, 'p')
                }

                q.s('p', a)

                if (l) {
                    q.l(l)
                }

                if (t) {
                    q.t(t)
                }

                return q
            }


            //z index
            q.z = function (a) {
                var g = G(arguments),
                    n = N(a) ? a : g.p ? 100 : g.n ? -100 : S(a) ? eval('q.z()' + a) : false
                return N(n) ? q.s('z', n) : q.s('z').res
            }//z-index


            q.dp = q.dy = q.display = function (a, l, t) {
                if (U(a)) {
                    return ss(q, 'y')
                }
                q.s('y', a);
                return q
            }//display


            q.pa = q.parent = function () {
                return qq(q.q.parent())
            }


            q.ch = q.children = function rc(a) {

                if (N(a)) {
                    return qq(rc()[a])
                }

                return q.q.children(a)

            }


            q._c = q.children2 = function () {
                return _c(q.q)
            }//children


            q.ser = q.serialize = function () {
                var g = G(arguments)
                if (g.N) {
                    return q.q.serializeArray()
                }
                return q.q.serialize()
            }


            qit = function (a, b) {
                a = a || 'result'
                var q = qi(a)
                if (q.q) {
                    if (U(b)) {
                        return q.T()
                    }
                    if (S(b)) {
                        q.T(b)
                    }
                    if (O(b)) {
                        q.T(b.ser('-'))
                    }
                    return q
                }
            }


            //shortcut for click
            //gets passed qt and then e (e.x, e.y =offset x,y)
            q.$ = function (f) {
                if (f) {
                    return q.o('$', f)
                }
                q.q.click();
                return q
            }


            //shortcut for $doubleclick
            q.$$ = function (f) {
                if (f) {
                    return q.o('$$', f)
                }
                q.q.dblclick();
                return q
            }


            //shortcut for _bind
            q.bind = function (a) {
                return _.bind(q.c[a], q.c)
            }


            q.ngModel = function (m) {
                q.at('ng-model', m)
                return q
            }
            q.ngCont = function (m) {
                q.at('ng-controller', m)
                return q
            }
            q.ngSwitch = function (m) {
                q.at('ng-switch', m)
                return q
            }
            q.ngClick = function (m) {
                q.at('ng-click', m)
                return q
            }
            q.ngRepeat = function (m) {
                q.at('ng-repeat', m)
                return q
            }
            q.ngShow = function (m) {
                q.at('ng-show', m)
                return q
            }
            q.ngIf = function (m) {
                q.at('ng-if', m)
                return q
            }
            q.ngSubmit = function (m) {
                q.at('ng-submit', m)
                return q
            }
            q.jLoad = function (a) {
                qJ(a, function (d) {
                    q(d)
                })
                return q

            }


            q.ih = q.innerHTML = function () {
                return q.q[0].innerHTML
            }

            q.oh = q.outerHTML = function () {
                return q.q[0].outerHTML
            }

            q.H = q.outerHTML2 = function (t) {
                if (t === 'e') {
                    q.res = q.q[0];
                    return q
                }
                if (t === 'o') {
                    q.res = q.outerHTML;
                    return q
                }

                if (U(t)) {
                    return q.q.html()
                }

                q.q.html(t)
                return q
            }


            q.T = q.text = function (t) {
                if (U(t)) {
                    return q.q.text()
                }
                q.q.text(t)
                return q
            }//text


            q.fe = q.forEach = function (a) {
                return q.b('fe', a)
            }

            q.feD = q.forEachData = function (a) {
                return q.fe('$data.' + a)
            }

            q.b = q.knockoutBind = function (a, b) {

                var o = []

                if (O(a)) {

                    _.each(a, function (v, k) {

                        o.push(oO('b', k) + ':' + v)

                    })

                    q.attr({'data-bind': o.join()})

                }


                else {

                    q.attr({

                        b: oO('b', a) + ':' + b

                    })
                }


                return q
            }


            q.bd = q.knockoutBind2 = function (a) {
                var g = G(arguments), a = g[0]
                if (g.p) {
                    a = 'text: ' + a
                }
                if (g.n) {
                    a = 'click: ' + a
                }
                if (g.m) {
                    a = 'value: ' + a
                }
                if (g.d) {
                    a = 'checked: ' + a
                }
                q.at({b: a})
                return q
            }


            //content editable!!! cool
            q.cE = function (a) {

                return q.at('contenteditable', a ? 'true' : 'false')

            }


            q.pt = function (a) {
                if (U(a)) {
                    return ss(q, 'gt')
                }
                ;
                q.s('gt', a);
                return q
            }
            q.pb = function (a) {
                if (U(a)) {
                    return ss(q, 'gb')
                }
                ;
                q.s('gb', a);
                return q
            }
            q.pl = function (a) {
                if (U(a)) {
                    return ss(q, 'gl')
                }
                ;
                q.s('gl', a);
                return q
            }
            q.pr = function (a) {
                if (U(a)) {
                    return ss(q, 'gr')
                }
                ;
                q.s('gr', a);
                return q
            }

            q.mt = function (a) {
                if (U(a)) {
                    return ss(q, 'mt')
                }
                ;
                return q.s('mt', a)
            }

            q.mb = function (a) {
                if (U(a)) {
                    return ss(q, 'mb')
                }
                ;
                return q.s('mb', a)
            }

            q.ml = function (a) {
                if (U(a)) {
                    return ss(q, 'ml')
                }
                ;
                return q.s('ml', a)
            }
            q.mr = function (a) {
                if (U(a)) {
                    return ss(q, 'mr')
                }
                ;
                return q.s('mr', a)
            }


            q.bt = function (a) {
                if (U(a)) {
                    return ss(q, 'bt')
                }
                ;
                q.s('bt', a);
                return q
            }
            q.bb = function (a) {
                if (U(a)) {
                    return ss(q, 'bb')
                }
                ;
                q.s('bb', a);
                return q
            }
            q.bl = function (a) {
                if (U(a)) {
                    return ss(q, 'bl')
                }
                ;
                q.s('bl', a);
                return q
            }
            q.br = function (a) {
                if (U(a)) {
                    return ss(q, 'br')
                }
                ;
                q.s('br', a);
                return q
            }

            q.M = q.margin = function (a) {
                return q.mt(a).mb(a).ml(a).mr(a)
            }

            q.mg = q.margin2 = function (a) {
                if (U(a)) {
                    return ss(q, 'g')
                }
                ;
                q.s('g', a);
                return q
            }

            q.P = q.padding = function (a) {
                return q.pt(a).pb(a).pl(a).pr(a)
            }

            q.B = q.border = function (a) {
                return q.bt(a).bb(a).bl(a).br(a)
            }

            q.bd = q.border2 = function (a, b, c) {
                if (N(a) && U(b)) {
                    return q.s({dw: a})
                }
                return q.s('d', OL(a, b, c))
            }


            q.ol = q.outline = function (a) {
                return q.s('o', OL(a || 'm'))
            }
            q.bw = q.borderWidth = function (a) {
                return q.s({dw: a})
            }

            q.bs = q.borderStyle = function (a) {
                return q.s({ds: a})
            }


            q.bc = q.borderColor = function (a) {
                return q.s({dc: a})
            }

            q.f = q.font = function (a) {
                if (N(a)) {
                    return q.s('fz', a)
                }
                return q.s('f', FO(a))
            }//font


            q.overflowAuto = function () {
            }

            q.cen = function () {
                return q.K('text-center')
            }

            q.ty = q.type = function (t) {
                return q.at({
                    type: oO('i', t)
                })
            }//type

            q.nm = q.name = function (name) {
                return q.at({name: name})
            }


            q.hr = q.href = function (a) {
                return q.at({href: a})
            }


            q.at = q.attribute = function (a, b) {
                q.res = aa(q.e, a, b)   // get/set attr//for,name,id,val, etc...
                return q
            }


            q.v = q.V = q.value = function (a) {
                var g = G(arguments), a = g[0], v = q.q.val()
                if (U(a)) {
                    if (g.N) {
                        q.q.val('')
                    }
                    ;
                    return v
                }
                q.q.val(a)
                return q
            }//q.vx=

            q.m = q.modalToggle = function (a) {
                q.q.modal(a || 'toggle');
                return q
            }


            q.mpfd = q.multipartFormData = function () {
                return q.at({enctype: 'multipart/form-data'})
            }


            q.act = q.action = function (a) {
                return q.at({a: a || '/upl'})
            }

            q.dd = q.dropDown = function (a) {
                return q.k('dropdown-toggle').at({'data-target': 'dropdown'})
            }


            q.src = function () {
                return q.src
            }

            q.fO = q.fadeOut = function (n, f) {
                q.q.fadeOut(n, f);
                return q
            }
            q.fI = q.fadeIn = function (n, f) {
                q.q.fadeIn(n, f);
                return q
            }
            //fO=function(a){Q(a).fadeOut(b,c)}
            //fI=function(a){Q(a).fadeIn(b,c)}

            q.OI = q.fadeOutIn = function (n1, n2) {
                q.q.fadeOut(n1).fadeIn(n2 || n1);
                return q
            }
            q.sU = q.slideUp = function (n, f) {
                q.q.slideUp(n, f);
                return q
            }
            q.sD = q.slideDown = function (n, f) {
                q.q.slideDown(n, f);
                return q
            }

            q.h1 = function (a) {
                q.j({h: '100%'})
            }
            q.w1 = function (a) {
                q.j({w: '100%'})
            }
            q.wh1 = function (a) {
                q.j({h: '100%', w: '100%'})
            }

            q.animate = q.j = function (b, c) {

                if (N(b)) {
                    q.q.delay(b)
                    return q
                }

                b = qs(b)

                if (D(c)) {
                    q.q.animate(b, c)
                }

                else {
                    q.q.animate(b)
                }

                return q
            }


            q.jj = function (a, b) {
                var i = is(a),
                    m = i('t') ? 'toggle'
                        : i('s') ? 'hide'
                        : i('h') ? 'show'
                        : i('sd') ? 'slideDown'
                        : i('su') ? 'slideUp'
                        : i('fo') ? 'fadeOut'
                        : i('fi') ? 'fadeIn'
                        : 0

                if (m) {
                    q.q[m](b);
                    return q
                }
            }

            q.ph = q.placeholder = function (a) {
                return q.at({ph: a})
            }//set placeholder


            //q.anims=[q.slU,q.slD,q.slT,q.fI,q.fO,q.fT]
            //q.anim=function(b,c){return N(c)? q.q.animate(qs(b),c*1000): q.q.animate(qs(b)) }
            /////////


            q.drg = function () {
                drg(q);
                return q
            }


            q.backgroundImage = q.bgi = function (a) {////////
                q.s('bi', _s(a, '+'));
                return q
            }

            q.da = q.data = function (a, b) {
                q.at('data-' + a, b)
            }

            //q.sp=function(a,b,c){return q.a(sp(a,b,c))}
            //q.dv=function(a,b,c,d){return q.a(dv(a,b,c,d))}

            q.ct = q.contents = function (a, b) {
                return q.q.contents(b)
            }

            //append to an element 1 or more image els

            q.i = q.image = function () {
                var g = G(arguments)
                _e(g, function (i) {
                    q(im(i))
                })
                return q
            }


            q.setBackgroundImage = q.bi = function (a) {//set background image
                var u = function (a) {
                    return 'url("' + src(a) + '")'
                }
                q.s({bi: u(a)})
                return q
            }

            q.bp = q.positionBackgroundImage = function (x, y) {
                var g = G(arguments), x = g[0], y = g[1]
                x = N(x) ? x : 0
                y = N(y) ? y : 0
                q.s({bp: x + 'px ' + y + 'px'})
                return q
            }

            q.fr = q.setFrame = function (n, w) {
                if (O(n)) {
                    q.bp(n.n, n.w)
                }
                else {
                    q.bp(n * w)
                }
                return q
            }

            q.anf = q.animateFrames = function (n, w) {
                var c = 0
                n = n || 10
                w = w || 20
                I(function () {
                    q.fr(c, w)
                    c = (c + 1) % n
                }, 1000)
            }


            if (O(b)) {
                q.s(b)
            }
            if (O(c)) {
                q.at(c)
            }

            if (S(d)) {
                q.H(d)
            }

            if (F(d)) {
                q.$(d)
            }

            return q
        }


        qM = function (a) {
            return $m('q', $(a))
        }

        clo = function (a) {
            return qq(qq(a).q.clone())
        }

        eq = function (a, b) {
            return $(a).eq(b)
        }


        cI = clearInterval
        qi = function (a, b) {
            var q = qq($('#' + a))
            if (S(b)) {
                eval('q.' + b)
            }
            if (O(b)) {
                q(b)
            }
            return q
        }
        clk = function (a) {
            return qi(a).$()
        }
        qk = function (a, b) {
            var q = qq($('.' + a)[0])
            if (S(b)) {
                eval("q." + b)
            }
            if (O(b)) {
                q(b)
            }
            return q
        }
        qe = function (a, f) {
            _e(
                $('.' + a),
                function (q) {
                    f(qq(q))
                })
        }

        function onceAgain() {

            qq = function (e, b, c, d) {

                if (O(e)) {

                    if (e.name === 'q') {
                        return e
                    }
                    //if(e.name==='x'){e=e.c}

                    if (E(e)) {
                        e = Q(e)
                    }
                }

                else {
                    e = $('<' + oO('t', e || 'd') + '>' + (b || '') + '</>')
                }

                var q = function (a, b) {

                    //return  _a( q.fn, arguments, q )

                    return q.fn.apply(q, arguments)
                }


                q.fn = function (a, b) {
                    var g = G(arguments)

                    if (N(a)) {
                        return q.wh(a * 100, (b || a) * 100)
                    }
                    if (U(a)) {
                        return q.O()
                    }
                    if (P(a)) {
                        return q.s(a).at(b)
                    }
                    if (A(a)) {
                        q.res = _a(q.m, arguments)
                        return q
                    }
                    _e(g, function (a) {
                        if (S(a)) {
                            q.H(a)
                        }
                        if (O(a)) {
                            q.a(a)
                        }
                    })
                    return q
                }


                //the jquery object
                q.q = q.jq = Q(e)


                // the first element
                q.e = q.el = q.q[0]

                //make css

                q.s = q.css = function (a, b) {

                    q.res = ss(q.q, a, b)

                    return q
                }


                //call a jquery method
                q.m = q.method = qM(q.q)


                //call a function
                q.o = q.on = function () {
                    _a(ee(q), arguments);
                    return q
                }


//get/set a property
                q.po = function (a, b) {
                    q.res = pp(q.q, a, b)
                    return q
                }


                //appending / adding to stage


                q.A = q.a = q.append = function (a, b) {
                    var g = G(arguments), a = g[0], b = g[1]


                    var theElement = b,
                        args = g


                    if (a === 2) {

                        q.q.appendTo(
                            Q(theElement || qq($('body'))))

                        if (args.p) {
                            q.positioning('static')
                        }

                        return q
                    }


                    if (g.n) {

                        if (U(a)) {

                            qq($('body')).prepend(q.q);
                            return q

                        }

                        if (A(a)) {
                            _.each(a, q.a(a))
                        }

                        else {

                            _.each(g,

                                function (a) {

                                    if (a.ob && iSt(a.ob)) {
                                        a = a.Q
                                    }

                                    q.q.prepend(Q(a))
                                })
                        }

                    }


                    else {

                        if (U(a)) {

                            bd().q.append(q.q);
                            return q
                        }

                        if (A(a)) {
                            _e(a, q.a(a))
                        }

                        else {
                            _e(g, function (a) {
                                if (a.ob && iSt(a.ob)) {
                                    a = a.Q
                                }
                                q.q.append(Q(a))
                            })
                        }
                    }

                    if (g.p) {
                        qq(a).p('s')
                    }

                    return q
                }


//prepend to
                q.p2 = q.prependTo = function (a) {
                    q.q.prependTo($(a || 'body'));
                    return q
                }

                // prepending
                q.pp = q.prepend = function (a) {
                    if (U(a)) {
                        return q.p2()
                    }
                    q.q.prepend(Q(a))
                    return q
                }

                //q.d=function(){return q.pp()()}


                //opacity
                q.op = q.opacity = function (a) {
                    if (U(a)) {
                        return q.s('a').r
                    }
                    if (N(a)) {
                        q.s('a', a)
                    }
                    return q
                }


                //set id
                q.id = function (a) {
                    return q.at({id: a})
                }

                //unbind
                q.ub = q.unbind = function (f) {
                    q.q.unbind();
                    return q
                }

                //hide
                q.hd = q.hide = function () {
                    q.q.hide();
                    return q
                }


                //show
                q.sh = q.show = function () {
                    q.q.show();
                    return q
                }

                //toggle
                q.tg = q.toggle = function () {
                    q.q.toggle();
                    return q
                }


                //empty and add new items
                q.E = q.empty = function () {
                    var g = G(arguments)
                    q.q.empty();
                    _e(g, function (g) {
                        q(g)
                    })
                    return q
                }


                //turns events off
                q.off = q.F = function () {
                    q.q.off();
                    return q
                }


                //remove me
                q.X = q.rm = q.remove = function () {
                    q.q.remove();
                    return q
                }


                //remove me and my parent
                q.XX = function () {
                    q.pa().X();
                    return q
                } //XX=function(q){q.X()}//remove me


                //del button
                q.xb = q.delBt = function () {//x button!!!

                    q.pp(
                        $div()(
                            $button.k('dropdown-toggle').at({'data-target': 'dropdown'})(
                                'x', function () {
                                    q.X()
                                })

                                .k('pull-right').margin(20)
                        ))

                    return q
                }


                //outer html
                q.O = function () {
                    _o(q);
                    return q
                }

                //class
                q.K = q.k = q.class = function (a) {
                    kl(q)(a);
                    return q
                }


                //color
                q.c = q.backgroundColor = function c(a, b) {
                    var g = G(arguments),
                        s = q.s,
                        i = is(a)

                    //if(g.n){c='X'}

                    if (i(0)) {
                        return s('c', b || 'z')
                    }
                    if (i('*')) {
                        return q.c($r())
                    }
                    if (i('**')) {
                        return q.s('c', $r())
                    }
                    if (i('***')) {
                        return q.c($r(), $r())
                    }

                    if (U(b)) {
                        q.s('C', $r('c', a));
                        return q
                    }
                    q.s({C: a, c: b})
                    return q
                }

                q.w = function (w, b) {
                    if (U(w)) {
                        return q.q.width()
                    }
                    if (w === '+') {
                        return q.w(q.w() + b)
                    }
                    if (w === '*') {
                        return q.w(q.w() * b)
                    }
                    if (w === '%') {
                        return q.w(q.w() * b * .01)
                    }
                    q.q.width(w)
                    //q.q.width((w<10)?w*100:w)
                    return q
                }


                q.h = function (h, b) {
                    if (U(h)) {
                        return q.q.height()
                    }
                    if (h === '+') {
                        return q.h(q.h() + b)
                    }
                    if (h === '*') {
                        return q.h(q.h() * b)
                    }
                    if (h === '%') {
                        return q.h(q.h() * b * .01)
                    }
                    q.q.height(h)
                    //q.q.height(  (h<10)?h*100:h)
                    return q
                }

                q.wh = function (a, b) {
                    return q.w(a).h(b)
                }

                q.full = function () {
                    q.wh(W(), H())
                }//make something full height

                q.Z = function (w, h) {
                    w = w || 5;
                    return q.wh(w * 100, (h || w) * 100)
                }

                q.siz = function (z, b) {
                    if (U(z)) {
                        return q.ch().size()
                    }
                    if (z === '-') {
                        return {w: q.q.width(), h: q.q.height()}
                    }
                    if (z === '+') {
                        q.w(q.w() + b);
                        q.h(q.h() + b)
                    }
                    if (z === '*') {
                        q.w(q.w() * b);
                        q.h(q.h() * b)
                    }
                    if (z === '%') {
                        q.w(q.w() * b * .01);
                        q.h(q.h() * b * .01)
                    }
                    q.h(b || z)
                    q.w(z)
                    return q
                }

                q.auto = function () {
                    return q.w('auto').h('auto')
                }

                q.top = q.t = function (a) {
                    if (U(a)) {
                        return q.q.position().top
                    }  //_i(q.pt())
                    q.s('t', a)
                    return q
                }


                //offset is distance from the document origin.
                //can set or get.  if pos is static, it gets changed to rel
                //use to get or set offset
                q.os = function (l, t) {
                    if (U(l)) {
                        var o = q.q.offset()
                        return {t: o.top, l: o.left}
                    }

                    if (O(l)) {
                        q.q.offset({
                            left: l || q.os().l,
                            top: t || q.os().t
                        })
                        return q
                    }

                    t = N(t) ? t : l
                    q.q.offset({left: l, top: t})
                    return q
                }


                //offset left//q.ox=function(l){if(U(l)){return q.os().l}; return q.os(l, q.oy())}
                q.x = q.osl = function (x) {
                    if (U(x)) {
                        return q.q.offset().left
                    }
                    return _i(x - q.x())
                }//used in drg


                //offset top//q.oy=function(t){if(U(t)){return q.os().t};return  q.os(q.ox(),t)}
                q.y = q.ost = function (y) {
                    if (U(y)) {
                        return q.os().t
                    }
                    return _i(y - q.y())
                }//used in drg

                //get position
                q.ps = q.position = function () {
                    return q.q.position()
                }


                //left
                q.left = q.l = q.px = q.positionLeft = q.psl = function (pos) {

                    if (U(pos)) {

                        return q.q.position().left
                    }  //_i(q.pl())

                    q.s('left', pos);

                    return q
                }


                //top
                q.pst = q.positionTop = function () {
                    return q.ps().top
                }


                //left and top
                q.lt = q.leftTop = function (a, b) {
                    b = b || a
                    q.l(a).t(b)
                    return q
                }


                //right
                q.r = q.right = function (a) {
                    if (U(a)) {
                        return _i(q.q.right())
                    }
                    q.s('r', a);
                    return q
                }


                //bottom
                q.bo = q.bottom = function (a) {
                    if (U(a)) {
                        return _i(q.q.bottom())
                    }
                    q.s('b', a);
                    return q
                }


                //positioning
                q.p = q.positioning = function (a, l, t) {

                    if (U(a)) {
                        return ss(q, 'p')
                    }

                    q.s('p', a)

                    if (l) {
                        q.l(l)
                    }

                    if (t) {
                        q.t(t)
                    }

                    return q
                }


                //z index
                q.z = function (a) {
                    var g = G(arguments),
                        n = N(a) ? a : g.p ? 100 : g.n ? -100 : S(a) ? eval('q.z()' + a) : false
                    return N(n) ? q.s('z', n) : q.s('z').res
                }//z-index


                q.dp = q.dy = q.display = function (a, l, t) {
                    if (U(a)) {
                        return ss(q, 'y')
                    }
                    q.s('y', a);
                    return q
                }//display


                q.pa = q.parent = function () {
                    return qq(q.q.parent())
                }


                q.ch = q.children = function rc(a) {

                    if (N(a)) {
                        return qq(rc()[a])
                    }

                    return q.q.children(a)

                }


                q._c = q.children2 = function () {
                    return _c(q.q)
                }//children


                q.ser = q.serialize = function () {
                    var g = G(arguments)
                    if (g.N) {
                        return q.q.serializeArray()
                    }
                    return q.q.serialize()
                }


                qit = function (a, b) {
                    a = a || 'result'
                    var q = qi(a)
                    if (q.q) {
                        if (U(b)) {
                            return q.T()
                        }
                        if (S(b)) {
                            q.T(b)
                        }
                        if (O(b)) {
                            q.T(b.ser('-'))
                        }
                        return q
                    }
                }


                //shortcut for click
                //gets passed qt and then e (e.x, e.y =offset x,y)
                q.$ = function (f) {
                    if (f) {
                        return q.o('$', f)
                    }
                    q.q.click();
                    return q
                }


                //shortcut for $doubleclick
                q.$$ = function (f) {
                    if (f) {
                        return q.o('$$', f)
                    }
                    q.q.dblclick();
                    return q
                }


                //shortcut for _bind
                q.bind = function (a) {
                    return _.bind(q.c[a], q.c)
                }


                q.ngModel = function (m) {
                    q.at('ng-model', m)
                    return q
                }
                q.ngCont = function (m) {
                    q.at('ng-controller', m)
                    return q
                }
                q.ngSwitch = function (m) {
                    q.at('ng-switch', m)
                    return q
                }
                q.ngClick = function (m) {
                    q.at('ng-click', m)
                    return q
                }
                q.ngRepeat = function (m) {
                    q.at('ng-repeat', m)
                    return q
                }
                q.ngShow = function (m) {
                    q.at('ng-show', m)
                    return q
                }
                q.ngIf = function (m) {
                    q.at('ng-if', m)
                    return q
                }
                q.ngSubmit = function (m) {
                    q.at('ng-submit', m)
                    return q
                }
                q.jLoad = function (a) {
                    qJ(a, function (d) {
                        q(d)
                    })
                    return q

                }


                q.ih = q.innerHTML = function () {
                    return q.q[0].innerHTML
                }

                q.oh = q.outerHTML = function () {
                    return q.q[0].outerHTML
                }

                q.H = q.outerHTML2 = function (t) {
                    if (t === 'e') {
                        q.res = q.q[0];
                        return q
                    }
                    if (t === 'o') {
                        q.res = q.outerHTML;
                        return q
                    }

                    if (U(t)) {
                        return q.q.html()
                    }

                    q.q.html(t)
                    return q
                }


                q.T = q.text = function (t) {
                    if (U(t)) {
                        return q.q.text()
                    }
                    q.q.text(t)
                    return q
                }//text


                q.fe = q.forEach = function (a) {
                    return q.b('fe', a)
                }

                q.feD = q.forEachData = function (a) {
                    return q.fe('$data.' + a)
                }

                q.b = q.knockoutBind = function (a, b) {

                    var o = []

                    if (O(a)) {

                        _.each(a, function (v, k) {

                            o.push(oO('b', k) + ':' + v)

                        })

                        q.attr({'data-bind': o.join()})

                    }


                    else {

                        q.attr({

                            b: oO('b', a) + ':' + b

                        })
                    }


                    return q
                }


                q.bd = q.knockoutBind2 = function (a) {
                    var g = G(arguments), a = g[0]
                    if (g.p) {
                        a = 'text: ' + a
                    }
                    if (g.n) {
                        a = 'click: ' + a
                    }
                    if (g.m) {
                        a = 'value: ' + a
                    }
                    if (g.d) {
                        a = 'checked: ' + a
                    }
                    q.at({b: a})
                    return q
                }


                //content editable!!! cool
                q.cE = function (a) {

                    return q.at('contenteditable', a ? 'true' : 'false')

                }


                q.pt = function (a) {
                    if (U(a)) {
                        return ss(q, 'gt')
                    }
                    ;
                    q.s('gt', a);
                    return q
                }
                q.pb = function (a) {
                    if (U(a)) {
                        return ss(q, 'gb')
                    }
                    ;
                    q.s('gb', a);
                    return q
                }
                q.pl = function (a) {
                    if (U(a)) {
                        return ss(q, 'gl')
                    }
                    ;
                    q.s('gl', a);
                    return q
                }
                q.pr = function (a) {
                    if (U(a)) {
                        return ss(q, 'gr')
                    }
                    ;
                    q.s('gr', a);
                    return q
                }

                q.mt = function (a) {
                    if (U(a)) {
                        return ss(q, 'mt')
                    }
                    ;
                    return q.s('mt', a)
                }

                q.mb = function (a) {
                    if (U(a)) {
                        return ss(q, 'mb')
                    }
                    ;
                    return q.s('mb', a)
                }

                q.ml = function (a) {
                    if (U(a)) {
                        return ss(q, 'ml')
                    }
                    ;
                    return q.s('ml', a)
                }
                q.mr = function (a) {
                    if (U(a)) {
                        return ss(q, 'mr')
                    }
                    ;
                    return q.s('mr', a)
                }


                q.bt = function (a) {
                    if (U(a)) {
                        return ss(q, 'bt')
                    }
                    ;
                    q.s('bt', a);
                    return q
                }
                q.bb = function (a) {
                    if (U(a)) {
                        return ss(q, 'bb')
                    }
                    ;
                    q.s('bb', a);
                    return q
                }
                q.bl = function (a) {
                    if (U(a)) {
                        return ss(q, 'bl')
                    }
                    ;
                    q.s('bl', a);
                    return q
                }
                q.br = function (a) {
                    if (U(a)) {
                        return ss(q, 'br')
                    }
                    ;
                    q.s('br', a);
                    return q
                }

                q.M = q.margin = function (a) {
                    return q.mt(a).mb(a).ml(a).mr(a)
                }

                q.mg = q.margin2 = function (a) {
                    if (U(a)) {
                        return ss(q, 'g')
                    }
                    ;
                    q.s('g', a);
                    return q
                }

                q.P = q.padding = function (a) {
                    return q.pt(a).pb(a).pl(a).pr(a)
                }

                q.B = q.border = function (a) {
                    return q.bt(a).bb(a).bl(a).br(a)
                }

                q.bd = q.border2 = function (a, b, c) {
                    if (N(a) && U(b)) {
                        return q.s({dw: a})
                    }
                    return q.s('d', OL(a, b, c))
                }


                q.ol = q.outline = function (a) {
                    return q.s('o', OL(a || 'm'))
                }
                q.bw = q.borderWidth = function (a) {
                    return q.s({dw: a})
                }

                q.bs = q.borderStyle = function (a) {
                    return q.s({ds: a})
                }


                q.bc = q.borderColor = function (a) {
                    return q.s({dc: a})
                }

                q.f = q.font = function (a) {
                    if (N(a)) {
                        return q.s('fz', a)
                    }
                    return q.s('f', FO(a))
                }//font


                q.overflowAuto = function () {
                }

                q.cen = function () {
                    return q.K('text-center')
                }

                q.ty = q.type = function (t) {
                    return q.at({
                        type: oO('i', t)
                    })
                }//type

                q.nm = q.name = function (name) {
                    return q.at({name: name})
                }


                q.hr = q.href = function (a) {
                    return q.at({href: a})
                }


                q.at = q.attribute = function (a, b) {
                    q.res = aa(q.e, a, b)   // get/set attr//for,name,id,val, etc...
                    return q
                }


                q.v = q.V = q.value = function (a) {
                    var g = G(arguments), a = g[0], v = q.q.val()
                    if (U(a)) {
                        if (g.N) {
                            q.q.val('')
                        }
                        ;
                        return v
                    }
                    q.q.val(a)
                    return q
                }//q.vx=

                q.m = q.modalToggle = function (a) {
                    q.q.modal(a || 'toggle');
                    return q
                }


                q.mpfd = q.multipartFormData = function () {
                    return q.at({enctype: 'multipart/form-data'})
                }


                q.act = q.action = function (a) {
                    return q.at({a: a || '/upl'})
                }

                q.dd = q.dropDown = function (a) {
                    return q.k('dropdown-toggle').at({'data-target': 'dropdown'})
                }


                q.src = function () {
                    return q.src
                }

                q.fO = q.fadeOut = function (n, f) {
                    q.q.fadeOut(n, f);
                    return q
                }
                q.fI = q.fadeIn = function (n, f) {
                    q.q.fadeIn(n, f);
                    return q
                }
                //fO=function(a){Q(a).fadeOut(b,c)}
                //fI=function(a){Q(a).fadeIn(b,c)}

                q.OI = q.fadeOutIn = function (n1, n2) {
                    q.q.fadeOut(n1).fadeIn(n2 || n1);
                    return q
                }
                q.sU = q.slideUp = function (n, f) {
                    q.q.slideUp(n, f);
                    return q
                }
                q.sD = q.slideDown = function (n, f) {
                    q.q.slideDown(n, f);
                    return q
                }

                q.h1 = function (a) {
                    q.j({h: '100%'})
                }
                q.w1 = function (a) {
                    q.j({w: '100%'})
                }
                q.wh1 = function (a) {
                    q.j({h: '100%', w: '100%'})
                }

                q.animate = q.j = function (b, c) {

                    if (N(b)) {
                        q.q.delay(b)
                        return q
                    }

                    b = qs(b)

                    if (D(c)) {
                        q.q.animate(b, c)
                    }

                    else {
                        q.q.animate(b)
                    }

                    return q
                }


                q.jj = function (a, b) {
                    var i = is(a),
                        m = i('t') ? 'toggle'
                            : i('s') ? 'hide'
                            : i('h') ? 'show'
                            : i('sd') ? 'slideDown'
                            : i('su') ? 'slideUp'
                            : i('fo') ? 'fadeOut'
                            : i('fi') ? 'fadeIn'
                            : 0

                    if (m) {
                        q.q[m](b);
                        return q
                    }
                }

                q.ph = q.placeholder = function (a) {
                    return q.at({ph: a})
                }//set placeholder


                //q.anims=[q.slU,q.slD,q.slT,q.fI,q.fO,q.fT]
                //q.anim=function(b,c){return N(c)? q.q.animate(qs(b),c*1000): q.q.animate(qs(b)) }
                /////////


                q.drg = function () {
                    drg(q);
                    return q
                }


                q.backgroundImage = q.bgi = function (a) {////////
                    q.s('bi', _s(a, '+'));
                    return q
                }

                q.da = q.data = function (a, b) {
                    q.at('data-' + a, b)
                }

                //q.sp=function(a,b,c){return q.a(sp(a,b,c))}
                //q.dv=function(a,b,c,d){return q.a(dv(a,b,c,d))}

                q.ct = q.contents = function (a, b) {
                    return q.q.contents(b)
                }

                //append to an element 1 or more image els

                q.i = q.image = function () {
                    var g = G(arguments)
                    _e(g, function (i) {
                        q(im(i))
                    })
                    return q
                }


                q.setBackgroundImage = q.bi = function (a) {//set background image
                    var u = function (a) {
                        return 'url("' + src(a) + '")'
                    }
                    q.s({bi: u(a)})
                    return q
                }

                q.bp = q.positionBackgroundImage = function (x, y) {
                    var g = G(arguments), x = g[0], y = g[1]
                    x = N(x) ? x : 0
                    y = N(y) ? y : 0
                    q.s({bp: x + 'px ' + y + 'px'})
                    return q
                }

                q.fr = q.setFrame = function (n, w) {
                    if (O(n)) {
                        q.bp(n.n, n.w)
                    }
                    else {
                        q.bp(n * w)
                    }
                    return q
                }

                q.anf = q.animateFrames = function (n, w) {
                    var c = 0
                    n = n || 10
                    w = w || 20
                    I(function () {
                        q.fr(c, w)
                        c = (c + 1) % n
                    }, 1000)
                }


                if (O(b)) {
                    q.s(b)
                }
                if (O(c)) {
                    q.at(c)
                }

                if (S(d)) {
                    q.H(d)
                }

                if (F(d)) {
                    q.$(d)
                }

                return q
            }


            qM = function (a) {
                return $m('q', $(a))
            }

            clo = function (a) {
                return qq(qq(a).q.clone())
            }

            eq = function (a, b) {
                return $(a).eq(b)
            }


            cI = clearInterval
            qi = function (a, b) {
                var q = qq($('#' + a))
                if (S(b)) {
                    eval('q.' + b)
                }
                if (O(b)) {
                    q(b)
                }
                return q
            }
            clk = function (a) {
                return qi(a).$()
            }
            qk = function (a, b) {
                var q = qq($('.' + a)[0])
                if (S(b)) {
                    eval("q." + b)
                }
                if (O(b)) {
                    q(b)
                }
                return q
            }
            qe = function (a, f) {
                _e(
                    $('.' + a),
                    function (q) {
                        f(qq(q))
                    })
            }


        }


    }
}
body=function(){
    $.iBE=$.isBodyElement = function (e) {     e = $(e)[0];
        return O(e) && uC(e.tagName) == 'BODY'}

    bd=function(){var bd= $('body')
        return bd}

    $.dc=function(){var dc
        dc = $(this.document)
        return dc
    }

    $.bd=function(){var dc
        bd = $('body')
        return bd
    }
    $.dcH=function(a){
        $(a).H( $.dc().H() )
    }
    $.dO=function(a,b,c){//$.dL=$.dR=
        $.dc().on(oE(a),b,c)
    }

    $.c$=function(c){
        $.bd().C(c||$r())}
};
scripts=function(){

    $.scr=function(scr, fn){return $.getScript(scr, fn)}
    $.getMultiScripts = function(arr, path) {
        var _arr = $.map(arr, function(scr) {return $.getScript( (path||"") + scr )})

        //_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
        return $.when.apply($, _arr)
    }
    SCRIPTS = _.map([
        "socket.io/socket.io","string", 'bb','bbmn', 'ko','mel','gq', 'objects', 'defaultMug',  'spriteSheets',
        'core', 'jqueryplugins', 'html', 'boot','ui' ,'can','sys',  'images', 'event','socket', 'ranky',  'routeTests', 'nav', 'api', 'j3', 'display',  'animate','imagine','work','tween', 'universe', 'create',  'easel', 'displayObject',  'shape', 'text', 'mobile','animation','sprites', 'bitmap', 'toolkit', 'stage', 'filt', 'draw', 'solve','playgame','users','share','chat' , 'messages', 'knock', 'bbtemps','backbone1','people','mar', 'backbone', 'angu'

        // ,'melon','gquery','ph','phaser0','phaser','ninja', 'ph2','bx','b2dbasics','b2dutils', 'invaders','three', 'iso', 'boxWorld','boxWorldMore','walls', 'makeworld', 'b2dSensors','playerWorld', 'boxRev','weld','prism','coll','gamey','pong','easelbox','joints','wheel',
        // 'emitter','p2fiddle','ragdoll','p2constraints','unigame',
        //  'tilemapping','launcher','fullgames','p2physics', 'controls','orbs',
        //  'shooter','boxBody','talkjs','mario','squares','edges','boxgame','boxDebug','boxFixt', 'boxShapes','player','pinball', 'examples'

    ],  function(js){return "/" + js + ".js"})
// _.each(SCRIPTS, function(scr){$.scr(scr)})
    /*
     dfr = $.getMultiScripts(SCRIPTS)
     dfr.done(function(){alert('done')})
     .always(function(){
     alert('always')
     $.scr('app')
     })
     .fail(function(){alert('fail')})
     */
};scripts()
keyy=function(){
    $.sp=$.space = function (fn) {
        return $.kD('space', fn)
    }

}
muse=function(){

    $.tap=function(fn){$('body').on('keydown mousedown', fn);return $}

};
dimen=function(){
    screen =function(a){var s=screen

        if(a){return {w:s.width,       h:s.height,
            aw:s.availWidth,  ah:s.availHeight,
            at:s.availTop,    al:s.availLeft}}
        var o={w:W(),h:H()}
        o.c=o.w+', '+o.h,o.t='screen size: '+ o.c
        return o


    }

    wds=function(){
        _.iWd=  function(a){//Wd=
            if(O(a)){if( s$(a).contains('Window') ||
                s$(a[0]).contains('Window')){
                return window}}
        }
        $.rl=$.reload=function(){window.location=window.location}

        wnd=function(a){
            var g=G(arguments),a=g[0]
            if(g.n){return a.close()}
            return $w.open()
        }
        makeAllExtLinksOpenInNewWindows=function(){
            $("a[href^='http://']").attr('target','_blank')}
        accessParentFrame=function(){
            frames[0].parent===$w}
        accessChildFrame=function(){
            frames[0].window.location.reload}
        accessTopFrame=function(){
            $w.frames[0].window.top===$w.top}
        accessFrameByName=function(f){$w.frames[f]===$w.frames[0].location.reload}
        open=function(c){$w.open(_S(c), 'new_window','width=310,height=30')}

    };wds()

    $.os=function(q){ return $(  C(q)?C(q):q  || 'body' ).os() }
    $.osl=function(el){return $.os(el).left }
    $.ost=function(el){return $.os(el).top }
    $.osP=function(a){return O(a) && a.offsetParent}
    $.fn.osP=function(){return this.offsetParent} // not a fn?
    $.osT=function(a){return O(a) && a.offsetTop}
    $.osL=function(a){return O(a) && a.offsetLeft}
    $.cW=function(){return $.bd().clientWidth}
    $.cH=function(){return $.bd().clientHeight}
};
json=function(){

    _.jS=function(a,b,c){return S(a)? $.Gj(a,b,c) : JSON.stringify(a)}
    _.jP=function(a,b,c){return  S(a)?JSON.parse(a,b) :$(a).prepend(b,c)}


    // jQuery('form').serializeJSON()
    $.fn.serializeJSON = function (options) {
        var serializedObject, formAsArray, keys, value, f, opts;


        f = $.serializeJSON;

        formAsArray = this.serializeArray(); // array of objects {name, value}

        opts = f.optsWithDefaults(options); // calculate values for options {parseNumbers, parseBoolens, parseNulls}

        serializedObject = {};


        $.each(formAsArray, function (i, input) {
            keys = f.splitInputNameIntoKeysArray(input.name); // "some[deep][key]" => ['some', 'deep', 'key']
            value = f.parseValue(input.value, opts); // string, number, boolean or null
            if (opts.parseWithFunction) value = opts.parseWithFunction(value); // allow for custom parsing
            f.deepSet(serializedObject, keys, value, opts);

        })


        return serializedObject
    }
// Use $.serializeJSON as namespace for the auxiliar functions
// and to define defaults
    $.serializeJSON = {
        defaultOptions: {
            parseNumbers: false, // convert values like "1", "-2.33" to 1, -2.33
            parseBooleans: false, // convert "true", "false" to true, false
            parseNulls: false, // convert "null" to null
            parseAll: false, // all of the above
            parseWithFunction: null, // to use custom parser, use a function like: function (val) => parsed_val
            useIntKeysAsArrayIndex: false // name="foo[2]" value="v" => {foo: [null, null, "v"]}, instead of {foo: ["2": "v"]}
        },

// Merge options with defaults to get {parseNumbers, parseBoolens, parseNulls, useIntKeysAsArrayIndex}
        optsWithDefaults: function (options) {
            var f, parseAll;
            if (options == null) options = {}; // arg default value = {}
            f = $.serializeJSON;
            parseAll = f.optWithDefaults('parseAll', options);
            return {
                parseNumbers: parseAll || f.optWithDefaults('parseNumbers', options),
                parseBooleans: parseAll || f.optWithDefaults('parseBooleans', options),
                parseNulls: parseAll || f.optWithDefaults('parseNulls', options),
                parseWithFunction: f.optWithDefaults('parseWithFunction', options),
                useIntKeysAsArrayIndex: f.optWithDefaults('useIntKeysAsArrayIndex', options)
            }
        },
        optWithDefaults: function (key, options) {
            return (options[key] !== false) && (options[key] || $.serializeJSON.defaultOptions[key]);
        },

// Convert the string to a number, boolean or null, depending on the enable option and the string format.

        parseValue: function (str, opts) {
            var value, f;
            f = $.serializeJSON;
            if (opts.parseNumbers && f.isNumeric(str)) return Number(str); // number
            if (opts.parseBooleans && (str === "true" || str === "false")) return str === "true"; // boolean
            if (opts.parseNulls && str == "null") return null; // null
            return str; // otherwise, keep same string
        },

        isObject: function (obj) {return obj === Object(obj)}, // is this variable an object?
        isUndefined: function (obj) {return obj === void 0}, // safe check for undefined values
        isValidArrayIndex: function (val) {return /^[0-9]+$/.test(String(val))}, // 1,2,3,4 ... are valid array indexes
        isNumeric: function (obj) {return obj - parseFloat(obj) >= 0}, // taken from jQuery.isNumeric implementation. Not using jQuery.isNumeric to support old jQuery and Zepto versions
// Split the input name in programatically readable keys
// "foo" => ['foo']
// "[foo]" => ['foo']
// "foo[inn][bar]" => ['foo', 'inn', 'bar']
// "foo[inn][arr][0]" => ['foo', 'inn', 'arr', '0']
// "arr[][val]" => ['arr', '', 'val']
        splitInputNameIntoKeysArray: function (name) {
            var keys, last, f;
            f = $.serializeJSON;
            if (f.isUndefined(name)) {
                throw new Error("ArgumentError: param 'name' expected to be a string, found undefined");
            }

            keys = $.map(name.split('['), function (key) {
                last = key[key.length - 1];
                return last === ']' ? key.substring(0, key.length - 1) : key;
            });

            if (keys[0] === '') {
                keys.shift();
            } // "[foo][inn]" should be same as "foo[inn]"
            return keys;

        },
// Set a value in an object or array, using multiple keys to set in a nested object or array:
//
// deepSet(obj, ['foo'], v) // obj['foo'] = v
// deepSet(obj, ['foo', 'inn'], v) // obj['foo']['inn'] = v // Create the inner obj['foo'] object, if needed
// deepSet(obj, ['foo', 'inn', '123'], v) // obj['foo']['arr']['123'] = v //
//
// deepSet(obj, ['0'], v) // obj['0'] = v
// deepSet(arr, ['0'], v, {useIntKeysAsArrayIndex: true}) // arr[0] = v
// deepSet(arr, [''], v) // arr.push(v)
// deepSet(obj, ['arr', ''], v) // obj['arr'].push(v)
//
// arr = [];
// deepSet(arr, ['', v] // arr => [v]
// deepSet(arr, ['', 'foo'], v) // arr => [v, {foo: v}]
// deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}]
// deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}, {bar: v}]
//
        deepSet: function (o, keys, value, opts) {
            var key, nextKey, tail, lastIdx, lastVal, f;
            if (opts == null) opts = {};
            f = $.serializeJSON;
            if (f.isUndefined(o)) {
                throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined");
            }
            if (!keys || keys.length === 0) {
                throw new Error("ArgumentError: param 'keys' expected to be an array with least one element");
            }
            key = keys[0];
// Only one key, then it's not a deepSet, just assign the value.
            if (keys.length === 1) {
                if (key === '') {
                    o.push(value); // '' is used to push values into the array (assume o is an array)
                } else {
                    o[key] = value; // other keys can be used as object keys or array indexes
                }
// With more keys is a deepSet. Apply recursively.
            } else {
                nextKey = keys[1];
// '' is used to push values into the array,
// with nextKey, set the value into the same object, in object[nextKey].
// Covers the case of ['', 'foo'] and ['', 'var'] to push the object {foo, var}, and the case of nested arrays.
                if (key === '') {
                    lastIdx = o.length - 1; // asume o is array
                    lastVal = o[lastIdx];
                    if (f.isObject(lastVal) && (f.isUndefined(lastVal[nextKey]) || keys.length > 2)) { // if nextKey is not present in the last object element, or there are more keys to deep set
                        key = lastIdx; // then set the new value in the same object element
                    } else {
                        key = lastIdx + 1; // otherwise, point to set the next index in the array
                    }
                }
// o[key] defaults to object or array, depending if nextKey is an array index (int or '') or an object key (string)
                if (f.isUndefined(o[key])) {
                    if (nextKey === '') { // '' is used to push values into the array.
                        o[key] = []
                    } else if (opts.useIntKeysAsArrayIndex && f.isValidArrayIndex(nextKey)) { // if 1, 2, 3 ... then use an array, where nextKey is the index
                        o[key] = []
                    } else { // for anything else, use an object, where nextKey is going to be the attribute name
                        o[key] = {}
                    }

                }
// Recursively set the inner object
                tail = keys.slice(1)
                f.deepSet(o[key], tail, value, opts)
            }
        }
    }


};json()
T$=C$.Ticker;
_.$Id=function(str){
    str = str.replace('$', '#')
    str = str.replace('_', '.')
    return str
}
$.x= $.E=z=$.z=$.show=function(c,t){var g=G(arguments)
    $('body').empty()
    bd= $.bd()
    if(g.O_){

        $CSS(g.f)
        if(g.s){$.h1(g.s);$.hr().A()}
        bd.C($r())
        return $}

    if(c){bd.C(c)} else {bd.C($r())}
    if(t){bd.A($.h1(t))}
    if(g.p){bd.A($.hr())}
    return $
}
$.h=  function(){var g=G(arguments),o
    bd= $.bd()
    bd.empty()
    bd.C($r())
    o= g.S_? {t:g.f, s: g.s}: {s: g.f}
    if(o.s){$CSS(o.s)}
    if(o.t){$.h1(o.t);$.hr().A()}
    return $
}
$t = function(a,b){if(b2d.test){
    var g=G(arguments), a=g[0], b=g[1],str
    if(D(b)){ str='||'
        _.e(g, function(s){str+=  ' '  + s.toString() + ' |'})
        str += '|'}
    else {str = a.toString()}
    $l(str)}
    return a
}
oO.V =  function(a){return _.values( S(a)? oO(a): a)}
$.oR= onReady =_k = function(a){return O(a) && a.complete}
$.ld=function(a,b){$(a).load(b);
    return a
}
$.ht=function(a){var ht=$('html')
    if(U(a)){return ht}
}
$.wh =function(a,b){return  D(b)?a.which==b:  a.which}
_.plOb=function(a){return O(a)&&!_.isFunction(a)&&!A(a)&&!(E(a))}
$.PS=function(a,b,c){$(a).parents(b,c)}
_.px=function(){return _.nN(a)?a+'px' :a}
_.c=function(c,orC){if(c=='*'){c=$r()}; return oO('c',c||orC)}
$.tSrc=$.tDu=function(s){
    return  S(s)?sJ:tU(s)? tU(s)
        :s.u? s.u():iI(s)? s.src
        : s.image?s.image.src:0} //s/c/C/i/b->s sync
$.XML=function(){return new XMLHttpRequest()}
$.col = function (a,b){var g=G(arguments),
    o=O(a)? {q:g[0], c:g[1]} : {c:g[0]}
    o.q= o.q || $.bd()
    o.c = o.c? oO('c', o.c) : $r()
    return   $.ss(o.q,'C', o.c)
}
$.at= $.aa=$.attrs = function aa(q,b,c){// aa=

    q=Q(q);
    var  att=function(q,b,c){q=Q(q);
        if(U(c)){return q.attr(oO('a',b))}
        return q.attr(oO('a',b),$o(b,c,'R'))};
    return  U(b)? _p(aa,q)
        :A(b)? _r(b,function(m,k){
        return _s(m,k,aa(q,k))},{})
        :O(b)? $p('a',q,b,att)
        :att(q,b,c)
}
$.pp=$.props = function pp(q,b,c){// pp=
    q=Q(q);
    var rop=function(q,b,c){
        q=Q(q);
        if(U(c)){return q.prop( oO('o', b) )}
        return q.prop(oO('o',b),
            $o(b,c,'R'))};
    return U(b)? _p($.props,q)
        :A(b)? _r(b,function(m,k){
        return _s(m,k,HTML5.props(q,k))},{})
        :O(b)? $p('o',q,b,rop)
        :rop(q,b,c);
    //ex:  val=function(type, key){return HTML5.props(type,'v',key)}
    //ex:  typ=function(type, key){return HTML5.props(type,'t',key)}
}  //changed p -> o (oO)
$.K= $.class =  function(q){q=qq(q);
    return function kl(k,j){
        var g=G(arguments);
        if(U(k)){return q.at('k')}
        if(g.p){return q.q.hasClass( oO('k',k) )}
        if(k==='-'){q.q.removeClass( oO('k',j) )}
        else if(g.n){q.at('k', oO('k',k) )  }
        else {_.e(_S(k,' '),function(k){
            q.q.addClass (oO('k',k))})}
        $l(kl());
        return kl}
}
$.word = function (t, c1, c2) {return $.sp(t).C(c1, c2).A().dg()}
E=function E(a,b,c){
    if(O(a)){
        a = O(a.e)? a.e :O(a.c)? a.c :a
        a=$(a)[0]
        if ( _.isElement(a) ){return a}
    }
}wQ=function(){
    Qx=function Q(a){
        if(!_.isObject(a)){return}
        if(s$(a.toString()).contains('Window')||a[0]
            && s$( a[0].toString()).contains('Window')){
            return $(window)}
        return a.name === 'q'? Q(a.q)
            :E(a)? $(E(a))
            :0
    }
    dom=function(){

        //outerH
        H=function(a){var oH=function(a){
            if(O(a=a||$(window))){return Q(a).outerHeight()}}
            a=a||$(window);return N(a)? W()/a:oH(Q(a))
        }
//innerWidth
        iW = function(a){if(O(a=a||$$w)){return Q(a).innerWidth()}}
//innerHeight
        iH = function(a){
            if(O(a=a||$$w)){
                return Q(a).innerHeight()
            }
        }
        //_.tg=function(a){O(a)?(a.target? a.target: Q(a)[0]) :a}
        Wx=function(a){var g=G(arguments),
            oW=function(a){
                if(O(a=a||$(window))){return Q(a).outerWidth()
                }}
            return N(a)? W()/a: oW(Q(a))
        }


    };dom()

};wQ()
qx = function(a){return xx(qi(a))}
qiv=function(a){return qi(a).v()}
Yano.func = function(){$('body').C('*')}
Yano.interval = 1000
Yano.intervalID = null
Yano.toggleFunc = function self(func, interval){
    //when you call this straight:
//it checks if a Y-func is currently running (by seeing if Y.intervalID is set)
//if it is, it clears the Y-func.. (and then unsets the Y.intervalID)
// if func not running, it does setInterval, saving the returned # as Y.intervalID
// if you pass in a neg, it will only toggle(turn) off
// if you pass in a pos, it will only toggle(turn) on

    var args = G(arguments),
        func = args[0],
        interval = args[1]


    if(Yano.intervalID){if(args.P){
        clearInterval(Yano.intervalID)
        Yano.intervalID=null
    }}
    else{
        if(args.N){
            Yano.intervalID = setInterval(Yano.func, Yano.interval)
        }}
} //rat
Yano.setToggleFunc = function (func, interval){

    if(func){Yano.intervalFunc = func}
    if(interval){Yano.interval =  interval}

    Yano.setIntervalID = setInterval(Yano.intervalFunc,  Yano.interval)
    return Yano.toggleFunc
}
ddd=function(){return (d= $.d().C('y').Z().a())}
ccc=function(){return (c=$b($c()).dg())}
$.fA=function(a){return function(){alert(a)}}
$.fL=function(a){return function(){$l(a)}}

function fqFn(){

    $.fn.slD= $.fn.slideDown
    $.fn.slU= $.fn.slideUp

    $.fn.a2Lb=function(t){
        t=t||'label:'; return this.a2($.lb(t))
    }

    $.fn.rm=$.fn.xx=function(){var e=this

        e.remove()

        return e}
    $.fn.P1 = function(pos,x,y){
        if( U(pos) ){ return this.css('position') }
        this.css('position', oO('p',pos))

        if(N(x)){this.X(x)}
        if(y){this.Y(y)}
        return this}
    $.fn.P = function(pos,x,y){var e=this,g=G(arguments)
        if(g.u ){ return e.css('position') }
        e.css('position', oO('p', pos))
        if(N(g.s)){e.X(g.s)}
        if(g.t){e.Y(g.t)}
        return e}
    $.fn.ab=  $.fn.abs=function(x,y){var e=this

        return e.P('a',x,y)

    }

    $.fn.xK= $.fn.removeClass
    $.fn.oH=$.fn.outerHeight


    $.wn=function(){return $(window)}

    $.fn.iA=$.fn.insertAfter
    $.fn.s= $.fn.css
    $.fn.N= $.fn.next


    $.fn.hr=function(href){
        this.attr({href: href})
        return this
    }

    $.fn.isLi= $.fn.iLi=function(){
        return _.isElement(this) &&  _h('HTMLLIElement', this)}

    $.fn.li=function(){   var  g=G(arguments),
        li = $.li()
        this.A( li )
        g.e(function(g){ li.A(g)  })
    }

    $.fn.C$=function(s){
        if(s){ $l(s + ' !!!')}
        return this.C($r())
    }


    $.pre=function(){ return  $("<pre>").A() }



    $.l$=function(a){ $.c$(); $l(a||'!'); return a }

    $.A=function(){var g=G(arguments)
        g.e(function(a){$('body').A(a)})
        return $
    }
    $.B=function(){var g=G(arguments)
        $l('if looking for bold, use $.b')
        g.e(function(a){$('body').A(a)})
        return $('body')}
    $.fn.pp=function(a){ this.pp(a); return this}
    $.fn.sb =function(fn){

        return  this.submit(

            function(e){
                e.pD= e.preventDefault
                fn(e)
            })
    }
    $.fn.mD=function(l){
        var c=this
        c.mousedown(function(e){l(e.clientX, e.clientY)})
        return c}
    $.fn.pM=function(l){
        var c=this
        c.pressmove(function(e){l(e.clientX, e.clientY)})
        return c}
    $.fn.chk=function(){ this.at('checked', true) }
    $.fn.sz=function(sz){
        return this.at('size', sz)
    }
    $.fn.mlt=function(m){
        return this.at('multiple', true)
    }
    $.fn.hv= $.fn.hover
    $.fn.h= $.fn.ht=$.fn.html
    $.fn.oh=function(){
        return this[0].outerHTML
    }
    $.fn.m=function(o){

        var e = this

        if(o.mD){e.mD(o.mD)}
        if(o.mU){e.mD(o.mU)}
        if(o.pM){e.pM(o.pM)}

        return e}
    $.fn.col = function(col){
        return this.css('color', oO('c', col))}
    $.fn.C = function(c, c2){
        if(c2){return this.C(c).col(c2)}
        if(c=='*'){
            c = Yano.random()
            $l(c)
        }
        return this.css('backgroundColor', oO('c', c))
    }
    $.fn.A=function(stuff){
        if( U(stuff)){$('body').append(this); return this}
        this.append.apply(this, arguments)
        return this}
    $.fn.W=function(width){return width? this.width(width): this.width()}
    $.fn.H=function(height){return height? this.height(height): this.height()}
    $.fn.E=function(html){
        this.empty(); this.html(html); return this
    }
    $.fn.WH=function(w,h){h=h||w;return this.W(w).H(h)}
    $.fn.minW=function(a){return this.css('min-width',a)}
    $.fn.minH=function(a){return this.css('min-height',a)}
    $.fn.maxW=function(a){return this.css('max-width',a)}
    $.fn.maxH=function(a){return this.css('max-height',a)}
    $.fn.Z=function(w,h){return this.W(w).H(h||w)}
    $.fn.Y=$.fn.top=function(top){
        if(N(top)){return this.css('top', top)}
        var top = this.css('top')
        if(top=='auto'){return 'auto'}
        return parseInt(top)}
    $.fn.X=$.fn.left=function(left){
        if(N(left)){return this.css('left', left)}
        var left = this.css('left')
        if(left=='auto'){return 'auto'}
        return parseInt(left)}
    $.fn.XY = function(x,y){

        x=N(x)?x:0

        if(U(y)){y=x}
        return this.X(x).Y(y)
    }
    $.fn.background=function(bg){
        if(U(bg)){return this.css('background')}
        this.css('background', bg)
        return this
    }
    $.fn.backgroundPosition=function(bg){
        if(U(bg)){return this.css('backgroundPosition')}
        this.css('backgroundPosition', bg)
        return this
    }
    $.fn.right=function(right){
        if(U(right)){
            return this.css('right')
        }

        this.css('right', right)
        return this
    }
    $.fn.bottom=function(bottom){
        if(U(bottom)){
            return this.css('bottom')
        }
        this.css('bottom', bottom)
        return this
    }
    $.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
    $.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }
    $.fn.drag = function(){

        this.A()
        this.each(function(){
            $(this).css('top', $(this).position().top )
            $(this).css('left', $(this).position().left)})

        this.P('a')

        this.on('mousedown', function(e){

            var el = $(this)

            var offset = el.offset(),
                deltaX = e.pageX-offset.left,
                deltaY = e.pageY-offset.top

            $('html').on('mousemove', function(e){
                var x=e.pageX - deltaX,
                    y=e.pageY - deltaY

                el.left(x)
                el.top(y)

            }).on( 'mouseup' , function(){  $(this).off() })

        })

        //touchDrg(element)
        return this

    }
    $.fn.mar=function(margin){

        if(U(margin)){ return this.css('margin') }

        this.css( 'margin' , margin ); return this }
    $.fn.marBottom=function(margin){

        if(U(margin)){ return this.css('marginBottom') }

        this.css( 'marginBottom' , margin ); return this }
    $.fn.marTop=function(margin){

        if(U(margin)){ return this.css('marginTop') }

        this.css( 'marginTop' , margin ); return this }
    $.fn.marLeft=function(margin){

        if(U(margin)){ return this.css('marginLeft') }

        this.css( 'marginLeft' , margin ); return this }
    $.fn.marRight=function(margin){

        if(U(margin)){ return this.css('marginRight') }

        this.css( 'marginRight' , margin ); return this }
    $.fn.marHor=function(a){return this.marLeft(a).marRight(a)}
    $.fn.marVer=function(a){return this.marTop(a).marBottom(a)}
    $.fn.K= function(){  $.fn.addClass.apply(this, arguments); return this  }
    $.fn.fontSize=function(z){ this.css('font-size', z)

        return this}
    $.fn.textAlign=function(z){

        this.css('text-align', z)

        return this}
    $.fn.opacity=$.fn.alpha=function(z){

        this.css('opacity', z)

        return this}
    $.fn.type=function(type){
        if(U(type)){return this.attr('type')}
        this.attr('type',type);return this
    }
    $.fn.display=function(display){
        if(U(display)){return this.css('display')}
        this.css('display',display);return this
    }
    $.fn.float=function(float){
        if(U(float)){return this.css('float')}
        this.css('float',float);return this
    }
    $.fn.overflow=function(overflow){
        if(U(overflow)){return this.css('overflow')}
        this.css('overflow',overflow);return this
    }
    $.fn.href=function(href){
        if(U(href)){return this.attr('href')}
        this.attr('href',href);return this
    }
    $.fn.borderStyle= function(style){

        this.css('border-style', style)

        return this}
    $.fn.borderColor=function(c){

        this.css('border-color', oO('c', c))

        return this}
    $.fn.borderWidth=function(w){

        this.css('border-width',w)

        return this}
    $.fn.hold=function(a){
        a.P('s')
        this.A(a)


    }
    $.fn.pad=function(padding){
        if(U(padding)){return this.css('padding')}
        this.css('padding',padding);return this}
    $.fn.padTop=function(padding){
        if(U(padding)){return this.css('paddingTop')}
        this.css('paddingTop',padding);return this}
    $.fn.padBottom=function(padding){
        if(U(padding)){return this.css('paddingBottom')}
        this.css('paddingBottom',padding);return this}
    $.fn.padLeft=function(padding){
        if(U(padding)){return this.css('paddingLeft')}
        this.css('paddingLeft',padding);return this}
    $.fn.padRight=function(padding){
        if(U(padding)){return this.css('paddingRight')}
        this.css('paddingRight',padding);return this}
    $.fn.padHor=function(a){return this.padLeft(a).padRight(a)}
    $.fn.padVer=function(a){return this.padTop(a).padBottom(a)}
    $.fn.bor=function(border){
        if(U(border)){return this.css('border')}
        this.css('border',border);return this}
    $.fn.zIndex=function(z){
        if(U(z)){return this.css('z-index')}
        this.css('z-index',z);return this}
    $.fn.el = function(e){
        if(U(e)){
            console.log( $('<div>').append(  this.clone()  ).html() )
            return this}}
    $.fn.free=function(){

        $('body').A( this )

        this.P('a')
    }
    $.fn.dismiss=function(a){
        return this.attr('data-dismiss',a)}
    $.fn.delButton=function(){
        var that=this

        this.prepend(

            $.div().A(
                $.button(  'x', function(){ that.remove() }).K('pull-right').mar(20)
            )

        )


        return this}
    $.fn.for=function(forWhat){return this.attr('for', forWhat)}
    $.fn.placeholder=function(forWhat){return this.attr('placeholder', forWhat)}
    $.fn.src  = function(a){


        if( U(a) ){return this.attr('src')}

        this.attr('src',  src(a) )

        return this
    }
    $.fn.h1 = function(text){

        this.A($.h1(text))
        return this}
    $.fn.h2 = function(text){

        this.A($.h2(text))
        return this}
    $.fn.h3 = function(text){

        this.A($.h3(text))
        return this}
    $.fn.h4 = function(text){

        this.A($.h4(text))
        return this}
    $.fn.h5 = function(text){

        this.A($.h5(text))
        return this}
    $.fn.h6 = function(text){

        this.A($.h6(text))
        return this}
    $.fn.ipsum=function(){    var that =this

        _.each(arguments, function(num){
            that.A( $.ipsum(num) )
        })

        return this}
    $.fn.ipsumP=function(){
        var that =this

        _.each(arguments, function(num){
            that.A( $.ipsumP(num) )
        })
        return this}
    $.fn.role=function(role){
        if(U(role)){return this.attr('role')}
        this.attr('role', role)
        return this

    }
    $.fn.xs = function(num){

        return this.K('col-xs-' + num)

    }
    $.fn.sm = function(num){

        return this.K('col-sm-' + num)

    }
    $.fn.md= function(num){

        return this.K('col-md-' + num)

    }
    $.fn.lg= function(num){

        return this.K('col-lg-' + num)

    }
    $.fn.centerOnWindow = function(){
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
        $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
        $(window).scrollLeft()) + "px" )
        return this}
    $.fn.xCenter=function(){

        return this.P( 'a' ).css({  left: '50%', 'margin-left': '-100px'  })}
    $.fn._getPosition=function(){



        var e = this[0],
            x = 0,
            y = 0

        while (_.isElement(e)) {
            y += e.offsetTop
            x += e.offsetLeft
            if (isBodyElement(e)){e=0}
            e=e.offsetParent||e
        }
        return { x: x, y: y }

        function isBodyElement(e){return O(e)&& e.tagName.toUpperCase() == 'BODY'}


    }
    $.fn.ap2=function(el){
        el.A(this)
        return this
    }
    $.fn.cv=$.fn.can=function(){

        var c=  $.can.apply($, G(arguments))

        this.A(c)

        return this
    }
    $.fn.ch=function(){var g=G(arguments),ch,o
        o= g.F_? {fn: g.f} :
        {sel: g.f, fn: g.s}
        ch=this.children(o.sel)
        if(o.fn){ _.e(ch, o.fn) }
        return ch
    }
    $.fn.Cv=$.fn.Can=function(){

        var c
        c=  $.c.apply($, G(arguments))
        this.A(c)
        return c
    }
    $.fn.rm=function(){return this.remove()}
    $.fn.dg=function(){return this.drag()}
    $.fn.al=function(al){return this.opacity(al)}
    $.fn.in=function(num){
        var g=G(arguments)
        this.delay(num * 1000)
        return this
    }
    $.fn.pp2=function(a){this.prependTo(a); return this}
    $.fn.a2=function(a){a.A(this); return this}
    $.fn.tt=$.fn.tit= $.fn.title=function(t,c){var p
        p = $.p(t).fS(24).K('text-center').C('X', c||'z').mH(10).pH(30)
        this.A(p, $.hr().fS(10))
        return this
    }
    $.fn.gg = $.fn.toggle
    $.fn.pa= $.fn.parent
    $.fn.v = function(v){var g=G(arguments),v

        if(D(v)){
            this.val(v)

            return this
        }
        v=this.val()
        if(!g.p){this.val('')}
        return v

    }
    $.fn.Vx=function(){
        var val= this.val()
        this.val('')
        return val
    }
    $.fn.fi= $.fn.find
    $.fn.pp= $.fn.prepend
    $.fn.rm=function(){return this.remove()}
    $.fn.e = $.fn.each
    $.fn.$= $.fn.click
    $.fn.col = function(col){
        return this.css('color', oO('c', col))}
    $.fn.C = function(col, c2){
        if(c2){return this.C(col).col(c2)}

        if(col=='*'){
            $l(col)

            col = Yano.random() }

        return this.css('backgroundColor', oO('c', col))
    }
    $.fn.al= $.fn.opacity=$.fn.alpha=function(z){

        this.css('opacity', z)

        return this}
    $.fn.W=function(w){
        if(U(w)) {return  this.width()}
        this.width(w)
        return this
    }
    $.fn.H=function(height){return height? this.height(height): this.height()}
    $.fn.mW= $.fn.minW=function(a){return this.css('min-width',a)}
    $.fn.mH= $.fn.minH=function(a){return this.css('min-height',a)}
    $.fn.MW= $.fn.maxW=function(a){return this.css('max-width',a)}
    $.fn.MH= $.fn.maxH=function(a){return this.css('max-height',a)}
    $.fn.WH=$.fn.Z=function(w,h){h=h||w;return this.W(w).H(h)}
    $.fn.xs = function(num){

        return this.K('col-xs-' + num)

    }
    $.fn.sm1 = function(num){
        return this.K('col-sm-' + num)
    } //will change back
//sm small, sb submit
    $.fn.md= function(num){

        return this.K('col-md-' + num)

    }
    $.fn.lg= function(num){

        return this.K('col-lg-' + num)

    }
    $.fn.bg=function(bg){
        if(U(bg)){return this.css('background')}
        this.css('background', bg)
        return this
    }
    $.fn.bgP=function(bg){
        if(U(bg)){return this.css('backgroundPosition')}
        this.css('backgroundPosition', bg)
        return this
    }
    $.fn.free=function(){
        $('body').A( this )
        this.P('a')
    }//?
    $.fn.Y= $.fn.t=function(top){

        if(N(top)){return this.css('top', top)}
        var top = this.css('top')
        if(top=='auto'){return 'auto'}
        return parseInt(top)
    }
    $.fn.l=function(l){var q=this,g=G(arguments)

        if(N(l)){
            q.css('left', l)
            return q
        }

        l = q.css('left')
        return l=='auto'? 'auto':
            q.position().left
    }
    $.fn.X=  function(l){var q=this,g=G(arguments)

        if(N(l)){

            q.css('left',

                g.p? q.X()+l:
                    l
            )

            return q
        }

        l = q.css('left')
        return l=='auto'? 'auto': parseInt(l)

    }
    $.fn.XY = function(x,y){

        x=N(x)?x:0

        if(U(y)){y=x}
        return this.X(x).Y(y)
    }
    $.fn.R=  function(right){
        if(U(right)){
            return this.css('right')
        }
        this.css('right', right)
        return this
    }
    $.fn.L=  function(n){
        if(U(n)){
            return this.css('left')
        }
        this.css('left', n)
        return this
    }
    $.fn.LR=function(l,r){var q=this
        if(O(l)){r= l.r; l= l.l }
        if(N(l)){q.L(l)}
        if(N(r)){q.R(r)}
        return q
    }
    $.fn.B= $.fn.bottom=function(bottom){
        if(U(bottom)){
            return this.css('bottom')
        }

        this.css('bottom', bottom)
        return this
    }
    $.fn.p=$.fn.P = function(pos,x,y){
        if( U(pos) ){ return this.css('position') }
        this.css('position', oO('p',pos))

        if(N(x)){this.X(x)}
        if(y){this.Y(y)}
        return this}
    $.fn.ab= $.fn.abs=function(x,y){
        this.P('a', x,y)
        return this
    }
    $.fn.cw=$.fn.centerOnWindow = function(){
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
        $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
        $(window).scrollLeft()) + "px" )
        return this}
    $.fn.xc=$.fn.xCenter=function(){

        return this.P( 'a' ).css({  left: '50%', 'margin-left': '-100px'  })}
    $.fn._getPosition=function(){



        var e = this[0],
            x = 0,
            y = 0

        while (_.isElement(e)) {
            y += e.offsetTop
            x += e.offsetLeft
            if (isBodyElement(e)){e=0}
            e=e.offsetParent||e
        }
        return { x: x, y: y }

        function isBodyElement(e){return O(e)&& e.tagName.toUpperCase() == 'BODY'}


    }
    $.fn.os=function(){return this.offset()}
    $.fn.ho=$.fn.hold=function(a){
        a.P('s')
        this.A(a)
    }
    $.fn.mar = function (margin) {

        if (U(margin)) {
            return this.css('margin')
        }

        this.css('margin', margin);
        return this
    }
    $.fn.mB= $.fn.marBottom = function (margin) {

        if (U(margin)) {
            return this.css('marginBottom')
        }

        this.css('marginBottom', margin);
        return this
    }
    $.fn.mT= $.fn.marTop = function (margin) {

        if (U(margin)) {
            return this.css('marginTop')
        }

        this.css('marginTop', margin);
        return this
    }
    $.fn.mL=  $.fn.marLeft = function (margin) {

        if (U(margin)) {
            return this.css('marginLeft')
        }

        this.css('marginLeft', margin);
        return this
    }
    $.fn.mR=    $.fn.marRight = function (margin) {

        if (U(margin)) {
            return this.css('marginRight')
        }

        this.css('marginRight', margin);
        return this
    }
    $.fn.mH= $.fn.marHor = function (a) {
        return this.marLeft(a).marRight(a)
    }
    $.fn.mV= $.fn.marVer = function (a) {
        return this.marTop(a).marBottom(a)
    }
    $.fn.bS = $.fn.borderStyle = function (style) {

        this.css('border-style', style)

        return this
    }

    $.fn.e= $.fn.each

    $.fn.bdC= $.fn.borderColor = function (c) {

        this.css('border-color', oO('c', c))

        return this
    }
    $.fn.bW= $.fn.borderWidth = function (w) {

        this.css('border-width', w)

        return this
    }
    $.fn.at= $.fn.attr
    $.fn.bor = function (border) {
        if (U(border)) {
            return this.css('border')
        }
        this.css('border', border);
        return this
    }
    $.fn.pad = function (padding) {
        if (U(padding)) {
            return this.css('padding')
        }
        this.css('padding', padding);
        return this
    }
    $.fn.pT=    $.fn.padTop = function (padding) {
        if (U(padding)) {
            return this.css('paddingTop')
        }
        this.css('paddingTop', padding);
        return this
    }
    $.fn.pB=    $.fn.padBottom = function (padding) {
        if (U(padding)) {
            return this.css('paddingBottom')
        }
        this.css('paddingBottom', padding);
        return this
    }
    $.fn.pL=    $.fn.padLeft = function (padding) {
        if (U(padding)) {
            return this.css('paddingLeft')
        }
        this.css('paddingLeft', padding);
        return this
    }
    $.fn.pR=    $.fn.padRight = function (padding) {
        if (U(padding)) {
            return this.css('paddingRight')
        }
        this.css('paddingRight', padding);
        return this
    }
    $.fn.pH=   $.fn.padHor = function (a) {
        return this.padLeft(a).padRight(a)
    }
    $.fn.pV=    $.fn.padVer = function (a) {
        return this.padTop(a).padBottom(a)
    }
    $.fn.h1 = function(t){ return this.A($.h1(t)) }
    $.fn.h2 = function(text){

        this.A($.h2(text))
        return this}
    $.fn.h3 = function(text){

        this.A($.h3(text))
        return this}
    $.fn.h4 = function(text){

        this.A($.h4(text))
        return this}
    $.fn.h5 = function(text){

        this.A($.h5(text))
        return this}
    $.fn.h6 = function(text){

        this.A($.h6(text))
        return this}
    $.fn.ips=$.fn.ipsum=function(){    var that =this

        _.each(arguments, function(num){
            that.A( $.ipsum(num) )
        })

        return this}
    $.fn.ipsumP=function(){
        var el =this

        _.e(arguments, function(num){
            el.A( $.ipsumP(num) )
        })
        return el
    }


    $.fn.T= function(){var g=G(arguments)
        this.text.apply(this,g)
        return this
    }

    $.fn.fS= function(z){ this.css('font-size', z)

        return this}
    $.fn.tA=  function(z){
        this.css('text-align', z)
        return this}
    $.fn.ov = $.fn.overflow=function(overflow){
        if(U(overflow)){return this.css('overflow')}
        this.css('overflow',overflow);return this
    }
    $.fn.hd= $.fn.hide
    $.fn.sh= $.fn.show
    $.fn.dg= $.fn.drag = function(){

        this.A()
        this.each(function(){
            $(this).css('top', $(this).position().top )
            $(this).css('left', $(this).position().left)})

        this.P('a')

        this.on('mousedown', function(e){

            var el = $(this)

            var offset = el.offset(),
                deltaX = e.pageX-offset.left,
                deltaY = e.pageY-offset.top

            $('html').on('mousemove', function(e){
                var x=e.pageX - deltaX,
                    y=e.pageY - deltaY

                el.left(x)
                el.top(y)

            }).on( 'mouseup' , function(){  $(this).off() })

        })

        //touchDrg(element)
        return this

    }
    $.fn.ty= $.fn.type=function(type){
        if(U(type)){return this.attr('type')}
        this.attr('type',type);return this
    }
    $.fn.dp= $.fn.display=function(display){
        if(U(display)){return this.css('display')}
        this.css('display',display);return this
    }
    $.fn.float=function(float){
        if(U(float)){return this.css('float')}
        this.css('float',float);return this
    }
    $.fn.ph= function(forWhat){return this.attr('placeholder', forWhat)}

    $.fn.dismiss=function(a){
        return this.attr('data-dismiss',a)}

    $.fn.xBt=$.fn.delButton=function(){var el=this
        el.pp( $.d().A( $.bt(  'x', function(){ el.rm() })
                    .K('pull-right').mar(20)
            )
        )
        return el}

    $.fn.sib=function(){var g=G(arguments); return this.sib.apply(this. g)}
    $.fn.hv= $.fn.hover
    $.fn.fr=$.fn.for=function(forWhat){return this.attr('for', forWhat)}
    $.fn.mD = function (l) {
        var c = this
        c.mousedown(function (e) {
            l(e.clientX, e.clientY)
        })
        return c
    }
    $.fn.pM=function(l){
        var c=this
        c.pressmove(function(e){l(e.clientX, e.clientY)})
        return c}
    $.fn.m=function(o){

        var e = this

        if(o.mD){e.mD(o.mD)}
        if(o.mU){e.mD(o.mU)}
        if(o.pM){e.pM(o.pM)}

        return e}
    $.fn.pm=$.fn.pressmove=function(func){
        var mouse_pressed
        this.mousedown(function(){mouse_pressed=true})
        this.mouseup(function(){mouse_pressed=false})



        this.mousemove(function(e){


            if(mouse_pressed){

                func(e)

            }

        })






        return this}
    $.fn.mp=$.fn.mousePoint=function(e, scale){
        scale=N(scale)?scale:1
        return V(e.pageX/scale,e.pageY/scale )
    }
    $.fn.H5=function(a){return $.h5(a).a2(this)}

    $.slP=$.fn.selPic=function(){
        $('.pic').e(function(){$(this).C('b')})
        this.parent().C('y')
        //$(pic).parent().C('y')
    }
    $.fn.tl=$.fn.trans=function(transform){
        $l('transform')
        return this.css({transform: transform})}
    $.fn.A=function(stuff){
        if( U(stuff)){$('body').append(this); return this}
        this.append.apply(this, arguments)
        return this}


    $.fn.E=function(html){
        this.empty(); this.html(html); return this
    }
    $.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
    $.fn.n= $.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }

    $.fn.K= function(){
        $.fn.addClass.apply(this, arguments); return this
    }


    $.fn.hf=$.fn.href=function(href){
        if(U(href)){return this.attr('href')}
        this.attr('href',href); return this
    }
    $.fn.zi=$.fn.zIndex=function(z){
        if(U(z)){return this.css('z-index')}
        this.css('z-index',z);return this}
    $.fn.el = function(e){
        if(U(e)){
            console.log( $('<div>').append(  this.clone()  ).html() )
            return this}}
    $.sr=$.fn.src= function(a){
        if( U(a) ){return this.attr('src')}

        this.attr('src', J.src(a) )

        return this
    }
    $.ro=$.fn.role=function(role){
        if(U(role)){return this.attr('role')}
        this.attr('role', role)
        return this

    }
    $.cx=$.fn.ctx = function () {
        return this[0].getContext('2d')
    }
    $.fn.wor = $.fn.world = function () {
        var can = this
        var w = b2d.wor.apply(null, arguments).bug(can, 30, '*')
        w.can = can
        w.ctx = can.ctx()
        return w
    }
    $.fn.getPosition = $.fn.getTotalOffset = function () {

        var e = this, x = 0, y = 0

        while (E(e) && e.tagName) {

            y += e.offsetTop

            x += e.offsetLeft

            if (isBodyElement(e)) {
                e = 0
            }

            e = e.offsetParent || e
        }

        return {x: x, y: y}


    }//just gets the TOTAL offset of ANY element
    $.fn.gw=$.fn.grow = function(){

        originalWidth =  this.W()
        originalHeight = this.H()

        this.on('mousedown', function(e){


            mx = e.clientX
            my = e.clientY


            $.mouseMove(function(e){

                this.WH( originalWidth +  e.clientX - mx,
                    originalHeight +  e.clientY - my )

            })

            $.mouseUp(function(){ $(this).off() })  //mouseUp anything?
            this.children().on('mousedown', function(e){e.stopPropagation()})

        })

    }




    $.fn.bg = $.fn.bgI=   function (url) {//set background image
        this.bgI('url("' + Y.src(url) + '")');
        return this
    }
    $.fn.bp =$.positionBackgroundImage = function (x, y) {
        var g = G(arguments), x = g[0], y = g[1];
        x = N(x) ? x : 0;
        y = N(y) ? y : 0;
        this.css({backgroundPos: x + 'px ' + y + 'px'});
        return this

    }
    $.fn.fr =  function (n, w) {
        if (O(n)) {q.bp(n.n, n.w)}
        else {q.bp(n * w)}
        return this

    }


    CORNERS=function(){
        //  dva(2, 2, 2, 2 )
        div = $.dA(200,200).A(
            $.dA('r', 20, 20).top(-10).left(-10),
            $.dA('y', 20, 20).bottom(-10).right(-10),
            $.dA('g', 20, 20).top(-10).right(-10),
            $.dA('b', 20, 20).bottom(-10).left(-10)
        );
        i = $.dF('u').col('w').fS( 20).al(.2).tA('c').width('100%').top(100);
        i.H( W() + ' * ' + H() );
        Z(function(){  i.H(  W() + ' * ' + H() )  });

        $.$( function(){ _.rat( function(){$('body').C($r())  } , 10 )
        });
        i.grow()
    }

    function another(){

        $.fn.col = function(col){
            return this.css('color', oO('c', col))}
        $.fn.C = function(col, c2){
            if(c2){return this.C(col).col(c2)}
            return this.css('backgroundColor', oO('c', col))}
        $.fn.A=function(stuff){
            if( U(stuff)){$('body').append(this); return this}
            this.append.apply(this, arguments)
            return this}
        $.fn.W=function(width){return width? this.width(width): this.width()}
        $.fn.H=function(height){return height? this.height(height): this.height()}

        $.fn.V=function(){
            var val= this.val()
            this.val('')
            return val
        }
        $.fn.E=function(html){
            this.empty(); this.html(html); return this
        }

        $.fn.WH=function(w,h){h=h||w;return this.W(w).H(h)}
        $.fn.minW=function(a){return this.css('min-width',a)}
        $.fn.minH=function(a){return this.css('min-height',a)}
        $.fn.maxW=function(a){return this.css('max-width',a)}
        $.fn.maxH=function(a){return this.css('max-height',a)}
        $.fn.Z=function(w,h){return this.W(w).H(h||w)}
        $.fn.Y=$.fn.top=function(top){return top?this.css('top', top):this.css('top')}
        $.fn.X=$.fn.left=function(left){return left?this.css('left', left):this.css('left')}
        $.fn.right=function(right){return right?this.css('right', right):this.css('right')}
        $.fn.bottom=function(bottom){return bottom?this.css('bottom', bottom):this.css('bottom')}
        $.fn.P = function(pos,left,top){
            if( U(pos) ){ return this.css('position') }
            this.css('position', oO('p',pos))
            if(left){this.left(left)}
            if(top){this.top(top)}
            return this}
        $.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
        $.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }
        $.fn.drag = function(){

            this.A()
            this.each(function(){
                $(this).css('top', $(this).position().top )
                $(this).css('left', $(this).position().left)})

            this.P('a')

            this.on('mousedown', function(e){

                var el = $(this)

                var offset = el.offset(),
                    deltaX = e.pageX-offset.left,
                    deltaY = e.pageY-offset.top

                $('html').on('mousemove', function(e){
                    var x=e.pageX - deltaX,
                        y=e.pageY - deltaY

                    el.left(x)
                    el.top(y)

                }).on( 'mouseup' , function(){  $(this).off() })

            })

            //touchDrg(element)
            return this

        }
        $.fn.mar=function(margin){

            if(U(margin)){ return this.css('margin') }

            this.css( 'margin' , margin ); return this }
        $.fn.marBottom=function(margin){

            if(U(margin)){ return this.css('marginBottom') }

            this.css( 'marginBottom' , margin ); return this }
        $.fn.marTop=function(margin){

            if(U(margin)){ return this.css('marginTop') }

            this.css( 'marginTop' , margin ); return this }
        $.fn.marLeft=function(margin){

            if(U(margin)){ return this.css('marginLeft') }

            this.css( 'marginLeft' , margin ); return this }
        $.fn.marRight=function(margin){

            if(U(margin)){ return this.css('marginRight') }

            this.css( 'marginRight' , margin ); return this }
        $.fn.marHor=function(a){return this.marLeft(a).marRight(a)}
        $.fn.marVer=function(a){return this.marTop(a).marBottom(a)}
        $.fn.J= $.fn.animate
        $.fn.K= function(){  $.fn.addClass.apply(this, arguments); return this  }
        $.fn.fontSize=function(z){ this.css('font-size', z)

            return this}
        $.fn.textAlign=function(z){

            this.css('text-align', z)

            return this}
        $.fn.opacity=$.fn.alpha=function(z){

            this.css('opacity', z)

            return this}
        $.fn.type=function(type){
            if(U(type)){return this.attr('type')}
            this.attr('type',type);return this
        }
        $.fn.display=function(display){
            if(U(display)){return this.css('display')}
            this.css('display',display);return this
        }
        $.fn.float=function(float){
            if(U(float)){return this.css('float')}
            this.css('float',float);return this
        }
        $.fn.overflow=function(overflow){
            if(U(overflow)){return this.css('overflow')}
            this.css('overflow',overflow);return this
        }
        $.fn.href=function(href){
            if(U(href)){return this.attr('href')}
            this.attr('href',href);return this
        }
        $.fn.borderStyle= function(style){

            this.css('border-style', style)

            return this}
        $.fn.borderColor=function(c){

            this.css('border-color', oO('c', c))

            return this}
        $.fn.borderWidth=function(w){

            this.css('border-width',w)

            return this}
        $.fn.hold=function(a){

            a.P('s')
            this.A(a)


        }
        $.fn.pad=function(padding){
            if(U(padding)){return this.css('padding')}
            this.css('padding',padding);return this}
        $.fn.padTop=function(padding){
            if(U(padding)){return this.css('paddingTop')}
            this.css('paddingTop',padding);return this}
        $.fn.padBottom=function(padding){
            if(U(padding)){return this.css('paddingBottom')}
            this.css('paddingBottom',padding);return this}
        $.fn.padLeft=function(padding){
            if(U(padding)){return this.css('paddingLeft')}
            this.css('paddingLeft',padding);return this}
        $.fn.padRight=function(padding){
            if(U(padding)){return this.css('paddingRight')}
            this.css('paddingRight',padding);return this}
        $.fn.padHor=function(a){return this.padLeft(a).padRight(a)}
        $.fn.padVer=function(a){return this.padTop(a).padBottom(a)}
        $.fn.bor=function(border){
            if(U(border)){return this.css('border')}
            this.css('border',border);return this}
        $.fn.zIndex=function(z){
            if(U(z)){return this.css('z-index')}
            this.css('z-index',z);return this}
        $.fn.el = function(e){
            if(U(e)){
                console.log( $('<div>').append(  this.clone()  ).html() )
                return this}}
        $.fn.free=function(){

            $('body').A( this )

            this.P('a')
        }
        $.fn.dismiss=function(a){
            return this.attr('data-dismiss',a)}
        $.fn.delButton=function(){
            var that=this

            this.prepend(

                $.div().A(
                    $.button(  'x', function(){ that.remove() }).K('pull-right').mar(20)
                )

            )


            return this}
        $.fn.for=function(forWhat){return this.attr('for', forWhat)}
        $.fn.placeholder=function(forWhat){return this.attr('placeholder', forWhat)}
        $.fn.src  = function(a){


            if( U(a) ){return this.attr('src')}

            this.attr('src',  src(a) )

            return this
        }



    }

}
function jqPlugins(){
    function lettering(){

        LETTERINGPLUG = function () {
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
        };
        LETTERINGPLUG()

        LETTERING = function () {
            $.x()

            sp = $.sp('hello').A()
            sp.lettering(); // wrap <span class="charx"/ > around each character within header
            $spans = sp.fi('span')
            $('.dropped span')
                .css({

                    transition: 'all 0.3s ease-in'
                })


        }
        LETTERING = function () {
            z()


            span = $.sp('hello').A()
            span.lettering() // wrap <span class="charx"/ > around each character within header
            $spans = span.find('span')
            $('.dropped span').css({transition: 'all 0.3s ease-in'})


        }
        FALLING = function () {
            z()
            //this goes in css
            $header2 = $.sp('hello').A()
            $header2.lettering() // wrap <span class="charx"/ > around each character within header

            $spans = $header2.find('span')

            delay = 0

            $header2.on('click', function () {


                $spans.each(function () {
                    $(this).css({transitionDelay: delay + 's'}) // apply sequential trans delay to each character

                    delay += 0.1
                })


                $header2.K('dropped') // Add "dropped" class to header to apply transition

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

    }
    $.tree = function () {$.x(); var s = 200;
        d = $.dK('container')($.p().K('tree_controls')(
            $.a('expand all').K('expand_all'),
            $.a('collapse all').K('collapse_all')))
        quas = "<li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li>";
        ter = "<li><a href='#' class='tree_trigger'> &nbsp;</a> Ter <ul>" + quas + "</ul></li>";
        sec = "<li><a href='#' class='tree_trigger'> &nbsp;</a> Sec" + ter + "</ul></li>";
        pri = "<ul class='tree'><li><a href='#' class='tree_trigger'> &nbsp;</a> Pri <ul class='tree_expanded'>" + sec + "</ul></li></ul>";
        q = $(pri);
        //d(q)
        if (_.size($('ul.tree'))) {

            $('p.tree_controls a.expand_all, p.tree_controls a.collapse_all').click(function () {

                if ($(this).hasClass('expand_all')) {
                    $l('ex_all');
                    $(this).parent('p').next('ul').find('a.tree_trigger').K('trigger_expanded');
                    return false
                }

                else {
                    $l('!ex_all');

                    $(this).parent('p').next('ul').find('a.tree_trigger')

                        .removeClass('trigger_expanded').end()

                        .find('ul').removeClass('tree_expanded')
                }

                this.blur();
                return false

            });


            $(document).on('click', function () {
                if ($(this).hasClass('tree_trigger')) {
                    if ($(this).next('ul').is(':hidden')) {
                        $(this).K('trigger_expanded').next('ul').K('tree_expanded')
                    }
                    else {
                        $(this).removeClass('trigger_expanded').next('ul').removeClass('tree_expanded')
                    }
                    this.blur();
                    return false
                }
            });


            $('ul.tree li:last-child').K('last');

            $('ul.tree_expanded').prev('a').K('trigger_expanded')

        }
    }
    letteringPlug = function () {
        var methods = {
            init: function () {
                return this.each(function () {
                    injector($(this), '', 'char', '')
                })
            },
            words: function () {
                return this.each(function () {
                    injector($(this), ' ', 'word', ' ')
                })
            },
            lines: function () {
                return this.each(function () {
                    var r = "eefec303079ad17405c889e092e105b0" // Because it's hard to split a <br/> tag consistently across browsers,
                    // (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
                    // (of the word "split").  If you're trying to use this plugin on that
                    // md5 hash string, it will fail because you're being ridiculous.
                    injector($(this).children("br").replaceWith(r).end(), r, 'line', '')
                })
            }
        }
        $.fn.lettering = function (method) {
            if (method && methods[method]) {
                return methods[method].apply(this, [].slice.call(arguments, 1))
            }
            else if (method === 'letters' || !method) {
                return methods.init.apply(this, [].slice.call(arguments, 0))
            } // always pass an array
            $.error('Method ' + method + ' does not exist on jQuery.lettering');
            return this
        }
        function injector(t, splitter, klass, after) {
            var text = t.text(), a = text.split(splitter), inject = '';
            if (a.length) {
                $(a).each(function (i, item) {
                    inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;
                })
                t.attr('aria-label', text).empty().append(inject)
            }
        }
    };
    letteringPlug()
    $.tree = function () {
        $.x();
        var s = 200;
        d = $.dK('container')($.p().K('tree_controls')(
            $.a('expand all').K('expand_all'),
            $.a('collapse all').K('collapse_all')))
        quas = "<li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li>";
        ter = "<li><a href='#' class='tree_trigger'> &nbsp;</a> Ter <ul>" + quas + "</ul></li>";
        sec = "<li><a href='#' class='tree_trigger'> &nbsp;</a> Sec" + ter + "</ul></li>";
        pri = "<ul class='tree'><li><a href='#' class='tree_trigger'> &nbsp;</a> Pri <ul class='tree_expanded'>" + sec + "</ul></li></ul>";
        q = $(pri);
        //d(q)
        if (_.size($('ul.tree'))) {

            $('p.tree_controls a.expand_all, p.tree_controls a.collapse_all').click(function () {

                if ($(this).hasClass('expand_all')) {
                    $l('ex_all');
                    $(this).parent('p').next('ul').find('a.tree_trigger').K('trigger_expanded');
                    return false
                }

                else {
                    $l('!ex_all');

                    $(this).parent('p').next('ul').find('a.tree_trigger')

                        .removeClass('trigger_expanded').end()

                        .find('ul').removeClass('tree_expanded')
                }

                this.blur();
                return false

            });


            $(document).on('click', function () {
                if ($(this).hasClass('tree_trigger')) {
                    if ($(this).next('ul').is(':hidden')) {
                        $(this).K('trigger_expanded').next('ul').K('tree_expanded')
                    }
                    else {
                        $(this).removeClass('trigger_expanded').next('ul').removeClass('tree_expanded')
                    }
                    this.blur();
                    return false
                }
            });


            $('ul.tree li:last-child').K('last');

            $('ul.tree_expanded').prev('a').K('trigger_expanded')

        }
    }
}

$$$ = function (a) {
    $(_v(a))
}