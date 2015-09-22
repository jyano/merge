

md.o=function(ob, q){
    var Md = this,md;  ob=ob||{}
    ob.collection= ob.collection || ob.cl || ob.c
    ob.model = ob.model || ob.md || ob.m
    md=new Md(ob)
    if(q){md.a2(q)}
    return md
}

bb.mod=function(ob){ob=O(ob)?ob:{}; var Md,md
    Md =  bb.M.e(ob)
    return function(ob){
        md = new Md(ob)
        return md}}



