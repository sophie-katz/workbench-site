import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import './main.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import FrontPage from './pages/front/FrontPage';
import DocsPage from './pages/docs/DocsPage';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <MainLayout activeTab="about">
        <FrontPage />
      </MainLayout>
    ),
  },
  {
    path: '/docs',
    element: (
      <MainLayout activeTab="docs">
        <DocsPage />
      </MainLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme appearance="dark" style={{ background: 'var(--gray-4)' }}>
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>,
);
