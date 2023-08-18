const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/calculator", (req, res) => {
  res.sendFile(__dirname + "/calculator.html");
});

app.post("/calculator", (req, res) => {
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

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height) / 100;
  let color;
  let type;
  let bmi = (weight / height ** 2).toFixed(2);

  if (bmi > 18.5 && bmi < 25) {
    color = "green";
    type = "Normal";
  } else if (bmi < 18.5) {
    color = "yellow";
    type = "Underweight";
  } else {
    color = "red";
    type = "Overweight";
  }

  res.send(
    `<h4 style=background-color:${color};>Your BMI is ${bmi}, You are ${type}</h4>`
  );
});

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});
