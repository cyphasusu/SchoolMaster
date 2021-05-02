//Install express server

const cors = require('cors');

const express = require('express');

const path = require('path');




const app = express();

app.use(cors());


// Serve only the static files form the dist directory

//fgg;ejno

app.use(express.static('./dist/rpasaas'));




app.get('/*', function(req,res) {

    

res.sendFile(path.join(__dirname,'/dist/rpasaas/index.html'));

});




// Start the app by listening on the default Heroku port

app.listen(process.env.PORT || 8080);