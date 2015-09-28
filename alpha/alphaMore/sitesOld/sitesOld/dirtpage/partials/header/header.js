function $go(a){location.href = 'http://www.dirtpage.com/'+a}
function goer(feed, viewer){viewer= viewer || feed
    $('a[href*="'+ feed +'"]').oML(function(){$go(viewer)})}


header()

$('a[href*="feed"]').oML(function(){$go('feedviewer')})
$('a[href*="about"]').oML(function(){$go('about')})
$('a[href*="random"]').oML(function(){$go('random')})
$('a[href*="busy"]').oML(function(){$go('busy')})
goer('ratings')
goer('feat')

$('.pw').hd()
$('.admin').oME(function(){$(this).f('.pw').sh();dc.form.pw.v=""})
//j=$(dc.admin.pw.v).t()
$('.admin').oML(function(){$('.pw').h()
    $.po(dP+ 'session.php',{pw: dc.form.pw.v},
        function(d){$('#admin').h(d)})})



////





        /*
         header();


         $('a[href*="feed"]').mouseleave(function(){location.href = 'http://www.dirtpage.com/feedviewer'});
         $('a[href*="about"]').mouseleave(function(){location.href = 'http://www.dirtpage.com/nav/about'});

         $('a[href*="random"]').mouseleave(function(){location.href = 'http://www.dirtpage.com/nav/random'});
         $('a[href*="busy"]').mouseleave(function(){location.href = 'http://www.dirtpage.com/nav/busy'});
         $('a[href*="ratings"]').mouseleave(function(){location.href = 'http://www.dirtpage.com/nav/ratings'});
         $('a[href*="feat"]').mouseleave(function(){location.href = 'http://www.dirtpage.com/nav/featured'});
         */
    $('.password').hide();

$('.admin').mouseenter(function(){ $(this).find('.password').show();document.form.password.value=""});
j=$('document.admin.password.password.value').text();
$('.admin').mouseleave(function(){    $('.password').hide();

    $.post("http://www.dirtpage.com/session.php", {password: document.form.password.value},  function(data) {$('#admin').html(data);});
});



////

header();


$('a[href*="feed"]').mouseleave(function(){location.href = 'http://www.dirtpage.com/feedviewer'});
$('a[href*="about"]').mouseleave(function(){location.href = 'http://www.dirtpage.com/nav/about'});

$('a[href*="random"]').mouseleave(function(){location.href = 'http://www.dirtpage.com/nav/random'});
$('a[href*="busy"]').mouseleave(function(){location.href = 'http://www.dirtpage.com/nav/busy'});
$('a[href*="ratings"]').mouseleave(function(){location.href = 'http://www.dirtpage.com/nav/ratings'});
$('a[href*="feat"]').mouseleave(function(){location.href = 'http://www.dirtpage.com/nav/featured'});
*/
$('.password').hide();

$('.admin').mouseenter(function(){ $(this).find('.password').show();document.form.password.value=""});
j=$('document.admin.password.password.value').text();
$('.admin').mouseleave(function(){    $('.password').hide();

    $.post("http://www.dirtpage.com/session.php", {password: document.form.password.value},  function(data) {$('#admin').html(data);});
});
