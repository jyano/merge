TXIP= TWOWAY= function (){z()
    $.dA('y', 100, 300, 200, 100).bT('n')
    $.ip().bTI('n')
    ok({  n: $o('ph text') })
} // bT(text)  bTI(textInput)  $o
K1=function(){z()
    $.p('f').A($.S().bT('f'))
    $.p('l').A($.S().bT('l'))
    $.p('f:').A($.ip().bV('f'))
    $.p('l:').A($.ip().bV('l'))
    $.p('full:').A($.S().bT('full'))
    $.bt('tU').b$('tU')

    vm = {
        f:$o('a'),
        l:$o('b'),
        tU:function(){
            this.l(_.tU(this.l()))
        }
    }

    vm.full=ko.c(function(){
        return vm.f()+' '+vm.l()
    })

    ok(vm)
} //bT  bV(value)  b$ ko.c(computed)
TXIPROOT =  TXI=  function () {$.z('x')
    $.d([
        $.p(['un:',$.ipTi('un')]),
        $.p(['Pw:',$.pwTi('pw')]),
        'the vm: ',
            $.pre().bT('ko.toJSON($root,null,2)')
    ])
    ok({un:$o('fred flintsone'), pw: $o('yaba daba password')})}//$.ipTi  $.pwTi   $.pre  bT  ko.toJSON  $root
BHTML = HTM=  function(){$.z().dH('details').fS(100); ok('h',$o('wait..'));
    _.in(2, function(){vm.h("<em>report:<a href='http://www.playboy.com'>here</a>.</em>")})}// dH
ATTR= function(){$.x(); $.aA('{href:url, title:tt}', 'report').fS(100)
    ok({url:$o("http://www.hustler.com"),tt: $o("statistics")})
}// aA


VISABLE=VIS=   function (){$.z('y').h1('see me if true!').bVs('vs')
    $.h1('ALWAYS HERE!'); ok('vs', $o(1))
    _.in(function(){vm.vs(0); _.in(function (){
        vm.vs(1)})})}// bVs


IF=function(){$.x('x');
    $.d([
        'Display?',$.cC('ms'),
        $.pI('ms').A('Here is a message. Astonishing')
    ])
    ok({ms: $o(0)});
    _.in(function(){
        vm.ms(1)})     } //$.cC  $.pI

