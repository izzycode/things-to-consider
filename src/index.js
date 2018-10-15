import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
