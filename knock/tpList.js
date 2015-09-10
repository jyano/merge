TPLIST=function(){

    $.h2('Your seat reservations').A(

        $.sp().bT(''seats().length)
    )


    $.h3(' Total surcharge:').bVs('totalSurcharge() > 0').A(
        $.s().bT('totalSurcharge().toFixed(2)')
    )

    $.t().A(
        $.tH().A(tr().A($.th().A('Pass name'), $.th().A('Meal'), $.th('charge') )),
        $.tB().bTp("{name:'reservationTemplate', foreach: seats}")
    )

    $.bt('Reserve another seat').b({
        $:'addSeat',
        en:'seats().length < 5'
    })



    $('<script type="text/x-jquery-tmpl" id="reservationTemplate" >').A(
        $.tr().A(
            $.td().A($.ip().bV('name')),
            $.td().A($.sl().b({o:'availableMeals', ot:'mealName'})),
            $.td().A($.a('Remove').b$('remove')) )
    )



    // Raw catalog data - would come from the server
    var availableMeals = [
        { mealName: "Standard (sandwich)", price: 0 },
        { mealName: "Premium (lobster)", price: 34.95 },
        { mealName: "Ultimate (whole zebra)", price: 290 }
    ]

    // Class to represent a row in the reservations grid

    seatReservation = function(name) {
        this.name = name;
        this.availableMeals = availableMeals;
        this.meal = ko.observable(availableMeals[0]);
        this.remove = function() { viewModel.seats.remove(this) }
        this.formattedPrice = ko.dependentObservable(function() {
            var price = this.meal().price;
            return price ? "$" + price.toFixed(2) : "None";
        }, this);
    }

    // Overall viewmodel for this screen, along with initial state
    vm = {
        seats: ko.observableArray([
            new seatReservation("Steve"),
            new seatReservation("Bert")
        ])
        ,addSeat: function() {
            this.seats.push(new seatReservation());
        }
    }

    vm.totalSurcharge = ko.dependentObservable(function() {
        var total = 0;
        for (var i = 0; i < this.seats().length; i++)
            total += this.seats()[i].meal().price;
        return total;
    }, vm);


    ko.b(vm)





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

