

function search(){

    document.search_form.topic.value = document.search_form.topic.value.replace(/[^a-zA-Z0-9 ]/g, "");
    document.search_form.topic.value = document.search_form.topic.value.replace(/^\s+|\s+$/g, "");
    document.search_form.topic.value = document.search_form.topic.value.replace(/[\s][\s]+/g, " ");
    if (document.search_form.topic.value != ""){


        window.location.href="http://www.dirtpage.com/search.jade?topic="+document.search_form.topic.value.replace(/ /g, "+");}
}



function searchh(){

    document.form1.topic.value = document.form1.topic.value.replace(/[^a-zA-Z0-9 ]/g, "");
    document.form1.topic.value = document.form1.topic.value.replace(/^\s+|\s+$/g, "");
    document.form1.topic.value = document.form1.topic.value.replace(/[\s][\s]+/g, " ");
    if (document.form1.topic.value != ""){

        $.get("http://www.dirtpage.com/search.jade/results/", { topic: document.form1.topic.value}  );

        window.location.href="search.php?topic="+document.form1.topic.value.replace(/ /g, "+");}
}

function search(){var v, tp


    tp= $(dc.f1.tp)


    if(v=tp.vR(alphaNumRE).vR(/^\s+|\s+$/g).vR(/[\s][\s]+/g).v()){getRes()}


    function getRes(){

        $.g(rs$, {tp:v}, function(){
            $wLc(
                "search.php?tp="
                +
                tp.tUrl()
            )})
    }

}


function search ()

{

    document.form1.topic.value = document.form1.topic.value.replace(/[^a-zA-Z0-9 ]/g, "");
    document.form1.topic.value = document.form1.topic.value.replace(/^\s+|\s+$/g, "");
    document.form1.topic.value = document.form1.topic.value.replace(/[\s][\s]+/g, " ");
    if (document.form1.topic.value != ""){

        $.get("http://www.dirtpage.com/search.php/results/", { topic: document.form1.topic.value}  );

        window.location.href="http://www.dirtpage.com/results/"+document.form1.topic.value.replace(/ /g, "+");}
}


function search(){var v, tp


    tp= $(dc.f1.tp)


    if(v=tp.vR(alphaNumRE).vR(/^\s+|\s+$/g).vR(/[\s][\s]+/g).v()){getRes()}


    function getRes(){

        $.g(rs$, {tp:v}, function(){
            $wLc(
                "search.php?tp="
                +
                tp.tUrl()
            )})
    }

}