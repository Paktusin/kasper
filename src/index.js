import './css/main.scss'
import app from './components/app/app'
import errorCatcher from "./components/errorCatcher";

$(() => {
    angular.bootstrap(document, [app.name, errorCatcher.name])
});