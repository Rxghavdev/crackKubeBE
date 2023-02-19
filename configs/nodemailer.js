const nodemailer = require("nodemailer");
const config = require(".env");

const user = config.user;
const pass = config.pass;

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});
module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
    console.log("Check");
    transport.sendMail({
      from: user,
      to: email,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
          <h2>Hello ${name}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href=http://localhost:3000/confirm/${confirmationCode}> Click here</a>
          </div>`,
    }).catch(err => console.log(err));
  };
  //to send the confirmation email after a new user’s creation
  user.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
           return;
        }
       res.send({
           message:
             "User was registered successfully! Please check your email",
        });

      nodemailer.sendConfirmationEmail(
         user.username,
         user.email,
         user.confirmationCode
  );
});