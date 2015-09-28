
<!--<table width="450"><tr><td>contents</td><td>messages</td><td>pictures</td><td>similar</td><td>-->
<?php // echo "<span name = \"$topic\" class = \"search\"><A HREF=\"http://www.dirtpage.com/results/" .
// str_replace(" ", "+", $topic) . "\">search</a></span></span>"?>
<!--</td></tr></table> -->


 <A HREF=\"http://www.dirtpage.com/results/" . str_replace(" ", "+", $topic) . "\"><span class=\"pinktitle\">dirtpage : "
strtolower($topic) . "</span></a><span class=\"pinktitle\"> : preview</span>";
 $query = "SELECT * FROM topics WHERE topic like '$topic'"; $result = mysql_query($query) or die(mysql_error());
while($row = mysql_fetch_array($result)){echo "<span style = \"float: right\">views: ". $row['num_views'] . "</span>";}?>






<br>




