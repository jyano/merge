
dirData = [
    {ID:'1', fN:'jason', lN:'sad', par:'mom', p:'239-2394', e:'fasfsd@sd.com'},
    {ID:'2', fN:'frank', lN:'fad', par:'sfad', p:'239-2394', e:'fas@sd.com'},
    {ID:'3', fN:'fred', lN:'fuckman', par:'dad', p:'239-2394', e:'fadss@sd.com'},
    {ID:'4', fN:'rigo', lN:'sadman', par:'', p:'239-2394', e:'fas@sd.com'},
    {ID:'5', fN:'jan', lN:'fsmanad', par:'mom', p:'239-2394', e:'fas@sd.com'},
    {ID:'6', fN:'paul', lN:'fsamand', par:'dad', p:'239-2394', e:'fas@sd.com'},
    {ID:'7', fN:'steve', lN:'fsmanad', par:'mom', p:'239-2394', e:'rfas@sd.com'},
    {ID:'8', fN:'scott', lN:'manfsad', par:'sfad', p:'239-2394', e:'afas@sd.com'},
    {ID:'9', fN:'chad', lN:'fsadman', par:'', p:'239-2394', e:'afas@sd.com'},
    {ID:'10', fN:'greg', lN:'fsadman', par:'', p:'239-2394', e:'jas@sd.com'}
]



CssOb={
    '.details':{
        display:'none'
    },

    '.active': {
        C:'r'
    },
    body: {
        C:'z', c:'w'
    },
    'a.filter' : { C:'b', c:'y', P:'5px 10px', M: '5px', 'border-radius': '3px', 'text-decoration':'none' },
    'a.filter:hover' : { C:'y', c:'b', P:'5px 10px', M: '5px', 'border-radius': '3px', 'text-decoration':'none' },

    'div#wrapper' :{
        display: 'flex',
        'flex-direction':'column',
        'align-items':'center'
    },

    'div.tools' :{
        display: 'flex',
        'flex-direction':'column',
        'align-items':'center'
    },

    'input#searchBox':{c:'z'}


}

DIRECATMIN19=function(){z(); $CSS(CssOb);
    app = { m:{}, v:{}, r:{},c:{}}
    app.i =  function(){ direc = new app.v.People(
        dirData
    )}


    app.m.Person =  Bb.Model.extend({
        defaults: {ID:'',fN:'',lN:'',par:'',p:'',e:''},
        initialize: function(){this.set('type', this.get('par')? 'student': 'parent')}
    })
    app.c.People  = Bb.C.x({
        model: app.m.Person,
        comparator: function(per){return per.get('lN')}
    })


    app.v.Person =  Bb.V.x({
        events: {

            'click .list-header': 'showDetails'
        },

        showDetails:function(e){

            var q = $(e.target)
            q.toggleClass('active')
            q.siblings('.details').slideToggle('fast')
        },

        tagName: 'li',
        attributes: function(){
            return { class:  'person ' + this.model.get('type') }
        },
        tp: function(o){

            return $('<h3>').A(
                $.sp(o.fN+ ' '+o.lN + ' ( '+ o.type + ' )').K('list-header'),
                $.dK('details',[
                    'phone: '+ o.p, $.br(),
                    'email: ', $.a(o.e)
                ])
            )},

        r: function(){

            ob =  this.model

            j= ob.toJSON()
            $l('render:'+ j)
            this.A(
                this.tp(j)
            )

            return this
        }
    })


    app.v.People = Bb.V.x({
        el: '#wrapper',

        r: function(){
            var vw =this,
                q; $('#listing').empty()

            _.e(this.cl.models, function(da){

                vw.renderPerson(da)

            }, vw)

            return this
        },

        renderPerson: function(per){


            var newPer =  new app.v.Person({

                model: per
            })
            $('#listing').A( newPer.r().el )
        },

        initialize: function(data){

            this.cl = new app.c.People(data);

            this.r()
        }

    })


    $.dI('wrapper', [

        $('<h1>').A('games directory').col('o'),

        $.dK('tools',[

            $('<h4>').col('g').A('search:'), $.br(),
            $('<input>').id('searchBox'),  $.br(),
            $('<h5>').col('y').A('Filter:'), $.dI('filter'),
            $.dI('count')
        ]),

        $.ulI('listing', [])


    ])

    app.i(dirData)

}


