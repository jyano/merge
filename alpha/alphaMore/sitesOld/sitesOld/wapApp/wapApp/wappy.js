require('./utils'); require('./requires'); require('./defaultMug')
mongoose.connect("mongodb://localhost/brain", function(){$l('mongo connected')})
md= $m =  models =  require('./models'); require('./mongodb') // raw mongo
mongoStore = new(connectMongo(express))({db:'brain'})
e = E = $a = express()
$a.set('port', process.env.PORT||4000)
$a.set('view engine' ,'jade'); $a.set( 'views' , __dirname + '/../views/' )
$a.use(express.bodyParser({uploadDir:__dirname+"/public/uploads", keepExtensions:true}))
$a.use(cookieParser = express.cookieParser('xyz'))
$a.use(express.session({ store: mongoStore, secret: 'xyz' }))




mw= $w = middleware = require('./middleware');

$a.use(middleware)



routing=function(){

    $a.get(

        '/render/:page', function(q, p){
            p.render(q.params.page)

        })



    require( '../routes/routes' )()

    require( '../routes/socialRoutes' )()

    require('../routes/bookRoutes')()




    $a.use( $a.router )


    _.e([
        '/public/deps', '/public/deps/css',     '/public/deps/js',
        '/public/pics', '/public/graphics', '/public/uploads',
        '/public/deps/ui-images', // assets: where i can publically, statically fetch items from // css, fonts, js (bs, cjs, jq, string, us)
        '/../js',     '/../js/create',     '/../js/app',
        '/../js/games', '/../js/lib',

        '/../js/box2d',


        '/../js/knock',
        '/../js/back',
        '/../js/jqui',

        '/../js/css',

        '/../js/phaserjs', '/../js/phaser2',
        '/../js/melon',
        '/../js/three', '/../js/mvc',
        '/../js/tests',   '/../js/resources', '/../js/beta', '/../js/g'
    ], function(dir){
        $a.use(
            express.static(
                path.join(__dirname, dir)
            )
        )
    })




};routing()





sv= httpServer = http.createServer($a)
httpServer.listen(80, function(){ $l('server listening on port 80') })
io = socketIO.listen(httpServer)
io.set('log level', 1)

require('./sockets')(
    io,
    new sessionSocketIO(io, mongoStore, cookieParser)
)