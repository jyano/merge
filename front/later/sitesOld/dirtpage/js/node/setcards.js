function setcards(){
    $('.results').hide();
    $('.results2').hide();



    $('#output').delegate('.card', "mouseover", function(){

        $.get("http://www.dirtpage.com/divfiller2.php", {topic: $(this).text()},  function(data) {
            $('.results').html(data); $('.results').fadeIn("slow");  });});

    $(".results").delegate( ".card", "mouseover", function() {
        $.get("http://www.dirtpage.com/divfiller2.php", {topic: $(this).text()},  function(data) {
            $('.results2').html(data); $('.results2').fadeIn("slow");
        })  } )

    $('.results').delegate('.search', "mouseenter", function(){
        $.get("http://www.dirtpage.com/minisearchfiller.php", {topic: $('.results .topic').text()},  function(data) {
            $('.results2').html(data); $('.results2').fadeIn("slow");
        });}  )

    $(".results2").delegate( ".card", "mouseover", function() {
        $.get("http://www.dirtpage.com/divfiller2.php", {topic: $(this).text()},  function(data) {
            $('.results').html(data); $('.results2').fadeIn("slow");
        })  } )


    $('.results2').delegate('.search', "mouseenter", function(){
        $.get("http://www.dirtpage.com/minisearchfiller.php", {topic: $('.results2 .topic').text()},  function(data) {
            $('.results').html(data); $('.results2').fadeIn("slow");
        });}  )


}





function setcards(){$('.results').hide(); $('.results2').hide()


    $('#output').delegate('.card', "mouseover", function(){

        $.get("http://www.dirtpage.com/divfiller2.php", {topic: $(this).text()},  function(data) {

            $('.results').html(data); $('.results').fadeIn("slow")  })

    })







    $(".results").delegate( ".card", "mouseover", function() {

        $.get("http://www.dirtpage.com/divfiller2.php", {topic: $(this).text()},  function(data) {

            $('.results2').html(data);
            $('.results2').fadeIn("slow");

        })})



    $('.results').delegate('.search', "mouseenter", function(){

        $.get("http://www.dirtpage.com/minisearchfiller.php",

            {topic: $('.results .topic').text()},

            function(data) {


                $('.results2').html(data); $('.results2').fadeIn("slow");

            })})








    $(".results2").delegate( ".card", "mouseover", function() {
        $.get("http://www.dirtpage.com/divfiller2.php", {topic: $(this).text()},  function(data) {
            $('.results').html(data); $('.results2').fadeIn("slow");
        })  } )



    $('.results2').delegate('.search', "mouseenter", function(){

        $.get("http://www.dirtpage.com/minisearchfiller.php", {topic: $('.results2 .topic').text()},  function(data) {

            $('.results').html(data)

            $('.results2').fadeIn("slow")

        })})









}
function setcards(){
    rs=$('.results'); rs2=$('.results2');	op=$('#output'); rs.hd(); rs2.hd()
    op.oMV('.card',  function(){

        $.g(dF2$, {tp: $(this).t()}, function(d){rs.hF(d)})


    })
    rs.oMV( ".card",  function() {$.g(dF2$, {tp: $(this).text()},  function(d) {rs2.h(d); rs2.fI()})})
    rs.oME('.search', function(){$.g(mSF$, {tp: $('.results .tp').t()},  function(d) {rs2.h(d);  rs.fI()})})
    rs2.oMV( ".card",   function(){$.g(dF2$, {tp: $(this).t()},  function(d) {rs.h(d);rs2.fI()})})
    rs2.oME('.search',   function(){$.g(mSF$, {tp: $('.results2 .tp').t()}, function(d) {rs.h(d); rs2.fI()})})
}




function setcards ()
{
    $('.results').hide();
    $('.results2').hide();



    $('#output').delegate('.card', "mouseover", function(){

        $.get("http://www.dirtpage.com/divfiller2.php", {topic: $(this).text()},  function(data) {
            $('.results').html(data); $('.results').fadeIn("slow");  });});

    $(".results").delegate( ".card", "mouseover", function() {
        $.get("http://www.dirtpage.com/divfiller2.php", {topic: $(this).text()},  function(data) {
            $('.results2').html(data); $('.results2').fadeIn("slow");
        })  } )

    $('.results').delegate('.search', "mouseenter", function(){
        $.get("http://www.dirtpage.com/minisearchfiller.php", {topic: $('.results .topic').text()},  function(data) {
            $('.results2').html(data); $('.results2').fadeIn("slow");
        });}  )

    $(".results2").delegate( ".card", "mouseover", function() {
        $.get("http://www.dirtpage.com/divfiller2.php", {topic: $(this).text()},  function(data) {
            $('.results').html(data); $('.results2').fadeIn("slow");
        })  } )


    $('.results2').delegate('.search', "mouseenter", function(){
        $.get("http://www.dirtpage.com/minisearchfiller.php", {topic: $('.results2 .topic').text()},  function(data) {
            $('.results').html(data); $('.results2').fadeIn("slow");
        });}  )


}



function setcards(){
    rs=$('.results'); rs2=$('.results2');	op=$('#output'); rs.hd(); rs2.hd()
    op.oMV('.card',  function(){

        $.g(dF2$, {tp: $(this).t()}, function(d){rs.hF(d)})


    })
    rs.oMV( ".card",  function() {$.g(dF2$, {tp: $(this).text()},  function(d) {rs2.h(d); rs2.fI()})})
    rs.oME('.search', function(){$.g(mSF$, {tp: $('.results .tp').t()},  function(d) {rs2.h(d);  rs.fI()})})
    rs2.oMV( ".card",   function(){$.g(dF2$, {tp: $(this).t()},  function(d) {rs.h(d);rs2.fI()})})
    rs2.oME('.search',   function(){$.g(mSF$, {tp: $('.results2 .tp').t()}, function(d) {rs.h(d); rs2.fI()})})
}
function setcards(){
    rs=$('.results'); rs2=$('.results2');	op=$('#output'); rs.hd(); rs2.hd()
    op.oMV('.card',  function(){

        $.g(dF2$, {tp: $(this).t()}, function(d){rs.hF(d)})


    })
    rs.oMV( ".card",  function() {$.g(dF2$, {tp: $(this).text()},  function(d) {rs2.h(d); rs2.fI()})})
    rs.oME('.search', function(){$.g(mSF$, {tp: $('.results .tp').t()},  function(d) {rs2.h(d);  rs.fI()})})
    rs2.oMV( ".card",   function(){$.g(dF2$, {tp: $(this).t()},  function(d) {rs.h(d);rs2.fI()})})
    rs2.oME('.search',   function(){$.g(mSF$, {tp: $('.results2 .tp').t()}, function(d) {rs.h(d); rs2.fI()})})
}
