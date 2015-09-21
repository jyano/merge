module.exports=function(dirN){

    //static
    _.e([
        'bone/blog',
            'bone/tpcs',
            'public/pics',
            'front/both',
            'front', 'front/graphics', 'front/handy',
            'boot', 'boot/deps', 'boot/deps/css', 'boot/deps/fonts',
            'front/graf', 'front/graf/deps', 'style',
            'front/fiz', 'front/fiz/deps',
            'show', 'show/mugApps', 'show/spazGames',
            'jqui', 'jqui/deps', 'jqui/deps/images', 'jqui/custWid',
            'knock', 'knock/deps', 'knock/custBind', 'knock/comps',
            'bone', 'bone/deps', 'bone/tuts', 'bone/bbApps', 'mar', ''
        ], function(dir){

        $a.use($e.static(dirN+'/'+dir))
    })

    //middleware
    $w=$Mw = function (q, p, next) {
        q.ss = q.session; p.lc = p.locals

        //user
        q.lI = q.loggedIn =  p.lc.lI = p.lc.loggedIn =   (q.ss.username ? true : false)
        q.un = q.username = q.ss.username

        next()
    }

    $Mw.user=function(q,p,next) {
        if (q.loggedIn) {

            $Md.user.findOne({username: q.username}, function (z, u) {
                if (z) {
                    next(z)
                }

                else if (u) {
                    q.user = p.locals.user = u;
                    q.username = p.locals.username = u.username;
                    q.userId = p.locals.userId = u._id

                    next()
                }


            })

            //  }
//**    else {p.json('guest')}       // $l('middleware says NOT logged in :(')
//**    } //var mP=u.mugPath;$l('mP:');$l(mP);p.l.mP=q.mP=mP; // $m.image.findOne({relPath:mP},function(z,d){if(!d){$l('-m')}else{$l('+m'); // p.l.M=q.M=mug;p.l.mp=q.mp=q.M.relPath;p.l.mid=q.mid=q.M._id}n()}) // if(!u){q.s.u=null;q.s.save(function(){p.r('guest')})} //mwPics()


            // $a.g('/render/:page', function (q, p) { p.render(q.params.page) })



        }
    }

    $a.use($Mw)
    _appPam=function(q){
        return {
            app: q.params.a,
            pam: q.params.p
        }
    }
    //bloggy
    bloggy()
    function bloggy(){

        $a.g('/api/blogs', function (q, p) {Blog.find(function (z, docs) {p.send(docs) }) })
        $a.post('/api/blogs', function (q, p) {var blog = new Blog(q.body)
            blog.save(function (z, doc) {p.send(doc)})})
        $a.delete('/api/blogs/:id', function (q, p) {Blog.remove({_id: q.params.id}, function (z, d) {p.send({_id: q.params.id})})})
        $a.put('/api/blogs/:id', function (q, p) {

            $l('got an UPDATE req for _id: ' + q.params.id)
            Blog.update({_id: q.params.id}, q.body, function (z, doc) {

                p.send({_id: q.params.id})
                //docs.forEach(function(item){console.log('got request for _id: ' + item._id)})

            })

        })
    }
    //jade
    _appPam=function(q){
       return { app: q.params.a, pam: q.params.p
        }
    }


    $a.g('/wap/:app/:pam?', function (q, p) {
        p.render(  'wap',   {
            app: q.params.a,
            pam: q.params.p
        }     )
    })

    $a.g('/play/:a/:p?',function(q,p){
        p.render(  'play',   _appPam(q)      )
    })


    $a.g('/mvc/:a/:p?/:p2?/:p3?', function (q, p) {
        p.render(   'mvc',    _appPam(q)      )
    })










    muggy()

    function muggy(){
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
        function cutouts(){
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

            }) }
        function status(){
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
            }) }
    }



    $a.g('/',function(q,p){p.send('test')})
    $a.use( $a.router )


}






