BBVIEW2=function(){
    $.x('b','bbview2')
    $.dI('d1',
        'r', 500, 500)
    LstV = bb.V.x({
        el: '#d1',
        r: function(){
            this.A(
                $.ul([
                    'hello']))},
        i: function(){ this.r() }})
    v = LstV.o() //not function
}

BBVIEW1=function(){$.x('b','bbview1')
    v=$V({
        q: d=$.dI('d1','r', 500, 500),
        r: function(){this.A($.ul(['hello']))},
        i: function(){this.r()}
    })()
}

BBVIEW0=function(){$.x('b','bbview0')


    $.dI('d1','r', 500,500).V({
        r: function(){this.A($.ul(['hello']))},
        i: function(){this.r()}
    })()

}

BBVP1=function(){$.x('x', 'bb view people 1')

    peep = [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]
    vw= $V({t:'ul',
        i:function(){this.$el.C($r())},
        r:function(){var el=this.$el.E()
            _.e(this.collection, function(p){$('#peep')
                el.A($.li().A(p.n + '(' + p.a + ')'))})
            return this}

    })({cl: peep})


    $.A(vw.r().el)
    $.in(function(){peep.pop(); vw.r()},'*')
}
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
    $.in(function(){peep.pop(); vw.r()},'*')
}


PER2=function(){$.x('n')
    Per=bb.M.e({

        d: {n:'j', a:20, o:'p'}

    })
    p= new Per
    PerV = $V({t:'li', _:'some-per', k:'per',
        r: function(){
            this.A('n').A()
        },
        //  this.A(this.g('n')).A() //  this.A(this.model.get('n').A()
        i: function(){
            $l(this.model);
            this.r()
        }
    })
    pV =  PerV({ m:p  })

}
PER1=function(){$.x('n')

    p = $M({ d: {n:'j',a:20,o:'p'}   })()

    PerV = $V({t:'li', _:'some-per', k:'per',
        r: function(){  this.A('n').A() },
        i: function(){ $l(this.model); this.r() }
    })

    pV = p.V(PerV) //PerV({ m: p })
}
PER=function(){$.x('n')
    m = $M({d:{n:'j',a:20,o:'p'}})()
    m.V($V({
        t:'li', _:'some-per', k:'per',
        r: function(){  this.A('n').A() },
        i: function(){this.r()}
    }))
    $.in(function(){m.l()}, '*')
}
BBSAMP1=function(){$.x('b','bbsamp','+')
    d=$.d()
    Rec = bb.M.e()

    RecV = bb.V.e({t:'div', k:'rec',

        events:{'click': 'move'},
        move:function(){this.$el.css('left', this.$el.position().left +10)},
        rr:function(){return this.sDims().sPos().sCol()},
        sDims:function(){this.$el.WH(this.model.get('w'), this.model.get('h'))
            return this},
        sPos:function(){this.$el.ab().LR(
            this.model.get('pos').x, this.model.get('pos').y)
            return this
        },

        sCol:function(){this.$el.C(this.model.get('C'))
            return this}
    })


    _.e([
        Rec.o({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
        Rec.o({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
        Rec.o({w:100, h:200, pos:{x: 0, y:100},C:'y'})
    ], function(md){


        var r=  RecV.o({model:md})

        r.rr().$el.a2(d)
    })



}
BBSAMP=function(){$.x('b','bbsamp','+')


    d=$.d()
    Rec = $M()

    RecV = $V({k:'rec',

        e: {'click': 'move'},

        move:function(){
            this.q.css('left',
                this.q.position().left +10)
        },
        r:function(){return this.sDims().sPos().sCol()},
        sDims:function(){
            this.q.WH(this.model.g('w'),
                this.model.g('h'))
            return this
        },

        sPos:function(){this.q.ab().LR(
            this.model.g('pos').x,
            this.model.g('pos').y
        )
            return this
        },


        sCol:function(){this.q.C(this.model.g('C'))
            return this}
    })

    _.e([
        Rec({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
        Rec({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
        Rec({w:100, h:200, pos:{x: 0, y:100},C:'y'})
    ], function(md){ RecV({model:md}).rr().$el.a2(d)  })

}
SIMP=function(){$.x('r').h1('tut')
    p = $M()({n:'j'})
    $.h3('p: '+p.g('n'))
}

WOB=function(){
    $.x('x', 'bb view people')
    //without backbone!
    ul = $.ul().id('peep')
    peep = [{n:'a',a:11}, {n:'b',a:46}, {n:'c',a:13}]
    vw={r:function(){
        $('#peep').E()
        _.e(peep, function(p){
            $('#peep').A('<li>'+ p.n + '(' + p.a + ')</li>')
        })}}
    vw.r()
    $.in(function(){peep.pop(); vw.r()},'*')
}
function template() {

    TP=function(){$.x().A(
        a= _.tp("<div>hello:<%=n%></div>")({n:'moe'}),
        b= _.tp('<b><%-tag%></b>',{tag:'<script>'}), // <%- vs <%= ?
        c= _.tp(
            '<%_.e(peep,function(name){%>'+
            '<li>'+'<%=name%>'+'</li>'+
            '<%})%>'
            ,{peep:['moe','curly','larry']})
    )

    }
    TMP = function () {
        $.x('r');
        $V({
            t: 'li', x: 'some-per', k: 'per',
            tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
            r: function () {
                this.A().A(this.tp(this.model.toJSON()))
            },
            i: function () {
                $l(this.model);
                this.r()
            }
        })({m: Per = $M({d: {n: 'j', a: 20, o: 'p'}})()})
    }

    function vwTp(){BBVT1=function(){$.x('x', 'bb view and template');
        md= new bb.M({d:[{t:'a.com', h:'a.com'}, {t:'b.com', h:'b.com'}, {t:'c.com', h:'c.com'}]})


        $.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')

        $.dI('list-tp', [ $.la() ]).C('o')


        Vw = bb.V.e({
            el:'#ct',
            i: function(op){$l(op.blOp); this.tp =$('#list-tp').children()},
            rr:function(){var da, tp; $l('rr: '+ this.model.get('d')[0].h );//$.c('b').ab(300,300)
                da=this.model.get('d')
                tp=this.tp, ul= this.$el.find('ul')
                _.e(da, function(da){ul.A(tp.clone()
                    .find('a').hr('href', da.h).T(da.t).end())}) },
            ev: {'click button':'rr'}
        })
        vw = new Vw({blOp:'empty!', model:md})
        return vw

    }
        BBVT=function(){$.x('x', 'bb view and template');



            $.dI('ct', [
                    $.bt('Load'),
                    $.ul().id('list')
                ]
            ).C('y')

            $.dI('list-tp', [ $.la() ]).C('o')


            v=$V({

                q: '#ct',

                events: {'click button': 'r'},

                r: function(){var da, tp,ul
                    $l('RENDER')
                    /*
                     $l('rr: '+ this.model.get('d')[0].h )
                     //$.c('b').ab(300,300)
                     da=this.model.get('d')
                     tp=this.tp
                     ul= this.$el.find('ul')
                     _.e(da, function(da){ul.A(tp.clone()
                     .find('a').hr('href', da.h)
                     .T(da.t).end())})
                     */
                },
                i: function(op){
                    $l(op.blOp)
                    this.tp = $('#list-tp').children()
                }
            })({

                blOp: 'empty!',

                m: m=$M()({
                    d:[
                        {t:'a.com', h:'a.com'},
                        {t:'b.com', h:'b.com'},
                        {t:'c.com', h:'c.com'}
                    ]
                })

            })

        }}

}