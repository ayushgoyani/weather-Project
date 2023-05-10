const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partials_path);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404error", {
    erroemsg: "Oops! Page Not Found",
  });
});

app.listen(3000, () => {
  console.log("serever starting at port 3000 ");
});


// "https://api.openweathermap.org/data/2.5/weather?q=New York&appid=6abb1b3b4cdbcd60a263b7073f7f0251&units=metric"