console.log('......\n...\n.\n\n\n');
require('./server/serverBoth');
$l(' - merge - \n');

$h = http = require('http');
$p = path = require('path');

//require('./server/superNode')
require('./server/expressApp')(__dirname)

require('./server/database')

require('./server/middleware')

require('./server/routing')(__dirname)

$hS = $h.createServer($a);
$hS.listen(80, function(){
    
    $l('\n port 80 <-\n');
    var url = 'http://localhost/wap/txx';
    
   // var spawn = require('child_process').spawn; spawn('open', [url]);
    
})
 

require('./server/serverSockets')


 
