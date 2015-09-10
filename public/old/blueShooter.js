

SHOOTERCAN = function () {


    function startGame() {
        z()


        game = true
        Coins = []
        Aliens = []
        Bullets = []
        can = $.canvas('yellow', 900, 500).A()

        shooter = new Shooter()

        shooter.draw()

        //   _.times(10,function(){Coins.push(Coin())})
        //   _.times(15,function(){Aliens.push(Alien())})


        setInterval(function () {

            shooter.update()


            can.clear()
            shooter.draw()
        }, 400)
    }

    function Shooter() {
        this.x = 100
        this.y = 200
        this.vx = 2
        this.vy = 2
        this.radius = 20

        this.update = function () {
            this.x = this.x + this.vx
            this.y = this.y + this.vy
        }

        this.draw = function () {

            can.circle(this.x, this.y, this.radius, 'blue')

        }
    }

    updateScreen = function () {


        can.clear()

        shooter.draw()
    }
    updateGame = function () {

        shooterUpdate()

    }

    updateGameX = function () {

        if (game) {
            shooter.vx += cap(-5, 5)((e.x - shooter.x) / 300)
            shooter.vy += cap(-5, 5)((e.y - shooter.y) / 300)
            Bullet(shooter.x, shooter.y, shooter.vx, shooter.vy)
        } else {

            alert('game over!')

            if ((e.x > 450) && (e.y > 290)

                && (e.x < 450 + textWidth)

                && (e.y < 290 + textHeight)) {
                reload()
            }
        }

        can = $.canvas(800, 600)
        can.click(function (x, y) {
            shooter.vx += cap(-5, 5)((x - shooter.x) / 300)
            shooter.vy += cap(-5, 5)((y - shooter.y) / 300)
            Bullet(shooter.x, shooter.y, shooter.vx, shooter.vy)
        })


        b = bad(x).d()
        c = coin(x).d()
        g = guy(x)

        I(function () {

            x.X();
            b.update().draw();
            g.update().draw()

        }, 30)


        // _.each(cat(Bullets, Coins, Aliens), function(a){a.draw(); a.update()})
    }

    startGame()

}
function Alien(x, n, n1) {
    if (N(n1)) {
        var a = []
        _.times(n1, function () {
            a.push(Bad(x, n))
        })
        return a
    }
    if (N(n)) {
        return Bad(x).du(n)
    }
    var b = {
        x: _.random(1200),
        y: _.random(600),
        radius: _.random(15),
        vx: _.random(10) - 5,
        vy: _.random(10) - 5
    }
    b.draw = function () {
        //x.cir(b.x,b.y,b.r, 'rgba(124,252,0,0.5)' ,'z')
        x.circ(b.x, b.y, b.r, 'g', 'z')
        x.circ(b.x, b.y, 15, 'o', 'z')

        return b
    }
    b.update = function () {

        b.radius *= 1.005

        b.x = warp(0, 1200, 20)(b.x + b.dx)

        b.y = warp(0, 600, 20)(b.y + b.dy)

        return b
    }
    b.drawUpdate = b.du = function (n, n2) {
        if (N(n)) {
            return setInterval(function () {
                b.du()
            }, n)
        }

        return b.draw().update()
    }
    return b
}

function Coin(x, n, n1) {

    if (N(n1)) {
        var a = [];
        _.times(n1, function () {
            a.push(Coin(x, n))
        });
        return a
    }

    if (N(n)) {

        return Coin(x).du(n)
    }

    var c = {
        x: _.random(1200),
        y: _.random(0, 600),

        radius: 10,

        vx: _.random(0, 10) - 5,
        vy: _.random(0, 10) - 5
    }

    c.draw = function () {
        x.circle(this.x, this.y, this.radius, 'b', 'y')
        return this
    }

    c.update = function () {
        c.x = warp(0, 1200, 20)(this.x + this.vx)
        c.y = warp(0, 600, 20)(this.y + this.vy)
        return c
    }

    c.drawUpdate = function (n, n2) {
        if (N(n)) {
            return setInterval(function () {
                c.drawUpdate()
            }, n)
        }
        return c.draw().update()
    }

    return c
}

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
ball = {rad: 20, x: 0, y: 0, dx:1, dy:1, coins:0, health:1000}
ball.draw = function (){
    ct.fillStyle = 'blue'; ct.strokeStyle = 'yellow';
    ct.beginPath();
    ct.arc(this.x, this.y, this.rad, 0, Math.PI*2, false);
    ct.fill(); ct.stroke();
}




