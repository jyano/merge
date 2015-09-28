//good for wappy
//gets rid of auto-scaling quirk/*     i.i=i.l=i.load(function(i){     i._ =i[0]     //i = $(i.target)     // img.W( img.W() )     // img.H( img.H() ) })*/
// $.im = function(img, func){i = $.img().src(img);func(i[0]);return i}//s$(e).contains('data:')
//gets rid of auto-scaling quirk
/*
 i.i=i.l=i.load(function(i){
 i._ =i[0]
 //i = $(i.target)
 // img.W( img.W() )
 // img.H( img.H() )
 })*/
function old(){
	$.i=$.img=function(){
		var g=G(arguments),i=_$Img(),
			o=F(g.f)?{fn:g.f}:{sr:g.f,fn:g.s}
		i.i=function(sr){
			if(U(sr)){
				return this[0].src
			}
			this.src($src(sr));
			return this
		}
		i.r=function(fn){
			this.load(function(e){
				fn(e,i)
			});
			return this
		};
		i.r(function(_i){
			i._=_i.target
		});
		if(o.fn){
			i.r(o.fn)
			i.load(function(ev){
				o.fn($(ev.target),ev)
			})
		}
		if(o.sr){
			i.src($src(o.sr))
			i.i(o.sr)
		}
		//i.A()
		return i
	}
	C=function(a){
		if(_.isObject(a=E(a)||a)){
			return a.canvas?a.canvas:
				s$(a.toString()).contains('Canvas')
					?Q(a)[0]:0
		}
	}
	E=function E(a,b,c){
		if(S(b)){
			return s$(a).endsWith(b)
		}
		if(F(b)){
			return _.every(a,b,c)
		}
		if(O(a)){
			a=O(a.e)?a.e
				:O(a.c)?a.c
				:a
			a=$(a)[0]
			if(_.isElement(a)){
				return a
			}
		}
	}
	$.extension=_x=function(a,b){
		//if(_.isString(a)){
		return s$(a).contains('.')?a:s$(a).ensureRight(b||'.png').s
		//}
	}
	$.i=$.img=function(){
		var g=G(arguments),i=_$Img(),
			o=F(g.f)?{fn:g.f}:{sr:g.f,fn:g.s}
		//i.l(function(e){o.fn($(e.target), e)})
		return i
	}
	//i.load(function(i){$(i.target)}) //var i = // i.W( i.W() ) // i.H( i.H() )//gets rid of auto-scaling quirk
}
// alrt()
function alrt(){
	$.C=function(){
		alert('$.C')
		z();
		c=$.c('y',900,500).A().drag()
		x=c.ctx()
	}
	_.px=function(a){
		alert('_.px')
		return _.nN(a)?a+'px':a
	}
	$.imageSizeFuncCan=function(image,size,func){
		alert('$.imageSizeFuncCan')
		//xc=
		var x=$.c(100,100).C('X')
		if(image){
			x.fit(image)
		}
		//if(size){  x.Z(size) }
		if(func){
			x.click(func)
		}
		return x
	}
	$.fn.cv=$.fn.can=function(){
		alert('$.fn.cv can')
		var c=$.can.apply($,G(arguments))
		this.A(c)
		return this
	}
	$.i2=$.img2=function(img,func){
		alert('$.i2 img2')
		i=$.img().src(img)
		func(i[0])
		//s$(e).contains('data:')
		return i
	}
}