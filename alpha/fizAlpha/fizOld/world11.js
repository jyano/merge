b2d.p()
body()
fixtDef()
fixt()
bodyDef()
world()

function bodyDef(){
    bD.T = bD.typ = bD.kind = function (type) {
        if (U(type)) {
            return this.type
        }
        this.type = type
        return this
    }
    bD.dyn = function () {return this.T(2)}
    bD.stat = function () {return this.T(0)}
    bD.kin = function () {return this.T(1)}
    bD.bul = bD.bull = bD.fR = function (iBu) {var bD=this
        if (U(iBu)) {
            return bD.bullet
        }
        bD.bullet = iBu;
        return bD}
    bD.lV = function (v) {var bD=this
        if(U(v)){return pD.linearVelocity}
        pD.linearVelocity = v
        return pD}
    bD.aV =   function (vel) {
        if (U(a)) {
            return this.angularVelocity
        }


        this.angularVelocity = vel
        return this}
    bD.lD = function (dm) {var bD=this
        if (U(dm)) {return bD.linearDamping}
        bD.linearDamping = dm
        return bD}
    bD.aD =   function (damp) {
        if (U(damp)) {
            return this.angularDamping
        }
        this.angularDamping = damp;
        return this
    }
    bD.rt= bD.rot = bD.ang = function (ang) {
        //The world angle of the body in radians.
//should fix
//use ang for box and rot for cjs?
        if (U(ang)) {
            return d.angle
        }
        this.angle = ang;
        return this
    }
    bD.fixedRot = bD.fR = function (isFixed) {
        if (U(isFixed)) {
            return this.fixedRotation
        }
        this.fixedRotation = isFixed;
        return this
    }
    bD.act = bD.setActive = function (isActive) {
        this.active = isActive ? true : false
        return this
    }
    bD.sleepy = bD.aS = function (canSleep) {
        this.allowSleep = canSleep ? true : false
        return this
    }
    bD.inertia = function (inertia) {
        if (U(inertia)) {
            return this.insertiaScale
        }
        this.insertiaScale = inertia;
        return this
    }
}