gameUpdate = function(){


    ball.x = ball.x + ball.dx;
    ball.y = ball.y + ball.dy;
    //ball.srad = ball.rad * .9995;
    if (ball.x < 0) {ball.x = 1180}
    if (ball.y < 0) {ball.y = 580}
    if (ball.x > 1200) {ball.x = 20}
    if (ball.y > 600) {ball.y = 20}






    _.each(coins, function (coin, index, list) {
        if (coin.x > (ball.x - ball.rad) && (coin.x < (ball.x + ball.rad)) && (coin.y > (ball.y - ball.rad)) && (coin.y < (ball.y + ball.rad)) )
        {
            //alert (index);
            //_.pluck(list,[index]);

            delete coins[index];
            //obj = new Coin; coins.push(obj);
            //obj = new Coin; coins.push(obj);
            ball.coins = ball.coins + 1;

        }
    });



    _.each(aliens, function (alien, index, list) {
        if (alien.x > (ball.x - alien.rad) && (alien.x < (ball.x + alien.rad)) && (alien.y > (ball.y - alien.rad)) && (alien.y < (ball.y + alien.rad)) )
        {
            //alert (index);
            //_.pluck(list,[index]);

            //delete alien[index];
            ball.health = ball.health - 1;

        }

        _.each(bullets, function (bullet, bullet_index, bullet_list) {
            if (alien.x > (bullet.x - bullet.rad) && (alien.x < (bullet.x + bullet.rad)) && (alien.y > (bullet.y - bullet.rad)) && (alien.y < (bullet.y + bullet.rad)) )
            {
                //alert (index);
                //_.pluck(list,[index]);

                //delete alien[index];
                delete aliens[index];
                delete bullets[bullet_index];
                obj = new Alien; aliens.push(obj);
                //obj = new Alien; aliens.push(obj);
            }

        });




    });



};





Coin=function () {


    this.x = _.random(0,1200);
    this.y = _.random(0,600);
    this.dx = _.random(0,10)-5;
    this.dy = _.random(0,10)-5;

    this.rad = 10;


    this.draw = function () {
        ct.fillStyle = 'yellow'; ct.strokeStyle = 'black';
        ct.beginPath();
        ct.arc(this.x, this.y, this.rad, 0, Math.PI*2, false);
        ct.fill(); ct.stroke();
    }




    this.update = function () {
        if (this.x < 0) {this.x = 1180}
        if (this.y < 0) {this.y = 580}
        if (this.x > 1200) {this.x = 20}
        if (this.y > 600) {this.y = 20}

        this.x = this.x + this.dx ; this.y = this.y + this.dy ;}


}



var coins = [];
for (var i = 0; i < 10; i++) {obj = new Coin; coins.push(obj);}









Alienx =function() {


    this.x = _.random(0,1200);
    this.y = _.random(0,600);
    this.dx = _.random(0,10)-5;
    this.dy = _.random(0,10)-5;

    this.rad = 25;


    this.draw = function () {
        ct.fillStyle = 'rgba(124,252,0,0.5)'; ct.strokeStyle = 'black';
        ct.beginPath();
        ct.arc(this.x, this.y, this.rad, 0, Math.PI*2, false);
        ct.fill(); ct.stroke();

        ct.fillStyle = 'orange'; ct.strokeStyle = 'black';
        ct.beginPath();
        ct.arc(this.x, this.y, 10, 0, Math.PI*2, false);
        ct.fill(); ct.stroke();
    }




    this.update = function () {
        if (this.x < 0) {this.x = 1180}
        if (this.y < 0) {this.y = 580}
        if (this.x > 1200) {this.x = 20}
        if (this.y > 600) {this.y = 20}
        this.rad = this.rad * 1.001;
        this.x = this.x + this.dx ; this.y = this.y + this.dy ;}


}



var aliens = [];
for (var i = 0; i < 5; i++) {obj = new Alien; aliens.push(obj);}














Bulletx =function(x, y, dx, dy) {


    this.x = x
    this.y = y
    this.dx = dx * -5
    this.dy = dy * -5
    this.rad = 8;


    this.draw = function () {
        ct.fillStyle = 'pink'; ct.strokeStyle = 'white';
        ct.beginPath();
        ct.arc(this.x, this.y, this.rad, 0, Math.PI*2, false);
        ct.fill(); ct.stroke();
    }




    this.update = function () {
        //if (this.x < 0) {this.x = 1180}; if (this.y < 0) {this.y = 580}; if (this.x > 1200) {this.x = 20};if (this.y > 600) {this.y = 20}

        this.x = this.x - this.dx ; this.y = this.y - this.dy ;}


}



var bullets = [];




