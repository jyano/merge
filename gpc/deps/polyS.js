$gR = function (a, b, c, d) {
	return new Rectangle(a, b, c, d)
}
$gPt = function (x, y) {
	var pt = new Point(x, y)
	return pt
}



gpc.g.PS = gpc.g.PolySimple = function () {
	// The list of Point objects in the poly
	this.m_List = new ArrayList()
	// Flag used by the Clip algorithm 
	this.m_Contributes = true 
}



$pS = function () {
	var g=G(arguments),
	pS = new gpc.g.PolySimple()
	g.e(function(ob){
		pS.add(ob)
	})
	return pS
}


 // PolySimple ( simple polygon )  - contains only one inner poly, 
 ps = gpc.g.PS.prototype
 // cannot be used for an inner polygon that is a hole.

function getAddPts(){
	ps.ls = function () {
		var ls = this.m_List
		return ls
	}
	ps.nPts = ps.z = ps.numPts = ps.gNP = ps.getNumPoints = function () {
		return this.ls().size()
	}
// Return the number points of the first inner polygon
	ps.aPt = ps.addPoint = function (pt) { this.ls().add(pt)}
//to first inner poly
ps.aXY = ps.addPointXY = function (x, y) {
	this.addPoint( $gPt(x, y) )
}//to first inner polygon
ps.A =  ps.add = function (arg0, arg1) {
	var pS = this, args = []
	args[0] = arg0;
	if (arg1) {args[1] = arg1}
	if (_.z(args, 2)) { this.aXY(args[0], args[1]) }
	else if (_.z(args, 1)) {
		if (gpc.iPt(args[0])) {pS.aPt(args[0])} //else if (args[0] instanceof Poly) {pS.addPoly(args[0])}
		else if (A(args[0])) {
			for (var k = 0; k < _.z(args[0]); k++) {
					pS.add(args[0][k])
			}
		}
	}
	
	return pS
}

// Return  X/Y value of the point at the index 
// in the first inner polygon

ps.pt = ps.gPt =   ps.getPoint = function(x,y){var pS=this; 
	return O(x) || N(y) ? pS.A(x,y) : this.ls().get( N0(x) )}
ps.gPts = ps.getPoints = function () {return this.ls().toArray()}

ps.x = ps.gX= ps.getX = function (i) {return this.ls().get(i).x}
ps.y = ps.gY= ps.getY = function (i) {return this.ls().get(i).y}
	ps.clr = ps.clear = function () {
		this.ls().clear()
	}	// Remove all of the points.  Creates an empty polygon.
};getAddPts()
function getAddPolys() {
	ps.numIP = ps.gNIP = ps.getNumInnerPoly = function () {
		return 1
	}
	ps.gIP = ps.getInnerPoly = function (i) {
		if (i != 0) {
			alert("PolySimple only has one poly")
		}
		return this
	}
	ps.aPol = ps.addPoly = function (p) {
		alert("Cannot add poly to a simple poly.")
	}
};
getAddPolys()
ps.gA = ps.getArea = function () {
	var pS=this, ax, ay, area
	if (pS.numPts() < 3) {return 0 }
	ax = pS.getX(0)
	ay = pS.getY(0)
	area = 0
	
	for (var i = 1; i < (pS.numPts() - 1); i++) {
		var bx = pS.getX(i), by = pS.getY(i),
				cx = pS.getX(i + 1),
				cy = pS.getY(i + 1)
		area += ((cx - bx) * (ay - by)) - ((ax - bx) * (cy - by))
	}
	
	return 0.5 * M.abs(area)
}
ps.bd = ps.bds =ps.gB = ps.gBd = ps.gBds=  ps.getBounds = function () {

	var pS = this, xmin = $N.MAX_VALUE, ymin = $N.MAX_VALUE, xmax = -$N.MAX_VALUE, ymax = -$N.MAX_VALUE
	
	
	_.t( pS.z(), function(i) {

		var x = pS.getX(i), y = pS.getY(i)
		if (x < xmin) xmin = x;
		if (x > xmax) xmax = x
		if (y < ymin) ymin = y;
		if (y > ymax) ymax = y;
})
	
	
	return $gR(xmin, ymin, (xmax - xmin), (ymax - ymin))

}
function boolProps(){
	ps.iE = ps.isEmpty = function () {
		return this.m_List.isEmpty()
	}
	ps.ho=ps.hole=function(isH){
	if(U(isH)){return this.isHole()}
	this.isHole(isHole?true:false)
	return this

}
	ps.iH=ps.isHole = function () {
	return false
}// Always returns false since PolySimples cannot be holes.
	ps.sH=ps.sIH=ps.setIsHole = function (isHole) {
	alert("PolySimple cannot be a hole")
}
	ps.ctb=ps.contrib=function(i, contribs){var ps=this
	if(!contribs){return ps.isContributing(i)}
	ps.setContributing(i, contribs)
	return ps
}
	ps.iCb= ps.isContributing = function (i) {
	if (i != 0) {alert("PolySimple only has one poly")}
	return this.m_Contributes;
}
	ps.sCb= ps.setContributing = function (i, contribs) {
	if (i != 0) {alert("PolySimple only has one poly")}
	this.m_Contributes = contribs
}


};boolProps()
ps.int= ps.intersection = function (p) {
	return Clip.intersection(this, p, "PolySimple");
}//>> simple Poly
ps.uni = ps.union = function (p) {
	return Clip.union(this, p, "PolySimple")
}//>> simple poly
ps.xor = function (p) {
	return Clip.xor(p, this, "PolySimple")
}//>> simple poly
ps.dif= ps.difference = function (p) {return Clip.difference(p, this, "PolySimple")}

