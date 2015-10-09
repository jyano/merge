b2d.p()
mouseJoint()
function mouseJoint(){
    b2d.mJ=function(body, tX,tY){
        if(O(tX)){tY=tX.y;tX=tX.x}
        var md = new b2d.Joints.b2MouseJointDef
        md.bodyA = w.GetGroundBody()
        md.bodyB = body
        md.target = V(tX, tY)
        md.collideConnected = true
        md.maxForce = 1000 * body.GetMass()
        md.dampingRatio = 0
        return md}
    mJ.tg=function(x,y){
        if (U(x)) {return this.GetTarget().m()}
        this.SetTarget(V(x, y).div())
        return this
    } // world mouse down vs canvas mouse down!!! // canvas mouse down just uses $.oMD
    w.mJ = function(){var w=this, g=G(arguments), o, j,

        mJD = new b2d.Joints.b2MouseJointDef

        dR=0
        mF=50000000

        o={

            a:w.GetGroundBody(),

            b:g.f, x:g.s, y:g.t,

            dR: N(g[3], dR),

            mF: N(g[4], mF),

            cl: g.N? true : false

        }


        mJD.bodyA = o.a
        mJD.bodyB = o.b

        mJD.target = V(o.x, o.y,'-')
        mJD.dampingRatio = o.dR
        mJD.maxForce = o.mF
        mJD.collideConnected = o.cl

        return w.J(mJD)
    }
}
jD.A=  function(a){this.bodyA=a; return this}
jD.B= function(b){this.bodyB=b; return this}
jD.AB=function(a,b){return this.A(a).B(b)}
jD.aV= jD.lAA =function(){var pJD=this, g=G(arguments)
    pJD.localAnchorA=V(g[0],g[1]).div()
    return pJD}
jD.bV= jD.lAB =function(){var pJD=this, g=G(arguments)
    pJD.localAnchorB =  V(g[0],g[1]).div()
    return pJD}
jD.i= jD.init = function(){//joint.i=
    this.Initialize.apply(this,arguments)
    return this}
jD.cC =jD.cl= jD.coll = jD.collide =  function(a){var jD=this
    jD.collideConnected = a?true:false
    return jD}
j.i= j.init=function(){var j=this
    j.Initialize.apply(j, G(arguments))
    return j
}
j.a=function(a){
    if(U(a)){ return this.GetAnchorA().mult() }
    else {alert ('j.A cannot set')}}
j.b=function(a){
    if(U(a)){ return this.GetAnchorB().mult() }
    else {alert ('j.B cannot set')}}
j.A=function(a){return this.GetBodyA() }
j.B=function(a){return this.GetBodyB() }
j.a=function(a){return this.GetAnchorA().m() }
j.b=function(a){ return this.GetAnchorB().m() }
j.W=function(){return this.A().W()}
j.T=function(){return this.GetType()}
b.j= b.joint = function(){
    return this.GetJointList().joint
}
j.destroy=function(){
    var j = this.W().DestroyJoint(this)
    this.destroyed=true
    return j}
b.destroyAllJoints = function(){
    var b=this,
        toDestroy = [],
        je = b.j()

    while (je) {
        toDestroy.push(je.joint)
        je = je.next
    }
    _.e(toDestroy, function (j) {
        w.DestroyJoint(j)})

    return this
}
w.dJ = w.j = w.destroyJoint = function (a) {var w=this
    w.DestroyJoint(a);
    return w
}
w.cJ = w.J = w.joint = w.createJoint = function (a) {var w=this,
      j = this.CreateJoint(a)
    return  j
}
j.target = function(a,b){var j=this
    j.SetTarget(V(a,b))
    return j}//mouse

w.colBalls=function(){var w=this
    r = w.D(300, 300, 'r', 12).DFB(1,0.1,1)
    b = w.D(400, 300, 'b', 12).DFB(1,0.1,1)
    y = w.D(500, 300, 'y', 12).DFB(1,0.1,1)
    g = w.D(600, 300, 'g', 12).DFB(1,0.1,1)
    p = w.D(700, 300, 'p', 12).DFB(1,0.1,1)
    o = w.D(800, 300, 'o', 12).DFB(1,0.1,1)
    return w}
