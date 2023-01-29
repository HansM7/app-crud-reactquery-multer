import { useMutation, useQuery, useQueryClient } from "react-query";
import { getBooks,getBook, deleteBook, createBook, editBook } from "./bookAPI";

export class QueryBook{

    constructor(queryClient){
        this.queryClient = queryClient
    }

    getBooksQuery =()=>{
        const {isLoading,data,isError,error} = useQuery({
            queryKey:['books'],
            queryFn:getBooks
        })
        
        return {
            isLoading,data,isError,error
        }
    }

    createBookMutation = useMutation({
        mutationFn: createBook,
        onSuccess: () => {
            this.queryClient.invalidateQueries("books");
        },  
    })


    deleteBookMutation = useMutation({
        mutationFn:deleteBook,
        onSuccess: ()=>{
            this.queryClient.invalidateQueries("books");
        }
    })

}
