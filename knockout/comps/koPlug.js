function pluginStuff() {
    ko.observableArray.fn.filterByProperty = function (propName, matchValue) {
        return ko.pureComputed(function () {
            var allItems = this(),
                matchingItems = [];
            for (var i = 0; i < allItems.length; i++) {
                var current = allItems[i];
                if (ko.unwrap(current[propName]) === matchValue)
                    matchingItems.push(current)
            }
            return matchingItems
        }, this)
    }
    ko.bindingProvider.instance.preprocessNode = function (node) {
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
    };


// Prototype for an observable<->URL binding plugin.
// CAN'T FIND '$.address'
    (function () {
        var currentParams = {},
            updateTimer

        function ensureString(value) {
            return ((value === null) || (value === undefined)) ? value : value.toString();
        }

        // Gives an address (URL) to a view model state
        ko.linkObservableToUrl = function (observable, hashPropertyName, defaultValue) {
            // When the observable changes, update the URL
            observable.subscribe(function (value) {
                var valueToWrite = value === defaultValue ? null : ensureString(value);
                if (currentParams[hashPropertyName] !== valueToWrite) {
                    currentParams[hashPropertyName] = valueToWrite;
                    queueAction(function () {
                        for (var key in currentParams)
                            $.address.parameter(key, currentParams[key]);
                        $.address.update();
                    });
                }
            });
            // When the URL changes, update the observable
            $.address.change(function (evt) {
                currentParams[hashPropertyName] = hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : null;
                observable(hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : defaultValue);
            });
        }

        function queueAction(action) {
            if (updateTimer)
                clearTimeout(updateTimer);
            updateTimer = setTimeout(action, 0);
        }

        // $.address.autoUpdate(false)

    })()


    ko.observableArray.fn.filterByProperty = function (propName, matchValue) {
        return ko.pc(function () {
            var allItems = this(), matchingItems = []
            for (var i = 0; i < allItems.length; i++) {
                var current = allItems[i]
                if (ko.unwrap(current[propName]) === matchValue)
                    matchingItems.push(current)
            }
            return matchingItems
        }, this)
    }


}
