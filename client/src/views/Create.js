import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link, navigate} from '@reach/router';
import Form from '../components/Form';

const Create = (props) => {

    const [newPet, setNewPet] = useState({
        name:"",
        type:"",
        description:"",
        skill_one:"",
        skill_two:"",
        skill_three:"",
    })

    const [errors, setErrors] = useState({
        name:"",
        type:"",
        description:"",
        skill_one:"",
        skill_two:"",
        skill_three:"",
    })

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setNewPet({
            ...newPet,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/pet', newPet)
            .then(res => {
                setNewPet({
                    name:"",
                    type:"",
                    description:"",
                    skill_one:"",
                    skill_two:"",
                    skill_three:"",
                })
                setErrors({
                    name:"",
                    type:"",
                    description:"",
                    skill_one:"",
                    skill_two:"",
                    skill_three:"",
                })
                // .setIsSubmitted(true)
            })
            .then(res => navigate('/pets'))
            .catch(err => setErrors(err.response.data))
    }

    return(
        <div>
            <Link className="btn btn-primary" to="/pets">GO HOME</Link>
            <hr/>
            <h2>Add Pet:</h2>
            <Form
                form={newPet}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
            />
            <br/>
            <Link className="btn btn-warning" to="/pets">Cancel</Link>
        </div>
    )
}

export default Create;