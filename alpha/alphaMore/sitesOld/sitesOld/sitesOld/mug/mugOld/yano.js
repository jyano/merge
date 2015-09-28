console.log('./setup')

require('./welcome')()  //env = process.env.NODE_ENV || 'development'  //    config = $q('./config/config')[env]
$d=function(a){console.dir(a); return a}

require('./lib/both')



require('./lib/noda')
require('./lib/mon')()
require('./lib/xap')
//$a.u($e.st($p.j(__dirname, 'public'), {maxAge: 31557600000}))

$a.bP( $bP=require('./lib/xap/bP'))
$l('out bP')
$a.u(require('./lib/mem'))

$a.u([
    $mw = require('./mw')
])



//$a.s('port', port = process.env.PORT || 3000)
//$a.s('views',$p.join(__dirname, 'views'))
//$a.s('view engine', 'jade')
//methodOverride = require('method-override');// $a.u(methodOverride())



module.exports=function(port){}
//  favicon// logger
exErr=function() {


// production error handler
// no stacktraces leaked to user
    // a.u(function(z, q, p, n) {
    // p.status(z.status || 500);
    // p.render('error', {message: z.message,  error: {} }) })


// catch 404 and forward to error handler
    a.u(function (q, p, n) {
        z = new Error('Not Found');
        z.status = 404;
        n(z)
    })
    // development error handler
// will print stacktrace
    if (a.g('env') === 'development') {

        $a.u(function (z, q, p, n) {
            p.status(z.status || 500);
            p.render('error', {
                message: z.message, error: z
            })
        })

    }

}
badRts=function(){
    // ix=index = require('./routes/index');
// li=login = require('./routes/login');
// sU=signup = require('./routes/signup');
// u= user = require('./routes/user');
    // attaching routes to the application
//a.u(ix);  a.u(li); a.u(sU); a.u(u)
//    require('./routes')
    //$a.g('/', routes.index);

}