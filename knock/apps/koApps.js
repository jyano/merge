
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

CHL = function () {
    $.x('o');

    $.h1('shown!').slV()

    $.cC()

    ok()
}//err
//working!!!
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
    $.x('x', 'grx')

    /*
     $CSS({


     body { font-family: arial; font-size: 14px; }
     .liveExample { padding: 1em; background-color: #EEEEDD; border: 1px solid #CCC; max-width: 655px; }
     .liveExample input { font-family: Arial; }
     .liveExample b { font-weight: bold; }
     .liveExample p { margin-top: 0.9em; margin-bottom: 0.9em; }
     .liveExample select[multiple] { width: 100%; height: 8em; }
     .liveExample h2 { margin-top: 0.4em; }

     .ko-grid { margin-bottom: 1em; width: 25em; border: 1px solid silver; background-color:White; }
     .ko-grid th { text-align:left; background-color: Black; color:White; }
     .ko-grid td, th { padding: 0.4em; }
     .ko-grid tr:nth-child(odd) { background-color: #DDD; }
     .ko-grid-pageLinks { margin-bottom: 1em; }
     .ko-grid-pageLinks a { padding: 0.5em; }
     .ko-grid-pageLinks a.selected { background-color: Black; color: White; }
     .liveExample { height:20em; overflow:auto }
     //Mobile Safari reflows pages slowly, so fix the height to avoid the need for reflows

     li { list-style-type: disc; margin-left: 20px; }


     })

     */


    $.d().at({'data-bind': 'simpleGrid: gridViewModel'})
    $.bt('add item').at({'data-bind': 'click: addItem'})
    $.bt('sort by name').at({'data-bind': 'click: sortByName'})
    $.bt('   Jump to first page').at({
        'data-bind': 'click: jumpToFirstPage, enable: gridViewModel.currentPageIndex'
    })


    PagedGridModel = function (items) {

        this.items = ko.observableArray(items)

        this.addItem = function () {
            this.items.push({
                name: "New item", sales: 0, price: 100
            })
        }


        this.sortByName = function () {
            this.items.sort(function (a, b) {
                return a.name < b.name ? -1 : 1
            })
        }

        this.jumpToFirstPage = function () {
            this.gridViewModel.currentPageIndex(0)
        }

        this.gridViewModel = new ko.simpleGrid.viewModel({
            data: this.items,
            columns: [
                {headerText: "Item Name", rowText: "name"},
                {headerText: "Sales Count", rowText: "sales"},
                {
                    headerText: "Price", rowText: function (item) {
                    return "$" + item.price.toFixed(2)
                }
                }
            ],

            pageSize: 4
        })
    }


    ok(
        new PagedGridModel(initialData)
    )

}
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


