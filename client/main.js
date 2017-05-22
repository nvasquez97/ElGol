import { Meteor } from "meteor/meteor";
import React from 'react';
import { HashRouter,  Route, Router , Link , hashHistory, browserHistory, IndexRoute } from 'react-router-dom';
import { render } from 'react-dom';
//Components
import App from '../imports/app.js';
import TusEquipos from '../imports/components/tusEquipos.js';

Meteor.startup(() => {
	$('html').attr('lang','es'); 

	render(
	<HashRouter>
		<div>
    	<Route path='/' component={ App } />	
    	<Route path="/tusEquipos" component={ TusEquipos } />
    	</div>
    </HashRouter>,
     document.getElementById('app')
    );
});
