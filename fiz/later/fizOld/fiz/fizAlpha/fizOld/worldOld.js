

b.pols=function(b1){var b=this
    b1.fs(b)
    return b}


// eh
b2d.F = function (k) {
    var arr = []
    w.e(function (b) {

        b.fs(function (f) {
            if (f.is(k)) {
                arr.push(f)
            }
        })
    })
    return arr
}
b2d.B = function (k) {
    var arr = []
    w.e(function (b) {
        if (b.is(k)) {
            arr.push(b)
        }
    })
    return arr
}
//

b.Lxx= function(vx, vy, damp){var b=this
    if(U(vx)){b.lV(0,0).lD(0)}
    else {
        b.vX(vx)
        if(N(vy)){b.vY(vy)}
        if(N(damp)){b.lD(damp)}}
    return b}


//bodyDef.bullet = true; //before creating body, or
//body.SetBullet(true); //after creating body

//b.setDestroy=function(){ return this.K('destroy') }; b.setDestroyIf=function(data){if(this.is(data)){this.setDestroy()}}

//b2d.H=   b2d.shape    =function(){var g=G(arguments); return g[1]? b2d.pH(g) :b2d.cH(g[0])}


w.dynx=w.bodyx=w.Ax=function(x, y, fD){var w=this, b,bd

    //pass body def
    if(b2d.isBDef(x)){bd=x; fD=y}

    //make body def
    else {
        if(O(x)){fD=y; y=x.y; x=x.x}

        x= _.tN(x, w.hW)
        y= _.tN(y, w.hH)

        bd=b2d.dyn(x,y)}

    b = w.CreateBody(bd)

    // pass in one fixture or an ARRAY( of fixts )
    if(fD){b.fixt(fD)}
    return b}




//w.K=function(){return this.B.apply(this,arguments).kin()}

w.vertsx= function(x,y,  arrs ){var w=this

    var bod = w.dyn(x, y)

    _.e(arrs, function(f){
// bod.convex( arr[0],  _.rest(arr)  )
        //  bod.convex( fixt )

        bod.convex.apply(bod, f)

    })

    return bod
}


w.vertsKinx= function(x, y, arrs){

    var bod = this.kin(x,y)

    _.each(arrs, function(arr){
        bod.convex(arr[0],  _.rest(arr))
    })

    return bod}

/*
 A joint edge:
 -connects bodies and joints together in a joint graph
 (each body is a node and each joint is an edge)

 -belongs to a doubly linked list maintained in each attached body
 (Each joint has two joint nodes, one for each attached body)


 //these are all obj refs, not functions

 .joint
 .other(other body)
 .prev(b2JointEdge):the previous joint edge in the body's joint list
 .next(b2JointEdge):the next joint edge in the body's joint list
 */
b.DNotUsedYet=function(c){var b=this,w= b.W(),

    b1= w.D(b.X(),b.Y())
    return b1

}

//f.or = function(){return this.body().wor()}

old = function () {
    MAKEWALLS = function () {
        makeWalls2 = [
            [10, 300, 20, 460],
            [990, 300, 20, 460],
            [250, 0, 400, 20],
            [730, 0, 400, 20],
            [250, 590, 400, 20],
            [730, 590, 400, 20]
        ] //bas in the canvas size?
        makeWallsTiny = [
            [10, 300, 20, 600],
            [990, 300, 20, 600],
            [300, 0, 1200, 20],
            [300, 590, 1200, 20]
        ]
        makeWallsFull = [
            [10, 300, 20, 1200],
            [990, 300, 20, 1200],
            [300, 0, 3000, 20],
            [300, 590, 3000, 20]
        ]
        makeWallsLong = [
            [10, 300, 20, 1200],
            [1600, 300, 20, 1200],
            [300, 0, 3000, 20],
            [300, 590, 3000, 20]
        ]
    }
}


////////////////////////////////////////////////
w.dbX = function () {
    var w = this

    w.line(0, 0, w.W(), w.H(), '+')

    w.line(0, w.W(), w.H(), 0, '+')

    if (N(w.w) && N(w.h)) {
        w.line(0, 0, w.w, w.h)
        w.line(0, w.W(), w.H(), 0)
    }
}


w.rWx = function (col, h) {
    var w = this
    if (!S(col)) {
        h = col;
        col = 'b'
    }
    h = N(h) ? h : w.H()
    return w.S(10, w.H() - (h), col, 20, h)
}
w.bWx = function (col, W) {
    var w = this
    if (!S(col)) {
        W = col;
        col = 'b'
    }
    W = N(W) ? W : w.W()
    return w.S((W / 2), w.H() + (h / 2) - 10, col, W, 20)
}
w.hWx = function (col, W, x, y) {
    var w = this, g = G(arguments), cW = w.canvas.width, cH = w.canvas.height

    if (!S(col)) {
        y = x;
        x = W;
        W = col;
        col = 'x'
    }

    if (U(y)) {
        y = x;
        x = null
    }
    W = (W == '+') ? cW : N(W) ? W : cW / 3
    x = N(x) ? x : cW / 2 - W / 2
    y = (y == '+') ? cH - 10 : (y == '-') ? 10 : N(y) ? y : cH / 2
    y -= 10
    return w.R(col, W, 20, x, y).bo(.2).K('wall')     //default bo?
}

w.boxWallsx = w.xWx = function (col, W, h) {
    var w = this

    if (!S(col)) {
        h = W;
        W = col;
        col = 'o'
    }
    W = N(W) ? W : w.W()
    h = N(h) ? h : w.H()
    w.floor = w.R(col, W, 20, 0, h - 20)
    w.right = w.R(col, 20, h, W - 20, 0)
    w.roof = w.R(col, W, 20, 0, 0)
    w.left = w.R(col, 20, h, 0, 0)
    w.w = W
    w.h = h            // if(g.N){ w.camLims(  0,  w.w-w.s.W(),  0, w.h-w.s.H())}

    return w
}
b2d.setupDebugDrawx = setupDebugDrawx = function () {
    debugDraw = DebugDraw()
    debugDraw.SetSprite(w.context)
    debugDraw.dS(30)
    debugDraw.SetFillAlpha(.6)
    //debugDraw.SetLineThickness( 3000 )
    debugDraw.SetFlags(shB || jB)
    w.dD(debugDraw)
}


w.bodyX = w.AX = function (bD, fD) {
    var w = this, b

    if (b2d.isBDef(bD)) {
        b = w.CreateBody(bD)
    }


    if (fD) {
        b.fixt(fD)
    }

    //b.den(1)

    return b
}
w.dynX = w.dynamicX = function (x, y, fD) {
    var w = this, body

    if (O(x)) {
        fD = y;
        y = x.y;
        x = x.x
    }
    x = N(x) ? x : 500
    y = N(y) ? y : 250

    return w.body(b2d.dyn(x, y), fD)
}

