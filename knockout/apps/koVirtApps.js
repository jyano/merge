VIRT=function(){$.z()
    $.d().b({randomOrder:true})
    $.d('First')
    $.d('Second')
    $.d('Third')
    ko.bindingHandlers.randomOrder = {

        init: function(el, valAcc) {
            // Pull out each of the child els into an array
            var childElems = []
            while(el.firstChild)
                childElems.push(el.removeChild(el.firstChild))
            // Put them back in a random order
            while(childElems.length) {
                var randomIndex = M.fl(M.rn() * childElems.length),
                    chosenChild = childElems.splice(randomIndex, 1);
                el.appendChild(chosenChild[0]);
            }
        }
    }
}
//$.ul().bE('mDateTime').A( $.li().A( $.ul() ) )
//   <li>
// <ul data-bind="foreach: $root.matter.index.type()[$data]">
//  <li>
//components



VIRT=function(){$.z()

    $.d().b({randomOrder:true})
    $.d('First')
    $.d('Second')

    $.d('Third')
    ko.bindingHandlers.randomOrder = {

        init: function(elem, valueAccessor) {
            // Pull out each of the child elements into an array
            var childElems = []
            while(elem.firstChild)
                childElems.push(elem.removeChild(elem.firstChild))
            // Put them back in a random order
            while(childElems.length) {
                var randomIndex = M.fl(M.rn() * childElems.length),
                    chosenChild = childElems.splice(randomIndex, 1);
                elem.appendChild(chosenChild[0]);
            }
        }
    }


}

VIRTP=function(){$z()

    ko.bindingProvider.instance.preprocessNode = function(node) {
        // Only react if this is a comment node of the form <!-- template: ... -->
        if (node.nodeType == 8) {
            var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
            if (match) {
                // Create a pair of comments to replace the single comment
                var c1 = document.createComment("ko " + match[1]),
                    c2 = document.createComment("/ko");
                node.parentNode.insertBefore(c1, node);
                node.parentNode.replaceChild(c2, node);

                // Tell Knockout about the new nodes so that it can apply bindings to them
                return [c1, c2];
            }
        }
    }


}
VIRTP=function(){$z()
    ko.bindingProvider.instance.preprocessNode = function(node) {
        // Only react if this is a comment node of the form <!-- template: ... -->
        if (node.nodeType == 8) {
            var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
            if (match) {
                // Create a pair of comments to replace the single comment
                var c1 = document.createComment("ko " + match[1]),
                    c2 = document.createComment("/ko");
                node.parentNode.insertBefore(c1, node);
                node.parentNode.replaceChild(c2, node);
                // Tell Knockout about the new nodes so that it can apply bindings to them
                return [c1, c2];
            }
        }
    }


}

VWW=function(){$.x()


    d= $.d('r',200).A(
        $.h1('hello'),
        $.bt(__)
    )

    //d.$(function(){v.r()})

    mOv=function(){$l('mouse over !')}


    v = $V({

        e: {

            'click button': function(){ $l('$') },

            $$: 'r',

            v: mOv
        },


        q : d,

        r : function(){

            alert('double click')

            $.bd().C(   $r()    )

        }


    })()

}
VIRTUALELS=function(){

    ko.bh.randomOrder = {
        init: function(el, valueAccessor) {

            // Build an array of child elements
            var ch = ko.vE.firstChild(el),
                CH = []
            while(ch){
                CH.push(ch)
                ch = ko.vE.nextSibling(ch)
            }
            // Remove them all, then put them back in a random order
            ko.vE.emptyNode(el)
            while(CH.length) {ko.vE.prepend(el, CH.splice(R(CH), 1)[0])}

        }

    }
}