$l('routes.js'); module.exports=function(){// $a.get('/wap', function(req,res){ res.render('wap') })

    $a.get('/wap/:app/:pam?', function(q, p){p.render('wap', {  app: q.params.app,   pam: q.params.pam    })})

    $a.post('/user', function(q,p,n){models.user.create(q.body, function(z,u){if(z){$l(z.code==11000?'!!':'!'); $d(z); p.json('error'); n(z) }
        _.extend(q.session, {username: u.username, loggedIn :true}).save(function(){ p.json(u.username) })
    })})
    $a.get('/loggedIn', $w.user, function(q,p){$l('loggedIn? req.loggedIn: '+ q.loggedIn + ', req.username: '+ q.username)
        p.json( q.username)
    })
    $a.get('/username', $w.user, function(q,p){p.json( q.username)})
    $a.post('/login',  function(q,p,n) {

        $l('/login')

        $l(q.body.username);
        $l(q.body.password)

        models.user.findOne(
            {username: q.body.username, password: q.body.password},

            function (z, u) {
                if (z) { n(z) }
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
    $a.get('/logOut', $w.user, function(q,p){$l('logging out')
        _.extend(q.session, {username : null, loggedIn : false}).save(function(){p.json('false')})
    })
    $a.get('/users', function(q,p){
        // for all users get ->  [{id, username, mug, status}]
        models.user.find( q.body,
            function(z, users){if(users){ p.json( _.m(users, function(u){ return {
                id: u.id,
                username: u.username,
                mug: u.mug || 'no mug',
                status: u.status || 'no status' }}))}})})
    $a.get('/user/:username', function(q, p){$l('/user/:username')
        models.user.findOne({username: q.params.username},
            function(z, u){
                if(u){
                    p.json({
                        id: u.id,
                        username: u.username,
                        mug: u.mug || null,
                        status: u.status || 'no status'})}})
    })


    $a.get('/myMug', $w.user, function(q,p){
        $l('--------testing myMug--------')
       // $l('q.body: ' +  q.body)
        $l('q.username: ' +  q.username)
        models.user.findOne({username:  q.username}, function(z, u){
           // $l('in findOne callback: u data: ' + u)
            p.send(u.mug)
        })
    })

    $a.get('/mugByUsername/:username', function(q,p){

        //$l('req.params.username: ' + req.params.username)

        models.user.findOne({username: q.params.username}, function(z,u){// $l(user + ', ' + user.mug)
                p.send(u.mug)})})

    $a.post('/changeMug', $w.user, function(q,p){  // could be a put?
        q.user.mug =  q.body.url
        q.user.save( function(z,m){ p.send(m) })
    })



    ////delete user  // does this('del') work like post or get (in terms of express)?
    $a.del('/user', function(req, res, next){
        models.user.remove(req.body, function(err,data){res.json(data)})
    })



    //upload pic
    $a.post('/pic', $w.user,  function(q, p, n){

        $l('upload new pic----------------------------------------------------------')

        var imgFile,
            ext

        if( q.files.png){  q.files.i = q.files.png   }

        imgFile = q.files.i;

        ext = path.extname( imgFile.path ) || '.png'

        picOb=  {
            user: q.userId,
            name: imgFile.name,
            size: imgFile.size,
            modified: imgFile.lastModifiedDate,
            ext: ext
        }


        models.pic.create(picOb, function(z, pic){
                if(z){ $l(z) }
                fs.readFile(imgFile.path,  function(z, file){
                    pic.path = path.resolve( imgFile.path, '../../pics/', pic._id.toString() )
                    pic.path+= pic.ext
                    $l('pic.path: ' + pic.path)
                    fs.writeFile( pic.path,  file,  function(z){
                        pic.save(  function(z){
                            if (z){
                                $l('z')
                                n(z) }
                            else {
                                $l('saved ------------------------------------------------------upload new pic')
                                p.redirect('back') }})
                    })
                })}
        )
    })



    //remove a pic
    $a.del('/pic', function(req,res){ models.pic.remove(req.body, function(err,data){ res.json(data) }) })



    //get all pics(files) (everyone's)
    $a.get('/pics', function(req, res){ models.pic.find(  function(err, data){  res.json(data)  }) })


    $a.get('/myPics', $w.user, function(q, p){

        models.pic.find({
                user: q.userId
            },

            function(z, pics){ p.json(pics)  })
    })




    ///////////////////
    ////
    //
    //upload a dataUrl!!
    $a.post('/uplI', $w.user, function(req, res, next){

        $l('uplI')

        //if(req.f.png){req.f.i= q.f.png}
        // var i=req.f.i
        models.img.create(  { u: req.userId, d: req.du },  function(err, img){ //$d(img)
            fs.readFile(img.path, function(err, file){
                fs.writeFile(
                    $d(path.resolve(img.path,'../../p/', img._id.toString())+img.e),
                    file,
                    function(err){
                        img.save(function(err){
                            if(err){
                                $l('err')
                                next(err)}

                            else {

                            $l('uploaded')
                            res.redirect('back')}})
                    })})

        })


    })




    //************** this is where we save new cutout-images

    $a.post('/img', $w.user,  function(req, res, next){

        models.img.create(

            {
                u: req.username,

                d: req.body.d,

                dats: req.body.dats,

                username: req.username,

                data: req.body.d,

                physicsData: req.body.dats

            },



            function(err, image){ return res.json(image)  }



        ) })  //new image

    //remove an image (by id) //cutouts?
    // $a.post('/rmI', function( req, res ){   models.img.remove(  req.body,  function(err, data){res.json(data)} )  })

    $a.del('/img', function( req, res ){

        models.img.remove(req.body, function(err, data){res.json(data)} )  })
    //find all User's images?
    $a.get('/img', $w.user, function(req, res){

        models.img.find( {u: req.username},

            function(err, data){res.json(data)}  )

    })
    //find all   images on site?
    $a.get('/allImages', $w.user, function(req, res){

        models.img.find( { },

            function(err, data){res.json(data)}  )

    })
    //get all images of a sp. user
    $a.get('/images/:username', $w.user, function(req, res){

        models.img.find({username: req.params.username },

            function(err, data){res.json(data)}  )

    })


    $a.get('/myStatus', $w.user, function(req,res){
        models.user.findOne({username: req.username}, function(err,data){
            res.send(data.status || 'no status')})})
    //** get a dataUrl from an img-ob id ++++ physics! //can dep by using oid's??
    $a.post('/getimagebyid', function(req,res,next){
        $l('dud')

       // $l('req.body.data')
       // $l(req.body.d)

        models.img.findById(

            //'54d4506172f7e12a05000012',
            req.body.data,

            function(err, data){

             //   $l('data: ')
                console.dir(data)

                res.send(data)
            })

    })
    $a.post('/dats', function(req,res){
        models.img.findById(  req.body.d, function(err, data){

            if(O(data)){ res.json(data) }

        })
    })




    $a.post('/changeStatus', $w.user, function(q,p){

        q.user.status =  q.body.status
        q.user.save( function(z, u){p.json(u.status)})
    })






    $a.get('/', function(req,res){  res.send('this is a test')   })





    $a.get('/play/:app/:pam?', function(req, res){
        res.render('play',
            {
                app: req.params.app,
                pam: req.params.pam
            })
    })


}