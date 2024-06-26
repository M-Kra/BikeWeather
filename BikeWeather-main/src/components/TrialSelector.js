const gpxFiles = {
    'swieradow':{
        'gravel':{
            'beginner': {file:require('../elements/gpx/s_g_b.gpx'), distance: 21.11, trailName:"Misiek"},
            'intermediate': {file:require('../elements/gpx/s_g_i.gpx'), distance: 24.32, trailName:"Wilk" },
            'advanced': {file:require('../elements/gpx/s_g_a.gpx'), distance: 51.64, trailName:"Anakonda" },
        },

        'trail':{
            'beginner': {file:require('../elements/gpx/s_t_b.gpx'), distance: 13.36, trailName:"Sikorka" },
            'intermediate':{file:require('../elements/gpx/s_t_i.gpx'), distance: 23.13, trailName:"Sowa" },
            'advanced': {file:require('../elements/gpx/s_t_a.gpx'), distance: 38.07, trailName: "Predator" },
        },

        'enduro':{
            'beginner': {file:require('../elements/gpx/s_e_b.gpx'), distance: 14.59, trailName:"Kojot" },
            'intermediate': {file:require('../elements/gpx/s_e_i.gpx'), distance: 18.4, trailName:"Kocur" },
            'advanced': {file:require('../elements/gpx/s_e_a.gpx'), distance: 23.30, trailName: "Dzik" }
        },
    },

    //michalowice its//
}

const getSelectedTrial = (location, bike, skills) => {
    if (!location || !bike || !skills) {
        return null;
    }
    return gpxFiles[location]?.[bike]?.[skills] || null;
}

export {getSelectedTrial};