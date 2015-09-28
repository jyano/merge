

// set posting

$('#post_caption').submit(function() {
    $.get("http://www.dirtpage.com/x/datacalls.php", {picture: <?php echo "\"$picture\"" ?>, new_caption: document.post.new_caption.value, act: "post_caption"}, function()
{
    $.get("http://www.dirtpage.com/x/divfillers/picture.php", {topic: <?php echo "\"$topic\"" ?>, picture: <?php echo "\"$picture\"" ?>}, function(data) {
    $('#holder').html(data);});
})});


// set voting




$('.up').click(function() {
    $.get("http://www.dirtpage.com/x/datacalls.php", {
        caption_id: this.name, act: "caption_up", picture: <?php echo "\"$picture\"" ?>}, function() {
    $.get("http://www.dirtpage.com/x/divfillers/picture.php", {
        topic: <?php echo "\"$topic\"" ?>,picture: <?php echo "\"$picture\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});




$('.down').click(function() {
    $.get("http://www.dirtpage.com/x/datacalls.php", {caption_id: this.name, act: "caption_down", picture: <?php echo "\"$picture\"" ?>}, function() {
    $.get("http://www.dirtpage.com/x/divfillers/picture.php", {topic: <?php echo "\"$topic\"" ?>,picture: <?php echo "\"$picture\"" ?>}, function(data) {
    $('#holder').html(data);}); });
});



// set delete
$('.del').click(function(){    $j = $(this).attr("name");   if ("<?php echo $_SESSION['admin']?>" == "yes") {
        $.get("http://www.dirtpage.com/datacalls", {topic: <?php echo "\"$theirName\"" ?>, messagenumber: $j, act: "deletemessage"}, function() {
        $.get("http://www.dirtpage.com/captiondivfiller.php", { topic: <?php echo "\"$theirName\"" ?>}, function(data) {
        $('#output').html(data);});}
);}
else{alert("you don't have administrator access.. idiot")} });





// TEMP DISABLE set 'search' button

//$('#output .search').mouseenter(function(){
//$.get("http://www.dirtpage.com/minisearchfiller.php", {topic: $(this).attr('name')},  function(data) {
//$('.results').html(data);	  }     );
//$('.results').fadeIn("slow");
//});
