$l('bbCore')
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
}
Bb= Backbone; Bb.U=Bb.Utility; Bb.S=Bb.Sync
Bb.R=  Bb.Router; Bb.R.x=  Bb.R.extend
Bb.E= Bb.Ev=Bb.Events; Bb.E.x=Bb.E.extend
late()
bbMdCl(); bbVw(); apz();

function bbMdCl() {
    Bb.M = Bb.Model
    bb.M.x = bb.M.extend
    $M = function () {
        var g = G(arguments), Md
        Md = Bb.M.x.apply(V, g)
        return function (a, b, c, d) {
            return new Md(a, b, c, d)
        }
    }
    md = Bb.Model.prototype
    md.g = md.get
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
    md.l = function () {
        $l(this.toJSON());
        return this
    }

    Bb.C = Bb.Collection
    bb.C.x = bb.C.extend
}
function bbVw(){
    bb.V= bb.View
    bb.V.x=bb.V.extend
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

}
function apz(){
peep = [
    {n:'a',a:11},
    {n:'b',a:46},
    {n:'c',a:13}
]
BBVIEW11 = function () {z()
    d = $.dI('d1', 'r', 500, 500)
    _.t(3, function () {
      $$V({
          i: function () {
              this.r()},
          r: function () {
              d.A($.ul(['hello']))}
      })()
    })
}
BBVP11=function(){z()

    vw= $$V({
        t:'ul',
        i:function(){this.$el.C('r')},
        r:function(){
            var el=this.$el.E()
            _.e(this.collection, function(p){$('#peep')
                el.A($.li().A(p.n + '(' + p.a + ')'))})
            return this
        }
    })({cl: peep})
    $.A(
        vw.r().el
    )
    _.in(1, function(){
        peep.pop()
        vw.r()
    })


    function alpha(){
        BBVP0=function(){$.x('x', 'bb view people 0')
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
            _.in(function(){peep.pop(); vw.r()},'*')
        }
    }
}
    }


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