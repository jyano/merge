$U8A=function(a){return new Uint8Array(a)}
_.cC=function(s){return $S.fromCharCode(s)}

io.on('cn', function(k){
    $f.rF('/path/to/image.png', function(z, bf){
        k.e('im', {bf:bf})})
})


//And here is how you handle it on a client:

k.on('im',function(d){
    var bn = ''; _.e($U8A(d.bf),function(i){bn+=_.cC(i)})
    $I('data:image/png;base64,'+ window.btoa(bn), function(){
        $ctx('#c').dI(this,0,0)})
})
 

io = require('/usr/local/lib/node_modules/socket.io').listen(8080);

  
$rnd=function(){return M.fl(M.r()*1000)}

io.sockets.on('connection', function (k) {
    var k
    t= _.ev(4, function(){
        var n=$rnd();k.bc.e('stream', {n:n.tS()})})
    k.on('act',function (d){$l('received act')
        if(d.todo=='stop'){
            k.bc.e('stream', {n:'Stopped'});
            $l('stopping timer');_.clI(t)
        } else if(d.todo='run'){
            // the setInterval code definitely can
            // be combined/optimized with the one above
            // again for DEMO's sake I just leave it as is
            t=_.ev(4, function(){var n=rnd();k.bc.e('stream', {n:n.tS()})})}});
})

//Client:   The client socket.io.js code can be found at /usr/local/lib/node_modules/socket.io/node_modules/socket.io-client/dist on my Ubuntu 10.10
//client.html, served using Apache (I know this can be changed to use Node.js totally, with some help from Express webframe)

sw='run';

k=io.cn('http://192.168.1.200:8080')

k.on('stream', function(d){$('#num')[0].innerHTML=d.n})

function stop_timer(){
    if(sw=='run'){k.e('act', {todo: 'stop'} );sw='stop'}
    else {k.e( 'act', {todo: 'run'})}}

//<div style="border:1px solid #ccc" id="number">&nbsp;</div>
//<a href="#" onclick="stop_timer();return false;">Action</a>

