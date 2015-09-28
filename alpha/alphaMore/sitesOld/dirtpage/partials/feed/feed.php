
$theirName = strtolower($_GET['topic']);
$messageNumber = $_GET['message'];
$act = $_GET['act'];
$newMessage = $_GET['newmessage'];
$c = $_GET['c'];
$v = $_GET['v'];
$p = $_GET['p'];

$val= $_GET['val'];



<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title> dirtpage: <?php echo $theirName?> </title>
<link rel="stylesheet" href="http://www.dirtpage.com/styles.css" type="text/css">


</head>



<body>


<span class = "redtitle">Real time feed</span>




$limit = 50;

if ($val == "post")
{?><form name="chat"id="chat" onSubmit="return false;">
<br>

<span class = "post"><INPUT TYPE=radio NAME="recentwhat" value="post" id="post" checked> <span class = "message">new messages</span></span>
<span class = "view"><INPUT TYPE=radio NAME="recentwhat" value="view" id="view"> <span class = "smalltopic">page views</span></span>
<br>



  </form>
  
  
  $query = "SELECT * FROM feed where type = 'post' ORDER BY id DESC limit $limit";
$result = mysql_query($query) or die(mysql_error());
while($row = mysql_fetch_array($result)){
list($posttopic, $postmessage) = explode(":", $row['event']);
echo  "<A HREF=\"http://www.dirtpage.com/page/" . str_replace(" ", "+", $posttopic) . "\"><span class = \"smalltopic\"><span class = \"card\">" . strtolower($posttopic) . "</span></span></a><span class = \"smalltopic\">: </span><span class = \"message\">". hyper(strtolower($postmessage)) ."</span><br><br>";}




 }
	 

if ($val == "view")
{?><form name="chat"id="chat" onSubmit="return false;">
<br>

<span class = "post"><INPUT TYPE=radio NAME="recentwhat" value="post" id="post"> <span class = "message">new messages</span></span>
<span class = "view"><INPUT TYPE=radio NAME="recentwhat" value="view" id="view" checked> <span class = "smalltopic">page views</span></span>
<br>



  </form><?php
  
  $query = "SELECT * FROM feed where type = 'view' ORDER BY id DESC limit $limit"; 
$result = mysql_query($query) or die(mysql_error());
while($row = mysql_fetch_array($result)){
echo "<div class = \"dirt\"><A HREF=\"http://www.dirtpage.com/page/" . str_replace(" ", "+", $row['event']) . "\"><span class = \"smalltopic\"><span class = \"card\">".strtolower($row['event']) . "</span></span></a></div><br>";}







}
	 

if ($val == "search")
{$query = "SELECT * FROM feed where type = 'search' ORDER BY id DESC limit $limit"; 
$result = mysql_query($query) or die(mysql_error());
while($row = mysql_fetch_array($result)){
echo "<A HREF=\"http://www.dirtpage.com/page/" . str_replace(" ", "+", $row['event']) . "\"><span class = \"biggarbage\">".strtolower($row['event']) . "</span></a>"   .   
"<span class = \"topic\"><br><br>";}
}





?>




