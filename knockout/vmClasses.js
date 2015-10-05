
VM=function(p) {this.somePop = p.smKey}
VM.prototype.doSmg = function() {}

Gift= function (gifts) {
    var vm = this
    vm.gifts = $oa(gifts)
    vm.addGift = function () {
        vm.gifts.push({name: "", price: ""})
    }
    vm.removeGift = function (gift) {
        vm.gifts.remove(gift)
    }
    vm.save = function (form) {
        alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
    }
    // To actually transmit to server as a regular form post, write this:
    // ko.utils.postJson($("form")[0], self.gifts)
}

Task=function(title, done) {
    this.tt= this.title = $o(title)
    this.done = $o(done)
}

tasks= $oa([

    new Task('Find new desktop background', true),
    new Task('Put shiny stickers on laptop', false),
    new Task('Request more reggae music in the office', true)

])
Planets = function () {
    this.planets = $oa(PLANS)
    this.typeToShow = $o("all");
    this.displayAdvancedOptions = $o(false);
    this.addPlanet = function (type) {
        this.planets.push({name: "New planet", type: type})
    }
    this.planetsToShow = ko.pc(function () {// Represents a filtered list of planets
        // i.e., only those matching the "typeToShow" condition
        var desiredType = this.typeToShow()
        if (desiredType == "all") return this.planets()
        return ko.utils.arrayFilter(this.planets(), function (planet) {
            return planet.type == desiredType
        });
    }, this);

    // Animation callbacks for the planets list
    this.showPlanetElement = function (el) {
        if (el.nodeType === 1) {
            $(el).hide().slideDown()
        }
    }

    this.hidePlanetElement = function (el) {
        if (el.nodeType === 1) {
            $(el).slideUp(function () {
                $(el).rm()
            })
        }
    }
}
Task=  function (tt, done){   return {
    tt: ko.o(tt),
    done: ko.o(done)
}
}
Per = function (n, ch) {
    var per = this
    per.n = n
    per.ch = $oa(ch)
    per.A = function(){
        this.ch.push('new ch')}
}
Per = function(n, ch) {var per=this
    per.n = n
    per.ch = $oa(ch)

    per.A = function(){  per.ch.push('new ch')    }

}

peep= [
    new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
    new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
    new Per("Charles", ["Cayenne", "Cleopatra"])
]


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
ExpanderCmVM = function () {
    this.isExpanded = ko.o(false)
    this.toggleText = ko.c(function () {return this.isExpanded() ? '-' : '+'}, this)
}
ExpanderCmVM.prototype.toggle = function () {this.isExpanded(!this.isExpanded())}

AppVM = function () {this.items = [
    { binding: 'vs',
        desc:
            'causes the assoc  DOM el to become hd or vs according to the v you pass to the bd' },
    { binding: 't',
        desc: 'causes the assoc DOM el to display the text value of your pam.' },
    { binding: 'cm',
        desc: 'injects a spec cm into an el, and optly passes pams to it.' }
]}


Aw=function(text) {
    this.awText = text;
    this.points = $o(1)
}
initialData = [
    {name: "Well-Travelled Kitten", sales: 352, price: 75.95},
    {name: "Speedy Coyote", sales: 89, price: 190.00},
    {name: "Furious Lizard", sales: 152, price: 25.00},
    {name: "Indifferent Monkey", sales: 1, price: 99.95},
    {name: "Brooding Dragon", sales: 0, price: 6350},
    {name: "Ingenious Tadpole", sales: 39450, price: 0.35},
    {name: "Optimistic Snail", sales: 420, price: 1.50}
]
Feed=function(){this.ms=ko.o('pf!')}

Ms = function (m) { return {m:ko.o(m||'') }}
Task=function(d){return {t: $o(d.t), iD: $o(d.iD)}}
Gift = function(gifts) {var vm = this
    vm.gifts = $oa(gifts)
    vm.addGift = function() {vm.gifts.push({name: "", price: "" }) }
    vm.removeGift = function(gift) { vm.gifts.remove(gift) }
    vm.save = function(form) {alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);

}
Gift = function(gifts) {var vm = this
    vm.gifts = $oa(gifts)
    vm.addGift = function() {vm.gifts.push({name: "", price: "" }) }
    vm.removeGift = function(gift) { vm.gifts.remove(gift) }
    vm.save = function(form) {alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);

}
Per = function(n, ch) {
    this.n = n
    this.ch = $oa(ch)
    this.A = function(){this.ch.p('new ch '+ $r())}
}
ULNEST=function(){$.x('x').h2('Pp')



    $.ulE('peep', $.d([  // name has length children
            $.spT('n'), 'has', $.spT('ch().length'),  'children &nbsp;',
            //new
            $.a$('New','A')
        ]),

        $.uLE('ch',
            $.spT(), //child name
            $.spVs( '$root.showDT').A('(child rendered at ',   $.spT('$Dt().getSeconds()'),      ')')
        )
    )
    $.lb('show time: ').A( $.cbC('showDT'))
    //anonymous vm
    ok({    peep: peep,      showDT: $o()     })
}