const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);

  let result = num1 + num2;

  if (req.body.type === "sub") {
    result = num1 - num2;
  } else if (req.body.type === "mul") {
    result = num1 * num2;
  } else if (req.body.type === "div") {
    result = (num1 / num2).toFixed(2);
  } else {
    result = num1 + num2;
  }

  res.send("The result is " + result);
});

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});
