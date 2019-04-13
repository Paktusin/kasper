import storageService from "./storageService";
import ValidError from "../common/ValidError";

const BOOKS = 'books';

/* @ngInject */
class BookService {
    constructor(storageService, $q) {
        this.storageService = storageService;
        this.$q = $q;
    }

    getList() {
        return this.$q(resolve => setTimeout(() => resolve(this.storageService.get(BOOKS) || []), 500))
    }

    add(book) {
        return this.$q((resolve, reject) => {
            this.getList().then((books) => {
                this.save([...books, book]);
                resolve([...books, book]);
            });
        });
    }

    save(books) {
        this.storageService.put(BOOKS, books);
    }

    update(book) {
        return this.$q((resolve) => {
            this.getList().then((books) => {
                books[books.findIndex(f_book => f_book.id === book.id)] = book;
                this.save([...books]);
                resolve([...books]);
            });
        });
    }

    new({id = 0, title = '', authors = [], pages = 0, publisher = '', publish_year = null, date = null, isbn = null, image = null}) {
        return {
            id,
            title,
            authors,
            pages,
            publisher,
            publish_year,
            date,
            isbn,
            image,
        }
    }

    find(id) {
        return this.$q(resolve => {
            this.getList().then(books=>{
                const book = books.find(book => book.id === id);
                if (!book) throw Error('Book not found');
                resolve(book);
            });
        });
    }

    valid(book) {
        if (!book.title || book.title.trim().length === 0) throw ValidError('заполните заголовок', 'title');
        if (book.title.length > 30) throw ValidError('заголовок не более 30 символов', 'title');
        if (book.authors.length === 0) throw ValidError('книга должна содержать хотя бы одного автора', 'authors');
        if (!(book.pages > 0 && book.pages <= 10000)) throw ValidError('количество страниц должно быть больше 0 и не более 10000', 'pages');
        if (book.publisher && book.publisher.length > 30) throw ValidError('издатель должен быть не более 30 символов', 'publisher');
        if (book.publish_year && book.publish_year < 1800) throw ValidError('год публикации быть не более не раньше 1800', 'publish_year');
        if (book.date && moment(book.date) < moment('1800-01-01')) throw ValidError('дата выхода в тираж должен быть не раньше 01.01.1800', 'date');
        return true;
    }
}

const name = 'bookService';
const bookService = angular.module(name, [storageService.name])
    .service(name, BookService);

export default bookService;