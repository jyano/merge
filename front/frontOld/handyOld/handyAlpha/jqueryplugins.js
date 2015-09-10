
$.fn.col = function(col){
    return this.css('color', oO('c', col))}
$.fn.C = function(col, c2){
    if(c2){return this.C(col).col(c2)}
    return this.css('backgroundColor', oO('c', col))}
$.fn.A=function(stuff){
   if( U(stuff)){$('body').append(this); return this}
    this.append.apply(this, arguments)
    return this}
$.fn.W=function(width){return width? this.width(width): this.width()}
$.fn.H=function(height){return height? this.height(height): this.height()}

$.fn.V=function(){
    var val= this.val()
    this.val('')
    return val
}
$.fn.E=function(html){
    this.empty(); this.html(html); return this
}

$.fn.WH=function(w,h){h=h||w;return this.W(w).H(h)}
$.fn.minW=function(a){return this.css('min-width',a)}
$.fn.minH=function(a){return this.css('min-height',a)}
$.fn.maxW=function(a){return this.css('max-width',a)}
$.fn.maxH=function(a){return this.css('max-height',a)}
$.fn.Z=function(w,h){return this.W(w).H(h||w)}
$.fn.Y=$.fn.top=function(top){return top?this.css('top', top):this.css('top')}
$.fn.X=$.fn.left=function(left){return left?this.css('left', left):this.css('left')}
$.fn.right=function(right){return right?this.css('right', right):this.css('right')}
$.fn.bottom=function(bottom){return bottom?this.css('bottom', bottom):this.css('bottom')}
$.fn.P = function(pos,left,top){
    if( U(pos) ){ return this.css('position') }
    this.css('position', oO('p',pos))
    if(left){this.left(left)}
    if(top){this.top(top)}
    return this}
$.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
$.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }
$.fn.drag = function(){

    this.A()
this.each(function(){
    $(this).css('top', $(this).position().top )
    $(this).css('left', $(this).position().left)})

    this.P('a')

    this.on('mousedown', function(e){

        var el = $(this)

        var offset = el.offset(),
            deltaX = e.pageX-offset.left,
            deltaY = e.pageY-offset.top

        $('html').on('mousemove', function(e){
            var x=e.pageX - deltaX,
                y=e.pageY - deltaY

            el.left(x)
                el.top(y)

        }).on( 'mouseup' , function(){  $(this).off() })

    })

    //touchDrg(element)
    return this

}
$.fn.mar=function(margin){

    if(U(margin)){ return this.css('margin') }

    this.css( 'margin' , margin ); return this }
$.fn.marBottom=function(margin){

    if(U(margin)){ return this.css('marginBottom') }

    this.css( 'marginBottom' , margin ); return this }
$.fn.marTop=function(margin){

    if(U(margin)){ return this.css('marginTop') }

    this.css( 'marginTop' , margin ); return this }
$.fn.marLeft=function(margin){

    if(U(margin)){ return this.css('marginLeft') }

    this.css( 'marginLeft' , margin ); return this }
$.fn.marRight=function(margin){

    if(U(margin)){ return this.css('marginRight') }

    this.css( 'marginRight' , margin ); return this }
$.fn.marHor=function(a){return this.marLeft(a).marRight(a)}
$.fn.marVer=function(a){return this.marTop(a).marBottom(a)}
$.fn.J= $.fn.animate
$.fn.K= function(){  $.fn.addClass.apply(this, arguments); return this  }
$.fn.fontSize=function(z){ this.css('font-size', z)

    return this}
$.fn.textAlign=function(z){

    this.css('text-align', z)

    return this}
$.fn.opacity=$.fn.alpha=function(z){

    this.css('opacity', z)

    return this}
$.fn.type=function(type){
    if(U(type)){return this.attr('type')}
    this.attr('type',type);return this
}
$.fn.display=function(display){
    if(U(display)){return this.css('display')}
    this.css('display',display);return this
}
$.fn.float=function(float){
    if(U(float)){return this.css('float')}
    this.css('float',float);return this
}
$.fn.overflow=function(overflow){
    if(U(overflow)){return this.css('overflow')}
    this.css('overflow',overflow);return this
}
$.fn.href=function(href){
    if(U(href)){return this.attr('href')}
    this.attr('href',href);return this
}
$.fn.borderStyle= function(style){

  this.css('border-style', style)

return this}
$.fn.borderColor=function(c){

    this.css('border-color', oO('c', c))

    return this}
