





// TEMP setexpand();


    ( "refresh1();", 5000 );  ///////// 10 seconds


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







$('.view').mouseenter(function(){  $('input[name="recentwhat"]')[1].checked = true        ;



    $.get("http://www.dirtpage.com/feed.php", {val: "view"}, function(data) {
        $('#output').html(data);  });  });



$('.post').mouseenter(function(){  $('input[name="recentwhat"]')[0].checked = true
    $.get("http://www.dirtpage.com/feed.php", {val: "post"}, function(data) {
        $('#output').html(data);  });  });

