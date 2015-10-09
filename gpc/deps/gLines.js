gpc.g.AetTree = function () {this.top_node = null}//EdgeNode
gpc.g.AetTree.prototype.print = function () {
	//console.log("aet");
	for (var edge = this.top_node; (edge != null); edge = edge.next) {
		//console.log("edge.vertex.x="+edge.vertex.x+"  edge.vertex.y="+edge.vertex.y);
	}
}

gpc.g.BundleState = function (state) {
	this.m_State = state; //String
};
gpc.g.BundleState.UNBUNDLED = new gpc.g.BundleState("UNBUNDLED");
gpc.g.BundleState.BUNDLE_HEAD = new gpc.g.BundleState("BUNDLE_HEAD");
gpc.g.BundleState.BUNDLE_TAIL = new gpc.g.BundleState("BUNDLE_TAIL");
gpc.g.BundleState.prototype.toString = function () {
	return this.m_State;
};


gpc.g.EdgeNode = function () {
	this.vertex = new Point();
	/* Piggy-backed contour vertex data  */
	this.bot = new Point();
	/* Edge lower (x, y) coordinate      */
	this.top = new Point();
	/* Edge upper (x, y) coordinate      */
	this.xb;
	/* Scanbeam bottom x coordinate      */
	this.xt;
	/* Scanbeam top x coordinate         */
	this.dx;
	/* Change in x for a unit y increase */
	this.type;
	/* Clip / subject edge flag          */
	this.bundle = ArrayHelper.create2DArray(2, 2);
	/* Bundle edge flags                 */
	this.bside = [];
	/* Bundle left / right indicators    */
	this.bstate = [];
	/* Edge bundle state                 */
	this.outp = [];
	/* Output polygon / tristrip pointer */
	this.prev;
	/* Previous edge in the AET          */
	this.next;
	/* Next edge in the AET              */
	this.pred;
	/* Edge connected at the lower end   */
	this.succ;
	/* Edge connected at the upper end   */
	this.next_bound;
	/* Pointer to next bound in LMT      */
};
gpc.g.EdgeTable = function () {
	this.m_List = new ArrayList();
};
eT = gpc.g.EdgeTable.prototype
eT.addNode = function (x, y) {
	var node = new EdgeNode();
	node.vertex.x = x;
	node.vertex.y = y;
	this.m_List.add(node);
}
eT.getNode = function (i) {return this.m_List.get(i) }
eT.FWD_MIN = function (i) {
	var m_List = this.m_List;
	var prev = (m_List.get(Clip.PREV_INDEX(i, m_List.size())));
	var next = (m_List.get(Clip.NEXT_INDEX(i, m_List.size())));
	var ith = (m_List.get(i));
	return ((prev.vertex.y >= ith.vertex.y) &&
	(next.vertex.y > ith.vertex.y));
}
eT.NOT_FMAX = function (i) {
	var m_List = this.m_List;
	var next = (m_List.get(Clip.NEXT_INDEX(i, m_List.size())));
	var ith = (m_List.get(i));
	return (next.vertex.y > ith.vertex.y);
}
eT.REV_MIN = function (i) {
	var m_List = this.m_List;
	var prev = (m_List.get(Clip.PREV_INDEX(i, m_List.size())));
	var next = (m_List.get(Clip.NEXT_INDEX(i, m_List.size())));
	var ith = (m_List.get(i));
	return ((prev.vertex.y > ith.vertex.y) && (next.vertex.y >= ith.vertex.y));
}
eT.NOT_RMAX = function (i) {
	var m_List = this.m_List;
	var prev = (m_List.get(Clip.PREV_INDEX(i, m_List.size())));
	var ith = (m_List.get(i));
	return (prev.vertex.y > ith.vertex.y);
}
gpc.g.HState = function () {
};
gpc.g.HState.NH = 0;
// No horizontal edge                */
gpc.g.HState.BH = 1;
// Bottom horizontal edge            */
gpc.g.HState.TH = 2;
// Top horizontal edge               */

 NH = gpc.g.HState.NH;
 BH = gpc.g.HState.BH;
 TH = gpc.g.HState.TH;
