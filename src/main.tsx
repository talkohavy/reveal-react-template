import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import DarkThemeProvider from './providers/DarkThemeProvider';

import './index.css';

function Client() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <DarkThemeProvider>
          <App />
        </DarkThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

// ReactDOM.createRoot(document.getElementById('root')).render(

// );

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);
root.render(<Client />);
