







<script type="text/javascript" src="http://www.dirtpage.com/jq.js"></script>
    <script type="text/javascript" src="http://www.dirtpage.com/jsfunctions.js"></script>

    <script type="text/javascript">
    header();


$(".options").hide();


$(".extra").hide();
$("#results3b").hide();

$('.see').click(function(){
    $(".extra").hide("fast");
    $(".firsttoggle").hide("fast");
    $(this).parent().nextAll(".extra:first").slideToggle("fast");
});



$('.see1').click(function(){
    $(".firsttoggle").slideToggle("fast");
});




$('.topic').mouseenter(function(){



    $(this).parent().nextAll(".extra:first").slideToggle("fast");


    $(this).parent().nextAll(".options").toggle();

});







$(document).click(function(){


    if ( $(".extra").is(":visible") ){


        $(".extra").hide("fast");

        $(".options").hide();}

    else{


        $(".extra").show("fast");

        $(".options").show();}


});











</script>





