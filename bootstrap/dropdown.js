//dropdown
$.fn.$dd=function(){return this.K('dropdown')}
Bs.dd=function(){return $.li().K('dropdown')}
Bs.dd=function(){return _A($.d().$dd(),arguments) }
//dropdown header
Bs.ddHdr=function(tx){return $.li(tx).K("dropdown-header")}
//dropdown button(toggler)
$.fn.ddGg=function(){return this.K("dropdown-toggle").at('data-toggle','dropdown')}
Bs.btDdBt=function(tx){ return Bs.bt(tx).ddGg() }
$.fn.$tg=function(tg){return this.at('data-target',tg)}
$.fn.$gg=function(gg){ return this.at('data-toggle',gg) }


// bt.K("dropdown-toggle"); bt.at('data-toggle','dropdown')
//dropdown menu

$.fn.$ddM=function(){return this.K("dropdown-menu")}
Bs.ddM=function(){return $.ul().K("dropdown-menu")}
Bs.ddM=function(){return _A($.dK("dropdown-menu"),G(arguments)) }
Bs.ddM=function(){ return _A($.d().$ddM(),G(arguments)) }
//dropdown items
$.fn.$nIdd=function(){return this.$dd().K('nav-item')}
$.fn.$ddI=function(){return this.K("dropdown-item")}
Bs.ddI=function(tx){return $.a(tx).$ddI()}
Bs.ddIt=function(a){return _A($.li().K("dropdown-item"),G(arguments))}
Bs.nIDd=function(){return _A($.li().$nIdd(),arguments)}
Bs.car=function(){return $.sp().K('caret')}
Bs.dvdr=function(){return $.li().K("divider")}
COLLAP=function(){
        z()
        Bs(Bs.J($.h1('jumbo')))
        $.dK("collapse").id("exCollapsingNavbar").A(
            $.dK("bg-inverse p-a").A(
                $.h4('Collapsed content'),Bs.mut('Toggleable via the navbar brand')
            )
        ), // $('nav').K("navbar navbar-light bg-faded").A(
            Bs.nbGgBt().$gg('collapse').$tg("#exCollapsingNavbar")
        // )
}
DRD=function(){
        z()
        Bs.dd(
            [
                    Bs.btDdBt('afsdfazzzzsfsdfsd'),Bs.ddM(
                [
                        Bs.ddI('Our Story'),Bs.ddI('Our Bory'),Bs.ddI('Our .. who we kidasfdding..')
                ]
            )
            ]
        )
}
BASIC=function(){
        z()
        $.nv(
            "navbar navbar-dark bg-faded",[
                    $.aK("navbar-brand",' Logo'),$.ul(
                        [
                                $.li().K("nav-item").A($.aK("nav-link",'Link1')),$.li().K("nav-item").A($.aK("nav-link",'Link2')),$.li().K("nav-item").A($.aK("nav-link",'Link'))
                        ]
                    ).K("nav navbar-nav")
            ]
        )
}
DDD=function(){
        z();
        _.t(
            100,function(){
                    $.sp('☰').css("padding-right",0.1);
            }
        );
}
PERFECT1=function(){
        z()
        var nav=$('<nav>').K("navbar navbar-light bg-faded")
        nav.A(
            $.bt('☰').K("navbar-toggler hidden-sm-up").attr(
                {
                        'data-toggle':'collapse','data-target':'#nav-content'
                }
            ),$.dK("collapse navbar-toggleable-xs").id("nav-content").A(
                $.a('Logo').K("navbar-brand"),$.ul(
                    [
                            $.li().K('nav-item').A($.a('Link 1').K('nav-link')),$.li().K('nav-item').A($.a('Link 2').K('nav-link')),$.li().K('nav-item').A($.a('Link 3').K('nav-link'))
                    ]
                ).K("nav navbar-nav")
            )
        )
        Bs('+').A(nav)
}
DDD3=function(){
        z()
        Bs('+').A(
            Bs.nb(
                [
                        Bs.nbGgBt('#id'),Bs.tgbNb("id").A(
                    Bs.nbBr('Wappy'),Bs.nItLks('create','play','social')
                )
                ]
            )
        )
}
DDD2=function(){
        z()
        Bs('+').A(
            Bs.nb(
                [
                        Bs.nbGgBt('#id'),Bs.tgbNb("id").A(
                    Bs.nbBr('Wappy'),Bs.nItLks('create','play','social')
                )
                ]
            )
        )
}
DDD1=function(){
        z()
        Bs(
            [
                    Bs.nb(
                        [
                                Bs.nbGgBt(),Bs.tgbNb(
                            [
                                    Bs.nbBr('Wappy'),Bs.nItLks(['create','play','social'])
                            ]
                        )
                        ]
                    )
            ]
        )
}
DDD=function(){
        z()
        Bs(
            [
                    Bs.nb(
                        [
                                Bs.nbGgBt(),Bs.NB('Wappy',['create','play','social'])
                        ]
                    )
            ]
        )
}
//Wrap the dropdown trigger element within an element with Bootstrap's .dropdown class, or another element that uses position: relative;
DRPDOWN=function(){
        z()
        Bs.dd().A(
            Bs.bt('About Usass').id('about-us').K("btn btn-primary dropdown-toggle").at('data-toggle','dropdown'),$.dK("dropdown-menu").A(
                $.a('Our Story').K("dropdown-item"),$.a('Our Bory').K("dropdown-item"),$.a('Our .. who we kidding..').K("dropdown-item")
            )
        )
}
//Add Bootstrap's .dropdown-toggle class and add data-toggle="dropdown" to the trigger element (i.e. the element that users click on to expand the dropdown). In the above example, the trigger is a <button> element.
//Wrap all dropdown items in a <div> with .dropdown-menu applied //Each dropdown item uses the <a> element (but can also use the <button> element) with a class of .dropdown-item.
/*

old=function(){
       
       Bs.ddGg=function(tx){
               alert('Bs.ddGg broken')
               var g=G(arguments),$q=$.a(tx).K("nav-link dropdown-toggle")
               //i think this dont work
               $q.data('toggle','dropdown')
               return $q
       }
       // undefinied??? $gg('collapse')
       Bs.nbClpBt=function(tg){
               alert('Bs.nbClpBt')
               var bt=$.bt().K("navbar-toggler hidden-sm-up")
               bt.$gg('collapse')
               bt.$tg(tg)
               return bt
       }
       Bs.nbTog=function(id){
               id=id||"#navbar"
               var bt=$.bt().K("navbar-toggle collapsed")
               bt.data('toggle',"collapse")
               bt.data('target',id)
               return bt
       }
       //Bs.ddTog=function(tx){return =$.a().K("dropdown-toggle").data('toggle',"dropdown").A( tx||'Dropdown', Bs.car())}
}
*/