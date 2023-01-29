
import multer from 'multer'
import path from 'path'
import { BookService } from '../services/book.service.js'
const bookService = new BookService()

const storage = multer.diskStorage({

    destination: './public/uploads',

    filename: async(req,file,cb)=>{

        const id = await bookService.useGetNewId()

        const type = path.extname(file.originalname)

        const  nameFile="image"+id+".jpg"
        
        if(type===".jpg"||type===".png"){
            cb(null, nameFile)
        }else{
            cb(new Error('No tengo la menor idea!'))
        }
        
    }

}
)

export const upload=multer({storage:storage})