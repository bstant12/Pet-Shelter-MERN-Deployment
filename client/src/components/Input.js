import React from 'react';

const Input = ({type, name, label, value, error, handleChange, required}) => {
    const style ={
        color: "red"
    }

    const styles = {
        display: "inline-block"
    }

    return(
        <div>
        <span style={style}>{error ? error : ""}</span>
        <span style={style}>
            {
                required === "true"
                    ? value<3
                        ?<p>{label} must be 3 charcters long</p>
                        :""
                    :  ""
            }
        </span>
        <div className="form-group row ">
            <label style={styles} className="col-5 col-form-label text-right">
            {
                required === "true"
                    ? <p style={styles}>*</p>
                    :""
            }
            {label}: 
            </label>
            <div className="col-6">
                <input
                    className="form-control"
                    type={type}
                    value={value}
                    name={name}
                    onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
        </div>
    )
}

export default Input;