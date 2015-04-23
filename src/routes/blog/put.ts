import hapi = require("hapi");
import getEntryFromPayload = require("./getEntryFromPayload");
import db = require("../../store/db");

export = route;
var route = {
    method: "PUT",
    path: "/blog",
    handler: (request: hapi.Request, reply) => {
        var entry = getEntryFromPayload();
        if (!isValidEntry(entry)) reply({ errorCode: "404" });

        insertEntry(entry).then(newId => {

            reply(newId > 0
                ? newId
                : { errorCode: "500" });
        });
    }
}

function isValidEntry(entry: BlogEntry) {
    // Must have all fields populated to be valid
    return (!!entry.entryDate && !!entry.title && entry.content && entry.author);
}

function insertEntry(entry: BlogEntry) {
    return db("blog").insert(entry);
}
