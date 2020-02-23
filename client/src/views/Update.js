import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link, navigate} from '@reach/router';
import Form from '../components/Form';

const Update = ({id}) => {
    const [editPet, setEditPet] = useState({});
    const [errors, setErrors] = useState({
        name:"",
        type:"",
        description:"",
        skill_one:"",
        skill_two:"",
        skill_three:"",
    });

    useEffect(()=> {
        Axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => setEditPet(res.data))
            .catch(err => navigate('/pets'))
    }, []);

    const handleChange = (e) => {
        e.preventDefault();
        setEditPet({
            ...editPet,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/pet/${id}`, editPet)
            .then(res => navigate(`/pets/${id}`))
            .catch(err => setErrors(err.response.data))
    }

    return(
        <div>
            <Link className="btn btn-primary" to="/pets">Go Home</Link>
            <hr/>
            <h2>Edit {editPet.name}</h2>
            <Form
                form={editPet}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
            />
            <br/>
            <Link className="btn btn-warning" to={`/pets/${id}`}>Cancel</Link>
        </div>
    )
}

export default Update;