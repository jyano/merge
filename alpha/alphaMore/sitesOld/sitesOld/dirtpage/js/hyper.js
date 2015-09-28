
function hyper ($string, $exclude ) {
    $exclude = $exclued || ''
    /*
$hyperQuery = "SELECT distinct * FROM people ORDER by rank";
$hyperResult = mysql_query($hyperQuery) or die(mysql_error);
$match = "none";
$matchrank = 0;
$untrim_string = " ". $string . " ";
while($hyperRow = mysql_fetch_array($hyperResult)){
$topic = $hyperRow['person'];
$untrim_topic = " ". $topic . " ";
$rank = $hyperRow['rank'];
if (strlen($topic) > 2 and strtolower($topic) != strtolower($exclude) and stristr($untrim_string, $untrim_topic) != false and $rank > $matchrank)
{$match = $topic; $matchrank = $rank;}
}
$url = "http://www.dirtpage.com/page/" . str_replace(" ", "+", $match);
$link = "<a class = \"card\" href = \"$url\">" . $match . "</a>";
$hyper_string = str_ireplace($match, $link, $string);
return strtolower($hyper_string)
*/

}





/*function hyper ($string, $exclude = "") {

 $hyperQuery = "SELECT distinct * FROM people ORDER by rank";

 $hyperResult = mysql_query($hyperQuery)

 $match = "none";
 $matchrank = 0;
 $untrim_string = " ". $string . " ";
 while($hyperRow = mysql_fetch_array($hyperResult)){
 $topic = $hyperRow['person'];
 $untrim_topic = " ". $topic . " ";
 $rank = $hyperRow['rank']

 if (strlen($topic) > 2 and strtolower($topic) != strtolower($exclude) and stristr($untrim_string, $untrim_topic) != false and $rank > $matchrank)
 {$match = $topic; $matchrank = $rank}}

 $url = "http://www.dirtpage.com/x/page.php?topic=" . str_replace(" ", "+", $match);
 $link = "<a class=\"card\" href = \"$url\">" . $match . "</a>";
 $hyper_string = str_ireplace($match, $link, $string);
 return strtolower($hyper_string);}*/


hyper=function($string, $exclude){
    if(U($exclude)){exclude=''}
    $hyperResult =  "SELECT distinct * FROM messages ORDER by score"
    $match = "none"
    $matchrank = 0
    $untrim_string = " "+ $string + " "
    while($hyperRow = mysql_fetch_array($hyperResult)){
        $tp = $hyperRow['tp'];
        $untrim_tp = " "+ $tp + " ";
        $rank = $hyperRow['score']
        if (strlen($tp) > 2 &&
            strtolower($tp) != strtolower($exclude) &&
            stristr($untrim_string, $untrim_tp) != false &&
            $rank > $matchrank
        ){
            $match = $tp; $matchrank = $rank
        }

    }




    $url = "http://www.dirtpage.com/page.php?tp=" . str_replace(" ", "+", $match);

    $link = "<a class=\"card\" href = \"$url\">" . $match . "</a>";

    $hyper_string = str_ireplace($match, $link, $string)

    return strtolower($hyper_string)
}

