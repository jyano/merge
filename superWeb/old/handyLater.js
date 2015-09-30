$.d=$.div=function(c,w,h){
	var g=G(arguments),
		d=$('<div>'),
		o=g.O?g.f:
		  g.S_?{c:g.f,w:g.s,h:g.t,x:g[3],y:g[4]}:
		  {w:g.f,h:g.s,x:g.t,y:g[3]}
	if(N(o.w)){
		d.W(o.w)
	}
	if(N(o.h)){
		d.H(o.h)
	}
	if(g.p){
		d.drag()
	}
	if(!g.n){
		d.A()
	}
	if(N(o.x)){
		d.ab(o.x,N(o.y,0))
	}
	return d.C(o.c||'t').A()
}
$.dA=$.divA=function(c,w,h,x,y){
	var g=G(arguments),
		d=$.d().P('absolute'),
		o=g.O?g.f:
		  g.S_?{c:g.f,w:g.s,h:g.t,x:g[3],y:g[4]}:
		  {w:g.f,h:g.s,x:g.t,y:g[3]}
	if(N(o.w)){
		d.W(o.w)
	}
	if(N(o.h)){
		d.H(o.h)
	}
	return d.XY(N(x,0),N(y,0)).C(o.c||'o')
}
$.dD=$.divD=function(c,w,h,x,y){
	var d,g=G(arguments)
	w=N(w,200)
	h=N(h,w)
	d=$.d(200,200,'+')
	if(g.u){
		return d.C('n')
	}
	if(g.S_){
		d.C(c)
		if(N(w)){
			d.W(w)
		}
		if(N(h)){
			d.H(h)
		}
		if(N(x)){
			d.X(x)
		}
		if(N(y)){
			d.Y(y)
		}
		return d
	}
	if(g.N_){
		return $.dD('o',c,w,h,x)
	}
}
$.fn.rm=$.fn.xx=function(){
	var e=this
	e.remove()
	return e
}
$.fn.P1=function(pos,x,y){
	if(U(pos)){
		return this.css('position')
	}
	this.css('position',oO('p',pos))
	if(N(x)){
		this.X(x)
	}
	if(y){
		this.Y(y)
	}
	return this
}
$.hr=function f(color,h,w){
	if(N(color)){
		return f('z',color,h)
	}
	var hr=$('<hr>').H(h||2).C(color||'z')
	if(w){
		hr.W(w)
	}
	return hr
}
$.p=function(){
	pg=$('<p>')
	_.each(
		arguments,
		function(arg){
			pg.A(arg)
		}
	)
	return pg
}
$.paragraphs=function(){
	var span=$.span()
	_.each(
		arguments,function(arg){
			span.A($.p(arg))
		}
	)
	return span
}
$.liA=$.lIA=function(a,f){
	var anchor=$('<a>').id(a).attr('href','#')
	if(S(a)){
		anchor.html(a)
	}else{
		anchor.A(a)
	}
	if(F(f)){
		anchor.click(f)
	}else{
		anchor.href(f||'#')
	}
	return $('<li>').A(anchor)
}
function hTags(){
	$.h1=function(){
		var h=$('<h1>')
		h.A.apply(h,G(arguments))
		return h
	}
	$.h2=function(){
		var h=$('<h2>')
		h.A.apply(h,G(arguments))
		return h
	}
	$.h3=function(){
		var h=$('<h3>')
		h.A.apply(h,G(arguments))
		return h
	}
	$.h4=function(){
		var h=$('<h4>')
		h.A.apply(h,G(arguments))
		return h
	}
	$.h5=function(){
		var h=$('<h5>')
		h.A.apply(h,G(arguments))
		return h
	}
	$.h6=function(){
		var h=$('<h6>')
		h.A.apply(h,G(arguments))
		return h
	}
}
function inputs(){
	$.bt=$.button=function(buttonText,func){
		if(F(buttonText)){
			return $.button('submit',buttonText)
		}
		var b=$('<button>')
		b.text(buttonText)
		b.click(func)
		return b
	}
	$.btL=$.buttonL=function(buttonText,func){
		if(F(buttonText)){
			return $.button('submit',buttonText)
		}
		var b=$('<button>')
		b.text(buttonText)
		b.click(func)
		return b.K('btn-lg')
	}
	$.btM=$.buttonM=function(text,func){
		return $.button(text,func).C('blue').K("btn btn-mini")
	}
	$.sm=$.submit=$.submitButton=function(buttonText,func){
		return $.button(buttonText,func).type('submit')
	}
	$.btL=$.buttonLarge=function(t,f,C,c){
		var g=G(arguments),
			t=g[0],f=g[1],C=g[2],c=g[3],
			t=t||'ok',
			k='btn-lg',
			C=C||'b',
			c=c||'y'
		b=qq('b').ty('b').k('btn').k('btn-lg').c(C,c)
		b(t)
		if(f){
			b.o(f)
		}
		if(g.n){
			b.dd()
		}//dropdown
		return b
	}
	$.smBt=$.submitButton=function(){
		var args=G(arguments),
			button=$button.apply(0,args)
		return button.type('submit')
	}
	//floating div of buttons
	$.bts=$.buttons=function(a,b){
		var g=G(arguments),d=dva(2)
		if(g.p){
			return bts(['start',a],['stop',b]).auto()
		}
		_.each(
			g,function(v){
				v=A(v)?v:[v]
				d(
					$button(v[0],v[1]).k(g.p?('fc'):'').M(4)
				)
			}
		)
		return d
	}
	$.btR=$.buttonRight=function(text,func){
		var b=$.button(text,func).float('right')//.display('block')
		return b
	}
	$.btL=$.buttonLeft=function(text,func){
		var b=$.button(text,func).float('left')//.display('block')
		return b
	}
	testButtonRight=function(){
		z()
		d=$.div('b',500,500).drag()
		d.A(
			b=$.buttonRight('yes')
		)
	}
	$.submit2=sm=function(a){
		var g=G(arguments)
		if(g.p){
			return $button().type('submit').k('btn btn-mini button-default').T(ok(a))
		}
		return ip('submit').k('show').v(ok(a))
	}
	$.f=$.form=function(color,action){
		var g=G(arguments),
			color=g[0],
			action=g[1],
			form=$('<form>').K('form')
		if(g.N){
			form.attr({method:'post'})
		}
		if(D(color)){
			form.C(color)
		}
		if(action){
			form.attr({action:action})
		}
		return form
	}
	function form(){
		$.formGet=function(color,action){
			var g=G(arguments),color=g[0],action=g[1],
				form=$.form().K('form').attr('method','get')
			if(color){
				form.C(color)
			}
			if(action){
				form.attr({action:action})
			}
			return form
		}
		$.formInline=function(a,b){
			var form=$.form().C('blue').K('form-inline form-group')
			var args=G(arguments)
			_.each(
				args,function(arg){
					form.A(arg)
				}
			)
			if(args.p){
				form.A($.submit('ok'))
			}
			return form
		}
		$.formRight=function(a,b){
			var form=$.form().C('blue').K('form navbar-form navbar-right')
			var args=G(arguments)
			_.each(
				args,function(arg){
					form.A(arg)
				}
			)
			if(args.p){
				form.A($.submit('ok'))
			}
			return form
		}
		$.formFalse=function(a,b){
			var form=$.form().C('blue').K('form well').attr({method:false,action:false})
			var args=G(arguments)
			_.each(
				args,function(arg){
					form.A(arg)
				}
			)
			if(args.p){
				form.A($.submit('ok'))
			}
			return form
		}
		testForm=function(){
			z()
			return $.form().A(
				$.sel(
					['single'],
					'Single',
					'Single2'
				),
				$.sel(
					['multiple','+'],
					'Multiple','Multiple2','Multiple3'
				),
				$.cb(
					['check','check1','ch1'],
					['check','check2','ch2','+']
				),
				$.rb(
					['radio','radio1','r1','+'],
					['radio','radio2','r2'],
					'+'
				),
				$.submit()
			).A()
		}
	}
	
	$.ta=$.textarea=function(rows,cols,Cl,cl){
		var g=G(arguments),
			ta=$('<textarea>')
		Cl=Cl||'pink'
		cl=cl||'black'
		if(g.N){
			ta.K('form-control')
		}
		if(N(rows)){
			ta.attr({rows:rows})
		}
		if(N(cols)){
			ta.attr({cols:cols})
		}
		return ta.C(Cl,cl)
	}
	$.ip=$.input=function(typ,val,Color,color){
		var args=G(arguments),
			input=$('<input>').type(typ||'text').val(val).C('C',Color||'red',color||'blue')
		if(args.N){
			input.K('form-control')
		}
		return input
	}
	$.ip=$.textInput=function(widthOrPlaceHolderValue,id){
		var g=G(arguments),input=$.input().type(type||'text')
		//first arg either sets th width or the placeholder value
		if(N(g[0])){
			input.W(g[0])
		}else{
			input.placeholder(g[0])
		}
		//second arg sets the id
		theTextInput.id(g[1])
		if(g.N){
			input.K('form-control')
		}
		return input
	}
	$.rg=$.range=function(n,m,M){
		m=N(m)?m:0
		M=N(M)?M:100
		n=n||'r'
		var r=$('<input type="range">')
		r.attr({name:n,min:m,max:M})
		return r
	}
	$.rb=function(name,val,label){
		var args=G(arguments),
			checked,
			name=args[0]||'name',
			val=args[1],
			label=args[2]
		if(A(val)){
			val=val[0];
			checked=true
		}
		var I=name+'-'+val,
			V='&nbsp'+val+'&nbsp',
			rbox=$.input().type('radio').name(name).val(val).id(I)
		if(checked){
			rbox.attr({checked:'checked'})
		}
		return l?
			   $.span().A(rbox,$.label(label,I))
			:args.p?
			 $.span().A($.br(),rbox,$.label(V,I))
				   :args.N?
					$.span().A(rbox,$.label(V,I))
				 :rbox
	}
	$.cbWithLb=cbl=function(val,id){
		var args=G(arguments)
		return $.span().A(
			$.checkbox(args[0],args[1],args[2],args[3])
			,$.lb(val,id)
		)
	}
	$.cb=function(name,val,lb){
		var args=G(arguments),
			checked,
			name=args[0],val=args[1],lb=args[2]
		if(A(val)){
			val=val[0];
			checked=true
		}
		var I=name+'-'+val,
			V='&nbsp'+val+'&nbsp',
			cbox=$.input().type('checkbox').name(name).val(val).id(I)
		if(checked){
			cbox.attr({checked:'checked'})
		}
		return lb?$.span().A(cbox,$.lb(l,I))
			:args.p?$.span().A($.br(),cbox,$.lb(V,I))
				   :args.N?$.span().A(cbox,$.lb(V,I))
				 :cbox
	}
	$.cb2=function self(name,val,id,makeDivWithLabel){
		var g=G(arguments)
		name=g[0]||''
		val=g[1]||''
		id=g[2]||''
		cbox=$.input().type('checkbox')
		span=$.span()
		if(A(g[0])){
			_.each(
				g,function(ar){
					span.A(
						self(ar[0],ar[1],ar[2],ar[3]),
						$.lb(ar[1],ar[2])
					)
				}
			)
			return span.A($.br())
		}
		cbox.name(name).val(val).id(id)
		if(g.p){
			cbox.prop('checked',true)
		}
		if(makeDivWithLabel!==false){
			cbox=$.div().K('checkbox').A($.lb(name).prepend(cbox))
		}
		return cbox
	}
	$.rB=$.radioboxGroup=function(n,v){
		var g=G(arguments),n=g[0],v=g[1],s=$.span()
		if(g.p){
			_.each(
				v,function(v){
					s(rb(n,v,'+'))
				}
			)
		}
		else{
			_.each(
				v,function(v){
					s(rb(n,v))
				}
			)
		}
		return s.id(n)
	}
	$.cB=$.checkboxGroup=CheckBoxGroup=cbg=function(n,v){
		var g=G(arguments),n=g[0],v=g[1],s=sp()
		if(g.p){
			_e(
				v,function(v){
					s(cb(n,v,'+'))
				}
			)
		}
		else{
			_e(
				v,function(v){
					s(cb(n,v))
				}
			)
		}
		return s.id(n)
	}
	$.SEL=SEL=function(n,i){
		var g=G(arguments),
			s=_y().nm(n).id(i)
		if(g.N){
			s.k('form-control')
		}
		if(g.p){
			s.at({mutiple:true})
		}
		return s
	}
	$.o=$.option=OP=function(){
		var g=G(arguments),
			o=_o()(g[0])
		o.V(g[0])
		if(g.p){
			o.at({selected:true})
		}
		return o
	}
	$.sl=$.sel=sel=function(){
		var g=G(arguments),
			s=_s(),sl  //if(!A(g.f)){g.unshift( ['select'] )}
		if(A(g.f)){
			sl=_a(SEL,g.f)
			_e(
				g.r,function(v){
					if(S(v)){
						v=OP(v)
					}
					;
					sl(v)
				}
			)
		}
		else{
			sl=_a(SEL)
			_e(
				g,function(v){
					if(S(v)){
						v=OP(v)
					}
					;
					sl(v)
				}
			)
		}
		sl.V=function(v){
			if(U(v)){
				return sl.q.val()
			}
			sl.q.val(v)
			return sl
		}
		sl.o=function(f){
			f=f||alert
			sl.q.change(
				function(){
					f(sl.V())
				}
			)
			return sl
		}
		return sl
	}
	$.inputAndButton=txb=function(btText,form){
		return $.div().A(
			$.input(),
			$.bt(
				btText,function(){
					form.A(input.V())
				}
			)
		).A()
	}
}
$.br=function(a){
	if(U(a)){
		return $('<br>')
	}
	var span=$.span()
	_.times(
		a,
		function(){
			span.A($('<br>'))
		}
	)
	return span
}
$.sp=$.span=function(){
	theSpan=$('<span>');
	_.each(
		arguments,function(val){
			theSpan.A(val)
		}
	);
	return theSpan
}
$.sp2=function(c1,c2){
	return $('<span>').col(c1).C(c2)
}
$.l=$.lb=$.label=function lb(labelText,labelFor,name,placeholder){
	var g=G(arguments),theLabel=$('<label>'),theInput;
	if(!g[0]){
		return theLabel
	}
	theLabel.for(labelFor).K('control-label').html(labelText)
	if(!g[2]){
		return theLabel
	}
	theInput=$.input().id(labelFor).name(name).placeholder(placeholder||'...')
	if(g.N){
		theInput.K('form-control')
	}
	return $.span().A(theLabel,theInput)
}
$.a=function(a,f){
	var g=G(arguments),a=g[0],f=g[1],l
	a=a||''
	l=$('<a>').A(a)//.id(a)
	if(F(f)){
		l.click(f)
	}else{
		l.href(f||'#')
	}
	// if(g.n){ l.K('dropdown-toggle').attr({ 'data-target' : 'dropdown' }) }
	//if(g.p){ l = $.li( l ) }
	//if(g.m){ l = $.li( l ).K('active') }
	return l
}
$.a2=function(a,func){
	var g=G(arguments),a=g[0],f=g[1],
		theEl=qq('a').id(a)(a)
	if(F(func)){
		theEl.o(func)
	}else{
		theEl.hr(func||'#')
	}
	if(g.n){
		theEl.dd()
	}
	//  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"
	if(g.p){
		theEl=li(theEl)
	}
	if(g.m){
		theEl=li(theEl).k('active')
	}
	return theEl
}
$.dropDown=function(a,f){
	var l=$('<a>').id(a).A(a)
	if(F(f)){
		l.click(f)
	}else{
		l.href(f||'#')
	}
	return l.K('dropdown-toggle').attr({'data-target':'dropdown'})
}
$.active=function(a,f){
	var l=$('<a>').id(a).A(a)
	if(F(f)){
		l.click(f)
	}else{
		l.href(f||'#')
	}
	return l.K('active')
}
$.b=function(a){
	var b=$('<b>')
	if(a){
		b=b.A(b)
	}
	return b
}
$.fGD=$.formGroupDiv=function(){
	return $.div().K('form-group').fontSize(20)
}
$.smIp=$.submitInput=function(val){
	var el=$('<input>').attr('type','submit').fontSize(16)
	if(val){
		el.val(val)
	}
	return el
}
$.ip=$.textInput=function(name){
	var el=$('<input>').attr('type','text')
	if(name){
		el.attr({name:name,id:name})
	}
	return el
}
$.pw=$.password=$.passwordInput=function(name){
	var el=$('<input>').attr('type','password')
	if(name){
		el.attr('name',name)
	}
	return el
}
$.password=function(){
	return $('<input type="password">')
}
//pass in size, and then args(contents) as a list (or as an array)
$.col=function(){
	var args=G(arguments),
		div=$.div().addClass('m'+args[0]),
		iter=A(args[1])?args[1]:args.r
	_.each(
		iter,function(v){
			div.A(v)
		}
	)
	return div
}
$.ipsum=function(len){
	len=len||1
	var str=''
	_.t(
		len,function(){
			str=str+
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
		}
	)
	return str
}
$.ipsumP=function(len){
	return $.p().A($.ipsum(len))
}
$.hr2=function(c,h,w){
	var e=qq('hr')
	if(N(c)){
		return hr('z',c,h)
	}
	e.h(h||2)
	e.c(c||'z')
	if(w){
		e.w(w)
	}
	return e
}
$.sp2=function(){
	var args=G(arguments),
		theSpan=$('<span>'),str=''
	_.each(
		args,function(val){
			if(S(val)){
				str+=val
			}
			else{
				theSpan.A(val)
			}
		}
	)
	if(str){
		theSpan.text(str)
	}
	return theSpan
}
function list(){
	$.li=function(){
		var args=G(arguments),
			li=$('<li>')
		_.each(
			args,function(arg){
				li.A(arg)
			}
		)
		if(args.p){
			li.K('active')
		}
		if(args.n){
			li.k('dropdown')
		}
		return li
	}
	$.ul=function(pam){
		if(U(pam)){
			return $('<ul>')
		}
		var tLi=function(a){
			var iLi=function(a){
				return _h('HTMLLIElement',E(a))
			}
			return iLi(a)?a:li(a)
		}
		var g=G(arguments),
			e=qq('ul')
		_e(
			g,function(v){
				if(A(v)){
					e.k(v[0])
				}
				else{
					e(tLi(v))
				}
			}
		)
		if(g.n){
			e.k('ddm')
		}//dropdown menu
		if(g.p){
			e.k('n nbn')
		}//navbar nav
		return e
	}
	$.R=$.row=function(n){
		var div=$.div().addClass('row')
		_.each(
			G(arguments),function(arg){
				div.A(arg)
			}
		)
		return div
	}
	$.tH=$.thead=function(){return _a(qq($('<thead>')),arguments)}
	$.tB=$.tbody=function(){return _a(qq($('<tbody>')),arguments)}
}
$.strong=function(){
	var g=G(arguments),s=qq($('<strong>'))
	_e(g,function(g){s(g)})
	return s
}
$sc=$.section=function(a,b){ return qq($('<section>')).id(a).s(b) }
$.aOld=function(textAndId,hrefOrFunc){
	var args=G(arguments),a=args[0],hrefOrFunc=args[1],
		theEl=qq('a').id(textAndId)(textAndId)
	if(F(hrefOrFunc)){
		theEl.o(hrefOrFunc)
	}
	else{
		theEl.hr(hrefOrFunc||'#')
	}
	return (args.n)?theEl.k("dropdown-toggle") //  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"
		:(args.m)?li(theEl).k('active'):(args.p)?li(theEl)
		:theEl
}
$.headerHuhhhh=function(name,val){return $.input().type('header').name(name).val(val) }
$.header=function(){
	var header=$('<header>');
	return header
}
$.footer=function(){ return $('<footer>') }
$.ol=function(o,b){
	var g=G(arguments),ol=$('<ol>')
	_.each(g,function(v){ ol.A(v) })
	return ol
}
$.td=function(){return $('<td>') }
$.tr=function(){ return $('<tr>') }
$.bold=function(a,k){
	var g=G(arguments),
		h=g.p?'&nbsp;'+a:a;
	return $('<bold>').H(h).k(k)
}
$.iframe=function(){
	z();
	d=dva()
	ifr=qq($('<iframe>'))
	ifr.w(1000).h(1000).c('b')
	ifr.q[0].src='http://www.playboy.com'
	d(ifr).P(30)
}
$.th=function(a){
	var h=qq($('<th>'))
	if(a){
		h(a)
	}
	;
	return h
}
$.inlineDiv=function(a,b,c){
	var theDiv=dv(a,b,c)
	theDiv.display('inline');
	return theDiv
}
$.inlineBlockDiv=function(a,b,c){
	var theDiv=dv(a,b,c)
	theDiv.display('inline-block');
	return theDiv
}
$.dva=function f(r,w,h,l,t){
	
	//color, width, height, left, top
	var g=G(arguments),r=g[0],w=g[1],h=g[2],l=g[3],t=g[4],d
	if(!S(r)){
		return g.n?f($r(),r,w,h,l,'-'):g.p?f($r(),r,w,h,l,'+'):f($r(),r,w,h,l)
	}
	d=_d().p('a').c(r).a();
	if(g.p){
		if(w){
			d.l(w)
		}
		if(h){
			d.t(h)
		}
		;
		d.P(16);
		return d.auto()
	}
	w=w||1
	h=h||w
	d.w(w*100)
	d.h(h*100)
	l=l||0
	t=t||l
	d.l(l*100)
	d.t(t*100)
	if(g.N){
		d.drg()
	}
	return d
}
$l('client html')
short=function(){
	$.br=function(a){
		if(U(a)){
			return $('<br>')
		}
		var sp=$.sp();
		_.t(a,function(){ sp.A($('<br>')) });
		return sp
	}
	$.hr=function(c,h,w){
		var hr=$('<hr>')
		//  if( N(c) ){  return $.hr('z', c, h )  }
		//  hr = $('<hr>').h(h ||2).C(c||'z');
		//  if(w ){ hr.W(w ) }
		return hr
	}
	$.h1=function(){
		var h=$('<h1>');
		h.A.apply(h,G(arguments));
		h.A()
		return h
	}
	$.h2=function(){
		var h=$('<h2>');
		h.A.apply(h,G(arguments));
		h.A()
		return h
	}
	$.h3=function(){
		var h=$('<h3>');
		h.A.apply(h,G(arguments));
		h.A()
		return h
	}
	$.h4=function(){
		var h=$('<h4>');
		h.A.apply(h,G(arguments));
		h.A()
		return h
	}
	$.h5=function(){
		var h=$('<h5>');
		h.A.apply(h,G(arguments));
		h.A()
		return h
	}
	$.h6=function(){
		var h=$('<h6>');
		h.A.apply(h,G(arguments));
		h.A()
		return h
	}
};
short()
$.p=function(){
	var g=G(arguments),p=$('<p>')
	if(g.A_){
		g.eF(function(g){p.A(g)})
	}
	else{
		g.e(
			function(g){
				p.A(g)
			}
		)
	}
	p.A()
	return p
}
$.ps=function(){
	var sp=$.sp(),g=G(arguments)
	g.e(function(g){sp.A($.p(g))})
	return sp
}
$.i=$.img=function(srce,fn){
	var g=G(arguments),o,i;
	$.im=function(img,func){
		i=$.img().src(img);
		func(i[0]);
		//s$(e).contains('data:')
		return i
	}
	J.src=function f(e){
		var _src=function(a){
			a=$.extension(a);
			return s$(a).startsWith('/')?a:'/'+a
		};
		//if(Q(e)){$l('q');e=$(e)[0]}
		if(e.image){
			e=e.image
		}
		if(C(e)){
			e=C(e)
		}
		if(e.src){
			e=e.src
		}
		if(e.toDataURL){
			e=tDU(e)
		}
		return s$(e).contains('data:')?e
			:S(e)?_src(e)
				   :0
	};
	o=F(g[0])?{fn:g[0]}:{src:g[0],fn:g[1]};
	i=$(new Image());
	//gets rid of auto-scaling quirk
	/*
     i.i=i.l=i.load(function(i){
     i._ =i[0]
     //i = $(i.target)
     // img.W( img.W() )
     // img.H( img.H() )
     })*/
	i.i=function(src){
		if(U(src)){
			return this[0].src
		}
		this.src(J.src(src));
		return this
	};
	i.r=function(fn){
		this.load(
			function(e){
				fn(e,i)
			}
		);
		return this
	};
	i.r(function(_i){i._=_i.target});
	if(o.fn){
		i.r(o.fn)
	}//i.l(function(e){o.fn($(e.target), e)})
	if(o.src){
		i.i(o.src)
	}
	i.A()
	return i
}
$.b=function(a,k){
	var g=G(arguments),b=$('<b>')
	//if(g.p){a =  '&nbsp;'+a  }
	//  b.H(a)
	//  b.K(k)
	if(a){
		b=b.A(b)
	}
	if(!g.n){
		b.A()
	}
	return b
}
dv=function(){
	$.dI=function(id,a,b,c,d,e,f){
		//dI conflict?
		return $.d(a,b,c,d,e,f).id(id)
	}
	$.dK=function(k){return $.d().K(k)}
	$.dD=$.divD=function(c,w,h,x,y){
		var d,g=G(arguments)
		w=N(w,200)
		h=N(h,w)
		d=$.d(200,200,'+')
		if(g.u){
			return d.C('n')
		}
		if(g.S_){
			d.C(c)
			if(N(w)){
				d.W(w)
			}
			if(N(h)){
				d.H(h)
			}
			if(N(x)){
				d.X(x)
			}
			if(N(y)){
				d.Y(y)
			}
			return d
		}
		if(g.N_){
			return $.dD('o',c,w,h,x)
		}
	}
	$.dA=function func(col,w,height,x,y){
		var g=G(arguments),
			div=$.d().P('absolute')
		if(U(col)){
			return div.C('brown')
		}
		if(S(col)){
			div.C(col);
			if(N(w)){
				div.W(w)
			}
			if(N(height)){
				div.H(height)
			}
			if(N(x)){
				div.X(x)
			}
			if(N(y)){
				div.Y(y)
			}
			if(g.p){
				div.dg()
			}
			return div
		}
		if(N(col)){
			return $.dA('o',col,w,height,x)
		}
	}
	$.dA=$.divA=function(c,w,h,x,y){
		var g=G(arguments),
			d=$.d().P('absolute'),
			o=g.O?g.f:
			  g.S_?{c:g.f,w:g.s,h:g.t,x:g[3],y:g[4]}:
			  {w:g.f,h:g.s,x:g.t,y:g[3]}
		if(N(o.w)){
			d.W(o.w)
		}
		if(N(o.h)){
			d.H(o.h)
		}
		d.XY(N(x,0),N(y,0))
		if(o.c){
			d.C(o.c)
		}
		return d
	}
	$.d=$.div=function(){
		var g=G(arguments),d=$('<div>'),o
		o=g.A?{a:g.f}:g.O?g.f:S(g[1])?
		{c:g.f,k:g.s,w:g.t,h:g[3],x:g[4],y:g[5]}:
							  g.S_?{c:g.f,w:g.s,h:g.t,x:g[3],y:g[4]}:
							  {w:g.f,h:g.s,x:g.t,y:g[3]}
		if(o.c){
			d.C(o.c)
		}
		if(N(o.w)){
			d.W(o.w)
		}
		if(N(o.h)){
			d.H(o.h)
		}
		if(N(o.x)){
			d.ab(o.x,N(o.y,0))
		}
		if(o.a){
			_.e(g[0],function(g){d.A(g)})
		}
		if(o.k){
			d.K(o.k)
		}
		if(!g.n){
			d.A()
		}
		if(g.p){
			d.dg()
		}
		return _d=d
	}
	$.dD=$.divD=function func(col,w,h,x,y){
		w=N(w)?w:200;
		h=N(h)?h:w;
		var div=$.div(200,200).drag();
		if(U(col)){
			return div.C('brown')
		}
		if(S(col)){
			div.C(col);
			if(N(w)){
				div.W(w)
			}
			if(N(h)){
				div.H(h)
			}
			if(N(x)){
				div.X(x)
			}
			if(N(y)){
				div.Y(y)
			}
			return div
		}
		if(N(col)){
			return func('orange',col,w,h,x)
		}
	};
	$.dIl=$.inlineDiv=function(a,b,c){
		var d=dv(a,b,c);
		d.display('inline');
		return d
	};
	$.ilBl=$.inlineBlockDiv=function(a,b,c){
		var d=$.d(a,b,c);
		d.display('inline-block');
		return d
	};
	$.dva=function(r,w,h,l,t){
		//color, w, h, left, top
		var g=G(arguments),
			r=g[0],w=g[1],h=g[2],l=g[3],t=g[4],d
		if(!S(r)){
			return g.n?
				   $.dva($r(),r,w,h,l,'-'):
				   g.p?$.dva($r(),r,w,h,l,'+'):
				   $.dva($r(),r,w,h,l)
		}
		d=$.d(r).p('a').C(r)
		if(g.p){
			if(w){
				d.l(w)
			}
			;
			if(h){
				d.t(h)
			}
			d.P(16)
			return d.auto()
		}
		w=w||1;
		h=h||w;
		d.WH(w*100,h*100)
		l=l||0;
		t=t||l;
		d.l(l*100).t(t*100)
		if(!g.n){
			d.dg()
		}
		return d
	}
};
dv()
lst=function(){
	$.la=$.liA=function(){
		var g=G(arguments),o,
			a=$('<a>').hr('#'),
			li=$('<li>')
		/*
         if(A(g.f)){
         _.e(g.f, function(el){})
         return li.A(a)
         }*/
		o=g.F_?{fn:g.f}:
		  g.S_?{id:g.f,fn:g.s}:
		  {el:g.f,fn:g.s}
		o.ht=o.id
		if(o.id){
			a.id(o.id)
		}
		if(o.ht){
			a.html(o.ht)
		}
		if(o.el){
			a.A(o.el)
		}
		if(o.fn){
			a.$(o.fn)
		}
		li.A(a)
		return li
	}
	$.lL=$.lib=$.liLb=function(){
		var g=G(arguments),o,
			li=$('<li>'),
			lb=$.lb().a2(li)
		if(A(g.f)){
			_.e(
				g.f,function(el){
					lb.A(el)
				}
			)
			return li
		}
		o=g.F_?{fn:g.f}:
		  g.S_?{id:g.f,fn:g.s}:
		  {el:g.f,fn:g.s}
		o.ht=o.id
		if(o.id){
			a.id(o.id)
		}
		if(o.ht){
			a.html(o.ht)
		}
		if(o.el){
			a.A(o.el)
		}
		if(o.fn){
			a.$(o.fn)
		}
		return li
	}
	$.li=function(){
		var g=G(arguments),li=$('<li>')
		if(A(g[0])){
			_.e(
				g[0],
				function(g){
					li.A(g)
				}
			)
		}
		if(g.S_){
			li.A(g.f)
		}
		if(g.p){
			li.K('active')
		}
		if(g.n){
			li.k('dropdown')
		}
		li.A()
		return li
	}
	$.ol=function(o,b){
		var g=G(arguments),
			ol=$('<ol>');
		_.e(g,function(v){ol.A(v)});
		return ol
	}
	$.ul=function(){
		var g=G(arguments),o,ul=$('<ul>')
		if(g.A_){
			_.e(
				g.f,function(el){
					if(g.p){
						if(el.iLi()){
							el=$.li([el])
						}
					}
					if(S(el)){
						el=$.li(el)
					}
					ul.A(el)
				}
			)
		}
		//if(g.p){ul.dg()}
		if(g.n){
			ul.K('ddm')
		}else{
			ul.A()
		}//dropdown menu
		if(g.p){
			ul.K('n nbn')
		}//navbar nav
		// $l(ul.oh())
		return ul
	}
	$.uK=$.ulK=function(k,a,b,c,d){
		var ul=$.ul(a,b,c,d).K(k)
		return ul
	}
	$.liK=function(k,a,b,c,d){
		var li=$.li(a,b,c,d)
		li.K(k)
		return li
	}
};
lst()
$.sp=function(){
	var g=G(arguments),
		sp=$('<span>'),str='';
	_.e(
		g,function(val){
			if(S(val)){
				str+=val
			}
			else{
				sp.A(val)
			}
		}
	);
	if(str){
		sp.T(str)
	}
	sp.A()
	return sp
}
$.as=function(){
	var a=$('<aside>')
	G(arguments).e(
		function(q){
			a.A(q)
		}
	)
	a.A()
	return a
}
tbl=function(){
	$.t=function(a){
		var g=G(arguments)
		var t=$('<table>')
		if(A(a)){
			_.e(
				a,function(el){
					t.A(el)
				}
			)
		}
		if(!g.n){
			t.A()
		}
		return t
	}
	$.tHR=function(ch){
		var el=$.tr().a2($.tH())
		if(A(ch)){
			_.e(
				ch,function(ch){
					if(S(ch)){
						ch=$.th(ch)
					}
					el.A(ch)
				}
			)
		}
		return el
	}
	$.tH=function(a){
		var tH=$('<thead>')
		if(A(a)){
			_.e(a,function(el){ tH.A(el) })
		}
		else
			if(O(a)){
				tH.A(a)
			}
		return tH
	}
	$.th=function(a){
		var th=$('<th>')
		if(A(a)){
			_.e(a,function(el){th.A(el)})
		}
		else
			if(S(a)){
				th.A(a)
			}
		return th
	}
	$.tB=$.tb=function(){return $('<tbody>') }
	$.tr=function(a){
		var g=G(arguments)
		var tr=$('<tr>')
		if(A(a)){
			_.e(
				a,function(el){
					if(S(el)){
						el=g.p?$.th(el):$.td(el)
					}
					tr.A(el)
				}
			)
		}
		else
			if(a){
				tr.A(a)
			}
		return tr
	}
	$.td=function(a){
		var g=G(arguments)
		var td=$('<td>')
		_.e(g,function(el){ td.A(el) })
		return td
	}
};
tbl()
$.str=function(){
	var g=G(arguments),
		s=$('<strong>');
	_.e(g,function(g){s.A(g)});
	return s
}
$.hdr=function(){//$.H=
	var g=G(arguments),hdr=$('<header>')
	//  return $.ip().ty('header').n(n).v(v)
	g.e(function(q){hdr.A(q)})
	hdr.A()
	return hdr
}
$.F=$.ftr=$.footer=function(){
	return $('<footer>')
}
$.nv=function(){
	return $('<nav>')
}
$.sc=$.sct=function(a){
	var sc=$('<section>')
	if(a){
		sc.id(a)
	}
	return sc
}
$.ac=function(){//$.H=$.arg=
	var g=G(arguments),
		art=$('<article>')
	g.e(
		function(q){
			art.A(q)
		}
	)
	art.A()
	return art
}
$.a=function(a,f){
	var g=G(arguments),a=g[0],f=g[1],la=a||''
	$.a2=function(a,fn){
		var g=G(arguments),a=g[0],f=g[1],el=$.a().id(a).A(a);
		if(F(fn)){
			el.o(fn)
		}else{
			el.hr(fn||'#')
		}
		if(g.n){
			el.dd()
		}
		//  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"
		if(g.p){
			el=li(el)
		}
		if(g.m){
			el=li(el).K('active')
		}
		return el
	}
	l=$('<a>').A(a)//.id(a)
	if(F(f)){
		l.$(f)
	}else{
		l.href(f||'#')
	}
	// if(g.n){ l.K('dropdown-toggle').attr({ 'data-target' : 'dropdown' }) }
	//if(g.p){ l = $.li( l ) }
	//if(g.m){ l = $.li( l ).K('active') }
	return l.A()
}
$.em=function(){
	var em=$('<em>');
	return em
}
$.tp=function(id){
	return $('<template>').id(id)
}
$.cl=function(){
	var cl=$('<col>');
	return cl
}
$.cg=function(){
	var cg=$('<colgroup>');
	return cg
}
$.iI=function(i){
	if(O(i)){
		return S($(i)[0].src)
	}
}
$.R=$.row=function(n){
	var div=$.div().addClass('row')
	_.each(G(arguments),function(arg){ div.A(arg) })
	return div
}
$.ips=function(len){
	len=len||1;
	var str='';
	_.t(
		len,function(){
			str=str+'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
		}
	);
	return str
}
$.ipsP=function(len){return $.p().A($.ipsum(len))}
$.iF=function(){
	z()
	ifr=$('<iframe>').WH(1000,1000).C('b').src('http://www.playboy.com')
	$.dA().A(ifr).P(30)
}
IFR=function(){
	$.x()
	$.iF()
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
$.frg=function(){
	return $(
		document.createDocumentFragment()
	)
}
$.tg=function(a){return $('<'+a+'>')}
FRAG=function(){
	$.x('x','frag')
	frg=$.frg()
	_.t(5,function(i){ frg.A($.sp(i)) })
	$.d([$.hr(),frg,$.hr()])
}
//CONSOLE!!
// https://developer.mozilla.org/en-US/docs/Web/API/Console/info
//this should all be dep!!!
// now i would just do $('body')
bd=function(){
	return qq($('body'))
}
//this is just $(a||'#canvas')[0]
did=function(a){
	return document.getElementById(a||'canvas')
}
//this is same but returns the context
xid=function(a){
	return did(a).getContext("2d")
}
events={}
events.dL=dL=function(a,b,c){
	document.addEventListener(
		oE(a),b,c
	)
}
events.dR=dR=function(a,b,c){document.removeEventListener(oE(a),b,c)}
//??
$d=function(a){return $(document)}
//dont need
$b=function $b(a,b){
	var B=qq($('body'))
	if(U(a)){
		return B
	}
	if(E(a)){
		B(a);
		return a
	}
	return S(a)?B.c(a,b)
		:O(a)?B.s(a)
			   :B
}
//*
$hr=function(c,h,w){
	var e=qq('hr')
	if(N(c)){
		return hr('z',c,h)
	}
	e.h(h||2)
	e.c(c||'z')
	if(w){
		e.w(w)
	}
	;
	return e
}
$h1=h1=function(){
	var g=G(arguments),
		h=qq($('<h1>'))
	_a(h,g)
	return h
}
$h2=h2=function(){
	var g=G(arguments),h=qq($('<h2>'));
	_a(h,g);
	return h
}
$h3=h3=function(){
	var g=G(arguments),h=qq($('<h3>'));
	_a(h,g);
	return h
}
$h4=h4=function(){
	var g=G(arguments),h=qq($('<h4>'));
	_a(h,g);
	return h
}
$h5=h5=function(){
	var g=G(arguments),h=qq($('<h5>'));
	_a(h,g);
	return h
}
$h6=h6=function(){
	var g=G(arguments),h=qq($('<h6>'));
	_a(h,g);
	return h
}
$span=function(){
	var args=G(arguments),theSpan=qq('s'),str=''
	_.each(
		args,
		function(val){
			
			//check for classname
			if(A(val)){
				theSpan.L(val[0])
			}
			else
				if(S(val)){
					str+=val
				}
				else{
					theSpan.A(val)
				}
		}
	)
	if(str){
		theSpan.T(str)
	}
	return theSpan
}
$br=function(a){
	var theSpan=$span();
	_.times(a||1,function(){ theSpan($('<br>')) })
	return theSpan
}
$pg=function(a){
	var p=_p()
	_.each(
		arguments,
		function(v){
			
			// if( S(v) ){  v = $span(v)  }
			p(v)
		}
	)
	return p
}
co=function co(a,b){
	return O(a)?ss(a,'C',$r('c',b)):co($b(),a)
}
_o=function(a,b,c){
	if(A(a)){
		return _e(a,"$l(E(v).outerHTML)")
	}
	return U(a)?
		   qq('op')
		:E(a)?$l(E(a).outerHTML)
			   :a.open(b,c)
}
_q=function(a){return $('<ol>') }
rq=function(s){return s+' &raquo'}
dgM=function(a){return a.at({dg:'modal'})}
tN=function(a){return a.tagName}
thead=function(){return _a(qq($('<thead>')),arguments)}
tbody=function(){return _a(qq($('<tbody>')),arguments)}
_B=function(){
	var g=G(arguments),
		s=qq($('<strong>'))
	_e(
		g,function(g){
			s(g)
		}
	)
	return s
}
ifra=function(){return qq('I')}
_y=function(a){return qq('sl')}
sc=function(a,b){return qq($('<section>')).id(a).s(b)}
$ax=function(textAndId,hrefOrFunc){
	var args=G(arguments),a=args[0],hrefOrFunc=args[1],
		theEl=qq('a').id(textAndId)(textAndId)
	if(F(hrefOrFunc)){
		theEl.o(hrefOrFunc)
	}
	else{
		theEl.hr(hrefOrFunc||'#')
	}
	return (args.n)?theEl.k("dropdown-toggle")
		
		
		//  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"
		:(args.m)?li(theEl).k('active'):(args.p)?li(theEl)
		:theEl
}
//header
hdx=function(n,v){return ip('h',v).nm(n)}
//footer
ft=function(){
	return qq('F')
}
//well
well=function(a){
	return row().k('well')(a)
}
$li=li=function(){
	var g=G(arguments),
		l=qq('li')
	//klass or add
	_e(
		g,function(v){
			if(A(v)){
				l.k(v[0])
			}else{
				l(v)
			}
		}
	)
	if(g.p){
		l.k('A')
	}//active
	if(g.n){
		l.k('dd')
	}//dropdown
	return l
}
$liA=lik=function(a,b){//dep by li (+/*)
	var args=G(arguments),a=args[0],b=args[1],
		theEl=$li($a(a,b))
	if(args.p){
		theEl.k('active')
	}
	return theEl
}
ol=function(o,b){
	var g=G(arguments),
		e=qq('o')
	_e(
		g,function(v){
			if(A(v)){
				e.k(v[0])
			}
			else{
				e(v)
			}
		}
	)
	return e
}
td=function(){
	return qq('td')
}
tr=function(){return qq('tr')}
$bold=bold=bo=function(a,k){
	var g=G(arguments),
		h=g.p?'&nbsp;'+a:a;
	return qq('B').H(h).k(k)
}
function div(){
	$div=_d=function(a,b){
		var args=G(arguments),
			theDiv=qq('d')
		_.each(
			args.r,
			function(args){
				theDiv(args)
			}
		)
		return theDiv
	}
	//should be $div?
	$div2=dv=function f(r,w,h,p){
		
		//div -auto- (padding 10)
		//can specify width (or w/h)
		//can pass all pams in array, and then pass contents
		var g=G(arguments),r=g[0],w=g[1],h=g[2],p=g[3],
			theDiv=$div()
		// if( A(g.f) ){  return dv.apply(this, g.f).apply(this,  g.r )  }//_a(_a(f,g.f),g.r)
		if(!S(r)){
			return dv($r(),r,w,h,p)
		}
		theDiv.c(r)
		//if(U(w)){return d.auto()}
		if(N(w)){
			theDiv.w(w)
		}
		if(N(h)){
			theDiv.h(h)
		}
		theDiv.P(N(p)?p:10)
		return theDiv
	}
	di=function(i){
		return $div().id(i)
	}
	$divParams=dk=function(k,C,c,f,h){
		var g=G(arguments),k=g[0],C=g[1],c=g[2],f=g[3],d=_d().k(k)
		if(c){
			d.c(C,c)
		}else
			if(C){
				d.c(C)
			}
		if(f){
			d.f(f)
		}
		if(h){
			d.H(h)
		}
		if(g.p){
			d.a()()
		}
		return d
	}
	$divSizeParams=dz=function(z,C,c,f,h){
		var g=G(arguments),z=g[0],C=g[1],c=g[2],f=g[3],h=g[4]
		d=_d().Z(z)
		d.c(C,c)
		if(f){
			d.f(f)
		}
		if(h){
			d.H(h)
		}
		if(g.p){
			d.a()()
		}
		return d
	}
	$absoluteDiv=function(a,b,c){
		var theDiv=dv(a,b,c)
		theDiv.p('a')
		return theDiv
	}
	$fixedDiv=function(a,b,c){
		var theDiv=dv(a,b,c)
		return theDiv.p('f')
	}
	$relativeDiv=function(a,b,c){
		var theDiv=dv(a,b,c)
		return theDiv.p('r')
	}
	$inlineDiv=function(a,b,c){
		var theDiv=dv(a,b,c)
		theDiv.display('inline')
		return theDiv
	}
	$inlineBlockDiv=function(a,b,c){
		var theDiv=dv(a,b,c)
		theDiv.display('inline-block')
		return theDiv
	}
	FLOAT=function(){
		z()
		c=$canvas().a()
	}
	//////////////////
	//ddd=function(){z(); d=dva(500)(  e=dv(100), c=sCan()  ) }
	//color, width, height, left, top
	$divA=dva=function f(r,w,h,l,t){
		var g=G(arguments),
			r=g[0],w=g[1],h=g[2],
			l=g[3],t=g[4],
			d
		//if color not provided, just make it a random color
		if(!S(r)){
			return g.n?f($r(),r,w,h,l,'-')
				:g.p?f($r(),r,w,h,l,'+')
					   :f($r(),r,w,h,l)
		}
		//now we start with a div position:absolute, color: <the color>
		d=$div().p('a').c(r).a()
		//if its POS, give it padding, optionally set left and top, set with/height? to auto, and RETURN
		if(g.p){
			d.P(16)
			if(w){
				d.l(w)
			}
			if(h){
				d.t(h)
			}
			return d.auto()
		}
		w=w||100
		h=h||w
		d.w(w)
		d.h(h)
		l=l||0
		t=t||l
		d.l(l)
		d.t(t)
		if(g.N){
			d.drg()
		}
		return d
	}
	dvd=function(){
		return _a(dva,arguments).drg()
	}
	//color, width, height, left, top
	dva1=function f(r,w,h,l,t){
		var g=G(arguments),r=g[0],w=g[1],h=g[2],l=g[3],t=g[4],d
		if(!S(r)){
			return g.n?
				   f($r(),r,w,h,l,'-')
				:g.p?f($r(),r,w,h,l,'+')
					   :f($r(),r,w,h,l)
		}
		d=_d().p('a').c(r).a()
		if(g.p){
			if(w){
				d.l(w)
			}
			if(h){
				d.t(h)
			}
			d.P(16)
			return d.auto()
		}
		w=w||1
		h=h||w
		d.w(w*100)
		d.h(h*100)
		l=l||0
		t=t||l
		d.l(l*100)
		d.t(t*100)
		if(g.N){
			d.drg()
		}
		return d
	}
	da=function(a,b){
		if(U(b)){
			return a.data
		}
		;
		a.data=b;
		return a
	}
}
ifra=function(){
	z()
	d=dva()
	ifr=qq($('<iframe>'))
	ifr.w(1000).h(1000).c('b')
	ifr.q[0].src='http://www.playboy.com'
	d(ifr).P(30)
}
th=function(a){
	var h=qq($('<th>'))
	if(a){
		h(a)
	}
	return h
}
$.div=function(col,width,height){
	if(U(col)){
		return $('<div>')
	}
	if(S(col)){
		var d=$('<div>')
		d.css('backgroundColor',oO('c',col))
		if(N(width)){
			d.W(width)
		}
		if(N(height)){
			d.H(height)
		}
		return d
	}
	if(N(col)){
		var d=$('<div>')
		d.W(col)
		if(N(width)){
			d.H(width)
		}
		return d
	}
}
$.divA=function(col,width,height){
	if(U(col)){
		return $('<div>').C('n').P('absolute')
	}
	if(S(col)){
		var d=$('<div>').P('absolute')
		d.css('backgroundColor',oO('c',col))
		if(N(width)){
			d.W(width)
		}
		if(N(height)){
			d.H(height)
		}
		return d
	}
	if(N(col)){
		return $.div('o',col,width).P('absolute')
	}
}
$.button=function(buttonText,func){
	if(F(buttonText)){
		return $.button('submit',buttonText)
	}
	var b=$('<button>')
	b.text(buttonText)
	b.click(func)
	return b
}
$.buttonL=function(buttonText,func){
	if(F(buttonText)){
		return $.button('submit',buttonText)
	}
	var b=$('<button>')
	b.text(buttonText)
	b.click(func)
	return b.K('btn-lg')
}
$.hr=function f(color,height,width){
	if(N(color)){
		return f('z',color,height)
	}
	var hr=$('<hr>').H(height||2).C(color||'z')
	if(width){
		hr.W(width)
	}
	return hr
}
$.p=function(){
	theSpan=$('<p>')
	_.each(arguments,function(val){ theSpan.A(val) })
	return theSpan
}
//$.p = function(text){var p = $( '<p>' ); if( text ){ p.text(text)  }; return p}
$.paragraphs=function(){ _.each(arguments,function(arg){$.p(arg).A()})}
$.pgX=function(a){
	var g=G(arguments),
		p=$('<pg>')
	_.each(
		g,function(v){
			if(A(v)){
				p.k(v[0])
			}
			else{
				if(S(v)){
					v=sp(v)
				}
				p(v)
			}
		}
	)
	return p
}
$li=function(){
	var g=G(arguments),
		l=qq('li')
	//klass or add
	_e(
		g,function(v){
			if(A(v)){
				l.k(v[0])
			}else{
				l(v)
			}
		}
	)
	if(g.p){
		l.k('A')
	}//active
	if(g.n){
		l.k('dd')
	}//dropdown
	return l
}
$.submit=$.submitButton=function(buttonText,func){
	return $.button(buttonText,func).type('submit')
}
$.form=function(){
	return $('<form>')
}
$.glyph=$.glyphicon=function(glyph,a){
	var s=$.span(a).K("glyphicon glyphicon-"+glyph)
	return s
}
$.lIA=$.liA=function(a,f){
	var anchor=$('<a>').id(a).attr('href','#')
	if(S(a)){
		anchor.html(a)
	}else{
		anchor.A(a)
	}
	if(F(f)){
		anchor.click(f)
	}else{
		anchor.href(f||'#')
	}
	return $('<li>').A(anchor)
}
$.h1=function(){
	var h=$('<h1>')
	h.A.apply(h,G(arguments))
	return h
}
$.h2=function(){
	var h=$('<h2>')
	h.A.apply(h,G(arguments))
	return h
}
$.h3=function(){
	var h=$('<h3>')
	h.A.apply(h,G(arguments))
	return h
}
$.h4=function(){
	var h=$('<h4>')
	h.A.apply(h,G(arguments))
	return h
}
$.h5=function(){
	var h=$('<h5>')
	h.A.apply(h,G(arguments))
	return h
}
$.h6=function(){
	var h=$('<h6>')
	h.A.apply(h,G(arguments))
	return h
}
$.input=function(){
	return $('<input type="text">')
}
$.password=function(){
	return $('<input type="password">')
}
$.br=function(a){
	if(U(a)){
		return $('<br>')
	}
	var span=$.span()
	_.times(
		a,
		function(){ span.A($('<br>')) }
	)
	return span
}
$.span=function(){
	theSpan=$('<span>');
	_.each(arguments,function(val){ theSpan.A(val) });
	return theSpan
}
$.span2=function(c1,c2){return $('<span>').col(c1).C(c2)}
$.label=function lb(labelText,labelFor,name,placeholder){
	var g=G(arguments),theLabel=$('<label>'),theInput;
	if(!g[0]){
		return theLabel
	}
	theLabel.for(labelFor).K('control-label').html(labelText)
	if(!g[2]){
		return theLabel
	}
	theInput=$.input().id(labelFor).name(name).placeholder(placeholder||'...')
	if(g.N){
		theInput.K('form-control')
	}
	return $.span().A(theLabel,theInput)
}
//finish later..
$.a=function(a,f){
	var g=G(arguments),a=g[0],f=g[1],l
	a=a||''
	l=$('<a>').id(a).A(a)
	if(F(f)){
		l.click(f)
	}else{
		l.href(f||'#')
	}
	// if(g.n){ l.K('dropdown-toggle').attr({ 'data-target' : 'dropdown' }) }
	//if(g.p){ l = $.li( l ) }
	//if(g.m){ l = $.li( l ).K('active') }
	return l
}
//twitter
$.dropDown=function(a,f){
	var l=$('<a>').id(a).A(a)
	if(F(f)){
		l.click(f)
	}else{
		l.href(f||'#')
	}
	return l.K('dropdown-toggle').attr({'data-target':'dropdown'})
}
$.active=function(a,f){
	var l=$('<a>').id(a).A(a)
	if(F(f)){
		l.click(f)
	}else{
		l.href(f||'#')
	}
	return l.K('active')
}
$.b=function(a){
	var b=$('<b>')
	if(a){
		b=b.A(b)
	}
	return b
}
$.li=function(something){
	var g=G(arguments),
		l=$('<li>')
	if(D(something)){
		l.A(something)
	}
	//klass or add
	// if(g.p){ l.k('A')}//active
	//if(g.n){ l.k('dd')}//dropdown
	return l
}
////
$.$$=function(a,b,c){
	$('body').dblclick(a,b,c)
	return $
}
$.$=function(){
	var b=$('html')
	b.click.apply(b,arguments)
	return $
}
$.editDiv=function(words){
	var input=$('<textarea>').css('margin',4)
	var span=$.span().C('z')
	var spanFunc=function(){ span.text(input.val()) }
	var d=$.divA().C('n','y').css('padding',8).A()
	d.zIndex(0)
	var location
	var canMove=true
	xButton=$.button('',function(){d.remove()}).W(4).H(4).C('r')
	var changeLocation=true
	var inputMove=true
	var mouse='up'
	var appendSensorDiv=$.div('y',16,12).textAlign('center').mar('0 auto').click(
		function(){
			$(this).parent().free()
		}
	)
	d.mousedown(
		function(){
			inputMove=false
			mouse='div'
		}
	)
	d.mouseup(function(){mouse='up'})
	d.mousedown(
		function(){
			$.editDiv.top++
			$(this).zIndex($.editDiv.top)
		}
	)
	input.mousedown(
		function(e){
			$.editDiv.top++
			$(this).parent().zIndex($.editDiv.top)
			location={top:d.top(),left:d.left()}
			inputMove=true
			mouse='input'
			e.stopPropagation()
		}
	)
	input.mousemove(
		function(e){
			if(inputMove){
				e.stopPropagation()
				d.top(location.top).left(location.left)
			}
		}
	)
	if(U(words)){
		return d.A(
			xButton,$br().q,span.hide(),input,
			appendSensorDiv
		).dblclick(
			function(e){
				e.stopPropagation()
				spanFunc()
				xButton.toggle();
				input.toggle()
				span.toggle()
			}
		).drag()
	}
	else{
		input.val(words)
		d.A(xButton,$br().q,span,input.hide())
		spanFunc()
		d.dblclick(
			function(e){
				e.stopPropagation()
				spanFunc();
				xButton.toggle();
				input.toggle();
				span.toggle()
			}
		)
		return d.drag()
	}
}
$.editDiv.top=0
editDiv=function(a){
	var div=$.editDiv(a),
		range=$('<input type="range">')
	range.on(
		'mousedown',function(e){
			e.stopPropagation()
		}
	)
	range.on(
		'input',function(){
			div.find($('span')).fontSize($(this).val())
			div.find($('textarea')).fontSize($(this).val())
		}
	)
	div.prepend(range)
	return div
}
$.ul=function(){ return $('<ul>') }
$.row=function(n){
	var div=$.div().addClass('row')
	_.each(G(arguments),function(arg){ div.A(arg) })
	return div
}
$.formGroupDiv=function(){return $.div().K('form-group').fontSize(20)}
$.submitInput=function(val){
	var el=$('<input>').attr('type','submit').fontSize(16)
	if(val){
		el.val(val)
	}
	return el
}
$.textInput=function(name){
	var el=$('<input>').attr('type','text')
	if(name){
		el.attr({name:name,id:name})
	}
	return el
}
$.passwordInput=function(name){
	var el=$('<input>').attr('type','password')
	if(val){
		el.attr('name',name)
	}
	return el
}
//pass in size, and then args(contents) as a list (or as an array)
$.col=function(){
	var args=G(arguments),
		div=$.div().addClass('m'+args[0]),
		iter=A(args[1])?args[1]:args.r
	_.each(iter,function(v){ div.A(v) })
	return div
}
$.canvas=function(col,width,height){
	var el
	if(U(col)){
		return superCanvas($('<canvas>')).C('blue')
	}
	if(N(col)){
		return $.canvas('x',col,width)
	}
	if(S(col)){
		el=$('<canvas>')
		el.css('backgroundColor',oO('c',col))
		if(_.isNumber(width)){
			el.attr('width',width)
			el.attr('height',height||width)
		}
		return superCanvas(el)
	}
	return el
}
$a=function(a,func){
	var g=G(arguments),a=g[0],f=g[1],
		theEl=qq('a').id(a)(a)
	if(F(func)){
		theEl.o(func)
	}else{
		theEl.hr(func||'#')
	}
	if(g.n){
		theEl.dd()
	}
	//  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"
	if(g.p){
		theEl=li(theEl)
	}
	if(g.m){
		theEl=li(theEl).k('active')
	}
	return theEl
}
$ul=ul=function(){
	var tLi=function(a){
		var iLi=function(a){return _h('HTMLLIElement',E(a))}
		return iLi(a)?a:li(a)
	}
	var g=G(arguments),
		e=qq('ul')
	_e(
		g,function(v){
			if(A(v)){
				e.k(v[0])
			}
			else{
				e(tLi(v))
			}
		}
	)
	if(g.n){
		e.k('ddm')
	}//dropdown menu
	if(g.p){
		e.k('n nbn')
	}//navbar nav
	return e
}
$hr=hr=function(c,h,w){
	var e=qq('hr');
	if(N(c)){
		return hr('z',c,h)
	}
	e.h(h||2);
	e.c(c||'z');
	if(w){
		e.w(w)
	}
	;
	return e
}
JQPLUGS=function(){
	z()
	d=$.div().Z(100).C('r').A().append('abc')
	e=$.div().Z(100).col('r').A().append('abc')
	f=$.div().Z(100).C('r','b').A().append('abc')
	g=$.div('b',500,500).A()
}
IMAGE=function(){
	i=$.img('me')//.A()
}
EDITRANGE=function(){
	z()
	a=editDiv().C('a')
	b=editDiv().C('b')
	c=editDiv().C('c')
}
FUNNY=function(){
	z()
	word=function(text,c1,c2){
		var s=$.span(text).C(c1,c2).A().drag()
		return s
	}
	w=word('hello','b','g')
	word('sicko','g','b')
	word('why, i oughta..','p','x')
	word('it was raining..','j','k')
	word('who ya gonna call?','h','i')
	word('dag nabit!','f','g')
	word('i like','d','e')
	word('tomorrow','a','c')
	word('me','r','b')
}
$.img=function(source,func){
	var img=$(new Image())
	//gets rid of auto-scaling quirk
	img.load(
		function(img){
			var img=$(img.target)
			img.W(img.W())
			img.H(img.H())
		}
	)
	if(func){
		img.load(function(event){func($(event.target),event)})
	}
	if(source){
		img.src(src(source))
	}
	return img
}
function pro(){
	//pass in size, and then args(contents) as a list (or as an array)
	$.col=function(){
		var args=G(arguments),
			div=$.div().addClass('m'+args[0]),
			iter=A(args[1])?args[1]:args.r
		_.each(iter,function(v){ div.A(v) })
		return div
	}
	$.ipsum=function(len){
		len=len||1
		var str=''
		_.t(
			len,function(){
				str=str+
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
			}
		)
		return str
	}
	$.ipsumP=function(len){return $.p().A($.ipsum(len))}
	$.i2=$.img2=function(img,func){
		i=$.img().src(img)
		func(i[0])
		//s$(e).contains('data:')
		return i
	}
	$.i=$.img=function(source,func){
		var img=$(new Image())
		//gets rid of auto-scaling quirk
		img.load(
			function(img){
				var img=$(img.target)
				// img.W( img.W() )
				// img.H( img.H() )
			}
		)
		if(func){
			img.load(
				function(event){
					func($(event.target),event)
				}
			)
		}
		if(source){
			img.src(src(source))
		}
		return img
	}
	$.hr2=function(c,h,w){
		var e=qq('hr')
		if(N(c)){
			return hr('z',c,h)
		}
		e.h(h||2)
		e.c(c||'z')
		if(w){
			e.w(w)
		}
		;
		return e
	}
	$.sp2=function(){
		var args=G(arguments),
			theSpan=$('<span>'),str=''
		_.each(
			args,
			function(val){
				if(S(val)){
					str+=val
				}
				else{
					theSpan.A(val)
				}
			}
		)
		if(str){
			theSpan.text(str)
		}
		return theSpan
	}
	$.tH=$.thead=function(){return _a(qq($('<thead>')),arguments)}
	$.tB=$.tbody=function(){return _a(qq($('<tbody>')),arguments)}
	$.strong=function(){
		var g=G(arguments),
			s=qq($('<strong>'))
		_e(
			g,function(g){
				s(g)
			}
		)
		return s
	}
	$sc=$.section=function(a,b){return qq($('<section>')).id(a).s(b)}
	$.aOld=function(textAndId,hrefOrFunc){
		var args=G(arguments),a=args[0],hrefOrFunc=args[1],
			theEl=qq('a').id(textAndId)(textAndId)
		if(F(hrefOrFunc)){
			theEl.o(hrefOrFunc)
		}
		else{
			theEl.hr(hrefOrFunc||'#')
		}
		return (args.n)?theEl.k("dropdown-toggle")
			
			
			//  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"
			:(args.m)?li(theEl).k('active'):(args.p)?li(theEl)
			:theEl
	}
	$.headerHuhhhh=function(name,val){
		return $.input().type('header')
			.name(name).val(val)
	}
	$.header=function(){
		var header=$('<header>')
		return header
	}
	$.footer=function(){return $('<footer>')}
	$.ol=function(o,b){
		var g=G(arguments),
			ol=$('<ol>')
		_.each(g,function(v){ol.A(v)})
		return ol
	}
	$.td=function(){
		return $('<td>')
	}
	$.tr=function(){return $('<tr>')}
	$.bold=function(a,k){
		var g=G(arguments),
			h=g.p?'&nbsp;'+a:a;
		return $('<bold>').H(h).k(k)
	}
	$.iframe=function(){
		z()
		d=dva()
		ifr=qq($('<iframe>'))
		ifr.w(1000).h(1000).c('b')
		ifr.q[0].src='http://www.playboy.com'
		d(ifr).P(30)
	}
	$.th=function(a){
		var h=qq($('<th>'))
		if(a){
			h(a)
		}
		return h
	}
	$.inlineDiv=function(a,b,c){
		var theDiv=dv(a,b,c)
		theDiv.display('inline')
		return theDiv
	}
	$.inlineBlockDiv=function(a,b,c){
		var theDiv=dv(a,b,c)
		theDiv.display('inline-block')
		return theDiv
	}
	$.dva=function f(r,w,h,l,t){
		
		//color, width, height, left, top
		var g=G(arguments),r=g[0],w=g[1],h=g[2],l=g[3],t=g[4],d
		if(!S(r)){
			return g.n?
				   f($r(),r,w,h,l,'-')
				:g.p?f($r(),r,w,h,l,'+')
					   :f($r(),r,w,h,l)
		}
		d=_d().p('a').c(r).a()
		if(g.p){
			if(w){
				d.l(w)
			}
			if(h){
				d.t(h)
			}
			d.P(16)
			return d.auto()
		}
		w=w||1
		h=h||w
		d.w(w*100)
		d.h(h*100)
		l=l||0
		t=t||l
		d.l(l*100)
		d.t(t*100)
		if(g.N){
			d.drg()
		}
		return d
	}
	DEBOUNCE=function(){
		W()
		s=0
		u=0
		d=0
		l=0
		r=0
		b=w.S(600,300,'b',100)
		$.space(_.debounce(function(){$l('space '+s++)},1000))
		$.kD('u',_.debounce(function(){$l('up '+u++)},1000,true))
	}
	$.do=function(func){
		setTimeout(func,0)
		return 'nada'
	}
	//
	$.G=function self(path,dataOb,func){
		////
		//fix later!
		if(F(dataOb)){
			return self(path,{},dataOb)
		}
		dataOb=dataOb||{}
		func=func||function(){return 'boo ya!'}
		$.get(
			'/'+path,dataOb,
			function(data){
				d=data
				console.dir(data)
				func(data)
			}
		)
	}
	$.P=function(path,dataOb){
		dataOb=dataOb||{}
		if(!O(dataOb)){
			dataOb={data:dataOb}
		}
		$.post(
			'/'+path,dataOb,
			function(data){
				d=data
				console.dir(d)
			}
		)
	}
	$.qJ=qJ=function rc(u,d,f){
		var g,u,d,f
		if(U(d)){
			return _p(rc,u)
		}
		g=G(arguments);
		u=g[0];
		d=g[1];
		f=g[2]
		if(F(d)){
			f=d;
			d={}
		}
		$.getJSON(
			u,d,g.P?f:function(ss){
				_.each(ss,function(s){f(s,ss)})
			}
		)
	}
	$.qJE=qJE=function rc(u,d,f){
		var g,u,d,f
		if(U(d)){
			return _p(rc,u)
		}
		g=G(arguments);
		u=g[0];
		d=g[1];
		f=g[2]
		if(F(d)){
			f=d;
			d={}
		}
		$.getJSON(
			u,d,function(ss){
				_.each(ss,function(s){f(s,ss)})
			}
		)
	}
	$.qP=qP=function rc(u,d,f){
		var g,u,d,f
		if(U(d)){
			return _p(rc,u)
		}
		g=G(arguments);
		u=g[0];
		d=g[1];
		f=g[2]
		if(F(d)){
			f=d;
			d={}
		}
		$.post(
			u,d,g.P?f:function(ss){
				_.each(ss,function(s){f(s,ss)})
			}
		)
	}
	$.qPE=qPE=function rc(u,d,f){
		var g,u,d,f
		if(U(d)){
			return _p(rc,u)
		}
		g=G(arguments);
		u=g[0];
		d=g[1];
		f=g[2]
		if(F(d)){
			f=d;
			d={}
		}
		$.post(
			u,d,function(ss){
				_.each(ss,function(s){f(s,ss)})
			}
		)
	}
	$.qG=qG=function rc(u,d,f){
		var g,u,d,f
		if(U(d)){
			return _p(rc,u)
		}
		g=G(arguments);
		u=g[0];
		d=g[1];
		f=g[2]
		if(F(d)){
			f=d;
			d={}
		}
		$.get(
			u,d,g.P?f:function(ss){
				_.each(ss,function(s){f(s,ss)})
			}
		)
	}
	$.qGE=qGE=function rc(u,d,f){
		var g,u,d,f
		if(U(d)){
			return _p(rc,u)
		}
		g=G(arguments);
		u=g[0];
		d=g[1];
		f=g[2]
		if(F(d)){
			f=d;
			d={}
		}
		$.get(
			u,d,function(ss){
				_.each(ss,function(s){f(s,ss)})
			}
		)
	}
	$.fn.trans=function(transform){
		$l('transform')
		return this.css({transform:transform})
	}
	testCSSRotate=function(){
		z()
		//works
		$.h1('css transform: rotate').A()
		d=$.div('x',null,200).A()
		//   d.css({transform: 'translateY(300px) rotateZ(120deg)'})
		d.trans('translateY(300px) rotateZ(120deg)')
	}
	testCSSScal=function(){
		z()
		$.h1('css transform: scale').A()
		i=$.img('me').A()
		// d = $.div('r', null, 200,200).A()
		$.img('me').A().transform('scaleX(2)')
		$.img('me').A().transform('scaleY(2)')
		$.img('me').A().transform('scaleZ(2)') //does nothing?!
		$.img('me').A().transform('rotate3d(100,100,100,100)')
	}
	HTML5={}
	$.CSS=HTML5.CSS=ss=function ss(q,b,c){
		if(U(b)){
			return $l(_p(ss,q))
		}
		var s=function(a,b,c){
			if(U(c)){
				return $l(a.css(oO('s',b)))
			}
			a.css(oO('s',b),$o(b,c,'R'))
			$l(s(a,b))
			return q
		}
		q=Q(q)
		return A(b)?_r(
			b,function(m,k){
				return _s(m,k,ss(q,k))
			},{}
		)
			:O(b)?$p('s',q,b,s)
				   :s(q,b,c)
	}
	$.attrs=HTML5.attrs=aa=function aa(q,b,c){
		q=Q(q)
		var att=function(q,b,c){
			q=Q(q)
			if(U(c)){
				return q.attr(oO('a',b))
			}
			return q.attr(oO('a',b),$o(b,c,'R'))
		}
		return U(b)?_p(aa,q)
			:A(b)?_r(
			b,function(m,k){
				return _s(m,k,aa(q,k))
			},{}
		)
				   :O(b)?$p('a',q,b,att)
				 :att(q,b,c)
	}
	$.props=HTML5.props=pp=function pp(q,b,c){
		q=Q(q)
		var rop=function(q,b,c){
			q=Q(q)
			if(U(c)){
				return q.prop(oO('o',b))
			}
			return q.prop(
				oO('o',b),
				$o(b,c,'R')
			)
		}
		return U(b)?_p(HTML5.props,q)
			:A(b)?_r(
			b,function(m,k){
				return _s(m,k,HTML5.props(q,k))
			},{}
		)
				   :O(b)?$p('o',q,b,rop)
				 :rop(q,b,c)
		//ex:  val=function(type, key){return HTML5.props(type,'v',key)}
		//ex:  typ=function(type, key){return HTML5.props(type,'t',key)}
	}  //changed p -> o (oO)
	$.class=HTML5.class=kl=function(q){
		q=qq(q)
		return function kl(k,j){
			var g=G(arguments)
			if(U(k)){
				return q.at('k')
			}
			if(g.p){
				return q.q.hasClass(oO('k',k))
			}
			if(k==='-'){
				q.q.removeClass(oO('k',j))
			}
			else
				if(g.n){
					q.at('k',oO('k',k))
				}
				else{
					_e(
						_S(k,' '),function(k){
							q.q.addClass(oO('k',k))
						}
					)
				}
			$l(kl())
			return kl
		}
	}
	$.font=HTML5.font=$f=FO=function(a,b){
		if(O(a)){
			return ss(oB(b),{fz:a||50})
		}
		a=N(a)?_S(a):U(a)?'':a
		var px=function(a){return a+'px'},
			F='fantasy',W='normal',S='normal',Z=px(100)
		_e(
			a.split(' '),function(p){
				if(M(p[0])){
					p=p.split('/')
					Z=px(p[0])+((p[1])?'/'+px(p[1]):'')
				}
				F=Oo('ff',p)||F
				W=Oo('fw',p)||W
				S=Oo('fs',p)||S
			}
		)
		return [W,S,Z,F].join(' ')
	}
	$.outline=HTML5.outline=OL=function OL(o,o2,o3){
		if(Oo('c',o)){
			o={c:o,w:o2,s:o3}
		}
		if(S(o)){
			o=o.split(' ')
			return $l(
				_j(
					[
						$r('c',o[0]),_p(oO('ow',o[1]||5)),
						oO('os',o[2]||'-')
					]
				)
			)
		}
		if(N(o)){
			o={w:o}
		}
		;
		o=ob(o)
		return $l(
			_j(
				[
					$r('c',o.c),N(o.w)?_p(o.w):$r('ow',o.w),
					$r('os',o.s)
				]
			)
		)
	}
	$.qs=HTML5.qs=qs=function f(a,b){
		var o={},
			s=function(o,a,b){
				o [oO('s',a)]=oO(a,b,'R')
				return o
			}
		if(S(a)){
			s(o,a,b)
		}
		else{
			_.each(a,function(v,k){ s(o,k,v) })
		}
		return o
	}
	$.CSSRule=HTML5.CSSRule=CSSRule=setRule=uu=function f(a,b){
		var sy,cl,rl
		style=sy=function(style){ return "<style type='text/css'>"+style+"</style>" }
		theRule=rl=function f(a,b){
			var style=''
			if(O(a)){
				_.each(qs(a),function(v,k){ style+=f(k,v) })
				return style
			}
			return a+':'+b+'; '
		}
		createRule=function(a,b){
			var rule=function(clas,css){ return '.'+clas+'{'+css||''+'}' }
			return hd(style(rule(a,b)))
		}
		if(O(a)){
			_.each(a,function(v,k){ f(k,v) })
		}
		createRule(a,theRule(b))
	}
	testRule=function(){
		z()
		$.div('b',400,400).A().A($.span('hifds'))
		$.CSSRule('div','color:Orange')
	}
	testStyle=function(){//WORKS
		$.div('b',400,400).A().A($.span('hifds')).id('div')
		var style=document.createElement('style');
		style.type='text/css';
		var rule='.cssClass { color: #F00; }'
		style.innerHTML=rule
		$('head').append(style)
		//////
		$('#div').K('cssClass')
	}
	$.addStyle=function(){
		_.each(
			arguments,function(rule){
				$('<style>'+rule+'</style>').A()
			}
		)
	}
	$.CSSReset=function(){
		$.CSSRule(
			{
				'*':{m:0,p:0},  //css reset
				'html,body':{h:'100%',w:'100%'},
				canvas:{d:'b'}
			}
		)
	}
	testPlugin=function(){
		z()
		d=$.div('r').WH(100).A().A('abc')
		e=$.div().WH(100).col('r').A().A('abc')
		f=$.div('r').WH(100).col('b').A().A('abc')
		g=$.div('b',500,500).A()
	}
	FRIDGEMAGNETS=function(){
		z()
		word=function(text,c1,c2){
			var s=$.span(text).C(c1,c2).A().drag()
			return s
		}
		w=word('hello','b','g')
		word('sicko','g','b')
		word('why, i oughta..','p','x')
		word('it was raining..','j','k')
		word('who ya gonna call?','h','i')
		word('dag nabit!','f','g')
		word('i like','d','e')
		word('tomorrow','a','c')
		word('me','r','b')
	}
	testCan=function(){
		z()
		c=$.canvas('o',500,500).A()
		//c.save().lineWidth(30).setStrokeColor('r').lineTo([[100,100],[150,110]]).stroke().restore().lineTo([[200,100],[200,600]]).stroke()
		// c.roundRect(100,50,100,100,50).stroke()//.fill()
		//c.line(10,10,50,500).stroke()
		c.line(
			[
				[[100,100],[200,200],[140,900]]
				// ,  [[150,150],[250,250], [20,300]]
			]
		).stroke()
		//c.line([100,100],[200,200],[150,150],[250,250] ).stroke()
		//c.line( [350,50],[25,25],  [450,10],[20,550]).stroke()
	}
	VOLUME=function(){
		outerDiv=$.div('y',400,200).A().drag()
		r=$.row().W(600)
		r.A(
			$.div().id('booksDiv').addClass('col-md-6').A()
		)
		r.A(
			$.div().id('displayDiv').addClass('col-dm-6').A($.img('guy'))
		)
		r.A().drag()
		Book=function(title){
			var book=$.div().A($('<h4>').text(title||'book')).H(60).C('b').addClass('book')
			book.display=$.img('me').hide().addClass('display')
			return book
		}
		addBook=function(title){
			var book=Book(title)
			$('#booksDiv').A(book)
			$('#displayDiv').A(book.display)
			$('.book').click(
				function(){
					$(this).id()
				}
			)
			return book
		}
		a=addBook('a')
		b=addBook('b')
	};
	//mongoError: kill mongod processess!!!!  ps ax | grep mongod
	(function($){
		"use strict";
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
	}(window.jQuery||window.Zepto||window.$))
	$.tree=function(){
		z();
		var s=200
		d=$.div().K('container')(
			$.p().K('tree_controls')(
				$.a('expand all').K('expand_all'),
				$.a('collapse all').K('collapse_all')
			)
		).A()
		quas="<li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li>"
		ter="<li><a href='#' class='tree_trigger'> &nbsp;</a> Ter <ul>"+quas+"</ul></li>"
		sec="<li><a href='#' class='tree_trigger'> &nbsp;</a> Sec"+ter+"</ul></li>"
		pri="<ul class='tree'><li><a href='#' class='tree_trigger'> &nbsp;</a> Pri <ul class='tree_expanded'>"+sec+"</ul></li></ul>"
		q=$(pri)
		//d(q)
		if(_.size($('ul.tree'))){
			$('p.tree_controls a.expand_all, p.tree_controls a.collapse_all').click(
				function(){
					if($(this).hasClass('expand_all')){
						$l('ex_all')
						$(this).parent('p').next('ul').find('a.tree_trigger').K('trigger_expanded')
						return false
					}
					else{
						$l('!ex_all')
						$(this).parent('p').next('ul').find('a.tree_trigger')
							.removeClass('trigger_expanded').end()
							.find('ul').removeClass('tree_expanded')
					}
					this.blur();
					return false
				}
			)
			$(document).on(
				'click',function(){
					if($(this).hasClass('tree_trigger')){
						if($(this).next('ul').is(':hidden')){
							$(this).K('trigger_expanded').next('ul').K('tree_expanded')
						}
						else{
							$(this).removeClass('trigger_expanded').next('ul').removeClass('tree_expanded')
						}
						this.blur()
						return false
					}
				}
			)
			$('ul.tree li:last-child').K('last')
			$('ul.tree_expanded').prev('a').K('trigger_expanded')
		}
	}
	MARGINAUTO=function(){
		z()
		outer=$.div('b',500,500).A()
		outer.A(inner=$.div('r',100,100))
		inner.mar('auto')
		outer.mar('auto')
	}
	//dH=function(a){qq(a).h($(document).height())}
	//events={}
	//events.dL=dL=function(a,b,c){document.addEventListener(oE(a),b,c)}
	//events.dR=dR=function(a,b,c){document.removeEventListener(oE(a),b,c)}
	//co=function co(a,b){return O(a)? ss(a,'C', $r('c',b) ):co($b(),a)}
	outerHTML=function(a,b,c){
		if(A(a)){
			return _e(a,"$l(E(v).outerHTML)")
		}
		$l(E(a).outerHTML)
	}
	//offset=os=function(element){if(C(element)){element=C(element)};return $(element||'body').offset()}
	//offsetLeft=osl=function(el){return offset(el).left}
	//offsetTop=ost=function(el){return offset(el).top}
	//dims
	//log dims of something
	//owh=function(d){return d.o('$$', function(){d.w()+' '+ d.h()})}
	//osP=function(a){return O(a) && a.offsetParent}
	//osT=function(a){return O(a) && a.offsetTop}
	//osL=function(a){return O(a) && a.offsetLeft}
	//cW=function(){return document.body.clientWidth }
	//cH=function(){return document.body.clientHeight }
	$.selects=function(func){
		var selects=$('select')
		if(func){
			selects.on('change',func)
		}
		return selects
	}
	$.boxes=function(func){
		var b=$("input[type='checkbox'],input[type='radio']")
		if(f){
			b.click(func)
		}
		return b
	}
	$.inputs=function(f){
		$.selects(f);
		$.boxes(f)
	}
	$.getChecked=function(name){
		var input=$("input[type='radio'][name="+name+"]:checked")
		return input.val()
	}
	$.$$=function(a,b,c){
		$('body').dblclick(a,b,c);
		return this
	}
	$.$=function(){
		var b=$('html')
		b.click.apply(b,arguments)
		return $
	}
	$.fn.pressmove=function(func){
		var mouse_pressed
		this.mousedown(
			function(){
				mouse_pressed=true
			}
		)
		this.mouseup(
			function(){
				mouse_pressed=false
			}
		)
		this.mousemove(
			function(e){
				if(mouse_pressed){
					func(e)
				}
			}
		)
		return this
	}
	$.fn.mousePoint=function(e,scale){
		scale=N(scale)?scale:1
		return V(e.pageX/scale,e.pageY/scale)
	}
	$.fn.ctx=function(){
		return this[0].getContext('2d')
	}
	$.isCan=function(can){
		if(O(can)){
			return $(can)[0].constructor.name=="HTMLCanvasElement"
		}
	}
	$.fn.wor=$.fn.world=function(){
		var can=this
		var w=b2d.wor.apply(null,arguments).bug(can,30,'*')
		w.can=can
		w.ctx=can.ctx()
		return w
	}
	dateTime=function(){
		//dep
		$.dateTime=$.date=dateTime=dt=function(a){
			var d=new Date(a)
			d.y=d.getFullYear
			d.d=d.getDate
			d.D=d.getDay
			d.M=d.getMinutes
			d.m=d.getMonth
			d.date=function(){
				return d.d()+'/'+d.m()+'/'+d.y()
			}
			d.time=function(){
				return d.h()+':'+d.M()
			}
			d.dt=function(){
				return d.date()+' '+d.time()
			}
			d.ms=d.getMilliseconds
			d.h=d.getUTCHours
			d.s=d.getSeconds
			//d.tm= d.getTime
			//d.gto= d.getTimezoneOffset
			d.udt=d.getUTCDate
			d.gud=d.getUTCDay
			d.ufy=d.getUTCFullYear
			d.gh=d.getHours
			d.gms=d.getUTCMilliseconds
			d.um=d.getUTCMinutes
			d.um=d.getUTCMonth
			d.us=d.getUTCSeconds
			return d
		}
		$.dateAndTime=dtt=function(a){
			var datetime=new Date(a)
			return datetime.date()+' '+datetime.time()
		}
	};
	dateTime()
	elements=function(){
		$.isBodyElement=function(e){
			e=$(e)[0]
			return O(e)&&uC(e.tagName)=='BODY'
		}
	};
	elements()
	//doesnt work YET
	$.fn.getPosition=$.fn.getTotalOffset=function(){
		var e=this,x=0,y=0
		while(E(e)&&e.tagName){
			y+=e.offsetTop
			x+=e.offsetLeft
			if(isBodyElement(e)){
				e=0
			}
			e=e.offsetParent||e
		}
		return {x:x,y:y}
	}//just gets the TOTAL offset of ANY element
	pro=function(){
		
		//pass in size, and then args(contents) as a list (or as an array)
		$.col=function(){
			var args=G(arguments),
				div=$.div().addClass('m'+args[0]),
				iter=A(args[1])?args[1]:args.r
			_.each(iter,function(v){ div.A(v) })
			return div
		}
		$.ipsum=function(len){
			len=len||1
			var str=''
			_.t(
				len,function(){
					str=str+
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
				}
			)
			return str
		}
		$.ipsumP=function(len){return $.p().A($.ipsum(len))}
		$.i2=$.img2=function(img,func){
			i=$.img().src(img)
			func(i[0])
			//s$(e).contains('data:')
			return i
		}
		$.i=$.img=function(source,func){
			var img=$(new Image())
			//gets rid of auto-scaling quirk
			img.load(
				function(img){
					var img=$(img.target)
					// img.W( img.W() )
					// img.H( img.H() )
				}
			)
			if(func){
				img.load(
					function(event){
						func($(event.target),event)
					}
				)
			}
			if(source){
				img.src(src(source))
			}
			return img
		}
		$.hr2=function(c,h,w){
			var e=qq('hr')
			if(N(c)){
				return hr('z',c,h)
			}
			e.h(h||2)
			e.c(c||'z')
			if(w){
				e.w(w)
			}
			;
			return e
		}
		$.sp2=function(){
			var args=G(arguments),
				theSpan=$('<span>'),str=''
			_.each(
				args,
				function(val){
					if(S(val)){
						str+=val
					}
					else{
						theSpan.A(val)
					}
				}
			)
			if(str){
				theSpan.text(str)
			}
			return theSpan
		}
		$.tH=$.thead=function(){return _a(qq($('<thead>')),arguments)}
		$.tB=$.tbody=function(){return _a(qq($('<tbody>')),arguments)}
		$.strong=function(){
			var g=G(arguments),
				s=qq($('<strong>'))
			_e(
				g,function(g){
					s(g)
				}
			)
			return s
		}
		$sc=$.section=function(a,b){return qq($('<section>')).id(a).s(b)}
		$.aOld=function(textAndId,hrefOrFunc){
			var args=G(arguments),a=args[0],hrefOrFunc=args[1],
				theEl=qq('a').id(textAndId)(textAndId)
			if(F(hrefOrFunc)){
				theEl.o(hrefOrFunc)
			}
			else{
				theEl.hr(hrefOrFunc||'#')
			}
			return (args.n)?theEl.k("dropdown-toggle")
				
				
				//  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"
				:(args.m)?li(theEl).k('active'):(args.p)?li(theEl)
				:theEl
		}
		$.headerHuhhhh=function(name,val){
			return $.input().type('header')
				.name(name).val(val)
		}
		$.header=function(){
			var header=$('<header>')
			return header
		}
		$.footer=function(){return $('<footer>')}
		$.ol=function(o,b){
			var g=G(arguments),
				ol=$('<ol>')
			_.each(g,function(v){ol.A(v)})
			return ol
		}
		$.td=function(){
			return $('<td>')
		}
		$.tr=function(){return $('<tr>')}
		$.bold=function(a,k){
			var g=G(arguments),
				h=g.p?'&nbsp;'+a:a;
			return $('<bold>').H(h).k(k)
		}
		$.iframe=function(){
			z()
			d=dva()
			ifr=qq($('<iframe>'))
			ifr.w(1000).h(1000).c('b')
			ifr.q[0].src='http://www.playboy.com'
			d(ifr).P(30)
		}
		$.th=function(a){
			var h=qq($('<th>'))
			if(a){
				h(a)
			}
			return h
		}
		$.inlineDiv=function(a,b,c){
			var theDiv=dv(a,b,c)
			theDiv.display('inline')
			return theDiv
		}
		$.inlineBlockDiv=function(a,b,c){
			var theDiv=dv(a,b,c)
			theDiv.display('inline-block')
			return theDiv
		}
		$.dva=function f(r,w,h,l,t){
			
			//color, width, height, left, top
			var g=G(arguments),r=g[0],w=g[1],h=g[2],l=g[3],t=g[4],d
			if(!S(r)){
				return g.n?
					   f($r(),r,w,h,l,'-')
					:g.p?f($r(),r,w,h,l,'+')
						   :f($r(),r,w,h,l)
			}
			d=_d().p('a').c(r).a()
			if(g.p){
				if(w){
					d.l(w)
				}
				if(h){
					d.t(h)
				}
				d.P(16)
				return d.auto()
			}
			w=w||1
			h=h||w
			d.w(w*100)
			d.h(h*100)
			l=l||0
			t=t||l
			d.l(l*100)
			d.t(t*100)
			if(g.N){
				d.drg()
			}
			return d
		}
		DEBOUNCE=function(){
			W()
			s=0
			u=0
			d=0
			l=0
			r=0
			b=w.S(600,300,'b',100)
			$.space(_.debounce(function(){$l('space '+s++)},1000))
			$.kD('u',_.debounce(function(){$l('up '+u++)},1000,true))
		}
		$.do=function(func){
			setTimeout(func,0)
			return 'nada'
		}
		//
		$.G=function self(path,dataOb,func){
			////
			//fix later!
			if(F(dataOb)){
				return self(path,{},dataOb)
			}
			dataOb=dataOb||{}
			func=func||function(){return 'boo ya!'}
			$.get(
				'/'+path,dataOb,
				function(data){
					d=data
					console.dir(data)
					func(data)
				}
			)
		}
		$.P=function(path,dataOb){
			dataOb=dataOb||{}
			if(!O(dataOb)){
				dataOb={data:dataOb}
			}
			$.post(
				'/'+path,dataOb,
				function(data){
					d=data
					console.dir(d)
				}
			)
		}
		$.qJ=qJ=function rc(u,d,f){
			var g,u,d,f
			if(U(d)){
				return _p(rc,u)
			}
			g=G(arguments);
			u=g[0];
			d=g[1];
			f=g[2]
			if(F(d)){
				f=d;
				d={}
			}
			$.getJSON(
				u,d,g.P?f:function(ss){
					_.each(ss,function(s){f(s,ss)})
				}
			)
		}
		$.qJE=qJE=function rc(u,d,f){
			var g,u,d,f
			if(U(d)){
				return _p(rc,u)
			}
			g=G(arguments);
			u=g[0];
			d=g[1];
			f=g[2]
			if(F(d)){
				f=d;
				d={}
			}
			$.getJSON(
				u,d,function(ss){
					_.each(ss,function(s){f(s,ss)})
				}
			)
		}
		$.qP=qP=function rc(u,d,f){
			var g,u,d,f
			if(U(d)){
				return _p(rc,u)
			}
			g=G(arguments);
			u=g[0];
			d=g[1];
			f=g[2]
			if(F(d)){
				f=d;
				d={}
			}
			$.post(
				u,d,g.P?f:function(ss){
					_.each(ss,function(s){f(s,ss)})
				}
			)
		}
		$.qPE=qPE=function rc(u,d,f){
			var g,u,d,f
			if(U(d)){
				return _p(rc,u)
			}
			g=G(arguments);
			u=g[0];
			d=g[1];
			f=g[2]
			if(F(d)){
				f=d;
				d={}
			}
			$.post(
				u,d,function(ss){
					_.each(ss,function(s){f(s,ss)})
				}
			)
		}
		$.qG=qG=function rc(u,d,f){
			var g,u,d,f
			if(U(d)){
				return _p(rc,u)
			}
			g=G(arguments);
			u=g[0];
			d=g[1];
			f=g[2]
			if(F(d)){
				f=d;
				d={}
			}
			$.get(
				u,d,g.P?f:function(ss){
					_.each(ss,function(s){f(s,ss)})
				}
			)
		}
		$.qGE=qGE=function rc(u,d,f){
			var g,u,d,f
			if(U(d)){
				return _p(rc,u)
			}
			g=G(arguments);
			u=g[0];
			d=g[1];
			f=g[2]
			if(F(d)){
				f=d;
				d={}
			}
			$.get(
				u,d,function(ss){
					_.each(ss,function(s){f(s,ss)})
				}
			)
		}
		$.fn.trans=function(transform){
			$l('transform')
			return this.css({transform:transform})
		}
		testCSSRotate=function(){
			z()
			//works
			$.h1('css transform: rotate').A()
			d=$.div('x',null,200).A()
			//   d.css({transform: 'translateY(300px) rotateZ(120deg)'})
			d.trans('translateY(300px) rotateZ(120deg)')
		}
		testCSSScal=function(){
			z()
			$.h1('css transform: scale').A()
			i=$.img('me').A()
			// d = $.div('r', null, 200,200).A()
			$.img('me').A().transform('scaleX(2)')
			$.img('me').A().transform('scaleY(2)')
			$.img('me').A().transform('scaleZ(2)') //does nothing?!
			$.img('me').A().transform('rotate3d(100,100,100,100)')
		}
		HTML5={}
		$.CSS=HTML5.CSS=ss=function ss(q,b,c){
			if(U(b)){
				return $l(_p(ss,q))
			}
			var s=function(a,b,c){
				if(U(c)){
					return $l(a.css(oO('s',b)))
				}
				a.css(oO('s',b),$o(b,c,'R'))
				$l(s(a,b))
				return q
			}
			q=Q(q)
			return A(b)?_r(
				b,function(m,k){
					return _s(m,k,ss(q,k))
				},{}
			)
				:O(b)?$p('s',q,b,s)
					   :s(q,b,c)
		}
		$.attrs=HTML5.attrs=aa=function aa(q,b,c){
			q=Q(q)
			var att=function(q,b,c){
				q=Q(q)
				if(U(c)){
					return q.attr(oO('a',b))
				}
				return q.attr(oO('a',b),$o(b,c,'R'))
			}
			return U(b)?_p(aa,q)
				:A(b)?_r(
				b,function(m,k){
					return _s(m,k,aa(q,k))
				},{}
			)
					   :O(b)?$p('a',q,b,att)
					 :att(q,b,c)
		}
		$.props=HTML5.props=pp=function pp(q,b,c){
			q=Q(q)
			var rop=function(q,b,c){
				q=Q(q)
				if(U(c)){
					return q.prop(oO('o',b))
				}
				return q.prop(
					oO('o',b),
					$o(b,c,'R')
				)
			}
			return U(b)?_p(HTML5.props,q)
				:A(b)?_r(
				b,function(m,k){
					return _s(m,k,HTML5.props(q,k))
				},{}
			)
					   :O(b)?$p('o',q,b,rop)
					 :rop(q,b,c)
			//ex:  val=function(type, key){return HTML5.props(type,'v',key)}
			//ex:  typ=function(type, key){return HTML5.props(type,'t',key)}
		}  //changed p -> o (oO)
		$.class=HTML5.class=kl=function(q){
			q=qq(q)
			return function kl(k,j){
				var g=G(arguments)
				if(U(k)){
					return q.at('k')
				}
				if(g.p){
					return q.q.hasClass(oO('k',k))
				}
				if(k==='-'){
					q.q.removeClass(oO('k',j))
				}
				else
					if(g.n){
						q.at('k',oO('k',k))
					}
					else{
						_e(
							_S(k,' '),function(k){
								q.q.addClass(oO('k',k))
							}
						)
					}
				$l(kl())
				return kl
			}
		}
		$.font=HTML5.font=$f=FO=function(a,b){
			if(O(a)){
				return ss(oB(b),{fz:a||50})
			}
			a=N(a)?_S(a):U(a)?'':a
			var px=function(a){return a+'px'},
				F='fantasy',W='normal',S='normal',Z=px(100)
			_e(
				a.split(' '),function(p){
					if(M(p[0])){
						p=p.split('/')
						Z=px(p[0])+((p[1])?'/'+px(p[1]):'')
					}
					F=Oo('ff',p)||F
					W=Oo('fw',p)||W
					S=Oo('fs',p)||S
				}
			)
			return [W,S,Z,F].join(' ')
		}
		$.outline=HTML5.outline=OL=function OL(o,o2,o3){
			if(Oo('c',o)){
				o={c:o,w:o2,s:o3}
			}
			if(S(o)){
				o=o.split(' ')
				return $l(
					_j(
						[
							$r('c',o[0]),_p(oO('ow',o[1]||5)),
							oO('os',o[2]||'-')
						]
					)
				)
			}
			if(N(o)){
				o={w:o}
			}
			;
			o=ob(o)
			return $l(
				_j(
					[
						$r('c',o.c),N(o.w)?_p(o.w):$r('ow',o.w),
						$r('os',o.s)
					]
				)
			)
		}
		$.qs=HTML5.qs=qs=function f(a,b){
			var o={},
				s=function(o,a,b){
					o [oO('s',a)]=oO(a,b,'R')
					return o
				}
			if(S(a)){
				s(o,a,b)
			}
			else{
				_.each(a,function(v,k){ s(o,k,v) })
			}
			return o
		}
		$.CSSRule=HTML5.CSSRule=CSSRule=setRule=uu=function f(a,b){
			var sy,cl,rl
			style=sy=function(style){ return "<style type='text/css'>"+style+"</style>" }
			theRule=rl=function f(a,b){
				var style=''
				if(O(a)){
					_.each(qs(a),function(v,k){ style+=f(k,v) })
					return style
				}
				return a+':'+b+'; '
			}
			createRule=function(a,b){
				var rule=function(clas,css){ return '.'+clas+'{'+css||''+'}' }
				return hd(style(rule(a,b)))
			}
			if(O(a)){
				_.each(a,function(v,k){ f(k,v) })
			}
			createRule(a,theRule(b))
		}
		testRule=function(){
			z()
			$.div('b',400,400).A().A($.span('hifds'))
			$.CSSRule('div','color:Orange')
		}
		testStyle=function(){//WORKS
			$.div('b',400,400).A().A($.span('hifds')).id('div')
			var style=document.createElement('style');
			style.type='text/css';
			var rule='.cssClass { color: #F00; }'
			style.innerHTML=rule
			$('head').append(style)
			//////
			$('#div').K('cssClass')
		}
		$.addStyle=function(){
			_.each(
				arguments,function(rule){
					$('<style>'+rule+'</style>').A()
				}
			)
		}
		$.CSSReset=function(){
			$.CSSRule(
				{
					'*':{m:0,p:0},  //css reset
					'html,body':{h:'100%',w:'100%'},
					canvas:{d:'b'}
				}
			)
		}
		testPlugin=function(){
			z()
			d=$.div('r').WH(100).A().A('abc')
			e=$.div().WH(100).col('r').A().A('abc')
			f=$.div('r').WH(100).col('b').A().A('abc')
			g=$.div('b',500,500).A()
		}
		FRIDGEMAGNETS=function(){
			z()
			word=function(text,c1,c2){
				var s=$.span(text).C(c1,c2).A().drag()
				return s
			}
			w=word('hello','b','g')
			word('sicko','g','b')
			word('why, i oughta..','p','x')
			word('it was raining..','j','k')
			word('who ya gonna call?','h','i')
			word('dag nabit!','f','g')
			word('i like','d','e')
			word('tomorrow','a','c')
			word('me','r','b')
		}
		testCan=function(){
			z()
			c=$.canvas('o',500,500).A()
			//c.save().lineWidth(30).setStrokeColor('r').lineTo([[100,100],[150,110]]).stroke().restore().lineTo([[200,100],[200,600]]).stroke()
			// c.roundRect(100,50,100,100,50).stroke()//.fill()
			//c.line(10,10,50,500).stroke()
			c.line(
				[
					[[100,100],[200,200],[140,900]]
					// ,  [[150,150],[250,250], [20,300]]
				]
			).stroke()
			//c.line([100,100],[200,200],[150,150],[250,250] ).stroke()
			//c.line( [350,50],[25,25],  [450,10],[20,550]).stroke()
		}
		VOLUME=function(){
			outerDiv=$.div('y',400,200).A().drag()
			r=$.row().W(600)
			r.A(
				$.div().id('booksDiv').addClass('col-md-6').A()
			)
			r.A(
				$.div().id('displayDiv').addClass('col-dm-6').A($.img('guy'))
			)
			r.A().drag()
			Book=function(title){
				var book=$.div().A($('<h4>').text(title||'book')).H(60).C('b').addClass('book')
				book.display=$.img('me').hide().addClass('display')
				return book
			}
			addBook=function(title){
				var book=Book(title)
				$('#booksDiv').A(book)
				$('#displayDiv').A(book.display)
				$('.book').click(
					function(){
						$(this).id()
					}
				)
				return book
			}
			a=addBook('a')
			b=addBook('b')
		};
		//mongoError: kill mongod processess!!!!  ps ax | grep mongod
		$.tree=function(){
			z();
			var s=200
			d=$.div().K('container')(
				$.p().K('tree_controls')(
					$.a('expand all').K('expand_all'),
					$.a('collapse all').K('collapse_all')
				)
			).A()
			quas="<li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li>"
			ter="<li><a href='#' class='tree_trigger'> &nbsp;</a> Ter <ul>"+quas+"</ul></li>"
			sec="<li><a href='#' class='tree_trigger'> &nbsp;</a> Sec"+ter+"</ul></li>"
			pri="<ul class='tree'><li><a href='#' class='tree_trigger'> &nbsp;</a> Pri <ul class='tree_expanded'>"+sec+"</ul></li></ul>"
			q=$(pri)
			//d(q)
			if(_.size($('ul.tree'))){
				$('p.tree_controls a.expand_all, p.tree_controls a.collapse_all').click(
					function(){
						if($(this).hasClass('expand_all')){
							$l('ex_all')
							$(this).parent('p').next('ul').find('a.tree_trigger').K('trigger_expanded')
							return false
						}
						else{
							$l('!ex_all')
							$(this).parent('p').next('ul').find('a.tree_trigger')
								.removeClass('trigger_expanded').end()
								.find('ul').removeClass('tree_expanded')
						}
						this.blur();
						return false
					}
				)
				$(document).on(
					'click',function(){
						if($(this).hasClass('tree_trigger')){
							if($(this).next('ul').is(':hidden')){
								$(this).K('trigger_expanded').next('ul').K('tree_expanded')
							}
							else{
								$(this).removeClass('trigger_expanded').next('ul').removeClass('tree_expanded')
							}
							this.blur()
							return false
						}
					}
				)
				$('ul.tree li:last-child').K('last')
				$('ul.tree_expanded').prev('a').K('trigger_expanded')
			}
		}
		MARGINAUTO=function(){
			z()
			outer=$.div('b',500,500).A()
			outer.A(inner=$.div('r',100,100))
			inner.mar('auto')
			outer.mar('auto')
		}
		//dH=function(a){qq(a).h($(document).height())}
		//events={}
		//events.dL=dL=function(a,b,c){document.addEventListener(oE(a),b,c)}
		//events.dR=dR=function(a,b,c){document.removeEventListener(oE(a),b,c)}
		//co=function co(a,b){return O(a)? ss(a,'C', $r('c',b) ):co($b(),a)}
		outerHTML=function(a,b,c){
			if(A(a)){
				return _e(a,"$l(E(v).outerHTML)")
			}
			$l(E(a).outerHTML)
		}
		//offset=os=function(element){if(C(element)){element=C(element)};return $(element||'body').offset()}
		//offsetLeft=osl=function(el){return offset(el).left}
		//offsetTop=ost=function(el){return offset(el).top}
		//dims
		//log dims of something
		//owh=function(d){return d.o('$$', function(){d.w()+' '+ d.h()})}
		//osP=function(a){return O(a) && a.offsetParent}
		//osT=function(a){return O(a) && a.offsetTop}
		//osL=function(a){return O(a) && a.offsetLeft}
		//cW=function(){return document.body.clientWidth }
		//cH=function(){return document.body.clientHeight }
		$.selects=function(func){
			var selects=$('select')
			if(func){
				selects.on('change',func)
			}
			return selects
		}
		$.boxes=function(func){
			var b=$("input[type='checkbox'],input[type='radio']")
			if(f){
				b.click(func)
			}
			return b
		}
		$.inputs=function(f){
			$.selects(f);
			$.boxes(f)
		}
		$.getChecked=function(name){
			var input=$("input[type='radio'][name="+name+"]:checked")
			return input.val()
		}
		$.$$=function(a,b,c){
			$('body').dblclick(a,b,c);
			return this
		}
		$.$=function(){
			var b=$('html')
			b.click.apply(b,arguments)
			return $
		}
		$.fn.pressmove=function(func){
			var mouse_pressed
			this.mousedown(
				function(){
					mouse_pressed=true
				}
			)
			this.mouseup(
				function(){
					mouse_pressed=false
				}
			)
			this.mousemove(
				function(e){
					if(mouse_pressed){
						func(e)
					}
				}
			)
			return this
		}
		$.fn.mousePoint=function(e,scale){
			scale=N(scale)?scale:1
			return V(e.pageX/scale,e.pageY/scale)
		}
		$.fn.ctx=function(){
			return this[0].getContext('2d')
		}
		$.isCan=function(can){
			if(O(can)){
				return $(can)[0].constructor.name=="HTMLCanvasElement"
			}
		}
		$.fn.wor=$.fn.world=function(){
			var can=this
			var w=b2d.wor.apply(null,arguments).bug(can,30,'*')
			w.can=can
			w.ctx=can.ctx()
			return w
		}
		dateTime=function(){
			//dep
			$.dateTime=$.date=dateTime=dt=function(a){
				var d=new Date(a)
				d.y=d.getFullYear
				d.d=d.getDate
				d.D=d.getDay
				d.M=d.getMinutes
				d.m=d.getMonth
				d.date=function(){
					return d.d()+'/'+d.m()+'/'+d.y()
				}
				d.time=function(){
					return d.h()+':'+d.M()
				}
				d.dt=function(){
					return d.date()+' '+d.time()
				}
				d.ms=d.getMilliseconds
				d.h=d.getUTCHours
				d.s=d.getSeconds
				//d.tm= d.getTime
				//d.gto= d.getTimezoneOffset
				d.udt=d.getUTCDate
				d.gud=d.getUTCDay
				d.ufy=d.getUTCFullYear
				d.gh=d.getHours
				d.gms=d.getUTCMilliseconds
				d.um=d.getUTCMinutes
				d.um=d.getUTCMonth
				d.us=d.getUTCSeconds
				return d
			}
			$.dateAndTime=dtt=function(a){
				var datetime=new Date(a)
				return datetime.date()+' '+datetime.time()
			}
		};
		dateTime()
		elements=function(){
			$.isBodyElement=function(e){
				e=$(e)[0]
				return O(e)&&uC(e.tagName)=='BODY'
			}
		};
		elements()
		//doesnt work YET
		$.fn.getPosition=$.fn.getTotalOffset=function(){
			var e=this,x=0,y=0
			while(E(e)&&e.tagName){
				y+=e.offsetTop
				x+=e.offsetLeft
				if(isBodyElement(e)){
					e=0
				}
				e=e.offsetParent||e
			}
			return {x:x,y:y}
		}//just gets the TOTAL offset of ANY element
	}
	pro=function(){
		
		//pass in size, and then args(contents) as a list (or as an array)
		$.col=function(){
			var args=G(arguments),
				div=$.div().addClass('m'+args[0]),
				iter=A(args[1])?args[1]:args.r
			_.each(iter,function(v){ div.A(v) })
			return div
		}
		$.ipsum=function(len){
			len=len||1
			var str=''
			_.t(
				len,function(){
					str=str+
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
				}
			)
			return str
		}
		$.ipsumP=function(len){return $.p().A($.ipsum(len))}
		$.i2=$.img2=function(img,func){
			i=$.img().src(img)
			func(i[0])
			//s$(e).contains('data:')
			return i
		}
		$.i=$.img=function(source,func){
			var img=$(new Image())
			//gets rid of auto-scaling quirk
			img.load(
				function(img){
					var img=$(img.target)
					// img.W( img.W() )
					// img.H( img.H() )
				}
			)
			if(func){
				img.load(
					function(event){
						func($(event.target),event)
					}
				)
			}
			if(source){
				img.src(src(source))
			}
			return img
		}
		$.hr2=function(c,h,w){
			var e=qq('hr')
			if(N(c)){
				return hr('z',c,h)
			}
			e.h(h||2)
			e.c(c||'z')
			if(w){
				e.w(w)
			}
			;
			return e
		}
		$.sp2=function(){
			var args=G(arguments),
				theSpan=$('<span>'),str=''
			_.each(
				args,
				function(val){
					if(S(val)){
						str+=val
					}
					else{
						theSpan.A(val)
					}
				}
			)
			if(str){
				theSpan.text(str)
			}
			return theSpan
		}
		$.tH=$.thead=function(){return _a(qq($('<thead>')),arguments)}
		$.tB=$.tbody=function(){return _a(qq($('<tbody>')),arguments)}
		$.strong=function(){
			var g=G(arguments),
				s=qq($('<strong>'))
			_e(
				g,function(g){
					s(g)
				}
			)
			return s
		}
		$sc=$.section=function(a,b){return qq($('<section>')).id(a).s(b)}
		$.aOld=function(textAndId,hrefOrFunc){
			var args=G(arguments),a=args[0],hrefOrFunc=args[1],
				theEl=qq('a').id(textAndId)(textAndId)
			if(F(hrefOrFunc)){
				theEl.o(hrefOrFunc)
			}
			else{
				theEl.hr(hrefOrFunc||'#')
			}
			return (args.n)?theEl.k("dropdown-toggle")
				
				
				//  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"
				:(args.m)?li(theEl).k('active'):(args.p)?li(theEl)
				:theEl
		}
		$.headerHuhhhh=function(name,val){
			return $.input().type('header')
				.name(name).val(val)
		}
		$.header=function(){
			var header=$('<header>')
			return header
		}
		$.footer=function(){return $('<footer>')}
		$.ol=function(o,b){
			var g=G(arguments),
				ol=$('<ol>')
			_.each(g,function(v){ol.A(v)})
			return ol
		}
		$.td=function(){
			return $('<td>')
		}
		$.tr=function(){return $('<tr>')}
		$.bold=function(a,k){
			var g=G(arguments),
				h=g.p?'&nbsp;'+a:a;
			return $('<bold>').H(h).k(k)
		}
		$.iframe=function(){
			z()
			d=dva()
			ifr=qq($('<iframe>'))
			ifr.w(1000).h(1000).c('b')
			ifr.q[0].src='http://www.playboy.com'
			d(ifr).P(30)
		}
		$.th=function(a){
			var h=qq($('<th>'))
			if(a){
				h(a)
			}
			return h
		}
		$.inlineDiv=function(a,b,c){
			var theDiv=dv(a,b,c)
			theDiv.display('inline')
			return theDiv
		}
		$.inlineBlockDiv=function(a,b,c){
			var theDiv=dv(a,b,c)
			theDiv.display('inline-block')
			return theDiv
		}
		$.dva=function f(r,w,h,l,t){
			
			//color, width, height, left, top
			var g=G(arguments),r=g[0],w=g[1],h=g[2],l=g[3],t=g[4],d
			if(!S(r)){
				return g.n?
					   f($r(),r,w,h,l,'-')
					:g.p?f($r(),r,w,h,l,'+')
						   :f($r(),r,w,h,l)
			}
			d=_d().p('a').c(r).a()
			if(g.p){
				if(w){
					d.l(w)
				}
				if(h){
					d.t(h)
				}
				d.P(16)
				return d.auto()
			}
			w=w||1
			h=h||w
			d.w(w*100)
			d.h(h*100)
			l=l||0
			t=t||l
			d.l(l*100)
			d.t(t*100)
			if(g.N){
				d.drg()
			}
			return d
		}
		DEBOUNCE=function(){
			W()
			s=0
			u=0
			d=0
			l=0
			r=0
			b=w.S(600,300,'b',100)
			$.space(_.debounce(function(){$l('space '+s++)},1000))
			$.kD('u',_.debounce(function(){$l('up '+u++)},1000,true))
		}
		$.do=function(func){
			setTimeout(func,0)
			return 'nada'
		}
		//
		$.G=function self(path,dataOb,func){
			////
			//fix later!
			if(F(dataOb)){
				return self(path,{},dataOb)
			}
			dataOb=dataOb||{}
			func=func||function(){return 'boo ya!'}
			$.get(
				'/'+path,dataOb,
				function(data){
					d=data
					console.dir(data)
					func(data)
				}
			)
		}
		$.P=function(path,dataOb){
			dataOb=dataOb||{}
			if(!O(dataOb)){
				dataOb={data:dataOb}
			}
			$.post(
				'/'+path,dataOb,
				function(data){
					d=data
					console.dir(d)
				}
			)
		}
		$.qJ=qJ=function rc(u,d,f){
			var g,u,d,f
			if(U(d)){
				return _p(rc,u)
			}
			g=G(arguments);
			u=g[0];
			d=g[1];
			f=g[2]
			if(F(d)){
				f=d;
				d={}
			}
			$.getJSON(
				u,d,g.P?f:function(ss){
					_.each(ss,function(s){f(s,ss)})
				}
			)
		}
		$.qJE=qJE=function rc(u,d,f){
			var g,u,d,f
			if(U(d)){
				return _p(rc,u)
			}
			g=G(arguments);
			u=g[0];
			d=g[1];
			f=g[2]
			if(F(d)){
				f=d;
				d={}
			}
			$.getJSON(
				u,d,function(ss){
					_.each(ss,function(s){f(s,ss)})
				}
			)
		}
		$.qP=qP=function rc(u,d,f){
			var g,u,d,f
			if(U(d)){
				return _p(rc,u)
			}
			g=G(arguments);
			u=g[0];
			d=g[1];
			f=g[2]
			if(F(d)){
				f=d;
				d={}
			}
			$.post(
				u,d,g.P?f:function(ss){
					_.each(ss,function(s){f(s,ss)})
				}
			)
		}
		$.qPE=qPE=function rc(u,d,f){
			var g,u,d,f
			if(U(d)){
				return _p(rc,u)
			}
			g=G(arguments);
			u=g[0];
			d=g[1];
			f=g[2]
			if(F(d)){
				f=d;
				d={}
			}
			$.post(
				u,d,function(ss){
					_.each(ss,function(s){f(s,ss)})
				}
			)
		}
		$.qG=qG=function rc(u,d,f){
			var g,u,d,f
			if(U(d)){
				return _p(rc,u)
			}
			g=G(arguments);
			u=g[0];
			d=g[1];
			f=g[2]
			if(F(d)){
				f=d;
				d={}
			}
			$.get(
				u,d,g.P?f:function(ss){
					_.each(ss,function(s){f(s,ss)})
				}
			)
		}
		$.qGE=qGE=function rc(u,d,f){
			var g,u,d,f
			if(U(d)){
				return _p(rc,u)
			}
			g=G(arguments);
			u=g[0];
			d=g[1];
			f=g[2]
			if(F(d)){
				f=d;
				d={}
			}
			$.get(
				u,d,function(ss){
					_.each(ss,function(s){f(s,ss)})
				}
			)
		}
		$.fn.trans=function(transform){
			$l('transform')
			return this.css({transform:transform})
		}
		testCSSRotate=function(){
			z()
			//works
			$.h1('css transform: rotate').A()
			d=$.div('x',null,200).A()
			//   d.css({transform: 'translateY(300px) rotateZ(120deg)'})
			d.trans('translateY(300px) rotateZ(120deg)')
		}
		testCSSScal=function(){
			z()
			$.h1('css transform: scale').A()
			i=$.img('me').A()
			// d = $.div('r', null, 200,200).A()
			$.img('me').A().transform('scaleX(2)')
			$.img('me').A().transform('scaleY(2)')
			$.img('me').A().transform('scaleZ(2)') //does nothing?!
			$.img('me').A().transform('rotate3d(100,100,100,100)')
		}
		HTML5={}
		$.CSS=HTML5.CSS=ss=function ss(q,b,c){
			if(U(b)){
				return $l(_p(ss,q))
			}
			var s=function(a,b,c){
				if(U(c)){
					return $l(a.css(oO('s',b)))
				}
				a.css(oO('s',b),$o(b,c,'R'))
				$l(s(a,b))
				return q
			}
			q=Q(q)
			return A(b)?_r(
				b,function(m,k){
					return _s(m,k,ss(q,k))
				},{}
			)
				:O(b)?$p('s',q,b,s)
					   :s(q,b,c)
		}
		$.attrs=HTML5.attrs=aa=function aa(q,b,c){
			q=Q(q)
			var att=function(q,b,c){
				q=Q(q)
				if(U(c)){
					return q.attr(oO('a',b))
				}
				return q.attr(oO('a',b),$o(b,c,'R'))
			}
			return U(b)?_p(aa,q)
				:A(b)?_r(
				b,function(m,k){
					return _s(m,k,aa(q,k))
				},{}
			)
					   :O(b)?$p('a',q,b,att)
					 :att(q,b,c)
		}
		$.props=HTML5.props=pp=function pp(q,b,c){
			q=Q(q)
			var rop=function(q,b,c){
				q=Q(q)
				if(U(c)){
					return q.prop(oO('o',b))
				}
				return q.prop(
					oO('o',b),
					$o(b,c,'R')
				)
			}
			return U(b)?_p(HTML5.props,q)
				:A(b)?_r(
				b,function(m,k){
					return _s(m,k,HTML5.props(q,k))
				},{}
			)
					   :O(b)?$p('o',q,b,rop)
					 :rop(q,b,c)
			//ex:  val=function(type, key){return HTML5.props(type,'v',key)}
			//ex:  typ=function(type, key){return HTML5.props(type,'t',key)}
		}  //changed p -> o (oO)
		$.class=HTML5.class=kl=function(q){
			q=qq(q)
			return function kl(k,j){
				var g=G(arguments)
				if(U(k)){
					return q.at('k')
				}
				if(g.p){
					return q.q.hasClass(oO('k',k))
				}
				if(k==='-'){
					q.q.removeClass(oO('k',j))
				}
				else
					if(g.n){
						q.at('k',oO('k',k))
					}
					else{
						_e(
							_S(k,' '),function(k){
								q.q.addClass(oO('k',k))
							}
						)
					}
				$l(kl())
				return kl
			}
		}
		$.font=HTML5.font=$f=FO=function(a,b){
			if(O(a)){
				return ss(oB(b),{fz:a||50})
			}
			a=N(a)?_S(a):U(a)?'':a
			var px=function(a){return a+'px'},
				F='fantasy',W='normal',S='normal',Z=px(100)
			_e(
				a.split(' '),function(p){
					if(M(p[0])){
						p=p.split('/')
						Z=px(p[0])+((p[1])?'/'+px(p[1]):'')
					}
					F=Oo('ff',p)||F
					W=Oo('fw',p)||W
					S=Oo('fs',p)||S
				}
			)
			return [W,S,Z,F].join(' ')
		}
		$.outline=HTML5.outline=OL=function OL(o,o2,o3){
			if(Oo('c',o)){
				o={c:o,w:o2,s:o3}
			}
			if(S(o)){
				o=o.split(' ')
				return $l(
					_j(
						[
							$r('c',o[0]),_p(oO('ow',o[1]||5)),
							oO('os',o[2]||'-')
						]
					)
				)
			}
			if(N(o)){
				o={w:o}
			}
			;
			o=ob(o)
			return $l(
				_j(
					[
						$r('c',o.c),N(o.w)?_p(o.w):$r('ow',o.w),
						$r('os',o.s)
					]
				)
			)
		}
		$.qs=HTML5.qs=qs=function f(a,b){
			var o={},
				s=function(o,a,b){
					o [oO('s',a)]=oO(a,b,'R')
					return o
				}
			if(S(a)){
				s(o,a,b)
			}
			else{
				_.each(a,function(v,k){ s(o,k,v) })
			}
			return o
		}
		$.CSSRule=HTML5.CSSRule=CSSRule=setRule=uu=function f(a,b){
			var sy,cl,rl
			style=sy=function(style){ return "<style type='text/css'>"+style+"</style>" }
			theRule=rl=function f(a,b){
				var style=''
				if(O(a)){
					_.each(qs(a),function(v,k){ style+=f(k,v) })
					return style
				}
				return a+':'+b+'; '
			}
			createRule=function(a,b){
				var rule=function(clas,css){ return '.'+clas+'{'+css||''+'}' }
				return hd(style(rule(a,b)))
			}
			if(O(a)){
				_.each(a,function(v,k){ f(k,v) })
			}
			createRule(a,theRule(b))
		}
		testRule=function(){
			z()
			$.div('b',400,400).A().A($.span('hifds'))
			$.CSSRule('div','color:Orange')
		}
		testStyle=function(){//WORKS
			$.div('b',400,400).A().A($.span('hifds')).id('div')
			var style=document.createElement('style');
			style.type='text/css';
			var rule='.cssClass { color: #F00; }'
			style.innerHTML=rule
			$('head').append(style)
			//////
			$('#div').K('cssClass')
		}
		$.addStyle=function(){
			_.each(
				arguments,function(rule){
					$('<style>'+rule+'</style>').A()
				}
			)
		}
		$.CSSReset=function(){
			$.CSSRule(
				{
					'*':{m:0,p:0},  //css reset
					'html,body':{h:'100%',w:'100%'},
					canvas:{d:'b'}
				}
			)
		}
		testPlugin=function(){
			z()
			d=$.div('r').WH(100).A().A('abc')
			e=$.div().WH(100).col('r').A().A('abc')
			f=$.div('r').WH(100).col('b').A().A('abc')
			g=$.div('b',500,500).A()
		}
		FRIDGEMAGNETS=function(){
			z()
			word=function(text,c1,c2){
				var s=$.span(text).C(c1,c2).A().drag()
				return s
			}
			w=word('hello','b','g')
			word('sicko','g','b')
			word('why, i oughta..','p','x')
			word('it was raining..','j','k')
			word('who ya gonna call?','h','i')
			word('dag nabit!','f','g')
			word('i like','d','e')
			word('tomorrow','a','c')
			word('me','r','b')
		}
		testCan=function(){
			z()
			c=$.canvas('o',500,500).A()
			//c.save().lineWidth(30).setStrokeColor('r').lineTo([[100,100],[150,110]]).stroke().restore().lineTo([[200,100],[200,600]]).stroke()
			// c.roundRect(100,50,100,100,50).stroke()//.fill()
			//c.line(10,10,50,500).stroke()
			c.line(
				[
					[[100,100],[200,200],[140,900]]
					// ,  [[150,150],[250,250], [20,300]]
				]
			).stroke()
			//c.line([100,100],[200,200],[150,150],[250,250] ).stroke()
			//c.line( [350,50],[25,25],  [450,10],[20,550]).stroke()
		}
		VOLUME=function(){
			outerDiv=$.div('y',400,200).A().drag()
			r=$.row().W(600)
			r.A(
				$.div().id('booksDiv').addClass('col-md-6').A()
			)
			r.A(
				$.div().id('displayDiv').addClass('col-dm-6').A($.img('guy'))
			)
			r.A().drag()
			Book=function(title){
				var book=$.div().A($('<h4>').text(title||'book')).H(60).C('b').addClass('book')
				book.display=$.img('me').hide().addClass('display')
				return book
			}
			addBook=function(title){
				var book=Book(title)
				$('#booksDiv').A(book)
				$('#displayDiv').A(book.display)
				$('.book').click(
					function(){
						$(this).id()
					}
				)
				return book
			}
			a=addBook('a')
			b=addBook('b')
		};
		//mongoError: kill mongod processess!!!!  ps ax | grep mongod
		$.tree=function(){
			z();
			var s=200
			d=$.div().K('container')(
				$.p().K('tree_controls')(
					$.a('expand all').K('expand_all'),
					$.a('collapse all').K('collapse_all')
				)
			).A()
			quas="<li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li>"
			ter="<li><a href='#' class='tree_trigger'> &nbsp;</a> Ter <ul>"+quas+"</ul></li>"
			sec="<li><a href='#' class='tree_trigger'> &nbsp;</a> Sec"+ter+"</ul></li>"
			pri="<ul class='tree'><li><a href='#' class='tree_trigger'> &nbsp;</a> Pri <ul class='tree_expanded'>"+sec+"</ul></li></ul>"
			q=$(pri)
			//d(q)
			if(_.size($('ul.tree'))){
				$('p.tree_controls a.expand_all, p.tree_controls a.collapse_all').click(
					function(){
						if($(this).hasClass('expand_all')){
							$l('ex_all')
							$(this).parent('p').next('ul').find('a.tree_trigger').K('trigger_expanded')
							return false
						}
						else{
							$l('!ex_all')
							$(this).parent('p').next('ul').find('a.tree_trigger')
								.removeClass('trigger_expanded').end()
								.find('ul').removeClass('tree_expanded')
						}
						this.blur();
						return false
					}
				)
				$(document).on(
					'click',function(){
						if($(this).hasClass('tree_trigger')){
							if($(this).next('ul').is(':hidden')){
								$(this).K('trigger_expanded').next('ul').K('tree_expanded')
							}
							else{
								$(this).removeClass('trigger_expanded').next('ul').removeClass('tree_expanded')
							}
							this.blur()
							return false
						}
					}
				)
				$('ul.tree li:last-child').K('last')
				$('ul.tree_expanded').prev('a').K('trigger_expanded')
			}
		}
		MARGINAUTO=function(){
			z()
			outer=$.div('b',500,500).A()
			outer.A(inner=$.div('r',100,100))
			inner.mar('auto')
			outer.mar('auto')
		}
		//dH=function(a){qq(a).h($(document).height())}
		//events={}
		//events.dL=dL=function(a,b,c){document.addEventListener(oE(a),b,c)}
		//events.dR=dR=function(a,b,c){document.removeEventListener(oE(a),b,c)}
		//co=function co(a,b){return O(a)? ss(a,'C', $r('c',b) ):co($b(),a)}
		outerHTML=function(a,b,c){
			if(A(a)){
				return _e(a,"$l(E(v).outerHTML)")
			}
			$l(E(a).outerHTML)
		}
		//offset=os=function(element){if(C(element)){element=C(element)};return $(element||'body').offset()}
		//offsetLeft=osl=function(el){return offset(el).left}
		//offsetTop=ost=function(el){return offset(el).top}
		//dims
		//log dims of something
		//owh=function(d){return d.o('$$', function(){d.w()+' '+ d.h()})}
		//osP=function(a){return O(a) && a.offsetParent}
		//osT=function(a){return O(a) && a.offsetTop}
		//osL=function(a){return O(a) && a.offsetLeft}
		//cW=function(){return document.body.clientWidth }
		//cH=function(){return document.body.clientHeight }
		$.selects=function(func){
			var selects=$('select')
			if(func){
				selects.on('change',func)
			}
			return selects
		}
		$.boxes=function(func){
			var b=$("input[type='checkbox'],input[type='radio']")
			if(f){
				b.click(func)
			}
			return b
		}
		$.inputs=function(f){
			$.selects(f);
			$.boxes(f)
		}
		$.getChecked=function(name){
			var input=$("input[type='radio'][name="+name+"]:checked")
			return input.val()
		}
		$.$$=function(a,b,c){
			$('body').dblclick(a,b,c);
			return this
		}
		$.$=function(){
			var b=$('html')
			b.click.apply(b,arguments)
			return $
		}
		$.fn.pressmove=function(func){
			var mouse_pressed
			this.mousedown(
				function(){
					mouse_pressed=true
				}
			)
			this.mouseup(
				function(){
					mouse_pressed=false
				}
			)
			this.mousemove(
				function(e){
					if(mouse_pressed){
						func(e)
					}
				}
			)
			return this
		}
		$.fn.mousePoint=function(e,scale){
			scale=N(scale)?scale:1
			return V(e.pageX/scale,e.pageY/scale)
		}
		$.fn.ctx=function(){
			return this[0].getContext('2d')
		}
		$.isCan=function(can){
			if(O(can)){
				return $(can)[0].constructor.name=="HTMLCanvasElement"
			}
		}
		$.fn.wor=$.fn.world=function(){
			var can=this
			var w=b2d.wor.apply(null,arguments).bug(can,30,'*')
			w.can=can
			w.ctx=can.ctx()
			return w
		}
		dateTime=function(){
			//dep
			$.dateTime=$.date=dateTime=dt=function(a){
				var d=new Date(a)
				d.y=d.getFullYear
				d.d=d.getDate
				d.D=d.getDay
				d.M=d.getMinutes
				d.m=d.getMonth
				d.date=function(){
					return d.d()+'/'+d.m()+'/'+d.y()
				}
				d.time=function(){
					return d.h()+':'+d.M()
				}
				d.dt=function(){
					return d.date()+' '+d.time()
				}
				d.ms=d.getMilliseconds
				d.h=d.getUTCHours
				d.s=d.getSeconds
				//d.tm= d.getTime
				//d.gto= d.getTimezoneOffset
				d.udt=d.getUTCDate
				d.gud=d.getUTCDay
				d.ufy=d.getUTCFullYear
				d.gh=d.getHours
				d.gms=d.getUTCMilliseconds
				d.um=d.getUTCMinutes
				d.um=d.getUTCMonth
				d.us=d.getUTCSeconds
				return d
			}
			$.dateAndTime=dtt=function(a){
				var datetime=new Date(a)
				return datetime.date()+' '+datetime.time()
			}
		};
		dateTime()
		elements=function(){
			$.isBodyElement=function(e){
				e=$(e)[0]
				return O(e)&&uC(e.tagName)=='BODY'
			}
		};
		elements()
		//doesnt work YET
		$.fn.getPosition=$.fn.getTotalOffset=function(){
			var e=this,x=0,y=0
			while(E(e)&&e.tagName){
				y+=e.offsetTop
				x+=e.offsetLeft
				if(isBodyElement(e)){
					e=0
				}
				e=e.offsetParent||e
			}
			return {x:x,y:y}
		}//just gets the TOTAL offset of ANY element
	}
}
function superCanvas(el){
	el.canvas=$(el)[0]
	el.context=el.canvas.getContext('2d')
	el.stage=new createjs.Stage(el.canvas)
	el.drawImage=el.dI=function(i){
		var args=G(arguments);
		args[1]=args[1]||0
		args[2]=args[2]||0
		el.context.drawImage.apply(el.context,args)
	}
	el.draw=function(img){
		var args=G(arguments),img=args[0]
		$.img(
			img,function(i){
				args[0]=i[0]
				el.drawImage.apply(el,args)
			}
		)
	}
	el.W=function(w){
		if(U(w)){
			return el.attr('width')
		}
		el.attr('width',w);
		return el
	}
	el.H=function(h){
		if(U(h)){
			return el.attr('height')
		}
		el.attr('height',h);
		return el
	}
	el.WH=function(w,h){
		if(U(w)){
			var width=this.W(),height=this.H()
			return {
				width:width,w:width,
				height:height,h:height
			}
		}
		h=h||w
		return this.W(w).H(h)
	}
	el.fit=function(a,X,Y){
		a||'me'
		X=X||0
		Y=Y||0
		el.draw(a,X,Y,el.width(),el.height())
		return el
	}
	//normal methods
	el.lineTo=function(x,y){
		if(A(x)){
			_.each(
				arguments,
				function(x){
					el.lineTo(x[0],x[1])
				}
			)
		}
		el.context.lineTo(x,y)
		return el
	}
	el.save=function(){
		el.context.save()
		return el
	}
	el.restore=function(){
		el.context.restore()
		return el
	}
	el.fill=function(){
		el.context.fill()
		//el.stroke()
		return el
	}
	el.stroke=function(){
		el.context.stroke()
		//el.stroke()
		return el
	}
	//normal prop (as methods)
	el.lineWidth=function(w){
		if(U(w)){
			return el.context.lineWidth
		}
		el.context.lineWidth=w
		return el
	}
	el.lineCap=function(w){
		if(U(w)){
			return el.context.lineCap
		}
		el.context.lineCap=w
		return el
	}
	el.lineJoin=function(w){
		if(U(w)){
			return el.context.lineJoin
		}
		el.context.lineJoin=w
		return el
	}
	el.globalAlpha=function(w){
		if(U(w)){
			return el.context.globalAlpha
		}
		el.context.globalAlpha=w
		return el
	}
	el.clip=function(){
		el.context.clip()
		return el
	}
	el.strokeColor=setStrokeColor=function(c){
		el.context.setStrokeColor(oO('c',c))
		return el
	}
	el.fillColor=setFillColor=function(c){
		el.context.setFillColor(oO('c',c))
		return el
	}
	el.beginPath=el.begin=function(x,y){
		el.context.beginPath()
		if(N(x)){
			el.moveTo(x,y)
		}
		if(A(x)){
			el.moveTo(x[0],x[1])
		}
		return el
	}
	el.moveTo=function(x,y){
		el.context.moveTo(x,y)
		return el
	}
	el.fillRect=function(a,b,c,d){
		a=a||0
		b=b||0
		c=c||el.W()
		d=d||el.H()
		el.context.fillRect(a,b,c,d)
		return el
	}
	el.clearRect=function(a,b,c,d){
		a=a||0
		b=b||0
		c=c||el.W()
		d=d||el.H()
		el.context.clearRect(a,b,c,d)
		return el
	}
	el.arc=function(a,b,c,d,e,f,g){
		el.context.arc(a,b,c,d,e,f,g)
		return el
	}
	el.quadraticCurveTo=function(a,b,c,d,e,f,g){
		el.context.quadraticCurveTo(a,b,c,d,e,f,g)
		return el
	}
	el.closePath=function(){
		el.context.closePath()
		return el
	}
	el.roundRect=function(X,y,width,height,radius){
		el.beginPath()
		el.moveTo(X+radius,y);
		el.lineTo(X+width-radius,y);
		el.quadraticCurveTo(X+width,y,X+width,y+radius);
		el.lineTo(X+width,y+height-radius);
		el.quadraticCurveTo(X+width,y+height,X+width-radius,y+height);
		el.lineTo(X+radius,y+height);
		el.quadraticCurveTo(X,y+height,X,y+height-radius);
		el.lineTo(X,y+radius);
		el.quadraticCurveTo(X,y,X+radius,y);
		el.closePath();
		return el
	}
	el.toDataURL=function(){
		return el.canvas.toDataURL()
	}
	//draw line ( [x,y],[x,y] || x,y,x,y )
	//draw multiple unconnected lines ( [[],[]],[[],[]] || [],[] )
	//fresh start
	el.line=function rc(p){
		var args=G(arguments),p=args[0]
		if(N(args[0])){
			el.begin(args[0],args[1])
			el.lineTo(args[2],args[3])
			el.stroke()
			return el
		}
		if(A(args[0])&&N(args[0][0])){
			el.begin(args.f)
			_.each(
				args.r,function(p){
					el.lineTo(p[0],p[1])
				}
			)
			el.stroke()
			return el
		}
		if(AA(p)){
			_.each(
				args,
				function(p){
					el.line.apply(null,p)
				}
			)
		}
		el.stroke()
		return el
	}
	//wap specific
	el.snap=el.save=function(func){
		pams={
			d:el.toDataURL(),
			dats:el.dats
		}
		$.post('/img',pams,func)
	}
	el.img=$.img()
	el.img.src(el.toDataURL())
	el.copy=function(){
		el.img.src(el.toDataURL())
		return el
	}
	el.paste=function(){
		var g=G(arguments)
		if(g.N){
			el.clearRect()
		}
		if(g.p){
			el.fit(el.img)
		}
		else{
			el.draw(el.img.src())
		}
	}
	//clear screen [+ fill with color || run fx]
	el.clear=function(a){//el.X=
		if(S(a)){
			el.fillStyle(a);
			return el.fillRect()
		}
		el.clearRect(0,0,el.W(),el.H())
		if(F(a)){
			a()
		}
		return el
	}
	el.circle=el.cir=function(X,Y,R,fs,ss){
		var g=G(arguments),
			X=g[0]||200,
			Y=g[1]||200,
			r=g[2]||1,
			fs=g[3],
			ss=g[4]
		el.beginPath()
		el.arc(X,Y,r,0,7,false)
		el.fillColor(fs)
		el.strokeColor(ss)
		el.stroke().fill()
		return el
	}
	el.$=function(func){
		el.click(
			function(e){
				func(
					e.clientX-osl(this),
					e.clientY-ost(this)
				)
			}
		)
	}
	el.$$=function(f){
		var cX=function(e){return e.clientX},
			cY=function(e){return e.clientY}
		x.q.q.dblclick(function(e){f(cX(e)-osl(x.q.q),cY(e)-ost(x.q.q))})
	}
	el.dots=function(){
		el.DOTS=[]
		el.dats=[]
		el.click(
			function(X,Y){
				el.cir(X,Y)
				el.DOTS.push([X,Y])
				el.dats.push(parseInt(X))
				el.dats.push(parseInt(Y))
				el.ln(el.DOTS)
			}
		)
		x.$$(
			function(X,Y){
				var du
				el.context.save()
				el.closePath()
				el.off()
				el.C('X')
				du=el.toDataURL()
				el.clear()
				el.clip()
				el.fit(du)
				el.C('w')
			}
		)
		return el
	}
	return el
}
function testCan(){
	z()
	c=$.canvas('o',500,500).A()
	//c.save().lineWidth(30).setStrokeColor('r').lineTo([[100,100],[150,110]]).stroke().restore().lineTo([[200,100],[200,600]]).stroke()
	// c.roundRect(100,50,100,100,50).stroke()//.fill()
	//c.line(10,10,50,500).stroke()
	c.line(
		[
			[[100,100],[200,200],[140,900]]
			// ,  [[150,150],[250,250], [20,300]]
		]
	).stroke()
	//c.line([100,100],[200,200],[150,150],[250,250] ).stroke()
	//c.line( [350,50],[25,25],  [450,10],[20,550]).stroke()
}
VOLUME=function(){
	outerDiv=$.div('y',400,200).A().drag()
	r=$.row().W(600)
	r.A(
		$.div().id('booksDiv').addClass('col-md-6').A()
	)
	r.A(
		$.div().id('displayDiv').addClass('col-dm-6').A($.img('guy'))
	)
	r.A().drag()
	Book=function(title){
		var book=$.div().A($('<h4>').text(title||'book')).H(60).C('b').addClass('book')
		book.display=$.img('me').hide().addClass('display')
		return book
	}
	addBook=function(title){
		var book=Book(title)
		$('#booksDiv').A(book)
		$('#displayDiv').A(book.display)
		$('.book').click(
			function(){
				$(this).id()
			}
		)
		return book
	}
	a=addBook('a')
	b=addBook('b')
};
//mongoError: kill mongod processess!!!!  ps ax | grep mongod
(function($){
	"use strict";
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
	};
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
}(window.jQuery||window.Zepto||window.$))
function stuff(){
	function html(){
		inp=function(){
			$.sels=$.selects=function(fn){
				var selects=$('select');
				if(fn){
					selects.on('change',fn)
				}
				return selects
			}
			$.boxes=function(fn){
				var b=$("input[type='checkbox'],input[type='radio']");
				if(fn){
					b.$(fn)
				}
				return b
			}
			$.inputs=function(f){
				$.selects(f);
				$.boxes(f)
			}
			$.getChecked=function(name){
				return $("input[type='radio'][name="+name+"]:checked").val()
			};
		};
		inp()
		oh=function(){
			$.oh=function(a,b,c){
				if(A(a)){
					return _.e(a,"$l(E(v).outerHTML)")
				}
				$l(E(a).outerHTML)
			}
			$.fn.oh=function(){
				return this[0].outerHTML
			}
			$.oh=function(){
				return $l($('body').oh())
			}
		};
		oh()
	}
}
function faceInputs(){
	//if empty, return qq-label
	// lb(label-text=, for=)
	$label=lb=function lb(l,f,n,p){
		var g=G(arguments),
			sl=qq('lb'),
			st;
		if(!g[0]){
			return sl
		}
		sl.at({for:f}).k('ctl').H(l)
		if(!g[2]){
			return sl
		}
		st=tx().at(
			{
				id:f,
				n:n,
				ph:p||'...'
			}
		)
		if(g.N){
			st.k('form-control')
		}
		return sp()(sl,st)
	}
	//el
	//_n=function(a){if(U(a)){return qq('b')}}//btn
	//_N=function(a){if(U(a)){return qq('N')}}//nav
	$form=function(){return qq('f')}
	fc=function(a){ return TextInput(a).k('form-control') }
	Form=form=function(color,action){
		var g=G(arguments),
			color=g[0],
			action=g[1],
			theForm=$form().k('form').at({role:'form'})
		// if(g.N){
		theForm.at({method:'post'})
		//}
		if(D(color)){
			theForm.c(color)
		}
		if(action){
			theForm.at({action:action})
		}
		return theForm
	}
	GetForm=function(color,action){
		var g=G(arguments),
			color=g[0],action=g[1],
			theForm=$form().k('form').at({role:'form',method:'get'})
		if(D(color)){
			theForm.c(color)
		}
		if(action){
			theForm.at({action:action})
		}
		return theForm
	}
	fo=function(a){
		var args=G(arguments),
			theForm=form().c('b')
		if(a=='i'){
			return fo().k('form-inline form-group')
		}
		if(a=='f'){
			return fo().k('form well').at({method:false,action:false})
		}
		if(a=='r'){
			return fo().k('form navbar-form navbar-right')
		}
		_.each(
			args,function(arg){
				
				//supports ['class']
				if(A(arg)){
					theForm.k(arg[0])
				}else{
					theForm(arg)
				}
			}
		)
		if(args.p){
			theForm(
				sm().v('ok')
			)
		}
		return theForm
	}
	TextInput=$input=ip=function(typ,val,Color,color){
		var args=G(arguments),
			i=qq('i').at(
				{
					type:typ||'t',
					value:val
				}
			)
		if(args.p){
			i.k('form-control')
		}
		if(Color){
			i.s('C',Color)
		}
		if(color){
			i.s('c',color)
		}
		return i
		//"<input type="text">"
	}
	$textInput=tx=function(widthOrPlaceHolderValue,id){
		var g=G(arguments),
			theTextInput=TextInput()
		//first arg either sets th width or the placeholder value
		if(N(g[0])){
			theTextInput.w(g[0])
		}else{
			theTextInput.ph(g[0])
		}
		//second arg sets the id
		theTextInput.id(g[1])
		if(g.N){
			theTextInput.k('form-control')
		}
		return theTextInput
	}
	$password=pw=function(p){return ip('p')}
	$range=rg=function(){return ip('g')}
	//text area.. +- k='fc', specify rows, cols, C,c
	$textarea=ta=function(r,c,Cl,cl){
		_ta=function(){return qq($('<textarea>'))}
		var g=G(arguments),t=_ta()
		Cl=Cl||'x'
		cl=cl||'z'
		if(g.N){
			t.k('form-control')
		}
		if(N(r)){
			t.at({R:r})
		}
		if(N(c)){
			t.at({C:c})
		}
		return t.c(Cl,cl)
	}
	//radiobtns
	gCh=function(n){
		var i=$("input[type='radio'][name="+n+"]:checked")
		return i.val()
	}
	$radiobox=rb=function(n,v,l){
		var g=G(arguments),
			checked,n=g[0],v=g[1],l=g[2]
		if(A(v)){
			v=v[0];
			checked=true
		}
		var I=n+'-'+v,
			V='&nbsp'+v+'&nbsp',
			r=ip('r').nm(n).v(v).id(I)
		if(checked){
			r.at({checked:'checked'})
		}
		return l?sp()(r,lb(l,I))
			:g.p?sp(br(),r,lb(V,I))
				   :g.N?sp(r,lb(V,I))
				 :r
	}
	RadioboxGroup=rbg=function(n,v){
		var g=G(arguments),n=g[0],v=g[1],s=sp()
		if(g.p){
			_e(v,function(v){s(rb(n,v,'+'))})
		}
		else{
			_e(v,function(v){s(rb(n,v))})
		}
		return s.id(n)
	}
	//checkboxes
	$checkbox=cb=function(n,v,l){
		var g=G(arguments),
			checked,n=g[0],v=g[1],l=g[2]
		if(A(v)){
			v=v[0];
			checked=true
		}
		var I=n+'-'+v,
			V='&nbsp'+v+'&nbsp',
			r=ip('c').nm(n).v(v).id(I)
		if(checked){
			r.at({checked:'checked'})
		}
		return l?sp()(r,lb(l,I))
			:g.p?sp(br(),r,lb(V,I))
				   :g.N?sp(r,lb(V,I))
				 :r
	}
	CheckBoxGroup=cbg=function(n,v){
		var g=G(arguments),n=g[0],v=g[1],s=sp()
		if(g.p){
			_e(v,function(v){s(cb(n,v,'+'))})
		}
		else{
			_e(v,function(v){s(cb(n,v))})
		}
		return s.id(n)
	}
	cbx=function(n,v,i){
		var g=G(arguments),
			c=ip('c'),
			s=_s()
		if(A(g[0])){
			_e(
				g,function(ar){
					s(_a(cb,ar),lb(ar[1],ar[2]))
				}
			)
			return s(br())
		}
		n=g[0]||'', v=g[1]||'', i=g[2]||''
		c.id(i).nm(n).v(v)
		return g.n?dk('cb')(lb()(n).pp(cb()))
			:g.p?c.po('c',true):c
	}
	cbl=function(n,v,i){
		var g=G(arguments)
		return sp(
			_a(cb,g),
			lb(v,i)
		)
	}
	cb2=function(m,b,v){
		var c=ip('c'),p=pg(sp(m),c.b('c',b))
		if(v){
			c.v(v)
		}
		return p
	}
	SPAM=function(){
		z()
		c=cb2('Send me spam','wantsSpam').a()
		vm={wantsSpam:ko.o(true)}
		ko.ab(vm)
	}
	SPAM2=function(){
		z()
		c=cb2('Send me spam','wantsSpam').a()
		_d().b('vs','wantsSpam')(
			'Preferred flavors of spam:',
			_d()(cb2('Cherry','flav','cherry')),
			_d()(cb2('Almond','flav','almond')),
			_d()(cb2('Glut','flav','glut'))
		).a()
		vm={
			wantsSpam:ko.o(true),
			flav:ko.oa(["cherry","almond"])
		}
		ko.ab(vm)
		//viewModel.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
	}
	messages=[
		{
			message:'zi',
			score:100,
			responses:[
				{
					response:'good coder',
					comments:[{comment:'..eh'}]
				},
				{response:'cool girl'}
			]
		},
		{
			message:'yano',
			score:3,
			responses:[
				{
					response:'is cool guy',
					comments:[
						{comment:'hi'},
						{comment:'hello'}
					]
				},
				{response:'a'},
				{response:'b'},
				{response:'fun'}
			]
		},
		{
			message:'is awesome',score:0,responses:[
			{response:'afsdafsd'}
		]
		},
		{
			message:'lame',score:20,responses:[
			{
				response:'weird',comments:[
				{comment:'not!!!!1'}
			]
			},
			{
				response:'lamer',comments:[
				{comment:'fuck ya'}
			]
			}
		]
		},
		{message:'rocks',score:4,responses:[]}
	]
	DIRT=function(){
		z()
		p1=push1
		p2=push2
		newComment=function(comments,comment){comments.push({comment:comment})}
		TextBindingSpan=spb=function(a){return sp().b('text',a) }
		_d().c('z').mg(20).fe('m')(
			h1().s('c','y')(
				TextBindingSpan('message'),
				sp(' '),
				TextBindingSpan('score'),
				p1(
					h2(
						tx(400),
						bt('new r')
					)
				),
				h2().feD('responses').s('c','r')(
					p1(TextBindingSpan('response')),
					p2(
						h4(tx(400),$button('new c'))
					),
					h4().s('c','b').feD('comments')(
						p2(
							TextBindingSpan('comment')
						)
					)
				)
			),
			br(),
			br()
		).a()
		vm={
			m:ko.oa(messages)
			,responses:ko.oa([{response:'one'},{response:'two'}])
		}
		ko.ab(vm)
		f=function(){vm.p.push({f:'jason',l:'yano'})}
	}
	BLM=function(){
		var o={}
		o.itemToAdd=ko.o('')
		o.allItems=ko.oa(['a','b','c'])
		o.selectedItems=ko.oa(['d'])
		o.addItem=function(){
			if(o.itemToAdd()!=''//&& o.allItems.indexOf(o.itemToAdd())<0
			){
				o.allItems.push(o.itemToAdd());
				o.itemToAdd('')
			}
		}
		o.removeSelected=function(){
			o.allItems.removeAll(o.selectedItems())
			o.selectedItems([])
		}
		o.sortItems=function(){o.allItems.sort()}
		return o
	}
	BETTERLIST=function(){
		z()
		_d()(
			fo().b('S','addItem')(
				sp('add item'),
				tx().b(
					{
						v:'itemToAdd'//,vu:'afterkeydown'
					}
				),
				sm('add').b('ea','itemToAdd().length>0')
			),
			_d()(
				sp('Your values:'),
				sel().h(5).b(
					{
						o:'allItems',
						so:'selectedItems'
					}
				)
			),
			_d()(
				bt('remove').b(
					{
						c:'removeSelected',
						ea:'selectedItems().length>0'
					}
				),
				bt('sort').b(
					{
						c:'sortItems',
						ea:'allItems().length>1'
					}
				)
			)
		).a()
		ko.ab(o=BLM())
	}
	FOREACH=function(){
		z()
		_d().b('fe','p')(
			pg(
				sp().b('t','f'),
				sp(' '),
				sp().b('t','l')
			)
		).a()
		vm={
			p:ko.oa(
				[
					{f:'B',l:'Bb'},
					{f:'C',l:'Cc'},
					{f:'D',l:'Dd'}
				]
			)
		}
		ko.ab(vm)
		f=function(){vm.p.push({f:'jason',l:'yano'})}
	}
	SEL=function(n,i){
		var g=G(arguments),
			s=_y().nm(n).id(i)
		if(g.N){
			s.k('form-control')
		}
		if(g.p){
			s.at({mutiple:true})
		}
		return s
	}
	OP=function(){
		var g=G(arguments),
			o=_o()(g[0])
		o.V(g[0])
		if(g.p){
			o.at({selected:true})
		}
		return o
	}
	sel=function(){
		var g=G(arguments),
			s=_s(),sl  //if(!A(g.f)){g.unshift( ['select'] )}
		if(A(g.f)){
			sl=_a(SEL,g.f)
			_e(
				g.r,function(v){
					if(S(v)){
						v=OP(v)
					}
					;
					sl(v)
				}
			)
		}
		else{
			sl=_a(SEL)
			_e(
				g,function(v){
					if(S(v)){
						v=OP(v)
					}
					;
					sl(v)
				}
			)
		}
		sl.V=function(v){
			if(U(v)){
				return sl.q.val()
			}
			sl.q.val(v)
			return sl
		}
		sl.o=function(f){
			f=f||alert
			sl.q.change(function(){ f(sl.V()) })
			return sl
		}
		return sl
	}
	selects=function(f){
		var s=$(oT('sl'))
		if(f){
			s.on(oE('/'),f)
		}
		return s
	}
	boxes=function(f){
		var b=$("input[type='checkbox'],input[type='radio']")
		if(f){
			b.on(oE('$'),f)
		}
		return b
	}
	inputs=function(f){
		selects(f);
		boxes(f)
	}
	testForm=function(){
		return _f()(
			sel(['single'],'Single','Single2'),
			sel(['multiple','+'],'Multiple','Multiple2','Multiple3'),
			cb(['check','check1','ch1'],['check','check2','ch2','+']),
			rb(['radio','radio1','r1','+'],['radio','radio2','r2'],'+'),
			sm()
		)
	}
	txb=function(a,f){
		var g=G(arguments),a=g[0],f=g[1],
			t=tx(),
			b=bt(a,function(){f(t.V())}),
			d=dv()(t,b)
		return d.a()
	}
	ASH1=function(){
		z()
		a={}
		ash=function(){return JSON.stringify(a)}
		t=txb(
			'ash',function(n){
				a[n]=[];
				ashy()
			}
		)
	}
	ashy1=function(a){
		a=a||$w['a']||[]
		d=_d()(br(3))
		_e(
			a,
			function(v,k){
				d(
					h3(k),
					br(2),
					dd=_d(),
					txb(
						'b',function(aa){
							a[k].push(aa)
						}
					)
				)
				_e(
					v,
					function(v){
						dd(
							_d()(h4(v).c('r','w')).o(
								function(){
									ashy(a[k])
								}
							)
						)
					}
				)
			}
		)
		w=win(d)
	}
	jS=function(a){
		return JSON.stringify(a)
	}
	ASH=function(){
		z()
		a=aaa()
		//ash=function(){return JSON.stringify(a)}
		t=txb(
			'ash',
			function(n){
				a.c.push(aaa(n))
				ashy()
			}
		)
	}
	ashy=function(a){
		a=a||$w['a']||[]
		d=_d()(br(3))
		_e(
			a,
			function(v,k){
				d(
					h3(k),
					br(2),
					dd=_d(),
					txb(
						'b',function(aa){
							a[k].push(aa)
						}
					)
				)
				_e(
					v,
					function(v){
						dd(
							_d()(h4(v).c('r','w')).o(
								function(){
									ashy(a[k])
								}
							)
						)
					}
				)
			}
		)
		w=win(d)
	}
		//_.find(a,function(a){return a.a==2})
	as=function(t){
		var o=O(t)?t:{
			t:t||'test',
			c:[]
		}
		o.j=function(){
			$l(jS(o));
			return o
		}
		o.n=function(a){
			_e(
				G(arguments),function(a){
					o.c.push(as(a))
				}
			)
			return o
		}
		o.a=function(a,b){
			var z=o.g(a)
			if(z){
				z.c.push(as(b))
			}
			return o
		}
		o.g=function(a){
			if(S(a)){
				return as(
					_.find(
						o.c,function(c){
							return c.t==a
						}
					)
				)
			}
			var g=G(arguments),
				ar=o.g(g.f)
			_e(
				g.r,function(a){
					if(ar){
						ar=ar.g(a)
					}
				}
			)
		}
		o.l=function(){
			d=_d().a()(
				h1(o.t),
				txb('new',function(a){ o.n(a) }),
				br(3)
			)
			_e(
				o.c,
				function(c){
					d(h3(c.t))
					_e(
						c.c,function(c){
							d(h4(c.t))
						}
					)
					d(br(2))
				}
			)
			w=win(d)
		}
		return o
	}
	function again(){
		$.sm=$.submit=$.submitButton=function(buttonText,func){
			return $.button(buttonText,func).type('submit')
		}
		$.sb=function(){
			var g=G(arguments)
			var ip=$.ip()
			ip.at('type','submit')
			ip.A()
			return ip
		}
		$.sbb=function(){
			var g=G(arguments)
			var ip=$.ip()
			ip.at('type','submit')
			return ip
		}
		$.smBt=$.submitButton=function(){
			var args=G(arguments),
				button=$button.apply(0,args)
			return button.type('submit')
		}
		//floating div of buttons
		$.bts=$.buttons=function(a,b){
			var g=G(arguments),d=dva(2)
			if(g.p){
				return bts(['start',a],['stop',b]).auto()
			}
			_.each(
				g,function(v){
					v=A(v)?v:[v]
					d(
						$button(v[0],v[1]).k(g.p?('fc'):'').M(4)
					)
				}
			)
			return d
		}
		$.btR=$.buttonRight=function(text,func){
			var b=$.button(text,func).float('right')//.display('block')
			return b
		}
		$.btL=$.buttonLeft=function(text,func){
			var b=$.button(text,func).float('left')//.display('block')
			return b
		}
		testButtonRight=function(){
			z()
			d=$.div('b',500,500).drag()
			d.A(
				b=$.buttonRight('yes')
			)
		}
		$.submit2=sm=function(a){
			var g=G(arguments)
			if(g.p){
				return $button().type('submit').k('btn btn-mini button-default').T(ok(a))
			}
			return ip('submit').k('show').v(ok(a))
		}
		$.ta=$.textarea=function(rows,cols,Cl,cl){
			var g=G(arguments),
				ta=$('<textarea>')
			Cl=Cl||'pink'
			cl=cl||'black'
			if(g.N){
				ta.K('form-control')
			}
			if(N(rows)){
				ta.attr({rows:rows})
			}
			if(N(cols)){
				ta.attr({cols:cols})
			}
			return ta.C(Cl,cl)
		}
		$.fC=function(id){
			fC=$.ip().K('form-control')
			if(id){
				fC.id(id)
			}
			return fC
		}
		//
		$.f=$.form=function(c,act){
			var g=G(arguments),o,
				f=$('<form>').K('form')
			o=g.A?{ch:g.f}:{c:g.f,a:g.s}
			if(o.ch){
				g.eF(function(el){f.A(el)})
			}
			if(o.a){
				f.attr({action:o.a})
			}
			if(o.c){
				f.C(o.c)
			}
			f.attr({method:g.p?'get':'post'})
			if(!g.n){
				f.A()
			}
			return f
		}
		$.fG=$.fGD=function(){
			var fG=$.dK('form-group').fS(20)
			return fG
		}
		$.formGet=function(c,act){
			var g=G(arguments),c=g[0],act=g[1],
				f=$.f().K('form').attr('method','get')
			if(c){
				f.C(c)
			}
			if(act){
				f.at({action:act})
			}
			return f
		}
		$.fI=$.formInline=function(a,b){
			var f=$.form().C('b').K('form-inline form-group'),
				g=G(arguments);
			_.e(g,function(g){f.A(g) });
			if(g.p){
				f.A($.submit('ok'))
			}
			return f
		}
		$.fR=$.formRight=function(a,b){
			var g=G(arguments),
				f=$.form().C('b').K('form navbar-form navbar-right');
			_.e(g,function(g){f.A(g) });
			if(g.p){
				f.A($.submit('ok'))
			}
			return f
		}
		$.fF=$.formFalse=function(a,b){
			var g=G(arguments),
				f=$.form().C('b').K('form well').attr({method:false,action:false});
			_.e(g,function(g){f.A(g) });
			if(g.p){
				f.A($.submit('ok'))
			}
			return f
		}
		$.l=function(t,fr,n,ph){
			alert('$.l')
			var g=G(arguments),lb=$('<label>'),
				ip,sp
			if(!g.f){
				return lb
			}
			lb.for(fr).K('control-label').h(t)
			if(!g[2]){
				return lb
			}
			ip=$.ip().id(fr).n(n).ph(ph||'...')
			if(!g.n){
				ip.K('form-control')
			}
			sp=$.sp().A(lb,ip)
			if(!g.n){
				$l('adding sp');
				sp.A()
			}
			return sp
		}
		$.lb=function(){
			var g=G(arguments),o,lb=$('<label>')
			o=g.A_?{ch:g.f}:
			{t:g.f,fr:g.s}
			if(o.ch){
				_.e(
					o.ch,function(ch){
						lb.A(ch)
					}
				)
				return lb
			}
			lb
				.ht(o.t)
				.for(o.fr)
			//fr=fr||t
			//lb.K('control-label')
			if(!g.n){
				lb.A()
			}
			return lb
		}
		$.ip=function(n){
			var g=G(arguments),o,ip
			ip=$('<input>').at('type','text')
			if(n){
				ip.n(n);
				ip.id(n)
			}
			o=g.O?g.f:
			  g.N_?{w:g.f,id:g.s}:
			  {ph:g.f,id:g.s,v:g.t||g.s,n:g.t||g.s}
			ip.ph(o.ph)
			if(o.w){
				ip.W(o.w)
			}
			if(o.id){
				ip.id(o.id)
			}
			if(o.v){
				ip.v(o.v)
			}
			if(o.n){
				ip.n(o.n)
			}
			ip.C(o.C||'r').col(o.c||'b')
			if(!g.n){
				ip.K('form-control')
				ip.A()
			}
			return ip
		}
		$.ipBt=function(btT,f){
			return $.d().A(
				$.ip(),
				$.bt(btT,function(){f.A(ip.V())})
			).A()
		}
		$.ta=function(rows,cols,Cl,cl){
			var g=G(arguments),
				ta=$('<textarea>');
			Cl=Cl||'p';
			cl=cl||'z';
			if(g.N){
				ta.K('form-control')
			}
			if(N(rows)){
				ta.at({rows:rows})
			}
			if(N(cols)){
				ta.at({cols:cols})
			}
			return ta.C(Cl,cl)
		}
		$.pw=function(n){
			var el=$('<input>').ty('password')
			if(n){
				el.n(n)
			}
			return el
		}
		$.bt=$.button=function(){
			var g=G(arguments),o,bt=$('<button>');
			o=g.F?{fn:g[0]}:{t:g[0],fn:g[1]};
			o.t=o.t||'submit';
			if(!g.n){
				bt.A()
			}
			return bt.T(o.t).$(o.fn)
		}
		$.BT=$.btL=function(t,fn){
			if(F(t)){
				return $.bt('submit',t)
			}
			var b=$('<button>');
			b.text(t);
			b.$(fn)
			return b.K('btn-lg')
			/*

             $.btL=  function(t,f,C,c){
             var g=G(arguments),
             t=g[0],f=g[1],C=g[2],c=g[3],
             t=t||'ok', k=  'btn-lg' , C=C||'b', c=c||'y';
             b = $.bt().K('btn-lg').c(C, c);
             b(t);if(f){ b.o( f ) }
             if( g.n ){ b.dd() }//dropdown
             return b
             }
             */
		}
		$._bt=$.btM=function(t,fn){return $.bt(t,fn).C('b').K("btn btn-mini")}
		$.bts=function(a,b){
			var g=G(arguments),d=$.dA(200);
			if(g.p){
				return $.bts(['start',a],['stop',b]).auto()
			}
			g.e(
				function(v){
					v=A(v)?v:[v];
					d.A($.bt(v[0],v[1]).k(g.p?('fc'):'').M(4))
				}
			)
			return d
		}//floating div of buttons
		$.btR=function(t,fn){
			var b=$.bt(t,fn).float('right')//.display('block')
			return b
		}
		$.$bt=$.btLf=function(t,fn){
			var b=$.bt(t,fn).float('left')//.display('block')
			return b
		}
		$.bX=$.btX=function(t,fn){
			var g=G(arguments),bt,o;
			o={
				url:g.f,
				data:g.s
			}
			t=t||g.p?'submit':'X'
			fn=fn||function(){
				var bt=this;
				$.aj(
					{
						url:o.url,data:o.data,type:'DELETE',
						success:function(){
							$(bt).pa().rm();
							if(g.n){
								$.rl()
							}
						}
					}
				)
			}
			bt=$.bt(t,fn)
			return bt
		}
		$.cb=function(n,v,lb){
			$._cb=function(){return $.ip().ty('checkbox')}
			var g=G(arguments),checked,n=g[0],v=g[1],lb=g[2],
				cb,id
			if(g.u){
				return $('<input type="checkbox">').A()
			}
			if(A(v)){
				v=v[0];
				checked=true
			}
			id=n+'-'+v
			V='&nbsp'+v+'&nbsp'
			cb=$.ip().ty('checkbox')
			cb.n(n)
			cb.v(v)
			cb.id(id)
			if(checked){
				cb.at({checked:'checked'})
			}
			cb=lb?$.sp().A(cb,$.lb(l,id))
				:g.p?$.sp().A($.br(),cb,$.lb(V,id)):
				 !g.n?$.sp().A(cb,$.lb(V,id)):
				 cb
			return cb.A()
			/*

             $.cb =function(n,v,lb){var g=G(arguments), checked, n=g[0],v=g[1],lb=g[2]
             if(A(v)){v=v[0];checked=true}
             var I=n+'-'+ v,
             V='&nbsp'+v+'&nbsp',
             cbox = $.input().type('checkbox').n(n).v(v).id(I)
             if(checked){cbox.attr({checked:'checked'})}
             return lb? $.span().A(cbox , $.lb(l,I))
             :g.p? $.span().A( $.br(), cbox , $.lb(V,I))
             :g.N? $.span().A(cbox , $.lb(V,I) )
             :cbox }

             $.cb = function self(n ,v,id, makeDivWithLabel){var g=G(arguments);
             n = g.f||''; v = g.s||'';id = g.t||'';
             cb= $.ip().ty('checkbox')
             sp  = $.sp()
             if(g.A_){_.e(g, function(ar){
             sp.A($.cb(ar[0], ar[1], ar[2], ar[3]),
             $.lb(ar[1], ar[2]))});
             return sp.A($.br())}
             cb.n(n).v(v).id(id);
             if(g.p){cb.prop('checked', true)}
             if(makeDivWithLabel!==false){cb = $.dK('checkbox').A($.lb(n).prepend( cb ))}
             return cb}

             */
		}
		$.cbG=function(n,v){
			var g=G(arguments),n=g[0],v=g[1],sp=sp();
			if(g.p){
				_.e(
					v,function(v){
						sp.A($.cb(n,v,'+'))
					}
				)
			}
			else{
				_.e(
					v,function(v){
						sp.A(
							$.cb(n,v)
						)
					}
				)
			}
			return s.id(n)
		}
		$.cbl=$.cbLb=function(){
			var g=G(arguments)
			return $.sp().A(
				$.cb(g.f,g.s,g.t,g[3]),$.lb(g.f,g.s)
			)
		}
		$.rb=function(){
			var g=G(arguments),
				chkd,n=g[0]||'n',v=g[1],lb=g[2];
			if(A(v)){
				v=v[0];
				chkd=true
			}
			var I=n+'-'+v,
				V='&nbsp'+v+'&nbsp',
				rbox=$.ip().ty('radio').n(n).v(v).id(I);
			if(chkd){
				rbox.at({checked:'checked'})
			}
			return l?
				   $.sp().A(rbox,$.lb(lb,I))
				:g.p?
				 $.sp().A($.br(),rbox,$.lb(V,I))
					   :g.N?
						$.sp().A(rbox,$.lb(V,I))
					 :rbox
		}
		$.rbG=function(n,v){
			var g=G(arguments),n=g[0],v=g[1],sp=$.sp()
			if(g.p){
				_.e(
					v,function(v){
						sp.A($.rb(n,v,'+'))
					}
				)
			}
			else{
				_.e(
					v,function(v){
						sp.A($.rb(n,v))
					}
				)
			}
			return sp.id(n)
		}
		$.sm=function(v){
			var el=$('<input>').ty('submit').fS(16)
			if(v){
				el.v(v)
			}
			return el
		}
		$.sb=function(t,fn){
			var g=G(arguments),bt=$.bt(t,fn).ty('submit')
			if(g.p){
				bt.K('btn btn-mini button-default').T(a||'ok')
			}
			//bt.A('submit').K('show')
			return bt
		}
		$.o=$.op=function(n,v){
			var g=G(arguments),
				o=$('<option>')
			o.A(g.f);
			o.v(g.s||g.f)
			// n = n||'option';  v=v||n; o.T(n).v(v)
			// o.V( g[0] )
			if(g.p){
				o.at({selected:true})
			}
			o.A()
			return o
		}
		$.SEL=function(n,i){
			var g=G(arguments),sl
			sl=$('<select>')
			sl.n(n).id(i)
			if(!g.n){
				sl.K('form-control')
			}
			if(g.p){
				sl.at({mutiple:true})
			}
			return sl
		}
		$.og=$.opGr=function(lb){
			var g=G(arguments),o,og
			o=g.S_?{lb:g.f,ch:g.s}:{ch:g.f}
			og=$('<optgroup>')
			if(o.lb){
				og.at('label',o.lb)
			}
			if(o.ch){
				if(A(o.ch)){
					_.e(
						o.ch,function(q){
							
							//if(N(q)){q =''+ q }
							if(S(q)){
								q=$.o(q)
							}
							og.A(q)
						}
					)
				}
				else{
					og.A(o.ch)
				}
			}
			og.A()
			return og
		}
		$.sl=function(){
			var g=G(arguments),sl=$('<select>').A()
			if(g.A_){
				g.eF(
					function(o){
						if(N(o)){
							o=''+o
						}
						if(S(o)){
							o=$.o(o)
						}
						sl.A(o)
					}
				)
			}
			if(g.p){
				sl.multiselect()
			}
			/*
             //if(!A(g.f)){g.unshift( ['select'] )}

             if(A(g.f)){
             sl= $.sel.apply($, g.f);
             _.e(g.r,function(v){
             if(S(v)){v = $.op(v)}
             sl(v)})}
             else {sl= $.sel();
             _.e(g,function(v){if (S(v)) {v = $.o(v)}
             sl(v)})  }


             */
			sl.V=function(v){
				if(U(v)){
					return sl.q.v()
				}
				sl.v(v);
				return sl
			}
			sl.o=function(f){
				f=f||alert
				sl.change(function(){ f(sl.V()) })
				return sl
			}
			if(g.O){
				g.eF(
					function(v,k){
						sl.A($.o(k,v))
					}
				)
			}
			return sl
			//$.sl(['volvo', $.op('merc'), 'saab' ])
			//$('<select multiple>').A().A(  $.op('merc'),        $.op('merc1'),        $.op('merc2'))
			//$('<select size="3">').A().A($.op('merc'), $.op('merc1'),  $.op('merc2'))
		}
		$sel=function(){
			var g=G(arguments)
			var sl=$.sl().id(g.f)
			_.e(
				g.r,function(g){
					var o=$.op(g).v(g)
					sl.A(o)
				}
			)
			sl.A()
			return sl
		}
		$.rg=function(n,m,M){
			m=N(m)?m:0;
			M=N(M)?M:100;
			n=n||'r';
			var r=$('<input type="range">');
			r.attr({name:n,min:m,max:M});
			return r
		}
		$.dropDown=function(a,f){
			var l=$('<a>').id(a).A(a)
			if(F(f)){
				l.click(f)
			}
			else{
				l.href(f||'#')
			}
			return l.K('dropdown-toggle')
				.at({'data-target':'dropdown'})
		}
		$.active=function(a,f){
			var l=$('<a>').id(a).A(a)
			if(F(f)){
				l.$(f)
			}
			else{
				l.href(f||'#')
			}
			return l.K('active')
		}
		TXFO=function(){
			z()
			return $.form().A(
				$.sel(
					['single'],
					'Single',
					'Single2'
				),
				$.sel(
					['multiple','+'],
					'Multiple','Multiple2','Multiple3'
				),
				$.cb(
					['check','check1','ch1'],
					['check','check2','ch2','+']
				),
				$.rb(
					['radio','radio1','r1','+'],
					['radio','radio2','r2'],
					'+'
				),
				$.submit()
			).A()
		}
		TXF=function(){
			z();
			$.f().A(
				$.sel(['sing'],'Sing','Sing2'),
				$.sel(['mult','+'],'Mult','Mul2','Mult3'),
				$.cb(['ch','ch1','ch1'],['ch','ch2','ch2','+']),
				$.rb(['ra','ra1','r1','+'],['ra','ra2','r2'],'+'),
				$.submit()
			).A()
		}
		BTR=function(){
			z();
			d=$.d('b',500,500,'+').A(b=$.btR('yes'))
		}
		old=function(){
			$c=function(c,w,h){
				var g=G(arguments),o
				o=S(c)?{c:g[0],w:g[1],h:g[2]}:{w:g[0],h:g[1]}
				o.c=o.c||'y'
				return $.c(o.c,o.w||500,h,'+').al(.8)
			}
			//avail=bbM({url:'/sts'})
			//avails=bbC({model:avail, url:'/sts'})
			c3X=function(a){ return $.c(300).fit(a) };
			johnX=function(){
				var o={};
				o.d=3;
				o.a=function(){o.d++};
				o.g=function(){return o.d};
				return o
			};
			fredX=function(){
				var o=john();
				o.m=function(){o.d--};
				return o
			};
			REQUESTSX=function(){
				var c=CT(),d=dv('y',800,600);
				c(
					d(
						h1('Buddy requests'),br(),
						MB=_d().w(600).h(500)()
					).$$(function(){d.drg()})
				);
				qG(
					'/gRq',function(msgs){
						_e(
							msgs,function(msg){
								MB(
									_d()(
										h6('from '+msg.fr+' on '+msg.dt),
										h5(msg.m),
										bt('accept',function(){qP('/yRq',{u:msg.fr})}),bt('deny'),hr()
									)
								)
							}
						)
					}
				)
			};
			USERSX=function(){
				CT(h1('Users: '),br(),rr=row());
				getUsers(
					function(u){
						_e(
							u,function(u){
								qP(
									'/dud',{d:u.m},function(m){
										rr(
											tn(pg(u.u),br(),m).o(
												function(){
													win(
														_d()(
															br(),hr(),h3('User: '+u.u),br(),
															xc().w(300).h(300).f(m),s=h1(),d=_d(),
															ms=ta().c('w','z'),bt('mail',function(){qP('/sMsg',{m:ms.V(),to:u.u})}),
															bt('chat',function(){iMsg(u.u,ms.V())}),
															bt('buddy-request',function(){qP('/sRq',{to:u.u})})
														)
													);
													prof(u.u,d);
													wUSt(
														u.u,function(s){
															d(h1('STATUS: '+s));
															d(
																bt('comment',function(){iMsg(u.u,ms.V())}),
																bt('see feed',function(){iMsg(u.u,ms.V())}),
																bt('see blog',function(){BLOG(u.u)}),
																bt('challenge',function(){qP('/sRq',{to:u.u})})
															)
														}
													)
												}
											)
										)
									}
								)
							}
						)
					}
				);
				tab1=[
					'users',function(){
					}
				];
				tab2=['a',function(){}];
				tab3=['a',function(){}];
				tab4=['a',function(){}];
				s2(t=tabs(tab1,tab2,tab3,tab4));
				t.load()
			};
			BLOGX=function(u){
				z();
				WAPNAV();
				format();
				s1(h1('user '+u+' blog'));
				qG('/pstu',{u:u},function(i){blp(i,s2,'+')},'+')
			};
			$autoDivX=autoX=function(){
				var g=G(arguments),
					d=$.d().auto();
				_.e(g,function(g){ d.A(g) });
				return d
			};
			showTabX=shwX=function(a){
				qi(a).q.tab('show');
				//return a
			};
			firstChildX=ch$X=function(a){ a.ch(0).$() };
			TabX=tabX=function(tabText,func){
				var g=G(arguments),
					tabText=g[0],
					func=g[1],
					theLi=$liA(
						tabText,
						function(){
							showTab(tabText);
							func()
						}
					);
				theLi.load=function(){
					showTab(tabText);
					func()
				};
				if(g.m){
					theLi.k('active')
				}
				return theLi
			};
			$passwordX=function(){return ip().type('password').k('form-control')};
			tabsX=function(a){
				var g=G(arguments),a=g[0],d,u;
				d=$.d('X').WH('auto').A(
					theUlNav=$.ul().K('nav nav-tabs'),
					TABS=$.sp()
				);
				//ok so a can already be a tag.. OR, if you pass in an array, it will make it a tag for :)
				if(A(a)){
					a=$.tab.apply($.tab,a)
				}
				theUlNav(a);
				_.e(
					g.r,function(a){
						if(A(a)){
							a=_a(tab,a)
						}
						theUlNav(a)
					}
				);
				d.load=function(){
					a.children[0].$();
					return d
				};
				return d
			}
		}
	}
	
	function inputs(){
		$.fn.tt=$.fn.tit=$.fn.title=function(t,c){
			var p
			p=$.p(t).fS(24).K('text-center').C('X',c||'z').mH(10).pH(30)
			this.A(p,$.hr().fS(10))
			return this
		}
		$.fn.chk=function(){ this.at('checked',true) }
		$.fn.dismiss=function(a){
			return this.attr('data-dismiss',a)
		}
		$.fn.el=function(e){
			if(U(e)){
				console.log($('<div>').append(this.clone()).html())
				return this
			}
		}
		$.fn.dismiss=function(a){
			return this.attr('data-dismiss',a)
		}
		$.fn.delButton=function(){
			var that=this
			this.prepend(
				$.div().A(
					$.button('x',function(){ that.remove() }).K('pull-right').mar(20)
				)
			)
			return this
		}
		$.fn.xBt=$.fn.delButton=function(){
			var el=this
			el.pp(
				$.d().A(
					$.bt('x',function(){ el.rm() })
						.K('pull-right').mar(20)
				)
			)
			return el
		}
		oO.V=function(a){return _.values(S(a)?oO(a):a)}
		$.oR=onReady=_k=function(a){return O(a)&&a.complete}
		$.ld=function(a,b){
			$(a).load(b);
			return a
		}
		$.ht=function(a){
			var ht=$('html')
			if(U(a)){
				return ht
			}
		}
		_.c=function(c,orC){
			if(c=='*'){
				c=$r()
			}
			;
			return oO('c',c||orC)
		}
		$$$=function(a){$(_v(a))}
		$.sels=$.selects=function(fn){
			var selects=$('select');
			if(fn){
				selects.on('change',fn)
			}
			return selects
		}
		$.boxes=function(fn){
			var b=$("input[type='checkbox'],input[type='radio']");
			if(fn){
				b.$(fn)
			}
			return b
		}
		$.inputs=function(f){
			$.selects(f);
			$.boxes(f)
		}
		$.getChecked=function(name){return $("input[type='radio'][name="+name+"]:checked").val()};
		$.word=function(t,c1,c2){return $.sp(t).C(c1,c2).A().dg()}
		$.fn.trans=function(transform){
			$l('transform')
			return this.css({transform:transform})
		}
		//dH=function(a){qq(a).h($(document).height())}
		//events={}
		//events.dL=dL=function(a,b,c){document.addEventListener(oE(a),b,c)}
		//events.dR=dR=function(a,b,c){document.removeEventListener(oE(a),b,c)}
		//co=function co(a,b){return O(a)? ss(a,'C', $r('c',b) ):co($b(),a)}
		$.selects=function(func){
			var selects=$('select')
			if(func){
				selects.on('change',func)
			}
			return selects
		}
		$.boxes=function(func){
			var b=$("input[type='checkbox'],input[type='radio']")
			if(f){
				b.click(func)
			}
			return b
		}
		$.inputs=function(f){
			$.selects(f);
			$.boxes(f)
		}
		$.getChecked=function(name){
			var input=$("input[type='radio'][name="+name+"]:checked")
			return input.val()
		}
	}
	
	function oldButtons(){
		$button=bt=function(t,f,C,c){
			var g=G(arguments),
				t=g[0]||'ok',
				f=g[1],
				C=g[2]||'b',
				c=g[3]||'y',
				buttonClass=g.p?'btn-lg':'btn-mini'
			var button=qq('b').type('button').k('btn').k(buttonClass).c(C,c)
			button(t)
			if(f){
				button.$(f)
			}
			if(g.n){
				button.dd()
			}//dropdown
			return button
		}
		ButtonLarge=function(t,f,C,c){
			var g=G(arguments),
				t=g[0],f=g[1],C=g[2],c=g[3],
				t=t||'ok',
				k='btn-lg',
				C=C||'b',
				c=c||'y'
			b=qq('b').ty('b').k('btn').k('btn-lg').c(C,c)
			b(t)
			if(f){
				b.o(f)
			}
			if(g.n){
				b.dd()
			}//dropdown
			return b
		}
		SubmitButton=function(){
			var args=G(arguments),
				button=$button.apply(0,args)
			return button.type('submit')
		}
		bti=function(a,b,s){
			return $button(a).id(b).s(s)
		}
		//floating div of buttons
		bts=function(a,b){
			var g=G(arguments),d=dva(2)
			if(g.p){
				return bts(['start',a],['stop',b]).auto()
			}
			_.each(
				g,function(v){
					v=A(v)?v:[v]
					d(
						$button(v[0],v[1]).k(g.p?('fc'):'').M(4)
					)
				}
			)
			return d
		}
		//button group, and button-group-vertical(+)
		btg=function(a){
			var g=G(arguments),
				a=g[0],
				b=dk(g.p?'bgv':'bg')
			if(g.n){
				return bt('-')(
					a||'menu'+' ',car()
				)
			}
			_.each(
				g,function(v){
					b(S(v)?bt(v):A(v)?$button(v[0],v[1]):v)
				}
			)
			return b
		}
		//nice button dropdown menu.. gotta fix
		btd=function(a){
			var g=G(arguments),a=g[0],
				b=btg()(btg(a,'-')),
				u=ul('-')
			_.each(
				g.r,function(v){
					if(S(v)){
						v=lik(v)
					}
					u(v)
				}
			)
			return b(u)
		}
		//bt: green/white, block-float left
		$buttonRight=btr=function(t,f,C,c){
			return bt(t,f,C,c)
				.s(
				{
					C:'g',
					c:'w',
					y:'b',
					fl:'r'
				}
			)
		}
		$.buttonRight=function(text,func){
			var b=$.button(text,func).float('right')//.display('block')
			return b
		}
		$.buttonLeft=function(text,func){
			var b=$.button(text,func).float('left')//.display('block')
			return b
		}
		BUTTONRIGHT=function(){
			z()
			d=$.div('b',500,500).drag()
			d.A(
				b=$.buttonRight('yes')
			)
		}
		//bt: green/white, block -float left
		$buttonLeft=function(t,f,C,c){
			return bt(t,f,C,c)
				.s({C:'g',c:'w',y:'b',fl:'l'})
		}
		sm=function(a){
			var g=G(arguments)
			if(g.p){
				return $button().type('submit').k('btn btn-mini button-default').T(ok(a))
			}
			return ip('submit').k('show').v(ok(a))
		}
		fSm=function(){
			return qq($('.submit'))
		}
		VERT=function(){
			z()
			row2(im('me'),im('me')).a()
		}
	}
}





