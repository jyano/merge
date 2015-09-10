
KNOCKS0 = function () {

    format()


    s2(
        $.h1('KNOCKOUT'),


        $.p('F: ', _B().b('t', 'first')),
        $.p('L: ', _B().b('t', 'last')),
        $.p('F: ', ip().b('V', 'first')),
        $.p('L: ', ip().b('V', 'last')).id('last'),
        $.p('L: ', _B().b('t', 'firstLast')),

        $.button('caps').b('$', 'capL')
    )


    vm = {}

    vm.first = ko.observable('j')

    vm.last = ko.observable('y')

    vm.firstLast = ko.computed(function () {
        return vm.first() + ' ' + vm.last()
    })

    vm.capL = function () {
        vm.last(uC(vm.last()))
    }

    ko.applyBindings(vm)

}

KNOCKS1 = function () {
    format()

    s2(
        h2('Your seat reservations'),

        _t()(
            thead()(
                tr()(
                    th('Passenger name'),
                    th('Meal'),
                    th('Surcharge'),
                    th(''))
            ), tbody().b('fe', 'seats')(
                tr()(
                    td().b('t', 'n'),

                    td().b('t', 'm().mn'),

                    td()(
                        // sel() //.b({o:'$root.AM', V:'m', ot:'mn'})
                    ),

                    td().b('t', 'm().p')
                ))),


        bt('reserve').b('$', 'add')
    )


    AM = [
        {mn: "fries", p: 10},

        {mn: "fish", p: 20},

        {mn: "noodles", p: 30}
    ]


    sR = function (n, m) {

        return {
            n: n,
            m: ko.o(m)
        }
    }


    vm = {}

    vm.seats = ko.oa([
        sR('Jo', AM[0]), sR('Bo', AM[1])
    ])


    vm.add = function () {
        vm.seats.push(
            sR('', AM[2])
        )
    }


    ko.ab(vm)


}


TLVM = function () {

    var o = {

        ts: ko.oa([]),

        nT: ko.o()

    }

    o.inc = ko.c(function () {
        return ko.ut.af(
            o.ts(),
            function (t) {
                return !t.iD()
            }
        )
    })


    o.aT = function () {
        o.ts.push(Task({t: o.nT()}))
        o.nT("")
    }

    o.rmT = function (t) {
        o.ts.remove(t)
    }


    qJ('/ts', function (d) {

        o.ts(
            $.map(d,

                function (i) {
                    return Task(i)
                })
        )

    })


    return o
}


KNOCKS4 = function () {
    format()

    s2(
        h3('Tasks'),

        _f().b("S", "aT")(
            "Add task: ",

            ip().b('v', 'nT').ph("What?"),

            bt('Add').at('t', 's')
        ),

        ul(
            li()(
                cb().b('ch', 'iD'),
                ip().b("value:t, disable:iD"),
                lk('Del').b('ch', '$parent.rmT')
            )
        ).b("foreach:ts, visible:ts().length>0"),

        sp("You have"),
        _B("&nbsp;").b('t', "inc().length"),
        sp("inc task(s)"),
        sp("- beer!").b("visible: inc().length==0")
    )


    ko.ab(TLVM())

}


//
KNOCKS = function () {
    z()

    format()


    s2(
        ul().k('fs').b('E', "fs")(
            li().b(
                "text:$data,css:{selected:$data==$root.chFI()},click:$root.gtf"
            )
        )
    )

    MVM = function () {

        var o = {}

        o.fs = ['I', 'A', 'Se', 'Sp']

        o.chFI = ko.o()

        o.gtf = function (f) {
            o.chFI(f)
        }

        return o
    }


    ko.ab(MVM())

}


