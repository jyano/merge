ko.cm =  ko.components; ko.cm.rg =  ko.cm.register; ko.cm.iR= ko.cm.isRegistered
ko.rg = function () {
    var g = G(arguments),
        o= {n: g.f, op: g.s}; o.op = o.op || {}
    if (!o.op.viewModel) {//op.viewModel = op.vm || op.m
        if (o.op.vm) {op.viewModel = o.op.vm}
        else if (o.op.m) {o.op.viewModel = o.op.m}}
    if (S(o.op.viewModel) || (O(o.op.viewModel) && !o.op.viewModel.element  )) {

        o.op.viewModel = {element: o.op.viewModel}

    }
    o.op.viewModel = o.op.viewModel || {vm: o.op}
    if (!op.template) {if (op.tp) {
        op.template = op.tp
    } else if (op.t) {
        op.template = op.t
    }}
    cm = ko.R(o.n, o.op)
    return cm
}

$.fn.bCm=function(s){return this.b('component', s  )}
$.fn.par=function(a,b){
    this.at('params', a+': ' + b ); return this}
$.dCm=function(a){
    return $.d().bCm(a)}
widDataOb=function(t,m){return {t:t, m:m}}
ko.R = function (n, ob) {var cm
    ob=sOb(ob)
    cm = ko.cm.rg(n, ob)
    return cm
    function sOb(ob){ob=ob||{}
        ob.template = ob.template || ob.t
        ob.viewModel = ob.viewModel || ob.vm || ob.m
        return ob
    }
}
ko.R('like-widget', widDataOb(
    '<div class="like-or-dislike" data-bind="visible: !chosenValue()">'+
    '<button data-bind="click: like">Like it</button>'+
    '<button data-bind="click: dislike">Dislike it</button>'+
    '</div>'+
    '<div class="result" data-bind="visible: chosenValue">' +
    'You <strong data-bind="text: chosenValue"></strong> it '+
    '</div>', function(pams){
        var vm=this
        this.chosenValue = pams.value //(=null|like|dislike)
        this.like=function(){vm.chosenValue('like') }
        this.dislike=function(){vm.chosenValue('dislike')}}))


///////////////////////////////////////////////////////////////

LIKE=PROD=function(){z()
    // EXAMPLE: using custom component AS custem element
    $.ul().bE("products").A($.li().K('product').A(

        $.S().bT('n'),

        $('<like-widget params="value: userRating">')

    ))

    $.bt('add product').b$('addProd')

    ok({

        products: $oa([
            new Prod('Garlic bread'),
            new Prod('Pain au chocolat'),
            new Prod('Seagull spaghetti', 'like') // This one was already 'liked'
        ]),

        addProd: function () {
            var n = 'Prod ' + (this.products().length + 1);
            this.products.push(new Prod(n))
        }
    })


}
COMPNAME=function(){

    ko.cm.gN= ko.cm.getComponentNameForNode = function(nd){

        tgN = nd.tagName && _.tL(nd.tagName)

        return  ko.cm.iR(tgN)?  tgN : tgN==="special-el"? "MyCm": null
        // If the el's name mats a reg-ed cm, use that cm for the el <special-el>,
        // use cm "MySpecialComponent" (regardless if pre-regd)
        // Treat anything else as !repg a cm
    }

}
CM=function(){$.x()
    d=  $.d().A($.hr(), 'cm cm cm', $.hr() )
    ko.r('test', { t:d[0],   m:{a:100, b:'hello' }  })
    $('<test>').A().C('b').A('hello1')
    $('<test>').A().C('b').A('hello2')
    $('<test>').A().C('b').A('hello3')

}
CMLDR=function(){$.x()

    ko.r('myCm', VM)
    ko.r('myCm', {
        m: {
            createVM: function(p, cmInf) {return new VM(p)}},

        t: '#d'
    })
    ko.r('msgEd', {
        m: function(p) {this.t = ko.o(p && p.initT||'')},
        t: $.d([
            'Ms:',
            $.ipV('t'),
            '(len:',$.spT('t().length'),')'
        ])
    })

    $.tp("MyLsTp").A($.h3('spcl ls:'))
    $.ulE("{ data: myItems, as: 'myItem' }").A(
        $.li().A($.h4('more my spc items'), $({
            tp: {nodes: $componentTemplateNodes, data: 'myItem'}
        })))
    $.tg('MyLs').at('params', 'items: PEEP').A(
        'The person',$.emT('name'),'is',$.emT('age'),'years old.')
    ko.r('MyLs', {
        t: { el: 'MyLs-template' },
        m: function(p) {this.myItems = p.items}
    })
   ok({
        PEEP: $oa([{n:'Lew', a: 56 }, {n: 'Atha', a: 34 }])
    })
    MyCmVM=function(pm) {
        curObsrvInst = pm.$raw.myExpr()
    }
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
CMNEWS=function(){$.x('y','news feed')
    //http://jsfiddle.net/rniemeyer/fssXE/
    $.fn.qA=function(t){
        return $('<'+t+'>').A()
    }
    $.fn.qAP=function(a,b,c){

        this.qA(a).par(b, c);
        return this
    }


    $.qAP('news-feed', 'vm', 'VM')
    $.qAP('news-feed', 'vm', 'VM2')
    $.h2('News Feed')
    $.dT('vm.ms')
    $('<news-feed params="vm: feed"></news-feed>').A()
    $('<news-feed>').at('params', "vm: feed2").A()
    ko.r('news-feed', {m: function (p) { this.vm = p.vm } })
    ko.r('news-feed', {m: function (p) {this.vm = p.vm},
        t: $.d([$.h2('News! Feed'), $.dT('vm.m')])[0]})
    ko.r("news-feed", {m: function (p) { this.vm = p.vm },
        t: $.sp().A($.h2('Nws Fd'), $.d().b('t', 'vm.m'))})

    ok({m :ko.o('!'), VM : Ms('m1'), VM2 : Ms('m2'), VM3: {m:ko.o('!')}})
    ok(new VM())
    ok({ms : ko.o("!"), VM: {ms: ko.o("!")}, VM2: {ms: ko.o("!")}})

    vm.VM.ms("1"); vm.VM2.ms("2")
}
WEBCM=function(){


    //instead of writing this:
    $.d().b('cmN', '{n:"flDeals", params:{from:"lhr",to:"sfo"}}')


    //  <div data-bind='component: {
    // name: "flight-deals", params: { from: "lhr", to: "sfo" }
    // }'></div>


//… you can write:
    $('<FlDeals>')  //   < params='from: "lhr", to: "sfo"'></flight-deals>




}
KOCM=function(){
    $.x('b','First instance, without parameters')//$.z().h4('First instance, without parameters')

    $.d().bCm('message-editor')

    $.h4('Second instance, passing parameters')


    ko.components.register('message-editor', {
        viewModel: function(params) {
            this.text = ko.o(params && params.initialText || '')
        },
        template: 'Message: <input data-bind="value: text" /> (length: <span data-bind="text: text().length"></span>)'
    })



    $.dCm('component: {  name: "message-editor",  params: { initialText: "Hello, world!" }}')



    ko.applyBindings()


}



