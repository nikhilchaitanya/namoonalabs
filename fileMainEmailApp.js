var nodemailer = require('nodemailer');
  
var mail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-gmail-password'
  }
});
  
var mailOptions = {
   from: 'youremail@gmail.com',
   to: 'your-first-email@gmail.com, your-second-email@gmail.com',
   subject: 'Sending Email using Node.js',
   html: '<h1>Welcome</h1><p>That was easy!</p>' ,
   attachments: [{
       filename: 'text1.txt',
       content: 'hello world!'
   }]
}
  
mail.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
});



var mailOptions = {
    from: 'nikhilc.freelance@gmail.com',
    to: 'nikhilc.freelance@gmail.com',
    subject: 'Sending Email using Node js',
    text: 'That was easy!',
    attachments: [{   // utf-8 string as an attachment
              filename: 'text1.txt',
              content: 'hello world!'
          },
          {   // binary buffer as an attachment
              filename: 'text2.txt',
              content: new Buffer('hello world!','utf-8')
          },
          {   // file on disk as an attachment
              filename: 'text3.txt',
              path: '/path/to/file.txt' // stream this file
          },
          {   // filename and content type is derived from path
              path: '/path/to/file.txt'
          },
          {   // stream as an attachment
              filename: 'text4.txt',
              content: fs.createReadStream('file.txt')
          },
          {   // define custom content type for the attachment
              filename: 'text.bin',
              content: 'hello world!',
              contentType: 'text/plain'
          },
          {   // use URL as an attachment
              filename: 'license.txt',
              path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
          },
          {   // encoded string as an attachment
              filename: 'text1.txt',
              content: 'aGVsbG8gd29ybGQh',
              encoding: 'base64'
          },
          {   // data uri as an attachment
              path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
          }
      ]
  }

