dateTime=function(){
//dep
$.dateTime=$.date=dateTime=dt=function(a){
var d=new Date(a)
d.y=d.getFullYear
d.d=d.getDate
d.D=d.getDay
d.M=d.getMinutes
d.m=d.getMonth
d.date=function(){
return d.d()+'/'+d.m()+'/'+d.y()
}
d.time=function(){
return d.h()+':'+d.M()
}
d.dt=function(){
return d.date()+' '+d.time()
}
d.ms=d.getMilliseconds
d.h=d.getUTCHours
d.s=d.getSeconds
//d.tm= d.getTime
//d.gto= d.getTimezoneOffset
d.udt=d.getUTCDate
d.gud=d.getUTCDay
d.ufy=d.getUTCFullYear
d.gh=d.getHours
d.gms=d.getUTCMilliseconds
d.um=d.getUTCMinutes
d.um=d.getUTCMonth
d.us=d.getUTCSeconds
return d
}
$.dateAndTime=dtt=function(a){
var datetime=new Date(a)
return datetime.date()+' '+datetime.time()
}
};
T=function(a,b){return setTimeout(_v(a),b)}
dateTime=dt=function(a){
var d=new Date(a)

d.y=d.getFullYear

d.d=d.getDate
d.D=d.getDay
d.M= d.getMinutes
d.m= d.getMonth

d.date=function(){
return d.d()+'/'+ d.m()+'/'+ d.y()}
d.time=function(){
return d.h()+':'+ d.M()}
d.dt=function(){return d.date()+' '+ d.time()}


d.ms= d.getMilliseconds
d.h= d.getUTCHours
d.s= d.getSeconds


//d.tm= d.getTime
//d.gto= d.getTimezoneOffset
d.udt= d.getUTCDate
d.gud= d.getUTCDay
d.ufy= d.getUTCFullYear
d.gh= d.getHours

d.gms= d.getUTCMilliseconds
d.um= d.getUTCMinutes
d.um= d.getUTCMonth
d.us= d.getUTCSeconds
return d
}
dtt=function(a){
return dt(a).dt()}
function $superUTC(d) {
// uniT ms 0-999
d.sUMs = d.setUTCMilliseconds
d.gUMs = d.getUTCMilliseconds

//uniT secs 0-59
d.SUSc = d.setUTCSeconds
d.gUSc = d.getUTCSeconds//

//uniT min 0-59
d.sUMn = d.setUTCMinutes
d.gUMn = d.getUTCMinutes

//uniT hour 0-23
d.sUH = d.setUTCHours
d.gUH = d.getUTCHours


d.gUM = d.getUTCMonth
d.sUM = d.setUTCMonth

//uniT dtOb's year (4digs)
d.sUFY = d.setUTCFullYear
d.gUFY = d.getUTCFullYear

//  uniT  dOM 1-31
d.gUDt = d.getUTCDate
d.sUDt = d.setUTCDate

d.U = d.UTC //num of MSs in a date since midnight of 1/1/70, according to UTC time
d.gUD = d.getUTCDay // uniT dOW 0-6
d.gO = d.gTO = d.getTimezoneOffset// mns dif bwn UTC/local time

return d
}
function $superParse(d) {
d.tS = d.toString  //dtOb -> str
d.tI = d.toISOString   //date as a str, using ISO standard
d.tDt = d.toDateString //Converts the date portion of   dtOb into a readable string
d.tLDt = d.toLocaleDateString//    date portion of a dtOb as   string, using locale conventions
d.tLT = d.toLocaleTimeString  //time portion of  dtOb as   string, using locale conventions
d.tL = d.toLocaleString   //dtOb -> str, using locale conventions

d.tT = d.toTimeString //Converts   time portion of  dtOb to   string

d.tU = d.toUTCString   //dtOb -> str, by uniT
d.p = d.parse //Parses date str  and num   ms snc 1/1/70
d.j = d.tJ = d.toJSON   //date as   str, formatted as a JSON date
d.v = d.vO = d.valueOf   //primitive val  of   dtOb
return d
}
function oneHourFromNowInDateForm() {
return $D.n($D.H)

//time
f30=function(f){K(f,1000/30)}
sec=function(f){return T(f,1000)}





keep=function(f){I(f,50)}
T$ = createjs.Ticker


STOP=function(){
T$.removeAllEventListeners()
}



tt=function(a,b,c){

var g=G(arguments),
t=true,
f=false,
a=g[0],
b=g[1],
c=g[2]

if(F(a)){

return aEL(T$,'tick',
g.N? a
:function(e){

if(!e.paused){ a(e) }
})

}



if(O(a)){
return aEL(T$,'tick',a)}

if(a=='?'){return !T$.getPaused()}
if(a=='p'){T$.setPaused(f);return tt('?')}

if(a=='s'){T$.setPaused(t);
return tt('?')}

if(a=='g'){return tt(

tt('?')? 's': 'p'

)}


if(a=='@'){
return T$.init()}

if(a=='!'){
return T$.reset()}

if(a=='e'){return T$.getEventTime(g.p?t:f)}

if(a=='t'){return T$.getTime(g.p?t:f)}

if(a=='#'){return T$.getTicks(g.n?t:f)}

if(a=='md'){return t$.maxDelta}

if(a=='M'){return T$.timingMode}

if(a=='i'){
if(N(b)){T$.setInterval(g.m?b*1000:b)
return tt('i')}
if(U(b)){return T$.getInterval()}}

if(a=='f'){
if(N(b)){T$.setFPS(b);return tt}
if(U(b)){return T$.getFPS()}}

if(a=='r'){if(b>10){
tt('f',b)} else {tt('i',b,'*')}}


if(a=='m'){
return N(b)?T$.getMeasuredFPS(b)
:T$.getMeasuredFPS()}

if(a=='tk'){return Ed(T$)}

}



DEBOUNCE=function(){W()

s=0
u=0
d=0
l=0
r=0


b= w.S(600, 300, 'b', 100)

$.space(_.debounce(function(){$l('space ' + s++)}, 1000))

$.kD('u', _.debounce(function(){$l('up '+u++)}, 1000, true))



}
$.do=function(func){
setTimeout(func,0)
return 'nada'}
function time(){   function time(){


function $superUTC(d) {
// uniT ms 0-999
d.sUMs = d.setUTCMilliseconds
d.gUMs = d.getUTCMilliseconds

//uniT secs 0-59
d.SUSc = d.setUTCSeconds
d.gUSc = d.getUTCSeconds//

//uniT min 0-59
d.sUMn = d.setUTCMinutes
d.gUMn = d.getUTCMinutes

//uniT hour 0-23
d.sUH = d.setUTCHours
d.gUH = d.getUTCHours


d.gUM = d.getUTCMonth
d.sUM = d.setUTCMonth

//uniT dtOb's year (4digs)
d.sUFY = d.setUTCFullYear
d.gUFY = d.getUTCFullYear

//  uniT  dOM 1-31
d.gUDt = d.getUTCDate
d.sUDt = d.setUTCDate

d.U = d.UTC //num of MSs in a date since midnight of 1/1/70, according to UTC time
d.gUD = d.getUTCDay // uniT dOW 0-6
d.gO = d.gTO = d.getTimezoneOffset// mns dif bwn UTC/local time

return d
}
function $superParse(d) {
d.tS = d.toString  //dtOb -> str
d.tI = d.toISOString   //date as a str, using ISO standard
d.tDt = d.toDateString //Converts the date portion of   dtOb into a readable string
d.tLDt = d.toLocaleDateString//    date portion of a dtOb as   string, using locale conventions
d.tLT = d.toLocaleTimeString  //time portion of  dtOb as   string, using locale conventions
d.tL = d.toLocaleString   //dtOb -> str, using locale conventions

d.tT = d.toTimeString //Converts   time portion of  dtOb to   string

d.tU = d.toUTCString   //dtOb -> str, by uniT
d.p = d.parse //Parses date str  and num   ms snc 1/1/70
d.j = d.tJ = d.toJSON   //date as   str, formatted as a JSON date
d.v = d.vO = d.valueOf   //primitive val  of   dtOb
return d
}
function oneHourFromNowInDateForm() {
return $D.n($D.H)
}
}
T=function(a,b){return setTimeout(_v(a),b)}

dateTime=dt=function(a){
var d=new Date(a)

d.y=d.getFullYear

d.d=d.getDate
d.D=d.getDay
d.M= d.getMinutes
d.m= d.getMonth

d.date=function(){
return d.d()+'/'+ d.m()+'/'+ d.y()}
d.time=function(){
return d.h()+':'+ d.M()}
d.dt=function(){return d.date()+' '+ d.time()}


d.ms= d.getMilliseconds
d.h= d.getUTCHours
d.s= d.getSeconds


//d.tm= d.getTime
//d.gto= d.getTimezoneOffset
d.udt= d.getUTCDate
d.gud= d.getUTCDay
d.ufy= d.getUTCFullYear
d.gh= d.getHours

d.gms= d.getUTCMilliseconds
d.um= d.getUTCMinutes
d.um= d.getUTCMonth
d.us= d.getUTCSeconds
return d
}

dtt=function(a){
return dt(a).dt()}



//time
f30=function(f){K(f,1000/30)}
sec=function(f){return T(f,1000)}





keep=function(f){I(f,50)}
T$ = createjs.Ticker


STOP=function(){
T$.removeAllEventListeners()
}



tt=function(a,b,c){

var g=G(arguments),
t=true,
f=false,
a=g[0],
b=g[1],
c=g[2]

if(F(a)){

return aEL(T$,'tick',
g.N? a
:function(e){

if(!e.paused){ a(e) }
})

}



if(O(a)){
return aEL(T$,'tick',a)}

if(a=='?'){return !T$.getPaused()}
if(a=='p'){T$.setPaused(f);return tt('?')}

if(a=='s'){T$.setPaused(t);
return tt('?')}

if(a=='g'){return tt(

tt('?')? 's': 'p'

)}


if(a=='@'){
return T$.init()}

if(a=='!'){
return T$.reset()}

if(a=='e'){return T$.getEventTime(g.p?t:f)}

if(a=='t'){return T$.getTime(g.p?t:f)}

if(a=='#'){return T$.getTicks(g.n?t:f)}

if(a=='md'){return t$.maxDelta}

if(a=='M'){return T$.timingMode}

if(a=='i'){
if(N(b)){T$.setInterval(g.m?b*1000:b)
return tt('i')}
if(U(b)){return T$.getInterval()}}

if(a=='f'){
if(N(b)){T$.setFPS(b);return tt}
if(U(b)){return T$.getFPS()}}

if(a=='r'){if(b>10){
tt('f',b)} else {tt('i',b,'*')}}


if(a=='m'){
return N(b)?T$.getMeasuredFPS(b)
:T$.getMeasuredFPS()}

if(a=='tk'){return Ed(T$)}

}







tick=function(e){j.y(e.delta/1000*100,'-' )}


ts2 = function(s, j, pxPerSec){
var fn=function(s,e){

if(!N(j.ts)){j.ts=0;j.lts=e.ts}

else{j.ts= e.ts-j.lts;j.lts=e.ts

j.y((j.ts/1000) * pxPerSec,'-')  }}

return s.t(fn)}


he2=function(e){
j.x( (e.d/1000) * 5,'-' )}

onTick=function TT(f){var fn
fn=T$.on('tick',function(e){f(sJE(e))})
return function(){T$.off('tick',fn)
return _p(TT,f)}}





function time() {

$do=function(a,b,c,d){
if(F(b)){b(a,c,d)}
if(S(b)){$w[b]=a}
return a}
$ev=function(a){return function(){eval(a)}}

function $superUTC(d) {
// uniT ms 0-999
d.sUMs = d.setUTCMilliseconds
d.gUMs = d.getUTCMilliseconds

//uniT secs 0-59
d.SUSc = d.setUTCSeconds
d.gUSc = d.getUTCSeconds//

//uniT min 0-59
d.sUMn = d.setUTCMinutes
d.gUMn = d.getUTCMinutes

//uniT hour 0-23
d.sUH = d.setUTCHours
d.gUH = d.getUTCHours


d.gUM = d.getUTCMonth
d.sUM = d.setUTCMonth

//uniT dtOb's year (4digs)
d.sUFY = d.setUTCFullYear
d.gUFY = d.getUTCFullYear

//  uniT  dOM 1-31
d.gUDt = d.getUTCDate
d.sUDt = d.setUTCDate

d.U = d.UTC //num of MSs in a date since midnight of 1/1/70, according to UTC time
d.gUD = d.getUTCDay // uniT dOW 0-6
d.gO = d.gTO = d.getTimezoneOffset// mns dif bwn UTC/local time

return d
}
function $superParse(d) {
d.tS = d.toString  //dtOb -> str
d.tI = d.toISOString   //date as a str, using ISO standard
d.tDt = d.toDateString //Converts the date portion of   dtOb into a readable string
d.tLDt = d.toLocaleDateString//    date portion of a dtOb as   string, using locale conventions
d.tLT = d.toLocaleTimeString  //time portion of  dtOb as   string, using locale conventions
d.tL = d.toLocaleString   //dtOb -> str, using locale conventions

d.tT = d.toTimeString //Converts   time portion of  dtOb to   string

d.tU = d.toUTCString   //dtOb -> str, by uniT
d.p = d.parse //Parses date str  and num   ms snc 1/1/70
d.j = d.tJ = d.toJSON   //date as   str, formatted as a JSON date
d.v = d.vO = d.valueOf   //primitive val  of   dtOb
return d
}
function oneHourFromNowInDateForm() {
return $D.n($D.H)
}



_.in1 = $.in1 = function (time) {
time = ( N(time) ? time : 1) * 1000
cjs.wait = true
return _.sT(function () {
cjs.wait = false
}, time)
}

vkl=function(a){return new Function("v","k","l","l[k]=" + a)}

$Dt = Date
$Dt.n = $Dt.now  //->  cur time - ms since  1970 UTC (N)
$Dt.H = 3600000
$Dt.U = $Dt.UTC// ?
// same pams as longest form  of constructor (2 to 7) -> ms since 1970 UTC (N)
$Dt.p = $Dt.parse// date as str ->  ms since  1970  UTC (N)
$D = function () {
var d = new $Dt() // new $Dt(a,b,c,d,e)
d.s = d.getSeconds
d.t = function (m) {  //time  num MSs af/bf 1/1/70
d.sT = d.setTime
d.gT = d.getTime
if (U(m)) {
return this.gT()
}
this.sT(m)
return this
}
d.s = function (s) { //secs 0-59
// $l('d.s')
var d = this
d.sS = d.setSeconds
d.gS = d.getSeconds
if (U(s)) {
return d.gS()
}
d.sS(s)
return d
}
d.h = function (m) {  //hour 0-23
d.gH = d.getHours
d.sH = d.setHours
if (U(m)) {
return this.gH()
}
this.sH(m)
return this
}
d.d = d.getDay  // day of   week (from 0-6)
d.D = function (d) {
var d = this   //date  day of   month (from 1-31)
d.gD = d.getDate //
d.sD = d.setDate
if (U(d)) {
return this.gD()
}
this.sD(d)
return this
}
d.M = function (m) {  //month 0-11
d.sM = d.setMonth
d.gM = d.getMonth
if (U(m)) {
return this.getMonth()
}
this.setMonth(m)
return this
}
d.m = function (m) {//mins 0-59
d.gMn = d.getMinutes
d.sMn = d.setMinutes

if (U(m)) {
return this.gMn()
}
this.sMn(m)
return this
}
d.ms = function (m) { //ms 0-999
d.gMs = d.getMilliseconds
d.sMs = d.setMilliseconds
if (U(m)) {
return this.gMs()
}
this.sMs(m)
return this
}
d.y = function (y) { //fullYear (year Deprecated -> fullYear )
d.sY = d.setFullYear   //Sets the year (four digits) of dtOb
d.gY = d.getFullYear//    year (four digits)
if (U(y)) {
return this.gY()
}
this.sY(y)
return this
}
//superParse(d)
//superUTC(d)

return d
}
$D.n = function (a) {
return $Dt.n(a)
}
$D.p = function (a) {
return $Dt.p(a)
}
$D.U = function (a) {
return $Dt.U(a)
}
_.gT = function () {
return $Dt().getTime()
//return $D().getTime()
}
$now = function () {
return {t: $D, df: $D.n()}
}
$n = function (plus) {//= $nowPlusWhat_InDateForm
var dateNow
if (U(plus)) {
return $D.n()
}
//plus=plus||0
dateNow = $D($D.n() + plus)
return dateNow
}
_.fT = function (times, func) {
var timeout
if (N(times)) {
return _.times(times, function (i) {
func(i + 1)
})
}
if (F(times)) {
timeout = N(func) ? func : 100
func = times
}
return setTimeout(func, timeout)
}
_.mo = function (n, fn) {
return N(n) ?
_.throttle(fn, n * 1000) : _.throttle(n, 1000)
}
_.sI = function (a, b) {
return setInterval(a, b)
}
_.ev = function (n, fn) {
setInterval(fn, n * 1000)
}
_.in1 = function (time) {
time = ( N(time) ? time : 1) * 1000
cjs.wait = true
return setTimeout(function () {
cjs.wait = false

}, time)
}//in1
_.in = function (time, fn) {
var g = G(arguments),
o = F(g[0]) ? {fn: g[0]} : {s: g[0], fn: g[1]}
o.s = N(o.s) ? o.s : 1
o.fn = o.fn || function () {
}
return setTimeout(
function () {

if (g.m) {
$.c$()
}
o.fn()

},
o.s * 1000)
}
_.cI = _.xI = function (a, b) {
clearInterval(a)
}
_.timeout = function (times, func) {
alert('T')
var timeout
if (N(times)) {
return _.t(times, function (i) {
func(i + 1)
})
}
if (F(times)) {
timeout = N(func) ? func : 100;
func = times
}
return setTimeout(func, timeout)
}
_.inx = function(){}
_.evx=function(a){return a}
}
$Dt = Date
$Dt.n = $Dt.now  //->  cur time - ms since  1970 UTC (N)
$Dt.H = 3600000
$Dt.U = $Dt.UTC// ?
// same pams as longest form  of constructor (2 to 7) -> ms since 1970 UTC (N)
$Dt.p = $Dt.parse// date as str ->  ms since  1970  UTC (N)
$D = function () {
var d = new $Dt() // new $Dt(a,b,c,d,e)
d.s = d.getSeconds
d.t = function (m) {  //time  num MSs af/bf 1/1/70
d.sT = d.setTime
d.gT = d.getTime
if (U(m)) {
return this.gT()
}
this.sT(m)
return this
}
d.s = function (s) { //secs 0-59
// $l('d.s')
var d = this
d.sS = d.setSeconds
d.gS = d.getSeconds
if (U(s)) {
return d.gS()
}
d.sS(s)
return d
}
d.h = function (m) {  //hour 0-23
d.gH = d.getHours
d.sH = d.setHours
if (U(m)) {
return this.gH()
}
this.sH(m)
return this
}
d.d = d.getDay  // day of   week (from 0-6)
d.D = function (d) {
var d = this   //date  day of   month (from 1-31)
d.gD = d.getDate //
d.sD = d.setDate
if (U(d)) {
return this.gD()
}
this.sD(d)
return this
}
d.M = function (m) {  //month 0-11
d.sM = d.setMonth
d.gM = d.getMonth
if (U(m)) {
return this.getMonth()
}
this.setMonth(m)
return this
}
d.m = function (m) {//mins 0-59
d.gMn = d.getMinutes
d.sMn = d.setMinutes

if (U(m)) {
return this.gMn()
}
this.sMn(m)
return this
}
d.ms = function (m) { //ms 0-999
d.gMs = d.getMilliseconds
d.sMs = d.setMilliseconds
if (U(m)) {
return this.gMs()
}
this.sMs(m)
return this
}
d.y = function (y) { //fullYear (year Deprecated -> fullYear )
d.sY = d.setFullYear   //Sets the year (four digits) of dtOb
d.gY = d.getFullYear//    year (four digits)
if (U(y)) {
return this.gY()
}
this.sY(y)
return this
}
//superParse(d)
//superUTC(d)

return d
}
$D.n = function (a) {
return $Dt.n(a)
}
$D.p = function (a) {
return $Dt.p(a)
}
$D.U = function (a) {
return $Dt.U(a)
}
_.gT = function () {
return $Dt().getTime()
//return $D().getTime()
}
$now = function () {
return {t: $D, df: $D.n()}
}
$n = function (plus) {//= $nowPlusWhat_InDateForm
var dateNow
if (U(plus)) {
return $D.n()
}
//plus=plus||0
dateNow = $D($D.n() + plus)
return dateNow
}
_.fT = function (times, func) {
var timeout
if (N(times)) {
return _.times(times, function (i) {
func(i + 1)
})
}
if (F(times)) {
timeout = N(func) ? func : 100
func = times
}
return setTimeout(func, timeout)
}
_.mo = function (n, fn) {
return N(n) ?
_.throttle(fn, n * 1000) : _.throttle(n, 1000)
}
_.sI = function (a, b) {
return setInterval(a, b)
}
_.ev = function (n, fn) {
setInterval(fn, n * 1000)
}
_.in1 = function (time) {
time = ( N(time) ? time : 1) * 1000
cjs.wait = true
return setTimeout(function () {
cjs.wait = false

}, time)
}//in1
_.in = function (time, fn) {
var g = G(arguments),
o = F(g[0]) ? {fn: g[0]} : {s: g[0], fn: g[1]}
o.s = N(o.s) ? o.s : 1
o.fn = o.fn || function () {
}
return setTimeout(
function () {

if (g.m) {
$.c$()
}
o.fn()

},
o.s * 1000)
}
_.cI = _.xI = function (a, b) {
clearInterval(a)
}
_.timeout = function (times, func) {
alert('T')
var timeout
if (N(times)) {
return _.t(times, function (i) {
func(i + 1)
})
}
if (F(times)) {
timeout = N(func) ? func : 100;
func = times
}
return setTimeout(func, timeout)
}
}

_.in1 = $.in1 = function (time) {
time = ( N(time) ? time : 1) * 1000
cjs.wait = true
return _.sT(function () {
cjs.wait = false
}, time)
}

dateTime=function(){
//dep
$.dateTime = $.date = dateTime = dt = function (a) {
var d = new Date(a)
d.y = d.getFullYear
d.d = d.getDate
d.D = d.getDay
d.M = d.getMinutes
d.m = d.getMonth
d.date = function () {
return d.d() + '/' + d.m() + '/' + d.y()
}
d.time = function () {
return d.h() + ':' + d.M()
}
d.dt = function () {
return d.date() + ' ' + d.time()
}
d.ms = d.getMilliseconds
d.h = d.getUTCHours
d.s = d.getSeconds
//d.tm= d.getTime
//d.gto= d.getTimezoneOffset
d.udt = d.getUTCDate
d.gud = d.getUTCDay
d.ufy = d.getUTCFullYear
d.gh = d.getHours
d.gms = d.getUTCMilliseconds
d.um = d.getUTCMinutes
d.um = d.getUTCMonth
d.us = d.getUTCSeconds
return d
}
$.dateAndTime = dtt = function (a) {
var datetime = new Date(a)
return datetime.date() + ' ' + datetime.time()
}
}; dateTime()



tick=function(e){j.y(e.delta/1000*100,'-' )}


ts2 = function(s, j, pxPerSec){
var fn=function(s,e){

if(!N(j.ts)){j.ts=0;j.lts=e.ts}

else{j.ts= e.ts-j.lts;j.lts=e.ts

j.y((j.ts/1000) * pxPerSec,'-')  }}

return s.t(fn)}


he2=function(e){
j.x( (e.d/1000) * 5,'-' )}

onTick=function TT(f){var fn
fn=T$.on('tick',function(e){f(sJE(e))})
return function(){T$.off('tick',fn)
return _p(TT,f)}}



tf = function () {
alert('tf')
var g = G(arguments)
t = n = 1
$.in(1, function () {
t = 0
})

$.ev(1, function () {
if (t) {
n = n + 1

co()

}

else {
$l(n)
}
})

}
$.fn.in=function(num){
var g=G(arguments)
this.delay(num * 1000)
return this
}

$.sec = function (f) {
return setTimeout(f, 1000)
}
$.do = function (func) {
setTimeout(func, 0);
return 'nada'
}
$.T = function (a, b) {
return setTimeout(_v(a), b)
}
$.dateTime = $.date = dateTime = dt = function (a) {
var d = new Date(a);
d.y = d.getFullYear;
d.d = d.getDate;
d.D = d.getDay;
d.M = d.getMinutes;
d.m = d.getMonth;
d.date = function () {
return d.d() + '/' + d.m() + '/' + d.y()
};
d.time = function () {
return d.h() + ':' + d.M()
};
d.dt = function () {
return d.date() + ' ' + d.time()
};
d.ms = d.getMilliseconds;
d.h = d.getUTCHours;
d.s = d.getSeconds;
//d.tm= d.getTime
//d.gto= d.getTimezoneOffset
d.udt = d.getUTCDate;
d.gud = d.getUTCDay;
d.ufy = d.getUTCFullYear;
d.gh = d.getHours;
d.gms = d.getUTCMilliseconds;
d.um = d.getUTCMinutes;
d.um = d.getUTCMonth;
d.us = d.getUTCSeconds;
return d
}
$.dateAndTime = dtt = function (a) {
var datetime = new Date(a);
return datetime.date() + ' ' + datetime.time()
}

$Dt=function(){var dt =new $D(); return dt }
_.gT = function (){  return $Dt().getTime()  }
_.sT= _.sI=function(a,b){return setTimeout(a,b)}
_.sI=function(a,b){return setInterval(a,b)}
_.in=   function(time, fn){var g=G(arguments),
o= F(g[0])? {fn:g[0]} :{s:g[0], fn:g[1]}
o.s  =  N(o.s)? o.s: 1
o.fn= o.fn || function(){}
return _.sT(function(){
o.fn()},
o.s * 1000)
}

_.ev= function(n, fn){_.sI(fn, n*1000)
//  _.iv=function(a,b){if(N(b)){return setInterval(_v(a),b)}}
}
_.cI= _.xI=function(n){clearInterval(n)}


    function $superUTC(d) {
        // uniT ms 0-999
        d.sUMs = d.setUTCMilliseconds
        d.gUMs = d.getUTCMilliseconds

        //uniT secs 0-59
        d.SUSc = d.setUTCSeconds
        d.gUSc = d.getUTCSeconds//

        //uniT min 0-59
        d.sUMn = d.setUTCMinutes
        d.gUMn = d.getUTCMinutes

        //uniT hour 0-23
        d.sUH = d.setUTCHours
        d.gUH = d.getUTCHours


        d.gUM = d.getUTCMonth
        d.sUM = d.setUTCMonth

        //uniT dtOb's year (4digs)
        d.sUFY = d.setUTCFullYear
        d.gUFY = d.getUTCFullYear

        //  uniT  dOM 1-31
        d.gUDt = d.getUTCDate
        d.sUDt = d.setUTCDate

        d.U = d.UTC //num of MSs in a date since midnight of 1/1/70, according to UTC time
        d.gUD = d.getUTCDay // uniT dOW 0-6
        d.gO = d.gTO = d.getTimezoneOffset// mns dif bwn UTC/local time

        return d
    }

    function $superParse(d) {
        d.tS = d.toString  //dtOb -> str
        d.tI = d.toISOString   //date as a str, using ISO standard
        d.tDt = d.toDateString //Converts the date portion of   dtOb into a readable string
        d.tLDt = d.toLocaleDateString//    date portion of a dtOb as   string, using locale conventions
        d.tLT = d.toLocaleTimeString  //time portion of  dtOb as   string, using locale conventions
        d.tL = d.toLocaleString   //dtOb -> str, using locale conventions

        d.tT = d.toTimeString //Converts   time portion of  dtOb to   string

        d.tU = d.toUTCString   //dtOb -> str, by uniT
        d.p = d.parse //Parses date str  and num   ms snc 1/1/70
        d.j = d.tJ = d.toJSON   //date as   str, formatted as a JSON date
        d.v = d.vO = d.valueOf   //primitive val  of   dtOb
        return d
    }

    function oneHourFromNowInDateForm() {
        return $D.n($D.H)
    }