$.nv=function(k, arr){

var nav = $('<nav>')

nav.K(k)

if(A(arr)){ _.e(arr,function(q){
nav.A(q)
})}

return nav.A()

}

$.aK=function(k, tx){

var a= $.a(tx)
a.K(k)
return a
}

BASIC=function(){z()

$.nav( "navbar navbar-dark bg-faded",[

$.aK( "navbar-brand" ,' Logo'),

$.ul([
 
 
  $.li().K("nav-item").A( $.aK("nav-link", 'Link1') ),
 $.li().K("nav-item").A( $.aK("nav-link", 'Link2') ),

$.li().K("nav-item").A( $.aK("nav-link", 'Link') )

]).K("nav navbar-nav")
  
  
])
 

 
}


DDD=function(){z();

    _.t(100, function(){

        $.sp('☰').css("padding-right",  0.1);

    });
   
}

Bs.nbClpBt=function(tg){
    
var bt = $.bt().K("navbar-toggler hidden-sm-up")
    bt.$gg('collapse')
        bt.$tg(tg)
    
    return bt
} 

Bs.tgb=function(id){
    
    var q = $.d()
    q.K("collapse navbar-toggleable-xs")
    q.id(id)
    return q
}


Bs.nb = function () {var g=G(arguments),
        
    
    $q = $.N().K("navbar")
    
    if(g.A){
        _.e(g.f, function(el){
            $q.A(el);
        });
    }
    return $q;
};




$.N=function(){
    var q = $('<nav>')
    return q
}
Bs.nbN_ = function(){
        var $q = $('<nav>')
        $q.K("navbar navbar-light bg-faded")
        return $q
}
Bs.nbBr=function(tx){
        
        var q = $.a(tx).K("navbar-brand")
        return q
    }

Bs.nIt=function(a){
  var q = $.li().K("nav-item")
    q.A(a)
    return q
}

Bs.nLk=function(tx, hrf){
    var q = $.a(tx, hrf)
    q.K("nav-link")
    return q
}
Bs.nItLk=function(tx){ 
    var lk = Bs.nLk(tx)
    return Bs.nIt(lk)
    
}
$.fn.$nbGg= $.fn.$nbGgr =function(){
    
    this.K("navbar-toggler")
    return this
}  
Bs.nbGgBt=function(tg){
    
    tg = tg || '#nb'
    
  var $q=  $.bt('☰').K("navbar-toggler")
        .$gg('collapse')
      
      $q.$tg(tg)
    
    return $q.K("hidden-sm-up")
    
}

Bs.tgbNb=function(id, itArr){
    var g=G(arguments),
        o= _.defaults(g.S_? {id:g.f, itArr: g.s}: {itArr:g.f},
            {id:'nb', itArr:[]}),
        $q = $.dK("collapse navbar-toggleable-xs").id(o.id)
        _.e(o.itArr, function(it){$q.A(it)})
    return $q
}

DDDDD=function(){z()

    
    var nav = $('<nav>').K("navbar navbar-light bg-faded")
        
        nav.A(
        $.bt('☰').K("navbar-toggler hidden-sm-up").attr({
            'data-toggle': 'collapse', 'data-target': '#nav-content'
        }),
        $.dK("collapse navbar-toggleable-xs").id("nav-content").A(
            $.a('Logo').K("navbar-brand"),
            $.ul([
                
                $.li().K('nav-item').A($.a('Link 1').K('nav-link')),
                $.li().K('nav-item').A($.a('Link 2').K('nav-link')),
                $.li().K('nav-item').A($.a('Link 3').K('nav-link'))
            
            ]).K("nav navbar-nav")
        )
    )
    
    Bs('+').A( nav )
}
DDDD = function () {z()
 
    Bs('+').A(
     
        Bs.nb().K("navbar-light").K("bg-faded")
            .A(
            Bs.nbGgBt('#nav-content').K("hidden-sm-up"),
            Bs.tgbNb("nav-content").A(
                Bs.nbBr('Logo'),  $.ul([Bs.nItLk('Link 1'),
                    Bs.nItLk('Link 9'), Bs.nItLk('Link 4')
                ]).K("nav navbar-nav")
            
                
            )
        )
    )
}
DDD = function () {z()
    Bs('+').A(
        Bs.nb() .A(
            Bs.nbGgBt('#nav-content').K("hidden-sm-up"),
            Bs.tgbNb("nav-content").A(
                Bs.nbBr('Logo'), $.ul([
                    
                    Bs.nItLk('Link 1'),
                    Bs.nItLk('Link 9'), Bs.nItLk('Link 4')
                
                ])//.K("nav navbar-nav")
            )
        )
    )
}

