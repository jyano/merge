
$.fn.tt=$.fn.tit= $.fn.title=function(t,c){var p
    p = $.p(t).fS(24).K('text-center').C('X', c||'z').mH(10).pH(30)
    this.A(p, $.hr().fS(10))
    return this
}
$.fn.chk=function(){ this.at('checked', true) }
$.fn.dismiss=function(a){
    return this.attr('data-dismiss',a)}
$.fn.el = function(e){
    if(U(e)){
        console.log( $('<div>').append(  this.clone()  ).html() )
        return this}}
$.fn.dismiss=function(a){
    return this.attr('data-dismiss',a)}
$.fn.delButton=function(){
    var that=this

    this.prepend(

        $.div().A(
            $.button(  'x', function(){ that.remove() }).K('pull-right').mar(20)
        )

    )


    return this}
$.fn.xBt=$.fn.delButton=function(){var el=this
    el.pp( $.d().A( $.bt(  'x', function(){ el.rm() })
                .K('pull-right').mar(20)
        )
    )
    return el}


oO.V =  function(a){return _.values( S(a)? oO(a): a)}


$.oR= onReady =_k = function(a){return O(a) && a.complete}
$.ld=function(a,b){$(a).load(b);
    return a
}
$.ht=function(a){var ht=$('html')
    if(U(a)){return ht}
}

_.c=function(c,orC){if(c=='*'){c=$r()}; return oO('c',c||orC)}
$$$ = function(a){$(_v(a))}


$.sels= $.selects=function(fn){
    var selects=$('select');
    if(fn){ selects.on('change', fn) }
    return selects}
$.boxes=function(fn){
    var b = $("input[type='checkbox'],input[type='radio']");
    if(fn) {  b.$( fn ) }
    return b
}
$.inputs=function(f){$.selects(f); $.boxes(f)}
$.getChecked=function(name){return $("input[type='radio'][name="+name+"]:checked").val()};




$.word = function (t, c1, c2) {return $.sp(t).C(c1, c2).A().dg()}







$.fn.trans=function(transform){
    $l('transform')
    return this.css({transform: transform})}


//dH=function(a){qq(a).h($(document).height())}
//events={}
//events.dL=dL=function(a,b,c){document.addEventListener(oE(a),b,c)}
//events.dR=dR=function(a,b,c){document.removeEventListener(oE(a),b,c)}
//co=function co(a,b){return O(a)? ss(a,'C', $r('c',b) ):co($b(),a)}


$.selects=function(func){
    var selects=$('select')

    if(func){ selects.on('change', func) }

    return selects}
$.boxes=function(func){

    var b = $("input[type='checkbox'],input[type='radio']")
    if(f) {  b.click( func ) }
    return b

}
$.inputs=function(f){
    $.selects(f);
    $.boxes(f)
}
$.getChecked=function(name){
    var input = $("input[type='radio'][name="+name+"]:checked")
    return input.val()}
