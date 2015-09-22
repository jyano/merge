

FULLCAN=function(){z()
    $h().s({h:'100%',of:'h'})()
    $b().s({m:0, g:0,h:'100%'})()

    var s='Click or tap the screen to start the game',
        fo='bold 16px Arial',
        x=cx('x',
            W(), H())


    x.fs(x.lg().a(0,'y').a(1,'z')).fr().fs('y').fo(fo).ftc(s, 30).a()



    im('me',function(i){var i=qq(i),origW=i.w() ,ig

        i.w($M.round((50*cW())/100))
        i.h($M.round((i.w()*i.h())/ origW) )

        ig={i:i, x:x.w()/2-i.w()/2,
            y:x.h()/2-i.h()/2 }

        x.d(ig.i, ig.x, ig.y)



    })



}
$.imageSizeFuncCan = function(image, size, func){//xc=
    var x = $.c(100, 100).C('X')
    if(image){ x.fit(image) }
    //if(size){  x.Z(size) }
    if(func){  x.click(func) }
    return x
}

//can.ln(tictactoe)
    tictactoe = [
        [[200, 0], [200, 600]],
        [[400, 0], [400, 600]],
        [[0, 200], [600, 200]],
        [[0, 400], [600, 400]]
    ]
    sh1 = [[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]]
    sh2 = [[[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]], [[8, 13], [12, 13]], [[9, 14], [9, 18]], [[10, 14], [10, 18]]]


    drag = drg = function (element) {
        var q = $b(qq(element).q).css({position: 'absolute'}).on('mousedown', function (e) {
            var offset = $(this).offset(),
                deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top
            $('html').on('mousemove', function (e) {
                q.css({left: e.pageX - deltaX, top: e.pageY - deltaY})
            })
                .on('mouseup', function () {
                    $(this).off()
                })

        })

        touchDrg(element)
        return qq(element)

    }
    $.joystick = function () {
        $('#left').on('mousedown mouseover touchenter', function (e) {
            cjs.Keys.left = true;
            e.preventDefault()
        })
        $('#left').on('mouseup mouseout touchleave', function () {
            cjs.Keys.left = false
        })
        $('#jump').on('mousedown mouseover touchenter', function () {
            cjs.Keys.up = true
        })
        $('#jump').on('mouseup mouseout touchleave', function () {
            cjs.Keys.up = false
        })
        $('#right').on('mousedown mouseover touchenter', function () {
            cjs.Keys.right = true
        })
        $('#right').on('mouseup mouseout touchleave', function () {
            cjs.Keys.right = false
        })
    }
    testHideOnKeyDown = function () {
        z()
        c = $.canvas('r', 500).A()
        c.hideOnKeyDown()
    }
}