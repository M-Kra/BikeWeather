import React, {useState} from "react";
import {HashRouter, Route, Routes} from 'react-router-dom';
import Screen from '../src/pages/Screen_1/Screen';
import ScreenTwo from '../src/pages/Screen_2/ScreenTwo';
import ScreenThree from '../src/pages/Screen_3/ScreenThree';
import MapComponent from '../src/components/MapComponent'

function App() {

    const [location, setLocation] = useState(null);
    const [bike, setBike] = useState(null);
    const [skills, setSkills] = useState(null);

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element = {<Screen setLocation={setLocation} setBike={setBike} setSkills={setSkills} />} />
                <Route path='/screen-two' element = {<ScreenTwo location={location} bike={bike} skills={skills} />} />
                <Route path='/screen-three' element = {<ScreenThree />} />
                <Route path='/map-component' element={<MapComponent center={[50.910827, 15.349617]} zoom={10} />} />
            </Routes>
        </HashRouter>
    );

}
export default App;