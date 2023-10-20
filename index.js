const express = require('express');
const path = require('path');

const app = express();

app.get('*', (req, res) => {
    if (req.url === '/') {
        res.sendFile(__dirname + '/index.html');
    } else if (req.url === '/about') {
        res.sendFile(__dirname + '/about.html');
    } else if (req.url === '/contact-me') {
        res.sendFile(__dirname + '/contact-me.html');
    } else {
        res.sendFile(__dirname + '/404.html');
    };
});



app.listen(3000, (res, error) => {
    console.log('Server is running on port 3000');
});