// Horizontal edge state transitions within scanbeam boundary */

gpc.g.HState.next_h_state = [
	/*        ABOVE     BELOW     CROSS */
	/*        L   R     L   R     L   R */
	/* NH */ [BH, TH, TH, BH, NH, NH],
	/* BH */ [NH, NH, NH, NH, TH, TH],
	/* TH */ [NH, NH, NH, NH, BH, BH]
];
gpc.g.IntersectionPoint = function (p1, p2, p3) {
	this.polygonPoint1 = p1;
	/* of Point */
	;
	this.polygonPoint2 = p2;
	/* of Point */
	;
	this.intersectionPoint = p3;
};
gpc.g.IntersectionPoint.prototype.toString = function () {
	return "P1 :" + polygonPoint1.toString() + " P2:" + polygonPoint2.toString() + " IP:" + intersectionPoint.toString();
}
gpc.g.ItNode = function (edge0, edge1, x, y, next) {
	this.ie = [];
	/* Intersecting edge (bundle) pair   */
	this.point = new Point(x, y);
	/* Point of intersection             */
	this.next = next;
	/* The next intersection table node  */
	this.ie[0] = edge0;
	this.ie[1] = edge1;
};
gpc.g.ItNodeTable = function () {
	this.top_node;
}
gpc.g.ItNodeTable.prototype.build_intersection_table = function (aet, dy) {
	var st = null;
	/* Process each AET edge */
	for (var edge = aet.top_node; (edge != null); edge = edge.next) {
		if ((edge.bstate[Clip.ABOVE] == BundleState.BUNDLE_HEAD) ||
				(edge.bundle[Clip.ABOVE][Clip.CLIP] != 0) ||
				(edge.bundle[Clip.ABOVE][Clip.SUBJ] != 0)) {
			st = Clip.add_st_edge(st, this, edge, dy);
		}
	}
}
gpc.g.Line = function () {this.start; this.end; }


gpc.g.LineHelper = function () {
};
gpc.g.LineHelper.equalPoint = function (p1, p2) {
	return ((p1[0] == p2[0]) && (p1[1] == p2[1]));
}
gpc.g.LineHelper.equalVertex = function (s1, e1, s2, e2) {
	return (
	((gpc.g.LineHelper.equalPoint(s1, s2)) && (gpc.g.LineHelper.equalPoint(e1, e2)))
	||
	((gpc.g.LineHelper.equalPoint(s1, e2)) && (gpc.g.LineHelper.equalPoint(e1, s2)))
	);
}
gpc.g.LineHelper.distancePoints = function (p1, p2) {
	return Math.sqrt((p2[0] - p1[0]) * (p2[0] - p1[0]) + (p2[1] - p1[1]) * (p2[1] - p1[1]));
}
gpc.g.LineHelper.clonePoint = function (p) {
	return [p[0], p[1]];
}
gpc.g.LineHelper.cloneLine = function (line) {
	var res = [];
	for (var i = 0; i < line.length; i++) {
		res[i] = [line[i][0], line[i][1]];
	}
	return res;
}
gpc.g.LineHelper.addLineToLine = function (line1, line2) {
	for (var i = 0; i < line2.length; i++) {
		line1.push(clonePoint(line2[i]));
	}
}
gpc.g.LineHelper.roundPoint = function (p) {
	p[0] = Math.round(p[0]);
	p[1] = Math.round(p[1]);
}
 
 
//Checks for intersection of Segment if as_seg is true.
//Checks for intersection of Line if as_seg is false.
//Return intersection of Segment "AB" and Segment "EF" as a Point
//Return null if there is no intersection
 

