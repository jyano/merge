

//TEMP$('.messagex').hover(function(){ $('.manip').toggle();  });
//TEMP$('.manip').hide();
//TEMP$('li', '#output').hover(function(){ $('li').css("border", "0px solid white");  $('.manip').hide(); $(this).css("border-top", "3px dotted green"); $(this).css("border-right", "3px dotted green");    $(this).find('.manip').show();  });




// refresh

$('.refresh').$(function() {
    $.get("http://www.dirtpage.com/x/divfillers/items.php", { topic: <?php echo "\"$topic\"" ?>}, function(d) {
    $('#holder').h(d)}) }

// re-search
$('.search_topic').$(function() {
    $.get("http://www.dirtpage.com/x/search.php", { topic: <?php echo "\"$topic\"" ?>}, function(d) {
    $('#holder').h(d)}) })



// set posting

$('#post_message').sm(function(){

    $.g("http://www.dirtpage.com/x/dcalls.php", {

        topic:  $topic  ,
    newmessage: document.post_message.newmessage.value,
        act: "postmessage"},


    function() {
    $.g("http://www.dirtpage.com/x/divfillers/items.php", {topic:  $topic },
        function(d) {
    $('#holder').h(d)})
})
})


$('#post_pic').sm(function() {
    $.get("http://www.dirtpage.com/x/datacalls.php", {topic: $topic , newmessage: document.post.newmessage.value, act: "postmessage"}, function() {
    $.get("http://www.dirtpage.com/x/divfillers/items.php", { topic:  $topic + '\\' }, +
     function(d) {$('#holder').h(d)})})
})



// set voting



$('.topic_up').$(function() {


    $.g("http://www.dirtpage.com/x/datacalls.php", {
        act: "topic_up",
        topic: $topic
    }, function(){
        $.g("http://www.dirtpage.com/x/divfillers/items.php", {topic: $topic}, function(d) {
        $('#holder').h(d)})
    })

})

$('.topic_down').$(function(){

    $.g("http://www.dirtpage.com/x/datacalls.php", {
        act: "topic_down",
        topic: $topic
    }, function(){

    $.g("http://www.dirtpage.com/x/divfillers/items.php", {
        topic: $topic}, function(d) {
    $('#holder').h(d)}) })

})



$('.message_up').$(function() {
    $.g("http://www.dirtpage.com/x/datacalls.php", {
        message_id: this.name, act: "message_up", topic: $topic}, function() {
    $.g("http://www.dirtpage.com/x/divfillers/items.php", {topic: $topic}, function(d) {

    $('#holder').h(d)})
    })
})

$('.message_down').$(function() {
    $.g("http://www.dirtpage.com/x/datacalls.php", {
        message_id: this.name, act: "message_down", topic: $topic}, function() {
    $.g("http://www.dirtpage.com/x/divfillers/items.php", { topic: $topic}, function(d) {

    $('#holder').h(d)})
    })
})

$('.picture_up').$(function() {

    $.g("http://www.dirtpage.com/x/datacalls.php", {
        picture_id: this.name, act: "picture_up", topic: $topic}, function() {

    $.g("http://www.dirtpage.com/x/divfillers/items.php", {topic: $topic}, function(d) {
    $('#holder').h(d)}) })
})

$('.picture_down').$(function() {
    $.g("http://www.dirtpage.com/x/datacalls.php", {
        picture_id: this.name, act: "picture_down", topic: $topic}, function() {
    $.g("http://www.dirtpage.com/x/divfillers/items.php", { topic: $topic}, function(d) {

    $('#holder').h(d)})
    })
})













// set delete
$('.del').$(function(){    $j = $(this).attr("name");
    if ("<?php echo $_SESSION['admin']?>" == "yes") {

        $.get("http://www.dirtpage.com/datacalls", {
                topic: $topic, messagenumber: $j, act: "deletemessage"}, function() {

        $.get("http://www.dirtpage.com/divfiller.php", { topic: $topic}, function(d) {

        $('#output').h(d)})}
)}
else{alert("you don't have administrator access.. idiot")} })


$('.message_b').$(function() {
    alert(this.name)

    $(location).attr('href',
        'http://www.dirtpage.com/x/page.php?topic=' +  $topic +'&mode=message&message='+
        this.name)
})


// TEMP DISABLE set 'search' button

//$('#output .search').mouseenter(function(){
//$.get("http://www.dirtpage.com/minisearchfiller.php", {topic: $(this).attr('name')},  function(d) {
//$('.results').h(d)	  }     )
//$('.results').fadeIn("slow")
//})






function again(){
    $('.refresh').$(function() {
        $.get("/divfillers/items.php", { topic: $topic}, function(data) {
            $('#holder').html(data);}); });
    $('.search_topic').$(function() {
        $.get("/search.php", { topic: $topic}, function(data) {
            $('#holder').html(data);}); });
    $('#post_message').submit(function() {

        $.get("/resources/datacalls.php", {topic: $topic, newmessage: document.post_message.newmessage.value, act: "postmessage"},
            function() {

                $.get("/divfillers/items.php", {topic: $topic}, function(data) {
                    $('#holder').html(data)})
            })
    })
    $('#post_pic').submit(function() {
        $.get("/resources/datacalls.php", {topic: $topic, newmessage: document.post.newmessage.value, act: "postmessage"}, function() {
            $.get("/divfillers/items.php", { topic: $topic}, function(data) {
                $('#holder').html(data);});
        })
    })
    $('.topic_up').$(function(){

        $.get("/resources/datacalls.php",  {act:"topic_up",  topic:$topic , function(){

            $.get("/divfillers/items.php", {topic: $topic}, function(data) {

                $('#holder').html(data)

            })})

    })
    $('.topic_down').$(function() {
        $.get("/resources/datacalls.php", {act: "topic_down", topic: $topic}, function() {
            $.get("/divfillers/items.php", { topic: $topic}, function(data) {
                $('#holder').html(data);}); });
    });
    $('.message_up').$(function() {
        $.get("/resources/datacalls.php", {message_id: this.name, act: "message_up", topic: $topic}, function() {
            $.get("/divfillers/items.php", {topic: $topic}, function(data) {
                $('#holder').html(data);}); });
    });
    $('.message_down').$(function() {
        $.get("/resources/datacalls.php", {message_id: this.name, act: "message_down", topic: $topic}, function() {
            $.get("/divfillers/items.php", { topic: $topic}, function(data) {
                $('#holder').html(data);}); });
    });
    $('.picture_up').$(function() {

        $.get("/resources/datacalls.php", {picture_id: this.name, act: "picture_up", topic: $topic}, function() {
            $.get("/divfillers/items.php", {topic: $topic}, function(data) {
                $('#holder').html(data);}); });
    });
    $('.picture_down').$(function() {
        $.get("/resources/datacalls.php", {picture_id: this.name, act: "picture_down", topic: $topic}, function() {
            $.get("/divfillers/items.php", { topic: $topic}, function(data) {
                $('#holder').html(data);}); });
    });
    $('.del').$(function(){    $j = $(this).attr("name");   if ("<?php echo $_SESSION['admin']?>" == "yes") {
        $.get("/datacalls", {topic: $topic, messagenumber: $j, act: "deletemessage"}, function() {
                $.get("/divfiller.php", { topic: $topic}, function(data) {
                    $('#output').html(data);});}
        );}
    else{alert("you don't have administrator access.. idiot")} });
    $('.message_b').$(function() {alert(this.name);$(location).attr('href','/x/page.php?topic=<?php echo $topic ?>&mode=message&message='+ this.name);
    });


    TEMP$('.messagex').hover(function(){

        $('.manip').toggle()

    })


//TEMP$('.manip').hide()
//TEMP$('li', '#output').hover(function(){ $('li').css("border", "0px solid white");  $('.manip').hide(); $(this).css("border-top", "3px dotted green"); $(this).css("border-right", "3px dotted green");    $(this).find('.manip').show();  });



// TEMP DISABLE set 'search' button
//$('#output .search').mouseenter(function(){
//$.get("/minisearchfiller.php", {topic: $(this).attr('name')},  function(data) {
//$('.results').html(data);	  }     );
//$('.results').fadeIn("slow");
//});

}

