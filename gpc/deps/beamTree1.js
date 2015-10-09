gpc.g.ScanBeamTree = function (yvalue) {
	this.y = yvalue;
	// Scanbeam node y value             
	this.less;
	// Pointer to nodes with lower y     
	this.more;
	// Pointer to nodes with higher y    
}
gpc.g.ScanBeamTreeEntries = function () {
	this.sbt_entries = 0;
	this.sb_tree;
};
gpc.g.ScanBeamTreeEntries.prototype.build_sbt = function () {
	var sbt = [];
	var entries = 0;
	entries = this.inner_build_sbt(entries, sbt, this.sb_tree);
	//$l("SBT = "+this.sbt_entries);
	if (entries != this.sbt_entries) {
		//$l("Something went wrong buildign sbt from tree.");
	}
	return sbt;
}
gpc.g.ScanBeamTreeEntries.prototype.inner_build_sbt = function (entries, sbt, sbt_node) {
	if (sbt_node.less != null) {
		entries = this.inner_build_sbt(entries, sbt, sbt_node.less);
	}
	sbt[entries] = sbt_node.y;
	entries++;
	if (sbt_node.more != null) {
		entries = this.inner_build_sbt(entries, sbt, sbt_node.more);
	}
	return entries;
}
gpc.g.StNode = function (edge, prev) {
	this.edge = edge;// Pointer to AET edge 
	this.xb = edge.xb;// Scanbeam bottom x coordinate 
	this.xt = edge.xt;// Scanbeam top x coordinate 
	this.dx = edge.dx;// Change in x for a unit y increase 
	this.prev = prev;// Previous edge in sorted list 
}
gpc.g.TopPolygonNode = function () {
	this.top_node
}
var tPN = gpc.g.TopPolygonNode.prototype
tPN.add_local_min = function (x, y) {
	var existing_min = this.top_node
	this.top_node = new PolygonNode(existing_min, x, y);
	return this.top_node;
}
tPN.merge_left = function (p, q) {
	// Label contour as a hole 
	q.proxy.hole = true;
	var top_node = this.top_node;
	if (p.proxy != q.proxy) {
		// Assign p's vertex list to the left end of q's list 
		p.proxy.v[Clip.RIGHT].next = q.proxy.v[Clip.LEFT];
		q.proxy.v[Clip.LEFT] = p.proxy.v[Clip.LEFT];
		// Redirect any p.proxy references to q.proxy 
		var target = p.proxy;
		for (var node = top_node; (node != null); node = node.next) {
			if (node.proxy == target) {
				node.active = 0;
				node.proxy = q.proxy
			}
		}
	}
}
tPN.merge_right = function (p, q) {
	var top_node = this.top_node;
	// Label contour as external 
	q.proxy.hole = false;
	if (p.proxy != q.proxy) {
		// Assign p's vertex list to the right end of q's list 
		q.proxy.v[Clip.RIGHT].next = p.proxy.v[Clip.LEFT];
		q.proxy.v[Clip.RIGHT] = p.proxy.v[Clip.RIGHT];
		// Redirect any p->proxy references to q->proxy 
		var target = p.proxy;
		for (var node = top_node; (node != null ); node = node.next) {
			if (node.proxy == target) {
				node.active = 0;
				node.proxy = q.proxy;
			}
		}
	}
}
tPN.count_contours = function () {
	var nc = 0;
	for (var polygon = this.top_node; (polygon != null); polygon = polygon.next) {
		if (polygon.active != 0) {
			// Count the vertices in the current contour 
			var nv = 0;
			for (var v = polygon.proxy.v[Clip.LEFT]; (v != null); v = v.next) {
				nv++;
			}
			// Record valid vertex counts in the active field 
			if (nv > 2) {
				polygon.active = nv;
				nc++;
			}
			else {
				// Invalid contour: just free the heap 
//                  VertexNode nextv = null ;
//                  for (VertexNode v= polygon.proxy.v[Clip.LEFT]; (v != null); v = nextv)
//                  {
//                     nextv= v.next;
//                     v = null ;
//                  }
				polygon.active = 0;
			}
		}
	}
	return nc;
}
tPN.getResult = function (polyClass) {
	var top_node = this.top_node;
	var result = Clip.createNewPoly(polyClass);
	//$l(polyClass);
	var num_contours = this.count_contours();
	if (num_contours > 0) {
		var c = 0, npoly_node = null;
		for (var poly_node = top_node; (poly_node != null); poly_node = npoly_node) {
			npoly_node = poly_node.next;
			if (poly_node.active != 0) {
				var poly = result;
				if (num_contours > 1) {
					poly = Clip.createNewPoly(polyClass);
				}
				if (poly_node.proxy.hole) {
					poly.setIsHole(poly_node.proxy.hole);
				}
				// ------------------------------------------------------------------------
				// --- This algorithm puts the verticies into the poly in reverse order ---
				// ------------------------------------------------------------------------
				for (var vtx = poly_node.proxy.v[Clip.LEFT]; (vtx != null); vtx = vtx.next) {
					poly.add(vtx.x, vtx.y);
				}
				if (num_contours > 1) {
					result.addPoly(poly);
				}
				c++;
			}
		}
		// --- Sort holes to the end of the list ---
		var orig = result;
		result = Clip.createNewPoly(polyClass);
		for (var i = 0; i < orig.getNumInnerPoly(); i++) {
			var inner = orig.getInnerPoly(i)
			if (!inner.isHole()) {
				result.addPoly(inner)
			}
		}
		for (var i = 0; i < orig.getNumInnerPoly(); i++) {
			var inner = orig.getInnerPoly(i);
			if (inner.isHole()) {
				result.addPoly(inner)
			}
		}
	}
	return result;
}
tPN.print = function () {
	//$l("---- out_poly ----");
	var top_node = this.top_node, c = 0, npoly_node = null;
	for (var poly_node = top_node; (poly_node != null); poly_node = npoly_node) {
		//$l("contour="+c+"  active="+poly_node.active+"  hole="+poly_node.proxy.hole);
		npoly_node = poly_node.next;
		if (poly_node.active != 0) {
			var v = 0;
			for (var vtx = poly_node.proxy.v[Clip.LEFT]; (vtx != null); vtx = vtx.next) {
				//$l("v="+v+"  vtx.x="+vtx.x+"  vtx.y="+vtx.y);
			}
			c++
		}
	}
}

