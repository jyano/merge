function late() {
    toDep()
    function toDep() {
        bb = Bb
        $P = function () {
            md = Bb.Model.prototype
            vw = Bb.View.prototype
            rt = Bb.Router.prototype
            cl = Bb.Collection.prototype
        }
        $P()
    }
//alert:
    _.ex = $ext = ext = function ext(o) {
        alert('_.ex')
        o.e = o.extend
        return o
        // https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
    }
}