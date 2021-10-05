import React from 'react';
import { useState } from 'react/cjs/react.development';

const Tutor = (props) => {
    const { name, id, email, image, phone, gender } = useState([]);
    return (
        <div>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="container">
                <h4> Name:{name} </h4>
                <h3>No:{phone}</h3>
                <h4>email:{email}</h4>
                <h4>Gender:{gender}</h4>
                <p>ID:{id}</p>
                <br />
                <button
                    onClick={() => props.handleAddToInfo(props.detail)}
                    className="info-button"
                >  Show info</button>
            </div>
        </div>
    );
};

export default Tutor;