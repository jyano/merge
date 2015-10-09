function comm(){
DIAL=function(){
    $.dlg = function (msg) {
        var dlg=$("#response-dialog")
        if(!dlg[0]){
            dlg=$.d().at({
                title:"Messaage",
                id:"response-dialog"
            })
        }
        dlg.html(msg).dialog({
            autoOpen: true,
            width: 400,  modal: true,
            closeOnEscape: true,
            buttons:  { Ok: function () {dlg .dialog("close")}  }
        })
    }

    $l('dial')
    $.x(null, 'dialog')

    $.d([
        $.p('This is the default dialog which is useful for displaying information'),
        $.p('dialog window can be moved, resized and closed with the x icon')]).id('dialog').at('title', 'Basic dialog')

    $("#dialog" ).dialog()


    $.dlg('dialog 1')

    _.in(3, function(){
        $.dlg('dialog 2')
        $.dlg('dialog 3')
        $.dlg('dialog 4')
    })


}
TIP=function(){z()

    $.p([

        $.a('text goes here: ').ti('description, yo'),
        $.ip().ti('little help..')
    ])//.tooltip()

    $( document ).tooltip()

}
    PROG = function () {
        z();

        $.d().id('progressbar')

        $("#progressbar").progressbar({
            value: false
        })
    }

}
    

