$io=function(http, fn){

    var io = $q('socket.io')(http)
    io.e = io.emit
    io.cn = function(fn){
        this.on('connection',  fn )
        return this}
    if(fn){io.cn(fn)}
    return io}

kIO=   $q('socket.io')
kIO.ls = function(srv, logLev){var io
    io =kIO.listen(srv)
    if(logLev){io.set('log level', logLev)}
    return io}

ssKIO=  $q('session.socket.io')
