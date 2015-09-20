 //Ma's Pieces//These are the strings that you can pull to make your puppet dance:
//    Ma.Application: An application object that starts your app via initializers, and more
//Ma.AppRouter: Reduce your routers to nothing more then configuration
//Ma.ItemView: A view that renders a single item
//Ma.CollectionView: A view that iterates over a collection, and renders individual ItemView instances for each model
//Ma.CompositeView: A collection view and item view, for rendering leaf-branch/composite model hierarchies
//Ma.Layout: A view that renders a layout and creates region managers to manage areas within it
//Ma.Region: Manage visual regions of your application, including display and removal of content
//Ma.EventAggregator: An extension of Bb.Events, to be used as an event-driven or pub-sub tool
//Ma.BindTo: An event binding manager, to facilitate binding and unbinding of events
//Ma.TemplateCache: Cache templates that are stored in <script> blocks, for faster subsequent access
//Ma.Callbacks: Manage a collection of callback methods, and execute them as needed
//The Application, Region, ItemView and CollectionView use the extend syntax and functionality from Bb, allowing you to define new versions of these objects with custom behavior.
//
//    Ma.Application
//The Ma.Application object is the hub of your composite application. It organizes, initializes and coordinate the various pieces of your app. It also provides a starting point for you to call into, from your HTML script block or from your JavaScript files directly if you prefer to go that route.
//
//    The Application is meant to be instantiate directly, although you can extend it to add your own functionality.
//
    MyApp = new Ma.Ap()
 
//Adding Initializers
//Your application needs to do useful things, like displaying content in your regions, starting up your routers, and more. To accomplish these tasks and ensure that your Application is fully configured, you can add initializer callbacks to the application.
//
    MyApp.addInitializer(function(op){
        MyApp.mainRegion.show(new MyView({
            model: op.someModel }))
    })
 
 MyApp.addInitializer(function(op){ 
     new MyAppRouter(); Bb.history.start() 
 })


//These callbacks will be executed when you start your application, and are bound to the application object as the context for the callback. In other words, this is the MyApp object, inside of the initializer function.

//The options parameters is passed from the start method (see below).
//
//Initializer callbacks are guaranteed to run, no matter when you add them to the app object. If you add them before the app is started, they will run when the start method is called. If you add them after the app is started, they will run immediately.
//
//    Application Event;
//The Application object raises a few events during its lifecycle. These events can be used to do additional processing of your application. For example, you may want to pre-process some data just before initialization happens. Or you may want to wait until your entire application is initialized to start the Bb.history.
//
//    The events that are currently triggered, are:
//
//"initialize:before": fired just before the initializers kick off
//"initialize:after": fires just after the initializers have finished
//"start": fires after all initializers and after the initializer events
MyApp.b("initialize:before", function(op){
    op.moreData = "Yo dawg, I heard you like options so I put some options in your options!"
})
MyApp.b("initialize:after", function(op){
    if (Bb.history){Bb.history.start()}
})

//The options parameter is passed through the start method of the application object (see below).
//
//Starting An Application
//Once you have your application configured, you can kick everything off by calling: MyApp.start(options).
//
//    This function takes a single optional parameter. This parameter will be passed to each of your initializer functions, as well as the initialize events. This allows you to provide extra configuration for various parts of your app, at initialization/start of the app, instead of just at definition.
//


 options = {
    something: "some value",
    another: "#some-selector"
};

MyApp.start(options);
//app.vent: Event Aggregator
//Every application instances comes with an instance
// of Ma.EventAggregator called app.vent.
//


 MyApp = new Ma.Ap()

 MyApp.vent.on("foo", function(){
    alert("bar");
})

MyApp.vent.trigger("foo"); // => alert box "bar"
//See the Ma.EventAggregator documentation below, for more details.
//
//    Ma.AppRouter
//Reduce the boilerplate code of handling route events and then calling a single method on another object. Have your routers configured to call the method on your object, directly.
//
//    Configure Routes
//Configure an AppRouter with appRoutes. The route definition is passed on to Bbs standard routing handlers. This means that you define routes like you normally would. Instead of providing a callback method that exists on the router, though, you provide a callback method that exists on the controller that you specify for the router instance (see below).
//
MyRouter = Ma.AppRouter.x({
    appRoutes: {
        "some/route": "someMethod"
    }
});
//You can also add standard routes to an AppRouter, with methods on the router.
//
//    Specify A Controller
//App routers can only use one controller object. You can either specify this directly in the router definition:
//
    someController = {
        someMethod: function(){ /**/ }
    };

Ma.AppRouter.x({
    controller: someController
});
//Or in a parameter to the contructor:
//
    myObj = {
        someMethod: function(){ /**/ }
    };

