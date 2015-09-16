ko.cm = ko.components;//ko.cm.rg = ko.cm.register;
 ko.cm.iR = ko.cm.isRegistered
ko._ = function (a, t, m) {var g=G(arguments),
    ob={t:$('<template>').A($.d(A(t)? t:g)).ch(0).h(),
        m: m}
    ob.template = ob.template || ob.t
    ob.viewModel = ob.viewModel || ob.vm || ob.m
    return ko.cm.register(_.tL(a), ob)
}
ko.$= function(n, b){
    var g=G(arguments), o,
        $cm= function (n, pam) {
            return $('<'+n+' params = ' +(pam||'')+' >')}//=OK
    n= _.tL(n)
    return !b? _.p($cm, n): $cm(n, O(b)? ob2s(b):b )
    function ob2s(ob){ob=ob||{}; var o=[]
        _.e(ob,function(v,k){o.push(k+':'+v)})
        return o.join()}}//=$$$
$.fn.bCm = function (s) {return this.b('component', s)}
$.dCm = function (a) {return $.d().bCm(a)}
$.app=function(){z()

    var  d = $.d.apply($,arguments)

    d.K('app').id('app')

    return d
    ok$=function(vm, app){var g=G(arguments)
        z()
        $.app(g.r)
        ok(vm)
    }
}
$.fn.par=function (a, b) {
    alert('$.fn.par')
    this.at('params', a + ': ' + b);
    return this}

ko.cm.gN= ko.cm.getComponentNameForNode = function(nd){
    tgN = nd.tagName && _.tL(nd.tagName)
    return  ko.cm.iR(tgN)?  tgN : tgN==="special-el"? "MyCm": null
    // If the el's name mats a reg-ed cm, use that cm for the el <special-el>,
    // use cm "MySpecialComponent" (regardless if pre-regd)
    // Treat anything else as !repg a cm
}
///////////////////////////
LIKE= function(){z()


    ko._('LIKE',[
                $.dV("!vt()", $.b$$('like','hate')),
                $.dV('vt', 'you:', $.ST('vt'))

    ], Vm)


    function Vm(p){
        var vm = {vt:p.vt||''}
        vm.like = function () {this.vt('like')}
        vm.hate = function () {this.vt('hate')}
        return vm}

    $.ulE('MS',[
        $.sT('ms'),
        ko.$('like', {vt:'vt'})// ko.$('like', 'vt:vt')
    ])

    $.b$('+','add')

    ok({
        MS: $oa(Ms('lick'), Ms('hi'),
            Ms('haha', '+'), Ms('lame')),
        add:function(){this.MS.p(Ms('item-'+ this.pos()))},
        pos:function(){return _.z(this.MS())+1}
    })

    function Ms(ms,vt){var g=G(arguments)
        return {ms:ms,
            vt: $o(g.p? 'like':  vt||'')}}

    function thumb(){
        THMB1 = function () {
            z();
            $l('THMB')
            tmpl = $('<template>').A(
                $.d([$.d([$.b$('Like it', 'like'),
                    $.b$('Dislike it', 'dislike')
                ]).K("like-or-dislike").bVs("!val()"),
                    $.d(['You   ', $.S().bT('val'), '   it..']).K('result').bVs('val')
                ])
            )


            $Cm('like', tmpl.ch(0).h(), function (pams) {
                var vm = this
                this.val = pams.val
                this.like = function () {
                    vm.val('like')
                }
                this.dislike = function () {
                    vm.val('dislike')
                }
            })
            $.ul([$.li([$.sT('n'), $cm('like', 'val:op')
            ]).K('prd')]).bE("prds")
            $.b$('+', 'add')


            ok({

                add: function () {
                    this.prds.p(Prd(this.prdN()))
                },
                prdN: function () {
                    return 'item-' + (_.z(this.prds()) + 1)
                },
                prds: $oa([{n: 'lick', op: $o()},
                    {n: 'Garlic', op: $o()},
                    {n: 'food', op: $o('like')},
                    {n: 'gull', op: $o()}, {n: 'fun', op: $o()}])

            })


        }
        THMB11 = function () {
            z()


            $Cm('like', $.sp([ //can also pass in just an array of the two divs -> ...'like', [$.d(),$.d()]

                    $.d([
                        $.b$('Like it', 'like'),
                        $.b$('Dislike it', 'dislike')
                    ]).bVs("!val()").K("like-or-dislike"),
                    $.d([
                        'You   ', $.S().bT('val'), '   it..'
                    ]).K('result').bVs('val')
                ]),

                function (pams) {
                    var vm = this
                    vm.val = pams.val
                    vm.like = function () {
                        vm.val('like')
                    }
                    vm.dislike = function () {
                        vm.val('dislike')
                    }
                })
            $.ul([$.li([$.sT('n'), $cm('like', 'val:op')
            ]).K('prd')]).bE("prds")
            $.b$('+', 'add')


            ok({

                add: function () {
                    this.prds.p(Prd(this.prdN()))
                },
                prdN: function () {
                    return 'item-' + (_.z(this.prds()) + 1)
                },
                prds: $oa([{n: 'liiick', op: $o()},
                    {n: 'Garlic', op: $o()},
                    {n: 'food', op: $o('like')},
                    {n: 'gull', op: $o()}, {n: 'fun', op: $o()}])

            })


        }
        THMBALPHA = function () {
            $ok = function (vm, appCtn) {
                z()
                $.app(appCtn)
                ok(F(vm) ? vm() : vm)
            }
            $ok({
                prds: $oa([
                    {n: 'liiick', op: $o()}, {n: 'Garlic', op: $o()}, {n: 'food', op: $o('like')},
                    {n: 'gull', op: $o()}, {n: 'fun', op: $o()}]),
                add: function () {
                    this.prds.p({n: 'item-' + (_.z(this.prds()) + 1)})
                }
            }, [
                $.uE("prds", [$.spT('n'), OK('like', 'val:op')]),
                $.b$('+', 'add')
            ])
        }
        function Prd(n, op) {
            return {n: n, op: $o(op)}
        }
    }
}
CM=function(){$.x()

    q=  $.d([ $.hr(), 'cm cm cm', $.hr()]).C('b')


    el=q[0]

    ko.r('test', {
        t: el, m: {a:100, b:'hello' }
    })


    $('<test>').A('hello1')
    $('<test>').A('hello2')
    $('<test>').A('hello3')
}