ENABLE = EN=function () {$.x()
    $.p().A($.cbC('hasPhone'), 'I have phone')
    $.p('Your cellphone number').A(
        $.ip().b({v: 'num', en: 'hasPhone'}))
    ok({hasPhone: $o(0), num: ''})
}
VALUE= VAL=function () {$.x('K1');$Ms('K1')
    $.p('Name:').A($.ip().b({
            v: 'editing',
            v: 'name',
            f: 'editing'
        }),
        $.d('r').b({v: '!editing()', t: 'name', $: 'edit'}))
    $.p('Click the name to edit it; click elsewhere to apply changes')
    ok({
        name : $o("Bert Bertington"), editing : $o(),
        edit : function () {vm.editing(true)}
    })//KOFCC
}
SEL= CUNTS = function (n, v) {
    $.x('o').h1('dests')
    $.sO('cunts')
    ok('cunts', $oa('Fran', 'Ger', 'Spa'))
    _.in(2, function () {
        vm.cunts.push('Chi')
    })
}
TTR =   function () {$.C('r'); $('body').fS(30)
    $.x().t([$.tH([$.tr([$.th('F'),$.th('L')])]), $.tBE('peep', [
        $.tr([$.tdT('f'), ', ', $.tdT('l')])])])//  $.t([$.tH([$.tr([$.th('F'), $.th('L')])]), $.tBE('peep', [$.tr([$.tdT('f').col('b'), ', ', $.tdT('l').col('w')])])])// <- $.fn.tE= $.fn.tBE ? // (not tableHTML)
    ok({peep: $oa([{f: 'a', l: 'A'}, {f: 'b', l: 'B'}, {f: 'c', l: 'C'}])}) //ok({ peep: [{f:'a',l:'A'},      {f:'b',l:'B'}, {f:'c',l:'C'}]})

    function classik(){KOEACH = function () {
        format()

        s2(
            _t()(
                thead()(
                    tr()(
                        th()('First name'),
                        th()('Last name')
                    )
                ),
                tbody().b('E', 'people')(
                    tr()(
                        td().b('t', 'fn'),
                        td().b('t', 'ln'))
                )
            )
        )
        ko.ab({
            people: [
                {fn: 'B', ln: 'Bert'},
                {fn: 'Ch', ln: 'Char'},
                {fn: 'De', ln: 'Dent'}
            ]

        })


    }}
}
BINDUL= BUL=MONK= function() {
    $.x('x')
    $.h1('monkey').bT('monkey')
    $.iV('monkey')
    $.sb('hello').b$('A')

    //  $.s$('a','play');
//    $.U('cl',[            'my name is ',$.sT('n'),            ' and i like to play ', $.sT('c')])


    $.uE('list', [$.li(['my name is ',
        $.sT('n'), ' and i like to play ',
        $.sT('c')])])


    vm = {
        monkey: $o(),
        list: $oa(),
        A: function () {
            this.list.p({n: 'j', c: $r()})
        }
    }

    vm.monkey('elephant')

    ok(vm)
    vm.A().A().A()
    //https://www.youtube.com/watch?v=JGwRIbWWqjE

}
COMPUTED= CPD  = function () {$.z().h1('KNOCKOUT') //bT,bV and computed
    $.d().A(
        $.p('F: ', $.b().bT('f')),
        $.p('L: ', $.b().bT('l')),
        $.p('F: ', $.ip().bV('f')),
        $.p('L: ', $.ip().bV('l')).id('l'),
        $.p('L: ', $.b().bT('fl')),
        $.bt('caps').b$('capL')
    )
    vm={
        f: $o('j'),
        l: $o('y'),
        capL: function(){this.l(_.tU(this.l()))
        }
    }
    vm.fl= ko.c(function () {return vm.f() + ' ' + vm.l()})
    ok( vm)
    function klassk(){
        KNOCKS  = function () {
            format()
            s2(h1('KNOCKOUT'),
                pg('F: ', _B().b('t', 'f')),
                pg('L: ', _B().b('t', 'l')),
                pg('F: ', ip().b('V', 'f')),
                pg('L: ', ip().b('V', 'l')).id('l'),
                pg('L: ', _B().b('t', 'fl')),
                bt('caps').b('$', 'capL'))
            vm = {}
            vm.f = $o('j')
            vm.l = $o('y')
            vm.fl = ko.c(function () {
                return vm.f() + ' ' + vm.l()
            })
            vm.capL = function () {
                vm.l(uC(vm.l()))
            }
            ko.ab(vm)
        }
    }
}
ULIF=  function(){$.x()
    $.ulE('PL', [ $.li([
        $.sp('Planet: '),
        $.b().bT('n'),
        $.dI('cap', [  $.pT('cap.n')])
    ])])
    ok('PL',[
        {n: 'Merc', cap: null },
        {n: 'Earth', cap: { n: 'Barn' } },
        {n: 'Uranus'  }
    ])
}
SELMULTI = SLM =function () {
    $.x(null, 'selectedOptions')
    $.p(
        'Where you want to go?',
        $.sl().at({size: 5, multiple: true}).b({
            o: 'available', sO: 'chosen'
        }))
    ok({
        available: $oa(['France', 'Germany', 'Spain']),
        chosen: $oa(['Germany'])
    })
    _.in(function () {
        vm.chosen.push('France')
    })
}
K3=function(){z()
    ko.$bH({
        fadeVisible:{i:  function(e,v) {
            var v=v()
            $l('v:'+v)
            $(e).toggle(v)
        }, u:function(el,vAc){
            vAc()?$(el).fadeIn():$(el).fadeOut()
        }},
        jqButton: {i: function(e){$(e).button()}, u: function(e, vA) {$(e).button("option", "disabled", vA().enable === false);}}
    })


    str= '<h3 data-bind="text: q"></h3>'
    str+= '<p> distribute <b data-bind="text: pB"></b> points  </p>'
    str+=' <table><thead><tr><th>Option</th><th>Importance</th></tr></thead>'
    str+='  <tbody data-bind="foreach: As"><tr>'
    str+='<td data-bind="text: aT"></td>'
    str+=' <td><select data-bind="options: [1,2,3,4,5], value:Ps"></select></td>'
    str+=' </tr> </tbody> </table>'
    str+='<h3 data-bind="fadeVisible: pU() > pB">  too many points!  </h3>'
    str+='<p><b data-bind="text: pB-pU()"></b> left</p>'
    str+='<button data-bind="jqButton: jqButton: { enable: pU() <= pB },  click: save">Finished</button>  '
    $(str).A()
    function VM(q, pB, As) {var vm=this
        vm.q  = q
        vm.pB = pB
        vm.As = $.map(As, function(t) {return {aT:t, Ps: $o(1)} })
        vm.save = function(){alert('To do')}
        vm.pU = ko.c(function(){var t = 0; _.e(vm.As, function(a){t += a.Ps()}); return t}) //points Used
    }
    ok(new VM("factors?", 10, ["Functionality", "News", "dropshadows", "testimonials"]))

}
EACHDIVADD=EDA=function(){$.x()
    $.dE('peep', [  $.p($.spT('f'),    ' ',   $.spT('l')) ])
    vm = {peep: $oa([         {f: 'B', l: 'Bb'},         {f: 'C', l: 'Cc'},         {f: 'D', l: 'Dd'}])}
    ok(vm)
    $.bt('push',function(){vm.peep.push({f:'j',l:'y'})})
}
ULADD=ULA=function(){$.x('x').h2('Peeep')
    $.lb('Show time: ').A(
        $.cbC('showDT'))
    $.uE('peep',[$.li().A(
        $.d([$.spT('n'), 'has',
            $.spT('ch().length'),
            'children &nbsp;',
            $.a$('New','A')]),
        $.ulE('ch',[
            $.li([$.spT(), $.spVs( '$root.showDT').A(
                ' (child rendered at ', $.spT('new Date().getSeconds()'),')'
            )])]))])
    ok({peep: peep, showDT: $o()})
    peep()
    //add, conditional el
    //anonymous vm
}
ULDEL=ULD=function(){$.x();  $.h4('People')
//bind bt 'click' to parent.rem
    $.ulE('peep',[ $.li([
        $.sp('pos/name: '),
        $.spT('$index'),
        $.spT('n'),
        $.$bt('del', 'rm', '-')
    ]) ])
    $.$bt('A')
    ok({ peep : $oa({n:'B'},{n:'Ch'},{n:'De'}),
        A: function(){this.peep.push({n: "New at "+$D()})},
        rm : function (a) {vm.peep.remove(this)}
    })

    function klassic() {
        ULINDEX = function () {

            format()

            s2(
                h4('People'),
                ul().b('E', 'people')(
                    li()(
                        sp('pos/name: '),
                        sp().b('t', '$index'),
                        sp().b('t', 'n'),

                        lk(' X').b('$', '$parent.rem')
                    )
                ),


                bt('add').b('$', 'add')
            )

            vm = function () {

                var o = {}

                o.people = $oa([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])

                o.add = function () {
                    o.people.push({n: "New at " + new Date()})
                }

                o.rem = function () {
                    o.people.remove(this)
                }

                return o
            }


            ko.ab(vm()
            )
        }
    }
}
K4=TUTC=COL=function(){z();$Ms('TUTC'); $.h2(['seats:(',$.spT("_.z(Ss())"),')'])
    $.t([$.tH([$.tr([$.th('n'),$.th('M'), $.th('$$'),$.th()])]),
        $.tBT('Ss',$.tdT('n'),$.td($.slB({o:'$root.Ms',v:'m',oT:"'n'"})),
            $.tdT('fm'), $.td([$.a$('XX',"$root.rm")]))])
    $.h3(['$$: $', $.sp().bT('_.tF($$())')]).bVs('$$()>0'); $.bt('+').b({$:'A', en:'_.z(Ss())<5'})
    ok(new (function(){var vm=this;vm.Ms=[{n:"bat",$$:0},{ n:"pig",$$:3.9},{n:"zeb",$$:29}]
        vm.Ss=$oa([Res("jas"),Res("rig")]); vm.$$=ko.c(function(){var $$=0,Ss=vm.Ss();
            _.e(Ss,function(s){$$+=s.m().$$});return $$}); vm.A=function(){vm.Ss.p(Res())};
        vm.rm= function(s){vm.Ss.rm(s)}; function Res(n,m){
            var r={n:n||'ano',m:$o(m||vm.Ms[0])}
            r.fm=ko.c(fm);return r; function fm(){return fm(r.m().$$)
                function fm($$){return!$$?'Name':'$'+_.tF($$)}}}}))



    function old(){
        TUTC1=function(){z();$Ms('TUTC')
            availableMeals =  [
                { mealName: "Standard (sandwich)", price: 0 },
                { mealName: "Premium (lobster)", price: 34.95 },
                { mealName: "Ultimate (whole zebra)", price: 290 }
            ]
            $.h2().A('Your seat reservations (', $.sp().bT("seats().length"), ')')
            $.t().A(
                $('<thead>').A($.tr().A($('<th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th>'))),
                $('<tbody>').bE('seats').A($.tr().A(
                    $.td().bT('name'),
                    $.td($.sl().b("options: $root.availableMeals, value: meal, optionsText: 'mealName'")),
                    $.td().bT('formattedPrice'),
                    $.td().A($.a('Remove','#').b$("$root.removeSeat")))))
            $.h3().A('Total surcharge: $', $.sp().bT('totalSurcharge().toFixed(2)')).bVs('totalSurcharge() > 0')
            $.bt('reserve another seat').b('click: addSeat, enable: seats().length < 5')
            ok(new ReservationsViewModel())

            function SeatReservation(name, initialMeal) {
                var self = this;
                self.name = name;
                self.meal = $o(initialMeal);
                self.formattedPrice = ko.computed(function() {
                    var price = self.meal().price;
                    return price ? "$" + price.toFixed(2) : "None";
                });
            }
            function ReservationsViewModel(){
                var self = this;
                // Non-editable catalog data - would come from the server
                self.availableMeals = availableMeals
                // Editable data
                self.seats = $oa([
                    new SeatReservation("Steve", self.availableMeals[0]),
                    new SeatReservation("Bert", self.availableMeals[0])
                ])
                self.totalSurcharge = ko.computed(function() {
                    var total = 0;
                    for (var i = 0; i < self.seats().length; i++)
                        total += self.seats()[i].meal().price;
                    return total;
                })
                self.addSeat = function() {
                    self.seats.push(new SeatReservation("", self.availableMeals[0]));
                }
                self.removeSeat = function(seat) { self.seats.remove(seat) }

            }
        } //full collection app from website !!!!!!!

    }
}
BSTY=function(){z()
    $CSS({body:{'font-size':100,C:'p'}, _profWarn:{C:'r',c:'b'}, _profPos:{C:'b', c:'r'}});
    d=$.d(['Prof Info'])
    str="{ color: curProf() < 0 ? 'red' : 'black', padding: curProf() < 0 ? '20px' : '200px'}"
    d.b({ y: str })

    vm = {curProf: $o(150000)}
    ok(vm)
     _.in(2,function(){
        // Causes the "profitPositive" class to be removed
        // and "profitWarning" class to be added
        vm.curProf(-50)
    })
}
BCSS=function(){z()

    $CSS({
        _profWarn:{C:'r',c:'b'}, _profPos:{C:'b', c:'r'}
    })

    $.d(['Prof Info']).fS(40)
        .b({s:'profSts'})
    vm = {curProf:$o(150000)
    }

     vm.profSts = ko.pureComputed(function() {$l('in vm.protSs')
         var res=this.curProf() < 0 ? "profWarn" : "profPos"
         $l('res: '+res)
         return  res
     }, vm)
    ok(vm)

    _.in(2,function(){
        // Causes the "profitPositive" class to be removed
        // and "profitWarning" class to be added
        vm.curProf(-50)
    })

}
WITH=function(){z(); $.d([$.h1().bT('city'), $.p(['lat:', $.spT('lat'), 'lon:', $.spT('lon')]).b('w','xy')])
    ok({
        city: "London",
        xy: {lat:51,lon:-0.1}
    })}
