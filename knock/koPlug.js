ko.bP=ko.bindingProvider; ko.bP.i=ko.bP.instance

ko.bP.instance.preprocessNode = function(node) {
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

ko.$oa=function(name,fn){
    ko.oa.fn[name]=fn
}

ko.$oa('filterByProperty',
    function(propName, matchValue) {
    return ko.pureComputed(function() {
        var allItems = this(), matchingItems = [];
        for (var i = 0; i < allItems.length; i++) {
            var current = allItems[i];
            if (ko.unwrap(current[propName]) === matchValue)
                matchingItems.push(current)}
        return matchingItems
    }, this)
})


URLBINDPLUGIN=function() {

        var currentParams = {}, updateTimer
        // Gives an address (URL) to a view model state
    ko.linkObservableToUrl = function (observable, hashPropertyName, defaultValue) {
            // When the observable changes, update the URL
            observable.subscribe(function (val) {
                var valueToWrite = val === defaultValue ? null : ensureString(val);
                if (currentParams[hashPropertyName] !== valueToWrite) {
                    currentParams[hashPropertyName] = valueToWrite;
                    queueAction(function () {

                        for (var key in currentParams)
                            $.address.parameter(key, currentParams[key])
                        $.address.update()
                    })
                }
            })

            // When the URL changes, update the observable
            $.address.change(function (evt) {
                currentParams[hashPropertyName] = hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : null;
                observable(hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : defaultValue);
            })
        }
    function ensureString(val) {
        return (  U(val) ||val === null ) ? val : val.toString()
    }
    function queueAction(action){
            if (updateTimer) {clearTimeout(updateTimer)}
            updateTimer = _.sT(action, 0)}// $.address.autoUpdate(false)
// Prototype for an observable<->URL binding plugin.
// CAN'T FIND '$.address'

}
KOFILTER=function(){
    //filter the items using the filter text
    vm.filteredItems = ko.c(function() {
        var t= this, fl
        fl = t.filter().toLowerCase()
        if (!fl) {return t.items();

        }
        else {
            return ko.utils.arrayFilter(t.items(),
                function(it) {
                    return ko.utils.stringStartsWith(
                        it.name().toLowerCase(), fl)
                })}}, vm)
}
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
    $.A($.scrp('tt').A($.h1('afsdfds')), $.d().bT("{name:'tt'}")) // kob= ko.observable.prototype; kob.rm= kob.remove
    ok({})
}

SORTITEMS = function () {
    var o = {}
    o.itemToAdd = $o('')
    o.allItems = $oa(['a', 'b', 'c'])
    o.selectedItems = $oa(['d'])
    o.addItem = function () {
        if (o.itemToAdd() != ''//&& o.allItems.indexOf(o.itemToAdd())<0
        ) {
            o.allItems.push(o.itemToAdd());
            o.itemToAdd('')
        }
    }
    o.removeSelected = function () {
        o.allItems.removeAll(o.selectedItems())
        o.selectedItems([])
    }
    o.sortItems = function () {
        o.allItems.sort()
    }
    return o
}

