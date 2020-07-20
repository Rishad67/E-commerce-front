import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ScrollOut from "scroll-out";

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ScrollOut({
  targets: ".swing-left,.swing-right",
});