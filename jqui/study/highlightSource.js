var effectHighlight = $.effects.effect.highlight = function( o, done ) {
    var elem,props,mode,animation


    elem = $( this )


    props = [ "backgroundImage", "backgroundColor", "opacity" ]

    mode = $.effects.setMode( elem, o.mode || "show" )

    animation = {
        backgroundColor: elem.css( "backgroundColor" )
    }


    if (mode === "hide") {animation.opacity = 0}

    $.effects.save( elem, props )

    elem.show().css({
        backgroundImage: "none",
        backgroundColor: o.color || "#ffff99"
    }).animate(
        animation, {
            queue: false, duration: o.duration, easing: o.easing,
            complete: function() {if ( mode === "hide" ) {elem.hide()}
                $.effects.restore( elem, props );done()}
        })

}

