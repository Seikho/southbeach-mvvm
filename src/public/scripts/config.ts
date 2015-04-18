declare var require: any;
require.config({
    baseUrl: '../'
});

ko.components.register("ko-menu", {
    viewModel:  () => { },
    template: { require: "text!./components/menu.html" }
});

ko.applyBindings();
