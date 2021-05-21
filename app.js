const express = require("express");
const app = express();
const path = require("path");
const mainRoute = require("./routes/home");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoute);

app.listen(3000, () => {
  console.log(`server started at 3000`);
});