$.fn.borderWidth=function(w){

    this.css('border-width',w)

    return this}
$.fn.hold=function(a){

    a.P('s')
    this.A(a)


}
$.fn.pad=function(padding){
    if(U(padding)){return this.css('padding')}
    this.css('padding',padding);return this}
$.fn.padTop=function(padding){
    if(U(padding)){return this.css('paddingTop')}
    this.css('paddingTop',padding);return this}
$.fn.padBottom=function(padding){
    if(U(padding)){return this.css('paddingBottom')}
    this.css('paddingBottom',padding);return this}
$.fn.padLeft=function(padding){
    if(U(padding)){return this.css('paddingLeft')}
    this.css('paddingLeft',padding);return this}
$.fn.padRight=function(padding){
    if(U(padding)){return this.css('paddingRight')}
    this.css('paddingRight',padding);return this}
$.fn.padHor=function(a){return this.padLeft(a).padRight(a)}
$.fn.padVer=function(a){return this.padTop(a).padBottom(a)}
$.fn.bor=function(border){
    if(U(border)){return this.css('border')}
    this.css('border',border);return this}
$.fn.zIndex=function(z){
    if(U(z)){return this.css('z-index')}
    this.css('z-index',z);return this}
$.fn.el = function(e){
    if(U(e)){
        console.log( $('<div>').append(  this.clone()  ).html() )
        return this}}
$.fn.free=function(){

    $('body').A( this )

    this.P('a')
}
$.fn.dismiss=function(a){
    return this.attr('data-dismiss',a)}
$.fn.delButton=function(){
    var that=this

    this.prepend(

        $.div().A(
            $.button(  'x', function(){ that.remove() }).K('pull-right').mar(20)
        )

    )


    return this}
$.fn.for=function(forWhat){return this.attr('for', forWhat)}
$.fn.placeholder=function(forWhat){return this.attr('placeholder', forWhat)}
$.fn.src  = function(a){


    if( U(a) ){return this.attr('src')}

    this.attr('src',  src(a) )

    return this
}





$.div = function(col, width, height){



    if( U ( col ) ){

        return $( '<div>' )

    }

    if( S(col)) {

        var d = $( '<div>' )

        d.css( 'backgroundColor', oO( 'c' , col ) )

        if( N ( width ) ){ d.W( width ) }

        if( N ( height ) ){ d.H( height ) }

        return d }


    if(N(col)){

        var d = $( '<div>' )

         d.W( col )

        if( N ( width ) ){ d.H( width ) }

        return d

    }



 }
$.divA = function(col, width, height){


    if( U ( col ) ){   return $( '<div>' ).C( 'n' ).P('absolute') }

    if( S(col)) {

        var d = $( '<div>' ).P('absolute')

        d.css( 'backgroundColor', oO( 'c' , col ) )

        if( N ( width ) ){ d.W( width ) }

        if( N ( height ) ){ d.H( height ) }

        return d }

    if(N(col)){ return $.div( 'o', col, width).P('absolute') }

}
$.button = function(buttonText, func){
    if(F(buttonText)){return $.button('submit', buttonText)}
    var b=$('<button>')
    b.text(buttonText)
    b.click(func)
    return b}
$.buttonL = function(buttonText, func){
    if(F(buttonText)){return $.button('submit', buttonText)}
    var b=$('<button>')
    b.text(buttonText)
    b.click(func)
    return b.K('btn-lg')}
$.hr=function f(color,height,width){

    if( N(color) ){  return f('z', color, height)  }

    var hr = $('<hr>').H(height||2).C(color||'z')

    if(width){ hr.W(width) }

    return hr
}





$.p=function(){

    theSpan=$( '<p>' )

    _.each(arguments,   function(val){ theSpan.A( val )    })

    return theSpan}
//$.p = function(text){var p = $( '<p>' ); if( text ){ p.text(text)  }; return p}
$.paragraphs=function(){ _.each(arguments,function(arg){$.p(arg).A()})}
$.pgX=function(a){
    var g=G(arguments),

        p= $('<pg>')

    _.each( g , function( v ){

        if( A(v) ){ p.k( v[0] ) }

        else {

            if( S(v) ){  v = sp(v)   }

            p(v)  }

    })

    return p
}

