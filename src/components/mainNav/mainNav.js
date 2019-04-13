import templateUrl from './mainNav.html';

const mainNav = angular.module('mainNav', [])
    .component('mainNav', {
        templateUrl,
        controller: () => {
        }
    }
);

export default mainNav;