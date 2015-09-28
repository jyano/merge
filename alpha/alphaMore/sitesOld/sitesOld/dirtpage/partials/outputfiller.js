
    header();




$("#messageresults").hide();







$('.hidemessages').click(function(){
    $("#messagematches").slideUp("fast");
});


$('.gotomessages').click(function(){
    $("#data").hide("");
    $(".extra:first").show();
    $("#messageresults").slideDown("fast");

});





$(".redtitle").click(function(){
    $("#messageresults").fadeOut("fast");
    $("#data").fadeIn("slow");

    if ( $(".extra").is(":visible") ){
        $(".extra").slideUp("fast");
        $("#messagematches").slideDown("fast");
        $(".options").hide();}

    else{
        $(".extra").slideDown("slow");
        $(".options").show("slow");}
});






setexpand();





