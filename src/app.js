const { error } = require("console");
const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const port = process.env.PORT || 8000;
const _path = path.join(__dirname, "../public");
const _path_view = path.join(__dirname, "../components/views");
const _path_view_partials = path.join(
  __dirname,
  "../components/views/partials"
);
// // console.log(_path_view);
/* date */
var mL = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const daysInWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d = new Date();
const day = d.getDay();
const date = d.getDate();
const month = d.getMonth();
const month_data = mL[month];
const day_data = daysInWeek[day];
hbs.registerPartials(_path_view_partials);
app.set("view engine", "hbs");
app.set("views", _path_view);
app.use(express.static(_path));
app.get("/", (req, res) => {
  res.render("index");
  // res.send("hey from node.js");
});
app.get("/about", (req, res) => {
  res.render("about");
  // res.send("hey from about");
});
app.get("/weather", (req, res) => {
  res.render("weather", {
    day_val: day_data,
    month_val: `${date} ${month_data}`,
  });
  // res.send("hey from about");
});
app.get("*", (req, res) => {
  res.render("error");
});

app.listen(port, () => {
  console.log("running...");
});
