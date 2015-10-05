BREADCRUMB=function(){
        z()
        $.ul().K("breadcrumb").A(
            $.li().A($.a('Home')),$.li().A($.a('Fruit')),$.li('Pears').$$()
        )
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
                SELECTBS=function(){
                        z()
                        $.sl().K("c-select").A(
                            $.op('Open this select  menu').at('selected',true),$.op('One').v(1),$.op('Two').v(2),$.op('Three').v(3)
                        )
                }
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
                VSLB=function(){
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
                BSF=function(){
                        z()
                        $.lb().K('file').A(
                            $.ip().ty('file'),$.sp().K('file-custom')
                        ).A()
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
        }
}
function navs(){
        PIL=function(){
                z()
                $.ul(
                    [
                            $('<li class="nav-item"><a class="nav-link active" href="#">HTML</a></li>'),$('<li class="nav-item"><a class="nav-link" href="#">CSS</a></li>'),$('<li class="nav-item"><a class="nav-link" href="#">JavaScript</a></li>'),$('<li class="nav-item"><a class="nav-link" href="#">Preview</a></li>')
                    ]
                ).K("nav nav-pills")
        }
        Bs.nItLi=function(){return _A($.li().K('nav-item'),G(arguments))}
        Bs.tbGgA=function(tx,hr){return $.a(tx,hr).D('toggle','tab').K("nav-link")}
        Bs.nLkGgA=function(){_A(Bs.tbGgA().K("nav-link"),G(arguments))}
        Bs.tbCe=function(){return _A($.dK('tab-content'),G(arguments))}
        Bs.tbP=function(){return _A($.dK('tab-pane'),G(arguments))}
        Bs.tbP$=function(id,rest){return _A(Bs.tbP(rest).id(id))}
        Bs.tbGgANItLi=function(tx,hr){return Bs.nItLi(Bs.tbGgA(tx,hr))}
        Bs.nTbUl=function(){return _A($.dK('nav nav-tabs'),G(arguments))}
        Bs.nPiUl=function(){return _A($.dK('nav nav-pils'),G(arguments))}
        TABPAN=function(){
                z()
                Bs.nTbUl(
                    [
                            Bs.tbGgANItLi('Me','#me').$$(),Bs.tbGgANItLi('Guy','#guy'),Bs.tbGgANItLi('Sun','#sun')
                    ]
                )
                Bs.tbCe(
                    [
                            Bs.tbP$(
                                "me",'me'//  $.i('me')
                            ).$$(),Bs.tbP$(
                        "guy",'guy'//$.i('guy') 
                    ),Bs.tbP$(
                        "sun",'sun'//$.i('sun')
                    )
                    ]
                )
        }
        TABPIL=function(){
                z()
                Bs.nPiUl(
                    [
                            Bs.tbGgANItLi('Me','#me').$$(),Bs.tbGgANItLi('Guy','#guy'),Bs.tbGgANItLi('Sun','#sun')
                    ]
                )
                Bs.tbCe(
                    [
                            Bs.tbP$(
                                "me",'me'//  $.i('me')
                            ).$$(),Bs.tbP$(
                        "guy",'guy'//$.i('guy') 
                    ),Bs.tbP$(
                        "sun",'sun'//$.i('sun')
                    )
                    ]
                )
        }
        function mayNotWork(){
                BSTABS=function(){
                        z()
                        $.ul().K("nav nav-tabs").A(
                            $.li().K("nav-item").A($.a('HTML').K("nav-link active")),$.li().K("nav-item").A($.a('js').K("nav-link active")),$.li().K("nav-item").A($.a('previw').K("nav-link active"))
                        )
                }
                NAKEDNAV=function(){
                        z()
                        $.N().A().K('nav').A(
                            $.a('HTML').K('nav-link').$$(),$.a('css').K('nav-link'),$.a('js').K('nav-link'),$.a('prev').K('nav-link')
                        )
                }
                TABDD=function(){
                        z()
                        $.ul().A(
                            $.li().K("nav-item").A(
                                $.a('HTML').K("nav-link").$$()
                            ),$.li().K("nav-item").A(
                                $.a('CSS').K("nav-link")
                            ),$.li().K("nav-item").A(
                                $.a('Javascript').K("nav-link")
                            ),$.li().K("nav-item dropdown").A(
                                $.a('Preview').K("nav-link dropdown-toggle").$gg("dropdown")
                            ),$.d().K("dropdown-menu").A(
                                $.a('Mobile Phone').K('ddI'),$.a('Laptop').K('ddI'),$.a('Desktop').K('ddI'),$.a('Fuckyou').K('ddI')
                            )
                        )
                }
                TABPANE=function(){
                        z()
                        $.ul().id("clothing-nav").K("nav nav-tabs").A(
                            $.li().K("nav-item").A(
                                $.a('Home','#Home').id('home-tab').K("nav-link active").at('data-toggle',"tab")
                            ),$.li().K("nav-item").A(
                                $.a('Hats','#hats').id('hats-tab').K("nav-link").at('data-toggle',"tab")
                            ),$.li().K("nav-item dropdown").A(
                                $.a('footware').K("nav-link dropdown-toggle").at('data-toggle',"dropdown"),$.dK('dropdown-menu').A(
                                    $.a('Shoes',"#dropdown-shoes").K("dropdown-item").id("dropdown-shoes-tab").at(' data-toggle',"tab"),$.a('Boots',"#dropdown-boots").K("dropdown-item").id("dropdown-boots-tab").at(' data-toggle',"tab")
                                )
                            )
                        )
                        //- Content Panel -->
                        $.dI("clothing-nav-content").K("tab-content").A(
                            $.d().K("tab-pane fade in active").id("home").A(
                                $.p(
                                    'A boot is a type of footwear and a specific type of shoe. Most boots mainly cover the foot and the ankle'+' while some also cover some part of the lower calf. Some boots extend up the leg, sometimes as far as the knee or even the hip'
                                )
                            ),$.d().K("tab-pane fade").id("HATS").A(
                                $.p('Welcome home! Click on the tabs to see the content change.')
                            ),$.d().K("tab-pane fade").id("dropdown-shoes").A(
                                $.p(
                                    'A SHOE is a type of footwear and a specific type of shoe. Most boots mainly cover the foot and the ankle'+' while some also cover some part of the lower calf. Some boots extend up the leg, sometimes as far as the knee or even the hip'
                                )
                            ),$.d().K("tab-pane fade").id("dropdown-boots").A(
                                $.p(
                                    'A boot is a type of footwear and a specific type of shoe. Most boots mainly cover the foot and the ankle'+' while some also cover some part of the lower calf. Some boots extend up the leg, sometimes as far as the knee or even the hip'
                                )
                            )
                        )
                }
        }
}
RESPONSIVEINBED=function(){
        z()
        $.dK("embed-responsive embed-responsive-16by9").A(
            $('<iframe>').K("embed-responsive-item").at(
                {
                        src:"//www.youtube.com/embed/wMuNjnNyaiA",allowfullscreen:true
                }
            )
        )
}
function listGp(){
        $.fn.$lGp=function(){return this.K('list-group')}
        $.fn.$lGpIt=function(){return this.K('list-group-item')}
        Bs.lGp=function(){return _A($.ul().$lGp(),G(arguments))}
        Bs.lGpIt=function(){return _A($.li().$lGpIt(),G(arguments))}
        LIDF=function(){
                z()
                Bs.lGp(
                    [
                            Bs.lGpIt('These Boots Are Made For Walking'),Bs.lGpIt('Eleanor, Put Your Boots On'),Bs.lGpIt('Puss n  Boots'),Bs.lGpIt('Die With Your Boots On'),Bs.lGpIt('Fairies Wear Boots')
                    ]
                )
        }
        LINKEDLIST=function(){
                $.d().$lGp().A(
                    $.a('These Boots Are Made For Walking').$lGpIt(),$.a('Eleanor, Put Your Boots On').$lGpIt().$$(),$.a('Puss n Boots').$lGpIt(),$.a('Die With Your Boots On').$lGpIt(),$.a('Fairies Wear Boots').$lGpIt()
                )
        }
        LBTS=function(){
                z()
                $.d().$lGp().A(
                    Bs.bt('These Boots Are Made For Walking').$lGpIt(),Bs.bt('These Boots Are Made For Walking').$lGpIt().$$(),Bs.bt('These Boots Are Made For Walking').$lGpIt(),Bs.bt('These Boots Are Made For Walking').$lGpIt(),Bs.bt('These Boots Are Made For Walking').$lGpIt()
                )
        }
        LILBS=function(){
                z()
                $.d().lGp(
                    [
                            $.lGpIt(
                                'These Boots Are Made For Walking',$.sp('15').K('label label-default label-pill pull-right')
                            ),$.lGpIt(
                        'These Boots Are Made For Walking',$.sp('38').K('label label-default label-pill pull-right')
                    ),$.lGpIt('These Boots Are Made For Walking',$.sp('76').K('label label-default label-pill pull-right'))
                    ]
                )
        }
        CTXCLASSES=function(){
                z()
                $.d().$lGp().A(
                    $.a('These Boots Are Made For Walking').$lGpIt().K('list-group-item-success'),$.a('These Boots Are Made For Walking').$lGpIt().K('list-group-item-success').$$(),$.a('These Boots Are Made For Walking').$lGpIt().K('list-group-item-info'),$.a('These Boots Are Made For Walking').$lGpIt().K('list-group-item-warning'),$.a('These Boots Are Made For Walking').$lGpIt().K('list-group-item-danger')
                )
        }
        SURPRISE=function(){
                z()
                $.d().$lGp().A(
                    $.a().$lGpIt('list-group-item-info').K().A(
                        $.h4('These Boots Are Made For Walking').K('list-group-item-heading'),$.p('Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium').K('list-group-item-text')
                    ),$.a().$lGpIt('list-group-item-info').K().A(
                        $.h4('These Boots Are Made For Walking').K('list-group-item-heading'),$.p('Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium').K('list-group-item-text')
                    ),$.a().$lGpIt('list-group-item-info').K().A(
                        $.h4('These Boots Are Made For Walking').K('list-group-item-heading'),$.p('Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium').K('list-group-item-text')
                    )
                )
        }
}
function tables(){
        REFLOW=function(){
                z()
                $.t().K("table table-reflow").A(
                    $('<thead>').A($.tr([$.th('Header 1'),$.th('Header 2'),$.th('Header 3'),$.th('Header 4'),$.th('Header 5'),$.th('Header 6'),$.th('Header 7'),$.th('Header 8'),$.th('Header 9'),$.th('Header 10')])),$('<tbody>').A(
                        $.tr([$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell')]),$.tr([$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell')]),$.tr([$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell'),$.td('Cell')])
                    )
                )
        }
}
function actualAlpha(){
        $.fn.wit=function(num,toWhat){
                var q=this
                toWhat=toWhat||$.sp()
                _.t(
                    num||3,function(){
                            toWhat.A(q.clone())
                    }
                )
                return toWhat
        }
}
function broke(){
        DRPDOWN=DRD=function(){
                z()
                $.d().K("dropdown open").A(
                    $.bt('Dropdown').K("btn btn-secondary dropdown-toggle").id("dropdownMenu1").data('toggle','dropdown'),$.d().K("dropdown-menu").A(
                        $.a('Action').K("dropdown-item"),$.a('Another action').K("dropdown-item"),$.a('Something else here').K("dropdown-item")
                    )
                )
        }
}