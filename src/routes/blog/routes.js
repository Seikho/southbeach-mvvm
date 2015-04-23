var post = require("./post");
var get = require("./get");
var put = require("./put");
var routes = {
    get: get,
    post: post,
    put: put
};
module.exports = routes;