function world() {
    w.pol=function(){var w=this,g=G(arguments), b,o
        if(g.A){return $a(w,'pol',g.f)}
        b2d.mini()
        if(g.OO){g.e(function(g){w.pol(g)})
            return w
        }




        // if(g.N_ && N(g.s) && O(g.t) &&U(g[3])){return w.D(g.f,g.s).pol(g.t)}

        else if(g.N_ && N(g.s) && O(g.t)    ){
            b = w.D(g.f,g.s)
            // if(iB(g[2])){ g[2]= g[2].wV()} //M.p(g[2]).vs()
            _.e(g.t, function(p){
                b.pol({v:p})})
            return g.m? M.p(b): b
        }
        o= g.O? g.f:
            N(g.f)? {x:g.f, y:g.s, p:g.t}
                : {p:g.f}

        o.x=N(o.x, w.hW)
        o.y=N(o.y, w.hH)
        o.p= M.p(o.p)

        b=w.D(o.x, o.y)

        if(g.P){
            if(iB(o.p)){o.p=M.p(o.p)}
            b.pol(o.p)
            return g.m? M.p(b): b
        }

        if(o.rg){o.p.ps(o.rg, function(p){b.pol(o)})}

        else {
            o.p.ps(function(p){
                b.pol(o)})}

        return b.f()
    }

    w.bs=  w.bL= w.getBodyList=function(){
        //can be result of w.b if g.u
        return this.GetBodyList()}
    w.S=function(){var w=this, g=G(arguments),
        bD, b, fs, k, o//,D=b2d.D
        if(S(_.l(g))){
            k=g.pop() }
        if (N(g[0])){

            o= {
                b:V(g[0],g[1]),
                f:_.r(g,2)
            }
        }
        else {
            o= {b:V(g[0]),f:_.r(g)}
        }
        o.b = b2d.S(o.b)
        if(k){o.k=k}
        b = w.CreateBody(o.b)
        //array of multiple fixtures
        if(A(g[0]) && U(g[1])){
            alert('see w.D')
            $l('mult')
            _.e(o.f, function(f){if(g.n){b.f(f, '-')} else {b.f(f)}})
            if(o.k){b.K(o.k)}
            return b}
        if(g.n){o.f.push('-')}
        b.f.apply(b,o.f)
        if(o.k){b.K(o.k)}
        return b
    }
    w.cir = w.ball= w.ba= w.circ=function(x, y, r, c){var w=this, g=G(arguments), b,o

        o = g.O? g.f :

            N(g.s) ?

            {
                x: g.f, y: g.s,
                r: g.t,
                c: g[3]
            }
                :

            { r: g.f }


        o.x  = N(o.x, w.hW)
        o.y  = N(o.y, w.hH)
        o.r  = N(o.r, 50)
        o.c  = o.c || $r()

        b = w.D(o.x, o.y, o.c, o.r)

            .d(.5).fr(0).r(.5)

            .K('ball cir')

        if(g.n){b.sen(true)}

        return b

    }
    w.bump = w.baa = function(){var w=this, g=G(arguments), b,o

        o = O(g[0])? g[0] : N(g[1])?
        {x:g[0], y:g[1], r:g[2]} :
        {r:g[0]}

        o.x  = _.tN(o.x, w.hW)
        o.y  = _.tN(o.y, w.hH)
        o.r  = _.tN(o.r, 40)
        o.c  = o.c || $r()

        b = w.S(o.x, o.y, o.c, o.r).K('bump').DFB(0.5, 0, 0.5)

        if(g.n){b.sen(true)}

        return b
    }
    w.brick = w.bii = function (x, y, W, H) {var w=this, g=G(arguments), b,o
        o = O(g[0])? g[0] : N(g[1])? {
            x:g[0],
            y:g[1],
            w:g[2],
            h:g[3]
        } : {w: g[0]}

        o.x  = _.tN(o.x, w.hW)
        o.y  = _.tN(o.y, w.hH)
        o.w  = _.tN(o.w, 40)
        o.h  = _.tN(o.h, o.w)
        o.c  = o.c || $r()

        b= w.S(o.x, o.y,  o.c, o.w, o.h).K('brick').DFB(0.5, 0.5, 0)

        if(g.n){b.sen(true)}
        return b}
    w.polyCirc=function(x, y, r, sides){var w=this,
        b=w.D(x,y)
        b.pol( {v:b2d.polyCirc(r, sides)})
        return b
    }
    w.boxes=function(){var w = this,g=G(arguments)
        _.e(g, function (g) {w.box.apply(w,g)})
        return w
    }
    w.brcks=w.boxesStat=function(){var w = this,g=G(arguments)
        _.e(g, function (g) {w.brick.apply(w, g)})
        return w}
    w.xD=function(){

        w.e(function(b){

            if(b.iD()){  b.xx()}

        })
    }
    w.clr = w.wXx = function(){var w=this
        w.e(function(b){
            if(b!= w.right && b!= w.left&& b!= w.roof&& b!= w.floor)
                b.xx()
        })
        return w
    }
    w.xB=   w.Xx=   w.Xb=  function(b){var w=this

        if(U(b)){
            w.e(function(b){w.xB(b)})
        }
        else {
            w.DestroyBody(b)
        }

        return w
    }



    w.gB = function () {
        return this.GetGroundBody()
    }
    w.G = function (x, y) {
        var w = this,
            v, currG = w.GetGravity()
        if (U(x)) {
            return currG
        }
        if (N(x)) {
            v = N(y) ? V(x, y) : V(0, x)
        }
        else if (x == 'flip') {
            v = V(-currG.x, -currG.y)
        }
        w.SetGravity(v)
        return w
    }
    w.n = w.count = w.getBodyCount = w.bC = w.gBC = function () {
        return this.GetBodyCount()
    }
    w.sTW = w.sToW = function (x, y) {
        var w = this, //works

            x = x / w.z - w.s.x / w.z,
            y = y / w.z - w.s.y / w.z

        //w.dot(x,y,'*') // cool
        return {x: x, y: y}
    }
    w.wTS = w.wToS = function (x, y) {
        var w = this,
            x = (x + w.s.x / w.z) * w.z,
            y = (y + w.s.y / w.z) * w.z
        return {x: x, y: y}
    }
    w.cen = w.cent = function () {
        var w = this, g = G(arguments),
            v = V(w.s.W() / 2, w.s.H() / 2)
        if (g.p) {
            w.dot(v)
        }
        return v
    }
    w.left = function (n) {
        var w = this;
        n = N(n, 4)//w.horiz=
        w.e(function (b) {
            b.X(n, '-')
        })
    }
    w.up = function (n) {
        var w = this;
        n = N(n, 4)//w.vert=
        w.e(function (b) {
            b.Y(n, '-')
        })
    }

    rand=function(){
        w.rR = w.randRects = function (ob) {
            var w = this, g = G(arguments),
                o = g.O ? g.f : {y: g.f, z: g.s}
            o.y = N(o.y, 0)
            o.z = N(o.z, 1)
            _.t(20,
                function (i) {
                    w.S(R(1100, 20), R(150, 40 + o.y), $r(),
                        R(40, 15) * o.z, R(40, 15) * o.z).K('randomRect rR')
                })
            return w
        }
        w.ten = w.addTenBalls = function (n) {
            var w = this

            _.t(n || 10, function (i) {

                w.ball(100 + (i * 80), 200)
            })

            return w
        }
        w.hun = w.addHundBalls = function (n) {
            var w = this
            _.t(n || 100, function (i) {
                w.ball(100 + (i * 8), 50, 10)
            })
            return w
        }
    };rand()

}
v.tA=function(){ return [this.x, this.y] }

/*

b.aI=function(sc){var b=this;
    b.i(b.v().m(N(sc,100))
    return b}
//ApplyLinearImpulse(forceDirection, body->GetPosition(), true);

*/