Bs.nItLks=function(){var g=G(arguments),
    ul = $.ul()
    
    
    if(g.A){ _.e(g.f,eLi) } else {g.e(eLi)}
    
    return ul.K("nav").K("navbar-nav")

    function eLi(li) {
        ul.A(Bs.nItLk(li))
    }
}


DDD = function () {z()
    Bs('+').A(
        
        
        
        
        Bs.nb([
            
            Bs.nbGgBt('#id'),
            
            
            Bs.tgbNb("id").A(
                Bs.nbBr('Wappy'),
                Bs.nItLks('create', 'play', 'social')
            )
            
            
            
            
        ])
    
    
    
    
        
        
        
    
    )
}

DDD = function () {
    z()
    
    Bs('+').A(
        Bs.nb([

            Bs.nbGgBt('#id'),


            Bs.tgbNb("id").A(
                Bs.nbBr('Wappy'),
                Bs.nItLks('create', 'play', 'social')
            )


        ])
    )
}

DDD = function () {z()

    Bs([
        
        
        
        Bs.nb([
            Bs.nbGgBt(),
            
            Bs.tgbNb([
                Bs.nbBr('Wappy'),
                Bs.nItLks(['create', 'play', 'social'])
            ])
        ])
        
    ])
}




Bs.NB=function(brand, itsArr){var g=G(arguments),
    
    nb = Bs.tgbNb([
        
        Bs.nbBr(brand),
        
        Bs.nItLks(itsArr)
    ])
  
    return nb
    
}



DDD = function () {
    z()

    Bs([


        Bs.nb([
            Bs.nbGgBt(),   Bs.NB('Wappy', [   'create', 'play', 'social'  ])
        ])

        
        
    ])

}


$nb=function(brand, itArr){


return    Bs.nb([
    
        Bs.nbGgBt(), Bs.NB(brand, itArr)
    ])


    
}


$BS = function (brand, itArr) {
    var nb,ct
    
    z()

    ct = Bs()


    nb = $nb(brand, itArr) 
    
    ct.A(nb)
   
    return ct
}


DNB = function () {z()

    Bs([
        
        
        $nb('Wappy', ['create', 'play', 'social'])
    
    ])    
    
}
 


 

DNZ=function(){

    
    ct = $BS('Wappy', ['create', 'play', 'social'])
    ct.A(
        well = $.dK('lead').C('grey')
    )
    
    well.A(
        $.bt('click me').K('btn btn-primary'),
        $.i('me')
    )
    
}




NAVBARDROPDOWN=function(){

    Bs.ddIt = function (a) {
        var q = $.li().K("dropdown-item")
        q.A(a)
        return q
    }
    Bs.ddM=function(){
        
        var g=G(arguments),
            $q = $.dK("dropdown-menu")
        
        if(g.A){
            
            _.e(g.f, function(q){$q.A(q)})
        }
        return $q
    }
    
    Bs.ddGg=function(tx){
        var g=G(arguments), $q= $.a(tx).K("nav-link dropdown-toggle")
    
        $q.data('toggle','dropdown')
        
        return $q
    }
    
    Bs.dd  = function () {
        var g = G(arguments),
            $q = $.li().K("nav-item dropdown")
        
        if(g.A){_.e(g.f, function(q){$q.A(q)})}
        return $q
    }
  

    
    z()
    dd =  Bs.dd([
        Bs.ddGg('create'),
        Bs.ddM([
            Bs.ddIt('upload pic'),  
            Bs.ddIt('edit pic'), 
            Bs.ddIt('delete pic') 
        ])
    ])
}




