import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import Router from 'Router';
import Providers from 'components/providers/Providers';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Providers>
      <Router />
    </Providers>
  </React.StrictMode>,
);
