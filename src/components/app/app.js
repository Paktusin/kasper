import template from './app.html'
import bookList from "../bookList/bookList";
import mainNav from "../mainNav/mainNav";
import bookEdit from "../bookEdit/bookEdit";

/* @ngInject*/
class AppCtrl {
    constructor() {
    }
}

const appName = 'app';
const app = angular.module(appName, ['ui.router', bookList.name, mainNav.name, bookEdit.name])
    .config(/*@ngInject*/($urlRouterProvider) => {
        $urlRouterProvider.otherwise('/bookList');
    })
    .component(appName, {
        templateUrl: template,
        controller: AppCtrl
    });
export default app;