// jqui http://jsfiddle.net/ManojRK/pQ9rj/
// http://jsfiddle.net/rniemeyer/YNCTY/
// sass
// mixins: insert new css pos, and new rules
// extend: share pops/styles between selectors

//placeholders: help extend to gen more effient output


//less
//mixins: a way of  of including ("mixing in") a bunch of properties from one rule-set into another rule-set


function alpha() {
    function locatin() {
        loc = $w.location
        loc.h = loc.href
        loc.hn = loc.hostname
        loc.ha = loc.hashn
        loc.H = loc.host
        loc.p = loc.port
        loc.pn = loc.pathname
        loc.P = loc.protocol
        loc.s = loc.search
        loc.rl = loc.reload
        loc.H = loc.host
        loc.rp = loc.replace
        loc.a = loc.assign
        hst = $w.history
        hst.b = hst.back
        hst.f = hst.forward
        hst.g = hst.go
        hst.l = hst.length
        nvg = navigator
        nvg.o = nvg.onLine
        rl = function () {
            $w.location = $w.location
        }
        rL = function () {
            location.reload(true)
        }

    }
    function worker(){

        jsBlob=function(f){
            return new Blob(['('+f.toString()+')()'],{
                type:"text/javascript"})}
        wrk=function(a){
            cou=function(a){return $w.URL.createObjectURL(a)}
            a=cou(jsBlob(a))
            var g=G(arguments),
                w= g.p? new sharedWorker(a):
                    new Worker(a)
            w.t=w.terminate
            w.pm=w.postMessage
            w.m=function(f){w.onmessage=f}
            return w
        }
        work=function(){
            w=wrk(function(){postMessage('hi')})
            w.m(function(e){$l('Worker said: '+e.data)})
        }


    }
    function windows(){
        _.iWd=  function(a){//Wd=
            if(O(a)){if( s$(a).contains('Window') ||
                s$(a[0]).contains('Window')){
                return window}}
        }
        $.rl=$.reload=function(){window.location=window.location}
        wnd=function(a){
            var g=G(arguments),a=g[0]
            if(g.n){return a.close()}
            return $w.open()
        }
        makeAllExtLinksOpenInNewWindows=function(){
            $("a[href^='http://']").attr('target','_blank')}
        accessParentFrame=function(){
            frames[0].parent===$w}
        accessChildFrame=function(){
            frames[0].window.location.reload}
        accessTopFrame=function(){
            $w.frames[0].window.top===$w.top}
        accessFrameByName=function(f){$w.frames[f]===$w.frames[0].location.reload}
        open=function(c){$w.open(_S(c), 'new_window','width=310,height=30')}

    }

    $.l = function (link) {
        if (link) {
            window.location = link
        }
        return window
    }
    /*

     loc=$w.location
     loc.h=loc.href
     loc.hn=loc.hostname
     loc.ha=loc.hashn
     loc.H=loc.host
     loc.p=loc.port
     loc.pn=loc.pathname
     loc.P=loc.protocol
     loc.s=loc.search
     loc.rl=loc.reload
     loc.H=loc.host
     loc.rp=loc.replace
     loc.a=loc.assign


     hst=$w.history
     hst.b=hst.back
     hst.f=hst.forward
     hst.g=hst.go
     hst.l=hst.length

     nvg=navigator
     nvg.o=nvg.onLine

     rl=function(){$w.location=$w.location}
     rL=function(){location.reload(true)}




     scr=function(a){var s=screen

     if(a){return {w:s.width,       h:s.height,
     aw:s.availWidth,  ah:s.availHeight,
     at:s.availTop,    al:s.availLeft}}

     var o={w:W(),h:H()}

     o.c=o.w+', '+o.h,o.t='screen size: '+ o.c

     return o}
     */

    wnd = function (a) {
        var g = G(arguments), a = g[0]
        if (g.n) {
            return a.close()
        }
        return $w.open()
    }

    makeAllExtLinksOpenInNewWindows = function () {
        $("a[href^='http://']").attr('target', '_blank')
    }


    accessParentFrame = function () {
        frames[0].parent === $w
    }
    accessChildFrame = function () {
        frames[0].window.location.reload
    }
    accessTopFrame = function () {
        $w.frames[0].window.top === $w.top
    }
    accessFrameByName = function (f) {
        $w.frames[f] === $w.frames[0].location.reload
    }


    open = function (c) {
        $w.open(_S(c),
            'new_window', 'width=310,height=30')
    }


//workers
    jsBlob = function (f) {
        return new Blob(['(' + f.toString() + ')()'], {
            type: "text/javascript"
        })
    }
    wrk = function (a) {
        cou = function (a) {
            return $w.URL.createObjectURL(a)
        }

        a = cou(jsBlob(a))
        var g = G(arguments),
            w = g.P ? new Worker(a) : new sharedWorker(a)
        w.t = w.terminate
        w.pm = w.postMessage
        w.m = function (f) {
            w.onmessage = f
        }
        return w
    }
    work = function () {
        w = wrk(function () {
            postMessage('hi')
        })
        w.m(function (e) {
            $l('Worker said: ' + e.data)
        })
    }


    STORAGE = function () {
        z()

        saveFromLocStor = function () {
            i = ta().id('input')
            i.q.value = localStorage.getItem('myText') || ''
            i.o('u', function () {
                localStorage.setItem('mytext', i.value)
            }, false)
        }

        readDatFromOtherPageLoc = function () {
            //put windows side by side and watch one update the other
            i = qi('input')
            I(function () {

                i.q.value = localStorage.getItem('myText') || ''
            }, 50)
        }


        saveFromSesStor = function () {
            i = ta().id('input')
            i.q.value = sessionStorage.getItem('myText') || ''
            i.o('u', function () {
                sessionStorage.setItem('mytext', i.value)
            }, false)
        }


    }
    ssS = sessionStorage
    sR = function (a) {
        var i = ssS.getItem(a)
        ssS.removeItem(a)
        return i
    }
    sS = function (a, b) {
        ssS.setItem(a, b);
        return ssS
    }
    sG = function (a) {
        return ssS.getItem(a)
    }
    sL = function () {
        return ssS.length
    }
    sX = function () {
        ssS.clear();
        return ssS
    }
    lcS = localStorage
    lR = function (a) {
        var i = lcS.getItem(a)
        lcS.removeItem(a)
        return i
    }
    lS = function (a, b) {
        lcS.setItem(a, b);
        return lcS
    }
    lG = function (a) {
        return lcS.getItem(a)
    }
    lL = function () {
        return lcS.length
    }
    lX = function () {
        lcS.clear();
        return lcS
    }


}
function alph(){
    isWindow = function(a){alert('isWindow'); if(O(a)){
        if( s$(a).contains('Window') ||
            s$(a[0]).contains('Window')){
            return window}
    }}

    $.fn.in=function(num){
        var g=G(arguments)
        this.delay(num * 1000)
        return this
    }
}
old=function(){

    drag = drg = function (element) {
        var q = $b(qq(element).q).css({position: 'absolute'}).on('mousedown', function (e) {
            var offset = $(this).offset(),
                deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top
            $('html').on('mousemove', function (e) {
                q.css({left: e.pageX - deltaX, top: e.pageY - deltaY})
            })
                .on('mouseup', function () {
                    $(this).off()
                })

        })

        touchDrg(element)
        return qq(element)

    }

}
old=function() {
    tf = function () {
        alert('tf')
        var g = G(arguments)
        t = n = 1
        $.in(1, function () {
            t = 0
        })

        $.ev(1, function () {
            if (t) {
                n = n + 1

                co()

            }

            else {
                $l(n)
            }
        })

    }

}

