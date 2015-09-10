


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