$li=function(){var g=G(arguments),
    l=qq('li')

    //klass or add
    _e(g,function(v){if(A(v)){l.k(v[0])}else{l(v)}})
    if(g.p){l.k('A')}//active
    if(g.n){l.k('dd')}//dropdown
    return l}
$.submit= $.submitButton = function(buttonText, func){
    return $.button(buttonText, func).type('submit')
}
$.form=function(){
    return $('<form>')
}
$.glyph=$.glyphicon=function(glyph, a){

    var s = $.span(a).K("glyphicon glyphicon-" + glyph)

    return s}





$.lIA=$.liA=function(a, f){


    var anchor = $('<a>').id(a).attr('href', '#')

    if(S(a)) {anchor.html(a)} else {anchor.A(a)}

    if(F(f)){  anchor.click(f)  } else {  anchor.href( f|| '#' )}

        return $('<li>').A(anchor)
}



$.h1=function(){
    var h=$('<h1>')
    h.A.apply(h,G(arguments))
    return h}
$.h2=function(){
    var h=$( '<h2>' )
    h.A.apply(h,G(arguments))
    return h}
$.h3=function(){
    var h=$( '<h3>' )
    h.A.apply(h,G(arguments))
    return h}
$.h4=function(){
    var h=$( '<h4>' )
    h.A.apply(h,G(arguments))
    return h}
$.h5=function(){
    var h=$( '<h5>' )
    h.A.apply(h,G(arguments))
    return h}
$.h6=function(){
    var h=$( '<h6>' )
    h.A.apply(h,G(arguments))
    return h}

$.input=function(){
   return $('<input type="text">')


}

$.password=function(){
    return $('<input type="password">')


}

$.br=function(a){

    if (U(a) ){ return $('<br>') }

    var span = $.span()

    _.times(a,
        function(){ span.A( $('<br>') )  })

    return span

}


$.span=function(){theSpan=$( '<span>' ); _.each(arguments,   function(val){ theSpan.A( val )    }); return theSpan}
$.span2=function(c1, c2){return $('<span>').col(c1).C(c2)}


$.label =  function lb(labelText, labelFor, name, placeholder){

    var g=G(arguments), theLabel = $('<label>'), theInput;

    if( !g[0] ){ return theLabel }

    theLabel.for(labelFor).K('control-label').html(labelText)

    if( !g[2] ){ return theLabel }

    theInput = $.input().id(labelFor).name(name).placeholder(placeholder||'...')

    if(g.N){ theInput.K('form-control')}

    return $.span().A(  theLabel,   theInput )

}


//finish later..
$.a= function(a,f){

    var g=G(arguments),   a=g[0],  f=g[1],l

    a=a||''

    l = $('<a>').id(a).A(a)

    if(F(f)){  l.click(f)  } else {  l.href( f|| '#' )   }

    // if(g.n){ l.K('dropdown-toggle').attr({ 'data-target' : 'dropdown' }) }


    //if(g.p){ l = $.li( l ) }

    //if(g.m){ l = $.li( l ).K('active') }

    return l}



//twitter
$.dropDown=function(a,f){   var l = $('<a>').id(a).A(a)
    if(F(f)){  l.click(f)  } else {  l.href( f|| '#' )}
        return   l.K('dropdown-toggle').attr({ 'data-target' : 'dropdown' })}

$.active=function(a,f){   var l = $('<a>').id(a).A(a)
    if(F(f)){  l.click(f)  } else {  l.href( f|| '#' )}
        return   l.K('active') }



$.b=function(a){
    var b= $('<b>')
    if(a){b= b.A(b)}
    return b
}




$.li =function(something){var g=G(arguments),
    l=$('<li>')

   if(D(something)) {l.A(something)}
    //klass or add




   // if(g.p){ l.k('A')}//active

    //if(g.n){ l.k('dd')}//dropdown

    return l}





////


$.$$=function(a,b,c){

    $('body').dblclick(a,b,c)

    return $}
$.$=function(){

    var b=$('html')

        b.click.apply(b, arguments)

    return $}


