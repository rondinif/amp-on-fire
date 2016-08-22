"use strict";

const app = require("./../expressApp.js");
const db = require("./../database.js");

app.get("/api/foo", function(req, res, next) {
  db.findFoo()
  .then(result => res.json(result) )
  .catch(err => next(err) );
});

app.post("/api/foo", function(req, res, next) {
  db.insertFoo(req.body)
  .then(() => res.send("OK"))
  .catch(err => next(err) );
});
