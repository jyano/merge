
jointDef=function() {
    jd = b2d.Joints.b2MouseJointDef.prototype
    jd.sT = function (a, b) {
        var jd = this//=j.tS=    j.tg=j.tgS=j.ts=
        j.target.Set(a, b)
        return jd
    }
    jd.cC = jd.clC = jd.clCn = jd.cc = function (a) {
        var jd = this
        j.collideConnected = a ? true : false
        return jd
    }
    jd.mF = jd.mf = function (a) {
        var jd = this
        j.maxForce = a;
        return jd
    }
    jd.A = function (a) {
        var jd = this
        j.bodyA = a
        return jd
    }
    jd.B = function (b) {
        var jd = this
        jd.bodyB = b
        return jd
    }
}; jointDef()
w.mJ=function(o){var w=this
    if(o.m==0){return w}

    o=o||{}

    $.M()
    cjs.tick(function(){if(w.mj){w.mj.tg(_) }})
    $.oMU(function(){ w.MJ() })
    $.oMD(function(x,y){w.XY(x,y,
        function(f){if(f.ofClass(o.m)){w.mj = w.mJ(f.body(), _ )}
        })})

    return w}


w.eB=w.each=w.eachBody=function(l,uD){var w=this,
    bs = w.GetBodyList(),
    k,
    b

    //can pass a cb to be run on EACH body
    //can also pass a uD to restrict cb to
    //run only on bodies with that uD

    if(S(l)){k=l; l=uD} else {k=uD}

    while(bs){
        b  = bs
        bs = bs.next()
        if(b.has(k)){l(b)}
    }

    return w}
w.$$x=function(fn){var w=this
    w.UI().dblclick(function(e){

        fn(e.pageX, e.pageY)

    })
    return w
}



w.mouseJAt = function (p, k) {
    var w = this, mj
    if (N(p)) {  p = V(p, k)  }
    w.XY(p.x, p.y, function (f) {  mj = f.B().mouseJoint(p) })//, k
    return mj}
