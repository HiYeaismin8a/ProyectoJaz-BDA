const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const app = express();
const router = require("./routes/routes")

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router)

app.listen(3000, () => console.log("Servidor en puerto 3000"));