new MyRouter({
    controller: myObj
});
//Or
//
//The object that is used as the controller has no requirements, other than it will contain the methods that you specified in the appRoutes.
//
//    It is reocmmended that you divide your controller objects in to smaller peices of related functionality and have multiple routers / controllers, instead of just one giant router and controller.
//
//    Ma.Region
//Region managers provide a consistent way to manage your views and show / close them in your application. They use a jQuery selector to show your views in the correct place. They also call extra methods on your views, to facilitate additional functionality.
//
//    Defining An Application Region
//Regions can be added to the application by calling the addRegions method on your application instance. This method expects a single hash parameter, with named regions and either jQuery selectors or Region objects. You may call this method as many times as you like, and it will continue adding regions to the app.
//

 MyApp.addRegions({
        mainRegion: "#main-content",
        navigationRegion: "#navigation"
    });
    //As soon as you call addRegions, your region managers are available on your app object. In the above, example MyApp.mainRegion and MyApp.navigationRegion would be available for use immediately.
//
//    If you specify the same region name twice, last one in wins.
//
//    Initialize A Region With An el
//You can specify an el for the region manager to manage at the time that the region manager is instantiated:
//
 mgr = new Ma.Region({ el: "#someElement" })
//Basic Usage
//Once a region manager has been defined, you can call the show and close methods on it to render and display a view, and then to close that view:

 myView = new MyView()
//
MyApp.mainRegion.show(myView);// render and display the view

//
MyApp.mainRegion.close();// closes the current view
//If you replace the current view with a new view by calling show, it will automatically close the previous view.
//
//// show the first view
//    var myView = new MyView();
MyApp.mainRegion.show(myView);
//
//// replace view with another. the
//// `close` method is called for you
var anotherView = new AnotherView();
MyApp.mainRegion.show(anotherView);
//Set How View's el Is Attached
//You can specify a second parameter to the show method, which will be used to determine how the HTML from the view's el is attached to the DOM region that is being managed.
//
//The options include any valid jQuery DOM object method, such as html, text, append, etc.
//
    MyApp.mainRegion.show(myView, "append");
//This example will use jQuery's $.append function to append the new view to the current HTML.
//
//WARNING: Be careful when using this feature, as the view you are replacing may not be managed / closed correctly as a result. This can cause unexpected behavior, memory leaks or other problems. Use At Your Own Risk
//
//Attach Existing View
//There are some scenarios where it's desirable to attach an existing view to a region manager, without rendering or showing the view, and without replacing the HTML content of the region. For example, SEO and accessibiliy often need HTML to be generated by the server, and progressive enhancement of the HTML.
//
//There are two ways to accomplish this:
//
//set the currentView in the region manager's constructor
//call attachView on the region manager instance
//Set currentView On Initialization
//
 myView = new MyView({
    el: $("#existing-view-stuff")
})
  manager = new Ma.Region({
    el: "#content",
    currentView: myView
})

//Call attachView On Region
MyApp.addRegions({
    someRegion: "#content"
});


 myView = new MyView({ el: $("#existing-view-stuff") })

MyApp.someRegion.attachView(myView);
//Region Events
//A region manager will raise a few events during it's showing and closing of views:
//
//"view:show" - when the view has been rendered and displayed
//"view:closed" - when the view has been closed
//You can bind to these events and add code that needs to run with your region manager, opening and closing views.
//
    MyApp.mainRegion.on("view:show", function(view){
        // manipulate the `view` or do something extra
        // with the region manager via `this`
    });

MyApp.mainRegion.on("view:closed", function(view){
    // manipulate the `view` or do something extra
    // with the region manager via `this`
});
//Defining A Custom Region
//You can define a custom region manager by extending from Region. This allows you to create new functionality, or provide a base set of functionality for your app.
//
//    Once you define a region manager type, you can still call the addRegions method. Specify the region manager type as the value - not an instance of it, but the actual constructor function.
//
var FooterRegion = Ma.Region.x({
    el: "#footer"
});

MyApp.addRegions({footerRegion: FooterRegion});
//Note that if you define your own Region object, you must provide an el for it. If you don't, you will receive an runtime exception saying that an el is required.
//
//Instantiate Your Own Region
//There may be times when you want to add a region manager to your application after your app is up and running. To do this, you'll need to extend from Region as shown above and then use that constructor function on your own:

var SomeRegion = Ma.Region.x({
    el: "#some-div"
});

MyApp.someRegion = new SomeRegion();

//MyApp.someRegion.show(someView);
//jQuery Deferred And Asynchronous Template Loading
//The region manager show method takes advantage of jQuery's deferred cababilities, allowing for some very advanced techniques to be used for rendering views.
//
//To use a deferred, a view that is shown via a region manager must return a jQuery deferred object from the render method:
//
    DeferredView = Bb.View.x({
        render: function(){
            var that = this;
            var data = this.serializeData();
            var dfd = jQuery.Deferred();

            this.getTemplate(function(template){
                var html = that.renderTemplate(template, data);

                that.$el.html(html);

                if (that.onRender){
                    that.onRender();
                }

                dfd.resolve();
            });

            return dfd.promise();
        }
    });

