function middleware(){

    $l('~mw~')

    var Midware = function(req, res, next){



        //   p.l  = p.locals
        //  p.r  = p.render
        // p.s  = p.send
        //  p.j= p.json
        //   p.d  = p.redirect
        // q.b  = q.body
        //q.f  = q.files
        //   q.n  = q.flash
        //   q.s  = q.session
        //q.q= q.query

        // q.p= function(a){return q.params[a]}
        //q.pm= q.params
        //q.p= q.params

        //checks session to see if user is logged in



        res.locals.loggedIn = req.loggedIn = (req.session.username)? true: false   //=  res.locals.li=  req.li

        req.username = req.session.username

        // $l('MAIN middleware says req.username = ' + req.username)

        next()
    }


    Midware.user =   function(req, res, next){//Midware.u =

        if( req.loggedIn){ //req.li ||

            models.user.findOne({username: req.username},

                function(err, user){

                    if(err){next(err)}

                    if(user){

                        req.user = res.locals.user = user   //res.locals.U = req.U =

                        req.username = res.locals.username = user.username//res.locals.u = req.u =

                        req.userId = res.locals.userId = user._id //res.locals.I = req.I =

                    }

                    next()

                })}




        else {
            $l('middleware says NOT logged in :(')
            res.json('guest'); return}
    }//W =

    //var mP=u.mugPath;$l('mP:');$l(mP);p.l.mP=q.mP=mP;
    // $m.image.findOne({relPath:mP},function(z,d){if(!d){$l('-m')}else{$l('+m');
    // p.l.M=q.M=mug;p.l.mp=q.mp=q.M.relPath;p.l.mid=q.mid=q.M._id}n()})
    // if(!u){q.s.u=null;q.s.save(function(){p.r('guest')})}

    Midware.Pics =    Midware.P = function(req, res, next){


        $m.pic.find(


            {u: req.I },


            function(err, pics){

                var array =[]

                _.each(

                    pics,

                    function(pic){

                        array.push(

                            _S(pic._id)  +  pic.e

                        )  // $l(    )


                    })


                res.l.I = array

                next()

            })

    }
    Midware.pic =     Midware.p =  function(req,res,next){

        models.pic.findById(

            req.params.p,


            function(err,i){



                if(err){next(err)}



                res.locals.i =  '/'+i._id


                req.i=i


                next()

            })


    }

    Midware.Books =   Midware.B =function(req, res, next){

        Book.find({

                user: req.I
            },

            function(err,books){
                if(err){next(err)};
                if(!books){'no book!'}
                res.locals.books = books
                next()
            })

    }

    Midware.book =  Midware.book =function(req, res,next){



        models.book.findOne({

                u: req.I,

                title: req.p.t
            },


            function(err,book){ if(err){next(err)}

                res.locals.book = book

                if(req.params.n){

                    var c = res.locals.n = book.c[n]
                }

                if(res.params.h){
                    res.locals.h = c[n][h]
                }

                next()

            })
    }



    module.exports = Midware




}
function mw(){

    sess = function(s){
        s.s = s.save
        s.rg = s.regenerate    // new SID and Session inst initd at q.ss.
        s.rl = s.reload // ss rl updd in cb
        s.d = s.destroy
        // cannot access session in cb
        // Destroys  ss, removing q.ss  (re-gens next req)
        //destroy session!!!
//  ssStor-based ss's has  met  called destroy(),
//     -used for    destroying ss's from the ssStor
//       –  proper way of tearing down a ssStor-based ss.
//     q.ss.destroy(); -accepts an opl cb
//        ( exd af  ss cleared from  store )
// q.ss.destroy(function () {  p.s('ss deleted') })
        s.t = s.touch  // Upds  maxAge prop   (ss mw usually does this).
        s.c= s.ck= s.cookie
        // s.a= s.maxAge
        s.mA = function (a) {this.c.maxAge = a}
        s.exp = function (a) {this.c.expires = new Date(Date.now() + a)}
        return s
    }


    req = function (q) {
        q.a = q.app;
        q.p = q.params;
        q.q = q.query;
        q.b = q.body;
        q.u = q.url
        q.bU = q.baseUrl;
        q.oU = q.originalUrl;
        q.h = q.hn = q.hostname
        //q.rt = q.route  //q.rt.pt = q.rt.path  // q.pt = q.rt.pt  // q.pt = q.path;
        q.pc = q.protocol  //q.s= q.secure;  q.fr= q.fresh; q.st= q.stale;
        // q.sd= q.subdomains; q.x= q.xhr  // q.ip= q.ip  // q.ips= q.ips
        if (q.session) {

            q.s = q.ss = sess( q.session )

        }
        // q.c= q.ck= q.cookies;
        // q.sC= q.signedCookies
        return q
    }

    res = function (p){


        p.s = p.send;
        p.j = p.json;
        p.jp = p.jsonp
        p.scrs=function(fns){var p=this
            async.series(fns, function (z, scrs) {
                var  str=''
                scrs.forEach(function(js){str += js})
                p.s( scrTag(str) )})}
        p.js=function(JS){var  p=this, fns=[]
            JS.forEach(function(js) {fns.push(function (cb) {
                $f.u8($tJs( js ), function (z,j){cb(null, j) })})})
            p.scrs(fns)
        }
        p.l = p.locals;
        p.r = p.render
        p.rd = function (u) {
            var p = this;
            u = S(u) ? u : 'back';
            p.redirect(u)
        }


        p.xC = p.clearCookie //
        p.fm = p.format;
        p.a = p.append;
        p.e = p.end
        p.lc = p.location;
        p.lk = p.links
        p.f = p.sF = p.sendFile;
        p.at = p.attachment;
        p.dl = p.download
        p.st = p.status;
        p.sS = p.sSt = p.sendStatus
        p.t = p.ty = p.type;
        p.v = p.vary // ?
        p.s4= p.s400 = function(){ return this.STS(400) }

        p.h = p.g = p.hd = function (k,v) {
            var p = this
            //get/set header
            if (U(v)){
                return p.get(k)}
            p.set(k, v)
            return p
        }

        p.cT=function(cT){var p=this

            p.h('Content-Type',cT)
            return p
        }

        p.wH = function (a) {
            this.writeHead(a);
            return this
        };


        p.w = function (a) {
            this.write(a);
            return this
        }

        p.wB = function (a) {
            return this.write(a, 'binary')
        }

        p.e = p.end
        p.tx = function () {
            return this.wH(500, {"Content-Type": "text/plain"})
        }

        p.z = function (z) {
            return this.tx().w(z + "\n").e()
        }
        p.$p=function(){

            var g=G(arguments)

            this.s(
                _p.apply(null,g)
            )
        }
        p.wHwBE = function (a, b) {
            return this.wH(a).wB(b).e()
        }
        p.s403 = p.s4 = function () {
            return this.sTs(403)
        }
        p.ok = function () {
            return this.s('OK')

            n()
        }
        p.c = p.ck = p.cookie;
        // p.a = p.app;   // p.hdS = p.headersSent
        return p

    }

    module.exports= function(q,p,n){
        req(q); res(p); n() }
    Midware = function(q,p,n){

        //checks session to see if user is logged in
        p.locals.loggedIn = q.loggedIn = (q.session.username)? true: false   //=  res.locals.li=  q.li

        p.r = p.render

        q.username = q.session.username


        // $l('MAIN middleware says q.username = ' + q.username)
        n()
    }
    Midware.user =   function(q, p, n){

        if( q.loggedIn){

            models.user.findOne({username: q.username}, function(z,u){
                if(z){n(z)}
                else if(u){
                    q.user = p.locals.user = u
                    q.username = p.locals.username = u.username
                    q.userId = p.locals.userId = u._id
                }
                n()
            })
        }
        else {
            // $l('middleware says NOT logged in :(')
            p.json('guest')
        }


    }
//var mP=u.mugPath;$l('mP:');$l(mP);p.l.mP=q.mP=mP;
// $m.image.findOne({relPath:mP},function(z,d){if(!d){$l('-m')}else{$l('+m');
// p.l.M=q.M=mug;p.l.mp=q.mp=q.M.relPath;p.l.mid=q.mid=q.M._id}n()})
// if(!u){q.s.u=null;q.s.save(function(){p.r('guest')})}
    Midware.Pics =    Midware.P = function(req, res, next){


        $m.pic.find(


            {u: req.I },


            function(err, pics){

                var array =[]

                _.each(

                    pics,

                    function(pic){
                        array.push(
                            _S(pic._id)  +  pic.e
                        )  // $l(    )


                    })

                res.locals.I = array
                next()
            })
    }
    Midware.pic =     Midware.p =  function(req,res,next){

        models.pic.findById(

            req.params.p,


            function(err,i){



                if(err){next(err)}



                res.locals.i =  '/'+i._id


                req.i=i


                next()

            })


    }
    Midware.Books =   Midware.B =function(req, res, next){

        Book.find({

                user: req.I
            },

            function(err,books){
                if(err){next(err)};
                if(!books){'no book!'}
                res.locals.books = books
                next()
            })

    }
    Midware.book =  Midware.book =function(req, res,next){



        models.book.findOne({

                u: req.I,

                title: req.p.t
            },


            function(err,book){ if(err){next(err)}

                res.locals.book = book

                if(req.params.n){

                    var c = res.locals.n = book.c[n]
                }

                if(res.params.h){
                    res.locals.h = c[n][h]
                }

                next()

            })
    }
//module.exports = Midware




}
function mw1(){module.exports= function(q,p,n){req(q); res(p); n()


}
function req(q){


    data()
    url()
    if (q.session) {q.s = q.ss = sess( q.session )} // q.c= q.ck= q.cookies; // q.sC= q.signedCookies

    return q
    function data(){
        q.a = q.app;
        q.p = q.params;
        q.q = q.query;
        q.b = q.body;
    }
    function url(){
        q.u = q.url
        q.bU = q.baseUrl;
        q.oU = q.originalUrl;
        q.h = q.hn = q.hostname //q.rt = q.route  //q.rt.pt = q.rt.path  // q.pt = q.rt.pt  // q.pt = q.path;
        q.pc = q.protocol  //q.s= q.secure;  q.fr= q.fresh; q.st= q.stale;
        // q.sd= q.subdomains; q.x= q.xhr  // q.ip= q.ip  // q.ips= q.ips

    }
    function sess(s){
        s.s = s.save
        s.rg = s.regenerate    // new SID and Session inst initd at q.ss.
        s.rl = s.reload // ss rl updd in cb
        s.d = s.destroy // cannot access session in cb
        // Destroys  ss, removing q.ss  (re-gens next req)
        //destroy session!!!
//  ssStor-based ss's has  met  called destroy(),
//     -used for    destroying ss's from the ssStor
//       –  proper way of tearing down a ssStor-based ss.
//     q.ss.destroy(); -accepts an opl cb
//        ( exd af  ss cleared from  store )
// q.ss.destroy(function () {  p.s('ss deleted') })
        s.t = s.touch  // Upds  maxAge prop   (ss mw usually does this).
        s.c= s.ck= s.cookie // s.a= s.maxAge
        s.mA = function (a) {this.c.maxAge = a}
        s.exp = function (a) {this.c.expires = new Date(Date.now() + a)}
        return s}
}
function res(p){
    p.s = p.send
    p.e = p.end
    header()
    template()
    url()
    ck()
    js()
    write()
    status()
    file()
    beta()
    return p
    function header(){
        p.h = p.g = p.hd = function (k,v) {
            var p = this
            //get/set header
            if (U(v)){
                return p.get(k)}
            p.set(k, v)
            return p
        }
        p.cT=function(cT){var p=this

            p.h('Content-Type',cT)
            return p
        }
    }
    function template(){
        p.l = p.locals;
        p.r = p.render


        p.fm = p.format;
    }
    function url(){

        p.rd = function (u) {
            var p = this;
            u = S(u) ? u : 'back';
            p.redirect(u)
        }
        p.lc = p.location;
        p.lk = p.links

    }
    function ck(){

        p.xC = p.clearCookie //
        p.c = p.ck = p.cookie;// p.a = p.app;   // p.hdS = p.headersSent
    }
    function js(){
    p.j = p.json;
    p.jp = p.jsonp
    p.scrs=function(fns){var p=this
        async.series(fns, function (z, scrs) {
            var  str=''
            scrs.forEach(function(js){str += js})
            p.s( scrTag(str) )})}
    p.js=function(JS){var  p=this, fns=[]
        JS.forEach(function(js) {fns.push(function (cb) {
            $f.u8($tJs( js ), function (z,j){cb(null, j) })})})
        p.scrs(fns)
    }
}
    function write(){

        p.wH = function (a) {
            this.writeHead(a);
            return this
        };
        p.w = function (a) {
            this.write(a);
            return this
        }
        p.wB = function (a) {return this.write(a, 'binary')}
        p.wHwBE = function (a, b) {return this.wH(a).wB(b).e()}

    }
    function status(){
        p.st = p.status;
        p.sS = p.sSt = p.sendStatus

        p.s4= p.s400 = function(){ return this.STS(400) }
        p.z = function (z) {return this.tx().w(z + "\n").e()}
        p.s403 = p.s4 = function () {
            return this.sTs(403)
        }
        p.ok = function () {
            return this.s('OK')

            n()
        }

    }
    function file(){
        p.a = p.append;

        p.f = p.sF = p.sendFile;
        p.at = p.attachment;
        p.dl = p.download

    }
    function beta(){
        p.v = p.vary // ?
        p.t = p.ty = p.type;
        p.tx = function () {return this.wH(500, {"Content-Type": "text/plain"})}
        p.$p=function(){var g=G(arguments)
            this.s(_p.apply(null,g))}

    }
}
function users(){
    Midware.user = function (q, p, n) {

        if (q.loggedIn) {

            models.user.findOne({username: q.username}, function (z, u) {
                if (z) {
                    n(z)
                }
                else if (u) {
                    q.user = p.locals.user = u
                    q.username = p.locals.username = u.username
                    q.userId = p.locals.userId = u._id
                }
                n()
            })
        }
        else {
            // $l('middleware says NOT logged in :(')
            p.json('guest')
        }


    }
//var mP=u.mugPath;$l('mP:');$l(mP);p.l.mP=q.mP=mP;
// $m.image.findOne({relPath:mP},function(z,d){if(!d){$l('-m')}else{$l('+m');
// p.l.M=q.M=mug;p.l.mp=q.mp=q.M.relPath;p.l.mid=q.mid=q.M._id}n()})
// if(!u){q.s.u=null;q.s.save(function(){p.r('guest')})}
    Midware.Pics = Midware.P = function (req, res, next) {


        $m.pic.find(
            {u: req.I},


            function (err, pics) {

                var array = []

                _.each(
                    pics,

                    function (pic) {
                        array.push(
                            _S(pic._id) + pic.e
                        )  // $l(    )


                    })

                res.locals.I = array
                next()
            })
    }
    Midware.pic = Midware.p = function (req, res, next) {

        models.pic.findById(
            req.params.p,


            function (err, i) {


                if (err) {
                    next(err)
                }


                res.locals.i = '/' + i._id


                req.i = i


                next()

            })


    }
    Midware.Books = Midware.B = function (req, res, next) {

        Book.find({

                user: req.I
            },

            function (err, books) {
                if (err) {
                    next(err)
                }
                ;
                if (!books) {
                    'no book!'
                }
                res.locals.books = books
                next()
            })

    }
    Midware.book = Midware.book = function (req, res, next) {


        models.book.findOne({

                u: req.I,

                title: req.p.t
            },


            function (err, book) {
                if (err) {
                    next(err)
                }

                res.locals.book = book

                if (req.params.n) {

                    var c = res.locals.n = book.c[n]
                }

                if (res.params.h) {
                    res.locals.h = c[n][h]
                }

                next()

            })
    }
//module.exports = Midware

    function userLogin(){
        //checks session to see if user is logged in
        //  p.locals.loggedIn = q.loggedIn = (q.session.username)? true: false   //=  res.locals.li=  q.li

        //  p.r = p.render

        // q.username = q.session.username


        // $l('MAIN middleware says q.username = ' + q.username)

    }
}}
function plucker() {
    MW.plucker = function (q, p, n) {
        li('plucker');
        l();
        l(modl, 'modl');
        p.l.p = q.p;
        p.l.pam = q.p['pam'];
        m[modl].findOne({name: q.pam}, function (Z, doc) {
            z(Z);
            if (!doc) {
                l('!doc');
                q.l[modl] = q[modl] = null;
                n()
            } else {
                q.l[modl] = q[modl] = doc;
            }
            n();
        })
        n();
    }

    d(q.s);


    MW.requireUser = function () {
        if (q.s.u) {
            m.user.findOne({username: q.session.u}, function (Z, user) {
                z(Z);
                if (!user) {
                    l('!!! USER HAS SESSION USERNAME BUT NO ACCOUNT');
                }
                q.U = user;
                n();
            })
        }
        else {
            q.f('info', 'this page happens to require that you are logged in');
            l('-> login');
            p.d('/login')
        }
    }


    MW.setPage = function (q, p, n) {
        var TT;
        TT = true;
        TEST = {test: {status: 'pass'}};
        li('setPage');
        S = q.session;
        page = q.path;
        if (TT) {
            l(page, 'page')
        }
        if (S.cP == page) {
        }
        else if (S.cP === undefined) {
            cP = S.cP = 'root';
        }
        else {
            lP = S.lP = S.cP;
            cP = S.cP = page;  //face.cP = S.cP  ; face.lP = S.lP ;
            l('change recognized..');
            l(cP, 'cP');
            l(lP, 'lP');
            l(S.cP, 'S.cP');
            l(S.lP, 'S.lP');
        }

        n();
    }
}
function requireUser(){

    module.exports = function  (q, p, n)  { l('rU');


        d(q.s);


        if (q.s.u) {
            m.user.findOne({username: q.session.u} , function(Z, user){
                z(Z);
                if (!user) {l('!!! USER HAS SESSION USERNAME BUT NO ACCOUNT');}
                q.U = user;     n();
            })

        }




        else {     q.f('info', 'this page happens to require that you are logged in'); l('-> login'); p.d('/login')   }

        l('rU');









    }
}
function routes() {
    module.exports = function () {     // a IS APPLICATION, WHICH WRAPS AROUND (AND HANDLES) THE ROUTER
        //   HTTP-SERVER : REGEX ROUTE HANDLING - FIRST  -- INSTALLS/CONFIGURES PATHWAYS (PROVIDES ROUTER WITH PATHS)

        l('routes');


        a.use(a.router);
        plucker = r('./wappy/plucker');
        setPage = r('./wappy/setPage');
        requireUser = r('./wappy/requireUser')
        var p = './pathways/pathways/';
        var dirs = fs.readdirSync(p).map(function (dir) {
            return path.join(p, dir)
        }).filter(function (file) {
            return fs.statSync(file).isDirectory()
        });
        d(dirs);
        _.each(dirs, function (dir) {
            _.each(fs.readdirSync(dir), function (file) {
                var controller = path.resolve(path.join(dir, file))
                d(controller);
                r(controller)(a);
            })
        })
        a.get("/y", function (q, p, n) {
            console.log('w/:site');
            p.render('yanocode')
        })
        a.get("/w/y/:site", function (q, p, n) {
            console.log('w/:site');
            p.render('yano/' + q.params['site'])
        })
        a.get("/w/g/:site", function (q, p, n) {
            console.log('w/:site');
            p.render('graphics/' + q.params['site'])
        })
        a.get("/w/s/:site", function (q, p, n) {
            console.log('w/:site');
            p.render('sockets/' + q.params['site'])
        })


        _.each(['/../mind/emotions/', '/../mind/img/', '/../mind/emotions/mugs', '/../mind/emotions/art/',
                '/../development/', '/../development/client/',
                '/../../pathways/', '/../../pathways/dendrites/', '/../../wapps/lib/javascript/'],
            function (dir) {
                a.use(e.static(path.join(__dirname, dir)));
            }
        )
        httpServer = http.createServer(a)
        io = sio.listen(httpServer);
        io.set('log level', 1);
        ioio = new SessionSockets(io, mongoStore, cookieParser);


    }
}

