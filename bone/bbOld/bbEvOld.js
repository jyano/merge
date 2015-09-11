
/*
 Events is a module that can be mixed in to any object,
 giving the object the ability to bind and trigger custom named events.
 Events do not have to be declared before they are bound,
 and may take passed arguments.
 */



_.x( ob= {}, bb.Ev )

//Bind a cb fn to an ob.
// The cb will be invoked whenev  the ev  is fired.
// If you have a large num  of dif  evs on a page,
// the convention is to use colons to nspace them:
// "poll:start", or "change:selection".
// The ev str  may also be a sp-delim  ls of sev  evs...
book.on("change:title change:author",
    '...')

ob.on("alert", function(msg) { alert("Triggered " + msg) })
ob.trg("alert", "an event")


// For example, to make a handy event dispatcher that can coordinate events
// among different areas of your application:


dispatcher = _.cl(bb.Ev)
//To supply a context value for this when the callback is invoked,
// pass the optional third argument: model.on('change', this.render, this)

ob.on(ev, fn, [ctx]) // Alias: bind

//Callbacks bound to the special "all" event will be triggered
// when any event occurs, and are passed the name of the event as the first argument. For example, to proxy all events from one ob to another:


proxy.on("all", function(evN) {  ob.trg(evN)  })

//All Backbone event methods also support an event map syntax, as an alternative to positional arguments:

book.on({
    "change:title": titleView.update,
    "change:author": authorPane.update,
    "destroy": bookView.remove
})


ob.off([ev], [fn], [ctx]) //Alias: unbind

//Remove a previously-bound callback function from an ob. If no context is specified, all of the versions of the callback with different contexts will be removed. If no callback is specified, all callbacks for the event will be removed. If no event is specified, callbacks for all events will be removed.


ob.off("change", onChange) // Removes just the `onChange` callback.
ob.off("change") // Removes all "change" callbacks.

ob.off(null, onChange) // Removes the `onChange` callback for all events.
ob.off(null, null, context) // Removes all callbacks for `context` for all events.

ob.off()// Removes all callbacks on `ob`.



//Note that calling model.off(),
// for example, will indeed remove all events on the model
// — including events that Backbone uses for internal bookkeeping.

ob.trg(ev, ['*g'])

//Trigger callbacks for the given event,
// or space-delimited list of events.
// Subsequent arguments to trigger will be passed along to the event callbacks.


ob.once(ev, fn, [ctx])
//Just like on, but causes the bound cbto fire 1x, then rm-ed
// note: When mult  evs are passed in using the space separated syntax, the ev  will fire once for every ev  you passed in, not once for a combination of all events


ob.listenTo(oth, ev, fn)

//Tell an ob to listen to a particular ev  on an other ob.
// The advantage of using this form,
// instead of other.on(ev, cb, ob),
// is that l2 allows the ob to keep track of the evs,
// and they can be rm-ed all at once later on.
// The cb will always be called with ob as ctx

v.l2(md, 'change', vw.render )

//Tell an ob to stop listening to evs.
// Either call stopListening with no args
//  to have the ob rm all   its registered cbs     v.stopListening()
// or be more precise by telling it
//       to rm just the evs it's listening to on a specific ob,   v.stopListening(md)
//         or a specific ev,
//         or just a specific cb    ob.stopListening([oth], [ev], [fn])


ob.listenToOnce(oth, ev, fn)

// Just like listenTo, but causes the bound callback to fire only once before being removed.


/*

 bb ob itself mixes in Evs,  can be used to emit   glob  evs

 list  bb evs:

 "change" (md, opts) —  md's attrs  changed.
 "change: [attribute]" (md, val , opts) —   spec  attr  updated.
 "destroy" (md, cl, ops) —  md  destroyed.
 "invalid" (md, error, ops) —   md's validation fails on the client.



 "add" (md, cl, ops) —   md   added to a cl
 "remove" (md, cl, ops) —   md   removed from a cl.
 "update" (cl, ops) — single ev  trgd after any num of mds have been added or removed from a cl



 "reset" (cl, ops) —   cl's entire contents  replaced.
 "sort" (cl, ops) —  cl h  re-sorted.






 "route:[name]" (params) — Fired by  rtr: when a spec  rt is matched.
 "route" (route, params) — Fired by  rtr: when any rt has been matched.
 "route" (rtr, rt, pams) — Fired by hist:  when any rt has been matched



 "request" (md_or_cl, xhr, ops) —   md or cl has started a rq to the srvr
 "sync" (md_or_cl, resp, ops) —     md or cl has been sucssfly synced with the srvr

 "error" (md_or_cl, resp, ops) —   md's or cl's request to the srvr has failed.


 "all" — fires for ANY trgd ev, passing the ev  n as the g[0]



 */


