
phpfunctions.php
$topic = trim($_POST['topic']);


//Сheck that we have a file
if((!empty($_FILES["uploaded_file"])) && ($_FILES['uploaded_file']['error'] == 0)) {
  
  
  //Check if the file is JPEG image and it's size is less than 350Kb
  $filename = basename($_FILES['uploaded_file']['name']);
  $ext = substr($filename, strrpos($filename, '.') + 1);
 
 if (($ext == "jpg") && ($_FILES["uploaded_file"]["type"] == "image/jpeg") && 
    ($_FILES["uploaded_file"]["size"] < 100000000000000000000000)) {
		
		
		
		
		$len = 8;
	$base='ABCDEFGHKLMNOPQRSTWXYZ123456789';
$max=strlen($base)-1;
$fileName='';
mt_srand((double)microtime()*1000000);
while (strlen($fileName)<$len+1)$fileName.=$base{mt_rand(0,$max)};	
		
		
		   
		 
		
    //Determine the path to which we want to save this file
      //$newname = dirname(__FILE__).'/upload/'.$filename;
	  //$newname = 'dirtpage/accounts/'.$filename;
        //$newname = 'dirtpage/html/accounts/'.$filename;     
		$newName = '../pictures/'.$fileName.'.jpg';
	
	  
	  
	  //Check if the file with the same name is already exists on the server
      if (!file_exists($newName)) {
      
	  
	  
	    //Attempt to move the uploaded file to it's new place
        if ((move_uploaded_file($_FILES['uploaded_file']['tmp_name'],$newName))) {
			
			
		     new SimpleImage() ->load($newName)   ->resizeToHeight(1000)  ->resizeToWidth(400)   ->save($newName);
   

   
       header ('Location: http://www.dirtpage.com/page/?topic='.$topic);
		   
		   

		  pics.create({ tp:$tp,
		    pic:$fileName,
		     origin:now()
		     })



  postedon.f({tp:$tp}).del()


