import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
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
    const number = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

    const lessonOrder = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    const nextLesson = number === lessonOrder[lessonOrder.length - 1] ? '1' : lessonOrder[lessonOrder.indexOf(number) + 1];
    const prevLesson = number === lessonOrder[0] ? '1' : lessonOrder[lessonOrder.indexOf(number) - 1];

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

    /*
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

        .next-button:hover {
            background-color: ${themeColors[nextLesson][0]};
            color: #2C2F33 !important;
        }

        .prev-button:hover {
            background-color: ${themeColors[prevLesson][0]};
            color: #2C2F33 !important;
        }
    `;*/

    return (
        <div class='container-fluid'>
            <div class='row flex-nowrap'>
                <Outlet />
            </div>
        </div>
    )
}

export default Lesson;