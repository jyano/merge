
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





$.imageSizeFuncCan = function (image, size, func) {//xc=
    var x = $.c(100, 100).C('X')
    if (image) {
        x.fit(image)
    }
    //if(size){  x.Z(size) }
    if (func) {
        x.click(func)
    }
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
designPats = {
    strategy: 'decouple sprites from painters',
    command: 'implement behaviors',
    flyweight: 'rep many sprites with single instance'
}
painter = 'obj that paints sprites with a paint(sprite, x) method'
spriteMethods = {
    paint: 'delegates painting to sprites painter (if it has one, and if it is visible)',
    update: 'executes each of sprites behaviors in order they were added'
}
behavior = 'obj with execute(sprite, x,time) method'
Sprite = function (name, painter, behaviors) {
    var s = {
        name: name,
        painter: painter,
        behaviors: behaviors || []
    }
    s.top = 0
    s.left = 0
    s.w = 0
    s.h = 0
    s.vX = 0
    s.vY = 0
    s.vs = true
    s.animating = false
    s.paint = function (x) {
        if (s.vs && s.painter) {
            s.painter.paint(s, x)
        }
    }
    s.update = function (x, time) {
        _e(behaviors, function (b) {
            b.execute(s, x, time)
        })
    }
    return s
}

function toWeb(){
FALLING = function () {
    s = St(1000).a()
    platHeightMets = 10 //meters
    pixPerMet = s.h() - TOP / platHeightMets
    moveBall = function () {
        exec: function (spr, x, time) {
            spr.top += spr.vY / fps
        }
    }
}
    $.fn.tl = $.fn.trans = function (transform) {
        return this.css({transform: transform})
    }
}

function cropAlt(){
    $(document).ready(function () {
        var condition = 1;
        var points = [];//holds the mousedown points
        var canvas = document.getElementById('myCanvas');
        this.isOldIE = (window.G_vmlCanvasManager);
        $(function () {
            if (document.domain == 'localhost') {
                if (this.isOldIE) {
                    G_vmlCanvasManager.initElement(myCanvas)
                }
                var ctx = canvas.getContext('2d');
                var imageObj = new Image();

                function init() {
                    canvas.addEventListener('mousedown', mouseDown, false);
                    canvas.addEventListener('mouseup', mouseUp, false);
                    canvas.addEventListener('mousemove', mouseMove, false)
                }

                // Draw  image onto the canvas
                imageObj.onload = function () {
                    ctx.drawImage(imageObj, 0, 0);
                }
                imageObj.src = "img.png";
                // Switch the blending mode
                ctx.globalCompositeOperation = 'destination-over';
                //mousemove event
                $('#myCanvas').mousemove(function (e) {
                    if (condition == 1) {
                        ctx.beginPath();
                        $('#posx').html(e.offsetX);
                        $('#posy').html(e.offsetY);
                    }
                });
                //mousedown event
                $('#myCanvas').mousedown(function (e) {
                    if (condition == 1) {
                        if (e.which == 1) {
                            var pointer = $('<span class="spot">').css({
                                'position': 'absolute',
                                'background-color': '#000000',
                                'width': '5px',
                                'height': '5px',
                                'top': e.pageY,
                                'left': e.pageX
                            });
                            //store the points on mousedown
                            points.push(e.pageX, e.pageY);
                            //console.log(points);
                            ctx.globalCompositeOperation = 'destination-out'
                            var oldposx = $('#oldposx').html()
                            var oldposy = $('#oldposy').html()
                            var posx = $('#posx').html()
                            var posy = $('#posy').html()
                            ctx.beginPath();
                            ctx.moveTo(oldposx, oldposy)
                            if (oldposx != '') {
                                ctx.lineTo(posx, posy);
                                ctx.stroke()
                            }
                            $('#oldposx').html(e.offsetX)
                            $('#oldposy').html(e.offsetY)
                        }
                        $(document.body).append(pointer);
                        $('#posx').html(e.offsetX);
                        $('#posy').html(e.offsetY);
                    }//condition
                });
                $('#crop').click(function () {
                    condition = 0;
                    //  var pattern = ctx.createPattern(imageObj, "repeat");
                    //ctx.fillStyle = pattern;
                    $('.spot').each(function () {
                        $(this).remove()
                    })
                    //clear canvas
                    //var context = canvas.getContext("2d");
                    ctx.clearRect(0, 0, 217, 275);
                    ctx.beginPath();
                    ctx.width = 217;
                    ctx.height = 275;
                    ctx.globalCompositeOperation = 'destination-over';
                    //draw the polygon
                    setTimeout(function () {


                        //console.log(points);
                        var offset = $('#myCanvas').offset();
                        //console.log(offset.left,offset.top);
                        for (var i = 0; i < points.length; i += 2) {
                            var x = parseInt(jQuery.trim(points[i]));
                            var y = parseInt(jQuery.trim(points[i + 1]));
                            if (i == 0) {
                                ctx.moveTo(x - offset.left, y - offset.top);
                            } else {
                                ctx.lineTo(x - offset.left, y - offset.top);
                            }
                            //console.log(points[i],points[i+1])
                        }
                        if (this.isOldIE) {
                            ctx.fillStyle = '';
                            ctx.fill();
                            var fill = $('fill', myCanvas).get(0);
                            fill.color = '';
                            fill.src = element.src;
                            fill.type = 'tile';
                            fill.alignShape = false;
                        }
                        else {
                            var pattern = ctx.createPattern(imageObj, "repeat");
                            ctx.fillStyle = pattern;
                            ctx.fill();
                            var dataurl = canvas.toDataURL("image/png");
                            var xhr = new XMLHttpRequest();
                            // // 
                            xhr.open('POST', 'upload.php', false);
                            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                            var files = dataurl;
                            var data = new FormData();
                            var myprod = $("#pid").val();
                            data = 'image=' + files;
                            xhr.send(data);
                            if (xhr.status === 200) {
                                console.log(xhr.responseText);
                                $('#myimg').html('<img src="upload/' + xhr.responseText + '.png"/>');
                            }
                        }
                    }, 20)
                })
            }
        })
    })
}
designPats = {
    strategy: 'decouple sprites from painters',
    command: 'implement behaviors',
    flyweight: 'rep many sprites with single instance'
}
painter = 'obj that paints sprites with a paint(sprite, x) method'
spriteMethods = {
    paint: 'delegates painting to sprites painter (if it has one, and if it is visible)',
    update: 'executes each of sprites behaviors in order they were added'
}
behavior = 'obj with execute(sprite, x,time) method'
Sprite = function (name, painter, behaviors) {
    var s = {
        name: name,
        painter: painter,
        behaviors: behaviors || []
    }
    s.top = 0
    s.left = 0
    s.w = 0
    s.h = 0
    s.vX = 0
    s.vY = 0
    s.vs = true
    s.animating = false
    s.paint = function (x) {
        if (s.vs && s.painter) {
            s.painter.paint(s, x)
        }
    }
    s.update = function (x, time) {
        _e(behaviors, function (b) {
            b.execute(s, x, time)
        })
    }
    return s
}
FALLING = function () {
    s = St(1000).a()
    platHeightMets = 10 //meters
    pixPerMet = s.h() - TOP / platHeightMets
    moveBall = function () {
        exec: function (spr, x, time) {
            spr.top += spr.vY / fps
        }
    }
}
designPats = {
    strategy: 'decouple sprites from painters',
    command: 'implement behaviors',
    flyweight: 'rep many sprites with single instance'
}
painter = 'obj that paints sprites with a paint(sprite, x) method'
spriteMethods = {
    paint: 'delegates painting to sprites painter (if it has one, and if it is visible)',
    update: 'executes each of sprites behaviors in order they were added'
}
behavior = 'obj with execute(sprite, x,time) method'
Sprite = function (name, painter, behaviors) {
    var s = {
        name: name,
        painter: painter,
        behaviors: behaviors || []
    }
    s.top = 0
    s.left = 0
    s.w = 0
    s.h = 0
    s.vX = 0
    s.vY = 0
    s.vs = true
    s.animating = false
    s.paint = function (x) {
        if (s.vs && s.painter) {
            s.painter.paint(s, x)
        }
    }
    s.update = function (x, time) {
        _e(behaviors, function (b) {
            b.execute(s, x, time)
        })
    }
    return s
}
FULLCAN = function () {
    z()
    $h().s({h: '100%', of: 'h'})()
    $b().s({m: 0, g: 0, h: '100%'})()
    var s = 'Click or tap the screen to start the game',
        fo = 'bold 16px Arial',
        x = cx('x',
            W(), H())
    x.fs(x.lg().a(0, 'y').a(1, 'z')).fr().fs('y').fo(fo).ftc(s, 30).a()
    im('me', function (i) {
        var i = qq(i), origW = i.w(), ig
        i.w($M.round((50 * cW()) / 100))
        i.h($M.round((i.w() * i.h()) / origW))
        ig = {
            i: i, x: x.w() / 2 - i.w() / 2,
            y: x.h() / 2 - i.h() / 2
        }
        x.d(ig.i, ig.x, ig.y)
    })
}
$.imageSizeFuncCan = function (image, size, func) {//xc=
    var x = $.c(100, 100).C('X')
    if (image) {
        x.fit(image)
    }
    //if(size){  x.Z(size) }
    if (func) {
        x.click(func)
    }
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
FALLING = function () {
    s = St(1000).a()
    platHeightMets = 10 //meters
    pixPerMet = s.h() - TOP / platHeightMets
    moveBall = function () {
        exec: function (spr, x, time) {
            spr.top += spr.vY / fps
        }
    }
}