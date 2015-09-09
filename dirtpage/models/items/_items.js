



//TEMP$('.messagex').hover(function(){ $('.manip').toggle();  });
//TEMP$('.manip').hide();
//TEMP$('li', '#output').hover(function(){ $('li').css("border", "0px solid white");  $('.manip').hide(); $(this).css("border-top", "3px dotted green"); $(this).css("border-right", "3px dotted green");    $(this).find('.manip').show();  });




// refresh

$('.refresh').click(function() {
    $.get("http://www.dirtpage.com/divfillers/items.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });

// re-search
$('.search_topic').click(function() {
    $.get("http://www.dirtpage.com/search.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });



// set posting

$('#post_message').submit(function() {

    $.get("http://www.dirtpage.com/resources/datacalls.php", {topic: <?php echo "\"$topic\"" ?>, newmessage: document.post_message.newmessage.value, act: "postmessage"}, function() {
    $.get("http://www.dirtpage.com/divfillers/items.php", {topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);});
});
});


$('#post_pic').submit(function() {
    $.get("http://www.dirtpage.com/resources/datacalls.php", {topic: <?php echo "\"$topic\"" ?>, newmessage: document.post.newmessage.value, act: "postmessage"}, function() {
    $.get("http://www.dirtpage.com/divfillers/items.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);});
});
});







// set voting


$('#post_tag').submit(function() {alert('helo');


    $.get("http://www.dirtpage.com/resources/datacalls.php", {topic: <?php echo "\"$topic\"" ?>, new_tag: document.post_tag.new_tag.value, act: "post_tag"}, function() {
    $.get("http://www.dirtpage.com/divfillers/items2.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);});
});

});

$('.topic_up').click(function() {
    $.get("http://www.dirtpage.com/resources/datacalls.php", {act: "topic_up", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/divfillers/items.php", {topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});

$('.topic_down').click(function() {
    $.get("http://www.dirtpage.com/resources/datacalls.php", {act: "topic_down", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/divfillers/items.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});


$('.message_up').click(function() {
    $.get("http://www.dirtpage.com/resources/datacalls.php", {message_id: this.name, act: "message_up", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/divfillers/items.php", {topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});

$('.message_down').click(function() {
    $.get("http://www.dirtpage.com/resources/datacalls.php", {message_id: this.name, act: "message_down", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/divfillers/items.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});

$('.picture_up').click(function() {

    $.get("http://www.dirtpage.com/resources/datacalls.php", {picture_id: this.name, act: "picture_up", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/divfillers/items.php", {topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});

$('.picture_down').click(function() {
    $.get("http://www.dirtpage.com/resources/datacalls.php", {picture_id: this.name, act: "picture_down", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/divfillers/items.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});
















// set delete
$('.del').click(function(){    $j = $(this).attr("name");   if ("<?php echo $_SESSION['admin']?>" == "yes") {
        $.get("http://www.dirtpage.com/datacalls", {topic: <?php echo "\"$topic\"" ?>, messagenumber: $j, act: "deletemessage"}, function() {
        $.get("http://www.dirtpage.com/divfiller.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
        $('#output').html(data);});}
);}
else{alert("you don't have administrator access.. idiot")} });


$('.message_b').click(function() {alert(this.name);$(location).attr('href','http://www.dirtpage.com/x/page.php?topic=<?php echo $topic ?>&mode=message&message='+ this.name);
});


// TEMP DISABLE set 'search' button

//$('#output .search').mouseenter(function(){
//$.get("http://www.dirtpage.com/minisearchfiller.php", {topic: $(this).attr('name')},  function(data) {
//$('.results').html(data);	  }     );
//$('.results').fadeIn("slow");
//});


function more(){








<script type="text/javascript" src="http://www.dirtpage.com/jsfunctions.js"></script>



        <script type="text/javascript">

//TEMP$('.messagex').hover(function(){ $('.manip').toggle();  });
//TEMP$('.manip').hide();
//TEMP$('li', '#output').hover(function(){ $('li').css("border", "0px solid white");  $('.manip').hide(); $(this).css("border-top", "3px dotted green"); $(this).css("border-right", "3px dotted green");    $(this).find('.manip').show();  });




// refresh

        $('.refresh').click(function() {
            $.get("http://www.dirtpage.com/x/divfillers/items.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
            $('#holder').html(data);}); });

// re-search
$('.search_topic').click(function() {
    $.get("http://www.dirtpage.com/x/search.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });



// set posting

$('#post_message').submit(function() {

    $.get("http://www.dirtpage.com/x/datacalls.php", {topic: <?php echo "\"$topic\"" ?>, newmessage: document.post_message.newmessage.value, act: "postmessage"}, function() {
    $.get("http://www.dirtpage.com/x/divfillers/items.php", {topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);});
});
});


$('#post_pic').submit(function() {
    $.get("http://www.dirtpage.com/x/datacalls.php", {topic: <?php echo "\"$topic\"" ?>, newmessage: document.post.newmessage.value, act: "postmessage"}, function() {
    $.get("http://www.dirtpage.com/x/divfillers/items.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);});
});
});



// set voting



$('.topic_up').click(function() {
    $.get("http://www.dirtpage.com/x/datacalls.php", {act: "topic_up", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/x/divfillers/items.php", {topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});

$('.topic_down').click(function() {
    $.get("http://www.dirtpage.com/x/datacalls.php", {act: "topic_down", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/x/divfillers/items.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});


$('.message_up').click(function() {
    $.get("http://www.dirtpage.com/x/datacalls.php", {message_id: this.name, act: "message_up", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/x/divfillers/items.php", {topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});

$('.message_down').click(function() {
    $.get("http://www.dirtpage.com/x/datacalls.php", {message_id: this.name, act: "message_down", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/x/divfillers/items.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});

$('.picture_up').click(function() {

    $.get("http://www.dirtpage.com/x/datacalls.php", {picture_id: this.name, act: "picture_up", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/x/divfillers/items.php", {topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});

$('.picture_down').click(function() {
    $.get("http://www.dirtpage.com/x/datacalls.php", {picture_id: this.name, act: "picture_down", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/x/divfillers/items.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});
















// set delete
$('.del').click(function(){    $j = $(this).attr("name");   if ("<?php echo $_SESSION['admin']?>" == "yes") {
        $.get("http://www.dirtpage.com/datacalls", {topic: <?php echo "\"$topic\"" ?>, messagenumber: $j, act: "deletemessage"}, function() {
        $.get("http://www.dirtpage.com/divfiller.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
        $('#output').html(data);});}
);}
else{alert("you don't have administrator access.. idiot")} });


$('.message_b').click(function() {alert(this.name);$(location).attr('href','http://www.dirtpage.com/x/page.php?topic=<?php echo $topic ?>&mode=message&message='+ this.name);
});


// TEMP DISABLE set 'search' button

//$('#output .search').mouseenter(function(){
//$.get("http://www.dirtpage.com/minisearchfiller.php", {topic: $(this).attr('name')},  function(data) {
//$('.results').html(data);	  }     );
//$('.results').fadeIn("slow");
//});


</script>


//TEMP$('.messagex').hover(function(){ $('.manip').toggle();  });
//TEMP$('.manip').hide();
//TEMP$('li', '#output').hover(function(){ $('li').css("border", "0px solid white");  $('.manip').hide(); $(this).css("border-top", "3px dotted green"); $(this).css("border-right", "3px dotted green");    $(this).find('.manip').show();  });




// refresh

$('.refresh').click(function() {
    $.get("http://www.dirtpage.com/divfillers/items.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });

// re-search
$('.search_topic').click(function() {
    $.get("http://www.dirtpage.com/search.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });



// set posting

$('#post_message').submit(function() {

    $.get("http://www.dirtpage.com/resources/datacalls.php", {topic: <?php echo "\"$topic\"" ?>, newmessage: document.post_message.newmessage.value, act: "postmessage"}, function() {
    $.get("http://www.dirtpage.com/divfillers/items.php", {topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);});
});
});


$('#post_pic').submit(function() {
    $.get("http://www.dirtpage.com/resources/datacalls.php", {topic: <?php echo "\"$topic\"" ?>, newmessage: document.post.newmessage.value, act: "postmessage"}, function() {
    $.get("http://www.dirtpage.com/divfillers/items.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);});
});
});







// set voting


$('#post_tag').submit(function() {alert('helo');


    $.get("http://www.dirtpage.com/resources/datacalls.php", {topic: <?php echo "\"$topic\"" ?>, new_tag: document.post_tag.new_tag.value, act: "post_tag"}, function() {
    $.get("http://www.dirtpage.com/divfillers/items2.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);});
});

});

$('.topic_up').click(function() {
    $.get("http://www.dirtpage.com/resources/datacalls.php", {act: "topic_up", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/divfillers/items.php", {topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});

$('.topic_down').click(function() {
    $.get("http://www.dirtpage.com/resources/datacalls.php", {act: "topic_down", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/divfillers/items.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});


$('.message_up').click(function() {
    $.get("http://www.dirtpage.com/resources/datacalls.php", {message_id: this.name, act: "message_up", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/divfillers/items.php", {topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});

$('.message_down').click(function() {
    $.get("http://www.dirtpage.com/resources/datacalls.php", {message_id: this.name, act: "message_down", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/divfillers/items.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});

$('.picture_up').click(function() {

    $.get("http://www.dirtpage.com/resources/datacalls.php", {picture_id: this.name, act: "picture_up", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/divfillers/items.php", {topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});

$('.picture_down').click(function() {
    $.get("http://www.dirtpage.com/resources/datacalls.php", {picture_id: this.name, act: "picture_down", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/divfillers/items.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});
















// set delete
$('.del').click(function(){    $j = $(this).attr("name");   if ("<?php echo $_SESSION['admin']?>" == "yes") {
        $.get("http://www.dirtpage.com/datacalls", {topic: <?php echo "\"$topic\"" ?>, messagenumber: $j, act: "deletemessage"}, function() {
        $.get("http://www.dirtpage.com/divfiller.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
        $('#output').html(data);});}
);}
else{alert("you don't have administrator access.. idiot")} });


$('.message_b').click(function() {alert(this.name);$(location).attr('href','http://www.dirtpage.com/x/page.php?topic=<?php echo $topic ?>&mode=message&message='+ this.name);
});


// TEMP DISABLE set 'search' button

//$('#output .search').mouseenter(function(){
//$.get("http://www.dirtpage.com/minisearchfiller.php", {topic: $(this).attr('name')},  function(data) {
//$('.results').html(data);	  }     );
//$('.results').fadeIn("slow");
//});

}