var view = new DeferredView();
MyApp.mainRegion.show(view);
//The region manager will wait until the deferred object is resolved before it attached the view's el to the DOM and displays it.
//
//Ma.Layout
//Formerly known as CompositeRegion.
//
//    A Layout is a specialized hybrid between an ItemView and a collection of Region objects, used for rendering an application layout with multiple sub-regions to be managed by specified region managers.
//
//    A layout manager can also be used as a composite-view to aggregate multiple views and sub-application areas of the screen where multiple region managers need to be attached to dynamically rendered HTML.
//
//    The Layout extends directly from ItemView and adds the ability to specify regions which become Region instances that are attached to the layout.
//
//    Basic Usage
//<script id="layout-template" type="text/template">
//<section>
//<navigation id="menu"></navigation>
//<article id="content"></navigation>
//</section>
//</script>
AppLayout = Ma.Layout.x({
    template: "#layout-template",

    regions: {
        menu: "#menu",
        content: "#content"
    }
});

var layout = new AppLayout();
layout.render();
//Once you've rendered the layout, you now have direct access to all of the specified regions as region managers.
//
//layout.menu.show(new MenuView());
//
//layout.content.show(new MainContentView());
//Nested Layouts And Views
//Since the Layout extends directly from ItemView, it has all of the core functionality of an item view. This includes the methods necessary to be shown within an existing region manager.
//
    MyApp = new Ma.Application();
MyApp.addRegions({
    mainRegion: "#main"
});

var layout = new AppLayout();
MyApp.mainRegion.show(layout);

layout.show(new MenuView());
//You can nest layouts into region managers as deeply as you want. This provides for a well organized, nested view structure.
//
//    Closing A Layout
//When you are finished with a layout, you can call the close method on it. This will ensure that all of the region managers within the layout are closed correctly, which in turn ensures all of the views shown within the regions are closed correctly.
//
//    If you are showing a layout within a parent region manager, replacing the layout with another view or another layout will close the current one, the same it will close a view.
//
//    All of this ensures that layouts and the views that they contain are cleaned up correctly.
//
//    Event Aggregator
//It's common to use a Layout to represent a sub-application in a larger overall application. Often the components of the sub-application need to communicate with each other without allowing the other parts of the larger application in on the communication. To facilitate this, the layout manager includes an event aggregator, vent.
//
var layout = new MyAppLayout();

layout.vent.trigger("stuff:was:done");
//Ma.ItemView
//An ItemView is a view that represents a single item. That item may be a Bb.Model or may be a Bb.Collection. Whichever it is, though, it will be treated as a single item.
//
//    ItemView render
//An item view has a render method built in to it. By default it uses underscore.js templates.
//
//    The default implementation will use a template that you specify (see below) and serialize the model or collection for you (see below).
//
//The render method will return a jQuery deferred object, allowing you to know when the view rendering is complete.
//
    MyView = Ma.ItemView.x({});

new MyView().render().done(function(){
    // the view is done rendering. do stuff here
});
//Customizing ItemView.render
//You can provide a custom implementation of a method called renderTemplate to change template engines. For example, if you want to use jQuery templates, you can do this:
//
Ma.ItemView.x({
    renderTemplate: function(template, data){
        return template.tmpl(data);
    }
});
//The template parameter is a jQuery object with the contents of the template that was specified in the view (see below).
//
//The data parameter is the serialized data for either the model or the collection of the view (see below).
//
//Callback Methods
//There are several callback methods that are called for an ItemView. These methods are intended to be handled within the view definition, directly.
//
//    beforeRender callback
//
//Before an ItemView is rendered a beforeRender method will be called on the view.

    Ma.ItemView.x({
        beforeRender: function(){
            // set up final bits just before rendering the view's `el`
        }
    });
//onRender callback
//
//After the view has been rendered, a onRender method will be called. You can implement this in your view to provide custom code for dealing with the view's el after it has been rendered:
//
Ma.ItemView.x({
    onRender: function(){
        // manipulate the `el` here. it's already
        // been rendered, and is full of the view's
        // HTML, ready to go.
    }
});
//beforeClose callback
//
//A beforeClose method will be called on the view, just prior to closing it:
//
    Ma.ItemView.x({
        beforeClose: function(){
            // manipulate the `el` here. it's already
            // been rendered, and is full of the view's
            // HTML, ready to go.
        }
    });
//onClose callback
//
//View Events
//There are several events that are triggers by an ItemView, which allow code outside of a view to respond to what's happening with the view.
//
//"item:before:render" event
//An "item:before:render" event will be triggered just before the view is rendered
//
MyView = Ma.ItemVIew.x({});

var myView = new MyView();

myView.on("item:before:render", function(){
    alert("the view is about to be rendered");
});
//"item:rendered" event
//
//An "item:rendered" event will be triggered just after the view has been rendered.
//
    MyView = Ma.ItemVIew.x({});

var myView = new MyView();

myView.on("item:rendered", function(){
    alert("the view was rendered!");
});
//"item:before:close" event
//
//An "item:before:close" event will be triggered just prior to the view closing itself. This event fires when the close method of the view is called.
//
    MyView = Ma.ItemVIew.x({});

var myView = new MyView();

myView.on("item:before:close", function(){
    alert("the view is about to be closed");
});

