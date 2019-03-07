const nodemailer = require('nodemailer');

var cod = Math.random().toString()

nodemailer.createTestAccount((err, account) => {
    console.log('Procesando ...');
 
    let transporter = nodemailer.createTransport({
        service:"Gmail", 
        auth: {
            user: 'jneirachise@gmail.com', 
            pass: 'password' 
        }
    });
    let x = cod.substring(2,7)

    let mailOptions = {
        from:'jneirachise@gmail.com',
        to:'mailToSend',
        subject: 'Prueba Hoy 1:32 ✔', 
   //   text: 'Hello world?', 
        html: '<h1 style="color:white; background:black; width:auto">Su código de verificación es '+x+' </h1>'  
    };

    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }

        console.log('Message sent: %s', info.messageId);
        console.log('Proceso completado ...');
        console.log('Código de verificación -> ' + x);
        console.log('Enviado !');
       
        // Preview only available when sending through an Ethereal account
        //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});


// https://myaccount.google.com/lesssecureapps?pli=1
// npm i nodemailer --save