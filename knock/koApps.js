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



KOCL=function(){$.x('x').h2('Peeep')

    Per = function(n, ch) {var per=this
        per.n = n
        per.ch = ko.oa(ch)

        per.A = function(){  per.ch.push('new ch')    }

    }



    peep= [
        new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
        new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
        new Per("Charles", ["Cayenne", "Cleopatra"])
    ]


    $.uE('peep',[


        $.li().A(

            $.d([
                $.spT('n'), 'has',
                $.spT('ch().length'),
                'children &nbsp;',
                $.a$('New','A')

            ]),

            $.ulE('ch',[
                $.li([

                    $.spT(), $.spVs( '$root.showDT').A(
                        ' (child rendered at ', $.spT('$Dt().getSeconds()'),')'

                    )])

            ])

        )

    ])
    $.cbC('showDT').a2Lb('Show time:')

    //anonymous vm

    OK({  peep: peep, showDT: kO()   })




}


VIRTUALELS=function(){

    ko.bh.randomOrder = {
        init: function(el, valueAccessor) {

            // Build an array of child elements
            var ch = ko.vE.firstChild(el),
                CH = []
            while(ch){
                CH.push(ch)
                ch = ko.vE.nextSibling(ch)
            }
            // Remove them all, then put them back in a random order
            ko.vE.emptyNode(el)
            while(CH.length) {ko.vE.prepend(el, CH.splice(R(CH), 1)[0])}

        }

    }
}


function tsk(){
    TASKS=function(){$.z().h3('Tasks')

        $.f().bSb('aT').A().A("Add task: ",
            $.ip().bV('nT').ph("What?"),
            $.bt('Add')//.bS('s') // ??
        )

        $.ul().b({e:'ts', vs:'visible:ts().length>0' }).A($.li().A(
            $.cb().bC( 'iD' ),
            $.ip().b("value:t, disable:iD"),
            $.bt('Del').bC( '$parent.rmT' )))


        $.sp("You have").A()
        $.B("&nbsp;").bT( "inc().length").A()
        $.sp("inc task(s)").A()
        $.sp("- beer!").bV("inc().length==0").A()

        ko.b({

            itemToAdd:ko.o(''),

            allItems:ko.oa(['a','b','c']),

            selectedItems:ko.oa(['d']),
            addItem:function(){
                if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                    vm.allItems.push(vm.itemToAdd());
                    vm.itemToAdd('')
                }
            },

            removeSelected:function(){
                allItems.removeAll(vm.selectedItems())
                selectedItems([])
            },
            sortItems:function(){vm.allItems.sort()}
        })


        vm2={
            ts: ko.oa(),
            nT: ko.o(),
            inc : ko.c(function(){  var vm=this
                    return ko.ut.af(
                        vm.ts(), function(t){return !t.iD()
                        })
                }
            ),
            aT: function(){ this.ts.push({t: ko.o( o.nT()), iD: ko.o( ) }); this.nT('') },
            rmT: function(){ o.ts.remove(this) }
        }

        /*
         ko.b(vm2)
         //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
         */
    }
    TASK=function(){$.z('r')

    }
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
KOSCR=function(){z();$.bd().A(
    $.scrp('tt').A($.h1('afsdfds')), $.d().bT("{name:'tt'}")
); ko.b({})}
// kob= ko.observable.prototype; kob.rm= kob.remove
MENU=function(){$.z('b').h2('Your seat reservations')
    $.bt('reserve').b$('A')

    AM=[{n:'fries',p:10}, {n:'fish',p:20}, {n:'noodles',p:30}]



    $.t().A($.tHR(['psngr n','m','$$','']),$.tB().bE('seats').A(
            $.tr().A(
                $.td().bT('n'),
                $.td().bT('m().n'),
                $.td().A(
                    $.sl().b({
                        o : '$root.AM',
                        ot : 'm'    //v : 'm',
                    })
                ),
                $.td().bT('m().p')

            )

        )

    )

    ko.b({
        seats: $oa([
            {n:'Jo', m: ko.o(AM[0])},
            {n:'Bo', m: ko.o(AM[1])} ]),
        A: function(){
            vm.seats.push({n:'hahaha',
                m:ko.o( {n:'noodles', p:30})})}
    })

}



KOE=function(){$.x().t([$.tH([$.tr([$.th('F'),$.th('L')])]),
    $.tBE('peep', [
        $.tr([
            $.tdT('f'),
            ', ',
            $.tdT('l')
        ])
    ])])

    OK({ peep: [
        {f:'a',l:'A'},      {f:'b',l:'B'}, {f:'c',l:'C'}
    ]})

}


