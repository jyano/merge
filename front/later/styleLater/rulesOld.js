$.sty=function(h){
    var styleTag =   $('<style>').at({type:'text/css'});
    styleTag.h(h)
    return styleTag
}

$S=function(rulesOb){var  rulesStr
    if(!rulesOb) {return $l($('style').oh())}
    rulesStr= $rules( rulesOb)
    $('head').A(
        $.sty(
            rulesStr)
    )
    return rulesStr
}
extend()

$rule=  $ruleStr=  function (sel, decs, rulesOb){
    $sel = function (sel){
        sel=sel.replace('_', '.').replace('$', '#')
        var SelOb={
            bd: 'body', bt:'button',
            sc: 'section', nv:'nav', d:'div',
            i: 'img', ip:'input'
        }
        _.e(SelOb, function(v,k){
            if (sel == k){sel=v}
        })
        return sel
    } //only takes string
    var str
    if (A(sel)) {alert('$rule array')
        sel = '{'+   sel[0] + ':'+  sel[1] + '; ' +'}'}
    else if (O(sel)){// for meta stuff... like $media
        str=''
        _.e($decBlk(sel), function (v, k) {str +=  k+   ':' + v  +  '; '})
        sel = '{'+ str +'}'}
    return $sel(sel) + ' ' + $decBlk(decs, rulesOb)
}

 //return str
$rules=function(rulesOb){// !!!! MAKE THE RULES.. DOES IT ALL!
    var rulesStr = '\n\n';
    _.e(rulesOb, function (decs, sel) {
        rulesStr +=  $ruleStr(sel, decs, rulesOb) + '\n'})
    rulesStr += '\n'
    return rulesStr
}
//(declarations) each dec is a key(style)-val(styVal) pair



$S.pl.size=function(w,h){
    this.width = w
    this.height = h || w
}
$CSS =$S
function extend(){HELPER();PLUGIN();MIXIN()
    function MIXIN() {
        $S.mx = {}
// this lets you associate a selector with a bunch
// of declarations at once, and you can add more, too
        $S.mx.icon = {
            transition: 'background-color ease .2s',
            margin: '0 .5em'
        }
        mixin = function (decsOb, rulesOb) {
            //tries to extend from one of its own first
            if (rulesOb && rulesOb[decsOb.mx]) {
                _.x(decsOb, rulesOb[decsOb.mx])
            }
            //then goes to global ($CSS.mx)
            else {
                _.x(decsOb, $CSS.mx[decsOb.mx])
            }
        }

    }
    function HELPER() {// (value-)helper functions

        $S.fn = {}
// lets you write/call functions that
//produce a complicated value to a
//particular property,
// so you don't have to write out
// the full location of the function
// -helps with namespacing

        $S.fn.bor = function (c) {
            return '8px solid ' + oO('c', c || 'z')
        }


        helper = function (styVal) {
            var fn = $CSS.fn[_.f(styVal)]
            return fn.apply($CSS, _.r(styVal))
        }
    }
    function PLUGIN() {
        $S.pl = {}

        // these are functions that take pams
// and ctx-bound to the dec obj
// so its main use is to add decs directly on it
// but one function can add multiple decs
//(plugins)


        plugin = function (decsOb, plOb) {
            _.e(plOb, function (v, k) {
                $CSS.pg[k].apply(decsOb, v)
            })
            return decsOb
        }
    }
}
function lat() {
//$dec= function(k,v){return k+':'+v+'; '}
//$blk =  function(a){$l('$blk'); return '{'+a+'}'}
    $S.sel = $sel
    $S.rule = $rule
    $S.decBlk = $decBlk
    $S.decs = $decs
    $S.dec = $dec
    $S.blk = $blk

//$CSS.rules = $rules


//$CSS.sty =$sty

    toAlert()
    function toAlert() {
        $.hd = function () {
            alert('$.hd but really styHd (see $CSS (its in it))')
            var g = G(arguments), hd
            hd = $('head')

            if (g.n) {
                return $.hd("link[rel='stylesheet']:last")
            }

            g.e(function (g) {
                if (O(g)) {
                    g.p ? hd.after(g) : hd.A(g)
                }
                else if (S(g)) {
                    return hd.find(g)
                }
            })

            return hd
        }

        _.$Id = function (str) {
            alert('$.hd but really parseId (see $CSS.sel (its in it))')
            str = str.replace('$', '#')
            str = str.replace('_', '.')
            return str
        }
        $.hdS = function (css) {
            alert('$.hdS')
            var lastLink
            lastLink = $.hd().find("link[rel='stylesheet']:last")
            if (lastLink[0]) {
                lastLink.after($(css))
            }
            else {
                $.hd().A(
                    $(css)
                )
            }
            return $
        }
    }
}
//lat()
$decBlk= function (decsOb, rulesOb){

    if(S(decsOb)){
        $l('$decBlk');
        return decsOb
    }
    var decBlkStr=' ',
        styVal
    if(decsOb.mx){mixin(decsOb.mx, rulesOb)}
    if(decsOb.pl){plugin(decsOb, decsOb.pl)}
    decsOb.mx=null; decsOb.pl=null
    _.e(decsOb, function(styV, sty){
        styVal=  A(styVal)?  helper(styVal):
            N(styVal)? String(styVal) + 'px':
                oO(sty, styVal, 'R')
        decBlkStr += oO('s',sty)  + ':' +  styVal   +  '; '
    })
    return   '{'  +decBlkStr+ '}'
}

$subRules= $rulesOb= function (rulesOb){
    return '{'+  $rules( rulesOb)   +'}'
// GRAIL CALLS THIS
}



//$dec= function(k,v){return k+':'+v+'; '}
// $blk =  function(a){$l('$blk'); return '{'+a+'}'}


