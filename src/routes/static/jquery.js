var path = require("path");
module.exports = {
    method: 'GET',
    path: '/jquery.js',
    handler: {
        file: path.join(__dirname, "../../../node_modules/jquery/dist/jquery.js")
    }
};
