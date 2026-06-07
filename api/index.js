


// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import nodemailer from "nodemailer";

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Ironforce Pest Control Backend Server is running");
// });

// // 🚨 1. MAIN CONTACT & JOB SUBMISSION ENQUIRY ENDPOINT
// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, phone, postcode, service, message } = req.body;

//     if (!name || !phone || !postcode || !message || !email) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, email, phone number, postcode and message are required",
//       });
//     }

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       // Brand Name changed to Ironforce Pest Control 👇
//       from: `"Ironforce Pest Control" <${process.env.EMAIL_USER}>`,
//       to: process.env.RECEIVER_EMAIL,
//       replyTo: email,
//       // Subject Prefix updated for clear filter management 👇
//       subject: `[Ironforce Lead] 🚨 New Job: ${service || "Contact Form Submission"}`,
//       html: `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="utf-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>New Job Submission</title>
//           <style>
//             body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
//             table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
//             @media screen and (max-width: 600px) {
//               .email-container { width: 100% !important; max-width: 100% !important; padding: 10px !important; }
//               .content-wrapper { padding: 25px 15px !important; }
//             }
//           </style>
//         </head>
//         <body style="margin: 0; padding: 40px 10px; background-color: #131E29; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
//           <div class="email-container" style="max-width: 500px; margin: 0 auto; background-color: #1c2a38; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5); border: 1px solid rgba(238, 96, 2, 0.2);">
            
//             <div style="background: linear-gradient(135deg, #EE6002 0%, #b84a02 100%); padding: 35px 20px; text-align: center; border-b: 2px solid #ffffff;">
//               <div style="font-size: 36px; margin-bottom: 10px; color: #ffffff;">📩</div>
//               <h1 style="margin: 0; font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: -0.025em; text-transform: uppercase;">New Enquiry<br>Received</h1>
//             </div>

//             <div class="content-wrapper" style="padding: 30px 25px; color: #cbd5e1;">
//               <p style="margin: 0 0 10px 0; font-size: 15px; font-weight: 700; color: #ffffff;">Hello Ironforce Team,</p>
//               <p style="margin: 0 0 25px 0; font-size: 13px; color: #94a3b8;">A new inbound lead has been submitted through the website. Here are the customer details:</p>
              
//               <div style="background-color: #131E29; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(238, 96, 2, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Name</td>
//                     <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right;">${name}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #131E29; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(238, 96, 2, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Email</td>
//                     <td style="color: #EE6002; font-size: 13px; font-weight: 700; text-align: right; word-break: break-all;">
//                       <a href="mailto:${email}" style="color: #EE6002; text-decoration: none;">${email}</a>
//                     </td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #131E29; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(238, 96, 2, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Postcode</td>
//                     <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right; text-transform: uppercase;">${postcode}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #131E29; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(238, 96, 2, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Phone Number</td>
//                     <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right;">
//                       <a href="tel:${phone}" style="color: #ffffff; text-decoration: none;">${phone}</a>
//                     </td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #131E29; padding: 14px 18px; margin-bottom: 24px; border-radius: 6px; border: 1px solid rgba(238, 96, 2, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Requested Service</td>
//                     <td style="color: #EE6002; font-size: 13px; font-weight: 900; text-align: right; text-transform: uppercase;">${service || "Not selected"}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="margin-top: 20px;">
//                 <h4 style="margin: 0 0 10px 0; font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em;">Message Details</h4>
//                 <div style="background-color: #131E29; border: 1px solid rgba(238, 96, 2, 0.15); border-radius: 8px; padding: 16px; font-size: 13px; line-height: 1.6; color: #cbd5e1; font-style: italic;">
//                   "${message}"
//                 </div>
//               </div>

//               <p style="margin: 30px 0 0 0; font-size: 12px; color: #64748b; font-style: italic; text-align: center;">Please review and follow up with this active lead sequence as soon as possible.</p>
//             </div>

//             <div style="padding: 20px; background-color: #131E29; text-align: center; border-top: 1px solid rgba(238, 96, 2, 0.15);">
//               <p style="margin: 0; font-size: 10px; color: #475569;">Automated secure notification system for Ironforce Pest Control.</p>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//     });

//     res.status(200).json({
//       success: true,
//       message: "Message sent successfully",
//     });
//   } catch (error) {
//     console.error("Email Error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Email sending failed",
//     });
//   }
// });

// // 📞 2. QUICK CALLBACK ENDPOINT (HOME PAGE SHORT FORM)
// app.post("/api/callback", async (req, res) => {
//   try {
//     const { name, postcode, phone } = req.body;

//     if (!name || !postcode || !phone) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, postcode, and phone number are required for call back",
//       });
//     }

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: `"Ironforce Pest Control" <${process.env.EMAIL_USER}>`,
//       to: process.env.RECEIVER_EMAIL,
//       subject: `[Ironforce Callback] 📞 Quick Request from ${name}`,
//       html: `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="utf-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Call Back Requested</title>
//           <style>
//             body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
//             table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
//             @media screen and (max-width: 600px) {
//               .email-container { width: 100% !important; max-width: 100% !important; padding: 10px !important; }
//               .content-wrapper { padding: 25px 15px !important; }
//             }
//           </style>
//         </head>
//         <body style="margin: 0; padding: 40px 10px; background-color: #131E29; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
//           <div class="email-container" style="max-width: 500px; margin: 0 auto; background-color: #1c2a38; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5); border: 1px solid rgba(238, 96, 2, 0.2);">
            
