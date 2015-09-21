 // The generator mentions in the package .json that our app has a script called ‘start’,
// and also the command for it is “node ./bin/www”.
// If you open /bin/www, it’s just like
// any other node module, but declares that it is a node module using hashbang directive.
// The file also mentions that the app by default shall listen on port 3000.
//

//        We shall create a new route, /upload for handling files,
// include it in our app.
// But a file is not uploaded with the regular content type “text/html”
// of get or “application/x-www-form-urlencoded” of post requests,
// but with “multipart/form-data” for post requests.
//
// Now what this means for us is: the request will be received in parts,
// shall contain binary or non-ASCII data as a stream.
// So either we can write the code for handling each part of the request
// as it is received and process it further to make sense out of it,
// or we can use a library that does all of this for us.


//        Now let’s tell express app to use multer to process requests.


 multer = require('multer')


 $a.use(multer({
     dest: './uploads/'
 }))


//This line goes immediately after the line where we say
// app.use(bodyParser.urlencoded()).
// It tells the app to use multer to process multi-part
// requests and multer to save our files by default to /uploads/ directory.
// There are many other options that multer allows us to pass,
// some are important from a security perspective,
// to block an attacker from uploading huge files and crash the application,
// but for now, we are going to keep it simple.
// But I urge you to read through the documentation and take necessary steps
// before you take this app to production.


// Create a file: uploadPage.jade in folder /views/ and add the following code to it:

// #fileUpload   input#payload(type="file" name="myFile" accept="image/*")


//But how will the user see this page? Let us create a router,
// create a file “uploads.js” in /routes/ directory and the following code to it.
 util = require("util");
 fs = require("fs");

 r = $e.Router();

r.get('/', function(q,p) {
    p.render("uploadPage", {title: "I love files!"});})


r.post("/upload", function(q,p, next){
    if(q.files){//$l(util.inspect(q.files))

        if (q.files.myFile.size === 0) {
            return next(new Error("Hey, first would you select a file?"))
        }
        fs.exists(q.files.myFile.path, function(exists) {
            if(exists) {
                p.end("Got your file!") }
            else { p.end("Well, there is no magic for those who don’t believe in it!") }
        })



    }
})



module.exports = router
////Now we have to tell the app to use this router. In app.js, add the following line in require statements:
//
  uploads = require('./routes/uploads');
//And after route for /users, add:
//
app.use(“/uploads”, uploads)


//Cool, now let’s start the app (npm start) and visit: http://localhost:3000/uploads in the browser. See the upload form? Well, upload a file, what are you waiting for?
//
//    Oh wait, did we create the “/uploads/” directory? Nope!! But don’t worry, the directory shall be created and file uploaded.
//
//    The first, get the method in the router caters to the browser’s request to show the page and paints our uploadPage, with upload form. The action for the upload form is catered to by the next, post method in the router. It checks if the request.files exists. Now, it shall exist even if no file was uploaded, only that it will have some null values. You can see the details in both cases on the console. What if a notorious user just clicked the upload button without actually selecting a file? For that, we check the size, if 0, we have caught them! Now if the file was uploaded, we can check that with the fs.exists() check. Now how you handle either scenario is up to your requirements.


 q.file= {

     fieldname: 'avatar',
     originalname: 'SANY0081.JPG',
     encoding: '7bit',
     mimetype: 'image/jpeg',
     destination: 'public/uploads/',
     filename: '2dc4f8ecd26b1fa6b9b9b944e7aae367',
     path: 'public/uploads/2dc4f8ecd26b1fa6b9b9b944e7aae367',
     size: 1004626

 }