CREATEVM=function(){

    z()


    ko._('myCm', {m: {createVM: function(p, cmInf) {return new VM(p)}}, t: '#d'})
}
CMNEWS=function() {
    $.x('y', 'news feed') //http://jsfiddle.net/rniemeyer/fssXE/


    $.fn.qA = function (t) {
        return $('<' + t + '>').A()
    }

    $.fn.qAP = function (a, b, c) {
        this.qA(a).par(b, c);
        return this
    }
    $.qAP('news-feed', 'vm', 'VM')
    $.qAP('news-feed', 'vm', 'VM2')
    $.h2('News Feed')
    $.dT('vm.ms')

    $('<news-feed params="vm: feed"></news-feed>').A()
    $('<news-feed>').at('params', "vm: feed2").A()


    VM = function () {

        this.feed = new Feed();
        this.feed2 = new Feed();

        this.VM2= {ms: $o("!")}
     }
    ko._('news-feed', {
        m: function (p) {
            this.vm = p.vm
        },
        t: $.d([

            $.h2('News! Feed'), $.dT('vm.m')
        ])[0]
    })


}
MSGEDIT=function(){z()

    ko._('msgEd', {
        m: function(p) {this.t = $o(p && p.initT||'')},
        t: $.d([
            'Ms:', $.ipV('t'),
            '(len:',$.spT('t().length'),')'

        ])
    })


    //ko._('myCm', VM)
    //ko._('MyLs', {t: { el: 'MyLs-template' }, m: function(p) {this.myItems = p.items}})

    $.tp("MyLsTp").A($.h3('spcl ls:'))
    $.ulE("{ data: myItems, as: 'myItem' }").A(
        $.li().A($.h4('more my spc items'), $({
            tp: {nodes: $componentTemplateNodes, data: 'myItem'}
        })))
    $.tg('MyLs').at('params', 'items: PEEP')
        .A('The person',$.emT('name'),'is',$.emT('age'),'years old.')
    VM = function () {
        this.ms = $o("Hi");
        this.ms = ko.o("!")
        this.VM2= {ms: $o("!")}
     }
    ok(new VM())
    vm.VM.ms("1");
    vm.VM2.ms("2")

    $.x('b','First instance, without parameters')//$.z().h4('First instance, without parameters')
    $.d().bCm('message-editor')
    $.h4('Second instance, passing parameters')
    ko._('message-editor', {
        m: function(params) {
            this.text = ko.o(params && params.initialText || '')
        },
        t: 'Message: <input data-bind="value: text" /> (length: <span data-bind="text: text().length"></span>)'
    })
    $.dCm(
        'component:{name:"message-editor",params:{initialText:"Hello,world!"}}'
    )
    ok()
}
CUSTEL=function(){z()


    //MyCmVM=function(pm) {curObsrvInst = pm.$raw.myExpr()}

    // Now curObsrvInst is either
    // observable1 or obsrv2//
    // and you would read its value with "curObsrvInst()"
    // 'params' is an object whose k/v pairs are the pams
    // passed from the cm bd or cust el.
    // - 'cmtInf.el'
    //  is the el the component is being//
    //  injected into. When createVM is called, the template has//
    //  already been injected into this el, but isn't yet bound.
    // - 'componentInfo.templateNodes'
    // is an array containing any DOM
    //   nodes that have been supplied to the component. See below.
    // Return the desired view model instance, e.g.:



}

old=function(){

    ko.rg = function () {
        var g = G(arguments), o = {n: g.f, op: g.s};
        o.op = o.op || {}
        if (!o.op.viewModel) {//op.viewModel = op.vm || op.m
            if (o.op.vm) {
                op.viewModel = o.op.vm
            }
            else if (o.op.m) {
                o.op.viewModel = o.op.m
            }
        }
        if (S(o.op.viewModel) || (O(o.op.viewModel) && !o.op.viewModel.element  )) {

            o.op.viewModel = {element: o.op.viewModel}

        }
        o.op.viewModel = o.op.viewModel || {vm: o.op}
        if (!op.template) {
            if (op.tp) {
                op.template = op.tp
            } else if (op.t) {
                op.template = op.t
            }
        }
        cm = ko.R(o.n, o.op)
        return cm
    }
}
//note: widget name apparently must be lowercase

