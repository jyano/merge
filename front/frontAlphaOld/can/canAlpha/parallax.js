
CanvasLayer=function(bg){

    c = $.c('y',500,500).P('a').W('100%').H(256)
    if(bg){c.bg(bg)}
    return c
}

DivLayer=function(bg){
    d = $.d('y',500,500).P('a').W('100%').H(256)
    if(bg){d.bg(bg)}
    return d
}



transparent=function(i, num){
    if(!N(num)){ return 'transparent url('+i+'.png)'  }
    return 'transparent url('+ i +'.png)' + num +'% 0px'
}


PARALLAX=function(){z()
    CanvasLayer( transparent('me', 10))
    CanvasLayer( transparent('guy', 300))
}

//awesome!!!!!
PARALLAXBYMOUSE=function(){z()

    back=DivLayer(transparent('me') )
    front=DivLayer(transparent('guy'))

    speed=0
    xp=0

    $('body').mousemove(function(e){

        speed= e.pageX - ( W()/2 )

        speed /= ( W()/2 )

        $l(speed)
    })
    $('body').mouseout(function(e){speed=0})


    setInterval(function(){
        xp += speed
        back.bgP( xp+'px 0px')
        front.bgP( (xp*3)+'px 0px')
    },30)}

 