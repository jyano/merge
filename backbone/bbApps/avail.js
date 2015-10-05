AVAIL=function(){z()
    f=$M({
        defaults:{ prop:3 },
        test:function(){ $l( this.get('prop') ) },
        test2:function(a){var prop =this.get('prop')
            $l('prop: ' + prop)
            return prop
        },
        happy:function(a){
            this.test2(a)
        }
    })
    Ap.M.Avail=$$M({urlRoot: '/avail'})
    Ap.T.Avail=function(model){
        return $.d('g',400,100).mar(20).A(
            $.h4(model.g('c')).id('avail').col('y','r'),
            $.br(),
            $.sp('delete').id('deleteAvail'),
            $.sp(' '), $.sp('edit').id('editAvail'),
            $.sp(' '), $.cb().id('selAvail')
        )

    }
    Ap.V.Avail=$$V({
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
    Ap.C.Avails=$$C({model: Ap.M.Avail, url: '/avail'})
    avs=Ap.C.Avails()
    avs.on('destroy', function(j){
        alert('i am col and i was destroyed')
        v.trigger('modelDeleted')
    })
    Ap.V.Avails =$$V({
        el:'#availsDiv',
        i:function(){this.r()},
        r:function(){
            var t=this;
            t.collection.fetch({
                success:function(){
                    t.q.H('');// t.$el.html('')
                    t.q(h1('Avails List')); //t.$el.A("<h1>Avails List</h1>")
                    t.collection.each(function(m){
                        t.$el.A( Ap.V.Avail({model:m}).render().el )
                        return t},t)// t.e(function(m){t.q(Ap.V.Avail({m:m}).r().el ); return t}, t)
                }
            })
        }
    })
    v=Ap.V.Avails({
        collection:avs
    })//.render()
    //v=Ap.V.Avails({cl:avs})
    v.on('modelDeleted',
        function(){alert('modDel')})
    $.ip('new avail').id('newAvail').A()
    $.bt('ok',function(){
        
        Ap.M.Avail({
            c: $('#newAvail').v()
        }).save()
        
        m.on('destroy', function(){alert('i am the model and i was destroyed')})
        
        v.render()
    }).A()
    $.dI('availsDiv')
}

SWEET = function(){$.x('x', 'bb view people')

    Bb.View.prototype.C$=function(s){this.$el.C$(s); return this}

    Vw= $V({
        el: ul=$.ul(),
        i: function(){
            this.r().C$('init..')},
        r: function(){ var ul=this.q
            this.ECl(function(p){

                ul.A(
                    $.li([p.n,'(',p.a,')'])
                )
            })

            return this}
    })

    peep= [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]
    vw=Vw({ cl: peep  })
    _.in(function(){ peep.pop(); vw.r() })
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
         _.in(function(){peep.pop(); vw.r()},'*')
         */


    }
}


CHAINB = function () {
    //prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
    // sol: bb   supports  _.chain,
    // which returns ob  w  us-arr-ops  attached as mets which return that ob
    //chain starts chain, returns wrapper around cl's mds (wrapped arr)
    //  The chain ends with call to val(),
    // which  terminates chain and returns resulting array

    cl= $$C()([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}])
        .chain().fl(function (i) {return i.g('a') > 10})
        .m(function (i) {return i.g('n')})
        .val() //['I','R']
    // Some of bb- spec mets do return this, which means they can be chained as well:

    cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
}

