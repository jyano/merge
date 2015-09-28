//jsfunctions.js
//header(); /////// LOAD DIV INITIALLY



if ($m == 'p'){
    Dp.g("captiondivfiller",
        {tp: ob.$tp},
        function(d) {$('#OP').h(d) })
}


else {

    Dp.g(  "divfiller", _Tp(ob.$tp), hFn($('#OP'))  )

}



setcards()


$('button#newMs').$(function(){var newMs,tp


    newMs = $('input#newMs').v().trim()

    tp= $('button#newMs').at('data-topic')


    $.po('ms',

        {tp:tp, ms: newMs},

        function(){
            window.location='/page/'+tp
        })
})



$('button#search').$(function(){
        window.location='/search/'+$('input#search').v()
    })

$('a.up').$(function(){
        var ms = $(this).at('data-ms')
        var tp= $('button#newMessage').at('data-tp')
        $.ajax({
            type: 'PUT',
            url: '/ms',
            data: {
                tp: tp,
                ms: ms,
                dir: 'up'
            },

            success: function(){location.reload()}})
    })

$('a.down').$(function(){
        var ms = $(this).attr('data-ms')
        var tp= $('button#newMessage').attr('data-tp')
        $.ajax({
            type: 'PUT',
            url: '/ms',
            data: {tp: tp, ms: ms, dir: 'down'},
            success: function(data){location.reload()}})
    })

$.ajaxSetup({ cache: false });



_.ev(10, function(){
////// KEEP LOADING FEED-DIV EVERY TEN SECONDS

      $.g(

          Dp.u("divfillers/right"),
          function(d){$('#right').h(d)}
      )


  })



