
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
