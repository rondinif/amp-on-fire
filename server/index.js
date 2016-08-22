"use strict";

const path = require("path");
const app = require("./expressApp.js");
const logger = require("./logger.js");
const serveStatic = require("serve-static");
const bodyParser = require("body-parser");

app.use(serveStatic(path.join(__dirname, "../wwwroot") /*, {index: ['index.html']}*/));
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "../client"));
app.set("view engine", "vash");

const config = require("./config.js");

// web routes
require("./controllers/");
// API routes
require("./api/");

const server = app.listen(config.web.port, config.web.ip, function () {
	let host = server.address().address;
	let port = server.address().port;

	logger.log(`server listening at http://${host}:${port} ...`);
});
