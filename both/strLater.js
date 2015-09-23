_.fCC = function (a) {
return String.fromCharCode(a)
}
_.tS = function (a) {return a.toString()}
_.eW=function(a,b){return s$(a).endsWith(b) } //_.eW = function (a, b) {return l$(a, _z(b)) == b}
rex=function(){
_.RE = _.isRegExp
$RE = function (a, b, c) {
return new RegExp(a, b, c)
}



}_.RE= _.isRegExp
$RE=function(a,b,c){return new RegExp(a,b,c)}

__ = '!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
S.iU= function(a){if(S(a)){return s$(a).isUpper()}}
S.tU=  _.tU= _.tUC=function(a){
return a.toUpperCase()
return S(a)? a.toUpperCase() :A(a)? _.m(a,function(a){return S.tU(a)}):a}
S.iL=function(a){
return S(a)? a.toLowerCase() :A(a)? _m(a,function(a){return lC(a)}):a
//Lc=function(a){if(_.isString(a)){return s$(a).isLower()}}
}
S.tL=_.tL= _.tLC=function(a){         return a.toLowerCase()

}
S.cR= function(a,b){return s$(a).chompRight(b).s }
S.eR=  function(a,b){return s$(a).ensureRight(b).s}
S.cL= function(a,b){return s$(a).chompLeft(b).s }
S.eL=  function(a,b){b = b || '/'; return s$(a).ensureLeft(b).s}
S.x= S.ext=_.ext= function(a, b){if(S(a)){
return  s$(a).contains('.')  ? a :
s$(a).ensureRight(b||'.png').s}}
S.slash= _.slash =_.ensureSlash=function(str){
var hasSlash = str[0] == '/'
return hasSlash? str: '/'+str
}
S.spl=_.spl=function(a,b){return  String(a).split(b)}
S.bf=_.bf=function(a,b){return  a.split(b|| '.')[0]}
S.af=_.af=function(a,b){return  a.split(b || '/')[0] }
S.S= S.to=_.tS=function(a){return  a.toString()}
S.ch=_.fCC=function(a){return $S.fromCharCode(a) }
Utils.chompRight = chompRight=function(a,b){return s$(a).chompRight(b).s }
Utils.ensureRight = ensureRight=function(a,b){return s$(a).ensureRight(b).s}
//should be dep? 'fsa'.toUpperCase()
Utils.toUpperCase = toUpperCase=uC=function(a){
return S(a)? a.toUpperCase()
:A(a)? _.map(a,function(a){return uC(a)}):a }
Utils.isUpper = isUpper=Uc=function(a){
if(_.isString(a)){ //for safety?
return s$(a).isUpper()
}}
_.b = function (a, b, c) {
return F(a) ? _.bind(a, b, c) : _.bindAll(a, b, c)
}
_.tA = function (a) {
return O(a) ? _.toArray(a) : [a]
}
_.fl = _.F = function (a) {
if (A(a)) {
return _.flatten(a)
}
}
_.ey = function (a, b, c) {
return _.every(a, b, c)
}
_.eW = function (a, b) {
return s$(a).endsWith(b)
}
_.mo = function (n, fn) {
return N(n) ? _.throttle(fn, n * 1000) : _.throttle(n, 1000)
}
_.rd = function r(a, b, c, d) {
return F(b) && D(c) ? _.reduce(a, b, c) : _.reduceRight(a, c, b)
}
_.rp = function (a, b, c) {
return a.replace(b || '#', c || '')
}
_.rng = function (a, b) {
var g = G(arguments);
return N(b) ? _.range(a, b) : g.p ? _.range(1, (a || 10) + 1) : _.range(a)
}
_.iv = function (a, b) {
return _.invert(a)
}
_.ix = function (a, b) {
return _.ap(_.intersection, arguments)
}
function strng(){
//_.toU = function () {     _.e(G(arguments), function (g) {g = undefined})}
//_.left = function(a,b){var g=G(arguments); return S(b)? (!g.m?  s$(a).ensureLeft(b).s :s$(a).chompLeft(b).s):0}
// S.r=function(a,b){var g=G(arguments); return  g.n?  s$(a).chompRight(b).s: s$(a).ensureRight(b).s }
// String.prototype.ensureSlash=function(){var hasSlash = this[0] = '/'; return hasSlash? this: '/'+this}
// _.xxx=function e(p,q,w){return S(p) && s(q)? _.eW(p,q) :S(q)?  e(p,function(v,k){eval(q)}, w)}
function more(){
ll = function (a, b) {
if (S(b)) {
console.log(a + ': ' + b)
}
else {
$l(a + ' ->');
$l(b)
}
return b
} // String.prototype.ensureSlash=function(){var hasSlash = this[0] = '/'; return hasSlash? this: '/'+this}
$t = function(a, b){if(b2d.test){
var g=G(arguments), a=g[0], b=g[1],str
if(D(b)){ str='||'
_.e(g, function(s){str+=  ' '  + s.toString() + ' |'})
str += '|'}
else {str = a.toString()}
$l(str)}
return a
}
function mutate() {
_.rp = function (a, b, c) {
return a.replace(b || '#', c || '')

}
S.spl = _.spl = function (a, b) {
return String(a).split(b)
}
S.S = S.to = _.tS = function (a) {
return a.toString()
}
S.ch = _.fCC = function (a) {
return $S.fromCharCode(a)
}


}
function upper() {
S.iU = function (a) {
if (S(a)) {
return s$(a).isUpper()
}
}
S.tU = _.tU = _.tUC = function (a) {
return a.toUpperCase()
return S(a) ? a.toUpperCase() : A(a) ? _.m(a, function (a) {
return S.tU(a)
}) : a
}

_.toU = function () {
_.e(G(arguments), function (g) {
g = undefined
})
}


S.tU = function (a) {
return S(a) ? a.toUpperCase() : A(a) ? _.m(a, function (a) {
return S.tU(a)
}) : a
}
S.iU = function (a) {
if (S(a)) {
return s$(a).isUpper()
}
}


}
function lower() {
S.iL = function (a) {
return S(a) ? a.toLowerCase() : A(a) ? _m(a, function (a) {
return lC(a)
}) : a
//Lc=function(a){if(_.isString(a)){return s$(a).isLower()}}
}
S.tL = _.tL = _.tLC = function (a) {
return a.toLowerCase()

}


_.tLc = _.tL = _.tLC = function (a) {
return a.toLowerCase()
}
_.tUc = _.tU = _.tUC = function (a) {
return a.toUpperCase()
}

}
function right() {

S.af = _.af = function (a, b) {
return a.split(b || '/')[0]
}

_.eW = function (a, b) {
return l$(a, _z(b)) == b

//_.eW = function (a, b) {return s$(a).endsWith(b)}
}
S.cR = function (a, b) {
return s$(a).chompRight(b).s
}
S.eR = function (a, b) {
return s$(a).ensureRight(b).s
}
S.r = function (a, b) {
var g = G(arguments)
return g.n ? s$(a).chompRight(b).s :
s$(a).ensureRight(b).s
}
_.slash = _.ensureSlash = function (str) {
var hasSlash = str[0] == '/'
return hasSlash ? str : '/' + str
}

//before('.')
// _.xxx=function e(p,q,w){return S(p) && s(q)? _.eW(p,q) :S(q)?  e(p,function(v,k){eval(q)}, w)}

}
function left() {
S.bf = _.bf = function (a, b) {
return a.split(b || '.')[0]
}
S.cL = function (a, b) {
return s$(a).chompLeft(b).s
}
S.eL = function (a, b) {
b = b || '/';
return s$(a).ensureLeft(b).s
}


_.left = function (a, b) {
var g = G(arguments)
return S(b) ? (!g.m ? s$(a).ensureLeft(b).s
: s$(a).chompLeft(b).s) : 0
}
}
S.x = S.ext = _.ext = function (a, b) {
if (S(a)) {
return s$(a).contains('.') ? a :
s$(a).ensureRight(b || '.png').s
}
}
}

S.url = function(a){return 'url("' +a+ '")' }
_.iDU=  function(a){ return s$(a).ct('data:') }

_.b = function (a, b, c) {
return F(a) ? _.bind(a, b, c) : _.bindAll(a, b, c)
}
_.tA = function (a) {
return O(a) ? _.toArray(a) : [a]
}
_.fl = _.F = function (a) {
if (A(a)) {
return _.flatten(a)
}
}
_.ey = function (a, b, c) {
return _.every(a, b, c)
}
_.eW = function (a, b) {
return s$(a).endsWith(b)
}
_.mo = function (n, fn) {
return N(n) ? _.throttle(fn, n * 1000) : _.throttle(n, 1000)
}
_.rd = function r(a, b, c, d) {
return F(b) && D(c) ? _.reduce(a, b, c) : _.reduceRight(a, c, b)
}
_.rp = function (a, b, c) {
return a.replace(b || '#', c || '')
}
_.rng = function (a, b) {
var g = G(arguments);
return N(b) ? _.range(a, b) : g.p ? _.range(1, (a || 10) + 1) : _.range(a)
}
_.iv = function (a, b) {
return _.invert(a)
}
_.ix = function (a, b) {
return _.ap(_.intersection, arguments)
}

__ = '!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
S.iU = function (a) {
if (S(a)) {
return s$(a).isUpper()
}
}
S.tU = _.tU = _.tUC = function (a) {
return a.toUpperCase()
return S(a) ? a.toUpperCase() : A(a) ? _.m(a, function (a) {
return S.tU(a)
}) : a
}
S.iL = function (a) {
return S(a) ? a.toLowerCase() : A(a) ? _m(a, function (a) {
return lC(a)
}) : a
//Lc=function(a){if(_.isString(a)){return s$(a).isLower()}}
}
S.tL = _.tL = _.tLC = function (a) {
return a.toLowerCase()

}
S.cR = function (a, b) {
return s$(a).chompRight(b).s
}
S.eR = function (a, b) {
return s$(a).ensureRight(b).s
}
S.cL = function (a, b) {
return s$(a).chompLeft(b).s
}
S.eL = function (a, b) {
b = b || '/';
return s$(a).ensureLeft(b).s
}
S.x = S.ext = _.ext = function (a, b) {
if (S(a)) {
return s$(a).contains('.') ? a :
s$(a).ensureRight(b || '.png').s
}
}
S.slash = _.slash = _.ensureSlash = function (str) {
var hasSlash = str[0] == '/'
return hasSlash ? str : '/' + str
}
S.spl = _.spl = function (a, b) {
return String(a).split(b)
}
S.bf = _.bf = function (a, b) {
return a.split(b || '.')[0]
}
S.af = _.af = function (a, b) {
return a.split(b || '/')[0]
}
S.S = S.to = _.tS = function (a) {
return a.toString()
}
S.ch = _.fCC = function (a) {
return $S.fromCharCode(a)
}
}

