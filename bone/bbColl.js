Bb.C = Bb.Collection; Bb.C.x = Bb.C.extend; cl = Bb.Collection.prototype; Bb.sEv(cl)
cl.A = cl.add
cl.rm=cl.remove
cl.s= function(a,b,c){var cl=this
    if(O(a) && O(b)){if(b.v){b.validate= b.v?true:false}}
    if(S(a) && O(c)){if(c.v){c.validate= c.v?true:false}}
    cl.set(a,b,c)
    return cl
}
_$$C = function(ob){ob=ob||{}
    //var g=G(arguments), o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s}; o=o||{}
    if(!F(ob.initialize) && F(ob.i) ) {  ob.initialize = ob.i  }
    if(!O(ob.collection) &&(O(ob.cl)||O(ob.c))) {ob.collection = ob.cl ||ob.c}

    if(!O(ob.model) && (O(ob.md)||O(ob.m)) ) {ob.model = ob.md || ob.m}
    //ob.model= ob.model || ob.md || ob.m
    //if(ob.m){ob.model= ob.m}
    ob.defaults = ob.defaults || ob.df || ob.d
    ob.id = D(ob.id)? ob.id : ob.x
    ob.idAttribute = ob.idAttribute || ob._id
    ob.events= ob.events || ob.ev || ob.e
    ob.validate=ob.validate || ob.v

    function more() {
        if (ob.fn) {
            ob.i = ob.fn
        }
        ob.initialize = ob.initialize || ob.i
        ob._i = ob.initialize
        ob.id = D(ob.id) ? ob.id : ob.x
        ob.className = ob.className || ob.k
        ob.tagName = ob.tagName || ob.tn || ob.t
        ob.defaults = ob.defaults || ob.df || ob.d
        ob.events = ob.events || ob.ev || ob.e
        ob.render = ob.render || ob.rr || ob.r
        ob.tagName = ob.tagName || ob.tn || ob.t
        ob.collection = ob.collection || ob.cl || ob.c
        // ob.render= ob.render || ob.rr || ob.r
        ob.render = ob.render || ob.rn
    }
    return Bb.C.x(ob||{})
}
$$C=function(ob){
    var Cl = _$$C(ob)
    return function(ob,b,c,d){
        ob=ob||{}
        var cl
        ob.collection= ob.collection || ob.cl || ob.c
        ob.model = ob.model || ob.md || ob.m
        cl= new Cl(ob,b,c,d) //if(q){cl.a2(q)}
        cl.q= cl.$el
        cl.a2=function(a){return cl.q.a2(a)}
        cl.g=function(a){if(a){return cl.model.get(a)}}

        /*
         cl.A=function(ob){

         var g=G(arguments)
         if(S(ob)){ob = cl.g(ob)}
         if(ob){this.$el.A(ob)}
         if(U(ob) || g.p){ this.$el.A() }
         return this.$el
         }
         //_.b(ob._i,cl) (op)
         */
        return cl
    }

}
$C=function(ob,a,b,c){return $$C(ob,a,b,c)()}
C$= function(a){var b,c
// $.ext(Bb.Collection)
    //if(U(a)){var c=new Bb.Collection; return sCl(c)}
    a=O(a)?a:{}
    if(a.m){a.model= a.m}
    c= Bb.C.x(a)
    return function(o){o=O(o)?o:{}
        //if(o.m){o.model= o.m}
        b=new c(o)
        return b}
}

BBSORT00 = function () {
    $.x('a', 'sort dont work')
    chps = $Cl({m: Chp = $M()})()
    chps.comparator = function (a) {
        return a.tt
    }
    chps.add(Chp({p: 9, tt: "End"}));
    chps.add(Chp({p: 5, tt: "Mid"}));
    chps.add(Chp({p: 1, tt: "Beg"}))
    $l(chps.pluck('tt'))
    chps.sort()
    $l(chps.pluck('tt'))
}

SORT=function(){z()
    Chp = $$M()
    chps =  $$C({ m:Chp })()
    chps.comparator = function (a) {
        return a.tt
    }
    chps.add(Chp({p:9, tt:"End_"}))
    chps.add(Chp({p:1, tt:"Beg2_"}))
    chps.add(Chp({p:5, tt:"Mid_"}))
    chps.add(Chp({p:1, tt:"Beg_"}))
    $Ms(chps.pluck('tt'))

    chps.sort()
    $Ms(chps.pluck('tt'))
}



