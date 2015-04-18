import path = require("path");
export = {
    method: 'GET',
    path: '/jquery.js',
    handler: {
        file: path.join(__dirname, "../../../node_modules/jquery/dist/jquery.js")
    }
};
