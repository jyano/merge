$Ms=function(ms){
    return $.d().fS(80).C($r()).col($r()).A(ms)
}
//


BBBEV=function(){$.x().i('chicks')
    ev = Bb.Ev()
    ev.b("fun:had", // bind? on?
        function(){alert("wee!")})
    //trigger
    ev.tr("fun:had")  //it'll alert "wee!"
}
DIVADD = function () {
    z()

    d = $.dI('d1', 'r', 500, 500)
    _.t(3, function () {
        $$V({
            initialize: function () {
                this.r()
            },
            r: function () {

                d.A(
                    $.ul(['hello'])
                )
            }
        })()
    })

    function alt() {

        BBVIEW2 = function () {

            $.dI('d1', 'r', 500, 500)
            LstV = Bb.V.x({
                el: '#d1',
                r: function () {
                    this.A(
                        $.ul([
                            'hello']))
                },
                i: function () {
                    this.r()
                }
            })

            v = LstV.o() //not function
        }
        BBVIEW0 = function () {
            $.x('b', 'bbview0')


            $.dI('d1', 'r', 500, 500).V({
                r: function () {
                    this.A($.ul(['hello']))
                },
                i: function () {
                    this.r()
                }
            })()

        }
    }
}//= BBVIEW
ARRPOP = function () {
    z()
    peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]

    vw = $$V({
        t: 'ul',
        i: function () {
            this.$el.C('r')
        },
        r: function () {
            var el = this.$el.E()

            _.e(this.collection, //vw.cl == vw.collection >> true

                function (p) {
                    $('#peep')
                    el.A($.li().A(p.n + '(' + p.a + ')'))
                })

            return this
        }
    })({
        c: peep
    })


    $.A(
        vw.r().el
    )

    _.in(1, function () {
        peep.pop()
        vw.r()
    })


    function alpha() {
        BBVP0 = function () {
            $.x('x', 'bb view people 0')
            peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
            vw = $.ulV({
                i: function () {
                    this.q.C($r())

                },
                r: function () {
                    var el = this.q.E()
                    this.cl(function (p) {
                        el.A($.li().A(p.n + '(' + p.a + ')'))
                    })
                    return this
                }
            })({cl: peep})
            $.A(vw.r().q)
            _.in(function () {
                peep.pop();
                vw.r()
            }, '*')
        }
    }

    function old() {

        SIMP1 = function () {
            p = $M()({n: 'j'})
            $.h3('p: ' + p.g('n'))
        }
        SIMP = function () {
            $.h1(
                'f: ' + $M()({n: 'j'}).g('n'),
                $.br(), 'l: ' + $m({n: 'y'}).n
            )

        }
    }
}//= BBVP
MDGET = function () {
    $.x('r').h1('tut')
    p = $$M()({n: 'j'})
    $.h3('p: ' + p.g('n'))
}
CLONADD = function () {
    $.x().h1('backcl');
    $.i('chicks').A()
    cl = $$C({})().oA(function (s) {
        $l("new!!!!!! " + s.g('n'))
    }).A([{n: 'g1'}, {n: 'g2'}])
}
CLLEN = function () {
    z()
    Td = $$M({df: {tt: '', completed: false}});
    cl = $$C({
        md: $$M({d: {tt: '', completed: false}})
    })([Td({tt: 'Read', id: 2})]);
    $l('len 1?: ' + cl.length)
    TdsCl = $$C({md: Td})
    tds = TdsCl([
        a = Td({tt: 'Jam'}),
        b = Td({tt: 'Chin'})
    ])
    $l('len 2?: ' + tds.length)
    tds.A(c = Td({tt: 'Disn'}))
    $l('len 3?: ' + tds.length)
    tds.rm([a, b]);
    $l('len 1?: ' + tds.length)
    tds.rm(c);
    $l('len 0?: ' + tds.length)
}
RESET = function () {
    z()


    //   Resetting/Refreshing Cls
    // Rather than adding or removing mds individually,
    // you might want to update entire cl at once.
    // Cl.set() takes array of mds and performs necessary
    // add, rm, and change operations required to update cl.

    TdsCl = $C({})

    TdsCl.A([
        {id: 1, tt: 'go to Jamaica.', completed: false},
        {id: 2, tt: 'go to China.', completed: false},
        {id: 3, tt: 'go to Disneyland.', completed: true}
    ])

    // we can listen for add/change/rm evs
    TdsCl.oA(function (m) {
        $l("Added " + m.g('tt'))
    })
    TdsCl.on("remove", function (m) {
        $l("Removed " + m.g('tt'))
    })
    TdsCl.on("change:completed", function (m) {
        $l("Completed " + m.g('tt'))
    })

    TdsCl.s([
        {id: 1, tt: 'go to Jamaica.', completed: true},
        {id: 2, tt: 'go to China.', completed: false},
        {id: 4, tt: 'go to Disney World.', completed: false}
    ])

    // Above logs:
    // Completed go to Jamaica.
    // Removed go to Disneyland.
    // Added go to Disney World.


    function more() {
        //  replace  entire cl  content
        TdsCl = $cl()
        // we can listen for reset evs
        TdsCl.on("reset", function () {
            $l("Cl reset.")
        })
        TdsCl.A([{
            tt: 'go to Jamaica.', completed: false
        }, {
            tt: 'go to China.',
            completed: false
        },
            {tt: 'go to Disneyland.', completed: true}]);
        $l('Cl size: ' + TdsCl.length); // Cl size: 3
        TdsCl.reset([{tt: 'go to Cuba.', completed: false}]);
        // Above logs 'Cl reset.'
        $l('Cl size: ' + TdsCl.length); // Cl size: 1
        // use reset with no arguments to clear outcl completely.
        //  This is handy when dynamically loading new page of results
        // where you want to blank out current page of results.
        myCl.reset()

        // -using Cl.reset() doesn’t fire  add | rm evs. reset event   fired instead
        // The reason you might want to use this is to perform super-optimized
        //rendering in extreme cases where individual evs are too expensive.


        td = $M()()

        tds = $Cl([td])()

            .on('reset', function (tds, ops) {  //    prev mds list avail in ops.prevMds
                $l(ops.prevMds);
                $l([td]);
                $l(ops.prevMds[0] === td); // true

            })

        tds.reset([])


        // set()  SMART updates  cl with a list of md: new mds added, present mds merged, models not in list rmd

        Beat = $M({d: {job: 'mus'}})
        john = Beat({fN: 'John', lN: 'Lennon'});
        paul = Beat({fN: 'Paul', lN: 'McCartney'});
        george = Beat({fN: 'George', lN: 'Harrison'});
        ringo = Beat({fN: 'Ringo', lN: 'Starr'});

        theBeats = $Cl([john, paul, george, ringo]);// Create a cl using our mds

        pete = Beat({fN: 'Pete', lN: 'Best'});// Createseparate md for Pete Best

        theBeats.s([john, paul, george, pete]); // Update cl


        // Fires`rm` event for 'Ringo', and `add` event for 'Pete'.
        // Updates any of John, Paul and Georges's atts that may have
        // changed over years.
    }

}
BBRECS = BBSAMP = function () {
    $.x('b', 'bbsampp', '+')

    d = $.d()
    Rec = $$M()
    RecV = $$V({
        k: 'rec', e: {'click': 'move'},
        move: function () {
            this.q.css('left',
                this.q.position().left + 10)
        },
        rr: function () {
            return this.sDims().sPos().sCol()
        },
        sDims: function () {
            this.q.WH(this.model.g('w'),
                this.model.g('h'))
            return this
        },
        sPos: function () {
            this.q.ab().LR(
                this.model.g('pos').x,
                this.model.g('pos').y)
            return this
        },
        sCol: function () {
            this.q.C(this.model.g('C'))
            return this
        }
    })
    _.e([
        Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
        Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
        Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
    ], function (md) {
        RecV({model: md})
            .rr().$el.a2(d)
    })
}
NNNNN = PER0 = function () {
    $.x('n')
    Bb.Per = function () {
        return $$M({d: {n: 'j', a: 20, o: 'p'}})
    }
    Per = Bb.Per()
    PerV = $$V({
        t: 'li', //  _:'some-per',
        k: 'per',
        r: function () {
            this.$el.A('n')
            this.$el.A()
            //  this.A(this.g('n')).A() //
            // this.A(this.model.get('n').A()
        },
        i: function () {
            // $l('i: ' + _.jS(this.model.j()) );
            this.r()
        }
    })
    p = Per()
    pV = PerV({
        m: p
    })
    _.ev(.5, function () {
        pV.r()
    })
}
CHANGECOL = function () {
    z()

    d = $.dA(400, 400, 300, 200)


    sb = $$M({
        promptColor: function () {
            this.s({
                co: prompt('color:')
            })
        }
    })()

    sb.on('change:co', function (mod, col) {
        $l('new color!: ' + col);
        d.C(col)
    })

    sb.s({co: 'g'})

    _.in(2, function () {
        sb.promptColor()
    })


    function old() {
        BACKSETSBM = function () {
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
            sb.s({c: 'b'})
            //   sb.ask()
            //   Per=$M({i: function(){  $l(  this.g('n')  + ' says hello!'   ) }})
            //   p=Per( {n:"mac", a:67})
        }
        BACKSETSB = function () {
            $.x()
            Sb = Sidebar = $$M({

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
            Sid = Bb.M({
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
            Per = Bb.M.e({
                i: function () {
                    alert("Welcome")
                }
            })

            p = Per({})
            p.s({n: "mac", a: 67})
            $.dA(300).id('sb')

            Sidebar = Bb.M.e({
                fn: function () {
                    return this.s({
                        c: prompt("c?")
                    })
                }
            })
            Sidebar()
                .oC('c', function (m, c) {
                    $('#sb').C(c)
                }).s({c: 'w'}).fn()

        }

    }
}
EXTEV = function () {$.x('o', 'ops')

    o = _.x({}, Bb.E)
    o.on('yo', function () {
      var g = G(arguments)
        $.sp(g).fS(50)
    })
    o.trigger('yo', 'a', 'b', 'c')
}
MDVW=function(){$.x('n')
    md.V=function(Vw, ob){
        ob = ob || {}
        ob.m= this
        return Vw(ob)
    }
    m = $M({d:{n:'j',a:20,o:'p'}})
    m.V($$V({t:'li', _:'some-per', k:'per',
            r: function(){this.$el.A('n').A()},
            i: function(){this.r()}}))
    _.in(2, function(){
        $.C('R')
        $l('- - --- - - - - ')
        m.l()
    })
    function old(){

        PERVY=function(){$.x('n')

            $$V({
                t:'li', _:'some-per', k:'per',
                r: function(){  this.A('n').A() },
                i: function(){
                    $l(this.model); this.r() }
            })({
                m: $M({d: {n:'j',a:20,o:'p'}})
            }) //-> p.V(PerV)
        }

    }
}
BACKVALL=function(){
z();$l('backvall')

    Md=$$M({

        defaults: {lame:true},

        i: function(){var t=this
            t.on('error', function(m,e){
                alert(3); $l(e)

            })
            t.on('change:n', function(m,e){
                alert(3); $l(e)
            })


        },

        validate: function(at){
            $l('in validate')
            _at=at
            if(!at){return false}
            if(at.n == 'rigo'){
                return "name can't be rigo!"}
        }
    })


    md= Md({n:"migo", a:7})

    _.in(3, function(){

        $.C('r')

        md.oIv(function(m, er){
            $Ms('er: '+ er)
            $Ms('...')
            $Ms('fssdfsadfd')
            $Ms('fssdfsadfd')
            $Ms('fssdfsadfd')
        })

        md.s({n: 'rigo'},{ validate: true })
    })


}
INVALID = function () {
    $.x('x', 'valid')

    $l('---- VALIDD ------')
    Md = $$M({
        validate: function (at) {
            if (!at.n) {
                return '!name'
            }
        }
    })
    md = Md({n: 'J'})
    md.oIv(function () {
        $Ms('INVALID !1 1!!!')
    })
    md.s({n: 'S'}, {validate: true})
    $l('n: ' + md.g('n'))
    md.unset('n')
    $l('n: ' + md.g('n'))
    md.s({n: 'S'}, {validate: true})
    md.unset('n', {validate: true})
    $l('n: ' + md.g('n'))

    function more(){
        p2 = Per({n: "qigo", a: 47})
        p3 = Per({n: "rigo", a: 7})

        $.bt('p2 validty', function () {
            $l('isValid: ' + p2.isValid())
        }) //  valid
        $.bt('p3 validty', function () {
            $l('isValid: ' + p3.isValid())
        }) //not valid

    }

}
VALID = TODOO= function () {$.x('x', 'valid')
    Todoo = $$M({

        i: function () {this.oIv(function (md, z) {$l('err: ' + z)})},
        defaults: {completed: false},
        validate: function (at) {
            if (U(at.tt)){return "!tt" }
        }
    })
    todoo1 =   Todoo()
    todoo1.s('completed', true, {validate: true})
    $l('completed: ' + todoo1.g('completed') )
    emptyTodoo =  Todoo(null, {validate: true})
    $l('valErr: '+ emptyTodoo.validationError )
}
VALIDCOL = function () {$.x('b', 'people')

    Per = $M({
        i: function () {
            this.oIv(function (m, z) {
                $l(z)
            })
        },
        defaults: {n: 'doe', a: 30, j: 'wrk'},
        validate: function (at) {
            if (at.a < 0) {
                return 'a<0!'
            }
        },
        work: function () {
            return this.g('n') + ' is working'
        }
    })

    p = Per({n: 'y', a: 34})
    p.oIv(function (m, z) {
        $l('err: ' + z)
    })
    PerV = $V({
        t: 'li',
        k: 'person', x: 'some-person',

        i: function () {
            this.r()
        },

        //tp: _.tp("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
        r: function () {
            var v = this
            //this works, but doesnt use a template
            v.h(v.g('n') + ' ' + v.g('a') + ' ' + v.g('j'))
            v.h(v.tJ())
        }
    })
    pV = PerV({m: p})
    peepC = $Cl({m: Per})

    pC = peepC([{n: 'rigo', a: 29},
        {n: 'j', a: 2}, {n: 's', j: 'gx'}
    ])

    pC.add(p)
    pC.at(1)

    //pC.n('joejoe')

    pC.at(1)
    pC.s('name', 'joejoe')
    PeepV = $V({
        tn: 'ul',
        i: function () {
            $l('hi');
            $l(this.cl)
        },

        r: function () {
            var vw = this
            vw.eCl(function (p) {
                var v, pV
                $l(p.g('n'))
                pV = PerV({m: p})
                $l(pV.el)
                vw.q.A(pV.el)
            }, this)
        }
    })
    pcv = PeepV({cl: pC})
    pcv.r()

    $.A(pcv.el)

    /*

     md.validate() checking attr vals  prior to setting them.

     By default occurs when md is persisted using save() or when set() is called if {vld:true}

     Should error be returned: An invalid event will be triggered, setting validationError property on md with val which is returned by this met.
     .save() will not continue and atts of md will not be modified on server.

     Note: atts object passed to validate fn reps what atts would be after completing current set() or save().
     This object is distinct from current atts of md  and from  pams passed to operation.

     Since it is created by shallow copy, it is not possible to change any Number, String, or Boolean attr of input within fn, but it is possible to change ats in nested objects.


     validation on init is possible but of limited use, as object being constructed is internally marked invalid but nevertheless passed back to caller


     */
}
