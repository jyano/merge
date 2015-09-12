$l('bbRoApps2'); $Fn=function(name, fn){window[name]=fn; return fn}
$RoApp=function(name, fn){
    $Fn(name, function(){

        z(); header(name); fn(); startRtr(name)

        function header(name){
            $.d().A($.d().A('this is a RoApp').fS(75).col('r'),
                $.sp().A(name).fS(100).col('x').C('o'))}
        function startRtr(name){
            Bb.h.start({pushState: true, root: "/mvc/"+name+"/"})}
    })
}

$RoApp('ROAP1', function(){
    ro = $R({
        r:{hello: 'hi',
            goodbye: function(){$.C('o')}},
        _:function(){$.C('p')},
        hi: function(){
            $.C('g');
            alert('well hi there!')
        }
    })
    $.bt('index',function(){ro.n('')})
    $.bt('hello',function(){ro.n('hello')})
    $.bt('goodbye',function(){ro.n('goodbye')})
})
$RoApp('ROAP2', function(){
    ro = $R({r:{hello: 'hi',
            goodbye: function(){$.C('o')}},
        _:function(){$.C('p')},
        hi: function(){ $.C('g'); alert('well hi there!') }
    })
    $.bt('index',function(){ro.n('')})
    $.bt('hello',function(){ro.n('hello')})
    $.bt('goodbye',function(){ro.n('goodbye')})
})











//notes:  '':'_', (handled by _$$R now, instead) (see _$$R api)





