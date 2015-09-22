





<script type="text/javascript" src="http://www.dirtpage.com/jq.js"></script>
    <script type="text/javascript" src="http://www.dirtpage.com/jsfunctions.js"></script>
    <script type="text/javascript">

    setcards(3);







$('.goto').mouseenter(function(){


});


//////// load topic pages into divs

$("#div1 a").mouseover(function(){

    $.get("http://www.dirtpage.com/divfiller2.php", {topic: $(this).text()},  function(data) {
        $('#div2').html(data)  }); });



$("#div3 .m a").mouseover(function(){

    $.get("http://www.dirtpage.com/divfiller2.php", {topic: $(this).text()},  function(data) {
        $('#div2').html(data)  }); });




//////// load search results into div

$("#div2 .redtopic").mouseover(function(){

    $.get("http://www.dirtpage.com/resultfiller.php", {topic: $(this).text()},  function(data) {
        $('#div3').html(data)  }); });





</script>