core()
function core() {
    b2d.cir=  function(r,x,y, d){//hmm.. fixt doesnt have a rel loc.. its shape does
        //what if u want to change 'shape' of shape, but keep its rel loc?
        var g= G(arguments),
            x=_.tN(g[1]), y=_.tN(g[2]),
            r= _.tN(g[0],50),
            d=_.tN(d,1),
            f,
            h



        f=new b2d.FixtureDef

        h = new b2d.CircleShape(r/30)

        h.SetLocalPosition(V(x,y).div())


        f.shape = h





        f.d(d)
        if(g.n){f.isSensor=true}
        return f

    }


    b2d.Common.Math.b2Transform.prototype.toArr = function () {

        var tf = this,
            pos = tf.position,
            R = tf.R,
            col1 = R.col1,
            col2 = R.col2


        return [pos.x, pos.y, col1.x, col1.y, col2.x, col2.y]
    }
    b2d.sD= b2d.S=b2d.stat=function(x,y){return b2d.bD(x,y).stat()}
    b2d.kD= function(x,y){return b2d.bD(x,y).T(1)}
    b2d.f= function(h){var g=G(arguments),
        f=new b2d.FixtureDef,
        h  // simply makes one fixt,
        // tries to set its shape
        // and returns it
        //you can pass in a pre-made shape
        //or..
        // if you pass it an array, it makes a polyH from it
        // from verts/arr (confirmed)
        // or if you passed in anything (number(s))
        // it makes a circle or poly shape, depending on how many numbers you passed

        if(b2d.isShape(g[0])){h=g[0]}

        /*
         else {
         h =   A(g[0])? b2d.pH.apply(b2d, g)
         :(g.l==1|| g.l==3)? b2d.cH.apply(b2d, g)
         :b2d.pH.apply(b2d, g)}
         */

        f.shape = h
        return f
    }


    b2d.iV = b2d.isV = function (v) {
        if (v) {
            return v.constructor.name == "b2Vec2"
        }
    }
    b2d.iH = b2d.isShape = function (h) {
        var typ
        if (O(h)) {

            typ = h.constructor.name
            return (typ == "b2PolygonShape") || (typ == "b2CircleShape") || (typ == "b2AShape")
        }
    }
    b2d.iBD = b2d.isBDef = function (bd) {
        return O(bd) && F(bd.b2BodyDef)
    }
    b2d.iB = b2d.isB = b2d.isBody = isBody = function (b) {
        if (O(b)) {
            return b.constructor.name == 'b2Body'
        }
    }
    b2d.iFD = b2d.isFD = b2d.isFixtDef = function (fD) {
        return O(fD) && fD.b2FixtureDef
    }
    b2d.iF = b2d.isFixt = function (f) {
        if (!f) {
            return false
        }
        return f.constructor.name == "b2Fixture"
    }


    b2d.tB = b2d.toBody = function (b) {
        return b2d.iB(b) ? b :
            b2d.iF(b) ? b.B() :
                0
    }

}
function fixtDef(){
     fD.fr= fD.f= fD.frc = fD.fric = function (f) {var fD=this
         if (U(f)) {
             return this.friction
         }
         fD.friction = f
         return fD
     }


    fD.H =   function (h) {
        if (U(h)) {return this.shape}
        this.shape = h
        return this}
    fD.vrt = fD.verts = function () {

        var shape = this.shape,

            verts = shape.m_vertices,

            verts = [
                verts[0].mult(),
                verts[1].mult(),
                verts[2].mult(),
                verts[3].mult()]

        return $l(verts)
    }
    fD.box = fD.sAB = function (a, b, p, A) {
        if (!p) {
            this.shape.SetAsBox(a / 30, b / 30)
        }
        else {
            this.shape.SetAsOrientedBox(a / 30, b / 30, p, A)
        }
        return this
    }


    fD.d= fD.den =  function (d) {var fD=this
         if (U(d)) {return fD.density}
         fD.density=d; return fD}
     fD.sen= fD.sensor = fD.iS = function (isSensor) {
         if (U(isSensor)) {
             return this.isSensor
         }
         this.isSensor = isSensor ? true : false
         return this
     }
     fD.r=  fD.bo= fD.rst=fD.rest=function(r){var fD=this
         if(U(r)){return fD.restitution}
         fD.restitution=r; return fD
     }

 }
