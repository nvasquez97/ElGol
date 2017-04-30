import { Meteor } from "meteor/meteor";
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../imports/app.js';

Meteor.startup(() => {
  ReactDOM.render(<App/>, document.querySelector('.app'));
});
