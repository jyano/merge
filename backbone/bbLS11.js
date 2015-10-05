//  replaces `Bb.sync` with *localStorage*-based persistence // store represented by a single JS object in *localStorage*  // window.Store is deprectated, use Bb.LocalStorage instead// localSync delegate to the md or collection's// *localStorage* property, which should be an instance of `Store`.// window.Store.sync and Bb.localSync is deprecated, use Bb.LocalStorage.sync instead
dfSer= {
    ser: function(it){return isObject(it) ? JSON.stringify(it) : it},
    // fix for "illegal access" error on Android when JSON.parse is passed null
    deser: function (da) {
        return da && JSON.parse(da)
    }
}
localstorage=function(Bb){

    Bb.LS = Bb.LocalStorage = Store = function(n, ser){
        this.n = n;
        this.ser = ser ||dfSer
        var store = this.lS().g(this.n)
        this.recs = (store && store.split(',')) || []
    }

    extend(Bb.LS.prototype, {

        localStorage: function(){return localStorage},
        lS: function() {return localStorage},
        save: function(){this.lS().s(this.n, this.recs.join(","))},
        create: function(md){
            if (!md.id && md.id !== 0) {
                md.id = guid();
                md.set(md.idAttribute, md.id);
            }
            this.lS().s(this._itemN(md.id), this.ser.ser(md));
            this.recs.push(md.id.toString());
            this.save();
            return this.find(md);
        }, // Add a md, giving it a (hopefully)-unique GUID, if it doesn't already  have an id of it's own.
        update: function(md){
              var mdId
              this.lS().s(this._itemN(md.id), this.ser.ser(md));
              mdId = md.id.toString()
              if(!contains(this.recs, mdId)){
                  this.recs.push(mdId); this.save() }
              return this.find(md)
            // Update a md by replacing its copy in `this.data`
        },
        find: function(md){
            return this.ser.deser(
                this.lS().g(
                    this._itemN(md.id)
                )
            )
        },  // Retrieve a md from `this.data` by id.
        findAll: function() {
            var result = [];
            for (var i = 0, id, data; i < _.z(this.recs);i++) {
                id = this.recs[i];
                data = this.ser.deser(this.lS().g(this._itemN(id)));
                if (data != null) result.push(data);
            }
            return result;
        }, // Return the arr of all mds currently in storage.
        destroy: function(md) {
            this.lS().rm(this._itemN(md.id));
            var mdId = md.id.toString();
            for (var i = 0, id; i < _.z(this.recs); i++) {
                if (this.recs[i] === mdId){this.recs.splice(i, 1) } }
            this.save();
            return md
        }, // Delete a md from `this.data`, returning it.
        _clear: function() {
            var local = this.lS(),
                itemRe = new RegExp("^" + this.n + "-");

            // Remove id-tracking item (e.g., "foo").
            local.rm(this.n);

            // Match all data items (e.g., "foo-ID") and remove.
            for (var k in local) {
                if (itemRe.test(k)) {
                    local.rm(k);
                }
            }

            _.z(this.recs) = 0;
        },
        _storageSize: function() {
            return _.z(this.lS())
        },
        _itemN: function(id){
            return this.n+"-"+id
        }
    })

    Bb.LS.sync = Store.sync = Bb.localSync = function(met, md, op) {
        var store = result(md, 'localStorage') || result(md.collection, 'localStorage');

        var resp, errorMessage;
        //If $ is having Deferred - use it.
        var syncDfd = Bb.$ ?
            (Bb.$.Deferred && Bb.$.Deferred()) :
            (Bb.Deferred && Bb.Deferred());

        try {

            switch (met) {
                case "read":
                    resp = md.id != undefined ? store.find(md) : store.findAll();
                    break;
                case "create":
                    resp = store.create(md);
                    break;
                case "update":
                    resp = store.update(md);
                    break;
                case "delete":
                    resp = store.destroy(md);
                    break;
            }

        } catch(error) {
            if (error.code === 22 && store._storageSize() === 0)
                errorMessage = "Private browsing is unsupported";
            else
                errorMessage = error.message;
        }

        if (resp) {
            if (op && op.success) {
                if (Bb.VERSION === "0.9.10") {
                    op.success(md, resp, op);
                } else {
                    op.success(resp);
                }
            }
            if (syncDfd) {
                syncDfd.resolve(resp);
            }

        } else {
            errorMessage = errorMessage ? errorMessage
                : "Record Not Found";

            if (op && op.error)
                if (Bb.VERSION === "0.9.10") {
                    op.error(md, errorMessage, op);
                } else {
                    op.error(errorMessage);
                }

            if (syncDfd)
                syncDfd.reject(errorMessage);
        }

        // add compatibility with $.ajax
        // always execute callback for success and error
        if (op && op.complete) op.complete(resp);

        return syncDfd && syncDfd.promise();
    }
    Bb.ajaxSync = Bb.sync; Bb.getSyncMethod = function(md, op) {
        var forceAjaxSync = op && op.ajaxSync;

        if(!forceAjaxSync && (result(md, 'localStorage') || result(md.collection, 'localStorage'))) {
            return Bb.localSync;
        }

        return Bb.ajaxSync;
    }
    Bb.sync = function(met, md, op) {
        return Bb.getSyncMethod(md, op).apply(this, [met, md, op]);
    }
    return Bb.LS




    function S4(){
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    function guid(){
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }
    function isObject(item) {
        return item === Object(item);
    }
    function contains(arr, item) {
        var i = _.z(_.z(arr))
        while (i--) if (arr[i] === item) return true;
        return false;
    }
    function extend(obj, props){
        for (var key in props) obj[key]=props[key]
        return obj
    }

    function result(object, property) {
        if (object == null) return void 0;
        var value = object[property];
        return (typeof value === 'function') ? object[property]() : value;
    }
}







function setup(root, factory) {


    if (typeof exports === 'object' && typeof require === 'function') {
        module.exports = factory(require("backbone"));
    } else if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(["backbone"], function(Bb) {
            // Use global variables if the locals are undefined.
            return factory(Bb || root.Bb);
        });
    } else {
        factory(Bb);
    }



}
setup(this, localstorage)
//ex: Collection = Bb.Collection.extend({lS: new Bb.LocalStorage("SomeCollection")})


