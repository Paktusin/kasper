/*@ngInject*/
class imageInputCtrl {
    constructor($element, $scope) {
        this.$scope = $scope;
        $($element).find('input').on('change', this.fileChange.bind(this));
    }

    fileChange(event) {
        if (event.target.files.length === 0) return;
        this.getBase64(event.target.files[0]);
    }

    getBase64(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.image = reader.result;
            this.$scope.$apply();
            this.onChange({$value: this.image});
        }
    }

    style() {
        return {
            height: '200px',
            width: '100%',
            backgroundImage: `url(${this.image})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize:'contain'
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
            aria-describedby="inputGroupFileAddon04"
            type="file" accept="image/*">
            <label class="custom-file-label" for="inputGroupFile04">Выберите файл</label>
        </div>
        <div class="input-group-append" ng-if="$ctrl.image">
            <button title="Очистить" class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        </div>
        `,
        controller: imageInputCtrl,
        bindings: {
            onChange: '&',
            image:'<'
        }
    });

export default imageInput;