KNOCKS0 = function () {

    format()


    s2(h1('KNOCKOUT'),


        pg('F: ', _B().b('t', 'f')),
        pg('L: ', _B().b('t', 'l')),
        pg('F: ', ip().b('V', 'f')),
        pg('L: ', ip().b('V', 'l')).id('l'),
        pg('L: ', _B().b('t', 'fl')),

        bt('caps').b('$', 'capL'))


    vm = {}
    vm.f = ko.o('j')
    vm.l = ko.o('y')

    vm.fl = ko.c(function () {
        return vm.f() + ' ' + vm.l()
    })

    vm.capL = function () {
        vm.l(uC(vm.l()))
    }

    ko.ab(vm)

}
KNOCKS1 = function () {
    format()

    s2(
        h2('Your seat reservations'),

        _t()(
            thead()(
                tr()(
                    th('Passenger name'),
                    th('Meal'),
                    th('Surcharge'),
                    th(''))
            ), tbody().b('fe', 'seats')(
                tr()(
                    td().b('t', 'n'),

                    td().b('t', 'm().mn'),

                    td()(
                        // sel() //.b({o:'$root.AM', V:'m', ot:'mn'})
                    ),

                    td().b('t', 'm().p')
                ))),


        bt('reserve').b('$', 'add')
    )


    AM = [
        {mn: "fries", p: 10},

        {mn: "fish", p: 20},

        {mn: "noodles", p: 30}
    ]


    sR = function (n, m) {

        return {
            n: n,
            m: ko.o(m)
        }
    }


    vm = {}

    vm.seats = ko.oa([
        sR('Jo', AM[0]), sR('Bo', AM[1])
    ])


    vm.add = function () {
        vm.seats.push(
            sR('', AM[2])
        )
    }


    ko.ab(vm)


}
TLVM = function () {

    var o = {

        ts: ko.oa([]),

        nT: ko.o()

    }

    o.inc = ko.c(function () {
        return ko.ut.af(
            o.ts(),
            function (t) {
                return !t.iD()
            }
        )
    })


    o.aT = function () {
        o.ts.push(Task({t: o.nT()}))
        o.nT("")
    }

    o.rmT = function (t) {
        o.ts.remove(t)
    }


    qJ('/ts', function (d) {

        o.ts(
            $.map(d,

                function (i) {
                    return Task(i)
                })
        )

    })


    return o
}
KNOCKS4 = function () {
    format()

    s2(
        h3('Tasks'),

        _f().b("S", "aT")(
            "Add task: ",

            ip().b('v', 'nT').ph("What?"),

            bt('Add').at('t', 's')
        ),

        ul(
            li()(
                cb().b('ch', 'iD'),
                ip().b("value:t, disable:iD"),
                lk('Del').b('ch', '$parent.rmT')
            )
        ).b("foreach:ts, visible:ts().length>0"),

        sp("You have"),
        _B("&nbsp;").b('t', "inc().length"),
        sp("inc task(s)"),
        sp("- beer!").b("visible: inc().length==0")
    )


    ko.ab(TLVM())

}
KNOCKS = function () {
    z()

    format()


    s2(
        ul().k('fs').b('E', "fs")(
            li().b(
                "text:$data,css:{selected:$data==$root.chFI()},click:$root.gtf"
            )
        )
    )

    MVM = function () {

        var o = {}

        o.fs = ['I', 'A', 'Se', 'Sp']

        o.chFI = ko.o()

        o.gtf = function (f) {
            o.chFI(f)
        }

        return o
    }


    ko.ab(MVM())

}
KOTEMP = function () {
    z()

    format()

    s2(
        ip('r').at({name: 'choices', value: 'summary'}).b('ch', 'selectedView'), sp('summary'),

        ip('r').at({name: 'choices', value: 'details'}).b('ch', 'selectedView'), sp('details'),

        hr(),

        _d().b('T', "{name: templateToUse, foreach: articles }"),


        script("summary")(_d().b('t', 'title')),

        script('details')(
            _d()(
                h2().b('t', 'title'),
                pg().b('t', 'content'),
                bt('edit').b('$', '$parent.selectedArticle'))
        ),


        script('edit')(
            _d()(ip().b('v', 'title'),
                br(),
                ip().b('v', 'content'))
        ))


    viewModel = {


        articles: [
            {id: 1, title: "Article One", content: "Content for article one."},
            {id: 2, title: "Article Two", content: "Content for article two."},
            {id: 3, title: "Article Three", content: "Content for article three."}
        ],

        selectedView: ko.o("summary"),
        selectedArticle: ko.o()
    }


    viewModel.templateToUse = function (i) {

        return i === this.selectedArticle() ?
            'edit'
            : this.selectedView()

    }.bind(viewModel)


    ko.ab(viewModel)


}
KOTEMP2 = function () {
    z()

    _b()(
        scrp('tt')(
            h1('afsdfds')
        ),


        _d().b('T', "{name:'tt'}")
    )

    ko.ab({})


}