$.K = function (o) {
    alert('cjs.Keys')
    function oldFn() {
        if (!O(o)) {
            return
        }
        if (F(o.u)) {
            cjs.tick(function () {
                if (cjs.Keys.u) {
                    o.u(cjs.Keys.u)
                }
            })
        }
        if (F(o.d)) {
            cjs.tick(function () {
                if (cjs.Keys.d) {
                    o.d(cjs.Keys.d)
                }
            })
        }
        if (F(o.l)) {
            cjs.tick(function () {
                if (cjs.Keys.l) {
                    o.l(cjs.Keys.l)
                }
            })
        }
        if (F(o.r)) {
            cjs.tick(function () {
                if (cjs.Keys.r) {
                    o.r(cjs.Keys.r)
                }
            })
        }
    }
}

later=function(){
	
	
	
	
	
	
	
	// jqui http://jsfiddle.net/ManojRK/pQ9rj/
	// http://jsfiddle.net/rniemeyer/YNCTY/
	// sass
	// mixins: insert new css pos, and new rules
	// extend: share pops/styles between selectors
	//placeholders: help extend to gen more effient output
	//less
	//mixins: a way of  of including ("mixing in") a bunch of properties from one rule-set into another rule-set
	function alpha(){
		function locatin(){
			loc=$w.location
			loc.h=loc.href
			loc.hn=loc.hostname
			loc.ha=loc.hashn
			loc.H=loc.host
			loc.p=loc.port
			loc.pn=loc.pathname
			loc.P=loc.protocol
			loc.s=loc.search
			loc.rl=loc.reload
			loc.H=loc.host
			loc.rp=loc.replace
			loc.a=loc.assign
			hst=$w.history
			hst.b=hst.back
			hst.f=hst.forward
			hst.g=hst.go
			hst.l=hst.length
			nvg=navigator
			nvg.o=nvg.onLine
			rl=function(){
				$w.location=$w.location
			}
			rL=function(){
				location.reload(true)
			}
		}
		
		function worker(){
			jsBlob=function(f){
				return new Blob(
					['('+f.toString()+')()'],{
						type:"text/javascript"
					}
				)
			}
			wrk=function(a){
				cou=function(a){return $w.URL.createObjectURL(a)}
				a=cou(jsBlob(a))
				var g=G(arguments),
					w=g.p?new sharedWorker(a):
					  new Worker(a)
				w.t=w.terminate
				w.pm=w.postMessage
				w.m=function(f){w.onmessage=f}
				return w
			}
			work=function(){
				w=wrk(function(){postMessage('hi')})
				w.m(function(e){$l('Worker said: '+e.data)})
			}
		}
		
		function windows(){
			_.iWd=function(a){//Wd=
				if(O(a)){
					if(s$(a).contains('Window')||
						s$(a[0]).contains('Window')){
						return window
					}
				}
			}
			$.rl=$.reload=function(){window.location=window.location}
			wnd=function(a){
				var g=G(arguments),a=g[0]
				if(g.n){
					return a.close()
				}
				return $w.open()
			}
			makeAllExtLinksOpenInNewWindows=function(){
				$("a[href^='http://']").attr('target','_blank')
			}
			accessParentFrame=function(){
				frames[0].parent===$w
			}
			accessChildFrame=function(){
				frames[0].window.location.reload
			}
			accessTopFrame=function(){
				$w.frames[0].window.top===$w.top
			}
			accessFrameByName=function(f){$w.frames[f]===$w.frames[0].location.reload}
			open=function(c){$w.open(_S(c),'new_window','width=310,height=30')}
		}
		
		$.l=function(link){
			if(link){
				window.location=link
			}
			return window
		}
		/*
	
		 loc=$w.location
		 loc.h=loc.href
		 loc.hn=loc.hostname
		 loc.ha=loc.hashn
		 loc.H=loc.host
		 loc.p=loc.port
		 loc.pn=loc.pathname
		 loc.P=loc.protocol
		 loc.s=loc.search
		 loc.rl=loc.reload
		 loc.H=loc.host
		 loc.rp=loc.replace
		 loc.a=loc.assign
	
	
		 hst=$w.history
		 hst.b=hst.back
		 hst.f=hst.forward
		 hst.g=hst.go
		 hst.l=hst.length
	
		 nvg=navigator
		 nvg.o=nvg.onLine
	
		 rl=function(){$w.location=$w.location}
		 rL=function(){location.reload(true)}
	
	
	
	
		 scr=function(a){var s=screen
	
		 if(a){return {w:s.width,       h:s.height,
		 aw:s.availWidth,  ah:s.availHeight,
		 at:s.availTop,    al:s.availLeft}}
	
		 var o={w:W(),h:H()}
	
		 o.c=o.w+', '+o.h,o.t='screen size: '+ o.c
	
		 return o}
		 */
		wnd=function(a){
			var g=G(arguments),a=g[0]
			if(g.n){
				return a.close()
			}
			return $w.open()
		}
		makeAllExtLinksOpenInNewWindows=function(){
			$("a[href^='http://']").attr('target','_blank')
		}
		accessParentFrame=function(){
			frames[0].parent===$w
		}
		accessChildFrame=function(){
			frames[0].window.location.reload
		}
		accessTopFrame=function(){
			$w.frames[0].window.top===$w.top
		}
		accessFrameByName=function(f){
			$w.frames[f]===$w.frames[0].location.reload
		}
		open=function(c){
			$w.open(
				_S(c),
				'new_window','width=310,height=30'
			)
		}
		//workers
		jsBlob=function(f){
			return new Blob(
				['('+f.toString()+')()'],{
					type:"text/javascript"
				}
			)
		}
		wrk=function(a){
			cou=function(a){
				return $w.URL.createObjectURL(a)
			}
			a=cou(jsBlob(a))
			var g=G(arguments),
				w=g.P?new Worker(a):new sharedWorker(a)
			w.t=w.terminate
			w.pm=w.postMessage
			w.m=function(f){
				w.onmessage=f
			}
			return w
		}
		work=function(){
			w=wrk(
				function(){
					postMessage('hi')
				}
			)
			w.m(
				function(e){
					$l('Worker said: '+e.data)
				}
			)
		}
		STORAGE=function(){
			z()
			saveFromLocStor=function(){
				i=ta().id('input')
				i.q.value=localStorage.getItem('myText')||''
				i.o(
					'u',function(){
						localStorage.setItem('mytext',i.value)
					},false
				)
			}
			readDatFromOtherPageLoc=function(){
				//put windows side by side and watch one update the other
				i=qi('input')
				I(
					function(){
						i.q.value=localStorage.getItem('myText')||''
					},50
				)
			}
			saveFromSesStor=function(){
				i=ta().id('input')
				i.q.value=sessionStorage.getItem('myText')||''
				i.o(
					'u',function(){
						sessionStorage.setItem('mytext',i.value)
					},false
				)
			}
		}
		ssS=sessionStorage
		sR=function(a){
			var i=ssS.getItem(a)
			ssS.removeItem(a)
			return i
		}
		sS=function(a,b){
			ssS.setItem(a,b);
			return ssS
		}
		sG=function(a){
			return ssS.getItem(a)
		}
		sL=function(){
			return ssS.length
		}
		sX=function(){
			ssS.clear();
			return ssS
		}
		lcS=localStorage
		lR=function(a){
			var i=lcS.getItem(a)
			lcS.removeItem(a)
			return i
		}
		lS=function(a,b){
			lcS.setItem(a,b);
			return lcS
		}
		lG=function(a){
			return lcS.getItem(a)
		}
		lL=function(){
			return lcS.length
		}
		lX=function(){
			lcS.clear();
			return lcS
		}
	}
	
	function alph(){
		isWindow=function(a){
			alert('isWindow');
			if(O(a)){
				if(s$(a).contains('Window')||
					s$(a[0]).contains('Window')){
					return window
				}
			}
		}
		$.fn.in=function(num){
			var g=G(arguments)
			this.delay(num*1000)
			return this
		}
	}
	
	old=function(){
		drag=drg=function(element){
			var q=$b(qq(element).q).css({position:'absolute'}).on(
				'mousedown',function(e){
					var offset=$(this).offset(),
						deltaX=e.pageX-offset.left,deltaY=e.pageY-offset.top
					$('html').on(
						'mousemove',function(e){
							q.css({left:e.pageX-deltaX,top:e.pageY-deltaY})
						}
					)
						.on(
						'mouseup',function(){
							$(this).off()
						}
					)
				}
			)
			touchDrg(element)
			return qq(element)
		}
	}
	old=function(){
		tf=function(){
			alert('tf')
			var g=G(arguments)
			t=n=1
			$.in(
				1,function(){
					t=0
				}
			)
			$.ev(
				1,function(){
					if(t){
						n=n+1
						co()
					}
					else{
						$l(n)
					}
				}
			)
		}
	}
	$.K=function(o){
		alert('cjs.Keys')
		function oldFn(){
			if(!O(o)){
				return
			}
			if(F(o.u)){
				cjs.tick(
					function(){
						if(cjs.Keys.u){
							o.u(cjs.Keys.u)
						}
					}
				)
			}
			if(F(o.d)){
				cjs.tick(
					function(){
						if(cjs.Keys.d){
							o.d(cjs.Keys.d)
						}
					}
				)
			}
			if(F(o.l)){
				cjs.tick(
					function(){
						if(cjs.Keys.l){
							o.l(cjs.Keys.l)
						}
					}
				)
			}
			if(F(o.r)){
				cjs.tick(
					function(){
						if(cjs.Keys.r){
							o.r(cjs.Keys.r)
						}
					}
				)
			}
		}
	}
}