

muggy()
function muggy(){

    cv.drawMug = cv.me = function me(interval){
        //randomly draw my face

        var that = this, g=G(arguments), args= g,

            interval = args[0] || 200

        if(that.drawMug.shouldDrawId){

            clearInterval(that.drawMug.shouldDrawId)

            that.drawMug.shouldDrawId = false}

        else{

            that.drawMug.shouldDrawId =  setInterval(function(){

                that.draw(  window['mug']||'me',  _.random( that.W()-200 ),  _.random( that.W()-200 )  )

            }, interval)}

        return this}
    cv.drawMug.shouldDrawId = false
    cv.fitMug = cv.mug= function(user){var that=this

        $.post('/mug', { u: user },  function(userMug){  that.fit(userMug)  })
        return this
    }



}
function beta(){
    cv.sun = function (a, b, s) {

        s = s || 1;

        this.rG(
            [[a || 0, b || a || 0], s * 100, s * 500],

            {'y': 0, 1: tCl('p', 0)},

            600,

            600
        )


    }
    cv.paperBag = function (x, y, width, height, blowX, blowY) {
        x = x || 100
        y = y || 100
        width = width || 100
        height = height || 100
        blowX = blowX || 100
        blowY = blowY || 100

        var lx, ly;

        this.ctx().strokeStyle = 'Red'
        this.ctx().beginPath();
        this.ctx().moveTo(x, y);

        this.ctx().quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
        this.ctx().quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
        this.ctx().quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
        this.ctx().quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);

        return this

    }
}

function alpha() {

    TXC = function () {
        $.C()


        c.dr('me')

        c.paperBag()


    } //uses paper bag! ?
}
old=function(){


    cv.ball=function(b){b=b||{}

        var dir = b.d||false,

            px  = b.x||100, py  = b.y||100, rad = b.r||100,

            per = b.p||Math.PI* 2,

            ss = $r('c', b.s) ,
            fs = $r('c', b.f),
            lw = D(b.l)? b.l: 4

        return x.com('b',['a',px,py,rad,0,per,dir], {f:fs,s:ss,w:lw},'f','s')
    }


}
