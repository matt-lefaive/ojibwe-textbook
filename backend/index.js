const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(express.static('build'));

app.get('*', (req, res) => {                       
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));                               
});

const server = app.listen(process.env.PORT || 8081, () => {
    const port = server.address().port;
    console.log('App started at port:', port);
})