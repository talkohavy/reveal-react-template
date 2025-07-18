import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import './common/styles/themes/vscode-dark.css';

// import './common/styles/themes/monokai.css';
// import './common/styles/themes/1c-light.css';
// import './common/styles/themes/a11y-light.css';
// import './common/styles/themes/agate.css';
// import './common/styles/themes/an-old-hope.css';
// import './common/styles/themes/andriodstudio.css';
// import './common/styles/themes/arta.css';
// import './common/styles/themes/atom-one-dark-reasonable.css';
// import './common/styles/themes/github-dark-dimmed.css';
// import './common/styles/themes/github-dark.css';
// import './common/styles/themes/github-light.css';

function Client() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);
root.render(<Client />);
