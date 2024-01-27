import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../src/style.css';
import ContextProvider from './components/context/Shopcontext';

const root = document.querySelector('#root');
const rootInstance = createRoot(root);

rootInstance.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
