"use strict";

const app = require("./../expressApp.js");

app.get("/", function(req, res) {
  res.render("home", {
    title: "Home",
    env: app.get('env')
  });
});
