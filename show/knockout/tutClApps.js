availableMeals =  [
    { mealName: "Standard (sandwich)", price: 0 },
    { mealName: "Premium (lobster)", price: 34.95 },
    { mealName: "Ultimate (whole zebra)", price: 290 }
]
TUTCLSTEP1=function(){z(); $.h2('Your seat reservations')

    $.t($('<thead><tr> <th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th</tr></thead> >')).A(
        $('<tbody>').bE('seats').A(
            $.tr().A(
                $.td().bT('name'),
                $.td().bT('meal().mealName'),
                $.td().bT('meal().price'))))


  ok(new ReservationsViewModel())
    function SeatReservation(name, initialMeal) {
        var self = this;
        self.name = name;
        self.meal = ko.observable(initialMeal);
    }
    function ReservationsViewModel() {
        var self = this;

        // Non-editable catalog data - would come from the server
        self.availableMeals = availableMeals

        // Editable data
        self.seats = ko.observableArray([
            new SeatReservation("Steve", self.availableMeals[0]),
            new SeatReservation("Bert", self.availableMeals[0])
        ])
    }



}
TUTCLSTEP2=function(){z(); $.h2('Your seat reservations')

    $.t($('<thead><tr> <th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th</tr></thead> >')).A(
        $('<tbody>').bE('seats').A(
            $.tr().A(
                $.td().bT('name'),
                $.td().bT('meal().mealName'),
                $.td().bT('meal().price'))))


    $.bt('reserve another seat').b$('addSeat')

    ok(new ReservationsViewModel())

    function SeatReservation(name, initialMeal) {
        var self = this;
        self.name = name;
        self.meal = ko.observable(initialMeal);
    }

    function ReservationsViewModel() {
        var self = this;

        // Non-editable catalog data - would come from the server
        self.availableMeals =  availableMeals

        // Editable data
        self.seats = ko.observableArray([
            new SeatReservation("Steve", self.availableMeals[0]),
            new SeatReservation("Bert", self.availableMeals[0])
        ])

        self.addSeat = function() {
            self.seats.push(new SeatReservation("", self.availableMeals[0]));
        }




    }



}
TUTCLSTEP3=function(){z(); $.h2('Your seat reservations')

    $.t($('<thead><tr> <th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th</tr></thead> >')).A(
        $('<tbody>').bE('seats').A(
            $.tr().A(
                $.td().bT('name'),
              //  $.td().bT('meal().mealName'),
                $.td($.sl(
                ).b("options: $root.availableMeals, value: meal, optionsText: 'mealName'")),

                $.td().bT(
                    'formattedPrice'
                    //'meal().price'
                )


            )))


    $.bt('reserve another seat').b$('addSeat')

    ok(new ReservationsViewModel())

    function SeatReservation(name, initialMeal) {
        var self = this;
        self.name = name;
        self.meal = ko.observable(initialMeal);
        self.formattedPrice = ko.computed(function() {
            var price = self.meal().price;
            return price ? "$" + price.toFixed(2) : "None";
        });
    }

    function ReservationsViewModel() {
        var self = this;

        // Non-editable catalog data - would come from the server
        self.availableMeals = availableMeals

        // Editable data
        self.seats = ko.observableArray([
            new SeatReservation("Steve", self.availableMeals[0]),
            new SeatReservation("Bert", self.availableMeals[0])
        ])

        self.addSeat = function() {
            self.seats.push(new SeatReservation("", self.availableMeals[0]));
        }




    }



}
TUTCLSTEP4=function(){z();

    $.h2().A(

        'Your seat reservations (',
        $.sp().bT("seats().length"),
        ')'
    )





    $.t($('<thead><tr> <th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th</tr></thead> >')).A(
        $('<tbody>').bE('seats').A(
            $.tr().A(
                $.td().bT('name'),
                //  $.td().bT('meal().mealName'),
                $.td($.sl(
                ).b("options: $root.availableMeals, value: meal, optionsText: 'mealName'")),

                $.td().bT(
                    'formattedPrice'

                ),

                $.td().A(
                    $.a('Remove','#').b$("$root.removeSeat")

                )




            )))




    $.h3().A(

        'Total surcharge: $', $.sp().bT('totalSurcharge().toFixed(2)')

    ).bVs('totalSurcharge() > 0')



    $.bt('reserve another seat').b('click: addSeat, enable: seats().length < 5')



    ok(new ReservationsViewModel())

    function SeatReservation(name, initialMeal) {
        var self = this;
        self.name = name;
        self.meal = ko.observable(initialMeal);
        self.formattedPrice = ko.computed(function() {
            var price = self.meal().price;
            return price ? "$" + price.toFixed(2) : "None";
        });
    }

    function ReservationsViewModel() {
        var self = this;

        // Non-editable catalog data - would come from the server
        self.availableMeals = availableMeals

        // Editable data
        self.seats = ko.observableArray([
            new SeatReservation("Steve", self.availableMeals[0]),
            new SeatReservation("Bert", self.availableMeals[0])
        ])

        self.totalSurcharge = ko.computed(function() {
            var total = 0;
            for (var i = 0; i < self.seats().length; i++)
                total += self.seats()[i].meal().price;
            return total;
        })

        self.addSeat = function() {
            self.seats.push(new SeatReservation("", self.availableMeals[0]));
        }



        self.removeSeat = function(seat) { self.seats.remove(seat) }

    }



}


