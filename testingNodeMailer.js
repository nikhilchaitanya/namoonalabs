var nodemailer = require('nodemailer');
  
var mail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nikhilc.freelance@gmail.com',
    pass: 'zddmfhobfeeqlwcu'
  }
});

var mailOptions = {
    from: 'nikhilc.freelance@gmail.com',
    to: 'aravind99.g@gmail.com',
    subject: 'Thank you for registering for 3D Printing Internship',
    html: '<h3>Dear Maker Geek !</h3><p>Thank you for registering for 3D Printing Virtual Internship,</p><p>Your 10-character Registration Key for future reference:</p><p>LKLhhV5NSP</p><p>Please find the details of the internship attached in the 2 PDFs.</p><p></p><p>We will send the course material to your email in a week\'s time.</p><p>With Best Regards, Namoona 3D Labs, Visalakshinagar, Visakhapatnam 530043</p><p>Email: nikhilc.freelance@gmail.com</p><p>https://www.linkedin.com/company/namoonalabs</p>',
   attachments: [{
        filename: '3D Printing Internship.pdf',
        path: 'F:/Imp Docs 2020-2021/Namoona 3D Labs/NVTHUB-master/NVTHUB-master/3D Printing Internship.pdf',
        contentType: 'application/pdf'},
    {
        filename: 'Geeks For Makers - Channel Partners.pdf',
        path: 'F:/Imp Docs 2020-2021/Namoona 3D Labs/NVTHUB-master/NVTHUB-master/Geeks For Makers - Channel Partners.pdf',
        contentType: 'application/pdf'
    }],
    
}

/*
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
*/
  
mail.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
});



