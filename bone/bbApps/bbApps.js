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
roApps()
function roApps(){
    $Fn = function (name, fn) {
        window[name] = fn;
        return fn
    }
    $RoApp = function (name, fn) {

        $Fn(name, function () {
            name = _.tU(name)
            $l('name: ' + name)

            Ap = {M: {}, V: {}, C: {}}
            z();

            header(name);
            d = $.d().id('ct').fS(40)
            fn();

            startRtr(name)

            function header(name) {
                $.d().A(
                    $.sp().A('this is RoApp: ').fS(75).col('r'),
                    $.sp().A(name)
                        .fS(100).col('x').C('o'),
                    $.d('B').H(8).W('auto')
                )
            }

            function startRtr(name) {
                Bb.h.start({
                    pushState: true,
                    root: "/mvc/" + name + "/"
                })
            }
        })
    }
    $RoApp('ROAP', function () {
        $R({
            r: {
                hello: 'hi',
                goodbye: function () {
                    $.C('o')
                }
            },

            _: function () {
                $l('indexxxxx')
                $.C('p')
            }, //index
            hi: function () {
                $.C('g');
                alert('well hi there!')
            },
            d: function () {
                $.C('z')
                $.A(
                    $.sp('d e f a u l t')
                        .fS(30).C('g').col('w')
                )
            } //default
        })
        $.bt('index', function () {
            r.n('')
        })
        $.bt('hello', function () {
            r.n('hello')
        })
        $.bt('goodbye', function () {
            r.n('goodbye')
        })
        $.bt('default', function () {
            r.n('asfd/afsd')
        })
    })
    $RoApp('TWOVWS', function () {
        FirstVw = $$V({
            i: function () {
                this.r()
            },
            r: function () {
                this.$el.E().A($.d().A(
                    $.sp('My 1st View').fS(60),
                    $.bt('Go to 2nd View', function (e) {
                        $l('clicked "go to 2nd View" anchor')
                        r.n('sec')
                    }).C('y')))
            }
        })
        SecVw = $$V({
            i: function () {
                this.r()
            },
            r: function () {
                this.$el.E().A($.d().A(
                    $.bt('Go to 1st View', function (e) {
                        $l('clicked "go to 1st View" anchor')
                        r.n('first')
                    }).C('o'),
                    $.sp('My 2nd View').fS(50)
                ))
            }
        })
        r = $R({

            r: {
                '': 'pg1',
                'first': 'pg1',
                'sec': 'pg2'
            },

            pg1: function () {

                $l('in pg1')

                FirstVw({
                    el: $('#ct')
                })
            },


            pg2: function () {
                $l('in pg2')
                SecVw({el: $('#ct')})
            }
        })
    })
    HOWDYPAM = function () {
        z()


        d = $.d()
        $R({
            r: {

                'cool/:name': 'welcome',
                'image/:id': 'image',
                'items': 'items',
                'items/:item': 'item',
                'itemlist': 'showItemList'
            },

            welcome: function (name) {
                var greet = 'howdy, ' + name + '!'
                d.h(greet)
                $l(greet)
                //$.bd().E().A($.h1('welcome'))
            },

            items: function () {
                $.bd().E().A($.h1('show item list'))
            },
            item: function (item) {
                $.bd().E().A($.h1('show item: ' + item))
            },

            image: function (id) {
                $l('image===')
                _.t(10, function () {
                    $l($r() + '-id: ' + id)
                })
                $.bd().C('z')
            },

            _: function () {
                $l('you are viewing index')
            }

        })

        // _.in(2,function(){ r.n('cool/jason') })

        _.in(5, function () {
            $l('-> img')

            r.n('image/55c24c8f4198473b0d000004.png', {trigger: true})

        })


        $.bt('add', function () {
            r.n('items')
        })

        $.bt('add1', function () {
            $.A($.h1('k'))
            r.n('items/j')
        })

        Bb.h.start({pushState: true})
    }
    $RoApp('ROUTEE', function () {
        $.x();
        $l('routee')

        $R({
            r: {

                ':post/:id': 'pam',
                'post/*id': 'splatMustBeLast',
                '*post': 'splat'

            },


            pam: function (post, id) {
                $l('Get post ' + id)
                $l('fnPam: ' + post + ', id# ' + id)
            },
            splat: function () {
                alert('1')
            },
            splatMustBeLast: function () {
                alert('2')
            },
            d: function (a) {
                $l('ddddddddd:' + a)
            },
            e: function (a) {
                $l('eeeeeeeee:' + a)
            }
        })

        r.A('rnav/j', function () {
            alert('!')
        })
        $.bt('hi', function () {
            r.n('po/2', {t: 1})
        }).a()
        $.bt('hi', function () {
            rt.n('po/2')
        })
        $.bt('hi1', function () {
            rt.n('po/4')
        })
        $.bt('hiiiii', function () {
            r.n('mvc/rnavv/j', {trigger: true})
        })


        $.a('home', '/mvc/routee')
        _.in(2, function () {
            r.n('d')
        })
        function alpha() {
            function anchorClickBlocker() {
                //looks for clicks on any anchor els where
                //href starts with '/' (no domain) and stop
                //bw from nv to it

                $.bd().on('click', 'a[href^="/"]', function (ev) {
                    $l('wow')
                    ev.preventDefault()
                    r.n($(this).attr('href', {trigger: true}))
                })


//looks for clicks on any anchor els where
//href starts with '/' (no domain) and stop
//bw from nv to it
                $('body').on('click', 'a[href^="/"]', function (ev) {
                    ev.preventDefault()
                    r.n($(this).attr('href'))
                })


            }

            $.a().A($.h1('afsd'))
            anchorClickBlocker()

        }
    })
}
viewApps()