TUTCL=function(){z();

    $.h2().A(

        'Your seat reservations (',
        $.sp().bT("seats().length"),
        ')'
    )


    $.t($('<thead><tr> <th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th</tr></thead> >')).A(
        $('<tbody>').bE('seats').A(
            $.tr().A(
                $.td().bT('name'),
                //  $.td().bT('meal().mealName'),
                $.td($.sl(
                ).b("options: $root.availableMeals, value: meal, optionsText: 'mealName'")),

                $.td().bT(
                    'formattedPrice'

                ),

                $.td().A(
                    $.a('Remove','#').b$("$root.removeSeat")

                )




            )))




    $.h3().A(

        'Total surcharge: $', $.sp().bT('totalSurcharge().toFixed(2)')

    ).bVs('totalSurcharge() > 0')



    $.bt('reserve another seat').b('click: addSeat, enable: seats().length < 5')



    ok(new ReservationsViewModel())

    function SeatReservation(name, initialMeal) {
        var self = this;
        self.name = name;
        self.meal = ko.observable(initialMeal);
        self.formattedPrice = ko.computed(function() {
            var price = self.meal().price;
            return price ? "$" + price.toFixed(2) : "None";
        });
    }

    function ReservationsViewModel() {
        var self = this;

        // Non-editable catalog data - would come from the server
        self.availableMeals = availableMeals

        // Editable data
        self.seats = ko.observableArray([
            new SeatReservation("Steve", self.availableMeals[0]),
            new SeatReservation("Bert", self.availableMeals[0])
        ])

        self.totalSurcharge = ko.computed(function() {
            var total = 0;
            for (var i = 0; i < self.seats().length; i++)
                total += self.seats()[i].meal().price;
            return total;
        })

        self.addSeat = function() {
            self.seats.push(new SeatReservation("", self.availableMeals[0]));
        }



        self.removeSeat = function(seat) { self.seats.remove(seat) }

    }



}


TUTC=function(){z();$Ms('TUTC')

    $.h2().A('Your seat reservations (', $.sp().bT("seats().length"), ')')
    $.t().A(
        $('<thead>').A($.tr().A($('<th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th>'))),
        $('<tbody>').bE('seats').A($.tr().A(
                $.td().bT('name'),
                $.td($.sl().b("options: $root.availableMeals, value: meal, optionsText: 'mealName'")),
                $.td().bT('formattedPrice'),
                $.td().A($.a('Remove','#').b$("$root.removeSeat")))))
    $.h3().A('Total surcharge: $', $.sp().bT('totalSurcharge().toFixed(2)')).bVs('totalSurcharge() > 0')
    $.bt('reserve another seat').b('click: addSeat, enable: seats().length < 5')



    ok(new ReservationsViewModel())

    function SeatReservation(name, initialMeal) {
        var self = this;
        self.name = name;
        self.meal = ko.observable(initialMeal);
        self.formattedPrice = ko.computed(function() {
            var price = self.meal().price;
            return price ? "$" + price.toFixed(2) : "None";
        });
    }

    function ReservationsViewModel() {
        var self = this;

        // Non-editable catalog data - would come from the server
        self.availableMeals = availableMeals

        // Editable data
        self.seats = ko.observableArray([
            new SeatReservation("Steve", self.availableMeals[0]),
            new SeatReservation("Bert", self.availableMeals[0])
        ])

        self.totalSurcharge = ko.computed(function() {
            var total = 0;
            for (var i = 0; i < self.seats().length; i++)
                total += self.seats()[i].meal().price;
            return total;
        })

        self.addSeat = function() {
            self.seats.push(new SeatReservation("", self.availableMeals[0]));
        }



        self.removeSeat = function(seat) { self.seats.remove(seat) }

    }



}