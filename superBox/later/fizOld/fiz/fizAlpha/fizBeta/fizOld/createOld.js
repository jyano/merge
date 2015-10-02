


old=function(){

    q.mf = q.manifest = function () {var q=this,g=G(arguments)
        q.loadManifest(cjs.mf.apply(null, g))
        return q}
    cjs.lQDep= cjs.lqDep=cjs.loadQueueDep=function(mf,fn){
        var q = new cjs.LoadQueue(true)
        if(A(mf)){q.loadManifest(cjs.mf.apply(null, mf))}
        if(F(fn)){q.complete(function () {fn(function (i) {return q.getResult(i)})})}
        return q}
    cjs.mfDep = cjs.manifestDep = function(a){var g=G(arguments), mf=[]
        _.e(g, function (v) {
            mf.push({
                src: cjs.src(v),
                id: v})})
        return mf
    }

    //cjs.handleFileLoad = function (e) {if (e.item.type == "image") {images[e.item.id] = e.result}}
//cjs.makeManifest = cjs.makeMan=function(a) {return cjs.manifest.apply(null, _.m(a.images, function (i) {return Graphics.fromSource(i)}))}

    QDep=function(i,fn){
        q=cjs.lQ(),
            mf=[]
        _.e(i,function(v) {mf.push({src: cjs.src(v), id: v})})
        q.mf(mf)
        q.c(function(){fn(q)})
        return q}

    tickX=function(e){j.Y(e.delta/1000*100,'-' )}
    timeStamp2 = function(s, j, pxPerSec){
        var fn=function(s,e){
            if(!N(j.ts)){j.ts=0;j.lts=e.ts}
            else{j.ts= e.ts-j.lts;j.lts=e.ts
                j.y((j.ts/1000) * pxPerSec,'-')  }}
        return s.t(fn)}
}

mug=function(){

    s.snap = function(f){
        $.post('/img', {
            d: this.toDataURL()//, dats: o.x.dats
        })
        sec(f)
        return this}

    $mugTest=function(){z();
        s = cjs.stage(800,800).A()
        s.mug( function(mug){ m=mug  })
    }


    ct.bData=function(data){

        var bm = cjs.bm( $.img().src($.parseJSON(data)) )
        this.A(

            bm
        )

        return bm}
// **** works!!!!

    ct.mug=function(sc,fn){var ct=this
        $.get('/myMug', function(m){ct.bm(m,sc,fn)})
        return ct}
}


touchEnable = function (s) {
    cjs.Touch.enable(s);
    return s
}//important for ipad//move this onto stage itself


old=function(){
    ct.bmR=   function(i,fn){var ct=this,bm
        alert('ct.bmR')
        $.i(i, function(i){
            bm = $Bm( i[0] ).a2(ct)
            bm.rXY(
                bm.W()/2,
                bm.H()/2
            )
            if(fn){ fn(bm) }
        })
        return ct
    }
}