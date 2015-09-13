$.fn.qA=function(t){
    alert('fn.qA')
    return $('<'+t+'>').A()
}
$.fn.qAP=function(a,b,c){
    alert('fn.qAP')
    this.qA(a).par(b, c);
    return this
}


$.cKO = function (m, b, v) {
    alert('$.cKO')
    var cb = $.cb(),
        p = $.p().A($.sp().A(m),
            cb.bC(b))
    if (v) {
        cb.v(v)
    }
    return p
    function old() {
        cbKO = cb2 = function (m, binding, val) {
            alert('cbKO cb2')
            var cbox = $.ip().type('checkbox'), pg = $.p().A($.sp().A(m), cbox.b('checkbox', binding))
            if (val) {
                cbox.val(val)
            }
            return pg
        }
    }
}