DIRTPAGE = function () {
    $.x()
    var newMsBox, newTopic, newMs, searchBox

    MsM = $$M({})
    MsC = $$C({m: 'MsM'})
    MsView = $$V({})
    MssView = $$V({})
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

        $.g('topics/' + wappyPam, function (msgs) {
            $('#results').ht($.h5('len: ' + msgs.length))
            _.e(msgs, function (ms) {
                $('#res').A($.h6(ms.ms))
            })
        })
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
FLCL=function(){$.x('r', 'filtering a cl:')

    /*
     FlV = Bb.V.x({
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


    Cl =  $$C({
        i:function(){}})

    cl = Cl({})

    cl.add([
        {a: 'f', b: 's'},
        {a: 't', b: 's'},
        {a:'f', b: 's'},
        {a: 's', b:'t'}
    ])
    res = cl.where({a:'f',b:'s'})
    //http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
}
TASKER=function(){$.x()


    Ap.M.Task = $$M({})
    t1=Ap.M.Task({t:'go  store', pr:4})
    t2=Ap.M.Task({t:'go park', pr:3})

    Ap.V.Tsk= $$V({t:'li',
        rr: function(){this.A( this.g('t') )
            return this
        }
    })

    taskView=Ap.V.Tsk({m:t1})
    Ap.C.Tasks = $$C({m:Ap.M.Tsk})
    tasks=Ap.C.Tasks([{t:'hi'}, {t:'bye'}])

    Ap.V.Tasks = $$V({t:'li',
        rr: function(){
            var that=this
            this.cl.each(
                function(t){
                    var v=Ap.V.Task({m:t})
                    that.$el.A(v.rr().el)
                }, this)
            this.el.A()
        }
    })

    tasksV=Ap.V.Tasks({cl:tasks})
}

COLLEC=function(){$.x().h1('BCL')
    Bk = $$M({d: {ID: '', n: ''}, id: "ID",
        url: 'http://localhost:51377/api/Books'
    })

    BksC = $$C({m: Bk})
    cl1 =   BksC()
    bk1 = Bko({ ID: 1,  n: "Bk 1" })
    bk2 =  Bko({ ID: 2, n: "Bk 2" })
    cl2 =  BksC([bk1, bk2])
    bk3 =  Bk({ ID: 3, n: "Bk 3" })
    cl2.A(bk3)
    change=function(){
        bk3 = new Bk({ ID: 3, n: "Bk 3" })
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


PEOPLE=function(){$.x(); mds();vws();cls();clVw()
    function mds(){
    Per=$$M({
        i: function () {
            //this.oV(function(mod, err){$l(err)})
        },
        d: {n:'doe', a: 30, j: 'wrk'},
        validate: function (ats) {if (ats.age < 0) {return 'a < 0!'}},
        work: function () {return this.g('n') + ' is working'}
    })
    Person= $$M({
        I:function(){}, // this.oV(function(mod, err){$l(err)})
        D:{name:'john doe', age:30, job:'worker'},
        V:function(ats){if(ats.age <0){
            return 'age below zero, stupid!'}},
        work:function(){return this.g('name')+' is working'}
    })
    Person0=function(o){
        this.name=o.name
        this.age=o.age
        this.job=o.job
        //this.work=function(){}
    }
    Person0.prototype.work=function(){return this.name + ' is working'}
    Per= $$M({d: {n:'a', a:20, o:'p'}})

        Person=$$M({
            I:function(){}, // this.oV(function(mod, err){$l(err)})
            D:{name:'john doe', age:30, job:'worker'},
            V:function(ats){if(ats.age <0){return 'age below zero, stupid!'}},
            work:function(){return this.g('name')+' is working'}})
        Per= $$M({d: {n:'a', a:20, o:'p'}})
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
        p=  Per({})
        p1 = Per({n:'b'})
        p2= {n:'c'}
        Person0.prototype.work=function(){return this.name + ' is working'}



        p=Person({name:'yano', age:34})
        p.oV(function(mod, err){$l(err)})
        p1 =  Per({n:'j'})
    p2=  Per({n:'y'})
    p = Per({n: 'y', a: 34})
    p=Per({name:'yano', age:34})
    p.oIv(function (mod, z) {$l(z)})

        }
    function vws() {
        PerV = $$V({
            t: 'li',
            x: 'some-per', k: 'per',

            tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),

            r: function () {
                this.$el.A('fasdfsfasd')
                _m = this.model
                //    this.$el.A(this.tp(m  ))  // this.model.toJSON()
            },

            i: function () {
                this.r()
            }
        })
        PerV = $$V({
            t: 'li',
            x: 'some-per', k: 'per',

            tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),

            r: function () {
                this.$el.A('fasdfsfasd')
                _m = this.model
                //    this.$el.A(this.tp(m  ))  // this.model.toJSON()
            },

            i: function () {
                this.r()
            }
        })
        PerV = $$V({
            tn: 'li',
            k: 'person', x: 'some-person',
            i: function () {
                this.r()
            },
            tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
            r: function () {
                var t = this, q = this.$el
                //this works, but doesnt use a template
                // t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
                q.html(q.text(t.j()))
            }
        })
        personView = $$V({
            t: 'li',
            k: 'person',
            i: 'some-person',
            I: function () {
                this.R()
            },
            T: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
            R: function () {
                var t = this


                //this works, but doesnt use a template
                // t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))

                t.H(t.T(t.J()))
            }
        })
        v = personView({m: p})
        v = pV = PerV({m: p})
    }
    function cls() {
        peopleCol = $$C({m: Person})
        PerC = $$C({m: Per})
        pC = PerC([
            {n: 'rigo', a: 29},
            {n: 'j', a: 2},
            {n: 's', j: 'gx'}
        ])
        Pers = $$C({model: Per})
        pers = Pers([p1, p2])
        Pers = $$C({model: Per})
        pers = Pers([p1, p2])
        Pers = $Cl({m: Per})
        pers = Pers()
        p1 = pers.add(p)
        pers.add(p2)
        pers.rm(p1)
        pC = peopleCol([

            {name: 'rigo', age: 29},
            {name: 'jan', age: 2},
            {name: 'sal', job: 'graphics'}

        ])
        pC.at(1).s('name', 'joejoe')
        pC.add(p)
        pC.at(1).n('joejoe')
        pC.at(1).s('name', 'joejoe')
        peop = $cl()
        peop.comparator = function (a, b) {
            return a.g('n') < b.g('n') ? -1 : 1
        }
        peop.A(tom = $m({n: 'T'})).A(rob = $m({n: 'R'})).A(tim = $m({n: 'T'}))
        peop.indexOf(rob)//0
        peop.indexOf(tom)//2
        pC=PepC()

        peopleCol=$$C({m:Person } )
        pC.A([p, p1,p2])
        pC=PepC()

        pC.A([p, p1,p2])


        PepC=$$C({m:Per})
        pC=  peopleCol([

            {name:'rigo',age:29},
            {name:'jan',age:2},
            {name:'sal',job:'graphics'}
        ])
        pC.at(1).s('name','joejoe')

    }
    function clVw() {
        peopleView=$$V({

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

        PerColV = $$V({
            tn: 'ul',
            i: function () {
                $l('hi')
                $l(this.cl)
            },
            r: function () {//var t=this
                this.cl.each(function (p) {
                    var v, pV  //$l(p.g('n'))
                    pV = PerV.o({m: p}) //$l(pV.el)
                    this.$el.append(pV.el) //t.q( pV.el  )
                }, this)
            }

        })
        PepV = $$V({

            cl: PepC, el: ul = $.ul(),
            i: function () {
            },
            r: function () {
                ul = this.$el.E()

                this.j(function (md) {
                    PerV({m: md}, ul)
                })
            }
        })
        pCV = PepV({cl: pC})
        pCV = PerColV({cl: pC})
        pCV.r()
        $.A(pCV.el)//pC=new peopleCol() //pC.add(p)
        peopleView = $$V({

            t: 'ul',

            I: function () {
                $l('hi')
                $l(this.cl)
            },


            R: function () {//var t=this

                this.cl.each(
                    function (person) {

                        //$l(person.get('name'))

                        var v = personView({m: person})

                        //$l(v.el)

                        this.$el.append(v.el)

                        //t.q( v.el  )

                    }, this)
            }

        })
        PepV = $$V({
            cl: PepC, el: ul = $.ul(),
            i: function () {
            },
            r: function () {
                ul = this.q.E()
                this.J(function (md) {
                    PerV.o({m: md}, ul)
                })
            }
        })
        pCV = PepV({cl: pC})
        pcv = peopleView({cl: pC})
        pcv.R()
        peopleView=$$V({

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

    }
    _.in(.2,function(){pCV.r()},'*')
    _.in(.4,function(){pCV.r()},'*')
    _.in(.2,function(){pCV.r()})
    _.in(.4,function(){pCV.r()})
}




AP=TASK=function(){  $.x('g', 'tasker');

    Temp('task', [
        $.lb('Task: '),
        $.ip().id('task_desc'),
        $.bt('add task').id('btn')
    ])


        Ap.M.Tsk = $$M({})
        tsk1 = Ap.M.Tsk({
            title: 'go to the store',
            priority: 4
        })
        tsk2 = Ap.M.Tsk({
            title: 'go to the park',
            priority: 3
        })


        TskV=   Ap.V.Tsk = $$V({
            t: 'li',
            el: $('#container'),
            i: function(){this.r()},
            r: function(){
                this.$el.html(this.g('t'));
                this.$el.html( temp('task') )
            },
            events: {'click button': 'add'},
            add: function(){ alert( $('#task_desc') + ' task added' )}
        })
        tskVw = Ap.V.Tsk({m: task1})



    Ap.C.Tsks = $$C({m: Ap.M.Tsk})
    tsks=Ap.C.Tasks([{t:'hi'}, {t:'bye'},{title:'hi'}, {title:'bye'}])


        Ap.V.Tsks = $V({
            t: 'li',
            r: function(){
                var that=this
                //v.eCl(function (t) {that.q.A(Ap.V.Tsk({m: t}).r().q)})
                this.cl.each(
                    function(t){
                        var v=Ap.V.Task.o({m:t})
                        that.$el.A( v.rr().el )
                    }, this)
                this.$el.A()
            }
        })
        tsksVw = Ap.V.Tsks({cl: tsks})


    $.bt('r Ap.V.Tsks tsksV', function () {
        tsksV.r()
    })
    $.d().id('container')
    r=$R({
        R:{
            '':'first',
            'first':'first',
            'second':'second'},
        first:function(){$l('first')},
        second:function(){
            new Task()
            $l('second')}

    })
    Bb.h.start({pushState:true})
}
