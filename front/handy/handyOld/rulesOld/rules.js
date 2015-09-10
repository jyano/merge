$El=function(tag){
    if(tag){return document.createElement(tag)}

}
///

$CSS = function $CSS(rusOb){var g=G(arguments), rus = '\n\n', sty
    if(g.u){return  $l( $('style').oh() )}


    _.e(rusOb, function (decs, sel){
        rus +=  $CSS.rule(sel, decs, rusOb) + '\n'
    })
    rus += '\n'
    $.hd( $CSS.sty( rus  ) )


    return rus
}


$CSS.sel = function(sel){
    sel =  _.$Id(sel)
    if(sel == 'bd'){sel = 'body'}
    if(sel == 'bt'){sel = 'button'}
    if(sel == 'sc'){sel = 'section'}
    if(sel == 'nv'){sel = 'nav'}
    if(sel == 'd'){sel = 'div'}
    if(sel == 'i'){sel = 'img'}
    if(sel == 'ip'){sel = 'input'}
    return sel
}
$CSS.blk=function(cont){
  return  '{'+ cont +'}'
}

$CSS.decBlk=function(decs, rusOb){  var decBlk

    //for @media
    if(S(decs)){return decs}

      decBlk =' '

    _.e($CSS.decs(decs,rusOb), function(v, pop){
        decBlk += $CSS.dec( pop, v)})

    return $CSS.blk( decBlk )

}



$CSS.dec=function(pop,v){return  pop+':'+v+'; '}

// jqui http://jsfiddle.net/ManojRK/pQ9rj/
// http://jsfiddle.net/rniemeyer/YNCTY/

$CSS.decs = function (decs, rusOb){var DECS={}

    if(decs.ex){

        if( rusOb && rusOb[ decs.ex ] ) {

            _.x(decs, rusOb[ decs.ex ])
        }


        else {
        _.x(decs,
            //tries to extend from one of its own first
            //then goes to global ($CSS.ex)
            $CSS.ex[ decs.ex ])
        }



    }



    if(decs.mx){
        _.e(decs.mx, function(v,k){
            $CSS.mx[k].apply(decs, v)
        })}

    _.e(decs,  function(v,k){
        if(k!=='mx'  &&  k!=='ex' ){
            DECS[oO('s', k)] =  A(v)? $CSS.fn[k].apply(null, v):
            N(v)?  String(v)+'px' :
                oO(k,v,'R')
        }
    })

    return DECS
}
$CSS.rule= function(sel, decs, rusOb){
    return $CSS.sel(sel) + ' ' +  $CSS.decBlk( decs, rusOb )
}
$CSS.rules=function(ob){var g=G(arguments), rus='',str= '',

    ruls

    g=g.A? g=g.f : g.u?{} : g

    ruls = g.S_? g : _.m(ob, function(v,k){
            if(A(v)){v = $CSS.blk( $CSS.dec(v[0],v[1]) )}

            else if(O(v)){
                v=$CSS.decs(v)
                _.e(v, function(v,k){str += $CSS.dec(k,v)});
                v = $CSS.blk(str)
            }


        return $CSS.rule(k, v)
        })

    _.e(ruls, function(ru){ rus += ru })
    rus= $CSS.blk(rus)
    return rus
}

$CSS.fn=function(){}
$CSS.mx=function(){}
$CSS.ex=function(){}
extending=function(){


    // this lets you associate a selector with a bunch
    // of declarations at once, and you can add more, too

    $CSS.ex.icon={
        transition:'background-color ease .2s',
        margin: '0 .5em'
    }

    EXT=function(){$.x('x','ext')

        $CSS({


            d: {
                ex:'icon',
                C:'z',c:'w', mx:{  size:[250] }
            }


        })


        $.d(['hello'])
        $CSS()
    }




    BORD=function(){$.x('x', 'bordered')


        $CSS({

            _bordered: {
                'border-top': 'dotted 1px black',
                'border-bottom': 'solid 2px black'
            },

            //And we want to use these properties inside other rule-sets. Well, we just have to drop in the name of the class where we want the properties, like so:


            '#menu a': {
                ex: '_bordered',
                c:'r'
            },


            '.post a': {
                c:'r',
                ex: '_bordered'
            }


        })




        $CSS()
    }



};extending()
help=function(){

    //value-helpers

    //this lets you write/call functions that
    //produce a complicated value to a
    //particular property,
    // so you don't have to write out
    // the full location of the function
    // -helps with namespacing

    $CSS.fn.B = $CSS.bor= function(c){
        var  col = oO('c', c|| 'z')
        return '8px solid ' + col
    }
};help()
mixins=function(){

    // these are functions that take pams
    // and ctx-bound to the dec obj
    // so its main use is to add decs directly on it
    // but on function can add multiple decs

    $CSS.mx.size=function(w,h){
        this.width = w
        this.height = h || w
    }

    SIZE=function(){$.x('x','size')

        $CSS({

            d: { C:'z',c:'w',

                mx:{

                    size:[250]
                }
            }

        })


        $.d(['hello'])
        $CSS()
    }


};mixins()






