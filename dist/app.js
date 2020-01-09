var Component = /** @class */ (function () {
    function Component() {
        this.render = function () {
        };
    }
    return Component;
}());
var ModuleList = /** @class */ (function () {
    function ModuleList(title) {
        this.listOfModules = [];
        this.render = function () {
        };
        this.title = title;
    }
    return ModuleList;
}());
var Module = /** @class */ (function () {
    function Module(id, title, description, link) {
        var _this = this;
        this.config = function () {
        };
        this.render = function () {
            var title = document.createElement('h1');
            title.textContent = _this.title;
            var app = document.getElementById('app');
            app.append(title);
        };
        this.id = id;
        this.title = title;
        this.description = description;
        this.link = link;
        this.render();
    }
    return Module;
}());
var init = function () {
    console.log("Hello");
    var basicModule = new Module('1', 'My Basic Module', 'desc here', 'some link');
    ;
};
init();
