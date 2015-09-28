$_FILES = $_FILES['newPic']; $ms_id = $ms_number = $_GET['ms_id'];
 
if ($act == "site_up"){score++}
if ($act == "site_down"){score--}
if ($act == "topic_up"){Tp.f({tp:$tp}).upd(score++ ) }
if ($act == "topic_down"){Tp.f({tp:$tp}).upd(score-- ) }
if ($act == "ms_up"){Ms.f({ms_id:  $ms_id }).upd( score++  ) }
if ($act == "ms_down"){Ms.f({ms_id:$ms_id }).upd(score--)  }
if ($act == "re_up"){Re.f({re_id:  $re_id} ).upd(  score++ )}
if ($act == "re_down"){Re.f({re_id:  $re_id} ).upd(  score-- )}
if ($act == "pic_up"){Pic.f({pic_id:  $pic_id} ).upd(  score++ )}
if ($act == "pic_down"){Pic.f({pic_id:  $pic_id} ).upd(  score-- )}
if ($act == "caption_up"){Cpt.f({caption_id:  $cpt_id} ).upd(  score++ )}
if ($act == "caption_down"){Cpt.f({caption_id:  $cpt_id} ).upd(  score-- )}
if ($act == "see_also_up"){See.f({see_also_id:  $see_also_id} ).upd(  score++ )}
if ($act == "see_also_down"){See.f({see_also_id  :  $see_also_id} ).upd(  score-- )}

