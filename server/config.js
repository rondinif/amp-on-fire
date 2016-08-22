"use strict";

const config = {};

config.db = {};
config.web = {};

// mongo host and database (mongodb version => 2.6 required)
let mongoIp =
  process.env.IP ||
  "localhost";
config.db.url =
  process.env.WEBAPP_MONGODB_URL ||
  `mongodb://${mongoIp}:27017/webapp`;

// nodejs server listening port
config.web.port =
  process.env.PORT ||
  process.env.WEB_PORT ||
  process.env.OPENSHIFT_NODEJS_PORT ||
  8181;

config.web.ip =
  process.env.OPENSHIFT_NODEJS_IP ||
  process.env.IP ||
  "127.0.0.1";

module.exports = config;
