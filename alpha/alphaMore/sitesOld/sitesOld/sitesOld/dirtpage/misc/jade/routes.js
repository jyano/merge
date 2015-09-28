module.exports=function(a){





    router = express.Router()

    router.get('/', function(req, res){ res.render('default') })

    router.get('/render', function(req, res) { res.render('render', {test:'hello'} ) })

    router.get('search/:topic', function(req, res){ res.render('search1') })

    router.get('/admin', function(req, res){


        models.Topic.find({}, function(err, topics){


            models.Message.find({}, function(err, messages){


                res.render('admin', {topics: topics, messages: messages})

            })







        })




    })

    router.get('/page/:topic', function(req, res){

        $l('page/topic')

//$m = $_GET['m'];
//$topic = $_GET['topic'];
//$mode = $_GET['mode'];
//$message = $_GET['message'];
//$picture = $_GET['picture'];


//$update = models.topics.update({topic:$topic}, {num_views: {$inc:1} })

//if $topic and $topic!=''){

//models.Viewed.remove({topic:$topic)
//models.Viewed.create({topic:$topic)

//}

//****** if first searches for the topic, and if it doesn't exist, it just creates it

        $topic = req.params.topic

        models.Topic.findOne({topic: $topic}, function(err, topic){
            function render(){
                models.Message.find({topic: $topic}).sort('-score').exec(function(err, messages){
                    var $numMessages = messages.length
                    res.render('page1', { topic: $topic, numMessages: $numMessages, messages:messages})})}

            if(!topic){

                models.Topic.create({topic:topic}, function(err, topic){

                    $l('you just created a new topic')
                    render()})}

            else {
                $l('topic exists')
                render()}



        })




    })

    router.get('/search/:topic', function( req, res ){

        var $topic = req.params.topic
        var $isTopic=null
        var $numMessages=null


        function render(){   res.render( 'search1' , {topic: $topic, isTopic: $isTopic, numMessages:$numMessages })    }



        models.Topic.findOne({topic: $topic},  function(err, topic){

            if( !topic ){

                $l( 'no topic' )

                $isTopic=false

                render()
            }


            else {

                $l('topic')

                $isTopic=true

                models.Message.find({topic: $topic}, function(err, messages){
                    $l(messages)

                    $numMessages = messages.length

                    $l('numMessages: '+ $numMessages)

                    render()
                })

            }




        })





    })
    router.get('/about', function(req, res) {res.send('im the about page!')})
    router.post('/topic', function(req, res){

        $l(req.body)

        models.Topic.create(req.body, function(){

            $l('created')

            res.send(true)
            //window.location='/admin'
            //res.redirect('/admin')

        })

    })
    router.post('/message', function(req, res){

        $l(req.body)

        models.Message.create(req.body, function(){ res.send(true) })

    })

    router.put('/message',  function(req,res) {

        $l('put message')

        var topic = req.body.topic
        var message = req.body.message
        var dir = req.body.dir


        models.Message.findOne({topic: topic, message: message},
            function(err, message){

                if(dir=='up'){message.score = message.score +1}
                if(dir=='down'){message.score = message.score -1}
                message.save(   function(){res.send(true)})})

    })







    a.use('/', router)




}