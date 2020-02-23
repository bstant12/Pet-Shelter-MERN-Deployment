import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link, navigate} from '@reach/router';

const Details = ({id}) => {
    const [pet, setPet] = useState({});

    const [isLiked, setIsLiked] = useState(false)

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pet/${id}`)
        .then(res => setPet(res.data))
        .catch(err=>navigate('/pets'))
    }, [isLiked])

    const removePet = () => {
        Axios.delete(`http://localhost:8000/api/pet/${id}`)
            .then(res => {
                navigate('/pets')
            })
    }

    var count = pet.likes +1;


    return(
        <div>
            <Link className="btn btn-primary" to="/pets">Go Home</Link>
            <hr/>
            <h1>Details about {pet.name}</h1>
            <br/>
            <h2>TYPE: {pet.type}</h2>
            <br/>
            <h3>DESCRIPTION: {pet.description}</h3>
            <br/>
            {
                !pet.skill_one
                    ?""
                    :<h4>SKILLS:</h4>
            }
            

            <p>{pet.skill_one}</p>
            <p>{pet.skill_two}</p>
            <p>{pet.skill_three}</p>

            <br/>
            <h5>Number of Likes: {pet.likes}</h5>
            <br/>
            {
                count +1> pet.likes

                    ? <button id="like" className="btn btn-primary" onClick={()=>{
                            pet.likes += 1;
                            Axios.put(`http://localhost:8000/api/pet/${id}`, pet)
                                .then(res=>{setIsLiked(true)})
                                
                        }}>LIKE THEM</button>
                    
                    : <button className="btn btn-primary" disabled>Liked</button>
            }
            <br></br>
            <br></br>
            <Link className="btn btn-success" to={`/pets/${id}/edit`}>EDIT</Link>
            <br/>
            <br/>
            <button className="btn btn-danger" onClick={removePet}>ADOPT</button>
        </div>
    )
}

export default Details;