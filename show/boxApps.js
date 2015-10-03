BOX = function () {
	w = new b2d.World(b2d.AB(100 / 30, 100 / 30, 500 / 30, 500 / 30), V(0, 10))
	$l('bod count 1: ' + w.GetBodyCount())
	cH = new b2d.CircleShape(50 / 30)
	cH.friction = .5
	cH.restitution = 0.3
	cH.density = 0
	bD = new b2BodyDef
	b = w.CreateBody(bD)
	b.CreateFixture2(cH)
	b.SetMassData()
	b.SetPosition(V(545 / 30, 195 / 30))
	$l('bod count 2: ' + w.GetBodyCount())
}
BOX1 = function () {
	c = $.c('y', 1800, 1500)
	x = c.ctx()
	$.i('me', function (i) {
		x.drawImage(i, 0, 0)
	})
	var DD = b2DebugDraw; //dbD=  //	dbD.SetSprite(x); //  dbD.SetDrawScale(30); //	dbD.SetLineThickness(20) //	dbD.SetFillAlpha(1)// dbD.flag( b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit )
	w = $bW().sDD($dD(x, 30))//.fl( b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit )
	$bi()
	b = $ba()
	$l(w.GetBodyCount())
	T.t(function () {
		w.DrawDebugData()
		w.step(1 / 20, 10, 8)
		ps = b.GetPosition()
		//$l(ps.x * 30 + ', ' + ps.y * 30)
	})
}




$xyr = $xyR=  $ba=function(){
	var b=  w.dB( 545,195 )
	b.A(fD = b2d.cFD(50).DBF()		)
	return b
}

$XYR = $bi=function(){
	var b=  w.sB(  545, 595  )
	return b.A(b2d.cFD(150).DBF())
}





BOX = function(){

	w = $bW().sDD( $dD($.c('z', 1800, 1500)) )
	_.ev(.1, function(){w.go(1/5,'+')})
	
	  $bi()
	
	_.ev(2,function(){
		$ba()
	})
	
	
	$l('bodyCOunt:' + w.GetBodyCount())

}

