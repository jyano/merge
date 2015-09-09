$a = $q('express')(); $a.g=$a.get


$a.g('/', function(q,p){

    // p.s('<h1>Hi</h1>')


// Serving HTML
// So far in index.js we’re calling
// res.send and pass it a HTML string.
// Our code would look very confusing
// if we just placed our
// entire application’s HTML there.
// Instead, we’re going to create
// a index.html file and serve it.

//  Let’s refactor our route handler to use sendFile instead:



  //  p.sendfile('index.html')
    p.sendFile(__dirname + '/index.html')
})



io=$q('socket.io')($s)
io.cn=function(fn){this.on('connection', fn)}

$sK=function(k){
    k.dc=function(fn){this.on('disconnect', fn)}
    return k
}


 io.cn(function(k){$sK(k)

     $l('user cn')
     k.dc( function(){$l('user dc')})
     k.on('ms', function(ms){
         $l('message!')
         $l('message: '+ms)
     })
 })



$s.l(3001, function(){$l('*:3000')})



//k = io()
//k.e = k.emit

