$l('bbApps')
Bb.Per=function(){
    return $M({
        d: {n:'j', a:20, o:'p'}
    })
}

//EVENTS
BBEV=function(){$.x().i('chicks')


    ev = Bb.Ev()
    ev.b("fun:had", // bind? on?
        function(){alert("wee!")})
    //trigger
    ev.tr("fun:had")  //it'll alert "wee!"


}
BBEV=function(){$.x().i('chicks')

    ev = Bb.E
    ev.b("fun:had", function(){  $l("wee!")  })
    ev.tr("fun:had")

}

//MODELS
BACKMOD=function(){


    Person=bbM({
        i:function(){alert("Welcome")}})

    person=Person({})

    person.s({name:"Thomas",age:67})


    z()
    dva(300).id('sb')

    Sidebar=bbM({
        fn:function(){
            return this.s({c:prompt("c?")})}})

    Sidebar()
        .oC('c',
        function(m,c){
            qi('sb').c(c)
        })
        .s({c:'w'}).fn()

}
BACKMOD=function(){
    Person=$$M({
        i:function(){alert("Welcome")}})
    person=Person({})
    person.s({name:"Thomas",age:67})
    z()
    dva(300).id('sb')
    Sidebar=$$M({
        fn:function(){
            return this.s({c:prompt("c?")})}})
    Sidebar()
        .oC('c',
        function(m,c){
            qi('sb').c(c)
        })
        .s({c:'w'}).fn()}
