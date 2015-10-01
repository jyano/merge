 


//shape apps
BUBBLE = function () {
	St()
	
	
	output = $T(
		"try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
		"13px courier").lWH(280, 13).XY(190, 10)
	
	bg = $H().n("background")
	
	bg.graphics.f("red").rr(0, 0, 150, 60, 10)
	lb = $T("click me!", "bold 24px Arial", "#FFFFFF").XY(150 / 2, 60 / 2).n('label').tA("center")//.tB("middle")
	
	// setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
	// button.mouseChildren = false;
	st.A(bt = $Ct().XY(20).n('button').A(bg, lb), output)
	
	// set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:
	
	_.e([st, bt, lb, bg], function (tg) {
		tg.$(handleClick, false);
		tg.$(handleClick, true)
	})
	
	st.u()
	
	
	function handleClick(e) {
		if (e.currentTarget == st && e.eventPhase == 1) {
			output.text = "target : eventPhase : currentTarget\n"
		}// this is the first dispatch in the event life cycle, clear the output.
		output.text += e.target.name + " : " + e.eventPhase + " : " + e.currentTarget.name + "\n";
		if (e.currentTarget == st && e.eventPhase == 3) {
			st.u()
		}// this is the last dispatch in the event life cycle, render the stage.
	}
	
	
}
BOWL = function () {
	St()
	
	
	ct = container = c = $Ct().a2(st)
	
	
	plX = st.W() / 2
	
	plY = 150
	
	plR = 100
	
	plr = 75 // this seems to determine the radius of the 'cluster' of balls
	
	oRng = 8 //outer ring
	
	nRng = 3// number of rings
	//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1
	
	circ = cjs.cir(plX, plY, plR, 'yellow')
	
	container.A(circ) // cr = Hx().c(plR,'y').xy(plX,plY)
	
	
	rngSp = plr / (nRng - 1)
	
	
	aA = []
	
	
	var ast = function (x, y, r, m, f) {
		return {
			x: x, y: y, radius: r, m: m,
			f: f, vX: 0, vY: 0, player: false
		}
	}
	
	_.t(nRng, function (r) {
		var crR = 0, ang = 0, rngR = 0
		if (r == nRng - 1) {
			crR = 1
		}
		
		else {
			crR = oRng - (r * 3)
			ang = 360 / crR
			rngR = plr - (rngSp * r)
		}
		_.t(crR, function (a) {
			var x = 0, y = 0
			if (r == nRng - 1) {
				x = plX;
				y = plY
			}
			else {
				x = plX + (rngR * M.cos((ang * a) * M.PI / 180))
				y = plX + (rngR * M.sin((ang * a) * M.PI / 180)) - 350
			}
			aA.push(ast(x, y, 10, 5, 0.95))
			ct.A(cjs.cir(10, 'z').XY(x, y))
			
			
		})
		
	})
}
GRID = function () {
	St()
	ct = st.ct()
	ct.SL()
	
	rows = 5;
	cols = 6;
	sqP = 12;
	sqS = 80
	
	sqSP = sqS + sqP
	_.t(rows * cols, function (i) {
		drawSquare(ct, sqSP * (i % cols), sqSP * M.fl(i / cols)
		)
	})
	
	function drawSquare(ct, x, y) {
		var h = $H()
		h.a2(ct).f($r())
		h.graphics.dr(5, 5, 70, 70)
		if (x) {
			h.X(x)
		}
		if (y) {
			h.Y(y)
		}
		return h
	}
}
TANGLE=function(){z()
	
	a = $.dA('r',50,50).XY(50).A().pad(10)
	b = $.dA('b',100,100).XY(100).A().pad(10)
	c = $.dA('g',200,200).XY(200).A().pad(10)
	d = $.dA('y',400,400).XY(400).A().pad(10)
	
	y=function(aa,bb,cc,dd){
		
		
		if(aa && U(bb)){  aa.A().P('a') }
		
		if( bb ){ bb.A( aa.P('static') )  }
		
		if( dd ){ dd.A( cc.P('s') )  }
		
	}
	
	
}
ISO=function(levNum){
	
	
	Tile = function(){
		
		var that =this
		var shape = this
		
		this.container = new createjs.Container().drag()
		this.tile = cjs.diamond(80, 40, 'blue')
		
		//this.tile.graphics.s('red').f('blue').s('green').mt(0,0).lt(40,-20).lt(80,0).lt(40,20).lt(0,0)
		this.container.A(this.tile)
		this.coin = false
		this.addCoin = function(){
			
			
			this.coin = tileCoin()
			this.container.A(this.coin)
			
		}
		this.addBad=function(){
			
			this.bad= tileBad()
			this.container.A(this.bad )
			
		}
		
		this.playerTo = function(){
			
			if(shape.wasOn==true){location=location}//ISO()
			
			player.X(that.container.x )
			player.Y(that.container.y -14 )
			
			
			player.tile= shape
			player.col= shape.col
			player.row= shape.row
			
			if(shape.coin){shape.coin.remove()}
			if(shape.bad){location=location}
			shape.wasOn=true
			//if(isolated()){alert('!')}
		}
		
		this.container.on('dblclick', function(){
			
			h  = that
			that.tile.graphics.f('red').dc(0,0,2)
			$l('dblclicked!')
			that.playerTo()
		})
		
	}
	isoRow=function(r,howMany,x,y){
		x = x||0;
		y = y||0
		
		var row=[]
		
		_.times(howMany, function(i){
			
			x = x+ 40
			y = y- 20
			var t= new Tile()
			
			t.container.XY(x,y)
			
			stage.A(t.container)
			
			createjs.bindSlide(t.container)
			
			t.col= i
			
			t.row= r
			
			row.push(t)
			
		})
		
		return row}
	isoGrid=function(n1,n2,x,y){ x=x||0; y=y||0
		
		var grid=[]
		
		_.times(n2,function(i){
			x=x+40
			y=y+20
			
			var row = isoRow(i,n1,x,y)
			
			grid.push(row)
			
		})
		
		
		
		
		return grid}
	
	tileCoin=function(){
		
		return cjs.circ(15,'yellow', 'black')
		
	}
	
	tileBad=function(){ return cjs.circ(15,'green', 'orange')}
	
	tilePlayer=function(bm){
		player = bm
		player.right=function(){
			player.tile.container.remove()
			grid[player.row][player.col]=null
			grid[player.row][player.col+1]. playerTo()}
		player.left=function(){
			
			player.tile.container.remove()
			player.tile.exists=false
			//player.tile=null
			grid[player.row][player.col]=null
			grid[player.row][player.col-1]. playerTo()}
		player.down=function(){
			player.tile.container.remove()
			grid[player.row+1][player.col]. playerTo()}
		player.up=function(){
			
			player.tile.container.remove()
			grid[player.row-1][player.col]. playerTo()
			
			
		}
		player.to=function(x,y){
			grid[x][y].playerTo()
			return player}
		
		kD('u',function(){player.up()})
		kD('d',function(){player.down()})
		kD('l',function(){player.left()})
		kD('r',function(){player.right()})
		return player}
	
	
	killTile=function(a,b){
		grid[a][b].container.remove()
		grid[a][b].wasOn=true
		
	}
	lev1=function(){
		grid[3][5].container.remove()
		grid[4][4].container.remove()
		grid[6][6].container.remove()
		grid[7][1].container.remove()
		grid[0][3].addCoin()
		grid[1][3].addCoin()
		grid[3][4].addCoin()
		grid[5][2].addCoin()
		grid[8][8].addCoin()
	}
	lev2=function(){
		grid[0][0].addCoin()
		grid[0][9].addCoin()
		grid[0][3].addCoin()
		grid[1][3].addCoin()
		grid[1][6].addCoin()
		grid[2][1].addCoin()
		grid[3][4].addCoin()
		grid[3][8].addCoin()
		grid[4][7].addCoin()
		grid[5][2].addCoin()
		grid[6][5].addCoin()
		grid[6][9].addCoin()
		grid[8][8].addCoin()
		grid[8][2].addCoin()
		
		
		grid[8][4].addCoin()
		grid[9][0].addCoin()
		
		
		killTile(1,2)
		killTile(2,2)
		killTile(2,6)
		killTile(2,7)
		killTile(2,8)
		killTile(4,0)
		killTile(4,3)
		
		killTile(4,4)
		killTile(4,6)
		killTile(4,9)
		killTile(6,1)
		killTile(6,2)
		killTile(7,1)
		killTile(7,3)
		
		killTile(7,4)
		killTile(7,9)
		
		killTile(8,6)
		killTile(8,7)
		killTile(8,9)
		
		
		
		
		
		
		
	}
	lev3=function(){
		
		grid[0][0].addBad()
		grid[0][9].addBad()
		grid[0][3].addBad()
		
		grid[1][6].addBad()
		grid[2][1].addBad()
		grid[3][4].addBad()
		grid[3][8].addBad()
		
		grid[5][2].addBad()
		grid[6][5].addBad()
		grid[6][9].addBad()
		grid[8][8].addBad()
		grid[8][2].addBad()
		
	}
	lev4=function(){
		
		
		grid[2][9].addCoin()
		grid[5][0].addCoin()
		
		grid[2][3].addCoin()
		grid[5][6].addCoin()
		grid[9][3].addCoin()
		grid[3][1].addCoin()
		grid[4][4].addCoin()
		grid[0][8].addCoin()
		grid[6][7].addCoin()
		grid[5][8].addCoin()
		grid[9][6].addCoin()
		grid[2][2].addBad()
		grid[0][0].addBad()
		grid[0][9].addBad()
		grid[5][3].addBad()
		grid[2][6].addBad()
		grid[4][5].addBad()
		grid[9][0].addBad()
		grid[9][7].addBad()
		grid[3][8].addBad()
		
		
		grid[6][5].addBad()
		grid[6][9].addBad()
		
		grid[8][2].addBad()
		
	}
	
	
	isolatedBeta=function(){
		r= player.row;
		c= player.col
		if(
			//grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
		//&&  grid[r-1] &&grid[r-1][c] && grid[r-1][c].wasOn
		
		grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
		){return true}
	}
	z()
	stage = $St(900,500).tick().A()
	grid = isoGrid(10,10,0,240)
	kD('s',function(){location=location})
	if(levNum){ window['lev'+levNum]()}
	else if( window['_pam']){window['lev'+ _pam]()}
	else{lev1()}
	stage.bm0('me', function(me){
		player = tilePlayer(me).sXY(.2).drag().to(5,5)})
	
	
	
	
}
CONNECT=function(){  St() //m$$('location=location')
	
	// st= $St('p', 1000)
	pink = cjs.circ(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
	st.A(pink)
	ct = $Ct()
	st.A(ct)
	green = cjs.circ( 200,'green','purple').XY(320,300)//.rXY(100)
	yellow = cjs.circ( 100,'yellow','purple').XY(250)
	red= cjs.circ( 40,'red','purple').XY(200,100)
	orange = cjs.circ( 20,'orange','purple').XY(300)
	ct.A(green, yellow, red, orange )
	LS(yellow, ct)
	SL(green)
	SL(green,pink)
	
	SL(yellow)
	SL(red,ct)
	SL(orange, red)
	
}
SHOOTY = function () {
	St()
	$.ghost = function () {
		return $.c('X', 500, 500).fit('me').al(.1)
	} // how cool.. it 'steals' the drag because its on top but looks like its below
	
	st.mug(function (m) {
		m.XY(100, 100).WH(150)
		SL(m)
		//key(m, '-')// ugun(mug)
	})
	c = $.ghost().XY(10, 10).A().dg()
}
CVTX = function () {
	return $.d().A($.c(960, 400).id("testCanvas"))
}
matrix()
function matrix(){
	
	MATRIX1=function(){// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		
		
		stage = St()
		
		$.d('b', 50, 50).A()
		
		//stage = s = cjs.stage(1600,1000).tick().A()
		
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		st.on('e', co)
		
		//make a container
		st.ct(function(c, s){
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
			
			c.bm('me',
				 function(b){
					 b.sXY(.2).XY(100,80)
					 b.on(click, function(){$l('lit')},'/')  //on click, log('lit'), just once (remove listener)!
				
				 })
			
			
			
			
			
			// the middle size me demonstrates stopPropogation
			// if you click it, the container does not feel the click
			
			c.bm('me',function(bm){
				bm.sXY(.4).XY(100,180)
				bm.$( function(){$l('mid')}, '-')  //on click, log('mid'), and stop prop
			})
			
			c.bm('me',function(bm){
				bm.sXY(1.5)
				bm.on('click',function(){$l('big')})  //on click, log('big')
			})    //on click, log('con')
			c.on('click',  function(){$l('con')})
		})
		
		
		st.ct(   function(ct){c=ct
					 var vn=0, rvn=0, on=0, ron=0
			
					 ct.X(200)
			
					 ct.mug(function(b){b.sXY(.8).XY(200,80)})
					 ct.mug(function(b){b.sXY(.8).XY(100,280)})
					 ct.mg(function(b){b.sXY(.8).XY(340,180)})
			
					 //this shows over/out vs rollover/rollout
					 //over/out get retriggered when switching between connected sprites
					 //rollover/rollout does not because it is still touching 'something'
					 ct.on('mouseover',function(){c.X(10,'+');$l('v: '+vn++)})
					 ct.on('rollover',function(){c.X(20,'-');$l('rv: '+rvn++)})
					 ct.on('mouseout',function(){c.Y(10,'+');$l('o: '+on++)})
					 ct.on('rollout',function(){c.Y(20,'-');$l('ro: '+ron++)})
				 }
		).MV(40)
		
		
		st.ct(function(ct, st){
			
			ct.X(700)
			ct.mug(function(bm){bm.sXY(.8).XY(200,80)})
			ct.mug(function(bm){bm.sXY(.8).XY(100,280)})
			ct.mug(function(bm){bm.sXY(.8).XY(340,180)})
			
			//this example shows which sprites are acted upon with over/rollover
			//over only affects one
			//rollover affects ALL
			//if you enter a sprite from outside, they all grow (via rollover),
			//and the one sprite grows double (via over)
			
			ct.on('mouseover',function(){$l('mouseover'); this.sXY(.01,'+') })
			ct.on('rollover',function(){$l('rv'); this.sXY(.01,'+')})
			ct.on('mouseout',function(){ })
			ct.on('rollout',function(){ })
			
			// in summary,
			// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
			// BUT, they will all recieve events separately
			
		}).MV(40) //??? mouse events? speed for some mouse checking thing
		st.ct(function(ct,st){
			ct.x = 1400
			ct.bm('me',function(bm){
				//make the little me slide the entire container
				//it acts as a handle! (for its container)
				lit = bm.sXY(.2).XY(100,80)
				SL(bm, ct)
				ctr.bm('me',function(bm){
					//big me will scale the little me
					big = bm.sXY(2).XY(100,180)
					SC(bm, lit)
					ct.bm('me',function(bm){ bm.sXY(.6).XY(150,180).SL(); RT(bm, big)})})
			})
			
			//guy slides stage
			ct.bm('guy',function(bm){bm.sXY(.4).XY(100,180); SL(bm, st)})
		})
		
		
		
		
	}
	MATRIX0=function(){ z(); $l('matrix')
		
		st = stage = $St(1600,1000)
		
		// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
		// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		
		$.d('b', 50, 50).A()
		
		
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		st.on('mouseenter', function(){$('body').C($r())})
		
		st.A( ct=container=c= $Ct()  )
		
		ct.bm('me',  function(bm){
			//b.sxy(.2).xy(100,80)
			
			//b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!
			
		})
		
		
		
		//make a container
		st.ct(function(c, s){
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
			
			
			
			// the middle size me demonstrates stopPropogation
			// if you click it, the container does not feel the click
			ct.bm('me',function(b){
				b.sXY(.4).XY(100,180)
				//b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
			})
			
			
			ct.b('me',function(b){
				b.sXY(1.5)
				// b.o('$',fL('big'))  //on click, log('big')
				
			})
			
			//on click, log('con')
			//c.o('$',  fL('con'))
			
		})
		
		st.ct(  function(c){
			
			var vn=0,
				rvn=0,
				on=0,
				ron=0
			
			
			c.X(200)
			
			
			c.mug(
				function(b){
					b.sXY(.8).XY(200,80)
				})
			
			
			c.mug(
				function(b){
					b.sXY(.8).XY(100,280)
				})
			
			
			c.mg(
				function(b){
					b.sXY(.8).XY(340,180)
				})
			
			//this shows over/out vs rollover/rollout
			//over/out get retriggered when switching between connected sprites
			//rollover/rollout does not because it is still touching 'something'
			
			// c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
			//c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
			// c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
			//  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})
			
		}  )//.MV(40)
		
		st.ct(function(c,s){
			
			c.x(700)
			c.mg(function(b){b.sxy(.8).xy(200,80)})
			c.mg(function(b){b.sxy(.8).xy(100,280)})
			c.mg(function(b){b.sxy(.8).xy(340,180)})
			
			//this example shows which sprites are acted upon with over/rollover
			//over only affects one
			//rollover affects ALL
			//if you enter a sprite from outside, they all grow (via rollover),
			//and the one sprite grows double (via over)
			
			
			
			c.o('v',function(g,e){
				$l('v')
				g.sxy(.01,'+')})
			
			c.o('rv',function(g,e){
				$l('rv')
				g.sxy(.01,'+')})
			
			c.o('o',function(q,e,g){ })
			c.o('ro',function(q,e,g){ })
			
			
			// in summary,
			// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
			// BUT, they will all recieve events separately
			
		}).MV(40)
		
		st.ct(function(ct,st){
			
			ct.X(1400)
			
			ct.bm('me',function(bm){
				
				//make the little me slide the entire container
				//it acts as a handle! (for its container)
				lit=bm.sXY(.2).XY(100,80)
				SL(bm,ct)
				
				
				ct.bm('me',function(bm){
					//big me will scale the little me
					big=bm.sXY(2).XY(100,180)
					
					SC(bm,lit)
					
					ct.bm('me',function(bm){ bm.sXY(.6).XY(150,180)
						SL(bm)
						RT(bm, big) })
				})
				
			})
			
			
			//guy slides stage
			ct.bm('guy',function(bm){
				bm.sXY(.4).XY(100,180)
				SL(bm, stage)
			})
			
			
			
		})
		
		
		
		
	}
	MATRIX=function(){// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		
		z()
		
		$l('matrix')
		
		
		st=stage=s=$St(1600,1000).A().tick()
		
		
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		st.on('mouseenter', function(){$('body').C($r())})
		
		st.A( ct=container=c=new createjs.Container()  )
		
		ct.bm('me',  function(bm){
			
			bm.sXY(.2).XY(100,80)
			bm.on('click', function(){
				$l('lit')}, this, true) //just once
			
		})
		
		//make a container
		st.ct(function(ct, st){
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
			
			// the middle size me demonstrates stopPropogation
			// if you click it, the container does not feel the click
			ct.bm('me',function(bm){  //future: c.bm('me', .4, function(bm){})
				bm.sXY(.4).XY(100,180)
				bm.on('click', function(e){$l('mid')
					e.stopPropagation()})
			})
			
			ct.bm('me',function(bm){
				bm.sXY(1.5)
					.on('click',function(){$l('big')})
			})
			
			ct.on('click', function(){$l('con')})
			
		})
		
		
		
	}
}
SHIP = function () {
	St()
	
	angleInDegrees = function self(y, x) {
		
		if (O(y)) {
			return self(y.vy, y.vx)
		}
		
		var d = tDeg(M.atan(y / x))
		
		if (x < 0) {
			d = M.abs(d) + 90;
			if (y < 0) {
				d = M.abs(d) + 90
			}
		}
		
		return d
	}
	ship = function (st) {
		h = t = $H().XY(100).rY(20).vX(1).vY(1)
		h.f('o').s('z').mt(0, 0).lt(0, 40).lt(80, 20).lt(0, 0)
		$.kD('d', function () {
			t.rt(6, '+')
		})
		$.kD('u', function () {
			t.rt(6, '-')
		})
		if (st) {
			st.A(h)
			st.MD(function (e) {
				t.vX((e.rawX - t.x) / 100, '+')
				t.vY((e.rawY - t.y) / 100, '+')
				if (t.vx > 10) {
					t.vX(10)
				}
				if (t.vy > 10) {
					t.vY(10)
				}
			})
		}
		_.ev(.05, function () {
			h.X(t.vx, '+').Y(h.vy, '+')
			h.rotation = angleInDegrees(t)
			
		})
		return t
	}
	PL = 1;
	aA = []
	div = $.d('y').pad(10)
	
	div.A(
		$.h1('controls'),
		
		b1 = $.bt('start', function () {
			PL = 1;
			b1.hd();
			b2.sh()
		}),
		
		b2 = $.bt('stop', function () {
			PL = 0;
			b2.hd();
			b1.sh()
		}).hd(),
		$.bt('sgun', function () {
			sgun(guy)
		}))
	boot = $.boot()
	boot.A(div, st.canvas)
	guy = ship(st)
	// kD('s',function(){ $l('bang')})
	
	_.t(100, function () {
		var a = ast();
		a.a();
		a.p()
	})
	st.t(function () {
		if (PL) {
			_.e(aA, function (a) {
				a.u()
			})
		}
	})
	
	sgun(guy)
}
works()
function works() {
	STG = function () {
		z()
		
		s = $St('z', 400).bm('me');
		s.can.dg()
		
		$St($.c('o', 400, 100).dg()).bm('me')
		
		$.c('x', 300, 100).id('someId').dg()
		$St(['someId']).t().bm('me')
		
	}  //three ways to make a new stage
	RMEVT = function () {
		St()
		
		
		st.bm('me', function (b) {
			me = b
			cb = b.on('pressmove', function () {
				this.x++
			})
		})
		
		st.bm('guy', function (b) {
			
			b.handleEvent = function () {
				this.y++
				me.off('pressmove', cb)
			}
			
			b.on('pressmove', b)
		})
        
		///////
		s.can.P('a').XY(300)
		s.A(h = shape = $h())
		h.rec(100, 200, 0, 200, 'red')
			.rec(100, 100, 100, 20, 'green')
			.rec(145, 120, 10, 80, 'orange')
			.cir(105, 100, 20, 'blue')
			.cir(105, 100, 8, 'black')
			.cir(200, 100, 20, 'blue')
			.cir(200, 100, 8, 'black')
			.cir(100, 20, 100, 'green')
			.rXY(100, 300).XY(100, 300).drag()
		p = function () {
			
			shape.twL(
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
			
			shape.twL(
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200]
			)
		}
		p()
	}
	SHAPES = function () {
	
		St()
		
		s.can.P('a').XY(200)
		 
		s.b('me')
		
		
		s.bm('me', 0.2, function (bm) {})
		
		h=$h().cir()
		
		s.A(
				$h().cir(100, 'blue', 'green').XY(100, 100).drag()
		)
		
		s.h().cir(100, 100, 10, 'red', 'yellow')
		s.h().cir(10, 100, 100, 'black', 'purple')
		s.h().cir(100, 10, 100, 'blue', 'red')
		s.h().cir(150, 150, 120, 'red', 'blue')
		s.h().cir(30, 'brown', 'gray')
		s.u()
	}
	
	HITCIRCLES = function () {
		z()
		
		var pt
		st = $St(1000, '+') // look no .tick() necesary!! look below :)
		ct = $Ct()
		st.A(ct.XY(150))
		_.t(25, function () {
			$H().XY(
				randomLocation(), randomLocation()).f(randomHSL()).dc(30).a2(ct)
		})
		
		T.on("tick", function (e) {
			ct.rotation += 3
			n = ct.getNumChildren()
			ct.ch(function (ch) {
				uM = ch.uM()
				ch.alpha = ch.uM() ? 1 : 0.1
				pt = ch.globalToLocal(st.m().x, st.m().y)
				if (st && st.mouseInBounds && ch.hitTest(pt.x, pt.y)) {
					ch.al(1)
				}
			})
			
		})
		function randomLocation() {
			return M.random() * 300 - 150
		}
		
		function randomHSL() {
			return cjs.Graphics.getHSL(M.random() * 360, 100, 50)
		}
		
	}
	HANDEV = function () {
		St()
		
		st.bm('me', function (b) {
			me = b
			cb = b.on('pressmove', function () {
				this.x++
			})
		})
		
		st.bm('guy', function (b) {
			b.handleEvent = function () {
				this.y++
			}
			b.on('pressmove', b)
		})
		
		st.t()
	}
	
	FANCY = function (x, y) {
		
		
		z()
		
		canvas = $.c('g', 400)
		st = stage = $St(canvas[0])
		
		frame = $.dragFrame(sp = $.sp())
		
		
		sp.A(
			$.bt('X', function () {
				frame.rm()
			}),
			$.bt('pics', function () {
				$.imgDiv(st)
			}),
			
			$.bt('transform'),
			$.bt('text'),
			
			$.bt('paint', function () {
				
				_paintColor = '#0FF'
				
				var size = 10, oX = 0, oY = 0, shape
				
				var paintStage = $.dragStage()
				
				// stage.a(  EaselText('finger paint', 'b', 40, 100, 10))
				
				paintStage.bm(
					st.du(), //?
					
					function (m) {
						
						
						m.XY(40).sXY(.4)
						//                    stagePainter(paintStage)
					})
				
				
			}),
			$.bt('cut'),
			
			$.bt('save'))
		
		sp.A($.br(), canvas)
		
		sp.A($.d().A(
			$.bt('clear', function () {
				st.removeAllChildren()
			}),
			
			$.bt('flat', function () {
				st.removeAllChildren()
				st.bm(st.toDataURL(), function (bm) {
					bm.dg()
				})
			}),
			
			$.bt('clone', function () {
				
				
				var sp = $.sp(),
					newStage = $.dragStage().A(sp)
				newStage.bm(st.du(), function (bm) {
					SL(bm)
				})
			}),
			
			$.bt('recur', function () {
				
				stbm(st.du(), function (bm) {
					
					bm.sxy(.4).SL()
					
				})
			}),
			
			$.bt('copy', function () {
				
				_copy = st.du()
				
				
			}),
			
			$.bt('paste', function () {
				st.bm(_copy, function (bm) {
					bm.drag()
				})
			}),
			
			$.bt('replace', function () {
				
				st.rm()
				st.bm(_copy, function (bm) {
					bm.dg()
				})
				
			})
		))
		
		sp.$$(function () {
			$('button').toggle()
		})
		
		
		sp.A()
		
		
	}
	CJSLAY = function () {
	
		Q(['me', 'guy'], function (q) {
			st = $St()
			
			me = q.bm('me').a2(st).sXY(3)
			guy = q.bm('guy').a2(st).sXY(.5).drag()
			$.bt('s.sXY(2)', function () {
				st.sXY(2)
			}).A()
			
			cjs.t(function () {
				me.X(guy.x * 2.2 - 140)
				me.Y(guy.y * .2)
			})
		})
	}
	EASELPHYS = function () {
		i.vX = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vx = this.vx + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vx = this.vx - a
				}
				
				else {
					this.vx = this.vx * -1
				}
				return this
			}
			else if (U(g[0])) {
					return this.vx
				}
			this.vx = a;
			return this
		}
		i.vY = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vy = this.vy + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vy = this.vy - a
				}
				else {
					this.vy = this.vy * -1
				}
				return this
			}
			else if (U(g[0])) {
					return this.vy
				}
			this.vy = a
			return this
		}
		i.jX = function (a) {
			var g = G(arguments);
			a = g[0]
			
			if (g.p) {
				this.vx = this.vx + a;
				return this
			}
			
			else if (g.n) {
				if (N(a)) {
					this.vx = this.vx - a
				}
				
				else {
					this.vx = this.vx * -1
				}
				return this
			}
			else if (U(g[0])) {
					return this.vx
				}
			this.vx = a;
			return this
		}
		i.jY = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vy = this.vy + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vy = this.vy - a
				}
				else {
					this.vy = this.vy * -1
				}
				return this
			}
			else if (U(g[0])) {
					return this.vy
				}
			this.vy = a
			return this
		}
		i.move = function () {
			return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
		}
		
		$St().bm('me', function (b) {
			
			b.go(10, 10)
			
			cjs.t(function () {
				$l(b.inStage())
			})
		})
	}
	TXH = function () {
		St()
		
		h = $H().a2(st)
		h.f('red').s('black')
		h.graphics.dc(400, 400, 200)
		h.graphics.dr(100, 0, 200, 200)
		
		/////////
		
		h.rec(100, 100, 100, 100, 'y')
		h.rec(200, 200, 100, 100, 'b')
		h.c('o').polyStar(300, 100,
						  50, 5, 0.6, -90)
		h.c('w', 'z')
			.roundRectComplex(400, 300,
							  300, 300, 20, 20, 30, 40)
		h.cir(500, 200, 40, 'b', 'x', 10)
		
		
		function exceedsStackSize() {
			////////////////
			h.c('y').dc(100, 100, 30).c('o').dc(100, 100, 10)
				.c('X', 'g', 8)
				.mt([
					[100, 100], [300, 300], [400, 100],
					[500, 300], [450, 450]], [[500, 0], [600, 100]
				])
			h.cir(600, 300, 'u', 'g', 10)
			
			
			lf = {c1: 'b', c2: 'o', y1: 200, y2: 700}
			v = [[300, 300], [320, 200], [640, 400], [280, 650]]
			//two ways to make the same thing
			s.h().poly({
				v: v,
				lf: lf
			})
			s.h(250, 50).lf(lf).mt(v)
		}
	}
	TWORECS = function () {
		St()
		
		ct = s.ct(1000, 300).drag()
		ct.rec({w: 400, h: 200, c: 'r', C: 'o', l: 10, a: -5})
		h1 = ct.rec({w: 200, h: 400, c: 'r', C: 'o', l: 10, a: 5})
		h = s.h().dr2() // h is another container.. to clr ->  h1.children[0].clr()
	}
	CIRCRG = function () {
		s = St()
		nip = function () {
			x1 = 0
			y1 = 0
			r1 = 10
			x2 = 0
			y2 = 0
			r2 = 100
			var h = cjs.shape(10, 10).a2(s).drag().al(.8)
			h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
				x1, y1, r1, x2, y2, r2)
				.dc(0, 0, 100)
				.endFill()
			return h
		}
		
		x1 = 0
		y1 = 0
		r1 = 10
		x2 = 0
		y2 = 0
		r2 = 100
		
		h = cjs.shape(10, 10).a2(s).drag()
		
		change = function () {
			//  h.remove()
			// h=cjs.shape(10, 10).a2(s).drag()
			
			h.graphics.rf(['blue', "orange"], [0, 1], x1, y1, r1, x2, y2, r2).dc(0, 0, 100).endFill()
			
			// x--
			
			// r1++
			// r2++
		}
		
		
		setInterval(change, 1000)
		
		change()
		
		n = nip()
		
		h2 = cjs.shape(500, 100).a2(s);
		h2.graphics.beginRadialGradientFill(["red", "yellow"], [0, 1], 100, 100, 0, 100, 100, 50).dc(50, 50, 100)
		
		////////
		
		s.h(600, 300).graphics.rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		
		s.h(600, 100).graphics.rf(
			['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		
		s.h(800, 300).rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		
		s.h(400, 300).rf(
			['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		
		
		s.h().cir(0, 0, 10)
	}
	REC = function () {
		s = $St()
		
		
		s.h(600, 300).graphics.rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		
		s.h(600, 100).graphics.rf(
			['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		
		s.h(800, 300).rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		
		s.h(400, 300).rf(
			['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		
		
		s.h().cir(0, 0, 10)
		///////////////
		x1 = 100
		y1 = 150
		r1 = 20
		x2 = 100
		y2 = 150
		r2 = 100
		h = $h(10, 10).a2(s).drag()
		change = function () {
			
			//  h.remove()
			
			// h=cjs.shape(10, 10).a2(s).drag()
			
			h.graphics.rf(["red", 'blue', "yellow"], [0, .5, 1], x1, y1, r1, x2, y2, r2).dr(0, 0, 400, 400).ef()
			
			
			r1++
			r2++
		}
		setInterval(change, 1000)
		change()
		
		
		h = s.h(480, 270).drag()
		h.C('z', 2).lf({x: -100, c1: 'r', c2: 'y'})
			.dr2({w: 300, h: 100, x: 0, y: -100},
			{w: 100, h: 300})
		
		s.h(180, 270).drag()
			
			.lf({c1: 'r', c2: 'y', x1: -100}).dr2(
			{w: 300, h: 100, x: 0, y: -100},
			{w: 100, h: 300})
		
		
	}
	BASELINE = function () {
		z()
		
		s =$St(1000).A()
		
		
		s.bm('me', function (bm) {
			b = bm
			bm.XY(300).sXY(.2)
		})
		
		
		s.A(t = $T('baseline: top').XY(300).sXY(4).drag())
		s.A(t2 = $T('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
		s.A(t3 = $T('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
		
		
	}
	LINEH = function () {
		z()
		
		s = $St(1000).A()
		
		
		s.bm('me', function (bm) {
			b = bm
			bm.XY(300).sXY(.2)
		})
		
		
		s.A(
			t = $T('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
		)
		
		
		s.A(
			t2 = $T('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
		)
		
		s.A(
			t3 = $T('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
		)
		
		
	}
	LINEW = function () {
		z()
		
		s = $St(1000).A()
		
		
		s.bm('me', function (bm) {
			b = bm
			bm.XY(300).sXY(.2)
		})
		
		
		s.A(t = $T('linewidth 0').XY(300).sXY(4).drag().lineW(0))
		s.A(t2 = $T('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
		s.A(t3 = $T('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))
		
		
	}
	ALIGN = function () {
		z()
		
		s = $St(1000).A()
		
		
		s.bm('me', function (bm) {
			b = bm
			bm.XY(300).sXY(.2)
		})
		
		s.bm('me', function (bm) {
			b = bm
			bm.XY(500).sXY(.2)
		})
		
		//textAlign
		s.A(t = $T('linealign left').XY(300).sXY(4).drag()) //default
		s.A(t2 = $T('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
		s.A(t3 = $T('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))
		
		//textBaseline
		s.A(t = $T('baseline: top').XY(500).sXY(4).drag())
		s.A(t2 = $T('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
		s.A(t3 = $T('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))
	}
	OVALS = SETTRANSFORM = function () {
		s = $St(800).bm('me', function (me) {
			b = me
			b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
			m = b.getMatrix()
			function tf(a, b, c, d, e, f, g, h, i) {
				return this.x = a || 0,
					this.y = b || 0,
					this.scaleX = null == c ? 1 : c,
					this.scaleY = null == d ? 1 : d,
					this.rotation = e || 0,
					this.skewX = f || 0,
					this.skewY = g || 0,
					this.regX = h || 0,
					this.regY = i || 0,
					this
			}
		})
		
		
		//////
		h = s.h(40, 10, 'b', 16).drag()
		h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
		
		h.c({
			C: 'b',
			lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}
		}).de(400, 100)
		
		h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400})
			.de(100, 200, 500, 300)
		
		
		h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
		
	}
	function err() {
		ROTREC = function () {
			St()
			
			ct = s.ct(600, 300)
			
			ct.rec({w: 400, h: 400, c: 'r', C: 'o', l: 10, a: -5})
			ct.rec({w: 100, h: 200, c: 'b', C: 'w', l: 20, a: 20, rg: 1})
			h = ct.rec({
				w: 100, h: 200, a: 20,
				c: 'b', C: 'w', l: 20, bm: 1
			}).X(100)
			_.in(8, function () {
				h.X(0)
			}) //notice how gradient is seen behind the bm!!!
			
		}
		BMH = function () {
			s = $St()
			
			
			v = [[-100, 0], [0, -100], [100, 50]]
			
			h = s.h(100, 300)
			
			h.drag()
			
			h.bmCir({
				cirs: [{r: 150},
					{x: 200, r: 150},
					[300, 100, 100], [400, 100, 100]]
			})
			
			
			h2 = s.h(700, 300)
			h2.drag()
			
			h2.bmV({
				
				v: [
					[[-100, 0], [0, -100], [100, 50]],
					[[-200, 0], [-100, -100], [0, 50]],
					[[0, 200], [0, -200], [400, -300], [400, 300]]]
			})
			
		}
		CIRCS = function () {
			St()
			// h.dc(100,100,50) -> no color
			
			
			h.c().dc(100, 100, 50) // black fill, l4 white stroke
			h.c('*').dc(100, 200, 50).dc(100, 250, 50)
			h.c('***').dc(200, 200, 50).dc(200, 250, 50)
			h.c({C: 'r'}).dc(300, 300, 50)
			h.circ({
				r: 50, x: 200, y: 200,
				C: ['y', 10],
				lf: {c1: 'u', c2: 'o', y1: 100, x2: 100},
				ls: {c1: 'u', c2: 'o'}
			})
			h.circ({
				r: 50, x: 500, y: 200,
				C: ['y', 2],
				rf: {c1: 'u', c2: 'o', x1: 10, y1: 10, r2: 30}, //, y1:100,x2:100},
				rs: {c1: 'y', c2: 'u', x1: -20, y1: -20, r1: 40, r2: 40}
			})
			h = s.h().drag().lf({}).dc()
				.c('b', 'g', 10).lf({y2: 400}).dc(300, 300, 50)
			cjs.me = function (fn) {
				Q(['me'], function (q) {
					fn(q.getResult('me'))
				})
			}
			cjs.me(function (i) {
				h.c({
					
					l: 200,
					rf: ['w', 'u', 800],
					rs: {c1: 'w', c2: 'x', r2: 800}
					
				}).dc({x: 0, y: 0, r: 200})
				
				s.h().c({
					l: 200,
					lf: {c1: 'w', c2: 'u', y2: 200},
					ls: {c1: 'u', c2: 'w', s1: 0, s2: 1, x1: 0, y1: 0, x2: 0, y2: 200}
				}).dc({x: 0, y: 0, r: 200}).drag()
				
				s.h().lf('y', 'r', 10).dc({r: 200}).c({
					l: 0,
					c: 'y',
					//lf: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200},
					bs: i, bf: i
				}).dc({r: 200}).drag()
				s.h(40, 10, 'b', 8).rf({c1: 'r', c2: 'd', r2: 100}).dc(0, 50, 40).drag()
			})
		}
		
		
	}
}


//duds
HANOI=function(){
	
	
	
	
	
	
	
	
	
}
EASELCONVEX = function () {
	s = $St()
	s.poly([[-100, -10], [0, 100], [100, 20]], 'red', 'white', 10).XY(200, 300)
	s.poly([[-20, -80], [-100, -200], [100, 5]]).XY(300, 200)
	s.poly([[-40, 40], [-40, -40], [40, -40], [40, 30]], 'blue', 'white').XY(200, 200)
}
CIRCTEST = function () {
	St()
	s.h().drag().cir({r: 100, c: 'b', C: 'X', l: 20, lf: 1}, //why cant set lf to {}?
		[{x: 250, y: 300}, {x: 450, y: 300}, {x: 250, y: 500}])
	s.h().drag().cir({C: 'X', lf: {X1: 650, X2: 220, Y1: 950, Y2: 520}, r: 100},
		[{x: 750, y: 300}, {x: 950, y: 300}, {x: 750, y: 500}])
}
CIRCSTROKE=function(){St()
	gx= h.graphics
	h.c('b', 'r',10).XY(-100,-100)
	h.dc([200,200,50],[400,200,50],[600,200,50])
	/*  h.dc(300,300,50)
     gx.dc(400,400,50)
     h.dc(500,500,50)
     gx.dc(600,600,50)
     */
	
}
GRAPHTEST=function(){St();

 img = $.i('me',function(){
 
 s.ct().h()
 
 s.A( $Bm(img) )
 
 s.ss(32).dr(20,20,920,360); 
 
 _.each([
		
		function(){return $h(12,10)
			.lf('b','g',130).dr(130)},
		
		function(){return $h(40, 10,'b',16)
			.ls('r','w',70,140).de(70,140)},
		
		function(){return $h(80,80)
			.C('b',8).rf('w','y',40).dc(40)} ,
		
		function(){return $h(12,10,18)
			.bf(img, cjs.M(1) ).rs('b','g',30,130).dr(130)},
		
		
		
		
		
		
		function(){return $h(12,12,'g','r',8)
			.rr(130,30)}, //w(h) and r
		
		
		function lt(){return $h().C('o')
			.ss(16,'round','round')
			.mt([40,10],[90,90],[90,140])},
		
		function star(){return $h(80,85,'y','b',3)
			.pStr(0,0,80,5,.8,-95)},
		
		
		
		function hex(){return $h(80,40,'p')
			.pStr(40,6).pStr(0,75,40,6).pStr(45,45,20,6)}
	
	
	],
	
	function(cont,i){var W=155, H=155, P= 5, C=4 //pad, cols
		s.A(tile(cont()).XY(
			42+(W+P)*(i%C),
			42+(i/C|0)*(H+P)))})
			
			
			})[0]
	
    
	
	tile=createTile=function(x,y){var bg,til
		bg = $h().c('t').dr(0, 0, 155, 155).ef().op(.2)
		til = cjs.ct().A(bg)
		if(N(x)){  til.X(x) }
		if(N(y)){  til.Y(y)  }
		if(O(x)){ til.A(x) }
		
		return til}
	
	
}
MICK=function(){St()
	ct.mick=function(x,y,lf){var ct=this,
		
		h= ct.h(x,y).drag()
			.c({ l:20,  C:0,   lf: lf||1  })
			.dc([50],[200,0,100],[100,100,100])
		
		ct.h(x,y).drag().c({ l:20,  C:0,   ls: lf||1 }).dc([50],[200,0,100],[100,100,100])
		return h}
	
	
	s.mick(500,200)
	s.mick(700,100, { c1:'b', c2:'X' })
	s.mick(700,300, { c2:'b' })
	s.mick(100,100, { y2:10 })
	s.mick(100,200, { y2:200 })
	s.mick(100,300, { x2:100 })
	
	
}
ZX=function(){
	$.fn.md = function (l) {
		
		var c = this
		c.mousedown(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	
	$.fn.mu = function (l) {
		var c = this
		c.mouseup(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	
	$.fn.mm = function (l) {
		$l('mU')
		var c = this
		c.mousemove(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.$$ = $.fn.dblclick
	
	$.eD = $.editDiv = function (words) {//$.dE
		canMove = true
		changeLocation = true
		inputMove = true
		mouse = 'up'
		
		ta = $.ta().mar(4)
		sp = $.sp().C('z')
		fn = function () {
			sp.T(ta.v())
		}
		d = $.dA('+').C('n', 'y').pad(8)
		d.zIndex(0)
		
		xBt = $.bt('', function () {
			d.rm()
		}).WH(4).C('red')
		
		
		d.md(function () {
			inputMove = false;
			mouse = 'div'
		})
		d.mu(function () {
			mouse = 'up'
		})
		d.md(function () {
			$.editDiv.TOP++
			$(this).zIndex($.editDiv.TOP)
		})
		ta.md(function (e) {
			$.editDiv.TOP++
			$(this).parent().zIndex($.editDiv.TOP)
			location = {top: d.Y(), left: d.X()}
			inputMove = true
			mouse = 'input'
			e.stopPropagation()
		})
		
		ta.mm(function (e) {
			if (inputMove) {
				e.stopPropagation();
				d.XY(location.left, location.top)
			}
		})
		
		if (U(words)) {
			return d.A(xBt, $.br(), sp.hd(), ta,
			
					   $.d('y', 16, 12).tA('c').mar('0 auto').$(function () {
						   $(this).pa().free()
					   })
			).$$(function (e) {
					 e.stopPropagation()
					 sp.T(ip.v())
					 xBt.gg();
					 ip.gg();
					 sp.gg()
				 })
		}
		
		else {
			ip.v(words)
			sp.T(ta.v())
			
			
			return d.$$(function (e) {
				e.stopPropagation()
				sp.T(ta.v())
				xBt.gg();
				ip.gg();
				sp.gg()
			}).A(xBt, $.br(), sp, ip.hd())
			
		}
	};
	$.editDiv.TOP = 0
	z()
	a = $.editDiv().A().C('a')
	b = $.editDiv().A().C('b')
}
ENTERST =function(){St()
	st.bm('me')
	st.on('mouseenter', function(){$('body').pp('once<br>')}, null, true)
	st.on('mouseenter', function(){$('body').pp('many<br>')}, null, false)
}
GROW = function () {
	z()
	
	$St(500, 500).bm('me', function (bm) {
		b = bm
		bm.grow().dg()
	})
	
}
//err
HPOLY = function () {
	St()
	v = [[-100, 0], [0, -100], [100, 50]]
	s.h(600, 300).poly({v: v, bf: 'me'})
	s.h(900, 300).poly({v: v, lf: 1})
	s.h(800, 300).poly({v: v, rf: 1})
	h = s.h(200, 300).drag().bf('me', function () {
		h.dc([150], [200, 0, 150])
	})
}
 
bootApps()
 
 

function bootApps(){
	
	
	
	
	TABTX= function () {
		$.boot(
			$.navTabs(
				$.tab('Home', 'home').K('active'),
				$.tab('Profile', 'profile'),
				$.tab('Messages', 'messages'),
				$.tab('Settings', 'settings')
			).C('r'),
			
			
			$.tabContent(
				$.tabPane('home', '+').A(
					$.h1('home'),
					$.ipsum(6)
				),
				
				
				$.tabPane('profile').A(
					$.h1('profile'),
					$.ipsum(6)
				),
				
				$.tabPane('messages').A(
					$.h1('messages'),
					$.ipsum(6)
				),
				
				$.tabPane('settings').A(
					$.h1('settings'),
					$.ipsum(6)
				)
			).C('b')
		)
		
		
	}
	TAB1 = function () { // 'active-s' are mismatched on purpose :)
		
		
		$.boot(
			$.navTabs(
				$.tab('Home1', 'home1'),
				$.tab('Home', 'home').K('active'),
				$.tab('Profile', 'profile'),
				$.tab('Messages', 'messages')),
			$.tabContent(
				$.tabPane("home1", '+').C('b').A('home1'),
				$.tabPane('home').C('r').A('home'),
				$.tabPane("profile").C('y').A('profile'),
				$.tabPane("messages").C("g").A('messages'))
		)
		
		$('.nav-tabs a').click(function (e) {
			//    e.preventDefault();  $(this).tab('show')
		})
		
		
	}
	
	TAB2 = function () {
		
		z()
		
		var ul = $.ul().K('nav nav-tabs').A(
			$.liA('aaaa'),
			$.liA('bbbb').K('active'),
			$.liA('cccc'),
			$.liA('dddd')
		).C('b')
		
		
		var display = $.div('y', 300, 400).mar(20)
		
		var div = $.div('r').pad(30).A(ul, display).A().drag()
		
	}
	TAB3 = function () {
		z()
		
		$.navTabs().A(
			$.tab('Home'),
			$.tab('Profile').K('active'),
			$.tab('Messages')).A()
		
		$(function () {
			
			$('a').click(function () {
				$(this).tab('show')
			})
			
		})
		
		
	}
	TABAJAX = function () {
		
		$.boot(
			$.navTabs(
				$.tab('hello', function () {
					alert('hello')
				}),
				$.tab('goodbye', function () {
					$('#stuff').load('/')
				})
			),
			
			$.d().id('stuff')
		)
	}
	TABAJAX1 = function () {
		
		$.boot(
			$.navTabs(
				$.tab('hello', function () {
					alert('hello')
				}),
				$.tab('goodbye', function () {
					$('#stuff').load('/')
				})
			),
			
			$.d().id('stuff')
		)
	}
	TAB4 = function () {
		z()
		var tabBar = $.ul().K("nav nav-tabs")
		
		tabBar.A(
			$.tab('first', function () {
				alert('1')
			}),
			$.tab('second', function () {
				alert('2')
			}),
			$.tab('third', function () {
				alert('3')
			})
		).A()
	}//navtabs=function(){return $.ul().K('nav nav-tabs')} //unnecessary
	TAB5 = function () {
		
		z()
		
		var tabBar = $.tabs(
			['first', function () {
				$l('1')
				
				panel.E($.img('me'))
				
			}],
			
			['second', function () {
				$l('2')
			}],
			['third', function () {
				$l('3')
			}]
		).A()
		
	}
	
	
	
	TXTABACTION = function () {
		
		testTabs()
		
		$(function () {
			$('a[data-toggle="tab"]')
				.on('show.bs.tab', function (e) {
						ee = e
						$l('tabbed!')
						e.target // newly activated tab
						e.relatedTarget // previous active tab
					
					})
			
			
		})
		
	}
	
	
	TXTABACTION2 = function () {
		// for each tab, use 'on(show)', to automatically fetch/load?
	}
	
	
	
	TXPILLS= function(){
		
		$(function(){
			
			
			$.boot().A(
				
				$.well($.h1('welcome to pills')),
				
				n = $.navPills().A(
					$.pill('home'),
					$.pill('profile'),
					$.pill('messages', function(){$('body').C('r')})
				),
				
				
				
				$.dK("pill-content").A(
					
					$.pillPane('home').A('hoooome'),
					$.pillPane('profile').A('prooofile'),
					$.pillPane('messages').A('messsaaaages')
				)
			
			
			
			)
			
			
			
			
			//   $('a').each(function(){ $(this).attr('data-toggle', 'pill') })
			
		})
		
		
	}
	PILLS=function(){z()
		pills= $.ul().K("nav nav-pills").A(
			$.li().K('active').A(    $.a('home').toggle('tab')     ),
			$.li().A(  $.a('profile').K('profile')  ),
			$.li().A( $.a('messages') ) )
		
		div=$.d('b', '+').WH('auto').pad(40)
		ch=   $.d('y',300).pad(40).mar(40)
		
		div.A( pills , ch)
		
		
		$('a').$(function (e) {
			e.preventDefault()
			$(this).tab('show')
		})
		
		
		// $('a:first').tab('show')
		$('a.profile').on('shown.bs.tab', function(e){
			ch.E()
			ch.A($.d().T('asfdasfdfasd'))
		})
		$('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
			e.target // activated tab
			e.relatedTarget // previous tab
		})
	}
	
	TN =function(){z()
		wrap = $.wrap
		
		$.boot(
			wrap('me'),
			wrap('guy' ),
			wrap('chicks'),
			wrap( 'me' ),
			wrap( 'guy') ,
			wrap( 'chicks' ),
			wrap( 'me' ),
			wrap( 'guy' ),  wrap( 'chicks' ),
			wrap( 'me' ),   wrap( 'guy' ), wrap( 'chicks' ),
			wrap( 'me' ),   wrap( 'guy' ), wrap( 'chicks' )
		)
	}
	EXTHUMB =function(){z()
		
		var wrap = function(img){
			
			return $.dK(  "col-xs-4 col-sm-3 col-md-2 col-lg-1"  ).A(
				
				$.a('').K('thumbnail').A( img  )
			
			)}
		
		$.container().A(
			
			$.row(
				
				$.thumbnail().K("col-sm-6 col-md-2").A(
					$.img('me'),
					$.caption('Thumbnail label')
				),
				
				
				$.thumbnail().K("col-sm-6 col-md-2").A(
					$.img('guy'),
					$.caption('Thumbnail label')
				),
				
				
				$.thumbnail().K("col-sm-6 col-md-2").A(
					$.img('me'),
					$.caption('Thumbnail label')
				
				)
			
			
			)
		
		).A()
		
		
	}
	THUMNAILS = function(){z()
		
		// <div class="row">
		// <div class="col-xs-6 col-md-3">
		// <a id="" href="#" class="thumbnail">
		// <img src="/me.png">
		// </a>
		// </div>
		// </div>
		
		
		return $.container().A(
			$.row(
				
				$.dK("col-xs-6 col-md-3").A(
					
					$.a('').K("thumbnail").A(  $.img('me')  )
				
				
				) )
		
		).A()
		
		
		
	}
	TNCUSTCONTENT = function(){z()
		cont = $.container().C('r')
		
		
		thumbnail = $.thumbnail().C('g').A(
			$.p('first thing in green thumbnail'),
			$.img('me'),
			
			$.dK("caption").A(
				$.h3('Thumbnail label'),
				$.p('...'),
				$.p().A(
					$.bt('Button').K("btn btn-primary"),
					$.bt('Button').K("btn btn-default")))
		)
		
		
		
		cont.A(  $.row(
			$.dK("col-sm-6 col-md-4").A(
				
				$.p('before thumbnail'),
				thumbnail
			)
		
		
		
		))
		
		
		return cont.A()}
	JUMB = function(){  $.boot(
		
		$.jumbo(
			'My first Bootstrap website!',
			$.p('This page will grow as we add more and more components from Bootstrap...')),
		
		$.paragraphs(
			'This is another paragraph',
			'This is a paragraph',
			'This is another paragraph')
	)}
	VOLUME=function(){
		r = $.R().W(600);
		outerDiv = $.d('y', 400, 200).A().dg().A(r);
		r.dg().A(
			$.d().id('booksDiv').K('col-md-6'),
			$.d().id('displayDiv').K('col-dm-6').A($.i('guy')));
		Book = function (title) {
			var b;
			b = $.d('b', 60, 60).K('book');
			b.A($.h4(title || 'book'));
			b.display = $.i('me').K('display').hd();
			return b
		};
		addBook = function (title) {
			var b;
			b = Book(title);
			$('#booksDiv').A(b);
			$('#displayDiv').A(b.display);
			$('.book').$(function () {
				$(this).id()
			});
			return b
		};
		a = addBook('a');
		b = addBook('b')
	}
	IMGRESPONSE=function(){$.boot(
		
		$.sm(3).A(
			
			$.well(
				
				$.imgResponsive('chicks')
			
			)
		)
	
	)
		
	}
	IMGRESPONSE1=function(){
		
		$.boot(
			
			$.md(2).A(
				
				$.imgResponsive('me')  ,
				$.imgResponsive('chicks')  ,
				$.imgResponsive('me')
			
			)
		
		
		).C('r')
		
		
		
	}
	EXIMGS=function(){$.boot(
		
		
		$.imgCircle('chicks').C('y'),
		$.imgRounded('guy').C('y'),
		$.imgThumbnail('sun').C('y')
	
	
	)}
	function mixMedia(){
		exampleMixedMobileAndDesktop= function(){z()
			//The Bootstrap grid system has four classes: xs (phones), sm (tablets),
			// md (desktops), and lg (larger desktops).
			// These classes can be combinated to create more dynamic and flexible layouts.
			//  Tip: Each class scales up, so if you wish to set the same widths
			// for xs and sm, you only need to specify xs.
			
			
			cont = $.container().A()
			
			cont.A(
				$.row(
					$.div('r').K("col-xs-12 col-md-8").A('col-xs-12 .col-md-8'),
					$.div('b').K("col-xs-6 col-md-4").A('col-xs-6 col-md-4')
				),
				
				
				$.row(
					
					$.div('a').K("col-xs-6 col-md-4").A('.col-xs-6 .col-md-4'),
					$.div('b').K("col-xs-6 col-md-4").A('.col-xs-6 .col-md-4'),
					$.div('c').K("col-xs-6 col-md-4").A('.col-xs-6 .col-md-4')
				
				
				
				),
				
				
				
				$.row(
					$.div('g').K("col-xs-6").A('.col-xs-6'),
					
					$.div('o').K("col-xs-6").A('.col-xs-6')
				
				
				)
			
			
			
			)
		}
		exampleMixedMobileTabletAndDesktop= function(){z()
			// Note	Tip: Remember that grid columns should add up to twelve for a row. More than that, columns will stack no matter the viewport.
			
			cont = $.container().A()
			cont.A(
				$.row(
					$.div('r').K("col-xs-12 col-sm-6 col-lg-8").A($.span( '.col-xs-12 .col-sm-6 .col-lg-8' )),
					$.div('b').K("col-xs-6 col-lg-4").A($.span('.col-xs-6 .col-lg-4'  ))
				),
				$.row(
					$.div('n').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4') ),
					$.div('g').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4') ),
					$.div('o').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4') )
				
				)
			
			
			)}
		/*
         The following table summarizes how the Bootstrap grid system works across multiple devices:
         Extra small devices
         Phones (<768px)	Small devices
         Tablets (>=768px)	Medium devices
         Desktops (>=992px)	Large devices
         Desktops (>=1200px)
         Grid behaviour	Horizontal at all times	Collapsed to start, horizontal above breakpoints	Collapsed to start, horizontal above breakpoints	Collapsed to start, horizontal above breakpoints
         Container width	None (auto)	750px	970px	1170px
         Class prefix	.col-xs-	.col-sm-	.col-md-	.col-lg-
         Number of columns	12	12	12	12
         Column width	Auto	~62px	~81px	~97px
         Gutter width	30px (15px on each side of a column)	30px (15px on each side of a column)	30px (15px on each side of a column)	30px (15px on each side of a column)
         Nestable	Yes	Yes	Yes	Yes
         Offsets	Yes	Yes	Yes	Yes
         Column ordering	Yes	Yes	Yes	Yes
         ~97px
         */
	}
	testRows = function () {
		z()
		
		$.row(
			$.colX(2, $.img('me')),
			
			$.colX(6, $.img('me')),
			
			$.colX(4, $.img('me'))
		).A()
		
	}
	testRows2 = function () {
		z()
		$.R().A(
			$.dK('col-xs-12 col-sm-6').A($.img('me')),
			$.dK('col-xs-6 col-lg-4').A($.img('me'))
		)
		
	}
	testRows3 = function () {
		z()
		$.R().A(
			$.dK('col-xs-6 col-sm-4').A($.img('me')),
			$.dK('col-xs-6 col-sm-4').A($.img('guy')).C('o'),
			$.dK('col-xs-6 col-sm-4').A($.img('sun'))
		).C('b')
	}
	testRows4 = function () {
		z()
		$.R().A(
			$.dK('col-xs-6 col-sm-4').A($.span('me')),
			$.dK('col-xs-6 col-sm-4').A($.span('guy')).C('o'),
			$.dK('col-xs-6 col-sm-4').A($.span('sun'))
		).C('b').A()
	}
	exampleStackedToHoriz = function () {
		z()
		
		
		cont = $.container().A(
			$.h1('Hello World!'),
			
			$.row(
				$.sm('red', 6).ipsumP(1, 2),
				
				$.sm('blue', 6).ipsumP(4)
			)
		).A()
		
		
	}
	exampleStackedToHorizFluid = function () {
		z()
		
		$.containerFluid().A(
			$.h1('Hello World!'),
			
			$.row(
				$.sm('red', 6).ipsumP(2, 1),
				$.sm('blue', 6).ipsumP(3)
			)
		).A()
		
		
	}
	example25Percent = function () {
		z()
		
		
		$.containerFluid().A(
			$.h1('Hello World!'),
			
			$.row(
				$.sm('r', 3).ipsumP(3),
				$.sm('b', 9).ipsumP(3)
			)
		).A()
		
	}
	exampleMedium = function () {
		z()
		
		//on xs, u get one column only
		//on small devices, u get two columns ( 25% / 75% )
		//but on medium, u get a 50/50 split
		
		
		$.containerFluid().A(
			$.h1('Hello World!'),
			
			$.row(
				$.div('r').sm(3).md(6).ipsumP(3),
				$.div('b').sm(9).md(6).ipsumP(4)
			)
		).A()
		
		
	}
	exampleLarge = function () {
		z()
		
		$.containerFluid().A(
			$.h1('Hello World!'),
			
			$.row(
				$.div('y').K("col-sm-3 col-md-6 col-lg-4").ipsumP(2, 2),
				$.div('y').K("col-sm-9 col-md-6 col-lg-8").ipsumP(1, 1, 1, 1)
			)
		).A()
		
	}
	exampleThreeEqualColumns = function () {
		z()
		//The following example shows how to get a three equal-width columns
		// starting at tablets and scaling to large desktops. On mobile phones, the columns will automatically stack:
		
		cont = $.container().A()
		cont.A(
			$.row(
				$.div('red').K("col-sm-4").A('.col-sm-4').ipsumP(1),
				
				$.div('blue').K("col-sm-4").A('.col-sm-4').ipsumP(2, 2),
				$.div('yellow').K("col-sm-4").A('.col-sm-4').ipsumP(3, 3, 3)
			)
		)
		
	}
	exampleThreeUnequalColumns = function () {
		z()
		// The following example shows how to get a three various-width columns
		// starting at tablets and scaling to large desktops:
		
		cont = $.container().A()
		
		cont.A(
			$.row(
				$.div('red').K("col-sm-3").A('.col-sm-3').ipsumP(1),
				
				$.div('blue').K("col-sm-6").A('.col-sm-6').ipsumP(2, 2),
				$.div('yellow').K("col-sm-3").A('.col-sm-3').ipsumP(3, 3, 3)
			)
		)
	}
	exampleTwoUnequalColumns = function () {
		z()
		cont = $.container().A()
		cont.A(
			// The following example shows how to get two various-width columns starting at tablets and scaling to large desktops:
			
			$.row(
				$.div('r').K('col-sm-4').A('.col-sm-4').ipsumP(10),
				$.div('y').K('col-sm-8').A('.col-sm-8').ipsumP(20)
			)
		)
	}
	exampleTwoColumnsWithTwoNestedColumns = function () {
		z()
		//The following example shows how to get two columns starting at tablets
		// and scaling to large desktops, with another two columns (equal widths) within the larger column (at mobile phones, these columns and their nested columns will stack):
		
		cont = $.container().A()
		
		cont.A(
			$.row(
				$.div('a').K("col-sm-8").A(
					$.span('.col-sm-8'),
					
					$.row(
						$.div('x').K("col-sm-6").A('.col-sm-6').ipsumP(5),
						$.div('z').K("col-sm-6").A('.col-sm-6').ipsumP(5)
					)
				),
				
				$.div('b').K("col-sm-4").A('.col-sm-4').ipsumP(5)
			)
		)
	}
	exampleClearFloats = function () {
		z()
		//(with the .clearfix class) at specific breakpoints to prevent strange wrapping with uneven content:
		
		cont = $.container().A()
		cont.A(
			$.row(
				$.div('g').K(' col-xs-6 col-sm-3').A(
					$.span('Column 1'),
					$.br(),
					$.span('Resize the browser window to see the effect.')
				),
				
				$.div('u').K("col-xs-6 col-sm-3").A($.span('Column 2')),
				//$.span('<!-- Add clearfix for only the required viewport -->'),
				$.div('o').K("clearfix visible-xs"),
				$.div('y').K("col-xs-6 col-sm-3").A($.span('Column 3')),
				$.div('b').K("col-xs-6 col-sm-3").A($.span('Column 4'))
			)
		)
	}
	exampleOffsettingColumns = function () {
		z()
		//Move columns to the right using .col-md-offset-* classes. These classes increase the left margin of a column by * columns:
		
		cont = $.container().A()
		cont.A(
			$.row(
				$.div('r').K('col-sm-5 col-md-6').A('col-sm-5 col-md-6').ipsumP(4),
				
				$.div('b').K('col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0').A(
					'col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0'
				).ipsumP(4)
			)
		)
	}
	examplePushAndPull = function () {
		z()
		//- Change Column Ordering
		//Change the order of the grid columns with .col-md-push-* and .col-md-pull-* classes:
		cont = $.container().A()
		
		cont.A(
			$.row(
				$.div('r').K("col-sm-4 col-sm-push-8").ipsumP(2, 2, 2),
				$.div('p').K("col-sm-8 col-sm-pull-4").ipsumP(22)
			)
		)
	}
}
COOLBALLS = function () {
	W(400, 400).C('w')._(function () {
		//cjs.rulers()
		_.t(8, function () {
			w.D(R(100, 50), R(100, 50), 'b', 50).$h('x', 'X', 1)
					.c('x', 'X', 1)
					.bf('sun', [0, .9, 1, 1, -40, 2])
					.cir(50)
		})
	})
}
PIT = BALLPIT = function () {
	$W();
	_.ev(.04, function () {
		w.s.xT(w.s.t(function () {
			if (R(5) < 3) {
				w.ball(20)
			}
		}))
	})
}
PEEP = PEEPHOLE = WIND = function () {
	W()._(function () {
		$.hdr().A($.h1('grahics winding')).A()
		bm = w.i.qB('chicks').X(470).drag()
		h = w.i.h()
		h.graphics.f("pink").dr(20, 20, 450, 360)
				.arc(160, 160, 110, 0, M.PI * 2, true).closePath()
				.arc(330, 240, 110, 0, M.PI * 2, true).closePath()
		bm.mask = h.same().X(470)
	})
}
FANCY = function (x, y) {
	z()
	$.iD = $.imgDiv = function (st) {
		d = $.d('y', '+')
		$.eGj('img', function (i) {
			d.A($.c(100, 100).fit(i.d)
					.$(function () {
						st.bm(i.d, function (bm) {
							bm.sXY(.4).dg()
						})
					}))
		})
	}
	canvas = $.c('g', 400)
	stage = new cjs.Stage(canvas[0]).t()
	frame = $.dragFrame(theSpan = $.sp())
	theSpan.A(
			$.button('X', function () {
				frame.remove()
			}),
			$.button('pics', function () {
				$.imgDiv(stage)
			}),
			$.button('transform'),
			$.button('text'),
			$.button('paint', function () {
				_paintColor = '#0FF'
				var size = 10, oX = 0, oY = 0, shape
				var paintStage = $.dragStage()
				// stage.a(  EaselText('finger paint', 'b', 40, 100, 10))
				paintStage.bm(
						stage.du(), //?
						function (m) {
							m.XY(40).sXY(.4)
							stagePainter(paintStage)
						})
			}),
			$.button('cut'),
			$.button('save'))
	theSpan.A($.br(), canvas)
	theSpan.A($.div().A(
			$.button('clear', function () {
				stage.removeAllChildren()
			}),
			$.button('flat', function () {
				stage.removeAllChildren()
				stage.bm(stage.toDataURL(), function (bm) {
					bm.drag()
				})
			}),
			$.button('clone', function () {
				var newSpan = $.sp()
				var newStage = $.dragStage(newSpan)
				newStage.bm(stage.du(), function (bm) {
					SL(bm)
				})
			}),
			$.button('recur', function () {
				stage.bm(stage.du(), function (bm) {
					bm.sXY(.4)
					SL(bm)
				})
			}),
			$.button('copy', function () {
				_copy = stage.du()
			}),
			$.button('paste', function () {
				stage.bm(_copy, function (bm) {
					bm.drag()
				})
			}),
			$.button('replace', function () {
				stage.rm()
				stage.bm(_copy, function (bm) {
					bm.drag()
				})
			})
	))
	theSpan.dblclick(function () {
		$('button').toggle()
	})
	theSpan.A()
}
RR = ROUNDREC = function () {
	s = $St()
	h = s.h()
	h.c('b', 'r', 5).dc(100, 100, 100)
	h.dr(300, 200, 100, 50)
	h.dr2(500, 200, 100, 50)
	h.rr2(500, 200, 100, 50, 50)
	h.de2(500, 200, 100, 50)
	s.dot(100, 100)
	s.dot(300, 200)
	s.dot(500, 200)
	s.dot(500, 200)
	s.dot(500, 200)
	s.u()
}
WOAH = SPINTIMTIM = function () {
	Q(['guy', 'me'], function () {//z()
		st = $St($.c('p', 1200, 600)[0]).A();
		st.c = $(st.canvas) //s.bm('me', function(bb){b=bb.drag() })
		st.qB('guy').XY(300, 300).spin()
		st.qB('guy').XY(300, 300).sXY(.5, .3).spin()
		T.t(function () {
			st.u()
		})
		_.in(3, function () {
			T.f(1)
		})
		_.in(9, function () {
			T.f(1000)
		})
	})
}
NEWSTG = function () {
	$W();
	b = w.S(600, 300, 'w', 200);
	_.in(function () {
		b.dyn().f().C('z')
	})
	//three ways to make a new stage
	s = $St('r', 100).A().bm('me')
	s.can.drag()
	c = $.c('b', 100).A().drag().XY(400)
	s1 = $St(c)
	s1.A().bm('me')
	c2 = $.c('b', 100).A().id('someId').drag().XY(300, 100)
	s2 = $St(['someId'])
	s2.t().bm('me')
	_.in(3, function () {
		w.S(300, 100, 'z', 1500, 1)
		w.d('r', 300, 100)
		w.i.T('top').XY(300, 100).bl('+')  // should become + (counterintuitive i know.. but i noticed and fixed it!)
		w.i.T('bottom').XY(500, 100).bl('-')
		w.i.T('middle').XY(700, 100)
		w.dot(300, 400)
	})
	_.in(5, function () {
		nice = w.i.T('nice', 135, 'x', 300, 400)
		/*
		 w.i.T('linewidth 0').XY(100,300).lW(0)
		 w.i.T('linewidth null').XY(100, 500).bl('bottom')
		 w.i.T('linewidth 100').XY(100, 700).drag().bl('middle').lW(800)
		 w.i.T('lineheight -100').XY(700,300).lH(-100)
		 w.i.T('lineheight 0').XY(700,500).lH(0)
		 w.i.T('lineheight 100').XY(700,700).lH(100)
		 w.i.T('linealign left').XY(600, 100)
		 w.i.T('linealign right').XY(600, 200).tA('right')//.bl('bottom')
		 w.i.T('linealign center').XY(600, 300).tA('center')//.bl('middle')
		 */
		hello = 'fasdafsafsdfadsafafdsfadsafdsafdsfsd'
		w.show('hello')
	})
}
DRAGST = GRADOVALS = function () {
	z()
	s = $.dragStage()
	h = s.h(40, 10, 'b', 16).drag()
	h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
	h.c({C: 'b', lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}}).de(400, 100)
	h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400}).de(100, 200, 500, 300)
	h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
}
ISO = function (levNum) {
	z()
	Tile = function () {
		var that = this
		var shape = this
		this.container = new createjs.Container().drag()
		this.tile = cjs.diamond(80, 40, 'blue')
		//this.tile.graphics.s('red').f('blue').s('green').mt(0,0).lt(40,-20).lt(80,0).lt(40,20).lt(0,0)
		this.container.A(this.tile)
		this.coin = false
		this.addCoin = function () {
			this.coin = tileCoin()
			this.container.A(this.coin)
		}
		this.addBad = function () {
			this.bad = tileBad()
			this.container.A(this.bad)
		}
		this.playerTo = function () {
			if (shape.wasOn == true) {
				location = location
			}//ISO()
			player.X(that.container.x)
			player.Y(that.container.y - 14)
			player.tile = shape
			player.col = shape.col
			player.row = shape.row
			if (shape.coin) {
				shape.coin.remove()
			}
			if (shape.bad) {
				location = location
			}
			shape.wasOn = true
			//if(isolated()){alert('!')}
		}
		this.container.on('dblclick', function () {
			h = that
			that.tile.graphics.f('red').dc(0, 0, 2)
			$l('dblclicked!')
			that.playerTo()
		})
	}
	isoRow = function (r, howMany, x, y) {
		x = x || 0;
		y = y || 0
		var row = []
		_.t(howMany, function (i) {
			x = x + 40
			y = y - 20
			var t = new Tile()
			t.container.XY(x, y)
			stage.A(t.container)
			cjs.bindSlide(t.container)
			t.col = i
			t.row = r
			row.push(t)
		})
		return row
	}
	isoGrid = function (n1, n2, x, y) {
		x = x || 0;
		y = y || 0
		var grid = []
		_.t(n2, function (i) {
			x = x + 40
			y = y + 20
			var row = isoRow(i, n1, x, y)
			grid.push(row)
		})
		return grid
	}
	tileCoin = function () {
		return $Cir(15, 'y', 'z')
	}
	tileBad = function () {
		return $Cir(15, 'g', 'o')
	}
	tilePlayer = function (bm) {
		player = bm
		player.right = function () {
			player.tile.container.remove()
			grid[player.row][player.col] = null
			grid[player.row][player.col + 1].playerTo()
		}
		player.left = function () {
			player.tile.container.remove()
			player.tile.exists = false
			//player.tile=null
			grid[player.row][player.col] = null
			grid[player.row][player.col - 1].playerTo()
		}
		player.down = function () {
			player.tile.container.remove()
			grid[player.row + 1][player.col].playerTo()
		}
		player.up = function () {
			player.tile.container.remove()
			grid[player.row - 1][player.col].playerTo()
		}
		player.to = function (x, y) {
			grid[x][y].playerTo()
			return player
		}
		kD('u', function () {
			player.up()
		})
		kD('d', function () {
			player.down()
		})
		kD('l', function () {
			player.left()
		})
		kD('r', function () {
			player.right()
		})
		return player
	}
	killTile = function (a, b) {
		grid[a][b].container.remove()
		grid[a][b].wasOn = true
	}
	lev1 = function () {
		grid[3][5].container.remove()
		grid[4][4].container.remove()
		grid[6][6].container.remove()
		grid[7][1].container.remove()
		grid[0][3].addCoin()
		grid[1][3].addCoin()
		grid[3][4].addCoin()
		grid[5][2].addCoin()
		grid[8][8].addCoin()
	}
	lev2 = function () {
		grid[0][0].addCoin()
		grid[0][9].addCoin()
		grid[0][3].addCoin()
		grid[1][3].addCoin()
		grid[1][6].addCoin()
		grid[2][1].addCoin()
		grid[3][4].addCoin()
		grid[3][8].addCoin()
		grid[4][7].addCoin()
		grid[5][2].addCoin()
		grid[6][5].addCoin()
		grid[6][9].addCoin()
		grid[8][8].addCoin()
		grid[8][2].addCoin()
		grid[8][4].addCoin()
		grid[9][0].addCoin()
		killTile(1, 2)
		killTile(2, 2)
		killTile(2, 6)
		killTile(2, 7)
		killTile(2, 8)
		killTile(4, 0)
		killTile(4, 3)
		killTile(4, 4)
		killTile(4, 6)
		killTile(4, 9)
		killTile(6, 1)
		killTile(6, 2)
		killTile(7, 1)
		killTile(7, 3)
		killTile(7, 4)
		killTile(7, 9)
		killTile(8, 6)
		killTile(8, 7)
		killTile(8, 9)
	}
	lev3 = function () {
		grid[0][0].addBad()
		grid[0][9].addBad()
		grid[0][3].addBad()
		grid[1][6].addBad()
		grid[2][1].addBad()
		grid[3][4].addBad()
		grid[3][8].addBad()
		grid[5][2].addBad()
		grid[6][5].addBad()
		grid[6][9].addBad()
		grid[8][8].addBad()
		grid[8][2].addBad()
	}
	lev4 = function () {
		grid[2][9].addCoin()
		grid[5][0].addCoin()
		grid[2][3].addCoin()
		grid[5][6].addCoin()
		grid[9][3].addCoin()
		grid[3][1].addCoin()
		grid[4][4].addCoin()
		grid[0][8].addCoin()
		grid[6][7].addCoin()
		grid[5][8].addCoin()
		grid[9][6].addCoin()
		grid[2][2].addBad()
		grid[0][0].addBad()
		grid[0][9].addBad()
		grid[5][3].addBad()
		grid[2][6].addBad()
		grid[4][5].addBad()
		grid[9][0].addBad()
		grid[9][7].addBad()
		grid[3][8].addBad()
		grid[6][5].addBad()
		grid[6][9].addBad()
		grid[8][2].addBad()
	}
	isolatedBeta = function () {
		r = player.row;
		c = player.col
		if (
				//grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
		//&&  grid[r-1] &&grid[r-1][c] && grid[r-1][c].wasOn
		grid[r + 1] && grid[r + 1][c] && grid[r + 1][c].wasOn
		) {
			return true
		}
	}
	stage = $St(900, 500).t().A()
	grid = isoGrid(10, 10, 0, 240)
	kD('s', function () {
		location = location
	})
	if (levNum) {
		window['lev' + levNum]()
	}
	else if (window['_pam']) {
		window['lev' + _pam]()
	}
	else {
		lev1()
	}
	stage.bm('me', function (me) {
		player = tilePlayer(me).sXY(.2).drag().to(5, 5)
	})
}
MES = function () {
	W([], {w: 0})// what took me so long to make this?
	w.C('y')
	w.me(600, 300, 14).stat()
	w.l('z', 600, 0, 600, 600)
	_.ev(1, function () {
		w.me(R(1000, 100), R(-100))
	})
}
CLICKME = BMBALLS = function () {
	W(400, 400).C('w')._(function () {
		//cjs.rulers()
		w.p(0, 0, 10).stat()
		_.t(8, function () {
			w.D(R(100, 50), R(100, 50), 'b', 30)
		})
		w.$(function () {
			_.t(8, function () {
				var b = w.D(R(100, 50), R(100, 50), 'b', 30)
				b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
			})
		})
		w.i.T(200, 100, 'CLICK me')
	})
}
HULA = HULAHOOPS = HAIR = HAIRBALLS = function () {
	W(400, 400)._(function () {
		
		//cjs.rulers()
		_.t(8, function () {
			var b = w.D(R(100, 50), R(100, 50), 'b', 10)
			b.$h('x', 'x', 1189).c('x', 'x', 200)
					.bf('sun', [0, .6, 10, 10, -40, 200])
					.cir(10)
			// <- b.C({c:'x', al:.4} )
		})
		$.d('b', 100, 100, 100, 100).drag()
	})
}
STATUSBALL = ILLUSION = GRADTWEEN = function () {
	W({grav: 0})
	b = w.S(500, 300, 'r', 60)
			.bS(w.s.h(500, 300))
	num = 0
	dif = .1
	shape = b.sp()//b.sprite
	shape.rf(['r', 'y'], [0, num],
			0, 0, 0, 0, 0, 60)
			.dc(0, 0, 60)
	_.ev(.1, function () {
		num += dif
		if (num >= 1) {
			num = .9;
			dif = -.1
		}
		if (num <= 0) {
			dif = .1
		}
		shape.rf(['r', 'y'], [0, num],
				0, 0, 0, 0, 0, 60)
				.dc(0, 0, 60)
	})
}
BADBALL = function () {
	W({g: 0})
	w.badGuy(500, 300)
	b = w.D(500, 300, 'r', 60)
	b.bS(
			w.s.h(500, 300)
	)
	b.draw = function (frame) {
		var b = this
		b.sp().rf(
				['r', 'y'], [frame[0], frame[1]],
				0, 0, 0, 0, 0, 60).dc(60)
	}
	frames = [[0, .1], [0, .3], [0, .6], [0, .9], [0, 1], [.3, 1], [.6, 1], [.9, 1], [1, 1]]
	curr = 0
	_.ev(1, function () {
		b.draw(frames [curr])
		curr++
		if (curr == 9) {
			curr = 0
		}
	})
} 