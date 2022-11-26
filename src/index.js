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


// Create Teacher's Guide Children Pages


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
    path: '/teachers-guide/:number',
    element: <TeachersGuideTemplate />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
