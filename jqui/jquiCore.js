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
$.fn.hd= function(ef, o, ms){
    if(ef=='sl'){
        ef='slide'}
    if(o&&o.d){
        if(o.d=='l'){o.d='left'}
        if(o.d=='r'){o.d='right'}
        if(o.d=='up'){o.d='up'}
        if(o.d=='down'){o.d='down'}
        o.direction = o.d
    }
    return this.hide(ef,o,ms)
}
$.fn.sh= function(ef, o, ms){
    if(ef=='sl'){ef='slide'}
    if(o&&o.d){
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
$.fn.fI= $.fn.fadeIn
$.fn.wid= $.fn.widget
$.wg = $.wid=  $.widget
