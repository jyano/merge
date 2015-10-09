
gpc = gpcas = {};
gpc.u = gpc.util = {};
gpc.g = gpc.geometry = {};

Point = gpc.Point = function (x, y) {
	this.x = x;
	this.y = y;
}
gpc.u.ArrayHelper = function () {}
stt = gpc.u.ArrayHelper;
stt.create2DArray = function (x, y) {
	var a = [];
	for (var i = 0; i < x; i++) {
		a[i] = [];
	}
	return a;
}
stt.valueEqual = function (obj1, obj2) {
	if (obj1 == obj2) return true;
	if (equals(obj1, obj2)) return true;
	return false;
}
stt.sortPointsClockwise = function (vertices) {
	var isArrayList = false;
	if (vertices instanceof ArrayList) {
		vertices = vertices.toArray();
		isArrayList = true;
	}
	//point
	var maxTop = null;
	var maxBottom = null;
	var maxLeft = null;
	var maxRight = null;
	var maxLeftIndex;
	var newVertices = vertices;
	for (var i = 0; i < vertices.length; i++) {
		var vertex = vertices[i];
		if ((maxTop == null) || (maxTop.y > vertex.y) || ((maxTop.y == vertex.y) && (vertex.x < maxTop.x))) {
			maxTop = vertex;
		}
		if ((maxBottom == null) || (maxBottom.y < vertex.y) || ((maxBottom.y == vertex.y) && (vertex.x > maxBottom.x))) {
			maxBottom = vertex;
		}
		if ((maxLeft == null) || (maxLeft.x > vertex.x) || ((maxLeft.x == vertex.x) && (vertex.y > maxLeft.y))) {
			maxLeft = vertex;
			maxLeftIndex = i;
		}
		if ((maxRight == null) || (maxRight.x < vertex.x) || ((maxRight.x == vertex.x) && (vertex.y < maxRight.y))) {
			maxRight = vertex;
		}
	}
	if (maxLeftIndex > 0) {
		newVertices = []
		var j = 0;
		for (var i = maxLeftIndex; i < vertices.length; i++) {
			newVertices[j++] = vertices[i];
		}
		for (var i = 0; i < maxLeftIndex; i++) {
			newVertices[j++] = vertices[i];
		}
		vertices = newVertices;
	}
	var reverse = false;
	for (var i = 0; i < vertices.length; i++) {
		var vertex = vertices[i];
		if (equals(vertex, maxBottom)) {
			reverse = true;
			break;
		} else if (equals(vertex, maxTop)) {
			break;
		}
	}
	if (reverse) {
		newVertices = []
		newVertices[0] = vertices[0];
		var j = 1;
		for (var i = vertices.length - 1; i > 0; i--) {
			newVertices[j++] = vertices[i];
		}
		vertices = newVertices;
	}
	return (isArrayList ? (new ArrayList(vertices)) : (vertices));
}
ArrayHelper = gpc.u.ArrayHelper
gpc.u.AL = gpc.u.ArrayList = function (arr) {this._a= this._arr = this._array = A(arr)? arr: []}
var p = gpc.u.AL.prototype
p.A=p.add = function (v) { this._array.push(v) }
p.g = p.get = function (i) { return this._array[i] }
p.z = p.size = function () {return _.z(this._array) }
p.clr=p.clear = function () {this._array = []}
p.eq=p.equals = function (ls) {
	if (!_.z(this._array, ls.size())) {return false}
	for (var i = 0; i < _.z(this._array); i++) {
		if (!ArrayHelper.valueEqual(this._array[i], ls.get(i))) {
			return false}}
	return true
}
p.hC=p.hashCode = function () {return 0}
p.iE=p.isEmpty = function () {return (_.z(this._array,0) )}
p.tA= p.toArray = function () {return this._array}

gpc.g.Cl = gpc.g.Clip = function () {
}
gpc.g.Cl.DEBUG = false;
gpc.g.Cl.GPC_EPSILON = 2.2204460492503131e-016;
gpc.g.Cl.GPC_VERSION = "2.31";
gpc.g.Cl.LEFT = 0;
gpc.g.Cl.RIGHT = 1;
gpc.g.Cl.ABOVE = 0;
gpc.g.Cl.BELOW = 1;
gpc.g.Cl.CLIP = 0;
gpc.g.Cl.SUBJ = 1;


function equals(x1, x) {
	var p;
	for (p in x1) {
		if (U(x[p])) {
			return false
		}
	}
	for (p in x1) {
		if (x1[p]) {
			switch (typeof(x1[p])) {
				case 'object':
					if (!equals(x1[p], x[p])) {
						return false
					}
					;
					break;
				case 'function':
					if (U(x[p]) || (p != 'equals' && x1[p].toString() != x[p].toString())) {
						return false
					}
					break;
				default:
					if (x1[p] != x[p]) {
						return false;
					}
			}
		}
		else {
			if (x[p]) {
				return false;
			}
		}
	}
	for (p in x) {
		if (U(x1[p])) {
			return false
		}
	}
	return true;
}
p = gpc.g.Clip.prototype