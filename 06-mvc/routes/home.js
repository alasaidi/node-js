import express from 'express';

import homeControllers from '../controllers/home.js';

const router = express.Router();

// add new book
router.post('/add', homeControllers.addBook);

// get books
router.get('/', homeControllers.getBooks);
router.get('/:id', homeControllers.getBook);

// Delete books
router.delete('/:id', homeControllers.deleteBook);
export default router;
