pH.vs = pH.vertsx = function () {
    var pH = this
    return _.m(pH.m_vertices, function (v) {
        return [v.x * 30, v.y * 30]
    })
}
pH.arr = function (v) {
    var p = this
    v = _.m(v, function (v) {
        return V(v).d()
    })
    p.SetAsArray(v, v.length)
    return p
}
pH._box = function () {
    var pH = this
    pH.SetAsOrientedBox.apply(this, arguments)
    return pH
}
pH.box = function () {
    var pH = this, g = G(arguments),
        o = g.O ? g.f :
            _.x({w: g.f, h: g.s}, O(g.t) ?
            {x: V(g.t).x, y: V(g.t).y, a: g[3]} :
            {x: g.t, y: g[3], a: g[4]})
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.a = N(o.a, 0)
    o.w = N(o.w, 50)
    o.h = N(o.h, 50)
    return pH._box(o.w / 60, o.h / 60, V(o.x, o.y, '-'), M.tR(o.a))
}
pH.setAsVec = function (v, sc) {
    var pH = this //used by SepLib
    pH.SetAsVector(_.m(v, function (v) {
        return V(v).div(N(sc, 30))
    }))
    return pH
}
f.cen=  f.mid= f.cent=f.center=function(){
    //center point of its BOUNDING BOX
    var f=this,b= f.B(),w= b.W(), g=G(arguments),
        bd=f.GetAABB(),
        v=M.lC(bd.lowerBound, bd.upperBound).mult()
    if(g.p){w.dot(v)}
    return  v
}

f.pX=function(){return this.pos().x}
f.pY=function(){return this.pos().y}
f.rad = function(){return this.H().m_radius*30}
f.H=  function(h){ //should let user specify dimensions of shape, // not just have to pass formed shape in
    if(U(h)) {return this.GetShape()}
    this.m_shape = h
    // it DOES WORK! // but is this much different than // just replacing the fixt?
    return this}
f.iC= function(){ return this.H() && this.H().m_type == 0 }
f.hT= f.hType=function(){return this.H().m_type}
f.pos = function(){// for circs
    return V(this.H().m_p.x * 30, this.H().m_p.y * 30)
}

f.$=function(fn){var f=this, b=f.B(), w=b.W()
    w.$(function(o){
        w.q(o.x, o.y, function(fx){
            if(f==fx){  _.b(fn,f)(o) }
        })
    })
    return f
}


f.kill   = function () {
    var f=this,b= f.B(),w= b.W()
    if (!f) {return}
    if(w._fPreKill){w._fPreKill(f)}
    if(b){b.rmF(f)}
}//= f.xx = f.remove
f.killB=  f.kB= f.xB = f.xX = f.XX = function () { if (this && this.B()) {
    this.B().kill() }}
fixDef()
p=b
b.mid=function(){var b=this, w= b.W()
    return b.XY(
        w.w/2,
        w.h/2
    )
}
b.tf =b.transform=function(tf){var b=this
    if(U(tf)){return b.GetTransform() }
    b.SetTransform(tf)
    return b}
