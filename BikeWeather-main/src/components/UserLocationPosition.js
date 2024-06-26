import React, {useEffect, useState} from "react";
import { Marker, Popup, useMapEvent} from "react-leaflet";

const UserLocationPosition = () => {
    const [position, setPosition] = useState(null);
    const map = useMapEvent('locationfound', (event) => {
        setPosition(event.latlng);
        map.flyTo(event.latlng, map.getZoom());
    });

    useEffect (() => {
        map.locate ({ setView: true, maxZoom: 15 });
    }, [map]);

    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    );
};

export default UserLocationPosition;