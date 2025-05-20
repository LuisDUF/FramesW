// server.js
const express = require('express');
const http = require('http');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const server = http.Server(app);
const port = 5007;

app.set('port',port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
