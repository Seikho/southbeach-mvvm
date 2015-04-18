require.config({
    baseUrl: '../'
});
ko.components.register("ko-menu", {
    viewModel: function () { },
    template: { require: "text!./components/menu.html" }
});
ko.applyBindings();