function viewApps(){

    VIEW=function(){$.x('b','viw');

        $V({el: $.dA('g', 400,400,200,200),
            i: function(){
                this.r()},
            r: function(){
                var vw=this
                this.A($.ul().fS(40).A('hello'))
                _.in(function(){vw.r()})
            }
        })


        _.in(3, function(){
            $$V({
                i: function(){
                    this.r()},
                r: function(){
                    this.A(
                        $.ul([
                        'hello'
                    ]))}
            })({
                el: $.d('O', 500,500)
            })
        })

        function alpha() {
            //  uses jq.fn.V ...very cool
            $.fn.V = function (ob) {
                ob = ob || {};
                ob.el = this
                return $V(ob)
            }
        }


    }

    DEFAULT= function(){$.x('n')
        md = $$M({defaults: {
            n:'j', a:20, o:'p'
        }})()
        $$V({  t: 'li', i: function(){this.$el.A()
            .C('r').col('b').fS(149)
            this.r()},
            r: function(){
                this.$el.A(
                'n: '+this.g('n')
            )}
        }) ({m: md})
    }


    EVENTS= function(){$.x('o','beauty')
        dv=$.d('r', 200).A(
            $.h1('hello'),
            bt=  $.bt('-------')
        )
        $V({el :dv ,
            events: {
                'click button': function(){
                    bt.C($r()) },
                'dblclick': 'r',
                'mouseover': function(){
                    dv.C($r())
                }
            },
            r : function(){$.C($r())}
        })

    }



    CHANGE=function(){$.x('x','bbv'); $('body').fS(30)
        div= $.dA('o', 300,400).XY( 200,200)
        m=  $$M()({rx:'antibiotic'})
        $$V({
            i:function(){var vw=this; vw.r()
                vw.oC(function(){vw.r()})
            },
            r:function(){return this.h(this.g('rx'))}
        })({
            el: div,
            m: m
        })
        ip = $.ip()
        $.bt('change', function(){
            m.s('rx', ip.v() )
        })
    }
    PEOPOP=function(){$.x('x', 'bb view people')
        peep = [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]
        vw= $$V({t:'ul',
            i:function(){this.$el.C('y')},
            r:function(){var el=this.$el.E()
                _.e(this.collection, function(p){//$('#peep')
                    el.A($.li([p.n + '(' + p.a + ')']))})
                return this}
        })({cl: peep})
        $.A(
            vw.r().el
        )
        _.in(function(){
            peep.pop();
            vw.r()
        })

        function alpha(){



            BBVP0=function(){$.x('x', 'bb view people')
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



    function alpha() {
        SHOWVW=NOROUTER = function () {$.x()
            V1 = $$V({
                i: function () {this.r()},
                r: function () {

                    this.$el.h(
                        this.model.get('Ms') + " from the View 1")
                    return this
                }
            })

            V2 = $$V({

                i: function () {
                    this.r();
                },
                r: function () {
                    this.$el.ht(this.model.g('Ms') + " from the View 2");
                    return this;
                }
            })
            V3 = $$V({
                i: function () {
                    this.render();
                },
                r: function () {
                    this.$el.html(this.model.get('Message') + " from the View 3");
                    return this;
                }
            })

            // Now we need a view that will contain the view
            // and render it whenever the user makes a choice on the screen.
            CtV = $$V({
                myChildV: null,
                r: function () {
                    this.h("Greeting Area");
                    this.A(
                        this.myChildV.$el);
                    return this;
                }
            })

            /*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
             We will then position three buttons on the UI which will let the user to change the view.
             Below code shows the application setup that is creating the container view and the functions
             that will get invoked when the user selects the view from screen.
             */

            greet = V1({Ms: "Hello world"})

            cont = CtV({
                el: $("#AppContainer"),
                model: greet
            })

            v1 = null;v2 = null;v3 = null;
            function showView1() {
                if (view1 == null) {
                    view1 = new View1({model: greeting});
                }
                container.myChildView = view1;
                container.render();
            }
            function showView2() {
                if (view2 == null) {
                    view2 = new View2({model: greeting});
                }

                container.myChildView = view2;
                container.render();
            }
            function showView3() {
                if (view3 == null) {
                    view3 = new View3({model: greeting});
                }

                container.myChildView = view3;
                container.render();
            }


        }
        NORTR = function () {
            $.x(null, 'no router')

            v1 = 0
            v2 = 0
            v3 = 0

            dv = $.d('r', 100, 100).id('div')

            V1 = $$V({
                i: function () {
                    this.r()
                },

                r: function () {
                    //this.$el.ht(this.model.get('Ms') + " from the View 1" )
                    return this
                }
            })

            hi = V1({
                Ms: "Hello world"
            })

            $.bt('v1', function () {

                v1 = v1 || V1({m: hi})

                ct.chV = v1
                ct.r()

            })

            V2 = $$V({
                i: function () {
                    this.r()
                },
                r: function () {
                    this.$el.ht(
                        this.g('Ms') + " from the View 2"
                    );

                    return this
                }
            })


            //V3 = $$V({i: function () {this.r()}, r: function () {return this.h(this.g('Message') + " from " + this.g('view') )}})


            // Now we need a view that will contain the view
            // and render it
            // whenever the user makes a choice on the screen.

            CtV = $$V({
                chV: 0,
                r: function () {
                    this.h('Hi Area')
                    this.A(this.chV.$el)
                    return this
                }
            })


            /*

             ct = CtV({
             el:dv,
             model: hi
             })



             Now lets create a simple div on the UI which will be used as el to this ContainerView.
             We will then position three buttons on the UI which will let the user to change the view.
             Below code shows the application setup that is creating the container view and the functions
             that will get invoked when the user selects the view from screen.


             */


            $.bt('v2', function () {
                if (!v2) {
                    v2 = V2({model: hi})
                }
                ct.chV = v2
                ct.r()
            })
            $.bt('v3', function () {
                if (!v3) {
                    v3 = V3({model: hi})
                }
                ct.chV = v3
                ct.r()
            })


        }
    }
}










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
CLLEN = function (){z()
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

    //
    Td = $$M({df: {tt: '', completed: false}})
    // -add() and rm() accept  indiv mds | []      // { merge: true }  -> MERGE  dup mds, !ignore
    items = $cl().A([{id: 1, n: "Dog", a: 3}, {id: 2, n: "cat", a: 2}]).A([{
        id: 1,
        n: "Bear"
    }], {merge: true}).A([{id: 2, n: "lion"}])// merge: false
    $l(_.jS(items.toJSON())) // [{"id":1,"name":"Bear","age":3},{"id":2,"name":"cat","age":2}]
    //    to retriev a md from a cl, use Cl.get(), accepts single id:
    tds = TdsCl([td = Td({id: 2, tt: 'book'})])
    td2 = tds.g(2);
    $l(td2 === td) // true
    //   mds  passed by reference
    $l(tdCid === td); // true
    //Listening for evs
    //   can listen for add and rm evs which occur when mds are added/rmd from cl
    TdsCl = $cl()
    TdsCl.on("add", function (td) {
        $l("Gone " + td.g("tt") + " ?" + (td.g("completed") ? 'Y' : 'N'))
    })
    TdsCl.A([{tt: 'Jamai', completed: false}, {tt: 'DL', completed: true}])  // Gone Jamai? N    Gone DL? Y
    // can bind to change event to listen for changes to any of mds in cl
    TdsCl = $cl()
    TdsCl.on("change:tt", function (m) {
        $l("Nah! I " + m.g('tt'))
    })
    TdsCl.A([{tt: ' Jamaica.', completed: false, id: 3}])
    td = TdsCl.g(3)
    td.s('tt', 'go fishing')  //  Nah! I  go fishing
    Td = $M({df: {tt: '', completed: false}})
    td = Td().s({tt: 'Buy cookies', completed: true})
    td.on({
        'change:tt': ttChd = function () {
            $l('tt chd!')
        },
        'change:completed': sttChd = function () {
            $l('stt chd!')
        }
    })
    td.s({tt: 'groceries'})  // tt chd!
    // Use once, dont need to unbind   ev  listener
    TdCounter = _.x({cA: 0, cB: 0}, Bb.E)
    TdCounter.once('event', incrA = function () {
        TdCounter.cA += 1;
        TdCounter.trigger('event')
    })  // This triggering will not  produce any effect on counters
    TdCounter.once('event', incrB = function () {
        TdCounter.cB += 1
    })
    TdCounter.trigger('event')   // Trigger event for first time
    TdCounter.cA //1
    TdCounter.cB //1
    // counterA and counterB should only have been incred once.
    tds = $cl().A([{tt: '  Belgium.', completed: false}, {tt: ' China.', completed: false}, {
        tt: '  Aust',
        completed: true
    }])
    tds.forEach(function (md) {
        $l(md.g('tt'))
    }) //   Belgium.//   China. //   Austria.
    // sortBy()- sort a cl on spec attr, ex: sortByAlph
    tds.sortBy(function (td) {
        return td.g("tt").tLC()
    }).forEach(function (m) {
        $l(m.g('tt'))
    }) // go to Austria. // go to Belgium. // go to China.

    count = 1;
    $l(tds.map(function (md) {
        return count++ + ". " + md.g('tt')
    })) //1. go to Belgium. //2. go to China. //3. go to Austria.
    tds.max(function (m) {
        return m.id
    }).id;
    tds.min(function (m) {
        return m.id
    }).id
    //  pluck() extract  spec attr
    captions = tds.pluck('caption') // returns list of captions
    // filter()  ex: Filter by array of md IDs

    Tds = $Cl({
        md: Td, filterById: function (ids) {
            return this.mds.filter(function (c) {
                return _.contains(ids, c.id)
            })
        }
    })
    //   indexOf() return index of particular item within cl
    tds = $C({})
    // any()  confirm  if any of  vals  incl  pass  iterator   truth  test
    tds.any(function (md) {
        return md.id === 100
    })
    tds.some(function (md) {
        return md.id === 100;
    })
    //  size() return cl size, tds.size() ~ tds.length;
    //  isEmpty()  determine whethercl is empty
    isEmpty = tds.isEmpty()
    //   groupBy() group cl into groups of like items, ex: create groups of completed and incomplete mds


    tds.A([{tt: 'Belgium.', completed: false}, {tt: 'China.', completed: false}, {
        tt: 'Austria.',
        completed: true
    }])

    byCompleted = tds.groupBy('completed');
    completed = $cl(byCompleted[true]);
    $l(completed.pluck('tt')) //  ["Aust"]
    //Underscore  operations  on  objects  are  avail as mets  on   Mds.


    //   pick()  extractset   of   atts   frommd
    Td = $$M({d: {tt: '', completed: false}})
    td = Td({tt: 'go to Austria.'});
    $l(td.pick('tt')) //  {tt: "go to Austria"}


    //  omit(), extract all atts from md, except those listed
    td = Td({tt: 'go to Austria.'});
    $l(td.omit('tt'))   //   {completed: false}

    // keys(), vals() -> lists of attr names, vals
    td = Td({tt: 'go to Austria.'});
    $l(td.keys())   //   ["tt", "completed"]
    $l(td.vals())  //  ["go to Austria.", false]


    // pairs() get  list  of atts as [key, val] pairs
    pairs = Td({tt: 'Aust'}).pairs();
    $l(pairs[0]); // ["tt", "Aust"]
    $l(pairs[1]) // ["completed", false]


    //  invert() creates ob where vals are keys, atts are vals
    Td({tt: 'go to Austria.'}).invert()  // {'go to Austria.': 'tt', 'false': 'completed'}


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
SORT  = function () {$.x('a', 'sort dont work')

    Chp = $$M()
    chps =  $$C({ m:Chp })()


    chps.comparator = function (a) {
        return a.tt
    }
    chps.add(Chp({p:9, tt:"End_"}))
    chps.add(Chp({p:1, tt:"Beg2_"}))
    chps.add(Chp({p:5, tt:"Mid_"}))
    chps.add(Chp({p:1, tt:"Beg_"}))

    $l(chps.pluck('tt'))
    chps.sort()
    $l(chps.pluck('tt'))
}
FRND=function(){$.x().h1('FRND')

    Frnd = $M({d:{lame:1}})

    Frnd = $$M({
        d: {lame: true},
        i: function () {
            var t = this
            t.on('error', function (m, e) {
                alert(3);
                $l(e)
            })
            t.on('change:n',
                function (m, e) {
                    alert(3);
                    $l(e)
                })
        },
        v: function (at) {
            if (at.n == 'rigo') {
                return "n cant be rigo!"
            }
        }
    })
    Frnds = $$C({m: Frnd})
    frnds = Frnds()
    f = Frnd({n: "paul", a: 7})
    p1 = frnds.A(f);
    f1=Frnd({name:"Thomas", age:67})
    f1 = Frnd({n: "Lul", a: 67})
    f1 = cl.A(f1)
    f2 = cl.A(f2)
    f2= Frnd({game:'jigo'})
    f2.s({name:"Rigo", age:7})
    f2.s('mame','hah')
    frnds.A(f2);
    frnds.rm(f1)
    f1=Frnd({n:"Lul", a:67})
    f2= Frnd({g:'jigo'})
    f2.s({n:"Rigo", a:7})
    f2.s('n','hah')

}
COLLEC=function(){$.x().h1('BCL')
    Bk = $$M({d: {ID: '', n: ''}, id: "ID",
        url: 'http://localhost:51377/api/Books'
    })

    BksC = $$C({m: Bk})
    cl1 =   BksC()
    bk1 = Bko({ ID: 1,  n: "Bk 1" })
    bk2 =  Bko({ ID: 2, n: "Bk 2" })
    cl2 =  BksC([bk1, bk2])
    bk3 =  Bk({ ID: 3, n: "Bk 3" })
    cl2.A(bk3)
    change=function(){
        bk3 = new Bk({ ID: 3, n: "Bk 3" })
        cl2.add(bk3)
        bk3_changed =  Bk.o({ ID: 3, n: "Changed Model" })
        cl2.add(bk3_changed, { merge: true })
    }
    add=function(){ bk4 =   Bk.o({ ID: 4, n: "Bk 4" })
        bk5 =  Bk.o({ ID: 5, n: "Bk 5" })
        cl2.add([bk4, bk5])
    }
    addAt=function(n){bk0 = new Bk({ ID: 0, n: "Bk 0" })
        cl2.add(bk0, {at:n||0})
    }

}
PERS=function(){$l('people');z()
    Quiz0=function(title){

        this.title=title

    }
    Quiz0=function(title){

        this.title=title

    }
    Person0=function(o){

        this.name=o.name
        this.age=o.age
        this.job=o.job

        //this.work=function(){}
    }
    Person0=function(o){

        this.name=o.name
        this.age=o.age
        this.job=o.job

        //this.work=function(){}
    }
    Person0.prototype.work=function(){return this.name + ' is working'}
    Person=$$M({
        I:function(){}, // this.oV(function(mod, err){$l(err)})
        D:{name:'john doe', age:30, job:'worker'},
        V:function(ats){if(ats.age <0){return 'age below zero, stupid!'}},
        work:function(){return this.g('name')+' is working'}})
    p=Person({name:'yano', age:34})
    p.oV(function(mod,z){$l(z)})
    personView=$$V({
        t:'li',
        k:'person',
        i:'some-person',

        I:function(){this.R()},

        T: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),

        R:function(){var t=this


            //this works, but doesnt use a template
            // t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))

            t.H(t.T(t.J()))
        }

    })
    v=personView({m:p})
    peopleCol=$$C({m:Person } )
    Per = $$M({})
    p1 =  Per({n:'j'})
    p2=  Per({n:'y'})
    Pers= $$C({model: Per})
    pers=  Pers([p1, p2])
    Pers= $Cl({m:Per})
    pers=Pers()
    p1= pers.add(p)
    pers.add(p2)
    pers.rm(p1)
    //pC=new peopleCol()
    //pC.add(p)
    pC=  peopleCol([

        {name:'rigo',age:29},
        {name:'jan',age:2},
        {name:'sal',job:'graphics'}

    ])
    pC.at(1).s('name', 'joejoe')
    peopleView=$$V({

        t:'ul',

        I:function(){
            $l('hi')
            $l(this.cl)
        },


        R:function(){//var t=this

            this.cl.each(

                function(person){

                    //$l(person.get('name'))

                    var v=personView({m: person})

                    //$l(v.el)

                    this.$el.append(v.el)

                    //t.q( v.el  )

                }, this)
        }

    })
    $.x('o','hi')

    Per= $$M({d: {n:'a', a:20, o:'p'}})
    Per = $$M({})
    p1 =  Per({n:'j'})
    p2=  Per({n:'y'})
    Pers= $$C({model: Per})
    pers=  Pers([p1, p2])
    p=  Per({})
    p1 = Per({n:'b'})
    p2= {n:'c'}
    PerV=$$V({t:'li',
        x:'some-per', k:'per',

        tp:tp=_.tp('<%= n %> (<%= a %>) - <%= o %>'),

        r: function(){
            this.$el.A('fasdfsfasd')
            _m=this.model
            //    this.$el.A(this.tp(m  ))  // this.model.toJSON()
        },

        i: function(){this.r()}
    })
    PepC=$$C({m:Per})

    peop = $cl()

    peop.comparator = function (a, b) {
        return a.g('n') < b.g('n') ? -1 : 1
    }
    peop.A(tom = $m({n: 'T'})).A(rob = $m({n: 'R'})).A(tim = $m({n: 'T'}))
    peop.indexOf(rob)//0
    peop.indexOf(tom)//2
    pV=PerV({m:p})
    pC=PepC()
    pC.A([p, p1,p2])

    PepV=$$V({

        cl: PepC, el:ul= $.ul(),
        i:function(){},
        r: function(){
            ul=this.$el.E()

            this.j(function(md){
                PerV({m:md},ul)
            })}
    })
    pCV = PepV({cl: pC})


    Per= $$M({d: {n:'a', a:20, o:'p'}})
    Per=$M({
        d:{lame:true},
        i:function(){var t=this
            t.on('error', function(m,e){
                alert(3); $l(e)})
            t.on('change:n',
                function(m,e){
                    alert(3); $l(e)})},
        v:function(at){
            if(at.n=='rigo'){return "n cant be rigo!"}
        }

    })
    p=Per({n:"rigo", a:7})
    p=  Per({})
    p1 = Per({n:'b'})
    p2= {n:'c'}
    PerV=$$V({t:'li',
        x:'some-per', k:'per',

        tp:tp=_.tp('<%= n %> (<%= a %>) - <%= o %>'),

        r: function(){
            this.$el.A('fasdfsfasd')
            _m=this.model
            //    this.$el.A(this.tp(m  ))  // this.model.toJSON()
        },

        i: function(){this.r()}
    })

    PepC=$$C({m:Per})

    pV=PerV({m:p})

    pC=PepC()


    pC.A([p, p1,p2])

    PepV=$$V({cl: PepC, el:ul= $.ul(),
        i:function(){},
        r: function(){
            ul=this.q.E()
            this.J(function(md){PerV.o({m:md},ul)})}})
    pCV = PepV({cl: pC})
    _.in(.2,function(){pCV.r()},'*')
    _.in(.4,function(){pCV.r()},'*')

    _.in(.2,function(){pCV.r()})
    _.in(.4,function(){pCV.r()})
    pcv=peopleView({cl:pC})
    pcv.R()

    //$b()(pcv.el)

    Person0.prototype.work=function(){return this.name + ' is working'}


    Person=$$M({
        I:function(){}, // this.oV(function(mod, err){$l(err)})
        D:{name:'john doe', age:30, job:'worker'},
        V:function(ats){if(ats.age <0){return 'age below zero, stupid!'}},
        work:function(){return this.g('name')+' is working'}})

    p=Person({name:'yano', age:34})
    p.oV(function(mod, err){$l(err)})
    personView=$$V({t:'li',
        k:'person',
        i:'some-person',
        I:function(){this.R()},
        T: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
        R:function(){var t=this


            //this works, but doesnt use a template
            // t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))

            t.H(t.T(t.J()))
        }
    })
    v=personView({m:p})
    peopleCol=$$C({m:Person } )
    //pC=new peopleCol()
    //pC.add(p)
    pC=  peopleCol([

        {name:'rigo',age:29},
        {name:'jan',age:2},
        {name:'sal',job:'graphics'}
    ])
    pC.at(1).s('name','joejoe')
    peopleView=$$V({

        t:'ul',

        I:function(){
            $l('hi')
            $l(this.cl)
        },


        R:function(){//var t=this

            this.cl.each(

                function(person){

                    //$l(person.get('name'))

                    var v=personView({m: person})

                    //$l(v.el)

                    this.$el.append(v.el)

                    //t.q( v.el  )

                }, this)
        }

    })
    pcv=peopleView({cl:pC})
    pcv.R()
    $b()(pcv.el)
    //$b()(pcv.q)




}
TASK=function(){  $.x('g', 'tasker'); Ap={M:{}, C:{}, V:{}}
    Ap.M.Task=$$M({})
    task1=Ap.M.Task({
        title:'go to the store',
        priority:4})
    task2=Ap.M.Task({
        title:'go to the park',
        priority:3})
    t1=Ap.M.Task({t:'go  store', pr:4})
    t2=Ap.M.Task({t:'go park', pr:3})
    Ap.M.Tsk = $M()
    Ap.M.Task = $$M({})
    Ap.V.Task=$$V({
        t:'li',
        R:function(){
            return this.H(
                this.g('title'))
        }
    })
    Ap.V.Tsk= $$V({t:'li',
        rr: function(){this.A( this.g('t') )
            return this
        }
    })
    Ap.V.Tsk = $V({
        t: 'li',
        r: function () {
            this.A(this.g('tt'));
            return this
        }
    })
    taskView=Ap.V.Task({m:task})
    taskView=Ap.V.Tsk({m:t1})
    tasksV=Ap.V.Tasks({cl:tasks})
    tasksV=Ap.V.Tasks({cl:tasks})
    tsksV = Ap.V.Tsks({cl: tsks})
    Ap.V.Tsks = $V({
        t: 'li',
        r: function () {
            var v = this
            v.eCl(function (t) {
                v.q.A(Ap.V.Tsk({m: t}).r().q)
            })
            this.q.A()
        }
    })
    Ap.V.Tasks = $$V({t:'li',
        rr: function(){
            var that=this
            this.cl.each(
                function(t){
                    var v=Ap.V.Task.o({m:t})
                    that.$el.A(v.rr().el)
                }, this)
            this.el.A()
        }
    })
    Ap.V.Tasks=$$V({
        t:'li',
        R:function(){
            this.cl.each(
                function(t){
                    var v=Ap.V.Task({m:t})
                    this.$el.append(v.el)},

                this)

            $b()(this.el)
        }
    })
    tskV = Ap.V.Tsk({m: t1})
    Ap.C.Tasks = $$C({m:Ap.M.Tsk})
    Ap.C.Tasks=$$C({m:Ap.M.Task})
    Ap.C.Tsks = $Cl({m: Ap.M.Tsk})
    tasks=Ap.C.Tasks([{t:'hi'}, {t:'bye'}])
    tasks=Ap.C.Tasks([
        {title:'hi'},
        {title:'bye'}])
    tsks = Ap.C.Tsks([{tt: 'hi'}, {tt: 'bye'}])
    $.bt('r Ap.V.Tsks tsksV', function () {
        tsksV.r()
    })
    Temp('task', [
        $.lb('Task: '),
        $.ip().id('task_desc'),
        $.bt('add task').id('btn')
    ])
    $.d().id('container')
    r=$R({
        R:{
            '':'first',
            'first':'first',
            'second':'second'},
        first:function(){$l('first')},
        second:function(){
            new Task()
            $l('second')}

    })
    Task=$$V({
        el: $('#container'),
        i: function(){this.r()},
        r: function(){this.h( temp('task') )},

        events: {'click button': 'add'},
        add: function(){ alert( $('#task_desc') + ' task added' )}

    })
    Bb.h.start({pushState:true})
}

ITEMS=function(){z(); Ap={M:{},V:{},C:{}}

    $Ro= Router = $$R({
        R:{
            '':'welcome',

            'itemlist':'showItemList',
            'j':'j'

        },
        welcome:function(){
            show('welcome')
        },
        j:function(){},
        showItemList:function(){
            show('show item list')
        }
    })
    r=router= $R()

    Ap.M.item = $$M({})
    i1=Ap.M.item({ n:'jason', g:'mason' })
    i1.oR('j',function(){show('j')})
    Bb.h.start({pushState:true})
}

AVAIL=function(){z()

    tx('new avail').id('newAvail').a()

    bt('ok',function(){
        Ap.M.Avail({c:qiv('newAvail')}).save()
        v.render()}).a()

    di('availsDiv').a()


    $.ip('new avail').id('newAvail')


    $.bt('ok',function(){

        var m= Ap.M.Avail({
            c:qiv('newAvail') })

        m.save()

        m.on('destroy', function(){
            alert('i am the model and i was destroyed')

        })

        v.render()

    })

    $.d().id('availsDiv')
    Ap={ M:{},C:{},V:{},T:{} }

    Ap.T.Avail=function(model){
        return _d().w(400).h(100).M(20).c('g')(
            h4(model.g('c')).id('avail').c('y','r'),
            br(),sp('delete').id('deleteAvail'),
            sp(' '),sp('edit').id('editAvail'),
            sp(' '),cb2().id('selAvail')).q}
    Ap.M.Avail=$$M({urlRoot: '/avail'})
    Ap.C.Avails=$$C({model: Ap.M.Avail, url: '/avail'})
    Ap.V.Avail=$$V({
        r:function(){
            this.$el.append( Ap.T.Avail(this.model) )
            return this
        },
        events:{
            'click #deleteAvail':'deleteAvail',
            'click #editAvail':'editAvail',
            'blur #avail':'changeAvail'},
        changeAvail:function(){
            qq( this.$el.find('#avail') ).at('contenteditable','false')
            var newAvail=this.$el.find('#avail').text()
            this.model.s('c', newAvail)
            this.model.save()},
        deleteAvail:function(){
            this.model.destroy()
            this.$el.remove()},
        editAvail:function(){
            qq(this.$el.find('#avail')).at('contenteditable','true')}
    })
    Ap.V.Avails =$$V({
        el:'#availsDiv',
        I:function(){this.render()},

        R:function(){
            var t=this

            t.collection.fetch({

                success:function(){

                    t.$el.html('')

                    t.$el.append("<h1>Avails List</h1>")

                    t.collection.each(function(m){
                        t.$el.append( Ap.V.Avail({model:m}).render().el )
                        return t},t)

                }})
        }})


    Ap.T.Avail=function(model){
        return _d().w(400).h(100).M(20).c('g')(

            h4(model.g('c')).id('avail').c('y','r'),

            br(),   sp('delete').id('deleteAvail'),
            sp(' '), sp('edit').id('editAvail'),
            sp(' '), cb2().id('selAvail')).q}


    Ap.M.Avail=$$M({urlRoot: '/avail'})

    Ap.C.Avails=$$C({model: Ap.M.Avail, url: '/avail'})

    Ap.V.Avail=$$V({

        R:function(){
            this.q(Ap.T.Avail(this.model) )
            return this
        },


        events:{

            'click #deleteAvail':'deleteAvail',
            'click #editAvail':'editAvail',
            'blur #avail':'changeAvail'
        },


        changeAvail:function(){
            qq( this.$el.find('#avail') ).cE(0)
            var newAvail=this.$el.find('#avail').text()
            this.model.s('c', newAvail)
            this.model.save()
        },


        deleteAvail:function(){
            this.model.destroy()
            this.$el.remove()},


        editAvail:function(){

            qq(this.$el.find('#avail')).cE(1)

        }

    })


    Ap.V.Avails =$$V({

        el:'#availsDiv',

        I:function(){this.render()},

        R:function(){var t=this

            t.collection.fetch({

                success:function(){

                    t.q.H('')

                    t.q(h1('Avails List'))

                    t.e(
                        function(m){
                            t.q(
                                Ap.V.Avail({m:m}).r().el )
                            return t},t)

                }})
        }})
    Ap.T.Avail=function(model){
        return $.d('g',400,100).mar(20).A(

            $.h4(model.g('c')).id('avail').C('y','r'),
            $.br(), $.sp('delete').id('deleteAvail'),
            $.sp(' '), $.sp('edit').id('editAvail'),
            $.sp(' '), $.cb().id('selAvail'))
    }
    Ap.T.Avail=function(model){
        return $.d('g',400,100).mar(20).A(
            $.h4(model.g('c')).id('avail').col('y','r'),
            $.br(),
            $.sp('delete').id('deleteAvail'),
            $.sp(' '), $.sp('edit').id('editAvail'),
            $.sp(' '), $.cb().id('selAvail')
        )
    }
    Ap.M.Avail=$$M({urlRoot: '/avail'})
    Ap.M.Avail=M$({urlRoot: '/avail'})
    Ap.V.Avail=Bb.V.e({

        r:function(){
            this.$el.A( Ap.T.Avail(this.model) )
            return this},
        ev:{
            'click #deleteAvail':'deleteAvail',
            'click #editAvail':'editAvail',
            'blur #avail':'changeAvail'},
        changeAvail:function(){
            this.$el.fi('#avail').at('contenteditable','false')
            newAvail=this.$el.fi('#avail').text()
            this.model.s('c', newAvail)
            this.model.save()},
        deleteAvail:function(){
            this.model.destroy()
            this.$el.rm()
        },

        editAvail:function(){this.$el.fi('#avail').at('contenteditable','true')}

    })
    Ap.V.Avails =Bb.V.e({
        el:'#availsDiv',
        I:function(){this.render()},
        R:function(){var t=this
            t.collection.fetch({
                success:function(){
                    t.$el.html('')
                    t.$el.A("<h1>Avails List</h1>")
                    t.collection.each(function(m){
                        t.$el.A( Ap.V.Avail({model:m}).render().el )
                        return t},t)
                }})
        }})
    Ap.C.Avails= C$({model: Ap.M.Avail, url: '/avail'})


    Ap.V.Avail=$$V({

        r:function(){
            this.q(
                Ap.T.Avail(this.model)
            )
            return this
        },
        ev:{
            'click #deleteAvail':'deleteAvail',
            'click #editAvail':'editAvail',
            'blur #avail':'changeAvail'
        },
        changeAvail:function(){
            qq( this.$el.find('#avail') ).cE(0)
            var newAvail=this.$el.find('#avail').text()
            this.model.s('c', newAvail)
            this.model.save()
        },

        deleteAvail:function(){
            this.model.destroy()
            this.$el.remove()},
        editAvail:function(){

            this.$el.find('#avail').cE(1)

        }

    })

    Ap.V.Avails =$$V({el:'#availsDiv',
        i:function(){this.render()},
        r:function(){var t=this
            t.collection.fetch({
                success:function(){
                    t.q.H('')

                    t.q($.h1('Avails List'))

                    t.e(
                        function(m){
                            t.q(
                                Ap.V.Avail({m:m}).r().el )
                            return t},t)

                }})
        }})

    avs=Ap.C.Avails()
    avs.on('destroy', function(j){
        alert('i am col and i was destroyed')
        v.trigger('modelDeleted')
    })

    v=Ap.V.Avails({cl:avs})
    v.on('modelDeleted', function(){alert('modDel')})



    avs=Ap.C.Avails()


    avs.on('destroy',

        function(j){
            alert('i am col and i was destroyed')

            v.trigger('modelDeleted')

        })





    v=Ap.V.Avails({cl:avs})


    v.on('modelDeleted', function(){alert('modDel')})
    $$M({
        d:{ prop:3 },
        test:function(){
            $( this.get('prop') ) },
        test2:function(a){ $l('prop: '+this.get('prop'))},
        happy:function(a){
            this.test2(a)
        }
    })

    a=$$M({

        defaults:{ prop:3 },

        test:function(){ console.log( this.get('prop') ) },




        test2:function(a){


            console.log(

                (function(){return this.get('prop')}) ()

            )


        },


        happy:function(a){

            this.test2(a)
        }

    })


    f=a()

    avs=Ap.C.Avails()

    v=Ap.V.Avails({collection:avs})//.render()

    avs.on('destroy',function(aa){$l('destroy!!!!')})



    //  avs=Ap.C.Avails()
    //  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
    $.ip('new avail').id('newAvail').A()
    $.bt('ok',function(){
        Ap.M.Avail({c: $('#newAvail').v()
        }).save()

        v.render()

    }).A()
    $.dI('availsDiv')
    $.ip('new avail').id('newAvail').A()
    $.bt('ok',function(){
        var m= Ap.M.Avail({
            c:qiv('newAvail')
        })
        m.save()
        m.on('destroy', function(){alert('i am the model and i was destroyed')})
        v.render()
    })
    $.dI('availsDiv')


}
BADS=function(){$.x().h1('backcl').i('chicks').A()
    bads = $$C()()
    bads.oA(function (s) {alert("new baddie: " + s.g("n"))})
    bads.add([{n: "bad1"}, {n: "bad2"}])
}
SWEET = function(){$.x('x', 'bb view people')

    Bb.View.prototype.C$=function(s){this.$el.C$(s); return this}

    Vw= $V({
        el: $.ul(),
        i: function(){
            this.r().C$('init..')},
        r: function(){ var ul=this.q
            this.ECl(function(p){ul.li(p.n,'(',p.a,')') })
            return this}
    })
    peep= [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]
    vw=Vw({ cl: peep  })
    _.in(function(){ peep.pop(); vw.r() })
    BBVP1=function(){$.x('x', 'bb view people')


        Vw= $.ulV({
            i:function(){  this.q.C($r())   },
            r:function(){var el=this.q.E()
                this.cl(function(p){  el.A($.li().A(p.n+'('+p.a+')'))})
                return this}

        })

        vw=Vw({   cl: peep = [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]

        })

        /*

         $.A(vw.r().q)
         _.in(function(){peep.pop(); vw.r()},'*')
         */


    }
}
CHAINABLE0 = function () {
    //prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
    // sol: bb   supports  _.chain, which returns ob  w  us-arr-ops  attached as mets which return that ob
    //chain starts chain, returns wrapper around cl's mds (wrapped arr)
    //  The chain ends with call to val(), which  terminates chain and returns resulting array
    Cl([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}]).chain()
        .fl(function (i) {
            return i.g('a') > 10
        })
        .m(function (i) {
            return i.g('n')
        })
        .val() //['I','R']
    // Some of bb- spec mets do return this, which means they can be chained as well:
    $cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
}
DIRTPAGE = function () {
    $.x()
    var newMsBox, newTopic, newMs, searchBox

    MsM = $$M({})
    MsC = $$C({m: 'MsM'})
    MsView = $$V({})
    MssView = $$V({})
    $.h1().A(
        $.a('Dirtpage', '/wap/dirtpage/')
    ).A()
    $.dI('content')
    if (wappyPam) {

        newMsBox = $.d().WH('auto').A(
            $.h1('new ms'),
            $.ip().K('form-control').id('newMs'),
            $.bt('ok', function () {
                var newMs = $('#newMs').v()
                $.P('messages', {
                    tpc: wappyPam, ms: newMs
                }, function () {
                    loadResults()
                })
            }))
        $('#cont').A($.h1('the ' + wappyPam + ' page'),
            newMsBox, $.dI('res'))

        $.g('topics/' + wappyPam, function (msgs) {
            $('#results').ht($.h5('len: ' + msgs.length))
            _.e(msgs, function (ms) {
                $('#res').A($.h6(ms.ms))
            })
        })
    }

    else {
        newMsBox = $.d().WH('auto').A(
            $.h1('new message'),
            $.ip().K('form-control').id('newTopic'),
            $.ip().K('form-control').id('newMs'),
            $.bt('ok', function () {
                newTopic = $('#newTopic').v()
                newMs = $('#newMs').v()
                $.P('msgs', {topic: newTopic, message: newMs}, function () {
                })
            })
        )
        searchBox = $.d().WH('auto').A(
            $.h1('search'),
            $.ip().K('form-control').id('searchInput'),
            $.bt('ok', function () {
                window.location = '/wap/dirtpage/' + $('#searchInput').v()
                searchInput = $('#searchInput').v()
                $.G('topics/' + searchInput, function (msgs) {
                    $('#res').ht($.h5('len: ' + msgs.length))
                    _.e(msgs, function (ms) {
                        $('#res').A($.h6(ms.ms))
                    })
                })
            })
        )
        $.dI('res')
        $('#cont').A(newMsBox, searchBox)
        $.eG('msgs', function (ms) {
            $('#res').A($.h2().A(
                    $.a('topic: ' + ms.topic, '/wap/dirtpage/' + ms.topic)),
                $.h3('ms: ' + ms.ms)
            )
        })
    }

}


PEOPLE=function(){$.x()

    Per  = bb.M.e({
        i: function () {
            //this.oV(function(mod, err){$l(err)})
        },
        d: {n:'doe', a: 30, j: 'wrk'},
        validate: function (ats) {if (ats.age < 0) {return 'a < 0!'}},
        work: function () {return this.g('n') + ' is working'}
    })

    p = Per.o({n: 'y', a: 34})

    //p.oV(function (mod, z) {$l(z)})

    PerV = bb.V.e({tn: 'li',
        k: 'person', x: 'some-person',
        i: function () {this.r()},
        tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
        r: function () {
            var t = this
            //this works, but doesnt use a template
            // t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
            t.H(
                t.T(
                    t.J()
                )
            )
        }
    })

    pV= PerV.o({m: p})

    peepC = bb.C.e({m: Per})


    pC = peepC.o([
        {n: 'rigo', a: 29},
        {n: 'j', a: 2},
        {n: 's', j: 'gx'}
    ])
    pC.add(p)


    pC.at(1).n('joejoe')
    pC.at(1).s('name', 'joejoe')

    PeepV = bb.V.e({tn: 'ul',
        i: function () {
            $l('hi')
            $l(this.cl)
        },
        r: function () {//var t=this
            this.cl.each(function (p) {var v,pV  //$l(p.g('n'))
                pV = PerV.o({m: p}) //$l(pV.el)
                this.$el.append(pV.el) //t.q( pV.el  )
            }, this)
        }

    })

    pcv = PeepV.o({cl: pC})
    pcv.r()
    $.A( pcv.el )

}
FLCL=function(){$.x('r', 'filtering a cl:')

    /*
     FlV = bb.V.e({
     ev: {'click #run': 'runFilter'},
     runFilter: function(e){e.pD();
     this.fl = {
     // ... get the filter info from the DOM
     }; this.rr()},
     rr: function(){// get the filtered list from the collection
     // iterate over the filtered list and render the results in to the html array
     // populate the DOM with the resulting HTML
     HT=[]
     _.e(this.cl.where(this.fl),
     function(item){HT.push(
     _.tp($('my-item-template').H())(item.tJ())
     )})

     this.$el.html(HT); return this }
     })*/


    Cl =  bb.C.e({i:function(){}})
    cl = Cl.o({})


    /*
     cl.add([{a: 'f', b: 's'},
     {a: 't', b: 's'},
     {a:'f', b: 's'},
     {a: 's', b:'t'}
     ])


     res = cl.where({a:'f',b:'s'})
     */
    //http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
}

TASKER=function(){$.x()
    Ap={M:{}, C:{}, V:{}}

    Ap.M.Task = bb.M.e({})

    t1=Ap.M.Task.o({t:'go  store', pr:4})

    t2=Ap.M.Task.o({t:'go park', pr:3})

    Ap.V.Tsk= bb.V.e({t:'li',
        rr: function(){this.A( this.g('t') )
            return this
        }
    })

    taskView=Ap.V.Tsk.o({m:t1})
    Ap.C.Tasks = bb.C.e({m:Ap.M.Tsk})
    tasks=Ap.C.Tasks.o([{t:'hi'}, {t:'bye'}])
    Ap.V.Tasks = bb.V.e({t:'li',
        rr: function(){
            var that=this
            this.cl.each(
                function(t){
                    var v=Ap.V.Task.o({m:t})
                    that.$el.A(v.rr().el)
                }, this)
            this.el.A()
        }
    })

    tasksV=Ap.V.Tasks.o({cl:tasks})
}