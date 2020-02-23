import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link, navigate} from '@reach/router';
import Input from './Input';

const Form = ({handleChange, handleSubmit, form, errors}) => {

    return(
        <form className="col-8 mx-auto" onSubmit={(e) => handleSubmit(e)}>
            <i>* Required</i>
            <br/><br/>
            <Input
                type="text"
                name="name"
                label="Name"
                handleChange={handleChange}
                value={form.name}
                error={errors.name != null ? errors.name.message : ""}
                required = "true"
            />
            <Input
                type="text"
                name="type"
                label="Tpye of Animal"
                handleChange={handleChange}
                value={form.type}
                error={errors.type != null ? errors.type.message : ""}
                required = "true"
            />
            <Input
                type="text"
                name="description"
                label="Description"
                handleChange={handleChange}
                value={form.description}
                error={errors.description != null ? errors.description.message : ""}
                required = "true"
            />
            <Input
                type="text"
                name="skill_one"
                label="Skill One"
                handleChange={handleChange}
                value={form.skill_one}
                error={errors.skill_one != null ? errors.skill_one.message : ""}
                required = "false"
            />
            <Input
                type="text"
                name="skill_two"
                label="Skill two"
                handleChange={handleChange}
                value={form.skill_two}
                error={errors.skill_two != null ? errors.skill_two.message : ""}
                required = "false"
            /><Input
                type="text"
                name="skill_three"
                label="Skill Three"
                handleChange={handleChange}
                value={form.skill_three}
                error={errors.skill_three != null ? errors.skill_three.message : ""}
                required = "false"
            />

            <input className="btn btn-success" type="submit" value="Submit" />
            
        </form>
    )
}

export default Form;