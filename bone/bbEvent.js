Bb.x= Bb.e= function(ob){

    ob=ob||{}
    var Ev =  Bb.E.extend(ob)
    return function(a,b,c,d){
        return new Ev(a,b,c,d)
    }
}
Bb.E.b=Bb.E.bind
Bb.E.tr=Bb.E.trg=Bb.E.trigger


bbE=function bbE(o){ // "add" (model, collection, options)
    // — when a model is added to a collection.
    // "remove" (model, collection, options) — when a model is removed from a collection.
    // "reset" (collection, options) — when the collection's entire contents have been replaced.
    // "sort" (collection, options) — when the collection has been re-sorted.
    o.e= o.trigger
    o.o= o.on
    o.oA=function(a){
        return o.o('add',function(m){a(sMd(m))})}
    o.oRm=function(a,b,c){return o.o('remove',a,b,c)}
    o.oR=function(a,b,c){return o.o('reset',a,b,c)}
    o.oSo=function(a,b,c){return o.o('sort',a,b,c)}
    o.oC=function(n,f){
        if(U(f)){return o.o('change', n)};
        return o.o('change:'+n, f)} // "change" (model, options) — when a model's attributes have changed.// "change:[attribute]" (model, value, options) — when a specific attribute has been updated.
    o.oD=function(a,b,c){return o.o('destroy',a,b,c)}// "destroy" (model, collection, options) — when a model is destroyed.
    o.oQ=function(a,b,c){return o.o('request',a,b,c)}// "request" (model_or_collection, xhr, options) — when a model or collection has started a request to the server.
    o.oS=function(a,b,c){return o.o('sync',a,b,c)}// "sync" (model_or_collection, resp, options) — when a model or collection has been successfully synced with the server.
    o.oE=function(a,b,c){return o.o('error',a,b,c)} //"error" (model_or_collection, resp, options) — when model's or collection's request to remote server has failed.
    o.oIV= o.oI= o.oV=function(a,b,c){
        return o.o('invalid',a,b,c)
    } //"invalid" (model, error, options) — when a model's validation fails on the client.
    o.oR=function(n,f){
        if(U(f)){return o.o('route', n)}
        return o.o('route:'+n, f)
    }//"route:[name]" (params)— Fired by the router when a specific route is matched.  //"route" (route, params)   — Fired by the router when any route has been matched.
    //"route" (router, route, params)  — Fired by history when any route has been matched.
    o.oAl=function(f){return o.o('all', f)} //passes event name as 1st ag
    return o
}
Eve=function(){
    var e= _({}).extend(Backbone.Events)
    e.o= e.bind
    e.e= e.trigger
    return e
}
apz()
function apz(){
    BBEV=function(){$.x().i('chicks')

        ev = Bb.E
        ev.b("fun:had", function(){  $l("wee!")  })
        ev.tr("fun:had")

    }
}