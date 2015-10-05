Bb.x= Bb.e= function(ob){

    ob=ob||{}
    var Ev =  Bb.E.extend(ob)
    return function(a,b,c,d){
        return new Ev(a,b,c,d)
    }
}
Bb.E.b=Bb.E.bind
Bb.E.tr=Bb.E.trg=Bb.E.trigger


Eve=function(){
    var e= _({}).extend(Backbone.Events)
    e.o= e.bind
    e.e= e.trigger
    return e
}

