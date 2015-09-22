
I released a streaming module for Socket.IO.
                                      This module enables you to send any data
like files bidirectionally with Stream API of Node.js.

    https://github.com/nkzawa/socket.io-stream

Example

What you have to do is just to wrap sockets with Socket.io-stream, then you can send streams as usual.

// Client

    io = require('socket.io-client');

ss = require('socket.io-stream');


socket = io.connect('http://localhost');

sr = ss.crSr();

ss(socket).e('foo', sr);
$f.crRSr('foo.txt').p(sr);


//Receiving the stream is the same,
// just create a wrapped socket.

// Server
io = require('socket.io').listen(80);

ss = require('socket.io-stream');

io.on('cn', function(k) {ss(k).on('foo', function(sr) {sr.p($f.crWSr('foo.txt'))})})



//The library works fine on the browser too.
//
//    How it works
//
//This module add some events to Socket.IO,
//    and communicates with remote streams
//through these events. Chunks are sent on the
//timing of the stream’s method calls like
//_write and _read one by one.
//    Due to the base64 encoding overhead,
//    data transferring is not so efficient.
//    Unfortunately that’s a limitation of Socket.IO.
//
