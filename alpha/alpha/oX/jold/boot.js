<?xml version="1.0" encoding="UTF-8"?>
<application>
  <component name="WindowManager">
    <frame x="0" y="22" width="1780" height="1087" extended-state="0" />
    <layout>
      <window_info id="Cvs" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.25" sideWeight="0.5" order="4" side_tool="false" content_ui="tabs" />
      <window_info id="TODO" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="6" side_tool="false" content_ui="tabs" />
      <window_info id="Message" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="0" side_tool="false" content_ui="tabs" />
      <window_info id="Ant Build" active="false" anchor="right" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.25" sideWeight="0.5" order="1" side_tool="false" content_ui="tabs" />
      <window_info id="Find" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="1" side_tool="false" content_ui="tabs" />
      <window_info id="Structure" active="false" anchor="left" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.25" sideWeight="0.5" order="1" side_tool="false" content_ui="tabs" />
      <window_info id="Commander" active="false" anchor="right" auto_hide="false" internal_type="SLIDING" type="SLIDING" visible="false" weight="0.4" sideWeight="0.5" order="0" side_tool="false" content_ui="tabs" />
      <window_info id="Project" active="false" anchor="left" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.25" sideWeight="0.5" order="0" side_tool="false" content_ui="tabs" />
      <window_info id="Debug" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.4" sideWeight="0.5" order="3" side_tool="false" content_ui="tabs" />
      <window_info id="Hierarchy" active="false" anchor="right" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.25" sideWeight="0.5" order="2" side_tool="false" content_ui="combo" />
      <window_info id="Inspection" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.4" sideWeight="0.5" order="5" side_tool="false" content_ui="tabs" />
      <window_info id="Run" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="2" side_tool="false" content_ui="tabs" />
    </layout>
  </component>
</application>

              /Users/yano/wappy/j/boot.js                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
/Users/yano/wappy/j/boot.js

/j/boot.js

ROW=function(a,b,c,d){var g=G(arguments),z=g.z
    row=function(n){var g=G(arguments),
    d=dk('row')
    _e(g,function(v){d(v)})
return d}
col=function(){var g=G(arguments),
    d=dk('m'+g[0]),
    iter=A(g[1])?g[1]:g.r
    _e(iter,function(v){d(v)})
return d}

row2=function(a,b){return row(col(6,a),col(6,b))}
row3=function(a,b,c){return row(col(4,a),col(4,b),col(4,c))}
row4=function(a,b,c,d){return row(col(3,a),col(3,b),col(3,c),col(3,d))}
row84=function(a,b){return row(col(8,a), col(4,b))}
row48=function(a,b){return row(col(4,a),col(8,b))}
row39=function(a,b){return row(col(3,a),col(9,b))}
row93=function(a,b){return row(col(9,a),col(3,b))}
row363=function(a,b,c){return row(col(3,a),col(6,b),col(3,c))}
if(z==1){return row(col(12,a))}
if(z==2){
    if(g.p){return row93(a,b)}
if(g.n){return row39(a,b)}
return row2(a,b)}


if(z==3){
    if(g.n){return row363(a,b,c)}
return row3(a,b,c)}
if(z==4){return row4(a,b,c,d)}}

ib=function(){return sk('ib')}

caret=function(){return _s().k('C')}
__=function(){return li(['D'])}

tab=function(a){return _a(ul,arguments).k('n nt')}

gly=function(a){
    var g=sk('g')
    g.k(a)
    g.k('glyphicon-'+a)

    return g.q[0]}


star=function(){


    var g=G(arguments),s=_s().k('g')

    g[0]=g[0]||'star'
    s.k(g[0]).k('glyphicon-'+g[0])

    return g.P?s:b1(s)}



pil=function(o){var g=G(arguments),

    p=ul()
    p.k('n np')
    p.c('y')

    if(O(o)){_e(o,function(v,k){
    var l=A(k)?lik(k[0],'+'):lik(k)
    l.o('$',v)
    p(l)})}

else{_e(g,function(v){
    if(A(v)){p(lik(v[0],'+'))}
else{p(lik(v))}})}

return p}


