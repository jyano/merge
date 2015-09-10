dirs=[

    '', 'public/pics',
    'front/both',

    'front', 'front/graphics', 'front/handy',

    'boot', 'boot/deps', 'boot/deps/css',   'boot/deps/fonts',

    'front/graf', 'front/graf/deps',

    'front/fiz', 'front/fiz/deps',


    'show', 'show/mugApps', 'show/spazGames',
    'jqui',  'jqui/deps',  'jqui/deps/images',


    'knock', 'knock/deps', 'knock/core', 'knock/nest', 'knock/apps',

    'backbone',  'backbone/deps',
     'backbone/ev', 'backbone/nest', 'backbone/view', 'backbone/apps',
    'backbone/marion'


]




reqs()
both()
$l('welcome to merge')
mongoose.connect("mongodb://localhost/brain", function () {
    $l('mongo connected')
})
mongoStore = new (connectMongo(express))({db: 'brain'})
$Md = md = $m = models = require('./server/models')
expr()
midwar()
routes()
$a.use( $a.router )
_.e(dirs, function(dir){
    dir= __dirname +'/'+ dir
    $a.use($e.static(dir))
})
sv = httpServer = http.createServer($a)
httpServer.listen(80, function () {
    $l('server listening on port 80')
})
sock()


function reqs() {
    http = require('http')
    path = require('path')
    fs = require('fs')
    mongoose = require('mongoose')
    express = require('express')
    connectMongo = require('connect-mongo')
    socketIO = require('socket.io')
    sessionSocketIO = require('session.socket.io')
    require('./server/defaultMug')
}
function both(){
    _ = require('./server/us')
    F = _.isFunction
    S = _.isString
    U = _.isUndefined
    D = function(a,b){return !U(a)}
    A = _.isArray
    O = _.isObject
    G = function(a){
        if(!_.isArguments(a)){return}
        var p, n, m,d
        a=_.toArray(a)

        if(_.last(a)==='+'){p=a.pop()}
        if(_.last(a)==='-'){n=a.pop()}
        if(_.last(a)==='*'){m=a.pop()}
        if(_.last(a)==='/'){d=a.pop()}

        return D(a,{
            z: a.length,
            f: _.first(a),l: _.last(a),
            r: _.rest(a),i: _.initial(a),
            p:p,
            P:!p,m:m,M:!m,d:d,D:!d,n:n,N:!n

        })
    }
    $l = function(a,b){


        if(b){
            console.log('{'+a+':'+b+'}')
            return b
        }

        console.log(a)
        return a
    }
    $d = function(a,b){cD=function(a){console.dir(a);return a}
        if(!b){return cD(a)} cL(a);return cD(b)}
    _.e= _.each
    _.m= _.map
}
function expr() {
    $e = require('express');
    $a = $e();
    $a.u = $a.use;
    $a.g = $a.get;
    $a.po = $a.post
    _.e({
        port: process.env.PORT || 4000,
        'view engine': 'jade',
        views: __dirname + '/server/views/'
    }, function (v, k) {
        $a.set(k, v)
    })

    $a.use(express.bodyParser({
        uploadDir: __dirname + "/public/uploads",
        keepExtensions: true
    }))
    $a.use(cookieParser = express.cookieParser('xyz'))
    $a.use(express.session({
        store: mongoStore,
        secret: 'xyz'
    })); //$a.use( express.favicon() )
}
function midwar() {

    $w = $Mw = function (q, p, n) {
        mW()

        //if user is logged in,
        //he will have a username set in their session

        //checks session to see if user is logged in
        var lI = q.ss.username ? true : false

        //set lI status on req
        q.lI = q.loggedIn = lI

        //set it also on res.local
        p.lc.lI = p.lc.loggedIn = lI

        //set username itself also on req
        q.un = q.username = q.ss.username

        // $l('MAIN middleware says q.username = ' + q.username)

        n()

        function mW() {
            q.ss = q.session
            p.lc = p.locals
        }
    }
    $Mw.user = function (q, p, n) {

        if (q.loggedIn) {
            $Md.user.findOne({
                    username: q.username
                },
                function (z, u) {
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


    } //var mP=u.mugPath;$l('mP:');$l(mP);p.l.mP=q.mP=mP;
// $m.image.findOne({relPath:mP},function(z,d){if(!d){$l('-m')}else{$l('+m');
// p.l.M=q.M=mug;p.l.mp=q.mp=q.M.relPath;p.l.mid=q.mid=q.M._id}n()})
// if(!u){q.s.u=null;q.s.save(function(){p.r('guest')})}
    $Mw.Pics = $Mw.P = function (q, p, n) {


        $m.pic.find(
            {u: q.I},


            function (z, pics) {

                var array = []

                _.each(
                    pics,

                    function (pic) {
                        array.push(
                            _S(pic._id) + pic.e
                        )  // $l(    )


                    })

                p.locals.I = array
                n()
            })
    }
    $Mw.pic = $Mw.p = function (q, p, n) {

        $Md.pic.findById(q.params.p,

            function (z, i) {
                if (z) {
                    n(z)
                }
                p.locals.i = '/' + i._id
                q.i = i
                n()
            })


    }
    $a.use($Mw)
}
function routes(){

    $a.g('/render/:page', function (q, p) {
        p.render(q.params.page)

    })
    $a.g('/', function (q, p) {
        p.send('this is a test')
    })
    $a.g('/play/:app/:pam?', function (q, p) {
        p.render('play',
            {
                app: q.params.app,
                pam: q.params.pam
            })
    })
    $a.g('/wap/:app/:pam?', function (q, p) {
        p.render('wap', {
            app: q.params.app, pam: q.params.pam
        })
    })
    muggy()

    //game
    $a.g('/play/:a/:p?', function(q,p){
        p.render('play',{app:q.params.a,pam:q.params.p})
    })

    $a.g('/mvc/:a/:p?', function(q,p){
        p.render('mvc',{app:q.params.a,pam:q.params.p})
    })

    function muggy() {
        $a.g('/users', function (q, p) {
            // for all users g ->  [{id, username, mug, status}]

            models.user.find(q.body,

                function (z, users) {
                    if (users) {
                        p.json(
                            _.map(users, function (u) {

                                return {

                                    id: u.id,
                                    u: u.username,
                                    un: u.username,
                                    username: u.username,
                                    mug: u.mug || 'no mug',
                                    status: u.status || 'no status'

                                }
                            })
                        )
                    }
                })


        })
        $a.po('/user', function (q, p, n) {
            models.user.create(q.body, function (z, u) {
                if (z) {
                    $l(z.code == 11000 ? '!!' : '!');
                    $d(z);
                    p.json('error');
                    n(z)
                }
                _.extend(q.session, {username: u.username, loggedIn: true}).save(function () {
                    p.json(u.username)
                })
            })
        })
        $a.g('/loggedIn', $w.user, function (q, p) {

            $l('loggedIn? req.loggedIn: ' + q.loggedIn + ', req.username: ' + q.username)
            p.json(q.username)
        })
        $a.g('/username', $w.user, function (q, p) {
            p.json(q.username)
        })
        $a.po('/login', function (q, p, n) {

            $l('/login')

            $l(q.body.username);
            $l(q.body.password)

            models.user.findOne(
                {username: q.body.username, password: q.body.password},

                function (z, u) {
                    if (z) {
                        n(z)
                    }
                    if (!u) {
                        $l('FAIL!!');
                        p.json('guest')
                    }

                    else {

                        $l('logged in: ' + u + ' !')
                        q.session.username = u.username
                        q.session.loggedIn = true

                        _.extend(q.session, {username: u.username, loggedIn: true})
                            .save(function () {
                                $l('session saved ' + q.session.username + ', ' + u.username)
                                p.json(u.username)
                            })
                    }
                })
        })
        $a.g('/logOut', $w.user, function (q, p) {
            $l('logging out')
            _.extend(q.session, {username: null, loggedIn: false}).save(function () {
                p.json('false')
            })
        })
        $a.g('/user/:username', function (q, p) {
            $l('/user/:username')
            models.user.findOne({username: q.params.username},
                function (z, u) {
                    if (u) {
                        p.json({
                            id: u.id,
                            username: u.username,
                            mug: u.mug || null,
                            status: u.status || 'no status'
                        })
                    }
                })
        })
        $a.g('/myMug', $w.user, function (q, p) {
            $l('--------testing myMug--------')
            // $l('q.body: ' +  q.body)
            $l('q.username: ' + q.username)
            models.user.findOne({username: q.username}, function (z, u) {
                // $l('in findOne callback: u data: ' + u)
                p.send(u.mug)
            })
        })
        $a.g('/mugByUsername/:username', function (q, p) {
            //$l('req.params.username: ' + req.params.username)
            models.user.findOne({
                username: q.params.username
            }, function (z, u) {
                // $l(user + ', ' + user.mug)
                p.send(u.mug)
            })
        })
        $a.po('/changeMug', $w.user, function (q, p) {  // could be a put?
            q.user.mug = q.body.url
            q.user.save(function (z, m) {
                p.send(m)
            })
        })
        $a.del('/user', function (req, res, next) {
            models.user.remove(req.body, function (err, data) {
                res.json(data)
            })
        })
        $a.po('/pic', $w.user, function (q, p, n) {

            //when a user uploads a pic..
            // by default, it first goes to /public/uploads..
            // but then i automatically copy it to /pic/uploads..
            // example:
//    origPath: public/uploads/58bfc.JPG
//    newPath: public/pics/55e32.JPG
            //notice file names are different
            //the first name is random at time of orig file save
            //new name is based on mongoId (also came from random when pic saved to db)
            //i save by mongo id so it can be easily fetched!


            $f = fs
            $f.rF = $f.readFile
            $f.wF = $f.writeFile
            $p = path
            $p.rs = $p.resolve
            var i = q.files.png || q.files.i
            models.pic.create(Pic(q.userId, i), function (z, pic) {
                if (z) {
                    $l('ERR:' + z)
                }
                copyFileTo(i.path, newPath(i, pic), function () {
                    pic.save(savedToMongo)
                }) //<- $f.rF(i.path,  function(z, fileData){$f.wF(newPath(i, pic), fileData,  savedToFile)})
                function savedToMongo(z) {
                    if (z) {
                        $l('z');
                        n(z)
                    }
                    else {
                        $l('pic saved');
                        p.redirect('/wap/uploads') //  p.redirect('back')
                    }
                }
            })
            function copyFileTo(origPath, newPath, fn) {
                $f.rF(origPath, function (z, fileData) {
                    $f.wF(newPath, fileData, fn)
                })
            }

            function newPath(i, pic) {
                var newPath = $p.rs(i.path, '../../pics/', _id(pic) + pic.ext)
                $l('origPath: ' + i.path)
                $l('newPath: ' + newPath)   //for some reason extensions are saved with a starting '.'
                return newPath
                function _id(pic) {
                    return pic._id.toString()
                }
            }

            function Pic(id, i) {
                return {
                    user: id,
                    ext: $p.extname(i.path) || '.png',
                    name: i.name,
                    size: i.size,
                    modified: i.lastModifiedDate
                }
            }

        })
        $a.del('/pic', function (q, p) {
            $l('remove a pic')//remove a pic
            models.pic.remove(q.body, function (z, d) {
                p.json(d)
            })
        })
        $a.g('/pics', function (req, res) {  //get all pics(files) (everyone's)
            models.pic.find(function (err, data) {
                res.json(data)
            })
        })
        $a.g('/myPics', $w.user, function (q, p) {

            models.pic.find({
                    user: q.userId
                },

                function (z, pics) {
                    p.json(pics)
                })
        })
        cutouts()
        status()
        function cutouts() {

            //upload a dataUrl!!
            $a.po('/uplI', $w.user, function (req, res, next) {

                $l('uplI')

                //if(req.f.png){req.f.i= q.f.png}
                // var i=req.f.i
                models.img.create({u: req.userId, d: req.du}, function (err, img) { //$d(img)
                    fs.readFile(img.path, function (err, file) {
                        fs.writeFile(
                            $d(path.resolve(img.path, '../../p/', img._id.toString()) + img.e),
                            file,
                            function (err) {
                                img.save(function (err) {
                                    if (err) {
                                        $l('err')
                                        next(err)
                                    }

                                    else {

                                        $l('uploaded')
                                        res.redirect('back')
                                    }
                                })
                            })
                    })

                })


            })
            //************** this is where we save new cutout-images
            $a.po('/img', $w.user, function (req, res, next) {

                models.img.create(
                    {
                        u: req.username,

                        d: req.body.d,

                        dats: req.body.dats,

                        username: req.username,

                        data: req.body.d,

                        physicsData: req.body.dats

                    },


                    function (err, image) {
                        return res.json(image)
                    }
                )
            })  //new image
            //remove an image (by id) //cutouts?
            // $a.po('/rmI', function( req, res ){   models.img.remove(  req.body,  function(err, data){res.json(data)} )  })
            $a.del('/img', function (req, res) {

                $l('del /img')
                models.img.remove(req.body, function (err, data) {
                    res.json(data)
                })
            })
            //find all User's images?
            $a.g('/img', $w.user, function (req, res) {

                models.img.find({u: req.username},

                    function (err, data) {
                        res.json(data)
                    })

            })
            //find all   images on site?
            $a.g('/allImages', $w.user, function (req, res) {

                models.img.find({},

                    function (err, data) {
                        res.json(data)
                    })

            })
            //g all images of a sp. user
            $a.g('/images/:username', $w.user, function (req, res) {

                models.img.find({username: req.params.username},

                    function (err, data) {
                        res.json(data)
                    })

            })
        }

        function status() {
            $a.g('/myStatus', $w.user, function (req, res) {
                models.user.findOne({username: req.username}, function (err, data) {
                    res.send(data.status || 'no status')
                })
            })
            //** get a dataUrl from an img-ob id ++++ physics! //can dep by using oid's??
            $a.po('/getimagebyid', function (req, res, next) {
                $l('dud')

                // $l('req.body.data')
                // $l(req.body.d)

                models.img.findById(
                    //'54d4506172f7e12a05000012',
                    req.body.data,

                    function (err, data) {

                        //   $l('data: ')
                        console.dir(data)

                        res.send(data)
                    })

            })
            $a.po('/dats', function (req, res) {
                models.img.findById(req.body.d, function (err, data) {

                    if (O(data)) {
                        res.json(data)
                    }

                })
            })
            $a.po('/changeStatus', $w.user, function (q, p) {

                q.user.status = q.body.status
                q.user.save(function (z, u) {
                    p.json(u.status)
                })
            })
        }
    }
}




function sock() {
    io = socketIO.listen(httpServer)

    io.set('log level', 1)

    ssK = new sessionSocketIO(io, mongoStore, cookieParser)

    KK = sockets = io.sockets
    US = []  //  array-hash: socketId, username
    $idToName = function (name) {
        var id
        id = _.invert(US)[name]
        return id
    }
    $nameToId = function (id) {
        return US[id]
    }
    $in = KK.rm = function (rm) {
        var rm = KK.in(rm)
        rm.em = rm.emit
        return rm
    }
    RMS = KK.manager.rooms //an array of rooms //they all start with a slash
    $rm = RMS.rm = function (rm) {
        return KK.manager.rooms['/' + rm]
    }
    $getRoomUserIds = function (rm) {
        //$l('$getRoomUserIds')
        var ids = KK.manager.rooms['/' + rm]
        //console.dir(ids)
        return ids
    }
    $getRoomUsernames = function (rm) {
        var ids, uns
        //$l('$getRoomUsernames')

        ids = $getRoomUserIds(rm)
        uns = _.m(ids, function (id) {
            return US[id]
        })
        //console.dir(uns)
        return uns
    }

    KK.on('connection', function (k) {

        k.on('id', function (un) {
            //k.em('l',  $l(k.id))  //server logs, client logs

            US[k.id] = un  //associate socketId with username

            //$l('US: ' + US +  US[ k.id ] ) //log USER and username

            //all users should emit this initially
            // to list its username with its id

        })


        k.on('jRm', function (rm) {
            $l('joining room: ' + rm)
            k.join(rm)

            k.emit('rmUd', {
                rm: rm, US: _.map(
                    $getRoomUserIds(rm),
                    function (un) {
                        return US[un]
                    })

            })
        })
        k.on('rmUd', function (rm) {
            // $l('on rmUd')

            k.emit('rmUd', {  //$l('$RmUd')

                    rm: rm,
                    users: $getRoomUsernames(rm)
                }

                // console.log('ud: '); console.dir(ud)

            )
        })
        k.on('ChatRmMs', function (ms) {
            $l('chatRmMs: ');
            console.dir(ms)
            KK.in(ms.rm).emit('ChatRmMs', ms)
        })


        k.on('myUpdate', function (ud) {
            k.broadcast.emit('updateGuy', ud)
        })

        k.on('sendInvite', function (invite) {

            k.broadcast.emit('newInvite', invite)
        })

        k.on('acceptInvite', function (invite) {
            k.emit('inviteAccepted', invite)
            k.broadcast.emit('inviteAccepted', invite)
        })


        k.on('bub', function (tx) {
            $l('new bub: ' + tx)
            k.broadcast.emit('bub', tx)
        })


        function socketGame() {

            Gs = [{m: 'guy', u: 'ii', x: 140, y: 140}, {m: 'chicks', u: 'jj', x: 140, y: 240}]
            Gs2 = [{n: 'c', x: 300, y: 200}, {n: 'c', x: 300, y: 200}]

            lLi = function (g) {
                if (g) {
                    $l('in');
                    return true
                } else {
                    $l('-in')
                }
            }
            Guy = function (s) {
                return {n: s.u, m: s.m, x: _.r(0, 830), y: _.r(0, 300)}
            }
            snSM = function () {
                m.guy.find({}, function (z, m) {
                    k.b.e('mU', m)
                    k.e('mU', m)
                })
            }
            move = function (a, b, d) {
                if (d == 'u') {
                    a.y -= b
                }
                ;
                if (d == 'd') {
                    a.y += b
                }
                ;
                if (d == 'l') {
                    a.x -= b
                }
                ;
                if (d == 'r') {
                    a.x += b
                }
                ;
                return a
            }

            /*





             o('eG2',function(){
             m.guy.findOne(
             {n:s.u},function(z,g){if(!(g)){l('nP!:'+s.u+'!');
             m.guy.create(Guy(s),function(z,g){if(z){n(z)}
             k.b.e('nPlr',g)})}
             snSM()})})

             o('eG',function(){console.dir(s);
             if(!(_.where(Gs,{u:s.u})[0])){
             Gs.push({m:s.m, u:s.u,x:300,y:400});
             l('nP!:'+s.u+'!');
             k.e('mp',Gs, s.u);
             //k.e('you',s.u);
             }//k.b.e('nP',Gs);
             })

             o('act',function(a){$d(a)})

             o('mvG',function(d){
             //if(!lLi(gMp[n])){nGtSM(n)}
             m.guy.findOne({n:s.u},function(z,g){
             if(z){$d(z)}
             move(g,100,d)
             g.save(function(){snSM()})})})})}

             theMap=m.map.findOne({name:'gMp'},function(z,m){gMp=m.Gs;loadGame()}); // gMp=theMap.Gs;g.save(theMap)
             gMp.Gs.fred={x:3,y:3};gMp=m.map.findOne({n:'gMp'});gMp={m:{x:20,y:100},l:{x:20,y:130},c:{x:20,y:10}};

             */


            //io.KK.clients().forEach(function (k) {IO.getSession(k, function (z,ss) {   ss.j='hi';ss.save()})}) //so far we have access only to client KK
            //k.on('fc',function(d){move(fc,10,d);k.e('fc',fc);k.b.e('fc',fc)})
            //k.on('showMap',function(){k.e('map',[{name:'a',x:200,y:200}])})
            //k.on('warp',function(g){if(!(isGuyInMap(g))){gMp.push(g);k.e('map',gMp); k.b.e('map',gMp)} else{k.e('map',gMp)}})

            isGuyInMap = function (p) {
                _.e(gMp, function (g) {
                    if (g.u == p.u) {
                        l('+map');
                        return g
                    }
                });
                l('-m');
                return false
            }
            fc = {x: 100, y: 100}

            players = []

            function nGtSM(n) {
                gMp[n] = {x: _.r(0, 830), y: _.r(0, 300)}
            }
        }

        /*

         //client asks am I in this room
         in: function(d){var rm
         if(rm=RMS.rm(d)) {k.em('res', rm[ k.id ]? true: false ) }
         else  {$l('not room'); k.em('res', '-')}
         },



         r: function(data){//rooms?
         k.em('res',  data? room[data]  : RMS())
         },



         who: function(un){  //user


         $l(    US[ un ] )  },


         _l : function(){k.em('l', 'hahhahahahahahahahahha')},
         l: function(d){
         d=d||'ping';
         k.em('l', 'sent: '+$l(d))
         },
         p : function(d, rm){
         return D(rm)? KK.rm(rm).em('p', d) :
         k.bc.em('p', d)
         },
         em : function(a,b,c,d){ k.em(a,b,c,d)},
         bc : function(a,b,c,d){

         $l('TOLD TO BROADCAST: '+ a)

         k.bc.em(a,b,c,d)

         }





         ,


         fn:  function(fn,a,b,c){ global[fn](a,b,c)  },  //it calls itself
         upop: function(d,n){ k.bc.em('upop',d,n)},


         kk:  function(data){
         k.em('res',  KK.clients(''))
         },

         //chat: function(data){k.bc.e('newChat',   {    n: data.n,   m: data.m  });k.em('youChat', {  n: data.n,  m: data.m  });k.emit('chat', 'cool')},
         //red:function(r,e,d){r=r||'frog';e=e||'frog';d=d||'frog';KK.in(r).emit(e,d)},

         x:function(m){
         k.e.to('sex').emit('l',m||'sexy')
         KK.in('sex').emit('l',m||'sexy')
         },

         dpop:   function(data,n){  k.bc.e('dpop',data,n) },

         du : function(data){
         k.em('im', data)
         k.bc.e('im', data); $m.img.create({})
         },

         newImg :function(data){
         $l('-newImg')
         $m.img.create(data, function(z, i){  k.emit('newImgAck', i)   })
         },




         //social
         IM: function(message){
         //this is triggered within a chatroom
         // when someone clicks on a user and 'chats' them up
         //will need to update other parts to also activate this
         // (instant messages from other parts of the site)
         $l('sending private message..')
         KK.in(message.toWho)
         .emit('IM', message)
         }

         })

         io.of('/chat').on('connection', function(d){$l('new chatter')})
         */


    })

}