import React from 'react';
import LessonCard from '../components/lesson-card';

const Home = () => {
    return (
        <div class='container'>
            <h1>Introductory Ojibwe I</h1>
            <div class='cards'>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 1'
                    url='/lesson/1'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 2'
                    url='/lesson/2'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 3'
                    url='/lesson/3'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 4'
                    url='/lesson/4'/>
            </div>
            <div class='cards'>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 5'
                    url='/lesson/5'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 6'
                    url='/lesson/6'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 7'
                    url='/lesson/7'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 8'
                    url='/lesson/8'/>
            </div>
            <div class='cards'>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 9'
                    url='/lesson/9'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 10'
                    url='/lesson/10'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 11'
                    url='/lesson/11'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 12'
                    url='/lesson/12'/>
            </div>
        </div>
    )
}

export default Home;