$l("boot4Core")
$.q = function (str, arr) {
    var q = $('<' + str + '>').A()

    if (A(arr)) {
        _.e(arr, function (el) {
            q.A(el)
        })
    }
    return q
}


Bs =   function () {
    
    var g = G(arguments),
        
        d = $.d().K(g.p? 'container-fliud' : 'container' )
    
    if (g.A) {
        
        _.e(g.f, function (q) {
            
            d.A(q);
        });
    }
    else if (g.f) { d.A(q);
    }
    return d.A();

}


Bs.icB = function (num) {
    num = num || 1

    var sp = $.sp()

    _.t(num, function () {

        sp.A($.sp().K("icon-bar"))
    })


    return sp

}
Bs.brand = function (tx) {
    return $.a(tx).K("navbar-brand")
}
Bs.nbTog = function (id) {

    id = id || "#navbar"
    var bt = $.bt().K("navbar-toggle collapsed")
    bt.data('toggle', "collapse")

    bt.data('target', id)
    return bt
}


Bs.ddTog = function (tx) {
    tx = tx || 'Dropdown'

    var a = $.a().K("dropdown-toggle").data('toggle', "dropdown")


    a.A(
        tx, Bs.car()
    )


    return a
}


Bs.nbHdr = function () {
    var d = $.d().K("navbar-header")
    return d

}
Bs.ddHdr = function (tx) {
    var li = $.li().K("dropdown-header")
    li.A(tx)
    return li
}
Bs.dvdr = function () {
    return $.li().K("divider")
}
Bs.liA = function (tx) {
    return $.li().A($.a(tx))
}
Bs.ddM = function () {
    var ul = $.ul()
    ul.K("dropdown-menu")
    return ul

}
Bs.car = function () {
    return $.sp().K('caret')
}
Bs.dd = function () {

    return $.li().K('dropdown')

}
Bs.nbN = function () {
    return $.ul().K('nav navbar-nav')
}


Bs.mu=function(){
    var g=G(arguments),
        sp =   $.sp().K("text-muted")
    
    if (g.A) {
        _.e(g.f, function (q) {
            sp.A(q) }) }
    
    else if (g.f) { 
        sp.A(g.f) }
    
    return sp
}
 


 Bs.J = function () {
    var g = G(arguments),
        d = $.d().K('jumbotron')
    
    if (g.A) {
        _.e(g.f, function (q) {
            d.A(q)
        })
    }
    
    else if (g.f) {  d.A(g.f)  }
    return d.A()
}

Bs.clps = function () {
    var g = G(arguments),
        d = $.d().K('collapse')

    if (g.A) {
        _.e(g.f, function (q) {
            d.A(q)
        })
    }

    else if (g.f) {
        d.A(g.f)
    }
    return d.A()
}


Bs.mut=function(tx){
   return $.sp(tx).K("text-muted")
}

$.fn.$tg = function(tg){
    this.at('data-target', tg)
    return this
}


$.fn.$gg=function(gg){
    this.at('data-toggle', gg)
    return this
}

TXX = COLLAP = function () {z()
   Bs(   Bs.J( $.h1('jumbo') )  )
    $.dK("collapse").id("exCollapsingNavbar").A(
        $.dK("bg-inverse p-a").A(
            $.h4('Collapsed content'),
            Bs.mut('Toggleable via the navbar brand') 
        )
    ),
       // $('nav').K("navbar navbar-light bg-faded").A(
            Bs.nbGgBt().$gg('collapse').$tg( "#exCollapsingNavbar")
       // )


}

Bs.nbGgBt=function(tx){
    tx= tx || 'click me'
   return $.bt(tx).K("navbar-toggler")
}


Bs.togBt = function (tx, tg) {
    var g = G(arguments), bt
    tx = tx || 'click me'
    bt = $.bt(tx)
    bt.K("navbar-toggler")
    bt.at('data-toggle', 'collapse')
    bt.at('data-target', tg)
    return bt
}

 
