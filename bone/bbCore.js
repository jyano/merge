WOB=WITHOUTBB=function(){
    $.x('x', 'bb view people')
    ul = $.ul().id('peep')
    peep = [{n:'a',a:11}, {n:'b',a:46}, {n:'c',a:13}]
    vw={r:function(){
        $('#peep').E()
        _.e(peep, function(p){
            $('#peep').A('<li>'+ p.n + '(' + p.a + ')</li>')
        })}}
    vw.r()
    _.in(function(){
        peep.pop(); vw.r()},'*')
}; $l('bbCore');
Bb= Backbone; Bb.U=Bb.Utility; Bb.S=Bb.Sync;
ro = rt = Bb.Router.prototype; md = Bb.Model.prototype; vw = Bb.View.prototype; cl = Bb.Collection.prototype


Bb.sEv=function(md){
    md.b = md.bind
    md.O=md.o$=md.oAl=function(fn){return this.on('all', fn)}//passes event name as 1st ag
    md.oZ=md.oE=md.oEr=function (a, b, c) {return this.on('error', a, b, c)} //"error" (model_or_collection, resp, options)
// — when model's or collection's request to remote server has failed.
    md.oA=function(fn){return this.on('add', fn || function (m){
        m.at = m.attributes
        m.s = function (a, b, c) {
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
            return m.set(a, b, c)
        }
        m.g = m.get
        m.j = m.toJSON
        m.o = m.on
        $l('E$???????????? (in md.oA')//E$(m)
        a.A(m)
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

//Events:
Bb.E= Bb.Ev=Bb.Events; Bb.E.x=Bb.E.extend

//Views:
Bb.V= Bb.View; Bb.V.x=Bb.V.extend; vw = Bb.View.prototype; Bb.sEv(md)
vw.g=function(m){
    if(this.model && this.model.get){
        return this.model.get(m)
    }
}
vw.s=function(a,b){this.model.set(a,b); return this}
vw.E=function(){this.q.E();return this}
vw.cl= vw.eCl= function(fn){
    //
    var cl=this.collection
    if(U(fn)){return cl}
    if(cl){_.e(cl,fn)}
    return this
}
vw.ECl= function(fn){this.E();return this.eCl(fn)}
vw.eM=function(fn){
    _.e(this.model, fn);
    return this
    function alt(){
        vw.e= function(a, b){
            var cl = this.collection || this.cl;
            cl.each(a, b)
            return this}}
}
vw.h=function(a){this.$el.html(a);return this}//=vw.H
vw.j=vw.tJ=vw.J=function(fn){var vw=this,j
    if(this.collection){
        j= this.collection.toJSON()
        if(F(fn)){_.e(j,fn);return vw}
        return j}
    if(this.model){return this.model.toJSON()}
}
_$$V= function(ob){
    var g=G(arguments),
        Vw= Bb.V.x(mdOb(ob))

    return Vw

    function mdOb(ob){

        Bb.parseEvents=function(ev){
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

        }//Bb.pe=



        ob=ob||{};
        var a=ob
        ob.id = D(ob.id)? ob.id : ob.x || ob._ || ob['#']
        ob.tagName=ob.tagName || ob.tn || ob.t
        if(a.t){a.tagName = a.t}

        ob._i = ob.initialize  || ob.i
        ob.initialize = function(op){
            // ok so i think i see what is happening here...
            // first of all, i am clearly overwriting 'initialize' here
            // so why bother setting it prior?
            this.q= this.$el
            this.a2=function(a){
                var res=   this.q.a2(a)
                //return this
                return res
            } //this.g=function(a){  if(a){return this.model.get(a)}}
            this.A=function(ob){var g=G(arguments),  q=this.q
                if(S(ob)){ob = this.g(ob)}
                if(ob){q.A(ob)}
                if(U(ob) || g.p){q.A()}
                return q}
            if(F(ob._i)){   _.b(ob._i, this)(op) }
        }
        if(a.I){a.initialize = a.I}

        ob.className=ob.className|| ob.k
        if(a.k){a.className = a.k}

        ob.defaults=ob.defaults || ob.df || ob.d

        ob.events= ob.events || ob.ev || ob.e
        ob.events = Bb.eParse(ob.events)
        ob.events = Bb.parseEvents(ob.events)
        if(a.E){a.events = a.E}

        if(a.T){a.template = a.T}
        ob.render=ob.render || ob.rr || ob.r
        ob.render = ob.render || ob.rn || ob.rr || ob
        if(a.R){a.render = a.R}

        ob.collection= ob.collection || ob.cl || ob.c
        ob.model = ob.model || ob.md || ob.m
        ob.el = ob.el || ob.q

        a.g=function(m){return this.model.get(m)}
        a.H=function(a){this.$el.html(a);return this}
        a.J=function(){return this.model.toJSON()}

        //a.cl= a.collection
        //a.q= qq(a.el)


        return a
    }
    function old(){
        Bb.V.x=function(ob){var g=G(arguments),o = g.F_? {fn: g.f, ob: g.s} :
        {ob: g.f, fn: g.s}; o=o||{}; ob=ob||{}; if(o.fn){ob.i= o.fn}
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
                    var g=G(arguments), q=this.q
                    if(S(ob)){ob = this.g(ob)}
                    if(ob){q.A(ob)}
                    if(U(ob) || g.p){q.A()}
                    return q
                }

                if(F(ob._i)){_.b(ob._i,this) (op)}

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
            ob.events = Bb.parseEvents(ob.events)
            vw= Bb.V.extend(ob)
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

    }
}
$$V=function(){
    var g=G(arguments), Vw =  _$$V(g.f)
    return function(){var g=G(arguments), vw,ob
        ob =  g.O_? g.f:  {}

        ob.collection= ob.collection || ob.cl || ob.c
        ob.model = ob.model || ob.md || ob.m
        vw = new Vw(ob)
        //if(g.s){ vw.a2( g.s ) }
        vw.cl= vw.collection
        vw.e=function(a,b){return vw.cl.each(a,b)}
        vw.q= vw.$el
        //vw.r=function(){return vw.render()}
        return vw
    }
}
$V=function(){
    var Vw,vw
    Vw=$$V.apply(null, arguments)
    vw=Vw()
    return vw
}
$.fn.V=function(ob){
    ob=ob||{};
    ob.q=this
    return $V(ob)
}
$.uV=$.ulV=function(ob){
    ob=ob||{};ob.t = 'ul'; return $V(ob)
} // make a bbV with t:ul

//Models:
Bb.M = Bb.Model; Bb.M.x = Bb.M.extend;md = Bb.Model.prototype; Bb.sEv(md)
md.g = md.get; md.s = function (a, b, c) {
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
md.l = function () {
    $l(this.toJSON()); return this}
md.l1 = md.lT1= md.lTo1= function (a, b, c, d) {
    return this.listenToOnce(a, b, c, d)
}
md.l2 =md.lT= md.lTo=function (a, b, c, d) {
    return this.listenTo(a, b, c, d)
}
_$$M=function(ob){ob=ob||{} // o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s} //o=o||{}
    ob.initialize = ob.initialize || ob.i; function init(){

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
$$M = function (ob,a,b,c) {
    var g = G(arguments), Md


    Md = Bb.M.x(ob,a,b,c)

    return function (ob, q) {var md
        ob = ob || {}
        ob.collection = ob.collection || ob.cl || ob.c
        ob.model = ob.model || ob.md || ob.m

        md=new Md(ob, a, b, c)
        if (q) {md.a2(q)}
        return md
    }
}
$M=function(op,a,b,c){
    return $$M(op,a,b,c)()
}

//Collections:
Bb.C = Bb.Collection; Bb.C.x = Bb.C.extend; cl = Bb.Collection.prototype; Bb.sEv(cl)
cl.A = cl.add
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
    return function(ob,b,c,d){var cl
        ob.collection= ob.collection || ob.cl || ob.c
        ob.model = ob.model || ob.md || ob.m
        cl= new Cl(ob,b,c,d) //if(q){cl.a2(q)}
        return sCl(cl)
    }
    function sCl(cl){
        cl.q= cl.$el
        cl.a2=function(a){return cl.q.a2(a)}
        cl.g=function(a){if(a){return cl.model.get(a)}}
        cl.A=function(ob){
            var g=G(arguments),
                q=cl.q
            if(S(ob)){ob = cl.g(ob)}
            if(ob){q.A(ob)}
            if(U(ob) || g.p){q.A()}
            return q}
        _.b(ob._i,cl) (op)
        return cl
    }}
$C=function(ob,a,b,c){return $$C(ob,a,b,c)()}

//Router:
Bb.R=  Bb.Router;
Bb.R.x=  Bb.R.extend
ro._n = function (){
    this.navigate.apply(this, arguments);
    return this
}
ro.n = function (url){
    return this._n(url, G(arguments).n ? null : {trigger: true})
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
    if(ob.$){ob.initialize = function(){
        alert('ob.$')
        Bb.h.start({pushState:true})
        if( F(ob.$ )){
            ob.$()
        }
    }

    } //alert



    ob.routes = ob.routes   ||  ob.rt || ob.r ||  {} // if(ob.R){ob.routes=ob.R}
    //ob.routes[''] = ob.routes[''] || 'index'
    // if(ob.x){ob.index = ob.x}; if(ob.h){ob.home = ob.h}

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
    if(!Bb.H.started && !g.d){
        Bb.history.start({
            pushState: true})}
    return r
}