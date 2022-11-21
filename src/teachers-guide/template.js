import React from 'react';
import Sidebar from '../components/sidebar';
import Lesson1 from './lessons/lesson-1';
import Lesson2 from './lessons/lesson-2';
import Lesson3 from './lessons/lesson-3';
import Lesson4 from './lessons/lesson-4';
import Lesson5 from './lessons/lesson-5';
import Lesson6 from './lessons/lesson-6';

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

    const linksLesson4 = [
        {title: 'Lesson 4', href: null},
        {title: 'Dialogue', href: '4#dialogue'},
        {title: 'Inanimate nouns, and plurals', href: '4#inanimate-nouns-and-plurals'},
        {title: 'Animate nouns, and plurals', href: '4#animate-nouns-and-plurals'},
        {title: 'VTI and VTA verbs, introduction', href: '4#vti-and-vta-verbs-introduction'},
        {title: 'Plural demonstrative pronouns', href: '4#plural-demonstrative-pronouns'},
        {title: 'New VAI and VII verbs', href: '4#new-vai-and-vii-verbs'}
    ];

    const linksLesson5 = [
        {title: 'Lesson 5', href: null},
        {title: 'Dialogue 1', href: '5#dialogue-1'},
        {title: 'Dialogue 2', href: '5#dialogue-2'},
        {title: 'Grammar Notes', href: '5#grammar-notes'},
        {title: 'Notes on Words Used in the Dialog', href: '5#notes-on-words-used-in-the-dialog'},
        {title: 'VTI Forms - Citation Form vs. Conjugated', href: '5#vti-forms-citation-form-vs-conjugated'},
        {title: 'Plural Objects with VTI', href: '5#plural-objects-with-vti'},
        {title: 'VTA Verbs - Citation Form and Conjugations', href: '5#vta-verbs-citation-form-and-conjugations'},
        {title: 'Derived Verbs', href: '5#derived-verbs'},
        {title: 'More VAI Verbs', href: '5#more-vai-verbs'}
    ];

    const linksLesson6 = [
        {title: 'Lesson 6', href: null},
        {title: 'Dialogue', href: '6#dialogue'},
        {title: 'Plural Persons', href: '6#plural-persons'},
        {title: 'Inclusive vs. exclusive “we”', href: '6#inclusive-vs-exclusive-we'},
        {title: 'Verb Prefixes and Suffixes', href: '6#verb-prefixes-and-suffixes'},
        {title: 'Preverbs', href: '6#preverbs'},
        {title: 'More Animate and Inanimate Verb Pairs', href: '6#more-animate-and-inanimate-verb-pairs'}
    ];

    const links = { 
        '1': linksLesson1,
        '2': linksLesson2,
        '3': linksLesson3,
        '4': linksLesson4,
        '5': linksLesson5,
        '6': linksLesson6,
    };

    // Pair is [main, accent]
    const themeColors = {
        '1': ['orange', 'navajowhite'], 
        '2': ['#8967E6', '#CAB2F7'],
        '3': ['#F71B1B', '#F57F7F'],
        '4': ['#B2F252', '#D4F2A7'],
        '5': ['#F7F73B', '#F5F59A'],
        '6': ['#3674F7', '#729EFC'],
    }

    const css = `
        main strong {
            color: ${themeColors[number][0]}
        }

        main em {
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
                                {number === '4' && <Lesson4 colors={themeColors[number]}/>}
                                {number === '5' && <Lesson5 colors={themeColors[number]}/>}
                                {number === '6' && <Lesson6 colors={themeColors[number]}/>}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Lesson;