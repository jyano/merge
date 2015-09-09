

ko.bH=  ko.bindingHandlers
ko.bH.randomOrder = {
    init: function(el, vA) { var ch = ko.vE.firstChild(el),  CH = []
        while(ch){ CH.push(ch); ch = ko.vE.nextSibling(ch) }
        ko.vE.emptyNode(el)
        while(CH.length) {ko.vE.prepend(el, CH.splice(R(CH), 1)[0])}
    }

    /*
     init: function(el, valAcc) {
     var childElems = []
     while(el.firstChild)
     childElems.push(el.removeChild(el.firstChild))
     while(childElems.length) {
     var randomIndex = M.fl(M.rn() * childElems.length),
     chosenChild = childElems.splice(randomIndex, 1);
     el.appendChild(chosenChild[0]);
     }
     }
     */
}

ko.bH.fadeVisible = {
    init: function(el, vA) {// 1st set el vs pop rel to val
       $(el).toggle(ko.unwrap(vA()))},
    update: function(el, vA) {//on change, slowly fade el in/out
         ko.unwrap(vA()) ? $(el).fadeIn() : $(el).fadeOut()}
}

ko.bH.hasFocus = {
    init: function(el, vA) {
        $(el).focus(function(){vA()(1)})
        $(el).blur(function(){vA()(0) }) },

    update: function(el, vA) {
        ko.uw(vA())? el.focus() : el.blur()
    }

}

$bH=function(b,o){
    if(F(o.u)){o.update= o.u}
    if(F(o)){o={update:o}}
    ko.bH[b]=o
    $.fn[b]=function(a){
        this.b(b, a)
    }
}

$bH('slV', function(el, vA) {
   var isChecked = ko.uw( vA() )
    isChecked ? $(el).slD(1800):
        $(el).slU(2000)
})




CHL=function(){$.x('o');

    $.h1('shown!').slV()

    $.cC()

    ok()
}



//working!!!
FCB=function(){_$({C:'u', t:  'read&write els “focusedness”  by binding it to  obserb',
    vm:{ editingName: $o()  },
    A:[
        $.ip().b("hasFocus: editingName"),
        $.h1('editing..').bVs('editingName'),
        $.bt('Edit').b( "enable: !editingName(), click:function() { editingName(true) }") ]
})}




/////


initialData = [
    { name: "Well-Travelled Kitten", sales: 352, price: 75.95 },
    { name: "Speedy Coyote", sales: 89, price: 190.00 },
    { name: "Furious Lizard", sales: 152, price: 25.00 },
    { name: "Indifferent Monkey", sales: 1, price: 99.95 },
    { name: "Brooding Dragon", sales: 0, price: 6350 },
    { name: "Ingenious Tadpole", sales: 39450, price: 0.35 },
    { name: "Optimistic Snail", sales: 420, price: 1.50 }
]

