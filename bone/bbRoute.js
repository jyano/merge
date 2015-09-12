
    ro = rt = bb.Router.prototype
    ro._n = function () {
        this.navigate.apply(this, arguments);
        return this
    }
    ro.n = function (url) {
        return this._n(url, G(arguments).n ? null : {trigger: true})
    }//normal navigate, but i change the default to auto trigger the route fn
    rt.rp = function (url, op) {
        return this._n(url, _.x({replace: true}, G(arguments).n ? {trigger: true} : {}))
    }//navigate: replace
    ro.A = ro.oR = ro.r = ro.o = function (rt, fn) {
        var rtr = this

        if (O(rt)) {
            _.e(rt, function (v, k) {
                rtr.o(k, v)
            })
        }
        else {
            this.on('route:' + rt, fn)
        }
        return this
    }


//metaClass
_$$R=function(ob){ob=ob||{}

    if(ob.i){ob.initialize = ob.i}
    if(ob.$){ob.initialize = function(){
            alert('ob.$')
            Bb.h.start({pushState:true})
            if( F(ob.$ )){
                ob.$()
            }
        }}//alert
    ob.routes = ob.routes   ||  ob.rt || ob.r ||  {} // if(ob.R){ob.routes=ob.R}
        //ob.routes[''] = ob.routes[''] || 'index'
        // if(ob.x){ob.index = ob.x}; if(ob.h){ob.home = ob.h}

    return Bb.R.x(ob)
}

//metaClass.. no need for 'new'
$$R= Bb.r=function(ob){
    var Rt = _$$R(ob)
    return function(a,b,c,d){
        return new Rt(a,b,c,d)
    }
}

//if you want instant instantiation
$R= function(ob){var g=G(arguments)
    r = $$R(ob)()
    if(!Bb.H.started && !g.d){
        Bb.history.start({
            pushState: true})}
    return r
}


