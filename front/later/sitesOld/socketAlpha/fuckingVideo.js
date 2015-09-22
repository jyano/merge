lib=function(){
    $l=function(a){console.log(a)}

    $sIO=function(io){
        io.K=io.sockets
        io.K.em=io.K.emit

        return io
    }
};lib()
$e=require('express')
$a=$e()
$sv=require('http').createServer($a)
io=$sIO(require('socket.io').listen($sv))


NN=[]
$sv.listen(3000, function(){$l('hi')})
$a.get('/', function(q,p){
    p.sendFile(__dirname+'/index.html')
})


io.K.on('connection', function(k){

    k.on('new', function(d,fn){$l('users:'+NN)

        if(NN.indexOf(d)!=-1){fn(false)}

        else {
            fn(true); k.nn=d; NN.push(k.nn)
            io.K.em('nns',NN)
        }

    })

    k.on('send', function(d){$l('d:'+d); io.K.em('send',d)})

})

