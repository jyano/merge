

Graphics.fromSource = crs=function(a){
    //it's the opposite of 'src' !
//it strips '/me.png' -> 'me'
//why would i need this?
    return a.split('/').pop().split('.png')[0] }

Graphics.toSource = src=function f(e){

    var _src=function(a){ a = $.extension(a)

        return s$(a).startsWith('/')? a : '/'+ a }


    //if(Q(e)){$l('q');e=$(e)[0]}

    if( e.image ){ e=e.image}

    if( C(e) ){ e = C(e) }

    if( e.src ){ e = e.src}

    if( e.toDataURL ){  e=tDU(e) }

   return s$(e).contains('data:')?  e

        :  S(e) ?  _src(e)

            : 0

}


$.fit = fit=function(a,b,c){
    return $.canvas( c||'r', b||700, b||700).A().fit(a||'me')  }


cut=function(m){//fresh()
    z()

    format()

   x =   xx(  $.canvas().id('can').W(100).H(100)  )

       .bc('w').Z(7).fit(m||'me')


    x.dots()

    s1(

        $button('save sprite',function(){

            sv(x);
            fresh();
            EDIT()
        }),



        $.br(2),



        $button('restart cut',function(){cut(m)}), $.br(2),

        $button('file uploads',

            function(){$w.location='/wap/uploads' }


        ))


    s2( h2('click to start cut-out..'),
        dv('o',500,200).pp()(x))
}



testStuff=function(){

z()
    i = $.img('me')

    c = $.canvas('yellow', 500, 500).A().drag()

    ctx = c[0].getContext('2d')

    x = xx(c)
}

$fileUpload = fup=function(labelText, text){

    var theFormGroup = fg(
        $label(  D(labelText) ? labelText  : 'upload file',  'upl'  ).k('ctl').f(20),
        ip('file').id('upl').nm('i'))

    if(text){

        theFormGroup(

            pg(['help-block'], text) )}

    return theFormGroup }

$.fileUpload =  function(labelText, text){

    var theFormGroup =  $.div().K("form-group").A(

        $.label(  D(labelText) ? labelText  : 'upload file',  'upl'  ).K('control-label').fontSize(20),

        $.input().type('file').id('upl').name('i')

    )


    if(text){

        theFormGroup.A(   $.p(text).K('help-block')   )}

    return theFormGroup }
//<div class="form-group">
//      <label style="font-size: 20px;" class="control-label" for="upl">
//              upload file
//      </label>
//      <input name="i" id="upl" type="f">
// </div>

sv=function( x, func ){  $.post('/img', {

        d: xx( C( x ) ).u(),

        dats: x.dats

    }, func ) }


//old // does something :)
card=function(a,b){ //to see a users profile

    if( O(a) ){return card( a.u,  a.m)  }

    var d = $.divA('y', 300)//.cen()


    d.dblclick( function(){  $(this).remove() } )

    d.A(  $.h3(a||'anon'),  $.img (b||'me' ).WH(200)  )

    d.el().A()


    return d
}

shUcards=function(){

    z();var t=100
    usrs(function(u){

        _e(u,function(u){


            qP(


                '/dud',


                {d: u.m},


                function(m){


                _d().p('a').lt(t).c('r').a().drg()(


                    h2( u.u ),


                    im( m ).w( 200 ).h( 200 )

                )

                    t+=20



                })})})

}


UPLOAD=function(){

    form =  $.form().attr({
        method:'post',

        enctype: 'multipart/form-data',

        action: '/pic'

    }).A(

        $.fileUpload(''),
        $.input().K("show").type('submit').val('ok')
    )


    $.pop(form,


        {title: 'upload a new pic'}



    ).drag()

}