function body(){b.type = p.T = p.ty = p.t = function (a) {var b=this
    if (U(a)) {return b.GetType()}
    b.SetType(a)
    return b}

    b.fs=b.e=function(fn){var b=this,
        fl=b.f(),
        g=G(arguments),
        fn = g[0],
        arr = []

        while (fl) { arr.push(fl); fl = fl.GetNext() }

        if(N(fn)){return arr[fn]}
        if(F(fn)){ _.e(arr, fn); return b }

        if(b2d.iB(fn)){

            b.fs(function(f){
                fn.pol(f)
            })

            return fn
        }

        return arr

        /*
         if (g.p) {//order by biggest
         arr = arr.sort(function (a, b) {return b.area() - a.area() }) }
         if (g.n) {//order by smallest
         arr = arr.sort(function (a, b) {return a.area() - b.area()}) }
         */

    }
    b.xx = b.kill =  b.destroy = function(){var b=this,

        v= b.pos()


        if(b.sprite){b.sprite.rm()}

        if(b.sp()){
            b.sp().rm()
        }

        b.fs(function(f){
            f.removeSprites()
            //if(f.sprite){f.sprite.remove()}

        })

        b.sprite=null
        b.SetActive(false)
        b.W().DestroyBody(b)

        return v
    }
    b.xF=  b.Xx=  b.Xf =b.E =  b.clr = b.empty = b.clear =    function (f) {
        if(f){this.DestroyFixture(f)}
        else {this.fs(
            function (f) {this.xF(f)  }
        )}
        return this
    }

    b.dyn = function (resumeVel) {var b=this
        b.type(2)
        if (resumeVel == b && O(b._linVel)) {b.lV(b._linVel)}
        b._linVel = null
        return b
    }
    b.fr=  b.fric = function (fr) {var b=this
        if(U(fr)){return b.f().GetFriction()}
        b.fs(function(f){
            f.SetFriction(fr)
        })
        return b
    }
    b.stat = function () {var b=this,
        v = b.lV()
//huh??? oh can get/set type of body
        b._linVel = V(v.x, v.y)
        b.type(0)
        return b

    }
    b.kin = function () {return this.type(1)}
    b.DFR = b.DFB = function (d, f, r) {
        return this.den(d).fric(f).rest(r)
    }
    b.DBF = function (d, r, f) {
        var b = this
        b.den(d)

        if (N(r)) {

            this.rest(r)
        }

        if (N(f)) {
            b.fric(f)
        }

        return b
    }
    b.d=  b.den=function(d){var b=this

        if (U(d)) {
            return b.f().GetDensity()
        }

        b.fs(function(f){
            f.SetDensity(d)
        })

        b.ResetMassData()
        return b
    }
    b.sen=function(s){var b=this
        b.fs(function(f){
            f.sen(s)
        })
        return b}
    b.r=  b.bo=b.rest=function(r){var b=this

        if (U(r)) {
            return b.f().GetRestitution()
        }

        b.fs(function (f) {
            f.SetRestitution(r)
        })

        return b


    }





    b.cir= function(){var b=this,g=G(arguments), o= g.f, fd,  h,  f

        //if passed array, it assumes it is arguments for ONE cir
        if(g.A){return b.cir.apply(b, g.f)}
        //if you pass at least two objects,
        // it makes multiple cirs and passes back b
        if(O(g.s)){
            g.e(function(c){b.cir(c)})
            return b }
        // can pass obj
        // can pass: c C [r] [x] [y]
        // can pass: c [r] [x] [y]
        // can pass: [r] [x] [y] [c] [C]
        o = g.O? g.f
            :S(g.s)?{c: g.f,C: g.s, r:g[2],x:g[3],y:g[4]}
            :S(g.f)?{c: g.f,r: g.s, x:g[2],y:g[3]}
            :{r: g.f,x: g.s,y:g[2],c:g[3],C:g[4]}

        o.x = N(o.x,0)
        o.y =  N(o.y,0)
        o.r =  N(o.r,40)
        o.b =  N(o.b,.5)
        o.f =  N(o.f,.5)
        o.al=  N(o.al, 1)
        o.s = D(o.s)? o.s: 0; if(g.n){o.s=1}
        o.d =  N(o.d,.5)

        fd = new b2d.FixtureDef
        fd.d(o.d).r(o.b).fr(o.f)
        fd.shape = new b2d.CircleShape(o.r/30)
        fd.shape.SetLocalPosition(V(o.x, o.y, '-'))
        fd.isSensor = o.s? true : g.n? true: false
        f = b.f(fd)
        f.K(o.k)
        if(o.c!=0){

            f.g = w.g.h().cir(o)

            f.bS(f.g)
        }
        return f

    }


    b.iD=function(){return this.GetType()==2}
    b.iK=function(){return this.GetType()==1}
    b.iS=function(){return this.GetType()==0}
    b.X=function(x){var g=G(arguments),pos=this.XY()
        if(U(x=g[0])){return pos.x}
        this.XY(_.upd(pos.x,x,g),pos.y)
        return this}
    b.Y=function(y){var b=this,
        g=G(arguments),
        pos=b.XY()

        if(g.u){return pos.y}

        this.XY(pos.x,
            _.upd(pos.y,y,g))
        return this
    }
    b.XY=function(x,y){var b=this,g=G(arguments),
        newPos,pos
        if(x==='*'){x =R(10) }
        if(y==='*'){y =R(10)   }

        if(g.u){
            pos = b.GetPosition()

            return pos.m().tF(0)

        } //used to parseInt.. necessary?

        if(b2d.iB(x)){
            y=x.Y()
            x=x.X()
        }

        y= N(y)?y:x

        newPos= V( x/30, y/30 )
        this.SetPosition(newPos)
        return this
    }
    b.mid=function(){var b=this,w= b.W()
        return   b.XY(w.w/2, w.h/2)
    }


    b.aV=b.angVel= function(vel){
        if(U(vel)){return this.GetAngularVelocity() }
        this.SetAngularVelocity(vel)
        return this
    }
    b.lV= function(){var b=this,g=G(arguments),
        v=b.GetLinearVelocity(), o,lV
        // can pass in V | x,y
        // or if u pass JUST x, it will set ONLY x, keeping y UNTOUCHED
        //(same as vX) .. but why? eh.. can be better, if u already hav vX, no need to default to it
        if(g.u){return v}
        lV=U(g[1])?V(g[0],v.y):V(g[0],g[1])
        b.SetLinearVelocity( lV )
        return b.wakeUp()
    }


    b.vX=function(x){var b=this,g=G(arguments),
        v= b.lV()
        if(g.u){return v.x}
        b.lV(x, v.y)
        return b}
    b.vY=function(y){var b=this
        if(U(y)){return b.lV().y}
        return b.lV(b.lV().x,y)}
    b.lD = b.linDamp=  function(damp){
        if(U(damp)){return this.GetLinearDamping()}
        this.SetLinearDamping(damp)
        return this}
    b.aD= b.angDamp=function(){
        var b=this,g=G(arguments),
            d=g[0]
        if(U(d)){return b.GetAngularDamping()}
        if(d=='++'){d=10000}
        b.SetAngularDamping(d)
        return b
    }
    b.damp=function(l,a){
        l=N(l)?l:1000
        a=N(a)?a:l
        this.lD(l).aD(a)
        return this}
    b.rt=b.rot =function(angle,ms){var b=this,g=G(arguments),r=g[0],ms=g[1],
        a=Math.toDegrees(b.GetAngle()) //currAng
        if(U(r)){return a}
        if(N(ms)){b.stop= I(function(){b.rot(r,'+')}, ms)}
        else {b.SetAngle(M.toRadians(g.p?a+r:g.n?a-r:g.m?a*r:g.d?a/r:r))}
        return b}
    b.fixedRot= p.sFR= p.fR=function(bool){
        this.SetFixedRotation(bool? true: false)
        return this}
    b.fR=b.fixRot=function(){ return this.fixedRot(true) }
    b.FR=function(){ return this.fixedRot(false) }
    f.rot=function(rot, g){ return this.B().rot(rot, g) }

    b.wake = b.wakeUp=function(){
        this.SetAwake(true); return this}
    b.awake= function(){
        var g=G(arguments)
        this.SetAwake(g.n? false:true)
        return this}
    b.sleep=function(){
        this.SetAwake(false); return this}
    b.W= function(){return this.GetWorld()}
    b.I= function me(i, v, v2){ var b=this, g=G(arguments),o
        //apply impulse. pass impulse as two nums, or obj //and pass in location, defaults to body center
        if(g.A){return b.I.apply(b,g.f)}
        o= N(g.s)?{i:V(g.f, g.s),v: g.t} :{i: g.f,v: g.s}
        o.i=  o.i || b.v().d(40)
        o.v=  o.v || b.wC()
        b.ApplyImpulse(o.i,  o.v.div())
        return b
    }
    b.wC=   function(){var b=this,w=b.W(),g=G(arguments)
        //gives {x,y}, but of its CENTER-OF-MASS
        if(g.p){return b.XY(w.hW, w.hH) }
        return b.GetWorldCenter().m()
    }
    b.lC=   function(){var b=this,w=b.W(),g=G(arguments)
        //gives {x,y}, but of its CENTER-OF-MASS
        if(g.p){return b.XY(w.hW, w.hH) }
        return b.GetLocalCenter().m()
    }
    b.F=  function(){
        //apply force. pass impulse as two nums, or obj
// and pass in location, defaults to body center
        var b=this, g=G(arguments),o
        o= N(g[1])? {f:V(g[0],g[1]), wP:g[2]  }
            : {f:V(g[0]), wP:g[1] }
        o.wP=o.wP||b.wC()
        b.ApplyForce(o.f, o.wP)
        if(g.p){cjs.t(function(){  b.ApplyForce(o.f, o.wP) })}
        return b
    }
    b.mass = function(m){
        if( U(m) ){  return ( this.GetMass() * 900 ) / 100 }
    }
    b.n=  b.num = b.count = function () {
        return this.m_fixtureCount
    }
    b.N=  b.next =  b.gN =function(){ return  this.GetNext()   }
    b.tf =b.transform=function(tf){var b=this
        if(U(tf)){return b.GetTransform() }
        b.SetTransform(tf)
        return b}

    b.rad = function () {
        return this.f().rad()
    }
    b.H = function () {
        return this.f().H()
    }
}
function fixt(){
    f.d=  f.den=function(den){if(U(den)){return this.GetDensity()}
        this.SetDensity(den)
        this.body().ResetMassData()
        return this}
    f.B= f.body=function(){return this.GetBody()}

    f.kin=function(){var b=this.B(); b.kin.apply(b, arguments); return this}
//f.getType = f.gT = function(someType){var b=this.B(), t=b.GetType(); return  D(someType)?(someType==t):t}
    f.fr=f.f=  f.fric=function(fric){if(U(fric)){return this.GetFriction()}
        this.SetFriction(fric);return this}


    f.r=  f.bo=  f.rest=  function(rest){if(U(rest)){return this.GetRestitution()}
        this.SetRestitution(rest);return this}
    f.sen =  function(s){var f=this
        if(U(s)){return f.IsSensor()}
        if(s=='/'){s= f.SetSensor(!f.IsSensor() )}
        else{f.SetSensor( s?true:false)}
        return f
    }
    f.dyn=function(){var b=this.B(); b.dyn.apply(b,arguments); return this}
    f.isBType = f.isType = function(t){var f=this
        if(t){return f.bType()==t}}
    f.bType=function(){
        return this.B().GetType()
    }
    f.stat=function(){var b=this.B(); b.stat.apply(b,arguments); return this}

    f.xx=  f.kill=f.remove=function() {
        if (this) {this.removeSprites()

            if (this.B()) {
                this.B().xF(this)
            }
        }
    }
//f.setRemove = function(){var f=this; setTimeout(function(){f.B().destroyFixt(f)},10)} //can combine with kill?
//f.setDestroy=function(){this.B().K('destroy'); return this}
    f.xB= f.xX= f.XX=  function(){if(this && this.B()){ this.B().xx() }}
    f.xSp= f.Xx=  f.removeSprites=function(){var f=this
        this._sp = this._sp || []
        this.SP = this.SP || []
        this.sprites = this.sprites||[]
        _.e(f.sprites, function(s){
            if(O(s) && s.parent ){
                s.remove()
            }
        })

        this.sprites=[]
        this_sp=[]
        this.SP=[]
        return f
    }


    f.iS=function(){return this.B().iS()}
    f.iD=function(){return this.B().iD()}
    f.iK=function(){return this.B().iK()}

    f.rad = function(){return this.H().m_radius*30}
    f.H=  function(h){ //should let user specify dimensions of shape, // not just have to pass formed shape in
        if(U(h)) {return this.GetShape()}
        this.m_shape = h
        // it DOES WORK! // but is this much different than // just replacing the fixt?
        return this}

    f.W= function(){return this.B().W()}

    f.iC = function () {
        return this.H() && this.H().m_type == 0
    }
    f.hT = f.hType = function () {
        return this.H().m_type
    }
    f.pos = function () {// for circs
        return V(
            this.H().m_p.x * 30,
            this.H().m_p.y * 30
        )
    }

    f.N=  f.next=function(){return this.GetNext()}
    f.pX=function(){return this.pos().x}
    f.pY=function(){return this.pos().y}
    f.cen=  f.mid= f.cent=f.center=function(){
        //center point of its BOUNDING BOX
        var f=this,b= f.B(),w= b.W(), g=G(arguments),
            bd=f.GetAABB(),
            v=M.lC(bd.lowerBound, bd.upperBound).mult()
        if(g.p){w.dot(v)}
        return  v
    }
    f.lV=function(){var f=this,
        b=f.B(),
        g=G(arguments)

        b.lV.apply(b, g)

        return f
    }



}





    b2d.AHx=  b2d.AShapex= function(pam, p2){//dep .. use polyH
        var ag,arr,h
        ag=(p2)? arguments: pam
        arr = _.m(ag, function(v){return V(v).div()})
        h = b2d.pH()
        h.arr( arr )
        return h
    }
    pH.setAsVec=function(v, sc){var pH=this //used by SepLib
        pH.SetAsVector(_.m(v,function(v){return V(v).div(N(sc,30))}))
        return pH}
    b.ap=function(met,g){var b=this;return   b[met].apply(b,g)}
    w.dance=function(){var w=this
        w.e(function(b){if(b.iD()){b.thr()}})//w.eD
        return w}
    b2d.oDef = function(o){o=o||{}
        o.x =  N(o.x,0)
        o.y =  N(o.y,0)
        o.a =  N(o.a,0)
        o.w =  N(o.w, 50)
        o.h =  N(o.h, 50)
        o.r =  N(o.r, 50)
        o.c = o.c || 'z'
        o.C = o.C || 'w'
        return o}
    pH.vs= pH.vertsx= function(){var pH=this
        return _.m(pH.m_vertices, function(v){return [v.x*30, v.y*30]})
    }
    pH.arr=function(v){var p=this
        v=_.m(v,function(v){return V(v).d()})
        p.SetAsArray(v, v.length)
        return p}
    pH._box=function(){var pH=this
        pH.SetAsOrientedBox.apply(this,arguments)
        return pH}
    pH.box=function(){var pH=this, g=G(arguments),
        o=g.O?g.f:
            _.x({w:g.f,h:g.s}, O(g.t)?
            {x:V(g.t).x, y:V(g.t).y, a:g[3]}:
            {x:g.t, y:g[3], a:g[4]})
        o.x =  N(o.x,0)
        o.y =  N(o.y,0)
        o.a =  N(o.a,0)
        o.w =  N(o.w, 50)
        o.h =  N(o.h, 50)
        return pH._box(o.w/60,o.h/60,V(o.x,o.y,'-'),M.tR(o.a))}
    b2d.fD=function(h){var g=G(arguments),
        fD= new b2d.FixtureDef()
        if(g.n){f.isSensor = true}
        if(h){fD.shape = h}
        return fD}
    b2d.pH= function(W,H,x,y,a){var g=G(arguments),
        p=new b2d.PolygonShape()
//| 50,200[[,200,60,45
//| [20,300],.. //-> g.a(p,'arr')// -> g.a(p.arr)

        if(g.O){

        }

        if(g.N_){p.box(g.f, g.s, g.t, g[3], g[4])}
        else if(g.OO_){$a(p, 'arr', g)}
        return p
    }

