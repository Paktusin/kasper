/*@ngInject*/
class imageInputCtrl {
    constructor($element, $scope) {
        this.$scope = $scope;
        $($element).find('input').on('change', this.fileChange.bind(this));
        this.reader = new FileReader();
        this.reader.onload = this.updateFile.bind(this)
    }

    updateFile(e) {
        this.$scope.$apply(this.reader);
        this.image = this.reader.result;
        this.$scope.$apply();
        this.onChange({$value: this.image});
    }

    fileChange(event) {
        if (event.target.files.length === 0) return;
        this.reader.readAsDataURL(event.target.files[0]);
    }

    clear() {
        this.image = null;
        this.onChange({$value: this.image});
    }

    style() {
        return {
            height: '200px',
            width: '100%',
            backgroundImage: `url(${this.image})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
        };
    }
}

const imageInput = angular.module('imageInput', [])
    .component('imageInput', {
        template: `
        <div class="card" ng-if="$ctrl.image">
        <div class="card-body">
        <div ng-style="$ctrl.style()" ></div>
        </div>
        </div>
        <div class="input-group">
        <div class="custom-file">
            <input
            class="custom-file-input" 
            id="inputGroupFile04" 
            aria-describedby="inputGroupFile04"
            type="file" accept="image/*">
            <label class="custom-file-label" for="inputGroupFile04">Выберите файл</label>
        </div>
        <div class="input-group-append" ng-if="$ctrl.image">
            <button title="Очистить" ng-click="$ctrl.clear()" class="btn btn-outline-secondary" type="button">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        </div>
        `,
        controller: imageInputCtrl,
        bindings: {
            onChange: '&',
            image: '<'
        }
    });

export default imageInput;