myView.close();
//"item:closed" event
//
//An "item:closed" event will be triggered just after the view closes. This event fires when the close method of the view is called.
//
    MyView = Ma.ItemVIew.x({});

var myView = new MyView();

myView.on("item:closed", function(){
    alert("the view is closed");
});

myView.close();
ItemView template
Item views should be configured with a template. The template attribute should be either a valid jQuery selector, or a function that returns a valid jQuery selector:

    MyView = Ma.ItemView.x({
        template: "#some-template"
    });

AnotherView = Ma.ItemView.x({
    template: function(){
        return $("#some-template")
    }
});

new SomeItemView({
    template: "#some-template"
});
//If no template is specified, an error will be throwing saying so.
//
//    ItemView serializeData
//Item views will serialize a model or collection, by default, by calling .toJSON on either the model or collection. If both a model and collection are attached to an item view, the model will be used as the data source. The results of the data serialization will be passed to the template that is rendered.
//
//    If the serialization is a model, the results are passed in directly:
//
var myModel = new MyModel({foo: "bar"});

new MyItemView({
    template: "#myItemTemplate",
    model: myModel
});

MyItemView.render();
//<script id="myItemTemplate" type="template">
//Foo is: <%= foo %>
//</script>
//If the serialization is a collection, the results are passed in as an items array:
//
    var myCollection = new MyCollection([{foo: "bar"}, {foo: "baz"}]);

new MyItemView({
    template: "#myCollectionTemplate",
    collection: myCollection
});

//MyItemView.render();
//<script id="myCollectionTemplate" type="template">
//<% _.each(items, function(item){ %>
//    Foo is: <%= foo %>
//    <% }); %>
//</script>
//If you need custom serialization for your data, you can provide a serializeData method on your view. It must return a valid JSON object, as if you had called .toJSON on a model or collection.
//
    Ma.ItemView.x({
        serializeData: function(){
            return {
                "some attribute": "some value"
            }
        }
    });
Binding To ItemView Events
ItemView extends Ma.BindTo. It is recommended that you use the bindTo method to bind model and collection events.

    MyView = Ma.ItemView.x({
    initialize: function(){
        this.bindTo(this.model, "change:foo", this.modelChanged);
        this.bindTo(this.collection, "add", this.modelAdded);
    },

    modelChanged: function(model, value){
    },

    modelAdded: function(model){
    }
});
//The context (this) will automatically be set to the view. You can optionally set the context by passing in the context object as the 4th parameter of bindTo.
//
//    ItemView close
//ItemView implements a close method, which is called by the region managers automatically. As part of the implementation, the following are performed:
//
//    unbind all bindTo events
//unbind all custom view events
//unbind all DOM events
//remove this.el from the DOM
//call an onClose event on the view, if one is provided
//By providing an onClose event in your view definition, you can run custom code for your view that is fired after your view has been closed and cleaned up. This lets you handle any additional clean up code without having to override the close method.
//
    Ma.ItemView.x({
        onClose: function(){
            // custom cleanup or closing code, here
        }
    });
//Ma.CollectionView
//The CollectionView will loop through all of the models in the specified collection, render each of them using a specified itemView, then append the results of the item view's el to the collection view's el.
//
//    Callback Methods
//There are several callback methods that can be provided on a CollectionView. If they are found, they will be called by the view's base methods. These callback methods are intended to be handled within the view definition directly.
//
//beforeRender callback
//
//A beforeRender callback will be called just prior to rendering the collection view.
//
    Ma.CollectionView.x({
        beforeRender: function(){
            // do stuff here
        }
    });
//onRender callback
//
//After the view has been rendered, a onRender method will be called. You can implement this in your view to provide custom code for dealing with the view's el after it has been rendered:
//
Ma.CollectionView.x({
    onRender: function(){
        // do stuff here
    }
});
//beforeClose callback
//
//This method is called just before closing the view.
//
    Ma.CollectionView.x({
        beforeClose: function(){
            // do stuff here
        }
    });
//onClose callback
//
//This method is called just after closing the view.
//
    Ma.CollectionView.x({
        onClose: function(){
            // do stuff here
        }
    });
//CollectionView Events
//There are several events that will be triggered during the life of a collection view. These are intended to be handled from code external to the view.
//
//"collection:before:render" event
//
//Triggers just prior to the view being rendered

MyView = Ma.CollectionView.x({});

var myView = new MyView();

myView.on("collection:before:render", function(){
    alert("the collection view is about to be rendered");
});

myView.render();
//"collection:rendered" event
//
//A "collection:rendered" event will also be fired. This allows you to add more than one callback to execute after the view is rendered, and allows parent views and other parts of the application to know that the view was rendered.
//
    MyView = Ma.CollectionView.x({});

var myView = new MyView();

myView.on("collection:rendered", function(){
    alert("the collection view was rendered!");
});

myView.render();
//"collection:before:close" event
//
//Triggered just before closing the view.
//
    MyView = Ma.CollectionView.x({});

var myView = new MyView();

