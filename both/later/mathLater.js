R = function (n, n2) {
var num
if (O(n)) {
n = n.length
}
n = N(n) ? n : 1
n2 = N(n2) ? n2 : 0
num = (M.random() * n) + n2
return M.floor(num)
}
_.sz = _z = function z(a, b, c) {
return U(b) ? _.size(a)
: N(b) ? _z(a) == b
: _z(a) == _z(b)
}
_.pI = M.pI = _.tI = function (a, b) {
if (U(b)) {
return parseInt(a)
}
return parseInt(_.tN(a, b))
//_.pI = parseInt//_.tI = function (a, b) {return parseInt(_.tN(a, b))}

}
_.adj = function (income, tax) {
//tax ~ deltaLimit ~ buffer
var income = income || 0, tax = tax || 0
if (income > 0) {
return income > tax ? income - tax : 0
}
return -income > tax ? income + tax : 0
}
_.cap = function (n, m, M) {
if (U(m)) {
return n
}
if (A(m)) {
M = m[1]
m = m[0]
}
return n < m ? m
: n > M ? M
: n
}

M = Math
M.fl = M.floor
M.c = M.cos;
M.s = M.sin
M.tD = M.toDegrees = tDeg = function (r) {
return r * (180 / M.PI)
}
M.tR = M.toRadians = M.toRads = tRad = rad = function (degs) {
if (O(degs)) {
degs = degs.rotation
}
return degs * M.PI / 180
}
M.av = M.avg = M.average = function self(a, b) {
var g = G(arguments), z = _.size(g), n = 0;


if (A(a)) {
return _a(self, a)
}

if (O(a)) {

return V(
M.av(a.x, b.x),
M.av(a.y, b.y)
)

}

_.e(g, function (a) {
n += a
})
return n / z
}
M.dst = M.distance = dst = function self(a, b) {


M.xyz = xyz = function (a, b) {
a = a || {};
a.x = a.x || 0;
a.y = a.y || 0;
a.z = a.z || 0
b = b || {};
b.x = b.x || 0;
b.y = b.y || 0;
b.z = a.z || 0


return sqr(a.x - b.x, a.y - b.y, a.z - b.z)

function sqr(a, b) {
var g = G(arguments)
return M.sqrt(U(b) ? a
: sq.apply(this, g))
}

function sq(a) {
var g = G(arguments), n = 0
_.each(g, function (a) {
n += (a * a)
})

return n
}
}


if (A(a) && U(b)) {
return self(a[0], a[1])
}


if (U(b)) {
return xyz(M.V({}), M.V(a))
}


return xyz(M.V(a), M.V(b))


}
M.lD = M.dist = M.lineDistance = function (p1, p2) {
var xs = 0, ys = 0;

p1 = V(p1)
p2 = V(p2)
xs = p2.x - p1.x;
xs = xs * xs;

ys = p2.y - p1.y;
ys = ys * ys;

return M.sqrt(xs + ys);
}

M.lineCenter = function (x1, y1, x2, y2) {
if (A(x1)) {

if (N(x1[3])) {
return center(x1[0], x1[2], x1[2], x1[3])
}
return center(x1[0], x1[1], y1[0], y1[1])
}
if (O(x1)) {
return center(x1.x, x1.y, y1.x, y1.y)
}
return center(x1, y1, x2, y2)
function center(x1, y1, x2, y2) {
var x, y

if (x1 > x2) {
upperX = x1;
lowerX = x2
}
else {
upperX = x2;
lowerX = x1
}

if (y1 > y2) {
upperY = y1;
lowerY = y2
}
else {
upperY = y2;
lowerY = y1
}

x = lowerX + (upperX - lowerX) / 2
y = lowerY + (upperY - lowerY) / 2

return V(x, y)
}
}
M.pointInCircle = function (x, y, circle) {
var withinX, withinY
withinX = x < circle.x + circle.radius && x > circle.x - circle.radius
withinY = y < circle.y + circle.radius && y > circle.y - circle.radius
return withinX && withinY
}//Y.pointInCircle = pntInCir =
M.pointInRect = Math.pointInRectangle = function (x, y, rect) {
var withinX, withinY
var halfwidth = (rect.width || rect.w) / 2
var halfheight = (rect.height || rect.h) / 2
//assumes center
withinX = x < rect.x + halfwidth && x > rect.x - halfwidth
withinY = y < rect.y + halfheight && y > rect.y - halfheight
return withinX && withinY
}
M.circlesOverlap = function (c1, c2) {
var sum, dist, rads
sum = sqr(c1.x - c2.x) + sqr(c1.y - c2.y)
dist = sqrt(sum)
rads = c1.r + c2.r
return rads < dist
}
M.warp = function (lowBound, highBound, cushion) {//wrp=
cushion = cushion || 0
return function (num) {
return num < lowBound ? highBound - cushion
: num > highBound ? lowBound + cushion
: num
}
}
M.u = _.upd = function (curr, update, g) {
var res
if (g.p) {
res = curr + update
}
else if (g.n) {
res = curr - update
}
else if (g.m) {
res = curr * update
}
else if (g.d) {
res = curr / update
}
else res = update
return res
}
M.tD = M.toDegrees = tDeg = function (r) {
return r * (180 / M.PI)
}
M.tR = M.toRadians = M.toRads = tRad = rad = function (degs) {
if (O(degs)) {
degs = degs.rotation
}
return degs * M.PI / 180
}
M.dst = M.distance = dst = function self(a, b) {


M.xyz = xyz = function (a, b) {
a = a || {};
a.x = a.x || 0;
a.y = a.y || 0;
a.z = a.z || 0
b = b || {};
b.x = b.x || 0;
b.y = b.y || 0;
b.z = a.z || 0


return sqr(a.x - b.x, a.y - b.y, a.z - b.z)

function sqr(a, b) {
var g = G(arguments)
return M.sqrt(U(b) ? a
: sq.apply(this, g))
}

function sq(a) {
var g = G(arguments), n = 0
_.each(g, function (a) {
n += (a * a)
})

return n
}
}


if (A(a) && U(b)) {
return self(a[0], a[1])
}


if (U(b)) {
return xyz(M.V({}), M.V(a))
}


return xyz(M.V(a), M.V(b))


}
M.lD = M.dist = M.lineDistance = function (p1, p2) {
var xs = 0, ys = 0;

p1 = V(p1)
p2 = V(p2)
xs = p2.x - p1.x;
xs = xs * xs;

ys = p2.y - p1.y;
ys = ys * ys;

return M.sqrt(xs + ys);
}
M.lineCenter = function (x1, y1, x2, y2) {
if (A(x1)) {

if (N(x1[3])) {
return center(x1[0], x1[2], x1[2], x1[3])
}
return center(x1[0], x1[1], y1[0], y1[1])
}
if (O(x1)) {
return center(x1.x, x1.y, y1.x, y1.y)
}
return center(x1, y1, x2, y2)
function center(x1, y1, x2, y2) {
var x, y

if (x1 > x2) {
upperX = x1;
lowerX = x2
}
else {
upperX = x2;
lowerX = x1
}

if (y1 > y2) {
upperY = y1;
lowerY = y2
}
else {
upperY = y2;
lowerY = y1
}

x = lowerX + (upperX - lowerX) / 2
y = lowerY + (upperY - lowerY) / 2

return V(x, y)
}
}
M.pointInCircle = function (x, y, circle) {
var withinX, withinY
withinX = x < circle.x + circle.radius && x > circle.x - circle.radius
withinY = y < circle.y + circle.radius && y > circle.y - circle.radius
return withinX && withinY
}//Y.pointInCircle = pntInCir =
M.pointInRect = Math.pointInRectangle = function (x, y, rect) {
var withinX, withinY
var halfwidth = (rect.width || rect.w) / 2
var halfheight = (rect.height || rect.h) / 2
//assumes center
withinX = x < rect.x + halfwidth && x > rect.x - halfwidth
withinY = y < rect.y + halfheight && y > rect.y - halfheight
return withinX && withinY
}
M.circlesOverlap = function (c1, c2) {
var sum, dist, rads
sum = sqr(c1.x - c2.x) + sqr(c1.y - c2.y)
dist = sqrt(sum)
rads = c1.r + c2.r
return rads < dist
}
M.warp = function (lowBound, highBound, cushion) {//wrp=
cushion = cushion || 0
return function (num) {
return num < lowBound ? highBound - cushion
: num > highBound ? lowBound + cushion
: num
}
}


$M = Math
sin = $M.sin
ceil = $M.ceil
flr = $M.floor
pow = $M.pow
max = _M = _.max


M = Math;
M.fl = M.floor;
M.c = M.cos;
M.s = M.sin
M.av = M.avg = M.average = function self(a, b) {
var g = G(arguments), z = _.size(g), n = 0;


if (A(a)) {
return _a(self, a)
}

if (O(a)) {

return V(
M.av(a.x, b.x),
M.av(a.y, b.y)
)

}

_.e(g, function (a) {
n += a
})
return n / z
}
M.tN = _.tN = function (what, aNum) {
return N(what) ? what : aNum || 0
}
M.u = _.upd = function (curr, update, g) {
var res
if (g.p) {
res = curr + update
}
else if (g.n) {
res = curr - update
}
else if (g.m) {
res = curr * update
}
else if (g.d) {
res = curr / update
}
else res = update
return res
}
M.pI = _.pI = _.tI = function (a, b) {
if (U(b)) {
return parseInt(a)
}
return parseInt(_.tN(a, b))
}


