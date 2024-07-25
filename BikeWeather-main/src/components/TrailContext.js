import React, { createContext, useState} from "react";

const TrailContext = createContext();

const TrailProvider = ({children}) => {
    const[trail, setTrail] = useState({gpxFile: null, trailName: null, distance: null});

    return (
        <TrailContext.Provider value={{trail, setTrail}} >
            {children}
        </TrailContext.Provider>
    );
};

export {TrailContext, TrailProvider};