tp={
    ix: function(vw){
        var recs=this.recs//, o=vw.model.attributes

        return $.sp().A(
            $.h2('There are '+ vw.count() +' recs'),
            $.dK('recs')
        )
    }
}




Roll={}
Roll.Rec= Bb.M.x({
})

Roll.Recs= Bb.C.x({

    localStorage: new Store('recs')

})


Roll.Ix = Bb.V.x({
    tp: 'ix',
    initialize:function(){
        $l('ix')
        this.recs= new Roll.Recs()
        this.recs.on('all', this.render, this)
        this.recs.fetch()
        this.recs.on('all', this.r, this)
    },
    r: function(){
        this.$el.html(  tp[ this.tp ](this) )
        var form = new Roll.Ix.Form()
        this.$('.recs').A( form.r().el )
        return this
    },
    count:function(){
        return _.z(this.recs)
    }
})



Roll.Ix.Form= Bb.V.x({tagName:'form',

    initialize: function(){
        $l('Ix.Form')
        this.r()
    },

    r:function(){
        this.$el.A($.h1('afssafsafsfsdfsd'))
        return this
    }
})


Roll.Rt= Bb.R.x({

    initialize: function(o){
        $l('rt')
        this.q = o.q
    },

    routes: {'':'_'},

    _: function(){
        $l('_')

        var vw=  new Roll.Ix()
        this.q.E().A(vw.r().el)

    }
})


Roll.boot=function(ctDv){

    new Roll.Rt({

        q: ctDv

    })

    Bb.h.start()
}


ROLL=function(){z(); $Ms('BFROLL')

    $l('------------------- ROLL ----------------------')

    ctDv = $.dK('ct', [

        $.h1('Recs'),
        $.p().A($.a('intro')),
        $.dI('roll',[

        ])

    ])
    Roll.boot( ctDv )

}

