const express = require("express");
const bodyParser = require("body-parser");
const mailgun = require("mailgun-js");
const app = express();

// Middleware для обработки JSON и URL-кодированных данных
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Настройки для Mailgun
const apiKey = "64a6f5506dd1154f5fa38abbc52e86f1-5465e583-a46ba06e";
const domain = "sandbox9d7737243d654c1d9b310d275403fd8a.mailgun.org";
const mg = mailgun({ apiKey, domain });

// Роут для отправки писем
app.post("/api/send-email", (req, res) => {
  // Данные из вашей формы
  const { to, subject, text } = req.body;

  // Параметры для отправки письма
  const data = {
    from: "Rodindima1984@gmail.com", // Ваш email
    to,
    subject,
    text,
  };

  // Отправка письма через Mailgun API
  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error sending email" });
    } else {
      console.log("Email sent:", body);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

// Запустите сервер
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
