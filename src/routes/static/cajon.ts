import path = require("path");
export = {
    method: 'GET',
    path: '/cajon.js',
    handler:{
        file: path.join(__dirname, "../../../node_modules/cajon/cajon.js")
    }
}
