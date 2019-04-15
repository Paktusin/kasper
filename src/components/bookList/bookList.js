import template from './bookList.html'
import bookService from '../../services/bookService'
import storageService from '../../services/storageService'
import loader from '../loader/loader'

/* @ngInject*/
class BookListCtrl {
    constructor(bookService, $stateParams, storageService) {
        this.books = [];
        this.bookService = bookService;
        this.isLoading = false;
        this.isAdmin = $stateParams.admin;
        this.query = '';
        this.storageService = storageService;
        this.order = this.storageService.get('order') || {field: 'title', asc: 1};
    }

    setOrder(newOrder) {
        this.order = newOrder;
        this.storageService.put('order', this.order);
    }

    filteredBooks() {
        return this.books.filter(book => {
            return this.query.length === 0 || book.title.toLowerCase().indexOf(this.query.toLowerCase()) !== -1;
        }).sort((bookA, bookB) => {
            return bookA[this.order.field] < bookB[this.order.field] ? (this.order.asc ? -1 : 1) : (this.order.asc ? 1 : -1);
        });
    }

    $onInit() {
        this.refreshBooks();
    }

    remove(book) {
        this.bookService.remove(book).then(books => {
            this.books = books;
        })
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
        storageService.name,
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