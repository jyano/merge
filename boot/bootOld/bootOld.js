function bootOld() {
	//fixed width
	$.CT = $.container = function () {
		return $.d().K('container')
	}
	//full width
	$.containerFluid = function () {
		return $.d().K('container-fluid')
	}
	// -rows must be placed within a .container(-fluid) for proper alignment and padding
	$.glyph = $.glyphicon = function (glyph, a) {
		var s = $.sp(a).K("glyphicon glyphicon-" + glyph)
		return s
	}
	// -only columns may be immediate children of rows
	// -Columns create gutters (gaps between column content) via padding.
	//   That padding is offset in rows for the first and last column via negative margin on .rows
	$.imgResponsive = function (s, f) {
		return $.i(s, f).K('img-responsive')
	}
	$.imgCircle = function (s, f) {
		return $.i(s, f).K('img-circle')
	}
	$.imgRounded = function (s, f) {
		return $.i(s, f).K('img-rounded')
	}
	$.imgThumbnail = function (s, f) {
		return $.i(s, f).K('img-thumbnail')
	}
	$.boot = function () {
		z()
		var row = $.row()
		_.e(arguments, function (arg) {
			row.A(arg)
		})
		return cont = $.CT().A(row).A()
	}
	$.R = $.row = function (n) {
		var theDiv = $.d().K('row')
		_.e(arguments, function (arg) {
			theDiv.A(arg)
		})
		return theDiv
	}
	//pass in size, and then args(contents) as a list (or as an array)
	$.col = function () {
		var args = G(arguments),
			theDiv = $.d().K('col-md-' + args[0]),
			iter = A(args[1]) ? args[1] : args.r
		_.e(iter, function (v) {
			theDiv.A(v)
		})
		return theDiv
	}
	$.row2 = function (a, b) {
		return $.R(
			$.col(6, a),
			$.col(6, b))
	}
	$.row3 = function (a, b, c) {
		return $.R(
			$.col(4, a),
			$.col(4, b),
			$.col(4, c))
	}
	$.row4 = function (a, b, c, d) {
		return $.R(
			$.Cl(3, a),
			$.Cl(3, b),
			$.Cl(3, c),
			$.Cl(3, d))
	}
	$.row84 = function (a, b) {
		return $.row($.col(8, a), $.col(4, b))
	}
	$.row48 = function (a, b) {
		return $.row($.col(4, a), $.col(8, b))
	}//
	$.row39 = function (a, b) {
		return $.row($.col(3, a), $.col(9, b))
	}//
	$.row210 = function (a, b) {
		return $.row($.col(2, a), $.col(10, b))
	}//
	$.row111 = function (a, b) {
		return $.row($.col(1, a), $.col(11, b))
	}//
	//row48([4],[ 8 ]) //row39([3],[ 9 ])
	$.push4 = function (a) {
		return $.row48([], a)
	}
	$.push3 = function (a) {
		return $.row39([], a)
	}
	$.push2 = function (a) {
		return $.row210([], a)
	}
	$.push1 = function (a) {
		return $.row111([], a)
	}
	$.row93 = function (a, b) {
		return $.row($.col(9, a), $.col(3, b))
	}
	$.row363 = function (a, b, c) {
		return $.row(
			$.col(3, a),
			$.col(6, b),
			$.col(3, c)
		)
	}
	$.ROW = function (a, b, c, d) {
		var g = G(arguments), z = g.z
		if (z == 1) {
			return $.row($.col(12, a))
		}
		if (z == 2) {
			return g.p ? $.row93(a, b)
				: g.n ? $.row39(a, b)
				: $.row2(a, b)
		}
		if (z == 3) {
			return g.n ? $.row363(a, b, c) : $.row3(a, b, c)
		}
		if (z == 4) {
			return $.row4(a, b, c, d)
		}
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
		$.row(
			$.div().K('col-xs-12 col-sm-6').A($.img('me')),
			$.div().K('col-xs-6 col-lg-4').A($.img('me'))
		).A()
	}
	testRows3 = function () {
		z()
		$.row(
			$.div().K('col-xs-6 col-sm-4').A($.img('me')),
			$.div().K('col-xs-6 col-sm-4').A($.img('guy')).C('o'),
			$.div().K('col-xs-6 col-sm-4').A($.img('sun'))
		).C('b').A()
	}
	testRows4 = function () {
		z()
		$.row(
			$.div().K('col-xs-6 col-sm-4').A($.span('me')),
			$.div().K('col-xs-6 col-sm-4').A($.span('guy')).C('o'),
			$.div().K('col-xs-6 col-sm-4').A($.span('sun'))
		).C('b').A()
	}
	$.xs = $.phones = function self(color, num) {
		if (N(color)) {
			return self(null, color)
		}
		var div = $.d()
		if (color) {
			div.C(color)
		}
		div.K('col-xs-' + num)
		return div
	}
	$.sm = $.tablets = function self(color, num) {
		if (N(color)) {
			return self(null, color)
		}
		var div = $.d()
		if (color) {
			div.C(color)
		}
		div.K('col-sm-' + num)
		return div
	}
	$.md = $.desktops = function self(color, num) {
		if (N(color)) {
			return self(null, color)
		}
		var div = $.div()
		if (color) {
			div.C(color)
		}
		div.K('col-md-' + num)
		return div
	}
	$.lg = $.largeDesktops = function self(color, num) {
		if (N(color)) {
			return self(null, color)
		}
		var div = $.div()
		if (color) {
			div.C(color)
		}
		div.K('col-lg-' + num)
		return div
	}
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
		ct = $.CT().A()
		ct.A(
			$.R(
				$.d('r').K("col-sm-4").A('.col-sm-4').ipsumP(1),
				$.d('b').K("col-sm-4").A('.col-sm-4').ipsumP(2, 2),
				$.d('y').K("col-sm-4").A('.col-sm-4').ipsumP(3, 3, 3)
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
	exampleMixedMobileAndDesktop = function () {
		z()
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
	exampleMixedMobileTabletAndDesktop = function () {
		z()
		// Note	Tip: Remember that grid columns should add up to twelve for a row. More than that, columns will stack no matter the viewport.
		cont = $.container().A()
		cont.A(
			$.row(
				$.div('r').K("col-xs-12 col-sm-6 col-lg-8").A($.span('.col-xs-12 .col-sm-6 .col-lg-8')),
				$.div('b').K("col-xs-6 col-lg-4").A($.span('.col-xs-6 .col-lg-4'))
			),
			$.row(
				$.div('n').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4')),
				$.div('g').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4')),
				$.div('o').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4'))
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
		ct = $.CT().A()
		ct.A(
			$.R(
				$.d('r').K("col-sm-4 col-sm-push-8").ipsumP(2, 2, 2),
				$.d('p').K("col-sm-8 col-sm-pull-4").ipsumP(22)
			)
		)
	}
	//
	exampleJumbo = function () {
		$.boot(
			$.jumbo(
				'My first Bootstrap website!',
				$.p('This page will grow as we add more and more components from Bootstrap...')),
			$.paragraphs(
				'This is another paragraph',
				'This is a paragraph',
				'This is another paragraph')
		)
	}
	$.well = function () {
		var d = $.d().K('well')
		_.e(arguments, function (arg) {
			d.A(arg)
		})
		return d
	}
	exampleImgResponsive = function () {
		$.boot(
			$.sm(3).A(
				$.well(
					$.imgResponsive('chicks')
				)
			)
		)
	}
	exampleResponsive = function () {
		$.boot(
			$.md(2).A(
				$.imgResponsive('me'),
				$.imgResponsive('chicks'),
				$.imgResponsive('me')
			)
		).C('r')
	}
	exampleImages = function () {
		$.boot(
			$.imgCircle('chicks').C('y'),
			$.imgRounded('guy').C('y'),
			$.imgThumbnail('sun').C('y')
		)
	}
	//"<div class="form-group"></div>"
	FormGroup = formGroup = fg = function (a) {
		return _a($div().k('form-group'), G(arguments))
	}
	$.footer = FT = function () {
		var args = G(arguments),
			theDiv = $div().k('footer')
		_.each(args, function (arg) {
			theDiv(
				S(arg) ? pg(arg) : arg
			)
		})
		if (args.p) {
			theDiv.cen()
		}
		return theDiv.id('footer')
	}
	$.headerDiv = function () {
		var div = $.d().K('header').K('text-center').id('header')
			.css('margin-bottom-width', 40).C('y')
		return div
	}
	$.jumbo = $.jumbotron = function () {
		var div = $.d().K('jumbotron').K('text-center').id('jumbo')
		_.e(arguments,
			function (arg) {
				if (S(arg)) {
					arg = $.h1(arg)
				}
				div.A(arg)
			})
		return div
	}
	$.caption = function (cap) {
		return $.d().K("caption").A(
			$.h4(cap)
		)
	}
	// all thumbnails must be within a col
	// can be a class on an anchor
	// or can be on a div (for more control)
	$.thumbA = $.thumbnailClick = function (i, fn) {
		fn = fn || function () {
			alert('you clicked a thumbnail')
			i = this
		}
		var a = $.a('', fn).K('thumbnail').A($.i(i))
		return a
	}
	$.thumbD = $.thumbnailDiv = function (a) {
		var div = $.d().K('thumbnail')
		_.e(arguments,
			function (arg) {
				div.A(arg
					//  S(arg)? $.img(arg): arg
				)
			})
		return div
	}
	$.colThumbA = function (clas, img, func) {
		return $.div().K(clas).A(
			$.thumbA(img, func)
		)
	}
	$.thumbnail = function (a) {
		var div = $.div().K('thumbnail')
		_.each(arguments,
			function (arg) {
				div.A(S(arg) ? $.img(arg) : arg)
			})
		return div
	}
	$.thumbnailRow = function (g) {
		z()
		var theRow = $.row()
		_.each(G(arguments),
			function (a) {
				theRow.A($.thumbnail(a))
			})
		return theRow.A()
	}
	$.thumbnailTimes = function (num) {
		var arr = []
		_.times(num || 20,
			function () {
				arr.push('me')
			})
		_a(thumbnail, arr)
	}
	exampleThumb = function () {
		z()
		var wrap = function (i) {
			if (S()) {
				i = $.i(i)
			}
			return $.d().K("col-xs-4 col-sm-3 col-md-2 col-lg-1").A(
				$.a('').K('thumbnail').A(i, 'hi')
			)
		}
		$.boot(
			wrap('me'),
			wrap('guy'),
			wrap('chicks'),
			wrap('me'),
			wrap('guy'),
			wrap('chicks'),
			wrap('me'),
			wrap('guy'), wrap('chicks'),
			wrap('me'), wrap('guy'), wrap('chicks'),
			wrap('me'), wrap('guy'), wrap('chicks')
		)
	}
	exampleThumbContent = function () {
		z()
		var wrap = function (img) {
			return $.div().K("col-xs-4 col-sm-3 col-md-2 col-lg-1").A(
				$.a('').K('thumbnail').A(img)
			)
		}
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
	exampleThumbnails = function () {
		z()
		// <div class="row">
		// <div class="col-xs-6 col-md-3">
		// <a id="" href="#" class="thumbnail">
		// <img src="/me.png">
		// </a>
		// </div>
		// </div>
		return $.container().A(
			$.row(
				$.div().K("col-xs-6 col-md-3").A(
					$.a('').K("thumbnail").A($.img('me'))
				))
		).A()
	}
	exampleThumbnailsCustomContent = function () {
		z()
		ct = $.container().C('r')
		thumbnail = $.thumbnail().C('g').A(
			$.p('first thing in green thumbnail'),
			$.i('me'),
			$.d().K("caption").A(
				$.h3('Thumbnail label'),
				$.p('...'),
				$.p().A(
					$.bt('Button').K("btn btn-primary"),
					$.bt('Button').K("btn btn-default")))
		)
		ct.A($.R(
			$.d().K("col-sm-6 col-md-4").A(
				$.p('before thumbnail'),
				thumbnail
			)
		))
		return ct.A()
	}
	//pils
	Pill = pil = function (o) {
		var g = G(arguments), p = ul();
		p.k('n np');
		p.c('y')
		if (O(o)) {
			_e(o, function (v, k) {
				var l = A(k) ? lik(k[0], '+') : lik(k);
				l.o('$', v);
				p(l)
			})
		}
		else {
			_e(g, function (v) {
				if (A(v)) {
					p(lik(v[0], '+'))
				} else {
					p(lik(v))
				}
			})
		}
		;
		return p
	}
	//login pils
	LoginPill = logi = function () {
		pil({'log in': lI, 'log out': lO}).pp()
	}
	Glyph = Glyphicon = glyphicon = gl = function () {
		var g = G(arguments), str,
			s = $.sp().K('glyphicon').K('glyphicon-' + oO('gl', g[0]))
		if (O(g[1])) {
			s.A(g[1])
		}
		if (S(g[1])) {
			s(g[1])
		}
		if (g.n) {
			s.pp($.sp().T('-'))
		}
		return s
	}

	function modal(){
	$.modalFooter = function () {
		var theDiv = $.d().K('modal-footer')
		_.e(arguments,
			function (arg) {
				theDiv.A(arg)
			})
		return theDiv
	}
	$.modalBody = function () {
		var theDiv = $.d().K('modal-body')
		_.e(arguments, function (arg) {
			theDiv.A(arg)
		})
		return theDiv
	}
	$.modalHeader = function () {
		var theDiv = $.d().K('modal-header')
		_.e(arguments,
			function (arg) {
				theDiv.A(arg)
			})
		return theDiv
	}
	$.modalContent = function () {
		var theDiv = $.d().K('modal-content')
		_.e(
			arguments,
			function (arg) {
				theDiv.A(arg)
			})
		return theDiv
	}
	$.modalDialog = function () {
		var theDiv = $.d().K('modal-dialog')
		_.e(arguments, function (arg) {
			theDiv.A(arg)
		});
		return theDiv
	}
	$.modalFade = function () {
		var theDiv = $.d().K('modal fade')
		_.e(arguments, function (arg) {
			theDiv.A(arg)
		});
		return theDiv
	}
	$.modal = function (a, b, contents) {
		var footer = $.modalFooter(
			$.bt('close').attr({type: 'submit', 'data-dismiss': 'modal'})
		)
		if (contents) {
			footer.A(contents)
		}
		return $.modalForm(
			$.modalDialog(
				$.modalContent(
					$.modalHeader(
						$.bt('ooo').K('close').attr({'data-dismiss': 'modal'}),
						$.h4(a).K('modal-title')),
					$.modalBody(b),
					footer
				))
		)
	}

	function modalOld(){
		ModalDialog = MDIALOG = function () {
			var theDiv = $div().k('modal-dialog')
			_.each(G(arguments), function (arg) {
				theDiv(arg)
			});
			return theDiv
		}
		ModalForm = MFADE = function () {
			var theDiv = $div().k('modal form')
			_.each(G(arguments), function (arg) {
				theDiv(arg)
			});
			return theDiv
		}
		Modal = MODAL = function (a, b, contents) {
			var footer = ModalFooter(
				bt({t: 'close'}).at({type: 'submit', 'data-dismiss': 'modal'}))
			if (contents) {
				footer(contents)
			}
			return ModalForm(//Fade?
				ModalDialog(
					ModalContent(
						ModalHeader(
							bt({t: ex}).k('close')
								.at({'data-dismiss': 'modal'}),
							h4(a).k('modal-title')
						),
						ModalBody(b), footer))
			)
		}
		//elip =function(a){return a+'&hellip;'}
		//ex = function(){return '&times;'}
		ModalContent = MCT = function () {
			var theDiv = $div().k('modal-content')
			_.each(
				G(arguments),
				function (arg) {
					theDiv(arg)
				})
			return theDiv
		}
		ModalFooter = MFOOT = function () {
			var theDiv = $div().k('modal-footer')
			_.each(G(arguments), function (arg) {
				theDiv(arg)
			})
			return theDiv
		}
		ModalBody = MBODY = function () {
			var theDiv = $div().k('modal-body')
			_.each(G(arguments),
				function (arg) {
					theDiv(arg)
				})
			return theDiv
		}
		ModalHeader = MHEAD = function () {
			var theDiv = $div().k('modal-header')
			_.each(G(arguments),
				function (arg) {
					theDiv(arg)
				})
			return theDiv
		}
		HeaderDiv = HD = function () {
			var args = G(arguments),
				theDiv = $div().k('header')
			_.each(args, function (v) {
				if (S(v)) {
					v = h3(v)
				}
				theDiv(v)
			})
			if (args.p) {
				theDiv.cen()
			}
			return theDiv.id('header').mb(20)
		}
	}}
}
function boot100(){
	ROWS = function () {
		z()
		$.row(
			$.colX(2, $.img('me')),
			$.colX(6, $.img('me')),
			$.colX(4, $.img('me'))
		).A()
	}
	ROWS2 = function () {
		z()
		$.row(
			$.div().K('col-xs-12 col-sm-6').A($.img('me')),
			$.div().K('col-xs-6 col-lg-4').A($.img('me'))
		).A()
	}
	ROWS3 = function () {
		z()
		$.row(
			$.div().K('col-xs-6 col-sm-4').A($.img('me')),
			$.div().K('col-xs-6 col-sm-4').A($.img('guy')).C('o'),
			$.div().K('col-xs-6 col-sm-4').A($.img('sun'))
		).C('b').A()
	}
	ROWS4 = function () {
		z()
		$.row(
			$.div().K('col-xs-6 col-sm-4').A($.span('me')),
			$.div().K('col-xs-6 col-sm-4').A($.span('guy')).C('o'),
			$.div().K('col-xs-6 col-sm-4').A($.span('sun'))
		).C('b').A()
	}
	H1 = function () {
		z()
		rule = "h1 {  font-size: 40px;  margin-bottom: 20px;  margin-left: 20px; }"
		$.addStyle(rule)
		// HTML5.CSSRule(rule)
		$.h1('this is a big font').A()
	}
	H12 = function () {
		z()
		rule = "h1 {  font-size: 22px; margin: bottom 10px;  @media (min-width:@screen-tablet) {font-size: 40px;   margin-bottom: 20px;   margin-left: 20px; } }"
		addStyle(rule)
		$h1('this is a small font').A()
	}
	BREAK = function () {
		z()
		addStyle("h1 { @media (min-width:400px) {font-size: 10px;} }")
		addStyle("h1 { @media (max-width:400px) {font-size: 20px;} }")
		// addStyle( "h1 { @media (min-width:1281px) {font-size: 40px;} }" )
		$.h1('afsdfdsasdf').A()
	}
	$.addStyle = function () {
		_.each(arguments, function (rule) {
			$('<style>' + rule + '</style>').A()
		})
	}
	BREAK2 = function () {


		// @media screen and (min-width: 600px) { .sixhundredminwidthclass {  width: 30%;  float: right;  } }
		//  @media screen and (max-width: 600px) {.sixhundredmaxwidth {  clear: both; font-size: 1.3em; } }
	}
	BREAK3 = function () {
		z()
		//works
		$.addStyle(
			"@media all and (min-width: 960px) { body {font-size: 80px;}  }",
			"@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
			"@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}"
		)
		$.addStyle(
			"@media all and (min-width: 960px) { body {color:blue;}  }",
			"@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
			"@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}"
		)
		$.span('fasd').A()
		$.h1('fasd').A() //doesnt respond
	}
	//elip =function(a){return a+'&hellip;'}
	//ex = function(){return '&times;'}
	//"<div class="form-group"></div>"
	FormGroup = formGroup = fg = function (a) {
		return _a($div().k('form-group'), G(arguments))
	}
	//put items in a qq(div).k(row)
	Row = row = function (n) {
		var theDiv = $div().k('row')
		_.each(G(arguments), function (arg) {
			theDiv(arg)
		})
		return theDiv
	}
	$.row = function (n) {
		var theDiv = $.div().K('row')
		_.each(arguments, function (arg) {
			theDiv.A(arg)
		})
		return theDiv
	}
	//pass in size, and then args(contents) as a list (or as an array)
	Col = col = function () {
		var args = G(arguments),
			theDiv = $div().k('m' + args[0]),
			iter = A(args[1]) ? args[1] : args.r
		_e(iter, function (v) {
			theDiv(v)
		})
		return theDiv
	}
	$.col = function () {
		var args = G(arguments),
			theDiv = $.div().K('col-md-' + args[0]),
			iter = A(args[1]) ? args[1] : args.r
		_.each(iter, function (v) {
			theDiv.A(v)
		})
		return theDiv
	}
	$.colX = function () {
		var args = G(arguments),
			theDiv = $.div().K('col-xs-' + args[0]),
			iter = A(args[1]) ? args[1] : args.r
		_.each(iter, function (v) {
			theDiv.A(v)
		})
		return theDiv
	}
	row2 = function (a, b) {
		return row(col(6, a), col(6, b))
	}
	row3 = function (a, b, c) {
		return row(col(4, a), col(4, b), col(4, c))
	}
	row4 = function (a, b, c, d) {
		return row(col(3, a), col(3, b), col(3, c), col(3, d))
	}
	row84 = function (a, b) {
		return row(col(8, a), col(4, b))
	}
	row48 = function (a, b) {
		return row(col(4, a), col(8, b))
	}//
	row39 = function (a, b) {
		return row(col(3, a), col(9, b))
	}//
	row210 = function (a, b) {
		return row(col(2, a), col(10, b))
	}//
	row111 = function (a, b) {
		return row(col(1, a), col(11, b))
	}//
	//row48([4],[ 8 ])
	//row39([3],[ 9 ])
	push4 = function (a) {
		return row48([], a)
	}
	push3 = function (a) {
		return row39([], a)
	}
	push2 = function (a) {
		return row210([], a)
	}
	push1 = function (a) {
		return row111([], a)
	}
	row93 = function (a, b) {
		return row(col(9, a), col(3, b))
	}
	row363 = function (a, b, c) {
		return row(col(3, a), col(6, b), col(3, c))
	}
	$row = ROW = function (a, b, c, d) {
		var g = G(arguments),
			z = g.z
		if (z == 1) {
			return row(col(12, a))
		}
		if (z == 2) {
			return g.p ? row93(a, b)
				: g.n ? row39(a, b)
				: row2(a, b)
		}
		if (z == 3) {
			return g.n ? row363(a, b, c) : row3(a, b, c)
		}
		if (z == 4) {
			return row4(a, b, c, d)
		}
	}
	FT = function () {
		var args = G(arguments),
			theDiv = $div().k('footer')
		_.each(args, function (arg) {
			theDiv(
				S(arg) ? pg(arg) : arg
			)
		})
		if (args.p) {
			theDiv.cen()
		}
		return theDiv.id('footer')
	}
	HeaderDiv = HD = function () {
		var args = G(arguments),
			theDiv = $div().k('header')
		_.each(args, function (v) {
			if (S(v)) {
				v = h3(v)
			}
			theDiv(v)
		})
		if (args.p) {
			theDiv.cen()
		}
		return theDiv.id('header').mb(20)
	}
	$.headerDiv = function () {
		var div = $.div().K('header').K('text-center').id('header')
			.css('margin-bottom-width', 40).C('y')
		return div
	}
	$.Jumbo = function (h1text) {
		var div = $.div().K('jumbotron').K('text-center').id('jumbo')
		if (h1text) {
			div.A($.h1(h1text))
		}
		return div
	}
	$.thumbnail = Thumbnail = thumbnail = tn = function (a) {
		var theDiv = $.div().K('thumbnail')
		_.each(arguments,
			function (arg) {
				theDiv.A(S(arg) ? $.img(arg) : arg)
			})
		return $.div().K('x2 s1').A(theDiv)
	}
	ThumbnailRow = thumbnailRow = tnr = function (g) {
		z()
		var theRow = $.row()
		_.each(G(arguments),
			function (a) {
				theRow.A($.thumbnail(a))
			})
		return theRow.A()
	}
	ThumbnailTimes = thumbnailTimes = tnt = function (num) {
		var arr = []
		_.times(num || 20,
			function () {
				arr.push('me')
			})
		_a(thumbnail, arr)
	}
	//pils
	Pill = pil = function (o) {
		var g = G(arguments), p = ul();
		p.k('n np');
		p.c('y')
		if (O(o)) {
			_e(o, function (v, k) {
				var l = A(k) ? lik(k[0], '+') : lik(k);
				l.o('$', v);
				p(l)
			})
		}
		else {
			_e(g, function (v) {
				if (A(v)) {
					p(lik(v[0], '+'))
				} else {
					p(lik(v))
				}
			})
		}
		;
		return p
	}
	//login pils
	LoginPill = logi = function () {
		pil({'log in': lI, 'log out': lO}).pp()
	}
	Glyph = Glyphicon = glyphicon = gl = function () {
		var g = G(arguments), str,
			s = _s().k('glyphicon').k('glyphicon-' + oO('gl', g[0]))
		if (O(g[1])) {
			s.a(g[1])
		}
		if (S(g[1])) {
			s(g[1])
		}
		if (g.n) {
			s.pp(_s().T('-'))
		}
		return s
	}
	ModalFooter = MFOOT = function () {
		var theDiv = $div().k('modal-footer')
		_.each(G(arguments), function (arg) {
			theDiv(arg)
		})
		return theDiv
	}
	$.modalFooter = function () {
		var theDiv = $.div().K('modal-footer')
		_.each(arguments, function (arg) {
			theDiv.A(arg)
		})
		return theDiv
	}
	ModalBody = MBODY = function () {
		var theDiv = $div().k('modal-body')
		_.each(G(arguments),
			function (arg) {
				theDiv(arg)
			})
		return theDiv
	}
	$.modalBody = function () {
		var theDiv = $.div().K('modal-body')
		_.each(arguments, function (arg) {
			theDiv.A(arg)
		})
		return theDiv
	}
	ModalHeader = MHEAD = function () {
		var theDiv = $div().k('modal-header')
		_.each(G(arguments),
			function (arg) {
				theDiv(arg)
			})
		return theDiv
	}
	$.modalHeader = function () {
		var theDiv = $.div().K('modal-header')
		_.each(arguments,
			function (arg) {
				theDiv.A(arg)
			})
		return theDiv
	}
	ModalContent = MCT = function () {
		var theDiv = $div().k('modal-content')
		_.each(
			G(arguments),
			function (arg) {
				theDiv(arg)
			})
		return theDiv
	}
	$.modalContent = function () {
		var theDiv = $.div().K('modal-content')
		_.each(
			arguments,
			function (arg) {
				theDiv.A(arg)
			})
		return theDiv
	}
	$.modalDialog = function () {
		var theDiv = $.div().K('modal-dialog')
		_.each(arguments, function (arg) {
			theDiv.A(arg)
		});
		return theDiv
	}
	$.modalFade = function () {
		var theDiv = $.div().K('modal fade')
		_.each(arguments, function (arg) {
			theDiv.A(arg)
		});
		return theDiv
	}
	$.modal = function (a, b, contents) {
		var footer = $.modalFooter(
			$.button('close').attr({type: 'submit', 'data-dismiss': 'modal'})
		)
		if (contents) {
			footer.A(contents)
		}
		return $.modalForm(
			$.modalDialog(
				$.modalContent(
					$.modalHeader(
						$.button('ooo').K('close').attr({'data-dismiss': 'modal'}),
						$.h4(a).K('modal-title')),
					$.modalBody(b),
					footer
				))
		)
	}
	////
	ModalDialog = MDIALOG = function () {
		var theDiv = $div().k('modal-dialog')
		_.each(G(arguments), function (arg) {
			theDiv(arg)
		});
		return theDiv
	}
	ModalForm = MFADE = function () {
		var theDiv = $div().k('modal form')
		_.each(G(arguments), function (arg) {
			theDiv(arg)
		});
		return theDiv
	}
	Modal = MODAL = function (a, b, contents) {
		var footer = ModalFooter(
			bt({t: 'close'}).at({type: 'submit', 'data-dismiss': 'modal'}))
		if (contents) {
			footer(contents)
		}
		return ModalForm(//Fade?
			ModalDialog(
				ModalContent(
					ModalHeader(
						bt({t: ex}).k('close')
							.at({'data-dismiss': 'modal'}),
						h4(a).k('modal-title')
					),
					ModalBody(b), footer))
		)
	}
	Jumbotron = JumbotronDiv = JT = function () {
		var args = G(arguments),
			theDiv = $div().k('jumbotron')
		theDiv(h1(args.f))
		_.each(args.r,
			function (v) {
				if (S(v)) {
					v = h3(v)
				}
				theDiv(v)
			})
		if (args.p) {
			theDiv.cen()
		}
		return theDiv.id('jumbo')
	}
}
function messages() {
	$.navTabs = function () {
		return $.ul().K("nav nav-tabs")
	}
	$.showTab = function (id) {
		$('#' + id).tab('show')
	} //necessary?
	testTabs = function () {
		z()
		$.ul().K("nav nav-tabs").A(
			$.liA('Home1', '#home1'),
			$.liA('Home', '#home').K('active'),
			$.liA('Profile', '#profile'),
			$.liA('Messages', '#messages')
		).A()
		$.div().K("tab-content").A(
			$.div('b').id("home1").K("tab-pane active").A('home1'),
			$.div('r').id("home").K("tab-pane").A('home'),
			$.div('g').id("profile").K("tab-pane").A('profile'),
			$.div('y').id("messages").K("tab-pane").A('messages')
		).A()
		$('.nav-tabs a').click(function (e) {
			e.preventDefault();
			$(this).tab('show')
		})
	}
	testTabs1 = function () {
		z()
		$.navTabs().A(
			$.liA('Home1', '#home1'),
			$.liA('Home', '#home').K('active'),
			$.liA('Profile', '#profile'),
			$.liA('Messages', '#messages')
		).A()
		$.div().K("tab-content").A(
			$.div('b').id("home1").K("tab-pane active").A('home1'),
			$.div('r').id("home").K("tab-pane").A('home'),
			$.div('g').id("profile").K("tab-pane").A('profile'),
			$.div('y').id("messages").K("tab-pane").A('messages')
		).A()
		$('.nav-tabs a').click(function (e) {
			e.preventDefault();
			$(this).tab('show')
		})
	}
	$.tab = function (tabText, func) {
		var args = G(arguments),
			tabText = args[0],
			func = args[1],
			load = function (e) {
				$('#' + tabText).tab('show');
				func()
			}
		theLi = $.liA(tabText, load)
		theLi.load = load
		if (args.m) {
			theLi.K('active')
		}
		return theLi
	}
	$.tabs = function (a) {
		TABS = $.span()
		var u = $.ul().K("nav nav-tabs"),
			d = $.div().WH('auto').A(u, TABS)
		if (A(a)) {

			// the problem!
			a = _a($.tab, a)
		}
		u.A(a)
		_.each(_.rest(arguments),
			function (a) {
				if (A(a)) {
					a = _a($.tab, a)
				}
				;
				u.A(a)
			})
		d.load = function () {
			a.ch(0).click();
			return d
		}
		return d.C('X')
	}
	navtabs = function () {
		return $.ul().K('nav nav-tabs')
	} //unnecessary
	$autoDiv = auto = function () {
		var args = G(arguments),
			theDiv = $div().auto()
		_.each(args, function (arg) {
			theDiv(arg)
		})
		return theDiv
	}
	showTab = shw = function (a) {
		qi(a).q.tab('show')
		//return a
	}
	firstChild = ch$ = function (a) {
		a.ch(0).$()
	}
	Tab = tab = function (tabText, func) {
		var args = G(arguments), tabText = args[0], func = args[1],
			theLi = $liA(tabText,
				function () {
					showTab(tabText);
					func()
				})
		theLi.load = function () {
			showTab(tabText);
			func()
		}
		if (args.m) {
			theLi.k('active')
		}
		return theLi
	}
	$password = function () {
		return ip().type('password').k('form-control')
	}
	tabs = function (a) {
		var g = G(arguments),
			a = g[0], d, u
		theDiv = $.div('X').WH('auto').A(
			theUlNav = $.ul().K('nav nav-tabs'),
			TABS = $.span()
		)
		//ok so a can already be a tag.. OR, if you pass in an array, it will make it a tag for :)
		if (A(a)) {
			a = $.tab.apply(null, a)
		}
		theUlNav(a)
		_.each(g.r, function (a) {
			if (A(a)) {
				a = _a(tab, a)
			}
			;
			theUlNav(a)
		})
		theDiv.load = function () {
			a.children[0].click();
			return theDiv
		}
		return theDiv
	}
	MESSAGES = function () {
		format()
		tab1 = [
			'received',
			function () {
				TABS.E(
					$.h1('Messages'), $.br()
				)
				qG('/gMsg', function (m) {
					TABS.A(
						$.row(
							//c1 = function(m){return cx().bc('-').Z(1).mug(m)}
							col(2, c1(m.fr)),
							col(10,
								$button(m.fr,
									function () {
										from = m.fr;
										tab3.load()
									}),
								$.h4(dtt(m.dt)).K('pull-right'),
								$.h5(m.m))
						),
						$.hr()
					)
				}, '+')
			},
			'*']
		tab2 = ['sent', function () {
			TABS.E()(
				$.h1('Messages'),
				$.br())
			qG('/MsgS', function (m) {
					mm = m;
					var ms = $textarea(),
						c = cx().bc('-').Z(1)
					$.post(
						'/mug', {u: m.to},
						function (mug) {
							c.f(mug)
						}
					)
					TABS(row(
						col(2, c),
						col(10,
							$button('to: ' + m.to,
								function () {
									from = m.to;
									tab3.load()
								}
							),
							$.h4(dt(m.dt).dt()).k('pull-right'),
							$.h5(m.m)
						)), $.hr())
				},
				'+')
		}]
		tab3 = tab('convo',
			function () {
				var ms = ta()
				u = $w['from'] || 'b'
				TABS.E()(
					$h1('convo with ' + u)
				)
				TABS(
					$h1('Messages'), $br()
				)
				qG('/gMsgW', {u: u},
					function (m) {
						var c = cx().bc('-').Z(1)
						$.post('/mug',
							{u: m.fr},
							function (m) {
								c.f(m)
							})
						TABS(row(col(2, c),
								col(10,
									$h6('from: ' + m.fr),
									$h4(dt(m.dt).dt()).k('pull-right'),
									$h5(m.m))),
							$.hr())
					},
					'+')
				TABS(ms,
					$button('new message',
						function () {
							$.post('/sMsg', {m: ms.V(), to: from})
						}),
					$.br(2)
				)
			})
		tab4 = ['requests', function () {
			TABS.E(
				$.h1('Buddy requests'),
				$.br()
			)
			//buddy requests
			qG('/gRq', function (msgs) {
				_.each(msgs, function (msg) {
					TABS(
						$.div()(
							$.h6('from ' + msg.fr + ' on ' + msg.dt),
							$.h5(msg.m),
							$.button('accept', function () {
								$.post('/yRq', {u: msg.fr})
							}),
							$.button('deny'),
							$.hr()))
				})
			})
		}]
		s2(t = tabs(tab1, tab2, tab3, tab4))
		t.load()
	}
	PILLS = function () {
		z()
		pills = $.ul().K("nav nav-pills").A(
			$.li().K('active').A($.a('home').toggle('tab')),
			$.li().A($.a('profile').K('profile')),
			$.li().A($.a('messages')))
		div = $.div('b').WH('auto').pad(40).drag()
		content = $.div('y', 300).pad(40).mar(40)
		div.A(pills, content)
		$('a').click(function (e) {
			e.preventDefault()
			$(this).tab('show')
		})
		// $('a:first').tab('show')
		$('a.profile').on('shown.bs.tab', function (e) {
			content.empty()
			content.A(
				$.div().text('asfdasfdfasd')
			)
		})
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

			// alert('yay')
			ee = e.target
			e.target // activated tab
			e.relatedTarget // previous tab
		})
	}
}

function work() {
	//nav
	$.container = function () {
		return $.div().K('container')
	}
	$.iconBar = function () {
		return $.span().K("icon-bar")
	}
	$.caret = function () {
		return $.span().K("caret")
	}
	$.fn.toggle = function (a) {
		return this.attr("data-toggle", a)
	}
	$.fn.target = function (a) {
		return this.attr("data-target", a)
	}
	$.liAWap = function (a) {
		return $.liA(a, function () {
			$w.location = '/wap/' + a
		})
	}
	$.dropdownToggle = function (a) {
		return $.a(a).K("dropdown-toggle").toggle("dropdown").A($.caret())
	}
	$.dropdownMenu = function () {
		var menu = $.ul().K("dropdown-menu")
		_.each(arguments,
			function (arg) {
				menu.A($.liAWap(arg))
			})
		return menu
	}
	$.nav = function () {
		var nav = $.ul().K("nav navbar-nav")
		_.each(arguments, function (arg) {
			nav.A(arg)
		})
		return nav
	}
	$.navRight = function () {
		var nav = $.ul().K("nav navbar-nav navbar-right")
		_.each(arguments, function (arg) {
			nav.A(arg)
		})
		return nav
	}
	$.navbar = function () {
		return $.div().K("navbar navbar-default").A($.div().K("container-fluid"))
	}
	$.dropdown = function (a, b) {
		var toggle = $.dropdownToggle(a)
		var menu = $.dropdownMenu.apply(this, b)
		return $.li().K("dropdown").A(toggle, menu)
	}
	$.navbarHeader = function (brand) {
		return $.div().K("navbar-header").A(
			$.button().K("navbar-toggle collapsed").toggle('collapse').target(".navbar-collapse").A(
				$.span("Toggle navigation").K("sr-only"),
				$.iconBar(), $.iconBar(), $.iconBar()),
			$.a(brand).K("navbar-brand")
		)
	}
	$.navbarCollapse = function () {
		return navbarCollapse = $.div().K("navbar-collapse collapse")
	}
	NEWMODAL = function () {
	}
	PHASER = function () {
	}
	BOOK = function () {
		format()
		s1(h1('BOOK').o(ldr('book')),
			i = tx(),
			bt('new book', function () {
				qP('/newBook', {n: i.V()}, ldr('book'))
			}),
			hr())
		qJ('/books', function (bs) {
			s1(h3('books:'))
			_e(bs,
				function (b) {
					s1(_s()('x').o(function () {
							qP('/delBook', {b: b._id}, ldr('book'))
						}),
						bt(b.name, function () {
							s2(h2('CHAPTER: ' + b.name),
								ci = tx(),
								bt('new chapter',
									function () {
										qP('/newChapter', {
											t: ci.V(),
											b: b._id
										}, function () {
											chVw(b, c)
										})
									}), hr())
							qJ('/chapters', {b: b._id},
								function (cs) {
									_e(cs, function (c) {
										s2(bt(c.title,
											function () {
												chVw(b, c)
											}), br(2))
									})
								})
						}), br(2))
				})
		})
		chVw = function (b, c) {
			s2.E()
			s1.E();
			s1(h1('BOOK').o(ldr('book')))
			qJ('/chapters', {b: b._id},
				function (cs) {
					s1(h3('chapters:'))
					s2(h3('pages:'))
					_e(cs, function (c) {
						s1(_s()('x').o(function () {
								qP('/delChapter', {c: c._id},
									function () {
										chVw(b, c)
									})
							}),
							bt(c.title, function () {
								chVw(b, c)
							}), br(2))
					})
				})
			s2(h1('chapter: ' + c.title))
			s2(pi = tx(),
				bt('new page',
					function () {
						qP('/newPage', {
							n: pi.V(), c: c._id
						})
					}), hr())
			qJ('/pages', {c: c._id},
				function (ps) {
					p = ps
					_e(ps, function (p) {
						s2(bt(p.name,
							function () {
								pgVw(b, c, p)
							}), br(2))
					})
				})
		}
	}
	pgVw = function (b, c, p) {
		s1.E();
		s2.E()
		s1(h1('BOOK').o(ldr('book')))
		s1(h1('CHAPTER ' + c.title).o(
			function () {
				chVw(b, c)
			}
		))
		qJ('/pages', {c: c._id},
			function (ps) {
				s1(h3('pages'))
				_e(ps, function (p) {
					s1(
						bt(p.name, function () {
							secVw(c)
						}), br(2)
					)
				})
			})
		s2(h1('page: ' + p.name))
		qJ('/sections', {
				book: b._id,
				chapter: c._id,
				page: p._id
			},
			function (sc) {
				_e(sc, function (s) {
					s2(bt(s.section, function () {
						secVw(b, c, p)
					}), br(2))
				})
			})
	}
	jde = function (a) {
		return new C$.DOMElement(a)
	}
	O$ = function (d, s) {
		var o = Do(
			jde(d.q[0])
		)
		if (s) {
			o.ap(s)
		}
		return o
	}
	ELEMENTS = function () {
		d = dv('r', 400, 400).a()
		d(tx())
		s = St(1000).a()
		de = O$(d, s)
		tw(de, [{x: 300, y: 300}, 2000])
		tw([de, 'l'],
			[{r: 360, sx: .5, sy: .5}, 8000],
			{r: 0},
			[{r: 360, sx: 1, sy: 1}, 8000]
		)
	}
	SITE = function () {
	}
}

function nav() {
	WAPNAV = function (a) {
		var g = G(arguments), a = g[0];
		if (a) {
			co(a)
		}
		;
		if (g.N) {
			z()
		}
		;
		NAV(bar(
				lkd(gl('p', '-pics'),
					'upload', 'uploads', 'cutouts', '+'),
				lkd(gl('pc', '-create'),
					'edit', 'avatar', 'paint', 'filters', 'showcase',
					'transform', 'can', 'fullcan'
					, '+'),
				lkd(gl('tw', '-animate'), 'tween', 'tweenart', 'easing', 'pack', 'sprite', 'movie', '+'),
				lkd(gl('tw', '-imagine'), 'universe', 'bod', '+'),
				lkd(gl('tw', '-solve'), 'connect', 'grid', 'matrix', 'bowl', 'tangle', 'corners', 'borders', 'flip', '+'),
				lkd(gl('tw', '-play'), 'space', 'ship', 'circle', 'hit', 'shooty', 'boxes', 'solar', 'canon', '+'),
				lkd(gl('gl', '-work'), 'book', 'site', 'sorty', 'elements', 'api', '+'),
				lkd(gl('gl', '-share'), 'users', 'profile', 'buds', 'requests', 'stat', 'post', 'groups', '+'),
				lkd(gl('gl', '-chat'), 'messages', 'posts', 'chatbox', 'ranky', '+'),
				lik(gl('t', '-clear'), home)),
			bar(lkd(gl('u', _s().id('uname'), '-'),
				lik('view'),
				lik(gl('z', 'profile').o(
					ldr('profile')
				)),
				lik('logout').o(lO)
			), '-'),
			search())
	}
	wap = function (a) {
		return lik(a, ldr(a))
	}
	lkd = function () {
		var g = G(arguments), u = ul('-'), l = li('-')(dropl(g[0]))
		_e(g.r, function (v) {
			if (S(v)) {
				v = g.p ? wap(v) : lik(v)
			}
			u(v)
		});
		return l(u)
	}
	waps = function () {
		var g = G(arguments),
			gly = gl(g.f[0], g.f[1]), w = _m(g.r, wap), args = [gly].concat(w)
		return _a(lkd, w)
	}
	ib = function (n) {
		var s = _s();
		_t(n || 1, function () {
			s(sp(['ib']))
		});
		return s
	}
	navHeader = function (a) {
		a = a || 'me'
		return dk('nbh')(bt().k('nbg').at({dg: '#navbar', dt: 'collapse'})(
				sp(['sr'], 'toggle nav'), '', ib(4)),
			lk('wappy', function () {
				$w.location = '/wap'
			}).k('nbB'))
	}
	navbar = function () {
		var g = G(arguments)
		return _a(_d().k('nb nbd nbi nbft').at({r: 'naviation'}), g)
	}
	NAV = function (a, b, c, d) {
		return navbar(navHeader(),
			_a(dk('co nbc').id('navbar'),
				G(arguments))).pp()
	}
	tog = function (a, b) {
		return lk('-')(gl(b), bo(a, '+'), car())
	}
	car = function () {
		return sp(['C'])
	}
	__ = function () {
		return li(['D'])
	}
	dropl = function (a) {
		return lk('-')(a || menu, car())
	}
	search = function () {
		return _f().k('nbf nbr').at({r: 'search'})(
			dk('fg')(ip().k('fc').ph('search')),
			bt(gl('s')).ty('s'))
	}
	bar = function () {
		var g = G(arguments),
			u = ul('+')
		if (g.n) {
			u.k('nbr')
		}
		return _a(u, g)
	}
	WappyNav = function () {
		z()
		navbarCollapse = $.navbarCollapse().A(
			$.nav(
				$.dropdown('create', ['upload', 'uploads', 'cutouts', 'edit', 'avatar', 'paint', 'filters', 'showcase',
					'tween', 'tweenart', 'easing', 'pack', 'sprite', 'transform',
					'can', 'rub', 'fan']),
				$.dropdown('youplay', ['bod', 'invaders', 'thrust', 'starstruck', 'massvelocitytest', 'contactevents', 'ninjatilemap', 'launcher',
					'groupvsgroup', 'shooty', 'hit', 'space', 'maggots']),
				$.dropdown('play', ['iso1', 'connect', 'matrix', 'ship', 'circle', 'boxes', 'solar', 'canon', 'fullcan',
					'tangle', 'corners', 'borders', 'gquery', 'grid', 'bowl', 'gamer', 'melon', 'meltut']),
				$.dropdown('share', ['universe',
					'users', 'status', 'messages', 'posts', 'chatrooms',
					'ranky', 'profiles', 'dirt', 'knocks', 'book', 'site', 'sorty', 'elements', 'api', 'object']),
				$.dropdown('box2d', ['box2d', 'wheel', 'heads', 'cups', 'pinball',
					'revdemo', 'player', 'player1', 'player2', 'player3'])
			),
			$.navRight(
				$.liA('logged: ' + _username),
				$.liA('logout', logOut)
			)
		)
		$.container().A($.navbar().A($.navbarHeader('wappy'), navbarCollapse)).A()
	}
	WappyNavX = function (color) {
		var args = G(arguments)
		color = args[0]
		if (color) {
			co(color)
		}
		if (args.N) {
			z()
		}
		StandardNavbar(
			Nav(
				DropdownLoader(
					$.glyph('picture', 'create'),
					'upload', 'uploads', 'cutouts', 'edit', 'avatar', 'paint', 'filters', 'showcase',
					'tween', 'tweenart', 'easing', 'pack', 'sprite', 'transform',
					'can', 'rub', 'fan'),
				DropdownLoader($.glyph('glass', 'youplay'),
					'bod', 'invaders', 'thrust', 'starstruck', 'massvelocitytest', 'contactevents', 'ninjatilemap', 'launcher',
					'groupvsgroup', 'shooty', 'hit', 'space', 'maggots'),
				DropdownLoader(
					$.glyph('tw', 'play'),
					'iso1', 'connect', 'matrix', 'ship', 'circle', 'boxes', 'solar', 'canon', 'fullcan',
					'tangle', 'corners', 'borders', 'gquery', 'grid', 'bowl', 'gamer', 'melon', 'meltut'),
				DropdownLoader($.glyph('glass', 'share'), 'universe',
					'users', 'status', 'messages', 'posts', 'chatrooms',
					'ranky', 'profiles', 'dirt', 'knocks', 'book', 'site', 'sorty', 'elements', 'api', 'object'),
				DropdownLoader($.glyph('glass', 'phaser'),
					'tanks', 'genmatch', 'breakout', 'tilecallbacks',
					'acceleratetopointer', 'angularvelocity', 'oneway', 'impactevents',
					'ninjaimpact', 'aabbaabb', 'ninjalab',
					'anglepointer', 'shootpointer', 'launcherfollow',
					'movearoundworld', 'bringchildtop', 'tweenrelative', 'worldsprite', 'fixedtocamera', 'cannonballs'
				),
				DropdownLoader($.glyph('glass', 'phaser2'),
					'pixelpickscrolling', 'inputpriority', 'callallanimations', 'callall', 'displayorder', 'hsp',
					'extendingagroup', 'getfirstdead', 'recycling', 'swapchildren', 'removebetween', 'removing',
					'bringgrouptotop', 'multipleanims', 'combinedtweens'
				),
				DropdownLoader(
					$.glyph('glass', 'box2d'),
					'box2d', 'wheel', 'heads', 'cups', 'pinball',
					'revdemo', 'player', 'player1', 'player2', 'player3'
				)


				// DropdownLoader(Glyph('glass','phaserDisplay'),'actiononclick','buttonscale','changingtheframes','rotatedbuttons','rasterbounce','alphamask','floodfill','bitmapdatapixel','bitmapdataprocess','bitmapdatawobble','cachedbitmapdata','extractmask','graphics','fullscreen','rendercrisp','rendertexturemirror','rendertexturestarfield','rendertexturetrail')
			),
			NavRight(
				Dropdown(
					$.glyphicon('user', $.span().id('uname')),
					$.liA('view'),   //   $liA(   Glyph('zoom-in','profile').o(  ldr('profile')  )  ),
					$.liA('logout', logOut)
				)
			),
			$.searchNavRight()
		)
	}
	NavHeader = function () {
		_IconBars = function (num) {
			var span = $.span()
			_.times(num || 1, function () {
				span.A($.span().K('icon-bar'))
			})
			return span
		}
		var theButton = $.button().K('navbar-toggle').attr({'data-target': '#navbar', 'data-toggle': 'collapse'}).A(
			'',
			_IconBars(4))
		var theBrand = $.a('wappy', function () {
			$w.location = '/wap'
		}).K('navbar-brand')
		return $.div().K('navbar-header').A(theButton, theBrand)
	}
	Nav = function () {
		return $ul().k("nav navbar-nav").apply(0, G(arguments))
	}
	NavRight = function () {
		return $ul().k("nav navbar-nav navbar-right").apply(0, G(arguments))
	}
	Dropdown = function () {
		DropdownToggle0 = function (dropdownName, glyphicon) {
			return $.a().K('dropdown-toggle').attr({'data-toggle': 'dropdown'}).A(
				$.glyphicon(glyphicon),
				$.b('&nbsp;' + dropdownName),
				$.span().K("caret")
			)
		}
		var args = G(arguments), theInnerUl = $.ul().K('dropdown-menu'), theOuterLi
		_.each(args.r,
			function (arg) {
				if (S(arg)) {
					arg = args.p ?
						LiALoader.A(arg)   // $liA(arg, function(){load(arg)}   )
						: $.liA(arg)
				} // *****
				theInnerUl.A(arg)
			})
		theOuterLi = $li().k('dropdown')(
			$a().k('dropdown-toggle').at({'data-toggle': 'dropdown'})(
				args.f,
				$.span().K('caret')
			)
		)
		return theOuterLi.A(theInnerUl)
	}
	DropdownLoader = function () {
		LiALoader = function (a) {
			return $.liA(a, function () {
				load(a)
			})
		}
		var args = G(arguments), theInnerUl, theOuterLi
		theInnerUl = $.ul().K('dropdown-menu')
		_.each(args.r, function (arg) {
			if (S(arg)) {
				arg = LiALoader(arg)
			}
			theInnerUl.A(arg)
		})
		theOuterLi = $li().K('dropdown').A(
			$a().K('dropdown-toggle').at({'data-toggle': 'dropdown'})
			(
				args.f,
				$.span().K('caret')
			)
		)
		return theOuterLi(theInnerUl)
	}
	// just pass in the contents of the collapsable part
	StandardNavbar = function () {
		var navbar = $div().k('navbar navbar-default navbar-inverse navbar-fixed-top')
		//NavCollapse = function(a){return $div().k('collapse navbar-collapse').id('navbar').apply(0, a)}
		var div = $div().k('collapse navbar-collapse').id('navbar')
		div.apply(0, G(arguments))
		navbar.A(
			NavHeader(),
			div
		)
		navbar.pp()
		return navbar
	}
	$.searchNavRight = function () {
		return $.form().K("navbar-form navbar-right").A(
			$.div().K('form-group').A(
				$('<input>').K('form-control').attr('placeholder', 'search')
			), $.submitButton().A($.glyphicon('search')))
	}

	function navOld(){
		NavHeader = function () {
			_IconBars = function (num) {
				var span = $.span()
				_.times(num || 1, function () {
					span.A($.span().K('icon-bar'))
				})
				return span
			}
			var theButton = $.button().K('navbar-toggle').attr({'data-target': '#navbar', 'data-toggle': 'collapse'}).A(
				'',
				_IconBars(4))
			var theBrand = $.a('wappy', function () {
				$w.location = '/wap'
			}).K('navbar-brand')
			return $.div().K('navbar-header').A(theButton, theBrand)
		}
		Nav = function () {
			return $ul().k("nav navbar-nav").apply(0, G(arguments))
		}
		Dropdown = function () {
			DropdownToggle0 = function (dropdownName, glyphicon) {
				return $.a().K('dropdown-toggle').attr({'data-toggle': 'dropdown'}).A(
					$.glyphicon(glyphicon),
					$.b('&nbsp;' + dropdownName),
					$.span().K("caret")
				)
			}
			var args = G(arguments), theInnerUl = $.ul().K('dropdown-menu'), theOuterLi
			_.each(args.r,
				function (arg) {
					if (S(arg)) {
						arg = args.p ?
							LiALoader.A(arg)   // $liA(arg, function(){load(arg)}   )
							: $.liA(arg)
					} // *****
					theInnerUl.A(arg)
				})
			theOuterLi = $li().k('dropdown')(
				$a().k('dropdown-toggle').at({'data-toggle': 'dropdown'})(
					args.f,
					$.span().K('caret')
				)
			)
			return theOuterLi.A(theInnerUl)
		}
		DropdownLoader = function () {
			LiALoader = function (a) {
				return $.liA(a, function () {
					load(a)
				})
			}
			var args = G(arguments), theInnerUl, theOuterLi
			theInnerUl = $.ul().K('dropdown-menu')
			_.each(args.r, function (arg) {
				if (S(arg)) {
					arg = LiALoader(arg)
				}
				theInnerUl.A(arg)
			})
			theOuterLi = $li().K('dropdown').A(
				$a().K('dropdown-toggle').at({'data-toggle': 'dropdown'})
				(
					args.f,
					$.span().K('caret')
				)
			)
			return theOuterLi(theInnerUl)
		}
		NavRight = function () {
			return $ul().k("nav navbar-nav navbar-right").apply(0, G(arguments))
			// just pass in the contents of the collapsable part
			StandardNavbar = function () {
				var navbar = $div().k('navbar navbar-default navbar-inverse navbar-fixed-top')
				//NavCollapse = function(a){return $div().k('collapse navbar-collapse').id('navbar').apply(0, a)}
				var div = $div().k('collapse navbar-collapse').id('navbar')
				div.apply(0, G(arguments))
				navbar.A(
					NavHeader(),
					div
				)
				navbar.pp()
				return navbar
			}
		}
}