MOD=function(){

    m=bbM({n:'j'})


    Donut = bbM({

        d:{
            n:null,
            sparkles:false,
            cream_filled:false},

        u:function(){var t=this
            return t.id?'/donuts/'+t.id:'/donuts'}

    })




    bostonCream=Donut({
        n:'Boston Cream',
        cream_filled:true
    })


    bostonCream.s({sprinkles:true})

    bostonCream.S() //save

    Donuts=bbC({

        m:Donut,

        url:"/donuts"

    })

    donuts=Donuts()

    donuts.fetch()// donuts.at(0); -> gets donuts by index.
    // donuts.get(0); -> gets donuts by id.
    // donuts.each(function(d){$l(d.get("name"))})
    // donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
    // donuts.map(function(d){return d.get("name")})

    DonutShop=bbM({

        defaults:{n:"Untitled"},

        initialize:function(){var t=this

            t.donuts=Donuts()
            t.donuts.url='donut_shops/'+t.id+"/donuts"}
    })

    donutShop.oA(function(donut){
        alert("added "+donut.get("name"))})


    lemonFilled = donutShop.donuts.a({
        n:"Lemon Filled"
    })


    a=Eve()

    a.o("fun:had",function(){alert("wee!")});

    a.e("fun:had")//it'll alert "wee!"


}
MODCHANGE = function () {
    $.x('x', 'modchange')


    Bk = $M({

        d: {ID: "ooooo", n: ""},

        i: function () {
            var bk = this;
            $l('init..')


            bk.$(function () {
                $l('change')
                g = G(arguments)
                o = g[1]
                m = g[0]

                if (bk.hC('ID')) {
                    $l('ID changed')
                }
                // if(bk.hC('n')){$l('n changed') }
                bk.hC('n', function () {
                    $l('n changed')
                })
            })
        },

        show: function () {
            $l('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
        }

    })

    bk = Bk({ID: 1, n: "a"})
    bk.s({r: 'a'}, {a: 1, b: 2, c: 3})
    $.in(function () {
        bk.s('n', 'z', {a: 1, b: 2, c: 3})
        $.in(function () {
            bk.s({n: 'rfds'}, {a: 1, b: 2, c: 3})
        }, '*')

    }, '*')
}
BACKSET = function () {
    $.x('g', 'backset')


    d = $.d('z', 500, 300).id('sb')


    Sb = $M({

        ask: function () {

            this.s({c: prompt('col?')})

        }
    })

    sb = Sb()


    // sb.on('change', function(){g=G(arguments)})
    sb.on('change:c', function (modThatChangedC, cChangedTo, ops) {
        $l('changed to ' + cChangedTo)

        o = ops

        modThatChangedC.s('dat', 'something')

        $('#sb').C(cChangedTo)
        $.h1(modThatChangedC.g('dat'))
    })


    sb.s({
        c: 'b'
    })


    //   sb.ask()
    //   Per=$M({i: function(){  $l(  this.g('n')  + ' says hello!'   ) }})
    //   p=Per( {n:"mac", a:67})

}
BACKSET=function(){z()
    d=dva(400)
    Sid=$$M({

        promptColor:function(){
            this.s({
                co : pr('color:')
            }) }
    })
    sb=Sid()
    sb.on('change:co', function(mod, col){ d.c($l(col)) })
    sb.s({co:'w'})
    sb.promptColor()
}
BACKSET=function() {$.x()

    Sb= Sidebar = Bb.m.e({

        ask: function() {this.s({c: prompt("color?")})}})
    sb = Sb.o()
    sb.on('change:c', function(md, c) {$('body').C(c)})
    sb.set({c: 'b'})
    sb.ask()
    //right from ko site
    d = $.dA(400)

    Sid = Bb.M({
        promptColor: function () {
            this.s({
                co: pr('color:')
            })
        }
    })

    sb = Sid()
    sb.on('change:co', function (md, c) {d.C($l(c))})
    sb.C('w')
    sb.ask()
    Per=Bb.M.e({i:function(){
        alert("Welcome")}})

    p=Per({})
    p.s({n:"mac",a:67})
    $.dA(300).id('sb')

    Sidebar=Bb.M.e({
        fn:function(){
            return this.s({
                c:prompt("c?")})}
    })

    Sidebar()
        .oC('c', function(m,c){
            $('#sb').C(c)
        }).s({c:'w'}).fn()

}
BACKSET=function(){z()
    d=dva(400)
    Sid=bbM({

        promptColor:function(){
            this.s({
                co : pr('color:')
            }) }
    })

    sb=Sid()

    sb.on('change:co', function(mod, col){ d.c($l(col)) })

    sb.s({co:'w'})

    sb.promptColor()

}
OPS = function () {
    $.x('o', 'ops')


    o = _.x({}, Bb.E)


    o.on('yo', function () {
        g = G(arguments)
    })


    o.trigger('yo', 'a', 'b', 'c')

}



SIMP=function(){$.x('r').h1('tut')
    p = $M()({n:'j'})
    $.h3('p: '+p.g('n'))
}
SIMP=function(){$.x('r','simp')

    $.h1(
        'f: '+  $M()({n:'j'}).g('n'),
        $.br(),  'l: '+  $m({ n:'y'}).n
    )

}
PER=function(){$.x('n')
    Per=Bb.M.e({

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
PER=function(){$.x('n')

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
PER22=function(){

    $.x('n')

    Per= Bb.M.x({
        d: {n:'j', a:20, o:'p'}
    })
    p = new Per

    PerV = $$V({
        t:'li', _:'some-per',
        k:'per',
        r: function(){
            this.A('n').A()
        },
        //  this.A(this.g('n')).A() //  this.A(this.model.get('n').A()
        initialize: function(){
            $l(this.model);
            this.r()
        }
    })

    pV =  PerV({ m:p  })

}
PER11=function(){$.x('n')

    p = $$M()({

        d: {n:'j',a:20,o:'p'}
    })


    PerV = $V({
        t:'li', _:'some-per', k:'per',
        r: function(){  this.A('n').A() },
        i: function(){
            $l(this.model); this.r() }
    })

    pV = PerV({ m: p }) //-> p.V(PerV)
}
PER00=function(){$.x('n')
    m = $M({d:{n:'j',a:20,o:'p'}})()

    m.V($V({

        t:'li', _:'some-per', k:'per',
        r: function(){  this.A('n').A() },
        initialize: function(){this.r()}
    }))

    _.in(function(){m.l()})

}
BACKVAL=function(){

    Person=bbM({

        d:{lame:true},

        i:function(){var t=this

            t.on('error',
                function(m,e){alert(3); $l(e)})


            t.on('change:name',
                function(m,e){alert(3); $l(e)})

        },

        v:function(at){
            if(at.name=='rigo'){
                return "name can't be rigo!"}}

    })


    p=Person({name:"rigo", age:7})

    //c=bbC({m:Person})
    //p1=c.a(person1)
    //p2=c.a(person2)
    //c.rm(p1)
}
BACKVAL=function(){
    Person=$$M({

        d:{lame:true},

        i:function(){var t=this

            t.on('error',
                function(m,e){alert(3); $l(e)})


            t.on('change:name',
                function(m,e){alert(3); $l(e)})

        },

        v:function(at){
            if(at.name=='rigo'){
                return "name can't be rigo!"}}

    })
    p=Person({name:"rigo", age:7})
    //c=bbC({m:Person})
    //p1=c.a(person1)
    //p2=c.a(person2)
    //c.rm(p1)
}
VALID = function () {
    $.x('x', 'valid')

    Per = new Bb.M({n: 'J'})

    Per.validate = function (at) {
        if (!at.n) {
            return '!name'
        }
    }
    Per.s({n: 'S'})


    $l(P.g('n'))  // 'S'
    Per.unset('name', {vld: true}) // false


    Td = Bb.M.x({

        df: {completed: false},
        vld: function (at) {
            if (U(at.tt)) {
                return "!tt"
            }
        },

        i: function () {

            this.on("invalid", function (md, z) {
                $l('err: ' + z)
            })
        }

    })


    td = new Td()
    td.s('completed', true, {vld: true}); // logs: !tt


    $l('completed: ' + td.g('completed')); // completed: false

    emptyTd = new Td(null, {vld: true});
    $l(emptyTd.validationError);

}
VALIDFRND = function () {
    $.x().h1('frnd')


    Per = $M({

        d: {lame: true},

        v: function (at, op) {
            if (at.n == 'rigo') {
                return "n cant be rigo!"
            }
        },

        i: function () {
            var md = this;
            $l('new frnd!')

            md.on('change:n', function (m, e) {
                $l('change:n:' + e)
            })

            md.oIv(function (m, z) {
                $l('invalid trgd: ' + z)
            })
        }


    })


    p1 = Per({g: 'jigo'})


    p1.s('n', 'hah')
    p1.s({n: "rigo", a: 7}, {validate: true}
    )


    $l('n:' + p1.g('n'))


    p2 = Per({n: "qigo", a: 47})
    p3 = Per({n: "rigo", a: 7})

    $.bt('p2 validty', function () {
        $l('isValid: ' + p2.isValid())
    }) //  valid
    $.bt('p3 validty', function () {
        $l('isValid: ' + p3.isValid())
    }) //not valid


    //
    cl = $Cl({m: Per})()
    cl.add([p2, p3])
    cl.remove(p3)

}
VALIDPEOPLE = function () {
    $.x('b', 'people')


    Per = $M({
        i: function () {
            this.oIv(function (m, z) {
                $l(z)
            })
        },
        d: {n: 'doe', a: 30, j: 'wrk'},
        validate: function (at) {
            if (at.a < 0) {
                return 'a<0!'
            }
        },
        work: function () {
            return this.g('n') + ' is working'
        }
    })


    p = Per({n: 'y', a: 34})
    p.oIv(function (m, z) {
        $l('err: ' + z)
    })


    PerV = $V({
        t: 'li',
        k: 'person', x: 'some-person',

        i: function () {
            this.r()
        },

        //tp: _.tp("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
        r: function () {
            var v = this
            //this works, but doesnt use a template
            v.h(v.g('n') + ' ' + v.g('a') + ' ' + v.g('j'))
            v.h(v.tJ())
        }
    })

    pV = PerV({m: p})


    peepC = $Cl({m: Per})
    pC = peepC([
        {n: 'rigo', a: 29},
        {n: 'j', a: 2},
        {n: 's', j: 'gx'}
    ])
    pC.add(p)
    pC.at(1)
    //pC.n('joejoe')
    pC.at(1)
    pC.s('name', 'joejoe')
    PeepV = $V({
        tn: 'ul',
        i: function () {
            $l('hi');
            $l(this.cl)
        },

        r: function () {
            var vw = this
            vw.eCl(function (p) {
                var v, pV
                $l(p.g('n'))
                pV = PerV({m: p})
                $l(pV.el)
                vw.q.A(pV.el)
            }, this)
        }
    })
    pcv = PeepV({cl: pC})
    pcv.r()
    $.A(pcv.el)
    /*

     md.validate() checking attr vals  prior to setting them.

     By default occurs when md is persisted using save() or when set() is called if {vld:true}

     Should error be returned: An invalid event will be triggered, setting validationError property on md with val which is returned by this met.
     .save() will not continue and atts of md will not be modified on server.

     Note: atts object passed to validate fn reps what atts would be after completing current set() or save().
     This object is distinct from current atts of md  and from  pams passed to operation.

     Since it is created by shallow copy, it is not possible to change any Number, String, or Boolean attr of input within fn, but it is possible to change ats in nested objects.


     validation on init is possible but of limited use, as object being constructed is internally marked invalid but nevertheless passed back to caller


     */
}

//VIEW
VWW=function(){$.x()


    d= $.d('r',200).A(
        $.h1('hello'),
        $.bt(__)
    )

    //d.$(function(){v.r()})

    mOv=function(){$l('mouse over !')}

    v = $V({
        e:{'click button': function(){$l('click')},
            $$: 'r',
            v: mOv
        },

        q:d,

        r:function(){
            alert('double click')
            $.bd().C($r())
        }
    })()
}
BEAUTY = function(){$.x('o','beauty')

    $v({

        q : $.d('r', 200).A(
            $.h1('hello'),
            $.bt(__)),
        e: {
            'click button': function(){$l('$')},
            $$: 'r',
            v: function(){$l(' m o !')}
        },
        r : function(){  $l(__+'$$');  $.c$() }

    })

}
BBVIEW=function(){z()

    di('div1').a().w(500).h(500).c('r')

    ListView=bbV({

        el: $('#div1')[0],

        I:function(){this.R()},

        R:function(){
            //this.$el.append("<ul><li> hello </li></ul>")
            qq(this.$el)("<ul><li> hello </li></ul>")
        }

    })

    v= ListView()

}
BBVIEW=function(){$.x('b','bbview')

    $.dI('d1',
        'r', 500, 500)


    LstV = Bb.V.e({
        el: '#d1',
        r: function(){
            this.A(
                $.ul([
                    'hello']))},
        i: function(){ this.r() }})

    v = LstV.o()
}
BBVIEW=function(){$.x('b','bbview')
    v=$V({
        q: d=$.dI('d1','r', 500, 500),
        r: function(){this.A($.ul(['hello']))},
        i: function(){this.r()}
    })()
}
BBVIEW=function(){$.x('b','bbview')


    $.dI('d1','r', 500,500).V({
        r: function(){this.A($.ul(['hello']))},
        i: function(){this.r()}
    })()

}
BBVIEW=function(){z()

    di('div1').a().w(500).h(500).c('r')

    ListView=bbV({

        el: $('#div1')[0],

        I:function(){this.R()},

        R:function(){
            //this.$el.append("<ul><li> hello </li></ul>")
            qq(this.$el)("<ul><li> hello </li></ul>")
        }

    })

    v= ListView()

}
BBVP1=function(){$.x('x', 'bb view people')

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
BBVP=function(){$.x('x', 'bb view people')

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
BBVIEW=function(){$.x('b','bbview')


    v=$V({

        q: d=$.dI('d1','r', 500, 500),

        r: function(){this.A($.ul(['hello']))},

        i: function(){this.r()}

    })()


    /* also works, uses jq.fn.V ...very cool


     $.dI('d1','r', 500,500).V({
     r: function(){this.A($.ul(['hello']))},
     i: function(){this.r()}
     })()

     */

}
BBVIEWV=function(){$.x('b','bbviewV')
    //  uses jq.fn.V ...very cool
    $.dI('d1','r', 500,500).V({
        r: function(){this.A($.ul(['hello']))},
        i: function(){this.r()}

    })()
}
PER=function(){$.x('n')

    Per= Bb.Per()


    PerV = $V({

        t:'li', //  _:'some-per',
        k:'per',


        r: function(){
            this.q.A('n')
            this.q.A()
            //  this.A(this.g('n')).A() //
            // this.A(this.model.get('n').A()
        },

        i: function(){
            $l('i: ' + _.jS(this.model.J()) );
            this.r()
        }


    })

    p=  Per()

    pV =  PerV({
        m:p
    })

    $.ev(.5,function(){
        pV.r()
    })

}
PER1=function(){$.x('n')

    m = $m({  d:   {n:'j',a:20,o:'p'}   })


    Vw=$V({
        t: 'li',
        r: function(){

            this.q.A(
                'n: '+ this.model.g('n')
            ).A()


        },

        i: function(){$l('init..')
            this.q.A()
            this.r()
        }
    })


    vw =  m.V(Vw)


    $.in(function(){

        m.l()

    }, '*')

}
BBV=function(){$.x('x','bbv')
    Med = $M({})
    m=Med({t:'antibiotic'})
    m1=Med({t:'antipsychotic'})


    d = $.dA('b', 300,400).XY( 100,100)
    d1 = $.dA('r', 300, 400).XY( 600,100)


    Vw =$V({
        r:function(){this.q.h(this.g('t'));return this },
        i:function(){var v=this
            v.oC(function(){v.r()},'+') }
    })



    v=Vw({ el:d, m:m  })

    v2=Vw({ el:d1,  m:m1 })

    i = $.ip()

    $.bt('change', function(){  m.s('t', i.v())  })


} //*** study this one. is it necess to wrap vws?


BBSAMP1 = function () {
    $.x('b', 'bbsamp', '+')

    d = $.d()

    Rec = $M()

    RecV = $V({
        tagName: 'div', className: 'rec',
        events: {'click': 'move'},
        move: function () {
            this.$el.css('left', this.$el.position().left + 10)
        },
        rr: function () {
            return this.sDims().sPos().sCol()
        },
        sDims: function () {
            this.$el.WH(this.model.get('w'), this.model.get('h'))
            return this
        },
        sPos: function () {
            this.$el.ab()
                .LR(
                this.model.get('pos').x, this.model.get('pos').y)
            return this
        },
        sCol: function () {
            this.$el.C(this.model.get('C'))
            return this
        }
    })

    _.e([
        Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
        Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
        Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
    ], function (md) {

        var r = RecV({model: md})
        r.rr().$el.a2(d)
    })
}
BBSAMP1=function(){$.x('b','bbsamp','+')
    d=$.d()
    Rec = Bb.M.e()

    RecV = Bb.V.e({t:'div', k:'rec',

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

    RecV = $V({

        k:'rec',

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

        sPos:function(){
            this.q.ab().LR(
                this.model.g('pos').x,
                this.model.g('pos').y  )
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
BBSAMP1=function(){$.x('b','bbsamp','+')
    d=$.d()

    Rec = $M()

    RecV = $V({t:'div', k:'rec',

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
            Rec ({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
            Rec ({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
            Rec ({w:100, h:200, pos:{x: 0, y:100},C:'y'})
        ],
        function(md){
            RecV({model: md}).rr().$el.a2(d)

        })
}
BBSAMP10=function(){$.x('b','bbsamp','+')


    d=$.d()

    Rec = $M()

    RecV = $V({

        k:'rec',

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
        sPos:function(){
            this.q.ab().LR(
                this.model.g('pos').x,
                this.model.g('pos').y  )
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
    BBSAMP1=function(){$.x('b','bbsamp','+')
        d=$.d()

        Rec = $M()

        RecV = $V({t:'div', k:'rec',

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
                Rec ({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
                Rec ({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
                Rec ({w:100, h:200, pos:{x: 0, y:100},C:'y'})
            ],
            function(md){
                RecV({model: md}).rr().$el.a2(d)

            })
    }
}
BBSAMP=function(){$.x('b','bbbsamp','+')
    d=$.d()
    Rec = $M()
    RecV = $V({
        k:'rec',
        e: {$: 'move'},
        move:function(){this.q.X(10 ,'+')},
        r:function(){var v=this
            v.q.C(v.g('C')).WH(v.g('w'), v.g('h')).ab(v.g('pos').x, v.g('pos').y)
            return v},
        i:function(){this.r().a2(d)}
    })
    _.e([
        Rec({w:100, h: 30, pos:{x: 300, y:200},C:'o'}),
        Rec({w:100, h: 20, pos:{x: 400, y:150},C:'g'}),
        Rec({w:100, h:200, pos:{x: 0, y:100},C:'y'})
    ], function(md){

        RecV({ m:md })
    })
}
BBSAMP1=function(){$.x('b','bbsamp','+')
    d=$.d()
    Rec = Bb.M.e()

    RecV = Bb.V.e({
        tagName:'div', className:'rec',
        events:{'click': 'move'},
        move:function(){this.$el.css('left', this.$el.position().left +10)},
        rr:function(){return this.sDims().sPos().sCol()},
        sDims:function(){
            this.$el.WH(this.model.get('w'), this.model.get('h'))
            return this
        },
        sPos:function(){
            this.$el.ab()
                .LR(
                this.model.get('pos').x, this.model.get('pos').y)
            return this
        },
        sCol:function(){
            this.$el.C(this.model.get('C'))
            return this}
    })

    _.e([
        Rec.o({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
        Rec.o({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
        Rec.o({w:100, h:200, pos:{x: 0, y:100},C:'y'})
    ], function(md){

        var r=  RecV.o({
            model:md
        })

        r.rr().$el.a2(d)
    })
}
BBSAMP1=function(){$.x('b','bbsamp','+')
    d=$.d()
    Rec = Bb.M.x()
    RecV = Bb.V.x({t:'div', k:'rec',
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
    recs=[
        Rec({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
        Rec({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
        Rec({w:100, h:200, pos:{x: 0, y:100},C:'y'})
    ]

    RecV = $V({
        k:'rec',
        e: {'click': 'move'},
        move:function(){
            this.q.css('left',
                this.q.position().left +10)
        },
        rr:function(){return this.sDims().sPos().sCol()},
        sDims:function(){
            this.$el.WH(
                this.model.get('w'),
                this.model.get('h'))
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

    _.e(recs  , function(md){
        RecV({model:md}).rr().$el.a2(d)
    })

}
BBSAMP1=function(){$.x('b','bbsamp','+')
    d=$.d()
    Rec = Bb.M.e()

    RecV = Bb.V.e({
        tagName:'div', className:'rec',
        events:{'click': 'move'},
        move:function(){this.$el.css('left', this.$el.position().left +10)},
        rr:function(){return this.sDims().sPos().sCol()},
        sDims:function(){
            this.$el.WH(this.model.get('w'), this.model.get('h'))
            return this
        },
        sPos:function(){
            this.$el.ab()
                .LR(
                this.model.get('pos').x, this.model.get('pos').y)
            return this
        },
        sCol:function(){
            this.$el.C(this.model.get('C'))
            return this}
    })

    _.e([
        Rec.o({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
        Rec.o({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
        Rec.o({w:100, h:200, pos:{x: 0, y:100},C:'y'})
    ], function(md){

        var r=  RecV.o({
            model:md
        })

        r.rr().$el.a2(d)
    })
}


