//Client API
//#IO(url:String, opts:Object):Socket
//Exposed as the io global
// in window if using the
// standalone build
// (eg: /socket.io/socket.io.js or the CDN),
// or the result of calling require('socket.io-client').


//    When called,
// creates a new Manager for the given URL,
// and attempts
//to reuse an existing Manager for subsequent calls,
// unless multiplex op is passed with false.
// Passing this op is equiv of passing
// 'force new connection': true.



//    The rest of the options are passed to
// the Manager constructor (see below
//for details).


//A Socket instance is returned for
// the namespace specified by the
//pathname in the URL, defaulting to /.
// For example,
// if the url is
//http://localhost/users,
// a transport connection will be established to
//    http://localhost and a Socket.IO connection
// will be established to
//        /users.


//#IO#protocol
//Socket.io protocol revision number
// this client works with.

//#IO#Socket //Reference to // Socket constructor.

//#IO#Manager
//Reference to Manager constructor.


//#IO#Emitter//Reference to Emitter constructor.




//#Manager(url:String, opts:Object)
//A Manager represents a connection
// to a given Socket.IO server.
// One or
//more Socket insts are assoc
// w the manager.
// The manager
//can be accessed through
// io property
// of each Socket inst

//   opts  also passed
// to engine.io upon
// initialization of the
//underlying Socket.

ops=function() {

//– reconnection whether to reconnect automatically (true)
//– reconnectionDelay how long to wait before attempting a new
//    reconnection (1000)
//– reconnectionDelayMax maximum amount
// of time to wait between
//reconnections (5000).
// Each attempt increases the reconnection by
//the amount specified by reconnectionDelay.
//– timeout connection timeout before a connect_error
//and connect_timeout events are emitted (20000)
}

ev=function(){

//connect. Fired upon a successful connection.
//    connect_error. Fired upon a connection error.

//    Pams:
//Object error object
//connect_timeout.
// Fired upon a connection timeout.
//    reconnect.
// Fired upon a successful reconnection.


//Pams:
//Number reconnection attempt number
//reconnect_attempt.
// Fired upon an attempt to reconnect.
// reconnecting.
// Fired upon an attempt to reconnect.



//Pams:
//Number reconnection attempt number
//reconnect_error. Fired upon a reconnection attempt error.


//    Parameters:
//Object error object
//reconnect_failed. Fired when couldn’t reconnect within reconnectionAttempts
//The events above are also emitted on the individual sockets that
//reconnect that depend on this Manager.


//#Manager#reconnection(v:Boolean):Manager
//Sets the reconnection op,
// or returns it if no pams
//are passed.


//#Manager#reconnectionAttempts(v:Boolean):Manager
//Sets  reconnectionAttempts op,
// or returns it if no pams passed.


//#Manager#reconnectionDelay(v:Boolean):Manager
//Sets the reconectionDelay op,
// or rets it if no pams
//are passed.


//#Manager#reconnectionDelayMax(v:Boolean):Manager
//Sets reconectionDelayMax op,
// or rets it if no pams
//are passed.

//#Manager#timeout(v:Boolean):Manager
//Sets the timeout op, or returns it if no pams
//are passed.


}


skEv=function(){

//#Socket
//Events
//connect. Fired upon connecting.
//    error. Fired upon a connection error
//Parameters:
//    Object error data
//disconnect. Fired upon a disconnection.
//    reconnect.
// Fired upon a successful reconnection.



//    Parameters:
//Number reconnection attempt number
//reconnect_attempt. Fired upon an
// attempt to reconnect.
//    reconnecting. Fired upon an
// attempt to reconnect.
//    Parameters:
//Number reconnection attempt number
//reconnect_error. Fired upon a reconnection attempt
// error.

//    Parameters:
//Object error object
//reconnect_failed. Fired when couldn’t reconnect
// within reconnectionAttempts

}