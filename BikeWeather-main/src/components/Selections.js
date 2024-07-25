import React, {useState} from "react";

const Selections = ({setLocation, setBike, setSkills}) => {
    const [expandedButton, setExpandedButton] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({
        location: null,
        bike: null,
        skills: null,
        });

    const handleSelected = (key, value) => {
        if (key === 'location') setLocation(value);
        if (key === 'bike') setBike(value);
        if (key === "skills") setSkills(value);

        setSelectedOptions (prevState => ({
            ...prevState,
                [key]: value
        }));
        setExpandedButton(null);
    };
    const toggleDropdown = (buttonId) => {
        setExpandedButton(expandedButton === buttonId ? null : buttonId);
    };
    const options = {
        location: ['swieradow', 'N/A', 'N/A'],
        bike: ['gravel', 'trail', 'enduro'],
        skills: ['beginner', 'intermediate', 'advanced']
    };
    return {
        toggleDropdown, handleSelected, selectedOptions, expandedButton, options };
};

export default Selections;