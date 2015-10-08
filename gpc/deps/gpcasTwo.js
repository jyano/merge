
function polyDf() {
/////////////// PolyDefault  /////////////////////
	/**
	 * <code>PolyDefault</code> is a default <code>Poly</code> implementation.
	 * It provides support for both complex and simple polygons.  A <i>complex polygon</i>
	 * is a polygon that consists of more than one polygon.  A <i>simple polygon</i> is a
	 * more traditional polygon that contains of one inner polygon and is just a
	 * collection of points.
	 * <p>
	 * <b>Implementation Note:</b> If a point is added to an empty <code>PolyDefault</code>
	 * object, it will create an inner polygon of type <code>PolySimple</code>.
	 *
	 * @see PolySimple
	 *
	 * @author  Dan Bridenbecker, Solution Engineering, Inc.
	 */
	
	
	
	gpcas.geometry.PolyDefault = function (isHole) {
		if (isHole == null) isHole = false;
		/**
		 * Only applies to the first poly and can only be used with a poly that contains one poly
		 */
		this.m_IsHole = isHole;
		this.m_List = new ArrayList();
	}
	/**
	 * Return true if the given object is equal to this one.
	 */
	gpcas.geometry.PolyDefault.prototype.equals = function (obj) {
		if (!(obj instanceof PolyDefault)) {
			return false;
		}
		var that = obj;
		if (this.m_IsHole != that.m_IsHole) return false;
		if (!equals(this.m_List, that.m_List)) return false;
		return true;
	}
	/**
	 * Return the hashCode of the object.
	 *
	 * @return an integer value that is the same for two objects
	 * whenever their internal representation is the same (equals() is true)
	 **/
	gpcas.geometry.PolyDefault.prototype.hashCode = function () {
		var m_List = this.m_List;
		var result = 17;
		result = 37 * result + m_List.hashCode();
		return result;
	}
	/**
	 * Remove all of the points.  Creates an empty polygon.
	 */
	gpcas.geometry.PolyDefault.prototype.clear = function () {
		this.m_List.clear();
	}
	gpcas.geometry.PolyDefault.prototype.add = function (arg0, arg1) {
		var args = [];
		args[0] = arg0;
		if (arg1) {
			args[1] = arg1;
		}
		if (args.length == 2) {
			this.addPointXY(args[0], args[1]);
		} else if (args.length == 1) {
			if (args[0] instanceof Point) {
				this.addPoint(args[0]);
			} else if (args[0] instanceof gpcas.geometry.PolySimple) {
				this.addPoly(args[0]);
			} else if (args[0] instanceof Array) {
				var arr = args[0];
				if ((arr.length == 2) && (arr[0] instanceof Number) && (arr[1] instanceof Number)) {
					this.add(arr[0], arr[1])
				} else {
					for (var i = 0; i < args[0].length; i++) {
						this.add(args[0][i]);
					}
				}
			}
		}
	}
	/**
	 * Add a point to the first inner polygon.
	 * <p>
	 * <b>Implementation Note:</b> If a point is added to an empty PolyDefault object,
	 * it will create an inner polygon of type <code>PolySimple</code>.
	 */
	gpcas.geometry.PolyDefault.prototype.addPointXY = function (x, y) {
		this.addPoint(new Point(x, y));
	}
	/**
	 * Add a point to the first inner polygon.
	 * <p>
	 * <b>Implementation Note:</b> If a point is added to an empty PolyDefault object,
	 * it will create an inner polygon of type <code>PolySimple</code>.
	 */
	gpcas.geometry.PolyDefault.prototype.addPoint = function (p) {
		var m_List = this.m_List;
		if (m_List.size() == 0) {
			m_List.add(new PolySimple());
		}
		(m_List.get(0)).addPoint(p);
	}
	/**
	 * Add an inner polygon to this polygon - assumes that adding polygon does not
	 * have any inner polygons.
	 *
	 * @throws IllegalStateException if the number of inner polygons is greater than
	 * zero and this polygon was designated a hole.  This would break the assumption
	 * that only simple polygons can be holes.
	 */
	gpcas.geometry.PolyDefault.prototype.addPoly = function (p) {
		var m_IsHole = this.m_IsHole;
		var m_List = this.m_List;
		if ((m_List.size() > 0) && m_IsHole) {
			alert("ERROR : Cannot add polys to something designated as a hole.");
		}
		m_List.add(p);
	}
	/**
	 * Return true if the polygon is empty
	 */
	gpcas.geometry.PolyDefault.prototype.isEmpty = function () {
		return this.m_List.isEmpty();
	}
	/**
	 * Returns the bounding rectangle of this polygon.
	 * <strong>WARNING</strong> Not supported on complex polygons.
	 */
	gpcas.geometry.PolyDefault.prototype.getBounds = function () {
		var m_List = this.m_List;
		if (m_List.size() == 0) {
			return new Rectangle();
		}
		else if (m_List.size() == 1) {
			var ip = this.getInnerPoly(0);
			return ip.getBounds();
		}
		else {
			console.log("getBounds not supported on complex poly.");
		}
	}
	/**
	 * Returns the polygon at this index.
	 */
	gpcas.geometry.PolyDefault.prototype.getInnerPoly = function (polyIndex) {
		return this.m_List.get(polyIndex);
	}
	/**
	 * Returns the number of inner polygons - inner polygons are assumed to return one here.
	 */
	gpcas.geometry.PolyDefault.prototype.getNumInnerPoly = function () {
		var m_List = this.m_List;
		return m_List.size();
	}
	/**
	 * Return the number points of the first inner polygon
	 */
	gpcas.geometry.PolyDefault.prototype.getNumPoints = function () {
		return (this.m_List.get(0)).getNumPoints();
	}
	/**
	 * Return the X value of the point at the index in the first inner polygon
	 */
	gpcas.geometry.PolyDefault.prototype.getX = function (index) {
		return (this.m_List.get(0)).getX(index);
	}
	gpcas.geometry.PolyDefault.prototype.getPoint = function (index) {
		return (this.m_List.get(0)).getPoint(index);
	}
	gpcas.geometry.PolyDefault.prototype.getPoints = function () {
		return (this.m_List.get(0)).getPoints();
	}
	gpcas.geometry.PolyDefault.prototype.isPointInside = function (point) {
		var m_List = this.m_List;
		if (!(m_List.get(0)).isPointInside(point)) return false;
		for (var i = 0; i < m_List.size(); i++) {
			var poly = m_List.get(i);
			if ((poly.isHole()) && (poly.isPointInside(point))) return false;
		}
		return true;
	}
	/**
	 * Return the Y value of the point at the index in the first inner polygon
	 */
	gpcas.geometry.PolyDefault.prototype.getY = function (index) {
		var m_List = this.m_List;
		return (m_List.get(0)).getY(index);
	}
	/**
	 * Return true if this polygon is a hole.  Holes are assumed to be inner polygons of
	 * a more complex polygon.
	 *
	 * @throws IllegalStateException if called on a complex polygon.
	 */
	gpcas.geometry.PolyDefault.prototype.isHole = function () {
		var m_List = this.m_List;
		var m_IsHole = this.m_IsHole;
		if (m_List.size() > 1) {
			alert("Cannot call on a poly made up of more than one poly.");
		}
		return m_IsHole;
	}
	/**
	 * Set whether or not this polygon is a hole.  Cannot be called on a complex polygon.
	 *
	 * @throws IllegalStateException if called on a complex polygon.
	 */
	gpcas.geometry.PolyDefault.prototype.setIsHole = function (isHole) {
		var m_List = this.m_List;
		if (m_List.size() > 1) {
			alert("Cannot call on a poly made up of more than one poly.");
		}
		this.m_IsHole = isHole;
	}
	/**
	 * Return true if the given inner polygon is contributing to the set operation.
	 * This method should NOT be used outside the Clip algorithm.
	 */
	gpcas.geometry.PolyDefault.prototype.isContributing = function (polyIndex) {
		var m_List = this.m_List;
		return (m_List.get(polyIndex)).isContributing(0);
	}
	/**
	 * Set whether or not this inner polygon is constributing to the set operation.
	 * This method should NOT be used outside the Clip algorithm.
	 *
	 * @throws IllegalStateException if called on a complex polygon
	 */
	
	gpcas.geometry.PolyDefault.prototype.setContributing = function (polyIndex, contributes) {
		var m_List = this.m_List;
		if (m_List.size() != 1) {
			alert("Only applies to polys of size 1");
		}
		(m_List.get(polyIndex)).setContributing(0, contributes);
	}
	/**
	 * Return a Poly that is the intersection of this polygon with the given polygon.
	 * The returned polygon could be complex.
	 *
	 * @return the returned Poly will be an instance of PolyDefault.
	 */
	gpcas.geometry.PolyDefault.prototype.intersection = function (p) {
		return Clip.intersection(p, this, "PolyDefault");
	}
	/**
	 * Return a Poly that is the union of this polygon with the given polygon.
	 * The returned polygon could be complex.
	 *
	 * @return the returned Poly will be an instance of PolyDefault.
	 */
	gpcas.geometry.PolyDefault.prototype.union = function (p) {
		return Clip.union(p, this, "PolyDefault");
	}
	/**
	 * Return a Poly that is the exclusive-or of this polygon with the given polygon.
	 * The returned polygon could be complex.
	 *
	 * @return the returned Poly will be an instance of PolyDefault.
	 */
	gpcas.geometry.PolyDefault.prototype.xor = function (p) {
		return Clip.xor(p, this, "PolyDefault");
	}
	/**
	 * Return a Poly that is the difference of this polygon with the given polygon.
	 * The returned polygon could be complex.
	 *
	 * @return the returned Poly will be an instance of PolyDefault.
	 */
	gpcas.geometry.PolyDefault.prototype.difference = function (p) {
		return Clip.difference(p, this, "PolyDefault");
	}
	/**
	 * Return the area of the polygon in square units.
	 */
	gpcas.geometry.PolyDefault.prototype.getArea = function () {
		var that = this
		var area = 0.0;
		for (var i = 0; i < that.getNumInnerPoly(); i++) {
			var p = that.getInnerPoly(i);
			var tarea = p.getArea() * (p.isHole() ? -1.0 : 1.0);
			area += tarea;
		}
		return area;
	}
	// -----------------------
	// --- Package Methods ---
	// -----------------------
	gpcas.geometry.PolyDefault.prototype.toString = function () {
		var res = "";
		var m_List = this.m_List;
		for (var i = 0; i < m_List.size(); i++) {
			var p = this.getInnerPoly(i);
			res += ("InnerPoly(" + i + ").hole=" + p.isHole());
			var points = [];
			for (var j = 0; j < p.getNumPoints(); j++) {
				points.push(new Point(p.getX(j), p.getY(j)));
			}
			points = ArrayHelper.sortPointsClockwise(points);
			for (var k = 0; k < points.length; k++) {
				res += points[k].toString();
			}
		}
		return res;
	}
};
polyDf()
function polygon() {
	///////////////  Polygon   /////////////////////////////////
	gpcas.geometry.Polygon = function () {
		this.maxTop;
		this.maxBottom;
		this.maxLeft;
		this.maxRight;
		this.vertices  /* of Point */;
	};
	gpcas.geometry.Polygon.prototype.fromArray = function (v) {
		this.vertices = [];
		for (var i = 0; i < v.length; i++) {
			var pointArr = v[i];
			this.vertices.push(new Point(pointArr[0], pointArr[1]));
		}
	}
	/*Normalize vertices in polygon to be ordered clockwise from most left point*/
	gpcas.geometry.Polygon.prototype.normalize = function () {
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
	gpcas.geometry.Polygon.prototype.getVertexIndex = function (vertex) {
		for (var i = 0; i < this.vertices.length; i++) {
			if (equals(vertices[i], vertex)) {
				return i
			}
		}
		return -1;
	}
	gpcas.geometry.Polygon.prototype.insertVertex = function (vertex1, vertex2, newVertex) {
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
	gpcas.geometry.Polygon.prototype.clone = function () {
		var res = new Polygon();
		res.vertices = vertices.slice(this.vertices.length - 1);
		return res;
	}
	gpcas.geometry.Polygon.prototype.toString = function () {
		var vertices = this.vertices;
		var res = "[";
		for (var i = 0; i < vertices.length; i++) {
			var vertex = vertices[i];
			res += (i > 0 ? "," : "") + "[" + vertex.x + "," + vertex.y + "]";
		}
		res += "]";
		return res;
	}
	////////////////////  PolygonNode ///////////////////////////
	gpcas.geometry.PolygonNode = function (next, x, y) {
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
	gpcas.geometry.PolygonNode.prototype.add_right = function (x, y) {
		var nv = new VertexNode(x, y);
		/* Add vertex nv to the right end of the polygon's vertex list */
		this.proxy.v[Clip.RIGHT].next = nv;
		/* Update proxy->v[Clip.RIGHT] to point to nv */
		this.proxy.v[Clip.RIGHT] = nv;
	}
	gpcas.geometry.PolygonNode.prototype.add_left = function (x, y) {
		var proxy = this.proxy;
		var nv = new VertexNode(x, y);
		/* Add vertex nv to the left end of the polygon's vertex list */
		nv.next = proxy.v[Clip.LEFT];
		/* Update proxy->[Clip.LEFT] to point to nv */
		proxy.v[Clip.LEFT] = nv;
	}
};
polygon()
function polySimp() {
	//////////////////   PolySimple ////////////////
	/**
	 * <code>PolySimple</code> is a simple polygon - contains only one inner polygon.
	 * <p>
	 * <strong>WARNING:</strong> This type of <code>Poly</code> cannot be used for an
	 * inner polygon that is a hole.
	 *
	 * @author  Dan Bridenbecker, Solution Engineering, Inc.
	 */
	gpcas.geometry.PolySimple = function () {
		/**
		 * The list of Point objects in the polygon.
		 */
		this.m_List = new ArrayList();
		/** Flag used by the Clip algorithm */
		this.m_Contributes = true;
	};
	/**
	 * Return true if the given object is equal to this one.
	 * <p>
	 * <strong>WARNING:</strong> This method failse if the first point
	 * appears more than once in the list.
	 */
	gpcas.geometry.PolySimple.prototype.equals = function (obj) {
		if (!(obj instanceof PolySimple)) {
			return false;
		}
		var that = obj;
		var this_num = this.m_List.size();
		var that_num = that.m_List.size();
		if (this_num != that_num) return false;
		// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		// !!! WARNING: This is not the greatest algorithm.  It fails if !!!
		// !!! the first point in "this" poly appears more than once.    !!!
		// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		if (this_num > 0) {
			var this_x = this.getX(0);
			var this_y = this.getY(0);
			var that_first_index = -1;
			for (var that_index = 0; (that_first_index == -1) && (that_index < that_num); that_index++) {
				var that_x = that.getX(that_index);
				var that_y = that.getY(that_index);
				if ((this_x == that_x) && (this_y == that_y)) {
					that_first_index = that_index;
				}
			}
			if (that_first_index == -1) return false;
			var that_index = that_first_index;
			for (var this_index = 0; this_index < this_num; this_index++) {
				this_x = this.getX(this_index);
				this_y = this.getY(this_index);
				var that_x = that.getX(that_index);
				var that_y = that.getY(that_index);
				if ((this_x != that_x) || (this_y != that_y)) return false;
				that_index++;
				if (that_index >= that_num) {
					that_index = 0;
				}
			}
		}
		return true;
	}
	/**
	 * Return the hashCode of the object.
	 * <p>
	 * <strong>WARNING:</strong>Hash and Equals break contract.
	 *
	 * @return an integer value that is the same for two objects
	 * whenever their internal representation is the same (equals() is true)
	 */
	gpcas.geometry.PolySimple.prototype.hashCode = function () {
		// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		// !!! WARNING:  This hash and equals break the contract. !!!
		// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		var result = 17;
		result = 37 * result + this.m_List.hashCode();
		return result;
	}
	/**
	 * Return a string briefly describing the polygon.
	 */
	gpcas.geometry.PolySimple.prototype.toString = function () {
		return "PolySimple: num_points=" + getNumPoints();
	}
	// --------------------
	// --- Poly Methods ---
	// --------------------
	/**
	 * Remove all of the points.  Creates an empty polygon.
	 */
	gpcas.geometry.PolySimple.prototype.clear = function () {
		this.m_List.clear();
	}
	gpcas.geometry.PolySimple.prototype.add = function (arg0, arg1) {
		var args = [];
		args[0] = arg0;
		if (arg1) {
			args[1] = arg1;
		}
		if (args.length == 2) {
			this.addPointXY(args[0], args[1]);
		}
		else if (args.length == 1) {
			if (args[0] instanceof Point) {
				this.addPoint(args[0])
			}
			else if (args[0] instanceof Poly) {
				this.addPoly(args[0]);
			} else if (args[0] instanceof Array) {
				for (var k = 0; k < args[0].length; k++) {
					var val = args[0][k];
					this.add(val);
				}
			}
		}
	}
	/**
	 * Add a point to the first inner polygon.
	 */
	gpcas.geometry.PolySimple.prototype.addPointXY = function (x, y) {
		this.addPoint(new Point(x, y));
	}
	/**
	 * Add a point to the first inner polygon.
	 */
	gpcas.geometry.PolySimple.prototype.addPoint = function (p) {
		this.m_List.add(p)
	}
	/**
	 * Throws IllegalStateexception if called
	 */
	gpcas.geometry.PolySimple.prototype.addPoly = function (p) {
		alert("Cannot add poly to a simple poly.")
	}
	/**
	 * Return true if the polygon is empty
	 */
	gpcas.geometry.PolySimple.prototype.isEmpty = function () {
		return this.m_List.isEmpty()
	}
	/**
	 * Returns the bounding rectangle of this polygon.
	 */
	gpcas.geometry.PolySimple.prototype.getBounds = function () {
		var xmin = Number.MAX_VALUE;
		var ymin = Number.MAX_VALUE;
		var xmax = -Number.MAX_VALUE;
		var ymax = -Number.MAX_VALUE;
		for (var i = 0; i < this.m_List.size(); i++) {
			var x = this.getX(i);
			var y = this.getY(i);
			if (x < xmin) xmin = x;
			if (x > xmax) xmax = x;
			if (y < ymin) ymin = y;
			if (y > ymax) ymax = y;
		}
		return new Rectangle(xmin, ymin, (xmax - xmin), (ymax - ymin));
	}
	/**
	 * Returns <code>this</code> if <code>polyIndex = 0</code>, else it throws
	 * IllegalStateException.
	 */
	gpcas.geometry.PolySimple.prototype.getInnerPoly = function (polyIndex) {
		if (polyIndex != 0) {
			alert("PolySimple only has one poly");
		}
		return this;
	}
	/**
	 * Always returns 1.
	 */
	gpcas.geometry.PolySimple.prototype.getNumInnerPoly = function () {
		return 1
	}
	/**
	 * Return the number points of the first inner polygon
	 */
	gpcas.geometry.PolySimple.prototype.getNumPoints = function () {
		return this.m_List.size()
	}
	// Return  X/Y value of the point at the index in the first inner polygon
	gpcas.geometry.PolySimple.prototype.getX = function (index) {
		return (this.m_List.get(index)).x
	}
	gpcas.geometry.PolySimple.prototype.getY = function (index) {
		return (this.m_List.get(index)).y
	}
	gpcas.geometry.PolySimple.prototype.getPoint = function (index) {
		return (this.m_List.get(index))
	}
	gpcas.geometry.PolySimple.prototype.getPoints = function () {
		return this.m_List.toArray()
	}
	gpcas.geometry.PolySimple.prototype.isPointInside = function (point) {
		var points = this.getPoints();
		var j = points.length - 1;
		var oddNodes = false;
		for (var i = 0; i < points.length; i++) {
			if (points[i].y < point.y && points[j].y >= point.y ||
					points[j].y < point.y && points[i].y >= point.y) {
				if (points[i].x +
						(point.y - points[i].y) / (points[j].y - points[i].y) * (points[j].x - points[i].x) < point.x) {
					oddNodes = !oddNodes;
				}
			}
			j = i;
		}
		return oddNodes;
	}
	/**
	 * Always returns false since PolySimples cannot be holes.
	 */
	gpcas.geometry.PolySimple.prototype.isHole = function () {
		return false;
	}
	/**
	 * Throws IllegalStateException if called.
	 */
	gpcas.geometry.PolySimple.prototype.setIsHole = function (isHole) {
		alert("PolySimple cannot be a hole");
	}
	/**
	 * Return true if the given inner polygon is contributing to the set operation.
	 * This method should NOT be used outside the Clip algorithm.
	 *
	 * @throws IllegalStateException if <code>polyIndex != 0</code>
	 */
	gpcas.geometry.PolySimple.prototype.isContributing = function (polyIndex) {
		if (polyIndex != 0) {
			alert("PolySimple only has one poly");
		}
		return this.m_Contributes;
	}
	/**
	 * Set whether or not this inner polygon is constributing to the set operation.
	 * This method should NOT be used outside the Clip algorithm.
	 *
	 * @throws IllegalStateException if <code>polyIndex != 0</code>
	 */
	gpcas.geometry.PolySimple.prototype.setContributing = function (polyIndex, contributes) {
		if (polyIndex != 0) {
			alert("PolySimple only has one poly");
		}
		this.m_Contributes = contributes;
	}
	/**
	 * Return a Poly that is the intersection of this polygon with the given polygon.
	 * The returned polygon is simple.
	 *
	 * @return The returned Poly is of type PolySimple
	 */
	gpcas.geometry.PolySimple.prototype.intersection = function (p) {
		return Clip.intersection(this, p, "PolySimple");
	}
	/**
	 * Return a Poly that is the union of this polygon with the given polygon.
	 * The returned polygon is simple.
	 *
	 * @return The returned Poly is of type PolySimple
	 */
	gpcas.geometry.PolySimple.prototype.union = function (p) {
		return Clip.union(this, p, "PolySimple");
	}
	/**
	 * Return a Poly that is the exclusive-or of this polygon with the given polygon.
	 * The returned polygon is simple.
	 *
	 * @return The returned Poly is of type PolySimple
	 */
	gpcas.geometry.PolySimple.prototype.xor = function (p) {
		return Clip.xor(p, this, "PolySimple");
	}
	/**
	 * Return a Poly that is the difference of this polygon with the given polygon.
	 * The returned polygon could be complex.
	 *
	 * @return the returned Poly will be an instance of PolyDefault.
	 */
	gpcas.geometry.PolySimple.prototype.difference = function (p) {
		return Clip.difference(p, this, "PolySimple");
	}
	/**
	 * Returns the area of the polygon.
	 * <p>
	 * The algorithm for the area of a complex polygon was take from
	 * code by Joseph O'Rourke author of " Computational Geometry in C".
	 */
	gpcas.geometry.PolySimple.prototype.getArea = function () {
		if (this.getNumPoints() < 3) {
			return 0.0;
		}
		var ax = this.getX(0);
		var ay = this.getY(0);
		var area = 0.0;
		for (var i = 1; i < (this.getNumPoints() - 1); i++) {
			var bx = this.getX(i);
			var by = this.getY(i);
			var cx = this.getX(i + 1);
			var cy = this.getY(i + 1);
			var tarea = ((cx - bx) * (ay - by)) - ((ax - bx) * (cy - by));
			area += tarea;
		}
		area = 0.5 * Math.abs(area);
		return area;
	}

}




polySimp()

function rect() {
	gpcas.geometry.Rectangle = function (_x, _y, _w, _h) {
		this.x = _x;
		this.y = _y;
		this.w = _w;
		this.h = _h;
	}
	gpcas.geometry.Rectangle.prototype.getMaxY = function () {
		return this.y + this.h;
	}
	gpcas.geometry.Rectangle.prototype.getMinY = function () {
		return this.y;
	}
	gpcas.geometry.Rectangle.prototype.getMaxX = function () {
		return this.x + this.w;
	}
	gpcas.geometry.Rectangle.prototype.getMinX = function () {
		return this.x;
	}
	gpcas.geometry.Rectangle.prototype.toString = function () {
		return "[" + x.toString() + " " + y.toString() + " " + w.toString() + " " + h.toString() + "]";
	}
};
rect()