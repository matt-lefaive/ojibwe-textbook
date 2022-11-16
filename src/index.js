import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import './styles/index.css';

import TeachersGuideHome from './teachers-guide/home';
import TeachersGuideTemplate from './teachers-guide/template';

const router = createBrowserRouter([
  {
    path: '/teachers-guide',
    element: <TeachersGuideHome />
  },
  {
    path: '/teachers-guide/1',
    element: <TeachersGuideTemplate number={'1'}/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
