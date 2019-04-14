import DataService from "./dataService";
import storageService from "./storageService";

/* @ngInject */
class BookService extends DataService {
    constructor(storageService, $q) {
        super(storageService, $q);
        this.name = 'book';
        this.model = {
            title: '',
            authors: [],
            pages: 0,
            publisher: null,
            publish_year: null,
            date: null,
            isbn: null,
            image: null,
        };
    }
}

const bookService = angular.module('bookService', [storageService.name])
    .service('bookService', BookService);

export default bookService;