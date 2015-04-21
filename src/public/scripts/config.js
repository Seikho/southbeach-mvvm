require.config({
    baseUrl: '../'
});
ko.components.register("ko-menu", {
    template: { require: "text!./components/menu.html" }
});
ko.components.register("ko-footer", {
    template: { require: "text!./components/footer.html" }
});
ko.components.register("ko-content", {
    template: { require: "text!./components/content.html" }
});
ko.components.register("ko-panel", {
    template: { require: "text!./components/panel.html" }
});
ko.components.register("ko-blog-entry", {
    template: { require: "text!./components/blogEntry.html" }
});
ko.applyBindings();
