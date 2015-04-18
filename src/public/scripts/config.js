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
ko.applyBindings();
