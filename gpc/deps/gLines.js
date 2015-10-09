$gIPt = function (a, b, c) {
	return new IntersectionPoint(a, b, c)
}
gpc.g.AT=gpc.g.AetTree = function () {this.top_node = null} 
gpc.g.AT.prototype.print = function () {
	var edge
	for (
			edge = this.top_node; 
			edge != null;
			edge = edge.next
	) {
	
	
		//$l("edge.vertex.x="+edge.vertex.x+"  edge.vertex.y="+edge.vertex.y);
	}

}
gpc.g.BS= gpc.g.BundleState = function (sta) { this.m_State = sta }
gpc.g.BS.UNBUNDLED = new gpc.g.BS("UNBUNDLED");
gpc.g.BS.BUNDLE_HEAD = new gpc.g.BS("BUNDLE_HEAD");
gpc.g.BS.BUNDLE_TAIL = new gpc.g.BS("BUNDLE_TAIL");
gpc.g.BS.prototype.toString = function () {return this.m_State }
gpc.g.EdgeNode = function () {
	this.vertex = new Point();
	// Piggy-backed contour vertex data  
	this.bot = new Point();
	// Edge lower (x, y) coordinate      
	this.top = new Point();
	// Edge upper (x, y) coordinate      
	this.xb;
	// Scanbeam bottom x coordinate      
	this.xt;
	// Scanbeam top x coordinate         
	this.dx;
	// Change in x for a unit y increase 
	this.type;
	// Clip / subject edge flag          
	this.bundle = ArrayHelper.create2DArray(2, 2);
	// Bundle edge flags                 
	this.bside = [];
	// Bundle left / right indicators    
	this.bstate = [];
	// Edge bundle state                 
	this.outp = [];
	// Output polygon / tristrip pointer 
	this.prev;
	// Previous edge in the AET          
	this.next;
	// Next edge in the AET              
	this.pred;
	// Edge connected at the lower end   
	this.succ;
	// Edge connected at the upper end   
	this.next_bound;
	// Pointer to next bound in LMT      
}
gpc.g.ET=gpc.g.EdgeTable = function () {this.m_List = new ArrayList() };
eT = gpc.g.EdgeTable.prototype
eT.addNode = function (x, y) {
	var node = new EdgeNode();
	node.vertex.x = x; node.vertex.y = y;
	this.m_List.add(node);
}
eT.getNode = function (i) {return this.m_List.get(i) }
eT.FWD_MIN = function (i) {
	var m_List = this.m_List,
	prev = (m_List.get(Clip.PREV_INDEX(i, m_List.size()))),
	next = (m_List.get(Clip.NEXT_INDEX(i, m_List.size()))),
	ith = (m_List.get(i))
	return ((prev.vertex.y >= ith.vertex.y) &&  next.vertex.y > ith.vertex.y)
}
eT.NOT_FMAX = function (i) {
	var m_List = this.m_List,
	next = m_List.get(Clip.NEXT_INDEX(i, m_List.size())),
	ith = (m_List.get(i))
	return (next.vertex.y > ith.vertex.y);
}
eT.REV_MIN = function (i) {
	var m_List = this.m_List,
	prev = (m_List.get(Clip.PREV_INDEX(i, m_List.size()))),
	next = (m_List.get(Clip.NEXT_INDEX(i, m_List.size()))),
	ith = (m_List.get(i));
	return ((prev.vertex.y > ith.vertex.y) && (next.vertex.y >= ith.vertex.y));
}
eT.NOT_RMAX = function (i) {
	var m_List = this.m_List,
	prev = (m_List.get(Clip.PREV_INDEX(i, m_List.size()))),
	ith = (m_List.get(i));
	return (prev.vertex.y > ith.vertex.y);
}
gpc.g.HS=gpc.g.HState = function () {}
gpc.g.HState.NH = 0;// No horizontal edge               
gpc.g.HState.BH = 1;// Bottom horizontal edge            
gpc.g.HState.TH = 2;// Top horizontal edge              
NH = gpc.g.HState.NH;  BH = gpc.g.HState.BH;  TH = gpc.g.HState.TH; // Horizontal edge state transitions within scanbeam boundary
gpc.g.HState.next_h_state = [
	//      ABOVE     BELOW     CROSS 
	//        L   R     L   R     L   R  
	/* NH */ [BH, TH, TH, BH, NH, NH],
	/* BH */ [NH, NH, NH, NH, TH, TH],
	/* TH */ [NH, NH, NH, NH, BH, BH]
]
gpc.g.IP= gpc.g.IntersectionPoint = function (p1, p2, p3) {
	this.polygonPoint1 = p1 /* of Point */
	this.polygonPoint2 = p2 
	this.intersectionPoint = p3;
}
gpc.g.IntersectionPoint.prototype.toString = function () {
	return "P1 :" + polygonPoint1.toString() 
	+ " P2:" + polygonPoint2.toString() 
	+ " IP:" + intersectionPoint.toString()
}
gpc.g.ItNode = function (edge0, edge1, x, y, next) {
	this.ie = [];
	// Intersecting edge (bundle) pair   
	this.point = new Point(x, y);
	// Point of intersection             
	this.next = next;
	//The next intersection table node  
	this.ie[0] = edge0; this.ie[1] = edge1;
};
gpc.g.NT=gpc.g.ItNodeTable = function () {
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
gpc.g.LH= gpc.g.LineHelper = function () {
};
gpc.g.LH.equalPoint = function (p1, p2) {
	return ((p1[0] == p2[0]) && (p1[1] == p2[1]));
}
gpc.g.LH.equalVertex = function (s1, e1, s2, e2) {
	return (
	((gpc.g.LH.equalPoint(s1, s2)) && (gpc.g.LH.equalPoint(e1, e2)))
	||
	((gpc.g.LH.equalPoint(s1, e2)) && (gpc.g.LH.equalPoint(e1, s2)))
	);
}
gpc.g.LH.distancePoints = function (p1, p2) {
	return M.sqrt((p2[0] - p1[0]) * (p2[0] - p1[0]) + (p2[1] - p1[1]) * (p2[1] - p1[1]));
}
gpc.g.LH.clonePoint = function (p) {
	return [p[0], p[1]];
}
gpc.g.LH.cloneLine = function (line) {
	var res = [];
	for (var i = 0; i < line.length; i++) {
		res[i] = [line[i][0], line[i][1]];
	}
	return res;
}
gpc.g.LH.addLineToLine = function (line1, line2) {
	for (var i = 0; i < line2.length; i++) {
		line1.push(clonePoint(line2[i]));
	}
}
gpc.g.LH.roundPoint = function (p) {
	p[0] = M.round(p[0]);
	p[1] = M.round(p[1]);
}
//Checks for intersection of Segment if as_seg is true. //Checks for intersection of Line if as_seg is false.
//Return intersection of Segment "AB" and Segment "EF" as a Point //Return null if there is no intersection
gpc.g.LH.lineIntersectLine = function (A, B, E, F, as_seg) {
	
	if (as_seg == null) {as_seg = true}
	
	var ip, a1 = B.y - A.y, 
	a2 = F.y - E.y, b1 = A.x - B.x, b2 = E.x - F.x, c1 = B.x * A.y - A.x * B.y,c2 = F.x * E.y - E.x * F.y, 
	denom = a1 * b2 - a2 * b1
	
	if (denom == 0) {return null}
	
	ip = new Point();
	ip.x = (b1 * c2 - b2 * c1) / denom;
	ip.y = (a2 * c1 - a1 * c2) / denom;
	//Do checks to see if intersection to endpoints//distance is longer than actual Segments. //Return null if it is with any.
 	if (as_seg) {
		if (M.pow((ip.x - B.x) + (ip.y - B.y), 2) > M.pow((A.x - B.x) + (A.y - B.y), 2)) {
			return null;
		}
		if (M.pow((ip.x - A.x) + (ip.y - A.y), 2) > M.pow((A.x - B.x) + (A.y - B.y), 2)) {
			return null;
		}
		if (M.pow((ip.x - F.x) + (ip.y - F.y), 2) > M.pow((E.x - F.x) + (E.y - F.y), 2)) {
			return null;
		}
		if (M.pow((ip.x - E.x) + (ip.y - E.y), 2) > M.pow((E.x - F.x) + (E.y - F.y), 2)) {
			return null;
		}
	}
	return new Point(M.round(ip.x), M.round(ip.y));
}
gpc.g.LI=gpc.g.LineIntersection = function () {}
gpc.g.LI.iteratePoints = function (pts, s1, s2, e1, e2) {

	var dir = true, pl = _.z(pts), 
	
	s1Ind = pts.indexOf(s1), 
	s2Ind = pts.indexOf(s2), 
	start = s1Ind, newPts = [],
	 pt
	
	if (s2Ind > s1Ind) {dir = false}
	if (dir) {
		for (var i = 0; i < pl; i++) {
			pt = (i + start < pl) ? pts[i + start] : pts[i + start - pl];
			newPts.push(pt);
			if ( equals(pt, e1) || equals(pt, e2) ) {break}
		}

	} 
	
	
	
	
	else {
		for (var i = pl; i >= 0; i--) {
			pt = (i + start < pl) ? pts[i + start] : pts[i + start - pl];
			newPts.push(pt);
			if ((equals(pt, e1)) || (equals(pt, e2))) {break;}
		}
	}
	
	return newPts;
}
gpc.g.LI.intersectPoly = function (poly, line) {//line is,apparently, 'of pts'
	var res = [],

	numPoints = poly.getNumPoints(),

	ip, p1, p2, p3, p4,
	firstIntersection = null,
	lastIntersection = null,
	firstIntersectionLineIndex = -1,
	lastIntersectionLineIndex = -1,
	firstFound = false
	
	for (var i=1; i < _.z(line); i++) {
		p1 = line[i - 1]; p2 = line[i];
		var maxDist = 0, minDist = $N.MAX_VALUE, dist = -1
		for (var j = 0; j < numPoints; j++) {
			p3 = poly.getPoint(j == 0 ? numPoints - 1 : j - 1);
			p4 = poly.getPoint(j)
			if ( (ip = LH.lineIntersectLine(p1, p2, p3, p4)) != null) {
				
				dist = Point.distance(ip, p2);
				
				
				if ( dist > maxDist && !firstFound) {
				
						maxDist = dist;
					firstIntersection = $gIPt(p3, p4, ip);
					firstIntersectionLineIndex = i;
				}
				
				if (dist < minDist) {minDist = dist;
					lastIntersection = $gIPt(p3, p4, ip);
					lastIntersectionLineIndex = i - 1 }}}
		
		
		firstFound = firstIntersection != null
	
	}
	
	
	
	// Alert.show(firstIntersection.toString());  Alert.show(lastIntersection.toString())

	if (  firstIntersection != null  &&  lastIntersection != null ) {
		var j= 1, newLine  = [firstIntersection.intersectionPoint]; //'of pt'
		
		for (var i = firstIntersectionLineIndex; i <= lastIntersectionLineIndex; i++) {newLine[j++] = line[i]}
		
		newLine[ _.z(newLine)  - 1] = lastIntersection.intersectionPoint
		
		if (
				(equals(firstIntersection.polygonPoint1, lastIntersection.polygonPoint1) && equals(firstIntersection.polygonPoint2, lastIntersection.polygonPoint2)) ||
				(equals(firstIntersection.polygonPoint1, lastIntersection.polygonPoint2) && equals(firstIntersection.polygonPoint2, lastIntersection.polygonPoint1))
		) {
		
		
			var poly1 = new PolySimple();
			 poly1.add(newLine);
			
			
			
			
			var finPoly1 = poly.intersection(poly1), 
			finPoly2 = poly.xor(poly1)
			
			
			if ((checkPoly(finPoly1)) && (checkPoly(finPoly2))) {return [finPoly1, finPoly2]}
		} 
		
		else {
			var pts1 = iteratePoints(
				poly.getPoints(),
				 firstIntersection.polygonPoint1,
				  firstIntersection.polygonPoint2,
				   lastIntersection.polygonPoint1,
				    lastIntersection.polygonPoint2
			)
			
			pts1 = pts1.concat( newLine.reverse() )
			var pts2 = iteratePoints(
				poly.getPoints(), 
				firstIntersection.polygonPoint2, 
				firstIntersection.polygonPoint1, 
				lastIntersection.polygonPoint1, 
				lastIntersection.polygonPoint2
			)
			pts2 = pts2.concat(newLine);
			var poly1 = new PolySimple(); poly1.add(pts1), 
			poly2 = new PolySimple()
			poly2.add(pts2);
			var finPoly1 = poly.intersection(poly1), 
			finPoly2 = poly.intersection(poly2);
			if ((checkPoly(finPoly1)) && (checkPoly(finPoly2))) {return [finPoly1, finPoly2] }
		}
	}
	return null;
}
gpc.g.LI.checkPoly = function (poly) {
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
gpc.g.LT=gpc.g.LmtTable = function () {
	this.top_node;
};
gpc.g.LmtTable.prototype.print = function () {
	var n = 0;
	var lmt = this.top_node;
	while (lmt != null) {
		//$l("lmt("+n+")");
		for (var edge = lmt.first_bound; (edge != null); edge = edge.next_bound) {
			//$l("edge.vertex.x="+edge.vertex.x+"  edge.vertex.y="+edge.vertex.y);
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
