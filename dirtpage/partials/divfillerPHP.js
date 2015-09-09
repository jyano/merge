//include_once("phpfunctions.php")
//$topic = trim($_GET['topic']);
//$newMessage = $_GET['newmessage'];
//$act = $_GET['act'];
//$change = $_GET['change'];
//$messageNumber = $_GET['messagenumber'];


$.anc(Dp.u_("res",  $tp.rp(" ", "+") ))

el={el:'d', k:'pinktitle', ch:['page:' + _.tLc($tp) ]}

el={el:'sp', k:'search', n:$tp, ch:[
    'page:'+_.tLc($tp), {
        el:'a', hr:Dp.u_("res")+ $tp.rp(" ","+")+ "/", ch:'search'
    }
]}

$.f({
    n:'post', //id:'test',
    oSm:function(){return false},
    ch:[
        {el:'sp',id:'post',ch:[$.nbsp(9),$.ip().sz(28).maxLen(125).autocomplete("off").n(newMS)]},
        {el:'hd',n:'tp',v:$tp}, {el:'hd',n:'act',v:'postMs'},
        {el:'smBt',id:'button',n:'tp',v:'new ms'}]})

//$query = "SELECT * FROM people WHERE person = '$topic' ORDER BY rank DESC";

ol= $.ol()




while( $row = mysql_fetch_array($res) ){


    if(ob.rank%2){
        $pic1 = "up.jpg"; $class1 = "up";$pic2 = "down.jpg"; $class2 = "down";
    }

    else {
        $pic2 = "up.jpg"; $class2 = "up"; $pic1 = "down.jpg"; $class1 = "down";
    }
    ol.A($.li().A(
        {el:'sp', k:'ms', ch: hyper(ob.cm) }, {el:'sp', k:'t', ch:"("+ob.rank+")"}, '&nbsp; ',
        {el:'a', hr:"js:void(0)", ch: {el:'i',k:k1, n:ob.id, sr:$pic1, B:0}},
        {el:'a', hr:"js:void(0)", ch: {el:'i',k:k2, n:ob.id, sr:$pic2, B:0}},
        {el:'sp', k:'del',n:ob.id, ch:{el:'sp', k:'manip', ch: ' x &nbsp;'}},
        $.br(2)))
}









$.hr()



//<form enctype="multipart/form-data" action="http://www.dirtpage.com/upload.php" method="post">
//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//<input type="hidden" name="MAX_FILE_SIZE" value="10000000" />
//<input name="uploaded_file" type="file" value="add new pic"  />
//<input type="submit" value="add new pic" />
//<input type="hidden" name="topic" value=  $topic >
//</form>


ol = $.ol()

$.void=function(){

    var a=  $.a().href("javascript:void(0)")


    G(arguments).e(function(g){
        a.A(g)
    })

    return a
}
Pics.find({person: $topic}).by(" ORDER BY rank DESC").exec(function(z,res){
    if(   ob.rank %2 ) {
        $pic1 = "up.jpg"; $class1 = "up";$pic2 = "down.jpg"; $class2 = "down";} else {
        $pic2 = "up.jpg"; $class2 = "up"; $pic1 = "down.jpg"; $class1 = "down";   }

    var li = $.li().A(

        $.a().href(
            Dp.u('pages')+ '?tp='+   trim(ob.pic).replace(" ", "+" ) + '&m=p'
        ).A($.i("/pics/"+ob.pic).H(150)),


        $.sp().K('t').A(
            "("+ob.rank+")"+'&nbsp;',

            $.void($.i({
                src: pic1,
                k:'k1',
                n:ob.id
            })),

            $.void($.i({

                src: pic2,
                k:'k2',
                n:ob.id
            })),



            $.sp().K('del').n(ob.id),
            $.sp().K('manip').A('x &nbsp;')
        ),

        $.br())
    $p = ob.pic

    Cap.f({pic:$p}).ord('rank DESC').lm(1).$(function(z,res){
        _
            .e(res, function(ob){

                li.A(
                    $.sp(hyper(ob.cap) ).K('m'),
                    $.br(2))})
    })

    ol.A(li)

})