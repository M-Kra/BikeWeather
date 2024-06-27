import {useEffect} from "react";
import {useMap} from 'react-leaflet'
import L from "leaflet";
import 'leaflet-gpx';

const GPXReview = ({gpxFile, setElevationData, setCoordinates}) => {
    const map = useMap();

    useEffect (() => {
        if (gpxFile) {
            console.log('loading gpx', gpxFile);
            const gpx = new L.GPX(gpxFile, {
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
                const elevationGain =e.target.get_elevation_gain()
                if (typeof setElevationData === 'function') {
                    setElevationData({elevationGain});
                } else {
                    console.error('setElevationData is not a function? undefined?', setElevationData)
                }
                const center = e.target.getBounds().getCenter();
                if (typeof setCoordinates === 'function') {
                    setCoordinates({lat:center.lat, lng: center.lng});
                }
            });

            gpx.on('error', (error) =>{
                console.error("gpx loading failed", error)
            })

            gpx.addTo (map);
        }
    }, [gpxFile, map, setElevationData, setCoordinates]);

    return null;

};

export default GPXReview;