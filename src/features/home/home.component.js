var homeController = /** @class */ (function () {
    /**@ngInject */
    function homeController() {
    }
    homeController.prototype.$onInit = function () {
        this.welcomeWords = "Welcome text from home component";
    };
    return homeController;
}());
var homeComponent = /** @class */ (function () {
    function homeComponent() {
        this.controller = homeController;
        this.templateUrl = "/src/features/home/home.component.html";
    }
    homeComponent.NAME = "home";
    return homeComponent;
}());
angular.module("app").component(homeComponent.NAME, new homeComponent());
//# sourceMappingURL=home.component.js.map