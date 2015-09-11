

MAR=function(){z()
    // http://davidsulc.com/blog/2012/04/15/a-simple-backbone-marionette-tutorial/

    d=_d().w(500).h(500).c('b').id('content').a()



    MyApp=new Bb.Ma.Application()


    MyApp.addRegions({
        mainRegion: "#content"})


    AngryCat=bbM({})


    AngryCats=bbC({  model:AngryCat  })


    //Temp(  'angry_cats-template', [thead()( tr().k('header')( th()('Name') ) ),  tbody()]  ).a()



    scrp('angry_cat-template')(

        td()('%= name')

    ).a()



    catV=Bb.Ma.IV.extend({
        template: "#angry_cat-template",
        tagName: 'tr',
        className: 'angry_cat'})



    catsV=Bb.Ma.CpV.extend({

        tagName: "table",

        id: "angry_cats",

        className: "table-striped table-bordered",

        template: "#angry_cats-template",

        itemView: catV,

        appendHtml: function(colV, itemV){
            colV.$("tbody").append(itemV.el)}})


    MyApp.addInitializer(

        function(ops){
            MyApp.mainRegion.show(new catsV(
                {collection:ops.cats}))}

    )



    MyApp.start({cats:new AngryCats([
        {name:'Wet Cat' },
        {name:'Bitey Cat'},
        {name:'Surprised Cat'}])})






}
MARTREE=function(){z()

    scrp("node-template",
        "<li><%= nodeName %></li>").a()

    di("tree").a()

    // ul {list-style: disc; padding-left: 10px; margin-left: 10px; }

    TreeView=Backbone.Marionette.CompositeView.extend({


        template: "#node-template",


        tagName: "ul",


        initialize: function(){
            // grab the child collection from the parent model
            // so that we can render the collection as children
            // of this parent node
            this.collection=this.model.nodes},



        appendHtml: function(collectionView, itemView){
            // ensure we nest the child list inside of
            // the current list item
            collectionView.$("li:first").append(itemView.el)}
    })

// The tree's root: a simple collection view that renders
// a recursive tree structure for each item in the collection


    TreeRoot = Backbone.Marionette.CollectionView.extend(

        {itemView: TreeView}

    )



}
BOOKSTORE=function(){z()



}
MAR=function(){z()
    // http://davidsulc.com/blog/2012/04/15/a-simple-backbone-marionette-tutorial/

    d=_d().w(500).h(500).c('b').id('content').a()



    MyApp=new Bb.Ma.Application()


    MyApp.addRegions({
        mainRegion: "#content"})


    AngryCat=bbM({})


    AngryCats=bbC({  model:AngryCat  })


    //Temp(  'angry_cats-template', [thead()( tr().k('header')( th()('Name') ) ),  tbody()]  ).a()



    scrp('angry_cat-template')(

        td()('%= name')

    ).a()



    catV=Bb.Ma.IV.extend({
        template: "#angry_cat-template",
        tagName: 'tr',
        className: 'angry_cat'})



    catsV=Bb.Ma.CpV.extend({

        tagName: "table",

        id: "angry_cats",

        className: "table-striped table-bordered",

        template: "#angry_cats-template",

        itemView: catV,

        appendHtml: function(colV, itemV){
            colV.$("tbody").append(itemV.el)}})


    MyApp.addInitializer(

        function(ops){
            MyApp.mainRegion.show(new catsV(
                {collection:ops.cats}))}

    )



    MyApp.start({cats:new AngryCats([
        {name:'Wet Cat' },
        {name:'Bitey Cat'},
        {name:'Surprised Cat'}])})






}
MARTREE=function(){z()

    scrp("node-template",
        "<li><%= nodeName %></li>").a()

    di("tree").a()

    // ul {list-style: disc; padding-left: 10px; margin-left: 10px; }

    TreeView=Backbone.Marionette.CompositeView.extend({


        template: "#node-template",


        tagName: "ul",


        initialize: function(){
            // grab the child collection from the parent model
            // so that we can render the collection as children
            // of this parent node
            this.collection=this.model.nodes},



        appendHtml: function(collectionView, itemView){
            // ensure we nest the child list inside of
            // the current list item
            collectionView.$("li:first").append(itemView.el)}
    })

// The tree's root: a simple collection view that renders
// a recursive tree structure for each item in the collection


    TreeRoot = Backbone.Marionette.CollectionView.extend(

        {itemView: TreeView}

    )



}
BOOKSTORE=function(){z()



}
APPLIC=function(){$.x()
}
APRTR=function(){$.x()/*   Ma.AppRouter

     Reduce the boilerplate code of
        handling route events
            and then calling a single method on another object.

     Have your routers configured to call the method
     on your object, directly.


     Configure Routes -
      Configure Routes In Constructor
      - Add Routes At Runtime
      - Specify A Controller - onRoute - Configure Routes

     Configure an AppRouter with appRoutes.
     The route definition is passed on to Backbone's standard routing handlers.
      This means that you define routes like you normally would.
       However, instead of providing a callback method that
             exists on the router,
       you provide a callback method that
             exists on the controller,
        which you specify for the router instance
        (see below.)
*/

    MyRouter = Ma.aR.x({

        appRoutes: {"some/route": "someMethod"},
        // "someMethod" must exist at controller.someMethod


  // standard routes can be mixed with appRoutes/Controllers above
    routes : {"some/otherRoute" : "someOtherMethod"},
        someOtherMethod : function(){   }   // do something here.


})

/*
You can also add standard routes to an AppRouter with methods on the router.

    Configure Routes In Constructor

Routes can be defined through the constructor function options, as well.
*/
    MyRouter = new Ma.aR({
        controller: myController,
        appRoutes: {"foo": "doFoo", "bar/:id": "doBar"}
})


/*

This allows you to create router instances without having to .extend
from the AppRouter. You can just create the instance with the routes defined
in the constructor, as shown.

    Add Routes At Runtime

In addition to setting the appRoutes for an AppRouter, you can add app routes
at runtime, to an instance of a router. This is done with the appRoute()
method call. It works the same as the built-in router.route() call from
Backbone's Router, but has all the same semantics and behavior of the appRoutes
configuration.

  */    MyRouter = Ma.apRt.x({})


 router = new MyRouter();
router.appRoute("/foo", "fooThat");

//Also you can specify a controller with the multiple routes at runtime with method. processAppRoutes. However, In this case the current controller of AppRouter will not change.


     MyRouter = Ma.apRt.x({})


 router = new MyRouter()

router.processAppRoutes(myController, { "foo": "doFoo",   "bar/:id": "doBar" })

/*


App routers can only use one controller object.
You can either specify this:  */
    // (1) directly in the router definition
    Ma.apRt.x({
        controller: co={fn:function(){}}
    })
//... or (2) in a pam to the constructor
new MyRouter({controller: co = {fn: function(){}}})



/*
The object that is used as the controller has no requirements, other than it will
contain the methods that you specified in the appRoutes.

    It is recommended that you divide your controller objects into smaller pieces of related functionality
and have multiple routers / controllers,
 instead of just one giant router and controller.

    onRoute

If it exists, AppRouters will call the onRoute method whenever a user navigates within your app. The
callback receives three arguments: the name, path, and arguments of the route.

     */}
