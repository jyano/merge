uplod = require('multer')({ dest: 'public/uploads/' }).single('avatar')

$a.use(
    ($ss=require('express-session'))({
        store: new  (require('connect-mongo')($ss))({ url: 'mongodb://localhost/jy'}),
        secret: 'foo',
        resave:true,
        saveUninitialized:true
    })
)

$a.use(($cP=require('cookie-parser'))('xyz'))
$bP=require('body-parser');
$a.use($bP.urlencoded({ extended: false }));
$a.use($bP.json())


$w = $Mw = function (q, p, n) {

    q.ss = q.session; p.lc = p.locals
    q.lI = q.loggedIn = p.lc.lI = p.lc.loggedIn = q.ss.username ? true : false
    q.un = q.username = q.ss.username; n()

}



$Mw.user = function (q, p, n) {

    if (q.loggedIn) {

        $md.user.findOne({

            username: q.username}, function (z, u) {
            if (z) {n(z)}
            else if (u) {q.user = p.locals.user = u
                q.username = p.locals.username = u.username
                q.userId = p.locals.userId = u._id}; n() })

    }


    else {p.json('guest')}

}


$a.use($Mw)






old=function(){
    $a.g('/render/:page', function (q, p) {p.render(q.params.page)})
    function picsMw() {
        $Mw.Pics = $Mw.P = function (q, p, n) {


            $m.pic.find(
                {u: q.I},


                function (z, pics) {

                    var array = []

                    _.each(
                        pics,

                        function (pic) {
                            array.push(
                                _S(pic._id) + pic.e
                            )  // $l(    )


                        })

                    p.locals.I = array
                    n()
                })
        }
        $Mw.pic = $Mw.p = function (q, p, n) {

            $Md.pic.findById(q.params.p,

                function (z, i) {
                    if (z) {
                        n(z)
                    }
                    p.locals.i = '/' + i._id
                    q.i = i
                    n()
                })


        }
    }
}