function inputs(){
    DATEPICK = function () {
        $.x('b', 'jqui')

        $.d().id("datepicker")
        $("#datepicker").datepicker()
        function alt() {
            $.p('Date: ').A($.ip().id('dtp'))
            $('#dtp').dtp()
            d = $.d('b', 400, 400).A(ip = $.ip('date').datepicker()).pad(20)
        }
    }

    RBUI= BUTSET=RADIOBTUI= function(){z()
    /*
     $.f([$.fs([$.lg('Favorite jQuery Project'),
     $.dI('radio',[
     $.lb('Sizzle','sizzle'),  $.rb('project', 'sizzle'),
     $.lb('QUnitz','qunit'),  $.rb('project', 'qunit','+'),
     $.lb('Color','color'), $.rb('project', 'color')
     ])
     ])])
     */

    $.dI('radio',[
        $.lb('Sizzle','sizzle'),  $.rb('project', 'sizzle'),
        $.lb('Qunitz','color'),   $.rb('project', 'color'),
        $.lb('Color','qunit'),  $.rb('project', 'qunit','+')
    ])
    $( "#radio" ).buttonset()

}
SLIDER=RANGEUI= function(){z(); $CSS({_slider:{M:12}}); $.dI('slider').slider()}
    NUMSPINN = function () {


        $.ip().A().C('o').spinner()


    }


    UIBUT = function () {
        z()

        $.C('o')
        $.sp('span btb').button()
        $.a('a btb').button()
        $.bt('button label')
        $("button").button()
        $.d('r', 50, 60)
        $.d('b', 70, 50).button()
        $('<div>').A().A('hello').WH(70, 50).button()
        $('<div>').A().A('hello').WH(70, 50).H(200).css({
            borderColor: 'blue',
            borderStyle: 'dashed',
            borderWidth: 200
        })
    }//

    CBW1 = function () {
        z()

        $.widget("app.checkbox", {

            _create: function () {

                // Call the default widget constructor first.
                this._super();

                // Hide the HTML checkbox, then insert our button.
                this.element.addClass("ui-helper-hidden-accessible");
                this.button = $("<button/>").insertAfter(this.element);

                // Configure the button by adding our widget class,
                // setting some default text, default icons, and such.
                // The create event handler removes the title attribute,
                // because we don't need it.
                this.button.addClass("ui-checkbox")
                    .text("checkbox")
                    .button({
                        text: false,
                        icons: {
                            primary: "ui-icon-blank"
                        },
                        create: function (e, ui) {
                            $(this).removeAttr("title");
                        }
                    });

                // Listen for click events on the button we just inserted and
                // toggle the checked state of our hidden checkbox.
                this._on(this.button, {
                    click: function (e) {
                        this.element.prop("checked", !this.element.is(":checked"));
                        this.refresh();
                    }
                });

                // Update the checked state of the button, depending on the
                // initial checked state of the checkbox.
                this.refresh();

            },

            _destroy: function () {

                // Standard widget cleanup.
                this._super();

                // Display the HTML checkbox and remove the button.
                this.element.removeClass("ui-helper-hidden-accessible");
                this.button.button("destroy").remove();

            },

            refresh: function () {
                // Set the button icon based on the state of the checkbox.
                this.button.button("option", "icons", {
                    primary: this.element.is(":checked") ?
                        "ui-icon-check" : "ui-icon-blank"
                });

            }

        });
        s = $('<span>').A(
            $('<div>').A(
                $.cb().id('sm'),
                $.lb('Small', 'check').K('ui-widget')
            ),

            $('<div>').A(
                $.cb().id('md'),
                $.lb('Medium', 'check').K('ui-widget')
            ),

            $('<div>').A(
                $.cb().id('lg'),
                $.lb('Large', 'check').K('ui-widget'))
        ).A()

        $("input[type='checkbox']").checkbox();

    }

    CBW = function () {
        z()

        html = '<div> <input id="sm" type="checkbox"/> <label for="check" class="ui-widget">Small</label> </div> <div> <input id="md" type="checkbox"/> <label for="check" class="ui-widget">Medium</label> </div> <div> <input id="lg" type="checkbox"/> <label for="check" class="ui-widget">Large</label> </div>'

        $(html).A()


        $.widget("app.checkbox", {

            _create: function () {

                // Call the default widget constructor first.
                this._super();

                // Hide the HTML checkbox, then insert our button.
                this.element.addClass("ui-helper-hidden-accessible");
                this.button = $("<button/>").insertAfter(this.element);

                // Configure the button by adding our widget class,
                // setting some default text, default icons, and such.
                // The create event handler removes the title attribute,
                // because we don't need it.
                this.button.addClass("ui-checkbox")
                    .text("checkbox")
                    .button({
                        text: false,
                        icons: {
                            primary: "ui-icon-blank"
                        },
                        create: function (e, ui) {
                            $(this).removeAttr("title");
                        }
                    });

                // Listen for click events on the button we just inserted and
                // toggle the checked state of our hidden checkbox.
                this._on(this.button, {
                    click: function (e) {
                        this.element.prop("checked", !this.element.is(":checked"));
                        this.refresh();
                    }
                });

                // Update the checked state of the button, depending on the
                // initial checked state of the checkbox.
                this.refresh();

            },

            _destroy: function () {

                // Standard widget cleanup.
                this._super();

                // Display the HTML checkbox and remove the button.
                this.element.removeClass("ui-helper-hidden-accessible");
                this.button.button("destroy").remove();

            },

            refresh: function () {
                // Set the button icon based on the state of the checkbox.
                this.button.button("option", "icons", {
                    primary: this.element.is(":checked") ?
                        "ui-icon-check" : "ui-icon-blank"
                });

            }

        });

        // Create three checkbox instances.
        $(function () {
            $("input[type='checkbox']").checkbox();
        });

    }


}
function navig(){

    UISLMENU = USM = function () {
        $.x()
        $.fn.slM = function () {
            var g = G(arguments)
            this.selectmenu.apply(this, g)
            return this
        }
        $CSS({


            fieldset: {B: 0},
            label: {d: 'b', M: '30px 0 0 0'},
            select: {w: 200},

            _overflow: {h: 200}

        })

        $.d([$.f().at('action', '#').A($('<fieldset>').A(
            $.lb('select a speed').for('speed'),
            $.sl().id('speed').n('speed').A(
                $.op('slower'), $.op('slow'),
                $.op('medium').at('selected', 'selected'),
                $.op('fast'), $.op('faster')),
            $.lb('Select a file').for('files'),
            $.sl().n('files').id('files').A(
                $.og("Scripts").A(
                    $.op('jquery', 'jquery'),
                    $.op('ui.juqery.jus', 'jqueryui')),
                $.og("Other files").A(
                    $.op('some unknown file', 'somefile'),
                    $.op('Some other file w long option text', 'someotherfile'))),
            $.lb('Select a number').for('number'),
            $.sl().n('number').id('number').A(
                $.op('1'), $.op('2').at('selected', "selected"),
                $.op('3'), $.op('4'), $.op('5'), $.op('6'), $.op('7'),
                $.op('8'), $.op('9'), $.op('10'),
                $.op('11'), $.op('12'), $.op('13'), $.op('14'),
                $.op('15'), $.op('16'), $.op('17'), $.op('18'),
                $.op('19')
            )))]).K('demo')
        $("#speed").selectmenu()
        $("#files").selectmenu()
        $("#number").selectmenu().selectmenu("menuWidget").K("overflow")
    }
MENU=function(){z(); $CSS({'.ui-menu': { w: 150 }})
    $.ul([
        $.li(['Hockey']),
        $.li(['Football', $.ul([
            $.li('Iain Hume'),
            $.li('Del Piero'),
            $.li('David James')])]),
        $.li(['Cricket', $.ul([
            $.li('Sachin'),
            $.li('Ganguly'),
            $.li('Dravid'),
            $.li('yano')
        ])]).A(),
        $.li(['KickBoxing']).K('ui-state-disabled'),
        $.li(['Tennis', $.ul([$.li().A('Patrick Rafter')])])
    ]).id('menu')
    $( "#menu" ).menu()
}



UITAB=function(){z()
    $.d([

        $.ul([ $('<li><a href="#fragment-1"><span>One</span></a></li>'),
            $(' <li><a href="#fragment-2"><span>Two</span></a></li>'),
            $('<li><a href="#fragment-3"><span>Three</span></a></li>')
        ]),

        $.dI('fragment-1').A(
            $('<p>First tab is active by default:</p> <pre><code>$( "#tabs" ).tabs(); </code></pre>')),

        $.dI('fragment-2').A(l1),
        $.dI('fragment-3').A(l2)

    ]).tabs()


}
    AUTOCP = function () {
        $.x('x', 'autocp')

        availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure",
            "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java",
            "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"]


        $.d([

            $.lb('Tags:').for('tags'), $.ip().id('tags')

        ]).K('ui-widget')


        $(function () {
            $("#tags").autocomplete({source: availableTags})
        })

        function other() {
            AUTOCOMP = function () {
                z()

                $.lb('Select a programming language: ', "autocomplete")


                $.ip().id("autocomplete")

                tags = ["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby"];
                $("#autocomplete").autocomplete({
                    source: function (request, response) {
                        var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
                        response($.grep(tags, function (item) {
                            return matcher.test(item);
                        }));
                    }
                })
            }
        }

    }
    ACCORD = ACC = function () {
        z()
        ul = $.ul([
            $.li('List item 1'),
            $.li('List item 2'),
            $.li('List item 3')
        ])
        $.d([
            $.h3('Section 1'), $.d([$.p(l1)]),
            $.h3('Section 2'), $.d([$.p(l2)]),
            $.h3('Section 3'), $.d([$.p(l1), ul])
        ]).accordion()
    }
    }
