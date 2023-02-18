import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import './styles/index.css';

import LessonTemplate from './pages/template';
import Home from './pages/home';

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


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/lesson/',
    element: <LessonTemplate />,
    children: [
      {
        path: '1',
        element: <Lesson1 />
      },
      {
        path: '2',
        element: <Lesson2 />
      },
      {
        path: '3',
        element: <Lesson3 />
      },
      {
        path: '4',
        element: <Lesson4 />
      },
      {
        path: '5',
        element: <Lesson5 />
      },
      {
        path: '6',
        element: <Lesson6 />
      },
      {
        path: '7',
        element: <Lesson7 />
      },
      {
        path: '8',
        element: <Lesson8 />
      },
      {
        path: '9',
        element: <Lesson9 />
      },
      {
        path: '10',
        element: <Lesson10 />
      },
      {
        path: '11',
        element: <Lesson11 />
      },
      {
        path: '12',
        element: <Lesson12 />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