KOTEMP = function () {
    z()

    format()

    s2(
        ip('r').at({name: 'choices', value: 'summary'}).b('ch', 'selectedView'), sp('summary'),

        ip('r').at({name: 'choices', value: 'details'}).b('ch', 'selectedView'), sp('details'),

        hr(),

        _d().b('T', "{name: templateToUse, foreach: articles }"),


        script("summary")(_d().b('t', 'title')),

        script('details')(
            _d()(
                h2().b('t', 'title'),
                pg().b('t', 'content'),
                bt('edit').b('$', '$parent.selectedArticle'))
        ),


        script('edit')(
            _d()(ip().b('v', 'title'),
                br(),
                ip().b('v', 'content'))
        ))


    viewModel = {


        articles: [
            {id: 1, title: "Article One", content: "Content for article one."},
            {id: 2, title: "Article Two", content: "Content for article two."},
            {id: 3, title: "Article Three", content: "Content for article three."}
        ],

        selectedView: ko.o("summary"),
        selectedArticle: ko.o()
    }


    viewModel.templateToUse = function (i) {

        return i === this.selectedArticle() ?
            'edit'
            : this.selectedView()

    }.bind(viewModel)


    ko.ab(viewModel)


}

//??
KOTEMP2 = function () {
    z()

    _b()(
        scrp('tt')(
            h1('afsdfds')
        ),


        _d().b('T', "{name:'tt'}")
    )

    ko.ab({})


}

woorks()
function woorks(){
    //needs updating
    KOVIS = function () {
        format()


        s2(
            h1('you should seee if true!!!!').b('vs', 'ssm')
        )


        ko.ab(
            vm = {ssm: ko.o(true)}
        )


//vm.ssm(false); // ... now it's hidden
//vm.ssm(true); // ... now it's visible again


    }
    KOEACH = function () {
        format()


        s2(
            _t()(
                thead()(
                    tr()(
                        th()('First name'),
                        th()('Last name')
                    )
                ),


                tbody().b('E', 'people')(
                    tr()(
                        td().b('t', 'fn'),
                        td().b('t', 'ln'))
                )
            )
        )


        ko.ab({

            people: [
                {fn: 'B', ln: 'Bert'},
                {fn: 'Ch', ln: 'Char'},
                {fn: 'De', ln: 'Dent'}
            ]

        })


    }
    KOEACH2 = function () {

        format()


        s2(
            h4('People'),

            ul().b('E', 'people')(
                li()(
                    sp('pos/name: '),
                    sp().b('t', '$index'),
                    sp().b('t', 'n'),

                    lk(' X').b('$', '$parent.rem')
                )
            ),


            bt('add').b('$', 'add')
        )

        vm = function () {

            var o = {}

            o.people = ko.oa([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])

            o.add = function () {
                o.people.push({n: "New at " + new Date()})
            }

            o.rem = function () {
                o.people.remove(this)
            }

            return o
        }


        ko.ab(vm()
        )
    }




}

Task=  function (tt, done){   return {
    tt: ko.o(tt),
    done: ko.o(done)
}
}


FCB = function () {
    _$({
        C: 'u',
        t: 'read&write els “focusedness”  by binding it to  obserb',
        vm: {editingName: $o()},
        A: [
            $.ip().b("hasFocus: editingName"),
            $.h1('editing..').bVs('editingName'),
            $.bt('Edit').b("enable: !editingName(), click:function() { editingName(true) }")]
    })
}





initialData = [
    {name: "Well-Travelled Kitten", sales: 352, price: 75.95},
    {name: "Speedy Coyote", sales: 89, price: 190.00},
    {name: "Furious Lizard", sales: 152, price: 25.00},
    {name: "Indifferent Monkey", sales: 1, price: 99.95},
    {name: "Brooding Dragon", sales: 0, price: 6350},
    {name: "Ingenious Tadpole", sales: 39450, price: 0.35},
    {name: "Optimistic Snail", sales: 420, price: 1.50}
]

GRX = function () {
    $.x('x', 'grx1')


    $.d([


        $.d().at({'data-bind': 'simpleGrid: gridViewModel'}),
        $.bt('add item').at({'data-bind': 'click: addItem'}),
        $.bt('sort by name').at({'data-bind': 'click: sortByName'}),
        $.bt('   Jump to first page').at({

            'data-bind': 'click: jumpToFirstPage, enable: gridViewModel.currentPageIndex'

        })


    ]).K('liveExample')


}

