import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Base from './styles/elements/base';
import Reset from './styles/generic/reset';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Base />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