GRX=function(){$.x('x', 'grx')

    /*
     $CSS({


     body { font-family: arial; font-size: 14px; }
     .liveExample { padding: 1em; background-color: #EEEEDD; border: 1px solid #CCC; max-width: 655px; }
     .liveExample input { font-family: Arial; }
     .liveExample b { font-weight: bold; }
     .liveExample p { margin-top: 0.9em; margin-bottom: 0.9em; }
     .liveExample select[multiple] { width: 100%; height: 8em; }
     .liveExample h2 { margin-top: 0.4em; }

     .ko-grid { margin-bottom: 1em; width: 25em; border: 1px solid silver; background-color:White; }
     .ko-grid th { text-align:left; background-color: Black; color:White; }
     .ko-grid td, th { padding: 0.4em; }
     .ko-grid tr:nth-child(odd) { background-color: #DDD; }
     .ko-grid-pageLinks { margin-bottom: 1em; }
     .ko-grid-pageLinks a { padding: 0.5em; }
     .ko-grid-pageLinks a.selected { background-color: Black; color: White; }
     .liveExample { height:20em; overflow:auto }
     //Mobile Safari reflows pages slowly, so fix the height to avoid the need for reflows

     li { list-style-type: disc; margin-left: 20px; }


     })

     */



    $.d().at({'data-bind':'simpleGrid: gridViewModel' })
    $.bt('add item').at({ 'data-bind':'click: addItem'  })
    $.bt('sort by name').at({  'data-bind':'click: sortByName'  })
    $.bt('   Jump to first page').at({
        'data-bind':'click: jumpToFirstPage, enable: gridViewModel.currentPageIndex'})





    PagedGridModel = function(items) {

        this.items = ko.observableArray(items)

        this.addItem = function() { this.items.push({
            name: "New item", sales: 0, price: 100 })
        }


        this.sortByName = function() {
            this.items.sort(function(a, b) {
                return a.name < b.name ? -1 : 1})
        }

        this.jumpToFirstPage = function() {
            this.gridViewModel.currentPageIndex(0) }

        this.gridViewModel = new ko.simpleGrid.viewModel({
            data: this.items,
            columns: [
                { headerText: "Item Name", rowText: "name" },
                { headerText: "Sales Count", rowText: "sales" },
                { headerText: "Price", rowText: function (item) {
                    return "$" + item.price.toFixed(2) } }
            ],

            pageSize: 4  })
    }


    ok(
        new PagedGridModel(initialData)
    )

}
GRX=function(){$.x('x', 'grx1')


    $.d([



        $.d().at({'data-bind':'simpleGrid: gridViewModel' }),
        $.bt('add item').at({ 'data-bind':'click: addItem'  }),
        $.bt('sort by name').at({  'data-bind':'click: sortByName'  }),
        $.bt('   Jump to first page').at({

            'data-bind':'click: jumpToFirstPage, enable: gridViewModel.currentPageIndex'

        })



    ]).K('liveExample')



}

PLANS=[

    { name: "Mercury", type: "rock"},
    { name: "Venus", type: "rock"},
    { name: "Earth", type: "rock"},
    { name: "Mars", type: "rock"},
    { name: "Jupiter", type: "gasgiant"},
    { name: "Saturn", type: "gasgiant"},
    { name: "Uranus", type: "gasgiant"},
    { name: "Neptune", type: "gasgiant"}
]

Planets  = function() {
    this.planets = $oa(PLANS)
    this.typeToShow = $o("all");
    this.displayAdvancedOptions =$o(false);
    this.addPlanet = function(type) {this.planets.push({name: "New planet", type: type})}
    this.planetsToShow = ko.pc(function() {// Represents a filtered list of planets
        // i.e., only those matching the "typeToShow" condition
        var desiredType = this.typeToShow()
        if (desiredType == "all") return this.planets()
        return ko.utils.arrayFilter(this.planets(), function(planet) { return planet.type == desiredType });
    }, this);

    // Animation callbacks for the planets list
    this.showPlanetElement = function(el) {if (el.nodeType === 1) { $(el).hide().slideDown() } }

    this.hidePlanetElement = function(el) {if (el.nodeType === 1) {$(el).slideUp(function() { $(el).rm() }) } }
}


PLAN=function(){$.x('g', 'Plan')


    $.p().A(
        $.lb().A(

            $.cC('displayAdvancedOptions'),
            'Display advanced options'
        )
    )

    $.p().A(
        'Show:',
        $.lb([$.ip()]),
        $.lb([$.ip()]),
        $.lb([$.ip()])
    )


    /*
     <p data-bind='fadeVisible: displayAdvancedOptions'>
     Show:
     <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
     <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
     <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
     </p>*/


    $.d([$.d([ $.d()]) ])

    /*

     <div data-bind='template: { foreach: planetsToShow,
         beforeRemove: hidePlanetElement,
         afterAdd: showPlanetElement }'>
                     <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
      </div>

     */



$.p().A(
     $.bt('add rocky plan').b( 'click: addPlanet.bind($data, "rock")'),

     $.bt('add gas giant').b('click: addPlanet.bind($data, "gasgiant")')

     ).b('fadeVisible: displayAdvancedOptions')






    // Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
    // Could be stored in a separate utility library
    ok(new Planets())
}




