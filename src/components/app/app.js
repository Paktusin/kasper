import template from './app.html'
import 'angular-ui-router';

const appName = 'app';
const app = angular
    .module(appName, ['ui.router'])
    .component(appName, {
        templateUrl: template,
        controller: AppCtrl
    });

class AppCtrl {
    constructor() {
        console.log('test')
    }
}

export default app;