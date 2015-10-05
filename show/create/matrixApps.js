 

M2D = CJSM2D = function () {
	z()
	
	m = $Mx()
	
	$l(m)
	
	$St().bm('me', function(bm){
		b=bm.XY(400, 200)
		p = b.getConcatenatedDisplayProps();			
		$l(p)
		cm=	b.getConcatenatedMatrix()
		$l(cm)
	})
	
	
	
}
 
MXD=function(){z()
	 
	
	st= $St()
	 
	m = $tMx(210, 230, .5,.5)
	 
	$.i('chicks', function(i){
		
		h = st.h(100,100,'+').l(0)
		
		gx = h.graphics
		
		h.dr(0, 0, 200, 200) 
		
		gx.bf(i, null, m)
		
		
		h.l(20).C('r',20).dc(100,100,100)
	 
	 
	 })
	
 }
 
 
 