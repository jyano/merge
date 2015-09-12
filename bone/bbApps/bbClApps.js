$l('bbClApps')


BBSORT00 = function () {
    $.x('a', 'sort dont work')
    chps = $Cl({m: Chp = $M()})()
    chps.comparator = function (a) {
        return a.tt
    }
    chps.add(Chp({p: 9, tt: "End"}));
    chps.add(Chp({p: 5, tt: "Mid"}));
    chps.add(Chp({p: 1, tt: "Beg"}))
    $l(chps.pluck('tt'))
    chps.sort()
    $l(chps.pluck('tt'))
}

BBSORT0=function() {
    Chp = $$M()
    chps =  $$C({ m:Chp })()
    chps.comparator = function (a) {
        return a.tt
    } //$.x(a)
    chps.add(Chp({p:9, tt:"End"}))
    chps.add(Chp({p:5, tt:"Mid"}))
    chps.add(Chp({p:1, tt:"Beg"}))
    $l(chps.pluck('tt'))
}

function templa(){
FLCL00=function(){$.x('r', 'filtering a cl:')
    /*
     FlV = Bb.V.e({
     ev: {'click #run': 'runFilter'},
     runFilter: function(e){e.pD();
     this.fl = {
     // ... get the filter info from the DOM
     }; this.rr()},
     rr: function(){// get the filtered list from the collection
     // iterate over the filtered list and render the results in to the html array
     // populate the DOM with the resulting HTML
     HT=[]
     _.e(this.cl.where(this.fl),
     function(item){HT.push(
     _.tp($('my-item-template').H())(item.tJ())
     )})
     this.$el.html(HT); return this }
     })*/
    Cl =  $$C({i:function(){}})
    cl = Cl({})


    /*
     cl.add([{a: 'f', b: 's'},
     {a: 't', b: 's'},
     {a:'f', b: 's'},
     {a: 's', b:'t'}
     ])


     res = cl.where({a:'f',b:'s'})
     */
    //http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
}
FLCL0 = function () {
    $.x('r', 'filtering a cl, but tp missing?!')
    // ... get the filter info from the DOM
    // get the filtered list from the collection
    // iterate over the filtered list and render the results in to the html array
    // populate the DOM with the resulting HTML

    FlV = $V({
        ev: {'click #run': 'runFilter'},
        runFilter: function (e) {
            e.pD();
            this.fl = {};
            this.r()
        },
        r: function () {
            HT = [];
            _.e(this.cl.where(this.fl),
                function (item) {
                    HT.push(_.tp($('my-item-template').H())(item.tJ()))
                })
            this.q.h(HT);
            return this
        }
    })

    Cl = $$C({
        i: function () {
            $l('fuck')
        }
    })
    cl = Cl()
    cl.add([{a: 'f', b: 's'}, {a: 't', b: 's'}, {a: 'f', b: 's'}, {a: 's', b: 't'}])
    res = cl.where({a: 'f', b: 's'})
    _.e(res, function (q) {
        var j = q.tJ();
        $.h1(j.a + ' !@@@##@ ' + j.b)
    })
//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection

}
    }



