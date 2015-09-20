// This method gives you an easier way of calling super
// when you're using Bb in plain javascript.
// It lets you avoid writing the constructor's name multiple
// times. You still have to specify the name of the method.
//
// So instead of having to write:
//
//   User = Bb.Model.x({
//     save: function(attrs) {
//       this.beforeSave(attrs);
//       return User.__super__.save.apply(this, arguments);
//     }
//   });
//
// You get to write:
//
//   User = Bb.Model.x({
//     save: function(attrs) {
//       this.beforeSave(attrs);
//       return this._super("save", arguments);
//     }
//   });
//








Backbone

;(function(Bb) {

    // The super method takes two parameters: a method name
    // and an array of arguments to pass to the overridden method.
    // This is to optimize for the common case of passing 'arguments'.
    function _super(methodName, args) {

        // Keep track of how far up the prototype chain we have traversed,
        // in order to handle nested calls to _super.
        this._superCallObjects || (this._superCallObjects = {});
        var currentObject = this._superCallObjects[methodName] || this,
            parentObject  = findSuper(methodName, currentObject);
        this._superCallObjects[methodName] = parentObject;

        var result = parentObject[methodName].apply(this, args || []);
        delete this._superCallObjects[methodName];
        return result;
    }

    // Find the next object up the prototype chain that has a
    // different implementation of the method.
    function findSuper(methodName, childObject) {
        var object = childObject;
        while (object[methodName] === childObject[methodName]) {
            object = object.constructor.__super__;
        }
        return object;

    }

    _.each(["Model", "Collection", "View", "Router"], function(klass) {
        Bb[klass].prototype._super = _super;
    });

})(Bb);
//raw  backbone_super_spec.js
context = window.describe;

describe("_super", function() {
    var Friend, Animal, Mammal, Pet, Dog, CockerSpaniel;

    beforeEach(function() {
        Friend = Bb.Model.x({
            greet: function(personName, timeOfDay) {
                return "Good " + timeOfDay + ", " + personName + ". My name is " + this.get("name") + ".";
            }
        })

        // super needs to work even when there are classes in the
        // inheritance hierarchy that do not override the method.
        Animal = Friend.x({ eats: "food" });

        Mammal = Animal.x({
            greet: function(personName, timeOfDay) {
                return this._super("greet", arguments) + " I'm a mammal.";
            }
        })

        Pet = Mammal.x({ livesInCaptivity: true });

        Dog = Pet.x({
            greet: function(person, timeOfDay) {
                return this._super("greet", arguments) + " Ruff ruff!";
            }
        })

        CockerSpaniel = Dog.x({ cute: true });

        spyOn(Friend.prototype, 'greet').andCallThrough();
        spyOn(Mammal.prototype, 'greet').andCallThrough();
        spyOn(Dog.prototype,    'greet').andCallThrough();
    });

    context("when used only once in the inheritance hierarchy", function() {
        context("in the class's own implementation of the method", function() {
            beforeEach(function() {
                this.friend = new Mammal({ name: "Benjie" });
            });

            itCallsTheOverriddenMethodCorrectly();
        });

        context("in a superclass's implementation of the method", function() {
            beforeEach(function() {
                this.friend = new Pet({ name: "Benjie" });
            });

            itCallsTheOverriddenMethodCorrectly();

            it("does not call the object's own method more than once", function() {
                this.friend.greet("Barbara", "morning");
                expect(Mammal.prototype.greet.callCount).toBe(1);
            });
        });
    });

    context("when used twice in the inheritance hierarchy", function() {
        context("with the first case happening in the class's own implementation", function() {
            beforeEach(function() {
                this.friend = new Dog({ name: "Benjie" });
            });

            itCallsTheOverriddenMethodCorrectly();

            it("calls both of the ancestor classes' methods", function() {
                var greeting = this.friend.greet("Barbara", "morning");
                expect(greeting).toContain("I'm a mammal.");
            });
        });

        context("with the first case happening in a superclass's implementation", function() {
            beforeEach(function() {
                this.friend = new CockerSpaniel({ name: "Benjie" });
            });

            itCallsTheOverriddenMethodCorrectly();

            it("does not call the object's own method more than once", function() {
                this.friend.greet("Barbara", "morning");
                expect(Dog.prototype.greet.callCount).toBe(1);
            });
        });
    });

    context("when the overridden method calls super by referencing its constructor explicitly", function() {
        beforeEach(function() {
            Mammal.prototype.greet = function(personName, timeOfDay) {
                return Mammal.__super__.greet.apply(this, arguments) + " I'm a mammal.";
            }
            spyOn(Mammal.prototype, 'greet').andCallThrough();

            this.friend = new CockerSpaniel({ name: "Benjie" });
        });

        itCallsTheOverriddenMethodCorrectly();
    });

    function itCallsTheOverriddenMethodCorrectly() {
        it("passes the given arguments to the overridden method", function() {
            var greeting = this.friend.greet("Barbara", "morning");
            expect(greeting).toContain("Good morning, Barbara.");
        });

        it("calls the overridden method on the recieving object", function() {
            var greeting = this.friend.greet("Barbara", "morning");
            expect(greeting).toContain("My name is Benjie.");
        });

        it("calls the overridden method only once", function() {
            this.friend.greet("Barbara", "morning");
            expect(Friend.prototype.greet.callCount).toBe(1);
            expect(Mammal.prototype.greet.callCount).toBe(1);
        });

        it("can be called multiple times with the same results", function() {
            var greeting = this.friend.greet("Barbara", "morning");
            expect(this.friend.greet("Barbara", "morning")).toBe(greeting);
            expect(this.friend.greet("Barbara", "morning")).toBe(greeting);
        });
    }
});


