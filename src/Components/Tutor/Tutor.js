import React from 'react';
import './Tutor.css';

const Tutor = (props) => {
    const { name, id, email, image, phone, gender } = props.tutor;
    console.log(props)
    return (
        <div className="tutor-container">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="container">
                <h4> Name:{name} </h4>
                <h3>Contact:{phone}</h3>
                <h4>email:{email}</h4>
                <h4>Gender:{gender}</h4>
                <p>ID:{id}</p>
            </div>
        </div>
    );
};

export default Tutor;