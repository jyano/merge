



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



FLVIEWPLG=function(){$.x('x')



    $.h3('All tasks').A($.spT('tasks().length'))

    $.ulE('tasks',[

        $.lL([
            $.cbC('done'), $.spT('tt')
        ])
    ])


    $.h3('Done tasks').A( $.spT('doneTasks().length') )

    $.ulE( 'doneTasks', [     $.liT('tt')    ] )




    tasks= ko.oa(
        Task('new background', 1), Task('stickers'), Task('reggae', 1)
    )
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
//requires simple grid
PAGEGRID=function() {
    $.x('r', 'page grid')


    //<div data-bind='simpleGrid: gridViewModel'> </div>

    $.d().b('simpleGrid', 'gridViewModel')

    $.bt('add').b$('addItem')
    $.bt('sortbyn').b$(' sortByName')
    $.bt('sortbyn').b$(' sortByName')
    $.bt('Jump to first page').b('en',
        'gridViewModel.currentPageIndex')

    PagedGridModel = {

        items: $oa(
            {n: "Well-Travelled Kitten", sales: 352, $: 75.95},
            {n: "Speedy Coyote", sales: 89, $: 190.00},
            {n: "Furious Lizard", sales: 152, $: 25.00},
            {n: "Indifferent Monkey", sales: 1, $: 99.95},
            {n: "Brooding Dragon", sales: 0, $: 6350},
            {n: "Ingenious Tadpole", sales: 39450, $: 0.35},
            {n: "Optimistic Snail", sales: 420, $: 1.50}
        ),


        addItem: function () {

            this.items.push(
                {n: "New item", sales: 0, $: 100}
            )
        },

        sortByName: function () {
            this.items.sort(function (a, b) {
                return a.n < b.n ? -1 : 1
            })
        },

        jumpToFirstPage: function () {
            this.gridViewModel.currentPageIndex(0)
        },

        gridViewModel: new ko.simpleGrid.viewModel({
            data: this.items, columns: [
                {hdrT: "Item Name", rowText: "n"},
                {hdrT: "Sales Count", rowText: "sales"},
                {
                    hdrT: "Price",
                    rowText: function (item) {
                        return "$" + item.$.toFixed(2)
                    }
                }],

            pageSize: 4
        })
    }
    PagedGrid = new PagedGridModel()

    ok(PagedGrid)

}

KOEXTALT=function(){
    //  http://codereview.stackexchange.com/questions/45909/prototype-inheritance-with-knockout-observables

    /*

     base classe:  subscribable
     subscribable <-  observable
     subscribable <- computed
     observable <- observableArray


     Adding custom functions using "fn"
     You can define custom functions on any of the following types:

     ko.subscribable.fn       ko.observable.fn      ko.observableArray.fn     ko.computed.fn

     Example: A filtered view of an observable array
     Here’s a way to define a "filterByProperty" function
     ko.observableArray.filterByProperty -see above :)
     It returns a new computed value that provides a filtered view of the array,
     while leaving the original array unchanged. Because the filtered array is
     a computed observable,
     it will be re-evaluated whenever the underlying array changes.
     ex how to use:  http://knockoutjs.com/documentation/fn.html



     <h3>All tasks (<span data-bind="text: tasks().length"> </span>)</h3>
     <ul data-bind="foreach: tasks">
     <li>
     <label>
     <input type="checkbox" data-bind="checked: done" />
     <span data-bind="text: title"> </span>
     </label>
     </li>
     </ul>

     <h3>Done tasks (<span data-bind="text: doneTasks().length"> </span>)</h3>
     <ul data-bind="foreach: doneTasks">
     <li data-bind="text: title"></li>
     </ul>

     */

    function VM() {
        this.tasks = ko.oa([
            Task('Find new desktop background', true),
            Task('Put shiny stickers on laptop', false),
            Task('Request more reggae music in the office', true)
        ])


        this.doneTasks = this.tasks.filterByProperty("done", true)
    }

    ok(new VM())

    //    not mandatory
    /*



     If you tend to filter observable arrays a lot,
     adding a filterByProperty globally to all observable arrays might make your code tidier.
     But if you only need to filter occasionally,
     you could instead choose not to attach to ko.observableArray.fn,
     and instead just construct doneTasks by hand as follows:


     */
    this.doneTasks = ko.pc(function(){var all,done
        all = this.tasks()
        done = []
        for (var i = 0; i < all.length; i++){
            if (all[i].done()) {
                done.push(all[i])}}
        return done} , this)
}
// SCRIPTING??!
KOSCR=function(){z();$.bd().A(
    $.scrp('tt').A($.h1('afsdfds')), $.d().bT("{name:'tt'}")
);// kob= ko.observable.prototype; kob.rm= kob.remove

    ko.b({})}



FLVIEWPLG=function(){$.z()
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


    $.h3('All tasks').A($.sp().bT('tasks().length'))

    $.ul().bE('tasks').A($.li().A(
        $.lb().A($.cb().bC('done'), $.sp().bT('title'))))
    $.h3('Done tasks').A($.sp().bT('doneTasks().length'))



    $.ul().bE('doneTasks').A( $.li().bT('text') )






    function Task(title, done) {

        this.title = ko.o(title)
        this.done = ko.o(done)
    }


    function AppViewModel() {

        this.tasks = ko.observableArray([
            new Task('Find new desktop background', true),
            new Task('Put shiny stickers on laptop', false),
            new Task('Request more reggae music in the office', true)
        ])

        // Here's where we use the custom function
        this.doneTasks = this.tasks.filterByProperty("done", true);
    }


    ko.b(new AppViewModel())



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

URLPLUG=function(){
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
FLVIEWPLG=function(){$.x('x')


    ko.oA.fn.filterByProperty = function(propName, matchValue) {
        return ko.pureComputed(function() {
            var allItems = this(), matchingItems = [];
            for (var i = 0; i < allItems.length; i++) {
                var current = allItems[i];
                if (ko.unwrap(current[propName]) === matchValue)
                    matchingItems.push(current)}
            return matchingItems
        }, this)
    }

    $.h3('All tasks').A($.spT('tasks().length'))
    $.ulE('tasks',[
        $.lL([
            $.cbC('done'), $.spT('tt')
        ])
    ])


    $.h3('Done tasks').A( $.spT('doneTasks().length') )

    $.ulE('doneTasks',[$.liT('tt')])

    tasks= ko.oa(
        Task('Find new desktop background', 1),
        Task('Put shiny stickers on laptop'),
        Task('Request more reggae music in the office', 1))

    ok({
        tasks :tasks,
        doneTasks :  tasks.filterByProperty("done", 1)
    })



    function Task(tt,done){return {tt:ko.o(tt), done:ko.o(done)}}




    /*alt:
     this.doneTasks = ko.pureComputed(function() {
     var all = this.tasks(), done = [];
     for (var i = 0; i < all.length; i++)
     if (all[i].done())
     done.push(all[i]);
     return done;
     }, this);
     */

    alt=function(){
        KOEXT=function(){
            //  http://codereview.stackexchange.com/questions/45909/prototype-inheritance-with-knockout-observables

            /*

             base classe:  subscribable
             subscribable <-  observable
             subscribable <- computed
             observable <- observableArray


             Adding custom functions using "fn"
             You can define custom functions on any of the following types:
             ko.subscribable.fn
             ko.observable.fn
             ko.observableArray.fn
             ko.computed.fn


             Example: A filtered view of an observable array
             Here’s a way to define a "filterByProperty" function
             ko.observableArray.filterByProperty

             */
            ko.oA.fn.filterByProperty = function(propName, matchValue){
                return ko.pc(function() {
                    var allItems  = this(), matchingItems = []
                    for (var i = 0; i < allItems.length; i++) {
                        var current = allItems[i]
                        if (ko.unwrap(current[propName]) === matchValue)
                            matchingItems.push(current)
                    }
                    return matchingItems
                }, this)
            }
            /*
             This returns a new computed value that provides a filtered view of the array,
             while leaving the original array unchanged. Because the filtered array is a computed observable,
             it will be re-evaluated whenever the underlying array changes.

             The following live example shows how you could use this:
             http://knockoutjs.com/documentation/fn.html
             */
            /*

             <h3>All tasks (<span data-bind="text: tasks().length"> </span>)</h3>
             <ul data-bind="foreach: tasks">
             <li>
             <label>
             <input type="checkbox" data-bind="checked: done" />
             <span data-bind="text: title"> </span>
             </label>
             </li>
             </ul>

             <h3>Done tasks (<span data-bind="text: doneTasks().length"> </span>)</h3>
             <ul data-bind="foreach: doneTasks">
             <li data-bind="text: title"></li>
             </ul>
             Source code: View model
             */


            function Task(tt, done) {
                this.title = ko.o(tt)
                this.done = ko.o(done)
            }


            function AppViewModel() {
                this.tasks = ko.oa([
                    new Task('Find new desktop background', true),
                    new Task('Put shiny stickers on laptop', false),
                    new Task('Request more reggae music in the office', true)
                ])


                // Here's where we use the custom function
                this.doneTasks = this.tasks.filterByProperty("done", true)
            }


            /*
             ko.applyBindings(new AppViewModel());
             It’s not mandatory
             If you tend to filter observable arrays a lot,
             adding a filterByProperty globally to all observable arrays might make your code tidier.
             But if you only need to filter occasionally,
             you could instead choose not to attach to ko.observableArray.fn,
             and instead just construct doneTasks by hand as follows:


             */


            this.doneTasks = ko.pc(function(){var all,done
                all = this.tasks()
                done = []
                for (var i = 0; i < all.length; i++){if (all[i].done()) {
                    done.push(all[i])}}
                return done} , this)
        }



    }
}
VIRTP=function(){$z()
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
    }


}
URLPLUG=function(){
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

FLVIEWPLG=function(){$.x('x')


    ko.oA.fn.filterByProperty = function(propName, matchValue) {
        return ko.pureComputed(function() {
            var allItems = this(), matchingItems = [];
            for (var i = 0; i < allItems.length; i++) {
                var current = allItems[i];
                if (ko.unwrap(current[propName]) === matchValue)
                    matchingItems.push(current)}
            return matchingItems
        }, this)
    }

    $.h3('All tasks').A($.spT('tasks().length'))
    $.ulE('tasks',[
        $.lL([
            $.cbC('done'), $.spT('tt')
        ])
    ])


    $.h3('Done tasks').A( $.spT('doneTasks().length') )

    $.ulE('doneTasks',[$.liT('tt')])

    tasks= ko.oa(
        Task('Find new desktop background', 1),
        Task('Put shiny stickers on laptop'),
        Task('Request more reggae music in the office', 1))

    ok({
        tasks :tasks,
        doneTasks :  tasks.filterByProperty("done", 1)
    })



    function Task(tt,done){return {tt:ko.o(tt), done:ko.o(done)}}




    /*alt:
     this.doneTasks = ko.pureComputed(function() {
     var all = this.tasks(), done = [];
     for (var i = 0; i < all.length; i++)
     if (all[i].done())
     done.push(all[i]);
     return done;
     }, this);
     */

    alt=function(){
        KOEXT=function(){
            //  http://codereview.stackexchange.com/questions/45909/prototype-inheritance-with-knockout-observables

            /*

             base classe:  subscribable
             subscribable <-  observable
             subscribable <- computed
             observable <- observableArray


             Adding custom functions using "fn"
             You can define custom functions on any of the following types:
             ko.subscribable.fn
             ko.observable.fn
             ko.observableArray.fn
             ko.computed.fn


             Example: A filtered view of an observable array
             Here’s a way to define a "filterByProperty" function
             ko.observableArray.filterByProperty

             */
            ko.oA.fn.filterByProperty = function(propName, matchValue){
                return ko.pc(function() {
                    var allItems  = this(), matchingItems = []
                    for (var i = 0; i < allItems.length; i++) {
                        var current = allItems[i]
                        if (ko.unwrap(current[propName]) === matchValue)
                            matchingItems.push(current)
                    }
                    return matchingItems
                }, this)
            }
            /*
             This returns a new computed value that provides a filtered view of the array,
             while leaving the original array unchanged. Because the filtered array is a computed observable,
             it will be re-evaluated whenever the underlying array changes.

             The following live example shows how you could use this:
             http://knockoutjs.com/documentation/fn.html
             */
            /*

             <h3>All tasks (<span data-bind="text: tasks().length"> </span>)</h3>
             <ul data-bind="foreach: tasks">
             <li>
             <label>
             <input type="checkbox" data-bind="checked: done" />
             <span data-bind="text: title"> </span>
             </label>
             </li>
             </ul>

             <h3>Done tasks (<span data-bind="text: doneTasks().length"> </span>)</h3>
             <ul data-bind="foreach: doneTasks">
             <li data-bind="text: title"></li>
             </ul>
             Source code: View model
             */


            function Task(tt, done) {
                this.title = ko.o(tt)
                this.done = ko.o(done)
            }


            function AppViewModel() {
                this.tasks = ko.oa([
                    new Task('Find new desktop background', true),
                    new Task('Put shiny stickers on laptop', false),
                    new Task('Request more reggae music in the office', true)
                ])


                // Here's where we use the custom function
                this.doneTasks = this.tasks.filterByProperty("done", true)
            }


            /*
             ko.applyBindings(new AppViewModel());
             It’s not mandatory
             If you tend to filter observable arrays a lot,
             adding a filterByProperty globally to all observable arrays might make your code tidier.
             But if you only need to filter occasionally,
             you could instead choose not to attach to ko.observableArray.fn,
             and instead just construct doneTasks by hand as follows:


             */


            this.doneTasks = ko.pc(function(){var all,done
                all = this.tasks()
                done = []
                for (var i = 0; i < all.length; i++){if (all[i].done()) {
                    done.push(all[i])}}
                return done} , this)
        }



    }
}

URLPLUG=function(){
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