//             <div style="background: #1c2a38; padding: 35px 20px; text-align: center; border-b: 2px solid #EE6002;">
//               <div style="font-size: 36px; margin-bottom: 10px; color: #ffffff;">📞</div>
//               <h1 style="margin: 0; font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: -0.025em; text-transform: uppercase;">Call Back<br>Requested</h1>
//             </div>

//             <div class="content-wrapper" style="padding: 30px 25px; color: #cbd5e1;">
//               <p style="margin: 0 0 10px 0; font-size: 15px; font-weight: 700; color: #ffffff;">Hello Ironforce Team,</p>
//               <p style="margin: 0 0 25px 0; font-size: 13px; color: #94a3b8;">A user requested an immediate callback response via the Home Page layout form. Details below:</p>
              
//               <div style="background-color: #131E29; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(238, 96, 2, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Name</td>
//                     <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right;">${name}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #131E29; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(238, 96, 2, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Postcode</td>
//                     <td style="color: #ffffff; font-size: 13px; font-weight: 700; text-align: right; text-transform: uppercase;">${postcode}</td>
//                   </tr>
//                 </table>
//               </div>

//               <div style="background-color: #131E29; padding: 14px 18px; margin-bottom: 10px; border-radius: 6px; border: 1px solid rgba(238, 96, 2, 0.15);">
//                 <table style="width: 100%; border-collapse: collapse;">
//                   <tr>
//                     <td style="color: #94a3b8; font-size: 13px; font-weight: 500; width: 35%;">Phone Number</td>
//                     <td style="color: #EE6002; font-size: 13px; font-weight: 700; text-align: right;">
//                       <a href="tel:${phone}" style="color: #EE6002; text-decoration: none;">${phone}</a>
//                     </td>
//                   </tr>
//                 </table>
//               </div>
              
//               <p style="margin: 30px 0 0 0; font-size: 12px; color: #64748b; font-style: italic; text-align: center;">Please respond to this urgent hot lead layout verification within 1 hour.</p>
//             </div>

//             <div style="padding: 15px; background-color: #131E29; text-align: center; border-top: 1px solid rgba(238, 96, 2, 0.15);">
//               <p style="margin: 0; font-size: 10px; color: #475569;">Automated lead routing framework for Ironforce Pest Control.</p>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//     });

//     res.status(200).json({ success: true, message: "Call back request sent successfully!" });
//   } catch (error) {
//     console.error("Callback Email Error:", error);
//     res.status(500).json({ success: false, message: "Email sending failed" });
//   }
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// export default app;




import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("PesSave Services Backend Server is running");
});

const BRAND_NAME = "PesSave Services";
const BRAND_BROWN = "#5C4033";
const BRAND_YELLOW = "#F2C12E";
const BRAND_CREAM = "#FDFBF7";
const BRAND_DARK = "#3F2C24";

