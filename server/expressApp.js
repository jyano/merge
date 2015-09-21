
module.exports=function(dirN) {
    $e = require('express');
    $a = $e();
    $a.u = $a.use;
    $a.g = $a.get;
    $a.po = $a.post
    _.e({
        port: process.env.PORT || 4000, 'view engine': 'jade',
        views: dirN + '/server/views/'
    }, function (v, k) {
        $a.set(k, v)
    })

}