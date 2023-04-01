import React from 'react';
import LessonCard from '../components/lesson-card';

import Apple from '../svg/Apple';
import Bag from '../svg/Bag';
import Glasses from '../svg/Glasses';
import Handshake from '../svg/Handshake';
import House from '../svg/House';
import Movie from '../svg/Movie';
import Music from '../svg/Music';
import Plate from '../svg/Plate';
import Shoe from '../svg/Shoe';
import Tea from '../svg/Tea';
import Television from '../svg/Television';
import Tree from '../svg/Tree';

const Home = () => {
    const HOME_URL = '/ojibwe-textbook';
    
    return (
        <>
            <div className='container'>
                <h1 style={{marginTop: '1em'}}>Introductory Ojibwe I</h1>
                <div className='cards'>
                    <LessonCard
                        text='Lesson 1'
                        url={`${HOME_URL}/lesson/1`}
                        image={<Apple />}    
                    />
                    <LessonCard
                        text='Lesson 2'
                        url={`${HOME_URL}/lesson/2`}
                        image={<House />}
                    />
                    <LessonCard
                        text='Lesson 3'
                        url={`${HOME_URL}/lesson/3`}
                        image={<Tea />}    
                    />
                    <LessonCard
                        text='Lesson 4'
                        url={`${HOME_URL}/lesson/4`}
                        image={<Bag />}    
                    />
                    <LessonCard
                        text='Lesson 5'
                        url={`${HOME_URL}/lesson/5`}
                        image={<Movie />}
                    />
                    <LessonCard
                        text='Lesson 6'
                        url={`${HOME_URL}/lesson/6`}
                        image={<Tree />}    
                    />
                    <LessonCard
                        text='Lesson 7'
                        url={`${HOME_URL}/lesson/7`}
                        image={<Music />}
                    />
                    <LessonCard
                        text='Lesson 8'
                        url={`${HOME_URL}/lesson/8`}
                        image={<Plate />}
                    />
                    <LessonCard
                        text='Lesson 9'
                        url={`${HOME_URL}/lesson/9`}
                        image={<Shoe />}
                    />
                    <LessonCard
                        text='Lesson 10'
                        url={`${HOME_URL}/lesson/10`}
                        image={<Glasses />}
                    />
                    <LessonCard
                        text='Lesson 11'
                        url={`${HOME_URL}/lesson/11`}
                        image={<Television />}    
                    />
                    <LessonCard
                        text='Lesson 12'
                        url={`${HOME_URL}/lesson/12`}
                        image={<Handshake />}    
                    />
                </div>
            </div>
        </>
    )
}

export default Home;