/*

 j.maxForce = j.mMF = j.mF = function (a, b, c) {
 this.SetMaxMotorForce(a, b, c);
 return this
 }
 j.lm = j.limits = j.setLimits = j.sL = function (a, b) {

 a = N(a) ? a : 20

 b = N(b) ? b : 180

 j.SetLimits(tRad(a), tRad(b))

 return j
 }
 j.enableLimits = j.enableLimit = j.eL = function (a) {
 this.EnableLimit(a ? true : false)
 return this
 }
 j.W = function () {
 return this.GetBodyA().GetWorld()
 }

 j.enabMot = function (a) {
 this.EnableMotor(a);
 return this
 }
 j.mot = function (speed, maxForce) {
 if (speed == '-') {
 this.EnableMotor(false);
 return this
 }
 speed = N(speed) ? speed : 100
 maxForce = N(maxForce) ? maxForce : 10000000
 this.enabMot(true).maxForce(maxForce).speed(speed)
 }



*/
b2d.p()
dJ.fq=  dJ.freq= function(fq){var j=this
    if(U(fq)){return j.GetFrequency()}
    j.SetFrequency(fq)
    return j}
dJ.l=   dJ.len= function(a){var j=this, g=G(arguments),
    l = j.GetLength() * 30
    if(g.u){return l}
    j.SetLength(
        _.upd(j,g.f,g)/30)
    return j
}
dJ.d=   dJ.damp= function(dR){
    if(U(dR)){return this.GetDampingRatio()}
    this.SetDampingRatio(dR)
    return this
}
/*
 jd.freq=  function(a){
 if(U(a)){return this.frequencyHz}
 this.frequencyHz=a;return this
 }
 jd.len=function(len){
 if(U(len)){return this.length*30}
 this.length=len/30
 return this}
 jd.damp = function(a){if(U(a)){return this.dampingRatio}
 this.dampingRatio=a;return this}

 */
j.shrink=function(){var j=this
    j.len(0.97,'*')
    return j
}

b2d.dJ=function(){var g=G(arguments),jD,o

    o = { a:g.f, b:g.s }

    if(N(g.t)){
        o.ancA = V(g.t, g[3] )
        o.ancB = V(g[4], g[5] )
    }

    if(O(g.t)){ o.ancA = V(g.t); o.ancB = V(g[3]) }

    o.ancA = o.ancA || o.a.wC()
    o.ancB = o.ancB || o.b.wC()


    jD = new b2d.Joints.b2DistanceJointDef
    jD.Initialize( o.a, o.b, o.ancA.d(), o.ancB.d() )

    return jD
}
w.Chain= function(fn){var w=this
    var chain = {
        JS:[],
        NS:[]
    }
    chain.eJ=function(fn){
        _.e(this.JS, fn)
        return this
    }
    chain.eN=function(fn){
        _.e(this.NS, fn)
        return this
    }
    chain.f=function(fq){return this.eJ(function(j){j.fq(fq)})}
    chain.d=function(d){return this.eJ(function(j){j.d(d)})}
    chain.l=function(l){return this.eJ(function(j){j.l(l)})}
    chain.j=function(){var g=G(arguments)
        var j=w.J(  $a(b2d.dJ, g)  )

        this.JS.push(j)
        return j
    }

    chain.J=function(o){

        var j =  this.j(o.a,  o.b)

        if(N(o.f)){j.fq(o.f)  }
        if(N(o.d)){j.d(o.d)  }
        if(N(o.l)){j.l(o.l)  }
        return j

    }
    return chain
}

/* overlap??
 http://www.box2d.org/manual.html - also has other stuff
 b2Transform xfA = …, xfB = …;

 bool overlap = b2TestOverlap(shapeA, indexA, shapeB, indexB, xfA, xfB);
 */
//body.GetTransform()
//body.GetFixtureList().GetShape()
w.dJ=function(){var w=this,g=G(arguments),jd,j,o

    o= g.O?g.f  : _.x(
        {a: g.f, b: g.s},
        O(g[3])? {av: g.t, bv:g[3], l:g[4], f:g[5], d:g[6]} :
            O(g.t)?{av: g.t, l:g[3], f:g[4], d:g[5]} :
            {l:g.t, f:g[3],d:g[4]}
    )

    b2d.dJ=   function(){var g=G(arguments), dJD=new b2d.Joints.b2DistanceJointDef


        dJD.i=function(a, b, aV, bV){var jd=this, g=G(arguments), o

            o = g.O ? g.f: { a: g.f,  b: g.s,  aV: g.t,  bV: g[3] }

            if(o.av){ o.aV=  o.a.wC().add( o.av || V() ) }

            else { o.aV = o.aV || o.a.wC() }

            o.bV = o.bv ? o.b.wC().add( o.bv || V() ) : o.bV || o.b.wC()

            if(g.n){

                o.aV = o.aV.d()
                o.bV = o.bV.d()
            }
            //////////////////////////////////
            jd.Initialize(o.a, o.b, o.aV, o.bV)
            /////////////////////////
            if(o.cl){jd.cl(true)}

            return jd

        }

        if(g.f){dJD.i(g.f,'-')}

        return dJD

    }


    jd = b2d.dJ(o)
    if(o.cl){jd.cl(1)}
    j= w.J(jd).fq(N(o.f,0)).d(N(o.d,0))
    if(N(o.l)){j.l(o.l)}
    return j

}
b.dJ=  function (nxB) {var b=this, w=b.W()
    w.dJ(b, nxB)
    return nxB
}

