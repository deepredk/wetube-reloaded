import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log(`Someone is going to: ${req.url}`);
  next();
}

const handleHome = (req, res) => {
  return res.send("<h1>I still love you.</h1>");
}

app.use(gossipMiddleware);
app.get("/", gossipMiddleware, handleHome);

const handleListening = () =>
  console.log(`Server listening on port http:/localhost:${PORT}`);

app.listen(4000, handleListening);

 