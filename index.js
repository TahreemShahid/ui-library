import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Library exports
export { default as Button } from './components/Button/Button';
export { default as Card } from './components/Card/Card';
export { default as Modal } from './components/Modal/Modal';

// Demo render (only runs if this file is the entry point)
if (document.getElementById('root')) {
  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
} 