pI = parseInt


//logic
ff = function f(a) {
return new $F(
"a", "b", "c", "d", "e", "var g=G(arguments)," +
"t=this;" + a + ";return t")
}
ffr = function f(a) {
return new $F(
"a", "b", "c", "d", "e", "var g=G(arguments);return(" + a + ")")
}

$do = function (b, f) {
if (F(f)) {
f(b)
}
;
if (S(f)) {
$w[f] = b
}
;
return b
}

xy = function (a, x, y) {
if (U(x)) {
if (F(x) && F(y)) {
return {x: a.x(), y: a.y()}
}
return {x: a.x, y: a.y}
}
if (O(x)) {
return xy(a, x.x, x.y)
}
y = N(y) ? y : x
if (F(x) && F(y)) {
a.x(x);
a.y(y)
}
else {
a.x = x;
a.y = y
}
return a
}


XY = function (a, x, y) {
var g = G(arguments)
if (g.p) {
a.x += x
a.y += N(y) ? y : x
}

return a
}


xyx = function xy(o, x, y) {
if (O(x)) {
return xy(o, x.x, x.y)
}
;
o.x = x;
o.y = y;
return o
}


//logic
rat = function r(f, i) {

var sampleFunc = _v('_b().c()')

f = f || sampleFunc

var z = function z() {

var g = G(arguments)

if (z.z) {

if (g.P) {

clearInterval(z.z)

z.z = 0
}

}

else {

if (g.N) {

z.z = I(f, z.i)
}

}


}


z.i = i || 1000
z.z = I(f, z.i)

return z
}


//recursive map function
//pass a function and array.  it maps the array,
// but if it finds another array, it recursively maps it

rc = function self(f, a) {


if (_.isUndefined(a)) {
return _.partial(self, f)
}

else return _.map(a, function (a) {

if (A(a)) {
return self(f, a)
}

else return f(a)

})

}


$r = function (a, b) {
a = a || 'c';
return Oo(a, b)
|| V(oO(a))[_r(_z(V(a)) - 1)]
}
//random
rnd = function (a) {
return $M.random(a)
}


r1 = rnd1 = function () {
return rnd() + 0.1
}
r10 = function () {
return rnd() * 10
}

b0 = false
b1 = true
oo1 = 0.001
yn = function () {
return rnd() > 0.5
}
rou = $M.round

//math
tFx = function (a, b) {
return a.toFixed(b || 3)
}
unit = function (v) {
return {x: v.x / v.l(), y: v.y / v.l()}
}

//math
ng = function (n) {
return n * (-1)
}
adj = function (a) {
if (O(a)) {
adj(a.x);
adj(a.y);
return a
}
return a <= 10 ? a *= 100 : a
}

cos = $M.cos;
sin = $M.sin;
PI = $M.PI

GRAV = 9.81

//returns abs value of num
//returns abs value of diff of two nums

abs = function (a, b) {


return N(b) ? abs(a - b) : $M.abs(a)

}

//returns sum of squares
sq = function f(a) {
var g = G(arguments), n = 0

_e(g, function (a) {
n += (a * a)
})

return n
}


//returns sqroot of one num
//return sqroot of sum of squares
sqr = function (a, b) {
var g = G(arguments);
return $M.sqrt(U(b) ? a : _a(sq, g))
}


HSL = function (a, b, c) {
if (U(a)) {
return HSL(rnd() * 360, 100, 50)
}
return C$.Graphics.getHSL(a, b, c)
}


$V = function v(a, b, c, d) {//returns coords needed for centering

var g = G(arguments), o, a = g[0]

if (N(d)) {
return v((a - c) / 2, (b - d) / 2)
}

if (A(a)) {
return _a(v, a)
}

if (O(a)) {
return v(F(a.x) ? a.x() : a.x, F(a.y) ? a.y() : a.y)
}

a = a || 0
b = b || a || 0
o = {x: a, y: b}

return o
}


pi = function (a) {
return (a < 0 ? -1 / a : a) * PI
}

tRad = function (d) {
return d * pi(1 / 180)
}
tDeg = function (r) {
return r * (180 / pi(1))
}
inv = function (v) {
return $V((-v.x), (-v.y))
}
add = function (a, b) {
return $V(a.x + b.x, a.y + b.y)
}
subtract = function (a, b) {
return $V(a.x - b.x, a.y - b.y)
}


ave = function ave(a) {
var g = G(arguments),
z = _z(g), n = 0;

if (A(a)) {
return _a(ave, a)
}

_e(g, function (a) {
n += a
})

return n / z
}


xyz = function (a, b) {
a = a || {};
a.x = a.x || 0;
a.y = a.y || 0;
a.z = a.z || 0
b = b || {};
b.x = b.x || 0;
b.y = b.y || 0;
b.z = a.z || 0


return sqr(a.x - b.x, a.y - b.y, a.z - b.z)
}


dst = function dst(a, b) {

if (A(a) && U(b)) {
return dst(a[0], a[1])
}


if (U(b)) {
return xyz($V({}), $V(a))
}


return xyz($V(a), $V(b))


}


rad = function (d) {
var r

if (O(d)) {
d = d.rt()
}
r = d * (3.14 / 180)
return r
}


frict = function (v, force) {
v = v * force
return v
}


rectHit = function (x1, y1, w1, h1, x2, y2, w2, h2) {


}


circHit = function (c1, c2) {
var sum, dist, rads

sum = sqr(c1.x() - c2.x()) + sqr(c1.y() - c2.y())

dist = sqrt(sum)

rads = c1.r + c2.r

return rads < dist

}


asin = Math.asin
acos = Math.acos
atan = Math.atan


//


//pi=function(a){return(a<0?-1/a:a)*PI}

$M = Math
sin = Math.sin
ceil = Math.ceil
flr = Math.floor
//pow=Math.pow
//cos=Math.cos;
//sin=Math.sin;
PI = Math.PI
//asin=Math.asin
//acos=Math.acos
//atan=Math.atan
pI = parseInt
//max=_.max
//GRAV=9.81
////


//////
Math.xyDep = function (a, x, y) {

if (U(x)) {

if (F(x) && F(y)) {
return {x: a.x(), y: a.y()}
}
return {x: a.x, y: a.y}
}

if (O(x)) {
return xy(a, x.x, x.y)
}
y = N(y) ? y : x
if (F(x) && F(y)) {
a.x(x);
a.y(y)
}
else {
a.x = x;
a.y = y
}
return a
}
Math.XYDep = function (a, x, y) {
var g = G(arguments)
if (g.p) {
a.x += x
a.y += N(y) ? y : x
}
return a
}
Math.xyxDep = function xy(o, x, y) {
if (O(x)) {
return xy(o, x.x, x.y)
}
;
o.x = x;
o.y = y;
return o
}


//returns abs value of num
//returns abs value of diff of two nums
Math.ab = abs = function (a, b) {
return N(b) ? abs(a - b) :
Math.abs(a)
}
//returns sum of squares
Math.sq = sq = function f(a) {
var g = G(arguments), n = 0

_.each(g, function (a) {
n += (a * a)
})

return n
}
//returns sqroot of one num
//return sqroot of sum of squares
Math.sqr = sqr = function (a, b) {
var g = G(arguments)
return Math.sqrt(U(b) ? a : _a(sq, g))
}


Math.particle = function (pos) {
var p = {}

p.p = pos
p.v = v2(0, 0)
p.pars = alive

p.u = function (td) {
p.p.iadd(p.v.muls(td))
}
return p
}


Math.vector = vec = function (x, y) {

var v = function v() {
}

v.x = x || 2

v.y = y || 2

v.sq = function () {
return sq(v.x, v.y)
}

v.abs = v.len = v.l = function () {
return sqr(v.sq())
}

v.add = v.a = function (a) {
var g = G(arguments)
if (g.n) {
a = (inv(a))
}
v.x += a.x;
v.y += a.y;
return v
}

v.scale = v.s = function (a) {
v.x *= a;
v.y *= a;
return v
}

v.unit = v.u = function () {
v.x = v.x / v.l();
v.y = v.y / v.l()
}

v.neg = v.n = function () {
v.x *= -1;
v.y *= -1
}

v.pow = v.p = function (a) {
return (v.x * a.x) + (v.y * a.y)
}

v.rotate = v.r = function (a) {
v.x = v.x * cos(a) - v.y * sin(a)
v.y = v.x * sin(a) + v.y * cos(a)
return v
}

v.toString = function () {
return '(' + tFx(v.x) + ',' + tFx(v.y) + ')'
}

v.v = v.toString

return v
}
unit = function (vec) {
return {x: vec.x / vec.l(), y: vec.y / vec.l()}
}
Math.vector = v2 = function (x, y) {

var v = {x: x, y: y}
v.muls = function (n) {
return v2(v.x * n, v.y * n)
}
v.imuls = function (n) {
v.x *= n;
v.y *= n;
return v
}
v.mul = function (vv) {
return v2(v.x * vv.x, v.y * vv.y)
}
v.imul = function (v) {
v.x *= vv.x;
v.y *= vv.y;
return v
}
v.divs = function (n) {
return v2(v.x / n, v.y / n)
}
v.div = function (n) {
return v2(v.x / vv.x, v.y / vv.y)
}
v.adds = function (n) {
return v2(v.x + n, v.y + n)
}
v.iadds = function (n) {
v.x += n;
v.y += n;
return v
}
v.add = function (vv) {
return v2(v.x + vv.x, v.y + vv.y)
}
v.iadd = function (v) {
v.x += vv.x;
v.y += vv.y;
return v
}
v.subs = function (n) {
return v2(v.x - n, v.y - n)
}
v.isub = function (n) {
v.x -= n;
v.y -= n;
return v
}
v.sub = function (vv) {
return v2(v.x - vv.x, v.y - vv.y)
}
v.isub = function (v) {
v.x -= vv.x;
v.y -= vv.y;
return v
}
v.set = function (x, y) {
v.x = x;
v.y = y
}

return v
}

