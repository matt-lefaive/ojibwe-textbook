import React from 'react';
import Sidebar from '../components/sidebar';
import Lesson1 from './lessons/lesson-1';
import Lesson2 from './lessons/lesson-2';
import Lesson3 from './lessons/lesson-3';

const Lesson = ({ number }) => {
    
    const linksLesson1 = [
        {title: 'Lesson 1', href: null}, // text
        {title: 'Dialogue', href: '1#dialogue'}, // link
        {title: 'VAI verbs', href: '1#vai-verbs'},
        {title: 'VII verbs', href: '1#vii-verbs'},
        {title: 'Adverbs', href: '1#adverbs'},
        {title: 'Particles', href: '1#particles'},
        {title: 'Preverbs', href: '1#preverbs'},
        {title: 'Nouns', href: '1#nouns'},
        {title: 'Use of pronouns for emphasis', href: '1#use-of-pronouns-for-emphasis'},
    ];

    const linksLesson2 = [
        {title: 'Lesson 2', href: null},
        {title: 'Dialogue', href: '2#dialogue'},
        {title: 'Person prefixes, in more detail', href: '2#person-prefixes-in-more-detail'},
        {title: 'Nouns for relatives', href: '2#nouns-for-relatives'},
        {title: 'Nouns for body parts', href: '2#nouns-for-body-parts'},
        {title: 'Adverbs', href: '2#adverbs'},
        {title: 'VAI verbs', href: '2#vai-verbs'}
    ]

    const linksLesson3 = [
        {title: 'Lesson 3', href: null},
        {title: 'Dialogue', href: '3#dialogue'},
        {title: 'Inanimate nouns', href: '3#inanimate-nouns'},
        {title: 'VAI verbs', href: '3#vai-verbs'},
        {title: 'VII verbs', href: '3#vii-verbs'},
        {title: 'Demonstrative pronouns', href: '3#demonstrative-pronouns'},
        {title: 'Particles',  href: '3#particles'},
        {title: 'Adverbs', href: '3#adverbs'}
    ]

    const links = { 
        '1': linksLesson1,
        '2': linksLesson2,
        '3': linksLesson3,
    };

    // Pair is [main, accent]
    const themeColors = {
        '1': ['orange', 'navajowhite'], 
        '2': ['#8967E6', '#CAB2F7'],
        '3': ['#F71B1B', '#F57F7F'],
    }

    const css = `
        strong {
            color: ${themeColors[number][0]}
        }

        em {
            color: ${themeColors[number][1]}
        }

        main a {
            color: ${themeColors[number][1]}
        }

        main a:hover {
            color: ${themeColors[number][0]}
        }
    `;

    return (
        <>
            <style>{css}</style>
            <div class='container-fluid'>
                <div class='row flex-nowrap'>
                    <div class='col-auto px-0'>
                        <Sidebar links={links[number]} background={themeColors[number][0]}/>
                    </div>
                    <main class='col ps-md-2 pt-2'>
                        <div class='container lesson-container' style={{padding: '1em 2em 1em 2em'}}>
                            <div class='row'>
                                {number === '1' && <Lesson1 colors={themeColors[number]}/>}
                                {number === '2' && <Lesson2 colors={themeColors[number]}/>}
                                {number === '3' && <Lesson3 colors={themeColors[number]}/>}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Lesson;