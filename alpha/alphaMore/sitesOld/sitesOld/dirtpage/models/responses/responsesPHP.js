

  messages.f(ms_id : $message_id ORDER BY score ASC, function(){
  &nbsp;(9) +  'page:'+ $topic  + $.br()  +  &nbsp;(9) +  'ms: ' +  ob.ms + $.br(2)

    })




  ol=$.ol()

 responses.f( " WHERE message_id = '$message_id' ORDER BY score DESC").exec(function(z,res){
 _.e(res, function(ob){
  if( $odd = $row['score']%2 ) {$pic1 = "http://www.dirtpage.com/thumbgray.jpg"; $class1 = "up"; $pic2 = "http://www.dirtpage.com/thumbdowngray.jpg"; $class2 = "down";}
  else {$pic2 = "http://www.dirtpage.com/thumbgray.jpg"; $class2 = "up"; $pic1 = "http://www.dirtpage.com/thumbdowngray.jpg"; $class1 = "down";   }?>

  ol.A($.li().A(


         <span  hyper($row['response']) . "</span>"
  "<span class = \"t\">".  " (" . $row['score']. ") </span>" +
  "&nbsp; ";
  <a href="javascript:void(0)"> <img class = <?php echo $class1 ?> name ="<?php echo $row['caption_id']; ?>"  src="<?php echo $pic1 ?>"
  border = "0"/> </a>
      <a href="javascript:void(0)"> <img class = <?php echo $class2 ?> name ="<?php echo $row['caption_id']; ?>" src="<?php echo $pic2 ?>"
  border = "0"/> </a>
      <span class ="del" name="<?php echo $row['id']?>"><span class = "manip"> x &nbsp;</span> </span>
 })






  function more(){
      /*


       $query = "SELECT * FROM messages WHERE message_id = '$message_id' ORDER BY score ASC";
       $result = mysql_query($query) or die(mysql_error());

       while($row = mysql_fetch_array($result)){

       $.nbsp(9)
       page:  $topic
       $.br(),
       $.nbsp(9)
       ms: '+_ob.ms, $.br(2)'}


       $.f({
       n:'post',
       id:'post_response',
       oSm:"return false;",
       ch:[
       {el:'sp',id:'post',
       ch: {el:'ip', id: "button", type:"submit",n:"new response",sz:28,v:'',maxLen:125,autocomplete:'off'}},
       {el:'ip', id: "button", type:"submit", val:"add new response"}]})



       responses.f( "WHERE message_id = '$message_id' ORDER BY score DESC", function(){



       })


       <ol>
       while($row = mysql_fetch_array($result)){
       echo  "<li><span class = \"message\">" . hyper($row['response']) . "</span>"   .  "<span class = \"t\">".  " (" . $row['score']. ") </span>&nbsp; ";
       if( $odd = $row['score']%2 ) {$pic1 = "http://www.dirtpage.com/thumbgray.jpg"; $class1 = "up"; $pic2 = "http://www.dirtpage.com/thumbdowngray.jpg"; $class2 = "down";}
       else {$pic2 = "http://www.dirtpage.com/thumbgray.jpg"; $class2 = "up"; $pic1 = "http://www.dirtpage.com/thumbdowngray.jpg"; $class1 = "down";   }?>
       <a href="javascript:void(0)">
       <img class = <?php echo $class1 ?> name ="<?php echo $row['caption_id']; ?>"  src="<?php echo $pic1 ?>" border = "0"/>
       </a>


       <a href="javascript:void(0)"> <img class = <?php echo $class2 ?> name ="<?php echo $row['caption_id']; ?>" src="<?php echo $pic2 ?>"  border = "0"/> </a><span class ="del" name="<?php echo $row['id']?>"><span class = "manip"> x &nbsp;</span></span>


       <br><br></li>
       </ol>

       */
  }