myView.on("collection:before:close", function(){
    alert("the collection view is about to be closed");
});
//
//myView.close();
//"collection:closed" event
//
//Triggered just after closing the view.
//
    MyView = Ma.CollectionView.x({ })

 myView = new MyView()

myView.on("collection:closed", function(){ alert("the collection view is now closed") })

myView.close()

//CollectionView render
//The render method of the collection view is responsible
// for rendering the entire collection.
// It loops through each of the items in the collection
// and renders them individually as an itemView.
//
//    The render method returns a jQuery deferred object,
// allowing you to know when the rendering completes.
// This deferred object is resolved after all of the child views have been rendered.
//



 MyCollectionView = Ma.CollectionView.x({ })

new MyCollectionView().render().done(function(){
    // all of the children are now rendered. do stuff here.
})
//CollectionView's itemView

//Specify an itemView in your collection view definition. This must be a Bb view object definition (not instance). It can be any Bb.View or be derived from Ma.ItemView.

    MyItemView = Ma.ItemView.x({});

Ma.CollectionView.x({ itemView: MyItemView })
//If you do not specify an itemView, an exception will be thrown stating that you must specify an itemView.
//
//    CollectionView: Automatic Rendering
//The collection view binds to the "add", "remove" and "reset" events of the collection that is specified.
//
//    When the collection for the view is "reset", the view will call render on itself and re-render the entire collection.
//
//    When a model is added to the collection, the collection view will render that one model in to the collection of item views.
//
//    When a model is removed from a collection (or destroyed / deleted), the collection view will close and remove that model's item view.
//
//CollectionView: Re-render Collection
//If you need to re-render the entire collection, you can call the view.render method. This method takes care of closing all of the child views that may have previously been opened.
//
//    CollectionView's appendHtml
//By default the collection view will call jQuery's .append to move the HTML contents from the item view instance in to the collection view's el.
//
//    You can override this by specifying an appendHtml method in your view definition. This method takes two parameters and has no return value.
//
//    Parameter el: the collection view's el, as a jQuery selector object.
//
//Parameter html: the HTML contents that were generated by the item view.
//
    Ma.CollectionView.x({ appendHtml: function(el, html){ el.prepend(html) } })
//CollectionView close
//CollectionView implements a close method,
// which is called by the region managers automatically.
// As part of the implementation, the following are performed:
//    unbind all bindTo events
//unbind all custom view events
//unbind all DOM events
//unbind all item views that were rendered
//remove this.el from the DOM
//call an onClose event on the view, if one is provided
//By providing an onClose event in your view definition, you can run custom code for your view that is fired after your view has been closed and cleaned up. This lets you handle any additional clean up code without having to override the close method.


    Ma.CollectionView.x({ onClose: function(){// custom cleanup or closing code, here
        }
    })

//Ma.CompositeView
//A CompositeView extends from CollectionView to be used as a composite view for scenarios where it should represent both a branch and leaf in a tree structure.
//
//    For example, if you're rendering a treeview control, you may want to render a collection view with a model and template so that it will show a parent item with children in the tree.
//
//You can specify a modelView to use for the model. If you don't specify one, it will default to the Ma.ItemView.
//


 LeafView = Ma.ItemView.x({ template: "leaf-template" })

CompositeView = Ma.CompositeView.x({

    template: "leaf-template",

    modelView: LeafView,

    itemView: LeafView
})



new CompositeView({ model: someModel, collection: someCollection })
//Composite Render
//A composite view returns a jQuery deferred object from the render method. This allows you to know when the rendering for the entire composite structure has been completed.

    MyComp = Ma.CompositeView.x({})

myComp = new MyComp().render().done(function(){
    // the entire composite is now rendered. do stuff here
});
//Model And Collection Rendering
//The model and collection for the composite view will re-render themselves under the following conditions:
//
//    When the collection's "reset" event is fired, it will re-render the entire list
//When the collection has a model added to it (the "add" event is fired), it will render that one item to the rendered list
//When the collection has a model removed (the "remove" event is fired), it will remove that one item from the rendered list
//You can also manually re-render either or both of them:
//
//    If you want to re-render everything, call the .render() method
//If you want to re-render the model's view, you can call .renderModel()
//If you want to re-render the collection's views, you can call .rendercollection()
//Events And Callbacks
//During the course of rendering a composite, several events will be triggered:
//
//    "composite:item:rendered" - after the modelView has been rendered
//"composite:collection:rendered" - after the collection of models has been rendered
//"composite:rendered" - after everything has been rendered
//Additionally, after the composite view has been rendered, an onRender method will be called. You can implement this in your view to provide custom code for dealing with the view's el after it has been rendered:
//
Ma.CompositeView.x({
    onRender: function(){
        // do stuff here
    }
});
//Ma.EventAggregator
//An event aggregator is an application level pub/sub mechanism that allows various pieces of an otherwise segmented and disconnected system to communicate with each other.
//
//    Basic Usage
//Ma provides an event aggregator with each application instance: MyApp.vent. You can also instantiate your own event aggregator:
//
    myVent = new Ma.EventAggregator();
