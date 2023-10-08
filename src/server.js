// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const sendGrid = require("@sendgrid/mail");

// app.use(bodyParser.json());

// // Налаштування SendGrid API Key
// sendGrid.setApiKey("YOUR_SENDGRID_API_KEY");

// // Маршрут для відправлення листів
// app.post("/send-email", (req, res) => {
//   const { to, subject, text } = req.body;

//   const msg = {
//     to,
//     from: "your-email@example.com", // Замініть на вашу власну адресу
//     subject,
//     text,
//   };

//   sendGrid
//     .send(msg)
//     .then(() => {
//       console.log("Email відправлено успішно");
//       res.status(200).json({ message: "Email відправлено успішно" });
//     })
//     .catch((error) => {
//       console.error("Помилка відправлення листа:", error);
//       res.status(500).json({ error: "Помилка відправлення листа" });
//     });
// });

// // Порт, на якому запускається сервер
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Сервер запущено на порту ${PORT}`);
// });
