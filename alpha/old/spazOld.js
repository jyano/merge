function old() {
    f._vs = function (f) {
        var h = this.H();
        if (h) {
            return h.m_vertices
        }
    }

    f.vs = f.rV = function () {
        var f = this, b = f.B(), g = G(arguments),

            vs = b2d.m(f._vs())
        return b2d.tA(
            g.p ? b2d.rot(vs, b) : vs
        )

    }
}

T.tx=function(){}
b.sp=function(){var b=this, g=G(arguments),o
    b._sp=b._sp||[]
    if(g.u){
        return  b._sp[0]?_.l(b._sp).i:null}
    //if(O(g[0])){
    g.e(function(g){
        b._sp.push(g)
    })
    //}
    return b
}
b.bSx=  function(i,sc,a,x,y){var b=this, w=b.W(),
    g=G(arguments)//b.img=b.bindSprite=
    $l('welcome to b.bS ')
    if(S(i)){
        $l('if(S(i))')
        w.s.bm(i,
            function(bm){
                b.bS('guy')
                b.C('z')
                //b.b({ i:bm,  a:a, sc:sc })
            })
    }
    else {
        $l('else')
        b.bS2.apply(b,g)
    }
    return b
}
THRUSTSCROLL = function(){z()

    // s = cjs.stage('green', 1000).A()

    //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"

    w = b2.mW({grav:0})

    p = w.player('thrust')
    //sp = cjs.sprite( Mummy ).drag()

    // w.s.A( sp )

    // sp.sXY( 2 ).XY( 200 )

    //  sp.gotoAndPlay('walk')


    // sp.rXY( 20, 22 )

    // b = b2.box( 100, 100, 50, 88).uD('mummy')

    // b.bindSprite2(sp)

    direction='right'

    cjs.tick(function(){


        w.eachBody(function(body){
            if(body.uD()!='player'){

                body.X(  body.X()+ p.X()  )

            } })

    })



    tr=w.A( b2.dynamicDef(), b2.triangleFixt    )




    moveLeft=function(){

        w.eachBody(function(body){
            if(body.uD()!='player'){body.X( body.X()+10  )   } })

    }
    moveRight=function(){

        w.eachBody(function(body){
            if(body.uD()!='player'){ body.X( body.X()-10  )   } })

    }
}
moveEachBodyButGuy=function() {

    $.kD('l', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {    body.X(body.X()+20)   }})})


    $.kD('r', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {

                body.X( body.X() - 20)
            }
        })
    })


    $.kD('d', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {
                body.Y(body.Y() - 20)
            }
        })
    })


    $.kD('u', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {
                body.Y(body.Y() + 20)
            }
        })
    })

}
BUTME=function(){

    w = b2d.W({


        grav:0,   walls:[]


    })



    //p = w.player('thrust').XY(500,100)

    w.brick(100,300,200,30).rot(30)
    w.brick(400,200,400,100).rot(30)

    g= w.box(400,300, 30, 30).bindSprite('guy').K('guy')

    moveEachBodyButGuy()

    cjs.tick(function(){
        // w.each(function(b){ b.rot(  b.rot() + 10) })


        g.XY(400,300)

    })



}
BUTMEBETTER=function(){z()



    w = b2.mW({
        grav:0,
        walls:[]
    })


    //p = w.player('thrust').XY(500,100)

    w.bumper(200,200,100)
    w.bumper(600,300,100)

    g= w.box(400,300, 30, 30).bindSprite('guy').K('guy')

    moveEachBodyButGuy()

}