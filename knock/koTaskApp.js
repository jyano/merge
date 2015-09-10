Task=function(d){
    return {t: $o(d.t), iD: $o(d.iD)}
}
TASKER=function(){$.x()
    Ap={M:{}, C:{}, V:{}}

    Ap.M.Task = bb.M.e({})

    t1=Ap.M.Task.o({t:'go  store', pr:4})

    t2=Ap.M.Task.o({t:'go park', pr:3})

    Ap.V.Tsk= bb.V.e({t:'li',
        rr: function(){this.A( this.g('t') )
            return this
        }
    })

    taskView=Ap.V.Tsk.o({m:t1})
    Ap.C.Tasks = bb.C.e({m:Ap.M.Tsk})
    tasks=Ap.C.Tasks.o([{t:'hi'}, {t:'bye'}])
    Ap.V.Tasks = bb.V.e({t:'li',
        rr: function(){
            var that=this
            this.cl.each(
                function(t){
                    var v=Ap.V.Task.o({m:t})
                    that.$el.A(v.rr().el)
                }, this)
            this.el.A()
        }
    })

    tasksV=Ap.V.Tasks.o({cl:tasks})
}
TASKS=function(){$.z().h3('Tasks')

    $.f().bSb('aT').A().A("Add task: ",
        $.ip().bV('nT').ph("What?"),
        $.bt('Add')//.bS('s') // ??
    )

    $.ul().b({e:'ts', vs:'visible:ts().length>0' }).A($.li().A(
        $.cb().bC( 'iD' ),
        $.ip().b("value:t, disable:iD"),
        $.bt('Del').bC( '$parent.rmT' )))


    $.sp("You have").A()
    $.B("&nbsp;").bT( "inc().length").A()
    $.sp("inc task(s)").A()
    $.sp("- beer!").bV("inc().length==0").A()

    ko.b({

        itemToAdd:ko.o(''),

        allItems:ko.oa(['a','b','c']),

        selectedItems:ko.oa(['d']),
        addItem:function(){
            if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                vm.allItems.push(vm.itemToAdd());
                vm.itemToAdd('')
            }
        },

        removeSelected:function(){
            allItems.removeAll(vm.selectedItems())
            selectedItems([])
        },
        sortItems:function(){vm.allItems.sort()}
    })


    vm2={
        ts: ko.oa(),
        nT: ko.o(),
        inc : ko.c(function(){  var vm=this
                return ko.ut.af(
                    vm.ts(), function(t){return !t.iD()
                    })
            }
        ),
        aT: function(){ this.ts.push({t: ko.o( o.nT()), iD: ko.o( ) }); this.nT('') },
        rmT: function(){ o.ts.remove(this) }
    }

    /*
     ko.b(vm2)
     //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
     */
}
TASK=function() {
    $.z('r')
}