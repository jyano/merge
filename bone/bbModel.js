md=Bb.Model.prototype
md.at = md.attributes
md.at= function(){return this.attributes}
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
function late(){
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
            Bb.sEv(m)
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



