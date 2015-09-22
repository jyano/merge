WAPNAV=function(a){ var g=G(arguments),a=g[0];if(a){co(a)};if(g.N){z()};NAV(bar(



        lkd( gl('p','-pics'),
            'upload','uploads','cutouts',  '+'),


        lkd(gl('pc','-create'),
            'edit', 'avatar','paint', 'filters','showcase',
            'transform' ,'can' ,'fullcan'
            ,'+'),



        lkd(gl('tw','-animate'),'tween','tweenart', 'easing',  'pack',   'sprite','movie', '+'),



    lkd(gl('tw','-imagine'),'universe', 'bod', '+'),


    lkd(gl('tw','-solve'), 'connect','grid','matrix', 'bowl','tangle','corners','borders','flip','+'),



    lkd(gl('tw','-play'), 'space', 'ship','circle','hit','shooty','boxes','solar','canon','+'),

    lkd(gl('gl','-work'),   'book','site','sorty','elements' ,'api' ,'+'),




    lkd(gl('gl','-share'),   'users','profile','buds','requests','stat','post','groups','+'),




    lkd(gl('gl','-chat'),  'messages','posts','chatbox','ranky','+'),




    lik(gl('t','-clear'),home)),

    bar(lkd(gl('u', _s().id('uname') ,'-'),

    lik('view'),

        lik(gl('z','profile').o(

            ldr('profile')

        )),







    lik('logout').o(lO)

    ),'-'),

    search())}











wap=function(a){
    return lik(a,ldr(a))}

lkd=function(){var  g=G(arguments),u=ul('-'),l=li('-')(  dropl(g[0]))
    _e(g.r,function(v){ if(S(v)){ v= g.p? wap(v): lik(v) }
        u(v)});return l(u)}

waps=function(){var g=G(arguments),
    gly=gl(g.f[0], g.f[1]),w=_m(g.r,wap),args=[gly].concat(w)
    return _a(lkd,w )}

ib=function(n){var s=_s();_t(n||1,function(){s(sp(['ib']))});return s}
navHeader=function(a){a=a||'me'
    return dk('nbh')(bt().k('nbg').at({dg:'#navbar',dt:'collapse'})(
            sp(['sr'],'toggle nav'),'',ib(4)),
        lk('wappy',function(){

           $w.location='/wap'
        }).k('nbB'))}



navbar=function(){var g=G(arguments)
    return _a(_d().k('nb nbd nbi nbft').at({r:'naviation'}),g)}
NAV=function(a,b,c,d){return navbar(navHeader(),
        _a(dk('co nbc').id('navbar'),
            G(arguments))).pp()}







tog=function(a,b){return lk('-')(gl(b),bo(a,'+'),car())}

car=function(){return sp(['C'])}

__=function(){return li(['D'])}


dropl=function(a){return lk('-')(a||menu,car())}


search=function(){
    return _f().k('nbf nbr').at({r:'search'})(
        dk('fg')(ip().k('fc').ph('search')),
        bt(gl('s')).ty('s'))}


bar=function(){var g=G(arguments),
    u=ul('+')
    if(g.n){u.k('nbr')}
    return _a(u,g) }





WappyNav=function(){

    z()

    navbarCollapse= $.navbarCollapse().A(


        $.nav(
            $.dropdown('create',[ 'upload','uploads','cutouts',  'edit', 'avatar','paint', 'filters','showcase',
                'tween','tweenart', 'easing', 'pack','sprite','transform' ,
                'can' ,'rub','fan' ]),

            $.dropdown('youplay',[ 'bod', 'invaders','thrust', 'starstruck', 'massvelocitytest','contactevents',  'ninjatilemap','launcher',
                'groupvsgroup','shooty','hit','space','maggots']),

            $.dropdown('play',[ 'iso1', 'connect','matrix', 'ship',  'circle','boxes','solar','canon','fullcan',
                'tangle','corners','borders','gquery','grid', 'bowl',  'gamer', 'melon','meltut'  ]),


            $.dropdown('share',[ 'universe',
                'users', 'status' , 'messages','posts','chatrooms',
                'ranky',   'profiles','dirt','knocks', 'book','site','sorty','elements' ,'api' ,'object'   ]),

            $.dropdown('box2d',[     'box2d', 'wheel','heads', 'cups','pinball',
                'revdemo','player','player1','player2', 'player3'  ])


        ),


        $.navRight(

            $.liA('logged: '+ _username),

            $.liA('logout', logOut)


        )

    )




    $.container().A(  $.navbar().A( $.navbarHeader('wappy'), navbarCollapse )).A()}



