import React, { useEffect, useState } from 'react';
import Tutor from '../Tutor/Tutor';
import './Tutors.css';

const Tutors = () => {
    const [tutors, setTutors] = useState([]);
    useEffect(() => {
        fetch('/edu.JSON')
            .then(res => res.json())
            .then(data => setTutors(data));
    }, []);
    return (
        <div>
            <div>
                {
                    tutors.map(tutor => <Tutor
                        key={tutor.key}
                        tutor={tutor}
                    ></Tutor>)
                }
            </div>
        </div>
    );
};

export default Tutors;