//add, conditional el
DIRT=function(){$.z('g').fm() //KOMASTERPIECE
    $.cm=  $.Cm=  function(cms,cc){cms.push({comment:cc})}
    $.spT=   function(a){return $.sp().b('text', a)}
    d= $.d('z')//.mar(20)
        .bE('m').A(
        $.h1().C('y','c').A(
            $.spT('message'), $.sp(' '), $.spT('score'),
            s1.A($.h2().A($.ip(400), $.bt('new r'))),
            $.h2().bE('responses').C('r').A(
                s1.A( $.spT('response') ),
                s2.A( $.h4(
                    //$.iP(400),
                    $.bt('new c')) ),
                $.h4().C('b').bE('comments').A(
                    s2.A($.spT('comment'))
                )
            )
        ),
        $.br(),
        $.br()
    )


    ko.b({
        m: ko.oa(messages=[{message:'zi', score:100, responses:[
            {response:'good coder',
                comments:[{comment:'..eh'}]},
            {response:'cool girl'}
        ]},

            {message:'yano', score:3,
                responses:[{response:'is cool guy',
                    comments:[{comment:'hi'}, {comment:'hello'}]},
                    {response:'a'}, {response:'b'}, {response:'fun'}]},
            {message:'is awesome',score:0,responses:[
                {response:'afsdafsd'}]},
            {message:'lame',score:20,responses:[
                {response:'weird',comments:[{comment:'not!!!!1'}]},
                {response:'lamer',comments:[{comment:'fuck ya'}]}]},
            {message:'rocks',score:4,responses:[]}
        ]),

        responses:ko.oa([
            {response:'one'},
            {response:'two'}
        ])
    })




    f=function(){
        vm.p.push({f:'jason',l:'yano'})
    }
}
KOFL=function(){

    //filter the items using the filter text
    vm.filteredItems = ko.c(function() {
        var t= this, fl

        fl = t.filter().toLowerCase()


        if (!fl) {return t.items();

        }

        else {
            return ko.utils.arrayFilter(t.items(),
                function(it) {

                    return ko.utils.stringStartsWith(
                        it.name().toLowerCase(), fl)
                })
        }
    }, vm)
}//???
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

KOOA=function(){$.x()
    OK('peep', $oa(        {f:'B',l:'Bb'}, {f:'C',l:'Cc'}, {f:'D',l:'Dd'} ))
    $.dE('peep', [  $.p(
        $.spT('f'),    ' ',   $.spT('l')
    ) ])
    $.bt('push',function(){
        vm.peep.push({f:'j',l:'y'})
    })
}
ADD=function(){$.x('x', 'course')

    OK({

        cl: $oa(),

        a: function(){
            this.cl.p({
                n:'j', c:$r()
            })
            return this
        }

    })


    $.s$('a','play'); //the order of these mets should reverse


    $.U('cl',  [

        'name is ', $.sT('n'), ' and gusta ', $.sT('c')

    ])

    vm.a().a().a()
    //https://www.youtube.com/watch?v=JGwRIbWWqjE
}