gpc.g.LineHelper.lineIntersectLine = function (A, B, E, F, as_seg) {
	if (as_seg == null) as_seg = true;
	var ip;
	var a1;
	var a2;
	var b1;
	var b2;
	var c1;
	var c2;
	a1 = B.y - A.y;
	b1 = A.x - B.x;
	c1 = B.x * A.y - A.x * B.y;
	a2 = F.y - E.y;
	b2 = E.x - F.x;
	c2 = F.x * E.y - E.x * F.y;
	var denom = a1 * b2 - a2 * b1;
	if (denom == 0) {
		return null;
	}
	ip = new Point();
	ip.x = (b1 * c2 - b2 * c1) / denom;
	ip.y = (a2 * c1 - a1 * c2) / denom;
	//---------------------------------------------------
	//Do checks to see if intersection to endpoints
	//distance is longer than actual Segments.
	//Return null if it is with any.
	//---------------------------------------------------
	if (as_seg) {
		if (Math.pow((ip.x - B.x) + (ip.y - B.y), 2) > Math.pow((A.x - B.x) + (A.y - B.y), 2)) {
			return null;
		}
		if (Math.pow((ip.x - A.x) + (ip.y - A.y), 2) > Math.pow((A.x - B.x) + (A.y - B.y), 2)) {
			return null;
		}
		if (Math.pow((ip.x - F.x) + (ip.y - F.y), 2) > Math.pow((E.x - F.x) + (E.y - F.y), 2)) {
			return null;
		}
		if (Math.pow((ip.x - E.x) + (ip.y - E.y), 2) > Math.pow((E.x - F.x) + (E.y - F.y), 2)) {
			return null;
		}
	}
	return new Point(Math.round(ip.x), Math.round(ip.y));
}



