import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Course from '../Course/Course';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/edu.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <>
            <div className="search-courses">

            </div>
            <div className="course-container">
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