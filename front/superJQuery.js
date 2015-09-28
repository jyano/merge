$load=function(metNames){
	var fun
	
	
	metNames=A(metNames)? metNames : [ metNames ]
	
	
	
	_.e(metNames,function(fn){
		fun=window[fn]
		//test=1
		if(F(fun)){
			if(window['test']){
				$l('running met: "'+fn+'"')
			}
			fun()
		}
		else{
			$l('met "'+fn+'" not found !!!!!!!!!!!!!!!!')
		}
	})
}
$load([
'loadSerJLib ',
'core','ajax',  'evenz','atts','statt','sty', 'adv', 'anim','animApps'
])
function evenz(){
mous()
	function mous(){
		$.md=$.mousedown=function(fn){
			$('body').on('mousedown',fn);
			return this
		}
		$.mu=$.mouseup=function(fn){
			$('body').on('mouseup',fn);
			return this
		}
		$.mm=$.mousemove=function(fn){
			$('body').on('mousemove',fn);
			return this
		}
		$.oMD=function(fn){
			$.md(function(e){
				fn(e.clientX,e.clientY,e)
			})
			return $
		}
		$.oMU=function(fn){
			$.mu(function(e){
				fn(e.clientX,e.clientY,e)
			});
			return $
		}
		$.oMM=function(fn){
			$.mm(function(e){
				fn(e.clientX,e.clientY,e)
			});
			return $
		}
		$.fn.m=function(o){
			var e=this
			if(o.mD){
				e.mD(o.mD)
			}
			if(o.mU){
				e.mD(o.mU)
			}
			if(o.pM){
				e.pM(o.pM)
			}
			return e
		}
		$.fn.$=$.fn.click
		$.fn.hv=$.fn.hover
		$.fn.mD=function(l){
			var c=this
			c.mousedown(function(e){
				l(e.clientX,e.clientY)
			})
			return c
		}
		$.fn.mD=function(l){
			var c=this
			c.mousedown(function(e){
				l(e.clientX,e.clientY)
			})
			return c
		}
		$.fn.pM=function(l){
			var c=this
			c.pressmove(function(e){
				l(e.clientX,e.clientY)
			})
			return c
		}
		$.fn.pm=$.fn.pressmove=function(func){
			var mouse_pressed
			this.mousedown(function(){
				mouse_pressed=true
			})
			this.mouseup(function(){
				mouse_pressed=false
			})
			this.mousemove(function(e){
				if(mouse_pressed){
					func(e)
				}
			})
			return this
		}
		$.fn.mp=$.fn.mousePoint=function(e,scale){
			scale=N(scale)?scale:1
			return V(e.pageX/scale,e.pageY/scale)
		}
		$.fn.mU=function(l){
			var c=this
			c.mouseup(function(e){
				l(e.clientX,e.clientY)
			})
			return c
		}
		$.fn.pM=function(l){
			var c=this
			c.pressmove(function(e){
				l(e.clientX,e.clientY)
			})
			return c
		}
		$.fn.m=function(o){
			var e=this
			if(o.mD){
				e.mD(o.mD)
			}
			if(o.mU){
				e.mD(o.mU)
			}
			if(o.pM){
				e.pM(o.pM)
			}
			return e
		}
		$.tap=function(func){
			this('body').on('keydown mousedown',func);
			return this
		}
		$.$=function(f){
			return $(document).on('click',_v(f))
			/*
			 $.$=function(){
			 var b=$('html')
			 b.click.apply(b, arguments)
			 return $
			 }*/
		}
		$.$$=function(f){
			return $(document).on('dblclick',_v(f))
			//$.$$=function(a,b,c){$('body').$$(a,b,c); return this}
		}
		$.click=m$=function(f){
			return $(document).on('click',_v(f))
		}
		$.dblclick=m$$=function(f){
			return $(document).on('dblclick',_v(f))
		}
	}
	$.scroll=function(a){
		return $(window).scroll(a||function(){
			$('body').C('*')
		})
	}
	$.fn.xPrp=function(){
		this.on('mousedown',function(e){
			e.stopPropagation()
		})
		return this
	}
	$.wh=function(a,b){
		return D(b)?a.which==b:a.which
	}
	KEYOB=KEYOBJ={
		up:38,u:38,
		down:40,d:40,
		left:37,l:37,
		right:39,r:39,
		space:32,s:32,
		enter:13,e:13
	}
	$.kD=function self(key,fn){
		if(O(key)){
			_.e(key,function(fn,k){
				if(s$(k).isUpper()){
					$.kU(k.toLowerCase(),fn)
				}
				else{
					$.kD(k,fn)
				}
			})
			return
		}
		if(KEYOB[key]){
			key=KEYOB[key]
		}
		$('body').on('keydown',function(e){
			if(e.which==key){
				fn(e,$.K)
			}
		})
	}
	$.kU=function(key,funk){
		if(KEYOBJ[key]){
			key=KEYOBJ[key]
		}
		$('body').on('keyup',function(e){
			if(e.which==key){
				funk(e,$.K)
			}
		})
	}
	$.K={}
	$.space=function(fn){
		return $.kD('space',fn)
	}
	$.fn.dg=$.fn.drag=function(){
		this.A()
		this.each(function(){
			$(this).css('top',$(this).position().top)
			$(this).css('left',$(this).position().left)
		})
		this.P('a')
		this.on('mousedown',function(e){
			var el=$(this)
			var offset=el.offset(),
				deltaX=e.pageX-offset.left,
				deltaY=e.pageY-offset.top
			$('html').on('mousemove',function(e){
				var x=e.pageX-deltaX,
					y=e.pageY-deltaY
				el.left(x)
				el.top(y)
			}).on('mouseup',function(){
				$(this).off()
			})
		})
		//touchDrg(element)
		return this
	}
	$.fn.hv=$.fn.hover
	$.fn.fc=$.fn.focus
}
function core(){

	$.fn.e=$.fn.ea=$.fn.each
	$.fn.f=$.fn.fi=$.fn.find
	$q=function(e){
		if(!O(e)){return false}
		if(e.target){e=e.target}
		return $(e)
	}
	$.fn.hd=$.fn.hide
	$.fn.sh=$.fn.show
	$.fn.gg=$.fn.toggle
	$.fn.oh = function(){
		return this[0].outerHTML
	}
	$.fn.h=$.fn.ht=$.fn.html
	$.fn.t=$.fn.tx=$.fn.text
	rels();kill();place()
	function rels(){
		$.fn.__=$.fn.pa=$.fn.pr=$.fn.parent
		$.fn.ch=function(){
			return this.children()
		}
		$.fn._=$.fn.closest
		$.fn.sib=function(){
			var g=G(arguments);
			return this.sib.apply(this.g)
		}
		$.fn.N=$.fn.next
	};
	function kill(){
		$.fn.r=$.fn.rm=$.fn.xx=function(){
			var e=this
			e.remove()
			return e
		}
		$.fn.fRm=function(a){
			return this.fi(a).rm()
		}
		$.fn.E=function(html){
			this.empty()
			if(S(html)){
				this.h(html)
			}
			else{
				G(arguments).e(function(q){
					this.A(q)
				})
			}
			return this
		}
	};
	function place(){
		$.fn.rp+$.fn.replace
		function pend(){
			$.fn.A=function(stuff){
				if(U(stuff)){
					$('body').append(this);
					return this
				}
				this.append.apply(this,arguments)
				return this
			}
			$.fn.a2=function(a){
				a.A(this);
				return this
			}
			$.fn.pp=function(a){
				this.pp(a);
				return this
			}
			$.fn.p2=$.fn.pp2=function(a){
				this.prependTo(a);
				return this
			}
		};
		pend()
		$.fn.iB=$.fn.insertBefore
		$.fn.iA=$.fn.insertAfter
		$.fn.wr=$.fn.wrap
	}
}
 
