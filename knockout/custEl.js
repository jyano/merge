 MSEDTR=function() {z() // ex: declares a component, injects two instances of it into a view


     ko._('message-editor', tmpl, function (p) {this.text = $o(p.text||'happy')})




 }

 /*
 MARKUP=function(){z()


//Sometimes you may want to create a component that receives
// markup and uses it as part of its output.
//    Consider a special list component that can be invoked as follows:

ok.$('my-special-list', {items: someArrayOfPeople}).A(//$("<!-- Look, Im putting markup inside a custom element -->"),
    'The person' ,
    $.em().bT('name'), $.em().bT('age') , 'years old.')


 $('<template>').id("my-special-list-template").A(
     $.h3('Here is a special list'),
     $.uE("{ data: myItems, as: 'myItem' }").A(

         $.li().A(
             $.h4('Here is another one of my special items'),
       // '<!-- ko template: { nodes: $componentTemplateNodes, data: myItem } --><!-- /ko -->'))
             ok.$('my-special-list',{items:'someArrayOfPeople'}).A(
  //'<!-- Look, I'm putting markup inside a custom element -->',
                 'The person', $.em().bT('name'),  'is', $.em().bT('age'),'years old.'))
     )

ko._('my-special-list', {
    t: { element: 'my-special-list-template' },
    m: function(params) {this.myItems = params.items}
})

ok({
    someArrayOfPeople: ko.observableArray([
        { name: 'Lewis', age: 56 },
        { name: 'Hathaway', age: 34 }
    ])
})

//This “special list” example does nothing more than insert a
// heading above each list item. But the same technique
// can be used to create sophisticated grids, dialogs, tab sets, and so on,
// since all that is needed for such UI elements is common UI markup
// (e.g., to define the grid or dialog’s heading and borders) wrapped around arbitrary supplied markup.
//
//    This technique is also possible when using components without
// custom elements, i.e., passing markup when using the component binding directly.
 }
 CUSTTAGNAMES=function(){
     z()

//    If you want to have different custom element tag names,
// you can override getComponentNameForNode to control this. For example,
//
     ko.cm.getComponentNameForNode = function(node) {

         var tagNameLower = node.tagName && _.tL(node.tagName)
         if (ko.cm.iR(tagNameLower)) {return tagNameLower}         // If the element's name exactly matches a preregistered// component, use that component
         else if (tagNameLower === "special-element") { return "MySpecialComponent"}// For the element <special-element>, use the component// "MySpecialComponent" (whether or not it was preregistered)
         else {return null; }// Treat anything else as not representing a component
     }

//You can use this technique if, for example, you want to control which subset of
// registered components may be used as custom elements.
//
    ko.$('my-custom-element', { })//No config needed

//Alternatively, you can override getComponentNameForNode to control
// dynamically which elements map to which component names,
// independently of preregistration.
}
 COMBINE=function() {
     z()
//    Note: Combining custom elements with regular bindings
//A custom element can have a regular data-bind attribute
// (in addition to any params attribute)
     ko.$('products-list', {category: 'chosenCategory'}).bVs('shouldShowProducts')


//However, it does not make sense to use bindings that would modify
// the element’s contents, such as the text or template bindings,
// since they would overwrite the template injected by your component.
//
//    Knockout will prevent the use of any bindings that use
// controlsDescendantBindings, because this also would clash
// with the component when trying to bind its viewmodel to
// the injected template. Therefore if you want to use a control
// flow binding such as if or foreach, then you must wrap it around
// your custom element rather than using it directly on the custom element, e.g.,:
//

//$("<!-- ko if: someCondition --><products-list></products-list> <!-- /ko -->")

//or:
     $.ulE('allProducts').A(ko.$('product-details', {product: '$data'}))

     //Note: Custom elements cannot be self-closing
//You must write <my-custom-element></my-custom-element>,
// and not <my-custom-element />. Otherwise, your custom element is not closed and subsequent elements will be parsed as child elements.
//    This is a limitation of the HTML specification and is outside the scope of what Knockout can control.
// HTML parsers, following the HTML specification, ignore any self-closing slashes (except on a small number of special “foreign elements”, which are hardcoded into the parser). HTML is not the same as XML.

 }
 RAMPAMS=function() {
     z()


//Advanced: Accessing $raw parameters
//Consider the following unusual case, in which useObservable1, observable1, and observable2 are all observables:

     ok.$('some-component', {
         myExpr: 'useObservable1() ? observable1 : observable2'
     })
//Since evaluating myExpr involves reading an observable (useObservable1), KO will supply the parameter to the component as a computed property.
//
//    However, the value of the computed property is itself an observable. This would seem to lead to an awkward scenario, where reading its current value would involve double-unwrapping (i.e., params.myExpr()(), where the first parentheses give the value of the expression, and the second give the value of the resulting observable instance).
//
//This double-unwrapping would be ugly, inconvenient, and unexpected, so Knockout automatically sets up the generated computed property (params.myExpr) to unwrap its value for you. That is, the component can read params.myExpr() to get the value of whichever observable has been selected (observable1 or observable2), without the need for double-unwrapping.
//
//    In the unlikely event that you don’t want the automatic unwrapping, because you want to access the observable1/observable2 instances directly, you can read values from params.$raw. For example,
//
     function MyComponentViewModel(p) {
         var currentObservableInstance = p.$raw.myExpr();
     }// Now currentObservableInstance is either observable1 or observable2// and you would read its value with "currentObservableInstance()"


//This should be a very unusual scenario,
// so normally you will not need to work with $raw.
 }
     */

 DIKE= function(){z()


     ko._('message-editor',[
             'Message:',
             $.ip().bV('text'), '( length: ', $.spT('text().length'), ' )'],
         function(p){this.text=  $o('wow')})


     $.d().A(

//         ko.$('message-editor', {text:'text'}), ko.$('message-editor', {text:'text'}) ,

         //$.sp('First instance, without parameters'),

         ko.$('message-editor'),

       //  $.h4('Second instance, passing parameters'),
         ko.$('message-editor', {text: 'Hello, world!'})
     )





     ok({text: $o('wow')})


     }



 //Knockout observables provide the basic features necessary to support reading/writing values
 // and notifying subscribers when that value changes.
 // In some cases, though, you may wish to add additional functionality to an observable.
 // This might include adding additional properties to the observable or
 // intercepting writes by placing a writable computed observable in front of the observable.
 // Knockout extenders provide an easy and flexible way to do this type of augmentation to an observable.
 //
 //    How to create an extender
 //Creating an extender involves adding a function to the ko.extenders object.
 // The function takes in the observable itself
 // as the first argument and any options in the second argument.
 // It can then either return the observable or return something new
 // like a computed observable that uses the original observable in some way.
 //
 //    This simple logChange extender subscribes to the observable and uses the console to write any changes along with a configurable message.
 //
     ko.extenders.logChange = function(target, option) {
         target.subscribe(function(newValue) {$l(option + ": " + newValue);})
         return target
     }

 //You would use this extender by calling the extend function of an observable
 // and passing an object that contains a logChange property.

     this.firstName =$o("Bob")
         .extend({logChange: "first name"})

 //If the firstName observable’s value was changed to Ted, then the console would show first name: Ted.


