_vw=function(o){o=o||{}
    if(F(o.i)){
        o.initialize = o.i
    }

    if(o.q){
        o.el = q
    }
    return o
}


Bb = Backbone
Bb.Model.prototype.j = function(){ return this.toJSON() }
Bb.Collection.prototype.j = function(){ return this.toJSON() }
Bb.M= Bb.Model;Bb.M.x=Bb.M.extend
Bb.C= Bb.Collection;Bb.C.x=Bb.C.extend
Bb.V= Bb.View;Bb.V.x=Bb.V.extend
Bb.M.prototype.idAttribute = '_id'
Blog = Bb.M.x({ defaults:{author:'', title:'', url:'' } })
Blogs= Bb.C.x({ model: Blog,  url: 'http://localhost/api/blogs' })

$MS=function(ms,cHeader,cBody){z()
    var m = $Ms(ms)

    if(S(cHeader)){m.C(cHeader)}
    if(S(cBody)){$.C(cBody)}
    return $
}

$.ipI=function(id, arr){
    var q = $.ip().id(id)
    if(A(arr)){
        _.e(arr, function(qq){
            q.A(qq)
        })
    }
    else if(arr){
        q.A(arr)
    }
    return q
}

$.ulI=function(id, arr){
    var q = $.ul().id(id)
    if(A(arr)){
        _.e(arr, function(qq){
            q.A(qq)
        })
    }
    else if(arr){
        q.A(arr)
    }
    return q
}
GAL=IMAGEGALLERY = function(){z();
    function addEdit(){

    }
    function imgLs(){

    }
    function imgGal(){

        ImgGal = {

            init: function (o) {
                //get list of images rendered at top
                this.imgs = o.imgs; ImgGal.ImgLs.init()
                //to get the addEdit Img on screen .. so that whenever you // load the  (add fresh?) it goes to the add image view
                ImgGal.ImgLs.show(o.imgs)
                ImgGal.AddEditImg.init()
                //init this img view which handles displaying images when we click on them
                ImgGal.AddEditImg.addNewImg()
                ImgGal.ImgVwr.init()
            }

        }



        function showImg(){

            ImgGal.ImgVwr={
                init: function(){
                    this.$main = $('#main') },

                show:function(imgM){
                    this.$main.A(
                        new Img_({
                            model: imgM
                        }).r().$el
                    )}
            }


            Img_ = Bb.v(_vw({
                i: function(){
                    this.$main = $('#main')

                    this.showImgTp = function(img){
                        var i = $.i('img')
                        return $.d().A(i)
                    }
                },

                r: function(){
                    var els = this.$main.A(
                        this.showImgTp(this.model) )
                    this.$el.A(els)
                    return this
                }

            }))


        }







    }



    $Ms('Image Gallery')

    $.a('video', 'https://www.youtube.com/watch?v=VERQEr-bVTs')





}
DIREC=function(){

    $MS('games directory','o','n')


    dirData = [

        {ID:'1', fN:'safsd', lN:'fsad', par:'sfad', p:'sfd', e:'fas'},
        {ID:'2', fN:'safsd', lN:'fsad', par:'sfad', p:'sfd', e:'fas'},
        {ID:'3', fN:'safsd', lN:'fsad', par:'sfad', p:'sfd', e:'fas'},
        {ID:'4', fN:'safsd', lN:'fsad', par:'sfad', p:'', e:'fas'},
        {ID:'5', fN:'safsd', lN:'fsad', par:'sfad', p:'sfd', e:'fas'},
        {ID:'6', fN:'safsd', lN:'fsad', par:'sfad', p:'', e:'fas'},
        {ID:'7', fN:'safsd', lN:'fsad', par:'sfad', p:'sfd', e:'fas'},
        {ID:'8', fN:'safsd', lN:'fsad', par:'sfad', p:'', e:'fas'},
        {ID:'9', fN:'safsd', lN:'fsad', par:'sfad', p:'sfd', e:'fas'},
        {ID:'10', fN:'safsd', lN:'fsad', par:'sfad', p:'sfd', e:'fas'}

    ]



    app = { m:{}, v:{}, r:{},c:{}}
    app.i =  function(){$l('app init'); direc = new app.v.People( dirData )}

    perModelAndView()

    function perModelAndView(){

        app.m.Person =  Bb.Model.extend({
        defaults: {ID:'', fN:'', lN:'', par:'', p:'', e:''},
        initialize: function(){
            var md=this
            _md = md
            $l('new Person model')
            var par = md.get('par')
            console.log('par:'+ par)
            var ty = par? 'student': 'parent'
            $l('ty: ' + ty)
            this.set('type', ty)

        }

    })
        p = new app.m.Person({
            fN:'jason', lN:'yanofski',

            p: '1221-1221',

            e: 'asfd@.com'
        })


        p1 = new app.m.Person({
            fN:'rigo', lN:'ochoa',
            p:'321-1221', e:'aafsdfafd@.com' ,
            par:'afsdfad'

        })



        app.v.Person =  Bb.V.x({
            tagName: 'li',
            attributes: function(){

              var k = 'person ' + this.model.get('type')
              $l('person view k: '+ k)
              return {class: k }
          },
            tp: function(o){
                return $.sp().A(
                    $.sp().K('list-header').A(o.fN, ' ', o.lN),
                    $.dK('details',[
                        'phone: ', o.p, $.br(),
                        'email: ', $.a(o.e)
                    ]) )
            },

            r: function(){
                if(!this.model){$l('Person view has !model')}
                else {
                    var span  =  this.tp(this.model.toJSON())
                    this.A(span) }
                return this
            },


            initialize:function(){  $l('new Person View') }



        })


        v  = new app.v.Person({
            model: p
        })

        v1  = new app.v.Person({
            model: p1
        })


    }




    app.c.People  = Bb.C.x({ model: app.m.Person  }) //,comparator: function(person){return person.get('lN')}

  //  pp = new app.c.People(dirData)




    app.v.People = Bb.V.x({

            el: '#wrapper',

            initialize: function(data){
                $l('new People view')
                this.cl = new app.c.People(data)
                this.r()
            },

            tp: function(o){
                return $.d([
                    $.sp().K('list-header').A(o.fN, ' ', o.lN),
                    $.dK('details',[
                        'phone: ', o.p, $.br(), 'email: ', o.email
                    ])
                ])
            },


            r: function(){
                var vw =this;
                $('#listing').empty()
                vw.cl.each( function(m){
                    var per = new app.m.Person(m)
                    vw.renderPerson(per)
                })
                var q =   vw.tp(vw.cl.toJSON() )
                vw.$el.A( q )
                return this
            },

            renderPerson: function(per){$l('renderPersn')
                var newper =  new app.v.Person(per)
                $('#listing').A( newper.r().el )
            }




    })





    $.dI('wrapper',[
        $.dK('tools',[
            'search:', $.br(),
            $.ipI('searchBox'),
            $.br(2),
            'Filter:',
            $.dI('filter'),
            $.dI('count')
        ]),

        $.ulI('listing', [

        ])


    ])


   // $.button('app.i()', function(){
      //  app.i()
  //  })

    $.button('afsd', function(){
        z()

        v.r().A()

        v1.r().A()
    })
}