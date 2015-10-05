root=window
Bb.lS= Bb.LocalStorage =  Store = function(n,ser){
    var store; if( !this.localStorage ) {throw "Bb.localStorage: Environment does not support localStorage."}
    this.n = n

    this.ser  = ser || {
        ser: function(i) {return isObject(i) ? JSON.stringify(i):i},
        deser: function (d) {return d && JSON.parse(d)}
    }
    store = this.lS().g(this.n);
    this.recs = (store && store.split(","))||[];
}

extend(Bb.lS.prototype, {

    sv: function() {
         this.lS().s(
             this.n, this.recs.join(",")
         )
    }, // Add a md, giving it a (hopefully)-unique GUID, if it doesn't already// have an id of it's own.
    cr: function(md) {if (!md.id && md.id !== 0) {md.id = guid();
            md.set(md.idAttribute, md.id)
        }
        this.lS().s(this._itemName(md.id), this.ser.ser(md));
        this.recs.push(_.tS(md.id));this.sv(); return this.f(md)
    },
    u: function(md) {var mdId
        this.lS().s(this._itemName(md.id), this.ser.ser(md))
        mdId = _.tS(md.id)
        if (!contains(this.recs, mdId)) {
            this.recs.push(mdId); this.sv() }
        return this.f(md)},
    f: function(md) {return this.ser.deser(this.lS().g(this._itemName(md.id)))},
    fA: function() {var res = [];for (var i = 0, id, d; i < _.z(this.recs); i++) {
            id = this.recs[i];
            d = this.ser.deser(this.lS().g(this._itemName(id)));
            if (d != null) {res.push(d)}}
        return res;},
    // Delete a md from `this.data`, returning it.
    ds: function(md) {this.lS().rm(this._itemName(md.id));
        var mdId = _.tS(md.id)
        for (var i = 0, id; i <  _.z(this.recs); i++) {if (this.recs[i] === mdId) {this.recs.splice(i, 1);}}
        this.sv();return md},
    lS: function() {var lS= localStorage;
        lS.rm=lS.removeItem;
        lS.g=lS.getItem;
        lS.s=lS.setItem; return lS},
    localStorage: function() {return localStorage},
    // Clear localStorage for specific collection.
    _clear: function() {var lS = this.lS(); lS.rm(this.n)
        for (var k in lS) {if (  new RegExp("^" + this.n + "-").test(k)) {lS.rm(k);}}
        _.z(this.recs) = 0},
    _storageSize: function() {return _.z(this.lS())},
    _itemName: function(id) {return this.n+"-"+id;}
})
// localSync delegate to the md or collection's
// *localStorage* property, which should be an instance of `Store`.
// window.Store.sync and Bb.localSync is deprecated, use Bb.lS.sync instead
Bb.lS.sync =  Store.sync = Bb.localSync = function(met, md, op) {
    var store = result(md, 'localStorage') || result(md.collection, 'localStorage'),
        resp, zMs, syncDfd = Bb.$ ? (Bb.$.Deferred && Bb.$.Deferred()) : (Bb.Deferred && Bb.Deferred())
    try {
        switch (met) {
            case "read":resp = md.id != undefined ? store.f(md) : store.fA();break;
            case "create":resp = store.cr(md);break;
            case "update":resp = store.u(md);break;
            case "delete":resp = store.ds(md);break;}} catch(z) {
        if (z.code === 22 && store._storageSize() === 0){
            zMs = "Private browsing is unsupported";
        }
        else
        {
            zMs = z.message;
        }
    }
    if (resp) {
        if (op && op.success) {if (Bb.VERSION === "0.9.10") {op.success(md, resp, op);}
        else {op.success(resp);}}
        if (syncDfd) {syncDfd.resolve(resp);}
    }
    else {
        zMs = zMs ? zMs : "Record Not Found";
        if (op && op.z) { if (Bb.VERSION === "0.9.10") {op.z(md, zMs, op);} else {op.z(zMs);} }
        if (syncDfd){syncDfd.reject(zMs)}
    }
    // add compatibility with $.ajax// always execute callback for success and z
    if (op && op.complete) op.complete(resp);
    return syncDfd && syncDfd.promise();
}
Bb.ajaxSync = Bb.sync;
Bb.getSyncMethod = function(md, op) {
    var forceAjaxSync = op && op.ajaxSync;
    if(!forceAjaxSync && (result(md, 'localStorage') || result(md.collection, 'localStorage'))) {
        return Bb.localSync;
    }
    return Bb.ajaxSync;
};
// Override 'Bb.sync' to default to localSync,
// the original 'Bb.sync' is still available in 'Bb.ajaxSync'
Bb.sync = function(met, md, op) {
    return Bb.getSyncMethod(md, op).apply(this, [met, md, op]);
};



function S4() {

    return ((( 1+M.random())*0x10000)|0)
        .toString(16).substring(1);

}

function guid() {
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
};
function isObject(item) {
    return item === Object(item);
}
function contains(arr, item) {
    var i = _.z(arr)
    while (i--) if (arr[i] === item) return true;
    return false;
}
function extend(obj, props) {
    for (var key in props) obj[key] = props[key]
    return obj;}
function result(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return (typeof value === 'function') ? object[property]() : value;
}


BBLS=function(){$.x();$Ms('BBlS')
    Collection = Bb.Collection.extend({
        lS: new Bb.lS("SomeCollection")
    })
}
 