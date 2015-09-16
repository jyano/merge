GRAIL=function(){$.bd().E()
    o={
        bd: {f: '24px Helvetica', C:'a' ,c:'b'},

        'header, footer': {C:'x',d:'b', M:4,P:5, h_: 100, B: ['bor','r'], bRd: '7pt'},
        $main: {h_:800,M:0,P:0,d:'$',$D:'r'},
        '$main > article': {M:4,P:5,B:['bor','p'],  bRd: '7pt',  C:'g', _: 2 , $:'3 1 50%'},
        '$main > nav': {C:'o',M:4,P:5,B:['bor','g'],bRd:'7pt', $:'1 6 30%', $O:-1},
        '$main > aside': {M: 4,  P: 5,  B: ['bor','g'], bRd: '7pt',  C:'x', $: '1 6 20%', $O:3},
        "@media all and (max-width:640px)" :   $subRules({
            "#main, #page": {$D:'c'},
            "#main>article, #main>nav, #main>aside": {$O:0},
            "#main>nav, #main>aside,  header,  footer": {h_:50,_h:50}})
    }


    $CSS(o)

    $('<header> heeeeader!!! </header>').A() //$.hdr('header').A()

    $.d([

        $.ac('article'),
        $.nv().A('nav'),
        $.as('aside')
    ]).id('main')


    $.ftr().A('footer').A()



}
FLEX=function(){  $.x('g', 'flex')

    $CSS({
        _flCt : {d:'$', $D:'r', $W: 'w', $J: 'sB'},
        _flCt1 : {d: '$', $D:'r', $W: 'w', $J:  'sA'}
    })


    $.d('b',400, 500).K('flCt').A(
        $.d('y',40, 150),
        $.d('z',200, 50),
        $.d('r',40, 150),
        $.d('y',40, 150),
        $.d('z',200, 50),
        $.d('r',40, 150)
    )//.dgb()


    $.d('B',400, 500).K('flCt').A(
        $.d('y',40, 150),   $.d('z',200, 50),   $.d('r',140, 150),
        $.d('y',40, 150),   $.d('z',300, 50),   $.d('r',40,  50)
    )//.dgb()


    $.d('w',400, 500).K('flCt1').A(
        $.d('y',40, 150),   $.d('z',1000, 50),   $.d('r',140, 150),
        $.d('y',40, 150),   $.d('z',10, 50),   $.d('r',40,  50)
    )//.dgb()

    $.d('p',400, 500).K('flCt1').A(
        $.d('y',40, 150),   $.d('z',300, 50),   $.d('r',140, 150),
        $.d('y',40, 150),   $.d('z',200, 50),   $.d('r',40,  50)
    )//.dgb()


}
BASIS=function(){$.x('o','basis')
    // http://jsfiddle.net/jakub_g/s5jAB/
    // Both items have flex-basis: 200px defined.
// In 'equilibrium situation' they'll get those widths exactly.

    $CSS({
        _ch:{c:'w',P:10, M:10},
        _ct: {C:'y',P:10,
            d:'$'},
        _ch1:{C:"u",
            $:'8 1 600px'},// If there's more space, the first one grows 5x faster than the second.
        _ch2:{ C:'g',
            d:'$', $:'1 2 400px', $W:'w'}, // If there's less space, the second one shrinks 3x faster than the first.
        d:{B:['bor','b']}
    })


    $.d([$.d([$.h3('Child One'),
        $.p( 'Lorem ipsum'), $.p('dolor sit amet') ,
        $.p('This is a bit longer lineThis is a bit longer lineThis is a bit longer' +
        ' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer' +
        ' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer lineThis ' +
        'is a bit longer lineThis is a bit longer lineThis is a bit longer line')  ]).K('ch ch1'),
        d= $.d(['Two'
        ]).K('ch ch2')
    ]).K('ct')
    _.t(20, function(){
        d.A($.d($r(), 40, 40).K('ch1'))})


    $CSS()/*

     div { border:8px solid Blue; }
     .ct { display:flex; padding:10px; background-color:Yellow; }
     .ch { padding:10px; margin:10px; color:White; }
     .ch1 { flex:8 1 600px; background-color:Purple; }
     .ch2 { display:flex; flex-wrap:true; flex:1 2 400px; background-color:green; }



     */



}
FLEXCT=function() {z()
    $CSS({
        '.flex-container': {display: 'flex', 'flex-direction': 'row',
            $W: 'w', 'justify-content': 'space-around',
            'align-content': 'flex-start', 'align-items': 'stretch'},
        '.flex-items-default': {width: '300px', height: '250px',
            'flex-grow': 0, 'flex-shrink': 0, 'flex-basis': 0},
        '.flex-item-1': {width: '100px', height: '100px', 'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'},
        '.flex-item-2': {width: '100px', height: '100px',
            'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '200px'},
        '.flex-item-3': {
            width: '100px', height: '100px',
            'flex-grow': 1, 'flex-shrink': 0,
            'flex-basis': '200px'},
        '.flex-item-4': {width: '100px', height: '100px',
            'flex-grow': 1, 'flex-shrink': 0,
            'flex-basis': '200px'},
        '.flex-item-5': {width: '100px', height: '100px',
            'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'}
    })


    d= $.dK('flex-container').A(
        Item(1),   Item(2), Item(3), Item(4),   Item(5)
    )
    function Item(n){
        return    $.dK( '.flex-item-'+ (n||1)).A(
            $.i('me')
        ).css({margin:20}).C('b')
    }
}
function notSure(){
    GME=function(){$.x('y','gme');
        $CSS({
            'html, body': {w: '100%',h:'100%', M:0, P:0},
            'body.box': {d: $, flD: 'column'},
            'body > *': {P: '.5em'},
            header: {C:'b'},
            article: {C:'r', $:1},
            footer:  {C:'g'},
            'header.cnt': {'-moz-column-count': 3},
            'header:not(.cnt)': {'-moz-column-width':  100}
        })

        $.hdr().A('Click', $.br(), 'to change', $.br(),
            'header {column-…}').A()

        $.ac().A('Click',
            $.br(),
            'to', $.br(), 'change', $.br(), 'body {display: …}').A()

        $.ftr().A()





        $("header").$(function(){  $(this).toggleClass("cnt"); logClass();  });
        $("article").$(function(){$.bd().toggleClass("box");  logClass() })

        logClass()

        function logClass(){var logTxt = "Header: "

            if ($("header").hasClass("cnt")) {
                logTxt += "column-count"
            } else {logTxt += "column-width"}

            logTxt += "; Body: ";

            if ($("body").hasClass("box")) {
                logTxt += "flex-box"
            }
            else {logTxt += "block"}

            $("footer").text(logTxt)
        }

    }




    FB=function(){

        $.x('o', 'flex')


        $CSS({

            _ct : {
                d:'$',

                //  define  flow dir
                // and
                // if we allow the items to wrap
                //  Remember this is the same as:

                $D:'r',
                $W: 'w',
                //      'flex-flow' : 'row wrap',
                // Then we define how is distributed the remaining space
                flJC: 'space-around'
            }
        })
    }
}
