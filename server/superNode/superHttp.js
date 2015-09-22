getPort=function(){return   process.argv[2] || 8888}

modules.exports=function($h){

 $h = $h || $q("http")

 $h.io= function(fn){return $io(this, fn)}

 $h.ls=$h.listen

 $h.s =  $h.Srv=function($a, port, fn){var $h=this
  if(U($a)){return $h.createServer()}
  var srv=  ht.createServer($a)
  if(port){
   fn = fn ||  function(){$l('listening port '+ port)}
   srv.listen(port, fn)
  }
  return srv}

}




// http.createServer(app).listen(app.get('port'),
// function(){
//   console.log("Express server listening on port " + app.get('port'));
// })





//$s.ls= $s.listen
//$s = $h.Server($a)