$.editDiv=function(words){

    var input = $('<textarea>').css('margin', 4)

    var span = $.span().C('z')

    var spanFunc = function () { span.text(input.val()) }

    var d = $.divA().C('n', 'y').css('padding', 8).A()

    d.zIndex(0)

    var location

    var canMove=true
     xButton= $.button('', function(){d.remove()}).W(4).H(4).C('r')


    var changeLocation=true
    var inputMove=true

    var mouse = 'up'

    var appendSensorDiv= $.div('y',16, 12).textAlign('center').mar('0 auto').click(function(){
        $(this).parent().free()
    })

    d.mousedown(function(){


        inputMove = false

        mouse='div'
    })
    d.mouseup(function(){mouse='up'})
    d.mousedown(function(){

        $.editDiv.top ++

        $(this).zIndex(  $.editDiv.top  )

    })
    input.mousedown(function(e){
        $.editDiv.top ++
        $(this).parent().zIndex(  $.editDiv.top  )
        location={top: d.top(), left: d.left()}
        inputMove = true
        mouse='input'
        e.stopPropagation()})
    input.mousemove(function(e){

        if(inputMove){

            e.stopPropagation()

            d.top( location.top).left(location.left)
        }
    })



    if(U(words)) {

      return d.A( xButton, $br().q, span.hide(), input,

          appendSensorDiv

      ).dblclick(function(e){
              e.stopPropagation()

          spanFunc()
          xButton.toggle();
          input.toggle()
          span.toggle()


      }).drag()

    }

    else {

      input.val(words)

        d.A( xButton, $br().q,span, input.hide() )

        spanFunc()

        d.dblclick(function(e){
            e.stopPropagation()
            spanFunc(); xButton.toggle(); input.toggle(); span.toggle() })


      return d.drag() }

}
$.editDiv.top=0
editDiv=function(a){


    var div=$.editDiv(a),
        range=$('<input type="range">')


    range.on('mousedown',function(e){
        e.stopPropagation()

    })

    range.on('input', function(){



        div.find( $('span')).fontSize( $(this).val()  )
        div.find( $('textarea')).fontSize( $(this).val()  )

    })


    div.prepend( range  )

    return div
}





$.ul=function(){  return $('<ul>') }

$.row=function(n){

    var div= $.div().addClass('row')

    _.each( G(arguments), function(arg){ div.A(arg) } )

    return div
}

$.formGroupDiv=function(){return $.div().K('form-group').fontSize(20)}

$.submitInput=function(val){

   var el = $('<input>').attr('type', 'submit').fontSize( 16 )

    if(val){  el.val(val)  }

return el}

$.textInput=function(name){

    var el = $('<input>').attr('type', 'text')

    if(name){  el.attr({name: name, id:name})  }

    return el}

$.passwordInput=function(name){

    var el = $('<input>').attr('type', 'password')

    if(val){  el.attr('name', name)  }

    return el}
//pass in size, and then args(contents) as a list (or as an array)
$.col = function(){  var args = G(arguments),

    div= $.div().addClass( 'm' + args[0] ),

    iter = A( args[1])?  args[1] : args.r

    _.each( iter, function(v){ div.A(v) } )

    return div }



$.canvas=function(col, width, height){

    var el

    if( U ( col ) ){ return superCanvas( $( '<canvas>' ) ).C( 'blue' )   }
    if( N(col) ){ return  $.canvas( 'x', col, width   )}
    if( S(col) ){

        el = $( '<canvas>' )

        el.css( 'backgroundColor', oO( 'c' , col ) )

        if( _.isNumber( width ) ){
            el.attr('width', width )
            el.attr('height', height || width)
        }

    return superCanvas(el)}

    return el}









$a =function(a, func){
    var g=G(arguments), a=g[0], f=g[1],

        theEl=qq('a').id(a)(a)

    if(F(func)){theEl.o(func)} else {theEl.hr(func||'#')}

    if(g.n){theEl.dd()}

    //  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"

    if(g.p){theEl=li(theEl)}



    if(g.m){theEl=li(theEl).k('active')}

    return theEl}

$ul = ul=function(){
    var tLi=function(a){
        var iLi=function(a){return _h('HTMLLIElement', E(a))}
        return iLi(a)?a:li(a)}

    var g=G(arguments),
        e=qq('ul')
    _e(g,function(v){if(A(v)){e.k(v[0])}
    else{e(tLi(v))}})
    if(g.n){e.k('ddm')}//dropdown menu
    if(g.p){e.k('n nbn')}//navbar nav
    return e}
$hr = hr=function(c,h,w){var e=qq('hr');
    if(N(c)){return hr('z',c,h)}
    e.h(h||2);e.c(c||'z');
    if(w){e.w(w)};return e}


