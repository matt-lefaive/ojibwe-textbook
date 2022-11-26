import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import PageButtons from '../components/page-buttons';

import Lesson1 from './lessons/lesson-1';
import Lesson2 from './lessons/lesson-2';
import Lesson3 from './lessons/lesson-3';
import Lesson4 from './lessons/lesson-4';
import Lesson5 from './lessons/lesson-5';
import Lesson6 from './lessons/lesson-6';
import Lesson7 from './lessons/lesson-7';
import Lesson8 from './lessons/lesson-8';
import Lesson9 from './lessons/lesson-9';
import Lesson10 from './lessons/lesson-10';
import Lesson11 from './lessons/lesson-11';
import Lesson12 from './lessons/lesson-12';

const Lesson = () => {
    const { number } = useParams();

    const lessonOrder = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    const nextLesson = number === lessonOrder[lessonOrder.length - 1] ? '1' : lessonOrder[lessonOrder.indexOf(number) + 1];
    const prevLesson = number === lessonOrder[0] ? '1' : lessonOrder[lessonOrder.indexOf(number) - 1];

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
    ];

    const linksLesson3 = [
        {title: 'Lesson 3', href: null},
        {title: 'Dialogue', href: '3#dialogue'},
        {title: 'Inanimate nouns', href: '3#inanimate-nouns'},
        {title: 'VAI verbs', href: '3#vai-verbs'},
        {title: 'VII verbs', href: '3#vii-verbs'},
        {title: 'Demonstrative pronouns', href: '3#demonstrative-pronouns'},
        {title: 'Particles',  href: '3#particles'},
        {title: 'Adverbs', href: '3#adverbs'}
    ];

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

    const linksLesson7 = [
        {title: 'Lesson 7', href: null},
        {title: 'Dialogue', href: '7#dialogue'},
        {title: 'Towards a Full Verb Chart', href: '7#towards-a-full-verb-chart'},
        {title: 'Obviative', href: '7#obviative'},
        {title: 'Indefinite or “Someone” Form', href: '7#indefinite-or-someone-form'},
        {title: 'Other Verb Forms Used in the Dialog', href: '7#other-verb-forms-used-in-the-dialog'},
        {title: 'Direct vs. Indirect Objects', href: '7#direct-vs-indirect-objects'}
    ];

    const linksLesson8 = [
        {title: 'Lesson 8', href: null},
        {title: 'Dialogue', href: '8#dialogue'},
        {title: 'Negative Verb Forms', href: '8#negative-verb-forms'},
        {title: 'Paired VAI and VTI Verbs', href: '8#paired-vai-and-vti-verbs'},
        {title: 'Conjunct Form', href: 'conjunct-form'},
        {title: 'Expressions in the Dialog', href: '8#expressions-in-the-dialogue'}
    ];

    const linksLesson9 = [
        {title: 'Lesson 9', href: null},
        {title: 'Dialogue', href: '9#dialogue'},
        {title: 'Full Verb Charts', href: '9#full-verb-charts'},
        {title: 'The Obviative for VII', href: '9#the-obviative-for-vii'},
        {title: 'Obviative Plural for Inanimates', href: '9#obviative-plural-for-inanimates'},
        {title: 'VII Verbs Tied to Object Properties', href: '9#vii-verbs-tied-to-object-properties'},
        {title: 'Participles', href: '9#participles'},
        {title: 'Changed Conjunct in Question', href: '9#changed-conjunct-in-question'}
    ];

    const linksLesson10 = [
        {title: 'Lesson 10', href: null},
        {title: 'Dialogue', href: '10#dialogue'},
        {title: 'A Full VTI Chart', href: '10#a-full-vti-chart'},
        {title: 'Miscellaneous Things from the Dialog', href: '10#miscellaneous-things-from-the-dialog'}
    ];

    const linksLesson11 = [
        {title: 'Lesson 11', href: null},
        {title: 'Dialogue', href: '11#dialogue'},
        {title: 'More VTI Verbs', href: '11#more-vti-verbs'},
        {title: 'Conjunct Forms in the Dialog', href: '11#conjunct-forms-in-the-dialog'},
        {title: 'Usage of Conjunct Forms', href: '11#usage-of-conjunct-forms'},
        {title: 'Related Words', href: '11#related-words'}
    ];

    const linksLesson12 = [
        {title: 'Lesson 12', href: null},
        {title: 'Dialogue', href: '12#dialogue'},
        {title: 'Grammar', href: '12#grammar'}
    ];

    const links = { 
        '1': linksLesson1,
        '2': linksLesson2,
        '3': linksLesson3,
        '4': linksLesson4,
        '5': linksLesson5,
        '6': linksLesson6,
        '7': linksLesson7,
        '8': linksLesson8,
        '9': linksLesson9,
        '10': linksLesson10,
        '11': linksLesson11,
        '12': linksLesson12
    };

    // Pair is [main, accent]
    const themeColors = {
        '1': ['orange', 'navajowhite'], 
        '2': ['#8967E6', '#CAB2F7'],
        '3': ['#F71B1B', '#F57F7F'],
        '4': ['#B2F252', '#D4F2A7'],
        '5': ['#F7F73B', '#F5F59A'],
        '6': ['#3674F7', '#729EFC'],
        '7': ['#DE29F2', '#E88AF2'],
        '8': ['#1DDCF5', '#9EEDF7'],
        '9': ['#E5F227', '#E7ED95'],
        '10': ['#f211d0', '#FC9AEE'],
        '11': ['#EBC21E', '#F5E08C'],
        '12': ['#1DF2AB', '#A7FADE']
    };


    // Build pagination object for prev/next buttons
    const pagination = {};
    for (let i = 0; i < lessonOrder.length; i++) {
        pagination[lessonOrder[i]] = {
            prev: i === 0 ? null : {
                href: `/teachers-guide/${lessonOrder[i-1]}`, 
                text: `← Lesson ${lessonOrder[i-1]}`
            },
            next: i === lessonOrder.length - 1 ? null : {
                href: `/teachers-guide/${lessonOrder[i+1]}`, 
                text: `Lesson ${lessonOrder[i+1]} →`
            }
        }
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

        .lesson-circle {
            border: 5px solid ${themeColors[number][1]}
        }

        .page-button-container a {
            color: white;
            border: 2px solid white;
            border-radius: 5px;
            padding: 1em 2em;
            text-decoration: none;
            transition: background-color 0.2s ease, color 0.2s ease;
        }

        .next-button:hover {
            background-color: ${themeColors[nextLesson][0]};
            color: #2C2F33 !important;
        }

        .prev-button:hover {
            background-color: ${themeColors[prevLesson][0]};
            color: #2C2F33 !important;
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
                                {number === '1' && <Lesson1 />}
                                {number === '2' && <Lesson2 />}
                                {number === '3' && <Lesson3 />}
                                {number === '4' && <Lesson4 />}
                                {number === '5' && <Lesson5 />}
                                {number === '6' && <Lesson6 />}
                                {number === '7' && <Lesson7 />}
                                {number === '8' && <Lesson8 />}
                                {number === '9' && <Lesson9 />}
                                {number === '10' && <Lesson10 />}
                                {number === '11' && <Lesson11 />}
                                {number === '12' && <Lesson12 />}
                                {<PageButtons prev={pagination?.[number]?.prev} next={pagination?.[number]?.next}/>}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Lesson;