import {Connection} from './connectionApi'
const nodemailer = require("nodemailer");

export  async function login (data)
{
const db =Connection()
const res = await db.collection('user').findOne({password :data.password,user_email :data.user_email })
console.log("Found docs",res)
return res
}




export async function sendmail() {
   const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'sydney.carter50@ethereal.email',
        pass: 'h6kr7ygQU3mDY53fuM'
    }
});
console.warn("sad",transporter)
const mail = localStorage.getItem('useremail')
 const  mailOptions={
   from :  "sydney.carter50@ethereal.email",
    to : mail,
    subject : "Please confirm your Email account",
    html : "Hello,<br> 12345 is your verification code.<br>" 
}
console.log(mailOptions);
await transporter.sendMail(mailOptions, function(error, response){
 if(error){
        console.log(error);
    
 }else{
        console.log("Message sent: " + response.message);
 }
})
     
}
