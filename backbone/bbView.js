Bb.V= Bb.View; Bb.V.x=Bb.V.extend; vw = Bb.View.prototype; Bb.sEv(vw)
vw.g=function(m){
 if(this.model){
  return this.model.get(m)
 }

 else if(this.collection && this.collection.get){
  return this.collection.get(m)
 }
}
vw.s=function(a,b){this.model.set(a,b); return this}
vw.E=function(){this.q.E();return this}
vw.e=function(a,b){return (this.collection || this.cl).each(a,b)}
vw.cl= vw.eCl= function(fn){
 //
 var cl=this.collection
 if(U(fn)){return cl}
 if(cl){_.e(cl,fn)}
 return this
}
vw.ECl= function(fn){this.E();return this.eCl(fn)}
vw.eM=function(fn){
 _.e(this.model, fn);
 return this
 function alt(){
  vw.e= function(a, b){
   var cl = this.collection || this.cl;
   cl.each(a, b)
   return this}}
}
vw.h=function(a){
 if(U(a)){return this.$el.h()}
 this.$el.h(a);return this
}//=vw.H
vw.j=function(fn){var vw=this,j
 if(this.collection){
  j= this.collection.toJSON()
  if(F(fn)){_.e(j,fn);return vw}
  return j}
 if(this.model){return this.model.toJSON()}
}
vw.a2 = function (a) {$l('vw.a2')
 if(!this. q){alert('vw.a2 !q'); return this}
 return this.q.a2(a)
}
vw.A = function (ob) {
 var g = G(arguments)
  //if (S(ob)) {ob = this.g(ob)}
  if (ob) {
   this.$el.A(ob) }
 if (U(ob)||g.p) {this.$el.A() }
 return this
}
vw.oC=function(){
 if(!this.model){return false}
 this.model.oC.apply(this.model, arguments)
 return this
}
vw.C$=function(s){
 alert('vw.C$')
 this.$el.C$(s); return this
}
_$$V= function(ob){ob = ob || {}
 ob.id = D(ob.id) ? ob.id : ob.x || ob._ || ob['#']
 ob.tagName = ob.tagName || ob.tn || ob.t
 ob.className = ob.className || ob.k //if (ob.k) {ob.className = ob.k}
 ob.defaults = ob.defaults || ob.df || ob.d
 ob.events = ob.events || ob.E || ob.ev || ob.e // || {$: function () {}}//; EVob = {$: 'click', $$: 'dblclick', v: 'mouseover'}; _.e(ob.events, function (v, k) {if (EVob[k]) {ob.events[EVob[k]] = v}})
 //ob.render = ob.render ||ob.R|| ob.rn || ob.rr || ob
 ob.model = ob.model || ob.md || ob.m
 ob.collection = ob.collection || ob.cl || ob.c
 ob.el = ob.el || ob.q


 if(F(ob.i)){

  ob.initialize =   ob.i

  function _$$V_init(){
   ob._i = ob.initialize || ob.i

   ob.initialize = function (op) {
    // ok so i think i see what is happening here...
    // first of all, i am clearly overwriting 'initialize' here
    // so why bother setting it prior?
    this.q = this.$el


    if (F(ob._i)) {_.b(ob._i, this)(op)}
   }
   if (ob.I) {ob.initialize = ob.I}
  }
 }


 return Bb.V.x( ob )
}
$$V=function(ob){

 var Vw =  _$$V(ob||{})

 return function(ob,q){

  ob=ob||{}
  ob.model=ob.model||ob.md||ob.m
  ob.collection=ob.collection ||ob.cl||ob.c
  var  vw = new Vw(ob);

  vw.md= vw.model;
  vw.cl= vw.collection

  vw.q= vw.$el
  if(q){ alert('see $$V'); vw.a2(q ) }
  return vw
 }
}
$V=function(ob, a,b,c){return $$V(ob,a,b,c)()}
$.uV=$.ulV=function(ob){
 ob=ob||{};ob.t = 'ul'; return $V(ob)
} // make a bbV with t:ul
DEFAULT= function(){$.x('n')
 md = $$M({defaults: {
  n:'j', a:20, o:'p'
 }})()

 $$V({
  t: 'li',
  i: function(){this.$el.fS(149).col('b').C('r').A(); this.r()},
  r: function(){this.$el.A('n: '+this.g('n')  )}
 }) ({m: md})

}
VIEW=function(){$.x('b','viw');

 $V({
  el: $.dA('g', 800, 800,200,200),
  i: function(){this.r()},
  r: function(){
   this.A($.ul().fS(40).A('hello'))}
 })

 $$V({
  i: function(){this.r()},
  r: function(){this.A($.ul(['hello']))}
 })({el:$.d('O', 500,500)})

 function alpha() {
  //  uses jq.fn.V ...very cool
  $.fn.V = function (ob) {
   ob = ob || {};
   ob.el = this
   return $V(ob)
  }
 }


}
PEOPOP=function(){$.x('x', 'bb view people')

 peep = [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]

 vw= $$V({
  t:'ul',
  i:function(){
   this.$el.C('y')
  },

  r:function(){
   var el=this.$el.E()
   _.e(this.collection, function(p){//$('#peep')
    el.A(
        $.li().A(p.n + '(' + p.a + ')')
    )
   })

   return this}

 })({cl: peep})


 $.A(vw.r().el)

 _.in(function(){
  peep.pop(); vw.r()
 })

 function alpha(){



  BBVP0=function(){$.x('x', 'bb view people')
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
   _.in(function(){peep.pop(); vw.r()},'*')
  }

 }
}
CHANGE=function(){$.x('x','bbv'); $('body').fS(30)

 div= $.dA('o', 300,400).XY( 200,200)
 m=  $$M()({rx:'antibiotic'})

 $$V({
  i:function(){var vw=this; vw.r()

   vw.oC(function(){vw.r()})

  },

  r:function(){return this.h(this.g('rx'))}
 })({
  el: div,
  m: m
 })

 ip = $.ip()

 $.bt('change', function(){m.s('rx', ip.v() )})


}
EVENTS= function(){$.x('o','beauty')

 dv=$.d('r', 200).A(
     $.h1('hello'),
     bt=  $.bt('-------')
 )
 
 $V({

  el :dv ,
  events: {
   'click button': function(){bt.C($r()) },
   'dblclick': 'r',
   'mouseover': function(){
    dv.C($r())
   }
  },

  r : function(){$.C($r())}

 })


}


