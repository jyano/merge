(function (root, factory) {
    if (typeof exports === 'object' && typeof require === 'function') {
        module.exports = factory(require("backbone"));
    } else if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(["backbone"], function(Bb) {
            // Use global variables if the locals are undefined.
            return factory(Bb || root.Bb);
        });
    } else {
        factory(Bb);
    }
}(this, function(Bb) {
// A simple module to replace `Bb.sync` with *localStorage*-based
// persistence. Models are given GUIDS, and saved into a JSON object. Simple
// as that.

// Generate four random hex digits.
    function S4() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };

// Generate a pseudo-GUID by concatenating random hexadecimal.
    function guid() {
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    };

    function isObject(item) {
        return item === Object(item);
    }

    function contains(array, item) {
        var i = array.length;
        while (i--) if (array[i] === item) return true;
        return false;
    }

    function extend(obj, props) {
        for (var key in props) obj[key] = props[key]
        return obj;
    }

    function result(object, property) {
        if (object == null) return void 0;
        var value = object[property];
        return (typeof value === 'function') ? object[property]() : value;
    }

// Our Store is represented by a single JS object in *localStorage*. Create it
// with a meaningful name, like the name you'd give a table.
// window.Store is deprectated, use Bb.LocalStorage instead
    Bb.LocalStorage = window.Store = function(name, serializer) {
        if( !this.localStorage ) {
            throw "Bb.localStorage: Environment does not support localStorage."
        }
        this.name = name;
        this.serializer = serializer || {
            serialize: function(item) {
                return isObject(item) ? JSON.stringify(item) : item;
            },
            // fix for "illegal access" error on Android when JSON.parse is passed null
            deserialize: function (data) {
                return data && JSON.parse(data);
            }
        };
        var store = this.localStorage().getItem(this.name);
        this.records = (store && store.split(",")) || [];
    };

    extend(Bb.LocalStorage.prototype, {

        // Save the current state of the **Store** to *localStorage*.
        save: function() {
            this.localStorage().setItem(this.name, this.records.join(","));
        },

        // Add a model, giving it a (hopefully)-unique GUID, if it doesn't already
        // have an id of it's own.
        create: function(model) {
            if (!model.id && model.id !== 0) {
                model.id = guid();
                model.set(model.idAttribute, model.id);
            }
            this.localStorage().setItem(this._itemName(model.id), this.serializer.serialize(model));
            this.records.push(model.id.toString());
            this.save();
            return this.find(model);
        },

        // Update a model by replacing its copy in `this.data`.
        update: function(model) {
            this.localStorage().setItem(this._itemName(model.id), this.serializer.serialize(model));
            var modelId = model.id.toString();
            if (!contains(this.records, modelId)) {
                this.records.push(modelId);
                this.save();
            }
            return this.find(model);
        },

        // Retrieve a model from `this.data` by id.
        find: function(model) {
            return this.serializer.deserialize(this.localStorage().getItem(this._itemName(model.id)));
        },

        // Return the array of all models currently in storage.
        findAll: function() {
            var result = [];
            for (var i = 0, id, data; i < this.records.length; i++) {
                id = this.records[i];
                data = this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
                if (data != null) result.push(data);
            }
            return result;
        },

        // Delete a model from `this.data`, returning it.
        destroy: function(model) {
            this.localStorage().removeItem(this._itemName(model.id));
            var modelId = model.id.toString();
            for (var i = 0, id; i < this.records.length; i++) {
                if (this.records[i] === modelId) {
                    this.records.splice(i, 1);
                }
            }
            this.save();
            return model;
        },

        localStorage: function() {
            return localStorage;
        },

        // Clear localStorage for specific collection.
        _clear: function() {
            var local = this.localStorage(),
                itemRe = new RegExp("^" + this.name + "-");

            // Remove id-tracking item (e.g., "foo").
            local.removeItem(this.name);

            // Match all data items (e.g., "foo-ID") and remove.
            for (var k in local) {
                if (itemRe.test(k)) {
                    local.removeItem(k);
                }
            }

            this.records.length = 0;
        },

        // Size of localStorage.
        _storageSize: function() {
            return this.localStorage().length;
        },

        _itemName: function(id) {
            return this.name+"-"+id;
        }

    });

// localSync delegate to the model or collection's
// *localStorage* property, which should be an instance of `Store`.
// window.Store.sync and Bb.localSync is deprecated, use Bb.LocalStorage.sync instead
    Bb.LocalStorage.sync = window.Store.sync = Bb.localSync = function(method, model, options) {
        var store = result(model, 'localStorage') || result(model.collection, 'localStorage');

        var resp, errorMessage;
        //If $ is having Deferred - use it.
        var syncDfd = Bb.$ ?
            (Bb.$.Deferred && Bb.$.Deferred()) :
            (Bb.Deferred && Bb.Deferred());

        try {

            switch (method) {
                case "read":
                    resp = model.id != undefined ? store.find(model) : store.findAll();
                    break;
                case "create":
                    resp = store.create(model);
                    break;
                case "update":
                    resp = store.update(model);
                    break;
                case "delete":
                    resp = store.destroy(model);
                    break;
            }

        } catch(error) {
            if (error.code === 22 && store._storageSize() === 0)
                errorMessage = "Private browsing is unsupported";
            else
                errorMessage = error.message;
        }

        if (resp) {
            if (options && options.success) {
                if (Bb.VERSION === "0.9.10") {
                    options.success(model, resp, options);
                } else {
                    options.success(resp);
                }
            }
            if (syncDfd) {
                syncDfd.resolve(resp);
            }

        } else {
            errorMessage = errorMessage ? errorMessage
                : "Record Not Found";

            if (options && options.error)
                if (Bb.VERSION === "0.9.10") {
                    options.error(model, errorMessage, options);
                } else {
                    options.error(errorMessage);
                }

            if (syncDfd)
                syncDfd.reject(errorMessage);
        }

        // add compatibility with $.ajax
        // always execute callback for success and error
        if (options && options.complete) options.complete(resp);

        return syncDfd && syncDfd.promise();
    };

    Bb.ajaxSync = Bb.sync;

    Bb.getSyncMethod = function(model, options) {
        var forceAjaxSync = options && options.ajaxSync;

        if(!forceAjaxSync && (result(model, 'localStorage') || result(model.collection, 'localStorage'))) {
            return Bb.localSync;
        }

        return Bb.ajaxSync;
    };

// Override 'Bb.sync' to default to localSync,
// the original 'Bb.sync' is still available in 'Bb.ajaxSync'
    Bb.sync = function(method, model, options) {
        return Bb.getSyncMethod(model, options).apply(this, [method, model, options]);
    };

    return Bb.LocalStorage;
}));
//Collection = Bb.Collection.extend({lS: new Bb.LocalStorage("SomeCollection")})

