EVob = {

    $: 'click',
    $$: 'dblclick',
    v: 'mouseover'

}
Bb.x= Bb.e= function(ob){

    ob=ob||{}
    var Ev =  Bb.E.extend(ob)
    return function(a,b,c,d){
        return new Ev(a,b,c,d)
    }
}


Bb.E=Bb.Ev=Bb.Events
Bb.E= Bb.Ev=Bb.Events
Bb.pe=Bb.parseEvents=function(ev){


    ev=ev||{$: function(){}}

    _.e(ev, function(v, k){if(EVob[k]){ev[EVob[k]]=v}})
    return ev
}

Bb.E.b=Bb.E.bind
Bb.E.tr=Bb.E.trigger

Bb.pe=Bb.parseEvents=function(ev){

    EVob = {
        $: 'click', $$: 'dblclick',
        v: 'mouseover'
    }


    ev=ev||{$: function(){}}

    _.e(ev, function(v, k){
        if(EVob[k]){
            ev[EVob[k]]=v  }
    })

    return ev

}



BBEV=function(){$.x().i('chicks')

    ev = Bb.E
    ev.b("fun:had", function(){  $l("wee!")  })
    ev.tr("fun:had")

}

Bb.Ev.trg=Bb.Ev.trigger
_.cl= _.clone


function evt(){
    md.tr=  md.trigger
    md.o= md.on
    md.oA=function(fn){
        // "add" (model, collection, options) — when a model is added to a collection.
        fn=fn||function(m){
            m.at= m.attributes
            m.s=function(a,b,c){
                if(O(a) && O(b)){if(b.v){
                    b.validate= b.v?true:false}}
                if(S(a) && O(c)){if(c.v){
                    c.validate= c.v?true:false}}
                return m.set(a,b,c)}
            m.g= m.get
            m.j= m.toJSON
            m.o= m.on
            E$(m)
            a.A(m)}
        return this.o('add',fn)
    }

    md.oH= md.o_= md.oRm=function(a,b,c){// "remove" (model, collection, options) — when a model is rmd from a collection.
        return this.o('remove',a,b,c)
    }


    md.oX= md.oD=function(a,b,c){// "destroy" (model, collection, options) — when a model is destroyed.
        return this.o('destroy',a,b,c)
    }


    md.oR=function(a,b,c){// "reset" (collection, options) — when the collection's entire contents have been replaced.
        return this.o('reset',a,b,c)
    }


    md.oSo=function(a,b,c){
        // "sort" (collection, options) — when the collection has been re-sorted.
        return this.o('sort',a,b,c)
    }

    md.oC=function(n,f){
        // "change" (model, options)
        // — when a model's attributes have changed.
        // "change:[attribute]" (model, value, options) — when a specific attribute has been updated.
        if(U(f)){return this.o('change', n)};
        return this.o('change:'+n, f)
    }

    md.oQ=function(a,b,c) {
        // "request" (model_or_collection, xhr, options) — when a model or collection has started a request to the server.
        return this.o('request',a,b,c)
    }


    md.oS=function(a,b,c){
        // "sync" (model_or_collection, resp, options) — when a model or collection has been successfully synced with the server.
        return this.o('sync',a,b,c)
    }


    md.oZ= md.oE=function(a,b,c){
        //"error" (model_or_collection, resp, options) — when model's or collection's request to remote server has failed.
        return this.o('error',a,b,c)
    }

    md.oI= md.oV=  md.oIV=function(a,b,c){
        //"invalid" (model, error, options) — when a model's validation fails on the client.

        return this.o('invalid',a,b,c)
    }


    md.oRt=function(n,f){var o=this
        //"route:[name]" (params)— Fired by the router when a specific route is matched.  //"route" (route, params)   — Fired by the router when any route has been matched.
//"route" (router, route, params)  — Fired by history when any route has been matched.

        if(U(f)){return o.o('route', n)}
        return o.o('route:'+n, f)
    }
    md.o$=md.oAl=function(f){//passes event name as 1st ag
        return this.o('all', f)
    }

}
bbE=function bbE(o){

    // "add" (model, collection, options)
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
    }

    //"route:[name]" (params)— Fired by the router when a specific route is matched.  //"route" (route, params)   — Fired by the router when any route has been matched.
    //"route" (router, route, params)  — Fired by history when any route has been matched.


    o.oAl=function(f){return o.o('all', f)} //passes event name as 1st ag

    return o}

Eve=function(){


    var e= _({}).extend(Backbone.Events)

    e.o= e.bind
    e.e= e.trigger

    return e
}
