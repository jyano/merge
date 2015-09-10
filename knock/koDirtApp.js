KOMASTERPIECE = DIRT = function () {
    z()


    p1 = push1

    p2 = push2

    newComment = function (comments, comment) {
        comments.push({comment: comment})
    }

    TextBindingSpan = spb = function (a) {

        return $.span().b('text', a)

    }


    $.div('black').mg(20).fe('m')(
        $.h1().C('y', 'c')(
            TextBindingSpan('message'),

            $.span(' '),

            TextBindingSpan('score'),

            p1($.h2(
                $.input(400),

                $.button('new r')
            )),


            $.h2().feD('responses').C('r').A(
                p1.A(TextBindingSpan('response')),

                p2.A(
                    $.h4(
                        $.input(400), $.button('new c'))
                ),

                $.h4().C('b').feD('comments').A(
                    p2.A(
                        TextBindingSpan('comment'))))),


        $.br(),

        $.br()
    ).A()


    vm = {
        m: ko.oa(messages),
        responses: ko.oa([{response: 'one'}, {response: 'two'}])
    }


    ko.applyBindings(vm)


    f = function () {
        vm.p.push({f: 'jason', l: 'yano'})
    }
}
DIRT=function(){$.z('g').fm() //KOMASTERPIECE
    $.cm=  $.Cm=  function(cms,cc){cms.push({comment:cc})}
    $.spT=   function(a){return $.sp().b('text', a)}
    d= $.d('z')//.mar(20)
        .bE('m').A(
        $.h1().C('y','c').A(
            $.spT('message'), $.sp(' '), $.spT('score'),
            s1.A($.h2().A($.ip(400), $.bt('new r'))),
            $.h2().bE('responses').C('r').A(
                s1.A( $.spT('response') ),
                s2.A( $.h4(
                    //$.iP(400),
                    $.bt('new c')) ),
                $.h4().C('b').bE('comments').A(
                    s2.A($.spT('comment'))
                )
            )
        ),
        $.br(),
        $.br()
    )


    ko.b({
        m: ko.oa(messages=[{message:'zi', score:100, responses:[
            {response:'good coder',
                comments:[{comment:'..eh'}]},
            {response:'cool girl'}
        ]},

            {message:'yano', score:3,
                responses:[{response:'is cool guy',
                    comments:[{comment:'hi'}, {comment:'hello'}]},
                    {response:'a'}, {response:'b'}, {response:'fun'}]},
            {message:'is awesome',score:0,responses:[
                {response:'afsdafsd'}]},
            {message:'lame',score:20,responses:[
                {response:'weird',comments:[{comment:'not!!!!1'}]},
                {response:'lamer',comments:[{comment:'fuck ya'}]}]},
            {message:'rocks',score:4,responses:[]}
        ]),

        responses:ko.oa([
            {response:'one'},
            {response:'two'}
        ])
    })




    f=function(){
        vm.p.push({f:'jason',l:'yano'})
    }
}
DIRT=function(){$.z('g').fm() //KOMASTERPIECE
    $.cm=  $.Cm=  function(cms,cc){cms.push({comment:cc})}
    $.spT=   function(a){return $.sp().b('text', a)}
    d= $.d('z')//.mar(20)
        .bE('m').A(
        $.h1().C('y','c').A(
            $.spT('message'), $.sp(' '), $.spT('score'),
            s1.A($.h2().A($.ip(400), $.bt('new r'))),
            $.h2().bE('responses').C('r').A(
                s1.A( $.spT('response') ),
                s2.A( $.h4(
                    //$.iP(400),
                    $.bt('new c')) ),
                $.h4().C('b').bE('comments').A(
                    s2.A($.spT('comment'))
                )
            )
        ),
        $.br(),
        $.br()
    )


    ko.b({
        m: ko.oa(messages=[{message:'zi', score:100, responses:[
            {response:'good coder',
                comments:[{comment:'..eh'}]},
            {response:'cool girl'}
        ]},

            {message:'yano', score:3,
                responses:[{response:'is cool guy',
                    comments:[{comment:'hi'}, {comment:'hello'}]},
                    {response:'a'}, {response:'b'}, {response:'fun'}]},
            {message:'is awesome',score:0,responses:[
                {response:'afsdafsd'}]},
            {message:'lame',score:20,responses:[
                {response:'weird',comments:[{comment:'not!!!!1'}]},
                {response:'lamer',comments:[{comment:'fuck ya'}]}]},
            {message:'rocks',score:4,responses:[]}
        ]),

        responses:ko.oa([
            {response:'one'},
            {response:'two'}
        ])
    })




    f=function(){
        vm.p.push({f:'jason',l:'yano'})
    }
}