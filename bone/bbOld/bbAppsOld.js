

// 2 plugins
// http://naturaily.com/blog/post/backbonejs-plugins-localstorage-and-backbonevalidation}
show=function(a){
    alert('show')
    a=a||'welcome'
    $b().H('')(h1(a))
}
Bb.eParse=function(e){e=e||{}


    _.e(e, function(v,k){

        if(k=='$'){
            e['click']=v
        }

        if(k=='$$'){
            e['dblclick']=v
        }

    })


    return e
}
//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})

