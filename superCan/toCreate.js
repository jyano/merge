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
function balls() {
	CHICKBALLS = function () {
		W(1200, 1200)._(function () {
			_.t(14, function () {
				w.D(R(1100, 50), R(1100, 50))
						.cir({bf: 'chicks', r: 120})
			})
		})
	}
	HAIRBALLS = function () {
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
	COOLBALLS = function () {
		W(400, 400).C('w')._(function () {
			//cjs.rulers()
			_.t(8, function () {
				var b = w.D(R(100, 50), R(100, 50), 'b', 50)
				b.$h('x', 'X', 1)
						.c('x', 'X', 1)
						.bf('sun', [0, .9, 1, 1, -40, 2])
						.cir(50)
			})
		})
	}
	CANVASBMFILLBALLS = function () {
		W(400, 400).C('w')._(function () {
			//cjs.rulers()
			w.p(0, 0, 10).stat()
			_.t(8, function () {
				w.D(R(100, 50), R(100, 50), 'b', 30)
			})
			w.$$(function () {
				_.t(8, function () {
					var b = w.D(R(100, 50), R(100, 50), 'b', 30)
					b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
				})
			})
			w.i.T(200, 100, '$$ me')
		})
	}
	CANTFBALLS2 = function () {
		W([400, 400], {w: 'U'}).C('w')._(function () {
			//cjs.rulers()
			w.p(0, 0, 10).stat()
			_.t(8, function () {
				w.D(R(100, 50), R(100, 50), 'b', 30)
			})
			$.ev(3, function () {
				var b = w.D(200, 200, 'b', 80)
				b.$h('x', 'X', 1).c('x', 'X', 1).bf(
						w.s.cv0,
						cjs.m2d(
								.6, .1, .1, .6, -40, 180
						)
				).cir(80)
			})
		})
	}
	TEXTBALLS = function () {
		W([400, 400], {}).C('w')._(function () {
			b = w.D(200, 200, 'b', 80)
			b.gx = b.gx || w.g.ct()
			b.gx.qB('chicks').rC().sXY(.1).Y(30)
			nice = w.i.T(0, 140, 'nice', 100, 'o')
			b.bS(nice)
		})
	}
	RADIANTBALLS = function () {
		s = cjs.S('a')
		b1 = s.cannonBall(100, 200)
		b2 = s.basketBall(100, 100)
		b3 = s.beachBall(50, 50)
		b3 = s.snowBall(50, 300)
	}
	DIRTYBALLS = function () {
		W({grav: 0})
		w.dirtyBall = function (x, y, stop1, stop2) {
			return this.gradBall(x, y, 60, 'z', 'w', stop1, stop2)
		}
		w.gradBall(200, 100, 60, 'z', 'w')
		w.dirtyBall(350, 100, 0, .9)
		w.gradBall(500, 100, 60, 'z', 'w', 0, .6)
		w.gradBall(650, 100, 60, 'z', 'w', 0, .3)
		w.gradBall(800, 100, 60, 'z', 'w', 0, .1)
		w.gradBall(350, 300, 60, 'z', 'w', .3, 1)
		w.dirtyBall(500, 300, .6, 1)
		w.dirtyBall(650, 300, .9, 1)
		w.dirtyBall(800, 300, 1, 1)
	}
	STATUSBALL = function () {
		W({grav: 0})
		b = w.D(500, 300, 'r', 60).bS(w.s.shape(500, 300))
		num = 0
		dif = .1
		shape = b.sprite
		shape.rG(['r', 'y'], [0, num],
				0, 0, 0, 0, 0, 60)
				.dc(0, 0, 60)
		$.ev(.1, function () {
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
	SWITCHBALL = function () {
		W({g: 0})
		b = w.D(500, 300, 'r', 60)
		b.bS(
				w.s.h(500, 300)
		)
		b.draw = function (frame) {
			var b = this
			b.sp().rf(
					['r', 'y'], [frame[0], frame[1]],
					0, 0, 0, 0, 0, 60
			).dc(60)
		}
		frames = [
			[0, .1],
			[0, .3],
			[0, .6],
			[0, .9],
			[0, 1],
			[.3, 1],
			[.6, 1],
			[.9, 1],
			[1, 1]]
		curr = 0
		$.ev(1, function () {
			b.draw(frames [curr])
			curr++
			if (curr == 9) {
				curr = 0
			}
		})
	}
	HEALTHBALL = function () {
		W({g: 0})
		w.badGuy(500, 300)
	}
	SWITCHBALLWORKSBUTTOOCOMPLICATED = function () {
		w = b2d.W({grav: 0})
		advanceN = function (n, dif) {
			n += dif
			if (n >= 1) {
				n = .9;
				dif *= -1
			}
			if (n <= 0) {
				n = 0;
				dif *= -1
			}
			return {n: n, dif: dif}
		}
		switchBall1 = function (x, y) {
			var dif = .1, n1 = 0, n2 = 0,
					b = w.ball(x, y, 60).bindSprite2(w.s.shape(x, y))
			I(function () {
				n2 = advanceN(n2);
				drawGrad()
			}, 100)
			function drawGrad() {
				b.sprite.rG(['r', 'y'], [n1, n2], 60).dc(0, 0, 60)
			}
			
			function advanceN(n2) {
				n2 += dif
				if (n2 >= 1) {
					n2 = .9;
					dif *= -1
				}
				if (n2 <= 0) {
					n2 = 0;
					dif *= -1
				}
				;
				return n2
			}
		}
		switchBall2 = function (x, y) {
			var ball = w.ball(x, y, 60).bindSprite2(w.s.shape(x, y))
			ball.drawGrad = function (n1, n2) {
				return this.sprite.rG(['r', 'y'],
						[n1, n2], 60).dc(0, 0, 60)
			}
			ball.animGrad1 = function () {
				var that = this,
						dif = .1, n2 = 1, n1 = 0
				I(function () {
							var res = advanceN(n1, dif)
							dif = res.dif
							n1 = res.n
							that.drawGrad(n1, n2)
						},
						300)
			}
			ball.animGrad2 = function () {
				var that = this, dif = .1
				I(function () {
							var res = advanceN(n1, dif)
							dif = res.dif
							n1 = res.n
							that.drawGrad(n1)
						},
						300)
			}
			ball.animGrad1()
		}
		switchBall1(100, 100)
		switchBall2(300, 100)
		w.s.back.linGrad('u', 'p')
		w.s.HUD.bm('me', function (bm) {
			me = bm.sXY(.3).XY(1150, 550).drag()
		})
	}
	TRIPLESTAGE = function () {
		w = b2d.W({grav: 0})
		b = w.ball(500, 300, 60)
		b.bindSprite2(w.s.shape(500, 300))
		num = 0
		dif = .1
		shape = b.sprite
		shape.rG(['r', 'y'], [0, num], 60)
				.dc(0, 0, 60)
		w.s.HUD.bm('me', function (b) {
			b.XY(300).drag()
		})
		w.s.back.bm('guy', function (b) {
			b.XY(200).drag()
		})
		w.s.back.linGrad('b', 'z')
	}
	RADIANT = function () {
		W().P()
		p.lD(1).warp()
		$.space(
				function () {
					p.polyBul()
				}
		)
		badGuy = w.badGuy(
				400, 200).warp().den(.1)
		$.ev(.2, function () {
			w.s.pen('badGuy health: ' + badGuy.health)
		})
	}
}
//dep
gBd = getBody = gBod = function (a) {
	return a.GetBody()
}
iPtM = function (f, m) {
	f = sFx(f)
	return f.gSh().tPt(
			f.gB().gTf(), m
	)
}
//dep
gSh = getShape = function (a) {
	var s = a.GetShape()
	s.tPt = s.tP = s.tp = function (a, b) {
		return s.TestPoint(a, b)
	}
	return s
}
//is static body?
isStat = function (a) {
	return gTy(a) == sB
}
//isnt static?? (so dynamic?)
iSB = function (f) {
	return f.GetBody().GetType() != sB
}
gTy = getType = function (a) {
	return gBod(a).GetType()
}
gTf = gTF = getTransform = function (a) {
	return gBd(a).GetTransform()
}
tPt = txPt = function (a, b) {
	return gSh(a).tPt(getTransform(a), b)
}
getBodyAtMouseOld = function (mX, mY) {
	var selectedBody
	w.QueryAABB(
			function (f) {
				if (
						f.GetBody().GetType() != sB && f.GetShape().TestPoint(
								f.GetBody().GetTransform(),
								bV(mX, mY)
						)) {
					selectedBody = f.GetBody();
					return false
				}
				return true
			},
			AB(mX - .001, mY - .001, mX + .001, mY + .001)
	)
	return selectedBody
}
$sw = cjs.sw = cjs.stopWatch = function () {
	alert('$sw')
	_$t = function () {
		return new Date().getTime()
	}
	var t = _$t()
	return function self() {
		var g = G(arguments),
				d = _$t() - t
		if (g.d) {
			t = _$t()
		}
		if (g.n) {
			var f = _.cap(
					(self('/') - 500) / 20,
					0,
					100
			)
			return f
		}
		return d
	}
}
//w.spBox???
SPRY = function () {
	W([1200, 600, 2400, 1200], {g: 20})//.chalk('spritebox example')
//for 400 x 400 flash squares !!!
	//w.s.bm('earth', function(me){me.XY(400,400)fn()})
	//function fn(){
	y = w.spBox($$ship).track()
	$.K($$ship.key)
	$.K({  //takes a spritebox!//uses cjs.watchKeys()
		l: function () {
			y.rot(8, '-')
		},
		r: function () {
			y.rot(8, '+')
		},
		u: function () {
			y.I(0, -10)
		}
	})
	y.aD(.5)
//}
}
toAlert()
function toAlert() {
	w.sun = function (x, y) {
		alert('sun')
		var w = this
		//djd.init?? joint
		x = N(x, 300)
		y = N(y, 150)
		return w.S(300, 150, 20, 'p', 10).d(1).r(.5).bS('sun', .2)
	}
	b.cam = function (x, y) {
		alert('b.cam')
		var b = this, s = b.stg()
		s.XY(b.diff(x, y))
		return b
	}
	b.follow = function (x, y) {
		alert('b.follow')
		var b = this
		cjs.t(function () {
			if (O(b.sprite)) {
				b.cam(x, y)
			}
		})
		return b
	}
	b.dir = function (d) {
		alert('b.dir')
		var b = this
		if (U(d)) {
			return b._dir
		}
		b._dir = d
		return b
	}
	b.polBu = b.polyBul = function () {
		alert('b.polBu polyBul')
		var b = this, w = b.W(), v, pt, bu
		v = b.vec(-20)
		pt = b.wP(0, -50)
		bu = w.polBu(pt.x, pt.y, 4, 4, 'w').d(1).lD(0).lV(v)
		return bu.K('polBu')
	}
	b2d.cn.sl = b2d.cn.slidey = function (p) {
		alert('slidy')
		var k = $.K
		if (p.onG) {
			if (k.u) {
				if (k.r) {
					p.I(20, -60)
				}
				else if (k.l) {
					p.I(-20, -60)
				}
				else {
					p.I(0, -100)
				}
			}
			else {
				if (k.l) {
					p.dir(0);
					p.I(-20, 0)
				}
				if (k.r) {
					p.dir(1);
					p.I(20, 0)
				}
			}
		}
		else {
			if (k.l) {
				p.dir(0);
				p.I(-10, 0)
			}
			if (k.r) {
				p.dir(1);
				p.I(10, 0)
			}
		}
		/*
		
		 p.I(p.onG&&k.u ? V(0, -70)
		
		 : k.r ? V(30, 0)
		 : k.l ? V(-30, 0)
		 : V(0, 0)  )*/
		return p
	}
	b2d.cn.h = b2d.cn.hop = function (p) {
		alert('hop')
		var k = $.K
		if (p.onGround) {
			if (k.l) {
				p.I(-30, -120)
			}
			if (k.r) {
				p.I(30, -120)
			}
		}
		else {
			if (k.d) {
				p.I(0, 20)
			}
		}
	}
	b2d.cn.power = function (p) {
		alert('power')
		var K = $.K
		if (K.u) {
			p.I(0, -45)
		}
		if (K.l) {
			p.I(-20, 0)
		}
		if (K.r) {
			p.I(20, 0)
		}
	}
	b2d.cn.powX = function (p) {
		alert('powX')
		var K = $.K
		if (K.u) {
			p.I(0, -4500)
		}
		if (K.l) {
			p.I(-2000, 0)
		}
		if (K.r) {
			p.I(2000, 0)
		}
		if (K.d) {
			p.I(0, 4500)
		}
	}
	b.diffx = b.difx = function (x, y) {
		alert('b.diffx difx')
		var b = this// compare with DIF  - achtung!
		return {
			x: x - b.X(),
			y: y - b.Y()
		}
	}
	w.p1 = w.player1 = function (x, y, sc, cn) {
		alert('w.p1 player1')
		var w = this, g = G(arguments), p,
				o = g.S_ ?
				{cn: g.f} :
						N(g.t) ? {x: g.f, y: g.s, sc: g.t, cn: g[3]} :
						{x: g.f, y: g.s, cn: g.t}
		o.x = N(o.x, w.hW)
		o.y = N(o.y, w.hH)
		o.sc = N(o.sc, 4)
		p = w.me(o.x, o.y, o.sc)
		if (g.p) {
			p.track()
		}
		p.cn(o.cn)
		p.speed = 40
		p._dir = 'r'
		p.dir = function (d) {
			var p = this
			if (U(d)) {
				return p._dir
			}
			p._dir = d;
			return p
		}
		p.moveInDir = function () {
			var p = this, g = G(arguments)
			if (g.n) {
				return p.move(-p.speed)
			}
			//n = _.tN(g[0], p.speed)// ?
			if (p.dir()) {
				p.I(3, 0)
			} else {
				p.I(-3, 0)
			}
			return p
		}
		p.SetBullet(true)
		w.cl('feet',
				function (f) {
					if (!f.sen()) {
						p.onG = 1
					}
				}
		)
		w.end(function (cx) {
			cx.w('feet', function (f) {
				if (!f.sen()) {
					p.onG = 0
				}
			})
		})
		$.testJump = 1
		if ($.testJump) {
			T.t(function () {
				if (p.onG) {
					$l('onG')
				}
				else {
					$l('in air')
				}
			})
			w.show(function () {
				return p.onG
			})
		}
		T.t(function () {
			p.I(0, 500)
		})
		return p
	}
	b.jumping = function (y, x) {
		alert('b.jumping')
		var b = this, k = $.K
		if (k.u) {
			if (k.r) {
				b.lV(x, -(y - x))
			}
			else if (k.l) {
				b.lV(-x, -(y - x))
			}
			else {
				b.lV(0, -y)
			}
		}
		return b
	}
	b.arrowMove = function () {
		alert('b.arrowMove')
		var b = this
		$.key({
			l: function () {
				b.dir('l').move()
			},
			r: function () {
				b.dir('r').move()
			},
			u: function () {
				if (b.dir() == 'l') {
					b.I(5, -12)
				}
				else if (b.dir() == 'r') {
					b.I(-5, -12)
				}
			}
		})
		return b
	}
	b.relPos = function () {
		alert('b.relPos')
		var b = this;
		return b.X() + b.S().X()
	}
	b.pWarping = function () {
		alert('b.pWarping')
		var p = this, b = this
		cjs.t(function () {
			if (p.Y() < 0) {
				p.Y(300)
			}
			if (p.Y() > 300) {
				p.Y(0)
			}
			if (p.X() < 0) {
				p.X(600)
			}
			if (p.X() > 600) {
				p.X(0)
			}
		})
		return b
	}
//w.left and w.up move all objects in world
//i think only used in 1 game (talk?)
	w.up = function (n) {
		alert('w.up')
		var w = this;
		n = N(n, 4)
		w.e(function (b) {
			b.Y(n, '-')
		})
	}//=w.vert
	b.thr = function () {
		alert('b.thr')
		this.cn('thrust')
	}
	b2d.cn.jet = function (p) {
		alert('jet')
		var k = $.K, vec = p.GetWorldVector(V(0, -100))
		p.fixRot()
		if (k.left) {
			p.rot(8, '-').I(0, -5)
		}
		if (k.right) {
			p.rot(8, '+').I(0, -5)
		}
		p.I(
				k.up ? vec.div(1) : k.down ? vec.div(-100) : V(0, 0)
		)
	}
}
function workedBetterPrev() {
	YIPPY = function () {
		_.ev(1, function () {
			W({g: 4})
			y = w.y(300, 400, 3, '-').rt(90)
			y1 = w.y(600, 400, 3, '-').rt(90)
			_.ev(1.5, function () {
				y.I(0, -.7).rt(4, '+')
				y1.I(4, 0).lV(0, -3).rt(4, '+')
			})
		})
		//ok this is crazy cool.. but something is wrong.
		// something is not getting reset,
		// because force gets bigger each time
	}
	BLUE = function () {
		W({g: 0})
		y = w.y('b', 200, 300, 6).aD(1).lD(1).r(0).fr(1).K('guy')
		_.t(5, function () {
			w.y(R(600, 50), 300, 3, '-').K('bad').rt(45)
					.push('+')
					.shtEv('badBul')
		})
		w.cl('badBul', function (f) {
			this.B().kill()
			//if(f.of('bad')){
			f.B().kill()
			//}
		})
	}
}
CIRS = function () {
	W(10).Y()
	w.D(200, 160).cir({r: 120, rf: {c1: 'r', c2: 'b'}}, {r: 100, C: 'y', l: 2, bf: 'me'})
	w.D(100, 100).cir({r: 35, lf: {c1: 'o', c2: 'y'}})
	w.D(300, 200).cir({r: 50, x: 0, y: 0, lf: {c1: 'o', c2: 'b', X1: 400}})
			.cir({r: 100, x: 200, y: 0, lf: {c1: 'o', c2: 'b'}})
			.cir({r: 100, x: 100, y: 100, lf: {c1: 'o', c2: 'b'}})
	w.s.h().dc([50], [200, 0, 100], [100, 100, 100]).c({
		l: 20,
		C: 0,
		ls: 1
	}).dc([50], [200, 0, 100], [100, 100, 100])
}
RADIALGRADCIRC = function () {
	s = $St()
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
		h.rf('b', "o", x1,
				y1,
				r1,
				x2,
				y2,
				r2)
				.dc(0, 0, 100)
				.ef()
		// x--
		// r1++
		// r2++
	}
	setInterval(change, 1000)
	change()
	n = nip()
	//h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
}
SHADOW = function () {
	b2d.levelWarp()
	p.linDamp(1).warp()
	setTimeout(function () {
		p.sprite.shad("y", 0, 150, 300)
		badGuy.sprite.shad('o', 40, 40, 40)
	}, 100)
	$.space(function () {
		p.polyBul()
	})
	badGuy = w.badGuy(400, 200).warp().den(.1)
	I(function () {
		w.s.pen('badGuy health: ' + badGuy.health)
	}, 200)
	$(w.s.back.canvas).C('p')
	s = w.s.back
	s.bm('me', function (bm) {
		bm.drag().shad('blue', 125, 125, 50).XY(100, 100).sXY(.6)
	})
	s.bm('guy', function (bm) {
		bm.drag().shad('r', 100, 100, 10).XY(300, 200).sXY(.6)
	})
	s.bm('me', function (bm) {
		bm.drag().shad("z", 25, 25, 50).XY(500, 100).sXY(.6)
	})
}
CHAR = function () {
	w = b2d.W().debug()
	w.begin(function (cx) {
		if (cx.with('hurt')) {
			b.p('hurt').I(100, -200)
		}
		if (cx.with('fly')) {
			b.p('fly').I(-100, -200)
		}
	})
	b = w.ball(200, 200, 60).bindSprite2(cjs.sprite(Sprites.char).rXY(275, 220))
	guyBrick(100).K('hurt')
	guyBrick(500).K('fly')
	function guyBrick(x) {
		return w.brick(x, 500, 100, 100).bindSprite('guy', .6)
	}
}
MUMMYFLIP = function () {
	w = b2d.W() //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"
//sprite always assumed to start facing right (and flipping it horizontqlly is the left) - so i must draw facing right
	b = b2d.box(100, 100, 50, 88).K('mummy').bindSprite2(
			cjs.sprite(Mummy).a2(w.s).drag()
					.rXY(20, 22).sXY(2).XY(200))
	b.coll(function () {
		b.linVel(0)
	})
	b.sprite.p('walk')
	cjs.tick(function () {
		b.rT(0)
		if (b.direction == 'right') {
			b.I(4, -2)
		}
		else if (b.direction == 'left') {
			b.I(-4, -2)
		}    // direction='neither' // <-- demumify (doesnt keep walking
		//if(jumpButton is pressed){jump()}
	})
	$.kD({
		u: function () {
			//jumpButtonPressed = true
			if (b.Y() > 530) {
				b.I(0, -80)
			}
		},
		U: function () {
			//jumpButtonPressed = false
		},
		l: function () {
			b.sprite.sX(-2)
			b.direction = 'left'
		},
		r: function () {
			b.sprite.sX(2)
			b.direction = 'right'
		}
	})
}
STICK = function () {
	w = b2d.W({grav: 3})
			.chalk('spritebox example').debug()
	w.spriteBox({
		"framerate": 4,
		"images": ["stick.png"],
		"frames": [
			[0, 0, 512, 512, 0, -22, -2],
			[512, 0, 512, 512, 0, -22, -2],
			[1024, 0, 512, 512, 0, -22, -2],
			[0, 512, 512, 512, 0, -22, -2],
			[512, 512, 512, 512, 0, -22, -2],
			[1024, 512, 512, 512, 0, -22, -2],
			[0, 1024, 512, 512, 0, -22, -2],
			[512, 1024, 512, 512, 0, -22, -2],
			[1024, 1024, 512, 512, 0, -22, -2],
			[0, 1536, 512, 512, 0, -22, -2],
			[512, 1536, 512, 512, 0, -22, -2],
			[1024, 1536, 512, 512, 0, -22, -2]
		],
		"animations": {
			"die": {"frames": [8, 9, 10], "speed": .1, next: false},
			"walk": {"frames": [1, 2, 3, 4], "speed": .1},
			"jump": {"frames": [5, 6, 7, 0], "speed": .1, next: false}
		}
	}, 300, 200, .25).mario()
	w.rect(600, 200, 50, 50, 'p')
	w.circ(600, 100, 40, 'b')
}
old = function () {

// s.B = function(x,y){return this.ct(x,y).drag() }
	/*
	 $a1=function(ob, g, c){
	
	 ob.apply(c||ob,  g)
	
	 }
	
	
	 $a = function(gx, met, g){
	
	 gx[met].apply(gx, g)
	
	 }
	
	
	 $a(gx, 'dc',  N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )
	
	 gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )
	
	 gx.app=function(met,g){var gx=this
	
	 gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )
	
	 }
	 */
	cjs.RECTx = function (c, W, H, x, y, a) {
		var g = G(arguments), ct = cjs.ct(), h, o;
		if (O(c)) {
			o = c
		} else if (S(c)) {
			o = {c: c, w: W, h: H, x: x, y: y, a: a}
		}
		o = b2d.oDef(o)
		h = ct.h(o.x, o.y).c(o.c, o.C, o.l).rot(o.a)
		if (o.bm) {
			h.bm('me', function () {
				h.dr2(o.x, o.y, o.w, o.h)
			});
			return h
		}
		if (o.rg) {
			h.rg(o.c, o.C)
		}
		if (o.lg) {
			h.lg(o.c, o.C)
		}
		h.dr2(o.x, o.y, o.w, o.h)
		cjs.recx = cjs.rectx = function self(wd, ht, c, C) {
			var h, hW, hH
			wd = _.tN(wd, 100)
			ht = _.tN(ht, wd)
			hW = wd / 2
			hH = ht / 2
			h = $h().c(c || 'g', C || 'w').mt(-hW, -hH)
					.lt(-hW, hH).lt(hW, hH).lt(hW, -hH).lt(-hW, -hH)
			return h
		}
		ct.artx = function (x, y, c, C) {
			var g = G(arguments), ct = this, h
			y = N(g[1]) ? g[1] : x
			c = S(g[2]) ? oO('c', g[2]) : null
			C = S(g[2]) ? oO('c', g[3]) : c
			h = $h(x, y, c, C).a2(ct)
			if (g.p) {
				h.drag()
			}
			return h
		}
		return h
	}
//b2d.colMap=function(C){return _.map(C,function(c){return oO('c',c)})}
//cjs.chalk=function(t,c){if(O(t)){alert('check code'); t='x: '+t.x+', '+'y: '+ t.y}; return cjs.T(t,"26px Arial", c||"w").XY(550,150)}
	/*
	 w.i.bm('me', function(bm){
	 bm.XY(300).sXY(.2)
	 w.i.dot(300,300)
	 })*/
//third wheel, wagon hitch
}

