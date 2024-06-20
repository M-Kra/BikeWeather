import React from "react";
// import { createRouter } from "react-dom/client"
import {
    HashRouter,
    Route,
    Routes,
    // Link,
    // NavLink,
    // Outlet
} from 'react-router-dom';

import {Screen} from './pages/Screen_1/Screen'
import {ScreenTwo} from './pages/Screen_2/ScreenTwo'

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element = {<Screen />} />
                <Route path='../Screen_2/ScreenTwo.js' element = {<ScreenTwo />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
