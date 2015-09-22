ps= gpcas.geometry.PolySimple.prototype
pD= gpcas.geometry.PolyDefault.prototype
ps.n= ps.num = ps.numPoints=function(){return this.getNumPoints()}
ps.g=function(n){return this.getInnerPoly(n||0)}
ps.nP=function(){var pD=this,n
    n= pD.getNumInnerPoly()
    return n}
ps.n=ps.num = ps.numPoints=function(){return this.getNumPoints()}
ps.vs= function(){var p=this,vs=[]

    _.t(p.n(), function(i){vs.push([p.getX(i), p.getY(i)])})

    return vs
}
ps.g=function(n){
    return this.getInnerPoly(n||0)}
ps.nP=function(){var pD=this,n
    n= pD.getNumInnerPoly()
    return n}
pD.g=function(n){
    return this.getInnerPoly(n||0)}
pD.nP=function(){var pD=this,n
    n= pD.getNumInnerPoly()

    return n}
pD.I=pD.intersection
pD.X=pD.xor
pD.hH=function(){var pD=this
    var h
    pD.ps(function(p){if(p.isHole()){h=true}})
    return h
}
pD.n=pD.num = pD.numPoints=function(){
    return this.getNumPoints()
}