S.iU = function (a) {
if (S(a)) {
return s$(a).isUpper()
}
}
S.tU = _.tU = _.tUC = function (a) {
return a.toUpperCase()
return S(a) ? a.toUpperCase() : A(a) ? _.m(a, function (a) {
return S.tU(a)
}) : a
}
S.iL = function (a) {
return S(a) ? a.toLowerCase() : A(a) ? _m(a, function (a) {
return lC(a)
}) : a
//Lc=function(a){if(_.isString(a)){return s$(a).isLower()}}
}
S.tL = _.tL = _.tLC = function (a) {
return a.toLowerCase()

}
S.cR = function (a, b) {
return s$(a).chompRight(b).s
}
S.eR = function (a, b) {
return s$(a).ensureRight(b).s
}
S.cL = function (a, b) {
return s$(a).chompLeft(b).s
}
S.eL = function (a, b) {
b = b || '/';
return s$(a).ensureLeft(b).s
}
S.x = S.ext = _.ext = function (a, b) {
if (S(a)) {
return s$(a).contains('.') ? a :
s$(a).ensureRight(b || '.png').s
}
}
S.slash = _.slash = _.ensureSlash = function (str) {
var hasSlash = str[0] == '/'
return hasSlash ? str : '/' + str
}
S.spl = _.spl = function (a, b) {
return String(a).split(b)
}
S.bf = _.bf = function (a, b) {
return a.split(b || '.')[0]
}
S.af = _.af = function (a, b) {
return a.split(b || '/')[0]
}
S.S = S.to = _.tS = function (a) {
return a.toString()
}
S.ch = _.fCC = function (a) {
return $S.fromCharCode(a)
}

