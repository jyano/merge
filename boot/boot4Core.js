_A=function(q,ch){var g=G(arguments)
        if(A(ch)){_.e(ch,function(c){q.A(c)})}
        else if(ch){q.A(ch)}
        return q
}
$.q=function(str,arr){return _A($('<'+str+'>').A(),arr)}
$.aK=function(k,tx){return _A($.a(tx).K(k),G(arguments))}
$.N=function(){return _A($('<nav>'), G(arguments)) }
////
Bs=function(){
        var g=G(arguments);
        return _A($.d().K(g.p?'container-fliud':'container').A(),g)
}
//

$.fn.$tg = function(tg){return   this.at('data-target', tg)}
$.fn.$gg=function(gg){ return  this.at('data-toggle', gg) }
Bs.nbGgBt=function(tx){return $.bt(tx||'click me').K("navbar-toggler")}
Bs.togBt = function (tx, tg) {return  $.bt(tx||'click me').K("navbar-toggler").at('data-toggle', 'collapse').at('data-target', tg)}
Bs.bt=function(tx,fn){ return $.bt(tx||'click me',fn).K('btn btn-primary') }
 Bs.brand=function(tx){return $.a(tx).K("navbar-brand")}
Bs.nbHdr=function(){return $.d().K("navbar-header")}
Bs.ddHdr=function(tx){return $.li(tx).K("dropdown-header")}
Bs.dvdr=function(){return $.li().K("divider")}
Bs.liA=function(tx){return $.li().A($.a(tx))}
Bs.ddM=function(){return $.ul().K("dropdown-menu")}
Bs.car=function(){return $.sp().K('caret')}
Bs.dd=function(){return $.li().K('dropdown')}
Bs.nbN=function(){return $.ul().K('nav navbar-nav')}
Bs.mu=function(){return _A($.sp().K("text-muted"),G(arguments))}
Bs.J=function(){return _A($.dK('jumbotron'),G(arguments))}
Bs.clps=function(){return _A($.dK('collapse'),G(arguments))}
Bs.mut=function(tx){return $.sp(tx).K("text-muted")}
$.fn.$nb=function(){return this.K("navbar")}
$.fn.$nbBr=function(){return this.K("navbar-brand")}
$.fn.$nbL=function(){return this.K("navbar-light")}
$.fn.$nbD=function(){return this.K("navbar-dark")}
$.fn.$nbN=function(){return this.K("navbar-nav")}
$.fn.$nI=function(){return this.K("nav-item")}
$.fn.$n=function(){return this.K("nav")}
$.fn.bgF=function(){return this.K('bg-faded')}
$.fn.$dd=function(){return this.K('dropdown')}
$.fn.$nIdd=function(){return this.$dd().K('nav-item')}
$.fn.$nbGg=$.fn.$nbGgr=function(){return this.K("navbar-toggler")}
$.fn.$ddI=function(){return this.K("dropdown-item")}
$.fn.ddGg=function(){return this.K("dropdown-toggle").at('data-toggle','dropdown')}
$.fn.$ddM=function(){return this.K("dropdown-menu")}
$.fn.$nbTr=function(){return this.K("navbar-toggler hidden-sm-up")}
Bs.ddI=function(tx){return $.a(tx).$ddI()}
Bs.btDdBt=function(tx){ return Bs.bt(tx).ddGg() }// bt.K("dropdown-toggle"); bt.at('data-toggle','dropdown')
Bs.ddM=function(){ return _A($.d().$ddM(),G(arguments)) }
$.nv=function(k,arr){return _A($.N().A().K(k),G(arguments)) }
Bs.tgb=function(id){return $.dI(id||'tgb').K("collapse navbar-toggleable-xs") }
Bs.nb=function(){return _A($.N().K("navbar"),G(arguments))}
Bs.nbN_=function(){return $.N().K("navbar navbar-light bg-faded")}
Bs.nbBr=function(tx){return $.a(tx).K("navbar-brand") }
Bs.nIt=function(a){return _A($.li().K("nav-item"),G(arguments))}
Bs.nLk=function(tx,hrf){return $.a(tx,hrf).K("nav-link")}
Bs.nItLk=function(tx){return Bs.nIt(Bs.nLk(tx))}
Bs.ddIt=function(a){return _A($.li().K("dropdown-item"),G(arguments))}
Bs.ddM=function(){return _A($.dK("dropdown-menu"),G(arguments)) }
Bs.dd=function(){return _A($.d().$dd(),arguments) }
Bs.nIDd=function(){return _A($.li().$nIdd(),arguments)}
Bs.nbGgBt=function(tg){ return $.bt('☰').K("navbar-toggler").$gg('collapse').$tg(tg||'#nb') }
$nb=function(brand,itArr){return Bs.nb([Bs.nbGgBt(),Bs.NB(brand,itArr)])}
Bs.icB=function(n){var sp=$.sp(); _.t(n||1,function(){sp.A($.sp().K("icon-bar"))}); return sp }
Bs.tgbNb=function(id,itArr){var g=G(arguments),
    o=_.defaults(g.S_?{id:g.f,itArr:g.s}:{itArr:g.f},{id:'nb',itArr:[]})
        return _A($.dK("collapse navbar-toggleable-xs").id(o.id),
            o.itArr)}