//makes a fixtDef with a polyShape
    b2d.pol = function(){
        return b2d.fD($a(b2d.pH, arguments)).d(1).fr(.2).r(.2)
    }
    b2d.rec= function(){var g = G(arguments), r, fD, o, v,p=b2d.pH()
        if(g.OO_){p.arr(g)}  //b2d.cant make multiple recs at once anyway.. so this must mean VERTS!

        else {
            o=g.O?g.f:
            {w:g.f,h:g.s,x:g.t,y:g[3],a:g[4],d:g[5]}
            p.box(o)}

        fD=b2d.fD(p).d(N(o.d,.5))
        if (g.n){fD.isSensor = true}

        return fD

        /*
         //will set cols unless you pass in 0
         if(o.c==0){o.c=null}
         if(o.c==00){o.c=null;o.C=null}
         if(o.c=='*'){o.c=$r()}
         if(o.c=='**'){o.c=$r();o.C=$r()}
         o.c =o.c||'z'
         o.C =o.C||'w'
         o.l = _.tN(o.l,4)
         o.c1 = o.c1||'z'
         o.c2 = o.c2||'w'
         o.s1= _.tN(o.s1)
         o.s2= _.tN(o.s2,1)
         //
         o.x1 = _.tN(o.x1)
         o.y1 = _.tN(o.y1)
         o.x2 =_.tN(o.x2);
         o.y2 = N(o.y2)?o.y2:N(o.r)? o.r*2:100
         o.r1=_.tN(o.r1)
         o.r2=_.tN(o.r2,200)
         // o.i image
         //o.k kind
         // o.p  layer position


         //o.bm//o.bM
         //o.g gradient

         //o.m mass
         //o.t type
         // o.v = o.v || [] //verts
         //o.X
         //o.z clr
         */
    }
    //b.rec -> graphics
    b._f= function(f,c){var b=this,g=G(arguments)
        if(g.u){return b.GetFixtureList()}
        f=b.CreateFixture(f)
        if(c){f.C(c)}
        return f}
    b.f=function(){var b=this,g=G(arguments), o,
        ag=g[0],
        l= g.L,
        FD=b2d.iFD
        if(g.u){return b._f()}
        if(g.S_){l--}
        if(g._S){l--}

        if(g.A){g.e0(function(gg){b.ap('f', g.G(gg))})}//   [ [],[],fD,4,[] ]

        else if(g.SA){
            g.e1(function(f){//       'c',  [ [.,.],[.,.],fD ]
                if(FD(f)){b._f(f, g.f)}
                else {
                    if(!S(_.f(f))){f.unshift(g.f)}
                    if(FD(f[1])){b._f(f[1],f[0])}
                    else { $a(b,'f',f) }}})}

        else if (FD(g.f)){return b._f(g[0])}//(fD)
        else if (g.S_ && FD(g.s)){ b._f(g[1], g[0]) }//('c', fD)

        else if(O(g.s)){
            o=g.S_?{c:g.f,v:g.r}:{v:g}//if (g.n) {o.s=1}
            b.pol(o)
            if(g.n){b.sen(1)}}//pol

        else if(l==1||l==3){
            o={c:g[0], r:g[1], x:g[2], y:g[3]}
            if(g.n){o.s=1}
            b.cir(o)}

        else {
            o={c:g[0], w:g[1],  h:g[2], x:g[3], y:g[4], a:g[5]}
            if(g.n){o.s=1}
            b.rec(o).C(o.c)
            // $a(b,'rec', g.g)
        }
        return b.d(1)
    }
    dD_Defs=function(){
        bD.XY= bD.p = bD.ps = bD.xy= function (x, y) {var bD=this, g = G(arguments),p
            if(g.u){return bD.position.m()}
            p=V(g.f, g.s, '-')
            bD.position.Set(p.x,p.y)
            return bD}
        bD.X = function (x) {var bD=this, p = bD.XY()
            if(U(x)){return p.x}
            return bD.XY(x,p.y)}
        bD.Y = function (y) {var bD=this, p = bD.XY()
            if (U(y)) {return p.y}
            return bD.XY(p.x, y)}
        b2d.bD= function(x,y){var v=V(x,y),
            bD = new b2BodyDef()
            return bD.XY(N(v.x,100),N(v.y,100))}
    };dD_Defs()
    b2d.dD= b2d.D= b2d.dyn=function(x,y){
        var v=V(x,y)
        return b2d.bD(v.x, v.y).dyn()
    }
    w.D=function(){var w=this, g=G(arguments,'k'),o,b
        if(g.u){return w.D(w.hW, w.hH)}
        o= g.O? g.f:
            g.O_? {p:g.f, f:g.r}:
            {p:[g.f,g.s],f:_.r(g,2)}
        b = w.CreateBody( b2d.D(o.p) )
        b.K(g.k)
        $a(b, 'f', g.G( o.f ) )
        return b
    }
    //w.sp=w.ct=function(x,y){var w=this;return w.hud.ct(x||w.hW,y||w.hH).drag()}


    df.rec=  function (o){
        o.al=N(o.al,1)
        o.c = o.c || 'z'
        o.C = o.C || 'w'
        o.x =  N(o.x,0)
        o.y =  N(o.y,0)
        o.a =  N(o.a,0)
        o.w=N(o.w,50)
        o.h=N(o.h,50)
        return o}