workss()
function workss(){

    each()
    function each(){


    }

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

KOGRID=function(){$.z().f().at({action: '/someServerSideHandler'}).A(
    $.p('You have asked for').A(
        $.sp('&nbsp;').bT('gifts().length'),
        'gift(s)'),

    $.t().bVs('gifts().length > 0').A(
        $.tH().A(
            $.tr().A(
                //tHR
                $.th().A('Gift name'),
                $.th().A('Price')
            )),



        $.tB().bE('gifts').A(
            $.tr().A(  //tBR
                $.td().A($.ip().K('required').b({v:'name', u:true})),

                $.td().A($.ip().K('required number')
                    .b({v:'price', u:true})),

                $.td().A(
                    $.a('delete').b$('$root.removeGift')
                )))),



    $.bt('add gift').b$('addGift'),

    $.sb().bEn('gifts().length > 0')

).A()

    Gift = function(gifts) {var vm = this
        vm.gifts = ko.oa(gifts)
        vm.addGift = function() {vm.gifts.push({name: "", price: "" }) }
        vm.removeGift = function(gift) { vm.gifts.remove(gift) }
        vm.save = function(form) {alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);

    }
    ko.b(new Gift([
        { name: "Tall Hat", price: "39.95"},
        { name: "Long Cloak", price: "120.00"}
    ]))
    // $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
}





// kob= ko.observable.prototype; kob.rm= kob.remove
MENU=function(){$.z('b').h2('Your seat reservations')
    $.bt('reserve').b$('A')

    AM=[{n:'fries',p:10}, {n:'fish',p:20}, {n:'noodles',p:30}]



    $.t().A($.tHR(['psngr n','m','$$','']),$.tB().bE('seats').A(
            $.tr().A(
                $.td().bT('n'),
                $.td().bT('m().n'),
                $.td().A(
                    $.sl().b({
                        o : '$root.AM',
                        ot : 'm'    //v : 'm',
                    })
                ),
                $.td().bT('m().p')

            )

        )

    )

    ko.b({
        seats: $oa([
            {n:'Jo', m: ko.o(AM[0])},
            {n:'Bo', m: ko.o(AM[1])} ]),
        A: function(){
            vm.seats.push({n:'hahaha',
                m:ko.o( {n:'noodles', p:30})})}
    })

}


FOREACH = function () {
    z()

    _d().b('fe', 'p')(
        pg(
            sp().b('t', 'f'),
            sp(' '),
            sp().b('t', 'l'))
    ).a()


    vm = {
        p: ko.oa([
            {f: 'B', l: 'Bb'},
            {f: 'C', l: 'Cc'},
            {f: 'D', l: 'Dd'}])
    }
    ko.ab(vm)


    f = function () {
        vm.p.push({f: 'jason', l: 'yano'})
    }
}

KOGRID=function(){$.z().f().at({action: '/someServerSideHandler'}).A(
    $.p('You have asked for').A(
        $.sp('&nbsp;').bT('gifts().length'),
        'gift(s)'),

    $.t().bVs('gifts().length > 0').A(
        $.tH().A(
            $.tr().A(
                //tHR
                $.th().A('Gift name'),
                $.th().A('Price')
            )),



        $.tB().bE('gifts').A(
            $.tr().A(  //tBR
                $.td().A($.ip().K('required').b({v:'name', u:true})),

                $.td().A($.ip().K('required number')
                    .b({v:'price', u:true})),

                $.td().A(
                    $.a('delete').b$('$root.removeGift')
                )))),



    $.bt('add gift').b$('addGift'),

    $.sb().bEn('gifts().length > 0')

).A()

    Gift = function(gifts) {var vm = this
        vm.gifts = ko.oa(gifts)
        vm.addGift = function() {vm.gifts.push({name: "", price: "" }) }
        vm.removeGift = function(gift) { vm.gifts.remove(gift) }
        vm.save = function(form) {alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);

    }
    ko.b(new Gift([
        { name: "Tall Hat", price: "39.95"},
        { name: "Long Cloak", price: "120.00"}
    ]))
    // $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
}


SPAM2 = function () {
    z()

    cbKO('Send me spam', 'wantsSpam').A()

    $.div().koBind('vs', 'wantsSpam')(
        'Preferred flavors of spam:',
        $.div().A(cbKO('Cherry', 'flav', 'cherry')),
        $.div().A(cbKO('Almond', 'flav', 'almond')),
        $.div().A(cbKO('Glut', 'flav', 'glut'))
    ).A()

    vm = {

        wantsSpam: ko.o(true),
        flav: ko.oa(["cherry", "almond"])
    }

    ko.aB(vm)

    //viewModel.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox

}
//bind cb 'checked' to boolean
SPAM=function(){$.x()

    $.cbC('spam').a2( $.p('spam? ') )

    $b({ spam: ko.o(1)})
    _.in(2, function(){vm.spam(0);$.c$()})
}
SPAM = function () {$l('spam')
    z()

    c = cbKO('Send me spam', 'wantsSpam').A()

    vm = {wantsSpam: ko.o(true)}

    ko.aB(vm)

}
//sort, remove
BTRLST1=function(){$.x('o')

    $.f().b({sb:'A'}).A('Add item:',
        $.ip().b({v:'tA', vU:'afterkeydown'}),
        $.sb('Add').b('en', 'tA().length > 0')
    )

    $.p('Your values:')

    $.sl().mlt().b({ o:'all', so:'sl' })

    $.d([
        $.bt('Rem').b({$:'xSl', en:'sl().length > 0'}),
        $.bt('Srt').b({$:'srt', en:'all().length > 1'})
    ])

    Lst = function () {
        this.tA = $o('')
        this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30] )
        this.sl = $oa(['Hm'])
        this.A = function () {
            if (this.tA()!=''&& this.all.indexOf(this.tA())<0){
                this.all.push(this.tA())
                this.tA('')
            }
        }

        this.xSl = function () {
            this.all.removeAll(this.sl())
            this.sl([])
        }
        this.srt = function() { this.all.sort() }
    }
    $b(new Lst())
}
function classic(){
    BETTERLIST = function () {
        z()

        $.d()(
            fo().b('S', 'addItem')(
                sp('add item'),

                tx().b({
                    v: 'itemToAdd'//,vu:'afterkeydown'
                }),

                sm('add').b('ea', 'itemToAdd().length>0')),


            _d()(
                sp('Your values:'),
                sel().h(5).b({
                    o: 'allItems',
                    so: 'selectedItems'
                })
            ),

            _d()(
                bt('remove').b({
                    c: 'removeSelected',
                    ea: 'selectedItems().length>0'
                }),

                bt('sort').b({
                    c: 'sortItems',
                    ea: 'allItems().length>1'
                }))
        ).a()

        ko.ab(o = BLM())
    }
}

CHERRY=function(){$.x('o')
    OK({

        wants:$o(1),

        flav:  $oa(["cherry","almond"])

    })

    $.p(  $.sp('spam?'),   $.cC('wants')   )

    $.d([  'Preferred flavors of spam:',

        $.d([

            $.p(  $.sp('cherry'),
                $.cC('flav').v('cherry')
            ),

            $.d([$.p($.sp('Almond'),   $.cC('flav').v('almond'))]),

            $.p($.sp('Glut'), $.cC('flav').v('glut'))

        ])

    ]).bVs('wants')

    $.in(function(){

        vm.flav.push("glut")
    })

}
TWT=function(){$.x('r','twt')


    OK({

        un : ko.o('@ex'),

        da : ko.o(),

        g:function(){
            vm.da({

                dt: $D(),

                MS: _.m(['a','b'],
                    function(t){return {ms:vm.un()+':'+t}})
            })},

        clr: function(){ vm.da([]) }
        //<- $.bt('Clear tweets').b$(' $parent.clearResults')
    })


    $.fSb('g',[  'un:',
        $.ipV('un'),   $.sb('Get')
    ])


    $.dW('da',[
        $.h3('dt:', $.spT('dt') ),

        $.olE('MS', $.liT('ms')),

        $.bt$('clr','$parent.clr')

    ]).A()

}


