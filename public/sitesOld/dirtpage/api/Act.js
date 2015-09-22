$Act=function(md){
 this.md=md
 this.acts={}
}

$Act.prototype.on=function(ms, fn){this.acts[ms]=fn}


site = new $Act(Site)


site.on("up", function(id){this.md.uI({id},  {$inc: { score: 1 }})})
site.on("down", function(id){this.md.uI({id},  {$inc: { score: -1 }})})




 if ($act == "topic_up"){ topics.update({topic:$topic},  {$inc: { score: 1 }})
if ($act == "topic_down"){ topics.update({topic:$topic},  {$inc: { score: -1 }})

 if ($act == "message_up"){messages.update({message_id:$message_id},  {$inc: { score: 1 }}) }
if ($act == "message_down"){messages.update({message_id:$message_id},  {$inc: { score: -1 }})  }

 if ($act == "pic_up"){
  pictures.update({picture_id:$picture_id},  {$inc: { score: 1 }})
 }

 if ($act == "pic_down"){
  pictures.update({picture_id:$picture_id},  {$inc: { score: -1 }})
   }




if ($act == "response_up"){responses.update({response_id:$response_id},  {$inc: { score: 1 }})}
if ($act == "response_down"){responses.update({response_id:$response_id},  {$inc: { score: -1 }})}


 if ($act == "tag_up"){tags.update({tag_id:$tag_id},  {$inc: { score: 1 }})}
if ($act == "tag_down"){tags.update({tag_id:$tag_id},  {$inc: { score: -1 }})}


 _.e(act.acts, function(v,k){
  if($act==k){v()}
})



if ($act == "caption_up"){

captions.update(
{caption_id: $caption_id},
{$inc: { score: 1 }
})




}



if ($act == "caption_down"){captions.update({caption_id: $caption_id},  {$inc: { score: -1 }})}










if ($change == "up"){pics.update({id: $messageNumber},  {$inc: { rank: 1 }})


if ($change == "down"){  pics.update({id: $messageNumber},  {$inc: { rank: -1 }})





if ($change == "up"){ captions.update({id: $messageNumber},  {$inc: { rank: 1 }})

if ($change == "down"){ captions.update({id: $messageNumber},  {$inc: { rank: -1 }})



if ($act == "see_also_up"){see_also.update({see_also_id: $messageNumber},  {$inc: { score: 1 }})

if ($act == "see_also_down"){see_also.update({see_also_id: $messageNumber},  {$inc: { score: -1 }})








if ($act == "postmessage"){
	if ($newMessage != "" ){
		if ($topic != "" ){

postedon.delete({topic:$topic})

 postedon.create({topic:$topic})
	
	echo "test";
	echo $topic;
	

//$num_results =  messages.find({topic:$topic,message:$newMessage})
//if ($newMessage != ""){
//if ($num_results < 1){
	


 messages.create({

 topic_id: '', message: $newMessage, user:'', ip:'', origin: now(), topic: $topic
 })
 //}}
}}}
 

  
  
 if ($act == "post_see_also"){

//$num_results =  messages.find({topic:$topic, message:$newMessage})

//if ($newMessage != ""){
//if ($num_results < 1){

 see_also.create({topic_id:'',see_also:$newMessage, topic: $topic})


 //}}
} 
    
  
if ($act == "post_tag"){
	if ($new_tag != "" ){
		if ($topic != "" ){

		tags.create({topic:$topic, tag:$new_tag })

;  
 
	
}  }}
  










if ($act == "post_caption"){
	if ($new_caption != "" ){
		if ($topic != "" ){

//$num_results =  captions.find({pic:$topic,caption:$newMessage})

//if ($newMessage != ""){
//if ($num_results < 1){

 captions.create({picture:$picture, caption:$new_caption, origin:curdate()})


 postedon.delete({topic:$topic})
 postedon.create({topic:$topic})
	
}  }}
  
  
if ($act == "post_response" ){
	if ($new_response != "" ){
		if ($topic != "" ){


//$num_results = captions.find({pic:$topic,caption:$newMessage})
//if ($newMessage != ""){
//if ($num_results < 1){

 responses.create({message_id:$message_id , response:$new_response, origin:curdate()})


 postedon.delete({topic:$topic})
 postedon.create({topic:$topic})


	
}}}  
  
  
 if ($act == "deletemessage"){people.delete({id:$messageNumber })


}
 


  
 if ($act == "deletemessage"){
pics.delete({id:$messageNumber })
}
 


if ($act == "create_topic"){
topics.create({  topic:$topic, user:$user, ip:$ip, origin:curdate()  })

 })


}






header( 'Location: page.php?topic='.$topic ) 


}






 //$topic = trim($_POST['topic'])
 
