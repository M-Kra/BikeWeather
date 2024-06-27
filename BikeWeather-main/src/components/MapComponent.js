import React from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import UserLocationPosition from "./UserLocationPosition";
import GPXReview from "./GPXReview";
import "leaflet/dist/leaflet.css";




const MapComponent = ({zoom, center, gpxFile, setElevation}) => {

    return (
        <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {gpxFile && <GPXReview gpxFile={gpxFile} setElevation={setElevation}/> }
            <UserLocationPosition />

        </MapContainer>
    );
};

export default MapComponent;