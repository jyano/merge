
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


    NORTR=function(){$.x(null, 'no router'); v1= v2 = v3 = 0
        $.d('r',100,100).id('div')


        // ha.. this is just 'no router'
        V1 = $V({i: function() {
            this.r()
        }, r: function(){

            //this.$el.ht(this.model.get('Ms') + " from the View 1" )

            return this
        } })

        V2 = $V({
            i: function(){this.r()},
            r: function(){
                this.$el.ht(this.model.g('Ms') + " from the View 2");
                return this}})
        V3 = $V({
            i: function(){  this.render()  },
            r: function(){
                this.$el.html(this.model.get('Message') + " from the View 3" )
                return this
            }
        })


        // Now we need a view that will contain the view
        // and render it
        // whenever the user makes a choice on the screen.

        CtV = $V({ chV:0,
            render: function(){
                this.$el.ht('Hi Area').A(
                    this.chV.$el
                )
                return this
            }})

        hi = V1({Ms: "Hello world"})

        ct = CtV({
            el: $("#div"),
            model: hi
        })


        /*
         Now lets create a simple div on the UI which will be used as el to this ContainerView.
         We will then position three buttons on the UI which will let the user to change the view.
         Below code shows the application setup that is creating the container view and the functions
         that will get invoked when the user selects the view from screen.
         */


        $.bt('v1', function (){
                if (!v1) {v1 = V1({model:hi})}
                ct.chV = v1
                ct.render()
            }
        )

        $.bt('v2', function  (){
            if (!v2) {v2 =   V2({ model: hi })}
            ct.chV= v2
            ct.render()
        })


        $.bt('v3',  function (){
            if(!v3) { v3 =  V3({ model: hi }) }
            ct.chV = v3
            ct.render()
        })

    }


    ITEMS=function(){$.x().h3('jason')
        Ap={M:{},V:{},C:{}}
        Ap.M.Item = $M({})

        $R({

                r:{
                    '':'welcome',

                    itemlist:'showItemList',
                    'j':'j'

                },

                welcome:function(){
                    $.bd().E().A($.h1('welcome'))},
                j:function(){},
                showItemList:function(){
                    $l('showItemList')
                    $.bd().A($.h1('show item list'))
                }},

            '+')


        i1=Ap.M.Item({n:'jason', g:'mason' })
        i1.oR('j',function(){$.bd().E().A($.h1('j'))})
        //bb.history.start({pushState: true})

        $.bt('add', function(){
            r.n('/itemlist')

        })

    }


    ROUTE=function(){z()
        $R({r:{"*x":"d"}  },'+')
        r.oR('d',function(a){$l('d:'+ a)})
        r.oR('e',function(a){$l('e:'+a)})
    }




    ROUTEPAMS=function(){$.x().A('hahahahhahaha')
        RTob=  {
            '':'home',
            'view':'v',
            'new': 'nn',
            ':id': 'en',
            'posts/:id':'gPo',
            '*acts':'dfR',
            'download/*path': 'dlF',
            ':route/:action': 'ldV'
        }

        $R({  rt:  RTob,
            home:function(){$l('home')},
            v:function(){$l('image')} ,
            nn:function(){},
            en: function(id){$l('id:'+id)}

        },'+')

        r.oR('dfR',$l)
        r.oR('gPo',function(id){$l('gPo# '+id)})
        r.oR('gPo', function(){$l(3)}) //both routes fire!
        r.oR('dlF', $l)
        r.oR('ldV', function(rt,ac){$l(rt+'_'+ac)})

    }


    BACKDEMO=function(){$.x().d('yoo hoo').id('cont')

        Temp=function(i,h){var s=''
            return _.tp($('#'+i).html(), h||{})
            if(A(h)){_.e(h, function(h){s += h.oh()})}
            s="<script type='text/template'>"+ s +"</script>"
            return $(s).id(i).A()}

        $R({
            rt:{'':'f', 'f':'f', 's':'s'},
            f:function(){$l('fir')}, s:function(){$l('sec')},
            task:function(){t=new Task(); $l('t = new Task') }
        }, '+')




        Temp('task', [
            $.lb('Task: '),
            $.ip().id('task_desc'),
            $.bt('add task').id('btn') ])

        Tsk=$V({el: $('#cont'),
            i: function(){this.r()},
            r: function(){this.$el.ht( Temp('task') )},
            e: {'click button': 'add'},
            add: function(){alert( $('#task_desc').v() + ' task added')}})
    }


    RTR=function() {
        $.x('b')

        RTob = {
            '': 'index',
            'wap/rtr/images/:id': 'image',

            view: 'viewImage'

        }

        $R({

            r: RTob,
            h: function () {$l('you are viewing home page')},
            x: function () {$l('you are viewing index')},
            image: function (id) {
                $l('image===')
                _.t(10, function () {
                    $l($r() + '-id: ' + id)
                });
                $.bd().C('z')
            },
            viewImage: function () {
                $l('you are viewing an image')
            }

        }, '+')

        $.in(function () {$l('......')

            r.n('/wap/rtr/images/32903290239032902390')


        }, '*')
        //looks for clicks on any anchor els where
        //href starts with '/' (no domain) and stop
        //bw from nv to it


        $.bd().on('click', 'a[href^="/"]', function (ev) {
            $l('wow')
            ev.preventDefault()
            r.n($(this).attr('href', {trigger: true}))
        })

    }



    ROUTENAV=function(){$.x('b')
        $R({
            r:{
                'po/:id':'gp',
                '*a':'dr'
            },
            dr:function(a){$l(a)},
            gp:function(id){
                $.bd().C($r())
                $l('Get post '+id)
            }
        },'+')
        $.bt('hi', function(){rt.n('po/2')})


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




    //Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
    //PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
    //Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})

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




    //Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
    //PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
    //Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})

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

////
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
DIRTPAGE=function(){$.x()

    var newMsBox, newTopic, newMs,searchBox

    MsM= bb.M.e({  })
    MsC= bb.C.e({   m:'MsM'  })
    MsView= bb.V.e({  })
    MssView= bb.V.e({ })

    $.h1().A(
        $.a(  'Dirtpage', '/wap/dirtpage/' )
    ).A()
    $.dI('content')
    if(wappyPam) {

        newMsBox= $.d().WH('auto').A(
            $.h1('new ms'),
            $.ip().K('form-control').id('newMs'),
            $.bt('ok', function(){var newMs = $('#newMs').v()
                $.P('messages' , {tpc:wappyPam, ms:newMs
                }, function(){ loadResults() })}))
        $('#cont').A($.h1('the '+ wappyPam + ' page'),
            newMsBox, $.dI('res'))
        function loadRes(){$.G('topics/' + wappyPam, function(msgs){
            $('#results').ht($.h5('len: '+msgs.length)  )
            _.e(msgs, function(ms){$('#res').A($.h6( ms.ms ))
            })})}
        loadRes()}
    else {
        newMsBox=$.d().WH('auto').A(
            $.h1('new message'),
            $.ip().K('form-control').id('newTopic'),
            $.ip().K('form-control').id('newMs'),
            $.bt('ok', function(){
                newTopic = $('#newTopic').v()
                newMs = $('#newMs').v()
                $.P('msgs', {topic:newTopic, message:newMs}, function(){})})
        )
        searchBox= $.d().WH('auto').A(
            $.h1('search'),
            $.ip().K('form-control').id('searchInput'),
            $.bt('ok', function(){window.location=   '/wap/dirtpage/'+ $('#searchInput').v()
                searchInput = $('#searchInput').v()
                $.G('topics/' + searchInput, function(msgs){
                    $('#res').ht($.h5('len: '+msgs.length)  )
                    _.e(msgs, function(ms){$('#res').A( $.h6( ms.ms ) )})
                })
            })
        )
        $.dI('res')
        $('#cont').A(newMsBox, searchBox)
        $.eG('msgs',  function(ms){
            $('#res').A($.h2().A(
                    $.a('topic: '+ms.topic,'/wap/dirtpage/'+ms.topic)),
                $.h3( 'ms: '+ms.ms)
            )
        })
    }
}