WappyNavX =  function(color){

    var args=G(arguments)

    color=args[0]

    if(color){ co(color) }

    if(args.N){ z() }


    StandardNavbar(

        Nav(

            DropdownLoader(

                $.glyph('picture', 'create'),

                'upload','uploads','cutouts',  'edit', 'avatar','paint', 'filters','showcase',
                'tween','tweenart', 'easing', 'pack','sprite','transform' ,
                'can' ,'rub','fan' ),


            DropdownLoader($.glyph('glass','youplay'),

                'bod', 'invaders','thrust', 'starstruck', 'massvelocitytest','contactevents',  'ninjatilemap','launcher',
                'groupvsgroup','shooty','hit','space','maggots'   ),



            DropdownLoader(
                $.glyph('tw','play'),
                'iso1', 'connect','matrix', 'ship',  'circle','boxes','solar','canon','fullcan',
                'tangle','corners','borders','gquery','grid', 'bowl',  'gamer', 'melon','meltut'),


            DropdownLoader($.glyph('glass','share'),'universe',
                'users', 'status' , 'messages','posts','chatrooms',
                'ranky',   'profiles','dirt','knocks', 'book','site','sorty','elements' ,'api' ,'object'),


            DropdownLoader($.glyph('glass','phaser'),
                'tanks','genmatch','breakout','tilecallbacks',
                'acceleratetopointer','angularvelocity','oneway','impactevents',
                'ninjaimpact', 'aabbaabb',   'ninjalab',
                'anglepointer','shootpointer', 'launcherfollow',
                'movearoundworld','bringchildtop','tweenrelative','worldsprite','fixedtocamera','cannonballs'

            ),

            DropdownLoader($.glyph('glass','phaser2'),

                'pixelpickscrolling','inputpriority', 'callallanimations','callall','displayorder','hsp',
                'extendingagroup','getfirstdead','recycling','swapchildren','removebetween','removing',
                'bringgrouptotop','multipleanims','combinedtweens'

            ),


            DropdownLoader(

                $.glyph('glass','box2d'),
                'box2d', 'wheel','heads', 'cups','pinball',
                'revdemo','player','player1','player2', 'player3'
            )


            // DropdownLoader(Glyph('glass','phaserDisplay'),'actiononclick','buttonscale','changingtheframes','rotatedbuttons','rasterbounce','alphamask','floodfill','bitmapdatapixel','bitmapdataprocess','bitmapdatawobble','cachedbitmapdata','extractmask','graphics','fullscreen','rendercrisp','rendertexturemirror','rendertexturestarfield','rendertexturetrail')


        ),



        NavRight(

            Dropdown(

                $.glyphicon('user',  $.span().id('uname') ),

                $.liA('view' ),   //   $liA(   Glyph('zoom-in','profile').o(  ldr('profile')  )  ),

                $.liA('logout', logOut)

            )

        ),


        $.searchNavRight()
    )


}


NavHeader=function(){

    _IconBars=function(num){

        var span = $.span()

        _.times(num||1, function(){

            span.A( $.span().K('icon-bar') ) })

        return span}


    var theButton = $.button().K('navbar-toggle').attr({'data-target':'#navbar','data-toggle':'collapse'}).A(
        '',


        _IconBars(4))



    var theBrand = $.a('wappy', function(){$w.location='/wap'}).K('navbar-brand')

    return $.div().K('navbar-header').A(theButton, theBrand) }


Nav=function(){
    return $ul().k("nav navbar-nav").apply(0, G(arguments))}


NavRight=function(){return $ul().k("nav navbar-nav navbar-right").apply(0, G(arguments))}



Dropdown=function(){

    DropdownToggle0 =   function(dropdownName, glyphicon){

        return    $.a().K('dropdown-toggle').attr({'data-toggle':'dropdown'}).A(
            $.glyphicon(glyphicon),
            $.b('&nbsp;'+ dropdownName),
            $.span().K("caret")
        )}




    var args=G(arguments),  theInnerUl= $.ul().K('dropdown-menu'), theOuterLi




    _.each(args.r,
        function(arg){

            if(  S(arg)){

                arg=args.p?

                    LiALoader.A(arg)   // $liA(arg, function(){load(arg)}   )

                    : $.liA(arg) } // *****

            theInnerUl.A( arg ) })



    theOuterLi = $li().k('dropdown')(

        $a().k('dropdown-toggle').at({'data-toggle':'dropdown'})(
            args.f,
            $.span().K('caret')
        )

    )



    return theOuterLi.A( theInnerUl )


}



DropdownLoader=function(){

    LiALoader = function(a){return $.liA(a,   function(){ load(a) }   )   }











    var args=G(arguments),  theInnerUl, theOuterLi


    theInnerUl = $.ul().K('dropdown-menu')


    _.each(args.r,   function(arg){
        if(  S(arg)){  arg = LiALoader(arg)    }
        theInnerUl.A( arg ) })


    theOuterLi = $li().K('dropdown').A(

        $a().K('dropdown-toggle').at({'data-toggle':'dropdown'})
        (
            args.f,

            $.span().K('caret')

        )

    )



    return theOuterLi( theInnerUl )

}



// just pass in the contents of the collapsable part
StandardNavbar=function(){


    var navbar =  $div().k('navbar navbar-default navbar-inverse navbar-fixed-top')

    //NavCollapse = function(a){return $div().k('collapse navbar-collapse').id('navbar').apply(0, a)}

    var div= $div().k('collapse navbar-collapse').id('navbar')

    div.apply(0,  G(arguments) )


    navbar.A(

        NavHeader(),

        div


    )

    navbar.pp()

    return navbar}

$.searchNavRight =  function(){

    return $.form().K("navbar-form navbar-right").A(
        $.div().K('form-group').A(

            $('<input>').K('form-control').attr('placeholder','search')

        ),    $.submitButton().A( $.glyphicon('search')))}










