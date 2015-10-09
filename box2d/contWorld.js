b._gCL= b.GetContactList
b.numContacts = b.nCx = function () {
	var n = 0, cx = this.cx()
	if (!cx) {
		return n
	}
	n++
	while (cx.next) {
		n++
		cx = cx.next
	}
	return n
}
b.contacts1 =b.cx = function (fn) {
	var b = this,
			c, next, n, ent, cx
	if (U(fn)) {return b._gCL()}
	cx = b.cx()
	if (!cx) {$l('!b.cx'); return}
	n = 0;
	while (cx = cx.contact) {
		next = cx.GetNext()
		_.b(fn, b)(ent = b.of(cx.a()) ? cx.B() : cx.A(), 
				cx, n++ )
		cx = next
	}
}
b.contacts = b.cxs=function (fn) {
	var cx = this.cx(),
			CXS = []
	if (!cx) {return CXS }
	CXS.push(cx.contact)
	while (cx.next) {
		cx = cx.next; CXS.push(cx.contact)
	}
	if (fn) {
		_.e(CXS, function (cx) { fn(cx) })
		return this }
	
	return CXS
}
b._xCo = function () {
	this.co().controller.xB(this);
	return this
}
b.rmCont = b.rmCo=b.xCo = function (co) {
	var b = this, g = G(arguments),
			co = g[0]
	if (!this.co()) {
		return this
	}
	if (!co) {
		if (g.n) {
			this.xCo(_.l(this.cos()))
		}
		else if (g.p) {
			this.xCo(_.f(this.cos()))
		}
		else {
			this.cos(function (co) {
				b.xCo(co)
			})
		}
	}
	else if (this.by(co)) {
		co.RemoveBody(this)
	}
	return this
}
b.controlledByCont= b.by = function (co) {
	return co.by(this)
	var by = false, coL = this.GetControllerList()
	if (!coL) {
		return false
	}
	if (coL == co) {
		return true
	}
	while (coL.nextController) {
		coL = coL.nextController
		if (coL == co) {
			by = true
		}
	}
	return by
}
b.numConts= b.nCo = function () {
	var n = 0, co = this.GetControllerList()
	if (!co) {
		return n
	}
	n++
	while (co.nextController) {
		n++
		co = b.nextController
	}
	return n
}
b.cont = b.co = function () {
	var g = G(arguments)
	if (g.n) {
		if (g.u) {
			this.xCo()
		}
		else {
			g.f.xB(this)
		}
		return this
	}
	if (g.u) {
		var c = this.GetControllerList()
		return g.p ? c.controller : c
	}
	if (g.F_) {
		r.co('+').bs(function (b) {
			if (!b == this) {
				g.f(b)
			}
		})
	}
	return this
}
b.conts= b.cos = function (fn) {
	var co = this.co(), cos = []

	if (!co) {
		return cos
	}

	cos.push(co.controller)

	while (co.nextController) {
		co = co.nextController
		cos.push(co.controller)
	}
	if (fn) {
		_.e(cos, function (co) {
			fn(co)
		});
		return this
	}

	return cos
}
b.changeCont =b.to = function (co) {
	return this.xCo().co(this)
}
b.contBods= b.bc = function (fn) {var b = this, g = G(arguments),
		origE, e, nextE
	if (g.n) {fn = function (b) {b.kill()}}
	origE = b.cont()
	if (!origE) {return b}
	e = origE.nextBody
	while (e) { nextE = e.nextBody; fn(e.body); e = nextE }
	e = origE.prevBody
	while (e) { nextE = e.prevBody; fn(e.body); e = nextE }
	return b
}
b.activateOnce=b.do1 = function (co) {
	this.cl(
			function (f) {
				if (!f.by(co)) {
					co.B(f)
				}
			},
			function (f) {
				if (f.by(co)) {
					co.xB(f)
				}
			}
	)
	return this
}
b.activate= b.do = function (co) {
	this.cl(function (f) {
				if (!f.sen()) {
					co.B(f)
					// f.C('z')
				}
			},
			function (f) {
				if (!f.sen()) {
					// co.xB(f)
					f.xCo(co)
					//f.C('w')
				}
			});
	return this
}
//copyCat
f.bodBy= f.by = function (co) {return this.B().by(co)}
f.bodCo=f.co = function () {
	return this.B().co()
}//x as a verb is to delete/cancel
f.bodRmCo=f.xCo = function () {
	this.B().xCo();
	return this
}//'(switch/change)to'
f.bodTo=f.to = function (co) {
	this.B().to(co);
	return this
}