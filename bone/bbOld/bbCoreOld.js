function late() {
    toDep()
    function toDep() {
        bb = Bb
        $P = function () {
            md = Bb.Model.prototype
            vw = Bb.View.prototype
            rt = Bb.Router.prototype
            cl = Bb.Collection.prototype
        }
        $P()
    }
//alert:
    _.ex = $ext = ext = function ext(o) {
        alert('_.ex')
        o.e = o.extend
        return o
        // https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
    }
}


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
