// extending Bb? -> https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views

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

TMPWORKS=function(){$.x('b')

    data = { n:'j', a:20, o:'p' }
    $V({ t:'li',  i: function(){
        $l(this.model)
        this.r()         },

        r: function(){
            this.A().A(
                $.h1( this.tp( this.model.toJSON() ) ) )},

        tp: tp= _.tp(
            '<%=n%> ( ((( (((( -  -<%=a%>-  - )))) )) ) - <%=o%>'
        ),


        x:'some-per',
        k:'per'

    })({m:Per=$M()(data)//=== M({df:data})()
    })

}
TMP =function(){$.x('r');

    data = { n:'j', a:20, o:'p' }
    $V({ t:'li',
        i: function(){$l(this.model); this.r()},
        r: function(){this.A().A(this.tp(this.model.toJSON()))},
        tp: tp=_.tp('<%= n %> (<%= a %>) - <%= o %>'),
        x:'some-per',
        k:'per'
    })({m:Per=$M({
            d: data
        })()}
    )}
PLV=function(){$.x('o','hi'); $l('PLV')

    Per= $M({//name, age, occ
        d: {n:'a', a:20, o:'p'}
    })

    p0 = Per()
    p1 = Per({n:'b'})
    p2 = {n:'c'}

    PerV = $V({
        t:'li',
        x: 'some-per',  // id
        i:  function(){this.r()}, //??
        r: function(){  this.q.A('fasdfsfasd')

            this.q.A(
                this.tp(
                    this.model
                )
            )

        },


        k: 'per',   // className
        tp: tp= _.tp('fo real? <%= n %> (<%= a %>) - <%= o %>'),
    })



    pV=PerV({m:p0})
    PepC=$Cl({m:Per})
    pC=PepC()
    pC.add([p0, p1,p2])
    PepV=$V({
        cl: PepC,
        el:ul= $.ul(),
        r: function(){
            ul=this.q.E()
            this.J(function(md){
                PerV({m:md}, ul)})} })
    pCV = PepV({cl: pC})


    $.in(.2,function(){
        pCV.r()
    },'*')


    $.in(.4,function(){
        pCV.r()
    },'*')


}
BBVTdArr=[  {t:'a.com', h:'a.com'}, {t:'b.com', h:'b.com'}, {t:'c.com', h:'c.com'}   ]

BBVT=function(){$.x('x', 'bb view and template'); listTp(); m= $M()({ d:BBVTdArr })
    $.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
    Vw = $V({q:'#ct',
        i: function(op){$l(op.blOp); this.tp =$('#list-tp').children()},
        r:rFn,
        ev: {'click button':'r'}})
    v =  Vw({  m:m, blOp:'emp!' })}
BBVT=function(){$.x('x', 'bb view and template'); listTp(); m= $M()({  d: BBVTdArr  })


    $.d('y').id('ct').A(
        $.bt('Load', function(){v.r()}),
        $.ul().id('list') )



    Vw=$V({q:'#ct',

        i: function(op){$l(op.blOp);

            this.tp = $('#list-tp')
                .children()},

        r: rFn2,


        events: {'click button': 'r'}

    })




    v=Vw({  zm: m  ,  blOp: 'emp!' })

}
TP=function(){$.x().A(

    a= _.tp("<div>hello:<%=n%></div>")({n:'moe'}),

    b= _.tp('<b><%-tag%></b>',{tag:'<script>'}),
    // <%- vs <%= ?


    c= _.tp(

        '<%_.e(peep,function(name){%>'+
        '<li>'+'<%=name%>'+'</li>'+
        '<%})%>'
        ,{peep:['moe','curly','larry']}
    )


)}
TP=function(){z()

    c1=tp("hello: <%= name %>" , {name:'moe'} )

    c1b=tp("hello: <%= name %>")(  {name:'moe'} )

    c2=tp(

        "<% _e(people, function(name){%>  " +
        "<li>  " +
        "<%= name %>  " +
        "</li>  " +
        "<% }) %>",

        {people:['moe','curly','larry']}
    )

    c3= tp( "<b>  <%- tag %>  </b>",   {tag: '<script>'})  // <%- vs <%= ?

    $b()(c2)

}

