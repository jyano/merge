


 //alt:
    R$ = function (o) {
        var r
        o = roOb(ob)
        r = Bb.Router.extend(o)
        r.o = r.on
        return function () {
            var a = new r
            a.o = a.on
            a.oR = function (r, f) {
                this.on('route:' + r, f)
                return this
            }
            a.n = function (frag, op) {
                if (O(op)) {
                    if (D(op.t)) {
                        op.trigger = op.t ? true : false
                    }
                    if (D(op.r)) {
                        op.replace = op.r ? true : false
                    }
                }
                a.navigate(frag, op)
                return a
            }
            return a
        }
    } //=bbR
    R$.tr = R$.trigger
    R$.ex = R$.execute
    ROUTE = function () {
        z()

        r = R$({

            R: {"*x": "d"}

        })()

        r.oR('d', function (a) {
            alert(a)
        })//#hello -> 'hello'
        r.oR('e', function (a) {
            alert(a)
        })//#e -> 'e' (could do '/#/e')

        bbH()
    }
    ROUTEPAMS = function () {
        z()

        rtr = R$({

            R: {

                '': 'home',
                'view': 'v',
                'new': 'nn',
                ':id': 'en',
                'posts/:id': 'gPo',

                '*acts': 'dfR',

                'download/*path': 'dlF',

                ':route/:action': 'ldV'

            },

            home: function () {
                al('home')
            },
            v: function () {
                al('image')
            },
            nn: function () {
            },
            en: function (id) {
                al(id)
            }
        })


        r = rtr()

        r.oR('dfR', al)
        r.oR('gPo', function (id) {
            al('gPo# ' + id)
        })
        r.oR('gPo', function () {
            alert(3)
        }) //both routes fire!

        r.oR('dlF', al)
        r.oR('ldV', function (rt, ac) {
            al(rt + '_' + ac)
        })

        bbH()  // or Bb.h.s({pushState: true})

    }
    ROUTENAV = function () {
        z()

        Rt = R$({

            routes: {
                'po/:id': 'gp',
                '*a': 'dr'
            },

            dr: function (a) {
                al(a)
            },

            gp: function (id) {
                al('Get post ' + id)
            }

        })


        r = Rt()
        bbH()
        bt('hi', function () {
            r.n('po/2', {t: 1})
        }).a()
    }
    function roOb(ob){ob=ob||{}

        if(ob.i){ob.initialize = ob.i}

        if(ob.$){ob.initialize = function(){
            alert('ob.$')
            Bb.h.start({pushState:true})
            if( F(ob.$ )){
                ob.$()
            }
        }}

        ob.routes = ob.routes   ||  ob.rt || ob.r ||  {} // if(ob.R){ob.routes=ob.R}
        //ob.routes[''] = ob.routes[''] || 'index'
        // if(ob.x){ob.index = ob.x}; if(ob.h){ob.home = ob.h}
        return ob
    }


