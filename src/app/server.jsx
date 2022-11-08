
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const router = express.Router();


const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, console.log("server runing"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ohadaloni90@gmail.com',
      pass: 'TauOha12/',
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
  