UPLOADS=function(){
    format()
    var top = 80
    s1($.h4('You have uploaded these pics. Click to make a sprite, or hit the x to delete..'))
    $.get('/myPix',  function(pics){

            _.each(pics, function(pic){

            var fileName = pic._id + pic.ext


               picDiv = function(top){

                   var theDiv= $.div('blue', 100, 100).top(top).left(200)
                       .css({
                           position:'absolute',
                            padding: 16
                           })
                       .addClass('pic').drag().W('auto').H('auto')
                   return theDiv

               }

                var theButton = $.button('delete', function( element ){
                    $.ajax({type: 'DELETE',
                        data: pic,
                        url: '/pic',
                        success: function (result){
                            $(element.target).closest('div').remove()}})})

              var  theImg =  $.img(fileName).W(120).H(120).click(function(){

                  cut(fileName) })

                var thePicDiv=  picDiv(top).A(theImg,   theButton   )

                  $('body').A(thePicDiv  )

            top += 220

        })

        })}









CUTOUTS2=function(){format()

    var mug=function(f){

        wM(function(m){
            $win(
                $div()($.br(),$hr(),
                    $h3('User: '+ usr),
                    $.br(),

                    xc().w(400).h(400).fit(m)))})

    }



    s1($h4('click a pic to select it as your mug, or the x to delete it'))

    $.getJSON('/img', function(cutouts){

        var top = 80

        var highlight=function(q){

            qe('pic', function(q){q.c('b')})

            q.pa().c('y')

        }

        _.each(cutouts, function(cutout){

            dva('b',100, 100, top, 200, '-' ).k('pic')(

                qim(cutout.d, 1, function(q){

                    $.post('/changeMug', { m: cutout._id } ) ////****************

                    highlight(q)

                    mug() }),





                $button('X', function( qEl ){ //del(p, '/rmI')

                    $.ajax({
                        data: cutout,
                        url: '/img',
                        type: 'DELETE',
                        success: function (result){  qEl.XX() }  })   })


            ).drg()

            top += 220

        })})

}
CUTOUTS0=function(){

    $.format()

    var mug=function(f){

        wM(function(m){

            $.win().A(
                $.div().A(

                    $.br(),$hr(),
                    $.h3('User: '+ usr),
                    $.br(),
                    $.canvas(400, 400).fit(m)

                ))})

    }



    section1.A(   $.h4('click a pic to select it as your mug, or the x to delete it'))

    $.getJSON('/img', function(cutouts){

        var top = 80


        var highlight=function(q){

            $('pic').forEach(function(){  $(this).C('b') })

            q.parent().C('y')

        }





        _.each(cutouts, function(cutout){

            dva('b', 100, 100, top, 200, '-' ).k('pic')(

                // $.divA('b', 100, 100).left(200).top(top).K('pic').A(


                //   qim(cutout.d, 1,   function(q){  $.post('/changeMug', { m: cutout._id } ); highlight(q.q); mug()  }),



                $.img(cutout.d).WH(100).click(function(q){

                    $.post('/changeMug', {m: cutout._id})

                    highlight(q.q);

                    mug()

                }),






                $.button('X', function( qEl ){ //del(p, '/rmI')

                    $.ajax({
                        data: cutout,
                        url: '/img',
                        type: 'DELETE',
                        success: function (result){  qEl.XX() }  })   })


            ).drg()

            top += 220

        })})

}
CUTOUTS=function(){

    $.format()

    section1.A(
        $.h4('click a pic to select it as your mug, or the x to delete it'))

    $.getJSON('/img', function(cutouts){

        var top = 80

        _.each(cutouts, function(cutout){

            var imgDiv = $.divA('b',100, 100).left(top).top(200).K('pic').drag()

            imgDiv.A(

                $.img(cutout.d).WH(100).click(function(q){

                    $.post('/changeMug', {m: cutout._id})

                    $('.pic').each(function(index){  $(this).C('b')  })

                    $(this).parent().C('y')

                }),

                $.button('X', function(){

                    var that=this

                    $.ajax({

                        data: cutout,

                        url: '/img',

                        type: 'DELETE',

                        success: function (result){

                            $(that).parent().remove()

                        }})})

            )

            top += 220

        })})}