AVAIL=function(){$.x('x'); Ap={ M:{},C:{},V:{},T:{} }

    Ap.T.Avail=function(model){
        return $.d('g',400,100).mar(20).A(

            $.h4(model.g('c')).id('avail').C('y','r'),
            $.br(), $.sp('delete').id('deleteAvail'),
            $.sp(' '), $.sp('edit').id('editAvail'),
            $.sp(' '), $.cb().id('selAvail'))
    }
    Ap.M.Avail=M$({urlRoot: '/avail'})
    Ap.C.Avails=C$({model: Ap.M.Avail, url: '/avail'})
    Ap.V.Avail=bb.V.e({

        r:function(){
            this.$el.A( Ap.T.Avail(this.model) )
            return this},
        ev:{
            'click #deleteAvail':'deleteAvail',
            'click #editAvail':'editAvail',
            'blur #avail':'changeAvail'},
        changeAvail:function(){
            this.$el.fi('#avail').at('contenteditable','false')
            newAvail=this.$el.fi('#avail').text()
            this.model.s('c', newAvail)
            this.model.save()},
        deleteAvail:function(){
            this.model.destroy()
            this.$el.rm()
        },

        editAvail:function(){this.$el.fi('#avail').at('contenteditable','true')}

    })
    Ap.V.Avails =bb.V.e({
        el:'#availsDiv',
        I:function(){this.render()},
        R:function(){var t=this
            t.collection.fetch({
                success:function(){
                    t.$el.html('')
                    t.$el.A("<h1>Avails List</h1>")
                    t.collection.each(function(m){
                        t.$el.A( Ap.V.Avail({model:m}).render().el )
                        return t},t)
                }})
        }})
    //  avs=Ap.C.Avails()
    //  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
    $.ip('new avail').id('newAvail').A()

    $.bt('ok',function(){
        Ap.M.Avail({c: $('#newAvail').v()
        }).save()

        v.render()

    }).A()
    $.dI('availsDiv')
    $.ip('new avail').id('newAvail').A()
    $.bt('ok',function(){
        var m= Ap.M.Avail({
            c:qiv('newAvail')
        })
        m.save()
        m.on('destroy', function(){alert('i am the model and i was destroyed')})
        v.render()
    })
    $.dI('availsDiv')


    Ap.T.Avail=function(model){
        return $.d('g',400,100).mar(20).A(
            $.h4(model.g('c')).id('avail').col('y','r'),
            $.br(),
            $.sp('delete').id('deleteAvail'),
            $.sp(' '), $.sp('edit').id('editAvail'),
            $.sp(' '), $.cb().id('selAvail')
        )
    }
    Ap.M.Avail=bb.M.e({urlRoot: '/avail'})
    Ap.C.Avails=C$({model: Ap.M.Avail, url: '/avail'})
    Ap.V.Avail=bb.V.e({

        r:function(){
            this.q(
                Ap.T.Avail(this.model)
            )
            return this
        },
        ev:{
            'click #deleteAvail':'deleteAvail',
            'click #editAvail':'editAvail',
            'blur #avail':'changeAvail'
        },
        changeAvail:function(){
            qq( this.$el.find('#avail') ).cE(0)
            var newAvail=this.$el.find('#avail').text()
            this.model.s('c', newAvail)
            this.model.save()
        },

        deleteAvail:function(){
            this.model.destroy()
            this.$el.remove()},
        editAvail:function(){

            this.$el.find('#avail').cE(1)

        }

    })

    Ap.V.Avails =bb.V.e({el:'#availsDiv',
        i:function(){this.render()},
        r:function(){var t=this
            t.collection.fetch({
                success:function(){
                    t.q.H('')

                    t.q($.h1('Avails List'))

                    t.e(
                        function(m){
                            t.q(
                                Ap.V.Avail({m:m}).r().el )
                            return t},t)

                }})
        }})
    avs=Ap.C.Avails.o()

    avs.on('destroy', function(j){
        alert('i am col and i was destroyed')
        v.trigger('modelDeleted')
    })

    v=Ap.V.Avails.o({cl:avs})


    v.on('modelDeleted', function(){alert('modDel')})

    bb.M.e({
        d:{ prop:3 },
        test:function(){
            $( this.get('prop') ) },
        test2:function(a){ $l('prop: '+this.get('prop'))},
        happy:function(a){
            this.test2(a)
        }
    })


}
DIRTPAGE=function(){$.x()

    var newMsBox, newTopic, newMs,searchBox

    MsM= bb.M.e({  })
    MsC= bb.C.e({   m:'MsM'  })
    MsView= bb.V.e({  })
    MssView= bb.V.e({ })

    $.h1().A(
        $.a(  'Dirtpage', '/wap/dirtpage/' )
    ).A()
    $.dI('content')
    if(wappyPam) {

        newMsBox= $.d().WH('auto').A(
            $.h1('new ms'),
            $.ip().K('form-control').id('newMs'),
            $.bt('ok', function(){var newMs = $('#newMs').v()
                $.P('messages' , {tpc:wappyPam, ms:newMs
                }, function(){ loadResults() })}))
        $('#cont').A($.h1('the '+ wappyPam + ' page'),
            newMsBox, $.dI('res'))
        function loadRes(){$.G('topics/' + wappyPam, function(msgs){
            $('#results').ht($.h5('len: '+msgs.length)  )
            _.e(msgs, function(ms){$('#res').A($.h6( ms.ms ))
            })})}
        loadRes()}
    else {
        newMsBox=$.d().WH('auto').A(
            $.h1('new message'),
            $.ip().K('form-control').id('newTopic'),
            $.ip().K('form-control').id('newMs'),
            $.bt('ok', function(){
                newTopic = $('#newTopic').v()
                newMs = $('#newMs').v()
                $.P('msgs', {topic:newTopic, message:newMs}, function(){})})
        )
        searchBox= $.d().WH('auto').A(
            $.h1('search'),
            $.ip().K('form-control').id('searchInput'),
            $.bt('ok', function(){window.location=   '/wap/dirtpage/'+ $('#searchInput').v()
                searchInput = $('#searchInput').v()
                $.G('topics/' + searchInput, function(msgs){
                    $('#res').ht($.h5('len: '+msgs.length)  )
                    _.e(msgs, function(ms){$('#res').A( $.h6( ms.ms ) )})
                })
            })
        )
        $.dI('res')
        $('#cont').A(newMsBox, searchBox)
        $.eG('msgs',  function(ms){
            $('#res').A($.h2().A(
                    $.a('topic: '+ms.topic,'/wap/dirtpage/'+ms.topic)),
                $.h3( 'ms: '+ms.ms)
            )
        })
    }
}