const express = require('express');
const http = require('http');
const path = require('path');
const nodemailer = require('nodemailer');
const { text } = require('stream/consumers');

const app = express();
const server = http.Server(app);
const port = 5007;

app.set('port',port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.post("/send_email",function (req,response){
  const from = req.body.from;
  const to = 'rogeliogomezvalencia@gmail.com';
  const subject = req.body.subject;
  const message = `Correo enviado por: ${from} \n${req.body.mesage}`;

  const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:'r401.mc@gmail.com',
      pass:'lejnmmbsuchffklp'
    }
  })

  const mailOptions = {
      from:from,
      to:to,
      subject:subject,
      text:message
  }

  transporter.sendMail(mailOptions, function(error,info){
    if (error){
      console.log(error)
    }
    else
    {
      console.log('Email sent '+info.response)
    }
  })
})

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
