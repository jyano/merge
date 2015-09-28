<head><link rel="stylesheet" href="http://www.dirtpage.com/resources/styles.css" type="text/css"></head>
<body><br>



<?php

include "mysql.php";
include_once $_SERVER['DOCUMENT_ROOT'] . '/resources/phpfunctions.php';

$session = $_SESSION['admin'];
$topic = trim($_GET['topic']);
$newMessage = $_GET['newmessage'];
$act = $_GET['act'];
$change = $_GET['change'];
$messageNumber = $_GET['messagenumber'];
$upImgUrl =  "http://www.dirtpage.com/graphics/up.png";
$downImgUrl =  "http://www.dirtpage.com/graphics/down.png";


function setPicAndClassTopic($score, $itemType){
global $pic1;
    global $pic2;
    global $class1;
    global $class2;

    if($score%2){
        $pic1 = $upImgUrl ; $class1 = $itemType . "_up";
        $pic2 = $downImgUrl; $class2 = $itemType . "_down";}

    else {
        $pic1 = $downImgUrl; $class1 = $itemType ."_down";
        $pic2 = $upImgUrl; $class2 = $itemType ."_up";

    }
}






//	   
//MAIN QUERY
//


$result = result("SELECT * FROM topics WHERE topic like '$topic'");


while($row = mysql_fetch_array($result)){

    $score = $row['score'];
    $numViews = $row['num_views'];

    setPicAndClass($score, "topic");

    ?>

    <span class="pinktitle"><?=$topic?></span> &nbsp;
    <span class="bigyellow">(<?=$score?>)</span>
    <a href="javascript:void(0)"><?=voteImg($class1, $pic1)?></a>
    <a href="javascript:void(0)"><?=voteImg($class2, $pic2)?></a>
    <span><?=$numViews?>views</span>


<A HREF="http://www.dirtpage.com/search.php?topic=<?=$topicUrl?>">
    <img src="http://www.dirtpage.com/graphics/search.png" height = "28px">
</a>


&nbsp;

<span style = "float: clear" class="tinygreen">
<br>created by anonymous some time ago</span>"


<?  }



?>

<br><br />
<form name="post_message" id="post_message" onSubmit="return false;"><br />

    </h1>

    <input type="hidden" name="topic" value= "<?=$topic ?>">
    <input type="hidden" name="act" value="postmessage">

    <table class="tinysilver">
        <tr>

            <td width = 180>
                <span id="post">post new message: </span>
            </td>
            <td width = 350>
                <input type="text" name="newmessage" size="63" value="" maxlength="125" autocomplete="off">
            </td>
            <td>
                <input id="button" type="submit" value="post">
            </td>

        </tr>
    </table>


</form>
<form enctype="multipart/form-data" action="http://www.dirtpage.com/resources/upload.php" method="post">

    <input type="hidden" name="topic" value= <?php echo "\"$topic\"" ?>

        >

    <input type="hidden" name="MAX_FILE_SIZE" value="10000000" />

    <table class = "tinysilver" ><tr><td width = 180> upload new picture: </td>

            <td width = 350><input name="uploaded_file" type="file" value="upload new pic"  /></td>

            <td><input type="submit" value="upload" /></td></tr></table>
</form>
<br />


 

<?
// QUERY
$query = "SELECT 'messages' as table_name, message as item, score, id as item_id
        FROM messages WHERE topic = '$topic' 
        UNION
        SELECT 'pictures' as table_name, picture as item, score, id as item_id
        FROM pictures WHERE topic = '$topic' 
        ORDER BY score DESC";


$result = result($query);


$i = 0;

