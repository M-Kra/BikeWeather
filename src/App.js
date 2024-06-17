import React from "react";
import style from '../src/pages/Screen_1/Screen.module.css';
import { createRoot } from "react-dom/client";
import {HashRouter, Route, Routes, Link, NavLink, Outlet} from 'react-router-dom';
import {Screen} from './pages/Screen_1'

const App = () => {
    return (
    <>
        <HashRouter>
            <Routes>
                <Route path='/' element={<Screen />} />
            </Routes>
        </HashRouter>
    </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
export default App;
