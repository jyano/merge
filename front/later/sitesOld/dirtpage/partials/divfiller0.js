


<script type="text/javascript" src="http://www.dirtpage.com/jsfunctions.js"></script>



    <script type="text/javascript">

//TEMP$('.messagex').hover(function(){ $('.manip').toggle();  });
//TEMP$('.manip').hide();
//TEMP$('li', '#output').hover(function(){ $('li').css("border", "0px solid white");  $('.manip').hide(); $(this).css("border-top", "3px dotted green"); $(this).css("border-right", "3px dotted green");    $(this).find('.manip').show();  });




// set posting

    $('#test').submit(function() {
        $.get("http://www.dirtpage.com/datacalls.php", { topic: <?php echo "\"$theirName\"" ?>, newmessage: document.post.newmessage.value, act: "postmessage"}, function() {
        $.get("http://www.dirtpage.com/divfiller.php", { topic: <?php echo "\"$theirName\"" ?>}, function(data) {
        $('#output').html(data);});
});
});


// set voting


$('.up').click(function() {
    $.get("http://www.dirtpage.com/datacalls.php", {messagenumber: this.name, change: "up", topic: <?php echo "\"$theirName\"" ?>}, function() {
    $.get("http://www.dirtpage.com/divfiller.php", { topic: <?php echo "\"$theirName\"" ?>}, function(data) {
    $('#output').html(data);}); });
});

$('.down').click(function() {
    $.get("http://www.dirtpage.com/datacalls.php", {messagenumber: this.name, change: "down", topic: <?php echo "\"$theirName\"" ?>}, function() {
    $.get("http://www.dirtpage.com/divfiller.php", { topic: <?php echo "\"$theirName\"" ?>}, function(data) {
    $('#output').html(data);}); });
});


// set delete
$('.del').click(function(){    $j = $(this).attr("name");   if ("<?php echo $_SESSION['admin']?>" == "yes") {
        $.get("http://www.dirtpage.com/datacalls", {topic: <?php echo "\"$theirName\"" ?>, messagenumber: $j, act: "deletemessage"}, function() {
        $.get("http://www.dirtpage.com/divfiller.php", { topic: <?php echo "\"$theirName\"" ?>}, function(data) {
        $('#output').html(data);});}
);}
else{alert("you don't have administrator access.. idiot")} });





// TEMP DISABLE set 'search' button

//$('#output .search').mouseenter(function(){
//$.get("http://www.dirtpage.com/minisearchfiller.php", {topic: $(this).attr('name')},  function(data) {
//$('.results').html(data);	  }     );
//$('.results').fadeIn("slow");
//});


</script>