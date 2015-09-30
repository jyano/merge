


CUT=function(c){
    c.i()
    c.j()
    c.$(function(x,y){c.pp(x,y)})
    c.$$(function(x,y){c.cut()})
    $P=[]}


cutty=function(){
//good **** //extend path//restroke to show new seg
//add new pt to arr  //p gets set to FIRST pt

    //p=cl=0

    vx=[]

    c=C(400,'b')

        c.pp()({ss:'y',lw:4}).P()

    im('me',function(i){
        c.df(i)
        c.c()})

    c.$(function(x,y){
        if(cl==true){clip()}
        else{c.k(x,y).k()
            vx.push([x,y]);
            if(!p){p=[x,y]}
            else if(x<p[0]&&y<p[1]){
                cl=true}}})

    clip=function(){
        var f=_.f(vx), v=_.rs(vx)
        c._()
        c.P().k(f[0],f[1])
        _e(v,function(v){c.k(v[0],v[1])})
        x.P(0)
        x.P('!')
        x.p()}


    dst=function(a,b,c,d){
        var q=function(a){return a*a}
        return $M.q(q(a-c)+q(b-d))}

 makeDot=function(X,Y){o.dc(x,X,Y)
    Dots.push({x:X,y:Y})}
    //sy(c,'white','black',3);


o={}

    x.pp=function(a,b){return o.x.isPointInPath(a,b)}

    x.makeDot2=function(x,y){
        this.dc(x,y)
        $P.push({x:x, y:y})}

        //sy(c,'white','black',3);


    x.clPth=function(c,p){
    p1=p.shift()
    x('m',  p1.x, p1.y)
    _e(p, function(p){
        x.('l', p.x, p.y)
        x.('c')
          p=[]}) }

    x.cut=function(){
    return o.X().clPath()
        .copy().paste().Im()}}

ppa=makeDot=function(X,Y){dc(x,X,Y)
    Dots.push({x:X, y:Y} )} //sy(c,'white','black',3);


cut=function(){
    x('m', p1.x, p1.y)
    _e(p, function(p){x('l',p.x, p.y)})
    x('c')
    p=[] //o('f')?
    return X().clPath().copy().paste().Im() }


    // i have a clipping region AROUND the face; before, i set the clip region, i should copy the whole image,
    // then make the whole thing transparent
    //then clip; then redraw the image


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