VIRT=function(){_$({C:'p',



    A:[
        $.d().b({
            randomOrder:true
        }),
        $.d('First'),
    $.d('Second'),
    $.d('Third'),
    $.ul().bE('mDateTime').A( $.li().A( $.ul() ) ),
    $.uE("$root.matter.index.type()[$data]",[$.li().A()])]

})}


div=function(){

    $.dW=$.dBw=function(a,b){var d=$.d()
        .bW(a)

        if(A(b)){_.e(b,function(b){
            d.A(b)})}
        return d
    }

    $.dH=function(a){return $.d().bH(a)}
    $.dCm=function(a){return $.d().bCm(a)}
    $.dT=function(a){return $.d().bT(a)}
    $.dE=function(a,b){

        var d=  $.d().bE(a)
        if(A(b)){
            _.e(b,function(el){
                d.A(el)
            })}
        else if(S(b)){
            d.A(b)
        }
        return  d
    }
    $.dIf=function(a,b){
        var d =  $.d().bI(a)
        if(A(b)){_.e(b,function(b){d.A(b)})}
        return d
    }

};div()

pg=function(){

    $.pT=function(a){
        var p = $.p()
        p.bT(a)
        return p
    }
    $.pI=function(a,b,c,d){
        var p= $.p(b,c,d).bI(a)
    }

};pg()
span=function(){
    $.sT=$.spT= function(a,b){ return $.sp(b)
        .bT(a||'$data')
    }
    $.spVs=function(a){return $.sp().b('vs',a)}

};span()







anc=function(){$.a$=function(t,fn){
    return $.a(t).b('$', fn)}
    $.aA=function(a,b,c,d){
        return $.a(b,c,d).bA(a)
    }};anc()
bt=function(){$.$bt=function(a,b){var g=G(arguments)

    b=b||a
    if(g.n){
        b = '$parent.'+b
    }

    return $.bt(a).b$(b)

}
    $.bt$=$.btB$=function(a,b,c){
        var bt=   $.bt(a).b$(a)

        if(c){bt.bEn(c)}

        return bt
    }

};bt()


form=function(){
    $.fSb=function(a,b){var f= $.f()
        f.b({sb:a})
        if(A(b)){_.e(b,function(el){
            f.A(el)
        })}
        return f
    }
    $.fSb=$.fBsb=function(a,b){var f = $.f()
        f.bSb(a)
        if(A(b)){_.e(b, function(b){ f.A(b) })}
        return f
    }

};form()
$.h1T=$.h1Bt=function(a,b){
    var h1= $.h1(a)
    h1.bT(b||a)
    return h1

}
list=function(){

    $.liT=$.liBt=function(a){

        return $.li().bT(a)
    }

    $.olE=$.olBe=function(a,b){var ol= $.ol().bE(a)

        if(b){ol.A(b)}
        return ol
    }

};list()