function alpha() {
 SHOWVW=NOROUTER = function () {$.x()
  V1 = $$V({
   i: function () {this.r()},
   r: function () {

    this.$el.h(
        this.model.get('Ms') + " from the View 1")
    return this
   }
  })

  V2 = $$V({

   i: function () {
    this.r();
   },
   r: function () {
    this.$el.ht(this.model.g('Ms') + " from the View 2");
    return this;
   }
  })
  V3 = $$V({
   i: function () {
    this.render();
   },
   r: function () {
    this.$el.html(this.model.get('Message') + " from the View 3");
    return this;
   }
  })

  // Now we need a view that will contain the view
  // and render it whenever the user makes a choice on the screen.
  CtV = $$V({
   myChildV: null,
   r: function () {
    this.h("Greeting Area");
    this.A(
        this.myChildV.$el);
    return this;
   }
  })

  /*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
   We will then position three buttons on the UI which will let the user to change the view.
   Below code shows the application setup that is creating the container view and the functions
   that will get invoked when the user selects the view from screen.
   */

  greet = V1({Ms: "Hello world"})

  cont = CtV({
   el: $("#AppContainer"),
   model: greet
  })

  v1 = null;v2 = null;v3 = null;
  function showView1() {
   if (view1 == null) {
    view1 = new View1({model: greeting});
   }
   container.myChildView = view1;
   container.render();
  }
  function showView2() {
   if (view2 == null) {
    view2 = new View2({model: greeting});
   }

   container.myChildView = view2;
   container.render();
  }
  function showView3() {
   if (view3 == null) {
    view3 = new View3({model: greeting});
   }

   container.myChildView = view3;
   container.render();
  }


 }
 NORTR = function () {
  $.x(null, 'no router')

  v1 = 0
  v2 = 0
  v3 = 0

  dv = $.d('r', 100, 100).id('div')

  V1 = $$V({
   i: function () {
    this.r()
   },

   r: function () {
    //this.$el.ht(this.model.get('Ms') + " from the View 1" )
    return this
   }
  })

  hi = V1({
   Ms: "Hello world"
  })

  $.bt('v1', function () {

   v1 = v1 || V1({m: hi})

   ct.chV = v1
   ct.r()

  })

  V2 = $$V({
   i: function () {
    this.r()
   },
   r: function () {
    this.$el.ht(
        this.g('Ms') + " from the View 2"
    );

    return this
   }
  })


  //V3 = $$V({i: function () {this.r()}, r: function () {return this.h(this.g('Message') + " from " + this.g('view') )}})


  // Now we need a view that will contain the view
  // and render it
  // whenever the user makes a choice on the screen.

  CtV = $$V({
   chV: 0,
   r: function () {
    this.h('Hi Area')
    this.A(this.chV.$el)
    return this
   }
  })


  /*

   ct = CtV({
   el:dv,
   model: hi
   })



   Now lets create a simple div on the UI which will be used as el to this ContainerView.
   We will then position three buttons on the UI which will let the user to change the view.
   Below code shows the application setup that is creating the container view and the functions
   that will get invoked when the user selects the view from screen.


   */


  $.bt('v2', function () {
   if (!v2) {
    v2 = V2({model: hi})
   }
   ct.chV = v2
   ct.r()
  })
  $.bt('v3', function () {
   if (!v3) {
    v3 = V3({model: hi})
   }
   ct.chV = v3
   ct.r()
  })


 }
}