ROUTE0 = function () {
    z()
    $R({r: {"*x": "d"}}, '+')
    r.oR('d', function (a) {$l('d:' + a)})
    r.oR('e', function (a) {$l('e:' + a)})
}
ROUTEPAMS0 = function () {
    $.x().A('hahahahhahaha')



    $R({
        rt: RTob,

        home: function () {
            $l('home')
        },

        v: function () {
            $l('image')
        },
        nn: function () {
        },
        en: function (id) {
            $l('id:' + id)
        }

    }, '+')

    r.oR('dfR', $l)

    r.oR('gPo', function (id) {
        $l('gPo# ' + id)
    })
    r.oR('gPo', function () {
        $l(3)
    }) //both routes fire!

    r.oR('dlF', $l)

    r.oR('ldV', function (rt, ac) {
        $l(rt + '_' + ac)
    })

}
BACKDEMO0 = function () {
    $.x().d('yoo hoo').id('cont')

    Temp = function (i, h) {
        var s = ''
        return _.tp($('#' + i).html(), h || {})
        if (A(h)) {
            _.e(h, function (h) {
                s += h.oh()
            })
        }
        s = "<script type='text/template'>" + s + "</script>"
        return $(s).id(i).A()
    }

    $R({
        rt: {'': 'f', 'f': 'f', 's': 's'},
        f: function () {
            $l('fir')
        }, s: function () {
            $l('sec')
        },
        task: function () {
            t = new Task();
            $l('t = new Task')
        }
    }, '+')


    Temp('task', [
        $.lb('Task: '),
        $.ip().id('task_desc'),
        $.bt('add task').id('btn')])

    Tsk = $V({
        el: $('#cont'),
        i: function () {
            this.r()
        },
        r: function () {
            this.$el.ht(Temp('task'))
        },
        e: {'click button': 'add'},
        add: function () {
            alert($('#task_desc').v() + ' task added')
        }
    })
}
ROUTENAV0 = function () {
    $.x('b')
    $R({
        r: {
            'po/:id': 'gp',
            '*a': 'dr'
        },
        dr: function (a) {
            $l(a)
        },
        gp: function (id) {
            $.bd().C($r())
            $l('Get post ' + id)
        }
    }, '+')
    $.bt('hi', function () {
        rt.n('po/2')
    })


}
BACKDEMO1 = function () {
    $.x().d('yoo hoo').id('cont')


    $R({
        rt: {
            '': 'f', 'f': 'f', 's': 's',
            '/wap/items/q': q
        },

        q: function () {
            alert('q')
        },
        f: function () {
            $l('fir')
        },
        s: function () {
            $l('sec')
        },

        task: function () {
            t = new Task();
            $l('t = new Task')
        }

    })


    Temp = function (i, h) {
        var s = ''

        return _.tp(
            $('#' + i).html(), h || {}
        )

        if (A(h)) {
            _.e(h, function (h) {
                s += h.oh()
            })

        }


        _str = "<script type='text/template'>" + _str + "</script>"


        str = $(s)

        return $(s).id(i).A()

    }


    /*


     Temp('task', [

     $.lb('Task: '),
     $.ip().id('task_desc'),
     $.bt('add task').id('btn')
     ])


     Tsk=$V({el: $('#cont'),

     i: function(){this.r()},
     r: function(){this.$el.ht( Temp('task') )},
     e: {'click button': 'add'},
     add: function(){alert( $('#task_desc').v() + ' task added')}

     })
     */

    $.bt('sfad', function () {
        r.n('/wap/items/q')
    })
}
BACKDEMO = function () {
    $.x()

    Temp = function (i, h) {
        var s = ''
        return _.tp($('#' + i).html(), h || {})
        if (A(h)) {
            _.e(h, function (h) {
                s += h.oh()
            })
        }
        s = "<script type='text/template'>" + s + "</script>"
        return $(s).id(i).A()
    }

    Temp('task', [
        $.lb('Task: '),
        $.ip().id('task_desc'),
        $.bt('add task').id('btn')])

    $.dI('cont')

    $$R({
        rt: {
            '': 'f',
            'f': 'f',
            's': 's'
        },
        f: function () {
            $l('fir')
        },
        s: function () {
            new Task()
            $l('sec')
        }
    })

    Tsk = Bb.V.e({
        el: $('#cont'),
        i: function () {
            this.r()
        },
        r: function () {
            this.$el.ht(Temp('task'))
        },
        e: {'click button': 'add'},
        add: function () {
            alert($('#task_desc').v() + ' task added')
        }
    })
}
ITEMS1 = function () {
    $.x()

    Ap = {M: {}, V: {}, C: {}}
    Ap.M.Item = Bb.M.e({})

    Bb.R({

        r: {'': 'welcome', 'itemlist': 'showItemList', 'j': 'j'},

        welcome: function () {
            $.bd().E().A($.h1('welcome'))

        },


        j: function () {
        },
        showItemList: function () {
            $.bd().E().A($.h1('show item list'))

        }
    })

    i1 = Ap.M.Item.o({n: 'jason', g: 'mason'})
    i1.oR('j', function () {
        $.bd().E().A($.h1('j'))
    })

    // H$()
}
ITEMS = function () {
    $.x().h3('jason')

    Ap = {M: {}, V: {}, C: {}}

    Ap.M.Item = $M({})

    $R({
        r: {
            '': 'welcome',
            'wap/items': 'welcome1',
            'wap/items/itemlist': 'showItemList',
            'wap/items/j': 'j'
        },

        welcome: function () {
            $.bd().E().A($.h1('welcome'))
        },

        j: function () {
            $l('asdfjfsdafsdf')
        },

        showItemList: function () {
            $l('showItemList')
            $.bd().A($.h1('show item list'))
        }
    }, '/')


    i1 = Ap.M.Item({n: 'jason', g: 'mason'})

    r.o('/wap/items/j', function () {
        $.bd().E().A(
            $.h1('j')
        )
    })
    r.o('/wap/items/q', function () {
        $.bd().E().A($.h1('q'))

    })

    Bb.h.s({pushState: true})

    $.bt('add', function () {
        r.n('/wap/items/itemlist')
    })
    $.bt('add1', function () {
        $.A($.h1('k'))
        r.n('/wap/items/j')
    })

}
NORTR = function () {
    $.x()


    V1 = Bb.V.e({

        i: function () {
            this.r()
        },
        r: function () {
            this.$el.ht(this.model.get('Ms') + " from the View 1")
            return this
        }
    })

    V2 = Bb.V.e({

        i: function () {
            this.r();
        },

        r: function () {
            this.$el.ht(this.model.g('Ms') + " from the View 2");
            return this;
        }
    })
    V3 = Bb.V.e({
        i: function () {
            this.render();
        },
        r: function () {
            this.$el.html(this.model.get('Message') + " from the View 3");
            return this;
        }
    })
    // Now we need a view that will contain the view and render it whenever the user makes a choice on the screen.

    CtV = Bb.V.e({
        myChildV: null,
        r: function () {
            this.$el.ht("Greeting Area");
            this.$el.A(this.myChildV.$el);
            return this;
        }
    })

    /*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
     We will then position three buttons on the UI which will let the user to change the view.
     Below code shows the application setup that is creating the container view and the functions
     that will get invoked when the user selects the view from screen.
     */

    greet = V1.o({
        Ms: "Hello world"
    })


    cont = CtV.o({
        el: $("#AppContainer"),
        model: greet
    })

    v1 = null;
    v2 = null;
    v3 = null;

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
ROUTENAV = function () {
    $.x('b')
    Bb.R({
        rt: {
            'po/:id': 'gp',
            '*a': 'dr'
        },
        dr: function (a) {
            alert(a)
        },
        gp: function (id) {
            alert('Get post ' + id)
        }

    })
    $.bt('hi', function () {
        $l('11111111')
        rt.n('po/2', {t: 1})
    })
}
RNAV = function () {
    $.x('b')

    $R({
        r: {'po/:id': 'gp', '*a': 'dr'},
        dr: function (a) {
            $l(a)
        },
        gp: function (id) {
            $.l$('Get post ' + id)
        }
    })

    $.bt('hi', function () {
        rt.n('po/2')
    })
    $.bt('hi1', function () {
        rt.n('po/4')
    })

    r.o('wappy/rnav/j', function () {
        alert('!')
    })

    $.bt('hi1', function () {
        rt.n('wappy/rnav/j')
    })
}
ROUTE1 = function () {
    z()
    r = Bb.R({rt: {"*x": "d"}})
    r.oR('d', function (a) {
        alert(a)
    })//#hello -> 'hello'
    r.oR('e', function (a) {
        alert(a)
    })//#e -> 'e' (could do '/#/e')
    // H$()
}
ROUTE = function () {
    $.x()
    $R({r: {'*x': 'd'}})
    // r.o('d',function(a){$l('d:'+ a)}); r.o('e',function(a){$l('e:'+a)})
    r.o({
        d: function (a) {
            $l('d:' + a)
        },
        e: function (a) {
            $l('e:' + a)
        }
    })
}
ROUTEPAMS1 = function () {
    $.x().A('hahahahhahaha')


    $R({
        '': 'home',
        'view': 'v',
        'new': 'nn',
        ':id': 'en',
        'posts/:id': 'gPo',
        '*acts': 'dfR',
        'download/*path': 'dlF',
        ':route/:action': 'ldV'
    }, {
        home: function () {
            $l('home')
        },
        v: function () {
            $l('image')
        },
        nn: function () {
        },
        en: function (id) {
            $l('id:' + id)
        }
    })

    r.o('dfR', $l)
    r.o('gPo', function (id) {
        $l('gPo# ' + id)
    })
    r.o('gPo', function () {
        $l(3)
    }) //both routes fire!
    r.o('dlF', $l)
    r.o('ldV', function (rt, ac) {
        $l(rt + '_' + ac)
    })
}
ROUTEPAMS = function () {
    z()
    Bb.R({

        rt: {
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
    r.oR('dfR', alert)
    r.oR('gPo', function (id) {
        alert('gPo# ' + id)
    })
    r.oR('gPo', function () {
        alert(3)
    }) //both routes fire!
    r.oR('dlF', alert)
    r.oR('ldV', function (rt, ac) {
        alert(rt + '_' + ac)
    })
    // H$()  // or Bb.h.s({pushState: true})
}
RTR11 = function () {
    $.x('b')

    RTob = {
        '': 'index',
        'wap/rtr/images/:id': 'image',

        view: 'viewImage'

    }

    $R({

        r: RTob,
        h: function () {
            $l('you are viewing home page')
        },
        x: function () {
            $l('you are viewing index')
        },
        image: function (id) {
            $l('image===')
            _.t(10, function () {
                $l($r() + '-id: ' + id)
            });
            $.bd().C('z')
        },
        viewImage: function () {
            $l('you are viewing an image')
        }

    }, '+')

    _.in(function () {
        $l('......')

        r.n('/wap/rtr/images/32903290239032902390')


    }, '*')
    //looks for clicks on any anchor els where
    //href starts with '/' (no domain) and stop
    //bw from nv to it


    $.bd().on('click', 'a[href^="/"]', function (ev) {
        $l('wow')
        ev.preventDefault()
        r.n($(this).attr('href', {trigger: true}))
    })

}
RTR1 = function () {
    $.x('b')

    RTob = {
        '': 'index',
        'wap/rtr/images/:id': 'image',

        view: 'viewImage'

    }

    $R({
        r: RTob,
        h: function () {
            $l('you are viewing home page')
        },
        x: function () {
            $l('you are viewing index')
        },
        image: function (id) {
            $l('image===')
            _.t(10, function () {
                $l($r() + '-id: ' + id)
            });
            $.bd().C('z')
        },
        viewImage: function () {
            $l('you are viewing an image')
        }

    })

    _.in(function () {
        $l('......')

        r.n('/wap/rtr/images/32903290239032902390')


    }, '*')
    //looks for clicks on any anchor els where
    //href starts with '/' (no domain) and stop
    //bw from nv to it


    $.bd().on('click', 'a[href^="/"]', function (ev) {
        $l('wow')
        ev.preventDefault()
        r.n($(this).attr('href', {trigger: true}))
    })

}
RTR = function () {
    $l('RTR');
    $.x('y');
    $CSS({h1: {'font-size': 100}})

    ro = Ro = Bb.Rtr({

        $: 1,
        rt: {

            '': 'index',
            'wap/rtr/images/:id': 'image',
            view: 'viewImage'
        },
        image: function (id) {
            _.t(10, function () {
                $l($r() + '-id: ' + id)
            })
            $.bd().C('z')
        },
        h: function () {
            alert('you are viewing home page')
        },
        x: function () {
            alert('you are viewing index')
        },
        viewImage: function () {
            alert('you are viewing an image')
        }
    })


    _.in(3, function () {
        ro.n('55c24c8f4198473b0d000004.png')
    })

    //looks for clicks on any anchor els where
    //href starts with '/' (no domain) and stop
    //bw from nv to it

    $.a().A($.h1('afsd'))

    $('body').on('click', 'a[href^="/"]', function (ev) {
        ev.preventDefault()
        ro.n($(this).attr('href', {trigger: true}))
    })

} //works!.. ?
function apz(){
    function usesVw(){
        NORTR0 = function () {
            $.x(null, 'no router');
            v1 = v2 = v3 = 0
            $.d('r', 100, 100).id('div')

            // ha.. this is just 'no router'
            V1 = $V({
                i: function () {
                    this.r()
                }, r: function () {

                    //this.$el.ht(this.model.get('Ms') + " from the View 1" )

                    return this
                }
            })

            V2 = $V({
                i: function () {
                    this.r()
                },
                r: function () {
                    this.$el.ht(this.model.g('Ms') + " from the View 2");
                    return this
                }
            })
            V3 = $V({
                i: function () {
                    this.render()
                },
                r: function () {
                    this.$el.html(this.model.get('Message') + " from the View 3")
                    return this
                }
            })


            // Now we need a view that will contain the view
            // and render it
            // whenever the user makes a choice on the screen.

            CtV = $V({
                chV: 0,
                render: function () {
                    this.$el.ht('Hi Area').A(
                        this.chV.$el
                    )
                    return this
                }
            })

            hi = V1({Ms: "Hello world"})

            ct = CtV({
                el: $("#div"),
                model: hi
            })


            /*
             Now lets create a simple div on the UI which will be used as el to this ContainerView.
             We will then position three buttons on the UI which will let the user to change the view.
             Below code shows the application setup that is creating the container view and the functions
             that will get invoked when the user selects the view from screen.
             */


            $.bt('v1', function () {
                    if (!v1) {
                        v1 = V1({model: hi})
                    }
                    ct.chV = v1
                    ct.render()
                }
            )

            $.bt('v2', function () {
                if (!v2) {
                    v2 = V2({model: hi})
                }
                ct.chV = v2
                ct.render()
            })


            $.bt('v3', function () {
                if (!v3) {
                    v3 = V3({model: hi})
                }
                ct.chV = v3
                ct.render()
            })

        }
    }
    function usesMd(){
        ITEMS0 = function () {
            $.x().h3('jason')
            Ap = {M: {}, V: {}, C: {}}
            Ap.M.Item = $M({})

            $R({

                    r: {
                        '': 'welcome',

                        itemlist: 'showItemList',
                        'j': 'j'

                    },

                    welcome: function () {
                        $.bd().E().A($.h1('welcome'))
                    },
                    j: function () {
                    },
                    showItemList: function () {
                        $l('showItemList')
                        $.bd().A($.h1('show item list'))
                    }
                },

                '+')


            i1 = Ap.M.Item({n: 'jason', g: 'mason'})
            i1.oR('j', function () {
                $.bd().E().A($.h1('j'))
            })
            //Bb.history.start({pushState: true})

            $.bt('add', function () {
                r.n('/itemlist')

            })

        }
    }

}

function alt() {
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
}



VID0=function(){z(); $('body').C('o').css('font-size', 80)
    $.d().id('ct')

    $$R({
        r: {'':'pg1', 'first':'pg1', 'sec':'pg2'},
        pg1: function(){new FirstVw({el: $('#ct')})},
        pg2: function(){new SecVw({el: $('#ct')})}

    })()

    Bb.h.start(
      //{pushState:true}
    )
}


    apzDa()
    function apzDa() {

        RTob = {
            '': 'home',
            'view': 'v',
            'new': 'nn',
            ':id': 'en',
            'posts/:id': 'gPo',
            '*acts': 'dfR',
            'download/*path': 'dlF',
            ':route/:action': 'ldV'
        }
        FirstVw = Bb.V.x({
            initialize: function () {
                this.render()
            },
            render: function () {
                var first = $.d().rm().A(
                    $.lb().A('My 1st View'), $.br(),
                    $.a().hr('#sec').A('Go to 2nd View')
                ).oh();
                this.$el.html(first)
            }
        })
        SecVw = Bb.V.x({
            initialize: function () {
                this.render()
            },
            render: function () {
                var sec = $.d().rm()
                    .A($.lb().A('My 2nd View'), $.br(), $.a()
                        .hr('#first').A('Go to 1st View'))
                    .oh()
                this.$el.html(sec)
            }
        })
    }
