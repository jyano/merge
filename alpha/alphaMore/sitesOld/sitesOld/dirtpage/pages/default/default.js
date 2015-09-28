//jsfunctions.js 

header()
$('.site_up').$(function() {
    $.g("datacalls.php", {act: "site_up"})
    window.location.reload()
})
$('.site_down').$(function() {
    $.g("datacalls.php", {act: "site_down"})
    window.location.reload()})
$('#dp').an({al:0.5},0)
$.g("http://www.dirtpage.com/topfeed.php", function(d){$('#feeed').h(d) })
setInterval( "refresh();", 5000 );  ///// REPEAT THE FOLLOWING OVER AND OVER AND OVER!!!
$(function(){
    refresh = function(){
    $('#dp').an({al: .25}, 2000)
    $('#dp').an({al: 1}, 1000)
    $.g("http://www.dirtpage.com/topfeed.php",function(d){
        $('#feeed').h(d)})
}})

changeSelect=function(){
      var d=document
      d.f1=d.form1

      d.bgColor="white"
      if (d.f1.method.value=="1"){
        d.f1.comment.disabled=true
        d.form1.comment.value=""}
      if(d.f1.method.value=="2"){
          d.f1.comment.disabled=false
      }

    function changeSelect () {

        document.bgColor="white";

        if (document.form1.method.value == "1") {document.form1.comment.disabled = true; document.form1.comment.value = ""}
        if (document.form1.method.value == "2") {document.form1.comment.disabled = false;}

    }

}

