



//alert
circ=function(v,r,n){var a,pX,pY
    alert('circ')
    n=N(n,20)
    a=2*M.PI/n
    arr = []
    _.t(n, function (i) {
        pX=v.x+r * M.c(a * i)
        pY=v.y+r * M.s(a * i)
        arr.push(V(pX, pY))})
    return arr
}
f.killIfSmall = function (f) {
    alert('f.killIfSmall')
    var area = this.area()
    if (area < 20) {
        $l('too small: ' + area)
        f.kill()
    }
}
//b2d.iB=b2d.isBody



//f.wVerts=f.V=
//give world verts of fixt rotated (or optionally, not rotated for some reason)

//return this.union()
//it used to just get from the FIRST fixt,
//but now it unions them all together :)
//b.verts = function(){ return this.fixt().verts() }


//my poly operations can only work with POSITIVE vertices
//but box2d needs fixt vertices specified relative to a body
//so this allows the body that the operation was based on to take responsibility
//for converting them back
//you can pass in the verts, or the gPoly itself!
old = function () {

    b2d.fixtPamsx = function (o) {
        o = o || {}
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.a = _.tN(o.a)
        o.r = _.tN(o.r, 40)
        o.w = _.tN(o.w, 50)
        o.h = _.tN(o.h, o.w || 100)
        o.d = _.tN(o.d, 0.5)
        o.b = _.tN(o.b, 0.5)
        o.f = _.tN(o.f, 0.5)
        o.s = D(o.s) ? o.s : 0
        o.o = _.tN(o.o, 1)
        o.q = D(q) ? o.q : true
        return o
    }
    difOld = function () {
        b.difx = function () {
            var b = this, g = G(arguments),
            //subtract something from ONLY my FIRST fixt
                p = b2d.d(b, g[0]).rel(b);
            //return the result
            if (g.n) {
                return p
            }
            //or add the new fixture on
            //by default, first clearing it empty
            if (g.P) {
                b.clear()
            }
            b.pol(p)
            return b
        }
        b.DIFFx = function (b2) {
            var b = this, g = G(arguments),
                f = b.f()

            b2d.sep(b,

                _.m(
                    M.p(b).difference(M.p(g[0])).vs(),
                    function (v) {
                        return V(v[0] - b.X(), v[1] - b.Y())
                    })
            )


            f.kill()

            b.rot(0)

            if (g.n) {
                g[0].kill()
            }

            return b

        }
        b.dffx = function (b2) {
            var b = this

            return M.p(b).difference(M.p(b2))
        }
    }



    b.polx = b.polyx = function me() {
        var b = this, w = b.W(), g = G(arguments), v, h, f, fd, n, fs, h, mult, o

        /*
         if( A(g[0]) || S(g[0]) ){
         if(!g.length>2){return me.apply(b,g)}
         o= S(g[0]) ?
         { c:g[0], v:_.r(g) }
         :
         {c :'p', v:g}
         if (S(_.l(o.V))) {o.k= o.v.pop()}
         f = b.f(  b2d.pol.apply(null, o.v)   )
         if (o.k) {f.K(o.k)}
         if (o.c) {f.bS(w.s.poly(o.v, o.c, o.c))}
         return f
         }*/


        o = g[0] || {}
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.a = _.tN(o.a)
        o.r = _.tN(o.r, 40)
        o.w = _.tN(o.w, 50)
        o.h = _.tN(o.h, o.w || 100)
        o.d = _.tN(o.d, 0.5)
        o.b = _.tN(o.b, 0.5)
        o.f = _.tN(o.f, 0.5)
        o.s = D(o.s) ? o.s : 0
        o.o = _.tN(o.o, 1)
        o.q = D(q) ? o.q : true
        if (o.X) {
            b.clear()
        }

        if (o.q == false) {
            h = new b2d.PolygonShape()
            v = _.m(o.v, b2d.div)
            h.SetAsArray(v, v.length)
            fd = new b2d.Dynamics.b2FixtureDef()
            fd.shape = h
            fd.den(o.d).rest(o.b).fric(o.f)
            f = b.f(fd)
            if (o.k) {
                f.K(o.k)
            }
            if (o.C) {
                f.C(o.C)
            }
            return f
        }


        n = b.num()

        if (O(o.v[0][0])) {
            _.e(o.v, function (v) {
                b2d.sep(b, v)
            })
        }
        else {
            b2d.sep(b, o.v);
            o.v = [o.v]
        }

        fs = _.f(b.fs(), b.num() - n)
        _.e(fs, function (f) {
            f.d(o.d).r(o.b).fr(o.f)
            f.m_isSensor = o.s ? true : false
            if (o.k) {
                f.K(o.k)
            }
            if (o.c) {
                f.C(o.c, o.C, o.l)
            }
            if (o.lf) {
                f.bS(w.s.h().lf(o).lt(o.v))
            }
            if (o.rf) {
                f.bS(
                    //w.s.h().c(o).lt(o.v) // w.s.h().pol(o)
                    w.s.h().rf(o).lt(o.v)
                )
            }
        })
        if (o.bm) {
            b.bS(w.s.h().bmV(o))
        }
        return fs.length > 1 ? fs : fs[0]
    }

    b.sep = function () {//b.fig=b.con=

        var b = this,
            g = G(arguments),
            V = g[0],
            n = b.num(),
            c,
            o,
            newFs

        if (U(g[0])) {
            return b
        }

        if (A(g[0])) {
            if (S(g[0][0])) {
                c = g[0].shift()
            }
            o = {v: g[0], c: c}
        }

        else o = g[0]
        o.c = o.c || 'o'
        if (g.n) {
            b.clear()
        }
        b2d.sep(b, o.v)
        newFs = _.f(b.fs(), b.num() - n)
        _.e(newFs, function (f) {
            f.C(o.c)
            if (o.s) {
                f.sen(1)
            }
        })
        return b
    }


    b.conc2 = function (col) {


        var g = G(arguments), col = g[0], verts,
            b = this, fs, n1, n2, newFixts

        if (U(col)) {
            return
        }
        verts = S(col) ? _.rest(g) : g

        if (g.n) {
            b.clear()
        }
        n1 = b.num()

        b2d.sep(b, verts)


        if (S(col)) {
            n2 = b.num()
            fs = b.fs()
            newFixts = _.first(fs, n2 - n1)
            _.each(newFixts, function (f) {
                f.C(col)
            })
        }

        return this
    }


}
//union of 2 non overlapping fixtures,
// can just result in a body with two fixtures..
// yea, why are unions not just creating bodies with all the fixtures?
// no need combine two fixtures into one, right???!
//b.dif(o ) is shortcut for: b2d.d(b,o).rel(b)