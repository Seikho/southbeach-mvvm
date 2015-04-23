var getEntryFromPayload = require("./getEntryFromPayload");
var db = require("../../store/db");
var route = {
    method: "PUT",
    path: "/blog",
    handler: function (request, reply) {
        var entry = getEntryFromPayload();
        if (!isValidEntry(entry))
            reply({ errorCode: "404" });
        insertEntry(entry).then(function (newId) {
            reply(newId > 0
                ? newId
                : { errorCode: "500" });
        });
    }
};
function isValidEntry(entry) {
    return (!!entry.entryDate && !!entry.title && entry.content && entry.author);
}
function insertEntry(entry) {
    return db("blog").insert(entry);
}
module.exports = route;
