//A Zombie View is just a view that is not in the DOM,
// but listens to and reacts to events --
// sometimes this behavior is expected, but not typically.
//
//    If the DOM Event handlers for the view are not properly removed,
// the view and it's in-memory HTML fragments will not be garbage collected.
// If the Bb.Event handlers are not unbound properly,
// you could have all sorts of bad behavior...
// such as a bunch of "Zombie" view triggering AJAX requests on models.
// This problem was very common on older versions of Bb
// prior to stopListening and listenTo
// especially if you shared models between views.
//
//In your code, you don't have a Zombie View,
// because you are properly closing your views.
//
//You can see the console.log because you are initializing
// the second view (and triggering the event still:alive) before you close the first view.
//
//    To switch views, you are calling:
//
//    mainApp.viewsManager.rederView(new app.views.test());
//    Calling new app.views.test() initializes
// the second view which triggers the event that the first listens to.

//        If you update your code to the following,
// you won't see the console.log anymore.
//
////baseRouter controller

baseController = {

    instructions: function(){mainApp.viewsManager.rederView(app.views.instructions);
        },
    beginTest: function(op) {mainApp.viewsManager.rederView(app.views.test);
        },
    rederView : function(ViewClass, rootEl) {
        //if DOM el isn't passed, set it to the default RootEl
        rootEl = rootEl || this.rootEl
        //close current view
        if (this.currentView) {this.currentView.close()}
        //store reference to next view
        this.currentView = new ViewClass()
        //render next view
        $(rootEl).html(this.currentView.render().el)
    }
}



//    And update rederView
//,
//    If you remove this line from your close method,
// you will have a zombie view and should see the console.log.
//
////unbind any model and collection events that the view is bound to
//        this.stopListening();
//
//
//    Zombie View Example
//
//    In the following code, I am creating 100 views,
// but only displaying 1 in the DOM.
// Every view contains the same model and listens to it's change event.
// When the view's <button> element is clicked,
// it updates the model which causes every view's model change handler to be executed,
// calling fetch 100 times... 100 AJAX requests!
//
//    The view's change handlers are called 100 times,
// because the view close method does not call this.stopListening()
// -- it's Bb event handlers are not properly removed.
//
        TestView = Bb.V.x({
            tagName: 'h1',
            i: function(op) {
                this.i = op.i;
                this.l2(op.md, 'change', function(md){md.fetch()}) },


            ev: { 'click button': function() {this.md.set("show_zombies", Date.now()) } },
            r: function() {
                var vw=this;
                vw.$el.A( "<button>Click To Test for Zombies!</button>")
                return this
            },

            close: function() { this.$el.E()
            // empty view html
            this.$el.off();
                // Whoops! Forgot to unbind Event listeners! (this view won't get garbage collected)
                this.stopListening()

            }
        })



model = new (Bb.Model.extend({
        fetch: function() {
            document.body.innerHTML += "MODEL.FETCH CALLED<br />"
        }

    }))


for (var i = 1; i < 101; i++) { if (v) {v.close() } }
v = new TestView({'i': i, 'model': model }).render()




ob={

//One of Backbone’s great advantages is that it changes very little. Up until the release of 0.9.9, the Events mixin used throughout the library provided the bare minimum of functions for listening to and triggering changes in application state: dispatch to trigger an event, on to listen for it, and off to stop listening.
//
//    on and off are enough to handle events. If a view representing a collection of items wanted to update whenever the collection changed, it could listen to the corresponding events using on:

// in collection view

    initialize: function () {
        this.collection.on('add', this.addItem, this);
        this.collection.on('remove', this.removeItem, this);
        this.collection.on('change', this.updateItem, this);
    },
//It would also be a good idea to use off to clean up when the view is closed. But in doing so, a problem emerges. Since the events are being managed by the collection, the view has no direct channel for cleaning them up. Each event must either be unbound individually:

    close: function () {this.collection.off('add', this.addItem);
        this.collection.off('remove', this.removeItem);
        this.collection.off('change', this.updateItem) },
//Or, if all use the same context, with a slightly obscure cleanup-by-context call:

    close: function () {this.collection.off(null, null, this)},
//Not terrible, but an easy fix can make it a whole lot better.

// listenTo and stopListening provide the same functionality as on and off,
// but with a trick.
// Instead of defining events in terms of the object that triggers them,
// listenTo inverts management of the handlers
// to the listening object.
// Since the listener now knows exactly which handlers pertain to it,
// cleanup becomes much more straightforward

    initialize: function(){
        this.listenTo(this.collection, 'add', this.addItem);
        this.listenTo(this.collection, 'remove', this.removeItem);
        this.listenTo(this.collection, 'change', this.updateItem)
    },
    close: function(){
        this.stopListening()
    }
}


//For practical purposes, though, this will rarely happen in a view: in its infinite wisdom, Backbone 0.9.9 includes a call to stopListening() in the default view remove() method.

