const express = require("express");

const apiRoute = require("./routes/routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/whatsapp",apiRoute);
//901
app.listen(PORT,() => (console.log(`http://127.0.0.1:${PORT}/whatsapp`)))