////////////////////////
PH=function(){W()
        //w.rec()
        b= w.S(600,200)

        b.pol([-100,0],[0,-100],[100,0])

        b.cir({r:50,lf:['g','w']})

        b.rec({w:400, h:20, lf:['g','w']})

        b.rec(400,20,0,0,45)


    }
REC=function(){W(0).Y();y.thr()

        w.i.h(100,100,'+')
            .c({l:20, C:'y', lf:{c1:'b'}})
            .dc(100)
            .dr(300,100)


        w.$h(200,450,'w',20,'+')
            .lf({x:-100, c1:'r',c2:'y'})
            .dr2({w:300,h:100,x:0,y:-100}, {w:100,h:300})

        w.ct(600,200).rec(
            {w:300,h:200, c:'r',C:'o',l:10,a:-5 },
            {w:100,h:200,a:20, c:'b', C:'w', l:20})
            .rec({w: 100, h:200, a:20, c: 'b', C:'w', l: 20}).XY(50,50)// c: {l:20, C:'y'},, lf:{c1:'b',c2:'z'}  //lf:{c1:'r', c2:'b'}//lf:['r','b']//,  bf:1


        w.ct(600,450)
            .rec({w:200, h:100, c:'r', C:'o', l:10, a:-5})
            .rec({w:100, h:200, c:'r', C:'o', l:10, a:5})

        w.$h(900,200,'+').lf(['b','y'])
            .dr2({w:200, h:200})

        w.$h(900,400,'+')
            .lf({c1:'r', c2:'y', x1:-100})
            .dr2({w:300,h:100,x:0,y:-100}, {w:100, h:300})


        b=w.D(800,300)
        b.rec({w:250, h:300,   bm:'me'})
        b.rec({w:200,h:200, lf:1, l:2})


        w.rec(145,120,10,80,'o')

        w.$h(200,200,'+')
            .rec(145,120,100,200,'u','y', 20)


    }