/*
 function ex1() {
     //    Live Example 1: Forcing input to be numeric
     //This example creates an extender that forces writes to an observable to be numeric rounded to a configurable level of precision. In this case, the extender will return a new writable computed observable that will sit in front of the real observable intercepting writes.
     //<p><input data-bind="value: myNumberOne" /> (round to whole number)</p>
     //<p><input data-bind="value: myNumberTwo" /> (round to two decimals)</p>
     ko.extenders.numeric = function (target, precision) {//create a writable computed observable to intercept writes to our observable
         var result = ko.pureComputed({
             read: target,  //always return the original observables value
             write: function (newValue) {
                 var current = target(),
                     roundingMultiplier = M.pow(10, precision),
                     newValueAsNum = isNaN(newValue) ? 0 : parseFloat(+newValue),
                     valueToWrite = M.round(newValueAsNum * roundingMultiplier) / roundingMultiplier
                 if (valueToWrite !== current) {
                     target(valueToWrite)
                 }   //only write if it changed
                 else {//if the rounded value is the same, but a different value was written, force a notification for the current field
                     if (newValue !== current) {
                         target.notifySubscribers(valueToWrite)
                     }
                 }
             }
         }).extend({notify: 'always'})
         result(target())//initialize with current value to make sure it is rounded appropriately
         return result
     } //return the new computed observable

     function AppViewModel(one, two) {
         this.myNumberOne = $o()(one).extend({numeric: 0});
         this.myNumberTwo = $o()(two).extend({numeric: 2})
     }

     ko.applyBindings(new AppViewModel(221.2234, 123.4525));
     //Note that for this to automatically erase rejected values from the UI, it’s necessary to use .extend({ notify: 'always' }) on the computed observable. Without this, it’s possible for the user to enter an invalid newValue that when rounded gives an unchanged valueToWrite. Then, since the model value would not be changing, there would be no notification to update the textbox in the UI. Using { notify: 'always' } causes the textbox to refresh (erasing rejected values) even if the computed property has not changed value.


 }
 function ex2() {


     //    Live Example 2: Adding validation to an observable
     //This example creates an extender that allows an observable to be marked as required. Instead of returning a new object, this extender simply adds additional sub-observables to the existing observable. Since observables are functions, they can actually have their own properties. However, when the view model is converted to JSON, the sub-observables will be dropped and we will simply be left with the value of our actual observable. This is a nice way to add additional functionality that is only relevant for the UI and does not need to be sent back to the server.//ith
     //<p data-bind="css: { error: firstName.hasError }">
     //<input data-bind='value: firstName, valueUpdate: "afterkeydown"' />
     //<span data-bind='visible: firstName.hasError, text: firstName.validationMessage'> </span>
     //</p>
     //<p data-bind="css: { error: lastName.hasError }">
     //<input data-bind='value: lastName, valueUpdate: "afterkeydown"' />
     //<span data-bind='visible: lastName.hasError, text: lastName.validationMessage'> </span>
     //</p>

     ko.extenders.required = function (target, overrideMessage) {//add some sub-observables to our observable
         target.hasError = $o();
         target.validationMessage = $o()
         function validate(newValue) {
             target.hasError(newValue ? false : true);
             define
             a
             function to

             do validation
                 target.validationMessage(newValue ? "" : overrideMessage || "This field is required")
         }

         validate(target())//initial validation
         target.subscribe(validate); //validate whenever the value changes
         return target;
     } //return the original observable

     function AppViewModel(first, last) {
         this.firstName = ko.observable(first).extend({required: "Please enter a first name"});
         this.lastName = ko.observable(last).extend({required: ""});
     }

     ko.applyBindings(new AppViewModel("Bob", "Smith"));
     //Applying multiple extenders
     //
     //More than one extender can be applied in a single call to the .extend method of an observable.
     //
     this.firstName = ko.observable(first).extend({required: "Please enter a first name", logChange: "first name"});
     //In this case, both the required and logChange extenders would be executed against our observable.
 }
 */