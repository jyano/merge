
//http://www.knockmeout.net/2011/08/all-of-knockoutjscom-live-samples-in.html

//bT,bV and computed
COMP=function(){$.z().h1('KNOCKOUT')

    $.d([
        $.p('F: ', $.b().bT( 'f')),
        $.p('L: ', $.b().bT( 'l') ),
        $.p('F: ', $.ip().bV( 'f') ),
        $.p('L: ', $.ip().bV( 'l') ).id('l'),
        $.p('L: ', $.b().bT('fL') ),
        $.bt('caps').b$('capL')
    ]).A()


    ok({
        f:ko.o('j'),
        l:ko.o('y'),
        fL : ko.c(function(){
            return this.f()+' '+this.l()}),
        capL :function(){this.l(S.tU(this.l()))}
    })



}


KOCM=function(){$.z().h4('First instance, without parameters')
    $.d().bCm('message-editor')
    $.h4('Second instance, passing parameters')
    $.dCm(
        'component: {  name: "message-editor",  params: { initialText: "Hello, world!" }}'
    )
    ko.components.register('message-editor', {
        viewModel: function(params) {
            this.text = ko.o(params && params.initialText || '')
        },
        template: 'Message: <input data-bind="value: text" /> (length: <span data-bind="text: text().length"></span>)'
    })
    ko.applyBindings()

}
KOCM=function(){$.z().h4('First instance, without parameters')
    $.d().bCm('message-editor')
    $.h4('Second instance, passing parameters')
    $.dCm(
        'component: {  name: "message-editor",  params: { initialText: "Hello, world!" }}'
    )
    ko.components.register('message-editor', {
        viewModel: function(params) {
            this.text = ko.o(params && params.initialText || '')
        },
        template: 'Message: <input data-bind="value: text" /> (length: <span data-bind="text: text().length"></span>)'
    })
    ko.applyBindings()

}
CMLDR=function(){$.x()

    VM=function(p) {this.somePop = p.smKey}
    VM.prototype.doSmg = function() {}

    ko.r('my-cm', VM)
    ko.r('my-cm', {
        m: {createVM: function(p, cmInf) {return new VM(p)}},
        t: '#d'
    })
    ko.r('message-editor', {
        m: function(p) {this.t = ko.o(p && p.initialText||'')},
        t: $.d(['Ms:',$.ipV('t'), '(len:',$.spT('t().length'),')'])
    })

    $.tp("my-special-list-template").A(
        $.h3('Here is a special list')
    )

    $.ulE("{ data: myItems, as: 'myItem' }").A(
        $.li().A($.h4('Here is another one of my special items'), $("<!-- ko template: { nodes: $componentTemplateNodes, data: myItem } --><!-- /ko -->")))

    $.tg=function(a){return $('<' + a +'>')}

    $.tg('my-special-list').at('params', 'items: PEEP')
        .A('The person', $.em().b('t','name'),
        'is', $.em().b('t','age'), 'years old.')

    ko.r('my-special-list', {
        t: { el: 'my-special-list-template' },
        m: function(p) {this.myItems = p.items}
    })

    ko.b({PEEP: $oa([{n:'Lew', a: 56 }, {n: 'Atha', a: 34 }])})
    ko.cm.gN= ko.cm.getComponentNameForNode = function(nd) {
        tgNLower = nd.tagName && nd.tagName.toLowerCase()
        return  ko.cm.iR(tgNLower)?   tgNLower :
            tgNLower === "special-el"? "MyCm":
                null

        // If the el's name matches a reg-ed cm, use that cmt
        // For the el <special-el>, use the component
        // "MySpecialComponent" (whether or not it was preregistered)
        // Treat anything else as not representing a component
    }



    MyCmVM=function(pm) {curObsrvInst = pm.$raw.myExpr()}
    // Now curObsrvInst is either observable1 or obsrv2// and you would read its value with "curObsrvInst()"

    // 'params' is an object whose k/v pairs are the pams
    // passed from the cm bd or cust el.

    // - 'cmtInf.el'
    // is the el the component is being//
    //  injected into. When createVM is called, the template has//
    //  already been injected into this el, but isn't yet bound.
    // - 'componentInfo.templateNodes'
    // is an array containing any DOM
    //   nodes that have been supplied to the component. See below.
    // Return the desired view model instance, e.g.:
}
CMNEWS=function(){$.x('y','news feed')
    //http://jsfiddle.net/rniemeyer/fssXE/
    $.qAP('news-feed', 'vm', 'VM')
    $.qAP('news-feed', 'vm', 'VM2')
    $.h2('News Feed')
    $.dT('vm.ms')
    $('<news-feed params="vm: feed"></news-feed>').A()
    $('<news-feed>').at('params', "vm: feed2").A()
    ko.r('news-feed', {m: function (p) { this.vm = p.vm } })
    ko.r('news-feed', {m: function (p) {this.vm = p.vm},
        t: $.d([$.h2('News! Feed'), $.dT('vm.m')])[0]})
    ko.r("news-feed", {m: function (p) { this.vm = p.vm },
        t: $.sp().A($.h2('Nws Fd'), $.d().b('t', 'vm.m'))})
    Feed=function(){this.ms=ko.o('pf!')}
    VM = function () {this.ms = ko.o("Hi");
        this.feed = new Feed();
        this.feed2 = new Feed();
        this.feed.ms("Ms1");
        this.feed2.ms("Ms2");
    }
    Ms = function (m) { return {m:ko.o(m||'') }}
    ok({m :ko.o('!'), VM : Ms('m1'), VM2 : Ms('m2'), VM3: {m:ko.o('!')}})
    ok(new VM())
    ok({ms : ko.o("!"), VM: {ms: ko.o("!")}, VM2: {ms: ko.o("!")}})

    vm.VM.ms("1"); vm.VM2.ms("2")
}
WEBCM=function(){
    //For example, instead of writing this:
    $.d().b('cmN', '{ name: "flight-deals", params: { from: "lhr", to: "sfo" } }')
    //  <div data-bind='component: { name: "flight-deals", params: { from: "lhr", to: "sfo" } }'></div>
//… you can write:

    $('<flight-deals>')
    //   < params='from: "lhr", to: "sfo"'></flight-deals>

}