ll = function (a, b) {
if (S(b)) {
console.log(a + ': ' + b)
}
else {
$l(a + ' ->');
$l(b)
}
return b
} // String.prototype.ensureSlash=function(){var hasSlash = this[0] = '/'; return hasSlash? this: '/'+this}
$t = function(a, b){if(b2d.test){
var g=G(arguments), a=g[0], b=g[1],str
if(D(b)){ str='||'
_.e(g, function(s){str+=  ' '  + s.toString() + ' |'})
str += '|'}
else {str = a.toString()}
$l(str)}
return a
}
function mutate() {
_.rp = function (a, b, c) {
return a.replace(b || '#', c || '')

}
S.spl = _.spl = function (a, b) {
return String(a).split(b)
}
S.S = S.to = _.tS = function (a) {
return a.toString()
}
S.ch = _.fCC = function (a) {
return $S.fromCharCode(a)
}


}
function upper() {
S.iU = function (a) {
if (S(a)) {
return s$(a).isUpper()
}
}
S.tU = _.tU = _.tUC = function (a) {
return a.toUpperCase()
return S(a) ? a.toUpperCase() : A(a) ? _.m(a, function (a) {
return S.tU(a)
}) : a
}

_.toU = function () {
_.e(G(arguments), function (g) {
g = undefined
})
}


S.tU = function (a) {
return S(a) ? a.toUpperCase() : A(a) ? _.m(a, function (a) {
return S.tU(a)
}) : a
}
S.iU = function (a) {
if (S(a)) {
return s$(a).isUpper()
}
}


}
function lower() {
S.iL = function (a) {
return S(a) ? a.toLowerCase() : A(a) ? _m(a, function (a) {
return lC(a)
}) : a
//Lc=function(a){if(_.isString(a)){return s$(a).isLower()}}
}
S.tL = _.tL = _.tLC = function (a) {
return a.toLowerCase()

}


_.tLc = _.tL = _.tLC = function (a) {
return a.toLowerCase()
}
_.tUc = _.tU = _.tUC = function (a) {
return a.toUpperCase()
}

}
function right() {

S.af = _.af = function (a, b) {
return a.split(b || '/')[0]
}

_.eW = function (a, b) {
return l$(a, _z(b)) == b

//_.eW = function (a, b) {return s$(a).endsWith(b)}
}
S.cR = function (a, b) {
return s$(a).chompRight(b).s
}
S.eR = function (a, b) {
return s$(a).ensureRight(b).s
}
S.r = function (a, b) {
var g = G(arguments)
return g.n ? s$(a).chompRight(b).s :
s$(a).ensureRight(b).s
}
_.slash = _.ensureSlash = function (str) {
var hasSlash = str[0] == '/'
return hasSlash ? str : '/' + str
}

//before('.')
// _.xxx=function e(p,q,w){return S(p) && s(q)? _.eW(p,q) :S(q)?  e(p,function(v,k){eval(q)}, w)}

}
function left() {
S.bf = _.bf = function (a, b) {
return a.split(b || '.')[0]
}
S.cL = function (a, b) {
return s$(a).chompLeft(b).s
}
S.eL = function (a, b) {
b = b || '/';
return s$(a).ensureLeft(b).s
}


_.left = function (a, b) {
var g = G(arguments)
return S(b) ? (!g.m ? s$(a).ensureLeft(b).s
: s$(a).chompLeft(b).s) : 0
}
}
S.x = S.ext = _.ext = function (a, b) {
if (S(a)) {
return s$(a).contains('.') ? a :
s$(a).ensureRight(b || '.png').s
}
}
ll = function (a, b) {
if (S(b)) {
console.log(a + ': ' + b)
}
else {
$l(a + ' ->');
$l(b)
}
return b
} // String.prototype.ensureSlash=function(){var hasSlash = this[0] = '/'; return hasSlash? this: '/'+this}
$t = function(a, b){if(b2d.test){
var g=G(arguments), a=g[0], b=g[1],str
if(D(b)){ str='||'
_.e(g, function(s){str+=  ' '  + s.toString() + ' |'})
str += '|'}
else {str = a.toString()}
$l(str)}
return a
}
function mutate() {
_.rp = function (a, b, c) {
return a.replace(b || '#', c || '')

}
S.spl = _.spl = function (a, b) {
return String(a).split(b)
}
S.S = S.to = _.tS = function (a) {
return a.toString()
}
S.ch = _.fCC = function (a) {
return $S.fromCharCode(a)
}


}
function upper() {
S.iU = function (a) {
if (S(a)) {
return s$(a).isUpper()
}
}
S.tU = _.tU = _.tUC = function (a) {
return a.toUpperCase()
return S(a) ? a.toUpperCase() : A(a) ? _.m(a, function (a) {
return S.tU(a)
}) : a
}

_.toU = function () {
_.e(G(arguments), function (g) {
g = undefined
})
}


S.tU = function (a) {
return S(a) ? a.toUpperCase() : A(a) ? _.m(a, function (a) {
return S.tU(a)
}) : a
}
S.iU = function (a) {
if (S(a)) {
return s$(a).isUpper()
}
}


}
function lower() {
S.iL = function (a) {
return S(a) ? a.toLowerCase() : A(a) ? _m(a, function (a) {
return lC(a)
}) : a
//Lc=function(a){if(_.isString(a)){return s$(a).isLower()}}
}
S.tL = _.tL = _.tLC = function (a) {
return a.toLowerCase()

}


_.tLc = _.tL = _.tLC = function (a) {
return a.toLowerCase()
}
_.tUc = _.tU = _.tUC = function (a) {
return a.toUpperCase()
}

}
function right() {

S.af = _.af = function (a, b) {
return a.split(b || '/')[0]
}

_.eW = function (a, b) {
return l$(a, _z(b)) == b

//_.eW = function (a, b) {return s$(a).endsWith(b)}
}
S.cR = function (a, b) {
return s$(a).chompRight(b).s
}
S.eR = function (a, b) {
return s$(a).ensureRight(b).s
}
S.r = function (a, b) {
var g = G(arguments)
return g.n ? s$(a).chompRight(b).s :
s$(a).ensureRight(b).s
}
_.slash = _.ensureSlash = function (str) {
var hasSlash = str[0] == '/'
return hasSlash ? str : '/' + str
}

//before('.')
// _.xxx=function e(p,q,w){return S(p) && s(q)? _.eW(p,q) :S(q)?  e(p,function(v,k){eval(q)}, w)}

}

