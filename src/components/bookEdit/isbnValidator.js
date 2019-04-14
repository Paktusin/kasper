import ISBN from 'isbn-validate';

const isbnValidator = angular.module('isbnValidator', [])
    .directive('isbn', () => ({
        require:'ngModel',
        link:(scope, elm, attrs, ctrl)=>{
            ctrl.$validators.integer = (modelValue, viewValue)=> {
                // console.log(modelValue,viewValue);
                return ctrl.$isEmpty(modelValue) || ISBN.Validate(viewValue);
            }
        }
    }));

export default isbnValidator;