//broken
TASKS=function(){$.z().h3('Tasks')

    $.f().bSb('aT').A().A("Add task: ",
        $.ip().bV('nT').ph("What?"),
        $.bt('Add')//.bS('s') // ??
    )

    $.ul().b({e:'ts', vs:'visible:ts().length>0' }).A($.li().A(
        $.cb().bC( 'iD' ),
        $.ip().b("value:t, disable:iD"),
        $.bt('Del').bC( '$parent.rmT' )))


    $.sp("You have").A()
    $.B("&nbsp;").bT( "inc().length").A()
    $.sp("inc task(s)").A()
    $.sp("- beer!").bV("inc().length==0").A()

    ko.b({

        itemToAdd:ko.o(''),

        allItems:ko.oa(['a','b','c']),

        selectedItems:ko.oa(['d']),
        addItem:function(){
            if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                vm.allItems.push(vm.itemToAdd());
                vm.itemToAdd('')
            }
        },

        removeSelected:function(){
            allItems.removeAll(vm.selectedItems())
            selectedItems([])
        },
        sortItems:function(){vm.allItems.sort()}
    })


    vm2={
        ts: ko.oa(),
        nT: ko.o(),
        inc : ko.c(function(){  var vm=this
                return ko.ut.af(
                    vm.ts(), function(t){return !t.iD()
                    })
            }
        ),
        aT: function(){ this.ts.push({t: ko.o( o.nT()), iD: ko.o( ) }); this.nT('') },
        rmT: function(){ o.ts.remove(this) }
    }

    /*
     ko.b(vm2)
     //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
     */
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

function tutApps(){KOTUT1=function(){

    $l('kotut1')

    z()




}
    COURSE=function(){$.x('x')

        //https://www.youtube.com/watch?v=JGwRIbWWqjE

        $.h1('monkey').bT('monkey')
        $.iV('monkey')
        $.sb('hello').b$('A')

        $.uE('list',[$.li(['my name is ',$.sT('n'),' and i like to play ',$.sT('c')])])



        vm={
            monkey: ko.o(),
            list: ko.oa(),
            A:function(){this.list.push({n:'j', c:$r()})}
        }

        vm.monkey('elephant')

        ok(vm)


    }
    COURSE=function(){$.x('x')
        $.s$('a','play'); $.U('cl',[
            'my name is ',$.sT('n'),
            ' and i like to play ',
            $.sT('c')])

        ok({
            cl: ko.oa(),
            a:function(){
                this.cl.p({n:'j',c:$r()})
                return this}
        })

        vm.a().a().a()

        //https://www.youtube.com/watch?v=JGwRIbWWqjE
    }
    COURSE=function(){$.x('x')

        //https://www.youtube.com/watch?v=JGwRIbWWqjE

        $.h1('monkey').bT('monkey')
        $.iV('monkey')
        $.sb('hello').b$('A')

        $.uE('list',[$.li(['my name is ',$.sT('n'),' and i like to play ',$.sT('c')])])



        vm={
            monkey: ko.o(),
            list: ko.oa(),
            A:function(){this.list.push({n:'j', c:$r()})}
        }

        vm.monkey('elephant')

        ok(vm)


    }
    COURSE=function(){$.x('x')
        $.s$('a','play'); $.U('cl',[
            'my name is ',$.sT('n'),
            ' and i like to play ',
            $.sT('c')])

        ok({
            cl: ko.oa(),
            a:function(){
                this.cl.p({n:'j',c:$r()})
                return this}
        })

        vm.a().a().a()

        //https://www.youtube.com/watch?v=JGwRIbWWqjE
    }
    TWT=function(){$.z()
        $.fSb('g',[ 'u:', $.ipV('un'), $.sb('Get') ])
        $.dW('da',[
            $.h3('dt:', $.spT('dt') ),
            $.olE('MS', $.liT('ms')),
            $.bt$('Clr',' $parent.clr')
        ])
        ko.b({
            un : $o('@ex'),
            da : $o(),
            g:function(){vm.da({
                dt: $D(),
                MS: _.m(['a','b'],
                    function(t){return {ms:vm.un()+':'+t}})
            })},

            clr: function(){ vm.da() }
        })
    }
    TWT=function(){$.x()

        $.fSb('g',[ 'u:', $.ipV('un'), $.sb('Get') ]).A()

        $.dW('da',[
            $.h3('dt:', $.spT('dt') ),
            $.olE('MS',
                $.liT('ms')),

            $.bt$('clr',' $parent.clr')

        ])


        ok({
            un : ko.o('@ex'),
            da : ko.o(),
            g:function(){vm.da({
                dt: $D(),
                MS: _.m(['a','b'],
                    function(t){return {ms:vm.un()+':'+t}})
            })},
            clr: function(){ vm.da([]) }
            //<- $.bt('Clear tweets').b$(' $parent.clearResults')
        })
    }
    TWT=function(){$.x()

        $.fSb('g',[ 'u:', $.ipV('un'), $.sb('Get') ]).A()

        $.dW('da',[
            $.h3('dt:', $.spT('dt') ),
            $.olE('MS',
                $.liT('ms')),

            $.bt$('clr',' $parent.clr')

        ])


        ok({
            un : ko.o('@ex'),
            da : ko.o(),
            g:function(){vm.da({
                dt: $D(),
                MS: _.m(['a','b'],
                    function(t){return {ms:vm.un()+':'+t}})
            })},
            clr: function(){ vm.da([]) }
            //<- $.bt('Clear tweets').b$(' $parent.clearResults')
        })
    }}