function left() {
S.bf = _.bf = function (a, b) {
return a.split(b || '.')[0]
}
S.cL = function (a, b) {
return s$(a).chompLeft(b).s
}
S.eL = function (a, b) {
b = b || '/';
return s$(a).ensureLeft(b).s
}


_.left = function (a, b) {
var g = G(arguments)
return S(b) ? (!g.m ? s$(a).ensureLeft(b).s
: s$(a).chompLeft(b).s) : 0
}
}

function splt() {
_.spl = function (a, b) {
return String(a).split(b)
}
_.bf = function (a, b) {
return a.split(b || '.')[0]
} //before('.')
}
function chompEnsure() {
_.left = function (a, b) {
alert('_.left')
var g = G(arguments)
return S(b) ? (!g.m ? s$(a).ensureLeft(b).s
: s$(a).chompLeft(b).s) : 0
}
_.slash = function (str) {
alert('_.slash')
var hasSlash = str[0] == '/'
return hasSlash ? str : '/' + str
} //= _.ensureSlash
S.cR = function (a, b) {
return s$(a).chompRight(b).s
}
S.eR = function (a, b) {
return s$(a).ensureRight(b).s
}
S.cL = function (a, b) {
return s$(a).chompLeft(b).s
}
S.eL = function (a, b) {
b = b || '/';
return s$(a).ensureLeft(b).s
}

S.r = function (a, b) {
var g = G(arguments)
return g.n ? s$(a).chompRight(b).s :
s$(a).ensureRight(b).s
}

}
function imgUrl() {
_.isDU = $J.isDU = function (d) {
if (U(d)) {
return false
}
return s$(d).contains('data:')
}
_.src = $J.src = function f(e) {
var _src = function (a) {
a = _.ext(a)
return s$(a).startsWith('/') ? a : '/' + a
}
//if(Q(e)){$l('q');e=$(e)[0]}
if (e.image) {
e = e.image
}
if (C(e)) {
e = C(e)
}
if (e.src) {
e = e.src
}
if (e.toDataURL) {
e = tDU(e)
}
return s$(e).contains('data:') ? e : S(e) ? _src(e) : 0
function old() {

$J.src = function f(e) {
var _src = function (a) {
a = $.extension(a)
return s$(a).startsWith('/') ? a : '/' + a
}
//if(Q(e)){$l('q');e=$(e)[0]}
if (e.image) {
e = e.image
}
if (C(e)) {
e = C(e)
}
if (e.src) {
e = e.src
}
if (e.toDataURL) {
e = tDU(e)
}

return s$(e).contains('data:') ? e

: S(e) ? _src(e)

: 0
}

}
}
_.ext = S.ext = function (a, b) {
if (S(a)) {
return s$(a).contains('.') ? a :
s$(a).ensureRight(b || '.png').s
}
}
_.crs = $J.crs = crs = function (a) {
return a.split('/').pop().split('.png')[0]
}//it's the opposite of 'src' ! //it strips '/me.png' -> 'me'

}
$nwLns=$splOnNewLines=function(str){return str.split(/\r?\n/)}
_.cCA=function(a,b){return a.charCodeAt(b||0)}

