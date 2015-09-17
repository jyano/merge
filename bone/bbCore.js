$Ms=function(ms){
    return $.d().fS(80).C($r()).col($r()).A(ms)
};$l('bbCore');
Bb= Backbone; Bb.U=Bb.Utility; Bb.S=Bb.Sync;
ro = rt = Bb.Router.prototype; md = Bb.Model.prototype; vw = Bb.View.prototype; cl = Bb.Collection.prototype
Bb.sEv=function(md){
    md.b = md.bind
    md.O=md.o$=md.oAl=function(fn){return this.on('all', fn)}//passes event name as 1st ag
    md.oZ=md.oE=md.oEr=function (a, b, c) {return this.on('error', a, b, c)} //"error" (model_or_collection, resp, options)
// — when model's or collection's request to remote server has failed.


    md.oA=function(fn){
        return this.on('add', fn || function (m){
        m.at = m.attributes
        $l('E$???????????? (in md.oA')//E$(m) // a.A(m)
    })}//when a md is "added" to cl (model, collection, options)



    md.oC=md.oCh=function (n, fn) {
        var g = G(arguments), o
        o = g.F ? {fn: g.f} : {at: g.f, fn: g.s}
        // "change" (model, options)    "change:[attribute]" (model, value, options)
        return g.at ?
            this.on('change:' + o.at, o.fn) :
            this.on('change', o.fn)
    }//=md.$
    md.oRm=function(a,b,c){return this.on('remove',a,b,c)}// "remove" (md, cl, ops)  — when md rmd from a collection.//=md.oH=md.o_
    md.oR=md.oRt=function(n,f){
        var o = this
        //"route:[name]" (params)
        // — Fired by the router when a specific route is matched.
        // "route" (route, params)
        // — Fired by the router when any route has been matched.
        //"route" (router, route, params)
        // — Fired by history when any route has been matched.
        if (U(f)) {return o.on('route', n)
        }
        return o.on('route:' + n, f)
    }
    md.oI=md.oIv=function(a,b,c) {
        //"invalid" (model, error, options)
        // — when a model's validation fails on the client.
        return this.on('invalid', a, b, c)
    }
    md.oSo=function(a,b,c){
        // "sort" (collection, options) — when the collection has been re-sorted.
        return this.on('sort', a, b, c)
    }
    md.oD=md.oDs=function(a,b,c){
        // "destroy" (model, collection, options)
        // — when a model is destroyed.
        return this.on('destroy', a, b, c)
    }//=md.oX
    md.oS=md.oSy=function(a,b,c){
        // "sync" (model_or_collection, resp, options)
        // — when a model or collection has been successfully synced with the server.
        return this.on('sync', a, b, c)
    }
    md.oQ= md.oRq=function(a,b,c){ return this.on('request', a, b, c)


    }// "request" (model_or_collection, xhr, options)
// — when a model or collection has started a request to the server.

    md.oRs=function(fn,a,b,c){
        // "reset" (collection, options)
        // — when the collection's entire contents have been replaced.
        return this.on('reset', fn,a, b, c)
    }
    md.tr=  function(a,b){ this.trigger(a,b); return this}
    return md
};
Bb.E= Bb.Ev=Bb.Events; Bb.E.x=Bb.E.extend
Bb.E.b=Bb.E.bind;Bb.E.tr=Bb.E.trg=Bb.E.trigger
Bb.M = Bb.Model; Bb.M.x = Bb.M.extend;md = Bb.Model.prototype; Bb.sEv(md)
md.g = md.get;
md.s = function (a, b, c) {var md = this
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
     md.set(a, b, c)
    return md
}
md.l = function () {
    $l( JSON.stringify(this.toJSON()))
    return this
}
md.l1 = md.lT1= md.lTo1= function (a, b, c, d) {
    return this.listenToOnce(a, b, c, d)
}
md.l2 =md.lT= md.lTo=function (a, b, c, d) {
    return this.listenTo(a, b, c, d)
}
md.a2 = function (a) {$l('me.a2')
    return this
    if(!this.q){alert('me.a2 !q'); return this}
    return this.q.a2(a)
}
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
_$$M=function(ob){ob=ob||{} // o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s} //o=o||{}

    ob.initialize = ob.initialize || ob.i || function(){}
    function init(){

        if(ob.fn){
            ob.i= o.fn}

        ob._i= ob.initialize
        if(  !F(ob.initialize) && F(ob.i) ) {
            ob.initialize = ob.i  }
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
    }


    ob.className=ob.className|| ob.k
    ob.defaults = ob.defaults || ob.df || ob.d
    ob.events= ob.events || ob.ev || ob.e
    ob.id = D(ob.id)? ob.id : ob.x
    ob.idAttribute = ob.idAttribute || ob._id
    ob.model= ob.model || ob.md || ob.m
    ob.collection= ob.collection || ob.cl || ob.c
    ob.render=ob.render || ob.rr  || ob.rn|| ob.r
    ob.tagName=ob.tagName|| ob.tn || ob.t
    ob.validate=ob.validate || ob.v
    return Bb.M.x(ob||{})
}

