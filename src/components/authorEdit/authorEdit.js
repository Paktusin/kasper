import templateUrl from './authorEdit.html'
import authorService from '../../services/authorService'

/* @ngInject */
class AuthorEditCtrl {
    constructor(authorService, $stateParams, $state) {
        this.isLoading = false;
        this.authorService = authorService;
        this.editId = $stateParams.id ? parseInt($stateParams.id) : null;
        this.author = null;
        this.$state = $state;
    }

    $onInit() {
        this.isLoading = true;
        if (this.editId) {
            this.authorService.find(this.editId)
                .then(author => {
                    this.author = author;
                    this.isLoading = false;
                })
        } else {
            this.authorService.new().then(author => {
                this.author = author;
                this.isLoading = false;
            });
        }
    }

    save() {
        this.isLoading = true;
        this.authorService[this.editId ? 'update' : 'add'](this.author)
            .then(_ => {
                this.$state.go('authorAdmin')
            });
    }
}

const authorEdit = angular.module('authorEdit', [authorService.name])
    .config(($stateProvider) => {
        $stateProvider
            .state('authorEdit', {
                url: '/author/edit/:id',
                component: 'authorEdit'
            })
            .state('authorNew', {
                url: '/author/new',
                component: 'authorEdit'
            })
        ;
    })
    .component('authorEdit', {
        templateUrl,
        controller: AuthorEditCtrl
    })
;


export default authorEdit;