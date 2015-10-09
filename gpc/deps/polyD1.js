gpc.g.PolyDefault = function (isHole) {
	if (isHole == null) isHole = false;			// Only applies to the first poly and can only be used with a poly that contains one poly
	this.m_IsHole = isHole;
	this.m_List = new ArrayList();
}
pD= gpc.g.PolyDefault.prototype



pD.ls=function(n){
	var ls = this.m_List
	if(N(n)){return ls.get(n)}
	return ls
}

pD.g=function(n){return this.ls().g(N0(n))}
pD.f = function(){return this.ls(0)}



pD.numPts=pD.getNumPoints = function () {
	return (this.m_List.get(0)).getNumPoints()
} // Return the number points of the first inner polygon

pD.aXY=pD.addPointXY = function (x, y) {
	this.addPoint(new gpc.Point(x, y))
} // Add a point to the first inner polygon. If a point is added to an empty PolyDefault object,it will create an inner polygon of type PolySimple

pD.z=function(n){
	
	var z= this.ls().size()
	if(N(n)){return z=== n}
	return z
}

pD.a= function(p){ this.ls().add(p);return this}

pD.A = pD.add = function () {var pD=this, g = G(arguments)
	return g.L==2?  pD.aXY(g.f, g.s): oneArg(g)
	function oneArg(g){
		if (gpc.iPt(g)) {pD.aPt(g)}
		else if (gpc.iPS(g)) {pD.aPol(g)}
		else if (A(g)) {arrArgs(g)}
		function arrArgs(g) {
			if (_.z(g, 2) && N(g[0]) && N(g[1])) {pS.A(g[0],g[1])}
			else {_.e(g, function (g) {pS.A(g)})} }} }

pD.aPt= pD.addPoint = function (pt) {var pD=this
	// Add pt to   first inner poly
	// If pt added to   empty pD,
	// inner poly pS created
	if ( pD.z(0) ) { pD.$pS()  }
	pD.g().addPoint(pt)
	return pD
}





pD.getX = function (i) {return (this.g()).getX(i)} //Return the X value of the point at the index in the first inner polygon
pD.getY = function (i) {return (this.g()).getY(i)}//Return the Y value of the point at the index in the first inner polygon
pD.pt = gPt= pD.getPoint = function (i) { return this.g().getPoint(i) }
pD.pts = pD.gPts=pD.getPoints = function () {return this.g().getPoints() }


pD.clear = function () {this.m_List.clear()}// Remove all of the points.  Creates an empty polygon.

pD.aP=pD.aPol=pD.addPoly = function (p) {var pD=this
	/**
	 * Add an inner polygon to this polygon - assumes that adding polygon does not
	 * have any inner polygons.

	 * @throws IllegalStateException if the number of inner polygons is greater than
	 * zero and this polygon was designated a hole.  This would break the assumption
	 * that only simple polygons can be holes.
	 */

	
	
	var m_IsHole = pD.m_IsHole, m_List = pD.m_List;
	
	if ((m_List.size() > 0) && m_IsHole) {alert("ERROR : Cannot add polys to something designated as a hole.")}
	m_List.add(p)
}

pD.gIP= pD.getInnerPoly = function (i) {return this.m_List.get(i) }	// Returns the polygon at this index.
pD.gNIP= pD.getNumInnerPoly = function () {return this.m_List.size()}	//Returns the number of inner polygons - inner polygons are assumed to return one here.
pD.$pS = function () {
	this.a($pS());
	return this
}
pD.iE= pD.isEmpty = function () {
	return this.m_List.isEmpty()
}




 
	pD.isHole = function () {// Return true if this polygon is a hole.  Holes are assumed to be inner polygons of a more complex polygon.
		var m_List = this.m_List;
		var m_IsHole = this.m_IsHole;
		if (m_List.size() > 1) {
			alert("Cannot call on a poly made up of more than one poly.");
		}
		return m_IsHole;
	}
	pD.setIsHole = function (isHole) { // Set whether or not this polygon is a hole.  Cannot be called on a complex polygon.
		var m_List = this.m_List;
		if (m_List.size() > 1) {
			alert("Cannot call on a poly made up of more than one poly.");
		}
		this.m_IsHole = isHole;
	}
 	
	pD.isContributing = function (i) {return this.ls(i).isContributing(0)
	 // Return true if the given inner polygon is contributing to the set operation.
	 // This method should NOT be used outside the Clip algorithm.
	}
	
	pD.setContributing = function (i, ctbs) {
		var pD = this, ls = pD.ls() // Set whether or not this inner polygon is constributing to the set operation. This method should NOT be used outside the Clip algorithm.
		
		if (ls.size() != 1) {alert("Only applies to polys of size 1")}
		pD.ls(i).setContributing(0, ctbs)
	}
	
 
 

function opers(){
	
	pD.int=pD.intersection = function (p) {return Clip.intersection(p, this, "PolyDefault")}// Return a Poly that is the intersection of this polygon with the given polygon. The returned polygon could be complex.
	
	pD.uni=	pD.union = function (p) {return Clip.union(p, this, "PolyDefault")}//could be complex, will be an instance of PolyDefault.
	pD.xor = function (p) {return Clip.xor(p, this, "PolyDefault")}//returned polygon could be complex.
	pD.dif=	pD.difference = function (p) {return Clip.difference(p, this, "PolyDefault") }//   returned polygon could be complex.
	
};opers()
pD.getBounds = function () {
	/**
	 * Returns the bounding rectangle of this polygon.
	 * WARNING Not supported on complex polygons.
	 */
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
pD.ty = pD._ty = function () {
	return 'PolyDefault'
}
pD.getArea = function () {//in square units.
	var that = this
	var area = 0.0;
	for (var i = 0; i < that.getNumInnerPoly(); i++) {
		var p = that.getInnerPoly(i);
		var tarea = p.getArea() * (p.isHole() ? -1.0 : 1.0);
		area += tarea;
	}
	return area;
}
gpc.iPD = function (ob) {
	return ob instanceof PolyDefault
}
gpc.iPS = function (ob) {
	return ob instanceof gpc.g.PolySimple
}

pD.toString = function () {
	var res = ""; var m_List = this.m_List;
	for (var i = 0; i < m_List.size(); i++) {
		var p = this.getInnerPoly(i);
		res += ("InnerPoly(" + i + ").hole=" + p.isHole());
		var points = []
		for (var j = 0; j < p.getNumPoints(); j++) {points.push(new Point(p.getX(j), p.getY(j)))}
		points = ArrayHelper.sortPointsClockwise(points);
		for (var k = 0; k < points.length; k++) { res += points[k].toString() }
	}
	return res;
}
pD.hashCode = function () {
	/**
	 * Return the hashCode of the object.
	 *
	 * @return an integer value that is the same for two objects
	 * whenever their internal representation is the same (equals() is true)
	 **/
	var m_List = this.m_List;
	var result = 17;
	result = 37 * result + m_List.hashCode();
	return result;
}
pD.isPointInside = function (pt) {
	var m_List = this.m_List;
	if (!(m_List.get(0)).isPointInside(pt)) return false;
	for (var i = 0; i < m_List.size(); i++) {
		var poly = m_List.get(i);
		if ((poly.isHole()) && (poly.isPointInside(pt))) return false;
	}
	return true
}
pD.eq = pD.equals = function (ob) {
	if (!gpc.iPD(ob)) {
		return false
	}
	return (this.m_IsHole != ob.m_IsHole) || !equals(this.m_List, ob.m_List) ? false : true
}
 