$P()

vw.cl=function(fn){var cl
    cl=this.collection
    if(U(fn)){return cl}
    if(cl){_.e(cl,fn)}
    return this
}


$.uV=$.ulV=function(ob){ob=ob||{}; // make a bbV with t:ul
    ob.t = 'ul'; return $V(ob)
}

$v=function(){var g=G(arguments); return $V.apply(null, g)()}

$V=function(){var g=G(arguments),
    Vw = bb.V.x.apply(bb.V, g)
    // ***  bb.V.x.apply(bb.V, g) same as _.x(bb.V,g)??

    return function(){var g=G(arguments), vw,
        ob =  g.O_? g.f:  {}
        ob.collection= ob.collection || ob.cl || ob.c
        ob.model = ob.model || ob.md || ob.m
        vw = new Vw(ob)
        if(g.s){ vw.a2( g.s ) }
        return vw}
}




$.fn.V=function(ob){ob=ob||{}; ob.q=this
    return $V(ob)
}




bb.v=function(ob){var Vw =  bb.V.x(ob)
    return function(a,b,c,d){
        return new Vw(a,b,c,d)}
}





bb.V.x=  function(ob){var g=G(arguments); ob=ob||{}


    ob._i = ob.initialize  || ob.i
    ob.initialize = function(op){
        // ok so i think i see what is happening here...
        // first of all, i am clearly overwriting 'initialize' here
        // so why bother setting it prior?
        this.q= this.$el
        this.a2=function(a){
            var res=   this.q.a2(a)
            //return this
            return res
        } //this.g=function(a){  if(a){return this.model.get(a)}}
        this.A=function(ob){var g=G(arguments),  q=this.q
            if(S(ob)){ob = this.g(ob)}
            if(ob){q.A(ob)}
            if(U(ob) || g.p){q.A()}
            return q}
        if(F(ob._i)){   _.b(ob._i, this)(op) }
    }

    ob.id = D(ob.id)? ob.id : ob.x || ob._ || ob['#']
    ob.className=ob.className|| ob.k

    ob.defaults=ob.defaults || ob.df || ob.d
    ob.events= ob.events || ob.ev || ob.e
    ob.events = bb.eParse(ob.events)
    ob.render=ob.render || ob.rr || ob.r
    ob.tagName=ob.tagName || ob.tn || ob.t
    ob.collection= ob.collection || ob.cl || ob.c
    ob.model = ob.model || ob.md || ob.m
    ob.el = ob.el || ob.q
    ob.render = ob.render || ob.rn || ob.rr || ob
    ob.events = bb.parseEvents(ob.events)
    vw= bb.V.extend(ob)
    return vw

}



vw.e=function(fn){
    _.e(this.model, fn)
    return this
}
vw.g=function(m){
    $l('g')
    if(this.model && this.model.get){

        return this.model.get(m)
    }

    $l('!model')

}
vw.s=function(a,b){this.model.set(a,b); return this}
vw.h=vw.H=function(a){this.$el.html(a); return this}
vw.eCl= function(fn){_.e(this.collection, fn)
    return this}

vw.ECl= function(fn){
    this.E()
    _.e(this.collection, fn)
    return this
}

vw.oC=function(fn){var g=G(arguments)
    this.model.on('change', fn)
    if(g.p){this.r()}
    return this
}

vw.e= function(a,b){ var cl = this.collection || this.cl
    return cl.each(a,b)
}


vw.j=vw.tJ=vw.J=function(){
    if(this.model){
        return this.model.toJSON()
    }

    $l('j:!md')
}

vw.J= function(fn){
    var vw=this,
        j= this.collection.toJSON()
    if(F(fn)){

        _.e(j,fn);return vw}

    return j
}

vw.r=  vw.rr=function(){ return this.render() }

vw.E=function(){   this.q.E(); return this }


vw.C$=function(s){  this.q.C$(s); return this  }



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

    Per= bb.Per()


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