function grid(){
    KOGRID=function(){$.z().f().at({action: '/someServerSideHandler'}).A(
        $.p('You have asked for').A($.sp('&nbsp;').bT('gifts().length'), 'gift(s)'),
        $.t().bVs('gifts().length > 0').A($.tH().A($.tr().A(//tHR
                $.th().A('Gift name'), $.th().A('Price'))),
            $.tB().bE('gifts').A($.tr().A(  //tBR
                $.td().A($.ip().K('required').b({v:'name', u:true})),
                $.td().A($.ip().K('required number').b({v:'price', u:true})),
                $.td().A($.a('delete').b$('$root.removeGift'))))),
        $.bt('add gift').b$('addGift'), $.sb().bEn('gifts().length > 0')).A()
        $.p('You have asked for').A($.sp('&nbsp;').bT('gifts().length'), 'gift(s)')
        $.t().bVs('gifts().length > 0').A(
            $.tH().A($.tr().A($.th().A('Gift name'), $.th().A('Price'))),
            $.tB().bE('gifts').A($.tr().A(
                $.td().A($.ip().K('required').b({v:'name', u:true})),
                $.td().A($.ip().K('required number').b({v:'price', u:true})),
                $.td().A($.a('delete').b$('$root.removeGift')))))

        $.bt('add gift').b$('addGift')
        $.sm().bEn('gifts().length > 0')
        ok(new Gift([          { name: "Tall Hat", price: "39.95"},          { name: "Long Cloak", price: "120.00"}]))
        // $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
    }


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
    GRXX = function () {
        $.x('x', 'grx')
        /*
         $CSS({


         body { font-family: arial; font-size: 14px; }
         .liveExample { padding: 1em; background-color: #EEEEDD; border: 1px solid #CCC; max-width: 655px; }
         .liveExample input { font-family: Arial; }
         .liveExample b { font-weight: bold; }
         .liveExample p { margin-top: 0.9em; margin-bottom: 0.9em; }
         .liveExample select[multiple] { width: 100%; height: 8em; }
         .liveExample h2 { margin-top: 0.4em; }

         .ko-grid { margin-bottom: 1em; width: 25em; border: 1px solid silver; background-color:White; }
         .ko-grid th { text-align:left; background-color: Black; color:White; }
         .ko-grid td, th { padding: 0.4em; }
         .ko-grid tr:nth-child(odd) { background-color: #DDD; }
         .ko-grid-pageLinks { margin-bottom: 1em; }
         .ko-grid-pageLinks a { padding: 0.5em; }
         .ko-grid-pageLinks a.selected { background-color: Black; color: White; }
         .liveExample { height:20em; overflow:auto }
         //Mobile Safari reflows pages slowly, so fix the height to avoid the need for reflows

         li { list-style-type: disc; margin-left: 20px; }


         })

         */
        $.d().at({'data-bind': 'simpleGrid: gridViewModel'})
        $.bt('add item').at({'data-bind': 'click: addItem'})
        $.bt('sort by name').at({'data-bind': 'click: sortByName'})
        $.bt('   Jump to first page').at({
            'data-bind': 'click: jumpToFirstPage, enable: gridViewModel.currentPageIndex'
        })
        PagedGridModel = function (items) {
            this.items = $oa(items)
            this.addItem = function () {
                this.items.push({
                    name: "New item", sales: 0, price: 100
                })
            }
            this.sortByName = function () {
                this.items.sort(function (a, b) {
                    return a.name < b.name ? -1 : 1
                })
            }
            this.jumpToFirstPage = function () {
                this.gridViewModel.currentPageIndex(0)
            }
            this.gridViewModel = new ko.simpleGrid.viewModel({
                data: this.items,
                columns: [
                    {headerText: "Item Name", rowText: "name"},
                    {headerText: "Sales Count", rowText: "sales"},
                    {
                        headerText: "Price", rowText: function (item) {
                        return "$" + item.price.toFixed(2)
                    }
                    }
                ],

                pageSize: 4
            })
        }
        ok(
            new PagedGridModel(initialData)
        )

    }
    KOGRID = function () {
        $.z()


        f = $.f().at({action: '/someServerSideHandler'})


        f.A(
            $.p('You have asked for').A($.sp('&nbsp;').bT('gifts().length'), 'gift(s)'),

            $.t().bVs('gifts().length > 0').A(
                $.tH().A($.tr().A(//tHR
                    $.th().A('Gift name'),
                    $.th().A('Price'))),
                $.tB().bE('gifts').A($.tr().A(  //tBR
                    $.td().A($.ip().K('required').b({v: 'name', u: true})),
                    $.td().A($.ip().K('required number')
                        .b({v: 'price', u: true})),
                    $.td().A($.a('delete').b$('$root.removeGift'))))),

            $.bt('add gift').b$('addGift'),

            $.sb().bEn('gifts().length > 0')
        ).A()


        ok(new Gift([

            {name: "Tall Hat", price: "39.95"},
            {name: "Long Cloak", price: "120.00"}

        ]))

        // $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation

    }
    GRX = function () {
        $.x('x', 'grx1')


        $.d([
            $.d().at({'data-bind': 'simpleGrid: gridViewModel'}),
            $.bt('add item').at({'data-bind': 'click: addItem'}),
            $.bt('sort by name').at({'data-bind': 'click: sortByName'}),
            $.bt('   Jump to first page')
                .at({
                    'data-bind': 'click: jumpToFirstPage, enable: gridViewModel.currentPageIndex'
                })
        ]).K('liveExample')
    }
}
KOEXT=function(){

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

    ko.observableArray.fn.filterByProperty = function(propName, matchValue) {
        return ko.pureComputed(function() {var allItems
            allItems = this(), matchingItems = []
            for (var i = 0; i < allItems.length; i++) {
                var current = allItems[i]
                if (ko.unwrap(current[propName]) === matchValue)
                    matchingItems.push(current)         }
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

    function Task(title, done) {
        this.title = $o(title)
        this.done = $o(done)
    }
    function AppViewModel() {
        this.tasks = $oArray([
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

     If you tend to filter observable arrays a lot, adding a filterByProperty globally to all observable arrays might make your code tidier. But if you only need to filter occasionally, you could instead choose not to attach to ko.observableArray.fn, and instead just construct doneTasks by hand as follows:


     */
    func=  function(){var all,done
        all = this.tasks()
        done = []
        for (var i = 0; i < all.length; i++){if (all[i].done()) {done.push(all[i])}}
        return done}
    this.doneTasks = ko.pureComputed(func , this)


}