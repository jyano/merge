$l('bbRoApps2')

RoApp=function(fn){return function(){
        z()
        $.d().A('this is a roApp').css('fontSize',75)
        fn()
        Bb.history.start({pushState:true})
    }
}


ROAP= RoApp(function(){

})