inp=function(){
    $.iV=$.ipV=$.ipBv=function(){var g=G(arguments),ip
        ip = $.ip()
        ip.bV.apply(ip, g)
        return ip
    }
    $.ipTi=function(a){return $.ip().bTi(a)}
    $.cC=$.cbC=function(a){
        if(U(a)){a='$'}
        return $.cb().bC(a)
    }

    $.s$=function(a,b,c,d){ return $.sb(b,c,d).b$(a) }
    $.pwTi=function(a){return $.pw().bTi(a)}

    $.sO=$.slO=function(a){ return $.sl().bO(a) }

};inp()
tabl=function(){

    $.tBE=function(a,b){
        var tB= $.tB()
        tB.bE(a)
        if(A(b)){
            _.e(b, function(el){
                tB.A(el)})
        }
        return tB
    }

    $.tdT=function(a,b){var td=$.td()
        td.bT(a)
        if(A(b)){
            _.e(b,function(el){
                td.A(el)
            })}
        return td
    }


};tabl()
uE=function(){

    $.U=function(){var g=G(arguments)
        return $.uE(g.f,[$.li(g.s)])
    }
    $.uE=$.ulE=function(a,b,c){var g=G(arguments)

        var ul=  $.ul().bE(a)

        if(c){
            b= $.li( _.r(g) )
        }

        else if(O(b) && !A(b)){
            b=[b]
        }

        if(A(b)){
            _.e(b,function(el){
                ul.A(el)
            })
        }


        else if(S(b)){
            ul.A(b)
        }
        return  ul
    }
};uE()

$.fn.b =$.fn.ko= function(a,b){

    var o=[], str,

        KOob= {

            t:'text', h:'html', s:'css', y:'style',

            a:'attr', e:'foreach', i:'if', n:'ifnot', w:'with', $:'click', ev:'event', sb:'submit',

            en:'enable', d:'disable', V:'valueUpdate', vs:'visible', f:'hasFocus',

            c:'checked', ch:'checked', v:'value',  o:'options',

            ti:'textInput', so:'selectedOptions', u:'uniqueName', tp:'template', cm:'component'
        }


    if(O(a)){
        _.e(a, function(v,k){if(KOob[k]){k=KOob[k]}; o.push(k + ':'+ v)})
        str=  o.join() }
    else if( a.indexOf(':') == -1){str = KOob[a]? KOob[a]:a   + ':' +   b|| '$'}
    else { str = a }
    this.at({'data-bind': str })
    return this
}





$.fn.bEn=function(a){return this.b('en', a)}

$.fn.bTi=function(a){ return this.b({ti: a}) }
$.fn.bH=function(s){return this.b('html', s  )}
$.fn.bS=function(s){return this.b('css', s  )}
$.fn.bY=$.fn.bSy=function(s){return this.b('style', s  )}
$.fn.bA= $.fn.bAt= function(s){return this.b('attr', s  )}
$.fn.bI= $.fn.bIf=function(s){return this.b('if', s  )}
$.fn.bN= $.fn.bIN=function(s){return this.b('ifnot', s  )}

$.fn.bW=function(s){return this.b('with', s  )}


$.fn.b$=function(s){return this.b('click', s  )}
$.fn.bEv=function(s){return this.b('event', s  )}


$.fn.bSb=function(s){
    return this.b('submit', s  )
}




$.fn.bEn=function(s){return this.b('enable', s  )}
$.fn.bD=function(s){return this.b('disable', s  )}
$.fn.bVs=function(s){return this.b('visible', s)}
$.fn.bC=function(s){return this.b('checked', s)}
$.fn.bF=function(s){return this.b('hasFocus', s)}
$.fn.bO=function(s){return this.b('options', s)}
$.fn.bSO=function(s){return this.b('selectedOptions', s)}
$.fn.bTI=function(s){return this.b('textInput', s)}
$.fn.bTp=function(s){return this.b('template', s)}

$.fn.bT=function(s){return  this.b('text', s||'$data')}
$.fn.bE=function(s){ return this.b('foreach', s)}

$.fn.bV=function(s){var g=G(arguments)
    str = "value: " + s
    if(!g.n){str += ", valueUpdate: 'afterkeydown'"}
    this.b(  str )
    return this
}

$.fn.koE=$.fn.eKo= function(a){
    alert('koE')
    return this.bindKO('fe',a) }
$.fn.eD=$.fn.eB=  function(a){ alert('ko eD')
    return this.bindKOEach('$data.'+a) }

$.fn.bU= $.fn.bUN=function(s){return this.b('uniqueName', s)}



$.fn.bCm=function(s){return this.b('component', s  )}