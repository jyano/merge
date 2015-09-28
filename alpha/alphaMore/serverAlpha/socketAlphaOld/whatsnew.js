 //The server will do some basic analysis
// on that data, store it and publish the data
// to a dashboard.
// The dashboard will receive the information
// and display it using the Epoch charting
// library (fastly.github.io/epoch)





//In index.js we're using Express' express.static function
// to declare that all files in the public folder can be served directly.
// Let's create a capture.html in the public directory.

//Run node index.js in your working directory from a command prompt
// and navigate to http://localhost:3000/capture.html in your browser.
// Make sure you see that file being served.
// Now we can add Socket.IO to index.js.


    var server = require( ‘http’ ).Server( app );
var io = require( ‘socket.io’ )( server );
io.on( ‘connection’, function( socket ) {
    console.log( ‘We have a connection!’ );
} );


//A reference to the running server is gained via require ('http').Server( app) and Socket.IO can then attach to that server using var io = require('socket.io')(server). We also bind to the connection event using io.on('connection, function() {} ) and log to the connection when the event is triggered. This event signifies that a connection from a client has been detected.
//
//Finally, we need to add some JavaScript to capture. html to connect to Socket.IO.
//
//<script src=”/bower_components/socket.io-client/socket.io.js”></script>

var socket = io( 'localhost:3000' );
socket.on( 'connect', function() {
    console.log( 'connected' );
} );




//To achieve this we've included the Socket.IO client library,
// created a new socket connection using io( 'localhost:3000' )
// and bound to the connect event so we know when the server
// connection has been established.
//
//Reload capture.html and open up the JavaScript console
// to check for the connected log message.
// Look at the prompt you used to execute node index.js
// and you'll see We have a connection!

//Capturing data
//
//With the basics in place we can now start capturing data from the client.
// We'll use capture.html as a way of developing
// and testing this functionality.
//
//The information we're going to capture,
// and ultimately display, is as follows:
// that a connection has been established,
// what page URL the user is viewing
// and a couple of the user's browser capabilities
// such as Touch and HTML5 Video support.

//<script src=”/bower_components/socket.io-client/socket.io.js”></script>
//<script src=”/bower_components/modernizer/modernizr.js”></script>
//<script>


 k=io('localhost:3000/capture')
 k.on('connect', function(){
     k.emit( 'client-data', {
         url: window.location.href,
         touch: Modernizr.touch,
         video: Modernizr.video
     })
})



 io.of('/capture').on('connection', function(k){

     k.on('client-data', function(d){$l(d)})

 })


//You'll notice that the server code
// has also been updated
// to now reference the /capture namespace.
// It's important that we use a namespace
// or we'll also count connections to our dashboard
// in the stats when we create it.

//We bind to the client-data event,
// which mirrors the event we emit on the client.
// If you restart the node process
// and refresh capture.html
// you'll see the information
// that's been captured is logged to the command prompt.

// Storing stats data


//On the server we want to keep track of connections
// and associated data so we can calculate stats.

 socketData = {}
 stats = {
     connections: 0,
     touch: 0,   video: 0,  pages: {}
 }


io.of('/capture').on('connection',function(k){
    ++stats.connections

    k.on('client-data', function(d){var pageCount
         socketData[ k.id ] = d
         stats.touch += ( d.touch? 1:0)
         stats.video += ( d.video? 1:0)

        pageCount = stats.pages[ d.url ] || 0;
         stats.pages[ d.url ] = ++pageCount
    })

})


//First, the connection count is incremented when a user connects to the /capture namespace. The socketData variable is used to map a socket to its associated stats data using a unique socket.id .
//
//    The storage takes place in the client-data event callback. touch and video values are incremented if supported by the client. The number of connections on each page is stored by URL in the stats.pages property.
//
//    We also need to update the stats as connections are lost. Within the connection callback bind to the disconnect event on the socket object:

    stats.pages[ data.url ] = ++pageCount;
} )

