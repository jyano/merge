$l('bbApps')
BBVIEW=function(){$.x('b','bbview')

    $.dI('d1',
        'r', 500, 500)



    LstV = bb.V.e({
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
PER=function(){$.x('n')
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
WOB=function(){$.x('x', 'bb view people')
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
SIMP=function(){$.x('r').h1('tut')
    p = $M()({n:'j'})
    $.h3('p: '+p.g('n'))
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
TMP=function(){$.x('r'); $V({
    t:'li', x:'some-per', k:'per',
    tp: tp=_.tp('<%= n %> (<%= a %>) - <%= o %>'),
    r: function(){this.A().A(this.tp(this.model.toJSON()))},
    i: function(){$l(this.model); this.r()}
})({m:Per=$M({d:{n:'j',a:20,o:'p'}})()})}
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
BBVT=function(){$.x('x', 'bb view and template');
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

}
SIMP=function(){$.x('r','simp')

    $.h1(
        'f: '+  $M()({n:'j'}).g('n'),
        $.br(),  'l: '+  $m({ n:'y'}).n
    )

}
BEAUTY = function(){$.x('o','beauty')

    $v({

        q : $.d('r', 200).A(
            $.h1('hello'),
            $.bt(__)
        ),


        e: {
            'click button': function(){$l('$')},
            $$: 'r',
            v: function(){$l(' m o !')}
        },


        r : function(){  $l(__+'$$');  $.c$() }

    })

}
SWEET = function(){$.x('x', 'bb view people')

    Vw= $V({

        el: $.ul(),

        i: function(){

            this.r().C$('init..')

        },


        r: function(){ var ul=this.q
            this.ECl(function(p){ul.li(p.n,'(',p.a,')') })
            return this}
    })


    peep= [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]

    vw=Vw({ cl: peep  })

    $.in(function(){ peep.pop(); vw.r() })

    BBVP1=function(){$.x('x', 'bb view people')


        Vw= $.ulV({
            i:function(){  this.q.C($r())   },
            r:function(){var el=this.q.E()
                this.cl(function(p){  el.A($.li().A(p.n+'('+p.a+')'))})
                return this}

        })

        vw=Vw({   cl: peep = [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]

        })

        /*

         $.A(vw.r().q)
         $.in(function(){peep.pop(); vw.r()},'*')
         */


    }

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
BACKSET=function() {$.x()

    Sb= Sidebar = bb.m.e({

        ask: function() {this.s({c: prompt("color?")})}})
    sb = Sb.o()
    sb.on('change:c', function(md, c) {$('body').C(c)})
    sb.set({c: 'b'})
    sb.ask()
    //right from ko site
    d = $.dA(400)

    Sid = bb.M({
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
    Per=bb.M.e({i:function(){
        alert("Welcome")}})

    p=Per({})
    p.s({n:"mac",a:67})
    $.dA(300).id('sb')

    Sidebar=bb.M.e({
        fn:function(){
            return this.s({
                c:prompt("c?")})}
    })

    Sidebar()
        .oC('c', function(m,c){
            $('#sb').C(c)
        }).s({c:'w'}).fn()

}
BBSAMP1=function(){$.x('b','bbsamp','+')
    d=$.d()
    Rec = bb.M.e()

    RecV = bb.V.e({
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
BBEXT=function(){
    // https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
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
BACKCOL=function(){z()

    baddies=bbC().oA(
        function(s){
            alert("new baddie: "+ s.g("n"))})

    baddies.a([{n:"bad1"}, {n:"bad2"}])

}
BACKCOL2=function(){

    Friend=bbM({
        d:{lame:true}
    })

    f1=Friend({name:"Thomas", age:67})

    f2= Friend({game:'jigo'})

    f2.s({name:"Rigo", age:7})

    f2.s('mame','hah')

    c=bbC()

    f1=c.a(f1)

    f2=c.a(f2)

    c.rm(f1)
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
BACKDEMO=function(){z()


    Temp('task', [

        lb('Task: '),
        tx().id('task_desc'),
        bt('add task').id('btn')   ])


    di('container').a()

    bbR({


        R:{
            '':'first',
            'first':'first',
            'second':'second'},

        first:function(){$l('first')},
        second:function(){
            new Task()
            $l('second')}

    })()

    bbH()


    Task=bbV({

        el: $('#container'),

        i: function(){this.r()},

        r: function(){this.$el.html( temp('task') )},

        e: {'click button': 'add'},

        add: function(){ alert( qiv('task_desc') + ' task added' )}

    })



}
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
ROUTE=function(){z()

    r=bbR({

        R:{"*x":"d"}

    })()

    r.oR('d',function(a){alert(a)})//#hello -> 'hello'
    r.oR('e',function(a){alert(a)})//#e -> 'e' (could do '/#/e')

    bbH()
}
ROUTEPAMS=function(){z()

    rtr=bbR({

        R:{

            '':'home',
            'view':'v',
            'new': 'nn',
            ':id': 'en',
            'posts/:id':'gPo',

            '*acts':'dfR',

            'download/*path': 'dlF',

            ':route/:action': 'ldV'

        },

        home:function(){al('home')},
        v:function(){al('image')} ,
        nn:function(){},
        en:function(id){al(id)}
    })


    r=rtr()

    r.oR('dfR',al)
    r.oR('gPo',function(id){al('gPo# '+id)})
    r.oR('gPo', function(){alert(3)}) //both routes fire!

    r.oR('dlF', al)
    r.oR('ldV', function(rt,ac){al(rt+'_'+ac)})

    bbH()  // or Bb.h.s({pushState: true})

}
ROUTENAV=function(){z()

    Rt=bbR({

        routes:{
            'po/:id'  :  'gp',
            '*a'      :  'dr'},

        dr:function(a){al(a)},

        gp:function(id){al('Get post '+id)}

    })


    r=Rt()
    bbH()
    bt('hi', function(){r.n('po/2', {t:1}) }).a()}
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
BACKCOL=function(){z()

    baddies=bbC().oA(
        function(s){
            alert("new baddie: "+ s.g("n"))})

    baddies.a([{n:"bad1"}, {n:"bad2"}])

}
BACKCOL2=function(){

    Friend=bbM({
        d:{lame:true}
    })

    f1=Friend({name:"Thomas", age:67})

    f2= Friend({game:'jigo'})

    f2.s({name:"Rigo", age:7})

    f2.s('mame','hah')

    c=bbC()

    f1=c.a(f1)

    f2=c.a(f2)

    c.rm(f1)
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
BACKDEMO=function(){z()


    Temp('task', [

        lb('Task: '),
        tx().id('task_desc'),
        bt('add task').id('btn')   ])


    di('container').a()

    bbR({


        R:{
            '':'first',
            'first':'first',
            'second':'second'},

        first:function(){$l('first')},
        second:function(){
            new Task()
            $l('second')}

    })()

    bbH()


    Task=bbV({

        el: $('#container'),

        i: function(){this.r()},

        r: function(){this.$el.html( temp('task') )},

        e: {'click button': 'add'},

        add: function(){ alert( qiv('task_desc') + ' task added' )}

    })



}
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
BADS=function(){$.x().h1('backcl').i('chicks').A()

    bads=$Cl()()
    bads.oA(function(s){alert("new baddie: "+ s.g("n"))})
    bads.add([{n:"bad1"}, {n:"bad2"}])


}
FRND=function(){$.x().h1('backcl')

    Frnd = $M({d:{lame:1}})
    f1=Frnd({n:"Lul", a:67})
    f2= Frnd({g:'jigo'})
    f2.s({n:"Rigo", a:7})
    f2.s('n','hah')
    Per=$M({

        d:{lame:true},

        i:function(){var t=this
            t.on('error', function(m,e){
                alert(3); $l(e)})
            t.on('change:n',
                function(m,e){
                    alert(3); $l(e)})},

        v:function(at){
            if(at.n=='rigo'){return "n cant be rigo!"}
        }

    })
    p=Per({n:"rigo", a:7})
    cl=$Cl()()
    f1=cl.A(f1)
    f2=cl.A(f2)
    cl.rm(f1)
    Pers= $Cl({m:Per})
    pers=Pers()
    p1= pers.add(p)
    pers.add(p2)
    pers.rm(p1)
}
FETCH=EVTSAVE=function(){

    m= bb.M.x({
        n: 'j'
    })


    Don = $M({
        //defaults
        d: { n:null, sprink:0, cream:0 },
        //u? url?
        u: function(){return'/dn/' + this.id || ''}
    })

    bc=bostonCream= Don({n:'Bos',cream:1})
    bc.s({sprink:1}).S()  //save

    Dons= $Cl({m:Don, url:"/dn"})

    dons=Dons()
    dons.fetch() //f F


    dons.at(0)  // a -> gets donuts by index.
    dons.get(0) // g   -> gets donuts by id.
    dons.each(function(d){ // e
        $l(d.get("name"))
    })


    dons.select(function(d){//sl
        return d.get("name").length>2
    })// Select donuts with names longer than 2

    dons.map(function(d){//m
        return d.get("name")})


    Shop= $m({i: function(){
        this.dons=Dons()
        this.dons.url='shops/'+this.id+"/dn"
    }, df: {n:"z"} })

    Shop.oA(function(dn){ //on ? alert added?
        alert("added "+ dn.g('n'))
    })

    lem = Shop.dons.A({
        n:"Lem"
    })

    //////

}
BBEV=function(){$.x().i('chicks')


    ev = bb.Ev()
    ev.b("fun:had", // bind? on?
        function(){alert("wee!")})
    //trigger
    ev.tr("fun:had")  //it'll alert "wee!"


}
MODCHANGE=function(){$.x()

    Bk = $M({

        d: {ID: "", n: ""},
        i: function(){var bk=this; $l('init..')


            this.on('change',  function() {
                alert('change')
                if(bk.hasChanged('ID')){alert('ID changed')}
                if(bk.hasChanged('n')){alert('n changed')}

            })},

        showAlert: function () {
            alert('ID: '+this.g('ID')+','+' n: '+this.g('n'))
        }
    })



    bk = Bk({ID: 1, n: "a"})    // ChildBook = Bk.extend({})


}
PLV=function(){$.x('o','hi')


    Per= bb.M.e({d: {n:'a', a:20, o:'p'}})

    p=  Per.o({})
    p1 = Per.o({n:'b'})
    p2= {n:'c'}
    PerV=bb.V.e({t:'li',
        x:'some-per', k:'per',

        tp:tp=_.tp('<%= n %> (<%= a %>) - <%= o %>'),

        r: function(){
            this.$el.A('fasdfsfasd')
            _m=this.model
            //    this.$el.A(this.tp(m  ))  // this.model.toJSON()
        },

        i: function(){this.r()}
    })

    PepC=bb.C.e({m:Per})

    pV=PerV.o({m:p})
    pC=PepC.o()

    pC.add([p, p1,p2])

    PepV=bb.V.e({cl: PepC, el:ul= $.ul(),
        i:function(){},
        r: function(){
            ul=this.q.E()
            this.J(function(md){PerV.o({m:md},ul)})}})
    pCV = PepV.o({cl: pC})
    $.in(.2,function(){pCV.r()},'*')
    $.in(.4,function(){pCV.r()},'*')

}
C$= function(a){var b,c
// $.ext(bb.Collection)
    //if(U(a)){var c=new bb.Collection; return sCl(c)}
    a=O(a)?a:{}
    if(a.m){a.model= a.m}
    c= bb.Collection.extend(a)
    return function(o){o=O(o)?o:{}

        //if(o.m){o.model= o.m}
        b=new c(o)
        o.o=o.on
        E$(o)
        return b}
}
BCL=function(){$.x().h1('BCL')

    Bk = bb.M.e({d: {ID: '', n: ''}, id: "ID",
        url: 'http://localhost:51377/api/Books'
    })

    BksC = bb.C.e({m: Bk})

    cl1 =   BksC.o()
    bk1 = Bk.o({ ID: 1,  n: "Bk 1" })
    bk2 =  Bk.o({ ID: 2, n: "Bk 2" })
    cl2 =  BksC.o([bk1, bk2])
    bk3 =  Bk.o({ ID: 3, n: "Bk 3" })
    cl2.add(bk3)

    change=function(){bk3 = new Bk({ ID: 3, n: "Bk 3" })
        cl2.add(bk3)
        bk3_changed =  Bk.o({ ID: 3, n: "Changed Model" })
        cl2.add(bk3_changed, { merge: true })
    }

    add=function(){ bk4 =   Bk.o({ ID: 4, n: "Bk 4" })
        bk5 =  Bk.o({ ID: 5, n: "Bk 5" })
        cl2.add([bk4, bk5])
    }

    addAt=function(n){bk0 = new Bk({ ID: 0, n: "Bk 0" })
        cl2.add(bk0, {at:n||0})
    }

}
BBCOL=function(){$.x()

    Per = bb.M.e({})
    p1 =  Per.o({n:'j'})
    p2=  Per.o({n:'y'})

    Pers= bb.C.e({model: Per})

    pers=  Pers.o([p1, p2])
}
BBSORT=function() {

    Chp = bb.M.e()
    chps =  bb.C.e({m:Chp}).o()
    chps.comparator = function (a) { return a.tt } //$.x(a)
    chps.add(Chp.o({p:9, tt:"End"}))
    chps.add(Chp.o({p:5, tt:"Mid"}))
    chps.add(Chp.o({p:1, tt:"Beg"}))
    $l(chps.pluck('tt'))
}
AVAIL=function(){$.x('x'); Ap={ M:{},C:{},V:{},T:{} }

    Ap.T.Avail=function(model){
        return $.d('g',400,100).mar(20).A(

            $.h4(model.g('c')).id('avail').C('y','r'),
            $.br(), $.sp('delete').id('deleteAvail'),
            $.sp(' '), $.sp('edit').id('editAvail'),
            $.sp(' '), $.cb().id('selAvail'))
    }
    Ap.M.Avail=M$({urlRoot: '/avail'})
    Ap.C.Avails=C$({model: Ap.M.Avail, url: '/avail'})
    Ap.V.Avail=bb.V.e({

        r:function(){
            this.$el.A( Ap.T.Avail(this.model) )
            return this},
        ev:{
            'click #deleteAvail':'deleteAvail',
            'click #editAvail':'editAvail',
            'blur #avail':'changeAvail'},
        changeAvail:function(){
            this.$el.fi('#avail').at('contenteditable','false')
            newAvail=this.$el.fi('#avail').text()
            this.model.s('c', newAvail)
            this.model.save()},
        deleteAvail:function(){
            this.model.destroy()
            this.$el.rm()
        },

        editAvail:function(){this.$el.fi('#avail').at('contenteditable','true')}

    })
    Ap.V.Avails =bb.V.e({
        el:'#availsDiv',
        I:function(){this.render()},
        R:function(){var t=this
            t.collection.fetch({
                success:function(){
                    t.$el.html('')
                    t.$el.A("<h1>Avails List</h1>")
                    t.collection.each(function(m){
                        t.$el.A( Ap.V.Avail({model:m}).render().el )
                        return t},t)
                }})
        }})
    //  avs=Ap.C.Avails()
    //  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
    $.ip('new avail').id('newAvail').A()

    $.bt('ok',function(){
        Ap.M.Avail({c: $('#newAvail').v()
        }).save()

        v.render()

    }).A()
    $.dI('availsDiv')
    $.ip('new avail').id('newAvail').A()
    $.bt('ok',function(){
        var m= Ap.M.Avail({
            c:qiv('newAvail')
        })
        m.save()
        m.on('destroy', function(){alert('i am the model and i was destroyed')})
        v.render()
    })
    $.dI('availsDiv')


    Ap.T.Avail=function(model){
        return $.d('g',400,100).mar(20).A(
            $.h4(model.g('c')).id('avail').col('y','r'),
            $.br(),
            $.sp('delete').id('deleteAvail'),
            $.sp(' '), $.sp('edit').id('editAvail'),
            $.sp(' '), $.cb().id('selAvail')
        )
    }
    Ap.M.Avail=bb.M.e({urlRoot: '/avail'})
    Ap.C.Avails=C$({model: Ap.M.Avail, url: '/avail'})
    Ap.V.Avail=bb.V.e({

        r:function(){
            this.q(
                Ap.T.Avail(this.model)
            )
            return this
        },
        ev:{
            'click #deleteAvail':'deleteAvail',
            'click #editAvail':'editAvail',
            'blur #avail':'changeAvail'
        },
        changeAvail:function(){
            qq( this.$el.find('#avail') ).cE(0)
            var newAvail=this.$el.find('#avail').text()
            this.model.s('c', newAvail)
            this.model.save()
        },

        deleteAvail:function(){
            this.model.destroy()
            this.$el.remove()},
        editAvail:function(){

            this.$el.find('#avail').cE(1)

        }

    })

    Ap.V.Avails =bb.V.e({el:'#availsDiv',
        i:function(){this.render()},
        r:function(){var t=this
            t.collection.fetch({
                success:function(){
                    t.q.H('')

                    t.q($.h1('Avails List'))

                    t.e(
                        function(m){
                            t.q(
                                Ap.V.Avail({m:m}).r().el )
                            return t},t)

                }})
        }})
    avs=Ap.C.Avails.o()

    avs.on('destroy', function(j){
        alert('i am col and i was destroyed')
        v.trigger('modelDeleted')
    })

    v=Ap.V.Avails.o({cl:avs})


    v.on('modelDeleted', function(){alert('modDel')})

    bb.M.e({
        d:{ prop:3 },
        test:function(){
            $( this.get('prop') ) },
        test2:function(a){ $l('prop: '+this.get('prop'))},
        happy:function(a){
            this.test2(a)
        }
    })


}
DIRTPAGE=function() {
    $.x()

    var newMsBox, newTopic, newMs, searchBox

    MsM = bb.M.e({})
    MsC = bb.C.e({m: 'MsM'})
    MsView = bb.V.e({})
    MssView = bb.V.e({})

    $.h1().A(
        $.a('Dirtpage', '/wap/dirtpage/')
    ).A()
    $.dI('content')
    if (wappyPam) {

        newMsBox = $.d().WH('auto').A(
            $.h1('new ms'),
            $.ip().K('form-control').id('newMs'),
            $.bt('ok', function () {
                var newMs = $('#newMs').v()
                $.P('messages', {
                    tpc: wappyPam, ms: newMs
                }, function () {
                    loadResults()
                })
            }))
        $('#cont').A($.h1('the ' + wappyPam + ' page'),
            newMsBox, $.dI('res'))
        function loadRes() {
            $.G('topics/' + wappyPam, function (msgs) {
                $('#results').ht($.h5('len: ' + msgs.length))
                _.e(msgs, function (ms) {
                    $('#res').A($.h6(ms.ms))
                })
            })
        }

        loadRes()
    }
    else {
        newMsBox = $.d().WH('auto').A(
            $.h1('new message'),
            $.ip().K('form-control').id('newTopic'),
            $.ip().K('form-control').id('newMs'),
            $.bt('ok', function () {
                newTopic = $('#newTopic').v()
                newMs = $('#newMs').v()
                $.P('msgs', {topic: newTopic, message: newMs}, function () {
                })
            })
        )
        searchBox = $.d().WH('auto').A(
            $.h1('search'),
            $.ip().K('form-control').id('searchInput'),
            $.bt('ok', function () {
                window.location = '/wap/dirtpage/' + $('#searchInput').v()
                searchInput = $('#searchInput').v()
                $.G('topics/' + searchInput, function (msgs) {
                    $('#res').ht($.h5('len: ' + msgs.length))
                    _.e(msgs, function (ms) {
                        $('#res').A($.h6(ms.ms))
                    })
                })
            })
        )
        $.dI('res')
        $('#cont').A(newMsBox, searchBox)
        $.eG('msgs', function (ms) {
            $('#res').A($.h2().A(
                    $.a('topic: ' + ms.topic, '/wap/dirtpage/' + ms.topic)),
                $.h3('ms: ' + ms.ms)
            )
        })
    }
}
PEOPLE=function(){$l('people');z()
    Quiz0=function(title){

        this.title=title

    }
    Person0=function(o){

        this.name=o.name
        this.age=o.age
        this.job=o.job

        //this.work=function(){}
    }
    Person0.prototype.work=function(){return this.name + ' is working'}


    Person=bbM({
        I:function(){}, // this.oV(function(mod, err){$l(err)})
        D:{name:'john doe', age:30, job:'worker'},
        V:function(ats){if(ats.age <0){return 'age below zero, stupid!'}},
        work:function(){return this.g('name')+' is working'}})

    p=Person({name:'yano', age:34})

    p.oV(function(mod,z){$l(z)})

    personView=bbV({
        t:'li',
        k:'person',
        i:'some-person',

        I:function(){this.R()},

        T: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),

        R:function(){var t=this


            //this works, but doesnt use a template
            // t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))

            t.H(t.T(t.J()))
        }

    })

    v=personView({m:p})


    peopleCol=bbC({m:Person } )

    //pC=new peopleCol()
    //pC.add(p)


    pC=  peopleCol([

        {name:'rigo',age:29},
        {name:'jan',age:2},
        {name:'sal',job:'graphics'}

    ])



    pC.at(1).s('name', 'joejoe')


    peopleView=bbV({

        t:'ul',

        I:function(){
            $l('hi')
            $l(this.cl)
        },


        R:function(){//var t=this

            this.cl.each(

                function(person){

                    //$l(person.get('name'))

                    var v=personView({m: person})

                    //$l(v.el)

                    this.$el.append(v.el)

                    //t.q( v.el  )

                }, this)
        }

    })



    pcv=peopleView({cl:pC})



    pcv.R()

    $b()(pcv.el)

    //$b()(pcv.q)




}
PEOPLE=function(){$l('people');z()
    Quiz0=function(title){

        this.title=title

    }
    Person0=function(o){

        this.name=o.name
        this.age=o.age
        this.job=o.job

        //this.work=function(){}
    }
    Person0.prototype.work=function(){return this.name + ' is working'}


    Person=bbM({
        I:function(){}, // this.oV(function(mod, err){$l(err)})
        D:{name:'john doe', age:30, job:'worker'},
        V:function(ats){if(ats.age <0){return 'age below zero, stupid!'}},
        work:function(){return this.g('name')+' is working'}})

    p=Person({name:'yano', age:34})

    p.oV(function(mod, err){$l(err)})

    personView=bbV({


        t:'li',
        k:'person',
        i:'some-person',

        I:function(){this.R()},

        T: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),

        R:function(){var t=this


            //this works, but doesnt use a template
            // t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))

            t.H(t.T(t.J()))
        }

    })

    v=personView({m:p})


    peopleCol=bbC({m:Person } )

    //pC=new peopleCol()
    //pC.add(p)




    pC=  peopleCol([

        {name:'rigo',age:29},
        {name:'jan',age:2},
        {name:'sal',job:'graphics'}
    ])



    pC.at(1).s('name','joejoe')

    peopleView=bbV({

        t:'ul',

        I:function(){
            $l('hi')
            $l(this.cl)
        },


        R:function(){//var t=this

            this.cl.each(

                function(person){

                    //$l(person.get('name'))

                    var v=personView({m: person})

                    //$l(v.el)

                    this.$el.append(v.el)

                    //t.q( v.el  )

                }, this)
        }

    })



    pcv=peopleView({cl:pC})



    pcv.R()

    $b()(pcv.el)

    //$b()(pcv.q)




}
TASKS=function(){z()

    Ap={M:{}, C:{}, V:{}}


    Ap.M.Task=bbM({})

    task1=Ap.M.Task({
        title:'go to the store',
        priority:4})

    task2=Ap.M.Task({
        title:'go to the park',
        priority:3})


    Ap.V.Task=bbV({
        t:'li',
        R:function(){
            return this.H(
                this.g('title'))
        }
    })


    taskView=Ap.V.Task({m:task})


    Ap.C.Tasks=bbC({m:Ap.M.Task})

    tasks=Ap.C.Tasks([
        {title:'hi'},
        {title:'bye'}])


    Ap.V.Tasks=bbV({
        t:'li',
        R:function(){
            this.cl.each(
                function(t){
                    var v=Ap.V.Task({m:t})
                    this.$el.append(v.el)},

                this)

            $b()(this.el)
        }
    })


    tasksV=Ap.V.Tasks({cl:tasks})


}
ITEMS=function(){z()


    Router = bbR({


        R:{
            '':'welcome',

            'itemlist':'showItemList',
            'j':'j'

        },

        welcome:function(){
            show('welcome')
        },

        j:function(){},

        showItemList:function(){
            show('show item list')
        }


    })

    router=Router()



    Ap={
        M:{},V:{},C:{}
    }



    Ap.M.item = bbM({})


    i1=Ap.M.item({ n:'jason', g:'mason' })

    i1.oR('j',function(){show('j')})



    bbH()

}
TWEETS=function(){}
AVAIL1=function(){z()

    tx('new avail').id('newAvail').a()

    bt('ok',function(){
        Ap.M.Avail({c:qiv('newAvail')}).save()
        v.render()}).a()

    di('availsDiv').a()



    Ap={ M:{},C:{},V:{},T:{} }

    Ap.T.Avail=function(model){
        return _d().w(400).h(100).M(20).c('g')(
            h4(model.g('c')).id('avail').c('y','r'),
            br(),sp('delete').id('deleteAvail'),
            sp(' '),sp('edit').id('editAvail'),
            sp(' '),cb2().id('selAvail')).q}

    Ap.M.Avail=bbM({urlRoot: '/avail'})

    Ap.C.Avails=bbC({model: Ap.M.Avail, url: '/avail'})


    Ap.V.Avail=bbV({

        R:function(){
            this.$el.append( Ap.T.Avail(this.model) )
            return this},

        events:{
            'click #deleteAvail':'deleteAvail',
            'click #editAvail':'editAvail',
            'blur #avail':'changeAvail'},

        changeAvail:function(){
            qq( this.$el.find('#avail') ).at('contenteditable','false')
            var newAvail=this.$el.find('#avail').text()
            this.model.s('c', newAvail)
            this.model.save()},

        deleteAvail:function(){
            this.model.destroy()
            this.$el.remove()},

        editAvail:function(){
            qq(this.$el.find('#avail')).at('contenteditable','true')}

    })


    Ap.V.Avails =bbV({
        el:'#availsDiv',
        I:function(){this.render()},

        R:function(){
            var t=this

            t.collection.fetch({

                success:function(){

                    t.$el.html('')

                    t.$el.append("<h1>Avails List</h1>")

                    t.collection.each(function(m){
                        t.$el.append( Ap.V.Avail({model:m}).render().el )
                        return t},t)

                }})
        }})



    avs=Ap.C.Avails()

    v=Ap.V.Avails({collection:avs})//.render()

    avs.on('destroy',function(aa){$l('destroy!!!!')})



}
AVAIL=function(){z()

    tx('new avail').id('newAvail').a()


    bt('ok',function(){

        var m= Ap.M.Avail({
            c:qiv('newAvail') })

        m.save()

        m.on('destroy', function(){
            alert('i am the model and i was destroyed')

        })

        v.render()

    }).a()

    di('availsDiv').a()



    Ap={ M:{},C:{},V:{},T:{} }

    Ap.T.Avail=function(model){
        return _d().w(400).h(100).M(20).c('g')(

            h4(model.g('c')).id('avail').c('y','r'),

            br(),   sp('delete').id('deleteAvail'),
            sp(' '), sp('edit').id('editAvail'),
            sp(' '), cb2().id('selAvail')).q}


    Ap.M.Avail=bbM({urlRoot: '/avail'})

    Ap.C.Avails=bbC({model: Ap.M.Avail, url: '/avail'})

    Ap.V.Avail=bbV({

        R:function(){
            this.q(Ap.T.Avail(this.model) )
            return this
        },


        events:{

            'click #deleteAvail':'deleteAvail',
            'click #editAvail':'editAvail',
            'blur #avail':'changeAvail'
        },


        changeAvail:function(){
            qq( this.$el.find('#avail') ).cE(0)
            var newAvail=this.$el.find('#avail').text()
            this.model.s('c', newAvail)
            this.model.save()
        },


        deleteAvail:function(){
            this.model.destroy()
            this.$el.remove()},


        editAvail:function(){

            qq(this.$el.find('#avail')).cE(1)

        }

    })


    Ap.V.Avails =bbV({

        el:'#availsDiv',

        I:function(){this.render()},

        R:function(){var t=this

            t.collection.fetch({

                success:function(){

                    t.q.H('')

                    t.q(h1('Avails List'))

                    t.e(
                        function(m){
                            t.q(
                                Ap.V.Avail({m:m}).r().el )
                            return t},t)

                }})
        }})



    avs=Ap.C.Avails()


    avs.on('destroy',

        function(j){
            alert('i am col and i was destroyed')

            v.trigger('modelDeleted')

        })





    v=Ap.V.Avails({cl:avs})


    v.on('modelDeleted', function(){alert('modDel')})


    a=bbM({

        defaults:{ prop:3 },

        test:function(){ console.log( this.get('prop') ) },




        test2:function(a){


            console.log(

                (function(){return this.get('prop')}) ()

            )


        },


        happy:function(a){

            this.test2(a)
        }

    })


    f=a()


}
BBSORT=function(){


    Chapter  = Backbone.Model

    chapters = new Backbone.Collection

    chapters.comparator =
        //'page'
        function(a){return _z(a)}

    chapters.add(
        new Chapter({page: 9, title: "The End"}))


    chapters.add(
        new Chapter({page: 5, title: "The Middle"}))


    chapters.add(
        new Chapter({page: 1, title: "The Beginning"}))



    $l(chapters.pluck('title'))


}
BACKSET = function () {
    $.x()

    Sb = Sidebar = bb.m.e({
        ask: function () {
            this.s({c: prompt("color?")})
        }
    })
    sb = Sb.o()
    sb.on('change:c', function (md, c) {
        $('body').C(c)
    })
    sb.set({c: 'b'})
    sb.ask()
    //right from ko site
    d = $.dA(400)

    Sid = bb.M({
        promptColor: function () {
            this.s({
                co: pr('color:')
            })
        }
    })

    sb = Sid()
    sb.on('change:co', function (md, c) {
        d.C($l(c))
    })
    sb.C('w')
    sb.ask()
    Per = bb.M.e({
        i: function () {
            alert("Welcome")
        }
    })
    p = Per({})
    p.s({n: "mac", a: 67})
    $.dA(300).id('sb')
    Sidebar = bb.M.e({
        fn: function () {
            return this.s({
                c: prompt("c?")
            })
        }
    })
    Sidebar().oC('c', function (m, c) {
        $('#sb').C(c)
    }).s({c: 'w'}).fn()

}
BBCL = function () {
    $.x().h1('backcl')
    bads = bb.C.e().o().oA(function (s) {
        alert("new baddie: " + s.g("n"))
    })
    bads.add([{n: "bad1"}, {n: "bad2"}])

    Frnd = bb.M.e({d: {lame: 1}})
    f1 = Frnd.o({n: "Lul", a: 67})
    f2 = Frnd.o({g: 'jigo'})
    f2.s({n: "Rigo", a: 7})
    f2.s('n', 'hah')
    Per = bb.M.e({
        d: {lame: true},
        i: function () {
            var t = this
            t.on('error', function (m, e) {
                alert(3);
                $l(e)
            })
            t.on('change:n',
                function (m, e) {
                    alert(3);
                    $l(e)
                })
        },
        v: function (at) {
            if (at.n == 'rigo') {
                return "n cant be rigo!"
            }
        }
    })
    p = Per.o({n: "rigo", a: 7})

    cl = bb.C.e().o()
    f1 = cl.A(f1)
    f2 = cl.A(f2)
    cl.rm(f1)


    Pers = bb.C.e({m: Per})
    pers = Pers.o()
    p1 = pers.add(p)
    pers.add(p2)
    pers.rm(p1)

}
FETCH = EVTSAVE = function () {
    m = bb.M.e({n: 'j'})
    Don = bb.M.e({
        d: {n: null, sprink: 0, cream: 0},
        u: function () {
            return this.id ? '/dn/' + this.id : '/dn'
        }
    })
    bc = bostonCream = Don.o({n: 'Bos', cream: 1})
    bc.s({sprink: 1}).S() //save
    Dons = bb.C.e({m: Don, url: "/dn"})
    dons = Dons.o()
    dons.fetch()
    // donuts.at(0); -> gets donuts by index.
    // donuts.get(0); -> gets donuts by id.
    // donuts.each(function(d){$l(d.get("name"))})
    // donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
    // donuts.map(function(d){return d.get("name")})
    Shop = bb.M.e({

        i: function () {
            this.dons = Dons()
            this.dons.url = 'shops/' + this.id + "/dn"
        },
        df: {n: "z"}
    }).o()
    Shop.oA(function (dn) {
        alert("added " + dn.g('n'))
    })
    lem = Shop.dons.A({n: "Lem"})
    ev = bb.E()
    ev.b("fun:had", function () {
        alert("wee!")
    })
    ev.tr("fun:had")  //it'll alert "wee!"
}
MODCHANGE = function () {
    $.x()

    Bk = bb.M.e({

        d: {ID: "", n: ""},
        initiate: function () {

            $l('init..')

            var that = this

            this.on('change', function () {
                alert('change')
                if (that.hasChanged('ID')) {
                    alert('ID changed')
                }
                if (that.hasChanged('n')) {
                    alert('n changed')
                }
            })
        },

        showAlert: function () {
            alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
        }

    })


    // ChildBook = Bk.extend({})
    bk = Bk.o({ID: 1, n: "a"})
}

valid()
function valid() {/*

 md.validate() checking attr vals  prior to setting them.

 By default occurs when md is persisted using save() or when set() is called if {vld:true}

 Should error be returned: An invalid event will be triggered, setting validationError property on md with val which is returned by this met.
 .save() will not continue and atts of md will not be modified on server.

 Note: atts object passed to validate fn reps what atts would be after completing current set() or save().
 This object is distinct from current atts of md  and from  pams passed to operation.

 Since it is created by shallow copy, it is not possible to change any Number, String, or Boolean attr of input within fn, but it is possible to change ats in nested objects.


 validation on init is possible but of limited use, as object being constructed is internally marked invalid but nevertheless passed back to caller


 */
    VALID = function () {
        $.x('x', 'valid')

        Per = new bb.M({n: 'J'})

        Per.validate = function (at) {
            if (!at.n) {
                return '!name'
            }
        }
        Per.s({n: 'S'})


        $l(P.g('n'))  // 'S'
        Per.unset('name', {vld: true}) // false


        Td = bb.M.x({

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
    FRND = function () {
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
    PEOPLE = function () {
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
    }
}




// 2 plugins
// http://naturaily.com/blog/post/backbonejs-plugins-localstorage-and-backbonevalidation}
show=function(a){
    alert('show')
    a=a||'welcome'

    $b().H('')(h1(a))
}
bb.eParse=function(e){e=e||{}


    _.e(e, function(v,k){

        if(k=='$'){
            e['click']=v
        }

        if(k=='$$'){
            e['dblclick']=v
        }

    })


    return e
}
//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})