function Docs(){
    $l('- routes: DOCS on server')
    d = 2;
    n = 2
    $l('d: ' + d)
    $l('n: ' + n)
    $dcs = {1: {t: 'doc 1', id: 1}}
    $nts = {1: {1: {t: 'note 1'}, 2: {t: 'another 2'}}}

    $a.get('/dcs', function (q, p) {


        $l(" $a.get('/dcs',function(q,p){var res=[]; _.e($dcs, function(dc){ res.push(dc) }); p.json(res)}) ")
        var res = [];

        _.e($dcs, function (dc) {
            res.push(dc)
        })

        p.json(res)

    })


    $a.post('/dcs', function (q, p) {
        $l("$a.post('/dcs', function(q,p){var dc=q.body, did; dc.id= d++; $dcs[ dc.id ] = dc; p.json(dc) })")

        var dc = q.body, did;
        dc.id = d++;
        $dcs[dc.id] = dc;
        p.json(dc)

    })
    $a.put('/dcs/:id', function (q, p) {
        $l("$a.put('dcs/:id', function(q,p){var dc=q.body; $dcs[ q.params.id ] = dc; p.json(dc) })")
        var dc = q.body;
        $dcs[q.params.id] = dc;
        p.json(dc)
    })
    $a.get('/dcs/:did/nts', function (q, p) {
        // $l("$a.get('/dcs/:did/nts',function(q,p){ var res=[]; _.e($nts[q.params.id], function(nt){ $l('nt!'); res.push(nt)}); return res })")
        console.log($nts)
        var res = [];
        _.e($nts[q.params.did], function (nt) {

            $l('nt!')

            res.push(nt)
            $l('res:')
            console.dir(res)
        })

        p.json(res)
    })
    $a.post('/dcs/:did/nts', function (q, p) {
        //   $l("var did = q.params.id, nt = q.body; if (!$nts[did]) { $nts[did] = {} }; nt.id = n; $nts[did][n] = nt; n++; p.json(nt) })")
        var did = q.params.id, nt = q.body;
        if (!$nts[did]) {
            $nts[did] = {}
        }
        ;
        nt.id = n;
        $nts[did][n] = nt;
        n++;
        p.json(nt)
    })
    $a.put('/dcs/:did/nts:nid', function (q, p) {
        $l("$a.put('dcs/:did/nts:nid', function(q,p){ var nt=q.body; $nts[q.params.did][q.params.nid] = nt; p.json(nt) })")
        var nt = q.body;
        $nts[q.params.did][q.params.nid] = nt;
        p.json(nt)
    })
    $a.get('/dcs/nts', function () {
        $l('/dcs/nts ???????')
    })

}

function depMaybe(){

    function mwPics() {
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
    }
    function bloggy(){
        $a.g('/api/blogs', function (q, p) {
            Blog.find(function (z, docs) {//docs.forEach(function (item) {console.log('got request for _id: ' + item._id)})
                p.send(docs) //docs.forEach(function(item){console.log('got request for _id: ' + item._id)})
            })
        })
        $a.post('/api/blogs', function (q, p) {//$l('recieved post request');for (var key in q.body) {console.log(key + ': ' + q.body[key])}
            var blog = new Blog(q.body)
            blog.save(function (z, doc) {
                p.send(doc)
            })
        })
        $a.delete('/api/blogs/:id', function (q, p) {
            Blog.remove({_id: q.params.id},
                function (z, d) {
                    p.send({_id: q.params.id})
                })
        })
        $a.put('/api/blogs/:id', function (q, p) {

            $l('got an UPDATE req for _id: ' + q.params.id)
            Blog.update({_id: q.params.id}, q.body, function (z, doc) {

                p.send({_id: q.params.id})
                //docs.forEach(function(item){console.log('got request for _id: ' + item._id)})

            })

        })
    }
    $w = $Mw = function (q, p, next) {
        q.ss = q.session
        p.lc = p.locals
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

    }

    $Mw.user=function(q,p,n) {
        if (q.loggedIn) {
            $Md.user.findOne({username: q.username}, function (z, u) {
                if (z) {
                    n(z)
                } else if (u) {
                    q.user = p.locals.user = u;
                    q.username = p.locals.username = u.username;
                    q.userId = p.locals.userId = u._id
                }
                ;

                next()
            })

            //  }
//**    else {p.json('guest')}       // $l('middleware says NOT logged in :(')
//**    } //var mP=u.mugPath;$l('mP:');$l(mP);p.l.mP=q.mP=mP; // $m.image.findOne({relPath:mP},function(z,d){if(!d){$l('-m')}else{$l('+m'); // p.l.M=q.M=mug;p.l.mp=q.mp=q.M.relPath;p.l.mid=q.mid=q.M._id}n()}) // if(!u){q.s.u=null;q.s.save(function(){p.r('guest')})} //mwPics()


            // $a.g('/render/:page', function (q, p) { p.render(q.params.page) })



        }


    }
}