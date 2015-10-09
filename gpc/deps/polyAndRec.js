gpc.g.Polygon = function () {
	this.maxTop;
	this.maxBottom;
	this.maxLeft;
	this.maxRight;
	this.vertices
}  /* of Point */;
pg = gpc.g.Polygon.prototype
pg.fromArray = function (v) {
	this.vertices = [];
	for (var i = 0; i < v.length; i++) {
		var pointArr = v[i];
		this.vertices.push(new Point(pointArr[0], pointArr[1]));
	}
}
pg.normalize = function () {//Normalize vertices in polygon to be ordered clockwise from most left point*/
	var maxLeftIndex;
	var vertices = this.vertices;
	var newVertices = this.vertices;
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
		newVertices = [];
		var j = 0;
		for (var i = maxLeftIndex; i < vertices.length; i++) {
			newVertices[j++] = this.vertices[i];
		}
		for (var i = 0; i < maxLeftIndex; i++) {
			newVertices[j++] = this.vertices[i];
		}
		vertices = newVertices;
	}
	var reverse = false;
	for (var k = 0; k < this.vertices.length; k++) {
		var vertex = this.vertices[k];
		if (equals(vertex, maxBottom)) {
			reverse = true;
			break;
		} else if (equals(vertex, maxTop)) {
			break;
		}
	}
	if (reverse) {
		newVertices = [];
		newVertices[0] = vertices[0];
		var j = 1;
		for (var i = vertices.length - 1; i > 0; i--) {
			newVertices[j++] = this.vertices[i];
		}
		vertices = newVertices;
	}
}
pg.getVertexIndex = function (vertex) {
	for (var i = 0; i < this.vertices.length; i++) {
		if (equals(vertices[i], vertex)) {
			return i
		}
	}
	return -1;
}
pg.insertVertex = function (vertex1, vertex2, newVertex) {
	var vertex1Index = getVertexIndex(vertex1);
	var vertex2Index = getVertexIndex(vertex2);
	if ((vertex1Index == -1) || (vertex2Index == -1)) {
		return false
	}
	if (vertex2Index < vertex1Index) {
		var i = vertex1Index;
		vertex1Index = vertex2Index;
		vertex2Index = i;
	}
	if (vertex2Index == vertex1Index + 1) {
		var newVertices = [];
		for (var i = 0; i <= vertex1Index; i++) {
			newVertices[i] = this.vertices[i];
		}
		newVertices[vertex2Index] = newVertex;
		for (var i = vertex2Index; i < this.vertices.length; i++) {
			newVertices[i + 1] = this.vertices[i];
		}
		this.vertices = newVertices;
	} else if ((vertex2Index == vertices.length - 1) && (vertex1Index == 0)) {
		this.vertices.push(newVertex);
	}
	return true;
}
pg.clone = function () {
	var res = new Polygon();
	res.vertices = vertices.slice(this.vertices.length - 1);
	return res;
}
pg.toString = function () {
	var vertices = this.vertices;
	var res = "[";
	for (var i = 0; i < vertices.length; i++) {
		var vertex = vertices[i];
		res += (i > 0 ? "," : "") + "[" + vertex.x + "," + vertex.y + "]";
	}
	res += "]";
	return res;
}
gpc.g.PolygonNode = function (next, x, y) {
	this.active;
	/* Active flag / vertex count        */
	this.hole;
	/* Hole / external contour flag      */
	this.v = [];
	/* Left and right vertex list ptrs   */
	this.next;
	/* Pointer to next polygon contour   */
	this.proxy;
	/* Pointer to actual structure used  */
	/* Make v[Clip.LEFT] and v[Clip.RIGHT] point to new vertex */
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



