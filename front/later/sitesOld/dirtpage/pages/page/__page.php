<?php header("Cache-Control: no-cache, must-revalidate"); session_start(); ?>
 
<head>

<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
</head>


<?

include "mysql.php";

$m = $_GET['m'];

$topic = $_GET['topic'];
$mode = $_GET['mode'];
$message = $_GET['message'];
$picture = $_GET['picture'];



//increase the topic VIEWS by 1
$update = result("UPDATE topics SET num_views = num_views +1  WHERE topic = '$topic'");


//put topic back to the top of VIEWS
if(isset($topic) and $topic!=''){

 result("delete from viewed where topic = '$topic'");
 result("INSERT INTO viewed(topic) VALUES('$topic')");

}
 

//if topic does not exist, create it in db
if (isset($_GET['topic'])){

 $result = result("SELECT topic FROM topics WHERE topic like '$topic'" );
 $num_results = mysql_num_rows($result);

 if ($num_results < 1) {
    result("INSERT INTO topics (topic, user, ip, origin) VALUES('$topic', '$user', '$ip', curdate()) ");}
}


?>




<html>
<head>

      <title> dirtpage: <?= $topic ?></title>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <link rel="stylesheet" href="http://www.dirtpage.com/resources/styles.css" type="text/css">
      <? include("resources/google.php"); ?>

</head>
<body>


      <div id = "everything">

               <div id = "header"><? include("header.php"); ?></div>


                <div id= "holder"><?

                        // EVERYTHING

                     //if mode not set, just show ITEMS
                        if(!isset($mode)){include_once("divfillers/items.php");}



                        // if you specify MESSAGE mode and specify a MESSAGE..
                        // then load up a message page (a page of responses from one message)
                        if ($mode == 'message' && isset($message)){
                         include_once("divfillers/message.php"); }


                 // if you specify picture mode and specify a PICTURE..
                 // then load up a picture page (a page of captions from one picture)
                        // CAPTIONS
                        if ($mode == 'picture' && isset($picture)){
                         include_once("divfillers/picture.php"); }
                        if ($mode == 'tags' ){include_once("divfillers/tags.php"); }


                        ?>

                </div>


                <div id ="right">
                      <? include $_SERVER['DOCUMENT_ROOT'] . '/divfillers/right.php';  ?>
                </div>


                <div id ="footer"></div>

      </div>


</body> 