tog=function(a,b){
    return lk('-')(gly(b), bo(a,'+'), caret())}


dropl=function(a){
    return lk('-')((a||'menu')+' ', caret())}

lkd=function(a){var g=G(arguments),

    l=li('-')(dropl(a)),
    u=ul('-')
    _e(g.r,function(v){
    if(S(v)){v=lik(v)}
u(v)})


return l(u)}

navbar=function(){var g=G(arguments),
    d=_d().k('nb nbd nbi nbft').at({r:'naviation'})
_e(g,function(v){d(v)})
return d}

navHeader=function(a){

    btog=function(a){return bt().k('nbg').at({dg:'#navbar', dt:a||'collapse'})}

return dk('nbh')(

btog()(spk('toggle nav','sr'),ib()),

lk('wappy').k('nbB'))}

navBody=function(){var g=G(arguments),
    c=dk('co nbc').id('navbar')
    _e(g,function(v){c(v)});return c}
far=function(){var f=_f().k('nbf nbr').at({r:'search'})

f(dk('fg')(ip().k('fc').ph('search')  ),
bt('*').ty('s'))
return f}
bar=function(){var g=G(arguments),u=ul('+')
    if(g.n){ u.k('nbr') }
_e(g,function(v){u(v)})
return u}




test=function(){
    return navbar(navHeader(),
    navBody(
    bar(lik('a'),lik('b'),

    lkd(
    gly('p'),


    lik('a'),lik('b'))),

    bar(lik('a'),'-'),
    far())).pp()}



navList=function(){
    var g=G(arguments),q=ul('+')
    _e(arguments, function(v){
    q(v)});return collapse(q)}





logi=function(){pil({'log in':lI,'log out':lO}).pp()()}

///modal
MFOOT=function(){var g=G(arguments), d=_d().k('mf')
    _e(g,function(v){d(v)})
return d}
MBODY=function(){var g=G(arguments), d=_d().k('mb')
    _e(g,function(v){d(v)})
return d}
MHEAD=function(){var g=G(arguments),d=_d().k('mh')
    _e(g,function(v){d(v)})
return d}
MCT=function(){var g=G(arguments), d=_d().k('mc')
    _e(g,function(v){d(v)})
return d}
MDIALOG=function(){var g=G(arguments),d=_d().k('md')
    _e(g,function(v){d(v)})
return d}
MFADE=function(){var g=G(arguments), d=_d().k('m f')
    _e(g,function(v){d(v)})
return d}
MODAL=function(a,b,c){

    var ft=MFOOT(bt({t:'close'}).at({t:'submit',dd:'modal'}))
if(c){ft(c)}

return MFADE(MDIALOG(MCT(

MHEAD(
bt({t:ex}).k('close').at({dd:'modal'}),
h4(a).k('mt')),
MBODY(b),ft)))}
signIn=function(){return MODAL('signin',

    fo(['/security'],

    lb('username','un','u'), lb('password','pw','p'),

    sm().at({value:'jason'}).k('pull-right'))

)}
login=function(){return MODAL('signin',


    fo(['/security'],
    lb('username','un','u'),
    lb('password','pw','p'),

    bt({t:'login'}).at({dd:'modal'}).k('tc').auto()))}
newAccount=function(){
    return MODAL('new account',
    fo(['/users/po'],
    lb('username', 'un','u','something funky'),
    lb('password', 'pw','p','something tricky'),
    bt({t:'signup'}).at({dd:'modal'}).k('tc')))}
god=function(){

    return _d().k('m f')(_d().k('md')(_d().k('mc')(

    MHEAD(
    _a().k('close').at({dd:'modal'}).T('x'),
h3('Godzilla Game'),h5('Popbox Message #354b')),
MBODY(
h1('Results: Fail'),
h2('Lasted: 38 seconds'),
h2('Earned: 44 hero points') ),
MFOOT(
_a().k('b').at({'u':'#'}).T('play again'),
_n().at({'u':'#',dd:'modal'}).T('close')))))}
newPlayer=function(){
    return _d().k('m f')(_d().k('md')(_d().k('mc')(
    MHEAD('new player'),
    MBODY(im('me')),
    MFOOT())))}

