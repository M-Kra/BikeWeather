import React, {useEffect} from "react";
import {useMap} from 'react-leaflet'
import L from "leaflet";
import 'leaflet-gpx';

const GPXReview = ({gpxFile}) => {
    const map = useMap();

    useEffect (() => {
        if (gpxFile) {
            const gpx = new L.GPX (gpxFile, {
                async: true,
                marker_options: {
                    startIconUrl: null,
                    endIconUrl: null,
                    shadowUrl: null,
                },
                polyline_options: {
                    color: 'red',
                    weight: 2,
                    opacity: 0.7,
                    lineCap: 'round',
                },
            });
            gpx.on ("loaded", (e) => {
                map.fitBounds (e.target.getBounds ());
            });

            gpx.addTo (map);
        }
    }, [gpxFile, map]);

    return null;

};

export default GPXReview;