PLANS = [

    {name: "Mercury", type: "rock"},
    {name: "Venus", type: "rock"},
    {name: "Earth", type: "rock"},
    {name: "Mars", type: "rock"},
    {name: "Jupiter", type: "gasgiant"},
    {name: "Saturn", type: "gasgiant"},
    {name: "Uranus", type: "gasgiant"},
    {name: "Neptune", type: "gasgiant"}
]

Planets = function () {
    this.planets = $oa(PLANS)
    this.typeToShow = $o("all");
    this.displayAdvancedOptions = $o(false);
    this.addPlanet = function (type) {
        this.planets.push({name: "New planet", type: type})
    }
    this.planetsToShow = ko.pc(function () {// Represents a filtered list of planets
        // i.e., only those matching the "typeToShow" condition
        var desiredType = this.typeToShow()
        if (desiredType == "all") return this.planets()
        return ko.utils.arrayFilter(this.planets(), function (planet) {
            return planet.type == desiredType
        });
    }, this);

    // Animation callbacks for the planets list
    this.showPlanetElement = function (el) {
        if (el.nodeType === 1) {
            $(el).hide().slideDown()
        }
    }

    this.hidePlanetElement = function (el) {
        if (el.nodeType === 1) {
            $(el).slideUp(function () {
                $(el).rm()
            })
        }
    }
}



VIRT = function () {
    _$({
        C: 'p',


        A: [
            $.d().b({
                randomOrder: true
            }),
            $.d('First'),
            $.d('Second'),
            $.d('Third'),
            $.ul().bE('mDateTime').A($.li().A($.ul())),
            $.uE("$root.matter.index.type()[$data]", [$.li().A()])]

    })
}

BLM = function () {

    var o = {}

    o.itemToAdd = ko.o('')

    o.allItems = ko.oa(['a', 'b', 'c'])

    o.selectedItems = ko.oa(['d'])

    o.addItem = function () {
        if (o.itemToAdd() != ''//&& o.allItems.indexOf(o.itemToAdd())<0
        ) {
            o.allItems.push(o.itemToAdd());
            o.itemToAdd('')
        }
    }


    o.removeSelected = function () {
        o.allItems.removeAll(o.selectedItems())
        o.selectedItems([])
    }

    o.sortItems = function () {
        o.allItems.sort()
    }
    return o
}





function err(){

    KOC=function(){$.z()

        $.ip('r').at({
            name:'choices',
            value:'summary'
        }).bC('selectedView');
        $.sp('summary').A()


        $.ip('r').at({name:'choices',value:'details'}).bC('selectedView'); $.sp('details').A(); $.hr().A()

        $.d().bT("{name: templateToUse, " + "foreach: articles }")

        $.scrp("summary").A().A($.d().bT('title')),
            $.scrp('details').A(
                $.d([$.h2().bT('title'), $.p().bT('content'),
                    $.bt('edit').b$('$parent.selectedArticle') ]) )

        $.scrp('edit').A().A(
            $.d([$.ip().bV('title'), $.br(), $.ip().bV('content') ])
        )
        ko.b({
            articles: [
                {id: 1,title: "Article One",content: "Content for article one."},
                {id: 2,title: "Article Two",content: "Content for article two."},
                {id: 3,title: "Article Three",content: "Content for article three."}

            ],
            selectedView: ko.o("summary"),
            selectedArticle: ko.o(),
            templateToUse:function(i){
                return i===vm.selectedArticle()? 'edit' :vm.selectedView()}

        })
    }
    SLOP=function(){
        $l('slop')
        $.z()
        $.p('Choose some countries youd like to visit:').A(

            $.sl().b({
                o:'cunts',
                so: 'chosenCunts'

            }).sz(5).mlt()

        )


        $b({
                cunts : $oa('Fra','Ger','Spa'),
                chosenCunts : $oa('Ger')
            }


        )// Initially, only Germany is selected

        _.in(function(){vm.chosenCunts.push('Fra')   },'*') // ... then later  France is selected too
    }

}

KOSCR=function(){z();$.bd().A(
    $.scrp('tt').A($.h1('afsdfds')), $.d().bT("{name:'tt'}")
); ko.b({})}