log=function(a){
    qJ('/'+(a||'logged'),
        ff('pop(a)'))}
lI=function(){//f.q.children().eq(0).val('AFSDAFSDsfdj')

    var f={}

f.f=fo()
f.u=tx().at({name:'u'})
f.p=tx().at({name:'p'})
f.s=sm()

f.f(f.u, f.p, f.s).Z(3).c('b')
f.v=function(){return {u: f.u.V(), p: f.p.V()}}

f.f.o('s', function(q,e){pD(e.e)


    qP('/sec',

    f.v(), function(d){

    qi('logger').$()

    })})

pop(f.f)

return f}

logStatus=function(c){return sp('?').id('logStatus').M(10).P(10).c(c||'g')}
logger=function(){var d=di('logger').id('logger').c('b')


    d(sp('status: '),logStatus())

    d.o({

    $: function(){
    qJ('/logged',

    function(d){qi('logStatus')(d)

    })},

$$:lO

}).pp()

}
lO=function(){qJ('/lo', function(d){qi('logStatus').$()})}

tn=function(i){return di('x3')(di('tn')(
    lk('x','/pics/del/'+i).k('b bm'),
    lk('edit','/transform/'+i).k('b bm'),
    lk('set','/set/'+i).k('b bm'),
    im(i)))}
tnT=function(i,h){return di('x2')(lk(im(i),h).k('tn'))}




LDD=function(a,b){var g=G(arguments)
    if(g.n){
    return li(dropper(g[0],'-'),droppee(g[1]||'test'),'-')}
return li(dropper(g[0]),droppee(g[1]||'test'),'-')}

DDD=function(a,b){var g=G(arguments)
    if(g.n){
    return _d()(
    dropper(g[0],'-'),droppee(g[1]||'test'),'-')}
return _d()(dropper(g[0]),droppee(g[1]||'test'),'-')}




down=function(){$('.dropdown-toggle').dropdown('toggle') }



dropper=function(){var g=G(arguments)
    if(g.n){return  lk('-').H(g[0]||'menu')(caret()).id('ddm1') }

return  bt(g[0]||'menu','-').id('ddm1')(caret())}


droppee=function(t){ if(t=='test'){
    return droppee(lik('Action1'),lik('Action2'),lik('Action3'),__(),lik('Action4'))}
var g=G(arguments),

u=ul().k('ddm').at({

    r:'menu',
    'aria-labelledby':'ddm1'
    })
_e(g,function(v){u(v)})
return u}




/////OLD


tn=function(i){return di('x3')(di('tn')(
    lk('x','/pics/del/'+i).k('b bm'),
    lk('edit','/transform/'+i).k('b bm'),
    lk('set','/set/'+i).k('b bm'),
    im(i)))}
tnT=function(i,h){return di('x2')(lk(im(i),h).k('tn'))}


LDD=function(a,b){var g=G(arguments)
    if(g.n){
    return li(dropper(g[0],'-'),droppee(g[1]||'test'),'-')}
return li(dropper(g[0]),droppee(g[1]||'test'),'-')}

DDD=function(a,b){var g=G(arguments)
    if(g.n){
    return _d()(
    dropper(g[0],'-'),droppee(g[1]||'test'),'-')}
return _d()(dropper(g[0]),droppee(g[1]||'test'),'-')}




down=function(){$('.dropdown-toggle').dropdown('toggle') }



dropper=function(){var g=G(arguments)
    if(g.n){return  lk('-').H(g[0]||'menu')(caret()).id('ddm1') }

return  bt(g[0]||'menu','-').id('ddm1')(caret())}


droppee=function(t){ if(t=='test'){
    return droppee(lik('Action1'),lik('Action2'),lik('Action3'),__(),lik('Action4'))}
var g=G(arguments),

u=ul().k('ddm').at({

    r:'menu',
    'aria-labelledby':'ddm1'
    })
_e(g,function(v){u(v)})
return u}


navList=function(){
    var g=G(arguments),q=ul('+')
    _e(arguments, function(v){
    q(v)});return collapse(q)}


log=function(a){

    qJ(
        '/'+(a||'logged'),

        ff('pop(a)')

    )}