function servApps(){

/// WHAHTAHTHAHTHATH/???@?@?@???@@@  THIS IS SSERVER SIDE ADFSKLDJFKSDJF;JFAKAL;
    KOSERV=function(){
        var express    = require('express'), app  = module.exports = express.createServer()
        app.configure(function(){
            app.use(express.bodyParser());
            app.use(app.router);
            app.use(express.static(__dirname + '/static'));  //static stuff
            app.use(express.static(__dirname + '/../libs')); //js files
        });
        app.get('/tasks', function (_,response) {
            response.send(
                [ { "title": "Wire the money to Panama", "isDone": true }
                    , { "title": "Get hair dye, beard trimmer, dark glasses and \"passport\"", "isDone": false}
                    , { "title": "Book taxi to airport", "isDone": false }
                    , { "title": "Arrange for someone to look after the cat", "isDone": false }
                ]);
        });
        app.post('/tasks', function (request,response) {
            response.send(request.body); //echo
        });
        app.listen(process.argv[2]||8080);
        process.on('uncaughtException', function(err) {
            console.log(JSON.stringify(err));
        });
        console.log('servers up!');
    }


    KOSERV=function(){
        var express    = require('express')
            , app        = module.exports = express.createServer()
            ;

        app.configure(function(){
            app.use(express.bodyParser());
            app.use(app.router);
            app.use(express.static(__dirname + '/static'));  //static stuff
            app.use(express.static(__dirname + '/../libs')); //js files
        });

        app.get('/tasks', function (_,response) {
            response.send(
                [ { "title": "Wire the money to Panama", "isDone": true }
                    , { "title": "Get hair dye, beard trimmer, dark glasses and \"passport\"", "isDone": false}
                    , { "title": "Book taxi to airport", "isDone": false }
                    , { "title": "Arrange for someone to look after the cat", "isDone": false }
                ]);
        });


        app.post('/tasks', function (request,response) {
            response.send(request.body); //echo
        });

        app.listen(process.argv[2]||8080);

        process.on('uncaughtException', function(err) {
            console.log(JSON.stringify(err));
        });

        console.log('servers up!');
    }

    KOSERV=function(){
        var express    = require('express'), app        = module.exports = express.createServer()
        app.configure(function(){
            app.use(express.bodyParser());
            app.use(app.router);
            app.use(express.static(__dirname + '/static'));  //static stuff
            app.use(express.static(__dirname + '/../libs')); //js files
        });
        app.get('/tasks', function (_,response) {
            response.send(
                [ { "title": "Wire the money to Panama", "isDone": true }
                    , { "title": "Get hair dye, beard trimmer, dark glasses and \"passport\"", "isDone": false}
                    , { "title": "Book taxi to airport", "isDone": false }
                    , { "title": "Arrange for someone to look after the cat", "isDone": false }
                ]);
        });
        app.post('/tasks', function (request,response) {
            response.send(request.body); //echo
        });
        app.listen(process.argv[2]||8080);
        process.on('uncaughtException', function(err) {
            console.log(JSON.stringify(err));
        });
        console.log('servers up!');
    }
//bind bt 'click' to parent.rem


    KOSERV=function(){
        var express    = require('express'), app        = module.exports = express.createServer()
        app.configure(function(){
            app.use(express.bodyParser());
            app.use(app.router);
            app.use(express.static(__dirname + '/static'));  //static stuff
            app.use(express.static(__dirname + '/../libs')); //js files
        });
        app.get('/tasks', function (_,response) {
            response.send(
                [ { "title": "Wire the money to Panama", "isDone": true }
                    , { "title": "Get hair dye, beard trimmer, dark glasses and \"passport\"", "isDone": false}
                    , { "title": "Book taxi to airport", "isDone": false }
                    , { "title": "Arrange for someone to look after the cat", "isDone": false }
                ]);
        });
        app.post('/tasks', function (request,response) {
            response.send(request.body); //echo
        });
        app.listen(process.argv[2]||8080);
        process.on('uncaughtException', function(err) {
            console.log(JSON.stringify(err));
        });
        console.log('servers up!');
    }}