function gun(){

    ugun=function(j){


        var bul=function(j){

            var s=j.pa('+'),
                w=s.w(),h=s.h(),

                b = cir( j.x()+75, j.y(),8,'w')


            //x,y,r,c


            j.pa('+').a(b)
            b.fn=
                s.ts(b,
                    function(t){
                        b.y(t/5 ,'-')
                    })


            onTick(function(){
                if(b.y()<200||b.y()>h){
                    $l('miss');b.XX();
                    b.fn()  }})

            return b}
        kD('s',function(){
            var b =  bul(j)
        })}



    sbul=function(j){var s=j.pa('+'),
        w=s.w(),h=s.h(),
        x=j.x(),y=j.y(),
        dx=j.dx(),  dy=j.dx(),

        b=cir(x,y,8,'r')

        s.a(b)


        b.fn=s.ts(b, function(t){  $l(t)
            b.y(dy,'+')
            b.x(dx,'+') })


        // b.dy(j.dy())
        // b.dx(j.dx())

        //  b.fn= s.ts(b,function(t){b.y(t/5 ,'-')})


        // b.mv('+')

        // b.p()

        return b}
    sgun=function(j){kD('s',function(){sbul(j)})}














    gy=function(x,y,dx,dy,r,c){
        r=r||10
        c=c||'o'
        x=x||300
        y=y||300
        dx=dx||1;dy=dy||1

        var g=cir(100,100,r,c,'r').dx(dx).dy(dy).xy(x,y)

        g.cc(-r-10,-r-10, r*2+20, r*2+20)

        g.p=function(){


            g.f=K(function(){
                if(g.x()<0||g.y()<0||g.x()>800||g.y()>600){
                    g.XX();g.s()}
                else{ g.x(g.dx(),'+').y(g.dy(),'+')}
            },200);
            return g}

        g.s=function(){ clearInterval(g.f)}

        g.r=r



        return g}






    CIRCLE2=function(){format();s=St(800,600);s1(s)

        aA=[];  bL=Ct();s.a(bL)

        g=gy(300,300,1,1,40,'y'); s.a(g); g.p()


        g.wrp()

        s.o('D', function(s,e){
            g.dx((e.X-g.x())/10,'+')
            g.dy((e.Y-g.y())/10,'+')
            if(g.dx()>10){g.dx(10)}
            if(g.dy()>10){g.dy(10)}

        })
        kD('s',function(){  var bg=gy( g.x(), g.y(),g.dx(), g.dy()); bL.a(bg); bg.p() })


        newAst=function(){var a=ast(); a.a(); a.p()   }

        _t(10, newAst)



        s.t(function(){
            _e(aA,function(a,k){   a.u()


                _e(bL.ch(),  function(b){
                    l=b.gl( a.x(),a.y()); if(b.ht(l.x,l.y) ){a.XX(); $l('HIT')} })

                l=g.gl(a.x(), a.y())


                if(g.ht(l.x,l.y) ){   $l('hit');co()  }   })  })



    }




    CIRCLE=function(){format();
        s=St(800,600);s1(s)


        tt('f',30)



        s.a(bL=Ct())


        s.a(g=gy(300,300,1,1,40,'y'));g.p();g.wrp()


        aA=[];
        _t(10,newAst)

        s.o('D',
            function(s,e){
                var bg=gy(g.x(),g.y(),g.dx(),g.dy())
                bL.a(bg);bg.p()
                g.dx((e.X-g.x())/10,'+')
                g.dy((e.Y-g.y())/10,'+')
                if(g.dx()>10){g.dx(10)}
                if(g.dy()>10){g.dy(10)}})


        s.t(function(){
            var gx=g.x(),
                gy=g.y()

            _e(aA,
                function(a,k){

                    var ax=a.x(), ay=a.y()

                    a.u()

                    _e(bL.ch(),
                        function(b){
                            var bx= b.x(),by= b.y();
                            if(ax > bx-10&& ax<bx+10&&ay>by-10&&ay()<by+10){
                                co()
                                a.XX();//aA[k]=null;_.compact(aA)
                            }


                        })



                    if(ax>gx-40&&ax<gx+40&&ay>gy-40 && ay<gy+40){g.al(.01,'-')}




                })})}



    newAst=function(){
        var a=ast();a.a();a.p()


    }


    pntInCir=function(x,y,c){var X,Y,R; X=c.x;Y=c.y;R=c.r
        return x<X +R &&x >X -R  &&y< Y+R  &&y >Y-R}
}

