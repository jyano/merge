
dp='http://www.dirtpage.com/'
dpX=dp+'x/'
dC=dpX+"datacalls.php"
sAP=dpX+"divfillers/see_also_preview.php"
sAP=dpX+ "divfillers/seealsos_preview"
sA=dpX+"divfillers/see_also"
dF=dp+"divfiller.php"
mSF=dp+"minisearchfiller.php"


$('.del').$(d0)


function d0(){
//if(!q.ss.admin== "yes"){alert("you don't have administrator access.. idiot");return}


    $.g(dC,

        {
            act:"delMs",
            tp:$tp,
            msNum:$(this).n()

        },



        function(d){

            $.g(dF,{tp:$tp},fn)

    })

}



function d1(){//if ("<?php echo $_SESSION['admin']?>" !== "yes") {  alert("you don't have administrator access.. idiot"); return }
    $.g(dC, {tp:  $tp , msNum: $(this).attr("name"), act: "delMs"},
    function(){$.g(dF, {tp:$tp}, fn)})

}

function d2(){$.g(dC, {
            tp:  $tp , msNum: $(this).attr("name"), act: "delMs"}, function(){
        $.g(dF,{tp:$tp},fn)
})}



function fn(d){$('#OP').h(d)}