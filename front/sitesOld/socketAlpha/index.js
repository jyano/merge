

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


