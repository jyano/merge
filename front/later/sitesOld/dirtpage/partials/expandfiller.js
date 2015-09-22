




<script type="text/javascript" src="http://www.dirtpage.com/jq.js"></script>
    <script type="text/javascript" src="http://www.dirtpage.com/jsfunctions.js"></script>
    <script type="text/javascript">

    $(".extra").hide();


$('#output .search').mouseenter(function(){

    $.get("http://www.dirtpage.com/minisearchfiller.php", {topic: $(this).attr('name')},  function(data) {
        $('.results').html(data);	  }     );
    $('.results').fadeIn("slow");
});



</script>