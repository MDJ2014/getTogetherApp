"use strict";
// load modules
var express = require("express");
var morgan = require("morgan");

var app = require("./app");
var http = require("http");

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(
  process.env.PORT || "5000",
  process.env.IP || "0.0.0.0"
);
app.set("port", port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 * mongodb://heroku_1xj1c0s0:856br3k2u9f8qbgsmaupeensfo@ds229290.mlab.com: 29290/heroku_1xj1c0s0
 */

server.listen(process.env.PORT || "5000", function() {
  console.log("Visit http://letsgettogether:" + port + " in your web browser.");
});

server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  //debug('Listening on ' + bind);
}
