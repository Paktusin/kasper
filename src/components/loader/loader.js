import './loader.scss';

/* @ngInject */
class loaderCtrl {
    constructor() {
        this.load = false;
    }

    $onChanges(change) {
        if (change.load !== undefined) this.load = change.load.currentValue;
    }

    style() {
        return {
            position: this.position || 'absolute',
            backgroundColor: (this.transparent) ? 'transparent' : 'rgba(0,0,0,.3)'
        };
    }
}

const loader = angular.module('loader', [])
    .component('loader', {
        template: `<div class="loader animate-show-hide" ng-show="$ctrl.load" ng-style="$ctrl.style()">
    <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
             aria-valuemin="0" aria-valuemax="100" style="width: 100%">Загрузка
        </div>
    </div>
</div>
`,
        controller: loaderCtrl,
        bindings: {
            load: '<',
            position: '@',
            transparent: '@'
        }
    });

export default loader;
