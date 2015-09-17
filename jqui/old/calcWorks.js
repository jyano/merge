$.fn.da  = $.fn.data
$.fn.fi= $.fn.find
$.fn.fRm=function(a){
    return this.fi(a).rm()
}
$.fn._ = $.fn.closest
$.fn.__ + $.fn.parent
$.fn.rp + $.fn.replace

$.fn.tx= $.fn.text

buttons=[
    {l:'MR' }, {l:'MS' }, {l:'MC' },
    {l:'Clear',a:'clear'},
    {l:'CE',a:'clearEntry'},
    {l:'*',a:'operator'},
    {l:7, a:'number'},
    {l:8,a:'number'}, {l:9,a:'number'},
    {l:'+', a:'operator'},
    {l:4, a:'number'},
    {l:5,a:'number'}, {l:6,a:'number'},
    {l:'-', a:'operator'},
    {l:1, a:'number'},
    {l:2,a:'number'}, {l:3,a:'number'},
    {l:'/', a:'operator'},
    {l:0,a:'number'},
    {l:'.',a:'dot'},
    {l:'=',a:'equals'}
]

$q=function(e){
    if(!O(e)){return false}
    if(e.target){e= e.target}
    return $(e)
}

$.wg('jy.clc',{
    _setOptions:function(){this._superApply(arguments)},
    _setOption:function(key,val){
        this._super(key,val)
        if(key=='buttons'){
            this.shell
                .fi('button').rm()
            this._createButtons()._renderMarkup()
        }
        else if (key=='disabled'){
            this.shell.fi('button')
                .button('option', key, val)}
    },
    _create: function(){
        var wg=this, q=wg.element
        q.K('jy-clc')
        wg._createWrapper();
        wg._createButtons();
        wg._renderMarkup()

        this._on({
            'click button':
                this._handleClick
        })
        this._setup()
    },
    _setup:function(){
        this.curDp=[];
        this.runDp=[];
        this.numIp = false;
        return this },
    _createWrapper:function(){
        var wg=this
        this.shell = $('<div>').id('jy-clc-shell').A(
            $.dI( 'jy-clc-displays' ).A(
                $.dK('jy-clc-clculation' ),
                $.dK('jy-clc-display').text(0)
            )
        )
        if(!this.options.showOnCreate){
            this._hide(this.element, this.options.hide, function(){
                wg._trigger('hidden')
            })
        }
    },
    _createButtons:function(){
        var wg=this, ct= $.d().a2(this.shell)
        _.e(wg.options.buttons, function(ob,i){
            var trgRes=wg._trigger('beforeAddButton', null,  ob),bt
            if(!trgRes){return}
            bt = $('<button>')
            bt.text(ob.l)
            bt.button()
            bt.a2(ct)
            if (ob.k){bt.K(ob.k)}
            if(S(ob.a)){bt.da('action', ob.a)}
            else if(F(ob.a)){
                var fnN = 'custom'+i
                wg[_+fnN]=ob.a
                bt.da('action',fnN)
            }
        })
        return wg
    },
    _renderMarkup:function(){
        this.shell.a2(this.element)
    },
    options: {
        buttons: buttons ,
        showOnCreate: false,
        show:true, hide:true,
        beforeAddButton: null,
        shown:null,
        hidden:null
    },
    show:function(){var wg=this
        this._show(this.element, this.options.show, function(){wg._trigger('shown')})},
    hide:function(){var wg=this
        this._hide(this.element, this.options.hide, function(){wg._trigger('hidden')})},
    _destroy:function(){var q= this.element
        q.rK('jy-clc')
        q.E()
    },
    _a2CurDp:function(a){
        this.curDp.push(a);
        this._udDp()
        return this
    },
    _clear:function(e,ui){
        this._setup()
        this._udDp()
        this._udRunDp()
        this.element.fi('.jy-clc-display').tx(0)
    },
    _clearEntry:function(e,q){
        var wg=this,q=this.element
        wg.curDp=[]
        wg._udDp()
    },
    _handleClick:function(e){
        var bt =$(e.target).closest('button'),
            fn=bt.da('action')
        if(fn){this['_'+fn](e,bt)}
    },
    _number:function(e,ui){
        this.curDp.push(ui.text())
        this._udDp()
        this.numIp=true
    },
    _dot:function(e,ui){
        var hasDot=false,
            len= _.z(this.curDp)
        if(!len){
            this.curDp.push('0')}
        while(--len>=0){
            if(this.curDp[len]=='.'){
                hasDot=true;break;}}
        if(hasDot){return false}
        else {
            this._a2CurDp('.')
            //this.curDp.push('.');this._udDp()
        }
    },


    _operator:function(e,o){var wg=this,
        q=wg.element,
        curDp=wg.curDp, runDp=wg.runDp,
        dpEl=q.fi('.jy-clc-display'),arr,str,len,newStr
        //if someone clicks an op-bt before any num-bt clicked,
        //both curDp and runDp arrays will be empty.
        //so if they ARE empty, then we can push
        //whatever is on the 'main' display into current display
        //(at this point it would just be '0'..
        //but later on it could be calculation result)
        if(!_.z(curDp)&&!_.z(wg.runDp)){
            curDp.push(
                dpEl.tx()// <- whatever is currently being displayed
            )
        }
        //if it ends with a trailing dot, remove it
        else if(_.l(curDp)=='.'){
            curDp.pop()}
        //now we want to update the running display (above main display)
        //with buttons pressed so far
        //(we want to do this either if running display is empty
        // or numIp is true)
        if( !_.z(runDp) || wg.numIp ){
            arr=[curDp.join(''),' ',o.tx(), ' ']
            //we space out operator for two reasons:
            //1)looks better
            //2)later on, we'll want to break this array up based on the spaces,
            //so that we can easily seperate out the nums and actual operators
            str=arr.join('')
            runDp.push(str)
        }
        //there's one more condition we need to check:
        //if somone one types two operators in a row
        //we want to replace existing operator with one clicked second
        //check if numIp is false   (set to false when operator bt clicked)
        else if(!wg.numIp){len= _.z(runDp)
            newStr = runDp[len-1]
                .replace(/[\*\-\+\/]/, o.tx())
            runDp.pop()
            runDp.pop(newStr)}
        wg.numIp=false
        wg._udRunDp()
        this._clculate()
    },

    _equals:function(e,o){this._clculate(true)},

    _udDp: function(reset){
        var wg=this, dpEl, dpVal
        if(notTooLong(this)){
            dpEl= this.element.fi('.jy-clc-display')
            if(!_.z(wg.curDp)){dpEl.tx(0)}
            else {dpVal = wg.curDp.join(''); dpEl.tx(dpVal)}
            if(reset){this.curDp=[]}
        }

        function notTooLong(wg){
            return wg.curDp.length<18}
    },
    _udRunDp:function(){

        var wg=this,
            q= wg.element,
            runDp=wg.runDp,
            dpEl=q.fi('.jy-clc-clculation')
        dpEl.tx( runDp.join(''))
        wg.curDp =[]
    },

    _clculate:function(final){var wg=this, q=wg.element,
        runDp=wg.runDp, tmp,trm, ops,res,run,dp,sum
        if(final){sum = [
                q.fi('.jy-clc-clculation').tx(),
                q.fi('.jy-clc-display').tx()
            ].join('')
            wg.curDp=[seqClc(sum)]
            wg._udDp()
            wg.runDp=[]
            wg.numIp=false
            wg._udRunDp()
        }

        else if(_.z(runDp)>1) {
            tmp = runDp.pop()
            trm = tmp.replace(/\s[\+\-\*\/']\s/, '')
            runDp.push(trm)
            res = seqClc(runDp.join(''))
            wg.curDp = [res]
            runDp.pop()
            runDp.push(tmp)
            wg._udDp(true)
        }

        function seqClc(str){
            var  ops = {
                '+': function (x, y) {return x + y},
                '-': function (x, y) {return x - y},
                '*': function (x, y) {return x * y},
                '/': function (x, y) {return x / y}},
                sumA = str.split(' '),
                left= +sumA[0],
                len= _.z(sumA),
                x

            for(x=1;x<len;x=x+2){
                left=ops[ sumA[x] ](
                    left, +sumA[x+1]
                )}

            return left
        }
    }


})


CALC=function(){z();$Ms('clc')

    buttons=[ {l:8,a:'number'}, {l:9,a:'number'}, {l:'+',k:'jy-clc-plus',a:'operator'},
        {l:4,k:'jy-clc-clearfix',a:'number'}] //{l:'Special', a:function(e,ui){$l('special clear!'+ ui)}}
    $CSS({    button:{w:100,h:120},    '.jy-clc-display':{fZ:50,c:'r'}     })
    $.a('hide').$(function(){$('#clc').clc('hide')})
    $.a('show').$(function(){$('#clc').clc('show')})
    $.a('change').$(function(){$('#clc').clc('option','buttons', buttons)})
    $.a('disabled').$(function(){$('#clc').clc('option','disabled',true)})
    $.a('disable').$(function(){$('#clc').clc('disable')})
    $.a('enabled').$(function(){$('#clc').clc('option','disabled',false)})
    $.a('enable').$(function(){$('#clc').clc('enable')})
    d=$.dI('clc').C('s')

    $('#clc').clc({
        //buttons:buttons,
        shown:function(){
            $Ms('shown')},
        hidden:function(){
            $Ms('hidden..')},
        beforeAddButton: function(ev, ob){
            if(ob.l=='MR' ||ob.l=='MS' ||ob.l=='MC'){return false}
        },
        showOnCreate:true,
        show:true

    })

    $('a').button()
}