//Passing an object literal of options to the constructor function will extend the event aggregator with those options:
//
    myVent = new Ma.EventAggregator({foo: "bar"});
//myVent.foo // => "bar"
//BindTo
//The EventAggregator extends from the BindTo object (see below) to easily track and unbind all event callbacks, including inline callback functions.
//
//    The bindTo method, though, has been proxied to only take 3 arguments. It assumes that the object being bound to is the event aggregator directly, and does not allow the bound object to be specified:
//
    vent = new Ma.EventAggregator();

vent.bindTo("foo", function(){
    alert("bar");
});

vent.unbindAll();

vent.trigger("foo"); // => nothing. all events have been unbound.
//Decoupling With An Event-Driven Architecture
//You can use an event aggregator to communicate between various modules of your application, ensuring correct decoupling while also facilitating functionality that needs more than one of your application's modules.
//
var vent = new Ma.EventAggregator();

vent.bind("some:event", function(){
    alert("Some event was fired!!!!");
});

vent.trigger("some:event");
//For a more detailed discussion and example of using an event aggregator with Bb applications, see the blog post: References, Routing, and The Event Aggregator: Coordinating Views In Bb.js
//
//Ma.BindTo
//The BindTo object provides event binding management and facilitates simple event binding and unbinding for any object that extends from Bb.Events.
//
//    Bind Events

 binder = _.x({}, Ma.BindTo);
 model = new MyModel();

 handler = { doIt: function(){} }

 binder.bindTo(model, "change:foo", handler.doIt)
 //You can optionally specify a 4th parameter as the context in which the callback method for the event will be executed:
//
    binder.bindTo(model, "change:foo", someCallback, someContext)
    //Unbind All Events
//You can call unbindAll to unbind all events that were bound with the bindTo method:
//
    binder.unbindAll()
    //This even works with in-line callback functions.
//
    Ma.TemplateCache
    //Formerly known as TemplateManager
//
//The TemplateCache provides a cache for retrieving templates from script blocks in your HTML. This will improve the speed of subsequent calls to get a template.
//
//    Basic Usage
//To use the TemplateCache, call it directly. It is not instantiated like other Ma objects.
//
//    Get A Template
//Templates are retrieved using a jQuery selector by default, and are handed back to you via a callback method. The template is returned as a plain string.
//
    Ma.TemplateCache.get("#my-template", function(template){
        // use the template here
    });
//Making multiple calls to get the same template will retrieve the template from the cache on subsequence calls:

    var a, b, c;
Ma.TemplateCache.get("#my-template", function(tmpl){a = tmpl});
Ma.TemplateCache.get("#my-template", function(tmpl){b = tmpl});
Ma.TemplateCache.get("#my-template", function(tmpl){c = tmpl});
//a === b === c; // => true
//Override Template Retrieval
//The default template retrieval is to select the template contents from the DOM using jQuery. If you wish to change the way this works, you can override the loadTemplate method on the TemplateCache object.
//


 Ma.TemplateCache.loadTemplate = function(templateId, callback){
    // load your template here, returning it or a deferred
    // object that resolves with the template as the only param
}


//For example, if you want to load templates asychronously from the server, instead of from the DOM, you could replace loadTemplate function.
//
//If a "template.html" file exists on the server, with this in it:
//
//<script id="my-template" type="text/template">
//<div>some template stuff</div>
//</script>
//Then the loadTemplate implementation may look like this:
 

Ma.TemplateCache.loadTemplate = function(templateId, callback){
    var that = this;
    var url = templateId + ".html";

    $.get(url, function(templateHtml){
        var template = $(tmplateHtml).find(templateId);
        callback(template);
    });
}


