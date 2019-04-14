import template from './bookList.html'
import bookService from '../../services/bookService'
import loader from '../loader/loader'

/* @ngInject*/
class BookListCtrl {
    constructor(bookService, $stateParams) {
        this.books = [];
        this.bookService = bookService;
        this.isLoading = false;
        this.isAdmin = $stateParams.admin;
        this.query = '';
    }

    filteredBooks() {
        return this.books.filter(book => {
            return book.title.toLowerCase().indexOf(book.toLowerCase()) !== -1;
        });
    }

    $onInit() {
        // this.refreshBooks();
    }

    refreshBooks() {
        this.isLoading = true;
        this.bookService.list()
            .then(books => {
                this.isLoading = false;
                this.books = books
            });
    }
}


const bookListName = 'bookList';
const bookList = angular.module(bookListName, [
        bookService.name,
        loader.name
    ]).component(bookListName, {
        templateUrl: template,
        controller: BookListCtrl
    }).config(/* @ngInject*/($stateProvider) => {
        $stateProvider
            .state('list', {
                url: '/',
                component: bookListName
            })
            .state('bookAdmin', {
                url: '/admin/book',
                component: bookListName,
                params: {
                    admin: true
                }
            });
    })
;


export default bookList;