
cjs = createjs =  createjs||{},function(){"use strict";var a=function(a,b,c,d){this.initialize(a,b,c,d)},
    b=a.prototype=new createjs.Container;a.INDEPENDENT="independent",
    a.SINGLE_FRAME="single",a.SYNCHED="synched",b.mode,b.startPosition=0,
    b.loop=!0,b.currentFrame=0,b.timeline=null,b.paused=!1,
    b.actionsEnabled=!0,b.autoReset=!0,b.frameBounds=null,b._synchOffset=0,
    b._prevPos=-1,b._prevPosition=0,
    b._managed,b.Container_initialize=b.initialize,b.initialize=function(b,c,d,e){
    this.mode=b||a.INDEPENDENT,this.startPosition=c||0,
        this.loop=d;var f={paused:!0,position:c,useTicks:!0};this.Container_initialize(),
        this.timeline=new createjs.Timeline(null,e,f),this._managed={}},
    b.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)
    },b.Container_draw=b.draw,b.draw=function(a,b){
    return this.DisplayObject_draw(a,b)?!0:(this._updateTimeline(),
        this.Container_draw(a,b),!0)},b.play=function(){this.paused=!1},b.stop=function(){
    this.paused=!0},b.gotoAndPlay=function(a){this.paused=!1,this._goto(a)},
    b.gotoAndStop=function(a){this.paused=!0,this._goto(a)},b.getLabels=function(){
    return this.timeline.getLabels()},b.getCurrentLabel=function(){
    return this._updateTimeline(),this.timeline.getCurrentLabel()},
    b.clone=function(){throw"MovieClip cannot be cloned."},b.toString=function(){
    return"[MovieClip (name="+this.name+")]"},b.Container__tick=b._tick,b._tick=function(b){
    this.paused||this.mode!=a.INDEPENDENT||(this._prevPosition=this._prevPos<0?0:this._prevPosition+1,
        this._updateTimeline()),this.Container__tick(b)},b._goto=function(a){var b=this.timeline.resolve(a);
    null!=b&&(-1==this._prevPos&&(this._prevPos=0/0),this._prevPosition=b,this._updateTimeline())},
    b._reset=function(){this._prevPos=-1,this.currentFrame=0},b._updateTimeline=function(){var b=this.timeline,
    c=this.mode!=a.INDEPENDENT;if(b.loop=null==this.loop?!0:this.loop,
        c?b.setPosition(this.startPosition+(this.mode==a.SINGLE_FRAME?0:this._synchOffset),
            createjs.Tween.NONE):b.setPosition(this._prevPos<0?0:this._prevPosition,
            this.actionsEnabled?null:createjs.Tween.NONE),this._prevPosition=b._prevPosition,
    this._prevPos!=b._prevPos){this.currentFrame=this._prevPos=b._prevPos;for(var d in this._managed)this._managed[d]=1;
    for(var e=b._tweens,f=0,g=e.length;g>f;f++){var h=e[f],i=h._target;if(i!=this&&!h.passive){var j=h._stepPosition;
        i instanceof createjs.DisplayObject?this._addManagedChild(i,j):this._setState(i.state,j)}}var k=this.children;
    for(f=k.length-1;f>=0;f--){var l=k[f].id;1==this._managed[l]&&(this.removeChildAt(f),delete this._managed[l])}}},
    b._setState=function(a,b){if(a)for(var c=a.length-1;c>=0;c--){var d=a[c],e=d.t,f=d.p;for(var g in f)e[g]=f[g];
        this._addManagedChild(e,b)}},b._addManagedChild=function(b,c){b._off||(this.addChildAt(b,0),
b instanceof a&&(b._synchOffset=c,b.mode==a.INDEPENDENT&&b.autoReset&&!this._managed[b.id]&&b._reset()),
    this._managed[b.id]=2)},b.Container__getBounds=b._getBounds,b._getBounds=function(a,b){
    var c=this.DisplayObject_getBounds();return c||(this._updateTimeline(),this.frameBounds&&(c=this._rectangle.copy(this.frameBounds[this.currentFrame]))),c?this._transformBounds(c,a,b):this.Container__getBounds(a,b)},createjs.MovieClip=a;var c=function(){throw"MovieClipPlugin cannot be instantiated."};c.priority=100,c.install=function(){createjs.Tween.installPlugin(c,["startPosition"])},c.init=function(a,b,c){return c},c.step=function(){},c.tween=function(b,c,d,e,f,g){return b.target instanceof a?1==g?f[c]:e[c]:d},c.install()}();