w.spg=  function (a,b){var w=this;
    a=a|| w.D(150,150,'b',50)
    b=b|| w.S(180,150,'w',50,50)
    return w.dJ({a:a,b:b,l:1,f:2})
}
w.brg=  function(x,y){var w=this,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10
    x = N( x,400 );
    y = N( y,100)
    FIRST= w.S(x,y,10)
    LAST = w.S(x+700,y,'b',10)

    b2 = wood()
    b3 = wood()
    b4 = wood()
    b5 = wood()
    b6 = wood()
    b7 = wood()
    b8 = wood()
    b9 = wood()

    _.e([
            [FIRST,b2],
            [b2,b3],[b3,b4],[b4,b5],[b5,b6],[b6,b7],[b7,b8],[b8,b9],
            [b9,LAST]
        ],
        function(p){
            w.dJ({
                a:p[0],b:p[1],
                l:6,f:5,
                coll:1})})

    function wood(){
        return w.D(100,100,'d',90,60).d(1).fixRot()}
}
j.wU= j.wu= j.wind=function(){var j=this,wound
    cjs.t(function(){var l,m
        m=wound?1.01:.99
        l=j.l()*m
        j.l(l*m)
        if (l<5){wound=1}
        if (l>200){wound=0}})}

//default freq is 0.  but thats like freq 10000000
//freq is tightness.  the default (0) is all the way tight.
//if u want to start to loosen it.  change from 0 to a very high number!
//try 50.. then u will see that it budges just a little.
//ok.. now keep going down..
// eventually it is too loose to fight against gravity
// hahaha then its just flat and usesless
// ok all this assumed a default damp of 0.
// now set the freq to a good oscillation (3 or 4)
// then play with the damp
// damp is like a tightner on your looseness
// it makes you less stretchy?
// just leave damp at 0 for now, and play with freq
//game:: he autojumps.  u jump to give him a double jump!

b.ch=function(n){
    if(this.gx){
        return this.gx.children[N(n,0)]
    }
}

//w.l(0,0,w.W,w.H); w.l(w.W,0,0,w.H,'+')
// game:: density:  if u want to fit in here.. u will have to lower yourself a bit to our level..
// you see, compared to you, we a really quite dense. Not dense as in stupid, but as in, we have a high mass to volume ratio.
//  In otherwords, we can't jump!  It's a grave grave situation.
// Don't get me wrong, not grave as in bad, but grave, as in, it relates to gravity.  Additionally, it's quite bad.
// ok so freq is how much strngth u need to pull it??
// as freq gets low.. u can pull it farther away
// its the strength of the spring
// dont ever set a dJ().len(0)
//location pams are optional,
// and be default to their center points
// note: if you passe them in,
// pass them as relative(local to body) coords
//BOX2D requires them as WORLD points
// - for some reason..
// (but i think my way has more use cases)
//pass coll:true -> 'collideConnected=true'
b2d.p()
b.rJ=function(b1,yOff){var b=this,w=b.W(),g=G(arguments), c,cc
    if(b2d.iF(b1)){b1=b1.B()}
    if(b2d.iB(b1)){b1.XY(b.X(),b.Y())
        w.rJ(b, b1)
        return b1}


    if(R()){
        c='r'
        cc=1}
    else {c='g'}

    _.t(N(g[0],1),function(){

        var nB = w.rJ( b )

        nB.Y( N(g[1],8),  '+')

        w.rJ(b, nB)
        b=nB})

    return b

    //pad=N(pad,15)
}
w.vine=function(x,y,n,m){

    return this.rJ(x,y, n,'/').rJ(n||10,m).K('leaf')
}
w.trap=function(x,y){var w=this
    x=N(x,300);y=N(y,50)
    w.vine(x, 100,5)
    w.vine(x+20, y, 6)
    w.vine(x+40, y, 10)
    w.vine(x+60, y, 10)
    w.vine(x+80, y, 6)
    w.vine(x+90, y, 4)
    return w
}
w.link1 = function self(x,y,n){var g=G(arguments),
    b=w.rJ(x,y,'*')
    b.add=function (n) {var b=this
        _.t(N(n,1),function(){var nB
            nB= w.rJ(b.X(), b.Y()+24,'*')
            w.rJ(b, b=nB)})
        return b}
    if (g.p) {b.stat()}
    if (N(g[2])) {b.add(g[2])}
    return b
}



