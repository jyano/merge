

//TEMP$('.messagex').hover(function(){ $('.manip').toggle();  });
//TEMP$('.manip').hide();
//TEMP$('li', '#output').hover(function(){ $('li').css("border", "0px solid white");  $('.manip').hide(); $(this).css("border-top", "3px dotted green"); $(this).css("border-right", "3px dotted green");    $(this).find('.manip').show();  });




// set posting

$('#post_message').sm(function(){
    $.g("http://www.dirtpage.com/x/datacalls.php", {
        topic:  $topic ,
    newmessage: document.post_message.newmessage.value, act: "postmessage"}, function() {
    $.g("http://www.dirtpage.com/x/divfillers/messages.php", {
        topic: $topic,
        mode:"messages"}, function(d) {
    $('#messages').h(d)
})
})
})



// set voting


$('.up').$(function() {
    $.get("http://www.dirtpage.com/x/datacalls.php", {messagenumber: this.name, act: "message_up", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/x/divfillers/messages_preview.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#messages_preview').html(data);}); });
});



$('.down').$(function() {
    $.get("http://www.dirtpage.com/x/datacalls.php", {messagenumber: this.name, act: "message_down", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/x/divfillers/messages_preview.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#messages_preview').html(data);}); });
});


Tp=function(){}

Tp.g=function(){
    Dp.g()
}

Ms=function(){}

Ms.del=function(id,fn){
    Dp.d({act:'delMs', msNum:id}, fn)
}

// set delete
$('.del').$(function(){
    if(q.ss.admin){

        Ms.del(

            $(this).n(),

            function(){
                Dp.g("divfiller", {tp: $tp}, function(d){
                    $('#OP').h(d)
                })})}





else{alert("you don't have administrator access.. idiot")}})


$('.message_b').$(function() {alert(this.name);$(location).attr('href','http://www.dirtpage.com/x/page.php?topic=<?php echo $topic ?>&mode=message&message='+ this.name);
});


// TEMP DISABLE set 'search' button

//$('#output .search').mouseenter(function(){
//$.get("http://www.dirtpage.com/minisearchfiller.php", {topic: $(this).attr('name')},  function(data) {
//$('.results').html(data);	  }     );
//$('.results').fadeIn("slow");
//});

