lib=function(){
    $l = function (a) {
        console.log(a)
        return a
    }

    $q = require

    $Ap=function(){
       $a = $q('express')()
        $a.g=$a.get

        $a.srv=function(){
          var http=  $q('http').Server($a)
            http.ls=http.listen
            http.io= function(fn){

                return $io(this, fn)
            }
            return  http
        }

        return $a}

    $io=function(http, fn){

        var io = $q('socket.io')(http)
        io.e = io.emit
        io.cn = function(fn){
            this.on('connection',  fn )
            return this
        }

        if(fn){
            io.cn(fn)
        }
        return io
    }

};lib()

$a=$Ap()

http = $a.srv()

io = http.io( function(k){

    k.on('ms', function(ms){
        $l('ms:'+ms)
        io.e('ms', ms);
    })

})


$a.g('/', function(q,p){

    p.sendFile(__dirname + '/index.html')

})

port = 2400

http.ls(port, function(){

    $l('listening on port: ' + port)

})