//shrink = function(){_.e(ropeJoints, function(j){j.shrink()})}
//marionette game?
b2d.p()

rJD.i=rJD.init=function(){var jd=this,g=G(arguments)
    //just a shortcut to call initialze.  have i ever even done that?  laaaame waaah waaaaah
    jd.Initialize.apply(jd, g)
    return jd
}

rJ.lm= function(){var j=this, g=G(arguments),
    a=g[0],b=g[1]
    if(a===true){j.EnableLimit(true); return}
    j.SetLimits(M.tR(a),M.tR(b))
    if(g.N){j.EnableLimit(true)}
    return j
}

rJ.mt=function(s,tor){var j=this,g=G(arguments)
    j.SetMotorSpeed(s)
    j.SetMaxMotorTorque(_.tN(tor, 100000))
    if(g.N){j.EnableMotor(true)}
    return j
}

rJ.sp=function(s){var j=this
    if(U(s)){return j.GetMotorSpeed()}
    j.SetMotorSpeed(s); return j
}

w._rJ=function(){var w=this,g=G(arguments), o,jd,j
    o= b2d.iB(g[0])?
    {a:g[0],b:g[1]}:
        g[0]

    jd=new b2d.RevoluteJointDef
    jd.bodyA= o.a
    jd.bodyB= o.b

    j=w.J(jd)
    return j
}


w.rJ=function(){var w=this,g=G(arguments),o, aC,bC,jd, b,v


    if(g.N_ || ( b2d.iB(g.f) && U(g.s) )  ){

        v= V(g.f, g.s)

        b= g.p? w.D(v.x, v.y,'y',10,10).d(1).r(.5):
            g.m? w.D(v.x, v.y, $r(), 50, 15):
                w.D(v.x, v.y, 'r', 4, 20).d(4).r(2)

        if(g.d){b.stat()}

        return b
    }


    if(g.p){ g.s.XY(g.f) }

    o=  b2d.iB(g.f)?  {a: g.f,  b: g.s}: g.f

    jd=new b2d.RevoluteJointDef

    jd.bodyA=o.a

    jd.bodyB=o.b

    if(g.m){jd.cl(true)}

    if(N(g[3])){
        jd.aV(g.t,g[3])
        if(N(g[5])){jd.bV(g[4],g[5])}
    }


    else if(O(g[3])){
        jd.aV(g[3])
        if(O(g[4])){jd.bV(g[4])}
    }

    else {

        aC=o.a.wC()
        bC=o.b.wC()

        xx=o.a.X() - o.a.wC().x
        yy=o.a.Y() - o.a.wC().y

        xx=bC.x-aC.x
        yy=bC.y-aC.y

        jd.aV(xx, yy)
    }

    return w.J(jd)
}




b.pin=function(){var b=this,w=b.W(), j,
    b1= w.S( b.X(), b.Y() )
    w.rJ(b1, b )
    return b
}


w.spinner=function(x,y,s,t){var g=G(arguments)
    x = N(g[0], 500)
    y = N(g[1], 200)
    s = N(g[2], 10)
    t = N(g[3], 100)
    if(g.n){s*=-1}
    w.rJ(
        dial= w.D(x, y,'r',200,40), rock= w.S(x, y,'b',10,10)
    ).mt(s, t)
    //<- rJt({  i:[rock, dial, dial.c()],  eM:1,  mS:-10,  mMT:100  })
}



w.perch = function(c){var w=this //specific structure, birdage in sky
    c=c||'t'
    w.S(200,50, c, 300,20) //top
    w.S(200,360, c, 300,20) //bottom
    w.S(60, 240, c, 20, 260) //left
    w.S(340, 320, c, 20, 100)//right
    return w}
w.seesaw=function(x,y){var w=this,
    anc = w.S(x,y, 'h', 60,60),
    lev = w.D(x,y, 'g', 300,20)
    w.rJ(  anc, lev ).lm(-30,30)
}
wh=function(wh,sp){var j
    j= w.rev(wh.fr(0).d(1), s)
    if(N(j)){j.mt(sp)}
    return j}
