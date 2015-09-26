$.nv=function(k,arr){
        var nav=$('<nav>')
        nav.K(k)
        if(A(arr)){
                _.e(
                    arr,function(q){
                            nav.A(q)
                    }
                )
        }
        return nav.A()
}
Bs.nbN=function(){return $.ul().K('nav navbar-nav')}
Bs.nItLks=function(){
        var g=G(arguments),ul=$.ul();
        if(g.A){_.e(g.f,eLi)}else{g.e(eLi)}
        return ul.K("nav").K("navbar-nav");
        function eLi(li){ul.A(Bs.nItLk(li))}
}
Bs.NB=function(brand,itsArr){return Bs.tgbNb([Bs.nbBr(brand),Bs.nItLks(itsArr)])}
Bs.clps=function(){return _A($.dK('collapse'),G(arguments))}
Bs.nbN_=function(){
        var $q=$('<nav>')
        $q.K("navbar navbar-light bg-faded")
        return $q
}
Bs.nIt=function(a){
        var q=$.li().K("nav-item")
        q.A(a)
        return q
}
Bs.nLk=function(tx,hrf){
        var q=$.a(tx,hrf)
        q.K("nav-link")
        return q
}
Bs.nItLk=function(tx){
        var lk=Bs.nLk(tx)
        return Bs.nIt(lk)
}
Bs.nItLks=function(){
        var g=G(arguments),ul=$.ul()
        if(g.A){ _.e(g.f,eLi) }else{g.e(eLi)}
        return ul.K("nav").K("navbar-nav")
        function eLi(li){
                ul.A(Bs.nItLk(li))
        }
}
function brand(){
Bs.brand=function(tx){
        return $.a(tx).K("navbar-brand")}
$.fn.$nbBr=function(){
        return this.K("navbar-brand")
}
        Bs.nbBr=function(tx){return $.a(tx).K("navbar-brand") }
        Bs.nbBr=function(tx){
                var q=$.a(tx).K("navbar-brand")
                return q
        }
};brand()
function navbarKlass(){
$.fn.$nb=function(){return this.K("navbar")}
$.fn.$nbL=function(){return this.K("navbar-light")}
$.fn.$nbD=function(){return this.K("navbar-dark")}
$.fn.$nbN=function(){return this.K("navbar-nav")}
Bs.nbN_=function(){return $.N().K("navbar navbar-light bg-faded")}
        Bs.nbHdr=function(){return $.d().K("navbar-header")}
};navbarKlass()
function toggle(){
        Bs.nbGgBt=function(tx){
                return $.bt(tx||'click me').K("navbar-toggler")
        }
        Bs.togBt=function(tx,tg){
                return $.bt(tx||'click me').K("navbar-toggler").at('data-toggle','collapse').at('data-target',tg)
        }
        Bs.nbClpBt=function(tg){
                var bt=$.bt().K("navbar-toggler hidden-sm-up")
                bt.$gg('collapse')
                bt.$tg(tg)
                return bt
        }
        Bs.tgb=function(id){
                var q=$.d()
                q.K("collapse navbar-toggleable-xs")
                q.id(id)
                return q
        }
        $.fn.$nbTr=function(){return this.K("navbar-toggler hidden-sm-up")}
Bs.nbGgBt=function(tg){ return $.bt('☰').K("navbar-toggler").$gg('collapse').$tg(tg||'#nb') }
$.fn.$nbGg=$.fn.$nbGgr=function(){return this.K("navbar-toggler")}
Bs.tgb=function(id){return $.dI(id||'tgb').K("collapse navbar-toggleable-xs")}
        Bs.tgbNb=function(id,itArr){
                var g=G(arguments),o=_.defaults(g.S_?{id:g.f,itArr:g.s}:{itArr:g.f},{id:'nb',itArr:[]})
                return _A(
                    $.dK("collapse navbar-toggleable-xs").id(o.id),o.itArr
                )
        }
        $.fn.$nbGg=$.fn.$nbGgr=function(){
                this.K("navbar-toggler")
                return this
        }
        Bs.nbGgBt=function(tg){
                tg=tg||'#nb'
                var $q=$.bt('☰').K("navbar-toggler").$gg('collapse')
                $q.$tg(tg)
                return $q.K("hidden-sm-up")
        }
        Bs.tgbNb=function(id,itArr){
                var g=G(arguments),o=_.defaults(
                        g.S_?{id:g.f,itArr:g.s}:{itArr:g.f},{id:'nb',itArr:[]}
                    ),$q=$.dK("collapse navbar-toggleable-xs").id(o.id)
                _.e(o.itArr,function(it){$q.A(it)})
                return $q
        }
        Bs.icB=function(n){
                var sp=$.sp();
                _.t(n||1,function(){sp.A($.sp().K("icon-bar"))});
                return sp
        }
};toggle()
function lay(){
        Bs.nbNav=Bs.nb=function(){
                return _A($.N().K("navbar"),G(arguments))
        }
        $BS=function(brand,itArr){
        z();
        return Bs().A($nb(brand,itArr))
}
$BSW=function(){
        var g=G(arguments),o=_.df(
            S(g.t)?{br:g.f,n:g.s,c:g.t,ct:g[3]}:{br:g.f,n:g.s,ct:g.t},{c:'grey'}
        ),ct=_A(
            $.dK('lead').C(o.c),o.ch
        ),pg=$BS(o.br,o.n).A(ct)
        return ct
}
        $BS=function(brand,itArr){
                var nb,ct
                z()
                ct=Bs()
                nb=$nb(brand,itArr)
                ct.A(nb)
                return ct
        }
};lay()
function makeNb(){
        $nb=function(brand,itArr){return Bs.nb([Bs.nbGgBt(),Bs.NB(brand,itArr)])}
        Bs.nb=function(){
                var g=G(arguments),$q=$.N().K("navbar")
                if(g.A){
                        _.e(
                            g.f,function(el){
                                    $q.A(el);
                            }
                        );
                }
                return $q;
        };
        Bs.NB=function(brand, itsArr){var g=G(arguments),
    nb = Bs.tgbNb([

            Bs.nbBr(brand),

            Bs.nItLks(itsArr)
    ])
        return nb
}
$nb=function(brand, itArr){
        return Bs.nb([

                Bs.nbGgBt(), Bs.NB(brand, itArr)
        ])
}
        };makeNb()
 
