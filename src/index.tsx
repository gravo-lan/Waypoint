import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { default as App } from './App';
import './resets.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
