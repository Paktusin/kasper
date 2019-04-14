import './css/main.scss'
import app from './components/app/app'
import errorCatcher from "./components/errorCatcher";
import propsFilter from "./components/propsFilter";

$(() => {
    angular.bootstrap(document, [app.name, errorCatcher.name, propsFilter.name])
});