WITHPARENT= WPA= function(){z(); $.f().A('Twt-acc:', $.ip().bV('twtN'), $.sm().A('Get twts')).b({sm: 'getTwts'})
    $.d([$.h3(['Rec twts fetched at', $.spT('retrDt')]),
        $.ol().bE('topTwts').A($.liT('text')),
        $.bt('Clear twts').b('$','$parent.clearRes')]).b({w: 'resDa'})
    ok(new (function(){var vw = this
        vw.twtN = $o('@ex');vw.resDa = $o(0)
        vw.clearRes = function(){vw.resDa(undefined)}
        vw.getTwts = function (){var n=vw.twtN(); vw.resDa({topTwts: [{text:n+':nice'}, {text:n+':trump'}, {text:n+':sex'}], retrDt: new Date()})}
    }))
}



STARRATING=function(){z()
    ko.bindingHandlers.starRating = {
        init: function(element, valueAccessor) {
            $(element).addClass("starRating");
            for (var i = 0; i < 5; i++)
                $("<span>").appendTo(element);

            $("span", element).each(function(index) {
                $(this).hover(
                    function() { $(this).prevAll().add(this).addClass("hoverChosen") },
                    function() { $(this).prevAll().add(this).removeClass("hoverChosen") }
                );
            })
        },
        update: function(element, valueAccessor) {
            // Give the first x stars the "chosen" class, where x <= rating
            var observable = valueAccessor();
            $("span", element).each(function(index) {
                $(this).toggleClass("chosen", index < observable());
            });
        }
    }
    str= '<h3 data-bind="text: question"></h3>'
    str+= '<p>Please distribute <b data-bind="text: pointsBudget"></b> points between the following options.</p>'
    str+=' <table>'
    str+=' <thead><tr><th>Option</th><th>Importance</th></tr></thead>'
    str+='  <tbody data-bind="foreach: answers">'
    str+=' <tr>'
    str+='<td data-bind="text: answerText"></td>'
    str+='<td data-bind="starRating: points"></td>'
    str+=' </tr>'
    str+=' </tbody>'
    str+='  </table>'
    str+='<h3 data-bind="visible: pointsUsed() > pointsBudget">Youve used too many points! Please remove some.</h3>'
    str+='<p>Youve got <b data-bind="text: pointsBudget - pointsUsed()"></b>'
    str+='points left to use.</p>'
    str+='<button data-bind="enable: pointsUsed() <= pointsBudget, click: save">Finished</button>  '
    $(str).A()
    function Answer(text) {this.answerText = text;this.points = $o(1);}
    function VM(question, pointsBudget, answers) {
        this.question = question
        this.pointsBudget = pointsBudget
        this.answers = $.map(answers, function(text) {return new Answer(text) })
        this.save = function(){alert('To do')}
        this.pointsUsed = ko.c(function() {
            var total = 0;
            for (var i = 0; i < this.answers.length; i++)
                total += this.answers[i].points();
            return total;
        }, this);
    }
    ok(new VM("Which factors affect your technology choices?", 10, [
        "Functionality, compatibility, pricing - all that boring stuff",
        "How often it is mentioned on Hacker News",
        "Number of gradients/dropshadows on project homepage",
        "Totally believable testimonials on project homepage"
    ]))
}
KOSPA=SPA=function(){z();$Ms('KOSPA')

    $.ulE('folders').K('folders').A(
        $.liT('$data')
    )
    /*
     <ul class="folders" data-bind="foreach: folders">
     <li data-bind="text: $data,css: { selected: $data == $root.chosenFolderId() }, click: $root.goToFolder"></li>
     </ul>





     <table class="mails" data-bind="with: chosenFolderData">
     <thead><tr><th>From</th><th>To</th><th>Subject</th><th>Date</th></tr></thead>
     <tbody data-bind="foreach: mails">
     <tr data-bind="click: $root.goToMail">
     <td data-bind="text: from"></td>
     <td data-bind="text: to"></td>
     <td data-bind="text: subject"></td>
     <td data-bind="text: date"></td>
     </tr>
     </tbody>
     </table>
     <div class="viewMail" data-bind="with: chosenMailData">
     <div class="mailInfo">
     <h1 data-bind="text: subject"></h1>
     <p><label>From</label>: <span data-bind="text: from"></span></p>
     <p><label>To</label>: <span data-bind="text: to"></span></p>
     <p><label>Date</label>: <span data-bind="text: date"></span></p>
     </div>
     <p class="message" data-bind="html: messageContent" />
     </div>
     */

    function WebmailViewModel() {
        // Data
        var self = this;
        self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
        self.chosenFolderId = $o();
        self.chosenFolderData = $o();
        self.chosenMailData = $o();

        // Behaviours
        self.goToFolder = function(folder) {
            self.chosenFolderId(folder);
            self.chosenMailData(null); // Stop showing a mail
            $.get('/mail', { folder: folder }, self.chosenFolderData);
        };
        self.goToMail = function(mail) {
            self.chosenFolderId(mail.folder);
            self.chosenFolderData(null); // Stop showing a folder
            $.get("/mail", { mailId: mail.id }, self.chosenMailData);
        };

        // Show inbox by default
        self.goToFolder('Inbox');
    };

    ko.applyBindings(new WebmailViewModel());

    ok(new (function WebmailVM() {
        var self = this

        this.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    }))

}
KOCSS=function(){$.x()
    $.d().fS(400).A('Profit Information')
        .bS("{color:curProf()<0?'red':'blue'}")
    ok({curProf: $o(50) })

    _.in(function(){
        vm.curProf(-50); $l('booya')
    } )
}
CHECK =SPAM=function(){$.x('o','spam')
    $.cKO  =function (m, b, v) {var cb = $.cb(),
        p = $.p().A($.sp().A(m), cb.bC(b))
        if (v) {cb.v(v)}; return p}//=cbKO=cb2
    $.p(['spam?',
        $.cbC('wantSpam', 'wantSpam')])
    $.d([
        'spam flavors:',
        $.d([$.cKO('Cherry', 'flav', 'cherry')]),
        $.d([$.cKO('Almond', 'flav', 'almond')]),
        $.d([$.cKO('Glut', 'flav', 'glut')])])
        .bVs('wantSpam')
    vm ={wantSpam: $o(1), flav: $oa(["cherry", "almond"])}
    ok(vm)
    _.in(2, function(){   vm.wantSpam(0)   })
//bind cb 'checked' to boolean
    //vm.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
}
SLOP=function(){$.z()
    $.p('Choose some countries youd like to visit:').A(
        $.sl().b({o:'cunts', sO: 'chosenCunts'}).sz(5).mlt())
    ok({cunts : $oa('Fra','Ger','Spa'), chosenCunts : $oa('Ger')}
    )// Initially, only Germany is selected
    _.in(function(){vm.chosenCunts.push('Fra')   },'*') // ... then later  France is selected too
}
OLTWT=function(){$.x('r','twt')

    $.fSm('g',[  'un:', $.ipV('un'),   $.sb('Get')])
    $.dW('da',[
        $.h3('dt:', $.spT('dt') ),
        $.olE('MS',
            $.liT('ms')),

        $.bt$('clr',' $parent.clr')

    ])


    ok({
        un : $o('@ex'),
        da : $o(),
        g:function(){vm.da({
            dt: $D(),
            MS: _.m(['a','b'],
                function(t){return {ms:vm.un()+':'+t}})
        })},
        clr: function(){ vm.da([]) }
        //<- $.bt('Clear tweets').b$(' $parent.clearResults')
    })
}
ULROOT=function(){$.x('x')
    $.uE('fs', [
        $.li().b({
            t:'$data',
            s:'{selected: $data==$root.chFI()}',
            $:'$root.gtf'
        })
    ]).K('fs')
    $.A(
        ul().k('fs').b('E', "fs")(li().b("text:$data, css:{selected:$data==$root.chFI()},click:$root.gtf")))
    MVM = function () {
        var vm = {
            fs : ['I', 'A', 'Se', 'Sp'],
            chFI : $o()
        }
        vm.gtf = function (f) {vm.chFI(f)}
        return vm
    }
    ok(MVM())



}
ULTIARR  =  function () {$.x();
    $.ipTi('n');//textInput
    $.h1T('n');//h1 text (read only) // $.dA('b',100,300,200,'+').bT('n')
    //ul each 'array'
    $.ulE('arr', [$.liT()])
    $.sm().b$('A')
    ok({n: $o('zi'), arr: $oa(),
        A: function () {this.arr.p(this.n())}
    })
    _.in(1, function () {vm.n('girf')
        _.e(['a', 'b', 'c'], function (i) {vm.arr.p(i)
        })
    })
}
SELLISTMISC = function () {
    $.x('z')
    $.d()(
        fo().b('S', 'addItem')(
            sp('add item'),
            tx().b({
                v: 'itemToAdd'//,vu:'afterkeydown'
            }),
            sm('add').b('ea', 'itemToAdd().length>0')),
        _d()(sp('Your values:'),
            sel().h(5).b({
                o: 'allItems',
                sO: 'selectedItems'
            })
        ),
        _d()(
            bt('remove').b({
                c: 'removeSelected', e: 'selectedItems().length>0'
            }),
            bt('sort').b({
                c: 'sortItems', e: 'allItems().length>1'
            }))
    ).a()

    ko.ab(o = BLM())

    f = $.f()
    f.bSb('addItem').A(
        $.sp('add item'),
        $.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
        $.sb('add')
            .bEn('itemToAdd().length>0')
    )
    $.d().A(f,
        $.d().A(
            $.sp('Your values:'),
            $.sl().h(5).b({
                o: 'allItems', sO: 'selectedItems'
            })
        ),
        $.d().A(
            $.bt('remove').b({
                c: 'removeSelected',
                e: 'selectedItems().length>0'
            }),
            $.bt('sort').b({
                c: 'sortItems',
                e: 'allItems().length>1'
            }))
    )

    $.f().b({sb: 'A'}).A('Add item:',
        $.ip().b({v: 'tA', vU: 'afterkeydown'}),
        $.sb('Add').b('en', 'tA().length > 0')
    )

    $.p('Your values:')

    $.sl().mlt().b({o: 'all', so: 'sl'})

    $.d([
        $.bt('Rem').b({$: 'xSl', en: 'sl().length > 0'}),
        $.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
    ])

    Lst = function () {
        this.tA = $o('')
        this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30])
        this.sl = $oa(['Hm'])
        this.A = function () {
            if (this.tA() != '' && this.all.indexOf(this.tA()) < 0) {
                this.all.push(this.tA())
                this.tA('')
            }
        }

        this.xSl = function () {
            this.all.removeAll(this.sl())
            this.sl([])
        }
        this.srt = function () {
            this.all.sort()
        }
    }
    $b(new Lst())
    ok({
        itemToAdd: $o(''),
        allItems: $oa(['a', 'b', 'c']),
        selectedItems: $oa(['d']),
        addItem: function () {
            $l('addItem')
            if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
                vm.allItems.push(vm.itemToAdd());
                vm.itemToAdd('')
            }
        },
        removeSelected: function () {
            allItems.removeAll(o.selectedItems())
            selectedItems([])
        },
        sortItems: function () {
            o.allItems.sort()
        }
    })

    f = $.f().A(
        $.sp('add item'),
        $.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
        $.sm('add').bEn('itemToAdd().length>0')
    )
    f.bSm('addItem')
    $.d().A(f, $.d().A(
            $.sp('Your values:'),
            $.sl().h(5).b({
                o: 'allItems',
                sO: 'selectedItems'
            })
        ),

        $.d().A(
            $.bt('remove').b({
                c: 'removeSelected',
                e: 'selectedItems().length>0'
            }),

            $.bt('sort').b({
                c: 'sortItems',
                e: 'allItems().length>1'
            }))
    )

    ok({
        itemToAdd: $o(''),
        allItems: $oa(['a', 'b', 'c']),
        selectedItems: $oa(['d']),
        addItem: function () {
            $l('addItem')
            if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
                vm.allItems.push(vm.itemToAdd());
                vm.itemToAdd('')
            }
        },


        removeSelected: function () {
            allItems.removeAll(o.selectedItems())
            selectedItems([])
        },
        sortItems: function () {
            o.allItems.sort()
        }
    })

    f = $.fSm('A', ['Add:',
        $.ipV('tA'),
        $.sb('Add').bEn('tA().length>0')
    ])
    $.p('Your values:')
    $.sl().mlt().b({
        o: 'all',
        so: 'sl'
    })
    $.d([

        $.bt('Rem').b({

            $: 'xSl',

            en: 'sl().length > 0'

        }),


        $.bt('Srt').b({$: 'srt', en: 'all().length > 1'})

    ])
    Lst = function () {

        this.tA = kO('')

        this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)

        this.sl = kA('Hm')

        this.A = function () {
            if (this.tA() &&
                this.all.indexOf(this.tA()) < 0
            ) {

                this.all.push(this.tA())
                this.tA('')
            }
        }

        this.xSl = function () {

            this.all.removeAll(this.sl())

            this.sl([])

        }
        this.srt = function () {
            this.all.sort()
        }
    }

    ok(new Lst())

    //sort, remove

    $.f().b({sb: 'A'}).A('Add item:',
        $.ip().b({v: 'tA', vU: 'afterkeydown'}),
        $.sb('Add').b('en', 'tA().length > 0')
    )
    $.p('Your values:')
    $.sl().mlt().b({o: 'all', so: 'sl'})
    $.d([
        $.bt('Rem').b({$: 'xSl', en: 'sl().length > 0'}),
        $.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
    ])
    Lst = function () {
        this.tA = $o('')
        this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30])
        this.sl = $oa(['Hm'])
        this.A = function () {
            if (this.tA() != '' && this.all.indexOf(this.tA()) < 0) {
                this.all.push(this.tA())
                this.tA('')
            }
        }

        this.xSl = function () {
            this.all.removeAll(this.sl())
            this.sl([])
        }
        this.srt = function () {
            this.all.sort()
        }
    }
    $b(new Lst())

    f = $.fSm('A', ['Add:',
        $.ipV('tA'),
        $.sb('Add').bEn('tA().length>0')
    ])

    $.p('Your values:')
    $.sl().mlt().b({
        o: 'all',
        so: 'sl'
    })

    $.d([

        $.bt('Rem').b({

            $: 'xSl',

            en: 'sl().length > 0'

        }),


        $.bt('Srt').b({$: 'srt', en: 'all().length > 1'})

    ])


    Lst = function () {

        this.tA = kO('')

        this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)

        this.sl = kA('Hm')

        this.A = function () {
            if (this.tA() &&
                this.all.indexOf(this.tA()) < 0
            ) {

                this.all.push(this.tA())
                this.tA('')
            }
        }

        this.xSl = function () {

            this.all.removeAll(this.sl())

            this.sl([])

        }


        this.srt = function () {
            this.all.sort()
        }
    }

    $.f().b({sb: 'A'}).A('Add item:',
        $.ip().b({v: 'tA', vU: 'afterkeydown'}),
        $.sb('Add').b('en', 'tA().length > 0')
    )

    $.p('Your values:')

    $.sl().mlt().b({o: 'all', so: 'sl'})

    $.d([


        $.bt('Rem').b({$: 'xSl', en: 'sl().length > 0'}),

        $.bt('Srt').b({$: 'srt', en: 'all().length > 1'})

    ])

    Lst = function () {

        this.tA = $o('')

        this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30])

        this.sl = $oa(['Hm'])

        this.A = function () {
            if (this.tA() != '' && this.all.indexOf(this.tA()) < 0) {
                this.all.push(this.tA())
                this.tA('')
            }
        }

        this.xSl = function () {
            this.all.removeAll(this.sl())
            this.sl([])
        }
        this.srt = function () {
            this.all.sort()
        }
    }

    ok(new Lst())

    f = $.f()

    f.bSb('addItem').A(
        $.sp('add item'),
        $.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
        $.sb('add').bE('itemToAdd().length>0')
    )

    $.d().A(f,

        $.d().A(
            $.sp('Your values:'),

            $.sl().h(5).b({

                o: 'allItems',
                so: 'selectedItems'
            })
        ),

        $.d().A(
            $.bt('remove').b({
                c: 'removeSelected',
                e: 'selectedItems().length>0'
            }),
            $.bt('sort').b({
                c: 'sortItems',
                e: 'allItems().length>1'
            }))
    )
    ok({
        itemToAdd: $o(''),
        allItems: $oa(['a', 'b', 'c']),
        selectedItems: $oa(['d']),
        addItem: function () {
            $l('addItem')
            if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
                vm.allItems.push(vm.itemToAdd());
                vm.itemToAdd('')
            }
        },


        removeSelected: function () {
            allItems.removeAll(o.selectedItems())
            selectedItems([])
        },
        sortItems: function () {
            o.allItems.sort()
        }
    })
    ok(new Lst())

}
CHERRYMISC=function(){$.x('o')
    $.p($.sp('spam?'), $.cC('wants'))
    $.d([  'Preferred flavors of spam:',
        $.d([
            $.p($.sp('cherry'),
                $.cC('flav').v('cherry')),
            $.d([$.p($.sp('Almond'),   $.cC('flav').v('almond'))]),
            $.p($.sp('Glut'), $.cC('flav').v('glut'))
        ])
    ]).bVs('wants')

    ok({
        wants:$o(1),
        flav:$oa(["cherry","almond"])
    })

    // vm.flav.push("msg")
    /*
     function $.cKO(m, b, v){
     var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
     if(v){ cb.v(v)}
     return p
     }*/


    $.x('o')
    $.p(  $.sp('spam?'),   $.cC('wants')   )
    $.d([  'Preferred flavors of spam:',
        $.d([$.p(  $.sp('cherry'), $.cC('flav').v('cherry')),
            $.d([$.p($.sp('Almond'),   $.cC('flav').v('almond'))]),
            $.p($.sp('Glut'), $.cC('flav').v('glut'))
        ])
    ]).bVs('wants')
    _.in(function(){
        vm.flav.push("glut")})

    ok({
        wants: $o(1),
        flav:  $oa(["cherry","almond"])
    })
    $.p($.sp('spam?'), $.cC('wants'))
    $.d(['Preferred flavors of spam:',
        $.d([
            $.p($.sp('cherry'), $.cC('flav').v('cherry')),
            $.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
            $.p($.sp('Glut'), $.cC('flav').v('glut'))
        ])
    ]).bVs('wants')
    ok({
        wants: $o(1),
        flav: $oa(["cherry", "almond"])
    })


    // vm.flav.push("msg")
    /*
     function $.cKO(m, b, v){
     var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
     if(v){ cb.v(v)}
     return p
     }*/


}
ULTASKMISC=function(){$.z().h3('Tasks')
    $.f().bSm('aT').A().A("Add task: ", $.ip().bV('nT').ph("What?"), $.bt('Add'))
    $.ul().b({e:'ts', vs:'visible:ts().length>0' }).A($.li().A(
        $.cb().bC( 'iD' ),
        $.ip().b("value:t, disable:iD"),
        $.bt('Del').bC( '$parent.rmT' )))
    $.sp("You have").A()
    $.B("&nbsp;").bT( "inc().length").A()
    $.sp("inc task(s)").A()
    $.sp("- beer!").bV("inc().length==0").A()

    ok({

        itemToAdd:$o(''),
        allItems:$oa(['a','b','c']),
        selectedItems:$oa(['d']),
        addItem:function(){
            if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                vm.allItems.push(vm.itemToAdd());
                vm.itemToAdd('')
            }
        },

        removeSelected:function(){
            allItems.removeAll(vm.selectedItems())
            selectedItems([])
        },
        sortItems:function(){vm.allItems.sort()}
    })


    vm2={
        ts: $oa(),
        nT: $o(),
        inc : ko.c(function(){  var vm=this
                return ko.ut.af(
                    vm.ts(), function(t){return !t.iD()
                    })
            }
        ),
        aT: function(){ this.ts.push({t: $o( o.nT()), iD: $o( ) }); this.nT('') },
        rmT: function(){ o.ts.remove(this) }
    }

    /*
     ko.b(vm2)
     //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: $o(i.t), iD: $o(i.iD) }}))})
     */
    $.f().bSm('aT').A().A("Add task: ",
        $.ip().bV('nT').ph("What?"),
        $.bt('Add')//.bS('s') // ??
    )
    $.ul().b({
        e:'ts', vs:'visible:ts().length>0' }).A($.li().A(
        $.cb().bC( 'iD' ),
        $.ip().b("value:t, disable:iD"),
        $.bt('Del').bC( '$parent.rmT' )))


    $.sp("You have").A()
    $.B("&nbsp;").bT( "inc().length").A()
    $.sp("inc task(s)").A()
    $.sp("- beer!").bV("inc().length==0").A()



    $.z().h3('Tasks')

    $.f().bSm('aT').A().A("Add task: ",
        $.ip().bV('nT').ph("What?"),
        $.bt('Add')//.bS('s') // ??
    )
    $.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
        $.cb().bC('iD'),
        $.ip().b("value:t, disable:iD"),
        $.bt('Del').bC('$parent.rmT')))
    $.sp("You have").A()
    $.B("&nbsp;").bT("inc().length").A()
    $.sp("inc task(s)").A()
    $.sp("- beer!").bV("inc().length==0").A()
    ok({
        itemToAdd: $o(''),
        allItems: $oa(['a', 'b', 'c']),
        selectedItems: $oa(['d']),
        addItem: function () {
            if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
                vm.allItems.push(vm.itemToAdd());
                vm.itemToAdd('')
            }
        },
        removeSelected: function () {
            allItems.removeAll(vm.selectedItems())
            selectedItems([])
        },
        sortItems: function () {
            vm.allItems.sort()
        }
    })

    vm2={
        ts: $oa(),
        nT: $o(),
        inc : ko.c(function(){  var vm=this
                return ko.ut.af(
                    vm.ts(), function(t){return !t.iD()
                    })
            }
        ),
        aT: function(){ this.ts.push({t: $o( o.nT()), iD: $o( ) }); this.nT('') },
        rmT: function(){ o.ts.remove(this) }
    }

    s2(
        h3('Tasks'),

        _f().b("S", "aT")(
            "Add task: ",

            ip().b('v', 'nT').ph("What?"),

            bt('Add').at('t', 's')
        ),

        ul(
            li()(
                cb().b('ch', 'iD'),
                ip().b("value:t, disable:iD"),
                lk('Del').b('ch', '$parent.rmT')
            )
        ).b("foreach:ts, visible:ts().length>0"),

        sp("You have"), _B("&nbsp;").b('t', "inc().length"), sp("inc task(s)"),
        sp("- beer!").b("visible: inc().length==0")
    )

    //ko.ab(TLVM())

    ok({

        itemToAdd:$o(''),

        allItems:$oa(['a','b','c']),

        selectedItems:$oa(['d']),
        addItem:function(){
            if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                vm.allItems.push(vm.itemToAdd());
                vm.itemToAdd('')}
        },

        removeSelected:function(){
            allItems.removeAll(vm.selectedItems())
            selectedItems([])
        },
        sortItems:function(){vm.allItems.sort()}
    })


}
ULDATA=function(){$.z('x')
    d= $.dI('hover').A($.a().A($.i('me').bT('matterId')))
    d.mouseover(function(){$l("!!!"); $(this).next("#box").gg()})//Show the div onmouseover.
    d.mouseout( function(){function onMouseOut(obj) {}})//Hide to div onmouseout
    $.ulE('mDateTime').A($.li().A(
        $.ul().bE('$root.matter.index.type()[$data]').A($.li().A(d,
                $.dI('box').css('display','none').A($.a().A('Edit'), $.a().A('Copy'), $.a().A('Delete'))),
            $.li().bT('matterTitle'),
            $.li().bT('matterComment')
        )))
}
function declarativeAppLoader(){
    FOCUS = function () {
        _$({
            C: 'u',
            t: 'read&write els “focusedness”  by binding it to  obserb',
            vm: {editingName: $o()},
            A: [
                $.ip().b("hasFocus: editingName"),
                $.h1('editing..').bVs('editingName'),
                $.bt('Edit').b("enable: !editingName(), click:function() { editingName(true) }")]
        })
    }
    VISABLE = function () {
        _$({
            C: 'o', t: 'bind -visibile- to a boolean -great', vm: 'vs',
            el: [{ch: 'see me if true!', $vs: 'vs'}, {ch: 'if false!', $vs: '!vs()'}],     //   OK( 'vs'  )  // <- OK( 'vs', $o(1)  )  //  <-ok({ vs: $o(1)  })
            _: function () {
                vm.vs(0);
                _.in(function () {
                    vm.vs(1)
                })
            }
        })
    }
    ATTR = function () {z()
        _$({
            C: 'w',
            t: 'attributes.. unlikely to use?',
            vm: {url: $o("year-end.html"), tt: $o("stats report")},
            A: [$.aA('{href:url,title:tt}', 'report')]
        })
    }
    KOCSS=function() {_$({ c:'v', t:'css example.. will i use it?', vm:{  n: $o(1)  },
        A:$.d(['info']).b("style: {color: n()<0?'red':'black'}"),
        _:function(){ vm.n(-5) } })}

}






//
//1 parameter: object that you want to use as the context for binding descendant elements.
//    If the expression you supply evaluates to null or undefined,
// descendant elements will not be bound at all,
// but will instead be removed from the document.

//    If the expression you supply involves any observable values,
// the expression will be re-evaluated whenever any of those observables change.
// Then, descendant elements will be cleared out,
// and a new copy of the markup will be added to your document and
// bound in the context of the new evaluation result.

//Note 1: Using “with” without a container element
//Just like other control flow elements such as if and foreach,
// you can use with without any container element to host it.
// This is useful if you need to use with in a place where
// it would not be legal to introduce a new container element just
// to hold the with binding.


//<ul>
//<li>Header element</li>
//<!-- ko with: outboundFlight -->
//...
//<!-- /ko -->
//<!-- ko with: inboundFlight -->
//...
//<!-- /ko -->
//</ul>
//The <!-- ko --> and <!-- /ko --> comments act as start/end markers, defining a “virtual element” that contains the markup inside. Knockout understands this virtual element syntax and binds as if you had a real container element.
