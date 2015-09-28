
//brilliant demo
MATRIX1=function(){// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')

    z()

    $.div('b', 50, 50).A()

    s=St(1600,1000).a()

    // on stage enter, change background color, though you
    // cant see it here because stage fills screen
    // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
    s.o('e', co)

    //make a container
    s.ct(function(c, s){

        //the little me clicks do not hit the 'big' me underneath it.  that's normal.
        //but it does hit the container.  but this example shows off 'remove', so it only hits once
        //however, it continues to propogate on to the container. hmmm..

        c.b('me',

            function(b){
                b.sxy(.2).xy(100,80)
                b.o('$',fL('lit'),'/')  //on click, log('lit'), just once (remove listener)!

        })





// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
        c.b('me',function(b){
            b.sxy(.4).xy(100,180)

            b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop

        })






        c.b('me',function(b){
            b.sxy(1.5)
            b.o('$',fL('big'))  //on click, log('big')

 })

        //on click, log('con')
        c.o('$',  fL('con'))

    })



    s.ct(

        function(c){

            var vn=0,
                rvn=0,
                on=0,
                ron=0


            c.x(200)


            c.mg(
                function(b){
                    b.sxy(.8).xy(200,80)
                })


            c.mg(
                function(b){
                    b.sxy(.8).xy(100,280)
                })


            c.mg(
                function(b){
                    b.sxy(.8).xy(340,180)
                })

            //this shows over/out vs rollover/rollout
            //over/out get retriggered when switching between connected sprites
            //rollover/rollout does not because it is still touching 'something'

        c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
        c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
        c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
        c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})

        }

    ).MV(40)





    s.ct(function(c,s){

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




    s.ct(function(c,s){

        c.x(1400)

        c.b('me',function(b){


            //make the little me slide the entire container
            //it acts as a handle! (for its container)
            lit=b.sxy(.2).xy(100,80)
            SL(b,c)





            c.b('me',function(b){
//big me will scale the little me
                big=b.sxy(2).xy(100,180)
                SC(b,lit)

                c.b('me',function(b){ b.sxy(.6).xy(150,180)
                    SL(b)
                    RT(b,big) })
            })

        })


//guy slides stage
        c.b('guy',function(b){
            b.sxy(.4).xy(100,180)
            SL(b,s)
        })



    })




}

MATRIX=function(){// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')

    z()


    $.div('b', 50, 50).A()

    s=$stage(1600,1000).A().tick()


    // on stage enter, change background color, though you
    // cant see it here because stage fills screen
    // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
    s.on('mouseenter', co)

    s.A(

        c= new createjs.Container()

    )

    c.bm('me',

        function(b){
            //b.sxy(.2).xy(100,80)

            //b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!

        })




    //make a container
    s.ct(function(c,s){



        //the little me clicks do not hit the 'big' me underneath it.  that's normal.
        //but it does hit the container.  but this example shows off 'remove', so it only hits once
        //however, it continues to propogate on to the container. hmmm..







// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
        c.b('me',function(b){
            b.sxy(.4).xy(100,180)

            b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop

        })






        c.b('me',function(b){
            b.sxy(1.5)
            b.o('$',fL('big'))  //on click, log('big')

        })

        //on click, log('con')
        c.o('$',  fL('con'))

    })



    s.ct(

        function(c){

            var vn=0,
                rvn=0,
                on=0,
                ron=0


            c.x(200)


            c.mg(
                function(b){
                    b.sxy(.8).xy(200,80)
                })


            c.mg(
                function(b){
                    b.sxy(.8).xy(100,280)
                })


            c.mg(
                function(b){
                    b.sxy(.8).xy(340,180)
                })

            //this shows over/out vs rollover/rollout
            //over/out get retriggered when switching between connected sprites
            //rollover/rollout does not because it is still touching 'something'

            c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
            c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
            c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
            c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})

        }

    ).MV(40)





    s.ct(function(c,s){

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




    s.ct(function(c,s){

        c.x(1400)

        c.b('me',function(b){


            //make the little me slide the entire container
            //it acts as a handle! (for its container)
            lit=b.sxy(.2).xy(100,80)
            SL(b,c)





            c.b('me',function(b){
//big me will scale the little me
                big=b.sxy(2).xy(100,180)
                SC(b,lit)

                c.b('me',function(b){ b.sxy(.6).xy(150,180)
                    SL(b)
                    RT(b,big) })
            })

        })


//guy slides stage
        c.b('guy',function(b){
            b.sxy(.4).xy(100,180)
            SL(b,s)
        })



    })




}




MOUSEENTERSTAGE=function(){z()
    s=$stage(500, 500).A().tick()
    s.bm('me')
    s.on('mouseenter', function(){$('body').prepend('once<br>')}, null, true)
    s.on('mouseenter', function(){$('body').prepend('many<br>')}, null, false)}


HANDLEEVENT=function(){z()

    s=$stage(500, 500).A().tick()


    s.bm('me', function(b){me=b
        cb = b.on('pressmove', function(){this.x++})
    })


    s.bm('guy', function(b){

        b.handleEvent=function(){
            this.y++
        }

        b.on('pressmove', b)



    })



}
REMOVEEVENT=function(){z()

    s=$stage(500, 500).A().tick()


    s.bm('me', function(b){me=b
        cb = b.on('pressmove', function(){this.x++})
    })


    s.bm('guy', function(b){

        b.handleEvent=function(){
            this.y++
            me.off('pressmove', cb)
        }

        b.on('pressmove', b)

    })



}



BUBBLE=function(){z()

    stage=$stage(500, 500).A()

    output = new createjs.Text(
            "try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
            "13px courier").lWH(280,13).XY(190,10)


    background = new createjs.Shape().N("background")

    background.graphics.beginFill("red").drawRoundRect(0, 0, 150, 60, 10)


   label=new createjs.Text("click me!", "bold 24px Arial", "#FFFFFF").N('label').tA("center").tB("middle").XY(150/2, 60/2)


    button=new createjs.Container().N('button').XY(20).A(background, label)

    // setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
    // button.mouseChildren = false;

    stage.A(button, output)

    // set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:


    _.each([stage,button,label,background], function(target){
        target.on("click", handleClick, false);
        target.on("click", handleClick, true)})

    stage.update()
}


function handleClick(evt){

    if (evt.currentTarget == stage && evt.eventPhase == 1) {
        // this is the first dispatch in the event life cycle, clear the output.
        output.text = "target : eventPhase : currentTarget\n"}

    output.text += evt.target.name+" : "+evt.eventPhase+" : "+evt.currentTarget.name+"\n";

    if (evt.currentTarget == stage && evt.eventPhase == 3) {
        // this is the last dispatch in the event life cycle, render the stage.
        stage.update()}


}



//SPACE BOWLING
BOWL=function(){




    s=St(1000).a()

    //append a container to the stage
    c=Ct().ap(s)

    plX=s.w()/2
    plY=150
    plR=100

    plr=75 // this seems to determine the radius of the 'cluster' of balls
    oRng=8 //outer ring

    nRng=3// number of rings
//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1

    cr=cir(plX,plY,plR,'y').ap(c) // cr = Hx().c(plR,'y').xy(plX,plY)


    rngSp=plr/(nRng-1)


    aA=[]

   var ast=function(x,y,r,m,f){

        var a={

            x:x, y:y, r:r,  m:m,  f:f,

            vX:0, vY:0, player:false}

        return a}


    _t(nRng, function(r){

        var crR=0,
            ang=0,
            rngR=0

        if(r==nRng-1){crR=1}

        else{
            crR=oRng-(r*3)
            ang=360/crR
            rngR=plr-(rngSp*r)}

        _t(crR,function(a){var x=0,y=0

            if(r==nRng-1){x=plX;y=plY}

            else{

                x=plX+(rngR*cos((ang*a)*PI/180))
                y=plX+(rngR*sin((ang*a)*PI/180))-350

            }

            aA.push( ast(x,y,10,5,0.95) )



            cir(x,y,10,'z').ap(c)


        })

    })}





CONNECT=function(){
    m$$('location=location')
    z()
    n=0
    s=St(1000).a()
   p=cir(240,240,300,'u','x').ap(s).xy(520,500).rxy(100) //g.$(function(){g.sxy(1.5)}); g.$$(function(){g.sxy(.5)})


    c=Ct().ap(s)

    s.D(function(g,e){if(!e.u(s)){$l(n++)}})


    g=cir(140,140,200,'g','x').ap(c).xy(320,300).rxy(100) //g.$(function(){g.sxy(1.5)}); g.$$(function(){g.sxy(.5)})
    y=cir(100,100,100,'y','x').ap(c).xy(250)

    r=cir(110,110,40,'r','x').ap(c)

    o=cir(220,120,20,'o','x').ap(c)

    LS(y,c)
    SL(g)
    SL(y)
    SL(r,c)
    SL(o,r)}



GRID=function(){
    dSq=function(s,x,y){
        var r=Hx().ss(5).r(5,5,70,70,$r())
        if(x){r.x(x)}
        if(y){r.y(y)}
        return ap(r,s)}

    c=Ct().ap(s=St(1000).a()).fn(SL)



    rows=5;cols=6;sqP=12;sqS=80

    _t(rows*cols,function(i){
        var sq=dSq(c)
        sq.xy((sqS+sqP)*(i%cols),(sqS+sqP)*$M.floor(i/cols))})}




TANGLE=function(){z()

    a = $.div('r',50,50).P('a').top(50).left(50).A().pad(10)

    b = $.div('b',100,100).P('a').top(100).left(100).A().pad(10)

    c = $.div('g',200,200).P('a').top(200).left(200).A().pad(10)

    d = $.div('y',400,400).P('a').top(400).left(400).A().pad(10)

    y=function(aa,bb,cc,dd){


        if(aa && U(bb)){  aa.A().P('a') }


        if( bb ){ bb.A( aa.P('s') )  }

        if( dd ){ dd.A( cc.P('s') )  }

    }


}





ZX=function(){

    z()

    a = $.editDiv().A().C('a')

    b = $.editDiv().A().C('b')

}






BORDERS=function(){z()

    change=function(){



        $.qim('me', 100).A().borderColor('g').borderStyle('dashed')//.borderWidth(20)

            .J({"border-top-width": 10}, 1000)
            .J({"border-bottom-width": 10}, 1000)
            .J({"border-left-width": 10}, 1000)
            .J({"border-right-width": 10}, 1000)


            .J({"padding-top":10}, 1000)
            .J({"padding-bottom":10}, 1000)

            .J({"padding-left":10},1000)
            .J({"padding-right":10},1000)

            .J({"margin-top":10},1000)
            .J({"margin-bottom":10},1000)
            .J({"margin-left":10},1000)
            .J({"margin-right":10},1000)
            .J({"margin-top":0},1000)
            .J({"margin-bottom":0},1000)
            .J({"margin-left":0},1000)
            .J({"margin-right":0},1000)
            .J({"padding-top":0},1000)
            .J({"padding-bottom":0},1000)
            .J({"padding-left":0},1000)
            .J({"padding-right":0},1000)

            .J({"border-top-width":0},1000)
            .J({"border-bottom-width":0},1000)
            .J({"border-left-width":0},1000)
            .J({"border-right-width":0},1000)
    }


    $.$$(

        function(){
            z();
            _.times(10, change)}
    )

    _.times(10, change)
}


BORDERS1=function(){

   change=function(){

           qim( 'me' ).a().bc( 'g' ).bs( '-' )

           .j({bt:40},1000)

               .j({bb:40},1000)
               .j({bl:40},1000)

               .j({br:40}, 1000)
               .j({gt:40}, 1000)
               .j({gb:40}, 1000)

               .j({gl:40},1000).j({gr:40},1000).j({mt:40},1000)
           .j({mb:40},1000).j({ml:40},1000).j({mr:40},1000)
           .j({mt:0},1000).j({mb:0},1000).j({ml:0},1000).j({mr:0},1000)
           .j({gt:0},1000).j({gb:0},1000).j({gl:0},1000).j({gr:0},1000)
           .j({bt:0},1000).j({bb:0},1000).j({bl:0},1000).j({br:0},1000)
   }


    m$$(   function(){  z();   _.times(10, change)}  )

    _.times(10, change)
}



ANIMLOOP=function(){

    z()

    d= $.div('b',500,500).A()

    $(function () {


        var runIt=function(){

            d.show( "slow" )

            d.animate({ "marginLeft" : "300px" } , 2000 ).animate({ "marginLeft" : "0px" } , 2000 )

            d.hide( "slow", runIt )

        }

        runIt()
    })
}




CORNERS=function(){

   // q = dva(2, 2, 2, 2 )

   div =  q = $.div(200, 200).css({  position:'absolute',  top:200, left:200  })


    div.A(

        $.div('red', 20, 20).css({position: 'absolute'}).top(-10).left(-10),

        $.div('yellow', 20, 20).css({position: 'absolute'}).bottom(-10).right(-10),

        $.div('green', 20, 20).css({position: 'absolute'}).top(-10).right(-10),

        $.div('blue', 20, 20).css({position: 'absolute'}).bottom(-10).left(-10)

    )


    i = $.div().css({position: 'fixed', backgroundColor: 'purple', color: 'white'}).fontSize( 20).opacity(.2).textAlign('center')
        .width('100%').top( 100 )


    i.H( W() + ' * ' + H() )

    Z(function(){  i.H(  W() + ' * ' + H() )  })


    $.$( function(){

        rat( function(){ co() } , 10 )

    })



  //  grow(q)
}




grow = function(div){



     originalWidth =  div.width()
     originalHeight = div.height()


    div.on('mousedown', function(event){

        e =event
        mx= event.clientX
        my= event.clientY


        $.mouseMove( function( event ){



            div.width( originalWidth +  event.clientX - mx )
            div.height( originalHeight +  event.clientY - my )

            dd = div
        })

        $.mouseUp( function(){ $(this).off() } )

        div.children().on('mousedown',  function(event){event.stopPropagation()})

    })

}




UNIGAME=function(){z()

    isThrusting=false
    fireRate=100
    nextFire=0

    pG(

        function preload(){
            g.bn(0,0,1420,700).P2().ru(1.2)

            g.l.i('stars','/assets/misc/starfield.jpg')
            g.l.i('ship','/assets/sprites/thrust_ship2.png')
            g.l.i('jets','/assets/sprites/jets.png')
            g.l.i('bullet', '/assets/sprites/purple_ball.png')
            g.l.i('jason','/me.png')

        },

        function create(){cu=g.K()


            starfield=g.tSp(0,0,800,600,'stars').fTC(1)

            trail=g.em(0,0,1000).mP('jets').rt(0,0).a(1,0,6000).sc(1,0,1,0,6000)

            p=g.sp(200,200,'me').w(80).h(80).p2().fw()

            j=g.sp(200,300,'jason').arc().clWB(1).bo(.9).sc(1)

            bs=g.gr().arc().eB(1).mult(50,'bullet')
                .sA('checkWorldBounds',true)
                .sA('outOfBoundsKill',true)


        },

        function update(){
            isThrusting=false

            g.col(bs,j,function(){

                j.scale.x= j.scale.x -.01
                j.scale.y= j.scale.y -.01

            })



            if(cu.L()){p.rtL(100)} else if(cu.R()){p.rtR(100)} else{p.sZR()}
            if(cu.U()){p.thrust(400); isThrusting=true} else if(cu.D()){p.rv(400)}
            if(!g.lX()){starfield.tilePosition.x+=(p.vx()*16)*g.pE()}
            if(!g.lY()){starfield.tilePosition.y+=(p.vy()*16)*g.pE()}

            trail.eXY(p.x,p.y)

            var px=p.vx()*10,py=p.vy()*10;px *=-1;py *=-1

            trail.nPS(px, py).mPS(px, py)

            if(isThrusting||sqr(p.vx()*p.vx()+p.vy()*p.vy())>10){trail.start(true,3000,8)}


            if(g.aPD()){

                if(
                    g.n()>nextFire && bs.cD()>0){
                    nextFire=g.n(fireRate)
                    bs.gFD().rs(p).mTP(500)

                }}

        }
    )

}


FLAPPYYOU=function(){


    giveGravity=function(s){s.body.gravity.y=1000}

    goAway=function(s){
        s=sSp(s)
        g.tw(s).to({
            alpha:0,height:0,width:0,
            x:s.x+30,y:s.y+30},200,qIn,true)}

    die=function(s){
        s.vx(-200)
        g.tw(s).to({angle:90,x:400},1000,qIn,true)}

    flyIn=function(s){
        g.tw(s).to({y:250,x:100,angle:0},1000,qOut,true)
            .onComplete.add(giveGravity)}


    collisionHappened=function(){
        noscore=true
        showFinalScore()
        die(bird)
        pipes.forEach(goAway)
        g.input.onDown.removeAll()}




    jump=function(){
        if(bird.flyingIn){bird.flyingIn.stop();giveGravity(bird)}
        bird.vy(-350)
        g.tw(bird).to({height:40},100,None,true).to({height:50},100,None,true)
        if(bird.angling){bird.angling.stop()}
        bird.angling=g.tw(bird).to({angle:-10},80,None,true).to({angle:50},2000,None,true)}









    restartGame=function(){
        window.localStorage.setItem('flabbyBird',highScore)
        g.time.events.remove(pipeAdder)}

    addOnePipe=function(x,y){


        pipe=sSp(pipes.getFirstDead()).arc().w(100).h(100).rs(x,y).vx(-200)

        pipe.outOfBoundsKill=true

        return pipe}

    addRowOfPipes=function(){
        var hole = Math.floor(rnd() * 5) + 1;
        for (var i = 0; i < 8; i++) {
            if (i != hole && i != hole + 1) {nextPipe =  addOnePipe(400, i * 60 + 10)}}}

    addToScore=function(){if (noscore === false) {labelScore.content = ++score;

        if (score == highScore) {labelHighScore.moveScore = g.tw(labelHighScore).to({ x: 20 }, 300,
            Phaser.Easing.Sinusoidal.In, true)}

        if (score>=highScore){labelHighScore.content=highScore=score}}}



    showFinalScore=function(){

        text=score>=highScore?labelHighScore:labelScore

        otherText=text===labelScore?labelHighScore:labelScore

        if(text.moveScore){text.moveScore.stop()}

        style=text.style
        style.font = '80px Arial'
        text.setStyle(style)


        g.tw(text).to({x: 200 - ((text.width + 40) / 2),y: 245 - ((text.height + 40) / 2)}, 150, qOut, true);


        g.tw(otherText).to({alpha:0},50,None, true)
    }


    pG(

        function preload(){
            g.ARC()
            g.l.i('bird', '/me.png')
            g.l.i('pipe', '/me.png')},

        function create(){
            noscore=false

            bird=g.sp(0, 0, 'bird').arc().w(100).h(100).ang(70).A(-0.2, 0.5)

            flyIn(bird)
            bird.body.bounce.setTo(1, 1)
            downHandler = g.input.onDown.add( jump, this)
            pipes = g.gr().mult(20,'pipe');
            pipeAdder=g.lp(1500,addRowOfPipes, this)
            highScore=window.localStorage.getItem('flabbyBird')||0
            score=0
            style = {font: '40px Arial',fill: '#ffffff',stroke: '#000000',strokeThickness: 5}
            labelScore =  g.tx(20, 20,  score, style);
            highScoreStyle = {font: '40px Arial', fill: '#D2BE27',stroke: '#000000',strokeThickness: 5}
            labelHighScore = g.tx(320, 20,  highScore, highScoreStyle)
            currentPipe = null;
            nextPipe = null},

        function update(){


            if(currentPipe==null){currentPipe=nextPipe}
            if(currentPipe!=null&&currentPipe.x<100){
                addToScore()
                currentPipe=nextPipe}

            if(!bird.inWorld){restartGame()}
            else{g.col(bird,  pipes, collisionHappened, null, this)}})

}
FLAPPYYOU1=function(){
    z()

//     var col = require('rancol');

    game = Game(400, 490, Phaser.AUTO, 'game')


    giveGravity = function (s) {s.body.gravity.y = 1000;}


    goAway = function (s){s=sSp(s)
        s.game.add.tween(s).to({
            alpha: 0,
            height: 0,
            width: 0,
            x: s.x + 30,
            y: s.y + 30
        }, 200, Phaser.Easing.Quadratic.In, true);}

    die = function (s) {
        s.body.velocity.x = -200;
        s.game.add.tween(s).to({angle: 90,x: 400}, 1000, Phaser.Easing.Quadratic.In, true)}


    flyIn = function (s) {
        s.flyingIn = s.game.add.tween(s).to({
            y: 250
        }, 1000, Phaser.Easing.Quadratic.Out, true);

        s.flyingIn.onComplete.add(giveGravity.bind(this, s));

        g.tw(s).to({
            x: 100,
            angle: 0
        }, 1000, Phaser.Easing.Quadratic.Out, true)}

    var gameState = {}

    gameState.main = function () {};
    gameState.main.prototype = {

        preload: function () {g=this.g=$G(this.game).ARC()
            //this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
            // this.game.stage.scale.setShowAll();
            //this.game.stage.scale.refresh();

            this.game.load.image('bird', '/me.png');
            this.game.load.image('pipe', '/me.png');
        },

        create: function () {
            this.noscore = false;
            this.bird = g.sp(0, 0, 'bird').arc().w(100).h(100)
            this.bird.angle = 70
            this.bird.anchor.setTo(-0.2, 0.5);

            flyIn(this.bird)

            this.bird.body.bounce.setTo(1, 1);

            this.downHandler = this.game.input.onDown.add(this.jump, this);

            this.pipes = g.gr()

            this.pipes.mult(20, 'pipe');

            this.pipeAdder = this.game.time.events.loop(1500, this.addRowOfPipes, this)

            this.highScore = window.localStorage.getItem('flabbyBird')||0
            this.score = 0
            var style = {font: '40px Arial',fill: '#ffffff',stroke: '#000000',strokeThickness: 5}

            this.labelScore = this.g.tx(20, 20, this.score, style);

            var highScoreStyle = {
                font: '40px Arial',
                fill: '#D2BE27',
                stroke: '#000000',
                strokeThickness: 5}

            this.labelHighScore = this.game.add.text(320, 20, this.highScore, highScoreStyle);
            this.currentPipe = null;
            this.nextPipe = null},

        update:function(){
            this.checkPipes()
            if(!this.bird.inWorld) {this.restartGame()}
            else{g.col(this.bird, this.pipes, this.collisionHappened, null, this)}},


        collisionHappened: function(){
            this.noscore = true
            this.showFinalScore()
            die(this.bird)
            this.pipes.forEach(goAway);
            this.game.input.onDown.removeAll()},

        checkPipes: function(){
            if (this.currentPipe== null) {this.currentPipe = this.nextPipe}
            if (this.currentPipe!= null && this.currentPipe.x < 100) {
                this.addToScore()
                this.currentPipe=this.nextPipe}},


        jump:function(){
            if (this.bird.flyingIn) {
                this.bird.flyingIn.stop();
                giveGravity(this.bird);
            }

            this.bird.body.velocity.y = -350;
            this.game.add.tween(this.bird)
                .to({ height: 40 }, 100, Phaser.Easing.Linear.None, true)
                .to({ height: 50 }, 100, Phaser.Easing.Linear.None, true);


            if (this.bird.angling) {
                this.bird.angling.stop();
            }

            this.bird.angling = this.game.add.tween(this.bird)
                .to({ angle: -10 }, 80, Phaser.Easing.Linear.None, true)
                .to({ angle: 50 }, 2000, Phaser.Easing.Linear.None, true);
        },

        restartGame:function(){
            window.localStorage.setItem('flabbyBird', this.highScore);
            this.game.time.events.remove(this.pipeAdder);
            this.game.state.start('main');
        },

        addOnePipe:function(x,y){
            var pipe =  sSp(this.pipes.getFirstDead()).arc().w(100).h(100)

            pipe.reset(x, y);
            pipe.body.velocity.x = -200;
            pipe.outOfBoundsKill = true;

            return pipe;
        },

        addRowOfPipes:function(){
            var hole = Math.floor(Math.random() * 5) + 1;
            for (var i = 0; i < 8; i++) {
                if (i != hole && i != hole + 1) {
                    this.nextPipe = this.addOnePipe(400, i * 60 + 10);
                }
            }
        },

        addToScore:function(){
            if (this.noscore === false) {
                this.labelScore.content = ++this.score;

                if (this.score == this.highScore) {
                    this.labelHighScore.moveScore = this.game.add.tween(this.labelHighScore).to({ x: 20 }, 300, Phaser.Easing.Sinusoidal.In, true);
                }

                if (this.score >= this.highScore) {
                    this.labelHighScore.content = this.highScore = this.score;
                }
            }
        },

        showFinalScore:function(){
            var text = this.score >= this.highScore ? this.labelHighScore : this.labelScore;
            var otherText = text === this.labelScore ? this.labelHighScore : this.labelScore;

            if (text.moveScore) {
                text.moveScore.stop();
            }

            var style = text.style;
            style.font = '80px Arial';
            text.setStyle(style);

            text.game.add.tween(text).to({
                x: 200 - ((text.width + 40) / 2),
                y: 245 - ((text.height + 40) / 2)
            }, 150, qOut, true);

            otherText.game.add.tween(otherText).to({
                alpha: 0
            }, 50,  None, true);
        }
    }

    game.state.add('main', gameState.main);
    game.state.start('main')


}





SPACEGAME=function(){z()

    game=Game(640,480,Phaser.CANVAS,"",{preload:preload, create:create, update:update})

    spikesAmount=8
    xSpeed=4
    jumpHeight=40
    jumpWidth=120
    jumpRotation=180
    jumpTime=0
    isJumping=false
    degToRad=0.0174532925
    flY=[92,184,276,368,460]
    cFl=0
    flH=20
    lSt=0
    lEnd=640



    function preload(){g=$G(game)
        g.l.i("square","/me.png")
        g.l.i("spike","/guy.png")}

    function create(){

        var fl=g.gx(0,0).lS(flH,
            0x440044,1)


        _t(_z(flY),function(i){
            fl.mT(lSt,flY[i]+flH/2).lT(lEnd,flY[i]+flH/2)})

        p=g.sp(lSt,flY[cFl]-g.gI("square").height/2,"square").A()

        spikesGroup=g.gr()

        _t(spikesAmount,function(i){

            spikesGroup.add(

                g.sp(

                    flr(rnd()*400)+120,

                    flY[ flr(rnd()*_z(flY)) ]  -  g.gI("spike").height/2,

                    "spike"

                ).A()
            )})


        g.oD(function jump(){if(!isJumping){jumpTime=0; isJumping=true}

        }, this)}





    function update(){


        mod=cFl%2

        p.x += xSpeed*(1 - 2*mod)


        if(p.x>lEnd&&mod==0||p.x<lSt&&mod==1){cFl++;  // move onto next floor
            // if we just finished the lowest floor...
            if(cFl>_z(flY)-1){cFl=0}// start the game again

            mod=cFl%2

            isJumping=false;
            p.rotation=0;
            p.x=lEnd*mod+lSt*(1-mod);
            p.y=flY[cFl]-g.gI("square").height/2}

        if(isJumping) {
            // calculating the number of frames we will be jumping
            jumpFrames=jumpWidth/xSpeed;
            // calculating how many degrees should the square rotate at each frame
            degreesPerFrame=jumpRotation/jumpFrames*(1-2*mod);
            // calculating how may radians we have to apply to sine trigonometry function to simulate player jump

            radiansPerFrame=(180/jumpFrames)*degToRad
            // anohter frame jumping...
            jumpTime++;
            // updating rotation
            p.angle+=degreesPerFrame;
            // updating y position
            p.y=flY[cFl]-g.gI("square").height/2-jumpHeight*Math.sin(radiansPerFrame*jumpTime);
            // if we jumped enough...
            if(jumpTime==jumpFrames) {
                // ... just stop jumping
                isJumping=false;
                p.y=flY[cFl]-g.gI("square").height/2}}


        g.ol(p,spikesGroup,function(){$l('col!')
            mod=cFl%2
            isJumping=false
            p.rotation=0
            p.x=lEnd*mod+lSt*(1-mod)
            p.y=flY[cFl]- g.gI("square").height/2
        })}








}













function launcher() {

    ANGLEPOINTER = function () {

        pG(
            function preload() {
                g.l.i('ar', '/assets/sprites/arrow.png')
            },


            function create() {

                g.ARC()

                s = g.sp(400, 300, 'ar').A(.5, .5).arc()

            },


            function update() {

                s.rTP()

                //s.mTP(200)

            },


            function render() {
                g.db.spI(s, 32, 32)
            }
        )


    }


    SHOOTPOINTER = function () {
        z()

        game = Game(800, 600, Phaser.CANVAS, 'phaser-example', {
            preload: preload,
            create: create,
            update: update,
            render: render
        });

        function preload() {
            g = $G(game).ARC()

            g.l.i('ar', '/assets/sprites/arrow.png');
            g.l.i('bullet', '/assets/sprites/purple_ball.png')


        }


        fireRate = 100
        nextFire = 0

        function create() {

            bs = g.gr().arc().eB(1).mult(50, 'bullet')
                .sA('checkWorldBounds', true)
                .sA('outOfBoundsKill', true)

            s = g.sp(400, 300, 'ar').arc().aR(0).A().clWB(1)

        }


        function update() {

            //sp.rt(g.aTP(sp))

            s.rtP()

            if (g.aPD()) {

                if (
                    g.n() > nextFire && bs.cD() > 0) {

                    nextFire = g.n(fireRate)

                    bs.gFD().rs(s.x - 8, s.y - 8).mTP(500)// g.mTP(b,300)

                    s.mTP(200)

                }
            }

        }


        function render() {
            g.db.t('Active Bullets: ' + bs.countLiving() + '/' + bs.total, 32, 32)
            g.db.spI(s, 32, 450)
        }
    }


    LAUNCHER = function () {


        pG(
            function preload() {
                catchFlag = false
                launchVelocity = 0

                g.bc('#0072bc').ARC(200)
                g.l.i('analog', '/assets/tests/fusia.png')
                g.l.i('arrow', '/assets/sprites/longarrow2.png')
                g.l.i('ball', '/assets/sprites/pangball.png')
            },

            function create() {
                gx = g.add.graphics(0, 0)
                gx.beginFill(0x049e0c)
                gx.drawRect(395, 350, 10, 250)

                analog = g.sp(400, 350, 'analog').arc().w(8).al(0).rt(220).A(.5, 0).aGr(0)

                arrow = g.sp(400, 350, 'arrow').arc().A(.1, .5).aGr(0).al(0)
                arrow.body.moves = false

                //ball=g.sp(100,400,'ball').arc().A(.5,.5).clWB(1).bo(.9,.9).iE(1)

                ball = g.sp(100, 400, 'me').arc().A(.5, .5).clWB(1).bo(.9, .9).iE(1).w(100).h(100)

                ball.ipS(0, true).oID(set).oIU(launch)

            },


            function update() {

                arrow.rt(g.anB(arrow, ball))

                if (catchFlag == true) {
                    //Track the ball sprite to the mouse

                    ball.x = g.iX()
                    ball.y = g.iY()

                    arrow.al(1)
                    analog.al(.5).rt(arrow.rt() - 3.14 / 2).h(g.dTP(arrow))
                    launchVelocity = analog.h()
                }

            },


            function render() {

                g.db.text("Drag the ball and release to launch", 32, 32);

                g.db.bodyInfo(ball, 32, 64);

                // g.db.spriteInfo(ball, 32, 64);
                // g.db.text("Launch Velocity: " + parseInt(launchVelocity), 32, 250);

            })

        function set(ball, pointer) {
            ball.mvs(0).vxy(0, 0).aGr(0)
            catchFlag = true
        }


        function launch() {

            catchFlag = false
            ball.mvs(1)
            arrow.al(0)
            analog.al(0)

            Xvector = (arrow.x - ball.x) * 3
            Yvector = (arrow.y - ball.y) * 3


            ball.aGr(1).vxy(Xvector, Yvector)

        }


    }


    LAUNCHER1 = function () {
        z()
        catchFlag = false
        launchVelocity = 0


        game = Game(800, 600, Phaser.CANVAS, 'phaser-example', {
            preload: preload, create: create, update: update, render: render

        })


        function preload() {
            g = $G(game).bc('#0072bc').ARC(200)
            g.l.i('analog', '/assets/tests/fusia.png')
            g.l.i('arrow', '/assets/sprites/longarrow2.png')
            g.l.i('ball', '/assets/sprites/pangball.png')
        }


        function create() {
            gx = g.add.graphics(0, 0)
            gx.beginFill(0x049e0c)
            gx.drawRect(395, 350, 10, 250)
            analog = g.sp(400, 350, 'analog').arc().w(8).al(0).rt(220).A(.5, 0).aGr(0)
            arrow = g.sp(400, 350, 'arrow').arc().A(.1, .5).aGr(0).al(0)
            arrow.body.moves = false
            ball = g.sp(100, 400, 'ball').arc().A(.5, .5).clWB(1).bo(.9, .9).iE(1)
            ball.ipS(0, true).oID(set).oIU(launch)

        }


        function set(ball, pointer) {
            ball.mvs(0).vxy(0, 0).aGr(0)
            catchFlag = true
        }


        function launch() {

            catchFlag = false

            ball.mvs(1)
            arrow.al(0)
            analog.al(0)
            Xvector = (arrow.x - ball.x) * 3
            Yvector = (arrow.y - ball.y) * 3
            ball.aGr(1).vxy(Xvector, Yvector)
        }


        function update() {

            arrow.rt(g.anB(arrow, ball))

            if (catchFlag == true) {
                //Track the ball sprite to the mouse


                ball.x = g.iX()
                ball.y = g.iY()

                arrow.al(1)
                analog.al(.5).rt(arrow.rt() - 3.14 / 2).h(g.dTP(arrow))
                launchVelocity = analog.h()
            }
        }


        function render() {

            g.db.text("Drag the ball and release to launch", 32, 32);

            g.db.bodyInfo(ball, 32, 64);

            // g.db.spriteInfo(ball, 32, 64);
            // g.db.text("Launch Velocity: " + parseInt(launchVelocity), 32, 250);

        }
    }

    LAUNCHERFOLLOW = function () {
        z()

        game = Game(800, 600, Phaser.CANVAS, 'phaser-example', {
            preload: preload,
            create: create,
            update: update,
            render: render
        });

        function preload() {
            g = $G(game).ARC().bn(0, 0, 3400, 1000)

            g.l.i('background', '/assets/misc/starfield.jpg')
            g.l.i('player', '/assets/sprites/phaser-dude.png')
            g.l.i('analog', '/assets/tests/fusia.png')
            g.l.i('arrow', '/assets/sprites/longarrow2.png')
        }


        catchFlag = false

        launchVelocity = 0

        function create() {


            g.tSp(0, 0, 3400, 1000, 'background')

            analog = g.sp(200, 450, 'analog').w(8).rt(220).al(0).A(0.5, 0.0)

            arrow = g.sp(200, 450, 'arrow').A(0.1, 0.5).al(0)

            p = g.sp(150, 320, 'player').arc().A().clWB(1).bo(0.9).drg(20, 20).iE(1).ipS().oID(set).oIU(launch);

            g.f(p, TopDown)
        }


        function set(p, pointer) {
            catchFlag = true
            g.f(null)
            p.mvs(0).vxy(0, 0)
            arrow.rs(p)
            analog.rs(p)
        }

        function launch() {

            catchFlag = false;
            p.mvs(1).vxy((arrow.x - p.x) * 3, (arrow.y - p.y) * 3)
            g.f(p, TopDown);

            arrow.al(0)
            analog.al(0)

        }

        function update() {


            arrow.rtB(p) // arrow.rt(  g.anB(arrow, p) )

            if (catchFlag == true) {

                p.x = g.iX()
                p.y = g.iY()

                arrow.al(1)
                analog.al(.5)

                analog.rt(arrow.rt() - 3.14 / 2)
                analog.height = g.dB(arrow, p)
                launchVelocity = analog.h()

            }
        }

        function render() {

            g.db.text("Drag the sprite and release to launch", 32, 32, 'rgb(0,255,0)');
            g.db.cameraInfo(g.camera, 32, 64);
            g.db.spriteCoords(p, 32, 150);
            g.db.text("Launch Velocity: " + parseInt(launchVelocity), 550, 32, 'rgb(0,255,0)')
        }
    }

}


function guysMap(){eG=function(){ke('eG')}
    mG=function(){ke('mG')}
    testGuys={moe:{x:20,y:100},larry:{x:20,y:130},curly:{x:20,y:10}}




    moveGuy=function(){
        qi.o(function(){ke('guy','up')})
        qi.o(function(){ke('guy','down')})
        qi.o(function(){ke('guy','left')})
        qi.o(function(){ke('guy','right')})
        qi('up').o(function(){ke('mG','u')})
        qi('down').o(function(){ke('mG','d')})
        qi('left').o(function(){ke('mG','l')})
        qi('right').o(function(){ke('mG','r')})}




    mapGuys=function(sGs){

        upsert=function(g,s,f){Gs=$w['Gs']||[]

            var G=_W(Gs,{u:g.u})[0]
            if(G){xy(G,g)} else {c.b(g.m,
                function(b){
                    b.u=g.u
                    xy(g,b)
                    if(b.u==s){p=b;sxy(b,1.5);b.T()}
                    b.$$(function(g){alert(g.u)})
                    Gs.push(b)
                    if(f){f(b)}},1)}
            return G}

        upsert({n:'woah',x:1,y:1})
        upsert({n:'weirdo',x:30,y:40})
        upsert({n:'moe',x:0,y:0});


        _e(mGs, function(g){if(!sGs[g.un]){c.s.rmvCh(g)}})


        _e(sGs,function(g){if(mGs[g.un]){mGs[g.un]}})

        _e(m,function(c,n){upsert({n:n,x:c.x,y:c.y})})}


    Guys=function(){


        Gs=Gs||Gs=[]
        makeGuy=function(n,x,y){

            n=n||'larry'
            x=N(x)?x:10
            y=N(y)?y:x

            return{n:n,x:x,y:y} }

        Gs.push(makeG('bob',100))
        Gs.push(makeG('sal',20,30))

        return GS}


    l('heads');

    guys = {}; gone = lopper(guys);
// m =  {   moe: { x: 20, y: 100}    ,  larry:    { x: 20, y: 130}    ,
// curly:  { x: 20, y: 10}        };

    updateMap = function(m){
        li('updateMap');
    }

    d(m); //2step process for client to update map based on server new-map push

    var upsert=function(guy){
        if(guys[guy.name]){guys[guy.name].x = guy.x;
            guys[guy.name].y = guy.y}
        else {guys[guy.name]=plop('me',guy.x, guy.y)}}
    _.e (guys, function(c,name,l) {if(!m[name]){gone(name);
        l('removed:' + name)}})
    _.e(m, function(c, name){
        upsert({name: name, x: c.x, y: c.y })})}
//  upsert({name: 'woah', x:1, y:1})  // updateMap(m);
k.on('mapUpdate', function(m){updateMap(m)})

$('#up').click(function(){k.emit('moveGuy','up')});
$('#down').click(function(){k.emit('moveGuy','down')});
$('#left').click(function(){k.emit('moveGuy','left')});
$('#right').click(function(){k.emit('moveGuy','right')});
moveGuy=function(){k.emit('moveGuy')}
// k.on('face', function(face){     })
//  gx.me.x = face.x;  gx.me.y = face.y // k.emit('face')

k.emit('enterGame');




guys = {};  gone = lopper(guys); // m =  {   moe: { x: 20, y: 100}    ,
// larry:    { x: 20, y: 130}    ,   curly:  { x: 20, y: 10}        };




upsert = function(guy){   if (guys[guy.name]){
    guys[guy.name].x = guy.x; guys[guy.name].y = guy.y }
else { guys[guy.name] = plop( 'me' , guy.x, guy.y)  } }


function updateMap(m){         //c=coords, l=l  m=guysM


    _.e(guys, function (c, n, l) {
        if (!m[n]) {$l('removing:'
        + n); gone(n)  }   }   )

    _.e(m, function(c, n){
        upsert({n:n, x:c.x,y:c.y   }); })}


//  upsert({name: 'woah', x:1, y:1})






k.on('mapUpdate', function(m){updateMap(m)})// updateMap(m);

enterGame = function(){ k.emit('enterGame') }  ;
enterGame(); //k.on('enterGame', enterGame);
$('#up').click(   function(){k.emit('moveGuy','up')});
$('#down').click(function(){
    k.emit('moveGuy','down')})//moveGuy = function(){k.emit('moveGuy')}
$('#left').click(function(){k.emit('moveGuy','left')});
$('#right').click(function(){k.emit('moveGuy','right')})



isGuyInMap = function(g,m){
    _e(m,
        function(player){
            if(g.name==player.name){

                $l('yes in map'); return guy}})

    $l(guy.name + ': not in map');

    return false}


_e(guys,
    function(player){
        if (!(isGuyInMap(player, map))){
            stage.removeChild(guys[player])}})}


k.on('m', function(d){updateMap(d)})
upsert({name: 'weirdo', x: 30, y: 40}) ;
upsert({name: 'moe', x: 0, y: 0})     ;
function map (sGuys){
    _.e(mGuys, function(guy){
        if (!sGuys[guy.username]){stage.removeChild(guy)}    })
    _.e(sGuys, function(guy){
        if (mGuys[guy.username]){mGuys[guy.username]}  }) }

//myGuys is an array of 'guy objects' ... username: '',  x,  y



// guys
$('#up').click(function(){k.emit('move',{dir: 'up', un: un}));
    $('#down').click(function(){
        k.emit('move',{dir: 'down', un: un})})
    $('#left').click(function(){k.emit('move',{dir: 'left', un: un})});
    $('#right').click(function(){k.emit('move',{dir: 'right', un: un})})
    k.emit('warp')


    //client receives guysArr
    k.on('map', function(guysArr){

        _.e(guysArray, function(guy){

            remove/make non-visbile all guys from myarray that are not in guysArray

            for _.e guy in guysArray,
            if he is in myarray, update his position/make visible
            if not, addhim to myarray


        })
        stage.addChild(p.me);
        p.me.x = 200
        p.me.y = 100

    })
}