k.on( 'disconnect', function() {
    --stats.connections;
    stats.touch -= ( socketData[ socket.id ].touch? 1 : 0 );
    stats.video -= ( socketData[ socket.id ].video? 1 : 0 );
    --stats.pages[ socketData[ socket.id ].url ];
    delete socketData[ socket.id ];

})


//In the same way that we incremented values in the
// connection callback we decrement values in the disconnect callback.
//
//    Publishing the data
//
//Now that all the data is stored,
// we want to publish it so that a dashboard can
// consume and display the stats. Since all the data is already stored in the stats object, we just need to publish it. For this, we'll use a /dashboard namespace.
var stats = { connections: 0, touch: 0, video: 0, pages: {} }
var dashboard = io.of( '/dashboard' );
dashboard.on( 'connection', function( socket){

    socket.emit( 'stats-updated', stats )
})


//The /dashboard namespace is
// referenced and when a new connection
// is detected the current stats
// are emitted to the newly connected
// socket only.

//    We also need to trigger an event
// to all dashboard clients whenever
// the stats update
// – for example,
// after a client-data event
// is received and processed,
// or when a /capture connection triggers
// the disconnect event.
// To do that, simply emit a
// stats-updated event on the dashboard
// namespace at the end of
// appropriate callbacks:


 dashboard.emit( 'stats-updated', stats );

//Real-time analytics dashboard

//The only thing that's left now
// is to build the dashboard.
// If you open public/dashboard/index.html
// you'll see it includes the Epoch charts
// library, its stylesheet and dependencies.
//
//    Within that file you'll also find various
// element placeholders with clearly named
// id attributes for our real-time analytics
// charts: visitors area chart
// for connection count,
// pages bar chart for popular pages,
// touch and video gauges
// for touch support and video element
// support respectively.
//
//A file js/dashboard.js
// is also referenced from index.html.
// Open this up and initialise
// the Epoch charts.


 visitors = $('#visitors').epoch({


     type: 'time.area',

     axes: ['left', 'bottom', 'right'],

     data: [{

         values:[{
             time: Date.now()/1000,
             y: 0
         }]

     }],


 })


 pages = $( '#pages' ).epoch( { type: 'bar' } );

 touch = $( '#touch' ).epoch( { type: 'time.gauge' } );
 video = $( '#video' ).epoch( { type: 'time.gauge' } );



//The server is already publishing the stats as soon as it has them, so in order to receive that data we need to subscribe to the /dashboard namespace and bind to the stats-updated event.
//
//    Finishing off
//
//Finally, we need to extract the data we want from the  update and tell our charts to update.

    var video = $( '#video' ).epoch( { type: 'time.gauge' } );
var dashboard = io( 'localhost:3000/dashboard' );
dashboard.on( 'stats-updated', function( update ) {
    visitors.push( [ { time: Date.now()/1000, y: update.connections } ] );
    var pagesData = [];
    for( var url in update.pages ) {
        pagesData.push( { x: url, y: update.pages[ url ] } );
    }
    pages.update( [ { values: pagesData } ] );
    touch.update( update.touch / update.connections || 0 );
    video.update( update.video / update.connections || 0 );
} );


//To update the visitors chart we reference update.connections and update the visitors chart. We loop over update.pages and format the data where x is the page URL and y is the number of connections on that page. The touch and video gauges are updated with a value between 0 and 1 based on the ratio of stat versus connections.
//
//    With everything in place you can now restart the node process and load http://localhost:3000/ dashboard/index.html to see the dashboard. Open http://localhost:3000/capture.html in one or more tabs to start capturing data and watch the captured data instantly displayed in the dashboard.
//
//    Conclusion

//We've only scratched the surface of what can be achieved with this application and with the new tools and features in Socket.IO 1.0. But hopefully this tutorial has given you a taster of just how powerful and easy it can be to use real-time technologies in your web apps.

