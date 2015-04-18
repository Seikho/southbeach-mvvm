var path = require("path");
module.exports = {
    method: 'GET',
    path: '/bootstrap/{param*}',
    handler: {
        directory: {
            path: path.join(__dirname, "../../../node_modules/bootstrap/dist/")
        }
    }
};
