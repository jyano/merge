

<title>  dirtpage: $topic  </title>



<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" href="http://www.dirtpage.com/resources/styles.css" type="text/css">


</head>


$tag = $_GET['tag']




<body><div id = "everything">


 include("header.php")

<br>
<br>

<span id = "holder">




<br>

span.pinktitle
   topics with the tag '<?php echo $tag ?>'</span>




   <br><br>


<?php


while( tags.find({tag:$tag}).sort({$desc: score})

 ){

<A HREF="page.php?topic=   str_replace(" ", "+", $row['topic']) ">

<span class = "bigyellow">  $row['topic']

 </span></a><br><br>

}



<br /><br />
 
</span>

<span id = "right">
 include $_SERVER['DOCUMENT_ROOT'] . '/divfillers/right.php'
</span>
 
</div>



</body>
</html>