import templateUrl from './bookEdit.html'
import bookService from "../../services/bookService";

/* @ngInject */
class bookEditCtrl {
    constructor($stateParams, bookService) {
        this.book = null;
        this.isLoading = false;
        this.bookService = bookService;
        this.editId = $stateParams.id ? parseInt($stateParams.id) : null;
    }

    $onInit() {
        if (this.editId) {
            this.bookService.find(this.editId)
                .then(book => {
                    this.book = book;
                })
        }else{
            this.book = this.bookService.new({});
        }
    }

    save(form){
        console.log(form)
    }
}

const bookEdit = angular.module('bookEdit', [])
    .config(($stateProvider) => {
        $stateProvider
            .state('edit', {
                url: '/edit/:id',
                component: 'bookEdit'
            })
            .state('new', {
                url: '/new',
                component: 'bookEdit'
            })
        ;
    })
    .component('bookEdit', {
        templateUrl,
        controller: bookEditCtrl
    })

;


export default bookEdit;