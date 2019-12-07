'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword,
    },
});

exports.registerActionRun = functions.https.onRequest((req, res) => {
    const mailOptions = {
        from: "github.fastlane.action@gmail.com",
        to: "maierjonas@live.de",
    };

    mailOptions.subject = "New fastlane action run";
    mailOptions.text = `<ul><li>Runner OS: ${req.body.runnerOS}</li><li>Repository: ${req.body.repository}</li><li>UsesOptions: ${req.body.usesOptions}</li><li>UsesSubdirectory: ${req.body.usesSubdirectory}</li><li>UsesBundleInstallPath: ${req.body.usesBundleInstallPath}</li></ul>`;

    try {
        mailTransport.sendMail(mailOptions);
    } catch(error) {
        console.error('There was an error while sending the email:', error);
    }

    return null;
});
