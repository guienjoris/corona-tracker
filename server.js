const express = require('express')
const app = express()
var cors = require('cors');
const path = require('path');

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/dist/Corona-Tracker'));
app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/Corona-Tracker/index.html'));
    });
app.listen(process.env.PORT || 8080)
