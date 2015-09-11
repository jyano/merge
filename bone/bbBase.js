qiv=function(a){return qi(a).v()}
pr=prompt
tp= _.template

bb=Bb=Backbone
Bb.M=ext(Bb.Model)
Bb.R=ext(Bb.Router)
Bb.C=ext(Bb.Collection)
Bb.h=Bb.history
Bb.h.s=Bb.h.start
Bb.Ma=Bb.Marionette
Bb.Ma.IV=Bb.Ma.ItemView
Bb.Ma.CV=Bb.Ma.CollectionView
Bb.Ma.CpV=Bb.Ma.CompositeView
bb.M= bb.Model
bb.C= bb.Collection
bb.V= bb.View
bb.R= bb.Router
bb.E= bb.Ev=bb.Events
bb.S= bb.Sync
bb.U= bb.Utility
bb.x=  function(ob){

    ob=ob||{}

    var Ev =  bb.E.extend(ob)

    return function(a,b,c,d){
        return new Ev(a,b,c,d)
    }
}
bb.H= bb.History
bb.h=bb.history


bb.pe=bb.parseEvents=function(ev){


    ev=ev||{$: function(){}}

    _.e(ev, function(v, k){if(EVob[k]){ev[EVob[k]]=v}})
    return ev
}
bb.C=bb.Collection; bb.C.x=bb.C.e = bb.C.extend
bb.c=function(ob){
    var Cl =  bb.Collection.extend(ob)
    return function(a,b,c,d){
        return new Cl(a,b,c,d)}}
bb.M=bb.Model
bb.M.x=bb.M.e=function(ob){var g=G(arguments),o
    var Md
    ob=ob||{}
    ob.defaults = ob.defaults || ob.df || ob.d
    // o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s}
    //o=o||{}
    /*
     if(o.fn){ob.i= o.fn}

     ob.initialize = ob.initialize || ob.i
     ob._i=ob.initialize
     ob.initializeX=function(op){
     this.q= this.$el
     this.a2=function(a){return this.q.a2(a)}
     //$l('gen init..')
     this.g=function(a){if(a){return this.model.get(a)}}
     this.A=function(ob){
     var g=G(arguments),
     q=this.q
     if(S(ob)){ob = this.g(ob)}
     if(ob){q.A(ob)}
     if(U(ob) || g.p){q.A()}
     return q
     }
     _.b(ob._i,this) (op)
     }
     ob.id = D(ob.id)? ob.id : ob.x
     ob.className=ob.className|| ob.k
     ob.tagName=ob.tagName|| ob.tn || ob.t
     ob.defaults=ob.defaults || ob.df || ob.d
     ob.events= ob.events || ob.ev || ob.e
     ob.render=ob.render || ob.rr || ob.r
     ob.tagName=ob.tagName || ob.tn || ob.t
     ob.collection= ob.collection || ob.cl || ob.c
     // ob.render= ob.render || ob.rr || ob.r// ob.render= ob.render || ob.rn*/

    ob.model= ob.model || ob.md || ob.m
    md= bb.M.extend(ob)

    md.o=function(ob, q){
        var Md = this,md
        ob=ob||{}
        ob.collection= ob.collection || ob.cl || ob.c
        ob.model = ob.model || ob.md || ob.m
        md=new Md(ob)
        if(q){md.a2(q)}
        return md
    }
    return md
}
bb.m=function(ob){ob=O(ob)?ob:{}
    var Md,md
    Md = bb.M.e(ob)
    return function(ob){
        md = new Md(ob)
        return md
    }
}
//bb._M=function(ob){return  bb.M.extend(ob)}
bb.V=bb.View
bb.v=function(ob){var Vw =  bb.V.x(ob)
    return function(a,b,c,d){
        return new Vw(a,b,c,d)}}
bb.E=bb.Ev=bb.Events
bb.x= bb.e=function(ob){

    var Ev =  bb.Event.extend(ob)
    return function(a,b,c,d){ return new Ev(a,b,c,d)    }

}
bb.H=bb.History
bb.S=bb.Sync
bb.U=bb.Utility
bb.R = bb.Router;  bb.R.x=bb.R.e=bb.R.extend
bb.h=bb.history; bb.h.s=bb.h.start
$P=function(){

    md= bb.M.prototype
    vw= bb.V.prototype
    rt= rtr = bbR =  bb.R.prototype
    cl= bb.C.prototype
    md=bb.Model.prototype
    vw= bb.View.prototype
    rt=bb.Router.prototype
    cl=bb.Collection.prototype
}


$P()






rtr = bb.R.prototype
rtr.n=function (url){var rt=this, g=G(arguments)

    if(g.n){rt.navigate(url)}
    else {

        rt.navigate(url, {trigger:true})
    }

    return rt
}
rtr.rp= function (url,op){var rt=this, g=G(arguments)
    if(g.n){
        rt.navigate(url, {replace:true})
    }

    else {rt.navigate(url, {trigger:true, replace:true})}
    return rt}
rtr.o= rtr.on
rtr.r = rtr.oR=function(rt,fn){
    this.on('route:'+rt, fn); return this }
$R=function(ob){var g=G(arguments), Rt,rtr

    if(ob.i){ob.initialize = ob.i
    }

    if(ob.$){ob.initialize = function(){
        $l('ob$! (see $R)')
        bb.history.start({pushState:true})
        if( F(ob.$ )){ob.$()}
    }}

    ob.routes = ob.routes   ||  ob.rt || ob.r ||  {}
    ob.routes[''] = ob.routes[''] ||'index'

    if(ob.x){ob.index = ob.x}
    if(ob.h){ob.home = ob.h}

    Rt= bb.R.x(ob)
    if(g.n){return function(ob){return new Rt(ob)}}
    rtr= new Rt()
    if(!bb.History.started && !g.d){
        Backbone.history.start({pushState: true})
    }
    return r = rt = rtr

}; $R.h=function(){bb.h.start(); return $R}
//////////
bb.C.x= bb.C.e=function(ob){var g=G(arguments), o,Cl
    //o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s}; o=o||{}
    ob=ob||{}
    /*
     if(o.fn){ob.i= o.fn}

     ob.initialize = ob.initialize || ob.i
     ob._i=ob.initialize
     ob.initializeX=function(op){
     this.q= this.$el

     this.a2=function(a){return this.q.a2(a)}
     //$l('gen init..')
     this.g=function(a){if(a){return this.model.get(a)}}
     this.A=function(ob){
     var g=G(arguments),
     q=this.q
     if(S(ob)){ob = this.g(ob)}
     if(ob){q.A(ob)}

     if(U(ob) || g.p){q.A()}
     return q
     }
     _.b(ob._i,this) (op)
     }


     ob.id = D(ob.id)? ob.id : ob.x
     ob.className=ob.className|| ob.k
     ob.tagName=ob.tagName|| ob.tn || ob.t
     ob.defaults=ob.defaults || ob.df || ob.d
     ob.events= ob.events || ob.ev || ob.e
     ob.render=ob.render || ob.rr || ob.r
     ob.tagName=ob.tagName || ob.tn || ob.t

     ob.collection= ob.collection || ob.cl || ob.c

     // ob.render= ob.render || ob.rr || ob.r
     ob.render= ob.render || ob.rn*/
    ob.model= ob.model || ob.md || ob.m

    Cl= bb.C.extend(ob)

    Cl.o=function(ob, q){
        var Cl = this, cl

        if(U(ob)){return new Cl}
        //ob=ob||{}

        ob.collection= ob.collection || ob.cl || ob.c
        ob.model = ob.model || ob.md || ob.m

        cl= new Cl(ob)

        //if(q){cl.a2(q)}
        return cl
    }

    return cl
}
coll=function(){

    cl.a=cl.add
    cl.j= cl.tJ=cl.toJSON
    cl.rm= cl.r= cl.remove


};coll()

