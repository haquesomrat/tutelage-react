import React from 'react';
import './Course.css';

const Course = (props) => {
    const { name, id, corimg, subject } = props.course;
    return (
        <div className='course-container'>
            <div className="course-pic">
                <img src={corimg} alt="" />
            </div>
            <div className='course-details'>
                <h2>Course Name:{subject}</h2>
                <h3>Tutor Name:{name}</h3>
            </div>
        </div>
    );
};

export default Course;