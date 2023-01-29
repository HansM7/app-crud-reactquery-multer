
import fs from 'fs'

export class BookService{
    
    constructor(){
        const books = fs.readFileSync('db/book.json', 'utf-8')
        const booksJson=JSON.parse(books)
        this.books = booksJson
    }

    async useRegister(data){
        this.books.push(data)
        const dataString=JSON.stringify(this.books)
        fs.writeFileSync('db/book.json', dataString, 'utf-8')
    }

    async useGetNewId(){
        return this.books.length+1
    }

    async getBooksService(){
        return this.books
    }

    async getBookService(id){
        const book = this.books.find(item=>item.id===id)
        return book
    }

    async createBookService(book){
        const id = await this.useGetNewId()
        await this.useRegister({...book,id})
        return {
            success:true
        }
    }

    async updateBookSevice(book,id){

    }

    async deleteBookService(id){
        const dataSet=this.books.filter(book => book.id != id)
        
        const newData=JSON.stringify(dataSet)
        fs.writeFileSync('db/book.json', newData, 'utf-8')

        return {
            success:true
        }
    }

}