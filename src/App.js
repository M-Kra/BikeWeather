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

function App () {
    //routing//
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element = {<Screen/>}/>
                <Route path='/ScreenTwo/:buttonID/:options' element ={<ScreenTwo/>}/>
            </Routes>
        </HashRouter>
    // <div className={"App"}>
    //     <Screen/>
    // </div>
    );
}

// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<App/>);
export default App;
