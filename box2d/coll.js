b2d.p()

f.fl = f.fil = f.flDa = function () {
	var f = this, g = G(arguments)
	if (g.u) {
		return f.GetFilterData()
	}
	f.SetFilterData(g.f);
	return f
}
fd.grI = fd.grp = fd.group = fd.index = fd.gI = function (a) {
	if (U(a)) {
		return this.filter.groupIndex
	}
	this.filter.groupIndex = a;
	return this
}
f.grI = f.grp = function (i) {
	var f = this, fl = f.fl()
	return U(i) ? fl.grI() : f.fl(fl.grI(i))
}
b.grI = b.grp = function (gr) {
	var b = this
	if (U(gr)) {
		return this.f().grp()
	}
	b.fs(function (f) {
		f.grp(gr)
	});
	return b
}
flDa.grI = flDa.grp = flDa.g = function (gr) {
	if (U(gr)) {
		return this.groupIndex
	}
	this.groupIndex = gr;
	return this
}
w.cxFl = w.sCF = function () {
	var w = this, g = G(arguments)
	w.SetContactFilter.apply(w, g)
}
f.cat = function () {
	var f = this, g = G(arguments), flDa = f.flDa()
	if (g.u) {
		return flDa.categoryBits
	}
	flDa.categoryBits = g.f;
	f.flDa(flDa);
	return f
}
f.msk = function (msk) {
	var f = this, g = G(arguments),
			flDa = f.flDa(), num//f.msk: pass it a single number, pass it an array of numbers and it will add them up for you
	if (g.u) {
		return flDa.maskBits
	}
	if (A(g.f)) {
		num = 0
		_.e(g.f, function (bits) {
			num += bits
		})
		g.f = num
	}
	flDa.maskBits = g.f
	f.flDa(flDa)
	return f
}
b.cat = function () {
	var b = this, g = G(arguments);
	if (g.u) {
		return b
	}
	b.fs(function (f) {
		f.cat(g.f)
	});
	return b
}
b.msk = function () {
	var b = this, g = G(arguments);
	b.fs(function (f) {
		f.msk(g.f)
	});
	return b
}
f.bit = function (cat, msk) {
	if (N(cat)) {
		this.cat(cat)
	}
	if (N(msk) || A(msk)) {
		this.msk(msk)
	}
	return this
}
b.bit = function (cat, msk) {
	if (N(cat)) {
		this.cat(cat)
	}
	if (N(msk) || A(msk)) {
		this.msk(msk)
	}
	return this
}

