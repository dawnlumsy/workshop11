//Load express
const express = require("express");

//Create an instance of express application
const app = express();
const staticfolder = __dirname + '/public';

//Request resolution logic - next slide

//Start the web server on port 3000
app.listen(3000,() => {
    console.info("Webserver started on port 3000");
})

//Serve files from public directory
// __dirname is the absolute path of
// the application directory
app.use(express.static(staticfolder));

app.get('*', (req, res, next) => {
    res.sendFile(staticfolder + "/viz.html");
});

//If the requested file is not found, then 
//Use the following function to handle it
app.use((req, res, next) => {
    //Redirect the request to the file not found page
    //Also in public directory
    res.redirect("/error.html");
});
