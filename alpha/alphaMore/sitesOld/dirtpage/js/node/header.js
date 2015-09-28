header=function(){
_.ev(5, refresh);  ///// REPEAT THE FOLLOWING OVER AND OVER AND OVER!!!
 function refresh(){$.g("http://www.dirtpage.com/topfeed.php",
     function(d){$('#ticker').h(d)})}
}

function header (){



    setInterval("refresh()",   5000)  ///// REPEAT THE FOLLOWING OVER AND OVER AND OVER!!!

    $(function(){

        refresh=function(){

            $.get("http://www.dirtpage.com/topfeed.php", function(data){

                $('#ticker').html(data)

            })}

    })}

function header(){$(function(){$ev(5,function(){$.g(tF$,function(d){$('#ticker').h(d)})})})} //$ev(5,'refresh()')  ///// REPEAT THE FOLLOWING OVER AND OVER AND OVER!!!


function header (){



    setInterval( "refresh();", 5000 );  ///// REPEAT THE FOLLOWING OVER AND OVER AND OVER!!!
    $(function() {refresh = function(){

        $.get("http://www.dirtpage.com/topfeed.php", function(data) {$('#ticker').html(data);  });}
    });
}







function header(){$(function(){$ev(5,function(){$.g(tF$,function(d){$('#ticker').h(d)})})})} //$ev(5,'refresh()')  ///// REPEAT THE FOLLOWING OVER AND OVER AND OVER!!!


