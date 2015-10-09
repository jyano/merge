md=Bb.Model.prototype
md.at = md.attributes
md.at= function(){return this.attributes}
md.S= md.save
md.hC=function(at){var md=this,
    g=G(arguments),o
    o= g.F? {fn: g.f} :
        F(g.s)? {at: g.f, fn: g.s}:{}
    if(o.fn ){
        if(md.hC(o.at)){
            o.fn()
        }
        return this
    }
    return this.hasChanged(at)
}
md.J = md.tJ = md.toJSON
md.jS = md.tS = function () {
    return _.jS(this.J())
}
md.$l = md.lJ = function () {
    return $l(this.jS())
}


 