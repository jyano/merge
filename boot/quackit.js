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

$.nav( "navbar navbar-light bg-faded",[

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

Bs.nb = function () {
    
  var $q = $.N().K("navbar")
    
    return $q
}

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
  var $q=  $.bt('☰').K("navbar-toggler")
        .$gg('collapse')
      
      $q.$tg(tg)

    return $q
    
}

Bs.tgbNb=function(id){
var $q = $.dK("collapse navbar-toggleable-xs")

    if(S(id)){$q.id(id)}
    return $q
}

DDDD=function(){z()

    
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
     
        Bs.nb().K("navbar-light bg-faded").A(
            Bs.nbGgBt('#nav-content').K("hidden-sm-up"),
            Bs.tgbNb("nav-content").A(
                Bs.nbBr('Logo'),  $.ul([Bs.nItLk('Link 1'),
                    Bs.nItLk('Link 9'), Bs.nItLk('Link 4')
                ]).K("nav navbar-nav")
            
                
            )
        )
    )
}



