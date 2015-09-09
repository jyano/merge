both()
function both(){
    
    _ = window['_'] || {}

    _.sI= setInterval
}


front()

function front(){

    $.g= $.get
}

function header(){

    ///// REPEAT THE FOLLOWING OVER AND OVER AND OVER!!!


    topFeedUrl = "http://www.dirtpage.com/topfeed.php"

    $(function(){
        _.sI(function(){
            $.g(topFeedUrl, function(d){ $('#ticker').html(d) })
        }, 5000)
    })
}

function search(){

    var string = document.search_form.topic.value

    string = string.replace(/[^a-zA-Z0-9 ]/g, "")
        .replace(/^\s+|\s+$/g, "")
        .replace(/[\s][\s]+/g, " ");

    if(string != ""){
        newString = string.replace(/ /g, "+")
        window.location.href = "http://www.dirtpage.com/search.php?topic=" + newString
    }

}
function setexpand() {

    $('.expandable').each(function(index){

    var s = $(this)

    $.get("http://www.dirtpage.com/expandfiller.php", {
            topic: $(this).text()
        },

        function(data) {
            s.parent().parent().parent().append(data)
        })

})
	

$('.expandable').mouseenter(function(){
	

$(this).parent().parent().nextAll(".extra").slideToggle("fast")

})

}
function setcards(){

    divFiller2= "http://www.dirtpage.com/divfiller2.php"
    miniSearchFiller = "http://www.dirtpage.com/minisearchfiller.php"
    $('.results').hide()
    $('.results2').hide()
    $('#output').on(  "mouseover",   '.card',  function(){


            $topic = $(this).text()

            $.get(divFiller2, { topic: $topic },


                function(data) {

                    $('.results').html(data)
                    $('.results').fadeIn("slow")

            }

            )})



$(".results").on("mouseover",  ".card", function() {

    $.get(divFiller2,
        {topic: $(this).text()}, function(d) {

    $('.results2').html(d);
    $('.results2').fadeIn("slow");

        })})


$('.results').on("mouseenter", '.search',  function(){
$.get(miniSearchFiller,
    {topic: $('.results .topic').text()},  function(d) {

        $('.results2').html(d);
        $('.results2').fadeIn("slow");
 })
})

    $(".results2").on("mouseover", ".card",  function() {
$.get(divFiller2, {topic: $(this).text()},  function(d) {

    $('.results').html(d);
    $('.results2').fadeIn("slow");

})  } )

    $('.results2').on( "mouseenter", '.search',
    function(){text = $('.results2 .topic').text()
       $.g(miniSearchFiller, {topic: text},
            function(d){$('.results').html(d);$('.results2').fadeIn("slow");})

    }

)




}
