import express from 'express'
import { createBookController, 
    deleteBookController, 
    getBookController, 
    getBooksController, 
    getImageController, 
    updateBookController} 
from '../controllers/book.controller.js'

import { upload } from './book.middleware.js'


const route = express.Router()

route.get('/books',getBooksController)

route.get('/books/:id',getBookController)

route.get('/image/:id',getImageController)

route.post('/books',upload.single('image'),createBookController)

route.patch('/books/:id',updateBookController)

route.delete('/books/:id',deleteBookController)


export default route