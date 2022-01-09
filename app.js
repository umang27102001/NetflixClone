const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;
let home=fs.readFileSync("netflix.html","utf-8")
// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF

 
// ENDPOINTS
app.get('/', (req, res)=>{

    res.status(200).end(home);
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});