function vetex(){
gpc.g.VertexNode = function (x, y) {
	this.x;    // X coordinate component
	this.y;    // Y coordinate component
	this.next; // Pointer to next vertex in list
	this.x = x;
	this.y = y;
	this.next = null;
}
gpc.g.VT = gpc.g.VertexType = function () {
}
gpc.g.VT.NUL = 0;// Empty non-intersection       
gpc.g.VT.EMX = 1 // External maximum             
gpc.g.VT.ELI = 2 // External left intermediate   
gpc.g.VT.TED = 3 // Top edge                     
gpc.g.VT.ERI = 4 // External right intermediate  
gpc.g.VT.RED = 5 // Right edge                   
gpc.g.VT.IMM = 6 // Internal maximum and minimum 
gpc.g.VT.IMN = 7 // Internal minimum             
gpc.g.VT.EMN = 8 // External minimum             
gpc.g.VT.EMM = 9 // External maximum and minimum 
gpc.g.VT.LED = 10 // Left edge                    
gpc.g.VT.ILI = 11 // Internal left intermediate   
gpc.g.VT.BED = 12 // Bottom edge                  
gpc.g.VT.IRI = 13 // Internal right intermediate  
gpc.g.VT.IMX = 14 // Internal maximum             
gpc.g.VT.FUL = 15 // Full non-intersection
gpc.g.VT.getType = function (tr, tl, br, bl) {
	return tr + (tl << 1) + (br << 2) + (bl << 3);
}
};vetex()
gpc.g.WeilerAtherton = function () {
};
gpc.g.WeilerAtherton.prototype.merge = function (p1, p2) {
	p1 = p1.clone();
	p2 = p2.clone();
}
PolyDefault = gpc.g.PolyDefault;
ArrayList = gpc.u.ArrayList;
PolySimple = gpc.g.PolySimple;
Clip = gpc.g.Clip;
OperationType = gpc.g.OperationType;
LmtTable = gpc.g.LmtTable;
ScanBeamTreeEntries = gpc.g.ScanBeamTreeEntries;
EdgeTable = gpc.g.EdgeTable;
EdgeNode = gpc.g.EdgeNode;
ScanBeamTree = gpc.g.ScanBeamTree;
Rectangle = gpc.g.Rectangle;
BundleState = gpc.g.BundleState;
LmtNode = gpc.g.LmtNode;
TopPolygonNode = gpc.g.TopPolygonNode;
AetTree = gpc.g.AetTree;
HState = gpc.g.HState;
VertexType = gpc.g.VertexType;
VertexNode = gpc.g.VertexNode;
PolygonNode = gpc.g.PolygonNode;
ItNodeTable = gpc.g.ItNodeTable;
StNode = gpc.g.StNode;
ItNode = gpc.g.ItNode;