module.exports=function(){





    //get your profile
    $a.post('/getMyProfile',  $w.user,  function(q, p){Profile.findOne({username: q.username }, function(z, data){p.json(data)})})
    $a.post('/getProfile', $w.user, function(q,p) { $l('getProfile')
        var username = q.body.username || 'a'
        Profile.findOne({ username: username}, function (err, pf) {  $l(pf); res.send('yes')   }) })// res.json(profile)

    $a.post('/newProfile', $w.user, function(q,p){
        Profile.create(q.body.profile)
    })


    //update your profile
    $a.post('/myprofile',  $w.user, function(q,p){Profile.findOne( {username: q.username},
            function(z, pf){if(!pf){q.body.username = q.username; Profile.create(q.body, function(){ p.send('created!') })}
                else {Profile.update({username: q.username}, q.body, function(){ p.send('updated!')})}})})
    $a.post('/updateProfile', $w.user, function(q,p){models.profile.findOneAndUpdate({username: q.body.username}, q.body.profile)})


    //get someones profile
    $a.get('/profile/:username', function(q, p){$l('/profile/:username' + '=-=' + 'req.params.username: '+ q.params.username)
        Profile.findOne({username: q.params.username}, function(z, pf){p.json(pf)})})





















//////
    ///
    ////
    ////

    //create new status

    $a.post('/status', $w.user,   function(q, p){
        q.user.status = q.body.text
        q.user.save(function(){
            return 'saved!'})
    })

    //create new post
    $a.post('/pst', $w.user, function(q, p){ models.post.create({

                username:q.username,
                title:q.body.title,
                content:q.body.content,
                dataURL:q.body.dataURL
            },

        function(){})

    })

    //get all posts
    $a.get('/posts',  $w.user,  function(req, res){

        models.posts.find(function(err, posts){res.json(posts)})  // from most recent


    })

    //get User posts (by unsername)
    $a.get('/post', $w.user, function(q, p){
        models.posts.find({username: q.username}, function(err, posts){ p.json(posts)})  // from most recent
    })


    //User recent post(s?)
    $a.get('/userRecentPosts', $w.user, function(q,p){
        models.posts.find({username: q.query.username}, // from most recent
            function(z, posts){p.json(posts)})
    })



    //rescent post(s?)
    $a.get('/postsByTitle', $w.user,function(q,p){
        models.posts.find({title: q.query.title}, function(z, posts){
            p.json(posts) }) })


    //send request from User to sp. user
    $a.post('/sendRequest', $w.user, function(q, p){
        $m.q.create({ to: q.body.to, fr: q.u }, p )
    })

    $a.post('/acceptRequest',$w.user,function(q,p,n){
        (q.U.buds=q.U.buds||[]).push(q.b.u)
        $m.user.f1({u:q.b.u},
            function(z,u){
                u.buds=u.buds||[]
                u.buds.push(q.u)
                u.save()
        })
        q.U.save()
    })

    $a.get('/getRequests',$w.user,function(q,p,n){ $m.req.find({to:q.u},p) })

    $a.get('/buds',$w.user,function(req,res,next){
        all('user', function(err, u){
        res.j(_.filter(u, function(u){
            return _.contains(req.U.buds, u.u)
        }))
    })})

    $a.post('/buds',$w.user,function(req,res){
        $m.user.findOne(req.body,
            function(err, uu){ $l(uu.u)
             models.user.find(
                 function(err, u){
                    res.json(_.filter(u, function(u){return _.contains(  uu.buds,   u.u    )}))
                })

            })

    })


    //send someone an email !!!!!
    $a.post('/sendMail', $w.user, function(q, p){
       models.mail.create({ to: q.body.to, from: q.username, text: q.body.text },
           function(z, data){ p.json(data)}
        )})


    $a.get('/gMsg', $w.user, function(req,res,next){

        var o = {}

        o.map = function(){
            emit(this.from,  {text: this.text, datetime: this.datetime })
        }

        o.reduce = function(k, vals){ var d
            vals.forEach(function(v){
                if(!d){
                    d = {datetime: v.datetime,  text: v.text, from:k }  }
                else if(v.datetime > d.datetime){
                    d={  datetime: v.datetime,  text: v.text, from:k }
                } })
            return d  }

       models.mail.mapReduce(o,
            function(err, reduction){ res.json(_.map(reduction, function( val ){ return val.value })) })
    })

    // get mail FROM User, TO a sp. user
    $a.get('/myMailFrom', $w.user, function(q,p,next){
      models.mail.find({ to: q.username, from: q.query.username },
            function(z, data){p.json(data)})
    })


    //get all mail TO ===or==== FROM user
    $a.get('/myMailWith',  $w.user,  function(q, p){

       models.mail.find(
           {$or : [
               {to:q.username, from:q.query.username},
               {to:q.query.username, from:q.username}
           ]},
           function(z,data){p.send(data)})
    })



    $a.get('/sentMail', $w.user, function(q,p,next){$l('gMsgS')  // $m.msg.find({fr:q.u}, {sort:{dt: -1 }}).distinct('fr',  pjd(p))

        models.mail.find( {from: q.username},  function(z, data){p.send(data)} )

    })


    $a.get('/sentMail0',$w.user, function(q,p){var o = {}

        o.query = {from: q.username}

        o.map = function(){

            emit(
                this.to,
                {text:this.text, datetime:this.datetime, from:this.from}
            )
        }


        o.reduce=function(k, vals){var data

            vals.forEach(function(val){


                data= {
                    datetime: val.datetime,
                    mail: val.mail,
                    to: k,
                    from: val.from
                }


                if(val.datetime> data.datetime){
                    data={datetime:v.datetime, from: val.from, mail: val.mail, to:k}
                }
            })

            return data

        }


        models.mail.mapReduce(o, function(z,data){//$l(r)
            // r.find().exec(     function(z,r){   p.j(r)  })
            data= _.map(data, function(v){return v.value})
            data.sort({datetime:1})
            p.json(data)
        })
    })

    //create new topic
    $a.post( '/topic',    $w.user,   function(req, res){

        cre('topic', {

                u:req.u, t:req.b.c

            },


            res) })
    //get all topics

   // ALL('/topic', 'topic')
    //get topic 1 ? by t?


    $a.get('/topic', function(req, res){


        Topic.get(function(err, data){

            res.json(data)

        })
    })


    $a.get('/topic1', function(req, res){models.topic.findOne({topic: req.query.topic}, function(){})})


    //post vote
    $a.post('/vote', $w.user, function(q,p){

        f1('topic', {t:q.body.t}, function(z, t){  // if(q.b.dr=='u'){
                //  var ti = _.map(t.i, function(i){
                //      if(O(i) && i.t==q.b.i){
                //          if(q.b.dr=='u'){i.s=i.s+1}
                //          if(q.b.dr=='d'){i.s=i.s-1}}
                //     return i})

        var ti = _.map(t.i, function(i){
            if(O(i) && i.t == q.body.i){
                if(q.b.dr=='u'){i.s=i.s+1}
                if(q.b.dr=='d'){i.s=i.s-1}
            }
                        return i})
        t.i=[]
        t.i= ti;
        t.save( function(z,data){ $l('z:'+z+ data)
                        p.json(data)})})
    })


    $a.get('/book', $w.user, function(q,p,next){

      models.post.find( {username: q.username}, function(z,data){
          res.json(data)
      }) //recent?

    })


    $a.post('/newBook', $w.user,function(q,p,next){

    models.status.create({
            username: q.username,
            title: q.body.title,
            content: q.body.content
        },


        function(err,data){res.json(data)})

    })


    //post a user's item
    $a.post('/item',$w.user,function(req,res,next){

        models.topic.findOne({topic: req.body.topic}, function(err, data){
            data.items.push({topic:req.body.content, s:0})
            data.save(function(err ,data){res.json(data)})
        })


    })



    //post a user's sort  //should refernce a parent sort?!  :)
    $a.post('/sort', $w.user, function(req, res){

        models.sort.create({
            username:req.username, t:req.body.c},  function(err, data){
            res.json(data)
        })  })




    $a.get('/sort',  $w.user,  function(req,res){
       models.sort.find({username: req.username}, function(err, data){
           res.json(data)})
    })




    ////
    ////
    ///


    $a.get('/ball', function(req, res){ res.json(ball) })


    $a.post('/ball',function(req, res){

        ball.x=Number(req.body.x)
        ball.y=Number(req.body.y)

        res.json(ball)

    })



    $a.get('/godzilla',function(req,res){ res.json(godzilla) })

    $a.get('/wap/workerFile', function(req,res){ res.send('/workerFile.js') })

}


