//#Authentication differences
//Socket.io uses middleware now
//You can give a Socket.io server arbitrary functions
// via io.use()
//that are run when a socket is created. 
sv = require('http').createServer();
io = require('socket.io')(sv)
sett=function(){
    run=0
    io.use(function(k,n){run++; n()}) // 0 -> 1
    io.use(function(k, n) {run++; n()}) // 1 -> 2
    socket = require('socket.io-client')()
    socket.on('connect', function(){}) // run == 2 at this time
    //… so its cleaner to do auth via middleware now
    //The old io.set()
// and io.get() methods are deprecated
// and only supported for backwards compatibility.
// Here is a translation of an old authorization ex
// into middleware-style.
    io.set('authorization', function (handshakeData,fn) {
        // make sure the handshake data looks good
     fn(null, true); // error first, 'authorized' boolean second

})
    //vs.
    io.use(function(k,n){var handshakeData = k.request;
        // make sure the handshake data looks good as before
        // if error do this:
        // next(new Error('not authorized');
        // else just call next
        n()})
}
//Namespace authorization?
io.of('/namespace').use(function(k,n){
    var handshakeData=k.request;n()})
log=function(){

    //#Log differences
//Logging is now based on debug
//To print all debug logging,
// set the environment variable DEBUG to *.
// ie: DEBUG=* node index.js
//
//To print only socket.io related logging: DEBUG=socket.io:* node index.js.
//
//    To print logging only from the socket object: DEBUG=socket.io:socket node index.js.
//
//    This pattern should hopefully be making sense at this point. The names of the files in socket.io/lib are equivalent to their debug names.
//
//    Debug also works in the browser; logs are persisted to localstorage.
//    To use: open the developer console and type localStorage.debug = 'socket.io:*' (or any debug level) and then refresh the page. Everything is logged until you run localStorage.debug = ''
//
//See more at the debug documentation here.

}
short=function(){

//#Shortcuts
//In general there are some new shortcuts for common things.
// The old versions should still work,
// but shortcuts are nice.

//Broadcasting to all clients in default namespace
//Previously:

    io.sockets.emit('eventname', 'eventdata')
//Now:
    io.emit('eventname', 'eventdata');


//Neat. Note that in both cases,
// these messages reach all clients connected
// to the default ‘/’ namespace,
// but not clients in other namespaces.
//
//    Starting the server
//Previously:

    io = require('socket.io');
    k = io.listen(80,op);

//Now:

    io = require('socket.io');
    k= io(op);
}
cf=function(){



//io.set is gone
//Instead do cf
// in server initialization like this:

k = require('socket.io')({}) // options go here

//Options like log-level are gone. io.set('transports'),
// io.set('heartbeat interval'), io.set('heartbeat timeout',
// and io.set('resource')
// are still supported for backwards compatibility.

//    Setting resource path
//The previous resource option is equivalent
// to the new path option, but needs a / in the beginning.
// For example, the following configuration
k=io.connect('localhost:3000',{
    'resource': 'path/to/socket.io'})
//becomes
k=io.connect('localhost:3000', {
    'path': '/path/to/socket.io'})

}
parser=function() {

//#Parser / Protocol differences

//This is only relevant for updating things like
// socket.io implementations in other languages,
// custom socket.io clients, etc.
//
//    Difference 1 – packet encoding
//Parsing is now class based and asynchronous. Instead of returning a single encoded string, encode calls callback with an array of encodings as the only argument. Each encoding should be written to the transport in order. This is more flexible and makes binary data transport work. Here’s an example:
    enc = parser.encode(packet);
    $l(enc); // fully encoded packet
//vs.
    enc = new parser.Encoder()
    enc.encode(packet, function (enc) {
        for (var i = 0; i < enc.length; i++) {
            $l(enc[i])
            //encoded parts of the packet
        }
    })
//Difference 2 – packet decoding
//Decoding takes things a step further and is event-based.
// This is done because some objects (binary-containing) are
// both encoded and decoded in multiple parts.
// This example should help:
    packet = parser.decode(decoding)
    $l(packet); // formed socket.io packet to handle
//vs.
    decoder = new parser.Decoder()
    decoder.on('decoded', function (packet) {
        $l(packet)
    }) // formed socket.io packet to handle

    decoder.add(encodings[0]);
// say encodings is array of two encodings received from transport
    decoder.add(encodings[1]);
// after adding the last element,
// 'decoded' is emitted from decoder

}