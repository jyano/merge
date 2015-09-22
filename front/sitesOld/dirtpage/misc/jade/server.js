_=require('underscore')
F=_.isFunction
S=_.isString
U=_.isUndefined
D=function(a,b){return !U(a)}
A=_.isArray
O=_.isObject
G=function(a){
    if(!_.isArguments(a)){return}
    var p, n, m,d
    a=_.toArray(a)

    if(_l(a)==='+'){p=a.pop()}
    if(_l(a)==='-'){n=a.pop()}
    if(_l(a)==='*'){m=a.pop()}
    if(_l(a)==='/'){d=a.pop()}

    return D(a,{
        z: a.length,
        f: _f(a),l: _l(a),r: _r(a),i: _i(a),
        p:p,P:!p,m:m,M:!m,d:d,D:!d,n:n,N:!n


    })}
$l=function(a){console.log(a);return a}
$d=function(a){console.dir(a);return a}
http= require('http')
path= require('path')
fs= require('fs')
$l('------- dirtpage --------')




mongoose  =   require('mongoose')

//models  = require('./models')
require('./models')
mongoose.connect(   "mongodb://localhost/dirtpage", function(){$l(':) 8080')})

express   =  require('express')

a=express()

middleware = require('./MW')

a.set('port', process.env.PORT||4000)

a.set('view engine' ,'jade')

console.log('dirname: '+ __dirname)

a.set('views', __dirname + '/views')

a.use(require('body-parser')({keepExtensions:true,  uploadDir:__dirname + "/uploads"   } ))


//a.use( middleware )





a.use( express.static(path.join(__dirname, '/resources')))



require('./routes')(a)




httpServer = http.createServer(a)
httpServer.listen( 8080, function(){$l(':) 8080')})