COUNTER = function () {z()

    Td = $$M({df: {tt: '', completed: false}})

    // -add() and rm() accept  indiv mds | []      // { merge: true }  -> MERGE  dup mds, !ignore
    items = $cl().A([{id: 1, n: "Dog", a: 3}, {id: 2, n: "cat", a: 2}]).A([{
        id: 1,
        n: "Bear"
    }], {merge: true}).A([{id: 2, n: "lion"}])// merge: false
    $l(_.jS(items.toJSON())) // [{"id":1,"name":"Bear","age":3},{"id":2,"name":"cat","age":2}]
    //    to retriev a md from a cl, use Cl.get(), accepts single id:
    tds = TdsCl([td = Td({id: 2, tt: 'book'})])
    td2 = tds.g(2);
    $l(td2 === td) // true
    //   mds  passed by reference
    $l(tdCid === td); // true
    //Listening for evs


    //   can listen for add and rm evs which occur when mds are added/rmd from cl
    TdsCl = $cl()
    TdsCl.on("add", function (td) {
        $l("Gone " + td.g("tt") + " ?" + (td.g("completed") ? 'Y' : 'N'))
    })
    TdsCl.A([{tt: 'Jamai', completed: false}, {tt: 'DL', completed: true}])  // Gone Jamai? N    Gone DL? Y


    // can bind to change event to listen for changes to any of mds in cl
    TdsCl = $cl()
    TdsCl.on("change:tt", function (m) {
        $l("Nah! I " + m.g('tt'))
    })
    TdsCl.A([{tt: ' Jamaica.', completed: false, id: 3}])
    td = TdsCl.g(3)
    td.s('tt', 'go fishing')  //  Nah! I  go fishing

    Td = $M({df: {tt: '', completed: false}})
    td = Td().s({tt: 'Buy cookies', completed: true})
    td.on({
        'change:tt': ttChd = function () {
            $l('tt chd!')
        },
        'change:completed': sttChd = function () {
            $l('stt chd!')
        }
    })
    td.s({tt: 'groceries'})  // tt chd!


    // Use once, dont need to unbind   ev  listener
    TdCounter = _.x({cA: 0, cB: 0}, Bb.E)
    TdCounter.once('event', incrA = function () {
        TdCounter.cA += 1;
        TdCounter.trigger('event')
    })  // This triggering will not  produce any effect on counters
    TdCounter.once('event', incrB = function () {
        TdCounter.cB += 1
    })
    TdCounter.trigger('event')   // Trigger event for first time
    TdCounter.cA //1
    TdCounter.cB //1
    // counterA and counterB should only have been incred once.
}
RESET = function () {



    //   Resetting/Refreshing Cls
    // Rather than adding or removing mds individually,
    // you might want to update entire cl at once.
    // Cl.set() takes array of mds and performs necessary
    // add, rm, and change operations required to update cl.


    TdsCl = $cl()
    TdsCl.A([
        {id: 1, tt: 'go to Jamaica.', completed: false},
        {id: 2, tt: 'go to China.', completed: false},
        {id: 3, tt: 'go to Disneyland.', completed: true}
    ])
    // we can listen for add/change/rm evs
    TdsCl.on("add", function (m) {
        $l("Added " + m.g('tt'))
    })
    TdsCl.on("rm", function (m) {
        $l("Removed " + m.g('tt'))
    })
    TdsCl.on(
        "change:completed",
        function (m) {
            $l("Completed " + m.g('tt'))
        }
    )


    TdsCl.s([
        {id: 1, tt: 'go to Jamaica.', completed: true},
        {id: 2, tt: 'go to China.', completed: false},
        {id: 4, tt: 'go to Disney World.', completed: false}
    ])

    // Above logs:    // Completed go to Jamaica.  // Removed go to Disneyland.  // Added go to Disney World.


    //  replace  entire cl  content


    TdsCl = $cl()

    // we can listen for reset evs

    TdsCl.on("reset", function () {
        $l("Cl reset.")
    })

    TdsCl.A([{
        tt: 'go to Jamaica.', completed: false
    }, {
        tt: 'go to China.',
        completed: false
    },
        {tt: 'go to Disneyland.', completed: true}]);

    $l('Cl size: ' + TdsCl.length); // Cl size: 3

    TdsCl.reset([{tt: 'go to Cuba.', completed: false}]);
    // Above logs 'Cl reset.'

    $l('Cl size: ' + TdsCl.length); // Cl size: 1

    // use reset with no arguments to clear outcl completely.
    //  This is handy when dynamically loading new page of results
    // where you want to blank out current page of results.

    myCl.reset()

    // -using Cl.reset() doesn’t fire  add | rm evs. reset event   fired instead
    // The reason you might want to use this is to perform super-optimized
    //rendering in extreme cases where individual evs are too expensive.


    td = $M()()

    tds = $Cl([td])()

        .on('reset', function (tds, ops) {  //    prev mds list avail in ops.prevMds
            $l(ops.prevMds);
            $l([td]);
            $l(ops.prevMds[0] === td); // true

        })

    tds.reset([])


    // set()  SMART updates  cl with a list of md: new mds added, present mds merged, models not in list rmd


    Beat = $M({d: {job: 'mus'}})
    john = Beat({fN: 'John', lN: 'Lennon'});
    paul = Beat({fN: 'Paul', lN: 'McCartney'});
    george = Beat({fN: 'George', lN: 'Harrison'});
    ringo = Beat({fN: 'Ringo', lN: 'Starr'});

    theBeats = $Cl([john, paul, george, ringo]);// Create a cl using our mds

    pete = Beat({fN: 'Pete', lN: 'Best'});// Createseparate md for Pete Best

    theBeats.s([john, paul, george, pete]); // Update cl


    // Fires`rm` event for 'Ringo', and `add` event for 'Pete'.
    // Updates any of John, Paul and Georges's atts that may have
    // changed over years.


}
INDEXSORT = function () {


    tds = $cl().A([{tt: '  Belgium.', completed: false}, {tt: ' China.', completed: false}, {
        tt: '  Aust',
        completed: true
    }])

    tds.forEach(function (md) {
        $l(md.g('tt'))
    }) //   Belgium.//   China. //   Austria.


    // sortBy()- sort a cl on spec attr, ex: sortByAlph
    tds.sortBy(function (td) {
        return td.g("tt").tLC()
    }).forEach(function (m) {
        $l(m.g('tt'))
    }) // go to Austria. // go to Belgium. // go to China.


    count = 1;
    $l(tds.map(function (md) {
        return count++ + ". " + md.g('tt')
    })) //1. go to Belgium. //2. go to China. //3. go to Austria.


    tds.max(function (m) {
        return m.id
    }).id;
    tds.min(function (m) {
        return m.id
    }).id


    //  pluck() extract  spec attr
    captions = tds.pluck('caption') // returns list of captions


    // filter()  ex: Filter by array of md IDs
    Tds = $Cl({
        md: Td, filterById: function (ids) {
            return this.mds.filter(function (c) {
                return _.contains(ids, c.id)
            })
        }
    })


    //   indexOf() return index of particular item within cl
    peop = $cl()
    peop.comparator = function (a, b) {
        return a.g('n') < b.g('n') ? -1 : 1
    }
    peop.A(tom = $m({n: 'T'})).A(rob = $m({n: 'R'})).A(tim = $m({n: 'T'}))
    peop.indexOf(rob)//0
    peop.indexOf(tom)//2
}
USMETS = function () {
    // any()  confirm  if any of  vals  incl  pass  iterator   truth  test
    tds.any(function (md) {
        return md.id === 100
    })
    tds.some(function (md) {
        return md.id === 100;
    })


    //  size() return cl size, tds.size() ~ tds.length;

    //  isEmpty()  determine whethercl is empty
    isEmpty = tds.isEmpty()


    //   groupBy() group cl into groups of like items, ex: create groups of completed and incomplete mds
    tds = $cl().A([{tt: 'Belgium.', completed: false}, {tt: 'China.', completed: false}, {
        tt: 'Austria.',
        completed: true
    }])

    byCompleted = tds.groupBy('completed');
    completed = $cl(byCompleted[true]);
    $l(completed.pluck('tt')) //  ["Aust"]


    //Underscore  operations  on  objects  are  avail as mets  on   Mds.


    //   pick()  extractset   of   atts   frommd
    Td = $M({d: {tt: '', completed: false}})
    td = Td({tt: 'go to Austria.'});
    $l(td.pick('tt')) //  {tt: "go to Austria"}


    //  omit(), extract all atts from md, except those listed
    td = Td({tt: 'go to Austria.'});
    $l(td.omit('tt'))   //   {completed: false}


    // keys(), vals() -> lists of attr names, vals
    td = Td({tt: 'go to Austria.'});
    $l(td.keys())   //   ["tt", "completed"]
    $l(td.vals())  //  ["go to Austria.", false]


    // pairs() get  list  of atts as [key, val] pairs
    pairs = Td({tt: 'Aust'}).pairs();
    $l(pairs[0]); // ["tt", "Aust"]
    $l(pairs[1]) // ["completed", false]


    //  invert() creates ob where vals are keys, atts are vals
    Td({tt: 'go to Austria.'}).invert()  // {'go to Austria.': 'tt', 'false': 'completed'}


}
CHAINABLE = function () {


    //prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
    // sol: bb   supports  _.chain, which returns ob  w  us-arr-ops  attached as mets which return that ob
    //chain starts chain, returns wrapper around cl's mds (wrapped arr)
    //  The chain ends with call to val(), which  terminates chain and returns resulting array

    Cl([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}]).chain()
        .fl(function (i) {
            return i.g('a') > 10
        })
        .m(function (i) {
            return i.g('n')
        })
        .val() //['I','R']

    // Some of bb- spec mets do return this, which means they can be chained as well:
    $cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']

}
RESTPERSIST = function () {

    //RESTful Persistence
    //Thus far, all of our example data has been created in  bw. For most single page apps, mds are derived fromdata store residing onserver.
    //This is area in which bb dramatically simplifies code you need to write to perform RESTful synchronization withserver throughsimple API on its mds and cls.


// Fetching mds from server
// Cls.fetch() retrieves set of mds from server in form ofJSON array by sending HTTP GET request to URL spec by cl’s url property (which may befunction).
// When this data is received,set() will be executed to update cl.

    Td = $M({df: {tt: '', completed: false}})
    TdsCl = $Cl({md: Td, url: '/tds'})
    tds = TdsCl();
    tds.fetch(); // sends HTTP GET to /tds


}
SAVEMDTOSERVER = function () {


    // bb can retrieve entire cl of mds from server at once, but updates to mds are performed individually using md’s save() met.
    //  When save() is called on a md that was fetched from server, it constructs a URL by appending md’s id to cl’s URL and sends HTTP PUT to server.

    // If md is new instance that was created in  bw (i.e. it doesn’t have id) then HTTP POST is sent to cl’s URL. Cls.create() can be used to createnew md, add it to cl,  and send it to server insingle met call.


    Td = $M({df: {tt: '', completed: false}});

    TdsCl = $Cl({md: Td, url: '/tds'});

    tds = TdsCl();
    tds.fetch();

    td2 = tds.g(2);
    td2.s('tt', 'go fishing');
    td2.S(); // sends HTTP PUT to /tds/2


    tds.create({tt: 'Try out code samples'}); // sends HTTP POST to /tds and adds to cl
//     As mentioned earlier,md’s validate() met is called automatically by save() and will trigger invalid event on md if validation fails.

    //  Deleting mds from server

    //  A md can be rmd from containing cl and server by calling its destroy() met. Unlike Cl.rm() which only rmsmd fromcl, Md.destroy() will also send HTTP DELETE to cl’s URL.

    Td = $M({df: {tt: '', completed: false}});

    TdsCl = $Cl({md: Td, url: '/tds'});

    tds = TdsCl();
    tds.fetch();
    td2 = tds.g(2)

    td2.destroy(); // sends HTTP DELETE to /tds/2 and rms from cl
    // Calling destroy onMd will return false if md isNew:

    td = new Bb.Md();
    $l(td.destroy())  // false
    // Options

    // Each RESTful API met accepts a variety of ops.
    //  Most importantly, all mets accept success and error cbs which can be used
    //  to custize handling of server responses.

    //  Specifying {patch: true} option to Md.save() will cause it to use HTTP PATCH to send only changed atts (i.e. partial updates) to server
    //  instead of entire md; i.e. md.save(attrs, {patch: true}):

    // Save partial using PATCH
    md.clear().set({id: 1, a: 1, b: 2, c: 3, d: 4});
    md.save();
    md.save({b: 2, d: 4}, {patch: true});
    $l(this.syncArgs.met);
    // 'patch'
    // Similarly, passing {reset: true} option to Cl.fetch() will result in cl being updated using reset() rather than set().


}
CID = function () {



// to uniquely identify mds  use:

// id --- unique identifier (int|S, e.g.,UUID) -can be used to fetch md from cl
//Internally, Bb.Cl contains [md] enumerated by md.id, if md insts have one.
// When cl.g(id) is called, arr checked for existence of md inst  with corresp  id.

// cid--- (client id), auto-gen-d at md creation -can be used to fetch md from cl,
// helpful when you don’t have true id (   not (or not yet) saving it to db  )
// tdCid = tds.g(td2.cid)

//  idAttribute( df=id)----  identifying attr name of md returned from server (i.e. id in your db).
//  -tells bb which data field from server should be used  to populate id property (think of it as a mapper).
// if your server sets unique attr on your md named “userId” then you would set idAttribute to “userId” in your md definition.
//  The val of md’s idAttribute should be set by server when md is saved. -shouldn’t need to set it manually, unless further control is required.


}
PLV=function(){$.x('o','hi')


    Per= Bb.M.e({d: {n:'a', a:20, o:'p'}})

    p=  Per.o({})
    p1 = Per.o({n:'b'})
    p2= {n:'c'}
    PerV=Bb.V.e({t:'li',
        x:'some-per', k:'per',

        tp:tp=_.tp('<%= n %> (<%= a %>) - <%= o %>'),

        r: function(){
            this.$el.A('fasdfsfasd')
            _m=this.model
            //    this.$el.A(this.tp(m  ))  // this.model.toJSON()
        },

        i: function(){this.r()}
    })

    PepC=Bb.C.e({m:Per})

    pV=PerV.o({m:p})
    pC=PepC.o()

    pC.add([p, p1,p2])

    PepV=Bb.V.e({cl: PepC, el:ul= $.ul(),
        i:function(){},
        r: function(){
            ul=this.q.E()
            this.J(function(md){PerV.o({m:md},ul)})}})
    pCV = PepV.o({cl: pC})
    $.in(.2,function(){pCV.r()},'*')
    $.in(.4,function(){pCV.r()},'*')

}
BBCOL=function(){$.x()

    Per = Bb.M.e({})
    p1 =  Per.o({n:'j'})
    p2=  Per.o({n:'y'})

    Pers= Bb.C.e({model: Per})

    pers=  Pers.o([p1, p2])
}
PEOPLE=function(){$.x()

    Per  = Bb.M.e({
        i: function () {
            //this.oV(function(mod, err){$l(err)})
        },
        d: {n:'doe', a: 30, j: 'wrk'},
        validate: function (ats) {if (ats.age < 0) {return 'a < 0!'}},
        work: function () {return this.g('n') + ' is working'}
    })

    p = Per.o({n: 'y', a: 34})

    //p.oV(function (mod, z) {$l(z)})

    PerV = Bb.V.e({tn: 'li',
        k: 'person', x: 'some-person',
        i: function () {this.r()},
        tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
        r: function () {
            var t = this
            //this works, but doesnt use a template
            // t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
            t.H(
                t.T(
                    t.J()
                )
            )
        }
    })

    pV= PerV.o({m: p})

    peepC = Bb.C.e({m: Per})


    pC = peepC.o([
        {n: 'rigo', a: 29},
        {n: 'j', a: 2},
        {n: 's', j: 'gx'}
    ])
    pC.add(p)


    pC.at(1).n('joejoe')
    pC.at(1).s('name', 'joejoe')

    PeepV = Bb.V.e({tn: 'ul',
        i: function () {
            $l('hi')
            $l(this.cl)
        },
        r: function () {//var t=this
            this.cl.each(function (p) {var v,pV  //$l(p.g('n'))
                pV = PerV.o({m: p}) //$l(pV.el)
                this.$el.append(pV.el) //t.q( pV.el  )
            }, this)
        }

    })

    pcv = PeepV.o({cl: pC})
    pcv.r()
    $.A( pcv.el )

}
