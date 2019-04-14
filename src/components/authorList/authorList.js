import templateUrl from './authorList.html'
import authorService from '../../services/authorService'

/* @ngInject */
class authorListCtrl {
    constructor(authorService) {
        this.isLoading = false;
        this.authorService = authorService;
        this.authors = [];
    }

    $onInit() {
        this.refreshAuthors();
    }

    remove(author) {
        this.isLoading = true;
        this.authorService.remove(author)
            .then(authors => {
                this.authors = authors;
            })
            .catch(_ => {
            })
            .finally(_ => {
                this.isLoading = false;
            });
    }

    refreshAuthors() {
        this.isLoading = true;
        this.authorService.list().then(authors => {
            this.authors = authors;
            this.isLoading = false;
        })
    }

}

const authorEdit = angular.module('authorList', [authorService.name])
    .config(($stateProvider) => {
        $stateProvider
            .state('authorAdmin', {
                url: '/admin/author',
                component: 'authorList'
            })
        ;
    })
    .component('authorList', {
        templateUrl,
        controller: authorListCtrl
    })
;


export default authorEdit;