md=Bb.Model.prototype
md.at = md.attributes
md.at= function(){return this.attributes}
md.b = md.bind
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
mdJson()
function mdJson() {
    md.J = md.tJ = md.toJSON
    md.jS = md.tS = function () {
        return _.jS(this.J())
    }
    md.$l = md.lJ = function () {
        return $l(this.jS())
    }
}
Bb.M.x= function(a,b,c){return Bb.M.extend(a||{},b,c)}
Bb.M.x = Bb.M.e = function (ob) {
    var g = G(arguments), o, Md; ob = ob || {}
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
    md = Bb.M.extend(ob)
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
Bb.m=function(ob){ob=O(ob)?ob:{}
    var Md,md
    Md = Bb.M.x(ob)
    return function(ob){
        md = new Md(ob)
        return md
    }
}
$m=function(){var g=G(arguments)
    return $M.apply(null, g)()
}
$M=function(ob){var g=G(arguments), Md, klas

    ob=ob||{}

    ob.defaults = ob.defaults || ob.df || ob.d

    if(  !F(ob.initialize) && F(ob.i) ) {  ob.initialize = ob.i  }

    ob.id = D(ob.id)? ob.id : ob.x
    ob.idAttribute = ob.idAttribute || ob._id
    ob.events= ob.events || ob.ev || ob.e
    ob.model= ob.model || ob.md || ob.m
    ob.validate=ob.validate || ob.v
    Md=  Bb.M.extend(ob)
    klas=  function  (a,b,c,d){
        var g=G(arguments)
        return new Md(a,b,c,d)
    }

    klas.m= klas.M = Md

    return klas



}

appss()
function appss(){
    Bb.Per=function(){
        return $M({
            d: {n:'j', a:20, o:'p'}
        })
    }
    MODCHANGE = function () {
        $.x('x', 'modchange')


        Bk = $M({

            d: {ID: "ooooo", n: ""},

            i: function () {
                var bk = this;
                $l('init..')


                bk.$(function () {
                    $l('change')
                    g = G(arguments)
                    o = g[1]
                    m = g[0]

                    if (bk.hC('ID')) {
                        $l('ID changed')
                    }
                    // if(bk.hC('n')){$l('n changed') }
                    bk.hC('n', function () {
                        $l('n changed')
                    })
                })
            },

            show: function () {
                $l('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
            }

        })

        bk = Bk({ID: 1, n: "a"})
        bk.s({r: 'a'}, {a: 1, b: 2, c: 3})
        $.in(function () {
            bk.s('n', 'z', {a: 1, b: 2, c: 3})
            $.in(function () {
                bk.s({n: 'rfds'}, {a: 1, b: 2, c: 3})
            }, '*')

        }, '*')
    }


    BACKSET = function () {
        $.x('g', 'backset')


        d = $.d('z', 500, 300).id('sb')


        Sb = $M({

            ask: function () {

                this.s({c: prompt('col?')})

            }
        })

        sb = Sb()


        // sb.on('change', function(){g=G(arguments)})
        sb.on('change:c', function (modThatChangedC, cChangedTo, ops) {
            $l('changed to ' + cChangedTo)

            o = ops

            modThatChangedC.s('dat', 'something')

            $('#sb').C(cChangedTo)
            $.h1(modThatChangedC.g('dat'))
        })


        sb.s({
            c: 'b'
        })


        //   sb.ask()
        //   Per=$M({i: function(){  $l(  this.g('n')  + ' says hello!'   ) }})
        //   p=Per( {n:"mac", a:67})

    }


    OPS = function () {
        $.x('o', 'ops')


        o = _.x({}, Bb.E)


        o.on('yo', function () {
            g = G(arguments)
        })


        o.trigger('yo', 'a', 'b', 'c')

    }

    BBSAMP1 = function () {
        $.x('b', 'bbsamp', '+')

        d = $.d()

        Rec = $M()

        RecV = $V({
            tagName: 'div', className: 'rec',
            events: {'click': 'move'},
            move: function () {
                this.$el.css('left', this.$el.position().left + 10)
            },
            rr: function () {
                return this.sDims().sPos().sCol()
            },
            sDims: function () {
                this.$el.WH(this.model.get('w'), this.model.get('h'))
                return this
            },
            sPos: function () {
                this.$el.ab()
                    .LR(
                    this.model.get('pos').x, this.model.get('pos').y)
                return this
            },
            sCol: function () {
                this.$el.C(this.model.get('C'))
                return this
            }
        })

        _.e([
            Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
            Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
            Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
        ], function (md) {

            var r = RecV({model: md})
            r.rr().$el.a2(d)
        })
    }


    OSYNC = function () {
        $.x('x', 'osync')

        Bb.sync = function (met, md) {
            $l(met + ': ' + _.jS(md))
            md.s('id', 1)
        }
        bk = new Bb.M({
            tt: "The Rough Riders",
            au: "Theodore Roosevelt"
        })
        bk.S()
        bk.S({au: "Teddy"})


        // save accepts success and error cbs in the options hash,
        // which will be passed the args (md, resp, ops).
        // If a server-side validation fails, return a non-200 HTTP response code,
        // along with an error response in text or JSON.


        bk.save(
            "au", "F.D.R.", {
                error: function () {
                    $l('error')
                },
                success: function () {
                    $l('success')
                }
            })

    }
}
late()
function late() {

    toAlrt()
    old = function () {
//md.o = function () {var g = G(arguments);this.on.apply(this, g)}


        /*
         // escape   has     unset    clear – parse  pa P – clone  cl– toJSON
         – url     u – urlRoot  uR– sync   sy fetch  F  – save  S – destroy
         – validate    vl – validationError  vE – isValid   iV
         – attributes– changed  – isNew iN – hasChanged  hC  – previous p
         – previousAttributes  pA – changedAttributes cA
         */

//Bb._M=function(ob){return  Bb.M.extend(ob)}

//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})

    }
    function toAlrt() {
        M$ = function (ob) {
            alert('M$')
            ob = O(ob) ? ob : {}
            var Md, md
            Md = Bb._M(ob)
            md = new Md(ob)
            return md

        }


        toMdOb = function (a) {
            alert('toMdOb')
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
        sMd = function (m) {
            alert('sMd')
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
            bbE(m)
            return m
        }
        bbM = function (a) {
            alert('bbM')
            a = ob(a)

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

            a.idAttribute = "_id"

            var m = Backbone.Model.extend(a)

            sMd(m)

            return function (a) {
                var o = new m(a)

                sMd(o)

                return o
            }
        }
        md.V=function(Vw, ob){alet('md.V')
            ob = ob || {}
            ob.m= this
            return Vw(ob)
        }

    }
}
  
md.oA = function (fn){
 fn = fn || func
    this.on('add', fn)
    return this
    function func(m) {
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
}
md.AD = md.oA = function (fn) {
    // "add" (model, collection, options)
    // — when a model is added to a collection.

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
}
function change() {

    md.oC = md.oCh = function (n, f) {

        // "change" (model, options)
        // — when a model's attributes have changed.

        // "change:[attribute]" (model, value, options)
        // — when a specific attribute has been updated.

        if (U(f)) {
            return this.on('change', n)
        }

        return this.on('change:' + n, f)
    }
    md.oC = function (n, f) {
        // "change" (model, options)
        // — when a model's attributes have changed.
        // "change:[attribute]" (model, value, options) — when a specific attribute has been updated.
        if (U(f)) {
            return this.o('change', n)
        }
        ;
        return this.o('change:' + n, f)
    }
    md.CH = md.$ = md.ch = md.oC = md.oCh = function (n, fn) {
        var g = G(arguments), o
        o = g.F ? {fn: g.f} : {at: g.f, fn: g.s}
        // "change" (model, options)    "change:[attribute]" (model, value, options)
        return g.at ?
            this.on('change:' + o.at, o.fn) :
            this.on('change', o.fn)
    }
}
function remove(){md.oH = md.o_ = md.oRm = function (a, b, c) {// "remove" (model, collection, options) — when a model is rmd from a collection.
    return this.o('remove', a, b, c)
}
    md.ox = md.oH = md.o_ = md.oRm = function (a, b, c) {
        // "remove" (model, collection, options)
        // — when a model is rmd from a collection.
        return this.on('remove', a, b, c)
    }
    md.RM = md.oRm = function (a, b, c) {
        // "remove" (model, collection, options)
        // — when a model is rmd from a collection.
        return this.on('remove', a, b, c)
    }
}
function destroy(){
    md.oX = md.oD = function (a, b, c) {
        // "destroy" (model, collection, options)
        // — when a model is destroyed.
        return this.o('destroy', a, b, c)
    }
    md.oX = md.oD = function (a, b, c) {// "destroy" (model, collection, options) — when a model is destroyed.
        return this.o('destroy', a, b, c)
    }
    md.DS = md.oX = md.oD = function (fn) {
        // "destroy" (model, collection, options)
        // — when a model is destroyed.
        return this.on('destroy', fn)
    }
}
function all() {

    md.o$ = md.oAl = function (f) {//passes event name as 1st ag
        return this.o('all', f)
    }
    md.o$ = md.oAl = function (fn) {//passes event name as 1st ag
        return this.on('all', fn)
    }
    md.AL = md.o$ = md.oAl = function (fn) {
        return this.on('all', fn)
    } //passes event name as 1st ag
//md.o= function(){var g=G(arguments); this.on.apply(this, g) }
}
function sync(){
    md.oS = function (a, b, c) {
        // "sync" (model_or_collection, resp, options) — when a model or collection has been successfully synced with the server.
        return this.o('sync', a, b, c)
    }
    md.oS = md.oSy = function (a, b, c) {
        // "sync" (model_or_collection, resp, options)
        // — when a model or collection has been successfully synced with the server.
        return this.o('sync', a, b, c)
    }
    md.SY = md.oS = md.oSy = function (a, b, c) {
        // "sync" (model_or_collection, resp, options)
        // — when a model or collection has been successfully synced with the server.
        return this.o('sync', a, b, c)
    }}
function routee(){
    md.oRt = function (n, f) {
        var o = this
        //"route:[name]" (params)— Fired by the router when a specific route is matched.  //"route" (route, params)   — Fired by the router when any route has been matched.
//"route" (router, route, params)  — Fired by history when any route has been matched.

        if (U(f)) {
            return o.o('route', n)
        }
        return o.o('route:' + n, f)
    }
    md.oRt = function (n, f) {
        var o = this
        //"route:[name]" (params)
        // — Fired by the router when a specific route is matched.
        // "route" (route, params)
        // — Fired by the router when any route has been matched.
        //"route" (router, route, params)
        // — Fired by history when any route has been matched.
        if (U(f)) {
            return o.o('route', n)
        }
        return o.o('route:' + n, f)
    }
}
function invalid() {
    md.oI = md.oV = md.oIV = function (a, b, c) {
        //"invalid" (model, error, options) — when a model's validation fails on the client.

        return this.o('invalid', a, b, c)
    }
    md.VL = md.oIv = function (a, b, c) {
        //"invalid" (model, error, options)
        // — when a model's validation fails on the client.
        return this.on('invalid', a, b, c)
    }
    md.oz = md.oI = md.oV = md.ov = md.oIV = function (a, b, c) {
        //"invalid" (model, error, options)
        // — when a model's validation fails on the client.
        return this.o('invalid', a, b, c)
    }

}
function sort(){
md.oSo = function (a, b, c) {
    // "sort" (collection, options) — when the collection has been re-sorted.
    return this.o('sort', a, b, c)
}
md.oSo = function (a, b, c) {
    // "sort" (collection, options) — when the collection has been re-sorted.
    return this.o('sort', a, b, c)
}
md.SO = md.oSo = function (a, b, c) {
    // "sort" (collection, options)
    // — when the collection has been re-sorted.
    return this.o('sort', a, b, c)
}
    }
function reset(){
    md.oR = function (a, b, c) {// "reset" (collection, options) — when the collection's entire contents have been replaced.
        return this.o('reset', a, b, c)
    }
    md.oR = md.oRs = function (a, b, c) {
        // "reset" (collection, options) —
        // when the collection's entire contents have been replaced.
        return this.o('reset', a, b, c)
    }
    md.RS = md.oR = md.oRs = function (fn) {
        // "reset" (collection, options) —
        // when the collection's entire contents have been replaced.
        return this.on('reset', fn)
    }}
function errr(){
    md.oZ = md.oE = md.oEr = function (a, b, c) {
        //"error" (model_or_collection, resp, options)
        // — when model's or collection's request to remote server has failed.
        return this.o('error', a, b, c)
    }
    md.oZ = md.oE = function (a, b, c) {
        //"error" (model_or_collection, resp, options) — when model's or collection's request to remote server has failed.
        return this.o('error', a, b, c)
    }
    md.ER = md.oZ = md.oE = md.oEr = function (a, b, c) {
        //"error" (model_or_collection, resp, options)
        // — when model's or collection's request to remote server has failed.
        return this.o('error', a, b, c)
    }
}
function request() {
    md.oQ = md.o.Rq = function (a, b, c) {
        // "request" (model_or_collection, xhr, options)
        // — when a model or collection has started a request to the server.
        return this.o('request', a, b, c)
    }
    md.oQ = function (a, b, c) {
        // "request" (model_or_collection, xhr, options) — when a model or collection has started a request to the server.
        return this.o('request', a, b, c)
    }
    md.RQ = md.oQ = md.Rq = function (mdCl, fn) {
        // on start of md|cl SERVER request
        //fn passed(md_or_cl,  xhr, op)
        return this.on('request', fn)
    }
}
