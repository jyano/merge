b2d.p();
w.eachTick = w.eT = function (fn) {
	var w = this
	T.t(function () {
		w.e(fn)
	})
	return w
}

//////

function ex() {//  The easiest approach to utilize the controllers
// is to create sensor fixtures
// that test when a begin/end  event has occurred with a body.
// In the beginContact method, add the body to the controller.
// In the endContact method, remove the body.
	b = w.D(300, 300, 'b', 50, 60)
	T.t(function () {
		b.F(10, 10)
	}) //.zF(10,10)// <--MUST WRITE
	co = w.aCo(-5, -5)
// Imagine that you have gusts of wind blowing sideways…
// you can add your objects to a Contoller and have them pushed sideways…
// then when the wind passes you could remove them from that controller.
// now just add and remove bodies to the controller!!
//pass 1 or more controllers, and it will get them goin'
//CHANGESCONTROLLERBASEDONSENSORBRILLIANT=
//gives u a controller-edge, which is a body-controller pair
//it is linked both to other bodies for that controller..
//and to other controllers of that body!!!
//lets focus on other bodies first....
};
b2d.Co = b2d.Dynamics.Controllers



w.addCo = w.coA= w.co = function () {
	G(arguments).e(add); return this
	function add(co) {w.AddController(co)}
}
co._B = co._A = function (b) {
	if(b&&!b.by(this)){this.AddBody(b2d.tB(b))}
	return this}
co._xB=function(ob){if(ob){this.xB(b2d.tB(ob))}
	return this}
co.addBod = co.bod = co.B = function () {var co=this, g = G(arguments)
	if (g.n) {co._xB(g.f)}
	else {g.e(function (b) {co._B(b)})}
	return co
}
co._gBL=function(){return this.GetBodyList()}
co.getBods = co.bods = co.b = co.bs = function (fn) {var co = this, g = G(arguments),
		bs=[], b = co._gBL()
		if(g.p){ b = b.body }
	if (b) {bs.push(b.body)
		while (b.nextBody) { b = b.nextBody;  bs.push(b.body) }}
	if (fn) {_.e(bs, fn); return this}
	return bs
}
co.rmB= co.xB = function () {var g = G(arguments),
		b = g[0]
	if (g.u) {
		if (g.n) {this.xB(_.l(this.bs()))}
		else if (g.p) {this.xB(_.f(this.bs()))}
		return this
	}
	if (!this.b()) {return this}
	if (b) {if (b2d.tB(b).by(this)) {
			if (b2d.tB(b).by(co)) {this.RemoveBody(b2d.tB(b))}
		}
	}
	else {this.bs(function (b) {this.xB(b)})}
	return this
}
co.numBods = co.n = function () {var co=this,
		b = co.GetBodyList(), 
		n = 0
	if (b) {n++; while (b.nextBody) {n++; b=b.nextBody}}
	return n

}
co.contsBod =co.by =  function (b) {var co=this
	return b && _.ct( co.getBods(), b )
}
co.step = function () {alert('co.step'); this.step(); return this }
co.do = function (b) {if (b) {b.do(this); return b}}
co.nxt = co.N = function () {
	return this.GetNext()
}
co.getWor = co.W = function () {
	return this.GetWorld()
}

cx.bCo = function (k) {
	var cx = this, g = G(arguments), f
	//if  fxt collides w sp 'switch-ty' to the cont with that name
	g.e(function (k) {
		cx.w(k, function () {
			this.to(window[k])
		})
	})
}
w.bindCo = function () {
	return this.b(function (cx) {
		cx.bCo.apply(cx, G(arguments))
	})
}  