DIREC=function(){z(); $CSS(CssOb);

    app = { m:{}, v:{}, r:{},c:{}}

    app.r.Rtr = Bb.R.x({
      routes: {
          'filter/:type': 'urlFilter'
      },
        urlFilter:function(type){
            direc.filterType= type
            direc.trigger('change:filterType')
        }

    })


    app.i =  function(){
        direc = new app.v.People(dirData)

        rtr = new app.r.Rtr()
        Bb.h.start()
    }


    app.m.Person =  Bb.Model.extend({
        defaults: {ID:'',fN:'',lN:'',par:'',p:'',e:''},
        initialize: function(){this.set('type', this.get('par')? 'student': 'parent')}
    })
    app.c.People  = Bb.C.x({
        model: app.m.Person,
        comparator: function(per){return per.get('lN')}
    })
    app.v.Person =  Bb.V.x({
        events: {

            'click .list-header': 'showDetails'
        },

        showDetails:function(e){

            var q = $(e.target)
            q.toggleClass('active')
            q.siblings('.details').slideToggle('fast')
        },

        tagName: 'li',
        attributes: function(){
            return { class:  'person ' + this.model.get('type') }
        },
        tp: function(o){

            return $('<h3>').A(
                $.sp(o.fN+ ' '+o.lN + ' ( '+ o.type + ' )').K('list-header'),
                $.dK('details',[
                    'phone: '+ o.p, $.br(),
                    'email: ', $.a(o.e)
                ])
            )},

        r: function(){

            ob =  this.model

            j= ob.toJSON()
            $l('render:'+ j)
            this.A(
                this.tp(j)
            )

            return this
        }
    })
    app.v.People = Bb.V.x({

        events: {

            'keyup #searchBox': 'searchFilter'

        },

getTypes:function(){},
        searchFilter:function(){


        },
        filterBySearch:function(){


        },
        filterByType:function(){


        },


        createFilters:function(){},
        setFilter:function(){},

        el: '#wrapper',

        r: function(){
            var vw =this,
                q; $('#listing').empty()

            _.e(this.cl.models, function(da){

                vw.renderPerson(da)

            }, vw)

            return this
        },

        renderPerson: function(per){


            var newPer =  new app.v.Person({

                model: per
            })
            $('#listing').A( newPer.r().el )
        },

        initialize: function(data){

            this.cl = new app.c.People(data);

            this.r()
        }

    })


    $.dI('wrapper', [

        $('<h1>').A('games directory').col('o'),

        $.dK('tools',[

            $('<h4>').col('g').A('search:'), $.br(),
            $('<input>').id('searchBox'),  $.br(),
            $('<h5>').col('y').A('Filter:'), $.dI('filter'),
            $.dI('count')
        ]),

        $.ulI('listing', [])


    ])
    app.i(dirData)

}










function pre(){
    _vw=function(o){o=o||{}
        if(F(o.i)){
            o.initialize = o.i
        }

        if(o.q){
            o.el = q
        }
        return o
    }

    $MS=function(ms,cHeader,cBody){z()
        var m = $Ms(ms)

        if(S(cHeader)){m.C(cHeader)}
        if(S(cBody)){$.C(cBody)}
        return $
    }

    $.ipI=function(id, arr){
        var q = $.ip().id(id)
        if(A(arr)){
            _.e(arr, function(qq){
                q.A(qq)
            })
        }
        else if(arr){
            q.A(arr)
        }
        return q
    }

    $.ulI=function(id, arr){
        var q = $.ul().id(id)
        if(A(arr)){
            _.e(arr, function(qq){
                q.A(qq)
            })
        }
        else if(arr){
            q.A(arr)
        }
        return q
    }

}
pre()