JQPLUGS=function(){ z()

    d = $.div().Z( 100 ).C( 'r' ).A().append( 'abc' )

    e = $.div().Z( 100 ).col( 'r' ).A().append( 'abc' )

    f = $.div().Z( 100 ).C( 'r' , 'b' ).A().append( 'abc' )

    g = $.div( 'b' , 500 , 500 ).A() }

IMAGE=function(){

    i = $.img('me')//.A()

}
EDITRANGE=function(){

    z()

    a=editDiv().C('a')
    b=editDiv().C('b')
    c=editDiv().C('c')
}

FUNNY=function(){z()

    word = function(text, c1, c2){

        var s= $.span(text).C(c1, c2).A().drag()

        return s}


    w=word('hello', 'b', 'g')

    word('sicko', 'g', 'b')

    word('why, i oughta..', 'p', 'x')

    word('it was raining..', 'j', 'k')

    word('who ya gonna call?', 'h', 'i')
    word('dag nabit!', 'f', 'g')

    word('i like', 'd', 'e')
    word('tomorrow', 'a', 'c')

    word('me', 'r', 'b')

}




$.img=function(source, func){

    var img = $( new Image() )

    //gets rid of auto-scaling quirk
    img.load(function(img){
        var img=$(img.target)
         img.W( img.W() )
         img.H( img.H() )
    })

    if(func){img.load(function(event){func($(event.target), event)})}

    if(source){img.src(src(source))}

    return img
}







