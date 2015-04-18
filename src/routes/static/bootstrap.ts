import path = require("path");
import Hapi = require("hapi");
export = {
    method: 'GET',
    path: '/bootstrap/{param*}',
    handler: {
        directory:{
            path: path.join(__dirname, "../../../node_modules/bootstrap/dist/")
        }
    }
}
