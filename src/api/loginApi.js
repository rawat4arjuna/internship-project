import {Connection} from './connectionApi'
const nodemailer = require("nodemailer");

export  async function login (data)
{
const db =Connection()
const res = await db.collection('user').findOne({password :data.password,user_email :data.user_email })
console.log("Found docs",res)
return res
}



// async..await is not allowed in global scope, must use a wrapper
export async function sendmail() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "arjunsinghrawatmca18@gmail.com",
        pass: "09007801"
    }
    
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    to: "rawat4arjuna@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