function virtApps(){VIRT=function(){$.z()
    $.d().b({randomOrder:true})
    $.d('First')
    $.d('Second')
    $.d('Third')
    ko.bindingHandlers.randomOrder = {

        init: function(el, valAcc) {
            // Pull out each of the child els into an array
            var childElems = []
            while(el.firstChild)
                childElems.push(el.removeChild(el.firstChild))
            // Put them back in a random order
            while(childElems.length) {
                var randomIndex = M.fl(M.rn() * childElems.length),
                    chosenChild = childElems.splice(randomIndex, 1);
                el.appendChild(chosenChild[0]);
            }
        }
    }
}
//$.ul().bE('mDateTime').A( $.li().A( $.ul() ) )
//   <li>
// <ul data-bind="foreach: $root.matter.index.type()[$data]">
//  <li>
//components



    VIRT=function(){$.z()

        $.d().b({randomOrder:true})
        $.d('First')
        $.d('Second')

        $.d('Third')
        ko.bindingHandlers.randomOrder = {

            init: function(elem, valueAccessor) {
                // Pull out each of the child elements into an array
                var childElems = []
                while(elem.firstChild)
                    childElems.push(elem.removeChild(elem.firstChild))
                // Put them back in a random order
                while(childElems.length) {
                    var randomIndex = M.fl(M.rn() * childElems.length),
                        chosenChild = childElems.splice(randomIndex, 1);
                    elem.appendChild(chosenChild[0]);
                }
            }
        }


    }

    VIRTP=function(){$z()

        ko.bindingProvider.instance.preprocessNode = function(node) {
            // Only react if this is a comment node of the form <!-- template: ... -->
            if (node.nodeType == 8) {
                var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
                if (match) {
                    // Create a pair of comments to replace the single comment
                    var c1 = document.createComment("ko " + match[1]),
                        c2 = document.createComment("/ko");
                    node.parentNode.insertBefore(c1, node);
                    node.parentNode.replaceChild(c2, node);

                    // Tell Knockout about the new nodes so that it can apply bindings to them
                    return [c1, c2];
                }
            }
        }


    }
    VIRTP=function(){$z()
        ko.bindingProvider.instance.preprocessNode = function(node) {
            // Only react if this is a comment node of the form <!-- template: ... -->
            if (node.nodeType == 8) {
                var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
                if (match) {
                    // Create a pair of comments to replace the single comment
                    var c1 = document.createComment("ko " + match[1]),
                        c2 = document.createComment("/ko");
                    node.parentNode.insertBefore(c1, node);
                    node.parentNode.replaceChild(c2, node);
                    // Tell Knockout about the new nodes so that it can apply bindings to them
                    return [c1, c2];
                }
            }
        }


    }

    VWW=function(){$.x()


        d= $.d('r',200).A(
            $.h1('hello'),
            $.bt(__)
        )

        //d.$(function(){v.r()})

        mOv=function(){$l('mouse over !')}


        v = $V({

            e: {

                'click button': function(){ $l('$') },

                $$: 'r',

                v: mOv
            },


            q : d,

            r : function(){

                alert('double click')

                $.bd().C(   $r()    )

            }


        })()

    }
    VIRTUALELS=function(){

        ko.bh.randomOrder = {
            init: function(el, valueAccessor) {

                // Build an array of child elements
                var ch = ko.vE.firstChild(el),
                    CH = []
                while(ch){
                    CH.push(ch)
                    ch = ko.vE.nextSibling(ch)
                }
                // Remove them all, then put them back in a random order
                ko.vE.emptyNode(el)
                while(CH.length) {ko.vE.prepend(el, CH.splice(R(CH), 1)[0])}

            }

        }
    }}

