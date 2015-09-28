
//TEMP$('.messagex').hover(function(){ $('.manip').toggle();  });
//TEMP$('.manip').hide();
//TEMP$('li', '#output').hover(function(){ $('li').css("border", "0px solid white");  $('.manip').hide(); $(this).css("border-top", "3px dotted green"); $(this).css("border-right", "3px dotted green");    $(this).find('.manip').show();  });




// set posting

    $('#post_message').submit(function() {

        $.get("http://www.dirtpage.com/x/datacalls.php", {topic: <?php echo "\"$topic\"" ?>, newmessage: document.post_message.newmessage.value, act: "postmessage"}, function() {
        $.get("http://www.dirtpage.com/x/divfillers/messages_preview.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
        $('#messages_preview').html(data);});
});
});


// set voting


$('.up').click(function() {
    $.get("http://www.dirtpage.com/x/datacalls.php", {messagenumber: this.name, act: "message_up", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/x/divfillers/messages_preview.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#messages_preview').html(data);}); });
});



$('.down').click(function() {
    $.get("http://www.dirtpage.com/x/datacalls.php", {messagenumber: this.name, act: "message_down", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/x/divfillers/messages_preview.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#messages_preview').html(data);}); });
});




// set delete
$('.del').click(function(){    $j = $(this).attr("name");   if ("<?php echo $_SESSION['admin']?>" == "yes") {
        $.get("http://www.dirtpage.com/datacalls", {topic: <?php echo "\"$topic\"" ?>, messagenumber: $j, act: "deletemessage"}, function() {
        $.get("http://www.dirtpage.com/divfiller.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
        $('#output').html(data);});}
);}
else{alert("you don't have administrator access.. idiot")} });


$('.message_b').click(function() {$(location).attr('href','http://www.dirtpage.com/x/page.php?topic=<?php echo $topic ?>&mode=message&message='+ this.getAttribute("name"));
});


// TEMP DISABLE set 'search' button

//$('#output .search').mouseenter(function(){
//$.get("http://www.dirtpage.com/minisearchfiller.php", {topic: $(this).attr('name')},  function(data) {
//$('.results').html(data);	  }     );
//$('.results').fadeIn("slow");
//});

