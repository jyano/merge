<?php mysql_connect("dirtpage1.db.6263223.hostedresource.com", "dirtpage1", "Jason7734") or die(mysql_error());

mysql_select_db("dirtpage1") or die(mysql_error());?>

<?php include("functions.php"); ?>



<?php

$query = "SELECT * FROM people where (rank > garbage) ORDER BY rand() DESC LIMIT 1";
$result = mysql_query($query) or die(mysql_error());


while($row = mysql_fetch_array($result)){

	$topicLink = str_replace(" ", "+", $row['person']);
	$topic=$row['person'];
	$comment=$row['comment']; ?>

	<A class='smalltopic' HREF="http://www.dirtpage.com/page/<?= $topicLink ?>">
			<?= $topic ?> :
	</a>

	<span class='comment'>
		( <?= $comment ?> )
	</span>


<?php }





?>