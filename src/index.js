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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/teachers-guide',
    element: <TeachersGuideHome />
  },
  {
    path: '/teachers-guide/1',
    element: <TeachersGuideTemplate number={'1'}/>
  },
  {
    path: '/teachers-guide/2',
    element: <TeachersGuideTemplate number={'2'}/>
  },
  {
    path: '/teachers-guide/3',
    element: <TeachersGuideTemplate number={'3'}/>
  },
  {
    path: '/teachers-guide/4',
    element: <TeachersGuideTemplate number={'4'}/>
  },
  {
    path: '/teachers-guide/5',
    element: <TeachersGuideTemplate number={'5'}/>
  },
  {
    path: '/teachers-guide/6',
    element: <TeachersGuideTemplate number={'6'}/>
  },
  {
    path: '/teachers-guide/7',
    element: <TeachersGuideTemplate number={'7'}/>
  },
  {
    path: '/teachers-guide/8',
    element: <TeachersGuideTemplate number={'8'}/>
  },
  {
    path: '/teachers-guide/9',
    element: <TeachersGuideTemplate number={'9'}/>
  },
  {
    path: '/teachers-guide/10',
    element: <TeachersGuideTemplate number={'10'}/>
  },
  {
    path: '/teachers-guide/11',
    element: <TeachersGuideTemplate number={'11'}/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
