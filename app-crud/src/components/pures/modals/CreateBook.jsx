
import { useState } from "react"
import { useMutation, useQueryClient } from "react-query"
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import { QueryBook } from "../../../API/bookQuery"

function CreateBook({modalCreate,toggleCreate}) {

    const queryClient = new useQueryClient()

    const queryBook = new QueryBook(queryClient)

    const [data, setData] = useState({
        title:'',
        description:'',
        image:''
    })

    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }


    const handleSubmit=async(e)=>{
        e.preventDefault()

        const formdata = new FormData()

        formdata.append('title', data.title)
        formdata.append('description', data.description)
        formdata.append('image', data.image)

        queryBook.createBookMutation.mutate(formdata)

    }

    return (
        <Modal isOpen={modalCreate} toggle={toggleCreate}>
            <form onSubmit={e=>handleSubmit(e)}>
            <ModalHeader toggle={toggleCreate}>Modal title</ModalHeader>
            <ModalBody>
                <div className="mb-4">
                    <input className="form-control" 
                    type="text" 
                    placeholder="title" 
                    name="title" 
                    onChange={handleChange}
                    value={data.title}
                    />
                </div>
                <div className="mb-4">
                    <input className="form-control" 
                    type="text" 
                    placeholder="description" 
                    name="description" 
                    onChange={handleChange}
                    value={data.description}
                    />
                </div>
                 <div className="mb-4">
                    <input className="form-control" 
                    type="file" 
                    placeholder="" 
                    name="image"
                    onChange={(e)=>{setData({...data,[e.target.name]:e.target.files[0]})}}
                    // value
                    />
                </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggleCreate} type="submit">
                Registrar
            </Button>{' '}
            <Button color="secondary" onClick={toggleCreate}>
                Cancel
            </Button>
            </ModalFooter>
            </form>
        </Modal>
    )
}

export default CreateBook
