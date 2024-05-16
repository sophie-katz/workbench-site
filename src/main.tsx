import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import './main.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DocsLayout from './layouts/DocsLayout';
import FrontPage from './pages/front/FrontPage';
import CreateNewProjectPage from './pages/docs/CreateNewProjectPage';
import ConfigureTasksPage from './pages/docs/ConfigureTasksPage';
import AddDocumentationPage from './pages/docs/AddDocumentationPage';
import CommandLinePage from './pages/docs/CommandLinePage';
import WorkbenchYmlReferencePage from './pages/docs/WorkbenchYmlReferencePage';

const docsPages = [
  {
    title: 'Create a new project',
    slug: 'create-new-project',
    element: <CreateNewProjectPage />,
  },
  {
    title: 'Configure the tasks',
    slug: 'configure-tasks',
    element: <ConfigureTasksPage />,
  },
  {
    title: 'Add documentation',
    slug: 'add-documentation',
    element: <AddDocumentationPage />,
  },
  {
    title: 'Command line',
    slug: 'command-line',
    element: <CommandLinePage />,
  },
  {
    title: 'Configuration file reference',
    slug: 'configuration-file-reference',
    element: <WorkbenchYmlReferencePage />,
  },
];

const router = createHashRouter([
  {
    path: '/',
    element: (
      <MainLayout activeTab="about">
        <FrontPage />
      </MainLayout>
    ),
  },
  ...docsPages.map((item, index) => ({
    path: `/docs/${item.slug}`,
    element: (
      <MainLayout activeTab="docs">
        <DocsLayout links={docsPages} selected={index}>
          {item.element}
        </DocsLayout>
      </MainLayout>
    ),
  })),
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme appearance="dark">
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>,
);
