
function setexpand(){$('.expandable').each(function(index) {
    var s = $(this)
    $.get("http://www.dirtpage.com/expandfiller.php", {topic: $(this).text()},  function(data) {
        s.parent().parent().parent().append(data)})})


    $('.expandable').mouseenter(function(){$(this).parent().parent().nextAll(".extra").slideToggle("fast")})

}


function setexpand() {
    $('.expandable').each(function(index) {
        var s = $(this);
        $.get("http://www.dirtpage.com/expandfiller.php", {topic: $(this).text()},  function(data) {
            s.parent().parent().parent().append(data)
        } )})

    $('.expandable').mouseenter(function(){
        $(this).parent().parent().nextAll(".extra").slideToggle("fast");
    })}


function setexpand(){

    $('.expb').each(function(ix) {var s = $(this); $.g(eF$, {tp: $(this).t()}, function(d){s.pa().pa().pa().A(d)})})

    $('.expb').oME(function(){$(this).pa().pa().nextAll(".extra").slTg()})
}



function setexpand() {
    $('.expandable').each(function(index) {
        var s = $(this);
        $.get("http://www.dirtpage.com/expandfiller.php", {topic: $(this).text()},  function(data) {
            s.parent().parent().parent().append(data);   }    );
    })


    $('.expandable').mouseenter(function(){

        $(this).parent().parent().nextAll(".extra").slideToggle("fast");
    });

}

function setexpand(){

    $('.expb').each(function(ix) {var s = $(this); $.g(eF$, {tp: $(this).t()}, function(d){s.pa().pa().pa().A(d)})})

    $('.expb').oME(function(){$(this).pa().pa().nextAll(".extra").slTg()})
}


// setExpand:
$('.expb').each(function(ix){ //for each expandable

    $.g("http://www.dirtpage.com/expandfiller.php", //get a php page
        {tp: $(this).t()},//and pass in THIS's topic
        function(d){$(this).paaa().A(d) //append data to greatgrandparent
        })

}).oME(function(){
    //  mouse enters >> slide toggle grandparent's nextAfter 'extra' // ?!
    $(this).paa()
        .slTg()})



