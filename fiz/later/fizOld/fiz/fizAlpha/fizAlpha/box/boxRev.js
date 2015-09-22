RevoluteJointDef = rev = function(a,b, c,d, e,f){var g=G(arguments)

    //pass in body1, body2, world-bV = body1-center
    //can also pass body1, body2, world-x, world-y
    //or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y


    var j= SuperJointDef( new BXJ.b2RevoluteJointDef() )

    var joint = j

    joint.init =joint.i = function(){
        joint.Initialize.apply(joint,  G(arguments) )
        return joint}

    //convenience functions
    joint.motor = joint.mt = function(speed, torque, enable){

        joint.speed(speed)

        joint.maxTorque( N(torque)? torque : 100)

        if( enable != '-' ){ joint.enableMotor=true }

        return joint }

    joint.limits = joint.lm= function( lowAng, upAng, enable ){

        joint.lowAng( lowAng ).upAng( upAng )

        if( enable != '-' ){ joint.enableLimit = true}

        return joint }

    if( U(c) ){ c = a.worldCenter() }

    if( O(c) ){  joint.init( a, b, c )}

    else if(N(e)){   joint.A(a).B(b).lAA( bV(c/30,d/30)).lAB( bV(e/30,f/30)) }

    else if(N(c)){    joint.init(a,b, bV(c/30,d/30)) }

    //SuperJointDef( joint )

    return joint}


revJoint=function(){
    return world.Revolute(world.ba(), world.bi())}



revJoint1=function(){return world.Revolute(
        world.baa(400, 200),
        world.bi(400, 200, 200) ).motor(1).speed(2000)  //speed
}


revJoint2=function(){return world.Revolute(
    world.bi( 400, 50, 50 ),
    world.bi( 400, 50, 50 ) ).motor(10)

}


revJoint3=function(){return world.Revolute(
    world.bi( 400, 30, 30, 50 ),  world.bi( 400, 30, 30, 50 ) ).motor(10)}




revJoint4=function(){

    return world.Revolute(

        world.bi( 400,30,10,80 ),

        world.bi( 400,30,20,160 )

        ).motor(10)

    }







Stuff={}
Stuff.Spinner = spinner=function(x,y,s,t){

    x = N(x)? x : 500

    y = N(y)? y : 200

    s = N(s)? s : 100

    t = N(t)? t : 100

    dial= world.bi(x,y,200,40)//w.a(dBD(x,y), pFx(200,40))

    rock= world.bii(x,y,10,10)//w.a(sBD(x,y), pFx(10,10))

    return world.createJoint(

        RevoluteJointDef( dial, rock ).motor(s, t) // rJt({  i:[rock, dial, dial.c()],  eM:1,  mS:-10,  mMT:100  })

    )}
Stuff.Seesaw = seesaw=function(){

    anc = world.bi(400,300,60,60)

    lev = world.bi(400,300,300,20)

    world.createJoint(

        RevoluteJointDef(

            anc,  lev,  anc.worldCenter(),  lev.worldCenter()

        ).collide(0)
    )}

//makes random rev pair
Stuff.RandomRev = refFix=function(x,y){
    x=N(x)?x:100
    y=N(y)?y:x

    b11 = world.addBody(  bx1=DynamicBodyDef(x,y), fix() )

    b22 = world.addBody(  bx2= DynamicBodyDef(x ,y ) ,fix() )

    world.createJoint(

        RevoluteJointDef( b11,b22,  b11.worldCenter(), b22.worldCenter() )  //.l(10).f(3).d(.1)//.cC(1)

    )

}
Stuff.Car = makeCar=function(){

    var car = world.bi(240,350,90,30)

    world.Rev(
        world.ba( 300, 400, 30  ),
        car
    ).speed(-500).torque(40).motor(1)

    world.Rev(
        world.ba( 200, 400,30),
        car
    ).speed(-500).torque(40).motor(1)

    return car}

