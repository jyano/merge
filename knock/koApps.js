KOHTML =  function () {$.z().dH('details')
    ok('details', $o())
    _.in(2, function () {
        vm.details(
            "<em>For details, view report <a href='report.html'>here</a>.</em>")
    })
}
ATTR= function () {
    $.x()
    $.aA(
        '{href:url, title:tt}',
        'report'
    )

    ok({
        url: $o("year-end.html"),
        tt: $o("Report including final year-end statistics")
    })

    function alpha(){
        BINDATTR = function () {z()
            _$({
                C: 'w',
                t: 'attributes.. unlikely to use?',
                vm: {url: $o("year-end.html"), tt: $o("stats report")},
                A: [$.aA('{href:url,title:tt}', 'report')]
            })
        }
    }
}
KOCSS=function(){$.x()
    $.d().fS(100).A('Profit Information').bS("{color:curProf()<0?'red':'black'}")
    ok({curProf: $o(50) })
    _.in(function(){  vm.curProf(-50)}, '*')

    function alpha(){
        KOS=function() {_$({ c:'v', t:'css example.. will i use it?', vm:{  n: $o(1)  },
            A:$.d(['info']).b("style: {color: n()<0?'red':'black'}"),
            _:function(){ vm.n(-5) } })}

    }



}
IF  = function () {
    $.x('x')
    $.cC('dispMs');
    $.sp('Disp ms')
    $.pI('dispMs', 'Here is a message. Astonishing')
    ok({dispMs: $o(1)})

} //does nuttin
//bind cb and bind ip to 'enable'
VISABLE =   function () {
    $.z('y').h1('see me if true!').bVs('vs')
    ok('vs', $o(1))
    _.in(function () {
        vm.vs(0)
        _.in(function () {
            vm.vs(1)
        })
    })//bind 'visibile' to a boolean
    function alpha(){
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
    }
}
ENABLE = function () {
    $.x()

    $.p().A(
        $.cbC('hasPhone'), 'I have phone'
    )

    $.p('Your cellphone number').A(
        $.ip().b({v: 'num', en: 'hasPhone'}))

    ok({hasPhone: $o(0), num: ''})

}//bind cb and bind ip to 'enable'
FOKUS = function () {
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
CHEK = function () {
    $.x('o');
    h1 = $.h1('shown!')
    // h1.slV()
    $.cC()
    ok()
}
CHECKSPAM=function(){$.x('o','spam')
    $.p(['spam?', $.cbC('wantSpam', 'wantSpam')])
    $.d(['spam flavors:',
        $.d([ cbKO('Cherry', 'flav', 'cherry')]),
        $.d([ cbKO('Almond', 'flav', 'almond')]),
        $.d([ cbKO('Glut', 'flav', 'glut')])])
        .bVs('wantSpam')
    vm ={
        wantSpam: $o(1), flav: $oa(["cherry", "almond"])
    }
    ok(vm)
    _.in(2, function(){   vm.wantSpam(0)   }, '*')
//bind cb 'checked' to boolean
    //viewModel.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
}
TEXTIP = function (){z()
    $.dA('y', 100, 300, 200, 100).b('t','n')
    $.ip().b('tI','n')
    ok({n: $o('zi')})
}//basic databinding example
TXIPROOT =   function () {
    $.z('x')
    unTI = $.p('Login name:').A(
        $.ipTi('un'))
    pwTI = $.p('Pw:').A($.pwTi('pw'))
    $('body').A('the viewModel: ').A(
        $.pre().bT('ko.toJSON($root, null, 2)'))
    ok({
        un: $o(''),
        pw: $o('abc')
    })
}
OPCUNTS = function (n, v) {
    $.x('o').h1('dests')
    $.sO('cunts')
    ok('cunts', $oa('Fran', 'Ger', 'Spa'))
    _.in(2, function () {
        vm.cunts.push('Chi')
    })
}
SELMULT = function () {
    $.x(null, 'selectedOptions')
    $.p(
        'Where you want to go?',
        $.sl().at({size: 5, multiple: true}).b({
            o: 'available', sO: 'chosen'
        }))
    ok({
        available: $oa(['France', 'Germany', 'Spain']),
        chosen: $oa(['Germany'])
    })
    _.in(function () {
        vm.chosen.push('France')
    })
}
SELLIST = function () {
    $.x('z')
    $.d()(
        fo().b('S', 'addItem')(
            sp('add item'),
            tx().b({
                v: 'itemToAdd'//,vu:'afterkeydown'
            }),
            sm('add').b('ea', 'itemToAdd().length>0')),
        _d()(sp('Your values:'),
            sel().h(5).b({
                o: 'allItems',
                sO: 'selectedItems'
            })
        ),
        _d()(
            bt('remove').b({
                c: 'removeSelected', e: 'selectedItems().length>0'
            }),
            bt('sort').b({
                c: 'sortItems', e: 'allItems().length>1'
            }))
    ).a()

    ko.ab(o = BLM())

    f = $.f()
    f.bSb('addItem').A(
        $.sp('add item'),
        $.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
        $.sb('add')
            .bEn('itemToAdd().length>0')
    )
    $.d().A(f,
        $.d().A(
            $.sp('Your values:'),
            $.sl().h(5).b({
                o: 'allItems', sO: 'selectedItems'
            })
        ),
        $.d().A(
            $.bt('remove').b({
                c: 'removeSelected',
                e: 'selectedItems().length>0'
            }),
            $.bt('sort').b({
                c: 'sortItems',
                e: 'allItems().length>1'
            }))
    )

    $.f().b({sb: 'A'}).A('Add item:',
        $.ip().b({v: 'tA', vU: 'afterkeydown'}),
        $.sb('Add').b('en', 'tA().length > 0')
    )

    $.p('Your values:')

    $.sl().mlt().b({o: 'all', so: 'sl'})

    $.d([
        $.bt('Rem').b({$: 'xSl', en: 'sl().length > 0'}),
        $.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
    ])

    Lst = function () {
        this.tA = $o('')
        this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30])
        this.sl = $oa(['Hm'])
        this.A = function () {
            if (this.tA() != '' && this.all.indexOf(this.tA()) < 0) {
                this.all.push(this.tA())
                this.tA('')
            }
        }

        this.xSl = function () {
            this.all.removeAll(this.sl())
            this.sl([])
        }
        this.srt = function () {
            this.all.sort()
        }
    }
    $b(new Lst())
    ok({
        itemToAdd: $o(''),
        allItems: $oa(['a', 'b', 'c']),
        selectedItems: $oa(['d']),
        addItem: function () {
            $l('addItem')
            if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
                vm.allItems.push(vm.itemToAdd());
                vm.itemToAdd('')
            }
        },
        removeSelected: function () {
            allItems.removeAll(o.selectedItems())
            selectedItems([])
        },
        sortItems: function () {
            o.allItems.sort()
        }
    })

    f = $.f().A(
        $.sp('add item'),
        $.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
        $.sm('add').bEn('itemToAdd().length>0')
    )
    f.bSm('addItem')
    $.d().A(f, $.d().A(
            $.sp('Your values:'),
            $.sl().h(5).b({
                o: 'allItems',
                sO: 'selectedItems'
            })
        ),

        $.d().A(
            $.bt('remove').b({
                c: 'removeSelected',
                e: 'selectedItems().length>0'
            }),

            $.bt('sort').b({
                c: 'sortItems',
                e: 'allItems().length>1'
            }))
    )

    ok({
        itemToAdd: $o(''),
        allItems: $oa(['a', 'b', 'c']),
        selectedItems: $oa(['d']),
        addItem: function () {
            $l('addItem')
            if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
                vm.allItems.push(vm.itemToAdd());
                vm.itemToAdd('')
            }
        },


        removeSelected: function () {
            allItems.removeAll(o.selectedItems())
            selectedItems([])
        },
        sortItems: function () {
            o.allItems.sort()
        }
    })

    f = $.fSm('A', ['Add:',
        $.ipV('tA'),
        $.sb('Add').bEn('tA().length>0')
    ])
    $.p('Your values:')
    $.sl().mlt().b({
        o: 'all',
        so: 'sl'
    })
    $.d([

        $.bt('Rem').b({

            $: 'xSl',

            en: 'sl().length > 0'

        }),


        $.bt('Srt').b({$: 'srt', en: 'all().length > 1'})

    ])
    Lst = function () {

        this.tA = kO('')

        this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)

        this.sl = kA('Hm')

        this.A = function () {
            if (this.tA() &&
                this.all.indexOf(this.tA()) < 0
            ) {

                this.all.push(this.tA())
                this.tA('')
            }
        }

        this.xSl = function () {

            this.all.removeAll(this.sl())

            this.sl([])

        }
        this.srt = function () {
            this.all.sort()
        }
    }

    ok(new Lst())

    //sort, remove

    $.f().b({sb: 'A'}).A('Add item:',
        $.ip().b({v: 'tA', vU: 'afterkeydown'}),
        $.sb('Add').b('en', 'tA().length > 0')
    )
    $.p('Your values:')
    $.sl().mlt().b({o: 'all', so: 'sl'})
    $.d([
        $.bt('Rem').b({$: 'xSl', en: 'sl().length > 0'}),
        $.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
    ])
    Lst = function () {
        this.tA = $o('')
        this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30])
        this.sl = $oa(['Hm'])
        this.A = function () {
            if (this.tA() != '' && this.all.indexOf(this.tA()) < 0) {
                this.all.push(this.tA())
                this.tA('')
            }
        }

        this.xSl = function () {
            this.all.removeAll(this.sl())
            this.sl([])
        }
        this.srt = function () {
            this.all.sort()
        }
    }
    $b(new Lst())

    f = $.fSm('A', ['Add:',
        $.ipV('tA'),
        $.sb('Add').bEn('tA().length>0')
    ])

    $.p('Your values:')
    $.sl().mlt().b({
        o: 'all',
        so: 'sl'
    })

    $.d([

        $.bt('Rem').b({

            $: 'xSl',

            en: 'sl().length > 0'

        }),


        $.bt('Srt').b({$: 'srt', en: 'all().length > 1'})

    ])


    Lst = function () {

        this.tA = kO('')

        this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)

        this.sl = kA('Hm')

        this.A = function () {
            if (this.tA() &&
                this.all.indexOf(this.tA()) < 0
            ) {

                this.all.push(this.tA())
                this.tA('')
            }
        }

        this.xSl = function () {

            this.all.removeAll(this.sl())

            this.sl([])

        }


        this.srt = function () {
            this.all.sort()
        }
    }

    $.f().b({sb: 'A'}).A('Add item:',
        $.ip().b({v: 'tA', vU: 'afterkeydown'}),
        $.sb('Add').b('en', 'tA().length > 0')
    )

    $.p('Your values:')

    $.sl().mlt().b({o: 'all', so: 'sl'})

    $.d([


        $.bt('Rem').b({$: 'xSl', en: 'sl().length > 0'}),

        $.bt('Srt').b({$: 'srt', en: 'all().length > 1'})

    ])

    Lst = function () {

        this.tA = $o('')

        this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30])

        this.sl = $oa(['Hm'])

        this.A = function () {
            if (this.tA() != '' && this.all.indexOf(this.tA()) < 0) {
                this.all.push(this.tA())
                this.tA('')
            }
        }

        this.xSl = function () {
            this.all.removeAll(this.sl())
            this.sl([])
        }
        this.srt = function () {
            this.all.sort()
        }
    }

    ok(new Lst())

    f = $.f()

    f.bSb('addItem').A(
        $.sp('add item'),
        $.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
        $.sb('add').bE('itemToAdd().length>0')
    )

    $.d().A(f,

        $.d().A(
            $.sp('Your values:'),

            $.sl().h(5).b({

                o: 'allItems',
                so: 'selectedItems'
            })
        ),

        $.d().A(
            $.bt('remove').b({
                c: 'removeSelected',
                e: 'selectedItems().length>0'
            }),
            $.bt('sort').b({
                c: 'sortItems',
                e: 'allItems().length>1'
            }))
    )
    ok({
        itemToAdd: $o(''),
        allItems: $oa(['a', 'b', 'c']),
        selectedItems: $oa(['d']),
        addItem: function () {
            $l('addItem')
            if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
                vm.allItems.push(vm.itemToAdd());
                vm.itemToAdd('')
            }
        },


        removeSelected: function () {
            allItems.removeAll(o.selectedItems())
            selectedItems([])
        },
        sortItems: function () {
            o.allItems.sort()
        }
    })
    ok(new Lst())

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
OLTWT=function(){$.x('r','twt')


    OK({

        un : $o('@ex'),

        da : $o(),

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

    $.fSb('g',[ 'u:', $.ipV('un'), $.sb('Get') ]).A()

    $.dW('da',[
        $.h3('dt:', $.spT('dt') ),
        $.olE('MS',
            $.liT('ms')),

        $.bt$('clr',' $parent.clr')

    ])


    ok({
        un : $o('@ex'),
        da : $o(),
        g:function(){vm.da({
            dt: $D(),
            MS: _.m(['a','b'],
                function(t){return {ms:vm.un()+':'+t}})
        })},
        clr: function(){ vm.da([]) }
        //<- $.bt('Clear tweets').b$(' $parent.clearResults')
    })
}
TBTRPEEPS = function () {$.C('r'); $('body').fS(30)
    $.x().t([$.tH([$.tr([$.th('F'),$.th('L')])]), $.tBE('peep', [
        $.tr([$.tdT('f'), ', ', $.tdT('l')])])])//  $.t([$.tH([$.tr([$.th('F'), $.th('L')])]), $.tBE('peep', [$.tr([$.tdT('f').col('b'), ', ', $.tdT('l').col('w')])])])// <- $.fn.tE= $.fn.tBE ? // (not tableHTML)
    ok({peep: $oa([{f: 'a', l: 'A'}, {f: 'b', l: 'B'}, {f: 'c', l: 'C'}])}) //ok({ peep: [{f:'a',l:'A'},      {f:'b',l:'B'}, {f:'c',l:'C'}]})

    function classik(){KOEACH = function () {
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


    }}
}
DIVEACH=function(){$.x()
    OK('peep', $oa(        {f:'B',l:'Bb'}, {f:'C',l:'Cc'}, {f:'D',l:'Dd'} ))
    $.dE('peep', [  $.p(
        $.spT('f'),    ' ',   $.spT('l')
    ) ])
    $.bt('push',function(){
        vm.peep.push({f:'j',l:'y'})
    })

    $.z()

    $.dE('peep', [
        $.p(
            $.bt('push', function () {
                vm.peep.p({f: 'j', l: 'y'})
            }),
            $.spT('f'), ' ', $.spT('l'))
    ])
    ok({
            peep: $oa([
                {f: 'B', l: 'Bb'},
                {f: 'C', l: 'Cc'},
                {f: 'D', l: 'Dd'}
            ])
        }
    )

    z()

    _d().b('e', 'p')(
        pg(
            sp().b('t', 'f'), sp(' '), sp().b('t', 'l'))
    ).a()


    vm = {
        p: $oa([
            {f: 'B', l: 'Bb'},
            {f: 'C', l: 'Cc'},
            {f: 'D', l: 'Dd'}])
    }
    ko.ab(vm)

    f = function () {
        vm.p.push({f: 'jason', l: 'yano'})
    }
}
ULNEST=function(){$.x('x').h2('Pp')
    Per = function(n, ch) {
        this.n = n
        this.ch = $oa(ch)
        this.A = function(){
            this.ch.push('new ch '+ $r())
        }
    }


    $.ulE('peep',
        $.d([  // name has length children
            $.spT('n'), 'has', $.spT('ch().length'),  'children &nbsp;',
            //new
            $.a$('New','A')
        ]),

        $.uLE('ch',
            $.spT(), //child name
            $.spVs( '$root.showDT').A('(child rendered at ',   $.spT('$Dt().getSeconds()'),      ')')
        )
    )
    $.cbC('showDT').a2Lb('Show time:')
    //anonymous vm

    ok({    peep: peep,      showDT: $o()     })
}
ULBARN=function(){$.x()
    $l('barn')
    $.z().ulE(
        'PL',[

            $.li([

                $.sp('Planet: '),
                $.b().bT('n'),
                $.dI('cap',[  $.pT('cap.n') ])

            ])


        ])



    ok('PL',[
        {n: 'Merc', cap: null },
        {n: 'Earth', cap: { n: 'Barn' } }
    ])
    $.ulE('PL', [ $.li([
        $.sp('Planet: '),

        $.b().bT('n'),

        $.dI('cap',[  $.pT('cap.n')])

    ])])


    ok('PL',[
        {n: 'Merc', cap: null },
        {n: 'Earth', cap: { n: 'Barn' } }
    ])
}
ULDEL=function(){$.x()
//bind bt 'click' to parent.rem
    $.h4('People')
    $.ulE('peep',[ $.li([
        $.sp('pos/name: '),
        $.spT('$index'),
        $.spT('n'),
        $.$bt('del', 'rm', '-')
    ]) ])
    $.$bt('A')
    ok({ peep : $oa({n:'B'},{n:'Ch'},{n:'De'}),
        A: function(){this.peep.push({n: "New at "+$D()})},
        rm : function (a) {vm.peep.remove(this)}
    })


}
ULPEEP=function(){$.x('x').h2('Peeep')

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

    peep()

    $.uE('peep',[
        $.li().A($.d([

            $.spT('n'), 'has',
            $.spT('ch().length'),

            'children &nbsp;',
            $.a$('New','A')
        ]), $.ulE('ch',[
            $.li([

                $.spT(), $.spVs( '$root.showDT').A(
                    ' (child rendered at ', $.spT('$Dt().getSeconds()'),')'

                )])]))
    ])

    $.cbC('showDT').a2Lb('Show time:')

    OK({peep: peep, showDT: $o()})


    //add, conditional el
    //anonymous vm

}
ULROOT=function(){$.x('x') //format()
    $.uE('fs', [
        $.li().b({
            t:'$data',
            s:'{selected: $data==$root.chFI()}',
            $:'$root.gtf'
        })

    ]).K('fs')
    s2(ul().k('fs').b('E', "fs")(li().b("text:$data, css:{selected:$data==$root.chFI()},click:$root.gtf")))
    MVM = function () {

        var o = {}

        o.fs = ['I', 'A', 'Se', 'Sp']

        o.chFI = $o()
        o.gtf = function (f) {
            o.chFI(f)
        }

        return o
    }
    ko.ab(MVM())
    ok({
        fs:['I','A','Se','Sp'],
        chFI: $o(),
        gtf: function(f){
            $l('click: ' + 'f: '+ f + ', this: '+this)
            f = f||'frog'
            vm.chFI(f)
        }
    })

}
ULADDER=function(){$.x()
//bind bt 'click' to parent.rem
    $.h4('People')

    $.ulE('peep',[ $.li([
        $.sp('pos/name: '),
        $.spT('$index'),
        $.spT('n'),
        $.$bt('del', 'rm', '-')
    ]) ])

    $.$bt('A')

    ok({ peep : $oa({n:'B'},{n:'Ch'},{n:'De'}),
        A: function(){this.peep.push({n: "New at "+$D()})},
        rm : function (a) {vm.peep.remove(this)}
    })


}
ULTIARR  =  function () {
    $l('KO0');
    $.x();
    $.ipTi('n');//textInput
    $.h1T('n');//h1 text (read only) // $.dA('b',100,300,200,'+').bT('n')
    //ul each 'array'
    $.ulE('arr', [$.liT()])
    $.sm().b$('A')
    ok({
        n: $o('zi'),
        arr: $oa(),
        A: function () {this.arr.p(this.n())}
    })
    _.in(1, function () {
        vm.n('girf')
        _.e(['a', 'b', 'c'], function (i) {
            vm.arr.p(i)
        })
    })
}
ULMONKEY=function() {
    $.x('x')
    $.h1('monkey').bT('monkey')
    $.iV('monkey')
    $.sb('hello').b$('A')

    //  $.s$('a','play');
//    $.U('cl',[            'my name is ',$.sT('n'),            ' and i like to play ', $.sT('c')])


    $.uE('list', [$.li(['my name is ',
        $.sT('n'), ' and i like to play ',
        $.sT('c')])])


    vm = {
        monkey: $o(),
        list: $oa(),
        A: function () {
            this.list.p({n: 'j', c: $r()})
        }
    }

    vm.monkey('elephant')

    ok(vm)
    vm.A().A().A()
    //https://www.youtube.com/watch?v=JGwRIbWWqjE

}
ULDATA=function(){$.z('x')
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
    $.ulE('mDateTime').A($.li().A($.ul().bE('$root.matter.index.type()[$data]').A(
        $.li().A(d,
            $.dI('box').css('display','none').A(
                $.a().A('Edit'), $.a().A('Copy'), $.a().A('Delete'))
        ),

        $.li().bT('matterTitle'),
        $.li().bT('matterComment')
    )))
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

    $.ulE('mDateTime').A(
        $.li().A($.ul().bE('$root.matter.index.type()[$data]').A(
            $.li().A(d,
                $.dI('box').css('display','none').A($.a().A('Edit'), $.a().A('Copy'), $.a().A('Delete'))),
            $.li().bT('matterTitle'),
            $.li().bT('matterComment')
        )))





}
ULINDEX     = function () {

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

        o.people = $oa([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])

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
COMPUTED = function () {
    $.z().h1('KNOCKOUT') //bT,bV and computed

    $.d([
        $.p('F: ', $.b().bT('f')),
        $.p('L: ', $.b().bT('l')),
        $.p('F: ', $.ip().bV('f')),
        $.p('L: ', $.ip().bV('l')).id('l'),
        $.p('L: ', $.b().bT('fL')),
        $.bt('caps').b$('capL')
    ]).A()


    $.d().A(
        $.p('F: ', $.b().bT('f')),
        $.p('L: ', $.b().bT('l')),
        $.p('F: ', $.ip().bV('f')),
        $.p('L: ', $.ip().bV('l')).id('l'),
        $.p('L: ', $.b().bT('fL')),
        $.bt('caps').b$('capL')
    )
    ok({
        f: $o('j'),
        l: $o('y'),
        fL: ko.c(function () {
            return this.f() + ' ' + this.l()
        }),
        capL: function () {
            this.l(S.tU(this.l()))
        }
    })
    ok({

        f: $o('j'),
        l: $o('y'),
        fL: ko.c(function () {
            return this.f() + ' ' + this.l()
        }),
        capL: function () {
            this.l(S.tU(this.l()))
        }
    })

    function klassk(){
        KNOCKS  = function () {
            format()
            s2(h1('KNOCKOUT'),
                pg('F: ', _B().b('t', 'f')),
                pg('L: ', _B().b('t', 'l')),
                pg('F: ', ip().b('V', 'f')),
                pg('L: ', ip().b('V', 'l')).id('l'),
                pg('L: ', _B().b('t', 'fl')),
                bt('caps').b('$', 'capL'))
            vm = {}
            vm.f = $o('j')
            vm.l = $o('y')
            vm.fl = ko.c(function () {
                return vm.f() + ' ' + vm.l()
            })
            vm.capL = function () {
                vm.l(uC(vm.l()))
            }
            ko.ab(vm)
        }
    }
}
CHERRY=function(){$.x('o')
    $.p($.sp('spam?'), $.cC('wants'))
    $.d([  'Preferred flavors of spam:',
        $.d([
            $.p($.sp('cherry'),
                $.cC('flav').v('cherry')),
            $.d([$.p($.sp('Almond'),   $.cC('flav').v('almond'))]),
            $.p($.sp('Glut'), $.cC('flav').v('glut'))
        ])
    ]).bVs('wants')

    ok({
        wants:$o(1),
        flav:$oa(["cherry","almond"])
    })

    // vm.flav.push("msg")
    /*
     function $.cKO(m, b, v){
     var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
     if(v){ cb.v(v)}
     return p
     }*/


    $.x('o')

    $.x('o')
    $.p(  $.sp('spam?'),   $.cC('wants')   )
    $.d([  'Preferred flavors of spam:',
        $.d([$.p(  $.sp('cherry'), $.cC('flav').v('cherry')),
            $.d([$.p($.sp('Almond'),   $.cC('flav').v('almond'))]),
            $.p($.sp('Glut'), $.cC('flav').v('glut'))
        ])
    ]).bVs('wants')
    _.in(function(){
        vm.flav.push("glut")})

    ok({
        wants: $o(1),
        flav:  $oa(["cherry","almond"])
    })
    $.p($.sp('spam?'), $.cC('wants'))
    $.d(['Preferred flavors of spam:',
        $.d([
            $.p($.sp('cherry'), $.cC('flav').v('cherry')),
            $.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
            $.p($.sp('Glut'), $.cC('flav').v('glut'))
        ])
    ]).bVs('wants')
    ok({
        wants: $o(1),
        flav: $oa(["cherry", "almond"])
    })


    // vm.flav.push("msg")
    /*
     function $.cKO(m, b, v){
     var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
     if(v){ cb.v(v)}
     return p
     }*/


}
ULTASK=function(){$.z().h3('Tasks')

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

    ok({

        itemToAdd:$o(''),
        allItems:$oa(['a','b','c']),
        selectedItems:$oa(['d']),
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
        ts: $oa(),
        nT: $o(),
        inc : ko.c(function(){  var vm=this
                return ko.ut.af(
                    vm.ts(), function(t){return !t.iD()
                    })
            }
        ),
        aT: function(){ this.ts.push({t: $o( o.nT()), iD: $o( ) }); this.nT('') },
        rmT: function(){ o.ts.remove(this) }
    }

    /*
     ko.b(vm2)
     //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: $o(i.t), iD: $o(i.iD) }}))})
     */



    format()

    $.f().bSm('aT').A().A("Add task: ",
        $.ip().bV('nT').ph("What?"),
        $.bt('Add')//.bS('s') // ??
    )
    $.ul().b({
        e:'ts', vs:'visible:ts().length>0' }).A($.li().A(
        $.cb().bC( 'iD' ),
        $.ip().b("value:t, disable:iD"),
        $.bt('Del').bC( '$parent.rmT' )))


    $.sp("You have").A()
    $.B("&nbsp;").bT( "inc().length").A()
    $.sp("inc task(s)").A()
    $.sp("- beer!").bV("inc().length==0").A()



    $.z().h3('Tasks')

    $.f().bSm('aT').A().A("Add task: ",
        $.ip().bV('nT').ph("What?"),
        $.bt('Add')//.bS('s') // ??
    )
    $.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
        $.cb().bC('iD'),
        $.ip().b("value:t, disable:iD"),
        $.bt('Del').bC('$parent.rmT')))
    $.sp("You have").A()
    $.B("&nbsp;").bT("inc().length").A()
    $.sp("inc task(s)").A()
    $.sp("- beer!").bV("inc().length==0").A()
    ok({
        itemToAdd: $o(''),
        allItems: $oa(['a', 'b', 'c']),
        selectedItems: $oa(['d']),
        addItem: function () {
            if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
                vm.allItems.push(vm.itemToAdd());
                vm.itemToAdd('')
            }
        },
        removeSelected: function () {
            allItems.removeAll(vm.selectedItems())
            selectedItems([])
        },
        sortItems: function () {
            vm.allItems.sort()
        }
    })

    vm2={
        ts: $oa(),
        nT: $o(),
        inc : ko.c(function(){  var vm=this
                return ko.ut.af(
                    vm.ts(), function(t){return !t.iD()
                    })
            }
        ),
        aT: function(){ this.ts.push({t: $o( o.nT()), iD: $o( ) }); this.nT('') },
        rmT: function(){ o.ts.remove(this) }
    }

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

        sp("You have"), _B("&nbsp;").b('t', "inc().length"), sp("inc task(s)"),
        sp("- beer!").b("visible: inc().length==0")
    )

    //ko.ab(TLVM())

    ok({

        itemToAdd:$o(''),

        allItems:$oa(['a','b','c']),

        selectedItems:$oa(['d']),
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


}
function Html() {
    z()
    $.p('First name').A($.S().bT('firstName'))
    $.p('Last name').A($.S().bT('lastName'))
    $.p('First name:').A($.ip().bV('firstName'))
    $.p('Last name:').A($.ip().bV('lastName'))
    $.p('Fullname:').A($.S().bT('fullName'))
    $.bt('Go caps').b$('capitalizeLastName')
}
K1MAYBE= function () {$.x('K1');$Ms('K1')
    $.p('Name:').A(
        $.ip().b({
            v: 'editing',
            v: 'name',
            f: 'editing'
        }),
        $.d('r').b({v: '!editing()', t: 'name', $: 'edit'})
    )
    $.p('Click the name to edit it; click elsewhere to apply changes')
    ok({
        name : $o("Bert Bertington"),
        editing : $o(),
        edit : function () {vm.editing(true)}
    })//KOFCC
}
K11 = function(){Html()
    function AppViewModel(){

        this.firstName = $o("Bert")
        this.lastName = $o("Bertington")
        this.fullName = ko.computed(function (){
            return this.firstName() + " " + this.lastName()
        }, this)

        this.capitalizeLastName = function(){
            var currentVal = this.lastName()
            this.lastName(currentVal.toUpperCase())
        }
    }

    ko.applyBindings(new AppViewModel())
}
K1 = function () {
    Html()
    vm = {
        firstName: $o("Bert"),
        lastName: $o("Bertington"),

        capitalizeLastName: function () {
            this.lastName(_.tU(this.lastName()))
        }
    }
    vm.fullName = ko.c(function () {
        return this.firstName() + " " + this.lastName()
    }, vm), ok(vm)
}
K10=function(){z()
    $.p('f').A($.S().bT('f'))
    $.p('l').A($.S().bT('l'))
    $.p('f:').A($.ip().bV('f'))
    $.p('l:').A($.ip().bV('l'))
    $.p('full:').A($.S().bT('full'))
    $.bt('tU').b$('tU')
    vm = {f:$o('a'), l:$o('b'), tU:function(){this.l(_.tU(this.l()))}}
    vm.full=ko.c(function(){return vm.f()+' '+vm.l()})
    ok(vm)
}
K31=function(){z()

    str= '<h3 data-bind="text: question"></h3>'
    str+= '<p>Please distribute <b data-bind="text: pointsBudget"></b> points between the following options.</p>'
    str+=' <table>'
    str+=' <thead><tr><th>Option</th><th>Importance</th></tr></thead>'
    str+='  <tbody data-bind="foreach: answers">'
    str+=' <tr>'
    str+='<td data-bind="text: answerText"></td>'
    str+=' <td><select data-bind="options: [1,2,3,4,5], value: points"></select></td>'
    str+=' </tr>'
    str+=' </tbody>'
    str+='  </table>'
    str+='<h3 data-bind="visible: pointsUsed() > pointsBudget">Youve used too many points! Please remove some.</h3>'
    str+='<p>Youve got <b data-bind="text: pointsBudget - pointsUsed()"></b>'
    str+='points left to use.</p>'
    str+='<button data-bind="enable: pointsUsed() <= pointsBudget, click: save">Finished</button>  '

    $(str).A()



    function Answer(text) { this.answerText = text; this.points = $o(1); }

    function SurveyViewModel(question, pointsBudget, answers) {
        this.question = question;
        this.pointsBudget = pointsBudget;
        this.answers = $.map(answers, function(text) { return new Answer(text) });
        this.save = function() { alert('To do') };

        this.pointsUsed = ko.computed(function() {
            var total = 0;
            for (var i = 0; i < this.answers.length; i++)
                total += this.answers[i].points();
            return total;
        }, this);
    }

    ko.applyBindings(new SurveyViewModel("Which factors affect your technology choices?", 10, [
        "Functionality, compatibility, pricing - all that boring stuff",
        "How often it is mentioned on Hacker News",
        "Number of gradients/dropshadows on project homepage",
        "Totally believable testimonials on project homepage"
    ]));

}
K3=function(){z()

    str= '<h3 data-bind="text: question"></h3>'
    str+= '<p>Please distribute <b data-bind="text: pointsBudget"></b> points between the following options.</p>'
    str+=' <table>'
    str+=' <thead><tr><th>Option</th><th>Importance</th></tr></thead>'
    str+='  <tbody data-bind="foreach: answers">'
    str+=' <tr>'
    str+='<td data-bind="text: answerText"></td>'
    str+=' <td><select data-bind="options: [1,2,3,4,5], value: points"></select></td>'
    str+=' </tr>'
    str+=' </tbody>'
    str+='  </table>'
    str+='<h3 data-bind="visible: pointsUsed() > pointsBudget">Youve used too many points! Please remove some.</h3>'
    str+='<p>Youve got <b data-bind="text: pointsBudget - pointsUsed()"></b>'
    str+='points left to use.</p>'
    str+='<button data-bind="enable: pointsUsed() <= pointsBudget, click: save">Finished</button>  '
    $(str).A()
    function Answer(text) {
        this.answerText = text;
        this.points = $o(1);
    }
    function VM(question, pointsBudget, answers) {
        this.question = question
        this.pointsBudget = pointsBudget
        this.answers = $.map(answers, function(text) {return new Answer(text) })
        this.save = function(){alert('To do')}
        this.pointsUsed = ko.c(function() {
            var total = 0;
            for (var i = 0; i < this.answers.length; i++)
                total += this.answers[i].points();
            return total;
        }, this);
    }
    ok(new VM("Which factors affect your technology choices?", 10, [
        "Functionality, compatibility, pricing - all that boring stuff",
        "How often it is mentioned on Hacker News",
        "Number of gradients/dropshadows on project homepage",
        "Totally believable testimonials on project homepage"
    ]))
}
K30=function(){z()

    str= '<h3 data-bind="text: q"></h3>'
    str+= '<p> distribute <b data-bind="text: pB"></b> points  </p>'
    str+=' <table><thead><tr><th>Option</th><th>Importance</th></tr></thead>'
    str+='  <tbody data-bind="foreach: As"><tr>'
    str+='<td data-bind="text: aT"></td>'
    str+=' <td><select data-bind="options: [1,2,3,4,5], value:Ps"></select></td>'
    str+=' </tr> </tbody> </table>'

    str+='<h3 data-bind="visible: pU() > pB">  too many points!  </h3>'
    str+='<p><b data-bind="text: pB-pU()"></b> left</p>'
    str+='<button data-bind="enable: pU() <= pB, click: save">Finished</button>  '

    $(str).A()

    function VM(q, pB, As) {var vm=this
        vm.q  = q
        vm.pB = pB
        vm.As = $.map(As, function(t) {return {aT:t, Ps: $o(1)} })
        vm.save = function(){alert('To do')}
        vm.pU = ko.c(function(){var t = 0; _.e(vm.As, function(a){t += a.Ps()}); return t}) //points Used
    }

    ok(new VM("factors?", 10, ["Functionality", "News", "dropshadows", "testimonials"]))

}
K4=function(){z()

    ko.$bH({
        fadeVisible:{
            i:  function(e,v) {
                var v=v()
                $l('v:'+v)
                $(e).toggle(v)
            },
            u:function(el,vAc){
                vAc()?$(el).fadeIn():$(el).fadeOut()
            }
        },
        jqButton: {
            i: function(e){$(e).button()},
            u: function(e, vA) {                 $(e).button("option", "disabled", vA().enable === false);}
        }
    })

    ko.bindingHandlers.jqButton =

        str= '<h3 data-bind="text: q"></h3>'
    str+= '<p> distribute <b data-bind="text: pB"></b> points  </p>'
    str+=' <table><thead><tr><th>Option</th><th>Importance</th></tr></thead>'
    str+='  <tbody data-bind="foreach: As"><tr>'
    str+='<td data-bind="text: aT"></td>'
    str+=' <td><select data-bind="options: [1,2,3,4,5], value:Ps"></select></td>'
    str+=' </tr> </tbody> </table>'
    str+='<h3 data-bind="fadeVisible: pU() > pB">  too many points!  </h3>'
    str+='<p><b data-bind="text: pB-pU()"></b> left</p>'
    str+='<button data-bind="jqButton: jqButton: { enable: pU() <= pB },  click: save">Finished</button>  '
    $(str).A()

    function VM(q, pB, As) {var vm=this



        vm.q  = q
        vm.pB = pB
        vm.As = $.map(As, function(t) {return {aT:t, Ps: $o(1)} })
        vm.save = function(){alert('To do')}
        vm.pU = ko.c(function(){var t = 0; _.e(vm.As, function(a){t += a.Ps()}); return t}) //points Used
    }

    ok(new VM("factors?", 10, ["Functionality", "News", "dropshadows", "testimonials"]))

}
K342=function(){z()

    ko.bindingHandlers.starRating = {
        init: function(element, valueAccessor) {
            $(element).addClass("starRating");
            for (var i = 0; i < 5; i++)
                $("<span>").appendTo(element);

            $("span", element).each(function(index) {
                $(this).hover(
                    function() { $(this).prevAll().add(this).addClass("hoverChosen") },
                    function() { $(this).prevAll().add(this).removeClass("hoverChosen") }
                );
            })
        },
        update: function(element, valueAccessor) {
            // Give the first x stars the "chosen" class, where x <= rating
            var observable = valueAccessor();
            $("span", element).each(function(index) {
                $(this).toggleClass("chosen", index < observable());
            });
        }
    }



    str= '<h3 data-bind="text: question"></h3>'
    str+= '<p>Please distribute <b data-bind="text: pointsBudget"></b> points between the following options.</p>'
    str+=' <table>'
    str+=' <thead><tr><th>Option</th><th>Importance</th></tr></thead>'
    str+='  <tbody data-bind="foreach: answers">'
    str+=' <tr>'
    str+='<td data-bind="text: answerText"></td>'
    str+='<td data-bind="starRating: points"></td>'
    str+=' </tr>'
    str+=' </tbody>'
    str+='  </table>'
    str+='<h3 data-bind="visible: pointsUsed() > pointsBudget">Youve used too many points! Please remove some.</h3>'
    str+='<p>Youve got <b data-bind="text: pointsBudget - pointsUsed()"></b>'
    str+='points left to use.</p>'
    str+='<button data-bind="enable: pointsUsed() <= pointsBudget, click: save">Finished</button>  '
    $(str).A()
    function Answer(text) {
        this.answerText = text;
        this.points = $o(1);
    }
    function VM(question, pointsBudget, answers) {
        this.question = question
        this.pointsBudget = pointsBudget
        this.answers = $.map(answers, function(text) {return new Answer(text) })
        this.save = function(){alert('To do')}
        this.pointsUsed = ko.c(function() {
            var total = 0;
            for (var i = 0; i < this.answers.length; i++)
                total += this.answers[i].points();
            return total;
        }, this);
    }



    ok(new VM("Which factors affect your technology choices?", 10, [
        "Functionality, compatibility, pricing - all that boring stuff",
        "How often it is mentioned on Hacker News",
        "Number of gradients/dropshadows on project homepage",
        "Totally believable testimonials on project homepage"
    ]))
}
KOSPAAA=function(){z();$Ms('KOSPA')

    $.ulE('folders').K('folders').A(
        $.liT('$data')
    )


    ok(new (function WebmailVM() {
        var self = this

        this.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    }))

}
KOSPA=function(){
    /*
     <ul class="folders" data-bind="foreach: folders">
     <li data-bind="text: $data,css: { selected: $data == $root.chosenFolderId() }, click: $root.goToFolder"></li>
     </ul>





     <table class="mails" data-bind="with: chosenFolderData">
     <thead><tr><th>From</th><th>To</th><th>Subject</th><th>Date</th></tr></thead>
     <tbody data-bind="foreach: mails">
     <tr data-bind="click: $root.goToMail">
     <td data-bind="text: from"></td>
     <td data-bind="text: to"></td>
     <td data-bind="text: subject"></td>
     <td data-bind="text: date"></td>
     </tr>
     </tbody>
     </table>
     <div class="viewMail" data-bind="with: chosenMailData">
     <div class="mailInfo">
     <h1 data-bind="text: subject"></h1>
     <p><label>From</label>: <span data-bind="text: from"></span></p>
     <p><label>To</label>: <span data-bind="text: to"></span></p>
     <p><label>Date</label>: <span data-bind="text: date"></span></p>
     </div>
     <p class="message" data-bind="html: messageContent" />
     </div>
     */

    function WebmailViewModel() {
        // Data
        var self = this;
        self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
        self.chosenFolderId = $o();
        self.chosenFolderData = $o();
        self.chosenMailData = $o();

        // Behaviours
        self.goToFolder = function(folder) {
            self.chosenFolderId(folder);
            self.chosenMailData(null); // Stop showing a mail
            $.get('/mail', { folder: folder }, self.chosenFolderData);
        };
        self.goToMail = function(mail) {
            self.chosenFolderId(mail.folder);
            self.chosenFolderData(null); // Stop showing a folder
            $.get("/mail", { mailId: mail.id }, self.chosenMailData);
        };

        // Show inbox by default
        self.goToFolder('Inbox');
    };

    ko.applyBindings(new WebmailViewModel());
}
TUTC=function(){z();$Ms('TUTC'); $.h2(['seats:(',$.spT("_.z(Ss())"),')'])
    $.t([$.tH([$.tr([$.th('n'),$.th('M'), $.th('$$'),$.th()])]),
        $.tBT('Ss',$.tdT('n'),$.td($.slB({o:'$root.Ms',v:'m',oT:"'n'"})),
            $.tdT('fm'), $.td([$.a$('XX',"$root.rm")]))])
    $.h3(['$$: $', $.sp().bT('_.tF($$())')]).bVs('$$()>0'); $.bt('+').b({$:'A', en:'_.z(Ss())<5'})
    ok(new (function(){var vm=this;vm.Ms=[{n:"bat",$$:0},{ n:"pig",$$:3.9},{n:"zeb",$$:29}]
        vm.Ss=$oa([Res("jas"),Res("rig")]); vm.$$=ko.c(function(){var $$=0,Ss=vm.Ss();
            _.e(Ss,function(s){$$+=s.m().$$});return $$}); vm.A=function(){vm.Ss.p(Res())};
        vm.rm= function(s){vm.Ss.rm(s)}; function Res(n,m){
            var r={n:n||'ano',m:$o(m||vm.Ms[0])}
            r.fm=ko.c(fm);return r; function fm(){return fm(r.m().$$)
                function fm($$){return!$$?'Name':'$'+_.tF($$)}}}}))



    function old(){
        TUTC1=function(){z();$Ms('TUTC')
            availableMeals =  [
                { mealName: "Standard (sandwich)", price: 0 },
                { mealName: "Premium (lobster)", price: 34.95 },
                { mealName: "Ultimate (whole zebra)", price: 290 }
            ]
            $.h2().A('Your seat reservations (', $.sp().bT("seats().length"), ')')
            $.t().A(
                $('<thead>').A($.tr().A($('<th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th>'))),
                $('<tbody>').bE('seats').A($.tr().A(
                    $.td().bT('name'),
                    $.td($.sl().b("options: $root.availableMeals, value: meal, optionsText: 'mealName'")),
                    $.td().bT('formattedPrice'),
                    $.td().A($.a('Remove','#').b$("$root.removeSeat")))))
            $.h3().A('Total surcharge: $', $.sp().bT('totalSurcharge().toFixed(2)')).bVs('totalSurcharge() > 0')
            $.bt('reserve another seat').b('click: addSeat, enable: seats().length < 5')
            ok(new ReservationsViewModel())

            function SeatReservation(name, initialMeal) {
                var self = this;
                self.name = name;
                self.meal = $o(initialMeal);
                self.formattedPrice = ko.computed(function() {
                    var price = self.meal().price;
                    return price ? "$" + price.toFixed(2) : "None";
                });
            }
            function ReservationsViewModel(){
                var self = this;
                // Non-editable catalog data - would come from the server
                self.availableMeals = availableMeals
                // Editable data
                self.seats = $oa([
                    new SeatReservation("Steve", self.availableMeals[0]),
                    new SeatReservation("Bert", self.availableMeals[0])
                ])
                self.totalSurcharge = ko.computed(function() {
                    var total = 0;
                    for (var i = 0; i < self.seats().length; i++)
                        total += self.seats()[i].meal().price;
                    return total;
                })
                self.addSeat = function() {
                    self.seats.push(new SeatReservation("", self.availableMeals[0]));
                }
                self.removeSeat = function(seat) { self.seats.remove(seat) }

            }
        } //full collection app from website !!!!!!!

    }
}