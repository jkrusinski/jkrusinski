const nodemailer = require('nodemailer');
const { escape } = require('sanitizer');
const { mail: { host, port, auth } } = require('../../config.js');

const transporter = nodemailer.createTransport({
  host: host,
  port: port,
  secure: true,
  auth: {
    user: auth.username,
    pass: auth.password
  }
});

module.exports = (name, email, message) => {

  name = escape(name);
  email = escape(email);
  message = escape(message);

  return new Promise((fulfill, reject) => {

    transporter.sendMail(
      {
        from: `"${name}" <${email}>`,
        to: 'jkruzr@gmail.com',
        subject: `${name} - Message From Jkrusinski.com`,
        html: `
        <h3>You received a message from "${name}" &lt;${email}&gt;</h3>
        <p>${message}</p>
        `
      },

      (err, info) => {
        if (err) { return reject(err); }
        fulfill(info);
      }
    );
  });

};
