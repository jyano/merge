HIGHLIGHTFADE = HGHLT = function () {
	$.h({
		_gg: {
			C: 'o', w: 100, h: 100
		}
	})
	// ?? hides or shows an el  by ang its bgC 1st // bgC ="#ffff99"
	d = $('<div>').A().A('Click to tog ').K('gg')
	$.$(function () {
		$l('$.$')
		$("#gg").toggle("highlight")
	})
}
DRAGGY = function () {
	$.x('o', 'draggy')
	$.d('r', 500, 500).K('sel')
	$('.sel').dgb({
		delay: 1000,
		distance: 100,
		helper: "clone",
		addClasses: false,
		snapMode: "inner",
		grid: [50, 20],
		snap: true
	})
}
APP2 = function () {
	k = $('.k')
	k.dgb({appendTo: "body"})
	k.dgb({helper: "clone"})
}
TABSELIX = function () {
	$.h({
		ip: {bor: '1px solid #000'}, d: {pad: 5}
	})
	$.d([
		'no tabindex'
	])
	$.d([$.ip().tIx(5, '+tIx')
	])
	$.d([$.ip().tIx(5, '+tIx')
	])
	$.d(['-tIx',
		$.ip().tIx(-1, '-tIx')
	])
	$(":tabbable").bdC("red")
}
MENU1 = function () {
	z()
	$CSS({
		'.ui-menu': {
			width: 200,
			C: 'r'
		}
	})
	$.ul().A(
			$.li('Item 1'),
			$.li('Item 2'),
			$.li().A(
					'Item 3',
					$.li('Item 3-1'),
					$.li('Item 3-2'),
					$.li('Item 3-3'),
					$.li('Item 3-4'),
					$.li('Item 3-5')),
			$.li('Item 4'),
			$.li('Item 5')
	).id("menu")
	$("#menu").menu()
}
JUSTREDDIV = IXSTAT = function () {
	$.x()
	k = $.d('r', 500, 200)
	// to clb bT-like elS. Applies clb df ct stys to el
	// and its ch t, lks, and icons.
	k.K('.ui-state-default')
	//   on mv to clb bt-oid. Applies "clickable hover" ct stys
	// to an element and its child text, links, and icons.
	k.K('.ui-state-hover')
	//  on kb fcs to clb btoids. Applies "clickable focus"
	// ct stys  to el and its child text, links, and icons.
	k.K('.ui-state-focus')
	//   on md to clb btoids. Applies "clickable active" cot stysto an el
	// and its ch t, lks, and icons.
	k.K('.ui-state-active')
}
DATESCR = function () {
	$.x('b', 'jqui')
	('<link rel="stylesheet" href="/jquery-ui.min.css">').A()
	('<script src="/jquery-ui.min.js">').A()
	d = $.d('b', 400, 400).A(
			ip = $.ip('date').datepicker()
	).pad(20)
}
DROP = function () {
	$CSS({
		$dgb: {
			w: 100, h: 50, pad: '0.5em', fl: 'l',
			mar: '22px 5px 10px 0'
		},
		$dpb: {w: 130, h: 90, pad: '0.5em', mar: 10, fl: 'l'},
		div: {w: 400, h: 300, C: 'r', c: 'y'},
		$dgb2: {w: 100, h: 50, pad: '0.5em', mar: '0px 5px 10px 0'},
		'#dpb2,#dpb3,#dpb4,#dpb5': {w: 12, h: 90, pad: '0.5em', fl: 'l', mar: 10}
	})
	$.d().id('dgb').K('ui-widget-content').A($.p('Drag me'))
	$.d().id('dpb').K('ui-widget-header').A($.p('here'))
	$("#dgb").dgb()
	$("#dpb").dpb()
	Dpb(2, 'Drag me to my target', 'ui-widget-content')
	Dpb(2, 'here');
	Dpb(3, "dsbld !drop");
	Dpb(4, 'tol toch');
	Dpb(5, 'tol fit')
	$("#dgb2").dgb()
	$("#dpb2").dpb({
		drop: function (ev, ui) {
			$(this).K("ui-state-highlight").find("p").html("Dpd")
		}
	})
	$("#dpb3").dpb({
		disabled: "true", drop: function (ev, ui) {
			$(this)
					.K("ui-state-highlight").find("p").html("Dpd")
		}
	})
	$("#dpb4").dpb({
		tolerance: 'touch', drop: function (ev, ui) {
			$(this).K("ui-state-highlight").find("p").html("Dpd w tch")
		}
	})
	$("#dpb5").dpb({
		tolerance: 'fit', drop: function (ev, ui) {
			$(this).K("ui-state-highlight")
					.find("p").html("Dpd whn fulfit")
		}
	})
	function Dpb(id, pT, k) {
		k = k || "ui-widget-header"
		return $.d().id('dpb' + id).K(k).A($.p(pT))
	}
}
CRAZYWEIRD = POSI = function () {
	$.h({
		$par: {
			C: 'b', ta: 'c', w: '60%', ht: 40,
			mar: '10px auto', pad: 5, bor: '1px solid #777'
		},
		_psb: {
			p: 'a', ds: 'b',
			r: 0, b: 0, C: 'r', ta: 'c'
		},
		$psb1: {w: 75, h: 75},
		$psb2: {w: 120, h: 40},
		'select,input': {mL: 15}
	})
	$.d([$.p('This is the ps par el')]).id('par')
	$.dK('psb').id("psb1")
	$.p('to ps')
	$.d([$.p('to ps2')]).K('psb', 'psb2')
	$.d().mgT(75).pad(20), 'ps...'
	$.d().pdB(20)
	$.b().A('my:')
	$.sl('my_hz', 'left', 'center', 'right')
	$.sl("my_vrt", 'top', 'center', 'bottom')
	$.d().pdB(20)
	$.p().A('at:')
	$.sl("at_hz", 'left', 'center', 'right')
	$.sl("at_vrt", 'top', 'center', 'bottom')
	$.d([
		$.b().A('cl:'),
		$.sl('cl_vrt', 'flip', 'flit', 'flipfit', 'none'),
		$.sl('cl_hz', 'flip', 'flit', 'flipfit', 'none')
	]).pdB(200)
	$("select, input").bind("click keyup change", ps)
	$("#par").dgb({drag: ps})
	$(".psb").al(.5)
	ps()
	function ps() {
		$(".psb").ps({
			of: $("#par"),
			my: $("#my_hz").v() + $("#my_vrt").v(),
			at: $("#at_hz").v() + $("#at_vrt").v(),
			collision: $("#cl_hz").v() + $("#cl_vrt").v()
		})
	}
}
BLANK = LAYOUTHELP = function () {
	k = $('.k')
	k.K('ui-helper-hidden')//  Hides content visually  and from assistive technologies, such as screen readers.
	k.K('ui-helper-hidden-accessible')// Hides cont
	k.K('.ui-helper-reset')// A basic style reset for DOM nodes. Resets pad, mar, t-dec, ls-sty
	k.K('.ui-helper-clearfix')// Appls float, wrapg pops to par els
	k.K('.ui-front')// z-ix to mang  stackg  of mult wids on screen.  See  stacking ELS
	k.K('.ui-widget')// outer ct of all wids. Appls fo-fam  and fZ to wids
	k.K('.ui-widget-header')// : appl2  hdr conts. Appls hdr cont sty to el and its ch t,lks, and icons.
	k.K('.ui-widget-content')
	// : appl2 cont cts. // Appls cont-ct stys to el and its ch t, lks, and icons.
	// (can be appld to par  or sib  of hdr).
}
NOTWORKING = ICONN = function () {
	$.x('y', 'icon')
	$.sp('helllloooo1')
	$.sp('helllloooo2')
			.K("ui-icon ui-icon-arrowthick-1-n")
	k = $.d('k', 500, 500)
	k.K('ui-icon ui-icon-triangle-1-e')
	/*
	 Base class to be applied to an icon element.
	 Sets dimensions to a 16px square
	 block,
	 hides inner text,
	 sets background image to
	 "content" state sprite image.
	
	 Note: ui-icon class will be given    different sprite background image
	 depending on its parent container.
	
	 For example,
	 a ui-icon element
	 within a ui-state-default container
	 will get colored according to
	 the ui-state-default's icon color.
	 Icon types
	
	 After declaring a ui-icon class,
	 you can follow up with a second class
	 describing the type of icon.
	 Icon classes generally follow a syntax
	
	
	 */
	//  .ui-icon-{icon type}-{icon sub description}-{direction}.
//             For example, a single triangle icon pointing to the right
	//    .ui-icon-triangle-1-e
	//  ThemeRoller provides
	// full set of CSS framework icons  in  prev col
	//  Hv over them to see the class name.
}
NOTHINGATALL = VLAYSHAD = function () {
	k = $('.k')
	k.K('ui-widget-overlay')
	/*
	
	 Applies 100% width & height dimensions to an overlay screen,
	 along with background color/texture, and screen opacity.
	 k.K('ui-widget-shadow')
	 appy to vlay widg shad els
	 Applies bg    c/texture, cust cor rad, al,
	 top/left ofs and shd "thickness".
	 Thickness is appld via pad  all sides of shad  that
	 set to mat  the dims of the overlay el .
	 Offsets are appld via t and l  margs  (can be pos  or neg ).
	 */
	// https://www.packtpub.com/books/content/jquery-ui-themes-states-cues-overlays-and-shadows
}
ITHINKNOTHING = CORRAD = function () {
	$.x('o')
	$.d('d', 500, 500)
	k = $.d('d', 500, 500)
	/*   k.K('.ui-corner-tl') // corner-radius to top left corner of element.
	 k.K('.ui-corner-tr')// t r cor
	 k.K('.ui-corner-bl')//to bt l corn
	 k.K('.ui-corner-br')// bt r cor
	 k.K('.ui-corner-top')//o both t cors
	 k.K('.ui-corner-bottom')//both bt cors
	 k.K('.ui-corner-right')// both r cors
	 k.K('.ui-corner-left')// both left cors
	 k.K('.ui-corner-all')//all 4 cors
	 */
}
STUCKLOGINFORM = UICT = function () {
	$.h()
//http://www.phpeveryday.com/articles/jQuery-UI-Using-The-Framework-Classes-P986.html
	num = 3
	if (num == 1) {
		$.dK("ui-widget").A(
				$.dK("ui-widget-header ui-corner-top").A(
						$.h2('his is a ui-widget-header container')),
				$.dK("ui-widget-content ui-corner-bottom").A(
						$.p('This is a ui-widget-content container')))
		$.dK("ui-widget").A(
				$.dK("ui-state-default ui-state-active ui-corner-all").A(
						$.a('clickable and selected')),
				$.d([
					$.a('clickable but not selected')
				]).K("ui-state-default ui-corner-all"))
	}
	$('.ui-state-default a').hv(function () {
		$(this).parent().K("ui-state-hover")
	}, function () {
		$(this).parent().xK("ui-state-hover")
	})
	if (num == 2) {
		$.dK("ui-widget").A(
				$.dK("ui-state-default ui-state-active ui-corner-all").A(
						$.dK("ui-icon ui-icon-circle-plus"), $.a('clb, seld')),
				$.dK("ui-state-default ui-corner-all").A(
						$.dK("ui-icon ui-icon-circle-plus"),
						$.a('clb, !selected')))
		$(".ui-state-default a").hv(function () {
					$(this).pa().K("ui-state-hover")
				},
				function () {
					$(this).pa().xK("ui-state-hover")
				})
	}
	if (num == 3) {
		$CSS({
			'_ui-form': {w: 470, mar: '0 auto'},
			'_ui-form _ui-widget-header h2': {margin: '10px 0 10px 20px'},
			'_ui-form _ui-widget-content': {padding: 20},
			'_ui-form label, _ui-form input, _ui-form _ui-state-error,_ui-form _ui-icon, _ui-form _ui-state-error p': {fl: 'l'},
			'_ui-form label, _ui-state-error p': {fz: 12, pad: '10px 10px 0 0'},
			'_ui-form _ui-state-error': {pad: 4},
			'_ui-form _ui-state-error p': {'font-weight': 'bold', pT: 5},
			'_ui-form _ui-state-error _ui-icon': {mar: '5px 3px 0 4px'}
		})
		$.dK("ui-widget ui-form").A(
				$.dK("ui-widget-header ui-corner-all").A(
						$.h2('Login Form')),
				$.dK("ui-widget-content ui-corner-all").A(
						$.f().K('ui-helper-clearfix').A(
								$.lb('Username').K("ui-helper-reset"),
								$.d("ui-state-error ui-corner-all").A(
										$.ip(), $.dK("ui-icon ui-icon-alert"),
										$.p('Required field')
												.K("ui-helper-reset ui-state-error-text")))))
	}
	// <link rel="stylesheet" type="text/css" href="css/ui.form.css">
//http://www.w3.org/TR/html4/strict.dtd">
}
LOOKSLIKEHIGHLIGHT = DOESNOTHING = INTX = function () {
	$.x()
	$CSS({
		$d: {C: 'r'}
	})
	k = $('.k')
	// to highlighted/selected els
	// Applies "highlight" ct sty to an el and
	// its ch text, links, and icons.
	k.K('.ui-state-highlight')
	// appl to z msg ct eles. Applies z ct stys to   el
	// and its ch text, links, and icons.
	k.K('.ui-state-error')
	//  appls just z t  c  w/o bg. Can be used on f-lbs, appls z icon c  to ch  icons.
	k.K('.ui-state-error-text')
	//// Appl dimmed al to dsabld UI els,  (adjunct, to an already-styled el)
	k.K('.ui-state-disabled')
	//    apl2 priority-1 bt when need bt hier
	k.K('.ui-priority-primary')
	k.K('.ui-priority-secondary')
	//: Class to be applied to a priority-2 button in situations where button hierarchy is needed.
	j = $('<div>').A($.h3('hello'))
			.id('d').WH(100, 100).A()
			.K('.ui-state-highlight')
	$.d('r', 100, 100).A($.h3('hello'))
}
BROKENMENUMAYBE = HLFDL = function () {
	$.x('b', 'hlfdl')
	$.d(['z1']).K('error')
	$.d(['z2']).K('error')
	$.d(['hl1']).K('highlight')
	$.d(['hl2']).K('highlight')
	//   http://jsfiddle.net/774wH/
	function errorHighlight(e, type, icon) {
		if (!icon) {
			if (type === 'highlight') {
				icon = 'ui-icon-info';
			} else {
				icon = 'ui-icon-alert';
			}
		}
		return e.each(function () {
			$(this).addClass('ui-widget');
			var h = '<div class="ui-state-' + type + ' ui-corner-all" style="padding:0 .7em;">';
			h += '<p>';
			h += '<span class="ui-icon ' + icon + '" style="float:left;margin-right: .3em;"></span>';
			h += $(this).text();
			h += '</p>';
			h += '</div>';
			$(this).html(h);
		});
	}

//error dialog
	(function ($) {
		$.fn.error = function () {
			errorHighlight(this, 'error');
		};
	})(jQuery);
//highlight (alert) dialog
	(function ($) {
		$.fn.highlight = function () {
			errorHighlight(this, 'highlight');
		};
	})(jQuery);
	$('.error').error()
	$('.highlight').highlight()
}