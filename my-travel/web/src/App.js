import React from 'react';

import './theme/bootstrap.scss';

import MainHeader from './components/MainHeader';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';

export default function App() {

	return (
		<div>
			<MainHeader />
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</div>
	);	
	
}