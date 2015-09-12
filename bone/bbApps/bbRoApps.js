ROUTEE = function(){$.x();$l('routee')
        r= $$R({
            routes: {
                '*x': 'd'
            },
            d: function (a) {
                $l('dddddddddddddddddddd')
                $l('d:' + a)
            },
            e: function (a) {
                $l('e:' + a)
            }
        })()
        // r.o('d',function(a){$l('d:'+ a)}); r.o('e',function(a){$l('e:'+a)})

        Bb.h.start()

        _.in(2,function(){
            Bb.h.navigate('d', {trigger:true})
        })

    }
NOPUSHSTATE= VID0 = function () {z();
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

        $('body').C('o').css('font-size', 80)
        $.d().id('ct')
        $$R({
            r: {'': 'pg1', 'first': 'pg1', 'sec': 'pg2'},
            pg1: function () {
                new FirstVw({el: $('#ct')})
            },
            pg2: function () {
                new SecVw({el: $('#ct')})
            }
        })()
        Bb.h.start(
            //{pushState:true}
        )
    }
STILLNOPUSH=VID1 = function () {
        z();
        $('body').C('o').css('font-size', 80)
        $.d().id('ct')
        $$R({
            r: {
                ':post/:id': 'pam',
                '*post': 'splat',
                'post/*id': 'splatMustBeLast'
            },
            pam: function (post, id) {
                $l('fnPam: ' + post + ', id# ' + id)
            },
            splat: function () {
                alert('1')
            },
            splatMustBeLast: function () {
                alert('2')
            }
        })()

        Bb.h.start(
            {pushState: true}
        )
    }
//WORKS (above):
VID00=function(){

        $FirstVw = Bb.V.x({
            initialize: function () {
                this.render()
            },
            render: function () {
                var first = $.d().rm().A(
                    $.lb().A('My 1st View'), $.br(),
                    $.a().hr('sec').A('Go to 2nd View')
                ).oh();

                this.$el.html(first)
            }
        })
        $SecVw = Bb.V.x({
            initialize: function () {
                this.render()
            },
            render: function () {
                var sec = $.d().rm()
                    .A($.lb().A('My 2nd View'), $.br(), $.a()
                        .hr('first').A('Go to 1st View'))
                    .oh()
                this.$el.html(sec)
            }
        })
        z(); $('body').C('o').css('font-size', 80)
        $.d().id('ct')


        $$R({
            r: {'':'pg1',
                'first':'pg1',
                'sec':'pg2'
            },
            pg1: function(){
                new $FirstVw({el: $('#ct')})},
            pg2: function(){
                new $SecVw({el: $('#ct')})}

        })()

        Bb.h.start(

            //{pushState:true}
        )
    }  //push state not working???

SHOWVW=NORTR = function () {
    $.x()
    V1 = $$V({

        i: function () {
            this.r()
        },
        r: function () {
            this.$el.ht(this.model.get('Ms') + " from the View 1")
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

    greet = V1({
        Ms: "Hello world"
    })
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
RTPAMS = function () {z(); $.x().A('rtpams hahahahhahaha')

    r= $$R({

        routes:{
            "*x":"d",
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
    })()



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


    // r.oR('dfR', alert)
    r.on('route:gPo',function(id){
        alert('gPo# '+id)})
    r.oR('gPo', function(){alert(3)}) //both routes fire!
    //r.oR('dlF', alert)
    r.oR('ldV', function(rt,ac){alert(rt+'_'+ac)})
    Bb.h.start({pushState: true})
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
    r.oR('d',function(a){
        alert(a)
        $l('d:' + a)
    })//#hello -> 'hello'

    r.oR('e',function(a){
        alert(a)
        $l('e:' + a)
    })//#e -> 'e' (could do '/#/e')
    r.oR('d', function (a) {alert(a)
    })//#hello -> 'hello'
    r.oR('e', function (a) {alert(a)
    })//#e -> 'e' (could do '/#/e')

    w.h.start() // H$()

    _.in(2,function(){
        Bb.h.navigate('d',{trigger:true})
    })
    _.in(2,function(){
        Bb.h.navigate('d',{trigger:true})
    })


}
ITEMZ = function () {
    $.x()

    Ap = {M: {}, V: {}, C: {}}
    Ap.M.Item = $$M({})
    $$R({
        routes: {
            '': 'welcome',
            'itemlist': 'showItemList',
            'j': 'j',
            '': 'welcome',
            'wap/items': 'welcome1',
            'wap/items/itemlist': 'showItemList',
            'wap/items/j': 'j'
        },

        welcome: function () {
            $.bd().E().A($.h1('welcome'))

        },
        j: function () {    $l('asdfjfsdafsdf')
        },
        showItemList: function () {
            $.bd().E().A($.h1('show item list'))

        }

    })()

    i1 = Ap.M.Item({n: 'jason', g: 'mason'})
    i1.oR('j', function () {
        $.bd().E().A($.h1('j'))
    })
    i1 = Ap.M.Item({n: 'jason', g: 'mason'})

    r.A('/wap/items/j', function () {
        $.bd().E().A(
            $.h1('j')
        )
    })
    r.A('/wap/items/q', function () {
        $.bd().E().A($.h1('q'))

    })

    Bb.h.start({pushState:true})



    $.bt('add', function () {
        r.n('/wap/items/itemlist')
    })
    $.bt('add1', function () {
        $.A($.h1('k'))
        r.n('/wap/items/j')
    })
}
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
RTR0 = function (){$.x('y');$CSS({h1: {'font-size': 100}})

    r = $$R({
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
    })()



    Bb.h.start({pushState:true})

    _.in(3, function () {
        r.n('55c24c8f4198473b0d000004.png')
    })


    //looks for clicks on any anchor els where
    //href starts with '/' (no domain) and stop
    //bw from nv to it

    $.a().A($.h1('afsd'))

    $('body').on('click', 'a[href^="/"]', function (ev) {
        ev.preventDefault()
        r.n($(this).attr('href', {trigger: true}))
    })


}
RTENAV=function(){z()
    Rt=$$R({
        routes:{
            'po/:id'  :  'gp',
            '*a'      :  'dr'},
        dr:function(a){al(a)},
        gp:function(id){al('Get post '+id)}
    })
    r=Rt()
    r.A('mvc/rnav/j', function () {
        alert('!')
    })
    Bb.h.s({pushState: true})
    $.bt('hi', function(){r.n('po/2', {t:1}) }).a()
    $.bt('hi', function () {rt.n('po/2')})
    $.bt('hi1', function () {rt.n('po/4')})
    $.bt('hiiiii', function () {
        r.navigate('mvc/rnavv/j', {trigger:true})
    })
}
AHREF= RTR1 = function () {$.x('b')

    $R({
        routes:  {'': 'index',
            'wap/rtr/images/:id': 'image',
            view: 'viewImage'},
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
RTPAMS = function () {$.x().A('hahahahhahaha')
    r= $$R({
        rt: {'': 'home',

            'view': 'v',

            'new': 'nn',
            ':id': 'en',
            'posts/:id': 'gPo',
            '*acts': 'dfR', 'download/*path': 'dlF',
            ':route/:action': 'ldV'
        },

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

    })()
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