// MAIN CONTACT FORM
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, postcode, service, message } = req.body;

    if (!name || !phone || !postcode || !message || !email) {
      return res.status(400).json({
        success: false,
        message: "Name, email, phone number, postcode and message are required",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${BRAND_NAME}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `[PesSave Lead] 🚨 New Job: ${service || "Contact Form Submission"}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New PesSave Enquiry</title>
        </head>

        <body style="margin:0; padding:40px 10px; background-color:${BRAND_CREAM}; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
          <div style="max-width:520px; margin:0 auto; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 12px 30px rgba(92,64,51,0.18); border:1px solid rgba(92,64,51,0.15);">
            
            <div style="background:linear-gradient(135deg, ${BRAND_BROWN} 0%, ${BRAND_DARK} 100%); padding:36px 22px; text-align:center; border-bottom:4px solid ${BRAND_YELLOW};">
              <div style="font-size:38px; margin-bottom:10px;">📩</div>
              <h1 style="margin:0; font-size:23px; font-weight:900; color:#ffffff; text-transform:uppercase; letter-spacing:-0.03em;">
                New Enquiry<br/>Received
              </h1>
              <p style="margin:10px 0 0; color:${BRAND_YELLOW}; font-size:12px; font-weight:800; text-transform:uppercase; letter-spacing:0.12em;">
                PesSave Services
              </p>
            </div>

            <div style="padding:30px 25px; color:#3f3f46;">
              <p style="margin:0 0 10px; font-size:15px; font-weight:800; color:${BRAND_BROWN};">
                Hello PesSave Team,
              </p>

              <p style="margin:0 0 25px; font-size:13px; color:#71717a; line-height:1.6;">
                A new customer enquiry has been submitted through the website. Customer details are below:
              </p>

              ${[
                ["Name", name, "#111827"],
                ["Email", `<a href="mailto:${email}" style="color:${BRAND_BROWN}; text-decoration:none;">${email}</a>`, BRAND_BROWN],
                ["Postcode", postcode, "#111827"],
                ["Phone Number", `<a href="tel:${phone}" style="color:#111827; text-decoration:none;">${phone}</a>`, "#111827"],
                ["Requested Service", service || "Not selected", BRAND_YELLOW],
              ]
                .map(
                  ([label, value, color]) => `
                    <div style="background-color:${BRAND_CREAM}; padding:14px 18px; margin-bottom:10px; border-radius:8px; border:1px solid rgba(92,64,51,0.12);">
                      <table style="width:100%; border-collapse:collapse;">
                        <tr>
                          <td style="color:#71717a; font-size:13px; font-weight:600; width:38%;">${label}</td>
                          <td style="color:${color}; font-size:13px; font-weight:800; text-align:right; word-break:break-word;">${value}</td>
                        </tr>
                      </table>
                    </div>
                  `
                )
                .join("")}

              <div style="margin-top:20px;">
                <h4 style="margin:0 0 10px; font-size:11px; font-weight:800; color:${BRAND_BROWN}; text-transform:uppercase; letter-spacing:0.08em;">
                  Message Details
                </h4>

                <div style="background-color:${BRAND_CREAM}; border:1px solid rgba(92,64,51,0.12); border-radius:10px; padding:16px; font-size:13px; line-height:1.7; color:#3f3f46; font-style:italic;">
                  "${message}"
                </div>
              </div>

              <p style="margin:30px 0 0; font-size:12px; color:#71717a; font-style:italic; text-align:center;">
                Please review and follow up with this lead as soon as possible.
              </p>
            </div>

            <div style="padding:18px; background-color:${BRAND_BROWN}; text-align:center; border-top:1px solid rgba(242,193,46,0.25);">
              <p style="margin:0; font-size:10px; color:#ffffff;">
                Automated secure notification system for PesSave Services.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
});

// QUICK CALLBACK FORM
app.post("/api/callback", async (req, res) => {
  try {
    const { name, postcode, phone } = req.body;

    if (!name || !postcode || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, postcode, and phone number are required for call back",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${BRAND_NAME}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `[PesSave Callback] 📞 Quick Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Callback Request</title>
        </head>

        <body style="margin:0; padding:40px 10px; background-color:${BRAND_CREAM}; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
          <div style="max-width:520px; margin:0 auto; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 12px 30px rgba(92,64,51,0.18); border:1px solid rgba(92,64,51,0.15);">
            
            <div style="background:linear-gradient(135deg, ${BRAND_BROWN} 0%, ${BRAND_DARK} 100%); padding:36px 22px; text-align:center; border-bottom:4px solid ${BRAND_YELLOW};">
              <div style="font-size:38px; margin-bottom:10px;">📞</div>
              <h1 style="margin:0; font-size:23px; font-weight:900; color:#ffffff; text-transform:uppercase; letter-spacing:-0.03em;">
                Call Back<br/>Requested
              </h1>
              <p style="margin:10px 0 0; color:${BRAND_YELLOW}; font-size:12px; font-weight:800; text-transform:uppercase; letter-spacing:0.12em;">
                PesSave Services
              </p>
            </div>

            <div style="padding:30px 25px; color:#3f3f46;">
              <p style="margin:0 0 10px; font-size:15px; font-weight:800; color:${BRAND_BROWN};">
                Hello PesSave Team,
              </p>

              <p style="margin:0 0 25px; font-size:13px; color:#71717a; line-height:1.6;">
                A user requested an immediate callback through the website. Details below:
              </p>

              ${[
                ["Name", name],
                ["Postcode", postcode],
                ["Phone Number", `<a href="tel:${phone}" style="color:${BRAND_BROWN}; text-decoration:none;">${phone}</a>`],
              ]
                .map(
                  ([label, value]) => `
                    <div style="background-color:${BRAND_CREAM}; padding:14px 18px; margin-bottom:10px; border-radius:8px; border:1px solid rgba(92,64,51,0.12);">
                      <table style="width:100%; border-collapse:collapse;">
                        <tr>
                          <td style="color:#71717a; font-size:13px; font-weight:600; width:38%;">${label}</td>
                          <td style="color:#111827; font-size:13px; font-weight:800; text-align:right; word-break:break-word;">${value}</td>
                        </tr>
                      </table>
                    </div>
                  `
                )
                .join("")}

              <p style="margin:30px 0 0; font-size:12px; color:#71717a; font-style:italic; text-align:center;">
                Please respond to this callback request as soon as possible.
              </p>
            </div>

            <div style="padding:18px; background-color:${BRAND_BROWN}; text-align:center; border-top:1px solid rgba(242,193,46,0.25);">
              <p style="margin:0; font-size:10px; color:#ffffff;">
                Automated lead routing system for PesSave Services.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Call back request sent successfully!",
    });
  } catch (error) {
    console.error("Callback Email Error:", error);
    res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
});

const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`PesSave Services server running on port ${PORT}`);
// });

export default app;