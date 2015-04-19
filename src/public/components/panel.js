var Panel = (function () {
    function Panel(heading) {
        this.heading = ko.observable("");
        this.heading(heading);
    }
    return Panel;
})();