function apps(){
        BASIC=function(){
                z()
                $.nav(
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
        DDDDD=function(){
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
        DDDD=function(){
                z()
                Bs('+').A(
                    Bs.nb().K("navbar-light").K("bg-faded").A(
                        Bs.nbGgBt('#nav-content').K("hidden-sm-up"),Bs.tgbNb("nav-content").A(
                            Bs.nbBr('Logo'),$.ul(
                                [
                                        Bs.nItLk('Link 1'),Bs.nItLk('Link 9'),Bs.nItLk('Link 4')
                                ]
                            ).K("nav navbar-nav")
                        )
                    )
                )
        }
        DDD=function(){
                z()
                Bs('+').A(
                    Bs.nb().A(
                        Bs.nbGgBt('#nav-content').K("hidden-sm-up"),Bs.tgbNb("nav-content").A(
                            Bs.nbBr('Logo'),$.ul(
                                [
                                        Bs.nItLk('Link 1'),Bs.nItLk('Link 9'),Bs.nItLk('Link 4')
                                ]
                            )//.K("nav navbar-nav")
                        )
                    )
                )
        }
        DDD=function(){
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
        DDD=function(){
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
        DDD=function(){
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
        function perfect(){
                PERFECT=function(){
                        z()
                        links=[
                                Bs.nItLk('Link 1'),Bs.nItLk('Link 9'),Bs.nItLk('Link 4')
                        ]
                        bt=Bs.nbGgBt('#nb').K("hidden-sm-up")
                        nb=Bs.nb().K("navbar-light").K("bg-faded").A(
                            bt,Bs.tgbNb("nb").A(
                                Bs.nbBr('Logo'),$.ul(links).K("nav navbar-nav")
                            )
                        )
                        Bs('+').A(nb)
                        $l(bt.oh())
                }
                PERFECTNAVBARDROPDOWN=NDD=function(){
                        z()
                        links=[
                                Bs.nItLk('Link 1'),Bs.nItLk('Link 9'),Bs.dd().A(
                                    Bs.bt('About Usass').id('about-us').K("btn btn-primary dropdown-toggle").at('data-toggle','dropdown'),$.dK("dropdown-menu").A(
                                        $.a('Our Story').K("dropdown-item"),$.a('Our Bory').K("dropdown-item"),$.a('Our .. who we kidding..').K("dropdown-item")
                                    )
                                ),Bs.nItLk('Link 4')
                        ]
                        bt=Bs.nbGgBt('#nb').K("hidden-sm-up")
                        nb=Bs.nb().K("navbar-light").K("bg-faded").A(
                            bt,Bs.tgbNb("nb").A(
                                Bs.nbBr('Logo'),$.ul(links).K("nav navbar-nav")
                            )
                        )
                        Bs('+').A(nb)
                }
        };perfect()
        FUNNYNAVBARERR=function(){
                z()
                Bs('+').A(
                    Bs.nb().A(
                        Bs.nbGgBt('#nav-content').K("hidden-sm-up"),Bs.tgbNb("nav-content").A(
                            Bs.nbBr('Logo'),$.ul(
                                [
                                        Bs.nItLk('Link 1'),Bs.nItLk('Link 9'),Bs.nItLk('Link 4')
                                ]
                            )//.K("nav navbar-nav")
                        )
                    )
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
        testAndSeeCond()
        function testAndSeeCond(){
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
        }
        function UnderCon(){
        
                NVB=function(){
                        z()
                        $dropdownMenu=$.ul().K('dropdown-menu').A(
                            $('<li><a href="#">Action</a></li>'),$('<li><a href="#">Another action</a></li>'),$('<li><a href="#">Something else here</a></li>'),$('<li role="separator" class="divider"></li>'),$('<li class="dropdown-header">Nav header</li>'),$('<li><a href="#">Separated link</a></li>'),$('<li><a href="#">One more separated link</a></li>')
                        )
                        navbarNav=$.ul().K("nav navbar-nav").A(
                            $('<li class="active"><a href="#">Home</a></li>'),$('<li><a href="#about">About</a></li>'),$('<li><a href="#contact">Contact</a></li>'),$.li().K('dropdown').A(
                                $('<a href="#" class="dropdown-toggle" data-toggle="dropdown"  >Dropdown <span class="caret"></span></a>'),$dropdownMenu
                            )
                        )
                        navbarForm=$.f().K("navbar-form navbar-left").A(
                            $('<div class="form-group"><input type="text" class="form-control" placeholder="Search"></div>'),$('<button type="submit" class="btn btn-default">Submit</button>')
                        )
                        navbarRight=$.ul().K("nav navbar-nav navbar-right").A(
                            $('<li><a href="#">Link</a></li>'),$('<li><a href="#">Link</a></li>'),$('<li><a href="#">Link</a></li>')
                        )
                        navbarHeader=$('<div class="navbar-header"><a class="navbar-brand" href="#">Project name</a></div>')
                        $('<nav class="navbar navbar-default navbar-fixed-top">').A(
                            $('<div>').K("container").A().A(navbarHeader,$.d().id("navbar").A(navbarNav,navbarForm,navbarRight))
                        ).A()
                        $.d().K("container").A(
                            $.d().K("page-header").A(
                                $('<h1>Non-responsive Bootstrap</h1>'),$.p().K("lead").A(
                                    'Disable the responsiveness of Bootstrap by fixing the width of the container and using the first grid system tier',$('<a href="http://getbootstrap.com/getting-started/#disable-responsive">Read the documentation</a>'),'for more information'
                                )
                            ),$('<h3>What changes</h3>'),$.p().A(
                                'Note the lack of the',$('<code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code>'),', which disables the zooming aspect of sites in mobile devices. In addition, we reset our containers width and changed the navbar to prevent collapsing, and are basically good to go.'
                            ),$('<h3>Regarding navbars</h3>'),$.p().A(
                                'As a heads up, the navbar component is rather tricky here in that the styles for displaying it are rather specific and detailed.','Overrides to ensure desktop styles display are not as performant or sleek as one would like.','Just be aware there may be potential gotchas as you build on top of this example when using the navbar.'
                            ),$('<h3>Browsers, scrolling, and fixed elements</h3>'),$.p().A(
                                'Non-responsive layouts highlight a key drawback to fixed elements',$('<strong class="text-danger">Any fixed component, such as a fixed navbar, will not be scrollable when the viewport becomes narrower than the page content.</strong>'),'In other words, given the non-responsive container width of 970px and a viewport of 800px, youll potentially hide 170px of content'
                            ),$('<p>There is no way around this as its default browser behavior. The only solution is a responsive layout or using a non-fixed element.</p>'),$('<h3>Non-responsive grid system</h3>'),$('<div class="row">        <div class="col-xs-4">One third</div>        <div class="col-xs-4">One third</div><div class="col-xs-4">One third</div></div>')
                        )
                }
                BSNAVBAR=function(){
                        z()
                        $.h1('hfafdaffadfd')
                        $('<nav>').A().K("navbar navbar-default navbar-fixed-top").A(
                            $.d().K("container").A(
                                Bs.nbHdr().A(
                                    Bs.nbTog().A($.sp('Toggle navigation'),Bs.icB(3)),Bs.brand('Project name')
                                ),$.d().id("navbar").K("navbar-collapse collapse").A(
                                    Bs.nbN().A(
                                        $('<li class="active"><a href="#">Home</a></li>'),$('<li><a href="#about">About</a></li>'),$('<li><a href="#contact">Contact</a></li>'),Bs.dd().A(
                                            Bs.ddTog(),Bs.ddM().A(
                                                Bs.liA('Action'),Bs.liA('Another action'),Bs.liA('Something else here'),Bs.dvdr(),Bs.ddHdr('Nav header'),Bs.liA('Separated link'),Bs.liA('One more separated link')
                                            )
                                        )
                                    ),$.ul().K("nav navbar-nav navbar-right").A(
                                        $('<li><a href="../navbar/">Default</a></li>'),$('<li><a href="../navbar-static-top/">Static top</a></li>'),$('<li class="active"><a href="./">Fixed top </a></li>')
                                    )
                                )
                            )
                        )
                        /*
                    
                    
                    
                         <div class="container">
                    
                    
                    
                    
                    
                         <!-- Main component for a primary marketing message or call to action -->
                         <div class="jumbotron">
                         <h1>Navbar example</h1>
                         <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
                         <p>To see the difference between static and fixed top navbars, just scroll.</p>
                         <p>
                         <a class="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs &raquo;</a>
                         </p>
                         </div>
                    
                         </div> <!-- /container -->
                    
                         */
                }
                NVBB=function(){
                        z()
                        function head(){/*
             <html lang="en">
             <head>
             <meta charset="utf-8">
             <meta http-equiv="X-UA-Compatible" content="IE=edge">
             <meta name="viewport" content="width=device-width, initial-scale=1">
             <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
             <meta name="description" content="">
             <meta name="author" content="">
             <link rel="icon" href="../../favicon.ico">
        
             <title>Navbar Template for Bootstrap</title>
        
             <!-- Bootstrap core CSS -->
             <link href="../../dist/css/bootstrap.min.css" rel="stylesheet">
        
             <!-- Custom styles for this template -->
             <link href="navbar.css" rel="stylesheet">
        
             <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
             <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>
             </head>
        */
                        }
        
                        /*
                         
                         <div class="container">
                    
                                 <div class="collapse" id="navbar-header">
                                         <div class="inverse p-a">     <h3>Collapsed content</h3>     <p>Toggleable via the navbar brand.</p></div>
                                 </div>
                                 
                                 
                                 
                                 
                                 <div class="navbar navbar-default navbar-static-top">
                                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-header"> 
                                        &#9776;   
                                        </button> </div>
                            
                            
                            
                            
                                  <div class="jumbotron">
                                         <h1>Navbar example</h1>
                                         <p>This example is a quick exercise to illustrate how the default navbar works. It's placed within a <code>.container</code> 
                                         to limit its width and will scroll with the rest of the page's content.</p>
                                         <p> <a class="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs &raquo;</a> </p>
                                 </div>
                            
                            
                            
                    
                    
                         </div> <!-- /container -->
                    
                     
                        
                         
                         
                         */
                }
                NVB=FUNNYPAGE=function(){
                        z()
                        $dropdownMenu=$.ul().K('dropdown-menu').A(
                            $('<li><a >Action</a></li>'),$('<li><a >Another action</a></li>'),$('<li><a >Something else here</a></li>'),$('<li  class="divider"></li>'),$('<li class="dropdown-header">Nav header</li>'),$('<li><a >Separated link</a></li>'),$('<li><a >One more separated link</a></li>')
                        )
                        navbarNav=$.ul().K("nav navbar-nav").A(
                            $('<li class="active"><a >Home</a></li>'),$('<li><a href="#about">About</a></li>'),$('<li><a href="#contact">Contact</a></li>'),$.li().K('dropdown').A(
                                $('<a  class="dropdown-toggle" data-toggle="dropdown"  >Dropdown <span class="caret"></span></a>'),$dropdownMenu
                            )
                        )
                        navbarForm=$.f().K("navbar-form navbar-left").A(
                            $('<div class="form-group"><input type="text" class="form-control" placeholder="Search"></div>'),$('<button type="submit" class="btn btn-default">Submit</button>')
                        )
                        navbarRight=$.ul().K("nav navbar-nav navbar-right").A(
                            $('<li><a >Link</a></li>'),$('<li><a >Link</a></li>'),$('<li><a >Link</a></li>')
                        )
                        navbarHeader=$('<div class="navbar-header"><a class="navbar-brand" >Project name</a></div>')
                        $('<nav class="navbar navbar-default navbar-fixed-top">').A(
                            $('<div>').K("container").A().A(navbarHeader,$.d().id("navbar").A(navbarNav,navbarForm,navbarRight))
                        ).A()
                        $.d().K("container").A(
                            $.d().K("page-header").A(
                                $('<h1>Non-responsive Bootstrap</h1>'),$.p().K("lead").A(
                                    'Disable the responsiveness of Bootstrap by fixing the width of the container and using the first grid system tier',$('<a href="http://getbootstrap.com/getting-started/#disable-responsive">Read the documentation</a>'),'for more information'
                                )
                            ),$('<h3>What changes</h3>'),$.p().A(
                                'Note the lack of the',$('<code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code>'),', which disables the zooming aspect of sites in mobile devices. In addition, we reset our containers width and changed the navbar to prevent collapsing, and are basically good to go.'
                            ),$('<h3>Regarding navbars</h3>'),$.p().A(
                                'As a heads up, the navbar component is rather tricky here in that the styles for displaying it are rather specific and detailed.','Overrides to ensure desktop styles display are not as performant or sleek as one would like.','Just be aware there may be potential gotchas as you build on top of this example when using the navbar.'
                            ),$('<h3>Browsers, scrolling, and fixed elements</h3>'),$.p().A(
                                'Non-responsive layouts highlight a key drawback to fixed elements',$('<strong class="text-danger">Any fixed component, such as a fixed navbar, will not be scrollable when the viewport becomes narrower than the page content.</strong>'),'In other words, given the non-responsive container width of 970px and a viewport of 800px, youll potentially hide 170px of content'
                            ),$('<p>There is no way around this as its default browser behavior. The only solution is a responsive layout or using a non-fixed element.</p>'),$('<h3>Non-responsive grid system</h3>'),$('<div class="row">        <div class="col-xs-4">One third</div>        <div class="col-xs-4">One third</div><div class="col-xs-4">One third</div></div>')
                        )
                }//
                BSNAVBAR=FUNNYPAGESMALL=function(){
                        z()
                        $.h1('hfafdaffadfd')
                        $('<nav>').A().K("navbar navbar-default navbar-fixed-top").A(
                            $.d().K("container").A(
                                Bs.nbHdr().A(
                                    Bs.nbTog().A($.sp('Toggle navigation'),Bs.icB(3)),Bs.brand('Project name')
                                ),$.d().id("navbar").K("navbar-collapse collapse").A(
                                    Bs.nbN().A(
                                        $('<li class="active"><a >Home</a></li>'),$('<li><a href="#about">About</a></li>'),$('<li><a href="#contact">Contact</a></li>'),Bs.nIDd().A(
                                            Bs.ddTog(),Bs.ddM().A(
                                                Bs.liA('Action'),Bs.liA('Another action'),Bs.liA('Something else here'),Bs.dvdr(),Bs.ddHdr('Nav header'),Bs.liA('Separated link'),Bs.liA('One more separated link')
                                            )
                                        )
                                    ),$.ul().K("nav navbar-nav navbar-right").A(
                                        $('<li><a href="../navbar/">Default</a></li>'),$('<li><a href="../navbar-static-top/">Static top</a></li>'),$('<li class="active"><a href="./">Fixed top </a></li>')
                                    )
                                )
                            )
                        )
                        /*
            
            
            
                         <div class="container">
            
            
            
            
            
                         <!-- Main component for a primary marketing message or call to action -->
                         <div class="jumbotron">
                         <h1>Navbar example</h1>
                         <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
                         <p>To see the difference between static and fixed top navbars, just scroll.</p>
                         <p>
                         <a class="btn btn-lg btn-primary" href="../../components/#navbar"  >View navbar docs &raquo;</a>
                         </p>
                         </div>
            
                         </div> <!-- /container -->
            
                         */
                }
                NVBB=function(){
                        z()
                        function head(){/*
                     <html lang="en">
                     <head>
                     <meta charset="utf-8">
                     <meta http-equiv="X-UA-Compatible" content="IE=edge">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                     <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
                     <meta name="description" content="">
                     <meta name="author" content="">
                     <link rel="icon" href="../../favicon.ico">
        
                     <title>Navbar Template for Bootstrap</title>
        
                     <!-- Bootstrap core CSS -->
                     <link href="../../dist/css/bootstrap.min.css" rel="stylesheet">
        
                     <!-- Custom styles for this template -->
                     <link href="navbar.css" rel="stylesheet">
        
                     <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
                     <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>
                     </head>
                     */
                        }
        
                        /*
            
                         <div class="container">
            
                         <div class="collapse" id="navbar-header">
                         <div class="inverse p-a">     <h3>Collapsed content</h3>     <p>Toggleable via the navbar brand.</p></div>
                         </div>
            
            
            
            
                         <div class="navbar navbar-default navbar-static-top">
                         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-header"> 
                         &#9776;   
                         </button> </div>
            
            
            
            
                         <div class="jumbotron">
                         <h1>Navbar example</h1>
                         <p>This example is a quick exercise to illustrate how the default navbar works. It's placed within a <code>.container</code> 
                         to limit its width and will scroll with the rest of the page's content.</p>
                         <p> <a class="btn btn-lg btn-primary" href="../../components/#navbar"  >View navbar docs &raquo;</a> </p>
                         </div>
            
            
            
            
            
                         </div> <!-- /container -->
            
            
            
            
            
                         */
                }//
        }
}
apps()