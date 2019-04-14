import DataService from "./dataService";
import storageService from "./storageService";

/* @ngInject */
class AuthorService extends DataService {
    constructor(storageService, $q) {
        super(storageService, $q);
        this.name = 'author';
        this.model = {
            name: '',
            last_name: '',
        };
    }
}

const authorService = angular.module('authorService', [storageService.name])
    .service('authorService', AuthorService);

export default authorService;