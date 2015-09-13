ko.observableArray.fn.filterByProperty = function (propName, matchValue) {
    return ko.pureComputed(function () {
        var allItems = this(),
            matchingItems = [];
        for (var i = 0; i < allItems.length; i++) {
            var current = allItems[i];
            if (ko.unwrap(current[propName]) === matchValue)
                matchingItems.push(current)
        }
        return matchingItems
    }, this)
}
ko.bindingProvider.instance.preprocessNode = function (node) {
    // Only react if this is a comment node of the form <!-- template: ... -->
    if (node.nodeType == 8) {

        var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);

        if (match) {
            // Create a pair of comments to replace the single comment

            var c1 = document.createComment("ko " + match[1]),
                c2 = document.createComment("/ko");

            node.parentNode.insertBefore(c1, node);

            node.parentNode.replaceChild(c2, node);
            // Tell Knockout about the new nodes so that it can apply bindings to them
            return [c1, c2];
        }
    }
};
URLBINDPLUGIN=function() {

// Prototype for an observable<->URL binding plugin.
// CAN'T FIND '$.address'
    (function () {
        var currentParams = {},
            updateTimer

        function ensureString(value) {
            return ((value === null) || (value === undefined)) ? value : value.toString();
        }

        // Gives an address (URL) to a view model state
        ko.linkObservableToUrl = function (observable, hashPropertyName, defaultValue) {
            // When the observable changes, update the URL
            observable.subscribe(function (value) {
                var valueToWrite = value === defaultValue ? null : ensureString(value);
                if (currentParams[hashPropertyName] !== valueToWrite) {
                    currentParams[hashPropertyName] = valueToWrite;
                    queueAction(function () {
                        for (var key in currentParams)
                            $.address.parameter(key, currentParams[key]);
                        $.address.update();
                    });
                }
            });
            // When the URL changes, update the observable
            $.address.change(function (evt) {
                currentParams[hashPropertyName] = hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : null;
                observable(hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : defaultValue);
            });
        }

        function queueAction(action) {
            if (updateTimer)
                clearTimeout(updateTimer);
            updateTimer = setTimeout(action, 0);
        }

        // $.address.autoUpdate(false)

    })()
// Prototype for an observable<->URL binding plugin.
    (function () {
        var currentParams = {}, updateTimer, $ = window.jQuery;
        function ensureString(value) {
            return ((value === null) || (value === undefined)) ? value : value.toString();
        }
        // Gives an address (URL) to a view model state
        ko.linkObservableToUrl = function (observable, hashPropertyName, defaultValue) {
            // When the observable changes, update the URL
            observable.subscribe(function (value) {
                var valueToWrite = value === defaultValue ? null : ensureString(value);
                if (currentParams[hashPropertyName] !== valueToWrite) {
                    currentParams[hashPropertyName] = valueToWrite;
                    queueAction(function () {
                        for (var key in currentParams)
                            $.address.parameter(key, currentParams[key]);
                        $.address.update();
                    });
                }
            });
            // When the URL changes, update the observable
            $.address.change(function (evt) {
                currentParams[hashPropertyName] = hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : null;
                observable(hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : defaultValue);
            });
        }

        function queueAction(action) {
            if (updateTimer)
                clearTimeout(updateTimer);
            updateTimer = setTimeout(action, 0);
        }

        $.address.autoUpdate(false);
    })();
}

ko.observableArray.fn.filterByProperty = function (propName, matchValue) {
    return ko.pc(function () {
        var allItems = this(), matchingItems = []
        for (var i = 0; i < allItems.length; i++) {
            var current = allItems[i]
            if (ko.unwrap(current[propName]) === matchValue)
                matchingItems.push(current)
        }
        return matchingItems
    }, this)
}



ko.bindingProvider.instance.preprocessNode = function(node) {
    // Only react if this is a comment node of the form <!-- template: ... -->
    if (node.nodeType == 8) {
        var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
        if (match) {
            // Create a pair of comments to replace the single comment
            var c1 = document.createComment("ko " + match[1]),
                c2 = document.createComment("/ko");
            node.parentNode.insertBefore(c1, node);
            node.parentNode.replaceChild(c2, node);
            // Tell Knockout about the new nodes so that it can apply bindings to them
            return [c1, c2];
        }
    }
};

ko.oa.fn.filterByProperty = function(propName, matchValue) {
    return ko.pureComputed(function() {
        var allItems = this(), matchingItems = [];
        for (var i = 0; i < allItems.length; i++) {
            var current = allItems[i];
            if (ko.unwrap(current[propName]) === matchValue)
                matchingItems.push(current)}
        return matchingItems

    }, this)
}
//  http://codereview.stackexchange.com/questions/45909/prototype-inheritance-with-knockout-observables
FLVIEWPLG=function(){$.x('x')




    //$.h3('All tasks').A($.spT('tasks().length'))
    $.h3('All tasks').A($.sp().bT('tasks().length'))
    $.ulE('tasks',[$.lL([$.cbC('done'), $.spT('tt')])])
    // $.ul().bE('tasks').A($.li().A($.lb().A($.cb().bC('done'), $.sp().bT('title'))))

    $.h3('Done tasks').A( $.spT('doneTasks().length') )
    // $.h3('Done tasks').A($.sp().bT('doneTasks().length'))
    $.ulE( 'doneTasks', [     $.liT('tt')    ] )
    //$.ul().bE('doneTasks').A( $.li().bT('text') )
    ok({

        tasks :tasks,
        doneTasks :  tasks.filterByProperty("done", 1)
    })


    /*alt:
     this.doneTasks = ko.pureComputed(function() {
     var all = this.tasks(), done = [];
     for (var i = 0; i < all.length; i++)
     if (all[i].done())
     done.push(all[i]);
     return done;
     }, this);
     */

}
KOSCR=function(){z()

    $.A(

        $.scrp('tt').A($.h1('afsdfds')), $.d().bT("{name:'tt'}")

    )
// kob= ko.observable.prototype; kob.rm= kob.remove
    ok({})
};



PAGEGRID=function(){
    //requires simple grid
    $.x('r','page grid')

//<div data-bind='simpleGrid: gridViewModel'> </div>

    $.d().b('simpleGrid', 'gridViewModel')

    $.bt('add').b$('addItem')
    $.bt('sortbyn').b$(' sortByName')
    $.bt('sortbyn').b$(' sortByName')
    $.bt('Jump to first page').b('en', 'gridViewModel.currentPageIndex')


    PagedGridModel =  {

        items : $oa(
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


//http://www.knockmeout.net/2011/08/all-of-knockoutjscom-live-samples-in.html
