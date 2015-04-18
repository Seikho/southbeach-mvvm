var chalk = require("chalk");
function debug(message) {
    log("DEBUG", message, chalk.blue);
}
exports.debug = debug;
function info(message) {
    log("INFO", message, chalk.green);
}
exports.info = info;
function error(message) {
    log("ERROR", message, chalk.red);
}
exports.error = error;
function log(prefix, message, colour) {
    var time = new Date().toTimeString().slice(0, 8);
    console.log("[%s] %s: %s", time, colour(prefix), message);
}