BHVR=function(){$.x()

    /*  BEHAVIOR: Motivation|Using Behaviors|API|Event proxy|Triggers|Model Events|Collection Events|Grouped Behaviors|$|$el and el|Defaults|View|The Motivation

     A Behavior is an isolated set of DOM / user interactions
     that can be mixed into any View
     or another Behavior.

     Behaviors allow you to blackbox View specific interactions
      into portable logical chunks,
      keeping your Views simple and your code DRY.


     As you build more and more complex Views,
     you will find that your View becomes
     less about displaying model data,
      and more about interactions.

     These interactions tend to be chunks of logic that you want to use in multiple views.

     Using:
     Here is an example of a simple ItemView.
     Let's take a stab at simplifying it,
     and abstracting Behaviors from it.

*/
     MyView = bb.Ma.IV.x({
         ui: {"destroy": ".destroy-btn"},
         events: {"click @ui.destroy": "warnBeforeDestroy"},
         warnBeforeDestroy: function() {alert("you are destroying all your data is now gone!"); this.destroy() },
         onShow: function(){this.ui.destroy.tooltip({text: "what a nice mouse you have"  })}
     })

    /*
     Interaction points,
     such as tooltips and warning messages,
      are generic concepts.

      There is no need to recode them within your Views.
      They are prime for abstraction into a higher level non-coupled concept,
      which is exactly what Behaviors provide you with.

     Here is the syntax for declaring which behaviors get used within a View.

     The keys in the hash are passed to getBehaviorClass which looks up the correct Behavior class.
     The options for each Behavior are also passed through to the Behavior during initialization. The options are then stored within each Behavior under options.
*/

     MyView = Ma.IV.x({
     ui: {"destroy": ".destroy-btn"},
     behaviors: {DestroyWarn: {message: "you are destroying all your data is now gone!"},
     ToolTip: {text: "what a nice mouse you have"}}})

 //    Now let's create the DestroyWarn Behavior.

     DestroyWarn = Ma.Behavior.extend({
     // you can set default options
     // just like you can in your Backbone Models
     // they will be overriden if you pass in an option with the same key
     defaults: {"message": "you are destroying!"},

     // behaviors have events that are bound to the views DOM
     events: {"click @ui.destroy": "warnBeforeDestroy"},

     warnBeforeDestroy: function() {alert(this.options.message);
     // every Behavior has a hook into the
     // view that it is attached to
     this.view.destroy()}})

   //  And onto the Tooltip behavior.



      ToolTip = Ma.Behavior.extend({ui: {tooltip: '.tooltip'},
          onShow: function() {this.ui.tooltip.tooltip({  text: this.options.text }) } })

   //  Finally, the user must define a location for where their Behaviors are stored.
   //  A simple example of this would look like this:

     Ma.Behaviors.behaviorsLookup = function() {
     return window.Behaviors;
     }
   //  In this example you would then store your Behaviors like this:

    Behaviors.ToolTip = ToolTip;

   Behaviors.DestroyWarn = DestroyWarn;

    // Note than in addition to extending a View with Behavior, a Behavior can itself use other Behaviors. The syntax is identical to that used for a View:

       Modal = Ma.Bh.extend({
     behaviors: {DestroyWarn: {message: "Whoa! You sure about this?"}}})

    // Nested Behaviors act as if they were direct
    // Behaviors of the parent Behavior's view instance.



        /*  API

     The Event Proxy

     Behaviors are powered by an event proxy.
      What this means is that any events that are triggered by the view's triggerMethod function
      are passed to each Behavior on the view as well.

     As a real world example, whenever in your View you would define a click event
     in the events hash, you can define the same event listeners
     and callbacks in the behavior's events hash.
     The same follows for modelEvents and collectionEvents.
     Think of your behavior as a receiver for all of the events on your view instance.

     This concept also allows for a nice decoupled method to communicate to behaviors
      from your view instance.
     You can just call from within your view this.triggerMethod("SomeEvent",
      {some: "data"}). then your behavior class would look like this:
*/

     Ma.Bh.x({
     events: {'click .foo' : 'onClick'},
     onClick: function(data) {$l("wow such data", data)}})
    // modelEvents will respond to the view's model events.

    Ma.Bh.x({
     modelEvents: {
     "change:doge": "onDogeChange"
     },

     onDogeChange: function() {
     // buy more doge...
     }})

    //Collection Events

    // collectionEvents will respond to the view's collection events.

    Ma.Bh.x({collectionEvents: {add: "onCollectionAdd"}, onCollectionAdd: function() {}})


    // In addition to providing the same event hashes as Views, Behaviors allow you to use the same life cycle functions that you find on Views.// That means methods like initialize, onRender, onBeforeShow, and onBeforeDestroy are all valid as long as the View that implements the Behavior fires the relevant events.

    Ma.Bh.x({onRender: function() {this.$('.foo').bar() }})   //apply a jQuery plugin to every .foo item within the view




     Ma.Bh.x({triggers: {'click .label': 'click:label'}})// Any triggers you define on the Behavior will be triggered in response to the appropriate event on the view.



    Ma.Bh.x({behaviors: {  SomeBehavior: {}}}) //  Then behaviors key allows a behavior to group multiple behaviors together.




    Ma.Bh.x({onShow: function() {this.$('.zerg')}     })//$ is a direct proxy of the view's $ lookup method.

    // $el and el

   //  el is a direct proxy of the view's el.
 //    Similarly, $el is a direct proxy of the view's el cached as a jQuery selector.

    Ma.Bh.x({  onShow: function() {this.$el.fadeOut('slow')}  })



    // defaults
    // defaults can be a hash or function
    // to define the default options for your Behavior.
   //  The default options will be overridden depending on what you set as the options per Behavior (this works just like a Backbone.Model).

    Ma.Bh.x({   defaults: function() {return {'deepSpace': 9}}    })


    Ma.Bh.x({     defaults: {'dominion': 'invasion', 'doge': 'amaze' }   })


    // view

//     The view is a reference to the view instance that the Behavior is on.


    Ma.Bh.x({handleDestroyClick: function() {this.view.destroy()}})

   /*  ui

     Behaviors can have their own ui hash, which will be mixed into the ui hash of its associated view instance.
     ui elements defined on either the Behavior or the View will be made available within events, and triggers. They
     also are attached directly to the Behavior and can be accessed within Behavior methods as this.ui.
*/

    Ma.Bh.x({ui: {'foo' : 'li.foo'}, doStuff: function() {this.ui.foo.trigger('something')}   })

}
BHVRS=function(){$.x()
}
CBS=function(){$.x()
}
CLV=function(){$.x()
}
CMPV=function(){$.x()

    /*
     A CompositeView extends from CollectionView to be used as a
     composite view for scenarios where it should represent both a
     branch and leaf in a tree structure, or for scenarios where a
     collection needs to be rendered within a wrapper template. By default the
     CompositeView will maintain a sorted collection's order
     in the DOM. This behavior can be disabled by specifying {sort: false} on initialize.

     Please see
     the Ma.CollectionView documentation
     for more information on available features and functionality.

     Additionally, interactions with Ma.Region
     will provide features such as onShow callbacks, etc. Please see
     the Region documentation for more information.

     Example Usage: Tree View

     For example, if you're rendering a tree-view control, you may
     want to render a collection view with a model and template so
     that it will show a parent child with children in the tree.

     You can specify a modelView to use for the model. If you don't
     specify one, it will default to the Ma.ItemView.

     var CompositeView = Backbone.Ma.CompositeView.extend({
     template: "#leaf-branch-template"
     });

     new CompositeView({
     model: someModel,
     collection: someCollection
     });
     For more examples, see my blog post on
     using the composite view.

     Documentation Index

     Composite Model template
     CompositeView's childView
     CompositeView's childViewContainer
     CompositeView's attachHtml
     Recursive By Default
     Model And Collection Rendering
     Events And Callbacks
     Organizing UI elements
     modelEvents and collectionEvents
     Composite Model template

     When a CompositeView is rendered, the model will be rendered
     with the template that the view is configured with. You can
     override the template by passing it in as a constructor option:

     new MyComp({
     template: "#some-template"
     });
     The collection option is not passed to the template context by
     default. If your template needs access to the collection, you'll
     need to pass it via templateHelpers:

     new MyComp({
     template: "#some-template",
     templateHelpers: function() {
     return { items: this.collection.toJSON() };
     }
     })
     CompositeView's childView

     Each childView will be rendered using the childView's template. The CompositeView's
     template is rendered and the childView's templates are added to this.
*/

    ChildView = Ma.IV.x({})

    CompView = Ma.CmV.x({

        childView: ChildView

    })

    /*
     CompositeView's childViewContainer

     By default the composite view uses the same attachHtml method that the
     collection view provides. This means the view will call jQuery's .append
     to move the HTML contents from the child view instance in to the collection
     view's el.

     This is typically not very useful as a composite view will usually render
     a container DOM element in which the child views should be placed.

     For example, if you are building a table view, and want to append each
     child from the collection in to the <tbody> of the table, you might
     do this with a template:

     <script id="row-template" type="text/html">
     <td><%= someData %></td>
     <td><%= moreData %></td>
     <td><%= stuff %></td>
     </script>

     <script id="table-template" type="text/html">
     <table>
     <thead>
     <tr>
     <th>Some Column</th>
     <th>Another Column</th>
     <th>Still More</th>
     </tr>
     </thead>

     <!-- want to insert collection children, here -->
     <tbody></tbody>

     <tfoot>
     <tr>
     <td colspan="3">some footer information</td>
     </tr>
     </tfoot>
     </table>
     </script>
     To get your childView instances to render within the <tbody> of this
     table structure, specify an childViewContainer in your composite view,
     like this:

     var RowView = Backbone.Ma.ItemView.extend({
     tagName: "tr",
     template: "#row-template"
     });

     var TableView = Backbone.Ma.CompositeView.extend({
     childView: RowView,

     // specify a jQuery selector to put the `childView` instances into
     childViewContainer: "tbody",

     template: "#table-template"
     });
     This will put all of the childView instances into the <tbody> tag of
     the composite view's rendered template, correctly producing the table
     structure.

     Alternatively, you can specify a function as the childViewContainer. This
     function needs to return a jQuery selector string, or a jQuery selector
     object.

     var TableView = Backbone.Ma.CompositeView.extend({
     // ...

     childViewContainer: function(){
     return "#my-tbody"
     }
     });
     Using a function allows for logic to be used for the selector. However,
     only one value can be returned. Upon returning the first value, it will
     be cached and that value will be used for the remainder of that view
     instance' lifecycle.

     Alternatively, the childViewContainer can be supplied in the constructor
     function options:

     var myComp = new Ma.CompositeView({
     // ...,

     childViewContainer: "#my-tbody"
     });
     CompositeView's attachHtml

     Sometimes the childViewContainer configuration is insufficient for
     specifying where the childView instance should be placed. If this is the
     case, you can override the attachHtml method with your own implementation.

     For more information on this method, see the CollectionView's documentation.

     CompositeView's childView container selection

     The getChildViewContainer method is passed a second childView parameter which, when overridden, allows for a finer tuned container selection by being able to access the childView which is about to be appended to the containerView returned by getChildViewContainer.

     Recursive By Default

     The default rendering mode for a CompositeView assumes a
     hierarchical, recursive structure. If you configure a composite
     view without specifying an childView, you'll get the same
     composite view class rendered for each child in the collection.

     Model And Collection Rendering

     The model and collection for the composite view will re-render
     themselves under the following conditions:

     When the collection's "reset" event is fired, it will only re-render the collection within the composite, and not the wrapper template
     When the collection has a model added to it (the "add" event is fired), it will render that one child into the list
     When the collection has a model removed (the "remove" event is fired), it will remove that one child from the rendered list
     As with item view instances, the composite view instance is passed as the
     third argument to the Renderer object's render method, which is
     useful in custom Renderer implementations.

     Events And Callbacks

     During the course of rendering a composite, several events will
     be triggered. These events are triggered with the Ma.triggerMethod
     function, which calls a corresponding "on{EventName}" method on the view.

     "before:render:template" / onBeforeRenderTemplate - before the model has been rendered
     "render:template" / onRenderTemplate - after the model has been rendered
     "before:render:collection" / onBeforeRenderCollection - before the collection of models is rendered
     "render:collection" / onRenderCollection - after the collection of models has been rendered
     "before:render" / onBeforeRender - before anything has been rendered
     "render" / onRender - after everything has been rendered
     Additionally, after the composite view has been rendered, an
     onRender method will be called. You can implement this in
     your view to provide custom code for dealing with the view's
     el after it has been rendered:

     Backbone.Ma.CompositeView.extend({
     onRender: function(){
     // do stuff here
     }
     });
     Organizing UI elements

     Similar to ItemView, you can organize the UI elements inside the
     CompositeView by specifying them in the UI hash. It should be
     noted that the elements that can be accessed via this hash are
     the elements that are directly rendered by the composite view
     template, not those belonging to the collection.

     The UI elements will be accessible as soon as the composite view
     template is rendered (and before the collection is rendered),
     which means you can even access them in the onBeforeRender method.

     modelEvents and collectionEvents

     CompositeViews can bind directly to model events and collection events
     in a declarative manner:

     Ma.CompositeView.extend({
     modelEvents: {
     "change": "modelChanged"
     },

     collectionEvents: {
     "add": "modelAdded"
     }
     });


     */
}
CFG=function(){$.x()
}
MACO=function(){$.x()




   //  !!!!!! deprecated   Ma.Controller
   // !!!!!!!! Instead,  specify your cbs on a pob

  //co is an ob  used in the Ma rtr,  where you store  your Router's cbs
   // A Ma.Controller is intended to solely be used within the Router.


    // Create   Controller, giving it  cbs for rtr, pass it to rtr

    myRouter = new Ma.AR({
     controller: new (
         Co= Ma.Co.x({
             home: function() {},
             prof: function() {}
         }))
        ,
     appRoutes: {
         home: "home",
         prof: "prof"  }
  })


     /*
     mergeOptions

     Merge keys from the options object directly onto the instance. This is the preferred way to access options
     passed into the Controller.

     More information at mergeOptions

     getOption

     Retrieve an object's attribute either directly from the object, or from the object's this.options, with this.options taking precedence.

     More information getOption

     Destroying A Controller

     Each Controller instance has a built in destroy method that handles
     unbinding all of the events that are directly attached to the controller
     instance, as well as those that are bound using the EventBinder from
     the controller.

     Invoking the destroy method will trigger the "before:destroy" and "destroy" events and the
     corresponding onBeforeDestory and onDestroy method calls. These calls will be passed any arguments destroy
     was invoked with.

     // define a controller with an onDestroy method
   */

   Co = Ma.Co.x({

     onBeforeDestroy: function( g1,  g2){  },
     onDestroy: function( g1,  g2){ }  })
      co = new Co()
    co.on("before:destroy", function(g1, g2){  })
    co.on("destroy", function(g1, g2){ })
    co.listenTo(something, "bar", function(){})

     // destroy  co,  unbind all  ev  handlers, trg  "destroy" ev  - call the onDestroy method

    co.destroy(g1, g2)



    /* Prior Usage

     Before Ma 2.1, the Controller had another use, which was a general-purpose, white-label object. This was confusing given its other use within the Router, and its name, which carries so much meaning in the context of MVC frameworks.

     As of v2.1, a new Class is available for your use: Ma.Object. We recommend using Ma.Object instead of Ma.Controller in all situations outside of the Router.
     */
}
FUNCS=function(){$.x()
    
    /*
     Ma.extend

     Backbone's extend function is a useful utility to have,
      and is used in
     various places in Ma.

      To make the use of this met more consistent,
    bb's extend has been aliased to Ma.extend.
     This allows
     you to get the extend functionality for your object without having to
     decide if you want to use Backbone.View or Backbone.Model or another
     Backbone object to grab the method from.

      Foo = function(){}

     use Ma.extend to make Foo extendable, just like other
     bb and Ma objects
     Foo.extend = Ma.extend;

      Now Foo can be extended to create a new class, w mets

     Bar = Foo.x({  met: function(){   }   })


    b = new Bar()

     Ma.isNodeAttached:   is passed-in node is a child  of the doc?

    div = cE('div')
     Ma.isNodeAttached(div)    // => false

     $.A(div)
     Ma.isNodeAttached(div);  // => true


     Ma.mergeOptions: plucks certain ops ,  attaches  to an inst
     Most Ma Classes, such as the Vws, come with this met

    Vw = IV.x({  myViewOptions: ['c', 'size', 'country'],

     i: function(ops) {    this.mergeOptions(options, this.VwOptions) },

     onRender: function() {  merged ops will be attached directly to the prototype
     this.$el.addClass(this.color)  }  })


     Ma.getOption:  Retrieves an ob's attr  either directly from   ob , or from
     the ob's this.options (takes precedence)

      M = bb.M.x({  foo: "bar",
     i: function(attributes, options){  this.options = options;

    $l(f= Ma.getOption(this, "foo") )    } })

     new M(); // => "bar"        new M({}, { foo: "quux" }); // => "quux"

   useful when building an ob  with cf set
     in either the ob df or the ob's constructor ops.


     Falsey values
     The getOption fn will return any falsey val  from the ops
     other than U.
     If an ob's ops has an U value,
     it will try read  val  from the ob  directly.


  M = bb.M.x({  foo: "bar",  i: function(){

   $l(f = Ma.getOption(this, "foo") )  }  })

     new M(); // => "bar"  new M({}, { foo: f }); // => "bar"
 "bar" is returned both times b/c the 2nd  ex has U(f)


     Ma.proxyGetOption: proxies Ma.getOption  so that it can be easily added to an instance.

     Say you've written your own   Pagination class
      and you always pass options to it.
     With proxyGetOption, you  give this kl the getOption fn

     _.x(Pagination.prototype, {

     getFoo: function(){  return this.getOption("foo") },
     getOption: Ma.proxyGetOption
     })


     Ma.triggerMethod : Trigger an ev  and a corresp  met on  tg ob .

     When   ev  is trgd, first letter of ea sc of   ev  name is capitalized,
     and the word "on" is tagged on to the front   of it

     triggerMethod("render") fires   "onRender" fn
     triggerMethod("before:destroy") fires   "onBeforeDestroy" fn
     All args that are passed to the triggerMethod call
      are passed along to both the ev  and the met, w  the exception
      of the ev name not being passed to the corresp  met

     triggerMethod("foo", bar) will call onFoo: function(bar){ })

      triggerMethod can be called on obs that do not have
   bb.Evs mixed in
    These obs !have trigger met and wont call .trigger()
     The on{Name}  cb mets will still be called, though.



     Ma.triggerMethodOn: Invoke triggerMethod on a spec  ctx

      useful when !clear that ob  has triggerMethod defined.
     In  case of vws,   Ma.Vw defines triggerMethod,  but not bb.Vw

     Ma.triggerMethodOn(ctx, "foo", bar);  invokes `onFoo: function(bar){ })`, triggers "foo" on ctx




     Ma.bindEntityEvents:  binds a bb  cl/md  to mets on a tg ob

     bb.V.x({  modelEvents: {  "change:foo": "doSomething"  },

     i : function(){  Ma.bindEntityEvents(this, this.model, this.modelEvents)   },

     doSomething: function(){  "change:foo" ev was fired from the md
      respond to it approp, here }  })

     The pam[0] tg, requires bb.Ev mu mixed in.
     pam2   the entity (bb.M, bbe.Cl or any object that has bb.Ev  mixed in) to bind the evs from
    3rd pam : hash of { "event:name": "eventHandler" } cf,  Mult  hls can be sep-ed by  sp
    can give  fn  instead of a str  hl name.

     Ma.unbindEntityEvents:   unbind cbs from   collection/model  evs

     //  like the above , we bind our md evs,   but here we unbind them on close.

  bb.V.x({
     modelEvents: {  "change:foo": "doSomething"  },
     i: function(){   Ma.bindEntityEvents(this, this.model, this.modelEvents)  },
     doSomething: function(){
 "change:foo" event was fired from the md
 respond to it appropriately, here.   },

     onClose: function() {   Ma.unbindEntityEvents(this, this.model, this.modelEvents);
     }  })

     Ma.proxyBindEntityEvents: proxies Ma.bindEntityEvents  so   it can easily be added to an inst

     Say you've written your own Pagination class
     and you want to easily listen to some entities events.
     With proxyBindEntityEvents,
     you can easily give this class the bindEntityEvents function.

     _.x(Pagination.prototype, {

     bindSomething: function() { this.bindEntityEvents(this.something, this.somethingEvents)  },
     bindEntityEvents: Ma.proxyBindEntityEvents  })



     Ma.proxyUnbindEntityEvents-proxies Ma.unbindEntityEvents  so can easily be added to an instance.

     oppo  of proxyBindEntityEvents, the APIs are identical for each method.
     Say you've written your own Pagination class ,
     you want to easily unbind cbs from some ent's evs.
     With proxyUnbindEntityEvents,
      you can easily give this class the unbindEntityEvents function.
     _.x(Pagination.prototype, {
     bindSomething: function() {       this.bindEntityEvents(this.something, this.somethingEvents)},
     unbindSomething: function() {
     this.unbindEntityEvents(this.something, this.somethingEvents) },
     bindEntityEvents: Ma.proxyBindEntityEvents,
     unbindEntityEvents: Ma.proxyUnbindEntityEvents  })



     Ma.normalizeMethods-attached to   Ma.Vw prototype by df
    - To use it from non-View classes you'll need to attach it yourself.
     =Receives a hash of ev names and fns/fn-names,
     rets same hash w  fn names replaced   w the fn refs themselves.
      Vw = Ma.IV.x({
     i: function() { this.fn1 = function() {}; this.fn2 = function() {};
   hash = {
     eventOne: "fn1", //  becomes a ref  to `this.someFn`
     eventTwo: this.fn2 };
     this.normalizedHash = this.normalizeMethods(hash);
     }

     })



     Ma.normalizeUIKeys: lets you to use the @ui. syntax
       within a given key for triggers and evs hashes. It
     swaps the @ui. ref with the assoc sel

   hash = {  'click @ui.list': 'myCb'    }; ui = {  'list': 'ul'   }

   sets 'click @ui.list' -> 'click ul' in the newHash ob

  newHash = Ma.normalizeUIKeys(hash, ui)




     Ma.normalizeUIValues: lets you  use  @ui. syntax within  given hash val
   (for example region hashes)

     swaps the @ui. reference with the associated selector.

    hash = { 'foo': '@ui.bar'  } ;  ui = {   'bar': '.quux'  }

 sets 'foo' to be '.quux' in the newHash object

  newHash = Ma.normalizeUIValues(hash, ui)


     Ma.actAsCollection: for mixing in _. cl bh to an ob
    takes an ob and pop field,    in  ex 'list',
     and appending cl fns to  ob  so that it can deleg  cl calls to its list
     Ma.actAsCollection(obj = {list:[1,2,3]}, 'list');
    $l(obj.map(double = function(v){ return v*2} )); // [2, 4, 6]
    


      Fn = function(ls) {this.ls=ls}; Ma.actAsCollection(Fn.prototype, 'list')
  fn = new Func([1,2,3]);   $l(fn.map(double = function(v){ return v*2} )) // [2, 4, 6]
  1st pam:    ob   that will deleg  us(_) cl mets;     2nd pam:  ob field that will hold the list


     */
}
MIV=function(){$.x()

    /*


     An ItemView is a view that represents a single item.
    (Backbone.Model OR Backbone.Collection)


     Whichever it is though, it will be treated as a single item.


     ItemView extends directly from Ma.View


     Additionally, interactions with Ma.Region
     will provide features such as onShow callbacks, etc. Please see
     the Region documentation for more information.

     Documentation Index::
     ItemView render
     Rendering A Collection In An ItemView
     Template-less ItemView
     Events and Callback Methods
     "before:render" / onBeforeRender event
     "render" / onRender event
     "before:destroy" / onBeforeDestroy event
     "destroy" / onDestroy event
     ItemView serializeData
     Organizing ui elements
     modelEvents and collectionEvents
     ItemView render



     Unlike Backbone Views,
          all Ma views come with a powerful render method.
     In fact, the primary differences between the views are the differences in their
     render methods.
     It goes without saying that it is unwise to override the render
     method of any Ma view.

      Instead, you should use the
      onBeforeRender
      and
      onRender
      callbacks
     to layer in additional functionality to the rendering of your view.

     The ItemView defers to the Ma.Renderer object to do the actual
     rendering of the template.

     The item view instance is passed as the third argument to the
     Renderer object's render method, which is useful in custom
     Renderer implementations.

     You should provide a template attribute on the item view, which
     will be either a jQuery selector:
*/  Vw =  Ma.IV.x({ template: "#some-template"  }); new Vw().render()


    // .. or a function taking a single argument:
    // the object returned by ItemView.serializeData:


    my_template_html = '<div><%= args.name %></div>'

    Vw =  Ma.IV.x({

        template : function(serialized_model) {
        n= serialized_model.name;
        return _.template(my_template_html)({
            name : n, some_custom_attribute : 'some_custom_key'
        })}

    })


    new Vw().render()


    /* Note that using a template function allows passing custom arguments into the .template function and allows for more control over how the .template function is called.

     For more information on the _.template function see the Underscore docs.

     Rendering A Collection In An ItemView

     While the most common way to render a Backbone.Collection is to use
     a CollectionView or CompositeView, if you just need to render a
     simple list that does not need a lot of interaction, it does not
     always make sense to use these. A Backbone.Collection can be
     rendered with a simple ItemView, using the templates to iterate
     over an items array.

     <script id="some-template" type="text/html">
     <ul>
     <% _.each(items, function(item){ %>
     <li> <%= item.someAttribute %> </li>
     <% }); %>
     </ul>
     </script>
     The important thing to note here, is the use of items as the
     variable to iterate in the _.each call. This will always be the
     name of the variable that contains your collection's items.

     Then, from JavaScript, you can define and use an ItemView with this
     template, like this:
*/
     ItemsV =  Ma.IV.x({  template: "#some-template"  })
     view = new ItemsV({  collection: 'someCollection'  })


/*
     // show the view via a region or calling the .render method directly
     Rendering this view will convert the someCollection collection in to
     the items array for your template to use.

     For more information on when you would want to do this, and what options
     you have for retrieving an individual item that was clicked or
     otherwise interacted with, see the blog post on
     Getting The Model For A Clicked Element.


     Template-less ItemView::
     An ItemView can be attached to existing elements as well.
      The primary benefit of this:
            to attach behavior and events to static content
            that has been rendered by your server
            (typically for SEO purposes).
       To set up a template-less ItemView,
              your template attribute must be false.

     <div id="my-element">
     <p>Hello World</p>
     <button class="my-button">Click Me</button>
     </div>
   */


     MyView =  Ma.IV.x({el: '#my-element', template: false,
         ui: {paragraph: 'p', button: '.my-button'},
         events: {'click @ui.button': 'clickedButton'},
         clickedButton: function() {$l('I clicked the button!')}})

    view = new MyView()

    view.render()

     view.ui.paragraph.text()        // returns 'Hello World'
     view.ui.button.trigger('click') // logs 'I clicked the button!'


    /*
     Another use case is when you want to attach a Ma.ItemView to a SVG graphic or canvas element, to provide a uniform view layer interface to non-standard DOM nodes. By not having a template this allows you to also use a view on pre-rendered DOM nodes, such as complex graphic elements.

     Events and Callback Methods

     There are several events and callback methods that are called
     for an ItemView. These events and methods are triggered with the
     Ma.triggerMethod function, which
     triggers the event and a corresponding "on{EventName}" method.

     "before:render" / onBeforeRender event

     Triggered before an ItemView is rendered.
*/

    Ma.IV.x({onBeforeRender: function(){}})  // set up final bits just before rendering the view's `el`


     /*
     "render" / onRender event

     Triggered after the view has been rendered.
     You can implement this in your view to provide custom code for dealing
     with the view's el after it has been rendered.
*/
    Ma.IV.x({onRender: function(){
     // manipulate the `el` here. it's already // been rendered, and is full of the view's// HTML, ready to go.
     }})

    // "before:destroy" / onBeforeDestroy event

    // Triggered just prior to destroying the view, when the view's destroy() method has been called.

     Backbone.Ma.ItemView.extend({onBeforeDestroy: function(){
     // manipulate the `el` here. it's already
     // been rendered, and is full of the view's
     // HTML, ready to go.
     }})
    // "destroy" / onDestroy event

    // Triggered just after the view has been destroyed.

     Backbone.Ma.ItemView.extend({
     onDestroy: function(){
     // custom destroying and cleanup goes here
     }
     })


    /* ItemView serializeData

     Item views will serialize a model or collection, by default, by
     calling .toJSON on either the model or collection. If both a model
     and collection are attached to an item view, the model will be used
     as the data source. The results of the data serialization will be passed to the template
     that is rendered.

     If the serialization is a model, the results are passed in directly:
*/
     var myModel = new MyModel({foo: "bar"});

     new MyItemView({
     template: "#myItemTemplate",
     model: myModel
     });

     MyItemView.render();
    // <script id="myItemTemplate" type="template">
     //Foo is: <%= foo %>
   //  </script>

    // If the serialization is a collection, the results are passed in as an
    // items array:

      myCollection = new MyCollection([{foo: "bar"}, {foo: "baz"}]);

     new MyItemView({
     template: "#myCollectionTemplate",
     collection: myCollection})

     MyItemView.render()

   /*  <script id="myCollectionTemplate" type="template">
     <% _.each(items, function(item){ %>
     Foo is: <%= foo %>
     <% }); %>
     </script>


     If you need custom serialization for your data, you can provide a
     serializeData method on your view. It must return a valid JSON
     object, as if you had called .toJSON on a model or collection.
     */
    Backbone.Ma.ItemView.extend({
     serializeData: function(){
     return {
     "some attribute": "some value"
     }
     }
     })



/*
     Organizing UI Elements

     As documented in Ma.View, you can specify a ui hash in your view that
     maps UI elements by their jQuery selectors. This is especially useful if you access the
     same UI element more than once in your view's code. Instead of
     duplicating the selector, you can simply reference it by
     this.ui.elementName:

     You can also use the ui hash values from within events and trigger keys using the "@ui.elementName": syntax
     */


    Ma.IV.x({

        tagName: "tr",

        ui: {checkbox: "input[type=checkbox]"},

        onRender: function() {
         if (this.model.get('selected')) {
             this.ui.checkbox.addClass('checked')
         }
     }

    })

    // modelEvents and collectionEvents
    // ItemViews can bind directly to model events and collection events     in a declarative manner:
    Ma.IV.x({
        modelEvents: {change: "modelChanged"  },
        collectionEvents: {add: "modelAdded" }
    })




}
MIV=function(){$.x('y', 'marion itemView')

    my_template_html = '<div><%= args.name %></div>'


    my_template_html = '<div id="wow"> wooooow </div>'



    Vw = bb.Ma.IV.x({
        onBeforeRender:function(){$l('about to render...')},

        template : function(serialized_model) {
            m=serialized_model
            $l('template...')
            n= serialized_model.name

            return _.template(my_template_html)({
              //  name : n, some_custom_attribute : 'some_custom_key'
            })}




    })

    vw = new Vw()


    vw.render()

    d = $('#wow')
}
MIV=function(){$.x('y', 'marion itemView')

    my_template_html = '<div><%= args.name %></div>'


    my_template_html = '<div id="wow"> wooooow </div>'



    Vw = bb.Ma.IV.x({
        onBeforeRender:function(){$l('about to render...')},

        template : function(serialized_model) {
            m=serialized_model
            $l('template...')
            n= serialized_model.name

            return _.template(my_template_html)({
                //  name : n, some_custom_attribute : 'some_custom_key'
            })},


        tagName: "tr",
        ui: {checkbox: "input[type=checkbox]"},
        onRender: function() {
            $l('rendered....')
           // if (this.model.get('selected')) {this.ui.checkbox.addClass('checked')}
        }
    })

    vw = new Vw()


    vw.render()

    d = $('#wow')
}
MMU=function(){$.x()
}
MOB=function(){$.x()
}
REGIN=function(){$.x()
}
REGMANG=function(){$.x()
}
RNDRR=function(){$.x()

    /*
     The Renderer object was extracted from the ItemView rendering
     process, in order to create a consistent and re-usable method of
     rendering a template with or without data.

     Documentation Index

     Basic Usage
     Pre-compiled Templates
     Custom Template Selection And Rendering
     Using Pre-compiled Templates
     Basic Usage

     The basic usage of the Renderer is to call the render method.
     This method returns a string containing the result of applying the
     template using the data object as the context.

     var template = "#some-template";
     var data = {foo: "bar"};
     var html = Backbone.Ma.Renderer.render(template, data);

     // do something with the HTML here
     If you pass a template that coerces to a falsey value, the
     render method will throw an exception stating that there was no
     template provided.

     Pre-compiled Templates

     If the template parameter of the render function is itself a function,
     the renderer treats this as a pre-compiled template and does not try to
     compile it again. This allows any view that supports a template parameter
     to specify a pre-compiled template function as the template setting.

     var myTemplate = _.template("<div>foo</div>");
     Backbone.Ma.ItemView.extend({
     template: myTemplate
     });
     The template function does not have to be any specific template engine. It
     only needs to be a function that returns valid HTML as a string from the
     data parameter passed to the function.

     Custom Template Selection And Rendering

     By default, the renderer will take a jQuery selector object as
     the first parameter, and a JSON data object as the optional
     second parameter. It then uses the TemplateCache to load the
     template by the specified selector, and renders the template with
     the data provided (if any) using Underscore.js templates.

     If you wish to override the way the template is loaded, see
     the TemplateCache object.

     If you wish to override the template engine used, change the
     render method to work however you want:

     Backbone.Ma.Renderer.render = function(template, data){
     return $(template).tmpl(data);
     };
     This implementation will replace the default Underscore.js
     rendering with jQuery templates rendering.

     If you override the render method and wish to use the
     TemplateCache mechanism, remember to include the code necessary to
     fetch the template from the cache in your render method:

     Backbone.Ma.Renderer.render = function(template, data){
     var template = Ma.TemplateCache.get(template);
     // Do something with the template here
     };
     Using Pre-compiled Templates

     You can easily replace the standard template rendering functionality
     with a pre-compiled template, such as those provided by the JST or TPL
     plugins for AMD/RequireJS.

     To do this, just override the render method to return your executed
     template with the data.

     Backbone.Ma.Renderer.render = function(template, data){
     return template(data);
     };
     Then you can specify the pre-compiled template function as your view's
     template attribute:

     var myPrecompiledTemplate = _.template("<div>some template</div>");

     Backbone.Ma.ItemView.extend({
     template: myPrecompiledTemplate
     });
     */
}
TPCA=function(){$.x()
}
MAR00=function(){$.x()

    $.d_(
        $.hdr($.h1('A Ma Playground')),
        $.art().id('main'),
        $.scrp('sample-template', 'put some content <%= contentPlacement %>.'))

    App = $Ap()
   rg= App.aRg(  "#main" )
    mu= App.mu("SampleModule", function(mu, ap, bb, ma, $, _){

        // Create a module to contain some functionality

        var MainView = ma.IV.x({     template: "#sample-template"       })


         // Define a view to show

            var Controller = ma.Co.x({// Define a controller to run this module
            initialize: function(opts){
                this.region = opts.region
            },

                show: function(){
                var model = new bb.M({    contentPlacement: "here"  })
                var view = new MainView({  model: model  })
                this.region.show(view)}
        })


            mu.addInitializer(function(){ // Initialize this module when the app starts
          mu.controller = new Controller({  region: ap.mainRegion   })
            mu.controller.show()
        })

        })


    App.start()


}
ITEMV=function(){$.x()




    itemModel= new ItemModel({
        topic:'yano', text:'hi', score:0
    })

    $('body').A(
        new ItemView({

            model: itemModel
        }).render().el
    )
}
RANKY=function(tp){$.fm()
    s1.A(
        $.h1('topics!'),
        // ipt('new topic', 'post', '/tpc') ,
        collection = $.inputBox({
            boxTitle:'new topic',
            url:'/tpc',
            btT:'post',
            func:function(){},
            inputType:'textArea'
        }),
        $.h4('recent: ')
    )

    $.eG('tpc',
        function(tp){

            s1.A($.bt(_.tp.t, function(){

                ranky(tp)

            }), $.br(2))

        })

//ranky takes a topic model from the database
//(which includes all its items already)
//this is messed up
    ranky=function(topic){//var collection
        s2.E()
        s2.A(
            $.h1('topic page: '+ topic.t),
            $.bt('live chat', function(){ priv(topic.t) }),
            //ipt('new item', 'post','/itm', {t: t.t}, function(){qG('/tpc1', {t: t.t},function(t){ranky(t)})}, '-'),
            $.ipB({
                boxTitle:'new item',
                url:'/itm',
                btT:'post',
                defaults:{t: topic.t},
                func:function(){$.G('tpc1', {t: topic.t}, function(t){ranky(t)})},
                inputType:'text'
            }),

            collection=$.d()
        )


        itemCollection=new ItemCollection()

        _.e(topic.i, function(i){
            if(O(i)){
                var itemModel=new ItemModel({  topic:topic.t,  text: i.t,   score: i.s   })
                itemCollection.add( itemModel )
                // var itemView=new ItemView({model: itemModel}).render().el
                // collection(itemView)
                // itemCollection.render()
            }
        })

        itemsView = new ItemsView({  collection:itemCollection  })

        itemsView.render()
    }
    ItemModel=bb.Model.extend({initialize:function(){}})
    ItemCollection=bb.Collection.extend({
        model:ItemModel,
        comparator:'score',

        render:function(){
            collection.E()
            _.e(this.models, function(itemModel){
                    var itemView=new ItemView({model: itemModel}).render()
                    collection(itemView.el)
                }
            )
        }})
    ItemsView=bb.View.extend({
        initialize:function(){var self=this
            this.collection.on('change', function(){
                alert(3)
                this.sort()
                self.render()
            })
        },
        render:function(){collection().E()
            this.collection.each(function(model){
                var itemView=new ItemView({model: model}).render()
                collection(itemView.el)
            })
        }
    })
    ItemView=bb.View.extend({
        initialize:function(){this.listenTo(this.model, 'change', function(){this.render()})},
        render:function(){
            var self=this,
                topic=this.model.get('topic'),
                score=this.model.get('score'),
                text=this.model.get('text')

            this.el.E(
                $.h1(text),
                $.h4('score: '+ String(score)),
                $.bt('up',  function(){
                    $.P('vte',  {t:topic, i:text, dr:'u'}, function(){
                        self.model.set('score', self.model.get('score')+1)
                    })
                }),
                $.bt('down',function(){
                    $.P('vte', {t: topic ,  i: text,   dr:'d'}, function(){
                            self.model.set('score', self.model.get('score')-1)}
                        //    function(){ranky(topic)}
                    )}))
            return this}})
}
REGIONS=ANGRYCATS=function(){z()
    // http://davidsulc.com/blog/2012/04/15/a-simple-backbone-marionette-tutorial/

    d=_d().w(500).h(500).c('b').id('content').a()



    MyApp=new bb.Ma.Application()
    MyApp.addRegions({
        mainRegion: "#content"
    })
    AngryCat=M$({})


    AngryCats=C$({  model:AngryCat  })


    //Temp(  'angry_cats-template', [thead()( tr().k('header')( th()('Name') ) ),  tbody()]  ).a()



    scrp('angry_cat-template')(

        td()('%= name')

    ).a()



    catV=bb.Ma.IV.extend({
        template: "#angry_cat-template",
        tagName: 'tr',
        className: 'angry_cat'})

    catsV=bb.Ma.CpV.extend({

        tagName: "table",

        id: "angry_cats",

        className: "table-striped table-bordered",

        template: "#angry_cats-template",

        itemView: catV,

        appendHtml: function(colV, itemV){
            colV.$("tbody").append(itemV.el)}})


    MyApp.addInitializer(

        function(ops){
            MyApp.mainRegion.show(new catsV(
                {collection:ops.cats}))}

    )



    MyApp.start({cats:new AngryCats([
        {name:'Wet Cat' },
        {name:'Bitey Cat'},
        {name:'Surprised Cat'}])})

}
MARTREE=function(){z()
    scrp("node-template", "<li><%= nodeName %></li>").a()
    di("tree").a()
    // ul {list-style: disc; padding-left: 10px; margin-left: 10px; }
    TreeView=bb.Ma.CompositeView.extend({


        template: "#node-template",


        tagName: "ul",


        initialize: function(){
            // grab the child collection from the parent model
            // so that we can render the collection as children
            // of this parent node
            this.collection=this.model.nodes},



        appendHtml: function(collectionView, itemView){
            // ensure we nest the child list inside of
            // the current list item
            collectionView.$("li:first").append(itemView.el)}
    })
// The tree's root: a simple collection view that renders
// a recursive tree structure for each item in the collection
    TreeRoot = bb.Ma.CollectionView.extend({itemView: TreeView})
}
CATZ=function(){$.x()

    tempScr=function(i,e){

        t= $(
            '<script type="text/template" id="'+i+'">'
        )

        _.e(e,
            function(e){
                t(e)
            })
        return t
    }
    //tempScr('cat', [thead()(tr().k('header')(  th()('Name') )  ), tbody()]).a()
    //tempScr('cats', [td()("<%= name =>")]).a()
    //Temp('cat1', [thead()(tr().k('header')(  th()('Name') )  ), tbody()]).a()
    //Temp('cats1', [td()( "<%= name =>" )]).a()
    d= $.d('y',500,500).id('content')

    MyApp = new bb.Ma.Application()

    MyApp.addRegions({mainRegion: "#content"})

    AngryCat=bb.Model.extend({

        rankUp: function(){
            this.set({
                rank: this.get('rank')-1
            })},

        rankDown: function(){
            this.set({rank: this.get('rank') + 1
            })}

        //,  defaults:{rank:0}
    })
    AngryCats=bb.Collection.extend({

        model: AngryCat,

        initialize: function(cats){
            var rank=1


            // _.each(cats, function(cat){ cat.set('rank', rank); ++rank })

            var self=this;

            MyApp.on('rank:up',function(cat){$l('rank up');

                if (cat.get('rank') === 1) {
                    // can't increase rank of top-ranked cat
                    return true}

                self.rankUp(cat)
                self.sort()
                self.trigger('reset')

            })
            MyApp.on('rank:down', function(cat){$l('rank down');

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
    AngryCatView = bb.Ma.ItemView.extend({

        template: "#cat_template",
        tagName: 'tr',
        className: 'angry_cat',

        events: {
            'click .rank_up': 'rankUp',
            'click .rank_down': 'rankDown'},


        rankUp: function(){
            MyApp.trigger('rank:up', this.model);
            $l('trigger rank up')},


        rankDown: function(){
            MyApp.trigger('rank:down', this.model);
            $l('trigger rank down')}


    })
    AngryCatsView = bb.Ma.CompositeView.extend({

        tagName: "table",
        id: "angry_cats",
        className: "table-striped table-bordered",

        template: "#cats_template",

        itemView:AngryCatView,

        appendHtml: function(collectionView, itemView){
            collectionView.$("tbody").append(itemView.el)
        }

    })
    MyApp.addInitializer(function(options){

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

ITEMV=function(){z()
    itemModel=new ItemModel({topic:'yano', text:'hi', score:0})
    $('body').A(
        new ItemView({model: itemModel}).render().el
    )
}
RANKY=function(tp){$.fm()
    s1.A(
        $.h1('topics!'),
        // ipt('new topic', 'post', '/tpc') ,

        collection = $.inputBox({
            boxTitle:'new topic',
            url:'/tpc',
            btT:'post',
            func:function(){},
            inputType:'textArea'
        }),
        $.h4('recent: ')
    )
    $.eG('tpc', function(tp){s1.A($.bt(_.tp.t, function(){
        ranky(tp)
    }), $.br(2))})

//ranky takes a topic model from the database
//(which includes all its items already)
//this is messed up
    ranky=function(topic){//var collection
        s2.E()
        s2.A(
            $.h1('topic page: '+ topic.t),
            $.bt('live chat', function(){ priv(topic.t) }),
            //ipt('new item', 'post','/itm', {t: t.t}, function(){qG('/tpc1', {t: t.t},function(t){ranky(t)})}, '-'),
            $.ipB({
                boxTitle:'new item',
                url:'/itm',
                btT:'post',
                defaults:{t: topic.t},
                func:function(){$.G('tpc1', {t: topic.t}, function(t){ranky(t)})},
                inputType:'text'
            }),

            collection=$.d()
        )


        itemCollection=new ItemCollection()

        _.e(topic.i, function(i){
            if(O(i)){
                var itemModel=new ItemModel({  topic:topic.t,  text: i.t,   score: i.s   })
                itemCollection.add( itemModel )
                // var itemView=new ItemView({model: itemModel}).render().el
                // collection(itemView)
                // itemCollection.render()
            }
        })

        itemsView = new ItemsView({  collection:itemCollection  })

        itemsView.render()
    }
    ItemModel=Backbone.Model.extend({initialize:function(){}})
    ItemCollection=Backbone.Collection.extend({
        model:ItemModel,
        comparator:'score',

        render:function(){
            collection.E()
            _.e(this.models, function(itemModel){
                    var itemView=new ItemView({model: itemModel}).render()
                    collection(itemView.el)
                }
            )
        }})
    ItemsView=Backbone.View.extend({
        initialize:function(){var self=this
            this.collection.on('change', function(){
                alert(3)
                this.sort()
                self.render()
            })
        },
        render:function(){collection().E()
            this.collection.each(function(model){
                var itemView=new ItemView({model: model}).render()
                collection(itemView.el)
            })
        }
    })
    ItemView=Backbone.View.extend({
        initialize:function(){this.listenTo(this.model, 'change', function(){this.render()})},
        render:function(){
            var self=this,
                topic=this.model.get('topic'),
                score=this.model.get('score'),
                text=this.model.get('text')

            this.el.E(
                $.h1(text),
                $.h4('score: '+ String(score)),
                $.bt('up',  function(){
                    $.P('vte',  {t:topic, i:text, dr:'u'}, function(){
                        self.model.set('score', self.model.get('score')+1)
                    })
                }),
                $.bt('down',function(){
                    $.P('vte', {t: topic ,  i: text,   dr:'d'}, function(){
                            self.model.set('score', self.model.get('score')-1)}
                        //    function(){ranky(topic)}
                    )}))
            return this}})
}
MAR=function(){z()
    // http://davidsulc.com/blog/2012/04/15/a-simple-backbone-marionette-tutorial/

    d=_d().w(500).h(500).c('b').id('content').a()



    MyApp=new Bb.Ma.Application()


    MyApp.addRegions({
        mainRegion: "#content"})


    AngryCat=M$({})


    AngryCats=C$({  model:AngryCat  })


    //Temp(  'angry_cats-template', [thead()( tr().k('header')( th()('Name') ) ),  tbody()]  ).a()



    scrp('angry_cat-template')(

        td()('%= name')

    ).a()



    catV=Bb.Ma.IV.extend({
        template: "#angry_cat-template",
        tagName: 'tr',
        className: 'angry_cat'})



    catsV=Bb.Ma.CpV.extend({

        tagName: "table",

        id: "angry_cats",

        className: "table-striped table-bordered",

        template: "#angry_cats-template",

        itemView: catV,

        appendHtml: function(colV, itemV){
            colV.$("tbody").append(itemV.el)}})


    MyApp.addInitializer(

        function(ops){
            MyApp.mainRegion.show(new catsV(
                {collection:ops.cats}))}

    )



    MyApp.start({cats:new AngryCats([
        {name:'Wet Cat' },
        {name:'Bitey Cat'},
        {name:'Surprised Cat'}])})






}



MARTREE=function(){z()

    scrp("node-template",
        "<li><%= nodeName %></li>").a()

    di("tree").a()

    // ul {list-style: disc; padding-left: 10px; margin-left: 10px; }

    TreeView=Backbone.Marionette.CompositeView.extend({


        template: "#node-template",


        tagName: "ul",


        initialize: function(){
            // grab the child collection from the parent model
            // so that we can render the collection as children
            // of this parent node
            this.collection=this.model.nodes},



        appendHtml: function(collectionView, itemView){
            // ensure we nest the child list inside of
            // the current list item
            collectionView.$("li:first").append(itemView.el)}
    })

// The tree's root: a simple collection view that renders
// a recursive tree structure for each item in the collection


    TreeRoot = Backbone.Marionette.CollectionView.extend(

        {itemView: TreeView}

    )



}


CATZ=function(){$.x()

    tempScr=function(i,e){

        t= $(
            '<script type="text/template" id="'+i+'">'
        )

        _.e(e,
            function(e){
                t(e)
            })
        return t
    }
    //tempScr('cat', [thead()(tr().k('header')(  th()('Name') )  ), tbody()]).a()
    //tempScr('cats', [td()("<%= name =>")]).a()
    //Temp('cat1', [thead()(tr().k('header')(  th()('Name') )  ), tbody()]).a()
    //Temp('cats1', [td()( "<%= name =>" )]).a()
    d= $.d('y',500,500).id('content')
    MyApp = new bb.Marionette.Application()
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

            MyApp.on('rank:up',function(cat){$l('rank up');

                if (cat.get('rank') === 1) {
                    // can't increase rank of top-ranked cat
                    return true}

                self.rankUp(cat)
                self.sort()
                self.trigger('reset')

            })
            MyApp.on('rank:down', function(cat){$l('rank down');

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
            $l('trigger rank up')},


        rankDown: function(){
            MyApp.trigger('rank:down', this.model);
            $l('trigger rank down')}


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
    MyApp.addInitializer(function(options){

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