/*
 from book



 Events
 Events arebasic inversion of control. Instead of having one fn call another by name, second fn is registered ashandler to be called when spec event occurs.

 The part of your app that has to know how to call other part of your app has been inverted.
 This is core thing that makes it possible for your business logic to not have to know about how your user interface works and is most powerful thing about bb Events system.

 Mastering evs is one of quickest ways to become more productive with bb, so let’s takecloser look at bb’s event md.

 bb.Events is mixed into other bb “classes”, including:

 bb
 bb.Md
 bb.Cl
 bb.Rt
 bb.History
 bb.Vw
 Note that bb.Events is mixed into bb object. Since bb is globally visible, it can be used assimple event bus:

 bb.on('event', fn() {$l('Handled bb event');});
 bb.trigger('event'); // logs: Handled bb event
 on(), off(), and trigger()
 bb.Events can give any object ability to bind and trigger cust evs.
 We can mix this module into any object easily and there isn’trequirement for evs to be declared before being bound tocb handler.

 Example:

 myOb = {};

 // Mixin
 _.x(myOb, bb.Events);

 // Addcust event
 myOb.on('dance', fn(msg){
 $l('We triggered ' + msg);
 });

 // Trigger cust event
 myOb.trigger('dance', 'our event');
 If you’re familiar with jQ cust evs or concept of Publish/Subscribe,
 bb.Events providessystem that is very similar with on being analogous to subscribe and trigger being similar to publish.

 on bindscb fn to object, as we’ve done with dance in above example. The cb is invoked whenever event is triggered.

 The official bb.js documentation recommends namespacing event names using colons if you end up using quitefew of these on your page. e.g.:

 myOb = {};

 // Mixin
 _.x(myOb, bb.Events);

 fn dancing (msg) { $l("We started " + msg); }

 // Add namespaced cust evs
 myOb.on("dance:tap", dancing);
 myOb.on("dance:break", dancing);

 // Trigger cust evs
 myOb.trigger("dance:tap", "tap dancing. Yeah!");
 myOb.trigger("dance:break", "break dancing. Yeah!");

 // This one triggers nothing as no listener listens for it
 myOb.trigger("dance", "break dancing. Yeah!");
 A special all event is made avail in case you would like notifications for every event that occurs on object
 (e.g., if you would like to screen evs insingle loc). The all event can be used as follows:

 myOb = {};

 // Mixin
 _.x(myOb, bb.Events);

 fn dancing (msg) { $l("We started " + msg); }
 myOb.on("all", fn(eventName){  $l("The name of event passed was " + eventName) });

 // This time each event will be caught withcatch 'all' event listener
 myOb.trigger("dance:tap", "tap dancing. Yeah!");
 myOb.trigger("dance:break", "break dancing. Yeah!");
 myOb.trigger("dance", "break dancing. Yeah!");
 off rms cb fns that were prevly bound to object. Going back to our Publish/Subscribe comparison, think of it as unsubscribe for cust evs.

 To rm dance event we prevly bound to myOb, we would simply do:

 myOb = {};

 // Mixin
 _.x(myOb, bb.Events);

 fn dancing (msg) { $l("We " + msg); }

 // Add namespaced cust evs
 myOb.on("dance:tap", dancing);  myOb.on("dance:break", dancing);

 // Trigger cust evs. Each will be caught and acted upon.
 myOb.trigger("dance:tap", "started tap dancing. Yeah!");
 myOb.trigger("dance:break", "started break dancing. Yeah!");



 myOb.off("dance:tap");// Removes event bound to object

 // Trigger cust evs again, but one is logged.
 myOb.trigger("dance:tap", "stopped tap dancing."); // won't be logged as it's not listened for
 myOb.trigger("dance:break", "break dancing. Yeah!");
 To rm all cbs for event we pass event name (e.g., move)
 to off() met on object event is bound to.

 If we wish to rm spec cb, we can pass that cb as second parameter:

 myOb = {};  _.x(myOb, bb.Events);

 fn dancing(msg){$l("We dancing. " + msg); }
 fn jumping(msg){$l("We jumping. " + msg); }

 // Add two listeners to same event
 myOb.on("move", dancing);
 myOb.on("move", jumping);

 // Trigger evs. Both listeners are called.
 myOb.trigger("move", "Yeah!");

 // Removes spec listener
 myOb.off("move", dancing);

 // Trigger evs again. One listener left.
 myOb.trigger("move", "Yeah, jump, jump!");
 Finally, as we have seen in our prev examples, trigger triggerscb forspec event (orspace-separated list of evs). e.g.:

 myOb = {}; _.x(myOb, bb.Events);

 fn doAction(msg){$l("We "+msg)}


 myOb.on("dance", doAction); myOb.on("jump", doAction); myOb.on("skip", doAction)
 myOb.trigger("dance", 'just dancing.');

 // Multiple evs
 myOb.trigger("dance jump skip", 'very tired from so much action.');
 trigger can pass multiple arguments to cb fn:

 myOb = {}; _.x(myOb, bb.Events);

 fn doAction(action, duration) {  $l("We are " + action + ' for ' + duration )}

 // Add event listeners
 myOb.on("dance", doAction);myOb.on("jump", doAction); myOb.on("skip", doAction);

 // Passing multiple arguments to single event
 myOb.trigger("dance", 'dancing', "5 minutes");

 // Passing multiple arguments to multiple evs
 myOb.trigger("dance jump skip", 'on fire', "15 minutes");
 l2() and stopListening()
 While on() and off() add cbs directly to observed object, l2() tells object to listen for evs on another object,
 allowing listener to keep track of evs for which it is listening. stopListening() can subsequently be called on listener to tell it to stop listening for evs:

 a = _.x({}, bb.Events); b = _.x({}, bb.Events); c = _.x({}, bb.Events);

 // add listeners to A for evs on B and C
 a.l2(b, 'anything', fn(e){ $l("anything")});
 a.l2(c, 'everything', fn(e){ $l("everything"); });

 // trigger event
 b.trigger('anything'); // logs: anything happened

 // stop listening
 a.stopListening();

 // A does not receive these evs
 b.trigger('anything'); c.trigger('everything');
 stopListening() can also be used to selectively stop listening based on event, md, or cb handler.

 If you use on and off and rm views and their corresponding mds at same time, there are generally no problems.
 Butproblem arises when you rmview that had registered to be notified about evs onmd, but you don’t rm md or call off to rm view’s event handler.
 Since md hasreference to view’s cb fn, JavaScript garbage collector cannot rm view from memory. This is called“ghost view” and isform of memory leak
 which is common since mds generally tend to outlive corresponding views during app’s lifecycle. For details on topic andsol, check this excellent article by Derick Bailey.

 Practically, every on called on object also requires off to be called in order for garbage collector to do its job. l2() changes that,
 allowing Vws to bind to Md notifications and unbind from all of them with just one call - stopListening().

 The default impl of Vw.rm() makescall to stopListening(), ensuring that any listeners bound using l2() are unbound before view is destroyed.

 view = new bb.Vw(); b = _.x({}, bb.Events);

 view.l2(b, 'all', fn(){ $l(true); });
 b.trigger('anything');  // logs: true

 view.l2(b, 'all', fn(){ $l(false); });
 view.rm(); // stopListening() implicitly called
 b.trigger('anything');  // does not log anything


 Events and Vws
 WithinVw, there are two types of evs you can listen for: DOM evs and evs triggered using Event API.
 It is important to understand difs in how views bind to these evs and context in which their cbs are invoked.

 DOM evs can be bound to using Vw’s evs property or using jQ.on().
 Within cbs bound using evs property, this refers to Vw object;
 whereas any cbs bound directly using jQ will have this set to handling DOM el by jQ.
 All DOM event cbs are passed event object by jQ. See delegateEvents() in bb documentation for additional details.

 Event API evs are bound as described in this section.
 If event is bound using on() on observed object,context parameter can be passed as third argument.
 If event is bound using l2() then within cb this refers to listener.
 The arguments passed to Event API cbs depends on type of event.
 See Catalog of Events in bb documentation for details.

 The following example illustrates these difs:

 <div id="td">
 <input type='checkbox' />
 </div>

 Vw = bb.V.x({    el: '#td',
 ev: {'click [type="checkbox"]': '$d' }, // bind DOM ev using evs pop

 i: fn(){this.q.$(this.jq$d); this.on('apiEvent', this.cb) },  // bind to DOM event using jQ // bind to API event

 $d: fn(ev){$l("evs handler for " + this.q.oh());  this.trigger('apiEvent', ev.type)    },    // 'this' is view
 jq$d: fn(ev) { $l("jQ handler for " + this.outerHTML)   }, // 'this' is handling DOM el
 cb: fn(evTy){$l("ev ty: "+evTy)}
 })


 view = new Vw()

 */

