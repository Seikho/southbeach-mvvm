export = getEntryFromPayload;

function getEntryFromPayload(): BlogEntry {
    var entry: BlogEntry = {
        id: this.request.payload.id,
        entryDate: this.request.payload.entryDate,
        title: this.request.payload.title,
        content: this.request.payload.content,
        author: this.request.payload.author
    }
    return entry;
}
