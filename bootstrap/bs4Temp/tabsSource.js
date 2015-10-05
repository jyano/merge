$.fn.__ = $.fn.parent
$.fn.ea = $.fn.each
$.fn.___ = $.fn.closest


$.fn.da = $.fn.data

$.fn.rp = $.fn.replace
$.fn.hK = $.fn.hasClass
$.fn.tr = $.fn.trigger
$.fn.fi = $.fn.find
$.Ev= $.Event

Tab = function Tab (q){

    this.element = $(q)
}


Tab.TRANSITION_DURATION = 150

Tab.prototype.show = function(){

    var w=this,
        q= w.element,
        ul= q.closest('ul:not(.dropdown-menu)'),
        sel =q.da('target'),
        prev,
        hdEv,
        shEv

    if (!sel){sel  = q.at('href') && sel.rp(/.*(?=#[^\s]*$)/, '')} // strip for ie7

    if (q.__('li').hK('active')) {return}
    prev = $ul.fi('.active:last a')
    hdEv = $.Ev('hide.bs.tab', {relTg: q[0]})
    shEv = $.Ev('show.bs.tab', {relTg: prev[0]})
    prev.tr(hdEv)
    q.tr(shEv)
    if (shEv.isDefaultPrevented() || hdEv.isDefaultPrevented()) return
    var tg = $(sel)

    this.actvt(q.___('li'), $ul)
    this.actvt(tg, tg.__(), function(){
        prev.tr({
            type: 'hidden.bs.tab',
            relTg: q[0]
        })
        q.tr({
            type: 'shown.bs.tab',
            relTg: prev[0]
        })
    })
}

Tab.prototype.actvt = function (q, ct, fn) {
    var act    = ct.fi('> .active'),
        trnstn = fn
        && $.support.transition
        && (
            ( _.z(act)  && act.hK('fade')) ||
            !!_.z(ct.fi('> .fade'))
            )

    function next(){

        act.rK('active')
            .fi('> .dropdown-menu > .active').rK('active')
            .end().fi('[data-toggle="tab"]')
            .at('aria-expanded', false)

        q.K('active')
            .fi('[data-toggle="tab"]')
            .at('aria-expanded', true)
        if (trnstn){
            q[0].offsetWidth // reflow for transition
            q.K('in')
        }
        else {
            q.rK('fade')}

        if (_.z(q.__('.dropdown-menu')) ){
            q.___('li.dropdown')
                .K('active').end()
                .fi('[data-toggle="tab"]')
                .at('aria-expanded', true)
        }
        fn && fn()
    }

    _.z(act) && trnstn?
        act.one('bsTransitionEnd', next)
            .emulateTransitionEnd(Tab.TRANSITION_DURATION) :

        next()

    act.rK('in')
}

function Plugin(op){
    return this.ea(function(){
        var e=this, q = $(e),

            d=q.da('bs.tab')

        if (!d) {q.d('bs.tab', (d = new Tab(e)))}

        if(S(op)){d[op]()}
    })
}


var old = $.fn.tab

$.fn.tab = Plugin
$.fn.tab.Constructor = Tab
var clickHandler = function (e) {e.preventDefault(); Plugin.call($(this), 'show')}
$(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)