//without backbone!
WOB=function(){$.x('x', 'bb view people')

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


/*

 Vws in bb don’t contain HTML markup for your app; they contain logic behind presentation of md’s data to user.
 A view’s r() met can be bound to   md’s change() event enabling view to instantly reflect md changes without  page refresh.
 Vws can use el to compose their el’s content   and then insert it into DOM all at once,     which makes for faster rendering because bw performs minimum required number of reflows and repaints.
 to create new el for your view, set any combination of  tagName, id, and k.     doesn’t append it to DOM.
 el: '#footer'  el: $('#footer')
 ops, el, tagName, id and k may be defined as fns,  if you want their vals to be determined at runtime.
 view.$(sel)   ~ $(view.el).find(sel)
 In our TdVw example’s render met,    we see this.$el used to set HTML  of el     and     this.$() used to find subels of class ‘edit’.

 If you need to apply existing bb view to dif DOM el     setElement can be used for this purpose.
 Overriding this.el needs to both change DOM ref  and re-bind evs to new el (and unbind from old).
 setElement will createcached $el reference for you,     moving delegated evs forview from old el to new one.
 bt1 = $('<bt></bt>');   bt2 = $('<bt></bt>');
 Vw = $V({e: {$: fn(e){ $l(vw.el === e.target) }}})
 vw = new Vw({el: bt1})
 vw.setElement(bt2);   // Apply view to bt2 using setElement
 bt1.trigger('click');     bt2.trigger('click'); // returns true
 The “el” property reps markup portion of view that will be rendered;
 to get view to actually render to page, you need to add it as new el or append it to existing el.
 can also provide raw markup to setElement:     view.setElement('<p><a><b>test</b></a></p>'); $l(view.$('a b').h()); // outputs "test"

 r()  passing  toJSON() encoding of atts of md associated with view.
 A common bb convention is to return this at end of r().      This is useful for number of reasons, including:
 Making views easily reusable in other parent views.    Creating list of els without rendering and painting each of them individually,
 only to be drawn once entire list is populated.

 Note usage of return this; at end of render.
 This common pattern enables us to reuse view as sub-view.
 We can also use it to pre-render view prior to rendering.
 What isn’t instantly obvious is that    'this' always refers to cur view object within cb fns.
 any string cb supplied to evs attr  must have corr fn with same name within scope of your view.
 edit cb is invoked when user double-clicks label el within el el,
 updateOnEnter is called for each keypress in el with class ‘edit’,
 close executes when el with class ‘edit’ loses focus.
 Each of these cb fns can use this to refer to TdVw object.
 Note that you can also bind mets yourself using _.bind(this.viewEvent, this),
 which is effectively what val in each event’s key-val pair is doing.
 Below we use _.bind to re-render our view when md changes.
 ( _.bind   =anytime fn is called val of this will be object, also supports  partial applic!!! )

 */

BOOKVW=function(){



    $.dI('td)





    TdVw = $V({ t:  'li',

        e:{
            'click .toggle': 'toggleCompleted',
            'dblclick label': 'edit',
            'keypress .edit': 'updateOnEnter',
            'click .destroy': 'clear',
            'blur .edit': 'close'
        },


        Item:function(o){return  $.d([$.cb().id('td_complete').at('checked', o.completed? 'checked':''), o.tt])},


        i: function(ops){this.ops = ops || {};
            this.model.on('change', _.b(this.r, this))
        }, //  access passed ops inyour view



        // Re-render tt of td item.
        r: function(){var v=this
            v.q.h( this.Item( this.md.J() ) ) // this.md.atts ?
            v.input = v.$('.edit')
            return v},

        edit: function() { },    // executed when td label is double clicked
        close: function() { },  // executed when td loses focus
        updateOnEnter: function( e ) { } // executed on each keypress when in td edit mode, but we'll wait for enter to get in action
    })




ListVw =$V({
        r: function(){
            // Assume our md exposes items we will display in our list
            _.e(this.g('items'), function(i){
                // Createnew instance of ItemVw, passing it spec md item
                // The itemVw's DOM el is appended after it
                // has been rendered. Here, 'return this' is helpful
                // as itemVw renders its md. Later, we ask for its output ("el")
                this.A(TdVw({ md: i }).r().q)}, this)} })

    tdVw = new TdVw()

    // log reference toDOM el that corresponds to view instance
    $l(tdVw.el); // logs <li></li>
}

function templs(){TMPWORKS=function(){$.x('b')

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

    listTp=function(){
        $.dI('list-tp', [ $.la() ]).C('o')
        //$.d('o').id('list-tp').A($.la())


    }

    rFn=function(){var da, tp, ul

        $l('r: '+this.model.g('d')[0].h)
        //$.c('b').ab(300,300)

        da=this.model.g('d')
        tp=this.tp
        ul= this.$el.find('ul')
        _.e(da, function(da){
            ul.A(
                tp.clone()
                    .find('a').hr('href', da.h).T(da.t)
                    .end()
            )

        })
    }

    rFn2=function(){$l('rr: '+ this.model.g('d')[0].h )  //$.c('b').ab(300,300)
        da = this.model.g('d'); tp=this.tp
        ul= this.q.find('ul')
        _.e(da,  function(da){
            clo=  tp.clone()
            ul.A(clo.find('a').hr('href', da.h).T(da.t).end())  })}




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






    Temp=function(i,  h){
        var s=''

        if(A(h)){
            _e(h,
                function(h){
                    s += h.oh()
                })
        }

        s="<script type='text/template'>"+ s +"</script>"

        $l('s: '+unescape(s))
        return qq(


            $(s)

        ).id(i).a()

    }




    tempScr=function(i,e){

        t=qq($(
            '<script type="text/template" id="'+i+'">'
        ))

        _e(e,
            function(e){

                t(e)
            })



        return t
    }




    temp=function(a,b){
        return _.template(
            $('#'+a).html(),
            ob(b))}







//QT:

// this will be an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all


    qT=function(f,o,e){
        return f(ob(o), e||_d())
    }


//a sample template
    lii=function(o,e){

        return e( li(o.me), li(o.me) )
    }

//return [li(o.me), li(o.me)]

// e= qT( lii, {me:'jason'} ).a()


    thed=function(o,e){

        return e(

            thead()(
                tr().k('header')(
                    th()('Name'),th()('Age')
                )
            )
        )
    }



// t=qT(thed).a()





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






    Temp=function(i,  h){
        var s=''

        if(A(h)){
            _e(h,
                function(h){
                    s += h.oh()
                })
        }

        s="<script type='text/template'>"+ s +"</script>"

        $l('s: '+unescape(s))
        return qq(


            $(s)

        ).id(i).a()

    }




    tempScr=function(i,e){

        t=qq($(
            '<script type="text/template" id="'+i+'">'
        ))

        _e(e,
            function(e){

                t(e)
            })



        return t
    }




    temp=function(a,b){
        return _.template(
            $('#'+a).html(),
            ob(b))}







//QT:

// this will be an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all


    qT=function(f,o,e){
        return f(ob(o), e||_d())
    }


//a sample template
    lii=function(o,e){

        return e( li(o.me), li(o.me) )
    }

//return [li(o.me), li(o.me)]

// e= qT( lii, {me:'jason'} ).a()


    thed=function(o,e){

        return e(

            thead()(
                tr().k('header')(
                    th()('Name'),th()('Age')
                )
            )
        )
    }



// t=qT(thed).a()



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


}