sus=function(x,y){return w.D(x,y,'b',90,30) }
w.car=function(x, y, sp1, sp2){var w=this,b
    s= w.D(x,y,'b',90,30)//.bS('me')
    sp1 = sp1||2;
    sp2 = sp2||sp1
    w.rJ( w.D(x-40, y+50,'o',30),s).mt( sp1)
    b= w.D(x+60, y+50)
    b.cir({c:'x', r:30,rf:1})
    w.rJ(b, s).mt(sp2)
    return s
}
w.car1=function(){var w=this, s=sus(150,150)
    wh( w.D(200,150,'r',30), 120)
    wh( w.D(100,150,'b',30), 150)
    return s}
w.roller=function () {var w=this,s=sus(250,150)
    a=w.D(300,150,'r',30)
    wh(a,6)

    // wh(w.D(200, 150, 'r', 30), -500)

    return s}
w.makeCar=function(){var w=this,s=sus(240,350)
    wh(w.D(300, 400, 'r', 30),  4)
    wh(w.D(200, 400, 'y', 30), 4)
    return s}
w.wh=function(){var w=this,g=G(arguments),wh,o
    o=O(g[0])? g[0]
        : {x:g[0],y:g[1],r:g[2],n:g[3]}
    o.r=N(o.r,40)
    o.c=o.c||'x'
    wh = w.D(o.x,o.y)
    wh.cir({c: o.c, r:o.r, C:'w',l:10, lf:1})
    return wh
}
w.pWh=function(){var w=this,g=G(arguments),wh,o
    o=O(g[0])? g[0]
        : {x:g[0],y:g[1],r:g[2],n:g[3]}
    o.r=N(o.r,40)
    o.n=N(o.n,15)
    o.c=o.c||'x'
    wh = b2d.pC(o.r,o.n)
    return w.D(o.x,o.y,o.c, [wh])
}
b.wheel=function(){var b=this,w= b.W(),g=G(arguments), o,
    j,wh
    o=O(g[0])? g[0]
        : {x:g[0], y:g[1]}//,r:g[2],n:g[3]}
    wh= w.wheel(600,300)
    j= w.rJ(wh, b,0,0, o.x, o.y)
    return j}
j.M=function(t){
    this.SetMaxMotorTorque(t)
    return this
}





