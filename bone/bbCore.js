$l('bbCore')
bb=Bb= Backbone


_.ex= $ext= ext=function ext(o){
    o.e = o.extend
    return o
    // https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
}

$P=function(){
    md=Bb.Model.prototype
    vw= Bb.View.prototype
    rt=Bb.Router.prototype
    cl=Bb.Collection.prototype
}
$P()

Bb.U=Bb.Utility
Bb.S=Bb.Sync


Bb.R=   Bb.Router
Bb.R.x=  Bb.R.e= Bb.R.extend
bb.V= bb.View
bb.V.x=bb.V.extend

Bb.M = Bb.Model
bb.M.x=bb.M.extend

Bb.C= Bb.Collection
bb.C.x= bb.C.extend

Bb.E= Bb.Ev=Bb.Events
Bb.E.x=Bb.E.extend


$V=function(){var g=G(arguments), Vw = Bb.V.x.apply(Bb.V, g)
// ***  Bb.V.x.apply(Bb.V, g) same as _.x(Bb.V,g)??

    return function(){var g=G(arguments), vw,
        ob =  g.O_? g.f:  {}

        ob.collection= ob.collection || ob.cl || ob.c
        ob.model = ob.model || ob.md || ob.m
        vw = new Vw(ob)
        if(g.s){ vw.a2( g.s ) }
        return vw}
}
$.fn.V=function(ob){
    ob=ob||{};
    ob.q=this
    return $V(ob)
}