function statt(){
	$w=$.wi=function(){
		return $(window)
	}
	$.rz=function(fn){
		var g=G(arguments),wi=$.wi
		wi.rz(fn);
		if(g.p){
			fn()
		}
		return wi
	}
	$.bd=function(){
		var bd=$('body')
		return bd
	}
	$.A=function(){
		var g=G(arguments),
			bd=$('body')
		$.fn.A.apply(bd,g)
		return $
	}
	$.ct = $.cts = $.contains
	$.iI=function(i){
		if(O(i)){
			return S($(i)[0].src)
		}
	}
	$.src=function f(e){
		if(e.image){
			e=e.image
		}
		if($.tCan(e)){
			e=$.tCan(e)
		}
		if(e.src){
			e=e.src
		}
		if(e.toDataURL){
			e=_.tDU(e)
		}
		return s$(e).contains('data:')?e
			:S(e)?_.src(e)
			:0
	}
};
function ajax(){

	$.g=$.G=function(){
		var g=G(arguments),o;
		if(U(g[1])){
			return _.p($.G,g[0])
		}
		o=F(g[1])?{p:g[0],fn:g[1]}:
		{p:g[0],d:g[1],fn:g[2]};
		$.get(S.eL(o.p),o.d||{},
			function(d){
				o.fn=o.fn||function(){
					return 'boo ya!'
				};
				o.fn(d)
			})
	}
	$.eG=function(){
		var g=G(arguments),o;
		if(U(g[1])){
			return _.p($.eG,g[0])
		}
		o=F(g[1])?{p:g[0],fn:g[1]}:
		{p:g[0],d:g[1],fn:g[2]};
		$.G(o.p,o.d||{},
			function(dd){
				_.e(dd,function(d){
					o.fn(d)
				})
			});
		return $
	}
	$.txG=function(url){
		$.get('/'+url,function(aa){
			a=aa
		})
	}
	$.j=$.gJ=$.Gj=function(){
		var g=G(arguments),o;
		if(U(g[1])){
			return _.p($.Gj,g[0])
		}
		o=F(g[1])?{p:g[0],fn:g[1]}:{p:g[0],d:g[1],fn:g[2]};
		o.fn=o.fn||function(){
			return 'boo ya!'
		};
		$.getJSON(
			S.eL(o.p),
			o.d||{},
			function(d){
				o.fn(d)
			});
		return $
	}
	$.eJ=$.eGj=function(){
		var g=G(arguments),o;
		if(U(g[1])){
			return _.p($.eJ,g[0])
		}
		o=F(g[1])?
		{p:g[0],fn:g[1]}:{p:g[0],d:g[1],fn:g[2]};
		$.Gj(o.p,o.d||{},function(dd){
			_.e(dd,function(d){
				o.fn(d)
			})
		});
		return $
	}
	$.po=$.P=function(){
		var g=G(arguments),o;
		o=F(g[1])?{p:g[0],fn:g[1]}:{p:g[0],d:g[1],fn:g[2]};
		o.d=U(o.d)?{}:O(o.d)?o.d:{data:o.d};
		o.fn=o.fn||function(){
			return 'boo ya!'
		};
		$.post(S.eL(o.p),o.d,function(d){
			o.fn(o.d,o)
		});
		return $
	}
	$.eP=$.ePo=function(){
		var g=G(arguments);
		if(U(g[1])){
			return _.p($.eP,g[0])
		}
		o=F(g[1])?{p:g[0],fn:g[1]}:{p:g[0],d:g[1],fn:g[2]};
		$.P(o.u,o.d||{},function(dd){
			_.e(dd,function(d){
				o.fn(d)
			})
		});
		return $
	}
	$.aj=function(ob){
		return $.ajax(ob)
	}
	$.XML=function(){
		alert('$.XML!');
		return new XMLHttpRequest()
	}
};
function atts(){
	$.fn.at=$.fn.attr
	$.fn.sr=$.fn.src=function(a){
		if(U(a)){
			return this.attr('src')
		}
		this.attr('src',$.src(a))
		return this
	}
	$.fn.n=function(name){
		if(U(name)){return this.attr('name')}
		this.attr('name',name);
		return this
	}
	$.fn.ml=$.fn.mlt=function(m){
		return this.at('multiple',true)
	}
	$.fn.ph=$.fn.placeholder=function(forWhat){
		return this.attr('placeholder',forWhat)
	}
	$.fn.ck=$.fn.chk=function(){
		this.at('checked',true)
	}
	$.fn.ty=$.fn.type=function(type){
		if(U(type)){
			return this.attr('type')
		}
		this.attr('type',type);
		return this
	}
	$.fn.id=function(id){
		if(U(id)){
			return this.attr('id')
		}
		;
		this.attr('id',id);
		return this
	}
	$.fn.hr=$.fn.hf=$.fn.href=function(href){
		if(U(href)){return this.attr('href')}
		this.attr('href',href);
		return this
	}
	
	
	
	$.fn.fr=$.fn.for=function(forWhat){
		return this.attr('for',forWhat)
	}
	$.fn.ro=$.fn.role=function(role){
		if(U(role)){
			return this.attr('role')
		}
		this.attr('role',role)
		return this
	}
	$.fn.v=$.fn.V=function(newVal){
		var g=G(arguments)
		if(U(newVal)){
			var v=this.val()
			if(g.n){this.val('')}
			return v
		}
		this.val(newVal);
		return this
	}
	$.fn.tt=$.fn.ti=function(a){
		this.at('title',a)
		return this
	}
	$.fn.d=$.fn.da=$.fn.data
}
function adv(){
layout()
	function layout(){
		$.x=function(c,t){
			var g=G(arguments),bd=$.bd()
			bd.empty()
			if(g.O_){
				$CSS(g.f)
				if(g.s){
					$.h1(g.s);
					$.hr().A()
				}
				bd.C(g.t||$r())
			}
			else{
				bd.C(c||$r())
				if(t){
					bd.A($.h1(t))
				}
			}
			if(g.p){ bd.A($.hr()) }
			return $
		}
		$.h=function(){
			var g=G(arguments),o
			bd=$.bd()
			bd.empty()
			bd.C($r())
			o=g.S_?{t:g.f,s:g.s}:{s:g.f}
			if(o.s){
				$CSS(o.s)
			}
			if(o.t){
				$.h1(o.t);
				$.hr().A()
			}
			return $
		}
		$.s=function(css,c,tx){
			$CSS(css)
			$.x(c,tx)
			return $
		}
		_z=function z(a,b,c){
			return U(b)?_.size(a)
				:N(b)?_z(a)==b
				:_z(a)==_z(b)
		}
		z=function(fn){$('body').empty()}
	}
	$.rulers=function(){
		$.d('b',100,100).al(.3).dg()
		$.d('r',100,300).al(.3).dg()
	}
	$.dg=$.dragFrame=function(d){
		var oD
		oD=$.d('y').pad(20).drag()
		d=d||$.d('r').mar(20)
		d.xPrp().a2(oD)
		d.oD=oD
		oD.XY(40,40)
		return oD
	}
}
function alpha(){
	//$.fn.sz=function(sz){return this.at('size',sz)}
	$.fn.fCt=function(str){return this.fi(":contains("+str+")")}
	$.fn.getPosition=$.fn.getTotalOffset=function(){
		alert('$.fn.getPosition')
		var e=this,x=0,y=0
		while($.tEl(e)&&e.tagName){
			y+=e.offsetTop
			x+=e.offsetLeft
			if(isBodyElement(e)){
				e=0
			}
			e=e.offsetParent||e
		}
		return {x:x,y:y}
	}//just gets the TOTAL offset of ANY element
	$.fn.osP=function(){return this.offsetParent}
	$t=function(a,b){
		if(b2d.test){
			var g=G(arguments),a=g[0],b=g[1],str
			if(D(b)){
				str='||'
				_.e(g,function(s){
					str+=' '+s.toString()+' |'
				})
				str+='|'
			}
			else{
				str=a.toString()
			}
			alert(str)
		}
		return a
	}
	function ipsum(){
		$.ips=function(len){
			len=len||1;
			var str='';
			_.t(len,function(){
				str=str+'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
			});
			return str
		}
		$.ipsP=function(len){
			return $.p().A($.ipsum(len))
		}
		ips1='dolor sit amet, consectetuer adipi nibh euismod tincidunt ut laoreet dolore magna aliquam'+
		'erat volutpat. Ut wisi enim ad mini corper suscipit lobortis nisl ut a commodo consequat.'
		ips2='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam'+
		'erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo'+
		'consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat'+
		'nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore'+
		'te feugait nulla facilisi.'
		ips3='Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper'+
		'suscipit lobortis nisl ut aliquip ex ea commodo consequat.'+
		'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,'+
		'vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan'+
		'et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue'+
		'duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,'+
		'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt'+
		'ut laoreet dolore magna aliquam erat volutpat.'
		$.fn.ipsum=function(){
			var that=this
			_.each(arguments,function(num){
				that.A($.ipsum(num))
			})
			return this
		}
		$.fn.ipsumP=function(){
			var that=this
			_.each(arguments,function(num){
				that.A($.ipsumP(num))
			})
			return this
		}
		$.fn.ips=$.fn.ipsum=function(){
			var that=this
			_.each(arguments,function(num){
				that.A($.ipsum(num))
			})
			return this
		}
		$.fn.ipsumP=function(){
			var el=this
			_.e(arguments,function(num){
				el.A($.ipsumP(num))
			})
			return el
		}
	}
	$.toColor=function(n1,n2,n3,n4){
		return n2?"rgba("+n1+","+n2+","+""+n3+","+(n4||1)+")":$r('c',n1)
	}
	$.fn.Z=function(w,h){
		return this.W(w).H(h||w)
	}
	$.fn.oH= $.fn.outerHeight
	
}
function scripts(){
	$.scr=function(scr,fn){return $.getScript(scr,fn)}
	$.getMultiScripts=function(arr,path){
		var _arr=$.map(arr,function(scr){return $.getScript((path||"")+scr)})
		//_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
		return $.when.apply($,_arr)
	}
	SCRIPTS=_.map([
		"socket.io/socket.io","string",'bb','bbmn','ko','mel','gq','objects','defaultMug','spriteSheets',
		'core','jqueryplugins','html','boot','ui','can','sys','images','event','socket','ranky','routeTests','nav','api','j3','display','animate','imagine','work','tween','universe','create','easel','displayObject','shape','text','mobile','animation','sprites','bitmap','toolkit','stage','filt','draw','solve','playgame','users','share','chat','messages','knock','bbtemps','backbone1','people','mar','backbone','angu'
		
		// ,'melon','gquery','ph','phaser0','phaser','ninja', 'ph2','bx','b2dbasics','b2dutils', 'invaders','three', 'iso', 'boxWorld','boxWorldMore','walls', 'makeworld', 'b2dSensors','playerWorld', 'boxRev','weld','prism','coll','gamey','pong','easelbox','joints','wheel',
		// 'emitter','p2fiddle','ragdoll','p2constraints','unigame',
		//  'tilemapping','launcher','fullgames','p2physics', 'controls','orbs',
		//  'shooter','boxBody','talkjs','mario','squares','edges','boxgame','boxDebug','boxFixt', 'boxShapes','player','pinball', 'examples'
	],function(js){return "/"+js+".js"})
	// _.each(SCRIPTS, function(scr){$.scr(scr)})
	/*
	 dfr = $.getMultiScripts(SCRIPTS)
	 dfr.done(function(){alert('done')})
	 .always(function(){
	 alert('always')
	 $.scr('app')
	 })
	 .fail(function(){alert('fail')})
	 */
	GSCR=function(){
		$.scr=function(scr,fn){return $.getScript(scr,fn)}
		$.getMultiScripts=function(arr,path){
			var _arr=$.map(arr,function(scr){return $.getScript((path||"")+scr)})
			//_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
			return $.when.apply($,_arr)
		}
		$.scr("https://code.jquery.com/color/jquery.color.js",function(a,b,c){
			console.log(a+b+c)
			d=c
			$l('got script')
			$.$(function(){$.j({C:"z"},1).in(.5).j({C:'r'},1).in(.5).j({C:"y"},1)})
		})
		dfr=$.Deferred(function(dfrd){
			d=dfrd
			// $(dfrd.resolve)
		})
		testx=100
		$.when(
			$.scr("/boxSprite.js"),
			$.scr("/easel.js")
		).done(function(){$l(testx)})
	}
}
function letterng(){
	letteringPlug=function(){
		var methods={
			init:function(){return this.each(function(){injector($(this),'','char','')})},
			words:function(){return this.each(function(){injector($(this),' ','word',' ')})},
			lines:function(){
				return this.each(function(){
					var r="eefec303079ad17405c889e092e105b0" // Because it's hard to split a <br/> tag consistently across browsers,
					// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
					// (of the word "split").  If you're trying to use this plugin on that
					// md5 hash string, it will fail because you're being ridiculous.
					injector($(this).children("br").replaceWith(r).end(),r,'line','')
				})
			}
		}
		$.fn.lettering=function(method){
			if(method&&methods[method]){return methods[method].apply(this,[].slice.call(arguments,1))}
			else if(method==='letters'|| !method){return methods.init.apply(this,[].slice.call(arguments,0)) } // always pass an array
			$.error('Method '+method+' does not exist on jQuery.lettering');
			return this
		}
		function injector(t,splitter,klass,after){
			var text=t.text(),a=text.split(splitter),inject='';
			if(a.length){
				$(a).each(function(i,item){inject+='<span class="'+klass+(i+1)+'" aria-hidden="true">'+item+'</span>'+after;})
				t.attr('aria-label',text).empty().append(inject)
			}
		}
	};
	letteringPlug()
	LETTERINGPLUG=function(){
		function injector(t,splitter,klass,after){
			var text=t.text()
				,a=text.split(splitter)
				,inject='';
			if(a.length){
				$(a).each(function(i,item){
					inject+='<span class="'+klass+(i+1)+'" aria-hidden="true">'+item+'</span>'+after;
				});
				t.attr('aria-label',text)
					.empty()
					.append(inject)
			}
		}
		
		var methods={
			init:function(){
				return this.each(function(){
					injector($(this),'','char','');
				});
			},
			words:function(){
				return this.each(function(){
					injector($(this),' ','word',' ');
				});
			},
			lines:function(){
				return this.each(function(){
					var r="eefec303079ad17405c889e092e105b0";
					// Because it's hard to split a <br/> tag consistently across browsers,
					// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
					// (of the word "split").  If you're trying to use this plugin on that
					// md5 hash string, it will fail because you're being ridiculous.
					injector($(this).children("br").replaceWith(r).end(),r,'line','');
				});
			}
		};
		$.fn.lettering=function(method){
			// Method calling logic
			if(method&&methods[method]){
				return methods[method].apply(this,[].slice.call(arguments,1));
			}else if(method==='letters'|| !method){
				return methods.init.apply(this,[].slice.call(arguments,0)); // always pass an array
			}
			$.error('Method '+method+' does not exist on jQuery.lettering');
			return this;
		};
	};
	LETTERINGPLUG()
	LETTERING=function(){
		$.x()
		sp=$.sp('hello').A()
		sp.lettering(); // wrap <span class="charx"/ > around each character within header
		$spans=sp.fi('span')
		$('.dropped span')
			.css({
				transition:'all 0.3s ease-in'
			})
	}
	LETTERING=function(){
		z()
		span=$.sp('hello').A()
		span.lettering() // wrap <span class="charx"/ > around each character within header
		$spans=span.find('span')
		$('.dropped span').css({transition:'all 0.3s ease-in'})
	}
	FALLING=function(){
		z()
		//this goes in css
		$header2=$.sp('hello').A()
		$header2.lettering() // wrap <span class="charx"/ > around each character within header
		$spans=$header2.find('span')
		delay=0
		$header2.on('click',function(){
			$spans.each(function(){
				$(this).css({transitionDelay:delay+'s'}) // apply sequential trans delay to each character
				delay+=0.1
			})
			$header2.K('dropped') // Add "dropped" class to header to apply transition
			setTimeout(function(){ // reset header code
				$spans.each(
					function(){
						$(this).css({
							transitionDelay:'0ms'
						})
					})
				// set transition delay to 0 so when 'dropped' class is removed,
				// letter appears instantly
				$header2.removeClass('dropped') // remove class at the "end" to reset header.
				delay=0
			},1800) // 1800 is just rough estimate of time transition will finish, not the best way
		})
	}
	function lettering(){
		LETTERING=function(){
			z()
			LETTERINGPLUG=function(){
				function injector(t,splitter,klass,after){
					var text=t.text()
						,a=text.split(splitter)
						,inject='';
					if(a.length){
						$(a).each(
							function(i,item){
								inject+='<span class="'+klass+(i+1)+'" aria-hidden="true">'+item+'</span>'+after;
							}
						);
						t.attr('aria-label',text)
							.empty()
							.append(inject)
					}
				}
				
				var methods={
					init:function(){
						return this.each(
							function(){
								injector($(this),'','char','');
							}
						);
					},
					words:function(){
						return this.each(
							function(){
								injector($(this),' ','word',' ');
							}
						);
					},
					lines:function(){
						return this.each(
							function(){
								var r="eefec303079ad17405c889e092e105b0";
								// Because it's hard to split a <br/> tag consistently across browsers,
								// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
								// (of the word "split").  If you're trying to use this plugin on that
								// md5 hash string, it will fail because you're being ridiculous.
								injector($(this).children("br").replaceWith(r).end(),r,'line','');
							}
						);
					}
				};
				$.fn.lettering=function(method){
					// Method calling logic
					if(method&&methods[method]){
						return methods[method].apply(this,[].slice.call(arguments,1));
					}else
						if(method==='letters'|| !method){
							return methods.init.apply(this,[].slice.call(arguments,0)); // always pass an array
						}
					$.error('Method '+method+' does not exist on jQuery.lettering');
					return this;
				};
			};
			LETTERINGPLUG()
			span=$.span('hello').A()
			span.lettering() // wrap <span class="charx"/ > around each character within header
			$spans=span.find('span')
			$('.dropped span').css({transition:'all 0.3s ease-in'})
		}
		LETTERING=function(){
			$.x()
			sp=$.sp('hello').A()
			sp.lettering(); // wrap <span class="charx"/ > around each character within header
			$spans=sp.fi('span')
			$('.dropped span')
				.css(
				{
					transition:'all 0.3s ease-in'
				}
			)
		}
		FALLING=function(){
			z();
			//this goes in css
			$header2=$.sp('hello').A();
			$header2.lettering(); // wrap <span class="charx"/ > around each character within header
			$spans=$header2.fi('span');
			delay=0;
			$header2.$(
				function(){
					$spans.e(
						function(){
							$(this).css({transitionDelay:delay+'s'}); // apply sequential trans delay to each character
							delay+=0.1
						}
					);
					$header2.K('dropped'); // Add "dropped" class to header to apply transition
					setTimeout(
						function(){ // reset header code
							$spans.e(
								function(){
									$(this).css({transitionDelay:'0ms'})
								}
							);
							// set transition delay to 0 so when 'dropped' class is removed,
							// letter appears instantly
							$header2.removeClass('dropped'); // remove class at the "end" to reset header.
							delay=0
						},1800
					); // 1800 is just rough estimate of time transition will finish, not the best way
				}
			)
		}
		FALLING=function(){
			z()
			//this goes in css
			$header2=$.span('hello').A()
			$header2.lettering() // wrap <span class="charx"/ > around each character within header
			$spans=$header2.find('span')
			delay=0
			$header2.on(
				'click',function(){
					$spans.each(
						function(){
							$(this).css({transitionDelay:delay+'s'}) // apply sequential trans delay to each character
							delay+=0.1
						}
					)
					$header2.K('dropped') // Add "dropped" class to header to apply transition
					setTimeout(
						function(){ // reset header code
							$spans.each(
								function(){
									$(this).css(
										{
											transitionDelay:'0ms'
										}
									)
								}
							)
							// set transition delay to 0 so when 'dropped' class is removed,
							// letter appears instantly
							$header2.removeClass('dropped') // remove class at the "end" to reset header.
							delay=0
						},1800
					) // 1800 is just rough estimate of time transition will finish, not the best way
				}
			)
		}
	}
}
function anim(){
	$.fn.ss=function(){
		var g=G(arguments),
			qs=$.qs(g.f)
		$l('$.s')
		$d(qs)
		g.f=qs
		this.css.apply(this,g)
		return this
	}
	$.fn.st=$.fn.stop
	$.fn.fT=$.fn.f2=$.fn.fadeTo
	$.fn.an=function(a,b,c,d){
		$l('$.fn.an')
		var g=G(arguments),
			q=this
		//if (N(g.s)) {g.s *= 1000}
		this.animate($.qs(g.f),g.s,g.t,g[3],g[4])
		return this
	}
	$.notAn=function(a){
		return a.filter(':not(:animated)')
	}
	quu()
	function quu(){
		$.fn.qu=$.fn.queue
		$.fn.dq=$.fn.dqu=$.fn.dequeue
		$.fn.cQ=$.fn.xq=$.fn.xQ=$.fn.clrQ=$.fn.clearQueue
		QUU=function(){
			$.x('x','quu')
			//  Qu   allow series fns to be execd asynch on an el
			//  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
			//
			// which levgs qus to build up   series of steps
			// that will transtn  1+ CSS vals thru/out the dur
			//  can pass a cb fn to  .an()  to exec on done
			x=$('.x')
			x.an(
				{height:20},"slow",
							function(){
								$("#title").html("in cb")
							}
			)
			//   *Ques As Cbs
			// Instead of passing a cb as an argument,
			// we can add another function to the queue
			// that will act as our cb
			// This will execute
			// after all of the steps in the
			// anim  have completed.
			x.an(
				{height:20},
				"slow"
			).qu(
				function(){
					$("#title").h("in anim")
					$(this).dq()
				}
			)
				//  tells jQ  to continto N-item in  que
				//    queued fn will exec   after the anim
				//  jQuery does not have any insight into
				// how the queue items function,
				// so we need to call .dequeue(),
				// which tells jQuery when to move to the n item in the queue.
				//  Another way of dequeuing
				// is by calling the fn that is passed to your cb
				// That fn will auto  call .dq() for you
				.qu(
				function(n){
					$l("I fired!");
					n()
				}
			)
			//  *Custom Queues
			// Up to this point all of our anim
			// and qu   ex  have been using the def qu  n  which is fx.
			// Elements can have multiple queues
			// attached to them,
			// and we can give each of these qusa dif  name.
			// We can specify a custom queue name as
			// the 1st arg  to the .qu() method.
			x.qu(
				'an',function(n){
					$l("Step 1");
					n()
				}
			).qu(
				'an',function(n){
					$l("Step 2");
					n()
				}
			).dq('an');
			//  Notice that we have to call the .dequeue() method passing it the name of our custom queue to start the execution. Every queue except for the default, fx, has to be manually kicked off by calling .dequeue() and passing it the name of the queue.
			//   Clearing The Que
			//  Since queues are just a set of ordered operations, our application may have some logic in place that needs to prevent the remaining queue entries from executing. We can do this by calling the .clearQueue() method, which will empty the queue.
			x.qu(
				'an',function(n){
					$l("nev log (qu clrd)");
					n()
				}
			)
				.clrQ('an').dq('an')
			//   In this example, nothing will happen as we removed everything from the steps queue.
			//   Another way of clearing the queue is to call .stop( true ). That will stop the currently running animations and will clear the queue.
			//  *Replacing The Queue:  When you pass an array of functions as second argument to .queue(), that array will replace the queue.
			x.qu(
				'an',
				function(n){
					$l("nev fire (qu replaced)");
					n()
				}
			)
				.qu(
				'an',[
					function(n){
						$l("fired!");
						n()
					}
				]
			).dq('an')
			//
			// You can also call .queue() without passing it functions, which will return the queue of that element as an array.
			x.qu(
				'an',function(n){
					$l("fired!");
					n()
				}
			)
			$l(x.qu('an'))
			//x.du('an')
		}
	}
	
	$.an=function(){
		var bd=$.bd();
		return bd.j.apply(bd,G(arguments))
	}
	function frames(){
		$.fn.gFr=$.fn.getFrame
		$.fn.sFr=$.fn.setFrame
		$.anFr=$.aF=$.anf=function(n,w){
			var c=0;
			n=n||10;
			w=w||20;
			_.ev(
				function(){
					q.sFr(c,w);
					c=(c+1)%n
				}
			)
		}
		//= $.fn.animateFrames
		anf=q.anFr=function(n,w){
			var c=0;
			n=n||10;
			w=w||20
			_.ev(
				function(){
					q.sFr(c,w);
					c=(c+1)%n
				}
			)
		}
		q.bgI=function(url){//set background image
			var toUrl=function(url){
				return 'url("'+src(url)+'")'
			}
			q.backgroundImage(toUrl(url))
			return q
		}
		q.stFr=function(n,w){
			if(O(n)){
				q.bp(n.n,n.w)
			}
			else{
				q.bp(n*w)
			}
			return q
		}
		anim=function(o){
			o=o||{};
			return {
				u:o.u||'chicks',
				n:o.n||1,
				w:o.w||64,
				r:o.r||60,
				c:o.c||0,
				l:o.l||false
			}
		}
		an=function(q,a){
			if(q.han){
				_.cI(q.han)
			}
			if(a.u){
				q.bgI(a.u)
			}
			if(a.n>1){
				q.han=_.sI(
					function(){
						a.c++;
						if(!a.l&&a.c>a.n){
							_.cI(q.han);
							q.han=false
						}
						else{
							a.c%=a.n
						}
						q.sFr(a)
					},a.r
				)
			}
		}
		ANF=function(){
			$.x('s','jqanim')
			a=$.dA().bgI('chicks').anFr()
			q.bgI=function(x,y){
				var g=G(arguments),x=g[0],y=g[1]
				x=N(x)?x:0
				y=N(y)?y:0
				q.css(
					{
						bgP:x+'px '+y+'px'
					}
				)
				return q
			}
		}
	}
	 
	old=function(){
		animate$=function(q,a){
			if(q.han){
				_.xI(q.han)
			}
			if(a.u){
				q.bi(a.u)
			}
			if(a.n>1){
				q.han=_.sI(
					function(){
						a.c++
						if(!a.l&&a.c>a.n){
							_.xI(q.han);
							q.han=false
						}
						else{
							a.c%=a.n
						}
						q.sFr(a)
					},a.r
				)
			}
		}
		AnOb={
			B:'bottom',L:'left',R:'right',T:'top',
			b:'borderWidth',bb:'borderBottomWidth',
			bl:'borderLeftWidth',br:'borderRightWidth',
			bt:'borderTopWidth',bs:'borderSpacing',
			C:'backgroundColor',f:'fontSize',h:'height',w:'width',H:'maxHeight',W:'maxWidth',
			mh:'minHeight',mw:'minWidth',
			i:'textIndent',l:'letterSpacing',lh:' lineHeight',
			m:' margin',mb:'marginBottom',ml:'marginLeft',mr:'marginRight',
			mt:'marginTop',o:' outlineWidth',
			p:' padding',pb:'paddingBottom',
			pl:'paddingLeft',pr:'paddingRight',pt:'paddingTop',
			ws:' wordSpacing',x:'backgroundPositionX',y:'backgroundPositionY'
		}
	}
}
function animApps(){
		
		//all are working!
		NOTAN=function(){
			$.x()
			var s=1000,
				m=function(n){
					return {marginLeft:n}
				},
				n=0
			d=$.dI('test').A(y=$.c('x',40).K('box'))
			d2=$.dI('debug')
			$('#test').$(
				function(){
					$.notAn($('.box')).an(
						{marginLeft:-10},s,
										 function(){
											 $('#debug').A($.p('start..'+n++))
										 }
					)
						.an({marginLeft:10},s).an({marginLeft:-10},s)
						.an({marginLeft:10},s).an({marginLeft:-10},s)
						.an({marginLeft:-10},s).an(
						{marginLeft:0},s,
									   function(){
										   $('#debug').A($.p('fin'))
									   }
					)
				}
			)
		}
		HOVERBOX=HVBX=function(){
			$.x()
			$.hvBx=$.hoverBox=function(){
				z()
				d=$.d('o',500,500,'+').id('test')
				y=$.c('p',400).K('box').hd()
				d.A(y)
				$('#test').hv(
					function(){
						$('.box').st().f2(200,1)
					},
					function(){
						$('.box').stop().f2(200,0)
					}
				)
			}
			$.hvBx()
			function alt(){
				z();
				d=$.d('o',500,500,'+').id('test')
				y=$.c('p',400).K('box').hd();
				d.A(y);
				$('#test').hover(
					function(){
						$('.box').stop().fadeTo(200,1)
					},function(){$('.box').stop().fadeTo(200,0)}
				)
			}
		}
		FRIDGEMAG=MAG=WORD=function(){
			z();
			w=word('hello','b','g');
			word('sicko','g','b');
			word('why, i oughta..','p','x');
			word('it was raining..','j','k');
			word('who ya gonna call?','h','i');
			word('dag nabit!','f','g');
			word('i like','d','e');
			word('tomorrow','a','c');
			word('me','r','b')
			function word(t,c1,c2){
				return $.sp(t).C(c1,c2).A().dg()
			}
		}
		ANIMLOOP=ANL=function(){
			$.fn.anL=function(){
				var q=this
				q.sh("slow").an({mL:300},2000)
					.an({mL:0},2000)
					.hd(
					"slow",function(){
						q.anL()
					}
				)
			}
			$.d('b',100,300).anL()
		}
		COLORANIM=CANIM=function(){
			$.x()
			$CSS(
				{
					$el:{
						C:'#aaa',c:'#006',fZ:25,
						tA:'c',P:'1em'
					}
				}
			)
			$.dI('el',['-color anim-'])
			$.bt(
				'anim!',function(){
					$("#el").an({c:'g',C:"rgb(20,20,20)"})
				}
			)
			/*
			 Color Animation
			 jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.
		
			 The following properties are supported:
		
			 backgroundColor
			 borderBottomColor
			 borderLeftColor
			 borderRightColor
			 borderTopColor
			 color
			 columnRuleColor
			 outlineColor
			 textDecorationColor
			 textEmphasisColor
			 Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.
		
			 Class Animations
			 While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.
		
			 link
			 */
		}
		BORDERS=function(){
			z();
			$.fn.an=$.fn.animate
			_.t(10,change)
			function change(){
				$.i('me',100).A().C('g')
					.css(
					{
						borderStyle:'dashed',borderWidth:'20px'
					}
				)
					.animate(
					{
						"border-top-width":10
					},1000
				)
					.an({"border-bottom-width":10},1000)
					.an({"border-left-width":10},1000)
					.an({"border-right-width":10},1000)
					.an({"padding-top":10},1000)
					.an({"padding-bottom":10},1000)
					.an({"padding-left":10},1000)
					.an({"padding-right":10},1000)
					.an({"margin-top":10},1000)
					.an({"margin-bottom":10},1000)
					.an({"margin-left":10},1000)
					.an({"margin-right":10},1000)
					.an({"margin-top":0},1000)
					.an({"margin-bottom":0},1000)
					.an({"margin-left":0},1000)
					.an({"margin-right":0},1000)
					.an({"padding-top":0},1000)
					.an({"padding-bottom":0},1000)
					.an({"padding-left":0},1000)
					.an({"padding-right":0},1000)
					.an({"border-top-width":0},1000)
					.an({"border-bottom-width":0},1000)
					.an({"border-left-width":0},1000)
					.an({"border-right-width":0},1000)
			}
			
			/*
			 $.img('me').WH(100).A().C('g').bs('-')  //bs??
		
			 .j({bt: 40}, 1000)
		
			 .j({bb: 40}, 1000)
			 .j({bl: 40}, 1000)
			 .j({br: 40}, 1000)
			 .j({gt: 40}, 1000)
			 .j({gb: 40}, 1000)
			 .j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
			 .j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
			 .j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
			 .j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
			 .j({bt: 0}, 1000)
			 .j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
			 };
			 */
		}
		COOLSEL1=function(){
			$.x()
			// rather than worry about synchronization between each panel
			//we will take last li in ul.k(panels) and position it to top right
			//of ul - this way,  when he sum width of all the panels occasionally
			//adds to greater than 100 percent of the ul as they animate..
			//the last li never breaks to the next line
			$.coolSelector=function(){
				var s=200
				d=$.dK(
					'container',[
						$.dK('panels').A($.sp('1'),$.sp('2'),$.sp('3'),$.sp('4'),$.sp('5')),
						$.dK('panels').A($.sp('A'),$.sp('B'),$.sp('C'),$.sp('D'),$.sp('E'))
					]
				)
				$('span').css({width:'100px',fontSize:'40px'})
				//$('span').ss({w: 100, fZ: 40})
				if($('div.panels').length){
					$('div.panels span:last-child').K('last')
					$('div.panels span').hv(
						function(){
							$(this).st().an({width:'110px',fontSize:'50px'},s)
								.sib('span').st().an({width:'90px',fontSize:'30px'})
						},
						function(){
							$(this).st().an({w:90,fZ:30})
						}
					)
				}
			}
			$.coolSelector()
		}
		COOLSEL=function(){
			$.x()
			$l('COOLSEL')
			// rather than worry about synchronization between each panel
			//we will take last li in ul.k(panels) and position it to top right
			//of ul - this way,  when he sum width of all the panels occasionally
			//adds to greater than 100 percent of the ul as they animate..
			//the last li never breaks to the next line
			var s=200;
			d=$.dK(
				'container',[
					$.dK('panels',[$.sp('1'),$.sp('2'),$.sp('3'),$.sp('4'),$.sp('5')]),
					$.dK('panels',[$.sp('A'),$.sp('B'),$.sp('C'),$.sp('D'),$.sp('E')])
				]
			)
			$('span').ss({w:200,fZ:160})
			if(_.z($('div.panels'))){
				$('div.panels span:last-child').K('last');
				$('div.panels span').hv(
					function(){
						$(this)
							.st().an({w:110,fZ:50},s)
							.sb('span').st().an({w:90,fZ:30})
					},
					function(){
						$(this)
							.st().an({w:'90px',fZ:'30px'})
					}
				)
			}
		}
		TOCAN=function(){
			z();
			c=$.c('o',500,500);
			//c.save().lineWidth(30).setStrokeColor('r').lineTo([[100,100],[150,110]]).stroke().restore().lineTo([[200,100],[200,600]]).stroke()
			// c.roundRect(100,50,100,100,50).stroke()//.fill()
			//c.line(10,10,50,500).stroke()
			c.line(
				[
					[[100,100],[200,200],[140,900]]
					// ,  [[150,150],[250,250], [20,300]]
				]
			).stroke();
			//c.line([100,100],[200,200],[150,150],[250,250] ).stroke()
			//c.line( [350,50],[25,25],  [450,10],[20,550]).stroke()
		}
		FLASH=function(){
			z()
			timeline=$.dA().WH('auto').dg()
			timeline.A(
				$.c('b',500,500),
				$.br()
			)
			_.t(
				24,function(x){
					timeline.A(
						$.d('r',100,100)
							.css({display:'inline-block'}).H((x*10)+100)
					)
				}
			)
			function alt(){
				z();
				timeline=$.dA('+').WH('auto');
				timeline.A($.c('b',500,500),$.br());
				_.t(
					24,function(x){
						timeline.A(
							$.d('r',100,100).css({display:'inline-block'}).H((x*10)+100)
						)
					}
				)
			}
		}}

