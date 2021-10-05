import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Tutor from '../Tutor/Tutor';

const Tutors = (props) => {
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