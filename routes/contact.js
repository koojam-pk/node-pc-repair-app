var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* POST contact page */
router.post('/send', (req, res, next) => {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'lewpk9821@gmail.com',
            pass:''
        }
    });

    var mailOptions = {
        from: '"Pak Kian, Lew" <lewpk9821@gmail.com>',
        to: '',
        subject: 'Hello from PCRepair',
        text: 'Your have a submission from... Name:' + req.body.name + 'Email: ' + req.body.email + 'Message:' + req.body.message,
        html: '<p>Your have a submission from...</p> <ul><li>Name:' + req.body.name + '</li><li>Email: ' + req.body.email + '</li><li>Message:' + req.body.message + '</li></ul>'      
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        } 
        console.log('Message Sent:' + info.response);
        res.redirect('/');
    });
});

module.exports = router;