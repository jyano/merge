//bind cb and bind ip to 'enable'
KOEN=function(){$.x()

    $.p().A($.cbC('hasPhone'), 'I have phone' )
    $.p('Your cellphone number').A(
        $.ip().b({ v:'num', en:'hasPhone'}))

    ok({ hasPhone: ko.o(0), num:'' })

}



///*** PERFECT FOR EDITTING A PROFILE IP
KOFC=function(){$.x()

    $.p('Name:').A(

        $.ip().b({   vs:'editing',  f:'editing',
            v:'name'
        }),

        $.d('r').b({  vs:'!editing()',
            t:'name',
            $:'edit'
        })
    )

    $.p('Click the name to edit it; click elsewhere to apply changes')

    function VM(n) {var vm=this
        vm.name = ko.o(n)
        vm.editing = ko.o()
        vm.edit = function() {vm.editing(1) }
    }

    ok(new VM("Bert Bertington"))
}




//bind cb 'checked' to boolean

SPAM=function(){$.x('o','spam')


    $.p('spam? ').A(
        $.cbC('spam')
    )

    ok({   spam: ko.o(1)   })
    $.in(2, function(){   vm.spam(0)   })
}



KOIP=function(){$.z('x')

    $.p('Login name:').A(
        $.ipTi('un') )
    $.p('Pw:').A(
        $.pwTi('pw') )     // $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>


    $.A(
        'vm: ',
        $.pre().bT(
            'ko.toJSON($root, null, 2)'
        )

    )

    ok({   un: ko.o(''),    pw: ko.o('abc')  })

}




CHERRY=function(){$.x('o')
    OK({

        wants:$o(1),

        flav:  $oa(["cherry","almond"])

    })

    $.p(  $.sp('spam?'),   $.cC('wants')   )

    $.d([  'Preferred flavors of spam:',

        $.d([

            $.p(  $.sp('cherry'),
                $.cC('flav').v('cherry')
            ),

            $.d([$.p($.sp('Almond'),   $.cC('flav').v('almond'))]),

            $.p($.sp('Glut'), $.cC('flav').v('glut'))

        ])

    ]).bVs('wants')

    $.in(function(){

        vm.flav.push("glut")
    })

}


// huh?
$.cKO=function(m, b, v){
    var cb=$.cb(),
        p = $.p().A($.sp().A(m),
            cb.bC( b))
    if(v){ cb.v(v)}
    return p

}


//forms
TWT = function () {
	$.x('r', 'twt')
	OK({
		un: ko.o('@ex'),
		da: ko.o(),
		g: function () {
			vm.da({
				dt: $D(),
				MS: _.m(['a', 'b'],
						function (t) {
							return {ms: vm.un() + ':' + t}
						})
			})
		},
		clr: function () {
			vm.da([])
		}
		//<- $.bt('Clear tweets').b$(' $parent.clearResults')
	})
	$.fSb('g', ['un:',
		$.ipV('un'), $.sb('Get')
	])
	$.dW('da', [
		$.h3('dt:', $.spT('dt')),
		$.olE('MS', $.liT('ms')),
		$.bt$('clr', '$parent.clr')
	]).A()
}
//broken
TASKS = function () {
	$.z().h3('Tasks')
	$.f().bSb('aT').A().A("Add task: ",
			$.ip().bV('nT').ph("What?"),
			$.bt('Add')//.bS('s') // ??
	)
	$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
			$.cb().bC('iD'),
			$.ip().b("value:t, disable:iD"),
			$.bt('Del').bC('$parent.rmT')))
	$.sp("You have").A()
	$.B("&nbsp;").bT("inc().length").A()
	$.sp("inc task(s)").A()
	$.sp("- beer!").bV("inc().length==0").A()
	ko.b({
		itemToAdd: ko.o(''),
		allItems: ko.oa(['a', 'b', 'c']),
		selectedItems: ko.oa(['d']),
		addItem: function () {
			if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
				vm.allItems.push(vm.itemToAdd());
				vm.itemToAdd('')
			}
		},
		removeSelected: function () {
			allItems.removeAll(vm.selectedItems())
			selectedItems([])
		},
		sortItems: function () {
			vm.allItems.sort()
		}
	})
	vm2 = {
		ts: ko.oa(),
		nT: ko.o(),
		inc: ko.c(function () {
					var vm = this
					return ko.ut.af(
							vm.ts(), function (t) {
								return !t.iD()
							})
				}
		),
		aT: function () {
			this.ts.push({t: ko.o(o.nT()), iD: ko.o()});
			this.nT('')
		},
		rmT: function () {
			o.ts.remove(this)
		}
	}
	/*
	 ko.b(vm2)
	 //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
	 */
}

