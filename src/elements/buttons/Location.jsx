import React from "react";
import "../../pages/Screen_1/Screen.module.css";

export const  Location = ({className}) => {
    return (
        <button className={`location ${className}`}>
            <div className= "button-default">
                <div className='text-wrapper'>
                    LOCATION
                </div>
            </div>
        </button>
    );
};

export default Location;