_.b = function (a, b, c) {
return F(a) ? _.bind(a, b, c) : _.bindAll(a, b, c)
}
_.tA = function (a) {
return O(a) ? _.toArray(a) : [a]
}
_.fl = _.F = function (a) {
if (A(a)) {
return _.flatten(a)
}
}
_.ey = function (a, b, c) {
return _.every(a, b, c)
}
_.eW = function (a, b) {
return s$(a).endsWith(b)
}
_.mo = function (n, fn) {
return N(n) ? _.throttle(fn, n * 1000) : _.throttle(n, 1000)
}
_.rd = function r(a, b, c, d) {
return F(b) && D(c) ? _.reduce(a, b, c) : _.reduceRight(a, c, b)
}
_.rp = function (a, b, c) {
return a.replace(b || '#', c || '')
}
_.rng = function (a, b) {
var g = G(arguments);
return N(b) ? _.range(a, b) : g.p ? _.range(1, (a || 10) + 1) : _.range(a)
}
_.iv = function (a, b) {
return _.invert(a)
}
_.ix = function (a, b) {
return _.ap(_.intersection, arguments)
}


S.iU = function (a) {
if (S(a)) {
return s$(a).isUpper()
}
}
S.tU = _.tU = _.tUC = function (a) {
return a.toUpperCase()
return S(a) ? a.toUpperCase() : A(a) ? _.m(a, function (a) {
return S.tU(a)
}) : a
}
S.iL = function (a) {
return S(a) ? a.toLowerCase() : A(a) ? _m(a, function (a) {
return lC(a)
}) : a
//Lc=function(a){if(_.isString(a)){return s$(a).isLower()}}
}
S.tL = _.tL = _.tLC = function (a) {
return a.toLowerCase()

}
S.cR = function (a, b) {
return s$(a).chompRight(b).s
}
S.eR = function (a, b) {
return s$(a).ensureRight(b).s
}
S.cL = function (a, b) {
return s$(a).chompLeft(b).s
}
S.eL = function (a, b) {
b = b || '/';
return s$(a).ensureLeft(b).s
}
S.x = S.ext = _.ext = function (a, b) {
if (S(a)) {
return s$(a).contains('.') ? a :
s$(a).ensureRight(b || '.png').s
}
}
S.slash = _.slash = _.ensureSlash = function (str) {
var hasSlash = str[0] == '/'
return hasSlash ? str : '/' + str
}
S.spl = _.spl = function (a, b) {
return String(a).split(b)
}
S.bf = _.bf = function (a, b) {
return a.split(b || '.')[0]
}
S.af = _.af = function (a, b) {
return a.split(b || '/')[0]
}
S.S = S.to = _.tS = function (a) {
return a.toString()
}
S.ch = _.fCC = function (a) {
return $S.fromCharCode(a)
}