$$M = function (ob,a,b,c) {ob=ob||{}
    var g = G(arguments), Md; Md = _$$M(ob,a,b,c)
    return function (ob, q) {var md
        ob = ob || {}
        ob.collection = ob.collection || ob.cl || ob.c
        ob.model = ob.model || ob.md || ob.m
        md= new Md(ob)
        if (q) {md.a2(q)}
        return md
    }}

$M=function(op,a,b,c){return $$M(op,a,b,c)()}

$m=function(ob){var m= new Bb.Model(ob); return m}

Bb.C = Bb.Collection; Bb.C.x = Bb.C.extend; cl = Bb.Collection.prototype; Bb.sEv(cl)
cl.A = cl.add
cl.rm=cl.remove
cl.s= function(a,b,c){var cl=this
    if(O(a) && O(b)){if(b.v){b.validate= b.v?true:false}}
    if(S(a) && O(c)){if(c.v){c.validate= c.v?true:false}}
    cl.set(a,b,c)
    return cl
}
_$$C = function(ob){ob=ob||{}
    //var g=G(arguments), o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s}; o=o||{}
    if(!F(ob.initialize) && F(ob.i) ) {  ob.initialize = ob.i  }
    if(!O(ob.collection) &&(O(ob.cl)||O(ob.c))) {ob.collection = ob.cl ||ob.c}

    if(!O(ob.model) && (O(ob.md)||O(ob.m)) ) {ob.model = ob.md || ob.m}
    //ob.model= ob.model || ob.md || ob.m
    //if(ob.m){ob.model= ob.m}
    ob.defaults = ob.defaults || ob.df || ob.d
    ob.id = D(ob.id)? ob.id : ob.x
    ob.idAttribute = ob.idAttribute || ob._id
    ob.events= ob.events || ob.ev || ob.e
    ob.validate=ob.validate || ob.v

    function more() {
        if (ob.fn) {
            ob.i = ob.fn
        }
        ob.initialize = ob.initialize || ob.i
        ob._i = ob.initialize
        ob.id = D(ob.id) ? ob.id : ob.x
        ob.className = ob.className || ob.k
        ob.tagName = ob.tagName || ob.tn || ob.t
        ob.defaults = ob.defaults || ob.df || ob.d
        ob.events = ob.events || ob.ev || ob.e
        ob.render = ob.render || ob.rr || ob.r
        ob.tagName = ob.tagName || ob.tn || ob.t
        ob.collection = ob.collection || ob.cl || ob.c
        // ob.render= ob.render || ob.rr || ob.r
        ob.render = ob.render || ob.rn
    }
    return Bb.C.x(ob||{})
}
$$C=function(ob){
    var Cl = _$$C(ob)
    return function(ob,b,c,d){
        ob=ob||{}
        var cl
        ob.collection= ob.collection || ob.cl || ob.c
        ob.model = ob.model || ob.md || ob.m
        cl= new Cl(ob,b,c,d) //if(q){cl.a2(q)}
        cl.q= cl.$el
        cl.a2=function(a){return cl.q.a2(a)}
        cl.g=function(a){if(a){return cl.model.get(a)}}

        /*
         cl.A=function(ob){

         var g=G(arguments)
         if(S(ob)){ob = cl.g(ob)}
         if(ob){this.$el.A(ob)}
         if(U(ob) || g.p){ this.$el.A() }
         return this.$el
         }
         //_.b(ob._i,cl) (op)
         */
        return cl
    }

}
$C=function(ob,a,b,c){return $$C(ob,a,b,c)()}
C$= function(ob){return $$C()(ob)}


$c=function(ob){
    var m= new Bb.Collection(ob); return m}


Bb.R=  Bb.Router;
Bb.R.x=  Bb.R.extend
ro._n = function (){
    this.navigate.apply(this, arguments);
    return this
}
ro.n = function (url){
    return this._n(url,  G(arguments).n ? null : {trigger: true})
}//normal navigate, but i change the default to auto trigger the route fn
rt.rp = function (url, op) {
    return this._n(url, _.x({replace: true},
        G(arguments).n ? {trigger: true} : {}))
}//navigate: replace
ro.A = ro.oR   = function (rt, fn){
    var rtr = this
    if (O(rt)) {
        _.e(rt, function (v, k) {
            rtr.o(k, v)
        })}
    else {this.on('route:' + rt, fn)}
    return this
} //= ro.r = ro.o
_$$R=function(ob){
    //metaClass
    ob=ob||{}
    if(ob.i){ob.initialize = ob.i}
    doAler(); function doAler(){
        if(ob.$) {
            ob.initialize = function () {
                alert('ob.$')
                Bb.h.start({pushState: true})
                if (F(ob.$)) {
                    ob.$()
                }
            }
        }

    }
    ob.routes = ob.routes   ||  ob.rt || ob.r ||  {} // if(ob.R){ob.routes=ob.R}
    //ob.routes[''] = ob.routes[''] || 'index'
    // if(ob.x){ob.index = ob.x}; if(ob.h){ob.home = ob.h}
    ob.routes= _.x({'':'_'},
        ob.routes)
    ob.routes['*other']='d'
    ob= _.x({
        _:function(){$l('INDEX ( _ ) ')},
        d:function(other){$l('DEFAULT(d): "'+other+'"')}
    }, ob)


    return Bb.R.x(ob)
}
$$R= Bb.r=function(ob){//metaClass.. no need for 'new'
    var Rt = _$$R(ob)
    return function(a,b,c,d){
        return new Rt(a,b,c,d)
    }
}
$R= function(ob){
//if you want instant instantiation
    var g=G(arguments)
    r = $$R(ob)()
    //if(!Bb.H.started && !g.d){Bb.history.start({pushState: true})}
    return r
}
Bb.H= Bb.History
Bb.h =   Bb.history
Bb.h.tr= Bb.h.trigger
Bb.h.s= Bb.h.start


