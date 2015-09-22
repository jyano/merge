$id = $_GET['i']
//<br><i><h3>"+$id+":"+$id+"</i></h3>

<form name="form2">
      <input type="text" name="theirComment" size="28"
      value="" maxlength="125">
    <A HREF="javascript:void(0)"
    onClick="throwDirt(document.form1.theirName.value,
    document.form2.theirComment.value)">
post new sub-comment</A>
</form>

 peeps.find(WHERE person LIKE '%$theirName%')
 .by("order by length(person) asc").exec(function(z,res){

 _.e(res, function(){
 <A HREF="javascript:void(0)"
 onClick='searchExact( $row['person'] )'>
 <span class = "topic">" +$row['person'] + " : " + "</span></a>" +
	"<span class = "comment">"     +
	$row['comment']+ "</span>";
 $.br(2)

})
 })