TP=function(){z()

    c1=tp("hello: <%= name %>" , {name:'moe'} )

    c1b=tp("hello: <%= name %>")(  {name:'moe'} )

    c2=tp(

        "<% _e(people, function(name){%>  " +
        "<li>  " +
        "<%= name %>  " +
        "</li>  " +
        "<% }) %>",

        {people:['moe','curly','larry']}
    )

    c3= tp( "<b>  <%- tag %>  </b>",   {tag: '<script>'})  // <%- vs <%= ?

    $b()(c2)

}
CATZ=function(){z()



    //tempScr('cat', [thead()(tr().k('header')(  th()('Name') )  ), tbody()]).a()


    //tempScr('cats', [td()("<%= name =>")]).a()

    //Temp('cat1', [thead()(tr().k('header')(  th()('Name') )  ), tbody()]).a()

    //Temp('cats1', [td()( "<%= name =>" )]).a()


    d=_d().w(500).h(500).c('y').id('content').a()

    MyApp = new Backbone.Marionette.Application()

    MyApp.addRegions({mainRegion: "#content"})


    AngryCat=Backbone.Model.extend({

        rankUp: function(){
            this.set({
                rank: this.get('rank')-1
            })},

        rankDown: function(){
            this.set({rank: this.get('rank') + 1
            })}

        //,  defaults:{rank:0}
    })


    AngryCats=Backbone.Collection.extend({

        model: AngryCat,

        initialize: function(cats){
            var rank=1


            // _.each(cats, function(cat){ cat.set('rank', rank); ++rank })

            var self=this;

            MyApp.on('rank:up',function(cat){console.log('rank up');

                if (cat.get('rank') === 1) {
                    // can't increase rank of top-ranked cat
                    return true}

                self.rankUp(cat)
                self.sort()
                self.trigger('reset')

            })
            MyApp.on('rank:down', function(cat){console.log('rank down');

                if (cat.get('rank') === self.size()) {
                    // can't decrease rank of lowest ranked cat
                    return true}

                self.rankDown(cat)
                self.sort()
                self.trigger('reset')

            })},


        rankUp: function(cat) {
            // find the cat we're going to swap ranks with

            var rankToSwap = cat.get('rank') - 1
            var otherCat = this.at(rankToSwap - 1)

            // swap ranks
            cat.rankUp()
            otherCat.rankDown()},
        rankDown: function(cat) {
            // find the cat we're going to swap ranks with
            var rankToSwap = cat.get('rank') + 1;
            var otherCat = this.at(rankToSwap - 1);
            // swap ranks
            cat.rankDown();
            otherCat.rankUp()},
        comparator: function(cat){return cat.get('rank')}})




    AngryCatView = Backbone.Marionette.ItemView.extend({

        template: "#cat_template",
        tagName: 'tr',
        className: 'angry_cat',

        events: {
            'click .rank_up': 'rankUp',
            'click .rank_down': 'rankDown'},


        rankUp: function(){
            MyApp.trigger('rank:up', this.model);
            console.log('trigger rank up')},


        rankDown: function(){
            MyApp.trigger('rank:down', this.model);
            console.log('trigger rank down')}


    })


    AngryCatsView = Backbone.Marionette.CompositeView.extend({

        tagName: "table",
        id: "angry_cats",
        className: "table-striped table-bordered",

        template: "#cats_template",

        itemView:AngryCatView,

        appendHtml: function(collectionView, itemView){
            collectionView.$("tbody").append(itemView.el)
        }

    })




    MyApp.addInitializer(

        function(options){

            angryCatsView = new AngryCatsView({collection: options.cats})


            MyApp.mainRegion.show(angryCatsView)

        })



    MyApp.start({

        cats:new AngryCats([
            {name: 'Wet Cat', img:'/me.png', rank:1},
            {name: 'Bitey Cat',img:'/guy.png',rank:2},
            {name: 'Surprised Cat',img:'/chicks.png',rank:3}
        ])

    })









}
CATZ=function(){z()



    //tempScr('cat', [thead()(tr().k('header')(  th()('Name') )  ), tbody()]).a()


    //tempScr('cats', [td()("<%= name =>")]).a()

    //Temp('cat1', [thead()(tr().k('header')(  th()('Name') )  ), tbody()]).a()

    //Temp('cats1', [td()( "<%= name =>" )]).a()


    d=_d().w(500).h(500).c('y').id('content').a()

    MyApp = new Backbone.Marionette.Application()

    MyApp.addRegions({mainRegion: "#content"})


    AngryCat=Backbone.Model.extend({

        rankUp: function(){
            this.set({
                rank: this.get('rank')-1
            })},

        rankDown: function(){
            this.set({rank: this.get('rank') + 1
            })}

        //,  defaults:{rank:0}
    })


    AngryCats=Backbone.Collection.extend({

        model: AngryCat,

        initialize: function(cats){
            var rank=1


            // _.each(cats, function(cat){ cat.set('rank', rank); ++rank })

            var self=this;

            MyApp.on('rank:up',function(cat){console.log('rank up');

                if (cat.get('rank') === 1) {
                    // can't increase rank of top-ranked cat
                    return true}

                self.rankUp(cat)
                self.sort()
                self.trigger('reset')

            })
            MyApp.on('rank:down', function(cat){console.log('rank down');

                if (cat.get('rank') === self.size()) {
                    // can't decrease rank of lowest ranked cat
                    return true}

                self.rankDown(cat)
                self.sort()
                self.trigger('reset')

            })},


        rankUp: function(cat) {
            // find the cat we're going to swap ranks with

            var rankToSwap = cat.get('rank') - 1
            var otherCat = this.at(rankToSwap - 1)

            // swap ranks
            cat.rankUp()
            otherCat.rankDown()},
        rankDown: function(cat) {
            // find the cat we're going to swap ranks with
            var rankToSwap = cat.get('rank') + 1;
            var otherCat = this.at(rankToSwap - 1);
            // swap ranks
            cat.rankDown();
            otherCat.rankUp()},
        comparator: function(cat){return cat.get('rank')}})




    AngryCatView = Backbone.Marionette.ItemView.extend({

        template: "#cat_template",
        tagName: 'tr',
        className: 'angry_cat',

        events: {
            'click .rank_up': 'rankUp',
            'click .rank_down': 'rankDown'},


        rankUp: function(){
            MyApp.trigger('rank:up', this.model);
            console.log('trigger rank up')},


        rankDown: function(){
            MyApp.trigger('rank:down', this.model);
            console.log('trigger rank down')}


    })


    AngryCatsView = Backbone.Marionette.CompositeView.extend({

        tagName: "table",
        id: "angry_cats",
        className: "table-striped table-bordered",

        template: "#cats_template",

        itemView:AngryCatView,

        appendHtml: function(collectionView, itemView){
            collectionView.$("tbody").append(itemView.el)
        }

    })




    MyApp.addInitializer(

        function(options){

            angryCatsView = new AngryCatsView({collection: options.cats})


            MyApp.mainRegion.show(angryCatsView)

        })



    MyApp.start({

        cats:new AngryCats([
            {name: 'Wet Cat', img:'/me.png', rank:1},
            {name: 'Bitey Cat',img:'/guy.png',rank:2},
            {name: 'Surprised Cat',img:'/chicks.png',rank:3}
        ])

    })









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
TMP=function(){$.x('r'); $V({
    t:'li', x:'some-per', k:'per',
    tp: tp=_.tp('<%= n %> (<%= a %>) - <%= o %>'),
    r: function(){this.A().A(this.tp(this.model.toJSON()))},
    i: function(){$l(this.model); this.r()}
})({m:Per=$M({d:{n:'j',a:20,o:'p'}})()})}



BBVT=function(){$.x('x', 'bb view and template');
    md= new Bb.M({d:[{t:'a.com', h:'a.com'}, {t:'b.com', h:'b.com'}, {t:'c.com', h:'c.com'}]})


    $.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')

    $.dI('list-tp', [ $.la() ]).C('o')


    Vw = Bb.V.e({
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
function vwTp(){BBVT1=function(){$.x('x', 'bb view and template');
    md= new Bb.M({d:[{t:'a.com', h:'a.com'}, {t:'b.com', h:'b.com'}, {t:'c.com', h:'c.com'}]})


    $.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')

    $.dI('list-tp', [ $.la() ]).C('o')


    Vw = Bb.V.e({
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
function clTp(){


    FLCL00=function(){$.x('r', 'filtering a cl:')
        /*
         FlV = Bb.V.e({
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
        Cl =  $$C({i:function(){}})
        cl = Cl({})


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
    FLCL0 = function () {
        $.x('r', 'filtering a cl, but tp missing?!')
        // ... get the filter info from the DOM
        // get the filtered list from the collection
        // iterate over the filtered list and render the results in to the html array
        // populate the DOM with the resulting HTML

        FlV = $V({
            ev: {'click #run': 'runFilter'},
            runFilter: function (e) {
                e.pD();
                this.fl = {};
                this.r()
            },
            r: function () {
                HT = [];
                _.e(this.cl.where(this.fl),
                    function (item) {
                        HT.push(_.tp($('my-item-template').H())(item.tJ()))
                    })
                this.q.h(HT);
                return this
            }
        })

        Cl = $$C({
            i: function () {
                $l('fuck')
            }
        })
        cl = Cl()
        cl.add([{a: 'f', b: 's'}, {a: 't', b: 's'}, {a: 'f', b: 's'}, {a: 's', b: 't'}])
        res = cl.where({a: 'f', b: 's'})
        _.e(res, function (q) {
            var j = q.tJ();
            $.h1(j.a + ' !@@@##@ ' + j.b)
        })
//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection

    }
    PEOPL=function(){$.x()
        Per  = $$M({
            i: function () {
                //this.oV(function(mod, err){$l(err)})
            },
            d: {n:'doe', a: 30, j: 'wrk'},
            validate: function (ats) {if (ats.age < 0) {return 'a < 0!'}},
            work: function () {return this.g('n') + ' is working'}
        })
        p = Per({n: 'y', a: 34}) //p.oV(function (mod, z) {$l(z)})
        PerV = $$V({tn: 'li',
            k: 'person', x: 'some-person',
            i: function () {this.r()},
            tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
            r: function () {
                var t = this
                //this works, but doesnt use a template
                // t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
                t.H(
                    t.T(
                        t.j()
                    )
                )
            }
        })
        pV= PerV({m: p})
        peepC = $$C({m: Per})
        pC = peepC([
            {n: 'rigo', a: 29},
            {n: 'j', a: 2},
            {n: 's', j: 'gx'}
        ])
        pC.add(p)
        pC.at(1).n('joejoe')
        pC.at(1).s('name', 'joejoe')
        PeepV = $$V({tn: 'ul', i: function () {
            $l('hi')
            $l(this.cl)
        }, r: function () {//var t=this
            this.cl.each(function (p) {var v,pV  //$l(p.g('n'))
                pV = PerV.o({m: p}) //$l(pV.el)
                this.$el.append(pV.el) //t.q( pV.el  )
            }, this)
        }})
        pcv = PeepV({cl: pC})
        pcv.r()
        $.A( pcv.el )
    }
}
function rtrTp(){
    BACKDEMO0 = function () {
        $.x().d('yoo hoo').id('cont')

        Temp = function (i, h) {
            var s = ''
            return _.tp($('#' + i).html(), h || {})
            if (A(h)) {
                _.e(h, function (h) {
                    s += h.oh()
                })
            }
            s = "<script type='text/template'>" + s + "</script>"
            return $(s).id(i).A()
        }

        $R({
            rt: {'': 'f', 'f': 'f', 's': 's'},
            f: function () {
                $l('fir')
            }, s: function () {
                $l('sec')
            },
            task: function () {
                t = new Task();
                $l('t = new Task')
            }
        }, '+')


        Temp('task', [
            $.lb('Task: '),
            $.ip().id('task_desc'),
            $.bt('add task').id('btn')])

        Tsk = $V({
            el: $('#cont'),
            i: function () {
                this.r()
            },
            r: function () {
                this.$el.ht(Temp('task'))
            },
            e: {'click button': 'add'},
            add: function () {
                alert($('#task_desc').v() + ' task added')
            }
        })
    }

    BACKDEMO1 = function () {
        $.x().d('yoo hoo').id('cont')


        $R({
            rt: {
                '': 'f', 'f': 'f', 's': 's',
                '/wap/items/q': q
            },

            q: function () {
                alert('q')
            },
            f: function () {
                $l('fir')
            },
            s: function () {
                $l('sec')
            },

            task: function () {
                t = new Task();
                $l('t = new Task')
            }

        })


        Temp = function (i, h) {
            var s = ''

            return _.tp(
                $('#' + i).html(), h || {}
            )

            if (A(h)) {
                _.e(h, function (h) {
                    s += h.oh()
                })

            }


            _str = "<script type='text/template'>" + _str + "</script>"


            str = $(s)

            return $(s).id(i).A()

        }


        /*


         Temp('task', [

         $.lb('Task: '),
         $.ip().id('task_desc'),
         $.bt('add task').id('btn')
         ])


         Tsk=$V({el: $('#cont'),

         i: function(){this.r()},
         r: function(){this.$el.ht( Temp('task') )},
         e: {'click button': 'add'},
         add: function(){alert( $('#task_desc').v() + ' task added')}

         })
         */

        $.bt('sfad', function () {
            r.n('/wap/items/q')
        })
    }
    BACKDEMO = function () {
        $.x()

        Temp = function (i, h) {
            var s = ''
            return _.tp($('#' + i).html(), h || {})
            if (A(h)) {
                _.e(h, function (h) {
                    s += h.oh()
                })
            }
            s = "<script type='text/template'>" + s + "</script>"
            return $(s).id(i).A()
        }

        Temp('task', [
            $.lb('Task: '),
            $.ip().id('task_desc'),
            $.bt('add task').id('btn')])

        $.dI('cont')

        $$R({
            rt: {
                '': 'f',
                'f': 'f',
                's': 's'
            },
            f: function () {
                $l('fir')
            },
            s: function () {
                new Task()
                $l('sec')
            }
        })

        Tsk = Bb.V.e({
            el: $('#cont'),
            i: function () {
                this.r()
            },
            r: function () {
                this.$el.ht(Temp('task'))
            },
            e: {'click button': 'add'},
            add: function () {
                alert($('#task_desc').v() + ' task added')
            }
        })
    }
}