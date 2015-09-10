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
SELOP=function(){d= $.d()

    $.x(null,
        'selectedOptions')



    $.p('Where?',

        $.sl().at({
            size: 5,
            multiple: true
        }).b({  o: 'available', so: 'chosen'

        }))

    ok({

        available  : ko.oa(
            ['France', 'Germany', 'Spain']),
        chosen  : ko.oa(
            ['Germany'])})

    $.in(function(){
        vm.chosen.push('France')
    },'*')
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

function comput() {
//bT,bV and computed
    COMP = function () {
        $.z().h1('KNOCKOUT')

        $.d([
            $.p('F: ', $.b().bT('f')),
            $.p('L: ', $.b().bT('l')),
            $.p('F: ', $.ip().bV('f')),
            $.p('L: ', $.ip().bV('l')).id('l'),
            $.p('L: ', $.b().bT('fL')),
            $.bt('caps').b$('capL')
        ]).A()


        ok({
            f: ko.o('j'),
            l: ko.o('y'),
            fL: ko.c(function () {
                return this.f() + ' ' + this.l()
            }),
            capL: function () {
                this.l(S.tU(this.l()))
            }
        })


    }
    COMP = function () {

        $.z().h1('KNOCKOUT')

        $.d([
            $.p('F: ', $.b().bT('f')),
            $.p('L: ', $.b().bT('l')),
            $.p('F: ', $.ip().bV('f')),
            $.p('L: ', $.ip().bV('l')).id('l'),
            //   $.p('L: ', $.b().bT('fL') ),

            $.bt('caps').b$('capL')

        ])

        ok({

            f: $o('j'),
            l: $o('y'),

//        fL : ko.c(function(){return this.f()+' '+this.l()}),

            capL: function () {
                this.l(S.tU(this.l()))
            }

        })


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
forEaApps();
formApps()
function forEaApps(){
    KO0 =function(){
        $.x(); $.ipV('n'); $.h1T('n')
        $.ulE('arr', [$.liT()])
        $.sb().b$('A')
        $.dA('b',100,300,200,'+').bT('n')

        ok({n:ko.o('zi'), arr: ko.oa(),
            A:function(){this.arr.push(this.n())} }) // ok('n', ko.o('zi'))
        $.in(1, function(){
            vm.n('girf')
            _.e(['a','b','c'], function(i){
                vm.arr.push(i)})},'*')
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
    NEST=function(){$.x('x').h2('Pp')

        Per = function(n, ch) {
            this.n = n
            this.ch = $oa(ch)
            this.A = function(){
                this.ch.push('new ch '+ $r())
            }
        }

        peep= [
            new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
            new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
            new Per("Charles", ["Cayenne", "Cleopatra"])
        ]


        $.uLE('peep',

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
    TPLIST=function(){$.x()
        Meals = [ { m: "sand", p: 0 }, { m: "lobst", p: 34.95 }, { m: "zebra", p: 290 } ]

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

                $.td([
                    $.sl().b({o:'Meals', ot:'meal'})
                ]),

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


        vm.cost = ko.do(function() {var tot = 0;
            for (var i = 0; i < this.seats().length; i++)
                tot += this.seats()[i].meal().price;
            return tot
        }, vm)



        ok(vm)

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
                    this.tA('') } }

            this.xSl = function () {
                this.all.removeAll(this.sl())
                this.sl([]) }
            this.srt = function() { this.all.sort() }
        }

        ok(new Lst())
    }
    BTRLST=function(){$.x('o')

        f= $.fSb('A',[ 'Add:',
            $.ipV('tA'),
            $.sb('Add').bEn('tA().length>0')
        ])

        $.p('Your values:')
        $.sl().mlt().b({
            o:'all',
            so:'sl'
        })

        $.d([

            $.bt('Rem').b({

                $:'xSl',

                en:'sl().length > 0'

            }),


            $.bt('Srt').b({$:'srt', en:'all().length > 1'})

        ])


        Lst = function(){

            this.tA = kO('')

            this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)

            this.sl = kA('Hm')

            this.A = function () {
                if (this.tA() &&
                    this.all.indexOf(this.tA())<0
                ){

                    this.all.push(this.tA())
                    this.tA('')}
            }

            this.xSl = function(){

                this.all.removeAll(this.sl())

                this.sl([])

            }


            this.srt = function() { this.all.sort() }
        }

        ok( new Lst() )

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
    LIST=function(){$.x('z')

        f=  $.f().A(

            $.sp('add item'),

            $.ip().b({v:'itemToAdd', V:'afterkeydown'}),

            $.sb('add').bE('itemToAdd().length>0')

        )


        f.bSb('addItem')





        $.d().A(f,

            $.d().A(
                $.sp('Your values:'),
                $.sl().h(5).b({
                    o:'allItems',
                    so:'selectedItems'
                })
            ),



            $.d().A(

                $.bt('remove').b({
                    c:'removeSelected',
                    e:'selectedItems().length>0'}),

                $.bt('sort').b({
                    c:'sortItems',
                    e:'allItems().length>1'}))
        )

        ok({ itemToAdd:ko.o(''),
            allItems:ko.oa(['a','b','c']),
            selectedItems:ko.oa(['d']),
            addItem:function(){
                $l('addItem')
                if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                    vm.allItems.push(vm.itemToAdd());vm.itemToAdd('')
                }
            },


            removeSelected:function(){
                allItems.removeAll(o.selectedItems())
                selectedItems([])
            },
            sortItems:function(){o.allItems.sort()}
        })

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
    DELETE=function(){$.x()
//bind bt 'click' to parent.rem
        $.h4('People')

        $.ulE('peep',[ $.li([
            $.sp('pos/name: '),
            $.spT('$index'),
            $.spT('n'),
            $.$bt('del', 'rm', '-')
        ]) ])
        $.$bt('A')

        ok({ peep : ko.oa({n:'B'},{n:'Ch'},{n:'De'}),
            A: function(){this.peep.push({n: "New at "+$D()})},
            rm : function (a) {vm.peep.remove(this)}
        })


    }
    ROOT=function(){$.x('x')
        $.uE('fs', [  $.li().b({
            t:'$data',
            s:'{selected: $data==$root.chFI()}',
            $:'$root.gtf'

        })

        ]).K('fs')

        ok({
            fs:['I','A','Se','Sp'],
            chFI: ko.o(),
            gtf: function(f){
                $l('click: ' + 'f: '+ f + ', this: '+this)
                f = f||'frog'
                vm.chFI(f)
            }
        })
    }
    BARN=function(){$.x()


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
    workss()
    function workss(){

        each()
        function each(){
            KOE=function(){

                $.x().t([$.tH([$.tr([$.th('F'),$.th('L')])]),

                    $.tBE('peep', [
                        $.tr([
                            $.tdT('f'),
                            ', ',
                            $.tdT('l')
                        ])
                    ])])

                ok({
                    peep: [
                        {f:'a',l:'A'},
                        {f:'b',l:'B'},
                        {f:'c',l:'C'}
                    ]})

            }

            BARN=function(){$l('barn')

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
            }
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
    PLAN=function(){$.z().h1('Plan!')

        $.p().A($.lb().A(
                $.cC('displayAdvancedOptions'), 'Display advanced options'
            )
        )

        $.p().A('Show:',

            $.lb([$.ip()]),  $.lb([$.ip()]),  $.lb([$.ip()])

        )



        /*
         <p data-bind='fadeVisible: displayAdvancedOptions'>
         Show:
         <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
         <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
         <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
         </p>*/


        $.d([$.d([ $.d()]) ])

        /*

         <div data-bind='template: { foreach: planetsToShow,
         beforeRemove: hidePlanetElement,
         afterAdd: showPlanetElement }'>
         <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
         </div>

         */

        $.p([$.bt(), $.bt()])

        /*
         <p data-bind='fadeVisible: displayAdvancedOptions'>
         <button data-bind='click: addPlanet.bind($data, "rock")'>Add rocky planet</button>
         <button data-bind='click: addPlanet.bind($data, "gasgiant")'>Add gas giant</button>
         </p>
         */


        Planets  = function() {

            this.planets = ko.oa([

                { name: "Mercury", type: "rock"},
                { name: "Venus", type: "rock"},
                { name: "Earth", type: "rock"},
                { name: "Mars", type: "rock"},
                { name: "Jupiter", type: "gasgiant"},
                { name: "Saturn", type: "gasgiant"},
                { name: "Uranus", type: "gasgiant"},
                { name: "Neptune", type: "gasgiant"}
            ]);

            this.typeToShow = ko.o("all");
            this.displayAdvancedOptions =ko.o(false);
            this.addPlanet = function(type) {
                this.planets.push({
                    name: "New planet",
                    type: type})}
            this.planetsToShow = ko.pc(function() {
                // Represents a filtered list of planets
                // i.e., only those matching the "typeToShow" condition
                var desiredType = this.typeToShow();
                if (desiredType == "all") return this.planets();
                return ko.utils.arrayFilter(this.planets(), function(planet) {
                    return planet.type == desiredType;
                });
            }, this);


            // Animation callbacks for the planets list
            this.showPlanetElement = function(el) {
                if (el.nodeType === 1) $(el).hide().slideDown()
            }

            this.hidePlanetElement = function(el) {
                if (el.nodeType === 1) $(el).slideUp(function() { $(el).remove(); }) }
        }


// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
// Could be stored in a separate utility library

        ko.bh.fadeVisible = {
            init: function(el, valAcc) {
                // Initially set the el to be instantly visible/hidden depending on the value
                var value = valAcc();
                $(el).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
            },
            update: function(el, valAcc) {
                // Whenever the value subsequently changes, slowly fade the el in or out
                var value = valAcc();
                ko.unwrap(value) ? $(el).fadeIn() :
                    $(el).fadeOut();
            }

        }


        ok(new Planets())

    }

    PLAN=function(){$.z().h1('Plan!')

        $.p().A($.lb().A(
                $.cC('displayAdvancedOptions'), 'Display advanced options'
            )
        )

        $.p().A('Show:',

            $.lb([$.ip()]),  $.lb([$.ip()]),  $.lb([$.ip()])

        )



        /*
         <p data-bind='fadeVisible: displayAdvancedOptions'>
         Show:
         <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
         <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
         <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
         </p>*/


        $.d([$.d([ $.d()]) ])

        /*

         <div data-bind='template: { foreach: planetsToShow,
         beforeRemove: hidePlanetElement,
         afterAdd: showPlanetElement }'>
         <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
         </div>

         */

        $.p([$.bt(), $.bt()])

        /*
         <p data-bind='fadeVisible: displayAdvancedOptions'>
         <button data-bind='click: addPlanet.bind($data, "rock")'>Add rocky planet</button>
         <button data-bind='click: addPlanet.bind($data, "gasgiant")'>Add gas giant</button>
         </p>
         */


        Planets  = function() {

            this.planets = ko.oa([

                { name: "Mercury", type: "rock"},
                { name: "Venus", type: "rock"},
                { name: "Earth", type: "rock"},
                { name: "Mars", type: "rock"},
                { name: "Jupiter", type: "gasgiant"},
                { name: "Saturn", type: "gasgiant"},
                { name: "Uranus", type: "gasgiant"},
                { name: "Neptune", type: "gasgiant"}
            ]);

            this.typeToShow = ko.o("all");
            this.displayAdvancedOptions =ko.o(false);
            this.addPlanet = function(type) {
                this.planets.push({
                    name: "New planet",
                    type: type})}
            this.planetsToShow = ko.pc(function() {
                // Represents a filtered list of planets
                // i.e., only those matching the "typeToShow" condition
                var desiredType = this.typeToShow();
                if (desiredType == "all") return this.planets();
                return ko.utils.arrayFilter(this.planets(), function(planet) {
                    return planet.type == desiredType;
                });
            }, this);


            // Animation callbacks for the planets list
            this.showPlanetElement = function(el) {
                if (el.nodeType === 1) $(el).hide().slideDown()
            }

            this.hidePlanetElement = function(el) {
                if (el.nodeType === 1) $(el).slideUp(function() { $(el).remove(); }) }
        }


// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
// Could be stored in a separate utility library

        ko.bh.fadeVisible = {
            init: function(el, valAcc) {
                // Initially set the el to be instantly visible/hidden depending on the value
                var value = valAcc();
                $(el).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
            },
            update: function(el, valAcc) {
                // Whenever the value subsequently changes, slowly fade the el in or out
                var value = valAcc();
                ko.unwrap(value) ? $(el).fadeIn() :
                    $(el).fadeOut();
            }

        }


        ok(new Planets())

    }



    function protoErr() {
        CHERRY = function () {
            $l('cherry')
            $.x('o')
            $.p($.sp('spam?'), $.cC('wants'))
            $.d(['Preferred flavors of spam:',
                $.d([
                    $.p($.sp('cherry'), $.cC('flav').v('cherry')),
                    $.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
                    $.p($.sp('Glut'), $.cC('flav').v('glut'))
                ])
            ]).bVs('wants')

            ok({
                wants: ko.o(1),
                flav: ko.oa(["cherry", "almond"])
            })


            // vm.flav.push("msg")
            /*
             function $.cKO(m, b, v){
             var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
             if(v){ cb.v(v)}
             return p
             }*/


        }

    }

    ADDER=function(){$.x()

        $.h4('People')

        $.ulE('peep',[ $.li([
            $.sp('pos/name: '),
            $.spT('$index'),
            $.spT('n'),
            $.$bt('del', 'rm', '-')
        ]) ])

        $.$bt('A')

        ok({ peep : ko.oa({n:'B'},{n:'Ch'},{n:'De'}),
            A: function(){this.peep.push({n: "New at "+$D()})},
            rm : function (a) {vm.peep.remove(this)}
        })


    }
//bind bt 'click' to parent.rem
    ADDER=function(){$.x()

        $.h4('People')

        $.ulE('peep',[ $.li([
            $.sp('pos/name: '),
            $.spT('$index'),
            $.spT('n'),
            $.$bt('del', 'rm', '-')
        ]) ])

        $.$bt('A')

        ok({ peep : ko.oa({n:'B'},{n:'Ch'},{n:'De'}),
            A: function(){this.peep.push({n: "New at "+$D()})},
            rm : function (a) {vm.peep.remove(this)}
        })


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
    CHERRY=function(){$.x('o')
        $.p($.sp('spam?'), $.cC('wants'))
        $.d([  'Preferred flavors of spam:',
            $.d([
                $.p($.sp('cherry'), $.cC('flav').v('cherry')),
                $.d([$.p($.sp('Almond'),   $.cC('flav').v('almond'))]),
                $.p($.sp('Glut'), $.cC('flav').v('glut'))
            ])
        ]).bVs('wants')

        ok({
            wants:ko.o(1),
            flav:ko.oa(["cherry","almond"])
        })





        // vm.flav.push("msg")
        /*
         function $.cKO(m, b, v){
         var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
         if(v){ cb.v(v)}
         return p
         }*/


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

    LIST=function(){$.x('z')

        f=  $.f()

        f.bSb('addItem').A(

            $.sp('add item'),
            $.ip().b({v:'itemToAdd', V:'afterkeydown'}),
            $.sb('add').bE('itemToAdd().length>0')
        )

        $.d().A(f,

            $.d().A(
                $.sp('Your values:'),

                $.sl().h(5).b({

                    o:'allItems',
                    so:'selectedItems'
                })
            ),

            $.d().A(

                $.bt('remove').b({
                    c:'removeSelected',
                    e:'selectedItems().length>0'}),
                $.bt('sort').b({
                    c:'sortItems',
                    e:'allItems().length>1'}))
        )
        ok({ itemToAdd:ko.o(''),
            allItems:ko.oa(['a','b','c']),
            selectedItems:ko.oa(['d']),
            addItem:function(){
                $l('addItem')
                if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                    vm.allItems.push(vm.itemToAdd());vm.itemToAdd('')
                }
            },


            removeSelected:function(){
                allItems.removeAll(o.selectedItems())
                selectedItems([])
            },
            sortItems:function(){o.allItems.sort()}
        })
    }
    LIST=function(){$.x('z')

        f=  $.f()

        f.bSb('addItem').A(

            $.sp('add item'),
            $.ip().b({v:'itemToAdd', V:'afterkeydown'}),
            $.sb('add').bE('itemToAdd().length>0')
        )

        $.d().A(f,

            $.d().A(
                $.sp('Your values:'),

                $.sl().h(5).b({

                    o:'allItems',
                    so:'selectedItems'
                })
            ),

            $.d().A(

                $.bt('remove').b({
                    c:'removeSelected',
                    e:'selectedItems().length>0'}),
                $.bt('sort').b({
                    c:'sortItems',
                    e:'allItems().length>1'}))
        )
        ok({ itemToAdd:ko.o(''),
            allItems:ko.oa(['a','b','c']),
            selectedItems:ko.oa(['d']),
            addItem:function(){
                $l('addItem')
                if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                    vm.allItems.push(vm.itemToAdd());vm.itemToAdd('')
                }
            },


            removeSelected:function(){
                allItems.removeAll(o.selectedItems())
                selectedItems([])
            },
            sortItems:function(){o.allItems.sort()}
        })
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
    BTRLST=function(){$.x('o')

        f= $.fSb('A',[ 'Add:',
            $.ipV('tA'),
            $.sb('Add').bEn('tA().length>0')
        ])

        $.p('Your values:')
        $.sl().mlt().b({
            o:'all',
            so:'sl'
        })

        $.d([

            $.bt('Rem').b({

                $:'xSl',

                en:'sl().length > 0'

            }),


            $.bt('Srt').b({$:'srt', en:'all().length > 1'})

        ])


        Lst = function(){

            this.tA = kO('')

            this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)

            this.sl = kA('Hm')

            this.A = function () {
                if (this.tA() &&
                    this.all.indexOf(this.tA())<0
                ){

                    this.all.push(this.tA())
                    this.tA('')}
            }

            this.xSl = function(){

                this.all.removeAll(this.sl())

                this.sl([])

            }


            this.srt = function() { this.all.sort() }
        }

        ok( new Lst() )

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


    tabl()
    function tabl() {
        Gift = function (gifts) {
            var vm = this

            vm.gifts = ko.oa(gifts)

            vm.addGift = function () {
                vm.gifts.push({name: "", price: ""})
            }

            vm.removeGift = function (gift) {
                vm.gifts.remove(gift)
            }

            vm.save = function (form) {
                alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
            }

            // To actually transmit to server as a regular form post, write this:
            // ko.utils.postJson($("form")[0], self.gifts)

        }
        KOGRID = function () {
            $.z()


            f = $.f().at({action: '/someServerSideHandler'})


            f.A(
                $.p('You have asked for').A($.sp('&nbsp;').bT('gifts().length'), 'gift(s)'),

                $.t().bVs('gifts().length > 0').A(
                    $.tH().A($.tr().A(//tHR
                        $.th().A('Gift name'),
                        $.th().A('Price'))),
                    $.tB().bE('gifts').A($.tr().A(  //tBR
                        $.td().A($.ip().K('required').b({v: 'name', u: true})),
                        $.td().A($.ip().K('required number')
                            .b({v: 'price', u: true})),
                        $.td().A($.a('delete').b$('$root.removeGift'))))),

                $.bt('add gift').b$('addGift'),

                $.sb().bEn('gifts().length > 0')
            ).A()


            ok(new Gift([

                {name: "Tall Hat", price: "39.95"},
                {name: "Long Cloak", price: "120.00"}

            ]))

            // $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation

        }
//broken
        MENU = function () {
            $.z('b').h2('Your seat reservations')

            $.bt('reserve').b$('A')

            AM = [{n: 'fries', p: 10}, {n: 'fish', p: 20}, {n: 'noodles', p: 30}]


            $.t().A($.tHR(['psngr n', 'm', '$$', '']), $.tB().bE('seats').A(
                    $.tr().A(
                        $.td().bT('n'),
                        $.td().bT('m().n'),
                        $.td().A(
                            $.sl().b({
                                o: '$root.AM',
                                ot: 'm'    //v : 'm',
                            })
                        ),
                        $.td().bT('m().p')
                    )
                )
            )

            ok({
                seats: $oa([
                    {n: 'Jo', m: ko.o(AM[0])},
                    {n: 'Bo', m: ko.o(AM[1])}]),
                A: function () {
                    vm.seats.push({
                        n: 'hahaha',
                        m: ko.o({n: 'noodles', p: 30})
                    })
                }
            })

        }
    }

}
function formApps(){
//bind cb and bind ip to 'enable'
    KOEN=function(){$.x()

        $.p().A($.cbC('hasPhone'), 'I have phone' )
        $.p('Your cellphone number').A(
            $.ip().b({ v:'num', en:'hasPhone'}))

        ok({ hasPhone: ko.o(0), num:'' })

    }



///*** PERFECT FOR EDITTING A PROFILE IP
    KOFC=function(){$.x()

        $.p('Name:').A(

            $.ip().b({   vs:'editing',  f:'editing',
                v:'name'
            }),

            $.d('r').b({  vs:'!editing()',
                t:'name',
                $:'edit'
            })
        )

        $.p('Click the name to edit it; click elsewhere to apply changes')

        function VM(n) {var vm=this
            vm.name = ko.o(n)
            vm.editing = ko.o()
            vm.edit = function() {vm.editing(1) }
        }

        ok(new VM("Bert Bertington"))
    }




//bind cb 'checked' to boolean

    SPAM=function(){$.x('o','spam')


        $.p('spam? ').A(
            $.cbC('spam')
        )

        ok({   spam: ko.o(1)   })
        $.in(2, function(){   vm.spam(0)   })
    }



    KOIP=function(){$.z('x')

        $.p('Login name:').A(
            $.ipTi('un') )
        $.p('Pw:').A(
            $.pwTi('pw') )     // $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>


        $.A(
            'vm: ',
            $.pre().bT(
                'ko.toJSON($root, null, 2)'
            )

        )

        ok({   un: ko.o(''),    pw: ko.o('abc')  })

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
    }}
//sel
SLOP=function(){$.z()


    ok({
        cunts : $oa('Fra','Ger','Spa'),
        selCunts : $oa('Ger')
    })




    $.p('where go?:').A(
        $.sl().b({
            o:'cunts',   so: 'selCunts'
        }).sz(5).mlt() )

    $.in(function(){
        vm.selCunts.push('Fra')
    }, '*')


    // 1st only Ger is selected, then later Fra too


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
    ok({
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
}//broken select and inputs

IF=function(){$.x('x')
    $.cC('dispMs')
    $.sp('Disp ms')
    $.pI('dispMs','Here is a message. Astonishing')
    ok({dispMs: ko.o(1)})
}