function loadSerJLib(){
	// jQuery('form').serializeJSON()
	$.fn.serializeJSON=function(options){
		var serializedObject,formAsArray,keys,value,f,opts;
		f=$.serializeJSON;
		formAsArray=this.serializeArray(); // array of objects {name, value}
		opts=f.optsWithDefaults(options); // calculate values for options {parseNumbers, parseBoolens, parseNulls}
		serializedObject={};
		$.each(
			formAsArray,function(i,input){
				keys=f.splitInputNameIntoKeysArray(input.name); // "some[deep][key]" => ['some', 'deep', 'key']
				value=f.parseValue(input.value,opts); // string, number, boolean or null
				if(opts.parseWithFunction) value=opts.parseWithFunction(value); // allow for custom parsing
				f.deepSet(serializedObject,keys,value,opts);
			}
		);
		return serializedObject;
	}
	// Use $.serializeJSON as namespace for the auxiliar functions
	// and to define defaults
	$.serializeJSON={
		defaultOptions:{
			parseNumbers:false, // convert values like "1", "-2.33" to 1, -2.33
			parseBooleans:false, // convert "true", "false" to true, false
			parseNulls:false, // convert "null" to null
			parseAll:false, // all of the above
			parseWithFunction:null, // to use custom parser, use a function like: function (val) => parsed_val
			useIntKeysAsArrayIndex:false // name="foo[2]" value="v" => {foo: [null, null, "v"]}, instead of {foo: ["2": "v"]}
		},
		// Merge options with defaults to get {parseNumbers, parseBoolens, parseNulls, useIntKeysAsArrayIndex}
		optsWithDefaults:function(options){
			var f,parseAll;
			if(options==null) options={}; // arg default value = {}
			f=$.serializeJSON;
			parseAll=f.optWithDefaults('parseAll',options);
			return {
				parseNumbers:parseAll||f.optWithDefaults('parseNumbers',options),
				parseBooleans:parseAll||f.optWithDefaults('parseBooleans',options),
				parseNulls:parseAll||f.optWithDefaults('parseNulls',options),
				parseWithFunction:f.optWithDefaults('parseWithFunction',options),
				useIntKeysAsArrayIndex:f.optWithDefaults('useIntKeysAsArrayIndex',options)
			}
		},
		optWithDefaults:function(key,options){
			return (options[key]!==false)&&(options[key]||$.serializeJSON.defaultOptions[key]);
		},
		// Convert the string to a number, boolean or null, depending on the enable option and the string format.
		parseValue:function(str,opts){
			var value,f;
			f=$.serializeJSON;
			if(opts.parseNumbers&&f.isNumeric(str)) return Number(str); // number
			if(opts.parseBooleans&&(str==="true"||str==="false")) return str==="true"; // boolean
			if(opts.parseNulls&&str=="null") return null; // null
			return str; // otherwise, keep same string
		},
		isObject:function(obj){ return obj===Object(obj); }, // is this variable an object?
		isUndefined:function(obj){ return obj=== void 0; }, // safe check for undefined values
		isValidArrayIndex:function(val){ return /^[0-9]+$/.test(String(val)); }, // 1,2,3,4 ... are valid array indexes
		isNumeric:function(obj){ return obj-parseFloat(obj)>=0; }, // taken from jQuery.isNumeric implementation. Not using jQuery.isNumeric to support old jQuery and Zepto versions
		// Split the input name in programatically readable keys
		// "foo" => ['foo']
		// "[foo]" => ['foo']
		// "foo[inn][bar]" => ['foo', 'inn', 'bar']
		// "foo[inn][arr][0]" => ['foo', 'inn', 'arr', '0']
		// "arr[][val]" => ['arr', '', 'val']
		splitInputNameIntoKeysArray:function(name){
			var keys,last,f;
			f=$.serializeJSON;
			if(f.isUndefined(name)){
				throw new Error("ArgumentError: param 'name' expected to be a string, found undefined");
			}
			keys=$.map(
				name.split('['),function(key){
					last=key[key.length-1];
					return last===']'?key.substring(0,key.length-1):key;
				}
			);
			if(keys[0]===''){
				keys.shift();
			} // "[foo][inn]" should be same as "foo[inn]"
			return keys;
		},
		// Set a value in an object or array, using multiple keys to set in a nested object or array:
		//
		// deepSet(obj, ['foo'], v) // obj['foo'] = v
		// deepSet(obj, ['foo', 'inn'], v) // obj['foo']['inn'] = v // Create the inner obj['foo'] object, if needed
		// deepSet(obj, ['foo', 'inn', '123'], v) // obj['foo']['arr']['123'] = v //
		//
		// deepSet(obj, ['0'], v) // obj['0'] = v
		// deepSet(arr, ['0'], v, {useIntKeysAsArrayIndex: true}) // arr[0] = v
		// deepSet(arr, [''], v) // arr.push(v)
		// deepSet(obj, ['arr', ''], v) // obj['arr'].push(v)
		//
		// arr = [];
		// deepSet(arr, ['', v] // arr => [v]
		// deepSet(arr, ['', 'foo'], v) // arr => [v, {foo: v}]
		// deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}]
		// deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}, {bar: v}]
		//
		deepSet:function(o,keys,value,opts){
			var key,nextKey,tail,lastIdx,lastVal,f;
			if(opts==null) opts={};
			f=$.serializeJSON;
			if(f.isUndefined(o)){
				throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined");
			}
			if(!keys||keys.length===0){
				throw new Error("ArgumentError: param 'keys' expected to be an array with least one element");
			}
			key=keys[0];
			// Only one key, then it's not a deepSet, just assign the value.
			if(keys.length===1){
				if(key===''){
					o.push(value); // '' is used to push values into the array (assume o is an array)
				}else{
					o[key]=value; // other keys can be used as object keys or array indexes
				}
				// With more keys is a deepSet. Apply recursively.
			}else{
				nextKey=keys[1];
				// '' is used to push values into the array,
				// with nextKey, set the value into the same object, in object[nextKey].
				// Covers the case of ['', 'foo'] and ['', 'var'] to push the object {foo, var}, and the case of nested arrays.
				if(key===''){
					lastIdx=o.length-1; // asume o is array
					lastVal=o[lastIdx];
					if(f.isObject(lastVal)&&(f.isUndefined(lastVal[nextKey])||keys.length>2)){ // if nextKey is not present in the last object element, or there are more keys to deep set
						key=lastIdx; // then set the new value in the same object element
					}else{
						key=lastIdx+1; // otherwise, point to set the next index in the array
					}
				}
				// o[key] defaults to object or array, depending if nextKey is an array index (int or '') or an object key (string)
				if(f.isUndefined(o[key])){
					if(nextKey===''){ // '' is used to push values into the array.
						o[key]=[]
					}else
						if(opts.useIntKeysAsArrayIndex&&f.isValidArrayIndex(nextKey)){ // if 1, 2, 3 ... then use an array, where nextKey is the index
							o[key]=[]
						}else{ // for anything else, use an object, where nextKey is going to be the attribute name
							o[key]={}
						}
				}
				// Recursively set the inner object
				tail=keys.slice(1)
				f.deepSet(o[key],tail,value,opts)
			}
		}
	}
}
MARGINAUTO=function(){
	z()
	o=outer=$.div('b',500,500).A()
	o.A(i=inner=$.div('r',100,100))
	i.mar('auto')
	o.mar('auto')
}
LJQFN=function(){
	z()
	css={}
	css.redDivs={
		div:{
			C:'v',c:'p',
			M:20,P:40,h:420
		},
		span:{
			C:'x'
		}
	}
	css.big={div:{fZ:100}}
	$CSS(css.redDivs)
	$CSS(css.big)
	d=$.d().A('hello').A($.sp('why not span'))
	$.d().A('nice day')
	$.d().A('see ya')
	$('div').e(
		function(){
			console.log('this:',this)
		}
	)
	p=$('span').p()//.C('z')
	//r=	$('body').f('div').C("b")//.r()
}