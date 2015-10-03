BOX=function(){
	w = new b2d.World(b2d.AB(100/30,100/30,500/30,500/30),V(0,10))
	$l('bod count 1: ' + w.GetBodyCount())
	cFD = new b2d.CircleShape(50/30)
	cFD.friction =.5
	cFD.restitution = 0.3
	cFD.density = 0
	bD = new b2BodyDef		
	b=	w.CreateBody(bD)
	b.CreateFixture2(cFD)
	b.SetMassData()		
	b.SetPosition(V(545/30, 195/30))
	$l('bod count 2: ' + w.GetBodyCount())
}



 
 
function ball() {
	var cFD = new b2d.CircleShape(50 / 30)
	cFD.friction = .5
	cFD.restitution = .8
	cFD.density = 1
	var bD = new b2BodyDef
	var b = w.CreateBody(bD)
	b.CreateFixture2(cFD)
	b.SetMassData()
	b.SetPosition(V(545 / 30, 595 / 30))
	return b
}



$bW= function(){var g=G(arguments),o
	o = N(g.s)?{ gx: g.f, gy: g.s, igSl: g.t}:
			N(g.f) ? {  gy: g.f, igSl: g.s} :				
			{  igSl: g.f}
	o.gx = N(o.gx,0)
	o.gy= N(o.gy, 10)
	o.igSl= U(o.igSl)?false: !!o.igSl
	ab = b2d.AB(100 / 30, 100 / 30, 500 / 30, 500 / 30)
	return new b2d.World( V(0,10), false )

}




function sBall() {
	var cFD = new b2d.CircleShape(50 / 30)
	
	cFD.friction = .5
	cFD.restitution = 0.8
	cFD.density = 1
	
	var bD = new b2BodyDef
	bD.type = 2
	var b = w.CreateBody(bD)
	b.CreateFixture2(cFD)
	//b.SetMassData()
	b.SetPosition(V(545 / 30, 195 / 30))
	return b
}

BOX = function () {
	
	c = $.c('y', 1800, 1500)
	x= c.ctx()
	
	$.i('me',function(i){
		x.drawImage(i,0,0)
	})
	
	dbD= new b2DebugDraw()
	dbD.SetSprite(x)
	//dbD.SetSprite(c[0])
	//c[0]
	dbD.SetDrawScale(30)
	 DD= b2DebugDraw
	 dbD.SetFlags( b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit )
	dbD.SetLineThickness(20)
	dbD.SetFillAlpha(1)
	
	w = $bW()
	w.SetDebugDraw(dbD)
	
	ball()
	ball()
	ball()
	
	b = sBall()
	
	$l(w.GetBodyCount())
	
	T.t(function () {
		w.DrawDebugData()
		w.step(1 / 20, 10, 8)
		ps = b.GetPosition()
		//$l(ps.x * 30 + ', ' + ps.y * 30)
	
	})
	
	
	
}
BOX = function () {
	c = $.c('y', 1800, 1500)
	x = c.ctx()
	$.i('me', function (i) {
		x.drawImage(i, 0, 0)
	})
	dbD = new b2DebugDraw()
	dbD.SetSprite(x)
	//dbD.SetSprite(c[0])
	//c[0]
	dbD.SetDrawScale(30)
	DD = b2DebugDraw
	dbD.SetFlags(b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit)
	dbD.SetLineThickness(20)
	dbD.SetFillAlpha(1)
	w = $bW()
	w.SetDebugDraw(dbD)
	ball()
	ball()
	ball()
	b = sBall()
	$l(w.GetBodyCount())
	T.t(function () {
		w.DrawDebugData()
		w.step(1 / 20, 10, 8)
		ps = b.GetPosition()
		//$l(ps.x * 30 + ', ' + ps.y * 30)
	})
	
	
	w.ba
}
 
 
 
 
 