function superCanvas(el){

    el.canvas = $(el)[0]
    el.context = el.canvas.getContext('2d')
    el.stage = new createjs.Stage(el.canvas)

    el.drawImage = el.dI=function(i){

        var args=G(arguments);

        args[1] = args[1]||0
        args[2] = args[2]||0
        el.context.drawImage.apply(el.context, args)

    }
    el.draw=function(img){

        var args=G(arguments),  img=args[0]

        $.img(img, function(i){

            args[0] = i[0]

            el.drawImage.apply(el, args)

        })}

    el.W=function(w){
        if(U(w)){return el.attr('width')}
        el.attr('width',w); return el}
    el.H=function(h){
        if(U(h)){return el.attr('height')}
        el.attr('height',h); return el}
    el.WH=function(w,h){

        if(U(w)){
            var width=this.W(), height=this.H()
            return {
                width:width,  w:width,
                height:height, h:height}}

        h=h||w
        return this.W(w).H(h)}
    el.fit=function(a, X, Y){

        a||'me'
        X=X||0
        Y=Y||0
        el.draw(a, X, Y, el.width(), el.height())
        return el}


    //normal methods
    el.lineTo=function(x,y){

        if(A(x)){

            _.each(arguments,
                function(x){
                    el.lineTo(x[0],x[1])
                })}

        el.context.lineTo(x,y)
        return el
    }
    el.save=function(){
        el.context.save()
        return el
    }
    el.restore=function(){
        el.context.restore()
        return el
    }
    el.fill=function(){
        el.context.fill()
        //el.stroke()
        return el
    }
    el.stroke=function(){
        el.context.stroke()
        //el.stroke()
        return el
    }


    //normal prop (as methods)
    el.lineWidth=function(w){
        if(U(w)){return el.context.lineWidth}
        el.context.lineWidth=w
        return el
    }
    el.lineCap=function(w){
        if(U(w)){return el.context.lineCap}
        el.context.lineCap=w
        return el
    }
    el.lineJoin=function(w){
        if(U(w)){return el.context.lineJoin}
        el.context.lineJoin=w
        return el
    }
    el.globalAlpha=function(w){
        if(U(w)){return el.context.globalAlpha}
        el.context.globalAlpha=w
        return el
    }
    el.clip=function(){
    el.context.clip()
    return el}
    el.strokeColor=setStrokeColor=function(c){
        el.context.setStrokeColor(oO('c',c))
    return el}
    el.fillColor=setFillColor=function(c){
        el.context.setFillColor(oO('c',c))
        return el}

    el.beginPath=el.begin =function(x, y){

        el.context.beginPath()

        if(N(x)){el.moveTo(x,y)}

        if(A(x)){el.moveTo(x[0],x[1])}

        return el}




    el.moveTo=function(x,y){
        el.context.moveTo(x,y)
        return el
    }
    el.fillRect=function(a,b,c,d){
        a=a||0
        b=b||0
        c=c||el.W()
        d=d||el.H()

        el.context.fillRect(a,b,c,d)
        return el}
    el.clearRect=function(a,b,c,d){
        a=a||0
        b=b||0
        c=c||el.W()
        d=d||el.H()
        el.context.clearRect(a,b,c,d)
        return el
    }
    el.arc=function(a,b,c,d,e,f,g){
        el.context.arc(a,b,c,d,e,f,g)
        return el
    }

    el.quadraticCurveTo=function(a,b,c,d,e,f,g){
        el.context.quadraticCurveTo(a,b,c,d,e,f,g)
        return el}

    el.closePath=function(){
        el.context.closePath()
        return el}

    el.roundRect= function(X, y, width, height, radius){

        el.beginPath()
        el.moveTo(X + radius, y);
        el.lineTo(X + width - radius, y);
        el.quadraticCurveTo(X + width, y, X + width, y + radius);
        el.lineTo(X + width, y + height - radius);
        el.quadraticCurveTo(X + width, y + height, X + width - radius, y + height);
        el.lineTo(X + radius, y + height);
        el.quadraticCurveTo(X, y + height, X, y + height - radius);
        el.lineTo(X, y + radius);
        el.quadraticCurveTo(X, y, X + radius, y);
        el.closePath();

        return el}

    el.toDataURL=function(){
        return el.canvas.toDataURL()
    }

    //draw line ( [x,y],[x,y] || x,y,x,y )
    //draw multiple unconnected lines ( [[],[]],[[],[]] || [],[] )
    //fresh start
    el.line = function rc(p){

        var args = G(arguments),    p=args[0]


         if(N(args[0])){
            el.begin(args[0], args[1])
            el.lineTo(args[2], args[3])
            el.stroke()
         return el}


        if( A(args[0]) && N(args[0][0]) ){

             el.begin(args.f)

             _.each(args.r, function(p){
                 el.lineTo(p[0],p[1])
             })

             el.stroke()
             return el}



        if(AA(p)){

            _.each(args,
                function(p){

                   el.line.apply(null, p)

                })}





        el.stroke()
        return el}







    //wap specific
    el.snap = el.save = function (  func ){

        pams = {

            d: el.toDataURL(),

            dats: el.dats

        }


        $.post('/img', pams, func )



    }


    el.img = $.img()
    el.img.src( el.toDataURL() )

    el.copy= function(){
        el.img.src( el.toDataURL() )
        return el}
    el.paste= function(){
        var g=G(arguments)
        if(g.N){el.clearRect()}
        if(g.p){el.fit(el.img)}
        else {
            el.draw(el.img.src())
        }
    }

    //clear screen [+ fill with color || run fx]
    el.clear = function(a){//el.X=
        if(S(a)){
            el.fillStyle(a);
            return el.fillRect()}
        el.clearRect(0,0, el.W(), el.H())
        if(F(a)){a()}
        return el}



    el.circle =el.cir=function(X,Y,R,fs,ss){
        var g=G(arguments),
            X=g[0]||200,
            Y=g[1]||200,
            r=g[2]||1,
            fs=g[3],
            ss=g[4]
        el.beginPath()
        el.arc(X,Y,r,0,7,false)

        el.fillColor(fs)
        el.strokeColor(ss)
        el.stroke().fill()
        return el}



    el.$=function(func){

        el.click(function(e){

            func(  e.clientX - osl(this),
                   e.clientY -ost(this))

        })}





    el.$$=function(f){
        var cX=function(e){return e.clientX},
            cY=function(e){return e.clientY}

        x.q.q.dblclick(function(e){f( cX(e)-osl(x.q.q), cY(e)-ost(x.q.q))})}

    el.dots=function(){

        el.DOTS=[]

        el.dats=[]

        el.click(function(X, Y){
            el.cir(X,Y)
            el.DOTS.push( [ X, Y ] )
            el.dats.push( parseInt(X) )
            el.dats.push( parseInt(Y) )
            el.ln( el.DOTS )

        })



        x.$$(function(X,Y){var du

            el.context.save()
            el.closePath()
            el.off()
            el.C('X')
            du = el.toDataURL()
            el.clear()
            el.clip()
            el.fit(du)
            el.C('w')

        })

        return el}


    return el}





