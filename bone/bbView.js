vw= Bb.View.prototype

function templs(){

    listTp=function(){
        $.dI('list-tp', [ $.la() ]).C('o')
        //$.d('o').id('list-tp').A($.la())
    }
    rFn=function(){var da, tp, ul

        $l('r: '+this.model.g('d')[0].h)
        //$.c('b').ab(300,300)

        da=this.model.g('d')
        tp=this.tp
        ul= this.$el.find('ul')
        _.e(da, function(da){
            ul.A(
                tp.clone()
                    .find('a').hr('href', da.h).T(da.t)
                    .end()
            )

        })
    }
    rFn2=function(){$l('rr: '+ this.model.g('d')[0].h )  //$.c('b').ab(300,300)
        da = this.model.g('d'); tp=this.tp
        ul= this.q.find('ul')
        _.e(da,  function(da){
            clo=  tp.clone()
            ul.A(clo.find('a').hr('href', da.h).T(da.t).end())  })}
    Temp=function(i,  h){
        var s=''

        if(A(h)){
            _e(h,
                function(h){
                    s += h.oh()
                })
        }

        s="<script type='text/template'>"+ s +"</script>"

        $l('s: '+unescape(s))
        return qq(


            $(s)

        ).id(i).a()

    }
    tempScr=function(i,e){

        t=qq($(
            '<script type="text/template" id="'+i+'">'
        ))

        _e(e,
            function(e){

                t(e)
            })



        return t
    }
    temp=function(a,b){
        return _.template(
            $('#'+a).html(),
            ob(b))}
//QT:
// this will be an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all
    qT=function(f,o,e){
        return f(ob(o), e||_d())
    }
//a sample template
    lii=function(o,e){

        return e( li(o.me), li(o.me) )
    }
//return [li(o.me), li(o.me)]
// e= qT( lii, {me:'jason'} ).a()
    thed=function(o,e){

        return e(

            thead()(
                tr().k('header')(
                    th()('Name'),th()('Age')
                )
            )
        )
    }
// t=qT(thed).a()

    Temp=function(i,  h){
        var s=''

        if(A(h)){
            _e(h,
                function(h){
                    s += h.oh()
                })
        }

        s="<script type='text/template'>"+ s +"</script>"

        $l('s: '+unescape(s))
        return qq(


            $(s)

        ).id(i).a()

    }
    tempScr=function(i,e){

        t=qq($(
            '<script type="text/template" id="'+i+'">'
        ))

        _e(e,
            function(e){

                t(e)
            })



        return t
    }
    temp=function(a,b){
        return _.template(
            $('#'+a).html(),
            ob(b))}

}

function learn(){
    /*

     Vws in bb don’t contain HTML markup for your app; they contain logic behind presentation of md’s data to user.
     A view’s r() met can be bound to   md’s change() event enabling view to instantly reflect md changes without  page refresh.
     Vws can use el to compose their el’s content   and then insert it into DOM all at once,     which makes for faster rendering because bw performs minimum required number of reflows and repaints.
     to create new el for your view, set any combination of  tagName, id, and k.     doesn’t append it to DOM.
     el: '#footer'  el: $('#footer')
     ops, el, tagName, id and k may be defined as fns,  if you want their vals to be determined at runtime.
     view.$(sel)   ~ $(view.el).find(sel)
     In our TdVw example’s render met,    we see this.$el used to set HTML  of el     and     this.$() used to find subels of class ‘edit’.

     If you need to apply existing bb view to dif DOM el     setElement can be used for this purpose.
     Overriding this.el needs to both change DOM ref  and re-bind evs to new el (and unbind from old).
     setElement will createcached $el reference for you,     moving delegated evs forview from old el to new one.
     bt1 = $('<bt></bt>');   bt2 = $('<bt></bt>');
     Vw = $V({e: {$: fn(e){ $l(vw.el === e.target) }}})
     vw = new Vw({el: bt1})
     vw.setElement(bt2);   // Apply view to bt2 using setElement
     bt1.trigger('click');     bt2.trigger('click'); // returns true
     The “el” property reps markup portion of view that will be rendered;
     to get view to actually render to page, you need to add it as new el or append it to existing el.
     can also provide raw markup to setElement:     view.setElement('<p><a><b>test</b></a></p>'); $l(view.$('a b').h()); // outputs "test"

     r()  passing  toJSON() encoding of atts of md associated with view.
     A common bb convention is to return this at end of r().      This is useful for number of reasons, including:
     Making views easily reusable in other parent views.    Creating list of els without rendering and painting each of them individually,
     only to be drawn once entire list is populated.

     Note usage of return this; at end of render.
     This common pattern enables us to reuse view as sub-view.
     We can also use it to pre-render view prior to rendering.
     What isn’t instantly obvious is that    'this' always refers to cur view object within cb fns.
     any string cb supplied to evs attr  must have corr fn with same name within scope of your view.
     edit cb is invoked when user double-clicks label el within el el,
     updateOnEnter is called for each keypress in el with class ‘edit’,
     close executes when el with class ‘edit’ loses focus.
     Each of these cb fns can use this to refer to TdVw object.
     Note that you can also bind mets yourself using _.bind(this.viewEvent, this),
     which is effectively what val in each event’s key-val pair is doing.
     Below we use _.bind to re-render our view when md changes.
     ( _.bind   =anytime fn is called val of this will be object, also supports  partial applic!!! )

     */


//render does nothing unless u override it
//cannot access model from init
}
//alert
vw.C$=function(s){
    alert('vw.C$')
    this.q.C$(s); return this
}
old=function(){
    //vw.cl= vw.collection
    vw.r=  vw.rr=function(){ return this.render() }

    vw.oC=function(fn){var g=G(arguments)
        this.model.on('change', fn)
        if(g.p){this.r()}
        return this
    }


    Vw=Bb.V.e({
        renderCollection: function(op) {op = op || {}
            op.target = op.target || this.$el;
            op.cl = op.cl ||    op.collection ||  this.collection;
            //- reset views
            if (!op.add) {this.disposeViews()}
            else {this._subviews = []}
            this._renderOptions = op
            //- if there is a collection and a view then render it
            if (op.cl && this.view) {
                op.cl.each(this._renderView, this)}
            return this
        }
    })

     VWob={

     i:'initialize',
     m:'model',
         c:'collection',
     e:'el',
     n:'id',
         x:'id',
         k:'className',
     tn:'tagName',
     t:'tagName',
     a:'attributes',
     ev:'event'

     }

}