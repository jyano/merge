 phpfunctions.php 

mysql_connect("dirtpage1.db.6263223.hostedresource.com",
 "dirtpage1", "Jason7734")  
mysql_select_db("dirtpage1")  


$_FILES = $_FILES['newPic']; //$topic = trim($_POST['topic']);
$act = $_GET['act'];
$change = $_GET['change'];
$topic = trim($_GET['topic']);
$newMessage = $_GET['newMs'];
$ms_id = $ms_number = $_GET['ms_id'];
$re_id = $_GET['re_id'];
$new_re = $_GET['new_re'];
$picture_id = $_GET['picture_id'];
$picture = $_GET['picture'];
$caption_id = $_GET['caption_id'];
$new_caption = $_GET['new_caption'];


if ($act == "site_up") {  score++      }
if ($act == "site_down") {   score-- }

if ($act == "topic_up"){   topics.find(tp:$tp).upd(score++ ) }
if ($act == "topic_down"){   topics.find(tp:$tp).upd(score-- ) }

 if ($act == "ms_up"){  messages.find({ms_id:  $ms_id ).update( score++  ) }
if ($act == "ms_down"){  .messages.find({ms_id:$ms_id }).update(score--)  }

if ($act == "re_up"){
res.find({re_id  :  $re_id} ).update(  score++ )}
if ($act == "re_down"){
res.find({re_id  :  $re_id} ).update(  score-- )}


if ($act == "pic_up"){
res.find({pic_id  :  $pic_id} ).update(  score++ )}
if ($act == "pic_down"){
res.find({pic_id  :  $pic_id} ).update(  score-- )}

  if ($act == "caption_up"){
  res.find({caption_id  :  $caption_id} ).update(  score++ )}
  if ($act == "caption_down"){
  res.find({caption_id  :  $caption_id} ).update(  score-- )}

    if ($act == "see_also_up"){
    res.find({see_also_id  :  $see_also_id} ).update(  score++ )}
    if ($act == "see_also_down"){
    res.find({see_also_id  :  $see_also_id} ).update(  score-- )}


if ($change == "up"){  rank= rank+1  WHERE `id` = '".$msNumber."'") }
if ($change == "down"){  rank= rank-1  WHERE `id` = '".$msNumber."'") }
if ($change == "up"){ rank= rank+1  WHERE `id` = '".$msNumber."'") }
if ($change == "down"){  rank= rank-1  WHERE `id` = '".$msNumber."'") }






if ($act == "postms"){

	 echo "can you read this?";

	mysql_query(
	"INSERT INTO messages (topic_id, ms, user, ip, origin, topic) VALUES('', '$newMessage','','', curdate(), '$topic')"
	)  

}
 

  
  
 if ($act == "post_see_also"){

mysql_query(
"INSERT INTO see_also (topic_id, see_also, topic) VALUES('', '$newMessage', '$topic') "
)  

}

  
if ($act == "post_caption"){
//$query = "SELECT * FROM captions WHERE pic = '$topic' and caption = '$newMessage'";
//$result = mysql_query($query) 
//$num_results = mysql_num_rows($result); 
//if ($newMessage != ""){
//if ($num_results < 1){
mysql_query("INSERT INTO captions (picture, caption, origin) VALUES('$picture', '$new_caption',curdate()) ") 
  
}  
  
  
if ($act == "post_re"){
//$query = "SELECT * FROM captions WHERE pic = '$topic' and caption = '$newMessage'";
//$result = mysql_query($query) 
//$num_results = mysql_num_rows($result);
//if ($newMessage != ""){
//if ($num_results < 1){
mysql_query("INSERT INTO res (ms_id, re, origin) VALUES('$ms_id', '$new_re',curdate()) ")
}

  






if ($act == "create_topic"){
topics.create({tp:$tp, user:$user, ip:$ip, origin: curdate()})
header( 'Location: page.php?topic='.$topic );
}

 if ($act == "delMs"){ pics.f({id: $msNumber }).del()}
 

/////

<?php session_start();

mysql_connect("dirtpage1.db.6263223.hostedresource.com", "dirtpage1", "Jason7734") or die(mysql_error());
mysql_select_db("dirtpage1") or die(mysql_error());





$theirName = trim($_GET['topic']);
$newMessage = $_GET['newmessage'];
$act = $_GET['act'];
$change = $_GET['change'];
$messageNumber = $_GET['messagenumber'];






if ($change == "up"){$loginid = mysql_query("UPDATE people SET rank= rank+1  WHERE `id` = '".$messageNumber."'") or die(mysql_error());}

if ($change == "down"){$loginid = mysql_query("UPDATE people SET rank= rank-1  WHERE `id` = '".$messageNumber."'") or die(mysql_error());}

if ($act == "postmessage"){
$query = "SELECT * FROM people WHERE person = '$theirName' and comment = '$newMessage'";
$result = mysql_query($query) or die(mysql_error());
$num_results = mysql_num_rows($result);
if ($newMessage != ""){
if ($num_results < 1){
mysql_query("INSERT INTO people
(person, comment, origin) VALUES('$theirName', '$newMessage',curdate()) ")
or die(mysql_error());
mysql_query("delete from feed where event = '$theirName'") or die(mysql_error());
$p = $theirName . " : " . $newMessage;
mysql_query("INSERT INTO feed
(type, event) VALUES(\"post\", '$p')")
or die(mysql_error()); }}
}


 if ($act == "deletemessage"){

mysql_query("delete from people where id = '$messageNumber'") or die(mysql_error());

}


