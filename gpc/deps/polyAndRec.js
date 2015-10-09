gpc.g.Pol= gpc.g.Polygon = function () {
	this.maxTop;
	this.maxBottom;
	this.maxLeft;
	this.maxRight;
	this.vertices
}  /* of Point */
pg = gpc.g.Pol.prototype
pg.fromArray = function (v) {
	this.vertices = [];
	for (var i = 0; i < v.length; i++) {
		var pointArr = v[i];
		this.vertices.push(new Point(pointArr[0], pointArr[1]));
	}
}
pg.normalize = function () {//Normalize vertices in polygon to be ordered clockwise from most left point*/
	var maxLeftIndex,
			vs = this.vertices,
			newVs = vs,
			i, j, v,reverse=false
	_.e(vs, function (v) {
		if(maxTop == null ||  maxTop.y > v.y || (  maxTop.y == v.y && v.x < maxTop.x)) {maxTop = v }
		if(maxBottom == null || maxBottom.y < v.y || ( maxBottom.y == v.y && v.x > maxBottom.x)) {maxBottom = v}
		if(maxLeft == null ||  maxLeft.x > v.x || ( maxLeft.x == v.x && v.y > maxLeft.y)) {maxLeft = v; maxLeftIndex = i }
		if(maxRight == null || maxRight.x < v.x || ( maxRight.x == v.x && v.y < maxRight.y)) {maxRight = v}
	})
	if (maxLeftIndex > 0) { newVs = [];  j = 0;
		for ( i = maxLeftIndex;i<_.z(vs); i++) {newVs[j++] = vs[i] }
		for ( i = 0; i < maxLeftIndex; i++) { newVs[j++] = vs[i] }
		vs = newVs
	}
	for (var k = 0; k < _.z(vs); k++) {var v = vs[k];
		if (equals(v, maxBottom)) {reverse = true; break} 
		else if (equals(v, maxTop)) {break }
	}
	if (reverse) {
		newVs= []; newVs[0] = vs[0]; j = 1;
		for ( i = _.z(vs) - 1; i > 0; i--) {newVs[j++] = vs[i] }
		vs = newVs
	}
}

pg.getVertexIndex = function (v) {

	for (var i = 0; i < this.vertices.length; i++) {
		if (equals(vertices[i], v)) {
			return i
		}
	}
	return -1;
}

pg.insertVertex = function (v1, v2, newVertex) {
	var v1Index = getVertexIndex(v1), v2Index = getVertexIndex(v2)
	if ((v1Index == -1) || (v2Index == -1)) { return false  }
	if (v2Index < v1Index) {var i = v1Index; v1Index = v2Index; v2Index = i }
	if (v2Index == v1Index + 1) {
		var newVertices = []
		for (var i = 0; i <= v1Index; i++) {newVertices[i] = this.vertices[i] }
		newVertices[v2Index] = newVertex
		for (var i = v2Index; i < this.vertices.length; i++) {newVertices[i + 1] = this.vertices[i] }
		this.vertices = newVertices
	}
	else if ((v2Index == vertices.length - 1) && (v1Index == 0)) {this.vertices.push(newVertex)}
	return true
}


pg.clone = function () {
	var res = new Polygon();
	res.vertices = vertices.slice(this.vertices.length - 1);
	return res;
}


pg.toString = function () {var vs = this.vertices, res = "[", i,v
	for (i = 0; i < _.z(vs); i++) {
		v = vs[i];
		res += (i > 0 ? "," : "") + "[" + v.x + "," + v.y + "]";
	}
	return res + "]"
}


gpc.g.PolygonNode = function (next, x, y) {

	
	function alpha(){
	this.active;
	/* Active flag / v count        */
	this.hole;
	/* Hole / external contour flag      */
	
	/* Left and right vertex list ptrs   */
	this.next;
	/* Pointer to next polygon contour   */
	this.proxy;
	/* Pointer to actual structure used  */
	/* Make v[Clip.LEFT] and v[Clip.RIGHT] point to new vertex */
	}
	
	this.v = [];
	var vn = new VertexNode(x, y);
	this.v[Clip.LEFT] = vn;
	this.v[Clip.RIGHT] = vn;
	this.next = next;
	this.proxy = this;
	/* Initialise proxy to point to p itself */
	this.active = 1; //TRUE
}
pgN = gpc.g.PolygonNode.prototype
pgN.add_right = function (x, y) {
	var nv = new VertexNode(x, y);
	/* Add vertex nv to the right end of the polygon's vertex list */
	this.proxy.v[Clip.RIGHT].next = nv;
	/* Update proxy->v[Clip.RIGHT] to point to nv */
	this.proxy.v[Clip.RIGHT] = nv;
}
pgN.add_left = function (x, y) {
	var proxy = this.proxy;
	var nv = new VertexNode(x, y);
	/* Add vertex nv to the left end of the polygon's vertex list */
	nv.next = proxy.v[Clip.LEFT];
	/* Update proxy->[Clip.LEFT] to point to nv */
	proxy.v[Clip.LEFT] = nv;
}
gpc.g.Rectangle = function (_x, _y, _w, _h) {
	this.x = _x;
	this.y = _y;
	this.w = _w;
	this.h = _h
}
rct = gpc.g.Rectangle.prototype
rct.getMaxY = function () {
	return this.y + this.h
}
rct.getMinY = function () {
	return this.y
}
rct.getMaxX = function () {
	return this.x + this.w
}
rct.getMinX = function () {
	return this.x
}
rct.toString = function () {
	return "[" + x.toString() + " " + y.toString() + " " + w.toString() + " " + h.toString() + "]";
}



