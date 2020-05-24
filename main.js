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



const nodemailer = require('nodemailer')
const moment = require('moment')

const mailer = async (email, nombre) => {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL,
      pass: process.env.PASSWORD_GMAIL
    }
  });

  var mailOptions = {
    from: process.env.GMAIL,
    to: email,
    subject: `MIT `,
    html:`<h1>Correo de confirmación de cuenta</h1>
          <h3>Se registró correctamente, puede empezar a usar su cuenta.</h3>
          <h5>Nombre: ${nombre}</h5>
          <h5>Correo: ${email}</h5>
          <h5>Fecha: ${moment().format('DD-MM-YYYY')}</h5>
          <h5>Hora: ${moment().format('HH:mm:ss')}</h5>
          </br>
          <strong>${12345}</strong>
          </br>
          <h5>Location: PE</h5>
          <p> * Derechos reservados.</p>
          </br>
          </br>
          <h4>Muchas gracias</h4>
          <h4>Copyright</h4>`
  };
  try {
    const result = await transporter.sendMail(mailOptions)
    console.log('result', result)
    return result
  } catch (error) {
    return 500
  }

}