while($row = mysql_fetch_array($result)){

$i++;

    $score = $row['score'];

// MESSAGES
if 	($row['table_name'] == 'messages'){

?>



 <table name="<?=$row['item_id']?>"><tr >

         <td valign="top">
             <span class="smallyellow">
                 <?=$i?>
             </span>
         </td>

         <td valign="top" width= "600" style="padding-left:5px;">
             <span class = "smallwhite"> <?= hyper($row['item']) ?> </span>
             <span class = "smallyellow"> ( <?= $score ?>) </span>
             <? setPicAndClass($score, "message") ?>
             <a href="javascript:void(0)">
                 <img class = <?= $class1; ?> name ="<?= $row['item_id']; ?>"  src="<?= $pic1; ?>" border = "0"/> </a>
             <a href="javascript:void(0)">
                 <img class = <?= $class2; ?> name ="<?= $row['item_id']; ?>" src="<?= $pic2; ?>" border = "0"/> </a>
             <a href = "http://www.dirtpage.com/page.php?topic="<?= $topic ?>&mode=message&message=<?= $row['item_id'] ?> ">
             <span class="tinysilver" name="<?= $row['item_id']; ?>">[see/edit responses]</a>

                 <br>
         </td>

     </tr></table>






    <? }



	
//PICTURES	
if 	($row['table_name'] == 'pictures') {

$score = $row['score'];

setPicAndClassTopic($score, "picture");
$name = $row['item_id'];

?>


 <table>
     <tr >

         <td valign="top">
             <span class="smallyellow"><?=$i?>.</span>
         </td>

         <td valign="top">&nbsp;
             <img src="../pictures/<?=$row['item']?>" height="150" border="black">
         </td>

         <td valign="top">
             <span class="t">( <?=$score?> )</span><br>




<a href="javascript:void(0)">
 <img class = <?= $class1; ?> name ="<?= $name  ?>"  src="<?= $pic1; ?>" border = "0" /> </a><br>

             <a href="javascript:void(0)">
 <img class = <?= $class2; ?> name ="<?= $name ?>" src="<?= $pic2; ?>"  border = "0" /> </a><br>


 </td>
<td valign = "bottom" style="padding-left:20px; padding-right:70px;">
    <span class = "tinygreen">







    <?


// CAPTION
$item = $row['item'];
$query2 = "SELECT * FROM captions WHERE picture = '$item' ORDER BY score DESC limit 1"; 
$result2 = mysql_query($query2) or die(mysql_error());

while($row2 = mysql_fetch_array($result2)){

$name = $row['item_id'];
   $caption = $row2['caption']

$item=$row['item'];

    ?>

     <span class="tinygreen"><?=$caption?></span>


     <a href="http://www.dirtpage.com/page.php?topic="<?=$topic?>&mode=picture&picture=<?=$item?>">


        &nbsp;<span class ="tinysilver" name="<?=$name?>">[see/edit captions]</span></a>

        </span><br><br></td></tr></table>


<? }
	
	
echo "<br>";
}
?>









<script type="text/javascript" src="http://www.dirtpage.com/resources/jsfunctions.js"></script>
<script type="text/javascript">

//TEMP$('.messagex').hover(function(){ $('.manip').toggle();  }); 
//TEMP$('.manip').hide();
//TEMP$('li', '#output').hover(function(){ $('li').css("border", "0px solid white");  $('.manip').hide(); $(this).css("border-top", "3px dotted green"); $(this).css("border-right", "3px dotted green");    $(this).find('.manip').show();  }); 


$topic = <?= $topic ?>;

itemsUrl = "http://www.dirtpage.com/divfillers/items.php"
searchUrl = "http://www.dirtpage.com/search.php"
dataUrl="http://www.dirtpage.com/resources/datacalls.php"
divfillerUrl = "http://www.dirtpage.com/divfiller.php"
miniSearchFillerUrl = "http://www.dirtpage.com/minisearchfiller.php"


holderHTML = function(data) {$('#holder').html(data)}
outputHtml = function(data) {$('#output').html(data)}

updateItems = function(destination){
    destination = destination || '#holder'
    $.get( itemsUrl,  {topic: $topic},   function(data){$(destination).html(data)})}

getDataUrl = function(params, func){$.get(dataUrl, params, func)}

dataCallAndReload = function(params){

    var func = function() {  $('#holder').load(itemsUrl, $.param({topic: $topic}) ) }

    $.get(  dataUrl,  params, func)

}


buttonEventReload = function(css, data){

    $(css).click(function() {

        dataCallAndReload(data)

    })}


$('.refresh').click(updateItems)

///////////////// re-search
$('.search_topic').click(function() {
    $.get(searchUrl, { topic: $topic}, holderHTML)
})
    



//////////////// set posting

$('#post_message').submit(function(){

    message = document.post_message.newmessage.value

    dataCallAndReload( {
        act: "postmessage",
        topic: $topic,
        newmessage: message })
})


$('#post_pic').submit(function() {
    message = document.post.newmessage.value
    dataCallAndReload({
        act: "postmessage",
        topic: $topic,
        newmessage:message})})
  



 
 ///////////////// set voting



buttonEventReload('.topic_up',  {act: "topic_up", topic: $topic} )


buttonEventReload('.topic_down',  {act: "topic_down", topic: $topic} )


buttonEventReload('.message_up', {
        act: "message_up",
        topic: $topic
        message_id: this.name
})


 buttonEventReload('.message_down', {
        act: "message_down",
        topic: $topic
        message_id: this.name })

buttonEventReload('.picture_up', {picture_id: this.name,
            act: "picture_up",
            topic:$topic})

buttonEventReload('.picture_down', {picture_id: this.name,
        act: "picture_down",
        topic: $topic})





// set delete

isSession = "<?= $session ?>"

$('.del').click(function(){

    messageNumber = $(this).attr("name");

    if ( isSession == "yes") {

    $.get(dataUrl,
        {topic: $topic, messagenumber: messageNumber,
            act: "deletemessage"},





        function() {




        $.get(divfillerUrl, {topic: $topic}, outputHtml)



        }





    )}

else {alert("no admin access")}


})
  



$('.message_b').click( function(){

        $(location).attr('href',

              'http://www.dirtpage.com/x/page.php?topic='
              + $topic + '&mode=message&message=' + this.name )

  })





// TEMP DISABLE set 'search' button
  
 $('#output .search').mouseenter(function(){

     $.get(miniSearchFillerUrl, {
             topic: $(this).attr('name')},

         function(data) {$('.results').html(data).fadeIn("slow")
     })




 })

  
</script>