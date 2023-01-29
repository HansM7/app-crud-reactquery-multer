import { BookService } from "../services/book.service.js";

const bookService = new BookService()

export const getBooksController=async(req,res)=>{

    const books = await bookService.getBooksService()

    setTimeout(() => {
        res.json(books)
    }, 2000);
}   

export const getBookController=async(req,res)=>{
    const id = req.params.id
    const book = await bookService.getBookService(+id)
    setTimeout(() => {
        res.json(book)
    }, 2000);
}

export const createBookController=async(req,res)=>{
    const {title,description} = req.body
    const register = await bookService.createBookService({title,description})

    res.json(register)
}

export const updateBookController=async(req,res)=>{

}

export const deleteBookController=async(req,res)=>{
    const deleted = await bookService.deleteBookService(req.params.id)
    res.json(deleted)
}

export const getImageController=async(req,res)=>{
    const id = req.params.id
    res.sendFile("./uploads/image"+id+".jpg",{ root: './public' })
}