<head>

<link rel="stylesheet" href="/resources/styles.css" type="text/css">

</head>

<body>
<br>

<?php

$topic = trim(req.params.topic

$newMessage = req.params.newmessage

$act = req.params.act

$change = req.params.change

$messageNumber = req.params.messagenumber
 
 
  


//	   
//MAIN QUERY
//
 

$result = mysql_query( "  SELECT * FROM topics WHERE topic like '$topic'  " )

 while(

 $row = mysql_fetch_array($result)

 ){

  <span class="pinktitle">  toLowerCase($topic)  </span> &nbsp;


<span class="bigyellow">  ( $row['score'] ) </span> "





//logic for up/down voting!!
if( $odd = $row['score']%2 ) {

$pic1 = "/graphics/up.png"

 $class1 = "topic_up"

  $pic2 = "/graphics/down.png"

   $class2 = "topic_down"

   }

}

else {

$pic2 = "/graphics/up.png";
 $class2 = "topic_up";
 $pic1 = "/graphics/down.png";
 $class1 = "topic_down";   }?>

<a href="javascript:void(0)"> <img class = $class1   src= $pic1   height = "20px" border = "0">  </a>
<a href="javascript:void(0)"> <img class = $class2   src= $pic2   height = "20px" border = "0">  </a>







$l("<span > ["     + $row['num_views'] +     " views]  </span>")




$l( "<A HREF=\"/search.php?topic=" . str_replace(" ", "+", $topic) . "\"><img src=\"/graphics/search.png\" height = \"28px\"></a>&nbsp;";


<span style = \"float: clear\" class="tinygreen">
<br> created by anonymous some time ago </span>"



}



?>




<br><br />





<form  name="post_message"id="post_message" onSubmit="return false;"><br />
</h1>
<input type="hidden" name="topic" value= $topic>
<input type="hidden" name="act" value="postmessage">
<table class="tinysilver"><tr><td width = 180><span id="post">post new message: </span></td>
<td width = 350><input type="text" name="newmessage" size="63" value="" maxlength="125" autocomplete="off"></td>
<td><input id="button" type="submit" value="post"></td></tr></table>
</form>


<form enctype="multipart/form-data" action="/resources/upload.php" method="post">

    <input type="hidden" name="topic" value= $topic>
    <input type="hidden" name="MAX_FILE_SIZE" value="10000000" />


    <table class = "tinysilver" ><tr><td width = 180> upload new picture: </td>
        <td width = 350><input name="uploaded_file" type="file" value="upload new pic"  /></td>
        <td><input type="submit" value="upload" /></td></tr>
    </table>

</form>



<br />





<?php
// QUERY
$query = "SELECT 'messages' as table_name, message as item, score, message_id as item_id
        FROM messages WHERE topic = '$topic'
        UNION
        SELECT 'pictures' as table_name, picture as item, score, picture_id as item_id
        FROM pictures WHERE topic = '$topic'
        ORDER BY score DESC"

$result = mysql_query($query)
$i=0









while($row = mysql_fetch_array($result)){ $i ++;


// MESSAGES
if 	($row['table_name'] == 'messages') {
echo  "<table ><tr ><td valign=\"top\"><span class=\"smallyellow\">$i.</span></td>";
echo "<td valign=\"top\" width= \"600\" style=\"padding-left:5px; \">
<span class = \"smallwhite\">" . hyper($row['item']) . "</span>"   .  "<span class = \"smallyellow\">".  " (" . $row['score']. ") </span> ";
if( $odd = $row['score']%2 ) {$pic1 = "/graphics/up.png"; $class1 = "message_up"; $pic2 = "/graphics/down.png"; $class2 = "message_down";}
else {$pic2 = "/graphics/up.png"; $class2 = "message_up"; $pic1 = "/graphics/down.png"; $class1 = "message_down";   }?>
<a href="javascript:void(0)"> <img class = <?php echo $class1; ?> name ="<?php echo $row['item_id']; ?>"  src="<?php echo $pic1; ?>" border = "0"/> </a>
<a href="javascript:void(0)"> <img class = <?php echo $class2; ?> name ="<?php echo $row['item_id']; ?>" src="<?php echo $pic2; ?>" border = "0"/> </a>
<?php echo "<a href = \"/page.php?topic=". $topic . "&mode=message&message=". $row['item_id'] . "\">"?> <span class="tinysilver" name="<?php echo $row['item_id']; ?>">[see/edit responses]</a>

<br></td>
</tr></table>

}


//PICTURES
if 	($row['table_name'] == 'pictures') {
echo "<table ><tr ><td valign = \"top\"><span class=\"smallyellow\"> $i.</span> </td>";
echo "<td valign = \"top\">&nbsp;<img src=\"../pictures/".  $row['item'] . "\" height=\"150\" border=\"black\"></td>";
echo "<td valign = \"top\">";
echo  "<span class = \"t\">".  " (" . $row['score']. ") </span><br> ";
if( $odd = $row['score']%2 ) {$pic1 = "/graphics/up.png"; $class1 = "picture_up"; $pic2 = "/graphics/down.png"; $class2 = "picture_down";}
else {$pic2 = "/graphics/up.png"; $class2 = "picture_up"; $pic1 = "/graphics/down.png"; $class1 = "picture_down";   }?>
<a href="javascript:void(0)"> <img class = <?php echo $class1; ?> name ="<?php echo $row['item_id']; ?>"  src="<?php echo $pic1; ?>" border = "0" /> </a><br>
<a href="javascript:void(0)"> <img class = <?php echo $class2; ?> name ="<?php echo $row['item_id']; ?>" src="<?php echo $pic2; ?>"  border = "0" /> </a><br>

 </td><td valign = \"bottom\" style=\"padding-left:20px; padding-right:70px;\"><span class = \"tinygreen\">";





// CAPTION
$item = $row['item']

$query2 = "SELECT * FROM captions WHERE picture = '$item' ORDER BY score DESC limit 1";
$result2 = mysql_query($query2)
while($row2 = mysql_fetch_array($result2))
{echo "<span class = \"tinygreen\">".$row2['caption']."</span>" ;}


echo "<a href = \"/page.php?topic=". $topic . "&mode=picture&picture=". $row['item'] . "\">"?> &nbsp;<span class ="tinysilver" name="<?php echo $row['item_id']; ?>">[see/edit captions]</span></a><?php



echo "</span><br><br></td></tr></table>";
}


}
