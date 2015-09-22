
/*

 bb Extensions

 bb is flexible, simple, and powerful. However, you may find that complexity of app you are working on requires more than what it provides out of box.
 There are certain concerns which it just doesn’t address directly as one of its goals is to be minimalist.

 Take for example Vws, which providedefault render met which does nothing and produces no real results when called, despite most impls using it to generate HTML that view manages.
 Also, Mds and Cls have no built-in way of handling nested hierarchies - if you require this fnality, you need to write it yourself or useplugin.

 In these cases, there are many existing bb plugins which can provide advanced sols for big-scale bb apps.
 A fairly complete list of plugins and frameworks avail can be found on bb wiki. Using these add-ons, there is enough for apps of most sizes to be completed successfully.

 In this section of book we will look at two popular bb add-ons: MarionetteJS and Thorax.

 MarionetteJS (Bb.Marionette)
 By Derick Bailey & Addy Osmani

 As we’ve seen, bb providesgreat set of building blocks for our JavaScript apps. It gives us core constructs that are needed to build small to mid-sized apps,
 organize jQ DOM evs, or create single page apps that support mobile devices and big scale enterprise needs. But bb is notcomplete framework.
 It’sset of building blocks that leaves much of app design, architecture, and scalability to developer, including memory management, view management, and more.

 MarionetteJS (a.k.a. Bb.Marionette) provides many of features that non-trivial app developer needs, above what bb itself provides.
 It iscomposite app lib that aims to simplify construction of big scale apps. It does this by providingcl of common design and impl patterns
 found in apps that creator, Derick Bailey, and many other contributors have been using to build bb apps.

 Marionette’s key benefits include:

 Scaling apps out with modular, event driven architecture
 Sensible defaults, such as using Underscore tps for view rendering
 Easy to modify to make it work with your app’s  spec needs
 Reducing boilerplate for views, with specialized view types
 Build onmodular architecture with Application and modules that attach to it
 Compose your app’s visuals at runtime, with Region and Layout
 Nested views and layouts within visual regions
 Built-in memory management and zombie killing in views, regions, and layouts
 Built-in event clean up with EventBinder
 Event-driven architecture with EventAggregator
 Flexible, “as-needed” architecture allowing you to pick and choose what you need
 And much, much more
 Marionette followssimilar philosophy to bb in that it providessuite of components that can be used independently of each other,
 or used together to create significant advantages for us as developers. But it steps above structural components of bb and provides app layer,
 with more thandozen components and building blocks.

 Marionette’s components range greatly in features they provide, but they all work together to create composite app layer that can both reduce boilerplate code
 and providemuch needed app structure. Its core components include various and specialized view types that take boilerplate out of rendering common Bb.Md and Bb.Cl scenarios;
 Application object and Module architecture to scale apps across sub-apps, features and files; integration ofcommand pattern, event aggregator,
 and request/response mechanism; and many more object types that can be extended inmyriad of ways to create architecture that facilitates app’s  spec needs.

 In spite of big number of constructs that Marionette provides, though, you’re not required to use all of it just because you want to use some of it.
 Much like bb itself, you can pick and choose which features you want to use and when. This allows you to work with other bb frameworks and plugins very easily.
 It also means that you are not required to engage in all-or-nothing migration to begin using Marionette.

 Boilerplate Rendering Code
 Consider code that it typically requires to renderview with bb and Underscore tp. We needtp to render, which can be placed in DOM directly,
 and we need JavaScript that definesview that uses tp and populates it with data frommd.

 <script type="text/html" id="my-view-tp">
 <div class="row">
 <label>First Name:</label>
 <span><%= fN %></span>
 </div>
 <div class="row">
 <label>Last Name:</label>
 <span><%= lN %></span>
 </div>
 <div class="row">
 <label>Email:</label>
 <span><%= email %></span>
 </div>
 </script>
 MyVw = Bb.V.x({
 tp: $('#my-view-tp').h(),

 r: fn() {

 // compile Underscore.js tp
 compiledTp = _.tp(this.tp);

 // render tp with md data
 data = _.clone(this.md.atts);
 html = compiledTp(data);

 // populate view with rendered html
 this.$el.h(html);
 }
 });
 Once this is in place, you need to create instance of your view and pass your md into it. Then you can take view’s el and append it to DOM in order to display view.


 Per = Bb.Md.x({
 df: {
 "fN": "Jeremy",
 "lN": "Ashkenas",
 "email":    "jeremy@example.com"
 }
 });

 Derick = new Per({
 fN: 'Derick',
 lN: 'Bailey',
 email: 'derickbailey@example.com'
 });

 myVw = new MyVw({
 md: Derick
 });

 myVw.setElement("#content");
 myVw.r();
 This isstandard set up for defining, building, rendering, and displayingview with Bb. This is also what we call “boilerplate code”
 - code that is repeated over and over and over again, across every project and every impl with same fnality. It gets to be tedious and repetitious very quickly.

 Enter Marionette’s ItemVw -simple way to reduce boilerplate of definingview.

 Reducing Boilerplate With Marionette.ItemVw
 All of Marionette’s view types - with exception of Marionette.Vw - includebuilt-in render met that handles core rendering logic for you.
 We can take advantage of this by changing MyVw instance to inherit from one of these rather than Bb.Vw. Instead of having to provide our own render met for view,
 we can let Marionette render it for us. We’ll still use same Underscore.js tp and rendering mechanism, but impl of this is hidden behind scenes.
 Thus, we can reduce amount of code needed for this view.

 MyVw = Marionette.ItemV.x({
 tp: '#my-view-tp'
 });
 And that’s it - that’s all you need to get exact same behaviour as prev view impl. Just replace Bb.Vw.extend with Marionette.ItemVw.extend,
 then get rid of render met. You can still create view instance withmd, call render met on view instance, and display view in DOM same way that we did before.
 But view definition has been reduced tosingle line of configuration for tp.

 Memory Management
 In addition to reduction of code needed to defineview, Marionette includes some advanced memory management in all of its views,
 making job of cleaning upview instance and its event handlers easy.

 Consider following view impl:

 ZombieVw = Bb.V.x({
 tp: '#my-view-tp',

 i: fn() {

 // bind md change to re-render this view
 this.l2(this.md, 'change', this.render);

 },

 r: fn() {

 // This alert is going to demonstrateproblem
 alert('We`re rendering view');

 }
 });
 If we create two instances of this view using same var name for both instances, and then changeval in md, how many times will we see alert box?


 Derick = new Per({
 fN: 'Derick',
 lN: 'Bailey',
 email: 'derick@example.com'
 });


 // create first view instance
 zombieVw = new ZombieVw({
 md: Derick
 });

 // createsecond view instance, re-using
 // same var name to store it
 zombieVw = new ZombieVw({
 md: Derick
 });

 Derick.set('email', 'derickbailey@example.com');
 Since we’re re-using same zombieVw var for both instances, first instance of view will fall out of scope immediately after second is created.
 This allows JavaScript garbage collector to come along and clean it up, which should mean first view instance is no longer active and no longer going to respond to md’s “change” event.

 But when we run this code, we end up with alert box showing up twice!

 The problem is caused by md event binding in view’s init met. Whenever we pass this.render as cb met to md’s on event binding,
 md itself is being givendirect reference to view instance. Since md is now holdingreference to view instance,
 replacing zombieVw var with new view instance is not going to let original view fall out of scope. The md still hasreference, therefore view is still in scope.

 Since original view is still in scope, and second view instance is also in scope, changing data on md will cause both view instances to respond.

 Fixing this is easy, though. You just need to call stopListening when view is done with its work and ready to be closed. To do this, addclose met to view.

 ZombieVw = Bb.V.x({
 tp: '#my-view-tp',

 i: fn() {
 // bind md change to re-render this view
 this.l2(this.md, 'change', this.render);
 },

 close: fn() {
 // unbind evs that this view is listening to
 this.stopListening();
 },

 r: fn() {

 // This alert is going to demonstrateproblem
 alert('We`re rendering view');

 }
 });
 Then call close on first instance when it is no longer needed, and only one view instance will remain alive. For more information about l2 and stopListening fns,
 see earlier bb Basics chapter and Derick’s post on Managing Events As Relationships, Not Just Resources.

 Jeremy = new Per({
 fN: 'Jeremy',
 lN: 'Ashkenas',
 email: 'jeremy@example.com'
 });

 // create first view instance
 zombieVw = new ZombieVw({
 md: Jeremy
 })
 zombieVw.close(); // double-tap zombie

 // createsecond view instance, re-using
 // same var name to store it
 zombieVw = new ZombieVw({
 md: Jeremy
 })

 Jeremy.set('email', 'jeremyashkenas@example.com');
 Now we only see one alert box when this code runs.

 Rather than having to manually rm these event handlers, though, we can let Marionette do it for us.

 ZombieVw = Marionette.ItemV.x({
 tp: '#my-view-tp',

 i: fn() {

 // bind md change to re-render this view
 this.l2(this.md, 'change', this.render);

 },

 r: fn() {

 // This alert is going to demonstrateproblem
 alert('We`re rendering view');

 }
 });
 Notice in this case we are usingmet called l2. This met comes from Bb.Events, and is avail in all objects that mix in Bb.Events
 - including most Marionette objects. The l2 met signature is similar to that of on met, with exception of passing object that triggers event as first parameter.

 Marionette’s views also provide a close event, in which event bindings that are set up with l2 are automatically rmd.
 This means we no longer need to defineclose met directly, and when we use l2 met, we know that our evs will be rmd and our views will not turn into zombies.

 But how do we automate call to close onview, in real app? When and where do we call that? Enter Marionette.Region - object that manages lifecycle of individual view.

 Region Management
 Afterview is created, it typically needs to be placed in DOM so that it becomes visible. This is usually done withjQ selector and setting h() of resulting object:

 Joe = new Per({  fN: 'Joe',  lN: 'Bob',    email: 'joebob@example.com'  })


 myVw = new MyVw({  md: Joe  })

 myVw.r();

 // show view in DOM
 $('#content').h(myVw.el)
 This, again, is boilerplate code. We shouldn’t have to manually call render and manually select DOM els to show view. Furthermore,
 this code doesn’t lend itself to closing any prev view instance that might be attached to DOM el we want to populate. And we’ve seen danger of zombie views already.

 To solve these problems, Marionette providesRegion object - object that manages lifecycle of individual views, displayed inparticular DOM el.

 // createregion instance, telling it which DOM el to manage
 myReg = new Ma.Reg({ el: '#cont' })

 // show a view in region

 v1 = new MyVw({});  myReg.show(v1)

 v2 = new MyVw({}) // somewhere else in code, show dif view
 myReg.show(v2)


 There are several things to note, here.
 First, we’re telling reg what DOM el to manage by specifying el in region instance.

 Second, we’re no longer calling render met on our views.
 And lastly, we’re not calling close on our view, either, though this is getting called for us.


 When we useregion to manage lifecycle of our views, and display views in DOM, region itself handles these concerns.
 By passing a vw inst into show met of region, it will call render met on view for us.
 It will then take resulting el of view and populate DOM el.

 The next time we call show met of region, region remembers that it is currently displayingview.
 The region calls close met on view,
 rms it from DOM, and then proceeds to run render & display code for new view that was passed in.

 Since region handles calling close for us, and we’re using l2 event binder in our view instance, we no longer have to worry about zombie views in our app.

 Regions are not limited to just Marionette views, though. Any valid Bb.Vw can be managed byMarionette.Region. If your view happens to haveclose met,
 it will be called when view is closed. If not, Bb.Vw built-in met, rm, will be called instead.

 Marionette Td app
 Having learned about Marionette’s high-level concepts, let’s explore refactoring Td app we created in our first exercise to use it.
 The complete code for this app can be found in Derick’s TdMVC fork.

 Our final impl will be visually and fnally equivalent to original app, as seen below.


 First, we define app object reping our base TdMVC app. This will contain init code and define default layout regions for our app.

 TdMVC.js:

 TdMVC = new Bb.Ma.Application();

 TdMVC.addRegions({  header: '#header',  main: '#main',  footer: '#footer'});

 TdMVC.on('start', fn() {  Bb.history.start();});

 Regions are used to manage content that’s displayed within  spec els, and addRegions met on TdMVC object is justshortcut for creating Region objects.
 We supply jQ selector for each region to manage (e.g., #header, #main, and #footer) and then tell region to show various bb views within that region.

 Once app object has been initd, we call Bb.history.start() to route initial URL.

 Next, we define our Layouts. A layout isspecialized type of view that directly extends Marionette.ItemVw.
 This means it’s intended to rendersingle tp and may or may not havemd (or item) associated with tp.

 One of main difs betweenLayout and ItemVw is that layout contains regions. When definingLayout,
 we supply it with bothtp and regions that tp contains. After rendering layout, we can display other views within layout using regions that were defined.

 In our TdMVC Layout module below, we define Layouts for:

 Header: where we can create new Tds
 Footer: where we summarize how many Tds are remaining/have been completed
 This captures some of view logic that was prevly in our AppVw and TdVw.

 Note that Marionette modules (such as below) offer
 simple module system which is used to create privacy and encapsulation in Marionette apps.

 TdMVC.Layout.js:

 TdMVC.module('Layout', fn(Layout, App, bb, Marionette, $, _) {

 // Layout Header Vw
 // ------------------

 Layout.Header = Bb.Marionette.ItemV.x({
 tp: '#tp-header',

 // UI Bindings create cached atts that
 // point to jQ selected objects.
 ui: { input: '#new-td' },

 evs: {      'keypress #new-td': 'onInputKeypress',
 'blur #new-td': 'onTdBlur' },

 onTdBlur: fn(){      tdText = this.ui.input.val().trim();   this.createTd(tdText) },

 onInputKeypress: fn(e) {ENTER_KEY = 13;
 tdText = this.ui.input.val().trim();      if ( e.which === ENTER_KEY && tdText ) {  this.createTd(tdText) } },
 completeAdd: fn(){ this.ui.input.val('')  },
 createTd: fn(tdText) {
 if (tdText.trim() === ""){ return }
 this.cl.create({      tt: tdText      });
 this.completeAdd() }
 })

 // Layout Footer Vw

 Layout.Footer = Marionette.Layout.x({
 tp: '#tp-footer',

 // UI Bindings create cached atts that point to jQ selected objects.

 ui: {
 tdCount: '#td-count .count',
 tdCountLabel: '#td-count .label',
 clearCount: '#clear-completed .count',
 filters: "#filters a" },

 ev: {      "click #clear-completed": "onClearClick"   },
 i: fn(){ this.bindTo( App.vent, "tdList: filter", this.updateFilterSelection, this );    this.bindTo( this.cl, 'all', this.updateCount, this )   },

 onRender: fn(){this.updateCount()},

 updateCount: fn(){
 activeCount = this.cl.getActive()[0],
 completedCount = this.cl.getCompleted()[0];
 this.ui.tdCount.h(activeCount);
 this.ui.tdCountLabel.h(activeCount === 1 ? 'item' : 'items');
 this.ui.clearCount.h(completedCount === 0 ? '' : '(' + completedCount + ')') },

 updateFilterSelection: fn( filter ) {      this.ui.filters.xK('selected').filter( '[href="#' + filter + '"]').K( 'selected' )    },
 onClearClick: fn() {      completed = this.cl.getCompleted();    completed.forEach(fn destroy(td) {     td.destroy();});   }  })
 })


 Next, we tackle app routing and workflow, such as controlling Layouts in page which can be shown or hidden.

 Recall how bb routes trigger mets within Router as shown below in our original Workspace router from our first exercise:

 Workspace = Bb.Rt.x({
 routes: {      '*filter': 'setFilter'    },

 setFilter: fn(param) {
 // Set current filter to be used
 window.app.TdFilter = param.trim() || '';

 // Triggercl filter event, causing hiding/unhiding
 // of Td view items
 window.app.Tds.trigger('filter');
 }
 })

 Ma uses concept of AppRouter to simplify routing.  This reduces boilerplate for handling route evs and allows routers to be configured to call mets on object directly.
 We configure our AppRouter using appRoutes which replaces '*filter': 'setFilter' route defined in our original router and invokesmet on our Controller.

 The TdList Controller, also found in this next code block,
 handles some of remaining visibility logic originally found in AppVw and TdVw,
 albeit using very readable Layouts.

 TdMVC.TdList.js:

 TdMVC.module('TdList', fn(TdList, App, bb, Marionette, $, _) {

 // TdList Router
 // ---------------
 //
 // Handle routes to show active vs complete td items


 TdList.Router = Marionette.AppRouter.x({    appRoutes: {      '*filter': 'filterItems'    }  })

 // TdList Controller (Mediator)
 // ------------------------------
 //
 // Control workflow and logic that exists at app level, above impl detail of views and mds



 TdList.Controller=fn(){this.tdList=new App.Tds.TdList()}

 _.x(TdList.Controller.prototype, {

 // Start app by showing appropriate views and fetching list of td items, if there are any

 start: fn() {      this.showHeader(this.tdList);  this.showFooter(this.tdList);
 this.showTdList(this.tdList); App.bindTo(this.tdList, 'reset add rm', this.toggleFooter, this);   this.tdList.fetch() },


 showHeader: fn(tdList) {header = new App.Layout.Header({cl: tdList}); App.header.show(header)},
 showFooter: fn(tdList) {footer = new App.Layout.Footer({cl: tdList}); App.footer.show(footer)},
 showTdList: fn(tdList) {App.main.show(new TdList.Vws.ListVw({cl: tdList      }))    },
 toggleFooter: fn(){App.footer.$el.toggle(this.tdList[0])},
 filterItems: fn(filter){App.vent.trigger('tdList:filter', filter.trim() || '')} // Set filter to show complete or all items
 })


 // TdList Initializer
 // --------------------
 // Get TdList up and running by initializing mediator when app is started, pulling in all of the existing Td items and displaying them.

 TdList.addInitializer(fn() {
 controller = new TdList.Controller();
 new TdList.Router({ controller: controller    })
 controller.start()  })

 })



 Ma’s philosophy on routers   is that they should be afterthought in impl of apps.
 Quite often, we’ve seen developers abuse bb’s routing system
 by making it sole controller of entire app workflow and logic.
 This inevitably leads to mashing every possible combination of code into router mets
 - view creation, md loading, coordinating  dif parts of app, etc.

 bb’s router and history exist to deal with spec aspect of  bws - managing forward and back bts.
 should be limited to that, with code that gets execd by navigation being somewhere else.
 This allows app to be used with or withoutrouter.   We can callcontroller’s “show” met frombt click, from app event handler, or fromrouter,
 and we will end up with same app state no matter how we called that met.


 CompositeVw
 Our next task is defining actual views for indiv Td items and lists of items in our TdMVC app. For this, we make use of Marionette’s CompositeVws.
 The idea behindCompositeVw is that it repsvisualization ofcomposite or hierarchical structure of leaves (or nodes) and branches.

 Think of these views as being a hier of parent-child mds, and recursive by default.
 The same CompositeVw type will be used to render each item incl that is handled by composite view.
 For non-recursive hierarchies, we are able to override item view by defining itemVw attr.

 For our Td List Item Vw, we define it as ItemVw, then our Td List Vw isCompositeVw where we override itemVw setting and tell it to use Td List Item Vw for each item in cl.

 TdMVC.TdList.Vws.js

 TdMVC.module('TdList.Vws', fn(Vws, App, bb, Marionette, $, _) {

 // Td List Item Vw
 // -------------------
 //
 // Display individual td item, and respond to changes
 // that are made to item, including marking completed.

 Vws.ItemVw = Marionette.ItemV.x({
 tagName: 'li',
 tp: '#tp-tdItemVw',

 ui: {        edit: '.edit'   },
 evs: {        'click .destroy': 'destroy',        'dblclick label': 'onEditClick',        'keypress .edit': 'onEditKeypress',        'blur .edit'    : 'onEditBlur',        'click .toggle' : 'toggle'  },
 i: fn() {        this.bindTo(this.md, 'change', this.render, this);  },
 onRender: fn() {
 this.$el.xK( 'active completed' );
 if ( this.md.get( 'completed' )) {          this.$el.K( 'completed' );       } else {          this.$el.K( 'active' );      }      },
 destroy: fn() {        this.md.destroy()   },
 toggle: fn() {        this.md.toggle().save();  },
 onEditClick: fn() {        this.$el.K('editing');        this.ui.edit.focus();    },
 updateTd : fn() {        tdText = this.ui.edit.val();
 if (tdText === '') {          return this.destroy();  }
 this.setTdText(tdText);       this.completeEdit();    },
 onEditBlur: fn(e){        this.updateTd();   },

 onEditKeypress: fn(e) {        ENTER_KEY = 13;
 tdText = this.ui.edit.val().trim();
 if ( e.which === ENTER_KEY && tdText ) {          this.md.set('tt', tdText).save();          this.$el.xK('editing');      }    },

 setTdText: fn(tdText){        if (tdText.trim() === ""){ return; }
 this.md.set('tt', tdText).save();   },

 completeEdit: fn(){        this.$el.xK('editing')    }
 })


 // Item List Vw  // Controls rendering of list of items, including the filtering of active vs completed items for display.

 Vws.ListVw = Bb.Marionette.CompositeV.x({
 tp: '#tp-tdListCompositeVw',     childVw: Vws.ItemVw,      childVwContainer: '#td-list',
 ui: {toggle: '#toggle-all'},
 ev: {'click #toggle-all': 'onToggleAllClick'},
 i: fn(){this.bindTo(this.cl, 'all', this.update, this)  },
 onRender: fn(){this.update()},
 update: fn(){ fn reduceCompleted(left, right){return left && right.get('completed')}
 allCompleted = this.cl.reduce(reduceCompleted,true);      this.ui.toggle.prop('checked', allCompleted); this.q.pa().gg(!!this.cl[0])},
 onToggleAllClick: fn(e){isChecked = e.currentTarget.checked; this.cl.each(fn(td){td.save({'completed': isChecked})})}
 })


 // Application Event Handlers // Handler for filtering list of items by showing and hiding through use of various CSS classes
 App.vent.on('tdList:filter',fn(filter) { filter = filter || 'all';    $('#tdapp').attr('class', 'filter-' + filter)  })
 })


 At end of last code block, you will also notice event handler using vent.
 This is event aggregator that allows us to handle filterItem triggers from our TdList controller.

 Finally,
 we define md and cl for reping our Td items.
 These are semantically not very  dif from original versions we used in our first exercise and have been re-written to better fit in with
 Derick’s preferred style of coding.


 TdMVC.Tds.js:

 TdMVC.module('Tds', fn(Tds, App, bb, Marionette, $, _) {

 // Local Variables
 // ---------------

 localStorageKey = 'tds-backbone-marionettejs';

 // Td Md
 Tds.Td = Bb.Md.x({
 localStorage: new Bb.LocalStorage(localStorageKey),
 df: {      tt: '',   completed: false,    created: 0 },
 i: fn() {      if (this.isNew()) {        this.set('created', Date.now())  }  },
 toggle: fn() {      return this.set('completed', !this.isCompleted())  },
 isCompleted: fn() {  return this.get('completed') } })

 // Td Cl
 Tds.TdList = Bb.Cl.x({
 md: Tds.Td,
 localStorage: new Bb.LocalStorage(localStorageKey),
 getCompleted: fn() {      return this.filter(this._isCompleted) },
 getActive: fn() {      return this.reject(this._isCompleted)  },
 comparator: fn(td) {      return td.get('created')    },
 _isCompleted: fn(td) {      return td.isCompleted()   }
 })
 })


 We finally kick-start everything off in our app index file, by calling start on our main app object:

 Initialization:      $(fn() {        TdMVC.start()  }) // Start TdMVC app (defined in js/TdMVC.js)


 ///////


 Working With Nested Vws


 What is best approach for rendering and appending nested Vws (or Subviews) in Bb.js?

 Sol 1

 Since pages are composed of nested els and bb views correspond to els within page, nesting views is intuitive approach to managinghierarchy of els.

 The best way to combine views is simply using:

 this.$('.someContainer').A(innerVw.el);
 which just relies on jQ. We could use this inreal example as follows:



 init : fn () {},
 render : fn () {

 this.$el.E()
 this.innerVw1 = new Subview({ops});
 this.innerVw2 = new Subview({ops});

 this.$('.inner-view-container')
 .A(this.innerVw1.el)
 .A(this.innerVw2.el);
 }

 Sol 2

 Beginners sometimes also try using setElement to solve this problem, however keep in mind that using this met is easy way to shoot yourself in foot.
 Avoid using this approach when first sol isviable option:


 // Where we have prevly definedVw, SubVw
 // inparent Vw we could do:

 ...
 init : fn () {

 this.innerVw1 = new Subview({ops});
 this.innerVw2 = new Subview({ops});
 },

 render : fn () {

 this.$el.h(this.tp());

 this.innerVw1.setElement('.some-el1').r();
 this.innerVw2.setElement('.some-el2').r();
 }
 Here we are creating subviews in parent view’s init() met and rendering subviews in parent’s r() met.
 The els managed by subviews exist in parent’s tp and Vw.setElement() met is used to re-assign el associated with each subview.

 setElement() changesview’s el, including re-delegating event handlers by removing them from old el and binding them to new el.
 Note that setElement() returns view, allowing us to chain call to r().

 This works and has some positive qualities: you don’t need to worry about maintaining order of your DOM els when appending,
 views are initd early, and r() met doesn’t need to take on too many responsibilities at once.

 Unfortunately, downsides are that you can’t set tagName property of subviews and evs need to be re-delegated. The first sol doesn’t suffer from this problem.

 Sol 3

 OuterVw = Bb.V.x({

 i: fn(){this.inner = new InnerVw() },

 r: fn() {
 // Detach InnerVw before reseting OuterVw's $el
 this.inner.$el.detach();

 // or this.$el.E() if you have no tp
 // this.$el.h(tp);

 this.$el.A(this.inner.$el);
 }
 });

 InnerVw = Bb.V.x({r: fn() {  this.$el.h(tp)} })

 This tackles spec design decisions:

 The order in which you append sub-els matters
 The OuterVw doesn’t contain HTML els to be set in InnerVw(s), -> we can still spec tagName in InnerVw
 r()  called after InnerVw el has been placed into DOM.

 common use case: InnerVw’s r() met sizing itself on page based on dims of other el.


 -InnerVw needs to call Vw.delegateEvents() to bind its ev hlrs to new DOM since
 it is replacing content of its el.

 Sol 4  A better sol, which is more clean but has potential to affect performance is:
 OuterVw = Bb.V.x({
 i: fn(){this.r()},
 r: fn(){
 this.$el.h(tp); // or this.$el.E() if you have no tp
 this.inner = new InnerVw();        this.$el.A(this.inner.$el) }})

 InnerVw = Bb.V.x({    i: fn(){this.r()},    r: fn(){this.$el.h(tp)} })

 Sol 5

 If multiple views need to be nested at particular locs intp,hash of child views indexed by child view cids’ should be created.
 In tp, usecust HTML attr named data-view-cid to create placeholder els for each view to embed.
 Once tp has been rendered and its output appended to parent view’s $el, each placeholder can be queried for and replaced with child view’s el.

 A sample impl containingsingle child view could be written:


 OuterVw = Bb.V.x({
 i: fn() {
 this.children = {};
 this.child = new Bb.Vw();
 this.children[this.child.cid] = this.child;
 },

 r: fn() {
 this.$el.h('<div data-view-cid="' + this.child.cid + '"></div>');
 _.e(this.children, fn(view, cid) {
 this.$('[data-view-cid="' + cid + '"]').replaceWith(view.el);
 }, this);
 }
 };


 The use of cids (client ids) here is useful because it illustrates separatingmd and its views by having views referenced by their instances and not their atts.
 It’s quite common to ask for all views that satisfy attr on their mds, but if you have recursive subviews or repeated views (a common occurrence),
 you can’t simply ask for views by atts. That is, unless you specify additional atts that separate duplicates. Using cids solves this problem as it allows for direct references to views.

 Generally speaking, more developers opt for Sol 1 or 5 as:

 The majority of their views may already rely on being in DOM in their r() met
 When OuterVw is re-rendered, views don’t have to be re-initd where re-init has potential to cause memory leaks and issues with existing bindings
 The bb extensions Marionette and Thorax provide logic for nesting views, and rendering cls where each item has associated view.
 Marionette provides APIs in JavaScript while Thorax provides APIs via Handlebars tp helpers. We will examine both of these in upcoming chapter.

 (Thanks to Lukas and Ian Taylor for these tips).



 What is best way to manage mds in nested views?

 In order to reach atts on related mds innested setup,
 mds require some prior knowledge of each other,
 something which bb doesn’t implicitly handle out of box.
 One approach is to make sure each child md has‘parent’ attr.
 This way you can traverse nesting first up to parent and then down to any siblings that you know of.
 So, assuming we have mds mdA, mdB and mdC:

 // When initializing mdA, I would suggest settinglink to parent
 // md when doing this, like this:

 MdA = Bb.Md.x({

 i: fn(){
 this.mdB = new mdB();
 this.mdB.parent = this;
 this.mdC = new mdC();
 this.mdC.parent = this;
 }
 }
 This allows you to reach parent md in any child md fn through this.parent.

 Now, we have already discussedfew ops for how to construct nested Vws using Bb. For sake of simplicity,
 let us imagine that we are creatingnew child view VwB from within init() met of VwA below. VwB can reach out over VwA md and listen out for changes on any of its nested mds.

 See inline for comments on exactly what each step is enabling:


 // Define Vw A
 VwA = Bb.V.x({

 i: fn(){
 // Create instance of Vw B
 this.viewB = new VwB();

 // Createreference back to this (parent) view
 this.viewB.parentVw = this;

 // Append VwB to VwA
 $(this.el).A(this.viewB.el);
 }
 });

 // Define Vw B
 VwB = Bb.V.x({

 //...,

 i: fn(){
 // Listen for changes to nested mds in our parent VwA
 this.l2(this.md.parent.mdB, "change", this.render);
 this.l2(this.md.parent.mdC, "change", this.render);

 // We can also call any met on our parent view if it is defined
 // $(this.parentVw.el).shake();
 }

 });

 // Create instance of VwA with MdA
 // viewA will create its own instance of VwB
 // from inside init() met
 viewA = new VwA({ md: MdA });
 Rendering A Parent Vw From A Child Vw
 Problem

 How would one renderParent Vw from one of its Children?

 Sol

 Inscenario where you haveview containing another view, such asphoto gallery containingbigr view modal,
 you may find that you need to render or re-render parent view from child. The good news is that solving this problem is quite straight-forward.

 The simplest sol is to just use this.parentVw.r();.

 If however inversion of control is desired, evs may be used to provide equally valid sol.

 Say we wish to begin rendering whenparticular event has occurred. For sake of example, let us call this event ‘somethingHappened’.
 The parent view can bind notifications on child view to know when event has occurred. It can then render itself.

 In parent view:

 // Parent init
 this.l2(this.childVw, 'somethingHappened', this.render);

 // Parent removal
 this.stopListening(this.childVw, 'somethingHappened');
 In child view:


 // After event has occurred
 this.trigger('somethingHappened');
 The child will trigger“somethingHappened” event and parent’s render fn will be called.





 Where your app is setup with multiple Parent and Child Vws,
 it is also common to desire removing any DOM els associated with such views
 as well as unbinding any event handlers tied to child els when you no longer require them.
 The sol in last question should be enough to handle this use case,
 but if you require more explicit example that handles children,
 we can see one below:


 Bb.Vw.prototype.close = fn(){if(this.onClose){this.onClose()};     this.rm()}


 NewVw = Bb.V.x({
 i: fn() {       this.childVws = [] },

 renderChildren: fn(item) {
 itemVw = new NewChildVw({ md: item });
 $(this.el).prepend(itemVw.r());
 this.childVws.push(itemVw);
 },

 onClose: fn() {      _(this.childVws).each(fn(view) {       view.close()      })}
 })


 NewChildVw = Bb.V.x({   tagName: 'li',    r: fn() {    }});


 Here,close() met for views is implemented which disposes ofview when it is no longer needed or needs to be reset.

 In most cases, view removal should not affect any associated mds. For example, if you are working onblogging app and you rm
 view with comments, perhaps another view in your app showsselection of comments and resetting cl would affect those views as well.

 (Thanks to dira for this tip)

 Note: You may also be interested in reading about Marionette Composite Vws in Extensions part of book.

 Rendering Vw Hierarchies
 Problem

 Let us say you have Cl, where each item in Cl could itself beCl.
 You can render each item in Cl,  and indeed can render any items which themselves are Cls.


 The problem you might have is how to render HTML that reflects hier  nature of data structure.

 CompositeVw   can rendermd andcl within same view.

 It can rendersingle md with tp.
 It can also take cl from that md and for each md in that cl, renderview.
 By default it uses same composite view type that you’ve defined to render each of mds in cl.
 All you have to do is tell view instance where cl is,
 via init met, and you’ll getrecursive hierarchy rendered.




 Working With Nested Mds Or Cls


 As we’ve seen,
 it’s common to create cls reping groups of mds using Bb.
 It’s also however common to wish to nest cls within mds, depending on type of app you are working on.


 Take for example Building md that contains many Room mds which could sit inRooms cl.

 You could exposethis.rooms cl for each building,
 allowing you to lazy-load rooms oncebuilding has been opened.


 Building = Bb.Md.x({ i: fn(){  this.rooms = new Rooms;  this.rooms.url = '/building/' + this.id + '/rooms';      this.rooms.on("reset", this.updateCounts) }  })


 // Createnew building md
 townHall = new Building;

 // once opened, lazy-load rooms
 townHall.rooms.fetch({reset: true});
 There are alsonumber of bb plugins which can help with nested data structures, such as bb Relational. This plugin handles one-to-one,
 one-to-many and many-to-one relations between mds for bb and has some excellent documentation.

 Better Md Property Validation
 Problem

 As we learned earlier in book,
 validate met on Md is called by set
 (when validate option is set) and save.
 It is passed md atts updated with vals passed to these mets.


 By default, when we define cust validate met,
 bb passes all of md’s atts through this validation each time,
 regardless of which md atts are being set.

 This means that it can be challenge to determine which
 spec fields are being set or
 validated without being concerned about others that aren’t being set at same time.

 Sol

 To illustrate this problem better, let us look attypical registration form use case that:

 Validates form fields using blur event
 Validates each field regardless of whether other md atts (i.e., other form data) are valid or not.
 Here is one example ofdesired use case:

 We haveform whereuser focuses and blurs first name, last name,
 and email HTML input boxes without entering any data.
 A “this field is required” message should be presented next to each form field.



 HTML:

 <!doctype html>
 <html>
 <head>
 <meta charset=utf-8>
 <tt>Form Validation - Md#validate</tt>
 <script src='http://code.jquery.com/jquery.js'></script>
 <script src='http://underscorejs.org/underscore.js'></script>
 <script src='http://backbonejs.org/backbone.js'></script>
 </head>
 <body>
 <form>
 <label>First Name</label>
 <input name='fN'>
 <span data-msg='fN'></span>
 <br>
 <label>Last Name</label>
 <input name='lastname'>
 <span data-msg='lastname'></span>
 <br>
 <label>Email</label>
 <input name='email'>
 <span data-msg='email'></span>
 </form>
 </body>
 </html>

 Basic validation
 that could be written using current bb validate met
 to work with this form could be implemented using something like:

 vld: fn(attrs) {

 if(!attrs.fN) return 'first name is empty';
 if(!attrs.lastname) return 'last name is empty';
 if(!attrs.email) return 'email is empty';

 }


 Unfortunately, this met would triggerfN error
 each time any of fields were blurred and only error message next to first name field would be presented.

 One potential sol to problem is to validate all fields and return all of errors:

 vld: fn(attrs) {
 errors = {};

 if (!attrs.fN) errors.fN = 'first name is empty';
 if (!attrs.lastname) errors.lastname = 'last name is empty';
 if (!attrs.email) errors.email = 'email is empty';

 if (!_.isEmpty(errors)) return errors;
 }
 This can be adapted intosol that definesField md for each input in our form and works within pams of our use case as follows:


 $(fn($) {
 User = Bb.Md.x({
 vld: fn(attrs) {      errors = this.errors = {};
 if (!attrs.fN) errors.fN = 'fN is required';
 if (!attrs.lastname) errors.lastname = 'lastname is required';
 if (!attrs.email) errors.email = 'email is required';
 if (!_.isEmpty(errors)) return errors  }  })

 Field = Bb.V.x({    evs: {blur: 'validate'},
 i: fn() {      this.name = this.$el.attr('name');      this.$msg = $('[data-msg=' + this.name + ']')    },
 vld: fn() {      this.md.set(this.name, this.$el.val(), {vld: true});
 this.$msg.text(this.md.errors[this.name] || '')    }  })

 user = new User;
 $('input').each(fn() {    new Field({el: this, md: user}) })

 })


 This works fine as sol checks validation for each attr individually and sets message for correct blurred field.
 A demo of above by [@braddunbar](http://github.com/braddunbar) is also avail.

 Unfortunately, this sol does perform validation on all fields every time, even though we are only displaying errors for field that has changed.
 If we have multiple client-side validation mets, we may not want to have to call each validation met on every attr every time, so this sol might not be ideal for everyone.


 Bb.validateAll
 A potentially better alternative to above is to use [@gfranko](http://github.com/@franko)’s Bb.validateAll plugin,
 specally created to validate  spec Md pops (or form fields) without worrying about validation of any other Md pops (or form fields).


 Here is how we would set up partial User Md and validate met using this plugin for our use case:


 // Createnew User Md
 User = Bb.Md.x({


 patterns: {
 specialCharacters: '[^a-zA-Z 0-9]+',
 digits: '[0-9]',
 email: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9][a-zA-Z0-9.-]*[.]{1}[a-zA-Z]{2,6}$' },


 // Validators
 validators: {
 minLength: fn(val, minLength) {  return val.length >= minLength },
 maxLength: fn(val, maxLength) {            return val.length <= maxLength          },
 isEmail: fn(val) {            return User.prototype.validators.pattern(val, User.prototype.patterns.email)          },
 hasSpecialCharacter: fn(val) {            return User.prototype.validators.pattern(val, User.prototype.patterns.specialCharacters) },



 // We can determine which pops are getting validated by checking to see if pops are equal to null

 vld: fn(attrs) {          errors = this.errors = {};

 if(attrs.fN != null) {
 if (!attrs.fN) {
 errors.fN = 'fN is required';
 $l('first name isEmpty validation called');
 }

 else if(!this.validators.minLength(attrs.fN, 2))
 errors.fN = 'fN too short';
 else if(!this.validators.maxLength(attrs.fN, 15))
 errors.fN = 'fN too big';
 else if(this.validators.hasSpecialCharacter(attrs.fN)) errors.fN = 'fN cannot contain special characters';
 }

 if(attrs.lastname != null) {

 if (!attrs.lastname) {
 errors.lastname = 'lastname is required';
 $l('last name isEmpty validation called');
 }


 else if(!this.validators.minLength(attrs.lastname, 2))
 errors.lastname = 'lastname is too short';
 else if(!this.validators.maxLength(attrs.lastname, 15))
 errors.lastname = 'lastname is too big';
 else if(this.validators.hasSpecialCharacter(attrs.lastname)) errors.lastname = 'lastname cannot contain special characters';

 }


 This allows logic inside of our validate mets to determine which form fields are currently being set/validated, and ignore md pops that are not being set.

 It’s fairly straight-forward to use as well.
 We can simply definenew Md instance and then set data on our md using validateAll option to use behavior defined by plugin:

 user = new User();
 user.set({ 'fN': 'Greg' }, {vld: true, validateAll: false});
 That’s it. The Bb.validateAll logic doesn’t override default bb logic by default and so it’s perfectly capable
 of being used for scenarios where you might care more about field-validation performance as well as those where you don’t.
 Both sols presented in this section should work fine however.

 Bb.Validation
 As we’ve seen, validate met bb offers is undefined by default and you need to override it with your own cust validation logic to get md validation in place.
 Often developers run into issue of implementing this validation as nested ifs and elses, which can become unmaintainable when things get complicated.

 Another helpful plugin for bb called Bb.Validation attempts to solve this problem by offering extensible way to
 declare validation rules on md and overrides validate met behind scenes.

 One of useful mets this plugin includes is (pseudo) live validation viapreValidate met.
 This can be used to check on key-press if input formd is valid without changing md itself.
 You can run any validators formd attr by calling preValidate met, passing it name of attr along with val you would like validated.

 // If val of attr is invalid,truthy error message is returned
 // if not, it returnsfalsy val


 errorMsg = user.preValidate('fN', 'Greg');
 Form- spec validation classes
 That said, most optimal sol to this problem may not be to stick validation in your md atts. Instead, you could havefn
 specally designed for validating spec form and there are many good JavaScript form validation libraries out there that can help with this.

 If you want to stick it on your md, you can also make itclass fn:

 User.validate = fn(formElement) {};

 For more information on validation plugins avail for bb, see bb wiki.

 Avoiding Conflicts With Multiple bb Versions

 Problem
 In instances out of your control, you may have to work around having more than one version of bb in same page. How do you work around this without causing conflicts?

 Sol

 Like most client-side projects, bb’s code is wrapped in immediately-invoked fn expression:

 (fn(){
 // Bb.js
 }).call(this);
 Several things happen during this configuration stage.
 A bb namespace is created, and multiple versions of bb on same page are supported through noConflict mode:

 root = this;
 prevbb = root.bb;

 Bb.noConflict = fn() {
 root.bb = prevbb;
 return this;
 };

 Multiple versions of bb can be used on same page by calling noConflict like this:

 bb19 = Bb.noConflict();

 // bb19 refers to most recently loaded version,
 // and `window.bb` will be restored to prevly
 // loaded version

 Building Md And Vw Hierarchies



 How does inheritance work with bb?
 How can I share code between similar mds and views? How can I call mets that have been overridden?
 For its inheritance, bb internally uses inherits fn inspired by goog.inherits,
 Google’s impl from Closure Lib.
 It’s basicallyfn to correctly setup prototype chain.

 inherits = fn(parent, protoProps, staticProps) {


 The only major dif here is that bb’s API accepts two objects containing instance and static mets.

 Following on from this, for inheritance purposes all of bb’s objects contain extend met as follows:

 Md.extend = Cl.extend = Router.extend = Vw.extend = extend;
 Most development with bb is based around inheriting from these objects,
 and they’re designed to mimic classical object-oriented impl.

 The above isn’t quite same as ECMAScript 5’s Object.create, as it’s actually copying pops (mets and vals)
 from one object to another. As this isn’t enough to support bb’s inheritance and class md,
 following steps are performed:

 The instance mets are checked to see if there’sconstructor property.
 If so, class’s constructor is used, otherwise parent’s constructor is used (i.e., Bb.Md)

 Underscore’s extend met is called to add parent class’s mets to new child class
 The prototype property of blank constructor fn is assigned with parent’s prototype,
 and new instance of this is set to child’s prototype property

 Underscore’s extend met is called twice to add static and instance mets to child class
 The child’s prototype’s constructor and__super__ property are assigned
 This pattern is also used for classes in CoffeeScript, so bb classes are compatible with CoffeeScript classes.
 extend can be used forgreat deal more and developers who are fans of mixins will like that it can be used for this too.
 You can define fnality on any cust object, and then quite literally copy & paste
 all of mets and atts from that object tobb one:

 For example:

 MyMixin = {  foo: 'bar',  sayFoo: fn(){alert(this.foo) }}

 MyVw = Bb.V.x({})

 _.x(MyVw.prototype, MyMixin);

 myVw = new MyVw();
 myVw.sayFoo(); //=> 'bar'
 We can take this further and also apply it to Vw inheritance. The following is example of how to extend one Vw using another:

 Panel = Bb.V.x({ })

 PanelAdvanced = Panel.x({})

 Calling Overridden Methods

 However, if you have init() met in Panel, then it won’t be called if you also have init() met in PanelAdvanced, so you would have to call Panel’s init met explicitly:

 Panel = Bb.V.x({
 i: fn(ops){
 $l('Panel initd');
 this.foo = 'bar';
 }
 });

 PanelAdvanced = Panel.x({
 i: fn(ops){
 Panel.prototype.init.call(this, ops);
 $l('PanelAdvanced initd');
 $l(this.foo); // Log: bar
 } })


 // We can also inherit PanelAdvanced if needed
 PanelAdvancedExtra = PanelAdvanced.x({
 i: fn(ops){
 PanelAdvanced.prototype.init.call(this, ops);
 $l('PanelAdvancedExtra initd');
 } })

 new Panel();
 new PanelAdvanced();
 new PanelAdvancedExtra();
 This isn’t most elegant of sols because if you havelot of Vws that inherit from Panel, then you’ll have to remember to call Panel’s init from all of them.

 It’s worth noting that if Panel doesn’t have init met now but you choose to add it in future,
 then you’ll need to go to all of inherited classes in future and make sure they call Panel’s init.

 So here’s alternative way to define Panel so that your inherited views don’t need to call Panel’s init met:

 Panel = fn (ops) {
 // put all of Panel's init code here
 $l('Panel initd');
 this.foo = 'bar';

 Bb.Vw.apply(this, [ops]);
 };

 _.x(Panel.prototype, Bb.Vw.prototype, {
 // put all of Panel's mets here. For example:
 sayHi: fn () {
 $l('hello from Panel');
 }
 });

 Panel.extend = Bb.Vw.extend;

 // other classes then inherit from Panel like this:
 PanelAdvanced = Panel.x({
 i: fn (ops) {
 $l('PanelAdvanced initd');
 $l(this.foo);
 }
 });

 panelAdvanced = new PanelAdvanced(); //Logs: Panel initd, PanelAdvanced initd, bar
 panelAdvanced.sayHi(); // Logs: hello from Panel
 When used appropriately, Underscore’s extend met can savegreat deal of time and effort writing redundant code.

 (Thanks to Alex Young, Derick Bailey and JohnnyO for heads up about these tips).

 bb-Super

 bb-Super by Lukas Olson adds*super* met to Bb.Md using John Resig’s Inheritance script.
 Rather than using Bb.Md.prototype.set.call as per Bb.js documentation,
 super can be called instead:

 // This is how we normally do it
 OldFashionedNote = Bb.Md.x({
 set: fn(atts, ops) {
 // Call parent's met
 Bb.Md.prototype.set.call(this, atts, ops);
 // some cust code here
 // ...
 }
 });

 After including this plugin, you can do same thing with following syntax:

 // This is how we can do it after using bb-super plugin
 Note = Bb.Md.x({
 set: fn(atts, ops) {
 // Call parent's met
 this._super(atts, ops);
 // some cust code here
 // ...
 }
 })




 Event Aggregators And Mediators - How do I channel multiple event sources throughsingle object?

 It’s common for developers to think of Mediators when faced with this problem,
 so let’s explore what Event Aggregator is,
 what Mediator pattern is and how they differ.

 When it comes to Mediator and Event Aggregator patterns,
 there are some times where it may look like patterns are interchangeable due to impl similarities.
 However, semantics and intent of these patterns are very  dif.
 And even if impls both use some of same core constructs,
 I believe there isdistinct dif between them.
 I also believe they should not be interchanged or confused in communication because of difs.



 Event Aggregator
 The core idea of Event Aggregator, according to Martin Fowler,
 is to channel multiple event sources throughsingle object so that other objects
 needing to subscribe to evs don’t need to know about every event source.

 bb’s Event Aggregator
 The easiest event aggregator to show is that of Bb.js – it’s built into bb object directly.

 Vw1 = Bb.V.x({
 // ...

 ev: {    "click .foo": "doIt"  },

 doIt: fn(){
 // trigger event through event aggregator
 Bb.trigger("some:event");
 }
 })

 Vw2 = Bb.V.x({
 // ...

 i: fn(){
 // subscribe to event aggregator's event
 Bb.on("some:event", this.doStuff, this);
 },

 doStuff: fn(){
 // ...
 }
 })
 In this example, first view is triggering event whenDOM el is clicked. The event is triggered through bb’s built-in event aggregator – bb object.
 Of course, it’s trivial to create your own event aggregator in bb,
 and there are some key things that we need to keep in mind when using event aggregator, to keep our code simple.

 jQ’s Event Aggregator

 Did you know that jQ hasbuilt-in event aggregator? They don’t call it this, but it’s in there and it’s scoped to DOM evs. It also happens to look like bb’s event aggregator:

 $("#mainArticle").on("click", fn(e){

 // handle click event on any el underneath our #mainArticle el

 })

 This code sets up ev handler fn that waits for unknown number of ev sources to trigger“click” event,
 and it allows any number of listeners to attach to evs of those event publishers. jQ just happens to scope this event aggregator to DOM.




 Mediator
 A Mediator is object that coordinates interactions (logic and behavior) between multiple objects.
 It makes decisions on when to call which objects, based on actions (or inaction) of other objects and input.

 mediator = {};
 The purpose of mediator is to control workflow between objects
 and we really don’t need anything more than object literal to do this.

 orgChart = {

 addNewEmployee: fn(){

 employeeDetail = this.getEmployeeDetail()  // getEmployeeDetail providesview that users interact with
 employeeDetail.on("complete", fn(employee){  // when employee detail is complete, mediator (the 'orgchart' object) decides what should happen next
 managerSelector = this.selectManager(employee) // set up additional objects that have additional evs, which are used by mediator to do additional things
 managerSelector.on("save", fn(employee){ employee.save() })

 }) } }


 This example shows very basic impl of mediator object
 with bb-based objects that can trigger and subscribe to evs.
 I’ve often referred to this type of object as“workflow” object in past,
 but truth is that it ismediator.

 It is object that handles workflow between many other objects,    aggregating responsibility of that workflow knowledge intosingle object.
 The result is workflow that is easier to understand and maintain.



 Similarities And Differences
 There are, withoutdoubt,
 similarities between event aggregator and mediator examples that I’ve shown here.
 The similarities boil down to two primary items: evs and third-party objects.
 These difs are superficial at best, though.
 When we dig into intent of pattern and see that impls can be dramatically  dif,
 nature of patterns become more apparent.



 Events
 Both event aggregator and mediator use evs, in above examples. An event aggregator obviously deals with evs – it’s in name after all.
 The mediator only uses evs because it makes life easy when dealing with bb, though. There is nothing that saysmediator must be built with evs.
 You can buildmediator with cb mets, by handing mediator reference to child object, or by any ofnumber of other means.

 The dif, then, is why these two patterns are both using evs. The event aggregator, aspattern, is designed to deal with evs.
 The mediator, though, only uses them because it’s convenient.

 Third-Party Objects
 Both event aggregator and mediator, by design, usethird-party object to facilitate things. The event aggregator itself isthird-party to event publisher and event subscriber.
 It acts ascentral hub for evs to pass through. The mediator is alsothird party to other objects, though. So where is dif? Why don’t we call event aggregatormediator?
 The answer bigly comes down to where app logic and workflow is coded.


 In case of event aggregator, third party object is there only to facilitate pass-through of evs from unknown number of sources to unknown number of handlers.
 All workflow and business logic that needs to be kicked off is put directly into object that triggers evs and objects that handle evs.


 In case of mediator, though, business logic and workflow is aggregated into mediator itself. The mediator decides when object should have its mets
 called and atts updated based on factors that mediator knows about. It encapsulates workflow and process, coordinating multiple objects to produce desired system behaviour.
 The individual objects involved in this workflow each know how to perform their own task. But it’s mediator that tells objects when to perform tasks by making decisions athigher
 level than individual objects.

 An event aggregator facilitates“fire and forget” md of communication. The object triggering event doesn’t care if there are any subscribers.
 It just fires event and moves on. A mediator, though, might use evs to make decisions, but it is definitely not “fire and forget”.
 A mediator pays attention toknown set of input or activities so that it can facilitate and coordinate additional behavior withknown set of actors (objects).


 Relationships: When To Use Which
 Understanding similarities and difs between event aggregator and mediator is important for semantic reasons.
 It’s equally as important to understand when to use which pattern, though. The basic semantics and intent of patterns does inform question of when,
 but actual experience in using patterns will help you understand more subtle points and nuanced decisions that have to be made.


 Event Aggregator Use
 In general, event aggregator is used when you either have too many objects to listen to directly, or you have objects that are entirely unrelated.

 When two objects havedirect relationship already – say,parent view and child view – then there might be little benefit in using event aggregator.
 Have child view trigger event and parent view can handle event. This is most commonly seen in bb’s Cl and Md, where all Md evs are bubbled up to and through its parent Cl.
 A Cl often uses md evs to modify state of itself or other mds. Handling “selected” items incl isgood example of this.

 jQ’s on met as event aggregator isgreat example of too many objects to listen to.
 If you have 10, 20 or 200 DOM els that can trigger“click” event,
 it might bebad idea to set uplistener on all of them individually. This could quickly deteriorate performance of app and user experience.
 Instead, using jQ’s on met allows us to aggregate all of evs and reduce overhead of 10, 20, or 200 event handlers down to 1.

 Indirect relationships are also great time to use event aggregators.
 In bb apps, it is very common to have multiple view objects that need to communicate,
 but have no direct relationship. For example, menu system might haveview that handles menu item clicks.
 But we don’t want menu to be directly tied to content views that show all of details and information when
 menu item is clicked.
 Having content and menu coupled together would make code very difficult to maintain,
 in long run. Instead, we can use event aggregator to trigger “menu:click:foo” evs,
 and have“foo” object handle click event to show its content on screen.

 Mediator Use
 A mediator is best applied when two or more objects have indirect working relationship, and business logic or workflow needs to dictate interactions and coordination of these objects.

 A wizard interface isgood example of this, as shown with “orgChart” example, above.
 There are multiple views that facilitate entire workflow of wizard.
 Rather than tightly coupling view together by having them reference each other directly, we can decouple them and more explicitly md workflow between them by introducingmediator.


 The mediator extracts workflow from impl details and createsmore natural abstraction athigher level, showing us atmuch faster glance what that workflow is.
 We no longer have to dig into details of each view in workflow, to see what workflow actually is.


 Event Aggregator And Mediator Together
 The crux of dif between event aggregator andmediator, and why these pattern names should not be interchanged with each other,
 is illustrated best by showing how they can be used together.
 The menu example for event aggregator is perfect place to introducemediator as well.


 Clicking menu item may trigger series of changes throughout app. Some of these changes will be independent of others,
 and using event aggregator for this makes sense. Some of these changes may be internally related to each other, though, and may usemediator to enact those changes.
 A mediator, then, could be set up to listen to event aggregator. It could run its logic and process to facilitate and coordinate many objects that are related to each other,
 but unrelated to original event source.


 MenuItem = Bb.V.x({

 ev: {"click .thatThing": "clickedIt"  },

 clickedIt: fn(e){ e.preventDefault();
 // assume this triggers "menu:click:foo"
 Bb.trigger("menu:click:" + this.md.get("name"))  }

 })

 // ... somewhere else in app


 MyWorkflow = fn(){  Bb.on("menu:click:foo", this.doStuff, this);};

 MyWorkflow.prototype.doStuff = fn(){
 // instantiate multiple objects here.
 // set up event handlers for those objects.
 // coordinate all of objects intomeaningful workflow.
 };



 In this example, when MenuItem with right md is clicked, “menu:click:foo” event will be triggered.
 An instance of “MyWorkflow” object, assuming one is already instantiated, will handle this  spec event and will
 coordinate all of objects that it knows about, to create desired user experience and workflow.


 An event aggregator and mediator have been combined to create much more meaningful experience in both code and app itself.
 We now haveclean separation between menu and workflow through event aggregator and we are still keeping workflow
 itself clean and maintainable through use ofmediator.


 */