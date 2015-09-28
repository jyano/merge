
$messageNumber = $_GET['ii'];
$theirName = $_GET['topic'];


$query = "SELECT * FROM people
WHERE id = $messageNumber";

	 
$result = mysql_query($query) or die(mysql_error());


while($row = mysql_fetch_array($result)){
	
echo  $row['person'] ;

  $row['rank'] . "<br>" ;
  $row['rank'] ;
  $row['rank'] ;

  $row['person'] ;
	
  $row['rank'] ;
  $row['comment'] ;
  $row['rank'] ;
  $row['rank'] ;
  $row['rank'] ;




people
WHERE `id` = '".$messageNumber."'"
 rank++

echo $theirName;

}

echo "$theirName";

	

<h3> Thanks for your input!</h3> 