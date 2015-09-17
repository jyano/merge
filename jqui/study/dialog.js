   //A wg's prototype object is the final argument passed to $.wg(). ' +  'So far, our examples have been using an empty object.' + Let's add a method to this object:


$.wg( "custom.superDialog", $.ui.dialog, {
    red: function() {


        this.element.css( "color", "red" );

        //Now the superDialog has a red() method that will change the color of its text to red.
// Note how the wg factory automatically sets this to the wg's instance object.

        testRed=function(){
          $( "<div>I am red</div>" ).superDialog().superDialog( "red" )
      }


    },
    open: function() {
        //  overrides dialog's open() method.'
        // Since dialogs automatically open by default, "open" will be logged when this code runs.


        console.log( "open" );

        // Invoke the parent wg's open().
        return this._super();
    }


})

function RedefiningWidgets(){
//
//jQuery UI 1.9 added the ability for wgs to redefine themselves.
//       Therefore, instead of creating a new wg, we can pass $.wg()
//   an existing wg's name and constructor. The following example adds t' +
//   'he same logging in open(), but doesn't create a new wg to do so.


$.wg( "ui.dialog", $.ui.dialog, {
    open: function() {
        console.log( "open" );
        return this._super();
    }
});

$( "<div>" ).dialog();
//With this approach you can extend an existing wg's ' +
//   'method and still have access to the original methods using _super() - all without creating a new wg.
//
//
    }


function Polymorphism() {
//One word of warning when interacting with wg extensions and their plugins.
// The parent wg's plugin cannot be used to invoke methods on elements that are child wgs.
// This is shown in the example below.
    $.wg("custom.superDialog", $.ui.dialog, {});
    dialog = $("<div>").superDialog();
// This works.
    dialog.superDialog("close");
// This doesn't.
    dialog.dialog("close");
//Above, the parent wg's plugin, dialog(), cannot invoke the close() method on an element that is a superDialog. For more on the invoking wg methods see Widget Method Invocation.
}