mdO=function(){
    md.o= function(){
        var g=G(arguments);

        this.on.apply(this, g)

    }
    md.tr=  md.trigger

    md.oA=function(fn){
        // "add" (model, collection, options) — when a model is added to a collection.
        fn=fn||func
        return this.on('add', fn)

        function func(m){
            m.at= m.attributes
            m.s=function(a,b,c){
                if(O(a) && O(b)){if(b.v){ b.validate= b.v?true:false} }
                if(S(a) && O(c)){if(c.v){ c.validate= c.v?true:false} }
                return m.set(a,b,c)}
            m.g= m.get
            m.j= m.toJSON
            m.o= m.on
            E$(m)
            a.A(m)}}
    md.ox= md.oH= md.o_= md.oRm=function(a,b,c){
        // "remove" (model, collection, options)
        // — when a model is rmd from a collection.
        return this.on('remove',a,b,c)
    }
    md.oX= md.oD=function(a,b,c){
        // "destroy" (model, collection, options)
        // — when a model is destroyed.
        return this.o('destroy',a,b,c)
    }
    md.oR=md.oRs=function(a,b,c){
        // "reset" (collection, options) —
        // when the collection's entire contents have been replaced.
        return this.o('reset',a,b,c)
    }
    md.oSo=function(a,b,c){
        // "sort" (collection, options) — when the collection has been re-sorted.
        return this.o('sort',a,b,c)
    }
    md.oC=md.oCh=function(n,f){

        // "change" (model, options)
        // — when a model's attributes have changed.

        // "change:[attribute]" (model, value, options)
        // — when a specific attribute has been updated.

        if(U(f)){
            return this.on('change', n)
        }

        return this.on('change:'+n, f)
    }
    md.oQ=md.o.Rq= function(a,b,c) {
        // "request" (model_or_collection, xhr, options)
        // — when a model or collection has started a request to the server.
        return this.o('request',a,b,c)
    }
    md.oS=md.oSy=function(a,b,c){
        // "sync" (model_or_collection, resp, options)
        // — when a model or collection has been successfully synced with the server.
        return this.o('sync',a,b,c)
    }
    md.oZ= md.oE=md.oEr=function(a,b,c){
        //"error" (model_or_collection, resp, options)
        // — when model's or collection's request to remote server has failed.
        return this.o('error',a,b,c)
    }
    md.oz=md.oI= md.oV= md.ov= md.oIV=function(a,b,c){
        //"invalid" (model, error, options)
        // — when a model's validation fails on the client.
        return this.o('invalid',a,b,c)
    }
    md.oRt=function(n,f){var o=this
        //"route:[name]" (params)
        // — Fired by the router when a specific route is matched.
        // "route" (route, params)
        // — Fired by the router when any route has been matched.
        //"route" (router, route, params)
        // — Fired by history when any route has been matched.
        if(U(f)){return o.o('route', n)}
        return o.o('route:'+n, f)
    }
    md.o$=md.oAl=function(fn){//passes event name as 1st ag
        return this.on('all', fn)
    }

};mdO()
vws=function(){
    $V=function(){var g=G(arguments),
        Vw = bb.V.e.apply(bb.V,g)
        return function(){var g=G(arguments), vw,
            ob =  g.O_? g.f:  {}
            ob.collection= ob.collection || ob.cl || ob.c
            ob.model = ob.model || ob.md || ob.m
            vw = new Vw(ob)
            if(g.s){ vw.a2( g.s ) }
            return Vw
        }
    }
    $v=function(){var g=G(arguments)
        return $V.apply(null, g)()
    }
    $m=function(){var g=G(arguments)
        return $M.apply(null, g)()
    }
    $.fn.V=function(ob){
        ob=ob||{}
        ob.q=this
        return $V(ob)
    }

    vw.g=function(m){
        return this.model.get(m)}

    vw.s=function(a,b){
        this.model.set(a,b)
        return this
    }

    vw.h=vw.H=function(a){
        this.$el.html(a);
        return this
    }
    vw.cl= vw.collection
    vw.e= function(a,b){
        return this.cl.each(a,b)
    }
    vw.j=vw.tJ=vw.J=function(){return this.model.toJSON()}
    vw.J= function(fn){
        var vw=this,
            j= this.collection.toJSON()
        if(F(fn)){
            _.e(j,fn);return vw}
        return j
    }
    vw.r=  vw.rr=function(){ return this.render() }

    bb.V.e=function(ob){var g=G(arguments),o
        o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s}
        o=o||{}
        ob=ob||{}
        if(o.fn){ob.i= o.fn}
        ob.initialize = ob.initialize || ob.i
        ob._i=ob.initialize
        ob.initialize=function(op){
            this.q= this.$el

            this.a2=function(a){
                return this.q.a2(a)
            }
            //$l('gen init..')
            this.g=function(a){

                if(a){return this.model.get(a)}
            }


            this.A=function(ob){
                var g=G(arguments),
                    q=this.q
                if(S(ob)){ob = this.g(ob)}
                if(ob){q.A(ob)}

                if(U(ob) || g.p){q.A()}
                return q
            }

            if(F(ob._i)){
                _.b(ob._i,this) (op)
            }

        }
        ob.id = D(ob.id)? ob.id : ob.x || ob._ || ob['#']
        ob.className=ob.className|| ob.k
        ob.tagName=ob.tagName|| ob.tn || ob.t
        ob.defaults=ob.defaults || ob.df || ob.d
        ob.events= ob.events || ob.ev || ob.e
        ob.render=ob.render || ob.rr || ob.r
        ob.tagName=ob.tagName || ob.tn || ob.t
        ob.collection= ob.collection || ob.cl || ob.c
        ob.model= ob.model || ob.md || ob.m
        ob.el = ob.el || ob.q
        // ob.render= ob.render || ob.rr || ob.r
        ob.render= ob.render || ob.rn
        ob.events = bb.parseEvents(ob.events)
        vw= bb.V.extend(ob)
        //vw.o=function(ob){ return new this(ob)}
        vw.o=function(ob,q){
            var Vw = this, vw
            ob=ob||{}
            ob.collection= ob.collection || ob.cl || ob.c
            ob.model = ob.model || ob.md || ob.m
            vw=new Vw(ob)
            if(q){vw.a2(q)}
            return vw
        }
        return vw
    }


    $.uV=$.ulV=function(ob){ob=ob||{}
        ob.t = 'ul'
        return $V(ob)
    }
    vw.cl=function(fn){
        _.e(this.collection, fn)
        return this
    }
    vw.e=function(fn){
        _.e(this.model, fn)
        return this
    }


};vws()



$.scrp= function(i,t){
    var scr= $("<script type='text/html'>")
    scr.id(i)
    if(t){scr.A(t)}
    scr.A()
    return scr
}



bb.pe=bb.parseEvents=function(ev){


    ev=ev||{$: function(){}}

    _.e(ev, function(v, k){if(EVob[k]){ev[EVob[k]]=v}})
    return ev
}
EVob = {

    $: 'click',
    $$: 'dblclick',
    v: 'mouseover'

}

VWW=function(){$.x()


    d= $.d('r',200).A(
        $.h1('hello'),
        $.bt(__)
    )

    //d.$(function(){v.r()})

    mOv=function(){$l('mouse over !')}

    v = $V({
        e:{'click button': function(){$l('click')},
            $$: 'r',
            v: mOv
        },

        q:d,

        r:function(){
            alert('double click')
            $.bd().C($r())
        }
    })()
}




bb.C=bb.Collection; bb.C.x=bb.C.e = bb.C.extend
bb.c=function(ob){
    var Cl =  bb.Collection.extend(ob)
    return function(a,b,c,d){
        return new Cl(a,b,c,d)}}




bb.m=function(ob){ob=O(ob)?ob:{}
    var Md,md
    Md = bb.M.e(ob)
    return function(ob){
        md = new Md(ob)
        return md
    }
}
//bb._M=function(ob){return  bb.M.extend(ob)}
bb.V=bb.View
bb.v=function(ob){var Vw =  bb.V.x(ob)
    return function(a,b,c,d){
        return new Vw(a,b,c,d)}}
bb.R=bb.Router
bb.R.e=bb.R.extend
bb.r=function(ob){
    var Rt =  bb.Router.extend(ob)
    return function(a,b,c,d){ return new Rt(a,b,c,d)    }
}
bb.E=bb.Events
bb.x= bb.e=function(ob){

    var Ev =  bb.Event.extend(ob)
    return function(a,b,c,d){ return new Ev(a,b,c,d)    }

}

bb.H=bb.History
bb.S=bb.Sync
bb.U=bb.Utility



function modelz() {

    toMdOb = function (a) {
        a = O(a) ? a : {}
        if (a.i) {
            a.initialize = _v(a.i)
        }
        if (a.I) {
            a.initialize = _v(a.I)
        }
        if (a.d) {
            a.defaults = a.d
        }
        if (a.D) {
            a.defaults = a.D
        }
        if (a.v) {
            a.validate = a.v
        }
        if (a.V) {
            a.validate = a.V
        }
        a.idAttribute = '_id'
        return a
    }
    M$ = function (ob) {
        ob = O(ob) ? ob : {}
        var Md, md
        Md = bb._M(ob)
        md = new Md(ob)
        return md

    }
    md.g = md.get
    md.tJ = md.toJSON
    md.o = md.on
    md.s = function (a, b, c) {
        var md = this
        if (O(a) && O(b)) {
            if (b.v) {
                b.validate = b.v ? true : false
            }
        }
        if (S(a) && O(c)) {
            if (c.v) {
                c.validate = c.v ? true : false
            }
        }
        return md.set(a, b, c)
        return md
    }
    md.at = md.attributes
    md.b = md.bind
    md.V = function (Vw, ob) {
        ob = ob || {}
        ob.m = this
        return Vw(ob)
    }
    md.l = function () {
        $l(this.toJSON());
        return this
    }


    $M = function () {
        var g = G(arguments),
            Md = bb.M.e.apply(V, g)
        return function (a, b, c, d) {
            var g = G(arguments)
            return new Md(a, b, c, d)
        }
    }

    bb.M = bb.Model

    bb.M.x = bb.M.e = function (ob) {
        var g = G(arguments), o
        var Md
        ob = ob || {}
        ob.defaults = ob.defaults || ob.df || ob.d
        // o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s}
        //o=o||{}
        /*
         if(o.fn){ob.i= o.fn}

         ob.initialize = ob.initialize || ob.i
         ob._i=ob.initialize
         ob.initializeX=function(op){
         this.q= this.$el
         this.a2=function(a){return this.q.a2(a)}
         //$l('gen init..')
         this.g=function(a){if(a){return this.model.get(a)}}
         this.A=function(ob){
         var g=G(arguments),
         q=this.q
         if(S(ob)){ob = this.g(ob)}
         if(ob){q.A(ob)}
         if(U(ob) || g.p){q.A()}
         return q
         }
         _.b(ob._i,this) (op)
         }
         ob.id = D(ob.id)? ob.id : ob.x
         ob.className=ob.className|| ob.k
         ob.tagName=ob.tagName|| ob.tn || ob.t
         ob.defaults=ob.defaults || ob.df || ob.d
         ob.events= ob.events || ob.ev || ob.e
         ob.render=ob.render || ob.rr || ob.r
         ob.tagName=ob.tagName || ob.tn || ob.t
         ob.collection= ob.collection || ob.cl || ob.c
         // ob.render= ob.render || ob.rr || ob.r// ob.render= ob.render || ob.rn*/

        ob.model = ob.model || ob.md || ob.m
        md = bb.M.extend(ob)

        md.o = function (ob, q) {
            var Md = this, md
            ob = ob || {}
            ob.collection = ob.collection || ob.cl || ob.c
            ob.model = ob.model || ob.md || ob.m
            md = new Md(ob)
            if (q) {
                md.a2(q)
            }
            return md
        }
        return md
    }


    toMdOb = function (a) {
        a = O(a) ? a : {}
        if (a.i) {
            a.initialize = _v(a.i)
        }
        if (a.I) {
            a.initialize = _v(a.I)
        }
        if (a.d) {
            a.defaults = a.d
        }
        if (a.D) {
            a.defaults = a.D
        }
        if (a.v) {
            a.validate = a.v
        }
        if (a.V) {
            a.validate = a.V
        }
        a.idAttribute = '_id'
        return a
    }
    M$ = function (ob) {
        ob = O(ob) ? ob : {}
        var Md, md
        Md = bb._M(ob)
        md = new Md(ob)
        return md

    }

    md.jason = 1000
    md.g = md.get
    md.tJ = md.toJSON
    md.o = md.on
    md.s = function (a, b, c) {
        var md = this
        if (O(a) && O(b)) {
            if (b.v) {
                b.validate = b.v ? true : false
            }
        }
        if (S(a) && O(c)) {
            if (c.v) {
                c.validate = c.v ? true : false
            }
        }
        return md.set(a, b, c)
        return md
    }
    md.at = md.attributes
    md.b = md.bind
}

