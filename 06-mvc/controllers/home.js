import Book from '../models/book.js';

const homeControllers = {
    getBooks: (req, res) => {
        res.render('home', {
            title: 'Book',
            path: '/',
            books: Book.getBooks()
        });
    },
    getBook: (req, res) => {
        const { id } = req.params;
        res.render('book', {
            id: id,
            title: 'Book',
            path: '/book',
            book: Book.getBookById(id)
        });
    },
    deleteBook: (req, res) => {
        const { id } = req.params;
        res.render('book', {
            id: id,
            title: 'Book',
            path: '/book',
            book: Book.deleteBook(id)
        });
    },
    addBook: (req, res) => {
        const { title } = req.body;
        if (!title) {
            return res.status(400).json({ error: 'Title is required' });
        }
        const newBook = new Book(title);

        newBook.addBook();
        res.status(201).json({
            message: 'Book added successfully',
            book: newBook
        });
    }
};

export default homeControllers;
