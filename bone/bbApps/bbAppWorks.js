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