ROULETTE=function(){

    mW()

    //Dynamic
    var body =  world.addBody(   DynamicBodyDef(300,300),
        [
            CircleFixture(50) ,
            PolyFixture(10,80,20,160)
        ])

    world.Rev( world.baa(300,300,100), body )}

DEMO_REV=function(){
    makeWorld()

    w.j( rev( baa(100,100), bi(100,100,100,40) ).motor(5, 1) )
    w.j( rev( baa(250,100), bi(250,100,100,40) ).motor(5, 2) )
    w.j(
        rev( baa(400,100), bi(400,100,100,40)) .motor(5, 10000)
    )

    w.j( rev( baa(550,100), bi(550,100,100,40)) .mt(20,5))
    w.j( rev( baa(700,100), bi(700,100,100,40)) .mt(20, 10))
    w.j( rev( baa(850,100), bi(850,100,100,40)) .mt(20, 10000) )

    w.j(rev( baa(100,220), bi(100,220,100,40)).limits(0, 0) )
    w.j(rev( baa(250,220), bi(250,220,100,40)).limits(0,10)  )

    w.j(rev( baa(400,220), bi(400,220,100,40)).lm(0,180)  )
    w.j(rev( baa(550,220), bi(550,220,100,40)).lm(-180,0)  )
    w.j(rev( baa(700,220), bi(700,220,100,40)).lm(-360,180)  )
    w.j(rev( baa(850,220), bi(850,220,100,40)).lm(0,1000)  )

    w.j(rev( baa(100,340), bi(100,340,100,40)).lm(0,0).mt(5,1) )
    w.j(rev( baa(250,340), bi(250,340,100,40)).lm(0,10).mt(5,2)  )
    w.j(rev( baa(400,340), bi(400,340,100,40)).lm(0,180).mt(5,10000)  )
    w.j(rev( baa(550,340), bi(550,340,100,40)).lm(-180,0).mt(20,5)  )
    w.j(rev( baa(700,340), bi(700,340,100,40)).lm(-360,180).mt(20,10)  )
    w.j(rev( baa(850,340), bi(850,340,100,40)).lm(0,1000).mt(20,10000)  )

    w.j(
        rev( baa(100,460), bi(100,460,100,40)).lm(0,0).mt(-5,1) )

    w.j(
        rev( baa(250,460), bi(250,460,100,40)).lm(0,10).mt(-5,2)  )

    w.j(
        rev( baa(400,460), bi(400,460,100,40)).lm(0,180).mt(-5,10000)  )



    world.createJoint(
        rev(
            baa(550,460), bi(550,460,100,40)
        )
            .lm(-180,0).mt(-20,5)  )

    world.createJoint(

        rev( baa(700,460), bi(700,460,100,40)).lm(-360,180).mt(-20,10)  )


    world.createJoint(

        rev(   baa( 850, 460 ), bi( 850, 460, 100, 40 )  ).lm( 0, 1000 ).mt( -20, 10000 )

    )



}

CHANGELIMITS=function(){makeWorld()

    j=world.Rev( baa(400,220), bi(500,220,200,40) )
    j.limits(0, 30)
    j.EnableLimit(true)


 setTimeout(function(){ j.limits(0,200) }, 2000)


}


CHANGEMOTOR=function(){makeWorld()

    j=world.Rev(

            world.baa(400,280),

            world.bi(500,280,200,40)
)

    j.speed(4).torque(1000000).motor(1)

    setTimeout(function(){  j.speed(-4)  }, 2000)
}

CAR=function(){makeWorld()

    //world.make.Car
    makeCar()

    //world.make.Spinner
    Stuff.Spinner(500,400)
        .enableLimits( 1 )
        .setLimits( 20, 240 )
        .enableMotor( 1 )
        //.maxMotorSpeed( 100 )  ?
        .motorSpeed( 40 )}

DEMO_GEAR=function(){makeWorld()
    world.Gear(
        world.Rev( world.baa(100,220,40), world.bi(100,220,100,20) ),
        world.Rev( world.baa(250,220), world.bi(250,220,100,20) ),
        .5
    )}

CARS=function(){}

REVPRISMGEAR=function(){


}



