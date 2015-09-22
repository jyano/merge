P2P = require('socket.io-p2p')
$p2p=function(){

    var k = new P2P(socket)
    k.uPC=function(a){
        this.usePeerConnection=!!a
        return this
    }
    k.oR=function(fn){
        return this.on('ready',fn)
    }
    return k
}
//This module provides an easy and reliable way to setup a WebRTC connection between peers and communicate using events
// (the socket.io-protocol).

//Socket.IO is used to transport signalling data and as a fallback for clients where WebRTC PeerConnection is not supported.

  //  How to use

//Create a socket connection, pass it to P2P. On the Client:



io = require('socket.io-client');
 socket = io()

p2p = $P2P(socket)


p2p.oR(function(){
    p2p.uPC(1)
    p2p.emit(
        'peer-obj',
        { peerId: peerId }
    )
})

// this event will be triggered over the socket transport 
// until `usePeerConnection` is set to `true`
p2p.on('peer-msg',_lD)
//On the server, use the socket.io-p2p-server to take care of signalling.
// All clients who support WebRTC data connections will exchange signalling data via the default / namespace.
io = require('socket.io')(srv)
io.use(p2p)
srv.lsn(3030);

//WebRTC Peer connections can also be established by exchanging signalling data witin a socket.io room.
// Do this by calling the p2p server within the connection callback:


p2p = require('socket.io-p2p-server').Server;

io.on('cn', function(k){
    clients[k.id] = k;
    k.join(roomName);
    p2p(k, null, room)
})


//    API
p2pK = new P2P(k,op,cb)

//
//Create a new socket.io-p2p connection.
//
//    The opts object can include options
// for setup of the overall socket.io-p2p connection
// as well as options for the individual peers -
// specified using peerOpts.
//
//    numClients - max number of peers each
// client can connect to; 5 by default.
//autoUpgrade - upgrade to a p2p connection
// (from s.io one) when peers are ready; true by default

//peerOpts - object of options to be passed
// to underlying peers.
// See here for currently supported options.
//    cb is an optional callback.
// Called when connection is upgraded to a WebRTC connection.

p2pK.on('upgrade', fn)
//
//Triggered when P2P connection is converted to a WebRTC one.
//
  p2pK.on('peer-error', fn)
//
//Triggered when a PeerConnection
// object errors during signalling.
//
//    Roadmap of development
//
//Support for packets containing multiple binary blobs
// - packets can only contain one blob in this version
//Allow a peer to act as a relay between peers
// that don't support PeerConnection and those that do.
//PRs and issue reports are most welcome.