$CSS.sty =  function(rus){var sty=  $El('style'); sty.type = 'text/css';
    if(rus){sty.innerHTML = rus}
    return sty
}




TXCSS=function(){$.x('O')

    $.in(2, function(){$CSS({
        body: { fz:80   },
        '.k':  {C:'tq', c:'b'},
        bt:  {w:500, h:300, C:'z', c:'w' ,mar:200 }

    })


       s= $CSS()
    })

    $.d([


        $.bt('this a bt'),


        $.d([

            $.ip('date'),
            $.p('NO NONSENSE')

        ]).K('k',  400, 250).pad(20)


    ]).C('u')





}
CSSCODE=function(){$.h({

    '$top h1':{pad:0,mar:0},
    $ct: { C:'b', c:'r', w: '90%', mar: '10px auto', bor: '1px solid gray', lh: '130%'},
    $top : {pad:8, C:'g',bB: '1px solid gray'},
    $ftr : { c: 'b',C:'r', cl: 'both', mar:0, pad:8,  bT: '1px solid gray' },
    $lnav : {fl:'l',w:160,mar:0,pad:8},
    $cont : {mL:200, bL:  '1px solid gray', pad: 16, Mw: 500 },
    '$lnav p' : {mar:'0 0 8px 0'},
    '$cont h2': {mar:'0 0 8px 0'} })

    $.dI('ct').A(
        $.dI('top').A( $.h1('hdr') ),
        $.dI('lnav').A($.p(ips1)),
        $.dI('cont').A($.h2('subhead'), $.p(ips2),  $.p(ips3)  ),
        $.dI('ftr').A('Footer')
    )

    $CSS()
}
SIDEBR=function(){$.h({
    _clFx: {'*zoom': 1},
    '_clFx:before, _clFx:after': {ds: 'table', content:'', lh: 0},
    '_clfx:after': {clear:'both'},
    _sbWr: {w: 150, fl: 'l'},
    _sb: {background: 'b', c: 'r', pad: 10},
    _contWr: {w:'100%', fl:'l', mR:-150},
    _cont: {C:'b', pad:10}
})
    $.d([
        $.d([$.d([$.ul([$.li('sb')])]).K('sb')]).K('sbWr'),
        $.d([$.d([$.p('Cont')]).K('cont')]).K("contWr")
    ]).K('ct clFx')
    //http://jsfiddle.net/posco2k8/c55w7/

    $CSS()
}
TABL=function(){$.x().h1('table')



    $CSS({  'table, th, td': {bor: '1px solid black' } })


    $.t().A(
        $.cg().A(
            $.cl().at('span','2').C('r'),
            $.cl().C('y') ),
        $.tr().A($.th('iSBN'), $.th('tt'), $.th('$')),
        $.tr().A($.td('3476896'), $.td('My first HTM'), $.td('$53')),
        $.tr().A($.td('43#@!~~~96'), $.td('My first CSS'), $.td('$60')) )

    $l($('body').oh())
    $l($('head').oh())

    $CSS()


    /* res:
     <body style="background-color: black;">
     <h1>table</h1><table>
     <colgroup><col span="2" style="background-color: red;">
     <col style="background-color: yellow;"></colgroup>
     <tr><th>iSBN</th><th>tt</th><th>$</th></tr><tr><td>3476896</td>
     <td>My first HTM</td><td>$53</td></tr>
     <tr><td>43#@!~~~96</td><td>My first CSS</td><td>$60</td></tr></table>
     </body>
     */

}



// sass
// mixins: insert new css pos, and new rules
// extend: share pops/styles between selectors

//placeholders: help extend to gen more effient output


//less
//mixins: a way of  of including ("mixing in") a bunch of properties from one rule-set into another rule-set