function testCan(){
    z()
    c= $.canvas('o', 500, 500).A()


    //c.save().lineWidth(30).setStrokeColor('r').lineTo([[100,100],[150,110]]).stroke().restore().lineTo([[200,100],[200,600]]).stroke()

     // c.roundRect(100,50,100,100,50).stroke()//.fill()

    //c.line(10,10,50,500).stroke()

    c.line([
        [[100,100],[200,200],[140,900]]
       // ,  [[150,150],[250,250], [20,300]]
    ]).stroke()

    //c.line([100,100],[200,200],[150,150],[250,250] ).stroke()
    //c.line( [350,50],[25,25],  [450,10],[20,550]).stroke()
}





VOLUME=function(){

    outerDiv = $.div('y', 400, 200 ).A().drag()

    r=$.row().W(600)

    r.A(
        $.div().id('booksDiv').addClass('col-md-6').A(    ) )

    r.A(
        $.div().id('displayDiv').addClass('col-dm-6').A(   $.img('guy')  )    )

    r.A().drag()


    Book=function(title){

       var book = $.div().A( $('<h4>').text( title||'book') ).H(60).C('b').addClass('book')

        book.display = $.img('me').hide().addClass('display')

    return book}
    addBook=function(title){

        var book=Book(title)

        $('#booksDiv').A( book )

        $('#displayDiv').A(   book.display      )

        $('.book').click(   function(){

            $(this).id()

        })

        return book
    }


    a= addBook('a')
    b=addBook('b')
};



//mongoError: kill mongod processess!!!!  ps ax | grep mongod