gpc.g.LineIntersection = function () {
};
gpc.g.LineIntersection.iteratePoints = function (points, s1, s2, e1, e2) {
	var direction = true;
	var pl = points.length;
	var s1Ind = points.indexOf(s1);
	var s2Ind = points.indexOf(s2);
	var start = s1Ind;
	if (s2Ind > s1Ind) direction = false;
	var newPoints = [];
	var point;
	if (direction) {
		for (var i = 0; i < pl; i++) {
			point = (i + start < pl) ? points[i + start] : points[i + start - pl];
			newPoints.push(point);
			if ((equals(point, e1)) || (equals(point, e2))) {
				break;
			}
		}
	} else {
		for (var i = pl; i >= 0; i--) {
			point = (i + start < pl) ? points[i + start] : points[i + start - pl];
			newPoints.push(point);
			if ((equals(point, e1)) || (equals(point, e2))) {
				break;
			}
		}
	}
	return newPoints;
}
gpc.g.LineIntersection.intersectPoly = function (poly, line /* of Points */) {
	var res = [];
	var numPoints = poly.getNumPoints();
	//points
	var ip;
	var p1;
	var p2;
	var p3;
	var p4;
	var firstIntersection = null;
	var lastIntersection = null;
	var firstIntersectionLineIndex = -1;
	var lastIntersectionLineIndex = -1;
	var firstFound = false;
	for (var i = 1; i < line.length; i++) {
		p1 = line[i - 1];
		p2 = line[i];
		var maxDist = 0;
		var minDist = Number.MAX_VALUE;
		var dist = -1;
		for (var j = 0; j < numPoints; j++) {
			p3 = poly.getPoint(j == 0 ? numPoints - 1 : j - 1);
			p4 = poly.getPoint(j);
			if ((ip = LineHelper.lineIntersectLine(p1, p2, p3, p4)) != null) {
				dist = Point.distance(ip, p2);
				if ((dist > maxDist) && (!firstFound)) {
					maxDist = dist;
					firstIntersection = new IntersectionPoint(p3, p4, ip);
					firstIntersectionLineIndex = i;
				}
				if (dist < minDist) {
					minDist = dist;
					lastIntersection = new IntersectionPoint(p3, p4, ip);
					lastIntersectionLineIndex = i - 1;
				}
			}
		}
		firstFound = (firstIntersection != null);
	}
	/*
	 Alert.show(firstIntersection.toString());
	 Alert.show(lastIntersection.toString());*/
	if ((firstIntersection != null) && (lastIntersection != null)) {
		var newLine /* of Point */ = [];
		newLine[0] = firstIntersection.intersectionPoint;
		var j = 1;
		for (var i = firstIntersectionLineIndex; i <= lastIntersectionLineIndex; i++) {
			newLine[j++] = line[i];
		}
		newLine[newLine.length - 1] = lastIntersection.intersectionPoint;
		if (
				(
				(equals(firstIntersection.polygonPoint1, lastIntersection.polygonPoint1)) &&
				(equals(firstIntersection.polygonPoint2, lastIntersection.polygonPoint2))
				) ||
				(
				(equals(firstIntersection.polygonPoint1, lastIntersection.polygonPoint2)) &&
				(equals(firstIntersection.polygonPoint2, lastIntersection.polygonPoint1))
				)
		) {
			var poly1 = new PolySimple();
			poly1.add(newLine);
			var finPoly1 = poly.intersection(poly1);
			var finPoly2 = poly.xor(poly1);
			if ((checkPoly(finPoly1)) && (checkPoly(finPoly2))) {
				return [finPoly1, finPoly2];
			}
		} else {
			var points1 = iteratePoints(poly.getPoints(), firstIntersection.polygonPoint1, firstIntersection.polygonPoint2, lastIntersection.polygonPoint1, lastIntersection.polygonPoint2);
			points1 = points1.concat(newLine.reverse());
			var points2 = iteratePoints(poly.getPoints(), firstIntersection.polygonPoint2, firstIntersection.polygonPoint1, lastIntersection.polygonPoint1, lastIntersection.polygonPoint2);
			points2 = points2.concat(newLine);
			var poly1 = new PolySimple();
			poly1.add(points1);
			var poly2 = new PolySimple();
			poly2.add(points2);
			var finPoly1 = poly.intersection(poly1);
			var finPoly2 = poly.intersection(poly2);
			if ((checkPoly(finPoly1)) && (checkPoly(finPoly2))) {
				return [finPoly1, finPoly2];
			}
		}
	}
	return null;
}
gpc.g.LineIntersection.checkPoly = function (poly) {
	var noHoles = 0;
	for (var i = 0; i < poly.getNumInnerPoly(); i++) {
		var innerPoly = poly.getInnerPoly(i);
		if (innerPoly.isHole()) {
			return false;
		} else {
			noHoles++;
		}
		if (noHoles > 1) return false;
	}
	return true;
}



gpc.g.LmtNode = function (yvalue) {
	this.y = yvalue;
	/* Y coordinate at local minimum     */
	this.first_bound;
	/* Pointer to bound list             */
	this.next;
	/* Pointer to next local minimum     */
};
gpc.g.LmtTable = function () {
	this.top_node;
};
gpc.g.LmtTable.prototype.print = function () {
	var n = 0;
	var lmt = this.top_node;
	while (lmt != null) {
		//console.log("lmt("+n+")");
		for (var edge = lmt.first_bound; (edge != null); edge = edge.next_bound) {
			//console.log("edge.vertex.x="+edge.vertex.x+"  edge.vertex.y="+edge.vertex.y);
		}
		n++;
		lmt = lmt.next;
	}
}
gpc.g.OT= 	gpc.g.OperationType = function (ty) {this.m_Type = ty	}
gpc.g.OT.GPC_DIFF = new gpc.g.OT("Difference")
gpc.g.OT.GPC_INT = new gpc.g.OT("Intersection")
gpc.g.OT.GPC_XOR = new gpc.g.OT("Exclusive or")
gpc.g.OT.GPC_UNION = new gpc.g.OT("Union")