import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link, navigate} from '@reach/router';

const Main = (props) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/pets')
            .then(res => {
                setPets(res.data)
            })
    }, []);

    const removeFromDom = petId => {
        setPets(pets.filter(pet => pet._id !== petId))
    }

    return(
        <div>
            <h3>These pets are looking for a home!</h3>
            <hr/>
            <Link className="btn btn-success" to="/pets/new">Add a pet to the shelter</Link>
            <hr/>
            <table className="mx-auto col-4 table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((p, idx) => {
                            return(
                                <tr>
                                    <td key={idx}><Link to={`/pets/${p._id}`}>{p.name}</Link></td>
                                    <td>{p.type}</td>
                                    <td>
                                        <Link to={`/pets/${p._id}/edit`} className="btn btn-success">Edit</Link>
                                        <button className="btn btn-danger" onClick={() => 
                                        Axios.delete(`http://localhost:8000/api/pet/${p._id}`)
                                            .then(res => {
                                                navigate('/');
                                            })
                                            .then(res => removeFromDom(p._id))
                                    }>DELETE</button>
                                    </td>
                                </tr>
                                
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main;