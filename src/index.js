import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import './components/Main/css/reset.css';
import './components/Main/css/fonts.css';
import './components/Main/css/bootstrap.css';
import './components/Main/css/style.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
