// First we will define a couple of views that need to save their data to a model when a certain UI action occurs:

var NewToBuyView = Backbone.Marionette.ItemView.extend({template: App.template("#new-toBuy-template"), tagName: "form", className: "new-item-toBuy",
    model: new ToBuyModel(),
    ui: { dataFields: ".app-toBuy-field",  saveButton: ".app-save-new-toBuy" },
    events: { "click @ui.saveButton": "save" },
    modelEvents: {sync: "postAndClearModel" },
    save: function() {var vw = this;
        vw.ui.dataFields.ea(function() {
            self.md.s($(this).at("name"), $el.v())
        })
        vw.md.sv()
    },

    postAndClearModel: function(){var vw=this
        App.vent.tr("toBuy:created", vw.md.j())
        vw.md.clear().set(vw.md.defaults)
        vw.r()
    }
})

var ToBuyView = Backbone.Marionette.ItemView.extend({template: App.template("#toBuy-template"), tagName: "li", className: "item-toBuy",

    ui: {dataFields: ".app-toBuy-field" },
    events: {"change @ui.dataFields": "save"},
    modelEvents: {sync: "render"},
    save: function(){var vw= this
        vw.ui.dataFields.ea(function(){ var q = $(this); vw.model.set(q.at('n'), q.v()) })
        this.model.save()
    }
})



//These two views are very similar, and their saving functionality is actually identical. This save functionality is an ideal candidate for extraction into a simple behavior. We can define such a behavior like so:
var SaveBehavior = Backbone.Marionette.Behavior.extend({
    defaults: {
        fieldSelector: ":input"
    },
    onSave: function() {
        var bh= this
        this.$(this.options.fieldSelector).ea(function(){var q = $(this)
            bh.view.model.set(q.at("n"), q.v())
        })
        this.view.model.sv()
    }
})
