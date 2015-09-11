
V$=function(){var g=G(arguments), o,v, a
    a=O(g.f)? g.f:{}
    o={ob: g.f}
    o.ob= o.b||{}
    if(a.I){a.initialize = a.I}
    if(a.R){a.render = a.R}
    if(a.r){a.render = a.r}
    if(a.rr){a.render = a.rr}
    if(a.E){a.events = a.E}
    if(a.T){a.template = a.T}
    if(a.t){a.tagName = a.t}
    if(a.k){a.className = a.k}
    if(a.i){a.id = a.i}
    Vw = bb.V.e(ob)
    if(a.m){a.model= a.m}
    if(a.md){a.model= a.md}
    if(a.cl){a.collection= a.cl}
    vw = new Vw(a)
    return vw
}