function bookApp(){
    BOOK=function(){ $.fm()
        toBook = function(){Y.run('book')}
        s1.A(
            $.h1('BOOK').$(toBook) ,
            bookName = $.ip(),
            $.bt('new book',function(){
                $.P('newBook', {name: bookName.V()},
                    toBook)}),
            $.hr())

        $.Gj('books',function(bks){
            s1.A($.h3('books:'))
            _.e(bks, function(bk){
                s1.A( $.sp().C('x').$(function(){
                        $.P('delBook',{book: bk._id},toBook)
                    }),
                    $.bt(bk.name,function(){
                        s2.A($.h2('CHAPTER: '+bk.name),
                            chapterTitleInput=$.ip(),
                            $.bt('new chapter',
                                function(){$.P('newChapter',{
                                    chapterTitle: chapterTitleInput.V(),
                                    book:bk._id
                                },function(){chapterView(bk, c)})}), $.hr())
                        $.eGj('chapters',{book:bk._id}, function(ch){
                            s2.A($.bt(ch.title, function(){
                                chapterView(bk,ch)}), $.br(2))})
                    }), $.br(2))})})


        chapterView=function(b,c){ s2.E();s1.E();
            s1.A($.h1('BOOK').$( toBook) )
            $.Gj('chapters',{book:bk._id}, function(chapters){
                s1.A($.h3('chapters:'))
                s2.A($.h3('pages:'))
                _.e(chapters,function(ch){
                    s1.A($.sp('x').$(function(){$.P('delChapter',{chapter: ch._id}, function(){chapterView(bk, ch)})}),
                        $.bt(ch.title, function(){chapterView(bk,ch)}), $.br(2))})})
            s2.A($.h1('chapter: '+ch.title))
            s2.A( pageNameInput=$.ip(),
                $.bt('new page', function(){
                    $.P('newPage',{pageName :pageNameInput.V(), chapter:ch._id
                    })}), $.hr())
            $.eGj('/pages', {chapter: ch._id}, function(pg){
                s2.A($.bt(pg.name, function(){pageView(bk,ch,pg)
                }), $.br(2)  )})
        }}
    pageView = function(bk, ch, pg){s1.E();s2.E()
        s1.A($.h1('BOOK').$(ldr('book')) )
        s1.A($.h1('CHAPTER '+ ch.title).$(function(){chapterView(book,ch )}))
        $.Gj('/pages',{chapter: ch._id},
            function(pgs){s1.A($.h3('pages'))
                _.e(pgs,function(pg){
                    s1.A($.bt(pg.name,function(){sectionView(ch)}), $.br(2)
                    )})})
        s2.A($.h1('page: '+pg.name))
        $.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
            function(sc){s2.A($.bt(sc.section, function(){sectionView(bk,ch,pg)}), $.br(2)
            )})
    }
    OBJECT=function(){$.fm()
        s1.A('your objects', $.br(2), t= $.ip(),
            $.bt('new object',function(){$.P('newObj',
                {t: t.V()})}))
        $.eG('objs', function(o){

            s1.A($.h2(o.t).$(function(){
                s2.E($.h1(o.t), tt=$.ip(),
                    $.bt('new sub-object',function(){
                        $.P('newObj', {t: tt.V()})}))}))
            _.e(o.i,function(i){ s1.A(h3(i)) })
        })

    }
}
function dirt(){KOMASTERPIECE = DIRT = function () {
    z()


    p1 = push1

    p2 = push2

    newComment = function (comments, comment) {
        comments.push({comment: comment})
    }

    TextBindingSpan = spb = function (a) {

        return $.span().b('text', a)

    }


    $.div('black').mg(20).fe('m')(
        $.h1().C('y', 'c')(
            TextBindingSpan('message'),

            $.span(' '),

            TextBindingSpan('score'),

            p1($.h2(
                $.input(400),

                $.button('new r')
            )),


            $.h2().feD('responses').C('r').A(
                p1.A(TextBindingSpan('response')),

                p2.A(
                    $.h4(
                        $.input(400), $.button('new c'))
                ),

                $.h4().C('b').feD('comments').A(
                    p2.A(
                        TextBindingSpan('comment'))))),


        $.br(),

        $.br()
    ).A()


    vm = {
        m: ko.oa(messages),
        responses: ko.oa([{response: 'one'}, {response: 'two'}])
    }


    ko.applyBindings(vm)


    f = function () {
        vm.p.push({f: 'jason', l: 'yano'})
    }
}
    DIRT=function(){$.z('g').fm() //KOMASTERPIECE
        $.cm=  $.Cm=  function(cms,cc){cms.push({comment:cc})}
        $.spT=   function(a){return $.sp().b('text', a)}
        d= $.d('z')//.mar(20)
            .bE('m').A(
            $.h1().C('y','c').A(
                $.spT('message'), $.sp(' '), $.spT('score'),
                s1.A($.h2().A($.ip(400), $.bt('new r'))),
                $.h2().bE('responses').C('r').A(
                    s1.A( $.spT('response') ),
                    s2.A( $.h4(
                        //$.iP(400),
                        $.bt('new c')) ),
                    $.h4().C('b').bE('comments').A(
                        s2.A($.spT('comment'))
                    )
                )
            ),
            $.br(),
            $.br()
        )


        ko.b({
            m: ko.oa(messages=[{message:'zi', score:100, responses:[
                {response:'good coder',
                    comments:[{comment:'..eh'}]},
                {response:'cool girl'}
            ]},

                {message:'yano', score:3,
                    responses:[{response:'is cool guy',
                        comments:[{comment:'hi'}, {comment:'hello'}]},
                        {response:'a'}, {response:'b'}, {response:'fun'}]},
                {message:'is awesome',score:0,responses:[
                    {response:'afsdafsd'}]},
                {message:'lame',score:20,responses:[
                    {response:'weird',comments:[{comment:'not!!!!1'}]},
                    {response:'lamer',comments:[{comment:'fuck ya'}]}]},
                {message:'rocks',score:4,responses:[]}
            ]),

            responses:ko.oa([
                {response:'one'},
                {response:'two'}
            ])
        })




        f=function(){
            vm.p.push({f:'jason',l:'yano'})
        }
    }
    DIRT=function(){$.z('g').fm() //KOMASTERPIECE
        $.cm=  $.Cm=  function(cms,cc){cms.push({comment:cc})}
        $.spT=   function(a){return $.sp().b('text', a)}
        d= $.d('z')//.mar(20)
            .bE('m').A(
            $.h1().C('y','c').A(
                $.spT('message'), $.sp(' '), $.spT('score'),
                s1.A($.h2().A($.ip(400), $.bt('new r'))),
                $.h2().bE('responses').C('r').A(
                    s1.A( $.spT('response') ),
                    s2.A( $.h4(
                        //$.iP(400),
                        $.bt('new c')) ),
                    $.h4().C('b').bE('comments').A(
                        s2.A($.spT('comment'))
                    )
                )
            ),
            $.br(),
            $.br()
        )


        ko.b({
            m: ko.oa(messages=[{message:'zi', score:100, responses:[
                {response:'good coder',
                    comments:[{comment:'..eh'}]},
                {response:'cool girl'}
            ]},

                {message:'yano', score:3,
                    responses:[{response:'is cool guy',
                        comments:[{comment:'hi'}, {comment:'hello'}]},
                        {response:'a'}, {response:'b'}, {response:'fun'}]},
                {message:'is awesome',score:0,responses:[
                    {response:'afsdafsd'}]},
                {message:'lame',score:20,responses:[
                    {response:'weird',comments:[{comment:'not!!!!1'}]},
                    {response:'lamer',comments:[{comment:'fuck ya'}]}]},
                {message:'rocks',score:4,responses:[]}
            ]),

            responses:ko.oa([
                {response:'one'},
                {response:'two'}
            ])
        })




        f=function(){
            vm.p.push({f:'jason',l:'yano'})
        }
    }}

