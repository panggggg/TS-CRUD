import { Router } from 'express'
import * as booksController from '../controllers/book.controller'

const router: Router = Router()

router.route('/books').get(booksController.getAllBooks)
router.route('/books/:id').get(booksController.getBookById)
router.route('/books').post(booksController.createBook)
router.route('/books/:id').patch(booksController.updateBook)
router.route('/books/:id').delete(booksController.deleteBookById)

export default router