function beta() {

//localAnchorA - the point in body A around which it will rotate
//localAnchorB - the point in body B around which it will rotate
//referenceAngle - an angle between bodies considered to be zero
// for the joint angle
//
    /*rev joint uses:
     wheels or rollers
     chains or swingbridges (using multiple revolute joints)
     rag-doll joints
     rotating doors, catapults, levers
     */
    /*
     jd.refAng=jd.rA=function(a){
     jd.referenceAngle= tRad(a); return this}
     jd.maxTorque=jd.mMT=function(a){
     this.maxMotorTorque=a
     return this}
     jd.lowAng= jd.lA = function(a){
     this.lowerAngle=tRad(a); return this}
     jd.upAng= jd.uA = function(a){this.upperAngle=tRad(a); return this}
     jd.rat = jd.r=function(a){this.ratio = a; return this}
     jd.axis = jd.lXA=function(a){ this.localAxisA=a; return this}
     jd.mot = jd.motor =  function(speed, torque, enable){
     this.speed(speed)
     this.maxTorque( N(torque)? torque : 100)
     if( enable != '-' ){
     this.enableMotor=true }
     return this }
     jd.limits = jd.lm = function( lowAng, upAng, enable ){
     this.lowAng( lowAng ).upAng( upAng )
     if( enable != '-' ){
     this.enableLimit = true}
     return this }
     */

    /*

     //revolute

     j.refAng = j.rA = function (a) {
     j.referenceAngle = tRad(a);
     return j
     }

     j.maxTorque = j.mMT = function (a) {
     j.maxMotorTorque = a
     return j
     }

     j.lowAng = j.lA = function (a) {
     j.lowerAngle = tRad(a);
     return j
     }

     j.upAng = j.uA = function (a) {
     j.upperAngle = tRad(a);
     return j
     }

     j.rat = j.r = function (a) {
     j.ratio = a;
     return j
     }
     j.axis = j.lXA = function (a) {
     j.localAxisA = a;
     return j
     }
     j.damp= function(a){if(U(a)){return this.GetDampingRatio()}
     this.SetDampingRatio(a)
     return this}
     // can change collideConnected dynamically?  if not i could replace the joint with a new one dynaically!!!!!
     // is it smart enough to know all its properties??? // it should be
     //motor


     j.maxSpeed=j.maxMotorSpeed=j.mMS=function(a){
     j.maxMotorSpeed=a
     return j}

     rev=function() {
     //motor rev
     j.mt = j.motor = j.enableMotor = j.eM = function (a) {
     j.EnableMotor(a ? true : false)
     return j
     }
     j.speed = j.motorSpeed = j.mS = function (speed) {
     if (U(speed)) {
     return this.GetMotorSpeed()
     }
     this.SetMotorSpeed(speed)
     return this
     }
     j.torque = function (torq) {
     if (U(torq)) {
     return this.GetMotorTorque()
     }
     this.SetMaxMotorTorque(torq)
     return this
     }
     j.maxTorq = j.maxTorque = j.mMT = j.mT = function (a, b, c) {
     this.SetMaxMotorTorque(a, b, c);
     return this
     }
     */

    /* more lVW!
     w.$(function(x,y){
     v=b.lVW(x,y)
     w.dot('w', M.a(v.x), M.a(v.y))
     $l(v.x+','+v.y)
     })*/
}
wedJ=function(){


    w.wed=function () {var w=this,g=G(arguments)
        b2d.wed= function(a,b,  ancA, ancB, ang,  c, d){

            // can set 2 local anchor points and a reference angle


            b2d.WeldJointDef=b2d.Joints.b2WeldJointDef
            var g=G(arguments),

                jd =  new b2d.WeldJointDef()

            o={a:a, b:b}

            jd.bodyA= o.a
            jd.bodyB= o.b

            if(N(g[2])){
                o.ancA = V(g[2], g[3])
                o.ancB = V(g[4], g[5])
                o.ang = g[6]
                return jd
            }

            if(g[2]){
                jd.localAnchorA = o.ancA.div()}
            if(o.ancB){
                jd.localAnchorB = o.ancB.div()}
            if(N(o.ang)){// use ang to set a 'referenceAngle'
                jd.referenceAngle = M.tR(o.ang)}

            return jd

        }

        return w.J(
            b2d.wed.apply(null,g))}
    b.dX=function(b1){return this.X()-b1.X()}
    b.glu=  function(b1){var b=this, w=b.W()

        return w.wed( b, b1, -b.dX(b1), -b.Y(b1))

    }

    j.form=function(){var j=this, w=j.W(), a=j.A(), b=j.B()
        if(j.T()==8){$l('J.T()==8:COMMENCE WEDDING '+ (n++))

            return w.wed(a, b)

        }}

    b.j=function(){ return this.GetJointList() }



};wedJ()
prisJ=function(){


    b2d.p()

    /*

     pJD.maxForce= j.mMF=function(a){var j=this
     j.maxMotorForce = a; return j
     }


     pJD.speed=j.mS=function(a){this.motorSpeed = a; return this}
     pJD.motor=j.eM=function(a){
     this.enableMotor = a?true:false; return this}
     pJD.maxSpeed =j.mMS=function(a){ this.maxMotorSpeed=a; return this }



     pJD.lowTrans=j.lT=function(a){
     this.lowerTranslation=a;return this}
     pJD.upTrans=j.uT=function(a){
     this.upperTranslation=a;
     return this}

     pJD.lm=function(a){ this.enableLimit=a?true:false;return this}

     -----


     pJ.speed = function (speed) {//j.mS
     this.SetMotorSpeed(speed)
     return this
     }



     */

    pJD.ax = pJD.axis= pJD.lAA=function(){
        var pJD=this, g=G(arguments),
            v = V(g[0],g[1])
        pJD.localAxisA.Set(v.x, v.y)
        pJD.localAxisA.Normalize()
        return pJD}
    pJD.rt= pJD.rA= pJD.ang=function(a){var pJD=this
        if(N(a)){pJD.referenceAngle=Math.toRadians(a)}
        return pJD}
    pJ.lm= pJ.limits=function(){
        var pJ=this,
            g=G(arguments), v, l,u
        if(U(g[0])){
            if(g.p){  pJ.EnableLimit(true); return pJ }
            else if (g.n) {pJ.EnableLimit(false); return pJ }
            else if (g.d) {pJ.lm( pJ.lm() ); return pJ }
            return pJ.m_enableLimit}
        v = V(g[0],g[1]).div()
        pJ.SetLimits(v.x, v.y) // ? pJ.SetLimits(l/30, (u+1)/30) ?
        if(g.N){pJ.EnableLimit(true) }
        return pJ}
    pJ.max=function(f){var pJ=this
        if(U(f)){return pJ.m_maxMotorForce}
        pJ.SetMaxMotorForce( f )
        return pJ}
    pJ.sp=function(s){var pJ=this
        if(U(s)){return pJ.GetMotorSpeed()}
        pJ.SetMotorSpeed(s)
        return pJ}
    pJ.F=function(f){var pJ=this
        if(U(f)){return pJ.GetMotorForce()}
        //pJ -> apply a force f
        return pJ}
    pJ.mt=function(){var pJ=this,g=G(arguments)

        if(N(g[0])){
            pJ.SetMotorSpeed(g[0])
            pJ.SetMaxMotorForce(N(g[1], 1000) )
            if(g.N){pJ.EnableMotor(true)}
        }

        else if(g.n){pJ.EnableMotor(false)}
        else if(g.p){pJ.EnableMotor(true)}

        return pJ
    }
    pJ.uL= pJ.U=function(uL){var j=this
        if(U(uL)){return j.GetUpperLimit()*30}
        j.lm(j.lL(),uL)
        return j}
    pJ.lL= pJ.L=function(l){var j=this
        if(U(l)){return j.GetLowerLimit()*30}
        j.lm(l,j.U())
        return j
    }
    pJ.UL=function(u,l){return this.U(u).L(l)}
    pJ.LU=function(l,u){return this.L(l).U(u)}
    pJ.tl=pJ.val =pJ.tran= function(val){
        return parseInt(this.GetJointTranslation()*30)}
    pJ.lm= function(){var j=this, g=G(arguments),o
        o=A(g[0])?{
            lL:g[0][0],
            uL:g[0][1]}:
        {lL:g[0], uL:g[1]}
        if(g[0]==1){j.EnableLimit(true); return}
        if(g[0]==0){j.EnableLimit(false); return}
        j.SetLimits(o.lL/30, o.uL/30)
        if(g.N){j.EnableLimit(true)}
        return j
    }
    w.prism = function(a,b, x,y, rot){var w=this, jd, j
        jd=new b2d.Joints.b2PrismaticJointDef()



        a = A(a) ? a : [a]
        jd.bodyA = a[0]
        jd.localAnchorA =  O(a[1])  ?  a[1].div()  :  V(a[1],a[2],'-')

        b = A(b) ? b : [b]
        jd.bodyB = b[0]

        jd.localAnchorB =  O(b[1])  ?  b[1].div()  :  V(b[1],b[2],'-')
        jd.axis(x,y)
        jd.ang(O(x)? y: rot)

        o = O(g[0] && !b2d.iB(g[0]))? g[0]
            : _.x( {b1:g[0], b2:g[0]},
            O(g[2])? {axis:g[2], a:g[3]}  : {axis: V(g[2], g[3]), a:g[4]})
        g[0] = A(g[0]) ? g[0] : [g[0]]
        g[1] = A(g[1]) ? g[1] : [g[1]]
        o.A = g[0][0]
        o.aV =  O(g[0][1])  ?  g[0][1].div()  :  V(g[0][1], g[0][2],'-')
        o.B = g[1][0]
        o.bV =  O(g[1][1])  ?  g[1][1].div()  :  V(g[1][1], g[1][2],'-')
        jd.axis = V(g[2], g[3])
        jd.a =  O(g[2])? g[3]: g[4]


        if(A(o.a)){
            o.aV= V(o.a[1],o.a[2])
            o.a=o.a[0]}
        if(A(o.a)){
            jd.bodyA = o.a[0]
            if (O(o.a[1])) {jd.localAnchorA = o.a[1]}
            else if (N(o.a[1])) {
                jd.localAnchorA = V(o.a[1], o.a[2],'-')}}
        else {jd.bodyA = o.a}
        jD.bodyA=o.a



        if(A(o.b)){
            o.bV= V(o.b[1], o.b[2])
            o.b = o.b[0]}
        if (A(o.b)) {
            jd.bodyB = o.b[0]
            if (O(o.b[1])) {jd.localAnchorB = o.b[1]}
            else if (N(o.a[1])) {jd.localAnchorB = V(o.b[1], o.b[2],'-')}}
        else {jd.bodyB = o.b}
        jD.bodyB=o.b


        o.aV = o.aV  || o.a.wC();jD.localAnchorA= o.aV.div()

        o.bV = o.bV  || o.b.wC();jD.localAnchorB= o.bV.div()



        if (N(o.x)){jd.ax(o.x, o.y).rA(o.a)}
        else if(O(o.x)){jd.ax(x.x, x.y).rA(y)}
        jD.axis(o.ax)


        jD.rt(o.rA)

        return w.J(jd)
    }

    w.pJ=  function(){var w=this, g=G(arguments),o,j,
        jd = new b2d.PrismaticJointDef

        o = b2d.iB(g.f)  ?
        {a: g.f, b:g[1], ax:g[2], rA:g[3]} : g[0]
        jd.bodyA=o.a
        jd.bodyB=o.b
        o.aV=o.aV ||[0,0]; jd.aV(o.aV)
        o.bV=o.bV ||[0,0]; jd.bV(o.bV)
        o.ax=o.ax|| [0,1]; jd.ax(o.ax)
        o.rA=o.rA||0;
        jd.rA(o.rA)
        j=w.J(jd)
        if(o.lm){j.lm(o.lm)}
        return j

    }


    w.Elv=function(x, y, H){var w=this,elv, wire,j, speed = 10
        x=N(x, 400)
        j = w.pJ({
            a: wire= w.S(x, w.h - 200, 's', [[60, 60, '-']]).d(1).fr(1),
            b: elv= w.D(x+100, w.h-300, 'd', 200, 40).d(.1).K('elv'),
            lm: [-250, 100]
        }).mt(speed)
        elv.cl(
            _.debounce(reverse, 200, true)
        )
        function reverse(){ j.mt(speed *= -1) }
    }


    w.elev =function(x, yy, H){var w=this,
        y=w.h-yy,
        elv,
        speed= 5,
        wire,j
        j=w.pJ(
            wire=w.S(x, y-H/2, 'w', [[100, H, '-']]),
            elv= w.S(x,y-300, 'm', 30).r(3).K('elv').bS('sun'),
            V(0, 1)
        ).lm(-H/2, H/2).mt(-100)
        elv.cl( _.th( function(){
            j.mt(speed*=-1)
        },  200, {trailing:false} ) )
        elv.cl(function(p){ p.B().lV(0) })
    }

    old=function(){
	  



        //jd.mS(-100000).lT(-12).uT(12.5).eL(true).eM(true).mMF(10)//works

        b2d.pJ=  function(b1, b2, lXA, lAA, lAB, rA){//b2d.prismaticJointDef = PrismaticJointDef = prJt=

            var j=new b2d.Joints.b2PrismaticJointDef()
            j.mt=function(a,b,c){
                j.mS(a)
                j.mMF(N(b)?b:100)
                if(c!='-'){j.eM(1)}
                return j}
            j.lm=function(lT,uT, enableLimit){
                j.lT(lT).uT(uT)
                if(enableLimit!='-'){ j.eL(true) }
                return j}
            if( D(b1) ){ j.A(b1)}
            if( D(b2) ){ j.B(b2)}
            //local direction A ? the angle of the actual slider joint
            j.lXA(D(lXA)?lXA: V(0,1))
            //local axis A
            j.lAA( D(d)? lAA : b1.worldCenter())
            //local axis B
            j.lAB( D(e)? lAB : b2.worldCenter())
            // something with rotation
            if( D(rA) ){  j.rA(rA)   }

            return j
        }


        w.Prism = function (a, b, c, d, e, f, g, h) {
            return this.J(b2d.pJ(a, b, c, d, e, f, g, h))
        }

        w.elevx=function(x){
            var elev={}
            elev.plat  = this.rect(x, 100, 100,10).den(1).K('elev')
                .coll(function(){elev.flip()})
                .collWithKind('player', function(p){p.linVel(0)})
            elev.base = this.brickSensor(x, 150, 1, 100 ).den(1).fric(100)
            elev.j =  this.prism(elev.plat, elev.base, V(0,1) )

            elev.speed = 2
            elev.j.mt(elev.speed)
            elev.flip =  _.throttle(function(){
                this.j.mt(this.speed*=-1)
            }, 200, {trailing:false})
            return elev

        }





    }
    /*



     enableLimit - whether the joint limits will be active
     lowerTranslation - position of the lower limit
     upperTranslation - position of the upper limit


     enableMotor - whether the joint motor will be active
     motorSpeed - the target speed of the joint motor
     maxMotorForce - the maximum allowable force the motor can use

     */
 

};prisJ()
function JointGetJointTranslation() {
	var axis = this.m_bodyA.GetWorldVector(this.m_localXAxis1),
			p1 = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
			p2 = this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
	return axis.x * (p2.x - p1.x) + axis.y * (p2.y - p1.y)
}//box2d source