function server(){
    module.exports = function (){li('cortex');


        http = r('http');  path = r('path'); fs = r('fs'); connect = r('connect');
        e = r('express'); a = e(); a.g = a.get; a.p = a.post;

        var MongoStore = require('connect-mongo')(e);cookieParser = e.cookieParser('xyz');
        sessionStore = new connect.middleware.session.MemoryStore();mongoStore = new MongoStore({ db: 'brain' })
        flash = r('connect-flash');sio = r('socket.io');SessionSockets = r('session.socket.io');

        a.set('port',  process.env.PORT || 4000);


        a.set('views',    __dirname + "/../../wapps/");  //vws = __dirname + '/../../skull/faces/';a.set('views', vws);  a.set('views', vws);


        a.set('view engine', 'jade');  //vws = __dirname + '/../skull/'
        a.use(e.favicon());  a.use(e.logger('dev')); if ('development' == a.get('env')) {  a.use(e.errorHandler()); }
        a.use(e.bodyParser({keepExtensions: true, uploadDir: __dirname + "/../mind/img" }));
        a.use(e.methodOverride()); a.use(cookieParser); a.use(e.session({store: mongoStore})); a.use(flash());



// PRELOAD JS // AUTO-GENERATE CREATEJS MANIFEST JSON OB BASED ON FILES IN MIND/EMOTIONS/ART DIRECTORY
        var synapse = fs.readdirSync('./mind/emotions/art');   arr = [];     mf = [];
        for (var pic in synapse)  {
            id = path.basename(  synapse[pic]).split('.')[0];
            src = '/art/' + path.basename(  synapse[pic] );
            obStr = "{src: '" + src + "', id:'" + id + "'}";
            arr.push( obStr );
        }
        list = arr.join();
        mf = ("[" + list + "]")


//console.log('mf: ') //console.dir(mf) //tell('graphics manifest') // ls('preload','used fs.readdirSync to set mf = to createjs graphics manifest', mf)




////////////// LOADS MODELS! (onto global m) ////////////////////
        g = mongoose = require('mongoose'); g.connect("mongodb://localhost/wap", function(z){ l('g conn cb')})

        loadIdeas = function (ideas, ob){
            for (var idea in ideas) {ob[idea] = mongoose.model(idea, mongoose.Schema(ideas[idea]))}
            return ob}

        ideas = require('./../mind/thoughts/ideas');  m = memory = loadIdeas(ideas (mongoose), mongoose ) ;
        each(m.models, function(d){console.dir(d.modelName)}  )

        uFF = function (userField){
            var arr = []; uf = userField[0];   if( uf.paths ){ uf = uf.paths }
            each (uf,function(field, index){if(index != '_id' && index!= 'stamp'){ arr.push(index)}})
            return arr}

        fields = {}; each (ideas(mongoose).user, function(userField, index){
            if(_.isArray(userField))  { fields[index]=  uFF(userField) } });       l('u sub-docs and fields');d(fields);l();
// each(m.models.user.schema, function(sm){d(sm); l();l();})  // l("  m = memory = loadIdeas( require('./../mind/thoughts/ideas')(mongoose), mongoose )")






    }

}

function setPage(){
    module.exports =  function (q, p, n) { var TT ; TT = true;   TEST = {test: {status: 'pass'}  }; li('setPage') ;

        S = q.session;
        page  = q.path;   if(TT){l(page,'page')}

        if (S.cP == page) {
            if (TT) { l('refresh') }
        }

        else if (S.cP === undefined) {
            cP = S.cP = 'root';     if(TT){l(cP, 'cP')}
        }

        else {
            lP = S.lP = S.cP; cP = S.cP= page;
            if(TT)  { l('change recognized..'); l(cP, 'cP');  l(lP, 'lP'); l(S.cP, 'S.cP');  l(S.lP, 'S.lP');    }
        }

        //face.cP = S.cP  ; face.lP = S.lP ;

        n();






    } }





