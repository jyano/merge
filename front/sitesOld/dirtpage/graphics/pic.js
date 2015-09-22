$dp=function(a){
    DP='http://www.dirtpage.com/'
    return DP+a
}
Pic= function(ob){return {tp: ob.tp, pic: ob.pic}}
Pic1=function(ob){return {tp: ob.tp, pic: ob.pic}}


Up= function(ob){
    return _.x({act: "capt_up"}, ob)
}




Act=function(act){var ob
    ob = {act: act}
    return ob
}


$('.up').$(function(){


    $Up=function(ob,fn){ $.g( $dp('data/data.php'),  Up(ob), fn  )}


    $Up({


        cptId: this.n,
        pic: ob.pic

    },

            function(){


            $.g(
                $dp('divrs/pic.php'), Pic1({
                    tp: ob.tp,
                    pic: ob.pic
                }),

                function(d){$('#holder').h(d)}

            )

        })




    )




})


}

PoCapt= function(ob){

    act = Act("post_capt")


    return _.x(act, {

        tp: ob.tp,
        pic: ob.pic,

        new_capt: dc.post.new_capt.value
    })

}


Down= function(n){

    return {
    capt_id: n,
    act: "capt_down",
    pic: ob.pic

}
}




$('#post_capt').oSm(function(){



    $.g(

            $dp('data/data.php'),

          PoCapt({}), function() {


            $.g("http://www.dirtpage.com/divfillers/picture.php",
                Pic({tp: ob.tp, pic: ob.pic}),
                function(d){$('#holder').h(d) })
        })
})

$('.down').$(function(){


    $.g($dp('data/data.php'),  Down(), function() {

        ob={
            tp: ob.tp,
            pic: ob.pic
        }
    $.g(

        $dp('divrs/pic.php'), ob,
        function(d){$('#holder').h(d)}) })
})


$('.del').$(function(){



    Del = function(msN, msN, tp){
        return _.x({act: "delMs"},
            {msN: msN, tp: tp})
    }
    if (ob.$_SESSION['admin']  == "yes"){

            $.g($dp("data"), delOb,
        function(){
            ob= {tp: ob.tp}

            $.g($dp('captdivr.php'),ob, function(d) {$('#OP').h(d)}
            )

        })

        }
        else {alert("u !admin!")}

})






$('#output .search').oME(function(){

    $.g(
         $dp('minisearchfiller.php'),

         {tp: $(this).n()},

         function dToRes(d){$('.res').h(d)}
     )
     $('.res').fI()
})

