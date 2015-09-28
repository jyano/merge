
//TEMP$('.messagex').hover(function(){ $('.manip').toggle();  }); 
//TEMP$('.manip').hide();
//TEMP$('li', '#output').hover(function(){ $('li').css("border", "0px solid white");  $('.manip').hide(); $(this).css("border-top", "3px dotted green"); $(this).css("border-right", "3px dotted green");    $(this).find('.manip').show();  }); 


datacalls$ = "http://www.dirtpage.com/datacalls.php"
divfiller$ = "http://www.dirtpage.com/divfiller.php"

// set posting

$('#test').submit(function() {
$.get(
    
    datacalls$, 
    
    {   topic: "<?=  $topic ?>", 
        newmessage: document.post.newmessage.value, 
        act: "postmessage"
    }, 
    
    function() {

    $.get(divfiller$, { topic: "<?=  $topic ?>"}, 
        
        function(data){$('#output').html(data)})
    
})
 })
 
 
 // set voting


$('.up').click(function() {
$.get(
    
    datacalls$, 
    
    {
    messagenumber: this.name, 
    change: "up", 
    topic: "<?=  $topic ?>"
    }, 
    
    function() {
        $.get(divfiller$, { topic: "<?=  $topic ?>"}, function(data) {
        $('#output').html(data)
        })
    })
})



$('.down').click(function() {
$.get(datacalls$, {messagenumber: this.name, change: "down", topic: "<?=  $topic ?>"}, function() {
$.get(divfiller$, { topic: "<?=  $topic ?>"}, function(data) {
$('#output').html(data)
})})
})
  
  
// set delete
$('.del').click(function(){    
    
    $j = $(this).attr("name")

    isAdmin = "<?= $_SESSION['admin']?>"

    $topic = "<?=  $topic ?>"
    
    if (isAdmin == "yes") {

    $.get(datacalls$,

        {topic: $topic,
            messagenumber: $j,
            act: "deletemessage"}, function() {

        $.get(divfiller$, {topic: $topic}, function(data) {

    $('#output').html(data)})})}

else {alert("you don't have administrator access.. idiot")}

})
  

  

  
// TEMP DISABLE set 'search' button

miniSearchFiller = "http://www.dirtpage.com/minisearchfiller.php"

$('#output .search').mouseenter(function(){
$.get(miniSearchFiller, {topic: $(this).attr('name')},  function(data) {
$('.results').html(data);	  }     );
$('.results').fadeIn("slow");
});



//TEMP$('.messagex').hover(function(){ $('.manip').toggle();  });
//TEMP$('.manip').hide();
//TEMP$('li', '#output').hover(function(){ $('li').css("border", "0px solid white");  $('.manip').hide(); $(this).css("border-top", "3px dotted green"); $(this).css("border-right", "3px dotted green");    $(this).find('.manip').show();  });




// set posting

    $('#test').submit(function() {
        $.get("http://www.dirtpage.com/datacalls.php", { topic: <?php echo "\"$topic\"" ?>, newmessage: document.post.newmessage.value, act: "postmessage"}, function() {
        $.get("http://www.dirtpage.com/divfiller.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
        $('#output').html(data);});
});
});


// set voting


$('.up').click(function() {
    $.get("http://www.dirtpage.com/datacalls.php",
        {messagenumber: this.name, change: "up", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/divfiller.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#output').html(data);}); });
});

$('.down').click(function() {
    $.get("http://www.dirtpage.com/datacalls.php", {messagenumber: this.name, change: "down", topic: <?php echo "\"$topic\"" ?>}, function() {
    $.get("http://www.dirtpage.com/divfiller.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
    $('#output').html(data);}); });
});


// set delete
$('.del').click(function(){    $j = $(this).attr("name");   if ("<?php echo $_SESSION['admin']?>" == "yes") {
        $.get("http://www.dirtpage.com/datacalls", {topic: <?php echo "\"$topic\"" ?>, messagenumber: $j, act: "deletemessage"}, function() {
        $.get("http://www.dirtpage.com/divfiller.php", { topic: <?php echo "\"$topic\"" ?>}, function(data) {
        $('#output').html(data);});}
);}
else{alert("you don't have administrator access.. idiot")} });





// TEMP DISABLE set 'search' button

//$('#output .search').mouseenter(function(){
//$.get("http://www.dirtpage.com/minisearchfiller.php", {topic: $(this).attr('name')},  function(data) {
//$('.results').html(data);	  }     );
//$('.results').fadeIn("slow");
//});
