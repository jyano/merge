
f._of=function(k){var f=this,b=this.B(), res
	if(O(k)){return f==k}
	if( S(k) ){
		k= k.trim()
		f._K = f._K || []
		if(_.ct(f._K, k)){return true}
	}
	return b.of(k)
}//new, not yet used 



f.has = function(k){ return !k || _.ct(this._K || [], k.trim()) }//not used, new
f.got = f.mat= f.matches= function(k){return k && this.has(k)}//not used, new


f.of = function (k) {if (!this) {alert('f.of !this(f)'); return false}
	if (!k) {return true}
	return this == k ||
			(S(k) && _.ct(this._K || [], k.trim()))
			||
			(this.B() && this.B().of(k))
}

f.is = function (k) {
	return k && this.of(k)
} //if(g.A){_.e(g.f, function(k){f.K(k)}); return f}
f.K = function () {var f = this, g = G(arguments);
	f._K = f._K || []
	if (g.u) { return (f._K).join(' ') }
	if (g.O) {
		if(g.f.k){ f.K( g.f.k )}
	}
	else if (g.S_){
	_.eW(g.f, function (k) {
		if (!f.of(k)) { 
			f._K.push(k) }
	})
	}
	
	
	return f
	
	/*
	
	
	 _.eW = function (str, fn) {
	
	 //use 1:ends With
	 if (S(fn)) {	 return s$(str).endsWith(fn)	 }
	 
	 //use 2:each(in a string) With
	 
	 var arr = _.compact( _.map( str.trim().split(' '),
	 
	 function (str) {	 return str.trim()	 }))
	 
	 if (fn) {	 _.e(arr, function (str) { fn(str)	 })}
	 
	 return arr
	 }
	
	 */
}












b.of = function (k) {
	if (b2d.iF(k)) {
		k = k.B()
	}
	return !k || _.ct(this._K, k) || this == k
}

b.is = function (k) {
	return k && this.of(k)
}

b.K = function () {
	var b = this, g = G(arguments);
	this._K = this._K || []
	if (g.u) {
		return this._K.join(' ')
	}
	if (g.O) {
		this.K(g.f.k);
		return this
	}
	_.eW(g.f, function (k) {
		if (!b.of(k)) {
			b._K.push(k)
		}
	})
	return this
}