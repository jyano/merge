$l('bbHs')

wd=window
 // Handles cross-browser history management, based on either
// [pushState](http://diveintohtml5.info/history.html) and real URLs, or
// [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
// and URL frgs. If the browser supports neither (old IE, natch),
// falls back to polling.
History = Bb.History = function(){  Bb.handlers = []  };
History.started = false
MetsOb = {
    interval: 50, // default interval to poll for hash changes, if necessary, istwenty times a second.
    atRoot: function(){var Hs=this; return  Hs.location.pathname.replace(/[^\/]$/, '$&/')=== Hs.root && !Hs.getSearch()}, //   at  app rooot?

    matchRoot: function () {var Hs=this; return  Hs.root === Hs.decodeFragment(Hs.location.pathname).slice(0, Hs.root.length - 1) + '/';}, //   pathname matches rooot?

    decodeFragment: function (frg) {return decodeURI(frg.replace(/%25/g, '%2525'))}, // Unicode characters in `location.pathname` are percent encoded so they're// decoded for comparison. `%25` should not be decoded since it may be part// of an encoded parameter.

    getSearch: function () {var Hs=this,match = Hs.location.href.replace(/#.*/, '').match(/\?.+/);return match ? match[0] : '';},// In IE6, the hash frg and search params are incorrect if the frg contains `?`.
    getHash: function (wd) {
        var Hs=this,
            match = (wd || Hs).location.href.match(/#(.*)$/);
        return match ? match[1] : '';
    },  // Gets the true hash value. Cannot use location.hash directly due to bug // in Firefox where location.hash will always be decoded.



    getPath: function () {var Hs=this

        return ditchLeadSlash( Hs.decodeFragment(
            Hs.location.pathname + Hs.getSearch()
        ).slice(Hs.root.length - 1))

        function ditchLeadSlash(path){return path.charAt(0) === '/' ? path.slice(1) : path}
    }, // Get the pathname and search params, without the root.


    getFragment: function (frg){

        var Hs=this,  // Get the cross-browser normalized URL frg from the path or hash.
        frg = frg?
            frg:
            (Hs._usePushState || !Hs._wantsHashChange)? Hs.getPath(): Hs.getHash();

        return frg.replace(  /^[#\/]|\s+$/g , '')

        //routeStripper :  strips a leading hash/slash and trailing space


    },


    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: start,



    stop: function () {

        // Disable Bb.history, perhaps temporarily. Not useful in a real app,
        // but possibly useful for unit testing Routers.
        // Add a cross-platform `removeEventListener` shim for older browsers.
        var  Hs=this, removeEventListener = wd.removeEventListener ||
            function (eventName, listener) {return detachEvent('on' + eventName, listener)}

        // Remove wd listeners.
        if (Hs._usePushState) {
            removeEventListener('popstate', Hs.checkUrl, false);
        }
        else if (Hs._useHashChange && !Hs.iframe) {
            removeEventListener('hashchange', Hs.checkUrl, false);
        }

        // Clean up the iframe if necessary.
        if (Hs.iframe) {
            document.body.removeChild(Hs.iframe);
            Hs.iframe = null;
        }

        // Some environments will throw when clearing an undefined interval.
        if (Hs._checkUrlInterval) clearInterval(Hs._checkUrlInterval);
        History.started = false;
    },
    route: function (route, fn) { var Hs=this // Add a route to be tested when the frg changes. Routes added later
        // may override previous routes.
        Hs.handlers.unshift({route: route, callback: fn});
    },
    checkUrl: function (e) {  // Checks the current URL to see if it has changed, and if it has,
        // calls `loadUrl`, normalizing across the hidden iframe.
        var Hs=this, current = Hs.getFragment();

        // If the user pressed the back button, the iframe's hash will have
        // changed and we should use that for comparison.
        if (current === Hs.frg && Hs.iframe) {
            current = Hs.getHash(Hs.iframe.contentWindow);
        }

        if (current === Hs.frg) return false;
        if (Hs.iframe) Hs.navigate(current);
        Hs.loadUrl();
    },
    loadUrl: function (frg) { var Hs=this// Attempt to load the current URL frg. If a route succeeds with a
        // match, returns `true`. If no defined routes matches the frg,
        // returns `false`.
        // If the root doesn't match, no routes can match either.
        if (!Hs.matchRoot()) return false;
        frg = Hs.frg = Hs.getFragment(frg);
        return _.some(Hs.handlers, function (handler) {
            if (handler.route.test(frg)) {
                handler.callback(frg);
                return true;
            }
        });
    },
    navigate: navigate,
    _updateHash: function (location, frg, replace) {location.hash = replace?     location.replace( location.href.replace(/(javascript:|#).*$/, '') + '#' + frg) : '#' + frg;}  // Update the hash location, // (either replacing the current entry, or adding   new one to   browser history) // Some browsers require that `hash` contains a leading #
}
_.x(History.prototype, Events, MetsOb )
Bb.history = new History  // (default Bb.history)
function navigate(frg, op){

    // Save a frg into the hash history,

    var Hs=this, url, metName
    if (!this.started){return false}

    // You are responsible for properly URL-encoding
    // the frg in advance.

    op=navOp(op)

    // Normalize the frg.
    frg = Hs.getFragment(frg || '')

    url = Url(  Hs.root, frg  )

    frg = Hs.decodeFragment(stripUrlOfHash(frg))

    if (Hs.frg === frg) {return}

    Hs.frg = frg

    if (Hs._usePushState) {// If pushState is available, we use it to set the frg as a real URL
        metName= op.replace ? 'replaceState' : 'pushState'
        Hs.history[metName] ({}, document.title, url)
    }

     // If hash changes haven't been explicitly disabled, update the hash frg to store history.


    else if (Hs._wantsHashChange) {

        Hs._updateHash(Hs.location, frg, op.replace)

        if (Hs.iframe && (frg !== Hs.getHash(Hs.iframe.contentWindow))) {
            var iWindow = Hs.iframe.contentWindow;

            // Opening and closing the iframe tricks IE7 and earlier to push a
            // history entry on hash-tag change.  When replace is true, we don't
            // want Hs.
            if (!op.replace) {
                iWindow.document.open();
                iWindow.document.close();
            }

            Hs._updateHash(iWindow.location, frg, op.replace);
        }

        // If you've told us that you explicitly don't want fallback hashchange-based history, then `navigate` becomes a page refresh.
    }
    else {return Hs.location.assign(url)}
    if (op.trigger) {return Hs.loadUrl(frg);}

    function navOp(op){

// trigger: true`  to have  route cb fired (not usually desirable)
//  replace: true`  to modify  curr  URL w/o adding hs entry (replace  URL state)


        if ( op === true) {op = {trigger: true}};
        op = op || {trigger: true}

        return op
    }
    function stripUrlOfHash(frg){
        return  frg.replace(/#.*$/, '')
    }
    function Url(root, frg){

        return (noFrg(frg)? slicedRoot(root):root) + frg
        function slicedRoot(root){  // Don't include a trailing slash on the rooot.
            return root.slice(0, -1) || '/'}
        function noFrg(frg){return frg === '' || frg.charAt(0) === '?'}
    }

}
function start(op){var Hs=this, root; setUp()

   // Transition from hashChange to pushState or vice versa if both are requested.
    if (Hs._wantsHashChange && Hs._wantsPushState) {
    // If we've started off with a route from a `pushState`-enabled browser,
    // but we're currently in a browser that doesn't support it...
        if (!Hs._hasPushState && !Hs.atRoot()) {
            root = Hs.root.slice(0, -1) || '/'; Hs.location.replace(root + '#' + Hs.getPath());
            return true
        }// Return immediately as browser will do redirect to new url
        else if (Hs._hasPushState && Hs.atRoot()) {
            Hs.navigate(
                Hs.getHash(), {replace: true}
            )
        }// Or if we've started out with a hash-based route, but we're currently  in a browser where it could be `pushState`-based instead...
    }
    // Proxy an iframe to handle location events if the browser doesn't // support the `hashchange` event, HTML5 history, or the user wants // `hashChange` but not `pushState`.
    if (!Hs._hasHashChange && Hs._wantsHashChange && !Hs._usePushState) {
        Hs.iframe = document.createElement('iframe');
        Hs.iframe.src = 'javascript:0';
        Hs.iframe.style.display = 'none';
        Hs.iframe.tabIndex = -1;
        var body = document.body;
        // Using `appendChild` will throw on IE < 9 if the document is not ready.
        var iWindow = body.insertBefore(Hs.iframe, body.firstChild).contentWindow;
        iWindow.document.open();
        iWindow.document.close();
        iWindow.location.hash = '#' + Hs.frg;
    }
    // Depending on whether we're using pushState or hashes, and whether 'onhashchange' is supported, determine how we check the URL state.
    if (Hs._usePushState) {addEventListener('popstate', Hs.checkUrl, false)}
    else if (Hs._useHashChange && !Hs.iframe) {addEventListener('hashchange', Hs.checkUrl, false);}
    else if (Hs._wantsHashChange) {Hs._checkUrlInterval = _.sI(Hs.checkUrl, Hs.interval);}
    if (!Hs.op.silent) {return Hs.loadUrl()}

    function setUp(){

        if (Hs.started) {throw new Error('Bb.history has already been started')}
        Hs.started = true;

        // Figure out the initial configuration. Do we need an iframe? // Is pushState desired ... is it available?

        Hs.op = Hs.options = _.x({root: '/'}, Hs.options, op)
        Hs.root = Hs.op.root

        Hs._wantsHashChange = Hs.op.hashChange !== false
        Hs._wantsPushState = !!Hs.op.pushState


        Hs._hasHashChange = 'onhashchange' in wd && (document.documentMode === void 0 || document.documentMode > 7);
        Hs._hasPushState = !!(Hs.history && Hs.history.pushState)


        Hs._useHashChange = Hs._wantsHashChange && Hs._hasHashChange;
        Hs._usePushState = Hs._wantsPushState && Hs._hasPushState;

        Hs.frg = Hs.getFragment();

        // Normalize root to always include a leading and trailing slash.
        Hs.root = ('/' + Hs.root + '/').replace(/^\/+|\/+$/g, '/') //   rootStripper  ( strips leading and trailing slashes)

    }
}