Ap={ M:{},C:{},V:{},T:{} }





Bb.V= Bb.View; Bb.V.x=Bb.V.extend; vw = Bb.View.prototype; Bb.sEv(vw)


vw.g=function(m){
    if(this.model){
        return this.model.get(m)
    }
    else if(this.collection && this.collection.get){
        return this.collection.get(m)
    }
}
vw.s=function(a,b){
    this.model.set(a,b); return this}
vw.E=function(){
    this.$el.E();return this
}
vw.e=function(a,b){
    return (this.collection || this.cl).each(a,b)
}
vw.cl= vw.eCl= function(fn){var cl=this.collection
    if(U(fn)){return cl}
    if(cl){_.e(cl,fn)}
    return this
}
vw.ECl= function(fn){
    this.E();
    if(cl){_.e(cl,fn)}
    return this
}
vw.eM=function(fn){
    _.e(this.model, fn);
    return this
    function alt(){
        vw.e= function(a, b){
            var cl = this.collection || this.cl;
            cl.each(a, b)
            return this}}
}
vw.h=function(a){
    if(U(a)){return this.$el.h()}
    this.$el.h(a);return this
}//=vw.H
vw.j=function(fn){var vw=this,j
    if(this.collection){
        j= this.collection.toJSON()
        if(F(fn)){_.e(j,fn);return vw}
        return j}
    if(this.model){return this.model.toJSON()}}
vw.a2 = function (a) {$l('vw.a2')
    if(!this. q){alert('vw.a2 !q'); return this}
    return this.q.a2(a)
}
vw.A = function (ob) {
    var g = G(arguments)
    //if (S(ob)) {ob = this.g(ob)}
    if (ob) {
        this.$el.A(ob) }
    if (U(ob)||g.p) {this.$el.A() }
    return this
}
vw.oC=function(){
    if(!this.model){return false}
    this.model.oC.apply(this.model, arguments)
    return this
}

_$$V= function(ob){ob = ob || {}
    ob.id = D(ob.id) ? ob.id : ob.x || ob._ || ob['#']
    ob.tagName = ob.tagName || ob.tn || ob.t
    ob.className = ob.className || ob.k //if (ob.k) {ob.className = ob.k}
    ob.defaults = ob.defaults || ob.df || ob.d
    ob.events = ob.events || ob.E || ob.ev || ob.e // || {$: function () {}}//; EVob = {$: 'click', $$: 'dblclick', v: 'mouseover'}; _.e(ob.events, function (v, k) {if (EVob[k]) {ob.events[EVob[k]] = v}})
    //ob.render = ob.render ||ob.R|| ob.rn || ob.rr || ob
    ob.model = ob.model || ob.md || ob.m
    ob.collection = ob.collection || ob.cl || ob.c
    ob.el = ob.el || ob.q
    if(F(ob.i)){
        ob.initialize =   ob.i
        function _$$V_init(){
            ob._i = ob.initialize || ob.i
            ob.initialize = function (op) {
                // ok so i think i see what is happening here...
                // first of all, i am clearly overwriting 'initialize' here
                // so why bother setting it prior?
                this.q = this.$el


                if (F(ob._i)) {_.b(ob._i, this)(op)}
            }
            if (ob.I) {ob.initialize = ob.I}
        }
    }
    return Bb.V.x( ob )
}


$$V=function(ob){
    var Vw =  _$$V(ob||{})
    return function(ob,q){
        ob=ob||{}
        ob.model=ob.model||ob.md||ob.m
        ob.collection=ob.collection ||ob.cl||ob.c
        var  vw = new Vw(ob);
        vw.md= vw.model;
        vw.cl= vw.collection
        vw.q= vw.$el
        if(q){ alert('see $$V'); vw.a2(q ) }
        return vw
    }
}

$V=function(ob, a,b,c){
    return $$V(ob,a,b,c)()}
$.uV=$.ulV=function(ob){
    ob=ob||{};ob.t = 'ul'; return $V(ob)
} // make a bbV with t:ul


 $v=function(ob){
    var m= new Bb.View(ob); return m}

