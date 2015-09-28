



//    Event: 'uncaughtException'#
//Emitted when an exception bubbles all the way back to the event loop.
// If a listener is added for this exception, the default action
// (which is to print a stack trace and exit) will not occur.
//


    pc.on('uncaughtException', function (err) {
        $l('Caught exception: ' + err);
    });// listen for uncaughtException:

    _.sT(function () {
        $l('This will still run.');
    }, 500);

//// Intentionally cause an exception, but don't catch it.
//nonexistentFunc();
//$l('This will not run.');
//Note that uncaughtException is a very crude mechanism for exception handling.
//
//    Don't use it, use domains instead. If you do use it,
// restart your application after every unhandled exception!
//
//Do not use it as the node.js equivalent of On Error Resume Next.
// An unhandled exception means your application - and by extension node.js itself - is in an undefined state. Blindly resuming means anything could happen.
//
//    Think of resuming as pulling the power cord when you are upgrading your system.
// Nine out of ten times nothing happens - but the 10th time, your system is bust.
//
//    You have been warned.