S.cR = function (a, b) {
return s$(a).chompRight(b).s
}
S.eR = function (a, b) {
return s$(a).ensureRight(b).s
}
S.cL = function (a, b) {
return s$(a).chompLeft(b).s
}
S.eL = function (a, b) {
b = b || '/';
return s$(a).ensureLeft(b).s
}
S.r = function (a, b) {
var g = G(arguments)
return g.n ? s$(a).chompRight(b).s :
s$(a).ensureRight(b).s
}
S.x = S.ext = _.ext = function (a, b) {
if (S(a)) {
return s$(a).contains('.') ? a :
s$(a).ensureRight(b || '.png').s
}
}

/* S1=function(a,b,c){
return _.isUndefined(b)? (_.isString(a)? $.span().html(a):0  )
:N(b)? a.substr(b,c)
:S(b)? s$(a).startsWith(b)
:_.some(a, b||F,c)
}
*/


S.url = function (a) {
alert('S.url')
return 'url("' + a + '")'}
_.jS = function (a, b, c) {return S(a) ? $.Gj(a, b, c) : JSON.stringify(a)}
_.jP = function (a, b, c) {return S(a) ? JSON.parse(a, b) : $(a).prepend(b, c)}

ll = function (a, b) {
if (S(b)) {
console.log(a + ': ' + b)
}
else {
$l(a + ' ->');
$l(b)
}
;
return b
}
_.j=function (a, b) {return (a || []).join(b || ' ')}
_.jS = function (a, b, c) {return S(a) ? $.Gj(a, b, c) : JSON.stringify(a)}
_.jP = function (a, b, c) {return S(a) ? JSON.parse(a, b) : $(a).prepend(b, c)}
S.tU = _.tUc = _.tU = _.tUC = function (a) {
return S(a) ? a.toUpperCase() :
A(a) ? _.m(a, function (a) {
return S.tU(a)
}) : a
}
S.iU = function (a) {
if (S(a)) {
return s$(a).isUpper()
}
}
_.tLc = _.tL = _.tLC = function (a) {
return a.toLowerCase()
}



