import express from "express";

const PORT = 4000;
const app = express();

const urlLogger = (req, res, next) => {
  console.log("PATH:", req.path);
  next();
};

const getFormatDate = (date) => {
  let year = date.getFullYear();
  let month = 1 + date.getMonth();
  month = month >= 10 ? month : "0" + month;

  let day = date.getDate();
  day = day >= 10 ? day : "0" + day;

  return year + "." + month + "." + day;
};

const timeLogger = (req, res, next) => {
  console.log("Time:", getFormatDate(new Date()));
  next();
};

const securityLogger = (req, res, next) => {
  if (req.protocol === "http") {
    console.log("Insecure ❌");
  }
  next();
};

const protector = (req, res, next) => {
  if (req.url === "/protected") {
    return res.end("<h1>Not Allowed</h1>");
  }
  next();
};

const handleHome = (req, res) => {
  return res.send("hello");
}

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge.");
};

app.use(urlLogger, timeLogger, securityLogger, protector);

app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Server listening on port http:/localhost:${PORT}`);

app.listen(4000, handleListening);
