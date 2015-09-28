<link rel="stylesheet" href="http://www.dirtpage.com/resources/styles.css" type="text/css">

<span class="tinywhite">
	being posted on:
</span>
<br>
<br>


<?php

function toTopicUrl($topic){
	return "http://www.dirtpage.com/page.php?topic=" . $topic;
}

$query = "SELECT * FROM postedon ORDER BY id DESC limit 200";
$result = mysql_query($query) or die(mysql_error());

while($row = mysql_fetch_array($result)){

	$topic = strtolower($row['topic']);
	$topicUrl = str_replace(" ", "+", $topic);

	?>

	<A class='tinysilver' HREF='<?= toTopicUrl($topicUrl) ?>'>
		<?= $topic ?>
	</a>
	<br>

<?php } ?>
<br />



<span class="tinywhite">being viewed:</span><br><br>
<?php





$query = "SELECT * FROM viewed ORDER BY id DESC limit 50";
$result = mysql_query($query) or die(mysql_error());

while($row = mysql_fetch_array($result)){
	$topic = strtolower($row['topic']);
	$topicUrl = str_replace(" ", "+", $topic);
	?>

	<A class="tinysilver" HREF="<?= toTopicUrl($topicUrl) ?>">
		  <?= $topic ?>
	</a>
	<br>


<?php }


