//Namespaces   means assigning dif endpoints or paths.
//      minimizes TCP conns
//  separates concerns by introducing separation   bwn comm  chans


//#Default namespace for both client and server namespace is '/'

 // identified by io.sockets (or simply io):

// the following two will emit to all the sockets connected to `/`

io.sockets.emit('hi', 'everyone'); io.emit('hi', 'everyone'); // short form

//Each namespace emits a conn event that receives
// each Socket instance as a parameter

io.on('connection', function(k){
    k.on('disconnect', function(){})
})


//To set up a custom namespace,  call  'of' server-side:


nsp=io.of('/my-namespace').on('connection', function(k){
    $l('someone connected')
}).emit('hi', 'everyone!');

//On the client side,
// you tell Socket.IO client to connect to that namespace:

k = io('/my-namespace')

//Important note: The namespace is an implementation detail
// of the Socket.IO protocol,
// and is not related to the actual URL
// of the underlying transport,
// which defaults to /k.io/…



//#Rooms
//Within each namespace,
// you can also define arbitrary channels
// that sockets can join and leave.

//#Joining and leaving
//You can call join to subscribe the k
// to a given channel:


io.on('connection', function(k){k.join('some room')})

//And then simply use to or in
// (they are the same) when broadcasting or emitting:


io.to('some room').emit('some event')

//To leave a channel you call leave in the same fashion as join.

//#Default room
//Each Socket in Socket.IO is identified by a random, unguessable, unique identifier Socket#id.
// For your convenience, each k automatically joins a room identified by this id.
//
//    This makes it easy to broadcast messages to other sockets:


io.on('connection', function(k){
    k.on('say to someone', function(id, msg){
            k.broadcast.to(id).emit('my message', msg)})
})


//#Disconnection
//Upon disconnection, sockets leave all the channels
// they were part of automatically,
// and no specially teardown is needed on your part.
//
//#Sending messages from the outside-world
//In some cases, you might want to emit events to sockets
// in Socket.IO namespaces / rooms from outside the context
// of your Socket.IO processes.
//
//    There’s several ways to tackle this problem,
// like implementing your own channel to send messages into the process.
//
//    To facilitate this use case, we created two modules:
//
//    socket.io-redis
//socket.io-emitter
//By implementing the Redis Adapter:
//
//    var io = require('socket.io')(3000);
//var redis = require('socket.io-redis');
//io.adapter(redis({ host: 'localhost', port: 6379 }));
//you can then emit messages from any other process to any channel
//
//var io = require('socket.io-emitter')();
//setInterval(function(){
//    io.emit('time', new Date);
//}, 5000);