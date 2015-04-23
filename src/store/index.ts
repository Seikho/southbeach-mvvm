import log = require("../logger");
import init = require("./init");
export = initialise;

function initialise() {
    init.hasTable.then(exists => {
        if (exists) return;
        init.create.then(() => {
            log.info("Created 'blog' table");
        });
    });
}