$V=function(){var g=G(arguments),

    Vw = bb.V.e.apply(V,g)

    return function(){
        var    g=G(arguments), vw, ob

        ob= g.f||{}
        ob.collection= ob.collection || ob.cl || ob.c
        ob.model = ob.model || ob.md || ob.m

        vw = new Vw(ob)

        if(g.s){vw.a2(g.s)}

        return Vw}
}



$.fn.V=function(ob){
    ob=ob||{}
    ob.q=this
    return $V(ob)
}
$M=function(){var g=G(arguments),
    Md = bb.M.e.apply(V,g)
    return function(a,b,c,d){var g=G(arguments)
        return  new Md(a,b,c,d)}}
$.uV=$.ulV=function(ob){ob=ob||{}
    ob.t = 'ul'
    return $V(ob)
}
vw.cl=function(fn){
    _.e(this.collection, fn)
    return this
}
md.V=function(Vw, ob){
    ob = ob || {}
    ob.m=this
    return Vw(ob)
}


md.l=function(){
    $l(this.toJSON());
    return this
}

evt=function(){
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

};evt()
viw=function(){

    vw.g=function(m){return this.model.get(m)}
    vw.H=function(a){this.$el.html(a);return this}
    vw.J=function(){return this.model.toJSON()}
    vw.cl= vw.collection
    vw.e=function(a,b){
        return this.cl.each(a,b)
    }
    vw.J=function(fn){
        var vw=this,
            j= this.collection.toJSON()
        if(F(fn)){_.e(j,fn);return vw}
        return j
    }
    vw.r=  vw.rr=function(){return this.render()}

    /*
     VWob={
     i:'initialize',
     m:'model', c:'collection',
     e:'el',
     n:'id', x:'id',
     k:'className',
     tn:'tagName',
     t:'tagName',
     a:'attributes',
     ev:'event'
     }
     */
    bb.V.e=function(ob){var g=G(arguments),o
        o= g.F_?
        {fn: g.f, ob: g.s} :
        {ob: g.f, fn: g.s}

        o=o||{}
        ob=ob||{}
        if(o.fn){ob.i= o.fn}

        ob.initialize = ob.initialize || ob.i
        ob._i=ob.initialize
        ob.initialize=function(op){
            this.q= this.$el

            this.a2=function(a){
                return this.q.a2(a)
            }
            //$l('gen init..')
            this.g=function(a){

                if(a){return this.model.get(a)}
            }


            this.A=function(ob){
                var g=G(arguments),
                    q=this.q
                if(S(ob)){ob = this.g(ob)}
                if(ob){q.A(ob)}

                if(U(ob) || g.p){q.A()}
                return q
            }

            if(F(ob._i)){
                _.b(ob._i,this) (op)
            }

        }
        ob.id = D(ob.id)? ob.id : ob.x || ob._ || ob['#']
        ob.className=ob.className|| ob.k
        ob.tagName=ob.tagName|| ob.tn || ob.t
        ob.defaults=ob.defaults || ob.df || ob.d
        ob.events= ob.events || ob.ev || ob.e
        ob.render=ob.render || ob.rr || ob.r
        ob.tagName=ob.tagName || ob.tn || ob.t
        ob.collection= ob.collection || ob.cl || ob.c
        ob.model= ob.model || ob.md || ob.m
        ob.el = ob.el || ob.q
        // ob.render= ob.render || ob.rr || ob.r
        ob.render= ob.render || ob.rn

        ob.events = bb.parseEvents(
            ob.events
        )


        vw= bb.V.extend(ob)
        //vw.o=function(ob){ return new this(ob)}
        vw.o=function(ob,q){
            var Vw = this, vw
            ob=ob||{}
            ob.collection= ob.collection || ob.cl || ob.c
            ob.model = ob.model || ob.md || ob.m
            vw=new Vw(ob)
            if(q){vw.a2(q)}
            return vw
        }
        return vw
    }



    BBSAMP1=function(){$.x('b','bbsamp','+')
        d=$.d()
        Rec = bb.M.e()

        RecV = bb.V.e({
            tagName:'div', className:'rec',
            events:{'click': 'move'},
            move:function(){this.$el.css('left', this.$el.position().left +10)},
            rr:function(){return this.sDims().sPos().sCol()},
            sDims:function(){
                this.$el.WH(this.model.get('w'), this.model.get('h'))
                return this
            },
            sPos:function(){
                this.$el.ab()
                    .LR(
                    this.model.get('pos').x, this.model.get('pos').y)
                return this
            },
            sCol:function(){
                this.$el.C(this.model.get('C'))
                return this}
        })

        _.e([
            Rec.o({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
            Rec.o({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
            Rec.o({w:100, h:200, pos:{x: 0, y:100},C:'y'})
        ], function(md){

            var r=  RecV.o({
                model:md
            })

            r.rr().$el.a2(d)
        })
    }





    Vw=bb.V.e({
        renderCollection: function(op) {op = op || {}
            op.target = op.target || this.$el;
            op.cl = op.cl ||    op.collection ||  this.collection;
            //- reset views
            if (!op.add) {this.disposeViews()}
            else {this._subviews = []}
            this._renderOptions = op
            //- if there is a collection and a view then render it
            if (op.cl && this.view) {op.cl.each(this._renderView, this)}
            return this
        }

    })

};viw()

bok=function(){


    BOOK=function(){ $.fm()
        toBook = function(){Y.run('book')}
        s1.A(
            $.h1('BOOK').$(toBook) ,
            bookName = $.ip(),
            $.bt('new book',function(){
                $.P('newBook', {name: bookName.V()},
                    toBook)}),
            $.hr())

        $.Gj('books',function(bks){
            s1.A($.h3('books:'))
            _.e(bks, function(bk){
                s1.A( $.sp().C('x').$(function(){
                        $.P('delBook',{book: bk._id},toBook)
                    }),
                    $.bt(bk.name,function(){
                        s2.A($.h2('CHAPTER: '+bk.name),
                            chapterTitleInput=$.ip(),
                            $.bt('new chapter',
                                function(){$.P('newChapter',{
                                    chapterTitle: chapterTitleInput.V(),
                                    book:bk._id
                                },function(){chapterView(bk, c)})}), $.hr())
                        $.eGj('chapters',{book:bk._id}, function(ch){
                            s2.A($.bt(ch.title, function(){
                                chapterView(bk,ch)}), $.br(2))})
                    }), $.br(2))})})


        chapterView=function(b,c){ s2.E();s1.E();
            s1.A($.h1('BOOK').$( toBook) )
            $.Gj('chapters',{book:bk._id}, function(chapters){
                s1.A($.h3('chapters:'))
                s2.A($.h3('pages:'))
                _.e(chapters,function(ch){
                    s1.A($.sp('x').$(function(){$.P('delChapter',{chapter: ch._id}, function(){chapterView(bk, ch)})}),
                        $.bt(ch.title, function(){chapterView(bk,ch)}), $.br(2))})})
            s2.A($.h1('chapter: '+ch.title))
            s2.A( pageNameInput=$.ip(),
                $.bt('new page', function(){
                    $.P('newPage',{pageName :pageNameInput.V(), chapter:ch._id
                    })}), $.hr())
            $.eGj('/pages', {chapter: ch._id}, function(pg){
                s2.A($.bt(pg.name, function(){pageView(bk,ch,pg)
                }), $.br(2)  )})
        }}
    pageView = function(bk, ch, pg){s1.E();s2.E()
        s1.A($.h1('BOOK').$(ldr('book')) )
        s1.A($.h1('CHAPTER '+ ch.title).$(function(){chapterView(book,ch )}))
        $.Gj('/pages',{chapter: ch._id},
            function(pgs){s1.A($.h3('pages'))
                _.e(pgs,function(pg){
                    s1.A($.bt(pg.name,function(){sectionView(ch)}), $.br(2)
                    )})})
        s2.A($.h1('page: '+pg.name))
        $.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
            function(sc){s2.A($.bt(sc.section, function(){sectionView(bk,ch,pg)}), $.br(2)
            )})
    }


    OBJECT=function(){$.fm()
        s1.A('your objects', $.br(2), t= $.ip(),
            $.bt('new object',function(){$.P('newObj',
                {t: t.V()})}))
        $.eG('objs', function(o){

            s1.A($.h2(o.t).$(function(){
                s2.E($.h1(o.t), tt=$.ip(),
                    $.bt('new sub-object',function(){
                        $.P('newObj', {t: tt.V()})}))}))
            _.e(o.i,function(i){ s1.A(h3(i)) })
        })

    }


};bok()
BBEXT=function(){
    // https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
}

//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})

//render does nothing unless u override it
//cannot access model from init




QON=function(){$.x('o', 'jquery .on')

    /*

     As of jq 1.7, no longer need to use  .bind()?, .delegate(), and .live().
     .on(evString [,sel][,d], hl)|(evObject [,sel][,d])
     evString 1+ sp-sep evs w opt nsp ('click', 'keydown.myPlugin')
     evObject {k: evString, v:ev hl fn}
     sel(S) -  fl wch sel ch trg ev
     d(*) - d 2b passd 2 the hl in ev.data whn ev trgd
     hl: fn(evOb [, anythng extrPam] [,...])



     ~~ ev ns & nsps
     any ev ns can be used for the evs arg .
     jq will pass through the bw's standard JavaScript ev yps,
     calling the hl fn when the bw gens evs due to user actions such as click.
     also, the .trigger() met can trgr bth
     standard bw ev  ns & cust ev ns
     to call atched hls.

     ev ns should only contain alphanumerics | '_' | ':'


     An ev n can be qualed by ev nspaces that simp  rming or trging the ev
     ex: "click.myPlugin.simple" dfs bth
     the myPlugin & simp nspaces  4 this partic  $ev

     A $ev   hndlr atched via that S could be rmved w
     .off("click.myPlugin") |  .off("click.simple")
     w/o disturing othr $hndlrs attched to the el

     nspaces are sim  to CSS ks (!hier - only 1 n must match )

     In 2nd f of .on(), the evs arg is a pob.

     The keys are Ss in the same f  as the evs arg
     w space-septed ev ty ns &  opt nspaces.

     bth 'behave' same, EXCEPT, here:
     The va  for e  key is a fn (or false)
     that is
     used as the hdlr
     instd of   final arg  to the met


     ~~~~~~Drct and deged evs
     maj  of bw evs bub/pgate UPWARDS/OUTWARDS, all the way to bd and  doc

     If sel omitd or nul,the ev  hlr is refd to as drct or drctly-bound.

     The hlr is called ev  time an ev  occurs on the sel  els,
     whether it occurs
     drctly on the el  or
     bubs from a ch (inner) el


     ~DELEGATED (sel provided) - When a sel  is provided, the ev  hlr is refd to as delegated.
     Degev adv:  can hndle evs from ch added ltr, also, lowr overhd

     The hlr is not called when the ev occurs directly on the bound el,
     but only for chs (inner els)  that match the sel.

     jq bus the ev  from the ev  tg up to the el where the hlr is atched(  in  to outermost el)  and  runs the hlr for any els along that path matching the sels.

     Ev hlrs are bound only to the cur sel d els; they must exist at the time your code makes the call to .on().
     (To know els are prsnt and can be seld, place scrps aft the els  | $(fn)) Alt: use degd evs to atch ev  hlrs.

     By pikng an el  that is guarntd to be prsnt at the time the degd ev  hlr is atchd,
     you can use degd evs to avoid  need to frq atch & rm ev hlrs   .
     This el  could be the ct el  of a vw in a MVC design, for ex,
     or doc  if the ev  hlr wants to monit  all bubevs in the doc
     -The doc el  is avail  in   head of   doc  bf loadg any oth HTML,
     (so its safe to  atch evs there wo waitg 4 the doc 2b rdy)



     ex:  consid  a tb w 1000 rows in its tbody, THIS atchs 1000 hlrs:*/

    $('#dataTable tbody tr').$(
        function() {$l( $( this ).text())})


    /*
     BUT: ev-deleg approach
     ev hl atches to the tbody,
     ev only bubups 1lev ($ed tr -> tbody):

     */$('#dataTable tbody').$('tr',
        function() {$l( $( this ).text())})/*




     The ev hl and its environment
     The hl arg  is a fn (or false)
     and is required unless you pass an ob for the evs argument.
     You can provide an anonymous hl fn at the point of the .on() call (ex above)
     OR declare a named fn and pass its name:
     */


    $.bt().$(notify )

    function notify() {alert( "clicked" )}


    /*  ~ev ob, bubg
     When the bw trgs   ev or oth js calls jq's .trigger() met,
     jq passes the hl an evob it can use (to analyze & change)

     evob: normalized subset of d provided by the bw; - the bw's unmodified native ev ob is available in ev.originaEvent.
     ev.type:  ev n ('resize)
     ev.target:  deepest (innermost) el where the ev occurred
     By default:
     most evs bubup from the orig  evtg to the docel
     At each el along the way,
     jq calls any matching ev hls that have been atched.


     ~stopProp
     A hl can pvnt the ev from bubg further up the  tree (and thus pvt hls on those els from runng)
     by calling ev.stopPropagation().
     Any other hls atched on the cur  el will run however.
     To pvt that, call ev.stopImmediatePropagation().
     (ev hls bound to an el are called in the same order that they were bound.)

     Returning false from an ev hl will automatically
     call ev.stopPropagation() and ev.pD().
     A false val can also be passed for the hl as a shorthand for fn(){ return false; }.
     So, $( "a.disabled" ).on( "click", false );
     atches an ev hl to all links with class "disabled"
     that pvts them from being followed when they are clicked and also stops the ev from bubg.

     ~pD
     Similarly, a hl can call ev.pD() to canc  any bw df acts  for this ev;
     ex: wont fol lnks -Not all bw evs have default actions,and not all default actions can be canceled.


     When jq calls a hl, 'this' is a ref  to the el where the ev is being delivered;
     for directly bd evs:  el where the ev was atched
     for degevs: this is an el matching sel.
     (Note that this may not be eq  to evtg if the ev has bubd from a ch el.)

     ~Passg d to the hl

     If a d g is providd to .on() and !(null|U),
     it is passd 2 the hl in the ev.data pop ea time an ev is trgd
     The d  arg  can be any type ,
     but if a S is used the sel  must either
     be provd  or  explicitly passed as null (so that the d  is not mistaken 4 a sel )

     Best:  use a pob so that mult  vals can be passd as pops



     ~eh
     -As of jq 1.4,the same ev hl can be bd to an el mult times. This is especially useful when the ev.data
     feature is being used, or when other uniq d is in a closure around the ev hl fn
     ex: */fn=function(ev) {alert(ev.data.n)}; $("button").$({n:'j'},fn).$({n:'r'},fn) /*: will gen two dif alerts when the button is clicked.






     ~trigger, triggerHandler
     As an alternative
     or in addition to the data arg  provided to the .on() met,
     you can also
     pass d  to an evhl using a 2nd arg
     to .trigger() or .triggerHandler().
     Data provided this way is passed to the evhl as further pams after the Ev ob
     If an A was passed to the g.s of .trigger() | .triggerHandler(),
     ea el  in the A will be presented to the evhl as an individual pam



     ~~~ Ev performance

     In most cases,
     an ev  such as $ occurs infreq and performance is not a signif  concern.
     However,
     high freq  evs such as
     mousemove or scroll
     can fire dozens of times per second,

     and in those cases
     it becomes  important to use evs judiciously.
     Performance can be increased by:
     -reducing the amount of work done in the hl itself,
     -caching information needed by the hl rather than recalculating it,
     -rate-limiting the number of actual page updates using $.in


     Attaching many deged evhl near the top of the doc  tree can degrade performance.
     Ea time the ev  occurs,
     jq must compare all sels of all atched evs of that ty
     to ev  el  in the pth from the evtg 2 top of  doc
     For best performance, atch delegated evs at a doc loc as close as poss  to the tg els.
     Avoid excessive use of doc  or doc.bd for degd evs on large docs

     jq can process simp  sel   of the f  tag#id.class very quickly
     when
     they are used to fl degevs.
     So, "#myForm", "a.external", and "button" are all fast sels.
     Degevs   that use more complex sels
     partic hier  ones, can be sev  times slower--but they are still mostly fast enuf
     Hier  sels can oft  be avoided simp  by atchg hl 2 a more approp pt in doc


     ex: instead of
     $( "body" ).$("#commentForm .addNew", addComment )
     use
     $( "#commentForm" ).$( ".addNew", addComment ).




     jq's ev system requires that a DOM el allow atching
     data via a property on the el, so that evs can be tracked and delivered.
     The ob, embed, and applet els cannot atch data,
     and therefore cannot have jq evs bound to them.

     The focus and blur evs are specified by the W3C to !bub
     but jq defines cross-bw focusin and focusout evss that do bub .
     When focus and blur are used to atch delegated ev hls,
     jq maps the names and delivers them as focusin and focusout respectiv .
     For consistency and clarity, use the bubg ev yp names.

     In all bws, the load, scroll, and er evs (on an iEl) do !bub .
     In Internet Explorer 8 and lower, the paste and reset evs do !bub .
     Such evs are not suprtd for use with deg,
     but they can be used when the ev hl is dircly atched
     to the el geng the ev.

     The error ev on the wd ob uses nonstandard arguments and return val conventions,
     so it is not supported by jq.
     Instead, assign a hl fn directly to the wd.onerror property.

     The hl list for an el is set when the ev is 1st delivd.
     Adding or rmg ev hls on the current el
     won't take effect until the next time the ev is handled.
     To pvt any further ev hls from execg on an el wthn an ev hl,
     call ev.stopImmediatePropagation().

     This behavior goes against the W3C evs spec
     To better understand this case,
     consider the following code:
     */$test=$("#test").$(hl1).$(hl2)
    function hl1() {$l( "hl1" );$test.off( "click", hl2 );}
    function hl2() {$l( "hl2" );}
// In the code above,
// hl2 will be executed anyway the first time even if it's rmd using .off().
// but the hl will not be executed the following times the click ev is triggered.






    $( "p").$(function() {alert( $( this ).text())})// ex: Display a p's t in an al when it is $d:
    $( "p" ).$({foo: "bar"}, hl); function hl(ev){alert( ev.data.foo )}//ex: Pass data to the ev hl, which is specified here by name:
    $( "form" ).on( "submit", false ) //ex: Canc a f sb act  and pvt the ev from bubg up by returning false:
    $( "form" ).on( "submit", function( ev ) {ev.pD()})  //ex: Canc only the df act  by using .pD()
    $( "form" ).on( "submit", function( ev ) {ev.stopPropagation()})//ex: Stop submit evs from bubg without pvting form submit, using .stopPropagation().
    $( "div" ).$(function( ev, per) {alert("Hi, "+per.n)}) // ex: Pass data to the ev hl using the second argument to .trigger()
    $( "div" ).trigger( "click",{n: "Jim" })
    $( "div" ).$( function( ev, sal, n) {alert(sal+', '+n)})// ex: Use the the second argument of .trigger() to pass an array of data to the ev hl
    $( "div" ).trigger( "click", [ "Hi", "Jim" ] )



    //<style>  p { color: red;} span {color: blue; } </style>



    $.p('Has an atched custom ev.')
    $.bt('Trigger custom ev')
    $.sp().at('display','none')


    $( "p" ).on( "myCustomEvent", function( ev, myName ) {
        $( this ).text( myName + ", hi there!" );
        $( "span" ) .stop() .css( "opacity", 1 )
            .text( "myName = " + myName )
            .fadeIn( 30 ) .fadeOut( 1000 );});
    $( "button" ).click(function () { $( "p" ).trigger( "myCustomEvent", [ "John" ] ); });




// ex: Attach multiple ev hls simultaneously using a pob.

    // .test { color: #000;padding: .5em; border: 1px solid #444; } .active { color: #900; } .inside { background-color: aqua; }




    $.dK('test')
    $( "div.test" ).on({click: function() {
        $( this ).toggleClass( "active" )},
        mouseenter: function() {
            $( this ).K( "inside" )},
        mouseleave: function() {
            $( this ).removeClass( "inside" )}})


    // ex: $ any p to add another after it. Note that .on() allows a $ev on any p (even new ones)
    //--since the ev is handled by the ever-present bd-el  aft it bubs to there.


    // p { background: yellow; font-weight: bold;cursor: pointer; padding: 5px; } p.over { background: #ccc; } span { color: red;}

    $.p('Click me!')
    $.sp()
    n=0
    $.bd().$('p', function() {

        $( this ).after(
            $.p('Another p! ' + (++n))
        )
    })

    //alert each p's tx on $:
    $.bd().$('p', function(){ alert( $( this ).text() ) })

    //Cancel a link's default act
    $.bd().$('a', function(ev){ev.pD()} )



}
router=function(){
    bb.rt= bb.r=bb.R= $.ext(bb.Router)
    bb.h=bb.history
    bb.h.s=bb.h.start
    R$=function(o){var r

        o=O(o)?o:{}
        if(o.R){o.routes=o.R}
        r=bb.Router.extend(o)
        r.o=r.on
        return function(){var a=new r
            a.o= a.on
            a.oR=function(r,f){
                this.on('route:'+r, f)
                return this}
            a.n=function(frag,op){if(O(op)){
                if(D(op.t)){op.trigger=op.t?true:false}
                if(D(op.r)){op.replace=op.r?true:false}}
                a.navigate(frag, op)
                return a}
            return a
        }
    }
    H$=function(){bb.history.start()}
    bb.rt=function(klas){
        var rt = new klas
        rt.n= rt.nv=rt.ng=function(url){var rt=this, g=G(arguments)

            if(g.n){
                rt.navigate(url)
            }
            else {

                rt.navigate(url,  {trigger:true})
            }

            return rt}
        return rt
    }
    bb.Rt=function(ob){var Rt
        if(ob.i){ob.initialize = ob.i}
        if(ob.$){
            ob.initialize = function(){
                bb.history.start({pushState:true})
                if( F(ob.$ )){ob.$()}}}
        if(ob.rt){ob.routes = ob.rt}
        ob.routes = ob.routes || {}
        ob.routes[''] = ob.routes[''] ||'index'
        if(ob.x){ob.index = ob.x}
        if(ob.h){ob.home = ob.h}
        Rt= this.Router.extend(ob)
        return Rt
    }
    bb.R=function(ob){
        return r = rt = bb.rt( this.Rt(ob) )
    }
    NORTR=function(){$.x()


        V1 = bb.V.e({

            i: function() {this.r()},
            r: function(){
                this.$el.ht(this.model.get('Ms') + " from the View 1" )
                return this
            }
        })

        V2 = bb.V.e({

            i: function() {
                this.r();
            },

            r: function() {
                this.$el.ht(this.model.g('Ms') + " from the View 2");
                return this;
            }
        })
        V3 = bb.V.e({
            i: function() {
                this.render();
            },
            r: function() {
                this.$el.html(this.model.get('Message') + " from the View 3");
                return this;
            }
        })
        // Now we need a view that will contain the view and render it whenever the user makes a choice on the screen.

        CtV = bb.V.e({
            myChildV: null,
            r: function() {
                this.$el.ht("Greeting Area");
                this.$el.A(this.myChildV.$el);
                return this;
            }
        })

        /*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
         We will then position three buttons on the UI which will let the user to change the view.
         Below code shows the application setup that is creating the container view and the functions
         that will get invoked when the user selects the view from screen.
         */

        greet = V1.o({
            Ms: "Hello world"
        })


        cont = CtV.o({el: $("#AppContainer"),
            model: greet
        })

        v1 = null;
        v2 = null;
        v3 = null;

        function showView1() {
            if (view1 == null) {
                view1 = new View1({ model: greeting });
            }

            container.myChildView = view1;
            container.render();
        }

        function showView2() {
            if (view2 == null) {
                view2 = new View2({ model: greeting });
            }

            container.myChildView = view2;
            container.render();
        }

        function showView3() {
            if (view3 == null) {
                view3 = new View3({ model: greeting });
            }

            container.myChildView = view3;
            container.render();
        }



    }
    ITEMS=function(){$.x()

        Ap={M:{},V:{},C:{}}
        Ap.M.Item = bb.M.e({})

        bb.R({

            r:{'':'welcome', 'itemlist':'showItemList', 'j':'j'},

            welcome:function(){
                $.bd().E().A($.h1('welcome'))

            },


            j:function(){},
            showItemList:function(){
                $.bd().E().A($.h1('show item list'))

            }
        })

        i1=Ap.M.Item.o({ n:'jason', g:'mason' })
        i1.oR('j',function(){
            $.bd().E().A($.h1('j'))
        })

        // H$()
    }
    ROUTE=function(){z()
        r= bb.R({ rt:{"*x":"d"}  })
        r.oR('d',function(a){
            alert(a)
        })//#hello -> 'hello'
        r.oR('e',function(a){
            alert(a)
        })//#e -> 'e' (could do '/#/e')
        // H$()
    }
    ROUTEPAMS=function(){z()
        bb.R({

            rt:{
                '':'home',
                'view':'v',
                'new': 'nn',
                ':id': 'en',
                'posts/:id':'gPo',
                '*acts':'dfR',
                'download/*path': 'dlF',
                ':route/:action': 'ldV'},
            home:function(){al('home')},
            v:function(){al('image')} ,
            nn:function(){},
            en:function(id){al(id)}

        })
        r.oR('dfR',alert)
        r.oR('gPo',function(id){
            alert('gPo# '+id)})
        r.oR('gPo', function(){
            alert(3)}) //both routes fire!
        r.oR('dlF', alert)
        r.oR('ldV', function(rt,ac){
            alert(rt+'_'+ac)})
        // H$()  // or bb.h.s({pushState: true})
    }
    ROUTENAV=function(){$.x('b')
        bb.R({
            rt:{
                'po/:id'  :  'gp',
                '*a'      :  'dr'
            },
            dr:function(a){alert(a)},
            gp:function(id){alert('Get post '+id)}

        })
        $.bt('hi', function(){$l('11111111')
            rt.n('po/2', {t:1})
        })
    }
    BACKDEMO=function(){$.x()

        Temp=function(i,h){  var s=''
            return _.tp($('#'+i).html(), h||{})
            if(A(h)){_.e(h, function(h){s += h.oh()})}
            s="<script type='text/template'>"+ s +"</script>"
            return $(s).id(i).A()
        }

        Temp('task', [
            $.lb('Task: '),
            $.ip().id('task_desc'),
            $.bt('add task').id('btn') ])

        $.dI('cont')

        bb.R({
            rt:{'':'f',
                'f':'f',
                's':'s'},
            f:function(){$l('fir')},
            s:function(){
                new Task()
                $l('sec')}
        })

        Tsk=bb.V.e({
            el: $('#cont'),
            i: function(){this.r()},
            r: function(){this.$el.ht( Temp('task') )},
            e: {'click button': 'add'},
            add: function(){
                alert( $('#task_desc').v() + ' task added' )
            }
        })
    }
//works:
    RTR=function(){$.x('b')

        bb.R({$:1, rt:{
            '' : 'index',
            'wap/rtr/images/:id':'image',
            view: 'viewImage'
        },
            h: function () { alert('you are viewing home page')},
            x:function(){alert('you are viewing index')},
            image:function(id){
                _.t(10, function(){
                    $l($r() +'-id: '+ id)}); $.bd().C('z') },
            viewImage: function () {
                alert('you are viewing an image')}
        })

        $.in(function(){

            rt.n('wap/rtr/images/32903290239032902390')

        }, '*')

        //looks for clicks on any anchor els where
        //href starts with '/' (no domain) and stop
        //bw from nv to it

        $.bd().on('click', 'a[href^="/"]', function(ev){
            ev.preventDefault()
            rt.n($(this).attr('href', {trigger:true}))
        })
    }
}



clection=function(){
    $P()

    bb.C.e=function(ob){var g=G(arguments), o,Cl

        //o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s}; o=o||{}
        ob=ob||{}

        /*
         if(o.fn){ob.i= o.fn}

         ob.initialize = ob.initialize || ob.i
         ob._i=ob.initialize
         ob.initializeX=function(op){
         this.q= this.$el

         this.a2=function(a){return this.q.a2(a)}
         //$l('gen init..')
         this.g=function(a){if(a){return this.model.get(a)}}
         this.A=function(ob){
         var g=G(arguments),
         q=this.q
         if(S(ob)){ob = this.g(ob)}
         if(ob){q.A(ob)}

         if(U(ob) || g.p){q.A()}
         return q
         }
         _.b(ob._i,this) (op)
         }


         ob.id = D(ob.id)? ob.id : ob.x
         ob.className=ob.className|| ob.k
         ob.tagName=ob.tagName|| ob.tn || ob.t
         ob.defaults=ob.defaults || ob.df || ob.d
         ob.events= ob.events || ob.ev || ob.e
         ob.render=ob.render || ob.rr || ob.r
         ob.tagName=ob.tagName || ob.tn || ob.t

         ob.collection= ob.collection || ob.cl || ob.c

         // ob.render= ob.render || ob.rr || ob.r
         ob.render= ob.render || ob.rn*/

        ob.model= ob.model || ob.md || ob.m

        Cl= bb.C.extend(ob)

        Cl.o=function(ob, q){
            var Cl = this, cl

            if(U(ob)){return new Cl}
            //ob=ob||{}

            ob.collection= ob.collection || ob.cl || ob.c
            ob.model = ob.model || ob.md || ob.m

            cl= new Cl(ob)

            //if(q){cl.a2(q)}
            return cl
        }

        return cl
    }
    cl.a=cl.add
    cl.j= cl.tJ=cl.toJSON
    cl.rm= cl.r= cl.remove
    PLV=function(){$.x('o','hi')


        Per= bb.M.e({d: {n:'a', a:20, o:'p'}})

        p=  Per.o({})
        p1 = Per.o({n:'b'})
        p2= {n:'c'}
        PerV=bb.V.e({t:'li',
            x:'some-per', k:'per',

            tp:tp=_.tp('<%= n %> (<%= a %>) - <%= o %>'),

            r: function(){
                this.$el.A('fasdfsfasd')
                _m=this.model
                //    this.$el.A(this.tp(m  ))  // this.model.toJSON()
            },

            i: function(){this.r()}
        })

        PepC=bb.C.e({m:Per})

        pV=PerV.o({m:p})
        pC=PepC.o()

        pC.add([p, p1,p2])

        PepV=bb.V.e({cl: PepC, el:ul= $.ul(),
            i:function(){},
            r: function(){
                ul=this.q.E()
                this.J(function(md){PerV.o({m:md},ul)})}})
        pCV = PepV.o({cl: pC})
        $.in(.2,function(){pCV.r()},'*')
        $.in(.4,function(){pCV.r()},'*')

    }
    C$= function(a){var b,c
// $.ext(bb.Collection)
        //if(U(a)){var c=new Backbone.Collection; return sCl(c)}
        a=O(a)?a:{}
        if(a.m){a.model= a.m}
        c= Backbone.Collection.extend(a)
        return function(o){o=O(o)?o:{}

            //if(o.m){o.model= o.m}
            b=new c(o)
            o.o=o.on
            E$(o)
            return b}
    }
    BCL=function(){$.x().h1('BCL')

        Bk = bb.M.e({
            d: {ID: '', n: ''},
            id: "ID",
            url: 'http://localhost:51377/api/Books'
        })

        BksC = bb.C.e({m: Bk})

        cl1 =   BksC.o()
        bk1 = Bk.o({ ID: 1,  n: "Bk 1" })
        bk2 =  Bk.o({ ID: 2, n: "Bk 2" })
        cl2 =  BksC.o([bk1, bk2])
        bk3 =  Bk.o({ ID: 3, n: "Bk 3" })
        cl2.add(bk3)

        change=function(){
            bk3 = new Bk({ ID: 3, n: "Bk 3" })
            cl2.add(bk3)
            bk3_changed =  Bk.o({ ID: 3, n: "Changed Model" })
            cl2.add(bk3_changed, { merge: true })
        }

        add=function(){
            bk4 =   Bk.o({ ID: 4, n: "Bk 4" })
            bk5 =  Bk.o({ ID: 5, n: "Bk 5" })
            cl2.add([bk4, bk5])
        }
        addAt=function(n){
            bk0 = new Bk({ ID: 0, n: "Bk 0" })
            cl2.add(
                bk0, {at:n||0}
            )
        }

    }
    BBCOL=function(){$.x()

        Per = bb.M.e({})
        p1 =  Per.o({n:'j'})
        p2=  Per.o({n:'y'})

        Pers= bb.C.e({model: Per})

        pers=  Pers.o([p1, p2])
    }
    BBSORT=function() {
        Chp = bb.M.e()

        chps =  bb.C.e({
            m:Chp
        }).o()


        chps.comparator = function (a) { return a.tt } //$.x(a)

        chps.add(
            Chp.o({p:9, tt:"End"})
        )
        chps.add(
            Chp.o({p:5, tt:"Mid"}))
        chps.add(
            Chp.o({p:1, tt:"Beg"})
        )

        $l(chps.pluck('tt'))

    }
    FLCL=function(){$.x('r', 'filtering a cl:')

        /*
         FlV = bb.V.e({
         ev: {'click #run': 'runFilter'},
         runFilter: function(e){e.pD();
         this.fl = {
         // ... get the filter info from the DOM
         }; this.rr()},
         rr: function(){// get the filtered list from the collection
         // iterate over the filtered list and render the results in to the html array
         // populate the DOM with the resulting HTML
         HT=[]
         _.e(this.cl.where(this.fl),
         function(item){HT.push(
         _.tp($('my-item-template').H())(item.tJ())
         )})

         this.$el.html(HT); return this }
         })*/


        Cl =  bb.C.e({
            i:function(){}
        })


        cl = Cl.o({})


        /*
         cl.add([{a: 'f', b: 's'},
         {a: 't', b: 's'},
         {a:'f', b: 's'},
         {a: 's', b:'t'}
         ])


         res = cl.where({a:'f',b:'s'})
         */
        //http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
    }
    TASKER=function(){$.x()
        Ap={M:{}, C:{}, V:{}}

        Ap.M.Task = bb.M.e({})

        t1=Ap.M.Task.o({t:'go  store', pr:4})

        t2=Ap.M.Task.o({t:'go park', pr:3})

        Ap.V.Tsk= bb.V.e({t:'li',
            rr: function(){this.A( this.g('t') )
                return this
            }
        })

        taskView=Ap.V.Tsk.o({m:t1})
        Ap.C.Tasks = bb.C.e({m:Ap.M.Tsk})
        tasks=Ap.C.Tasks.o([{t:'hi'}, {t:'bye'}])
        Ap.V.Tasks = bb.V.e({t:'li',
            rr: function(){
                var that=this
                this.cl.each(
                    function(t){
                        var v=Ap.V.Task.o({m:t})
                        that.$el.A(v.rr().el)
                    }, this)
                this.el.A()
            }
        })

        tasksV=Ap.V.Tasks.o({cl:tasks})
    }
    PEOPLE=function(){$.x()

        Per  = bb.M.e({
            i: function () {
                //this.oV(function(mod, err){$l(err)})
            },
            d: {n:'doe', a: 30, j: 'wrk'},
            validate: function (ats) {if (ats.age < 0) {return 'a < 0!'}},
            work: function () {return this.g('n') + ' is working'}
        })

        p = Per.o({n: 'y', a: 34})

        //p.oV(function (mod, z) {$l(z)})

        PerV = bb.V.e({tn: 'li',
            k: 'person', x: 'some-person',
            i: function () {this.r()},
            tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
            r: function () {
                var t = this
                //this works, but doesnt use a template
                // t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
                t.H(
                    t.T(
                        t.J()
                    )
                )
            }
        })

        pV= PerV.o({m: p})

        peepC = bb.C.e({m: Per})


        pC = peepC.o([
            {n: 'rigo', a: 29},
            {n: 'j', a: 2},
            {n: 's', j: 'gx'}
        ])
        pC.add(p)


        pC.at(1).n('joejoe')
        pC.at(1).s('name', 'joejoe')

        PeepV = bb.V.e({tn: 'ul',
            i: function () {
                $l('hi')
                $l(this.cl)
            },
            r: function () {//var t=this
                this.cl.each(function (p) {var v,pV  //$l(p.g('n'))
                    pV = PerV.o({m: p}) //$l(pV.el)
                    this.$el.append(pV.el) //t.q( pV.el  )
                }, this)
            }

        })

        pcv = PeepV.o({cl: pC})
        pcv.r()
        $.A( pcv.el )

    }
    fromServ=function(){
        AVAIL=function(){$.x('x'); Ap={ M:{},C:{},V:{},T:{} }

            Ap.T.Avail=function(model){
                return $.d('g',400,100).mar(20).A(

                    $.h4(model.g('c')).id('avail').C('y','r'),
                    $.br(), $.sp('delete').id('deleteAvail'),
                    $.sp(' '), $.sp('edit').id('editAvail'),
                    $.sp(' '), $.cb().id('selAvail'))
            }
            Ap.M.Avail=M$({urlRoot: '/avail'})
            Ap.C.Avails=C$({model: Ap.M.Avail, url: '/avail'})
            Ap.V.Avail=bb.V.e({

                r:function(){
                    this.$el.A( Ap.T.Avail(this.model) )
                    return this},
                ev:{
                    'click #deleteAvail':'deleteAvail',
                    'click #editAvail':'editAvail',
                    'blur #avail':'changeAvail'},
                changeAvail:function(){
                    this.$el.fi('#avail').at('contenteditable','false')
                    newAvail=this.$el.fi('#avail').text()
                    this.model.s('c', newAvail)
                    this.model.save()},
                deleteAvail:function(){
                    this.model.destroy()
                    this.$el.rm()
                },

                editAvail:function(){this.$el.fi('#avail').at('contenteditable','true')}

            })
            Ap.V.Avails =bb.V.e({
                el:'#availsDiv',
                I:function(){this.render()},
                R:function(){var t=this
                    t.collection.fetch({
                        success:function(){
                            t.$el.html('')
                            t.$el.A("<h1>Avails List</h1>")
                            t.collection.each(function(m){
                                t.$el.A( Ap.V.Avail({model:m}).render().el )
                                return t},t)
                        }})
                }})
            //  avs=Ap.C.Avails()
            //  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
            $.ip('new avail').id('newAvail').A()

            $.bt('ok',function(){
                Ap.M.Avail({c: $('#newAvail').v()
                }).save()

                v.render()

            }).A()
            $.dI('availsDiv')
            $.ip('new avail').id('newAvail').A()
            $.bt('ok',function(){
                var m= Ap.M.Avail({
                    c:qiv('newAvail')
                })
                m.save()
                m.on('destroy', function(){alert('i am the model and i was destroyed')})
                v.render()
            })
            $.dI('availsDiv')


            Ap.T.Avail=function(model){
                return $.d('g',400,100).mar(20).A(
                    $.h4(model.g('c')).id('avail').col('y','r'),
                    $.br(),
                    $.sp('delete').id('deleteAvail'),
                    $.sp(' '), $.sp('edit').id('editAvail'),
                    $.sp(' '), $.cb().id('selAvail')
                )
            }
            Ap.M.Avail=bb.M.e({urlRoot: '/avail'})
            Ap.C.Avails=C$({model: Ap.M.Avail, url: '/avail'})
            Ap.V.Avail=bb.V.e({

                r:function(){
                    this.q(
                        Ap.T.Avail(this.model)
                    )
                    return this
                },
                ev:{
                    'click #deleteAvail':'deleteAvail',
                    'click #editAvail':'editAvail',
                    'blur #avail':'changeAvail'
                },
                changeAvail:function(){
                    qq( this.$el.find('#avail') ).cE(0)
                    var newAvail=this.$el.find('#avail').text()
                    this.model.s('c', newAvail)
                    this.model.save()
                },

                deleteAvail:function(){
                    this.model.destroy()
                    this.$el.remove()},
                editAvail:function(){

                    this.$el.find('#avail').cE(1)

                }

            })

            Ap.V.Avails =bb.V.e({el:'#availsDiv',
                i:function(){this.render()},
                r:function(){var t=this
                    t.collection.fetch({
                        success:function(){
                            t.q.H('')

                            t.q($.h1('Avails List'))

                            t.e(
                                function(m){
                                    t.q(
                                        Ap.V.Avail({m:m}).r().el )
                                    return t},t)

                        }})
                }})
            avs=Ap.C.Avails.o()

            avs.on('destroy', function(j){
                alert('i am col and i was destroyed')
                v.trigger('modelDeleted')
            })

            v=Ap.V.Avails.o({cl:avs})


            v.on('modelDeleted', function(){alert('modDel')})

            bb.M.e({
                d:{ prop:3 },
                test:function(){
                    $( this.get('prop') ) },
                test2:function(a){ $l('prop: '+this.get('prop'))},
                happy:function(a){
                    this.test2(a)
                }
            })


        }
        DIRTPAGE=function(){$.x()

            var newMsBox, newTopic, newMs,searchBox

            MsM= bb.M.e({  })
            MsC= bb.C.e({   m:'MsM'  })
            MsView= bb.V.e({  })
            MssView= bb.V.e({ })

            $.h1().A(
                $.a(  'Dirtpage', '/wap/dirtpage/' )
            ).A()
            $.dI('content')
            if(wappyPam) {

                newMsBox= $.d().WH('auto').A(
                    $.h1('new ms'),
                    $.ip().K('form-control').id('newMs'),
                    $.bt('ok', function(){var newMs = $('#newMs').v()
                        $.P('messages' , {tpc:wappyPam, ms:newMs
                        }, function(){ loadResults() })}))
                $('#cont').A($.h1('the '+ wappyPam + ' page'),
                    newMsBox, $.dI('res'))
                function loadRes(){$.G('topics/' + wappyPam, function(msgs){
                    $('#results').ht($.h5('len: '+msgs.length)  )
                    _.e(msgs, function(ms){$('#res').A($.h6( ms.ms ))
                    })})}
                loadRes()}
            else {
                newMsBox=$.d().WH('auto').A(
                    $.h1('new message'),
                    $.ip().K('form-control').id('newTopic'),
                    $.ip().K('form-control').id('newMs'),
                    $.bt('ok', function(){
                        newTopic = $('#newTopic').v()
                        newMs = $('#newMs').v()
                        $.P('msgs', {topic:newTopic, message:newMs}, function(){})})
                )
                searchBox= $.d().WH('auto').A(
                    $.h1('search'),
                    $.ip().K('form-control').id('searchInput'),
                    $.bt('ok', function(){window.location=   '/wap/dirtpage/'+ $('#searchInput').v()
                        searchInput = $('#searchInput').v()
                        $.G('topics/' + searchInput, function(msgs){
                            $('#res').ht($.h5('len: '+msgs.length)  )
                            _.e(msgs, function(ms){$('#res').A( $.h6( ms.ms ) )})
                        })
                    })
                )
                $.dI('res')
                $('#cont').A(newMsBox, searchBox)
                $.eG('msgs',  function(ms){
                    $('#res').A($.h2().A(
                            $.a('topic: '+ms.topic,'/wap/dirtpage/'+ms.topic)),
                        $.h3( 'ms: '+ms.ms)
                    )
                })
            }
        }
    };fromServ()


};clection()





ext=function(o){
    o.e=o.extend
    return o}
bbR=function(o){o=ob(o)

    if(o.R){o.routes=o.R}

    var r=Bb.Router.extend(o)

    r.o=r.on

    return function(){
        var a=new r
        a.o= a.on
        a.oR=function(r,f){a.o('route:'+r, f)}
        a.n=function(frag,op){

            if(O(op)){
                if(D(op.t)){op.trigger=op.t?true:false}
                if(D(op.r)){op.replace=op.r?true:false}}

            a.navigate(frag, op)


            return a}
        return a}
}
bbH=function(){Bb.history.start()}
Eve=function(){


    var e= _({}).extend(Backbone.Events)

    e.o= e.bind
    e.e= e.trigger

    return e}
bbE=function(o){

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
sMd=function(m){
    m.at= m.attributes

    m.s=function(a,b,c){

        if(O(a) && O(b)){
            if(b.v){b.validate= b.v?true:false}}


        if(S(a) && O(c)){
            if(c.v){c.validate= c.v?true:false}
        }

        return m.set(a,b,c)

    }



    m.g= m.get
    m.j= m.toJSON
    m.o= m.on
    bbE(m)
    return m}
bbM=function(a){a=ob(a)

    if(a.i){a.initialize=_v(a.i)}
    if(a.I){a.initialize=_v(a.I)}

    if(a.d){a.defaults=a.d}
    if(a.D){a.defaults=a.D}

    if(a.v){a.validate=a.v}
    if(a.V){a.validate=a.V}

    a.idAttribute= "_id"

    var m=Backbone.Model.extend(a)

    sMd(m)

    return function(a){
        var o=new m(a)

        sMd(o)

        return o}
}
bbV=function(a){a=ob(a)

    if(a.I){a.initialize = a.I}

    if(a.R){a.render = a.R}
    if(a.E){a.events = a.E}
    if(a.T){a.template = a.T}

    if(a.t){a.tagName = a.t}
    if(a.k){a.className = a.k}
    if(a.i){a.id=a.i}

    a.g=function(m){return this.model.get(m)}
    a.H=function(a){this.$el.html(a);return this}

    a.J=function(){return this.model.toJSON()}
    //a.cl= a.collection
    //a.q= qq(a.el)


    var v=Bb.View.extend(a)

    return function(a){
        a=ob(a)
        if(a.m){a.model= a.m}

        if(a.cl){
            a.collection= a.cl

        }


        var z=new v(a)
        z.cl= z.collection
        z.e=function(a,b){return z.cl.each(a,b)}
        z.q= qq(z.$el)
        z.r=function(){return z.render()}
        return  z

    }}
sCl=function(c){
    c=bbE(c)
    c.a=c.add
    c.j= c.toJSON
    c.rm= c.r= c.remove
    return c}
bbC=function(a){

    //if(U(a)){var c=new Backbone.Collection; return sCl(c)}

    a=ob(a)

    if(a.m){a.model= a.m}

    var c=Backbone.Collection.extend(a)

    return function(o){o=ob(o)

        //if(o.m){o.model= o.m}

        var b=new c(o)
        o.o=o.on
        bbE(o)
        return b}

}





function apps() {works=function(){

    BBVIEW=function(){$.x('b','bbview')

        $.dI('d1',
            'r', 500, 500)



        LstV = bb.V.e({
            el: '#d1',
            r: function(){
                this.A(
                    $.ul([
                        'hello']))},
            i: function(){ this.r() }})

        v = LstV.o()
    }
    BBVIEW=function(){$.x('b','bbview')
        v=$V({
            q: d=$.dI('d1','r', 500, 500),
            r: function(){this.A($.ul(['hello']))},
            i: function(){this.r()}
        })()
    }
    BBVIEW=function(){$.x('b','bbview')


        $.dI('d1','r', 500,500).V({
            r: function(){this.A($.ul(['hello']))},
            i: function(){this.r()}
        })()

    }
    PER=function(){$.x('n')
        Per=bb.M.e({

            d: {n:'j', a:20, o:'p'}

        })
        p= new Per
        PerV = $V({t:'li', _:'some-per', k:'per',
            r: function(){
                this.A('n').A()
            },
            //  this.A(this.g('n')).A() //  this.A(this.model.get('n').A()
            i: function(){
                $l(this.model);
                this.r()
            }
        })
        pV =  PerV({ m:p  })

    }
    PER=function(){$.x('n')

        p = $M({ d: {n:'j',a:20,o:'p'}   })()

        PerV = $V({t:'li', _:'some-per', k:'per',
            r: function(){  this.A('n').A() },
            i: function(){ $l(this.model); this.r() }
        })

        pV = p.V(PerV) //PerV({ m: p })
    }
    PER=function(){$.x('n')
        m = $M({d:{n:'j',a:20,o:'p'}})()
        m.V($V({
            t:'li', _:'some-per', k:'per',
            r: function(){  this.A('n').A() },
            i: function(){this.r()}
        }))
        $.in(function(){m.l()}, '*')
    }
    TP=function(){$.x().A(
        a= _.tp("<div>hello:<%=n%></div>")({n:'moe'}),
        b= _.tp('<b><%-tag%></b>',{tag:'<script>'}), // <%- vs <%= ?
        c= _.tp(
            '<%_.e(peep,function(name){%>'+
            '<li>'+'<%=name%>'+'</li>'+
            '<%})%>'
            ,{peep:['moe','curly','larry']})
    )

    }
    WOB=function(){$.x('x', 'bb view people')
        //without backbone!
        ul = $.ul().id('peep')
        peep = [{n:'a',a:11}, {n:'b',a:46}, {n:'c',a:13}]
        vw={r:function(){
            $('#peep').E()
            _.e(peep, function(p){
                $('#peep').A('<li>'+ p.n + '(' + p.a + ')</li>')
            })}}
        vw.r()
        $.in(function(){peep.pop(); vw.r()},'*')
    }
    SIMP=function(){$.x('r').h1('tut')
        p = $M()({n:'j'})
        $.h3('p: '+p.g('n'))
    }
    BBVP1=function(){$.x('x', 'bb view people')

        peep = [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]
        vw= $V({t:'ul',
            i:function(){this.$el.C($r())},
            r:function(){var el=this.$el.E()
                _.e(this.collection, function(p){$('#peep')
                    el.A($.li().A(p.n + '(' + p.a + ')'))})
                return this}

        })({cl: peep})


        $.A(vw.r().el)
        $.in(function(){peep.pop(); vw.r()},'*')
    }
    BBVP=function(){$.x('x', 'bb view people')

        peep = [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]

        vw= $.ulV({
            i:function(){
                this.q.C($r())

            },
            r:function(){var el=this.q.E()
                this.cl(function(p){
                    el.A($.li().A(p.n+'('+p.a+')'))})
                return this}
        })({cl: peep})
        $.A(vw.r().q)
        $.in(function(){peep.pop(); vw.r()},'*')
    }
    TMP=function(){$.x('r'); $V({
        t:'li', x:'some-per', k:'per',
        tp: tp=_.tp('<%= n %> (<%= a %>) - <%= o %>'),
        r: function(){this.A().A(this.tp(this.model.toJSON()))},
        i: function(){$l(this.model); this.r()}
    })({m:Per=$M({d:{n:'j',a:20,o:'p'}})()})}
    BBSAMP1=function(){$.x('b','bbsamp','+')
        d=$.d()
        Rec = bb.M.e()

        RecV = bb.V.e({t:'div', k:'rec',

            events:{'click': 'move'},
            move:function(){this.$el.css('left', this.$el.position().left +10)},
            rr:function(){return this.sDims().sPos().sCol()},
            sDims:function(){this.$el.WH(this.model.get('w'), this.model.get('h'))
                return this},
            sPos:function(){this.$el.ab().LR(
                this.model.get('pos').x, this.model.get('pos').y)
                return this
            },

            sCol:function(){this.$el.C(this.model.get('C'))
                return this}
        })


        _.e([
            Rec.o({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
            Rec.o({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
            Rec.o({w:100, h:200, pos:{x: 0, y:100},C:'y'})
        ], function(md){


            var r=  RecV.o({model:md})

            r.rr().$el.a2(d)
        })



    }
    BBSAMP=function(){$.x('b','bbsamp','+')


        d=$.d()
        Rec = $M()

        RecV = $V({k:'rec',

            e: {'click': 'move'},

            move:function(){
                this.q.css('left',
                    this.q.position().left +10)
            },
            r:function(){return this.sDims().sPos().sCol()},
            sDims:function(){
                this.q.WH(this.model.g('w'),
                    this.model.g('h'))
                return this
            },

            sPos:function(){this.q.ab().LR(
                this.model.g('pos').x,
                this.model.g('pos').y
            )
                return this
            },


            sCol:function(){this.q.C(this.model.g('C'))
                return this}
        })

        _.e([
            Rec({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
            Rec({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
            Rec({w:100, h:200, pos:{x: 0, y:100},C:'y'})
        ], function(md){ RecV({model:md}).rr().$el.a2(d)  })

    }
    BBVT=function(){$.x('x', 'bb view and template');
        md= new bb.M({d:[{t:'a.com', h:'a.com'}, {t:'b.com', h:'b.com'}, {t:'c.com', h:'c.com'}]})


        $.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')

        $.dI('list-tp', [ $.la() ]).C('o')


        Vw = bb.V.e({
            el:'#ct',
            i: function(op){$l(op.blOp); this.tp =$('#list-tp').children()},
            rr:function(){var da, tp; $l('rr: '+ this.model.get('d')[0].h );//$.c('b').ab(300,300)
                da=this.model.get('d')
                tp=this.tp, ul= this.$el.find('ul')
                _.e(da, function(da){ul.A(tp.clone()
                    .find('a').hr('href', da.h).T(da.t).end())}) },
            ev: {'click button':'rr'}
        })
        vw = new Vw({blOp:'empty!', model:md})
        return vw

    }
    BBVT=function(){$.x('x', 'bb view and template');



        $.dI('ct', [
                $.bt('Load'),
                $.ul().id('list')
            ]
        ).C('y')

        $.dI('list-tp', [ $.la() ]).C('o')


        v=$V({

            q: '#ct',

            events: {'click button': 'r'},

            r: function(){var da, tp,ul
                $l('RENDER')
                /*
                 $l('rr: '+ this.model.get('d')[0].h )
                 //$.c('b').ab(300,300)
                 da=this.model.get('d')
                 tp=this.tp
                 ul= this.$el.find('ul')
                 _.e(da, function(da){ul.A(tp.clone()
                 .find('a').hr('href', da.h)
                 .T(da.t).end())})
                 */
            },
            i: function(op){
                $l(op.blOp)
                this.tp = $('#list-tp').children()
            }
        })({

            blOp: 'empty!',

            m: m=$M()({
                d:[
                    {t:'a.com', h:'a.com'},
                    {t:'b.com', h:'b.com'},
                    {t:'c.com', h:'c.com'}
                ]
            })

        })

    }


};works()

    BACKSET = function () {
        $.x()

        Sb = Sidebar = bb.m.e({
            ask: function () {
                this.s({c: prompt("color?")})
            }
        })
        sb = Sb.o()
        sb.on('change:c', function (md, c) {
            $('body').C(c)
        })
        sb.set({c: 'b'})
        sb.ask()
        //right from ko site
        d = $.dA(400)

        Sid = bb.M({
            promptColor: function () {
                this.s({
                    co: pr('color:')
                })
            }
        })

        sb = Sid()
        sb.on('change:co', function (md, c) {
            d.C($l(c))
        })
        sb.C('w')
        sb.ask()
        Per = bb.M.e({
            i: function () {
                alert("Welcome")
            }
        })
        p = Per({})
        p.s({n: "mac", a: 67})
        $.dA(300).id('sb')
        Sidebar = bb.M.e({
            fn: function () {
                return this.s({
                    c: prompt("c?")
                })
            }
        })
        Sidebar().oC('c', function (m, c) {
            $('#sb').C(c)
        }).s({c: 'w'}).fn()

    }
    BBCL = function () {
        $.x().h1('backcl')
        bads = bb.C.e().o().oA(function (s) {
            alert("new baddie: " + s.g("n"))
        })
        bads.add([{n: "bad1"}, {n: "bad2"}])

        Frnd = bb.M.e({d: {lame: 1}})
        f1 = Frnd.o({n: "Lul", a: 67})
        f2 = Frnd.o({g: 'jigo'})
        f2.s({n: "Rigo", a: 7})
        f2.s('n', 'hah')
        Per = bb.M.e({
            d: {lame: true},
            i: function () {
                var t = this
                t.on('error', function (m, e) {
                    alert(3);
                    $l(e)
                })
                t.on('change:n',
                    function (m, e) {
                        alert(3);
                        $l(e)
                    })
            },
            v: function (at) {
                if (at.n == 'rigo') {
                    return "n cant be rigo!"
                }
            }
        })
        p = Per.o({n: "rigo", a: 7})

        cl = bb.C.e().o()
        f1 = cl.A(f1)
        f2 = cl.A(f2)
        cl.rm(f1)


        Pers = bb.C.e({m: Per})
        pers = Pers.o()
        p1 = pers.add(p)
        pers.add(p2)
        pers.rm(p1)

    }
    FETCH = EVTSAVE = function () {
        m = bb.M.e({n: 'j'})
        Don = bb.M.e({
            d: {n: null, sprink: 0, cream: 0},
            u: function () {
                return this.id ? '/dn/' + this.id : '/dn'
            }
        })
        bc = bostonCream = Don.o({n: 'Bos', cream: 1})
        bc.s({sprink: 1}).S() //save
        Dons = bb.C.e({m: Don, url: "/dn"})
        dons = Dons.o()
        dons.fetch()
        // donuts.at(0); -> gets donuts by index.
        // donuts.get(0); -> gets donuts by id.
        // donuts.each(function(d){$l(d.get("name"))})
        // donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
        // donuts.map(function(d){return d.get("name")})
        Shop = bb.M.e({

            i: function () {
                this.dons = Dons()
                this.dons.url = 'shops/' + this.id + "/dn"
            },
            df: {n: "z"}
        }).o()
        Shop.oA(function (dn) {
            alert("added " + dn.g('n'))
        })
        lem = Shop.dons.A({n: "Lem"})
        ev = bb.E()
        ev.b("fun:had", function () {
            alert("wee!")
        })
        ev.tr("fun:had")  //it'll alert "wee!"
    }


    MODCHANGE = function () {
        $.x()

        Bk = bb.M.e({

            d: {ID: "", n: ""},
            initiate: function () {

                $l('init..')

                var that = this

                this.on('change', function () {
                    alert('change')
                    if (that.hasChanged('ID')) {
                        alert('ID changed')
                    }
                    if (that.hasChanged('n')) {
                        alert('n changed')
                    }
                })
            },

            showAlert: function () {
                alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
            }

        })


        // ChildBook = Bk.extend({})
        bk = Bk.o({ID: 1, n: "a"})
    }
}
old=function(){
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
}

