import React from 'react';
import Sidebar from '../components/sidebar';
import Lesson1 from './lessons/lesson-1';

const Lesson = ({ number }) => {
    const lessons = ['1'];
    const num = lessons.indexOf(number);
    
    const linksLesson1 = [
        {title: 'Lesson 1', href: null}, // text
        {title: 'Dialogue', href: '1#dialogue'}, // link
        {title: 'VAI verbs', href: '1#vai-verbs'},
        {title: 'VII verbs', href: '1#vii-verbs'},
        {title: 'Adverbs', href: '1#adverbs'},
        {title: 'Particles', href: '1#particles'},
        {title: 'Preverbs', href: '1#preverbs'},
        {title: 'Nouns', href: '1#nouns'},
        {title: 'Use of pronouns for emphasis', href: '1#use-of-pronouns-for-emphases'},
    ]

    const links = [ 
        linksLesson1, linksLesson1, linksLesson1
    ];

    // Pair is [main, accent]
    const themeColors = [
        ['orange', 'navajowhite'], //1
    ]

    return (
        <div class='container-fluid'>
            <div class='row flex-nowrap'>
                <div class='col-auto px-0'>
                    <Sidebar links={links[num]} background={themeColors[num][0]}/>
                </div>
                <main class='col ps-md-2 pt-2'>
                    <div class='container lesson-container' style={{padding: '1em 2em 1em 2em'}}>
                        <div class='row'>
                            {number === '1a' && <Lesson1 colors={themeColors[num]}/>}
                        </div>
                    </div>
                    
                </main>
            </div>
        </div>
    )
}

export default Lesson;