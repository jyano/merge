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


