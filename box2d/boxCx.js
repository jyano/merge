b2d.p()
cx.w = function () {
	var cx = this, g = G(arguments)
	// (k/o)  : (k/o,  fn)  //  (k/o,  k1/o)  :   (k/o,k1/o, fn)
	//if you have a second pam,, but its not a function
	cx.ic = function () {
		var cx = this, g = G(arguments)
		/* protosig
		 //     str    :  str,fn   :   obj   :   obj,fn
		
		 w.b(function(cx){
		 cx.ic(fisherman1, function(fish){this.eat(fish.B( ))  })
		 var oneWasFisherman1 = cx.ic(fisherman1); if(oneWasFisherman1){$l('the fish is: '+Fisherman1[1])}
		 cx.ic('fish', function(fisherman){  this.swimTo( fisherman.B( ))  })
		 var oneWasFish = cx.ic('fish'); if(oneWasFish){$l('the fish is: '+oneWasFish[0])}
		 })
		 */
		if (F(g.s)) {
			if (cx.A().of(g.f)) {
				_.b(g.s, cx.A())(cx.B(), cx)
			}
			else if (cx.B().of(g.f)) {
				_.b(g.s, cx.B())(cx.A(), cx)
			}
			return cx
		}
		//if this fixture 'of' that string(kind),fixt,or body
		//if so always passed back an array with the first mentioned selector in the [0] pos
		return cx.A().of(g.f) ? [cx.A(), cx.B()] :
				cx.B().of(g.f) ? [cx.B(), cx.A()] :
						false
		//if fixA is 'of' k, then run fn with fixA as 'this' and pass in fixB, cx
	}
	cx.bw = function () {
		var cx = this, g = G(arguments), // bw(k,k1)  or  bw(k,k1,fn)
				a = cx.A(), b = cx.B()
		if (F(g.t)) {
			if (a.of(g.f) && b.of(g.s)) {
				g.t.apply(a, [b, cx])
			}
			else if (b.of(g.f) && a.of(g.s)) {
				g.t.apply(b, [a, cx])
			}
			return cx
		}
		return cx.A().of(g.f) && cx.B().of(g.s) ? [cx.A(), cx.B(), cx] : cx.B().of(g.f) && cx.A().of(g.s) ? [cx.B(), cx.A(), cx] : false
	}
	return g.s && !F(g.s) ?
			cx.bw(g.f, g.s, g.t) :
			cx.ic(g.f, g.s)
}
cx.m = function () {
	var cx = this, m = new b2d.Collision.b2WorldManifold
	cx.GetWorldManifold(m);
	return m
}
cx.pX = function () {
	return parseInt(this.m().m_points[0].m().x)
}
cx.pY = function () {
	return parseInt(this.m().m_points[0].m().y)
}
cx.pt = cx.cen = function () {
	return V(this.pX(), this.pY())
}
cx.lP = function (b) {
	return b.lP(this.pX(), this.pY())
}
cx.n = function (n) {
	return this.m().m_normal.toFixed(2).m(N(n, 1))
}
cx.nX = function (n) {
	return this.n(n).x
}
cx.nY = function (n) {
	return this.n(n).y
}
cx.t = function () {
}//what about tangent?
//presolve
cx.e = cx.en = function (a) {
	var cx = this
	if (U(a)) {
		return cx.IsEnabled()
	}
	cx.SetEnabled(a ? true : false);
	return cx
}
cx.c = cx.cont = cx.continuous = cx.iC = function () {
	var cx = this
	return cx.IsContinuous()
} //Does this contact generate TOI events for continuous simulation
cx.iS = cx.s = cx.sen = function () {
	var cx = this, g = G(arguments)
	if (g.u) {
		return cx.IsSensor()
	}
	cx.SetSensor(g.f ? true : false)
	return cx
}
cx.iT = cx.tch = cx.touching = cx.iT = function () {
	return this.IsTouching()
}
cx.N = function () {
	return this.GetNext()
}
cx.ty = cx.T = function () {
	return this.GetManifold().m_type
}
cx.A = function () {
	return this.GetFixtureA()
};
cx.B = function () {
	return this.GetFixtureB()
}
cx.a = function () {
	return this.A().B()
};
cx.b = function () {
	return this.B().B()
}

