import path = require("path");
export = {
    method: 'GET',
    path: '/knockout.js',
    handler: {
        file: path.join(__dirname, "../../../node_modules/knockout/build/output/knockout-latest.js")
    }
};
