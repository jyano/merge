header.php

$m = $_GET['m']
$topic =     q.params.topic
$mode =    q.params.mode']
$message =  q.params.message']
$picture =  q.params.picture']


$update = mysql_query("UPDATE topics SET num_views = num_views +1
WHERE topic = '$topic'")


if (isset($_GET['topic'])){
	
	

 topics.find( WHERE topic like '$topic'").select('tp').exec(function(){

 })



 }


if ($num_results < 1) {

 topics.create({
 topic:$topic',
 user:'$user',
 ip: '$ip',
 origin, curdate()
})



}





 head().A(

title( 'dirtpage: '+ ob.tp )
meta( {'http-equiv':"Content-Type" ,content:"text/html, charset="UTF-8"})
 css('http://www.dirtpage.com/x/styles.css')
 google.php
)



 d=$.d().id('holder').marginLeftAndRight('auto')
 if (q.params.mode){  d.A(divfillers/items.php)  }// EVERYTHING
if (q.params.mode == 'message' && q.params.msg  ) { d.A(divfillers/message.php)  }// RESPONSES
if (q.params.mode == 'pic' && q.params.pic ){
d.A(divfillers/picture.php)   }// CAPTIONS