_.left = function (a, b) {
alert('_.left')
var g = G(arguments)
return S(b) ? (!g.m ? s$(a).ensureLeft(b).s
: s$(a).chompLeft(b).s) : 0
}
_.slash = function (str) {
alert('_.slash')
var hasSlash = str[0] == '/'
return hasSlash ? str : '/' + str
} //= _.ensureSlash
_.ext = S.ext = function (a, b) {
if (S(a)) {
return s$(a).contains('.') ? a :
s$(a).ensureRight(b || '.png').s
}
}
_.crs =  function (a) {
return a.split('/').pop().split('.png')[0]
}//it's the opposite of 'src' ! //it strips '/me.png' -> 'me'
_.url=  function (a) {
alert('S.url')
return 'url("' + a + '")'}
_.iDU = function (a) {
return s$(a).contains('data:')
}
_.src=function(a){
a = _.ext(a);return s$(a).startsWith('/')? a : '/'+ a
}
_.fCC = function (a) {
return String.fromCharCode(a)
}
_.tS = function (a) {return a.toString()}
_.eW=function(a,b){return s$(a).endsWith(b) } //_.eW = function (a, b) {return l$(a, _z(b)) == b}
_.j=function (a, b) {return (a || []).join(b || ' ')}
_.tU =   _.tUc =  _.tUC = function (a) {
return S(a) ? a.toUpperCase() :
A(a) ? _.m(a, function (a) {
return S.tU(a)
}) : a
}
_.iU=   function (a) {
if (S(a)) {
return s$(a).isUpper()
}
}
_.tLc = _.tL = _.tLC = function (a) {
return a.toLowerCase()
}
S.url = function(a){return 'url("' +a+ '")' }
_.iDU=  function(a){ return s$(a).ct('data:') }
_.scl = function (v, a) {
v.x *= a;
v.y *= a;
return v
}
_.def = function (a, b) {
var g = G(arguments);
a = a || {}
return g.p ? D(a, oO(b || '' + 'D')) : D(a) ? a : b
}
_.inx = $.inx = function () {
}
_.er = function (z) {
throw new Error(z)
}
_.ig = function () {
if (_.has('Image', E(a))) {
return E(a)
}
}
_.eW = function (a, b) {
return l$(a, _z(b)) == b
}
_.cc = function (a, b) {
return (A(a) ? a : [a]).cc(b)
}
_.is = function (a) {
return function (b) {
return b === a
}
}
_.io$ = function (a, b, c) {
return a.indexOf(b, (c < 0 ? c + _z(a) : c))
}
_.pp = _.props = $p = function p(i, t, kK, vf, f) {
//get: index thing key //set: index thing key value [function] //setOb: index thing ob [function]
if (O(kK)) {
_.each(kK, function (v, k) {
p(i, t, k, v, vf)
})
}                   //setOb
if (U(kK)) {
return _p(p, i, t)
}
if (vf == "*") {
return p(i, t, kK, $r(kK))
} // set it randomly?!
else if (U(vf)) {
return t[oO(i, kK)]
}   //get
else {
f = f || _s  //function(t,k,v){t[k]=v}  //set
f(t, oO(i, kK), oO(kK, vf, 'R'))
}
return t
}
_.met = _.mm = function f(i, x, m, g) {
//=met $m=
if (U(i)) {
return
}
if (U(x)) {
return _p(f, i)
}
if (U(m)) {
return _p(f, i, x)
}// if(U(g)){return _p(f,i,x,m)}
if (!A(g)) {
return _a(f, [i, x, m, _r(arguments, 3)])
}//met('x',  c.x, 'd',  [i,0,0]     )//met('x',  c.x, 'd',   i,0,0   )
return _a(x[oO(i, m)], g, x) || x
}
_.hs = function _h(a, b, c) {
if (O(b)) {
return _h(b.toString(), a)
//  if( A(a)){return_.ct(a,b): _.has(a,b)}
}
if (S(a)) {
return s$(a).contains(b, c)
}
}

$nwLns=$splOnNewLines=function(str){return str.split(/\r?\n/)}

_.cCA=function(a,b){return a.charCodeAt(b||0)}
