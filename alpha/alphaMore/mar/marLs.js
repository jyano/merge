modFn=function (mu, App, Bb, Ma, $, _){

    mu.GenMd = Bb.M.x({defaults: {title: ''}})

    mu.GenCl = Bb.C.x({

        model: mu.GenMd,
        localStorage: new Bb.LocalStorage("LibGenCl")

    })

    mu.AutMd = Bb.M.x({defaults: {firstName: '', lastName: ''}})
    mu.AutCl = Bb.C.x({
        /* set the model used in this collection */
        model: mu.AutMd, /* define the localStorage container for his collection */
        localStorage: new Bb.LocalStorage("LibAutCl")
    })
    mu.BkMd = Bb.M.x({
        defaults: {
            id: null, title: '',
            autFirst: '', autLast: '', gen: ''
        }
    })
    mu.BkCl = Bb.C.x({
        /* set the model used in this collection */
        model: mu.BkMd,
        localStorage: new Bb.LocalStorage("LibCl")
    })

    mu.LibVw = Ma.LV.x({

        bkCl: null, autCl: null, genCl: null,
        template: '#layout-template',
        events: {
            'click #btnSave': 'onSaveClicked', 'click #btnClear': 'onClearClicked',
            'click #btnClearCache': 'onClearCacheClicked',
            'change #selectGenRegion select': 'onGenSelected',
            'change #selectAutRegion select': 'onAutSelected'
        },
        ui: {
            inputTitle: '#txtTitle', // title input field
            inputAutFirst: '#txtAutFirst', // aut first name input field
            inputAutLast: '#txtAutLast', // aut last name input field
            inputGen: '#txtGen', // gen input field
            selectGen: '#selectGen', // gen select list
            selectAut: '#selectAut' // aut select list
        }, /* regions into which other views will be rendered */
        regions: {autRegion: '#selectAutRegion', genRegion: '#selectGenRegion', outputRegion: '#outputRegion' },

        onSaveClicked: function () {
            this.addBk()
        },
        onClearClicked: function () {
            this.clearForm()
        },
        onClearCacheClicked: function () {  // this will empty the localstorage cache for this app */

            window.localStorage.clear();
            this.render()
        },
        onGenSelected: function () {
            var selectedGen = $('#selectGen').val();
            /* if the selected gen value is blank, do nothing */
            if (selectedGen === '') return;
            /* update the gen input element with the value pulled from the select element */
            this.ui.inputGen.val(selectedGen)
        },
        onAutSelected: function () {/* set the values of the first and last name */
            var autFirst = $('#selectAut').val().split(', ')[1];
            var autLast = $('#selectAut').val().split(', ')[0];
            /* if the value is blank, do nothing */
            if (autFirst === '' && autLast === '') return;
            /* update the appropriate input elements with the values pulled from the select element */
            this.ui.inputAutFirst.val(autFirst);
            this.ui.inputAutLast.val(autLast)
        },
        addBk: function () {/* get values from the form elements */
            var newTitle = this.ui.inputTitle.val(), newAutFirst = this.ui.inputAutFirst.val(),
                newAutLast = this.ui.inputAutLast.val(), newGen = this.ui.inputGen.val();
            /* add a new model to the bk collection.             Automatically adds and instance of the              module.BkMd type because that is the     model associated with the BkCl */
            this.bkCl.add({
                id: new Date().getTime(),
                title: newTitle,
                autFirst: newAutFirst,
                autLast: newAutLast,
                gen: newGen
            })
            /* iterate through the collection and save each model.
             necessary to do it this way because of how
             Bb.localStorage works. */
            this.bkCl.each(function (oBk) {
                oBk.save()
            })
            /* clear the form elements */
            this.clearForm()
            /* add the aut to the list of auts */
            this.addAut(newAutFirst, newAutLast)
            /* add the gen to the list of gens */
            this.addGen(newGen)
        },
        addGen: function (sGen) {/* set a state variable */
            var exists = false;
            /* iterate through the collection to see if the gen   we are attempting to add already exists */
            this.genCl.each(function (oGen) {
                if (oGen.get('title') === sGen) exists = true
            });
            /* if the gen already exists, exit and do nothing */
            if (exists) return
            /* add the new gen to the collection. Defaults to an  instance of module.GenMd, because that is what  is associated with the module.GenCl */
            this.genCl.add({title: sGen})
            /* iterate through the gens in the collection and save each one */
            this.genCl.each(function (oGen) {
                oGen.save()
            })
        },
        addAut: function (sAuthFirst, sAuthLast) {/* set a state variable */
            var exists = false;
            /* iterate through the collection to see if the aut              we are attempting to add already exists */
            this.autCl.each(function (oAut) {
                if (oAut.get('firstName') === sAuthFirst && oAut.get('lastName') === sAuthLast) exists = true
            })
            /* if the aut already exists, exit and do nothing */
            if (exists) return
            /* add the new aut to the collection. Defaults to an   instance of module.AutMd, because that is what  is associated with the module.AutCl */
            this.autCl.add({firstName: sAuthFirst, lastName: sAuthLast})
            /* iterate through the auts in the collection and save each one */
            this.autCl.each(function (oAut) {
                oAut.save()
            })
        },
        clearForm: function () {
            this.ui.inputTitle.val('');
            this.ui.inputAutFirst.val('');
            this.ui.inputAutLast.val('');
            this.ui.inputGen.val('')
        },

        onRender: function () {
            var capturedThis = this /* save a local reference to the view, for use in  model and collection callbacks */
            this.bkCl = new mu.BkCl()  /* create a new instance of the bk collection */
            this.bkCl.fetch().fail(function () { /* something went wrong */
                $l('failed to load bk collection')
            }).done(function () {
                /* when loaded, create a new collectionview using it */
                var bkCV = new mu.BkCV({collection: capturedThis.bkCl});
                /* render the collectionview in the appropriate region */
                capturedThis.outputRegion.show(bkCV)
            }) /* load the bk collection from local storage */
            this.genCl = new mu.GenCl()  /* create a new instance of the gen collection */
            this.genCl.fetch().fail(function () { /* something went wrong */
                $l('failed to load gen collection')
            }).done(function () { /* loaded successfully */
                /* if the gen collection is empty, add an initial element to use as a label */
                if (capturedThis.genCl.length === 0) {
                    capturedThis.genCl.add({title: ''})
                }
                /* Create a new collectionview using the genCl */
                var genCV = new mu.GenCV({collection: capturedThis.genCl});
                /* render the collectionview in the appropriate region */
                capturedThis.genRegion.show(genCV)
            }) /* load the collection of gens from local storage */
            this.autCl = new mu.AutCl();           /* create a new instance of the aut collection */
            this.autCl.fetch().fail(function () { /* something went wrong */
                $l('failed to load aut collection')
            }).done(function () { /* loaded succesfully */
                /* if the gen collection is empty, add an initial element to use as a label */
                if (capturedThis.autCl.length === 0) {
                    capturedThis.autCl.add({firstName: '', lastName: ''})
                }
                /* when the collection is loaded, create a new collectionview using it */
                var autCV = new mu.AutCV({collection: capturedThis.autCl});
                /* render the collectionview in the appropriate region */
                capturedThis.autRegion.show(autCV)
            }) /* load the collection of auts from local storage */
        }


    })
    mu.BkIVw = Ma.IV.x({
        tagName: 'li', template: '#bk-template',
        events: {'click .delete': 'onDeleteClicked'},
        /* when the delete button is clicked, destroy this model
         this removes the model from the parent collection */
        onDeleteClicked: function () {
            this.model.destroy()
        }
    })
    mu.BkClVw = Ma.CV.x({
        tagName: 'ul',
        childVw: mu.BkIVw, id: 'bkList',
        /* listen for changes in the collection or the models therein */
        modelEvents: {'change': 'onMdChanged'},
        /* when the collection or one of the models therein broadcasts a change event,
         re-render this view. In this example, this is called when a bk is added
         or removed from the collection. */
        onMdChanged: function () {
            this.render()
        }
    })
    mu.GenIVw = Ma.IV.x({
        template: '#gen-template', tagName: 'option',
        /* add attributes to this element. Setting a return value as is done
         here allows for attributes to be set 'on the fly'; in this instance
         each element created will have a unique value derived from the model associated with this view. */
        attributes: function () {
            return {value: this.model.g('title')}
        }
    })
    mu.GenClVw = Ma.CV.x({
        tagName: 'select',
        childVw: mu.GenIVw, id: 'selectGen'
    })
    mu.AutIVw = Ma.IV.x({
        template: '#aut-template', tagName: 'option',
        /* add attributes to this element. Setting a return value as is done here allows for attributes to be set 'on the fly'; in this instance
         each element created will have a unique value derived from the lastName and firstName attributes of the model associated with this view. */
        attributes: function () {
            var authName = this.model.g('lastName') + ', ' + this.model.g('firstName')
            return {value: authName}
        }
    })
    mu.AutClVw = Ma.CV.x({
        tagName: 'select',
        childVw: mu.AutIVw, id: 'selectAut'
    })
    mu.addInitializer(function () {

        /* add a method which will fire on the initialization
         of this application. In this case, render
         the main view in the region which was defined
         up at the top of this file. */
        app.libraryRegion.show(new mu.LibVw())
    })
}
MLS=function(){
    $CSS({

    '#libraryApp': {width: 600, margin: '0 auto'},
    h1: {
        float: 'left',
        'text-align': 'center',
        width: 600,
        margin: '0 auto 10px auto',
        'border-bottom': '1px solid #cdcdcd'
    },
    '#inputRegion,#outputRegion': {float: 'left', width: '100%', margin: '0 0 10px 0'},
    '#inputRegion > div': {float: 'left', clear: 'both'},
    '#inputRegion label': {float: 'left', width: 120},
    '#inputRegion input': {float: 'left', width: 200},
    '#inputRegion .aut-row input': {width: 8},
    '#inputRegion .selectContainer': {float: 'left'},
    '#inputRegion select': {float: 'left', 'margin-left': 20, width: 200},
    '.buttons': {float: 'left', clear: 'both'},
    '#outputRegion ul': {
        'list-style': 'none',
        margin: '0px',
        padding: '0px',
        float: 'left',
        width: '100%',
        'border-top': '1px solid #ccc'
    },
    '#outputRegion li': {
        position: 'relative',
        float: 'left',
        width: '100%',
        height: 60,
        'border-bottom': '1px solid #ccc'
    },
    '#outputRegion li span': {float: 'left', width: '80%'},
    '#outputRegion li button': {position: 'absolute', right: '0px', top: '5px'}

}); app = new Ma.A(); app.addRegions({ libraryRegion: '#libraryApp' })
    app.module('Lib', modFn)
    app.start()

//<div id="libraryApp"></div>

//<script type="text/template" id="layout-template">

//<h1>Lib App Using LocalStorage</h1>

//<div id="inputRegion">

    //<div>
    // <label>Title</label>
    //      <input id="txtTitle" type="text"/>
    // </div>


    // /<div class="aut-row">
    //<label>Aut (last, first)</label>
    // <input id="txtAutLast" type="text"/>
    // <input id="txtAutFirst" type="text"/>
    //<div id="selectAutRegion" class="selectContainer"></div>
    //</div>


    //<div>
    //<label>Gen</label>
    // <input id="txtGen" type="text"/>
    //<div id="selectGenRegion" class="selectContainer"></div>
    //</div>


    //<p class="buttons">
    //<button id="btnSave">Save</button>
    //<button id="btnClear">Clear</button>
    //<button id="btnClearCache">Clear LocalStorage</button>
    //</p>

//</div>


//<div id="outputRegion"></div>


//<script type="text/template" id="gen-template"><%- title %>
//<script type="text/template" id="aut-template"><%- lastName %>, <%- firstName %>

}