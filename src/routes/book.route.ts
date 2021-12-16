import {Router} from 'express'
import * as booksController from '../controllers/book.controller'

const router: Router = Router()

router.route('/books').get(booksController.getAllBooks)
router.route('/books').post(booksController.createBook)

export default router