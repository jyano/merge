late()
function late() {
	toAlrt()
	old = function () {
//md.o = function () {var g = G(arguments);this.on.apply(this, g)}
		/*
		 // escape   has     unset    clear – parse  pa P – clone  cl– toJSON
		 – url     u – urlRoot  uR– sync   sy fetch  F  – save  S – destroy
		 – validate    vl – validationError  vE – isValid   iV
		 – attributes– changed  – isNew iN – hasChanged  hC  – previous p
		 – previousAttributes  pA – changedAttributes cA
		 */
//Bb._M=function(ob){return  Bb.M.extend(ob)}
//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})
	}
	function toAlrt() {
		M$ = function (ob) {
			alert('M$')
			ob = O(ob) ? ob : {}
			var Md, md
			Md = Bb._M(ob)
			md = new Md(ob)
			return md
		}
		toMdOb = function (a) {
			alert('toMdOb')
			a = O(a) ? a : {}
			if (a.i) {
				a.initialize = _v(a.i)
			}
			if (a.I) {
				a.initialize = _v(a.I)
			}
			if (a.d) {
				a.defaults = a.d
			}
			if (a.D) {
				a.defaults = a.D
			}
			if (a.v) {
				a.validate = a.v
			}
			if (a.V) {
				a.validate = a.V
			}
			a.idAttribute = '_id'
			return a
		}
		sMd = function (m) {
			alert('sMd')
			m.at = m.attributes
			m.s = function (a, b, c) {
				if (O(a) && O(b)) {
					if (b.v) {
						b.validate = b.v ? true : false
					}
				}
				if (S(a) && O(c)) {
					if (c.v) {
						c.validate = c.v ? true : false
					}
				}
				return m.set(a, b, c)
			}
			m.g = m.get
			m.j = m.toJSON
			m.o = m.on
			Bb.sEv(m)
			return m
		}
		bbM = function (a) {
			alert('bbM')
			a = ob(a)
			if (a.i) {
				a.initialize = _v(a.i)
			}
			if (a.I) {
				a.initialize = _v(a.I)
			}
			if (a.d) {
				a.defaults = a.d
			}
			if (a.D) {
				a.defaults = a.D
			}
			if (a.v) {
				a.validate = a.v
			}
			if (a.V) {
				a.validate = a.V
			}
			a.idAttribute = "_id"
			var m = Backbone.Model.extend(a)
			sMd(m)
			return function (a) {
				var o = new m(a)
				sMd(o)
				return o
			}
		}
	}
}
V$=function(){var g=G(arguments), o,v, a
    a=O(g.f)? g.f:{}
    o={ob: g.f}
    o.ob= o.b||{}
    if(a.I){a.initialize = a.I}
    if(a.R){a.render = a.R}
    if(a.r){a.render = a.r}
    if(a.rr){a.render = a.rr}
    if(a.E){a.events = a.E}
    if(a.T){a.template = a.T}
    if(a.t){a.tagName = a.t}
    if(a.k){a.className = a.k}
    if(a.i){a.id = a.i}
    Vw = bb.V.e(ob)
    if(a.m){a.model= a.m}
    if(a.md){a.model= a.md}
    if(a.cl){a.collection= a.cl}
    vw = new Vw(a)
    return vw
}