import chalk = require("chalk");
export function debug(message: string) {
    log("DEBUG", message, chalk.blue);
}

export function info(message: string) {
    log("INFO", message, chalk.green);
}

export function error(message: string) {
    log("ERROR", message, chalk.red);
}

function log(prefix: string, message: string, colour: Chalk.ChalkChain): void {
    var time = new Date().toTimeString().slice(0,8);
    console.log("[%s] %s: %s", time, colour(prefix), message);
}
