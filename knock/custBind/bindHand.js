
ko.bH=  ko.bindingHandlers
ko.bH.randomOrder = {
    init: function(el, vA) { var ch = ko.vE.firstChild(el),  CH = []
        while(ch){ CH.push(ch); ch = ko.vE.nextSibling(ch) }
        ko.vE.emptyNode(el)
        while(CH.length) {ko.vE.prepend(el, CH.splice(R(CH), 1)[0])}
    }

    /*
     init: function(el, valAcc) {
     var childElems = []
     while(el.firstChild)
     childElems.push(el.removeChild(el.firstChild))
     while(childElems.length) {
     var randomIndex = M.fl(M.rn() * childElems.length),
     chosenChild = childElems.splice(randomIndex, 1);
     el.appendChild(chosenChild[0]);
     }
     }
     */
}
ko.bH.fadeVisible = {
    init: function(el, vA) {// 1st set el vs pop rel to val
        $(el).toggle(ko.unwrap(vA()))},
    update: function(el, vA) {//on change, slowly fade el in/out
        ko.unwrap(vA()) ? $(el).fadeIn() : $(el).fadeOut()}
}
ko.bH.hasFocus = {
    init: function(el, vA) {
        $(el).focus(function(){vA()(1)})
        $(el).blur(function(){vA()(0) }) },

    update: function(el, vA) {
        ko.uw(vA())? el.focus() : el.blur()
    }

}

$bH=function(b,o){
    if(F(o.u)){o.update= o.u}
    if(F(o)){o={update:o}}
    ko.bH[b]=o
    $.fn[b]=function(a){
        this.b(b, a)
    }
}

$bH('slV', function(el, vA) {
    var isChecked = ko.uw( vA() )
    isChecked ? $(el).slD(1800):
        $(el).slU(2000)
})



//<- $.bt('Clear tweets').b$(' $parent.clearResults')
ko.bindingHandlers.randomOrder = {
    init: function(elem, valueAccessor) {
        // Build an array of child elements
        var child = ko.virtualElements.firstChild(elem),
            childElems = [];
        while (child) {
            childElems.push(child);
            child = ko.virtualElements.nextSibling(child);
        }

        // Remove them all, then put them back in a random order
        ko.virtualElements.emptyNode(elem);
        while(childElems.length) {
            var randomIndex = Math.floor(Math.random() * childElems.length),
                chosenChild = childElems.splice(randomIndex, 1);
            ko.virtualElements.prepend(elem, chosenChild[0]);
        }
    }
};