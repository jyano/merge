
<?
include "/mysql.php";
include_once $_SERVER['DOCUMENT_ROOT'] . '/resources/phpfunctions.php'; 

$picture = $_GET['picture'];
$topic = $_GET['topic'];
$message_id = $_GET['message'];
//$response_id = $_GET['response_id'];


$query = "SELECT * FROM messages WHERE message_id = '$message_id' ORDER BY score ASC"; 
$result = mysql_query($query) or die(mysql_error()); 

while($row = mysql_fetch_array($result)){ ?>


<table cellspacing="5">
    <tr>
        <td>
            <A HREF="page.php?topic=<?=str_replace(" ", "+", $topic)?>">
                <img src="graphics/left.png">
            </a>
        </td>
        <td>
            <span class="pinktitle"><?=strtolower($topic)?></span></td></tr></table>

    <br><div class="hugered" style="padding:20px;">" .  $row['message']."</div>


<? } ?>




<form name="post"id="post_response" onSubmit="return false;"><br />
</h1><span id="post">&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" name="new_response" size="65" value="" maxlength="125" autocomplete="off"></span>
<input id="button" type="submit" value="post new response">
</form> 

<?


$query = "SELECT * FROM responses WHERE message_id = '$message_id' ORDER BY score DESC"; 
$result = mysql_query($query) or die(mysql_error());

$i=0;
while($row = mysql_fetch_array($result)){$i++;

    $response_id=$row['response_id'];
    $id=$row['id'];

    ?>

     <span class="smallyellow">
         <?=$i?>.&nbsp;&nbsp;
     </span>

     <span class="message">
         <?=hyper($row['response'])?>
     </span>

     <span class = t>
         (<?=$row['score']?>)
     </span>&nbsp;


     <?
    $up ="/graphics/up.png";
    $down ="/graphics/down.png";
    $score = $row['score']
    if($score%2){
         $pic1=$up;$class1="up";
         $pic2=$down;$class2="down";}
    else{
        $pic2=$up;$class2="up";
        $pic1=$down;$class1="down";}
    ?>


  <a href="javascript:void(0)">
   <img class=<?=$class1?> name ="<?=$response_id?>"  src="<?= $pic1 ?>" border = "0"/>
  </a>



  <a href="javascript:void(0)">


      <img class = <?= $class2 ?> name="<?=$response_id?>" src="<?=$pic2 ?>"  border = "0"/> </a>

     <span class="del" name="<?=$id?>"></span>


     <br>

     <br>



 <? } ?>
 
 

 
