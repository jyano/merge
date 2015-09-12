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

//Events:
Bb.E= Bb.Ev=Bb.Events; Bb.E.x=Bb.E.extend



//Models:
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
$$M = function (ob,a,b,c) {
    ob=ob||{}
    var g = G(arguments), Md
    Md = _$$M(ob,a,b,c)
    return function (ob, q) {var md
        ob = ob || {}
        ob.collection = ob.collection || ob.cl || ob.c
        ob.model = ob.model || ob.md || ob.m
        md= new Md(ob)
        if (q) {md.a2(q)}
        return md
    }
}
$M=function(op,a,b,c){
    return $$M(op,a,b,c)()
}
