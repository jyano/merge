qiv=function(a){return qi(a).v()}
pr=prompt
tp= _.template
$.scrp= function(i,t){
    var scr= $("<script type='text/html'>")
    scr.id(i)
    if(t){scr.A(t)}
    scr.A()
    return scr
}