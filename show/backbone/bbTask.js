TASKER00 = function () {
    $.x('g', 'tasker');
    Ap = {M: {}, C: {}, V: {}}

    Ap.M.Tsk = $M()

    t1 = Ap.M.Tsk({t: 'store', pr: 4})
    t2 = Ap.M.Tsk({t: 'park', pr: 3})

    Ap.V.Tsk = $V({
        t: 'li',
        r: function () {
            this.A(this.g('tt'));
            return this
        }
    })
    tskV = Ap.V.Tsk({m: t1})


    Ap.C.Tsks = $Cl({m: Ap.M.Tsk})
    tsks = Ap.C.Tsks([{tt: 'hi'}, {tt: 'bye'}])


    Ap.V.Tsks = $V({
        t: 'li',
        r: function () {
            var v = this
            v.eCl(function (t) {
                v.q.A(Ap.V.Tsk({m: t}).r().q)
            })
            this.q.A()
        }
    })

    tsksV = Ap.V.Tsks({cl: tsks})

    $.bt('r Ap.V.Tsks tsksV', function () {
        tsksV.r()
    })

}
TASKER0=function(){$.x()
    Ap={M:{}, C:{}, V:{}}

    Ap.M.Task = Bb.M.e({})

    t1=Ap.M.Task.o({t:'go  store', pr:4})

    t2=Ap.M.Task.o({t:'go park', pr:3})

    Ap.V.Tsk= Bb.V.e({t:'li',
        rr: function(){this.A( this.g('t') )
            return this
        }
    })

    taskView=Ap.V.Tsk.o({m:t1})
    Ap.C.Tasks = Bb.C.e({m:Ap.M.Tsk})
    tasks=Ap.C.Tasks.o([{t:'hi'}, {t:'bye'}])
    Ap.V.Tasks = Bb.V.e({t:'li',
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


function oldSchol(){
    BACKDEMO=function(){z()


        Temp('task', [

            lb('Task: '),
            tx().id('task_desc'),
            bt('add task').id('btn')   ])


        di('container').a()

        bbR({


            R:{
                '':'first',
                'first':'first',
                'second':'second'},

            first:function(){$l('first')},
            second:function(){
                new Task()
                $l('second')}

        })()

        bbH()


        Task=bbV({

            el: $('#container'),

            i: function(){this.r()},

            r: function(){this.$el.html( temp('task') )},

            e: {'click button': 'add'},

            add: function(){ alert( qiv('task_desc') + ' task added' )}

        })

    }

}