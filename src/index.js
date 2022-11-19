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
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