LSTD=function(){$.x();$Ms('BBlS')


    Todo = Bb.M.x({

        defaults: function(){return {title: "empty todo...", order: Todos.nextOrder(), done: false}},
        initialize: function() {if (!this.get("title")) {this.set({title: this.defaults().title})}},
        toggle: function() {this.save({done: !this.get("done")})}})


    TodoList = Bb.Collection.extend({   model: Todo,  localStorage: new Bb.LocalStorage("todos-backbone"),
        done: function() {return this.filter(function(todo){ return todo.get('done'); });},
        remaining: function() {return this.without.apply(this, this.done())},
        nextOrder: function() {if (!this.length) return 1;return this.last().get('order') + 1;},
        comparator: function(todo) {return todo.get('order')} })

    Todos = new TodoList



    TodoView = Bb.V.x({

        tagName:  "li",
        //template: _.template($('#item-template').html()),
        events: {"click .toggle"   : "toggleDone", "dblclick .view"  : "edit", "click a.destroy" : "clear", "keypress .edit"  : "updateOnEnter", "blur .edit"      : "close"},
        initialize: function() {this.listenTo(this.model, 'change', this.render);this.listenTo(this.model, 'destroy', this.remove);},
        render: function() {this.$el.html(this.template(this.model.toJSON()));
            this.$el.toggleClass('done', this.model.get('done'));
            this.input = this.$('.edit');return this;},
        toggleDone: function() {this.model.toggle();},
        edit: function() {this.$el.addClass("editing");this.input.focus();},

        close: function() {var value = this.input.val();
            if (!value) {this.clear();}
            else {this.model.save({title: value});this.$el.rK("editing");}},

        updateOnEnter: function(e) {if (e.keyCode == 13) this.close()},

        clear: function() {this.model.destroy()}
    })


    AppView = Bb.V.x({

        el: $("#todoapp"),
       // statsTemplate: _.template($('#stats-template').html()), // Our template for the line of statistics at the bottom of the app.
        events: {"keypress #new-todo":  "createOnEnter", "click #clear-completed": "clearCompleted", "click #toggle-all": "toggleAllComplete" },

        initialize: function() {
            this.input = this.$("#new-todo");
            this.allCheckbox = this.$("#toggle-all")[0];

            this.listenTo(Todos, 'add', this.addOne);
            this.listenTo(Todos, 'reset', this.addAll);
            this.listenTo(Todos, 'all', this.render);

            this.footer = this.$('footer');
            this.main = $('#main');

            Todos.fetch()

        },

        render: function() {var done = Todos.done().length, remaining = Todos.remaining().length;
            if (Todos.length) {this.main.show();this.footer.show();
                this.footer.html(this.statsTemplate({done: done, remaining: remaining}))}
            else { this.main.hide(); this.footer.hide() }

            if(!this.allCheckbox){$l('!this.allCheckbox')}
            else {
                this.allCheckbox.checked = !remaining
            }
        },

        addOne: function(todo) {var view = new TodoView({model: todo}); this.$("#todo-list").append(view.render().el);},
        addAll: function() { Todos.each(this.addOne, this) },
        createOnEnter: function(e) {if (e.keyCode != 13) {return}
            if (!this.input.val()) {return}; Todos.create({title: this.input.val()});this.input.val('');},
        clearCompleted: function() {_.invoke(Todos.done(), 'destroy');return false;},
        toggleAllComplete: function () {Todos.each(function (todo) {todo.save({'done': this.allCheckbox.checked}) })}

    })


    App = new AppView


}


