// Importing the dependencies 
import * as model from '../models/contacts.js';
import nodemailer from 'nodemailer';
import { APIResponse } from '../utils/helper.util.js';
import dotenv from 'dotenv';

dotenv.config();

// Service load here if needed
// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    port: process.env.SMTP_SERVICE_PORT,               // true for 465, false for other ports
    host: process.env.SMTP_SERVICE_HOST,
    auth: {
        user: process.env.SMTP_USER_EMAIL,
        pass: process.env.SMTP_USER_PASSWORD,
    },
    secure: true,
});

export async function sendContactMail(req, res, next) {
    try {
        console.log("API Email called")
        const { email, name, subject, message } = req.body;

        var bold = "font-weight : 700"
        var htmlText = "<html lang='en'>" +
            "<head>" +
            "<meta charset='UTF-8' />" +
            "<meta http-equiv='X-UA-Compatible' content='IE=edge' />" +
            "<meta name='viewport' content='width=device-width, initial-scale=1.0' />" +
            "<title>Auto Email</title>" +
            "</head>" +

            "<body>" +
            "<table style='width: 95%; max-width: 950px; margin: auto; color: #202c45;font-family: 'DM Sans', Helvetica, Arial, sans-serif;'>" +
            "<tbody><tr>" +
            "<td style='font-size: 16px;' align='left' valign='top' width='98%'>" +
            "<table style='width: 100%;'>" +

            // <!-- TOP SECTION -->
            "<tr><td>" +
            "<table border='0' cellspacing='0' cellpadding='0' style='width: 100%;'>" +
            "<tr><td>" +
            "<hr style='border-style: solid; border-width: 1px; border-color: #c0c0c0;width: 100%;' /><br />" +
            "</td></tr>" +
            "</table>" +
            "</td></tr>" +

            // <!-- MIDDLE SECTION -->
            "<tr><td>" +
            "<table border='0' cellspacing='0' cellpadding='0' style='width: 100%;line-height: 26px;'>" +
            "<tr><td>" +
            // <!-- MAIN CONTENT -- START -->
            "Doni Putra, Hi you got some message from <br /><br />" +
            "<span style='margin-right : 1.5em'>Name</span> : <span style='" + bold + "'>" + name + " </span><br/> <span style='margin-right : 1.5em'>Email</span> : <span style='" + bold + "'>" + email + "</span><br /><br />" +
            "<p style='white-space: pre-wrap;'>" + message + "</p>" +
            "<a href='https://doniputra.com' style='color: #8f0404; text-decoration: none; font-weight: 500;'>https://doniputra.com</a>" +
            // <!-- MAIN CONTENT -- END -->
            "</td></tr>" +
            "</table>" +
            "</td></tr>" +

            // <!-- BOTTOM SECTION -->
            "<tr><td>" +
            "<table border='0' cellspacing='0' cellpadding='0' style='width: 100%;line-height: 22px;'>" +
            "<br /><hr style='border-style: solid; border-width: 1px; border-color: #c0c0c0;width: 100%;' /><br />" +
            "</td></tr>" +

            "<tr><td>" +
            "<p style='text-align: center; color: #6b6b6b; margin: 0 auto; font-size: 14px;'>© 2023 by Doni Putra. All rights reserved.</p>" +
            "<div style='width: 85px; margin: 0 auto; padding: 10px 0;'>" +
            "<img src='https://doniputra.com/img/logo/dark.png' width='85px' />" +
            "</div>" +
            "</td></tr>" +
            "</table>" +
            "</td></tr>" +

            "</table>" +
            "</td></tr>" +
            "</tbody>" +
            "</table>" +

            "</body>" +
            "</html>"

        const mailData = {
            from: 'Support Center <' + process.env.SMTP_USER_EMAIL + '>',  // sender address
            to: 'doniputrapurbawa@gmail.com',   // list of receivers (but for now it owner email to get notice)
            subject: subject,
            // text: text,
            html: htmlText,
        };

        transporter.sendMail(mailData, function (error, info) {
            if (error) {
                error.type = 'wrong-credential-smtp'
                console.error('Error with SMTP credentials');
                next(error); // throw to custom middleware
            } else {
                // Inserting data to database
                let data = {
                    "name": name,
                    "email": email,
                    "subject": subject,
                    "message": message,
                    "created_at": new Date()
                }
                model.createContact(data).then(result => {
                    console.log("res : ", result);
                    APIResponse(res, "Mail sent and data recorded successfully" + info.messageId, 200, true, result);
                }).catch(err => {
                    console.log("error when create data : ", err)
                    APIResponse(res, "Mail sent, but data is not recorded !" + info.messageId, 200, true, null);
                });
            }
        });
    } catch (err) {
        console.error('Error while trying to send email by SMTP');
        next(err);
    }
}