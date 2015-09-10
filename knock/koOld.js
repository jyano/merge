
NO_RTR=function(){$.x(null, 'no router'); v1= v2 = v3 = 0
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
oldRt=function(){
    $R1=function(o){var r; o=O(o)?o:{}
        if(o.r){o.routes=o.r}
        r = bb.Router.extend(o)
        r.o=r.on
        return function(){var a=new r

            return a
        }
    }
//bb.r=function(ob){var Rt =  bb.Router.extend(ob); return function(a,b,c,d){ return new Rt(a,b,c,d)    }}
//bb.r=   bb.rt= bb.R= $.ext(bb.Router)
    bb.R1=function(ob){
        bb.rt=function(klas){ var rt = new klas
            rt.n= rt.nv=rt.ng=function(url){var rt=this,
                g=G(arguments)
                if(g.n){rt.navigate(url)}
                else {rt.navigate(url,  {trigger:true})}
                return rt}
            return rt
        }


        bb.Rt=function(ob){var Rt
            if(ob.i){ob.initialize = ob.i}
            if(ob.$){
                ob.initialize = function(){
                    bb.history.start({pushState:true})
                    if( F(ob.$ )){ob.$()}}}
            if(ob.rt){ob.routes = ob.rt}
            ob.routes = ob.routes || {}
            ob.routes[''] = ob.routes[''] ||'index'
            if(ob.x){ob.index = ob.x}
            if(ob.h){ob.home = ob.h}
            Rt= bb.Router.extend(ob)
            return Rt
        }

        var rtr=  this.Rt(ob)
        rt = bb.rt(rtr)
        return  r = rt
    }





//H$=function(){bb.history.start()}


};oldRt()

old=function(){
    oldRt=function(){
        $R1=function(o){var r; o=O(o)?o:{}
            if(o.r){o.routes=o.r}
            r = bb.Router.extend(o)
            r.o=r.on
            return function(){var a=new r

                return a
            }
        }
//bb.r=function(ob){var Rt =  bb.Router.extend(ob); return function(a,b,c,d){ return new Rt(a,b,c,d)    }}
//bb.r=   bb.rt= bb.R= $.ext(bb.Router)
        bb.R1=function(ob){
            bb.rt=function(klas){ var rt = new klas
                rt.n= rt.nv=rt.ng=function(url){var rt=this,
                    g=G(arguments)
                    if(g.n){rt.navigate(url)}
                    else {rt.navigate(url,  {trigger:true})}
                    return rt}
                return rt
            }


            bb.Rt=function(ob){var Rt
                if(ob.i){ob.initialize = ob.i}
                if(ob.$){
                    ob.initialize = function(){
                        bb.history.start({pushState:true})
                        if( F(ob.$ )){ob.$()}}}
                if(ob.rt){ob.routes = ob.rt}
                ob.routes = ob.routes || {}
                ob.routes[''] = ob.routes[''] ||'index'
                if(ob.x){ob.index = ob.x}
                if(ob.h){ob.home = ob.h}
                Rt= bb.Router.extend(ob)
                return Rt
            }

            var rtr=  this.Rt(ob)
            rt = bb.rt(rtr)
            return  r = rt
        }





//H$=function(){bb.history.start()}


    };oldRt()
}


old=function(){/*
 VWob={  i:'initialize',
 m:'model',  c:'collection',
 e:'el',  n:'id', x:'id',  k:'className',
 tn:'tagName',  t:'tagName',
 a:'attributes',  ev:'event'  }


 Vw = $V({
 renderCollection: function(op) {op = op || {}
 op.target = op.target || this.$el;
 op.cl = op.cl ||    op.collection ||  this.collection;
 //- reset views
 if (!op.add) {this.disposeViews()}
 else {this._subviews = []}
 this._renderOptions = op
 //- if there is a collection and a view then render it
 if (op.cl && this.view) {op.cl.each(this._renderView, this)}
 return this
 }
 })

 */
    //Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})
//render does nothing unless u override it
//cannot access model from init
    V$=function(){var g=G(arguments), o,v, a
        a=O(g.f)? g.f:{}
        o={ob: g.f}
        o.ob= o.b||{}
        if(a.I){a.initialize = a.I}
        if(a.R){a.render = a.R}
        if(a.r){a.render = a.r}
        if(a.rr){a.render = a.rr}
        if(a.E){a.events = a.E}
        if(a.T){a.template = a.T}
        if(a.t){a.tagName = a.t}
        if(a.k){a.className = a.k}
        if(a.i){a.id = a.i}
        Vw = bb.V.e(ob)
        if(a.m){a.model= a.m}
        if(a.md){a.model= a.md}
        if(a.cl){a.collection= a.cl}
        vw = new Vw(a)
        return vw
    }
}