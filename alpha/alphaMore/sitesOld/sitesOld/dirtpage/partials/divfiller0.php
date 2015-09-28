<?php include("phpfunctions.php"); ?><head>
<link rel="stylesheet" href="http://www.dirtpage.com/styles.css" type="text/css">
</head>

<?php

$theirName = trim($_GET['topic']);
$newMessage = $_GET['newmessage'];
$act = $_GET['act'];
$change = $_GET['change'];
$messageNumber = $_GET['messagenumber'];

//	   
//MAIN QUERY
//


echo "<A HREF=\"http://www.dirtpage.com/results/" . str_replace(" ", "+", $theirName) . "\"><span class=\"pinktitle\">page: " . strtolower($theirName) . "</span></a>";?> 

<br>
<?php echo "<span name = \"$theirName\" class = \"search\"><A HREF=\"http://www.dirtpage.com/results/" . str_replace(" ", "+", $theirName) . "\">search</a></span></span><br><br>";

?><form name="post"id="test" onSubmit="return false;"><br />
</h1><span id="post">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="newmessage" size="28" value="" maxlength="125" autocomplete="off"></span>
<input type="hidden" name="topic" value= <?php echo "\"$theirName\"" ?>>
<input type="hidden" name="act" value="postmessage">
<input id="button" type="submit" value="add new item">
   </form> <?php


$query = "SELECT * FROM people WHERE person = '$theirName' ORDER BY rank DESC"; 
$result = mysql_query($query) or die(mysql_error()); 
echo"<ol>"; while($row = mysql_fetch_array($result)){
echo  "<li><span class = \"message\">" . hyper($row['comment']) . "</span>"   .  "<span class = \"t\">".  " (" . $row['rank']. ") </span>&nbsp; ";
if( $odd = $row['rank']%2 ) {$pic1 = "http://www.dirtpage.com/thumbgray.jpg"; $class1 = "up"; $pic2 = "http://www.dirtpage.com/thumbdowngray.jpg"; $class2 = "down";}
else {$pic2 = "http://www.dirtpage.com/thumbgray.jpg"; $class2 = "up"; $pic1 = "http://www.dirtpage.com/thumbdowngray.jpg"; $class1 = "down";   }?>
<a href="javascript:void(0)"> <img class = <?php echo $class1 ?> name ="<?php echo $row['id']; ?>"  src="<?php echo $pic1 ?>" border = "0"/> </a>
<a href="javascript:void(0)"> <img class = <?php echo $class2 ?> name ="<?php echo $row['id']; ?>" src="<?php echo $pic2 ?>"  border = "0"/> </a><span class ="del" name="<?php echo $row['id']?>"><span class = "manip"> x &nbsp;</span></span>
 <br><br></li>
 <?php } echo "</ol>"?>