function kofl(){
    KOFL=function(){

        //filter the items using the filter text
        vm.filteredItems = ko.c(function() {
            var t= this, fl
            fl = t.filter().toLowerCase()
            if (!fl) {return t.items();
            } else {
                return ko.utils.arrayFilter(t.items(),
                    function(it) {
                        return ko.utils.stringStartsWith(
                            it.name().toLowerCase(), fl)
                    })
            }
        }, vm)
    }
    KOFL=function(){

        //filter the items using the filter text
        vm.filteredItems = ko.c(function() {
            var t= this, fl
            fl = t.filter().toLowerCase()
            if (!fl) {return t.items();
            } else {
                return ko.utils.arrayFilter(t.items(),
                    function(it) {
                        return ko.utils.stringStartsWith(
                            it.name().toLowerCase(), fl)
                    })
            }
        }, vm)
    }
    KOFLM=function(){$.z('x')

        d=    $.dI('hover').A(
            $.a().A(
                $.i('me').bT('matterId')
            )
        )


        d.mouseover(function(){ var d=this
            //Show the div onmouseover.
            $l("!!!")

            $(d).next("#box").gg()
        })


        d.mouseout( function(){function onMouseOut(obj) {

            //d

            //Hide to div onmouseout
            //Todo:none
        }})


        $.ul().bE('mDateTime').A($.li().A($.ul().bE('$root.matter.index.type()[$data]').A(
            $.li().A(d,
                $.dI('box').css('display','none').A(
                    $.a().A('Edit'), $.a().A('Copy'), $.a().A('Delete'))
            ),

            $.li().bT('matterTitle'),
            $.li().bT('matterComment')
        )))





    }
    KOFLM=function(){$.z('x')

        d=    $.dI('hover').A(
            $.a().A(
                $.i('me').bT('matterId')
            )
        )


        d.mouseover(function(){ var d=this
            //Show the div onmouseover.
            $l("!!!")

            $(d).next("#box").gg()
        })


        d.mouseout( function(){function onMouseOut(obj) {

            //d

            //Hide to div onmouseout
            //Todo:none
        }})


        $.ul().bE('mDateTime').A($.li().A($.ul().bE('$root.matter.index.type()[$data]').A(
            $.li().A(d,
                $.dI('box').css('display','none').A(
                    $.a().A('Edit'), $.a().A('Copy'), $.a().A('Delete'))
            ),

            $.li().bT('matterTitle'),
            $.li().bT('matterComment')
        )))





    }
}
function kobvs() {
    KOBVS = function () {
        _$({
            C: 'o', t: 'bind -visibile- to a boolean -great', vm: 'vs',
            el: [{ch: 'see me if true!', $vs: 'vs'}, {ch: 'if false!', $vs: '!vs()'}],     //   OK( 'vs'  )  // <- OK( 'vs', $o(1)  )  //  <-ok({ vs: $o(1)  })
            _: function () {
                vm.vs(0);
                _.in(function () {
                    vm.vs(1)
                })
            }
        })
    }
//bind 'visibile' to a boolean
    KOBVS = function () {
        $.z('y').h1('see me if true!')
            .bVs('vs')

        $b('vs', ko.o(1))


        _.in(function () {
            vm.vs(0)

            $.c$()

            _.in(function () {
                vm.vs(1)
                $.c$()
            })

        })
    }
}
function kos(){

KOS=function(){$.x()

    $.d('Profit Information').bS("{color:curProf()<0?'red':'black'}")
    ko.b({curProf: ko.o(50) })
    _.in(function(){  vm.curProf(-50)}, '*')
}
KOS=function() {_$({ c:'v', t:'css example.. will i use it?', vm:{  n: $o(1)  },
    A:$.d(['info']).b("style: {color: n()<0?'red':'black'}"),
    _:function(){ vm.n(-5) } })}


    }
KOS=function(){
    $l('kos')
    $.x()

    $.d('Profit Information').bS("{color:curProf()<0?'red':'black'}")
    ko.b({curProf: ko.o(50) })
    _.in(function(){  vm.curProf(-50)}, '*')
}




    KOAT = function () {
        _$({
            C: 'w', t: 'attributes.. unlikely to use?', vm: {url: $o("year-end.html"), tt: $o("stats report")},
            A: [$.aA('{href:url,title:tt}', 'report')]
        })
    }

