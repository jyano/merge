Ma= Bb.Ma = Marionette
Ma.A = Ma.Ap =  Ma.Application
Ma.R= Ma.Rt= Ma.AR= Ma.AppRouter; Ma.AR.x=Ma.AR.extend

Ma.B= Ma.Bh= Ma.Behavior; Ma.B.x=Ma.B.extend
Ma.Bs=Ma.Bhs= Ma.Behaviors; Ma.Bs.x=Ma.Bs.extend
Ma.C= Ma.Co=Ma.Controller; Ma.C.x=Ma.C.extend
Ma.Cb=Ma.Callbacks
Ma.Mu=Ma.Module;
Ma.O=Ma.Object

Ma.Rr=Ma.Renderer
Ma.TC=Ma.TemplateCache
Ma.E=Ma.Error
Ma.D=Ma.Deferred
Ma.V=Ma.View; Ma.V.x=Ma.V.extend
Ma.IV=Ma.ItemView; Ma.IV.x =  Ma.IV.extend
Ma.CV=Ma.CollectionView;  Ma.CV.x = Ma.CV.extend
Ma.CmV=Ma.CompositeView;  Ma.CmV.x = Ma.CmV.extend
Ma.LV=Ma.LayoutView; Ma.LV.x=Ma.LV.extend
Ma.Rg= Ma.Region

Ma.RM=Ma.RegionManager


a = Ma.A.prototype

a.ex = a.$ = a.execute
a.s = a.start

a.aI = a.addInitializer
a.b = a.bind
a.bE = a.bEE = a.bindEntityEvents
a.ds = a.destroy


a.gO = a.getOptions
a.i = a.initialize
a.l2 = a.listenTo
a.l21 = a.listenToOnce
a.mu = a.module
a.mO = a.mergeOptions
a.o = a.once
a.q = a.rq = a.request



a.sL = a.xL = a.stopListening
a.tr = a.trigger
a.trM = a.triggerMethod
a.ub = a.unbind
a.ubEE = a.unbindEntityEvents
appPt()
function appPt(){

}

$A= $Ap=function(a,b,c,d){

    var ap= new Ma.Ap(a,b,c,d)

    ap.aRg=function(){
        var ap=this,g=G(arguments),res
        if(g.S){
            return ap.addRegions({mainRegion: g.f})

        }
        else {
            return ap.addRegions.apply(ap, g)
        }
    }
    ap.mu=function(){
        var ap=this,g=G(arguments),res
        res=  ap.module.apply(ap, g)
        return  res || ap}

    return ap

}












a = Ma.A.prototype
rg = Ma.Rg.prototype
rM = Ma.RM.prototype



a.A = a.aR = a.addRegions
a.E = a.eR = a.emptyRegions
a.g = a.gR = a.getRegion
a.gRs = a.getRegions
a.gRM = a.getRegionManager
a.rR = a.rmR = a.removeRegion

rg.aH = rg.attachHtml
rg.aV = rg.View
rg.ds = rg.destroy
rg.E = rg.empty
rg.gE = rg.getEl
rg.gO = rg.getOption
rg.i = rg.initialize
rg.hV = rg.hasView
rg.aH = rg.reset
rg.tM=rg.trM = rg.triggerMethod
rg.tA=rg.trA = rg.triggerAttach
rg.tB=rg.tBA=rg.trBA = rg.triggerBeforeAttach

rM.rmR = rM.removeRegion
rM.rmRs = rM.removeRegions
rM.aR = rM.addRegion
rM.aRs = rM.addRegions
rM.dt = rM.detect
rM.E = rM.emptyRegions
rM.e = rM.each
rM.ev = rM.every
rM.g = rM.gRs = rM.getRegions
rM.la=rM.last
