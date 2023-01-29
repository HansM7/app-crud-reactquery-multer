// import { getBooksQuery } from "../../API/bookQuery"

import { useEffect, useState } from "react"
import { useQueryClient } from "react-query"
import { QueryBook } from "../../API/bookQuery"



function DataBook() {
    
    const queryClient = new useQueryClient()

    const queryBook = new QueryBook(queryClient)

    const {isLoading,data,isError,error} = queryBook.getBooksQuery()

    const [alerts, setAlerts] = useState({
        register:false,
        delete:false,
        edit:false
    })

    const handleDelete =(id)=>{
        queryBook.deleteBookMutation.mutate(id)
        setAlerts({delete:true})
    }

    console.log(isLoading)

    // const handleChangeAlerts=()=>{
    //     set
    // }

    // useEffect(() => {
    //     if()
    // }, [isLoading])
    


    return (
        <>
            <div>
                {
                    (isLoading)?<div className="alert alert-warning">Espere un momento...</div>:""
                }
                
            </div>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                

                {
                    (!isLoading)?data.map(item=>(
                        
                        <div className="col" key={item.id}>
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h5 className="my-0 fw-normal">{item.title}</h5>
                                </div>
                                <div >
                                    <div className="row  d-flex justify-content-center">
                                        <img className="d-flex justify-content-center"  width={"200"} height={"250"} src={`http://localhost:3000/image/${item.id}`} alt="" />
                                    </div>
                                    <div className="row  d-flex justify-content-center">
                                        <p>{item.description}</p>
                                    </div>
                                    
                                    <div className="d-flex justify-content-between p-2">
                                        <button type="button" className="w-100 btn btn-danger" onClick={e=>handleDelete(item.id)} >Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )):""
                }

                

            </div>
            
        </>
    )
}

export default DataBook