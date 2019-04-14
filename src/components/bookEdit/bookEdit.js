import templateUrl from './bookEdit.html'
import isbnValidator from './isbnValidator';
import uiSelect from 'ui-select';
import bookService from "../../services/bookService";
import authorService from "../../services/authorService";
import imageInput from "../../components/imageInput";

/* @ngInject */
class bookEditCtrl {
    constructor($stateParams, bookService, authorService, $state) {
        this.book = null;
        this.isLoading = false;
        this.bookService = bookService;
        this.authorService = authorService;
        this.editId = $stateParams.id ? parseInt($stateParams.id) : null;
        this.authors = [];
        this.$state = $state;
    }

    imageChange(image) {
        this.book.image = image;
    }

    $onInit() {
        if (this.editId) {
            this.bookService.find(this.editId)
                .then(book => {
                    this.book = book;
                })
        } else {
            this.bookService.new().then(book => {
                this.book = book;
            });
        }
        this.authorService.list().then(authors => {
            this.authors = authors;
        });
    }

    save() {
        this.bookService[this.editId ? 'update' : 'add'](this.book).then(_ => {
            this.$state.go('bookAdmin');
        })
    }

    valid(form) {
        return this.book.authors.length > 0 && form.$valid;
    }
}

const bookEdit = angular.module('bookEdit', [isbnValidator.name, uiSelect, bookService.name, authorService.name, imageInput.name])
    .config(($stateProvider) => {
        $stateProvider
            .state('bookEdit', {
                url: '/book/edit/:id',
                component: 'bookEdit'
            })
            .state('bookNew', {
                url: '/book/new',
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