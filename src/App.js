import React from "react";
import {
    HashRouter,
    Route,
    Routes,
    // Link,
    // NavLink,
    // Outlet
} from 'react-router-dom';
import {Screen} from '../src/pages/Screen_1/Screen';
import {ScreenTwo} from '../src/pages/Screen_2/ScreenTwo';

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element = {<Screen />} />
                <Route path='/screen-two' element = {<ScreenTwo />} />
            </Routes>
        </HashRouter>
    );

}
export default App;