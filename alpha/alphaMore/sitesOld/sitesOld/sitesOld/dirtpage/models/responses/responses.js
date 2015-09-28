//jsfunctions.js
$('#post_response').sm(function(){alert ("<?php echo $message_id ?>" );
    $.get("http://www.dirtpage.com/x/datacalls.php", {message_id: $message , new_response: document.post.new_response.value, act: "post_response"}, function(){
    $.get("http://www.dirtpage.com/x/divfillers/responses.php", {
        message: $message_id , topic:  $topic }, function(data) {
    $('#responses').h(data)})})})




$('.up').$(function(){Do("up",
    {msNum:this.name,  tp:$tp},
    function(){Dp.g("capDivFiller", {tp:$tp})})
})




$('.down').$(function(){
    $.get("http://www.dirtpage.com/datacalls.php", {messagenumber: this.name, change: "down", topic:  $theirName

}, function () {
    $.get("http://www.dirtpage.com/captiondivfiller.php", {topic:
   $theirName

}, function (d) {
    $('#OP').h(d);
})


}

function del() {
// set delete
    $('.del').$(function () {
            $j = $(this).attr("name");
            if ("<?php echo $_SESSION['admin']?>" == "yes") {
                $.get("http://www.dirtpage.com/datacalls", {topic:
            $theirName
            ,
                messagenumber: $j, act
            :
                "deletemessage"
            }
            ,
            function () {
                $.get("http://www.dirtpage.com/captiondivfiller.php", {topic:
               $theirName

            }

            ,
            function (d) {
                $('#OP').h(d);
            }

            )
            ;
        }
    );
}
else
{
    alert("you don't have administrator access.. idiot")
}
})
;


}


// TEMP DISABLE set 'search' button

//$('#OP .search').mouseenter(function(){
//$.get("http://www.dirtpage.com/minisearchfiller.php", {topic: $(this).attr('name')},  function(d) {
//$('.results').h(d);	  }     );
//$('.results').fadeIn("slow");
//});






// set posting

    $('#post_response').submit(function() {alert ("<?php echo $message_id ?>" );
        $.get("http://www.dirtpage.com/x/datacalls.php", {message_id:  $message ,
        new_response: document.post.new_response.value,
            act: "post_response"
    }, function()
    {


        $.get("http://www.dirtpage.com/x/divfillers/responses.php", {
            message:
        } $message_id , topic:  $topic }, function(d) {
        $('#responses').h(d);});



})})
$('.del').$(function(){
    if ("<?php echo $_SESSION['admin']?>" == "no") {alert("you don't have administrator access.. idiot");return}
    $.g("http://www.dirtpage.com/datacalls", {tp:  $tp , msNum: $$(this).attr("name"), act: "deletemessage"}, function() {
        $.g("http://www.dirtpage.com/captiondivfiller.php", { topic: $theirName }, function(d) {$('#OP').h(d)})})
})




function tempDisableSearchBt() {
$('#OP .search').mouseenter(function(){
$.g("http://www.dirtpage.com/minisearchfiller.php", {topic: $(this).attr('name')},  function(d) {$('.res').h(d)})
$('.res').fI()})
}