Bs.nItLks=function(){var g=G(arguments),ul=$.ul(); if(g.A){_.e(g.f,eLi)} else{g.e(eLi)}
        return ul.K("nav").K("navbar-nav"); function eLi(li){ul.A(Bs.nItLk(li))}}
Bs.NB=function(brand,itsArr){return Bs.tgbNb([Bs.nbBr(brand),Bs.nItLks(itsArr)])}
$BS=function(brand,itArr){z(); return Bs().A($nb(brand,itArr))}



$BSW=function(){
        var g=G(arguments),o=_.df(
            S(g.t)?{br:g.f,n:g.s,c:g.t,ct:g[3]}:{br:g.f,n:g.s,ct:g.t},{c:'grey'}
        ),ct=_A(
            $.dK('lead').C(o.c),o.ch
        ),pg=$BS(o.br,o.n).A(ct)
        return ct
}
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
BSBT=function(){
        z()
        //STYLES
        Bs.bt('Primary').K('btn btn-primary')
        Bs.bt('Secondary').K('btn btn-secondary')
        Bs.bt('Success').K('btn btn-success')
        Bs.bt('Warning').K('btn btn-warning')
        Bs.bt('Danger').K('btn btn-danger')
        Bs.bt('Link').K('btn btn-link')
        //sizes
        Bs.bt('lg').K("btn-primary btn-lg")
        Bs.bt('lg').K("btn-secondary btn-lg")
        Bs.bt('sm').K("btn-primary btn-sm")
        Bs.bt('sm').K("btn-secondary btn-sm")
        Bs.bt('blk').K("btn-primary btn-lg btn-block")
        Bs.bt('blk').K("btn-secondary btn-lg btn-block")
        //outline
        Bs.bt('Pridmary').K('btn-primary-outline')
        Bs.bt('Secondary').K('btn-secondary-outline')
        Bs.bt('Success').K('btn-success-outline')
        Bs.bt('Warning').K('btn-warning-outline')
        Bs.bt('Danger').K('btn-danger-outline')
        Bs.bt('Link').K('btn-link-outline')
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
DNB=function(){
        z()
        Bs(
            [
                    $nb('Wappy',['create','play','social'])
            ]
        )
}
DNZ=function(){
        ct=$BS('Wappy',['create','play','social'])
        ct.A(
            well=$.dK('lead').C('grey')
        )
        well.A(
            $.bt('click me').K('btn btn-primary'),$.i('me')
        )
}
NAVBARALPHA=NBA=function(){
        ct=$BSW(
            'Wappy',['create','play','social'],'r',[$.i('me')]
        )
        _.in(
            3,function(){
                    ct.A($.i('chicks'))
            }
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
PERFECT=function(){
        z()
        var links=[
                    Bs.nItLk('Link 1'),Bs.nItLk('Link 9'),Bs.nItLk('Link 4')
            ],bt=Bs.nbGgBt('#nav-content').K("hidden-sm-up")
        nb=Bs.nb().K("navbar-light").K("bg-faded").A(
            bt,Bs.tgbNb("nav-content").A(
                Bs.nbBr('Logo'),$.ul(links).K("nav navbar-nav")
            )
        )
        Bs('+').A(nb)
}

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