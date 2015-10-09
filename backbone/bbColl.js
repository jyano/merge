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
C$= function(a){var b,c
// $.ext(Bb.Collection)
    //if(U(a)){var c=new Bb.Collection; return sCl(c)}
    a=O(a)?a:{}
    if(a.m){a.model= a.m}
    c= Bb.C.x(a)
    return function(o){o=O(o)?o:{}
        //if(o.m){o.model= o.m}
        b=new c(o)
        return b}
}

 
function laten() {
    cl.atr = cl.attributes
    cl.A = cl.a = function () {
        var cl = this, g = G(arguments), ar
        this.add(g.A ? g.f : g);
        return this
    }
    cl.b = cl.bind
    cl.g = cl.get
    cl.j = cl.tJ = cl.toJSON
    cl.l = function () {
        $l(this.toJSON());
        return this
    }
    cl.rm = cl.r = cl.remove

    cl.l2 = function (a, b, c, d) {
        return this.listenTo(a, b, c, d)
    }
    cl.l1 = function (a, b, c, d) {
        return this.listenToOnce(a, b, c, d)
    }
    cl.V = function (Vw, ob) {
        ob = ob || {}
        ob.m = this
        return Vw(ob)
    }

    function alpha() {
        C$ = function (a) {
            var b, c

// $.ext(Bb.Collection)
            //if(U(a)){var c=new Backbone.Collection; return sCl(c)}
            a = O(a) ? a : {}
            if (a.m) {
                a.model = a.m
            }
            c = Backbone.Collection.extend(a)
            return function (o) {
                o = O(o) ? o : {}

                //if(o.m){o.model= o.m}
                b = new c(o)
                o.o = o.on
                E$(o)
                return b
            }
        }
    }

    old = function () {//cl.o= function(){var g=G(arguments); this.on.apply(this, g) }

        cl.tr = function (a, b) {
            this.trigger(a, b);
            return this
        }


        cl.oRm = function (a, b, c) {
            return this.on('remove', a, b, c)
        }   // "remove" (model, collection, options) — when a model is rcl from a collection.
        cl.oX = cl.oD = function (fn) {
            return this.on('destroy', fn)
        } // "destroy" (model, collection, options) — when a model is destroyed.
        cl.oR = cl.oRs = function (fn) {
            return this.on('reset', fn)
        }  // "reset" (collection, options) — when the collection's entire contents have been replaced.
        cl.oSo = function (a, b, c) {
            return this.o('sort', a, b, c)
        }    // "sort" (collection, options) — when the collection has been re-sorted.
        cl.oC = cl.oCh = function (n, fn) {
            if (U(fn)) {
                return this.on('change', n)
            }
            return this.on('change:' + n, fn)
        } // "change" (model, options)  — when a model's attributes have changed. // "change:[attribute]" (model, value, options)  — when a specific attribute has been updated.
        cl.oQ = cl.Rq = function (mdCl, fn) {
            return this.on('request', fn)
        }      // on start of md|cl SERVER request function passed(md_or_cl,  xhr, op)
        cl.oS = cl.oSy = function (a, b, c) {
            return this.o('sync', a, b, c)
        } // "sync" (model_or_collection, resp, options) — when a model or collection has been successfully synced with the server.
        cl.oZ = cl.oE = cl.oEr = function (a, b, c) {
            return this.o('error', a, b, c)
        } //"error" (model_or_collection, resp, options) — when model's or collection's request to remote server has failed.
        cl.oIv = function (a, b, c) {
            return this.on('invalid', a, b, c)
        }  //"invalid" (model, error, options) — when a model's validation fails on the client.
        cl.o$ = cl.oAl = function (fn) {
            return this.on('all', fn)
        }   //passes event name as 1st ag
        cl.oA = function (fn) {
            fn = fn || function (m) {
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

                E$(m)
                a.A(m)
            }

            return this.on('add', fn)
        } // "add" (model, collection, options) — when a model is added to a collection.
    }
}