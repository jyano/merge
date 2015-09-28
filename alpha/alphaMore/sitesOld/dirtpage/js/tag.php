<title> dirtpage: <?php echo $topic?> </title>


<body>
<div id = "everything">
 header.php

<br><br>
<span id = "holder">


<br>

<span class = "pinktitle"> topics with the tag '$tag '</span>


 <br><br>

 
 "SELECT * FROM tags WHERE tag LIKE '$tag' order by score desc";

while($row = mysql_fetch_array($result)){
 <A HREF="page.php?topic= str_replace(" ", "+", $row['topic']); ">
 <span class = "bigyellow">". $row['topic'];
  "</span></a><br><br>";
}



<br /><br />
</span>
<span id = "right">
<?php include $_SERVER['DOCUMENT_ROOT'] . '/divfillers/right.php';  ?>
</span>
 
</div>






</body>