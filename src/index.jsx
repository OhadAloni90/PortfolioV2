import Plausible from 'plausible-tracker';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';
import './i18n';
import ScrollToTop from './app/helpers/ScrollToTop ';



render(
	<React.StrictMode>
		<Router>
			<ScrollToTop/>
			<App/>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
  );
  

serviceWorker.unregister();
