


///////// LOAD FEED-DIV

    $.get("http://www.dirtpage.com/feed.php", {val: "post"}, function(data) {
        $('#output').html(data);
// TEMP setcards();
    });



$("input[name='recentwhat']").change(function(){

    if ($("input[@name='recentwhat']:checked").val() == 'post')
    {$.get("http://www.dirtpage.com/feed.php", {val: "post"}, function(data) {
        $('#output').html(data);  });
    }
    else if ($("input[@name='recentwhat']:checked").val() == 'view')
    {$.get("http://www.dirtpage.com/feed.php", {val: "view"}, function(data) {
        $('#output').html(data);  });
    }


    else if ($("input[@name='recentwhat']:checked").val() == 'search')
    {$.get("http://www.dirtpage.com/feed.php", {val: "search"}, function(data) {
        $('#output').html(data);  });
    }


});




////// KEEP LOADING FEED-DIV EVERY TEN SECONDS

setInterval( "refresh1();", 10000 );  ///////// 10 seconds
$(function() {
    refresh1 = function(){
        if ($("input[@name='recentwhat']:checked").val() == 'post')
        {$.get("http://www.dirtpage.com/feed.php", {val: "post"}, function(data) {
            $('#output').html(data);  });
        }
        else if ($("input[@name='recentwhat']:checked").val() == 'view')
        {$.get("http://www.dirtpage.com/feed.php", {val: "view"}, function(data) {
            $('#output').html(data);  });
        }



    }
});


// TEMP setcards();
header();



