 uU = "http://www.dirtpage.com/thumbgray.jpg"
 dU = "http://www.dirtpage.com/thumbdowngray.jpg"
  jsV="javascript:void(0)"

css('styles.css')
$topic = trim($_GET['topic']);$newMessage = $_GET['newmessage'];$messageNumber = $_GET['messagenumber'];
  db("dirtpage1")
 phpfunctions.php  //MAIN QUERY:

<span class=\"pinktitle\">dirtpage :
 <A HREF=\"page.php?topic=" . str_replace(" ", "+", $topic)
  "\">

 $.sp(strtolower($topic)).K("pinktitle")
   </a> : see also      </span>"



   ///start form

   <form name="post_see_also"id="post_see_also" onSubmit="return false;"><br />
</h1>
$.sp().id('post').A(
&nbsp;  (x9)
 $.ip().n('newmessage').sz(28).v('').maxLen(125).autocomplete('off'))

$.hidden().n('topic').v($topic)

$.hidden().n('act').v('postmessage')
 $.sm().v("add new 'see also'")


   </form>



    //end form






    <br /><br />

see_also.find( {topic : $topic},  "ORDER BY score DESC", function(z,results){

  _.e(results, function(d){
   if( $odd = d.score %2 ) {$pic1 = uU $class1 = "up"; $pic2 = dU; $class2 = "down";}
   else {$pic2 = uD $class2 = "up"; $pic1 = dU; $class1 = "down";   }
  href="../../x/page?topic = str_replace(" ", "+", d.see_also
  ); "



  $.d().bor("border: 1px green dashed").A(
                  $.table().A(//start table
                          $.tr().A(
                                   $.td().W(600).valign('top').A($.a().href(href).A($.sp('('+ d.see_also +')' ).K('topic')      )),
                                   $.td().W(100).valign('top').A(
                                        $.sp( " (" . d.score  ") ).K('t') ; &nbsp; ";
                                         $.a().href(jsV).A( <img class =  $class1  name =" d.see_also_id  "  src=" $pic1 " border = "0"/>);
                                         $.a().href(jsV).A( <img class =  $class2  name =" d.see_also_id  " src=" $pic2 "  border = "0"/>);
                                        $.sp().K('del').n(d.message_id); <br><br>;</li>)
                                )
                  )//end table



  )
  ,$.br()
  })
  })