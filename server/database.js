"use strict";

const config = require("./config.js");
const logger = require("./logger.js");

let mongoDatabase;

exports.insertFoo = function(doc){
  // return mongoConnect()
  // .then(db => mongoInsert(db, "foo", doc));
};

exports.findFoo = function(filter){
  // return mongoConnect()
  // .then(db => mongoFind(db, "foo", filter));
};
