const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/", (req, res, next) => {
  fetch("https://api.wazirx.com/api/v2/tickers")
    .then((res) => res.json())
    .then((json) => {
      let data = Object.entries(json);
      let values = [];
      for (let i = 0; i < 10; i++) {
        const [key, value] = data[i];
        values.push(value);
      }
      res.render("home", {
        values: values,
      });
    });
});

module.exports = router;
