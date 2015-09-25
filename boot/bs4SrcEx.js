$l('bs4SrcEx.js')
NVB = function () {
    z()


    $dropdownMenu = $.ul().K('dropdown-menu').A(
        
        $('<li><a href="#">Action</a></li>'),
        $('<li><a href="#">Another action</a></li>'),
        $('<li><a href="#">Something else here</a></li>'),
        $('<li role="separator" class="divider"></li>'),
        $('<li class="dropdown-header">Nav header</li>'),
        $('<li><a href="#">Separated link</a></li>'),
        $('<li><a href="#">One more separated link</a></li>')
    )
    

    navbarNav = $.ul().K("nav navbar-nav").A(
        $('<li class="active"><a href="#">Home</a></li>'),
        $('<li><a href="#about">About</a></li>'),
        $('<li><a href="#contact">Contact</a></li>'),
        
        $.li().K('dropdown').A(
            $('<a href="#" class="dropdown-toggle" data-toggle="dropdown"  >Dropdown <span class="caret"></span></a>'),
            $dropdownMenu
        )
    )

    
    
    navbarForm = $.f().K("navbar-form navbar-left").A(
        $('<div class="form-group"><input type="text" class="form-control" placeholder="Search"></div>'),
        $('<button type="submit" class="btn btn-default">Submit</button>')
    )

    navbarRight = $.ul().K("nav navbar-nav navbar-right").A(
        $('<li><a href="#">Link</a></li>'),
        $('<li><a href="#">Link</a></li>'),
        $('<li><a href="#">Link</a></li>')
    )


    navbarHeader = $('<div class="navbar-header"><a class="navbar-brand" href="#">Project name</a></div>')


    $('<nav class="navbar navbar-default navbar-fixed-top">').A(
        $('<div>').K("container").A().A(navbarHeader, $.d().id("navbar").A(navbarNav, navbarForm, navbarRight))
    ).A()


    $.d().K("container").A(
        $.d().K("page-header").A(
            $('<h1>Non-responsive Bootstrap</h1>'),


            $.p().K("lead").A(
                'Disable the responsiveness of Bootstrap by fixing the width of the container and using the first grid system tier',

                $('<a href="http://getbootstrap.com/getting-started/#disable-responsive">Read the documentation</a>'),
                'for more information')
        ),


        $('<h3>What changes</h3>'),


        $.p().A(
            'Note the lack of the',
            $('<code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code>'),

            ', which disables the zooming aspect of sites in mobile devices. In addition, we reset our containers width and changed the navbar to prevent collapsing, and are basically good to go.'
        ),


        $('<h3>Regarding navbars</h3>'),
        $.p().A('As a heads up, the navbar component is rather tricky here in that the styles for displaying it are rather specific and detailed.',
            'Overrides to ensure desktop styles display are not as performant or sleek as one would like.',
            'Just be aware there may be potential gotchas as you build on top of this example when using the navbar.'),

        $('<h3>Browsers, scrolling, and fixed elements</h3>'),

        $.p().A('Non-responsive layouts highlight a key drawback to fixed elements',
            $('<strong class="text-danger">Any fixed component, such as a fixed navbar, will not be scrollable when the viewport becomes narrower than the page content.</strong>'),
            'In other words, given the non-responsive container width of 970px and a viewport of 800px, youll potentially hide 170px of content'
        ),


        $('<p>There is no way around this as its default browser behavior. The only solution is a responsive layout or using a non-fixed element.</p>'),

        $('<h3>Non-responsive grid system</h3>'),
        $('<div class="row">        <div class="col-xs-4">One third</div>        <div class="col-xs-4">One third</div><div class="col-xs-4">One third</div></div>')
    )


}
 
 BSNAVBAR = function () {
    z()

    $.h1('hfafdaffadfd')

    $('<nav>').A().K("navbar navbar-default navbar-fixed-top").A(
  
        $.d().K("container").A(
            
            
            Bs.nbHdr().A(
                Bs.nbTog().A( $.sp('Toggle navigation'), Bs.icB(3) ),
                Bs.brand('Project name')
            ),


    $.d().id("navbar").K("navbar-collapse collapse").A(
        Bs.nbN().A(
            $('<li class="active"><a href="#">Home</a></li>'),
            $('<li><a href="#about">About</a></li>'),
            $('<li><a href="#contact">Contact</a></li>'),


            Bs.dd().A(Bs.ddTog(), Bs.ddM().A(
                    Bs.liA('Action'), Bs.liA('Another action'), Bs.liA('Something else here'),
                    Bs.dvdr(), Bs.ddHdr('Nav header'), Bs.liA('Separated link'), Bs.liA('One more separated link'))
            )),


        $.ul().K("nav navbar-nav navbar-right").A(
            $('<li><a href="../navbar/">Default</a></li>'),
            $('<li><a href="../navbar-static-top/">Static top</a></li>'),
            $('<li class="active"><a href="./">Fixed top </a></li>')
        )
    )


    ) )







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
NVBB = function(){z()

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
*/}
    
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
BSBTS = function () {
    z()


    bts = [

        '<button type="button" class="btn btn-primary">Primary</button>',
        '<button type="button" class="btn btn-secondary">Secondary</button>',
        '<button type="button" class="btn btn-success">Success</button>',
        '<button type="button" class="btn btn-warning">Warning</button>',
        '<button type="button" class="btn btn-danger">Danger</button>',
        '<button type="button" class="btn btn-link">Link</button>'
    ]

    _.e(bts, function (bt) {
        $(bt).A()
    })


}
BSBTS = function () {
    z()

    $.bt('Primary').K('btn btn-primary')
    $.bt('Secondary').K('btn btn-secondary')
    $.bt('Success').K('btn btn-success')
    $.bt('Warning').K('btn btn-warning')
    $.bt('Danger').K('btn btn-danger')
    $.bt('Link').K('btn btn-link')


}
 
BSBTSIZES = BTZ = function () {

    z()
    $.bt('Large button').K("btn btn-primary btn-lg")
    $.bt('Large button').K("btn btn-secondary btn-lg")

    $.bt('Small button').K("btn btn-primary btn-sm")
    $.bt('Small button').K("btn btn-secondary btn-sm")

    $.bt('Block level button').K("btn btn-primary btn-lg btn-block")
    $.bt('Block level button').K("btn btn-secondary btn-lg btn-block")


}
BOXBTNS = BXBT = function () {
    z()


    $.d().K("btn-group").data('toggle', 'buttons').A(
        $.lb().K("btn btn-primary active").A(
            $('<input type="checkbox" checked autocomplete="off">'),
            'Checkbox 1 (pre-checked)'
        ),

        $.lb().K('btn btn-primary').A(
            $('<input type="checkbox" autocomplete="off">'),
            'Checkbox 2'
        ),


        $.lb().K('btn btn-primary').A(
            $('<input type="checkbox" autocomplete="off">'),
            'Checkbox 3'
        )
    )


//Radio 1 (preselected) Radio 2 Radio 3


    $.d().K('btn-group').data('data-toggle', "buttons").A(
        $.lb().K("btn btn-primary active").A(
            $.ip().at('type', 'radio').id('option1')
                .at('name', 'options').at('autocomplete', 'off'),
            'Radio 1'
        ),

        $.lb().K("btn btn-primary").A(
            $.ip().at('type', 'radio').at('name', 'option2').id('options3').at('autocomplete', 'off'),
            'Radio 2'
        ),

        $.lb().K("btn btn-primary").A(
            $.ip().at('type', 'radio').at('name', 'options').id('options3').at('autocomplete', 'off'),
            'Radio 3'
        )
    )

}
DRPDOWN = DRD = function () {
    z()


    $.d().K("dropdown open").A(
        $.bt('Dropdown').K("btn btn-secondary dropdown-toggle").id("dropdownMenu1").data('toggle', 'dropdown')
        ,


        $.d().K("dropdown-menu").A(
            $.a('Action').K("dropdown-item"),
            $.a('Another action').K("dropdown-item"),
            $.a('Something else here').K("dropdown-item")
        )
    )


}
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
BSFORMS =  function () {
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
VSLB = function () {
    z()


    f = $.f().K("form-inline").A(
        $.dK('form - group').A(
            $.lb('Name:').at('for', "exampleInputName2"),
            $.ip().K("form-control").at({id: "exampleInputName2", placeholder: "Jane Doe"})),

        $.dK("form-group").A(
            $.lb('Email').at({for: "exampleInputEmail2"}),
            $.ip().K("form-control").at({type: 'email', placeholder: 'jane.doe@example.com'}).id("exampleInputEmail2")
        ),

        $.bt('Send invitation').at('type', 'submit').K("btn btn-primary")
    )


}
  BSF = function () {
    z()


    $.lb().K('file').A(
        $.ip().ty('file'), $.sp().K('file-custom')
    ).A()

}

function works(){
    BUTTONOUTLINES = BSOLBTS = OLB = function () {
        z()


        $.bt('Primary').K('btn btn-primary-outline')
        $.bt('Secondary').K('btn btn-secondary-outline')
        $.bt('Success').K('btn btn-success-outline')
        $.bt('Warning').K('btn btn-warning-outline')
        $.bt('Danger').K('btn btn-danger-outline')
        $.bt('Link').K('btn btn-link-outline')


    }
    BSLABELS = SELECTBS = BSL = function () {
        z()


        $.sl().K("c-select").A(
            $.op('Open this select  menu').at('selected', true),
            $.op('One').v(1),
            $.op('Two').v(2),
            $.op('Three').v(3)
        )
    }

    BSRADIOBOX = STACKED = STK = function () {
    z()


    $.dK("c-inputs-stacked").A(
        $.lb().K("c-input c-radio").A(
            $.ip().id("radioStacked1").at({name: "radio-stacked", type: "radio"}),
            $.sp().K("c-indicator"),
            'Toggle   this  custom  radio'
        ),

        $.lb().K("c-input c-radio").A(
            $.ip().id("radioStacked2").at({name: "radio-stacked", type: "radio"}),
            $.sp().K("c-indicator"),
            'Toggle   this  custom  radio'
        )
    )


}
} 