Math.inverse = inv = function (v) {
return Math.V(-v.x, -v.y)
}
Math.add = function (a, b) {
return Math.V(a.x + b.x, a.y + b.y)
}
Math.subtract = function (a, b) {
return Math.V(a.x - b.x, a.y - b.y)
}

vup=function(a){
return _m(a||keys(oO('c'),
function(a){
return $v(a)
})}



mD=function(p,V){
var m={dist:$8,index:-1}

p=$v(p), ar=[], V=V||vup(), d=$8

_e(V, function(v,k){
v=$v(v)              // $l(p(v))
if(p(v) < d){
ar.unshift(_D({dist:p(v),
dx: p.x-v.x,
dy: p.x-v.y,
dz: p.x-v.z},v))
d=p(v)}})
$l(ar[0].C )
return ar}


shortNametoRgbStr=function(a){
var c=css(tag()),a=a||'a';
c('c',a); return   c('c')  }

isRgbStr=function(a){return c$(a,'rgb(')}

rgbStrToVecOb=function(a){
a=a.replace(/[^\d,]/g,'').split(',')
return {x:pI(a[0]),
y:pI(a[1]),
z:pI(a[2])}}



// 'rgb(0,1,1)'-> obj
rgbStrToColor=function(a){
var o=rgbStrToVecOb(a)
o=mD(o)[0];
return o}


strToVec=function(a){var s=a||'c'
if(!isRgbStr(s)){s=shortNametoRgbStr(s)}
if(isRgbStr(s)){s=rgbStrToVecOb(s)}
s.c=a;s.C=oO('c',a)
return s}


$v=function $v(x,y,z){
if(U(x)){return $v(0)}
if(x.name=='v'){return x}
var o=function v(a,b,c){return dst(v,$v(a,b,c))}
if(F(x)){ return x(y.x, y.y, y.z)}
if(O(x)){ return $v($v,x)}

if(S(x)){ return _D(o, strToVec(x))}
//s if(S(x)){x=rgb(x)}

if(A(x)){return U(y) ? $a($v,x): _m(arguments, $v)}
o.x=x||0;
o.y=y||0;
o.z=z||0;
o.c=C
return o}




tD=function (a){if(a.toDataURL){return a.toDataURL()};
if(a.u){return a.u()};return a}

tU=function (a){
if(a.src){return a.src}
if(a.image){return a.image.src};
a=tD(a);if(iU(a)){return a};return src(a)}  //s/c/C/i/b->s sync




$cat=function(){return(_.r(arguments,function(a,b){return a+tS(b)},''))}
$log=function(a){$c.l(tS(a));return a}
$l=function(){return $log(eval($a('$cat')))}
$do=function(a,b){if(iF(b)){b(a)};if(iS(b)){$w[b]=a};return a}
$df=function(a,b){return(!iW(a))?a:b}



$V=function(a,b,c,d){a=a||0;if(d){return $V((a-c)/2,(b-d)/2)};
if(iA(a)){return $V(a[0],a[1])};if(iN(a)){return $V({x:a, y:b})}
var x=a.x||0, y=$df(a.y,x);return {x:x,y:y}}


$fir=function(a,b){return (b)?ind(a,b)==0:a[0]}//:1->last char,2:isLastChar?
$lst=function(a,b){return(b)?ind(a,b)==_l(b)-1:a[_l(a)-1]}
$wof=function(a,b){return _sl(ind(a,b),_l(b),b)}//2:removes all before first(IndexOf)
$h=function(a,b){
if(iN($i(a,b))){a=_m(_e(a,'g'),b);
return(a)?_l(a):false}}//2:howMany

dst=function f(a,b){var g=G(arguments)
if(O(a)){g=ja(a,b);a=g[0];b=g[1]}
if(A(a)){return sqr.apply(this,
_m(a, function(v,k){return f(v, b[k])}))}
return abs(a,b)}

xyz=function(x,y,z,l){
if(A(x)){z=x[2];y=x[1];x=x[0]}
return {x:x,y:y,z:z,l:l,
dst:function f(a,b,c){
if(O(a)){return dst(this, a)}
if(A(a)) return f({x:a[0],y:a[1],z:a[2]})}}}



tH=function(p){
p=(p.x*(256*256)+p.y*256+ p.z).toString(16)
while(_z(p)<6){p="0"+p}
return "#"+p}

mD=minDist=function(p,Pnts){var P=po(p),m={di:Infinity, in:-1}
_e(Pnts,function(p, pI){
if(P.di(p)<m.di){m={   p:p,  d:P.di(p), l:p   }
}}); return m}




cc= function(a){a=tA(a)
var g=G(arguments), c=O.a.c
return $a(c, g.r, tA(a) )}
cc.c=function(){return cc(M(arguments,tA))}

cc              =function(a){a=$g(a);
if(!A(a)){a=[a]};
return a.concat.apply(a, _r(arguments))}
$cat=function(){return(_.r(arguments,function(a,b){return a+tS(b)},''))}
ccc  =function(){return _cc(map(arguments,tA ))}
cc=  function(a,b,c){return __a( _$A.concat, tA(a), _r(arguments))}


_a=function(a,b,c){return a.apply(c||a, b)}  //=app

ap=f("return a.apply(c||this,b)");
a0=function a0(a,b,o){var g=G(arguments)

if(F(a)&&  A(b)&&  !(U(o)||O(o))){
return _a(m, b, o)}                                    //met-fn, [pam,pam..], [ctx||met-fn]

if(!U(b)){
return a0(m,_r(g))}}               //what if ags are not IN an arr..?
$a=function(m,gA,o){var g=G(arguments)
return S(m)?
a1(m,gA,o)
: a0(m,gA,o ) || G(m) || m}
apply=function(a){
return function(){eval(g$);
return app(fG[a], rG, fG)}}
__a=function(a,b,c){return a.apply(b,c)},
_a=function(m,g,o){return pp(m,o||m,g)}
a1=function(a,b){var g=G(arguments)// for dynamic method calling!!// you can pass it a string and the obj//met-key@, met-ob, pam,pam...  (applied to met-ob)
return  _a( b[a], _r(g, 2), b )}
_a=function(a){return function(){return a.apply(a, arguments)}}
_a.t0=function( a,b,c ){return a+b+c}
_a.t=function (){ var t=this; return t(t.t0)(1,1,100)};
ap= function(a,b,c){ return a.apply(c||this, b) }
apa= function(a){return function(){eval(g$);
return ap(fG[ a ], rG, fG)}}

ccc = function(a){return function(){eval(g$);fG[a].apply(fG, rG)}}

//m->G->g1[m].a(fG, rG)
//ex:                     c=apa('concat'); c('a','b','c')    //takes @
apa=function(m){return f("eval(g$); return ap(fG[m],rG,fG)")   }
//o->m->apa(o[m])
//ex:                         j=apo(JS)('c'); j('a','b','c')  //takes O
apo=function(o){return function(m){return apa(o[m])}}
//apo=f("return function(m){return apa(a[m])}");
//o->G->o[fG].a(o, rG)/ex:
//a={a:100,b:f(a){<- a*t.a}};  c=apd(a) //c('b', 3)     //O
apd=function(o){return function(){eval(g$);
return ap(o[fG],rG,o)}}
//o->G->o[fG].a(fG, G[2]+)??
// c=ape(JS) //c('c',[1],[2],[3])
ape=function(o){return function(){eval(g$);  //O
var m=G.shift(); c=G.shift();
return ap(c[o[m]], G, c)}}
JS={ p:"pop",u:"push", h:"shift",n:"unshift",
s:"split",  l:"slice",  sp:"splice",  ts:"toString",
j:"join",   r:"replace",   t:"trim", m:"match",  v:"reverse",
c:"concat",  i:"indexOf", li:"lastIndexOf",   a:"charAt"};
apo= $f('$f("apa("+ js(a)+ "[a])")')
apd= $f("function(){ eval(g$); return ap(a[fG], rG,a)}")
ape= $f('$ft("var m = g.shift(), c = g.shift(); t = ap(c["+ js(a)+ "[m]],g,c)")')


$a2=function(a,b,c){var g=G(arguments)
if(F(a)){return a.apply(c||a, b)}
return  _a(b[a],   _r(g,2),  b)}
$a=function(a,b,c){var g=G(arguments)
return U(b)? _p($a, a)
:F(a)? _a(a,b,c)
:_a(a[b], _r(g, 2), a)}
$a=function l(a,b,c){var g=$g(arguments),
p=function(a,b,c){a.apply(b,c)}
return S(a)? p(b[a],b,_r(g,2)):
A( b=$g(b))? p(a,c||a,b):
l(a,_r(g))}
$a.f=function f(a, b,c){var g=G(arguments)
return A(b)? _a(a,b, c):                                    //met-fn, [pam,pam..], [ctx||met-fn]
f(a, _r(g))}               //what if ags are not IN an arr..?
$a.a=function(a,b,c){return S(b)? aS(b,c,a):aF(b,a,c) }
$a.s=function(a,b){var g=G(arguments)  // for dynamic method calling!!// you can pass it a string and the obj//met-key@, met-ob, pam,pam...  (applied to met-ob)
return  _a(b[a], _r(g,2),b)}




_a=function(a){return function(){return a.apply(a, arguments)}}
_a.t0=function( a,b,c ){return a+b+c}
_a.t=function (){var t=this; return t(t.t0)(1,1,100)   }



_U=function(a,b){

if(U(a)){
$f(b)(a,b)
}


}




cat=function(){ var g=G(arguments)
return _r(g, function(a,b){
return a+ _S(b)}, '')}

sr=function(a,b){
if( U(b) ){return a}
if(S(b)){ $w[b]=a}
return F(b)? b(a) : a}


fnS="var t=this,g=G(arguments)"





fn=function(j, ff){

var f=function(a){

var f=function(DEF){return new Function(
'a','b','c','d', DEF)}

,F=function(DEF){
return f("return "+ DEF)}

,r=F("'return('+$t(a)+');'")

,b= _l( _s(';', a) )

return f( _r(
';' + b,
';' + r(b),
fnS + (a==b ? r(a) : A) ))}


if(!j||F(j)){return j}

if(S(j)){j=f(j)}

return ff? ff(j):  j}


DEF=function(a,b){
var z=F("(a)?'='+a:''"),
v=f("a=_s(':',a);return a[0]+z(a[1])"),
m=F("_j(d,_.m(_s(b,a),c))"), //<3=splMapJnWr=magic
V=F("'var '+m(a,',',v,',')+';'");
if(!b){
b=a;a="g:G(arguments)"}
return V(a)+'\n'+BODY(b)}



$df=function(a,b){return($w[a]?b:a}

$V=function v(a,b,c,d){
if(!(A(a)||N(a))){
var x=a.x||0,
y=$df(a.y, x)
return {x:x, y:y}}
return A(a=a||0)? v(a[0], a[1])
:N(d)? v((a-c)/2, (b-d)/2)
:v({x:a, y:b})}


$do=function(a,b){if(F(b)){b(a)}
return S(b)?($w[b]=a):a}

iff=function i(a,y,n){
if(a){
if(is('f', y)){
y(a)}
else {eval(y)}
return a}
if(n){i(!a,n)}
return a}


a_=function(a,b,c){ff(A(a),b,c);return a}
f_=function(a,b,c){i_(F(a),b,c);return a}
s_=function(a,b,c){i_(S(a),b,c);return a}
n_=function(a,b,c){i_(N(a),b,c);return a}
o_=function(a,b,c){i_(O(a),b,c);return a}



ifDoElse=ide=function i(v,y,n){if(v){eval(y)};i(!v,n);return v}


sr =function(a,b){if(!b){return a}

if(S(b)){$w[b]=a};
if(F(b)){b(a)}
return a}


IS={
'0':function(a){return a==0},
a:iA,
b:function(a){return _s(a)=="[Bitmap (name=null)]"},
bl:_.isBoolean, c:function(a){return _s(a)=="[object HTMLCanvasElement]"}   ,
d:_.isDate,
e:_.isEmpty,
f:iF,
fi:_.isFinite,
g:_.isArguments,
h:_.isElement,
i:function(a){return _s(a)=="[object HTMLImageElement]"} ,
l:function(a){return(iO(a)||iA(a))},
n:iN,
na:_.isNaN,
nl:_.isNull,
ng:function(a){return _.isNumber(a)&&a<0},
ps:function(a){return _.isNumber(a)&&a>0},
nn:function(a){return _.isNumber(a)&&a>=0},
np:function(a){return _.isNumber(a)&&a<=0},
o:iO,
r:_.isRegExp,
s:iS,
sy:function(a){return a==(')')|| a==('(')||  a==(']')||  a==('[')    }   ,

w:function(a){return a==$W},
'=':function(b,c){return b==c}  ,
'==':function(b,c){return b===c}  ,
'!':function(b,c){return b!=c}  ,
'!=':function(b,c){return b!==c}  ,
'=':function(b,c){return b==c}  ,
'<':function(b,c){return b<c}  ,
'>':function(b,c){return b>c}  ,
'<=':function(b,c){return b<=c}  ,
'>=':function(b,c){return b>=c}  ,
ud:_.isUndefined,
'*':function(){return true}}

than=function(){}
sy=function(a){return a=='('||a==')'||a=='['||a==']'},

is=function(a,b,c){return IS[a](b,c)}
not=function(a,b,c){return !is(a,b,c)}
and=function(a,b,c){return E(_s(a,','),function(a){return is(a,b,c)})};
or=function(a,b){return S(_s(a,','),function(a){return is(a,b)})};
nand=function(a,b){return !and(a,b)}
nor=function(a,b){return !or(a,b)}

what=function(a){
var o={ d:iD(a)||'',u:iU(a)||'',_:i_(a)||'',
$:i$(a)||'',b:iB(a)||'',n:iN(a)||'',np:iNp(a)||'',
nn:iNn(a)||'', '0':i0(a)||'','8':i8(a)||'', n_:iN_(a)||'',s:iS(a)||'',a:iA(a)||'',sa:iSA(a)||'',o:iO(a)||'',l:iL(a)||'',f:iF(a)||'',e:iE(a)||'',h:iH(a)||'',g:iG(a)||'',d:iD(a)||'',r:iR(a)||''};return o}


any=function(a,b){return S(_s(a,','),function(a){return b==a})}


function math(){

function oldMath() {




$r=function(a,b){a=a||'c';return Oo(a,b)
||V(oO(a))[_r(_z(V(a))-1)]}
//random
rnd=function(a){return $M.random(a)}


r1=rnd1=function(){return rnd()+0.1}
r10=function(){return rnd()*10}

b0=false
b1=true
oo1=0.001
yn=function(){return rnd()>0.5}
rou=$M.round

//math
tFx=function(a,b){return a.toFixed(b||3)}
unit=function(v){return {x:v.x/v.l(),y:v.y/v.l()}}

//math
ng=function(n){return n*(-1)}
adj=function(a){
if(O(a)){adj(a.x);adj(a.y);return a}
return a<=10?a*=100:a}

cos=$M.cos; sin=$M.sin; PI=$M.PI

GRAV=9.81

//returns abs value of num
//returns abs value of diff of two nums

abs=function(a,b){


return N(b)?abs(a-b):$M.abs(a)

}

//returns sum of squares
sq=function f(a){
var g=G(arguments),  n=0

_e(g, function(a){n += (a*a)})

return n}


//returns sqroot of one num
//return sqroot of sum of squares
sqr=function(a,b){var g=G(arguments);return $M.sqrt(U(b)?a: _a(sq,g))}






HSL=function(a,b,c){
if(U(a)){return HSL(rnd()*360,100,50)}
return C$.Graphics.getHSL(a,b,c)}





$V=function v(a,b,c,d){//returns coords needed for centering

var g=G(arguments),o,a=g[0]

if(N(d)){
return v((a-c)/2, (b-d)/2)  }

if(A(a)){return _a(v,a)}

if(O(a)){return v(F(a.x)? a.x():a.x,F(a.y)? a.y(): a.y)}

a=a||0
b=b||a||0
o={x:a,y:b}

return o}






pi=function(a){return(a<0?-1/a:a)*PI}

tRad=function(d){return d*pi(1/180)}
tDeg=function(r){return r*(180/pi(1))}
inv=function(v){return $V((-v.x),(-v.y))}
add=function(a,b){return $V(a.x+ b.x,a.y+ b.y)}
subtract=function(a,b){return $V(a.x-b.x,a.y-b.y)}


ave=function ave(a){var g=G(arguments),
z=_z(g),  n=0;

if(A(a)){return _a(ave,a)}

_e(g,function(a){n+=a})

return n/z}



xyz=function(a,b){
a=a||{};a.x= a.x||0; a.y= a.y||0;a.z= a.z||0
b=b||{}; b.x= b.x||0; b.y= b.y||0; b.z= a.z||0


return sqr(   a.x-b.x,  a.y-b.y,  a.z-b.z  )}




dst =function dst(a,b){

if(A(a) && U(b)){  return dst(a[0], a[1]) }


if(U(b)){return  xyz( $V({}), $V(a)   )  }


return xyz( $V(a), $V(b)   )


}









rad=function(d){var r

if(O(d)){d= d.rt()}
r=  d * (3.14/180)
return r }



frict=function(v,force){
v=v*force
return v
}







rectHit=function(x1,y1,w1,h1,x2,y2,w2,h2){






}




circHit=function(c1,c2){
var sum,dist,rads

sum= sqr( c1.x()-c2.x()  ) +   sqr( c1.y()-c2.y()  )

dist=sqrt(sum)

rads=c1.r+c2.r

return rads < dist

}



asin=Math.asin
acos=Math.acos
atan=Math.atan









//pi=function(a){return(a<0?-1/a:a)*PI}

$M=Math
sin=Math.sin
ceil=Math.ceil
flr=Math.floor
//pow=Math.pow
//cos=Math.cos;
//sin=Math.sin;
PI= Math.PI
//asin=Math.asin
//acos=Math.acos
//atan=Math.atan
pI=parseInt
//max=_.max
//GRAV=9.81
////




//////
Math.xyDep =  function(a,x,y){

if(U(x)){

if(F(x)&&F(y)){
return {x:a.x(),y: a.y()}}
return {x:a.x,y:a.y}
}

if(O(x)){return xy(a,x.x,x.y) }
y=N(y)?y:x
if(F(x)&&F(y)){a.x(x);a.y(y)}
else{a.x=x;a.y=y}
return a
}
Math.XYDep =  function(a,x,y){
var g=G(arguments)
if(g.p){
a.x +=x
a.y +=N(y)? y: x
}
return a}
Math.xyxDep =  function xy(o,x,y){
if(O(x)){return xy(o,x.x,x.y)};
o.x=x;o.y=y;
return o}


//returns abs value of num
//returns abs value of diff of two nums
Math.ab = abs=function(a,b){
return N(b)?abs(a-b):
Math.abs(a)
}
//returns sum of squares
Math.sq = sq=function f(a){
var g=G(arguments),  n=0

_.each(g, function(a){n += (a*a)})

return n}
//returns sqroot of one num
//return sqroot of sum of squares
Math.sqr = sqr=function(a,b){
var g=G(arguments)
return Math.sqrt(U(b)?a: _a(sq,g))}


Math.particle=function(pos){
var p={}

p.p=pos
p.v = v2(0,0)
p.pars=alive

p.u=function(td){
p.p.iadd(p.v.muls(td))}
return p}



Math.vector =vec=function(x,y){

var v=function v(){}

v.x= x||2

v.y =y||2

v.sq=function(){return sq(v.x, v.y)}

v.abs = v.len = v.l=function(){return sqr( v.sq() )}

v.add = v.a=function(a){var g=G(arguments)
if(g.n){a=(inv(a))}
v.x+= a.x;
v.y+= a.y;
return v}

v.scale = v.s=function(a){
v.x*= a;
v.y*= a;
return v}

v.unit = v.u=function(){
v.x= v.x/v.l();
v.y=v.y/v.l() }

v.neg = v.n=function(){v.x*=-1;  v.y*=-1}

v.pow = v.p=function(a){
return (v.x*a.x)+(v.y*a.y)}

v.rotate = v.r=function(a){
v.x=v.x*cos(a)-v.y*sin(a)
v.y=v.x*sin(a)+v.y*cos(a)
return v}

v.toString=function(){
return '('+tFx(v.x)+','+ tFx(v.y)+')'}

v.v=v.toString

return v
}
unit=function(vec){return {x:vec.x/vec.l(),y:vec.y/vec.l()}}
Math.vector=v2=function(x,y){

var v={x:x,y:y}
v.muls=function(n){return v2(v.x*n, v.y*n)}
v.imuls=function(n){v.x*=n;v.y*=n;return v}
v.mul=function(vv){return v2(v.x*vv.x, v.y*vv.y)}
v.imul=function(v){v.x*=vv.x;v.y*=vv.y;return v}
v.divs=function(n){return v2(v.x/n, v.y/n)}
v.div=function(n){ return v2( v.x/vv.x,v.y/vv.y)  }
v.adds=function(n){return v2(v.x+n,v.y+n)}
v.iadds=function(n){v.x+=n;v.y+=n;return v}
v.add=function(vv){return v2(v.x+vv.x, v.y+vv.y)}
v.iadd=function(v){v.x+=vv.x;v.y+=vv.y;return v}
v.subs=function(n){return v2(v.x-n, v.y-n)}
v.isub=function(n){v.x-=n;v.y-=n;return v}
v.sub=function(vv){return v2(v.x-vv.x, v.y-vv.y)}
v.isub=function(v){v.x-=vv.x;v.y-=vv.y;return v}
v.set=function(x,y){v.x=x;v.y=y}

return v}

Math.inverse = inv=function(v){
return Math.V(-v.x,-v.y)
}
Math.add =  function(a,b){
return Math.V(a.x+ b.x,a.y+ b.y)}
Math.subtract =  function(a,b){
return Math.V(a.x-b.x,a.y-b.y)}

//

$M=Math
sin=$M.sin
ceil=$M.ceil
flr=$M.floor
pow=$M.pow
max=_M=_.max




pI=parseInt



//logic
ff=function f(a){return new $F(
"a","b","c","d","e","var g=G(arguments),"+
"t=this;"+a+";return t")}
ffr=function f(a){return new $F(
"a","b","c","d","e","var g=G(arguments);return("+a+")")}

$do=function(b,f){if(F(f)){f(b)};if(S(f)){$w[f]=b};return b}

xy=function(a,x,y){
if(U(x)){if(F(x)&&F(y)){
return {x:a.x(),y: a.y()}}
return {x:a.x,y:a.y}}
if(O(x)){return xy(a,x.x,x.y) }
y=N(y)?y:x
if(F(x)&&F(y)){a.x(x);a.y(y)}
else{a.x=x;a.y=y}
return a}


XY=function(a,x,y){var g=G(arguments)
if(g.p){a.x+=x
a.y+=N(y)?y:x}

return a}


xyx=function xy(o,x,y){
if(O(x)){return xy(o,x.x,x.y)};
o.x=x;o.y=y;
return o}




//logic
rat=function r(f,i){

var sampleFunc=_v('_b().c()')

f=f||sampleFunc

var z=function z(){

var g=G(arguments)

if(z.z){

if(g.P){

clearInterval(z.z)

z.z=0
}

}

else {

if(g.N){

z.z = I(f, z.i)
}

}


}


z.i=i||1000
z.z=I(f,z.i)

return z}










//recursive map function
//pass a function and array.  it maps the array,
// but if it finds another array, it recursively maps it

rc=function self(f,a){


if(_.isUndefined(a)){return _.partial(self, f)}

else return _.map(a, function(a){

if(A(a)){return self(f,a)}

else return f(a)

})

}




}
_.sz = _z = function z(a, b, c) {
return U(b) ? _.size(a)
: N(b) ? _z(a) == b
: _z(a) == _z(b)
}
_.pI = M.pI = _.tI = function (a, b) {
if (U(b)) {
return parseInt(a)
}
return parseInt(_.tN(a, b))
//_.pI = parseInt//_.tI = function (a, b) {return parseInt(_.tN(a, b))}

}
_.adj = function (income, tax) {
//tax ~ deltaLimit ~ buffer
var income = income || 0, tax = tax || 0
if (income > 0) {
return income > tax ? income - tax : 0
}
return -income > tax ? income + tax : 0
}
_.cap = function (n, m, M) {
if (U(m)) {
return n
}
if (A(m)) {
M = m[1]
m = m[0]
}
return n < m ? m
: n > M ? M
: n
}
R=function(n,n2){var num
n=N(n)?n:1
n2=N(n2)?n2:0
return M.round((M.random()*n)+n2)
}
function number() { V=function(x,y){ return {x:x, y:y}}

dim = function () {
_.wd = function (a, b) {

if (O(a)) {

var w = function (a, b) {
if (U(b)) {
return a.width
}
a.width = b;
return a
}
if (U(b)) {
return F(w(a)) ? a.width() : w(a) ? w(a) : _.isFunction(a.w) ? a.w() : a.w
}
if (F(w(a))) {
a.width(b)
}
else if (w(a)) {
w(a, b)
}
else if (F(a.w)) {
a.w(b)
}
else {
a.w = b
}
return a
}
}
_.sz = _z = function z(a, b, c) {
return U(b) ? _.size(a)
: N(b) ? _z(a) == b
: _z(a) == _z(b)
}
_.ht = function (a, b, c) {
if (O(a)) {
if (U(b)) {
return a.height ? (F(a.height) ? a.height() : a.height) :
_.isFunction(a.h) ? a.h() : N(a.h) ? a.h : false
}
if (N(b)) {
if (F(a.height)) {
a.height(b);
return a
}
if (N(a.height)) {
a.height = b;
return a
}
if (F(a.h)) {
a.h(b);
return a
}
if (N(a.h)) {
a.h = b;
return a
}
}


}
}
};dim()
REL=function(g,q){
sG=size(g);  sQ=size(q);
return {
G:sG, Q:sQ,
more: sG > sQ,
less:  sG < sQ,
same: sG == sQ,
notLess :sG >= sQ,
notMore : sG <= sQ}
}
//  nN=function(w){return Boolean(Number(w))}//M=
//  Nn = _.isNan
M.tN = _.tN = function (what, aNum) {return N(what) ? what : aNum || 0}

}
function Math() {  M.tN = _.tN = function (what, aNum) {return N(what) ? what : aNum || 0}
M.fl = M.floor
M.c = M.cos;
M.s = M.sin
M.tD = M.toDegrees = tDeg = function (r) {
return r * (180 / M.PI)
}
M.tR = M.toRadians = M.toRads = tRad = rad = function (degs) {
if (O(degs)) {
degs = degs.rotation
}
return degs * M.PI / 180
}
M.av = M.avg = M.average = function self(a, b) {
var g = G(arguments), z = _.size(g), n = 0;


if (A(a)) {
return _a(self, a)
}

if (O(a)) {

return V(
M.av(a.x, b.x),
M.av(a.y, b.y)
)

}

_.e(g, function (a) {
n += a
})
return n / z
}
M.dst = M.distance = dst = function self(a, b) {


M.xyz = xyz = function (a, b) {
a = a || {};
a.x = a.x || 0;
a.y = a.y || 0;
a.z = a.z || 0
b = b || {};
b.x = b.x || 0;
b.y = b.y || 0;
b.z = a.z || 0


return sqr(a.x - b.x, a.y - b.y, a.z - b.z)

function sqr(a, b) {
var g = G(arguments)
return M.sqrt(U(b) ? a
: sq.apply(this, g))
}

function sq(a) {
var g = G(arguments), n = 0
_.each(g, function (a) {
n += (a * a)
})

return n
}
}


if (A(a) && U(b)) {
return self(a[0], a[1])
}


if (U(b)) {
return xyz(M.V({}), M.V(a))
}


return xyz(M.V(a), M.V(b))


}
M.lD = M.dist = M.lineDistance = function (p1, p2) {
var xs = 0, ys = 0;

p1 = V(p1)
p2 = V(p2)
xs = p2.x - p1.x;
xs = xs * xs;

ys = p2.y - p1.y;
ys = ys * ys;

return M.sqrt(xs + ys);
}
M.lC = M.lineCenter = function (x1, y1, x2, y2) {
if (A(x1)) {

if (N(x1[3])) {
return center(x1[0], x1[2], x1[2], x1[3])
}
return center(x1[0], x1[1], y1[0], y1[1])
}
if (O(x1)) {
return center(x1.x, x1.y, y1.x, y1.y)
}
return center(x1, y1, x2, y2)
function center(x1, y1, x2, y2) {
var x, y

if (x1 > x2) {
upperX = x1;
lowerX = x2
}
else {
upperX = x2;
lowerX = x1
}

if (y1 > y2) {
upperY = y1;
lowerY = y2
}
else {
upperY = y2;
lowerY = y1
}

x = lowerX + (upperX - lowerX) / 2
y = lowerY + (upperY - lowerY) / 2

return V(x, y)
}
}
M.pIC = M.pointInCircle = function (x, y, circle) {
var withinX, withinY
withinX = x < circle.x + circle.radius && x > circle.x - circle.radius
withinY = y < circle.y + circle.radius && y > circle.y - circle.radius
return withinX && withinY
}//Y.pointInCircle = pntInCir =
M.pIR = M.pointInRect = Math.pointInRectangle = function (x, y, rect) {
var withinX, withinY
var halfwidth = (rect.width || rect.w) / 2
var halfheight = (rect.height || rect.h) / 2
//assumes center
withinX = x < rect.x + halfwidth && x > rect.x - halfwidth
withinY = y < rect.y + halfheight && y > rect.y - halfheight
return withinX && withinY
}
M.circlesOverlap = function (c1, c2) {
alert('M.circlesOverlap')
var sum, dist, rads
sum = sqr(c1.x - c2.x) + sqr(c1.y - c2.y)
dist = sqrt(sum)
rads = c1.r + c2.r
return rads < dist
}
M.warp = function (lowBound, highBound, cushion) {//wrp=
cushion = cushion || 0
return function (num) {
return num < lowBound ? highBound - cushion
: num > highBound ? lowBound + cushion
: num
}
}
M.u = _.upd = function (curr, update, g) {
var res
if (g.p) {
res = curr + update
}
else if (g.n) {
res = curr - update
}
else if (g.m) {
res = curr * update
}
else if (g.d) {
res = curr / update
}
else res = update
return res
}

}
Math = function () {
M.tD = M.toDegrees = tDeg = function (r) {
return r * (180 / M.PI)
}
M.tR = M.toRadians = M.toRads = tRad = rad = function (degs) {
if (O(degs)) {
degs = degs.rotation
}
return degs * M.PI / 180
}
M.dst = M.distance = dst = function self(a, b) {


M.xyz = xyz = function (a, b) {
a = a || {};
a.x = a.x || 0;
a.y = a.y || 0;
a.z = a.z || 0
b = b || {};
b.x = b.x || 0;
b.y = b.y || 0;
b.z = a.z || 0


return sqr(a.x - b.x, a.y - b.y, a.z - b.z)

function sqr(a, b) {
var g = G(arguments)
return M.sqrt(U(b) ? a
: sq.apply(this, g))
}

function sq(a) {
var g = G(arguments), n = 0
_.each(g, function (a) {
n += (a * a)
})

return n
}
}


if (A(a) && U(b)) {
return self(a[0], a[1])
}


if (U(b)) {
return xyz(M.V({}), M.V(a))
}


return xyz(M.V(a), M.V(b))


}
M.lD = M.dist = M.lineDistance = function (p1, p2) {
var xs = 0, ys = 0;

p1 = V(p1)
p2 = V(p2)
xs = p2.x - p1.x;
xs = xs * xs;

ys = p2.y - p1.y;
ys = ys * ys;

return M.sqrt(xs + ys);
}
M.lineCenter = function (x1, y1, x2, y2) {
if (A(x1)) {

if (N(x1[3])) {
return center(x1[0], x1[2], x1[2], x1[3])
}
return center(x1[0], x1[1], y1[0], y1[1])
}
if (O(x1)) {
return center(x1.x, x1.y, y1.x, y1.y)
}
return center(x1, y1, x2, y2)
function center(x1, y1, x2, y2) {
var x, y

if (x1 > x2) {
upperX = x1;
lowerX = x2
}
else {
upperX = x2;
lowerX = x1
}

if (y1 > y2) {
upperY = y1;
lowerY = y2
}
else {
upperY = y2;
lowerY = y1
}

x = lowerX + (upperX - lowerX) / 2
y = lowerY + (upperY - lowerY) / 2

return V(x, y)
}
}
M.pointInCircle = function (x, y, circle) {
var withinX, withinY
withinX = x < circle.x + circle.radius && x > circle.x - circle.radius
withinY = y < circle.y + circle.radius && y > circle.y - circle.radius
return withinX && withinY
}//Y.pointInCircle = pntInCir =
M.pointInRect = Math.pointInRectangle = function (x, y, rect) {
var withinX, withinY
var halfwidth = (rect.width || rect.w) / 2
var halfheight = (rect.height || rect.h) / 2
//assumes center
withinX = x < rect.x + halfwidth && x > rect.x - halfwidth
withinY = y < rect.y + halfheight && y > rect.y - halfheight
return withinX && withinY
}
M.circlesOverlap = function (c1, c2) {
var sum, dist, rads
sum = sqr(c1.x - c2.x) + sqr(c1.y - c2.y)
dist = sqrt(sum)
rads = c1.r + c2.r
return rads < dist
}
M.warp = function (lowBound, highBound, cushion) {//wrp=
cushion = cushion || 0
return function (num) {
return num < lowBound ? highBound - cushion
: num > highBound ? lowBound + cushion
: num
}
}
};

vup=function(a){
return _m(a||keys(oO('c'),
function(a){
return $v(a)
})}



mD=function(p,V){
var m={dist:$8,index:-1}

p=$v(p), ar=[], V=V||vup(), d=$8

_e(V, function(v,k){
v=$v(v)              // $l(p(v))
if(p(v) < d){
ar.unshift(_D({dist:p(v),
dx: p.x-v.x,
dy: p.x-v.y,
dz: p.x-v.z},v))
d=p(v)}})
$l(ar[0].C )
return ar}


shortNametoRgbStr=function(a){
var c=css(tag()),a=a||'a';
c('c',a); return   c('c')  }

isRgbStr=function(a){return c$(a,'rgb(')}

rgbStrToVecOb=function(a){
a=a.replace(/[^\d,]/g,'').split(',')
return {x:pI(a[0]),
y:pI(a[1]),
z:pI(a[2])}}



// 'rgb(0,1,1)'-> obj
rgbStrToColor=function(a){
var o=rgbStrToVecOb(a)
o=mD(o)[0];
return o}


strToVec=function(a){var s=a||'c'
if(!isRgbStr(s)){s=shortNametoRgbStr(s)}
if(isRgbStr(s)){s=rgbStrToVecOb(s)}
s.c=a;s.C=oO('c',a)
return s}


$v=function $v(x,y,z){
if(U(x)){return $v(0)}
if(x.name=='v'){return x}
var o=function v(a,b,c){return dst(v,$v(a,b,c))}
if(F(x)){ return x(y.x, y.y, y.z)}
if(O(x)){ return $v($v,x)}

if(S(x)){ return _D(o, strToVec(x))}
//s if(S(x)){x=rgb(x)}

if(A(x)){return U(y) ? $a($v,x): _m(arguments, $v)}
o.x=x||0;
o.y=y||0;
o.z=z||0;
o.c=C
return o}




tD=function (a){if(a.toDataURL){return a.toDataURL()};
if(a.u){return a.u()};return a}

tU=function (a){
if(a.src){return a.src}
if(a.image){return a.image.src};
a=tD(a);if(iU(a)){return a};return src(a)}  //s/c/C/i/b->s sync




$cat=function(){return(_.r(arguments,function(a,b){return a+tS(b)},''))}
$log=function(a){$c.l(tS(a));return a}
$l=function(){return $log(eval($a('$cat')))}
$do=function(a,b){if(iF(b)){b(a)};if(iS(b)){$w[b]=a};return a}
$df=function(a,b){return(!iW(a))?a:b}



$V=function(a,b,c,d){a=a||0;if(d){return $V((a-c)/2,(b-d)/2)};
if(iA(a)){return $V(a[0],a[1])};if(iN(a)){return $V({x:a, y:b})}
var x=a.x||0, y=$df(a.y,x);return {x:x,y:y}}


$fir=function(a,b){return (b)?ind(a,b)==0:a[0]}//:1->last char,2:isLastChar?
$lst=function(a,b){return(b)?ind(a,b)==_l(b)-1:a[_l(a)-1]}
$wof=function(a,b){return _sl(ind(a,b),_l(b),b)}//2:removes all before first(IndexOf)
$h=function(a,b){
if(iN($i(a,b))){a=_m(_e(a,'g'),b);
return(a)?_l(a):false}}//2:howMany

dst=function f(a,b){var g=G(arguments)
if(O(a)){g=ja(a,b);a=g[0];b=g[1]}
if(A(a)){return sqr.apply(this,
_m(a, function(v,k){return f(v, b[k])}))}
return abs(a,b)}

xyz=function(x,y,z,l){
if(A(x)){z=x[2];y=x[1];x=x[0]}
return {x:x,y:y,z:z,l:l,
dst:function f(a,b,c){
if(O(a)){return dst(this, a)}
if(A(a)) return f({x:a[0],y:a[1],z:a[2]})}}}



tH=function(p){
p=(p.x*(256*256)+p.y*256+ p.z).toString(16)
while(_z(p)<6){p="0"+p}
return "#"+p}

mD=minDist=function(p,Pnts){var P=po(p),m={di:Infinity, in:-1}
_e(Pnts,function(p, pI){
if(P.di(p)<m.di){m={   p:p,  d:P.di(p), l:p   }
}}); return m}




cc= function(a){a=tA(a)
var g=G(arguments), c=O.a.c
return $a(c, g.r, tA(a) )}
cc.c=function(){return cc(M(arguments,tA))}

cc              =function(a){a=$g(a);
if(!A(a)){a=[a]};
return a.concat.apply(a, _r(arguments))}
$cat=function(){return(_.r(arguments,function(a,b){return a+tS(b)},''))}
ccc  =function(){return _cc(map(arguments,tA ))}
cc=  function(a,b,c){return __a( _$A.concat, tA(a), _r(arguments))}


_a=function(a,b,c){return a.apply(c||a, b)}  //=app

ap=f("return a.apply(c||this,b)");
a0=function a0(a,b,o){var g=G(arguments)

if(F(a)&&  A(b)&&  !(U(o)||O(o))){
return _a(m, b, o)}                                    //met-fn, [pam,pam..], [ctx||met-fn]

if(!U(b)){
return a0(m,_r(g))}}               //what if ags are not IN an arr..?
$a=function(m,gA,o){var g=G(arguments)
return S(m)?
a1(m,gA,o)
: a0(m,gA,o ) || G(m) || m}
apply=function(a){
return function(){eval(g$);
return app(fG[a], rG, fG)}}
__a=function(a,b,c){return a.apply(b,c)},
_a=function(m,g,o){return pp(m,o||m,g)}
a1=function(a,b){var g=G(arguments)// for dynamic method calling!!// you can pass it a string and the obj//met-key@, met-ob, pam,pam...  (applied to met-ob)
return  _a( b[a], _r(g, 2), b )}
_a=function(a){return function(){return a.apply(a, arguments)}}
_a.t0=function( a,b,c ){return a+b+c}
_a.t=function (){ var t=this; return t(t.t0)(1,1,100)};
ap= function(a,b,c){ return a.apply(c||this, b) }
apa= function(a){return function(){eval(g$);
return ap(fG[ a ], rG, fG)}}

ccc = function(a){return function(){eval(g$);fG[a].apply(fG, rG)}}

//m->G->g1[m].a(fG, rG)
//ex:                     c=apa('concat'); c('a','b','c')    //takes @
apa=function(m){return f("eval(g$); return ap(fG[m],rG,fG)")   }
//o->m->apa(o[m])
//ex:                         j=apo(JS)('c'); j('a','b','c')  //takes O
apo=function(o){return function(m){return apa(o[m])}}
//apo=f("return function(m){return apa(a[m])}");
//o->G->o[fG].a(o, rG)/ex:
//a={a:100,b:f(a){<- a*t.a}};  c=apd(a) //c('b', 3)     //O
apd=function(o){return function(){eval(g$);
return ap(o[fG],rG,o)}}
//o->G->o[fG].a(fG, G[2]+)??
// c=ape(JS) //c('c',[1],[2],[3])
ape=function(o){return function(){eval(g$);  //O
var m=G.shift(); c=G.shift();
return ap(c[o[m]], G, c)}}
JS={ p:"pop",u:"push", h:"shift",n:"unshift",
s:"split",  l:"slice",  sp:"splice",  ts:"toString",
j:"join",   r:"replace",   t:"trim", m:"match",  v:"reverse",
c:"concat",  i:"indexOf", li:"lastIndexOf",   a:"charAt"};
apo= $f('$f("apa("+ js(a)+ "[a])")')
apd= $f("function(){ eval(g$); return ap(a[fG], rG,a)}")
ape= $f('$ft("var m = g.shift(), c = g.shift(); t = ap(c["+ js(a)+ "[m]],g,c)")')


$a2=function(a,b,c){var g=G(arguments)
if(F(a)){return a.apply(c||a, b)}
return  _a(b[a],   _r(g,2),  b)}
$a=function(a,b,c){var g=G(arguments)
return U(b)? _p($a, a)
:F(a)? _a(a,b,c)
:_a(a[b], _r(g, 2), a)}
$a=function l(a,b,c){var g=$g(arguments),
p=function(a,b,c){a.apply(b,c)}
return S(a)? p(b[a],b,_r(g,2)):
A( b=$g(b))? p(a,c||a,b):
l(a,_r(g))}
$a.f=function f(a, b,c){var g=G(arguments)
return A(b)? _a(a,b, c):                                    //met-fn, [pam,pam..], [ctx||met-fn]
f(a, _r(g))}               //what if ags are not IN an arr..?
$a.a=function(a,b,c){return S(b)? aS(b,c,a):aF(b,a,c) }
$a.s=function(a,b){var g=G(arguments)  // for dynamic method calling!!// you can pass it a string and the obj//met-key@, met-ob, pam,pam...  (applied to met-ob)
return  _a(b[a], _r(g,2),b)}




_a=function(a){return function(){return a.apply(a, arguments)}}
_a.t0=function( a,b,c ){return a+b+c}
_a.t=function (){var t=this; return t(t.t0)(1,1,100)   }



_U=function(a,b){

if(U(a)){
$f(b)(a,b)
}


}




cat=function(){ var g=G(arguments)
return _r(g, function(a,b){
return a+ _S(b)}, '')}

sr=function(a,b){
if( U(b) ){return a}
if(S(b)){ $w[b]=a}
return F(b)? b(a) : a}


fnS="var t=this,g=G(arguments)"





fn=function(j, ff){

var f=function(a){

var f=function(DEF){return new Function(
'a','b','c','d', DEF)}

,F=function(DEF){
return f("return "+ DEF)}

,r=F("'return('+$t(a)+');'")

,b= _l( _s(';', a) )

return f( _r(
';' + b,
';' + r(b),
fnS + (a==b ? r(a) : A) ))}


if(!j||F(j)){return j}

if(S(j)){j=f(j)}

return ff? ff(j):  j}


DEF=function(a,b){
var z=F("(a)?'='+a:''"),
v=f("a=_s(':',a);return a[0]+z(a[1])"),
m=F("_j(d,_.m(_s(b,a),c))"), //<3=splMapJnWr=magic
V=F("'var '+m(a,',',v,',')+';'");
if(!b){
b=a;a="g:G(arguments)"}
return V(a)+'\n'+BODY(b)}



$df=function(a,b){return($w[a]?b:a}

$V=function v(a,b,c,d){
if(!(A(a)||N(a))){
var x=a.x||0,
y=$df(a.y, x)
return {x:x, y:y}}
return A(a=a||0)? v(a[0], a[1])
:N(d)? v((a-c)/2, (b-d)/2)
:v({x:a, y:b})}


$do=function(a,b){if(F(b)){b(a)}
return S(b)?($w[b]=a):a}

iff=function i(a,y,n){
if(a){
if(is('f', y)){
y(a)}
else {eval(y)}
return a}
if(n){i(!a,n)}
return a}


a_=function(a,b,c){ff(A(a),b,c);return a}
f_=function(a,b,c){i_(F(a),b,c);return a}
s_=function(a,b,c){i_(S(a),b,c);return a}
n_=function(a,b,c){i_(N(a),b,c);return a}
o_=function(a,b,c){i_(O(a),b,c);return a}



ifDoElse=ide=function i(v,y,n){if(v){eval(y)};i(!v,n);return v}


sr =function(a,b){if(!b){return a}

if(S(b)){$w[b]=a};
if(F(b)){b(a)}
return a}


IS={
'0':function(a){return a==0},
a:iA,
b:function(a){return _s(a)=="[Bitmap (name=null)]"},
bl:_.isBoolean, c:function(a){return _s(a)=="[object HTMLCanvasElement]"}   ,
d:_.isDate,
e:_.isEmpty,
f:iF,
fi:_.isFinite,
g:_.isArguments,
h:_.isElement,
i:function(a){return _s(a)=="[object HTMLImageElement]"} ,
l:function(a){return(iO(a)||iA(a))},
n:iN,
na:_.isNaN,
nl:_.isNull,
ng:function(a){return _.isNumber(a)&&a<0},
ps:function(a){return _.isNumber(a)&&a>0},
nn:function(a){return _.isNumber(a)&&a>=0},
np:function(a){return _.isNumber(a)&&a<=0},
o:iO,
r:_.isRegExp,
s:iS,
sy:function(a){return a==(')')|| a==('(')||  a==(']')||  a==('[')    }   ,

w:function(a){return a==$W},
'=':function(b,c){return b==c}  ,
'==':function(b,c){return b===c}  ,
'!':function(b,c){return b!=c}  ,
'!=':function(b,c){return b!==c}  ,
'=':function(b,c){return b==c}  ,
'<':function(b,c){return b<c}  ,
'>':function(b,c){return b>c}  ,
'<=':function(b,c){return b<=c}  ,
'>=':function(b,c){return b>=c}  ,
ud:_.isUndefined,
'*':function(){return true}}

than=function(){}
sy=function(a){return a=='('||a==')'||a=='['||a==']'},

is=function(a,b,c){return IS[a](b,c)}
not=function(a,b,c){return !is(a,b,c)}
and=function(a,b,c){return E(_s(a,','),function(a){return is(a,b,c)})};
or=function(a,b){return S(_s(a,','),function(a){return is(a,b)})};
nand=function(a,b){return !and(a,b)}
nor=function(a,b){return !or(a,b)}

what=function(a){
var o={ d:iD(a)||'',u:iU(a)||'',_:i_(a)||'',
$:i$(a)||'',b:iB(a)||'',n:iN(a)||'',np:iNp(a)||'',
nn:iNn(a)||'', '0':i0(a)||'','8':i8(a)||'', n_:iN_(a)||'',s:iS(a)||'',a:iA(a)||'',sa:iSA(a)||'',o:iO(a)||'',l:iL(a)||'',f:iF(a)||'',e:iE(a)||'',h:iH(a)||'',g:iG(a)||'',d:iD(a)||'',r:iR(a)||''};return o}


any=function(a,b){return S(_s(a,','),function(a){return b==a})}





what=function(a){
var d=function(f){return f(a)||''}
return {d:d(D),u:d(U),
b:d(B),n:d(N),s:d(S),
a:d(A),o:d(O),f:d(F),
e:d(E)}}


i_=function(a,y,n){
if(a){eval(y)}
if(n){
i_(!a,n)}
return a}

a_=function(a,b,c){i_(A(a),b,c);return a}
f_=function(a,b,c){i_(F(a),b,c);return a}
s_=function(a,b,c){i_(S(a),b,c);return a}
n_=function(a,b,c){i_(N(a),b,c);return a}
o_=function(a,b,c){i_(O(a),b,c);return a}
w_=function(a,b,c){i_(W(a),b,c);return a}







function aE(a,b){
if(_z(a=sC(a))!=_z(b)){return 0}
else{
return E(Z(a,b),function(a){
if(!(a)[1]){return 1}
return is(a[0],a[1])})||0}}


function aM(a,b){
return(_z(a=aC(a))>=_z(b))?
E(_C(Z(a,b)),function(a){
return !(a)[1]? 1
:is(a[0],a[1])}):0}



function aL(a,b){if(_z(a=aC(a))<=_z(b)){
return E(_C(Z(a,b)), function(a){
return !(a)[0]? 1
:is(a[0]||null, a[1]||null)})}}



function aA(a,b){
return E(b, function(b){
return is(a,b)})}

function aN(a,b){
return !agS(a,b)}

function aS(a,b){
return S(b, function(b){
return is(a,b)})}}


what=function(a){
var d=function(f){return f(a)||''}
return {d:d(D),u:d(U),
b:d(B),n:d(N),s:d(S),
a:d(A),o:d(O),f:d(F),
e:d(E)}}


i_=function(a,y,n){
if(a){eval(y)}
if(n){
i_(!a,n)}
return a}

a_=function(a,b,c){i_(A(a),b,c);return a}
f_=function(a,b,c){i_(F(a),b,c);return a}
s_=function(a,b,c){i_(S(a),b,c);return a}
n_=function(a,b,c){i_(N(a),b,c);return a}
o_=function(a,b,c){i_(O(a),b,c);return a}
w_=function(a,b,c){i_(W(a),b,c);return a}

 
function aE(a,b){
if(_z(a=sC(a))!=_z(b)){return 0}
else{
return E(Z(a,b),function(a){
if(!(a)[1]){return 1}
return is(a[0],a[1])})||0}}


function aM(a,b){
return(_z(a=aC(a))>=_z(b))?
E(_C(Z(a,b)),function(a){
return !(a)[1]? 1
:is(a[0],a[1])}):0}



function aL(a,b){if(_z(a=aC(a))<=_z(b)){
return E(_C(Z(a,b)), function(a){
return !(a)[0]? 1
:is(a[0]||null, a[1]||null)})}}



function aA(a,b){
return E(b, function(b){
return is(a,b)})}

function aN(a,b){
return !agS(a,b)}

function aS(a,b){
return S(b, function(b){
return is(a,b)})}
M.tD = M.toDegrees = tDeg = function (r) {
return r * (180 / M.PI)
}
M.tR = M.toRadians = M.toRads = tRad = rad = function (degs) {
if (O(degs)) {
degs = degs.rotation
}
return degs * M.PI / 180
}
M.dst = M.distance = dst = function self(a, b) {


M.xyz = xyz = function (a, b) {
a = a || {};
a.x = a.x || 0;
a.y = a.y || 0;
a.z = a.z || 0
b = b || {};
b.x = b.x || 0;
b.y = b.y || 0;
b.z = a.z || 0


return sqr(a.x - b.x, a.y - b.y, a.z - b.z)

function sqr(a, b) {
var g = G(arguments)
return M.sqrt(U(b) ? a
: sq.apply(this, g))
}

function sq(a) {
var g = G(arguments), n = 0
_.each(g, function (a) {
n += (a * a)
})

return n
}
}


if (A(a) && U(b)) {
return self(a[0], a[1])
}


if (U(b)) {
return xyz(M.V({}), M.V(a))
}


return xyz(M.V(a), M.V(b))


}
M.lD = M.dist = M.lineDistance = function (p1, p2) {
var xs = 0, ys = 0;

p1 = V(p1)
p2 = V(p2)
xs = p2.x - p1.x;
xs = xs * xs;

ys = p2.y - p1.y;
ys = ys * ys;

return M.sqrt(xs + ys);
}
M.lineCenter = function (x1, y1, x2, y2) {
if (A(x1)) {

if (N(x1[3])) {
return center(x1[0], x1[2], x1[2], x1[3])
}
return center(x1[0], x1[1], y1[0], y1[1])
}
if (O(x1)) {
return center(x1.x, x1.y, y1.x, y1.y)
}
return center(x1, y1, x2, y2)
function center(x1, y1, x2, y2) {
var x, y

if (x1 > x2) {
upperX = x1;
lowerX = x2
}
else {
upperX = x2;
lowerX = x1
}

if (y1 > y2) {
upperY = y1;
lowerY = y2
}
else {
upperY = y2;
lowerY = y1
}

x = lowerX + (upperX - lowerX) / 2
y = lowerY + (upperY - lowerY) / 2

return V(x, y)
}
}
M.pointInCircle = function (x, y, circle) {
var withinX, withinY
withinX = x < circle.x + circle.radius && x > circle.x - circle.radius
withinY = y < circle.y + circle.radius && y > circle.y - circle.radius
return withinX && withinY
}//Y.pointInCircle = pntInCir =
M.pointInRect = Math.pointInRectangle = function (x, y, rect) {
var withinX, withinY
var halfwidth = (rect.width || rect.w) / 2
var halfheight = (rect.height || rect.h) / 2
//assumes center
withinX = x < rect.x + halfwidth && x > rect.x - halfwidth
withinY = y < rect.y + halfheight && y > rect.y - halfheight
return withinX && withinY
}
M.circlesOverlap = function (c1, c2) {
var sum, dist, rads
sum = sqr(c1.x - c2.x) + sqr(c1.y - c2.y)
dist = sqrt(sum)
rads = c1.r + c2.r
return rads < dist
}
M.warp = function (lowBound, highBound, cushion) {//wrp=
cushion = cushion || 0
return function (num) {
return num < lowBound ? highBound - cushion
: num > highBound ? lowBound + cushion
: num
}
}