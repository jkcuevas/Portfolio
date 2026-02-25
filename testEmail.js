const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jkcuevas4@gmail.com',  // Your Gmail address
        pass: 'smjt rpvs kvzz xosi'  // Your App Password
    },
    tls: {
        rejectUnauthorized: false  // Disable certificate verification
    }
});

const mailOptions = {
    from: 'cuevasjk5@gmail.com',  // Replace with your email
    to: 'jkcuevas4@gmail.com',    // Replace with your email
    subject: 'Test Email from Nodemailer',
    text: 'This is a test email.'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Email sent:", info.response);
    }
});