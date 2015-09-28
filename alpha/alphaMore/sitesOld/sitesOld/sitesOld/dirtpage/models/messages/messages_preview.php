<head>
<link rel="stylesheet" href="http://www.dirtpage.com/x/styles.css" type="text/css">
</head>

<?php 

$topic = trim($_GET['topic']);
$newMessage = $_GET['newmessage'];
$messageNumber = $_GET['messagenumber'];
 
mysql_connect("dirtpage1.db.6263223.hostedresource.com", "dirtpage1", "Jason7734") or die(mysql_error());
mysql_select_db("dirtpage1") or die(mysql_error());
include_once('../phpfunctions.php');


 
//	   
//MAIN QUERY
//
 
 


$query = "SELECT * FROM messages WHERE topic = '$topic' ORDER BY score DESC"; 
$result = mysql_query($query) or die(mysql_error()); 
$num_rows = mysql_num_rows($result);




echo "<br><a href = \"http://www.dirtpage.com/x/page.php?topic=". $topic . "&mode=message\"> <span class=\"smallblack\"><u>messages</u></span></a><span class=\"smallblack\">  ($num_rows total)</span>";


  $i = 0;
$query = "SELECT * FROM messages WHERE topic = '$topic' ORDER BY score DESC limit 25"; 
$result = mysql_query($query) or die(mysql_error()); 
 while($row = mysql_fetch_array($result)){ $i++;
echo  "<div class = \"message_b\" name = \"". $row['message_id']."\"><span class = \"message\"  name = \"hello\">$i. &nbsp;" . hyper($row['message']) . "</span><br>" ;

//$m = $row['message_id'];
//$query2 = "SELECT * FROM responses WHERE message_id = '$m' ORDER BY score DESC limit 1"; 
//$result2 = mysql_query($query2) or die(mysql_error()); 
//while($row2 = mysql_fetch_array($result2))
//{echo  "<span class = \"m\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-" . hyper($row2['response']) . "</span>";}

?>
</div><?php }
echo "<br>";