//This will use jQuery to asynchronously retrieve the template from the server. When the get completes, the callback function will select the template from the resulting HTML and then call the callback function to send it in to the template cache and allow it to be used for rendering.
//
//                                                                                                                                                                                                                                                                                     Clear Items From cache
//You can clear one or more, or all items from the cache using the clear method. Clearing a template from the cache will force it to re-load from the DOM (or from the overriden loadTemplate function) the next time it is retrieved.
//
//    If you do not specify any parameters, all items will be cleared from the cache:
//
//    Ma.TemplateCache.get("#my-template");
//Ma.TemplateCache.get("#this-template");
//Ma.TemplateCache.get("#that-template");
//
//// clear all templates from the cache
//Ma.TemplateCache.clear()
//If you specify one or more parameters, these parameters are assumed to be the templateId used for loading / caching:
//
//Ma.TemplateCache.get("#my-template");
//Ma.TemplateCache.get("#this-template");
//Ma.TemplateCache.get("#that-template");
//
//// clear 2 of 3 templates from the cache
//Ma.TemplateCache.clear("#my-template", "#this-template")
//Built In To ItemView
//If you're using Ma.ItemView, you don't need to manually call the TemplateCache. Just specify the template attribute of your view as a jQuery selector, and the ItemView will use the template manager by default.
//
//Ma.Callbacks
//The Callbacks object assists in managing a collection of callback methods, and executing them, in an async-safe manner.
//
//    Basic Usage
//There are only three methods:
//
//    add
//run
//setOptions
//The add method adds a new callback to be executed later.
//
//    The run method executes all current callbacks in, using the specified context for each of the callbacks, and supplying the provided options to the callbacks.
//
//    var callbacks = new Ma.Callbacks();
//
//callbacks.add(function(options){
//    alert("I'm a callback with " + options.value + "!");
//});
//
//callbacks.run(someContext, {value: "options"});
//This example will display an alert box that says "I'm a callback with options!". The executing context for each of the callback methods has been set to the someContext object, which can be any valid JavaScript object.
//
//    Advanced / Async Use
//The Callbacks executes each callback in an async-friendly manner, and can be used to facilitate async callbacks. The Ma.Application object uses Callbacks to manage initializers (see above).
//
//It can also be used to guarantee callback execution in an event driven scenario, much like the application initializers.
//
//    Ma Sample Apps
//There are several sample apps available.
//
//    BBCloneMail
//I'm building a medium sized app to demonstrate Ma. It's a simple clone of a GMail like interface, with email and contact management. There is no back end for data, currently. The sample app does run on top of Ruby and Sinatra, but all the data is hard coded into the HTML/JavaScript right now.
//
//    You can find BBCloneMail online at:
//
//    http://bbclonemail.heroku.com
//
//        And you can find the source code at:
//
//    http://github.com/derickbailey/bbclonemail
//
//        Steve Gentile' Contact Manager
//Steve Gentile is building two versions of the same contact manager app. One of them runs on NodeJS as a back-end, and the other runs on ASP.NET MVC as the back-end.
//
//    The NodeJS version is here:
//
//    https://github.com/sgentile/BbNodeContacts
//
//        And the ASP.NET MVC version is here:
//
//    https://github.com/sgentile/BbContacts
//
//        Compatibility And Requirements
//Theses libraries are require for the use, development, testing and documentation of Ma.
//
//    Runtime Requirements
//Ma currently works with the following versions of these libraries:
//
//    Bb v0.9.1
//Underscore v1.3.1
//jQuery v1.7.1
//While support for Zepto and Enderjs has been added, it is not officially tested against these libraries at this time.
//
//    Ma has not been tested against any other versions of these libraries. You may or may not have success if you use a version other than what it listed here.
//
//    Test Suite
//Ma is also tested with the Jasmine JavaScript test utility, using the Jasmine Ruby gem.
//
//    To get the test suite up and running, you need a Ruby installation with the latest RubyGems. Install the 'bundler' gem and then run 'bunle install' from the project's root folder. Then run rake jasmine to run the test suite, and load up http://localhost:8888 to see the test suite in action.
//
//Annotated Source Code
//I'm using Docco to generate the annotated source code.
//
//Release Notes
//v.6.3
//ItemView changes
//Calls a beforeRender and beforeClose method on the view, if it exists
//Triggers a item:before:render event, just prior to rendering
//Triggers a item:before:close and item:closed events, around the view's close method
//CollectionView changes
//Calls a beforeRender and beforeClose method on the view, if it exists
//Triggers a collection:before:render event before rendering
//Triggers a collection:before:close and collection:closed event, surrounding closing of the view
//The CollectionView and CompositeView now close child views before closing itself
//v0.6.2
//BREAKING: The CollectionView no longer has a reRender method. Call render instead
//BREAKING: The TemplateCache.get method now returns a plain string instead of a jQuery selector object
//Fixed a bug with closing and then re-using a Layout with defined regions
//Fixed a potential race condition for loading / caching templates where a template would be loaded multiple times instead of just once
//v0.6.1
//Fixed the composite view so that it renders the collection correctly when the collection is "reset"
//Fixed the composite view so that it re-renders correctly
//Fixed various deferred usages to only return promises, instead of the full deferred object
//v0.6.0
//BREAKING: Renamed LayoutManager to Layout
//BREAKING: Renamed RegionManager to Region
//BREAKING: Renamed TemplateManager to TemplateCache
//
//Layout
//
//BREAKING: Layout.render no longer returns the view itself, now returns a jQuery deferred object
//The .vent attribute is now available in the initializer method
//Ensures that regions select the $el within the Layout's $el instead of globally on the page
//Initialize the regions before the layout, allowing access to the regions in the onRender method of the layout
//Close the Layout's regions before closing the layout itself
//CompositeView
//
//BREAKING: CompositeView.render no longer returns the view itself, now returns a jQuery deffered object
//Will only render the collection once. You can call renderCollection explicitly to re-render the entire collection
//Will only render the model view once. You can call renderModel explicitly to re-render the model
//Correctly close and dispose of the model view
//Triggers various events during rendering of model view and collection view
//Calls 'onRender' method of composite view, if it exists
//ItemView
//
//BREAKING: ItemView.render no longer returns the view itself, now returns a jQuery deferred object
//Optimization to only call .toJSON on either model or collection, not both
//Trigger "item:rendered" method after rendering (in addition to calling onRender method of the view)
//CollectionView
//
//BREAKING: CollectionView.render no longer returns the view itself, now returns a jQuery deferred object
//Trigger "collection:rendered" method after rendering (in addition to calling onRender method)
//Large updates to the readme/documentation
//
//Heavy use of jQuery.Deferred() and jQuery.when/then to better support asynchronous templates and rendering
//v0.5.2
//
//BREAKING: Renamed CompositeRegion to LayoutManager
//Aliased CompsiteRegion to LayoutManager for backwards compatibility
//Bug fix for correctly initializing LayoutManager with specified options in constructor
//v0.5.1
//
//Controller methods fired from an AppRouter are now called with this set to the controller, instead of the router
//Fixed a bug in the CompositeView where the list wouldn't render when passing in a populated collection
//v0.5.0
//
//BREAKING: Extraced CompositeView out of the collection view
//Added CompositeView for managing leaf-branch/composite model structures
//Added CompositeRegion for managing nested views and nested region managers
//Added attachView method to RegionManager to attach existing view without rendering / replacing
//Specify how to attach HTML to DOM in region manager's show method
//v0.4.8
//
//Don't re-render an ItemView when the view's model "change" event is triggered
//v0.4.7
//
//Allow RegionManager to be instantiated with an el specified in the options
//Change how RegionManagers are added to an Application instance, to reduce memory usage from extraneous types
//v0.4.6
//
//AppRouter can have it's controller specified directly in the router definition or in the construction function call
//Extracted Ma.EventAggregator out in to it's own explicit object
//v0.4.5
//
//CollectionView closes existing child views before re-rendering itself, when "reset" event of collection is triggered
//CollectionView now has "initialEvents" method which configures it's initial events
//ItemView now has "initialEvents" method which configures it's initial events
//v0.4.4
//
//CollectionView renders itself when the view's collection "reset" event is fired
//ItemView renders itself when the view's model "change" event is fired
//ItemView renders itself when the view's collection "reset" event is fired
//v0.4.3
//
//Fixed bug with RegionManagers trying to select element before DOM is ready, to lazy-select the element on first use of show
//v0.4.2
//
//BREAKING: Removed the setOptions method from the Callbacks object
//Refactored Callbacks object to use a jQuery Deferred instead of my own code
//Fixed template manager's clear so it properly clears a single template, when only one is specified
//Refactored the RegionManager code to support several new features
//now support returning a jQuery deferred object from a view's render method
//now have a close method that you can call to close the current view
//now trigger a "view:show" and "view:close" event
//correctly remove reference to previous views, allowing garbage collection of the view
//now support the bindTo and unbindAll methods, for binding/unbinding region manager events
//v0.4.1
//
//Minor fix to context of template manager callback, to fix issue w/ async template loading
//v0.4.0
//
//BREAKING: Rewrote the template manager to be async-template loading friendly
//BREAKING: Dropping support for Bb v0.5.3 and below
//Added Ma.Callbacks to manage a collection of callbacks in an async-friendly way
//Guarantee the execution of app initializer functions, even if they are added after the app has been started.
//    App triggers "start" event after initializers and initializer events
//Updated to Bb v0.9.1
//v0.3.1
//
//Make region managers initialize immediately when calling app.addRegions
//v0.3.0
//
//BREAKING: view.el for ItemView and CollectionView is no longer a jQuery selector object. Use view.$el instead
//BREAKING: regionManger.el is no longer a jQuery selector object. Use regionManager.$el instead
//Updated to use Bb v0.9.0
//Updated to use Underscore v1.3.1
//Removed default itemView from the CollectionView definition
//CollectionView now explicitly checks for an itemView defined on it, and throws an error if it's not found
//v0.2.6
//
//Bind the context (this) of application initializer functions to the application object
//v0.2.5
//
//Added AppRouter, to reduce boilerplate routers down to simple configuration
//CollectionView can be treated as a composite view, rendering an model and a collection of models
//Now works with either jQuery, Zepto, or enter.js
//ItemView will throw an error is no template is specified
//v0.2.4
//
//Return this (the view itself) from ItemView and CollectionView render method
//Call onRender after the CollectionView has rendered itself
//v0.2.3
//
//Fixed global variable leaks
//Removed declared, but unused variables
//v0.2.2
//
//Fixed binding events in the collection view to use bindTo (#6)
//Updated specs for collection view
//Documentation fixes (#7)
//v0.2.1
//
//Added TemplateManager to cache templates
//CollectionView binds to add/remove and updates rendering appropriately
//ItemView uses TemplateManager for template retrieval
//ItemView and CollectionView set this.el = $(this.el) in constructor
//v0.2.0
//
//Added ItemView
//Added CollectionView
//Added BindTo
//Simplified the way extend is pulled from Bb
//v0.1.0
//
//Initial release
//Created documentation
//Generated annotated source code
//Legal Mumbo Jumbo (MIT License)
//Copyright (c) 2011 Derick Bailey, Muted Solutions, LLC
//
//Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
//    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
//    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
