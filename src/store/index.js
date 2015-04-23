var log = require("../logger");
var init = require("./init");
function initialise() {
    init.hasTable.then(function (exists) {
        if (exists)
            return;
        init.create.then(function () {
            log.info("Created 'blog' table");
        });
    });
}
module.exports = initialise;
