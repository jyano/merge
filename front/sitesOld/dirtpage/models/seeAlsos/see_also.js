dp='http://www.dirtpage.com/'
dpX=dp+'x/'
dC=dpX+"datacalls.php"
sAP=dpX+"divfillers/see_also_preview.php"
sAP=dpX+ "divfillers/seealsos_preview"
sA=dpX+"divfillers/see_also"
dF=dp+"divfiller.php"
mSF=dp+"minisearchfiller.php"
//www.dirtpage.com/jsfunctions.js
$.fn.gg= $.fn.toggle
$.fn.sh= $.fn.show


function css(){var q = $(this),
    gr="3px dotted green",
    wh="0px solid white",
    m=$('.manip')

    m.hd()
    q.borT(gr).borR(gr).find('.manip').sh()
    TEMP$('.messagex').hv(function(){$('.manip').gg()})
    TEMP$('.manip').hd()
    TEMP$('li', '#OP').hv(function(){$('li').bor( wh )}
    m.hd()
}


$('.up').$(function(){$.g(dC,
    {tp:$tp, act:"see_also_up", msNum: this.name, change: "up"},
    function(){$.g(sAP, {tp:$tp}, function(d){
        $('#see_also_previewOrOP').h(d)
    })})})
$('.down').$(function(){$.g(dC,
    {tp:$tp, act:"see_also_down", msNum: this.name, change: "down"},
    function(){$.g(sAP, {tp:$tp}, function(d){
        $('#see_also_previewOrOP').h(d)
    })})})




$('#OP .search').oME(function(){$.g(mSF, {

    tp: $(this).at('n') },  function(d){
    $('.res').h(d)})
    $('.res').fI("slow")

})



function seeAlso(){

    $('#post_see_also').sm(function(){$.g(dC, {
            tp:  $tp, //  tp:  $theirName
            newMs: dc.post_see_also.newMs.val,
            act: "post_see_also"},
        fn //fn1
    )})

    $('#post_see_also').sm(function() {
        $.g(dC,
            {tp: $tp , newMs: dc.post_see_also.newmessage.value, act: "post_see_also"},

            function() {$.g(sAP, { tp: $tp}, function(d){$('#see_also_preview').h(d)})})})

    function fn(){$.g(sA, {tp: $tp}, function(d) {
        $('#see_also').h(d)})}
    function fn1(){$.g(sAP1, {tp: $tp}, function(d){$('#see_also_preview').h(d)})}

}