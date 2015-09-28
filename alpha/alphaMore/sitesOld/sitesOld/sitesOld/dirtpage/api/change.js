

/*

if ($change == "up"){  rank= rank+1  WHERE `id` = '".$msNumber."'") }
    if ($change == "down"){  rank= rank-1  WHERE `id` = '".$msNumber."'") }
        if ($change == "up"){ rank= rank+1  WHERE `id` = '".$msNumber."'") }
            if ($change == "down"){  rank= rank-1  WHERE `id` = '".$msNumber."'") }

                if ($act == "postms"){
                    echo "can you read this?";
                    mysql_query(
                        "INSERT INTO messages (topic_id, ms, user, ip, origin, topic) VALUES('', '$newMessage','','', curdate(), '$topic')"
                    )
                }
                if ($act == "post_see_also"){

                    mysql_query(
                        "INSERT INTO see_also (topic_id, see_also, topic) VALUES('', '$newMessage', '$topic') "
                    )

                }
                if ($act == "post_caption"){
//$query = "SELECT * FROM captions WHERE pic = '$topic' and caption = '$newMessage'";
//$result = mysql_query($query)
//$num_results = mysql_num_rows($result);
//if ($newMessage != ""){
//if ($num_results < 1){
                    mysql_query("INSERT INTO captions (picture, caption, origin) VALUES('$picture', '$new_caption',curdate()) ")

                }
                if ($act == "post_re"){
//$query = "SELECT * FROM captions WHERE pic = '$topic' and caption = '$newMessage'";
//$result = mysql_query($query)
//$num_results = mysql_num_rows($result);
//if ($newMessage != ""){
//if ($num_results < 1){
                    mysql_query("INSERT INTO res (ms_id, re, origin) VALUES('$ms_id', '$new_re',curdate()) ")
                }
                if ($act == "create_topic"){
                    topics.create({tp:$tp, user:$user, ip:$ip, origin: curdate()})
                    header( 'Location: page.php?topic='.$topic );
                }
                if ($act == "delMs"){ pics.f({id: $msNumber }).del()}

    */