wowOld=function(){
        pH.arr=  function(){var pH=this
            var v = b2d.verts.apply(null, arguments)

            pH.SetAsArray(v, v.length)

            return pH

        }
//make polyShape (by box or arr) for a fD
        b2d.pH=  b2d.polyH=function me(W,H,x,y,a){var g=G(arguments),
            p=new b2d.PolygonShape()
            if(g.N_){//| 50,200[[,200,60,45
                p.box(g.f,g.s,g.t,g[3],g[4])}

            else if(g.O_){//| [20,300],..

                $a(p, 'arr', g)

                //-> g.a(p,'arr')
                // -> g.a(p.arr)
            }
            return p
        }
        pH.set= function(){var pH=this, g=G(arguments)
            if(N(g[0])){
                pH.box(g[0],g[1],g[2],g[3],g[4])}
            else if(O(g[0])){
                pH.arr.apply(pH,g)}
            return pH
        }
    }
WCIR=function(){W()._(function(){

    w.cir({x:500, y:350, r:100, c:'b', C:'z', l:20 }).stat()
    w.D(800,350).cir({r:100, c:'y',  C:'z',  l:100}) //.stat()
})}


old=function(){
    b.pols=function(b1){var b=this
        b1.fs(b)
        return b}



}
old = function () {
    // eh
    b2d.F = function (k) {
        var arr = []
        w.e(function (b) {

            b.fs(function (f) {
                if (f.is(k)) {
                    arr.push(f)
                }
            })
        })
        return arr
    }
    b2d.B = function (k) {
        var arr = []
        w.e(function (b) {
            if (b.is(k)) {
                arr.push(b)
            }
        })
        return arr
    }
//

    b.Lxx= function(vx, vy, damp){var b=this
        if(U(vx)){b.lV(0,0).lD(0)}
        else {
            b.vX(vx)
            if(N(vy)){b.vY(vy)}
            if(N(damp)){b.lD(damp)}}
        return b}


    //bodyDef.bullet = true; //before creating body, or
//body.SetBullet(true); //after creating body

//b.setDestroy=function(){ return this.K('destroy') }; b.setDestroyIf=function(data){if(this.is(data)){this.setDestroy()}}

//b2d.H=   b2d.shape    =function(){var g=G(arguments); return g[1]? b2d.pH(g) :b2d.cH(g[0])}


    w.dynx=w.bodyx=w.Ax=function(x, y, fD){var w=this, b,bd

        //pass body def
        if(b2d.isBDef(x)){bd=x; fD=y}

        //make body def
        else {
            if(O(x)){fD=y; y=x.y; x=x.x}

            x= _.tN(x, w.hW)
            y= _.tN(y, w.hH)

            bd=b2d.dyn(x,y)}

        b = w.CreateBody(bd)

        // pass in one fixture or an ARRAY( of fixts )
        if(fD){b.fixt(fD)}
        return b}




//w.K=function(){return this.B.apply(this,arguments).kin()}

    w.vertsx= function(x,y,  arrs ){var w=this

        var bod = w.dyn(x, y)

        _.e(arrs, function(f){
// bod.convex( arr[0],  _.rest(arr)  )
            //  bod.convex( fixt )

            bod.convex.apply(bod, f)

        })

        return bod
    }


    w.vertsKinx= function(x, y, arrs){

        var bod = this.kin(x,y)

        _.each(arrs, function(arr){
            bod.convex(arr[0],  _.rest(arr))
        })

        return bod}

    /*
     A joint edge:
     -connects bodies and joints together in a joint graph
     (each body is a node and each joint is an edge)

     -belongs to a doubly linked list maintained in each attached body
     (Each joint has two joint nodes, one for each attached body)


     //these are all obj refs, not functions

     .joint
     .other(other body)
     .prev(b2JointEdge):the previous joint edge in the body's joint list
     .next(b2JointEdge):the next joint edge in the body's joint list
     */
    b.DNotUsedYet=function(c){var b=this,w= b.W(),

        b1= w.D(b.X(),b.Y())
        return b1

    }

//f.or = function(){return this.body().wor()}

    old = function () {
        MAKEWALLS = function () {
            makeWalls2 = [
                [10, 300, 20, 460],
                [990, 300, 20, 460],
                [250, 0, 400, 20],
                [730, 0, 400, 20],
                [250, 590, 400, 20],
                [730, 590, 400, 20]
            ] //bas in the canvas size?
            makeWallsTiny = [
                [10, 300, 20, 600],
                [990, 300, 20, 600],
                [300, 0, 1200, 20],
                [300, 590, 1200, 20]
            ]
            makeWallsFull = [
                [10, 300, 20, 1200],
                [990, 300, 20, 1200],
                [300, 0, 3000, 20],
                [300, 590, 3000, 20]
            ]
            makeWallsLong = [
                [10, 300, 20, 1200],
                [1600, 300, 20, 1200],
                [300, 0, 3000, 20],
                [300, 590, 3000, 20]
            ]
        }
    }


////////////////////////////////////////////////
    w.dbX = function () {
        var w = this

        w.line(0, 0, w.W(), w.H(), '+')

        w.line(0, w.W(), w.H(), 0, '+')

        if (N(w.w) && N(w.h)) {
            w.line(0, 0, w.w, w.h)
            w.line(0, w.W(), w.H(), 0)
        }
    }


    w.rWx = function (col, h) {
        var w = this
        if (!S(col)) {
            h = col;
            col = 'b'
        }
        h = N(h) ? h : w.H()
        return w.S(10, w.H() - (h), col, 20, h)
    }
    w.bWx = function (col, W) {
        var w = this
        if (!S(col)) {
            W = col;
            col = 'b'
        }
        W = N(W) ? W : w.W()
        return w.S((W / 2), w.H() + (h / 2) - 10, col, W, 20)
    }
    w.hWx = function (col, W, x, y) {
        var w = this, g = G(arguments), cW = w.canvas.width, cH = w.canvas.height

        if (!S(col)) {
            y = x;
            x = W;
            W = col;
            col = 'x'
        }

        if (U(y)) {
            y = x;
            x = null
        }
        W = (W == '+') ? cW : N(W) ? W : cW / 3
        x = N(x) ? x : cW / 2 - W / 2
        y = (y == '+') ? cH - 10 : (y == '-') ? 10 : N(y) ? y : cH / 2
        y -= 10
        return w.R(col, W, 20, x, y).bo(.2).K('wall')     //default bo?
    }

    w.boxWallsx = w.xWx = function (col, W, h) {
        var w = this

        if (!S(col)) {
            h = W;
            W = col;
            col = 'o'
        }
        W = N(W) ? W : w.W()
        h = N(h) ? h : w.H()
        w.floor = w.R(col, W, 20, 0, h - 20)
        w.right = w.R(col, 20, h, W - 20, 0)
        w.roof = w.R(col, W, 20, 0, 0)
        w.left = w.R(col, 20, h, 0, 0)
        w.w = W
        w.h = h            // if(g.N){ w.camLims(  0,  w.w-w.s.W(),  0, w.h-w.s.H())}

        return w
    }
    b2d.setupDebugDrawx = setupDebugDrawx = function () {
        debugDraw = DebugDraw()
        debugDraw.SetSprite(w.context)
        debugDraw.dS(30)
        debugDraw.SetFillAlpha(.6)
        //debugDraw.SetLineThickness( 3000 )
        debugDraw.SetFlags(shB || jB)
        w.dD(debugDraw)
    }


    w.bodyX = w.AX = function (bD, fD) {
        var w = this, b

        if (b2d.isBDef(bD)) {
            b = w.CreateBody(bD)
        }


        if (fD) {
            b.fixt(fD)
        }

        //b.den(1)

        return b
    }
    w.dynX = w.dynamicX = function (x, y, fD) {
        var w = this, body

        if (O(x)) {
            fD = y;
            y = x.y;
            x = x.x
        }
        x = N(x) ? x : 500
        y = N(y) ? y : 250

        return w.body(b2d.dyn(x, y), fD)
    }


}