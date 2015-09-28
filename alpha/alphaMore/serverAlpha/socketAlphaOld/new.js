$e = require('express')
$a = $e()
$h = require('http')
$sv= $h.S($a)
io = require('socket.io').l(sv)
$sv.l(3000)
$a.g('/', function(q,p){
    p.send()
})
