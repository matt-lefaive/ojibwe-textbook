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
                    url='/teachers-guide/1'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 2'
                    url='/teachers-guide/2'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 3'
                    url='/teachers-guide/3'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 4'
                    url='/teachers-guide/4'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 5'
                    url='/teachers-guide/5'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 6'
                    url='/teachers-guide/6'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 7'
                    url='/teachers-guide/7'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 8'
                    url='/teachers-guide/8'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 9'
                    url='/teachers-guide/9'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 10'
                    url='/teachers-guide/10'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 11'
                    url='/teachers-guide/11'/>
                <LessonCard
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
                    text='Lesson 12'
                    url='/teachers-guide/12'/>
            </div>
        </div>
    )
}

export default Home;