SPANFOCUS= FOC = function () {
    $.x()

    $.sp('Some Span').id("my-span").at('tabindex', "0")
    $.sp('Some Span1').id("my-span1")//.at('tabindex',"0")
    $.sp('Some Span2').id("my-span2").at('tabindex', "0")
    document.getElementById('my-span').focus()
    document.getElementById('my-span2').focus()
}
function userInt(){
     HIGHLIGHT = HLT = function () {

         $.h({
             p: {C: 'y', w: 200, B: '1px solid green'},
             d: {C: 'r', w: 100, h: 100}
         })//  df HL col is yellow.// simp  syntax to use   effect :   se.ef( "hgl", {args}, spd ) // hgl col= "#ffff99".    mode  of the effect =show | hide
         $.dK('target')
         $.bt('Highlight: ', function () {
             $(".target").ef("highlight",
                 {color: "#669966"}, 3000)
         })
     }


     SAMPLER = EFFECTS = EFS = function () {
         $.x('x')

         $CSS({
             _toggler: {w: 500, h: 200, p: 'r'},
             $button: {pad: '.5em 1em', 'text-decoration': 'none'},
             $ef: {w: 240, h: 135, pad: '0.4em', p: 'r'},
             '$ef h3': {mar: 0, pad: '0.4em', 'text-align': 'center'},
             '_ui-efs-transfer': {bor: '2px dotted gray'}
         })

         $.d([
             $.d([
                 $.h3('Effect').K('ui-widget-header ui-corner-all'),
                 $.p('afsdfsdfsa fasdsafdas fdsdfa')
             ]).id('ef').K("ui-widget-content ui-corner-all")

         ]).K('toggler')


         sl = $.sl().n('efs').id('efTypes')
         _.e(['efs', 'blind', 'bounce', 'clip', 'drop', 'explode', 'fade', 'fold',
                 'highlight', 'puff', 'pulsate', 'scale', 'shake', 'size', 'slide', 'transfer'],
             function (a) {
                 sl.A($.op(a))
             })

         $.bt('Run Effect', runEf).id("button").K("ui-state-default ui-corner-all")
         function runEf() {
             $l('runEf')
             var selEf = $("#efTypes").val()
             op = ( selEf === "scale" ) ? {percent: 0} :
                 ( selEf === "transfer" ) ? {to: "#button", className: "ui-efs-transfer"} :
                     ( selEf === "size" ) ? {to: {width: 200, height: 60}} : {}
             $("#ef").effect(selEf, op, 500, cb)
             function cb() {
                 _.in(function () {
                     $("#ef").removeAttr("style").hide().fadeIn()
                 })
             }

             $("#button").$(function () {
                 runEf();
                 return false
             })
         }


     }

     HIDESHOWNICE=HIDE = function () {



    $.s({

        p: {C: '#bca', w: 200, bor: '1px solid green'},

        div: {w: 100, h: 100, C: 'r'}
    })


    $.p('$')
    $.bt('hd').id('hd')
    $.bt('sh').id('sh')
    d = $.dK('tg')

    $('#hd').$(function () {
        d.hd('sl', {d: 'r'}, 500)
    })

    $('#sh').$(function () {
        d.sh('sl', {d: 'd'}, 2000)
    })


}
OVERLAY =FADEIN=FIN= function () {
    $.h({

        bd: {B: 0,M: 0},
        '_ui-widget-overlay': {
            bg: 'repeat-x scroll 50% 50% #AAA', al: '0.3'},
        '_ui-widget-overlay': {
            h: '100%', l: 0,
            ps: 'a', t: 0, w: '100%'}
    })
    ovL = $.dK("ui-overlay",[
        $.dK("ui-widget-overlay")]).hd().fI()
    $.rz(function () {
        ovL.WH($(document).W(),$(document).H()).hd().fI()
    })

}
DGB = function () {
    $.s({$dgb: {w: 100, h: 100, C: 'r'}} ,'o', 'dgb')
    $.dI('dgb', ['Drag me']).dgb()
}
DPB = function () {
    $.x('b', 'dpb')
    $CSS({
        $dgb: {C: 'r', w: 100, h: 100},
        $dpb: {
            p: 'a',
            C: 'o', c: 'b',
            l: 250, t: 0, w: 400, h: 400,
            pad: 10
        }
    })
    dp = $.d(['Drop here']).id('dpb')
    dg = $.d(['Drag me']).id('dgb')
    $("#dgb").dgb()
    $("#dpb").dpb({
        drop: function () {
            dp.C($r()).A(dg.XY(0, 0))
        }
    })
}
 }
function err(){ 
}
//to use bootstrap with jqui!!!
//http://www.ryadel.com/2015/01/03/using-jquery-ui-bootstrap-togheter-web-page/
// http://api.jqueryui.com/jQ.widget.bridge/
FID=function(){z()



    $.wg("jy.simp", {
        options: {text: ""},
        _setOption: function (k, v) {
            if(k === "text") {
                this.element.text(v)
            }
            this._trigger("change")
        }
    })
    a = $.a('Hello World')
        .simp().on("simpchange", function(){
            //p.html( a.simp("option", "text"))
        })

    // p = $.p()

    $.bt('Change Text',function(){
        a.simp("option", "text", "new text")
    }).button()



}
COLORANIM = CANIM = function () {
    $.x()
    $CSS(
        {
            $el: {
                C: '#aaa', c: '#006', fZ: 25,
                tA: 'c', P: '1em'
            }
        }
    )
    $.d().id('el').A('-color anim-')
    $.bt('anim!', function () {
            $("#el").an({
                c: 'g',
                C: "rgb(20,20,20)"
            })
        }
    )
    /*
     Color Animation
     jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), 
     hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.

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