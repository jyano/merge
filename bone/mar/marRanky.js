


RANKY=function(tp){$.fm()
    inputBox=collection =$.inputBox({
        boxTitle:'new topic',
        url:'/tpc',
        btT:'post',
        func:function(){},
        inputType:'textArea'
    })  // ipt('new topic', 'post', '/tpc') ,



    s1.A($.h1('topics!'), inputBox , $.h4('recent: '))
    $.eG('tpc', function(tp){
        s1.A($.bt(_.tp.t, function(){
            ranky(tp)
        }), $.br(2))})

//ranky takes a topic model from the database
//(which includes all its items already)
//this is messed up

    ranky=function(topic){//var collection
        s2.E()
        s2.A(
            $.h1('topic page: '+ topic.t),
            $.bt('live chat', function(){ priv(topic.t) }),
            //ipt('new item', 'post','/itm', {t: t.t}, function(){qG('/tpc1', {t: t.t},function(t){ranky(t)})}, '-'),
            $.ipB({

                boxTitle:'new item',
                url:'/itm',
                btT:'post',
                defaults:{t: topic.t},
                func:function(){$.G('tpc1', {t: topic.t}, function(t){ranky(t)})},
                inputType:'text'
            }),
            collection=$.d()
        )


        itemCollection=new ItemCollection()

        _.e(topic.i, function(i){
            if(O(i)){
                var itemModel=new ItemModel({  topic:topic.t,  text: i.t,   score: i.s   })
                itemCollection.add( itemModel )
                // var itemView=new ItemView({model: itemModel}).render().el
                // collection(itemView)
                // itemCollection.render()
            }
        })

        itemsView = new ItemsView({  collection:itemCollection  })

        itemsView.render()
    }

    ItemMd=Bb.M.x({i:function(){}})
    ItemCl=Bb.C.x({
        model:ItemModel,
        comparator:'score',
        render:function(){
            collection.E()
            _.e(this.models, function(itemModel){
                    var itemView=new ItemView({model: itemModel}).render()
                    collection(itemView.el)
                }
            )
        }
    })


    ItemsView=Bb.V.x({
        initialize:function(){var self=this
            this.collection.on('change', function(){
                alert(3)
                this.sort()
                self.render()
            })
        },
        render:function(){collection().E()
            this.collection.each(function(model){
                var itemView=new ItemView({model: model}).render()
                collection(itemView.el)
            })
        }
    })
    ItemView=Bb.V.x({
        initialize:function(){this.listenTo(this.model, 'change', function(){this.render()})},
        render:function(){
            var self=this,
                topic=this.model.get('topic'),
                score=this.model.get('score'),
                text=this.model.get('text')

            this.el.E(
                $.h1(text),
                $.h4('score: '+ String(score)),
                $.bt('up',  function(){
                    $.P('vte',  {t:topic, i:text, dr:'u'}, function(){
                        self.model.set('score', self.model.get('score')+1)
                    })
                }),
                $.bt('down',function(){
                    $.P('vte', {t: topic ,  i: text,   dr:'d'}, function(){
                            self.model.set('score', self.model.get('score')-1)}
                        //    function(){ranky(topic)}
                    )}))
            return this}})

}

