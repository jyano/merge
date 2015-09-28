  uU = "http://www.dirtpage.com/thumbgray.jpg"
  dU = "http://www.dirtpage.com/thumbdowngray.jpg"

 css('styles.css');$theirName = trim($_GET['topic']);$newMessage = $_GET['newmessage'];$act = $_GET['act'];$change = $_GET['change'];$messageNumber = $_GET['messagenumber'];
  db("dirtpage1"); phpfunctions.php


 <span class=\"garbage\">see also</span>


 //start form
 <form name="post_see_also"id="post_see_also" onSubmit="return false;"><br />
</h1><span id="post">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="newmessage" size="28" value="" maxlength="125" autocomplete="off"></span>
<input type="hidden" name="topic" value= <?php echo "\"$theirName\"" ?>>
<input type="hidden" name="act" value="postmessage">
<input id="button" type="submit" value="add new recommendation">
   </form> 

//end form



 seealsos.find({topic: $theirName}).orderBy('score', 'desc').exec(function(z,results){

   _.e(results, function(d){


 <li>
 <span class = \"message\">"  hyper($row['see_also'])    "</span>
 <span class = \"t\">".  " (" . $row['score']. ")  </span>
   &nbsp;


if(d.rank % 2 ) {
  $pic1 = upU; $pic2 = dU; $class1 = "up";  $class2 = "down" }
else {
  $pic1 = dU;$pic2 = uD;$class2 = "up"; $class1 = "down"}


$.a().href("javascript:void(0)").A(

$.i().K($class1).n(d.message_id').src($pic1).bor(0

)



$.a().href("javascript:void(0)").A(
$.i().K(  $class2 ).at({name:d.message_id ,  src:$pic2,   border:"0" })
 )


 <span class ="del" name=d.message_id>
 <span class = "manip">
  x


  &nbsp;

  </span></span>

 <br><br>
 </li>





   })

 })

 <ol>





</ol>





