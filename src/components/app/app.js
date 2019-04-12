import template from './app.html'
import bookList from "../list/bookList";
import mainNav from "../mainNav/mainNav";

const appName = 'app';
const app = angular.module(appName, ['ui.router', bookList.name, mainNav.name])
    .config(/*@ngInject*/($urlRouterProvider) => {
        $urlRouterProvider.otherwise('/list');
    })
    .component(appName, {
        templateUrl: template,
        controller: AppCtrl
    });

/* @ngInject*/
class AppCtrl {
    constructor() {
    }
}

export default app;