GAMER=function(){

    g={r:40,x:0,y:0,dx:1,dy:1,c:0,h:1000}

    g.d=function(){
        ct.fillStyle = 'blue'
        ct.strokeStyle = 'yellow'
        ct.beginPath()

        ct.arc(g.x,g.y,g.r, 0, pi(2), false)

        ct.fill()
        ct.stroke()

    }



    g.u=function(){

        g.x+=g.dx
        g.y+=g.dy
        if(g.x<0){g.x=1180}
        if(g.y<0){g.y=580}
        if(g.x>1200){g.x=20}
        if(g.y>600){g.y=20}

        _e(coins,
            function(c,i,l){
                if(c.x>(g.x-g.r)&&(c.x<(g.x+g.r))
                    &&(c.y>(g.y-g.r))&&(c.y<(g.y+g.r))){
                    _.pluck(l,[i])
                    delete coins[i];

                    coins.push(Coin())
                    coins.push(Coin())

                    g.c+=1}})

        _e(aliens,function(a,i,l){
            if(a.x>(g.x-a.r)&&(a.x<(g.x+a.r))
                &&(a.y>(g.y-a.r))&&(a.y<(g.y+a.r))){
                _.pluck(l,[i])
                delete aliens[i]
                g.h-=1}

            _e(bullets,function(b,bi,bl){
                if(a.x>(b.x-b.r)&&(a.x<(b.x+b.r))&&(a.y>(b.y-b.r))&&(a.y<(b.y+b.r))){
                    _.pluck(list,[i])
                    delete alien[i]
                    delete aliens[i]
                    delete bullets[bi]
                    aliens.push(Alien())
                    aliens.push(Alien())}})})}

    Coin=function(){var c={
        x:_r(0,1200),y:_r(0,600),
        dx:_r(0,10)-5,dy:_r(0,10)-5,r:10}


        c.d=function(){
            ct.fillStyle='yellow'
            ct.strokeStyle='black';
            ct.beginPath();

            ct.arc(c.x,c.y,c.r,0,pi(2),false)

            ct.fill(); ct.stroke()}


        c.u=function(){
            if(c.x<0){c.x=1180}
            if(c.y<0){c.y=580}
            if(c.x>1200){c.x=20}
            if(c.y>600){c.y=20}
            c.x+=c.dx;c.y+=c.dy}
        return c}

    Alien=function(){

        var a={

            x:_r(0,1200),
            y:_r(0,600),
            dx:_r(0,10)-5,
            dy:_r(0,10)-5,
            r:25}


        a.d=function(){
            ct.fillStyle='rgba(124,252,0,0.5)'
            ct.strokeStyle='black'
            ct.beginPath()
            ct.arc(a.x,a.y,a.r,0,pi(2),false)
            ct.fill()
            ct.stroke()
            ct.fillStyle='orange'
            ct.strokeStyle='black'
            ct.beginPath()
            ct.arc(a.x,a.y,10,0,pi(2),false)
            ct.fill()
            ct.stroke()}

        a.u=function(){
            if(a.x<0){a.x=1180}

            if(a.x>1200){a.x=20}


            if(a.y<0){a.y=580}
            if(a.y>600){a.y=20}
            a.r*=1.001

            a.x+=a.dx;
            a.y+=a.dy}

        return a}


    Bullet=function(x,y,dx,dy){var b={}
        b.x=x
        b.y=y
        g.dx*=-5
        g.dy*=-5
        b.r=8;



        b.d=function(){
            ct.fillStyle = 'pink'; ct.strokeStyle = 'white';
            ct.beginPath();
            ct.arc(b.x, b.y, b.r, 0, pi(2), false);
            ct.fill(); ct.stroke()}

        b.u=function(){
            if(b.x<0){b.x=1180}
            if(b.y<0){b.y=580}
            if(b.x>1200){b.x=20}
            if(b.y>600){b.y=20}
            b.x-=b.dx;b.y-=b.dy}
        return b}


    $(function(){
        z()
        cc=xx( _c().c('b') ).Z(12)
        cc.a()
        ct=cc.x
        x=xx(ct)

        coins=[];_t(10,function(){coins.push(Coin())})
        aliens=[];_t(10,function(){aliens.push(Alien())})
        bullets=[]

        I(function(){
            x.X()

            g.d();g.u()

            _e(coins,function(c){c.d();c.u()})
            _e(aliens,function(a){a.d();a.u()})

        },100)




        x.$(function(x,y){
            g.dx+=(x-g.x)/100
            g.dy+=(y-g.y)/100})

    })


}

//c=function(){cv =document.getElementById('canvas');ct =canvas.getContext('2d')}


//gl=function(x, y) {var bbox=canvas.getBoundingClientRect();return{x: x - bbox.left * (canvas.width / bbox.width), y:y - bbox.top * (canvas.height / bbox.height) }; }
//cl=function(){ct.clearRect(0,0,cv.width,cv.height)}

anX=function(animate){
    update()
    cl()
    background()
    draw()
    go()}


//go=function(){requestAnimationFrame(an)}
ald=function (x,y,r) {x=x||100;y=y||100;r=r||100;
    ct.fillStyle = 'rgba(124,252,0,0.5)';
    ct.strokeStyle = 'black';
    ct.beginPath();
    ct.arc(x,y,r, 0, pi(2), false);

    ct.fill(); ct.stroke();
    ct.fillStyle = 'orange'; ct.strokeStyle = 'black';
    ct.beginPath();
    ct.arc(100,300, 10, 0, pi(2), false);
    ct.fill(); ct.stroke()}
