sticky = require('sticky-session');
cluster = require('cluster');
redis = require('redis').createClient();
port = process.env.PORT || 3000;
if(cluster.isMaster){redis.flushdb()}
fn=function(){
    var crypto = require('crypto')
    var $e = require('express')
    var redisAdapter = require('socket.io-redis');
    var $a = $e()
    var http = require('http').Server($a)
    var io = require('socket.io')(http)
    var redis = require('redis').createClient()
    $a.use($e.static(__dirname + '/public'))
    io.adapter(redisAdapter({ host: 'localhost', port: 6379 }))
    io.on('connection', function(socket) {
        socket.on('login', function(username) {
            if (socket.user) return;
            username = username.trim();
            if (username.length > 16) return;
            socket.user = {
                id: uid(),
                username: username
            };
            socket.emit('login', socket.user);
            redis.incr('num users', function(err, numUsers) {
                io.emit('num users', numUsers);
            });
            joinLobby(socket)});

        socket.on('message', function(message) {
            if (!socket.user) return;
            if (!socket.roomId) return;
            if (!message) return;

            var eventName = 'lobby' === socket.roomId ? 'lobby message' : 'message';
            socket.broadcast.to(socket.roomId).emit(eventName, socket.user, message);
        });
        socket.on('add room', function(){if (!socket.user) return;
            var room = new Room(socket.user);
            redis.hsetnx('rooms', room.id, JSON.stringify(room), function(err, result) {
                if ( !result) {return;}
                join(socket, room.id);});});

        socket.on('join room', function(roomId) {
            if (!socket.user) return;

            join(socket, roomId);
        });

        socket.on('leave room', function() {
            if (!socket.user) return;

            joinLobby(socket);
        });

        socket.on('start game', function() {
            if (!socket.user) return;

            redis.hget('rooms', socket.roomId, function(err, data) {


                var room = JSON.parse(data);

                // check the game starter by owner
                if (!room.users.length || room.users[0].id !== socket.user.id) return;

                redis.hdel('rooms', room.id, function(err) {
                    io.in(room.id).emit('game started', room);
                    socket.broadcast.to('lobby').emit('room removed', room.id);
                    redis.hset('active games', room.id, JSON.stringify(new Room(socket.user)), function(err) {
                        // add new active game
                        setTimeout(function() {
                            redis.hget('active games', room.id, function(err, data) {
                                var newRoom = JSON.parse(data);
                                if (!newRoom) return;
                                redis.hgetall('points', function(err, points) {
                                    var best = newRoom.users.reduce(function(obj, user) {
                                        var p = parseInt(points[user.id], 10);
                                        if (p > obj.max) {
                                            return { user: user, max: p };
                                        }

                                        return obj;
                                    }, { max: -Infinity, user: null });
                                    io.of('/game').emit('winner', best.user)})})}, 180000)})})})})
        socket.on('disconnect', function() {
            leave(socket, function() {
                if (socket.user) {
                    delete socket.user;
                    redis.decr('num users', function(err, numUsers) {
                        io.emit('num users', numUsers);
                    });
                }
            });
        })})


    io.of('/game').on('connection', function(socket) {
        socket.on('join', function(data) {
            socket.user = data.userData;
            redis.hget('active games', data.roomData.id, function(err, _data) {
                var room = JSON.parse(_data);socket.room = room;
                socket.join(data.roomData.id);
                redis.hset('uid to sid', socket.user.id, socket.id);
                room.users.push(socket.user);
                redis.hset('active games', data.roomData.id, JSON.stringify(room));})});

        socket.on('player:sync', function(data) {
            if (!socket.user || !socket.room) return;

            redis.hset('points', socket.user.id, data.points);
            socket.to(socket.room.id).emit('player:sync', { id: socket.user.id, motion:  data.motion, health: data.health, points: data.points, username: data.username });
        });
        socket.on('player:hit', function(playerID) {redis.hget('uid to sid', playerID, function(err, sid) {socket.to(sid).emit('player:hit', { damage: 10 });})})
        socket.on('disconnect', function() {
            socket.to(socket.room.id).emit('player:disconnected', socket.user.id);
            redis.hdel('uid to sid', socket.user.id);
            redis.hdel('active games', socket.room.id);
            socket.leave(socket.room.id);
            socket.room = null;
        });});

    function Room(user){
        this.id = user.id;
        this.name = user.username + '\'s game';
        this.users = [];
    }
    function uid(){
        return crypto.randomBytes(16).toString('hex');
    }
    function rooms(fn){
        redis.hgetall('rooms', function(err, roomMap) {


            var rooms = Object.keys(roomMap || {}).map(function(roomId) {
                return JSON.parse(roomMap[roomId]);
            });
            fn(null, rooms);
        });
    }
    function joinLobby(socket){
        leave(socket, function(err) {


            socket.join('lobby', function(err) {


                socket.roomId = 'lobby';
                rooms(function(err, rooms) {
                    socket.emit('join lobby', rooms);
                });
            });
        });
    }
    function join(socket,roomId){
        redis.hget('rooms', roomId, function(err, data) {


            var room = JSON.parse(data);

            leave(socket);

            socket.join(room.id, function(err) {


                room.users.push(socket.user);

                redis.hset('rooms', room.id, JSON.stringify(room), function(err) {


                    socket.roomId = room.id;
                    socket.emit('join room', room);
                    socket.broadcast.to('lobby').emit('room updated', room);
                    socket.broadcast.to(room.id).emit('user joined', socket.user);
                });
            });
        });
    }
    function leave(socket,fn){
        fn = fn || function(){}
        var roomId = socket.roomId;
        if (!roomId) return fn()
        socket.leave(roomId);
        socket.roomId = null;
        if ('lobby' === roomId) {
            socket.emit('leave lobby');
            fn()
            return;
        } else {
            socket.emit('leave room');
        }
        redis.hget('rooms', roomId, function(err, data) {

            var room = JSON.parse(data);
            if (!room) return fn();

            var index = -1;
            room.users.some(function(user, i, users) {
                if (user.id === socket.user.id) {
                    users.splice(i, 1);
                    index = i;
                    return true;
                }
            });
            if (!~index) return fn();

            if (index === 0) {
                // remove the room when the user is the creator of it
                redis.hdel('rooms', room.id);

                socket.broadcast.to('lobby').emit('room removed', roomId);
                socket.broadcast.to(roomId).emit('room closed');
            } else {
                redis.hset('rooms', roomId, JSON.stringify(room));

                socket.broadcast.to('lobby').emit('room changed', room);
                socket.broadcast.to(roomId).emit('user left', socket.user);
            }
            fn()
        });
    }
    return http
}
sticky(fn).listen(port, function(){
        $l('Server lsng on port'+port)})
