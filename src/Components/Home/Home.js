import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Home.css';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/edu.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <>
            <div className="headline">
                <h1>Classes</h1>
            </div>
            <div className="courses-container">
                <div>
                    {
                        courses.map(course => <Course
                            key={course.key}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;