(function ($) {
    "use strict";
// jQuery('form').serializeJSON()
    $.fn.serializeJSON = function (options) {
        var serializedObject, formAsArray, keys, value, f, opts;
        f = $.serializeJSON;
        formAsArray = this.serializeArray(); // array of objects {name, value}
        opts = f.optsWithDefaults(options); // calculate values for options {parseNumbers, parseBoolens, parseNulls}
        serializedObject = {};
        $.each(formAsArray, function (i, input) {
            keys = f.splitInputNameIntoKeysArray(input.name); // "some[deep][key]" => ['some', 'deep', 'key']
            value = f.parseValue(input.value, opts); // string, number, boolean or null
            if (opts.parseWithFunction) value = opts.parseWithFunction(value); // allow for custom parsing
            f.deepSet(serializedObject, keys, value, opts);
        });
        return serializedObject;
    };



// Use $.serializeJSON as namespace for the auxiliar functions
// and to define defaults
    $.serializeJSON = {
        defaultOptions: {
            parseNumbers: false, // convert values like "1", "-2.33" to 1, -2.33
            parseBooleans: false, // convert "true", "false" to true, false
            parseNulls: false, // convert "null" to null
            parseAll: false, // all of the above
            parseWithFunction: null, // to use custom parser, use a function like: function (val) => parsed_val
            useIntKeysAsArrayIndex: false // name="foo[2]" value="v" => {foo: [null, null, "v"]}, instead of {foo: ["2": "v"]}
        },
// Merge options with defaults to get {parseNumbers, parseBoolens, parseNulls, useIntKeysAsArrayIndex}
        optsWithDefaults: function(options) {
            var f, parseAll;
            if (options == null) options = {}; // arg default value = {}
            f = $.serializeJSON;
            parseAll = f.optWithDefaults('parseAll', options);
            return {
                parseNumbers: parseAll || f.optWithDefaults('parseNumbers', options),
                parseBooleans: parseAll || f.optWithDefaults('parseBooleans', options),
                parseNulls: parseAll || f.optWithDefaults('parseNulls', options),
                parseWithFunction: f.optWithDefaults('parseWithFunction', options),
                useIntKeysAsArrayIndex: f.optWithDefaults('useIntKeysAsArrayIndex', options)
            }
        },
        optWithDefaults: function(key, options) {
            return (options[key] !== false) && (options[key] || $.serializeJSON.defaultOptions[key]);
        },
// Convert the string to a number, boolean or null, depending on the enable option and the string format.
        parseValue: function(str, opts) {
            var value, f;
            f = $.serializeJSON;
            if (opts.parseNumbers && f.isNumeric(str)) return Number(str); // number
            if (opts.parseBooleans && (str === "true" || str === "false")) return str === "true"; // boolean
            if (opts.parseNulls && str == "null") return null; // null
            return str; // otherwise, keep same string
        },
        isObject: function(obj) { return obj === Object(obj); }, // is this variable an object?
        isUndefined: function(obj) { return obj === void 0; }, // safe check for undefined values
        isValidArrayIndex: function(val) { return /^[0-9]+$/.test(String(val)); }, // 1,2,3,4 ... are valid array indexes
        isNumeric: function(obj) { return obj - parseFloat(obj) >= 0; }, // taken from jQuery.isNumeric implementation. Not using jQuery.isNumeric to support old jQuery and Zepto versions
// Split the input name in programatically readable keys
// "foo" => ['foo']
// "[foo]" => ['foo']
// "foo[inn][bar]" => ['foo', 'inn', 'bar']
// "foo[inn][arr][0]" => ['foo', 'inn', 'arr', '0']
// "arr[][val]" => ['arr', '', 'val']
        splitInputNameIntoKeysArray: function (name) {
            var keys, last, f;
            f = $.serializeJSON;
            if (f.isUndefined(name)) { throw new Error("ArgumentError: param 'name' expected to be a string, found undefined"); }
            keys = $.map(name.split('['), function (key) {
                last = key[key.length - 1];
                return last === ']' ? key.substring(0, key.length - 1) : key;
            });
            if (keys[0] === '') { keys.shift(); } // "[foo][inn]" should be same as "foo[inn]"
            return keys;
        },
// Set a value in an object or array, using multiple keys to set in a nested object or array:
//
// deepSet(obj, ['foo'], v) // obj['foo'] = v
// deepSet(obj, ['foo', 'inn'], v) // obj['foo']['inn'] = v // Create the inner obj['foo'] object, if needed
// deepSet(obj, ['foo', 'inn', '123'], v) // obj['foo']['arr']['123'] = v //
//
// deepSet(obj, ['0'], v) // obj['0'] = v
// deepSet(arr, ['0'], v, {useIntKeysAsArrayIndex: true}) // arr[0] = v
// deepSet(arr, [''], v) // arr.push(v)
// deepSet(obj, ['arr', ''], v) // obj['arr'].push(v)
//
// arr = [];
// deepSet(arr, ['', v] // arr => [v]
// deepSet(arr, ['', 'foo'], v) // arr => [v, {foo: v}]
// deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}]
// deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}, {bar: v}]
//
        deepSet: function (o, keys, value, opts) {
            var key, nextKey, tail, lastIdx, lastVal, f;
            if (opts == null) opts = {};
            f = $.serializeJSON;
            if (f.isUndefined(o)) { throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined"); }
            if (!keys || keys.length === 0) { throw new Error("ArgumentError: param 'keys' expected to be an array with least one element"); }
            key = keys[0];
// Only one key, then it's not a deepSet, just assign the value.
            if (keys.length === 1) {
                if (key === '') {
                    o.push(value); // '' is used to push values into the array (assume o is an array)
                } else {
                    o[key] = value; // other keys can be used as object keys or array indexes
                }
// With more keys is a deepSet. Apply recursively.
            } else {
                nextKey = keys[1];
// '' is used to push values into the array,
// with nextKey, set the value into the same object, in object[nextKey].
// Covers the case of ['', 'foo'] and ['', 'var'] to push the object {foo, var}, and the case of nested arrays.
                if (key === '') {
                    lastIdx = o.length - 1; // asume o is array
                    lastVal = o[lastIdx];
                    if (f.isObject(lastVal) && (f.isUndefined(lastVal[nextKey]) || keys.length > 2)) { // if nextKey is not present in the last object element, or there are more keys to deep set
                        key = lastIdx; // then set the new value in the same object element
                    } else {
                        key = lastIdx + 1; // otherwise, point to set the next index in the array
                    }
                }
// o[key] defaults to object or array, depending if nextKey is an array index (int or '') or an object key (string)
                if (f.isUndefined(o[key])) {
                    if (nextKey === '') { // '' is used to push values into the array.
                        o[key] = []
                    } else if (opts.useIntKeysAsArrayIndex && f.isValidArrayIndex(nextKey)) { // if 1, 2, 3 ... then use an array, where nextKey is the index
                        o[key] = []
                    } else { // for anything else, use an object, where nextKey is going to be the attribute name
                        o[key] = {}
                    }
                }
// Recursively set the inner object

                tail = keys.slice(1)

                f.deepSet(o[key], tail, value, opts)
            }
        }
    }}(window.jQuery || window.Zepto || window.$))


