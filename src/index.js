import './css/main.scss'
import 'angular';
import app from './components/app/app'

$(()=>{
    angular.bootstrap(document,[app.name])
});