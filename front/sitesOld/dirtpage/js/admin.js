 $(function(){


    console.log('admin')


    $('button#justTopic').click(function(){

        justTopic=$('input#justTopic').val().trim()

        //alert('justTopic: ' +  justTopic  )
        $.post('/topic', {topic: justTopic}, function(){
            window.location='/admin'})
    })


     $('button#topicMessage').click(function(){

         topic=$('input#topic').val().trim()
         message=$('input#message').val().trim()

         //alert(  'topic: ' + topic +  '\n\nmessage: ' + message )
         $.post( '/message', {topic: topic, message: message}, function(){
             window.location='/admin'
         })


     })





 })