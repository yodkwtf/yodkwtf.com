import React from 'react';
import { hydrate, render } from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import { AppProvider } from './context';
import { HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <HelmetProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </HelmetProvider>
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <HelmetProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </HelmetProvider>
    </React.StrictMode>,
    rootElement
  );
}
