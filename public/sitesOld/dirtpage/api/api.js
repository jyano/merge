phpfunctions.php

$_FILES = $_FILES['newPic']; //$topic = trim($_POST['topic']);

$topic = trim($_GET['topic']);

$ms_id = $ms_number = $_GET['ms_id'];

incById=function(md,id){md.uI(id,{$inc:1})}
decById=function(md,id){md.uI(id,{$inc:-1})}


if ($act == "tp_up"){incById(Tp,$tp_id)}
if ($act == "tp_down"){decById(Tp,   $tp_id )}
if ($act == "ms_up"){incById(Ms,$ms_id)}
if ($act == "ms_down"){decById(Ms, $ms_id)}
if ($act == "re_up"){incById(Re, $re_id)}
if ($act == "re_down"){decById(Re, $re_id)}


function $That(md){
    this.md=md
}


$That.prototype.inc=function(id){this.md.uI(id,{$inc:1})}
$That.prototype.dec=function(id){this.md.uI(id,{$inc:-1})


    That=function(md){
    return new $That(md)
    }
}

ob={
    tp_up:function(){
        That(Tp).inc( $tp_id)},
    tp_down:function(){That(Tp).dec($tp_id)},

    ms_up:function(){That(Ms).inc($ms_id)},
    ms_down:function(){That(Ms).dec($ms_id)},

    re_up:function(){ That(Re).inc($re_id)},
    re_down:function(){ That(Re).dec($re_id)}
}


if ($act == "see_also_up"){res.uI(  $see_also_id, {$inc:1} )}
if ($act == "see_also_down"){res.uI(  $see_also_id, {$inc:-1} )}
if ($act == "pic_up"){res.uI(  $pic_id, {$inc:1})}
if ($act == "pic_down"){res.uI(  $pic_id, {$inc:-1})}
if ($act == "caption_up"){res.uI(  $caption_id,   {$inc:1}  )}
if ($act == "caption_down"){res.uI(  $caption_id,   {$inc:-1}  )}
if ($act == "site_up"){res.uI(  $site_id, {$inc:1})}
if ($act == "site_down"){res.uI(  $site_id, {$inc:-1})}
