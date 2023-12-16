import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

//Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  service: process.env.SERVICE,
  port: Number(process.env.EMAIL_PORT),
  secure: Boolean(process.env.SECURE),
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },

});


// Function to send an email to the user
const sendUserEmail = async (to, subject, text) => {
  try {
    const userMailOptions = {
      from: process.env.USER,  // Use the website's email address as the sender
      to,
      subject,
      text,
    };
    console.log("Email sent successfully to user");
    console.log(userMailOptions);

    await transporter.sendMail(userMailOptions);
  } catch (error) {
    console.error("Error sending email to user: ", error);
  }
};

// Function to send an email to the site owner
const sendOwnerEmail = async (to, subject, text) => {
  try {
    const ownerMailOptions = {
      from: process.env.USER,  // Use the website's email address as the sender
      to,
      subject,
      text,
    };
    console.log("Email sent successfully to owner");
    console.log(ownerMailOptions);


    await transporter.sendMail(ownerMailOptions);
  } catch (error) {
    console.error("Error sending email to owner: ", error);
  }
};

export { sendUserEmail, sendOwnerEmail };
