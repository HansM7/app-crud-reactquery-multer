import React, { useState } from 'react'
import { Button } from 'reactstrap';
import DataBook from '../pures/DataBook'
import CreateBook from '../pures/modals/CreateBook';


function Home() {

    const [modalCreate, setModalcreate] = useState(false);

    const toggleCreate = () => setModalcreate(!modalCreate);

    return (
        <>
            <div className="container py-3">
                <header>
                    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                        
                        <div>
                            
                            <span className="fs-4">CRUD REACT-QUERY NODEJS MULTER</span>

                        </div>
                        

                        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                            <Button color='primary' onClick={toggleCreate}>Agregar</Button>
                        </nav>
                
                    </div>
                </header>
                
                <main>
                    
                    <DataBook/>
            
                </main>
            
            </div>

            <CreateBook
                modalCreate={modalCreate}
                toggleCreate={toggleCreate}
            />
        </>
    )
}

export default Home