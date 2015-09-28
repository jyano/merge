
_Tp=function(tp){return {tp: tp}}

hFn=function(a){return function(d){a.h(d)}}

Do=function(act, ob, fn){
    var g=G(arguments),
        o= _.x({act: g.f}, F(g.s)? {fn: g.s}: {ob: g.s,fn: g.t})
    o.ob= _.x(o.ob||{}, {act:act})
    $.g(Dp.u('api'), o.ob, fn)
}



function dirtpage(){
    Dp = function () {
    }

    Dp.site = 'http://www.dirtpage.com'
    Dp.url = 'http://www.dirtpage.com/'
    Dp.u = function (a) {
        return this.url + a + '.php'
    }

    Dp.u_ = function (a, b) {
        return this.url + a + '/' + b || ''
    }

    Dp.g = function (a, b, fn) {
        fn = fn || function (d) {
                $('#OP').h(d)
            }
        $.g(this.u(a), b, fn)
    }

    Dp.d = function (a, b) {
        this.g('data', a, b)
    }

}