PLANET = function () {
    $.x('g', 'Plan')


    $.p().A(
        $.lb().A(
            $.cC('displayAdvancedOptions'),
            'Display advanced options'
        )
    )

    $.p().A(
        'Show:',
        $.lb([$.ip()]),
        $.lb([$.ip()]),
        $.lb([$.ip()])
    )


    /*
     <p data-bind='fadeVisible: displayAdvancedOptions'>
     Show:
     <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
     <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
     <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
     </p>*/


    $.d([$.d([$.d()])])

    /*

     <div data-bind='template: { foreach: planetsToShow,
     beforeRemove: hidePlanetElement,
     afterAdd: showPlanetElement }'>
     <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
     </div>

     */


    $.p().A(
        $.bt('add rocky plan').b('click: addPlanet.bind($data, "rock")'),

        $.bt('add gas giant').b('click: addPlanet.bind($data, "gasgiant")')
    ).b('fadeVisible: displayAdvancedOptions')


    // Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
    // Could be stored in a separate utility library
    ok(new Planets())
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
IF=function(){
$l('if')
    $.x('x')

    $.cC('dispMs')

    $.sp('Disp ms')

    $.pI('dispMs', 'Here is a message. Astonishing')

    ok({
        dispMs: $o(1)
    })

} //does nuttin

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
SELOP=function(){d= $.d()

    $.x(null,
        'selectedOptions')



    $.p('Where you want to go?',
        $.sl().at({size: 5, multiple: true}).b({
            o: 'available',
            so: 'chosen'
        }))

    ok({
        available  : ko.oa(
            ['France', 'Germany', 'Spain']),
        chosen  : ko.oa(
            ['Germany'])})

    _.in(function(){
        vm.chosen.push('France')},'*')
}
KO0 =function(){
    $l('ko0')
    $.x(); $.ipV('n'); $.h1T('n')
    $.ulE('arr', [$.liT()])
    $.sb().b$('A')
    $.dA('b',100,300,200,'+').bT('n')

    ok({n:ko.o('zi'), arr: ko.oa(),
        A:function(){this.arr.push(this.n())} }) // ok('n', ko.o('zi'))

    _.in(1, function(){
        vm.n('girf')
        _.e(['a','b','c'], function(i){
            vm.arr.push(i)})},'*')
}//Uncaught TypeError: Cannot set property '__proto__' of undefined (ko.js)

//bE, observableArray
KOOA=function(){$.z()



    $.dE('peep', [

        $.p(

            $.bt('push',function(){

                vm.peep.push({f:'j',l:'y'})

            }),

            $.spT('f'),    ' ',   $.spT('l'))

    ])



    OK('peep', kA(
        {f:'B',l:'Bb'},
        {f:'C',l:'Cc'},
        {f:'D',l:'Dd'}))

}

 //bind 'option'
KOSL=function(n,v){$.x('o').h1('dests')

    $.slO('cunts')

    ok('cunts',
        ko.oa('Fran', 'Ger', 'Spa'))

    _.in(2,function(){
            vm.cunts.push('Chi')},
        '*'
    )
}

function err(){
KOIP=function(){$.z('x')

    $.p('Login name:').A( $.ipTi('un') )

    $.p('Pw:').A( $.pwTi('pw') )

    // $.p(['Pw:', $.pwTi('pw')])

    //<p> <input type="password" data-bind="textInput: userPassword" /></p>


    $('body').A(
        'vm: ',
        $.pre().bT('ko.toJSON($root, null, 2)')
    )



    ok({un: ko.o(''), pw: ko.o('abc')})
}
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
    KOAT = function () {$l('koat')
        $.x()


        $.aA('{href:url,title:tt}',
            'report')

        ok({

            url: ko.o("year-end.html"),
            tt: ko.o("Report including final year-end statistics")
        })
    }
}

KOSCR=function(){z();$.bd().A(
    $.scrp('tt').A($.h1('afsdfds')), $.d().bT("{name:'tt'}")
); ko.b({})}





KOFC=function(){$.x()

    $.p('Name:').A(

        $.ip().b({
            v:'editing',   v:'name',
            f:'editing'
        }),
        $.d('r').b({
            v:'!editing()',
            t:'name',
            $:'edit'
        })
    )

    $.p('Click the name to edit it; click elsewhere to apply changes')
    function VM(n) {var vm=this
        vm.name = ko.o(n)
        vm.editing = ko.o()
        vm.edit = function() {vm.editing(true) }}
    ok(new VM("Bert Bertington"))
}

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


function enable() {
//bind cb and bind ip to 'enable'
    KOEN = function () {
        $.x()

        $.p().A(
            $.cbC('hasPhone'), 'I have phone'
        )

        $.p('Your cellphone number').A(
            $.ip().b({v: 'num', en: 'hasPhone'}))


        ok({hasPhone: ko.o(0), num: ''})

    }
//bind cb and bind ip to 'enable'
    KOEN = function () {
        $.x()

        $.p().A(
            $.cbC('hasPhone'), 'I have phone'
        )

        $.p('Your cellphone number').A(
            $.ip().b({v: 'num', en: 'hasPhone'}))


        ok({hasPhone: ko.o(0), num: ''})

    }
}


    KOAT = function () {
        _$({
            C: 'w', t: 'attributes.. unlikely to use?', vm: {url: $o("year-end.html"), tt: $o("stats report")},
            A: [$.aA('{href:url,title:tt}', 'report')]
        })
    }



function html(){
//bind 'html'
    KOH=function(){$.z().dH('details')

        ok('details', ko.o())

        _.in(function(){
                vm.details(
                    "<em>For details, view report <a href='report.html'>here</a>.</em>")},
            '*')
    }


    KOH=function(){_$({C:"o",  t:'koh bind -html-', vm: {html: $o('<div>afsdasdfds</div>')},
        A: $.dH('html'),
        _:function(){vm.html("<span> ..tadah ! </span>")}})}


//bind 'html'
    KOH=function() {
        $.z().dH('details')

        ok('details', ko.o())

        _.in(function () {
                vm.details(
                    "<em>For details, view report <a href='report.html'>here</a>.</em>")
            },
            '*')
    }


    }



function zi() {
//basic databinding example
    ZI = function () {

        z()

        d = dva('b', 100, 300).b('t', 'name')


        i = ip().b('v', 'name').a()

        vm = {name: ko.o('zi')}

        ko.ab(vm)

    }
    ZI = function () {

        z()

        d = dva('b', 100, 300).b('t', 'name')


        i = ip().b('v', 'name').a()

        vm = {name: ko.o('zi')}

        ko.ab(vm)

    }
}


    messages=[
        {message:'zi',     score:100,     responses:[

            {response:'good coder',
                comments:[{comment:'..eh'}]},
            {response:'cool girl'}
        ]},
        {message:'yano',

            score:3,

            responses:[

                {response:'is cool guy',
                    comments:[

                        {comment:'hi'},
                        {comment:'hello'}]},

                {response:'a'},
                {response:'b'},
                {response:'fun'}]}, {message:'is awesome',score:0,responses:[
            {response:'afsdafsd'}]}, {message:'lame',score:20,responses:[
            {response:'weird',comments:[
                {comment:'not!!!!1'}]},
            {response:'lamer',comments:[
                {comment:'fuck ya'}]}]},
        {message:'rocks',score:4,responses:[]}
    ]
ROOT=function(){$.x('x')
    $.uE('fs', [
        $.li().b({
            t:'$data',
            s:'{selected:$data==$root.chFI()}',
            $:'$root.gtf'
        })
    ]).K('fs')

    ok({
        fs:['I','A','Se','Sp'],
        chFI: ko.o(),
        gtf: function(f){$l('click: ' + 'f: '+ f + ', this: '+this)
            f = f||'frog'
            vm.chFI(f)
        }
    })
}
ROOT=function(){$.x('x')
    $.uE('fs', [
        $.li().b({
            t:'$data',
            s:'{selected:$data==$root.chFI()}',
            $:'$root.gtf'
        })
    ]).K('fs')

    ok({
        fs:['I','A','Se','Sp'],
        chFI: ko.o(),
        gtf: function(f){$l('click: ' + 'f: '+ f + ', this: '+this)
            f = f||'frog'
            vm.chFI(f)
        }
    })
}