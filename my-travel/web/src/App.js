import React from 'react';

import MainHeader from './components/MainHeader';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';


function App() {

    return (
        <div>
            <MainHeader />
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </div>
    );

}

export default App;