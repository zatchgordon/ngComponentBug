class homeController implements ng.IController {
    welcomeWords: string;
    /**@ngInject */
    constructor() {

    }

    $onInit() {
        this.welcomeWords = "Welcome text from home component";
    }
}

class homeComponent implements ng.IComponentOptions {
    static NAME: string = "home";
    controller: ng.Injectable<ng.IControllerConstructor> = homeController;
    templateUrl: string = "/src/features/home/home.component.html";
}

angular.module("app").component(homeComponent.NAME, new homeComponent());