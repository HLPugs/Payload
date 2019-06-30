import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import WebFont from 'webfontloader';
import moment from 'moment';

import './style.scss';
import './animations.scss';
import './buttons.scss';
import './formElements.scss';

WebFont.load({
  google: {
    families: ['Lato:400,700']
  }
});

moment.updateLocale('en', {
  calendar: {
    sameDay: 'LT'
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
