Bs.R=function(){
        var g=G(arguments),d=$.d().K('row')
        if(g.A){
                _.e(
                    g.f,function(q){
                            d.A(q)
                    }
                )
        }else
                if(g.f){d.A(g.f)}
        return d.A()
}
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
        function navsUnderCon(){
                NVB=FUNNYPAGE=function(){
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
                                        $('<li class="active"><a href="#">Home</a></li>'),$('<li><a href="#about">About</a></li>'),$('<li><a href="#contact">Contact</a></li>'),Bs.nIDd().A(
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
                }//
        }

        function inps(){
                forms();
                sels();
                boxes()
                FILEUPLOAD=BSF=function(){
                        z()
                        $.lb().K('file').A(
                            $.ip().ty('file'),$.sp().K('file-custom')
                        ).A()
                }
                function sels(){
                        BSLABELS=SELECTBS=BSL=function(){
                                z()
                                $.sl().K("c-select").A(
                                    $.op('Open this select  menu').at('selected',true),$.op('One').v(1),$.op('Two').v(2),$.op('Three').v(3)
                                )
                        }
                }

                function forms(){
                        BSFORMS=function(){
                                /*
                                 $('<fieldset>').K("form-group").A(
                
                
                
                                 $.lb().at('for', "exampleInputEmail1").A('Email address'),
                                 $.ip().at('type', 'email').K("form-control").id("exampleInputEmail1").at('placeholder', 'Enter email'),
                
                                 $('<small>').K("text-muted").A('Well never share your email with anyone else')
                
                
                                 )
                
                
                                 $('<fieldset>').K("form-group").A(
                                 < label
                                 for= "exampleInputPassword1" > Password < / label >
                                 < input type = "password"
                                 class
                                 = "form-control"
                                 id = "exampleInputPassword1"
                                 placeholder = "Password" >
                                 )
                
                
                                 $('<fieldset>').K("form-group").A(
                
                                 $.lb('Example select').at('for', "exampleSelect1" ),
                                 $.sl().K("form-control").id("exampleSelect1").A( $.op(1), $.op(2), $.op(3), $.op(4), $.op(5) )
                
                                 )
                
                
                
                                 < fieldset  class  = "form-group" >
                
                                 $.lb().at('for',  "exampleSelect2").A( 'Example multiple select'),
                
                                 $.sl().id("exampleSelect2").at({
                                 multiple:true
                
                                 }).K("form-control").A(
                                 $.op(1), $.op(2), $.op(3), $.op(4), $.op(5)
                
                                 )
                
                                 $('<fieldset >').K("form-group").A(
                
                                 $.lb('Example textarea').at('for',   "exampleTextarea")  
                
                
                                 $.ta().K("form-control").at({
                                 id: "exampleTextarea", rows:'3'
                                 })
                                 )
                
                
                
                                 < fieldset
                                 class  = "form-group" >
                                 < label  for= "exampleInputFile" > File input < / label >
                                 < input
                                 type = "file"
                                 class
                                 = "form-control-file"
                                 id = "exampleInputFile" >
                                 < small
                                 class
                                 = "text-muted" > This
                                 is
                                 some
                                 placeholder
                                 block - level
                                 help
                                 text
                                 for the above
                                 input.It
                                 's a bit lighter and easily wraps to a new line.</small>
                                 < / fieldset >
                
                
                
                
                                 $.dK('radio').A(
                                 $.lb().A(
                
                                 $.ip().at({
                                 type:'radio', name: "optionsRadios",value: "option1",checked:true
                                 }),
                                 'Option  one   is  this  and that & mdash;  be  sure  to   include  why  its great'
                                 ))
                
                
                
                
                                 < div
                                 class
                                 = "radio" >
                                 < label >
                                 < input
                                 type = "radio"
                                 name = "optionsRadios"
                                 id = "optionsRadios2"
                                 value = "option2" >
                                 Option
                                 two
                                 can
                                 be
                                 something
                                 else
                                 and
                                 selecting
                                 it
                                 will
                                 deselect
                                 option
                                 one
                                 < / label >
                                 < / div >
                
                
                
                
                                 $.dK("radio disabled").A(
                
                                 $.lb().A(
                
                
                                 $.ip().at('type', 'radio').at('name', "optionsRadios").at('disabled',true)
                                 .id("optionsRadios3").val("option3")
                                 'Option  three  is  disabled'
                                 )
                
                                 )
                
                
                
                
                                 $.dK("checkbox").A(
                
                                 $.lb().A(
                
                                 $.ip().at('type', "checkbox"), 'Check  me   out'
                                 )
                
                                 )
                
                
                
                                 < button
                                 type = "submit"
                                 class
                                 = "btn btn-primary" > Submit < / button >
                                 < / form >
                                 */
                        }
                        BSFORM=VSLB=function(){
                                z()
                                f=$.f().K("form-inline").A(
                                    $.dK('form - group').A(
                                        $.lb('Name:').at('for',"exampleInputName2"),$.ip().K("form-control").at(
                                            {
                                                    id:"exampleInputName2",placeholder:"Jane Doe"
                                            }
                                        )
                                    ),$.dK("form-group").A(
                                        $.lb('Email').at({for:"exampleInputEmail2"}),$.ip().K("form-control").at(
                                            {
                                                    type:'email',placeholder:'jane.doe@example.com'
                                            }
                                        ).id("exampleInputEmail2")
                                    ),$.bt('Send invitation').at('type','submit').K("btn btn-primary")
                                )
                        }
                }

                function boxes(){
                        BOXBTNS=BXBT=function(){
                                z()
                                $.d().K("btn-group").data('toggle','buttons').A(
                                    $.lb().K("btn btn-primary active").A(
                                        $('<input type="checkbox" checked autocomplete="off">'),'Checkbox 1 (pre-checked)'
                                    ),$.lb().K('btn btn-primary').A(
                                        $('<input type="checkbox" autocomplete="off">'),'Checkbox 2'
                                    ),$.lb().K('btn btn-primary').A(
                                        $('<input type="checkbox" autocomplete="off">'),'Checkbox 3'
                                    )
                                )
                                //Radio 1 (preselected) Radio 2 Radio 3
                                $.d().K('btn-group').data('data-toggle',"buttons").A(
                                    $.lb().K("btn btn-primary active").A(
                                        $.ip().at('type','radio').id('option1').at('name','options').at('autocomplete','off'),'Radio 1'
                                    ),$.lb().K("btn btn-primary").A(
                                        $.ip().at('type','radio').at('name','option2').id('options3').at('autocomplete','off'),'Radio 2'
                                    ),$.lb().K("btn btn-primary").A(
                                        $.ip().at('type','radio').at('name','options').id('options3').at('autocomplete','off'),'Radio 3'
                                    )
                                )
                        }
                        BSRADIOBOX=STACKED=STK=function(){
                                z()
                                $.dK("c-inputs-stacked").A(
                                    $.lb().K("c-input c-radio").A(
                                        $.ip().id("radioStacked1").at(
                                            {
                                                    name:"radio-stacked",type:"radio"
                                            }
                                        ),$.sp().K("c-indicator"),'Toggle   this  custom  radio'
                                    ),$.lb().K("c-input c-radio").A(
                                        $.ip().id("radioStacked2").at(
                                            {
                                                    name:"radio-stacked",type:"radio"
                                            }
                                        ),$.sp().K("c-indicator"),'Toggle   this  custom  radio'
                                    )
                                )
                        }
                }
        }

        function grid(){
                BS2=function(){
                        z()
                        $CSS(
                            {
                                    _grey:{c:'w',C:'grey'},_red:{c:'w',C:'r'},_green:{c:'w',C:'g'},_blue:{c:'w',C:'b'}
                            }
                        )
                        Bs(
                            [
                                    Bs.R(
                                        [
                                                $.dK('col-xs-4 red').A('hello world'),$.dK('col-xs-4 green').A('hello world'),$.dK('col-xs-4 blue').A('hello world')
                                        ]
                                    )
                            ]
                        )
                }
                BS3=BSGRID=function(){
                        z()
                        $CSS(
                            {
                                    body:{C:'w'},
                                    _grey:{c:'w',C:'grey'},
                                    _red:{c:'w',C:'r'},
                                    _green:{c:'w',C:'g'},
                                    _blue:{c:'w',C:'b'}
                            }
                        )
                        Bs().C('z').A(
                            Bs.R(
                                [
                                        $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 red').A('hello world'),$('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 green').A('hello world'),$('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 blue').A('hello world')
                                ]
                            )
                        )
                }
                BS4=BSGRIDMORE=function(){
                        z()
                        $CSS(
                            {
                                    body:{C:'w'},
                                    _grey:{c:'w',C:'grey'},
                                    _red:{c:'w',C:'r'},
                                    _green:{c:'w',C:'g'},
                                    _blue:{c:'w',C:'b'}
                            }
                        )
                        ct=$('<div>').A().K('container').C('z')
                        ct.A(
                            $('<div>').K('row').A(
                                $('<div>').K('col-xs-12  col-sm-2 col-md-4 col-lg-3  col-xl-4 red').A('hello world'),$('<div>').K('col-xs-12  col-sm-4 col-md-6 col-lg-9  col-xl-8 green').A('hello world'),$('<div>').K('col-xs-12  col-sm-3 col-md-2 col-lg-3  col-xl-4 red').A('hello world'),$('<div>').K('col-xs-12  col-sm-2 col-md-6 col-lg-9  col-xl-8 green').A('hello world'),$('<div>').K('col-xs-12  col-sm-9 col-md-4 col-lg-3  col-xl-4 red').A('hello world'),$('<div>').K('col-xs-12  col-sm-12 col-md-6 col-lg-9  col-xl-8 green').A('hello world')
                            )
                        )
                }
                BS5=COLOFFSET=function(){
                        z()
                        $CSS(
                            {
                                    body:{C:'w'},
                                    _grey:{c:'w',C:'grey'},
                                    _red:{c:'w',C:'r'},
                                    _green:{c:'w',C:'g'},
                                    _blue:{c:'w',C:'b'}
                            }
                        )
                        ct=$('<div>').A().K('container').C('z')
                        ct.A(
                            $('<div>').K('row').A(
                                $('<div>').K('col-xs-12  col-sm-2 col-md-4 col-lg-3  col-xl-4 red').A('hello world'),$('<div>').K('col-xs-12  col-sm-4 col-md-6 col-lg-9  col-xl-8 green').A('hello world'),$('<div>').K('col-xs-12  col-sm-3 col-md-2 col-lg-3  col-xl-4 red').A('hello world'),$('<div>').K('col-xs-12  col-sm-2 col-md-6 col-lg-9  col-xl-8 green').A('hello world'),$('<div>').K('col-xs-12  col-sm-9 col-md-4 col-lg-3  col-xl-4 red').A('hello world'),$('<div>').K('col-xs-12  col-sm-12 col-md-6 col-lg-9  col-xl-8 green').A('hello world')
                            )
                        )
                }
        }

        function media(){
                BS9=BSMEDIA=function(){
                        z()
                        $CSS(
                            {
                                    body:{C:'w'},
                                    _grey:{c:'w',C:'grey'},
                                    _red:{c:'w',C:'r'},
                                    _green:{c:'w',C:'g'},
                                    _blue:{c:'w',C:'b'}
                            }
                        )
                        med=$('<div>').K('media').A(
                            $.a('','google.com').K('media-left').A($.i('me').K('media-object')),$('<div>').K('media-body').A(
                                $.h4('Arwaseome title').K('media-heading'),'afdsssdfsfadfd sdf fa fa afsd fas ffsd sf fds'+' fdsa dafs fd aff adsadfs fda fdsa fsda afsd asfd '
                            )
                        )
                        ct=$('<div>').A().K('container').A(
                            $('<div>').K('row').A(
                                $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 red').A('hello world'),$('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 green').A('hello world'),$('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-12').A(med)
                            )
                        )
                }
                BS10=function(){
                        z()
                        $CSS(
                            {
                                    body:{C:'w'},
                                    _grey:{c:'w',C:'grey'},
                                    _red:{c:'w',C:'r'},
                                    _green:{c:'w',C:'g'},
                                    _blue:{c:'w',C:'b'}
                            }
                        )
                        ct=$('<div>').A().K('container').A(
                            $('<div>').K('row').A(
                                $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 red').A('hello world'),$('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 green').A('hello world'),$('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-12').A(getMediaOb())
                            )
                        )
                        function getMediaOb(){
                                var med=$('<div>').K('media')
                                med.A(
                                    $.a('','google.com').K('media-left').A($.i('me').K('media-object')),$('<div>').K('media-body').A(
                                        $.h4('Arwaseome title').K('media-heading'),'afdsssdfsfadfd sdf fa fa afsd fas ffsd sf fds'+' fdsa dafs fd aff adsadfs fda fdsa fsda afsd asfd ',$('<div>').K('media').A(
                                            $.a('','google.com').K('media-left').A($.i('me').K('media-object')),$('<div>').K('media-body').A(
                                                $.h4('Arwaseome title').K('media-heading'),'afdsssdfsfadfd sdf fa fa afsd fas ffsd sf fds'+' fdsa dafs fd aff adsadfs fda fdsa fsda afsd asfd ',$('<div>').K('media').A(
                                                    $.a('','google.com').K('media-left').A($.i('me').K('media-object')),$('<div>').K('media-body').A(
                                                        $.h4('Arwaseome title').K('media-heading'),'afdsssdfsfadfd sdf fa fa afsd fas ffsd sf fds'+' fdsa dafs fd aff adsadfs fda fdsa fsda afsd asfd '
                                                    )
                                                )
                                            )
                                        ),$('<div>').K('media').A(
                                            $.a('','google.com').K('media-left').A($.i('me').K('media-object')),$('<div>').K('media-body').A(
                                                $.h4('Arwaseome title').K('media-heading'),'afdsssdfsfadfd sdf fa fa afsd fas ffsd sf fds'+' fdsa dafs fd aff adsadfs fda fdsa fsda afsd asfd '
                                            )
                                        )
                                    )
                                )
                                return med
                        }
                }
                BS11=function(){
                        z()
                        str=''
                        _.t(
                            120,function(){
                                    str+='afdsssdfsfadfd sdf fa fa afsd fas ffsd sf fds'
                            }
                        )
                        $CSS(
                            {
                                    body:{C:'w'},
                                    _grey:{c:'w',C:'grey'},
                                    _red:{c:'w',C:'r'},
                                    _green:{c:'w',C:'g'},
                                    _blue:{c:'w',C:'b'}
                            }
                        )
                        med=$('<div>').K('media').A(
                            $.a('','google.com').K('media-left').A($.i('guy').K('media-object')),$.a('','google.com').K('media-left media-middle').A($.i('guy').K('media-object')),$.a('','google.com').K('media-left media-bottom').A($.i('guy').K('media-object')),$('<div>').K('media-body').A(
                                $.h4('Arwaseome title').K('media-heading'),str
                            )
                        )
                        ct=$('<div>').A().K('container').A(
                            $('<div>').K('row').A(
                                $('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 red').A('hello world'),$('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-2 green').A('hello world'),$('<div>').K('col-xs-12  col-sm-6 col-md-4 col-lg-3  col-xl-12').A(med)
                            )
                        )
                }
                BS12=function(){
                }
        }

        function jumbo(){
                BS18=JMBO=function(){
                        z()
                        $.d().K('container').A(
                            $.d().K('jumbotron').A(
                                $.h1('this is an awesome h1 title').K('display-3'),$.p('this is an awesome p tag with a lead').K('lead'),$('<hr>').K('m-y-md'),$.p('this is a less awesome awesome h1 title'),$.p().K('lead').A($.a('click me','www.playboy.com').K('btn btn-primary btn-lg'))
                            )
                        )
                }
        }

        function labelAlerts(){
                BS19=BSLABELS=BSL=function(){
                        z();
                        $.br(3)
                        kinds=['default','primary','info','success','warning','danger'];
                        ct=$.d().K('containter')
                        rw=$.d().K('row')
                        cl=$.d().K('col')
                        rw.A(cl)
                        ct.A(rw)
                        _.e(
                            kinds,function(kind){
                                    var sp=$.sp().K('label label-'+kind).A('this is an ',kind)
                                    cl.A(sp)
                            }
                        )
                        _.e(
                            kinds,function(kind){
                                    var sp=$.sp().K('label label-pill label-'+kind).A('this is an ',kind)
                                    cl.A(sp)
                            }
                        )
                }
                BS20=BSALERTS=function(){
                        z()
                        $.d().K('alert alert-success').A(
                            $('<strong>').A('THIS '),'is an alert'
                        )
                        $.d().K('alert alert-warning').A(
                            $('<strong>').A('THIS '),'is an alert'
                        )
                        $.d().K('alert alert-danger').A(
                            $('<strong>').A('THIS '),'is an alert'
                        )
                        $.br().A()
                        $.d().K('alert alert-success').A(
                            'this is ',$.a(' an alert ').K('alert-link'),' link'
                        ), $.br().A(), $.d().K('alert alert-info alert-dismissible fade in').A(
                            $('<button>').K('close').at('data-dismiss','alert').A(
                                $.sp().html('&times;')
                            ),$('<strong>').A('THIS '),'is an alert'
                        )
                }
        }

        function cards(){
                BS21=CARDS=BS25=CAD=function(){
                        z()
                        $.d().K('container').A(
                            $.d().K('card').C('r').css('max-width',500).A(
                                $.i('me').K('card-img-top').at('alt','Card Image'),$.dK('card-block').A(
                                    $.h4().K('card-title').A('this is a title'),$.p().K('card-text').A(
                                        'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'+'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'+'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'+'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'
                                    ),$.a('A button','http://www.playboy.com').K('btn btn-warning')
                                )
                            )
                        )
                }
                BS22=function(){
                        z()
                        $.d().K('container').A(
                            $.d().K('card').css('max-width',500).A(
                                $.i('me').K('card-img-top').at('alt','Card Image'),$.ul().K('list-group list-group-flush').A(
                                    $.li('afsda fssaff').K('list-group-item1'),$.li('afsdafadsfadfaaffdaf fdaafda 2').K('list-group-item'),$.li('afsda').K('list-group-item 3')
                                ),$.dK('card-block').A(
                                    $.h4().K('card-title').A('this is a title'),$.p().K('card-text').A(
                                        'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'+'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'+'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'+'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'
                                    ),$.a('A button','http://www.playboy.com').K('btn btn-warning')
                                )
                            )
                        )
                }
                BS23=function(){
                        z()
                        $.d().K('container').A(
                            $.d().K('card text-center').css('max-width',500).A(
                                $.i('me').K('card-img-top').at('alt','Card Image'),$.ul().K('list-group list-group-flush').A(
                                    $.li('afsda fssaff').K('list-group-item1'),$.li('afsdafadsfadfaaffdaf fdaafda 2').K('list-group-item'),$.li('afsda').K('list-group-item 3')
                                ),$.dK('card-block text-right').A(
                                    $.h4().K('card-title').A('this is a title'),$.p().K('card-text').A(
                                        'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'+'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'+'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'+'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'
                                    ),$.a('A button','http://www.playboy.com').K('btn btn-warning')
                                )
                            )
                        )
                }
                BS24=function(){
                        z()
                        $.d().K('container').A(
                            $.d().K('card text-center').css('max-width',500).A(
                                $.d().K('card-header text-center').A('this is the headoter hadha '),$.i('me').K('card-img-top').at('alt','Card Image'),$.ul().K('list-group list-group-flush').A(
                                    $.li('afsda fssaff').K('list-group-item1'),$.li('afsdafadsfadfaaffdaf fdaafda 2').K('list-group-item'),$.li('afsda').K('list-group-item 3')
                                ),$.dK('card-block text-right').A(
                                    $.h4().K('card-title').A('this is a title'),$.p().K('card-text').A(
                                        'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'+'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'+'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'+'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'
                                    ),$.a('A button','http://www.playboy.com').K('btn btn-warning')
                                ),$.d().K('card-footer text-right text-muted').A('this is the foooter hadh h')
                            )
                        )
                }
                BS25=function(){
                        z()
                        $.d().K('container').A(
                            $.br(5),$.d('b').K('card text-center card-inverse').C('z').css('max-width',500).A(
                                $.d().K('card-header text-center').A('this is the headoter hadha '),$.i('me').K('card-img-top').at('alt','Card Image'),$.dK('card-block text-right').A(
                                    $.h4().K('card-title').A('this is a title'),$.p().K('card-text').A(
                                        'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'+'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'+'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'+'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'
                                    ),$.a('A button','http://www.playboy.com').K('btn btn-danger')
                                ),$.d().K('card-footer text-right text-muted').A('this is the foooter hadh h')
                            ),$.br(5)
                        )
                }
                BS26=function(){
                        z()
                        $.d().K('container').A(
                            $.br(5),$.d('b').K('card text-center card-inverse').C('z').css('max-width',500).A(
                                $.d().K('card-header text-center').A('this is the headoter hadha '),$.i('me').K('card-img-top').at('alt','Card Image'),$.dK('card-img-overlay text-right').A(
                                    $.h4().K('card-title').A('this is a title'),$.p().K('card-text').A(
                                        'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'+'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'+'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'+'random textafsd fa f fa dfasfasdffasdadsf fads fads fa af'
                                    ),$.a('A button','http://www.playboy.com').K('btn btn-danger')
                                ),$.d().K('card-footer text-right text-muted').A('this is the foooter hadh h')
                            ),$.br(5)
                        )
                }
                ALBUM=function(){
                        /*
                
                         <!DOCTYPE html>
                         <html lang="en">
                         <head>
                         <meta charset="utf-8">
                         <meta http-equiv="X-UA-Compatible" content="IE=edge">
                         <meta name="viewport" content="width=device-width, initial-scale=1">
                         <meta name="description" content="">
                         <meta name="author" content="">
                         <link rel="icon" href="../../favicon.ico">
                
                         <title>Album example for Bootstrap</title>
                
                         <!-- Bootstrap core CSS -->
                         <link href="../../dist/css/bootstrap.min.css" rel="stylesheet">
                
                         <!-- Custom styles for this template -->
                         <link href="album.css" rel="stylesheet">
                
                         <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
                         <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>
                         </head>
                
                         <body>
                
                         <div class="navbar-collapse collapse inverse" id="navbar-header">
                         <div class="container-fluid">
                         <div class="about">
                         <h4>About</h4>
                         <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                         </div>
                         <div class="social">
                         <h4>Contact</h4>
                         <ul class="list-unstyled">
                         <li><a href="#">Follow on Twitter</a></li>
                         <li><a href="#">Like on Facebook</a></li>
                         <li><a href="#">Email me</a></li>
                         </ul>
                         </div>
                         </div>
                         </div>
                         <div class="navbar navbar-inverse navbar-static-top">
                         <div class="container-fluid">
                         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-header">
                         &#9776;
                         </button>
                         <a href="#" class="navbar-brand">Album</a>
                         </div>
                         </div>
                
                         <section class="jumbotron text-center">
                         <div class="container">
                         <h1 class="jumbotron-heading">Album example</h1>
                         <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                         <p>
                         <a href="#" class="btn btn-primary">Main call to action</a>
                         <a href="#" class="btn btn-secondary">Secondary action</a>
                         </p>
                         </div>
                         </section>
                
                         <div class="album text-muted">
                         <div class="container">
                
                         <div class="row">
                         <div class="card">
                         <img data-src="holder.js/100%x280/thumb" alt="Card image cap">
                         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                         </div>
                         <div class="card">
                         <img data-src="holder.js/100%x280/thumb" alt="Card image cap">
                         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                         </div>
                         <div class="card">
                         <img data-src="holder.js/100%x280/thumb" alt="Card image cap">
                         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                         </div>
                
                         <div class="card">
                         <img data-src="holder.js/100%x280/thumb" alt="Card image cap">
                         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                         </div>
                         <div class="card">
                         <img data-src="holder.js/100%x280/thumb" alt="Card image cap">
                         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                         </div>
                         <div class="card">
                         <img data-src="holder.js/100%x280/thumb" alt="Card image cap">
                         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                         </div>
                
                         <div class="card">
                         <img data-src="holder.js/100%x280/thumb" alt="Card image cap">
                         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                         </div>
                         <div class="card">
                         <img data-src="holder.js/100%x280/thumb" alt="Card image cap">
                         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                         </div>
                         <div class="card">
                         <img data-src="holder.js/100%x280/thumb" alt="Card image cap">
                         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                         </div>
                         </div>
                
                         </div>
                         </div>
                
                         <footer class="text-muted">
                         <div class="container">
                         <p class="pull-right">
                         <a href="#">Back to top</a>
                         </p>
                         <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
                         <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
                         </div>
                         </footer>
                
                         <!-- Bootstrap core JavaScript
                         ================================================== -->
                         <!-- Placed at the end of the document so the pages load faster -->
                         <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
                         <script src="../../assets/js/vendor/holder.js"></script>
                         <script>
                         $(function () {
                         Holder.addTheme("thumb", { background: "#55595c", foreground: "#eceeef", text: "Thumbnail" });
                         });
                         </script>
                         <script src="../../dist/js/bootstrap.min.js"></script>
                         </body>
                         </html>
                
                         */
                }
        }
 