function likeABoss(){/*  Using events like a boss



 You've been using events since you wrote your first view and got it to listen to a model's change event.

 But this chapter is about using events for
 creating a message bus
 for inter-component communication
 that will allow each piece (or module) or your app to work standalone.


 Remember the Views chapter,
 “…they should still work, as in not throw errors, when rendered on their own”
 In this chapter, we'll make the UI components interactible even,
 and insofar as they relate to other components,
 the interaction should produce no errors.


 There's a number of pubsub libraries for JavaScript out there.
 If you're using Backbone, they're all a waste of time.
 The Backbone object itself works as an event hub that your components
 (views, models, collections, etc)
 can listen on,
 and since that object will always be visible to pretty much every component you write,
 there's no reason why you'd step out of it.

 You can think of it as a global message exchange.
 You'll dump on it anything that's not of interest to an immediate module relationship.
 An immediate relationship is, for example, a view and its model.

 Now if for example your app flashes a message
 that stays visible for a few seconds every time a Book is created,
 then this flash component works a lot like an addon
 which isn't tied to the view that does the model creation,
 nor the model itself.

 You want to be able to create books without getting an error complaining
 this “flash component” doesn't exist.

 So we should set up our Book model to broadcast a message when a new one is created:

 class Book extends Backbone.Model
 initialize: ->
 @on 'change:id', ->  Backbone.trigger 'books:created', @


 The component can then go:
 class Flash extends Backbone.View
 initialize: ->
 @listenTo Backbone, 'books:created', @show



 show: (model) ->
 @model = model
 @render()
 # Display the message...
 Now think for a second about what we accomplished: we know that what Flash needs in order to work is for an event to be triggered on Backbone named books:created. That's it. Now in the course of testing this component, so long as we do that and pass an instance of Book to it (or a mock), the whole of its functionality can be specced independently of any other piece of UI.

 There are no hard rules on this, but once you start using global events a lot, it'll be a lot easier to track them if you name them properly.
 As recommended in the Events docs, you can use colons to namespace them. It's a good strategy to namespace them in a format like subject-as-plural:action, and you can forego the pluralisation if there'll never be more than one instance of the subject as far as the client-side codebase goes. So books:created, user:sign-in, and so on.



 In the previous example we used, we connected a second view-like component (Flash) to a model, but this can be used to get two views to talk to each other too.
 In Lisant, the main menu on the left hand side is a separate component to the panes it expands when the corresponding button is clicked. A cut down example of how it does it looks like this:
 class MainMenu extends Backbone.View
 template: JST['main_menu']
 events:
 'click .toggle-feeds-button': 'clickToggleFeeds'

 clickToggleFeeds: ->
 Backbone.trigger 'feeds:toggle'
 While the feeds component goes:
 class FeedsPane extends Backbone.View
 template: JST['feeds_pane']

 initialize: ->
 @listenTo Backbone, 'feeds:toggle', @toggle

 toggle: ->
 @$el.toggleClass 'visible'
 Referring to an instance of FeedsPane directly from within MainMenu would mean creating a hard reference to it, and that's not good architecture, as we'd now need them to be instanced in a specific order, as well as having their core functionality tied to each other. It'll be harder to test, and harder to refactor the more we add these hard references.
 Granted, you'll have a hard time separating everything from everything, and it's not worth it. For instance, a list element view class is used by a UI component to render a collection. It's fine for the UI component to refer to these classes directly when creating instances to render each entry. In general (not always), so long as you apply this to interactions between distinct regions of the UI, you're doing it right.
 ★ ★ ★
 You can use events to create a relationship between browser features and your app. That's in fact the right way to do it, as you want to keep your app as independent from it as possible.
 One good example is infinite scrolling. Unlike tracking a click on an element in a view's template (for which you'd use the events object), if you're scrolling the page itself as opposed to scrolling an element, the event source will be the window object, and you need it to be visible to your app.
 The best way to do it is by introducing a small module whose role is watching for the event and broadcasting it via the Backbone object. That way you can avoid tying all other views that may be interested in the event to the DOM.
 As a bonus, we can also “write” to this by getting it to it watch the Backbone object for an event which can be triggered when you want to scroll the page to a specific entry, or to the top maybe.
 # Scrolling module
 # ================

 # Object this module exports.
 Scrolling = {}

 # Element that we're tracking scrolling.
 $el = $ window

 # Trigger when this many pixels far from the bottom.
 tolerance = 40

 # Let this module listen to events.
 _.extend Scrolling, Backbone.Events

 # Tracks page scrolling and fires an event when it gets near the bottom.
 Scrolling.trackScrolling = ->
 $el.on 'scroll', _.throttle (event) =>
 body = document.body
 threshold = body.scrollHeight - window.innerHeight - tolerance
 if body.scrollTop > threshold
 Backbone.trigger 'page:scrollbottom'
 , 1000

 # Listens to an event which scrolls the page to an offset when triggered.
 Scrolling.trackScrollTo = ->
 @listenTo Backbone, 'page:scrollto', (offset) ->
 document.body.scrollTop = offset

 # Run this module by calling initialize().
 Scrolling.initialize = ->
 @trackScrolling()
 @trackScrollTo()
 This recipe goes along perfectly with the link headers pagination recipe from the Models, collections & data chapter. Say we have a list of books which we want to add infinite scrolling to. The view can then listen to the event like so:
 class BooksList extends Backbone.View
 # ...

 initialize: ->
 @listenTo Backbone, 'page:scrollbottom', @scrolledBottom

 scrolledbottom: ->
 if @collection.link?.next?
 @collection.fetch remove: no, url: @collection.link.next
 else
 # No further books to fetch, display some feedback.
 This is terrible UX but, so the point can be demonstrated,
 let's say when another user leaves a comment on a book, we want to scroll the page to it,
 and that the method getOffsetForModel magically returns the Y axis offset for a book:
 # ...

 initialize: ->
 @listenTo Backbone, 'page:scrollbottom', @scrolledBottom
 @listenTo @collection, 'comment', @commentCreated

 commentCreated: (model) ->
 offset = @getOffsetForModel model
 Backbone.trigger 'page:scrollto', offset
 We now have an event which works like a command:
 when invoked, pass an offset to it and the page will scroll to a given offset.
 Last, should we remove the Scrolling module above from the app,
 the functionality will be removed, but the app won't break per se.



 In the spirit of henceforth adding components as features in our app,
 which will only add what it can do rather than become a hard dependency,
 another such relationship can be created between
 anything that sends the browser to a different URL
 and the router.

 This pattern works if your app has only one router,
 as should be the case if you followed the advice given on the previous chapter.
 class Router extends Backbone.Router

 # ...

 initialize: ->
 @listenTo Backbone, 'router:go', @go

 # This is just a shortcut to navigate(), and it always triggers
 # the controller, which is what you'll want most of the time.
 go: (route) ->
 @navigate route, trigger: yes
 For example, views that send the user to a different page altogether can then use this event to do so.
 If a router doesn't exist because none was ever initialised by the app, nothing will happen.
 class BookListEntry extends Backbone.View
 template: JST['books/list_entry']
 events:
 'click .title': 'clickTitle'

 clickTitle: ->
 Backbone.trigger 'route:go', "/books/#{@model.id}"


 By now you should have the main idea:
 events allow you to avoid having to refer to a class/module
 from within another class/module directly (by name).

 This eliminates scenarios such as modules needing to be executed in order.
 And as a consequence,
 it lets you literally assemble the UI from pieces.


 There's a lot more you can do with this, though.
 Another idea:
 if you're using jQuery, globally trapping status codes such as 500
 and displaying an appropriate message,
 or even detecting offline/online status to provide the user with feedback.


 */


    /*

     Backbone 0.9.9 has included a new mechanism for managing event bindings on objects
     so that you don't end up with objects that are immune to garbage collection.


     It's simple to convert your views to use the new listenTo method. For every instance of:

     model.on("change", changeCallback)
     collection.on("reset", resetCallback)


     change it to:

     // model
     this.listenTo(model, "change", changeCallback);


     // collection
     this.listenTo(collection, "reset", resetCallback);

     And with that change,
     your view becomes aware of all of the object event bindings and when the view is destroyed,

     it will automatically tear down those events for you in View.remove().




     One of Backbone’s great advantages is that it changes very little.
     Up until the release of 0.9.9,
     the Events mixin used throughout the library provided the bare minimum of functions
     for listening to and triggering changes in application state: dispatch to trigger an event,
     on to listen for it, and off to stop listening.

     on and off are enough to handle events.
     If a view representing a collection of items wanted to update whenever the collection changed,
     it could listen to the corresponding events using on:
     */
    // in collection view

    initialize= function () {
        this.collection.on('add', this.addItem, this)
        this.collection.on('remove', this.removeItem, this)
        this.collection.on('change', this.updateItem, this)

    }


    //It would also be a good idea to use off to clean up when the view is closed. But in doing so, a problem emerges. Since the events are being managed by the collection, the view has no direct channel for cleaning them up. Each event must either be unbound individually:

    close: function () {
        this.collection.off('add', this.addItem);
        this.collection.off('remove', this.removeItem);
        this.collection.off('change', this.updateItem);
    }

// Or, if all use the same context, with a slightly obscure cleanup-by-context call:

    close: function () { this.collection.off(null, null, this) }
// Not terrible, but an easy fix can make it a whole lot better.

// listenTo and stopListening provide the same functionality as on and off, but with a trick. Instead of defining events in terms of the object that triggers them, listenTo inverts management of the handlers to the listening object. Since the listener now knows exactly which handlers pertain to it, cleanup becomes much more straightforward.

    initialize: function () {
        this.listenTo(this.collection, 'add', this.addItem);
        this.listenTo(this.collection, 'remove', this.removeItem);
        this.listenTo(this.collection, 'change', this.updateItem) }

    close: function () {this.stopListening() }

    /*

     For practical purposes, though, this will rarely happen in a view: in its infinite wisdom,
     Backbone 0.9.9 includes a call to stopListening() in the default view remove() method.
     */

    /*
     If you're triggering an event on v1 with:

     this.trigger('myEvent'); // this is v1
     then you'd have to listen to events from v1 with:

     v1.on('myEvent', this.myFunc); // this is, say, v2 here.
     The events aren't global,
     they come from specific objects
     and you have to listen to those specific objects if you want to receive their events.

     If you bind the views directly to each other,
     you'll quickly have a tangled mess where everything is directly tied to everything else.
     The usual solution is to create your own event bus:

     // Put this where ever it makes sense for your application, possibly
     // a global, possible something your your app's global namespace, ...
     var event_bus = _({}).extend(Backbone.Events);
     Then v1 would send events through the event_bus:

     event_bus.trigger('myEvent');
     and v2 would listen to the event_bus:

     this.listenTo(event_bus, 'myEvent', this.myFunc);
     I've also switched from bind to listenTo since listenTo makes it easier to prevent zombies.

     Demo: http://jsfiddle.net/ambiguous/yb9TY/
     */


    /*  How To: Detect Backbone Memory Leaks


     In his article about zombie views,
     Derick Bailey did a nice job of explaining how Backbone views can remain in the JavaScript memory heap
     even after they are no longer part of the DOM.



     Using methods such as remove() and unbind()
     within a custom close method of our views will get the clean up process started,
     however, there are a few more things I recommend doing in order to safeguard against memory leaks.

     When you create a view in JavaScript,
     you’re creating DOM nodes and usually binding event listeners to them.
     When you remove these nodes from the DOM, their event listeners hold reference to them.
     As a result, the JavaScript engine will not Garbage Collect the nodes
     as long as there are references to them still in scope. I’ll give you an example.

     Note: This was written a the time of Backbone 0.9.2,
     prior to the addition of listenTo().

     Let’s start by creating a simple model.

     */

    Model = Backbone.Model.extend({ defaults: {  text: 'Zombie' } })


// Next, we’ll create a view for the model. Note the close function that removes the view from the DOM.


    View = Backbone.View.extend({

        tagName: 'li',

        className: 'zombie',

        template: _.template('<%= text %>'),

        initialize: function () {
            this.model.on('change', this.render, this); // Event listener on model
            this.options.parent.on('close:all', this.close, this); // Event listener on parent
        },

        events: { 'click': 'close' },

        render: function () {
            this.$el.html( this.template( this.model.toJSON() ) )
            return this },

        close: function () {

            $l('Kill: ', this)

            this.unbind(); // Unbind all local event bindings
            this.remove(); // Remove view from DOM

        }})
    //Create and Application Level View.

    AppView = Backbone.View.extend({
        el: '#app',
        events: { 'click #add': 'addView',  'click #remove-all': 'closeAll'  },
        addView: function () {model = new Model()
            view = new View({ model: model,   parent: this // A reference to the parent view
            })


            $('#bin').append(view.render().el)},

        closeAll: function () { this.trigger('close:all') }

    })


    $(function() {  var appView = new AppView() })


    $.dI('app', [
        $.h1('Zombie Generator 3000'),
        $.bt('add').id('add'),
        $.bt('remove all').id('remove-all'),
        $.ol().id('bin')

    ])}