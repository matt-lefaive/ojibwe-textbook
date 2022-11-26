import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import './styles/index.css';

import Home from './home';

import TeachersGuideTemplate from './teachers-guide/template';
import TeachersGuideHome from './teachers-guide/home';

import TeachersGuideLesson1 from './teachers-guide/lessons/lesson-1';
import TeachersGuideLesson2 from './teachers-guide/lessons/lesson-2';
import TeachersGuideLesson3 from './teachers-guide/lessons/lesson-3';
import TeachersGuideLesson4 from './teachers-guide/lessons/lesson-4';
import TeachersGuideLesson5 from './teachers-guide/lessons/lesson-5';
import TeachersGuideLesson6 from './teachers-guide/lessons/lesson-6';
import TeachersGuideLesson7 from './teachers-guide/lessons/lesson-7';
import TeachersGuideLesson8 from './teachers-guide/lessons/lesson-8';
import TeachersGuideLesson9 from './teachers-guide/lessons/lesson-9';
import TeachersGuideLesson10 from './teachers-guide/lessons/lesson-10';
import TeachersGuideLesson11 from './teachers-guide/lessons/lesson-11';
import TeachersGuideLesson12 from './teachers-guide/lessons/lesson-12';

// Create Teacher's Guide Children Pages
const teachersGuideChildren = [];


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/teachers-guide-home',
    element: <TeachersGuideHome />
  },
  {
    path: '/teachers-guide/',
    element: <TeachersGuideTemplate />,
    children: [
      {
        path: '1',
        element: <TeachersGuideLesson1 />
      },
      {
        path: '2',
        element: <TeachersGuideLesson2 />
      },
      {
        path: '3',
        element: <TeachersGuideLesson3 />
      },
      {
        path: '4',
        element: <TeachersGuideLesson4 />
      },
      {
        path: '5',
        element: <TeachersGuideLesson5 />
      },
      {
        path: '6',
        element: <TeachersGuideLesson6 />
      },
      {
        path: '7',
        element: <TeachersGuideLesson7 />
      },
      {
        path: '8',
        element: <TeachersGuideLesson8 />
      },
      {
        path: '9',
        element: <TeachersGuideLesson9 />
      },
      {
        path: '10',
        element: <TeachersGuideLesson10 />
      },
      {
        path: '11',
        element: <TeachersGuideLesson11 />
      },
      {
        path: '12',
        element: <TeachersGuideLesson12 />
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
