dirs = [

    '', 'bone/blog',
    'bone/tpcs',

    'public/pics',

    'both',

    'front', 'graphics/art', 'front/handy', 'style',


    'graphics/graf', 'graphics/graf/deps',

    //bootstrap
    'boot', 'boot/deps',// 'boot/deps/css', 'boot/deps/fonts',

    //fiz
    'fiz', 'fiz/deps',

    'show', 'show/mugApps', 'show/spazGames',

    //jQuery UI
    'jqui', 'jqui/deps', 'jqui/deps/images', 'jqui/custWid',

    //backbone
    'bone', 'bone/deps', 'bone/tuts', 'bone/bbApps',

    //knockout
    'knock', 'knock/deps', 'knock/custBind', 'knock/comps'

]




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

var site = false


//site = 'wap/fullnb'

$hS.listen(80, function(){
    
    if(site){
        $l('requiring.. ' + site)
        
       require('child_process').spawn('open', [
           'http://localhost/' +  site
       ]);
    }
    
    $l('\n port 80 <-\n')
    
})
 



require('./server/serverSockets')


 