TPLIST=function(){$.x()
    Meals = [
        { m: "sand", p: 0 },
        { m: "lobst", p: 34.95 },
        { m: "zebra", p: 290 }
    ]


    $.h2('Your rsv').A( $.spT('seats().length') )
    $.h3('Cost:').bVs('cost()>0').A( $.spT('cost().toFixed(2)') )


    $.t([
        $.tH([ $.tr(['Pass name','Meal','charge']) ]),
        $.tB().bTp("{n:'rsvTp', foreach: seats}") //?

    ])

    $.bt('Rsv again').b({ $:'A', en:'seats().length < 5' })

    $('<script type="text/x-jquery-tmpl" id="rsvTp" >').A(
        $.tr([
            $.td([$.ipV('n')]),
            $.td([$.sl().b({o:'Meals', ot:'meal'})]),
            $.td([ $.a$('del', 'rm')  ])
        ])
    )

    seatRsv = function(n) {
        this.n = n
        this.Meals = Meals;
        this.meal = ko.o(Meals[0]);
        this.rm = function() {vm.seats.remove(this) }
        this.fmtPrice = ko.do(function(){
            var price = this.meal().p
            return price ? "$" + price.toFixed(2) : "None";
        }, this)
    }


    vm = {
        seats: ko.oa([ new Rsv("St"), new Rsv("Br") ]),
        A: function() { this.seats.push(new Rsv())} }


    vm.cost = ko.do(function() {
        var tot = 0;
        for (var i = 0; i < this.seats().length; i++)
            tot += this.seats()[i].meal().price;
        return tot
    }, vm)



    ok(vm)

}
//sort, remove
BTRLST1=function(){$.x('o')

    $.f().b({sb:'A'}).A('Add item:',
        $.ip().b({v:'tA', vU:'afterkeydown'}),
        $.sb('Add').b('en', 'tA().length > 0')
    )

    $.p('Your values:')

    $.sl().mlt().b({ o:'all', so:'sl' })

    $.d([
        $.bt('Rem').b({$:'xSl', en:'sl().length > 0'}),
        $.bt('Srt').b({$:'srt', en:'all().length > 1'})
    ])

    Lst = function () {
        this.tA = $o('')
        this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30] )
        this.sl = $oa(['Hm'])
        this.A = function () {
            if (this.tA()!=''&& this.all.indexOf(this.tA())<0){
                this.all.push(this.tA())
                this.tA('')
            }
        }

        this.xSl = function () {
            this.all.removeAll(this.sl())
            this.sl([])
        }
        this.srt = function() { this.all.sort() }
    }
    $b(new Lst())
}
BTRLST=function(){$.x('o')

    f= $.fSb('A',[ 'Add:',
        $.ipV('tA'),
        $.sb('Add').bEn('tA().length>0')
    ])

    $.p('Your values:')
    $.sl().mlt().b({
        o:'all',
        so:'sl'
    })

    $.d([

        $.bt('Rem').b({

            $:'xSl',

            en:'sl().length > 0'

        }),


        $.bt('Srt').b({$:'srt', en:'all().length > 1'})

    ])


    Lst = function(){

        this.tA = kO('')

        this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)

        this.sl = kA('Hm')

        this.A = function () {
            if (this.tA() &&
                this.all.indexOf(this.tA())<0
            ){

                this.all.push(this.tA())
                this.tA('')}
        }

        this.xSl = function(){

            this.all.removeAll(this.sl())

            this.sl([])

        }


        this.srt = function() { this.all.sort() }
    }

    ok( new Lst() )

}
//add, conditional el
KOCL=function(){$.x('x').h2('Peep')

    Per = function(n, ch) {var per=this
        per.n = n
        per.ch = ko.oa(ch)
        per.A = function(){
            per.ch.push('new ch')
        }
    }


    peep= [
        new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
        new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
        new Per("Charles", ["Cayenne", "Cleopatra"])
    ]


    $.uE('peep',[


        $.li().A(

            $.d([

                $.spT('n'), 'has',
                $.spT('ch().length'),

                'children &nbsp;',
                $.a$('New','A')

            ]),

            $.ulE('ch',[
                $.li([

                    $.spT(), $.spVs( '$root.showDT').A(
                        ' (child rendered at ', $.spT('$Dt().getSeconds()'),')'

                    )])])

        )

    ])

    $.cbC('showDT').a2Lb('Show time:')

    //anonymous vm

    OK({

        peep: peep,

        showDT: kO()

    })




}
bbLocStorPLUG=function(){
    (function (root, factory) {
        if (typeof exports === 'object' && typeof require === 'function') {
            module.exports = factory(require("backbone"));
        } else if (typeof define === "function" && define.amd) {
            // AMD. Register as an anonymous module.
            define(["backbone"], function(bb) {
                // Use global variables if the locals are undefined.
                return factory(bb || root.bb);
            });
        } else {
            factory(bb);
        }
    }(this, function(bb) {
// A simple module to replace `bb.sync` with *localStorage*-based
// persistence. Models are given GUIDS, and saved into a JSON object. Simple
// as that.

// Generate four random hex digits.
        function S4() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };

// Generate a pseudo-GUID by concatenating random hexadecimal.
        function guid() {
            return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
        };

        function isObject(item) {
            return item === Object(item);
        }

        function contains(array, item) {
            var i = array.length;
            while (i--) if (array[i] === item) return true;
            return false;
        }

        function extend(obj, props) {
            for (var key in props) obj[key] = props[key]
            return obj;
        }

        function result(object, property) {
            if (object == null) return void 0;
            var value = object[property];
            return (typeof value === 'function') ? object[property]() : value;
        }

// Our Store is represented by a single JS object in *localStorage*. Create it
// with a meaningful name, like the name you'd give a table.
// window.Store is deprectated, use bb.LocalStorage instead
        bb.LocalStorage = window.Store = function(name, serializer) {
            if( !this.localStorage ) {
                throw "bb.localStorage: Environment does not support localStorage."
            }
            this.name = name;
            this.serializer = serializer || {
                serialize: function(item) {
                    return isObject(item) ? JSON.stringify(item) : item;
                },
                // fix for "illegal access" error on Android when JSON.parse is passed null
                deserialize: function (data) {
                    return data && JSON.parse(data);
                }
            };
            var store = this.localStorage().getItem(this.name);
            this.records = (store && store.split(",")) || [];
        };

        extend(bb.LocalStorage.prototype, {

            // Save the current state of the **Store** to *localStorage*.
            save: function() {
                this.localStorage().setItem(this.name, this.records.join(","));
            },

            // Add a model, giving it a (hopefully)-unique GUID, if it doesn't already
            // have an id of it's own.
            create: function(model) {

                if (!model.id && model.id !== 0) {
                    model.id = guid()
                    model.set(model.idAttribute, model.id)

                }

                this.localStorage().setItem(this._itemName(model.id),
                    this.serializer.serialize(model))
                this.records.push(model.id.toString())
                this.save();
                return this.find(model)
            },

            // Update a model by replacing its copy in `this.data`.
            update: function(model) {
                this.localStorage().setItem(this._itemName(model.id),
                    this.serializer.serialize(model))
                var modelId = model.id.toString()
                if (!contains(this.records, modelId)) {
                    this.records.push(modelId)
                    this.save()
                }
                return this.find(model)
            },

            // Retrieve a model from `this.data` by id.
            find: function(model) {
                return this.serializer.deserialize(
                    this.localStorage().getItem(this._itemName(model.id)))
            },

            // Return the array of all models currently in storage.
            findAll: function() {
                var result = []
                for (var i = 0, id, data; i < this.records.length; i++) {
                    id = this.records[i]
                    data = this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
                    if (data != null) result.push(data)
                }
                return result
            },

            // Delete a model from `this.data`, returning it.
            destroy: function(model) {
                this.localStorage().removeItem(this._itemName(model.id));
                var modelId = model.id.toString();
                for (var i = 0, id; i < this.records.length; i++) {
                    if (this.records[i] === modelId) {
                        this.records.splice(i, 1);
                    }
                }
                this.save();
                return model;
            },

            localStorage: function() {
                return localStorage;
            },

            // Clear localStorage for specific collection.
            _clear: function() {
                var local = this.localStorage(),
                    itemRe = new RegExp("^" + this.name + "-");

                // Remove id-tracking item (e.g., "foo").
                local.removeItem(this.name);

                // Match all data items (e.g., "foo-ID") and remove.
                for (var k in local) {
                    if (itemRe.test(k)) {
                        local.removeItem(k);
                    }
                }

                this.records.length = 0;
            },

            // Size of localStorage.
            _storageSize: function() {
                return this.localStorage().length;
            },

            _itemName: function(id) {
                return this.name+"-"+id;
            }

        })

// localSync delegate to the model or collection's
// *localStorage* property, which should be an instance of `Store`.
// window.Store.sync and bb.localSync is deprecated, use bb.LocalStorage.sync instead
        bb.LocalStorage.sync = window.Store.sync = bb.localSync = function(method, model, options) {
            var store = result(model, 'localStorage') || result(model.collection, 'localStorage');

            var resp, errorMessage;
            //If $ is having Deferred - use it.
            var syncDfd = bb.$ ?
                (bb.$.Deferred && bb.$.Deferred()) :
                (bb.Deferred && bb.Deferred());

            try {

                switch (method) {
                    case "read":
                        resp = model.id != undefined ? store.find(model) : store.findAll();
                        break;
                    case "create":
                        resp = store.create(model);
                        break;
                    case "update":
                        resp = store.update(model);
                        break;
                    case "delete":
                        resp = store.destroy(model);
                        break;
                }

            } catch(error) {
                if (error.code === 22 && store._storageSize() === 0)
                    errorMessage = "Private browsing is unsupported";
                else
                    errorMessage = error.message;
            }

            if (resp) {
                if (options && options.success) {
                    if (bb.VERSION === "0.9.10") {
                        options.success(model, resp, options);
                    } else {
                        options.success(resp);
                    }
                }
                if (syncDfd) {
                    syncDfd.resolve(resp);
                }

            } else {
                errorMessage = errorMessage ? errorMessage
                    : "Record Not Found";

                if (options && options.error)
                    if (bb.VERSION === "0.9.10") {
                        options.error(model, errorMessage, options);
                    } else {
                        options.error(errorMessage);
                    }

                if (syncDfd)
                    syncDfd.reject(errorMessage);
            }

            // add compatibility with $.ajax
            // always execute callback for success and error
            if (options && options.complete) options.complete(resp);

            return syncDfd && syncDfd.promise();
        };

        bb.ajaxSync = bb.sync

        bb.getSyncMethod = function(model, options) {
            forceAjaxSync = options && options.ajaxSync
            if(!forceAjaxSync && (result(model, 'localStorage') ||
                result(model.collection, 'localStorage'))) {
                return bb.localSync}
            return bb.ajaxSync
        }
// Override 'bb.sync' to default to localSync,
// the original 'bb.sync' is still available in 'bb.ajaxSync'

        bb.sync = function(met, md, op) {
            return bb.getSyncMethod(md, op).apply(this, [met, md, op])}
        return bb.LocalStorage
    }))

}
BBLS=function(){$.x()

    bbLocStorPLUG()


    Cl = bb.C.e({
        localStorage: new bb.LocalStorage('clN')

    })




}
PAGEGRID=function(){$.x('r','page grid')

//<div data-bind='simpleGrid: gridViewModel'> </div>

    $.d().b('simpleGrid', 'gridViewModel')

    $.bt('add').b$('addItem')
    $.bt('sortbyn').b$(' sortByName')
    $.bt('sortbyn').b$(' sortByName')
    $.bt('Jump to first page').b('en', 'gridViewModel.currentPageIndex')


    PagedGridModel =  {

        items : oA(

            { n: "Well-Travelled Kitten", sales: 352, $: 75.95 },
            { n: "Speedy Coyote", sales: 89, $: 190.00 },
            { n: "Furious Lizard", sales: 152, $: 25.00 },
            { n: "Indifferent Monkey", sales: 1, $: 99.95 },
            { n: "Brooding Dragon", sales: 0, $: 6350 },
            { n: "Ingenious Tadpole", sales: 39450, $: 0.35 },
            { n: "Optimistic Snail", sales: 420, $: 1.50 }
        ),


        addItem : function() {

            this.items.push(
                { n: "New item", sales: 0, $: 100 }
            )
        },

        sortByName : function() {
            this.items.sort(function(a, b) {
                return a.n < b.n ? -1 : 1 })
        },

        jumpToFirstPage : function() {
            this.gridViewModel.currentPageIndex(0)
        },


        gridViewModel : new ko.simpleGrid.viewModel({
            data: this.items, columns: [
                { hdrT: "Item Name", rowText: "n" },
                { hdrT: "Sales Count", rowText: "sales" },
                { hdrT: "Price",
                    rowText: function (item) {
                        return "$" + item.$.toFixed(2)
                    }}],

            pageSize: 4
        })
    }


    PagedGrid=  new PagedGridModel()



    ok(PagedGrid)

}
comp=function(){
    CMLDR=function(){$.x()

        VM=function(p) {this.somePop = p.smKey}
        VM.prototype.doSmg = function() {}

        ko.r('my-cm', VM)
        ko.r('my-cm', {
            m: {createVM: function(p, cmInf) {return new VM(p)}},
            t: '#d'
        })
        ko.r('message-editor', {
            m: function(p) {this.t = ko.o(p && p.initialText||'')},
            t: $.d(['Ms:',$.ipV('t'), '(len:',$.spT('t().length'),')'])
        })

        $.tp("my-special-list-template").A(
            $.h3('Here is a special list')
        )

        $.ulE("{ data: myItems, as: 'myItem' }").A(
            $.li().A($.h4('Here is another one of my special items'), $("<!-- ko template: { nodes: $componentTemplateNodes, data: myItem } --><!-- /ko -->")))

        $.tg=function(a){return $('<' + a +'>')}

        $.tg('my-special-list').at('params', 'items: PEEP')
            .A('The person', $.em().b('t','name'),
            'is', $.em().b('t','age'), 'years old.')

        ko.r('my-special-list', {
            t: { el: 'my-special-list-template' },
            m: function(p) {this.myItems = p.items}
        })

        ko.b({PEEP: $oa([{n:'Lew', a: 56 }, {n: 'Atha', a: 34 }])})
        ko.cm.gN= ko.cm.getComponentNameForNode = function(nd) {
            tgNLower = nd.tagName && nd.tagName.toLowerCase()
            return  ko.cm.iR(tgNLower)?   tgNLower :
                tgNLower === "special-el"? "MyCm":
                    null

            // If the el's name matches a reg-ed cm, use that cmt
            // For the el <special-el>, use the component
            // "MySpecialComponent" (whether or not it was preregistered)
            // Treat anything else as not representing a component
        }



        MyCmVM=function(pm) {curObsrvInst = pm.$raw.myExpr()}
        // Now curObsrvInst is either observable1 or obsrv2// and you would read its value with "curObsrvInst()"

        // 'params' is an object whose k/v pairs are the pams
        // passed from the cm bd or cust el.

        // - 'cmtInf.el'
        // is the el the component is being//
        //  injected into. When createVM is called, the template has//
        //  already been injected into this el, but isn't yet bound.
        // - 'componentInfo.templateNodes'
        // is an array containing any DOM
        //   nodes that have been supplied to the component. See below.
        // Return the desired view model instance, e.g.:
    }
    CMNEWS=function(){$.x('y','news feed')
        //http://jsfiddle.net/rniemeyer/fssXE/
        $.qAP('news-feed', 'vm', 'VM')
        $.qAP('news-feed', 'vm', 'VM2')
        $.h2('News Feed')
        $.dT('vm.ms')
        $('<news-feed params="vm: feed"></news-feed>').A()
        $('<news-feed>').at('params', "vm: feed2").A()
        ko.r('news-feed', {m: function (p) { this.vm = p.vm } })
        ko.r('news-feed', {m: function (p) {this.vm = p.vm},
            t: $.d([$.h2('News! Feed'), $.dT('vm.m')])[0]})
        ko.r("news-feed", {m: function (p) { this.vm = p.vm },
            t: $.sp().A($.h2('Nws Fd'), $.d().b('t', 'vm.m'))})
        Feed=function(){this.ms=ko.o('pf!')}
        VM = function () {this.ms = ko.o("Hi");
            this.feed = new Feed();
            this.feed2 = new Feed();
            this.feed.ms("Ms1");
            this.feed2.ms("Ms2");
        }
        Ms = function (m) { return {m:ko.o(m||'') }}
        ok({m :ko.o('!'), VM : Ms('m1'), VM2 : Ms('m2'), VM3: {m:ko.o('!')}})
        ok(new VM())
        ok({ms : ko.o("!"), VM: {ms: ko.o("!")}, VM2: {ms: ko.o("!")}})

        vm.VM.ms("1"); vm.VM2.ms("2")
    }
    WEBCM=function(){
        //For example, instead of writing this:
        $.d().b('cmN', '{ name: "flight-deals", params: { from: "lhr", to: "sfo" } }')
        //  <div data-bind='component: { name: "flight-deals", params: { from: "lhr", to: "sfo" } }'></div>
//… you can write:

        $('<flight-deals>')
        //   < params='from: "lhr", to: "sfo"'></flight-deals>

    }


    bindn=function(){


        /*
         <unrealistic-cm
         params='stringValue: "hello",
         numericValue: 123,
         boolValue: true,
         objectValue: { a: 1, b: 2 },
         dateValue: new Date(),
         someModelProperty: myModelValue,
         observableSubproperty: someObservable().subprop'>
         </unrealistic-component>*/



        /*
         ko.bindingHandlers.yourBindingName = {
         init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
         // This will be called when the binding is first applied to an element
         // Set up any initial state, event handlers, etc. here
         },
         update: function(q, vAc, bd, vm, bdCtx) {
         // This will be called once when the binding is first applied to an element,
         // and again whenever any observables/computeds that are accessed change
         // Update the DOM element based on the supplied values here.
         }
         }
         */

        /*
         The “update” callback
         ko will call the upd cb init when   bd   applied to an el
         and tr any deps (observs/computeds) that you access.
         When any deps change, the upd  cb   called  w these pams:
         el  —  DOM el  involved in this bd

         valAcc — fn that you can call to get the cur md pop involved in this bd (cur md pop v = valAcc())

         To easily accept both observable and plain values, call ko.unwrap on the returned value.

         allBindings — ob,  used to access all the md values bound to this el

         Call allBindings.get('name') to retrieve the value of the name binding (returns undefined if the binding doesn’t exist);
         or allBindings.has('name') to determine if the name binding is present for the current element.

         vm —   deprecated  !

         Use bindingContext.$data or bindingContext.$rawData to access the view model instead.

         bindingCtx — ob, holds the binding ctx available to this el’s bindings,
         includes special properties including $parent, $parents,
         and $root that can be used to access data that is bound against ancestors of this ctx

         ex: you might have been controlling an element’s vs using the vs binding,
         but now you want to go a step further and animate the transition.
         You want elements to slide into and out of existence according to the value of an observable.
         You can do this by writing a cust  binding that calls jq’s slideUp/slideDown functions:

         */
        BDSMPGRD=function(){

            // This is an example of one possible way to make a reusable component (or 'plugin'), consisting of:
//  * A view model class,
//           which gives a way to configure the component and to interact with it
// (e.g., by exposing currentPageIndex as an observable, external code can change the page index)
//
// * A custom binding (ko.bindingHandlers.simpleGrid in this example)
// so a developer can place instances of it into the DOM
//     - in this example,
// the custom binding works by rendering some predefined templates
// using the ko.jqueryTmplTemplateEngine template engine
//
// There are loads of ways this grid example could be expanded. For example,
//  * Letting the developer override the templates used to create the table header, table body, and page links div
//  * Adding a "sort by clicking column headers" option
//  * Creating some API to fetch table data using Ajax requests
//  ... etc
//http://knockoutjs.com/examples/resources/knockout.simpleGrid.js
            ko.simpleGrid = {
                // Defines a view model class you can use to populate a grid
                // If you don't specify columns configuration, we'll use scaffolding
                m: function (cf) {
                    this.data = cf.data
                    this.currentPageIndex = ko.o(0);
                    this.pageSize = cf.pageSize || 5;
                    this.columns = cf.columns || gScafCols(ko.ut.uo(this.data))
                    this.itemsOnCurrentPage = ko.c(function () {
                        var startIndex = this.pageSize * this.currentPageIndex();
                        return ko.ut.uo(this.data)
                            .slice(startIndex, startIndex + this.pageSize);
                    }, this);
                    this.maxPageIndex = ko.c(function () {
                        return M.ceil(ko.ut.uo(this.data).length / this.pageSize)
                    }, this)
                }
            }


            /*
             // Templates used to render the grid
             var templateEngine = new ko.jqueryTmplTemplateEngine();
             templateEngine.addTemplate("ko_simpleGrid_grid", "\
             <table class=\"ko-grid\" cellspacing=\"0\">\
             <thead>\
             <tr>\
             {{each(i, columnDefinition) columns}}\
             <th>${ columnDefinition.headerText }</th>\
             {{/each}}\
             </tr>\
             </thead>\
             <tbody>\
             {{each(i, row) itemsOnCurrentPage()}}\
             <tr class=\"${ i % 2 == 0 ? 'even' : 'odd' }\">\
             {{each(j, columnDefinition) columns}}\
             <td>${ typeof columnDefinition.rowText == 'function' ? columnDefinition.rowText(row) : row[columnDefinition.rowText] }</td>\
             {{/each}}\
             </tr>\
             {{/each}}\
             </tbody>\
             </table>");
             templateEngine.addTemplate("ko_simpleGrid_pageLinks", "\
             <div class=\"ko-grid-pageLinks\">\
             <span>Page:</span>\
             {{each(i) ko.utils.range(1, maxPageIndex)}}\
             <a href=\"#\" data-bind=\"click: function() { currentPageIndex(i) }, css: { selected: i == currentPageIndex() }\">\
             ${ i + 1 }\
             </a>\
             {{/each}}\
             </div>");
             */
            // The "simpleGrid" binding
            ko.bh.simpleGrid = {
                // This method is called to initialize the node, and will also be called again if you change what the grid is bound to
                update: function (el, vwMdAcc, allBndAcc) {var vm  , allBnd  ,
                    grdTpN, pgLnksTpN,
                    grdCt,
                    pgLnksCt

                    vm = vwMdAcc()
                    allBnd = allBndAcc()

                    while(el.firstChild){ko.removeNode(el.firstChild)}

                    // Allow the default templates to be overridden
                    grdTpN = allBnd.simpleGridTemplate || "ko_simpleGrid_grid"
                    pgLnksTpN = allBnd.simpleGridPagerTemplate || "ko_simpleGrid_pageLinks";
                    grdCt= el.A($.d()); // Render the main grid

                    ko.rTp(grdTpN, vm, { templateEngine: templateEngine }, grdCt, "replaceNode")
                    // Render the page links
                    pgLnksCt = el.A($.d())
                    ko.rTp(pgLnksTpN, vm, { templateEngine: templateEngine }, pgLnksCt, "replaceNode");
                }

            }
            function gScafCols(d) {var cols
                if ((typeof d.length != 'number') || d.length == 0) {return []}

                cols = [];
                for (var popN in d[0])
                    cols.push({ headerText: popN, rowText: popN });
                return cols;
            }

        }
        BINDINGS=function(){

            $.h3().bT('qu')
            $.p('Please distribute').A(
                $.b().bT('ptsBudg'),
                'pts btwn the following opts'

            )


            $.t($.tH().A($.tr().A($.th().A('Option'),$.th().A('Import'))),

                $.tB().bE('aw').A($.tr().A($t.d().bT('awT'),$t.d().b('starRating','pts'))))

            $.hr().b({fadeVisible: 'pointsUsed() > pointsBudget' }).A(
                'You used too many points! Please remove some.')

            $.p('You have').A($.b().bT('pointsBudget - pointsUsed()'), 'points left to use')

            $.bt('Finished').b({jqBt:'{ enable: pointsUsed() <= pointsBudget }', $:'save'})


            bindings=function(){
// Reusable bindings - ideally kept in a separate file

                ko.BH.fadeVs = {

                    init: function(el, valAcc) {
                        var shouldDisplay = valAcc();$(el).toggle(shouldDisplay)},// Start visible/invisible according to initial value

                    update: function(el, valAcc) {
                        var shouldDisplay = valAcc();
                        shouldDisplay ? $(el).fadeIn() :
                            $(el).fadeOut()}

                } // On update, fade in/out

                ko.BH.jqBt = {

                    init: function(el) {$(el).button(); }, // Turns the el into a jQuery UI button

                    update: function(el, valAcc) {var curVal = valAcc();  $(el).button("option", "disabled", curVal.enable === false);}

                }// Here we just update the "disabled" state, but you could update other properties too

                ko.BH.starRating = {
                    init: function(el, valAcc) {
                        $(el).addClass("starRating");for (var i = 0; i < 5; i++){$.sp().appendTo(el)}
                        $("span", el).each(function(index) {$(this).hv(// Handle mouse events on the stars
                            function() { $(this).prevAll().add(this).K("hoverChosen") },
                            function() { $(this).prevAll().add(this).removeClass("hoverChosen") })
                            .click(function() {var observable = valAcc();observable(index+1)})})},           // Get the associated observable// Write the new rating to it
                    update: function(el, valAcc) { var observable = valAcc();  $("span", el).each(function(index) {$(this).toggleClass("chosen", index < observable())})} // Give the first x stars the "chosen" class, where x <= rating
                }
            };bindings()

            function Aw(text) { this.awText = text; this.points = ko.o(1); }
            function SurvVM(qu, ptsBdg, aws) {
                this.qu = qu;
                this.ptsBdg = ptsBdg
                this.aws = $.map(aws, function(tx) { return new Aw(tx) });
                this.save = function() { alert('To do') };
                this.ptsUsed = ko.c(function(){var  tot = 0;
                        for (var i = 0; i < this.aws.length; i++){tot += this.aws[i].points()}
                        return tot},
                    this)
            }



            ok(new SurvVM(

                    "Which factors affect your technology choices?",

                    10,

                    [
                        "Functionality, compatibility, pricing - all that boring stuff",
                        "How often it is mentioned on Hacker News",
                        "Number of gradients/dropshadows on project homepage",
                        "Totally believable testimonials on project homepage"
                    ]

                )
            )

        }
        CUSTBDJ=function(){

            ko.bh.slVs = {
                update: function(el, valAcc, allBindings) {var unwrapped,dur, v=valAcc() // First get the latest data that we're bound to
                    unwrapped = ko.unwrap(v);
                    // Next, whether or not the supplied model property is observable, get its current value
                    dur  = allBindings.get('slDur') || 400;// Grab some more data from another binding property // 400ms is default duration unless otherwise specified
                    if(unwrapped){$(el).slideDown(dur)}
                    else{$(el).slideUp(dur)}}
            }
            $.d('You have selected the option').b({
                slVs:'wrap',
                slDur:600
            })
            $.lb().A($.cbC('wrap'),'Gift wrap')
            ok({wrap: ko.o(1)})
        }
        CUSTBDEX=function(){

            $.d().b('e','items').A(
                $.d().at('data-bind', "composableComponent: 'x-expander'").A(
                    $.d().at('data-part','title').A($('<strong>')
                        .b({t:'binding', sy:"{'color': $comp.isExpanded() ? 'darkred' : 'black'}"})),
                    $.d().at('data-part','content').A($('<strong>').b({t:'binding'}),
                        $.sp().b('t', 'description'))))
            $('<script type="text/html" id="x-expander-template">').A($.dK('expander'),
                $.dK('header'),
                $.bt().b({t: 'toggleText', $:'toggle'}),
                $.sp('Expander').K('title').at('data-part','title'),
                $.dK('content').at('data-part','content').b('vs', 'isExpanded')
                    .A('Content'))
            ko.ext = ko.ext || {};
            ko.ext.utils = ko.ext.utils || {};
            ko.ext.utils.cloneNodes = function () {
                if (ko.utils.cloneNodes) {return ko.utils.cloneNodes}
                else {return function (nodesArray, shouldCleanNodes) {
                    for (var i = 0, j = nodesArray.length, newNodesArray = []; i < j; i++) {
                        var clonedNode = nodesArray[i].cloneNode(true);
                        newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
                    }
                    return newNodesArray;
                }}
            }

            ko.ext.utils.cloneNodes()
            compLoadingOperationUniqueId = 0
            ko.bh['composableComponent'] = {
                'init': function(el, valueAccessor, ignored1, ignored2, bindingContext) {

                    disposeAssociatedComponentVM = function () {currentVMDispose = currentVM && currentVM['dispose'];
                        if (typeof currentVMDispose === 'function') {currentVMDispose.call(currentVM)}
                        // Any in-flight loading operation is no longer relevant, so make sure we ignore its completion
                        currentLoadingOperationId = null}
                    isFirstRender = false;specifiedParts;
                    ko.utils.domNodeDisposal.addDisposeCallback(el, disposeAssociatedComponentVM)
                    ko.c(function () {
                        if (!isFirstRender) {isFirstRender = true;specifiedParts = null;
                            findParts(el, function (partName, partNode) {if (!specifiedParts) {specifiedParts = {}}
                                partChNodes = ko.vE.chNodes(partNode)
                                specifiedParts[partName] = ko.ext.utils.cloneNodes(partChNodes, true  )
                            })
                        }
                        value = ko.ut.uo(valueAccessor())
                        if (typeof value === 'string') {cmNm = value}
                        else {cmNm = ko.ut.uo(value['name']); compParams = ko.ut.uo(value['params'])}
                        if (!cmNm) {throw new Error('No comp name specified')}
                        loadingOperationId = currentLoadingOperationId = ++compLoadingOperationUniqueId;
                        ko.cm.get(cmNm,
                            function(compDef) {
                                if (currentLoadingOperationId !== loadingOperationId) {return;} // If this is not the current load operation for this el, ignore it.
                                disposeAssociatedComponentVM();// Clean up previous state
                                if (!compDef) {throw new Error('Unknown comp \'' + cmNm + '\'')}// Instantiate and bind new comp. Implicitly this cleans any old DOM nodes.
                                cloneTemplateIntoElement(cmNm, compDef, el);
                                compVM = createVM(compDef, el, compParams)
                                chBindingContext = bindingContext['createChildContext'](compVM)
                                currentVM = compVM
                                ko.bD(chBindingContext, el)
                                if (specifiedParts) {// For parts defined in the comp definition binding context is// lexically scoped, i.e. it's a binding context of where the comp is// used, not the binding context of the comp template.// The only thing we need to add is a reference to the comp view model,// available through $comp
                                    partBindingContext = bindingContext['extend']({ '$comp': compVM })
                                    findParts(el, function (partName, partNode) {
                                        if (! (replacementNodes= specifiedParts[partName])) {return}
                                        clonedNodes = ko.ext.utils.cloneNodes( replacementNodes )
                                        ko.vE.setDomNodeChildren(partNode, clonedNodes);
                                        ko.bD( partBindingContext, partNode)
                                    })
                                }
                            })
                    }, null, { disposeWhenNodeIsRemoved: el });
                    return { 'controlsDescendantBindings': true };
                }
            }
            ko.vE.AB['composableComponent'] = true
            ExpanderCmVM = function () {this.isExpanded = ko.o(false)
                this.toggleText = ko.c(function () {return this.isExpanded() ? '-' : '+'}, this)}
            ExpanderCmVM.prototype.toggle = function () {this.isExpanded(!this.isExpanded())}
            ko.rg('x-expander', {vm: ExpanderCmVM, t: {el: 'x-expander-template'}})
            AppVM = function () {this.items = [
                { binding: 'vs',
                    desc:
                        'causes the assoc  DOM el to become hd or vs according to the v you pass to the bd' },
                { binding: 't',
                    desc: 'causes the assoc DOM el to display the text value of your pam.' },
                { binding: 'cm',
                    desc: 'injects a spec cm into an el, and optly passes pams to it.' }
            ]}

            ok(new AppVM())
            ko.vE.nCh=ko.vE.setDomNodeChildren
            function findParts(parentNode, fn) {
                if (!parentNode) {return}

                chNodes = ko.vE.chNodes(parentNode)
                ko.utils.arrayForEach(chNodes, function (chNode) {
                    // Search for el nodes only
                    if (chNode.nodeType !== 1) {return;}
                    if (partName= chNode.getAttribute('data-part')) {fn(partName, chNode)}
                    else {findParts(chNode, fn)} // Do not search into part definition
                })
            }
            function cloneTemplateIntoElement(cmN,cmD,el) {var tp
                if(tp!=cmD['template']){_.er('Cm\''+cmN+'\'!tp')}
                ko.vE.nCh(el,
                    clonedNodesArray=ko.ext.utils.cloneNodes(tp)
                )
            }
            function createVM(cmD, el, cmPams) {
                return (cmVMFact= cmD['createVM'])?
                    cmVMFact .call(cmD, cmPams, { el: el }) : cmPams}

            //http://jsfiddle.net/mbaranov/6zvjfd2y/
        }

        /*

         You should use ko.utils.unwrapObservable
         in cases where you don't know if u have been gvn an obsvb or not.
         This would commonly be in a cstm bdg where an ovb or
         non-obv
         could be bound against it.

         In the code that u have above,
         the call to vAc() is not actually unwrpping an ovb

         It is just retrieving the value that was passed to the binding in the correct context

         (it gets wrapped in a fn to protect it).

         The ret v of valAcc() may be an obv or not.

         It is * was pasd to the bdg


         */

    };bindn()


//http://www.knockmeout.net/2011/08/all-of-knockoutjscom-live-samples-in.html



};comp()