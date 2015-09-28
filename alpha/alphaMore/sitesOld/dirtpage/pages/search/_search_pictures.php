 resources/init.php 
 
 
$topic_searched = strtolower($_GET['topic_searched']);

 styles.css 

	

<div id = "everything">

 header.php 

<br><br>

<span id = "holder">
 
<br />

<span class = "redtitle">Picture results:  $topic_searched 
  </span><br><br> 


 


$query = "SELECT * FROM captions WHERE
 (
 cpt like '%$tp_searched %' 
 or 
 cpt like '% $tp_searched%' or cpt like '$tp_searched')  
 
 AND 
 pic not like '%$tp_searched%'

ORDER BY score DESC limit 50"; 


res = mysql_query($query)  

$num_results2 =  res.count()

	while($row = mysql_fetch_array(res)){	
	
$p = $row['pic'];
$query4 = "SELECT * FROM pics WHERE pic like '$p'"; 
res4 = mysql_query($query4) 

while($row4 = mysql_fetch_array(res4)){$topic = $row4['topic'];}

 <A HREF=\"http://www.dirtpage.com/page.php?topic="+
     str_replace(" ", "+", $topic). "\"><span class=\"smallyellow\">"+ $topic +
      </span></a>
      <br>
    
 <a href = \"http://www.dirtpage.com/page.php?topic="+$topic + "&mode=pic&pic=". $row['pic'] . "\"><img src=\"pics/".  $row['pic'] . "\" height=\"150\" border=\"black\"></a>";
 
    <br> 
    

	$.sp(strtolower( d.cpt  ).K("tinysilver")
	
	  $.sp(hyper( d.ms  ).K('ms')
	 
	
	<br><br>
	<br></div>
	
?>





<span id = "right">
<?php include $_SERVER['DOCUMENT_ROOT'] . '/divfillers/right.php';  ?>
</span>
 
 

</div>
 