b.H = function () {return this.f().H()}
b.fs=b.e=function(fn){var b=this,  g=G(arguments),
    fl=b.f(), fn = g.f, arr = []

    while (fl) {
        arr.push(fl);
        fl = fl.GetNext()
    }

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

b.wC=   function(){var b=this,
    w=b.W(),
    g=G(arguments)
    //gives {x,y}, but of its CENTER-OF-MASS

    if(g.p){return b.XY(w.hW, w.hH) }

    return b.GetWorldCenter().m()
}



b.lC=   function(){var b=this,w=b.W(),g=G(arguments)
    //gives {x,y}, but of its CENTER-OF-MASS
    if(g.p){return b.XY(w.hW, w.hH) }
    return b.GetLocalCenter().m()
}
b.rmF =    function (f) {
    if(f){this.DestroyFixture(f)}
    else {this.fs(function (f) {this.rmF(f)  })}
    return this
} //= b.xF=  b.Xx=  b.Xf =b.E =  b.clr = b.empty = b.clear
b._r=function(n){n=N(n,100)
    h = this.f().H()
    if (h.SetRadius) h.SetRadius(n/30)
}
b.hit= b.h=function (x, y, dot) {
    var b = this,
        w = b.W(),
        g=G(arguments),hit=false
    if (g.p) {w.dot(x, y)}
    b.fs(function (f) {
        if (f.hit(x, y)) { hit = true }
    })
    return hit
}
b.$=function(fn){var b=this, w=b.W()

    w.$(function(o){

        w.q(o.x, o.y, function(f){
            if(f.of(b)){ _.b(fn,f)(o) }
        })
    })

    return b

}
b.$$=function(fn){var b=this, w=b.W()
    w.$$(function(o){w.q(o.x, o.y, function(f){

        if(f.of(b)){ _.b(fn, f)(o)}
    })
    })
    return b
}
b.kill = b.xx = b.destroy = function () {
    var b = this, w = b.W()
    b.SetActive(false)
    if (w._preKill) {w._preKill(b)}
    b.W().DestroyBody(b)
    return b.pos()
}

function fixDef() {
    fD.H = function (h) {
        if (U(h)) {
            return this.shape
        }
        this.shape = h
        return this
    }
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
    fD.fr = fD.f = fD.frc = fD.fric = function (f) {
        var fD = this
        if (U(f)) {
            return this.friction
        }
        fD.friction = f
        return fD
    }
    fD.d = fD.den = function (d) {
        var fD = this
        if (U(d)) {
            return fD.density
        }
        fD.density = d;
        return fD
    }
    fD.r = fD.bo = fD.rst = fD.rest = function (r) {
        var fD = this
        if (U(r)) {
            return fD.restitution
        }
        fD.restitution = r;
        return fD
    }
    fD.sen = fD.sensor = fD.iS = function (isSensor) {
        if (U(isSensor)) {
            return this.isSensor
        }
        this.isSensor = isSensor ? true : false
        return this
    }


    fD.K =   function (k) {var fD=this
        if (U(clas)) {return fD.getClass()}
        fD.classes = fD.classes || []
        fD.classes.push(clas)
        return fD
    }
    fD.getClasses = fD.getClass = function () {var g = G(arguments), fD=this, classes
        fD._K = fD._K|| []
        ks = fD.classes.join(' ')
        if (g.p) {ks += ' : ' + fD.body().getClasses()}
        return ks}
    fD.D = fD.data = function (data) {
        if (U(data)) {return this.userData}
        this.userData = data;
        return this
    }

}
bodDef()
obvious()
wake()
fixRot()
function bodDef() {
    bD.XY = bD.p = bD.ps = bD.xy = function (x, y) {
        var bD = this, g = G(arguments), p
        if (g.u) {
            return bD.position.m()
        }
        p = V(g.f, g.s, '-')
        bD.position.Set(p.x, p.y)
        return bD
    }
    bD.X = function (x) {
        var bD = this, p = bD.XY()
        if (U(x)) {
            return p.x
        }
        return bD.XY(x, p.y)
    }
    bD.Y = function (y) {
        var bD = this, p = bD.XY()
        if (U(y)) {
            return p.y
        }
        return bD.XY(p.x, y)
    }
    bD.bul = bD.bull = bD.fR = function (iBu) {
        var bD = this
        if (U(iBu)) {
            return bD.bullet
        }
        bD.bullet = iBu;
        return bD
    }
    bD.inertia = function (inertia) {
        if (U(inertia)) {
            return this.insertiaScale
        }
        this.insertiaScale = inertia;
        return this
    }
    bD.T = bD.typ = bD.kind = function (type) {
        if (U(type)) {
            return this.type
        }
        this.type = type
        return this
    }
    bD.dyn = function () {
        return this.T(2)
    }
    bD.stat = function () {
        return this.T(0)
    }
    bD.kin = function () {
        return this.T(1)
    }
    bD.act = bD.setActive = function (isActive) {
        this.active = isActive ? true : false
        return this
    }
    bD.sleepy = bD.aS = function (canSleep) {
        this.allowSleep = canSleep ? true : false
        return this
    }
    bD.lV = function (v) {
        var bD = this
        if (U(v)) {
            return pD.linearVelocity
        }
        pD.linearVelocity = v
        return pD
    }
    bD.aV = function (vel) {
        if (U(a)) {
            return this.angularVelocity
        }


        this.angularVelocity = vel
        return this
    }
    bD.rt = bD.rot = bD.ang = function (ang) {
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
    bD.lD = function (dm) {
        var bD = this
        if (U(dm)) {
            return bD.linearDamping
        }
        bD.linearDamping = dm
        return bD
    }
    bD.aD = function (damp) {
        if (U(damp)) {
            return this.angularDamping
        }
        this.angularDamping = damp;
        return this
    }
}
function obvious() {


    f.N=  f.next=function(){return this.GetNext()}

    f.K =  function(){var f=this, g=G(arguments);
        this._K=this._K||[]
        if(g.u){return (this._K).join(' ')}
        if(g.O){this.K(g.f.k); return this}
        _.eW(g.f, function(k){ if( !f.of(k)){ f._K.push(k)} })
        return this
    }
    f.of=function(k){

        if(!this){return false}


        if(!k){return true}

        return this==k ||
            (S(k) && _.contains(this._K||[], k.trim()))
            ||
            (this.B() && this.B().of(k))


    }
    f.is=function(k){return k && this.of(k)

        //if(g.A){_.e(g.f, function(k){f.K(k)}); return f}
    }

    f.sen =  function(s){var f=this
        if(U(s)){return f.IsSensor()}
        if(s=='/'){s= f.SetSensor(!f.IsSensor() )}
        else{f.SetSensor( s?true:false)}
        return f}
    f.r=  f.bo=  f.rest=  function(rest){if(U(rest)){return this.GetRestitution()}
        this.SetRestitution(rest);return this}
    f.rot=function(rot, g){ return this.B().rot(rot, g) }
    f.fr=f.f=  f.fric=function(fric){if(U(fric)){return this.GetFriction()}
        this.SetFriction(fric);return this}
    f.d=  f.den=function(den){if(U(den)){return this.GetDensity()}
        this.SetDensity(den)
        this.body().ResetMassData()
        return this}
    f.lV=function(){var f=this, b=f.B(), g=G(arguments)
        b.lV.apply(b, g)
        return f
    }
    f.stat=function(){var b=this.B(); b.stat.apply(b,arguments); return this}
    f.dyn=function(){var b=this.B(); b.dyn.apply(b,arguments); return this}
    f.kin=function(){var b=this.B(); b.kin.apply(b, arguments); return this}
    f.B= f.body=function(){return this.GetBody()}
    f.W= function(){return this.B().W()}

    f.iS=  function(){return this.B().iS()}
    f.iD=   function(){return this.B().iD()}
    f.iK=   function(){return this.B().iK()}

    f.isBType = f.isType = function(t){var f=this
        if(t){return f.bType()==t}}
    f.bType=function(){return this.B().GetType()}
    b.n=  b.num = b.count = function () {return this.m_fixtureCount}

    b.N=  b.next =  b.gN =function(){ return  this.GetNext()   }

    b.X = function (x) {

        var g = G(arguments),
            pos = this.XY()
        if (U(x = g.f)) {
            return pos.x
        }
        this.XY(
            _.upd(pos.x, x, g), pos.y
        )
        return this
    }
    b.Y = function (y) {
        var b = this,
            g = G(arguments),
            pos = b.XY()

        if (g.u) {
            return pos.y
        }

        this.XY(pos.x,
            _.upd(pos.y, y, g))
        return this
    }
    b.XY = function (x, y) {
        var b = this, g = G(arguments),
            newPos, pos
        if (x === '*') {
            x = R(10)
        }
        if (y === '*') {
            y = R(10)
        }

        if (g.u) {
            pos = b.GetPosition()

            return pos.m().tF(0)

        } //used to parseInt.. necessary?

        if (b2d.iB(x)) {
            y = x.Y()
            x = x.X()
        }

        y = N(y) ? y : x

        newPos = V(x / 30, y / 30)
        this.SetPosition(newPos)
        return this
    }

    b.fr=  b.fric = function (fr) {var b=this
        if(U(fr)){return b.f().GetFriction()}
        b.fs(function(f){
            f.SetFriction(fr)
        })
        return b
    }
    b.sen=function(s){var b=this
        b.fs(function(f){
            f.sen(s)
        })
        return b}
    b.r=  b.bo=b.rest=function(r){var b=this
        if (U(r)) {return b.f().GetRestitution()}
        b.fs(function (f) {
            f.SetRestitution(r)
        })
        return b
    }
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
        if (U(d)) {return b.f().GetDensity()}
        b.fs(function(f){
            f.SetDensity(d)
        })
        b.ResetMassData()
        return b}
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
    b.iD=    function () {return this.GetType() == 2}
    b.iK=    function () {return this.GetType() == 1}
    b.iS=   function () {return this.GetType() == 0}
    b.rad = function(){return this.f().rad()}
    b.mass = function(m){
        if( U(m) ){  return ( this.GetMass() * 900 ) / 100 }
    }
    b.type = p.T = p.ty = p.t = function (a) {
        var b = this
        if (U(a)) {
            return b.GetType()
        }
        b.SetType(a)
        return b
    }
    b.dyn = function (resumeVel) {var b=this
        b.type(2)
        if (resumeVel == b && O(b._linVel)) {b.lV(b._linVel)}
        b._linVel = null
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
    b.ap=function(met,g){var b=this;return   b[met].apply(b,g)}
    b.of=function(k){

        if( b2d.iF(k) ){ k = k.B() }

        return !k ||  _.ct(this._K, k) || this == k

    }
    b.is=function(k){
        return k && this.of(k)
    }

    b.K= function(){var b=this,g=G(arguments);
        this._K = this._K || []
        if(g.u){return this._K.join(' ')}
        if(g.O){this.K(g.f.k); return this}
        _.eW(g.f, function(k){ if(!b.of(k)){b._K.push(k)}})
        return this
    }

}
function wake() {
    b.wake = b.wakeUp = function () {
        this.SetAwake(true);
        return this
    }
    b.awake = function () {
        var g = G(arguments)
        this.SetAwake(g.n ? false : true)
        return this
    }
    b.sleep = function () {
        this.SetAwake(false);
        return this
    }
}
function fixRot(){
    b.fixedRot= b.sFR= b.fR=function(bool){
        this.SetFixedRotation(bool? true: false)
        return this}
    b.fR=b.fixRot=function(){ return this.fixedRot(true) }
    b.FR=function(){
        return this.fixedRot(false)
    }}