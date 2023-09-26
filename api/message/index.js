

const express = require('express');
const app = express();

// Enable CORS for all routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});



module.exports = async function (context, req) {

  
        const response = {
            text: "Hello from the API"
        };
        context.res.json(response);

};