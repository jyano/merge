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
