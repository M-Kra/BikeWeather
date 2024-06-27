import {useEffect} from "react";
import {useMap} from 'react-leaflet'
import L from "leaflet";
import 'leaflet-gpx';

const GPXReview = ({gpxFile, setElevation}) => {
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
                map.fitBounds(e.target.getBounds ());
                const totalElevation = e.target.get_elevation_gain();
                if (typeof setElevation === 'function') {
                    setElevation(totalElevation);

                }
            });

            gpx.addTo (map);
        }
    }, [gpxFile, map, setElevation]);

    return null;

};

export default GPXReview;