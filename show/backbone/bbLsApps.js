
LSTD=function(){$.x();$Ms('BBlS')
    Td = Bb.M.x({

        df: function(){
            return {
                title: "empty td...",
                order: Tds.nextOrder(),
                done: false
            }
        },
        initialize: function() {
            if(!this.g("title")){
                this.s({title: this.df().title})}},
        toggle: function(){this.sv({done: !this.g("done")})}
    })
    TdList = Bb.C.x({
        model: Todo,
        localStorage: new Bb.LocalStorage("td-bb"),
        done: function(){return this.fl(function(td){return td.g('done')})},
        remaining: function(){return this.wo.apply(this, this.done())},

        nextOrder: function() {
            if (!_.z(this)) {return 1}
            return this.la().g('order') + 1
        },

        comparator: function(td){return td.g('order')}
    })
    Tds = new TdList
    TdVw = Bb.V.x({
        tagName:  "li", //template: _.template($('#item-template').html()),
        events: {"click .toggle"   : "toggleDone",
            "dblclick .view"  : "edit", "click a.destroy" : "clear",
            "keypress .edit"  : "updateOnEnter", "blur .edit"      : "close"},
        initialize: function() {var vw=this,md=vw.model
            vw.l2(md, 'change', vw.r)
            vw.l2(md, 'destroy', vw.rm)},
        r: function(){var vw=this, md=vw.model,q=vw.$el
            q.html(vw.template(md.J()))


            q.tK('done', md.g('done')  ) //

            vw.ip = vw.$('.edit')
            return vw
        },
        toggleDone: function(){this.model.toggle()},
        edit: function(){this.$el.k("editing");
            this.ip.fc()
        },
        close: function() {var vw=this,md=vw.model
            var v  = vw.ip.v();
            if(!v){ vw.clear() }
            else {md.sv({title: v}); vw.$el.rK("editing") }
        },
        updateOnEnter: function(e) {if (e.keyCode == 13) {this.close()}},
        clear: function(){this.ds()}

    })
    AppVw = Bb.V.x({
        el: $("#todoapp"),
        // statsTemplate: _.template($('#stats-template').html()), // Our template for the line of statistics at the bottom of the app.
        events: {"keypress #new-todo":  "createOnEnter", "click #clear-completed": "clearCompleted", "click #toggle-all": "toggleAllComplete" },

        initialize: function() {var vw=this
            vw.ip = vw.$("#new-todo");
            vw.allCb = vw.$("#toggle-all")[0];
            vw.l2(Tds, 'add', vw.addOne);
            vw.l2(Tds, 'reset', vw.addAll);
            vw.l2(Tds, 'all', vw.render)
            vw.footer = vw.$('footer');
            vw.main = $('#main');
            Tds.fe()
        },

        render: function(){
            var vw=this,
                done = _.z(Tds.done()),
                remaining = _.z(Tds.remaining())
            if (_.z(Tds)){
                vw.main.sh();
                vw.footer.sh()
                vw.footer.html(vw.statsTemplate({done: done, remaining: remaining}))
            }

            else { vw.main.hd(); vw.footer.hd()}

            if(!this.allCb){$l('!this.allCb')}
            else{this.allCb.checked=!remaining}
        },

        addOne: function(td){
            var vw = new TdVw({model: td})
            this.$("#todo-list").A(vw.r().el)
        },
        addAll: function() { Tds.each(this.addOne, this) },
        createOnEnter: function(e) {
            if (e.keyCode != 13) {return}
            if (!this.ip.v()) {return};
            Tds.cr({title: this.ip.v()});
            this.ip.v('')
        },
        clearCompleted: function() {_.iv(Tds.done(), 'destroy');return false;},
        toggleAllComplete: function () {
            Tds.each(function (td){td.sv({'done': this.allCb.checked}) })
        }

    })
    App = new AppVw


}



BABY=function(){z()


    m = new Bb.M({})

    $d(m)
}

MINLS=function(){z()  //Minimal Bb.localStorage example


    //THE MODEL AND THE COLLECTION
    //In order to use Bb.localStorage to save a model
    // we also need a collection.
    // The `localStorage` property of the collection
    // needs to be set to a new Bb.LocalStorage object
    // with an identifier for the collection
    // that is used when reading or writing the model values to LocalStorage.


    //The defaults function of the model
    // returns an object with a content property
    // that makes it easy to identify when the model was added to the collection
    // and if it's new or has been fetched from local storage.

    //ADDING AND SAVING NOTE MODELS
    //Bb collections have a fetch method that retrieves models from the server or,
    // in this case, local storage.
    //Before calling save on the model we need to add it to the collection,
    // otherwise Bb would attempt to use an Http request to store it on a server.


    Note = Bb.M.x({
        defaults: function(){
            return {
                content: "Note created on " + new Date().toISOString()
            }
        }
    })

    NoteCollection = Bb.C.x({
        model: Note,
        localStorage: new Bb.LocalStorage("choose-some-identifier")
    })

    myNotes = new NoteCollection()
    myNotes.fetch();
    note1 = new Note();
    myNotes.add(note1); note1.sv()

    myNotes.models.forEach(function(md){
        $l("Md in cl: "+md.g("content"))
    })



}

LS1=function(){z();$Ms('LS1')


    bksArr=[
        {title:'yaba daba', author:'wanda'},
        {title:'clawface', author:'deez nuts'},
        {title:'under the knee', author:'p .qu rstly'}
    ]
    Bks = Bb.C.x({
        model:Bb.M,
        localStorage: new Bb.LocalStorage('bks')
    })
    bks = new Bks(bksArr)

    Dude= Bb.M

    d = new Dude()
    d1 = Dude.c
    //bks.save()



}