ps.ty = ps._ty = function () {
	return 'PolySimple'
}

ps.iPI = ps.isPointInside = function (pt) {
	var pts = this.getPoints(), j = _.z(pts) - 1,
			oddNodes = false
	for (var i = 0; i < _.z(pts); i++) {
		if (pts[i].y < pt.y && pts[j].y >= pt.y ||
				pts[j].y < pt.y && pts[i].y >= pt.y) {
			if (pts[i].x + (pt.y - pts[i].y) / (pts[j].y - pts[i].y)
					* (pts[j].x - pts[i].x) < pt.x) {
				oddNodes = !oddNodes
			}
		}
		j = i
	}
	return oddNodes
}
ps.hC = ps.hashCode = function () {
	/**
	 * Return the hashCode of the object.
	 * WARNING:Hash and Equals break contract.
	 * @return an integer value that is the same for two objects
	 * whenever their internal representation is the same (equals() is true)
	 */
	// !!! WARNING:  This hash and equals break the contract. !!!
	return 37 * 17 + this.m_List.hashCode()
}
ps.eq = ps.equals = function (obj) {
	
	// Return true if the given object is equal to this one.		
	//  method failse if the first point  appears more than once in the list.
	// !! sucky algorithm  fails if 1st pt  in "this" poly appears more than once
	if (!gpc.iPS(obj)) {
		return false
	}
	var that = obj,
			this_num = this.m_List.size(),
			that_num = that.m_List.size()
	if (this_num != that_num) {
		return false
	}
	if (this_num > 0) {
		var this_x = this.getX(0), this_y = this.getY(0), that_first_index = -1
		for (var that_index = 0; (that_first_index == -1) && (that_index < that_num); that_index++) {
			var that_x = that.getX(that_index), that_y = that.getY(that_index)
			if ((this_x == that_x) && (this_y == that_y)) {
				that_first_index = that_index
			}
		}
		if (that_first_index == -1) {
			return false;
		}
		var that_index = that_first_index
		for (var this_index = 0; this_index < this_num; this_index++) {
			this_x = this.getX(this_index);
			this_y = this.getY(this_index);
			var that_x = that.getX(that_index), that_y = that.getY(that_index)
			if ((this_x != that_x) || (this_y != that_y)) {
				return false
			}
			that_index++
			if (that_index >= that_num) {
				that_index = 0
			}
		}
	}
	return true
}
ps.tS = ps.toString = function () {
	return "PolySimple: num_points=" + numPts()
}