function taskApp(){Task=function(d){
    return {t: $o(d.t), iD: $o(d.iD)}
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
    TASKS=function(){$.z().h3('Tasks')

        $.f().bSb('aT').A().A("Add task: ",
            $.ip().bV('nT').ph("What?"),
            $.bt('Add')//.bS('s') // ??
        )

        $.ul().b({e:'ts', vs:'visible:ts().length>0' }).A($.li().A(
            $.cb().bC( 'iD' ),
            $.ip().b("value:t, disable:iD"),
            $.bt('Del').bC( '$parent.rmT' )))


        $.sp("You have").A()
        $.B("&nbsp;").bT( "inc().length").A()
        $.sp("inc task(s)").A()
        $.sp("- beer!").bV("inc().length==0").A()

        ko.b({

            itemToAdd:ko.o(''),

            allItems:ko.oa(['a','b','c']),

            selectedItems:ko.oa(['d']),
            addItem:function(){
                if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                    vm.allItems.push(vm.itemToAdd());
                    vm.itemToAdd('')
                }
            },

            removeSelected:function(){
                allItems.removeAll(vm.selectedItems())
                selectedItems([])
            },
            sortItems:function(){vm.allItems.sort()}
        })


        vm2={
            ts: ko.oa(),
            nT: ko.o(),
            inc : ko.c(function(){  var vm=this
                    return ko.ut.af(
                        vm.ts(), function(t){return !t.iD()
                        })
                }
            ),
            aT: function(){ this.ts.push({t: ko.o( o.nT()), iD: ko.o( ) }); this.nT('') },
            rmT: function(){ o.ts.remove(this) }
        }

        /*
         ko.b(vm2)
         //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
         */
    }
    TASK=function() {
        $.z('r')
    }}

/*
 TPLIST=function(){

 $.h2('Your seat reservations').A(

 $.sp().bT(''seats().length)
 )


 $.h3(' Total surcharge:').bVs('totalSurcharge() > 0').A(
 $.s().bT('totalSurcharge().toFixed(2)')
 )

 $.t().A(
 $.tH().A(tr().A($.th().A('Pass name'), $.th().A('Meal'), $.th('charge') )),
 $.tB().bTp("{name:'reservationTemplate', foreach: seats}")
 )

 $.bt('Reserve another seat').b({
 $:'addSeat',
 en:'seats().length < 5'
 })



 $('<script type="text/x-jquery-tmpl" id="reservationTemplate" >').A(
 $.tr().A(
 $.td().A($.ip().bV('name')),
 $.td().A($.sl().b({o:'availableMeals', ot:'mealName'})),
 $.td().A($.a('Remove').b$('remove')) )
 )



 // Raw catalog data - would come from the server
 var availableMeals = [
 { mealName: "Standard (sandwich)", price: 0 },
 { mealName: "Premium (lobster)", price: 34.95 },
 { mealName: "Ultimate (whole zebra)", price: 290 }
 ]

 // Class to represent a row in the reservations grid

 seatReservation = function(name) {
 this.name = name;
 this.availableMeals = availableMeals;
 this.meal = ko.observable(availableMeals[0]);
 this.remove = function() { viewModel.seats.remove(this) }
 this.formattedPrice = ko.dependentObservable(function() {
 var price = this.meal().price;
 return price ? "$" + price.toFixed(2) : "None";
 }, this);
 }

 // Overall viewmodel for this screen, along with initial state
 vm = {
 seats: ko.observableArray([
 new seatReservation("Steve"),
 new seatReservation("Bert")
 ])
 ,addSeat: function() {
 this.seats.push(new seatReservation());
 }
 }

 vm.totalSurcharge = ko.dependentObservable(function() {
 var total = 0;
 for (var i = 0; i < this.seats().length; i++)
 total += this.seats()[i].meal().price;
 return total;
 }, vm);


 ko.b(vm)





 }
 TPLIST=function(){$.x()
 Meals = [
 { m: "sand", p: 0 },
 { m: "lobst", p: 34.95 },
 { m: "zebra", p: 290 }
 ]


 $.h2('Your rsv').A( $.spT('seats().length') )
 $.h3('Cost:').bVs('cost()>0').A( $.spT('cost().toFixed(2)') )


 $.t([
 $.tH([ $.tr(['Pass name','Meal','charge']) ]),
 $.tB().bTp("{n:'rsvTp', foreach: seats}") //?

 ])

 $.bt('Rsv again').b({ $:'A', en:'seats().length < 5' })

 $('<script type="text/x-jquery-tmpl" id="rsvTp" >').A(
 $.tr([
 $.td([$.ipV('n')]),
 $.td([$.sl().b({o:'Meals', ot:'meal'})]),
 $.td([ $.a$('del', 'rm')  ])
 ])
 )

 seatRsv = function(n) {
 this.n = n
 this.Meals = Meals;
 this.meal = ko.o(Meals[0]);
 this.rm = function() {vm.seats.remove(this) }
 this.fmtPrice = ko.do(function(){
 var price = this.meal().p
 return price ? "$" + price.toFixed(2) : "None";
 }, this)
 }


 vm = {
 seats: ko.oa([ new Rsv("St"), new Rsv("Br") ]),
 A: function() { this.seats.push(new Rsv())} }


 vm.cost = ko.do(function() {
 var tot = 0;
 for (var i = 0; i < this.seats().length; i++)
 tot += this.seats()[i].meal().price;
 return tot
 }, vm)



 ok(vm)

 }


 */