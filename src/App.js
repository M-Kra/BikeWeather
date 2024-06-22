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
import ScreenTwo from '../src/pages/Screen_2/ScreenTwo';
import ScreenThree from '../src/pages/Screen_3/ScreenThree';

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element = {<Screen />} />
                <Route path='/screen-two' element = {<ScreenTwo />} />
                <Route path='/screen-three' element = {<ScreenThree />} />
            </Routes>
        </HashRouter>
    );

}
export default App;