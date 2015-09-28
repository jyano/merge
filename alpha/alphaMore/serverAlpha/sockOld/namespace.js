rq=request = require('request')//HTTP request client
rq.g=rq.get

qs = require('qs')

screen_name = "getrunnable"; // replace with your screenname

output = "<h1>@" + screen_name + "'s friends</h1>"

getFriendsURL = "http://api.twitter.com/1/friends/ids.json?" + qs.stringify( { screen_name: screen_name })


// send request to get list of friends
rq.g( getFriendsURL, function (z,res,friends){var len, getUserDetailsURL
        friends = J.p(friends) // only iterate through at most 5 friends
        len = (friends.ids.length>5)?5:friends.ids.length
    // loop through friends (the first 5 in the list)
    _.t(len, function(i){// set the params to get user details
        getUserDetailsURL = 'https://api.twitter.com/1/users/show.json?'
            +qs.s({user_id: friends.ids[i]}) //send request to get details for each friend
        rq.g(getUserDetailsURL, function(z,res,friend){
                friend = J.p(friend) // create list of friends profile pic
                // and screen name
                output+='<img src="'+friend.profile_image_url+
                    '"title="@'+friend.screen_name+'"/>'
        })})

})


// attach stylesheet to output

$a.u($e.static(__dirname))
output = '<link rel="stylesheet" href="styles.css" />'+output
$a.g('/',function(q,p){p.wH(200, {'Content-Type':'text/html'}).end(output)}).l(80)
$l('http server started on port: '+80) // pre {background-color:rgba(0,0,0,0.2); padding:10px;} // <script src="/socket.io/socket.io.js"></script>

$(function(){
    $pre=$('pre')
    io.connect('/chat').on('a message', function(msg){
        $pre.t('\n'+'from chat:'+J.s(msg),'+')})
    news=io.connect('/news')
    news.on('item', function(item){
        $pre.t('\n'+'from news:'+J.s(item),'+')})
})

//<h1>socket.io: namespaces</h1>
//<pre>..output here..</pre>