import { Meteor } from "meteor/meteor";
import React from 'react';
import { HashRouter,  Route, Router , Link , hashHistory, browserHistory, IndexRoute } from 'react-router-dom';
import { render } from 'react-dom';
//Components
import App from '../imports/app.js';
import TusEquipos from '../imports/components/tusEquipos.js';
import Partidos from '../imports/components/partidos.js';
import Videos from '../imports/components/videos.js';

Meteor.startup(() => {
	$('html').attr('lang','es'); 

	render(
	<HashRouter>
		<div>
    	<Route path='/' component={ App } />	
    	<Route path="/tusEquipos" component={ TusEquipos } />
    	<Route path="/partidos" component={ Partidos } />
    	<Route path="/videos" component ={ Videos } />
    	</div>
    </HashRouter>,
     document.getElementById('app')
    );
});
