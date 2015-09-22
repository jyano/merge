


$.dK('container',[
    $('<header>').A($.h1('A Marionette Playground')),
    $('<article>').id('main')
])



str= '<script type="text/html" id="sample-template">'+ 'put some content <%= contentPlacement %>.'+ '</script>'


// Define the app and a region to show content
App = new Ma.Application()
App.addRegions({ mainRegion: "#main" })

// Create a module to contain some functionality
App.mu("SampleMu", function(Mod, App, Bb, Ma, $, _){
    var MainVw = Ma.IV.x({ tp: "#sample-template" }),
        Co=Ma.Co.x({
            i:function(op){
                this.region = op.region },
            show: function(){
                this.region.show(
                    new MainVw({
                        md: new Bb.M({
                            contentPlacement: "here" })
                    })
                )}
        })
    Mod.addInitializer(function(){
        Mod.co  = new Co({ region: App.mainRegion })
        Mod.co.show()
    })
})

App.start()