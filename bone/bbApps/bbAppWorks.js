DIVADD = function (){z()

    d = $.dI('d1', 'r', 500, 500)


    _.t(3, function () {
        $$V({

            initialize: function () {this.r()},

            r: function () {

                d.A(
                    $.ul(['hello'])
                )
            }
        })()
    })

    function alt(){

        BBVIEW2=function(){

            $.dI('d1', 'r', 500, 500)
            LstV = Bb.V.x({
                el: '#d1',
                r: function(){
                    this.A(
                        $.ul([
                            'hello']))},
                i: function(){ this.r() }
            })

            v = LstV.o() //not function
        }
        BBVIEW0=function(){$.x('b','bbview0')


            $.dI('d1','r', 500,500).V({
                r: function(){this.A($.ul(['hello']))},
                i: function(){this.r()}
            })()

        }
    }
}//= BBVIEW
ARRPOP=function(){z()
    peep = [{n:'a',a:11}, {n:'b',a:46}, {n:'c',a:13} ]

    vw= $$V({
        t:'ul',
        i:function(){this.$el.C('r')},
        r:function(){
            var el=this.$el.E()

            _.e(this.collection, //vw.cl == vw.collection >> true

                function(p){
                $('#peep')
                el.A($.li().A(p.n + '(' + p.a + ')'))
            })

            return this}
    })({
        c: peep
    })


    $.A(
        vw.r().el
    )

    _.in(1, function(){
        peep.pop()
        vw.r()
    })


    function alpha(){
        BBVP0=function(){$.x('x', 'bb view people 0')
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
}//= BBVP
MDGET=function(){
    $.x('r').h1('tut')
    p = $$M()({ n:'j' })
    $.h3('p: '+ p.g('n'))
}
CLONADD = function () {$.x().h1('backcl'); $.i('chicks').A()
    cl= $$C({})().oA(function (s) {
        $l("new!!!!!! " + s.g('n'))
    }).A([{n: 'g1'}, {n: 'g2'}])
}
CLLEN = function (){z()
    Td = $$M({df: {tt: '', completed: false}});
    cl = $$C({
        md: $$M({d: {tt: '', completed: false}})
    })([Td({tt: 'Read', id: 2})]); $l('len 1?: ' + cl.length)
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

RESET = function () {z()


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
    TdsCl.oA(function (m) {$l("Added " + m.g('tt'))})
    TdsCl.on("remove", function (m) {$l("Removed " + m.g('tt'))})
    TdsCl.on("change:completed", function (m) {$l("Completed " + m.g('tt'))})

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