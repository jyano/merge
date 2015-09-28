function moreTran(){
	cjs.bindReverseSlide=LS=function(b,b2){
		var g=G(arguments),
			b=g[0],
			b2=g[1],
			d=oE('d'),
			pm=oE('pm'),
			b2=b2||b
		return b.on(d,function(e){
			var bx=b2.x+e.rawX,by=b2.y+e.rawY
			b.on(pm,function(e){
				if(g.P){
					b2.x=bx-e.rawX
				}
				if(g.N){
					b2.y=by-e.rawY
				}
			})
		})
	}
	cjs.bindRotate=RT=function(b,b2){
		
		
		//b = what the control is
		//b2 what it should control (default = itself!)
		//if(g.p){  //b.rgc( '+' )   }
		var g=G(arguments),b=g[0],b2=g[1]||b
		return b.on('mousedown',
			function(e){
				var X=e.rawX,Y=e.rawY,r=b2.rotation
				b.on('pressmove',function(e){
					b2.rotation=r-(   (e.rawY-Y)/500   )-(   e.rawX-X  )
				})
			})
	}
	cjs.bindRotate2=RTT=function(b,b2){
		
		
		//b = what the control is
		//b2 what it should control (default = itself!)
		var g=G(arguments),b=g[0],b2=g[1]||b
		if(g.p){  // b.rgc( '+' )
		}
		return b.on('mousedown',
			function(e){
				var X=e.rawX,Y=e.rawY,r=b2.rotation
				b.on('pressmove',function(e){
					b2.rotation=r+(   (e.rawY-Y)/500   )+(   e.rawX-X  )
				})
			})
	}
	cjs.bindRotate=RT=function(b,b2){
		
		
		//b = what the control is
		//b2 what it should control (default = itself!)
		//if(g.p){  //b.rgc( '+' )   }
		var g=G(arguments),b=g[0],b2=g[1]||b
		return b.on('mousedown',
			function(e){
				var X=e.rawX,Y=e.rawY,r=b2.rotation
				b.on('pressmove',function(e){
					b2.rotation=r-(   (e.rawY-Y)/500   )-(   e.rawX-X  )
				})
			})
	}
	cjs.bindRotate2=RTT=function(b,b2){
		
		
		//b = what the control is
		//b2 what it should control (default = itself!)
		var g=G(arguments),b=g[0],b2=g[1]||b
		if(g.p){  // b.rgc( '+' )
		}
		return b.on('mousedown',
			function(e){
				var X=e.rawX,Y=e.rawY,r=b2.rotation
				b.on('pressmove',function(e){
					b2.rotation=r+(   (e.rawY-Y)/500   )+(   e.rawX-X  )
				})
			})
	}
	cjs.bindSkew=SK=function(b){
		var g=G(arguments),b=g[0],b2=g[1],d=oE('d'),pm=oE('pm'),b2=b2||b
		return b.on(d,
			function(e){
				var X=e.rawX,Y=e.rawY
				b.on(pm,function(e){
					b2.kXY(
						(e.rawY-Y)*.5,(e.rawX-X)*.5
					)
				})
			})
	}
	cjs.reggy=reggy=function(o,s){
		s=s||o.parent
		s.bm('me',function(b){
			b.W(40).H(40)
			I(function(){
				b.XY(o.x+o.regX,o.y+o.regY)
			},100)
		})
	}
	cjs.bindSlideAndRotate=KK=function(b,b2){
		var g=G(arguments),b=g[0],
			b2=g[1]||b
		cjs.bindSlide(b);
		cjs.bindRotate(b,b2)
		if(g.p){
			b.rgc('+')
		}
		if(g.N){
			//    reggy(b,b2)
		}
	}
	cjs.bindRotateThenSkew=RK=function(b,b2,m){
		var g=G(arguments),b=g[0],b2=g[1],
			d=oE('d'),
			pm=oE('pm'),
			b2=b2||b,
			m=g[2]||'RT'
		//if(g.p){var s=St('y',1000)
		//    _t(b||5,function(i){s.a().bm(
		//        function(bm){bm.xy(i*50);TR(bm)})});return s}
		if(m=='RT'){
			RT(b,b2);
			m='SK'
		}
		else if(m=='SK'){
			SK(b,b2);
			m='RT'
		}
		return b.on(oE('pu'),
			function(e){
				Do(b).O();
				RK(b,b2,m)
			})
	}
	cjs.bindScale=SC=function(b,b2){
		var g=G(arguments),b=g[0],b2=g[1],
			d=oO('e','d'),
			pm=oO('e','pm'),b2=b2||b,
			cp=function(n){
				return n<.2?.2:n>2?2:n
			}
		return b.on(d,
			function(e){
				var X=e.rawX,Y=e.rawY,
					sx=b2.scaleX,
					sy=b2.scaleY
				b.on(pm,
					function(e){
						if(g.n){
							b2.sXY(cp(sx+(
								(e.rawX-X)/200)),
								cp(sy-((e.rawX-X)/200))
							)
						}
						else if(g.p){
							cXY(b2,sx+((e.rawX-X)/50),sy-((e.rawY-Y)/50))
							cXY(b2,sy-((e.rawY-Y)/50)), sx+((e.rawX-X)/50)
						}
						else{
							b2.sXY(sx-((e.rawX-X)/50),sy-((e.rawY-Y)/50))
						}
					})
			}
		)
	}
	cjs.bindTransform=TR=function TR(b,b2,m){
		var g=G(arguments),
			b=g[0],
			b2=g[1],
			b2=b2||b,m=g[2]||'SL'
		if(m=='SL'){
			cjs.bindSlide(b,b2);
			m='SC'
		}
		else if(m=='SC'){
			cjs.bindScale(b,b2);
			m='RT'
		}
		else if(m=='RT'){
			cjs.bindRotate(b,b2);
			m='SL'
		}
		return b.on('pressup',function(e){
			b.removeAllEventListeners();
			TR(b,b2,m)
		})
	}
	cjs.LS=cjs.bindReverseSlide=function(b,b2){
		var g=G(arguments),
			b=g[0],
			b2=g[1],
			d=oE('d'),
			pm=oE('pm'),
			b2=b2||b
		return b.on(d,function(e){
			var bx=b2.x+e.rawX,by=b2.y+e.rawY
			b.on(pm,function(e){
				if(g.P){
					b2.x=bx-e.rawX
				}
				if(g.N){
					b2.y=by-e.rawY
				}
			})
		})
	}
	cjs.SK=cjs.bindSkew=function(b){
		var g=G(arguments),b=g[0],b2=g[1],d=oE('d'),pm=oE('pm'),b2=b2||b
		return b.on(d,
			function(e){
				var X=e.rawX,Y=e.rawY
				b.on(pm,function(e){
					b2.kXY(
						(e.rawY-Y)*.5,(e.rawX-X)*.5
					)
				})
			})
	}
	cjs.KK=cjs.bindSlideAndRotate=function(b,b2){
		var g=G(arguments),b=g[0],b2=g[1]||b
		cjs.SL(b);
		cjs.RT(b,b2)
		if(g.p){
			b.rgc('+')
		}
		if(g.N){
			//    reggy(b,b2)
		}
	}
	cjs.RK=cjs.bindRotateThenSkew=function(b,b2,m){
		var g=G(arguments),b=g[0],b2=g[1],
			d=oE('d'),
			pm=oE('pm'),
			b2=b2||b,
			m=g[2]||'RT'
		//if(g.p){var s=St('y',1000)
		//    _t(b||5,function(i){s.a().bm(
		//        function(bm){bm.xy(i*50);TR(bm)})});return s}
		if(m=='RT'){
			RT(b,b2);
			m='SK'
		}
		else if(m=='SK'){
			SK(b,b2);
			m='RT'
		}
		return b.on(oE('pu'),function(e){
			Do(b).O();
			RK(b,b2,m)
		})
	}
	cjs.rtSh=cjs.rotateShake=function(bm){
		$Tw([bm,'l'],{r:0},[{r:1},1],[{r:-1},1])
	}
	cjs.scSh=cjs.scaleShake=function(bm){
		$Tw([bm,'l'],{sxy:1},[{sxy:.95},1],[{sxy:1.05},1])
	}
	old=function(){
		cjs.reggy=function(o,s){
			s=s||o.parent
			s.bm('me',function(b){
				b.W(40).H(40)
				I(function(){
					b.XY(o.x+o.regX,o.y+o.regY)
				},100)
			})
		}
		cjs.rY=function(a,b){
			alert('cjs.rY')
			if(U(b)){
				return a.regY
			}
			a.regY=b
			return a
		}
		cjs.rX=function(a,b){
			alert('cjs.rX')
			if(U(b)){
				return a.regX
			}
			a.regX=b
			return a
		}
		cjs.rxy=cjs.rXY=cjs.regXY=gXY=function(a,x,y){
			y=N(y)?y:x
			cjs.rX(a,x)
			cjs.rY(a,y)
			return a
		}
		//cX=cY=cXY=sxy=kX=kY=kXY=gY=gX=gX=function(){alert('createCoreTran')}
		cjs.scaleX=cX=function(a,b){
			if(U(b)){
				return a.scaleX
			}
			a.scaleX=b
			return a
		}
		cjs.scaleY=cY=function(a,b){
			if(U(b)){
				return a.scaleY
			}
			a.scaleY=b
			return a
		}
		cjs.scaleXY=cXY=function(a,x,y){
			y=N(y)?y:x
			cX(a,x)
			cY(a,y)
			return a
		}
		cjs.scaleXY=sxy=function xy(o,x,y){
			o.scaleX=x;
			o.scaleY=y||x;
			return o
		}
		cjs.skewX=kX=function(a,b){
			if(U(b)){
				return a.skewX
			}
			a.skewX=b
			return a
		}
		cjs.skewY=kY=function(a,b){
			if(U(b)){
				return a.skewY
			}
			a.skewY=b
			return a
		}
		cjs.skewXY=kXY=function(a,x,y){
			y=N(y)?y:x
			kX(a,x)
			kY(a,y)
			return a
		}
		//alert
		testImgRegCenter=function(){
			alert('testImgRegCenter')
			mockStage()
			s.bm('me',function(bm){
				b1=bm
				bm.spin().drag()
			})
			s.bm('me',function(bm){
				b2=bm
				bm.sXY(0.5,0.3).spin().drag()
			})
			s.A(c=cjs.circle(4).XY(200))
		}
		i.rZero=function(a){
			alert('i.rZero')
			var i=this,g=G(arguments),x=i.W()/2,y=i.H()/2
			if(g.p){
				i.rX(0,'+').rY(0,'+')
			}//i.X(a, i.regX()-a, '+')
			else{
				i.rXY(0,0)
			}
			return i
		}//
		i.rgc=function(){
			alert('i.rgc')
			var i=this,g=G(arguments),x=i.W()/2,y=i.H()/2
			return (g[0]===0)?
				i.rXY(0,0,(g.p?'+':null))
				:i.rXY(x,y,(g.p?'+':null))
		}
	}
}
function shape(){
	USINGLAYERSINEASEL=function(){
		z()
		s=SuperStage(500).A()
		s.bm('me',function(bm){
			b=bm
			bm.sxy(3)
			drawCar()
			s.tick(function(){
				b.x(-1*(g.x()*2))
				b.y(-1*(g.y()*2))
			})
		})
		bt=$.button('safd',function(){
			s.sxy(2)
		}).A()
		function drawCar(){
			s.bm('guy',function(bm){
				g=bm
				bm.sxy(.5)
				SL(bm)
			})
		}
	}
	Shape=EaselShape=Hx=function(graphic,funcOrStage){
		if(O(graphic)){
			return SuperDisplayObject(new createjs.Shape(graphic))
		}
		var shape=SuperDisplayObject(new createjs.Shape())
		shape.g=shape.ob.graphics
		if(S(graphic)){
			shape.g.f(graphic)
		}
		if(F(funcOrStage)){
			funcOrStage(shape.g,shape)
		}
		if(iSt(funcOrStage)){
			funcOrStage.a(shape)
		}
		shape.fillColor=shape.f=shape.fC=function(color){
			shape.g.f(oC(color))
			return shape
		}
		shape.strokeColor=shape.s=shape.sC=function(a){
			shape.g.s(oC(a))
			return shape
		}
		shape.clear=shape.clr=function(){
			shape.g.clear()
			return shape
		}
		shape.circle=shape.c=shape.cir=function(x,y,r,c,d){
			if(!N(r)){
				return shape.circle(0,0,x,y,r)
			}
			if(c){
				shape.fillColor(c)
			}
			if(d){
				shape.strokeColor(d)
			}
			shape.g.dc(x,y,r)
			return shape
		}
		shape.rectangle=shape.r=shape.rec=function l(x,y,wd,ht,fc,sc){
			if(!N(wd)){
				return l(0,0,x,y,wd,ht)
			}
			x=x||0;
			y=y||0
			wd=wd||100
			ht=ht||wd
			fc=oC(fc||'x')
			sc=oC(sc||'y')
			if(fc){
				shape.f(fc)
			}
			if(sc){
				shape.s(sc)
			}
			shape.g.r(x,y,wd,ht)
			return shape
		}
		shape.RECT=function(centerX,centerY,width,height,fc,sc){
			return shape.rectangle(centerX-(.5*width),centerY-(.5*height),width,height,fc,sc)
		}
		shape.ss=function(a,b,c,d){
			shape.g.ss(a,b,c,d);
			return shape
		}
		return shape
	}
	SHAPES=function(){
		z()
		s=stage=SuperStage(500,500).a()
		//s.bm('me', function(bm){ bm.sxy(.2)   })
		s.Shape().circle(100,100,100,'b','g').fn(SL)
		s.Circle(100,100,10,'r','y').fn(SL)
		s.Circle(10,100,100,'z','x').fn(SL)
		s.Circle(100,10,100,'a','c').fn(SL)
		s.Shape().circle(150,150,120,'c','d').fn(SL).circle(30,'x','x')
	}
	RADIALGRAD1=function(){
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage=new createjs.Stage("canvas",420,500,30)
		shape=new createjs.Shape()
		shape.x=20
		shape.y=20
		stage.addChild(shape)
		shape.graphics.beginRadialGradientFill(
			["#F00","#00F"],[0,1],100,100,0,100,100,50
		)
		shape.graphics.drawRect(0,0,100,100)
		shape.graphics.endFill()
		stage.update()
	}
	RADIALGRAD=function(){
		z()
		stage=SuperStage(500,500).A()
		shape=stage.Shape().xy(40)
		shape.g
			// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
			.rf([oC('r'),oC('b'),oC('o')],[.1,.4,.9],50,50,0,50,50,50)
			.drawRect(0,0,100,100)
			.drawCircle(180,180,100,100)
	}
	RADIALGRADFILL=function(){
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage=new createjs.Stage("canvas",420,500,30)
		// 2 colors
		shape=new createjs.Shape()
		shape.x=20
		shape.y=20
		shape.graphics.beginRadialGradientFill(
			[oC('b'),oC('r')],
			[.1,1],50,50,0,50,50,50
		)
		shape.graphics.drawRect(0,0,100,100)
		shape.graphics.endFill()
		stage.addChild(shape)
		// 3 colors
		shape=new createjs.Shape();
		shape.x=20;
		shape.y=140;
		shape.graphics.beginRadialGradientFill([oC('b'),oC('r'),oC('y')],[.1,.5,1],50,50,0,50,50,50);
		shape.graphics.drawRect(0,0,100,100);
		stage.addChild(shape);
		// alpha
		shape=new createjs.Shape();
		shape.x=20;
		shape.y=260;
		shape.graphics.beginRadialGradientFill([oC('b'),oC('r')],[1,0],50,50,0,50,50,50);
		shape.graphics.drawRect(0,0,100,100);
		shape.graphics.endFill();
		stage.addChild(shape);
	}
	RADIALGRADFILL2=function(){
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage=new createjs.Stage("canvas",420,500,30)
		stage.addChild(
			h=new createjs.Shape()
		)
		h.graphics.beginRadialGradientFill(
			["#F00","#00F"],[0,1],100,100,0,100,100,50
		).drawCircle(100,100,50)
		stage.update()
	}
	EASELART=function(){
		z()
		stage=SuperStage(500,600).A()
		shape=stage.Shape()
		shape.rectangle(100,200,0,200,'a')
		shape.rectangle(100,100,100,20,'g')
		shape.rectangle(145,120,10,80,'o')
		shape.circle(105,100,20,'b')
		shape.circle(105,100,8,'x')
		shape.circle(200,100,20,'b')
		shape.circle(200,100,8,'x')
		//shape.circle(100,20,100,'g')
		SL(shape)
		shape.rx(100).ry(300).x(100).y(300)
		p=function(){
			EaselTween([shape,{l:1}],
				[{r:25},200],[{r:-25},400],[{r:0},200],
				[{r:25},200],[{r:-25},400],[{r:0},200],
				[{r:25},200],[{r:-25},400],[{r:0},200],
				[{r:25},200],[{r:-25},400],[{r:0},200],
				[{r:25},200],[{r:-25},400],[{r:0},200],
				[{r:25},200],[{r:-25},400],[{r:0},200]
			)
			EaselTween([shape,{l:1}],
				[{sxy:1.5},200],[{sxy:.5},400],[{sxy:1},200],
				[{sxy:1.5},200],[{sxy:.5},400],[{sxy:1},200],
				[{sxy:1.5},200],[{sxy:.5},400],[{sxy:1},200],
				[{sxy:1.5},200],[{sxy:.5},400],[{sxy:1},200],
				[{sxy:1.5},200],[{sxy:.5},400],[{sxy:1},200],
				[{sxy:1.5},200],[{sxy:.5},400],[{sxy:1},200],
				[{sxy:1.5},200],[{sxy:.5},400],[{sxy:1},200],
				[{sxy:1.5},200],[{sxy:.5},400],[{sxy:1},200]
			)
		}
		p()
	}
	CENTERSHAPE=function(){
		z()
		stage=SuperStage(500,600).A()
		shape=stage.Shape();
		SL(shape)
		shape.RECT(0,0,100,100,'a')
		shape.RECT(0,-75,25,50,'b')
		shape.RECT(0,-200,100,100,'r')
		shape.circle(100,200,40,'z','x')
		shape.g.drawRoundRectComplex(0,0,300,300,20,20,30,40)
		shape.g.beginFill("orange").drawPolyStar(
			100,100,50,5,0.6,-90)
		shape.xy(200)
		stage.bm('me',function(b){
			me=b
			me.rgc()
			me.xy(200)
			me.sxy(.4)
		})
	}
	SQUAREGAMES=function(){
		z()
		s=SuperStage(400,400).A()
	}
	Graphic=EaselGraphic=Gx=function(stage){
		var g,graphic
		graphic=g=new createjs.Graphics()
		graphic.fs=function(a,b){
			graphic.f(oC(a))
			if(S(b)){
				graphic.s(oC(b))
			}
			return graphic
		}
		graphic.d=function(stage){
			g.draw(stage||s)
		}
		graphic.dr0=function(w,h){
			w=N(w)?w:100
			h=N(h)?h:w
			graphic.dr(0,0,w,h)
			return graphic
		}
		graphic.shape=graphic.H=function(){
			return EaselShape(graphic)
		}
		return graphic
	}
	EaselRect=rct=function l(x,y,w,h,fc,sc){
		if(!N(w)){
			return l(0,0,x,y,w,h)
		}
		x=x||0;
		y=y||0;
		w=w||100;
		h=h||w;
		fc=oC(fc||'x');
		sc=oC(sc||'y')
		var sh=EaselShape()//.fn(SL)
		sh.g.f(fc).s(sc).r(x,y,w,h)
		return sh
	}
	EaselCircle=cir=function p(x,y,r,fc,sc){
		var gx=Gx()
		if(O(x)){
			return p(
				x.x,
				x.y,
				x.r,
				x.fc,
				x.sc)
		}
		r=N(r)?r:8
		x=N(x)?x:100
		y=N(y)?y:100
		gx.ss(r/8).fs(fc,sc||'z').dc(0,0,r)
		return EaselShape(gx).xy(x||100,y||100)
	}
	//canon
	ball=function(z,fc,sc){
		var b=cir(0,0,z,fc,sc)
		b.r=z
		b.d=z+z
		b.T=function(a){
			if(U(a)){
				return b.y()-b.r
			}
			b.y(a+b.r);
			return b
		}
		b.B=function(a){
			if(U(a)){
				return b.y()+b.r
			}
			b.y(a-b.r);
			return b
		}
		b.L=function(a){
			if(U(a)){
				return b.x()-b.r
			}
			b.x(a+b.r);
			return b
		}
		b.R=function(a){
			if(U(a)){
				return b.x()+b.r
			}
			b.x(a-b.r);
			return b
		}
		b.F=1
		b.fall=function(r){
			b.t(function(){
				if(r){
					if(ballBox(b,r)){
						b.F=0
					}else{
						b.F=1
					}
				}
				if(b.F){
					b.y(10,'+')
				}
			})
		}
		return b
	}
	box=function(w,h,fc,sc){
		w=w||200
		h=h||w
		var b=rct(
			0-w/2,0-h/2,w,h,fc,sc
		)
		b.wr=w/2
		b.hr=h/2
		b.wd=w
		b.hd=h
		b.T=function(a){
			if(U(a)){
				return b.y()-b.hr
			}
			b.y(a+b.hr)
			return b
		}
		b.B=function(a){
			if(U(a)){
				return b.y()+b.hr
			}
			b.y(a-b.hr)
			return b
		}
		b.L=function(a){
			if(U(a)){
				return b.x()-b.wr
			}
			b.x(a+b.wr)
			return b
		}
		b.R=function(a){
			if(U(a)){
				return b.x()+b.wr
			}
			b.x(a-b.wr);
			return b
		}
		b.fall=function(){
			b.t(function(){
				if(b.F){
					b.y(40,'+')
				}  //****
				if(ballBox(b,r)){
					b.F=0
				}
			})
		}
		return b
	}
	ballBox=function(bl,bx,buff){
		buff=buff||100
		var b=bl.B()>=bx.T()&&bl.T()<=bx.T()+buff&&
			bl.x()>=bx.L()&&bl.x()<=bx.R()
		if(b){
			bl.B(bx.T())
		}
		return b
	}
	EaselText=TX=function(words,color,font,x,y){//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
		x=N(x)?x:100
		y=N(y)?y:x
		font=font||'20px Arial'
		font=N(font)?font+'px Arial':font
		color=color||'z'
		var text=Do(new createjs.Text(words,font,oC(color))).xy(x,y)
		text.baseline=text.bl=function(b){
			if(U(b)){
				return text.ob.textBaseline
			}
			text.ob.textBaseline=b
			return text
		}
		return text
	}
	//shooty  //b=circle('w', 8, j.x()+75, j.y())
	circle2=function(r,z,x,y){
		var graphic=EaselGraphic()
		if(!S(r)){
			return circle2('r',r,z,x)
		}
		z=N(z)?z:32
		x=N(x)?x:100
		y=N(y)?y:100
		graphic.ss(z/8).fs(r,'z').dc(0,0,z)
		return EaselShape(graphic).xy(x||100,y||100)
	}
	cir0=function(x,y,r,fc,sc){
		var shape,h
		shape=h=EaselShape()
		if(O(x)){
			return cir0(x.x,x.y,x.r,x.fc,x.sc)
		}
		x=x||0
		y=y||0
		r=r||8
		fc=fc||'w'
		sc=sc||'z'
		shape.circle(x,y,r,fc,sc)
		SL(shape)
		return shape
	}
}