$l('jquiCore')
$.fn.dgb= $.fn.draggable
$.fn.dpb = $.fn.droppable
$.fn.zLite=function(type, icon) {var e=this
    icon = icon? icon: (type === 'highlight')?
        'ui-icon-info': 'ui-icon-alert'

    return e.each(function(){var d
        $(this).K('ui-widget')
        d=$.d([$.sp().K("ui-icon '+icon+'").css({float:'left', 'margin-right':'3em'}),
            $(this).text() ])
        d.K('ui-state-'+type+'ui-corner-all').css({padding:'0 .7em'})
        $(this).html(d) })
}

$.fn.error=function(){this.zLite('error')}

$.fn.highlight=function(){this.zLite('highlight')}

$.fn.ef= $.fn.effect

$.fn.dgb = $.fn.dgg = $.fn.draggable

$.fn.dpb = $.fn.droppable

$.fn.gg= $.fn.toggle

$.fn.hd= function(ef, o, ms){
    if(ef=='sl'){ef='slide'}
    if(o.d){
        if(o.d=='l'){o.d='left'}
        if(o.d=='r'){o.d='right'}
        if(o.d=='up'){o.d='up'}
        if(o.d=='down'){o.d='down'}
        o.direction = o.d }
    return this.hide(ef,o,ms)
}

$.fn.sh= function(ef, o, ms){
    if(ef=='sl'){ef='slide'}
    if(o.d){
        if(o.d=='l'){o.d='left'}
        if(o.d=='r'){o.d='right'}
        if(o.d=='u'){o.d='up'}
        if(o.d=='d'){o.d='down'}
        o.direction = o.d}
    return this.show(ef, o, ms)
}

$.fn.ps= $.fn.position
$.fn.tIx=function(a,b){
    a= this.at('tabindex', a)
    if(b){a.v(b)}
    return a
}

$.fn.dtp= $.fn.datepicker // CSS Framework
//   list of the class names
// used by jQuery UI.
//
// The classes are designed to
// create a visual consistency
// across an application
// and allow components
// to be themeable by jQuery UI ThemeRoller.
// The class names are split
// between ui.core.css and ui.theme.css,
// depending on whether styles are
// fixed and structural, or themeable
// (colors, fonts, backgrounds, etc) respectively.
//jqAnim:
$.fn.st= $.fn.stop
$.fn.f2= $.fn.fadeTo

jqAnim()
toFront()
function jqAnim(){
    ANob = {
        B: 'bottom', L: 'left', R: 'right', T: 'top',
        b: 'borderWidth', bb: 'borderBottomWidth',
        bl: 'borderLeftWidth', br: 'borderRightWidth',
        bt: 'borderTopWidth', bs: 'borderSpacing',
        C: 'backgroundColor', f: 'fontSize', h: 'height', w: 'width', H: 'maxHeight', W: 'maxWidth',
        mh: 'minHeight', mw: 'minWidth',
        i: 'textIndent', l: 'letterSpacing', lh: ' lineHeight',
        m: ' margin', mb: 'marginBottom', ml: 'marginLeft', mr: 'marginRight',
        mt: 'marginTop', o: ' outlineWidth',
        p: ' padding', pb: 'paddingBottom',
        pl: 'paddingLeft', pr: 'paddingRight', pt: 'paddingTop',
        ws: ' wordSpacing', x: 'backgroundPositionX', y: 'backgroundPositionY'

    }

    $.fn.an = $.fn.a = function (a, b, c, d) {
        var g = G(arguments), o
        o = g.f
        var q = this
        if (O(a)) {
            if (a.c) {
                a.color = oO('c', a.c)
            }
            if (a.C) {
                a.backgroundColor = oO('c', a.C)
            }
        }
        q.animate(a, b, c, d)
        return q


        if (o.C) {//$l(o.C+'-->');
            o.C = oO('c', o.C);
            //$l(o.C)
        }
        _.e(o, function (v, k) {
            if (ANob[k]) {
                o[ANob[k]] = v
            }
        })
        if (N(g.s)) {
            g.s *= 1000
        }
        _p = o
        this.an(o, g.s, g.t, g[3], g[4])
        return this

        $.an = $.j = function () {
            var bd = $.bd();
            return bd.j.apply(bd, G(arguments))
        }

    }
    an = function (q, a) {
        alert('an')
        if (q.han) {
            _.xI(q.han)
        }
        if (a.u) {
            q.bi(a.u)
        }
        if (a.n > 1) {
            q.han = _.sI(function () {
                a.c++
                if (!a.l && a.c > a.n) {
                    _.xI(q.han);
                    q.han = false
                }
                else {
                    a.c %= a.n
                }
                q.sFr(a)
            }, a.r)
        }
    }
    $.aF = $.anFr = $.anf = function (n, w) {
        var c = 0;
        n = n || 10;
        w = w || 20;
        $.ev(function () {
            q.sFr(c, w)
            c = (c + 1) % n
        })
    }
    $.notAn = function (a) { // sel
        return a.filter(':not(:animated)')
    }
    $.fn.bgImg = $.backgroundImage

    $.fn.gFr = $.fn.getFrame
    $.fn.sFr = $.fn.setFrame
    $.fn.anFr = $.fn.animateFrames
    $.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
    $.fn.qu = $.fn.queue
    $.fn.dq = $.fn.dqu = $.fn.dequeue

}


function toFront(){
    $.fn.bdC=function(a){return this.css("border-color", oO('c', a||'r'))}
    $.fn.pdB=function(a){return this.css("padding-bottom", a||0 )}
    $.fn.mgT=function(a){return this.css("margin-top", a||0 )}
    $.fn.pad=function(a){return this.css("padding", a||0 )}
}

//alert:
anim=function(o){o=o||{}
    alert('anim')
    return {u:o.u||'chicks', n:o.n||1, w:o.w||64, r:o.r||60, c:o.c||0, l:o.l||false}
}