COUNTER0 = function () {z()
    Td = $$M({df: {tt: '', completed: false}})
    // -add() and rm() accept  indiv mds | []      // { merge: true }  -> MERGE  dup mds, !ignore
    items = $cl().A([{id: 1, n: "Dog", a: 3}, {id: 2, n: "cat", a: 2}]).A([{
        id: 1,
        n: "Bear"
    }], {merge: true}).A([{id: 2, n: "lion"}])// merge: false
    $l(_.jS(items.toJSON())) // [{"id":1,"name":"Bear","age":3},{"id":2,"name":"cat","age":2}]
    //    to retriev a md from a cl, use Cl.get(), accepts single id:
    tds = TdsCl([td = Td({id: 2, tt: 'book'})])
    td2 = tds.g(2);
    $l(td2 === td) // true
    //   mds  passed by reference
    $l(tdCid === td); // true
    //Listening for evs
    //   can listen for add and rm evs which occur when mds are added/rmd from cl
    TdsCl = $cl()
    TdsCl.on("add", function (td) {
        $l("Gone " + td.g("tt") + " ?" + (td.g("completed") ? 'Y' : 'N'))
    })
    TdsCl.A([{tt: 'Jamai', completed: false}, {tt: 'DL', completed: true}])  // Gone Jamai? N    Gone DL? Y
    // can bind to change event to listen for changes to any of mds in cl
    TdsCl = $cl()
    TdsCl.on("change:tt", function (m) {
        $l("Nah! I " + m.g('tt'))
    })
    TdsCl.A([{tt: ' Jamaica.', completed: false, id: 3}])
    td = TdsCl.g(3)
    td.s('tt', 'go fishing')  //  Nah! I  go fishing
    Td = $M({df: {tt: '', completed: false}})
    td = Td().s({tt: 'Buy cookies', completed: true})
    td.on({
        'change:tt': ttChd = function () {
            $l('tt chd!')
        },
        'change:completed': sttChd = function () {
            $l('stt chd!')
        }
    })
    td.s({tt: 'groceries'})  // tt chd!
    // Use once, dont need to unbind   ev  listener
    TdCounter = _.x({cA: 0, cB: 0}, Bb.E)
    TdCounter.once('event', incrA = function () {
        TdCounter.cA += 1;
        TdCounter.trigger('event')
    })  // This triggering will not  produce any effect on counters
    TdCounter.once('event', incrB = function () {
        TdCounter.cB += 1
    })
    TdCounter.trigger('event')   // Trigger event for first time
    TdCounter.cA //1
    TdCounter.cB //1
    // counterA and counterB should only have been incred once.
}
INDEXSORT0 = function () {
    tds = $cl().A([{tt: '  Belgium.', completed: false}, {tt: ' China.', completed: false}, {
        tt: '  Aust',
        completed: true
    }])
    tds.forEach(function (md) {
        $l(md.g('tt'))
    }) //   Belgium.//   China. //   Austria.
    // sortBy()- sort a cl on spec attr, ex: sortByAlph
    tds.sortBy(function (td) {
        return td.g("tt").tLC()
    }).forEach(function (m) {
        $l(m.g('tt'))
    }) // go to Austria. // go to Belgium. // go to China.
    count = 1;
    $l(tds.map(function (md) {
        return count++ + ". " + md.g('tt')
    })) //1. go to Belgium. //2. go to China. //3. go to Austria.
    tds.max(function (m) {
        return m.id
    }).id;
    tds.min(function (m) {
        return m.id
    }).id
    //  pluck() extract  spec attr
    captions = tds.pluck('caption') // returns list of captions
    // filter()  ex: Filter by array of md IDs

    Tds = $Cl({
        md: Td, filterById: function (ids) {
            return this.mds.filter(function (c) {
                return _.contains(ids, c.id)
            })
        }
    })
    //   indexOf() return index of particular item within cl

    peop = $cl()

    peop.comparator = function (a, b) {
        return a.g('n') < b.g('n') ? -1 : 1
    }
    peop.A(tom = $m({n: 'T'})).A(rob = $m({n: 'R'})).A(tim = $m({n: 'T'}))
    peop.indexOf(rob)//0
    peop.indexOf(tom)//2
}
PLV0=function(){$.x('o','hi')


    Per= Bb.M.e({d: {n:'a', a:20, o:'p'}})

    p=  Per.o({})
    p1 = Per.o({n:'b'})
    p2= {n:'c'}
    PerV=Bb.V.e({t:'li',
        x:'some-per', k:'per',

        tp:tp=_.tp('<%= n %> (<%= a %>) - <%= o %>'),

        r: function(){
            this.$el.A('fasdfsfasd')
            _m=this.model
            //    this.$el.A(this.tp(m  ))  // this.model.toJSON()
        },

        i: function(){this.r()}
    })

    PepC=Bb.C.e({m:Per})

    pV=PerV.o({m:p})
    pC=PepC.o()

    pC.add([p, p1,p2])

    PepV=Bb.V.e({cl: PepC, el:ul= $.ul(),
        i:function(){},
        r: function(){
            ul=this.q.E()
            this.j(function(md){PerV.o({m:md},ul)})}})
    pCV = PepV.o({cl: pC})
    $.in(.2,function(){pCV.r()},'*')
    $.in(.4,function(){pCV.r()},'*')

}
BBCOL0=function(){$.x()
    Per = $$M({})
    p1 =  Per({n:'j'})
    p2=  Per({n:'y'})
    Pers= $$C({model: Per})
    pers=  Pers([p1, p2])
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
PLV=function(){$.x('o','hi')


    Per= Bb.M.e({d: {n:'a', a:20, o:'p'}})

    p=  Per.o({})
    p1 = Per.o({n:'b'})
    p2= {n:'c'}
    PerV=Bb.V.e({t:'li',
        x:'some-per', k:'per',

        tp:tp=_.tp('<%= n %> (<%= a %>) - <%= o %>'),

        r: function(){
            this.$el.A('fasdfsfasd')
            _m=this.model
            //    this.$el.A(this.tp(m  ))  // this.model.toJSON()
        },

        i: function(){this.r()}
    })

    PepC=Bb.C.e({m:Per})

    pV=PerV.o({m:p})
    pC=PepC.o()

    pC.add([p, p1,p2])

    PepV=Bb.V.e({cl: PepC, el:ul= $.ul(),
        i:function(){},
        r: function(){
            ul=this.q.E()
            this.J(function(md){PerV.o({m:md},ul)})}})
    pCV = PepV.o({cl: pC})
    $.in(.2,function(){pCV.r()},'*')
    $.in(.4,function(){pCV.r()},'*')

}
BCL=function(){$.x().h1('BCL')

    Bk = Bb.M.e({d: {ID: '', n: ''}, id: "ID",
        url: 'http://localhost:51377/api/Books'
    })

    BksC = Bb.C.e({m: Bk})

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

    Per = Bb.M.e({})
    p1 =  Per.o({n:'j'})
    p2=  Per.o({n:'y'})

    Pers= Bb.C.e({model: Per})

    pers=  Pers.o([p1, p2])
}
BBSORT=function() {

    Chp = Bb.M.e()
    chps =  Bb.C.e({m:Chp}).o()
    chps.comparator = function (a) { return a.tt } //$.x(a)
    chps.add(Chp.o({p:9, tt:"End"}))
    chps.add(Chp.o({p:5, tt:"Mid"}))
    chps.add(Chp.o({p:1, tt:"Beg"}))
    $l(chps.pluck('tt'))
}
DIRTPAGE=function() {
    $.x()

    var newMsBox, newTopic, newMs, searchBox

    MsM = Bb.M.e({})
    MsC = Bb.C.e({m: 'MsM'})
    MsView = Bb.V.e({})
    MssView = Bb.V.e({})

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

POPLE=function(){$l('people');z()
    Quiz0=function(title){

        this.title=title

    }
    Person0=function(o){

        this.name=o.name
        this.age=o.age
        this.job=o.job

        //this.work=function(){}
    }
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
    Person0.prototype.work=function(){return this.name + ' is working'}


    Person=bbM({
        I:function(){}, // this.oV(function(mod, err){$l(err)})
        D:{name:'john doe', age:30, job:'worker'},
        V:function(ats){if(ats.age <0){return 'age below zero, stupid!'}},
        work:function(){return this.g('name')+' is working'}})

    p=Person({name:'yano', age:34})
    p.oV(function(mod, err){$l(err)})
    personView=$$V({t:'li',
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
    peopleCol=$$C({m:Person } )
    //pC=new peopleCol()
    //pC.add(p)
    pC=  peopleCol([

        {name:'rigo',age:29},
        {name:'jan',age:2},
        {name:'sal',job:'graphics'}
    ])
    pC.at(1).s('name','joejoe')
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



BADS=function(){$.x().h1('backcl').i('chicks').A()
    bads = $$C()()
    bads.oA(function (s) {alert("new baddie: " + s.g("n"))})
    bads.add([{n: "bad1"}, {n: "bad2"}])
}
FRIEND=function(){$.x().h1('FRIEND')
    Frnd = $$M({
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
    Frnds = $$C({m: Frnd})
    frnds = Frnds()
    f = Frnd({n: "paul", a: 7})
    p1 = frnds.A(f);
    f1=Frnd({name:"Thomas", age:67})
    f1 = Frnd({n: "Lul", a: 67})
    f1 = cl.A(f1)
    f2 = cl.A(f2)
    f2= Frnd({game:'jigo'})
    f2.s({name:"Rigo", age:7})
    f2.s('mame','hah')
    frnds.A(f2);
    frnds.rm(f1)
}

function usesC$(){
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
        Ap.V.Avail=Bb.V.e({

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
        Ap.V.Avails =Bb.V.e({
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
        Ap.M.Avail=Bb.M.e({urlRoot: '/avail'})
        Ap.C.Avails=C$({model: Ap.M.Avail, url: '/avail'})
        Ap.V.Avail=Bb.V.e({

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

        Ap.V.Avails =Bb.V.e({el:'#availsDiv',
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

        Bb.M.e({
            d:{ prop:3 },
            test:function(){
                $( this.get('prop') ) },
            test2:function(a){ $l('prop: '+this.get('prop'))},
            happy:function(a){
                this.test2(a)
            }
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
}
function unders(){
    USMETS0 = function () {
        tds = $C({})
        // any()  confirm  if any of  vals  incl  pass  iterator   truth  test
        tds.any(function (md) {
            return md.id === 100
        })
        tds.some(function (md) {
            return md.id === 100;
        })
        //  size() return cl size, tds.size() ~ tds.length;
        //  isEmpty()  determine whethercl is empty
        isEmpty = tds.isEmpty()
        //   groupBy() group cl into groups of like items, ex: create groups of completed and incomplete mds


        tds.A([{tt: 'Belgium.', completed: false}, {tt: 'China.', completed: false}, {
            tt: 'Austria.',
            completed: true
        }])

        byCompleted = tds.groupBy('completed');
        completed = $cl(byCompleted[true]);
        $l(completed.pluck('tt')) //  ["Aust"]
        //Underscore  operations  on  objects  are  avail as mets  on   Mds.


        //   pick()  extractset   of   atts   frommd
        Td = $$M({d: {tt: '', completed: false}})
        td = Td({tt: 'go to Austria.'});
        $l(td.pick('tt')) //  {tt: "go to Austria"}


        //  omit(), extract all atts from md, except those listed
        td = Td({tt: 'go to Austria.'});
        $l(td.omit('tt'))   //   {completed: false}

        // keys(), vals() -> lists of attr names, vals
        td = Td({tt: 'go to Austria.'});
        $l(td.keys())   //   ["tt", "completed"]
        $l(td.vals())  //  ["go to Austria.", false]


        // pairs() get  list  of atts as [key, val] pairs
        pairs = Td({tt: 'Aust'}).pairs();
        $l(pairs[0]); // ["tt", "Aust"]
        $l(pairs[1]) // ["completed", false]


        //  invert() creates ob where vals are keys, atts are vals
        Td({tt: 'go to Austria.'}).invert()  // {'go to Austria.': 'tt', 'false': 'completed'}


    }
    CHAINABLE0 = function () {
        //prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
        // sol: bb   supports  _.chain, which returns ob  w  us-arr-ops  attached as mets which return that ob
        //chain starts chain, returns wrapper around cl's mds (wrapped arr)
        //  The chain ends with call to val(), which  terminates chain and returns resulting array
        Cl([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}]).chain()
            .fl(function (i) {
                return i.g('a') > 10
            })
            .m(function (i) {
                return i.g('n')
            })
            .val() //['I','R']
        // Some of bb- spec mets do return this, which means they can be chained as well:
        $cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
    }
}
function laten() {
    cl.atr = cl.attributes
    cl.A = cl.a = function () {
        var cl = this, g = G(arguments), ar
        this.add(g.A ? g.f : g);
        return this
    }
    cl.b = cl.bind
    cl.g = cl.get
    cl.j = cl.tJ = cl.toJSON
    cl.l = function () {
        $l(this.toJSON());
        return this
    }
    cl.rm = cl.r = cl.remove

    cl.l2 = function (a, b, c, d) {
        return this.listenTo(a, b, c, d)
    }
    cl.l1 = function (a, b, c, d) {
        return this.listenToOnce(a, b, c, d)
    }
    cl.V = function (Vw, ob) {
        ob = ob || {}
        ob.m = this
        return Vw(ob)
    }

    function alpha() {
        C$ = function (a) {
            var b, c

// $.ext(Bb.Collection)
            //if(U(a)){var c=new Backbone.Collection; return sCl(c)}
            a = O(a) ? a : {}
            if (a.m) {
                a.model = a.m
            }
            c = Backbone.Collection.extend(a)
            return function (o) {
                o = O(o) ? o : {}

                //if(o.m){o.model= o.m}
                b = new c(o)
                o.o = o.on
                E$(o)
                return b
            }
        }
    }

    old = function () {//cl.o= function(){var g=G(arguments); this.on.apply(this, g) }

        cl.tr = function (a, b) {
            this.trigger(a, b);
            return this
        }


        cl.oRm = function (a, b, c) {
            return this.on('remove', a, b, c)
        }   // "remove" (model, collection, options) — when a model is rcl from a collection.
        cl.oX = cl.oD = function (fn) {
            return this.on('destroy', fn)
        } // "destroy" (model, collection, options) — when a model is destroyed.
        cl.oR = cl.oRs = function (fn) {
            return this.on('reset', fn)
        }  // "reset" (collection, options) — when the collection's entire contents have been replaced.
        cl.oSo = function (a, b, c) {
            return this.o('sort', a, b, c)
        }    // "sort" (collection, options) — when the collection has been re-sorted.
        cl.oC = cl.oCh = function (n, fn) {
            if (U(fn)) {
                return this.on('change', n)
            }
            return this.on('change:' + n, fn)
        } // "change" (model, options)  — when a model's attributes have changed. // "change:[attribute]" (model, value, options)  — when a specific attribute has been updated.
        cl.oQ = cl.Rq = function (mdCl, fn) {
            return this.on('request', fn)
        }      // on start of md|cl SERVER request function passed(md_or_cl,  xhr, op)
        cl.oS = cl.oSy = function (a, b, c) {
            return this.o('sync', a, b, c)
        } // "sync" (model_or_collection, resp, options) — when a model or collection has been successfully synced with the server.
        cl.oZ = cl.oE = cl.oEr = function (a, b, c) {
            return this.o('error', a, b, c)
        } //"error" (model_or_collection, resp, options) — when model's or collection's request to remote server has failed.
        cl.oIv = function (a, b, c) {
            return this.on('invalid', a, b, c)
        }  //"invalid" (model, error, options) — when a model's validation fails on the client.
        cl.o$ = cl.oAl = function (fn) {
            return this.on('all', fn)
        }   //passes event name as 1st ag
        cl.oA = function (fn) {
            fn = fn || function (m) {
                m.at = m.attributes
                m.s = function (a, b, c) {
                    if (O(a) && O(b)) {
                        if (b.v) {
                            b.validate = b.v ? true : false
                        }
                    }
                    if (S(a) && O(c)) {
                        if (c.v) {
                            c.validate = c.v ? true : false
                        }
                    }
                    return m.set(a, b, c)
                }
                m.g = m.get
                m.j = m.toJSON
                m.o = m.on

                E$(m)
                a.A(m)
            }

            return this.on('add', fn)
        } // "add" (model, collection, options) — when a model is added to a collection.
    }
}