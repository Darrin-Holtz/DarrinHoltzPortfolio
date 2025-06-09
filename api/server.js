// server.js
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { body, validationResult } from 'express-validator'; // Import validation functions
import rateLimit from 'express-rate-limit';
import { filterXSS } from 'xss';

dotenv.config();

const app = express();
const port = 5000;

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message:
    "Too many contact form submissions from this IP, please try again after 15 minutes",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(cors({
    origin: ["http://localhost:5173", "https://darrinholtz.com"], // Make sure this matches your React app's development server URL
}));
app.use(express.json());

// Define the POST route for contact form submission
app.post(
  "/api/contact",
  [
    // --- Backend Validation Rules ---
    // Validate 'name' field
    body('name')
      .trim() // Removes whitespace from both ends of a string
      .notEmpty().withMessage('Name is required') // Ensures the field is not empty
      .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'), // Sets min/max length
    body('hp_email').isEmpty().withMessage('Honeypot field must be empty'), // Check if the field is empty
    // Validate 'email' field
    body('email')
      .trim()
      .notEmpty().withMessage('Email is required')
      .isEmail().withMessage('Invalid email address'), // Checks for valid email format

    // Validate 'message' field
    body('message')
      .trim()
      .notEmpty().withMessage('Message is required')
      .isLength({ min: 10, max: 1000 }).withMessage('Message must be between 10 and 1000 characters'),
    // Optional: Add .escape() to prevent XSS attacks if you were storing this data,
    // but be cautious if you expect HTML in the message itself, as it converts HTML entities.
    // For email content, it's generally fine, but if you want to display the raw message
    // later on a dashboard, be aware. For now, we'll omit it to avoid surprises.
  ],
  async (req, res) => {
    // Check for validation errors from the rules defined above
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // If there are validation errors, send a 400 Bad Request response
      // We send back the array of errors, which includes 'msg' (message) and 'path' (field name)
      return res.status(400).json({ errors: errors.array() });
    }
    
    // If validation passes, destructure the data
    const { name, email, message } = req.body;

    const sanitizedMessage = filterXSS(message);

    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail", // Use your SMTP service (e.g., "Gmail", "Outlook365", etc.)
                           // Or specific host/port for custom SMTP:
                           // host: "smtp.example.com",
                           // port: 587,
                           // secure: false, // Use 'true' for 465, 'false' for 587 with STARTTLS
                           // auth: { user: ..., pass: ... },
                           // tls: { rejectUnauthorized: false } // Use with caution for testing self-signed certs
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER, // The email address that authenticates with SMTP
        replyTo: `"${name}" <${email}>`, // The actual sender's email for replies
        to: process.env.SMTP_USER, // The email address where you want to receive messages
        subject: `New Contact Form Submission from ${name} (${email})`,
        text: sanitizedMessage, // Use sanitized message for plain text
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>` // Use sanitized message for HTML
      });

      res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (err) {
      console.error("Error sending email:", err);
      // More detailed error response for debugging purposes
      res.status(500).json({ error: "Failed to send email.", details: err.message });
    }
  }
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});