var post = require("./post");
var get = require("./get");
var put = require("./put");
var routes = {
    read: get,
    update: post,
    delete: put
};
module.exports = routes;
